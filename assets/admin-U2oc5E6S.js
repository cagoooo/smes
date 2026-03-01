import{h as I,j as b,k as w,l as d,o as B,m as g,s as C,G as L}from"./index.esm2017-F-JNOIJ7.js";const k={apiKey:"AIzaSyDcMhKXCKS5yu4J07Lep5hp8IP8a_KqK5E",authDomain:"smes-e1dc3.firebaseapp.com",projectId:"smes-e1dc3",storageBucket:"smes-e1dc3.firebasestorage.app",messagingSenderId:"626362737802",appId:"1:626362737802:web:5193274a7d9b4963c97973"},y=I(k),l=b(y),c=w(y,"asia-northeast1"),x=d(c,"getAdminStats"),S=d(c,"getKnowledgeBase"),$=d(c,"updateKnowledgeBase"),A=d(c,"setAdmin");let i=null;B(l,async e=>{if(!e){u();return}if(!(await e.getIdTokenResult(!0)).claims.admin){await g(l),document.getElementById("login-error").textContent="⛔ 此帳號無管理員權限，請聯繫阿凱老師。",u();return}K(e),await T()});document.getElementById("login-btn").addEventListener("click",async()=>{try{await C(l,new L)}catch(e){document.getElementById("login-error").textContent="登入失敗："+e.message}});document.getElementById("logout-link").addEventListener("click",()=>g(l));function u(){document.getElementById("login-screen").style.display="flex"}function K(e){document.getElementById("login-screen").style.display="none",document.getElementById("admin-email").textContent=e.email}document.querySelectorAll(".nav-item").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".nav-item").forEach(t=>t.classList.remove("active")),document.querySelectorAll(".page").forEach(t=>t.classList.remove("active")),e.classList.add("active");const n="page-"+e.dataset.page;document.getElementById(n).classList.add("active"),e.dataset.page==="knowledge"&&!document.getElementById("kb-editor").value&&p()})});async function T(){try{i=(await x()).data,q(i),M(i.recentChats)}catch(e){document.getElementById("stats-content").innerHTML=`<p style="color:#f43f5e">錯誤：${e.message}</p>`}}function q(e){const n=`
    <div class="stat-grid">
      <div class="stat-card">
        <div class="label">📨 總訊息數</div>
        <div class="val">${e.totalMessages}</div>
      </div>
      <div class="stat-card">
        <div class="label">👥 總使用者</div>
        <div class="val">${e.totalUsers}</div>
      </div>
      <div class="stat-card">
        <div class="label">🔥 今日活躍</div>
        <div class="val">${e.todayActiveUsers}</div>
      </div>
    </div>
    <h3 style="margin-bottom:12px;font-size:16px">🔑 熱門關鍵字 TOP 10</h3>
    <div class="keyword-list">
      ${e.topKeywords.map(t=>`<span class="keyword-tag">${t.word} <strong style="color:#fff">${t.count}</strong></span>`).join("")}
    </div>`;document.getElementById("stats-content").innerHTML=n}let r=[];function M(e){r=e,m(e)}function m(e){if(!e||e.length===0){document.getElementById("records-content").innerHTML='<p style="color:var(--muted)">暫無記錄</p>';return}const n=e.map(t=>{const h=t.time?new Date(t.time).toLocaleString("zh-TW"):"-",f=o(t.user).slice(0,80),E=o(t.ai).slice(0,120);return`<tr>
          <td>${o(t.userName)}<br><small style="color:var(--muted)">${o(t.userEmail)}</small></td>
          <td class="q-cell">${f}${t.user.length>80?"…":""}</td>
          <td class="a-cell">${E}${t.ai.length>120?"…":""}</td>
          <td style="white-space:nowrap;font-size:12px;color:var(--muted)">${h}</td>
        </tr>`}).join("");document.getElementById("records-content").innerHTML=`
    <div class="table-wrap">
      <table>
        <thead><tr><th>使用者</th><th>問題</th><th>AI 回答摘要</th><th>時間</th></tr></thead>
        <tbody>${n}</tbody>
      </table>
    </div>`}document.getElementById("search-input").addEventListener("input",function(){const e=this.value.trim().toLowerCase();if(!e){m(r);return}const n=r.filter(t=>t.userName.toLowerCase().includes(e)||t.userEmail.toLowerCase().includes(e)||t.user.toLowerCase().includes(e));m(n)});const s=document.getElementById("kb-editor"),a=document.getElementById("kb-status"),v=document.getElementById("kb-char-count");async function p(){s.placeholder="載入中…",a.textContent="";try{const e=await S();s.value=e.data.content||"",v.textContent=`${s.value.length.toLocaleString()} 字元`}catch(e){a.textContent="❌ 載入失敗："+e.message}}s.addEventListener("input",()=>{v.textContent=`${s.value.length.toLocaleString()} 字元`});document.getElementById("kb-save-btn").addEventListener("click",async()=>{a.textContent="⏳ 儲存中…";try{await $({content:s.value}),a.textContent="✅ 已儲存！AI 將立即使用新版本。",a.style.color="#34d399",setTimeout(()=>{a.textContent="",a.style.color=""},4e3)}catch(e){a.textContent="❌ 儲存失敗："+e.message,a.style.color="#f43f5e"}});document.getElementById("kb-reload-btn").addEventListener("click",p);document.getElementById("set-admin-btn").addEventListener("click",async()=>{const e=document.getElementById("admin-email-input").value.trim(),n=document.getElementById("set-admin-msg");if(!e){n.textContent="請輸入 Email",n.style.color="#f43f5e";return}n.textContent="⏳ 設定中…",n.style.color="var(--muted)";try{const t=await A({email:e});n.textContent="✅ "+t.data.message,n.style.color="#34d399",document.getElementById("admin-email-input").value=""}catch(t){n.textContent="❌ "+t.message,n.style.color="#f43f5e"}});function o(e){return String(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}
