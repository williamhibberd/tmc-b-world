var Mp=Object.defineProperty;var Sp=(r,e,t)=>e in r?Mp(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Wn=(r,e,t)=>(Sp(r,typeof e!="symbol"?e+"":e,t),t);var el=!1,tl=!1,Ii=[];function wp(r){Tp(r)}function Tp(r){Ii.includes(r)||Ii.push(r),Ep()}function Pf(r){let e=Ii.indexOf(r);e!==-1&&Ii.splice(e,1)}function Ep(){!tl&&!el&&(el=!0,queueMicrotask(Ap))}function Ap(){el=!1,tl=!0;for(let r=0;r<Ii.length;r++)Ii[r]();Ii.length=0,tl=!1}var Jr,Rs,Ra,Df,nl=!0;function Cp(r){nl=!1,r(),nl=!0}function Lp(r){Jr=r.reactive,Ra=r.release,Rs=e=>r.effect(e,{scheduler:t=>{nl?wp(t):t()}}),Df=r.raw}function Fc(r){Rs=r}function Pp(r){let e=()=>{};return[n=>{let i=Rs(n);return r._x_effects||(r._x_effects=new Set,r._x_runEffects=()=>{r._x_effects.forEach(s=>s())}),r._x_effects.add(i),e=()=>{i!==void 0&&(r._x_effects.delete(i),Ra(i))},i},()=>{e()}]}var Rf=[],If=[],Of=[];function Dp(r){Of.push(r)}function Ff(r,e){typeof e=="function"?(r._x_cleanups||(r._x_cleanups=[]),r._x_cleanups.push(e)):(e=r,If.push(e))}function Rp(r){Rf.push(r)}function Ip(r,e,t){r._x_attributeCleanups||(r._x_attributeCleanups={}),r._x_attributeCleanups[e]||(r._x_attributeCleanups[e]=[]),r._x_attributeCleanups[e].push(t)}function Nf(r,e){!r._x_attributeCleanups||Object.entries(r._x_attributeCleanups).forEach(([t,n])=>{(e===void 0||e.includes(t))&&(n.forEach(i=>i()),delete r._x_attributeCleanups[t])})}var Hl=new MutationObserver(Xl),Wl=!1;function zf(){Hl.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),Wl=!0}function Op(){Fp(),Hl.disconnect(),Wl=!1}var gs=[],ao=!1;function Fp(){gs=gs.concat(Hl.takeRecords()),gs.length&&!ao&&(ao=!0,queueMicrotask(()=>{Np(),ao=!1}))}function Np(){Xl(gs),gs.length=0}function ut(r){if(!Wl)return r();Op();let e=r();return zf(),e}var ql=!1,xa=[];function zp(){ql=!0}function Up(){ql=!1,Xl(xa),xa=[]}function Xl(r){if(ql){xa=xa.concat(r);return}let e=[],t=[],n=new Map,i=new Map;for(let s=0;s<r.length;s++)if(!r[s].target._x_ignoreMutationObserver&&(r[s].type==="childList"&&(r[s].addedNodes.forEach(a=>a.nodeType===1&&e.push(a)),r[s].removedNodes.forEach(a=>a.nodeType===1&&t.push(a))),r[s].type==="attributes")){let a=r[s].target,o=r[s].attributeName,l=r[s].oldValue,c=()=>{n.has(a)||n.set(a,[]),n.get(a).push({name:o,value:a.getAttribute(o)})},u=()=>{i.has(a)||i.set(a,[]),i.get(a).push(o)};a.hasAttribute(o)&&l===null?c():a.hasAttribute(o)?(u(),c()):u()}i.forEach((s,a)=>{Nf(a,s)}),n.forEach((s,a)=>{Rf.forEach(o=>o(a,s))});for(let s of t)if(!e.includes(s)&&(If.forEach(a=>a(s)),s._x_cleanups))for(;s._x_cleanups.length;)s._x_cleanups.pop()();e.forEach(s=>{s._x_ignoreSelf=!0,s._x_ignore=!0});for(let s of e)t.includes(s)||!s.isConnected||(delete s._x_ignoreSelf,delete s._x_ignore,Of.forEach(a=>a(s)),s._x_ignore=!0,s._x_ignoreSelf=!0);e.forEach(s=>{delete s._x_ignoreSelf,delete s._x_ignore}),e=null,t=null,n=null,i=null}function Uf(r){return Os(Pr(r))}function Is(r,e,t){return r._x_dataStack=[e,...Pr(t||r)],()=>{r._x_dataStack=r._x_dataStack.filter(n=>n!==e)}}function Nc(r,e){let t=r._x_dataStack[0];Object.entries(e).forEach(([n,i])=>{t[n]=i})}function Pr(r){return r._x_dataStack?r._x_dataStack:typeof ShadowRoot=="function"&&r instanceof ShadowRoot?Pr(r.host):r.parentNode?Pr(r.parentNode):[]}function Os(r){let e=new Proxy({},{ownKeys:()=>Array.from(new Set(r.flatMap(t=>Object.keys(t)))),has:(t,n)=>r.some(i=>i.hasOwnProperty(n)),get:(t,n)=>(r.find(i=>{if(i.hasOwnProperty(n)){let s=Object.getOwnPropertyDescriptor(i,n);if(s.get&&s.get._x_alreadyBound||s.set&&s.set._x_alreadyBound)return!0;if((s.get||s.set)&&s.enumerable){let a=s.get,o=s.set,l=s;a=a&&a.bind(e),o=o&&o.bind(e),a&&(a._x_alreadyBound=!0),o&&(o._x_alreadyBound=!0),Object.defineProperty(i,n,{...l,get:a,set:o})}return!0}return!1})||{})[n],set:(t,n,i)=>{let s=r.find(a=>a.hasOwnProperty(n));return s?s[n]=i:r[r.length-1][n]=i,!0}});return e}function kf(r){let e=n=>typeof n=="object"&&!Array.isArray(n)&&n!==null,t=(n,i="")=>{Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(([s,{value:a,enumerable:o}])=>{if(o===!1||a===void 0)return;let l=i===""?s:`${i}.${s}`;typeof a=="object"&&a!==null&&a._x_interceptor?n[s]=a.initialize(r,l,s):e(a)&&a!==n&&!(a instanceof Element)&&t(a,l)})};return t(r)}function Bf(r,e=()=>{}){let t={initialValue:void 0,_x_interceptor:!0,initialize(n,i,s){return r(this.initialValue,()=>kp(n,i),a=>il(n,i,a),i,s)}};return e(t),n=>{if(typeof n=="object"&&n!==null&&n._x_interceptor){let i=t.initialize.bind(t);t.initialize=(s,a,o)=>{let l=n.initialize(s,a,o);return t.initialValue=l,i(s,a,o)}}else t.initialValue=n;return t}}function kp(r,e){return e.split(".").reduce((t,n)=>t[n],r)}function il(r,e,t){if(typeof e=="string"&&(e=e.split(".")),e.length===1)r[e[0]]=t;else{if(e.length===0)throw error;return r[e[0]]||(r[e[0]]={}),il(r[e[0]],e.slice(1),t)}}var Gf={};function gn(r,e){Gf[r]=e}function rl(r,e){return Object.entries(Gf).forEach(([t,n])=>{Object.defineProperty(r,`$${t}`,{get(){let[i,s]=jf(e);return i={interceptor:Bf,...i},Ff(e,s),n(e,i)},enumerable:!1})}),r}function Bp(r,e,t,...n){try{return t(...n)}catch(i){Ms(i,r,e)}}function Ms(r,e,t=void 0){Object.assign(r,{el:e,expression:t}),console.warn(`Alpine Expression Error: ${r.message}

${t?'Expression: "'+t+`"

`:""}`,e),setTimeout(()=>{throw r},0)}var ha=!0;function Gp(r){let e=ha;ha=!1,r(),ha=e}function wr(r,e,t={}){let n;return bt(r,e)(i=>n=i,t),n}function bt(...r){return Vf(...r)}var Vf=Hf;function Vp(r){Vf=r}function Hf(r,e){let t={};rl(t,r);let n=[t,...Pr(r)];if(typeof e=="function")return Hp(n,e);let i=qp(n,e,r);return Bp.bind(null,r,e,i)}function Hp(r,e){return(t=()=>{},{scope:n={},params:i=[]}={})=>{let s=e.apply(Os([n,...r]),i);va(t,s)}}var oo={};function Wp(r,e){if(oo[r])return oo[r];let t=Object.getPrototypeOf(async function(){}).constructor,n=/^[\n\s]*if.*\(.*\)/.test(r)||/^(let|const)\s/.test(r)?`(() => { ${r} })()`:r,s=(()=>{try{return new t(["__self","scope"],`with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`)}catch(a){return Ms(a,e,r),Promise.resolve()}})();return oo[r]=s,s}function qp(r,e,t){let n=Wp(e,t);return(i=()=>{},{scope:s={},params:a=[]}={})=>{n.result=void 0,n.finished=!1;let o=Os([s,...r]);if(typeof n=="function"){let l=n(n,o).catch(c=>Ms(c,t,e));n.finished?(va(i,n.result,o,a,t),n.result=void 0):l.then(c=>{va(i,c,o,a,t)}).catch(c=>Ms(c,t,e)).finally(()=>n.result=void 0)}}}function va(r,e,t,n,i){if(ha&&typeof e=="function"){let s=e.apply(t,n);s instanceof Promise?s.then(a=>va(r,a,t,n)).catch(a=>Ms(a,i,e)):r(s)}else r(e)}var jl="x-";function Qr(r=""){return jl+r}function Xp(r){jl=r}var Wf={};function et(r,e){Wf[r]=e}function Yl(r,e,t){if(e=Array.from(e),r._x_virtualDirectives){let s=Object.entries(r._x_virtualDirectives).map(([o,l])=>({name:o,value:l})),a=qf(s);s=s.map(o=>a.find(l=>l.name===o.name)?{name:`x-bind:${o.name}`,value:`"${o.value}"`}:o),e=e.concat(s)}let n={};return e.map(Zf((s,a)=>n[s]=a)).filter(Jf).map($p(n,t)).sort(Zp).map(s=>Yp(r,s))}function qf(r){return Array.from(r).map(Zf()).filter(e=>!Jf(e))}var sl=!1,us=new Map,Xf=Symbol();function jp(r){sl=!0;let e=Symbol();Xf=e,us.set(e,[]);let t=()=>{for(;us.get(e).length;)us.get(e).shift()();us.delete(e)},n=()=>{sl=!1,t()};r(t),n()}function jf(r){let e=[],t=o=>e.push(o),[n,i]=Pp(r);return e.push(i),[{Alpine:Fs,effect:n,cleanup:t,evaluateLater:bt.bind(bt,r),evaluate:wr.bind(wr,r)},()=>e.forEach(o=>o())]}function Yp(r,e){let t=()=>{},n=Wf[e.type]||t,[i,s]=jf(r);Ip(r,e.original,s);let a=()=>{r._x_ignore||r._x_ignoreSelf||(n.inline&&n.inline(r,e,i),n=n.bind(n,r,e,i),sl?us.get(Xf).push(n):n())};return a.runCleanups=s,a}var Yf=(r,e)=>({name:t,value:n})=>(t.startsWith(r)&&(t=t.replace(r,e)),{name:t,value:n}),$f=r=>r;function Zf(r=()=>{}){return({name:e,value:t})=>{let{name:n,value:i}=Kf.reduce((s,a)=>a(s),{name:e,value:t});return n!==e&&r(n,e),{name:n,value:i}}}var Kf=[];function $l(r){Kf.push(r)}function Jf({name:r}){return Qf().test(r)}var Qf=()=>new RegExp(`^${jl}([^:^.]+)\\b`);function $p(r,e){return({name:t,value:n})=>{let i=t.match(Qf()),s=t.match(/:([a-zA-Z0-9\-:]+)/),a=t.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],o=e||r[t]||t;return{type:i?i[1]:null,value:s?s[1]:null,modifiers:a.map(l=>l.replace(".","")),expression:n,original:o}}}var al="DEFAULT",Vs=["ignore","ref","data","id","radio","tabs","switch","disclosure","menu","listbox","list","item","combobox","bind","init","for","mask","model","modelable","transition","show","if",al,"teleport"];function Zp(r,e){let t=Vs.indexOf(r.type)===-1?al:r.type,n=Vs.indexOf(e.type)===-1?al:e.type;return Vs.indexOf(t)-Vs.indexOf(n)}function _s(r,e,t={}){r.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0,cancelable:!0}))}var ol=[],Zl=!1;function eh(r=()=>{}){return queueMicrotask(()=>{Zl||setTimeout(()=>{ll()})}),new Promise(e=>{ol.push(()=>{r(),e()})})}function ll(){for(Zl=!1;ol.length;)ol.shift()()}function Kp(){Zl=!0}function Gi(r,e){if(typeof ShadowRoot=="function"&&r instanceof ShadowRoot){Array.from(r.children).forEach(i=>Gi(i,e));return}let t=!1;if(e(r,()=>t=!0),t)return;let n=r.firstElementChild;for(;n;)Gi(n,e),n=n.nextElementSibling}function Dr(r,...e){console.warn(`Alpine Warning: ${r}`,...e)}function Jp(){document.body||Dr("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),_s(document,"alpine:init"),_s(document,"alpine:initializing"),zf(),Dp(e=>ai(e,Gi)),Ff(e=>em(e)),Rp((e,t)=>{Yl(e,t).forEach(n=>n())});let r=e=>!Ia(e.parentElement,!0);Array.from(document.querySelectorAll(ih())).filter(r).forEach(e=>{ai(e)}),_s(document,"alpine:initialized")}var Kl=[],th=[];function nh(){return Kl.map(r=>r())}function ih(){return Kl.concat(th).map(r=>r())}function rh(r){Kl.push(r)}function sh(r){th.push(r)}function Ia(r,e=!1){return Oa(r,t=>{if((e?ih():nh()).some(i=>t.matches(i)))return!0})}function Oa(r,e){if(!!r){if(e(r))return r;if(r._x_teleportBack&&(r=r._x_teleportBack),!!r.parentElement)return Oa(r.parentElement,e)}}function Qp(r){return nh().some(e=>r.matches(e))}function ai(r,e=Gi){jp(()=>{e(r,(t,n)=>{Yl(t,t.attributes).forEach(i=>i()),t._x_ignore&&n()})})}function em(r){Gi(r,e=>Nf(e))}function Jl(r,e){return Array.isArray(e)?zc(r,e.join(" ")):typeof e=="object"&&e!==null?tm(r,e):typeof e=="function"?Jl(r,e()):zc(r,e)}function zc(r,e){let t=i=>i.split(" ").filter(s=>!r.classList.contains(s)).filter(Boolean),n=i=>(r.classList.add(...i),()=>{r.classList.remove(...i)});return e=e===!0?e="":e||"",n(t(e))}function tm(r,e){let t=o=>o.split(" ").filter(Boolean),n=Object.entries(e).flatMap(([o,l])=>l?t(o):!1).filter(Boolean),i=Object.entries(e).flatMap(([o,l])=>l?!1:t(o)).filter(Boolean),s=[],a=[];return i.forEach(o=>{r.classList.contains(o)&&(r.classList.remove(o),a.push(o))}),n.forEach(o=>{r.classList.contains(o)||(r.classList.add(o),s.push(o))}),()=>{a.forEach(o=>r.classList.add(o)),s.forEach(o=>r.classList.remove(o))}}function Fa(r,e){return typeof e=="object"&&e!==null?nm(r,e):im(r,e)}function nm(r,e){let t={};return Object.entries(e).forEach(([n,i])=>{t[n]=r.style[n],n.startsWith("--")||(n=rm(n)),r.style.setProperty(n,i)}),setTimeout(()=>{r.style.length===0&&r.removeAttribute("style")}),()=>{Fa(r,t)}}function im(r,e){let t=r.getAttribute("style",e);return r.setAttribute("style",e),()=>{r.setAttribute("style",t||"")}}function rm(r){return r.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function cl(r,e=()=>{}){let t=!1;return function(){t?e.apply(this,arguments):(t=!0,r.apply(this,arguments))}}et("transition",(r,{value:e,modifiers:t,expression:n},{evaluate:i})=>{typeof n=="function"&&(n=i(n)),n?sm(r,n,e):am(r,t,e)});function sm(r,e,t){ah(r,Jl,""),{enter:i=>{r._x_transition.enter.during=i},"enter-start":i=>{r._x_transition.enter.start=i},"enter-end":i=>{r._x_transition.enter.end=i},leave:i=>{r._x_transition.leave.during=i},"leave-start":i=>{r._x_transition.leave.start=i},"leave-end":i=>{r._x_transition.leave.end=i}}[t](e)}function am(r,e,t){ah(r,Fa);let n=!e.includes("in")&&!e.includes("out")&&!t,i=n||e.includes("in")||["enter"].includes(t),s=n||e.includes("out")||["leave"].includes(t);e.includes("in")&&!n&&(e=e.filter((g,y)=>y<e.indexOf("out"))),e.includes("out")&&!n&&(e=e.filter((g,y)=>y>e.indexOf("out")));let a=!e.includes("opacity")&&!e.includes("scale"),o=a||e.includes("opacity"),l=a||e.includes("scale"),c=o?0:1,u=l?ns(e,"scale",95)/100:1,f=ns(e,"delay",0),h=ns(e,"origin","center"),m="opacity, transform",_=ns(e,"duration",150)/1e3,p=ns(e,"duration",75)/1e3,d="cubic-bezier(0.4, 0.0, 0.2, 1)";i&&(r._x_transition.enter.during={transformOrigin:h,transitionDelay:f,transitionProperty:m,transitionDuration:`${_}s`,transitionTimingFunction:d},r._x_transition.enter.start={opacity:c,transform:`scale(${u})`},r._x_transition.enter.end={opacity:1,transform:"scale(1)"}),s&&(r._x_transition.leave.during={transformOrigin:h,transitionDelay:f,transitionProperty:m,transitionDuration:`${p}s`,transitionTimingFunction:d},r._x_transition.leave.start={opacity:1,transform:"scale(1)"},r._x_transition.leave.end={opacity:c,transform:`scale(${u})`})}function ah(r,e,t={}){r._x_transition||(r._x_transition={enter:{during:t,start:t,end:t},leave:{during:t,start:t,end:t},in(n=()=>{},i=()=>{}){ul(r,e,{during:this.enter.during,start:this.enter.start,end:this.enter.end},n,i)},out(n=()=>{},i=()=>{}){ul(r,e,{during:this.leave.during,start:this.leave.start,end:this.leave.end},n,i)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(r,e,t,n){const i=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let s=()=>i(t);if(e){r._x_transition&&(r._x_transition.enter||r._x_transition.leave)?r._x_transition.enter&&(Object.entries(r._x_transition.enter.during).length||Object.entries(r._x_transition.enter.start).length||Object.entries(r._x_transition.enter.end).length)?r._x_transition.in(t):s():r._x_transition?r._x_transition.in(t):s();return}r._x_hidePromise=r._x_transition?new Promise((a,o)=>{r._x_transition.out(()=>{},()=>a(n)),r._x_transitioning.beforeCancel(()=>o({isFromCancelledTransition:!0}))}):Promise.resolve(n),queueMicrotask(()=>{let a=oh(r);a?(a._x_hideChildren||(a._x_hideChildren=[]),a._x_hideChildren.push(r)):i(()=>{let o=l=>{let c=Promise.all([l._x_hidePromise,...(l._x_hideChildren||[]).map(o)]).then(([u])=>u());return delete l._x_hidePromise,delete l._x_hideChildren,c};o(r).catch(l=>{if(!l.isFromCancelledTransition)throw l})})})};function oh(r){let e=r.parentNode;if(!!e)return e._x_hidePromise?e:oh(e)}function ul(r,e,{during:t,start:n,end:i}={},s=()=>{},a=()=>{}){if(r._x_transitioning&&r._x_transitioning.cancel(),Object.keys(t).length===0&&Object.keys(n).length===0&&Object.keys(i).length===0){s(),a();return}let o,l,c;om(r,{start(){o=e(r,n)},during(){l=e(r,t)},before:s,end(){o(),c=e(r,i)},after:a,cleanup(){l(),c()}})}function om(r,e){let t,n,i,s=cl(()=>{ut(()=>{t=!0,n||e.before(),i||(e.end(),ll()),e.after(),r.isConnected&&e.cleanup(),delete r._x_transitioning})});r._x_transitioning={beforeCancels:[],beforeCancel(a){this.beforeCancels.push(a)},cancel:cl(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();s()}),finish:s},ut(()=>{e.start(),e.during()}),Kp(),requestAnimationFrame(()=>{if(t)return;let a=Number(getComputedStyle(r).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,o=Number(getComputedStyle(r).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;a===0&&(a=Number(getComputedStyle(r).animationDuration.replace("s",""))*1e3),ut(()=>{e.before()}),n=!0,requestAnimationFrame(()=>{t||(ut(()=>{e.end()}),ll(),setTimeout(r._x_transitioning.finish,a+o),i=!0)})})}function ns(r,e,t){if(r.indexOf(e)===-1)return t;const n=r[r.indexOf(e)+1];if(!n||e==="scale"&&isNaN(n))return t;if(e==="duration"){let i=n.match(/([0-9]+)ms/);if(i)return i[1]}return e==="origin"&&["top","right","left","center","bottom"].includes(r[r.indexOf(e)+2])?[n,r[r.indexOf(e)+2]].join(" "):n}var fl=!1;function Na(r,e=()=>{}){return(...t)=>fl?e(...t):r(...t)}function lm(r,e){e._x_dataStack||(e._x_dataStack=r._x_dataStack),fl=!0,um(()=>{cm(e)}),fl=!1}function cm(r){let e=!1;ai(r,(n,i)=>{Gi(n,(s,a)=>{if(e&&Qp(s))return a();e=!0,i(s,a)})})}function um(r){let e=Rs;Fc((t,n)=>{let i=e(t);return Ra(i),()=>{}}),r(),Fc(e)}function lh(r,e,t,n=[]){switch(r._x_bindings||(r._x_bindings=Jr({})),r._x_bindings[e]=t,e=n.includes("camel")?_m(e):e,e){case"value":fm(r,t);break;case"style":dm(r,t);break;case"class":hm(r,t);break;default:pm(r,e,t);break}}function fm(r,e){if(r.type==="radio")r.attributes.value===void 0&&(r.value=e),window.fromModel&&(r.checked=Uc(r.value,e));else if(r.type==="checkbox")Number.isInteger(e)?r.value=e:!Number.isInteger(e)&&!Array.isArray(e)&&typeof e!="boolean"&&![null,void 0].includes(e)?r.value=String(e):Array.isArray(e)?r.checked=e.some(t=>Uc(t,r.value)):r.checked=!!e;else if(r.tagName==="SELECT")gm(r,e);else{if(r.value===e)return;r.value=e}}function hm(r,e){r._x_undoAddedClasses&&r._x_undoAddedClasses(),r._x_undoAddedClasses=Jl(r,e)}function dm(r,e){r._x_undoAddedStyles&&r._x_undoAddedStyles(),r._x_undoAddedStyles=Fa(r,e)}function pm(r,e,t){[null,void 0,!1].includes(t)&&xm(e)?r.removeAttribute(e):(ch(e)&&(t=e),mm(r,e,t))}function mm(r,e,t){r.getAttribute(e)!=t&&r.setAttribute(e,t)}function gm(r,e){const t=[].concat(e).map(n=>n+"");Array.from(r.options).forEach(n=>{n.selected=t.includes(n.value)})}function _m(r){return r.toLowerCase().replace(/-(\w)/g,(e,t)=>t.toUpperCase())}function Uc(r,e){return r==e}function ch(r){return["disabled","checked","required","readonly","hidden","open","selected","autofocus","itemscope","multiple","novalidate","allowfullscreen","allowpaymentrequest","formnovalidate","autoplay","controls","loop","muted","playsinline","default","ismap","reversed","async","defer","nomodule"].includes(r)}function xm(r){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(r)}function vm(r,e,t){if(r._x_bindings&&r._x_bindings[e]!==void 0)return r._x_bindings[e];let n=r.getAttribute(e);return n===null?typeof t=="function"?t():t:n===""?!0:ch(e)?!![e,"true"].includes(n):n}function uh(r,e){var t;return function(){var n=this,i=arguments,s=function(){t=null,r.apply(n,i)};clearTimeout(t),t=setTimeout(s,e)}}function fh(r,e){let t;return function(){let n=this,i=arguments;t||(r.apply(n,i),t=!0,setTimeout(()=>t=!1,e))}}function ym(r){r(Fs)}var wi={},kc=!1;function bm(r,e){if(kc||(wi=Jr(wi),kc=!0),e===void 0)return wi[r];wi[r]=e,typeof e=="object"&&e!==null&&e.hasOwnProperty("init")&&typeof e.init=="function"&&wi[r].init(),kf(wi[r])}function Mm(){return wi}var hh={};function Sm(r,e){let t=typeof e!="function"?()=>e:e;r instanceof Element?dh(r,t()):hh[r]=t}function wm(r){return Object.entries(hh).forEach(([e,t])=>{Object.defineProperty(r,e,{get(){return(...n)=>t(...n)}})}),r}function dh(r,e,t){let n=[];for(;n.length;)n.pop()();let i=Object.entries(e).map(([a,o])=>({name:a,value:o})),s=qf(i);i=i.map(a=>s.find(o=>o.name===a.name)?{name:`x-bind:${a.name}`,value:`"${a.value}"`}:a),Yl(r,i,t).map(a=>{n.push(a.runCleanups),a()})}var ph={};function Tm(r,e){ph[r]=e}function Em(r,e){return Object.entries(ph).forEach(([t,n])=>{Object.defineProperty(r,t,{get(){return(...i)=>n.bind(e)(...i)},enumerable:!1})}),r}var Am={get reactive(){return Jr},get release(){return Ra},get effect(){return Rs},get raw(){return Df},version:"3.10.5",flushAndStopDeferringMutations:Up,dontAutoEvaluateFunctions:Gp,disableEffectScheduling:Cp,setReactivityEngine:Lp,closestDataStack:Pr,skipDuringClone:Na,addRootSelector:rh,addInitSelector:sh,addScopeToNode:Is,deferMutations:zp,mapAttributes:$l,evaluateLater:bt,setEvaluator:Vp,mergeProxies:Os,findClosest:Oa,closestRoot:Ia,interceptor:Bf,transition:ul,setStyles:Fa,mutateDom:ut,directive:et,throttle:fh,debounce:uh,evaluate:wr,initTree:ai,nextTick:eh,prefixed:Qr,prefix:Xp,plugin:ym,magic:gn,store:bm,start:Jp,clone:lm,bound:vm,$data:Uf,data:Tm,bind:Sm},Fs=Am;function Cm(r,e){const t=Object.create(null),n=r.split(",");for(let i=0;i<n.length;i++)t[n[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}var Lm=Object.freeze({});Object.freeze([]);var mh=Object.assign,Pm=Object.prototype.hasOwnProperty,za=(r,e)=>Pm.call(r,e),Oi=Array.isArray,xs=r=>gh(r)==="[object Map]",Dm=r=>typeof r=="string",Ql=r=>typeof r=="symbol",Ua=r=>r!==null&&typeof r=="object",Rm=Object.prototype.toString,gh=r=>Rm.call(r),_h=r=>gh(r).slice(8,-1),ec=r=>Dm(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,Im=r=>{const e=Object.create(null);return t=>e[t]||(e[t]=r(t))},Om=Im(r=>r.charAt(0).toUpperCase()+r.slice(1)),xh=(r,e)=>r!==e&&(r===r||e===e),hl=new WeakMap,is=[],xn,Fi=Symbol("iterate"),dl=Symbol("Map key iterate");function Fm(r){return r&&r._isEffect===!0}function Nm(r,e=Lm){Fm(r)&&(r=r.raw);const t=km(r,e);return e.lazy||t(),t}function zm(r){r.active&&(vh(r),r.options.onStop&&r.options.onStop(),r.active=!1)}var Um=0;function km(r,e){const t=function(){if(!t.active)return r();if(!is.includes(t)){vh(t);try{return Gm(),is.push(t),xn=t,r()}finally{is.pop(),yh(),xn=is[is.length-1]}}};return t.id=Um++,t.allowRecurse=!!e.allowRecurse,t._isEffect=!0,t.active=!0,t.raw=r,t.deps=[],t.options=e,t}function vh(r){const{deps:e}=r;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(r);e.length=0}}var Rr=!0,tc=[];function Bm(){tc.push(Rr),Rr=!1}function Gm(){tc.push(Rr),Rr=!0}function yh(){const r=tc.pop();Rr=r===void 0?!0:r}function mn(r,e,t){if(!Rr||xn===void 0)return;let n=hl.get(r);n||hl.set(r,n=new Map);let i=n.get(t);i||n.set(t,i=new Set),i.has(xn)||(i.add(xn),xn.deps.push(i),xn.options.onTrack&&xn.options.onTrack({effect:xn,target:r,type:e,key:t}))}function oi(r,e,t,n,i,s){const a=hl.get(r);if(!a)return;const o=new Set,l=u=>{u&&u.forEach(f=>{(f!==xn||f.allowRecurse)&&o.add(f)})};if(e==="clear")a.forEach(l);else if(t==="length"&&Oi(r))a.forEach((u,f)=>{(f==="length"||f>=n)&&l(u)});else switch(t!==void 0&&l(a.get(t)),e){case"add":Oi(r)?ec(t)&&l(a.get("length")):(l(a.get(Fi)),xs(r)&&l(a.get(dl)));break;case"delete":Oi(r)||(l(a.get(Fi)),xs(r)&&l(a.get(dl)));break;case"set":xs(r)&&l(a.get(Fi));break}const c=u=>{u.options.onTrigger&&u.options.onTrigger({effect:u,target:r,key:t,type:e,newValue:n,oldValue:i,oldTarget:s}),u.options.scheduler?u.options.scheduler(u):u()};o.forEach(c)}var Vm=Cm("__proto__,__v_isRef,__isVue"),bh=new Set(Object.getOwnPropertyNames(Symbol).map(r=>Symbol[r]).filter(Ql)),Hm=ka(),Wm=ka(!1,!0),qm=ka(!0),Xm=ka(!0,!0),ya={};["includes","indexOf","lastIndexOf"].forEach(r=>{const e=Array.prototype[r];ya[r]=function(...t){const n=Ve(this);for(let s=0,a=this.length;s<a;s++)mn(n,"get",s+"");const i=e.apply(n,t);return i===-1||i===!1?e.apply(n,t.map(Ve)):i}});["push","pop","shift","unshift","splice"].forEach(r=>{const e=Array.prototype[r];ya[r]=function(...t){Bm();const n=e.apply(this,t);return yh(),n}});function ka(r=!1,e=!1){return function(n,i,s){if(i==="__v_isReactive")return!r;if(i==="__v_isReadonly")return r;if(i==="__v_raw"&&s===(r?e?ng:Nh:e?tg:Fh).get(n))return n;const a=Oi(n);if(!r&&a&&za(ya,i))return Reflect.get(ya,i,s);const o=Reflect.get(n,i,s);return(Ql(i)?bh.has(i):Vm(i))||(r||mn(n,"get",i),e)?o:pl(o)?!a||!ec(i)?o.value:o:Ua(o)?r?zh(o):sc(o):o}}var jm=Mh(),Ym=Mh(!0);function Mh(r=!1){return function(t,n,i,s){let a=t[n];if(!r&&(i=Ve(i),a=Ve(a),!Oi(t)&&pl(a)&&!pl(i)))return a.value=i,!0;const o=Oi(t)&&ec(n)?Number(n)<t.length:za(t,n),l=Reflect.set(t,n,i,s);return t===Ve(s)&&(o?xh(i,a)&&oi(t,"set",n,i,a):oi(t,"add",n,i)),l}}function $m(r,e){const t=za(r,e),n=r[e],i=Reflect.deleteProperty(r,e);return i&&t&&oi(r,"delete",e,void 0,n),i}function Zm(r,e){const t=Reflect.has(r,e);return(!Ql(e)||!bh.has(e))&&mn(r,"has",e),t}function Km(r){return mn(r,"iterate",Oi(r)?"length":Fi),Reflect.ownKeys(r)}var Sh={get:Hm,set:jm,deleteProperty:$m,has:Zm,ownKeys:Km},wh={get:qm,set(r,e){return console.warn(`Set operation on key "${String(e)}" failed: target is readonly.`,r),!0},deleteProperty(r,e){return console.warn(`Delete operation on key "${String(e)}" failed: target is readonly.`,r),!0}};mh({},Sh,{get:Wm,set:Ym});mh({},wh,{get:Xm});var nc=r=>Ua(r)?sc(r):r,ic=r=>Ua(r)?zh(r):r,rc=r=>r,Ba=r=>Reflect.getPrototypeOf(r);function Ga(r,e,t=!1,n=!1){r=r.__v_raw;const i=Ve(r),s=Ve(e);e!==s&&!t&&mn(i,"get",e),!t&&mn(i,"get",s);const{has:a}=Ba(i),o=n?rc:t?ic:nc;if(a.call(i,e))return o(r.get(e));if(a.call(i,s))return o(r.get(s));r!==i&&r.get(e)}function Va(r,e=!1){const t=this.__v_raw,n=Ve(t),i=Ve(r);return r!==i&&!e&&mn(n,"has",r),!e&&mn(n,"has",i),r===i?t.has(r):t.has(r)||t.has(i)}function Ha(r,e=!1){return r=r.__v_raw,!e&&mn(Ve(r),"iterate",Fi),Reflect.get(r,"size",r)}function Th(r){r=Ve(r);const e=Ve(this);return Ba(e).has.call(e,r)||(e.add(r),oi(e,"add",r,r)),this}function Eh(r,e){e=Ve(e);const t=Ve(this),{has:n,get:i}=Ba(t);let s=n.call(t,r);s?Oh(t,n,r):(r=Ve(r),s=n.call(t,r));const a=i.call(t,r);return t.set(r,e),s?xh(e,a)&&oi(t,"set",r,e,a):oi(t,"add",r,e),this}function Ah(r){const e=Ve(this),{has:t,get:n}=Ba(e);let i=t.call(e,r);i?Oh(e,t,r):(r=Ve(r),i=t.call(e,r));const s=n?n.call(e,r):void 0,a=e.delete(r);return i&&oi(e,"delete",r,void 0,s),a}function Ch(){const r=Ve(this),e=r.size!==0,t=xs(r)?new Map(r):new Set(r),n=r.clear();return e&&oi(r,"clear",void 0,void 0,t),n}function Wa(r,e){return function(n,i){const s=this,a=s.__v_raw,o=Ve(a),l=e?rc:r?ic:nc;return!r&&mn(o,"iterate",Fi),a.forEach((c,u)=>n.call(i,l(c),l(u),s))}}function Hs(r,e,t){return function(...n){const i=this.__v_raw,s=Ve(i),a=xs(s),o=r==="entries"||r===Symbol.iterator&&a,l=r==="keys"&&a,c=i[r](...n),u=t?rc:e?ic:nc;return!e&&mn(s,"iterate",l?dl:Fi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Jn(r){return function(...e){{const t=e[0]?`on key "${e[0]}" `:"";console.warn(`${Om(r)} operation ${t}failed: target is readonly.`,Ve(this))}return r==="delete"?!1:this}}var Lh={get(r){return Ga(this,r)},get size(){return Ha(this)},has:Va,add:Th,set:Eh,delete:Ah,clear:Ch,forEach:Wa(!1,!1)},Ph={get(r){return Ga(this,r,!1,!0)},get size(){return Ha(this)},has:Va,add:Th,set:Eh,delete:Ah,clear:Ch,forEach:Wa(!1,!0)},Dh={get(r){return Ga(this,r,!0)},get size(){return Ha(this,!0)},has(r){return Va.call(this,r,!0)},add:Jn("add"),set:Jn("set"),delete:Jn("delete"),clear:Jn("clear"),forEach:Wa(!0,!1)},Rh={get(r){return Ga(this,r,!0,!0)},get size(){return Ha(this,!0)},has(r){return Va.call(this,r,!0)},add:Jn("add"),set:Jn("set"),delete:Jn("delete"),clear:Jn("clear"),forEach:Wa(!0,!0)},Jm=["keys","values","entries",Symbol.iterator];Jm.forEach(r=>{Lh[r]=Hs(r,!1,!1),Dh[r]=Hs(r,!0,!1),Ph[r]=Hs(r,!1,!0),Rh[r]=Hs(r,!0,!0)});function Ih(r,e){const t=e?r?Rh:Ph:r?Dh:Lh;return(n,i,s)=>i==="__v_isReactive"?!r:i==="__v_isReadonly"?r:i==="__v_raw"?n:Reflect.get(za(t,i)&&i in n?t:n,i,s)}var Qm={get:Ih(!1,!1)},eg={get:Ih(!0,!1)};function Oh(r,e,t){const n=Ve(t);if(n!==t&&e.call(r,n)){const i=_h(r);console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var Fh=new WeakMap,tg=new WeakMap,Nh=new WeakMap,ng=new WeakMap;function ig(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rg(r){return r.__v_skip||!Object.isExtensible(r)?0:ig(_h(r))}function sc(r){return r&&r.__v_isReadonly?r:Uh(r,!1,Sh,Qm,Fh)}function zh(r){return Uh(r,!0,wh,eg,Nh)}function Uh(r,e,t,n,i){if(!Ua(r))return console.warn(`value cannot be made reactive: ${String(r)}`),r;if(r.__v_raw&&!(e&&r.__v_isReactive))return r;const s=i.get(r);if(s)return s;const a=rg(r);if(a===0)return r;const o=new Proxy(r,a===2?n:t);return i.set(r,o),o}function Ve(r){return r&&Ve(r.__v_raw)||r}function pl(r){return Boolean(r&&r.__v_isRef===!0)}gn("nextTick",()=>eh);gn("dispatch",r=>_s.bind(_s,r));gn("watch",(r,{evaluateLater:e,effect:t})=>(n,i)=>{let s=e(n),a=!0,o,l=t(()=>s(c=>{JSON.stringify(c),a?o=c:queueMicrotask(()=>{i(c,o),o=c}),a=!1}));r._x_effects.delete(l)});gn("store",Mm);gn("data",r=>Uf(r));gn("root",r=>Ia(r));gn("refs",r=>(r._x_refs_proxy||(r._x_refs_proxy=Os(sg(r))),r._x_refs_proxy));function sg(r){let e=[],t=r;for(;t;)t._x_refs&&e.push(t._x_refs),t=t.parentNode;return e}var lo={};function kh(r){return lo[r]||(lo[r]=0),++lo[r]}function ag(r,e){return Oa(r,t=>{if(t._x_ids&&t._x_ids[e])return!0})}function og(r,e){r._x_ids||(r._x_ids={}),r._x_ids[e]||(r._x_ids[e]=kh(e))}gn("id",r=>(e,t=null)=>{let n=ag(r,e),i=n?n._x_ids[e]:kh(e);return t?`${e}-${i}-${t}`:`${e}-${i}`});gn("el",r=>r);Bh("Focus","focus","focus");Bh("Persist","persist","persist");function Bh(r,e,t){gn(e,n=>Dr(`You can't use [$${directiveName}] without first installing the "${r}" plugin here: https://alpinejs.dev/plugins/${t}`,n))}et("modelable",(r,{expression:e},{effect:t,evaluateLater:n})=>{let i=n(e),s=()=>{let c;return i(u=>c=u),c},a=n(`${e} = __placeholder`),o=c=>a(()=>{},{scope:{__placeholder:c}}),l=s();o(l),queueMicrotask(()=>{if(!r._x_model)return;r._x_removeModelListeners.default();let c=r._x_model.get,u=r._x_model.set;t(()=>o(c())),t(()=>u(s()))})});et("teleport",(r,{expression:e},{cleanup:t})=>{r.tagName.toLowerCase()!=="template"&&Dr("x-teleport can only be used on a <template> tag",r);let n=document.querySelector(e);n||Dr(`Cannot find x-teleport element for selector: "${e}"`);let i=r.content.cloneNode(!0).firstElementChild;r._x_teleport=i,i._x_teleportBack=r,r._x_forwardEvents&&r._x_forwardEvents.forEach(s=>{i.addEventListener(s,a=>{a.stopPropagation(),r.dispatchEvent(new a.constructor(a.type,a))})}),Is(i,{},r),ut(()=>{n.appendChild(i),ai(i),i._x_ignore=!0}),t(()=>i.remove())});var Gh=()=>{};Gh.inline=(r,{modifiers:e},{cleanup:t})=>{e.includes("self")?r._x_ignoreSelf=!0:r._x_ignore=!0,t(()=>{e.includes("self")?delete r._x_ignoreSelf:delete r._x_ignore})};et("ignore",Gh);et("effect",(r,{expression:e},{effect:t})=>t(bt(r,e)));function Vh(r,e,t,n){let i=r,s=l=>n(l),a={},o=(l,c)=>u=>c(l,u);if(t.includes("dot")&&(e=lg(e)),t.includes("camel")&&(e=cg(e)),t.includes("passive")&&(a.passive=!0),t.includes("capture")&&(a.capture=!0),t.includes("window")&&(i=window),t.includes("document")&&(i=document),t.includes("prevent")&&(s=o(s,(l,c)=>{c.preventDefault(),l(c)})),t.includes("stop")&&(s=o(s,(l,c)=>{c.stopPropagation(),l(c)})),t.includes("self")&&(s=o(s,(l,c)=>{c.target===r&&l(c)})),(t.includes("away")||t.includes("outside"))&&(i=document,s=o(s,(l,c)=>{r.contains(c.target)||c.target.isConnected!==!1&&(r.offsetWidth<1&&r.offsetHeight<1||r._x_isShown!==!1&&l(c))})),t.includes("once")&&(s=o(s,(l,c)=>{l(c),i.removeEventListener(e,s,a)})),s=o(s,(l,c)=>{fg(e)&&hg(c,t)||l(c)}),t.includes("debounce")){let l=t[t.indexOf("debounce")+1]||"invalid-wait",c=ml(l.split("ms")[0])?Number(l.split("ms")[0]):250;s=uh(s,c)}if(t.includes("throttle")){let l=t[t.indexOf("throttle")+1]||"invalid-wait",c=ml(l.split("ms")[0])?Number(l.split("ms")[0]):250;s=fh(s,c)}return i.addEventListener(e,s,a),()=>{i.removeEventListener(e,s,a)}}function lg(r){return r.replace(/-/g,".")}function cg(r){return r.toLowerCase().replace(/-(\w)/g,(e,t)=>t.toUpperCase())}function ml(r){return!Array.isArray(r)&&!isNaN(r)}function ug(r){return r.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function fg(r){return["keydown","keyup"].includes(r)}function hg(r,e){let t=e.filter(s=>!["window","document","prevent","stop","once"].includes(s));if(t.includes("debounce")){let s=t.indexOf("debounce");t.splice(s,ml((t[s+1]||"invalid-wait").split("ms")[0])?2:1)}if(t.length===0||t.length===1&&Bc(r.key).includes(t[0]))return!1;const i=["ctrl","shift","alt","meta","cmd","super"].filter(s=>t.includes(s));return t=t.filter(s=>!i.includes(s)),!(i.length>0&&i.filter(a=>((a==="cmd"||a==="super")&&(a="meta"),r[`${a}Key`])).length===i.length&&Bc(r.key).includes(t[0]))}function Bc(r){if(!r)return[];r=ug(r);let e={ctrl:"control",slash:"/",space:"-",spacebar:"-",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",equal:"="};return e[r]=r,Object.keys(e).map(t=>{if(e[t]===r)return t}).filter(t=>t)}et("model",(r,{modifiers:e,expression:t},{effect:n,cleanup:i})=>{let s=bt(r,t),a=`${t} = rightSideOfExpression($event, ${t})`,o=bt(r,a);var l=r.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(r.type)||e.includes("lazy")?"change":"input";let c=dg(r,e,t),u=Vh(r,l,e,h=>{o(()=>{},{scope:{$event:h,rightSideOfExpression:c}})});r._x_removeModelListeners||(r._x_removeModelListeners={}),r._x_removeModelListeners.default=u,i(()=>r._x_removeModelListeners.default());let f=bt(r,`${t} = __placeholder`);r._x_model={get(){let h;return s(m=>h=m),h},set(h){f(()=>{},{scope:{__placeholder:h}})}},r._x_forceModelUpdate=()=>{s(h=>{h===void 0&&t.match(/\./)&&(h=""),window.fromModel=!0,ut(()=>lh(r,"value",h)),delete window.fromModel})},n(()=>{e.includes("unintrusive")&&document.activeElement.isSameNode(r)||r._x_forceModelUpdate()})});function dg(r,e,t){return r.type==="radio"&&ut(()=>{r.hasAttribute("name")||r.setAttribute("name",t)}),(n,i)=>ut(()=>{if(n instanceof CustomEvent&&n.detail!==void 0)return n.detail||n.target.value;if(r.type==="checkbox")if(Array.isArray(i)){let s=e.includes("number")?co(n.target.value):n.target.value;return n.target.checked?i.concat([s]):i.filter(a=>!pg(a,s))}else return n.target.checked;else{if(r.tagName.toLowerCase()==="select"&&r.multiple)return e.includes("number")?Array.from(n.target.selectedOptions).map(s=>{let a=s.value||s.text;return co(a)}):Array.from(n.target.selectedOptions).map(s=>s.value||s.text);{let s=n.target.value;return e.includes("number")?co(s):e.includes("trim")?s.trim():s}}})}function co(r){let e=r?parseFloat(r):null;return mg(e)?e:r}function pg(r,e){return r==e}function mg(r){return!Array.isArray(r)&&!isNaN(r)}et("cloak",r=>queueMicrotask(()=>ut(()=>r.removeAttribute(Qr("cloak")))));sh(()=>`[${Qr("init")}]`);et("init",Na((r,{expression:e},{evaluate:t})=>typeof e=="string"?!!e.trim()&&t(e,{},!1):t(e,{},!1)));et("text",(r,{expression:e},{effect:t,evaluateLater:n})=>{let i=n(e);t(()=>{i(s=>{ut(()=>{r.textContent=s})})})});et("html",(r,{expression:e},{effect:t,evaluateLater:n})=>{let i=n(e);t(()=>{i(s=>{ut(()=>{r.innerHTML=s,r._x_ignoreSelf=!0,ai(r),delete r._x_ignoreSelf})})})});$l(Yf(":",$f(Qr("bind:"))));et("bind",(r,{value:e,modifiers:t,expression:n,original:i},{effect:s})=>{if(!e){let o={};wm(o),bt(r,n)(c=>{dh(r,c,i)},{scope:o});return}if(e==="key")return gg(r,n);let a=bt(r,n);s(()=>a(o=>{o===void 0&&typeof n=="string"&&n.match(/\./)&&(o=""),ut(()=>lh(r,e,o,t))}))});function gg(r,e){r._x_keyExpression=e}rh(()=>`[${Qr("data")}]`);et("data",Na((r,{expression:e},{cleanup:t})=>{e=e===""?"{}":e;let n={};rl(n,r);let i={};Em(i,n);let s=wr(r,e,{scope:i});s===void 0&&(s={}),rl(s,r);let a=Jr(s);kf(a);let o=Is(r,a);a.init&&wr(r,a.init),t(()=>{a.destroy&&wr(r,a.destroy),o()})}));et("show",(r,{modifiers:e,expression:t},{effect:n})=>{let i=bt(r,t);r._x_doHide||(r._x_doHide=()=>{ut(()=>{r.style.setProperty("display","none",e.includes("important")?"important":void 0)})}),r._x_doShow||(r._x_doShow=()=>{ut(()=>{r.style.length===1&&r.style.display==="none"?r.removeAttribute("style"):r.style.removeProperty("display")})});let s=()=>{r._x_doHide(),r._x_isShown=!1},a=()=>{r._x_doShow(),r._x_isShown=!0},o=()=>setTimeout(a),l=cl(f=>f?a():s(),f=>{typeof r._x_toggleAndCascadeWithTransitions=="function"?r._x_toggleAndCascadeWithTransitions(r,f,a,s):f?o():s()}),c,u=!0;n(()=>i(f=>{!u&&f===c||(e.includes("immediate")&&(f?o():s()),l(f),c=f,u=!1)}))});et("for",(r,{expression:e},{effect:t,cleanup:n})=>{let i=xg(e),s=bt(r,i.items),a=bt(r,r._x_keyExpression||"index");r._x_prevKeys=[],r._x_lookup={},t(()=>_g(r,i,s,a)),n(()=>{Object.values(r._x_lookup).forEach(o=>o.remove()),delete r._x_prevKeys,delete r._x_lookup})});function _g(r,e,t,n){let i=a=>typeof a=="object"&&!Array.isArray(a),s=r;t(a=>{vg(a)&&a>=0&&(a=Array.from(Array(a).keys(),d=>d+1)),a===void 0&&(a=[]);let o=r._x_lookup,l=r._x_prevKeys,c=[],u=[];if(i(a))a=Object.entries(a).map(([d,g])=>{let y=Gc(e,g,d,a);n(b=>u.push(b),{scope:{index:d,...y}}),c.push(y)});else for(let d=0;d<a.length;d++){let g=Gc(e,a[d],d,a);n(y=>u.push(y),{scope:{index:d,...g}}),c.push(g)}let f=[],h=[],m=[],_=[];for(let d=0;d<l.length;d++){let g=l[d];u.indexOf(g)===-1&&m.push(g)}l=l.filter(d=>!m.includes(d));let p="template";for(let d=0;d<u.length;d++){let g=u[d],y=l.indexOf(g);if(y===-1)l.splice(d,0,g),f.push([p,d]);else if(y!==d){let b=l.splice(d,1)[0],M=l.splice(y-1,1)[0];l.splice(d,0,M),l.splice(y,0,b),h.push([b,M])}else _.push(g);p=g}for(let d=0;d<m.length;d++){let g=m[d];o[g]._x_effects&&o[g]._x_effects.forEach(Pf),o[g].remove(),o[g]=null,delete o[g]}for(let d=0;d<h.length;d++){let[g,y]=h[d],b=o[g],M=o[y],x=document.createElement("div");ut(()=>{M.after(x),b.after(M),M._x_currentIfEl&&M.after(M._x_currentIfEl),x.before(b),b._x_currentIfEl&&b.after(b._x_currentIfEl),x.remove()}),Nc(M,c[u.indexOf(y)])}for(let d=0;d<f.length;d++){let[g,y]=f[d],b=g==="template"?s:o[g];b._x_currentIfEl&&(b=b._x_currentIfEl);let M=c[y],x=u[y],E=document.importNode(s.content,!0).firstElementChild;Is(E,Jr(M),s),ut(()=>{b.after(E),ai(E)}),typeof x=="object"&&Dr("x-for key cannot be an object, it must be a string or an integer",s),o[x]=E}for(let d=0;d<_.length;d++)Nc(o[_[d]],c[u.indexOf(_[d])]);s._x_prevKeys=u})}function xg(r){let e=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,t=/^\s*\(|\)\s*$/g,n=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,i=r.match(n);if(!i)return;let s={};s.items=i[2].trim();let a=i[1].replace(t,"").trim(),o=a.match(e);return o?(s.item=a.replace(e,"").trim(),s.index=o[1].trim(),o[2]&&(s.collection=o[2].trim())):s.item=a,s}function Gc(r,e,t,n){let i={};return/^\[.*\]$/.test(r.item)&&Array.isArray(e)?r.item.replace("[","").replace("]","").split(",").map(a=>a.trim()).forEach((a,o)=>{i[a]=e[o]}):/^\{.*\}$/.test(r.item)&&!Array.isArray(e)&&typeof e=="object"?r.item.replace("{","").replace("}","").split(",").map(a=>a.trim()).forEach(a=>{i[a]=e[a]}):i[r.item]=e,r.index&&(i[r.index]=t),r.collection&&(i[r.collection]=n),i}function vg(r){return!Array.isArray(r)&&!isNaN(r)}function Hh(){}Hh.inline=(r,{expression:e},{cleanup:t})=>{let n=Ia(r);n._x_refs||(n._x_refs={}),n._x_refs[e]=r,t(()=>delete n._x_refs[e])};et("ref",Hh);et("if",(r,{expression:e},{effect:t,cleanup:n})=>{let i=bt(r,e),s=()=>{if(r._x_currentIfEl)return r._x_currentIfEl;let o=r.content.cloneNode(!0).firstElementChild;return Is(o,{},r),ut(()=>{r.after(o),ai(o)}),r._x_currentIfEl=o,r._x_undoIf=()=>{Gi(o,l=>{l._x_effects&&l._x_effects.forEach(Pf)}),o.remove(),delete r._x_currentIfEl},o},a=()=>{!r._x_undoIf||(r._x_undoIf(),delete r._x_undoIf)};t(()=>i(o=>{o?s():a()})),n(()=>r._x_undoIf&&r._x_undoIf())});et("id",(r,{expression:e},{evaluate:t})=>{t(e).forEach(i=>og(r,i))});$l(Yf("@",$f(Qr("on:"))));et("on",Na((r,{value:e,modifiers:t,expression:n},{cleanup:i})=>{let s=n?bt(r,n):()=>{};r.tagName.toLowerCase()==="template"&&(r._x_forwardEvents||(r._x_forwardEvents=[]),r._x_forwardEvents.includes(e)||r._x_forwardEvents.push(e));let a=Vh(r,e,t,o=>{s(()=>{},{scope:{$event:o},params:[o]})});i(()=>a())}));qa("Collapse","collapse","collapse");qa("Intersect","intersect","intersect");qa("Focus","trap","focus");qa("Mask","mask","mask");function qa(r,e,t){et(e,n=>Dr(`You can't use [x-${e}] without first installing the "${r}" plugin here: https://alpinejs.dev/plugins/${t}`,n))}Fs.setEvaluator(Hf);Fs.setReactivityEngine({reactive:sc,effect:Nm,release:zm,raw:Ve});var yg=Fs,Xa=yg;function St(){if(!(this instanceof St))return new St;this.size=0,this.uid=0,this.selectors=[],this.selectorObjects={},this.indexes=Object.create(this.indexes),this.activeIndexes=[]}var rs=window.document.documentElement,bg=rs.matches||rs.webkitMatchesSelector||rs.mozMatchesSelector||rs.oMatchesSelector||rs.msMatchesSelector;St.prototype.matchesSelector=function(r,e){return bg.call(r,e)};St.prototype.querySelectorAll=function(r,e){return e.querySelectorAll(r)};St.prototype.indexes=[];var Mg=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;St.prototype.indexes.push({name:"ID",selector:function(e){var t;if(t=e.match(Mg))return t[0].slice(1)},element:function(e){if(e.id)return[e.id]}});var Sg=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;St.prototype.indexes.push({name:"CLASS",selector:function(e){var t;if(t=e.match(Sg))return t[0].slice(1)},element:function(e){var t=e.className;if(t){if(typeof t=="string")return t.split(/\s/);if(typeof t=="object"&&"baseVal"in t)return t.baseVal.split(/\s/)}}});var wg=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;St.prototype.indexes.push({name:"TAG",selector:function(e){var t;if(t=e.match(wg))return t[0].toUpperCase()},element:function(e){return[e.nodeName.toUpperCase()]}});St.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}};var gl;typeof window.Map=="function"?gl=window.Map:gl=function(){function r(){this.map={}}return r.prototype.get=function(e){return this.map[e+" "]},r.prototype.set=function(e,t){this.map[e+" "]=t},r}();var Vc=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function Wh(r,e){r=r.slice(0).concat(r.default);var t=r.length,n,i,s,a,o=e,l,c,u=[];do if(Vc.exec(""),(s=Vc.exec(o))&&(o=s[3],s[2]||!o)){for(n=0;n<t;n++)if(c=r[n],l=c.selector(s[1])){for(i=u.length,a=!1;i--;)if(u[i].index===c&&u[i].key===l){a=!0;break}a||u.push({index:c,key:l});break}}while(s);return u}function Tg(r,e){var t,n,i;for(t=0,n=r.length;t<n;t++)if(i=r[t],e.isPrototypeOf(i))return i}St.prototype.logDefaultIndexUsed=function(){};St.prototype.add=function(r,e){var t,n,i,s,a,o,l,c,u=this.activeIndexes,f=this.selectors,h=this.selectorObjects;if(typeof r=="string"){for(t={id:this.uid++,selector:r,data:e},h[t.id]=t,l=Wh(this.indexes,r),n=0;n<l.length;n++)c=l[n],s=c.key,i=c.index,a=Tg(u,i),a||(a=Object.create(i),a.map=new gl,u.push(a)),i===this.indexes.default&&this.logDefaultIndexUsed(t),o=a.map.get(s),o||(o=[],a.map.set(s,o)),o.push(t);this.size++,f.push(r)}};St.prototype.remove=function(r,e){if(typeof r=="string"){var t,n,i,s,a,o,l,c,u=this.activeIndexes,f=this.selectors=[],h=this.selectorObjects,m={},_=arguments.length===1;for(t=Wh(this.indexes,r),i=0;i<t.length;i++)for(n=t[i],s=u.length;s--;)if(o=u[s],n.index.isPrototypeOf(o)){if(l=o.map.get(n.key),l)for(a=l.length;a--;)c=l[a],c.selector===r&&(_||c.data===e)&&(l.splice(a,1),m[c.id]=!0);break}for(i in m)delete h[i],this.size--;for(i in h)f.push(h[i].selector)}};function qh(r,e){return r.id-e.id}St.prototype.queryAll=function(r){if(!this.selectors.length)return[];var e={},t=[],n=this.querySelectorAll(this.selectors.join(", "),r),i,s,a,o,l,c,u,f;for(i=0,a=n.length;i<a;i++)for(l=n[i],c=this.matches(l),s=0,o=c.length;s<o;s++)f=c[s],e[f.id]?u=e[f.id]:(u={id:f.id,selector:f.selector,data:f.data,elements:[]},e[f.id]=u,t.push(u)),u.elements.push(l);return t.sort(qh)};St.prototype.matches=function(r){if(!r)return[];var e,t,n,i,s,a,o,l,c,u,f,h=this.activeIndexes,m={},_=[];for(e=0,i=h.length;e<i;e++)if(o=h[e],l=o.element(r),l){for(t=0,s=l.length;t<s;t++)if(c=o.map.get(l[t]))for(n=0,a=c.length;n<a;n++)u=c[n],f=u.id,!m[f]&&this.matchesSelector(r,u.selector)&&(m[f]=!0,_.push(u))}return _.sort(qh)};const vr={},fn={},_l=["mouseenter","mouseleave","pointerenter","pointerleave","blur","focus"];function Hc(r){fn[r]===void 0&&(fn[r]=[])}function Eg(r,e){if(fn[r])for(let t=0;t<fn[r].length;t++)fn[r][t](...e)}function Wc(r){return typeof r=="string"?document.querySelectorAll(r):r}function Ws(r){let e=Ag(vr[r.type],r.target);if(e.length)for(let t=0;t<e.length;t++)for(let n=0;n<e[t].stack.length;n++)_l.indexOf(r.type)!==-1?(qc(r,e[t].delegatedTarget),r.target===e[t].delegatedTarget&&e[t].stack[n].data(r)):(qc(r,e[t].delegatedTarget),e[t].stack[n].data(r))}function Ag(r,e){const t=[];let n=e;do{if(n.nodeType!==1)break;const i=r.matches(n);i.length&&t.push({delegatedTarget:n,stack:i})}while(n=n.parentElement);return t}function qc(r,e){Object.defineProperty(r,"currentTarget",{configurable:!0,enumerable:!0,get:()=>e})}function Xc(r){return JSON.parse(JSON.stringify(r))}class Cg{bindAll(e,t){t||(t=Object.getOwnPropertyNames(Object.getPrototypeOf(e)));for(let n=0;n<t.length;n++)e[t[n]]=e[t[n]].bind(e)}on(e,t,n,i){const s=e.split(" ");for(let a=0;a<s.length;a++){if(typeof t=="function"&&n===void 0){Hc(s[a]),fn[s[a]].push(t);continue}if(t.nodeType&&t.nodeType===1||t===window||t===document){t.addEventListener(s[a],n,i);continue}t=Wc(t);for(let o=0;o<t.length;o++)t[o].addEventListener(s[a],n,i)}}delegate(e,t,n){const i=e.split(" ");for(let s=0;s<i.length;s++){let a=vr[i[s]];a===void 0&&(a=new St,vr[i[s]]=a,_l.indexOf(i[s])!==-1?document.addEventListener(i[s],Ws,!0):document.addEventListener(i[s],Ws)),a.add(t,n)}}off(e,t,n,i){const s=e.split(" ");for(let a=0;a<s.length;a++){if(t===void 0){fn[s[a]]=[];continue}if(typeof t=="function"){Hc(s[a]);for(let l=0;l<fn[s[a]].length;l++)fn[s[a]][l]===t&&fn[s[a]].splice(l,1);continue}const o=vr[s[a]];if(o!==void 0&&(o.remove(t,n),o.size===0)){delete vr[s[a]],_l.indexOf(s[a])!==-1?document.removeEventListener(s[a],Ws,!0):document.removeEventListener(s[a],Ws);continue}if(t.removeEventListener!==void 0){t.removeEventListener(s[a],n,i);continue}t=Wc(t);for(let l=0;l<t.length;l++)t[l].removeEventListener(s[a],n,i)}}emit(e,...t){Eg(e,t)}debugDelegated(){return Xc(vr)}debugBus(){return Xc(fn)}}const _i=new Cg,Lg=new DOMParser;function Pg(r){return typeof r=="string"?Lg.parseFromString(r,"text/html"):r}function xi(r){const e=new URL(r,window.location.origin);let t=null;return e.hash.length&&(t=r.replace(e.hash,"")),{hasHash:e.hash.length>0,pathname:e.pathname,host:e.host,raw:r,href:t||e.href}}function Dg(r){r.parentNode.replaceChild(xl(r),r)}function Rg(r){r.parentNode.tagName==="HEAD"?document.head.appendChild(xl(r)):document.body.appendChild(xl(r))}function xl(r){const e=document.createElement("SCRIPT");for(let t=0;t<r.attributes.length;t++){const n=r.attributes[t];e.setAttribute(n.nodeName,n.nodeValue)}return r.innerHTML&&(e.innerHTML=r.innerHTML),e}class Ir{constructor({wrapper:e}){this.wrapper=e}leave(e){return new Promise(t=>{this.onLeave({...e,done:t})})}enter(e){return new Promise(t=>{this.onEnter({...e,done:t})})}onLeave({from:e,trigger:t,done:n}){n()}onEnter({to:e,trigger:t,done:n}){n()}}class Ss{constructor({content:e,page:t,title:n,wrapper:i}){this._contentString=e.outerHTML,this._DOM=null,this.page=t,this.title=n,this.wrapper=i,this.content=this.wrapper.lastElementChild}onEnter(){}onEnterCompleted(){}onLeave(){}onLeaveCompleted(){}initialLoad(){this.onEnter(),this.onEnterCompleted()}update(){document.title=this.title,this.wrapper.appendChild(this._DOM.firstElementChild),this.content=this.wrapper.lastElementChild,this._DOM=null}createDom(){this._DOM||(this._DOM=document.createElement("div"),this._DOM.innerHTML=this._contentString)}remove(){this.wrapper.firstElementChild.remove()}enter(e,t){return new Promise(n=>{this.onEnter(),e.enter({trigger:t,to:this.content}).then(()=>{this.onEnterCompleted(),n()})})}leave(e,t,n){return new Promise(i=>{this.onLeave(),e.leave({trigger:t,from:this.content}).then(()=>{n&&this.remove(),this.onLeaveCompleted(),i()})})}}class Ig{constructor(){Wn(this,"data",new Map);Wn(this,"regexCache",new Map)}add(e,t,n){this.data.has(e)||(this.data.set(e,new Map),this.regexCache.set(e,new RegExp(`^${e}$`))),this.data.get(e).set(t,n),this.regexCache.set(t,new RegExp(`^${t}$`))}findMatch(e,t){for(const[n,i]of this.data)if(e.pathname.match(this.regexCache.get(n))){for(const[s,a]of i)if(t.pathname.match(this.regexCache.get(s)))return a;break}return null}}const jc="A transition is currently in progress";class Og{constructor(e={}){Wn(this,"isTransitioning",!1);Wn(this,"currentCacheEntry",null);Wn(this,"cache",new Map);Wn(this,"onClick",e=>{if(!(e.metaKey||e.ctrlKey)){const t=xi(e.currentTarget.href);if(this.currentLocation=xi(window.location.href),this.currentLocation.host!==t.host)return;if(this.currentLocation.href!==t.href||this.currentLocation.hasHash&&!t.hasHash){e.preventDefault(),this.navigateTo(t.raw,e.currentTarget.dataset.transition||!1,e.currentTarget).catch(n=>console.warn(n));return}!this.currentLocation.hasHash&&!t.hasHash&&e.preventDefault()}});Wn(this,"onPopstate",()=>{if(window.location.pathname===this.currentLocation.pathname&&!this.isPopping)return!1;if(!this.allowInterruption&&(this.isTransitioning||this.isPopping))return window.history.pushState({},"",this.popTarget),console.warn(jc),!1;this.isPopping||(this.popTarget=window.location.href),this.isPopping=!0,this.navigateTo(window.location.href,!1,"popstate")});const{links:t="a:not([target]):not([href^=\\#]):not([data-taxi-ignore])",removeOldContent:n=!0,allowInterruption:i=!1,bypassCache:s=!1,renderers:a={default:Ss},transitions:o={default:Ir},reloadJsFilter:l=c=>c.dataset.taxiReload!==void 0}=e;this.renderers=a,this.transitions=o,this.defaultRenderer=this.renderers.default||Ss,this.defaultTransition=this.transitions.default||Ir,this.wrapper=document.querySelector("[data-taxi]"),this.reloadJsFilter=l,this.removeOldContent=n,this.allowInterruption=i,this.bypassCache=s,this.cache=new Map,this.isPopping=!1,this.attachEvents(t),this.currentLocation=xi(window.location.href),this.cache.set(this.currentLocation.href,this.createCacheEntry(document.cloneNode(!0))),this.currentCacheEntry=this.cache.get(this.currentLocation.href),this.currentCacheEntry.renderer.initialLoad()}setDefaultRenderer(e){this.defaultRenderer=this.renderers[e]}setDefaultTransition(e){this.defaultTransition=this.transitions[e]}addRoute(e,t,n){this.router||(this.router=new Ig),this.router.add(e,t,n)}preload(e,t=!1){return e=xi(e).href,this.cache.has(e)?Promise.resolve():this.fetch(e,!1).then(async n=>{this.cache.set(e,this.createCacheEntry(n)),t&&this.cache.get(e).renderer.createDom()})}updateCache(e){const t=xi(e||window.location.href).href;this.cache.has(t)&&this.cache.delete(t),this.cache.set(t,this.createCacheEntry(document.cloneNode(!0)))}clearCache(e){const t=xi(e||window.location.href).href;this.cache.has(t)&&this.cache.delete(t)}navigateTo(e,t=!1,n=!1){return new Promise((i,s)=>{if(!this.allowInterruption&&this.isTransitioning){s(new Error(jc));return}this.isTransitioning=!0,this.isPopping=!0,this.targetLocation=xi(e),this.popTarget=window.location.href;const a=new(this.chooseTransition(t))({wrapper:this.wrapper});let o;if(this.bypassCache||!this.cache.has(this.targetLocation.href)||this.cache.get(this.targetLocation.href).skipCache){const l=this.fetch(this.targetLocation.raw).then(c=>{this.cache.set(this.targetLocation.href,this.createCacheEntry(c)),this.cache.get(this.targetLocation.href).renderer.createDom()});o=this.beforeFetch(this.targetLocation,a,n).then(async()=>l.then(async c=>await this.afterFetch(this.targetLocation,a,this.cache.get(this.targetLocation.href),n)))}else this.cache.get(this.targetLocation.href).renderer.createDom(),o=this.beforeFetch(this.targetLocation,a,n).then(async()=>await this.afterFetch(this.targetLocation,a,this.cache.get(this.targetLocation.href),n));o.then(()=>{i()})})}on(e,t){_i.on(e,t)}off(e,t){_i.off(e,t)}beforeFetch(e,t,n){return _i.emit("NAVIGATE_OUT",{from:this.currentCacheEntry,trigger:n}),new Promise(i=>{this.currentCacheEntry.renderer.leave(t,n,this.removeOldContent).then(()=>{n!=="popstate"&&window.history.pushState({},"",e.raw),i()})})}afterFetch(e,t,n,i){return this.currentLocation=e,this.popTarget=this.currentLocation.href,new Promise(s=>{n.renderer.update(),_i.emit("NAVIGATE_IN",{from:this.currentCacheEntry,to:n,trigger:i}),this.reloadJsFilter&&this.loadScripts(n.scripts),n.renderer.enter(t,i).then(()=>{_i.emit("NAVIGATE_END",{from:this.currentCacheEntry,to:n,trigger:i}),this.currentCacheEntry=n,this.isTransitioning=!1,this.isPopping=!1,s()})})}loadScripts(e){const t=[...e],n=Array.from(document.querySelectorAll("script")).filter(this.reloadJsFilter);for(let i=0;i<n.length;i++)for(let s=0;s<t.length;s++)if(n[i].outerHTML===t[s].outerHTML){Dg(n[i]),t.splice(s,1);break}for(const i of t)Rg(i)}attachEvents(e){_i.delegate("click",e,this.onClick),_i.on("popstate",window,this.onPopstate)}fetch(e,t=!0){return new Promise((n,i)=>{fetch(e,{mode:"same-origin",method:"GET",headers:{"X-Requested-With":"Taxi"},credentials:"same-origin"}).then(s=>(s.ok||(i("Taxi encountered a non 2xx HTTP status code"),t&&(window.location.href=e)),s.text())).then(s=>{n(Pg(s))}).catch(s=>{i(s),t&&(window.location.href=e)})})}chooseTransition(e){var n;if(e)return this.transitions[e];const t=(n=this.router)==null?void 0:n.findMatch(this.currentLocation,this.targetLocation);return t?this.transitions[t]:this.defaultTransition}createCacheEntry(e){const t=e.querySelector("[data-taxi-view]"),n=t.dataset.taxiView.length?this.renderers[t.dataset.taxiView]:this.defaultRenderer;return n||console.warn(`The Renderer "${t.dataset.taxiView}" was set in the data-taxi-view of the requested page, but not registered in Taxi.`),{page:e,content:t,skipCache:t.hasAttribute("data-taxi-nocache"),scripts:this.reloadJsFilter?Array.from(e.querySelectorAll("script")).filter(this.reloadJsFilter):[],title:e.title,renderer:new n({wrapper:this.wrapper,title:e.title,content:t,page:e})}}}let Fg=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${Fg}px`);window.addEventListener("resize",()=>{let r=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${r}px`)});/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ac="146",nr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ng=0,Yc=1,zg=2,Xh=1,Ug=2,fs=3,Or=0,Mt=1,Qn=2,ii=0,Tr=1,$c=2,Zc=3,Kc=4,kg=5,yr=100,Bg=101,Gg=102,Jc=103,Qc=104,Vg=200,Hg=201,Wg=202,qg=203,jh=204,Yh=205,Xg=206,jg=207,Yg=208,$g=209,Zg=210,Kg=0,Jg=1,Qg=2,vl=3,e_=4,t_=5,n_=6,i_=7,$h=0,r_=1,s_=2,zn=0,a_=1,o_=2,l_=3,Zh=4,c_=5,Kh=300,Fr=301,Nr=302,zr=303,yl=304,ja=306,bl=1e3,hn=1001,Ml=1002,wt=1003,eu=1004,tu=1005,Tt=1006,u_=1007,Ya=1008,Vi=1009,f_=1010,h_=1011,Jh=1012,d_=1013,Li=1014,Pi=1015,ws=1016,p_=1017,m_=1018,Er=1020,g_=1021,__=1022,dn=1023,x_=1024,v_=1025,Ni=1026,Ur=1027,y_=1028,b_=1029,M_=1030,S_=1031,w_=1033,uo=33776,fo=33777,ho=33778,po=33779,nu=35840,iu=35841,ru=35842,su=35843,T_=36196,au=37492,ou=37496,lu=37808,cu=37809,uu=37810,fu=37811,hu=37812,du=37813,pu=37814,mu=37815,gu=37816,_u=37817,xu=37818,vu=37819,yu=37820,bu=37821,Mu=36492,Hi=3e3,Ue=3001,E_=3200,A_=3201,C_=0,L_=1,Rn="srgb",Di="srgb-linear",mo=7680,P_=519,Su=35044,wu="300 es",Sl=1035;class Zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],go=Math.PI/180,Tu=180/Math.PI;function Ns(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gt[r&255]+gt[r>>8&255]+gt[r>>16&255]+gt[r>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function Et(r,e,t){return Math.max(e,Math.min(t,r))}function D_(r,e){return(r%e+e)%e}function _o(r,e,t){return(1-t)*r+t*e}function Eu(r){return(r&r-1)===0&&r!==0}function wl(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function qs(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ot(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class en{constructor(){en.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],m=n[5],_=n[8],p=i[0],d=i[3],g=i[6],y=i[1],b=i[4],M=i[7],x=i[2],E=i[5],L=i[8];return s[0]=a*p+o*y+l*x,s[3]=a*d+o*b+l*E,s[6]=a*g+o*M+l*L,s[1]=c*p+u*y+f*x,s[4]=c*d+u*b+f*E,s[7]=c*g+u*M+f*L,s[2]=h*p+m*y+_*x,s[5]=h*d+m*b+_*E,s[8]=h*g+m*M+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,_=t*f+n*h+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=f*p,e[1]=(i*c-u*n)*p,e[2]=(o*n-i*a)*p,e[3]=h*p,e[4]=(u*t-i*l)*p,e[5]=(i*s-o*t)*p,e[6]=m*p,e[7]=(n*l-c*t)*p,e[8]=(a*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],a=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*s+n*l,i[3]=t*a+n*c,i[6]=t*o+n*u,i[1]=-n*s+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Qh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ts(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function zi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function da(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const xo={[Rn]:{[Di]:zi},[Di]:{[Rn]:da}},on={legacyMode:!0,get workingColorSpace(){return Di},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(xo[e]&&xo[e][t]!==void 0){const n=xo[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},it={r:0,g:0,b:0},ln={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function vo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function js(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,on.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Di){return this.r=e,this.g=t,this.b=n,on.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Di){if(e=D_(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=vo(a,s,e+1/3),this.g=vo(a,s,e),this.b=vo(a,s,e-1/3)}return on.toWorkingColorSpace(this,i),this}setStyle(e,t=Rn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,on.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,on.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,on.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,on.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Rn){const n=ed[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return on.fromWorkingColorSpace(js(this,it),e),Et(it.r*255,0,255)<<16^Et(it.g*255,0,255)<<8^Et(it.b*255,0,255)<<0}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Di){on.fromWorkingColorSpace(js(this,it),t);const n=it.r,i=it.g,s=it.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Di){return on.fromWorkingColorSpace(js(this,it),t),e.r=it.r,e.g=it.g,e.b=it.b,e}getStyle(e=Rn){return on.fromWorkingColorSpace(js(this,it),e),e!==Rn?`color(${e} ${it.r} ${it.g} ${it.b})`:`rgb(${it.r*255|0},${it.g*255|0},${it.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(ln),ln.h+=e,ln.s+=t,ln.l+=n,this.setHSL(ln.h,ln.s,ln.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ln),e.getHSL(Xs);const n=_o(ln.h,Xs.h,t),i=_o(ln.s,Xs.s,t),s=_o(ln.l,Xs.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}We.NAMES=ed;let rr;class td{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rr===void 0&&(rr=Ts("canvas")),rr.width=e.width,rr.height=e.height;const n=rr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ts("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=zi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zi(t[n]/255)*255):t[n]=zi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class nd{constructor(e=null){this.isSource=!0,this.uuid=Ns(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(yo(i[a].image)):s.push(yo(i[a]))}else s=yo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function yo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?td.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let R_=0;class Ht extends Zi{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=hn,i=hn,s=Tt,a=Ya,o=dn,l=Vi,c=1,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=Ns(),this.name="",this.source=new nd(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new en,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bl:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case Ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bl:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case Ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=Kh;class dt{constructor(e=0,t=0,n=0,i=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],_=l[9],p=l[2],d=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(_-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(_+d)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,M=(m+1)/2,x=(g+1)/2,E=(u+h)/4,L=(f+p)/4,v=(_+d)/4;return b>M&&b>x?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=E/n,s=L/n):M>x?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=E/i,s=v/i):x<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(x),n=L/s,i=v/s),this.set(n,i,s,t),this}let y=Math.sqrt((d-_)*(d-_)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(d-_)/y,this.y=(f-p)/y,this.z=(h-u)/y,this.w=Math.acos((c+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wi extends Zi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Ht(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Tt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new nd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class id extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class I_ extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[a+0],m=s[a+1],_=s[a+2],p=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=p;return}if(f!==p||l!==h||c!==m||u!==_){let d=1-o;const g=l*h+c*m+u*_+f*p,y=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){const x=Math.sqrt(b),E=Math.atan2(x,g*y);d=Math.sin(d*E)/x,o=Math.sin(o*E)/x}const M=o*y;if(l=l*d+h*M,c=c*d+m*M,u=u*d+_*M,f=f*d+p*M,d===1-o){const x=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=x,c*=x,u*=x,f*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*m-c*h,e[t+1]=l*_+u*h+c*f-o*m,e[t+2]=c*_+u*m+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),h=l(n/2),m=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"YXZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"ZXY":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"ZYX":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"YZX":this._x=h*u*f+c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f-h*m*_;break;case"XZY":this._x=h*u*f-c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Au.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Au.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-s*i,f=l*i+s*n-a*t,h=-s*t-a*n-o*i;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bo.copy(this).projectOnVector(e),this.sub(bo)}reflect(e){return this.sub(bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bo=new N,Au=new qi;class zs{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)vi.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(vi)}else n.boundingBox===null&&n.computeBoundingBox(),Mo.copy(n.boundingBox),Mo.applyMatrix4(e.matrixWorld),this.union(Mo);const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),Ys.subVectors(this.max,ss),sr.subVectors(e.a,ss),ar.subVectors(e.b,ss),or.subVectors(e.c,ss),qn.subVectors(ar,sr),Xn.subVectors(or,ar),yi.subVectors(sr,or);let t=[0,-qn.z,qn.y,0,-Xn.z,Xn.y,0,-yi.z,yi.y,qn.z,0,-qn.x,Xn.z,0,-Xn.x,yi.z,0,-yi.x,-qn.y,qn.x,0,-Xn.y,Xn.x,0,-yi.y,yi.x,0];return!So(t,sr,ar,or,Ys)||(t=[1,0,0,0,1,0,0,0,1],!So(t,sr,ar,or,Ys))?!1:($s.crossVectors(qn,Xn),t=[$s.x,$s.y,$s.z],So(t,sr,ar,or,Ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return vi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const An=[new N,new N,new N,new N,new N,new N,new N,new N],vi=new N,Mo=new zs,sr=new N,ar=new N,or=new N,qn=new N,Xn=new N,yi=new N,ss=new N,Ys=new N,$s=new N,bi=new N;function So(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){bi.fromArray(r,s);const o=i.x*Math.abs(bi.x)+i.y*Math.abs(bi.y)+i.z*Math.abs(bi.z),l=e.dot(bi),c=t.dot(bi),u=n.dot(bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const O_=new zs,as=new N,wo=new N;class oc{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):O_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);const t=as.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(as,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(wo)),this.expandByPoint(as.copy(e.center).sub(wo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new N,To=new N,Zs=new N,jn=new N,Eo=new N,Ks=new N,Ao=new N;class rd{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.direction).multiplyScalar(t).add(this.origin),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){To.copy(e).add(t).multiplyScalar(.5),Zs.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(To);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Zs),o=jn.dot(this.direction),l=-jn.dot(Zs),c=jn.lengthSq(),u=Math.abs(1-a*a);let f,h,m,_;if(u>0)if(f=a*l-o,h=a*o-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const p=1/u;f*=p,h*=p,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(Zs).multiplyScalar(h).add(To),m}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const n=Cn.dot(this.direction),i=Cn.dot(Cn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,n,i,s){Eo.subVectors(t,e),Ks.subVectors(n,e),Ao.crossVectors(Eo,Ks);let a=this.direction.dot(Ao),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;jn.subVectors(this.origin,e);const l=o*this.direction.dot(Ks.crossVectors(jn,Ks));if(l<0)return null;const c=o*this.direction.dot(Eo.cross(jn));if(c<0||l+c>a)return null;const u=-o*jn.dot(Ao);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,l,c,u,f,h,m,_,p,d){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=m,g[7]=_,g[11]=p,g[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/lr.setFromMatrixColumn(e,0).length(),s=1/lr.setFromMatrixColumn(e,1).length(),a=1/lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,_=o*u,p=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=h-p*c,t[9]=-o*l,t[2]=p-h*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,_=c*u,p=c*f;t[0]=h+p*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=p+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,_=c*u,p=c*f;t[0]=h-p*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=p-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,_=o*u,p=o*f;t[0]=l*u,t[4]=_*c-m,t[8]=h*c+p,t[1]=l*f,t[5]=p*c+h,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,p=o*c;t[0]=l*u,t[4]=p-h*f,t[8]=_*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+_,t[10]=h-p*f}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,p=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+p,t[5]=a*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(F_,e,N_)}lookAt(e,t,n){const i=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Yn.crossVectors(n,Ft),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Yn.crossVectors(n,Ft)),Yn.normalize(),Js.crossVectors(Ft,Yn),i[0]=Yn.x,i[4]=Js.x,i[8]=Ft.x,i[1]=Yn.y,i[5]=Js.y,i[9]=Ft.y,i[2]=Yn.z,i[6]=Js.z,i[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],m=n[13],_=n[2],p=n[6],d=n[10],g=n[14],y=n[3],b=n[7],M=n[11],x=n[15],E=i[0],L=i[4],v=i[8],w=i[12],D=i[1],V=i[5],J=i[9],z=i[13],R=i[2],B=i[6],j=i[10],$=i[14],G=i[3],O=i[7],k=i[11],Q=i[15];return s[0]=a*E+o*D+l*R+c*G,s[4]=a*L+o*V+l*B+c*O,s[8]=a*v+o*J+l*j+c*k,s[12]=a*w+o*z+l*$+c*Q,s[1]=u*E+f*D+h*R+m*G,s[5]=u*L+f*V+h*B+m*O,s[9]=u*v+f*J+h*j+m*k,s[13]=u*w+f*z+h*$+m*Q,s[2]=_*E+p*D+d*R+g*G,s[6]=_*L+p*V+d*B+g*O,s[10]=_*v+p*J+d*j+g*k,s[14]=_*w+p*z+d*$+g*Q,s[3]=y*E+b*D+M*R+x*G,s[7]=y*L+b*V+M*B+x*O,s[11]=y*v+b*J+M*j+x*k,s[15]=y*w+b*z+M*$+x*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],_=e[3],p=e[7],d=e[11],g=e[15];return _*(+s*l*f-i*c*f-s*o*h+n*c*h+i*o*m-n*l*m)+p*(+t*l*m-t*c*h+s*a*h-i*a*m+i*c*u-s*l*u)+d*(+t*c*f-t*o*m-s*a*f+n*a*m+s*o*u-n*c*u)+g*(-i*o*u-t*l*f+t*o*h+i*a*f-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],_=e[12],p=e[13],d=e[14],g=e[15],y=f*d*c-p*h*c+p*l*m-o*d*m-f*l*g+o*h*g,b=_*h*c-u*d*c-_*l*m+a*d*m+u*l*g-a*h*g,M=u*p*c-_*f*c+_*o*m-a*p*m-u*o*g+a*f*g,x=_*f*l-u*p*l-_*o*h+a*p*h+u*o*d-a*f*d,E=t*y+n*b+i*M+s*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/E;return e[0]=y*L,e[1]=(p*h*s-f*d*s-p*i*m+n*d*m+f*i*g-n*h*g)*L,e[2]=(o*d*s-p*l*s+p*i*c-n*d*c-o*i*g+n*l*g)*L,e[3]=(f*l*s-o*h*s-f*i*c+n*h*c+o*i*m-n*l*m)*L,e[4]=b*L,e[5]=(u*d*s-_*h*s+_*i*m-t*d*m-u*i*g+t*h*g)*L,e[6]=(_*l*s-a*d*s-_*i*c+t*d*c+a*i*g-t*l*g)*L,e[7]=(a*h*s-u*l*s+u*i*c-t*h*c-a*i*m+t*l*m)*L,e[8]=M*L,e[9]=(_*f*s-u*p*s-_*n*m+t*p*m+u*n*g-t*f*g)*L,e[10]=(a*p*s-_*o*s+_*n*c-t*p*c-a*n*g+t*o*g)*L,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*m-t*o*m)*L,e[12]=x*L,e[13]=(u*p*i-_*f*i+_*n*h-t*p*h-u*n*d+t*f*d)*L,e[14]=(_*o*i-a*p*i-_*n*l+t*p*l+a*n*d-t*o*d)*L,e[15]=(a*f*i-u*o*i+u*n*l-t*f*l-a*n*h+t*o*h)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,_=s*f,p=a*u,d=a*f,g=o*f,y=l*c,b=l*u,M=l*f,x=n.x,E=n.y,L=n.z;return i[0]=(1-(p+g))*x,i[1]=(m+M)*x,i[2]=(_-b)*x,i[3]=0,i[4]=(m-M)*E,i[5]=(1-(h+g))*E,i[6]=(d+y)*E,i[7]=0,i[8]=(_+b)*L,i[9]=(d-y)*L,i[10]=(1-(h+p))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=lr.set(i[0],i[1],i[2]).length();const a=lr.set(i[4],i[5],i[6]).length(),o=lr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],cn.copy(this);const c=1/s,u=1/a,f=1/o;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=f,cn.elements[9]*=f,cn.elements[10]*=f,t.setFromRotationMatrix(cn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),h=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-s),f=(t+e)*l,h=(n+i)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const lr=new N,cn=new pt,F_=new N(0,0,0),N_=new N(1,1,1),Yn=new N,Js=new N,Ft=new N,Cu=new pt,Lu=new qi;class Us{constructor(e=0,t=0,n=0,i=Us.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lu.setFromEuler(this),this.setFromQuaternion(Lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Us.DefaultOrder="XYZ";Us.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class lc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let z_=0;const Pu=new N,cr=new qi,Ln=new pt,Qs=new N,os=new N,U_=new N,k_=new qi,Du=new N(1,0,0),Ru=new N(0,1,0),Iu=new N(0,0,1),B_={type:"added"},Ou={type:"removed"};class Bt extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DefaultUp.clone();const e=new N,t=new Us,n=new qi,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pt},normalMatrix:{value:new en}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Bt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Bt.DefaultMatrixWorldAutoUpdate,this.layers=new lc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(Du,e)}rotateY(e){return this.rotateOnAxis(Ru,e)}rotateZ(e){return this.rotateOnAxis(Iu,e)}translateOnAxis(e,t){return Pu.copy(e).applyQuaternion(this.quaternion),this.position.add(Pu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Du,e)}translateY(e){return this.translateOnAxis(Ru,e)}translateZ(e){return this.translateOnAxis(Iu,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qs.copy(e):Qs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(os,Qs,this.up):Ln.lookAt(Qs,os,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),cr.setFromRotationMatrix(Ln),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(B_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ou)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ou)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,U_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,k_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Bt.DefaultUp=new N(0,1,0);Bt.DefaultMatrixAutoUpdate=!0;Bt.DefaultMatrixWorldAutoUpdate=!0;const un=new N,Pn=new N,Co=new N,Dn=new N,ur=new N,fr=new N,Fu=new N,Lo=new N,Po=new N,Do=new N;class Fn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),un.subVectors(e,t),i.cross(un);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){un.subVectors(i,t),Pn.subVectors(n,t),Co.subVectors(e,t);const a=un.dot(un),o=un.dot(Pn),l=un.dot(Co),c=Pn.dot(Pn),u=Pn.dot(Co),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Dn),Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Dn),l.set(0,0),l.addScaledVector(s,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l}static isFrontFacing(e,t,n,i){return un.subVectors(n,t),Pn.subVectors(e,t),un.cross(Pn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),un.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Fn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ur.subVectors(i,n),fr.subVectors(s,n),Lo.subVectors(e,n);const l=ur.dot(Lo),c=fr.dot(Lo);if(l<=0&&c<=0)return t.copy(n);Po.subVectors(e,i);const u=ur.dot(Po),f=fr.dot(Po);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ur,a);Do.subVectors(e,s);const m=ur.dot(Do),_=fr.dot(Do);if(_>=0&&m<=_)return t.copy(s);const p=m*c-l*_;if(p<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(fr,o);const d=u*_-m*f;if(d<=0&&f-u>=0&&m-_>=0)return Fu.subVectors(s,i),o=(f-u)/(f-u+(m-_)),t.copy(i).addScaledVector(Fu,o);const g=1/(d+p+h);return a=p*g,o=h*g,t.copy(n).addScaledVector(ur,a).addScaledVector(fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let G_=0;class $a extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=Tr,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=jh,this.blendDst=Yh,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=P_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mo,this.stencilZFail=mo,this.stencilZPass=mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(n.blending=this.blending),this.side!==Or&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ki extends $a{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Je=new N,ea=new Te;class bn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Su,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ea.fromBufferAttribute(this,t),ea.applyMatrix3(e),this.setXY(t,ea.x,ea.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Je.fromBufferAttribute(this,t),Je.applyMatrix3(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Je.fromBufferAttribute(this,t),Je.applyMatrix4(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Je.fromBufferAttribute(this,t),Je.applyNormalMatrix(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Je.fromBufferAttribute(this,t),Je.transformDirection(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),i=Ot(i,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Su&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class sd extends bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ad extends bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gt extends bn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let V_=0;const Zt=new pt,Ro=new Bt,hr=new N,Nt=new zs,ls=new zs,ct=new N;class Bn extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qh(e)?ad:sd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new en().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return Ro.lookAt(e),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Nt.setFromBufferAttribute(s),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ls.setFromBufferAttribute(o),this.morphTargetsRelative?(ct.addVectors(Nt.min,ls.min),Nt.expandByPoint(ct),ct.addVectors(Nt.max,ls.max),Nt.expandByPoint(ct)):(Nt.expandByPoint(ls.min),Nt.expandByPoint(ls.max))}Nt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)ct.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ct));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ct.fromBufferAttribute(o,c),l&&(hr.fromBufferAttribute(e,c),ct.add(hr)),i=Math.max(i,n.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<o;D++)c[D]=new N,u[D]=new N;const f=new N,h=new N,m=new N,_=new Te,p=new Te,d=new Te,g=new N,y=new N;function b(D,V,J){f.fromArray(i,D*3),h.fromArray(i,V*3),m.fromArray(i,J*3),_.fromArray(a,D*2),p.fromArray(a,V*2),d.fromArray(a,J*2),h.sub(f),m.sub(f),p.sub(_),d.sub(_);const z=1/(p.x*d.y-d.x*p.y);!isFinite(z)||(g.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(z),y.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(z),c[D].add(g),c[V].add(g),c[J].add(g),u[D].add(y),u[V].add(y),u[J].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let D=0,V=M.length;D<V;++D){const J=M[D],z=J.start,R=J.count;for(let B=z,j=z+R;B<j;B+=3)b(n[B+0],n[B+1],n[B+2])}const x=new N,E=new N,L=new N,v=new N;function w(D){L.fromArray(s,D*3),v.copy(L);const V=c[D];x.copy(V),x.sub(L.multiplyScalar(L.dot(V))).normalize(),E.crossVectors(v,V);const z=E.dot(u[D])<0?-1:1;l[D*4]=x.x,l[D*4+1]=x.y,l[D*4+2]=x.z,l[D*4+3]=z}for(let D=0,V=M.length;D<V;++D){const J=M[D],z=J.start,R=J.count;for(let B=z,j=z+R;B<j;B+=3)w(n[B+0]),w(n[B+1]),w(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,f=new N;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,d),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,d),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,_=0;for(let p=0,d=l.length;p<d;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let g=0;g<u;g++)h[_++]=c[m++]}return new bn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nu=new pt,dr=new rd,Io=new oc,$n=new N,Zn=new N,Kn=new N,Oo=new N,Fo=new N,No=new N,ta=new N,na=new N,ia=new N,ra=new Te,sa=new Te,aa=new Te,zo=new N,oa=new N;class kt extends Bt{constructor(e=new Bn,t=new Ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(s),e.ray.intersectsSphere(Io)===!1)||(Nu.copy(s).invert(),dr.copy(e.ray).applyMatrix4(Nu),n.boundingBox!==null&&dr.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,h=n.attributes.uv2,m=n.groups,_=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,d=m.length;p<d;p++){const g=m[p],y=i[g.materialIndex],b=Math.max(g.start,_.start),M=Math.min(o.count,Math.min(g.start+g.count,_.start+_.count));for(let x=b,E=M;x<E;x+=3){const L=o.getX(x),v=o.getX(x+1),w=o.getX(x+2);a=la(this,y,e,dr,l,c,u,f,h,L,v,w),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const p=Math.max(0,_.start),d=Math.min(o.count,_.start+_.count);for(let g=p,y=d;g<y;g+=3){const b=o.getX(g),M=o.getX(g+1),x=o.getX(g+2);a=la(this,i,e,dr,l,c,u,f,h,b,M,x),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,d=m.length;p<d;p++){const g=m[p],y=i[g.materialIndex],b=Math.max(g.start,_.start),M=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let x=b,E=M;x<E;x+=3){const L=x,v=x+1,w=x+2;a=la(this,y,e,dr,l,c,u,f,h,L,v,w),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const p=Math.max(0,_.start),d=Math.min(l.count,_.start+_.count);for(let g=p,y=d;g<y;g+=3){const b=g,M=g+1,x=g+2;a=la(this,i,e,dr,l,c,u,f,h,b,M,x),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}}}function H_(r,e,t,n,i,s,a,o){let l;if(e.side===Mt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side!==Qn,o),l===null)return null;oa.copy(o),oa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(oa);return c<t.near||c>t.far?null:{distance:c,point:oa.clone(),object:r}}function la(r,e,t,n,i,s,a,o,l,c,u,f){$n.fromBufferAttribute(i,c),Zn.fromBufferAttribute(i,u),Kn.fromBufferAttribute(i,f);const h=r.morphTargetInfluences;if(s&&h){ta.set(0,0,0),na.set(0,0,0),ia.set(0,0,0);for(let _=0,p=s.length;_<p;_++){const d=h[_],g=s[_];d!==0&&(Oo.fromBufferAttribute(g,c),Fo.fromBufferAttribute(g,u),No.fromBufferAttribute(g,f),a?(ta.addScaledVector(Oo,d),na.addScaledVector(Fo,d),ia.addScaledVector(No,d)):(ta.addScaledVector(Oo.sub($n),d),na.addScaledVector(Fo.sub(Zn),d),ia.addScaledVector(No.sub(Kn),d)))}$n.add(ta),Zn.add(na),Kn.add(ia)}r.isSkinnedMesh&&(r.boneTransform(c,$n),r.boneTransform(u,Zn),r.boneTransform(f,Kn));const m=H_(r,e,t,n,$n,Zn,Kn,zo);if(m){o&&(ra.fromBufferAttribute(o,c),sa.fromBufferAttribute(o,u),aa.fromBufferAttribute(o,f),m.uv=Fn.getUV(zo,$n,Zn,Kn,ra,sa,aa,new Te)),l&&(ra.fromBufferAttribute(l,c),sa.fromBufferAttribute(l,u),aa.fromBufferAttribute(l,f),m.uv2=Fn.getUV(zo,$n,Zn,Kn,ra,sa,aa,new Te));const _={a:c,b:u,c:f,normal:new N,materialIndex:0};Fn.getNormal($n,Zn,Kn,_.normal),m.face=_}return m}class ks extends Bn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(f,2));function _(p,d,g,y,b,M,x,E,L,v,w){const D=M/L,V=x/v,J=M/2,z=x/2,R=E/2,B=L+1,j=v+1;let $=0,G=0;const O=new N;for(let k=0;k<j;k++){const Q=k*V-z;for(let Z=0;Z<B;Z++){const K=Z*D-J;O[p]=K*y,O[d]=Q*b,O[g]=R,c.push(O.x,O.y,O.z),O[p]=0,O[d]=0,O[g]=E>0?1:-1,u.push(O.x,O.y,O.z),f.push(Z/L),f.push(1-k/v),$+=1}}for(let k=0;k<v;k++)for(let Q=0;Q<L;Q++){const Z=h+Q+B*k,K=h+Q+B*(k+1),re=h+(Q+1)+B*(k+1),pe=h+(Q+1)+B*k;l.push(Z,K,pe),l.push(K,re,pe),G+=6}o.addGroup(m,G,w),m+=G,h+=$}}static fromJSON(e){return new ks(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function kr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function yt(r){const e={};for(let t=0;t<r.length;t++){const n=kr(r[t]);for(const i in n)e[i]=n[i]}return e}function W_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}const q_={clone:kr,merge:yt};var X_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends $a{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X_,this.fragmentShader=j_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=W_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class od extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qt extends od{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Tu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tu*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(go*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const pr=90,mr=1;class Y_ extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Qt(pr,mr,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new N(1,0,0)),this.add(i);const s=new Qt(pr,mr,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new N(-1,0,0)),this.add(s);const a=new Qt(pr,mr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new N(0,1,0)),this.add(a);const o=new Qt(pr,mr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new N(0,-1,0)),this.add(o);const l=new Qt(pr,mr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new N(0,0,1)),this.add(l);const c=new Qt(pr,mr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new N(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=zn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class ld extends Ht{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Fr,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $_ extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ld(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ks(5,5,5),s=new Xi({name:"CubemapFromEquirect",uniforms:kr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mt,blending:ii});s.uniforms.tEquirect.value=t;const a=new kt(i,s),o=t.minFilter;return t.minFilter===Ya&&(t.minFilter=Tt),new Y_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Uo=new N,Z_=new N,K_=new en;class Ti{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Uo.subVectors(n,t).cross(Z_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Uo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||K_.getNormalMatrix(e),i=this.coplanarPoint(Uo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new oc,ca=new N;class cd{constructor(e=new Ti,t=new Ti,n=new Ti,i=new Ti,s=new Ti,a=new Ti){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],m=n[9],_=n[10],p=n[11],d=n[12],g=n[13],y=n[14],b=n[15];return t[0].setComponents(o-i,f-l,p-h,b-d).normalize(),t[1].setComponents(o+i,f+l,p+h,b+d).normalize(),t[2].setComponents(o+s,f+c,p+m,b+g).normalize(),t[3].setComponents(o-s,f-c,p-m,b-g).normalize(),t[4].setComponents(o-a,f-u,p-_,b-y).normalize(),t[5].setComponents(o+a,f+u,p+_,b+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSprite(e){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ca.x=i.normal.x>0?e.max.x:e.min.x,ca.y=i.normal.y>0?e.max.y:e.min.y,ca.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ca)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ud(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function J_(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;r.bindBuffer(f,c),m.count===-1?r.bufferSubData(f,0,h):(t?r.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):r.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class cc extends Bn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,h=t/l,m=[],_=[],p=[],d=[];for(let g=0;g<u;g++){const y=g*h-a;for(let b=0;b<c;b++){const M=b*f-s;_.push(M,-y,0),p.push(0,0,1),d.push(b/o),d.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){const b=y+c*g,M=y+c*(g+1),x=y+1+c*(g+1),E=y+1+c*g;m.push(b,M,E),m.push(M,x,E)}this.setIndex(m),this.setAttribute("position",new Gt(_,3)),this.setAttribute("normal",new Gt(p,3)),this.setAttribute("uv",new Gt(d,2))}static fromJSON(e){return new cc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Q_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,e0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,n0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,r0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s0="vec3 transformed = vec3( position );",a0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,l0=`#ifdef USE_IRIDESCENCE
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
#endif`,c0=`#ifdef USE_BUMPMAP
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
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,x0=`#define PI 3.141592653589793
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
}`,v0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,y0=`vec3 transformedNormal = objectNormal;
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
#endif`,b0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T0="gl_FragColor = linearToOutputTexel( gl_FragColor );",E0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A0=`#ifdef USE_ENVMAP
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
#endif`,C0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,L0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,F0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N0=`#ifdef USE_GRADIENTMAP
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
}`,z0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,U0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,k0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B0=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,G0=`uniform bool receiveShadow;
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
#endif`,V0=`#if defined( USE_ENVMAP )
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
#endif`,H0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,W0=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,q0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X0=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,j0=`PhysicalMaterial material;
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
#endif`,Y0=`struct PhysicalMaterial {
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
}`,$0=`
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
#endif`,Z0=`#if defined( RE_IndirectDiffuse )
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
#endif`,K0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,J0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ax=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ox=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cx=`#ifdef USE_MORPHNORMALS
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
#endif`,ux=`#ifdef USE_MORPHTARGETS
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
#endif`,fx=`#ifdef USE_MORPHTARGETS
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
#endif`,hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,dx=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_x=`#ifdef USE_NORMALMAP
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
#endif`,xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,vx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,yx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,bx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ex=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ax=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Px=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rx=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ix=`float getShadowMask() {
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
}`,Ox=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fx=`#ifdef USE_SKINNING
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
#endif`,Nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zx=`#ifdef USE_SKINNING
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
#endif`,Ux=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vx=`#ifdef USE_TRANSMISSION
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
#endif`,Hx=`#ifdef USE_TRANSMISSION
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
#endif`,Wx=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,qx=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Xx=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,jx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Yx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,$x=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Zx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jx=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ev=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,iv=`#include <common>
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
}`,rv=`#if DEPTH_PACKING == 3200
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
}`,sv=`#define DISTANCE
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
}`,av=`#define DISTANCE
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
}`,ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cv=`uniform float scale;
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
}`,uv=`uniform vec3 diffuse;
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
}`,fv=`#include <common>
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
}`,hv=`uniform vec3 diffuse;
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
}`,dv=`#define LAMBERT
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
}`,pv=`#define LAMBERT
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
}`,mv=`#define MATCAP
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
}`,gv=`#define MATCAP
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
}`,_v=`#define NORMAL
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
}`,xv=`#define NORMAL
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
}`,vv=`#define PHONG
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
}`,yv=`#define PHONG
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
}`,bv=`#define STANDARD
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
}`,Mv=`#define STANDARD
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
}`,Sv=`#define TOON
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
}`,wv=`#define TOON
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
}`,Tv=`uniform float size;
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
}`,Ev=`uniform vec3 diffuse;
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
}`,Av=`#include <common>
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
}`,Cv=`uniform vec3 color;
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
}`,Lv=`uniform float rotation;
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
}`,Pv=`uniform vec3 diffuse;
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
}`,Se={alphamap_fragment:Q_,alphamap_pars_fragment:e0,alphatest_fragment:t0,alphatest_pars_fragment:n0,aomap_fragment:i0,aomap_pars_fragment:r0,begin_vertex:s0,beginnormal_vertex:a0,bsdfs:o0,iridescence_fragment:l0,bumpmap_pars_fragment:c0,clipping_planes_fragment:u0,clipping_planes_pars_fragment:f0,clipping_planes_pars_vertex:h0,clipping_planes_vertex:d0,color_fragment:p0,color_pars_fragment:m0,color_pars_vertex:g0,color_vertex:_0,common:x0,cube_uv_reflection_fragment:v0,defaultnormal_vertex:y0,displacementmap_pars_vertex:b0,displacementmap_vertex:M0,emissivemap_fragment:S0,emissivemap_pars_fragment:w0,encodings_fragment:T0,encodings_pars_fragment:E0,envmap_fragment:A0,envmap_common_pars_fragment:C0,envmap_pars_fragment:L0,envmap_pars_vertex:P0,envmap_physical_pars_fragment:V0,envmap_vertex:D0,fog_vertex:R0,fog_pars_vertex:I0,fog_fragment:O0,fog_pars_fragment:F0,gradientmap_pars_fragment:N0,lightmap_fragment:z0,lightmap_pars_fragment:U0,lights_lambert_fragment:k0,lights_lambert_pars_fragment:B0,lights_pars_begin:G0,lights_toon_fragment:H0,lights_toon_pars_fragment:W0,lights_phong_fragment:q0,lights_phong_pars_fragment:X0,lights_physical_fragment:j0,lights_physical_pars_fragment:Y0,lights_fragment_begin:$0,lights_fragment_maps:Z0,lights_fragment_end:K0,logdepthbuf_fragment:J0,logdepthbuf_pars_fragment:Q0,logdepthbuf_pars_vertex:ex,logdepthbuf_vertex:tx,map_fragment:nx,map_pars_fragment:ix,map_particle_fragment:rx,map_particle_pars_fragment:sx,metalnessmap_fragment:ax,metalnessmap_pars_fragment:ox,morphcolor_vertex:lx,morphnormal_vertex:cx,morphtarget_pars_vertex:ux,morphtarget_vertex:fx,normal_fragment_begin:hx,normal_fragment_maps:dx,normal_pars_fragment:px,normal_pars_vertex:mx,normal_vertex:gx,normalmap_pars_fragment:_x,clearcoat_normal_fragment_begin:xx,clearcoat_normal_fragment_maps:vx,clearcoat_pars_fragment:yx,iridescence_pars_fragment:bx,output_fragment:Mx,packing:Sx,premultiplied_alpha_fragment:wx,project_vertex:Tx,dithering_fragment:Ex,dithering_pars_fragment:Ax,roughnessmap_fragment:Cx,roughnessmap_pars_fragment:Lx,shadowmap_pars_fragment:Px,shadowmap_pars_vertex:Dx,shadowmap_vertex:Rx,shadowmask_pars_fragment:Ix,skinbase_vertex:Ox,skinning_pars_vertex:Fx,skinning_vertex:Nx,skinnormal_vertex:zx,specularmap_fragment:Ux,specularmap_pars_fragment:kx,tonemapping_fragment:Bx,tonemapping_pars_fragment:Gx,transmission_fragment:Vx,transmission_pars_fragment:Hx,uv_pars_fragment:Wx,uv_pars_vertex:qx,uv_vertex:Xx,uv2_pars_fragment:jx,uv2_pars_vertex:Yx,uv2_vertex:$x,worldpos_vertex:Zx,background_vert:Kx,background_frag:Jx,backgroundCube_vert:Qx,backgroundCube_frag:ev,cube_vert:tv,cube_frag:nv,depth_vert:iv,depth_frag:rv,distanceRGBA_vert:sv,distanceRGBA_frag:av,equirect_vert:ov,equirect_frag:lv,linedashed_vert:cv,linedashed_frag:uv,meshbasic_vert:fv,meshbasic_frag:hv,meshlambert_vert:dv,meshlambert_frag:pv,meshmatcap_vert:mv,meshmatcap_frag:gv,meshnormal_vert:_v,meshnormal_frag:xv,meshphong_vert:vv,meshphong_frag:yv,meshphysical_vert:bv,meshphysical_frag:Mv,meshtoon_vert:Sv,meshtoon_frag:wv,points_vert:Tv,points_frag:Ev,shadow_vert:Av,shadow_frag:Cv,sprite_vert:Lv,sprite_frag:Pv},ie={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new en},uv2Transform:{value:new en},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new en}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new en}}},vn={basic:{uniforms:yt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:yt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new We(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:yt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:yt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:yt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new We(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:yt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:yt([ie.points,ie.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:yt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:yt([ie.common,ie.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:yt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:yt([ie.sprite,ie.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new en},t2D:{value:null}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:yt([ie.common,ie.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:yt([ie.lights,ie.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};vn.physical={uniforms:yt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Te(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};function Dv(r,e,t,n,i,s,a){const o=new We(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function _(d,g){let y=!1,b=g.isScene===!0?g.background:null;b&&b.isTexture&&(b=(g.backgroundBlurriness>0?t:e).get(b));const M=r.xr,x=M.getSession&&M.getSession();x&&x.environmentBlendMode==="additive"&&(b=null),b===null?p(o,l):b&&b.isColor&&(p(b,1),y=!0),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),b&&(b.isCubeTexture||b.mapping===ja)?(u===void 0&&(u=new kt(new ks(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:kr(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Mt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,L,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,(f!==b||h!==b.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,f=b,h=b.version,m=r.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new kt(new cc(2,2),new Xi({name:"BackgroundMaterial",uniforms:kr(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,m=r.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function p(d,g){n.buffers.color.setClear(d.r,d.g,d.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(d,g=1){o.set(d),l=g,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,p(o,l)},render:_}}function Rv(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=d(null);let c=l,u=!1;function f(R,B,j,$,G){let O=!1;if(a){const k=p($,j,B);c!==k&&(c=k,m(c.object)),O=g(R,$,j,G),O&&y(R,$,j,G)}else{const k=B.wireframe===!0;(c.geometry!==$.id||c.program!==j.id||c.wireframe!==k)&&(c.geometry=$.id,c.program=j.id,c.wireframe=k,O=!0)}G!==null&&t.update(G,34963),(O||u)&&(u=!1,v(R,B,j,$),G!==null&&r.bindBuffer(34963,t.get(G).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(R){return n.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function _(R){return n.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function p(R,B,j){const $=j.wireframe===!0;let G=o[R.id];G===void 0&&(G={},o[R.id]=G);let O=G[B.id];O===void 0&&(O={},G[B.id]=O);let k=O[$];return k===void 0&&(k=d(h()),O[$]=k),k}function d(R){const B=[],j=[],$=[];for(let G=0;G<i;G++)B[G]=0,j[G]=0,$[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:j,attributeDivisors:$,object:R,attributes:{},index:null}}function g(R,B,j,$){const G=c.attributes,O=B.attributes;let k=0;const Q=j.getAttributes();for(const Z in Q)if(Q[Z].location>=0){const re=G[Z];let pe=O[Z];if(pe===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(pe=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(pe=R.instanceColor)),re===void 0||re.attribute!==pe||pe&&re.data!==pe.data)return!0;k++}return c.attributesNum!==k||c.index!==$}function y(R,B,j,$){const G={},O=B.attributes;let k=0;const Q=j.getAttributes();for(const Z in Q)if(Q[Z].location>=0){let re=O[Z];re===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const pe={};pe.attribute=re,re&&re.data&&(pe.data=re.data),G[Z]=pe,k++}c.attributes=G,c.attributesNum=k,c.index=$}function b(){const R=c.newAttributes;for(let B=0,j=R.length;B<j;B++)R[B]=0}function M(R){x(R,0)}function x(R,B){const j=c.newAttributes,$=c.enabledAttributes,G=c.attributeDivisors;j[R]=1,$[R]===0&&(r.enableVertexAttribArray(R),$[R]=1),G[R]!==B&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,B),G[R]=B)}function E(){const R=c.newAttributes,B=c.enabledAttributes;for(let j=0,$=B.length;j<$;j++)B[j]!==R[j]&&(r.disableVertexAttribArray(j),B[j]=0)}function L(R,B,j,$,G,O){n.isWebGL2===!0&&(j===5124||j===5125)?r.vertexAttribIPointer(R,B,j,G,O):r.vertexAttribPointer(R,B,j,$,G,O)}function v(R,B,j,$){if(n.isWebGL2===!1&&(R.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const G=$.attributes,O=j.getAttributes(),k=B.defaultAttributeValues;for(const Q in O){const Z=O[Q];if(Z.location>=0){let K=G[Q];if(K===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(K=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(K=R.instanceColor)),K!==void 0){const re=K.normalized,pe=K.itemSize,Y=t.get(K);if(Y===void 0)continue;const De=Y.buffer,xe=Y.type,ve=Y.bytesPerElement;if(K.isInterleavedBufferAttribute){const ue=K.data,Fe=ue.stride,be=K.offset;if(ue.isInstancedInterleavedBuffer){for(let ge=0;ge<Z.locationSize;ge++)x(Z.location+ge,ue.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ge=0;ge<Z.locationSize;ge++)M(Z.location+ge);r.bindBuffer(34962,De);for(let ge=0;ge<Z.locationSize;ge++)L(Z.location+ge,pe/Z.locationSize,xe,re,Fe*ve,(be+pe/Z.locationSize*ge)*ve)}else{if(K.isInstancedBufferAttribute){for(let ue=0;ue<Z.locationSize;ue++)x(Z.location+ue,K.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ue=0;ue<Z.locationSize;ue++)M(Z.location+ue);r.bindBuffer(34962,De);for(let ue=0;ue<Z.locationSize;ue++)L(Z.location+ue,pe/Z.locationSize,xe,re,pe*ve,pe/Z.locationSize*ue*ve)}}else if(k!==void 0){const re=k[Q];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(Z.location,re);break;case 3:r.vertexAttrib3fv(Z.location,re);break;case 4:r.vertexAttrib4fv(Z.location,re);break;default:r.vertexAttrib1fv(Z.location,re)}}}}E()}function w(){J();for(const R in o){const B=o[R];for(const j in B){const $=B[j];for(const G in $)_($[G].object),delete $[G];delete B[j]}delete o[R]}}function D(R){if(o[R.id]===void 0)return;const B=o[R.id];for(const j in B){const $=B[j];for(const G in $)_($[G].object),delete $[G];delete B[j]}delete o[R.id]}function V(R){for(const B in o){const j=o[B];if(j[R.id]===void 0)continue;const $=j[R.id];for(const G in $)_($[G].object),delete $[G];delete j[R.id]}}function J(){z(),u=!0,c!==l&&(c=l,m(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:J,resetDefaultState:z,dispose:w,releaseStatesOfGeometry:D,releaseStatesOfProgram:V,initAttributes:b,enableAttribute:M,disableUnusedAttributes:E}}function Iv(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(i)h=r,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function Ov(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),h=r.getParameter(35660),m=r.getParameter(3379),_=r.getParameter(34076),p=r.getParameter(34921),d=r.getParameter(36347),g=r.getParameter(36348),y=r.getParameter(36349),b=h>0,M=a||e.has("OES_texture_float"),x=b&&M,E=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:d,maxVaryings:g,maxFragmentUniforms:y,vertexTextures:b,floatFragmentTextures:M,floatVertexTextures:x,maxSamples:E}}function Fv(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Ti,o=new en,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const _=f.length!==0||h||n!==0||i;return i=h,t=u(f,m,0),n=f.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,m){const _=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,g=r.get(f);if(!i||_===null||_.length===0||s&&!d)s?u(null):c();else{const y=s?0:n,b=y*4;let M=g.clippingState||null;l.value=M,M=u(_,h,b,m);for(let x=0;x!==b;++x)M[x]=t[x];g.clippingState=M,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,m,_){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=l.value,_!==!0||d===null){const g=m+p*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(d===null||d.length<g)&&(d=new Float32Array(g));for(let b=0,M=m;b!==p;++b,M+=4)a.copy(f[b]).applyMatrix4(y,o),a.normal.toArray(d,M),d[M+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function Nv(r){let e=new WeakMap;function t(a,o){return o===zr?a.mapping=Fr:o===yl&&(a.mapping=Nr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===zr||o===yl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new $_(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class zv extends od{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const br=4,zu=[.125,.215,.35,.446,.526,.582],Ci=20,ko=new zv,Uu=new We;let Bo=null;const Ei=(1+Math.sqrt(5))/2,_r=1/Ei,ku=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Ei,_r),new N(0,Ei,-_r),new N(_r,0,Ei),new N(-_r,0,Ei),new N(Ei,_r,0),new N(-Ei,_r,0)];class Bu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Bo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bo),e.scissorTest=!1,ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fr||e.mapping===Nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:ws,format:dn,encoding:Hi,depthBuffer:!1},i=Gu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uv(s)),this._blurMaterial=kv(s,e,t)}return i}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,ko)}_sceneToCubeUV(e,t,n,i){const o=new Qt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Uu),u.toneMapping=zn,u.autoClear=!1;const m=new Ki({name:"PMREM.Background",side:Mt,depthWrite:!1,depthTest:!1}),_=new kt(new ks,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(Uu),p=!0);for(let g=0;g<6;g++){const y=g%3;y===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):y===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));const b=this._cubeSize;ua(i,y*b,g>2?b:0,b,b),u.setRenderTarget(i),p&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Fr||e.mapping===Nr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new kt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ua(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ko)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=ku[(i-1)%ku.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new kt(this._lodPlanes[i],c),h=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ci-1),p=s/_,d=isFinite(s)?1+Math.floor(u*p):Ci;d>Ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ci}`);const g=[];let y=0;for(let L=0;L<Ci;++L){const v=L/p,w=Math.exp(-v*v/2);g.push(w),L===0?y+=w:L<d&&(y+=2*w)}for(let L=0;L<g.length;L++)g[L]=g[L]/y;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=g,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=_,h.mipInt.value=b-n;const M=this._sizeLods[i],x=3*M*(i>b-br?i-b+br:0),E=4*(this._cubeSize-M);ua(t,x,E,3*M,2*M),l.setRenderTarget(t),l.render(f,ko)}}function Uv(r){const e=[],t=[],n=[];let i=r;const s=r-br+1+zu.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-br?l=zu[a-r+br-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,p=3,d=2,g=1,y=new Float32Array(p*_*m),b=new Float32Array(d*_*m),M=new Float32Array(g*_*m);for(let E=0;E<m;E++){const L=E%3*2/3-1,v=E>2?0:-1,w=[L,v,0,L+2/3,v,0,L+2/3,v+1,0,L,v,0,L+2/3,v+1,0,L,v+1,0];y.set(w,p*_*E),b.set(h,d*_*E);const D=[E,E,E,E,E,E];M.set(D,g*_*E)}const x=new Bn;x.setAttribute("position",new bn(y,p)),x.setAttribute("uv",new bn(b,d)),x.setAttribute("faceIndex",new bn(M,g)),e.push(x),i>br&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gu(r,e,t){const n=new Wi(r,e,t);return n.texture.mapping=ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ua(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function kv(r,e,t){const n=new Float32Array(Ci),i=new N(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:uc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Vu(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Hu(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function uc(){return`

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
	`}function Bv(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===zr||l===yl,u=l===Fr||l===Nr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Bu(r)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new Bu(r));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Gv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vv(r,e,t,n){const i={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete i[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],34962);const m=f.morphAttributes;for(const _ in m){const p=m[_];for(let d=0,g=p.length;d<g;d++)e.update(p[d],34962)}}function c(f){const h=[],m=f.index,_=f.attributes.position;let p=0;if(m!==null){const y=m.array;p=m.version;for(let b=0,M=y.length;b<M;b+=3){const x=y[b+0],E=y[b+1],L=y[b+2];h.push(x,E,E,L,L,x)}}else{const y=_.array;p=_.version;for(let b=0,M=y.length/3-1;b<M;b+=3){const x=b+0,E=b+1,L=b+2;h.push(x,E,E,L,L,x)}}const d=new(Qh(h)?ad:sd)(h,1);d.version=p;const g=s.get(f);g&&e.remove(g),s.set(f,d)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Hv(r,e,t,n){const i=n.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){r.drawElements(s,m,o,h*l),t.update(m,s,1)}function f(h,m,_){if(_===0)return;let p,d;if(i)p=r,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,o,h*l,_),t.update(m,s,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function Wv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function qv(r,e){return r[0]-e[0]}function Xv(r,e){return Math.abs(e[1])-Math.abs(r[1])}function jv(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new dt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=p!==void 0?p.length:0;let g=s.get(u);if(g===void 0||g.count!==d){let j=function(){R.dispose(),s.delete(u),u.removeEventListener("dispose",j)};var _=j;g!==void 0&&g.texture.dispose();const M=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let D=0;M===!0&&(D=1),x===!0&&(D=2),E===!0&&(D=3);let V=u.attributes.position.count*D,J=1;V>e.maxTextureSize&&(J=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const z=new Float32Array(V*J*4*d),R=new id(z,V,J,d);R.type=Pi,R.needsUpdate=!0;const B=D*4;for(let $=0;$<d;$++){const G=L[$],O=v[$],k=w[$],Q=V*J*4*$;for(let Z=0;Z<G.count;Z++){const K=Z*B;M===!0&&(a.fromBufferAttribute(G,Z),z[Q+K+0]=a.x,z[Q+K+1]=a.y,z[Q+K+2]=a.z,z[Q+K+3]=0),x===!0&&(a.fromBufferAttribute(O,Z),z[Q+K+4]=a.x,z[Q+K+5]=a.y,z[Q+K+6]=a.z,z[Q+K+7]=0),E===!0&&(a.fromBufferAttribute(k,Z),z[Q+K+8]=a.x,z[Q+K+9]=a.y,z[Q+K+10]=a.z,z[Q+K+11]=k.itemSize===4?a.w:1)}}g={count:d,texture:R,size:new Te(V,J)},s.set(u,g),u.addEventListener("dispose",j)}let y=0;for(let M=0;M<m.length;M++)y+=m[M];const b=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(r,"morphTargetBaseInfluence",b),h.getUniforms().setValue(r,"morphTargetInfluences",m),h.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const p=m===void 0?0:m.length;let d=n[u.id];if(d===void 0||d.length!==p){d=[];for(let x=0;x<p;x++)d[x]=[x,0];n[u.id]=d}for(let x=0;x<p;x++){const E=d[x];E[0]=x,E[1]=m[x]}d.sort(Xv);for(let x=0;x<8;x++)x<p&&d[x][1]?(o[x][0]=d[x][0],o[x][1]=d[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(qv);const g=u.morphAttributes.position,y=u.morphAttributes.normal;let b=0;for(let x=0;x<8;x++){const E=o[x],L=E[0],v=E[1];L!==Number.MAX_SAFE_INTEGER&&v?(g&&u.getAttribute("morphTarget"+x)!==g[L]&&u.setAttribute("morphTarget"+x,g[L]),y&&u.getAttribute("morphNormal"+x)!==y[L]&&u.setAttribute("morphNormal"+x,y[L]),i[x]=v,b+=v):(g&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),y&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const M=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(r,"morphTargetBaseInfluence",M),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Yv(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const fd=new Ht,hd=new id,dd=new I_,pd=new ld,Wu=[],qu=[],Xu=new Float32Array(16),ju=new Float32Array(9),Yu=new Float32Array(4);function es(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Wu[i];if(s===void 0&&(s=new Float32Array(i),Wu[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function st(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function at(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Za(r,e){let t=qu[e];t===void 0&&(t=new Int32Array(e),qu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function $v(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Zv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;r.uniform2fv(this.addr,e),at(t,e)}}function Kv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;r.uniform3fv(this.addr,e),at(t,e)}}function Jv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;r.uniform4fv(this.addr,e),at(t,e)}}function Qv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;Yu.set(n),r.uniformMatrix2fv(this.addr,!1,Yu),at(t,n)}}function ey(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;ju.set(n),r.uniformMatrix3fv(this.addr,!1,ju),at(t,n)}}function ty(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(st(t,n))return;Xu.set(n),r.uniformMatrix4fv(this.addr,!1,Xu),at(t,n)}}function ny(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function iy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;r.uniform2iv(this.addr,e),at(t,e)}}function ry(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;r.uniform3iv(this.addr,e),at(t,e)}}function sy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;r.uniform4iv(this.addr,e),at(t,e)}}function ay(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function oy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;r.uniform2uiv(this.addr,e),at(t,e)}}function ly(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;r.uniform3uiv(this.addr,e),at(t,e)}}function cy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;r.uniform4uiv(this.addr,e),at(t,e)}}function uy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||fd,i)}function fy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||dd,i)}function hy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||pd,i)}function dy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||hd,i)}function py(r){switch(r){case 5126:return $v;case 35664:return Zv;case 35665:return Kv;case 35666:return Jv;case 35674:return Qv;case 35675:return ey;case 35676:return ty;case 5124:case 35670:return ny;case 35667:case 35671:return iy;case 35668:case 35672:return ry;case 35669:case 35673:return sy;case 5125:return ay;case 36294:return oy;case 36295:return ly;case 36296:return cy;case 35678:case 36198:case 36298:case 36306:case 35682:return uy;case 35679:case 36299:case 36307:return fy;case 35680:case 36300:case 36308:case 36293:return hy;case 36289:case 36303:case 36311:case 36292:return dy}}function my(r,e){r.uniform1fv(this.addr,e)}function gy(r,e){const t=es(e,this.size,2);r.uniform2fv(this.addr,t)}function _y(r,e){const t=es(e,this.size,3);r.uniform3fv(this.addr,t)}function xy(r,e){const t=es(e,this.size,4);r.uniform4fv(this.addr,t)}function vy(r,e){const t=es(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function yy(r,e){const t=es(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function by(r,e){const t=es(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function My(r,e){r.uniform1iv(this.addr,e)}function Sy(r,e){r.uniform2iv(this.addr,e)}function wy(r,e){r.uniform3iv(this.addr,e)}function Ty(r,e){r.uniform4iv(this.addr,e)}function Ey(r,e){r.uniform1uiv(this.addr,e)}function Ay(r,e){r.uniform2uiv(this.addr,e)}function Cy(r,e){r.uniform3uiv(this.addr,e)}function Ly(r,e){r.uniform4uiv(this.addr,e)}function Py(r,e,t){const n=this.cache,i=e.length,s=Za(t,i);st(n,s)||(r.uniform1iv(this.addr,s),at(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||fd,s[a])}function Dy(r,e,t){const n=this.cache,i=e.length,s=Za(t,i);st(n,s)||(r.uniform1iv(this.addr,s),at(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||dd,s[a])}function Ry(r,e,t){const n=this.cache,i=e.length,s=Za(t,i);st(n,s)||(r.uniform1iv(this.addr,s),at(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||pd,s[a])}function Iy(r,e,t){const n=this.cache,i=e.length,s=Za(t,i);st(n,s)||(r.uniform1iv(this.addr,s),at(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||hd,s[a])}function Oy(r){switch(r){case 5126:return my;case 35664:return gy;case 35665:return _y;case 35666:return xy;case 35674:return vy;case 35675:return yy;case 35676:return by;case 5124:case 35670:return My;case 35667:case 35671:return Sy;case 35668:case 35672:return wy;case 35669:case 35673:return Ty;case 5125:return Ey;case 36294:return Ay;case 36295:return Cy;case 36296:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Ry;case 36289:case 36303:case 36311:case 36292:return Iy}}class Fy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=py(t.type)}}class Ny{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Oy(t.type)}}class zy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Go=/(\w+)(\])?(\[|\.)?/g;function $u(r,e){r.seq.push(e),r.map[e.id]=e}function Uy(r,e,t){const n=r.name,i=n.length;for(Go.lastIndex=0;;){const s=Go.exec(n),a=Go.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){$u(t,c===void 0?new Fy(o,r,e):new Ny(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new zy(o),$u(t,f)),t=f}}}class pa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Uy(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Zu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let ky=0;function By(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Gy(r){switch(r){case Hi:return["Linear","( value )"];case Ue:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Ku(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+By(r.getShaderSource(e),a)}else return i}function Vy(r,e){const t=Gy(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Hy(r,e){let t;switch(e){case a_:t="Linear";break;case o_:t="Reinhard";break;case l_:t="OptimizedCineon";break;case Zh:t="ACESFilmic";break;case c_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Wy(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hs).join(`
`)}function qy(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xy(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function hs(r){return r!==""}function Ju(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(r){return r.replace(jy,Yy)}function Yy(r,e){const t=Se[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Tl(t)}const $y=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ef(r){return r.replace($y,Zy)}function Zy(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function tf(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ky(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Xh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ug?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===fs&&(e="SHADOWMAP_TYPE_VSM"),e}function Jy(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Fr:case Nr:e="ENVMAP_TYPE_CUBE";break;case ja:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qy(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Nr:e="ENVMAP_MODE_REFRACTION";break}return e}function eb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case $h:e="ENVMAP_BLENDING_MULTIPLY";break;case r_:e="ENVMAP_BLENDING_MIX";break;case s_:e="ENVMAP_BLENDING_ADD";break}return e}function tb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function nb(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ky(t),c=Jy(t),u=Qy(t),f=eb(t),h=tb(t),m=t.isWebGL2?"":Wy(t),_=qy(s),p=i.createProgram();let d,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[_].filter(hs).join(`
`),d.length>0&&(d+=`
`),g=[m,_].filter(hs).join(`
`),g.length>0&&(g+=`
`)):(d=[tf(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),g=[m,tf(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Se.tonemapping_pars_fragment:"",t.toneMapping!==zn?Hy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Se.encodings_pars_fragment,Vy("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hs).join(`
`)),a=Tl(a),a=Ju(a,t),a=Qu(a,t),o=Tl(o),o=Ju(o,t),o=Qu(o,t),a=ef(a),o=ef(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,g=["#define varying in",t.glslVersion===wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=y+d+a,M=y+g+o,x=Zu(i,35633,b),E=Zu(i,35632,M);if(i.attachShader(p,x),i.attachShader(p,E),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const w=i.getProgramInfoLog(p).trim(),D=i.getShaderInfoLog(x).trim(),V=i.getShaderInfoLog(E).trim();let J=!0,z=!0;if(i.getProgramParameter(p,35714)===!1){J=!1;const R=Ku(i,x,"vertex"),B=Ku(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+w+`
`+R+`
`+B)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(D===""||V==="")&&(z=!1);z&&(this.diagnostics={runnable:J,programLog:w,vertexShader:{log:D,prefix:d},fragmentShader:{log:V,prefix:g}})}i.deleteShader(x),i.deleteShader(E);let L;this.getUniforms=function(){return L===void 0&&(L=new pa(i,p)),L};let v;return this.getAttributes=function(){return v===void 0&&(v=Xy(i,p)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=ky++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=x,this.fragmentShader=E,this}let ib=0;class rb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sb(e),t.set(e,n)),n}}class sb{constructor(e){this.id=ib++,this.code=e,this.usedTimes=0}}function ab(r,e,t,n,i,s,a){const o=new lc,l=new rb,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v,w,D,V,J){const z=V.fog,R=J.geometry,B=v.isMeshStandardMaterial?V.environment:null,j=(v.isMeshStandardMaterial?t:e).get(v.envMap||B),$=!!j&&j.mapping===ja?j.image.height:null,G=_[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const O=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,k=O!==void 0?O.length:0;let Q=0;R.morphAttributes.position!==void 0&&(Q=1),R.morphAttributes.normal!==void 0&&(Q=2),R.morphAttributes.color!==void 0&&(Q=3);let Z,K,re,pe;if(G){const Fe=vn[G];Z=Fe.vertexShader,K=Fe.fragmentShader}else Z=v.vertexShader,K=v.fragmentShader,l.update(v),re=l.getVertexShaderID(v),pe=l.getFragmentShaderID(v);const Y=r.getRenderTarget(),De=v.alphaTest>0,xe=v.clearcoat>0,ve=v.iridescence>0;return{isWebGL2:u,shaderID:G,shaderName:v.type,vertexShader:Z,fragmentShader:K,defines:v.defines,customVertexShaderID:re,customFragmentShaderID:pe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:J.isInstancedMesh===!0,instancingColor:J.isInstancedMesh===!0&&J.instanceColor!==null,supportsVertexTextures:h,outputEncoding:Y===null?r.outputEncoding:Y.isXRRenderTarget===!0?Y.texture.encoding:Hi,map:!!v.map,matcap:!!v.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:$,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===L_,tangentSpaceNormalMap:v.normalMapType===C_,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ue,clearcoat:xe,clearcoatMap:xe&&!!v.clearcoatMap,clearcoatRoughnessMap:xe&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:xe&&!!v.clearcoatNormalMap,iridescence:ve,iridescenceMap:ve&&!!v.iridescenceMap,iridescenceThicknessMap:ve&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Tr,alphaMap:!!v.alphaMap,alphaTest:De,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!R.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!z,useFog:v.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:Q,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:zn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Qn,flipSided:v.side===Mt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)w.push(D),w.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(g(w,v),y(w,v),w.push(r.outputEncoding)),w.push(v.customProgramCacheKey),w.join()}function g(v,w){v.push(w.precision),v.push(w.outputEncoding),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.combine),v.push(w.vertexUvs),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function y(v,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.map&&o.enable(4),w.matcap&&o.enable(5),w.envMap&&o.enable(6),w.lightMap&&o.enable(7),w.aoMap&&o.enable(8),w.emissiveMap&&o.enable(9),w.bumpMap&&o.enable(10),w.normalMap&&o.enable(11),w.objectSpaceNormalMap&&o.enable(12),w.tangentSpaceNormalMap&&o.enable(13),w.clearcoat&&o.enable(14),w.clearcoatMap&&o.enable(15),w.clearcoatRoughnessMap&&o.enable(16),w.clearcoatNormalMap&&o.enable(17),w.iridescence&&o.enable(18),w.iridescenceMap&&o.enable(19),w.iridescenceThicknessMap&&o.enable(20),w.displacementMap&&o.enable(21),w.specularMap&&o.enable(22),w.roughnessMap&&o.enable(23),w.metalnessMap&&o.enable(24),w.gradientMap&&o.enable(25),w.alphaMap&&o.enable(26),w.alphaTest&&o.enable(27),w.vertexColors&&o.enable(28),w.vertexAlphas&&o.enable(29),w.vertexUvs&&o.enable(30),w.vertexTangents&&o.enable(31),w.uvsVertexOnly&&o.enable(32),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.physicallyCorrectLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.specularIntensityMap&&o.enable(15),w.specularColorMap&&o.enable(16),w.transmission&&o.enable(17),w.transmissionMap&&o.enable(18),w.thicknessMap&&o.enable(19),w.sheen&&o.enable(20),w.sheenColorMap&&o.enable(21),w.sheenRoughnessMap&&o.enable(22),w.decodeVideoTexture&&o.enable(23),w.opaque&&o.enable(24),v.push(o.mask)}function b(v){const w=_[v.type];let D;if(w){const V=vn[w];D=q_.clone(V.uniforms)}else D=v.uniforms;return D}function M(v,w){let D;for(let V=0,J=c.length;V<J;V++){const z=c[V];if(z.cacheKey===w){D=z,++D.usedTimes;break}}return D===void 0&&(D=new nb(r,w,v,s),c.push(D)),D}function x(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),v.destroy()}}function E(v){l.remove(v)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:b,acquireProgram:M,releaseProgram:x,releaseShaderCache:E,programs:c,dispose:L}}function ob(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function lb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function nf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function rf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f,h,m,_,p,d){let g=r[e];return g===void 0?(g={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:p,group:d},r[e]=g):(g.id=f.id,g.object=f,g.geometry=h,g.material=m,g.groupOrder=_,g.renderOrder=f.renderOrder,g.z=p,g.group=d),e++,g}function o(f,h,m,_,p,d){const g=a(f,h,m,_,p,d);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):t.push(g)}function l(f,h,m,_,p,d){const g=a(f,h,m,_,p,d);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):t.unshift(g)}function c(f,h){t.length>1&&t.sort(f||lb),n.length>1&&n.sort(h||nf),i.length>1&&i.sort(h||nf)}function u(){for(let f=e,h=r.length;f<h;f++){const m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function cb(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new rf,r.set(n,[a])):i>=s.length?(a=new rf,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function ub(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new We};break;case"SpotLight":t={position:new N,direction:new N,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function fb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let hb=0;function db(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function pb(r,e){const t=new ub,n=fb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new N);const s=new N,a=new pt,o=new pt;function l(u,f){let h=0,m=0,_=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let p=0,d=0,g=0,y=0,b=0,M=0,x=0,E=0,L=0,v=0;u.sort(db);const w=f!==!0?Math.PI:1;for(let V=0,J=u.length;V<J;V++){const z=u[V],R=z.color,B=z.intensity,j=z.distance,$=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=R.r*B*w,m+=R.g*B*w,_+=R.b*B*w;else if(z.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(z.sh.coefficients[G],B);else if(z.isDirectionalLight){const G=t.get(z);if(G.color.copy(z.color).multiplyScalar(z.intensity*w),z.castShadow){const O=z.shadow,k=n.get(z);k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=z.shadow.matrix,M++}i.directional[p]=G,p++}else if(z.isSpotLight){const G=t.get(z);G.position.setFromMatrixPosition(z.matrixWorld),G.color.copy(R).multiplyScalar(B*w),G.distance=j,G.coneCos=Math.cos(z.angle),G.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),G.decay=z.decay,i.spot[g]=G;const O=z.shadow;if(z.map&&(i.spotLightMap[L]=z.map,L++,O.updateMatrices(z),z.castShadow&&v++),i.spotLightMatrix[g]=O.matrix,z.castShadow){const k=n.get(z);k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,i.spotShadow[g]=k,i.spotShadowMap[g]=$,E++}g++}else if(z.isRectAreaLight){const G=t.get(z);G.color.copy(R).multiplyScalar(B),G.halfWidth.set(z.width*.5,0,0),G.halfHeight.set(0,z.height*.5,0),i.rectArea[y]=G,y++}else if(z.isPointLight){const G=t.get(z);if(G.color.copy(z.color).multiplyScalar(z.intensity*w),G.distance=z.distance,G.decay=z.decay,z.castShadow){const O=z.shadow,k=n.get(z);k.shadowBias=O.bias,k.shadowNormalBias=O.normalBias,k.shadowRadius=O.radius,k.shadowMapSize=O.mapSize,k.shadowCameraNear=O.camera.near,k.shadowCameraFar=O.camera.far,i.pointShadow[d]=k,i.pointShadowMap[d]=$,i.pointShadowMatrix[d]=z.shadow.matrix,x++}i.point[d]=G,d++}else if(z.isHemisphereLight){const G=t.get(z);G.skyColor.copy(z.color).multiplyScalar(B*w),G.groundColor.copy(z.groundColor).multiplyScalar(B*w),i.hemi[b]=G,b++}}y>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=_;const D=i.hash;(D.directionalLength!==p||D.pointLength!==d||D.spotLength!==g||D.rectAreaLength!==y||D.hemiLength!==b||D.numDirectionalShadows!==M||D.numPointShadows!==x||D.numSpotShadows!==E||D.numSpotMaps!==L)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=y,i.point.length=d,i.hemi.length=b,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=E+L-v,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=v,D.directionalLength=p,D.pointLength=d,D.spotLength=g,D.rectAreaLength=y,D.hemiLength=b,D.numDirectionalShadows=M,D.numPointShadows=x,D.numSpotShadows=E,D.numSpotMaps=L,i.version=hb++)}function c(u,f){let h=0,m=0,_=0,p=0,d=0;const g=f.matrixWorldInverse;for(let y=0,b=u.length;y<b;y++){const M=u[y];if(M.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),h++}else if(M.isSpotLight){const x=i.spot[_];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),_++}else if(M.isRectAreaLight){const x=i.rectArea[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),o.identity(),a.copy(M.matrixWorld),a.premultiply(g),o.extractRotation(a),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){const x=i.point[m];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),m++}else if(M.isHemisphereLight){const x=i.hemi[d];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(g),d++}}}return{setup:l,setupView:c,state:i}}function sf(r,e){const t=new pb(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function mb(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new sf(r,e),t.set(s,[l])):a>=o.length?(l=new sf(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class gb extends $a{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _b extends $a{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vb=`uniform sampler2D shadow_pass;
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
}`;function yb(r,e,t){let n=new cd;const i=new Te,s=new Te,a=new dt,o=new gb({depthPacking:A_}),l=new _b,c={},u=t.maxTextureSize,f={0:Mt,1:Or,2:Qn},h=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:xb,fragmentShader:vb}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new Bn;_.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new kt(_,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xh,this.render=function(M,x,E){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||M.length===0)return;const L=r.getRenderTarget(),v=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),D=r.state;D.setBlending(ii),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let V=0,J=M.length;V<J;V++){const z=M[V],R=z.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const B=R.getFrameExtents();if(i.multiply(B),s.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/B.x),i.x=s.x*B.x,R.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/B.y),i.y=s.y*B.y,R.mapSize.y=s.y)),R.map===null){const $=this.type!==fs?{minFilter:wt,magFilter:wt}:{};R.map=new Wi(i.x,i.y,$),R.map.texture.name=z.name+".shadowMap",R.camera.updateProjectionMatrix()}r.setRenderTarget(R.map),r.clear();const j=R.getViewportCount();for(let $=0;$<j;$++){const G=R.getViewport($);a.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),D.viewport(a),R.updateMatrices(z,$),n=R.getFrustum(),b(x,E,R.camera,z,this.type)}R.isPointLightShadow!==!0&&this.type===fs&&g(R,E),R.needsUpdate=!1}d.needsUpdate=!1,r.setRenderTarget(L,v,w)};function g(M,x){const E=e.update(p);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Wi(i.x,i.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(x,null,E,h,p,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(x,null,E,m,p,null)}function y(M,x,E,L,v,w){let D=null;const V=E.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(V!==void 0?D=V:D=E.isPointLight===!0?l:o,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0){const J=D.uuid,z=x.uuid;let R=c[J];R===void 0&&(R={},c[J]=R);let B=R[z];B===void 0&&(B=D.clone(),R[z]=B),D=B}return D.visible=x.visible,D.wireframe=x.wireframe,w===fs?D.side=x.shadowSide!==null?x.shadowSide:x.side:D.side=x.shadowSide!==null?x.shadowSide:f[x.side],D.alphaMap=x.alphaMap,D.alphaTest=x.alphaTest,D.clipShadows=x.clipShadows,D.clippingPlanes=x.clippingPlanes,D.clipIntersection=x.clipIntersection,D.displacementMap=x.displacementMap,D.displacementScale=x.displacementScale,D.displacementBias=x.displacementBias,D.wireframeLinewidth=x.wireframeLinewidth,D.linewidth=x.linewidth,E.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(E.matrixWorld),D.nearDistance=L,D.farDistance=v),D}function b(M,x,E,L,v){if(M.visible===!1)return;if(M.layers.test(x.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===fs)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,M.matrixWorld);const V=e.update(M),J=M.material;if(Array.isArray(J)){const z=V.groups;for(let R=0,B=z.length;R<B;R++){const j=z[R],$=J[j.materialIndex];if($&&$.visible){const G=y(M,$,L,E.near,E.far,v);r.renderBufferDirect(E,null,V,G,M,j)}}}else if(J.visible){const z=y(M,J,L,E.near,E.far,v);r.renderBufferDirect(E,null,V,z,M,null)}}const D=M.children;for(let V=0,J=D.length;V<J;V++)b(D[V],x,E,L,v)}}function bb(r,e,t){const n=t.isWebGL2;function i(){let P=!1;const q=new dt;let ee=null;const le=new dt(0,0,0,0);return{setMask:function(de){ee!==de&&!P&&(r.colorMask(de,de,de,de),ee=de)},setLocked:function(de){P=de},setClear:function(de,Re,lt,mt,pi){pi===!0&&(de*=mt,Re*=mt,lt*=mt),q.set(de,Re,lt,mt),le.equals(q)===!1&&(r.clearColor(de,Re,lt,mt),le.copy(q))},reset:function(){P=!1,ee=null,le.set(-1,0,0,0)}}}function s(){let P=!1,q=null,ee=null,le=null;return{setTest:function(de){de?De(2929):xe(2929)},setMask:function(de){q!==de&&!P&&(r.depthMask(de),q=de)},setFunc:function(de){if(ee!==de){switch(de){case Kg:r.depthFunc(512);break;case Jg:r.depthFunc(519);break;case Qg:r.depthFunc(513);break;case vl:r.depthFunc(515);break;case e_:r.depthFunc(514);break;case t_:r.depthFunc(518);break;case n_:r.depthFunc(516);break;case i_:r.depthFunc(517);break;default:r.depthFunc(515)}ee=de}},setLocked:function(de){P=de},setClear:function(de){le!==de&&(r.clearDepth(de),le=de)},reset:function(){P=!1,q=null,ee=null,le=null}}}function a(){let P=!1,q=null,ee=null,le=null,de=null,Re=null,lt=null,mt=null,pi=null;return{setTest:function(Ge){P||(Ge?De(2960):xe(2960))},setMask:function(Ge){q!==Ge&&!P&&(r.stencilMask(Ge),q=Ge)},setFunc:function(Ge,En,Yt){(ee!==Ge||le!==En||de!==Yt)&&(r.stencilFunc(Ge,En,Yt),ee=Ge,le=En,de=Yt)},setOp:function(Ge,En,Yt){(Re!==Ge||lt!==En||mt!==Yt)&&(r.stencilOp(Ge,En,Yt),Re=Ge,lt=En,mt=Yt)},setLocked:function(Ge){P=Ge},setClear:function(Ge){pi!==Ge&&(r.clearStencil(Ge),pi=Ge)},reset:function(){P=!1,q=null,ee=null,le=null,de=null,Re=null,lt=null,mt=null,pi=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},m={},_=new WeakMap,p=[],d=null,g=!1,y=null,b=null,M=null,x=null,E=null,L=null,v=null,w=!1,D=null,V=null,J=null,z=null,R=null;const B=r.getParameter(35661);let j=!1,$=0;const G=r.getParameter(7938);G.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(G)[1]),j=$>=1):G.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),j=$>=2);let O=null,k={};const Q=r.getParameter(3088),Z=r.getParameter(2978),K=new dt().fromArray(Q),re=new dt().fromArray(Z);function pe(P,q,ee){const le=new Uint8Array(4),de=r.createTexture();r.bindTexture(P,de),r.texParameteri(P,10241,9728),r.texParameteri(P,10240,9728);for(let Re=0;Re<ee;Re++)r.texImage2D(q+Re,0,6408,1,1,0,6408,5121,le);return de}const Y={};Y[3553]=pe(3553,3553,1),Y[34067]=pe(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(2929),l.setFunc(vl),tt(!1),Rt(Yc),De(2884),Ze(ii);function De(P){h[P]!==!0&&(r.enable(P),h[P]=!0)}function xe(P){h[P]!==!1&&(r.disable(P),h[P]=!1)}function ve(P,q){return m[P]!==q?(r.bindFramebuffer(P,q),m[P]=q,n&&(P===36009&&(m[36160]=q),P===36160&&(m[36009]=q)),!0):!1}function ue(P,q){let ee=p,le=!1;if(P)if(ee=_.get(q),ee===void 0&&(ee=[],_.set(q,ee)),P.isWebGLMultipleRenderTargets){const de=P.texture;if(ee.length!==de.length||ee[0]!==36064){for(let Re=0,lt=de.length;Re<lt;Re++)ee[Re]=36064+Re;ee.length=de.length,le=!0}}else ee[0]!==36064&&(ee[0]=36064,le=!0);else ee[0]!==1029&&(ee[0]=1029,le=!0);le&&(t.isWebGL2?r.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function Fe(P){return d!==P?(r.useProgram(P),d=P,!0):!1}const be={[yr]:32774,[Bg]:32778,[Gg]:32779};if(n)be[Jc]=32775,be[Qc]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(be[Jc]=P.MIN_EXT,be[Qc]=P.MAX_EXT)}const ge={[Vg]:0,[Hg]:1,[Wg]:768,[jh]:770,[Zg]:776,[Yg]:774,[Xg]:772,[qg]:769,[Yh]:771,[$g]:775,[jg]:773};function Ze(P,q,ee,le,de,Re,lt,mt){if(P===ii){g===!0&&(xe(3042),g=!1);return}if(g===!1&&(De(3042),g=!0),P!==kg){if(P!==y||mt!==w){if((b!==yr||E!==yr)&&(r.blendEquation(32774),b=yr,E=yr),mt)switch(P){case Tr:r.blendFuncSeparate(1,771,1,771);break;case $c:r.blendFunc(1,1);break;case Zc:r.blendFuncSeparate(0,769,0,1);break;case Kc:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Tr:r.blendFuncSeparate(770,771,1,771);break;case $c:r.blendFunc(770,1);break;case Zc:r.blendFuncSeparate(0,769,0,1);break;case Kc:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,x=null,L=null,v=null,y=P,w=mt}return}de=de||q,Re=Re||ee,lt=lt||le,(q!==b||de!==E)&&(r.blendEquationSeparate(be[q],be[de]),b=q,E=de),(ee!==M||le!==x||Re!==L||lt!==v)&&(r.blendFuncSeparate(ge[ee],ge[le],ge[Re],ge[lt]),M=ee,x=le,L=Re,v=lt),y=P,w=null}function ot(P,q){P.side===Qn?xe(2884):De(2884);let ee=P.side===Mt;q&&(ee=!ee),tt(ee),P.blending===Tr&&P.transparent===!1?Ze(ii):Ze(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const le=P.stencilWrite;c.setTest(le),le&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ne(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?De(32926):xe(32926)}function tt(P){D!==P&&(P?r.frontFace(2304):r.frontFace(2305),D=P)}function Rt(P){P!==Ng?(De(2884),P!==V&&(P===Yc?r.cullFace(1029):P===zg?r.cullFace(1028):r.cullFace(1032))):xe(2884),V=P}function nt(P){P!==J&&(j&&r.lineWidth(P),J=P)}function Ne(P,q,ee){P?(De(32823),(z!==q||R!==ee)&&(r.polygonOffset(q,ee),z=q,R=ee)):xe(32823)}function Xt(P){P?De(3089):xe(3089)}function jt(P){P===void 0&&(P=33984+B-1),O!==P&&(r.activeTexture(P),O=P)}function A(P,q,ee){ee===void 0&&(O===null?ee=33984+B-1:ee=O);let le=k[ee];le===void 0&&(le={type:void 0,texture:void 0},k[ee]=le),(le.type!==P||le.texture!==q)&&(O!==ee&&(r.activeTexture(ee),O=ee),r.bindTexture(P,q||Y[P]),le.type=P,le.texture=q)}function S(){const P=k[O];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function H(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function C(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function I(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(P){K.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),K.copy(P))}function fe(P){re.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),re.copy(P))}function Ae(P,q){let ee=f.get(q);ee===void 0&&(ee=new WeakMap,f.set(q,ee));let le=ee.get(P);le===void 0&&(le=r.getUniformBlockIndex(q,P.name),ee.set(P,le))}function Le(P,q){const le=f.get(q).get(P);u.get(P)!==le&&(r.uniformBlockBinding(q,le,P.__bindingPointIndex),u.set(P,le))}function ze(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},O=null,k={},m={},_=new WeakMap,p=[],d=null,g=!1,y=null,b=null,M=null,x=null,E=null,L=null,v=null,w=!1,D=null,V=null,J=null,z=null,R=null,K.set(0,0,r.canvas.width,r.canvas.height),re.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:De,disable:xe,bindFramebuffer:ve,drawBuffers:ue,useProgram:Fe,setBlending:Ze,setMaterial:ot,setFlipSided:tt,setCullFace:Rt,setLineWidth:nt,setPolygonOffset:Ne,setScissorTest:Xt,activeTexture:jt,bindTexture:A,unbindTexture:S,compressedTexImage2D:H,compressedTexImage3D:te,texImage2D:ce,texImage3D:ae,updateUBOMapping:Ae,uniformBlockBinding:Le,texStorage2D:I,texStorage3D:oe,texSubImage2D:ne,texSubImage3D:se,compressedTexSubImage2D:_e,compressedTexSubImage3D:C,scissor:he,viewport:fe,reset:ze}}function Mb(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),_=new WeakMap;let p;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,S){return g?new OffscreenCanvas(A,S):Ts("canvas")}function b(A,S,H,te){let ne=1;if((A.width>te||A.height>te)&&(ne=te/Math.max(A.width,A.height)),ne<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const se=S?wl:Math.floor,_e=se(ne*A.width),C=se(ne*A.height);p===void 0&&(p=y(_e,C));const I=H?y(_e,C):p;return I.width=_e,I.height=C,I.getContext("2d").drawImage(A,0,0,_e,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+_e+"x"+C+")."),I}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function M(A){return Eu(A.width)&&Eu(A.height)}function x(A){return o?!1:A.wrapS!==hn||A.wrapT!==hn||A.minFilter!==wt&&A.minFilter!==Tt}function E(A,S){return A.generateMipmaps&&S&&A.minFilter!==wt&&A.minFilter!==Tt}function L(A){r.generateMipmap(A)}function v(A,S,H,te,ne=!1){if(o===!1)return S;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let se=S;return S===6403&&(H===5126&&(se=33326),H===5131&&(se=33325),H===5121&&(se=33321)),S===33319&&(H===5126&&(se=33328),H===5131&&(se=33327),H===5121&&(se=33323)),S===6408&&(H===5126&&(se=34836),H===5131&&(se=34842),H===5121&&(se=te===Ue&&ne===!1?35907:32856),H===32819&&(se=32854),H===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function w(A,S,H){return E(A,H)===!0||A.isFramebufferTexture&&A.minFilter!==wt&&A.minFilter!==Tt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function D(A){return A===wt||A===eu||A===tu?9728:9729}function V(A){const S=A.target;S.removeEventListener("dispose",V),z(S),S.isVideoTexture&&_.delete(S)}function J(A){const S=A.target;S.removeEventListener("dispose",J),B(S)}function z(A){const S=n.get(A);if(S.__webglInit===void 0)return;const H=A.source,te=d.get(H);if(te){const ne=te[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(A),Object.keys(te).length===0&&d.delete(H)}n.remove(A)}function R(A){const S=n.get(A);r.deleteTexture(S.__webglTexture);const H=A.source,te=d.get(H);delete te[S.__cacheKey],a.memory.textures--}function B(A){const S=A.texture,H=n.get(A),te=n.get(S);if(te.__webglTexture!==void 0&&(r.deleteTexture(te.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)r.deleteFramebuffer(H.__webglFramebuffer[ne]),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer[ne]);else{if(r.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&r.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ne=0;ne<H.__webglColorRenderbuffer.length;ne++)H.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer(H.__webglColorRenderbuffer[ne]);H.__webglDepthRenderbuffer&&r.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ne=0,se=S.length;ne<se;ne++){const _e=n.get(S[ne]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(S[ne])}n.remove(S),n.remove(A)}let j=0;function $(){j=0}function G(){const A=j;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),j+=1,A}function O(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.encoding),S.join()}function k(A,S){const H=n.get(A);if(A.isVideoTexture&&Xt(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const te=A.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(H,A,S);return}}t.bindTexture(3553,H.__webglTexture,33984+S)}function Q(A,S){const H=n.get(A);if(A.version>0&&H.__version!==A.version){xe(H,A,S);return}t.bindTexture(35866,H.__webglTexture,33984+S)}function Z(A,S){const H=n.get(A);if(A.version>0&&H.__version!==A.version){xe(H,A,S);return}t.bindTexture(32879,H.__webglTexture,33984+S)}function K(A,S){const H=n.get(A);if(A.version>0&&H.__version!==A.version){ve(H,A,S);return}t.bindTexture(34067,H.__webglTexture,33984+S)}const re={[bl]:10497,[hn]:33071,[Ml]:33648},pe={[wt]:9728,[eu]:9984,[tu]:9986,[Tt]:9729,[u_]:9985,[Ya]:9987};function Y(A,S,H){if(H?(r.texParameteri(A,10242,re[S.wrapS]),r.texParameteri(A,10243,re[S.wrapT]),(A===32879||A===35866)&&r.texParameteri(A,32882,re[S.wrapR]),r.texParameteri(A,10240,pe[S.magFilter]),r.texParameteri(A,10241,pe[S.minFilter])):(r.texParameteri(A,10242,33071),r.texParameteri(A,10243,33071),(A===32879||A===35866)&&r.texParameteri(A,32882,33071),(S.wrapS!==hn||S.wrapT!==hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,10240,D(S.magFilter)),r.texParameteri(A,10241,D(S.minFilter)),S.minFilter!==wt&&S.minFilter!==Tt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(S.type===Pi&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===ws&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(A,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function De(A,S){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",V));const te=S.source;let ne=d.get(te);ne===void 0&&(ne={},d.set(te,ne));const se=O(S);if(se!==A.__cacheKey){ne[se]===void 0&&(ne[se]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ne[se].usedTimes++;const _e=ne[A.__cacheKey];_e!==void 0&&(ne[A.__cacheKey].usedTimes--,_e.usedTimes===0&&R(S)),A.__cacheKey=se,A.__webglTexture=ne[se].texture}return H}function xe(A,S,H){let te=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=35866),S.isData3DTexture&&(te=32879);const ne=De(A,S),se=S.source;t.bindTexture(te,A.__webglTexture,33984+H);const _e=n.get(se);if(se.version!==_e.__version||ne===!0){t.activeTexture(33984+H),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const C=x(S)&&M(S.image)===!1;let I=b(S.image,C,!1,u);I=jt(S,I);const oe=M(I)||o,ce=s.convert(S.format,S.encoding);let ae=s.convert(S.type),he=v(S.internalFormat,ce,ae,S.encoding,S.isVideoTexture);Y(te,S,oe);let fe;const Ae=S.mipmaps,Le=o&&S.isVideoTexture!==!0,ze=_e.__version===void 0||ne===!0,P=w(S,I,oe);if(S.isDepthTexture)he=6402,o?S.type===Pi?he=36012:S.type===Li?he=33190:S.type===Er?he=35056:he=33189:S.type===Pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ni&&he===6402&&S.type!==Jh&&S.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Li,ae=s.convert(S.type)),S.format===Ur&&he===6402&&(he=34041,S.type!==Er&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Er,ae=s.convert(S.type))),ze&&(Le?t.texStorage2D(3553,1,he,I.width,I.height):t.texImage2D(3553,0,he,I.width,I.height,0,ce,ae,null));else if(S.isDataTexture)if(Ae.length>0&&oe){Le&&ze&&t.texStorage2D(3553,P,he,Ae[0].width,Ae[0].height);for(let q=0,ee=Ae.length;q<ee;q++)fe=Ae[q],Le?t.texSubImage2D(3553,q,0,0,fe.width,fe.height,ce,ae,fe.data):t.texImage2D(3553,q,he,fe.width,fe.height,0,ce,ae,fe.data);S.generateMipmaps=!1}else Le?(ze&&t.texStorage2D(3553,P,he,I.width,I.height),t.texSubImage2D(3553,0,0,0,I.width,I.height,ce,ae,I.data)):t.texImage2D(3553,0,he,I.width,I.height,0,ce,ae,I.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Le&&ze&&t.texStorage3D(35866,P,he,Ae[0].width,Ae[0].height,I.depth);for(let q=0,ee=Ae.length;q<ee;q++)fe=Ae[q],S.format!==dn?ce!==null?Le?t.compressedTexSubImage3D(35866,q,0,0,0,fe.width,fe.height,I.depth,ce,fe.data,0,0):t.compressedTexImage3D(35866,q,he,fe.width,fe.height,I.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage3D(35866,q,0,0,0,fe.width,fe.height,I.depth,ce,ae,fe.data):t.texImage3D(35866,q,he,fe.width,fe.height,I.depth,0,ce,ae,fe.data)}else{Le&&ze&&t.texStorage2D(3553,P,he,Ae[0].width,Ae[0].height);for(let q=0,ee=Ae.length;q<ee;q++)fe=Ae[q],S.format!==dn?ce!==null?Le?t.compressedTexSubImage2D(3553,q,0,0,fe.width,fe.height,ce,fe.data):t.compressedTexImage2D(3553,q,he,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage2D(3553,q,0,0,fe.width,fe.height,ce,ae,fe.data):t.texImage2D(3553,q,he,fe.width,fe.height,0,ce,ae,fe.data)}else if(S.isDataArrayTexture)Le?(ze&&t.texStorage3D(35866,P,he,I.width,I.height,I.depth),t.texSubImage3D(35866,0,0,0,0,I.width,I.height,I.depth,ce,ae,I.data)):t.texImage3D(35866,0,he,I.width,I.height,I.depth,0,ce,ae,I.data);else if(S.isData3DTexture)Le?(ze&&t.texStorage3D(32879,P,he,I.width,I.height,I.depth),t.texSubImage3D(32879,0,0,0,0,I.width,I.height,I.depth,ce,ae,I.data)):t.texImage3D(32879,0,he,I.width,I.height,I.depth,0,ce,ae,I.data);else if(S.isFramebufferTexture){if(ze)if(Le)t.texStorage2D(3553,P,he,I.width,I.height);else{let q=I.width,ee=I.height;for(let le=0;le<P;le++)t.texImage2D(3553,le,he,q,ee,0,ce,ae,null),q>>=1,ee>>=1}}else if(Ae.length>0&&oe){Le&&ze&&t.texStorage2D(3553,P,he,Ae[0].width,Ae[0].height);for(let q=0,ee=Ae.length;q<ee;q++)fe=Ae[q],Le?t.texSubImage2D(3553,q,0,0,ce,ae,fe):t.texImage2D(3553,q,he,ce,ae,fe);S.generateMipmaps=!1}else Le?(ze&&t.texStorage2D(3553,P,he,I.width,I.height),t.texSubImage2D(3553,0,0,0,ce,ae,I)):t.texImage2D(3553,0,he,ce,ae,I);E(S,oe)&&L(te),_e.__version=se.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ve(A,S,H){if(S.image.length!==6)return;const te=De(A,S),ne=S.source;t.bindTexture(34067,A.__webglTexture,33984+H);const se=n.get(ne);if(ne.version!==se.__version||te===!0){t.activeTexture(33984+H),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const _e=S.isCompressedTexture||S.image[0].isCompressedTexture,C=S.image[0]&&S.image[0].isDataTexture,I=[];for(let q=0;q<6;q++)!_e&&!C?I[q]=b(S.image[q],!1,!0,c):I[q]=C?S.image[q].image:S.image[q],I[q]=jt(S,I[q]);const oe=I[0],ce=M(oe)||o,ae=s.convert(S.format,S.encoding),he=s.convert(S.type),fe=v(S.internalFormat,ae,he,S.encoding),Ae=o&&S.isVideoTexture!==!0,Le=se.__version===void 0||te===!0;let ze=w(S,oe,ce);Y(34067,S,ce);let P;if(_e){Ae&&Le&&t.texStorage2D(34067,ze,fe,oe.width,oe.height);for(let q=0;q<6;q++){P=I[q].mipmaps;for(let ee=0;ee<P.length;ee++){const le=P[ee];S.format!==dn?ae!==null?Ae?t.compressedTexSubImage2D(34069+q,ee,0,0,le.width,le.height,ae,le.data):t.compressedTexImage2D(34069+q,ee,fe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?t.texSubImage2D(34069+q,ee,0,0,le.width,le.height,ae,he,le.data):t.texImage2D(34069+q,ee,fe,le.width,le.height,0,ae,he,le.data)}}}else{P=S.mipmaps,Ae&&Le&&(P.length>0&&ze++,t.texStorage2D(34067,ze,fe,I[0].width,I[0].height));for(let q=0;q<6;q++)if(C){Ae?t.texSubImage2D(34069+q,0,0,0,I[q].width,I[q].height,ae,he,I[q].data):t.texImage2D(34069+q,0,fe,I[q].width,I[q].height,0,ae,he,I[q].data);for(let ee=0;ee<P.length;ee++){const de=P[ee].image[q].image;Ae?t.texSubImage2D(34069+q,ee+1,0,0,de.width,de.height,ae,he,de.data):t.texImage2D(34069+q,ee+1,fe,de.width,de.height,0,ae,he,de.data)}}else{Ae?t.texSubImage2D(34069+q,0,0,0,ae,he,I[q]):t.texImage2D(34069+q,0,fe,ae,he,I[q]);for(let ee=0;ee<P.length;ee++){const le=P[ee];Ae?t.texSubImage2D(34069+q,ee+1,0,0,ae,he,le.image[q]):t.texImage2D(34069+q,ee+1,fe,ae,he,le.image[q])}}}E(S,ce)&&L(34067),se.__version=ne.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ue(A,S,H,te,ne){const se=s.convert(H.format,H.encoding),_e=s.convert(H.type),C=v(H.internalFormat,se,_e,H.encoding);n.get(S).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,C,S.width,S.height,S.depth,0,se,_e,null):t.texImage2D(ne,0,C,S.width,S.height,0,se,_e,null)),t.bindFramebuffer(36160,A),Ne(S)?h.framebufferTexture2DMultisampleEXT(36160,te,ne,n.get(H).__webglTexture,0,nt(S)):(ne===3553||ne>=34069&&ne<=34074)&&r.framebufferTexture2D(36160,te,ne,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function Fe(A,S,H){if(r.bindRenderbuffer(36161,A),S.depthBuffer&&!S.stencilBuffer){let te=33189;if(H||Ne(S)){const ne=S.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Pi?te=36012:ne.type===Li&&(te=33190));const se=nt(S);Ne(S)?h.renderbufferStorageMultisampleEXT(36161,se,te,S.width,S.height):r.renderbufferStorageMultisample(36161,se,te,S.width,S.height)}else r.renderbufferStorage(36161,te,S.width,S.height);r.framebufferRenderbuffer(36160,36096,36161,A)}else if(S.depthBuffer&&S.stencilBuffer){const te=nt(S);H&&Ne(S)===!1?r.renderbufferStorageMultisample(36161,te,35056,S.width,S.height):Ne(S)?h.renderbufferStorageMultisampleEXT(36161,te,35056,S.width,S.height):r.renderbufferStorage(36161,34041,S.width,S.height),r.framebufferRenderbuffer(36160,33306,36161,A)}else{const te=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ne=0;ne<te.length;ne++){const se=te[ne],_e=s.convert(se.format,se.encoding),C=s.convert(se.type),I=v(se.internalFormat,_e,C,se.encoding),oe=nt(S);H&&Ne(S)===!1?r.renderbufferStorageMultisample(36161,oe,I,S.width,S.height):Ne(S)?h.renderbufferStorageMultisampleEXT(36161,oe,I,S.width,S.height):r.renderbufferStorage(36161,I,S.width,S.height)}}r.bindRenderbuffer(36161,null)}function be(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k(S.depthTexture,0);const te=n.get(S.depthTexture).__webglTexture,ne=nt(S);if(S.depthTexture.format===Ni)Ne(S)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ne):r.framebufferTexture2D(36160,36096,3553,te,0);else if(S.depthTexture.format===Ur)Ne(S)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ne):r.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function ge(A){const S=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");be(S.__webglFramebuffer,A)}else if(H){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]=r.createRenderbuffer(),Fe(S.__webglDepthbuffer[te],A,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),Fe(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function Ze(A,S,H){const te=n.get(A);S!==void 0&&ue(te.__webglFramebuffer,A,A.texture,36064,3553),H!==void 0&&ge(A)}function ot(A){const S=A.texture,H=n.get(A),te=n.get(S);A.addEventListener("dispose",J),A.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=S.version,a.memory.textures++);const ne=A.isWebGLCubeRenderTarget===!0,se=A.isWebGLMultipleRenderTargets===!0,_e=M(A)||o;if(ne){H.__webglFramebuffer=[];for(let C=0;C<6;C++)H.__webglFramebuffer[C]=r.createFramebuffer()}else{if(H.__webglFramebuffer=r.createFramebuffer(),se)if(i.drawBuffers){const C=A.texture;for(let I=0,oe=C.length;I<oe;I++){const ce=n.get(C[I]);ce.__webglTexture===void 0&&(ce.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Ne(A)===!1){const C=se?S:[S];H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let I=0;I<C.length;I++){const oe=C[I];H.__webglColorRenderbuffer[I]=r.createRenderbuffer(),r.bindRenderbuffer(36161,H.__webglColorRenderbuffer[I]);const ce=s.convert(oe.format,oe.encoding),ae=s.convert(oe.type),he=v(oe.internalFormat,ce,ae,oe.encoding,A.isXRRenderTarget===!0),fe=nt(A);r.renderbufferStorageMultisample(36161,fe,he,A.width,A.height),r.framebufferRenderbuffer(36160,36064+I,36161,H.__webglColorRenderbuffer[I])}r.bindRenderbuffer(36161,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Fe(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,te.__webglTexture),Y(34067,S,_e);for(let C=0;C<6;C++)ue(H.__webglFramebuffer[C],A,S,36064,34069+C);E(S,_e)&&L(34067),t.unbindTexture()}else if(se){const C=A.texture;for(let I=0,oe=C.length;I<oe;I++){const ce=C[I],ae=n.get(ce);t.bindTexture(3553,ae.__webglTexture),Y(3553,ce,_e),ue(H.__webglFramebuffer,A,ce,36064+I,3553),E(ce,_e)&&L(3553)}t.unbindTexture()}else{let C=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?C=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(C,te.__webglTexture),Y(C,S,_e),ue(H.__webglFramebuffer,A,S,36064,C),E(S,_e)&&L(C),t.unbindTexture()}A.depthBuffer&&ge(A)}function tt(A){const S=M(A)||o,H=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0,ne=H.length;te<ne;te++){const se=H[te];if(E(se,S)){const _e=A.isWebGLCubeRenderTarget?34067:3553,C=n.get(se).__webglTexture;t.bindTexture(_e,C),L(_e),t.unbindTexture()}}}function Rt(A){if(o&&A.samples>0&&Ne(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],H=A.width,te=A.height;let ne=16384;const se=[],_e=A.stencilBuffer?33306:36096,C=n.get(A),I=A.isWebGLMultipleRenderTargets===!0;if(I)for(let oe=0;oe<S.length;oe++)t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+oe,36161,null),t.bindFramebuffer(36160,C.__webglFramebuffer),r.framebufferTexture2D(36009,36064+oe,3553,null,0);t.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,C.__webglFramebuffer);for(let oe=0;oe<S.length;oe++){se.push(36064+oe),A.depthBuffer&&se.push(_e);const ce=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(ce===!1&&(A.depthBuffer&&(ne|=256),A.stencilBuffer&&(ne|=1024)),I&&r.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[oe]),ce===!0&&(r.invalidateFramebuffer(36008,[_e]),r.invalidateFramebuffer(36009,[_e])),I){const ae=n.get(S[oe]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ae,0)}r.blitFramebuffer(0,0,H,te,0,0,H,te,ne,9728),m&&r.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),I)for(let oe=0;oe<S.length;oe++){t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+oe,36161,C.__webglColorRenderbuffer[oe]);const ce=n.get(S[oe]).__webglTexture;t.bindFramebuffer(36160,C.__webglFramebuffer),r.framebufferTexture2D(36009,36064+oe,3553,ce,0)}t.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function nt(A){return Math.min(f,A.samples)}function Ne(A){const S=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Xt(A){const S=a.render.frame;_.get(A)!==S&&(_.set(A,S),A.update())}function jt(A,S){const H=A.encoding,te=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Sl||H!==Hi&&(H===Ue?o===!1?e.has("EXT_sRGB")===!0&&te===dn?(A.format=Sl,A.minFilter=Tt,A.generateMipmaps=!1):S=td.sRGBToLinear(S):(te!==dn||ne!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),S}this.allocateTextureUnit=G,this.resetTextureUnits=$,this.setTexture2D=k,this.setTexture2DArray=Q,this.setTexture3D=Z,this.setTextureCube=K,this.rebindTextures=Ze,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Ne}function Sb(r,e,t){const n=t.isWebGL2;function i(s,a=null){let o;if(s===Vi)return 5121;if(s===p_)return 32819;if(s===m_)return 32820;if(s===f_)return 5120;if(s===h_)return 5122;if(s===Jh)return 5123;if(s===d_)return 5124;if(s===Li)return 5125;if(s===Pi)return 5126;if(s===ws)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===g_)return 6406;if(s===dn)return 6408;if(s===x_)return 6409;if(s===v_)return 6410;if(s===Ni)return 6402;if(s===Ur)return 34041;if(s===y_)return 6403;if(s===__)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Sl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===b_)return 36244;if(s===M_)return 33319;if(s===S_)return 33320;if(s===w_)return 36249;if(s===uo||s===fo||s===ho||s===po)if(a===Ue)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===uo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===uo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ho)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===po)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===nu||s===iu||s===ru||s===su)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===nu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===iu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ru)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===su)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===T_)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===au||s===ou)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===au)return a===Ue?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ou)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===lu||s===cu||s===uu||s===fu||s===hu||s===du||s===pu||s===mu||s===gu||s===_u||s===xu||s===vu||s===yu||s===bu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===lu)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cu)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===uu)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fu)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hu)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===du)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pu)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===mu)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gu)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===_u)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xu)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===vu)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yu)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bu)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Mu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Mu)return a===Ue?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Er?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class wb extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ds extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tb={type:"move"};class Vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const y=new ds;y.matrixAutoUpdate=!1,y.visible=!1,c.joints[p.jointName]=y,c.add(y)}const g=c.joints[p.jointName];d!==null&&(g.matrix.fromArray(d.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=d.radius),g.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tb)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class Eb extends Ht{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:Ni,u!==Ni&&u!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ni&&(n=Li),n===void 0&&u===Ur&&(n=Er),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1}}class Ab extends Zi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,f=null,h=null,m=null;const _=t.getContextAttributes();let p=null,d=null;const g=[],y=[],b=new Qt;b.layers.enable(1),b.viewport=new dt;const M=new Qt;M.layers.enable(2),M.viewport=new dt;const x=[b,M],E=new wb;E.layers.enable(1),E.layers.enable(2);let L=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let k=g[O];return k===void 0&&(k=new Vo,g[O]=k),k.getTargetRaySpace()},this.getControllerGrip=function(O){let k=g[O];return k===void 0&&(k=new Vo,g[O]=k),k.getGripSpace()},this.getHand=function(O){let k=g[O];return k===void 0&&(k=new Vo,g[O]=k),k.getHandSpace()};function w(O){const k=y.indexOf(O.inputSource);if(k===-1)return;const Q=g[k];Q!==void 0&&Q.dispatchEvent({type:O.type,data:O.inputSource})}function D(){i.removeEventListener("select",w),i.removeEventListener("selectstart",w),i.removeEventListener("selectend",w),i.removeEventListener("squeeze",w),i.removeEventListener("squeezestart",w),i.removeEventListener("squeezeend",w),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",V);for(let O=0;O<g.length;O++){const k=y[O];k!==null&&(y[O]=null,g[O].disconnect(k))}L=null,v=null,e.setRenderTarget(p),h=null,f=null,u=null,i=null,d=null,G.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",w),i.addEventListener("selectstart",w),i.addEventListener("selectend",w),i.addEventListener("squeeze",w),i.addEventListener("squeezestart",w),i.addEventListener("squeezeend",w),i.addEventListener("end",D),i.addEventListener("inputsourceschange",V),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,k),i.updateRenderState({baseLayer:h}),d=new Wi(h.framebufferWidth,h.framebufferHeight,{format:dn,type:Vi,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let k=null,Q=null,Z=null;_.depth&&(Z=_.stencil?35056:33190,k=_.stencil?Ur:Ni,Q=_.stencil?Er:Li);const K={colorFormat:32856,depthFormat:Z,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(K),i.updateRenderState({layers:[f]}),d=new Wi(f.textureWidth,f.textureHeight,{format:dn,type:Vi,depthTexture:new Eb(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const re=e.properties.get(d);re.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(o),G.setContext(i),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function V(O){for(let k=0;k<O.removed.length;k++){const Q=O.removed[k],Z=y.indexOf(Q);Z>=0&&(y[Z]=null,g[Z].dispatchEvent({type:"disconnected",data:Q}))}for(let k=0;k<O.added.length;k++){const Q=O.added[k];let Z=y.indexOf(Q);if(Z===-1){for(let re=0;re<g.length;re++)if(re>=y.length){y.push(Q),Z=re;break}else if(y[re]===null){y[re]=Q,Z=re;break}if(Z===-1)break}const K=g[Z];K&&K.dispatchEvent({type:"connected",data:Q})}}const J=new N,z=new N;function R(O,k,Q){J.setFromMatrixPosition(k.matrixWorld),z.setFromMatrixPosition(Q.matrixWorld);const Z=J.distanceTo(z),K=k.projectionMatrix.elements,re=Q.projectionMatrix.elements,pe=K[14]/(K[10]-1),Y=K[14]/(K[10]+1),De=(K[9]+1)/K[5],xe=(K[9]-1)/K[5],ve=(K[8]-1)/K[0],ue=(re[8]+1)/re[0],Fe=pe*ve,be=pe*ue,ge=Z/(-ve+ue),Ze=ge*-ve;k.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Ze),O.translateZ(ge),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const ot=pe+ge,tt=Y+ge,Rt=Fe-Ze,nt=be+(Z-Ze),Ne=De*Y/tt*ot,Xt=xe*Y/tt*ot;O.projectionMatrix.makePerspective(Rt,nt,Ne,Xt,ot,tt)}function B(O,k){k===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(k.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;E.near=M.near=b.near=O.near,E.far=M.far=b.far=O.far,(L!==E.near||v!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,v=E.far);const k=O.parent,Q=E.cameras;B(E,k);for(let K=0;K<Q.length;K++)B(Q[K],k);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),O.matrix.copy(E.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);const Z=O.children;for(let K=0,re=Z.length;K<re;K++)Z[K].updateMatrixWorld(!0);Q.length===2?R(E,b,M):E.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(O){f!==null&&(f.fixedFoveation=O),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=O)};let j=null;function $(O,k){if(c=k.getViewerPose(l||a),m=k,c!==null){const Q=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let Z=!1;Q.length!==E.cameras.length&&(E.cameras.length=0,Z=!0);for(let K=0;K<Q.length;K++){const re=Q[K];let pe=null;if(h!==null)pe=h.getViewport(re);else{const De=u.getViewSubImage(f,re);pe=De.viewport,K===0&&(e.setRenderTargetTextures(d,De.colorTexture,f.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(d))}let Y=x[K];Y===void 0&&(Y=new Qt,Y.layers.enable(K),Y.viewport=new dt,x[K]=Y),Y.matrix.fromArray(re.transform.matrix),Y.projectionMatrix.fromArray(re.projectionMatrix),Y.viewport.set(pe.x,pe.y,pe.width,pe.height),K===0&&E.matrix.copy(Y.matrix),Z===!0&&E.cameras.push(Y)}}for(let Q=0;Q<g.length;Q++){const Z=y[Q],K=g[Q];Z!==null&&K!==void 0&&K.update(Z,k,l||a)}j&&j(O,k),m=null}const G=new ud;G.setAnimationLoop($),this.setAnimationLoop=function(O){j=O},this.dispose=function(){}}}function Cb(r,e){function t(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function n(p,d,g,y,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(p,d):d.isMeshToonMaterial?(i(p,d),u(p,d)):d.isMeshPhongMaterial?(i(p,d),c(p,d)):d.isMeshStandardMaterial?(i(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,b)):d.isMeshMatcapMaterial?(i(p,d),m(p,d)):d.isMeshDepthMaterial?i(p,d):d.isMeshDistanceMaterial?(i(p,d),_(p,d)):d.isMeshNormalMaterial?i(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?o(p,d,g,y):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===Mt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===Mt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const g=e.get(d).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const M=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*M}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let y;d.map?y=d.map:d.specularMap?y=d.specularMap:d.displacementMap?y=d.displacementMap:d.normalMap?y=d.normalMap:d.bumpMap?y=d.bumpMap:d.roughnessMap?y=d.roughnessMap:d.metalnessMap?y=d.metalnessMap:d.alphaMap?y=d.alphaMap:d.emissiveMap?y=d.emissiveMap:d.clearcoatMap?y=d.clearcoatMap:d.clearcoatNormalMap?y=d.clearcoatNormalMap:d.clearcoatRoughnessMap?y=d.clearcoatRoughnessMap:d.iridescenceMap?y=d.iridescenceMap:d.iridescenceThicknessMap?y=d.iridescenceThicknessMap:d.specularIntensityMap?y=d.specularIntensityMap:d.specularColorMap?y=d.specularColorMap:d.transmissionMap?y=d.transmissionMap:d.thicknessMap?y=d.thicknessMap:d.sheenColorMap?y=d.sheenColorMap:d.sheenRoughnessMap&&(y=d.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let b;d.aoMap?b=d.aoMap:d.lightMap&&(b=d.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uv2Transform.value.copy(b.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function o(p,d,g,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*g,p.scale.value=y*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let b;d.map?b=d.map:d.alphaMap&&(b=d.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let g;d.map?g=d.map:d.alphaMap&&(g=d.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,g){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Mt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Lb(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(35375):0;function l(y,b){const M=b.program;n.uniformBlockBinding(y,M)}function c(y,b){let M=i[y.id];M===void 0&&(_(y),M=u(y),i[y.id]=M,y.addEventListener("dispose",d));const x=b.program;n.updateUBOMapping(y,x);const E=e.render.frame;s[y.id]!==E&&(h(y),s[y.id]=E)}function u(y){const b=f();y.__bindingPointIndex=b;const M=r.createBuffer(),x=y.__size,E=y.usage;return r.bindBuffer(35345,M),r.bufferData(35345,x,E),r.bindBuffer(35345,null),r.bindBufferBase(35345,b,M),M}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const b=i[y.id],M=y.uniforms,x=y.__cache;r.bindBuffer(35345,b);for(let E=0,L=M.length;E<L;E++){const v=M[E];if(m(v,E,x)===!0){const w=v.value,D=v.__offset;typeof w=="number"?(v.__data[0]=w,r.bufferSubData(35345,D,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):w.toArray(v.__data),r.bufferSubData(35345,D,v.__data))}}r.bindBuffer(35345,null)}function m(y,b,M){const x=y.value;if(M[b]===void 0)return typeof x=="number"?M[b]=x:M[b]=x.clone(),!0;if(typeof x=="number"){if(M[b]!==x)return M[b]=x,!0}else{const E=M[b];if(E.equals(x)===!1)return E.copy(x),!0}return!1}function _(y){const b=y.uniforms;let M=0;const x=16;let E=0;for(let L=0,v=b.length;L<v;L++){const w=b[L],D=p(w);if(w.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=M,L>0){E=M%x;const V=x-E;E!==0&&V-D.boundary<0&&(M+=x-E,w.__offset=M)}M+=D.storage}return E=M%x,E>0&&(M+=x-E),y.__size=M,y.__cache={},this}function p(y){const b=y.value,M={boundary:0,storage:0};return typeof b=="number"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function d(y){const b=y.target;b.removeEventListener("dispose",d);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function g(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:g}}function Pb(){const r=Ts("canvas");return r.style.display="block",r}function md(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:Pb(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let f=null,h=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Hi,this.physicallyCorrectLights=!1,this.toneMapping=zn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let d=!1,g=0,y=0,b=null,M=-1,x=null;const E=new dt,L=new dt;let v=null,w=e.width,D=e.height,V=1,J=null,z=null;const R=new dt(0,0,w,D),B=new dt(0,0,w,D);let j=!1;const $=new cd;let G=!1,O=!1,k=null;const Q=new pt,Z=new Te,K=new N,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return b===null?V:1}let Y=t;function De(T,U){for(let W=0;W<T.length;W++){const F=T[W],X=e.getContext(F,U);if(X!==null)return X}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ac}`),e.addEventListener("webglcontextlost",he,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",Ae,!1),Y===null){const U=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&U.shift(),Y=De(U,T),Y===null)throw De(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let xe,ve,ue,Fe,be,ge,Ze,ot,tt,Rt,nt,Ne,Xt,jt,A,S,H,te,ne,se,_e,C,I,oe;function ce(){xe=new Gv(Y),ve=new Ov(Y,xe,r),xe.init(ve),C=new Sb(Y,xe,ve),ue=new bb(Y,xe,ve),Fe=new Wv,be=new ob,ge=new Mb(Y,xe,ue,be,ve,C,Fe),Ze=new Nv(p),ot=new Bv(p),tt=new J_(Y,ve),I=new Rv(Y,xe,tt,ve),Rt=new Vv(Y,tt,Fe,I),nt=new Yv(Y,Rt,tt,Fe),ne=new jv(Y,ve,ge),S=new Fv(be),Ne=new ab(p,Ze,ot,xe,ve,I,S),Xt=new Cb(p,be),jt=new cb,A=new mb(xe,ve),te=new Dv(p,Ze,ot,ue,nt,u,a),H=new yb(p,nt,ve),oe=new Lb(Y,Fe,ve,ue),se=new Iv(Y,xe,Fe,ve),_e=new Hv(Y,xe,Fe,ve),Fe.programs=Ne.programs,p.capabilities=ve,p.extensions=xe,p.properties=be,p.renderLists=jt,p.shadowMap=H,p.state=ue,p.info=Fe}ce();const ae=new Ab(p,Y);this.xr=ae,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const T=xe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=xe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(w,D,!1))},this.getSize=function(T){return T.set(w,D)},this.setSize=function(T,U,W){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=T,D=U,e.width=Math.floor(T*V),e.height=Math.floor(U*V),W!==!1&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(w*V,D*V).floor()},this.setDrawingBufferSize=function(T,U,W){w=T,D=U,V=W,e.width=Math.floor(T*W),e.height=Math.floor(U*W),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,U,W,F){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,U,W,F),ue.viewport(E.copy(R).multiplyScalar(V).floor())},this.getScissor=function(T){return T.copy(B)},this.setScissor=function(T,U,W,F){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,U,W,F),ue.scissor(L.copy(B).multiplyScalar(V).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(T){ue.setScissorTest(j=T)},this.setOpaqueSort=function(T){J=T},this.setTransparentSort=function(T){z=T},this.getClearColor=function(T){return T.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(T=!0,U=!0,W=!0){let F=0;T&&(F|=16384),U&&(F|=256),W&&(F|=1024),Y.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",he,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Ae,!1),jt.dispose(),A.dispose(),be.dispose(),Ze.dispose(),ot.dispose(),nt.dispose(),I.dispose(),oe.dispose(),Ne.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",le),ae.removeEventListener("sessionend",de),k&&(k.dispose(),k=null),Re.stop()};function he(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const T=Fe.autoReset,U=H.enabled,W=H.autoUpdate,F=H.needsUpdate,X=H.type;ce(),Fe.autoReset=T,H.enabled=U,H.autoUpdate=W,H.needsUpdate=F,H.type=X}function Ae(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Le(T){const U=T.target;U.removeEventListener("dispose",Le),ze(U)}function ze(T){P(T),be.remove(T)}function P(T){const U=be.get(T).programs;U!==void 0&&(U.forEach(function(W){Ne.releaseProgram(W)}),T.isShaderMaterial&&Ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,W,F,X,me){U===null&&(U=re);const ye=X.isMesh&&X.matrixWorld.determinant()<0,we=xp(T,U,W,F,X);ue.setMaterial(F,ye);let Me=W.index;const Ie=W.attributes.position;if(Me===null){if(Ie===void 0||Ie.count===0)return}else if(Me.count===0)return;let Ee=1;F.wireframe===!0&&(Me=Rt.getWireframeAttribute(W),Ee=2),I.setup(X,F,we,W,Me);let Pe,Xe=se;Me!==null&&(Pe=tt.get(Me),Xe=_e,Xe.setIndex(Pe));const mi=Me!==null?Me.count:Ie.count,Qi=W.drawRange.start*Ee,er=W.drawRange.count*Ee,_n=me!==null?me.start*Ee:0,Oe=me!==null?me.count*Ee:1/0,tr=Math.max(Qi,_n),Ke=Math.min(mi,Qi+er,_n+Oe)-1,$t=Math.max(0,Ke-tr+1);if($t!==0){if(X.isMesh)F.wireframe===!0?(ue.setLineWidth(F.wireframeLinewidth*pe()),Xe.setMode(1)):Xe.setMode(4);else if(X.isLine){let Hn=F.linewidth;Hn===void 0&&(Hn=1),ue.setLineWidth(Hn*pe()),X.isLineSegments?Xe.setMode(1):X.isLineLoop?Xe.setMode(2):Xe.setMode(3)}else X.isPoints?Xe.setMode(0):X.isSprite&&Xe.setMode(4);if(X.isInstancedMesh)Xe.renderInstances(tr,$t,X.count);else if(W.isInstancedBufferGeometry){const Hn=Math.min(W.instanceCount,W._maxInstanceCount);Xe.renderInstances(tr,$t,Hn)}else Xe.render(tr,$t)}},this.compile=function(T,U){function W(F,X,me){F.transparent===!0&&F.side===Qn?(F.side=Mt,F.needsUpdate=!0,Yt(F,X,me),F.side=Or,F.needsUpdate=!0,Yt(F,X,me),F.side=Qn):Yt(F,X,me)}h=A.get(T),h.init(),_.push(h),T.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights(p.physicallyCorrectLights),T.traverse(function(F){const X=F.material;if(X)if(Array.isArray(X))for(let me=0;me<X.length;me++){const ye=X[me];W(ye,T,F)}else W(X,T,F)}),_.pop(),h=null};let q=null;function ee(T){q&&q(T)}function le(){Re.stop()}function de(){Re.start()}const Re=new ud;Re.setAnimationLoop(ee),typeof self<"u"&&Re.setContext(self),this.setAnimationLoop=function(T){q=T,ae.setAnimationLoop(T),T===null?Re.stop():Re.start()},ae.addEventListener("sessionstart",le),ae.addEventListener("sessionend",de),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(U),U=ae.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,U,b),h=A.get(T,_.length),h.init(),_.push(h),Q.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(Q),O=this.localClippingEnabled,G=S.init(this.clippingPlanes,O,U),f=jt.get(T,m.length),f.init(),m.push(f),lt(T,U,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(J,z),G===!0&&S.beginShadows();const W=h.state.shadowsArray;if(H.render(W,T,U),G===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(f,T),h.setupLights(p.physicallyCorrectLights),U.isArrayCamera){const F=U.cameras;for(let X=0,me=F.length;X<me;X++){const ye=F[X];mt(f,T,ye,ye.viewport)}}else mt(f,T,U);b!==null&&(ge.updateMultisampleRenderTarget(b),ge.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(p,T,U),I.resetDefaultState(),M=-1,x=null,_.pop(),_.length>0?h=_[_.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function lt(T,U,W,F){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){F&&K.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Q);const ye=nt.update(T),we=T.material;we.visible&&f.push(T,ye,we,W,K.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Fe.render.frame&&(T.skeleton.update(),T.skeleton.frame=Fe.render.frame),!T.frustumCulled||$.intersectsObject(T))){F&&K.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Q);const ye=nt.update(T),we=T.material;if(Array.isArray(we)){const Me=ye.groups;for(let Ie=0,Ee=Me.length;Ie<Ee;Ie++){const Pe=Me[Ie],Xe=we[Pe.materialIndex];Xe&&Xe.visible&&f.push(T,ye,Xe,W,K.z,Pe)}}else we.visible&&f.push(T,ye,we,W,K.z,null)}}const me=T.children;for(let ye=0,we=me.length;ye<we;ye++)lt(me[ye],U,W,F)}function mt(T,U,W,F){const X=T.opaque,me=T.transmissive,ye=T.transparent;h.setupLightsView(W),me.length>0&&pi(X,U,W),F&&ue.viewport(E.copy(F)),X.length>0&&Ge(X,U,W),me.length>0&&Ge(me,U,W),ye.length>0&&Ge(ye,U,W),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function pi(T,U,W){const F=ve.isWebGL2;k===null&&(k=new Wi(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?ws:Vi,minFilter:Ya,samples:F&&s===!0?4:0})),p.getDrawingBufferSize(Z),F?k.setSize(Z.x,Z.y):k.setSize(wl(Z.x),wl(Z.y));const X=p.getRenderTarget();p.setRenderTarget(k),p.clear();const me=p.toneMapping;p.toneMapping=zn,Ge(T,U,W),p.toneMapping=me,ge.updateMultisampleRenderTarget(k),ge.updateRenderTargetMipmap(k),p.setRenderTarget(X)}function Ge(T,U,W){const F=U.isScene===!0?U.overrideMaterial:null;for(let X=0,me=T.length;X<me;X++){const ye=T[X],we=ye.object,Me=ye.geometry,Ie=F===null?ye.material:F,Ee=ye.group;we.layers.test(W.layers)&&En(we,U,W,Me,Ie,Ee)}}function En(T,U,W,F,X,me){T.onBeforeRender(p,U,W,F,X,me),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(p,U,W,F,T,me),X.transparent===!0&&X.side===Qn?(X.side=Mt,X.needsUpdate=!0,p.renderBufferDirect(W,U,F,X,T,me),X.side=Or,X.needsUpdate=!0,p.renderBufferDirect(W,U,F,X,T,me),X.side=Qn):p.renderBufferDirect(W,U,F,X,T,me),T.onAfterRender(p,U,W,F,X,me)}function Yt(T,U,W){U.isScene!==!0&&(U=re);const F=be.get(T),X=h.state.lights,me=h.state.shadowsArray,ye=X.state.version,we=Ne.getParameters(T,X.state,me,U,W),Me=Ne.getProgramCacheKey(we);let Ie=F.programs;F.environment=T.isMeshStandardMaterial?U.environment:null,F.fog=U.fog,F.envMap=(T.isMeshStandardMaterial?ot:Ze).get(T.envMap||F.environment),Ie===void 0&&(T.addEventListener("dispose",Le),Ie=new Map,F.programs=Ie);let Ee=Ie.get(Me);if(Ee!==void 0){if(F.currentProgram===Ee&&F.lightsStateVersion===ye)return Ic(T,we),Ee}else we.uniforms=Ne.getUniforms(T),T.onBuild(W,we,p),T.onBeforeCompile(we,p),Ee=Ne.acquireProgram(we,Me),Ie.set(Me,Ee),F.uniforms=we.uniforms;const Pe=F.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=S.uniform),Ic(T,we),F.needsLights=yp(T),F.lightsStateVersion=ye,F.needsLights&&(Pe.ambientLightColor.value=X.state.ambient,Pe.lightProbe.value=X.state.probe,Pe.directionalLights.value=X.state.directional,Pe.directionalLightShadows.value=X.state.directionalShadow,Pe.spotLights.value=X.state.spot,Pe.spotLightShadows.value=X.state.spotShadow,Pe.rectAreaLights.value=X.state.rectArea,Pe.ltc_1.value=X.state.rectAreaLTC1,Pe.ltc_2.value=X.state.rectAreaLTC2,Pe.pointLights.value=X.state.point,Pe.pointLightShadows.value=X.state.pointShadow,Pe.hemisphereLights.value=X.state.hemi,Pe.directionalShadowMap.value=X.state.directionalShadowMap,Pe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Pe.spotShadowMap.value=X.state.spotShadowMap,Pe.spotLightMatrix.value=X.state.spotLightMatrix,Pe.spotLightMap.value=X.state.spotLightMap,Pe.pointShadowMap.value=X.state.pointShadowMap,Pe.pointShadowMatrix.value=X.state.pointShadowMatrix);const Xe=Ee.getUniforms(),mi=pa.seqWithValue(Xe.seq,Pe);return F.currentProgram=Ee,F.uniformsList=mi,Ee}function Ic(T,U){const W=be.get(T);W.outputEncoding=U.outputEncoding,W.instancing=U.instancing,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function xp(T,U,W,F,X){U.isScene!==!0&&(U=re),ge.resetTextureUnits();const me=U.fog,ye=F.isMeshStandardMaterial?U.environment:null,we=b===null?p.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Hi,Me=(F.isMeshStandardMaterial?ot:Ze).get(F.envMap||ye),Ie=F.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ee=!!F.normalMap&&!!W.attributes.tangent,Pe=!!W.morphAttributes.position,Xe=!!W.morphAttributes.normal,mi=!!W.morphAttributes.color,Qi=F.toneMapped?p.toneMapping:zn,er=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,_n=er!==void 0?er.length:0,Oe=be.get(F),tr=h.state.lights;if(G===!0&&(O===!0||T!==x)){const It=T===x&&F.id===M;S.setState(F,T,It)}let Ke=!1;F.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==tr.state.version||Oe.outputEncoding!==we||X.isInstancedMesh&&Oe.instancing===!1||!X.isInstancedMesh&&Oe.instancing===!0||X.isSkinnedMesh&&Oe.skinning===!1||!X.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==Me||F.fog===!0&&Oe.fog!==me||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==S.numPlanes||Oe.numIntersection!==S.numIntersection)||Oe.vertexAlphas!==Ie||Oe.vertexTangents!==Ee||Oe.morphTargets!==Pe||Oe.morphNormals!==Xe||Oe.morphColors!==mi||Oe.toneMapping!==Qi||ve.isWebGL2===!0&&Oe.morphTargetsCount!==_n)&&(Ke=!0):(Ke=!0,Oe.__version=F.version);let $t=Oe.currentProgram;Ke===!0&&($t=Yt(F,U,X));let Hn=!1,ts=!1,io=!1;const vt=$t.getUniforms(),gi=Oe.uniforms;if(ue.useProgram($t.program)&&(Hn=!0,ts=!0,io=!0),F.id!==M&&(M=F.id,ts=!0),Hn||x!==T){if(vt.setValue(Y,"projectionMatrix",T.projectionMatrix),ve.logarithmicDepthBuffer&&vt.setValue(Y,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),x!==T&&(x=T,ts=!0,io=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const It=vt.map.cameraPosition;It!==void 0&&It.setValue(Y,K.setFromMatrixPosition(T.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&vt.setValue(Y,"isOrthographic",T.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||X.isSkinnedMesh)&&vt.setValue(Y,"viewMatrix",T.matrixWorldInverse)}if(X.isSkinnedMesh){vt.setOptional(Y,X,"bindMatrix"),vt.setOptional(Y,X,"bindMatrixInverse");const It=X.skeleton;It&&(ve.floatVertexTextures?(It.boneTexture===null&&It.computeBoneTexture(),vt.setValue(Y,"boneTexture",It.boneTexture,ge),vt.setValue(Y,"boneTextureSize",It.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ro=W.morphAttributes;if((ro.position!==void 0||ro.normal!==void 0||ro.color!==void 0&&ve.isWebGL2===!0)&&ne.update(X,W,F,$t),(ts||Oe.receiveShadow!==X.receiveShadow)&&(Oe.receiveShadow=X.receiveShadow,vt.setValue(Y,"receiveShadow",X.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(gi.envMap.value=Me,gi.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),ts&&(vt.setValue(Y,"toneMappingExposure",p.toneMappingExposure),Oe.needsLights&&vp(gi,io),me&&F.fog===!0&&Xt.refreshFogUniforms(gi,me),Xt.refreshMaterialUniforms(gi,F,V,D,k),pa.upload(Y,Oe.uniformsList,gi,ge)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(pa.upload(Y,Oe.uniformsList,gi,ge),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&vt.setValue(Y,"center",X.center),vt.setValue(Y,"modelViewMatrix",X.modelViewMatrix),vt.setValue(Y,"normalMatrix",X.normalMatrix),vt.setValue(Y,"modelMatrix",X.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const It=F.uniformsGroups;for(let so=0,bp=It.length;so<bp;so++)if(ve.isWebGL2){const Oc=It[so];oe.update(Oc,$t),oe.bind(Oc,$t)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $t}function vp(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function yp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,U,W){be.get(T.texture).__webglTexture=U,be.get(T.depthTexture).__webglTexture=W;const F=be.get(T);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=W===void 0,F.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const W=be.get(T);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,W=0){b=T,g=U,y=W;let F=!0,X=null,me=!1,ye=!1;if(T){const Me=be.get(T);Me.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),F=!1):Me.__webglFramebuffer===void 0?ge.setupRenderTarget(T):Me.__hasExternalTextures&&ge.rebindTextures(T,be.get(T.texture).__webglTexture,be.get(T.depthTexture).__webglTexture);const Ie=T.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ye=!0);const Ee=be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(X=Ee[U],me=!0):ve.isWebGL2&&T.samples>0&&ge.useMultisampledRTT(T)===!1?X=be.get(T).__webglMultisampledFramebuffer:X=Ee,E.copy(T.viewport),L.copy(T.scissor),v=T.scissorTest}else E.copy(R).multiplyScalar(V).floor(),L.copy(B).multiplyScalar(V).floor(),v=j;if(ue.bindFramebuffer(36160,X)&&ve.drawBuffers&&F&&ue.drawBuffers(T,X),ue.viewport(E),ue.scissor(L),ue.setScissorTest(v),me){const Me=be.get(T.texture);Y.framebufferTexture2D(36160,36064,34069+U,Me.__webglTexture,W)}else if(ye){const Me=be.get(T.texture),Ie=U||0;Y.framebufferTextureLayer(36160,36064,Me.__webglTexture,W||0,Ie)}M=-1},this.readRenderTargetPixels=function(T,U,W,F,X,me,ye){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){ue.bindFramebuffer(36160,we);try{const Me=T.texture,Ie=Me.format,Ee=Me.type;if(Ie!==dn&&C.convert(Ie)!==Y.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Ee===ws&&(xe.has("EXT_color_buffer_half_float")||ve.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Ee!==Vi&&C.convert(Ee)!==Y.getParameter(35738)&&!(Ee===Pi&&(ve.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-F&&W>=0&&W<=T.height-X&&Y.readPixels(U,W,F,X,C.convert(Ie),C.convert(Ee),me)}finally{const Me=b!==null?be.get(b).__webglFramebuffer:null;ue.bindFramebuffer(36160,Me)}}},this.copyFramebufferToTexture=function(T,U,W=0){const F=Math.pow(2,-W),X=Math.floor(U.image.width*F),me=Math.floor(U.image.height*F);ge.setTexture2D(U,0),Y.copyTexSubImage2D(3553,W,0,0,T.x,T.y,X,me),ue.unbindTexture()},this.copyTextureToTexture=function(T,U,W,F=0){const X=U.image.width,me=U.image.height,ye=C.convert(W.format),we=C.convert(W.type);ge.setTexture2D(W,0),Y.pixelStorei(37440,W.flipY),Y.pixelStorei(37441,W.premultiplyAlpha),Y.pixelStorei(3317,W.unpackAlignment),U.isDataTexture?Y.texSubImage2D(3553,F,T.x,T.y,X,me,ye,we,U.image.data):U.isCompressedTexture?Y.compressedTexSubImage2D(3553,F,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,ye,U.mipmaps[0].data):Y.texSubImage2D(3553,F,T.x,T.y,ye,we,U.image),F===0&&W.generateMipmaps&&Y.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(T,U,W,F,X=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=T.max.x-T.min.x+1,ye=T.max.y-T.min.y+1,we=T.max.z-T.min.z+1,Me=C.convert(F.format),Ie=C.convert(F.type);let Ee;if(F.isData3DTexture)ge.setTexture3D(F,0),Ee=32879;else if(F.isDataArrayTexture)ge.setTexture2DArray(F,0),Ee=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(37440,F.flipY),Y.pixelStorei(37441,F.premultiplyAlpha),Y.pixelStorei(3317,F.unpackAlignment);const Pe=Y.getParameter(3314),Xe=Y.getParameter(32878),mi=Y.getParameter(3316),Qi=Y.getParameter(3315),er=Y.getParameter(32877),_n=W.isCompressedTexture?W.mipmaps[0]:W.image;Y.pixelStorei(3314,_n.width),Y.pixelStorei(32878,_n.height),Y.pixelStorei(3316,T.min.x),Y.pixelStorei(3315,T.min.y),Y.pixelStorei(32877,T.min.z),W.isDataTexture||W.isData3DTexture?Y.texSubImage3D(Ee,X,U.x,U.y,U.z,me,ye,we,Me,Ie,_n.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Ee,X,U.x,U.y,U.z,me,ye,we,Me,_n.data)):Y.texSubImage3D(Ee,X,U.x,U.y,U.z,me,ye,we,Me,Ie,_n),Y.pixelStorei(3314,Pe),Y.pixelStorei(32878,Xe),Y.pixelStorei(3316,mi),Y.pixelStorei(3315,Qi),Y.pixelStorei(32877,er),X===0&&F.generateMipmaps&&Y.generateMipmap(Ee),ue.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?ge.setTextureCube(T,0):T.isData3DTexture?ge.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ge.setTexture2DArray(T,0):ge.setTexture2D(T,0),ue.unbindTexture()},this.resetState=function(){g=0,y=0,b=null,ue.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Db extends md{}Db.prototype.isWebGL1Renderer=!0;class Rb extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ib extends Ht{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Tt,this.magFilter=s!==void 0?s:Tt,this.generateMipmaps=!1;const u=this;function f(){u.needsUpdate=!0,e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(f)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Ka extends Bn{constructor(e=1,t=8,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new N,u=new Te;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const m=n+f/t*i;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(o,3)),this.setAttribute("uv",new Gt(l,2))}static fromJSON(e){return new Ka(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Bs extends Bn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new N,h=new N,m=[],_=[],p=[],d=[];for(let g=0;g<=n;g++){const y=[],b=g/n;let M=0;g==0&&a==0?M=.5/t:g==n&&l==Math.PI&&(M=-.5/t);for(let x=0;x<=t;x++){const E=x/t;f.x=-e*Math.cos(i+E*s)*Math.sin(a+b*o),f.y=e*Math.cos(a+b*o),f.z=e*Math.sin(i+E*s)*Math.sin(a+b*o),_.push(f.x,f.y,f.z),h.copy(f).normalize(),p.push(h.x,h.y,h.z),d.push(E+M,1-b),y.push(c++)}u.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){const b=u[g][y+1],M=u[g][y],x=u[g+1][y],E=u[g+1][y+1];(g!==0||a>0)&&m.push(b,M,E),(g!==n-1||l<Math.PI)&&m.push(M,x,E)}this.setIndex(m),this.setAttribute("position",new Gt(_,3)),this.setAttribute("normal",new Gt(p,3)),this.setAttribute("uv",new Gt(d,2))}static fromJSON(e){return new Bs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const af={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Ob{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],_=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const ji=new Ob;class gd{constructor(e){this.manager=e!==void 0?e:ji,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Fb extends gd{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=af.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Ts("img");function l(){u(),af.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Nb extends gd{constructor(e){super(e)}load(e,t,n,i){const s=new Ht,a=new Fb(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class zb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=of(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=of();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function of(){return(typeof performance>"u"?Date:performance).now()}class Ub{constructor(e,t,n=0,i=1/0){this.ray=new rd(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new lc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return El(e,this,n,t),n.sort(lf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)El(e[i],this,n,t);return n.sort(lf),n}}function lf(r,e){return r.distance-e.distance}function El(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)El(i[s],e,t,!0)}}class cf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ac);const Ja=new Nb,fc=Ja.load("/images/lobby/lobby.jpg");fc.mapping=zr;fc.encoding=Ue;const hc=Ja.load("/images/library/library.jpg");hc.mapping=zr;hc.encoding=Ue;const dc=Ja.load("/images/outside/outside.jpg");dc.mapping=zr;dc.encoding=Ue;const _d=Ja.load("/images/asterix.svg");_d.encoding=Ue;const Gn=document.createElement("video");Gn.src="/videos/new-scene-re.mp4#t=0.001";Gn.setAttribute("crossOrigin","anonymous");Gn.setAttribute("type","video/mp4");Gn.setAttribute("webkit-playsinline","");Gn.setAttribute("playsinline","");Gn.setAttribute("muted","");Gn.setAttribute("autoplay","");Gn.setAttribute("loop","");const xd=new Ib(Gn);xd.generateMipmaps=!1;xd.encoding=Ue;const Vn=new Rb,Yi=new Qt(70,window.innerWidth/window.innerHeight,.1,1e3);Yi.position.set(0,0,1);const kb=document.querySelector("#bg"),fi=new md({antialias:!0,alpha:!0,canvas:kb});fi.setPixelRatio(window.devicePixelRatio);fi.setSize(window.innerWidth,window.innerHeight);fi.toneMapping=Zh;fi.outputEncoding=Ue;fi.render(Vn,Yi);const hi=new ds;Vn.add(hi);const ba=new kt(new Bs(3,32,32),new Ki({side:Mt,map:fc})),Ma=new kt(new Bs(3,32,32),new Ki({side:Mt,map:hc})),Sa=new kt(new Bs(3,32,32),new Ki({side:Mt,map:dc})),Mn=new kt(new Ka(.1,32),new Ki({map:_d}));Mn.position.set(2.7,-.05,.7);Mn.rotation.y=Math.PI*-.6;Mn.scale.set(0,0,0);const Sn=new kt(new Ka(.2,32),new Ki({color:"blue"}));Sn.rotation.y=Math.PI*1.1;Sn.position.set(.8,-.12,2.8);Sn.scale.set(0,0,0);const Bb=[Sn,Mn],uf={type:"change"},Ho={type:"start"},ff={type:"end"};class Gb extends Zi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:nr.ROTATE,MIDDLE:nr.DOLLY,RIGHT:nr.PAN},this.touches={ONE:ir.ROTATE,TWO:ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",jt),this._domElementKeyEvents=C},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(uf),n.update(),s=i.NONE},this.update=function(){const C=new N,I=new qi().setFromUnitVectors(e.up,new N(0,1,0)),oe=I.clone().invert(),ce=new N,ae=new qi,he=2*Math.PI;return function(){const Ae=n.object.position;C.copy(Ae).sub(n.target),C.applyQuaternion(I),o.setFromVector3(C),n.autoRotate&&s===i.NONE&&w(L()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Le=n.minAzimuthAngle,ze=n.maxAzimuthAngle;return isFinite(Le)&&isFinite(ze)&&(Le<-Math.PI?Le+=he:Le>Math.PI&&(Le-=he),ze<-Math.PI?ze+=he:ze>Math.PI&&(ze-=he),Le<=ze?o.theta=Math.max(Le,Math.min(ze,o.theta)):o.theta=o.theta>(Le+ze)/2?Math.max(Le,o.theta):Math.min(ze,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),C.setFromSpherical(o),C.applyQuaternion(oe),Ae.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||ce.distanceToSquared(n.object.position)>a||8*(1-ae.dot(n.object.quaternion))>a?(n.dispatchEvent(uf),ce.copy(n.object.position),ae.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",H),n.domElement.removeEventListener("pointerdown",Ze),n.domElement.removeEventListener("pointercancel",Rt),n.domElement.removeEventListener("wheel",Xt),n.domElement.removeEventListener("pointermove",ot),n.domElement.removeEventListener("pointerup",tt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",jt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new cf,l=new cf;let c=1;const u=new N;let f=!1;const h=new Te,m=new Te,_=new Te,p=new Te,d=new Te,g=new Te,y=new Te,b=new Te,M=new Te,x=[],E={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function w(C){l.theta-=C}function D(C){l.phi-=C}const V=function(){const C=new N;return function(oe,ce){C.setFromMatrixColumn(ce,0),C.multiplyScalar(-oe),u.add(C)}}(),J=function(){const C=new N;return function(oe,ce){n.screenSpacePanning===!0?C.setFromMatrixColumn(ce,1):(C.setFromMatrixColumn(ce,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(oe),u.add(C)}}(),z=function(){const C=new N;return function(oe,ce){const ae=n.domElement;if(n.object.isPerspectiveCamera){const he=n.object.position;C.copy(he).sub(n.target);let fe=C.length();fe*=Math.tan(n.object.fov/2*Math.PI/180),V(2*oe*fe/ae.clientHeight,n.object.matrix),J(2*ce*fe/ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(V(oe*(n.object.right-n.object.left)/n.object.zoom/ae.clientWidth,n.object.matrix),J(ce*(n.object.top-n.object.bottom)/n.object.zoom/ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(C){n.object.isPerspectiveCamera?c/=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*C)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(C){n.object.isPerspectiveCamera?c*=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/C)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(C){h.set(C.clientX,C.clientY)}function $(C){y.set(C.clientX,C.clientY)}function G(C){p.set(C.clientX,C.clientY)}function O(C){m.set(C.clientX,C.clientY),_.subVectors(m,h).multiplyScalar(n.rotateSpeed);const I=n.domElement;w(2*Math.PI*_.x/I.clientHeight),D(2*Math.PI*_.y/I.clientHeight),h.copy(m),n.update()}function k(C){b.set(C.clientX,C.clientY),M.subVectors(b,y),M.y>0?R(v()):M.y<0&&B(v()),y.copy(b),n.update()}function Q(C){d.set(C.clientX,C.clientY),g.subVectors(d,p).multiplyScalar(n.panSpeed),z(g.x,g.y),p.copy(d),n.update()}function Z(C){C.deltaY<0?B(v()):C.deltaY>0&&R(v()),n.update()}function K(C){let I=!1;switch(C.code){case n.keys.UP:z(0,n.keyPanSpeed),I=!0;break;case n.keys.BOTTOM:z(0,-n.keyPanSpeed),I=!0;break;case n.keys.LEFT:z(n.keyPanSpeed,0),I=!0;break;case n.keys.RIGHT:z(-n.keyPanSpeed,0),I=!0;break}I&&(C.preventDefault(),n.update())}function re(){if(x.length===1)h.set(x[0].pageX,x[0].pageY);else{const C=.5*(x[0].pageX+x[1].pageX),I=.5*(x[0].pageY+x[1].pageY);h.set(C,I)}}function pe(){if(x.length===1)p.set(x[0].pageX,x[0].pageY);else{const C=.5*(x[0].pageX+x[1].pageX),I=.5*(x[0].pageY+x[1].pageY);p.set(C,I)}}function Y(){const C=x[0].pageX-x[1].pageX,I=x[0].pageY-x[1].pageY,oe=Math.sqrt(C*C+I*I);y.set(0,oe)}function De(){n.enableZoom&&Y(),n.enablePan&&pe()}function xe(){n.enableZoom&&Y(),n.enableRotate&&re()}function ve(C){if(x.length==1)m.set(C.pageX,C.pageY);else{const oe=_e(C),ce=.5*(C.pageX+oe.x),ae=.5*(C.pageY+oe.y);m.set(ce,ae)}_.subVectors(m,h).multiplyScalar(n.rotateSpeed);const I=n.domElement;w(2*Math.PI*_.x/I.clientHeight),D(2*Math.PI*_.y/I.clientHeight),h.copy(m)}function ue(C){if(x.length===1)d.set(C.pageX,C.pageY);else{const I=_e(C),oe=.5*(C.pageX+I.x),ce=.5*(C.pageY+I.y);d.set(oe,ce)}g.subVectors(d,p).multiplyScalar(n.panSpeed),z(g.x,g.y),p.copy(d)}function Fe(C){const I=_e(C),oe=C.pageX-I.x,ce=C.pageY-I.y,ae=Math.sqrt(oe*oe+ce*ce);b.set(0,ae),M.set(0,Math.pow(b.y/y.y,n.zoomSpeed)),R(M.y),y.copy(b)}function be(C){n.enableZoom&&Fe(C),n.enablePan&&ue(C)}function ge(C){n.enableZoom&&Fe(C),n.enableRotate&&ve(C)}function Ze(C){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",ot),n.domElement.addEventListener("pointerup",tt)),te(C),C.pointerType==="touch"?A(C):nt(C))}function ot(C){n.enabled!==!1&&(C.pointerType==="touch"?S(C):Ne(C))}function tt(C){ne(C),x.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",ot),n.domElement.removeEventListener("pointerup",tt)),n.dispatchEvent(ff),s=i.NONE}function Rt(C){ne(C)}function nt(C){let I;switch(C.button){case 0:I=n.mouseButtons.LEFT;break;case 1:I=n.mouseButtons.MIDDLE;break;case 2:I=n.mouseButtons.RIGHT;break;default:I=-1}switch(I){case nr.DOLLY:if(n.enableZoom===!1)return;$(C),s=i.DOLLY;break;case nr.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;G(C),s=i.PAN}else{if(n.enableRotate===!1)return;j(C),s=i.ROTATE}break;case nr.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;j(C),s=i.ROTATE}else{if(n.enablePan===!1)return;G(C),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ho)}function Ne(C){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;O(C);break;case i.DOLLY:if(n.enableZoom===!1)return;k(C);break;case i.PAN:if(n.enablePan===!1)return;Q(C);break}}function Xt(C){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(C.preventDefault(),n.dispatchEvent(Ho),Z(C),n.dispatchEvent(ff))}function jt(C){n.enabled===!1||n.enablePan===!1||K(C)}function A(C){switch(se(C),x.length){case 1:switch(n.touches.ONE){case ir.ROTATE:if(n.enableRotate===!1)return;re(),s=i.TOUCH_ROTATE;break;case ir.PAN:if(n.enablePan===!1)return;pe(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ir.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;De(),s=i.TOUCH_DOLLY_PAN;break;case ir.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ho)}function S(C){switch(se(C),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ve(C),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ue(C),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;be(C),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ge(C),n.update();break;default:s=i.NONE}}function H(C){n.enabled!==!1&&C.preventDefault()}function te(C){x.push(C)}function ne(C){delete E[C.pointerId];for(let I=0;I<x.length;I++)if(x[I].pointerId==C.pointerId){x.splice(I,1);return}}function se(C){let I=E[C.pointerId];I===void 0&&(I=new Te,E[C.pointerId]=I),I.set(C.pageX,C.pageY)}function _e(C){const I=C.pointerId===x[0].pointerId?x[1]:x[0];return E[I.pointerId]}n.domElement.addEventListener("contextmenu",H),n.domElement.addEventListener("pointerdown",Ze),n.domElement.addEventListener("pointercancel",Rt),n.domElement.addEventListener("wheel",Xt,{passive:!1}),this.update()}}const Qa=new Gb(Yi,fi.domElement);Qa.enableZoom=!1;Qa.enableDamping=!0;const Vb=-1;Qa.rotateSpeed=Vb;function In(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function vd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Vt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Br={duration:.5,overwrite:!1,delay:0},pc,Ct,Qe,tn=1e8,ke=1/tn,Al=Math.PI*2,Hb=Al/4,Wb=0,yd=Math.sqrt,qb=Math.cos,Xb=Math.sin,ft=function(e){return typeof e=="string"},je=function(e){return typeof e=="function"},Un=function(e){return typeof e=="number"},mc=function(e){return typeof e>"u"},Tn=function(e){return typeof e=="object"},Lt=function(e){return e!==!1},bd=function(){return typeof window<"u"},fa=function(e){return je(e)||ft(e)},Md=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},xt=Array.isArray,Cl=/(?:-?\.?\d|\.)+/gi,Sd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Mr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Wo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wd=/[+-]=-?[.\d]+/,Td=/[^,'"\[\]\s]+/gi,jb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,He,Jt,Ll,gc,Wt={},wa={},Ed,Ad=function(e){return(wa=$i(e,Wt))&&qt},_c=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ta=function(e,t){return!t&&console.warn(e)},Cd=function(e,t){return e&&(Wt[e]=t)&&wa&&(wa[e]=t)||Wt},Es=function(){return 0},Yb={suppressEvents:!0,isStart:!0,kill:!1},ma={suppressEvents:!0,kill:!1},$b={suppressEvents:!0},xc={},ri=[],Pl={},Ld,zt={},qo={},hf=30,ga=[],vc="",yc=function(e){var t=e[0],n,i;if(Tn(t)||je(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ga.length;i--&&!ga[i].targetTest(t););n=ga[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Kd(e[i],n)))||e.splice(i,1);return e},Ui=function(e){return e._gsap||yc(nn(e))[0]._gsap},Pd=function(e,t,n){return(n=e[t])&&je(n)?e[t]():mc(n)&&e.getAttribute&&e.getAttribute(t)||n},Pt=function(e,t){return(e=e.split(",")).forEach(t)||e},Ye=function(e){return Math.round(e*1e5)/1e5||0},ht=function(e){return Math.round(e*1e7)/1e7||0},Ar=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Zb=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ea=function(){var e=ri.length,t=ri.slice(0),n,i;for(Pl={},ri.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Dd=function(e,t,n,i){ri.length&&Ea(),e.render(t,n,i||Ct&&t<0&&(e._initted||e._startAt)),ri.length&&Ea()},Rd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Td).length<2?t:ft(e)?e.trim():e},Id=function(e){return e},an=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Kb=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},$i=function(e,t){for(var n in t)e[n]=t[n];return e},df=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Tn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Aa=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},vs=function(e){var t=e.parent||He,n=e.keyframes?Kb(xt(e.keyframes)):an;if(Lt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Jb=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Od=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},eo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},li=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},ki=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Qb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Dl=function(e,t,n,i){return e._startAt&&(Ct?e._startAt.revert(ma):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},eM=function r(e){return!e||e._ts&&r(e.parent)},pf=function(e){return e._repeat?Gr(e._tTime,e=e.duration()+e._rDelay)*e:0},Gr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ca=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},to=function(e){return e._end=ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||ke)||0))},no=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ht(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),to(e),n._dirty||ki(n,e)),e},Fd=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Ca(e.rawTime(),t),(!t._dur||Gs(0,t.totalDuration(),n)-t._tTime>ke)&&t.render(n,!0)),ki(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ke}},yn=function(e,t,n,i){return t.parent&&li(t),t._start=ht((Un(n)?n:n||e!==He?Kt(e,n,t):e._time)+t._delay),t._end=ht(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Od(e,t,"_first","_last",e._sort?"_start":0),Rl(t)||(e._recent=t),i||Fd(e,t),e._ts<0&&no(e,e._tTime),e},Nd=function(e,t){return(Wt.ScrollTrigger||_c("scrollTrigger",t))&&Wt.ScrollTrigger.create(t,e)},zd=function(e,t,n,i,s){if(Mc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Ct&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ld!==Ut.frame)return ri.push(e),e._lazy=[s,i],1},tM=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Rl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},nM=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&tM(e)&&!(!e._initted&&Rl(e))||(e._ts<0||e._dp._ts<0)&&!Rl(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=Gs(0,e._tDur,t),u=Gr(l,o),e._yoyo&&u&1&&(a=1-a),u!==Gr(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Ct||i||e._zTime===ke||!t&&e._zTime){if(!e._initted&&zd(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?ke:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Dl(e,t,n,!0),e._onUpdate&&!n&&rn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&rn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&li(e,1),!n&&!Ct&&(rn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},iM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Vr=function(e,t,n,i){var s=e._repeat,a=ht(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:ht(a*(s+1)+e._rDelay*s):a,o>0&&!i&&no(e,e._tTime=e._tDur*o),e.parent&&to(e),n||ki(e.parent,e),e},mf=function(e){return e instanceof At?ki(e):Vr(e,e._dur)},rM={_start:0,endTime:Es,totalDuration:Es},Kt=function r(e,t,n){var i=e.labels,s=e._recent||rM,a=e.duration()>=tn?s.endTime(!1):e._dur,o,l,c;return ft(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(xt(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},ys=function(e,t,n){var i=Un(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Lt(l.vars.inherit)&&l.parent;a.immediateRender=Lt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new rt(t[0],a,t[s+1])},di=function(e,t){return e||e===0?t(e):t},Gs=function(e,t,n){return n<e?e:n>t?t:n},_t=function(e,t){return!ft(e)||!(t=jb.exec(e))?"":t[1]},sM=function(e,t,n){return di(n,function(i){return Gs(e,t,i)})},Il=[].slice,Ud=function(e,t){return e&&Tn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Tn(e[0]))&&!e.nodeType&&e!==Jt},aM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return ft(i)&&!t||Ud(i,1)?(s=n).push.apply(s,nn(i)):n.push(i)})||n},nn=function(e,t,n){return Qe&&!t&&Qe.selector?Qe.selector(e):ft(e)&&!n&&(Ll||!Hr())?Il.call((t||gc).querySelectorAll(e),0):xt(e)?aM(e,n):Ud(e)?Il.call(e,0):e?[e]:[]},Ol=function(e){return e=nn(e)[0]||Ta("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return nn(t,n.querySelectorAll?n:n===e?Ta("Invalid scope")||gc.createElement("div"):e)}},kd=function(e){return e.sort(function(){return .5-Math.random()})},Bd=function(e){if(je(e))return e;var t=Tn(e)?e:{each:e},n=Bi(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,f=i;return ft(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(h,m,_){var p=(_||t).length,d=a[p],g,y,b,M,x,E,L,v,w;if(!d){if(w=t.grid==="auto"?0:(t.grid||[1,tn])[1],!w){for(L=-tn;L<(L=_[w++].getBoundingClientRect().left)&&w<p;);w--}for(d=a[p]=[],g=l?Math.min(w,p)*u-.5:i%w,y=w===tn?0:l?p*f/w-.5:i/w|0,L=0,v=tn,E=0;E<p;E++)b=E%w-g,M=y-(E/w|0),d[E]=x=c?Math.abs(c==="y"?M:b):yd(b*b+M*M),x>L&&(L=x),x<v&&(v=x);i==="random"&&kd(d),d.max=L-v,d.min=v,d.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(w>p?p-1:c?c==="y"?p/w:w:Math.max(w,p/w))||0)*(i==="edges"?-1:1),d.b=p<0?s-p:s,d.u=_t(t.amount||t.each)||0,n=n&&p<0?Yd(n):n}return p=(d[h]-d.min)/d.max||0,ht(d.b+(n?n(p):p)*d.v)+d.u}},Fl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=ht(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Un(n)?0:_t(n))}},Gd=function(e,t){var n=xt(e),i,s;return!n&&Tn(e)&&(i=n=e.radius||tn,e.values?(e=nn(e.values),(s=!Un(e[0]))&&(i*=i)):e=Fl(e.increment)),di(t,n?je(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=tn,u=0,f=e.length,h,m;f--;)s?(h=e[f].x-o,m=e[f].y-l,h=h*h+m*m):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:a,s||u===a||Un(a)?u:u+_t(a)}:Fl(e))},Vd=function(e,t,n,i){return di(xt(e)?!t:n===!0?!!(n=0):!i,function(){return xt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},oM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},lM=function(e,t){return function(n){return e(parseFloat(n))+(t||_t(n))}},cM=function(e,t,n){return Wd(e,t,0,1,n)},Hd=function(e,t,n){return di(n,function(i){return e[~~t(i)]})},uM=function r(e,t,n){var i=t-e;return xt(e)?Hd(e,r(0,e.length),t):di(n,function(s){return(i+(s-e)%i)%i+e})},fM=function r(e,t,n){var i=t-e,s=i*2;return xt(e)?Hd(e,r(0,e.length-1),t):di(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},As=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?Td:Cl),n+=e.substr(t,i-t)+Vd(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Wd=function(e,t,n,i,s){var a=t-e,o=i-n;return di(s,function(l){return n+((l-e)/a*o||0)})},hM=function r(e,t,n,i){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var a=ft(e),o={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(xt(e)&&!xt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(_){_*=f;var p=Math.min(h,~~_);return u[p](_-p)},n=t}else i||(e=$i(xt(e)?[]:{},e));if(!u){for(l in t)bc.call(o,e,l,"get",t[l]);s=function(_){return Tc(_,o)||(a?e.p:e)}}}return di(n,s)},gf=function(e,t,n){var i=e.labels,s=tn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},rn=function(e,t,n){var i=e.vars,s=i[t],a=Qe,o=e._ctx,l,c,u;if(!!s)return l=i[t+"Params"],c=i.callbackScope||e,n&&ri.length&&Ea(),o&&(Qe=o),u=l?s.apply(c,l):s.call(c),Qe=a,u},ps=function(e){return li(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ct),e.progress()<1&&rn(e,"onInterrupt"),e},Sr,dM=function(e){e=!e.name&&e.default||e;var t=e.name,n=je(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Es,render:Tc,add:bc,kill:LM,modifier:CM,rawVars:0},a={targetTest:0,get:0,getSetter:wc,aliases:{},register:0};if(Hr(),e!==i){if(zt[t])return;an(i,an(Aa(e,s),a)),$i(i.prototype,$i(s,Aa(e,a))),zt[i.prop=t]=i,e.targetTest&&(ga.push(i),xc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Cd(t,i),e.register&&e.register(qt,i,Dt)},Be=255,ms={aqua:[0,Be,Be],lime:[0,Be,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Be],navy:[0,0,128],white:[Be,Be,Be],olive:[128,128,0],yellow:[Be,Be,0],orange:[Be,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Be,0,0],pink:[Be,192,203],cyan:[0,Be,Be],transparent:[Be,Be,Be,0]},Xo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Be+.5|0},qd=function(e,t,n){var i=e?Un(e)?[e>>16,e>>8&Be,e&Be]:0:ms.black,s,a,o,l,c,u,f,h,m,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ms[e])i=ms[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Be,i&Be,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Be,e&Be]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Cl),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Xo(l+1/3,s,a),i[1]=Xo(l,s,a),i[2]=Xo(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Sd),n&&i.length<4&&(i[3]=1),i}else i=e.match(Cl)||ms.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/Be,a=i[1]/Be,o=i[2]/Be,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(m=f-h,c=u>.5?m/(2-f-h):m/(f+h),l=f===s?(a-o)/m+(a<o?6:0):f===a?(o-s)/m+2:(s-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Xd=function(e){var t=[],n=[],i=-1;return e.split(si).forEach(function(s){var a=s.match(Mr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},_f=function(e,t,n){var i="",s=(e+i).match(si),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=qd(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Xd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(si,"1").split(Mr),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(si),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},si=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ms)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),pM=/hsl[a]?\(/,jd=function(e){var t=e.join(" "),n;if(si.lastIndex=0,si.test(t))return n=pM.test(t),e[1]=_f(e[1],n),e[0]=_f(e[0],n,Xd(e[1])),!0},Cs,Ut=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,f,h,m,_=function p(d){var g=r()-i,y=d===!0,b,M,x,E;if(g>e&&(n+=g-t),i+=g,x=i-n,b=x-a,(b>0||y)&&(E=++f.frame,h=x-f.time*1e3,f.time=x=x/1e3,a+=b+(b>=s?4:s-b),M=1),y||(l=c(p)),M)for(m=0;m<o.length;m++)o[m](x,h,E,d)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(d){return h/(1e3/(d||60))},wake:function(){Ed&&(!Ll&&bd()&&(Jt=Ll=window,gc=Jt.document||{},Wt.gsap=qt,(Jt.gsapVersions||(Jt.gsapVersions=[])).push(qt.version),Ad(wa||Jt.GreenSockGlobals||!Jt.gsap&&Jt||{}),u=Jt.requestAnimationFrame),l&&f.sleep(),c=u||function(d){return setTimeout(d,a-f.time*1e3+1|0)},Cs=1,_(2))},sleep:function(){(u?Jt.cancelAnimationFrame:clearTimeout)(l),Cs=0,c=Es},lagSmoothing:function(d,g){e=d||1/ke,t=Math.min(g,e,0)},fps:function(d){s=1e3/(d||240),a=f.time*1e3+s},add:function(d,g,y){var b=g?function(M,x,E,L){d(M,x,E,L),f.remove(b)}:d;return f.remove(d),o[y?"unshift":"push"](b),Hr(),b},remove:function(d,g){~(g=o.indexOf(d))&&o.splice(g,1)&&m>=g&&m--},_listeners:o},f}(),Hr=function(){return!Cs&&Ut.wake()},Ce={},mM=/^[\d.\-M][\d.\-,\s]/,gM=/["']/g,_M=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(gM,"").trim():+c,i=l.substr(o+1).trim();return t},xM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},vM=function(e){var t=(e+"").split("("),n=Ce[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[_M(t[1])]:xM(e).split(",").map(Rd)):Ce._CE&&mM.test(e)?Ce._CE("",e):n},Yd=function(e){return function(t){return 1-e(1-t)}},$d=function r(e,t){for(var n=e._first,i;n;)n instanceof At?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Bi=function(e,t){return e&&(je(e)?e:Ce[e]||vM(e))||t},Ji=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Pt(e,function(o){Ce[o]=Wt[o]=s,Ce[a=o.toLowerCase()]=n;for(var l in s)Ce[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ce[o+"."+l]=s[l]}),s},Zd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},jo=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Al*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Xb((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Zd(o);return s=Al/s,l.config=function(c,u){return r(e,c,u)},l},Yo=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Zd(n);return i.config=function(s){return r(e,s)},i};Pt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ji(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ce.Linear.easeNone=Ce.none=Ce.Linear.easeIn;Ji("Elastic",jo("in"),jo("out"),jo());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Ji("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ji("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Ji("Circ",function(r){return-(yd(1-r*r)-1)});Ji("Sine",function(r){return r===1?1:-qb(r*Hb)+1});Ji("Back",Yo("in"),Yo("out"),Yo());Ce.SteppedEase=Ce.steps=Wt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-ke;return function(o){return((i*Gs(0,a,o)|0)+s)*n}}};Br.ease=Ce["quad.out"];Pt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return vc+=r+","+r+"Params,"});var Kd=function(e,t){this.id=Wb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Pd,this.set=t?t.getSetter:wc},Wr=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Vr(this,+t.duration,1,1),this.data=t.data,Qe&&(this._ctx=Qe,Qe.data.push(this)),Cs||Ut.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Vr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Hr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(no(this,n),!s._dp||s.parent||Fd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&yn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ke||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Dd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+pf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+pf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Gr(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-ke?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Ca(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ke?0:this._rts,this.totalTime(Gs(-this._delay,this._tDur,i),!0),to(this),Qb(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Hr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ke&&(this._tTime-=ke)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&yn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Lt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ca(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=$b);var i=Ct;return Ct=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ct=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this.vars.immediateRender?-1:s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,mf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,mf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Kt(this,n),Lt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Lt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ke:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ke,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ke)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=je(n)?n:Id,o=function(){var c=i.then;i.then=null,je(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){ps(this)},r}();an(Wr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ke,_prom:0,_ps:!1,_rts:1});var At=function(r){vd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Lt(n.sortChildren),He&&yn(n.parent||He,In(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Nd(In(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return ys(0,arguments,this),this},t.from=function(i,s,a){return ys(1,arguments,this),this},t.fromTo=function(i,s,a,o){return ys(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,vs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new rt(i,s,Kt(this,a),1),this},t.call=function(i,s,a){return yn(this,rt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new rt(i,a,Kt(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,vs(a).immediateRender=Lt(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,f){return o.startAt=a,vs(o).immediateRender=Lt(o.immediateRender),this.staggerTo(i,s,o,l,c,u,f)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:ht(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,m,_,p,d,g,y,b,M,x,E,L;if(this!==He&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,M=this._start,b=this._ts,g=!b,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,d=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(d*100+i,s,a);if(h=ht(u%d),u===l?(p=this._repeat,h=c):(p=~~(u/d),p&&p===u/d&&(h=c,p--),h>c&&(h=c)),x=Gr(this._tTime,d),!o&&this._tTime&&x!==p&&(x=p),E&&p&1&&(h=c-h,L=1),p!==x&&!this._lock){var v=E&&x&1,w=v===(E&&p&1);if(p<x&&(v=!v),o=v?0:c,this._lock=1,this.render(o||(L?0:ht(p*d)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&rn(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;$d(this,L)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=iM(this,ht(o),ht(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&!s&&(rn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(m=this._first;m;){if(_=m._next,(m._act||h>=m._start)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,s,a),h!==this._time||!this._ts&&!g){y=0,_&&(u+=this._zTime=-ke);break}}m=_}else{m=this._last;for(var D=i<0?i:h;m;){if(_=m._prev,(m._act||D<=m._end)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(D-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(D-m._start)*m._ts,s,a||Ct&&(m._initted||m._startAt)),h!==this._time||!this._ts&&!g){y=0,_&&(u+=this._zTime=D?-ke:ke);break}}m=_}}if(y&&!s&&(this.pause(),y.render(h>=o?0:-ke)._zTime=h>=o?1:-1,this._ts))return this._start=M,to(this),this.render(i,s,a);this._onUpdate&&!s&&rn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&li(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(rn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Un(s)||(s=Kt(this,s,i)),!(i instanceof Wr)){if(xt(i))return i.forEach(function(o){return a.add(o,s)}),this;if(ft(i))return this.addLabel(i,s);if(je(i))i=rt.delayedCall(0,i);else return this}return this!==i?yn(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-tn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof rt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return ft(i)?this.removeLabel(i):je(i)?this.killTweensOf(i):(eo(this,i),i===this._recent&&(this._recent=this._last),ki(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ht(Ut.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Kt(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=rt.delayedCall(0,s||Es,a);return o.data="isPause",this._hasPause=1,yn(this,o,Kt(this,i))},t.removePause=function(i){var s=this._first;for(i=Kt(this,i);s;)s._start===i&&s.data==="isPause"&&li(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ei!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=nn(i),l=this._first,c=Un(s),u;l;)l instanceof rt?Zb(l._targets,o)&&(c?(!ei||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Kt(a,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,m,_=rt.to(a,an({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ke,onStart:function(){if(a.pause(),!m){var d=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==d&&Vr(_,d,0,1).render(_._time,!0,!0),m=1}u&&u.apply(_,f||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,an({startAt:{time:Kt(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),gf(this,Kt(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),gf(this,Kt(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ke)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return ki(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ki(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=tn,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,yn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Vr(a,a===He&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(He._ts&&(Dd(He,Ca(i,He)),Ld=Ut.frame),Ut.frame>=hf){hf+=Vt.autoSleep||120;var s=He._first;if((!s||!s._ts)&&Vt.autoSleep&&Ut._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ut.sleep()}}},e}(Wr);an(At.prototype,{_lock:0,_hasPause:0,_forcing:0});var yM=function(e,t,n,i,s,a,o){var l=new Dt(this._pt,e,t,0,1,ip,null,s),c=0,u=0,f,h,m,_,p,d,g,y;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=As(i)),a&&(y=[n,i],a(y,e,t),n=y[0],i=y[1]),h=n.match(Wo)||[];f=Wo.exec(i);)_=f[0],p=i.substring(c,f.index),m?m=(m+1)%5:p.substr(-5)==="rgba("&&(m=1),_!==h[u++]&&(d=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:p||u===1?p:",",s:d,c:_.charAt(1)==="="?Ar(d,_)-d:parseFloat(_)-d,m:m&&m<4?Math.round:0},c=Wo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(wd.test(i)||g)&&(l.e=0),this._pt=l,l},bc=function(e,t,n,i,s,a,o,l,c,u){je(i)&&(i=i(s||0,e,a));var f=e[t],h=n!=="get"?n:je(f)?c?e[t.indexOf("set")||!je(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,m=je(f)?c?TM:tp:Sc,_;if(ft(i)&&(~i.indexOf("random(")&&(i=As(i)),i.charAt(1)==="="&&(_=Ar(h,i)+(_t(h)||0),(_||_===0)&&(i=_))),!u||h!==i||Nl)return!isNaN(h*i)&&i!==""?(_=new Dt(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?AM:np,0,m),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!f&&!(t in e)&&_c(t,i),yM.call(this,e,t,h,i,m,l||Vt.stringFilter,c))},bM=function(e,t,n,i,s){if(je(e)&&(e=bs(e,s,t,n,i)),!Tn(e)||e.style&&e.nodeType||xt(e)||Md(e))return ft(e)?bs(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=bs(e[o],s,t,n,i);return a},Jd=function(e,t,n,i,s,a){var o,l,c,u;if(zt[e]&&(o=new zt[e]).init(s,o.rawVars?t[e]:bM(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Dt(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Sr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ei,Nl,Mc=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,f=i.callbackScope,h=i.runBackwards,m=i.yoyoEase,_=i.keyframes,p=i.autoRevert,d=e._dur,g=e._startAt,y=e._targets,b=e.parent,M=b&&b.data==="nested"?b.vars.targets:y,x=e._overwrite==="auto"&&!pc,E=e.timeline,L,v,w,D,V,J,z,R,B,j,$,G,O;if(E&&(!_||!s)&&(s="none"),e._ease=Bi(s,Br.ease),e._yEase=m?Yd(Bi(m===!0?s:m,Br.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!E&&!!i.runBackwards,!E||_&&!i.stagger){if(R=y[0]?Ui(y[0]).harness:0,G=R&&i[R.prop],L=Aa(i,xc),g&&(g._zTime<0&&g.progress(1),t<0&&h&&o&&!p?g.render(-1,!0):g.revert(h&&d?ma:Yb),g._lazy=0),a){if(li(e._startAt=rt.set(y,an({data:"isStart",overwrite:!1,parent:b,immediateRender:!0,lazy:Lt(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},a))),e._startAt._dp=0,t<0&&(Ct||!o&&!p)&&e._startAt.revert(ma),o&&d&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&d&&!g){if(t&&(o=!1),w=an({overwrite:!1,data:"isFromStart",lazy:o&&Lt(l),immediateRender:o,stagger:0,parent:b},L),G&&(w[R.prop]=G),li(e._startAt=rt.set(y,w)),e._startAt._dp=0,t<0&&(Ct?e._startAt.revert(ma):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,ke,ke);else if(!t)return}for(e._pt=e._ptCache=0,l=d&&Lt(l)||l&&!d,v=0;v<y.length;v++){if(V=y[v],z=V._gsap||yc(y)[v]._gsap,e._ptLookup[v]=j={},Pl[z.id]&&ri.length&&Ea(),$=M===y?v:M.indexOf(V),R&&(B=new R).init(V,G||L,e,$,M)!==!1&&(e._pt=D=new Dt(e._pt,V,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(k){j[k]=D}),B.priority&&(J=1)),!R||G)for(w in L)zt[w]&&(B=Jd(w,L,e,$,V,M))?B.priority&&(J=1):j[w]=D=bc.call(e,V,w,"get",L[w],$,M,0,i.stringFilter);e._op&&e._op[v]&&e.kill(V,e._op[v]),x&&e._pt&&(ei=e,He.killTweensOf(V,j,e.globalTime(t)),O=!e.parent,ei=0),e._pt&&l&&(Pl[z.id]=1)}J&&rp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!O,_&&t<=0&&E.render(tn,!0,!0)},MM=function(e,t,n,i,s,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,h;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Nl=1,e.vars[t]="+=0",Mc(e,o),Nl=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=Ye(n)+_t(u.e)),u.b&&(u.b=c.s+_t(u.b))},SM=function(e,t){var n=e[0]?Ui(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=$i({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},wM=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(xt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},bs=function(e,t,n,i,s){return je(e)?e.call(t,n,i,s):ft(e)&&~e.indexOf("random(")?As(e):e},Qd=vc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ep={};Pt(Qd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ep[r]=1});var rt=function(r){vd(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:vs(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,m=l.overwrite,_=l.keyframes,p=l.defaults,d=l.scrollTrigger,g=l.yoyoEase,y=i.parent||He,b=(xt(n)||Md(n)?Un(n[0]):"length"in i)?[n]:nn(n),M,x,E,L,v,w,D,V;if(o._targets=b.length?yc(b):Ta("GSAP target "+n+" not found. https://greensock.com",!Vt.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,_||h||fa(c)||fa(u)){if(i=o.vars,M=o.timeline=new At({data:"nested",defaults:p||{},targets:y&&y.data==="nested"?y.vars.targets:b}),M.kill(),M.parent=M._dp=In(o),M._start=0,h||fa(c)||fa(u)){if(L=b.length,D=h&&Bd(h),Tn(h))for(v in h)~Qd.indexOf(v)&&(V||(V={}),V[v]=h[v]);for(x=0;x<L;x++)E=Aa(i,ep),E.stagger=0,g&&(E.yoyoEase=g),V&&$i(E,V),w=b[x],E.duration=+bs(c,In(o),x,w,b),E.delay=(+bs(u,In(o),x,w,b)||0)-o._delay,!h&&L===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),M.to(w,E,D?D(x,w,b):0),M._ease=Ce.none;M.duration()?c=u=0:o.timeline=0}else if(_){vs(an(M.vars.defaults,{ease:"none"})),M._ease=Bi(_.ease||i.ease||"none");var J=0,z,R,B;if(xt(_))_.forEach(function(j){return M.to(b,j,">")}),M.duration();else{E={};for(v in _)v==="ease"||v==="easeEach"||wM(v,_[v],E,_.easeEach);for(v in E)for(z=E[v].sort(function(j,$){return j.t-$.t}),J=0,x=0;x<z.length;x++)R=z[x],B={ease:R.e,duration:(R.t-(x?z[x-1].t:0))/100*c},B[v]=R.v,M.to(b,B,J),J+=B.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return m===!0&&!pc&&(ei=In(o),He.killTweensOf(b),ei=0),yn(y,In(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!_&&o._start===ht(y._time)&&Lt(f)&&eM(In(o))&&y.data!=="nested")&&(o._tTime=-ke,o.render(Math.max(0,-u)||0)),d&&Nd(In(o),d),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-ke&&!u?l:i<ke?0:i,h,m,_,p,d,g,y,b,M;if(!c)nM(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,b=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(p*100+i,s,a);if(h=ht(f%p),f===l?(_=this._repeat,h=c):(_=~~(f/p),_&&_===f/p&&(h=c,_--),h>c&&(h=c)),g=this._yoyo&&_&1,g&&(M=this._yEase,h=c-h),d=Gr(this._tTime,p),h===o&&!a&&this._initted)return this._tTime=f,this;_!==d&&(b&&this._yEase&&$d(b,g),this.vars.repeatRefresh&&!g&&!this._lock&&(this._lock=a=1,this.render(ht(p*_),!0).invalidate()._lock=0))}if(!this._initted){if(zd(this,u?i:h,a,s,f))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(M||this._ease)(h/c),this._from&&(this.ratio=y=1-y),h&&!o&&!s&&(rn(this,"onStart"),this._tTime!==f))return this;for(m=this._pt;m;)m.r(y,m.d),m=m._next;b&&b.render(i<0?i:!h&&g?-ke:b._dur*b._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Dl(this,i,s,a),rn(this,"onUpdate")),this._repeat&&_!==d&&this.vars.onRepeat&&!s&&this.parent&&rn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Dl(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&li(this,1),!s&&!(u&&!o)&&(f||o||g)&&(rn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o){Cs||Ut.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Mc(this,l),c=this._ease(l/this._dur),MM(this,i,s,a,o,c,l)?this.resetTo(i,s,a,o):(no(this,0),this.parent||Od(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ps(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ei&&ei.vars.overwrite!==!0)._first||ps(this),this.parent&&a!==this.timeline.totalDuration()&&Vr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?nn(i):o,c=this._ptLookup,u=this._pt,f,h,m,_,p,d,g;if((!s||s==="all")&&Jb(o,l))return s==="all"&&(this._pt=0),ps(this);for(f=this._op=this._op||[],s!=="all"&&(ft(s)&&(p={},Pt(s,function(y){return p[y]=1}),s=p),s=SM(o,s)),g=o.length;g--;)if(~l.indexOf(o[g])){h=c[g],s==="all"?(f[g]=s,_=h,m={}):(m=f[g]=f[g]||{},_=s);for(p in _)d=h&&h[p],d&&((!("kill"in d.d)||d.d.kill(p)===!0)&&eo(this,d,"_pt"),delete h[p]),m!=="all"&&(m[p]=1)}return this._initted&&!this._pt&&u&&ps(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ys(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return ys(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return He.killTweensOf(i,s,a)},e}(Wr);an(rt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Pt("staggerTo,staggerFrom,staggerFromTo",function(r){rt[r]=function(){var e=new At,t=Il.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Sc=function(e,t,n){return e[t]=n},tp=function(e,t,n){return e[t](n)},TM=function(e,t,n,i){return e[t](i.fp,n)},EM=function(e,t,n){return e.setAttribute(t,n)},wc=function(e,t){return je(e[t])?tp:mc(e[t])&&e.setAttribute?EM:Sc},np=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},AM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ip=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Tc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},CM=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},LM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?eo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},PM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},rp=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Dt=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||np,this.d=l||this,this.set=c||Sc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=PM,this.m=n,this.mt=s,this.tween=i},r}();Pt(vc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return xc[r]=1});Wt.TweenMax=Wt.TweenLite=rt;Wt.TimelineLite=Wt.TimelineMax=At;He=new At({sortChildren:!1,defaults:Br,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Vt.stringFilter=jd;var qr=[],_a={},DM=[],xf=0,$o=function(e){return(_a[e]||DM).map(function(t){return t()})},zl=function(){var e=Date.now(),t=[];e-xf>2&&($o("matchMediaInit"),qr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Jt.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),$o("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),xf=e,$o("matchMedia"))},sp=function(){function r(t,n){this.selector=n&&Ol(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){je(n)&&(s=i,i=n,n=je);var a=this,o=function(){var c=Qe,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=Ol(s)),Qe=a,f=i.apply(a,arguments),je(f)&&a._r.push(f),Qe=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===je?o(a):n?a[n]=o:o},e.ignore=function(n){var i=Qe;Qe=null,n(this),Qe=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof rt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Wr)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=qr.indexOf(this);~o&&qr.splice(o,1)}},e.revert=function(n){this.kill(n||{})},r}(),RM=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){Tn(n)||(n={matches:n});var a=new sp(0,s||this.scope),o=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Jt.matchMedia(n[c]),l&&(qr.indexOf(a)<0&&qr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(zl):l.addEventListener("change",zl)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),La={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return dM(i)})},timeline:function(e){return new At(e)},getTweensOf:function(e,t){return He.getTweensOf(e,t)},getProperty:function(e,t,n,i){ft(e)&&(e=nn(e)[0]);var s=Ui(e||{}).get,a=n?Id:Rd;return n==="native"&&(n=""),e&&(t?a((zt[t]&&zt[t].get||s)(e,t,n,i)):function(o,l,c){return a((zt[o]&&zt[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=nn(e),e.length>1){var i=e.map(function(u){return qt.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var a=zt[t],o=Ui(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;Sr._pt=0,f.init(e,n?u+n:u,Sr,0,[e]),f.render(1,f),Sr._pt&&Tc(1,Sr)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=qt.to(e,$i((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return He.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Bi(e.ease,Br.ease)),df(Br,e||{})},config:function(e){return df(Vt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!zt[o]&&!Wt[o]&&Ta(t+" effect requires "+o+" plugin.")}),qo[t]=function(o,l,c){return n(nn(o),an(l||{},s),c)},a&&(At.prototype[t]=function(o,l,c){return this.add(qo[t](o,Tn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ce[e]=Bi(t)},parseEase:function(e,t){return arguments.length?Bi(e,t):Ce},getById:function(e){return He.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new At(e),i,s;for(n.smoothChildTiming=Lt(e.smoothChildTiming),He.remove(n),n._dp=0,n._time=n._tTime=He._time,i=He._first;i;)s=i._next,(t||!(!i._dur&&i instanceof rt&&i.vars.onComplete===i._targets[0]))&&yn(n,i,i._start-i._delay),i=s;return yn(He,n,0),n},context:function(e,t){return e?new sp(e,t):Qe},matchMedia:function(e){return new RM(e)},matchMediaRefresh:function(){return qr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||zl()},addEventListener:function(e,t){var n=_a[e]||(_a[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=_a[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:uM,wrapYoyo:fM,distribute:Bd,random:Vd,snap:Gd,normalize:cM,getUnit:_t,clamp:sM,splitColor:qd,toArray:nn,selector:Ol,mapRange:Wd,pipe:oM,unitize:lM,interpolate:hM,shuffle:kd},install:Ad,effects:qo,ticker:Ut,updateRoot:At.updateRoot,plugins:zt,globalTimeline:He,core:{PropTween:Dt,globals:Cd,Tween:rt,Timeline:At,Animation:Wr,getCache:Ui,_removeLinkedListItem:eo,reverting:function(){return Ct},context:function(e){return e&&Qe&&(Qe.data.push(e),e._ctx=Qe),Qe},suppressOverwrites:function(e){return pc=e}}};Pt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return La[r]=rt[r]});Ut.add(At.updateRoot);Sr=La.to({},{duration:0});var IM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},OM=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=IM(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Zo=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(ft(s)&&(l={},Pt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}OM(o,s)}}}},qt=La.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Ct?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Zo("roundProps",Fl),Zo("modifiers"),Zo("snap",Gd))||La;rt.version=At.version=qt.version="3.11.3";Ed=1;bd()&&Hr();Ce.Power0;Ce.Power1;Ce.Power2;Ce.Power3;Ce.Power4;Ce.Linear;Ce.Quad;Ce.Cubic;Ce.Quart;Ce.Quint;Ce.Strong;Ce.Elastic;Ce.Back;Ce.SteppedEase;Ce.Bounce;Ce.Sine;Ce.Expo;Ce.Circ;/*!
 * CSSPlugin 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var vf,ti,Cr,Ec,Ri,yf,Ac,FM=function(){return typeof window<"u"},kn={},Ai=180/Math.PI,Lr=Math.PI/180,xr=Math.atan2,bf=1e8,Cc=/([A-Z])/g,NM=/(left|right|width|margin|padding|x)/i,zM=/[\s,\(]\S/,Nn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ul=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},UM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},kM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},BM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},ap=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},op=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},GM=function(e,t,n){return e.style[t]=n},VM=function(e,t,n){return e.style.setProperty(t,n)},HM=function(e,t,n){return e._gsap[t]=n},WM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},qM=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},XM=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},qe="transform",pn=qe+"Origin",jM=function(e,t){var n=this,i=this.target,s=i.style;if(e in kn){if(this.tfm=this.tfm||{},e!=="transform"&&(e=Nn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=On(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:On(i,e)),this.props.indexOf(qe)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(pn,t,"")),e=qe}(s||t)&&this.props.push(e,t,s[e])},lp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},YM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].replace(Cc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ac(),s&&!s.isStart&&!n[qe]&&(lp(n),i.uncache=1)}},cp=function(e,t){var n={target:e,props:[],revert:YM,save:jM};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},up,kl=function(e,t){var n=ti.createElementNS?ti.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ti.createElement(e);return n.style?n:ti.createElement(e)},wn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Cc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Xr(t)||t,1)||""},Mf="O,Moz,ms,Ms,Webkit".split(","),Xr=function(e,t,n){var i=t||Ri,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Mf[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Mf[a]:"")+e},Bl=function(){FM()&&window.document&&(vf=window,ti=vf.document,Cr=ti.documentElement,Ri=kl("div")||{style:{}},kl("div"),qe=Xr(qe),pn=qe+"Origin",Ri.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",up=!!Xr("perspective"),Ac=qt.core.reverting,Ec=1)},Ko=function r(e){var t=kl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(Cr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Cr.removeChild(t),this.style.cssText=s,a},Sf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},fp=function(e){var t;try{t=e.getBBox()}catch{t=Ko.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ko||(t=Ko.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Sf(e,["x","cx","x1"])||0,y:+Sf(e,["y","cy","y1"])||0,width:0,height:0}:t},hp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&fp(e))},Ls=function(e,t){if(t){var n=e.style;t in kn&&t!==pn&&(t=qe),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Cc,"-$1").toLowerCase())):n.removeAttribute(t)}},ni=function(e,t,n,i,s,a){var o=new Dt(e._pt,t,n,0,1,a?op:ap);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},wf={deg:1,rad:1,turn:1},$M={grid:1,flex:1},ci=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ri.style,l=NM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",m=i==="%",_,p,d,g;return i===a||!s||wf[i]||wf[a]?s:(a!=="px"&&!h&&(s=r(e,t,n,"px")),g=e.getCTM&&hp(e),(m||a==="%")&&(kn[t]||~t.indexOf("adius"))?(_=g?e.getBBox()[l?"width":"height"]:e[u],Ye(m?s/_*f:s/100*_)):(o[l?"width":"height"]=f+(h?a:i),p=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===ti||!p.appendChild)&&(p=ti.body),d=p._gsap,d&&m&&d.width&&l&&d.time===Ut.time&&!d.uncache?Ye(s/d.width*f):((m||a==="%")&&!$M[wn(p,"display")]&&(o.position=wn(e,"position")),p===e&&(o.position="static"),p.appendChild(Ri),_=Ri[u],p.removeChild(Ri),o.position="absolute",l&&m&&(d=Ui(p),d.time=Ut.time,d.width=p[u]),Ye(h?_*s/f:_&&s?f/_*s:0))))},On=function(e,t,n,i){var s;return Ec||Bl(),t in Nn&&t!=="transform"&&(t=Nn[t],~t.indexOf(",")&&(t=t.split(",")[0])),kn[t]&&t!=="transform"?(s=Ds(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Da(wn(e,pn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Pa[t]&&Pa[t](e,t,n)||wn(e,t)||Pd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ci(e,t,s,n)+n:s},ZM=function(e,t,n,i){if(!n||n==="none"){var s=Xr(t,e,1),a=s&&wn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=wn(e,"borderTopColor"))}var o=new Dt(this._pt,e.style,t,0,1,ip),l=0,c=0,u,f,h,m,_,p,d,g,y,b,M,x;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=wn(e,t)||i,e.style[t]=n),u=[n,i],jd(u),n=u[0],i=u[1],h=n.match(Mr)||[],x=i.match(Mr)||[],x.length){for(;f=Mr.exec(i);)d=f[0],y=i.substring(l,f.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),d!==(p=h[c++]||"")&&(m=parseFloat(p)||0,M=p.substr((m+"").length),d.charAt(1)==="="&&(d=Ar(m,d)+M),g=parseFloat(d),b=d.substr((g+"").length),l=Mr.lastIndex-b.length,b||(b=b||Vt.units[t]||M,l===i.length&&(i+=b,o.e+=b)),M!==b&&(m=ci(e,t,p,b)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:m,c:g-m,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?op:ap;return wd.test(i)&&(o.e=0),this._pt=o,o},Tf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},KM=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Tf[n]||n,t[1]=Tf[i]||i,t.join(" ")},JM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],kn[o]&&(l=1,o=o==="transformOrigin"?pn:qe),Ls(n,o);l&&(Ls(n,qe),a&&(a.svg&&n.removeAttribute("transform"),Ds(n,1),a.uncache=1,lp(i)))}},Pa={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Dt(e._pt,t,n,0,0,JM);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Ps=[1,0,0,1,0,0],dp={},pp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ef=function(e){var t=wn(e,qe);return pp(t)?Ps:t.substr(7).match(Sd).map(Ye)},Lc=function(e,t){var n=e._gsap||Ui(e),i=e.style,s=Ef(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ps:s):(s===Ps&&!e.offsetParent&&e!==Cr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Cr.appendChild(e)),s=Ef(e),l?i.display=l:Ls(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Cr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Gl=function(e,t,n,i,s,a){var o=e._gsap,l=s||Lc(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,m=l[0],_=l[1],p=l[2],d=l[3],g=l[4],y=l[5],b=t.split(" "),M=parseFloat(b[0])||0,x=parseFloat(b[1])||0,E,L,v,w;n?l!==Ps&&(L=m*d-_*p)&&(v=M*(d/L)+x*(-p/L)+(p*y-d*g)/L,w=M*(-_/L)+x*(m/L)-(m*y-_*g)/L,M=v,x=w):(E=fp(e),M=E.x+(~b[0].indexOf("%")?M/100*E.width:M),x=E.y+(~(b[1]||b[0]).indexOf("%")?x/100*E.height:x)),i||i!==!1&&o.smooth?(g=M-c,y=x-u,o.xOffset=f+(g*m+y*p)-g,o.yOffset=h+(g*_+y*d)-y):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=x,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[pn]="0px 0px",a&&(ni(a,o,"xOrigin",c,M),ni(a,o,"yOrigin",u,x),ni(a,o,"xOffset",f,o.xOffset),ni(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+x)},Ds=function(e,t){var n=e._gsap||new Kd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=wn(e,pn)||"0",u,f,h,m,_,p,d,g,y,b,M,x,E,L,v,w,D,V,J,z,R,B,j,$,G,O,k,Q,Z,K,re,pe;return u=f=h=p=d=g=y=b=M=0,m=_=1,n.svg=!!(e.getCTM&&hp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[qe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[qe]!=="none"?l[qe]:"")),i.scale=i.rotate=i.translate="none"),L=Lc(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),Gl(e,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,L)),x=n.xOrigin||0,E=n.yOrigin||0,L!==Ps&&(V=L[0],J=L[1],z=L[2],R=L[3],u=B=L[4],f=j=L[5],L.length===6?(m=Math.sqrt(V*V+J*J),_=Math.sqrt(R*R+z*z),p=V||J?xr(J,V)*Ai:0,y=z||R?xr(z,R)*Ai+p:0,y&&(_*=Math.abs(Math.cos(y*Lr))),n.svg&&(u-=x-(x*V+E*z),f-=E-(x*J+E*R))):(pe=L[6],K=L[7],k=L[8],Q=L[9],Z=L[10],re=L[11],u=L[12],f=L[13],h=L[14],v=xr(pe,Z),d=v*Ai,v&&(w=Math.cos(-v),D=Math.sin(-v),$=B*w+k*D,G=j*w+Q*D,O=pe*w+Z*D,k=B*-D+k*w,Q=j*-D+Q*w,Z=pe*-D+Z*w,re=K*-D+re*w,B=$,j=G,pe=O),v=xr(-z,Z),g=v*Ai,v&&(w=Math.cos(-v),D=Math.sin(-v),$=V*w-k*D,G=J*w-Q*D,O=z*w-Z*D,re=R*D+re*w,V=$,J=G,z=O),v=xr(J,V),p=v*Ai,v&&(w=Math.cos(v),D=Math.sin(v),$=V*w+J*D,G=B*w+j*D,J=J*w-V*D,j=j*w-B*D,V=$,B=G),d&&Math.abs(d)+Math.abs(p)>359.9&&(d=p=0,g=180-g),m=Ye(Math.sqrt(V*V+J*J+z*z)),_=Ye(Math.sqrt(j*j+pe*pe)),v=xr(B,j),y=Math.abs(v)>2e-4?v*Ai:0,M=re?1/(re<0?-re:re):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!pp(wn(e,qe)),$&&e.setAttribute("transform",$))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(m*=-1,y+=p<=0?180:-180,p+=p<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Ye(m),n.scaleY=Ye(_),n.rotation=Ye(p)+o,n.rotationX=Ye(d)+o,n.rotationY=Ye(g)+o,n.skewX=y+o,n.skewY=b+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[pn]=Da(c)),n.xOffset=n.yOffset=0,n.force3D=Vt.force3D,n.renderTransform=n.svg?eS:up?mp:QM,n.uncache=0,n},Da=function(e){return(e=e.split(" "))[0]+" "+e[1]},Jo=function(e,t,n){var i=_t(t);return Ye(parseFloat(t)+parseFloat(ci(e,"x",n+"px",i)))+i},QM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,mp(e,t)},Mi="0deg",cs="0px",Si=") ",mp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,m=n.skewY,_=n.scaleX,p=n.scaleY,d=n.transformPerspective,g=n.force3D,y=n.target,b=n.zOrigin,M="",x=g==="auto"&&e&&e!==1||g===!0;if(b&&(f!==Mi||u!==Mi)){var E=parseFloat(u)*Lr,L=Math.sin(E),v=Math.cos(E),w;E=parseFloat(f)*Lr,w=Math.cos(E),a=Jo(y,a,L*w*-b),o=Jo(y,o,-Math.sin(E)*-b),l=Jo(y,l,v*w*-b+b)}d!==cs&&(M+="perspective("+d+Si),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(x||a!==cs||o!==cs||l!==cs)&&(M+=l!==cs||x?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Si),c!==Mi&&(M+="rotate("+c+Si),u!==Mi&&(M+="rotateY("+u+Si),f!==Mi&&(M+="rotateX("+f+Si),(h!==Mi||m!==Mi)&&(M+="skew("+h+", "+m+Si),(_!==1||p!==1)&&(M+="scale("+_+", "+p+Si),y.style[qe]=M||"translate(0, 0)"},eS=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,m=n.target,_=n.xOrigin,p=n.yOrigin,d=n.xOffset,g=n.yOffset,y=n.forceCSS,b=parseFloat(a),M=parseFloat(o),x,E,L,v,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Lr,c*=Lr,x=Math.cos(l)*f,E=Math.sin(l)*f,L=Math.sin(l-c)*-h,v=Math.cos(l-c)*h,c&&(u*=Lr,w=Math.tan(c-u),w=Math.sqrt(1+w*w),L*=w,v*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),x*=w,E*=w)),x=Ye(x),E=Ye(E),L=Ye(L),v=Ye(v)):(x=f,v=h,E=L=0),(b&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(b=ci(m,"x",a,"px"),M=ci(m,"y",o,"px")),(_||p||d||g)&&(b=Ye(b+_-(_*x+p*L)+d),M=Ye(M+p-(_*E+p*v)+g)),(i||s)&&(w=m.getBBox(),b=Ye(b+i/100*w.width),M=Ye(M+s/100*w.height)),w="matrix("+x+","+E+","+L+","+v+","+b+","+M+")",m.setAttribute("transform",w),y&&(m.style[qe]=w)},tS=function(e,t,n,i,s){var a=360,o=ft(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ai:1),c=l-i,u=i+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*bf)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*bf)%a-~~(c/a)*a)),e._pt=h=new Dt(e._pt,t,n,i,c,UM),h.e=u,h.u="deg",e._props.push(n),h},Af=function(e,t){for(var n in t)e[n]=t[n];return e},nS=function(e,t,n){var i=Af({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,m,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[qe]=t,o=Ds(n,1),Ls(n,qe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[qe],a[qe]=t,o=Ds(n,1),a[qe]=c);for(l in kn)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(m=_t(c),_=_t(u),f=m!==_?ci(n,l,c,_):parseFloat(c),h=parseFloat(u),e._pt=new Dt(e._pt,o,l,f,h-f,Ul),e._pt.u=_||0,e._props.push(l));Af(o,i)};Pt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Pa[e>1?"border"+r:r]=function(o,l,c,u,f){var h,m;if(arguments.length<4)return h=a.map(function(_){return On(o,_,c)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(u+"").split(" "),m={},a.forEach(function(_,p){return m[_]=h[p]=h[p]||h[(p-1)/2|0]}),o.init(l,m,f)}});var gp={name:"css",register:Bl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,h,m,_,p,d,g,y,b,M,x,E,L,v;Ec||Bl(),this.styles=this.styles||cp(e),v=this.styles.props,this.tween=n;for(p in t)if(p!=="autoRound"&&(u=t[p],!(zt[p]&&Jd(p,t,n,i,e,s)))){if(m=typeof u,_=Pa[p],m==="function"&&(u=u.call(n,i,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=As(u)),_)_(this,e,p,u,n)&&(L=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),u+="",si.lastIndex=0,si.test(c)||(d=_t(c),g=_t(u)),g?d!==g&&(c=ci(e,p,c,g)+g):d&&(u+=d),this.add(o,"setProperty",c,u,i,s,0,0,p),a.push(p),v.push(p,0,o[p]);else if(m!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(n,i,e,s):l[p],ft(c)&&~c.indexOf("random(")&&(c=As(c)),_t(c+"")||(c+=Vt.units[p]||_t(On(e,p))||""),(c+"").charAt(1)==="="&&(c=On(e,p))):c=On(e,p),h=parseFloat(c),y=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),p in Nn&&(p==="autoAlpha"&&(h===1&&On(e,"visibility")==="hidden"&&f&&(h=0),v.push("visibility",0,o.visibility),ni(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),p!=="scale"&&p!=="transform"&&(p=Nn[p],~p.indexOf(",")&&(p=p.split(",")[0]))),b=p in kn,b){if(this.styles.save(p),M||(x=e._gsap,x.renderTransform&&!t.parseTransform||Ds(e,t.parseTransform),E=t.smoothOrigin!==!1&&x.smooth,M=this._pt=new Dt(this._pt,o,qe,0,1,x.renderTransform,x,0,-1),M.dep=1),p==="scale")this._pt=new Dt(this._pt,x,"scaleY",h,(y?Ar(h,y+f):f)-h||0,Ul),this._pt.u=0,a.push("scaleY",p),p+="X";else if(p==="transformOrigin"){v.push(pn,0,o[pn]),u=KM(u),x.svg?Gl(e,u,0,E,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==x.zOrigin&&ni(this,x,"zOrigin",x.zOrigin,g),ni(this,o,p,Da(c),Da(u)));continue}else if(p==="svgOrigin"){Gl(e,u,1,E,0,this);continue}else if(p in dp){tS(this,x,p,h,y?Ar(h,y+u):u);continue}else if(p==="smoothOrigin"){ni(this,x,"smooth",x.smooth,u);continue}else if(p==="force3D"){x[p]=u;continue}else if(p==="transform"){nS(this,u,e);continue}}else p in o||(p=Xr(p)||p);if(b||(f||f===0)&&(h||h===0)&&!zM.test(u)&&p in o)d=(c+"").substr((h+"").length),f||(f=0),g=_t(u)||(p in Vt.units?Vt.units[p]:d),d!==g&&(h=ci(e,p,c,g)),this._pt=new Dt(this._pt,b?x:o,p,h,(y?Ar(h,y+f):f)-h,!b&&(g==="px"||p==="zIndex")&&t.autoRound!==!1?BM:Ul),this._pt.u=g||0,d!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=kM);else if(p in o)ZM.call(this,e,p,c,y?y+u:u);else if(p in e)this.add(e,p,c||e[p],y?y+u:u,i,s);else{_c(p,u);continue}b||(p in o?v.push(p,0,o[p]):v.push(p,1,c||e[p])),a.push(p)}}L&&rp(this)},render:function(e,t){if(t.tween._time||!Ac())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:On,aliases:Nn,getSetter:function(e,t,n){var i=Nn[t];return i&&i.indexOf(",")<0&&(t=i),t in kn&&t!==pn&&(e._gsap.x||On(e,"x"))?n&&yf===n?t==="scale"?WM:HM:(yf=n||{})&&(t==="scale"?qM:XM):e.style&&!mc(e.style[t])?GM:~t.indexOf("-")?VM:wc(e,t)},core:{_removeProperty:Ls,_getMatrix:Lc}};qt.utils.checkPrefix=Xr;qt.core.getStyleSaver=cp;(function(r,e,t,n){var i=Pt(r+","+e+","+t,function(s){kn[s]=1});Pt(e,function(s){Vt.units[s]="deg",dp[s]=1}),Nn[i[13]]=r+","+e,Pt(n,function(s){var a=s.split(":");Nn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Pt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Vt.units[r]="px"});qt.registerPlugin(gp);var $e=qt.registerPlugin(gp)||qt;$e.core.Tween;let Cf=0;function Pc(r,e,t){console.log(`loading file: ${r}.
${e} of ${t} files`),Cf=e/t*100,progressIndicator.style.transform=`translateX(${Cf}%)`}const iS=document.querySelector("#startButton"),Qo=document.querySelector("#loader");function jr(r){const e=$e.timeline({onComplete:()=>rS(r),defaults:{duration:.5,ease:"power4.out"}});e.to(".loader-shape",{opacity:0}),e.to(iS,{scale:0,opacity:0},"<"),e.to("#loaderTitle",{scale:0,opacity:0},"<"),e.to(Qo,{backgroundColor:"#000"},"<"),e.to(Qo,{opacity:0}),e.set(Qo,{display:"none",duration:0})}function rS(r){for(const e of r)$e.to(e.scale,{x:1,y:1,z:1})}function Dc(r){for(const e of r)$e.to(e.scale,{x:0,y:0,z:0})}const Vl=new Te;window.addEventListener("mousemove",r=>{Vl.x=r.clientX/window.innerWidth*2-1,Vl.y=-(r.clientY/window.innerHeight)*2+1});const sS=new zb,Lf=new Ub;let ui=null;const _p=()=>{const r=sS.getElapsedTime();hi.rotation.y=r*Math.PI*.01,Lf.setFromCamera(Vl,Yi);const e=Lf.intersectObjects(Bb);e.length?ui=e[0]:ui=null,Qa.update,fi.render(Vn,Yi),window.requestAnimationFrame(_p)};_p();window.addEventListener("resize",aS);function aS(){Yi.aspect=window.innerWidth/window.innerHeight,Yi.updateProjectionMatrix(),fi.setSize(window.innerWidth,window.innerHeight)}function Yr(){const r=document.querySelector("#toggleWassilyChair"),e=document.querySelector("#togglebarcelonaPavilion");if(ui)switch(ui.object){case Sn:r.click();break;case Mn:e.click();break}}function $r(){if(ui)switch(ui.object){}}function Zr(){if(ui)switch(ui.object){}}let sn=null,Kr=!0;const oS=()=>{sn=[Sn,Mn],Vn.add(ba,Sn,Mn),hi.add(ba,Sn,Mn),ji.onProgress=function(r,e,t){Pc(r,e,t)},ji.onLoad=function(){setTimeout(()=>{jr(sn)},1e3),Kr=!1},Kr||jr(sn),window.addEventListener("click",Yr)},lS=()=>{//!! Not yet working...
//!! will need to add to the exit animation
Dc(sn),Vn.remove(ba,Sn,Mn),hi.remove(ba,Sn,Mn),window.removeEventListener("click",Yr)},cS=()=>{sn=[],Vn.add(Ma),hi.add(Ma),ji.onProgress=function(r,e,t){Pc(r,e,t)},ji.onLoad=function(){setTimeout(()=>{jr(sn)},1e3),Kr=!1},Kr||jr(sn),window.addEventListener("click",$r)},uS=()=>{//!! Not yet working...
//!! will need to add to the exit animation
Dc(sn),Vn.remove(Ma),hi.remove(Ma),window.removeEventListener("click",$r)},fS=()=>{sn=[],Vn.add(Sa),hi.add(Sa),ji.onProgress=function(r,e,t){Pc(r,e,t)},ji.onLoad=function(){setTimeout(()=>{jr(sn)},1e3),Kr=!1},Kr||jr(sn),window.addEventListener("click",Zr)},hS=()=>{//!! Not yet working...
//!! will need to add to the exit animation
Dc(sn),Vn.remove(Sa),hi.remove(Sa),window.removeEventListener("click",Zr)};function dS(r){return{show:!1,scene:r,init(){$e.set("#navWrapper",{xPercent:100}),$e.set("#burger-1",{y:-4}),$e.set("#burger-2",{y:4})},openNav(){this.removePageEvents();const e=$e.timeline({onStart:()=>this.show=!0,defaults:{duration:.25,ease:"power4.in"}});e.fromTo("#navWrapper",{xPercent:100},{xPercent:0,duration:.5}),e.fromTo(".nav-title",{opacity:0},{opacity:1}),e.fromTo(".nav-item",{opacity:0,scale:0},{opacity:1,scale:1,stagger:.1},"<"),e.to("#burger-1",{y:1},0),e.to("#burger-2",{y:-1},0),e.to("#burger-1",{rotate:45},.5),e.to("#burger-2",{rotate:-45},.5)},closeNav(){if(this.show){this.addPageEvents();const e=$e.timeline({onComplete:()=>this.show=!1,defaults:{duration:.25,ease:"power4.in"}});e.fromTo(".nav-item",{opacity:1,scale:1},{opacity:0,scale:0,stagger:{from:"end",each:.1}}),e.fromTo(".nav-title",{opacity:1},{opacity:0},"<+.25"),e.fromTo("#navWrapper",{xPercent:0},{xPercent:100,duration:.5}),e.to("#burger-1",{rotate:0},0),e.to("#burger-2",{rotate:0},0),e.to("#burger-1",{y:-4},.5),e.to("#burger-2",{y:4},.5)}},addPageEvents(){switch(this.scene){case"lobby":window.addEventListener("click",Yr);break;case"library":window.addEventListener("click",$r);break;case"outside":window.addEventListener("click",Zr);break}},removePageEvents(){switch(this.scene){case"lobby":window.removeEventListener("click",Yr);break;case"library":window.removeEventListener("click",$r);break;case"outside":window.removeEventListener("click",Zr);break}},toggleNav(){this.show?this.closeNav():this.openNav()}}}function pS(r){return{open:!1,scene:r,init(){$e.set(this.$refs.text,{opacity:0}),$e.set(this.$refs.callout,{opacity:0})},openPopup(){this.removePageEvents();const e=$e.timeline({onStart:()=>this.open=!0,defaults:{duration:.25,ease:"power4.in"}});e.fromTo(this.$refs.container,{xPercent:100},{xPercent:0,duration:.5}),e.fromTo(this.$refs.text,{opacity:0},{opacity:1}),e.fromTo(this.$refs.callout,{opacity:0},{opacity:1},"<")},closePopup(){if(this.open){this.addPageEvents();const e=$e.timeline({onComplete:()=>this.open=!1,defaults:{duration:.25,ease:"power4.in"}});e.fromTo(this.$refs.container,{xPercent:0},{xPercent:100,duration:.5}),e.fromTo(this.$refs.text,{opacity:1},{opacity:0}),e.fromTo(this.$refs.callout,{opacity:1},{opacity:0},"<")}},addPageEvents(){switch(this.scene){case"lobby":window.addEventListener("click",Yr);break;case"library":window.addEventListener("click",$r);break;case"outside":window.addEventListener("click",Zr);break}},removePageEvents(){switch(this.scene){case"lobby":window.removeEventListener("click",Yr);break;case"library":window.removeEventListener("click",$r);break;case"outside":window.removeEventListener("click",Zr);break}},togglePopup(){this.open?this.closePopup():this.openPopup()}}}class mS extends Ir{onLeave({from:e,trigger:t,done:n}){const i=$e.timeline({onComplete:()=>n(),defaults:{duration:.5,ease:"power4.in"}});i.set("#transition",{display:"block",xPercent:100}),i.to("#transition",{xPercent:0})}onEnter({to:e,trigger:t,done:n}){const i=$e.timeline({onComplete:()=>n(),defaults:{duration:.5,ease:"power4.in"}});i.to("#transition",{xPercent:-100}),i.set("#transition",{display:"hidden",xPercent:100})}}class gS extends Ir{onLeave({from:e,trigger:t,done:n}){const i=$e.timeline({onComplete:()=>n(),defaults:{duration:.5,ease:"power4.in"}});i.set("#transition",{display:"block",xPercent:100,backgroundColor:"#27369C"}),i.to("#transition",{xPercent:0})}onEnter({to:e,trigger:t,done:n}){document.querySelector("#apple-touch-icon").href="/favicon/lobby/apple-touch-icon.png",document.querySelector("#icon-large").href="/favicon/lobby/favicon-32x32.png",document.querySelector("#icon-small").href="/favicon/lobby/favicon-16x16.png",document.querySelector("#mask").setAttribute("color","#27369c"),document.querySelector("#tile-color").setAttribute("content","#27369c");const i=$e.timeline({onComplete:()=>n(),defaults:{duration:.5,ease:"power4.in"}});i.to("#transition",{xPercent:-100}),i.set("#transition",{display:"hidden",xPercent:100})}}class _S extends Ir{onLeave({from:e,trigger:t,done:n}){const i=$e.timeline({onComplete:()=>n(),defaults:{duration:.5,ease:"power4.in"}});i.set("#transition",{display:"block",xPercent:100,backgroundColor:"#DF3128"}),i.to("#transition",{xPercent:0})}onEnter({to:e,trigger:t,done:n}){document.querySelector("#apple-touch-icon").href="/favicon/library/apple-touch-icon.png",document.querySelector("#icon-large").href="/favicon/library/favicon-32x32.png",document.querySelector("#icon-small").href="/favicon/library/favicon-16x16.png",document.querySelector("#mask").setAttribute("color","#DF3128"),document.querySelector("#tile-color").setAttribute("content","#DF3128");const i=$e.timeline({onComplete:()=>n(),defaults:{duration:.5,ease:"power4.in"}});i.to("#transition",{xPercent:-100}),i.set("#transition",{display:"hidden",xPercent:100})}}class xS extends Ir{onLeave({from:e,trigger:t,done:n}){const i=$e.timeline({onComplete:()=>n(),defaults:{duration:.5,ease:"power4.in"}});i.set("#transition",{display:"block",xPercent:100,backgroundColor:"#E8E36B"}),i.to("#transition",{xPercent:0})}onEnter({to:e,trigger:t,done:n}){document.querySelector("#apple-touch-icon").href="/favicon/outside/apple-touch-icon.png",document.querySelector("#icon-large").href="/favicon/outside/favicon-32x32.png",document.querySelector("#icon-small").href="/favicon/outside/favicon-16x16.png",document.querySelector("#mask").setAttribute("color","#E8E36B"),document.querySelector("#tile-color").setAttribute("content","#E8E36B");const i=$e.timeline({onComplete:()=>n(),defaults:{duration:.5,ease:"power4.in"}});i.to("#transition",{xPercent:-100}),i.set("#transition",{display:"hidden",xPercent:100})}}class vS extends Ss{onEnter(){oS()}onEnterCompleted(){}onLeave(){}onLeaveCompleted(){lS()}}class yS extends Ss{onEnter(){fS()}onEnterCompleted(){}onLeave(){}onLeaveCompleted(){hS()}}class bS extends Ss{onEnter(){cS()}onEnterCompleted(){}onLeave(){}onLeaveCompleted(){uS()}}window.Alpine=Xa;Xa.data("nav",dS);Xa.data("popup",pS);const Rc=new Og({transitions:{default:mS,toLobby:gS,toLibrary:_S,toOutside:xS},renderers:{lobby:vS,outside:yS,library:bS}});Rc.addRoute("/.*","/","toLobby");Rc.addRoute("/.*","/library/","toLibrary");Rc.addRoute("/.*","/outside/","toOutside");Xa.start();
//# sourceMappingURL=app.1e2dac70.js.map
