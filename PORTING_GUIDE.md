# 🚀 GitHub 移植與部署指南

如果您希望將此專案完整移植至您的 GitHub 並實現自動化部署，請參考以下建議。

## 📦 推薦部署架構
由於專案含 Python 後端，無法部署於 GitHub Pages。建議選擇 **Google Cloud Run**。

## 🛠️ 移植步驟

### 1. 建立 GitHub Repository
*   建立一個新的 Repo。
*   請勿勾選 `Add a README file` (如果您要手動上傳已有代碼)。

### 2. 設定 GitHub Secrets
在 Repo 的 `Settings > Secrets and variables > Actions` 新增以下加密變數：
*   `MAIL_USERNAME`: GMAIL 信箱。
*   `MAIL_PASSWORD`: GMAIL 應用程式密碼。
*   `GEMINI_API_KEY`: Gemini API Key。

### 3. 專案容器化 (Docker)
我們已於 `Dockerfile` 中標準化了專案環境：
```bash
# 本地測試映像檔建立
docker build -t smes-ai-companion .
```

### 4. 自動化部署流程 (CI/CD)
建立 `.github/workflows/deploy.yml` 檔案，每當點下 `push` 或 `merge` 到 main 分支時，GitHub Actions 會執行以下任務：
1.  **驗證代碼**：執行 Lint 檢查。
2.  **構建映像檔**：將專案打包成 Docker Image 並推送到 Google Artifact Registry。
3.  **無縫部署**：自動更新 Cloud Run 服務。

## ⚠️ 重要提示：安全與隱私
*   **絕對不要**將 `.env` 檔案推送到 GitHub (已加入 `.gitignore`)。
*   **對話紀錄存檔**：在 Cloud Run 的 **Serverless 環境下，本地檔案系統是臨時的**。若需永久儲存對話紀錄，建議將 `conversations.json` 改儲存至 **Google Cloud Firestore** 或 **Google Cloud Storage**。

---

## 🏗️ 推薦下一步：對話資料雲端化
若要實現「完整移植」，將現有的 `json` 存檔邏輯改為資料庫存儲是最好的優化方向。

**由 antigravity 提供技術支援**
