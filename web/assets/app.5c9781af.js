var zp=Object.defineProperty;var Up=(r,e,t)=>e in r?zp(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var si=(r,e,t)=>(Up(r,typeof e!="symbol"?e+"":e,t),t);var gl=!1,_l=!1,Ki=[];function kp(r){Bp(r)}function Bp(r){Ki.includes(r)||Ki.push(r),Gp()}function jf(r){let e=Ki.indexOf(r);e!==-1&&Ki.splice(e,1)}function Gp(){!_l&&!gl&&(gl=!0,queueMicrotask(Vp))}function Vp(){gl=!1,_l=!0;for(let r=0;r<Ki.length;r++)Ki[r]();Ki.length=0,_l=!1}var ds,Ys,$a,Yf,xl=!0;function Hp(r){xl=!1,r(),xl=!0}function Wp(r){ds=r.reactive,$a=r.release,Ys=e=>r.effect(e,{scheduler:t=>{xl?kp(t):t()}}),Yf=r.raw}function Jc(r){Ys=r}function qp(r){let e=()=>{};return[n=>{let i=Ys(n);return r._x_effects||(r._x_effects=new Set,r._x_runEffects=()=>{r._x_effects.forEach(s=>s())}),r._x_effects.add(i),e=()=>{i!==void 0&&(r._x_effects.delete(i),$a(i))},i},()=>{e()}]}var $f=[],Zf=[],Kf=[];function Xp(r){Kf.push(r)}function Jf(r,e){typeof e=="function"?(r._x_cleanups||(r._x_cleanups=[]),r._x_cleanups.push(e)):(e=r,Zf.push(e))}function jp(r){$f.push(r)}function Yp(r,e,t){r._x_attributeCleanups||(r._x_attributeCleanups={}),r._x_attributeCleanups[e]||(r._x_attributeCleanups[e]=[]),r._x_attributeCleanups[e].push(t)}function Qf(r,e){!r._x_attributeCleanups||Object.entries(r._x_attributeCleanups).forEach(([t,n])=>{(e===void 0||e.includes(t))&&(n.forEach(i=>i()),delete r._x_attributeCleanups[t])})}var ac=new MutationObserver(cc),oc=!1;function eh(){ac.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),oc=!0}function $p(){Zp(),ac.disconnect(),oc=!1}var Rs=[],So=!1;function Zp(){Rs=Rs.concat(ac.takeRecords()),Rs.length&&!So&&(So=!0,queueMicrotask(()=>{Kp(),So=!1}))}function Kp(){cc(Rs),Rs.length=0}function dt(r){if(!oc)return r();$p();let e=r();return eh(),e}var lc=!1,Oa=[];function Jp(){lc=!0}function Qp(){lc=!1,cc(Oa),Oa=[]}function cc(r){if(lc){Oa=Oa.concat(r);return}let e=[],t=[],n=new Map,i=new Map;for(let s=0;s<r.length;s++)if(!r[s].target._x_ignoreMutationObserver&&(r[s].type==="childList"&&(r[s].addedNodes.forEach(a=>a.nodeType===1&&e.push(a)),r[s].removedNodes.forEach(a=>a.nodeType===1&&t.push(a))),r[s].type==="attributes")){let a=r[s].target,o=r[s].attributeName,l=r[s].oldValue,c=()=>{n.has(a)||n.set(a,[]),n.get(a).push({name:o,value:a.getAttribute(o)})},u=()=>{i.has(a)||i.set(a,[]),i.get(a).push(o)};a.hasAttribute(o)&&l===null?c():a.hasAttribute(o)?(u(),c()):u()}i.forEach((s,a)=>{Qf(a,s)}),n.forEach((s,a)=>{$f.forEach(o=>o(a,s))});for(let s of t)if(!e.includes(s)&&(Zf.forEach(a=>a(s)),s._x_cleanups))for(;s._x_cleanups.length;)s._x_cleanups.pop()();e.forEach(s=>{s._x_ignoreSelf=!0,s._x_ignore=!0});for(let s of e)t.includes(s)||!s.isConnected||(delete s._x_ignoreSelf,delete s._x_ignore,Kf.forEach(a=>a(s)),s._x_ignore=!0,s._x_ignoreSelf=!0);e.forEach(s=>{delete s._x_ignoreSelf,delete s._x_ignore}),e=null,t=null,n=null,i=null}function th(r){return Zs(Yr(r))}function $s(r,e,t){return r._x_dataStack=[e,...Yr(t||r)],()=>{r._x_dataStack=r._x_dataStack.filter(n=>n!==e)}}function Qc(r,e){let t=r._x_dataStack[0];Object.entries(e).forEach(([n,i])=>{t[n]=i})}function Yr(r){return r._x_dataStack?r._x_dataStack:typeof ShadowRoot=="function"&&r instanceof ShadowRoot?Yr(r.host):r.parentNode?Yr(r.parentNode):[]}function Zs(r){let e=new Proxy({},{ownKeys:()=>Array.from(new Set(r.flatMap(t=>Object.keys(t)))),has:(t,n)=>r.some(i=>i.hasOwnProperty(n)),get:(t,n)=>(r.find(i=>{if(i.hasOwnProperty(n)){let s=Object.getOwnPropertyDescriptor(i,n);if(s.get&&s.get._x_alreadyBound||s.set&&s.set._x_alreadyBound)return!0;if((s.get||s.set)&&s.enumerable){let a=s.get,o=s.set,l=s;a=a&&a.bind(e),o=o&&o.bind(e),a&&(a._x_alreadyBound=!0),o&&(o._x_alreadyBound=!0),Object.defineProperty(i,n,{...l,get:a,set:o})}return!0}return!1})||{})[n],set:(t,n,i)=>{let s=r.find(a=>a.hasOwnProperty(n));return s?s[n]=i:r[r.length-1][n]=i,!0}});return e}function nh(r){let e=n=>typeof n=="object"&&!Array.isArray(n)&&n!==null,t=(n,i="")=>{Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(([s,{value:a,enumerable:o}])=>{if(o===!1||a===void 0)return;let l=i===""?s:`${i}.${s}`;typeof a=="object"&&a!==null&&a._x_interceptor?n[s]=a.initialize(r,l,s):e(a)&&a!==n&&!(a instanceof Element)&&t(a,l)})};return t(r)}function ih(r,e=()=>{}){let t={initialValue:void 0,_x_interceptor:!0,initialize(n,i,s){return r(this.initialValue,()=>em(n,i),a=>vl(n,i,a),i,s)}};return e(t),n=>{if(typeof n=="object"&&n!==null&&n._x_interceptor){let i=t.initialize.bind(t);t.initialize=(s,a,o)=>{let l=n.initialize(s,a,o);return t.initialValue=l,i(s,a,o)}}else t.initialValue=n;return t}}function em(r,e){return e.split(".").reduce((t,n)=>t[n],r)}function vl(r,e,t){if(typeof e=="string"&&(e=e.split(".")),e.length===1)r[e[0]]=t;else{if(e.length===0)throw error;return r[e[0]]||(r[e[0]]={}),vl(r[e[0]],e.slice(1),t)}}var rh={};function xn(r,e){rh[r]=e}function yl(r,e){return Object.entries(rh).forEach(([t,n])=>{Object.defineProperty(r,`$${t}`,{get(){let[i,s]=uh(e);return i={interceptor:ih,...i},Jf(e,s),n(e,i)},enumerable:!1})}),r}function tm(r,e,t,...n){try{return t(...n)}catch(i){Us(i,r,e)}}function Us(r,e,t=void 0){Object.assign(r,{el:e,expression:t}),console.warn(`Alpine Expression Error: ${r.message}

${t?'Expression: "'+t+`"

`:""}`,e),setTimeout(()=>{throw r},0)}var Ca=!0;function nm(r){let e=Ca;Ca=!1,r(),Ca=e}function Vr(r,e,t={}){let n;return At(r,e)(i=>n=i,t),n}function At(...r){return sh(...r)}var sh=ah;function im(r){sh=r}function ah(r,e){let t={};yl(t,r);let n=[t,...Yr(r)];if(typeof e=="function")return rm(n,e);let i=am(n,e,r);return tm.bind(null,r,e,i)}function rm(r,e){return(t=()=>{},{scope:n={},params:i=[]}={})=>{let s=e.apply(Zs([n,...r]),i);Fa(t,s)}}var wo={};function sm(r,e){if(wo[r])return wo[r];let t=Object.getPrototypeOf(async function(){}).constructor,n=/^[\n\s]*if.*\(.*\)/.test(r)||/^(let|const)\s/.test(r)?`(() => { ${r} })()`:r,s=(()=>{try{return new t(["__self","scope"],`with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`)}catch(a){return Us(a,e,r),Promise.resolve()}})();return wo[r]=s,s}function am(r,e,t){let n=sm(e,t);return(i=()=>{},{scope:s={},params:a=[]}={})=>{n.result=void 0,n.finished=!1;let o=Zs([s,...r]);if(typeof n=="function"){let l=n(n,o).catch(c=>Us(c,t,e));n.finished?(Fa(i,n.result,o,a,t),n.result=void 0):l.then(c=>{Fa(i,c,o,a,t)}).catch(c=>Us(c,t,e)).finally(()=>n.result=void 0)}}}function Fa(r,e,t,n,i){if(Ca&&typeof e=="function"){let s=e.apply(t,n);s instanceof Promise?s.then(a=>Fa(r,a,t,n)).catch(a=>Us(a,i,e)):r(s)}else r(e)}var uc="x-";function ps(r=""){return uc+r}function om(r){uc=r}var oh={};function at(r,e){oh[r]=e}function fc(r,e,t){if(e=Array.from(e),r._x_virtualDirectives){let s=Object.entries(r._x_virtualDirectives).map(([o,l])=>({name:o,value:l})),a=lh(s);s=s.map(o=>a.find(l=>l.name===o.name)?{name:`x-bind:${o.name}`,value:`"${o.value}"`}:o),e=e.concat(s)}let n={};return e.map(dh((s,a)=>n[s]=a)).filter(mh).map(um(n,t)).sort(fm).map(s=>cm(r,s))}function lh(r){return Array.from(r).map(dh()).filter(e=>!mh(e))}var bl=!1,Ts=new Map,ch=Symbol();function lm(r){bl=!0;let e=Symbol();ch=e,Ts.set(e,[]);let t=()=>{for(;Ts.get(e).length;)Ts.get(e).shift()();Ts.delete(e)},n=()=>{bl=!1,t()};r(t),n()}function uh(r){let e=[],t=o=>e.push(o),[n,i]=qp(r);return e.push(i),[{Alpine:Ks,effect:n,cleanup:t,evaluateLater:At.bind(At,r),evaluate:Vr.bind(Vr,r)},()=>e.forEach(o=>o())]}function cm(r,e){let t=()=>{},n=oh[e.type]||t,[i,s]=uh(r);Yp(r,e.original,s);let a=()=>{r._x_ignore||r._x_ignoreSelf||(n.inline&&n.inline(r,e,i),n=n.bind(n,r,e,i),bl?Ts.get(ch).push(n):n())};return a.runCleanups=s,a}var fh=(r,e)=>({name:t,value:n})=>(t.startsWith(r)&&(t=t.replace(r,e)),{name:t,value:n}),hh=r=>r;function dh(r=()=>{}){return({name:e,value:t})=>{let{name:n,value:i}=ph.reduce((s,a)=>a(s),{name:e,value:t});return n!==e&&r(n,e),{name:n,value:i}}}var ph=[];function hc(r){ph.push(r)}function mh({name:r}){return gh().test(r)}var gh=()=>new RegExp(`^${uc}([^:^.]+)\\b`);function um(r,e){return({name:t,value:n})=>{let i=t.match(gh()),s=t.match(/:([a-zA-Z0-9\-:]+)/),a=t.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],o=e||r[t]||t;return{type:i?i[1]:null,value:s?s[1]:null,modifiers:a.map(l=>l.replace(".","")),expression:n,original:o}}}var Ml="DEFAULT",ra=["ignore","ref","data","id","radio","tabs","switch","disclosure","menu","listbox","list","item","combobox","bind","init","for","mask","model","modelable","transition","show","if",Ml,"teleport"];function fm(r,e){let t=ra.indexOf(r.type)===-1?Ml:r.type,n=ra.indexOf(e.type)===-1?Ml:e.type;return ra.indexOf(t)-ra.indexOf(n)}function Is(r,e,t={}){r.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0,cancelable:!0}))}var Sl=[],dc=!1;function _h(r=()=>{}){return queueMicrotask(()=>{dc||setTimeout(()=>{wl()})}),new Promise(e=>{Sl.push(()=>{r(),e()})})}function wl(){for(dc=!1;Sl.length;)Sl.shift()()}function hm(){dc=!0}function ar(r,e){if(typeof ShadowRoot=="function"&&r instanceof ShadowRoot){Array.from(r.children).forEach(i=>ar(i,e));return}let t=!1;if(e(r,()=>t=!0),t)return;let n=r.firstElementChild;for(;n;)ar(n,e),n=n.nextElementSibling}function $r(r,...e){console.warn(`Alpine Warning: ${r}`,...e)}function dm(){document.body||$r("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),Is(document,"alpine:init"),Is(document,"alpine:initializing"),eh(),Xp(e=>bi(e,ar)),Jf(e=>mm(e)),jp((e,t)=>{fc(e,t).forEach(n=>n())});let r=e=>!Za(e.parentElement,!0);Array.from(document.querySelectorAll(yh())).filter(r).forEach(e=>{bi(e)}),Is(document,"alpine:initialized")}var pc=[],xh=[];function vh(){return pc.map(r=>r())}function yh(){return pc.concat(xh).map(r=>r())}function bh(r){pc.push(r)}function Mh(r){xh.push(r)}function Za(r,e=!1){return Ka(r,t=>{if((e?yh():vh()).some(i=>t.matches(i)))return!0})}function Ka(r,e){if(!!r){if(e(r))return r;if(r._x_teleportBack&&(r=r._x_teleportBack),!!r.parentElement)return Ka(r.parentElement,e)}}function pm(r){return vh().some(e=>r.matches(e))}function bi(r,e=ar){lm(()=>{e(r,(t,n)=>{fc(t,t.attributes).forEach(i=>i()),t._x_ignore&&n()})})}function mm(r){ar(r,e=>Qf(e))}function mc(r,e){return Array.isArray(e)?eu(r,e.join(" ")):typeof e=="object"&&e!==null?gm(r,e):typeof e=="function"?mc(r,e()):eu(r,e)}function eu(r,e){let t=i=>i.split(" ").filter(s=>!r.classList.contains(s)).filter(Boolean),n=i=>(r.classList.add(...i),()=>{r.classList.remove(...i)});return e=e===!0?e="":e||"",n(t(e))}function gm(r,e){let t=o=>o.split(" ").filter(Boolean),n=Object.entries(e).flatMap(([o,l])=>l?t(o):!1).filter(Boolean),i=Object.entries(e).flatMap(([o,l])=>l?!1:t(o)).filter(Boolean),s=[],a=[];return i.forEach(o=>{r.classList.contains(o)&&(r.classList.remove(o),a.push(o))}),n.forEach(o=>{r.classList.contains(o)||(r.classList.add(o),s.push(o))}),()=>{a.forEach(o=>r.classList.add(o)),s.forEach(o=>r.classList.remove(o))}}function Ja(r,e){return typeof e=="object"&&e!==null?_m(r,e):xm(r,e)}function _m(r,e){let t={};return Object.entries(e).forEach(([n,i])=>{t[n]=r.style[n],n.startsWith("--")||(n=vm(n)),r.style.setProperty(n,i)}),setTimeout(()=>{r.style.length===0&&r.removeAttribute("style")}),()=>{Ja(r,t)}}function xm(r,e){let t=r.getAttribute("style",e);return r.setAttribute("style",e),()=>{r.setAttribute("style",t||"")}}function vm(r){return r.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function El(r,e=()=>{}){let t=!1;return function(){t?e.apply(this,arguments):(t=!0,r.apply(this,arguments))}}at("transition",(r,{value:e,modifiers:t,expression:n},{evaluate:i})=>{typeof n=="function"&&(n=i(n)),n?ym(r,n,e):bm(r,t,e)});function ym(r,e,t){Sh(r,mc,""),{enter:i=>{r._x_transition.enter.during=i},"enter-start":i=>{r._x_transition.enter.start=i},"enter-end":i=>{r._x_transition.enter.end=i},leave:i=>{r._x_transition.leave.during=i},"leave-start":i=>{r._x_transition.leave.start=i},"leave-end":i=>{r._x_transition.leave.end=i}}[t](e)}function bm(r,e,t){Sh(r,Ja);let n=!e.includes("in")&&!e.includes("out")&&!t,i=n||e.includes("in")||["enter"].includes(t),s=n||e.includes("out")||["leave"].includes(t);e.includes("in")&&!n&&(e=e.filter((g,M)=>M<e.indexOf("out"))),e.includes("out")&&!n&&(e=e.filter((g,M)=>M>e.indexOf("out")));let a=!e.includes("opacity")&&!e.includes("scale"),o=a||e.includes("opacity"),l=a||e.includes("scale"),c=o?0:1,u=l?xs(e,"scale",95)/100:1,f=xs(e,"delay",0),h=xs(e,"origin","center"),m="opacity, transform",_=xs(e,"duration",150)/1e3,p=xs(e,"duration",75)/1e3,d="cubic-bezier(0.4, 0.0, 0.2, 1)";i&&(r._x_transition.enter.during={transformOrigin:h,transitionDelay:f,transitionProperty:m,transitionDuration:`${_}s`,transitionTimingFunction:d},r._x_transition.enter.start={opacity:c,transform:`scale(${u})`},r._x_transition.enter.end={opacity:1,transform:"scale(1)"}),s&&(r._x_transition.leave.during={transformOrigin:h,transitionDelay:f,transitionProperty:m,transitionDuration:`${p}s`,transitionTimingFunction:d},r._x_transition.leave.start={opacity:1,transform:"scale(1)"},r._x_transition.leave.end={opacity:c,transform:`scale(${u})`})}function Sh(r,e,t={}){r._x_transition||(r._x_transition={enter:{during:t,start:t,end:t},leave:{during:t,start:t,end:t},in(n=()=>{},i=()=>{}){Tl(r,e,{during:this.enter.during,start:this.enter.start,end:this.enter.end},n,i)},out(n=()=>{},i=()=>{}){Tl(r,e,{during:this.leave.during,start:this.leave.start,end:this.leave.end},n,i)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(r,e,t,n){const i=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let s=()=>i(t);if(e){r._x_transition&&(r._x_transition.enter||r._x_transition.leave)?r._x_transition.enter&&(Object.entries(r._x_transition.enter.during).length||Object.entries(r._x_transition.enter.start).length||Object.entries(r._x_transition.enter.end).length)?r._x_transition.in(t):s():r._x_transition?r._x_transition.in(t):s();return}r._x_hidePromise=r._x_transition?new Promise((a,o)=>{r._x_transition.out(()=>{},()=>a(n)),r._x_transitioning.beforeCancel(()=>o({isFromCancelledTransition:!0}))}):Promise.resolve(n),queueMicrotask(()=>{let a=wh(r);a?(a._x_hideChildren||(a._x_hideChildren=[]),a._x_hideChildren.push(r)):i(()=>{let o=l=>{let c=Promise.all([l._x_hidePromise,...(l._x_hideChildren||[]).map(o)]).then(([u])=>u());return delete l._x_hidePromise,delete l._x_hideChildren,c};o(r).catch(l=>{if(!l.isFromCancelledTransition)throw l})})})};function wh(r){let e=r.parentNode;if(!!e)return e._x_hidePromise?e:wh(e)}function Tl(r,e,{during:t,start:n,end:i}={},s=()=>{},a=()=>{}){if(r._x_transitioning&&r._x_transitioning.cancel(),Object.keys(t).length===0&&Object.keys(n).length===0&&Object.keys(i).length===0){s(),a();return}let o,l,c;Mm(r,{start(){o=e(r,n)},during(){l=e(r,t)},before:s,end(){o(),c=e(r,i)},after:a,cleanup(){l(),c()}})}function Mm(r,e){let t,n,i,s=El(()=>{dt(()=>{t=!0,n||e.before(),i||(e.end(),wl()),e.after(),r.isConnected&&e.cleanup(),delete r._x_transitioning})});r._x_transitioning={beforeCancels:[],beforeCancel(a){this.beforeCancels.push(a)},cancel:El(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();s()}),finish:s},dt(()=>{e.start(),e.during()}),hm(),requestAnimationFrame(()=>{if(t)return;let a=Number(getComputedStyle(r).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,o=Number(getComputedStyle(r).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;a===0&&(a=Number(getComputedStyle(r).animationDuration.replace("s",""))*1e3),dt(()=>{e.before()}),n=!0,requestAnimationFrame(()=>{t||(dt(()=>{e.end()}),wl(),setTimeout(r._x_transitioning.finish,a+o),i=!0)})})}function xs(r,e,t){if(r.indexOf(e)===-1)return t;const n=r[r.indexOf(e)+1];if(!n||e==="scale"&&isNaN(n))return t;if(e==="duration"){let i=n.match(/([0-9]+)ms/);if(i)return i[1]}return e==="origin"&&["top","right","left","center","bottom"].includes(r[r.indexOf(e)+2])?[n,r[r.indexOf(e)+2]].join(" "):n}var Al=!1;function Qa(r,e=()=>{}){return(...t)=>Al?e(...t):r(...t)}function Sm(r,e){e._x_dataStack||(e._x_dataStack=r._x_dataStack),Al=!0,Em(()=>{wm(e)}),Al=!1}function wm(r){let e=!1;bi(r,(n,i)=>{ar(n,(s,a)=>{if(e&&pm(s))return a();e=!0,i(s,a)})})}function Em(r){let e=Ys;Jc((t,n)=>{let i=e(t);return $a(i),()=>{}}),r(),Jc(e)}function Eh(r,e,t,n=[]){switch(r._x_bindings||(r._x_bindings=ds({})),r._x_bindings[e]=t,e=n.includes("camel")?Rm(e):e,e){case"value":Tm(r,t);break;case"style":Cm(r,t);break;case"class":Am(r,t);break;default:Lm(r,e,t);break}}function Tm(r,e){if(r.type==="radio")r.attributes.value===void 0&&(r.value=e),window.fromModel&&(r.checked=tu(r.value,e));else if(r.type==="checkbox")Number.isInteger(e)?r.value=e:!Number.isInteger(e)&&!Array.isArray(e)&&typeof e!="boolean"&&![null,void 0].includes(e)?r.value=String(e):Array.isArray(e)?r.checked=e.some(t=>tu(t,r.value)):r.checked=!!e;else if(r.tagName==="SELECT")Dm(r,e);else{if(r.value===e)return;r.value=e}}function Am(r,e){r._x_undoAddedClasses&&r._x_undoAddedClasses(),r._x_undoAddedClasses=mc(r,e)}function Cm(r,e){r._x_undoAddedStyles&&r._x_undoAddedStyles(),r._x_undoAddedStyles=Ja(r,e)}function Lm(r,e,t){[null,void 0,!1].includes(t)&&Im(e)?r.removeAttribute(e):(Th(e)&&(t=e),Pm(r,e,t))}function Pm(r,e,t){r.getAttribute(e)!=t&&r.setAttribute(e,t)}function Dm(r,e){const t=[].concat(e).map(n=>n+"");Array.from(r.options).forEach(n=>{n.selected=t.includes(n.value)})}function Rm(r){return r.toLowerCase().replace(/-(\w)/g,(e,t)=>t.toUpperCase())}function tu(r,e){return r==e}function Th(r){return["disabled","checked","required","readonly","hidden","open","selected","autofocus","itemscope","multiple","novalidate","allowfullscreen","allowpaymentrequest","formnovalidate","autoplay","controls","loop","muted","playsinline","default","ismap","reversed","async","defer","nomodule"].includes(r)}function Im(r){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(r)}function Om(r,e,t){if(r._x_bindings&&r._x_bindings[e]!==void 0)return r._x_bindings[e];let n=r.getAttribute(e);return n===null?typeof t=="function"?t():t:n===""?!0:Th(e)?!![e,"true"].includes(n):n}function Ah(r,e){var t;return function(){var n=this,i=arguments,s=function(){t=null,r.apply(n,i)};clearTimeout(t),t=setTimeout(s,e)}}function Ch(r,e){let t;return function(){let n=this,i=arguments;t||(r.apply(n,i),t=!0,setTimeout(()=>t=!1,e))}}function Fm(r){r(Ks)}var Vi={},nu=!1;function Nm(r,e){if(nu||(Vi=ds(Vi),nu=!0),e===void 0)return Vi[r];Vi[r]=e,typeof e=="object"&&e!==null&&e.hasOwnProperty("init")&&typeof e.init=="function"&&Vi[r].init(),nh(Vi[r])}function zm(){return Vi}var Lh={};function Um(r,e){let t=typeof e!="function"?()=>e:e;r instanceof Element?Ph(r,t()):Lh[r]=t}function km(r){return Object.entries(Lh).forEach(([e,t])=>{Object.defineProperty(r,e,{get(){return(...n)=>t(...n)}})}),r}function Ph(r,e,t){let n=[];for(;n.length;)n.pop()();let i=Object.entries(e).map(([a,o])=>({name:a,value:o})),s=lh(i);i=i.map(a=>s.find(o=>o.name===a.name)?{name:`x-bind:${a.name}`,value:`"${a.value}"`}:a),fc(r,i,t).map(a=>{n.push(a.runCleanups),a()})}var Dh={};function Bm(r,e){Dh[r]=e}function Gm(r,e){return Object.entries(Dh).forEach(([t,n])=>{Object.defineProperty(r,t,{get(){return(...i)=>n.bind(e)(...i)},enumerable:!1})}),r}var Vm={get reactive(){return ds},get release(){return $a},get effect(){return Ys},get raw(){return Yf},version:"3.10.5",flushAndStopDeferringMutations:Qp,dontAutoEvaluateFunctions:nm,disableEffectScheduling:Hp,setReactivityEngine:Wp,closestDataStack:Yr,skipDuringClone:Qa,addRootSelector:bh,addInitSelector:Mh,addScopeToNode:$s,deferMutations:Jp,mapAttributes:hc,evaluateLater:At,setEvaluator:im,mergeProxies:Zs,findClosest:Ka,closestRoot:Za,interceptor:ih,transition:Tl,setStyles:Ja,mutateDom:dt,directive:at,throttle:Ch,debounce:Ah,evaluate:Vr,initTree:bi,nextTick:_h,prefixed:ps,prefix:om,plugin:Fm,magic:xn,store:Nm,start:dm,clone:Sm,bound:Om,$data:th,data:Bm,bind:Um},Ks=Vm;function Hm(r,e){const t=Object.create(null),n=r.split(",");for(let i=0;i<n.length;i++)t[n[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}var Wm=Object.freeze({});Object.freeze([]);var Rh=Object.assign,qm=Object.prototype.hasOwnProperty,eo=(r,e)=>qm.call(r,e),Ji=Array.isArray,Os=r=>Ih(r)==="[object Map]",Xm=r=>typeof r=="string",gc=r=>typeof r=="symbol",to=r=>r!==null&&typeof r=="object",jm=Object.prototype.toString,Ih=r=>jm.call(r),Oh=r=>Ih(r).slice(8,-1),_c=r=>Xm(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,Ym=r=>{const e=Object.create(null);return t=>e[t]||(e[t]=r(t))},$m=Ym(r=>r.charAt(0).toUpperCase()+r.slice(1)),Fh=(r,e)=>r!==e&&(r===r||e===e),Cl=new WeakMap,vs=[],yn,Qi=Symbol("iterate"),Ll=Symbol("Map key iterate");function Zm(r){return r&&r._isEffect===!0}function Km(r,e=Wm){Zm(r)&&(r=r.raw);const t=eg(r,e);return e.lazy||t(),t}function Jm(r){r.active&&(Nh(r),r.options.onStop&&r.options.onStop(),r.active=!1)}var Qm=0;function eg(r,e){const t=function(){if(!t.active)return r();if(!vs.includes(t)){Nh(t);try{return ng(),vs.push(t),yn=t,r()}finally{vs.pop(),zh(),yn=vs[vs.length-1]}}};return t.id=Qm++,t.allowRecurse=!!e.allowRecurse,t._isEffect=!0,t.active=!0,t.raw=r,t.deps=[],t.options=e,t}function Nh(r){const{deps:e}=r;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(r);e.length=0}}var Zr=!0,xc=[];function tg(){xc.push(Zr),Zr=!1}function ng(){xc.push(Zr),Zr=!0}function zh(){const r=xc.pop();Zr=r===void 0?!0:r}function _n(r,e,t){if(!Zr||yn===void 0)return;let n=Cl.get(r);n||Cl.set(r,n=new Map);let i=n.get(t);i||n.set(t,i=new Set),i.has(yn)||(i.add(yn),yn.deps.push(i),yn.options.onTrack&&yn.options.onTrack({effect:yn,target:r,type:e,key:t}))}function Mi(r,e,t,n,i,s){const a=Cl.get(r);if(!a)return;const o=new Set,l=u=>{u&&u.forEach(f=>{(f!==yn||f.allowRecurse)&&o.add(f)})};if(e==="clear")a.forEach(l);else if(t==="length"&&Ji(r))a.forEach((u,f)=>{(f==="length"||f>=n)&&l(u)});else switch(t!==void 0&&l(a.get(t)),e){case"add":Ji(r)?_c(t)&&l(a.get("length")):(l(a.get(Qi)),Os(r)&&l(a.get(Ll)));break;case"delete":Ji(r)||(l(a.get(Qi)),Os(r)&&l(a.get(Ll)));break;case"set":Os(r)&&l(a.get(Qi));break}const c=u=>{u.options.onTrigger&&u.options.onTrigger({effect:u,target:r,key:t,type:e,newValue:n,oldValue:i,oldTarget:s}),u.options.scheduler?u.options.scheduler(u):u()};o.forEach(c)}var ig=Hm("__proto__,__v_isRef,__isVue"),Uh=new Set(Object.getOwnPropertyNames(Symbol).map(r=>Symbol[r]).filter(gc)),rg=no(),sg=no(!1,!0),ag=no(!0),og=no(!0,!0),Na={};["includes","indexOf","lastIndexOf"].forEach(r=>{const e=Array.prototype[r];Na[r]=function(...t){const n=je(this);for(let s=0,a=this.length;s<a;s++)_n(n,"get",s+"");const i=e.apply(n,t);return i===-1||i===!1?e.apply(n,t.map(je)):i}});["push","pop","shift","unshift","splice"].forEach(r=>{const e=Array.prototype[r];Na[r]=function(...t){tg();const n=e.apply(this,t);return zh(),n}});function no(r=!1,e=!1){return function(n,i,s){if(i==="__v_isReactive")return!r;if(i==="__v_isReadonly")return r;if(i==="__v_raw"&&s===(r?e?_g:Qh:e?gg:Jh).get(n))return n;const a=Ji(n);if(!r&&a&&eo(Na,i))return Reflect.get(Na,i,s);const o=Reflect.get(n,i,s);return(gc(i)?Uh.has(i):ig(i))||(r||_n(n,"get",i),e)?o:Pl(o)?!a||!_c(i)?o.value:o:to(o)?r?ed(o):Mc(o):o}}var lg=kh(),cg=kh(!0);function kh(r=!1){return function(t,n,i,s){let a=t[n];if(!r&&(i=je(i),a=je(a),!Ji(t)&&Pl(a)&&!Pl(i)))return a.value=i,!0;const o=Ji(t)&&_c(n)?Number(n)<t.length:eo(t,n),l=Reflect.set(t,n,i,s);return t===je(s)&&(o?Fh(i,a)&&Mi(t,"set",n,i,a):Mi(t,"add",n,i)),l}}function ug(r,e){const t=eo(r,e),n=r[e],i=Reflect.deleteProperty(r,e);return i&&t&&Mi(r,"delete",e,void 0,n),i}function fg(r,e){const t=Reflect.has(r,e);return(!gc(e)||!Uh.has(e))&&_n(r,"has",e),t}function hg(r){return _n(r,"iterate",Ji(r)?"length":Qi),Reflect.ownKeys(r)}var Bh={get:rg,set:lg,deleteProperty:ug,has:fg,ownKeys:hg},Gh={get:ag,set(r,e){return console.warn(`Set operation on key "${String(e)}" failed: target is readonly.`,r),!0},deleteProperty(r,e){return console.warn(`Delete operation on key "${String(e)}" failed: target is readonly.`,r),!0}};Rh({},Bh,{get:sg,set:cg});Rh({},Gh,{get:og});var vc=r=>to(r)?Mc(r):r,yc=r=>to(r)?ed(r):r,bc=r=>r,io=r=>Reflect.getPrototypeOf(r);function ro(r,e,t=!1,n=!1){r=r.__v_raw;const i=je(r),s=je(e);e!==s&&!t&&_n(i,"get",e),!t&&_n(i,"get",s);const{has:a}=io(i),o=n?bc:t?yc:vc;if(a.call(i,e))return o(r.get(e));if(a.call(i,s))return o(r.get(s));r!==i&&r.get(e)}function so(r,e=!1){const t=this.__v_raw,n=je(t),i=je(r);return r!==i&&!e&&_n(n,"has",r),!e&&_n(n,"has",i),r===i?t.has(r):t.has(r)||t.has(i)}function ao(r,e=!1){return r=r.__v_raw,!e&&_n(je(r),"iterate",Qi),Reflect.get(r,"size",r)}function Vh(r){r=je(r);const e=je(this);return io(e).has.call(e,r)||(e.add(r),Mi(e,"add",r,r)),this}function Hh(r,e){e=je(e);const t=je(this),{has:n,get:i}=io(t);let s=n.call(t,r);s?Kh(t,n,r):(r=je(r),s=n.call(t,r));const a=i.call(t,r);return t.set(r,e),s?Fh(e,a)&&Mi(t,"set",r,e,a):Mi(t,"add",r,e),this}function Wh(r){const e=je(this),{has:t,get:n}=io(e);let i=t.call(e,r);i?Kh(e,t,r):(r=je(r),i=t.call(e,r));const s=n?n.call(e,r):void 0,a=e.delete(r);return i&&Mi(e,"delete",r,void 0,s),a}function qh(){const r=je(this),e=r.size!==0,t=Os(r)?new Map(r):new Set(r),n=r.clear();return e&&Mi(r,"clear",void 0,void 0,t),n}function oo(r,e){return function(n,i){const s=this,a=s.__v_raw,o=je(a),l=e?bc:r?yc:vc;return!r&&_n(o,"iterate",Qi),a.forEach((c,u)=>n.call(i,l(c),l(u),s))}}function sa(r,e,t){return function(...n){const i=this.__v_raw,s=je(i),a=Os(s),o=r==="entries"||r===Symbol.iterator&&a,l=r==="keys"&&a,c=i[r](...n),u=t?bc:e?yc:vc;return!e&&_n(s,"iterate",l?Ll:Qi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function di(r){return function(...e){{const t=e[0]?`on key "${e[0]}" `:"";console.warn(`${$m(r)} operation ${t}failed: target is readonly.`,je(this))}return r==="delete"?!1:this}}var Xh={get(r){return ro(this,r)},get size(){return ao(this)},has:so,add:Vh,set:Hh,delete:Wh,clear:qh,forEach:oo(!1,!1)},jh={get(r){return ro(this,r,!1,!0)},get size(){return ao(this)},has:so,add:Vh,set:Hh,delete:Wh,clear:qh,forEach:oo(!1,!0)},Yh={get(r){return ro(this,r,!0)},get size(){return ao(this,!0)},has(r){return so.call(this,r,!0)},add:di("add"),set:di("set"),delete:di("delete"),clear:di("clear"),forEach:oo(!0,!1)},$h={get(r){return ro(this,r,!0,!0)},get size(){return ao(this,!0)},has(r){return so.call(this,r,!0)},add:di("add"),set:di("set"),delete:di("delete"),clear:di("clear"),forEach:oo(!0,!0)},dg=["keys","values","entries",Symbol.iterator];dg.forEach(r=>{Xh[r]=sa(r,!1,!1),Yh[r]=sa(r,!0,!1),jh[r]=sa(r,!1,!0),$h[r]=sa(r,!0,!0)});function Zh(r,e){const t=e?r?$h:jh:r?Yh:Xh;return(n,i,s)=>i==="__v_isReactive"?!r:i==="__v_isReadonly"?r:i==="__v_raw"?n:Reflect.get(eo(t,i)&&i in n?t:n,i,s)}var pg={get:Zh(!1,!1)},mg={get:Zh(!0,!1)};function Kh(r,e,t){const n=je(t);if(n!==t&&e.call(r,n)){const i=Oh(r);console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var Jh=new WeakMap,gg=new WeakMap,Qh=new WeakMap,_g=new WeakMap;function xg(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vg(r){return r.__v_skip||!Object.isExtensible(r)?0:xg(Oh(r))}function Mc(r){return r&&r.__v_isReadonly?r:td(r,!1,Bh,pg,Jh)}function ed(r){return td(r,!0,Gh,mg,Qh)}function td(r,e,t,n,i){if(!to(r))return console.warn(`value cannot be made reactive: ${String(r)}`),r;if(r.__v_raw&&!(e&&r.__v_isReactive))return r;const s=i.get(r);if(s)return s;const a=vg(r);if(a===0)return r;const o=new Proxy(r,a===2?n:t);return i.set(r,o),o}function je(r){return r&&je(r.__v_raw)||r}function Pl(r){return Boolean(r&&r.__v_isRef===!0)}xn("nextTick",()=>_h);xn("dispatch",r=>Is.bind(Is,r));xn("watch",(r,{evaluateLater:e,effect:t})=>(n,i)=>{let s=e(n),a=!0,o,l=t(()=>s(c=>{JSON.stringify(c),a?o=c:queueMicrotask(()=>{i(c,o),o=c}),a=!1}));r._x_effects.delete(l)});xn("store",zm);xn("data",r=>th(r));xn("root",r=>Za(r));xn("refs",r=>(r._x_refs_proxy||(r._x_refs_proxy=Zs(yg(r))),r._x_refs_proxy));function yg(r){let e=[],t=r;for(;t;)t._x_refs&&e.push(t._x_refs),t=t.parentNode;return e}var Eo={};function nd(r){return Eo[r]||(Eo[r]=0),++Eo[r]}function bg(r,e){return Ka(r,t=>{if(t._x_ids&&t._x_ids[e])return!0})}function Mg(r,e){r._x_ids||(r._x_ids={}),r._x_ids[e]||(r._x_ids[e]=nd(e))}xn("id",r=>(e,t=null)=>{let n=bg(r,e),i=n?n._x_ids[e]:nd(e);return t?`${e}-${i}-${t}`:`${e}-${i}`});xn("el",r=>r);id("Focus","focus","focus");id("Persist","persist","persist");function id(r,e,t){xn(e,n=>$r(`You can't use [$${directiveName}] without first installing the "${r}" plugin here: https://alpinejs.dev/plugins/${t}`,n))}at("modelable",(r,{expression:e},{effect:t,evaluateLater:n})=>{let i=n(e),s=()=>{let c;return i(u=>c=u),c},a=n(`${e} = __placeholder`),o=c=>a(()=>{},{scope:{__placeholder:c}}),l=s();o(l),queueMicrotask(()=>{if(!r._x_model)return;r._x_removeModelListeners.default();let c=r._x_model.get,u=r._x_model.set;t(()=>o(c())),t(()=>u(s()))})});at("teleport",(r,{expression:e},{cleanup:t})=>{r.tagName.toLowerCase()!=="template"&&$r("x-teleport can only be used on a <template> tag",r);let n=document.querySelector(e);n||$r(`Cannot find x-teleport element for selector: "${e}"`);let i=r.content.cloneNode(!0).firstElementChild;r._x_teleport=i,i._x_teleportBack=r,r._x_forwardEvents&&r._x_forwardEvents.forEach(s=>{i.addEventListener(s,a=>{a.stopPropagation(),r.dispatchEvent(new a.constructor(a.type,a))})}),$s(i,{},r),dt(()=>{n.appendChild(i),bi(i),i._x_ignore=!0}),t(()=>i.remove())});var rd=()=>{};rd.inline=(r,{modifiers:e},{cleanup:t})=>{e.includes("self")?r._x_ignoreSelf=!0:r._x_ignore=!0,t(()=>{e.includes("self")?delete r._x_ignoreSelf:delete r._x_ignore})};at("ignore",rd);at("effect",(r,{expression:e},{effect:t})=>t(At(r,e)));function sd(r,e,t,n){let i=r,s=l=>n(l),a={},o=(l,c)=>u=>c(l,u);if(t.includes("dot")&&(e=Sg(e)),t.includes("camel")&&(e=wg(e)),t.includes("passive")&&(a.passive=!0),t.includes("capture")&&(a.capture=!0),t.includes("window")&&(i=window),t.includes("document")&&(i=document),t.includes("prevent")&&(s=o(s,(l,c)=>{c.preventDefault(),l(c)})),t.includes("stop")&&(s=o(s,(l,c)=>{c.stopPropagation(),l(c)})),t.includes("self")&&(s=o(s,(l,c)=>{c.target===r&&l(c)})),(t.includes("away")||t.includes("outside"))&&(i=document,s=o(s,(l,c)=>{r.contains(c.target)||c.target.isConnected!==!1&&(r.offsetWidth<1&&r.offsetHeight<1||r._x_isShown!==!1&&l(c))})),t.includes("once")&&(s=o(s,(l,c)=>{l(c),i.removeEventListener(e,s,a)})),s=o(s,(l,c)=>{Tg(e)&&Ag(c,t)||l(c)}),t.includes("debounce")){let l=t[t.indexOf("debounce")+1]||"invalid-wait",c=Dl(l.split("ms")[0])?Number(l.split("ms")[0]):250;s=Ah(s,c)}if(t.includes("throttle")){let l=t[t.indexOf("throttle")+1]||"invalid-wait",c=Dl(l.split("ms")[0])?Number(l.split("ms")[0]):250;s=Ch(s,c)}return i.addEventListener(e,s,a),()=>{i.removeEventListener(e,s,a)}}function Sg(r){return r.replace(/-/g,".")}function wg(r){return r.toLowerCase().replace(/-(\w)/g,(e,t)=>t.toUpperCase())}function Dl(r){return!Array.isArray(r)&&!isNaN(r)}function Eg(r){return r.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function Tg(r){return["keydown","keyup"].includes(r)}function Ag(r,e){let t=e.filter(s=>!["window","document","prevent","stop","once"].includes(s));if(t.includes("debounce")){let s=t.indexOf("debounce");t.splice(s,Dl((t[s+1]||"invalid-wait").split("ms")[0])?2:1)}if(t.length===0||t.length===1&&iu(r.key).includes(t[0]))return!1;const i=["ctrl","shift","alt","meta","cmd","super"].filter(s=>t.includes(s));return t=t.filter(s=>!i.includes(s)),!(i.length>0&&i.filter(a=>((a==="cmd"||a==="super")&&(a="meta"),r[`${a}Key`])).length===i.length&&iu(r.key).includes(t[0]))}function iu(r){if(!r)return[];r=Eg(r);let e={ctrl:"control",slash:"/",space:"-",spacebar:"-",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",equal:"="};return e[r]=r,Object.keys(e).map(t=>{if(e[t]===r)return t}).filter(t=>t)}at("model",(r,{modifiers:e,expression:t},{effect:n,cleanup:i})=>{let s=At(r,t),a=`${t} = rightSideOfExpression($event, ${t})`,o=At(r,a);var l=r.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(r.type)||e.includes("lazy")?"change":"input";let c=Cg(r,e,t),u=sd(r,l,e,h=>{o(()=>{},{scope:{$event:h,rightSideOfExpression:c}})});r._x_removeModelListeners||(r._x_removeModelListeners={}),r._x_removeModelListeners.default=u,i(()=>r._x_removeModelListeners.default());let f=At(r,`${t} = __placeholder`);r._x_model={get(){let h;return s(m=>h=m),h},set(h){f(()=>{},{scope:{__placeholder:h}})}},r._x_forceModelUpdate=()=>{s(h=>{h===void 0&&t.match(/\./)&&(h=""),window.fromModel=!0,dt(()=>Eh(r,"value",h)),delete window.fromModel})},n(()=>{e.includes("unintrusive")&&document.activeElement.isSameNode(r)||r._x_forceModelUpdate()})});function Cg(r,e,t){return r.type==="radio"&&dt(()=>{r.hasAttribute("name")||r.setAttribute("name",t)}),(n,i)=>dt(()=>{if(n instanceof CustomEvent&&n.detail!==void 0)return n.detail||n.target.value;if(r.type==="checkbox")if(Array.isArray(i)){let s=e.includes("number")?To(n.target.value):n.target.value;return n.target.checked?i.concat([s]):i.filter(a=>!Lg(a,s))}else return n.target.checked;else{if(r.tagName.toLowerCase()==="select"&&r.multiple)return e.includes("number")?Array.from(n.target.selectedOptions).map(s=>{let a=s.value||s.text;return To(a)}):Array.from(n.target.selectedOptions).map(s=>s.value||s.text);{let s=n.target.value;return e.includes("number")?To(s):e.includes("trim")?s.trim():s}}})}function To(r){let e=r?parseFloat(r):null;return Pg(e)?e:r}function Lg(r,e){return r==e}function Pg(r){return!Array.isArray(r)&&!isNaN(r)}at("cloak",r=>queueMicrotask(()=>dt(()=>r.removeAttribute(ps("cloak")))));Mh(()=>`[${ps("init")}]`);at("init",Qa((r,{expression:e},{evaluate:t})=>typeof e=="string"?!!e.trim()&&t(e,{},!1):t(e,{},!1)));at("text",(r,{expression:e},{effect:t,evaluateLater:n})=>{let i=n(e);t(()=>{i(s=>{dt(()=>{r.textContent=s})})})});at("html",(r,{expression:e},{effect:t,evaluateLater:n})=>{let i=n(e);t(()=>{i(s=>{dt(()=>{r.innerHTML=s,r._x_ignoreSelf=!0,bi(r),delete r._x_ignoreSelf})})})});hc(fh(":",hh(ps("bind:"))));at("bind",(r,{value:e,modifiers:t,expression:n,original:i},{effect:s})=>{if(!e){let o={};km(o),At(r,n)(c=>{Ph(r,c,i)},{scope:o});return}if(e==="key")return Dg(r,n);let a=At(r,n);s(()=>a(o=>{o===void 0&&typeof n=="string"&&n.match(/\./)&&(o=""),dt(()=>Eh(r,e,o,t))}))});function Dg(r,e){r._x_keyExpression=e}bh(()=>`[${ps("data")}]`);at("data",Qa((r,{expression:e},{cleanup:t})=>{e=e===""?"{}":e;let n={};yl(n,r);let i={};Gm(i,n);let s=Vr(r,e,{scope:i});s===void 0&&(s={}),yl(s,r);let a=ds(s);nh(a);let o=$s(r,a);a.init&&Vr(r,a.init),t(()=>{a.destroy&&Vr(r,a.destroy),o()})}));at("show",(r,{modifiers:e,expression:t},{effect:n})=>{let i=At(r,t);r._x_doHide||(r._x_doHide=()=>{dt(()=>{r.style.setProperty("display","none",e.includes("important")?"important":void 0)})}),r._x_doShow||(r._x_doShow=()=>{dt(()=>{r.style.length===1&&r.style.display==="none"?r.removeAttribute("style"):r.style.removeProperty("display")})});let s=()=>{r._x_doHide(),r._x_isShown=!1},a=()=>{r._x_doShow(),r._x_isShown=!0},o=()=>setTimeout(a),l=El(f=>f?a():s(),f=>{typeof r._x_toggleAndCascadeWithTransitions=="function"?r._x_toggleAndCascadeWithTransitions(r,f,a,s):f?o():s()}),c,u=!0;n(()=>i(f=>{!u&&f===c||(e.includes("immediate")&&(f?o():s()),l(f),c=f,u=!1)}))});at("for",(r,{expression:e},{effect:t,cleanup:n})=>{let i=Ig(e),s=At(r,i.items),a=At(r,r._x_keyExpression||"index");r._x_prevKeys=[],r._x_lookup={},t(()=>Rg(r,i,s,a)),n(()=>{Object.values(r._x_lookup).forEach(o=>o.remove()),delete r._x_prevKeys,delete r._x_lookup})});function Rg(r,e,t,n){let i=a=>typeof a=="object"&&!Array.isArray(a),s=r;t(a=>{Og(a)&&a>=0&&(a=Array.from(Array(a).keys(),d=>d+1)),a===void 0&&(a=[]);let o=r._x_lookup,l=r._x_prevKeys,c=[],u=[];if(i(a))a=Object.entries(a).map(([d,g])=>{let M=ru(e,g,d,a);n(y=>u.push(y),{scope:{index:d,...M}}),c.push(M)});else for(let d=0;d<a.length;d++){let g=ru(e,a[d],d,a);n(M=>u.push(M),{scope:{index:d,...g}}),c.push(g)}let f=[],h=[],m=[],_=[];for(let d=0;d<l.length;d++){let g=l[d];u.indexOf(g)===-1&&m.push(g)}l=l.filter(d=>!m.includes(d));let p="template";for(let d=0;d<u.length;d++){let g=u[d],M=l.indexOf(g);if(M===-1)l.splice(d,0,g),f.push([p,d]);else if(M!==d){let y=l.splice(d,1)[0],b=l.splice(M-1,1)[0];l.splice(d,0,b),l.splice(M,0,y),h.push([y,b])}else _.push(g);p=g}for(let d=0;d<m.length;d++){let g=m[d];o[g]._x_effects&&o[g]._x_effects.forEach(jf),o[g].remove(),o[g]=null,delete o[g]}for(let d=0;d<h.length;d++){let[g,M]=h[d],y=o[g],b=o[M],x=document.createElement("div");dt(()=>{b.after(x),y.after(b),b._x_currentIfEl&&b.after(b._x_currentIfEl),x.before(y),y._x_currentIfEl&&y.after(y._x_currentIfEl),x.remove()}),Qc(b,c[u.indexOf(M)])}for(let d=0;d<f.length;d++){let[g,M]=f[d],y=g==="template"?s:o[g];y._x_currentIfEl&&(y=y._x_currentIfEl);let b=c[M],x=u[M],T=document.importNode(s.content,!0).firstElementChild;$s(T,ds(b),s),dt(()=>{y.after(T),bi(T)}),typeof x=="object"&&$r("x-for key cannot be an object, it must be a string or an integer",s),o[x]=T}for(let d=0;d<_.length;d++)Qc(o[_[d]],c[u.indexOf(_[d])]);s._x_prevKeys=u})}function Ig(r){let e=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,t=/^\s*\(|\)\s*$/g,n=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,i=r.match(n);if(!i)return;let s={};s.items=i[2].trim();let a=i[1].replace(t,"").trim(),o=a.match(e);return o?(s.item=a.replace(e,"").trim(),s.index=o[1].trim(),o[2]&&(s.collection=o[2].trim())):s.item=a,s}function ru(r,e,t,n){let i={};return/^\[.*\]$/.test(r.item)&&Array.isArray(e)?r.item.replace("[","").replace("]","").split(",").map(a=>a.trim()).forEach((a,o)=>{i[a]=e[o]}):/^\{.*\}$/.test(r.item)&&!Array.isArray(e)&&typeof e=="object"?r.item.replace("{","").replace("}","").split(",").map(a=>a.trim()).forEach(a=>{i[a]=e[a]}):i[r.item]=e,r.index&&(i[r.index]=t),r.collection&&(i[r.collection]=n),i}function Og(r){return!Array.isArray(r)&&!isNaN(r)}function ad(){}ad.inline=(r,{expression:e},{cleanup:t})=>{let n=Za(r);n._x_refs||(n._x_refs={}),n._x_refs[e]=r,t(()=>delete n._x_refs[e])};at("ref",ad);at("if",(r,{expression:e},{effect:t,cleanup:n})=>{let i=At(r,e),s=()=>{if(r._x_currentIfEl)return r._x_currentIfEl;let o=r.content.cloneNode(!0).firstElementChild;return $s(o,{},r),dt(()=>{r.after(o),bi(o)}),r._x_currentIfEl=o,r._x_undoIf=()=>{ar(o,l=>{l._x_effects&&l._x_effects.forEach(jf)}),o.remove(),delete r._x_currentIfEl},o},a=()=>{!r._x_undoIf||(r._x_undoIf(),delete r._x_undoIf)};t(()=>i(o=>{o?s():a()})),n(()=>r._x_undoIf&&r._x_undoIf())});at("id",(r,{expression:e},{evaluate:t})=>{t(e).forEach(i=>Mg(r,i))});hc(fh("@",hh(ps("on:"))));at("on",Qa((r,{value:e,modifiers:t,expression:n},{cleanup:i})=>{let s=n?At(r,n):()=>{};r.tagName.toLowerCase()==="template"&&(r._x_forwardEvents||(r._x_forwardEvents=[]),r._x_forwardEvents.includes(e)||r._x_forwardEvents.push(e));let a=sd(r,e,t,o=>{s(()=>{},{scope:{$event:o},params:[o]})});i(()=>a())}));lo("Collapse","collapse","collapse");lo("Intersect","intersect","intersect");lo("Focus","trap","focus");lo("Mask","mask","mask");function lo(r,e,t){at(e,n=>$r(`You can't use [x-${e}] without first installing the "${r}" plugin here: https://alpinejs.dev/plugins/${t}`,n))}Ks.setEvaluator(ah);Ks.setReactivityEngine({reactive:Mc,effect:Km,release:Jm,raw:je});var Fg=Ks,ms=Fg,Ng=function(r){const e="data-error",t=`${e}-msg`,n="error-msg",i="validate",s="required",a="input",o="checkbox",l="radio",c="group",u="form",f="fieldset",h=C=>`:not([type="${C}"])`,m=`${a}${h("search")}${h("reset")}${h("submit")},select,textarea`,_="hidden",p=(C,R)=>{const U=C instanceof HTMLElement;return R?U&&C.matches(R):U},d=(C,R)=>Array.isArray(C)&&C.includes(R),g=(C,R,U)=>C.addEventListener(R,U),M=(C,R)=>C.getAttribute(R),y=(C,R,U="")=>C.setAttribute(R,U),b=C=>p(C)?C:document.getElementById(C)||document.querySelector(`[name ="${C}"]`),x=C=>C&&C.closest(u),T=C=>M(C,"name")||M(C,"id"),L=C=>String(C).trim(),v=C=>{const R=b(C);let U=B.get(x(R));if(!U)return!1;if(p(R,u))return Object.values(U);if(p(R,f))return Object.values(U).filter(Q=>Q.set===R);if(p(R,m))return U[T(R)]},w=["mmddyyyy","ddmmyyyy","yyyymmdd"],F=/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})$/,j=/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})$/;function ie(C,R=w[2]){const U=C.split(/[-/.]/),Q=w.indexOf(R);let ne,H,ge;F.test(C)?(Q===0&&([ne,H,ge]=U),Q===1&&([H,ne,ge]=U)):j.test(C)&&Q===2&&([ge,ne,H]=U);const pe=`${ge}-${ne}-${H}`,oe=new Date(pe),se=oe.getTime();return!typeof se==="number"||Number.isNaN(se)?!1:oe.toISOString().startsWith(pe)}const B=new WeakMap,z=new WeakMap;function q(C,R,U){const Q=x(C),ne=T(C);if(Q&&ne){B.has(Q)||B.set(Q,r.reactive({}));let H=B.get(Q);R={...H[ne],name:ne,node:C,value:C.value,...R},R.required=R.required||d(R.mods,s)||d(R.mods,c)||C.hasAttribute(s);const ge=R.value;let pe=C.checkValidity();if(d([o,l],C.type)){R.required&&(pe=C.checked);let oe=R.array||[];if(C.type===o&&(C.checked&&!oe.includes(ge)&&oe.push(ge),C.checked||(oe=oe.filter(se=>se!==ge))),C.type===l&&C.checked&&(oe=[ge]),R.array=oe,R.value=oe.toString(),d(R.mods,c)){const se=R.exp||1;pe=oe.length>=se}}else if(R.required&&(pe=!!ge.trim()),pe&&ge){const oe=R.mods.filter(se=>w.indexOf(se)!==-1)[0];for(let se of R.mods)if(typeof Y[se]=="function"){pe=se==="date"?ie(ge,oe):Y[se](ge);break}R.exp===!1&&(pe=!1)}R.valid=pe,H[ne]=R,B.set(Q,H)}return U&&O(C,R.valid),R}const Y={};Y.email=C=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(L(C)),Y.tel=C=>/^((\+|0)\d{1,4})?[-\s.]?[-\s.]?\d[-\s.]?\d[-\s.]?\d[-\s.]?\d[-\s.]?\d[-\s.]?\d[-\s.]?\d[-\s.]?\d[-\s.]?(\d{1,2})$/.test(L(C)),Y.website=C=>/^(https?:\/\/)?(www\.)?([-a-zA-Z0-9@:%._+~#=]+(-?[a-zA-Z0-9])*\.)+[\w]{2,}(\/\S*)?$/.test(L(C)),Y.url=C=>/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_+.~#?&/=]*)/.test(L(C)),Y.number=C=>!isNaN(parseFloat(C))&&isFinite(C),Y.integer=C=>Y.number(C)&&Number.isInteger(Number(C)),Y.wholenumber=C=>Y.integer(C)&&Number(C)>0,Y.date=C=>ie(C),w.forEach(C=>{Y.date[C]=R=>ie(R,C)});let Z={};Z.data=C=>v(C),Z.formData=C=>B.get(x(b(C))),Z.value=C=>{const R=v(C);return Array.isArray(R)?R.reduce((U,Q)=>(U[Q.name]=Q.value,U),{}):R&&R.value},Z.updateData=(C,R,U)=>q(b(C),R,U),Z.toggleError=(C,R)=>O(b(C),R),Z.submit=C=>{let R=0;v(C.target).forEach(U=>{U.valid===!1&&(R++,R===1&&U.node.focus(),O(U.node,!1),C.preventDefault(),console.error(`${U.name} ${s}`))})},Z.isComplete=C=>{const R=v(C);return Array.isArray(R)?!R.some(U=>!U.valid):R&&R.valid},Object.keys(Y).forEach(C=>Z={...Z,[C]:Y[C]}),r.magic(i,()=>Z),r.magic("formData",C=>B.get(x(b(C)))),r.directive(s,(C,{value:R,expression:U},{evaluate:Q})=>{U&&r.effect(()=>{var ne;const H=Q(U),ge=R?((ne=v(R))==null?void 0:ne.value)===H:H;q(C,{required:ge}),ge||O(C,!0)})}),r.directive(i,(C,{modifiers:R,expression:U},{evaluate:Q})=>{const ne=x(C),H=oe=>{const se=oe.closest(".field-parent")||d(R,c)?oe.parentNode.parentNode:oe.parentNode;return{mods:[...R,oe.type],set:oe.closest(f),parentNode:se,exp:U&&Q(U)}};function ge(oe){N(oe);const se=d([o,l,"range"],oe.type),Te=se?"click":p(oe,"select")?"change":"blur";g(oe,Te,pe),d(R,a)&&!se&&g(oe,a,pe)}if(p(C,u)){z.set(ne,R);const oe=C.querySelectorAll(m);g(C,"reset",()=>{C.reset();const se=v(C);setTimeout(()=>{se.forEach(Te=>q(Te.node))},50)}),oe.forEach(se=>{T(se)&&(q(se,H(se)),se.getAttributeNames().some(Te=>Te.includes(`x-${i}`))||ge(se))})}if(T(C)&&p(C,m)){const oe=z.has(ne)?z.get(ne):[];R=[...R,...oe],q(C,H(C)),ge(C)}function pe(oe){const se=this,Te=v(se).mods,Se=q(se,{exp:U&&Q(U)},!0);return!Se.valid&&!d(Te,"bluronly")&&oe.type==="blur"&&g(se,a,pe),!Se.valid&&d(Te,"refocus")&&se.focus(),Se.valid}});function O(C,R){const U=T(C),Q=v(C).parentNode,ne=b(`${n}-${U}`);y(C,"aria-invalid",!R),R?(y(ne,_),Q.removeAttribute(e)):(ne.removeAttribute(_),y(Q,e,ne.textContent))}function D(C){for(;C;){if(C=C.nextElementSibling,p(C,`.${n}`))return C;if(p(C,m))return!1}return!1}function N(C){const R=T(C),U=`${n}-${R}`,Q=v(C),ne=d(Q.mods,c)?Q.parentNode:C,H=document.createElement("span");H.className=n;const ge=b(U)||D(ne)||H;y(ge,"id",U),y(ge,_),ge.innerHTML||(ge.textContent=M(ne,t)||`${R.replace(/[-_]/g," ")} ${s}`),y(C,"aria-errormessage",U),b(U)||ne.after(ge)}},zg=Ng,Ug=zg;function Lt(){if(!(this instanceof Lt))return new Lt;this.size=0,this.uid=0,this.selectors=[],this.selectorObjects={},this.indexes=Object.create(this.indexes),this.activeIndexes=[]}var ys=window.document.documentElement,kg=ys.matches||ys.webkitMatchesSelector||ys.mozMatchesSelector||ys.oMatchesSelector||ys.msMatchesSelector;Lt.prototype.matchesSelector=function(r,e){return kg.call(r,e)};Lt.prototype.querySelectorAll=function(r,e){return e.querySelectorAll(r)};Lt.prototype.indexes=[];var Bg=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;Lt.prototype.indexes.push({name:"ID",selector:function(e){var t;if(t=e.match(Bg))return t[0].slice(1)},element:function(e){if(e.id)return[e.id]}});var Gg=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;Lt.prototype.indexes.push({name:"CLASS",selector:function(e){var t;if(t=e.match(Gg))return t[0].slice(1)},element:function(e){var t=e.className;if(t){if(typeof t=="string")return t.split(/\s/);if(typeof t=="object"&&"baseVal"in t)return t.baseVal.split(/\s/)}}});var Vg=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;Lt.prototype.indexes.push({name:"TAG",selector:function(e){var t;if(t=e.match(Vg))return t[0].toUpperCase()},element:function(e){return[e.nodeName.toUpperCase()]}});Lt.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}};var Rl;typeof window.Map=="function"?Rl=window.Map:Rl=function(){function r(){this.map={}}return r.prototype.get=function(e){return this.map[e+" "]},r.prototype.set=function(e,t){this.map[e+" "]=t},r}();var su=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function od(r,e){r=r.slice(0).concat(r.default);var t=r.length,n,i,s,a,o=e,l,c,u=[];do if(su.exec(""),(s=su.exec(o))&&(o=s[3],s[2]||!o)){for(n=0;n<t;n++)if(c=r[n],l=c.selector(s[1])){for(i=u.length,a=!1;i--;)if(u[i].index===c&&u[i].key===l){a=!0;break}a||u.push({index:c,key:l});break}}while(s);return u}function Hg(r,e){var t,n,i;for(t=0,n=r.length;t<n;t++)if(i=r[t],e.isPrototypeOf(i))return i}Lt.prototype.logDefaultIndexUsed=function(){};Lt.prototype.add=function(r,e){var t,n,i,s,a,o,l,c,u=this.activeIndexes,f=this.selectors,h=this.selectorObjects;if(typeof r=="string"){for(t={id:this.uid++,selector:r,data:e},h[t.id]=t,l=od(this.indexes,r),n=0;n<l.length;n++)c=l[n],s=c.key,i=c.index,a=Hg(u,i),a||(a=Object.create(i),a.map=new Rl,u.push(a)),i===this.indexes.default&&this.logDefaultIndexUsed(t),o=a.map.get(s),o||(o=[],a.map.set(s,o)),o.push(t);this.size++,f.push(r)}};Lt.prototype.remove=function(r,e){if(typeof r=="string"){var t,n,i,s,a,o,l,c,u=this.activeIndexes,f=this.selectors=[],h=this.selectorObjects,m={},_=arguments.length===1;for(t=od(this.indexes,r),i=0;i<t.length;i++)for(n=t[i],s=u.length;s--;)if(o=u[s],n.index.isPrototypeOf(o)){if(l=o.map.get(n.key),l)for(a=l.length;a--;)c=l[a],c.selector===r&&(_||c.data===e)&&(l.splice(a,1),m[c.id]=!0);break}for(i in m)delete h[i],this.size--;for(i in h)f.push(h[i].selector)}};function ld(r,e){return r.id-e.id}Lt.prototype.queryAll=function(r){if(!this.selectors.length)return[];var e={},t=[],n=this.querySelectorAll(this.selectors.join(", "),r),i,s,a,o,l,c,u,f;for(i=0,a=n.length;i<a;i++)for(l=n[i],c=this.matches(l),s=0,o=c.length;s<o;s++)f=c[s],e[f.id]?u=e[f.id]:(u={id:f.id,selector:f.selector,data:f.data,elements:[]},e[f.id]=u,t.push(u)),u.elements.push(l);return t.sort(ld)};Lt.prototype.matches=function(r){if(!r)return[];var e,t,n,i,s,a,o,l,c,u,f,h=this.activeIndexes,m={},_=[];for(e=0,i=h.length;e<i;e++)if(o=h[e],l=o.element(r),l){for(t=0,s=l.length;t<s;t++)if(c=o.map.get(l[t]))for(n=0,a=c.length;n<a;n++)u=c[n],f=u.id,!m[f]&&this.matchesSelector(r,u.selector)&&(m[f]=!0,_.push(u))}return _.sort(ld)};const zr={},dn={},Il=["mouseenter","mouseleave","pointerenter","pointerleave","blur","focus"];function au(r){dn[r]===void 0&&(dn[r]=[])}function Wg(r,e){if(dn[r])for(let t=0;t<dn[r].length;t++)dn[r][t](...e)}function ou(r){return typeof r=="string"?document.querySelectorAll(r):r}function aa(r){let e=qg(zr[r.type],r.target);if(e.length)for(let t=0;t<e.length;t++)for(let n=0;n<e[t].stack.length;n++)Il.indexOf(r.type)!==-1?(lu(r,e[t].delegatedTarget),r.target===e[t].delegatedTarget&&e[t].stack[n].data(r)):(lu(r,e[t].delegatedTarget),e[t].stack[n].data(r))}function qg(r,e){const t=[];let n=e;do{if(n.nodeType!==1)break;const i=r.matches(n);i.length&&t.push({delegatedTarget:n,stack:i})}while(n=n.parentElement);return t}function lu(r,e){Object.defineProperty(r,"currentTarget",{configurable:!0,enumerable:!0,get:()=>e})}function cu(r){return JSON.parse(JSON.stringify(r))}class Xg{bindAll(e,t){t||(t=Object.getOwnPropertyNames(Object.getPrototypeOf(e)));for(let n=0;n<t.length;n++)e[t[n]]=e[t[n]].bind(e)}on(e,t,n,i){const s=e.split(" ");for(let a=0;a<s.length;a++){if(typeof t=="function"&&n===void 0){au(s[a]),dn[s[a]].push(t);continue}if(t.nodeType&&t.nodeType===1||t===window||t===document){t.addEventListener(s[a],n,i);continue}t=ou(t);for(let o=0;o<t.length;o++)t[o].addEventListener(s[a],n,i)}}delegate(e,t,n){const i=e.split(" ");for(let s=0;s<i.length;s++){let a=zr[i[s]];a===void 0&&(a=new Lt,zr[i[s]]=a,Il.indexOf(i[s])!==-1?document.addEventListener(i[s],aa,!0):document.addEventListener(i[s],aa)),a.add(t,n)}}off(e,t,n,i){const s=e.split(" ");for(let a=0;a<s.length;a++){if(t===void 0){dn[s[a]]=[];continue}if(typeof t=="function"){au(s[a]);for(let l=0;l<dn[s[a]].length;l++)dn[s[a]][l]===t&&dn[s[a]].splice(l,1);continue}const o=zr[s[a]];if(o!==void 0&&(o.remove(t,n),o.size===0)){delete zr[s[a]],Il.indexOf(s[a])!==-1?document.removeEventListener(s[a],aa,!0):document.removeEventListener(s[a],aa);continue}if(t.removeEventListener!==void 0){t.removeEventListener(s[a],n,i);continue}t=ou(t);for(let l=0;l<t.length;l++)t[l].removeEventListener(s[a],n,i)}}emit(e,...t){Wg(e,t)}debugDelegated(){return cu(zr)}debugBus(){return cu(dn)}}const Fi=new Xg,jg=new DOMParser;function Yg(r){return typeof r=="string"?jg.parseFromString(r,"text/html"):r}function Ni(r){const e=new URL(r,window.location.origin);let t=null;return e.hash.length&&(t=r.replace(e.hash,"")),{hasHash:e.hash.length>0,pathname:e.pathname,host:e.host,raw:r,href:t||e.href}}function $g(r){r.parentNode.replaceChild(Ol(r),r)}function Zg(r){r.parentNode.tagName==="HEAD"?document.head.appendChild(Ol(r)):document.body.appendChild(Ol(r))}function Ol(r){const e=document.createElement("SCRIPT");for(let t=0;t<r.attributes.length;t++){const n=r.attributes[t];e.setAttribute(n.nodeName,n.nodeValue)}return r.innerHTML&&(e.innerHTML=r.innerHTML),e}class Kr{constructor({wrapper:e}){this.wrapper=e}leave(e){return new Promise(t=>{this.onLeave({...e,done:t})})}enter(e){return new Promise(t=>{this.onEnter({...e,done:t})})}onLeave({from:e,trigger:t,done:n}){n()}onEnter({to:e,trigger:t,done:n}){n()}}class ks{constructor({content:e,page:t,title:n,wrapper:i}){this._contentString=e.outerHTML,this._DOM=null,this.page=t,this.title=n,this.wrapper=i,this.content=this.wrapper.lastElementChild}onEnter(){}onEnterCompleted(){}onLeave(){}onLeaveCompleted(){}initialLoad(){this.onEnter(),this.onEnterCompleted()}update(){document.title=this.title,this.wrapper.appendChild(this._DOM.firstElementChild),this.content=this.wrapper.lastElementChild,this._DOM=null}createDom(){this._DOM||(this._DOM=document.createElement("div"),this._DOM.innerHTML=this._contentString)}remove(){this.wrapper.firstElementChild.remove()}enter(e,t){return new Promise(n=>{this.onEnter(),e.enter({trigger:t,to:this.content}).then(()=>{this.onEnterCompleted(),n()})})}leave(e,t,n){return new Promise(i=>{this.onLeave(),e.leave({trigger:t,from:this.content}).then(()=>{n&&this.remove(),this.onLeaveCompleted(),i()})})}}class Kg{constructor(){si(this,"data",new Map);si(this,"regexCache",new Map)}add(e,t,n){this.data.has(e)||(this.data.set(e,new Map),this.regexCache.set(e,new RegExp(`^${e}$`))),this.data.get(e).set(t,n),this.regexCache.set(t,new RegExp(`^${t}$`))}findMatch(e,t){for(const[n,i]of this.data)if(e.pathname.match(this.regexCache.get(n))){for(const[s,a]of i)if(t.pathname.match(this.regexCache.get(s)))return a;break}return null}}const uu="A transition is currently in progress";class Jg{constructor(e={}){si(this,"isTransitioning",!1);si(this,"currentCacheEntry",null);si(this,"cache",new Map);si(this,"onClick",e=>{if(!(e.metaKey||e.ctrlKey)){const t=Ni(e.currentTarget.href);if(this.currentLocation=Ni(window.location.href),this.currentLocation.host!==t.host)return;if(this.currentLocation.href!==t.href||this.currentLocation.hasHash&&!t.hasHash){e.preventDefault(),this.navigateTo(t.raw,e.currentTarget.dataset.transition||!1,e.currentTarget).catch(n=>console.warn(n));return}!this.currentLocation.hasHash&&!t.hasHash&&e.preventDefault()}});si(this,"onPopstate",()=>{if(window.location.pathname===this.currentLocation.pathname&&!this.isPopping)return!1;if(!this.allowInterruption&&(this.isTransitioning||this.isPopping))return window.history.pushState({},"",this.popTarget),console.warn(uu),!1;this.isPopping||(this.popTarget=window.location.href),this.isPopping=!0,this.navigateTo(window.location.href,!1,"popstate")});const{links:t="a:not([target]):not([href^=\\#]):not([data-taxi-ignore])",removeOldContent:n=!0,allowInterruption:i=!1,bypassCache:s=!1,renderers:a={default:ks},transitions:o={default:Kr},reloadJsFilter:l=c=>c.dataset.taxiReload!==void 0}=e;this.renderers=a,this.transitions=o,this.defaultRenderer=this.renderers.default||ks,this.defaultTransition=this.transitions.default||Kr,this.wrapper=document.querySelector("[data-taxi]"),this.reloadJsFilter=l,this.removeOldContent=n,this.allowInterruption=i,this.bypassCache=s,this.cache=new Map,this.isPopping=!1,this.attachEvents(t),this.currentLocation=Ni(window.location.href),this.cache.set(this.currentLocation.href,this.createCacheEntry(document.cloneNode(!0))),this.currentCacheEntry=this.cache.get(this.currentLocation.href),this.currentCacheEntry.renderer.initialLoad()}setDefaultRenderer(e){this.defaultRenderer=this.renderers[e]}setDefaultTransition(e){this.defaultTransition=this.transitions[e]}addRoute(e,t,n){this.router||(this.router=new Kg),this.router.add(e,t,n)}preload(e,t=!1){return e=Ni(e).href,this.cache.has(e)?Promise.resolve():this.fetch(e,!1).then(async n=>{this.cache.set(e,this.createCacheEntry(n)),t&&this.cache.get(e).renderer.createDom()})}updateCache(e){const t=Ni(e||window.location.href).href;this.cache.has(t)&&this.cache.delete(t),this.cache.set(t,this.createCacheEntry(document.cloneNode(!0)))}clearCache(e){const t=Ni(e||window.location.href).href;this.cache.has(t)&&this.cache.delete(t)}navigateTo(e,t=!1,n=!1){return new Promise((i,s)=>{if(!this.allowInterruption&&this.isTransitioning){s(new Error(uu));return}this.isTransitioning=!0,this.isPopping=!0,this.targetLocation=Ni(e),this.popTarget=window.location.href;const a=new(this.chooseTransition(t))({wrapper:this.wrapper});let o;if(this.bypassCache||!this.cache.has(this.targetLocation.href)||this.cache.get(this.targetLocation.href).skipCache){const l=this.fetch(this.targetLocation.raw).then(c=>{this.cache.set(this.targetLocation.href,this.createCacheEntry(c)),this.cache.get(this.targetLocation.href).renderer.createDom()});o=this.beforeFetch(this.targetLocation,a,n).then(async()=>l.then(async c=>await this.afterFetch(this.targetLocation,a,this.cache.get(this.targetLocation.href),n)))}else this.cache.get(this.targetLocation.href).renderer.createDom(),o=this.beforeFetch(this.targetLocation,a,n).then(async()=>await this.afterFetch(this.targetLocation,a,this.cache.get(this.targetLocation.href),n));o.then(()=>{i()})})}on(e,t){Fi.on(e,t)}off(e,t){Fi.off(e,t)}beforeFetch(e,t,n){return Fi.emit("NAVIGATE_OUT",{from:this.currentCacheEntry,trigger:n}),new Promise(i=>{this.currentCacheEntry.renderer.leave(t,n,this.removeOldContent).then(()=>{n!=="popstate"&&window.history.pushState({},"",e.raw),i()})})}afterFetch(e,t,n,i){return this.currentLocation=e,this.popTarget=this.currentLocation.href,new Promise(s=>{n.renderer.update(),Fi.emit("NAVIGATE_IN",{from:this.currentCacheEntry,to:n,trigger:i}),this.reloadJsFilter&&this.loadScripts(n.scripts),n.renderer.enter(t,i).then(()=>{Fi.emit("NAVIGATE_END",{from:this.currentCacheEntry,to:n,trigger:i}),this.currentCacheEntry=n,this.isTransitioning=!1,this.isPopping=!1,s()})})}loadScripts(e){const t=[...e],n=Array.from(document.querySelectorAll("script")).filter(this.reloadJsFilter);for(let i=0;i<n.length;i++)for(let s=0;s<t.length;s++)if(n[i].outerHTML===t[s].outerHTML){$g(n[i]),t.splice(s,1);break}for(const i of t)Zg(i)}attachEvents(e){Fi.delegate("click",e,this.onClick),Fi.on("popstate",window,this.onPopstate)}fetch(e,t=!0){return new Promise((n,i)=>{fetch(e,{mode:"same-origin",method:"GET",headers:{"X-Requested-With":"Taxi"},credentials:"same-origin"}).then(s=>(s.ok||(i("Taxi encountered a non 2xx HTTP status code"),t&&(window.location.href=e)),s.text())).then(s=>{n(Yg(s))}).catch(s=>{i(s),t&&(window.location.href=e)})})}chooseTransition(e){var n;if(e)return this.transitions[e];const t=(n=this.router)==null?void 0:n.findMatch(this.currentLocation,this.targetLocation);return t?this.transitions[t]:this.defaultTransition}createCacheEntry(e){const t=e.querySelector("[data-taxi-view]"),n=t.dataset.taxiView.length?this.renderers[t.dataset.taxiView]:this.defaultRenderer;return n||console.warn(`The Renderer "${t.dataset.taxiView}" was set in the data-taxi-view of the requested page, but not registered in Taxi.`),{page:e,content:t,skipCache:t.hasAttribute("data-taxi-nocache"),scripts:this.reloadJsFilter?Array.from(e.querySelectorAll("script")).filter(this.reloadJsFilter):[],title:e.title,renderer:new n({wrapper:this.wrapper,title:e.title,content:t,page:e})}}}let Qg=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${Qg}px`);window.addEventListener("resize",()=>{let r=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${r}px`)});/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sc="146",yr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},e_=0,fu=1,t_=2,cd=1,n_=2,As=3,Jr=0,Ct=1,pi=2,xi=0,Hr=1,hu=2,du=3,pu=4,i_=5,Ur=100,r_=101,s_=102,mu=103,gu=104,a_=200,o_=201,l_=202,c_=203,ud=204,fd=205,u_=206,f_=207,h_=208,d_=209,p_=210,m_=0,g_=1,__=2,Fl=3,x_=4,v_=5,y_=6,b_=7,hd=0,M_=1,S_=2,zn=0,w_=1,E_=2,T_=3,dd=4,A_=5,pd=300,Qr=301,es=302,ts=303,Nl=304,co=306,zl=1e3,pn=1001,Ul=1002,Pt=1003,_u=1004,xu=1005,en=1006,C_=1007,uo=1008,or=1009,L_=1010,P_=1011,md=1012,D_=1013,ji=1014,Yi=1015,Bs=1016,R_=1017,I_=1018,Wr=1020,O_=1021,F_=1022,mn=1023,N_=1024,z_=1025,er=1026,ns=1027,U_=1028,k_=1029,B_=1030,G_=1031,V_=1033,Ao=33776,Co=33777,Lo=33778,Po=33779,vu=35840,yu=35841,bu=35842,Mu=35843,H_=36196,Su=37492,wu=37496,Eu=37808,Tu=37809,Au=37810,Cu=37811,Lu=37812,Pu=37813,Du=37814,Ru=37815,Iu=37816,Ou=37817,Fu=37818,Nu=37819,zu=37820,Uu=37821,ku=36492,lr=3e3,Be=3001,W_=3200,q_=3201,X_=0,j_=1,Rn="srgb",$i="srgb-linear",Do=7680,Y_=519,Bu=35044,Gu="300 es",kl=1035;class mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ro=Math.PI/180,Vu=180/Math.PI;function Js(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[r&255]+bt[r>>8&255]+bt[r>>16&255]+bt[r>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function Dt(r,e,t){return Math.max(e,Math.min(t,r))}function $_(r,e){return(r%e+e)%e}function Io(r,e,t){return(1-t)*r+t*e}function Hu(r){return(r&r-1)===0&&r!==0}function Bl(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function oa(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ut(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nn{constructor(){nn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],m=n[5],_=n[8],p=i[0],d=i[3],g=i[6],M=i[1],y=i[4],b=i[7],x=i[2],T=i[5],L=i[8];return s[0]=a*p+o*M+l*x,s[3]=a*d+o*y+l*T,s[6]=a*g+o*b+l*L,s[1]=c*p+u*M+f*x,s[4]=c*d+u*y+f*T,s[7]=c*g+u*b+f*L,s[2]=h*p+m*M+_*x,s[5]=h*d+m*y+_*T,s[8]=h*g+m*b+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,_=t*f+n*h+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=f*p,e[1]=(i*c-u*n)*p,e[2]=(o*n-i*a)*p,e[3]=h*p,e[4]=(u*t-i*l)*p,e[5]=(i*s-o*t)*p,e[6]=m*p,e[7]=(n*l-c*t)*p,e[8]=(a*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],a=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*s+n*l,i[3]=t*a+n*c,i[6]=t*o+n*u,i[1]=-n*s+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function gd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Gs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function tr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function La(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Oo={[Rn]:{[$i]:tr},[$i]:{[Rn]:La}},cn={legacyMode:!0,get workingColorSpace(){return $i},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Oo[e]&&Oo[e][t]!==void 0){const n=Oo[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},_d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ot={r:0,g:0,b:0},un={h:0,s:0,l:0},la={h:0,s:0,l:0};function Fo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function ca(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,cn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=$i){return this.r=e,this.g=t,this.b=n,cn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=$i){if(e=$_(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Fo(a,s,e+1/3),this.g=Fo(a,s,e),this.b=Fo(a,s,e-1/3)}return cn.toWorkingColorSpace(this,i),this}setStyle(e,t=Rn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,cn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,cn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,cn.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,cn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Rn){const n=_d[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=La(e.r),this.g=La(e.g),this.b=La(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return cn.fromWorkingColorSpace(ca(this,ot),e),Dt(ot.r*255,0,255)<<16^Dt(ot.g*255,0,255)<<8^Dt(ot.b*255,0,255)<<0}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$i){cn.fromWorkingColorSpace(ca(this,ot),t);const n=ot.r,i=ot.g,s=ot.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$i){return cn.fromWorkingColorSpace(ca(this,ot),t),e.r=ot.r,e.g=ot.g,e.b=ot.b,e}getStyle(e=Rn){return cn.fromWorkingColorSpace(ca(this,ot),e),e!==Rn?`color(${e} ${ot.r} ${ot.g} ${ot.b})`:`rgb(${ot.r*255|0},${ot.g*255|0},${ot.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(un),un.h+=e,un.s+=t,un.l+=n,this.setHSL(un.h,un.s,un.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(un),e.getHSL(la);const n=Io(un.h,la.h,t),i=Io(un.s,la.s,t),s=Io(un.l,la.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}$e.NAMES=_d;let Mr;class xd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mr===void 0&&(Mr=Gs("canvas")),Mr.width=e.width,Mr.height=e.height;const n=Mr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Mr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=tr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(tr(t[n]/255)*255):t[n]=tr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class vd{constructor(e=null){this.isSource=!0,this.uuid=Js(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(No(i[a].image)):s.push(No(i[a]))}else s=No(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function No(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?xd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Z_=0;class on extends mr{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,n=pn,i=pn,s=en,a=uo,o=mn,l=or,c=1,u=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=Js(),this.name="",this.source=new vd(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zl:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case Ul:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zl:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case Ul:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=pd;class _t{constructor(e=0,t=0,n=0,i=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],_=l[9],p=l[2],d=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(_-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(_+d)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,b=(m+1)/2,x=(g+1)/2,T=(u+h)/4,L=(f+p)/4,v=(_+d)/4;return y>b&&y>x?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=T/n,s=L/n):b>x?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=T/i,s=v/i):x<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(x),n=L/s,i=v/s),this.set(n,i,s,t),this}let M=Math.sqrt((d-_)*(d-_)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(d-_)/M,this.y=(f-p)/M,this.z=(h-u)/M,this.w=Math.acos((c+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cr extends mr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new on(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:en,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new vd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yd extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class K_ extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ur{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[a+0],m=s[a+1],_=s[a+2],p=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=p;return}if(f!==p||l!==h||c!==m||u!==_){let d=1-o;const g=l*h+c*m+u*_+f*p,M=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const x=Math.sqrt(y),T=Math.atan2(x,g*M);d=Math.sin(d*T)/x,o=Math.sin(o*T)/x}const b=o*M;if(l=l*d+h*b,c=c*d+m*b,u=u*d+_*b,f=f*d+p*b,d===1-o){const x=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=x,c*=x,u*=x,f*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*m-c*h,e[t+1]=l*_+u*h+c*f-o*m,e[t+2]=c*_+u*m+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),h=l(n/2),m=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"YXZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"ZXY":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"ZYX":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"YZX":this._x=h*u*f+c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f-h*m*_;break;case"XZY":this._x=h*u*f-c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-s*i,f=l*i+s*n-a*t,h=-s*t-a*n-o*i;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zo.copy(this).projectOnVector(e),this.sub(zo)}reflect(e){return this.sub(zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zo=new V,Wu=new ur;class Qs{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)zi.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(zi)}else n.boundingBox===null&&n.computeBoundingBox(),Uo.copy(n.boundingBox),Uo.applyMatrix4(e.matrixWorld),this.union(Uo);const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),ua.subVectors(this.max,bs),Sr.subVectors(e.a,bs),wr.subVectors(e.b,bs),Er.subVectors(e.c,bs),ai.subVectors(wr,Sr),oi.subVectors(Er,wr),Ui.subVectors(Sr,Er);let t=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-Ui.z,Ui.y,ai.z,0,-ai.x,oi.z,0,-oi.x,Ui.z,0,-Ui.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-Ui.y,Ui.x,0];return!ko(t,Sr,wr,Er,ua)||(t=[1,0,0,0,1,0,0,0,1],!ko(t,Sr,wr,Er,ua))?!1:(fa.crossVectors(ai,oi),t=[fa.x,fa.y,fa.z],ko(t,Sr,wr,Er,ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return zi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const An=[new V,new V,new V,new V,new V,new V,new V,new V],zi=new V,Uo=new Qs,Sr=new V,wr=new V,Er=new V,ai=new V,oi=new V,Ui=new V,bs=new V,ua=new V,fa=new V,ki=new V;function ko(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ki.fromArray(r,s);const o=i.x*Math.abs(ki.x)+i.y*Math.abs(ki.y)+i.z*Math.abs(ki.z),l=e.dot(ki),c=t.dot(ki),u=n.dot(ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const J_=new Qs,Ms=new V,Bo=new V;class wc{constructor(e=new V,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):J_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const t=Ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ms,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(Bo)),this.expandByPoint(Ms.copy(e.center).sub(Bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new V,Go=new V,ha=new V,li=new V,Vo=new V,da=new V,Ho=new V;class bd{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.direction).multiplyScalar(t).add(this.origin),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Go.copy(e).add(t).multiplyScalar(.5),ha.copy(t).sub(e).normalize(),li.copy(this.origin).sub(Go);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ha),o=li.dot(this.direction),l=-li.dot(ha),c=li.lengthSq(),u=Math.abs(1-a*a);let f,h,m,_;if(u>0)if(f=a*l-o,h=a*o-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const p=1/u;f*=p,h*=p,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(ha).multiplyScalar(h).add(Go),m}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const n=Cn.dot(this.direction),i=Cn.dot(Cn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,n,i,s){Vo.subVectors(t,e),da.subVectors(n,e),Ho.crossVectors(Vo,da);let a=this.direction.dot(Ho),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;li.subVectors(this.origin,e);const l=o*this.direction.dot(da.crossVectors(li,da));if(l<0)return null;const c=o*this.direction.dot(Vo.cross(li));if(c<0||l+c>a)return null;const u=-o*li.dot(Ho);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,l,c,u,f,h,m,_,p,d){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=m,g[7]=_,g[11]=p,g[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Tr.setFromMatrixColumn(e,0).length(),s=1/Tr.setFromMatrixColumn(e,1).length(),a=1/Tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,_=o*u,p=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=h-p*c,t[9]=-o*l,t[2]=p-h*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,_=c*u,p=c*f;t[0]=h+p*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=p+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,_=c*u,p=c*f;t[0]=h-p*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=p-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,_=o*u,p=o*f;t[0]=l*u,t[4]=_*c-m,t[8]=h*c+p,t[1]=l*f,t[5]=p*c+h,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,p=o*c;t[0]=l*u,t[4]=p-h*f,t[8]=_*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+_,t[10]=h-p*f}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,p=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+p,t[5]=a*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Q_,e,e0)}lookAt(e,t,n){const i=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),ci.crossVectors(n,kt),ci.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),ci.crossVectors(n,kt)),ci.normalize(),pa.crossVectors(kt,ci),i[0]=ci.x,i[4]=pa.x,i[8]=kt.x,i[1]=ci.y,i[5]=pa.y,i[9]=kt.y,i[2]=ci.z,i[6]=pa.z,i[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],m=n[13],_=n[2],p=n[6],d=n[10],g=n[14],M=n[3],y=n[7],b=n[11],x=n[15],T=i[0],L=i[4],v=i[8],w=i[12],F=i[1],j=i[5],ie=i[9],B=i[13],z=i[2],q=i[6],Y=i[10],Z=i[14],O=i[3],D=i[7],N=i[11],C=i[15];return s[0]=a*T+o*F+l*z+c*O,s[4]=a*L+o*j+l*q+c*D,s[8]=a*v+o*ie+l*Y+c*N,s[12]=a*w+o*B+l*Z+c*C,s[1]=u*T+f*F+h*z+m*O,s[5]=u*L+f*j+h*q+m*D,s[9]=u*v+f*ie+h*Y+m*N,s[13]=u*w+f*B+h*Z+m*C,s[2]=_*T+p*F+d*z+g*O,s[6]=_*L+p*j+d*q+g*D,s[10]=_*v+p*ie+d*Y+g*N,s[14]=_*w+p*B+d*Z+g*C,s[3]=M*T+y*F+b*z+x*O,s[7]=M*L+y*j+b*q+x*D,s[11]=M*v+y*ie+b*Y+x*N,s[15]=M*w+y*B+b*Z+x*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],_=e[3],p=e[7],d=e[11],g=e[15];return _*(+s*l*f-i*c*f-s*o*h+n*c*h+i*o*m-n*l*m)+p*(+t*l*m-t*c*h+s*a*h-i*a*m+i*c*u-s*l*u)+d*(+t*c*f-t*o*m-s*a*f+n*a*m+s*o*u-n*c*u)+g*(-i*o*u-t*l*f+t*o*h+i*a*f-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],_=e[12],p=e[13],d=e[14],g=e[15],M=f*d*c-p*h*c+p*l*m-o*d*m-f*l*g+o*h*g,y=_*h*c-u*d*c-_*l*m+a*d*m+u*l*g-a*h*g,b=u*p*c-_*f*c+_*o*m-a*p*m-u*o*g+a*f*g,x=_*f*l-u*p*l-_*o*h+a*p*h+u*o*d-a*f*d,T=t*M+n*y+i*b+s*x;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/T;return e[0]=M*L,e[1]=(p*h*s-f*d*s-p*i*m+n*d*m+f*i*g-n*h*g)*L,e[2]=(o*d*s-p*l*s+p*i*c-n*d*c-o*i*g+n*l*g)*L,e[3]=(f*l*s-o*h*s-f*i*c+n*h*c+o*i*m-n*l*m)*L,e[4]=y*L,e[5]=(u*d*s-_*h*s+_*i*m-t*d*m-u*i*g+t*h*g)*L,e[6]=(_*l*s-a*d*s-_*i*c+t*d*c+a*i*g-t*l*g)*L,e[7]=(a*h*s-u*l*s+u*i*c-t*h*c-a*i*m+t*l*m)*L,e[8]=b*L,e[9]=(_*f*s-u*p*s-_*n*m+t*p*m+u*n*g-t*f*g)*L,e[10]=(a*p*s-_*o*s+_*n*c-t*p*c-a*n*g+t*o*g)*L,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*m-t*o*m)*L,e[12]=x*L,e[13]=(u*p*i-_*f*i+_*n*h-t*p*h-u*n*d+t*f*d)*L,e[14]=(_*o*i-a*p*i-_*n*l+t*p*l+a*n*d-t*o*d)*L,e[15]=(a*f*i-u*o*i+u*n*l-t*f*l-a*n*h+t*o*h)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,_=s*f,p=a*u,d=a*f,g=o*f,M=l*c,y=l*u,b=l*f,x=n.x,T=n.y,L=n.z;return i[0]=(1-(p+g))*x,i[1]=(m+b)*x,i[2]=(_-y)*x,i[3]=0,i[4]=(m-b)*T,i[5]=(1-(h+g))*T,i[6]=(d+M)*T,i[7]=0,i[8]=(_+y)*L,i[9]=(d-M)*L,i[10]=(1-(h+p))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Tr.set(i[0],i[1],i[2]).length();const a=Tr.set(i[4],i[5],i[6]).length(),o=Tr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],fn.copy(this);const c=1/s,u=1/a,f=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=f,fn.elements[9]*=f,fn.elements[10]*=f,t.setFromRotationMatrix(fn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),h=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-s),f=(t+e)*l,h=(n+i)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Tr=new V,fn=new xt,Q_=new V(0,0,0),e0=new V(1,1,1),ci=new V,pa=new V,kt=new V,qu=new xt,Xu=new ur;class ea{constructor(e=0,t=0,n=0,i=ea.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xu.setFromEuler(this),this.setFromQuaternion(Xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ea.DefaultOrder="XYZ";ea.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ec{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let t0=0;const ju=new V,Ar=new ur,Ln=new xt,ma=new V,Ss=new V,n0=new V,i0=new ur,Yu=new V(1,0,0),$u=new V(0,1,0),Zu=new V(0,0,1),r0={type:"added"},Ku={type:"removed"};class Ht extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DefaultUp.clone();const e=new V,t=new ea,n=new ur,i=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new xt},normalMatrix:{value:new nn}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Ht.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ht.DefaultMatrixWorldAutoUpdate,this.layers=new Ec,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(Yu,e)}rotateY(e){return this.rotateOnAxis($u,e)}rotateZ(e){return this.rotateOnAxis(Zu,e)}translateOnAxis(e,t){return ju.copy(e).applyQuaternion(this.quaternion),this.position.add(ju.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yu,e)}translateY(e){return this.translateOnAxis($u,e)}translateZ(e){return this.translateOnAxis(Zu,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ma.copy(e):ma.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Ss,ma,this.up):Ln.lookAt(ma,Ss,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),Ar.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(r0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ku)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ku)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,e,n0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,i0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ht.DefaultUp=new V(0,1,0);Ht.DefaultMatrixAutoUpdate=!0;Ht.DefaultMatrixWorldAutoUpdate=!0;const hn=new V,Pn=new V,Wo=new V,Dn=new V,Cr=new V,Lr=new V,Ju=new V,qo=new V,Xo=new V,jo=new V;class Fn{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),hn.subVectors(e,t),i.cross(hn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){hn.subVectors(i,t),Pn.subVectors(n,t),Wo.subVectors(e,t);const a=hn.dot(hn),o=hn.dot(Pn),l=hn.dot(Wo),c=Pn.dot(Pn),u=Pn.dot(Wo),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Dn),Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Dn),l.set(0,0),l.addScaledVector(s,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l}static isFrontFacing(e,t,n,i){return hn.subVectors(n,t),Pn.subVectors(e,t),hn.cross(Pn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),hn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Fn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Cr.subVectors(i,n),Lr.subVectors(s,n),qo.subVectors(e,n);const l=Cr.dot(qo),c=Lr.dot(qo);if(l<=0&&c<=0)return t.copy(n);Xo.subVectors(e,i);const u=Cr.dot(Xo),f=Lr.dot(Xo);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Cr,a);jo.subVectors(e,s);const m=Cr.dot(jo),_=Lr.dot(jo);if(_>=0&&m<=_)return t.copy(s);const p=m*c-l*_;if(p<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Lr,o);const d=u*_-m*f;if(d<=0&&f-u>=0&&m-_>=0)return Ju.subVectors(s,i),o=(f-u)/(f-u+(m-_)),t.copy(i).addScaledVector(Ju,o);const g=1/(d+p+h);return a=p*g,o=h*g,t.copy(n).addScaledVector(Cr,a).addScaledVector(Lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let s0=0;class fo extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=Hr,this.side=Jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ud,this.blendDst=fd,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Y_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Do,this.stencilZFail=Do,this.stencilZPass=Do,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(n.blending=this.blending),this.side!==Jr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class tt extends fo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const it=new V,ga=new De;class Sn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Bu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ga.fromBufferAttribute(this,t),ga.applyMatrix3(e),this.setXY(t,ga.x,ga.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix3(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Md extends Sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sd extends Sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Wt extends Sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let a0=0;const Kt=new xt,Yo=new Ht,Pr=new V,Bt=new Qs,ws=new Qs,ht=new V;class ni extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gd(e)?Sd:Md)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new nn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return Yo.lookAt(e),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Bt.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ws.setFromBufferAttribute(o),this.morphTargetsRelative?(ht.addVectors(Bt.min,ws.min),Bt.expandByPoint(ht),ht.addVectors(Bt.max,ws.max),Bt.expandByPoint(ht)):(Bt.expandByPoint(ws.min),Bt.expandByPoint(ws.max))}Bt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)ht.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ht));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ht.fromBufferAttribute(o,c),l&&(Pr.fromBufferAttribute(e,c),ht.add(Pr)),i=Math.max(i,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let F=0;F<o;F++)c[F]=new V,u[F]=new V;const f=new V,h=new V,m=new V,_=new De,p=new De,d=new De,g=new V,M=new V;function y(F,j,ie){f.fromArray(i,F*3),h.fromArray(i,j*3),m.fromArray(i,ie*3),_.fromArray(a,F*2),p.fromArray(a,j*2),d.fromArray(a,ie*2),h.sub(f),m.sub(f),p.sub(_),d.sub(_);const B=1/(p.x*d.y-d.x*p.y);!isFinite(B)||(g.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(B),M.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(B),c[F].add(g),c[j].add(g),c[ie].add(g),u[F].add(M),u[j].add(M),u[ie].add(M))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let F=0,j=b.length;F<j;++F){const ie=b[F],B=ie.start,z=ie.count;for(let q=B,Y=B+z;q<Y;q+=3)y(n[q+0],n[q+1],n[q+2])}const x=new V,T=new V,L=new V,v=new V;function w(F){L.fromArray(s,F*3),v.copy(L);const j=c[F];x.copy(j),x.sub(L.multiplyScalar(L.dot(j))).normalize(),T.crossVectors(v,j);const B=T.dot(u[F])<0?-1:1;l[F*4]=x.x,l[F*4+1]=x.y,l[F*4+2]=x.z,l[F*4+3]=B}for(let F=0,j=b.length;F<j;++F){const ie=b[F],B=ie.start,z=ie.count;for(let q=B,Y=B+z;q<Y;q+=3)w(n[q+0]),w(n[q+1]),w(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new V,s=new V,a=new V,o=new V,l=new V,c=new V,u=new V,f=new V;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,d),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,d),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,_=0;for(let p=0,d=l.length;p<d;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let g=0;g<u;g++)h[_++]=c[m++]}return new Sn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ni,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qu=new xt,Dr=new bd,$o=new wc,ui=new V,fi=new V,hi=new V,Zo=new V,Ko=new V,Jo=new V,_a=new V,xa=new V,va=new V,ya=new De,ba=new De,Ma=new De,Qo=new V,Sa=new V;class Ve extends Ht{constructor(e=new ni,t=new tt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(s),e.ray.intersectsSphere($o)===!1)||(Qu.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(Qu),n.boundingBox!==null&&Dr.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,h=n.attributes.uv2,m=n.groups,_=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,d=m.length;p<d;p++){const g=m[p],M=i[g.materialIndex],y=Math.max(g.start,_.start),b=Math.min(o.count,Math.min(g.start+g.count,_.start+_.count));for(let x=y,T=b;x<T;x+=3){const L=o.getX(x),v=o.getX(x+1),w=o.getX(x+2);a=wa(this,M,e,Dr,l,c,u,f,h,L,v,w),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const p=Math.max(0,_.start),d=Math.min(o.count,_.start+_.count);for(let g=p,M=d;g<M;g+=3){const y=o.getX(g),b=o.getX(g+1),x=o.getX(g+2);a=wa(this,i,e,Dr,l,c,u,f,h,y,b,x),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,d=m.length;p<d;p++){const g=m[p],M=i[g.materialIndex],y=Math.max(g.start,_.start),b=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let x=y,T=b;x<T;x+=3){const L=x,v=x+1,w=x+2;a=wa(this,M,e,Dr,l,c,u,f,h,L,v,w),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const p=Math.max(0,_.start),d=Math.min(l.count,_.start+_.count);for(let g=p,M=d;g<M;g+=3){const y=g,b=g+1,x=g+2;a=wa(this,i,e,Dr,l,c,u,f,h,y,b,x),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}}}function o0(r,e,t,n,i,s,a,o){let l;if(e.side===Ct?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side!==pi,o),l===null)return null;Sa.copy(o),Sa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Sa);return c<t.near||c>t.far?null:{distance:c,point:Sa.clone(),object:r}}function wa(r,e,t,n,i,s,a,o,l,c,u,f){ui.fromBufferAttribute(i,c),fi.fromBufferAttribute(i,u),hi.fromBufferAttribute(i,f);const h=r.morphTargetInfluences;if(s&&h){_a.set(0,0,0),xa.set(0,0,0),va.set(0,0,0);for(let _=0,p=s.length;_<p;_++){const d=h[_],g=s[_];d!==0&&(Zo.fromBufferAttribute(g,c),Ko.fromBufferAttribute(g,u),Jo.fromBufferAttribute(g,f),a?(_a.addScaledVector(Zo,d),xa.addScaledVector(Ko,d),va.addScaledVector(Jo,d)):(_a.addScaledVector(Zo.sub(ui),d),xa.addScaledVector(Ko.sub(fi),d),va.addScaledVector(Jo.sub(hi),d)))}ui.add(_a),fi.add(xa),hi.add(va)}r.isSkinnedMesh&&(r.boneTransform(c,ui),r.boneTransform(u,fi),r.boneTransform(f,hi));const m=o0(r,e,t,n,ui,fi,hi,Qo);if(m){o&&(ya.fromBufferAttribute(o,c),ba.fromBufferAttribute(o,u),Ma.fromBufferAttribute(o,f),m.uv=Fn.getUV(Qo,ui,fi,hi,ya,ba,Ma,new De)),l&&(ya.fromBufferAttribute(l,c),ba.fromBufferAttribute(l,u),Ma.fromBufferAttribute(l,f),m.uv2=Fn.getUV(Qo,ui,fi,hi,ya,ba,Ma,new De));const _={a:c,b:u,c:f,normal:new V,materialIndex:0};Fn.getNormal(ui,fi,hi,_.normal),m.face=_}return m}class ta extends ni{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(f,2));function _(p,d,g,M,y,b,x,T,L,v,w){const F=b/L,j=x/v,ie=b/2,B=x/2,z=T/2,q=L+1,Y=v+1;let Z=0,O=0;const D=new V;for(let N=0;N<Y;N++){const C=N*j-B;for(let R=0;R<q;R++){const U=R*F-ie;D[p]=U*M,D[d]=C*y,D[g]=z,c.push(D.x,D.y,D.z),D[p]=0,D[d]=0,D[g]=T>0?1:-1,u.push(D.x,D.y,D.z),f.push(R/L),f.push(1-N/v),Z+=1}}for(let N=0;N<v;N++)for(let C=0;C<L;C++){const R=h+C+q*N,U=h+C+q*(N+1),Q=h+(C+1)+q*(N+1),ne=h+(C+1)+q*N;l.push(R,U,ne),l.push(U,Q,ne),O+=6}o.addGroup(m,O,w),m+=O,h+=Z}}static fromJSON(e){return new ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function is(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Tt(r){const e={};for(let t=0;t<r.length;t++){const n=is(r[t]);for(const i in n)e[i]=n[i]}return e}function l0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}const c0={clone:is,merge:Tt};var u0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fr extends fo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u0,this.fragmentShader=f0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=l0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wd extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class tn extends wd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vu*2*Math.atan(Math.tan(Ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ro*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Rr=90,Ir=1;class h0 extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new tn(Rr,Ir,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new V(1,0,0)),this.add(i);const s=new tn(Rr,Ir,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new V(-1,0,0)),this.add(s);const a=new tn(Rr,Ir,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new V(0,1,0)),this.add(a);const o=new tn(Rr,Ir,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new V(0,-1,0)),this.add(o);const l=new tn(Rr,Ir,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new V(0,0,1)),this.add(l);const c=new tn(Rr,Ir,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new V(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=zn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Ed extends on{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Qr,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class d0 extends cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ed(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ta(5,5,5),s=new fr({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:xi});s.uniforms.tEquirect.value=t;const a=new Ve(i,s),o=t.minFilter;return t.minFilter===uo&&(t.minFilter=en),new h0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const el=new V,p0=new V,m0=new nn;class Hi{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=el.subVectors(n,t).cross(p0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(el),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||m0.getNormalMatrix(e),i=this.coplanarPoint(el).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new wc,Ea=new V;class Td{constructor(e=new Hi,t=new Hi,n=new Hi,i=new Hi,s=new Hi,a=new Hi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],m=n[9],_=n[10],p=n[11],d=n[12],g=n[13],M=n[14],y=n[15];return t[0].setComponents(o-i,f-l,p-h,y-d).normalize(),t[1].setComponents(o+i,f+l,p+h,y+d).normalize(),t[2].setComponents(o+s,f+c,p+m,y+g).normalize(),t[3].setComponents(o-s,f-c,p-m,y-g).normalize(),t[4].setComponents(o-a,f-u,p-_,y-M).normalize(),t[5].setComponents(o+a,f+u,p+_,y+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSprite(e){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ea.x=i.normal.x>0?e.max.x:e.min.x,Ea.y=i.normal.y>0?e.max.y:e.min.y,Ea.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ad(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function g0(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;r.bindBuffer(f,c),m.count===-1?r.bufferSubData(f,0,h):(t?r.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):r.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Tc extends ni{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,h=t/l,m=[],_=[],p=[],d=[];for(let g=0;g<u;g++){const M=g*h-a;for(let y=0;y<c;y++){const b=y*f-s;_.push(b,-M,0),p.push(0,0,1),d.push(y/o),d.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<o;M++){const y=M+c*g,b=M+c*(g+1),x=M+1+c*(g+1),T=M+1+c*g;m.push(y,b,T),m.push(b,x,T)}this.setIndex(m),this.setAttribute("position",new Wt(_,3)),this.setAttribute("normal",new Wt(p,3)),this.setAttribute("uv",new Wt(d,2))}static fromJSON(e){return new Tc(e.width,e.height,e.widthSegments,e.heightSegments)}}var _0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,x0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,M0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S0="vec3 transformed = vec3( position );",w0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,T0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,A0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,N0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,z0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,U0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H0="gl_FragColor = linearToOutputTexel( gl_FragColor );",W0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,q0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,j0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ex=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,sx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ax=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,ox=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,fx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,hx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dx=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,px=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,gx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_x=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,vx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ex=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Cx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Lx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Dx=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ox=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Nx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,kx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Vx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yx=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,$x=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zx=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Kx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ev=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,av=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,ov=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,lv=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,cv=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uv=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,fv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,hv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,dv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,pv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gv=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Sv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Av=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lv=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ov=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,jv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ce={alphamap_fragment:_0,alphamap_pars_fragment:x0,alphatest_fragment:v0,alphatest_pars_fragment:y0,aomap_fragment:b0,aomap_pars_fragment:M0,begin_vertex:S0,beginnormal_vertex:w0,bsdfs:E0,iridescence_fragment:T0,bumpmap_pars_fragment:A0,clipping_planes_fragment:C0,clipping_planes_pars_fragment:L0,clipping_planes_pars_vertex:P0,clipping_planes_vertex:D0,color_fragment:R0,color_pars_fragment:I0,color_pars_vertex:O0,color_vertex:F0,common:N0,cube_uv_reflection_fragment:z0,defaultnormal_vertex:U0,displacementmap_pars_vertex:k0,displacementmap_vertex:B0,emissivemap_fragment:G0,emissivemap_pars_fragment:V0,encodings_fragment:H0,encodings_pars_fragment:W0,envmap_fragment:q0,envmap_common_pars_fragment:X0,envmap_pars_fragment:j0,envmap_pars_vertex:Y0,envmap_physical_pars_fragment:ax,envmap_vertex:$0,fog_vertex:Z0,fog_pars_vertex:K0,fog_fragment:J0,fog_pars_fragment:Q0,gradientmap_pars_fragment:ex,lightmap_fragment:tx,lightmap_pars_fragment:nx,lights_lambert_fragment:ix,lights_lambert_pars_fragment:rx,lights_pars_begin:sx,lights_toon_fragment:ox,lights_toon_pars_fragment:lx,lights_phong_fragment:cx,lights_phong_pars_fragment:ux,lights_physical_fragment:fx,lights_physical_pars_fragment:hx,lights_fragment_begin:dx,lights_fragment_maps:px,lights_fragment_end:mx,logdepthbuf_fragment:gx,logdepthbuf_pars_fragment:_x,logdepthbuf_pars_vertex:xx,logdepthbuf_vertex:vx,map_fragment:yx,map_pars_fragment:bx,map_particle_fragment:Mx,map_particle_pars_fragment:Sx,metalnessmap_fragment:wx,metalnessmap_pars_fragment:Ex,morphcolor_vertex:Tx,morphnormal_vertex:Ax,morphtarget_pars_vertex:Cx,morphtarget_vertex:Lx,normal_fragment_begin:Px,normal_fragment_maps:Dx,normal_pars_fragment:Rx,normal_pars_vertex:Ix,normal_vertex:Ox,normalmap_pars_fragment:Fx,clearcoat_normal_fragment_begin:Nx,clearcoat_normal_fragment_maps:zx,clearcoat_pars_fragment:Ux,iridescence_pars_fragment:kx,output_fragment:Bx,packing:Gx,premultiplied_alpha_fragment:Vx,project_vertex:Hx,dithering_fragment:Wx,dithering_pars_fragment:qx,roughnessmap_fragment:Xx,roughnessmap_pars_fragment:jx,shadowmap_pars_fragment:Yx,shadowmap_pars_vertex:$x,shadowmap_vertex:Zx,shadowmask_pars_fragment:Kx,skinbase_vertex:Jx,skinning_pars_vertex:Qx,skinning_vertex:ev,skinnormal_vertex:tv,specularmap_fragment:nv,specularmap_pars_fragment:iv,tonemapping_fragment:rv,tonemapping_pars_fragment:sv,transmission_fragment:av,transmission_pars_fragment:ov,uv_pars_fragment:lv,uv_pars_vertex:cv,uv_vertex:uv,uv2_pars_fragment:fv,uv2_pars_vertex:hv,uv2_vertex:dv,worldpos_vertex:pv,background_vert:mv,background_frag:gv,backgroundCube_vert:_v,backgroundCube_frag:xv,cube_vert:vv,cube_frag:yv,depth_vert:bv,depth_frag:Mv,distanceRGBA_vert:Sv,distanceRGBA_frag:wv,equirect_vert:Ev,equirect_frag:Tv,linedashed_vert:Av,linedashed_frag:Cv,meshbasic_vert:Lv,meshbasic_frag:Pv,meshlambert_vert:Dv,meshlambert_frag:Rv,meshmatcap_vert:Iv,meshmatcap_frag:Ov,meshnormal_vert:Fv,meshnormal_frag:Nv,meshphong_vert:zv,meshphong_frag:Uv,meshphysical_vert:kv,meshphysical_frag:Bv,meshtoon_vert:Gv,meshtoon_frag:Vv,points_vert:Hv,points_frag:Wv,shadow_vert:qv,shadow_frag:Xv,sprite_vert:jv,sprite_frag:Yv},ue={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new nn},uv2Transform:{value:new nn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new nn}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new nn}}},bn={basic:{uniforms:Tt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:Tt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:Tt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:Tt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:Tt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:Tt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:Tt([ue.points,ue.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:Tt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:Tt([ue.common,ue.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:Tt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:Tt([ue.sprite,ue.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new nn},t2D:{value:null}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:Tt([ue.common,ue.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:Tt([ue.lights,ue.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};bn.physical={uniforms:Tt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new De(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};function $v(r,e,t,n,i,s,a){const o=new $e(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function _(d,g){let M=!1,y=g.isScene===!0?g.background:null;y&&y.isTexture&&(y=(g.backgroundBlurriness>0?t:e).get(y));const b=r.xr,x=b.getSession&&b.getSession();x&&x.environmentBlendMode==="additive"&&(y=null),y===null?p(o,l):y&&y.isColor&&(p(y,1),M=!0),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===co)?(u===void 0&&(u=new Ve(new ta(1,1,1),new fr({name:"BackgroundCubeMaterial",uniforms:is(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,L,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,(f!==y||h!==y.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,m=r.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ve(new Tc(2,2),new fr({name:"BackgroundMaterial",uniforms:is(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Jr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,m=r.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function p(d,g){n.buffers.color.setClear(d.r,d.g,d.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(d,g=1){o.set(d),l=g,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,p(o,l)},render:_}}function Zv(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=d(null);let c=l,u=!1;function f(z,q,Y,Z,O){let D=!1;if(a){const N=p(Z,Y,q);c!==N&&(c=N,m(c.object)),D=g(z,Z,Y,O),D&&M(z,Z,Y,O)}else{const N=q.wireframe===!0;(c.geometry!==Z.id||c.program!==Y.id||c.wireframe!==N)&&(c.geometry=Z.id,c.program=Y.id,c.wireframe=N,D=!0)}O!==null&&t.update(O,34963),(D||u)&&(u=!1,v(z,q,Y,Z),O!==null&&r.bindBuffer(34963,t.get(O).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(z){return n.isWebGL2?r.bindVertexArray(z):s.bindVertexArrayOES(z)}function _(z){return n.isWebGL2?r.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function p(z,q,Y){const Z=Y.wireframe===!0;let O=o[z.id];O===void 0&&(O={},o[z.id]=O);let D=O[q.id];D===void 0&&(D={},O[q.id]=D);let N=D[Z];return N===void 0&&(N=d(h()),D[Z]=N),N}function d(z){const q=[],Y=[],Z=[];for(let O=0;O<i;O++)q[O]=0,Y[O]=0,Z[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:Y,attributeDivisors:Z,object:z,attributes:{},index:null}}function g(z,q,Y,Z){const O=c.attributes,D=q.attributes;let N=0;const C=Y.getAttributes();for(const R in C)if(C[R].location>=0){const Q=O[R];let ne=D[R];if(ne===void 0&&(R==="instanceMatrix"&&z.instanceMatrix&&(ne=z.instanceMatrix),R==="instanceColor"&&z.instanceColor&&(ne=z.instanceColor)),Q===void 0||Q.attribute!==ne||ne&&Q.data!==ne.data)return!0;N++}return c.attributesNum!==N||c.index!==Z}function M(z,q,Y,Z){const O={},D=q.attributes;let N=0;const C=Y.getAttributes();for(const R in C)if(C[R].location>=0){let Q=D[R];Q===void 0&&(R==="instanceMatrix"&&z.instanceMatrix&&(Q=z.instanceMatrix),R==="instanceColor"&&z.instanceColor&&(Q=z.instanceColor));const ne={};ne.attribute=Q,Q&&Q.data&&(ne.data=Q.data),O[R]=ne,N++}c.attributes=O,c.attributesNum=N,c.index=Z}function y(){const z=c.newAttributes;for(let q=0,Y=z.length;q<Y;q++)z[q]=0}function b(z){x(z,0)}function x(z,q){const Y=c.newAttributes,Z=c.enabledAttributes,O=c.attributeDivisors;Y[z]=1,Z[z]===0&&(r.enableVertexAttribArray(z),Z[z]=1),O[z]!==q&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,q),O[z]=q)}function T(){const z=c.newAttributes,q=c.enabledAttributes;for(let Y=0,Z=q.length;Y<Z;Y++)q[Y]!==z[Y]&&(r.disableVertexAttribArray(Y),q[Y]=0)}function L(z,q,Y,Z,O,D){n.isWebGL2===!0&&(Y===5124||Y===5125)?r.vertexAttribIPointer(z,q,Y,O,D):r.vertexAttribPointer(z,q,Y,Z,O,D)}function v(z,q,Y,Z){if(n.isWebGL2===!1&&(z.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const O=Z.attributes,D=Y.getAttributes(),N=q.defaultAttributeValues;for(const C in D){const R=D[C];if(R.location>=0){let U=O[C];if(U===void 0&&(C==="instanceMatrix"&&z.instanceMatrix&&(U=z.instanceMatrix),C==="instanceColor"&&z.instanceColor&&(U=z.instanceColor)),U!==void 0){const Q=U.normalized,ne=U.itemSize,H=t.get(U);if(H===void 0)continue;const ge=H.buffer,pe=H.type,oe=H.bytesPerElement;if(U.isInterleavedBufferAttribute){const se=U.data,Te=se.stride,Se=U.offset;if(se.isInstancedInterleavedBuffer){for(let ve=0;ve<R.locationSize;ve++)x(R.location+ve,se.meshPerAttribute);z.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ve=0;ve<R.locationSize;ve++)b(R.location+ve);r.bindBuffer(34962,ge);for(let ve=0;ve<R.locationSize;ve++)L(R.location+ve,ne/R.locationSize,pe,Q,Te*oe,(Se+ne/R.locationSize*ve)*oe)}else{if(U.isInstancedBufferAttribute){for(let se=0;se<R.locationSize;se++)x(R.location+se,U.meshPerAttribute);z.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let se=0;se<R.locationSize;se++)b(R.location+se);r.bindBuffer(34962,ge);for(let se=0;se<R.locationSize;se++)L(R.location+se,ne/R.locationSize,pe,Q,ne*oe,ne/R.locationSize*se*oe)}}else if(N!==void 0){const Q=N[C];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(R.location,Q);break;case 3:r.vertexAttrib3fv(R.location,Q);break;case 4:r.vertexAttrib4fv(R.location,Q);break;default:r.vertexAttrib1fv(R.location,Q)}}}}T()}function w(){ie();for(const z in o){const q=o[z];for(const Y in q){const Z=q[Y];for(const O in Z)_(Z[O].object),delete Z[O];delete q[Y]}delete o[z]}}function F(z){if(o[z.id]===void 0)return;const q=o[z.id];for(const Y in q){const Z=q[Y];for(const O in Z)_(Z[O].object),delete Z[O];delete q[Y]}delete o[z.id]}function j(z){for(const q in o){const Y=o[q];if(Y[z.id]===void 0)continue;const Z=Y[z.id];for(const O in Z)_(Z[O].object),delete Z[O];delete Y[z.id]}}function ie(){B(),u=!0,c!==l&&(c=l,m(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ie,resetDefaultState:B,dispose:w,releaseStatesOfGeometry:F,releaseStatesOfProgram:j,initAttributes:y,enableAttribute:b,disableUnusedAttributes:T}}function Kv(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(i)h=r,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function Jv(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),h=r.getParameter(35660),m=r.getParameter(3379),_=r.getParameter(34076),p=r.getParameter(34921),d=r.getParameter(36347),g=r.getParameter(36348),M=r.getParameter(36349),y=h>0,b=a||e.has("OES_texture_float"),x=y&&b,T=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:d,maxVaryings:g,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:x,maxSamples:T}}function Qv(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Hi,o=new nn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const _=f.length!==0||h||n!==0||i;return i=h,t=u(f,m,0),n=f.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,m){const _=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,g=r.get(f);if(!i||_===null||_.length===0||s&&!d)s?u(null):c();else{const M=s?0:n,y=M*4;let b=g.clippingState||null;l.value=b,b=u(_,h,y,m);for(let x=0;x!==y;++x)b[x]=t[x];g.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,m,_){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=l.value,_!==!0||d===null){const g=m+p*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(d===null||d.length<g)&&(d=new Float32Array(g));for(let y=0,b=m;y!==p;++y,b+=4)a.copy(f[y]).applyMatrix4(M,o),a.normal.toArray(d,b),d[b+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function ey(r){let e=new WeakMap;function t(a,o){return o===ts?a.mapping=Qr:o===Nl&&(a.mapping=es),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ts||o===Nl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new d0(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ty extends wd{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const kr=4,ef=[.125,.215,.35,.446,.526,.582],Xi=20,tl=new ty,tf=new $e;let nl=null;const Wi=(1+Math.sqrt(5))/2,Fr=1/Wi,nf=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Wi,Fr),new V(0,Wi,-Fr),new V(Fr,0,Wi),new V(-Fr,0,Wi),new V(Wi,Fr,0),new V(-Wi,Fr,0)];class rf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){nl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nl),e.scissorTest=!1,Ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qr||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Bs,format:mn,encoding:lr,depthBuffer:!1},i=sf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ny(s)),this._blurMaterial=iy(s,e,t)}return i}_compileMaterial(e){const t=new Ve(this._lodPlanes[0],e);this._renderer.compile(t,tl)}_sceneToCubeUV(e,t,n,i){const o=new tn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(tf),u.toneMapping=zn,u.autoClear=!1;const m=new tt({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),_=new Ve(new ta,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(tf),p=!0);for(let g=0;g<6;g++){const M=g%3;M===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):M===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));const y=this._cubeSize;Ta(i,M*y,g>2?y:0,y,y),u.setRenderTarget(i),p&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Qr||e.mapping===es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=of()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=af());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ve(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ta(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,tl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=nf[(i-1)%nf.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ve(this._lodPlanes[i],c),h=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Xi-1),p=s/_,d=isFinite(s)?1+Math.floor(u*p):Xi;d>Xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Xi}`);const g=[];let M=0;for(let L=0;L<Xi;++L){const v=L/p,w=Math.exp(-v*v/2);g.push(w),L===0?M+=w:L<d&&(M+=2*w)}for(let L=0;L<g.length;L++)g[L]=g[L]/M;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=g,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-n;const b=this._sizeLods[i],x=3*b*(i>y-kr?i-y+kr:0),T=4*(this._cubeSize-b);Ta(t,x,T,3*b,2*b),l.setRenderTarget(t),l.render(f,tl)}}function ny(r){const e=[],t=[],n=[];let i=r;const s=r-kr+1+ef.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-kr?l=ef[a-r+kr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,p=3,d=2,g=1,M=new Float32Array(p*_*m),y=new Float32Array(d*_*m),b=new Float32Array(g*_*m);for(let T=0;T<m;T++){const L=T%3*2/3-1,v=T>2?0:-1,w=[L,v,0,L+2/3,v,0,L+2/3,v+1,0,L,v,0,L+2/3,v+1,0,L,v+1,0];M.set(w,p*_*T),y.set(h,d*_*T);const F=[T,T,T,T,T,T];b.set(F,g*_*T)}const x=new ni;x.setAttribute("position",new Sn(M,p)),x.setAttribute("uv",new Sn(y,d)),x.setAttribute("faceIndex",new Sn(b,g)),e.push(x),i>kr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sf(r,e,t){const n=new cr(r,e,t);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ta(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function iy(r,e,t){const n=new Float32Array(Xi),i=new V(0,1,0);return new fr({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function af(){return new fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function of(){return new fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Ac(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ry(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ts||l===Nl,u=l===Qr||l===es;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new rf(r)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new rf(r));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function sy(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ay(r,e,t,n){const i={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete i[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],34962);const m=f.morphAttributes;for(const _ in m){const p=m[_];for(let d=0,g=p.length;d<g;d++)e.update(p[d],34962)}}function c(f){const h=[],m=f.index,_=f.attributes.position;let p=0;if(m!==null){const M=m.array;p=m.version;for(let y=0,b=M.length;y<b;y+=3){const x=M[y+0],T=M[y+1],L=M[y+2];h.push(x,T,T,L,L,x)}}else{const M=_.array;p=_.version;for(let y=0,b=M.length/3-1;y<b;y+=3){const x=y+0,T=y+1,L=y+2;h.push(x,T,T,L,L,x)}}const d=new(gd(h)?Sd:Md)(h,1);d.version=p;const g=s.get(f);g&&e.remove(g),s.set(f,d)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function oy(r,e,t,n){const i=n.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){r.drawElements(s,m,o,h*l),t.update(m,s,1)}function f(h,m,_){if(_===0)return;let p,d;if(i)p=r,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,o,h*l,_),t.update(m,s,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function ly(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function cy(r,e){return r[0]-e[0]}function uy(r,e){return Math.abs(e[1])-Math.abs(r[1])}function fy(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new _t,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=p!==void 0?p.length:0;let g=s.get(u);if(g===void 0||g.count!==d){let Y=function(){z.dispose(),s.delete(u),u.removeEventListener("dispose",Y)};var _=Y;g!==void 0&&g.texture.dispose();const b=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let F=0;b===!0&&(F=1),x===!0&&(F=2),T===!0&&(F=3);let j=u.attributes.position.count*F,ie=1;j>e.maxTextureSize&&(ie=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const B=new Float32Array(j*ie*4*d),z=new yd(B,j,ie,d);z.type=Yi,z.needsUpdate=!0;const q=F*4;for(let Z=0;Z<d;Z++){const O=L[Z],D=v[Z],N=w[Z],C=j*ie*4*Z;for(let R=0;R<O.count;R++){const U=R*q;b===!0&&(a.fromBufferAttribute(O,R),B[C+U+0]=a.x,B[C+U+1]=a.y,B[C+U+2]=a.z,B[C+U+3]=0),x===!0&&(a.fromBufferAttribute(D,R),B[C+U+4]=a.x,B[C+U+5]=a.y,B[C+U+6]=a.z,B[C+U+7]=0),T===!0&&(a.fromBufferAttribute(N,R),B[C+U+8]=a.x,B[C+U+9]=a.y,B[C+U+10]=a.z,B[C+U+11]=N.itemSize===4?a.w:1)}}g={count:d,texture:z,size:new De(j,ie)},s.set(u,g),u.addEventListener("dispose",Y)}let M=0;for(let b=0;b<m.length;b++)M+=m[b];const y=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",m),h.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const p=m===void 0?0:m.length;let d=n[u.id];if(d===void 0||d.length!==p){d=[];for(let x=0;x<p;x++)d[x]=[x,0];n[u.id]=d}for(let x=0;x<p;x++){const T=d[x];T[0]=x,T[1]=m[x]}d.sort(uy);for(let x=0;x<8;x++)x<p&&d[x][1]?(o[x][0]=d[x][0],o[x][1]=d[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(cy);const g=u.morphAttributes.position,M=u.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const T=o[x],L=T[0],v=T[1];L!==Number.MAX_SAFE_INTEGER&&v?(g&&u.getAttribute("morphTarget"+x)!==g[L]&&u.setAttribute("morphTarget"+x,g[L]),M&&u.getAttribute("morphNormal"+x)!==M[L]&&u.setAttribute("morphNormal"+x,M[L]),i[x]=v,y+=v):(g&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),M&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const b=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(r,"morphTargetBaseInfluence",b),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function hy(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Cd=new on,Ld=new yd,Pd=new K_,Dd=new Ed,lf=[],cf=[],uf=new Float32Array(16),ff=new Float32Array(9),hf=new Float32Array(4);function gs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=lf[i];if(s===void 0&&(s=new Float32Array(i),lf[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function ct(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ut(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ho(r,e){let t=cf[e];t===void 0&&(t=new Int32Array(e),cf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function dy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function py(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2fv(this.addr,e),ut(t,e)}}function my(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;r.uniform3fv(this.addr,e),ut(t,e)}}function gy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4fv(this.addr,e),ut(t,e)}}function _y(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,n))return;hf.set(n),r.uniformMatrix2fv(this.addr,!1,hf),ut(t,n)}}function xy(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,n))return;ff.set(n),r.uniformMatrix3fv(this.addr,!1,ff),ut(t,n)}}function vy(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,n))return;uf.set(n),r.uniformMatrix4fv(this.addr,!1,uf),ut(t,n)}}function yy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function by(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2iv(this.addr,e),ut(t,e)}}function My(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;r.uniform3iv(this.addr,e),ut(t,e)}}function Sy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4iv(this.addr,e),ut(t,e)}}function wy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Ey(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2uiv(this.addr,e),ut(t,e)}}function Ty(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;r.uniform3uiv(this.addr,e),ut(t,e)}}function Ay(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4uiv(this.addr,e),ut(t,e)}}function Cy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Cd,i)}function Ly(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Pd,i)}function Py(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Dd,i)}function Dy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ld,i)}function Ry(r){switch(r){case 5126:return dy;case 35664:return py;case 35665:return my;case 35666:return gy;case 35674:return _y;case 35675:return xy;case 35676:return vy;case 5124:case 35670:return yy;case 35667:case 35671:return by;case 35668:case 35672:return My;case 35669:case 35673:return Sy;case 5125:return wy;case 36294:return Ey;case 36295:return Ty;case 36296:return Ay;case 35678:case 36198:case 36298:case 36306:case 35682:return Cy;case 35679:case 36299:case 36307:return Ly;case 35680:case 36300:case 36308:case 36293:return Py;case 36289:case 36303:case 36311:case 36292:return Dy}}function Iy(r,e){r.uniform1fv(this.addr,e)}function Oy(r,e){const t=gs(e,this.size,2);r.uniform2fv(this.addr,t)}function Fy(r,e){const t=gs(e,this.size,3);r.uniform3fv(this.addr,t)}function Ny(r,e){const t=gs(e,this.size,4);r.uniform4fv(this.addr,t)}function zy(r,e){const t=gs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Uy(r,e){const t=gs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function ky(r,e){const t=gs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function By(r,e){r.uniform1iv(this.addr,e)}function Gy(r,e){r.uniform2iv(this.addr,e)}function Vy(r,e){r.uniform3iv(this.addr,e)}function Hy(r,e){r.uniform4iv(this.addr,e)}function Wy(r,e){r.uniform1uiv(this.addr,e)}function qy(r,e){r.uniform2uiv(this.addr,e)}function Xy(r,e){r.uniform3uiv(this.addr,e)}function jy(r,e){r.uniform4uiv(this.addr,e)}function Yy(r,e,t){const n=this.cache,i=e.length,s=ho(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Cd,s[a])}function $y(r,e,t){const n=this.cache,i=e.length,s=ho(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Pd,s[a])}function Zy(r,e,t){const n=this.cache,i=e.length,s=ho(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Dd,s[a])}function Ky(r,e,t){const n=this.cache,i=e.length,s=ho(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ld,s[a])}function Jy(r){switch(r){case 5126:return Iy;case 35664:return Oy;case 35665:return Fy;case 35666:return Ny;case 35674:return zy;case 35675:return Uy;case 35676:return ky;case 5124:case 35670:return By;case 35667:case 35671:return Gy;case 35668:case 35672:return Vy;case 35669:case 35673:return Hy;case 5125:return Wy;case 36294:return qy;case 36295:return Xy;case 36296:return jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Yy;case 35679:case 36299:case 36307:return $y;case 35680:case 36300:case 36308:case 36293:return Zy;case 36289:case 36303:case 36311:case 36292:return Ky}}class Qy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Ry(t.type)}}class eb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Jy(t.type)}}class tb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const il=/(\w+)(\])?(\[|\.)?/g;function df(r,e){r.seq.push(e),r.map[e.id]=e}function nb(r,e,t){const n=r.name,i=n.length;for(il.lastIndex=0;;){const s=il.exec(n),a=il.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){df(t,c===void 0?new Qy(o,r,e):new eb(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new tb(o),df(t,f)),t=f}}}class Pa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);nb(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function pf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let ib=0;function rb(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function sb(r){switch(r){case lr:return["Linear","( value )"];case Be:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function mf(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+rb(r.getShaderSource(e),a)}else return i}function ab(r,e){const t=sb(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function ob(r,e){let t;switch(e){case w_:t="Linear";break;case E_:t="Reinhard";break;case T_:t="OptimizedCineon";break;case dd:t="ACESFilmic";break;case A_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lb(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cs).join(`
`)}function cb(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ub(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Cs(r){return r!==""}function gf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _f(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(r){return r.replace(fb,hb)}function hb(r,e){const t=Ce[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Gl(t)}const db=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xf(r){return r.replace(db,pb)}function pb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function vf(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===cd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===n_?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===As&&(e="SHADOWMAP_TYPE_VSM"),e}function gb(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Qr:case es:e="ENVMAP_TYPE_CUBE";break;case co:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _b(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case es:e="ENVMAP_MODE_REFRACTION";break}return e}function xb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case hd:e="ENVMAP_BLENDING_MULTIPLY";break;case M_:e="ENVMAP_BLENDING_MIX";break;case S_:e="ENVMAP_BLENDING_ADD";break}return e}function vb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function yb(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=mb(t),c=gb(t),u=_b(t),f=xb(t),h=vb(t),m=t.isWebGL2?"":lb(t),_=cb(s),p=i.createProgram();let d,g,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[_].filter(Cs).join(`
`),d.length>0&&(d+=`
`),g=[m,_].filter(Cs).join(`
`),g.length>0&&(g+=`
`)):(d=[vf(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),g=[m,vf(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Ce.tonemapping_pars_fragment:"",t.toneMapping!==zn?ob("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.encodings_pars_fragment,ab("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),a=Gl(a),a=gf(a,t),a=_f(a,t),o=Gl(o),o=gf(o,t),o=_f(o,t),a=xf(a),o=xf(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,g=["#define varying in",t.glslVersion===Gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=M+d+a,b=M+g+o,x=pf(i,35633,y),T=pf(i,35632,b);if(i.attachShader(p,x),i.attachShader(p,T),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const w=i.getProgramInfoLog(p).trim(),F=i.getShaderInfoLog(x).trim(),j=i.getShaderInfoLog(T).trim();let ie=!0,B=!0;if(i.getProgramParameter(p,35714)===!1){ie=!1;const z=mf(i,x,"vertex"),q=mf(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+w+`
`+z+`
`+q)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(F===""||j==="")&&(B=!1);B&&(this.diagnostics={runnable:ie,programLog:w,vertexShader:{log:F,prefix:d},fragmentShader:{log:j,prefix:g}})}i.deleteShader(x),i.deleteShader(T);let L;this.getUniforms=function(){return L===void 0&&(L=new Pa(i,p)),L};let v;return this.getAttributes=function(){return v===void 0&&(v=ub(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=ib++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=x,this.fragmentShader=T,this}let bb=0;class Mb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Sb(e),t.set(e,n)),n}}class Sb{constructor(e){this.id=bb++,this.code=e,this.usedTimes=0}}function wb(r,e,t,n,i,s,a){const o=new Ec,l=new Mb,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,w,F,j,ie){const B=j.fog,z=ie.geometry,q=v.isMeshStandardMaterial?j.environment:null,Y=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),Z=!!Y&&Y.mapping===co?Y.image.height:null,O=_[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const D=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,N=D!==void 0?D.length:0;let C=0;z.morphAttributes.position!==void 0&&(C=1),z.morphAttributes.normal!==void 0&&(C=2),z.morphAttributes.color!==void 0&&(C=3);let R,U,Q,ne;if(O){const Te=bn[O];R=Te.vertexShader,U=Te.fragmentShader}else R=v.vertexShader,U=v.fragmentShader,l.update(v),Q=l.getVertexShaderID(v),ne=l.getFragmentShaderID(v);const H=r.getRenderTarget(),ge=v.alphaTest>0,pe=v.clearcoat>0,oe=v.iridescence>0;return{isWebGL2:u,shaderID:O,shaderName:v.type,vertexShader:R,fragmentShader:U,defines:v.defines,customVertexShaderID:Q,customFragmentShaderID:ne,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:ie.isInstancedMesh===!0,instancingColor:ie.isInstancedMesh===!0&&ie.instanceColor!==null,supportsVertexTextures:h,outputEncoding:H===null?r.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:lr,map:!!v.map,matcap:!!v.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:Z,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===j_,tangentSpaceNormalMap:v.normalMapType===X_,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Be,clearcoat:pe,clearcoatMap:pe&&!!v.clearcoatMap,clearcoatRoughnessMap:pe&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:pe&&!!v.clearcoatNormalMap,iridescence:oe,iridescenceMap:oe&&!!v.iridescenceMap,iridescenceThicknessMap:oe&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Hr,alphaMap:!!v.alphaMap,alphaTest:ge,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!z.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!B,useFog:v.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ie.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:C,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:zn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===pi,flipSided:v.side===Ct,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)w.push(F),w.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(g(w,v),M(w,v),w.push(r.outputEncoding)),w.push(v.customProgramCacheKey),w.join()}function g(v,w){v.push(w.precision),v.push(w.outputEncoding),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.combine),v.push(w.vertexUvs),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function M(v,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.map&&o.enable(4),w.matcap&&o.enable(5),w.envMap&&o.enable(6),w.lightMap&&o.enable(7),w.aoMap&&o.enable(8),w.emissiveMap&&o.enable(9),w.bumpMap&&o.enable(10),w.normalMap&&o.enable(11),w.objectSpaceNormalMap&&o.enable(12),w.tangentSpaceNormalMap&&o.enable(13),w.clearcoat&&o.enable(14),w.clearcoatMap&&o.enable(15),w.clearcoatRoughnessMap&&o.enable(16),w.clearcoatNormalMap&&o.enable(17),w.iridescence&&o.enable(18),w.iridescenceMap&&o.enable(19),w.iridescenceThicknessMap&&o.enable(20),w.displacementMap&&o.enable(21),w.specularMap&&o.enable(22),w.roughnessMap&&o.enable(23),w.metalnessMap&&o.enable(24),w.gradientMap&&o.enable(25),w.alphaMap&&o.enable(26),w.alphaTest&&o.enable(27),w.vertexColors&&o.enable(28),w.vertexAlphas&&o.enable(29),w.vertexUvs&&o.enable(30),w.vertexTangents&&o.enable(31),w.uvsVertexOnly&&o.enable(32),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.physicallyCorrectLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.specularIntensityMap&&o.enable(15),w.specularColorMap&&o.enable(16),w.transmission&&o.enable(17),w.transmissionMap&&o.enable(18),w.thicknessMap&&o.enable(19),w.sheen&&o.enable(20),w.sheenColorMap&&o.enable(21),w.sheenRoughnessMap&&o.enable(22),w.decodeVideoTexture&&o.enable(23),w.opaque&&o.enable(24),v.push(o.mask)}function y(v){const w=_[v.type];let F;if(w){const j=bn[w];F=c0.clone(j.uniforms)}else F=v.uniforms;return F}function b(v,w){let F;for(let j=0,ie=c.length;j<ie;j++){const B=c[j];if(B.cacheKey===w){F=B,++F.usedTimes;break}}return F===void 0&&(F=new yb(r,w,v,s),c.push(F)),F}function x(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),v.destroy()}}function T(v){l.remove(v)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:T,programs:c,dispose:L}}function Eb(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Tb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function yf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function bf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f,h,m,_,p,d){let g=r[e];return g===void 0?(g={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:p,group:d},r[e]=g):(g.id=f.id,g.object=f,g.geometry=h,g.material=m,g.groupOrder=_,g.renderOrder=f.renderOrder,g.z=p,g.group=d),e++,g}function o(f,h,m,_,p,d){const g=a(f,h,m,_,p,d);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):t.push(g)}function l(f,h,m,_,p,d){const g=a(f,h,m,_,p,d);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):t.unshift(g)}function c(f,h){t.length>1&&t.sort(f||Tb),n.length>1&&n.sort(h||yf),i.length>1&&i.sort(h||yf)}function u(){for(let f=e,h=r.length;f<h;f++){const m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function Ab(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new bf,r.set(n,[a])):i>=s.length?(a=new bf,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Cb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new $e};break;case"SpotLight":t={position:new V,direction:new V,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new V,halfWidth:new V,halfHeight:new V};break}return r[e.id]=t,t}}}function Lb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Pb=0;function Db(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Rb(r,e){const t=new Cb,n=Lb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new V);const s=new V,a=new xt,o=new xt;function l(u,f){let h=0,m=0,_=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let p=0,d=0,g=0,M=0,y=0,b=0,x=0,T=0,L=0,v=0;u.sort(Db);const w=f!==!0?Math.PI:1;for(let j=0,ie=u.length;j<ie;j++){const B=u[j],z=B.color,q=B.intensity,Y=B.distance,Z=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)h+=z.r*q*w,m+=z.g*q*w,_+=z.b*q*w;else if(B.isLightProbe)for(let O=0;O<9;O++)i.probe[O].addScaledVector(B.sh.coefficients[O],q);else if(B.isDirectionalLight){const O=t.get(B);if(O.color.copy(B.color).multiplyScalar(B.intensity*w),B.castShadow){const D=B.shadow,N=n.get(B);N.shadowBias=D.bias,N.shadowNormalBias=D.normalBias,N.shadowRadius=D.radius,N.shadowMapSize=D.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=B.shadow.matrix,b++}i.directional[p]=O,p++}else if(B.isSpotLight){const O=t.get(B);O.position.setFromMatrixPosition(B.matrixWorld),O.color.copy(z).multiplyScalar(q*w),O.distance=Y,O.coneCos=Math.cos(B.angle),O.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),O.decay=B.decay,i.spot[g]=O;const D=B.shadow;if(B.map&&(i.spotLightMap[L]=B.map,L++,D.updateMatrices(B),B.castShadow&&v++),i.spotLightMatrix[g]=D.matrix,B.castShadow){const N=n.get(B);N.shadowBias=D.bias,N.shadowNormalBias=D.normalBias,N.shadowRadius=D.radius,N.shadowMapSize=D.mapSize,i.spotShadow[g]=N,i.spotShadowMap[g]=Z,T++}g++}else if(B.isRectAreaLight){const O=t.get(B);O.color.copy(z).multiplyScalar(q),O.halfWidth.set(B.width*.5,0,0),O.halfHeight.set(0,B.height*.5,0),i.rectArea[M]=O,M++}else if(B.isPointLight){const O=t.get(B);if(O.color.copy(B.color).multiplyScalar(B.intensity*w),O.distance=B.distance,O.decay=B.decay,B.castShadow){const D=B.shadow,N=n.get(B);N.shadowBias=D.bias,N.shadowNormalBias=D.normalBias,N.shadowRadius=D.radius,N.shadowMapSize=D.mapSize,N.shadowCameraNear=D.camera.near,N.shadowCameraFar=D.camera.far,i.pointShadow[d]=N,i.pointShadowMap[d]=Z,i.pointShadowMatrix[d]=B.shadow.matrix,x++}i.point[d]=O,d++}else if(B.isHemisphereLight){const O=t.get(B);O.skyColor.copy(B.color).multiplyScalar(q*w),O.groundColor.copy(B.groundColor).multiplyScalar(q*w),i.hemi[y]=O,y++}}M>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=_;const F=i.hash;(F.directionalLength!==p||F.pointLength!==d||F.spotLength!==g||F.rectAreaLength!==M||F.hemiLength!==y||F.numDirectionalShadows!==b||F.numPointShadows!==x||F.numSpotShadows!==T||F.numSpotMaps!==L)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=M,i.point.length=d,i.hemi.length=y,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=T+L-v,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=v,F.directionalLength=p,F.pointLength=d,F.spotLength=g,F.rectAreaLength=M,F.hemiLength=y,F.numDirectionalShadows=b,F.numPointShadows=x,F.numSpotShadows=T,F.numSpotMaps=L,i.version=Pb++)}function c(u,f){let h=0,m=0,_=0,p=0,d=0;const g=f.matrixWorldInverse;for(let M=0,y=u.length;M<y;M++){const b=u[M];if(b.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),h++}else if(b.isSpotLight){const x=i.spot[_];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),_++}else if(b.isRectAreaLight){const x=i.rectArea[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),o.identity(),a.copy(b.matrixWorld),a.premultiply(g),o.extractRotation(a),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(b.isPointLight){const x=i.point[m];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),m++}else if(b.isHemisphereLight){const x=i.hemi[d];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(g),d++}}}return{setup:l,setupView:c,state:i}}function Mf(r,e){const t=new Rb(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ib(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Mf(r,e),t.set(s,[l])):a>=o.length?(l=new Mf(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Ob extends fo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=W_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fb extends fo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new V,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Nb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ub(r,e,t){let n=new Td;const i=new De,s=new De,a=new _t,o=new Ob({depthPacking:q_}),l=new Fb,c={},u=t.maxTextureSize,f={0:Ct,1:Jr,2:pi},h=new fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Nb,fragmentShader:zb}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new ni;_.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Ve(_,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cd,this.render=function(b,x,T){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;const L=r.getRenderTarget(),v=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),F=r.state;F.setBlending(xi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let j=0,ie=b.length;j<ie;j++){const B=b[j],z=B.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const q=z.getFrameExtents();if(i.multiply(q),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/q.x),i.x=s.x*q.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/q.y),i.y=s.y*q.y,z.mapSize.y=s.y)),z.map===null){const Z=this.type!==As?{minFilter:Pt,magFilter:Pt}:{};z.map=new cr(i.x,i.y,Z),z.map.texture.name=B.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const Y=z.getViewportCount();for(let Z=0;Z<Y;Z++){const O=z.getViewport(Z);a.set(s.x*O.x,s.y*O.y,s.x*O.z,s.y*O.w),F.viewport(a),z.updateMatrices(B,Z),n=z.getFrustum(),y(x,T,z.camera,B,this.type)}z.isPointLightShadow!==!0&&this.type===As&&g(z,T),z.needsUpdate=!1}d.needsUpdate=!1,r.setRenderTarget(L,v,w)};function g(b,x){const T=e.update(p);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new cr(i.x,i.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(x,null,T,h,p,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(x,null,T,m,p,null)}function M(b,x,T,L,v,w){let F=null;const j=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(j!==void 0?F=j:F=T.isPointLight===!0?l:o,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0){const ie=F.uuid,B=x.uuid;let z=c[ie];z===void 0&&(z={},c[ie]=z);let q=z[B];q===void 0&&(q=F.clone(),z[B]=q),F=q}return F.visible=x.visible,F.wireframe=x.wireframe,w===As?F.side=x.shadowSide!==null?x.shadowSide:x.side:F.side=x.shadowSide!==null?x.shadowSide:f[x.side],F.alphaMap=x.alphaMap,F.alphaTest=x.alphaTest,F.clipShadows=x.clipShadows,F.clippingPlanes=x.clippingPlanes,F.clipIntersection=x.clipIntersection,F.displacementMap=x.displacementMap,F.displacementScale=x.displacementScale,F.displacementBias=x.displacementBias,F.wireframeLinewidth=x.wireframeLinewidth,F.linewidth=x.linewidth,T.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(T.matrixWorld),F.nearDistance=L,F.farDistance=v),F}function y(b,x,T,L,v){if(b.visible===!1)return;if(b.layers.test(x.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===As)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);const j=e.update(b),ie=b.material;if(Array.isArray(ie)){const B=j.groups;for(let z=0,q=B.length;z<q;z++){const Y=B[z],Z=ie[Y.materialIndex];if(Z&&Z.visible){const O=M(b,Z,L,T.near,T.far,v);r.renderBufferDirect(T,null,j,O,b,Y)}}}else if(ie.visible){const B=M(b,ie,L,T.near,T.far,v);r.renderBufferDirect(T,null,j,B,b,null)}}const F=b.children;for(let j=0,ie=F.length;j<ie;j++)y(F[j],x,T,L,v)}}function kb(r,e,t){const n=t.isWebGL2;function i(){let I=!1;const $=new _t;let re=null;const he=new _t(0,0,0,0);return{setMask:function(_e){re!==_e&&!I&&(r.colorMask(_e,_e,_e,_e),re=_e)},setLocked:function(_e){I=_e},setClear:function(_e,we,ft,yt,Ri){Ri===!0&&(_e*=yt,we*=yt,ft*=yt),$.set(_e,we,ft,yt),he.equals($)===!1&&(r.clearColor(_e,we,ft,yt),he.copy($))},reset:function(){I=!1,re=null,he.set(-1,0,0,0)}}}function s(){let I=!1,$=null,re=null,he=null;return{setTest:function(_e){_e?ge(2929):pe(2929)},setMask:function(_e){$!==_e&&!I&&(r.depthMask(_e),$=_e)},setFunc:function(_e){if(re!==_e){switch(_e){case m_:r.depthFunc(512);break;case g_:r.depthFunc(519);break;case __:r.depthFunc(513);break;case Fl:r.depthFunc(515);break;case x_:r.depthFunc(514);break;case v_:r.depthFunc(518);break;case y_:r.depthFunc(516);break;case b_:r.depthFunc(517);break;default:r.depthFunc(515)}re=_e}},setLocked:function(_e){I=_e},setClear:function(_e){he!==_e&&(r.clearDepth(_e),he=_e)},reset:function(){I=!1,$=null,re=null,he=null}}}function a(){let I=!1,$=null,re=null,he=null,_e=null,we=null,ft=null,yt=null,Ri=null;return{setTest:function(Xe){I||(Xe?ge(2960):pe(2960))},setMask:function(Xe){$!==Xe&&!I&&(r.stencilMask(Xe),$=Xe)},setFunc:function(Xe,Tn,$t){(re!==Xe||he!==Tn||_e!==$t)&&(r.stencilFunc(Xe,Tn,$t),re=Xe,he=Tn,_e=$t)},setOp:function(Xe,Tn,$t){(we!==Xe||ft!==Tn||yt!==$t)&&(r.stencilOp(Xe,Tn,$t),we=Xe,ft=Tn,yt=$t)},setLocked:function(Xe){I=Xe},setClear:function(Xe){Ri!==Xe&&(r.clearStencil(Xe),Ri=Xe)},reset:function(){I=!1,$=null,re=null,he=null,_e=null,we=null,ft=null,yt=null,Ri=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},m={},_=new WeakMap,p=[],d=null,g=!1,M=null,y=null,b=null,x=null,T=null,L=null,v=null,w=!1,F=null,j=null,ie=null,B=null,z=null;const q=r.getParameter(35661);let Y=!1,Z=0;const O=r.getParameter(7938);O.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(O)[1]),Y=Z>=1):O.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),Y=Z>=2);let D=null,N={};const C=r.getParameter(3088),R=r.getParameter(2978),U=new _t().fromArray(C),Q=new _t().fromArray(R);function ne(I,$,re){const he=new Uint8Array(4),_e=r.createTexture();r.bindTexture(I,_e),r.texParameteri(I,10241,9728),r.texParameteri(I,10240,9728);for(let we=0;we<re;we++)r.texImage2D($+we,0,6408,1,1,0,6408,5121,he);return _e}const H={};H[3553]=ne(3553,3553,1),H[34067]=ne(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ge(2929),l.setFunc(Fl),We(!1),vt(fu),ge(2884),He(xi);function ge(I){h[I]!==!0&&(r.enable(I),h[I]=!0)}function pe(I){h[I]!==!1&&(r.disable(I),h[I]=!1)}function oe(I,$){return m[I]!==$?(r.bindFramebuffer(I,$),m[I]=$,n&&(I===36009&&(m[36160]=$),I===36160&&(m[36009]=$)),!0):!1}function se(I,$){let re=p,he=!1;if(I)if(re=_.get($),re===void 0&&(re=[],_.set($,re)),I.isWebGLMultipleRenderTargets){const _e=I.texture;if(re.length!==_e.length||re[0]!==36064){for(let we=0,ft=_e.length;we<ft;we++)re[we]=36064+we;re.length=_e.length,he=!0}}else re[0]!==36064&&(re[0]=36064,he=!0);else re[0]!==1029&&(re[0]=1029,he=!0);he&&(t.isWebGL2?r.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function Te(I){return d!==I?(r.useProgram(I),d=I,!0):!1}const Se={[Ur]:32774,[r_]:32778,[s_]:32779};if(n)Se[mu]=32775,Se[gu]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(Se[mu]=I.MIN_EXT,Se[gu]=I.MAX_EXT)}const ve={[a_]:0,[o_]:1,[l_]:768,[ud]:770,[p_]:776,[h_]:774,[u_]:772,[c_]:769,[fd]:771,[d_]:775,[f_]:773};function He(I,$,re,he,_e,we,ft,yt){if(I===xi){g===!0&&(pe(3042),g=!1);return}if(g===!1&&(ge(3042),g=!0),I!==i_){if(I!==M||yt!==w){if((y!==Ur||T!==Ur)&&(r.blendEquation(32774),y=Ur,T=Ur),yt)switch(I){case Hr:r.blendFuncSeparate(1,771,1,771);break;case hu:r.blendFunc(1,1);break;case du:r.blendFuncSeparate(0,769,0,1);break;case pu:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Hr:r.blendFuncSeparate(770,771,1,771);break;case hu:r.blendFunc(770,1);break;case du:r.blendFuncSeparate(0,769,0,1);break;case pu:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,x=null,L=null,v=null,M=I,w=yt}return}_e=_e||$,we=we||re,ft=ft||he,($!==y||_e!==T)&&(r.blendEquationSeparate(Se[$],Se[_e]),y=$,T=_e),(re!==b||he!==x||we!==L||ft!==v)&&(r.blendFuncSeparate(ve[re],ve[he],ve[we],ve[ft]),b=re,x=he,L=we,v=ft),M=I,w=null}function Ne(I,$){I.side===pi?pe(2884):ge(2884);let re=I.side===Ct;$&&(re=!re),We(re),I.blending===Hr&&I.transparent===!1?He(xi):He(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const he=I.stencilWrite;c.setTest(he),he&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Fe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ge(32926):pe(32926)}function We(I){F!==I&&(I?r.frontFace(2304):r.frontFace(2305),F=I)}function vt(I){I!==e_?(ge(2884),I!==j&&(I===fu?r.cullFace(1029):I===t_?r.cullFace(1028):r.cullFace(1032))):pe(2884),j=I}function Ke(I){I!==ie&&(Y&&r.lineWidth(I),ie=I)}function Fe(I,$,re){I?(ge(32823),(B!==$||z!==re)&&(r.polygonOffset($,re),B=$,z=re)):pe(32823)}function wt(I){I?ge(3089):pe(3089)}function qe(I){I===void 0&&(I=33984+q-1),D!==I&&(r.activeTexture(I),D=I)}function A(I,$,re){re===void 0&&(D===null?re=33984+q-1:re=D);let he=N[re];he===void 0&&(he={type:void 0,texture:void 0},N[re]=he),(he.type!==I||he.texture!==$)&&(D!==re&&(r.activeTexture(re),D=re),r.bindTexture(I,$||H[I]),he.type=I,he.texture=$)}function S(){const I=N[D];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function P(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function k(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(I){U.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),U.copy(I))}function fe(I){Q.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Q.copy(I))}function ye(I,$){let re=f.get($);re===void 0&&(re=new WeakMap,f.set($,re));let he=re.get(I);he===void 0&&(he=r.getUniformBlockIndex($,I.name),re.set(I,he))}function Me(I,$){const he=f.get($).get(I);u.get(I)!==he&&(r.uniformBlockBinding($,he,I.__bindingPointIndex),u.set(I,he))}function Le(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},D=null,N={},m={},_=new WeakMap,p=[],d=null,g=!1,M=null,y=null,b=null,x=null,T=null,L=null,v=null,w=!1,F=null,j=null,ie=null,B=null,z=null,U.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ge,disable:pe,bindFramebuffer:oe,drawBuffers:se,useProgram:Te,setBlending:He,setMaterial:Ne,setFlipSided:We,setCullFace:vt,setLineWidth:Ke,setPolygonOffset:Fe,setScissorTest:wt,activeTexture:qe,bindTexture:A,unbindTexture:S,compressedTexImage2D:K,compressedTexImage3D:ae,texImage2D:X,texImage3D:te,updateUBOMapping:ye,uniformBlockBinding:Me,texStorage2D:k,texStorage3D:de,texSubImage2D:le,texSubImage3D:me,compressedTexSubImage2D:xe,compressedTexSubImage3D:P,scissor:ce,viewport:fe,reset:Le}}function Bb(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),_=new WeakMap;let p;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,S){return g?new OffscreenCanvas(A,S):Gs("canvas")}function y(A,S,K,ae){let le=1;if((A.width>ae||A.height>ae)&&(le=ae/Math.max(A.width,A.height)),le<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const me=S?Bl:Math.floor,xe=me(le*A.width),P=me(le*A.height);p===void 0&&(p=M(xe,P));const k=K?M(xe,P):p;return k.width=xe,k.height=P,k.getContext("2d").drawImage(A,0,0,xe,P),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+xe+"x"+P+")."),k}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function b(A){return Hu(A.width)&&Hu(A.height)}function x(A){return o?!1:A.wrapS!==pn||A.wrapT!==pn||A.minFilter!==Pt&&A.minFilter!==en}function T(A,S){return A.generateMipmaps&&S&&A.minFilter!==Pt&&A.minFilter!==en}function L(A){r.generateMipmap(A)}function v(A,S,K,ae,le=!1){if(o===!1)return S;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let me=S;return S===6403&&(K===5126&&(me=33326),K===5131&&(me=33325),K===5121&&(me=33321)),S===33319&&(K===5126&&(me=33328),K===5131&&(me=33327),K===5121&&(me=33323)),S===6408&&(K===5126&&(me=34836),K===5131&&(me=34842),K===5121&&(me=ae===Be&&le===!1?35907:32856),K===32819&&(me=32854),K===32820&&(me=32855)),(me===33325||me===33326||me===33327||me===33328||me===34842||me===34836)&&e.get("EXT_color_buffer_float"),me}function w(A,S,K){return T(A,K)===!0||A.isFramebufferTexture&&A.minFilter!==Pt&&A.minFilter!==en?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function F(A){return A===Pt||A===_u||A===xu?9728:9729}function j(A){const S=A.target;S.removeEventListener("dispose",j),B(S),S.isVideoTexture&&_.delete(S)}function ie(A){const S=A.target;S.removeEventListener("dispose",ie),q(S)}function B(A){const S=n.get(A);if(S.__webglInit===void 0)return;const K=A.source,ae=d.get(K);if(ae){const le=ae[S.__cacheKey];le.usedTimes--,le.usedTimes===0&&z(A),Object.keys(ae).length===0&&d.delete(K)}n.remove(A)}function z(A){const S=n.get(A);r.deleteTexture(S.__webglTexture);const K=A.source,ae=d.get(K);delete ae[S.__cacheKey],a.memory.textures--}function q(A){const S=A.texture,K=n.get(A),ae=n.get(S);if(ae.__webglTexture!==void 0&&(r.deleteTexture(ae.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let le=0;le<6;le++)r.deleteFramebuffer(K.__webglFramebuffer[le]),K.__webglDepthbuffer&&r.deleteRenderbuffer(K.__webglDepthbuffer[le]);else{if(r.deleteFramebuffer(K.__webglFramebuffer),K.__webglDepthbuffer&&r.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&r.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let le=0;le<K.__webglColorRenderbuffer.length;le++)K.__webglColorRenderbuffer[le]&&r.deleteRenderbuffer(K.__webglColorRenderbuffer[le]);K.__webglDepthRenderbuffer&&r.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let le=0,me=S.length;le<me;le++){const xe=n.get(S[le]);xe.__webglTexture&&(r.deleteTexture(xe.__webglTexture),a.memory.textures--),n.remove(S[le])}n.remove(S),n.remove(A)}let Y=0;function Z(){Y=0}function O(){const A=Y;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),Y+=1,A}function D(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.encoding),S.join()}function N(A,S){const K=n.get(A);if(A.isVideoTexture&&wt(A),A.isRenderTargetTexture===!1&&A.version>0&&K.__version!==A.version){const ae=A.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(K,A,S);return}}t.bindTexture(3553,K.__webglTexture,33984+S)}function C(A,S){const K=n.get(A);if(A.version>0&&K.__version!==A.version){pe(K,A,S);return}t.bindTexture(35866,K.__webglTexture,33984+S)}function R(A,S){const K=n.get(A);if(A.version>0&&K.__version!==A.version){pe(K,A,S);return}t.bindTexture(32879,K.__webglTexture,33984+S)}function U(A,S){const K=n.get(A);if(A.version>0&&K.__version!==A.version){oe(K,A,S);return}t.bindTexture(34067,K.__webglTexture,33984+S)}const Q={[zl]:10497,[pn]:33071,[Ul]:33648},ne={[Pt]:9728,[_u]:9984,[xu]:9986,[en]:9729,[C_]:9985,[uo]:9987};function H(A,S,K){if(K?(r.texParameteri(A,10242,Q[S.wrapS]),r.texParameteri(A,10243,Q[S.wrapT]),(A===32879||A===35866)&&r.texParameteri(A,32882,Q[S.wrapR]),r.texParameteri(A,10240,ne[S.magFilter]),r.texParameteri(A,10241,ne[S.minFilter])):(r.texParameteri(A,10242,33071),r.texParameteri(A,10243,33071),(A===32879||A===35866)&&r.texParameteri(A,32882,33071),(S.wrapS!==pn||S.wrapT!==pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,10240,F(S.magFilter)),r.texParameteri(A,10241,F(S.minFilter)),S.minFilter!==Pt&&S.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(S.type===Yi&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Bs&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(A,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function ge(A,S){let K=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",j));const ae=S.source;let le=d.get(ae);le===void 0&&(le={},d.set(ae,le));const me=D(S);if(me!==A.__cacheKey){le[me]===void 0&&(le[me]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,K=!0),le[me].usedTimes++;const xe=le[A.__cacheKey];xe!==void 0&&(le[A.__cacheKey].usedTimes--,xe.usedTimes===0&&z(S)),A.__cacheKey=me,A.__webglTexture=le[me].texture}return K}function pe(A,S,K){let ae=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ae=35866),S.isData3DTexture&&(ae=32879);const le=ge(A,S),me=S.source;t.bindTexture(ae,A.__webglTexture,33984+K);const xe=n.get(me);if(me.version!==xe.__version||le===!0){t.activeTexture(33984+K),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const P=x(S)&&b(S.image)===!1;let k=y(S.image,P,!1,u);k=qe(S,k);const de=b(k)||o,X=s.convert(S.format,S.encoding);let te=s.convert(S.type),ce=v(S.internalFormat,X,te,S.encoding,S.isVideoTexture);H(ae,S,de);let fe;const ye=S.mipmaps,Me=o&&S.isVideoTexture!==!0,Le=xe.__version===void 0||le===!0,I=w(S,k,de);if(S.isDepthTexture)ce=6402,o?S.type===Yi?ce=36012:S.type===ji?ce=33190:S.type===Wr?ce=35056:ce=33189:S.type===Yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===er&&ce===6402&&S.type!==md&&S.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ji,te=s.convert(S.type)),S.format===ns&&ce===6402&&(ce=34041,S.type!==Wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Wr,te=s.convert(S.type))),Le&&(Me?t.texStorage2D(3553,1,ce,k.width,k.height):t.texImage2D(3553,0,ce,k.width,k.height,0,X,te,null));else if(S.isDataTexture)if(ye.length>0&&de){Me&&Le&&t.texStorage2D(3553,I,ce,ye[0].width,ye[0].height);for(let $=0,re=ye.length;$<re;$++)fe=ye[$],Me?t.texSubImage2D(3553,$,0,0,fe.width,fe.height,X,te,fe.data):t.texImage2D(3553,$,ce,fe.width,fe.height,0,X,te,fe.data);S.generateMipmaps=!1}else Me?(Le&&t.texStorage2D(3553,I,ce,k.width,k.height),t.texSubImage2D(3553,0,0,0,k.width,k.height,X,te,k.data)):t.texImage2D(3553,0,ce,k.width,k.height,0,X,te,k.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Me&&Le&&t.texStorage3D(35866,I,ce,ye[0].width,ye[0].height,k.depth);for(let $=0,re=ye.length;$<re;$++)fe=ye[$],S.format!==mn?X!==null?Me?t.compressedTexSubImage3D(35866,$,0,0,0,fe.width,fe.height,k.depth,X,fe.data,0,0):t.compressedTexImage3D(35866,$,ce,fe.width,fe.height,k.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?t.texSubImage3D(35866,$,0,0,0,fe.width,fe.height,k.depth,X,te,fe.data):t.texImage3D(35866,$,ce,fe.width,fe.height,k.depth,0,X,te,fe.data)}else{Me&&Le&&t.texStorage2D(3553,I,ce,ye[0].width,ye[0].height);for(let $=0,re=ye.length;$<re;$++)fe=ye[$],S.format!==mn?X!==null?Me?t.compressedTexSubImage2D(3553,$,0,0,fe.width,fe.height,X,fe.data):t.compressedTexImage2D(3553,$,ce,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?t.texSubImage2D(3553,$,0,0,fe.width,fe.height,X,te,fe.data):t.texImage2D(3553,$,ce,fe.width,fe.height,0,X,te,fe.data)}else if(S.isDataArrayTexture)Me?(Le&&t.texStorage3D(35866,I,ce,k.width,k.height,k.depth),t.texSubImage3D(35866,0,0,0,0,k.width,k.height,k.depth,X,te,k.data)):t.texImage3D(35866,0,ce,k.width,k.height,k.depth,0,X,te,k.data);else if(S.isData3DTexture)Me?(Le&&t.texStorage3D(32879,I,ce,k.width,k.height,k.depth),t.texSubImage3D(32879,0,0,0,0,k.width,k.height,k.depth,X,te,k.data)):t.texImage3D(32879,0,ce,k.width,k.height,k.depth,0,X,te,k.data);else if(S.isFramebufferTexture){if(Le)if(Me)t.texStorage2D(3553,I,ce,k.width,k.height);else{let $=k.width,re=k.height;for(let he=0;he<I;he++)t.texImage2D(3553,he,ce,$,re,0,X,te,null),$>>=1,re>>=1}}else if(ye.length>0&&de){Me&&Le&&t.texStorage2D(3553,I,ce,ye[0].width,ye[0].height);for(let $=0,re=ye.length;$<re;$++)fe=ye[$],Me?t.texSubImage2D(3553,$,0,0,X,te,fe):t.texImage2D(3553,$,ce,X,te,fe);S.generateMipmaps=!1}else Me?(Le&&t.texStorage2D(3553,I,ce,k.width,k.height),t.texSubImage2D(3553,0,0,0,X,te,k)):t.texImage2D(3553,0,ce,X,te,k);T(S,de)&&L(ae),xe.__version=me.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function oe(A,S,K){if(S.image.length!==6)return;const ae=ge(A,S),le=S.source;t.bindTexture(34067,A.__webglTexture,33984+K);const me=n.get(le);if(le.version!==me.__version||ae===!0){t.activeTexture(33984+K),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const xe=S.isCompressedTexture||S.image[0].isCompressedTexture,P=S.image[0]&&S.image[0].isDataTexture,k=[];for(let $=0;$<6;$++)!xe&&!P?k[$]=y(S.image[$],!1,!0,c):k[$]=P?S.image[$].image:S.image[$],k[$]=qe(S,k[$]);const de=k[0],X=b(de)||o,te=s.convert(S.format,S.encoding),ce=s.convert(S.type),fe=v(S.internalFormat,te,ce,S.encoding),ye=o&&S.isVideoTexture!==!0,Me=me.__version===void 0||ae===!0;let Le=w(S,de,X);H(34067,S,X);let I;if(xe){ye&&Me&&t.texStorage2D(34067,Le,fe,de.width,de.height);for(let $=0;$<6;$++){I=k[$].mipmaps;for(let re=0;re<I.length;re++){const he=I[re];S.format!==mn?te!==null?ye?t.compressedTexSubImage2D(34069+$,re,0,0,he.width,he.height,te,he.data):t.compressedTexImage2D(34069+$,re,fe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?t.texSubImage2D(34069+$,re,0,0,he.width,he.height,te,ce,he.data):t.texImage2D(34069+$,re,fe,he.width,he.height,0,te,ce,he.data)}}}else{I=S.mipmaps,ye&&Me&&(I.length>0&&Le++,t.texStorage2D(34067,Le,fe,k[0].width,k[0].height));for(let $=0;$<6;$++)if(P){ye?t.texSubImage2D(34069+$,0,0,0,k[$].width,k[$].height,te,ce,k[$].data):t.texImage2D(34069+$,0,fe,k[$].width,k[$].height,0,te,ce,k[$].data);for(let re=0;re<I.length;re++){const _e=I[re].image[$].image;ye?t.texSubImage2D(34069+$,re+1,0,0,_e.width,_e.height,te,ce,_e.data):t.texImage2D(34069+$,re+1,fe,_e.width,_e.height,0,te,ce,_e.data)}}else{ye?t.texSubImage2D(34069+$,0,0,0,te,ce,k[$]):t.texImage2D(34069+$,0,fe,te,ce,k[$]);for(let re=0;re<I.length;re++){const he=I[re];ye?t.texSubImage2D(34069+$,re+1,0,0,te,ce,he.image[$]):t.texImage2D(34069+$,re+1,fe,te,ce,he.image[$])}}}T(S,X)&&L(34067),me.__version=le.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function se(A,S,K,ae,le){const me=s.convert(K.format,K.encoding),xe=s.convert(K.type),P=v(K.internalFormat,me,xe,K.encoding);n.get(S).__hasExternalTextures||(le===32879||le===35866?t.texImage3D(le,0,P,S.width,S.height,S.depth,0,me,xe,null):t.texImage2D(le,0,P,S.width,S.height,0,me,xe,null)),t.bindFramebuffer(36160,A),Fe(S)?h.framebufferTexture2DMultisampleEXT(36160,ae,le,n.get(K).__webglTexture,0,Ke(S)):(le===3553||le>=34069&&le<=34074)&&r.framebufferTexture2D(36160,ae,le,n.get(K).__webglTexture,0),t.bindFramebuffer(36160,null)}function Te(A,S,K){if(r.bindRenderbuffer(36161,A),S.depthBuffer&&!S.stencilBuffer){let ae=33189;if(K||Fe(S)){const le=S.depthTexture;le&&le.isDepthTexture&&(le.type===Yi?ae=36012:le.type===ji&&(ae=33190));const me=Ke(S);Fe(S)?h.renderbufferStorageMultisampleEXT(36161,me,ae,S.width,S.height):r.renderbufferStorageMultisample(36161,me,ae,S.width,S.height)}else r.renderbufferStorage(36161,ae,S.width,S.height);r.framebufferRenderbuffer(36160,36096,36161,A)}else if(S.depthBuffer&&S.stencilBuffer){const ae=Ke(S);K&&Fe(S)===!1?r.renderbufferStorageMultisample(36161,ae,35056,S.width,S.height):Fe(S)?h.renderbufferStorageMultisampleEXT(36161,ae,35056,S.width,S.height):r.renderbufferStorage(36161,34041,S.width,S.height),r.framebufferRenderbuffer(36160,33306,36161,A)}else{const ae=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let le=0;le<ae.length;le++){const me=ae[le],xe=s.convert(me.format,me.encoding),P=s.convert(me.type),k=v(me.internalFormat,xe,P,me.encoding),de=Ke(S);K&&Fe(S)===!1?r.renderbufferStorageMultisample(36161,de,k,S.width,S.height):Fe(S)?h.renderbufferStorageMultisampleEXT(36161,de,k,S.width,S.height):r.renderbufferStorage(36161,k,S.width,S.height)}}r.bindRenderbuffer(36161,null)}function Se(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N(S.depthTexture,0);const ae=n.get(S.depthTexture).__webglTexture,le=Ke(S);if(S.depthTexture.format===er)Fe(S)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ae,0,le):r.framebufferTexture2D(36160,36096,3553,ae,0);else if(S.depthTexture.format===ns)Fe(S)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ae,0,le):r.framebufferTexture2D(36160,33306,3553,ae,0);else throw new Error("Unknown depthTexture format")}function ve(A){const S=n.get(A),K=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Se(S.__webglFramebuffer,A)}else if(K){S.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(36160,S.__webglFramebuffer[ae]),S.__webglDepthbuffer[ae]=r.createRenderbuffer(),Te(S.__webglDepthbuffer[ae],A,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),Te(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function He(A,S,K){const ae=n.get(A);S!==void 0&&se(ae.__webglFramebuffer,A,A.texture,36064,3553),K!==void 0&&ve(A)}function Ne(A){const S=A.texture,K=n.get(A),ae=n.get(S);A.addEventListener("dispose",ie),A.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture()),ae.__version=S.version,a.memory.textures++);const le=A.isWebGLCubeRenderTarget===!0,me=A.isWebGLMultipleRenderTargets===!0,xe=b(A)||o;if(le){K.__webglFramebuffer=[];for(let P=0;P<6;P++)K.__webglFramebuffer[P]=r.createFramebuffer()}else{if(K.__webglFramebuffer=r.createFramebuffer(),me)if(i.drawBuffers){const P=A.texture;for(let k=0,de=P.length;k<de;k++){const X=n.get(P[k]);X.__webglTexture===void 0&&(X.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Fe(A)===!1){const P=me?S:[S];K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,K.__webglMultisampledFramebuffer);for(let k=0;k<P.length;k++){const de=P[k];K.__webglColorRenderbuffer[k]=r.createRenderbuffer(),r.bindRenderbuffer(36161,K.__webglColorRenderbuffer[k]);const X=s.convert(de.format,de.encoding),te=s.convert(de.type),ce=v(de.internalFormat,X,te,de.encoding,A.isXRRenderTarget===!0),fe=Ke(A);r.renderbufferStorageMultisample(36161,fe,ce,A.width,A.height),r.framebufferRenderbuffer(36160,36064+k,36161,K.__webglColorRenderbuffer[k])}r.bindRenderbuffer(36161,null),A.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),Te(K.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(le){t.bindTexture(34067,ae.__webglTexture),H(34067,S,xe);for(let P=0;P<6;P++)se(K.__webglFramebuffer[P],A,S,36064,34069+P);T(S,xe)&&L(34067),t.unbindTexture()}else if(me){const P=A.texture;for(let k=0,de=P.length;k<de;k++){const X=P[k],te=n.get(X);t.bindTexture(3553,te.__webglTexture),H(3553,X,xe),se(K.__webglFramebuffer,A,X,36064+k,3553),T(X,xe)&&L(3553)}t.unbindTexture()}else{let P=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?P=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(P,ae.__webglTexture),H(P,S,xe),se(K.__webglFramebuffer,A,S,36064,P),T(S,xe)&&L(P),t.unbindTexture()}A.depthBuffer&&ve(A)}function We(A){const S=b(A)||o,K=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ae=0,le=K.length;ae<le;ae++){const me=K[ae];if(T(me,S)){const xe=A.isWebGLCubeRenderTarget?34067:3553,P=n.get(me).__webglTexture;t.bindTexture(xe,P),L(xe),t.unbindTexture()}}}function vt(A){if(o&&A.samples>0&&Fe(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],K=A.width,ae=A.height;let le=16384;const me=[],xe=A.stencilBuffer?33306:36096,P=n.get(A),k=A.isWebGLMultipleRenderTargets===!0;if(k)for(let de=0;de<S.length;de++)t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,P.__webglFramebuffer),r.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,P.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,P.__webglFramebuffer);for(let de=0;de<S.length;de++){me.push(36064+de),A.depthBuffer&&me.push(xe);const X=P.__ignoreDepthValues!==void 0?P.__ignoreDepthValues:!1;if(X===!1&&(A.depthBuffer&&(le|=256),A.stencilBuffer&&(le|=1024)),k&&r.framebufferRenderbuffer(36008,36064,36161,P.__webglColorRenderbuffer[de]),X===!0&&(r.invalidateFramebuffer(36008,[xe]),r.invalidateFramebuffer(36009,[xe])),k){const te=n.get(S[de]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,te,0)}r.blitFramebuffer(0,0,K,ae,0,0,K,ae,le,9728),m&&r.invalidateFramebuffer(36008,me)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),k)for(let de=0;de<S.length;de++){t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+de,36161,P.__webglColorRenderbuffer[de]);const X=n.get(S[de]).__webglTexture;t.bindFramebuffer(36160,P.__webglFramebuffer),r.framebufferTexture2D(36009,36064+de,3553,X,0)}t.bindFramebuffer(36009,P.__webglMultisampledFramebuffer)}}function Ke(A){return Math.min(f,A.samples)}function Fe(A){const S=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function wt(A){const S=a.render.frame;_.get(A)!==S&&(_.set(A,S),A.update())}function qe(A,S){const K=A.encoding,ae=A.format,le=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===kl||K!==lr&&(K===Be?o===!1?e.has("EXT_sRGB")===!0&&ae===mn?(A.format=kl,A.minFilter=en,A.generateMipmaps=!1):S=xd.sRGBToLinear(S):(ae!==mn||le!==or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",K)),S}this.allocateTextureUnit=O,this.resetTextureUnits=Z,this.setTexture2D=N,this.setTexture2DArray=C,this.setTexture3D=R,this.setTextureCube=U,this.rebindTextures=He,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Fe}function Gb(r,e,t){const n=t.isWebGL2;function i(s,a=null){let o;if(s===or)return 5121;if(s===R_)return 32819;if(s===I_)return 32820;if(s===L_)return 5120;if(s===P_)return 5122;if(s===md)return 5123;if(s===D_)return 5124;if(s===ji)return 5125;if(s===Yi)return 5126;if(s===Bs)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===O_)return 6406;if(s===mn)return 6408;if(s===N_)return 6409;if(s===z_)return 6410;if(s===er)return 6402;if(s===ns)return 34041;if(s===U_)return 6403;if(s===F_)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===kl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===k_)return 36244;if(s===B_)return 33319;if(s===G_)return 33320;if(s===V_)return 36249;if(s===Ao||s===Co||s===Lo||s===Po)if(a===Be)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ao)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Co)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ao)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Co)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Lo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Po)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===vu||s===yu||s===bu||s===Mu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===vu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===yu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===bu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Mu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===H_)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Su||s===wu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Su)return a===Be?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===wu)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Eu||s===Tu||s===Au||s===Cu||s===Lu||s===Pu||s===Du||s===Ru||s===Iu||s===Ou||s===Fu||s===Nu||s===zu||s===Uu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Eu)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Tu)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Au)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Cu)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Lu)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pu)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Du)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ru)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Iu)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ou)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Fu)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Nu)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===zu)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Uu)return a===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ku)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ku)return a===Be?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Wr?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Vb extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ls extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hb={type:"move"};class rl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const M=new Ls;M.matrixAutoUpdate=!1,M.visible=!1,c.joints[p.jointName]=M,c.add(M)}const g=c.joints[p.jointName];d!==null&&(g.matrix.fromArray(d.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=d.radius),g.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hb)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class Wb extends on{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:er,u!==er&&u!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===er&&(n=ji),n===void 0&&u===ns&&(n=Wr),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1}}class qb extends mr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,f=null,h=null,m=null;const _=t.getContextAttributes();let p=null,d=null;const g=[],M=[],y=new tn;y.layers.enable(1),y.viewport=new _t;const b=new tn;b.layers.enable(2),b.viewport=new _t;const x=[y,b],T=new Vb;T.layers.enable(1),T.layers.enable(2);let L=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let N=g[D];return N===void 0&&(N=new rl,g[D]=N),N.getTargetRaySpace()},this.getControllerGrip=function(D){let N=g[D];return N===void 0&&(N=new rl,g[D]=N),N.getGripSpace()},this.getHand=function(D){let N=g[D];return N===void 0&&(N=new rl,g[D]=N),N.getHandSpace()};function w(D){const N=M.indexOf(D.inputSource);if(N===-1)return;const C=g[N];C!==void 0&&C.dispatchEvent({type:D.type,data:D.inputSource})}function F(){i.removeEventListener("select",w),i.removeEventListener("selectstart",w),i.removeEventListener("selectend",w),i.removeEventListener("squeeze",w),i.removeEventListener("squeezestart",w),i.removeEventListener("squeezeend",w),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",j);for(let D=0;D<g.length;D++){const N=M[D];N!==null&&(M[D]=null,g[D].disconnect(N))}L=null,v=null,e.setRenderTarget(p),h=null,f=null,u=null,i=null,d=null,O.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(D){l=D},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",w),i.addEventListener("selectstart",w),i.addEventListener("selectend",w),i.addEventListener("squeeze",w),i.addEventListener("squeezestart",w),i.addEventListener("squeezeend",w),i.addEventListener("end",F),i.addEventListener("inputsourceschange",j),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const N={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,N),i.updateRenderState({baseLayer:h}),d=new cr(h.framebufferWidth,h.framebufferHeight,{format:mn,type:or,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let N=null,C=null,R=null;_.depth&&(R=_.stencil?35056:33190,N=_.stencil?ns:er,C=_.stencil?Wr:ji);const U={colorFormat:32856,depthFormat:R,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(U),i.updateRenderState({layers:[f]}),d=new cr(f.textureWidth,f.textureHeight,{format:mn,type:or,depthTexture:new Wb(f.textureWidth,f.textureHeight,C,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const Q=e.properties.get(d);Q.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(o),O.setContext(i),O.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function j(D){for(let N=0;N<D.removed.length;N++){const C=D.removed[N],R=M.indexOf(C);R>=0&&(M[R]=null,g[R].dispatchEvent({type:"disconnected",data:C}))}for(let N=0;N<D.added.length;N++){const C=D.added[N];let R=M.indexOf(C);if(R===-1){for(let Q=0;Q<g.length;Q++)if(Q>=M.length){M.push(C),R=Q;break}else if(M[Q]===null){M[Q]=C,R=Q;break}if(R===-1)break}const U=g[R];U&&U.dispatchEvent({type:"connected",data:C})}}const ie=new V,B=new V;function z(D,N,C){ie.setFromMatrixPosition(N.matrixWorld),B.setFromMatrixPosition(C.matrixWorld);const R=ie.distanceTo(B),U=N.projectionMatrix.elements,Q=C.projectionMatrix.elements,ne=U[14]/(U[10]-1),H=U[14]/(U[10]+1),ge=(U[9]+1)/U[5],pe=(U[9]-1)/U[5],oe=(U[8]-1)/U[0],se=(Q[8]+1)/Q[0],Te=ne*oe,Se=ne*se,ve=R/(-oe+se),He=ve*-oe;N.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(He),D.translateZ(ve),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const Ne=ne+ve,We=H+ve,vt=Te-He,Ke=Se+(R-He),Fe=ge*H/We*Ne,wt=pe*H/We*Ne;D.projectionMatrix.makePerspective(vt,Ke,Fe,wt,Ne,We)}function q(D,N){N===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(N.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;T.near=b.near=y.near=D.near,T.far=b.far=y.far=D.far,(L!==T.near||v!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),L=T.near,v=T.far);const N=D.parent,C=T.cameras;q(T,N);for(let U=0;U<C.length;U++)q(C[U],N);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),D.matrix.copy(T.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale);const R=D.children;for(let U=0,Q=R.length;U<Q;U++)R[U].updateMatrixWorld(!0);C.length===2?z(T,y,b):T.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(D){f!==null&&(f.fixedFoveation=D),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=D)};let Y=null;function Z(D,N){if(c=N.getViewerPose(l||a),m=N,c!==null){const C=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let R=!1;C.length!==T.cameras.length&&(T.cameras.length=0,R=!0);for(let U=0;U<C.length;U++){const Q=C[U];let ne=null;if(h!==null)ne=h.getViewport(Q);else{const ge=u.getViewSubImage(f,Q);ne=ge.viewport,U===0&&(e.setRenderTargetTextures(d,ge.colorTexture,f.ignoreDepthValues?void 0:ge.depthStencilTexture),e.setRenderTarget(d))}let H=x[U];H===void 0&&(H=new tn,H.layers.enable(U),H.viewport=new _t,x[U]=H),H.matrix.fromArray(Q.transform.matrix),H.projectionMatrix.fromArray(Q.projectionMatrix),H.viewport.set(ne.x,ne.y,ne.width,ne.height),U===0&&T.matrix.copy(H.matrix),R===!0&&T.cameras.push(H)}}for(let C=0;C<g.length;C++){const R=M[C],U=g[C];R!==null&&U!==void 0&&U.update(R,N,l||a)}Y&&Y(D,N),m=null}const O=new Ad;O.setAnimationLoop(Z),this.setAnimationLoop=function(D){Y=D},this.dispose=function(){}}}function Xb(r,e){function t(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,g,M,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),u(p,d)):d.isMeshPhongMaterial?(i(p,d),c(p,d)):d.isMeshStandardMaterial?(i(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,y)):d.isMeshMatcapMaterial?(i(p,d),m(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),_(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?o(p,d,g,M):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Ct&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Ct&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const g=e.get(d).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const b=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*b}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let M;d.map?M=d.map:d.specularMap?M=d.specularMap:d.displacementMap?M=d.displacementMap:d.normalMap?M=d.normalMap:d.bumpMap?M=d.bumpMap:d.roughnessMap?M=d.roughnessMap:d.metalnessMap?M=d.metalnessMap:d.alphaMap?M=d.alphaMap:d.emissiveMap?M=d.emissiveMap:d.clearcoatMap?M=d.clearcoatMap:d.clearcoatNormalMap?M=d.clearcoatNormalMap:d.clearcoatRoughnessMap?M=d.clearcoatRoughnessMap:d.iridescenceMap?M=d.iridescenceMap:d.iridescenceThicknessMap?M=d.iridescenceThicknessMap:d.specularIntensityMap?M=d.specularIntensityMap:d.specularColorMap?M=d.specularColorMap:d.transmissionMap?M=d.transmissionMap:d.thicknessMap?M=d.thicknessMap:d.sheenColorMap?M=d.sheenColorMap:d.sheenRoughnessMap&&(M=d.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix));let y;d.aoMap?y=d.aoMap:d.lightMap&&(y=d.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function o(p,d,g,M){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*g,p.scale.value=M*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let y;d.map?y=d.map:d.alphaMap&&(y=d.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let g;d.map?g=d.map:d.alphaMap&&(g=d.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,g){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Ct&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function jb(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(35375):0;function l(M,y){const b=y.program;n.uniformBlockBinding(M,b)}function c(M,y){let b=i[M.id];b===void 0&&(_(M),b=u(M),i[M.id]=b,M.addEventListener("dispose",d));const x=y.program;n.updateUBOMapping(M,x);const T=e.render.frame;s[M.id]!==T&&(h(M),s[M.id]=T)}function u(M){const y=f();M.__bindingPointIndex=y;const b=r.createBuffer(),x=M.__size,T=M.usage;return r.bindBuffer(35345,b),r.bufferData(35345,x,T),r.bindBuffer(35345,null),r.bindBufferBase(35345,y,b),b}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const y=i[M.id],b=M.uniforms,x=M.__cache;r.bindBuffer(35345,y);for(let T=0,L=b.length;T<L;T++){const v=b[T];if(m(v,T,x)===!0){const w=v.value,F=v.__offset;typeof w=="number"?(v.__data[0]=w,r.bufferSubData(35345,F,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):w.toArray(v.__data),r.bufferSubData(35345,F,v.__data))}}r.bindBuffer(35345,null)}function m(M,y,b){const x=M.value;if(b[y]===void 0)return typeof x=="number"?b[y]=x:b[y]=x.clone(),!0;if(typeof x=="number"){if(b[y]!==x)return b[y]=x,!0}else{const T=b[y];if(T.equals(x)===!1)return T.copy(x),!0}return!1}function _(M){const y=M.uniforms;let b=0;const x=16;let T=0;for(let L=0,v=y.length;L<v;L++){const w=y[L],F=p(w);if(w.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=b,L>0){T=b%x;const j=x-T;T!==0&&j-F.boundary<0&&(b+=x-T,w.__offset=b)}b+=F.storage}return T=b%x,T>0&&(b+=x-T),M.__size=b,M.__cache={},this}function p(M){const y=M.value,b={boundary:0,storage:0};return typeof y=="number"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function d(M){const y=M.target;y.removeEventListener("dispose",d);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function g(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:l,update:c,dispose:g}}function Yb(){const r=Gs("canvas");return r.style.display="block",r}function Rd(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:Yb(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let f=null,h=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=lr,this.physicallyCorrectLights=!1,this.toneMapping=zn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let d=!1,g=0,M=0,y=null,b=-1,x=null;const T=new _t,L=new _t;let v=null,w=e.width,F=e.height,j=1,ie=null,B=null;const z=new _t(0,0,w,F),q=new _t(0,0,w,F);let Y=!1;const Z=new Td;let O=!1,D=!1,N=null;const C=new xt,R=new De,U=new V,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return y===null?j:1}let H=t;function ge(E,W){for(let J=0;J<E.length;J++){const G=E[J],ee=e.getContext(G,W);if(ee!==null)return ee}return null}try{const E={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sc}`),e.addEventListener("webglcontextlost",ce,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",ye,!1),H===null){const W=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&W.shift(),H=ge(W,E),H===null)throw ge(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let pe,oe,se,Te,Se,ve,He,Ne,We,vt,Ke,Fe,wt,qe,A,S,K,ae,le,me,xe,P,k,de;function X(){pe=new sy(H),oe=new Jv(H,pe,r),pe.init(oe),P=new Gb(H,pe,oe),se=new kb(H,pe,oe),Te=new ly,Se=new Eb,ve=new Bb(H,pe,se,Se,oe,P,Te),He=new ey(p),Ne=new ry(p),We=new g0(H,oe),k=new Zv(H,pe,We,oe),vt=new ay(H,We,Te,k),Ke=new hy(H,vt,We,Te),le=new fy(H,oe,ve),S=new Qv(Se),Fe=new wb(p,He,Ne,pe,oe,k,S),wt=new Xb(p,Se),qe=new Ab,A=new Ib(pe,oe),ae=new $v(p,He,Ne,se,Ke,u,a),K=new Ub(p,Ke,oe),de=new jb(H,Te,oe,se),me=new Kv(H,pe,Te,oe),xe=new oy(H,pe,Te,oe),Te.programs=Fe.programs,p.capabilities=oe,p.extensions=pe,p.properties=Se,p.renderLists=qe,p.shadowMap=K,p.state=se,p.info=Te}X();const te=new qb(p,H);this.xr=te,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const E=pe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=pe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(w,F,!1))},this.getSize=function(E){return E.set(w,F)},this.setSize=function(E,W,J){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=E,F=W,e.width=Math.floor(E*j),e.height=Math.floor(W*j),J!==!1&&(e.style.width=E+"px",e.style.height=W+"px"),this.setViewport(0,0,E,W)},this.getDrawingBufferSize=function(E){return E.set(w*j,F*j).floor()},this.setDrawingBufferSize=function(E,W,J){w=E,F=W,j=J,e.width=Math.floor(E*J),e.height=Math.floor(W*J),this.setViewport(0,0,E,W)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(z)},this.setViewport=function(E,W,J,G){E.isVector4?z.set(E.x,E.y,E.z,E.w):z.set(E,W,J,G),se.viewport(T.copy(z).multiplyScalar(j).floor())},this.getScissor=function(E){return E.copy(q)},this.setScissor=function(E,W,J,G){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,W,J,G),se.scissor(L.copy(q).multiplyScalar(j).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(E){se.setScissorTest(Y=E)},this.setOpaqueSort=function(E){ie=E},this.setTransparentSort=function(E){B=E},this.getClearColor=function(E){return E.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(E=!0,W=!0,J=!0){let G=0;E&&(G|=16384),W&&(G|=256),J&&(G|=1024),H.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ce,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",ye,!1),qe.dispose(),A.dispose(),Se.dispose(),He.dispose(),Ne.dispose(),Ke.dispose(),k.dispose(),de.dispose(),Fe.dispose(),te.dispose(),te.removeEventListener("sessionstart",he),te.removeEventListener("sessionend",_e),N&&(N.dispose(),N=null),we.stop()};function ce(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const E=Te.autoReset,W=K.enabled,J=K.autoUpdate,G=K.needsUpdate,ee=K.type;X(),Te.autoReset=E,K.enabled=W,K.autoUpdate=J,K.needsUpdate=G,K.type=ee}function ye(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Me(E){const W=E.target;W.removeEventListener("dispose",Me),Le(W)}function Le(E){I(E),Se.remove(E)}function I(E){const W=Se.get(E).programs;W!==void 0&&(W.forEach(function(J){Fe.releaseProgram(J)}),E.isShaderMaterial&&Fe.releaseShaderCache(E))}this.renderBufferDirect=function(E,W,J,G,ee,be){W===null&&(W=Q);const Ee=ee.isMesh&&ee.matrixWorld.determinant()<0,Pe=Ip(E,W,J,G,ee);se.setMaterial(G,Ee);let Ae=J.index;const ze=J.attributes.position;if(Ae===null){if(ze===void 0||ze.count===0)return}else if(Ae.count===0)return;let Re=1;G.wireframe===!0&&(Ae=vt.getWireframeAttribute(J),Re=2),k.setup(ee,G,Pe,J,Ae);let Oe,Je=me;Ae!==null&&(Oe=We.get(Ae),Je=xe,Je.setIndex(Oe));const Ii=Ae!==null?Ae.count:ze.count,_r=J.drawRange.start*Re,xr=J.drawRange.count*Re,vn=be!==null?be.start*Re:0,Ue=be!==null?be.count*Re:1/0,vr=Math.max(_r,vn),nt=Math.min(Ii,_r+xr,vn+Ue)-1,Zt=Math.max(0,nt-vr+1);if(Zt!==0){if(ee.isMesh)G.wireframe===!0?(se.setLineWidth(G.wireframeLinewidth*ne()),Je.setMode(1)):Je.setMode(4);else if(ee.isLine){let ri=G.linewidth;ri===void 0&&(ri=1),se.setLineWidth(ri*ne()),ee.isLineSegments?Je.setMode(1):ee.isLineLoop?Je.setMode(2):Je.setMode(3)}else ee.isPoints?Je.setMode(0):ee.isSprite&&Je.setMode(4);if(ee.isInstancedMesh)Je.renderInstances(vr,Zt,ee.count);else if(J.isInstancedBufferGeometry){const ri=Math.min(J.instanceCount,J._maxInstanceCount);Je.renderInstances(vr,Zt,ri)}else Je.render(vr,Zt)}},this.compile=function(E,W){function J(G,ee,be){G.transparent===!0&&G.side===pi?(G.side=Ct,G.needsUpdate=!0,$t(G,ee,be),G.side=Jr,G.needsUpdate=!0,$t(G,ee,be),G.side=pi):$t(G,ee,be)}h=A.get(E),h.init(),_.push(h),E.traverseVisible(function(G){G.isLight&&G.layers.test(W.layers)&&(h.pushLight(G),G.castShadow&&h.pushShadow(G))}),h.setupLights(p.physicallyCorrectLights),E.traverse(function(G){const ee=G.material;if(ee)if(Array.isArray(ee))for(let be=0;be<ee.length;be++){const Ee=ee[be];J(Ee,E,G)}else J(ee,E,G)}),_.pop(),h=null};let $=null;function re(E){$&&$(E)}function he(){we.stop()}function _e(){we.start()}const we=new Ad;we.setAnimationLoop(re),typeof self<"u"&&we.setContext(self),this.setAnimationLoop=function(E){$=E,te.setAnimationLoop(E),E===null?we.stop():we.start()},te.addEventListener("sessionstart",he),te.addEventListener("sessionend",_e),this.render=function(E,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(W),W=te.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,W,y),h=A.get(E,_.length),h.init(),_.push(h),C.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z.setFromProjectionMatrix(C),D=this.localClippingEnabled,O=S.init(this.clippingPlanes,D,W),f=qe.get(E,m.length),f.init(),m.push(f),ft(E,W,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(ie,B),O===!0&&S.beginShadows();const J=h.state.shadowsArray;if(K.render(J,E,W),O===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(f,E),h.setupLights(p.physicallyCorrectLights),W.isArrayCamera){const G=W.cameras;for(let ee=0,be=G.length;ee<be;ee++){const Ee=G[ee];yt(f,E,Ee,Ee.viewport)}}else yt(f,E,W);y!==null&&(ve.updateMultisampleRenderTarget(y),ve.updateRenderTargetMipmap(y)),E.isScene===!0&&E.onAfterRender(p,E,W),k.resetDefaultState(),b=-1,x=null,_.pop(),_.length>0?h=_[_.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function ft(E,W,J,G){if(E.visible===!1)return;if(E.layers.test(W.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(W);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Z.intersectsSprite(E)){G&&U.setFromMatrixPosition(E.matrixWorld).applyMatrix4(C);const Ee=Ke.update(E),Pe=E.material;Pe.visible&&f.push(E,Ee,Pe,J,U.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Te.render.frame&&(E.skeleton.update(),E.skeleton.frame=Te.render.frame),!E.frustumCulled||Z.intersectsObject(E))){G&&U.setFromMatrixPosition(E.matrixWorld).applyMatrix4(C);const Ee=Ke.update(E),Pe=E.material;if(Array.isArray(Pe)){const Ae=Ee.groups;for(let ze=0,Re=Ae.length;ze<Re;ze++){const Oe=Ae[ze],Je=Pe[Oe.materialIndex];Je&&Je.visible&&f.push(E,Ee,Je,J,U.z,Oe)}}else Pe.visible&&f.push(E,Ee,Pe,J,U.z,null)}}const be=E.children;for(let Ee=0,Pe=be.length;Ee<Pe;Ee++)ft(be[Ee],W,J,G)}function yt(E,W,J,G){const ee=E.opaque,be=E.transmissive,Ee=E.transparent;h.setupLightsView(J),be.length>0&&Ri(ee,W,J),G&&se.viewport(T.copy(G)),ee.length>0&&Xe(ee,W,J),be.length>0&&Xe(be,W,J),Ee.length>0&&Xe(Ee,W,J),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Ri(E,W,J){const G=oe.isWebGL2;N===null&&(N=new cr(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?Bs:or,minFilter:uo,samples:G&&s===!0?4:0})),p.getDrawingBufferSize(R),G?N.setSize(R.x,R.y):N.setSize(Bl(R.x),Bl(R.y));const ee=p.getRenderTarget();p.setRenderTarget(N),p.clear();const be=p.toneMapping;p.toneMapping=zn,Xe(E,W,J),p.toneMapping=be,ve.updateMultisampleRenderTarget(N),ve.updateRenderTargetMipmap(N),p.setRenderTarget(ee)}function Xe(E,W,J){const G=W.isScene===!0?W.overrideMaterial:null;for(let ee=0,be=E.length;ee<be;ee++){const Ee=E[ee],Pe=Ee.object,Ae=Ee.geometry,ze=G===null?Ee.material:G,Re=Ee.group;Pe.layers.test(J.layers)&&Tn(Pe,W,J,Ae,ze,Re)}}function Tn(E,W,J,G,ee,be){E.onBeforeRender(p,W,J,G,ee,be),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),ee.onBeforeRender(p,W,J,G,E,be),ee.transparent===!0&&ee.side===pi?(ee.side=Ct,ee.needsUpdate=!0,p.renderBufferDirect(J,W,G,ee,E,be),ee.side=Jr,ee.needsUpdate=!0,p.renderBufferDirect(J,W,G,ee,E,be),ee.side=pi):p.renderBufferDirect(J,W,G,ee,E,be),E.onAfterRender(p,W,J,G,ee,be)}function $t(E,W,J){W.isScene!==!0&&(W=Q);const G=Se.get(E),ee=h.state.lights,be=h.state.shadowsArray,Ee=ee.state.version,Pe=Fe.getParameters(E,ee.state,be,W,J),Ae=Fe.getProgramCacheKey(Pe);let ze=G.programs;G.environment=E.isMeshStandardMaterial?W.environment:null,G.fog=W.fog,G.envMap=(E.isMeshStandardMaterial?Ne:He).get(E.envMap||G.environment),ze===void 0&&(E.addEventListener("dispose",Me),ze=new Map,G.programs=ze);let Re=ze.get(Ae);if(Re!==void 0){if(G.currentProgram===Re&&G.lightsStateVersion===Ee)return Zc(E,Pe),Re}else Pe.uniforms=Fe.getUniforms(E),E.onBuild(J,Pe,p),E.onBeforeCompile(Pe,p),Re=Fe.acquireProgram(Pe,Ae),ze.set(Ae,Re),G.uniforms=Pe.uniforms;const Oe=G.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Oe.clippingPlanes=S.uniform),Zc(E,Pe),G.needsLights=Fp(E),G.lightsStateVersion=Ee,G.needsLights&&(Oe.ambientLightColor.value=ee.state.ambient,Oe.lightProbe.value=ee.state.probe,Oe.directionalLights.value=ee.state.directional,Oe.directionalLightShadows.value=ee.state.directionalShadow,Oe.spotLights.value=ee.state.spot,Oe.spotLightShadows.value=ee.state.spotShadow,Oe.rectAreaLights.value=ee.state.rectArea,Oe.ltc_1.value=ee.state.rectAreaLTC1,Oe.ltc_2.value=ee.state.rectAreaLTC2,Oe.pointLights.value=ee.state.point,Oe.pointLightShadows.value=ee.state.pointShadow,Oe.hemisphereLights.value=ee.state.hemi,Oe.directionalShadowMap.value=ee.state.directionalShadowMap,Oe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Oe.spotShadowMap.value=ee.state.spotShadowMap,Oe.spotLightMatrix.value=ee.state.spotLightMatrix,Oe.spotLightMap.value=ee.state.spotLightMap,Oe.pointShadowMap.value=ee.state.pointShadowMap,Oe.pointShadowMatrix.value=ee.state.pointShadowMatrix);const Je=Re.getUniforms(),Ii=Pa.seqWithValue(Je.seq,Oe);return G.currentProgram=Re,G.uniformsList=Ii,Re}function Zc(E,W){const J=Se.get(E);J.outputEncoding=W.outputEncoding,J.instancing=W.instancing,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function Ip(E,W,J,G,ee){W.isScene!==!0&&(W=Q),ve.resetTextureUnits();const be=W.fog,Ee=G.isMeshStandardMaterial?W.environment:null,Pe=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:lr,Ae=(G.isMeshStandardMaterial?Ne:He).get(G.envMap||Ee),ze=G.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Re=!!G.normalMap&&!!J.attributes.tangent,Oe=!!J.morphAttributes.position,Je=!!J.morphAttributes.normal,Ii=!!J.morphAttributes.color,_r=G.toneMapped?p.toneMapping:zn,xr=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,vn=xr!==void 0?xr.length:0,Ue=Se.get(G),vr=h.state.lights;if(O===!0&&(D===!0||E!==x)){const zt=E===x&&G.id===b;S.setState(G,E,zt)}let nt=!1;G.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==vr.state.version||Ue.outputEncoding!==Pe||ee.isInstancedMesh&&Ue.instancing===!1||!ee.isInstancedMesh&&Ue.instancing===!0||ee.isSkinnedMesh&&Ue.skinning===!1||!ee.isSkinnedMesh&&Ue.skinning===!0||Ue.envMap!==Ae||G.fog===!0&&Ue.fog!==be||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==S.numPlanes||Ue.numIntersection!==S.numIntersection)||Ue.vertexAlphas!==ze||Ue.vertexTangents!==Re||Ue.morphTargets!==Oe||Ue.morphNormals!==Je||Ue.morphColors!==Ii||Ue.toneMapping!==_r||oe.isWebGL2===!0&&Ue.morphTargetsCount!==vn)&&(nt=!0):(nt=!0,Ue.__version=G.version);let Zt=Ue.currentProgram;nt===!0&&(Zt=$t(G,W,ee));let ri=!1,_s=!1,yo=!1;const Et=Zt.getUniforms(),Oi=Ue.uniforms;if(se.useProgram(Zt.program)&&(ri=!0,_s=!0,yo=!0),G.id!==b&&(b=G.id,_s=!0),ri||x!==E){if(Et.setValue(H,"projectionMatrix",E.projectionMatrix),oe.logarithmicDepthBuffer&&Et.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),x!==E&&(x=E,_s=!0,yo=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const zt=Et.map.cameraPosition;zt!==void 0&&zt.setValue(H,U.setFromMatrixPosition(E.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Et.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||ee.isSkinnedMesh)&&Et.setValue(H,"viewMatrix",E.matrixWorldInverse)}if(ee.isSkinnedMesh){Et.setOptional(H,ee,"bindMatrix"),Et.setOptional(H,ee,"bindMatrixInverse");const zt=ee.skeleton;zt&&(oe.floatVertexTextures?(zt.boneTexture===null&&zt.computeBoneTexture(),Et.setValue(H,"boneTexture",zt.boneTexture,ve),Et.setValue(H,"boneTextureSize",zt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const bo=J.morphAttributes;if((bo.position!==void 0||bo.normal!==void 0||bo.color!==void 0&&oe.isWebGL2===!0)&&le.update(ee,J,G,Zt),(_s||Ue.receiveShadow!==ee.receiveShadow)&&(Ue.receiveShadow=ee.receiveShadow,Et.setValue(H,"receiveShadow",ee.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Oi.envMap.value=Ae,Oi.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),_s&&(Et.setValue(H,"toneMappingExposure",p.toneMappingExposure),Ue.needsLights&&Op(Oi,yo),be&&G.fog===!0&&wt.refreshFogUniforms(Oi,be),wt.refreshMaterialUniforms(Oi,G,j,F,N),Pa.upload(H,Ue.uniformsList,Oi,ve)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Pa.upload(H,Ue.uniformsList,Oi,ve),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Et.setValue(H,"center",ee.center),Et.setValue(H,"modelViewMatrix",ee.modelViewMatrix),Et.setValue(H,"normalMatrix",ee.normalMatrix),Et.setValue(H,"modelMatrix",ee.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const zt=G.uniformsGroups;for(let Mo=0,Np=zt.length;Mo<Np;Mo++)if(oe.isWebGL2){const Kc=zt[Mo];de.update(Kc,Zt),de.bind(Kc,Zt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zt}function Op(E,W){E.ambientLightColor.needsUpdate=W,E.lightProbe.needsUpdate=W,E.directionalLights.needsUpdate=W,E.directionalLightShadows.needsUpdate=W,E.pointLights.needsUpdate=W,E.pointLightShadows.needsUpdate=W,E.spotLights.needsUpdate=W,E.spotLightShadows.needsUpdate=W,E.rectAreaLights.needsUpdate=W,E.hemisphereLights.needsUpdate=W}function Fp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(E,W,J){Se.get(E.texture).__webglTexture=W,Se.get(E.depthTexture).__webglTexture=J;const G=Se.get(E);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=J===void 0,G.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,W){const J=Se.get(E);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(E,W=0,J=0){y=E,g=W,M=J;let G=!0,ee=null,be=!1,Ee=!1;if(E){const Ae=Se.get(E);Ae.__useDefaultFramebuffer!==void 0?(se.bindFramebuffer(36160,null),G=!1):Ae.__webglFramebuffer===void 0?ve.setupRenderTarget(E):Ae.__hasExternalTextures&&ve.rebindTextures(E,Se.get(E.texture).__webglTexture,Se.get(E.depthTexture).__webglTexture);const ze=E.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ee=!0);const Re=Se.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(ee=Re[W],be=!0):oe.isWebGL2&&E.samples>0&&ve.useMultisampledRTT(E)===!1?ee=Se.get(E).__webglMultisampledFramebuffer:ee=Re,T.copy(E.viewport),L.copy(E.scissor),v=E.scissorTest}else T.copy(z).multiplyScalar(j).floor(),L.copy(q).multiplyScalar(j).floor(),v=Y;if(se.bindFramebuffer(36160,ee)&&oe.drawBuffers&&G&&se.drawBuffers(E,ee),se.viewport(T),se.scissor(L),se.setScissorTest(v),be){const Ae=Se.get(E.texture);H.framebufferTexture2D(36160,36064,34069+W,Ae.__webglTexture,J)}else if(Ee){const Ae=Se.get(E.texture),ze=W||0;H.framebufferTextureLayer(36160,36064,Ae.__webglTexture,J||0,ze)}b=-1},this.readRenderTargetPixels=function(E,W,J,G,ee,be,Ee){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Pe=Pe[Ee]),Pe){se.bindFramebuffer(36160,Pe);try{const Ae=E.texture,ze=Ae.format,Re=Ae.type;if(ze!==mn&&P.convert(ze)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Re===Bs&&(pe.has("EXT_color_buffer_half_float")||oe.isWebGL2&&pe.has("EXT_color_buffer_float"));if(Re!==or&&P.convert(Re)!==H.getParameter(35738)&&!(Re===Yi&&(oe.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=E.width-G&&J>=0&&J<=E.height-ee&&H.readPixels(W,J,G,ee,P.convert(ze),P.convert(Re),be)}finally{const Ae=y!==null?Se.get(y).__webglFramebuffer:null;se.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(E,W,J=0){const G=Math.pow(2,-J),ee=Math.floor(W.image.width*G),be=Math.floor(W.image.height*G);ve.setTexture2D(W,0),H.copyTexSubImage2D(3553,J,0,0,E.x,E.y,ee,be),se.unbindTexture()},this.copyTextureToTexture=function(E,W,J,G=0){const ee=W.image.width,be=W.image.height,Ee=P.convert(J.format),Pe=P.convert(J.type);ve.setTexture2D(J,0),H.pixelStorei(37440,J.flipY),H.pixelStorei(37441,J.premultiplyAlpha),H.pixelStorei(3317,J.unpackAlignment),W.isDataTexture?H.texSubImage2D(3553,G,E.x,E.y,ee,be,Ee,Pe,W.image.data):W.isCompressedTexture?H.compressedTexSubImage2D(3553,G,E.x,E.y,W.mipmaps[0].width,W.mipmaps[0].height,Ee,W.mipmaps[0].data):H.texSubImage2D(3553,G,E.x,E.y,Ee,Pe,W.image),G===0&&J.generateMipmaps&&H.generateMipmap(3553),se.unbindTexture()},this.copyTextureToTexture3D=function(E,W,J,G,ee=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=E.max.x-E.min.x+1,Ee=E.max.y-E.min.y+1,Pe=E.max.z-E.min.z+1,Ae=P.convert(G.format),ze=P.convert(G.type);let Re;if(G.isData3DTexture)ve.setTexture3D(G,0),Re=32879;else if(G.isDataArrayTexture)ve.setTexture2DArray(G,0),Re=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,G.flipY),H.pixelStorei(37441,G.premultiplyAlpha),H.pixelStorei(3317,G.unpackAlignment);const Oe=H.getParameter(3314),Je=H.getParameter(32878),Ii=H.getParameter(3316),_r=H.getParameter(3315),xr=H.getParameter(32877),vn=J.isCompressedTexture?J.mipmaps[0]:J.image;H.pixelStorei(3314,vn.width),H.pixelStorei(32878,vn.height),H.pixelStorei(3316,E.min.x),H.pixelStorei(3315,E.min.y),H.pixelStorei(32877,E.min.z),J.isDataTexture||J.isData3DTexture?H.texSubImage3D(Re,ee,W.x,W.y,W.z,be,Ee,Pe,Ae,ze,vn.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Re,ee,W.x,W.y,W.z,be,Ee,Pe,Ae,vn.data)):H.texSubImage3D(Re,ee,W.x,W.y,W.z,be,Ee,Pe,Ae,ze,vn),H.pixelStorei(3314,Oe),H.pixelStorei(32878,Je),H.pixelStorei(3316,Ii),H.pixelStorei(3315,_r),H.pixelStorei(32877,xr),ee===0&&G.generateMipmaps&&H.generateMipmap(Re),se.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?ve.setTextureCube(E,0):E.isData3DTexture?ve.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ve.setTexture2DArray(E,0):ve.setTexture2D(E,0),se.unbindTexture()},this.resetState=function(){g=0,M=0,y=null,se.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class $b extends Rd{}$b.prototype.isWebGL1Renderer=!0;class Zb extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class mt extends ni{constructor(e=1,t=8,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new V,u=new De;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const m=n+f/t*i;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Wt(a,3)),this.setAttribute("normal",new Wt(o,3)),this.setAttribute("uv",new Wt(l,2))}static fromJSON(e){return new mt(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class na extends ni{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new V,h=new V,m=[],_=[],p=[],d=[];for(let g=0;g<=n;g++){const M=[],y=g/n;let b=0;g==0&&a==0?b=.5/t:g==n&&l==Math.PI&&(b=-.5/t);for(let x=0;x<=t;x++){const T=x/t;f.x=-e*Math.cos(i+T*s)*Math.sin(a+y*o),f.y=e*Math.cos(a+y*o),f.z=e*Math.sin(i+T*s)*Math.sin(a+y*o),_.push(f.x,f.y,f.z),h.copy(f).normalize(),p.push(h.x,h.y,h.z),d.push(T+b,1-y),M.push(c++)}u.push(M)}for(let g=0;g<n;g++)for(let M=0;M<t;M++){const y=u[g][M+1],b=u[g][M],x=u[g+1][M],T=u[g+1][M+1];(g!==0||a>0)&&m.push(y,b,T),(g!==n-1||l<Math.PI)&&m.push(b,x,T)}this.setIndex(m),this.setAttribute("position",new Wt(_,3)),this.setAttribute("normal",new Wt(p,3)),this.setAttribute("uv",new Wt(d,2))}static fromJSON(e){return new na(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Sf={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Kb{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],_=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const hr=new Kb;class Id{constructor(e){this.manager=e!==void 0?e:hr,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Jb extends Id{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Sf.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Gs("img");function l(){u(),Sf.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Qb extends Id{constructor(e){super(e)}load(e,t,n,i){const s=new on,a=new Jb(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class eM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=wf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function wf(){return(typeof performance>"u"?Date:performance).now()}class tM{constructor(e,t,n=0,i=1/0){this.ray=new bd(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ec,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Vl(e,this,n,t),n.sort(Ef),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Vl(e[i],this,n,t);return n.sort(Ef),n}}function Ef(r,e){return r.distance-e.distance}function Vl(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)Vl(i[s],e,t,!0)}}class Tf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);const po=new Qb,Cc=po.load("/images/lobby/lobby-hr-20-02-23.jpg");Cc.mapping=ts;Cc.encoding=Be;const Lc=po.load("/images/library/library-hr-20-02-23.jpg");Lc.mapping=ts;Lc.encoding=Be;const Pc=po.load("/images/outside/outside-hr-20-02-23.jpg");Pc.mapping=ts;Pc.encoding=Be;const mo=po.load("/images/asterix.svg");mo.encoding=Be;const ii=new Zb,dr=new tn(70,window.innerWidth/window.innerHeight,.1,1e3);dr.position.set(0,0,1);const Hl=document.querySelector("#bg"),Li=new Rd({antialias:!0,alpha:!0,canvas:Hl});Li.setPixelRatio(window.devicePixelRatio);Li.setSize(window.innerWidth,window.innerHeight);Li.toneMapping=dd;Li.outputEncoding=Be;Li.render(ii,dr);const Pi=new Ls;ii.add(Pi);const za=new Ve(new na(3,32,32),new tt({side:Ct,map:Cc})),Ua=new Ve(new na(3,32,32),new tt({side:Ct,map:Lc})),ka=new Ve(new na(3,32,32),new tt({side:Ct,map:Pc})),Un=new Ve(new mt(.2,32),new tt({color:"blue"}));Un.rotation.y=Math.PI*-.65;Un.position.set(2.5,.74,1.22);Un.scale.set(0,0,0);const kn=new Ve(new mt(.2,32),new tt({color:"blue"}));kn.rotation.y=Math.PI*.19;kn.position.set(-1.99,-.39,-2.13);kn.scale.set(0,0,0);const Bn=new Ve(new mt(.1,32),new tt({map:mo}));Bn.position.set(2.84,.19,-.67);Bn.rotation.y=Math.PI*-.48;Bn.scale.set(0,0,0);const Gn=new Ve(new mt(.2,32),new tt({color:"red"}));Gn.rotation.y=Math.PI*-.6;Gn.position.set(2.8,-.24,.84);Gn.scale.set(0,0,0);const Vn=new Ve(new mt(.2,32),new tt({color:"red"}));Vn.rotation.y=Math.PI*-1;Vn.position.set(-.58,-.12,2.86);Vn.scale.set(0,0,0);const Hn=new Ve(new mt(.1,32),new tt({map:mo}));Hn.position.set(-2.89,.4,-.46);Hn.rotation.y=Math.PI*.4;Hn.scale.set(0,0,0);const Wn=new Ve(new mt(.2,32),new tt({color:"yellow"}));Wn.position.set(-2.53,.39,-1.3);Wn.rotation.y=Math.PI*.4;Wn.scale.set(0,0,0);const qn=new Ve(new mt(.2,32),new tt({color:"yellow"}));qn.position.set(-1.77,.64,-1.98);qn.rotation.y=Math.PI*.4;qn.scale.set(0,0,0);const Xn=new Ve(new mt(.1,32),new tt({map:mo}));Xn.position.set(2.31,.86,1.64);Xn.rotation.y=Math.PI*-.7;Xn.scale.set(0,0,0);const jn=new Ve(new mt(.1,20),new tt({transparent:!0,opacity:0}));jn.rotation.y=Math.PI*0;jn.position.set(-.33,-.52,-2.7);jn.scale.set(0,0,0);const Yn=new Ve(new mt(.1,20),new tt({transparent:!0,opacity:0}));Yn.rotation.y=Math.PI*-.5;Yn.position.set(2.78,-.78,-.08);Yn.scale.set(0,0,0);const $n=new Ve(new mt(.1,20),new tt({transparent:!0,opacity:0}));$n.rotation.y=Math.PI*.5;$n.position.set(-2.78,-.62,-.38);$n.scale.set(0,0,0);const Zn=new Ve(new mt(.1,20),new tt({transparent:!0,opacity:0}));Zn.rotation.y=Math.PI*.5;Zn.position.set(-2.36,-1.65,-.26);Zn.scale.set(0,0,0);const Kn=new Ve(new mt(.1,20),new tt({transparent:!0,opacity:0}));Kn.rotation.y=Math.PI*-.4;Kn.position.set(2.32,-1.11,-1.33);Kn.scale.set(0,0,0);const Jn=new Ve(new mt(.1,20),new tt({transparent:!0,opacity:0}));Jn.rotation.y=Math.PI*.9;Jn.position.set(-1.52,-1.42,2.05);Jn.scale.set(0,0,0);const Qn=new Ve(new mt(.1,20),new tt({transparent:!0,opacity:0}));Qn.rotation.y=Math.PI*.6;Qn.position.set(-2.61,.05,1.17);Qn.scale.set(0,0,0);const Af={type:"change"},sl={type:"start"},Cf={type:"end"};class nM extends mr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yr.ROTATE,MIDDLE:yr.DOLLY,RIGHT:yr.PAN},this.touches={ONE:br.ROTATE,TWO:br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",qe),this._domElementKeyEvents=P},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Af),n.update(),s=i.NONE},this.update=function(){const P=new V,k=new ur().setFromUnitVectors(e.up,new V(0,1,0)),de=k.clone().invert(),X=new V,te=new ur,ce=2*Math.PI;return function(){const ye=n.object.position;P.copy(ye).sub(n.target),P.applyQuaternion(k),o.setFromVector3(P),n.autoRotate&&s===i.NONE&&w(L()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Me=n.minAzimuthAngle,Le=n.maxAzimuthAngle;return isFinite(Me)&&isFinite(Le)&&(Me<-Math.PI?Me+=ce:Me>Math.PI&&(Me-=ce),Le<-Math.PI?Le+=ce:Le>Math.PI&&(Le-=ce),Me<=Le?o.theta=Math.max(Me,Math.min(Le,o.theta)):o.theta=o.theta>(Me+Le)/2?Math.max(Me,o.theta):Math.min(Le,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),P.setFromSpherical(o),P.applyQuaternion(de),ye.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||X.distanceToSquared(n.object.position)>a||8*(1-te.dot(n.object.quaternion))>a?(n.dispatchEvent(Af),X.copy(n.object.position),te.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",K),n.domElement.removeEventListener("pointerdown",He),n.domElement.removeEventListener("pointercancel",vt),n.domElement.removeEventListener("wheel",wt),n.domElement.removeEventListener("pointermove",Ne),n.domElement.removeEventListener("pointerup",We),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",qe)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new Tf,l=new Tf;let c=1;const u=new V;let f=!1;const h=new De,m=new De,_=new De,p=new De,d=new De,g=new De,M=new De,y=new De,b=new De,x=[],T={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function w(P){l.theta-=P}function F(P){l.phi-=P}const j=function(){const P=new V;return function(de,X){P.setFromMatrixColumn(X,0),P.multiplyScalar(-de),u.add(P)}}(),ie=function(){const P=new V;return function(de,X){n.screenSpacePanning===!0?P.setFromMatrixColumn(X,1):(P.setFromMatrixColumn(X,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(de),u.add(P)}}(),B=function(){const P=new V;return function(de,X){const te=n.domElement;if(n.object.isPerspectiveCamera){const ce=n.object.position;P.copy(ce).sub(n.target);let fe=P.length();fe*=Math.tan(n.object.fov/2*Math.PI/180),j(2*de*fe/te.clientHeight,n.object.matrix),ie(2*X*fe/te.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(j(de*(n.object.right-n.object.left)/n.object.zoom/te.clientWidth,n.object.matrix),ie(X*(n.object.top-n.object.bottom)/n.object.zoom/te.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function z(P){n.object.isPerspectiveCamera?c/=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*P)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(P){n.object.isPerspectiveCamera?c*=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/P)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(P){h.set(P.clientX,P.clientY)}function Z(P){M.set(P.clientX,P.clientY)}function O(P){p.set(P.clientX,P.clientY)}function D(P){m.set(P.clientX,P.clientY),_.subVectors(m,h).multiplyScalar(n.rotateSpeed);const k=n.domElement;w(2*Math.PI*_.x/k.clientHeight),F(2*Math.PI*_.y/k.clientHeight),h.copy(m),n.update()}function N(P){y.set(P.clientX,P.clientY),b.subVectors(y,M),b.y>0?z(v()):b.y<0&&q(v()),M.copy(y),n.update()}function C(P){d.set(P.clientX,P.clientY),g.subVectors(d,p).multiplyScalar(n.panSpeed),B(g.x,g.y),p.copy(d),n.update()}function R(P){P.deltaY<0?q(v()):P.deltaY>0&&z(v()),n.update()}function U(P){let k=!1;switch(P.code){case n.keys.UP:B(0,n.keyPanSpeed),k=!0;break;case n.keys.BOTTOM:B(0,-n.keyPanSpeed),k=!0;break;case n.keys.LEFT:B(n.keyPanSpeed,0),k=!0;break;case n.keys.RIGHT:B(-n.keyPanSpeed,0),k=!0;break}k&&(P.preventDefault(),n.update())}function Q(){if(x.length===1)h.set(x[0].pageX,x[0].pageY);else{const P=.5*(x[0].pageX+x[1].pageX),k=.5*(x[0].pageY+x[1].pageY);h.set(P,k)}}function ne(){if(x.length===1)p.set(x[0].pageX,x[0].pageY);else{const P=.5*(x[0].pageX+x[1].pageX),k=.5*(x[0].pageY+x[1].pageY);p.set(P,k)}}function H(){const P=x[0].pageX-x[1].pageX,k=x[0].pageY-x[1].pageY,de=Math.sqrt(P*P+k*k);M.set(0,de)}function ge(){n.enableZoom&&H(),n.enablePan&&ne()}function pe(){n.enableZoom&&H(),n.enableRotate&&Q()}function oe(P){if(x.length==1)m.set(P.pageX,P.pageY);else{const de=xe(P),X=.5*(P.pageX+de.x),te=.5*(P.pageY+de.y);m.set(X,te)}_.subVectors(m,h).multiplyScalar(n.rotateSpeed);const k=n.domElement;w(2*Math.PI*_.x/k.clientHeight),F(2*Math.PI*_.y/k.clientHeight),h.copy(m)}function se(P){if(x.length===1)d.set(P.pageX,P.pageY);else{const k=xe(P),de=.5*(P.pageX+k.x),X=.5*(P.pageY+k.y);d.set(de,X)}g.subVectors(d,p).multiplyScalar(n.panSpeed),B(g.x,g.y),p.copy(d)}function Te(P){const k=xe(P),de=P.pageX-k.x,X=P.pageY-k.y,te=Math.sqrt(de*de+X*X);y.set(0,te),b.set(0,Math.pow(y.y/M.y,n.zoomSpeed)),z(b.y),M.copy(y)}function Se(P){n.enableZoom&&Te(P),n.enablePan&&se(P)}function ve(P){n.enableZoom&&Te(P),n.enableRotate&&oe(P)}function He(P){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",Ne),n.domElement.addEventListener("pointerup",We)),ae(P),P.pointerType==="touch"?A(P):Ke(P))}function Ne(P){n.enabled!==!1&&(P.pointerType==="touch"?S(P):Fe(P))}function We(P){le(P),x.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",Ne),n.domElement.removeEventListener("pointerup",We)),n.dispatchEvent(Cf),s=i.NONE}function vt(P){le(P)}function Ke(P){let k;switch(P.button){case 0:k=n.mouseButtons.LEFT;break;case 1:k=n.mouseButtons.MIDDLE;break;case 2:k=n.mouseButtons.RIGHT;break;default:k=-1}switch(k){case yr.DOLLY:if(n.enableZoom===!1)return;Z(P),s=i.DOLLY;break;case yr.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;O(P),s=i.PAN}else{if(n.enableRotate===!1)return;Y(P),s=i.ROTATE}break;case yr.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;Y(P),s=i.ROTATE}else{if(n.enablePan===!1)return;O(P),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(sl)}function Fe(P){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;D(P);break;case i.DOLLY:if(n.enableZoom===!1)return;N(P);break;case i.PAN:if(n.enablePan===!1)return;C(P);break}}function wt(P){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(P.preventDefault(),n.dispatchEvent(sl),R(P),n.dispatchEvent(Cf))}function qe(P){n.enabled===!1||n.enablePan===!1||U(P)}function A(P){switch(me(P),x.length){case 1:switch(n.touches.ONE){case br.ROTATE:if(n.enableRotate===!1)return;Q(),s=i.TOUCH_ROTATE;break;case br.PAN:if(n.enablePan===!1)return;ne(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case br.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ge(),s=i.TOUCH_DOLLY_PAN;break;case br.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pe(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(sl)}function S(P){switch(me(P),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;oe(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;se(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Se(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ve(P),n.update();break;default:s=i.NONE}}function K(P){n.enabled!==!1&&P.preventDefault()}function ae(P){x.push(P)}function le(P){delete T[P.pointerId];for(let k=0;k<x.length;k++)if(x[k].pointerId==P.pointerId){x.splice(k,1);return}}function me(P){let k=T[P.pointerId];k===void 0&&(k=new De,T[P.pointerId]=k),k.set(P.pageX,P.pageY)}function xe(P){const k=P.pointerId===x[0].pointerId?x[1]:x[0];return T[k.pointerId]}n.domElement.addEventListener("contextmenu",K),n.domElement.addEventListener("pointerdown",He),n.domElement.addEventListener("pointercancel",vt),n.domElement.addEventListener("wheel",wt,{passive:!1}),this.update()}}const go=new nM(dr,Li.domElement);go.enableZoom=!1;go.enableDamping=!0;const iM=-1;go.rotateSpeed=iM;function In(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Od(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var qt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},rs={duration:.5,overwrite:!1,delay:0},Dc,It,st,rn=1e8,ke=1/rn,Wl=Math.PI*2,rM=Wl/4,sM=0,Fd=Math.sqrt,aM=Math.cos,oM=Math.sin,pt=function(e){return typeof e=="string"},Qe=function(e){return typeof e=="function"},ei=function(e){return typeof e=="number"},Rc=function(e){return typeof e>"u"},En=function(e){return typeof e=="object"},Ot=function(e){return e!==!1},Nd=function(){return typeof window<"u"},Aa=function(e){return Qe(e)||pt(e)},zd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},St=Array.isArray,ql=/(?:-?\.?\d|\.)+/gi,Ud=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Br=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,al=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kd=/[+-]=-?[.\d]+/,Bd=/[^,'"\[\]\s]+/gi,lM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ye,Qt,Xl,Ic,jt={},Ba={},Gd,Vd=function(e){return(Ba=pr(e,jt))&&Yt},Oc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ga=function(e,t){return!t&&console.warn(e)},Hd=function(e,t){return e&&(jt[e]=t)&&Ba&&(Ba[e]=t)||jt},Vs=function(){return 0},cM={suppressEvents:!0,isStart:!0,kill:!1},Da={suppressEvents:!0,kill:!1},uM={suppressEvents:!0},Fc={},vi=[],jl={},Wd,Gt={},ol={},Lf=30,Ra=[],Nc="",zc=function(e){var t=e[0],n,i;if(En(t)||Qe(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ra.length;i--&&!Ra[i].targetTest(t););n=Ra[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new hp(e[i],n)))||e.splice(i,1);return e},nr=function(e){return e._gsap||zc(sn(e))[0]._gsap},qd=function(e,t,n){return(n=e[t])&&Qe(n)?e[t]():Rc(n)&&e.getAttribute&&e.getAttribute(t)||n},Ft=function(e,t){return(e=e.split(",")).forEach(t)||e},et=function(e){return Math.round(e*1e5)/1e5||0},gt=function(e){return Math.round(e*1e7)/1e7||0},qr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},fM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Va=function(){var e=vi.length,t=vi.slice(0),n,i;for(jl={},vi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Xd=function(e,t,n,i){vi.length&&Va(),e.render(t,n,i||It&&t<0&&(e._initted||e._startAt)),vi.length&&Va()},jd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Bd).length<2?t:pt(e)?e.trim():e},Yd=function(e){return e},ln=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},hM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},pr=function(e,t){for(var n in t)e[n]=t[n];return e},Pf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=En(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Ha=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Fs=function(e){var t=e.parent||Ye,n=e.keyframes?hM(St(e.keyframes)):ln;if(Ot(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},dM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},$d=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},_o=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Si=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},ir=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},pM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Yl=function(e,t,n,i){return e._startAt&&(It?e._startAt.revert(Da):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},mM=function r(e){return!e||e._ts&&r(e.parent)},Df=function(e){return e._repeat?ss(e._tTime,e=e.duration()+e._rDelay)*e:0},ss=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Wa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},xo=function(e){return e._end=gt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ke)||0))},vo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=gt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),xo(e),n._dirty||ir(n,e)),e},Zd=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Wa(e.rawTime(),t),(!t._dur||ia(0,t.totalDuration(),n)-t._tTime>ke)&&t.render(n,!0)),ir(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ke}},Mn=function(e,t,n,i){return t.parent&&Si(t),t._start=gt((ei(n)?n:n||e!==Ye?Jt(e,n,t):e._time)+t._delay),t._end=gt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),$d(e,t,"_first","_last",e._sort?"_start":0),$l(t)||(e._recent=t),i||Zd(e,t),e._ts<0&&vo(e,e._tTime),e},Kd=function(e,t){return(jt.ScrollTrigger||Oc("scrollTrigger",t))&&jt.ScrollTrigger.create(t,e)},Jd=function(e,t,n,i,s){if(kc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!It&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Wd!==Vt.frame)return vi.push(e),e._lazy=[s,i],1},gM=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},$l=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},_M=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&gM(e)&&!(!e._initted&&$l(e))||(e._ts<0||e._dp._ts<0)&&!$l(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=ia(0,e._tDur,t),u=ss(l,o),e._yoyo&&u&1&&(a=1-a),u!==ss(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||It||i||e._zTime===ke||!t&&e._zTime){if(!e._initted&&Jd(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?ke:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Yl(e,t,n,!0),e._onUpdate&&!n&&an(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&an(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Si(e,1),!n&&!It&&(an(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},xM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},as=function(e,t,n,i){var s=e._repeat,a=gt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:gt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&vo(e,e._tTime=e._tDur*o),e.parent&&xo(e),n||ir(e.parent,e),e},Rf=function(e){return e instanceof Rt?ir(e):as(e,e._dur)},vM={_start:0,endTime:Vs,totalDuration:Vs},Jt=function r(e,t,n){var i=e.labels,s=e._recent||vM,a=e.duration()>=rn?s.endTime(!1):e._dur,o,l,c;return pt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(St(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ns=function(e,t,n){var i=ei(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ot(l.vars.inherit)&&l.parent;a.immediateRender=Ot(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new lt(t[0],a,t[s+1])},Di=function(e,t){return e||e===0?t(e):t},ia=function(e,t,n){return n<e?e:n>t?t:n},Mt=function(e,t){return!pt(e)||!(t=lM.exec(e))?"":t[1]},yM=function(e,t,n){return Di(n,function(i){return ia(e,t,i)})},Zl=[].slice,Qd=function(e,t){return e&&En(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&En(e[0]))&&!e.nodeType&&e!==Qt},bM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return pt(i)&&!t||Qd(i,1)?(s=n).push.apply(s,sn(i)):n.push(i)})||n},sn=function(e,t,n){return st&&!t&&st.selector?st.selector(e):pt(e)&&!n&&(Xl||!os())?Zl.call((t||Ic).querySelectorAll(e),0):St(e)?bM(e,n):Qd(e)?Zl.call(e,0):e?[e]:[]},Kl=function(e){return e=sn(e)[0]||Ga("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return sn(t,n.querySelectorAll?n:n===e?Ga("Invalid scope")||Ic.createElement("div"):e)}},ep=function(e){return e.sort(function(){return .5-Math.random()})},tp=function(e){if(Qe(e))return e;var t=En(e)?e:{each:e},n=rr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,f=i;return pt(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(h,m,_){var p=(_||t).length,d=a[p],g,M,y,b,x,T,L,v,w;if(!d){if(w=t.grid==="auto"?0:(t.grid||[1,rn])[1],!w){for(L=-rn;L<(L=_[w++].getBoundingClientRect().left)&&w<p;);w--}for(d=a[p]=[],g=l?Math.min(w,p)*u-.5:i%w,M=w===rn?0:l?p*f/w-.5:i/w|0,L=0,v=rn,T=0;T<p;T++)y=T%w-g,b=M-(T/w|0),d[T]=x=c?Math.abs(c==="y"?b:y):Fd(y*y+b*b),x>L&&(L=x),x<v&&(v=x);i==="random"&&ep(d),d.max=L-v,d.min=v,d.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(w>p?p-1:c?c==="y"?p/w:w:Math.max(w,p/w))||0)*(i==="edges"?-1:1),d.b=p<0?s-p:s,d.u=Mt(t.amount||t.each)||0,n=n&&p<0?cp(n):n}return p=(d[h]-d.min)/d.max||0,gt(d.b+(n?n(p):p)*d.v)+d.u}},Jl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=gt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ei(n)?0:Mt(n))}},np=function(e,t){var n=St(e),i,s;return!n&&En(e)&&(i=n=e.radius||rn,e.values?(e=sn(e.values),(s=!ei(e[0]))&&(i*=i)):e=Jl(e.increment)),Di(t,n?Qe(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=rn,u=0,f=e.length,h,m;f--;)s?(h=e[f].x-o,m=e[f].y-l,h=h*h+m*m):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:a,s||u===a||ei(a)?u:u+Mt(a)}:Jl(e))},ip=function(e,t,n,i){return Di(St(e)?!t:n===!0?!!(n=0):!i,function(){return St(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},MM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},SM=function(e,t){return function(n){return e(parseFloat(n))+(t||Mt(n))}},wM=function(e,t,n){return sp(e,t,0,1,n)},rp=function(e,t,n){return Di(n,function(i){return e[~~t(i)]})},EM=function r(e,t,n){var i=t-e;return St(e)?rp(e,r(0,e.length),t):Di(n,function(s){return(i+(s-e)%i)%i+e})},TM=function r(e,t,n){var i=t-e,s=i*2;return St(e)?rp(e,r(0,e.length-1),t):Di(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Hs=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?Bd:ql),n+=e.substr(t,i-t)+ip(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},sp=function(e,t,n,i,s){var a=t-e,o=i-n;return Di(s,function(l){return n+((l-e)/a*o||0)})},AM=function r(e,t,n,i){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var a=pt(e),o={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(St(e)&&!St(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(_){_*=f;var p=Math.min(h,~~_);return u[p](_-p)},n=t}else i||(e=pr(St(e)?[]:{},e));if(!u){for(l in t)Uc.call(o,e,l,"get",t[l]);s=function(_){return Vc(_,o)||(a?e.p:e)}}}return Di(n,s)},If=function(e,t,n){var i=e.labels,s=rn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},an=function(e,t,n){var i=e.vars,s=i[t],a=st,o=e._ctx,l,c,u;if(!!s)return l=i[t+"Params"],c=i.callbackScope||e,n&&vi.length&&Va(),o&&(st=o),u=l?s.apply(c,l):s.call(c),st=a,u},Ps=function(e){return Si(e),e.scrollTrigger&&e.scrollTrigger.kill(!!It),e.progress()<1&&an(e,"onInterrupt"),e},Gr,CM=function(e){e=!e.name&&e.default||e;var t=e.name,n=Qe(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Vs,render:Vc,add:Uc,kill:WM,modifier:HM,rawVars:0},a={targetTest:0,get:0,getSetter:Gc,aliases:{},register:0};if(os(),e!==i){if(Gt[t])return;ln(i,ln(Ha(e,s),a)),pr(i.prototype,pr(s,Ha(e,a))),Gt[i.prop=t]=i,e.targetTest&&(Ra.push(i),Fc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Hd(t,i),e.register&&e.register(Yt,i,Nt)},Ge=255,Ds={aqua:[0,Ge,Ge],lime:[0,Ge,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ge],navy:[0,0,128],white:[Ge,Ge,Ge],olive:[128,128,0],yellow:[Ge,Ge,0],orange:[Ge,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ge,0,0],pink:[Ge,192,203],cyan:[0,Ge,Ge],transparent:[Ge,Ge,Ge,0]},ll=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ge+.5|0},ap=function(e,t,n){var i=e?ei(e)?[e>>16,e>>8&Ge,e&Ge]:0:Ds.black,s,a,o,l,c,u,f,h,m,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ds[e])i=Ds[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ge,i&Ge,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ge,e&Ge]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(ql),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=ll(l+1/3,s,a),i[1]=ll(l,s,a),i[2]=ll(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Ud),n&&i.length<4&&(i[3]=1),i}else i=e.match(ql)||Ds.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/Ge,a=i[1]/Ge,o=i[2]/Ge,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(m=f-h,c=u>.5?m/(2-f-h):m/(f+h),l=f===s?(a-o)/m+(a<o?6:0):f===a?(o-s)/m+2:(s-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},op=function(e){var t=[],n=[],i=-1;return e.split(yi).forEach(function(s){var a=s.match(Br)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Of=function(e,t,n){var i="",s=(e+i).match(yi),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=ap(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=op(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(yi,"1").split(Br),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(yi),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},yi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ds)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),LM=/hsl[a]?\(/,lp=function(e){var t=e.join(" "),n;if(yi.lastIndex=0,yi.test(t))return n=LM.test(t),e[1]=Of(e[1],n),e[0]=Of(e[0],n,op(e[1])),!0},Ws,Vt=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,f,h,m,_=function p(d){var g=r()-i,M=d===!0,y,b,x,T;if(g>e&&(n+=g-t),i+=g,x=i-n,y=x-a,(y>0||M)&&(T=++f.frame,h=x-f.time*1e3,f.time=x=x/1e3,a+=y+(y>=s?4:s-y),b=1),M||(l=c(p)),b)for(m=0;m<o.length;m++)o[m](x,h,T,d)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(d){return h/(1e3/(d||60))},wake:function(){Gd&&(!Xl&&Nd()&&(Qt=Xl=window,Ic=Qt.document||{},jt.gsap=Yt,(Qt.gsapVersions||(Qt.gsapVersions=[])).push(Yt.version),Vd(Ba||Qt.GreenSockGlobals||!Qt.gsap&&Qt||{}),u=Qt.requestAnimationFrame),l&&f.sleep(),c=u||function(d){return setTimeout(d,a-f.time*1e3+1|0)},Ws=1,_(2))},sleep:function(){(u?Qt.cancelAnimationFrame:clearTimeout)(l),Ws=0,c=Vs},lagSmoothing:function(d,g){e=d||1/ke,t=Math.min(g,e,0)},fps:function(d){s=1e3/(d||240),a=f.time*1e3+s},add:function(d,g,M){var y=g?function(b,x,T,L){d(b,x,T,L),f.remove(y)}:d;return f.remove(d),o[M?"unshift":"push"](y),os(),y},remove:function(d,g){~(g=o.indexOf(d))&&o.splice(g,1)&&m>=g&&m--},_listeners:o},f}(),os=function(){return!Ws&&Vt.wake()},Ie={},PM=/^[\d.\-M][\d.\-,\s]/,DM=/["']/g,RM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(DM,"").trim():+c,i=l.substr(o+1).trim();return t},IM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},OM=function(e){var t=(e+"").split("("),n=Ie[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[RM(t[1])]:IM(e).split(",").map(jd)):Ie._CE&&PM.test(e)?Ie._CE("",e):n},cp=function(e){return function(t){return 1-e(1-t)}},up=function r(e,t){for(var n=e._first,i;n;)n instanceof Rt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},rr=function(e,t){return e&&(Qe(e)?e:Ie[e]||OM(e))||t},gr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Ft(e,function(o){Ie[o]=jt[o]=s,Ie[a=o.toLowerCase()]=n;for(var l in s)Ie[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ie[o+"."+l]=s[l]}),s},fp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},cl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Wl*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*oM((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:fp(o);return s=Wl/s,l.config=function(c,u){return r(e,c,u)},l},ul=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:fp(n);return i.config=function(s){return r(e,s)},i};Ft("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;gr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ie.Linear.easeNone=Ie.none=Ie.Linear.easeIn;gr("Elastic",cl("in"),cl("out"),cl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};gr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);gr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});gr("Circ",function(r){return-(Fd(1-r*r)-1)});gr("Sine",function(r){return r===1?1:-aM(r*rM)+1});gr("Back",ul("in"),ul("out"),ul());Ie.SteppedEase=Ie.steps=jt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-ke;return function(o){return((i*ia(0,a,o)|0)+s)*n}}};rs.ease=Ie["quad.out"];Ft("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Nc+=r+","+r+"Params,"});var hp=function(e,t){this.id=sM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:qd,this.set=t?t.getSetter:Gc},ls=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,as(this,+t.duration,1,1),this.data=t.data,st&&(this._ctx=st,st.data.push(this)),Ws||Vt.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,as(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(os(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(vo(this,n),!s._dp||s.parent||Zd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Mn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ke||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Xd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Df(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Df(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ss(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-ke?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Wa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ke?0:this._rts,this.totalTime(ia(-this._delay,this._tDur,i),!0),xo(this),pM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(os(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ke&&(this._tTime-=ke)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Mn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ot(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wa(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=uM);var i=It;return It=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),It=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this.vars.immediateRender?-1:s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Rf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Rf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Jt(this,n),Ot(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ot(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ke:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ke,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ke)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=Qe(n)?n:Yd,o=function(){var c=i.then;i.then=null,Qe(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Ps(this)},r}();ln(ls.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ke,_prom:0,_ps:!1,_rts:1});var Rt=function(r){Od(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ot(n.sortChildren),Ye&&Mn(n.parent||Ye,In(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Kd(In(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Ns(0,arguments,this),this},t.from=function(i,s,a){return Ns(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Ns(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Fs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new lt(i,s,Jt(this,a),1),this},t.call=function(i,s,a){return Mn(this,lt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new lt(i,a,Jt(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Fs(a).immediateRender=Ot(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,f){return o.startAt=a,Fs(o).immediateRender=Ot(o.immediateRender),this.staggerTo(i,s,o,l,c,u,f)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:gt(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,m,_,p,d,g,M,y,b,x,T,L;if(this!==Ye&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,b=this._start,y=this._ts,g=!y,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,d=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(d*100+i,s,a);if(h=gt(u%d),u===l?(p=this._repeat,h=c):(p=~~(u/d),p&&p===u/d&&(h=c,p--),h>c&&(h=c)),x=ss(this._tTime,d),!o&&this._tTime&&x!==p&&(x=p),T&&p&1&&(h=c-h,L=1),p!==x&&!this._lock){var v=T&&x&1,w=v===(T&&p&1);if(p<x&&(v=!v),o=v?0:c,this._lock=1,this.render(o||(L?0:gt(p*d)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&an(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;up(this,L)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=xM(this,gt(o),gt(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&!s&&(an(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(m=this._first;m;){if(_=m._next,(m._act||h>=m._start)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,s,a),h!==this._time||!this._ts&&!g){M=0,_&&(u+=this._zTime=-ke);break}}m=_}else{m=this._last;for(var F=i<0?i:h;m;){if(_=m._prev,(m._act||F<=m._end)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(F-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(F-m._start)*m._ts,s,a||It&&(m._initted||m._startAt)),h!==this._time||!this._ts&&!g){M=0,_&&(u+=this._zTime=F?-ke:ke);break}}m=_}}if(M&&!s&&(this.pause(),M.render(h>=o?0:-ke)._zTime=h>=o?1:-1,this._ts))return this._start=b,xo(this),this.render(i,s,a);this._onUpdate&&!s&&an(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(b===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Si(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(an(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(ei(s)||(s=Jt(this,s,i)),!(i instanceof ls)){if(St(i))return i.forEach(function(o){return a.add(o,s)}),this;if(pt(i))return this.addLabel(i,s);if(Qe(i))i=lt.delayedCall(0,i);else return this}return this!==i?Mn(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-rn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof lt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return pt(i)?this.removeLabel(i):Qe(i)?this.killTweensOf(i):(_o(this,i),i===this._recent&&(this._recent=this._last),ir(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=gt(Vt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Jt(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=lt.delayedCall(0,s||Vs,a);return o.data="isPause",this._hasPause=1,Mn(this,o,Jt(this,i))},t.removePause=function(i){var s=this._first;for(i=Jt(this,i);s;)s._start===i&&s.data==="isPause"&&Si(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)mi!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=sn(i),l=this._first,c=ei(s),u;l;)l instanceof lt?fM(l._targets,o)&&(c?(!mi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Jt(a,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,m,_=lt.to(a,ln({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ke,onStart:function(){if(a.pause(),!m){var d=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==d&&as(_,d,0,1).render(_._time,!0,!0),m=1}u&&u.apply(_,f||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ln({startAt:{time:Jt(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),If(this,Jt(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),If(this,Jt(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ke)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return ir(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ir(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=rn,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Mn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;as(a,a===Ye&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Ye._ts&&(Xd(Ye,Wa(i,Ye)),Wd=Vt.frame),Vt.frame>=Lf){Lf+=qt.autoSleep||120;var s=Ye._first;if((!s||!s._ts)&&qt.autoSleep&&Vt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Vt.sleep()}}},e}(ls);ln(Rt.prototype,{_lock:0,_hasPause:0,_forcing:0});var FM=function(e,t,n,i,s,a,o){var l=new Nt(this._pt,e,t,0,1,xp,null,s),c=0,u=0,f,h,m,_,p,d,g,M;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Hs(i)),a&&(M=[n,i],a(M,e,t),n=M[0],i=M[1]),h=n.match(al)||[];f=al.exec(i);)_=f[0],p=i.substring(c,f.index),m?m=(m+1)%5:p.substr(-5)==="rgba("&&(m=1),_!==h[u++]&&(d=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:p||u===1?p:",",s:d,c:_.charAt(1)==="="?qr(d,_)-d:parseFloat(_)-d,m:m&&m<4?Math.round:0},c=al.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(kd.test(i)||g)&&(l.e=0),this._pt=l,l},Uc=function(e,t,n,i,s,a,o,l,c,u){Qe(i)&&(i=i(s||0,e,a));var f=e[t],h=n!=="get"?n:Qe(f)?c?e[t.indexOf("set")||!Qe(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,m=Qe(f)?c?BM:gp:Bc,_;if(pt(i)&&(~i.indexOf("random(")&&(i=Hs(i)),i.charAt(1)==="="&&(_=qr(h,i)+(Mt(h)||0),(_||_===0)&&(i=_))),!u||h!==i||Ql)return!isNaN(h*i)&&i!==""?(_=new Nt(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?VM:_p,0,m),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!f&&!(t in e)&&Oc(t,i),FM.call(this,e,t,h,i,m,l||qt.stringFilter,c))},NM=function(e,t,n,i,s){if(Qe(e)&&(e=zs(e,s,t,n,i)),!En(e)||e.style&&e.nodeType||St(e)||zd(e))return pt(e)?zs(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=zs(e[o],s,t,n,i);return a},dp=function(e,t,n,i,s,a){var o,l,c,u;if(Gt[e]&&(o=new Gt[e]).init(s,o.rawVars?t[e]:NM(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Nt(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Gr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},mi,Ql,kc=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,f=i.callbackScope,h=i.runBackwards,m=i.yoyoEase,_=i.keyframes,p=i.autoRevert,d=e._dur,g=e._startAt,M=e._targets,y=e.parent,b=y&&y.data==="nested"?y.vars.targets:M,x=e._overwrite==="auto"&&!Dc,T=e.timeline,L,v,w,F,j,ie,B,z,q,Y,Z,O,D;if(T&&(!_||!s)&&(s="none"),e._ease=rr(s,rs.ease),e._yEase=m?cp(rr(m===!0?s:m,rs.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!T&&!!i.runBackwards,!T||_&&!i.stagger){if(z=M[0]?nr(M[0]).harness:0,O=z&&i[z.prop],L=Ha(i,Fc),g&&(g._zTime<0&&g.progress(1),t<0&&h&&o&&!p?g.render(-1,!0):g.revert(h&&d?Da:cM),g._lazy=0),a){if(Si(e._startAt=lt.set(M,ln({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:Ot(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},a))),e._startAt._dp=0,t<0&&(It||!o&&!p)&&e._startAt.revert(Da),o&&d&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&d&&!g){if(t&&(o=!1),w=ln({overwrite:!1,data:"isFromStart",lazy:o&&Ot(l),immediateRender:o,stagger:0,parent:y},L),O&&(w[z.prop]=O),Si(e._startAt=lt.set(M,w)),e._startAt._dp=0,t<0&&(It?e._startAt.revert(Da):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,ke,ke);else if(!t)return}for(e._pt=e._ptCache=0,l=d&&Ot(l)||l&&!d,v=0;v<M.length;v++){if(j=M[v],B=j._gsap||zc(M)[v]._gsap,e._ptLookup[v]=Y={},jl[B.id]&&vi.length&&Va(),Z=b===M?v:b.indexOf(j),z&&(q=new z).init(j,O||L,e,Z,b)!==!1&&(e._pt=F=new Nt(e._pt,j,q.name,0,1,q.render,q,0,q.priority),q._props.forEach(function(N){Y[N]=F}),q.priority&&(ie=1)),!z||O)for(w in L)Gt[w]&&(q=dp(w,L,e,Z,j,b))?q.priority&&(ie=1):Y[w]=F=Uc.call(e,j,w,"get",L[w],Z,b,0,i.stringFilter);e._op&&e._op[v]&&e.kill(j,e._op[v]),x&&e._pt&&(mi=e,Ye.killTweensOf(j,Y,e.globalTime(t)),D=!e.parent,mi=0),e._pt&&l&&(jl[B.id]=1)}ie&&vp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!D,_&&t<=0&&T.render(rn,!0,!0)},zM=function(e,t,n,i,s,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,h;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Ql=1,e.vars[t]="+=0",kc(e,o),Ql=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=et(n)+Mt(u.e)),u.b&&(u.b=c.s+Mt(u.b))},UM=function(e,t){var n=e[0]?nr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=pr({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},kM=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(St(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},zs=function(e,t,n,i,s){return Qe(e)?e.call(t,n,i,s):pt(e)&&~e.indexOf("random(")?Hs(e):e},pp=Nc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",mp={};Ft(pp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return mp[r]=1});var lt=function(r){Od(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Fs(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,m=l.overwrite,_=l.keyframes,p=l.defaults,d=l.scrollTrigger,g=l.yoyoEase,M=i.parent||Ye,y=(St(n)||zd(n)?ei(n[0]):"length"in i)?[n]:sn(n),b,x,T,L,v,w,F,j;if(o._targets=y.length?zc(y):Ga("GSAP target "+n+" not found. https://greensock.com",!qt.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,_||h||Aa(c)||Aa(u)){if(i=o.vars,b=o.timeline=new Rt({data:"nested",defaults:p||{},targets:M&&M.data==="nested"?M.vars.targets:y}),b.kill(),b.parent=b._dp=In(o),b._start=0,h||Aa(c)||Aa(u)){if(L=y.length,F=h&&tp(h),En(h))for(v in h)~pp.indexOf(v)&&(j||(j={}),j[v]=h[v]);for(x=0;x<L;x++)T=Ha(i,mp),T.stagger=0,g&&(T.yoyoEase=g),j&&pr(T,j),w=y[x],T.duration=+zs(c,In(o),x,w,y),T.delay=(+zs(u,In(o),x,w,y)||0)-o._delay,!h&&L===1&&T.delay&&(o._delay=u=T.delay,o._start+=u,T.delay=0),b.to(w,T,F?F(x,w,y):0),b._ease=Ie.none;b.duration()?c=u=0:o.timeline=0}else if(_){Fs(ln(b.vars.defaults,{ease:"none"})),b._ease=rr(_.ease||i.ease||"none");var ie=0,B,z,q;if(St(_))_.forEach(function(Y){return b.to(y,Y,">")}),b.duration();else{T={};for(v in _)v==="ease"||v==="easeEach"||kM(v,_[v],T,_.easeEach);for(v in T)for(B=T[v].sort(function(Y,Z){return Y.t-Z.t}),ie=0,x=0;x<B.length;x++)z=B[x],q={ease:z.e,duration:(z.t-(x?B[x-1].t:0))/100*c},q[v]=z.v,b.to(y,q,ie),ie+=q.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return m===!0&&!Dc&&(mi=In(o),Ye.killTweensOf(y),mi=0),Mn(M,In(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!_&&o._start===gt(M._time)&&Ot(f)&&mM(In(o))&&M.data!=="nested")&&(o._tTime=-ke,o.render(Math.max(0,-u)||0)),d&&Kd(In(o),d),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-ke&&!u?l:i<ke?0:i,h,m,_,p,d,g,M,y,b;if(!c)_M(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,y=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(p*100+i,s,a);if(h=gt(f%p),f===l?(_=this._repeat,h=c):(_=~~(f/p),_&&_===f/p&&(h=c,_--),h>c&&(h=c)),g=this._yoyo&&_&1,g&&(b=this._yEase,h=c-h),d=ss(this._tTime,p),h===o&&!a&&this._initted)return this._tTime=f,this;_!==d&&(y&&this._yEase&&up(y,g),this.vars.repeatRefresh&&!g&&!this._lock&&(this._lock=a=1,this.render(gt(p*_),!0).invalidate()._lock=0))}if(!this._initted){if(Jd(this,u?i:h,a,s,f))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(b||this._ease)(h/c),this._from&&(this.ratio=M=1-M),h&&!o&&!s&&(an(this,"onStart"),this._tTime!==f))return this;for(m=this._pt;m;)m.r(M,m.d),m=m._next;y&&y.render(i<0?i:!h&&g?-ke:y._dur*y._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Yl(this,i,s,a),an(this,"onUpdate")),this._repeat&&_!==d&&this.vars.onRepeat&&!s&&this.parent&&an(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Yl(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Si(this,1),!s&&!(u&&!o)&&(f||o||g)&&(an(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o){Ws||Vt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||kc(this,l),c=this._ease(l/this._dur),zM(this,i,s,a,o,c,l)?this.resetTo(i,s,a,o):(vo(this,0),this.parent||$d(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ps(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,mi&&mi.vars.overwrite!==!0)._first||Ps(this),this.parent&&a!==this.timeline.totalDuration()&&as(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?sn(i):o,c=this._ptLookup,u=this._pt,f,h,m,_,p,d,g;if((!s||s==="all")&&dM(o,l))return s==="all"&&(this._pt=0),Ps(this);for(f=this._op=this._op||[],s!=="all"&&(pt(s)&&(p={},Ft(s,function(M){return p[M]=1}),s=p),s=UM(o,s)),g=o.length;g--;)if(~l.indexOf(o[g])){h=c[g],s==="all"?(f[g]=s,_=h,m={}):(m=f[g]=f[g]||{},_=s);for(p in _)d=h&&h[p],d&&((!("kill"in d.d)||d.d.kill(p)===!0)&&_o(this,d,"_pt"),delete h[p]),m!=="all"&&(m[p]=1)}return this._initted&&!this._pt&&u&&Ps(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ns(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Ns(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Ye.killTweensOf(i,s,a)},e}(ls);ln(lt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ft("staggerTo,staggerFrom,staggerFromTo",function(r){lt[r]=function(){var e=new Rt,t=Zl.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Bc=function(e,t,n){return e[t]=n},gp=function(e,t,n){return e[t](n)},BM=function(e,t,n,i){return e[t](i.fp,n)},GM=function(e,t,n){return e.setAttribute(t,n)},Gc=function(e,t){return Qe(e[t])?gp:Rc(e[t])&&e.setAttribute?GM:Bc},_p=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},VM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},xp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Vc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},HM=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},WM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?_o(this,t,"_pt"):t.dep||(n=1),t=i;return!n},qM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},vp=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Nt=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||_p,this.d=l||this,this.set=c||Bc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=qM,this.m=n,this.mt=s,this.tween=i},r}();Ft(Nc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Fc[r]=1});jt.TweenMax=jt.TweenLite=lt;jt.TimelineLite=jt.TimelineMax=Rt;Ye=new Rt({sortChildren:!1,defaults:rs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});qt.stringFilter=lp;var cs=[],Ia={},XM=[],Ff=0,fl=function(e){return(Ia[e]||XM).map(function(t){return t()})},ec=function(){var e=Date.now(),t=[];e-Ff>2&&(fl("matchMediaInit"),cs.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Qt.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),fl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Ff=e,fl("matchMedia"))},yp=function(){function r(t,n){this.selector=n&&Kl(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Qe(n)&&(s=i,i=n,n=Qe);var a=this,o=function(){var c=st,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=Kl(s)),st=a,f=i.apply(a,arguments),Qe(f)&&a._r.push(f),st=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Qe?o(a):n?a[n]=o:o},e.ignore=function(n){var i=st;st=null,n(this),st=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof lt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof ls)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=cs.indexOf(this);~o&&cs.splice(o,1)}},e.revert=function(n){this.kill(n||{})},r}(),jM=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){En(n)||(n={matches:n});var a=new yp(0,s||this.scope),o=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Qt.matchMedia(n[c]),l&&(cs.indexOf(a)<0&&cs.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(ec):l.addEventListener("change",ec)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),qa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return CM(i)})},timeline:function(e){return new Rt(e)},getTweensOf:function(e,t){return Ye.getTweensOf(e,t)},getProperty:function(e,t,n,i){pt(e)&&(e=sn(e)[0]);var s=nr(e||{}).get,a=n?Yd:jd;return n==="native"&&(n=""),e&&(t?a((Gt[t]&&Gt[t].get||s)(e,t,n,i)):function(o,l,c){return a((Gt[o]&&Gt[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=sn(e),e.length>1){var i=e.map(function(u){return Yt.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var a=Gt[t],o=nr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;Gr._pt=0,f.init(e,n?u+n:u,Gr,0,[e]),f.render(1,f),Gr._pt&&Vc(1,Gr)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Yt.to(e,pr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Ye.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=rr(e.ease,rs.ease)),Pf(rs,e||{})},config:function(e){return Pf(qt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Gt[o]&&!jt[o]&&Ga(t+" effect requires "+o+" plugin.")}),ol[t]=function(o,l,c){return n(sn(o),ln(l||{},s),c)},a&&(Rt.prototype[t]=function(o,l,c){return this.add(ol[t](o,En(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ie[e]=rr(t)},parseEase:function(e,t){return arguments.length?rr(e,t):Ie},getById:function(e){return Ye.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Rt(e),i,s;for(n.smoothChildTiming=Ot(e.smoothChildTiming),Ye.remove(n),n._dp=0,n._time=n._tTime=Ye._time,i=Ye._first;i;)s=i._next,(t||!(!i._dur&&i instanceof lt&&i.vars.onComplete===i._targets[0]))&&Mn(n,i,i._start-i._delay),i=s;return Mn(Ye,n,0),n},context:function(e,t){return e?new yp(e,t):st},matchMedia:function(e){return new jM(e)},matchMediaRefresh:function(){return cs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||ec()},addEventListener:function(e,t){var n=Ia[e]||(Ia[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ia[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:EM,wrapYoyo:TM,distribute:tp,random:ip,snap:np,normalize:wM,getUnit:Mt,clamp:yM,splitColor:ap,toArray:sn,selector:Kl,mapRange:sp,pipe:MM,unitize:SM,interpolate:AM,shuffle:ep},install:Vd,effects:ol,ticker:Vt,updateRoot:Rt.updateRoot,plugins:Gt,globalTimeline:Ye,core:{PropTween:Nt,globals:Hd,Tween:lt,Timeline:Rt,Animation:ls,getCache:nr,_removeLinkedListItem:_o,reverting:function(){return It},context:function(e){return e&&st&&(st.data.push(e),e._ctx=st),st},suppressOverwrites:function(e){return Dc=e}}};Ft("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return qa[r]=lt[r]});Vt.add(Rt.updateRoot);Gr=qa.to({},{duration:0});var YM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},$M=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=YM(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},hl=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(pt(s)&&(l={},Ft(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}$M(o,s)}}}},Yt=qa.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)It?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},hl("roundProps",Jl),hl("modifiers"),hl("snap",np))||qa;lt.version=Rt.version=Yt.version="3.11.3";Gd=1;Nd()&&os();Ie.Power0;Ie.Power1;Ie.Power2;Ie.Power3;Ie.Power4;Ie.Linear;Ie.Quad;Ie.Cubic;Ie.Quart;Ie.Quint;Ie.Strong;Ie.Elastic;Ie.Back;Ie.SteppedEase;Ie.Bounce;Ie.Sine;Ie.Expo;Ie.Circ;/*!
 * CSSPlugin 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Nf,gi,Xr,Hc,Zi,zf,Wc,ZM=function(){return typeof window<"u"},ti={},qi=180/Math.PI,jr=Math.PI/180,Nr=Math.atan2,Uf=1e8,qc=/([A-Z])/g,KM=/(left|right|width|margin|padding|x)/i,JM=/[\s,\(]\S/,Nn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},tc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},QM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},eS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},tS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},bp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Mp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},nS=function(e,t,n){return e.style[t]=n},iS=function(e,t,n){return e.style.setProperty(t,n)},rS=function(e,t,n){return e._gsap[t]=n},sS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},aS=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},oS=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Ze="transform",gn=Ze+"Origin",lS=function(e,t){var n=this,i=this.target,s=i.style;if(e in ti){if(this.tfm=this.tfm||{},e!=="transform"&&(e=Nn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=On(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:On(i,e)),this.props.indexOf(Ze)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(gn,t,"")),e=Ze}(s||t)&&this.props.push(e,t,s[e])},Sp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},cS=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].replace(qc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Wc(),s&&!s.isStart&&!n[Ze]&&(Sp(n),i.uncache=1)}},wp=function(e,t){var n={target:e,props:[],revert:cS,save:lS};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},Ep,nc=function(e,t){var n=gi.createElementNS?gi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):gi.createElement(e);return n.style?n:gi.createElement(e)},wn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(qc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,us(t)||t,1)||""},kf="O,Moz,ms,Ms,Webkit".split(","),us=function(e,t,n){var i=t||Zi,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(kf[a]+e in s););return a<0?null:(a===3?"ms":a>=0?kf[a]:"")+e},ic=function(){ZM()&&window.document&&(Nf=window,gi=Nf.document,Xr=gi.documentElement,Zi=nc("div")||{style:{}},nc("div"),Ze=us(Ze),gn=Ze+"Origin",Zi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ep=!!us("perspective"),Wc=Yt.core.reverting,Hc=1)},dl=function r(e){var t=nc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(Xr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Xr.removeChild(t),this.style.cssText=s,a},Bf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Tp=function(e){var t;try{t=e.getBBox()}catch{t=dl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===dl||(t=dl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Bf(e,["x","cx","x1"])||0,y:+Bf(e,["y","cy","y1"])||0,width:0,height:0}:t},Ap=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Tp(e))},qs=function(e,t){if(t){var n=e.style;t in ti&&t!==gn&&(t=Ze),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(qc,"-$1").toLowerCase())):n.removeAttribute(t)}},_i=function(e,t,n,i,s,a){var o=new Nt(e._pt,t,n,0,1,a?Mp:bp);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Gf={deg:1,rad:1,turn:1},uS={grid:1,flex:1},wi=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Zi.style,l=KM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",m=i==="%",_,p,d,g;return i===a||!s||Gf[i]||Gf[a]?s:(a!=="px"&&!h&&(s=r(e,t,n,"px")),g=e.getCTM&&Ap(e),(m||a==="%")&&(ti[t]||~t.indexOf("adius"))?(_=g?e.getBBox()[l?"width":"height"]:e[u],et(m?s/_*f:s/100*_)):(o[l?"width":"height"]=f+(h?a:i),p=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===gi||!p.appendChild)&&(p=gi.body),d=p._gsap,d&&m&&d.width&&l&&d.time===Vt.time&&!d.uncache?et(s/d.width*f):((m||a==="%")&&!uS[wn(p,"display")]&&(o.position=wn(e,"position")),p===e&&(o.position="static"),p.appendChild(Zi),_=Zi[u],p.removeChild(Zi),o.position="absolute",l&&m&&(d=nr(p),d.time=Vt.time,d.width=p[u]),et(h?_*s/f:_&&s?f/_*s:0))))},On=function(e,t,n,i){var s;return Hc||ic(),t in Nn&&t!=="transform"&&(t=Nn[t],~t.indexOf(",")&&(t=t.split(",")[0])),ti[t]&&t!=="transform"?(s=js(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ja(wn(e,gn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Xa[t]&&Xa[t](e,t,n)||wn(e,t)||qd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?wi(e,t,s,n)+n:s},fS=function(e,t,n,i){if(!n||n==="none"){var s=us(t,e,1),a=s&&wn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=wn(e,"borderTopColor"))}var o=new Nt(this._pt,e.style,t,0,1,xp),l=0,c=0,u,f,h,m,_,p,d,g,M,y,b,x;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=wn(e,t)||i,e.style[t]=n),u=[n,i],lp(u),n=u[0],i=u[1],h=n.match(Br)||[],x=i.match(Br)||[],x.length){for(;f=Br.exec(i);)d=f[0],M=i.substring(l,f.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),d!==(p=h[c++]||"")&&(m=parseFloat(p)||0,b=p.substr((m+"").length),d.charAt(1)==="="&&(d=qr(m,d)+b),g=parseFloat(d),y=d.substr((g+"").length),l=Br.lastIndex-y.length,y||(y=y||qt.units[t]||b,l===i.length&&(i+=y,o.e+=y)),b!==y&&(m=wi(e,t,p,y)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:m,c:g-m,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Mp:bp;return kd.test(i)&&(o.e=0),this._pt=o,o},Vf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},hS=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Vf[n]||n,t[1]=Vf[i]||i,t.join(" ")},dS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ti[o]&&(l=1,o=o==="transformOrigin"?gn:Ze),qs(n,o);l&&(qs(n,Ze),a&&(a.svg&&n.removeAttribute("transform"),js(n,1),a.uncache=1,Sp(i)))}},Xa={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Nt(e._pt,t,n,0,0,dS);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Xs=[1,0,0,1,0,0],Cp={},Lp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Hf=function(e){var t=wn(e,Ze);return Lp(t)?Xs:t.substr(7).match(Ud).map(et)},Xc=function(e,t){var n=e._gsap||nr(e),i=e.style,s=Hf(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Xs:s):(s===Xs&&!e.offsetParent&&e!==Xr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Xr.appendChild(e)),s=Hf(e),l?i.display=l:qs(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Xr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},rc=function(e,t,n,i,s,a){var o=e._gsap,l=s||Xc(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,m=l[0],_=l[1],p=l[2],d=l[3],g=l[4],M=l[5],y=t.split(" "),b=parseFloat(y[0])||0,x=parseFloat(y[1])||0,T,L,v,w;n?l!==Xs&&(L=m*d-_*p)&&(v=b*(d/L)+x*(-p/L)+(p*M-d*g)/L,w=b*(-_/L)+x*(m/L)-(m*M-_*g)/L,b=v,x=w):(T=Tp(e),b=T.x+(~y[0].indexOf("%")?b/100*T.width:b),x=T.y+(~(y[1]||y[0]).indexOf("%")?x/100*T.height:x)),i||i!==!1&&o.smooth?(g=b-c,M=x-u,o.xOffset=f+(g*m+M*p)-g,o.yOffset=h+(g*_+M*d)-M):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=x,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[gn]="0px 0px",a&&(_i(a,o,"xOrigin",c,b),_i(a,o,"yOrigin",u,x),_i(a,o,"xOffset",f,o.xOffset),_i(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+x)},js=function(e,t){var n=e._gsap||new hp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=wn(e,gn)||"0",u,f,h,m,_,p,d,g,M,y,b,x,T,L,v,w,F,j,ie,B,z,q,Y,Z,O,D,N,C,R,U,Q,ne;return u=f=h=p=d=g=M=y=b=0,m=_=1,n.svg=!!(e.getCTM&&Ap(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ze]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ze]!=="none"?l[Ze]:"")),i.scale=i.rotate=i.translate="none"),L=Xc(e,n.svg),n.svg&&(n.uncache?(O=e.getBBox(),c=n.xOrigin-O.x+"px "+(n.yOrigin-O.y)+"px",Z=""):Z=!t&&e.getAttribute("data-svg-origin"),rc(e,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,L)),x=n.xOrigin||0,T=n.yOrigin||0,L!==Xs&&(j=L[0],ie=L[1],B=L[2],z=L[3],u=q=L[4],f=Y=L[5],L.length===6?(m=Math.sqrt(j*j+ie*ie),_=Math.sqrt(z*z+B*B),p=j||ie?Nr(ie,j)*qi:0,M=B||z?Nr(B,z)*qi+p:0,M&&(_*=Math.abs(Math.cos(M*jr))),n.svg&&(u-=x-(x*j+T*B),f-=T-(x*ie+T*z))):(ne=L[6],U=L[7],N=L[8],C=L[9],R=L[10],Q=L[11],u=L[12],f=L[13],h=L[14],v=Nr(ne,R),d=v*qi,v&&(w=Math.cos(-v),F=Math.sin(-v),Z=q*w+N*F,O=Y*w+C*F,D=ne*w+R*F,N=q*-F+N*w,C=Y*-F+C*w,R=ne*-F+R*w,Q=U*-F+Q*w,q=Z,Y=O,ne=D),v=Nr(-B,R),g=v*qi,v&&(w=Math.cos(-v),F=Math.sin(-v),Z=j*w-N*F,O=ie*w-C*F,D=B*w-R*F,Q=z*F+Q*w,j=Z,ie=O,B=D),v=Nr(ie,j),p=v*qi,v&&(w=Math.cos(v),F=Math.sin(v),Z=j*w+ie*F,O=q*w+Y*F,ie=ie*w-j*F,Y=Y*w-q*F,j=Z,q=O),d&&Math.abs(d)+Math.abs(p)>359.9&&(d=p=0,g=180-g),m=et(Math.sqrt(j*j+ie*ie+B*B)),_=et(Math.sqrt(Y*Y+ne*ne)),v=Nr(q,Y),M=Math.abs(v)>2e-4?v*qi:0,b=Q?1/(Q<0?-Q:Q):0),n.svg&&(Z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Lp(wn(e,Ze)),Z&&e.setAttribute("transform",Z))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(m*=-1,M+=p<=0?180:-180,p+=p<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=et(m),n.scaleY=et(_),n.rotation=et(p)+o,n.rotationX=et(d)+o,n.rotationY=et(g)+o,n.skewX=M+o,n.skewY=y+o,n.transformPerspective=b+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[gn]=ja(c)),n.xOffset=n.yOffset=0,n.force3D=qt.force3D,n.renderTransform=n.svg?mS:Ep?Pp:pS,n.uncache=0,n},ja=function(e){return(e=e.split(" "))[0]+" "+e[1]},pl=function(e,t,n){var i=Mt(t);return et(parseFloat(t)+parseFloat(wi(e,"x",n+"px",i)))+i},pS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Pp(e,t)},Bi="0deg",Es="0px",Gi=") ",Pp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,m=n.skewY,_=n.scaleX,p=n.scaleY,d=n.transformPerspective,g=n.force3D,M=n.target,y=n.zOrigin,b="",x=g==="auto"&&e&&e!==1||g===!0;if(y&&(f!==Bi||u!==Bi)){var T=parseFloat(u)*jr,L=Math.sin(T),v=Math.cos(T),w;T=parseFloat(f)*jr,w=Math.cos(T),a=pl(M,a,L*w*-y),o=pl(M,o,-Math.sin(T)*-y),l=pl(M,l,v*w*-y+y)}d!==Es&&(b+="perspective("+d+Gi),(i||s)&&(b+="translate("+i+"%, "+s+"%) "),(x||a!==Es||o!==Es||l!==Es)&&(b+=l!==Es||x?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Gi),c!==Bi&&(b+="rotate("+c+Gi),u!==Bi&&(b+="rotateY("+u+Gi),f!==Bi&&(b+="rotateX("+f+Gi),(h!==Bi||m!==Bi)&&(b+="skew("+h+", "+m+Gi),(_!==1||p!==1)&&(b+="scale("+_+", "+p+Gi),M.style[Ze]=b||"translate(0, 0)"},mS=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,m=n.target,_=n.xOrigin,p=n.yOrigin,d=n.xOffset,g=n.yOffset,M=n.forceCSS,y=parseFloat(a),b=parseFloat(o),x,T,L,v,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=jr,c*=jr,x=Math.cos(l)*f,T=Math.sin(l)*f,L=Math.sin(l-c)*-h,v=Math.cos(l-c)*h,c&&(u*=jr,w=Math.tan(c-u),w=Math.sqrt(1+w*w),L*=w,v*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),x*=w,T*=w)),x=et(x),T=et(T),L=et(L),v=et(v)):(x=f,v=h,T=L=0),(y&&!~(a+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(y=wi(m,"x",a,"px"),b=wi(m,"y",o,"px")),(_||p||d||g)&&(y=et(y+_-(_*x+p*L)+d),b=et(b+p-(_*T+p*v)+g)),(i||s)&&(w=m.getBBox(),y=et(y+i/100*w.width),b=et(b+s/100*w.height)),w="matrix("+x+","+T+","+L+","+v+","+y+","+b+")",m.setAttribute("transform",w),M&&(m.style[Ze]=w)},gS=function(e,t,n,i,s){var a=360,o=pt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?qi:1),c=l-i,u=i+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*Uf)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Uf)%a-~~(c/a)*a)),e._pt=h=new Nt(e._pt,t,n,i,c,QM),h.e=u,h.u="deg",e._props.push(n),h},Wf=function(e,t){for(var n in t)e[n]=t[n];return e},_S=function(e,t,n){var i=Wf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,m,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ze]=t,o=js(n,1),qs(n,Ze),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ze],a[Ze]=t,o=js(n,1),a[Ze]=c);for(l in ti)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(m=Mt(c),_=Mt(u),f=m!==_?wi(n,l,c,_):parseFloat(c),h=parseFloat(u),e._pt=new Nt(e._pt,o,l,f,h-f,tc),e._pt.u=_||0,e._props.push(l));Wf(o,i)};Ft("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Xa[e>1?"border"+r:r]=function(o,l,c,u,f){var h,m;if(arguments.length<4)return h=a.map(function(_){return On(o,_,c)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(u+"").split(" "),m={},a.forEach(function(_,p){return m[_]=h[p]=h[p]||h[(p-1)/2|0]}),o.init(l,m,f)}});var Dp={name:"css",register:ic,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,h,m,_,p,d,g,M,y,b,x,T,L,v;Hc||ic(),this.styles=this.styles||wp(e),v=this.styles.props,this.tween=n;for(p in t)if(p!=="autoRound"&&(u=t[p],!(Gt[p]&&dp(p,t,n,i,e,s)))){if(m=typeof u,_=Xa[p],m==="function"&&(u=u.call(n,i,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Hs(u)),_)_(this,e,p,u,n)&&(L=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),u+="",yi.lastIndex=0,yi.test(c)||(d=Mt(c),g=Mt(u)),g?d!==g&&(c=wi(e,p,c,g)+g):d&&(u+=d),this.add(o,"setProperty",c,u,i,s,0,0,p),a.push(p),v.push(p,0,o[p]);else if(m!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(n,i,e,s):l[p],pt(c)&&~c.indexOf("random(")&&(c=Hs(c)),Mt(c+"")||(c+=qt.units[p]||Mt(On(e,p))||""),(c+"").charAt(1)==="="&&(c=On(e,p))):c=On(e,p),h=parseFloat(c),M=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),f=parseFloat(u),p in Nn&&(p==="autoAlpha"&&(h===1&&On(e,"visibility")==="hidden"&&f&&(h=0),v.push("visibility",0,o.visibility),_i(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),p!=="scale"&&p!=="transform"&&(p=Nn[p],~p.indexOf(",")&&(p=p.split(",")[0]))),y=p in ti,y){if(this.styles.save(p),b||(x=e._gsap,x.renderTransform&&!t.parseTransform||js(e,t.parseTransform),T=t.smoothOrigin!==!1&&x.smooth,b=this._pt=new Nt(this._pt,o,Ze,0,1,x.renderTransform,x,0,-1),b.dep=1),p==="scale")this._pt=new Nt(this._pt,x,"scaleY",h,(M?qr(h,M+f):f)-h||0,tc),this._pt.u=0,a.push("scaleY",p),p+="X";else if(p==="transformOrigin"){v.push(gn,0,o[gn]),u=hS(u),x.svg?rc(e,u,0,T,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==x.zOrigin&&_i(this,x,"zOrigin",x.zOrigin,g),_i(this,o,p,ja(c),ja(u)));continue}else if(p==="svgOrigin"){rc(e,u,1,T,0,this);continue}else if(p in Cp){gS(this,x,p,h,M?qr(h,M+u):u);continue}else if(p==="smoothOrigin"){_i(this,x,"smooth",x.smooth,u);continue}else if(p==="force3D"){x[p]=u;continue}else if(p==="transform"){_S(this,u,e);continue}}else p in o||(p=us(p)||p);if(y||(f||f===0)&&(h||h===0)&&!JM.test(u)&&p in o)d=(c+"").substr((h+"").length),f||(f=0),g=Mt(u)||(p in qt.units?qt.units[p]:d),d!==g&&(h=wi(e,p,c,g)),this._pt=new Nt(this._pt,y?x:o,p,h,(M?qr(h,M+f):f)-h,!y&&(g==="px"||p==="zIndex")&&t.autoRound!==!1?tS:tc),this._pt.u=g||0,d!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=eS);else if(p in o)fS.call(this,e,p,c,M?M+u:u);else if(p in e)this.add(e,p,c||e[p],M?M+u:u,i,s);else{Oc(p,u);continue}y||(p in o?v.push(p,0,o[p]):v.push(p,1,c||e[p])),a.push(p)}}L&&vp(this)},render:function(e,t){if(t.tween._time||!Wc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:On,aliases:Nn,getSetter:function(e,t,n){var i=Nn[t];return i&&i.indexOf(",")<0&&(t=i),t in ti&&t!==gn&&(e._gsap.x||On(e,"x"))?n&&zf===n?t==="scale"?sS:rS:(zf=n||{})&&(t==="scale"?aS:oS):e.style&&!Rc(e.style[t])?nS:~t.indexOf("-")?iS:Gc(e,t)},core:{_removeProperty:qs,_getMatrix:Xc}};Yt.utils.checkPrefix=us;Yt.core.getStyleSaver=wp;(function(r,e,t,n){var i=Ft(r+","+e+","+t,function(s){ti[s]=1});Ft(e,function(s){qt.units[s]="deg",Cp[s]=1}),Nn[i[13]]=r+","+e,Ft(n,function(s){var a=s.split(":");Nn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ft("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){qt.units[r]="px"});Yt.registerPlugin(Dp);var rt=Yt.registerPlugin(Dp)||Yt;rt.core.Tween;var xS={exports:{}};(function(r){(function(e,t){var n=t(e,e.document,Date);e.lazySizes=n,r.exports&&(r.exports=n)})(typeof window<"u"?window:{},function(t,n,i){var s,a;if(function(){var O,D={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};a=t.lazySizesConfig||t.lazysizesConfig||{};for(O in D)O in a||(a[O]=D[O])}(),!n||!n.getElementsByClassName)return{init:function(){},cfg:a,noSupport:!0};var o=n.documentElement,l=t.HTMLPictureElement,c="addEventListener",u="getAttribute",f=t[c].bind(t),h=t.setTimeout,m=t.requestAnimationFrame||h,_=t.requestIdleCallback,p=/^picture$/i,d=["load","error","lazyincluded","_lazyloaded"],g={},M=Array.prototype.forEach,y=function(O,D){return g[D]||(g[D]=new RegExp("(\\s|^)"+D+"(\\s|$)")),g[D].test(O[u]("class")||"")&&g[D]},b=function(O,D){y(O,D)||O.setAttribute("class",(O[u]("class")||"").trim()+" "+D)},x=function(O,D){var N;(N=y(O,D))&&O.setAttribute("class",(O[u]("class")||"").replace(N," "))},T=function(O,D,N){var C=N?c:"removeEventListener";N&&T(O,D),d.forEach(function(R){O[C](R,D)})},L=function(O,D,N,C,R){var U=n.createEvent("Event");return N||(N={}),N.instance=s,U.initEvent(D,!C,!R),U.detail=N,O.dispatchEvent(U),U},v=function(O,D){var N;!l&&(N=t.picturefill||a.pf)?(D&&D.src&&!O[u]("srcset")&&O.setAttribute("srcset",D.src),N({reevaluate:!0,elements:[O]})):D&&D.src&&(O.src=D.src)},w=function(O,D){return(getComputedStyle(O,null)||{})[D]},F=function(O,D,N){for(N=N||O.offsetWidth;N<a.minSize&&D&&!O._lazysizesWidth;)N=D.offsetWidth,D=D.parentNode;return N},j=function(){var O,D,N=[],C=[],R=N,U=function(){var ne=R;for(R=N.length?C:N,O=!0,D=!1;ne.length;)ne.shift()();O=!1},Q=function(ne,H){O&&!H?ne.apply(this,arguments):(R.push(ne),D||(D=!0,(n.hidden?h:m)(U)))};return Q._lsFlush=U,Q}(),ie=function(O,D){return D?function(){j(O)}:function(){var N=this,C=arguments;j(function(){O.apply(N,C)})}},B=function(O){var D,N=0,C=a.throttleDelay,R=a.ricTimeout,U=function(){D=!1,N=i.now(),O()},Q=_&&R>49?function(){_(U,{timeout:R}),R!==a.ricTimeout&&(R=a.ricTimeout)}:ie(function(){h(U)},!0);return function(ne){var H;(ne=ne===!0)&&(R=33),!D&&(D=!0,H=C-(i.now()-N),H<0&&(H=0),ne||H<9?Q():h(Q,H))}},z=function(O){var D,N,C=99,R=function(){D=null,O()},U=function(){var Q=i.now()-N;Q<C?h(U,C-Q):(_||R)(R)};return function(){N=i.now(),D||(D=h(U,C))}},q=function(){var O,D,N,C,R,U,Q,ne,H,ge,pe,oe,se=/^img$/i,Te=/^iframe$/i,Se="onscroll"in t&&!/(gle|ing)bot/.test(navigator.userAgent),ve=0,He=0,Ne=0,We=-1,vt=function(X){Ne--,(!X||Ne<0||!X.target)&&(Ne=0)},Ke=function(X){return oe==null&&(oe=w(n.body,"visibility")=="hidden"),oe||!(w(X.parentNode,"visibility")=="hidden"&&w(X,"visibility")=="hidden")},Fe=function(X,te){var ce,fe=X,ye=Ke(X);for(ne-=te,pe+=te,H-=te,ge+=te;ye&&(fe=fe.offsetParent)&&fe!=n.body&&fe!=o;)ye=(w(fe,"opacity")||1)>0,ye&&w(fe,"overflow")!="visible"&&(ce=fe.getBoundingClientRect(),ye=ge>ce.left&&H<ce.right&&pe>ce.top-1&&ne<ce.bottom+1);return ye},wt=function(){var X,te,ce,fe,ye,Me,Le,I,$,re,he,_e,we=s.elements;if((C=a.loadMode)&&Ne<8&&(X=we.length)){for(te=0,We++;te<X;te++)if(!(!we[te]||we[te]._lazyRace)){if(!Se||s.prematureUnveil&&s.prematureUnveil(we[te])){xe(we[te]);continue}if((!(I=we[te][u]("data-expand"))||!(Me=I*1))&&(Me=He),re||(re=!a.expand||a.expand<1?o.clientHeight>500&&o.clientWidth>500?500:370:a.expand,s._defEx=re,he=re*a.expFactor,_e=a.hFac,oe=null,He<he&&Ne<1&&We>2&&C>2&&!n.hidden?(He=he,We=0):C>1&&We>1&&Ne<6?He=re:He=ve),$!==Me&&(U=innerWidth+Me*_e,Q=innerHeight+Me,Le=Me*-1,$=Me),ce=we[te].getBoundingClientRect(),(pe=ce.bottom)>=Le&&(ne=ce.top)<=Q&&(ge=ce.right)>=Le*_e&&(H=ce.left)<=U&&(pe||ge||H||ne)&&(a.loadHidden||Ke(we[te]))&&(D&&Ne<3&&!I&&(C<3||We<4)||Fe(we[te],Me))){if(xe(we[te]),ye=!0,Ne>9)break}else!ye&&D&&!fe&&Ne<4&&We<4&&C>2&&(O[0]||a.preloadAfterLoad)&&(O[0]||!I&&(pe||ge||H||ne||we[te][u](a.sizesAttr)!="auto"))&&(fe=O[0]||we[te])}fe&&!ye&&xe(fe)}},qe=B(wt),A=function(X){var te=X.target;if(te._lazyCache){delete te._lazyCache;return}vt(X),b(te,a.loadedClass),x(te,a.loadingClass),T(te,K),L(te,"lazyloaded")},S=ie(A),K=function(X){S({target:X.target})},ae=function(X,te){var ce=X.getAttribute("data-load-mode")||a.iframeLoadMode;ce==0?X.contentWindow.location.replace(te):ce==1&&(X.src=te)},le=function(X){var te,ce=X[u](a.srcsetAttr);(te=a.customMedia[X[u]("data-media")||X[u]("media")])&&X.setAttribute("media",te),ce&&X.setAttribute("srcset",ce)},me=ie(function(X,te,ce,fe,ye){var Me,Le,I,$,re,he;(re=L(X,"lazybeforeunveil",te)).defaultPrevented||(fe&&(ce?b(X,a.autosizesClass):X.setAttribute("sizes",fe)),Le=X[u](a.srcsetAttr),Me=X[u](a.srcAttr),ye&&(I=X.parentNode,$=I&&p.test(I.nodeName||"")),he=te.firesLoad||"src"in X&&(Le||Me||$),re={target:X},b(X,a.loadingClass),he&&(clearTimeout(N),N=h(vt,2500),T(X,K,!0)),$&&M.call(I.getElementsByTagName("source"),le),Le?X.setAttribute("srcset",Le):Me&&!$&&(Te.test(X.nodeName)?ae(X,Me):X.src=Me),ye&&(Le||$)&&v(X,{src:Me})),X._lazyRace&&delete X._lazyRace,x(X,a.lazyClass),j(function(){var _e=X.complete&&X.naturalWidth>1;(!he||_e)&&(_e&&b(X,a.fastLoadedClass),A(re),X._lazyCache=!0,h(function(){"_lazyCache"in X&&delete X._lazyCache},9)),X.loading=="lazy"&&Ne--},!0)}),xe=function(X){if(!X._lazyRace){var te,ce=se.test(X.nodeName),fe=ce&&(X[u](a.sizesAttr)||X[u]("sizes")),ye=fe=="auto";(ye||!D)&&ce&&(X[u]("src")||X.srcset)&&!X.complete&&!y(X,a.errorClass)&&y(X,a.lazyClass)||(te=L(X,"lazyunveilread").detail,ye&&Y.updateElem(X,!0,X.offsetWidth),X._lazyRace=!0,Ne++,me(X,te,ye,fe,ce))}},P=z(function(){a.loadMode=3,qe()}),k=function(){a.loadMode==3&&(a.loadMode=2),P()},de=function(){if(!D){if(i.now()-R<999){h(de,999);return}D=!0,a.loadMode=3,qe(),f("scroll",k,!0)}};return{_:function(){R=i.now(),s.elements=n.getElementsByClassName(a.lazyClass),O=n.getElementsByClassName(a.lazyClass+" "+a.preloadClass),f("scroll",qe,!0),f("resize",qe,!0),f("pageshow",function(X){if(X.persisted){var te=n.querySelectorAll("."+a.loadingClass);te.length&&te.forEach&&m(function(){te.forEach(function(ce){ce.complete&&xe(ce)})})}}),t.MutationObserver?new MutationObserver(qe).observe(o,{childList:!0,subtree:!0,attributes:!0}):(o[c]("DOMNodeInserted",qe,!0),o[c]("DOMAttrModified",qe,!0),setInterval(qe,999)),f("hashchange",qe,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(X){n[c](X,qe,!0)}),/d$|^c/.test(n.readyState)?de():(f("load",de),n[c]("DOMContentLoaded",qe),h(de,2e4)),s.elements.length?(wt(),j._lsFlush()):qe()},checkElems:qe,unveil:xe,_aLSL:k}}(),Y=function(){var O,D=ie(function(U,Q,ne,H){var ge,pe,oe;if(U._lazysizesWidth=H,H+="px",U.setAttribute("sizes",H),p.test(Q.nodeName||""))for(ge=Q.getElementsByTagName("source"),pe=0,oe=ge.length;pe<oe;pe++)ge[pe].setAttribute("sizes",H);ne.detail.dataAttr||v(U,ne.detail)}),N=function(U,Q,ne){var H,ge=U.parentNode;ge&&(ne=F(U,ge,ne),H=L(U,"lazybeforesizes",{width:ne,dataAttr:!!Q}),H.defaultPrevented||(ne=H.detail.width,ne&&ne!==U._lazysizesWidth&&D(U,ge,H,ne)))},C=function(){var U,Q=O.length;if(Q)for(U=0;U<Q;U++)N(O[U])},R=z(C);return{_:function(){O=n.getElementsByClassName(a.autosizesClass),f("resize",R)},checkElems:R,updateElem:N}}(),Z=function(){!Z.i&&n.getElementsByClassName&&(Z.i=!0,Y._(),q._())};return h(function(){a.init&&Z()}),s={cfg:a,autoSizer:Y,loader:q,init:Z,uP:v,aC:b,rC:x,hC:y,fire:L,gW:F,rAF:j},s})})(xS);let qf=0;function jc(r,e,t){qf=e/t*100,progressIndicator.style.transform=`translateX(${qf}%)`}const ml=document.querySelector("#loader");function fs(r){const e=rt.timeline({onComplete:()=>vS(r),defaults:{duration:.5,ease:"power4.out"}});e.to(".loader-shape",{opacity:0}),e.to(ml,{backgroundColor:"#000"},"<"),e.to(ml,{opacity:0}),e.set(ml,{display:"none",duration:0})}function vS(r){for(const e of r)rt.to(e.scale,{x:1,y:1,z:1})}function Yc(r){for(const e of r)rt.to(e.scale,{x:0,y:0,z:0})}const sc=new De;window.addEventListener("mousemove",r=>{sc.x=r.clientX/window.innerWidth*2-1,sc.y=-(r.clientY/window.innerHeight)*2+1});let sr=!0;function Ya(){sr===!0?sr=!1:sr=!0}window.addEventListener("resize",yS);function yS(){dr.aspect=window.innerWidth/window.innerHeight,dr.updateProjectionMatrix(),Li.setSize(window.innerWidth,window.innerHeight)}function Ei(){const r=document.querySelector("#toggleForm"),e=document.querySelector("#toggleLobbyShoe"),t=document.querySelector("#toggleWassilyChair"),n=document.querySelector("#togglebarcelonaPavilion");if(Ci)switch(Ci.object){case Un:e.click();break;case kn:t.click();break;case Bn:n.click();break;case jn:r.click();break;case Yn:r.click();break;case $n:r.click();break}}function Ti(){const r=document.querySelector("#toggleForm"),e=document.querySelector("#toggleLibShoe"),t=document.querySelector("#toggleVitraClock"),n=document.querySelector("#toggleBauhausBuilding");if(Ci)switch(Ci.object){case Gn:e.click();break;case Vn:t.click();break;case Hn:n.click();break;case Zn:r.click();break;case Kn:r.click();break;case Jn:r.click();break}}function Ai(){const r=document.querySelector("#toggleForm"),e=document.querySelector("#toggleOutsideShoe"),t=document.querySelector("#toggleOskar"),n=document.querySelector("#toggleOutsideBuilding");if(Ci)switch(Ci.object){case Wn:e.click();break;case qn:t.click();break;case Xn:n.click();break;case Qn:r.click();break}}let Xt=[],hs=!0;const bS=()=>{Xt=[Un,kn,Bn,jn,Yn,$n],ii.add(za,Un,kn,Bn,jn,Yn,$n),Pi.add(za,Un,kn,Bn,jn,Yn,$n),sr=!0,hr.onProgress=function(r,e,t){jc(r,e,t)},hr.onLoad=function(){setTimeout(()=>{fs(Xt)},1e3),hs=!1},hs||fs(Xt),window.addEventListener("click",Ei)},MS=()=>{//!! Not yet working...
//!! will need to add to the exit animation
Yc(Xt),Pi.remove(za,Un,kn,Bn,jn,Yn,$n),ii.remove(za,Un,kn,Bn,jn,Yn,$n),window.removeEventListener("click",Ei)},SS=()=>{Xt=[Gn,Vn,Hn,Zn,Kn,Jn],ii.add(Ua,Gn,Vn,Hn,Zn,Kn,Jn),Pi.add(Ua,Gn,Vn,Hn,Zn,Kn,Jn),sr=!0,hr.onProgress=function(r,e,t){jc(r,e,t)},hr.onLoad=function(){setTimeout(()=>{fs(Xt)},1e3),hs=!1},hs||fs(Xt),window.addEventListener("click",Ti)},wS=()=>{//!! Not yet working...
//!! will need to add to the exit animation
Yc(Xt),ii.remove(Ua,Gn,Vn,Hn,Zn,Kn,Jn),Pi.remove(Ua,Gn,Vn,Hn,Zn,Kn,Jn),window.removeEventListener("click",Ti)},ES=()=>{Xt=[Wn,qn,Xn,Qn],ii.add(ka,Wn,qn,Xn,Qn),Pi.add(ka,Wn,qn,Xn,Qn),sr=!0,hr.onProgress=function(r,e,t){jc(r,e,t)},hr.onLoad=function(){setTimeout(()=>{fs(Xt)},1e3),hs=!1},hs||fs(Xt),window.addEventListener("click",Ai)},TS=()=>{//!! Not yet working...
//!! will need to add to the exit animation
Yc(Xt),ii.remove(ka,Wn,qn,Xn,Qn),Pi.remove(ka,Wn,qn,Xn,Qn),window.removeEventListener("click",Ai)},AS=new eM,Xf=new tM;let Ci=null;const Rp=()=>{const r=AS.getElapsedTime();sr===!0&&(Pi.rotation.y=r*Math.PI*.01),Xf.setFromCamera(sc,dr);const e=Xf.intersectObjects(Xt);e.length?(Ci=e[0],Hl.style.cursor="pointer"):(Ci=null,Hl.style.cursor=""),go.update,Li.render(ii,dr),window.requestAnimationFrame(Rp)};Rp();function CS(r){return{show:!1,showInfo:!1,scene:r,init(){rt.set("#navWrapper",{xPercent:100}),rt.set("#burger-1",{y:-4}),rt.set("#burger-2",{y:4})},openInfo(){const e=rt.timeline({defaults:{duration:.25,ease:"power4.in"},onComplete:()=>this.showInfo=!0});e.fromTo(".nav-item",{opacity:1,scale:1},{opacity:0,scale:0,stagger:{from:"end",each:.1}}),e.fromTo(".nav-title",{opacity:1},{opacity:0},"<+.25"),e.fromTo("#toggleNavButton",{opacity:1},{opacity:0},"<"),e.fromTo("#navWrapper",{xPercent:0},{xPercent:100,duration:.5})},closeInfo(){const e=rt.timeline({onStart:()=>this.showInfo=!1,defaults:{duration:.25,ease:"power4.in"}});e.fromTo("#navWrapper",{xPercent:100},{xPercent:0,duration:.5}),e.fromTo(".nav-title",{opacity:0},{opacity:1}),e.fromTo(".nav-item",{opacity:0,scale:0},{opacity:1,scale:1,stagger:.1},"<"),e.fromTo("#toggleNavButton",{opacity:0},{opacity:1},"<")},openNav(){this.removePageEvents();const e=rt.timeline({onStart:()=>this.show=!0,defaults:{duration:.25,ease:"power4.in"}});e.fromTo("#navWrapper",{xPercent:100},{xPercent:0,duration:.5}),e.fromTo(".nav-title",{opacity:0},{opacity:1}),e.fromTo(".nav-item",{opacity:0,scale:0},{opacity:1,scale:1,stagger:.1},"<"),e.to("#burger-1",{y:1},0),e.to("#burger-2",{y:-1},0),e.to("#burger-1",{rotate:45},.5),e.to("#burger-2",{rotate:-45},.5)},closeNav(){if(this.show){this.addPageEvents();const e=rt.timeline({onComplete:()=>(this.show=!1,this.showInfo=!1),defaults:{duration:.25,ease:"power4.in"}});e.fromTo(".nav-item",{opacity:1,scale:1},{opacity:0,scale:0,stagger:{from:"end",each:.1}}),e.fromTo(".nav-title",{opacity:1},{opacity:0},"<+.25"),e.fromTo("#navWrapper",{xPercent:0},{xPercent:100,duration:.5}),e.to("#burger-1",{rotate:0},0),e.to("#burger-2",{rotate:0},0),e.to("#burger-1",{y:-4},.5),e.to("#burger-2",{y:4},.5)}},openNavAnimation(){const e=rt.timeline({defaults:{duration:.25,ease:"power4.in"}});e.fromTo("#navWrapper",{xPercent:100},{xPercent:0,duration:.5}),e.fromTo(".nav-title",{opacity:0},{opacity:1}),e.fromTo(".nav-item",{opacity:0,scale:0},{opacity:1,scale:1,stagger:.1},"<"),e.to("#burger-1",{y:1},0),e.to("#burger-2",{y:-1},0),e.to("#burger-1",{rotate:45},.5),e.to("#burger-2",{rotate:-45},.5)},addPageEvents(){switch(this.scene){case"lobby":window.addEventListener("click",Ei);break;case"library":window.addEventListener("click",Ti);break;case"outside":window.addEventListener("click",Ai);break}},removePageEvents(){switch(this.scene){case"lobby":window.removeEventListener("click",Ei);break;case"library":window.removeEventListener("click",Ti);break;case"outside":window.removeEventListener("click",Ai);break}},toggleNav(){this.show?this.closeNav():this.openNav()}}}function LS(r,e){return{open:!1,scene:r,hasVideo:e,openPopup(){Ya(),this.removePageEvents(),this.open=!0},closePopup(){this.open&&(Ya(),this.addPageEvents(),this.open=!1)},addPageEvents(){switch(this.scene){case"lobby":window.addEventListener("click",Ei);break;case"library":window.addEventListener("click",Ti);break;case"outside":window.addEventListener("click",Ai);break}},removePageEvents(){switch(this.scene){case"lobby":window.removeEventListener("click",Ei);break;case"library":window.removeEventListener("click",Ti);break;case"outside":window.removeEventListener("click",Ai);break}},togglePopup(){this.open?this.closePopup():this.openPopup()}}}function PS(r){return{open:!1,success:!1,scene:r,openPopup(){Ya(),this.removePageEvents(),this.open=!0},closePopup(){this.open&&(Ya(),this.addPageEvents(),this.open=!1)},addPageEvents(){switch(this.scene){case"lobby":window.addEventListener("click",Ei);break;case"library":window.addEventListener("click",Ti);break;case"outside":window.addEventListener("click",Ai);break}},removePageEvents(){switch(this.scene){case"lobby":window.removeEventListener("click",Ei);break;case"library":window.removeEventListener("click",Ti);break;case"outside":window.removeEventListener("click",Ai);break}},togglePopup(){this.open?this.closePopup():this.openPopup()},submitForm(){const e=this.$root.querySelector("form");if(this.$validate.isComplete(e)){const t=new FormData(e);fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(t).toString()}).then(()=>this.success=!0).catch(n=>alert(n))}}}}class DS extends Kr{onLeave({from:e,trigger:t,done:n}){const i=rt.timeline({onComplete:()=>n(),defaults:{duration:.5,ease:"power4.in"}});i.set("#transition",{display:"block",xPercent:100}),i.to("#transition",{xPercent:0})}onEnter({to:e,trigger:t,done:n}){const i=rt.timeline({onComplete:()=>n(),defaults:{duration:.5,ease:"power4.in"}});i.to("#transition",{xPercent:-100}),i.set("#transition",{display:"hidden",xPercent:100})}}class RS extends Kr{onLeave({from:e,trigger:t,done:n}){const i=rt.timeline({onComplete:()=>n(),defaults:{duration:.5,ease:"power4.in"}});i.set("#transition",{display:"block",xPercent:100,backgroundColor:"#27369C"}),i.to("#transition",{xPercent:0})}onEnter({to:e,trigger:t,done:n}){document.querySelector("#apple-touch-icon").href="/favicon/lobby/apple-touch-icon.png",document.querySelector("#icon-large").href="/favicon/lobby/favicon-32x32.png",document.querySelector("#icon-small").href="/favicon/lobby/favicon-16x16.png",document.querySelector("#mask").setAttribute("color","#27369c"),document.querySelector("#tile-color").setAttribute("content","#27369c");const i=rt.timeline({onComplete:()=>n(),defaults:{duration:.5,ease:"power4.in"}});i.to("#transition",{xPercent:-100}),i.set("#transition",{display:"hidden",xPercent:100})}}class IS extends Kr{onLeave({from:e,trigger:t,done:n}){const i=rt.timeline({onComplete:()=>n(),defaults:{duration:.5,ease:"power4.in"}});i.set("#transition",{display:"block",xPercent:100,backgroundColor:"#DF3128"}),i.to("#transition",{xPercent:0})}onEnter({to:e,trigger:t,done:n}){document.querySelector("#apple-touch-icon").href="/favicon/library/apple-touch-icon.png",document.querySelector("#icon-large").href="/favicon/library/favicon-32x32.png",document.querySelector("#icon-small").href="/favicon/library/favicon-16x16.png",document.querySelector("#mask").setAttribute("color","#DF3128"),document.querySelector("#tile-color").setAttribute("content","#DF3128");const i=rt.timeline({onComplete:()=>n(),defaults:{duration:.5,ease:"power4.in"}});i.to("#transition",{xPercent:-100}),i.set("#transition",{display:"hidden",xPercent:100})}}class OS extends Kr{onLeave({from:e,trigger:t,done:n}){const i=rt.timeline({onComplete:()=>n(),defaults:{duration:.5,ease:"power4.in"}});i.set("#transition",{display:"block",xPercent:100,backgroundColor:"#E8E36B"}),i.to("#transition",{xPercent:0})}onEnter({to:e,trigger:t,done:n}){document.querySelector("#apple-touch-icon").href="/favicon/outside/apple-touch-icon.png",document.querySelector("#icon-large").href="/favicon/outside/favicon-32x32.png",document.querySelector("#icon-small").href="/favicon/outside/favicon-16x16.png",document.querySelector("#mask").setAttribute("color","#E8E36B"),document.querySelector("#tile-color").setAttribute("content","#E8E36B");const i=rt.timeline({onComplete:()=>n(),defaults:{duration:.5,ease:"power4.in"}});i.to("#transition",{xPercent:-100}),i.set("#transition",{display:"hidden",xPercent:100})}}class FS extends ks{onEnter(){bS()}onEnterCompleted(){}onLeave(){}onLeaveCompleted(){MS()}}class NS extends ks{onEnter(){ES()}onEnterCompleted(){}onLeave(){}onLeaveCompleted(){TS()}}class zS extends ks{onEnter(){SS()}onEnterCompleted(){}onLeave(){}onLeaveCompleted(){wS()}}window.Alpine=ms;ms.plugin(Ug);ms.data("nav",CS);ms.data("popup",LS);ms.data("form",PS);const $c=new Jg({transitions:{default:DS,toLobby:RS,toLibrary:IS,toOutside:OS},renderers:{lobby:FS,outside:NS,library:zS}});$c.addRoute("/.*","/","toLobby");$c.addRoute("/.*","/library/","toLibrary");$c.addRoute("/.*","/outside/","toOutside");ms.start();
//# sourceMappingURL=app.5c9781af.js.map
