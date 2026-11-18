const { onDocumentUpdated } = require('firebase-functions/v2/firestore');
const { onCall, HttpsError } = require('firebase-functions/v2/https');
const { setGlobalOptions } = require('firebase-functions/v2');
const { defineSecret } = require('firebase-functions/params');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const admin = require('firebase-admin');
const axios = require('axios');

admin.initializeApp();
const db = admin.firestore();

// 定義 GCP Secret Manager 中的 Secrets
const lineChannelAccessToken = defineSecret('LINE_CHANNEL_ACCESS_TOKEN');
const lineUserId = defineSecret('LINE_USER_ID');
const geminiApiKey = defineSecret('GEMINI_API_KEY');
// Google Chat incoming webhook（免費、無則數上限）：一般事件只發 Chat，LINE 只留給重要告警
const googleChatWebhook = defineSecret('GOOGLE_CHAT_WEBHOOK_URL');

// 部署至亞太區域
setGlobalOptions({ region: 'asia-northeast1' });

// ─── 管理員驗證：email 白名單（優先）+ Custom Claims（備用）──────────────
const ADMIN_EMAILS = [
    'ipad@mail2.smes.tyc.edu.tw',
    'cagooo@gmail.com', // 開發者備用
];

async function checkAdmin(request) {
    if (!request.auth) throw new HttpsError('unauthenticated', '請先登入。');
    const email = request.auth.token?.email || '';
    if (ADMIN_EMAILS.includes(email)) return;
    try {
        const snap = await db.doc('config/admins').get();
        if (snap.exists) {
            const emails = snap.data().emails || [];
            if (emails.includes(email)) return;
        }
    } catch (_) { }
    const user = await admin.auth().getUser(request.auth.uid);
    if (user.customClaims?.admin !== true) {
        throw new HttpsError('permission-denied', '僅限管理員。');
    }
}

