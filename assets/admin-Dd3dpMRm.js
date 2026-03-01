import{h as U,j,k as F,l as f,o as R,m as I,s as W,G as H}from"./index.esm2017-F-JNOIJ7.js";const N={apiKey:"AIzaSyDcMhKXCKS5yu4J07Lep5hp8IP8a_KqK5E",authDomain:"smes-e1dc3.firebaseapp.com",projectId:"smes-e1dc3",storageBucket:"smes-e1dc3.firebasestorage.app",messagingSenderId:"626362737802",appId:"1:626362737802:web:5193274a7d9b4963c97973"},A=U(N),g=j(A),y=F(A,"asia-northeast1"),T=f(y,"getAdminStats"),G=f(y,"getKnowledgeBase"),O=f(y,"updateKnowledgeBase"),P=f(y,"setAdmin"),V=f(y,"deleteUserChat");let m=null;R(g,async e=>{if(!e){L();return}document.getElementById("login-error").textContent="⏳ 驗證管理員身份中…",document.getElementById("login-error").style.color="#94a3b8";try{await e.getIdToken(!0),m=(await T()).data,x(e),K(m),M(m.recentChats)}catch(t){const n=(t==null?void 0:t.code)||"";n==="functions/permission-denied"||n==="functions/unauthenticated"?(await I(g),document.getElementById("login-error").textContent="⛔ 此帳號無管理員權限，請聯繫阿凱老師。",document.getElementById("login-error").style.color="#f43f5e",L()):(console.warn("Admin auth check error:",t.message),x(e))}});document.getElementById("login-btn").addEventListener("click",async()=>{try{await W(g,new H)}catch(e){document.getElementById("login-error").textContent="登入失敗："+e.message}});function Z(){typeof customConfirm=="function"?customConfirm({icon:"👋",title:"確認登出",message:"確定要登出管理員後台嗎？",confirmText:"登出",confirmGradient:"linear-gradient(135deg,#4f46e5,#7c3aed)",onConfirm:()=>I(g)}):I(g)}document.getElementById("logout-link").addEventListener("click",Z);function L(){document.getElementById("login-screen").style.display="flex"}function x(e){document.getElementById("login-screen").style.display="none",document.getElementById("admin-email").textContent=e.email}document.querySelectorAll(".nav-item").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active")),document.querySelectorAll(".page").forEach(n=>n.classList.remove("active")),e.classList.add("active");const t="page-"+e.dataset.page;document.getElementById(t).classList.add("active"),e.dataset.page==="knowledge"&&!document.getElementById("kb-editor").value&&z(),C&&e.dataset.page!=="knowledge"&&typeof customConfirm=="function"&&customConfirm({icon:"⚠️",title:"有未儲存的變更",message:"知識庫尚未儲存，確定要離開吗？",confirmText:"離開不儲存",confirmGradient:"linear-gradient(135deg,#f43f5e,#be123c)",onConfirm:()=>{C=!1}})})});let k=null;async function _(){const e=document.getElementById("stats-refresh-btn");e&&(e.disabled=!0,e.style.opacity="0.5");try{m=(await T()).data,k=new Date,K(m),M(m.recentChats)}catch(t){document.getElementById("stats-content").innerHTML=`<p style="color:#f43f5e">錯誤：${t.message}</p>`}finally{e&&(e.disabled=!1,e.style.opacity="1")}}function K(e){var o;const t=((o=e.topKeywords[0])==null?void 0:o.count)||1,n=e.topKeywords.map((s,c)=>{const p=Math.round(s.count/t*100);return`<div class="keyword-row">
          <span class="keyword-rank">${c+1}</span>
          <span class="keyword-name" title="${r(s.word)}">${r(s.word)}</span>
          <div class="keyword-bar-wrap">
            <div class="keyword-bar-fill" style="width:0%" data-pct="${p}"></div>
          </div>
          <span class="keyword-count">${s.count}</span>
        </div>`}).join(""),a=new Date().toLocaleDateString("zh-TW",{timeZone:"Asia/Taipei"}),i=k?k.toLocaleTimeString("zh-TW",{hour:"2-digit",minute:"2-digit",second:"2-digit"}):"--:--";document.getElementById("stats-content").innerHTML=`
    <div class="stats-header-bar">
      <span class="stats-update-time">⏱️ 最後更新：${i}</span>
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
        <div class="stat-sub">${a}</div>
      </div>
    </div>
    <div class="chart-row">
      <div class="chart-card">
        <h4>📈 近 7 天問答趨勢</h4>
        <canvas id="chart-trend"></canvas>
      </div>
      <div class="chart-card">
        <h4>🧩 使用者類型</h4>
        <canvas id="chart-pie"></canvas>
      </div>
    </div>
    <div class="keyword-section">
      <h3>🏆 熱門關鍵字 TOP ${e.topKeywords.length}</h3>
      <div class="keyword-bars">${n}</div>
    </div>`,document.querySelectorAll(".val[data-count]").forEach(s=>{const c=parseInt(s.dataset.count,10);if(!c){s.textContent="0";return}const E=Math.ceil(c/(900/16));let u=0;const D=setInterval(()=>{u=Math.min(u+E,c),s.textContent=u.toLocaleString(),u>=c&&clearInterval(D)},16)}),setTimeout(()=>{document.querySelectorAll(".keyword-bar-fill").forEach(s=>{s.style.width=s.dataset.pct+"%"}),J(e)},100)}let w=null,B=null;function J(e){if(typeof Chart>"u")return;Chart.defaults.color="rgba(255,255,255,0.5)",Chart.defaults.borderColor="rgba(255,255,255,0.06)";const t=document.getElementById("chart-trend");if(t){w&&w.destroy();const a=Object.keys(e.dailyTrend||{}).sort(),i=a.map(o=>(e.dailyTrend||{})[o]||0);w=new Chart(t,{type:"line",data:{labels:a.map(o=>o.slice(5)),datasets:[{label:"問答次數",data:i,borderColor:"#818cf8",backgroundColor:"rgba(129,140,248,0.15)",fill:!0,tension:.4,pointRadius:4,pointBackgroundColor:"#818cf8",pointBorderWidth:0}]},options:{plugins:{legend:{display:!1}},scales:{x:{ticks:{font:{size:11}},grid:{color:"rgba(255,255,255,0.05)"}},y:{ticks:{font:{size:11},stepSize:1},grid:{color:"rgba(255,255,255,0.05)"},beginAtZero:!0}},maintainAspectRatio:!1}})}const n=document.getElementById("chart-pie");n&&(B&&B.destroy(),B=new Chart(n,{type:"doughnut",data:{labels:["登入用戶","訪客"],datasets:[{data:[e.authCount||0,e.anonCount||0],backgroundColor:["#818cf8","#f472b6"],borderWidth:0}]},options:{plugins:{legend:{position:"bottom",labels:{font:{size:11},padding:12}}},maintainAspectRatio:!1,cutout:"62%"}}))}let l=[];function M(e){l=e,b(e)}function b(e){const t=document.getElementById("record-count");if(t&&(t.textContent=`${e.length} 筆記錄`),!e||e.length===0){document.getElementById("records-content").innerHTML=`<div style="text-align:center;padding:60px;color:var(--muted)">
               <div style="font-size:40px;margin-bottom:12px">💬</div>
               <div>暫無對話記錄</div>
             </div>`;return}const n=e.map(a=>{var u;const i=!a.userEmail||a.userName==="訪客"||a.userName==="anonymous",o=i?"?":(((u=a.userName)==null?void 0:u[0])||"?").toUpperCase(),s=i?"anon":"auth",c=a.time?new Date(a.time).toLocaleString("zh-TW",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"-",p=r(a.user).slice(0,120)+(a.user.length>120?"…":""),E=r(a.ai).slice(0,160)+(a.ai.length>160?"…":"");return`<div class="chat-card">
          <div class="chat-card-header">
            <div class="user-avatar ${s}">${o}</div>
            <div class="user-meta">
              <div class="user-name">${r(a.userName||"訪客")}</div>
              <div class="user-email">${r(a.userEmail||"匿名使用者")}</div>
            </div>
            <div class="time-chip">${c}</div>
            <button class="chat-delete-btn"
              data-uid="${r(a.uid)}"
              data-time="${r(a.time||"")}"
              title="刪除此筆記錄">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                <path d="M10 11v6M14 11v6"/>
                <path d="M9 6V4h6v2"/>
              </svg>
            </button>
          </div>
          <div class="chat-q">
            <div class="q-label">問 Q</div>
            ${p}
          </div>
          <div class="chat-a">
            <div class="a-label">AI 答</div>
            ${E}
          </div>
        </div>`}).join("");document.getElementById("records-content").innerHTML=`<div class="chat-cards">${n}</div>`}document.getElementById("search-input").addEventListener("input",function(){const e=this.value.trim().toLowerCase();if(!e){b(l);return}const t=l.filter(n=>(n.userName||"").toLowerCase().includes(e)||(n.userEmail||"").toLowerCase().includes(e)||(n.user||"").toLowerCase().includes(e)||(n.ai||"").toLowerCase().includes(e));b(t)});document.getElementById("records-content").addEventListener("click",function(e){const t=e.target.closest(".chat-delete-btn");if(!t)return;const n=t.dataset.uid,a=t.dataset.time;customConfirm({icon:"🗑️",title:"刪除對話記錄",message:"確定要永久刪除此筆對話吗？此操作無法復原。",confirmText:"刪除",confirmGradient:"linear-gradient(135deg,#f43f5e,#be123c)",onConfirm:async()=>{t.disabled=!0;const i=t.querySelector("svg");i&&(i.style.opacity="0.3");try{await V({uid:n,time:a}),l=l.filter(o=>!(o.uid===n&&o.time===a)),b(l)}catch(o){alert("刪除失敗："+o.message),t.disabled=!1,i&&(i.style.opacity="1")}}})});function Q(){if(l.length===0)return;const e="時間,使用者,Email,問題,AI 回答",t=l.map(s=>[s.time?new Date(s.time).toLocaleString("zh-TW"):"",`"${(s.userName||"").replace(/"/g,'""')}"`,`"${(s.userEmail||"").replace(/"/g,'""')}"`,`"${(s.user||"").replace(/"/g,'""')}"`,`"${(s.ai||"").replace(/"/g,'""')}"`].join(",")),n="\uFEFF"+[e,...t].join(`
`),a=new Blob([n],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(a),o=document.createElement("a");o.href=i,o.download=`對話記錄_${new Date().toLocaleDateString("zh-TW").replace(/\//g,"-")}.csv`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(i)}const S=document.getElementById("export-csv-btn");S&&S.addEventListener("click",Q);const v=document.getElementById("kb-editor"),d=document.getElementById("kb-status"),h=document.getElementById("kb-char-count"),X=document.getElementById("kb-line-count");let C=!1;function q(){const e=v.value;h.textContent=e.length.toLocaleString(),X.textContent=e?e.split(`
`).length.toLocaleString():"0",e.length>4500?h.style.color="#f87171":e.length>3e3?h.style.color="#fbbf24":h.style.color="#7ee787"}async function z(){v.placeholder="載入中…",d.textContent="";try{const e=await G();v.value=e.data.content||"",q()}catch(e){d.textContent="❌ 載入失敗："+e.message}}v.addEventListener("input",()=>{q(),C=!0;const e=document.getElementById("kb-save-btn");e&&(e.style.boxShadow="0 0 0 3px rgba(251,191,36,0.45)")});document.getElementById("kb-save-btn").addEventListener("click",async()=>{d.textContent="⏳ 儲存中…";try{await O({content:v.value}),C=!1,d.textContent="✅ 已儲存！AI 將立即使用新版本。",d.style.color="#34d399";const e=document.getElementById("kb-save-btn");e&&(e.style.boxShadow=""),setTimeout(()=>{d.textContent="",d.style.color=""},4e3)}catch(e){d.textContent="❌ 儲存失敗："+e.message,d.style.color="#f43f5e"}});document.getElementById("kb-reload-btn").addEventListener("click",z);document.getElementById("set-admin-btn").addEventListener("click",async()=>{const e=document.getElementById("admin-email-input").value.trim(),t=document.getElementById("set-admin-msg");if(!e){t.textContent="請輸入 Email",t.style.color="#f43f5e";return}t.textContent="⏳ 設定中…",t.style.color="var(--muted)";try{const n=await P({email:e});t.textContent="✅ "+n.data.message,t.style.color="#34d399",document.getElementById("admin-email-input").value=""}catch(n){t.textContent="❌ "+n.message,t.style.color="#f43f5e"}});function r(e){return String(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const $=document.getElementById("stats-refresh-btn");$&&$.addEventListener("click",_);
