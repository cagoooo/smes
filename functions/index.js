const { onDocumentUpdated } = require('firebase-functions/v2/firestore');
const { setGlobalOptions } = require('firebase-functions/v2');
const functions = require('firebase-functions');
const axios = require('axios');

// 部署至亞太區域
setGlobalOptions({ region: 'asia-northeast1' });

/**
 * 監聽 chats/{uid} 文件更新
 * 偵測到 history 陣列新增時，透過 LINE Messaging API 發送通知給管理員
 */
exports.notifyLineOnNewChat = onDocumentUpdated('chats/{uid}', async (event) => {
    const before = event.data.before.data();
    const after = event.data.after.data();

    const oldHistory = before?.history || [];
    const newHistory = after?.history || [];

    // 沒有新增訊息就跳過
    if (newHistory.length <= oldHistory.length) return null;

    // 取最後一筆新訊息
    const latest = newHistory[newHistory.length - 1];
    if (!latest) return null;

    // 從 functions.config() 讀取 LINE 設定
    const config = functions.config();
    const token = config.line?.token;
    const userId = config.line?.user_id;

    if (!token || !userId) {
        console.error('缺少 line.token 或 line.user_id，請執行: firebase functions:config:set line.token="..." line.user_id="..."');
        return null;
    }

    const question = latest.user || '（無問題內容）';
    const answer = latest.ai || '（無回答內容）';
    const trimmedAnswer = answer.length > 200 ? answer.substring(0, 200) + '...' : answer;
    const time = latest.time
        ? new Date(latest.time).toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
        : new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });

    const message = [
        '',
        '🔔 石門小智鈴 AI 客服新動態',
        '━━━━━━━━━━━━',
        `👤 提問：\n${question}`,
        `🤖 回答：\n${trimmedAnswer}`,
        `⏰ 時間：${time}`
    ].join('\n');

    try {
        await axios.post(
            'https://api.line.me/v2/bot/message/push',
            {
                to: userId,
                messages: [{ type: 'text', text: message }]
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log('✅ LINE 通知發送成功 uid:', event.params.uid);
    } catch (err) {
        console.error('❌ LINE 通知發送失敗:', err.response?.data || err.message);
    }

    return null;
});
