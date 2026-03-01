import { initializeApp } from 'firebase/app';
import {
    getAuth, GoogleAuthProvider,
    signInWithPopup, signOut, onAuthStateChanged
} from 'firebase/auth';
import { getFunctions, httpsCallable } from 'firebase/functions';

// ── Firebase 設定 ──────────────────────────────────────────────
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fns = getFunctions(app, 'asia-northeast1');

// ── Cloud Functions ────────────────────────────────────────────
const getAdminStatsFn = httpsCallable(fns, 'getAdminStats');
const getKnowledgeBaseFn = httpsCallable(fns, 'getKnowledgeBase');
const updateKnowledgeBaseFn = httpsCallable(fns, 'updateKnowledgeBase');
const setAdminFn = httpsCallable(fns, 'setAdmin');

// ── State ──────────────────────────────────────────────────────
let statsCache = null;

// ── Auth 監聽 ──────────────────────────────────────────────────
onAuthStateChanged(auth, async (user) => {
    if (!user) {
        showLoginScreen();
        return;
    }

    // 取得 token 確認 admin claim
    const token = await user.getIdTokenResult(true);
    if (!token.claims.admin) {
        await signOut(auth);
        document.getElementById('login-error').textContent = '⛔ 此帳號無管理員權限，請聯繫阿凱老師。';
        showLoginScreen();
        return;
    }

    hideLoginScreen(user);
    await loadStats();
});

// ── 登入 ──────────────────────────────────────────────────────
document.getElementById('login-btn').addEventListener('click', async () => {
    try {
        await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (e) {
        document.getElementById('login-error').textContent = '登入失敗：' + e.message;
    }
});

// ── 登出 ──────────────────────────────────────────────────────
document.getElementById('logout-link').addEventListener('click', () => signOut(auth));

// ── 顯示/隱藏登入遮罩 ─────────────────────────────────────────
function showLoginScreen() {
    document.getElementById('login-screen').style.display = 'flex';
}
function hideLoginScreen(user) {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('admin-email').textContent = user.email;
}

// ── 分頁切換 ──────────────────────────────────────────────────
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        item.classList.add('active');
        const pageId = 'page-' + item.dataset.page;
        document.getElementById(pageId).classList.add('active');

        if (item.dataset.page === 'knowledge' && !document.getElementById('kb-editor').value) {
            loadKnowledgeBase();
        }
    });
});

// ── 載入統計資料 ──────────────────────────────────────────────
async function loadStats() {
    try {
        const res = await getAdminStatsFn();
        statsCache = res.data;
        renderStats(statsCache);
        renderRecords(statsCache.recentChats);
    } catch (e) {
        document.getElementById('stats-content').innerHTML =
            `<p style="color:#f43f5e">錯誤：${e.message}</p>`;
    }
}

function renderStats(data) {
    const html = `
    <div class="stat-grid">
      <div class="stat-card">
        <div class="label">📨 總訊息數</div>
        <div class="val">${data.totalMessages}</div>
      </div>
      <div class="stat-card">
        <div class="label">👥 總使用者</div>
        <div class="val">${data.totalUsers}</div>
      </div>
      <div class="stat-card">
        <div class="label">🔥 今日活躍</div>
        <div class="val">${data.todayActiveUsers}</div>
      </div>
    </div>
    <h3 style="margin-bottom:12px;font-size:16px">🔑 熱門關鍵字 TOP 10</h3>
    <div class="keyword-list">
      ${data.topKeywords.map(k =>
        `<span class="keyword-tag">${k.word} <strong style="color:#fff">${k.count}</strong></span>`
    ).join('')}
    </div>`;
    document.getElementById('stats-content').innerHTML = html;
}

// ── 對話記錄 ──────────────────────────────────────────────────
let allChats = [];

function renderRecords(chats) {
    allChats = chats;
    updateRecordTable(chats);
}

