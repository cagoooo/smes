with open('admin.html', 'r', encoding='utf-8') as f:
    c = f.read()

changes = 0

# ── 1. 在側邊欄的「設定」導覽項目前插入「AI 設定」導覽按鈕 ──
old_nav = 'data-page="settings">⚙️ 系統設定</div>'
new_nav = ('data-page="ai">🤖 AI 設定</div>\n'
           '                <div class="nav-item" '
           'data-page="settings">⚙️ 系統設定</div>')
if old_nav in c:
    c = c.replace(old_nav, new_nav, 1); changes += 1; print('nav-item OK')
else:
    print('nav-item FAIL')
    idx = c.find('系統設定')
    print(repr(c[max(0,idx-80):idx+60]))

# ── 2. 在 page-settings 之前插入 page-ai 頁面 ──
old_page = 'id="page-settings" class="page">'
new_page = (
    'id="page-ai" class="page">\n'
    '            <h2>🤖 AI 模型動態設定</h2>\n'
    '            <div id="ai-settings-form" class="ai-settings-grid">\n'
    '                <!-- 模型選擇 -->\n'
    '                <div class="ai-card">\n'
    '                    <h3>🎯 模型版本</h3>\n'
    '                    <p class="card-desc">選擇較強的模型可提升回答品質，但速度較慢、成本較高。</p>\n'
    '                    <select id="ai-model" class="ai-select">\n'
    '                        <option value="gemini-2.5-flash-lite">⚡ gemini-2.5-flash-lite（預設，最快最省）</option>\n'
    '                        <option value="gemini-2.5-flash">🚀 gemini-2.5-flash（均衡型）</option>\n'
    '                        <option value="gemini-2.5-pro">💎 gemini-2.5-pro（最強，較慢）</option>\n'
    '                    </select>\n'
    '                </div>\n'
    '                <!-- Temperature -->\n'
    '                <div class="ai-card">\n'
    '                    <h3>🌡️ Temperature（創意度）</h3>\n'
    '                    <p class="card-desc">越高越有創意但可能不準確；越低越保守但回答穩定。建議 0.5～0.8。</p>\n'
    '                    <div class="ai-slider-row">\n'
    '                        <span class="ai-label">0（保守）</span>\n'
    '                        <input id="ai-temp" type="range" min="0" max="2" step="0.05" value="0.7" />\n'
    '                        <span class="ai-label">2（創意）</span>\n'
    '                    </div>\n'
    '                    <div class="ai-temp-display">目前：<strong id="ai-temp-val">0.70</strong></div>\n'
    '                </div>\n'
    '                <!-- Max Tokens -->\n'
    '                <div class="ai-card">\n'
    '                    <h3>📏 Max Output Tokens（回答長度）</h3>\n'
    '                    <p class="card-desc">控制 AI 最多輸出多少字。1024 足夠日常問答，需要詳細說明可提高至 2048。</p>\n'
    '                    <input id="ai-max-tokens" type="number" class="ai-number-input"\n'
    '                        min="256" max="8192" step="256" value="1024" />\n'
    '                    <p style="font-size:12px;color:var(--muted);margin-top:6px">範圍：256 ～ 8192</p>\n'
    '                </div>\n'
    '                <!-- 即時測試 -->\n'
    '                <div class="ai-card ai-test-card full">\n'
    '                    <h3>🧪 即時預覽測試</h3>\n'
    '                    <p class="card-desc">儲存設定後，用以下欄位直接測試 AI 的回答效果（不消耗使用者次數）。</p>\n'
    '                    <div class="ai-test-row">\n'
    '                        <input id="ai-test-input" type="text"\n'
    '                            placeholder="輸入測試問題，例如：學校的上下課時間是幾點？" />\n'
    '                        <button id="ai-test-btn" class="btn-primary">▶ 測試</button>\n'
    '                    </div>\n'
    '                    <div id="ai-test-output" class="ai-test-output">（輸入問題後按「測試」）</div>\n'
    '                </div>\n'
    '            </div>\n'
    '            <!-- 儲存按鈕 -->\n'
    '            <div class="ai-save-row">\n'
    '                <button id="ai-save-btn" class="btn-primary">💾 儲存 AI 設定</button>\n'
    '                <span id="ai-save-msg" style="font-size:13px;margin-left:12px"></span>\n'
    '            </div>\n'
    '        </div>\n\n'
    '        <!-- ────────────────────────────────────── -->\n'
    '        <div id="page-settings" class="page">'
)
if old_page in c:
    c = c.replace(old_page, new_page, 1); changes += 1; print('page-ai OK')
else:
    print('page-ai FAIL')
    idx = c.find('page-settings')
    print(repr(c[max(0,idx-30):idx+60]))

# ── 3. 加入 AI 設定 CSS ──
css_ai = """
        /* ── AI 設定頁 ── */
        .ai-settings-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin-bottom: 20px;
        }
        @media (max-width: 800px) { .ai-settings-grid { grid-template-columns: 1fr; } }
        .ai-card {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 20px 22px;
        }
        .ai-card h3 { font-size: 15px; font-weight: 700; margin-bottom: 6px; }
        .ai-card.full { grid-column: 1 / -1; }
        .ai-select {
            width: 100%;
            background: rgba(255,255,255,0.07);
            border: 1px solid var(--border);
            border-radius: 10px;
            color: var(--text);
            padding: 10px 14px;
            font-size: 13px;
            margin-top: 10px;
            cursor: pointer;
        }
        .ai-slider-row {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 10px;
        }
        .ai-slider-row input[type='range'] { flex: 1; accent-color: var(--accent); }
        .ai-label { font-size: 11px; color: var(--muted); white-space: nowrap; }
        .ai-temp-display {
            margin-top: 8px;
            font-size: 13px;
            color: var(--muted);
        }
        .ai-temp-display strong { color: #a78bfa; font-size: 18px; }
        .ai-number-input {
            width: 140px;
            background: rgba(255,255,255,0.07);
            border: 1px solid var(--border);
            border-radius: 10px;
            color: var(--text);
            padding: 10px 14px;
            font-size: 15px;
            margin-top: 10px;
        }
        .ai-test-card { border-color: rgba(14,165,233,0.3); }
        .ai-test-card h3 { color: #7dd3fc; }
        .ai-test-row {
            display: flex;
            gap: 10px;
            margin-bottom: 12px;
        }
        .ai-test-row input {
            flex: 1;
            background: rgba(255,255,255,0.07);
            border: 1px solid var(--border);
            border-radius: 10px;
            color: var(--text);
            padding: 10px 14px;
            font-size: 13px;
        }
        .ai-test-output {
            background: rgba(0,0,0,0.3);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 10px;
            padding: 14px;
            font-size: 13px;
            color: var(--muted);
            min-height: 60px;
            line-height: 1.8;
            white-space: pre-wrap;
        }
        .ai-save-row {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-top: 4px;
            flex-wrap: wrap;
        }
"""
style_close = '    </style>'
if style_close in c:
    c = c.replace(style_close, css_ai + style_close, 1)
    changes += 1; print('ai-css OK')
else:
    print('ai-css FAIL')

with open('admin.html', 'w', encoding='utf-8') as f:
    f.write(c)
print(f'Done: {changes}/3 changes applied')
