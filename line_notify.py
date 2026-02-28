import os
from linebot import LineBotApi
from linebot.models import TextSendMessage
from datetime import datetime

def send_line_notification(user_question, ai_answer):
    """
    發送 LINE 訊息通知管理員
    """
    line_channel_access_token = os.getenv('LINE_CHANNEL_ACCESS_TOKEN')
    line_user_id = os.getenv('LINE_USER_ID')

    if not line_channel_access_token or not line_user_id:
        print("LINE_CHANNEL_ACCESS_TOKEN or LINE_USER_ID is missing. Skipping notification.")
        return

    try:
        line_bot_api = LineBotApi(line_channel_access_token)
        
        # 格式化通知訊息
        now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        message_text = (
            f"🔔 AI客服新動態\n"
            f"━━━━━━━━━━━━━━━\n"
            f"👤 提問：\n{user_question}\n\n"
            f"🤖 回答：\n{ai_answer[:200]}..." if len(ai_answer) > 200 else f"🤖 回答：\n{ai_answer}"
            f"\n\n⏰ 時間：{now}"
        )
        
        line_bot_api.push_message(line_user_id, TextSendMessage(text=message_text))
        print("LINE notification sent successfully.")
    except Exception as e:
        print(f"Failed to send LINE notification: {e}")

if __name__ == "__main__":
    # 測試開發環境
    send_line_notification("這是一個測試問題", "這是一個來自 Gemini 的測試回答。")
