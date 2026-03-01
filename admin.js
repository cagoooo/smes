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

    // 先顯示載入狀態
    document.getElementById('login-error').textContent = '⏳ 驗證管理員身份中…';
    document.getElementById('login-error').style.color = '#94a3b8';

    try {
        // 強制刷新 token（讓 custom claim 生效）
        await user.getIdToken(true);

        // 直接呼叫後端 Function 驗證：後端已有 permission-denied 保護
        // 若成功即代表確實是 admin
        const res = await getAdminStatsFn();
        statsCache = res.data;

        hideLoginScreen(user);
        renderStats(statsCache);
        renderRecords(statsCache.recentChats);
    } catch (e) {
        const code = e?.code || '';
        if (code === 'functions/permission-denied' || code === 'functions/unauthenticated') {
            await signOut(auth);
            document.getElementById('login-error').textContent = '⛔ 此帳號無管理員權限，請聯繫阿凱老師。';
            document.getElementById('login-error').style.color = '#f43f5e';
            showLoginScreen();
        } else {
            // 其他錯誤（網路等）仍進入後台，Function 個別頁面再處理
            console.warn('Admin auth check error:', e.message);
            hideLoginScreen(user);
        }
    }
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
    const maxKw = data.topKeywords[0]?.count || 1;
    const kwBars = data.topKeywords.map((k, i) => {
        const pct = Math.round((k.count / maxKw) * 100);
        return `<div class="keyword-row">
          <span class="keyword-rank">${i + 1}</span>
          <span class="keyword-name" title="${escapeHtml(k.word)}">${escapeHtml(k.word)}</span>
          <div class="keyword-bar-wrap">
            <div class="keyword-bar-fill" style="width:0%" data-pct="${pct}"></div>
          </div>
          <span class="keyword-count">${k.count}</span>
        </div>`;
    }).join('');

    const today = new Date().toLocaleDateString('zh-TW', { timeZone: 'Asia/Taipei' });

    document.getElementById('stats-content').innerHTML = `
    <div class="stat-grid">
      <div class="stat-card card-msg">
        <div class="stat-icon">💬</div>
        <div class="label">訊息總數</div>
        <div class="val" data-count="${data.totalMessages}">0</div>
        <div class="stat-sub">累計問答記錄</div>
      </div>
      <div class="stat-card card-users">
        <div class="stat-icon">👥</div>
        <div class="label">使用者數</div>
        <div class="val" data-count="${data.totalUsers}">0</div>
        <div class="stat-sub">個別使用者</div>
      </div>
      <div class="stat-card card-today">
        <div class="stat-icon">🔥</div>
        <div class="label">今日活躍</div>
        <div class="val" data-count="${data.todayActiveUsers}">0</div>
        <div class="stat-sub">${today}</div>
      </div>
    </div>
    <div class="keyword-section">
      <h3>🏆 熱門關鍵字 TOP ${data.topKeywords.length}</h3>
      <div class="keyword-bars">${kwBars}</div>
    </div>`;

    // 數字計數動畫
    document.querySelectorAll('.val[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count, 10);
        if (!target) { el.textContent = '0'; return; }
        const duration = 900;
        const step = Math.ceil(target / (duration / 16));
        let current = 0;
        const timer = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = current.toLocaleString();
            if (current >= target) clearInterval(timer);
        }, 16);
    });

    // 長條圖動畫（延遲 100ms 讓 DOM 準備好）
    setTimeout(() => {
        document.querySelectorAll('.keyword-bar-fill').forEach(bar => {
            bar.style.width = bar.dataset.pct + '%';
        });
    }, 100);
}


// ── 對話記錄 ──────────────────────────────────────────────────
let allChats = [];

function renderRecords(chats) {
    allChats = chats;
    updateRecordTable(chats);
}

function updateRecordTable(chats) {
    const countEl = document.getElementById('record-count');
    if (countEl) countEl.textContent = `${chats.length} 筆記錄`;

    if (!chats || chats.length === 0) {
        document.getElementById('records-content').innerHTML =
            `<div style="text-align:center;padding:60px;color:var(--muted)">
               <div style="font-size:40px;margin-bottom:12px">💬</div>
               <div>暫無對話記錄</div>
             </div>`;
        return;
    }

    const cards = chats.map(c => {
        const isAnon = !c.userEmail || c.userName === '訪客' || c.userName === 'anonymous';
        const initial = isAnon ? '?' : (c.userName?.[0] || '?').toUpperCase();
        const avatarClass = isAnon ? 'anon' : 'auth';
        const timeStr = c.time ? new Date(c.time).toLocaleString('zh-TW', {
            month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit'
        }) : '-';
        const qText = escapeHtml(c.user).slice(0, 120) + (c.user.length > 120 ? '…' : '');
        const aText = escapeHtml(c.ai).slice(0, 160) + (c.ai.length > 160 ? '…' : '');

        return `<div class="chat-card">
          <div class="chat-card-header">
            <div class="user-avatar ${avatarClass}">${initial}</div>
            <div class="user-meta">
              <div class="user-name">${escapeHtml(c.userName || '訪客')}</div>
              <div class="user-email">${escapeHtml(c.userEmail || '匿名使用者')}</div>
            </div>
            <div class="time-chip">${timeStr}</div>
          </div>
          <div class="chat-q">
            <div class="q-label">問 Q</div>
            ${qText}
          </div>
          <div class="chat-a">
            <div class="a-label">AI 答</div>
            ${aText}
          </div>
        </div>`;
    }).join('');

    document.getElementById('records-content').innerHTML =
        `<div class="chat-cards">${cards}</div>`;
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
const kbLineCount = document.getElementById('kb-line-count');

function updateKbStats() {
    const val = kbEditor.value;
    kbCharCount.textContent = val.length.toLocaleString();
    kbLineCount.textContent = val ? val.split('\n').length.toLocaleString() : '0';
    // 字元過多警告
    if (val.length > 4500) {
        kbCharCount.style.color = '#f87171';
    } else if (val.length > 3000) {
        kbCharCount.style.color = '#fbbf24';
    } else {
        kbCharCount.style.color = '#7ee787';
    }
}

async function loadKnowledgeBase() {
    kbEditor.placeholder = '載入中…';
    kbStatus.textContent = '';
    try {
        const res = await getKnowledgeBaseFn();
        kbEditor.value = res.data.content || '';
        updateKbStats();
    } catch (e) {
        kbStatus.textContent = '❌ 載入失敗：' + e.message;
    }
}

kbEditor.addEventListener('input', updateKbStats);


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
