import './style.css'
import { GoogleGenerativeAI } from "@google/generative-ai";

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// 初始化 Gemini
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

// Firebase Configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Gemini Model Configuration
const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-lite",
    systemInstruction: "你是由阿凱老師設計的桃園市石門國小資訊組 AI 客服『石門小智鈴』。請根據提供的知識庫內容，友善、專業地回答使用者的問題。如果問題不在知識庫中，請禮貌地告知並引導至相關單位。",
});

// 知識庫載入
let knowledgeBase = "";
fetch('./knowledge-base.txt')
    .then(res => res.text())
    .then(text => {
        knowledgeBase = text;
    });

let currentUser = null;
let conversations = [];

// 懶惰查詢（元素在 #chat-main 中，須確保 DOM 完全載入後取得）
const getChatList = () => document.getElementById('list-group');
const getUserInput = () => document.getElementById('user-input');
const getSendBtn = () => document.getElementById('send-button');

// 設定 marked：開啟 breaks（換行），但不靠 GFM autolink（它會吃到中文）
if (typeof marked !== 'undefined') {
    marked.setOptions({ gfm: true, breaks: true });
}

// linkify：在 marked 渲染後的 HTML 中，只對「非 a 標籤內」的裸 URL 加超連結
// 使用 ASCII-only URL 正則，不會吃到中文或全形標點
function linkify(html) {
    // 只匹配純 ASCII URL，避免包含中文字符
    const urlRegex = /(https?:\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+)/g;
    // 分段處理：保留現有 <a>...</a> 和其他 HTML tag，只對夾在 tag 之間的純文字部分套用
    return html.replace(/(<a[\s\S]*?<\/a>|<[^>]+>)|([^<]*)/g, (match, tag, text) => {
        if (tag) return tag;               // HTML tag 原樣保留
        if (!text) return match;
        return text.replace(urlRegex, url =>
            '<a href="' + url + '" target="_blank" rel="noopener noreferrer" ' +
            'style="color:#1565c0;text-decoration:underline;word-break:break-all;">' + url + '</a>'
        );
    });
}

