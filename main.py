import os
from flask import Flask, render_template, jsonify, request
from flask_mail import Mail, Message
from openAiAPI import get_open_ai_api_chat_response
import json
from datetime import datetime, timedelta

app = Flask(__name__)

# Flask-Mail Configuration
app.config.update(MAIL_SERVER='smtp.gmail.com',
                  MAIL_PORT=587,
                  MAIL_USE_TLS=True,
                  MAIL_USE_SSL=False,
                  MAIL_USERNAME=os.getenv('MAIL_USERNAME'),
                  MAIL_PASSWORD=os.getenv('MAIL_PASSWORD'))

if not app.config.get('MAIL_USERNAME') or not app.config.get('MAIL_PASSWORD'):
  raise ValueError(
      "MAIL_USERNAME and MAIL_PASSWORD must be set in environment variables")

mail = Mail(app)

# 儲存問題和答案的列表
conversations = []


def load_conversations_from_file():
  try:
    with open('conversations.json', 'r', encoding='utf-8') as f:
      content = f.read()
      if content.strip():  # Check if file is not empty
        return json.loads(content)
      else:
        return []  # Return an empty list if file is empty
  except (FileNotFoundError, json.JSONDecodeError):
    return []  # Return an empty list if file doesn't exist or is invalid JSON


# Initialize conversations
conversations = load_conversations_from_file()


def save_conversations_to_file(conversations):
  with open('conversations.json', 'w', encoding='utf-8') as f:
    json.dump(conversations, f, ensure_ascii=False, indent=4)


@app.route('/', methods=['POST', 'GET'])
def home():
  # 當是POST的時後，就去呼叫Open AI的API，然後把問題送出去
  # 把答案拿回來在送給前端
  if request.method == "POST":
    prompt = request.form['prompt']
    result = {}
    result['ai_answer'] = get_open_ai_api_chat_response(prompt)
    return jsonify(result)
  return render_template('home.html', **locals())


def send_email_notification(user_question, ai_answer, timestamp):
  dt = datetime.strptime(timestamp, '%Y-%m-%dT%H:%M:%S.%fZ')

  formatted_time = f"{dt.year}年{dt.month}月{dt.day}日  {dt.hour}點{dt.minute}分{dt.second}秒"

  msg = Message("AI智能客服問答紀錄",
                sender="210@mail2.smes.tyc.edu.tw",
                recipients=["210@mail2.smes.tyc.edu.tw"])
  msg.html = f"""
<div style="font-size: 18px; color: red;"><b>提問：</b></div><br>
{user_question}<br><br>
<div style="font-size: 18px; color: red;"><b>回答：</b></div><br>
{ai_answer}<br><br>
<div style="font-size: 18px; color: red;"><b>時間：</b></div><br>
{formatted_time}"""

  mail.send(msg)


@app.route('/save_conversation', methods=['POST'])
def save_conversation():
  data = request.get_json()

  if data:
    user_question = data.get('user_question')
    ai_answer = data.get('ai_answer')
    timestamp = data.get('timestamp')  # 獲取時間戳記

    if user_question and ai_answer and timestamp:
      # 解析時間戳記並將其增加 8 小時
      dt = datetime.strptime(timestamp, '%Y-%m-%dT%H:%M:%S.%fZ')
      dt += timedelta(hours=8)
      adjusted_timestamp = dt.strftime('%Y-%m-%dT%H:%M:%S.%fZ')

      # 將問題、答案和調整後的時間戳記加到 conversations 列表中
      conversations.append({
          'user_question': user_question,
          'ai_answer': ai_answer,
          'timestamp': adjusted_timestamp  # 將調整後的時間戳記添加到對話中
      })
      # 保存對話到文件
      save_conversations_to_file(conversations)

      # 發送電子郵件通知
      send_email_notification(user_question, ai_answer, adjusted_timestamp)

      return jsonify({
          "status": "success",
          "message": "Conversation saved"
      }), 200
  return jsonify({"status": "error", "message": "Invalid data"}), 400


if __name__ == '__main__':
  app.run(host='0.0.0.0', port=8080, debug=False)
