# 🚨 部署指南 DEPLOY.md — 石門小智鈴 AI 客服系統

> **這份文件非常重要，每次部署前請務必閱讀！**

---

## ✅ 唯一正確的 Firebase 專案

| 項目 | 值 |
|---|---|
| **Firebase 專案 ID** | **`smes-e1dc3`** |
| **VITE_FIREBASE_PROJECT_ID** | `smes-e1dc3` |
| **所有 Cloud Functions** | 全部部署至 `smes-e1dc3` |

> 🔴 **`teacher-c571b` 已廢棄，請勿再對其部署！**  
> 過去因操作錯誤在 teacher-c571b 建了一套重複的 functions，admin.js 從未讀取它。

---

## 📋 正確的部署 SOP

### 1. 更新（或新增）Cloud Functions
```powershell
# ✅ 所有 function 都部署到 smes-e1dc3
firebase deploy --only functions --project smes-e1dc3 --force
```

### 2. 前端（GitHub Pages）
```powershell
git add -A
git commit -m "✅ [說明修改內容]"
git push
# GitHub Actions 會自動 build 並部署
```

---

## 🔐 Secrets 綁定確認（每次部署 functions 後必查）

```powershell
gcloud functions describe askGemini --region asia-northeast1 --project smes-e1dc3 --format "json(serviceConfig.secretEnvironmentVariables)"
```

**正確輸出應包含三個 Secrets：**
```json
{
  "serviceConfig": {
    "secretEnvironmentVariables": [
      { "key": "GEMINI_API_KEY" },
      { "key": "LINE_CHANNEL_ACCESS_TOKEN" },
      { "key": "LINE_USER_ID" }
    ]
  }
}
```

> 🔴 如果只有 `GEMINI_API_KEY`，LINE 通知將完全失效！立刻重新 `--force` 部署。

---

## 📍 GCP Secret Manager 位置

所有 Secrets 存放於 **`smes-e1dc3`** 專案：

| Secret 名稱 | 說明 |
|---|---|
| `GEMINI_API_KEY` | Gemini AI API 金鑰 |
| `LINE_CHANNEL_ACCESS_TOKEN` | LINE Bot Token |
| `LINE_USER_ID` | 管理員 LINE User ID |

更新 Secret 值時：
```powershell
echo [新KEY] | firebase functions:secrets:set GEMINI_API_KEY --project smes-e1dc3
firebase deploy --only functions --project smes-e1dc3 --force
```

---

## ✅ 每次部署核對清單

```
[ ] 1. 確認使用 --project smes-e1dc3（絕對不是 teacher-c571b）
[ ] 2. 執行 firebase deploy --only functions --project smes-e1dc3 --force
[ ] 3. 執行 gcloud functions describe 確認三個 Secrets 都在
[ ] 4. git push → 等待 GitHub Actions 完成前端部署
[ ] 5. 進管理後台測試功能是否正常
```

---

## 🆘 LINE 通知沒收到？

1. 確認管理後台「設定」→「告警關鍵字」有設定關鍵字
2. 執行 `gcloud functions describe` 確認 Secrets 三個都有
3. 查看 Functions 日誌：`firebase functions:log --project smes-e1dc3`
