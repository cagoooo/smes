(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var ma;(function(n){n.STRING="string",n.NUMBER="number",n.INTEGER="integer",n.BOOLEAN="boolean",n.ARRAY="array",n.OBJECT="object"})(ma||(ma={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */var _a;(function(n){n.LANGUAGE_UNSPECIFIED="language_unspecified",n.PYTHON="python"})(_a||(_a={}));var ya;(function(n){n.OUTCOME_UNSPECIFIED="outcome_unspecified",n.OUTCOME_OK="outcome_ok",n.OUTCOME_FAILED="outcome_failed",n.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(ya||(ya={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */const va=["user","model","function","system"];var Ea;(function(n){n.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",n.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",n.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",n.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",n.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",n.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(Ea||(Ea={}));var Ia;(function(n){n.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",n.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",n.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",n.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",n.BLOCK_NONE="BLOCK_NONE"})(Ia||(Ia={}));var Ta;(function(n){n.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",n.NEGLIGIBLE="NEGLIGIBLE",n.LOW="LOW",n.MEDIUM="MEDIUM",n.HIGH="HIGH"})(Ta||(Ta={}));var wa;(function(n){n.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",n.SAFETY="SAFETY",n.OTHER="OTHER"})(wa||(wa={}));var Pn;(function(n){n.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",n.STOP="STOP",n.MAX_TOKENS="MAX_TOKENS",n.SAFETY="SAFETY",n.RECITATION="RECITATION",n.LANGUAGE="LANGUAGE",n.BLOCKLIST="BLOCKLIST",n.PROHIBITED_CONTENT="PROHIBITED_CONTENT",n.SPII="SPII",n.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",n.OTHER="OTHER"})(Pn||(Pn={}));var Aa;(function(n){n.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",n.RETRIEVAL_QUERY="RETRIEVAL_QUERY",n.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",n.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",n.CLASSIFICATION="CLASSIFICATION",n.CLUSTERING="CLUSTERING"})(Aa||(Aa={}));var Ra;(function(n){n.MODE_UNSPECIFIED="MODE_UNSPECIFIED",n.AUTO="AUTO",n.ANY="ANY",n.NONE="NONE"})(Ra||(Ra={}));var Sa;(function(n){n.MODE_UNSPECIFIED="MODE_UNSPECIFIED",n.MODE_DYNAMIC="MODE_DYNAMIC"})(Sa||(Sa={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */class ve extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class Ut extends ve{constructor(e,t){super(e),this.response=t}}class zc extends ve{constructor(e,t,r,i){super(e),this.status=t,this.statusText=r,this.errorDetails=i}}class ct extends ve{}class Kc extends ve{}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const Kh="https://generativelanguage.googleapis.com",Wh="v1beta",Qh="0.24.1",Yh="genai-js";var St;(function(n){n.GENERATE_CONTENT="generateContent",n.STREAM_GENERATE_CONTENT="streamGenerateContent",n.COUNT_TOKENS="countTokens",n.EMBED_CONTENT="embedContent",n.BATCH_EMBED_CONTENTS="batchEmbedContents"})(St||(St={}));class Jh{constructor(e,t,r,i,o){this.model=e,this.task=t,this.apiKey=r,this.stream=i,this.requestOptions=o}toString(){var e,t;const r=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||Wh;let o=`${((t=this.requestOptions)===null||t===void 0?void 0:t.baseUrl)||Kh}/${r}/${this.model}:${this.task}`;return this.stream&&(o+="?alt=sse"),o}}function Xh(n){const e=[];return n!=null&&n.apiClient&&e.push(n.apiClient),e.push(`${Yh}/${Qh}`),e.join(" ")}async function Zh(n){var e;const t=new Headers;t.append("Content-Type","application/json"),t.append("x-goog-api-client",Xh(n.requestOptions)),t.append("x-goog-api-key",n.apiKey);let r=(e=n.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(r){if(!(r instanceof Headers))try{r=new Headers(r)}catch(i){throw new ct(`unable to convert customHeaders value ${JSON.stringify(r)} to Headers: ${i.message}`)}for(const[i,o]of r.entries()){if(i==="x-goog-api-key")throw new ct(`Cannot set reserved header name ${i}`);if(i==="x-goog-api-client")throw new ct(`Header name ${i} can only be set using the apiClient field`);t.append(i,o)}}return t}async function ed(n,e,t,r,i,o){const a=new Jh(n,e,t,r,o);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},id(o)),{method:"POST",headers:await Zh(a),body:i})}}async function Kn(n,e,t,r,i,o={},a=fetch){const{url:l,fetchOptions:h}=await ed(n,e,t,r,i,o);return td(l,h,a)}async function td(n,e,t=fetch){let r;try{r=await t(n,e)}catch(i){nd(i,n)}return r.ok||await rd(r,n),r}function nd(n,e){let t=n;throw t.name==="AbortError"?(t=new Kc(`Request aborted when fetching ${e.toString()}: ${n.message}`),t.stack=n.stack):n instanceof zc||n instanceof ct||(t=new ve(`Error fetching from ${e.toString()}: ${n.message}`),t.stack=n.stack),t}async function rd(n,e){let t="",r;try{const i=await n.json();t=i.error.message,i.error.details&&(t+=` ${JSON.stringify(i.error.details)}`,r=i.error.details)}catch{}throw new zc(`Error fetching from ${e.toString()}: [${n.status} ${n.statusText}] ${t}`,n.status,n.statusText,r)}function id(n){const e={};if((n==null?void 0:n.signal)!==void 0||(n==null?void 0:n.timeout)>=0){const t=new AbortController;(n==null?void 0:n.timeout)>=0&&setTimeout(()=>t.abort(),n.timeout),n!=null&&n.signal&&n.signal.addEventListener("abort",()=>{t.abort()}),e.signal=t.signal}return e}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function vs(n){return n.text=()=>{if(n.candidates&&n.candidates.length>0){if(n.candidates.length>1&&console.warn(`This response had ${n.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),Pr(n.candidates[0]))throw new Ut(`${rt(n)}`,n);return sd(n)}else if(n.promptFeedback)throw new Ut(`Text not available. ${rt(n)}`,n);return""},n.functionCall=()=>{if(n.candidates&&n.candidates.length>0){if(n.candidates.length>1&&console.warn(`This response had ${n.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Pr(n.candidates[0]))throw new Ut(`${rt(n)}`,n);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),Ca(n)[0]}else if(n.promptFeedback)throw new Ut(`Function call not available. ${rt(n)}`,n)},n.functionCalls=()=>{if(n.candidates&&n.candidates.length>0){if(n.candidates.length>1&&console.warn(`This response had ${n.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Pr(n.candidates[0]))throw new Ut(`${rt(n)}`,n);return Ca(n)}else if(n.promptFeedback)throw new Ut(`Function call not available. ${rt(n)}`,n)},n}function sd(n){var e,t,r,i;const o=[];if(!((t=(e=n.candidates)===null||e===void 0?void 0:e[0].content)===null||t===void 0)&&t.parts)for(const a of(i=(r=n.candidates)===null||r===void 0?void 0:r[0].content)===null||i===void 0?void 0:i.parts)a.text&&o.push(a.text),a.executableCode&&o.push("\n```"+a.executableCode.language+`
`+a.executableCode.code+"\n```\n"),a.codeExecutionResult&&o.push("\n```\n"+a.codeExecutionResult.output+"\n```\n");return o.length>0?o.join(""):""}function Ca(n){var e,t,r,i;const o=[];if(!((t=(e=n.candidates)===null||e===void 0?void 0:e[0].content)===null||t===void 0)&&t.parts)for(const a of(i=(r=n.candidates)===null||r===void 0?void 0:r[0].content)===null||i===void 0?void 0:i.parts)a.functionCall&&o.push(a.functionCall);if(o.length>0)return o}const od=[Pn.RECITATION,Pn.SAFETY,Pn.LANGUAGE];function Pr(n){return!!n.finishReason&&od.includes(n.finishReason)}function rt(n){var e,t,r;let i="";if((!n.candidates||n.candidates.length===0)&&n.promptFeedback)i+="Response was blocked",!((e=n.promptFeedback)===null||e===void 0)&&e.blockReason&&(i+=` due to ${n.promptFeedback.blockReason}`),!((t=n.promptFeedback)===null||t===void 0)&&t.blockReasonMessage&&(i+=`: ${n.promptFeedback.blockReasonMessage}`);else if(!((r=n.candidates)===null||r===void 0)&&r[0]){const o=n.candidates[0];Pr(o)&&(i+=`Candidate was blocked due to ${o.finishReason}`,o.finishMessage&&(i+=`: ${o.finishMessage}`))}return i}function Mn(n){return this instanceof Mn?(this.v=n,this):new Mn(n)}function ad(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t.apply(n,e||[]),i,o=[];return i={},a("next"),a("throw"),a("return"),i[Symbol.asyncIterator]=function(){return this},i;function a(A){r[A]&&(i[A]=function(S){return new Promise(function(P,O){o.push([A,S,P,O])>1||l(A,S)})})}function l(A,S){try{h(r[A](S))}catch(P){T(o[0][3],P)}}function h(A){A.value instanceof Mn?Promise.resolve(A.value.v).then(d,p):T(o[0][2],A)}function d(A){l("next",A)}function p(A){l("throw",A)}function T(A,S){A(S),o.shift(),o.length&&l(o[0][0],o[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const ba=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function cd(n){const e=n.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),t=hd(e),[r,i]=t.tee();return{stream:ud(r),response:ld(i)}}async function ld(n){const e=[],t=n.getReader();for(;;){const{done:r,value:i}=await t.read();if(r)return vs(dd(e));e.push(i)}}function ud(n){return ad(this,arguments,function*(){const t=n.getReader();for(;;){const{value:r,done:i}=yield Mn(t.read());if(i)break;yield yield Mn(vs(r))}})}function hd(n){const e=n.getReader();return new ReadableStream({start(r){let i="";return o();function o(){return e.read().then(({value:a,done:l})=>{if(l){if(i.trim()){r.error(new ve("Failed to parse stream"));return}r.close();return}i+=a;let h=i.match(ba),d;for(;h;){try{d=JSON.parse(h[1])}catch{r.error(new ve(`Error parsing JSON response: "${h[1]}"`));return}r.enqueue(d),i=i.substring(h[0].length),h=i.match(ba)}return o()}).catch(a=>{let l=a;throw l.stack=a.stack,l.name==="AbortError"?l=new Kc("Request aborted when reading from the stream"):l=new ve("Error reading from the stream"),l})}}})}function dd(n){const e=n[n.length-1],t={promptFeedback:e==null?void 0:e.promptFeedback};for(const r of n){if(r.candidates){let i=0;for(const o of r.candidates)if(t.candidates||(t.candidates=[]),t.candidates[i]||(t.candidates[i]={index:i}),t.candidates[i].citationMetadata=o.citationMetadata,t.candidates[i].groundingMetadata=o.groundingMetadata,t.candidates[i].finishReason=o.finishReason,t.candidates[i].finishMessage=o.finishMessage,t.candidates[i].safetyRatings=o.safetyRatings,o.content&&o.content.parts){t.candidates[i].content||(t.candidates[i].content={role:o.content.role||"user",parts:[]});const a={};for(const l of o.content.parts)l.text&&(a.text=l.text),l.functionCall&&(a.functionCall=l.functionCall),l.executableCode&&(a.executableCode=l.executableCode),l.codeExecutionResult&&(a.codeExecutionResult=l.codeExecutionResult),Object.keys(a).length===0&&(a.text=""),t.candidates[i].content.parts.push(a)}i++}r.usageMetadata&&(t.usageMetadata=r.usageMetadata)}return t}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function Wc(n,e,t,r){const i=await Kn(e,St.STREAM_GENERATE_CONTENT,n,!0,JSON.stringify(t),r);return cd(i)}async function Qc(n,e,t,r){const o=await(await Kn(e,St.GENERATE_CONTENT,n,!1,JSON.stringify(t),r)).json();return{response:vs(o)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function Yc(n){if(n!=null){if(typeof n=="string")return{role:"system",parts:[{text:n}]};if(n.text)return{role:"system",parts:[n]};if(n.parts)return n.role?n:{role:"system",parts:n.parts}}}function Ln(n){let e=[];if(typeof n=="string")e=[{text:n}];else for(const t of n)typeof t=="string"?e.push({text:t}):e.push(t);return fd(e)}function fd(n){const e={role:"user",parts:[]},t={role:"function",parts:[]};let r=!1,i=!1;for(const o of n)"functionResponse"in o?(t.parts.push(o),i=!0):(e.parts.push(o),r=!0);if(r&&i)throw new ve("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!i)throw new ve("No content is provided for sending chat message.");return r?e:t}function pd(n,e){var t;let r={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(t=e==null?void 0:e.cachedContent)===null||t===void 0?void 0:t.name,contents:[]};const i=n.generateContentRequest!=null;if(n.contents){if(i)throw new ct("CountTokensRequest must have one of contents or generateContentRequest, not both.");r.contents=n.contents}else if(i)r=Object.assign(Object.assign({},r),n.generateContentRequest);else{const o=Ln(n);r.contents=[o]}return{generateContentRequest:r}}function Pa(n){let e;return n.contents?e=n:e={contents:[Ln(n)]},n.systemInstruction&&(e.systemInstruction=Yc(n.systemInstruction)),e}function gd(n){return typeof n=="string"||Array.isArray(n)?{content:Ln(n)}:n}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const ka=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],md={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function _d(n){let e=!1;for(const t of n){const{role:r,parts:i}=t;if(!e&&r!=="user")throw new ve(`First content should be with role 'user', got ${r}`);if(!va.includes(r))throw new ve(`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(va)}`);if(!Array.isArray(i))throw new ve("Content should have 'parts' property with an array of Parts");if(i.length===0)throw new ve("Each Content should have at least one part");const o={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const l of i)for(const h of ka)h in l&&(o[h]+=1);const a=md[r];for(const l of ka)if(!a.includes(l)&&o[l]>0)throw new ve(`Content with role '${r}' can't contain '${l}' part`);e=!0}}function Na(n){var e;if(n.candidates===void 0||n.candidates.length===0)return!1;const t=(e=n.candidates[0])===null||e===void 0?void 0:e.content;if(t===void 0||t.parts===void 0||t.parts.length===0)return!1;for(const r of t.parts)if(r===void 0||Object.keys(r).length===0||r.text!==void 0&&r.text==="")return!1;return!0}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const Oa="SILENT_ERROR";class yd{constructor(e,t,r,i={}){this.model=t,this.params=r,this._requestOptions=i,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,r!=null&&r.history&&(_d(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var r,i,o,a,l,h;await this._sendPromise;const d=Ln(e),p={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(i=this.params)===null||i===void 0?void 0:i.generationConfig,tools:(o=this.params)===null||o===void 0?void 0:o.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(h=this.params)===null||h===void 0?void 0:h.cachedContent,contents:[...this._history,d]},T=Object.assign(Object.assign({},this._requestOptions),t);let A;return this._sendPromise=this._sendPromise.then(()=>Qc(this._apiKey,this.model,p,T)).then(S=>{var P;if(Na(S.response)){this._history.push(d);const O=Object.assign({parts:[],role:"model"},(P=S.response.candidates)===null||P===void 0?void 0:P[0].content);this._history.push(O)}else{const O=rt(S.response);O&&console.warn(`sendMessage() was unsuccessful. ${O}. Inspect response object for details.`)}A=S}).catch(S=>{throw this._sendPromise=Promise.resolve(),S}),await this._sendPromise,A}async sendMessageStream(e,t={}){var r,i,o,a,l,h;await this._sendPromise;const d=Ln(e),p={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(i=this.params)===null||i===void 0?void 0:i.generationConfig,tools:(o=this.params)===null||o===void 0?void 0:o.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(h=this.params)===null||h===void 0?void 0:h.cachedContent,contents:[...this._history,d]},T=Object.assign(Object.assign({},this._requestOptions),t),A=Wc(this._apiKey,this.model,p,T);return this._sendPromise=this._sendPromise.then(()=>A).catch(S=>{throw new Error(Oa)}).then(S=>S.response).then(S=>{if(Na(S)){this._history.push(d);const P=Object.assign({},S.candidates[0].content);P.role||(P.role="model"),this._history.push(P)}else{const P=rt(S);P&&console.warn(`sendMessageStream() was unsuccessful. ${P}. Inspect response object for details.`)}}).catch(S=>{S.message!==Oa&&console.error(S)}),A}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function vd(n,e,t,r){return(await Kn(e,St.COUNT_TOKENS,n,!1,JSON.stringify(t),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function Ed(n,e,t,r){return(await Kn(e,St.EMBED_CONTENT,n,!1,JSON.stringify(t),r)).json()}async function Id(n,e,t,r){const i=t.requests.map(a=>Object.assign(Object.assign({},a),{model:e}));return(await Kn(e,St.BATCH_EMBED_CONTENTS,n,!1,JSON.stringify({requests:i}),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Da{constructor(e,t,r={}){this.apiKey=e,this._requestOptions=r,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=Yc(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var r;const i=Pa(e),o=Object.assign(Object.assign({},this._requestOptions),t);return Qc(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},i),o)}async generateContentStream(e,t={}){var r;const i=Pa(e),o=Object.assign(Object.assign({},this._requestOptions),t);return Wc(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},i),o)}startChat(e){var t;return new yd(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(t=this.cachedContent)===null||t===void 0?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){const r=pd(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),i=Object.assign(Object.assign({},this._requestOptions),t);return vd(this.apiKey,this.model,r,i)}async embedContent(e,t={}){const r=gd(e),i=Object.assign(Object.assign({},this._requestOptions),t);return Ed(this.apiKey,this.model,r,i)}async batchEmbedContents(e,t={}){const r=Object.assign(Object.assign({},this._requestOptions),t);return Id(this.apiKey,this.model,e,r)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Td{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new ve("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new Da(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,r){if(!e.name)throw new ct("Cached content must contain a `name` field.");if(!e.model)throw new ct("Cached content must contain a `model` field.");const i=["model","systemInstruction"];for(const a of i)if(t!=null&&t[a]&&e[a]&&(t==null?void 0:t[a])!==e[a]){if(a==="model"){const l=t.model.startsWith("models/")?t.model.replace("models/",""):t.model,h=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(l===h)continue}throw new ct(`Different value for "${a}" specified in modelParams (${t[a]}) and cachedContent (${e[a]})`)}const o=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new Da(this.apiKey,o,r)}}var Va={};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Jc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},wd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],l=n[t++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Xc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,l=a?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,p=o>>2,T=(o&3)<<4|l>>4;let A=(l&15)<<2|d>>6,S=d&63;h||(S=64,a||(A=64)),r.push(t[p],t[T],t[A],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Jc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):wd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const T=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||l==null||d==null||T==null)throw new Ad;const A=o<<2|l>>4;if(r.push(A),d!==64){const S=l<<4&240|d>>2;if(r.push(S),T!==64){const P=d<<6&192|T;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ad extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rd=function(n){const e=Jc(n);return Xc.encodeByteArray(e,!0)},Ur=function(n){return Rd(n).replace(/\./g,"")},Zc=function(n){try{return Xc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function Sd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const Cd=()=>Sd().__FIREBASE_DEFAULTS__,bd=()=>{if(typeof process>"u"||typeof Va>"u")return;const n=Va.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Pd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Zc(n[1]);return e&&JSON.parse(e)},ti=()=>{try{return Cd()||bd()||Pd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},el=n=>{var e,t;return(t=(e=ti())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},kd=n=>{const e=el(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},tl=()=>{var n;return(n=ti())===null||n===void 0?void 0:n.config},nl=n=>{var e;return(e=ti())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Nd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Od(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ur(JSON.stringify(t)),Ur(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function Vd(){var n;const e=(n=ti())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Md(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ld(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function xd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ud(){const n=Ee();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Fd(){return!Vd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bd(){try{return typeof indexedDB=="object"}catch{return!1}}function jd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const $d="FirebaseError";class Je extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=$d,Object.setPrototypeOf(this,Je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wn.prototype.create)}}class Wn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?qd(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new Je(i,l,r)}}function qd(n,e){return n.replace(Hd,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Hd=/\{\$([^}]+)}/g;function Gd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Fr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if(Ma(o)&&Ma(a)){if(!Fr(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ma(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Qn(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zd(n,e){const t=new Kd(n,e);return t.subscribe.bind(t)}class Kd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Wd(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Fi),i.error===void 0&&(i.error=Fi),i.complete===void 0&&(i.complete=Fi);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Fi(){}/**
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
 */function Ce(n){return n&&n._delegate?n._delegate:n}class Ct{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const It="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Qd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Nd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jd(e))try{this.getOrInitializeService({instanceIdentifier:It})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=It){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=It){return this.instances.has(e)}getOptions(e=It){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=It){return this.component?this.component.multipleInstances?e:It:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yd(n){return n===It?void 0:n}function Jd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Xd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Qd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const Zd={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},ef=j.INFO,tf={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},nf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=tf[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Es{constructor(e){this.name=e,this._logLevel=ef,this._logHandler=nf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const rf=(n,e)=>e.some(t=>n instanceof t);let La,xa;function sf(){return La||(La=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function of(){return xa||(xa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rl=new WeakMap,Ji=new WeakMap,il=new WeakMap,Bi=new WeakMap,Is=new WeakMap;function af(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(lt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&rl.set(t,n)}).catch(()=>{}),Is.set(e,n),e}function cf(n){if(Ji.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Ji.set(n,e)}let Xi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ji.get(n);if(e==="objectStoreNames")return n.objectStoreNames||il.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return lt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function lf(n){Xi=n(Xi)}function uf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ji(this),e,...t);return il.set(r,e.sort?e.sort():[e]),lt(r)}:of().includes(n)?function(...e){return n.apply(ji(this),e),lt(rl.get(this))}:function(...e){return lt(n.apply(ji(this),e))}}function hf(n){return typeof n=="function"?uf(n):(n instanceof IDBTransaction&&cf(n),rf(n,sf())?new Proxy(n,Xi):n)}function lt(n){if(n instanceof IDBRequest)return af(n);if(Bi.has(n))return Bi.get(n);const e=hf(n);return e!==n&&(Bi.set(n,e),Is.set(e,n)),e}const ji=n=>Is.get(n);function df(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),l=lt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(lt(a.result),h.oldVersion,h.newVersion,lt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const ff=["get","getKey","getAll","getAllKeys","count"],pf=["put","add","delete","clear"],$i=new Map;function Ua(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($i.get(e))return $i.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=pf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ff.includes(t)))return;const o=async function(a,...l){const h=this.transaction(a,i?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),i&&h.done]))[0]};return $i.set(e,o),o}lf(n=>({...n,get:(e,t,r)=>Ua(e,t)||n.get(e,t,r),has:(e,t)=>!!Ua(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
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
 */class gf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(mf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function mf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zi="@firebase/app",Fa="0.10.12";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Ke=new Es("@firebase/app"),_f="@firebase/app-compat",yf="@firebase/analytics-compat",vf="@firebase/analytics",Ef="@firebase/app-check-compat",If="@firebase/app-check",Tf="@firebase/auth",wf="@firebase/auth-compat",Af="@firebase/database",Rf="@firebase/data-connect",Sf="@firebase/database-compat",Cf="@firebase/functions",bf="@firebase/functions-compat",Pf="@firebase/installations",kf="@firebase/installations-compat",Nf="@firebase/messaging",Of="@firebase/messaging-compat",Df="@firebase/performance",Vf="@firebase/performance-compat",Mf="@firebase/remote-config",Lf="@firebase/remote-config-compat",xf="@firebase/storage",Uf="@firebase/storage-compat",Ff="@firebase/firestore",Bf="@firebase/vertexai-preview",jf="@firebase/firestore-compat",$f="firebase",qf="10.14.0";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const es="[DEFAULT]",Hf={[Zi]:"fire-core",[_f]:"fire-core-compat",[vf]:"fire-analytics",[yf]:"fire-analytics-compat",[If]:"fire-app-check",[Ef]:"fire-app-check-compat",[Tf]:"fire-auth",[wf]:"fire-auth-compat",[Af]:"fire-rtdb",[Rf]:"fire-data-connect",[Sf]:"fire-rtdb-compat",[Cf]:"fire-fn",[bf]:"fire-fn-compat",[Pf]:"fire-iid",[kf]:"fire-iid-compat",[Nf]:"fire-fcm",[Of]:"fire-fcm-compat",[Df]:"fire-perf",[Vf]:"fire-perf-compat",[Mf]:"fire-rc",[Lf]:"fire-rc-compat",[xf]:"fire-gcs",[Uf]:"fire-gcs-compat",[Ff]:"fire-fst",[jf]:"fire-fst-compat",[Bf]:"fire-vertex","fire-js":"fire-js",[$f]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Br=new Map,Gf=new Map,ts=new Map;function Ba(n,e){try{n.container.addComponent(e)}catch(t){Ke.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function zt(n){const e=n.name;if(ts.has(e))return Ke.debug(`There were multiple attempts to register component ${e}.`),!1;ts.set(e,n);for(const t of Br.values())Ba(t,n);for(const t of Gf.values())Ba(t,n);return!0}function Ts(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function $e(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const zf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ut=new Wn("app","Firebase",zf);/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Kf{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ut.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const tn=qf;function sl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:es,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ut.create("bad-app-name",{appName:String(i)});if(t||(t=tl()),!t)throw ut.create("no-options");const o=Br.get(i);if(o){if(Fr(t,o.options)&&Fr(r,o.config))return o;throw ut.create("duplicate-app",{appName:i})}const a=new Xd(i);for(const h of ts.values())a.addComponent(h);const l=new Kf(t,r,a);return Br.set(i,l),l}function ol(n=es){const e=Br.get(n);if(!e&&n===es&&tl())return sl();if(!e)throw ut.create("no-app",{appName:n});return e}function ht(n,e,t){var r;let i=(r=Hf[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ke.warn(l.join(" "));return}zt(new Ct(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Wf="firebase-heartbeat-database",Qf=1,xn="firebase-heartbeat-store";let qi=null;function al(){return qi||(qi=df(Wf,Qf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(xn)}catch(t){console.warn(t)}}}}).catch(n=>{throw ut.create("idb-open",{originalErrorMessage:n.message})})),qi}async function Yf(n){try{const t=(await al()).transaction(xn),r=await t.objectStore(xn).get(cl(n));return await t.done,r}catch(e){if(e instanceof Je)Ke.warn(e.message);else{const t=ut.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ke.warn(t.message)}}}async function ja(n,e){try{const r=(await al()).transaction(xn,"readwrite");await r.objectStore(xn).put(e,cl(n)),await r.done}catch(t){if(t instanceof Je)Ke.warn(t.message);else{const r=ut.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ke.warn(r.message)}}}function cl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Jf=1024,Xf=30*24*60*60*1e3;class Zf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new tp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=$a();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Xf}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ke.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=$a(),{heartbeatsToSend:r,unsentEntries:i}=ep(this._heartbeatsCache.heartbeats),o=Ur(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Ke.warn(t),""}}}function $a(){return new Date().toISOString().substring(0,10)}function ep(n,e=Jf){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),qa(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),qa(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class tp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bd()?jd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Yf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return ja(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return ja(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function qa(n){return Ur(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function np(n){zt(new Ct("platform-logger",e=>new gf(e),"PRIVATE")),zt(new Ct("heartbeat",e=>new Zf(e),"PRIVATE")),ht(Zi,Fa,n),ht(Zi,Fa,"esm2017"),ht("fire-js","")}np("");var rp="firebase",ip="10.14.0";/**
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
 */ht(rp,ip,"app");function ws(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function ll(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sp=ll,ul=new Wn("auth","Firebase",ll());/**
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
 */const jr=new Es("@firebase/auth");function op(n,...e){jr.logLevel<=j.WARN&&jr.warn(`Auth (${tn}): ${n}`,...e)}function kr(n,...e){jr.logLevel<=j.ERROR&&jr.error(`Auth (${tn}): ${n}`,...e)}/**
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
 */function Me(n,...e){throw Rs(n,...e)}function ke(n,...e){return Rs(n,...e)}function As(n,e,t){const r=Object.assign(Object.assign({},sp()),{[e]:t});return new Wn("auth","Firebase",r).create(e,{appName:n.name})}function At(n){return As(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ap(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Me(n,"argument-error"),As(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Rs(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ul.create(n,...e)}function L(n,e,...t){if(!n)throw Rs(e,...t)}function qe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw kr(e),new Error(e)}function We(n,e){n||qe(e)}/**
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
 */function ns(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function cp(){return Ha()==="http:"||Ha()==="https:"}function Ha(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function lp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cp()||Ld()||"connection"in navigator)?navigator.onLine:!0}function up(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Yn{constructor(e,t){this.shortDelay=e,this.longDelay=t,We(t>e,"Short delay should be less than long delay!"),this.isMobile=Dd()||xd()}get(){return lp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ss(n,e){We(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class hl{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const hp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const dp=new Yn(3e4,6e4);function Cs(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function nn(n,e,t,r,i={}){return dl(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const l=Qn(Object.assign({key:n.config.apiKey},a)).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:h},o);return Md()||(d.referrerPolicy="no-referrer"),hl.fetch()(fl(n,n.config.apiHost,t,l),d)})}async function dl(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},hp),e);try{const i=new pp(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Ar(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[h,d]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ar(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Ar(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw Ar(n,"user-disabled",a);const p=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw As(n,p,d);Me(n,p)}}catch(i){if(i instanceof Je)throw i;Me(n,"network-request-failed",{message:String(i)})}}async function fp(n,e,t,r,i={}){const o=await nn(n,e,t,r,i);return"mfaPendingCredential"in o&&Me(n,"multi-factor-auth-required",{_serverResponse:o}),o}function fl(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Ss(n.config,i):`${n.config.apiScheme}://${i}`}class pp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ke(this.auth,"network-request-failed")),dp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ar(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=ke(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function gp(n,e){return nn(n,"POST","/v1/accounts:delete",e)}async function pl(n,e){return nn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function kn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mp(n,e=!1){const t=Ce(n),r=await t.getIdToken(e),i=bs(r);L(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:kn(Hi(i.auth_time)),issuedAtTime:kn(Hi(i.iat)),expirationTime:kn(Hi(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Hi(n){return Number(n)*1e3}function bs(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return kr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zc(t);return i?JSON.parse(i):(kr("Failed to decode base64 JWT payload"),null)}catch(i){return kr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ga(n){const e=bs(n);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Un(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Je&&_p(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function _p({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class yp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rs{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=kn(this.lastLoginAt),this.creationTime=kn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function $r(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Un(n,pl(t,{idToken:r}));L(i==null?void 0:i.users.length,t,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?gl(o.providerUserInfo):[],l=Ep(n.providerData,a),h=n.isAnonymous,d=!(n.email&&o.passwordHash)&&!(l!=null&&l.length),p=h?d:!1,T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new rs(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(n,T)}async function vp(n){const e=Ce(n);await $r(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ep(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function gl(n){return n.map(e=>{var{providerId:t}=e,r=ws(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Ip(n,e){const t=await dl(n,{},async()=>{const r=Qn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=fl(n,i,"/v1/token",`key=${o}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",hl.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Tp(n,e){return nn(n,"POST","/v2/accounts:revokeToken",Cs(n,e))}/**
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
 */class $t{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ga(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){L(e.length!==0,"internal-error");const t=Ga(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await Ip(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new $t;return r&&(L(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(L(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $t,this.toJSON())}_performRefresh(){return qe("not implemented")}}/**
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
 */function nt(n,e){L(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class He{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=ws(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new rs(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Un(this,this.stsTokenManager.getToken(this.auth,e));return L(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return mp(this,e)}reload(){return vp(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new He(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await $r(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($e(this.auth.app))return Promise.reject(At(this.auth));const e=await this.getIdToken();return await Un(this,gp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,a,l,h,d,p;const T=(r=t.displayName)!==null&&r!==void 0?r:void 0,A=(i=t.email)!==null&&i!==void 0?i:void 0,S=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,P=(a=t.photoURL)!==null&&a!==void 0?a:void 0,O=(l=t.tenantId)!==null&&l!==void 0?l:void 0,N=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,G=(d=t.createdAt)!==null&&d!==void 0?d:void 0,z=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:K,emailVerified:ee,isAnonymous:Ae,providerData:te,stsTokenManager:v}=t;L(K&&v,e,"internal-error");const g=$t.fromJSON(this.name,v);L(typeof K=="string",e,"internal-error"),nt(T,e.name),nt(A,e.name),L(typeof ee=="boolean",e,"internal-error"),L(typeof Ae=="boolean",e,"internal-error"),nt(S,e.name),nt(P,e.name),nt(O,e.name),nt(N,e.name),nt(G,e.name),nt(z,e.name);const _=new He({uid:K,auth:e,email:A,emailVerified:ee,displayName:T,isAnonymous:Ae,photoURL:P,phoneNumber:S,tenantId:O,stsTokenManager:g,createdAt:G,lastLoginAt:z});return te&&Array.isArray(te)&&(_.providerData=te.map(y=>Object.assign({},y))),N&&(_._redirectEventId=N),_}static async _fromIdTokenResponse(e,t,r=!1){const i=new $t;i.updateFromServerResponse(t);const o=new He({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $r(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];L(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?gl(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new $t;l.updateFromIdToken(r);const h=new He({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new rs(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
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
 */const za=new Map;function Ge(n){We(n instanceof Function,"Expected a class definition");let e=za.get(n);return e?(We(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,za.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class ml{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ml.type="NONE";const Ka=ml;/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Nr(n,e,t){return`firebase:${n}:${e}:${t}`}class qt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Nr(this.userKey,i.apiKey,o),this.fullPersistenceKey=Nr("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?He._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new qt(Ge(Ka),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||Ge(Ka);const a=Nr(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const p=await d._get(a);if(p){const T=He._fromJSON(e,p);d!==o&&(l=T),o=d;break}}catch{}const h=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new qt(o,e,r):(o=h[0],l&&await o._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new qt(o,e,r))}}/**
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
 */function Wa(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(El(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_l(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tl(e))return"Blackberry";if(wl(e))return"Webos";if(yl(e))return"Safari";if((e.includes("chrome/")||vl(e))&&!e.includes("edge/"))return"Chrome";if(Il(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _l(n=Ee()){return/firefox\//i.test(n)}function yl(n=Ee()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vl(n=Ee()){return/crios\//i.test(n)}function El(n=Ee()){return/iemobile/i.test(n)}function Il(n=Ee()){return/android/i.test(n)}function Tl(n=Ee()){return/blackberry/i.test(n)}function wl(n=Ee()){return/webos/i.test(n)}function Ps(n=Ee()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function wp(n=Ee()){var e;return Ps(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ap(){return Ud()&&document.documentMode===10}function Al(n=Ee()){return Ps(n)||Il(n)||wl(n)||Tl(n)||/windows phone/i.test(n)||El(n)}/**
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
 */function Rl(n,e=[]){let t;switch(n){case"Browser":t=Wa(Ee());break;case"Worker":t=`${Wa(Ee())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${tn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Rp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,l)=>{try{const h=e(o);a(h)}catch(h){l(h)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function Sp(n,e={}){return nn(n,"GET","/v2/passwordPolicy",Cs(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Cp=6;class bp{constructor(e){var t,r,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Cp,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,a,l;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(l=h.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),h}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class Pp{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qa(this),this.idTokenSubscription=new Qa(this),this.beforeStateQueue=new Rp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ul,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ge(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await qt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await pl(this,{idToken:e}),r=await He._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if($e(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===l)&&(h!=null&&h.user)&&(i=h.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $r(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=up()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($e(this.app))return Promise.reject(At(this));const t=e?Ce(e):null;return t&&L(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $e(this.app)?Promise.reject(At(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $e(this.app)?Promise.reject(At(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ge(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Sp(this),t=new bp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Tp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ge(e)||this._popupRedirectResolver;L(t,this,"argument-error"),this.redirectPersistenceManager=await qt.create(this,[Ge(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,i);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&op(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ni(n){return Ce(n)}class Qa{constructor(e){this.auth=e,this.observer=null,this.addObserver=zd(t=>this.observer=t)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ks={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kp(n){ks=n}function Np(n){return ks.loadJS(n)}function Op(){return ks.gapiScript}function Dp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Vp(n,e){const t=Ts(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(Fr(o,e??{}))return i;Me(i,"already-initialized")}return t.initialize({options:e})}function Mp(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ge);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Lp(n,e,t){const r=ni(n);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Sl(e),{host:a,port:l}=xp(e),h=l===null?"":`:${l}`;r.config.emulator={url:`${o}//${a}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),Up()}function Sl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function xp(n){const e=Sl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Ya(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Ya(a)}}}function Ya(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Up(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Cl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return qe("not implemented")}_getIdTokenResponse(e){return qe("not implemented")}_linkToIdToken(e,t){return qe("not implemented")}_getReauthenticationResolver(e){return qe("not implemented")}}/**
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
 */async function Ht(n,e){return fp(n,"POST","/v1/accounts:signInWithIdp",Cs(n,e))}/**
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
 */const Fp="http://localhost";class bt extends Cl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new bt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Me("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=ws(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new bt(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Ht(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ht(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ht(e,t)}buildRequest(){const e={requestUri:Fp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Qn(t)}return e}}/**
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
 */class Ns{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Jn extends Ns{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class it extends Jn{constructor(){super("facebook.com")}static credential(e){return bt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return it.credential(e.oauthAccessToken)}catch{return null}}}it.FACEBOOK_SIGN_IN_METHOD="facebook.com";it.PROVIDER_ID="facebook.com";/**
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
 */class je extends Jn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return bt._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return je.credential(t,r)}catch{return null}}}je.GOOGLE_SIGN_IN_METHOD="google.com";je.PROVIDER_ID="google.com";/**
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
 */class st extends Jn{constructor(){super("github.com")}static credential(e){return bt._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return st.credential(e.oauthAccessToken)}catch{return null}}}st.GITHUB_SIGN_IN_METHOD="github.com";st.PROVIDER_ID="github.com";/**
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
 */class ot extends Jn{constructor(){super("twitter.com")}static credential(e,t){return bt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ot.credential(t,r)}catch{return null}}}ot.TWITTER_SIGN_IN_METHOD="twitter.com";ot.PROVIDER_ID="twitter.com";/**
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
 */class Kt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await He._fromIdTokenResponse(e,r,i),a=Ja(r);return new Kt({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Ja(r);return new Kt({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Ja(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class qr extends Je{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qr.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new qr(e,t,r,i)}}function bl(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?qr._fromErrorAndOperation(n,o,e,r):o})}async function Bp(n,e,t=!1){const r=await Un(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Kt._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function jp(n,e,t=!1){const{auth:r}=n;if($e(r.app))return Promise.reject(At(r));const i="reauthenticate";try{const o=await Un(n,bl(r,i,e,n),t);L(o.idToken,r,"internal-error");const a=bs(o.idToken);L(a,r,"internal-error");const{sub:l}=a;return L(n.uid===l,r,"user-mismatch"),Kt._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Me(r,"user-mismatch"),o}}/**
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
 */async function $p(n,e,t=!1){if($e(n.app))return Promise.reject(At(n));const r="signIn",i=await bl(n,r,e),o=await Kt._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}function qp(n,e,t,r){return Ce(n).onIdTokenChanged(e,t,r)}function Hp(n,e,t){return Ce(n).beforeAuthStateChanged(e,t)}function Gp(n,e,t,r){return Ce(n).onAuthStateChanged(e,t,r)}function zp(n){return Ce(n).signOut()}const Hr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Pl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Hr,"1"),this.storage.removeItem(Hr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Kp=1e3,Wp=10;class kl extends Pl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Al(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);Ap()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Wp):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Kp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}kl.type="LOCAL";const Qp=kl;/**
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
 */class Nl extends Pl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Nl.type="SESSION";const Ol=Nl;/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Yp(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class ri{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ri(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(t.origin,o)),h=await Yp(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ri.receivers=[];/**
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
 */function Os(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Jp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((l,h)=>{const d=Os("",20);i.port1.start();const p=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(T){const A=T;if(A.data.eventId===d)switch(A.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(A.data.response);break;default:clearTimeout(p),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Oe(){return window}function Xp(n){Oe().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Dl(){return typeof Oe().WorkerGlobalScope<"u"&&typeof Oe().importScripts=="function"}async function Zp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function tg(){return Dl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Vl="firebaseLocalStorageDb",ng=1,Gr="firebaseLocalStorage",Ml="fbase_key";class Xn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ii(n,e){return n.transaction([Gr],e?"readwrite":"readonly").objectStore(Gr)}function rg(){const n=indexedDB.deleteDatabase(Vl);return new Xn(n).toPromise()}function is(){const n=indexedDB.open(Vl,ng);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Gr,{keyPath:Ml})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Gr)?e(r):(r.close(),await rg(),e(await is()))})})}async function Xa(n,e,t){const r=ii(n,!0).put({[Ml]:e,value:t});return new Xn(r).toPromise()}async function ig(n,e){const t=ii(n,!1).get(e),r=await new Xn(t).toPromise();return r===void 0?null:r.value}function Za(n,e){const t=ii(n,!0).delete(e);return new Xn(t).toPromise()}const sg=800,og=3;class Ll{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await is(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>og)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ri._getInstance(tg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Zp(),!this.activeServiceWorker)return;this.sender=new Jp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await is();return await Xa(e,Hr,"1"),await Za(e,Hr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xa(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ig(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Za(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=ii(i,!1).getAll();return new Xn(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ll.type="LOCAL";const ag=Ll;new Yn(3e4,6e4);/**
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
 */function xl(n,e){return e?Ge(e):(L(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Ds extends Cl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ht(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ht(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ht(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function cg(n){return $p(n.auth,new Ds(n),n.bypassAuthState)}function lg(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),jp(t,new Ds(n),n.bypassAuthState)}async function ug(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),Bp(t,new Ds(n),n.bypassAuthState)}/**
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
 */class Ul{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cg;case"linkViaPopup":case"linkViaRedirect":return ug;case"reauthViaPopup":case"reauthViaRedirect":return lg;default:Me(this.auth,"internal-error")}}resolve(e){We(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){We(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const hg=new Yn(2e3,1e4);async function dg(n,e,t){if($e(n.app))return Promise.reject(ke(n,"operation-not-supported-in-this-environment"));const r=ni(n);ap(n,e,Ns);const i=xl(r,t);return new Tt(r,"signInViaPopup",e,i).executeNotNull()}class Tt extends Ul{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Tt.currentPopupAction&&Tt.currentPopupAction.cancel(),Tt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){We(this.filter.length===1,"Popup operations only handle one event");const e=Os();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hg.get())};e()}}Tt.currentPopupAction=null;/**
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
 */const fg="pendingRedirect",Or=new Map;class pg extends Ul{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Or.get(this.auth._key());if(!e){try{const r=await gg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Or.set(this.auth._key(),e)}return this.bypassAuthState||Or.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gg(n,e){const t=yg(e),r=_g(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function mg(n,e){Or.set(n._key(),e)}function _g(n){return Ge(n._redirectPersistence)}function yg(n){return Nr(fg,n.config.apiKey,n.name)}async function vg(n,e,t=!1){if($e(n.app))return Promise.reject(At(n));const r=ni(n),i=xl(r,e),a=await new pg(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Eg=10*60*1e3;class Ig{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Tg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Fl(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ke(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Eg&&this.cachedEventUids.clear(),this.cachedEventUids.has(ec(e))}saveEventToCache(e){this.cachedEventUids.add(ec(e)),this.lastProcessedEventTime=Date.now()}}function ec(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Fl({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Tg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fl(n);default:return!1}}/**
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
 */async function wg(n,e={}){return nn(n,"GET","/v1/projects",e)}/**
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
 */const Ag=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Rg=/^https?/;async function Sg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await wg(n);for(const t of e)try{if(Cg(t))return}catch{}Me(n,"unauthorized-domain")}function Cg(n){const e=ns(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Rg.test(t))return!1;if(Ag.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const bg=new Yn(3e4,6e4);function tc(){const n=Oe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Pg(n){return new Promise((e,t)=>{var r,i,o;function a(){tc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tc(),t(ke(n,"network-request-failed"))},timeout:bg.get()})}if(!((i=(r=Oe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Oe().gapi)===null||o===void 0)&&o.load)a();else{const l=Dp("iframefcb");return Oe()[l]=()=>{gapi.load?a():t(ke(n,"network-request-failed"))},Np(`${Op()}?onload=${l}`).catch(h=>t(h))}}).catch(e=>{throw Dr=null,e})}let Dr=null;function kg(n){return Dr=Dr||Pg(n),Dr}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Ng=new Yn(5e3,15e3),Og="__/auth/iframe",Dg="emulator/auth/iframe",Vg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Lg(n){const e=n.config;L(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ss(e,Dg):`https://${n.config.authDomain}/${Og}`,r={apiKey:e.apiKey,appName:n.name,v:tn},i=Mg.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Qn(r).slice(1)}`}async function xg(n){const e=await kg(n),t=Oe().gapi;return L(t,n,"internal-error"),e.open({where:document.body,url:Lg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vg,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=ke(n,"network-request-failed"),l=Oe().setTimeout(()=>{o(a)},Ng.get());function h(){Oe().clearTimeout(l),i(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Ug={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fg=500,Bg=600,jg="_blank",$g="http://localhost";class nc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qg(n,e,t,r=Fg,i=Bg){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const h=Object.assign(Object.assign({},Ug),{width:r.toString(),height:i.toString(),top:o,left:a}),d=Ee().toLowerCase();t&&(l=vl(d)?jg:t),_l(d)&&(e=e||$g,h.scrollbars="yes");const p=Object.entries(h).reduce((A,[S,P])=>`${A}${S}=${P},`,"");if(wp(d)&&l!=="_self")return Hg(e||"",l),new nc(null);const T=window.open(e||"",l,p);L(T,n,"popup-blocked");try{T.focus()}catch{}return new nc(T)}function Hg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Gg="__/auth/handler",zg="emulator/auth/handler",Kg=encodeURIComponent("fac");async function rc(n,e,t,r,i,o){L(n.config.authDomain,n,"auth-domain-config-required"),L(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:tn,eventId:i};if(e instanceof Ns){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Gd(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,T]of Object.entries({}))a[p]=T}if(e instanceof Jn){const p=e.getScopes().filter(T=>T!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const h=await n._getAppCheckToken(),d=h?`#${Kg}=${encodeURIComponent(h)}`:"";return`${Wg(n)}?${Qn(l).slice(1)}${d}`}function Wg({config:n}){return n.emulator?Ss(n,zg):`https://${n.authDomain}/${Gg}`}/**
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
 */const Gi="webStorageSupport";class Qg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ol,this._completeRedirectFn=vg,this._overrideRedirectResult=mg}async _openPopup(e,t,r,i){var o;We((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await rc(e,t,r,ns(),i);return qg(e,a,Os())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await rc(e,t,r,ns(),i);return Xp(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(We(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await xg(e),r=new Ig(e);return t.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Gi,{type:Gi},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Gi];a!==void 0&&t(!!a),Me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Sg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Al()||yl()||Ps()}}const Yg=Qg;var ic="@firebase/auth",sc="1.7.9";/**
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
 */class Jg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Xg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Zg(n){zt(new Ct("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;L(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rl(n)},d=new Pp(r,i,o,h);return Mp(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),zt(new Ct("auth-internal",e=>{const t=ni(e.getProvider("auth").getImmediate());return(r=>new Jg(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ht(ic,sc,Xg(n)),ht(ic,sc,"esm2017")}/**
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
 */const em=5*60,tm=nl("authIdTokenMaxAge")||em;let oc=null;const nm=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>tm)return;const i=t==null?void 0:t.token;oc!==i&&(oc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rm(n=ol()){const e=Ts(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Vp(n,{popupRedirectResolver:Yg,persistence:[ag,Qp,Ol]}),r=nl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=nm(o.toString());Hp(t,a,()=>a(t.currentUser)),qp(t,l=>a(l))}}const i=el("auth");return i&&Lp(t,`http://${i}`),t}function im(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}kp({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=ke("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",im().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Zg("Browser");var ac=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rt,Bl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,g){function _(){}_.prototype=g.prototype,v.D=g.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(y,E,w){for(var m=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)m[Ue-2]=arguments[Ue];return g.prototype[E].apply(y,m)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,g,_){_||(_=0);var y=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)y[E]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=v.g[0],_=v.g[1],E=v.g[2];var w=v.g[3],m=g+(w^_&(E^w))+y[0]+3614090360&4294967295;g=_+(m<<7&4294967295|m>>>25),m=w+(E^g&(_^E))+y[1]+3905402710&4294967295,w=g+(m<<12&4294967295|m>>>20),m=E+(_^w&(g^_))+y[2]+606105819&4294967295,E=w+(m<<17&4294967295|m>>>15),m=_+(g^E&(w^g))+y[3]+3250441966&4294967295,_=E+(m<<22&4294967295|m>>>10),m=g+(w^_&(E^w))+y[4]+4118548399&4294967295,g=_+(m<<7&4294967295|m>>>25),m=w+(E^g&(_^E))+y[5]+1200080426&4294967295,w=g+(m<<12&4294967295|m>>>20),m=E+(_^w&(g^_))+y[6]+2821735955&4294967295,E=w+(m<<17&4294967295|m>>>15),m=_+(g^E&(w^g))+y[7]+4249261313&4294967295,_=E+(m<<22&4294967295|m>>>10),m=g+(w^_&(E^w))+y[8]+1770035416&4294967295,g=_+(m<<7&4294967295|m>>>25),m=w+(E^g&(_^E))+y[9]+2336552879&4294967295,w=g+(m<<12&4294967295|m>>>20),m=E+(_^w&(g^_))+y[10]+4294925233&4294967295,E=w+(m<<17&4294967295|m>>>15),m=_+(g^E&(w^g))+y[11]+2304563134&4294967295,_=E+(m<<22&4294967295|m>>>10),m=g+(w^_&(E^w))+y[12]+1804603682&4294967295,g=_+(m<<7&4294967295|m>>>25),m=w+(E^g&(_^E))+y[13]+4254626195&4294967295,w=g+(m<<12&4294967295|m>>>20),m=E+(_^w&(g^_))+y[14]+2792965006&4294967295,E=w+(m<<17&4294967295|m>>>15),m=_+(g^E&(w^g))+y[15]+1236535329&4294967295,_=E+(m<<22&4294967295|m>>>10),m=g+(E^w&(_^E))+y[1]+4129170786&4294967295,g=_+(m<<5&4294967295|m>>>27),m=w+(_^E&(g^_))+y[6]+3225465664&4294967295,w=g+(m<<9&4294967295|m>>>23),m=E+(g^_&(w^g))+y[11]+643717713&4294967295,E=w+(m<<14&4294967295|m>>>18),m=_+(w^g&(E^w))+y[0]+3921069994&4294967295,_=E+(m<<20&4294967295|m>>>12),m=g+(E^w&(_^E))+y[5]+3593408605&4294967295,g=_+(m<<5&4294967295|m>>>27),m=w+(_^E&(g^_))+y[10]+38016083&4294967295,w=g+(m<<9&4294967295|m>>>23),m=E+(g^_&(w^g))+y[15]+3634488961&4294967295,E=w+(m<<14&4294967295|m>>>18),m=_+(w^g&(E^w))+y[4]+3889429448&4294967295,_=E+(m<<20&4294967295|m>>>12),m=g+(E^w&(_^E))+y[9]+568446438&4294967295,g=_+(m<<5&4294967295|m>>>27),m=w+(_^E&(g^_))+y[14]+3275163606&4294967295,w=g+(m<<9&4294967295|m>>>23),m=E+(g^_&(w^g))+y[3]+4107603335&4294967295,E=w+(m<<14&4294967295|m>>>18),m=_+(w^g&(E^w))+y[8]+1163531501&4294967295,_=E+(m<<20&4294967295|m>>>12),m=g+(E^w&(_^E))+y[13]+2850285829&4294967295,g=_+(m<<5&4294967295|m>>>27),m=w+(_^E&(g^_))+y[2]+4243563512&4294967295,w=g+(m<<9&4294967295|m>>>23),m=E+(g^_&(w^g))+y[7]+1735328473&4294967295,E=w+(m<<14&4294967295|m>>>18),m=_+(w^g&(E^w))+y[12]+2368359562&4294967295,_=E+(m<<20&4294967295|m>>>12),m=g+(_^E^w)+y[5]+4294588738&4294967295,g=_+(m<<4&4294967295|m>>>28),m=w+(g^_^E)+y[8]+2272392833&4294967295,w=g+(m<<11&4294967295|m>>>21),m=E+(w^g^_)+y[11]+1839030562&4294967295,E=w+(m<<16&4294967295|m>>>16),m=_+(E^w^g)+y[14]+4259657740&4294967295,_=E+(m<<23&4294967295|m>>>9),m=g+(_^E^w)+y[1]+2763975236&4294967295,g=_+(m<<4&4294967295|m>>>28),m=w+(g^_^E)+y[4]+1272893353&4294967295,w=g+(m<<11&4294967295|m>>>21),m=E+(w^g^_)+y[7]+4139469664&4294967295,E=w+(m<<16&4294967295|m>>>16),m=_+(E^w^g)+y[10]+3200236656&4294967295,_=E+(m<<23&4294967295|m>>>9),m=g+(_^E^w)+y[13]+681279174&4294967295,g=_+(m<<4&4294967295|m>>>28),m=w+(g^_^E)+y[0]+3936430074&4294967295,w=g+(m<<11&4294967295|m>>>21),m=E+(w^g^_)+y[3]+3572445317&4294967295,E=w+(m<<16&4294967295|m>>>16),m=_+(E^w^g)+y[6]+76029189&4294967295,_=E+(m<<23&4294967295|m>>>9),m=g+(_^E^w)+y[9]+3654602809&4294967295,g=_+(m<<4&4294967295|m>>>28),m=w+(g^_^E)+y[12]+3873151461&4294967295,w=g+(m<<11&4294967295|m>>>21),m=E+(w^g^_)+y[15]+530742520&4294967295,E=w+(m<<16&4294967295|m>>>16),m=_+(E^w^g)+y[2]+3299628645&4294967295,_=E+(m<<23&4294967295|m>>>9),m=g+(E^(_|~w))+y[0]+4096336452&4294967295,g=_+(m<<6&4294967295|m>>>26),m=w+(_^(g|~E))+y[7]+1126891415&4294967295,w=g+(m<<10&4294967295|m>>>22),m=E+(g^(w|~_))+y[14]+2878612391&4294967295,E=w+(m<<15&4294967295|m>>>17),m=_+(w^(E|~g))+y[5]+4237533241&4294967295,_=E+(m<<21&4294967295|m>>>11),m=g+(E^(_|~w))+y[12]+1700485571&4294967295,g=_+(m<<6&4294967295|m>>>26),m=w+(_^(g|~E))+y[3]+2399980690&4294967295,w=g+(m<<10&4294967295|m>>>22),m=E+(g^(w|~_))+y[10]+4293915773&4294967295,E=w+(m<<15&4294967295|m>>>17),m=_+(w^(E|~g))+y[1]+2240044497&4294967295,_=E+(m<<21&4294967295|m>>>11),m=g+(E^(_|~w))+y[8]+1873313359&4294967295,g=_+(m<<6&4294967295|m>>>26),m=w+(_^(g|~E))+y[15]+4264355552&4294967295,w=g+(m<<10&4294967295|m>>>22),m=E+(g^(w|~_))+y[6]+2734768916&4294967295,E=w+(m<<15&4294967295|m>>>17),m=_+(w^(E|~g))+y[13]+1309151649&4294967295,_=E+(m<<21&4294967295|m>>>11),m=g+(E^(_|~w))+y[4]+4149444226&4294967295,g=_+(m<<6&4294967295|m>>>26),m=w+(_^(g|~E))+y[11]+3174756917&4294967295,w=g+(m<<10&4294967295|m>>>22),m=E+(g^(w|~_))+y[2]+718787259&4294967295,E=w+(m<<15&4294967295|m>>>17),m=_+(w^(E|~g))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(E+(m<<21&4294967295|m>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+w&4294967295}r.prototype.u=function(v,g){g===void 0&&(g=v.length);for(var _=g-this.blockSize,y=this.B,E=this.h,w=0;w<g;){if(E==0)for(;w<=_;)i(this,v,w),w+=this.blockSize;if(typeof v=="string"){for(;w<g;)if(y[E++]=v.charCodeAt(w++),E==this.blockSize){i(this,y),E=0;break}}else for(;w<g;)if(y[E++]=v[w++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=g},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;var _=8*this.o;for(g=v.length-8;g<v.length;++g)v[g]=_&255,_/=256;for(this.u(v),v=Array(16),g=_=0;4>g;++g)for(var y=0;32>y;y+=8)v[_++]=this.g[g]>>>y&255;return v};function o(v,g){var _=l;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=g(v)}function a(v,g){this.h=g;for(var _=[],y=!0,E=v.length-1;0<=E;E--){var w=v[E]|0;y&&w==g||(_[E]=w,y=!1)}this.g=_}var l={};function h(v){return-128<=v&&128>v?o(v,function(g){return new a([g|0],0>g?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return T;if(0>v)return N(d(-v));for(var g=[],_=1,y=0;v>=_;y++)g[y]=v/_|0,_*=4294967296;return new a(g,0)}function p(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return N(p(v.substring(1),g));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(g,8)),y=T,E=0;E<v.length;E+=8){var w=Math.min(8,v.length-E),m=parseInt(v.substring(E,E+w),g);8>w?(w=d(Math.pow(g,w)),y=y.j(w).add(d(m))):(y=y.j(_),y=y.add(d(m)))}return y}var T=h(0),A=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(O(this))return-N(this).m();for(var v=0,g=1,_=0;_<this.g.length;_++){var y=this.i(_);v+=(0<=y?y:4294967296+y)*g,g*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(P(this))return"0";if(O(this))return"-"+N(this).toString(v);for(var g=d(Math.pow(v,6)),_=this,y="";;){var E=ee(_,g).g;_=G(_,E.j(g));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=E,P(_))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function P(v){if(v.h!=0)return!1;for(var g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function O(v){return v.h==-1}n.l=function(v){return v=G(this,v),O(v)?-1:P(v)?0:1};function N(v){for(var g=v.g.length,_=[],y=0;y<g;y++)_[y]=~v.g[y];return new a(_,~v.h).add(A)}n.abs=function(){return O(this)?N(this):this},n.add=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],y=0,E=0;E<=g;E++){var w=y+(this.i(E)&65535)+(v.i(E)&65535),m=(w>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=m>>>16,w&=65535,m&=65535,_[E]=m<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function G(v,g){return v.add(N(g))}n.j=function(v){if(P(this)||P(v))return T;if(O(this))return O(v)?N(this).j(N(v)):N(N(this).j(v));if(O(v))return N(this.j(N(v)));if(0>this.l(S)&&0>v.l(S))return d(this.m()*v.m());for(var g=this.g.length+v.g.length,_=[],y=0;y<2*g;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var w=this.i(y)>>>16,m=this.i(y)&65535,Ue=v.i(E)>>>16,cn=v.i(E)&65535;_[2*y+2*E]+=m*cn,z(_,2*y+2*E),_[2*y+2*E+1]+=w*cn,z(_,2*y+2*E+1),_[2*y+2*E+1]+=m*Ue,z(_,2*y+2*E+1),_[2*y+2*E+2]+=w*Ue,z(_,2*y+2*E+2)}for(y=0;y<g;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=g;y<2*g;y++)_[y]=0;return new a(_,0)};function z(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function K(v,g){this.g=v,this.h=g}function ee(v,g){if(P(g))throw Error("division by zero");if(P(v))return new K(T,T);if(O(v))return g=ee(N(v),g),new K(N(g.g),N(g.h));if(O(g))return g=ee(v,N(g)),new K(N(g.g),g.h);if(30<v.g.length){if(O(v)||O(g))throw Error("slowDivide_ only works with positive integers.");for(var _=A,y=g;0>=y.l(v);)_=Ae(_),y=Ae(y);var E=te(_,1),w=te(y,1);for(y=te(y,2),_=te(_,2);!P(y);){var m=w.add(y);0>=m.l(v)&&(E=E.add(_),w=m),y=te(y,1),_=te(_,1)}return g=G(v,E.j(g)),new K(E,g)}for(E=T;0<=v.l(g);){for(_=Math.max(1,Math.floor(v.m()/g.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=d(_),m=w.j(g);O(m)||0<m.l(v);)_-=y,w=d(_),m=w.j(g);P(w)&&(w=A),E=E.add(w),v=G(v,m)}return new K(E,v)}n.A=function(v){return ee(this,v).h},n.and=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],y=0;y<g;y++)_[y]=this.i(y)&v.i(y);return new a(_,this.h&v.h)},n.or=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],y=0;y<g;y++)_[y]=this.i(y)|v.i(y);return new a(_,this.h|v.h)},n.xor=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],y=0;y<g;y++)_[y]=this.i(y)^v.i(y);return new a(_,this.h^v.h)};function Ae(v){for(var g=v.g.length+1,_=[],y=0;y<g;y++)_[y]=v.i(y)<<1|v.i(y-1)>>>31;return new a(_,v.h)}function te(v,g){var _=g>>5;g%=32;for(var y=v.g.length-_,E=[],w=0;w<y;w++)E[w]=0<g?v.i(w+_)>>>g|v.i(w+_+1)<<32-g:v.i(w+_);return new a(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Bl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Rt=a}).apply(typeof ac<"u"?ac:typeof self<"u"?self:typeof window<"u"?window:{});var Rr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jl,Sn,$l,Vr,ss,ql,Hl,Gl;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,u){return s==Array.prototype||s==Object.prototype||(s[c]=u.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Rr=="object"&&Rr];for(var c=0;c<s.length;++c){var u=s[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=t(this);function i(s,c){if(c)e:{var u=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var I=s[f];if(!(I in u))break e;u=u[I]}s=s[s.length-1],f=u[s],c=c(f),c!=f&&c!=null&&e(u,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var u=0,f=!1,I={next:function(){if(!f&&u<s.length){var R=u++;return{value:c(R,s[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function h(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function d(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function p(s,c,u){return s.call.apply(s.bind,arguments)}function T(s,c,u){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),s.apply(c,I)}}return function(){return s.apply(c,arguments)}}function A(s,c,u){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:T,A.apply(null,arguments)}function S(s,c){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function P(s,c){function u(){}u.prototype=c.prototype,s.aa=c.prototype,s.prototype=new u,s.prototype.constructor=s,s.Qb=function(f,I,R){for(var k=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)k[Q-2]=arguments[Q];return c.prototype[I].apply(f,k)}}function O(s){const c=s.length;if(0<c){const u=Array(c);for(let f=0;f<c;f++)u[f]=s[f];return u}return[]}function N(s,c){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const I=s.length||0,R=f.length||0;s.length=I+R;for(let k=0;k<R;k++)s[I+k]=f[k]}else s.push(f)}}class G{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function z(s){return/^[\s\xa0]*$/.test(s)}function K(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function ee(s){return ee[" "](s),s}ee[" "]=function(){};var Ae=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function te(s,c,u){for(const f in s)c.call(u,s[f],f,s)}function v(s,c){for(const u in s)c.call(void 0,s[u],u,s)}function g(s){const c={};for(const u in s)c[u]=s[u];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,c){let u,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(u in f)s[u]=f[u];for(let R=0;R<_.length;R++)u=_[R],Object.prototype.hasOwnProperty.call(f,u)&&(s[u]=f[u])}}function E(s){var c=1;s=s.split(":");const u=[];for(;0<c&&s.length;)u.push(s.shift()),c--;return s.length&&u.push(s.join(":")),u}function w(s){l.setTimeout(()=>{throw s},0)}function m(){var s=gi;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class Ue{constructor(){this.h=this.g=null}add(c,u){const f=cn.get();f.set(c,u),this.h?this.h.next=f:this.g=f,this.h=f}}var cn=new G(()=>new dh,s=>s.reset());class dh{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let ln,un=!1,gi=new Ue,mo=()=>{const s=l.Promise.resolve(void 0);ln=()=>{s.then(fh)}};var fh=()=>{for(var s;s=m();){try{s.h.call(s.g)}catch(u){w(u)}var c=cn;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}un=!1};function Xe(){this.s=this.s,this.C=this.C}Xe.prototype.s=!1,Xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var ph=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};l.addEventListener("test",u,c),l.removeEventListener("test",u,c)}catch{}return s}();function hn(s,c){if(de.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var u=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(Ae){e:{try{ee(c.nodeName);var I=!0;break e}catch{}I=!1}I||(c=null)}}else u=="mouseover"?c=s.fromElement:u=="mouseout"&&(c=s.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:gh[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&hn.aa.h.call(this)}}P(hn,de);var gh={2:"touch",3:"pen",4:"mouse"};hn.prototype.h=function(){hn.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var sr="closure_listenable_"+(1e6*Math.random()|0),mh=0;function _h(s,c,u,f,I){this.listener=s,this.proxy=null,this.src=c,this.type=u,this.capture=!!f,this.ha=I,this.key=++mh,this.da=this.fa=!1}function or(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function ar(s){this.src=s,this.g={},this.h=0}ar.prototype.add=function(s,c,u,f,I){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var k=_i(s,c,f,I);return-1<k?(c=s[k],u||(c.fa=!1)):(c=new _h(c,this.src,R,!!f,I),c.fa=u,s.push(c)),c};function mi(s,c){var u=c.type;if(u in s.g){var f=s.g[u],I=Array.prototype.indexOf.call(f,c,void 0),R;(R=0<=I)&&Array.prototype.splice.call(f,I,1),R&&(or(c),s.g[u].length==0&&(delete s.g[u],s.h--))}}function _i(s,c,u,f){for(var I=0;I<s.length;++I){var R=s[I];if(!R.da&&R.listener==c&&R.capture==!!u&&R.ha==f)return I}return-1}var yi="closure_lm_"+(1e6*Math.random()|0),vi={};function _o(s,c,u,f,I){if(Array.isArray(c)){for(var R=0;R<c.length;R++)_o(s,c[R],u,f,I);return null}return u=Eo(u),s&&s[sr]?s.K(c,u,d(f)?!!f.capture:!1,I):yh(s,c,u,!1,f,I)}function yh(s,c,u,f,I,R){if(!c)throw Error("Invalid event type");var k=d(I)?!!I.capture:!!I,Q=Ii(s);if(Q||(s[yi]=Q=new ar(s)),u=Q.add(c,u,f,k,R),u.proxy)return u;if(f=vh(),u.proxy=f,f.src=s,f.listener=u,s.addEventListener)ph||(I=k),I===void 0&&(I=!1),s.addEventListener(c.toString(),f,I);else if(s.attachEvent)s.attachEvent(vo(c.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function vh(){function s(u){return c.call(s.src,s.listener,u)}const c=Eh;return s}function yo(s,c,u,f,I){if(Array.isArray(c))for(var R=0;R<c.length;R++)yo(s,c[R],u,f,I);else f=d(f)?!!f.capture:!!f,u=Eo(u),s&&s[sr]?(s=s.i,c=String(c).toString(),c in s.g&&(R=s.g[c],u=_i(R,u,f,I),-1<u&&(or(R[u]),Array.prototype.splice.call(R,u,1),R.length==0&&(delete s.g[c],s.h--)))):s&&(s=Ii(s))&&(c=s.g[c.toString()],s=-1,c&&(s=_i(c,u,f,I)),(u=-1<s?c[s]:null)&&Ei(u))}function Ei(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[sr])mi(c.i,s);else{var u=s.type,f=s.proxy;c.removeEventListener?c.removeEventListener(u,f,s.capture):c.detachEvent?c.detachEvent(vo(u),f):c.addListener&&c.removeListener&&c.removeListener(f),(u=Ii(c))?(mi(u,s),u.h==0&&(u.src=null,c[yi]=null)):or(s)}}}function vo(s){return s in vi?vi[s]:vi[s]="on"+s}function Eh(s,c){if(s.da)s=!0;else{c=new hn(c,this);var u=s.listener,f=s.ha||s.src;s.fa&&Ei(s),s=u.call(f,c)}return s}function Ii(s){return s=s[yi],s instanceof ar?s:null}var Ti="__closure_events_fn_"+(1e9*Math.random()>>>0);function Eo(s){return typeof s=="function"?s:(s[Ti]||(s[Ti]=function(c){return s.handleEvent(c)}),s[Ti])}function fe(){Xe.call(this),this.i=new ar(this),this.M=this,this.F=null}P(fe,Xe),fe.prototype[sr]=!0,fe.prototype.removeEventListener=function(s,c,u,f){yo(this,s,c,u,f)};function Ie(s,c){var u,f=s.F;if(f)for(u=[];f;f=f.F)u.push(f);if(s=s.M,f=c.type||c,typeof c=="string")c=new de(c,s);else if(c instanceof de)c.target=c.target||s;else{var I=c;c=new de(f,s),y(c,I)}if(I=!0,u)for(var R=u.length-1;0<=R;R--){var k=c.g=u[R];I=cr(k,f,!0,c)&&I}if(k=c.g=s,I=cr(k,f,!0,c)&&I,I=cr(k,f,!1,c)&&I,u)for(R=0;R<u.length;R++)k=c.g=u[R],I=cr(k,f,!1,c)&&I}fe.prototype.N=function(){if(fe.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var u=s.g[c],f=0;f<u.length;f++)or(u[f]);delete s.g[c],s.h--}}this.F=null},fe.prototype.K=function(s,c,u,f){return this.i.add(String(s),c,!1,u,f)},fe.prototype.L=function(s,c,u,f){return this.i.add(String(s),c,!0,u,f)};function cr(s,c,u,f){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var I=!0,R=0;R<c.length;++R){var k=c[R];if(k&&!k.da&&k.capture==u){var Q=k.listener,ae=k.ha||k.src;k.fa&&mi(s.i,k),I=Q.call(ae,f)!==!1&&I}}return I&&!f.defaultPrevented}function Io(s,c,u){if(typeof s=="function")u&&(s=A(s,u));else if(s&&typeof s.handleEvent=="function")s=A(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(s,c||0)}function To(s){s.g=Io(()=>{s.g=null,s.i&&(s.i=!1,To(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class Ih extends Xe{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:To(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dn(s){Xe.call(this),this.h=s,this.g={}}P(dn,Xe);var wo=[];function Ao(s){te(s.g,function(c,u){this.g.hasOwnProperty(u)&&Ei(c)},s),s.g={}}dn.prototype.N=function(){dn.aa.N.call(this),Ao(this)},dn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wi=l.JSON.stringify,Th=l.JSON.parse,wh=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function Ai(){}Ai.prototype.h=null;function Ro(s){return s.h||(s.h=s.i())}function So(){}var fn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ri(){de.call(this,"d")}P(Ri,de);function Si(){de.call(this,"c")}P(Si,de);var _t={},Co=null;function lr(){return Co=Co||new fe}_t.La="serverreachability";function bo(s){de.call(this,_t.La,s)}P(bo,de);function pn(s){const c=lr();Ie(c,new bo(c))}_t.STAT_EVENT="statevent";function Po(s,c){de.call(this,_t.STAT_EVENT,s),this.stat=c}P(Po,de);function Te(s){const c=lr();Ie(c,new Po(c,s))}_t.Ma="timingevent";function ko(s,c){de.call(this,_t.Ma,s),this.size=c}P(ko,de);function gn(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},c)}function mn(){this.g=!0}mn.prototype.xa=function(){this.g=!1};function Ah(s,c,u,f,I,R){s.info(function(){if(s.g)if(R)for(var k="",Q=R.split("&"),ae=0;ae<Q.length;ae++){var q=Q[ae].split("=");if(1<q.length){var pe=q[0];q=q[1];var ge=pe.split("_");k=2<=ge.length&&ge[1]=="type"?k+(pe+"="+q+"&"):k+(pe+"=redacted&")}}else k=null;else k=R;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+c+`
`+u+`
`+k})}function Rh(s,c,u,f,I,R,k){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+c+`
`+u+`
`+R+" "+k})}function Vt(s,c,u,f){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+Ch(s,u)+(f?" "+f:"")})}function Sh(s,c){s.info(function(){return"TIMEOUT: "+c})}mn.prototype.info=function(){};function Ch(s,c){if(!s.g)return c;if(!c)return null;try{var u=JSON.parse(c);if(u){for(s=0;s<u.length;s++)if(Array.isArray(u[s])){var f=u[s];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var R=I[0];if(R!="noop"&&R!="stop"&&R!="close")for(var k=1;k<I.length;k++)I[k]=""}}}}return wi(u)}catch{return c}}var ur={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},No={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ci;function hr(){}P(hr,Ai),hr.prototype.g=function(){return new XMLHttpRequest},hr.prototype.i=function(){return{}},Ci=new hr;function Ze(s,c,u,f){this.j=s,this.i=c,this.l=u,this.R=f||1,this.U=new dn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Oo}function Oo(){this.i=null,this.g="",this.h=!1}var Do={},bi={};function Pi(s,c,u){s.L=1,s.v=gr(Fe(c)),s.m=u,s.P=!0,Vo(s,null)}function Vo(s,c){s.F=Date.now(),dr(s),s.A=Fe(s.v);var u=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),Wo(u.i,"t",f),s.C=0,u=s.j.J,s.h=new Oo,s.g=da(s.j,u?c:null,!s.m),0<s.O&&(s.M=new Ih(A(s.Y,s,s.g),s.O)),c=s.U,u=s.g,f=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(wo[0]=I.toString()),I=wo);for(var R=0;R<I.length;R++){var k=_o(u,I[R],f||c.handleEvent,!1,c.h||c);if(!k)break;c.g[k.key]=k}c=s.H?g(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),pn(),Ah(s.i,s.u,s.A,s.l,s.R,s.m)}Ze.prototype.ca=function(s){s=s.target;const c=this.M;c&&Be(s)==3?c.j():this.Y(s)},Ze.prototype.Y=function(s){try{if(s==this.g)e:{const ge=Be(this.g);var c=this.g.Ba();const xt=this.g.Z();if(!(3>ge)&&(ge!=3||this.g&&(this.h.h||this.g.oa()||ta(this.g)))){this.J||ge!=4||c==7||(c==8||0>=xt?pn(3):pn(2)),ki(this);var u=this.g.Z();this.X=u;t:if(Mo(this)){var f=ta(this.g);s="";var I=f.length,R=Be(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yt(this),_n(this);var k="";break t}this.h.i=new l.TextDecoder}for(c=0;c<I;c++)this.h.h=!0,s+=this.h.i.decode(f[c],{stream:!(R&&c==I-1)});f.length=0,this.h.g+=s,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=u==200,Rh(this.i,this.u,this.A,this.l,this.R,ge,u),this.o){if(this.T&&!this.K){t:{if(this.g){var Q,ae=this.g;if((Q=ae.g?ae.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(Q)){var q=Q;break t}}q=null}if(u=q)Vt(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ni(this,u);else{this.o=!1,this.s=3,Te(12),yt(this),_n(this);break e}}if(this.P){u=!0;let be;for(;!this.J&&this.C<k.length;)if(be=bh(this,k),be==bi){ge==4&&(this.s=4,Te(14),u=!1),Vt(this.i,this.l,null,"[Incomplete Response]");break}else if(be==Do){this.s=4,Te(15),Vt(this.i,this.l,k,"[Invalid Chunk]"),u=!1;break}else Vt(this.i,this.l,be,null),Ni(this,be);if(Mo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ge!=4||k.length!=0||this.h.h||(this.s=1,Te(16),u=!1),this.o=this.o&&u,!u)Vt(this.i,this.l,k,"[Invalid Chunked Response]"),yt(this),_n(this);else if(0<k.length&&!this.W){this.W=!0;var pe=this.j;pe.g==this&&pe.ba&&!pe.M&&(pe.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),xi(pe),pe.M=!0,Te(11))}}else Vt(this.i,this.l,k,null),Ni(this,k);ge==4&&yt(this),this.o&&!this.J&&(ge==4?ca(this.j,this):(this.o=!1,dr(this)))}else Gh(this.g),u==400&&0<k.indexOf("Unknown SID")?(this.s=3,Te(12)):(this.s=0,Te(13)),yt(this),_n(this)}}}catch{}finally{}};function Mo(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function bh(s,c){var u=s.C,f=c.indexOf(`
`,u);return f==-1?bi:(u=Number(c.substring(u,f)),isNaN(u)?Do:(f+=1,f+u>c.length?bi:(c=c.slice(f,f+u),s.C=f+u,c)))}Ze.prototype.cancel=function(){this.J=!0,yt(this)};function dr(s){s.S=Date.now()+s.I,Lo(s,s.I)}function Lo(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=gn(A(s.ba,s),c)}function ki(s){s.B&&(l.clearTimeout(s.B),s.B=null)}Ze.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Sh(this.i,this.A),this.L!=2&&(pn(),Te(17)),yt(this),this.s=2,_n(this)):Lo(this,this.S-s)};function _n(s){s.j.G==0||s.J||ca(s.j,s)}function yt(s){ki(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,Ao(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function Ni(s,c){try{var u=s.j;if(u.G!=0&&(u.g==s||Oi(u.h,s))){if(!s.K&&Oi(u.h,s)&&u.G==3){try{var f=u.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<s.F)Ir(u),vr(u);else break e;Li(u),Te(18)}}else u.za=I[1],0<u.za-u.T&&37500>I[2]&&u.F&&u.v==0&&!u.C&&(u.C=gn(A(u.Za,u),6e3));if(1>=Fo(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Et(u,11)}else if((s.K||u.g==s)&&Ir(u),!z(c))for(I=u.Da.g.parse(c),c=0;c<I.length;c++){let q=I[c];if(u.T=q[0],q=q[1],u.G==2)if(q[0]=="c"){u.K=q[1],u.ia=q[2];const pe=q[3];pe!=null&&(u.la=pe,u.j.info("VER="+u.la));const ge=q[4];ge!=null&&(u.Aa=ge,u.j.info("SVER="+u.Aa));const xt=q[5];xt!=null&&typeof xt=="number"&&0<xt&&(f=1.5*xt,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const be=s.g;if(be){const wr=be.g?be.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wr){var R=f.h;R.g||wr.indexOf("spdy")==-1&&wr.indexOf("quic")==-1&&wr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Di(R,R.h),R.h=null))}if(f.D){const Ui=be.g?be.g.getResponseHeader("X-HTTP-Session-Id"):null;Ui&&(f.ya=Ui,Y(f.I,f.D,Ui))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-s.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var k=s;if(f.qa=ha(f,f.J?f.ia:null,f.W),k.K){Bo(f.h,k);var Q=k,ae=f.L;ae&&(Q.I=ae),Q.B&&(ki(Q),dr(Q)),f.g=k}else oa(f);0<u.i.length&&Er(u)}else q[0]!="stop"&&q[0]!="close"||Et(u,7);else u.G==3&&(q[0]=="stop"||q[0]=="close"?q[0]=="stop"?Et(u,7):Mi(u):q[0]!="noop"&&u.l&&u.l.ta(q),u.v=0)}}pn(4)}catch{}}var Ph=class{constructor(s,c){this.g=s,this.map=c}};function xo(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Uo(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Fo(s){return s.h?1:s.g?s.g.size:0}function Oi(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function Di(s,c){s.g?s.g.add(c):s.h=c}function Bo(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}xo.prototype.cancel=function(){if(this.i=jo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function jo(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const u of s.g.values())c=c.concat(u.D);return c}return O(s.i)}function kh(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var c=[],u=s.length,f=0;f<u;f++)c.push(s[f]);return c}c=[],u=0;for(f in s)c[u++]=s[f];return c}function Nh(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var c=[];s=s.length;for(var u=0;u<s;u++)c.push(u);return c}c=[],u=0;for(const f in s)c[u++]=f;return c}}}function $o(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var u=Nh(s),f=kh(s),I=f.length,R=0;R<I;R++)c.call(void 0,f[R],u&&u[R],s)}var qo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Oh(s,c){if(s){s=s.split("&");for(var u=0;u<s.length;u++){var f=s[u].indexOf("="),I=null;if(0<=f){var R=s[u].substring(0,f);I=s[u].substring(f+1)}else R=s[u];c(R,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function vt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof vt){this.h=s.h,fr(this,s.j),this.o=s.o,this.g=s.g,pr(this,s.s),this.l=s.l;var c=s.i,u=new En;u.i=c.i,c.g&&(u.g=new Map(c.g),u.h=c.h),Ho(this,u),this.m=s.m}else s&&(c=String(s).match(qo))?(this.h=!1,fr(this,c[1]||"",!0),this.o=yn(c[2]||""),this.g=yn(c[3]||"",!0),pr(this,c[4]),this.l=yn(c[5]||"",!0),Ho(this,c[6]||"",!0),this.m=yn(c[7]||"")):(this.h=!1,this.i=new En(null,this.h))}vt.prototype.toString=function(){var s=[],c=this.j;c&&s.push(vn(c,Go,!0),":");var u=this.g;return(u||c=="file")&&(s.push("//"),(c=this.o)&&s.push(vn(c,Go,!0),"@"),s.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&s.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(vn(u,u.charAt(0)=="/"?Mh:Vh,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",vn(u,xh)),s.join("")};function Fe(s){return new vt(s)}function fr(s,c,u){s.j=u?yn(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function pr(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function Ho(s,c,u){c instanceof En?(s.i=c,Uh(s.i,s.h)):(u||(c=vn(c,Lh)),s.i=new En(c,s.h))}function Y(s,c,u){s.i.set(c,u)}function gr(s){return Y(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function yn(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function vn(s,c,u){return typeof s=="string"?(s=encodeURI(s).replace(c,Dh),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Dh(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Go=/[#\/\?@]/g,Vh=/[#\?:]/g,Mh=/[#\?]/g,Lh=/[#\?@]/g,xh=/#/g;function En(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function et(s){s.g||(s.g=new Map,s.h=0,s.i&&Oh(s.i,function(c,u){s.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=En.prototype,n.add=function(s,c){et(this),this.i=null,s=Mt(this,s);var u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(c),this.h+=1,this};function zo(s,c){et(s),c=Mt(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function Ko(s,c){return et(s),c=Mt(s,c),s.g.has(c)}n.forEach=function(s,c){et(this),this.g.forEach(function(u,f){u.forEach(function(I){s.call(c,I,f,this)},this)},this)},n.na=function(){et(this);const s=Array.from(this.g.values()),c=Array.from(this.g.keys()),u=[];for(let f=0;f<c.length;f++){const I=s[f];for(let R=0;R<I.length;R++)u.push(c[f])}return u},n.V=function(s){et(this);let c=[];if(typeof s=="string")Ko(this,s)&&(c=c.concat(this.g.get(Mt(this,s))));else{s=Array.from(this.g.values());for(let u=0;u<s.length;u++)c=c.concat(s[u])}return c},n.set=function(s,c){return et(this),this.i=null,s=Mt(this,s),Ko(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function Wo(s,c,u){zo(s,c),0<u.length&&(s.i=null,s.g.set(Mt(s,c),O(u)),s.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(var u=0;u<c.length;u++){var f=c[u];const R=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var I=R;k[f]!==""&&(I+="="+encodeURIComponent(String(k[f]))),s.push(I)}}return this.i=s.join("&")};function Mt(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function Uh(s,c){c&&!s.j&&(et(s),s.i=null,s.g.forEach(function(u,f){var I=f.toLowerCase();f!=I&&(zo(this,f),Wo(this,I,u))},s)),s.j=c}function Fh(s,c){const u=new mn;if(l.Image){const f=new Image;f.onload=S(tt,u,"TestLoadImage: loaded",!0,c,f),f.onerror=S(tt,u,"TestLoadImage: error",!1,c,f),f.onabort=S(tt,u,"TestLoadImage: abort",!1,c,f),f.ontimeout=S(tt,u,"TestLoadImage: timeout",!1,c,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else c(!1)}function Bh(s,c){const u=new mn,f=new AbortController,I=setTimeout(()=>{f.abort(),tt(u,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:f.signal}).then(R=>{clearTimeout(I),R.ok?tt(u,"TestPingServer: ok",!0,c):tt(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(I),tt(u,"TestPingServer: error",!1,c)})}function tt(s,c,u,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(u)}catch{}}function jh(){this.g=new wh}function $h(s,c,u){const f=u||"";try{$o(s,function(I,R){let k=I;d(I)&&(k=wi(I)),c.push(f+R+"="+encodeURIComponent(k))})}catch(I){throw c.push(f+"type="+encodeURIComponent("_badmap")),I}}function mr(s){this.l=s.Ub||null,this.j=s.eb||!1}P(mr,Ai),mr.prototype.g=function(){return new _r(this.l,this.j)},mr.prototype.i=function(s){return function(){return s}}({});function _r(s,c){fe.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(_r,fe),n=_r.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,Tn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,In(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Tn(this)),this.g&&(this.readyState=3,Tn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Qo(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Qo(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?In(this):Tn(this),this.readyState==3&&Qo(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,In(this))},n.Qa=function(s){this.g&&(this.response=s,In(this))},n.ga=function(){this.g&&In(this)};function In(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Tn(s)}n.setRequestHeader=function(s,c){this.u.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=c.next();return s.join(`\r
`)};function Tn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(_r.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Yo(s){let c="";return te(s,function(u,f){c+=f,c+=":",c+=u,c+=`\r
`}),c}function Vi(s,c,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=Yo(u),typeof s=="string"?u!=null&&encodeURIComponent(String(u)):Y(s,c,u))}function X(s){fe.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(X,fe);var qh=/^https?$/i,Hh=["POST","PUT"];n=X.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,c,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ci.g(),this.v=this.o?Ro(this.o):Ro(Ci),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(R){Jo(this,R);return}if(s=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)u.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())u.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(R=>R.toLowerCase()=="content-type"),I=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Hh,c,void 0))||f||I||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,k]of u)this.g.setRequestHeader(R,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ea(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){Jo(this,R)}};function Jo(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,Xo(s),yr(s)}function Xo(s){s.A||(s.A=!0,Ie(s,"complete"),Ie(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Ie(this,"complete"),Ie(this,"abort"),yr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yr(this,!0)),X.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Zo(this):this.bb())},n.bb=function(){Zo(this)};function Zo(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Be(s)!=4||s.Z()!=2)){if(s.u&&Be(s)==4)Io(s.Ea,0,s);else if(Ie(s,"readystatechange"),Be(s)==4){s.h=!1;try{const k=s.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var u;if(!(u=c)){var f;if(f=k===0){var I=String(s.D).match(qo)[1]||null;!I&&l.self&&l.self.location&&(I=l.self.location.protocol.slice(0,-1)),f=!qh.test(I?I.toLowerCase():"")}u=f}if(u)Ie(s,"complete"),Ie(s,"success");else{s.m=6;try{var R=2<Be(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",Xo(s)}}finally{yr(s)}}}}function yr(s,c){if(s.g){ea(s);const u=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||Ie(s,"ready");try{u.onreadystatechange=f}catch{}}}function ea(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Be(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Be(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),Th(c)}};function ta(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Gh(s){const c={};s=(s.g&&2<=Be(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(z(s[f]))continue;var u=E(s[f]);const I=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const R=c[I]||[];c[I]=R,R.push(u)}v(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function wn(s,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||c}function na(s){this.Aa=0,this.i=[],this.j=new mn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=wn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=wn("baseRetryDelayMs",5e3,s),this.cb=wn("retryDelaySeedMs",1e4,s),this.Wa=wn("forwardChannelMaxRetries",2,s),this.wa=wn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new xo(s&&s.concurrentRequestLimit),this.Da=new jh,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=na.prototype,n.la=8,n.G=1,n.connect=function(s,c,u,f){Te(0),this.W=s,this.H=c||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=ha(this,null,this.W),Er(this)};function Mi(s){if(ra(s),s.G==3){var c=s.U++,u=Fe(s.I);if(Y(u,"SID",s.K),Y(u,"RID",c),Y(u,"TYPE","terminate"),An(s,u),c=new Ze(s,s.j,c),c.L=2,c.v=gr(Fe(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!u&&l.Image&&(new Image().src=c.v,u=!0),u||(c.g=da(c.j,null),c.g.ea(c.v)),c.F=Date.now(),dr(c)}ua(s)}function vr(s){s.g&&(xi(s),s.g.cancel(),s.g=null)}function ra(s){vr(s),s.u&&(l.clearTimeout(s.u),s.u=null),Ir(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function Er(s){if(!Uo(s.h)&&!s.s){s.s=!0;var c=s.Ga;ln||mo(),un||(ln(),un=!0),gi.add(c,s),s.B=0}}function zh(s,c){return Fo(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=gn(A(s.Ga,s,c),la(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new Ze(this,this.j,s);let R=this.o;if(this.S&&(R?(R=g(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(I.H=R,R=null),this.P)e:{for(var c=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=u;break e}if(c===4096||u===this.i.length-1){c=u+1;break e}}c=1e3}else c=1e3;c=sa(this,I,c),u=Fe(this.I),Y(u,"RID",s),Y(u,"CVER",22),this.D&&Y(u,"X-HTTP-Session-Id",this.D),An(this,u),R&&(this.O?c="headers="+encodeURIComponent(String(Yo(R)))+"&"+c:this.m&&Vi(u,this.m,R)),Di(this.h,I),this.Ua&&Y(u,"TYPE","init"),this.P?(Y(u,"$req",c),Y(u,"SID","null"),I.T=!0,Pi(I,u,null)):Pi(I,u,c),this.G=2}}else this.G==3&&(s?ia(this,s):this.i.length==0||Uo(this.h)||ia(this))};function ia(s,c){var u;c?u=c.l:u=s.U++;const f=Fe(s.I);Y(f,"SID",s.K),Y(f,"RID",u),Y(f,"AID",s.T),An(s,f),s.m&&s.o&&Vi(f,s.m,s.o),u=new Ze(s,s.j,u,s.B+1),s.m===null&&(u.H=s.o),c&&(s.i=c.D.concat(s.i)),c=sa(s,u,1e3),u.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Di(s.h,u),Pi(u,f,c)}function An(s,c){s.H&&te(s.H,function(u,f){Y(c,f,u)}),s.l&&$o({},function(u,f){Y(c,f,u)})}function sa(s,c,u){u=Math.min(s.i.length,u);var f=s.l?A(s.l.Na,s.l,s):null;e:{var I=s.i;let R=-1;for(;;){const k=["count="+u];R==-1?0<u?(R=I[0].g,k.push("ofs="+R)):R=0:k.push("ofs="+R);let Q=!0;for(let ae=0;ae<u;ae++){let q=I[ae].g;const pe=I[ae].map;if(q-=R,0>q)R=Math.max(0,I[ae].g-100),Q=!1;else try{$h(pe,k,"req"+q+"_")}catch{f&&f(pe)}}if(Q){f=k.join("&");break e}}}return s=s.i.splice(0,u),c.D=s,f}function oa(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;ln||mo(),un||(ln(),un=!0),gi.add(c,s),s.v=0}}function Li(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=gn(A(s.Fa,s),la(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,aa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=gn(A(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Te(10),vr(this),aa(this))};function xi(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function aa(s){s.g=new Ze(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=Fe(s.qa);Y(c,"RID","rpc"),Y(c,"SID",s.K),Y(c,"AID",s.T),Y(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&Y(c,"TO",s.ja),Y(c,"TYPE","xmlhttp"),An(s,c),s.m&&s.o&&Vi(c,s.m,s.o),s.L&&(s.g.I=s.L);var u=s.g;s=s.ia,u.L=1,u.v=gr(Fe(c)),u.m=null,u.P=!0,Vo(u,s)}n.Za=function(){this.C!=null&&(this.C=null,vr(this),Li(this),Te(19))};function Ir(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function ca(s,c){var u=null;if(s.g==c){Ir(s),xi(s),s.g=null;var f=2}else if(Oi(s.h,c))u=c.D,Bo(s.h,c),f=1;else return;if(s.G!=0){if(c.o)if(f==1){u=c.m?c.m.length:0,c=Date.now()-c.F;var I=s.B;f=lr(),Ie(f,new ko(f,u)),Er(s)}else oa(s);else if(I=c.s,I==3||I==0&&0<c.X||!(f==1&&zh(s,c)||f==2&&Li(s)))switch(u&&0<u.length&&(c=s.h,c.i=c.i.concat(u)),I){case 1:Et(s,5);break;case 4:Et(s,10);break;case 3:Et(s,6);break;default:Et(s,2)}}}function la(s,c){let u=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(u*=2),u*c}function Et(s,c){if(s.j.info("Error code "+c),c==2){var u=A(s.fb,s),f=s.Xa;const I=!f;f=new vt(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||fr(f,"https"),gr(f),I?Fh(f.toString(),u):Bh(f.toString(),u)}else Te(2);s.G=0,s.l&&s.l.sa(c),ua(s),ra(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Te(2)):(this.j.info("Failed to ping google.com"),Te(1))};function ua(s){if(s.G=0,s.ka=[],s.l){const c=jo(s.h);(c.length!=0||s.i.length!=0)&&(N(s.ka,c),N(s.ka,s.i),s.h.i.length=0,O(s.i),s.i.length=0),s.l.ra()}}function ha(s,c,u){var f=u instanceof vt?Fe(u):new vt(u);if(f.g!="")c&&(f.g=c+"."+f.g),pr(f,f.s);else{var I=l.location;f=I.protocol,c=c?c+"."+I.hostname:I.hostname,I=+I.port;var R=new vt(null);f&&fr(R,f),c&&(R.g=c),I&&pr(R,I),u&&(R.l=u),f=R}return u=s.D,c=s.ya,u&&c&&Y(f,u,c),Y(f,"VER",s.la),An(s,f),f}function da(s,c,u){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new X(new mr({eb:u})):new X(s.pa),c.Ha(s.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function fa(){}n=fa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Tr(){}Tr.prototype.g=function(s,c){return new we(s,c)};function we(s,c){fe.call(this),this.g=new na(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!z(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!z(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new Lt(this)}P(we,fe),we.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},we.prototype.close=function(){Mi(this.g)},we.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.u&&(u={},u.__data__=wi(s),s=u);c.i.push(new Ph(c.Ya++,s)),c.G==3&&Er(c)},we.prototype.N=function(){this.g.l=null,delete this.j,Mi(this.g),delete this.g,we.aa.N.call(this)};function pa(s){Ri.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){e:{for(const u in c){s=u;break e}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}P(pa,Ri);function ga(){Si.call(this),this.status=1}P(ga,Si);function Lt(s){this.g=s}P(Lt,fa),Lt.prototype.ua=function(){Ie(this.g,"a")},Lt.prototype.ta=function(s){Ie(this.g,new pa(s))},Lt.prototype.sa=function(s){Ie(this.g,new ga)},Lt.prototype.ra=function(){Ie(this.g,"b")},Tr.prototype.createWebChannel=Tr.prototype.g,we.prototype.send=we.prototype.o,we.prototype.open=we.prototype.m,we.prototype.close=we.prototype.close,Gl=function(){return new Tr},Hl=function(){return lr()},ql=_t,ss={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ur.NO_ERROR=0,ur.TIMEOUT=8,ur.HTTP_ERROR=6,Vr=ur,No.COMPLETE="complete",$l=No,So.EventType=fn,fn.OPEN="a",fn.CLOSE="b",fn.ERROR="c",fn.MESSAGE="d",fe.prototype.listen=fe.prototype.K,Sn=So,X.prototype.listenOnce=X.prototype.L,X.prototype.getLastError=X.prototype.Ka,X.prototype.getLastErrorCode=X.prototype.Ba,X.prototype.getStatus=X.prototype.Z,X.prototype.getResponseJson=X.prototype.Oa,X.prototype.getResponseText=X.prototype.oa,X.prototype.send=X.prototype.ea,X.prototype.setWithCredentials=X.prototype.Ha,jl=X}).apply(typeof Rr<"u"?Rr:typeof self<"u"?self:typeof window<"u"?window:{});const cc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class _e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_e.UNAUTHENTICATED=new _e(null),_e.GOOGLE_CREDENTIALS=new _e("google-credentials-uid"),_e.FIRST_PARTY=new _e("first-party-uid"),_e.MOCK_USER=new _e("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
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
 */let rn="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Pt=new Es("@firebase/firestore");function Rn(){return Pt.logLevel}function D(n,...e){if(Pt.logLevel<=j.DEBUG){const t=e.map(Vs);Pt.debug(`Firestore (${rn}): ${n}`,...t)}}function Qe(n,...e){if(Pt.logLevel<=j.ERROR){const t=e.map(Vs);Pt.error(`Firestore (${rn}): ${n}`,...t)}}function Wt(n,...e){if(Pt.logLevel<=j.WARN){const t=e.map(Vs);Pt.warn(`Firestore (${rn}): ${n}`,...t)}}function Vs(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function x(n="Unexpected state"){const e=`FIRESTORE (${rn}) INTERNAL ASSERTION FAILED: `+n;throw Qe(e),new Error(e)}function W(n,e){n||x()}function F(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Je{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class dt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class zl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(_e.UNAUTHENTICATED))}shutdown(){}}class om{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class am{constructor(e){this.t=e,this.currentUser=_e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){W(this.o===void 0);let r=this.i;const i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new dt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new dt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},l=h=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new dt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string"),new zl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string"),new _e(e)}}class cm{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=_e.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class lm{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new cm(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(_e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class um{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hm{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){W(this.o===void 0);const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(W(typeof t.token=="string"),this.R=t.token,new um(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function dm(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Kl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=dm(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%e.length))}return r}}function H(n,e){return n<e?-1:n>e?1:0}function Qt(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class se{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new V(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return se.fromMillis(Date.now())}static fromDate(e){return se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new se(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new se(0,0))}static max(){return new U(new se(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Fn{constructor(e,t,r){t===void 0?t=0:t>e.length&&x(),r===void 0?r=e.length-t:r>e.length-t&&x(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Fn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Fn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=e.get(i),a=t.get(i);if(o<a)return-1;if(o>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Z extends Fn{construct(e,t,r){return new Z(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Z(t)}static emptyPath(){return new Z([])}}const fm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class le extends Fn{construct(e,t,r){return new le(e,t,r)}static isValidIdentifier(e){return fm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),le.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new le(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new V(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new V(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new V(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(o(),i++)}if(o(),a)throw new V(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new le(t)}static emptyPath(){return new le([])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(Z.fromString(e))}static fromName(e){return new M(Z.fromString(e).popFirst(5))}static empty(){return new M(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new Z(e.slice()))}}function pm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=U.fromTimestamp(r===1e9?new se(t+1,0):new se(t,r));return new ft(i,M.empty(),e)}function gm(n){return new ft(n.readTime,n.key,-1)}class ft{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ft(U.min(),M.empty(),-1)}static max(){return new ft(U.max(),M.empty(),-1)}}function mm(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:H(n.largestBatchId,e.largestBatchId))}/**
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
 */const _m="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ym{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */async function Zn(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==_m)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):C.reject(t)}static resolve(e){return new C((t,r)=>{t(e)})}static reject(e){return new C((t,r)=>{r(e)})}static waitFor(e){return new C((t,r)=>{let i=0,o=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++o,a&&o===i&&t()},h=>r(h))}),a=!0,o===i&&t()})}static or(e){let t=C.resolve(!1);for(const r of e)t=t.next(i=>i?C.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new C((r,i)=>{const o=e.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(p=>{a[d]=p,++l,l===o&&r(a)},p=>i(p))}})}static doWhile(e,t){return new C((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function vm(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function er(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ms{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ms.oe=-1;function si(n){return n==null}function zr(n){return n===0&&1/n==-1/0}function Em(n){return typeof n=="number"&&Number.isInteger(n)&&!zr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function lc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function sn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Wl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class J{constructor(e,t){this.comparator=e,this.root=t||ce.EMPTY}insert(e,t){return new J(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ce.BLACK,null,null))}remove(e){return new J(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ce.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sr(this.root,e,this.comparator,!0)}}class Sr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ce{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??ce.RED,this.left=i??ce.EMPTY,this.right=o??ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new ce(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ce.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const e=this.left.check();if(e!==this.right.check())throw x();return e+(this.isRed()?0:1)}}ce.EMPTY=null,ce.RED=!0,ce.BLACK=!1;ce.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(e,t,r,i,o){return this}insert(e,t,r){return new ce(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ue{constructor(e){this.comparator=e,this.data=new J(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new uc(this.data.getIterator())}getIteratorFrom(e){return new uc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ue)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ue(this.comparator);return t.data=e,t}}class uc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pe{constructor(e){this.fields=e,e.sort(le.comparator)}static empty(){return new Pe([])}unionWith(e){let t=new ue(le.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Pe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Qt(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Ql extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class he{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ql("Invalid base64 string: "+o):o}}(e);return new he(t)}static fromUint8Array(e){const t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new he(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}he.EMPTY_BYTE_STRING=new he("");const Im=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pt(n){if(W(!!n),typeof n=="string"){let e=0;const t=Im.exec(n);if(W(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ne(n.seconds),nanos:ne(n.nanos)}}function ne(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function kt(n){return typeof n=="string"?he.fromBase64String(n):he.fromUint8Array(n)}/**
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
 */function Ls(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function xs(n){const e=n.mapValue.fields.__previous_value__;return Ls(e)?xs(e):e}function Bn(n){const e=pt(n.mapValue.fields.__local_write_time__.timestampValue);return new se(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Tm{constructor(e,t,r,i,o,a,l,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d}}class jn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new jn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof jn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Cr={mapValue:{}};function Nt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ls(n)?4:Am(n)?9007199254740991:wm(n)?10:11:x()}function Le(n,e){if(n===e)return!0;const t=Nt(n);if(t!==Nt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Bn(n).isEqual(Bn(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=pt(i.timestampValue),l=pt(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return kt(i.bytesValue).isEqual(kt(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return ne(i.geoPointValue.latitude)===ne(o.geoPointValue.latitude)&&ne(i.geoPointValue.longitude)===ne(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ne(i.integerValue)===ne(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=ne(i.doubleValue),l=ne(o.doubleValue);return a===l?zr(a)===zr(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Qt(n.arrayValue.values||[],e.arrayValue.values||[],Le);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(lc(a)!==lc(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Le(a[h],l[h])))return!1;return!0}(n,e);default:return x()}}function $n(n,e){return(n.values||[]).find(t=>Le(t,e))!==void 0}function Yt(n,e){if(n===e)return 0;const t=Nt(n),r=Nt(e);if(t!==r)return H(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,e.booleanValue);case 2:return function(o,a){const l=ne(o.integerValue||o.doubleValue),h=ne(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,e);case 3:return hc(n.timestampValue,e.timestampValue);case 4:return hc(Bn(n),Bn(e));case 5:return H(n.stringValue,e.stringValue);case 6:return function(o,a){const l=kt(o),h=kt(a);return l.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const p=H(l[d],h[d]);if(p!==0)return p}return H(l.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const l=H(ne(o.latitude),ne(a.latitude));return l!==0?l:H(ne(o.longitude),ne(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return dc(n.arrayValue,e.arrayValue);case 10:return function(o,a){var l,h,d,p;const T=o.fields||{},A=a.fields||{},S=(l=T.value)===null||l===void 0?void 0:l.arrayValue,P=(h=A.value)===null||h===void 0?void 0:h.arrayValue,O=H(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((p=P==null?void 0:P.values)===null||p===void 0?void 0:p.length)||0);return O!==0?O:dc(S,P)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===Cr.mapValue&&a===Cr.mapValue)return 0;if(o===Cr.mapValue)return 1;if(a===Cr.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let T=0;T<h.length&&T<p.length;++T){const A=H(h[T],p[T]);if(A!==0)return A;const S=Yt(l[h[T]],d[p[T]]);if(S!==0)return S}return H(h.length,p.length)}(n.mapValue,e.mapValue);default:throw x()}}function hc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return H(n,e);const t=pt(n),r=pt(e),i=H(t.seconds,r.seconds);return i!==0?i:H(t.nanos,r.nanos)}function dc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=Yt(t[i],r[i]);if(o)return o}return H(t.length,r.length)}function Jt(n){return os(n)}function os(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=pt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return kt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return M.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=os(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${os(t.fields[a])}`;return i+"}"}(n.mapValue):x()}function as(n){return!!n&&"integerValue"in n}function Us(n){return!!n&&"arrayValue"in n}function fc(n){return!!n&&"nullValue"in n}function pc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Mr(n){return!!n&&"mapValue"in n}function wm(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Nn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return sn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Nn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Nn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Am(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Re{constructor(e){this.value=e}static empty(){return new Re({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Mr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Nn(t)}setAll(e){let t=le.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=Nn(a):i.push(l.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());Mr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Le(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Mr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){sn(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Re(Nn(this.value))}}function Yl(n){const e=[];return sn(n.fields,(t,r)=>{const i=new le([t]);if(Mr(r)){const o=Yl(r.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)}),new Pe(e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ye{constructor(e,t,r,i,o,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(e){return new ye(e,0,U.min(),U.min(),U.min(),Re.empty(),0)}static newFoundDocument(e,t,r,i){return new ye(e,1,t,U.min(),r,i,0)}static newNoDocument(e,t){return new ye(e,2,t,U.min(),U.min(),Re.empty(),0)}static newUnknownDocument(e,t){return new ye(e,3,t,U.min(),U.min(),Re.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Re.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Re.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Kr{constructor(e,t){this.position=e,this.inclusive=t}}function gc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),t.key):r=Yt(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function mc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Le(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Wr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Rm(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Jl{}class ie extends Jl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Cm(e,t,r):t==="array-contains"?new km(e,r):t==="in"?new Nm(e,r):t==="not-in"?new Om(e,r):t==="array-contains-any"?new Dm(e,r):new ie(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new bm(e,r):new Pm(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Yt(t,this.value)):t!==null&&Nt(this.value)===Nt(t)&&this.matchesComparison(Yt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xe extends Jl{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new xe(e,t)}matches(e){return Xl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Xl(n){return n.op==="and"}function Zl(n){return Sm(n)&&Xl(n)}function Sm(n){for(const e of n.filters)if(e instanceof xe)return!1;return!0}function cs(n){if(n instanceof ie)return n.field.canonicalString()+n.op.toString()+Jt(n.value);if(Zl(n))return n.filters.map(e=>cs(e)).join(",");{const e=n.filters.map(t=>cs(t)).join(",");return`${n.op}(${e})`}}function eu(n,e){return n instanceof ie?function(r,i){return i instanceof ie&&r.op===i.op&&r.field.isEqual(i.field)&&Le(r.value,i.value)}(n,e):n instanceof xe?function(r,i){return i instanceof xe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,l)=>o&&eu(a,i.filters[l]),!0):!1}(n,e):void x()}function tu(n){return n instanceof ie?function(t){return`${t.field.canonicalString()} ${t.op} ${Jt(t.value)}`}(n):n instanceof xe?function(t){return t.op.toString()+" {"+t.getFilters().map(tu).join(" ,")+"}"}(n):"Filter"}class Cm extends ie{constructor(e,t,r){super(e,t,r),this.key=M.fromName(r.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class bm extends ie{constructor(e,t){super(e,"in",t),this.keys=nu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Pm extends ie{constructor(e,t){super(e,"not-in",t),this.keys=nu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function nu(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>M.fromName(r.referenceValue))}class km extends ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Us(t)&&$n(t.arrayValue,this.value)}}class Nm extends ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$n(this.value.arrayValue,t)}}class Om extends ie{constructor(e,t){super(e,"not-in",t)}matches(e){if($n(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!$n(this.value.arrayValue,t)}}class Dm extends ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Us(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>$n(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Vm{constructor(e,t=null,r=[],i=[],o=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.ue=null}}function _c(n,e=null,t=[],r=[],i=null,o=null,a=null){return new Vm(n,e,t,r,i,o,a)}function Fs(n){const e=F(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>cs(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),si(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Jt(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Jt(r)).join(",")),e.ue=t}return e.ue}function Bs(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Rm(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!eu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!mc(n.startAt,e.startAt)&&mc(n.endAt,e.endAt)}function ls(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class oi{constructor(e,t=null,r=[],i=[],o=null,a="F",l=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Mm(n,e,t,r,i,o,a,l){return new oi(n,e,t,r,i,o,a,l)}function js(n){return new oi(n)}function yc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Lm(n){return n.collectionGroup!==null}function On(n){const e=F(n);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ue(le.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Wr(o,r))}),t.has(le.keyField().canonicalString())||e.ce.push(new Wr(le.keyField(),r))}return e.ce}function De(n){const e=F(n);return e.le||(e.le=xm(e,On(n))),e.le}function xm(n,e){if(n.limitType==="F")return _c(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Wr(i.field,o)});const t=n.endAt?new Kr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Kr(n.startAt.position,n.startAt.inclusive):null;return _c(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function us(n,e,t){return new oi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ai(n,e){return Bs(De(n),De(e))&&n.limitType===e.limitType}function ru(n){return`${Fs(De(n))}|lt:${n.limitType}`}function Ft(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>tu(i)).join(", ")}]`),si(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Jt(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Jt(i)).join(",")),`Target(${r})`}(De(n))}; limitType=${n.limitType})`}function ci(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of On(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,h){const d=gc(a,l,h);return a.inclusive?d<=0:d<0}(r.startAt,On(r),i)||r.endAt&&!function(a,l,h){const d=gc(a,l,h);return a.inclusive?d>=0:d>0}(r.endAt,On(r),i))}(n,e)}function Um(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function iu(n){return(e,t)=>{let r=!1;for(const i of On(n)){const o=Fm(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Fm(n,e,t){const r=n.field.isKeyField()?M.comparator(e.key,t.key):function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?Yt(h,d):x()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class on{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){sn(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return Wl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Bm=new J(M.comparator);function Ye(){return Bm}const su=new J(M.comparator);function Cn(...n){let e=su;for(const t of n)e=e.insert(t.key,t);return e}function ou(n){let e=su;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function wt(){return Dn()}function au(){return Dn()}function Dn(){return new on(n=>n.toString(),(n,e)=>n.isEqual(e))}const jm=new J(M.comparator),$m=new ue(M.comparator);function B(...n){let e=$m;for(const t of n)e=e.add(t);return e}const qm=new ue(H);function Hm(){return qm}/**
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
 */function $s(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zr(e)?"-0":e}}function cu(n){return{integerValue:""+n}}function Gm(n,e){return Em(e)?cu(e):$s(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class li{constructor(){this._=void 0}}function zm(n,e,t){return n instanceof Qr?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Ls(o)&&(o=xs(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(t,e):n instanceof qn?uu(n,e):n instanceof Hn?hu(n,e):function(i,o){const a=lu(i,o),l=vc(a)+vc(i.Pe);return as(a)&&as(i.Pe)?cu(l):$s(i.serializer,l)}(n,e)}function Km(n,e,t){return n instanceof qn?uu(n,e):n instanceof Hn?hu(n,e):t}function lu(n,e){return n instanceof Yr?function(r){return as(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Qr extends li{}class qn extends li{constructor(e){super(),this.elements=e}}function uu(n,e){const t=du(e);for(const r of n.elements)t.some(i=>Le(i,r))||t.push(r);return{arrayValue:{values:t}}}class Hn extends li{constructor(e){super(),this.elements=e}}function hu(n,e){let t=du(e);for(const r of n.elements)t=t.filter(i=>!Le(i,r));return{arrayValue:{values:t}}}class Yr extends li{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function vc(n){return ne(n.integerValue||n.doubleValue)}function du(n){return Us(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Wm(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof qn&&i instanceof qn||r instanceof Hn&&i instanceof Hn?Qt(r.elements,i.elements,Le):r instanceof Yr&&i instanceof Yr?Le(r.Pe,i.Pe):r instanceof Qr&&i instanceof Qr}(n.transform,e.transform)}class Qm{constructor(e,t){this.version=e,this.transformResults=t}}class ze{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ze}static exists(e){return new ze(void 0,e)}static updateTime(e){return new ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ui{}function fu(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new gu(n.key,ze.none()):new tr(n.key,n.data,ze.none());{const t=n.data,r=Re.empty();let i=new ue(le.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new Ot(n.key,r,new Pe(i.toArray()),ze.none())}}function Ym(n,e,t){n instanceof tr?function(i,o,a){const l=i.value.clone(),h=Ic(i.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Ot?function(i,o,a){if(!Lr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Ic(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(pu(i)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Vn(n,e,t,r){return n instanceof tr?function(o,a,l,h){if(!Lr(o.precondition,a))return l;const d=o.value.clone(),p=Tc(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ot?function(o,a,l,h){if(!Lr(o.precondition,a))return l;const d=Tc(o.fieldTransforms,h,a),p=a.data;return p.setAll(pu(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(n,e,t,r):function(o,a,l){return Lr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function Jm(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=lu(r.transform,i||null);o!=null&&(t===null&&(t=Re.empty()),t.set(r.field,o))}return t||null}function Ec(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Qt(r,i,(o,a)=>Wm(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class tr extends ui{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ot extends ui{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function pu(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ic(n,e,t){const r=new Map;W(n.length===t.length);for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,l=e.data.field(o.field);r.set(o.field,Km(a,l,t[i]))}return r}function Tc(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,zm(o,a,e))}return r}class gu extends ui{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Xm extends ui{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Zm{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&Ym(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Vn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Vn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=au();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=t.has(i.key)?null:l;const h=fu(a,l);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),B())}isEqual(e){return this.batchId===e.batchId&&Qt(this.mutations,e.mutations,(t,r)=>Ec(t,r))&&Qt(this.baseMutations,e.baseMutations,(t,r)=>Ec(t,r))}}class qs{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){W(e.mutations.length===r.length);let i=function(){return jm}();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new qs(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class e_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class t_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var re,$;function n_(n){switch(n){default:return x();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function mu(n){if(n===void 0)return Qe("GRPC error has no .code"),b.UNKNOWN;switch(n){case re.OK:return b.OK;case re.CANCELLED:return b.CANCELLED;case re.UNKNOWN:return b.UNKNOWN;case re.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case re.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case re.INTERNAL:return b.INTERNAL;case re.UNAVAILABLE:return b.UNAVAILABLE;case re.UNAUTHENTICATED:return b.UNAUTHENTICATED;case re.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case re.NOT_FOUND:return b.NOT_FOUND;case re.ALREADY_EXISTS:return b.ALREADY_EXISTS;case re.PERMISSION_DENIED:return b.PERMISSION_DENIED;case re.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case re.ABORTED:return b.ABORTED;case re.OUT_OF_RANGE:return b.OUT_OF_RANGE;case re.UNIMPLEMENTED:return b.UNIMPLEMENTED;case re.DATA_LOSS:return b.DATA_LOSS;default:return x()}}($=re||(re={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function r_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const i_=new Rt([4294967295,4294967295],0);function wc(n){const e=r_().encode(n),t=new Bl;return t.update(e),new Uint8Array(t.digest())}function Ac(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Rt([t,r],0),new Rt([i,o],0)]}class Hs{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new bn(`Invalid padding: ${t}`);if(r<0)throw new bn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new bn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new bn(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Rt.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(Rt.fromNumber(r)));return i.compare(i_)===1&&(i=new Rt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=wc(e),[r,i]=Ac(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new Hs(o,i,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=wc(e),[r,i]=Ac(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class bn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class hi{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,nr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new hi(U.min(),i,new J(H),Ye(),B())}}class nr{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new nr(r,t,B(),B(),B())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class xr{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class _u{constructor(e,t){this.targetId=e,this.me=t}}class yu{constructor(e,t,r=he.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Rc{constructor(){this.fe=0,this.ge=Cc(),this.pe=he.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=B(),t=B(),r=B();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:x()}}),new nr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Cc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,W(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class s_{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ye(),this.qe=Sc(),this.Qe=new J(H)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:x()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const o=i.target;if(ls(o))if(r===0){const a=new M(o.path);this.Ue(t,a,ye.newNoDocument(a,U.min()))}else W(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),h=l?this.Xe(l,e,a):1;if(h!==0){this.je(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t;let a,l;try{a=kt(r).toUint8Array()}catch(h){if(h instanceof Ql)return Wt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Hs(a,i,o)}catch(h){return Wt(h instanceof bn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(o=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,o,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((o,a)=>{const l=this.Je(a);if(l){if(o.current&&ls(l.target)){const h=new M(l.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,ye.newNoDocument(h,e))}o.be&&(t.set(a,o.ve()),o.Ce())}});let r=B();this.qe.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));const i=new hi(e,t,this.Qe,this.ke,r);return this.ke=Ye(),this.qe=Sc(),this.Qe=new J(H),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Rc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ue(H),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||D("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Rc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Sc(){return new J(M.comparator)}function Cc(){return new J(M.comparator)}const o_={asc:"ASCENDING",desc:"DESCENDING"},a_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},c_={and:"AND",or:"OR"};class l_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function hs(n,e){return n.useProto3Json||si(e)?e:{value:e}}function Jr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vu(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function u_(n,e){return Jr(n,e.toTimestamp())}function Ve(n){return W(!!n),U.fromTimestamp(function(t){const r=pt(t);return new se(r.seconds,r.nanos)}(n))}function Gs(n,e){return ds(n,e).canonicalString()}function ds(n,e){const t=function(i){return new Z(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Eu(n){const e=Z.fromString(n);return W(Ru(e)),e}function fs(n,e){return Gs(n.databaseId,e.path)}function zi(n,e){const t=Eu(e);if(t.get(1)!==n.databaseId.projectId)throw new V(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(Tu(t))}function Iu(n,e){return Gs(n.databaseId,e)}function h_(n){const e=Eu(n);return e.length===4?Z.emptyPath():Tu(e)}function ps(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Tu(n){return W(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function bc(n,e,t){return{name:fs(n,e),fields:t.value.mapValue.fields}}function d_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:x()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(W(p===void 0||typeof p=="string"),he.fromBase64String(p||"")):(W(p===void 0||p instanceof Buffer||p instanceof Uint8Array),he.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const p=d.code===void 0?b.UNKNOWN:mu(d.code);return new V(p,d.message||"")}(a);t=new yu(r,i,o,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=zi(n,r.document.name),o=Ve(r.document.updateTime),a=r.document.createTime?Ve(r.document.createTime):U.min(),l=new Re({mapValue:{fields:r.document.fields}}),h=ye.newFoundDocument(i,o,a,l),d=r.targetIds||[],p=r.removedTargetIds||[];t=new xr(d,p,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=zi(n,r.document),o=r.readTime?Ve(r.readTime):U.min(),a=ye.newNoDocument(i,o),l=r.removedTargetIds||[];t=new xr([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=zi(n,r.document),o=r.removedTargetIds||[];t=new xr([],o,i,null)}else{if(!("filter"in e))return x();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new t_(i,o),l=r.targetId;t=new _u(l,a)}}return t}function f_(n,e){let t;if(e instanceof tr)t={update:bc(n,e.key,e.value)};else if(e instanceof gu)t={delete:fs(n,e.key)};else if(e instanceof Ot)t={update:bc(n,e.key,e.data),updateMask:T_(e.fieldMask)};else{if(!(e instanceof Xm))return x();t={verify:fs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof Qr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof qn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Hn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Yr)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw x()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:u_(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x()}(n,e.precondition)),t}function p_(n,e){return n&&n.length>0?(W(e!==void 0),n.map(t=>function(i,o){let a=i.updateTime?Ve(i.updateTime):Ve(o);return a.isEqual(U.min())&&(a=Ve(o)),new Qm(a,i.transformResults||[])}(t,e))):[]}function g_(n,e){return{documents:[Iu(n,e.path)]}}function m_(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Iu(n,i);const o=function(d){if(d.length!==0)return Au(xe.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(A){return{field:Bt(A.field),direction:v_(A.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=hs(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function __(n){let e=h_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){W(r===1);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(T){const A=wu(T);return A instanceof xe&&Zl(A)?A.getFilters():[A]}(t.where));let a=[];t.orderBy&&(a=function(T){return T.map(A=>function(P){return new Wr(jt(P.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(A))}(t.orderBy));let l=null;t.limit&&(l=function(T){let A;return A=typeof T=="object"?T.value:T,si(A)?null:A}(t.limit));let h=null;t.startAt&&(h=function(T){const A=!!T.before,S=T.values||[];return new Kr(S,A)}(t.startAt));let d=null;return t.endAt&&(d=function(T){const A=!T.before,S=T.values||[];return new Kr(S,A)}(t.endAt)),Mm(e,i,a,o,l,"F",h,d)}function y_(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function wu(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=jt(t.unaryFilter.field);return ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=jt(t.unaryFilter.field);return ie.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=jt(t.unaryFilter.field);return ie.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=jt(t.unaryFilter.field);return ie.create(a,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(n):n.fieldFilter!==void 0?function(t){return ie.create(jt(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return xe.create(t.compositeFilter.filters.map(r=>wu(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return x()}}(t.compositeFilter.op))}(n):x()}function v_(n){return o_[n]}function E_(n){return a_[n]}function I_(n){return c_[n]}function Bt(n){return{fieldPath:n.canonicalString()}}function jt(n){return le.fromServerFormat(n.fieldPath)}function Au(n){return n instanceof ie?function(t){if(t.op==="=="){if(pc(t.value))return{unaryFilter:{field:Bt(t.field),op:"IS_NAN"}};if(fc(t.value))return{unaryFilter:{field:Bt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(pc(t.value))return{unaryFilter:{field:Bt(t.field),op:"IS_NOT_NAN"}};if(fc(t.value))return{unaryFilter:{field:Bt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bt(t.field),op:E_(t.op),value:t.value}}}(n):n instanceof xe?function(t){const r=t.getFilters().map(i=>Au(i));return r.length===1?r[0]:{compositeFilter:{op:I_(t.op),filters:r}}}(n):x()}function T_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ru(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class at{constructor(e,t,r,i,o=U.min(),a=U.min(),l=he.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(e){return new at(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new at(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new at(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new at(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class w_{constructor(e){this.ct=e}}function A_(n){const e=__({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?us(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class R_{constructor(){this.un=new S_}addToCollectionParentIndex(e,t){return this.un.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(ft.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(ft.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class S_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ue(Z.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ue(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Xt{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Xt(0)}static kn(){return new Xt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class C_{constructor(){this.changes=new on(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 *//**
 * @license
 * Copyright 2022 Google LLC
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
 */class b_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class P_{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Vn(r.mutation,i,Pe.empty(),se.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,B()).next(()=>r))}getLocalViewOfDocuments(e,t,r=B()){const i=wt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=Cn();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=wt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,B()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let o=Ye();const a=Dn(),l=function(){return Dn()}();return t.forEach((h,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof Ot)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Vn(p.mutation,d,p.mutation.getFieldMask(),se.now())):a.set(d.key,Pe.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var T;return l.set(d,new b_(p,(T=a.get(d))!==null&&T!==void 0?T:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Dn();let i=new J((a,l)=>a-l),o=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let p=r.get(h)||Pe.empty();p=l.applyToLocalView(d,p),r.set(h,p);const T=(i.get(l.batchId)||B()).add(h);i=i.insert(l.batchId,T)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,p=h.value,T=au();p.forEach(A=>{if(!o.has(A)){const S=fu(t.get(A),r.get(A));S!==null&&T.set(A,S),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,T))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Lm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):C.resolve(wt());let l=-1,h=o;return a.next(d=>C.forEach(d,(p,T)=>(l<T.largestBatchId&&(l=T.largestBatchId),o.get(p)?C.resolve():this.remoteDocumentCache.getEntry(e,p).next(A=>{h=h.insert(p,A)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,B())).next(p=>({batchId:l,changes:ou(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(r=>{let i=Cn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=Cn();return this.indexManager.getCollectionParents(e,o).next(l=>C.forEach(l,h=>{const d=function(T,A){return new oi(A,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((T,A)=>{a=a.insert(T,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,ye.newInvalidDocument(p)))});let l=Cn();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&Vn(p.mutation,d,Pe.empty(),se.now()),ci(t,d)&&(l=l.insert(h,d))}),l})}}/**
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
 */class k_{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return C.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Ve(i.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:A_(i.bundledQuery),readTime:Ve(i.readTime)}}(t)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class N_{constructor(){this.overlays=new J(M.comparator),this.Ir=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const r=wt();return C.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.ht(e,t,o)}),C.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){const i=wt(),o=t.length+1,a=new M(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return C.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new J((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=wt(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=wt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=i)););return C.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new e_(t,r));let o=this.Ir.get(t);o===void 0&&(o=B(),this.Ir.set(t,o)),this.Ir.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class O_{constructor(){this.sessionToken=he.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class zs{constructor(){this.Tr=new ue(oe.Er),this.dr=new ue(oe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new oe(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new oe(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new M(new Z([])),r=new oe(t,e),i=new oe(t,e+1),o=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new M(new Z([])),r=new oe(t,e),i=new oe(t,e+1);let o=B();return this.dr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new oe(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class oe{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return M.comparator(e.key,t.key)||H(e.wr,t.wr)}static Ar(e,t){return H(e.wr,t.wr)||M.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class D_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ue(oe.Er)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Zm(o,t,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new oe(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),o=i<0?0:i;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new oe(t,0),i=new oe(t,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);o.push(l)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ue(H);return t.forEach(i=>{const o=new oe(i,0),a=new oe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],l=>{r=r.add(l.wr)})}),C.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new oe(new M(o),0);let l=new ue(H);return this.br.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(h.wr)),!0)},a),C.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){W(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return C.forEach(t.mutations,i=>{const o=new oe(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new oe(t,0),i=this.br.firstAfterOrEqual(r);return C.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class V_{constructor(e){this.Mr=e,this.docs=function(){return new J(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():ye.newInvalidDocument(t))}getEntries(e,t){let r=Ye();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():ye.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=Ye();const a=t.path,l=new M(a.child("")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||mm(gm(p),r)<=0||(i.has(p.key)||ci(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(e,t,r,i){x()}Or(e,t){return C.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new M_(this)}getSize(e){return C.resolve(this.size)}}class M_ extends C_{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),C.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class L_{constructor(e){this.persistence=e,this.Nr=new on(t=>Fs(t),Bs),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Lr=0,this.Br=new zs,this.targetCount=0,this.kr=Xt.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),C.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Xt(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.Kn(t),C.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),C.waitFor(o).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),C.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),C.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class x_{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Ms(0),this.Kr=!1,this.Kr=!0,this.$r=new O_,this.referenceDelegate=e(this),this.Ur=new L_(this),this.indexManager=new R_,this.remoteDocumentCache=function(i){return new V_(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new w_(t),this.Gr=new k_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new N_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new D_(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){D("MemoryPersistence","Starting transaction:",e);const i=new U_(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,t){return C.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class U_ extends ym{constructor(e){super(),this.currentSequenceNumber=e}}class Ks{constructor(e){this.persistence=e,this.Jr=new zs,this.Yr=null}static Zr(e){return new Ks(e)}get Xr(){if(this.Yr)return this.Yr;throw x()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),C.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Xr,r=>{const i=M.fromPath(r);return this.ei(e,i).next(o=>{o||t.removeEntry(i,U.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return C.or([()=>C.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ws{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=B(),i=B();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ws(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class F_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class B_{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Fd()?8:vm(Ee())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.Yi(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new F_;return this.Xi(e,t,a).next(l=>{if(o.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>o.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(Rn()<=j.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Ft(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),C.resolve()):(Rn()<=j.DEBUG&&D("QueryEngine","Query:",Ft(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Rn()<=j.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Ft(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,De(t))):C.resolve())}Yi(e,t){if(yc(t))return C.resolve(null);let r=De(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=us(t,null,"F"),r=De(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=B(...o);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(h=>{const d=this.ts(t,l);return this.ns(t,d,a,h.readTime)?this.Yi(e,us(t,null,"F")):this.rs(e,d,t,h)}))})))}Zi(e,t,r,i){return yc(t)||i.isEqual(U.min())?C.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const a=this.ts(t,o);return this.ns(t,a,r,i)?C.resolve(null):(Rn()<=j.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ft(t)),this.rs(e,a,t,pm(i,-1)).next(l=>l))})}ts(e,t){let r=new ue(iu(e));return t.forEach((i,o)=>{ci(e,o)&&(r=r.add(o))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,t,r){return Rn()<=j.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Ft(t)),this.Ji.getDocumentsMatchingQuery(e,t,ft.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class j_{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new J(H),this._s=new on(o=>Fs(o),Bs),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new P_(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function $_(n,e,t,r){return new j_(n,e,t,r)}async function Su(n,e){const t=F(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let h=B();for(const d of i){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){l.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return t.localDocuments.getDocuments(r,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:l}))})})}function q_(n,e){const t=F(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,h,d,p){const T=d.batch,A=T.keys();let S=C.resolve();return A.forEach(P=>{S=S.next(()=>p.getEntry(h,P)).next(O=>{const N=d.docVersions.get(P);W(N!==null),O.version.compareTo(N)<0&&(T.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),p.addEntry(O)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(h,T))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let h=B();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Cu(n){const e=F(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function H_(n,e){const t=F(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const l=[];e.targetChanges.forEach((p,T)=>{const A=i.get(T);if(!A)return;l.push(t.Ur.removeMatchingKeys(o,p.removedDocuments,T).next(()=>t.Ur.addMatchingKeys(o,p.addedDocuments,T)));let S=A.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(T)!==null?S=S.withResumeToken(he.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),i=i.insert(T,S),function(O,N,G){return O.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(A,S,p)&&l.push(t.Ur.updateTargetData(o,S))});let h=Ye(),d=B();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))}),l.push(G_(o,a,e.documentUpdates).next(p=>{h=p.Ps,d=p.Is})),!r.isEqual(U.min())){const p=t.Ur.getLastRemoteSnapshotVersion(o).next(T=>t.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(p)}return C.waitFor(l).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.os=i,o))}function G_(n,e,t){let r=B(),i=B();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=Ye();return t.forEach((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),h.isNoDocument()&&h.version.isEqual(U.min())?(e.removeEntry(l,h.readTime),a=a.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(l,h)):D("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)}),{Ps:a,Is:i}})}function z_(n,e){const t=F(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function K_(n,e){const t=F(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(o=>o?(i=o,C.resolve(i)):t.Ur.allocateTargetId(r).next(a=>(i=new at(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function gs(n,e,t){const r=F(n),i=r.os.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!er(a))throw a;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Pc(n,e,t){const r=F(n);let i=U.min(),o=B();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const T=F(h),A=T._s.get(p);return A!==void 0?C.resolve(T.os.get(A)):T.Ur.getTargetData(d,p)}(r,a,De(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?i:U.min(),t?o:B())).next(l=>(W_(r,Um(e),l),{documents:l,Ts:o})))}function W_(n,e,t){let r=n.us.get(e)||U.min();t.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(e,r)}class kc{constructor(){this.activeTargetIds=Hm()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Q_{constructor(){this.so=new kc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new kc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Y_{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Nc{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let br=null;function Ki(){return br===null?br=function(){return 268435456+Math.round(2147483648*Math.random())}():br++,"0x"+br.toString(16)}/**
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
 */const J_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class X_{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const me="WebChannelConnection";class Z_ extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(t,r,i,o,a){const l=Ki(),h=this.xo(t,r.toUriEncodedString());D("RestConnection",`Sending RPC '${t}' ${l}:`,h,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(t,h,d,i).then(p=>(D("RestConnection",`Received RPC '${t}' ${l}: `,p),p),p=>{throw Wt("RestConnection",`RPC '${t}' ${l} failed with error: `,p,"url: ",h,"request:",i),p})}Lo(t,r,i,o,a,l){return this.Mo(t,r,i,o,a)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>t[a]=o),i&&i.headers.forEach((o,a)=>t[a]=o)}xo(t,r){const i=J_[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const o=Ki();return new Promise((a,l)=>{const h=new jl;h.setWithCredentials(!0),h.listenOnce($l.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Vr.NO_ERROR:const p=h.getResponseJson();D(me,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),a(p);break;case Vr.TIMEOUT:D(me,`RPC '${e}' ${o} timed out`),l(new V(b.DEADLINE_EXCEEDED,"Request time out"));break;case Vr.HTTP_ERROR:const T=h.getStatus();if(D(me,`RPC '${e}' ${o} failed with status:`,T,"response text:",h.getResponseText()),T>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const S=A==null?void 0:A.error;if(S&&S.status&&S.message){const P=function(N){const G=N.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(G)>=0?G:b.UNKNOWN}(S.status);l(new V(P,S.message))}else l(new V(b.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new V(b.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{D(me,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);D(me,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",d,r,15)})}Bo(e,t,r){const i=Ki(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Gl(),l=Hl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const p=o.join("");D(me,`Creating RPC '${e}' stream ${i}: ${p}`,h);const T=a.createWebChannel(p,h);let A=!1,S=!1;const P=new X_({Io:N=>{S?D(me,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(A||(D(me,`Opening RPC '${e}' stream ${i} transport.`),T.open(),A=!0),D(me,`RPC '${e}' stream ${i} sending:`,N),T.send(N))},To:()=>T.close()}),O=(N,G,z)=>{N.listen(G,K=>{try{z(K)}catch(ee){setTimeout(()=>{throw ee},0)}})};return O(T,Sn.EventType.OPEN,()=>{S||(D(me,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),O(T,Sn.EventType.CLOSE,()=>{S||(S=!0,D(me,`RPC '${e}' stream ${i} transport closed`),P.So())}),O(T,Sn.EventType.ERROR,N=>{S||(S=!0,Wt(me,`RPC '${e}' stream ${i} transport errored:`,N),P.So(new V(b.UNAVAILABLE,"The operation could not be completed")))}),O(T,Sn.EventType.MESSAGE,N=>{var G;if(!S){const z=N.data[0];W(!!z);const K=z,ee=K.error||((G=K[0])===null||G===void 0?void 0:G.error);if(ee){D(me,`RPC '${e}' stream ${i} received error:`,ee);const Ae=ee.status;let te=function(_){const y=re[_];if(y!==void 0)return mu(y)}(Ae),v=ee.message;te===void 0&&(te=b.INTERNAL,v="Unknown error status: "+Ae+" with message "+ee.message),S=!0,P.So(new V(te,v)),T.close()}else D(me,`RPC '${e}' stream ${i} received:`,z),P.bo(z)}}),O(l,ql.STAT_EVENT,N=>{N.stat===ss.PROXY?D(me,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===ss.NOPROXY&&D(me,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function Wi(){return typeof document<"u"?document:null}/**
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
 */function di(n){return new l_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class bu{constructor(e,t,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Pu{constructor(e,t,r,i,o,a,l,h){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new bu(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(Qe(t.toString()),Qe("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new V(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ey extends Pu{constructor(e,t,r,i,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=d_(this.serializer,e),r=function(o){if(!("targetChange"in o))return U.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?Ve(a.readTime):U.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=ps(this.serializer),t.addTarget=function(o,a){let l;const h=a.target;if(l=ls(h)?{documents:g_(o,h)}:{query:m_(o,h)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=vu(o,a.resumeToken);const d=hs(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){l.readTime=Jr(o,a.snapshotVersion.toTimestamp());const d=hs(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=y_(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=ps(this.serializer),t.removeTarget=e,this.a_(t)}}class ty extends Pu{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return W(!!e.streamToken),this.lastStreamToken=e.streamToken,W(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){W(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=p_(e.writeResults,e.commitTime),r=Ve(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=ps(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>f_(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ny extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new V(b.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,ds(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(b.UNKNOWN,o.toString())})}Lo(e,t,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,ds(t,r),i,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(b.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class ry{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Qe(t),this.D_=!1):D("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class iy{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{Dt(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=F(h);d.L_.add(4),await rr(d),d.q_.set("Unknown"),d.L_.delete(4),await fi(d)}(this))})}),this.q_=new ry(r,i)}}async function fi(n){if(Dt(n))for(const e of n.B_)await e(!0)}async function rr(n){for(const e of n.B_)await e(!1)}function ku(n,e){const t=F(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Xs(t)?Js(t):an(t).r_()&&Ys(t,e))}function Qs(n,e){const t=F(n),r=an(t);t.N_.delete(e),r.r_()&&Nu(t,e),t.N_.size===0&&(r.r_()?r.o_():Dt(t)&&t.q_.set("Unknown"))}function Ys(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}an(n).A_(e)}function Nu(n,e){n.Q_.xe(e),an(n).R_(e)}function Js(n){n.Q_=new s_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),an(n).start(),n.q_.v_()}function Xs(n){return Dt(n)&&!an(n).n_()&&n.N_.size>0}function Dt(n){return F(n).L_.size===0}function Ou(n){n.Q_=void 0}async function sy(n){n.q_.set("Online")}async function oy(n){n.N_.forEach((e,t)=>{Ys(n,e)})}async function ay(n,e){Ou(n),Xs(n)?(n.q_.M_(e),Js(n)):n.q_.set("Unknown")}async function cy(n,e,t){if(n.q_.set("Online"),e instanceof yu&&e.state===2&&e.cause)try{await async function(i,o){const a=o.cause;for(const l of o.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.N_.delete(l),i.Q_.removeTarget(l))}(n,e)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xr(n,r)}else if(e instanceof xr?n.Q_.Ke(e):e instanceof _u?n.Q_.He(e):n.Q_.We(e),!t.isEqual(U.min()))try{const r=await Cu(n.localStore);t.compareTo(r)>=0&&await function(o,a){const l=o.Q_.rt(a);return l.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.N_.get(d);p&&o.N_.set(d,p.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,d)=>{const p=o.N_.get(h);if(!p)return;o.N_.set(h,p.withResumeToken(he.EMPTY_BYTE_STRING,p.snapshotVersion)),Nu(o,h);const T=new at(p.target,h,d,p.sequenceNumber);Ys(o,T)}),o.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await Xr(n,r)}}async function Xr(n,e,t){if(!er(e))throw e;n.L_.add(1),await rr(n),n.q_.set("Offline"),t||(t=()=>Cu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await fi(n)})}function Du(n,e){return e().catch(t=>Xr(n,t,e))}async function pi(n){const e=F(n),t=gt(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;ly(e);)try{const i=await z_(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,uy(e,i)}catch(i){await Xr(e,i)}Vu(e)&&Mu(e)}function ly(n){return Dt(n)&&n.O_.length<10}function uy(n,e){n.O_.push(e);const t=gt(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Vu(n){return Dt(n)&&!gt(n).n_()&&n.O_.length>0}function Mu(n){gt(n).start()}async function hy(n){gt(n).p_()}async function dy(n){const e=gt(n);for(const t of n.O_)e.m_(t.mutations)}async function fy(n,e,t){const r=n.O_.shift(),i=qs.from(r,e,t);await Du(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await pi(n)}async function py(n,e){e&&gt(n).V_&&await async function(r,i){if(function(a){return n_(a)&&a!==b.ABORTED}(i.code)){const o=r.O_.shift();gt(r).s_(),await Du(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await pi(r)}}(n,e),Vu(n)&&Mu(n)}async function Oc(n,e){const t=F(n);t.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=Dt(t);t.L_.add(3),await rr(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await fi(t)}async function gy(n,e){const t=F(n);e?(t.L_.delete(2),await fi(t)):e||(t.L_.add(2),await rr(t),t.q_.set("Unknown"))}function an(n){return n.K_||(n.K_=function(t,r,i){const o=F(t);return o.w_(),new ey(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:sy.bind(null,n),Ro:oy.bind(null,n),mo:ay.bind(null,n),d_:cy.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Xs(n)?Js(n):n.q_.set("Unknown")):(await n.K_.stop(),Ou(n))})),n.K_}function gt(n){return n.U_||(n.U_=function(t,r,i){const o=F(t);return o.w_(),new ty(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:hy.bind(null,n),mo:py.bind(null,n),f_:dy.bind(null,n),g_:fy.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await pi(n)):(await n.U_.stop(),n.O_.length>0&&(D("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Zs{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new dt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,l=new Zs(e,t,a,i,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function eo(n,e){if(Qe("AsyncQueue",`${e}: ${n}`),er(n))return new V(b.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Gt{constructor(e){this.comparator=e?(t,r)=>e(t,r)||M.comparator(t.key,r.key):(t,r)=>M.comparator(t.key,r.key),this.keyedMap=Cn(),this.sortedSet=new J(this.comparator)}static emptySet(e){return new Gt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Gt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Gt;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Dc{constructor(){this.W_=new J(M.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):x():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Zt{constructor(e,t,r,i,o,a,l,h,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,o){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Zt(e,t,Gt.emptySet(t),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ai(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class my{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class _y{constructor(){this.queries=Vc(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=F(t),o=i.queries;i.queries=Vc(),o.forEach((a,l)=>{for(const h of l.j_)h.onError(r)})})(this,new V(b.ABORTED,"Firestore shutting down"))}}function Vc(){return new on(n=>ru(n),ai)}async function yy(n,e){const t=F(n);let r=3;const i=e.query;let o=t.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new my,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await t.onListen(i,!0);break;case 1:o.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=eo(a,`Initialization of query '${Ft(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,o),o.j_.push(e),e.Z_(t.onlineState),o.z_&&e.X_(o.z_)&&to(t)}async function vy(n,e){const t=F(n),r=e.query;let i=3;const o=t.queries.get(r);if(o){const a=o.j_.indexOf(e);a>=0&&(o.j_.splice(a,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Ey(n,e){const t=F(n);let r=!1;for(const i of e){const o=i.query,a=t.queries.get(o);if(a){for(const l of a.j_)l.X_(i)&&(r=!0);a.z_=i}}r&&to(t)}function Iy(n,e,t){const r=F(n),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(t);r.queries.delete(e)}function to(n){n.Y_.forEach(e=>{e.next()})}var ms,Mc;(Mc=ms||(ms={})).ea="default",Mc.Cache="cache";class Ty{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Zt(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Zt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ms.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Lu{constructor(e){this.key=e}}class xu{constructor(e){this.key=e}}class wy{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=B(),this.mutatedKeys=B(),this.Aa=iu(e),this.Ra=new Gt(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Dc,i=t?t.Ra:this.Ra;let o=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,T)=>{const A=i.get(p),S=ci(this.query,T)?T:null,P=!!A&&this.mutatedKeys.has(A.key),O=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let N=!1;A&&S?A.data.isEqual(S.data)?P!==O&&(r.track({type:3,doc:S}),N=!0):this.ga(A,S)||(r.track({type:2,doc:S}),N=!0,(h&&this.Aa(S,h)>0||d&&this.Aa(S,d)<0)&&(l=!0)):!A&&S?(r.track({type:0,doc:S}),N=!0):A&&!S&&(r.track({type:1,doc:A}),N=!0,(h||d)&&(l=!0)),N&&(S?(a=a.add(S),o=O?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:l,mutatedKeys:o}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((p,T)=>function(S,P){const O=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return O(S)-O(P)}(p.type,T.type)||this.Aa(p.doc,T.doc)),this.pa(r),i=i!=null&&i;const l=t&&!i?this.ya():[],h=this.da.size===0&&this.current&&!i?1:0,d=h!==this.Ea;return this.Ea=h,a.length!==0||d?{snapshot:new Zt(this.query,e.Ra,o,a,e.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Dc,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=B(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new xu(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Lu(r))}),t}ba(e){this.Ta=e.Ts,this.da=B();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Zt.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Ay{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Ry{constructor(e){this.key=e,this.va=!1}}class Sy{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new on(l=>ru(l),ai),this.Ma=new Map,this.xa=new Set,this.Oa=new J(M.comparator),this.Na=new Map,this.La=new zs,this.Ba={},this.ka=new Map,this.qa=Xt.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Cy(n,e,t=!0){const r=qu(n);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await Uu(r,e,t,!0),i}async function by(n,e){const t=qu(n);await Uu(t,e,!0,!1)}async function Uu(n,e,t,r){const i=await K_(n.localStore,De(e)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let l;return r&&(l=await Py(n,e,o,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&ku(n.remoteStore,i),l}async function Py(n,e,t,r,i){n.Ka=(T,A,S)=>async function(O,N,G,z){let K=N.view.ma(G);K.ns&&(K=await Pc(O.localStore,N.query,!1).then(({documents:v})=>N.view.ma(v,K)));const ee=z&&z.targetChanges.get(N.targetId),Ae=z&&z.targetMismatches.get(N.targetId)!=null,te=N.view.applyChanges(K,O.isPrimaryClient,ee,Ae);return xc(O,N.targetId,te.wa),te.snapshot}(n,T,A,S);const o=await Pc(n.localStore,e,!0),a=new wy(e,o.Ts),l=a.ma(o.documents),h=nr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(l,n.isPrimaryClient,h);xc(n,t,d.wa);const p=new Ay(e,t,a);return n.Fa.set(e,p),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function ky(n,e,t){const r=F(n),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(a=>!ai(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await gs(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Qs(r.remoteStore,i.targetId),_s(r,i.targetId)}).catch(Zn)):(_s(r,i.targetId),await gs(r.localStore,i.targetId,!0))}async function Ny(n,e){const t=F(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Qs(t.remoteStore,r.targetId))}async function Oy(n,e,t){const r=Fy(n);try{const i=await function(a,l){const h=F(a),d=se.now(),p=l.reduce((S,P)=>S.add(P.key),B());let T,A;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let P=Ye(),O=B();return h.cs.getEntries(S,p).next(N=>{P=N,P.forEach((G,z)=>{z.isValidDocument()||(O=O.add(G))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,P)).next(N=>{T=N;const G=[];for(const z of l){const K=Jm(z,T.get(z.key).overlayedDocument);K!=null&&G.push(new Ot(z.key,K,Yl(K.value.mapValue),ze.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,G,l)}).next(N=>{A=N;const G=N.applyToLocalDocumentSet(T,O);return h.documentOverlayCache.saveOverlays(S,N.batchId,G)})}).then(()=>({batchId:A.batchId,changes:ou(T)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,h){let d=a.Ba[a.currentUser.toKey()];d||(d=new J(H)),d=d.insert(l,h),a.Ba[a.currentUser.toKey()]=d}(r,i.batchId,t),await ir(r,i.changes),await pi(r.remoteStore)}catch(i){const o=eo(i,"Failed to persist write");t.reject(o)}}async function Fu(n,e){const t=F(n);try{const r=await H_(t.localStore,e);e.targetChanges.forEach((i,o)=>{const a=t.Na.get(o);a&&(W(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?W(a.va):i.removedDocuments.size>0&&(W(a.va),a.va=!1))}),await ir(t,r,e)}catch(r){await Zn(r)}}function Lc(n,e,t){const r=F(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((o,a)=>{const l=a.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const h=F(a);h.onlineState=l;let d=!1;h.queries.forEach((p,T)=>{for(const A of T.j_)A.Z_(l)&&(d=!0)}),d&&to(h)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Dy(n,e,t){const r=F(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),o=i&&i.key;if(o){let a=new J(M.comparator);a=a.insert(o,ye.newNoDocument(o,U.min()));const l=B().add(o),h=new hi(U.min(),new Map,new J(H),a,l);await Fu(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(e),no(r)}else await gs(r.localStore,e,!1).then(()=>_s(r,e,t)).catch(Zn)}async function Vy(n,e){const t=F(n),r=e.batch.batchId;try{const i=await q_(t.localStore,e);ju(t,r,null),Bu(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ir(t,i)}catch(i){await Zn(i)}}async function My(n,e,t){const r=F(n);try{const i=await function(a,l){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,l).next(T=>(W(T!==null),p=T.keys(),h.mutationQueue.removeMutationBatch(d,T))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(r.localStore,e);ju(r,e,t),Bu(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ir(r,i)}catch(i){await Zn(i)}}function Bu(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function ju(n,e,t){const r=F(n);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function _s(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||$u(n,r)})}function $u(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Qs(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),no(n))}function xc(n,e,t){for(const r of t)r instanceof Lu?(n.La.addReference(r.key,e),Ly(n,r)):r instanceof xu?(D("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||$u(n,r.key)):x()}function Ly(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(D("SyncEngine","New document in limbo: "+t),n.xa.add(r),no(n))}function no(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new M(Z.fromString(e)),r=n.qa.next();n.Na.set(r,new Ry(t)),n.Oa=n.Oa.insert(t,r),ku(n.remoteStore,new at(De(js(t.path)),r,"TargetPurposeLimboResolution",Ms.oe))}}async function ir(n,e,t){const r=F(n),i=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,h)=>{a.push(r.Ka(h,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const T=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,T?"current":"not-current")}if(d){i.push(d);const T=Ws.Wi(h.targetId,d);o.push(T)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(h,d){const p=F(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>C.forEach(d,A=>C.forEach(A.$i,S=>p.persistence.referenceDelegate.addReference(T,A.targetId,S)).next(()=>C.forEach(A.Ui,S=>p.persistence.referenceDelegate.removeReference(T,A.targetId,S)))))}catch(T){if(!er(T))throw T;D("LocalStore","Failed to update sequence numbers: "+T)}for(const T of d){const A=T.targetId;if(!T.fromCache){const S=p.os.get(A),P=S.snapshotVersion,O=S.withLastLimboFreeSnapshotVersion(P);p.os=p.os.insert(A,O)}}}(r.localStore,o))}async function xy(n,e){const t=F(n);if(!t.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const r=await Su(t.localStore,e);t.currentUser=e,function(o,a){o.ka.forEach(l=>{l.forEach(h=>{h.reject(new V(b.CANCELLED,a))})}),o.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ir(t,r.hs)}}function Uy(n,e){const t=F(n),r=t.Na.get(e);if(r&&r.va)return B().add(r.key);{let i=B();const o=t.Ma.get(e);if(!o)return i;for(const a of o){const l=t.Fa.get(a);i=i.unionWith(l.view.Va)}return i}}function qu(n){const e=F(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Uy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Dy.bind(null,e),e.Ca.d_=Ey.bind(null,e.eventManager),e.Ca.$a=Iy.bind(null,e.eventManager),e}function Fy(n){const e=F(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Vy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=My.bind(null,e),e}class Zr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=di(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return $_(this.persistence,new B_,e.initialUser,this.serializer)}Ga(e){return new x_(Ks.Zr,this.serializer)}Wa(e){return new Q_}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zr.provider={build:()=>new Zr};class ys{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Lc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xy.bind(null,this.syncEngine),await gy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _y}()}createDatastore(e){const t=di(e.databaseInfo.databaseId),r=function(o){return new Z_(o)}(e.databaseInfo);return function(o,a,l,h){return new ny(o,a,l,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,l){return new iy(r,i,o,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Lc(this.syncEngine,t,0),function(){return Nc.D()?new Nc:new Y_}())}createSyncEngine(e,t){return function(i,o,a,l,h,d,p){const T=new Sy(i,o,a,l,h,d);return p&&(T.Qa=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=F(i);D("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await rr(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ys.provider={build:()=>new ys};/**
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
 *//**
 * @license
 * Copyright 2017 Google LLC
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
 */class By{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Qe("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class jy{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=_e.UNAUTHENTICATED,this.clientId=Kl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{D("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(D("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=eo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qi(n,e){n.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Su(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Uc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await $y(n);D("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Oc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Oc(e.remoteStore,i)),n._onlineComponents=e}async function $y(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Wt("Error using user provided cache. Falling back to memory cache: "+t),await Qi(n,new Zr)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await Qi(n,new Zr);return n._offlineComponents}async function Hu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await Uc(n,n._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await Uc(n,new ys))),n._onlineComponents}function qy(n){return Hu(n).then(e=>e.syncEngine)}async function Hy(n){const e=await Hu(n),t=e.eventManager;return t.onListen=Cy.bind(null,e.syncEngine),t.onUnlisten=ky.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=by.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ny.bind(null,e.syncEngine),t}function Gy(n,e,t={}){const r=new dt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,d){const p=new By({next:A=>{p.Za(),a.enqueueAndForget(()=>vy(o,T));const S=A.docs.has(l);!S&&A.fromCache?d.reject(new V(b.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&A.fromCache&&h&&h.source==="server"?d.reject(new V(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(A)},error:A=>d.reject(A)}),T=new Ty(js(l.path),p,{includeMetadataChanges:!0,_a:!0});return yy(o,T)}(await Hy(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Gu(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Fc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function zy(n,e,t){if(!t)throw new V(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Ky(n,e,t,r){if(e===!0&&r===!0)throw new V(b.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Bc(n){if(!M.isDocumentKey(n))throw new V(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ro(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":x()}function Gn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ro(n);throw new V(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class jc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ky("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gu((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class io{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jc({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sm;switch(r.type){case"firstParty":return new lm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Fc.get(t);r&&(D("ComponentProvider","Removing Datastore"),Fc.delete(t),r.terminate())}(this),Promise.resolve()}}function Wy(n,e,t,r={}){var i;const o=(n=Gn(n,io))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Wt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,h;if(typeof r.mockUserToken=="string")l=r.mockUserToken,h=_e.MOCK_USER;else{l=Od(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new V(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new _e(d)}n._authCredentials=new om(new zl(l,h))}}/**
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
 */class so{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new so(this.firestore,e,this._query)}}class Se{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Se(this.firestore,e,this._key)}}class zn extends so{constructor(e,t,r){super(e,t,js(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Se(this.firestore,null,new M(e))}withConverter(e){return new zn(this.firestore,e,this._path)}}function oo(n,e,...t){if(n=Ce(n),arguments.length===1&&(e=Kl.newId()),zy("doc","path",e),n instanceof io){const r=Z.fromString(e,...t);return Bc(r),new Se(n,null,new M(r))}{if(!(n instanceof Se||n instanceof zn))throw new V(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(e,...t));return Bc(r),new Se(n.firestore,n instanceof zn?n.converter:null,new M(r))}}/**
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
 */class $c{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new bu(this,"async_queue_retry"),this.Vu=()=>{const r=Wi();r&&D("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Wi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Wi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new dt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!er(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Qe("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=Zs.createAndSchedule(this,e,t,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&x()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class ao extends io{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new $c,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $c(e),this._firestoreClient=void 0,await e}}}function Qy(n,e){const t=typeof n=="object"?n:ol(),r=typeof n=="string"?n:"(default)",i=Ts(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=kd("firestore");o&&Wy(i,...o)}return i}function zu(n){if(n._terminated)throw new V(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Yy(n),n._firestoreClient}function Yy(n){var e,t,r;const i=n._freezeSettings(),o=function(l,h,d,p){return new Tm(l,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Gu(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new jy(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class en{constructor(e){this._byteString=e}static fromBase64String(e){try{return new en(he.fromBase64String(e))}catch(t){throw new V(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new en(he.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class co{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ku{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class lo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class uo{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Jy=/^__.*__$/;class Xy{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ot(e,this.data,this.fieldMask,t,this.fieldTransforms):new tr(e,this.data,t,this.fieldTransforms)}}function Wu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class ho{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ho(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ei(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Wu(this.Cu)&&Jy.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Zy{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||di(e)}Qu(e,t,r,i=!1){return new ho({Cu:e,methodName:t,qu:r,path:le.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ev(n){const e=n._freezeSettings(),t=di(n._databaseId);return new Zy(n._databaseId,!!e.ignoreUndefinedProperties,t)}function tv(n,e,t,r,i,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,e,t,i);Xu("Data must be an object, but it was:",a,r);const l=Yu(r,a);let h,d;if(o.merge)h=new Pe(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const T of o.mergeFields){const A=nv(e,T,t);if(!a.contains(A))throw new V(b.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);iv(p,A)||p.push(A)}h=new Pe(p),d=a.fieldTransforms.filter(T=>h.covers(T.field))}else h=null,d=a.fieldTransforms;return new Xy(new Re(l),h,d)}function Qu(n,e){if(Ju(n=Ce(n)))return Xu("Unsupported field value:",e,n),Yu(n,e);if(n instanceof Ku)return function(r,i){if(!Wu(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const l of r){let h=Qu(l,i.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=Ce(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Gm(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=se.fromDate(r);return{timestampValue:Jr(i.serializer,o)}}if(r instanceof se){const o=new se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Jr(i.serializer,o)}}if(r instanceof lo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof en)return{bytesValue:vu(i.serializer,r._byteString)};if(r instanceof Se){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Gs(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof uo)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.Bu("VectorValues must only contain numeric values.");return $s(l.serializer,h)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${ro(r)}`)}(n,e)}function Yu(n,e){const t={};return Wl(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):sn(n,(r,i)=>{const o=Qu(i,e.Mu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function Ju(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof se||n instanceof lo||n instanceof en||n instanceof Se||n instanceof Ku||n instanceof uo)}function Xu(n,e,t){if(!Ju(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=ro(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function nv(n,e,t){if((e=Ce(e))instanceof co)return e._internalPath;if(typeof e=="string")return Zu(n,e);throw ei("Field path arguments must be of type string or ",n,!1,void 0,t)}const rv=new RegExp("[~\\*/\\[\\]]");function Zu(n,e,t){if(e.search(rv)>=0)throw ei(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new co(...e.split("."))._internalPath}catch{throw ei(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ei(n,e,t,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new V(b.INVALID_ARGUMENT,l+n+h)}function iv(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class eh{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(th("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class sv extends eh{data(){return super.data()}}function th(n,e){return typeof e=="string"?Zu(n,e):e instanceof co?e._internalPath:e._delegate._internalPath}class ov{convertValue(e,t="none"){switch(Nt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(kt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw x()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return sn(e,(i,o)=>{r[i]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,i;const o=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ne(a.doubleValue));return new uo(o)}convertGeoPoint(e){return new lo(ne(e.latitude),ne(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=xs(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Bn(e));default:return null}}convertTimestamp(e){const t=pt(e);return new se(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Z.fromString(e);W(Ru(r));const i=new jn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return i.isEqual(t)||Qe(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */function av(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class cv{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nh extends eh{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new lv(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(th("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class lv extends nh{data(e={}){return super.data(e)}}/**
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
 */function uv(n){n=Gn(n,Se);const e=Gn(n.firestore,ao);return Gy(zu(e),n._key).then(t=>fv(e,n,t))}class hv extends ov{constructor(e){super(),this.firestore=e}convertBytes(e){return new en(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Se(this.firestore,null,t)}}function rh(n,e,t){n=Gn(n,Se);const r=Gn(n.firestore,ao),i=av(n.converter,e,t);return dv(r,[tv(ev(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,ze.none())])}function dv(n,e){return function(r,i){const o=new dt;return r.asyncQueue.enqueueAndForget(async()=>Oy(await qy(r),i,o)),o.promise}(zu(n),e)}function fv(n,e,t){const r=t.docs.get(e._key),i=new hv(n);return new nh(n,i,e._key,r,new cv(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){rn=i})(tn),zt(new Ct("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new ao(new am(r.getProvider("auth-internal")),new hm(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new V(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jn(d.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:t},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),ht(cc,"4.7.3",e),ht(cc,"4.7.3","esm2017")})();const pv="AIzaSyCkA-IrTwgCxfFzCHasgiZl4Pef6wZrbI0",gv=new Td(pv),mv={apiKey:"AIzaSyDcMhKXCKS5yu4J07Lep5hp8IP8a_KqK5E",authDomain:"smes-e1dc3.firebaseapp.com",projectId:"smes-e1dc3",storageBucket:"smes-e1dc3.firebasestorage.app",messagingSenderId:"626362737802",appId:"1:626362737802:web:5193274a7d9b4963c97973"},ih=sl(mv),fo=rm(ih),po=Qy(ih),_v=gv.getGenerativeModel({model:"gemini-2.5-flash-lite",systemInstruction:"你是由阿凱老師設計的桃園市石門國小資訊組 AI 客服『石門小智鈴』。請根據提供的知識庫內容，友善、專業地回答使用者的問題。如果問題不在知識庫中，請禮貌地告知並引導至相關單位。"});let sh="";fetch("./knowledge-base.txt").then(n=>n.text()).then(n=>{sh=n});let Ne=null,mt=[];const go=()=>document.getElementById("list-group"),oh=()=>document.getElementById("user-input"),yv=()=>document.getElementById("send-button");typeof marked<"u"&&marked.setOptions({gfm:!0,breaks:!0});function ah(n){const e=/(https?:\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+)/g;return n.replace(/(<a[\s\S]*?<\/a>|<[^>]+>)|([^<]*)/g,(t,r,i)=>r||(i?i.replace(e,o=>'<a href="'+o+'" target="_blank" rel="noopener noreferrer" style="color:#1565c0;text-decoration:underline;word-break:break-all;">'+o+"</a>"):t))}function ch(n,e){const t=/(https?:\/\/[^\s<>"]+)/g,r=[...new Set(e.match(t)||[])];if(r.length===0)return;const i=document.createElement("div");i.style.cssText="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;",r.forEach(function(o){let a=o;try{a=new URL(o).hostname.replace("www.","")}catch{}const l=document.createElement("a");l.href=o,l.target="_blank",l.rel="noopener noreferrer",l.title=o,l.style.cssText="display:inline-flex;align-items:center;gap:6px;padding:5px 12px;background:#f0f4ff;border:1px solid #c5cae9;border-radius:20px;text-decoration:none;color:#3949ab;font-size:12px;font-weight:600;transition:all 0.2s;",l.onmouseenter=function(){l.style.background="#3949ab",l.style.color="#fff",l.style.borderColor="#3949ab"},l.onmouseleave=function(){l.style.background="#f0f4ff",l.style.color="#3949ab",l.style.borderColor="#c5cae9"};const h=document.createElementNS("http://www.w3.org/2000/svg","svg");h.setAttribute("width","13"),h.setAttribute("height","13"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.setAttribute("stroke","currentColor"),h.setAttribute("stroke-width","2"),h.setAttribute("stroke-linecap","round"),h.setAttribute("stroke-linejoin","round"),h.style.flexShrink="0",h.innerHTML='<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>';const d=document.createElement("span");d.textContent=a,l.append(h,d),i.appendChild(l)}),n.appendChild(i)}function vv(n){if(!n)return"";const e=new Date(n),t=new Date,r=new Date(t);r.setDate(t.getDate()-1);const i=o=>o.toDateString();return i(e)===i(t)?"📅 今天":i(e)===i(r)?"📅 昨天":"📅 "+e.toLocaleDateString("zh-TW",{month:"long",day:"numeric"})}function qc(){const n=go();if(!n)return;n.innerHTML="";let e="";[...mt].reverse().forEach((i,o)=>{lh(i.user,i.ai,!1,i.time);const a=vv(i.time);if(a&&a!==e){e=a;const l=document.createElement("div");l.style.cssText="text-align:center;padding:6px 0;font-size:12px;color:#888;",l.innerHTML='<span style="background:#e8eaf6;border-radius:12px;padding:3px 14px;">'+a+"</span>",n.insertAdjacentElement("afterbegin",l)}});const r=document.getElementById("empty-hint");r&&(r.style.display=mt.length===0?"":"none")}window.clearHistory=async function(){if(!confirm("確定要清除所有對話嗎？此操作無法復原。"))return;mt=[];const n=go();n&&(n.innerHTML="");const e=document.getElementById("empty-hint");if(e&&(e.style.display=""),Ne){const t=oo(po,"chats",Ne.uid);await rh(t,{history:[]}).catch(r=>console.error("清除失敗:",r))}hh("🗑️ 對話已全部清除！")};function lh(n,e,t=!0,r=null){const o=`
    <div class="list-group-item list-group-item-action d-flex gap-3 py-3">
      <img src="https://www.smes.tyc.edu.tw/uploads/tadnews/image/logo/logo.png" alt="" width="64" height="64" class="rounded-circle flex-shrink-0">
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div style="display:flex;align-items:flex-start;gap:6px;flex-wrap:wrap;">
          <p class="mb-0 opacity-75" style="font-weight:bold;color:blue;margin:0;">${n}</p>${t?"":'<span style="font-size:11px;background:#e0e0e0;color:#757575;border-radius:10px;padding:1px 8px;margin-left:8px;font-weight:normal;">歷史</span>'}
        </div>
        <div class="mt-1 small">
          <button class="btn btn-outline-secondary btn-sm copy-btn" style="background-color:#90ee90;color:black;font-weight:bold;">複製</button>
        </div>
      </div>
    </div>`,a="ai-reply-"+Date.now()+"-"+Math.random().toString(36).slice(2,6),l=t?"思考回答中...":ah(marked.parse(e)),d=`
    <div id="${a}" class="list-group-item list-group-item-action d-flex gap-3 py-3 answer-background">
      <img src="https://www.smes.tyc.edu.tw/uploads/tadnews/image/person/k-a.png" alt="" width="64" height="66" class="rounded-circle flex-shrink-0">
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div class="ai-content-wrap" style="min-width:0;flex:1;">
          <div class="mb-0 ${t?"blink green-text":"black-text"} markdown-body" style="font-weight:bold;">${l}</div>
          <div class="mt-1 small">
            <button class="btn btn-outline-secondary btn-sm copy-btn" style="background-color:#ffff99;color:black;font-weight:bold;">複製</button>
          </div>
        </div>
      </div>
    </div>`;if(chatList.insertAdjacentHTML("afterbegin",d),chatList.insertAdjacentHTML("afterbegin",o),!t){const p=document.getElementById(a);p&&ch(p.querySelector(".ai-content-wrap"),e)}return a}async function Ev(n,e=3){const t=`知識庫：
${sh}

使用者問題：${n}`;for(let r=1;r<=e;r++)try{return(await(await _v.generateContent(t)).response).text()}catch(i){const o=(i==null?void 0:i.status)||(i==null?void 0:i.message)||"";if((String(o).includes("503")||String(o).includes("429")||String(i==null?void 0:i.message).includes("503")||String(i==null?void 0:i.message).includes("429"))&&r<e){const l=Math.pow(2,r)*1e3;console.warn(`Gemini ${o} 第 ${r} 次重試，等待 ${l/1e3}s...`);const h=document.querySelector(".blink.green-text");h&&(h.textContent=`⏳ AI 服務忙碌，第 ${r} 次重試中（${l/1e3}s）...`),await new Promise(d=>setTimeout(d,l))}else return console.error("Gemini Error:",i),String(o).includes("503")||String(i==null?void 0:i.message).includes("503")?"⚠️ AI 服務目前流量過高，請稍候片刻再試一次。":"抱歉，目前無法處理您的請求。請稍後再試。"}}async function uh(){const n=oh();if(!n)return;const e=n.value.trim();if(!e)return;n.value="",n.style.height="auto";const t=lh(e,"",!0),r=document.querySelector("#"+t+" .markdown-body"),i=await Ev(e);r&&(r.classList.remove("blink","green-text"),r.classList.add("black-text"),r.textContent="");let o="";const a=i.split(""),l=setInterval(()=>{if(a.length>0)o+=a.shift(),r&&(r.textContent=o);else{clearInterval(l),r&&(r.innerHTML=ah(marked.parse(o)));const h=document.getElementById(t);if(h&&ch(h.querySelector(".ai-content-wrap"),i),Ne){const d=Ne.displayName||Ne.email||"匿名使用者";mt.push({user:e,ai:i,time:new Date().toISOString(),userName:d,userEmail:Ne.email||""});const p=mt.slice(-20),T=oo(po,"chats",Ne.uid);rh(T,{history:p,userName:d,userEmail:Ne.email||"",lastActiveAt:new Date().toISOString()},{merge:!1}).catch(A=>console.error("Firestore Save Error:",A))}}},15)}function hh(n){let e=document.getElementById("copy-toast");e||(e=document.createElement("div"),e.id="copy-toast",e.style.cssText="position:fixed;top:80px;right:20px;background:#333;color:#fff;padding:10px 20px;border-radius:20px;font-size:14px;font-weight:bold;z-index:9999;opacity:0;transform:translateY(-10px);transition:opacity 0.25s ease,transform 0.25s ease;pointer-events:none;",document.body.appendChild(e)),e.textContent=n||"✅ 已複製到剪貼簿！",requestAnimationFrame(()=>{e.style.opacity="1",e.style.transform="translateY(0)"}),clearTimeout(e._hideTimer),e._hideTimer=setTimeout(()=>{e.style.opacity="0",e.style.transform="translateY(-10px)"},1800)}document.addEventListener("click",n=>{if(n.target.classList.contains("copy-btn")){const e=n.target,t=e.closest(".list-group-item"),r=t.querySelector(".markdown-body")||t.querySelector("p"),i=r?r.innerText:"";navigator.clipboard.writeText(i).then(()=>{const o=e.textContent,a=e.style.backgroundColor;e.textContent="✅ 已複製！",e.style.backgroundColor="#4caf50",e.style.color="white",e.disabled=!0,setTimeout(()=>{e.textContent=o,e.style.backgroundColor=a,e.style.color="black",e.disabled=!1},1200),hh()}).catch(o=>{console.error("複製失敗:",o),e.textContent="❌ 失敗",setTimeout(()=>{e.textContent="複製"},1200)})}});const Iv=new je;function Tv(){const n=document.getElementById("login-overlay");n&&(n.style.display="flex");const e=document.getElementById("chat-main");e&&(e.style.display="none")}function wv(){const n=document.getElementById("login-overlay");n&&(n.style.display="none");const e=document.getElementById("chat-main");e&&(e.style.display="")}function Hc(n){const e=document.getElementById("navbar-user");e&&(n?e.innerHTML=`
            <img src="${n.photoURL||""}" alt="" width="30" height="30"
                style="border-radius:50%;border:2px solid rgba(255,255,255,0.6);object-fit:cover;vertical-align:middle;">
            <span style="color:rgba(255,255,255,0.9);font-size:13px;font-weight:700;max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:middle;">
                ${n.displayName||n.email||"使用者"}
            </span>
            <button onclick="googleLogout()" title="登出"
                style="background:rgba(255,80,80,0.25);border:1px solid rgba(255,120,120,0.5);color:#fff;border-radius:16px;padding:3px 12px;font-size:12px;cursor:pointer;font-weight:700;transition:all 0.2s;vertical-align:middle;"
                onmouseenter="this.style.background='rgba(239,68,68,0.7)'"
                onmouseleave="this.style.background='rgba(255,80,80,0.25)'">
                登出
            </button>`:e.innerHTML="")}window.googleLogin=async function(){const n=document.getElementById("google-login-btn");n&&(n.disabled=!0,n.textContent="登入中...");try{await dg(fo,Iv)}catch(e){console.error("Google 登入失敗:",e),n&&(n.disabled=!1,n.textContent="使用 Google 帳號登入"),e.code!=="auth/popup-closed-by-user"&&alert("登入失敗，請再試一次。")}};window.googleLogout=async function(){if(!confirm("確定要登出嗎？"))return;mt=[];const n=go();n&&(n.innerHTML="");const e=document.getElementById("empty-hint");e&&(e.style.display="");try{await zp(fo)}catch(t){console.error("登出失敗:",t)}};Gp(fo,async n=>{if(n){Ne=n,wv(),Hc(n);const e=oo(po,"chats",n.uid),t=await uv(e);t.exists()?(mt=t.data().history||[],qc()):(mt=[],qc())}else Ne=null,Hc(null),Tv()});const Gc=yv(),Yi=oh();Gc&&Gc.addEventListener("click",uh);Yi&&(Yi.addEventListener("keydown",n=>{n.key==="Enter"&&!n.shiftKey&&(n.preventDefault(),uh())}),Yi.addEventListener("input",function(){this.style.height="auto",this.style.height=this.scrollHeight+"px"}));
