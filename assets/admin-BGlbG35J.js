import{h as x,j as S,k as A,l as y,o as $,m as C,s as K,G as T}from"./index.esm2017-F-JNOIJ7.js";const q={apiKey:"AIzaSyDcMhKXCKS5yu4J07Lep5hp8IP8a_KqK5E",authDomain:"smes-e1dc3.firebaseapp.com",projectId:"smes-e1dc3",storageBucket:"smes-e1dc3.firebasestorage.app",messagingSenderId:"626362737802",appId:"1:626362737802:web:5193274a7d9b4963c97973"},B=x(q),g=S(B),p=A(B,"asia-northeast1"),M=y(p,"getAdminStats"),z=y(p,"getKnowledgeBase"),D=y(p,"updateKnowledgeBase"),F=y(p,"setAdmin");let f=null;$(g,async e=>{if(!e){I();return}document.getElementById("login-error").textContent="⏳ 驗證管理員身份中…",document.getElementById("login-error").style.color="#94a3b8";try{await e.getIdToken(!0),f=(await M()).data,b(e),N(f),j(f.recentChats)}catch(t){const n=(t==null?void 0:t.code)||"";n==="functions/permission-denied"||n==="functions/unauthenticated"?(await C(g),document.getElementById("login-error").textContent="⛔ 此帳號無管理員權限，請聯繫阿凱老師。",document.getElementById("login-error").style.color="#f43f5e",I()):(console.warn("Admin auth check error:",t.message),b(e))}});document.getElementById("login-btn").addEventListener("click",async()=>{try{await K(g,new T)}catch(e){document.getElementById("login-error").textContent="登入失敗："+e.message}});document.getElementById("logout-link").addEventListener("click",()=>C(g));function I(){document.getElementById("login-screen").style.display="flex"}function b(e){document.getElementById("login-screen").style.display="none",document.getElementById("admin-email").textContent=e.email}document.querySelectorAll(".nav-item").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active")),document.querySelectorAll(".page").forEach(n=>n.classList.remove("active")),e.classList.add("active");const t="page-"+e.dataset.page;document.getElementById(t).classList.add("active"),e.dataset.page==="knowledge"&&!document.getElementById("kb-editor").value&&L()})});function N(e){var l;const t=((l=e.topKeywords[0])==null?void 0:l.count)||1,n=e.topKeywords.map((s,d)=>{const u=Math.round(s.count/t*100);return`<div class="keyword-row">
          <span class="keyword-rank">${d+1}</span>
          <span class="keyword-name" title="${c(s.word)}">${c(s.word)}</span>
          <div class="keyword-bar-wrap">
            <div class="keyword-bar-fill" style="width:0%" data-pct="${u}"></div>
          </div>
          <span class="keyword-count">${s.count}</span>
        </div>`}).join(""),a=new Date().toLocaleDateString("zh-TW",{timeZone:"Asia/Taipei"});document.getElementById("stats-content").innerHTML=`
    <div class="stat-grid">
      <div class="stat-card card-msg">
        <div class="stat-icon">💬</div>
        <div class="label">訊息總數</div>
        <div class="val" data-count="${e.totalMessages}">0</div>
        <div class="stat-sub">累計問答記錄</div>
      </div>
      <div class="stat-card card-users">
        <div class="stat-icon">👥</div>
        <div class="label">使用者數</div>
        <div class="val" data-count="${e.totalUsers}">0</div>
        <div class="stat-sub">個別使用者</div>
      </div>
      <div class="stat-card card-today">
        <div class="stat-icon">🔥</div>
        <div class="label">今日活躍</div>
        <div class="val" data-count="${e.todayActiveUsers}">0</div>
        <div class="stat-sub">${a}</div>
      </div>
    </div>
    <div class="keyword-section">
      <h3>🏆 熱門關鍵字 TOP ${e.topKeywords.length}</h3>
      <div class="keyword-bars">${n}</div>
    </div>`,document.querySelectorAll(".val[data-count]").forEach(s=>{const d=parseInt(s.dataset.count,10);if(!d){s.textContent="0";return}const h=Math.ceil(d/(900/16));let i=0;const m=setInterval(()=>{i=Math.min(i+h,d),s.textContent=i.toLocaleString(),i>=d&&clearInterval(m)},16)}),setTimeout(()=>{document.querySelectorAll(".keyword-bar-fill").forEach(s=>{s.style.width=s.dataset.pct+"%"})},100)}let E=[];function j(e){E=e,w(e)}function w(e){const t=document.getElementById("record-count");if(t&&(t.textContent=`${e.length} 筆記錄`),!e||e.length===0){document.getElementById("records-content").innerHTML=`<div style="text-align:center;padding:60px;color:var(--muted)">
               <div style="font-size:40px;margin-bottom:12px">💬</div>
               <div>暫無對話記錄</div>
             </div>`;return}const n=e.map(a=>{var m;const l=!a.userEmail||a.userName==="訪客"||a.userName==="anonymous",s=l?"?":(((m=a.userName)==null?void 0:m[0])||"?").toUpperCase(),d=l?"anon":"auth",u=a.time?new Date(a.time).toLocaleString("zh-TW",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"-",h=c(a.user).slice(0,120)+(a.user.length>120?"…":""),i=c(a.ai).slice(0,160)+(a.ai.length>160?"…":"");return`<div class="chat-card">
          <div class="chat-card-header">
            <div class="user-avatar ${d}">${s}</div>
            <div class="user-meta">
              <div class="user-name">${c(a.userName||"訪客")}</div>
              <div class="user-email">${c(a.userEmail||"匿名使用者")}</div>
            </div>
            <div class="time-chip">${u}</div>
          </div>
          <div class="chat-q">
            <div class="q-label">問 Q</div>
            ${h}
          </div>
          <div class="chat-a">
            <div class="a-label">AI 答</div>
            ${i}
          </div>
        </div>`}).join("");document.getElementById("records-content").innerHTML=`<div class="chat-cards">${n}</div>`}document.getElementById("search-input").addEventListener("input",function(){const e=this.value.trim().toLowerCase();if(!e){w(E);return}const t=E.filter(n=>n.userName.toLowerCase().includes(e)||n.userEmail.toLowerCase().includes(e)||n.user.toLowerCase().includes(e));w(t)});const r=document.getElementById("kb-editor"),o=document.getElementById("kb-status"),v=document.getElementById("kb-char-count"),H=document.getElementById("kb-line-count");function k(){const e=r.value;v.textContent=e.length.toLocaleString(),H.textContent=e?e.split(`