// 移除 Markdown 語法 + HTML tag，取得純文字（供 LINE 通知使用）
function stripMarkdown(text) {
    return text
        .replace(/<[^>]+>/g, '')
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/\*([^*]+)\*/g, '$1')
        .replace(/#{1,6}\s/g, '')
        .replace(/`([^`]+)`/g, '$1')
        .replace(/!?\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/^[-*+]\s+/gm, '• ')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

// 在訊息下方插入極簡連結卡片
function buildLinkCards(container, text) {
    const urlRegex = /(https?:\/\/[^\s<>"]+)/g;
    const urls = [...new Set(text.match(urlRegex) || [])];
    if (urls.length === 0) return;

    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;';

    urls.forEach(function (url) {
        let domain = url;
        try { domain = new URL(url).hostname.replace('www.', ''); } catch (e) { }

        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.title = url;
        a.style.cssText = 'display:inline-flex;align-items:center;gap:6px;padding:5px 12px;background:#f0f4ff;border:1px solid #c5cae9;border-radius:20px;text-decoration:none;color:#3949ab;font-size:12px;font-weight:600;transition:all 0.2s;';
        a.onmouseenter = function () { a.style.background = '#3949ab'; a.style.color = '#fff'; a.style.borderColor = '#3949ab'; };
        a.onmouseleave = function () { a.style.background = '#f0f4ff'; a.style.color = '#3949ab'; a.style.borderColor = '#c5cae9'; };

        // 使用內嵌 SVG 連結圖示（不依賴外部 API，零 404 錯誤）
        const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        icon.setAttribute('width', '13');
        icon.setAttribute('height', '13');
        icon.setAttribute('viewBox', '0 0 24 24');
        icon.setAttribute('fill', 'none');
        icon.setAttribute('stroke', 'currentColor');
        icon.setAttribute('stroke-width', '2');
        icon.setAttribute('stroke-linecap', 'round');
        icon.setAttribute('stroke-linejoin', 'round');
        icon.style.flexShrink = '0';
        icon.innerHTML = '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>';

        const text_el = document.createElement('span');
        text_el.textContent = domain;

        a.append(icon, text_el);
        wrapper.appendChild(a);
    });

    container.appendChild(wrapper);
}

// 日期格式化工具
function formatDateLabel(isoStr) {
    if (!isoStr) return '';
    const d = new Date(isoStr);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const fmt = (dt) => dt.toDateString();
    if (fmt(d) === fmt(today)) return '📅 今天';
    if (fmt(d) === fmt(yesterday)) return '📅 昨天';
    return '📅 ' + d.toLocaleDateString('zh-TW', { month: 'long', day: 'numeric' });
}

function updateChatUI() {
    const chatList = getChatList();
    if (!chatList) return;
    chatList.innerHTML = '';
    let lastLabel = '';
    const reversed = [...conversations].reverse();
    reversed.forEach((conv, idx) => {
        addMessageToUI(conv.user, conv.ai, false, conv.time);
        const label = formatDateLabel(conv.time);
        if (label && label !== lastLabel) {
            lastLabel = label;
            const sep = document.createElement('div');
            sep.style.cssText = 'text-align:center;padding:6px 0;font-size:12px;color:#888;';
            sep.innerHTML = '<span style="background:#e8eaf6;border-radius:12px;padding:3px 14px;">' + label + '</span>';
            chatList.insertAdjacentElement('afterbegin', sep);
        }
    });
    // 空白狀態控制：有對話隱藏 hint
    const hint = document.getElementById('empty-hint');
    if (hint) hint.style.display = conversations.length === 0 ? '' : 'none';
}

// 清除對話（全域函式，供 HTML onclick 呼叫）
window.clearHistory = async function () {
    if (!confirm('確定要清除所有對話嗎？此操作無法復原。')) return;
    conversations = [];
    const chatList = getChatList();
    if (chatList) chatList.innerHTML = '';
    // 清除後顯示空白提示
    const hint = document.getElementById('empty-hint');
    if (hint) hint.style.display = '';
    if (currentUser) {
        const userChatRef = doc(db, 'chats', currentUser.uid);
        await setDoc(userChatRef, { history: [] }).catch(err => console.error('清除失敗:', err));
    }
    // 顯示 Toast
    showCopyToast('🗑️ 對話已全部清除！');
};

function addMessageToUI(userQuestion, aiAnswer, isNew = true, convTime = null) {
    // 歷史標籤
    const historyBadge = (!isNew) ? '<span style="font-size:11px;background:#e0e0e0;color:#757575;border-radius:10px;padding:1px 8px;margin-left:8px;font-weight:normal;">歷史</span>' : '';

    // 使用者問題
    const userHtml = `
    <div class="list-group-item list-group-item-action d-flex gap-3 py-3">
      <img src="https://www.smes.tyc.edu.tw/uploads/tadnews/image/logo/logo.png" alt="" width="64" height="64" class="rounded-circle flex-shrink-0">
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div style="display:flex;align-items:flex-start;gap:6px;flex-wrap:wrap;">
          <p class="mb-0 opacity-75" style="font-weight:bold;color:blue;margin:0;">${userQuestion}</p>${historyBadge}
        </div>
        <div class="mt-1 small">
          <button class="btn btn-outline-secondary btn-sm copy-btn" style="background-color:#90ee90;color:black;font-weight:bold;">複製</button>
        </div>
      </div>
    </div>`;

    // AI 回答外框
    const aiReplyId = 'ai-reply-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6);
    // 歷史訊息直接用 marked.parse 渲染 Markdown
    const aiContent = isNew ? '思考回答中...' : linkify(marked.parse(aiAnswer));
    const aiCls = isNew ? 'blink green-text' : 'black-text';
    const aiHtml = `
    <div id="${aiReplyId}" class="list-group-item list-group-item-action d-flex gap-3 py-3 answer-background">
      <img src="https://www.smes.tyc.edu.tw/uploads/tadnews/image/person/k-a.png" alt="" width="64" height="66" class="rounded-circle flex-shrink-0">
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div class="ai-content-wrap" style="min-width:0;flex:1;">
          <div class="mb-0 ${aiCls} markdown-body" style="font-weight:bold;">${aiContent}</div>
          <div class="mt-1 small">
            <button class="btn btn-outline-secondary btn-sm copy-btn" style="background-color:#ffff99;color:black;font-weight:bold;">複製</button>
          </div>
        </div>
      </div>
    </div>`;

    chatList.insertAdjacentHTML('afterbegin', aiHtml);
    chatList.insertAdjacentHTML('afterbegin', userHtml);

    // 歷史訊息立即註入連結卡片
    if (!isNew) {
        const aiDiv = document.getElementById(aiReplyId);
        if (aiDiv) buildLinkCards(aiDiv.querySelector('.ai-content-wrap'), aiAnswer);
    }

    return aiReplyId;
}

async function askGemini(prompt, retries = 3) {
    const fullPrompt = `知識庫：\n${knowledgeBase}\n\n使用者問題：${prompt}`;
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const result = await model.generateContent(fullPrompt);
            const response = await result.response;
            return response.text();
        } catch (error) {
            const status = error?.status || error?.message || '';
            const isRetryable = String(status).includes('503') || String(status).includes('429')
                || String(error?.message).includes('503') || String(error?.message).includes('429');
            if (isRetryable && attempt < retries) {
                const wait = Math.pow(2, attempt) * 1000; // 2s, 4s, 8s
                console.warn(`Gemini ${status} 第 ${attempt} 次重試，等待 ${wait / 1000}s...`);
                // 更新 UI 提示
                const thinking = document.querySelector('.blink.green-text');
                if (thinking) thinking.textContent = `⏳ AI 服務忙碌，第 ${attempt} 次重試中（${wait / 1000}s）...`;
                await new Promise(r => setTimeout(r, wait));
            } else {
                console.error('Gemini Error:', error);
                if (String(status).includes('503') || String(error?.message).includes('503')) {
                    return '⚠️ AI 服務目前流量過高，請稍候片刻再試一次。';
                }
                return '抱歉，目前無法處理您的請求。請稍後再試。';
            }
        }
    }
}

async function handleSend() {
    const userInput = getUserInput();
    if (!userInput) return;
    const prompt = userInput.value.trim();
    if (!prompt) return;

    if (!API_KEY) {
        alert('請先在 .env 設定 VITE_GEMINI_API_KEY');
        return;
    }

    userInput.value = '';
    userInput.style.height = 'auto';

    const aiReplyId = addMessageToUI(prompt, '', true);
    // 選取 .markdown-body（注意：這是新架構的容器）
    const aiContentDiv = document.querySelector('#' + aiReplyId + ' .markdown-body');

    const aiAnswer = await askGemini(prompt);

    // 逐字打字效果
    if (aiContentDiv) {
        aiContentDiv.classList.remove('blink', 'green-text');
        aiContentDiv.classList.add('black-text');
        aiContentDiv.textContent = ''; // 清空「思考回答中...」
    }

    let currentText = '';
    const chars = aiAnswer.split('');
    const interval = setInterval(() => {
        if (chars.length > 0) {
            currentText += chars.shift();
            // 打字中顯示純文字（避免 Markdown 標記閃爍）
            if (aiContentDiv) aiContentDiv.textContent = currentText;
        } else {
            clearInterval(interval);
            // 打字完成：套用 Markdown 渲染 + URL 超連結
            if (aiContentDiv) aiContentDiv.innerHTML = linkify(marked.parse(currentText));
            // 連結卡片
            const aiMsgDiv = document.getElementById(aiReplyId);
            if (aiMsgDiv) buildLinkCards(aiMsgDiv.querySelector('.ai-content-wrap'), aiAnswer);
            // 儲存至 Firestore（最多保留最近 20 則）
            if (currentUser) {
                const userName = currentUser.displayName || currentUser.email || '匿名使用者';
                conversations.push({
                    user: prompt,
                    ai: aiAnswer,
                    time: new Date().toISOString(),
                    userName: userName,
                    userEmail: currentUser.email || ''
                });
                const recent = conversations.slice(-20);
                const userChatRef = doc(db, 'chats', currentUser.uid);
                setDoc(userChatRef, {
                    history: recent,
                    userName: userName,
                    userEmail: currentUser.email || '',
                    lastActiveAt: new Date().toISOString()
                }, { merge: false })
                    .catch(err => console.error('Firestore Save Error:', err));
            }
            // LINE 通知由 Firebase Cloud Function notifyLineOnNewChat 自動觸發
        }
    }, 15);
}

// 顯示複製成功 Toast 通知
function showCopyToast(msg) {
    let toast = document.getElementById('copy-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'copy-toast';
        toast.style.cssText = 'position:fixed;top:80px;right:20px;background:#333;color:#fff;padding:10px 20px;border-radius:20px;font-size:14px;font-weight:bold;z-index:9999;opacity:0;transform:translateY(-10px);transition:opacity 0.25s ease,transform 0.25s ease;pointer-events:none;';
        document.body.appendChild(toast);
    }
    toast.textContent = msg || '✅ 已複製到剪貼簿！';
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    });
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-10px)';
    }, 1800);
}

// 處理複製點擊
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('copy-btn')) {
        const btn = e.target;
        const item = btn.closest('.list-group-item');
        // 優先取 .markdown-body 文字，其次 <p>
        const srcEl = item.querySelector('.markdown-body') || item.querySelector('p');
        const text = srcEl ? srcEl.innerText : '';
        navigator.clipboard.writeText(text).then(() => {
            const originalText = btn.textContent;
            const originalBg = btn.style.backgroundColor;
            btn.textContent = '✅ 已複製！';
            btn.style.backgroundColor = '#4caf50';
            btn.style.color = 'white';
            btn.disabled = true;
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = originalBg;
                btn.style.color = 'black';
                btn.disabled = false;
            }, 1200);
            showCopyToast();
        }).catch(err => {
            console.error('複製失敗:', err);
            btn.textContent = '❌ 失敗';
            setTimeout(() => { btn.textContent = '複製'; }, 1200);
        });
    }
});

// ── Google 登入 Provider ──
const provider = new GoogleAuthProvider();

// ── 登入遮罩控制 ──
function showLoginScreen() {
    const overlay = document.getElementById('login-overlay');
    if (overlay) overlay.style.display = 'flex';
    const chat = document.getElementById('chat-main');
    if (chat) chat.style.display = 'none';
}

function hideLoginScreen() {
    const overlay = document.getElementById('login-overlay');
    if (overlay) overlay.style.display = 'none';
    const chat = document.getElementById('chat-main');
    if (chat) chat.style.display = '';
}

// ── 更新 Navbar 使用者區塊 ──
function updateNavbarUser(user) {
    const userArea = document.getElementById('navbar-user');
    if (!userArea) return;
    if (user) {
        userArea.innerHTML = `
            <img src="${user.photoURL || ''}" alt="" width="30" height="30"
                style="border-radius:50%;border:2px solid rgba(255,255,255,0.6);object-fit:cover;vertical-align:middle;">
            <span style="color:rgba(255,255,255,0.9);font-size:13px;font-weight:700;max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:middle;">
                ${user.displayName || user.email || '使用者'}
            </span>
            <button onclick="googleLogout()" title="登出"
                style="background:rgba(255,80,80,0.25);border:1px solid rgba(255,120,120,0.5);color:#fff;border-radius:16px;padding:3px 12px;font-size:12px;cursor:pointer;font-weight:700;transition:all 0.2s;vertical-align:middle;"
                onmouseenter="this.style.background='rgba(239,68,68,0.7)'"
                onmouseleave="this.style.background='rgba(255,80,80,0.25)'">
                登出
            </button>`;
    } else {
        userArea.innerHTML = '';
    }
}

// ── 全域函式：Google 登入 ──
window.googleLogin = async function () {
    const btn = document.getElementById('google-login-btn');
    if (btn) { btn.disabled = true; btn.textContent = '登入中...'; }
    try {
        await signInWithPopup(auth, provider);
        // onAuthStateChanged 會自動觸發後續流程
    } catch (err) {
        console.error('Google 登入失敗:', err);
        if (btn) { btn.disabled = false; btn.textContent = '使用 Google 帳號登入'; }
        if (err.code !== 'auth/popup-closed-by-user') {
            alert('登入失敗，請再試一次。');
        }
    }
};

// ── 全域函式：登出 ──
window.googleLogout = async function () {
    if (!confirm('確定要登出嗎？')) return;
    conversations = [];
    const chatList = getChatList();
    if (chatList) chatList.innerHTML = '';
    const hint = document.getElementById('empty-hint');
    if (hint) hint.style.display = '';
    try {
        await signOut(auth);
    } catch (err) {
        console.error('登出失敗:', err);
    }
};

// ── 監聽登入狀態 ──
onAuthStateChanged(auth, async (user) => {
    if (user) {
        currentUser = user;
        hideLoginScreen();
        updateNavbarUser(user);
        // 載入該用戶的對話紀錄
        const docRef = doc(db, 'chats', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            conversations = docSnap.data().history || [];
            updateChatUI();
        } else {
            conversations = [];
            updateChatUI();
        }
    } else {
        currentUser = null;
        updateNavbarUser(null);
        showLoginScreen();
    }
});

// 事件纁定（確保 DOM 已完全載入）
document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = getSendBtn();
    const userInput = getUserInput();
    if (sendBtn) sendBtn.addEventListener('click', handleSend);
    if (userInput) {
        userInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
            }
        });
        // 自動調整輸入框高度
        userInput.addEventListener('input', function () {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
    }
});
