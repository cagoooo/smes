# 🤖 石門小智鈴 AI 客服 - 使用說明書

本專案是一個基於 **Python Flask** 開發的智能客服系統，專門為桃園市石門國小資訊組設計。它整合了 OpenAI GPT 模型，並具備自動郵件通知與對話紀錄存檔功能。

## 🌟 核心功能
*   **AI 智能對話**：串接 OpenAI API (gpt-4o-mini)，根據內建知識庫回答問題。
*   **自動郵件通知**：每當有新提問時，系統會自動發送 HTML 格式的通知郵件至指定信箱。
*   **對話紀錄持久化**：所有問答均會自動儲存至 `conversations.json` 並帶有時間戳記。
*   **友善前端介面**：基於 Bootstrap 5，具備 RWD 響應式設計且內置「點石成金」等快捷懸浮連結。

## 📂 專案結構
```text
.
├── main.py                # Flask 主程式：處理路由、郵件發送與資料存檔
├── openAiAPI.py           # OpenAI API 介面：處理 prompt 拼裝與模型呼叫
├── attached_assets/       # 知識庫資料夾：AI 回答所依據的文本參考
├── static/                # 靜態資源：logo、favicon
├── templates/             # 網頁模板：home.html (主介面)
├── conversations.json     # 自動生成的對話紀錄檔
├── pyproject.toml         # Poetry 依賴管理設定
└── requirements.txt       # Pip 依賴清單
```

## 🛠️ 本地啟動步驟

### 1. 環境準備
確保已安裝 Python 3.10+。建議使用虛擬環境：
```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

### 2. 安裝依賴
```bash
pip install -r requirements.txt
```

### 3. 設定環境變數 (.env)
在專案根目錄建立 `.env` 檔案，並填入以下資訊：
```env
GEMINI_API_KEY=你的_GEMINI_金鑰
MAIL_USERNAME=你的_GMAIL_帳號
MAIL_PASSWORD=你的_GMAIL_應用程式密碼
```
> [!IMPORTANT]
> 信箱密碼請使用 Google 的「應用程式密碼」，而非一般登入密碼。

### 4. 執行
```bash
python main.py
```
啟動後開啟瀏覽器訪問 `http://localhost:8080`。

## 🔐 安全規範
*   **嚴禁硬編碼**：切勿將金鑰直接寫在 `main.py` 或 `openAiAPI.py` 中。
*   **知識庫維護**：若要更新 AI 知識，請修改 `attached_assets/` 中的內容。

## 👨‍💻 開發者
Designed by **阿凱老師** (石門國小)
