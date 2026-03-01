const { onDocumentUpdated } = require('firebase-functions/v2/firestore');
const { setGlobalOptions } = require('firebase-functions/v2');
const axios = require('axios');

// 部署至亞太區域
setGlobalOptions({ region: 'asia-northeast1' });

// 移除 Markdown 語法 + HTML tag，取得純文字供 LINE 通知顯示
function stripMarkdown(text) {
    return text
        .replace(/<[^>]+>/g, '')
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/\*([^*]+)\*/g, '$1')
        .replace(/#{1,6}\s/g, '')
        .replace(/`([^`]+)`/g, '$1')
        .replace(/!\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/^[-*+]\s+/gm, '• ')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

/**
 * 監聽 chats/{uid} 文件更新
 * 偵測到 history 陣列新增時，透過 LINE Messaging API 以 Flex Message 通知管理員
 */
exports.notifyLineOnNewChat = onDocumentUpdated('chats/{uid}', async (event) => {
    const before = event.data.before.data();
    const after = event.data.after.data();

    const oldHistory = before?.history || [];
    const newHistory = after?.history || [];

    console.log(`觸發：舊 history 長度=${oldHistory.length}，新 history 長度=${newHistory.length}`);

    if (newHistory.length <= oldHistory.length) {
        console.log('無新增訊息，略過通知。');
        return null;
    }

    const latest = newHistory[newHistory.length - 1];
    if (!latest) {
        console.log('latest 為 null，略過。');
        return null;
    }

    const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
    const userId = process.env.LINE_USER_ID;

    if (!token || !userId) {
        console.error('缺少 LINE_CHANNEL_ACCESS_TOKEN 或 LINE_USER_ID');
        return null;
    }

    // ── 資料整理 ──
    const userName = String(latest.userName || after?.userName || '訪客').substring(0, 40);
    const userEmail = String(latest.userEmail || after?.userEmail || '').substring(0, 50);
    const question = String(latest.user || '（無問題內容）').substring(0, 150);
    const plainAns = stripMarkdown(String(latest.ai || '（無回答內容）'));
    const answer = plainAns.length > 180 ? plainAns.substring(0, 180) + '...' : plainAns;
    const time = latest.time
        ? new Date(latest.time).toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
        : new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });

    const userInfo = userEmail ? `${userName}\n${userEmail}` : userName;

    console.log(`準備發送 LINE 通知：user=${userName}, question=${question.substring(0, 30)}...`);

    // ── LINE Flex Message 卡片（扁平化 JSON，避免條件式展開） ──
    const flexMessage = {
        type: 'flex',
        altText: `🔔 石門小智鈴：${userName} 有新提問`,
        contents: {
            type: 'bubble',
            size: 'giga',
            header: {
                type: 'box',
                layout: 'vertical',
                paddingAll: '16px',
                backgroundColor: '#4F46E5',
                contents: [
                    {
                        type: 'box',
                        layout: 'horizontal',
                        contents: [
                            {
                                type: 'text',
                                text: '🔔 石門小智鈴 AI 客服',
                                color: '#FFFFFF',
                                size: 'md',
                                weight: 'bold',
                                flex: 1
                            },
                            {
                                type: 'text',
                                text: '新動態',
                                color: '#A5B4FC',
                                size: 'sm',
                                align: 'end',
                                flex: 0
                            }
                        ]
                    },
                    {
                        type: 'text',
                        text: `⏰ ${time}`,
                        color: '#C7D2FE',
                        size: 'xs',
                        margin: 'sm'
                    }
                ]
            },
            body: {
                type: 'box',
                layout: 'vertical',
                spacing: 'md',
                paddingAll: '16px',
                contents: [
                    {
                        type: 'box',
                        layout: 'horizontal',
                        backgroundColor: '#EEF2FF',
                        cornerRadius: '10px',
                        paddingAll: '10px',
                        contents: [
                            {
                                type: 'text',
                                text: '👤',
                                size: 'xl',
                                flex: 0,
                                gravity: 'center'
                            },
                            {
                                type: 'text',
                                text: userInfo,
                                size: 'sm',
                                weight: 'bold',
                                color: '#4338CA',
                                flex: 1,
                                wrap: true,
                                margin: 'md'
                            }
                        ]
                    },
                    {
                        type: 'separator',
                        margin: 'sm'
                    },
                    {
                        type: 'box',
                        layout: 'vertical',
                        spacing: 'xs',
                        contents: [
                            {
                                type: 'text',
                                text: '💬 提問內容',
                                size: 'xs',
                                color: '#6B7280',
                                weight: 'bold'
                            },
                            {
                                type: 'text',
                                text: question,
                                size: 'sm',
                                color: '#111827',
                                wrap: true,
                                weight: 'bold'
                            }
                        ]
                    },
                    {
                        type: 'separator',
                        margin: 'sm'
                    },
                    {
                        type: 'box',
                        layout: 'vertical',
                        spacing: 'xs',
                        backgroundColor: '#F0FDF4',
                        cornerRadius: '8px',
                        paddingAll: '10px',
                        contents: [
                            {
                                type: 'text',
                                text: '🤖 AI 回答摘要',
                                size: 'xs',
                                color: '#059669',
                                weight: 'bold'
                            },
                            {
                                type: 'text',
                                text: answer,
                                size: 'sm',
                                color: '#374151',
                                wrap: true
                            }
                        ]
                    }
                ]
            },
            footer: {
                type: 'box',
                layout: 'horizontal',
                paddingAll: '12px',
                spacing: 'sm',
                contents: [
                    {
                        type: 'button',
                        style: 'primary',
                        color: '#4F46E5',
                        height: 'sm',
                        action: {
                            type: 'uri',
                            label: '🖥️ 查看系統',
                            uri: 'https://smes-e1dc3.web.app'
                        },
                        flex: 1
                    },
                    {
                        type: 'button',
                        style: 'secondary',
                        height: 'sm',
                        action: {
                            type: 'uri',
                            label: '📊 Firebase Console',
                            uri: 'https://console.firebase.google.com/project/smes-e1dc3/firestore'
                        },
                        flex: 1
                    }
                ]
            }
        }
    };

    try {
        const res = await axios.post(
            'https://api.line.me/v2/bot/message/push',
            { to: userId, messages: [flexMessage] },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log(`✅ LINE Flex 通知發送成功 uid:${event.params.uid} user:${userName} status:${res.status}`);
    } catch (err) {
        const errData = err.response?.data;
        const errStatus = err.response?.status;
        console.error(`❌ LINE 通知發送失敗 status:${errStatus}`, JSON.stringify(errData || err.message));
    }

    return null;
});