`).length.toLocaleString():"0",e.length>4500?v.style.color="#f87171":e.length>3e3?v.style.color="#fbbf24":v.style.color="#7ee787"}async function L(){r.placeholder="載入中…",o.textContent="";try{const e=await z();r.value=e.data.content||"",k()}catch(e){o.textContent="❌ 載入失敗："+e.message}}r.addEventListener("input",k);document.getElementById("kb-save-btn").addEventListener("click",async()=>{o.textContent="⏳ 儲存中…";try{await D({content:r.value}),o.textContent="✅ 已儲存！AI 將立即使用新版本。",o.style.color="#34d399",setTimeout(()=>{o.textContent="",o.style.color=""},4e3)}catch(e){o.textContent="❌ 儲存失敗："+e.message,o.style.color="#f43f5e"}});document.getElementById("kb-reload-btn").addEventListener("click",L);document.getElementById("set-admin-btn").addEventListener("click",async()=>{const e=document.getElementById("admin-email-input").value.trim(),t=document.getElementById("set-admin-msg");if(!e){t.textContent="請輸入 Email",t.style.color="#f43f5e";return}t.textContent="⏳ 設定中…",t.style.color="var(--muted)";try{const n=await F({email:e});t.textContent="✅ "+n.data.message,t.style.color="#34d399",document.getElementById("admin-email-input").value=""}catch(n){t.textContent="❌ "+n.message,t.style.color="#f43f5e"}});function c(e){return String(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}
