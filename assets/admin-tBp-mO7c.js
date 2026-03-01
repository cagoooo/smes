import{h as M,j as D,k as z,l as p,o as F,m as b,s as H,G as N}from"./index.esm2017-F-JNOIJ7.js";const j={apiKey:"AIzaSyDcMhKXCKS5yu4J07Lep5hp8IP8a_KqK5E",authDomain:"smes-e1dc3.firebaseapp.com",projectId:"smes-e1dc3",storageBucket:"smes-e1dc3.firebasestorage.app",messagingSenderId:"626362737802",appId:"1:626362737802:web:5193274a7d9b4963c97973"},x=M(j),r=D(x),h=z(x,"asia-northeast1"),S=p(h,"getAdminStats"),G=p(h,"getKnowledgeBase"),P=p(h,"updateKnowledgeBase"),U=p(h,"setAdmin");let l=null;F(r,async e=>{if(!e){C();return}document.getElementById("login-error").textContent="⏳ 驗證管理員身份中…",document.getElementById("login-error").style.color="#94a3b8";try{await e.getIdToken(!0),l=(await S()).data,k(e),$(l),A(l.recentChats)}catch(t){const n=(t==null?void 0:t.code)||"";n==="functions/permission-denied"||n==="functions/unauthenticated"?(await b(r),document.getElementById("login-error").textContent="⛔ 此帳號無管理員權限，請聯繫阿凱老師。",document.getElementById("login-error").style.color="#f43f5e",C()):(console.warn("Admin auth check error:",t.message),k(e))}});document.getElementById("login-btn").addEventListener("click",async()=>{try{await H(r,new N)}catch(e){document.getElementById("login-error").textContent="登入失敗："+e.message}});function W(){typeof customConfirm=="function"?customConfirm({icon:"👋",title:"確認登出",message:"確定要登出管理員後台嗎？",confirmText:"登出",confirmGradient:"linear-gradient(135deg,#4f46e5,#7c3aed)",onConfirm:()=>b(r)}):b(r)}document.getElementById("logout-link").addEventListener("click",W);function C(){document.getElementById("login-screen").style.display="flex"}function k(e){document.getElementById("login-screen").style.display="none",document.getElementById("admin-email").textContent=e.email}document.querySelectorAll(".nav-item").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active")),document.querySelectorAll(".page").forEach(n=>n.classList.remove("active")),e.classList.add("active");const t="page-"+e.dataset.page;document.getElementById(t).classList.add("active"),e.dataset.page==="knowledge"&&!document.getElementById("kb-editor").value&&K(),f&&e.dataset.page!=="knowledge"&&typeof customConfirm=="function"&&customConfirm({icon:"⚠️",title:"有未儲存的變更",message:"知識庫尚未儲存，確定要離開吗？",confirmText:"離開不儲存",confirmGradient:"linear-gradient(135deg,#f43f5e,#be123c)",onConfirm:()=>{f=!1}})})});let w=null;async function O(){const e=document.getElementById("stats-refresh-btn");e&&(e.disabled=!0,e.style.opacity="0.5");try{l=(await S()).data,w=new Date,$(l),A(l.recentChats)}catch(t){document.getElementById("stats-content").innerHTML=`<p style="color:#f43f5e">錯誤：${t.message}</p>`}finally{e&&(e.disabled=!1,e.style.opacity="1")}}function $(e){var g;const t=((g=e.topKeywords[0])==null?void 0:g.count)||1,n=e.topKeywords.map((a,i)=>{const v=Math.round(a.count/t*100);return`<div class="keyword-row">
          <span class="keyword-rank">${i+1}</span>
          <span class="keyword-name" title="${c(a.word)}">${c(a.word)}</span>
          <div class="keyword-bar-wrap">
            <div class="keyword-bar-fill" style="width:0%" data-pct="${v}"></div>
          </div>
          <span class="keyword-count">${a.count}</span>
        </div>`}).join(""),s=new Date().toLocaleDateString("zh-TW",{timeZone:"Asia/Taipei"}),u=w?w.toLocaleTimeString("zh-TW",{hour:"2-digit",minute:"2-digit",second:"2-digit"}):"--:--";document.getElementById("stats-content").innerHTML=`
    <div class="stats-header-bar">
      <span class="stats-update-time">⏱️ 最後更新：${u}</span>
    </div>
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
        <div class="stat-sub">${s}</div>
      </div>
    </div>
    <div class="keyword-section">
      <h3>🏆 熱門關鍵字 TOP ${e.topKeywords.length}</h3>
      <div class="keyword-bars">${n}</div>
    </div>`,document.querySelectorAll(".val[data-count]").forEach(a=>{const i=parseInt(a.dataset.count,10);if(!i){a.textContent="0";return}const E=Math.ceil(i/(900/16));let d=0;const q=setInterval(()=>{d=Math.min(d+E,i),a.textContent=d.toLocaleString(),d>=i&&clearInterval(q)},16)}),setTimeout(()=>{document.querySelectorAll(".keyword-bar-fill").forEach(a=>{a.style.width=a.dataset.pct+"%"})},100)}let I=[];function A(e){I=e,B(e)}function B(e){const t=document.getElementById("record-count");if(t&&(t.textContent=`${e.length} 筆記錄`),!e||e.length===0){document.getElementById("records-content").innerHTML=`<div style="text-align:center;padding:60px;color:var(--muted)">
               <div style="font-size:40px;margin-bottom:12px">💬</div>
               <div>暫無對話記錄</div>
             </div>`;return}const n=e.map(s=>{var d;const u=!s.userEmail||s.userName==="訪客"||s.userName==="anonymous",g=u?"?":(((d=s.userName)==null?void 0:d[0])||"?").toUpperCase(),a=u?"anon":"auth",i=s.time?new Date(s.time).toLocaleString("zh-TW",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"-",v=c(s.user).slice(0,120)+(s.user.length>120?"…":""),E=c(s.ai).slice(0,160)+(s.ai.length>160?"…":"");return`<div class="chat-card">
          <div class="chat-card-header">
            <div class="user-avatar ${a}">${g}</div>
            <div class="user-meta">
              <div class="user-name">${c(s.userName||"訪客")}</div>
              <div class="user-email">${c(s.userEmail||"匿名使用者")}</div>
            </div>
            <div class="time-chip">${i}</div>
          </div>
          <div class="chat-q">
            <div class="q-label">問 Q</div>
            ${v}
          </div>
          <div class="chat-a">
            <div class="a-label">AI 答</div>
            ${E}
          </div>
        </div>`}).join("");document.getElementById("records-content").innerHTML=`<div class="chat-cards">${n}</div>`}document.getElementById("search-input").addEventListener("input",function(){const e=this.value.trim().toLowerCase();if(!e){B(I);return}const t=I.filter(n=>(n.userName||"").toLowerCase().includes(e)||(n.userEmail||"").toLowerCase().includes(e)||(n.user||"").toLowerCase().includes(e)||(n.ai||"").toLowerCase().includes(e));B(t)});const m=document.getElementById("kb-editor"),o=document.getElementById("kb-status"),y=document.getElementById("kb-char-count"),R=document.getElementById("kb-line-count");let f=!1;function T(){const e=m.value;y.textContent=e.length.toLocaleString(),R.textContent=e?e.split(`
`).length.toLocaleString():"0",e.length>4500?y.style.color="#f87171":e.length>3e3?y.style.color="#fbbf24":y.style.color="#7ee787"}async function K(){m.placeholder="載入中…",o.textContent="";try{const e=await G();m.value=e.data.content||"",T()}catch(e){o.textContent="❌ 載入失敗："+e.message}}m.addEventListener("input",()=>{T(),f=!0;const e=document.getElementById("kb-save-btn");e&&(e.style.boxShadow="0 0 0 3px rgba(251,191,36,0.45)")});document.getElementById("kb-save-btn").addEventListener("click",async()=>{o.textContent="⏳ 儲存中…";try{await P({content:m.value}),f=!1,o.textContent="✅ 已儲存！AI 將立即使用新版本。",o.style.color="#34d399";const e=document.getElementById("kb-save-btn");e&&(e.style.boxShadow=""),setTimeout(()=>{o.textContent="",o.style.color=""},4e3)}catch(e){o.textContent="❌ 儲存失敗："+e.message,o.style.color="#f43f5e"}});document.getElementById("kb-reload-btn").addEventListener("click",K);document.getElementById("set-admin-btn").addEventListener("click",async()=>{const e=document.getElementById("admin-email-input").value.trim(),t=document.getElementById("set-admin-msg");if(!e){t.textContent="請輸入 Email",t.style.color="#f43f5e";return}t.textContent="⏳ 設定中…",t.style.color="var(--muted)";try{const n=await U({email:e});t.textContent="✅ "+n.data.message,t.style.color="#34d399",document.getElementById("admin-email-input").value=""}catch(n){t.textContent="❌ "+n.message,t.style.color="#f43f5e"}});function c(e){return String(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const L=document.getElementById("stats-refresh-btn");L&&L.addEventListener("click",O);
