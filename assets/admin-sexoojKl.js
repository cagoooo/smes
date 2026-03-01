import{h as O,j as P,k as V,l as u,o as Z,m as I,s as _,G as J}from"./index.esm2017-F-JNOIJ7.js";const Q={apiKey:"AIzaSyDcMhKXCKS5yu4J07Lep5hp8IP8a_KqK5E",authDomain:"smes-e1dc3.firebaseapp.com",projectId:"smes-e1dc3",storageBucket:"smes-e1dc3.firebasestorage.app",messagingSenderId:"626362737802",appId:"1:626362737802:web:5193274a7d9b4963c97973"},H=O(Q),b=P(H),m=V(H,"asia-northeast1"),z=u(m,"getAdminStats"),X=u(m,"getKnowledgeBase"),Y=u(m,"updateKnowledgeBase"),tt=u(m,"setAdmin"),et=u(m,"deleteUserChat"),nt=u(m,"getKnowledgeHistory"),at=u(m,"restoreKnowledgeVersion"),st=u(m,"getAlertKeywords"),ot=u(m,"setAlertKeywords");let v=null;Z(b,async t=>{if(!t){K();return}document.getElementById("login-error").textContent="⏳ 驗證管理員身份中…",document.getElementById("login-error").style.color="#94a3b8";try{await t.getIdToken(!0),v=(await z()).data,M(t),j(v),R(v.recentChats)}catch(e){const a=(e==null?void 0:e.code)||"";a==="functions/permission-denied"||a==="functions/unauthenticated"?(await I(b),document.getElementById("login-error").textContent="⛔ 此帳號無管理員權限，請聯繫阿凱老師。",document.getElementById("login-error").style.color="#f43f5e",K()):(console.warn("Admin auth check error:",e.message),M(t))}});document.getElementById("login-btn").addEventListener("click",async()=>{try{await _(b,new J)}catch(t){document.getElementById("login-error").textContent="登入失敗："+t.message}});function it(){typeof customConfirm=="function"?customConfirm({icon:"👋",title:"確認登出",message:"確定要登出管理員後台嗎？",confirmText:"登出",confirmGradient:"linear-gradient(135deg,#4f46e5,#7c3aed)",onConfirm:()=>I(b)}):I(b)}document.getElementById("logout-link").addEventListener("click",it);function K(){document.getElementById("login-screen").style.display="flex"}function M(t){document.getElementById("login-screen").style.display="none",document.getElementById("admin-email").textContent=t.email}document.querySelectorAll(".nav-item").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(".nav-item").forEach(a=>a.classList.remove("active")),document.querySelectorAll(".page").forEach(a=>a.classList.remove("active")),t.classList.add("active");const e="page-"+t.dataset.page;document.getElementById(e).classList.add("active"),t.dataset.page==="knowledge"&&!document.getElementById("kb-editor").value&&U(),E&&t.dataset.page!=="knowledge"&&typeof customConfirm=="function"&&customConfirm({icon:"⚠️",title:"有未儲存的變更",message:"知識庫尚未儲存，確定要離開吗？",confirmText:"離開不儲存",confirmGradient:"linear-gradient(135deg,#f43f5e,#be123c)",onConfirm:()=>{E=!1}})})});let L=null,x=7;async function D(t=x){x=t,document.querySelectorAll(".days-btn").forEach(a=>{a.classList.toggle("active",Number(a.dataset.days)===t)});const e=document.getElementById("stats-refresh-btn");e&&(e.disabled=!0,e.style.opacity="0.5");try{v=(await z({days:t})).data,L=new Date,j(v,t),R(v.recentChats)}catch(a){document.getElementById("stats-content").innerHTML=`<p style="color:#f43f5e">錯誤：${a.message}</p>`}finally{e&&(e.disabled=!1,e.style.opacity="1")}}function j(t,e=7){var r;const a=((r=t.topKeywords[0])==null?void 0:r.count)||1,n=t.topKeywords.map((i,g)=>{const h=Math.round(i.count/a*100);return`<div class="keyword-row">
          <span class="keyword-rank">${g+1}</span>
          <span class="keyword-name" title="${l(i.word)}">${l(i.word)}</span>
          <div class="keyword-bar-wrap">
            <div class="keyword-bar-fill" style="width:0%" data-pct="${h}"></div>
          </div>
          <span class="keyword-count">${i.count}</span>
        </div>`}).join(""),s=new Date().toLocaleDateString("zh-TW",{timeZone:"Asia/Taipei"}),o=L?L.toLocaleTimeString("zh-TW",{hour:"2-digit",minute:"2-digit",second:"2-digit"}):"--:--",d=e===0?"近30 天":`近 ${e} 天`;document.getElementById("stats-content").innerHTML=`
    <div class="stats-header-bar">
      <span class="stats-update-time">⏱️ 最後更新：${o}</span>
      <div class="days-toggle">
        <button class="days-btn${e===7?" active":""}" data-days="7">7 天</button>
        <button class="days-btn${e===14?" active":""}" data-days="14">14 天</button>
        <button class="days-btn${e===30?" active":""}" data-days="30">30 天</button>
      </div>
    </div>
    <div class="stat-grid">
      <div class="stat-card card-msg">
        <div class="stat-icon">💬</div>
        <div class="label">訊息總數</div>
        <div class="val" data-count="${t.totalMessages}">0</div>
        <div class="stat-sub">累計問答記錄</div>
      </div>
      <div class="stat-card card-users">
        <div class="stat-icon">👥</div>
        <div class="label">使用者數</div>
        <div class="val" data-count="${t.totalUsers}">0</div>
        <div class="stat-sub">個別使用者</div>
      </div>
      <div class="stat-card card-today">
        <div class="stat-icon">🔥</div>
        <div class="label">今日活踴</div>
        <div class="val" data-count="${t.todayActiveUsers}">0</div>
        <div class="stat-sub">${s}</div>
      </div>
    </div>
    <div class="chart-row">
      <div class="chart-card">
        <h4>📈 ${d}問答趨勢</h4>
        <canvas id="chart-trend"></canvas>
      </div>
      <div class="chart-card">
        <h4>🧩 使用者類型</h4>
        <canvas id="chart-pie"></canvas>
      </div>
    </div>
    <div class="keyword-section">
      <h3>🏆 熱門關鍵字 TOP ${t.topKeywords.length}</h3>
      <div class="keyword-bars">${n}</div>
    </div>`,document.querySelectorAll(".days-btn").forEach(i=>{i.addEventListener("click",()=>D(Number(i.dataset.days)))}),document.querySelectorAll(".val[data-count]").forEach(i=>{const g=parseInt(i.dataset.count,10);if(!g){i.textContent="0";return}const W=Math.ceil(g/(900/16));let w=0;const G=setInterval(()=>{w=Math.min(w+W,g),i.textContent=w.toLocaleString(),w>=g&&clearInterval(G)},16)}),setTimeout(()=>{document.querySelectorAll(".keyword-bar-fill").forEach(i=>{i.style.width=i.dataset.pct+"%"}),dt(t)},100)}let k=null,B=null;function dt(t){if(typeof Chart>"u")return;Chart.defaults.color="rgba(255,255,255,0.5)",Chart.defaults.borderColor="rgba(255,255,255,0.06)";const e=document.getElementById("chart-trend");if(e){k&&k.destroy();const n=Object.keys(t.dailyTrend||{}).sort(),s=n.map(o=>(t.dailyTrend||{})[o]||0);k=new Chart(e,{type:"line",data:{labels:n.map(o=>o.slice(5)),datasets:[{label:"問答次數",data:s,borderColor:"#818cf8",backgroundColor:"rgba(129,140,248,0.15)",fill:!0,tension:.4,pointRadius:4,pointBackgroundColor:"#818cf8",pointBorderWidth:0}]},options:{plugins:{legend:{display:!1}},scales:{x:{ticks:{font:{size:11}},grid:{color:"rgba(255,255,255,0.05)"}},y:{ticks:{font:{size:11},stepSize:1},grid:{color:"rgba(255,255,255,0.05)"},beginAtZero:!0}},maintainAspectRatio:!1}})}const a=document.getElementById("chart-pie");a&&(B&&B.destroy(),B=new Chart(a,{type:"doughnut",data:{labels:["登入用戶","訪客"],datasets:[{data:[t.authCount||0,t.anonCount||0],backgroundColor:["#818cf8","#f472b6"],borderWidth:0}]},options:{plugins:{legend:{position:"bottom",labels:{font:{size:11},padding:12}}},maintainAspectRatio:!1,cutout:"62%"}}))}let y=[];function R(t){y=t,S(t)}function S(t){const e=document.getElementById("record-count");if(e&&(e.textContent=`${t.length} 筆記錄`),!t||t.length===0){document.getElementById("records-content").innerHTML=`<div style="text-align:center;padding:60px;color:var(--muted)">
               <div style="font-size:40px;margin-bottom:12px">💬</div>
               <div>暫無對話記錄</div>
             </div>`;return}const a=t.map(n=>{var h;const s=!n.userEmail||n.userName==="訪客"||n.userName==="anonymous",o=s?"?":(((h=n.userName)==null?void 0:h[0])||"?").toUpperCase(),d=s?"anon":"auth",r=n.time?new Date(n.time).toLocaleString("zh-TW",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"-",i=l(n.user).slice(0,120)+(n.user.length>120?"…":""),g=l(n.ai).slice(0,160)+(n.ai.length>160?"…":"");return`<div class="chat-card">
          <div class="chat-card-header">
            <div class="user-avatar ${d}">${o}</div>
            <div class="user-meta">
              <div class="user-name">${l(n.userName||"訪客")}</div>
              <div class="user-email">${l(n.userEmail||"匿名使用者")}</div>
            </div>
            <div class="time-chip">${r}</div>
            <button class="chat-delete-btn"
              data-uid="${l(n.uid)}"
              data-time="${l(n.time||"")}"
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
            ${i}
          </div>
          <div class="chat-a">
            <div class="a-label">AI 答</div>
            ${g}
          </div>
        </div>`}).join("");document.getElementById("records-content").innerHTML=`<div class="chat-cards">${a}</div>`}function $(){var s,o,d;const t=(((s=document.getElementById("search-input"))==null?void 0:s.value)||"").trim().toLowerCase(),e=(o=document.getElementById("date-from"))==null?void 0:o.value,a=(d=document.getElementById("date-to"))==null?void 0:d.value;let n=y;e&&(n=n.filter(r=>r.time&&String(r.time).slice(0,10)>=e)),a&&(n=n.filter(r=>r.time&&String(r.time).slice(0,10)<=a)),t&&(n=n.filter(r=>(r.userName||"").toLowerCase().includes(t)||(r.userEmail||"").toLowerCase().includes(t)||(r.user||"").toLowerCase().includes(t)||(r.ai||"").toLowerCase().includes(t))),S(n)}document.getElementById("search-input").addEventListener("input",$);document.addEventListener("change",t=>{(t.target.id==="date-from"||t.target.id==="date-to")&&$()});document.addEventListener("click",t=>{if(t.target.id==="date-clear-btn"){const e=document.getElementById("date-from"),a=document.getElementById("date-to");e&&(e.value=""),a&&(a.value=""),$()}});document.getElementById("records-content").addEventListener("click",function(t){const e=t.target.closest(".chat-delete-btn");if(!e)return;const a=e.dataset.uid,n=e.dataset.time;customConfirm({icon:"🗑️",title:"刪除對話記錄",message:"確定要永久刪除此筆對話吗？此操作無法復原。",confirmText:"刪除",confirmGradient:"linear-gradient(135deg,#f43f5e,#be123c)",onConfirm:async()=>{e.disabled=!0;const s=e.querySelector("svg");s&&(s.style.opacity="0.3");try{await et({uid:a,time:n}),y=y.filter(o=>!(o.uid===a&&o.time===n)),S(y)}catch(o){alert("刪除失敗："+o.message),e.disabled=!1,s&&(s.style.opacity="1")}}})});function rt(){if(y.length===0)return;const t="時間,使用者,Email,問題,AI 回答",e=y.map(d=>[d.time?new Date(d.time).toLocaleString("zh-TW"):"",`"${(d.userName||"").replace(/"/g,'""')}"`,`"${(d.userEmail||"").replace(/"/g,'""')}"`,`"${(d.user||"").replace(/"/g,'""')}"`,`"${(d.ai||"").replace(/"/g,'""')}"`].join(",")),a="\uFEFF"+[t,...e].join(`
`),n=new Blob([a],{type:"text/csv;charset=utf-8;"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=`對話記錄_${new Date().toLocaleDateString("zh-TW").replace(/\//g,"-")}.csv`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(s)}const q=document.getElementById("export-csv-btn");q&&q.addEventListener("click",rt);const f=document.getElementById("kb-editor"),c=document.getElementById("kb-status"),C=document.getElementById("kb-char-count"),ct=document.getElementById("kb-line-count");let E=!1;function A(){const t=f.value;C.textContent=t.length.toLocaleString(),ct.textContent=t?t.split(`
`).length.toLocaleString():"0",t.length>4500?C.style.color="#f87171":t.length>3e3?C.style.color="#fbbf24":C.style.color="#7ee787"}async function U(){f.placeholder="載入中…",c.textContent="";try{const t=await X();f.value=t.data.content||"",A()}catch(t){c.textContent="❌ 載入失敗："+t.message}}f.addEventListener("input",()=>{A(),E=!0;const t=document.getElementById("kb-save-btn");t&&(t.style.boxShadow="0 0 0 3px rgba(251,191,36,0.45)")});document.getElementById("kb-save-btn").addEventListener("click",async()=>{c.textContent="⏳ 儲存中…";try{await Y({content:f.value}),E=!1,c.textContent="✅ 已儲存！AI 將立即使用新版本。",c.style.color="#34d399";const t=document.getElementById("kb-save-btn");t&&(t.style.boxShadow=""),setTimeout(()=>{c.textContent="",c.style.color=""},4e3),N()}catch(t){c.textContent="❌ 儲存失敗："+t.message,c.style.color="#f43f5e"}});document.getElementById("kb-reload-btn").addEventListener("click",U);async function N(){const t=document.getElementById("kb-history-list");if(t){t.innerHTML='<p style="color:var(--muted);padding:8px">載入中…</p>';try{const a=(await nt()).data.versions||[];if(a.length===0){t.innerHTML='<p style="color:var(--muted);padding:8px">尚無版本歷史</p>';return}t.innerHTML=a.map(n=>{const s=n.savedAt?new Date(n.savedAt).toLocaleString("zh-TW"):n.id,o=n.charCount?`${n.charCount.toLocaleString()} 字`:"",d=n.savedBy?`由 ${n.savedBy}`:"";return`<div class="kb-history-item">
              <div class="kb-history-meta">
                <span class="kb-history-time"> ${s}</span>
                <span class="kb-history-chars">${o}</span>
                <span class="kb-history-by">${d}</span>
              </div>
              <button class="btn-restore" data-vid="${n.id}">⏪ 回復此版本</button>
            </div>`}).join(""),t.querySelectorAll(".btn-restore").forEach(n=>{n.addEventListener("click",()=>{customConfirm({icon:"🗂️",title:"回復知識庫版本",message:"確定要用這個旧版本覆蓋現有知識庫嗎？",confirmText:"回復",confirmGradient:"linear-gradient(135deg,#7c3aed,#4f46e5)",onConfirm:async()=>{n.disabled=!0,n.textContent="回復中…";try{const s=await at({versionId:n.dataset.vid});f.value=s.data.content||"",A(),E=!1,c.textContent="✅ 版本已回復，請確認內容後再儲存。",c.style.color="#34d399"}catch(s){alert("回復失敗："+s.message),n.disabled=!1,n.textContent="⏪ 回復此版本"}}})})})}catch(e){t.innerHTML=`<p style="color:#f43f5e">載入失敗：${e.message}</p>`}}}document.addEventListener("click",t=>{if(t.target.id==="kb-history-toggle"){const e=document.getElementById("kb-history-list");if(!e)return;const a=e.style.display==="none"||!e.style.display;e.style.display=a?"block":"none",t.target.textContent=a?"📁 收起版本歷史":"🗂️ 查看版本歷史",a&&N()}});document.getElementById("set-admin-btn").addEventListener("click",async()=>{const t=document.getElementById("admin-email-input").value.trim(),e=document.getElementById("set-admin-msg");if(!t){e.textContent="請輸入 Email",e.style.color="#f43f5e";return}e.textContent="⏳ 設定中…",e.style.color="var(--muted)";try{const a=await tt({email:t});e.textContent="✅ "+a.data.message,e.style.color="#34d399",document.getElementById("admin-email-input").value=""}catch(a){e.textContent="❌ "+a.message,e.style.color="#f43f5e"}});function l(t){return String(t||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const F=document.getElementById("stats-refresh-btn");F&&F.addEventListener("click",()=>D(x));let p=[];async function lt(){if(document.getElementById("alert-tags"))try{p=(await st()).data.keywords||[],T()}catch(e){console.warn("告警關鍵字載入失敗:",e.message)}}function T(){const t=document.getElementById("alert-tags");t&&(t.innerHTML=p.map((e,a)=>`<span class="alert-tag">${l(e)}
          <button class="alert-tag-del" data-idx="${a}" title="移除">×</button>
        </span>`).join(""),t.querySelectorAll(".alert-tag-del").forEach(e=>{e.addEventListener("click",()=>{p.splice(Number(e.dataset.idx),1),T()})}))}async function ut(){const t=document.getElementById("alert-save-msg");t&&(t.textContent="⏳ 儲存中…",t.style.color="var(--muted)");try{await ot({keywords:p}),t&&(t.textContent="✅ 已儲存",t.style.color="#34d399"),setTimeout(()=>{t&&(t.textContent="")},3e3)}catch(e){t&&(t.textContent="❌ "+e.message,t.style.color="#f43f5e")}}document.addEventListener("click",async t=>{var a;const e=t.target.closest(".nav-item");if(((a=e==null?void 0:e.dataset)==null?void 0:a.page)==="settings"&&setTimeout(lt,100),t.target.id==="alert-add-btn"){const n=document.getElementById("alert-input"),s=((n==null?void 0:n.value)||"").trim();s&&!p.includes(s)&&p.push(s),n&&s&&(n.value="",T())}t.target.id==="alert-save-btn"&&ut()});document.addEventListener("keydown",t=>{var e;t.target.id==="alert-input"&&t.key==="Enter"&&((e=document.getElementById("alert-add-btn"))==null||e.click())});