function updateRecordTable(chats) {
    if (!chats || chats.length === 0) {
        document.getElementById('records-content').innerHTML = '<p style="color:var(--muted)">暫無記錄</p>';
        return;
    }
    const rows = chats.map(c => {
        const t = c.time ? new Date(c.time).toLocaleString('zh-TW') : '-';
        const q = escapeHtml(c.user).slice(0, 80);
        const a = escapeHtml(c.ai).slice(0, 120);
        return `<tr>
          <td>${escapeHtml(c.userName)}<br><small style="color:var(--muted)">${escapeHtml(c.userEmail)}</small></td>
          <td class="q-cell">${q}${c.user.length > 80 ? '…' : ''}</td>
          <td class="a-cell">${a}${c.ai.length > 120 ? '…' : ''}</td>
          <td style="white-space:nowrap;font-size:12px;color:var(--muted)">${t}</td>
        </tr>`;
    }).join('');

    document.getElementById('records-content').innerHTML = `
    <div class="table-wrap">
      <table>
        <thead><tr><th>使用者</th><th>問題</th><th>AI 回答摘要</th><th>時間</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

document.getElementById('search-input').addEventListener('input', function () {
    const q = this.value.trim().toLowerCase();
    if (!q) { updateRecordTable(allChats); return; }
    const filtered = allChats.filter(c =>
        c.userName.toLowerCase().includes(q) ||
        c.userEmail.toLowerCase().includes(q) ||
        c.user.toLowerCase().includes(q)
    );
    updateRecordTable(filtered);
});

// ── 知識庫 ────────────────────────────────────────────────────
const kbEditor = document.getElementById('kb-editor');
const kbStatus = document.getElementById('kb-status');
const kbCharCount = document.getElementById('kb-char-count');

async function loadKnowledgeBase() {
    kbEditor.placeholder = '載入中…';
    kbStatus.textContent = '';
    try {
        const res = await getKnowledgeBaseFn();
        kbEditor.value = res.data.content || '';
        kbCharCount.textContent = `${kbEditor.value.length.toLocaleString()} 字元`;
    } catch (e) {
        kbStatus.textContent = '❌ 載入失敗：' + e.message;
    }
}

kbEditor.addEventListener('input', () => {
    kbCharCount.textContent = `${kbEditor.value.length.toLocaleString()} 字元`;
});

document.getElementById('kb-save-btn').addEventListener('click', async () => {
    kbStatus.textContent = '⏳ 儲存中…';
    try {
        await updateKnowledgeBaseFn({ content: kbEditor.value });
        kbStatus.textContent = '✅ 已儲存！AI 將立即使用新版本。';
        kbStatus.style.color = '#34d399';
        setTimeout(() => { kbStatus.textContent = ''; kbStatus.style.color = ''; }, 4000);
    } catch (e) {
        kbStatus.textContent = '❌ 儲存失敗：' + e.message;
        kbStatus.style.color = '#f43f5e';
    }
});

document.getElementById('kb-reload-btn').addEventListener('click', loadKnowledgeBase);

// ── 設定管理員 ────────────────────────────────────────────────
document.getElementById('set-admin-btn').addEventListener('click', async () => {
    const email = document.getElementById('admin-email-input').value.trim();
    const msgEl = document.getElementById('set-admin-msg');
    if (!email) { msgEl.textContent = '請輸入 Email'; msgEl.style.color = '#f43f5e'; return; }

    msgEl.textContent = '⏳ 設定中…'; msgEl.style.color = 'var(--muted)';
    try {
        const res = await setAdminFn({ email });
        msgEl.textContent = '✅ ' + res.data.message;
        msgEl.style.color = '#34d399';
        document.getElementById('admin-email-input').value = '';
    } catch (e) {
        msgEl.textContent = '❌ ' + e.message;
        msgEl.style.color = '#f43f5e';
    }
});

// ── 工具函式 ──────────────────────────────────────────────────
function escapeHtml(str) {
    return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}