// ─── askGemini：前端 Callable，安全呼叫 Gemini API ───────────────────────────
exports.askGemini = onCall(
    { secrets: [geminiApiKey, lineChannelAccessToken, lineUserId, googleChatWebhook], region: 'asia-northeast1', enforceAppCheck: false },
    async (request) => {
        if (!request.auth) {
            throw new HttpsError('unauthenticated', '請先登入才能使用 AI 客服。');
        }

        const uid = request.auth.uid;
        const DAILY_LIMIT = 20;

        // ── Rate Limiting：每人每日 20 次 ──
        const today = new Date().toLocaleDateString('zh-TW', { timeZone: 'Asia/Taipei' }).replace(/\//g, '-');
        const usageRef = db.doc(`usage/${uid}/daily/${today}`);

        let usedCount = 0;
        await db.runTransaction(async (tx) => {
            const snap = await tx.get(usageRef);
            usedCount = snap.exists ? (snap.data().count || 0) : 0;
            if (usedCount >= DAILY_LIMIT) {
                throw new HttpsError(
                    'resource-exhausted',
                    `今日提問次數已達上限（${DAILY_LIMIT}次），明天再來唔～`
                );
            }
            tx.set(usageRef, { count: usedCount + 1, updatedAt: new Date().toISOString() }, { merge: true });
        });

        const prompt = request.data?.prompt;
        const knowledge = request.data?.knowledge || '';

        if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
            throw new HttpsError('invalid-argument', 'prompt 不可為空。');
        }

        const safePrompt = prompt.trim().slice(0, 1000);
        const safeKnowledge = knowledge.slice(0, 8000);

        const key = geminiApiKey.value().trim();
        if (!key) throw new HttpsError('internal', 'API Key 未設定。');

        // ── 動態讀取 AI 設定 ──
        let aiModel = 'gemini-2.5-flash-lite';
        let aiTemperature = 0.7;
        let aiMaxTokens = 1024;
        try {
            const aiSnap = await db.doc('config/aiSettings').get();
            if (aiSnap.exists) {
                const d = aiSnap.data();
                if (d.model) aiModel = d.model;
                if (typeof d.temperature === 'number') aiTemperature = d.temperature;
                if (typeof d.maxTokens === 'number') aiMaxTokens = d.maxTokens;
            }
        } catch (aiErr) {
            console.warn('讀取 AI 設定失敗，使用預設值:', aiErr.message);
        }

        const genAI = new GoogleGenerativeAI(key);
        const model = genAI.getGenerativeModel({
            model: aiModel,
            systemInstruction: '你是由阿凱老師設計的桃園市石門國小資訊組 AI 客服「石門小智鈴」。請根據提供的知識庫內容，友善、專業地回答使用者的問題。如果問題不在知識庫中，請禮貌地告知並引導至相關單位。',
            generationConfig: { temperature: aiTemperature, maxOutputTokens: aiMaxTokens },
        });

        const fullPrompt = `知識庫：\n${safeKnowledge}\n\n使用者問題：${safePrompt}`;

        try {
            const result = await model.generateContent(fullPrompt);
            const text = result.response.text();

            // ── 告警關鍵字比對 ──
            try {
                const alertSnap = await db.doc('config/alerts').get();
                const alertKeywords = alertSnap.exists ? (alertSnap.data().keywords || []) : [];
                const matched = alertKeywords.filter(kw =>
                    kw && safePrompt.toLowerCase().includes(kw.toLowerCase())
                );
                if (matched.length > 0) {
                    // 敏感關鍵字屬重要告警：Google Chat 與 LINE 都通知（Chat 先發，LINE 額度用完也不影響）
                    await sendGoogleChatCard({
                        icon: '⚠️',
                        title: '關鍵字告警',
                        fields: [
                            { label: '時間', value: formatTaipeiTime() },
                            { label: '命中關鍵字', value: cleanSnippet(matched.join('、'), 60) },
                            { label: '對話摘要', value: cleanSnippet(safePrompt, 30) || '（無內容）' },
                            { label: '來源', value: '石門小智鈴 AI 客服網頁' },
                        ],
                    });
                    const token = lineChannelAccessToken.value().trim();
                    const userId = lineUserId.value().trim();
                    if (token && userId) {
                        const alertMsg = {
                            type: 'flex',
                            altText: `⚠️ 石門小智鈴告警：偵測到敏感關鍵字`,
                            contents: {
                                type: 'bubble',
                                header: {
                                    type: 'box', layout: 'vertical',
                                    backgroundColor: '#ef4444', paddingAll: '14px',
                                    contents: [{ type: 'text', text: '⚠️ 關鍵字告警', color: '#fff', weight: 'bold', size: 'md' }]
                                },
                                body: {
                                    type: 'box', layout: 'vertical', spacing: 'sm', paddingAll: '14px',
                                    contents: [
                                        { type: 'text', text: `命中關鍵字：${matched.join('、')}`, color: '#dc2626', weight: 'bold', wrap: true },
                                        { type: 'separator', margin: 'sm' },
                                        { type: 'text', text: `問題內容：${safePrompt.substring(0, 120)}`, size: 'sm', color: '#374151', wrap: true },
                                        { type: 'text', text: `使用者：${request.auth.token?.email || request.auth.uid}`, size: 'xs', color: '#6b7280', wrap: true }
                                    ]
                                }
                            }
                        };
                        await axios.post(
                            'https://api.line.me/v2/bot/message/push',
                            { to: userId, messages: [alertMsg] },
                            { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } }
                        );
                        console.log(`⚠️ 告警推送：${matched.join(',')}`);
                    }
                }
            } catch (alertErr) {
                console.error('告警推送失敗（不影響主要流程）:', alertErr.response?.status || '', alertErr.message);
            }

            return { text, usedCount: usedCount + 1, dailyLimit: DAILY_LIMIT };
        } catch (err) {
            const msg = String(err?.message || '');
            console.error('askGemini 錯誤:', msg);
            if (msg.includes('503')) throw new HttpsError('unavailable', '503');
            if (msg.includes('429')) throw new HttpsError('resource-exhausted', '429');
            throw new HttpsError('internal', '呼叫 AI 服務失敗，請稍後再試。');
        }
    }
);

