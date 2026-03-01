# 📋 CHANGELOG — 石門小智鈴 AI 客服

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
