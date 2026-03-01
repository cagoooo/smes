# 📋 CHANGELOG — 石門小智鈴 AI 客服

---

## v3.1.0 — 2026-03-01｜管理員後台修復與 UI 全面升級

### 🐛 Bug 修正
- **修復 `getAdminStats` 500 錯誤**：移除需要 Firestore Index 的 `collectionGroup('daily')` 查詢（code 9 FAILED_PRECONDITION），改從 `chats` 集合直接計算今日活躍人數
- **修復管理員登入失敗**：新增 `checkAdmin` Email 白名單（`ADMIN_EMAILS`），移除前端 Custom Claim 依賴，改由後端統一驗證
- **修復 Cloud Run IAM 403**：為所有管理員 Functions 授予 `roles/run.invoker` 給 `allUsers`

### ✨ 管理員後台 UI 全面升級
- **使用統計**：三色漸層卡片（藍紫/玫瑰/橙金）、數字計數動畫、關鍵字長條圖排行（前三名獨立漸層色）
- **對話記錄**：表格改為 RWD 卡片 Grid，含漸層頭像（已登入=藍紫/匿名=灰）、藍紫問題泡泡、翠綠 AI 回答泡泡、記錄數量徽章
- **知識庫編輯**：IDE 風格（Mac 三色圓點標題列、GitHub Dark 底色）、三欄彩色提示卡片、底部狀態列（字元/行數即時統計與過量警告色）
- **系統設定**：Hero Banner + 四張多彩設定卡片（管理員授權-紫全欄、系統資訊-青、安全注意-橙、危険操作-玫瑰全欄）、閃爍連線狀態徽章

### 🔒 後端強化
- `functions/index.js` 新增 `ADMIN_EMAILS` 白名單常數與 `checkAdmin()` 通用驗證函式，所有管理員 Function 統一採用

---

## v3.0.0 — 2026-03-01｜重大架構安全升級

### 🔐 安全性（Breaking Change）
- **Gemini API 呼叫改至後端**：將所有 Gemini API 呼叫從前端 JS 移至 Firebase Cloud Function (`askGemini`)，前端完全不再持有 AI Key，根本解決 Key 洩漏問題
- **移除 VITE_GEMINI_API_KEY**：前端 build 不再注入 Gemini Key，gh-pages bundle 不含任何 AI 敏感資訊
- **Secret Manager 整合**：`GEMINI_API_KEY` 透過 `defineSecret()` 安全掛載，部署自動授權

### ✨ 新增功能
- **自訂確認 Modal**：以彩虹漸層 Glassmorphism 風格取代所有原生 `confirm()` 對話框
  - 清除對話：🗑️ 紅橘漸層確認按鈕
  - 登出帳號：👋 藍紫漸層確認按鈕
  - 頂部彩虹動態光條 + 圖示呼吸發光效果
  - 完整 RWD（375px ~ 1440px）

### 🐛 Bug 修正
- **LINE Authorization Header 錯誤**：對 `defineSecret().value()` 加上 `.trim()`，修復 `Invalid character in header content ["Authorization"]` 問題
- **LINE 通知按鈕連結**：修正「查看系統」按鈕從 `smes-e1dc3.web.app`（未部署）改為 `https://cagoooo.github.io/smes/`

---

## v2.x — 2026-02｜功能迭代期

### 功能
- Gemini AI 整合（取代 OpenAI，改用 `gemini-2.5-flash-lite`）
- Firebase Authentication（Google 登入）
- Firestore 對話雲端同步
- LINE Flex Message 即時通知（`notifyLineOnNewChat` Cloud Function）
- PWA 支援（`manifest.json` + `sw.js`）
- GitHub Actions CI/CD 自動部署至 gh-pages
- Markdown 渲染（marked.js）
- 對話清單、多對話管理

---

## v1.0.0 — 2025-12｜初始版本

- 基於 Python Flask + OpenAI API 的原始客服系統
- 遷移至 Vite + Firebase 純前端架構
