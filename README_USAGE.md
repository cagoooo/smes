# 🔔 石門小智鈴 AI 客服 - 使用說明書

> **版本 v3.0.0** ｜ 桃園市石門國小資訊組 ｜ Designed by 阿凱老師

## 🌟 核心功能

| 功能 | 說明 |
|---|---|
| 🤖 **Gemini AI 問答** | 串接 Google Gemini 2.5 Flash Lite，根據知識庫回答問題 |
| 🔐 **Google 帳號登入** | Firebase Authentication，限定 Google 帳號使用 |
| 💾 **對話雲端同步** | 對話歷程自動存入 Firestore，跨裝置保留 |
| 🔔 **LINE 即時通知** | 每次新提問透過 Cloud Function 推播 Flex Message 至指定 LINE 帳號 |
| 📱 **PWA 離線支援** | 可安裝至桌面，離線瀏覽基本功能 |
| 🎨 **自訂確認 Modal** | 彩虹漸層 Glassmorphism 風格，取代原生 confirm() |

---

## 🏗️ 技術架構

```
前端（Vite + Vanilla JS）
  ├── Firebase Auth         → Google 登入驗證
  ├── Firestore             → 對話紀錄雲端儲存
  └── httpsCallable         → 呼叫後端 AI 服務（不含 API Key）

後端（Firebase Cloud Functions / asia-northeast1）
  ├── askGemini             → 安全呼叫 Gemini API（Key 存於 Secret Manager）
  └── notifyLineOnNewChat   → 偵測新對話並推播 LINE Flex Message

部署
  ├── 前端 → GitHub Pages（cagoooo.github.io/smes/）
  └── 後端 → Google Cloud Run（Firebase Functions v2）
```

---

## 🔐 安全架構說明

> [!IMPORTANT]
> **Gemini API Key 永遠不會出現在前端 bundle 中。**
> 所有 AI 呼叫均透過 Firebase Cloud Function 在後端執行，Key 安全存放於 GCP Secret Manager。

---

## 📂 專案結構

```text
h:\service\
├── index.html              # 主頁面（含自訂 Modal HTML）
├── main.js                 # 前端核心邏輯
├── style.css               # 全域樣式（含 Glassmorphism Modal）
├── vite.config.js          # Vite 設定（base: './'）
├── knowledge-base.txt      # AI 知識庫文本
├── manifest.json           # PWA 設定
├── sw.js                   # Service Worker
├── .env                    # 本地環境變數（不 commit）
├── functions/
│   ├── index.js            # Cloud Functions 主程式
│   └── package.json        # Functions 依賴（含 @google/generative-ai）
└── .github/workflows/
    └── deploy.yml          # GitHub Actions 自動部署
```

---

## 🛠️ 本地開發

### 環境需求
- Node.js 20+
- Firebase CLI (`npm install -g firebase-tools`)

### 啟動步驟

```powershell
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev
# → http://localhost:5173
```

### 環境變數（`.env`）

```env
# Firebase（前端使用）
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

> [!NOTE]
> `GEMINI_API_KEY` **不需要** 放在 `.env`，它存放於 GCP Secret Manager，由 Cloud Function 存取。

---

## 🚀 部署流程

### 前端（GitHub Pages）
推送至 `main` 分支後，GitHub Actions 自動建置並部署至 gh-pages。

### 後端（Firebase Functions）
```powershell
firebase deploy --only functions --project smes-e1dc3
```

---

## 📞 聯絡

**阿凱老師**｜桃園市石門國小資訊組  
