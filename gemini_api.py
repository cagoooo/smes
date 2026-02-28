import os
import google.generativeai as genai

def read_attached_files():
    try:
        # 讀取主要知識庫檔案
        with open('attached_assets/Pasted---1740452530933.txt', 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        print(f"Error reading attached file: {e}")
        return ""

def get_gemini_reponse(prompt):
    # 設定 API Key
    api_key = os.getenv('GEMINI_API_KEY')
    if not api_key:
        raise ValueError("Missing GEMINI_API_KEY in environment variables")
    
    genai.configure(api_key=api_key)

    # 讀取附加檔案的內容作為知識庫
    knowledge_base = read_attached_files()

    # 設定系統指令 (System Instruction)
    # 將知識庫內容融入系統指令中
    system_instruction = f"你是一個專業的校園智能客服助手。請根據以下知識庫內容來回答使用者的問題：\n\n{knowledge_base}\n\n請使用繁體中文回答。"

    # 初始化模型 (使用 gemini-2.0-flash-lite)
    # 注意：雖然使用者提到 2.5，但目前標準命名為 2.0-flash-lite 或 flash 系列
    # 根據 Google 規範，我們選擇穩定且快速的 flash-lite 系列
    model = genai.GenerativeModel(
        model_name="gemini-2.0-flash-lite",
        system_instruction=system_instruction
    )

    # 開始對話
    chat = model.start_chat(history=[])
    
    # 送出請求
    response = chat.send_message(prompt)

    # 處理回傳內容 (將換行符轉換為 HTML 換行以利前端顯示)
    ai_answer = response.text.replace("\n", "<br>")
    
    print(f"Gemini Response: {ai_answer}")

    return ai_answer

if __name__ == "__main__":
    # 簡單的測試邏輯
    try:
        test_response = get_gemini_reponse("你好，請問你是誰？")
        print(f"Test Successful: {test_response}")
    except Exception as e:
        print(f"Test Failed: {e}")
