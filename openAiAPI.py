
import os
import openai

def read_attached_files():
    try:
        with open('attached_assets/Pasted---1740452530933.txt', 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        print(f"Error reading attached file: {e}")
        return ""

def get_open_ai_api_chat_response(prompt):
    # 輸入open api key
    openai.api_key = os.getenv('OPENAI_API_KEY')
    if not openai.api_key:
        raise ValueError("Missing OPENAI_API_KEY in environment variables")

    # 讀取附加檔案的內容
    knowledge_base = read_attached_files()

    # 把用戶輸入的prompt和知識庫內容拼裝成系統指令
    system_prompt = {
        "role": "assistant",
        "content": knowledge_base
    }

    user_prompt = {"role": "user", "content": prompt}
    messages = [system_prompt, user_prompt]

    # 送出api request
    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=messages,
        stream=False,  # 确保非串行模式
        temperature=0.9  # 添加這行,設置較低的溫度值
    )

    # 从响应中提取内容
    ai_answer = response["choices"][0]["message"]["content"].replace(
        "\n", "<br>")
    print(ai_answer)

    # 把答案返回给调用这个函数的地方
    return ai_answer
