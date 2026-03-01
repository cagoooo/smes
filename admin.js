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
const getAdminStatsFn          = httpsCallable(fns, 'getAdminStats');
const getKnowledgeBaseFn       = httpsCallable(fns, 'getKnowledgeBase');
const updateKnowledgeBaseFn    = httpsCallable(fns, 'updateKnowledgeBase');
const setAdminFn               = httpsCallable(fns, 'setAdmin');
const deleteUserChatFn         = httpsCallable(fns, 'deleteUserChat');
const getKnowledgeHistoryFn    = httpsCallable(fns, 'getKnowledgeHistory');
const restoreKnowledgeVersionFn = httpsCallable(fns, 'restoreKnowledgeVersion');
const getAlertKeywordsFn       = httpsCallable(fns, 'getAlertKeywords');
const setAlertKeywordsFn       = httpsCallable(fns, 'setAlertKeywords');

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
// ── 登出 ────────────────────────────────────────────
function doLogout() {
    if (typeof customConfirm === 'function') {
        customConfirm({
            icon: '👋',
            title: '確認登出',
            message: '確定要登出管理員後台嗎？',
            confirmText: '登出',
            confirmGradient: 'linear-gradient(135deg,#4f46e5,#7c3aed)',
            onConfirm: () => signOut(auth),
        });
    } else {
        signOut(auth);
    }
}
document.getElementById('logout-link').addEventListener('click', doLogout);

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
        // 切換離開知識庫頁時，若有未儲存變更則提示
        if (kbDirty && item.dataset.page !== 'knowledge') {
            if (typeof customConfirm === 'function') {
                customConfirm({
                    icon: '⚠️',
                    title: '有未儲存的變更',
                    message: '知識庫尚未儲存，確定要離開吗？',
                    confirmText: '離開不儲存',
                    confirmGradient: 'linear-gradient(135deg,#f43f5e,#be123c)',
                    onConfirm: () => { kbDirty = false; },
                });
            }
        }
    });
});

// ── 載入統計資料 ──────────────────────────────────────────────
let lastStatsUpdate = null;
let currentStatsDays = 7;
async function loadStats(days = currentStatsDays) {
    currentStatsDays = days;
    document.querySelectorAll('.days-btn').forEach(b => {
        b.classList.toggle('active', Number(b.dataset.days) === days);
    });
    const refreshBtn = document.getElementById('stats-refresh-btn');
    if (refreshBtn) { refreshBtn.disabled = true; refreshBtn.style.opacity = '0.5'; }
    try {
        const res = await getAdminStatsFn({ days });
        statsCache = res.data;
        lastStatsUpdate = new Date();
        renderStats(statsCache, days);
        renderRecords(statsCache.recentChats);
    } catch (e) {
        document.getElementById('stats-content').innerHTML =
            `<p style="color:#f43f5e">錯誤：${e.message}</p>`;
    } finally {
        if (refreshBtn) { refreshBtn.disabled = false; refreshBtn.style.opacity = '1'; }
    }
}

function renderStats(data, days = 7) {
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
    const updatedStr = lastStatsUpdate
        ? lastStatsUpdate.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
        : '--:--';
    const trendLabel = days === 0 ? '近30 天' : `近 ${days} 天`;

    document.getElementById('stats-content').innerHTML = `
    <div class="stats-header-bar">
      <span class="stats-update-time">⏱️ 最後更新：${updatedStr}</span>
      <div class="days-toggle">
        <button class="days-btn${days === 7 ? ' active' : ''}" data-days="7">7 天</button>
        <button class="days-btn${days === 14 ? ' active' : ''}" data-days="14">14 天</button>
        <button class="days-btn${days === 30 ? ' active' : ''}" data-days="30">30 天</button>
      </div>
    </div>
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
        <div class="label">今日活踴</div>
        <div class="val" data-count="${data.todayActiveUsers}">0</div>
        <div class="stat-sub">${today}</div>
      </div>
    </div>
    <div class="chart-row">
      <div class="chart-card">
        <h4>📈 ${trendLabel}問答趨勢</h4>
        <canvas id="chart-trend"></canvas>
      </div>
      <div class="chart-card">
        <h4>🧩 使用者類型</h4>
        <canvas id="chart-pie"></canvas>
      </div>
    </div>
    <div class="keyword-section">
      <h3>🏆 熱門關鍵字 TOP ${data.topKeywords.length}</h3>
      <div class="keyword-bars">${kwBars}</div>
    </div>`;

    // 日期天數按鈕事件
    document.querySelectorAll('.days-btn').forEach(btn => {
        btn.addEventListener('click', () => loadStats(Number(btn.dataset.days)));
    });

    // 數字計數動畻
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

    // 長條圖動畫
    setTimeout(() => {
        document.querySelectorAll('.keyword-bar-fill').forEach(bar => {
            bar.style.width = bar.dataset.pct + '%';
        });
        renderCharts(data);
    }, 100);
}