// ─── setAdmin：設定管理員（僅限白名單管理員）────────────────────────────────
exports.setAdmin = onCall(
    { region: 'asia-northeast1' },
    async (request) => {
        await checkAdmin(request);
        const targetEmail = request.data?.email;
        if (!targetEmail) throw new HttpsError('invalid-argument', '請提供目標 email。');
        const targetUser = await admin.auth().getUserByEmail(targetEmail);
        await admin.auth().setCustomUserClaims(targetUser.uid, { admin: true });
        console.log(`✅ 設定 ${targetEmail} 為管理員`);
        return { success: true, message: `${targetEmail} 已設為管理員，請重新登入後生效。` };
    }
);

// ─── getKnowledgeBase：讀取知識庫（admin only）──────────────────────────────
exports.getKnowledgeBase = onCall(
    { region: 'asia-northeast1' },
    async (request) => {
        await checkAdmin(request);
        const snap = await db.doc('config/knowledgeBase').get();
        const content = snap.exists ? snap.data().content : '';
        return { content };
    }
);

// ─── updateKnowledgeBase：更新知識庫並保留版本快照（admin only）──────────────
exports.updateKnowledgeBase = onCall(
    { region: 'asia-northeast1' },
    async (request) => {
        await checkAdmin(request);
        const content = request.data?.content;
        if (typeof content !== 'string') throw new HttpsError('invalid-argument', '內容格式錯誤。');
        // 儲存前先快照
        try {
            const mainSnap = await db.doc('config/knowledgeBase').get();
            if (mainSnap.exists) {
                const old = mainSnap.data().content || '';
                await db.doc(`knowledge/history/${Date.now()}`).set({
                    content: old, savedAt: new Date().toISOString(),
                    charCount: old.length, savedBy: request.auth.token.email || request.auth.uid,
                });
            }
        } catch (e) { console.warn('快照失敗:', e.message); }
        await db.doc('config/knowledgeBase').set({
            content, updatedAt: new Date().toISOString(),
            updatedBy: request.auth.token.email || request.auth.uid,
        });
        console.log(`✅ 知識庫已更新，長度：${content.length} 字`);
        return { success: true };
    }
);

// ─── getKnowledgeHistory：取得版本歷史清單（admin only）──────────────────────
exports.getKnowledgeHistory = onCall(
    { region: 'asia-northeast1' },
    async (request) => {
        await checkAdmin(request);
        const snap = await db.collection('knowledge/history').orderBy('savedAt', 'desc').limit(20).get();
        return {
            versions: snap.docs.map(d => ({
                id: d.id, savedAt: d.data().savedAt,
                charCount: d.data().charCount, savedBy: d.data().savedBy || '',
            }))
        };
    }
);

// ─── restoreKnowledgeVersion：回復指定版本（admin only）──────────────────────
exports.restoreKnowledgeVersion = onCall(
    { region: 'asia-northeast1' },
    async (request) => {
        await checkAdmin(request);
        const { versionId } = request.data;
        if (!versionId) throw new HttpsError('invalid-argument', 'versionId 為必填。');
        const snap = await db.doc(`knowledge/history/${versionId}`).get();
        if (!snap.exists) throw new HttpsError('not-found', '找不到該版本。');
        await db.doc('config/knowledgeBase').set({
            content: snap.data().content, updatedAt: new Date().toISOString(),
            updatedBy: `restore:${request.auth.token.email || request.auth.uid}`,
        });
        return { success: true, content: snap.data().content };
    }
);

// ─── getAlertKeywords：取得告警關鍵字（admin only）────────────────────────────
exports.getAlertKeywords = onCall(
    { region: 'asia-northeast1' },
    async (request) => {
        await checkAdmin(request);
        const snap = await db.doc('config/alerts').get();
        return { keywords: snap.exists ? (snap.data().keywords || []) : [] };
    }
);

// ─── setAlertKeywords：設定告警關鍵字（admin only）────────────────────────────
exports.setAlertKeywords = onCall(
    { region: 'asia-northeast1' },
    async (request) => {
        await checkAdmin(request);
        const { keywords } = request.data;
        if (!Array.isArray(keywords)) throw new HttpsError('invalid-argument', 'keywords 必須為陣列。');
        await db.doc('config/alerts').set({ keywords, updatedAt: new Date().toISOString() });
        console.log(`✅ 告警關鍵字已更新：${keywords.join('、')}`);
        return { ok: true };
    }
);

