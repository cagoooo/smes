with open('admin.html', 'r', encoding='utf-8') as f:
    c = f.read()
target = 'data-page="settings"><span>\u7cfb\u7d71\u8a2d\u5b9a</span></div>'
replacement = 'data-page="ai"><span>\U0001f916 AI \u8a2d\u5b9a</span></div>\n        <div class="nav-item" data-page="settings"><span>\u7cfb\u7d71\u8a2d\u5b9a</span></div>'
if target in c:
    c = c.replace(target, replacement, 1)
    with open('admin.html', 'w', encoding='utf-8') as f:
        f.write(c)
    print('OK')
else:
    print('NOT FOUND')
    idx = c.find('\u7cfb\u7d71\u8a2d\u5b9a')
    print(repr(c[max(0,idx-60):idx+40]))
