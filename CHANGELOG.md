# 📋 CHANGELOG — 石門小智鈴 AI 客服

---
## v3.3.0 — 2026-03-01｜四大進階功能

### ✨ 新增功能
- **對話記錄日期篩選**：在對話記錄工具列加入「起始日期 ─ 結束日期」篩選，支援與關鍵字搜尋合併過濾
- **知識庫版本歷史**：儲存知識庫時自動建立快照，可瀏覽最近 20 個版本並一鍵回復
- **統計天數切換**：統計儀表板加入 7 / 14 / 30 天切換按鈕，折線圖即時更新
- **LINE 告警關鍵字**：設定頁新增告警關鍵字管理卡片，關鍵字命中時即時 LINE 推播通知

### 🔧 後端
- `updateKnowledgeBase`：儲存前自動快照至 `knowledge/history/{timestamp}`
- `getAdminStats`：新增 `days` 參數（7 / 14 / 30 / 0=全部）
- 新增 `getKnowledgeHistory` / `restoreKnowledgeVersion`
- 新增 `getAlertKeywords` / `setAlertKeywords`

---


## v3.2.1 — 2026-03-01｜RWD 全面優化 + 圖表高度修正

### 📐 RWD 優化
- **圖表欄**：桌面版 `1fr : 360px`，< 900px 折一欄，響應更自然
- **Sidebar 手機版**：< 480px 時 Sidebar 改為底部 Tab Bar，顯示 emoji + 文字標籤
- **平板 (< 768px)**：Sidebar 縮為 60px icon 列、h2 縮小、settings/kb-tips 改為單欄佈局
- **Toolbar**：搜尋列在小螢幕改為全寬換行

### 🐛 Bug 修正
- **修正 Chart.js 圖表無限往下擴展**：給 `.chart-card` 設定固定 `height: 280px` + `overflow: hidden`，根本解決循環擴展問題

---

## v3.2.0 — 2026-03-01｜四大新功能上線

### ✨ 新增功能
- **🗑️ 刪除單筆對話記錄**：每張卡片右上角垃圾桶按鈕 → 後端 `deleteUserChat` Function（checkAdmin 保護）→ Firestore 即時刪除並更新 UI
- **📊 Chart.js 統計圖表**：使用統計頁新增折線圖（近 7 天問答趨勢）與甜甜圈圖（登入用戶 vs 訪客比例）
- **📤 匯出 CSV**：對話記錄工具列「匯出 CSV」按鈕，含 BOM（Excel 不亂碼），欄位：時間、使用者、Email、問題、AI 回答
- **⏱️ Rate Limit 顯示**：每次問答後右下角顯示「💬 今日剩餘 N/20 次」，≤5 次時轉紅色警告，4 秒淡出

### 🔧 後端更新
- `getAdminStats` 新增回傳：`dailyTrend`（7日）、`anonCount`、`authCount`
- 新增 `deleteUserChat` Cloud Function

---

## v3.1.1 — 2026-03-01｜管理員後台 Bug 修正

### 🐛 Bug 修正
- **搜尋 null crash**：`c.userName/c.userEmail` 加 `|| ''` 防護，修復訪客記錄搜尋崩潰
- **搜尋範圍擴大**：新增搜尋 AI 回答內容

### ✨ UX 強化
- **統計打新整理按鈕**：標題旁 🔄 按鈕，點擊重新載入資料，同時顯示最後更新時間
- **知識庫 Dirty 提示**：有未儲存修改時切換頁面彈出確認 Modal
- **知識庫儲存高亮**：有修改時儲存按鈕顯示金色光暈
- **登出確認 Modal**：取代直接登出，改為彈出確認對話框

### 🔐 安全強化
- **隱藏式管理員入口**：主頁 Footer「阿凱老師」後方加入半透明 🛡️ emoji 連結（透明度 0.08，hover 顯現）
- **Firestore 安全規則重寫**：`chats/{uid}` 只允許本人讀寫、`config/` 前端完全禁止、`knowledge/` 禁止前端寫入
- **返回首頁連結**：登入畫面與 sidebar 底部加入「← 返回首頁」

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