// ─── getAdminStats：取得使用統計（admin only，支援 days 參數）──────────────
exports.getAdminStats = onCall(
    { region: 'asia-northeast1' },
    async (request) => {
        await checkAdmin(request);
        const days = Number(request.data?.days) || 7;
        const chatsSnap = await db.collection('chats').get();
        const allChats = [];
        chatsSnap.forEach(doc => {
            const d = doc.data();
            (Array.isArray(d.history) ? d.history : []).forEach(h => {
                allChats.push({
                    uid: doc.id, userName: h.userName || '訪客',
                    userEmail: h.userEmail || '', user: h.user || '',
                    ai: h.ai || '', time: h.time || null,
                });
            });
        });
        const questionWords = {};
        allChats.forEach(c => {
            c.user.split(/[\s，。？！、,. ]+/).filter(w => w.length >= 2 && w.length <= 10)
                .forEach(w => { questionWords[w] = (questionWords[w] || 0) + 1; });
        });
        const topKeywords = Object.entries(questionWords).sort((a, b) => b[1] - a[1])
            .slice(0, 10).map(([word, count]) => ({ word, count }));
        const todayPrefix = new Date().toISOString().slice(0, 10);
        const todayActiveUsers = new Set();
        allChats.forEach(c => {
            if (c.time && String(c.time).startsWith(todayPrefix)) todayActiveUsers.add(c.uid);
        });
        const trendDays = days === 0 ? 30 : days;
        const dailyTrend = {};
        for (let i = trendDays - 1; i >= 0; i--) {
            const d2 = new Date(); d2.setDate(d2.getDate() - i);
            dailyTrend[d2.toISOString().slice(0, 10)] = 0;
        }
        allChats.forEach(c => {
            const day = c.time ? String(c.time).slice(0, 10) : null;
            if (day && dailyTrend[day] !== undefined) dailyTrend[day]++;
        });
        let anonCount = 0, authCount = 0;
        allChats.forEach(c => { c.userEmail ? authCount++ : anonCount++; });
        return {
            totalMessages: allChats.length, totalUsers: chatsSnap.size,
            todayActiveUsers: todayActiveUsers.size, topKeywords,
            dailyTrend, anonCount, authCount,
            recentChats: allChats.sort((a, b) => (b.time || 0) - (a.time || 0)).slice(0, 50),
        };
    }
);

// ─── deleteUserChat：刪除單筆對話（admin only）──────────────────────────────
exports.deleteUserChat = onCall(
    { region: 'asia-northeast1' },
    async (request) => {
        await checkAdmin(request);
        const { uid, time } = request.data;
        if (!uid || time === undefined) {
            throw new HttpsError('invalid-argument', 'uid 與 time 為必填。');
        }
        const docRef = db.doc(`chats/${uid}`);
        const snap = await docRef.get();
        if (!snap.exists) throw new HttpsError('not-found', '找不到該使用者記錄。');
        const history = snap.data().history || [];
        const newHistory = history.filter(h => h.time !== time);
        if (newHistory.length === history.length) {
            throw new HttpsError('not-found', '找不到該筆對話。');
        }
        await docRef.update({ history: newHistory });
        return { message: `已刪除 1 筆對話記錄。` };
    }
);

