import './style.css'
import { GoogleGenerativeAI } from "@google/generative-ai";

import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, arrayUnion } from 'firebase/firestore';

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

const chatList = document.querySelector('#list-group');
const userInput = document.querySelector('#user-input');
const sendBtn = document.querySelector('#send-button');

// URL 自動轉超連結（用字串拼接避免換行破壞HTML屬性）
function linkify(text) {
    const urlRegex = /(https?:\/\/[^\s<>"]+)/g;
    return text.replace(urlRegex, function (url) {
        const display = url.length > 40 ? url.substring(0, 40) + '…' : url;
        return '<a href="' + url + '" target="_blank" rel="noopener noreferrer" style="color:#1565c0;text-decoration:underline;word-break:break-all;">' + display + '</a>';
    });
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

        const icon = document.createElement('img');
        icon.src = 'https://www.google.com/s2/favicons?sz=16&domain=' + domain;
        icon.width = 14; icon.height = 14;
        icon.style.borderRadius = '3px';
        icon.onerror = function () { icon.style.display = 'none'; };

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
    chatList.innerHTML = '';
    let lastLabel = '';
    // conversations 是旰到新排序，從後往前插 afterbegin，所以先倒序再遞迴
    const reversed = [...conversations].reverse();
    reversed.forEach((conv, idx) => {
        addMessageToUI(conv.user, conv.ai, false, conv.time);
        // 日期標籤：每段日期第一次出現時插入
        const label = formatDateLabel(conv.time);
        if (label && label !== lastLabel) {
            lastLabel = label;
            const sep = document.createElement('div');
            sep.style.cssText = 'text-align:center;padding:6px 0;font-size:12px;color:#888;';
            sep.innerHTML = '<span style="background:#e8eaf6;border-radius:12px;padding:3px 14px;">' + label + '</span>';
            chatList.insertAdjacentElement('afterbegin', sep);
        }
    });
}

// 清除對話（全域函式，供 HTML onclick 呼叫）
window.clearHistory = async function () {
    if (!confirm('確定要清除所有對話導孤嗎？此操作無法復原。')) return;
    conversations = [];
    chatList.innerHTML = '';
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
        <div><p class="mb-0 opacity-75" style="font-weight:bold;color:blue;">${userQuestion}${historyBadge}</p></div>
        <div class="mt-1 small">
          <button class="btn btn-outline-secondary btn-sm copy-btn" style="background-color:#90ee90;color:black;font-weight:bold;">複製</button>
        </div>
      </div>
    </div>`;

    // AI 回答外框
    const aiReplyId = 'ai-reply-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6);
    // 歷史訊息直接用 marked.parse 渲染 Markdown
    const aiContent = isNew ? '思考回答中...' : marked.parse(linkify(aiAnswer));
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

async function askGemini(prompt) {
    try {
        const fullPrompt = `知識庫：\n${knowledgeBase}\n\n使用者問題：${prompt}`;
        const result = await model.generateContent(fullPrompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini Error:", error);
        return "抱歉，目前無法處理您的請求。請稍後再試。";
    }
}

async function handleSend() {
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
            if (aiContentDiv) aiContentDiv.innerHTML = marked.parse(linkify(currentText));
            // 連結卡片
            const aiMsgDiv = document.getElementById(aiReplyId);
            if (aiMsgDiv) buildLinkCards(aiMsgDiv.querySelector('.ai-content-wrap'), aiAnswer);
            // 儲存至 Firestore（最多保留最近 20 則）
            if (currentUser) {
                conversations.push({ user: prompt, ai: aiAnswer, time: new Date().toISOString() });
                const recent = conversations.slice(-20);
                const userChatRef = doc(db, 'chats', currentUser.uid);
                setDoc(userChatRef, { history: recent }, { merge: false })
                    .catch(err => console.error('Firestore Save Error:', err));
            }

            // LINE 通知現在由 Firebase Cloud Function notifyLineOnNewChat
            // 在 Firestore 寫入後自動觸發，不再需要前端直接呼叫。

            // 初始化：匿名登入與載入歷史紀錄
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    currentUser = user;
                    console.log("Logged in as:", user.uid);

                    // 從 Firestore 載入紀錄
                    const docRef = doc(db, "chats", user.uid);
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        conversations = docSnap.data().history || [];
                        updateChatUI();
                    }
                } else {
                    signInAnonymously(auth).catch((error) => {
                        console.error("Firebase Anonymous Auth Error:", error);
                    });
                }
            });

            sendBtn.addEventListener('click', handleSend);
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

            // 顯示複製成功 Toast 通知
            function showCopyToast() {
                let toast = document.getElementById('copy-toast');
                if (!toast) {
                    toast = document.createElement('div');
                    toast.id = 'copy-toast';
                    toast.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: #333;
            color: #fff;
            padding: 10px 20px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: bold;
            z-index: 9999;
            opacity: 0;
            transform: translateY(-10px);
            transition: opacity 0.25s ease, transform 0.25s ease;
            pointer-events: none;
        `;
                    toast.textContent = '✅ 已複製到剪貼簿！';
                    document.body.appendChild(toast);
                }
                // 顯示
                requestAnimationFrame(() => {
                    toast.style.opacity = '1';
                    toast.style.transform = 'translateY(0)';
                });
                // 1.8 秒後淡出
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
                    const text = btn.closest('.list-group-item').querySelector('p').innerText;
                    navigator.clipboard.writeText(text).then(() => {
                        // 按鈕視覺回饋
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
                        // 顯示 Toast
                        showCopyToast();
                    }).catch(err => {
                        console.error('複製失敗:', err);
                        btn.textContent = '❌ 失敗';
                        setTimeout(() => { btn.textContent = '複製'; }, 1200);
                    });
                }
            });

// 移除原本的初始化載入，改由 onAuthStateChanged 觸發
// updateChatUI();