// ── Chart.js 圖表渲染 ───────────────────────────────────
let chartTrend = null, chartPie = null;

function renderCharts(data) {
    if (typeof Chart === 'undefined') return;

    Chart.defaults.color = 'rgba(255,255,255,0.5)';
    Chart.defaults.borderColor = 'rgba(255,255,255,0.06)';

    // 折線圖：7 天趨勢
    const trendCtx = document.getElementById('chart-trend');
    if (trendCtx) {
        if (chartTrend) chartTrend.destroy();
        const labels = Object.keys(data.dailyTrend || {}).sort();
        const values = labels.map(d => (data.dailyTrend || {})[d] || 0);
        chartTrend = new Chart(trendCtx, {
            type: 'line',
            data: {
                labels: labels.map(d => d.slice(5)),
                datasets: [{
                    label: '問答次數', data: values,
                    borderColor: '#818cf8', backgroundColor: 'rgba(129,140,248,0.15)',
                    fill: true, tension: 0.4, pointRadius: 4,
                    pointBackgroundColor: '#818cf8', pointBorderWidth: 0
                }]
            },
            options: {
                plugins: { legend: { display: false } },
                scales: {
                    x: { ticks: { font: { size: 11 } }, grid: { color: 'rgba(255,255,255,0.05)' } },
                    y: { ticks: { font: { size: 11 }, stepSize: 1 }, grid: { color: 'rgba(255,255,255,0.05)' }, beginAtZero: true }
                },
                maintainAspectRatio: false,
            }
        });
    }

    // 甜甜圈圖：登入 vs 訪客
    const pieCtx = document.getElementById('chart-pie');
    if (pieCtx) {
        if (chartPie) chartPie.destroy();
        chartPie = new Chart(pieCtx, {
            type: 'doughnut',
            data: {
                labels: ['登入用戶', '訪客'],
                datasets: [{
                    data: [data.authCount || 0, data.anonCount || 0],
                    backgroundColor: ['#818cf8', '#f472b6'], borderWidth: 0
                }]
            },
            options: {
                plugins: { legend: { position: 'bottom', labels: { font: { size: 11 }, padding: 12 } } },
                maintainAspectRatio: false,
                cutout: '62%'
            }
        });
    }
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
            <button class="chat-delete-btn"
              data-uid="${escapeHtml(c.uid)}"
              data-time="${escapeHtml(c.time || '')}"
              title="刪除此筆記錄">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                <path d="M10 11v6M14 11v6"/>
                <path d="M9 6V4h6v2"/>
              </svg>
            </button>
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


// ── 對話日期筜選 + 搜尋 ───────────────────────────────
function applyRecordFilters() {
    const q = (document.getElementById('search-input')?.value || '').trim().toLowerCase();
    const from = document.getElementById('date-from')?.value;
    const to = document.getElementById('date-to')?.value;
    let result = allChats;
    if (from) result = result.filter(c => c.time && String(c.time).slice(0, 10) >= from);
    if (to) result = result.filter(c => c.time && String(c.time).slice(0, 10) <= to);
    if (q) result = result.filter(c =>
        (c.userName || '').toLowerCase().includes(q) ||
        (c.userEmail || '').toLowerCase().includes(q) ||
        (c.user || '').toLowerCase().includes(q) ||
        (c.ai || '').toLowerCase().includes(q)
    );
    updateRecordTable(result);
}

document.getElementById('search-input').addEventListener('input', applyRecordFilters);
document.addEventListener('change', e => {
    if (e.target.id === 'date-from' || e.target.id === 'date-to') applyRecordFilters();
});
document.addEventListener('click', e => {
    if (e.target.id === 'date-clear-btn') {
        const df = document.getElementById('date-from');
        const dt = document.getElementById('date-to');
        if (df) df.value = '';
        if (dt) dt.value = '';
        applyRecordFilters();
    }
});

// ── 刪除單筆對話（事件委派） ──────────────────────────────
document.getElementById('records-content').addEventListener('click', function (e) {
    const btn = e.target.closest('.chat-delete-btn');
    if (!btn) return;
    const uid = btn.dataset.uid;
    const time = btn.dataset.time;
    customConfirm({
        icon: '🗑️',
        title: '刪除對話記錄',
        message: '確定要永久刪除此筆對話吗？此操作無法復原。',
        confirmText: '刪除',
        confirmGradient: 'linear-gradient(135deg,#f43f5e,#be123c)',
        onConfirm: async () => {
            btn.disabled = true;
            const svg = btn.querySelector('svg');
            if (svg) svg.style.opacity = '0.3';
            try {
                await deleteUserChatFn({ uid, time });
                allChats = allChats.filter(c => !(c.uid === uid && c.time === time));
                updateRecordTable(allChats);
            } catch (err) {
                alert('刪除失敗：' + err.message);
                btn.disabled = false;
                if (svg) svg.style.opacity = '1';
            }
        },
    });
});

// ── 匯出 CSV ──────────────────────────────────────────

function exportCSV() {
    if (allChats.length === 0) return;
    const header = '時間,使用者,Email,問題,AI 回答';
    const rows = allChats.map(c => [
        c.time ? new Date(c.time).toLocaleString('zh-TW') : '',
        `"${(c.userName || '').replace(/"/g, '""')}"`,
        `"${(c.userEmail || '').replace(/"/g, '""')}"`,
        `"${(c.user || '').replace(/"/g, '""')}"`,
        `"${(c.ai || '').replace(/"/g, '""')}"`,
    ].join(','));
    const csv = '\uFEFF' + [header, ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `對話記錄_${new Date().toLocaleDateString('zh-TW').replace(/\//g, '-')}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

const exportCsvBtn = document.getElementById('export-csv-btn');
if (exportCsvBtn) exportCsvBtn.addEventListener('click', exportCSV);

// ── 知識庫 ────────────────────────────────────────────────────
const kbEditor = document.getElementById('kb-editor');
const kbStatus = document.getElementById('kb-status');
const kbCharCount = document.getElementById('kb-char-count');
const kbLineCount = document.getElementById('kb-line-count');
let kbDirty = false; // 未儲存狀態

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

kbEditor.addEventListener('input', () => {
    updateKbStats();
    kbDirty = true;
    // 儲存按鈕題色提示
    const saveBtn = document.getElementById('kb-save-btn');
    if (saveBtn) saveBtn.style.boxShadow = '0 0 0 3px rgba(251,191,36,0.45)';
});


document.getElementById('kb-save-btn').addEventListener('click', async () => {
    kbStatus.textContent = '⏳ 儲存中…';
    try {
        await updateKnowledgeBaseFn({ content: kbEditor.value });
        kbDirty = false;
        kbStatus.textContent = '✅ 已儲存！AI 將立即使用新版本。';
        kbStatus.style.color = '#34d399';
        const saveBtn = document.getElementById('kb-save-btn');
        if (saveBtn) saveBtn.style.boxShadow = '';
        setTimeout(() => { kbStatus.textContent = ''; kbStatus.style.color = ''; }, 4000);
        // 儲存後自動重弓轉歷史清單
        loadKnowledgeHistory();
    } catch (e) {
        kbStatus.textContent = '❌ 儲存失敗：' + e.message;
        kbStatus.style.color = '#f43f5e';
    }
});

document.getElementById('kb-reload-btn').addEventListener('click', loadKnowledgeBase);

// ── 知識庫版本歷史 ──────────────────────────────────
async function loadKnowledgeHistory() {
    const listEl = document.getElementById('kb-history-list');
    if (!listEl) return;
    listEl.innerHTML = '<p style="color:var(--muted);padding:8px">載入中…</p>';
    try {
        const res = await getKnowledgeHistoryFn();
        const versions = res.data.versions || [];
        if (versions.length === 0) {
            listEl.innerHTML = '<p style="color:var(--muted);padding:8px">尚無版本歷史</p>';
            return;
        }
        listEl.innerHTML = versions.map(v => {
            const t = v.savedAt ? new Date(v.savedAt).toLocaleString('zh-TW') : v.id;
            const chars = v.charCount ? `${v.charCount.toLocaleString()} 字` : '';
            const by = v.savedBy ? `由 ${v.savedBy}` : '';
            return `<div class="kb-history-item">
              <div class="kb-history-meta">
                <span class="kb-history-time"> ${t}</span>
                <span class="kb-history-chars">${chars}</span>
                <span class="kb-history-by">${by}</span>
              </div>
              <button class="btn-restore" data-vid="${v.id}">⏪ 回復此版本</button>
            </div>`;
        }).join('');
        listEl.querySelectorAll('.btn-restore').forEach(btn => {
            btn.addEventListener('click', () => {
                customConfirm({
                    icon: '🗂️',
                    title: '回復知識庫版本',
                    message: '確定要用這個旧版本覆蓋現有知識庫嗎？',
                    confirmText: '回復',
                    confirmGradient: 'linear-gradient(135deg,#7c3aed,#4f46e5)',
                    onConfirm: async () => {
                        btn.disabled = true;
                        btn.textContent = '回復中…';
                        try {
                            const r = await restoreKnowledgeVersionFn({ versionId: btn.dataset.vid });
                            kbEditor.value = r.data.content || '';
                            updateKbStats();
                            kbDirty = false;
                            kbStatus.textContent = '✅ 版本已回復，請確認內容後再儲存。';
                            kbStatus.style.color = '#34d399';
                        } catch (err) {
                            alert('回復失敗：' + err.message);
                            btn.disabled = false;
                            btn.textContent = '⏪ 回復此版本';
                        }
                    },
                });
            });
        });
    } catch (e) {
        listEl.innerHTML = `<p style="color:#f43f5e">載入失敗：${e.message}</p>`;
    }
}

// 版本歷史按鈕
document.addEventListener('click', e => {
    if (e.target.id === 'kb-history-toggle') {
        const listEl = document.getElementById('kb-history-list');
        if (!listEl) return;
        const hidden = listEl.style.display === 'none' || !listEl.style.display;
        listEl.style.display = hidden ? 'block' : 'none';
        e.target.textContent = hidden ? '📁 收起版本歷史' : '🗂️ 查看版本歷史';
        if (hidden) loadKnowledgeHistory();
    }
});


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

// ── 統計刷新按鈕 ───────────────────────────────────────────────
const refreshBtn = document.getElementById('stats-refresh-btn');
if (refreshBtn) refreshBtn.addEventListener('click', () => loadStats(currentStatsDays));

// ── 告警關鍵字管理 ──────────────────────────────────
let alertKeywords = [];

async function loadAlertKeywords() {
    const tagsEl = document.getElementById('alert-tags');
    if (!tagsEl) return;
    try {
        const res = await getAlertKeywordsFn();
        alertKeywords = res.data.keywords || [];
        renderAlertTags();
    } catch (e) { console.warn('告警關鍵字載入失敗:', e.message); }
}

function renderAlertTags() {
    const tagsEl = document.getElementById('alert-tags');
    if (!tagsEl) return;
    tagsEl.innerHTML = alertKeywords.map((kw, i) =>
        `<span class="alert-tag">${escapeHtml(kw)}
          <button class="alert-tag-del" data-idx="${i}" title="移除">×</button>
        </span>`
    ).join('');
    tagsEl.querySelectorAll('.alert-tag-del').forEach(btn => {
        btn.addEventListener('click', () => {
            alertKeywords.splice(Number(btn.dataset.idx), 1);
            renderAlertTags();
        });
    });
}

async function saveAlertKeywords() {
    const msgEl = document.getElementById('alert-save-msg');
    if (msgEl) { msgEl.textContent = '⏳ 儲存中…'; msgEl.style.color = 'var(--muted)'; }
    try {
        await setAlertKeywordsFn({ keywords: alertKeywords });
        if (msgEl) { msgEl.textContent = '✅ 已儲存'; msgEl.style.color = '#34d399'; }
        setTimeout(() => { if (msgEl) msgEl.textContent = ''; }, 3000);
    } catch (e) {
        if (msgEl) { msgEl.textContent = '❌ ' + e.message; msgEl.style.color = '#f43f5e'; }
    }
}

document.addEventListener('click', async e => {
    const navItem = e.target.closest('.nav-item');
    if (navItem?.dataset?.page === 'settings') setTimeout(loadAlertKeywords, 100);
    if (e.target.id === 'alert-add-btn') {
        const input = document.getElementById('alert-input');
        const kw = (input?.value || '').trim();
        if (kw && !alertKeywords.includes(kw)) alertKeywords.push(kw);
        if (input && kw) { input.value = ''; renderAlertTags(); }
    }
    if (e.target.id === 'alert-save-btn') saveAlertKeywords();
});
document.addEventListener('keydown', e => {
    if (e.target.id === 'alert-input' && e.key === 'Enter')
        document.getElementById('alert-add-btn')?.click();
});
