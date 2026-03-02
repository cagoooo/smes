import{L as Ne,_ as re,C as se,r as Ke,E as Oe,n as ye,p as Fe,D,e as He,b as ve,g as qe,q as ze,u as Ue,t as We,h as je,j as Ge,k as Ve,l as u,o as Xe,m as H,s as Ye,G as Je}from"./index.esm2017-qAtVxLfM.js";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q=new Map,be={activated:!1,tokenObservers:[]},Ze={initialized:!1,enabled:!1};function l(e){return q.get(e)||Object.assign({},be)}function Qe(e,t){return q.set(e,t),q.get(e)}function M(){return Ze}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee="https://content-firebaseappcheck.googleapis.com/v1",et="exchangeRecaptchaV3Token",tt="exchangeDebugToken",ae={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},nt=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,n,o,r,s){if(this.operation=t,this.retryPolicy=n,this.getWaitDuration=o,this.lowerBound=r,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=r,r>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(t){this.stop();try{this.pending=new D,this.pending.promise.catch(n=>{}),await rt(this.getNextRun(t)),this.pending.resolve(),await this.pending.promise,this.pending=new D,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(t){if(t)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function rt(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},m=new Oe("appCheck","AppCheck",st);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e=!1){var t;return e?(t=self.grecaptcha)===null||t===void 0?void 0:t.enterprise:self.grecaptcha}function j(e){if(!l(e).activated)throw m.create("use-before-activation",{appName:e.name})}function ke(e){const t=Math.round(e/1e3),n=Math.floor(t/(3600*24)),o=Math.floor((t-n*3600*24)/3600),r=Math.floor((t-n*3600*24-o*3600)/60),s=t-n*3600*24-o*3600-r*60;let a="";return n&&(a+=R(n)+"d:"),o&&(a+=R(o)+"h:"),a+=R(r)+"m:"+R(s)+"s",a}function R(e){return e===0?"00":e>=10?e.toString():"0"+e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G({url:e,body:t},n){const o={"Content-Type":"application/json"},r=n.getImmediate({optional:!0});if(r){const f=await r.getHeartbeatsHeader();f&&(o["X-Firebase-Client"]=f)}const s={method:"POST",body:JSON.stringify(t),headers:o};let a;try{a=await fetch(e,s)}catch(f){throw m.create("fetch-network-error",{originalErrorMessage:f==null?void 0:f.message})}if(a.status!==200)throw m.create("fetch-status-error",{httpStatus:a.status});let c;try{c=await a.json()}catch(f){throw m.create("fetch-parse-error",{originalErrorMessage:f==null?void 0:f.message})}const i=c.ttl.match(/^([\d.]+)(s)$/);if(!i||!i[2]||isNaN(Number(i[1])))throw m.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${c.ttl}`});const d=Number(i[1])*1e3,v=Date.now();return{token:c.token,expireTimeMillis:v+d,issuedAtTimeMillis:v}}function at(e,t){const{projectId:n,appId:o,apiKey:r}=e.options;return{url:`${Ee}/projects/${n}/apps/${o}:${et}?key=${r}`,body:{recaptcha_v3_token:t}}}function we(e,t){const{projectId:n,appId:o,apiKey:r}=e.options;return{url:`${Ee}/projects/${n}/apps/${o}:${tt}?key=${r}`,body:{debug_token:t}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="firebase-app-check-database",ct=1,x="firebase-app-check-store",Ce="debug-token";let P=null;function Te(){return P||(P=new Promise((e,t)=>{try{const n=indexedDB.open(it,ct);n.onsuccess=o=>{e(o.target.result)},n.onerror=o=>{var r;t(m.create("storage-open",{originalErrorMessage:(r=o.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=o=>{const r=o.target.result;switch(o.oldVersion){case 0:r.createObjectStore(x,{keyPath:"compositeKey"})}}}catch(n){t(m.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),P)}function lt(e){return Ie(xe(e))}function dt(e,t){return Ae(xe(e),t)}function ut(e){return Ae(Ce,e)}function gt(){return Ie(Ce)}async function Ae(e,t){const o=(await Te()).transaction(x,"readwrite"),s=o.objectStore(x).put({compositeKey:e,value:t});return new Promise((a,c)=>{s.onsuccess=i=>{a()},o.onerror=i=>{var d;c(m.create("storage-set",{originalErrorMessage:(d=i.target.error)===null||d===void 0?void 0:d.message}))}})}async function Ie(e){const n=(await Te()).transaction(x,"readonly"),r=n.objectStore(x).get(e);return new Promise((s,a)=>{r.onsuccess=c=>{const i=c.target.result;s(i?i.value:void 0)},n.onerror=c=>{var i;a(m.create("storage-get",{originalErrorMessage:(i=c.target.error)===null||i===void 0?void 0:i.message}))}})}function xe(e){return`${e.options.appId}-${e.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=new Ne("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(e){if(ye()){let t;try{t=await lt(e)}catch(n){B.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return t}}function K(e,t){return ye()?dt(e,t).catch(n=>{B.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function ft(){let e;try{e=await gt()}catch{}if(e)return e;{const t=Ue();return ut(t).catch(n=>B.warn(`Failed to persist debug token to IndexedDB. Error: ${n}`)),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(){return M().enabled}async function X(){const e=M();if(e.enabled&&e.token)return e.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function ht(){const e=ze(),t=M();if(t.initialized=!0,typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&e.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;t.enabled=!0;const n=new D;t.token=n,typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(e.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(ft())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt={error:"UNKNOWN_ERROR"};function yt(e){return Fe.encodeString(JSON.stringify(e),!1)}async function z(e,t=!1){const n=e.app;j(n);const o=l(n);let r=o.token,s;if(r&&!E(r)&&(o.token=void 0,r=void 0),!r){const i=await o.cachedTokenPromise;i&&(E(i)?r=i:await K(n,void 0))}if(!t&&r&&E(r))return{token:r.token};let a=!1;if(V()){o.exchangeTokenPromise||(o.exchangeTokenPromise=G(we(n,await X()),e.heartbeatServiceProvider).finally(()=>{o.exchangeTokenPromise=void 0}),a=!0);const i=await o.exchangeTokenPromise;return await K(n,i),o.token=i,{token:i.token}}try{o.exchangeTokenPromise||(o.exchangeTokenPromise=o.provider.getToken().finally(()=>{o.exchangeTokenPromise=void 0}),a=!0),r=await l(n).exchangeTokenPromise}catch(i){i.code==="appCheck/throttled"?B.warn(i.message):B.error(i),s=i}let c;return r?s?E(r)?c={token:r.token,internalError:s}:c=le(s):(c={token:r.token},o.token=r,await K(n,r)):c=le(s),a&&Le(n,c),c}async function vt(e){const t=e.app;j(t);const{provider:n}=l(t);if(V()){const o=await X(),{token:r}=await G(we(t,o),e.heartbeatServiceProvider);return{token:r}}else{const{token:o}=await n.getToken();return{token:o}}}function Be(e,t,n,o){const{app:r}=e,s=l(r),a={next:n,error:o,type:t};if(s.tokenObservers=[...s.tokenObservers,a],s.token&&E(s.token)){const c=s.token;Promise.resolve().then(()=>{n({token:c.token}),ce(e)}).catch(()=>{})}s.cachedTokenPromise.then(()=>ce(e))}function Se(e,t){const n=l(e),o=n.tokenObservers.filter(r=>r.next!==t);o.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=o}function ce(e){const{app:t}=e,n=l(t);let o=n.tokenRefresher;o||(o=bt(e),n.tokenRefresher=o),!o.isRunning()&&n.isTokenAutoRefreshEnabled&&o.start()}function bt(e){const{app:t}=e;return new ot(async()=>{const n=l(t);let o;if(n.token?o=await z(e,!0):o=await z(e),o.error)throw o.error;if(o.internalError)throw o.internalError},()=>!0,()=>{const n=l(t);if(n.token){let o=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return o=Math.min(o,r),Math.max(0,o-Date.now())}else return 0},ae.RETRIAL_MIN_WAIT,ae.RETRIAL_MAX_WAIT)}function Le(e,t){const n=l(e).tokenObservers;for(const o of n)try{o.type==="EXTERNAL"&&t.error!=null?o.error(t.error):o.next(t)}catch{}}function E(e){return e.expireTimeMillis-Date.now()>0}function le(e){return{token:yt(pt),error:e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,n){this.app=t,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:t}=l(this.app);for(const n of t)Se(this.app,n.next);return Promise.resolve()}}function kt(e,t){return new Et(e,t)}function wt(e){return{getToken:t=>z(e,t),getLimitedUseToken:()=>vt(e),addTokenListener:t=>Be(e,"INTERNAL",t),removeTokenListener:t=>Se(e.app,t)}}const Ct="@firebase/app-check",Tt="0.8.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="https://www.google.com/recaptcha/api.js";function It(e,t){const n=new D,o=l(e);o.reCAPTCHAState={initialized:n};const r=xt(e),s=ie(!1);return s?de(e,t,s,r,n):Lt(()=>{const a=ie(!1);if(!a)throw new Error("no recaptcha");de(e,t,a,r,n)}),n.promise}function de(e,t,n,o,r){n.ready(()=>{St(e,t,n,o),r.resolve(n)})}function xt(e){const t=`fire_app_check_${e.name}`,n=document.createElement("div");return n.id=t,n.style.display="none",document.body.appendChild(n),t}async function Bt(e){j(e);const n=await l(e).reCAPTCHAState.initialized.promise;return new Promise((o,r)=>{const s=l(e).reCAPTCHAState;n.ready(()=>{o(n.execute(s.widgetId,{action:"fire_app_check"}))})})}function St(e,t,n,o){const r=n.render(o,{sitekey:t,size:"invisible",callback:()=>{l(e).reCAPTCHAState.succeeded=!0},"error-callback":()=>{l(e).reCAPTCHAState.succeeded=!1}}),s=l(e);s.reCAPTCHAState=Object.assign(Object.assign({},s.reCAPTCHAState),{widgetId:r})}function Lt(e){const t=document.createElement("script");t.src=At,t.onload=e,document.head.appendChild(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this._siteKey=t,this._throttleData=null}async getToken(){var t,n,o;Rt(this._throttleData);const r=await Bt(this._app).catch(a=>{throw m.create("recaptcha-error")});if(!(!((t=l(this._app).reCAPTCHAState)===null||t===void 0)&&t.succeeded))throw m.create("recaptcha-error");let s;try{s=await G(at(this._app,r),this._heartbeatServiceProvider)}catch(a){throw!((n=a.code)===null||n===void 0)&&n.includes("fetch-status-error")?(this._throttleData=_t(Number((o=a.customData)===null||o===void 0?void 0:o.httpStatus),this._throttleData),m.create("throttled",{time:ke(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):a}return this._throttleData=null,s}initialize(t){this._app=t,this._heartbeatServiceProvider=ve(t,"heartbeat"),It(t,this._siteKey).catch(()=>{})}isEqual(t){return t instanceof Y?this._siteKey===t._siteKey:!1}}function _t(e,t){if(e===404||e===403)return{backoffCount:1,allowRequestsAfter:Date.now()+nt,httpStatus:e};{const n=t?t.backoffCount:0,o=We(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+o,httpStatus:e}}}function Rt(e){if(e&&Date.now()-e.allowRequestsAfter<=0)throw m.create("throttled",{time:ke(e.allowRequestsAfter-Date.now()),httpStatus:e.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(e=qe(),t){e=He(e);const n=ve(e,"app-check");if(M().initialized||ht(),V()&&X().then(r=>console.log(`App Check debug token: ${r}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(s.isTokenAutoRefreshEnabled===t.isTokenAutoRefreshEnabled&&s.provider.isEqual(t.provider))return r;throw m.create("already-initialized",{appName:e.name})}const o=n.initialize({options:t});return $t(e,t.provider,t.isTokenAutoRefreshEnabled),l(e).isTokenAutoRefreshEnabled&&Be(o,"INTERNAL",()=>{}),o}function $t(e,t,n){const o=Qe(e,Object.assign({},be));o.activated=!0,o.provider=t,o.cachedTokenPromise=mt(e).then(r=>(r&&E(r)&&(o.token=r,Le(e,{token:r.token})),r)),o.isTokenAutoRefreshEnabled=n===void 0?e.automaticDataCollectionEnabled:n,o.provider.initialize(e)}const Dt="app-check",ue="app-check-internal";function Mt(){re(new se(Dt,e=>{const t=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat");return kt(t,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider(ue).initialize()})),re(new se(ue,e=>{const t=e.getProvider("app-check").getImmediate();return wt(t)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ke(Ct,Tt)}Mt();const Nt={apiKey:"AIzaSyDcMhKXCKS5yu4J07Lep5hp8IP8a_KqK5E",authDomain:"smes-e1dc3.firebaseapp.com",projectId:"smes-e1dc3",storageBucket:"smes-e1dc3.firebasestorage.app",messagingSenderId:"626362737802",appId:"1:626362737802:web:5193274a7d9b4963c97973"},J=je(Nt),S=Ge(J),g=Ve(J,"asia-northeast1"),Kt="6LdYDHwsAAAAAHXdqg87Sam-xlGf-tgouW9gU6T_";location.hostname!=="localhost"&&Pt(J,{provider:new Y(Kt),isTokenAutoRefreshEnabled:!0});const _e=u(g,"getAdminStats");u(g,"getKnowledgeBase");u(g,"updateKnowledgeBase");const Ot=u(g,"setAdmin"),Ft=u(g,"deleteUserChat");u(g,"getKnowledgeHistory");u(g,"restoreKnowledgeVersion");const Ht=u(g,"getAlertKeywords"),qt=u(g,"setAlertKeywords"),zt=u(g,"getAiSettings"),Ut=u(g,"setAiSettings");let k=null;Xe(S,async e=>{if(!e){ge();return}document.getElementById("login-error").textContent="⏳ 驗證管理員身份中…",document.getElementById("login-error").style.color="#94a3b8";try{await e.getIdToken(!0),k=(await _e()).data,me(e),Pe(k),$e(k.recentChats)}catch(t){const n=(t==null?void 0:t.code)||"";n==="functions/permission-denied"||n==="functions/unauthenticated"?(await H(S),document.getElementById("login-error").textContent="⛔ 此帳號無管理員權限，請聯繫阿凱老師。",document.getElementById("login-error").style.color="#f43f5e",ge()):(console.warn("Admin auth check error:",t.message),me(e))}});document.getElementById("login-btn").addEventListener("click",async()=>{try{await Ye(S,new Je)}catch(e){document.getElementById("login-error").textContent="登入失敗："+e.message}});function Wt(){typeof customConfirm=="function"?customConfirm({icon:"👋",title:"確認登出",message:"確定要登出管理員後台嗎？",confirmText:"登出",confirmGradient:"linear-gradient(135deg,#4f46e5,#7c3aed)",onConfirm:()=>H(S)}):H(S)}document.getElementById("logout-link").addEventListener("click",Wt);function ge(){document.getElementById("login-screen").style.display="flex"}function me(e){document.getElementById("login-screen").style.display="none",document.getElementById("admin-email").textContent=e.email}document.querySelectorAll(".nav-item").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".nav-item").forEach(n=>n.classList.remove("active")),document.querySelectorAll(".page").forEach(n=>n.classList.remove("active")),e.classList.add("active");const t="page-"+e.dataset.page;document.getElementById(t).classList.add("active"),e.dataset.page==="knowledge"&&!document.getElementById("kb-editor").value&&te(),L&&e.dataset.page!=="knowledge"&&typeof customConfirm=="function"&&customConfirm({icon:"⚠️",title:"有未儲存的變更",message:"知識庫尚未儲存，確定要離開吗？",confirmText:"離開不儲存",confirmGradient:"linear-gradient(135deg,#f43f5e,#be123c)",onConfirm:()=>{L=!1}})})});let U=null,W=7;async function Re(e=W){W=e,document.querySelectorAll(".days-btn").forEach(n=>{n.classList.toggle("active",Number(n.dataset.days)===e)});const t=document.getElementById("stats-refresh-btn");t&&(t.disabled=!0,t.style.opacity="0.5");try{k=(await _e({days:e})).data,U=new Date,Pe(k,e),$e(k.recentChats)}catch(n){document.getElementById("stats-content").innerHTML=`<p style="color:#f43f5e">錯誤：${n.message}</p>`}finally{t&&(t.disabled=!1,t.style.opacity="1")}}function Pe(e,t=7){var c;const n=((c=e.topKeywords[0])==null?void 0:c.count)||1,o=e.topKeywords.map((i,d)=>{const v=Math.round(i.count/n*100);return`<div class="keyword-row">
          <span class="keyword-rank">${d+1}</span>
          <span class="keyword-name" title="${y(i.word)}">${y(i.word)}</span>
          <div class="keyword-bar-wrap">
            <div class="keyword-bar-fill" style="width:0%" data-pct="${v}"></div>
          </div>
          <span class="keyword-count">${i.count}</span>
        </div>`}).join(""),r=new Date().toLocaleDateString("zh-TW",{timeZone:"Asia/Taipei"}),s=U?U.toLocaleTimeString("zh-TW",{hour:"2-digit",minute:"2-digit",second:"2-digit"}):"--:--",a=t===0?"近30 天":`近 ${t} 天`;document.getElementById("stats-content").innerHTML=`
    <div class="stats-header-bar">
      <span class="stats-update-time">⏱️ 最後更新：${s}</span>
      <div class="days-toggle">
        <button class="days-btn${t===7?" active":""}" data-days="7">7 天</button>
        <button class="days-btn${t===14?" active":""}" data-days="14">14 天</button>
        <button class="days-btn${t===30?" active":""}" data-days="30">30 天</button>
      </div>
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
        <div class="label">今日活踴</div>
        <div class="val" data-count="${e.todayActiveUsers}">0</div>
        <div class="stat-sub">${r}</div>
      </div>
    </div>
    <div class="chart-row">
      <div class="chart-card">
        <h4>📈 ${a}問答趨勢</h4>
        <canvas id="chart-trend"></canvas>
      </div>
      <div class="chart-card">
        <h4>🧩 使用者類型</h4>
        <canvas id="chart-pie"></canvas>
      </div>
    </div>
    <div class="keyword-section">
      <h3>🏆 熱門關鍵字 TOP ${e.topKeywords.length}</h3>
      <div class="keyword-bars">${o}</div>
    </div>`,document.querySelectorAll(".days-btn").forEach(i=>{i.addEventListener("click",()=>Re(Number(i.dataset.days)))}),document.querySelectorAll(".val[data-count]").forEach(i=>{const d=parseInt(i.dataset.count,10);if(!d){i.textContent="0";return}const f=Math.ceil(d/(900/16));let _=0;const Me=setInterval(()=>{_=Math.min(_+f,d),i.textContent=_.toLocaleString(),_>=d&&clearInterval(Me)},16)}),setTimeout(()=>{document.querySelectorAll(".keyword-bar-fill").forEach(i=>{i.style.width=i.dataset.pct+"%"}),jt(e)},100)}let O=null,F=null;function jt(e){if(typeof Chart>"u")return;Chart.defaults.color="rgba(255,255,255,0.5)",Chart.defaults.borderColor="rgba(255,255,255,0.06)";const t=document.getElementById("chart-trend");if(t){O&&O.destroy();const o=Object.keys(e.dailyTrend||{}).sort(),r=o.map(s=>(e.dailyTrend||{})[s]||0);O=new Chart(t,{type:"line",data:{labels:o.map(s=>s.slice(5)),datasets:[{label:"問答次數",data:r,borderColor:"#818cf8",backgroundColor:"rgba(129,140,248,0.15)",fill:!0,tension:.4,pointRadius:4,pointBackgroundColor:"#818cf8",pointBorderWidth:0}]},options:{plugins:{legend:{display:!1}},scales:{x:{ticks:{font:{size:11}},grid:{color:"rgba(255,255,255,0.05)"}},y:{ticks:{font:{size:11},stepSize:1},grid:{color:"rgba(255,255,255,0.05)"},beginAtZero:!0}},maintainAspectRatio:!1}})}const n=document.getElementById("chart-pie");n&&(F&&F.destroy(),F=new Chart(n,{type:"doughnut",data:{labels:["登入用戶","訪客"],datasets:[{data:[e.authCount||0,e.anonCount||0],backgroundColor:["#818cf8","#f472b6"],borderWidth:0}]},options:{plugins:{legend:{position:"bottom",labels:{font:{size:11},padding:12}}},maintainAspectRatio:!1,cutout:"62%"}}))}let b=[];function $e(e){b=e,Z(e)}function Z(e){const t=document.getElementById("record-count");if(t&&(t.textContent=`${e.length} 筆記錄`),!e||e.length===0){document.getElementById("records-content").innerHTML=`<div style="text-align:center;padding:60px;color:var(--muted)">
               <div style="font-size:40px;margin-bottom:12px">💬</div>
               <div>暫無對話記錄</div>
             </div>`;return}const n=e.map(o=>{var v;const r=!o.userEmail||o.userName==="訪客"||o.userName==="anonymous",s=r?"?":(((v=o.userName)==null?void 0:v[0])||"?").toUpperCase(),a=r?"anon":"auth",c=o.time?new Date(o.time).toLocaleString("zh-TW",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"-",i=y(o.user).slice(0,120)+(o.user.length>120?"…":""),d=y(o.ai).slice(0,160)+(o.ai.length>160?"…":"");return`<div class="chat-card">
          <div class="chat-card-header">
            <div class="user-avatar ${a}">${s}</div>
            <div class="user-meta">
              <div class="user-name">${y(o.userName||"訪客")}</div>
              <div class="user-email">${y(o.userEmail||"匿名使用者")}</div>
            </div>
            <div class="time-chip">${c}</div>
            <button class="chat-delete-btn"
              data-uid="${y(o.uid)}"
              data-time="${y(o.time||"")}"
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
            ${d}
          </div>
        </div>`}).join("");document.getElementById("records-content").innerHTML=`<div class="chat-cards">${n}</div>`}function Q(){var r,s,a;const e=(((r=document.getElementById("search-input"))==null?void 0:r.value)||"").trim().toLowerCase(),t=(s=document.getElementById("date-from"))==null?void 0:s.value,n=(a=document.getElementById("date-to"))==null?void 0:a.value;let o=b;t&&(o=o.filter(c=>c.time&&String(c.time).slice(0,10)>=t)),n&&(o=o.filter(c=>c.time&&String(c.time).slice(0,10)<=n)),e&&(o=o.filter(c=>(c.userName||"").toLowerCase().includes(e)||(c.userEmail||"").toLowerCase().includes(e)||(c.user||"").toLowerCase().includes(e)||(c.ai||"").toLowerCase().includes(e))),Z(o)}document.getElementById("search-input").addEventListener("input",Q);document.addEventListener("change",e=>{(e.target.id==="date-from"||e.target.id==="date-to")&&Q()});document.addEventListener("click",e=>{if(e.target.id==="date-clear-btn"){const t=document.getElementById("date-from"),n=document.getElementById("date-to");t&&(t.value=""),n&&(n.value=""),Q()}});document.getElementById("records-content").addEventListener("click",function(e){const t=e.target.closest(".chat-delete-btn");if(!t)return;const n=t.dataset.uid,o=t.dataset.time;customConfirm({icon:"🗑️",title:"刪除對話記錄",message:"確定要永久刪除此筆對話吗？此操作無法復原。",confirmText:"刪除",confirmGradient:"linear-gradient(135deg,#f43f5e,#be123c)",onConfirm:async()=>{t.disabled=!0;const r=t.querySelector("svg");r&&(r.style.opacity="0.3");try{await Ft({uid:n,time:o}),b=b.filter(s=>!(s.uid===n&&s.time===o)),Z(b)}catch(s){alert("刪除失敗："+s.message),t.disabled=!1,r&&(r.style.opacity="1")}}})});function Gt(){if(b.length===0)return;const e="時間,使用者,Email,問題,AI 回答",t=b.map(a=>[a.time?new Date(a.time).toLocaleString("zh-TW"):"",`"${(a.userName||"").replace(/"/g,'""')}"`,`"${(a.userEmail||"").replace(/"/g,'""')}"`,`"${(a.user||"").replace(/"/g,'""')}"`,`"${(a.ai||"").replace(/"/g,'""')}"`].join(",")),n="\uFEFF"+[e,...t].join(`
`),o=new Blob([n],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(o),s=document.createElement("a");s.href=r,s.download=`對話記錄_${new Date().toLocaleDateString("zh-TW").replace(/\//g,"-")}.csv`,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(r)}const fe=document.getElementById("export-csv-btn");fe&&fe.addEventListener("click",Gt);const C=document.getElementById("kb-editor"),h=document.getElementById("kb-status"),$=document.getElementById("kb-char-count"),Vt=document.getElementById("kb-line-count");let L=!1;function ee(){const e=C.value;$.textContent=e.length.toLocaleString(),Vt.textContent=e?e.split(`
`).length.toLocaleString():"0",e.length>4500?$.style.color="#f87171":e.length>3e3?$.style.color="#fbbf24":$.style.color="#7ee787"}async function te(){C.placeholder="載入中…",h.textContent="";try{const t=await u(g,"getKnowledgeBase")();C.value=t.data.content||"",ee()}catch(e){h.textContent="❌ 載入失敗："+(e.message||e.code||"INTERNAL")}}C.addEventListener("input",()=>{ee(),L=!0;const e=document.getElementById("kb-save-btn");e&&(e.style.boxShadow="0 0 0 3px rgba(251,191,36,0.45)")});document.getElementById("kb-save-btn").addEventListener("click",async()=>{h.textContent="⏳ 儲存中…";try{await u(g,"updateKnowledgeBase")({content:C.value}),L=!1,h.textContent="✅ 已儲存！AI 將立即使用新版本。",h.style.color="#34d399";const t=document.getElementById("kb-save-btn");t&&(t.style.boxShadow=""),setTimeout(()=>{h.textContent="",h.style.color=""},4e3),De()}catch(e){h.textContent="❌ 儲存失敗："+e.message,h.style.color="#f43f5e"}});document.getElementById("kb-reload-btn").addEventListener("click",te);async function De(){const e=document.getElementById("kb-history-list");if(e){e.innerHTML='<p style="color:var(--muted);padding:8px">載入中…</p>';try{const o=(await u(g,"getKnowledgeHistory")()).data.versions||[];if(o.length===0){e.innerHTML='<p style="color:var(--muted);padding:8px">尚無版本歷史</p>';return}e.innerHTML=o.map(r=>{const s=r.savedAt?new Date(r.savedAt).toLocaleString("zh-TW"):r.id,a=r.charCount?`${r.charCount.toLocaleString()} 字`:"",c=r.savedBy?`由 ${r.savedBy}`:"";return`<div class="kb-history-item">
              <div class="kb-history-meta">
                <span class="kb-history-time"> ${s}</span>
                <span class="kb-history-chars">${a}</span>
                <span class="kb-history-by">${c}</span>
              </div>
              <button class="btn-restore" data-vid="${r.id}">⏪ 回復此版本</button>
            </div>`}).join(""),e.querySelectorAll(".btn-restore").forEach(r=>{r.addEventListener("click",()=>{customConfirm({icon:"🗂️",title:"回復知識庫版本",message:"確定要用這個旧版本覆蓋現有知識庫嗎？",confirmText:"回復",confirmGradient:"linear-gradient(135deg,#7c3aed,#4f46e5)",onConfirm:async()=>{r.disabled=!0,r.textContent="回復中…";try{const a=await u(g,"restoreKnowledgeVersion")({versionId:r.dataset.vid});C.value=a.data.content||"",ee(),L=!1,h.textContent="✅ 版本已回復，請確認內容後再儲存。",h.style.color="#34d399"}catch(s){alert("回復失敗："+s.message),r.disabled=!1,r.textContent="⏪ 回復此版本"}}})})})}catch(t){e.innerHTML=`<p style="color:#f43f5e">載入失敗：${t.message}</p>`}}}document.addEventListener("click",e=>{if(e.target.id==="kb-history-toggle"){const t=document.getElementById("kb-history-list");if(!t)return;const n=t.style.display==="none"||!t.style.display;t.style.display=n?"block":"none",e.target.textContent=n?"📁 收起版本歷史":"🗂️ 查看版本歷史",n&&De()}});document.getElementById("set-admin-btn").addEventListener("click",async()=>{const e=document.getElementById("admin-email-input").value.trim(),t=document.getElementById("set-admin-msg");if(!e){t.textContent="請輸入 Email",t.style.color="#f43f5e";return}t.textContent="⏳ 設定中…",t.style.color="var(--muted)";try{const n=await Ot({email:e});t.textContent="✅ "+n.data.message,t.style.color="#34d399",document.getElementById("admin-email-input").value=""}catch(n){t.textContent="❌ "+n.message,t.style.color="#f43f5e"}});function y(e){return String(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const he=document.getElementById("stats-refresh-btn");he&&he.addEventListener("click",()=>Re(W));let T=[];async function Xt(){if(document.getElementById("alert-tags"))try{T=(await Ht()).data.keywords||[],ne()}catch(t){console.warn("告警關鍵字載入失敗:",t.message)}}function ne(){const e=document.getElementById("alert-tags");e&&(e.innerHTML=T.map((t,n)=>`<span class="alert-tag">${y(t)}
          <button class="alert-tag-del" data-idx="${n}" title="移除">×</button>
        </span>`).join(""),e.querySelectorAll(".alert-tag-del").forEach(t=>{t.addEventListener("click",()=>{T.splice(Number(t.dataset.idx),1),ne()})}))}async function Yt(){const e=document.getElementById("alert-save-msg");e&&(e.textContent="⏳ 儲存中…",e.style.color="var(--muted)");try{await qt({keywords:T}),e&&(e.textContent="✅ 已儲存",e.style.color="#34d399"),setTimeout(()=>{e&&(e.textContent="")},3e3)}catch(t){e&&(e.textContent="❌ "+t.message,e.style.color="#f43f5e")}}document.addEventListener("click",async e=>{var n,o;const t=e.target.closest(".nav-item");if(((n=t==null?void 0:t.dataset)==null?void 0:n.page)==="settings"&&setTimeout(Xt,100),e.target.id==="alert-add-btn"){const r=document.getElementById("alert-input"),s=((r==null?void 0:r.value)||"").trim();s&&!T.includes(s)&&T.push(s),r&&s&&(r.value="",ne())}e.target.id==="alert-save-btn"&&Yt(),((o=t==null?void 0:t.dataset)==null?void 0:o.page)==="ai"&&setTimeout(Jt,100),e.target.id==="ai-save-btn"&&Zt(),e.target.id==="ai-test-btn"&&Qt()});document.addEventListener("keydown",e=>{var t;e.target.id==="alert-input"&&e.key==="Enter"&&((t=document.getElementById("alert-add-btn"))==null||t.click())});async function Jt(){const e=document.getElementById("ai-settings-form");if(e){e.style.opacity="0.5";try{const{data:t}=await zt(),n=document.getElementById("ai-model"),o=document.getElementById("ai-temp"),r=document.getElementById("ai-temp-val"),s=document.getElementById("ai-max-tokens");n&&(n.value=t.model||"gemini-2.5-flash-lite",oe(t.model||"gemini-2.5-flash-lite")),o&&(o.value=t.temperature??.7,r&&(r.textContent=(t.temperature??.7).toFixed(2))),s&&(s.value=t.maxTokens||1024)}catch(t){console.warn("讀取 AI 設定失敗",t.message)}finally{e.style.opacity="1"}}}async function Zt(){var r,s,a;const e=document.getElementById("ai-save-msg"),t=(r=document.getElementById("ai-model"))==null?void 0:r.value,n=parseFloat(((s=document.getElementById("ai-temp"))==null?void 0:s.value)||"0.7"),o=parseInt(((a=document.getElementById("ai-max-tokens"))==null?void 0:a.value)||"1024",10);e&&(e.textContent="⏳ 儲存中…",e.style.color="var(--muted)");try{await Ut({model:t,temperature:n,maxTokens:o}),e&&(e.textContent="✅ 已儲存，下次問答即生效",e.style.color="#34d399"),setTimeout(()=>{e&&(e.textContent="")},4e3)}catch(c){e&&(e.textContent="❌ "+c.message,e.style.color="#f43f5e")}}async function Qt(){var r;const e=document.getElementById("ai-test-input"),t=document.getElementById("ai-test-output"),n=document.getElementById("ai-test-btn"),o=(r=e==null?void 0:e.value)==null?void 0:r.trim();if(!o){t&&(t.textContent="請輸入測試問題。");return}t&&(t.textContent="⏳ AI 回應中…"),n&&(n.disabled=!0);try{const s=u(g,"askGemini"),{data:a}=await s({prompt:o,knowledge:""});t&&(t.textContent=a.text||"（無回應）",t.classList.add("has-response"))}catch(s){t&&(t.textContent="❌ "+(s.message||"呼叫失敗"))}finally{n&&(n.disabled=!1)}}document.addEventListener("input",e=>{if(e.target.id==="ai-temp"){const t=parseFloat(e.target.value).toFixed(2),n=document.getElementById("ai-temp-val");n&&(n.textContent=t)}});const pe=[{value:"gemini-2.5-flash-lite",icon:"⚡",label:"gemini-2.5-flash-lite",badge:"最快最省",badgeClass:"fastest"},{value:"gemini-2.5-flash",icon:"🚀",label:"gemini-2.5-flash",badge:"均衡推薦",badgeClass:"balanced"},{value:"gemini-2.5-pro",icon:"💎",label:"gemini-2.5-pro",badge:"最強效能",badgeClass:"powerful"}],p=document.getElementById("cs-model-trigger"),A=document.getElementById("cs-model-dropdown"),w=A==null?void 0:A.querySelectorAll(".cs-option"),I=document.getElementById("ai-model");function oe(e){const t=pe.find(o=>o.value===e)||pe[0];if(!p)return;p.querySelector(".cs-trigger-icon").textContent=t.icon,p.querySelector(".cs-trigger-label").textContent=t.label;const n=p.querySelector(".cs-trigger-badge");n.textContent=t.badge,n.className=`cs-trigger-badge ${t.badgeClass}`,w==null||w.forEach(o=>{o.classList.toggle("selected",o.dataset.value===e)}),I&&(I.value=e)}function N(e){!p||!A||(p.classList.toggle("open",e),A.classList.toggle("open",e),p.setAttribute("aria-expanded",e?"true":"false"))}p&&p.addEventListener("click",e=>{e.stopPropagation();const t=p.classList.contains("open");N(!t)});w==null||w.forEach(e=>{e.addEventListener("click",()=>{oe(e.dataset.value),N(!1)})});document.addEventListener("click",e=>{e.target.closest("#cs-model-wrapper")||N(!1)});document.addEventListener("keydown",e=>{e.key==="Escape"&&N(!1)});oe((I==null?void 0:I.value)||"gemini-2.5-flash-lite");(function(){const t=document.querySelector(".kb-actions");if(t&&!document.getElementById("kb-download-btn")){const n=document.createElement("button");n.className="btn-secondary",n.id="kb-download-btn",n.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:-2px;margin-right:6px"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>下載 .txt',n.addEventListener("click",()=>{var d;const o=((d=document.getElementById("kb-editor"))==null?void 0:d.value)||"";if(!o.trim()){alert("知識庫內容為空，無法下載！");return}const r=new Blob([o],{type:"text/plain;charset=utf-8"}),s=URL.createObjectURL(r),a=document.createElement("a"),c=new Date().toLocaleDateString("zh-TW").replace(/\//g,"-");a.href=s,a.download=`knowledge_base_${c}.txt`,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(s);const i=document.getElementById("kb-status");i&&(i.textContent="⬇️ 已下載",i.style.color="#60a5fa",setTimeout(()=>{i.textContent=""},2500))}),t.appendChild(n)}document.querySelectorAll('.nav-item[data-page="knowledge"]').forEach(n=>{n.addEventListener("click",()=>setTimeout(te,100))})})();(function(){const t=document.getElementById("login-btn"),n=document.getElementById("login-btn-text"),o=document.getElementById("login-progress"),r=document.getElementById("login-progress-bar"),s=document.getElementById("login-google-icon"),a=document.getElementById("login-error");if(!t)return;function c(i){i?(t.classList.add("loading"),t.disabled=!0,n&&(n.textContent="登入中…"),s&&(s.style.opacity="0.3"),o&&(o.style.display="block",r&&(r.style.animation="none",r.offsetWidth,r.style.animation="")),a&&(a.textContent="")):(t.classList.remove("loading"),t.disabled=!1,n&&(n.textContent="使用 Google 帳號登入"),s&&(s.style.opacity="1"),o&&(o.style.display="none"))}t.addEventListener("click",()=>c(!0),!0),a&&new MutationObserver(()=>{a.textContent.trim()&&c(!1)}).observe(a,{childList:!0,subtree:!0,characterData:!0})})();