// 移除 Markdown 語法 + HTML tag，取得純文字供 LINE 通知顯示
function stripMarkdown(text) {
    return text
        .replace(/<[^>]+>/g, '')
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/\*([^*]+)\*/g, '$1')
        .replace(/#{1,6}\s/g, '')
        .replace(/`([^`]+)`/g, '$1')
        .replace(/!\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/^[-*+]\s+/gm, '• ')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

// ─── Google Chat 通知（2026-11-18 起）────────────────────────────────────────
// 多個網站共用同一個 LINE 官方帳號（免費方案每月 200 則），
// 新對話這類一般事件只發 Google Chat；LINE 只留給敏感關鍵字等重要告警。
const CHAT_APP_NAME = '石門小智鈴';

function formatTaipeiTime(value) {
    const d = value ? new Date(value) : new Date();
    const date = isNaN(d.getTime()) ? new Date() : d;
    return new Intl.DateTimeFormat('zh-TW', {
        timeZone: 'Asia/Taipei', year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', hour12: false,
    }).format(date);
}

// 取前 n 個字當摘要：去掉 Markdown／HTML、控制字元、零寬字元、亂碼替代字元與私用區字元
function cleanSnippet(text, n = 30) {
    const plain = stripMarkdown(String(text || ''))
        .replace(/[\u0000-\u001F\u007F-\u009F]/g, ' ')
        .replace(/[\u200B-\u200F\u202A-\u202E\u2060-\u206F\uFEFF\uFFFD\uE000-\uF8FF]/g, '')
        .replace(/[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    const chars = Array.from(plain);
    return chars.length > n ? chars.slice(0, n).join('') + '…' : plain;
}

function escapeChatHtml(text) {
    return String(text).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
}

/**
 * 發 Google Chat 卡片（cardsV2）。Best-effort：失敗只記 log，不丟錯、不影響主流程。
 * 使用的函式要在 secrets 掛上 googleChatWebhook。
 */
async function sendGoogleChatCard({ icon, title, fields, buttons }) {
    const url = (googleChatWebhook.value() || '').trim();
    if (!url || url === 'DISABLED' || url === 'PLACEHOLDER_NOT_CONFIGURED') {
        console.warn('[notify-gchat] 未設定 GOOGLE_CHAT_WEBHOOK_URL，略過');
        return;
    }
    const widgets = fields.map((f) => ({
        decoratedText: { topLabel: f.label, text: escapeChatHtml(f.value || '—'), wrapText: true },
    }));
    if (buttons?.length) {
        widgets.push({
            buttonList: {
                buttons: buttons.map((b) => ({ text: b.label, onClick: { openLink: { url: b.url } } })),
            },
        });
    }
    const payload = {
        // 手機推播只看得到這行，所以表情符號後先放【平台名】
        text: `${icon} 【${CHAT_APP_NAME}】${title}（${fields.map((f) => `${f.label}: ${f.value}`).join('，')}）`,
        cardsV2: [{
            cardId: 'smes-' + Date.now(),
            card: {
                header: {
                    title: `${icon} ${title}｜${CHAT_APP_NAME}`,
                    subtitle: '石門國小資訊組 AI 客服',
                    imageUrl: icon === '⚠️'
                        ? 'https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/warning/default/24px.svg'
                        : 'https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/chat/default/24px.svg',
                    imageType: 'CIRCLE',
                },
                sections: [{ widgets }],
            },
        }],
    };
    try {
        await axios.post(url, payload, {
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            timeout: 10000,
        });
        console.log(`✅ Google Chat 通知發送成功：${title}`);
    } catch (err) {
        console.warn('[notify-gchat] 發送失敗', err.response?.status || '', JSON.stringify(err.response?.data || err.message).slice(0, 300));
    }
}

/**
 * 監聽 chats/{uid} 文件更新
 * 偵測到有新的一則對話時，發 Google Chat 卡片通知管理員（不推 LINE）。
 * 卡片只放時間、提問前 30 字摘要與來源，不放完整對話內容與使用者個資。
 * （函式名稱沿用 notifyLineOnNewChat，避免改名造成刪除／重建）
 */
exports.notifyLineOnNewChat = onDocumentUpdated(
    { document: 'chats/{uid}', secrets: [googleChatWebhook] },
    async (event) => {
        const before = event.data.before.data();
        const after = event.data.after.data();

        const oldHistory = before?.history || [];
        const newHistory = after?.history || [];

        console.log(`觸發：舊 history 長度=${oldHistory.length}，新 history 長度=${newHistory.length}`);

        const latest = newHistory[newHistory.length - 1];
        if (!latest) {
            console.log('沒有對話（可能是清除紀錄），略過。');
            return null;
        }

        // 前端只保留最近 20 則，滿 20 則後長度不再增加；改用「最後一則的時間是不是新的」判斷，
        // 管理員刪除某一則時最後一則一定是舊的，不會誤發。
        const oldTimes = new Set(oldHistory.map((h) => h && h.time).filter(Boolean));
        const isNew = latest.time ? !oldTimes.has(latest.time) : newHistory.length > oldHistory.length;
        if (!isNew) {
            console.log('無新增訊息，略過通知。');
            return null;
        }

        await sendGoogleChatCard({
            icon: '🔔',
            title: '有新提問',
            fields: [
                { label: '時間', value: formatTaipeiTime(latest.time) },
                { label: '對話摘要', value: cleanSnippet(latest.user, 30) || '（無內容）' },
                { label: '來源', value: '石門小智鈴 AI 客服網頁' },
            ],
            buttons: [{ label: '查看系統', url: 'https://cagoooo.github.io/smes/' }],
        });

        return null;
    }
);

// ─── getAiSettings：讀取 AI 模型設定 ────────────────────────────────────────
exports.getAiSettings = onCall(
    { region: 'asia-northeast1' },
    async (request) => {
        await checkAdmin(request);
        const snap = await db.doc('config/aiSettings').get();
        if (snap.exists) return snap.data();
        // 預設值
        return { model: 'gemini-2.5-flash-lite', temperature: 0.7, maxTokens: 1024 };
    }
);

// ─── setAiSettings：更新 AI 模型設定 ────────────────────────────────────────
exports.setAiSettings = onCall(
    { region: 'asia-northeast1' },
    async (request) => {
        await checkAdmin(request);
        const { model, temperature, maxTokens } = request.data;
        const VALID_MODELS = ['gemini-2.5-flash-lite', 'gemini-2.5-flash', 'gemini-2.5-pro'];
        if (!VALID_MODELS.includes(model)) throw new HttpsError('invalid-argument', '無效的模型名稱。');
        if (typeof temperature !== 'number' || temperature < 0 || temperature > 2) {
            throw new HttpsError('invalid-argument', 'temperature 必須介於 0～2。');
        }
        if (typeof maxTokens !== 'number' || maxTokens < 256 || maxTokens > 8192) {
            throw new HttpsError('invalid-argument', 'maxTokens 必須介於 256～8192。');
        }
        await db.doc('config/aiSettings').set({
            model, temperature, maxTokens,
            updatedAt: new Date().toISOString(),
            updatedBy: request.auth.token.email || request.auth.uid,
        });
        console.log(`✅ AI 設定已更新：model=${model} temp=${temperature} maxTokens=${maxTokens}`);
        return { ok: true };
    }
);

// ═══════════════════════════════════════════════════════════════════════════
// 🔧 【校園報修系統專用】sendLineNotification
// ⚠️  此 Function 由 h:\repair 修繕系統使用，請勿刪除！
//     刪除後修繕系統的 LINE 報修通知將完全失效。
//     如需修改，請同步更新 h:\repair\functions\index.js。
// ═══════════════════════════════════════════════════════════════════════════
const { onRequest } = require('firebase-functions/v2/https');

exports.sendLineNotification = onRequest(
    { region: 'us-central1' },
    async (req, res) => {
        // ✅ CORS headers（允許 GitHub Pages + localhost）
        const allowedOrigins = [
            'https://cagoooo.github.io',
            'http://localhost:5173',
            'http://localhost:3000',
        ];
        const origin = req.headers.origin;
        res.set('Access-Control-Allow-Origin', allowedOrigins.includes(origin) ? origin : '*');
        res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.set('Access-Control-Max-Age', '3600');

        // ✅ 處理 OPTIONS preflight 請求
        if (req.method === 'OPTIONS') {
            res.status(204).send('');
            return;
        }
        if (req.method !== 'POST') {
            return res.status(405).json({ status: 'error', message: 'Method Not Allowed' });
        }

        try {
            const { token, targetId, message, messages } = req.body;
            if (!token || !targetId || (!message && !messages)) {
                return res.status(400).json({
                    status: 'error',
                    message: 'Missing required parameters: token, targetId, and (message or messages)',
                });
            }

            const response = await axios.post(
                'https://api.line.me/v2/bot/message/push',
                { to: targetId, messages: messages || [{ type: 'text', text: message }] },
                { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }
            );
            return res.status(200).json({ status: 'success', data: response.data });

        } catch (error) {
            console.error('sendLineNotification Error:', error.response ? error.response.data : error.message);
            return res.status(500).json({
                status: 'error',
                message: error.message,
                details: error.response ? error.response.data : null,
            });
        }
    }
);
