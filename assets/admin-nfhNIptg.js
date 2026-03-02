import{h as P,j as V,l as O,k as _,R as X,m as l,o as Z,n as I,s as J,G as Q}from"./index.esm2017-DIg91vv7.js";const Y={apiKey:"AIzaSyDcMhKXCKS5yu4J07Lep5hp8IP8a_KqK5E",authDomain:"smes-e1dc3.firebaseapp.com",projectId:"smes-e1dc3",storageBucket:"smes-e1dc3.firebasestorage.app",messagingSenderId:"626362737802",appId:"1:626362737802:web:5193274a7d9b4963c97973"},A=P(Y),b=V(A),r=O(A,"asia-northeast1"),tt="6LdYDHwsAAAAAHXdqg87Sam-xlGf-tgouW9gU6T_";location.hostname!=="localhost"&&_(A,{provider:new X(tt),isTokenAutoRefreshEnabled:!0});const z=l(r,"getAdminStats"),et=l(r,"getKnowledgeBase"),nt=l(r,"updateKnowledgeBase"),at=l(r,"setAdmin"),st=l(r,"deleteUserChat"),ot=l(r,"getKnowledgeHistory"),it=l(r,"restoreKnowledgeVersion"),dt=l(r,"getAlertKeywords"),ct=l(r,"setAlertKeywords"),lt=l(r,"getAiSettings"),rt=l(r,"setAiSettings");let f=null;Z(b,async t=>{if(!t){F();return}document.getElementById("login-error").textContent="⏳ 驗證管理員身份中…",document.getElementById("login-error").style.color="#94a3b8";try{await t.getIdToken(!0),f=(await z()).data,q(t),R(f),j(f.recentChats)}catch(e){const n=(e==null?void 0:e.code)||"";n==="functions/permission-denied"||n==="functions/unauthenticated"?(await I(b),document.getElementById("login-error").textContent="⛔ 此帳號無管理員權限，請聯繫阿凱老師。",document.getElementById("login-error").style.color="#f43f5e",F()):(console.warn("Admin auth check error:",e.message),q(t))}});document.getElementById("login-btn").addEventListener("click",async()=>{try{await J(b,new Q)}catch(t){document.getElementById("login-error").textContent="登入失敗："+t.message}});function ut(){typeof customConfirm=="function"?customConfirm({icon:"👋",title:"確認登出",message:"確定要登出管理員後台嗎？",confirmText:"登出",confirmGradient:"linear-gradient(135deg,#4f46e5,#7c3aed)",onConfirm:()=>I(b)}):I(b)}document.getElementById("logout-link").addEventListener("click",ut);function F(){document.getElementById("login-screen").style.display="flex"}function q(t){document.getElementById("login-screen").style.display="none",document.getElementById("admin-email").textContent=t.email}document.querySelectorAll(".nav-item").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active")),document.querySelectorAll(".page").forEach(n=>n.classList.remove("active")),t.classList.add("active");const e="page-"+t.dataset.page;document.getElementById(e).classList.add("active"),t.dataset.page==="knowledge"&&!document.getElementById("kb-editor").value&&U(),E&&t.dataset.page!=="knowledge"&&typeof customConfirm=="function"&&customConfirm({icon:"⚠️",title:"有未儲存的變更",message:"知識庫尚未儲存，確定要離開吗？",confirmText:"離開不儲存",confirmGradient:"linear-gradient(135deg,#f43f5e,#be123c)",onConfirm:()=>{E=!1}})})});let x=null,L=7;async function D(t=L){L=t,document.querySelectorAll(".days-btn").forEach(n=>{n.classList.toggle("active",Number(n.dataset.days)===t)});const e=document.getElementById("stats-refresh-btn");e&&(e.disabled=!0,e.style.opacity="0.5");try{f=(await z({days:t})).data,x=new Date,R(f,t),j(f.recentChats)}catch(n){document.getElementById("stats-content").innerHTML=`<p style="color:#f43f5e">錯誤：${n.message}</p>`}finally{e&&(e.disabled=!1,e.style.opacity="1")}}function R(t,e=7){var d;const n=((d=t.topKeywords[0])==null?void 0:d.count)||1,a=t.topKeywords.map((c,g)=>{const h=Math.round(c.count/n*100);return`<div class="keyword-row">
          <span class="keyword-rank">${g+1}</span>
          <span class="keyword-name" title="${m(c.word)}">${m(c.word)}</span>
          <div class="keyword-bar-wrap">
            <div class="keyword-bar-fill" style="width:0%" data-pct="${h}"></div>
          </div>
          <span class="keyword-count">${c.count}</span>
        </div>`}).join(""),s=new Date().toLocaleDateString("zh-TW",{timeZone:"Asia/Taipei"}),o=x?x.toLocaleTimeString("zh-TW",{hour:"2-digit",minute:"2-digit",second:"2-digit"}):"--:--",i=e===0?"近30 天":`近 ${e} 天`;document.getElementById("stats-content").innerHTML=`
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
        <h4>📈 ${i}問答趨勢</h4>
        <canvas id="chart-trend"></canvas>
      </div>
      <div class="chart-card">
        <h4>🧩 使用者類型</h4>
        <canvas id="chart-pie"></canvas>
      </div>
    </div>
    <div class="keyword-section">
      <h3>🏆 熱門關鍵字 TOP ${t.topKeywords.length}</h3>
      <div class="keyword-bars">${a}</div>
    </div>`,document.querySelectorAll(".days-btn").forEach(c=>{c.addEventListener("click",()=>D(Number(c.dataset.days)))}),document.querySelectorAll(".val[data-count]").forEach(c=>{const g=parseInt(c.dataset.count,10);if(!g){c.textContent="0";return}const N=Math.ceil(g/(900/16));let C=0;const G=setInterval(()=>{C=Math.min(C+N,g),c.textContent=C.toLocaleString(),C>=g&&clearInterval(G)},16)}),setTimeout(()=>{document.querySelectorAll(".keyword-bar-fill").forEach(c=>{c.style.width=c.dataset.pct+"%"}),mt(t)},100)}let B=null,k=null;function mt(t){if(typeof Chart>"u")return;Chart.defaults.color="rgba(255,255,255,0.5)",Chart.defaults.borderColor="rgba(255,255,255,0.06)";const e=document.getElementById("chart-trend");if(e){B&&B.destroy();const a=Object.keys(t.dailyTrend||{}).sort(),s=a.map(o=>(t.dailyTrend||{})[o]||0);B=new Chart(e,{type:"line",data:{labels:a.map(o=>o.slice(5)),datasets:[{label:"問答次數",data:s,borderColor:"#818cf8",backgroundColor:"rgba(129,140,248,0.15)",fill:!0,tension:.4,pointRadius:4,pointBackgroundColor:"#818cf8",pointBorderWidth:0}]},options:{plugins:{legend:{display:!1}},scales:{x:{ticks:{font:{size:11}},grid:{color:"rgba(255,255,255,0.05)"}},y:{ticks:{font:{size:11},stepSize:1},grid:{color:"rgba(255,255,255,0.05)"},beginAtZero:!0}},maintainAspectRatio:!1}})}const n=document.getElementById("chart-pie");n&&(k&&k.destroy(),k=new Chart(n,{type:"doughnut",data:{labels:["登入用戶","訪客"],datasets:[{data:[t.authCount||0,t.anonCount||0],backgroundColor:["#818cf8","#f472b6"],borderWidth:0}]},options:{plugins:{legend:{position:"bottom",labels:{font:{size:11},padding:12}}},maintainAspectRatio:!1,cutout:"62%"}}))}let y=[];function j(t){y=t,S(t)}function S(t){const e=document.getElementById("record-count");if(e&&(e.textContent=`${t.length} 筆記錄`),!t||t.length===0){document.getElementById("records-content").innerHTML=`<div style="text-align:center;padding:60px;color:var(--muted)">
               <div style="font-size:40px;margin-bottom:12px">💬</div>
               <div>暫無對話記錄</div>
             </div>`;return}const n=t.map(a=>{var h;const s=!a.userEmail||a.userName==="訪客"||a.userName==="anonymous",o=s?"?":(((h=a.userName)==null?void 0:h[0])||"?").toUpperCase(),i=s?"anon":"auth",d=a.time?new Date(a.time).toLocaleString("zh-TW",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"-",c=m(a.user).slice(0,120)+(a.user.length>120?"…":""),g=m(a.ai).slice(0,160)+(a.ai.length>160?"…":"");return`<div class="chat-card">
          <div class="chat-card-header">
            <div class="user-avatar ${i}">${o}</div>
            <div class="user-meta">
              <div class="user-name">${m(a.userName||"訪客")}</div>
              <div class="user-email">${m(a.userEmail||"匿名使用者")}</div>
            </div>
            <div class="time-chip">${d}</div>
            <button class="chat-delete-btn"
              data-uid="${m(a.uid)}"
              data-time="${m(a.time||"")}"
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
            ${c}
          </div>
          <div class="chat-a">
            <div class="a-label">AI 答</div>
            ${g}
          </div>
        </div>`}).join("");document.getElementById("records-content").innerHTML=`<div class="chat-cards">${n}</div>`}function $(){var s,o,i;const t=(((s=document.getElementById("search-input"))==null?void 0:s.value)||"").trim().toLowerCase(),e=(o=document.getElementById("date-from"))==null?void 0:o.value,n=(i=document.getElementById("date-to"))==null?void 0:i.value;let a=y;e&&(a=a.filter(d=>d.time&&String(d.time).slice(0,10)>=e)),n&&(a=a.filter(d=>d.time&&String(d.time).slice(0,10)<=n)),t&&(a=a.filter(d=>(d.userName||"").toLowerCase().includes(t)||(d.userEmail||"").toLowerCase().includes(t)||(d.user||"").toLowerCase().includes(t)||(d.ai||"").toLowerCase().includes(t))),S(a)}document.getElementById("search-input").addEventListener("input",$);document.addEventListener("change",t=>{(t.target.id==="date-from"||t.target.id==="date-to")&&$()});document.addEventListener("click",t=>{if(t.target.id==="date-clear-btn"){const e=document.getElementById("date-from"),n=document.getElementById("date-to");e&&(e.value=""),n&&(n.value=""),$()}});document.getElementById("records-content").addEventListener("click",function(t){const e=t.target.closest(".chat-delete-btn");if(!e)return;const n=e.dataset.uid,a=e.dataset.time;customConfirm({icon:"🗑️",title:"刪除對話記錄",message:"確定要永久刪除此筆對話吗？此操作無法復原。",confirmText:"刪除",confirmGradient:"linear-gradient(135deg,#f43f5e,#be123c)",onConfirm:async()=>{e.disabled=!0;const s=e.querySelector("svg");s&&(s.style.opacity="0.3");try{await st({uid:n,time:a}),y=y.filter(o=>!(o.uid===n&&o.time===a)),S(y)}catch(o){alert("刪除失敗："+o.message),e.disabled=!1,s&&(s.style.opacity="1")}}})});function gt(){if(y.length===0)return;const t="時間,使用者,Email,問題,AI 回答",e=y.map(i=>[i.time?new Date(i.time).toLocaleString("zh-TW"):"",`"${(i.userName||"").replace(/"/g,'""')}"`,`"${(i.userEmail||"").replace(/"/g,'""')}"`,`"${(i.user||"").replace(/"/g,'""')}"`,`"${(i.ai||"").replace(/"/g,'""')}"`].join(",")),n="\uFEFF"+[t,...e].join(`
`),a=new Blob([n],{type:"text/csv;charset=utf-8;"}),s=URL.createObjectURL(a),o=document.createElement("a");o.href=s,o.download=`對話記錄_${new Date().toLocaleDateString("zh-TW").replace(/\//g,"-")}.csv`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(s)}const M=document.getElementById("export-csv-btn");M&&M.addEventListener("click",gt);const v=document.getElementById("kb-editor"),u=document.getElementById("kb-status"),w=document.getElementById("kb-char-count"),yt=document.getElementById("kb-line-count");let E=!1;function T(){const t=v.value;w.textContent=t.length.toLocaleString(),yt.textContent=t?t.split(`
`).length.toLocaleString():"0",t.length>4500?w.style.color="#f87171":t.length>3e3?w.style.color="#fbbf24":w.style.color="#7ee787"}async function U(){v.placeholder="載入中…",u.textContent="";try{const t=await et();v.value=t.data.content||"",T()}catch(t){u.textContent="❌ 載入失敗："+t.message}}v.addEventListener("input",()=>{T(),E=!0;const t=document.getElementById("kb-save-btn");t&&(t.style.boxShadow="0 0 0 3px rgba(251,191,36,0.45)")});document.getElementById("kb-save-btn").addEventListener("click",async()=>{u.textContent="⏳ 儲存中…";try{await nt({content:v.value}),E=!1,u.textContent="✅ 已儲存！AI 將立即使用新版本。",u.style.color="#34d399";const t=document.getElementById("kb-save-btn");t&&(t.style.boxShadow=""),setTimeout(()=>{u.textContent="",u.style.color=""},4e3),W()}catch(t){u.textContent="❌ 儲存失敗："+t.message,u.style.color="#f43f5e"}});document.getElementById("kb-reload-btn").addEventListener("click",U);async function W(){const t=document.getElementById("kb-history-list");if(t){t.innerHTML='<p style="color:var(--muted);padding:8px">載入中…</p>';try{const n=(await ot()).data.versions||[];if(n.length===0){t.innerHTML='<p style="color:var(--muted);padding:8px">尚無版本歷史</p>';return}t.innerHTML=n.map(a=>{const s=a.savedAt?new Date(a.savedAt).toLocaleString("zh-TW"):a.id,o=a.charCount?`${a.charCount.toLocaleString()} 字`:"",i=a.savedBy?`由 ${a.savedBy}`:"";return`<div class="kb-history-item">
              <div class="kb-history-meta">
                <span class="kb-history-time"> ${s}</span>
                <span class="kb-history-chars">${o}</span>
                <span class="kb-history-by">${i}</span>
              </div>
              <button class="btn-restore" data-vid="${a.id}">⏪ 回復此版本</button>
            </div>`}).join(""),t.querySelectorAll(".btn-restore").forEach(a=>{a.addEventListener("click",()=>{customConfirm({icon:"🗂️",title:"回復知識庫版本",message:"確定要用這個旧版本覆蓋現有知識庫嗎？",confirmText:"回復",confirmGradient:"linear-gradient(135deg,#7c3aed,#4f46e5)",onConfirm:async()=>{a.disabled=!0,a.textContent="回復中…";try{const s=await it({versionId:a.dataset.vid});v.value=s.data.content||"",T(),E=!1,u.textContent="✅ 版本已回復，請確認內容後再儲存。",u.style.color="#34d399"}catch(s){alert("回復失敗："+s.message),a.disabled=!1,a.textContent="⏪ 回復此版本"}}})})})}catch(e){t.innerHTML=`<p style="color:#f43f5e">載入失敗：${e.message}</p>`}}}document.addEventListener("click",t=>{if(t.target.id==="kb-history-toggle"){const e=document.getElementById("kb-history-list");if(!e)return;const n=e.style.display==="none"||!e.style.display;e.style.display=n?"block":"none",t.target.textContent=n?"📁 收起版本歷史":"🗂️ 查看版本歷史",n&&W()}});document.getElementById("set-admin-btn").addEventListener("click",async()=>{const t=document.getElementById("admin-email-input").value.trim(),e=document.getElementById("set-admin-msg");if(!t){e.textContent="請輸入 Email",e.style.color="#f43f5e";return}e.textContent="⏳ 設定中…",e.style.color="var(--muted)";try{const n=await at({email:t});e.textContent="✅ "+n.data.message,e.style.color="#34d399",document.getElementById("admin-email-input").value=""}catch(n){e.textContent="❌ "+n.message,e.style.color="#f43f5e"}});function m(t){return String(t||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const H=document.getElementById("stats-refresh-btn");H&&H.addEventListener("click",()=>D(L));let p=[];async function ft(){if(document.getElementById("alert-tags"))try{p=(await dt()).data.keywords||[],K()}catch(e){console.warn("告警關鍵字載入失敗:",e.message)}}function K(){const t=document.getElementById("alert-tags");t&&(t.innerHTML=p.map((e,n)=>`<span class="alert-tag">${m(e)}
          <button class="alert-tag-del" data-idx="${n}" title="移除">×</button>
        </span>`).join(""),t.querySelectorAll(".alert-tag-del").forEach(e=>{e.addEventListener("click",()=>{p.splice(Number(e.dataset.idx),1),K()})}))}async function vt(){const t=document.getElementById("alert-save-msg");t&&(t.textContent="⏳ 儲存中…",t.style.color="var(--muted)");try{await ct({keywords:p}),t&&(t.textContent="✅ 已儲存",t.style.color="#34d399"),setTimeout(()=>{t&&(t.textContent="")},3e3)}catch(e){t&&(t.textContent="❌ "+e.message,t.style.color="#f43f5e")}}document.addEventListener("click",async t=>{var n,a;const e=t.target.closest(".nav-item");if(((n=e==null?void 0:e.dataset)==null?void 0:n.page)==="settings"&&setTimeout(ft,100),t.target.id==="alert-add-btn"){const s=document.getElementById("alert-input"),o=((s==null?void 0:s.value)||"").trim();o&&!p.includes(o)&&p.push(o),s&&o&&(s.value="",K())}t.target.id==="alert-save-btn"&&vt(),((a=e==null?void 0:e.dataset)==null?void 0:a.page)==="ai"&&setTimeout(pt,100),t.target.id==="ai-save-btn"&&ht(),t.target.id==="ai-test-btn"&&bt()});document.addEventListener("keydown",t=>{var e;t.target.id==="alert-input"&&t.key==="Enter"&&((e=document.getElementById("alert-add-btn"))==null||e.click())});async function pt(){const t=document.getElementById("ai-settings-form");if(t){t.style.opacity="0.5";try{const{data:e}=await lt(),n=document.getElementById("ai-model"),a=document.getElementById("ai-temp"),s=document.getElementById("ai-temp-val"),o=document.getElementById("ai-max-tokens");n&&(n.value=e.model||"gemini-2.5-flash-lite"),a&&(a.value=e.temperature??.7,s&&(s.textContent=(e.temperature??.7).toFixed(2))),o&&(o.value=e.maxTokens||1024)}catch(e){console.warn("讀取 AI 設定失敗",e.message)}finally{t.style.opacity="1"}}}async function ht(){var s,o,i;const t=document.getElementById("ai-save-msg"),e=(s=document.getElementById("ai-model"))==null?void 0:s.value,n=parseFloat(((o=document.getElementById("ai-temp"))==null?void 0:o.value)||"0.7"),a=parseInt(((i=document.getElementById("ai-max-tokens"))==null?void 0:i.value)||"1024",10);t&&(t.textContent="⏳ 儲存中…",t.style.color="var(--muted)");try{await rt({model:e,temperature:n,maxTokens:a}),t&&(t.textContent="✅ 已儲存，下次問答即生效",t.style.color="#34d399"),setTimeout(()=>{t&&(t.textContent="")},4e3)}catch(d){t&&(t.textContent="❌ "+d.message,t.style.color="#f43f5e")}}async function bt(){var s;const t=document.getElementById("ai-test-input"),e=document.getElementById("ai-test-output"),n=document.getElementById("ai-test-btn"),a=(s=t==null?void 0:t.value)==null?void 0:s.trim();if(!a){e&&(e.textContent="請輸入測試問題。");return}e&&(e.textContent="⏳ AI 回應中…"),n&&(n.disabled=!0);try{const o=l(r,"askGemini"),{data:i}=await o({prompt:a,knowledge:""});e&&(e.textContent=i.text||"（無回應）")}catch(o){e&&(e.textContent="❌ "+(o.message||"呼叫失敗"))}finally{n&&(n.disabled=!1)}}document.addEventListener("input",t=>{if(t.target.id==="ai-temp"){const e=parseFloat(t.target.value).toFixed(2),n=document.getElementById("ai-temp-val");n&&(n.textContent=e)}});
