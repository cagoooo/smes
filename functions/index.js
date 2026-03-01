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

// 部署至亞太區域
setGlobalOptions({ region: 'asia-northeast1' });

// ─── askGemini：前端 Callable，安全呼叫 Gemini API ───────────────────
const geminiApiKey = defineSecret('GEMINI_API_KEY');

exports.askGemini = onCall(
    { secrets: [geminiApiKey], region: 'asia-northeast1' },
    async (request) => {
        // 驗證使用者必須登入
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

        // 限制輸入長度，防止濫用
        const safePrompt = prompt.trim().slice(0, 1000);
        const safeKnowledge = knowledge.slice(0, 8000);

        const key = geminiApiKey.value().trim();
        if (!key) throw new HttpsError('internal', 'API Key 未設定。');

        const genAI = new GoogleGenerativeAI(key);
        const model = genAI.getGenerativeModel({
            model: 'gemini-2.5-flash-lite',
            systemInstruction: '你是由阿凱老師設計的桃園市石門國小資訊組 AI 客服「石門小智鈴」。請根據提供的知識庫內容，友善、專業地回答使用者的問題。如果問題不在知識庫中，請禮貌地告知並引導至相關單位。',
        });

        const fullPrompt = `知識庫：\n${safeKnowledge}\n\n使用者問題：${safePrompt}`;

        try {
            const result = await model.generateContent(fullPrompt);
            const text = result.response.text();
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

// ─── setAdmin：設定管理員 Custom Claim（僅限現有管理員或首次設定）─────────────
exports.setAdmin = onCall(
    { region: 'asia-northeast1' },
    async (request) => {
        if (!request.auth) throw new HttpsError('unauthenticated', '請先登入。');

        // 僅允許已是 admin 的人呼叫（或直接在 Firebase Console 手動呼叫）
        const caller = await admin.auth().getUser(request.auth.uid);
        const isAdmin = caller.customClaims?.admin === true;

        const targetEmail = request.data?.email;
        if (!targetEmail) throw new HttpsError('invalid-argument', '請提供目標 email。');

        // 首次設定：若目前沒有任何 admin 才允許
        const { users } = await admin.auth().listUsers(100);
        const hasAdmin = users.some(u => u.customClaims?.admin === true);
        if (!isAdmin && hasAdmin) throw new HttpsError('permission-denied', '僅限管理員操作。');

        const targetUser = await admin.auth().getUserByEmail(targetEmail);
        await admin.auth().setCustomUserClaims(targetUser.uid, { admin: true });
        console.log(`✅ 設定 ${targetEmail} 為管理員`);
        return { success: true, message: `${targetEmail} 已設為管理員，請重新登入後生效。` };
    }
);

// ─── getKnowledgeBase：讀取知識庫（admin only）────────────────────────────────
exports.getKnowledgeBase = onCall(
    { region: 'asia-northeast1' },
    async (request) => {
        if (!request.auth) throw new HttpsError('unauthenticated', '請先登入。');
        const user = await admin.auth().getUser(request.auth.uid);
        if (!user.customClaims?.admin) throw new HttpsError('permission-denied', '僅限管理員。');

        const snap = await db.doc('config/knowledgeBase').get();
        const content = snap.exists ? snap.data().content : '';
        return { content };
    }
);

// ─── updateKnowledgeBase：更新知識庫（admin only）────────────────────────────
exports.updateKnowledgeBase = onCall(
    { region: 'asia-northeast1' },
    async (request) => {
        if (!request.auth) throw new HttpsError('unauthenticated', '請先登入。');
        const user = await admin.auth().getUser(request.auth.uid);
        if (!user.customClaims?.admin) throw new HttpsError('permission-denied', '僅限管理員。');

        const content = request.data?.content;
        if (typeof content !== 'string') throw new HttpsError('invalid-argument', '內容格式錯誤。');

        await db.doc('config/knowledgeBase').set({
            content,
            updatedAt: new Date().toISOString(),
            updatedBy: request.auth.token.email || request.auth.uid,
        });
        console.log(`✅ 知識庫已更新，長度：${content.length} 字`);
        return { success: true };
    }
);

// ─── getAdminStats：取得使用統計（admin only）────────────────────────────────
exports.getAdminStats = onCall(
    { region: 'asia-northeast1' },
    async (request) => {
        if (!request.auth) throw new HttpsError('unauthenticated', '請先登入。');
        const user = await admin.auth().getUser(request.auth.uid);
        if (!user.customClaims?.admin) throw new HttpsError('permission-denied', '僅限管理員。');

        // 讀取所有使用者的對話（chats collection）
        const chatsSnap = await db.collection('chats').get();
        const allChats = [];
        chatsSnap.forEach(doc => {
            const data = doc.data();
            const history = Array.isArray(data.history) ? data.history : [];
            history.forEach(h => {
                allChats.push({
                    uid: doc.id,
                    userName: h.userName || '訪客',
                    userEmail: h.userEmail || '',
                    user: h.user || '',
                    ai: h.ai || '',
                    time: h.time || null,
                });
            });
        });

        // 熱門問題：簡單統計關鍵字
        const questionWords = {};
        allChats.forEach(c => {
            const words = c.user.split(/[\s，。？！、,. ]+/).filter(w => w.length >= 2 && w.length <= 10);
            words.forEach(w => { questionWords[w] = (questionWords[w] || 0) + 1; });
        });
        const topKeywords = Object.entries(questionWords)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(([word, count]) => ({ word, count }));

        // 今日活躍人數
        const today = new Date().toLocaleDateString('zh-TW', { timeZone: 'Asia/Taipei' });
        const todayStr = today.replace(/\//g, '-');
        const usageSnap = await db.collectionGroup('daily').where('updatedAt', '>=', new Date().toISOString().slice(0, 10)).get();
        const todayActiveUsers = new Set();
        usageSnap.forEach(doc => { todayActiveUsers.add(doc.ref.parent.parent.id); });

        return {
            totalMessages: allChats.length,
            totalUsers: chatsSnap.size,
            todayActiveUsers: todayActiveUsers.size,
            topKeywords,
            recentChats: allChats.sort((a, b) => (b.time || 0) - (a.time || 0)).slice(0, 50),
        };
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

/**
 * 監聽 chats/{uid} 文件更新
 * 偵測到 history 陣列新增時，透過 LINE Messaging API 以 Flex Message 通知管理員
 */
exports.notifyLineOnNewChat = onDocumentUpdated(
    { document: 'chats/{uid}', secrets: [lineChannelAccessToken, lineUserId] },
    async (event) => {
        const before = event.data.before.data();
        const after = event.data.after.data();

        const oldHistory = before?.history || [];
        const newHistory = after?.history || [];

        console.log(`觸發：舊 history 長度=${oldHistory.length}，新 history 長度=${newHistory.length}`);

        if (newHistory.length <= oldHistory.length) {
            console.log('無新增訊息，略過通知。');
            return null;
        }

        const latest = newHistory[newHistory.length - 1];
        if (!latest) {
            console.log('latest 為 null，略過。');
            return null;
        }

        const token = lineChannelAccessToken.value().trim();
        const userId = lineUserId.value().trim();

        if (!token || !userId) {
            console.error('缺少 LINE_CHANNEL_ACCESS_TOKEN 或 LINE_USER_ID');
            return null;
        }

        // ── 資料整理 ──
        const userName = String(latest.userName || after?.userName || '訪客').substring(0, 40);
        const userEmail = String(latest.userEmail || after?.userEmail || '').substring(0, 50);
        const question = String(latest.user || '（無問題內容）').substring(0, 150);
        const plainAns = stripMarkdown(String(latest.ai || '（無回答內容）'));
        const answer = plainAns.length > 180 ? plainAns.substring(0, 180) + '...' : plainAns;
        const time = latest.time
            ? new Date(latest.time).toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
            : new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });

        const userInfo = userEmail ? `${userName}\n${userEmail}` : userName;

        console.log(`準備發送 LINE 通知：user=${userName}, question=${question.substring(0, 30)}...`);

        // ── LINE Flex Message 卡片（扁平化 JSON，避免條件式展開） ──
        const flexMessage = {
            type: 'flex',
            altText: `🔔 石門小智鈴：${userName} 有新提問`,
            contents: {
                type: 'bubble',
                size: 'giga',
                header: {
                    type: 'box',
                    layout: 'vertical',
                    paddingAll: '16px',
                    backgroundColor: '#4F46E5',
                    contents: [
                        {
                            type: 'box',
                            layout: 'horizontal',
                            contents: [
                                {
                                    type: 'text',
                                    text: '🔔 石門小智鈴 AI 客服',
                                    color: '#FFFFFF',
                                    size: 'md',
                                    weight: 'bold',
                                    flex: 1
                                },
                                {
                                    type: 'text',
                                    text: '新動態',
                                    color: '#A5B4FC',
                                    size: 'sm',
                                    align: 'end',
                                    flex: 0
                                }
                            ]
                        },
                        {
                            type: 'text',
                            text: `⏰ ${time}`,
                            color: '#C7D2FE',
                            size: 'xs',
                            margin: 'sm'
                        }
                    ]
                },
                body: {
                    type: 'box',
                    layout: 'vertical',
                    spacing: 'md',
                    paddingAll: '16px',
                    contents: [
                        {
                            type: 'box',
                            layout: 'horizontal',
                            backgroundColor: '#EEF2FF',
                            cornerRadius: '10px',
                            paddingAll: '10px',
                            contents: [
                                {
                                    type: 'text',
                                    text: '👤',
                                    size: 'xl',
                                    flex: 0,
                                    gravity: 'center'
                                },
                                {
                                    type: 'text',
                                    text: userInfo,
                                    size: 'sm',
                                    weight: 'bold',
                                    color: '#4338CA',
                                    flex: 1,
                                    wrap: true,
                                    margin: 'md'
                                }
                            ]
                        },
                        {
                            type: 'separator',
                            margin: 'sm'
                        },
                        {
                            type: 'box',
                            layout: 'vertical',
                            spacing: 'xs',
                            contents: [
                                {
                                    type: 'text',
                                    text: '💬 提問內容',
                                    size: 'xs',
                                    color: '#6B7280',
                                    weight: 'bold'
                                },
                                {
                                    type: 'text',
                                    text: question,
                                    size: 'sm',
                                    color: '#111827',
                                    wrap: true,
                                    weight: 'bold'
                                }
                            ]
                        },
                        {
                            type: 'separator',
                            margin: 'sm'
                        },
                        {
                            type: 'box',
                            layout: 'vertical',
                            spacing: 'xs',
                            backgroundColor: '#F0FDF4',
                            cornerRadius: '8px',
                            paddingAll: '10px',
                            contents: [
                                {
                                    type: 'text',
                                    text: '🤖 AI 回答摘要',
                                    size: 'xs',
                                    color: '#059669',
                                    weight: 'bold'
                                },
                                {
                                    type: 'text',
                                    text: answer,
                                    size: 'sm',
                                    color: '#374151',
                                    wrap: true
                                }
                            ]
                        }
                    ]
                },
                footer: {
                    type: 'box',
                    layout: 'horizontal',
                    paddingAll: '12px',
                    spacing: 'sm',
                    contents: [
                        {
                            type: 'button',
                            style: 'primary',
                            color: '#4F46E5',
                            height: 'sm',
                            action: {
                                type: 'uri',
                                label: '🖥️ 查看系統',
                                uri: 'https://cagoooo.github.io/smes/'
                            },
                            flex: 1
                        },
                        {
                            type: 'button',
                            style: 'secondary',
                            height: 'sm',
                            action: {
                                type: 'uri',
                                label: '📊 Firebase Console',
                                uri: 'https://console.firebase.google.com/project/smes-e1dc3/firestore'
                            },
                            flex: 1
                        }
                    ]
                }
            }
        };

        try {
            const res = await axios.post(
                'https://api.line.me/v2/bot/message/push',
                { to: userId, messages: [flexMessage] },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log(`✅ LINE Flex 通知發送成功 uid:${event.params.uid} user:${userName} status:${res.status}`);
        } catch (err) {
            const errData = err.response?.data;
            const errStatus = err.response?.status;
            console.error(`❌ LINE 通知發送失敗 status:${errStatus}`, JSON.stringify(errData || err.message));
        }

        return null;
    }
);
