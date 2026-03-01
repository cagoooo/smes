# 🚨 部署指南 DEPLOY.md — 石門小智鈴 AI 客服系統

> **這份文件非常重要，每次部署前請務必閱讀！**
> 過去已發生 5+ 次因為搞錯專案導致 LINE 通知失效的問題，請嚴格遵守以下規則。

---

## ⚠️ 雙專案架構說明（CRITICAL）

本專案使用**兩個不同的 Firebase / GCP 專案**，各司其職：

| 專案 ID | 用途 | 部署對象 |
|---|---|---|
| **`smes-e1dc3`** | **前端 AI 客服主站（askGemini）** | `askGemini`、`notifyLineOnNewChat` |
| **`teacher-c571b`** | **管理後台 Functions** | `getAdminStats`、`getKnowledgeBase`、`updateKnowledgeBase`、`getKnowledgeHistory`、`restoreKnowledgeVersion`、`getAlertKeywords`、`setAlertKeywords`、`setAdmin`、`deleteUserChat` |

> 🔴 **絕對禁止**：`firebase deploy --only functions --project smes-e1dc3`（不加 `only:askGemini`）  
> 這樣會把 teacher-c571b 的管理 functions 全部部署到 smes-e1dc3，並**清除掉 LINE Secrets 綁定**！

---

## 📋 正確的部署 SOP

### 1. 更新 askGemini（前端 AI 客服）
```powershell
# ✅ 正確：只部署 askGemini 到 smes-e1dc3
firebase deploy --only functions:askGemini --project smes-e1dc3 --force
```

### 2. 更新管理後台 Functions
```powershell
# ✅ 正確：部署管理 functions 到 teacher-c571b
firebase deploy --only functions --project teacher-c571b --force
```

### 3. 同時更新兩個專案（例如新增功能）
```powershell
# Step 1：先部署管理後台
firebase deploy --only functions --project teacher-c571b --force

# Step 2：再部署 AI 客服
firebase deploy --only functions:askGemini --project smes-e1dc3 --force
```

---

## 🔐 Secrets 綁定確認（部署後必查）

每次部署 `askGemini` 後，**必須**執行以下指令確認三個 Secrets 均已綁定：

```powershell
gcloud functions describe askGemini --region asia-northeast1 --project smes-e1dc3 --format "json(serviceConfig.secretEnvironmentVariables)"
```

**正確輸出應包含以下三個 Secrets：**
```json
{
  "serviceConfig": {
    "secretEnvironmentVariables": [
      { "key": "GEMINI_API_KEY",            "secret": "GEMINI_API_KEY" },
      { "key": "LINE_CHANNEL_ACCESS_TOKEN", "secret": "LINE_CHANNEL_ACCESS_TOKEN" },
      { "key": "LINE_USER_ID",              "secret": "LINE_USER_ID" }
    ]
  }
}
```

> 🔴 如果輸出**只有** `GEMINI_API_KEY`，代表 LINE Secrets 沒有綁定，LINE 通知將完全失效！  
> 解決方法：立刻重新執行 Step 1 的指令（`--force` 重新部署）。

---

## 📍 GCP Secret Manager 位置

兩個專案的 Secrets 各自獨立：

| Secret 名稱 | smes-e1dc3 | teacher-c571b |
|---|---|---|
| `GEMINI_API_KEY` | ✅ 有 | ✅ 有 |
| `LINE_CHANNEL_ACCESS_TOKEN` | ✅ 有 | ✅ 有 |
| `LINE_USER_ID` | ✅ 有 | ✅ 有 |

更新 Secret 值時，**兩個專案都要更新**：
```powershell
# 更新 smes-e1dc3
echo [新KEY] | firebase functions:secrets:set LINE_CHANNEL_ACCESS_TOKEN --project smes-e1dc3

# 更新 teacher-c571b
echo [新KEY] | firebase functions:secrets:set LINE_CHANNEL_ACCESS_TOKEN --project teacher-c571b
```

---

## 🌐 前端部署（GitHub Pages）

前端透過 **GitHub Actions** 自動部署，只需 push 到 `main` 即可：

```powershell
git add -A
git commit -m "✅ [描述修改內容]"
git push
```

GitHub Actions 工作流程（`.github/workflows/deploy.yml`）會自動 build 並部署到 GitHub Pages。

---

## ✅ 每次部署完整核對清單

```
[ ] 1. 確認要部署的函式屬於哪個專案（smes-e1dc3 或 teacher-c571b）
[ ] 2. 執行正確的 deploy 指令（含正確的 --project）
[ ] 3. 部署 askGemini 後，執行 gcloud describe 確認三個 Secrets 都在
[ ] 4. push 前端程式碼，等待 GitHub Actions 完成
[ ] 5. 實際測試：發問 → 確認有回應
[ ] 6. 如有告警關鍵字，測試 LINE 通知是否正常
```

---

## 🆘 常見問題排查

### 問題：LINE 通知沒收到
1. 進管理後台「設定」→「告警關鍵字」，確認有設定關鍵字
2. 執行 `gcloud functions describe` 確認 Secrets 三個都有
3. 查看 Functions 日誌：`firebase functions:log --project smes-e1dc3 --only askGemini`

### 問題：管理後台功能錯誤
1. 確認是部署到 `teacher-c571b`
2. 查看日誌：`firebase functions:log --project teacher-c571b`

### 問題：前端顯示舊版
1. 確認 GitHub Actions 已成功執行
2. 清除瀏覽器快取後重試
