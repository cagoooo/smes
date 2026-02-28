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

function updateChatUI() {
    chatList.innerHTML = '';
    conversations.forEach(conv => {
        addMessageToUI(conv.user, conv.ai, false);
    });
}

function addMessageToUI(userQuestion, aiAnswer, isNew = true) {
    // 使用者問題
    const userHtml = `
    <div class="list-group-item list-group-item-action d-flex gap-3 py-3">
      <img src="https://www.smes.tyc.edu.tw/uploads/tadnews/image/logo/logo.png" alt="" width="64" height="64" class="rounded-circle flex-shrink-0">
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <p class="mb-0 opacity-75" style="font-weight: bold; color: blue;">${userQuestion}</p>
        </div>
        <div class="mt-1 small">
          <button class="btn btn-outline-secondary btn-sm copy-btn" style="background-color: #90ee90; color: black; font-weight: bold;">複製</button>
        </div>
      </div>
    </div>`;

    // AI 回答外框 (先顯示思考中)
    const aiReplyId = `ai-reply-${Date.now()}`;
    const aiHtml = `
    <div id="${aiReplyId}" class="list-group-item list-group-item-action d-flex gap-3 py-3 answer-background">
      <img src="https://www.smes.tyc.edu.tw/uploads/tadnews/image/person/k-a.png" alt="" width="64" height="66" class="rounded-circle flex-shrink-0">
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <p class="mb-0 opacity-75 ${isNew ? 'blink green-text' : 'black-text'}" style="font-weight: bold;">${isNew ? '思考回答中...' : aiAnswer.replace(/\n/g, '<br>')}</p>
          <div class="mt-1 small">
            <button class="btn btn-outline-secondary btn-sm copy-btn" style="background-color: #ffff99; color: black; font-weight: bold;">複製</button>
          </div>
        </div>
      </div>
    </div>`;

    chatList.insertAdjacentHTML('afterbegin', aiHtml);
    chatList.insertAdjacentHTML('afterbegin', userHtml);

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
        alert("請先在 .env 設定 VITE_GEMINI_API_KEY");
        return;
    }

    userInput.value = '';
    userInput.style.height = 'auto';

    const aiReplyId = addMessageToUI(prompt, '', true);
    const aiParagraph = document.querySelector(`#${aiReplyId} p`);

    const aiAnswer = await askGemini(prompt);

    // 逐字打字效果
    aiParagraph.classList.remove('blink', 'green-text');
    aiParagraph.classList.add('black-text');
    aiParagraph.innerHTML = '';

    let currentText = '';
    const chars = aiAnswer.split('');
    const interval = setInterval(() => {
        if (chars.length > 0) {
            currentText += chars.shift();
            aiParagraph.innerHTML = currentText.replace(/\n/g, '<br>');
        } else {
            clearInterval(interval);
            // 儲存至 Firestore
            if (currentUser) {
                const userChatRef = doc(db, "chats", currentUser.uid);
                setDoc(userChatRef, {
                    history: arrayUnion({ user: prompt, ai: aiAnswer, time: new Date().toISOString() })
                }, { merge: true }).catch(err => console.error("Firestore Save Error:", err));
            }
        }
    }, 15);
}

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

// 處理複製點擊
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('copy-btn')) {
        const text = e.target.closest('.list-group-item').querySelector('p').innerText;
        navigator.clipboard.writeText(text).then(() => {
            // 這裡理論上要彈出 Bootstrap Modal，簡化版先用 alert 或 console
            console.log("Copied:", text);
        });
    }
});

// 移除原本的初始化載入，改由 onAuthStateChanged 觸發
// updateChatUI();
