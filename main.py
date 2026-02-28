import os
from flask import Flask, render_template, jsonify, request
from line_notify import send_line_notification
from gemini_api import get_gemini_reponse
import json
from datetime import datetime, timedelta

app = Flask(__name__)

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
    result['ai_answer'] = get_gemini_reponse(prompt)
    return jsonify(result)
  return render_template('home.html', **locals())


@app.route('/send_email_notification', methods=['POST'])
def send_notification_route():
  # 雖然路徑維持 /send_email_notification (為了不修改前端 JS)，但內部改為 LINE 通知
  data = request.get_json()
  
  if data:
    user_question = data.get('user_question')
    ai_answer = data.get('ai_answer')
    
    if user_question and ai_answer:
      try:
        send_line_notification(user_question, ai_answer)
        return jsonify({"status": "success", "message": "LINE notification sent"}), 200
      except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500
  
  return jsonify({"status": "error", "message": "Invalid data"}), 400

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

      return jsonify({
          "status": "success",
          "message": "Conversation saved"
      }), 200
  return jsonify({"status": "error", "message": "Invalid data"}), 400


if __name__ == '__main__':
  app.run(host='0.0.0.0', port=8080, debug=False)
