// ── Service Worker v2 — 石門小智鈴 PWA ──────────────────────────────────────
const CACHE_NAME = 'smes-cache-v2';
const OFFLINE_URL = '/index.html';
const QUEUE_STORE = 'offline-queue';

// 預快取靜態資源
const PRECACHE_URLS = [
    '/',
    '/index.html',
    '/logo.png',
    '/icons/icon-192.png',
    '/icons/icon-512.png',
];

// ── Install：預快取 ──────────────────────────────────────────────────────────
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(PRECACHE_URLS.map(url => {
                return new Request(url, { cache: 'reload' });
            })).catch(() => { /* 部分資源可能不存在，靜默忽略 */ });
        }).then(() => self.skipWaiting())
    );
});

// ── Activate：清除舊快取 ──────────────────────────────────────────────────────
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys
                .filter(k => k !== CACHE_NAME)
                .map(k => caches.delete(k))
            )
        ).then(() => self.clients.claim())
    );
});

// ── Fetch：Cache First（開發工具請求直接跳過）────────────────────────────────
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    // 跳過 Vite 開發工具、Firebase API、非 GET 請求
    if (
        event.request.method !== 'GET' ||
        url.pathname.startsWith('/@') ||
        url.pathname.includes('node_modules') ||
        url.hostname.includes('firestore.googleapis.com') ||
        url.hostname.includes('cloudfunctions.net') ||
        url.hostname.includes('identitytoolkit') ||
        url.hostname.includes('securetoken')
    ) {
        return;
    }

    event.respondWith(
        caches.match(event.request).then(cached => {
            if (cached) return cached;
            return fetch(event.request).then(response => {
                // 只快取成功的 GET 回應
                if (response && response.status === 200 && response.type === 'basic') {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                }
                return response;
            }).catch(() => {
                // 離線時回傳 index.html（SPA fallback）
                if (event.request.mode === 'navigate') {
                    return caches.match(OFFLINE_URL);
                }
            });
        })
    );
});

// ── Background Sync：離線問題佇列 ────────────────────────────────────────────
self.addEventListener('sync', event => {
    if (event.tag === 'offline-ask') {
        event.waitUntil(processOfflineQueue());
    }
});

async function processOfflineQueue() {
    // 使用 IndexedDB 讀取離線問題佇列（由主頁 JS 寫入）
    // 在此只發通知，實際 API 呼叫由主頁 JS 處理
    const clients = await self.clients.matchAll({ type: 'window' });
    clients.forEach(c => c.postMessage({ type: 'SYNC_OFFLINE_QUEUE' }));
}

// ── Push Notification ──────────────────────────────────────────────────────
self.addEventListener('push', event => {
    if (!event.data) return;
    let payload;
    try { payload = event.data.json(); } catch { payload = { title: '石門小智鈴', body: event.data.text() }; }

    event.waitUntil(
        self.registration.showNotification(payload.title || '石門小智鈴', {
            body: payload.body || '您有新訊息',
            icon: '/icons/icon-192.png',
            badge: '/icons/icon-192.png',
            data: payload.url || '/',
        })
    );
});

self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.notification.data || '/')
    );
});
