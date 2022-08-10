var I1=Object.defineProperty;var C1=(t,e,n)=>e in t?I1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var R=(t,e,n)=>(C1(t,typeof e!="symbol"?e+"":e,n),n);const N1=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};N1();var ie={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ws=Symbol.for("react.element"),A1=Symbol.for("react.portal"),D1=Symbol.for("react.fragment"),R1=Symbol.for("react.strict_mode"),P1=Symbol.for("react.profiler"),O1=Symbol.for("react.provider"),x1=Symbol.for("react.context"),M1=Symbol.for("react.forward_ref"),L1=Symbol.for("react.suspense"),$1=Symbol.for("react.memo"),U1=Symbol.for("react.lazy"),Pf=Symbol.iterator;function b1(t){return t===null||typeof t!="object"?null:(t=Pf&&t[Pf]||t["@@iterator"],typeof t=="function"?t:null)}var ig={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sg=Object.assign,og={};function Ci(t,e,n){this.props=t,this.context=e,this.refs=og,this.updater=n||ig}Ci.prototype.isReactComponent={};Ci.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ci.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ag(){}ag.prototype=Ci.prototype;function wh(t,e,n){this.props=t,this.context=e,this.refs=og,this.updater=n||ig}var Eh=wh.prototype=new ag;Eh.constructor=wh;sg(Eh,Ci.prototype);Eh.isPureReactComponent=!0;var Of=Array.isArray,lg=Object.prototype.hasOwnProperty,Sh={current:null},ug={key:!0,ref:!0,__self:!0,__source:!0};function cg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)lg.call(e,r)&&!ug.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ws,type:t,key:s,ref:o,props:i,_owner:Sh.current}}function F1(t,e){return{$$typeof:Ws,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _h(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ws}function V1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xf=/\/+/g;function su(t,e){return typeof t=="object"&&t!==null&&t.key!=null?V1(""+t.key):e.toString(36)}function Qo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ws:case A1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+su(o,0):r,Of(i)?(n="",t!=null&&(n=t.replace(xf,"$&/")+"/"),Qo(i,e,n,"",function(u){return u})):i!=null&&(_h(i)&&(i=F1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(xf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Of(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+su(s,a);o+=Qo(s,e,n,l,i)}else if(l=b1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+su(s,a++),o+=Qo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function _o(t,e,n){if(t==null)return t;var r=[],i=0;return Qo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function B1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var tt={current:null},Xo={transition:null},z1={ReactCurrentDispatcher:tt,ReactCurrentBatchConfig:Xo,ReactCurrentOwner:Sh};W.Children={map:_o,forEach:function(t,e,n){_o(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _o(t,function(){e++}),e},toArray:function(t){return _o(t,function(e){return e})||[]},only:function(t){if(!_h(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=Ci;W.Fragment=D1;W.Profiler=P1;W.PureComponent=wh;W.StrictMode=R1;W.Suspense=L1;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z1;W.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=sg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)lg.call(e,l)&&!ug.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ws,type:t.type,key:i,ref:s,props:r,_owner:o}};W.createContext=function(t){return t={$$typeof:x1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:O1,_context:t},t.Consumer=t};W.createElement=cg;W.createFactory=function(t){var e=cg.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:M1,render:t}};W.isValidElement=_h;W.lazy=function(t){return{$$typeof:U1,_payload:{_status:-1,_result:t},_init:B1}};W.memo=function(t,e){return{$$typeof:$1,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=Xo.transition;Xo.transition={};try{t()}finally{Xo.transition=e}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(t,e){return tt.current.useCallback(t,e)};W.useContext=function(t){return tt.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return tt.current.useDeferredValue(t)};W.useEffect=function(t,e){return tt.current.useEffect(t,e)};W.useId=function(){return tt.current.useId()};W.useImperativeHandle=function(t,e,n){return tt.current.useImperativeHandle(t,e,n)};W.useInsertionEffect=function(t,e){return tt.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return tt.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return tt.current.useMemo(t,e)};W.useReducer=function(t,e,n){return tt.current.useReducer(t,e,n)};W.useRef=function(t){return tt.current.useRef(t)};W.useState=function(t){return tt.current.useState(t)};W.useSyncExternalStore=function(t,e,n){return tt.current.useSyncExternalStore(t,e,n)};W.useTransition=function(){return tt.current.useTransition()};W.version="18.2.0";ie.exports=W;var j1=ie.exports,Xu={},hg={exports:{}},yt={},dg={exports:{}},fg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,V){var B=C.length;C.push(V);e:for(;0<B;){var pe=B-1>>>1,Ce=C[pe];if(0<i(Ce,V))C[pe]=V,C[B]=Ce,B=pe;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var V=C[0],B=C.pop();if(B!==V){C[0]=B;e:for(var pe=0,Ce=C.length,Eo=Ce>>>1;pe<Eo;){var Jn=2*(pe+1)-1,iu=C[Jn],Zn=Jn+1,So=C[Zn];if(0>i(iu,B))Zn<Ce&&0>i(So,iu)?(C[pe]=So,C[Zn]=B,pe=Zn):(C[pe]=iu,C[Jn]=B,pe=Jn);else if(Zn<Ce&&0>i(So,B))C[pe]=So,C[Zn]=B,pe=Zn;else break e}}return V}function i(C,V){var B=C.sortIndex-V.sortIndex;return B!==0?B:C.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,g=!1,y=!1,v=!1,D=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(C){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=C)r(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function w(C){if(v=!1,m(C),!y)if(n(l)!==null)y=!0,nu(T);else{var V=n(u);V!==null&&ru(w,V.startTime-C)}}function T(C,V){y=!1,v&&(v=!1,p(x),x=-1),g=!0;var B=d;try{for(m(V),h=n(l);h!==null&&(!(h.expirationTime>V)||C&&!Nt());){var pe=h.callback;if(typeof pe=="function"){h.callback=null,d=h.priorityLevel;var Ce=pe(h.expirationTime<=V);V=t.unstable_now(),typeof Ce=="function"?h.callback=Ce:h===n(l)&&r(l),m(V)}else r(l);h=n(l)}if(h!==null)var Eo=!0;else{var Jn=n(u);Jn!==null&&ru(w,Jn.startTime-V),Eo=!1}return Eo}finally{h=null,d=B,g=!1}}var N=!1,A=null,x=-1,te=5,j=-1;function Nt(){return!(t.unstable_now()-j<te)}function Li(){if(A!==null){var C=t.unstable_now();j=C;var V=!0;try{V=A(!0,C)}finally{V?$i():(N=!1,A=null)}}else N=!1}var $i;if(typeof f=="function")$i=function(){f(Li)};else if(typeof MessageChannel!="undefined"){var Rf=new MessageChannel,k1=Rf.port2;Rf.port1.onmessage=Li,$i=function(){k1.postMessage(null)}}else $i=function(){D(Li,0)};function nu(C){A=C,N||(N=!0,$i())}function ru(C,V){x=D(function(){C(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,nu(T))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(C){switch(d){case 1:case 2:case 3:var V=3;break;default:V=d}var B=d;d=V;try{return C()}finally{d=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,V){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var B=d;d=C;try{return V()}finally{d=B}},t.unstable_scheduleCallback=function(C,V,B){var pe=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?pe+B:pe):B=pe,C){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=B+Ce,C={id:c++,callback:V,priorityLevel:C,startTime:B,expirationTime:Ce,sortIndex:-1},B>pe?(C.sortIndex=B,e(u,C),n(l)===null&&C===n(u)&&(v?(p(x),x=-1):v=!0,ru(w,B-pe))):(C.sortIndex=Ce,e(l,C),y||g||(y=!0,nu(T))),C},t.unstable_shouldYield=Nt,t.unstable_wrapCallback=function(C){var V=d;return function(){var B=d;d=V;try{return C.apply(this,arguments)}finally{d=B}}}})(fg);dg.exports=fg;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg=ie.exports,mt=dg.exports;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mg=new Set,ps={};function Nr(t,e){ai(t,e),ai(t+"Capture",e)}function ai(t,e){for(ps[t]=e,t=0;t<e.length;t++)mg.add(e[t])}var on=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Yu=Object.prototype.hasOwnProperty,H1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mf={},Lf={};function W1(t){return Yu.call(Lf,t)?!0:Yu.call(Mf,t)?!1:H1.test(t)?Lf[t]=!0:(Mf[t]=!0,!1)}function K1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function q1(t,e,n,r){if(e===null||typeof e=="undefined"||K1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Be[t]=new nt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Be[e]=new nt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Be[t]=new nt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Be[t]=new nt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Be[t]=new nt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Be[t]=new nt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Be[t]=new nt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Be[t]=new nt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Be[t]=new nt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Th=/[\-:]([a-z])/g;function kh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Th,kh);Be[e]=new nt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Th,kh);Be[e]=new nt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Th,kh);Be[e]=new nt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Be[t]=new nt(t,1,!1,t.toLowerCase(),null,!1,!1)});Be.xlinkHref=new nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Be[t]=new nt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ih(t,e,n,r){var i=Be.hasOwnProperty(e)?Be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(q1(e,n,i,r)&&(n=null),r||i===null?W1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var mn=pg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,To=Symbol.for("react.element"),Mr=Symbol.for("react.portal"),Lr=Symbol.for("react.fragment"),Ch=Symbol.for("react.strict_mode"),Ju=Symbol.for("react.profiler"),gg=Symbol.for("react.provider"),yg=Symbol.for("react.context"),Nh=Symbol.for("react.forward_ref"),Zu=Symbol.for("react.suspense"),ec=Symbol.for("react.suspense_list"),Ah=Symbol.for("react.memo"),En=Symbol.for("react.lazy"),vg=Symbol.for("react.offscreen"),$f=Symbol.iterator;function Ui(t){return t===null||typeof t!="object"?null:(t=$f&&t[$f]||t["@@iterator"],typeof t=="function"?t:null)}var de=Object.assign,ou;function Ki(t){if(ou===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ou=e&&e[1]||""}return`
`+ou+t}var au=!1;function lu(t,e){if(!t||au)return"";au=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{au=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ki(t):""}function G1(t){switch(t.tag){case 5:return Ki(t.type);case 16:return Ki("Lazy");case 13:return Ki("Suspense");case 19:return Ki("SuspenseList");case 0:case 2:case 15:return t=lu(t.type,!1),t;case 11:return t=lu(t.type.render,!1),t;case 1:return t=lu(t.type,!0),t;default:return""}}function tc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Lr:return"Fragment";case Mr:return"Portal";case Ju:return"Profiler";case Ch:return"StrictMode";case Zu:return"Suspense";case ec:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yg:return(t.displayName||"Context")+".Consumer";case gg:return(t._context.displayName||"Context")+".Provider";case Nh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ah:return e=t.displayName||null,e!==null?e:tc(t.type)||"Memo";case En:e=t._payload,t=t._init;try{return tc(t(e))}catch{}}return null}function Q1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tc(e);case 8:return e===Ch?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function X1(t){var e=wg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ko(t){t._valueTracker||(t._valueTracker=X1(t))}function Eg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=wg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ma(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function nc(t,e){var n=e.checked;return de({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Uf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Fn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Sg(t,e){e=e.checked,e!=null&&Ih(t,"checked",e,!1)}function rc(t,e){Sg(t,e);var n=Fn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ic(t,e.type,n):e.hasOwnProperty("defaultValue")&&ic(t,e.type,Fn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ic(t,e,n){(e!=="number"||ma(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qi=Array.isArray;function Xr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Fn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function sc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return de({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ff(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(qi(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Fn(n)}}function _g(t,e){var n=Fn(e.value),r=Fn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Vf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Tg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Tg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Io,kg=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Io=Io||document.createElement("div"),Io.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Io.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ms(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Y1=["Webkit","ms","Moz","O"];Object.keys(Zi).forEach(function(t){Y1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zi[e]=Zi[t]})});function Ig(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zi.hasOwnProperty(t)&&Zi[t]?(""+e).trim():e+"px"}function Cg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ig(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var J1=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ac(t,e){if(e){if(J1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function lc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uc=null;function Dh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cc=null,Yr=null,Jr=null;function Bf(t){if(t=Gs(t)){if(typeof cc!="function")throw Error(S(280));var e=t.stateNode;e&&(e=ml(e),cc(t.stateNode,t.type,e))}}function Ng(t){Yr?Jr?Jr.push(t):Jr=[t]:Yr=t}function Ag(){if(Yr){var t=Yr,e=Jr;if(Jr=Yr=null,Bf(t),e)for(t=0;t<e.length;t++)Bf(e[t])}}function Dg(t,e){return t(e)}function Rg(){}var uu=!1;function Pg(t,e,n){if(uu)return t(e,n);uu=!0;try{return Dg(t,e,n)}finally{uu=!1,(Yr!==null||Jr!==null)&&(Rg(),Ag())}}function gs(t,e){var n=t.stateNode;if(n===null)return null;var r=ml(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var hc=!1;if(on)try{var bi={};Object.defineProperty(bi,"passive",{get:function(){hc=!0}}),window.addEventListener("test",bi,bi),window.removeEventListener("test",bi,bi)}catch{hc=!1}function Z1(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var es=!1,ga=null,ya=!1,dc=null,eE={onError:function(t){es=!0,ga=t}};function tE(t,e,n,r,i,s,o,a,l){es=!1,ga=null,Z1.apply(eE,arguments)}function nE(t,e,n,r,i,s,o,a,l){if(tE.apply(this,arguments),es){if(es){var u=ga;es=!1,ga=null}else throw Error(S(198));ya||(ya=!0,dc=u)}}function Ar(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Og(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zf(t){if(Ar(t)!==t)throw Error(S(188))}function rE(t){var e=t.alternate;if(!e){if(e=Ar(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return zf(i),t;if(s===r)return zf(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function xg(t){return t=rE(t),t!==null?Mg(t):null}function Mg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Mg(t);if(e!==null)return e;t=t.sibling}return null}var Lg=mt.unstable_scheduleCallback,jf=mt.unstable_cancelCallback,iE=mt.unstable_shouldYield,sE=mt.unstable_requestPaint,me=mt.unstable_now,oE=mt.unstable_getCurrentPriorityLevel,Rh=mt.unstable_ImmediatePriority,$g=mt.unstable_UserBlockingPriority,va=mt.unstable_NormalPriority,aE=mt.unstable_LowPriority,Ug=mt.unstable_IdlePriority,hl=null,Ft=null;function lE(t){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(hl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:hE,uE=Math.log,cE=Math.LN2;function hE(t){return t>>>=0,t===0?32:31-(uE(t)/cE|0)|0}var Co=64,No=4194304;function Gi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Gi(a):(s&=o,s!==0&&(r=Gi(s)))}else o=n&~i,o!==0?r=Gi(o):s!==0&&(r=Gi(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ot(e),i=1<<n,r|=t[n],e&=~i;return r}function dE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ot(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=dE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function fc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bg(){var t=Co;return Co<<=1,(Co&4194240)===0&&(Co=64),t}function cu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ks(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ot(e),t[e]=n}function pE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ot(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ph(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ot(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function Fg(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Vg,Oh,Bg,zg,jg,pc=!1,Ao=[],An=null,Dn=null,Rn=null,ys=new Map,vs=new Map,_n=[],mE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hf(t,e){switch(t){case"focusin":case"focusout":An=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":ys.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vs.delete(e.pointerId)}}function Fi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Gs(e),e!==null&&Oh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function gE(t,e,n,r,i){switch(e){case"focusin":return An=Fi(An,t,e,n,r,i),!0;case"dragenter":return Dn=Fi(Dn,t,e,n,r,i),!0;case"mouseover":return Rn=Fi(Rn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ys.set(s,Fi(ys.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,vs.set(s,Fi(vs.get(s)||null,t,e,n,r,i)),!0}return!1}function Hg(t){var e=rr(t.target);if(e!==null){var n=Ar(e);if(n!==null){if(e=n.tag,e===13){if(e=Og(n),e!==null){t.blockedOn=e,jg(t.priority,function(){Bg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=mc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);uc=r,n.target.dispatchEvent(r),uc=null}else return e=Gs(n),e!==null&&Oh(e),t.blockedOn=n,!1;e.shift()}return!0}function Wf(t,e,n){Yo(t)&&n.delete(e)}function yE(){pc=!1,An!==null&&Yo(An)&&(An=null),Dn!==null&&Yo(Dn)&&(Dn=null),Rn!==null&&Yo(Rn)&&(Rn=null),ys.forEach(Wf),vs.forEach(Wf)}function Vi(t,e){t.blockedOn===e&&(t.blockedOn=null,pc||(pc=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,yE)))}function ws(t){function e(i){return Vi(i,t)}if(0<Ao.length){Vi(Ao[0],t);for(var n=1;n<Ao.length;n++){var r=Ao[n];r.blockedOn===t&&(r.blockedOn=null)}}for(An!==null&&Vi(An,t),Dn!==null&&Vi(Dn,t),Rn!==null&&Vi(Rn,t),ys.forEach(e),vs.forEach(e),n=0;n<_n.length;n++)r=_n[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<_n.length&&(n=_n[0],n.blockedOn===null);)Hg(n),n.blockedOn===null&&_n.shift()}var Zr=mn.ReactCurrentBatchConfig,Ea=!0;function vE(t,e,n,r){var i=Y,s=Zr.transition;Zr.transition=null;try{Y=1,xh(t,e,n,r)}finally{Y=i,Zr.transition=s}}function wE(t,e,n,r){var i=Y,s=Zr.transition;Zr.transition=null;try{Y=4,xh(t,e,n,r)}finally{Y=i,Zr.transition=s}}function xh(t,e,n,r){if(Ea){var i=mc(t,e,n,r);if(i===null)Eu(t,e,r,Sa,n),Hf(t,r);else if(gE(i,t,e,n,r))r.stopPropagation();else if(Hf(t,r),e&4&&-1<mE.indexOf(t)){for(;i!==null;){var s=Gs(i);if(s!==null&&Vg(s),s=mc(t,e,n,r),s===null&&Eu(t,e,r,Sa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Eu(t,e,r,null,n)}}var Sa=null;function mc(t,e,n,r){if(Sa=null,t=Dh(r),t=rr(t),t!==null)if(e=Ar(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Og(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Sa=t,null}function Wg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oE()){case Rh:return 1;case $g:return 4;case va:case aE:return 16;case Ug:return 536870912;default:return 16}default:return 16}}var Cn=null,Mh=null,Jo=null;function Kg(){if(Jo)return Jo;var t,e=Mh,n=e.length,r,i="value"in Cn?Cn.value:Cn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Jo=i.slice(t,1<r?1-r:void 0)}function Zo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Do(){return!0}function Kf(){return!1}function vt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Do:Kf,this.isPropagationStopped=Kf,this}return de(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Do)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Do)},persist:function(){},isPersistent:Do}),e}var Ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lh=vt(Ni),qs=de({},Ni,{view:0,detail:0}),EE=vt(qs),hu,du,Bi,dl=de({},qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$h,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bi&&(Bi&&t.type==="mousemove"?(hu=t.screenX-Bi.screenX,du=t.screenY-Bi.screenY):du=hu=0,Bi=t),hu)},movementY:function(t){return"movementY"in t?t.movementY:du}}),qf=vt(dl),SE=de({},dl,{dataTransfer:0}),_E=vt(SE),TE=de({},qs,{relatedTarget:0}),fu=vt(TE),kE=de({},Ni,{animationName:0,elapsedTime:0,pseudoElement:0}),IE=vt(kE),CE=de({},Ni,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),NE=vt(CE),AE=de({},Ni,{data:0}),Gf=vt(AE),DE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=PE[t])?!!e[t]:!1}function $h(){return OE}var xE=de({},qs,{key:function(t){if(t.key){var e=DE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?RE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$h,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ME=vt(xE),LE=de({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qf=vt(LE),$E=de({},qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$h}),UE=vt($E),bE=de({},Ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),FE=vt(bE),VE=de({},dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),BE=vt(VE),zE=[9,13,27,32],Uh=on&&"CompositionEvent"in window,ts=null;on&&"documentMode"in document&&(ts=document.documentMode);var jE=on&&"TextEvent"in window&&!ts,qg=on&&(!Uh||ts&&8<ts&&11>=ts),Xf=String.fromCharCode(32),Yf=!1;function Gg(t,e){switch(t){case"keyup":return zE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $r=!1;function HE(t,e){switch(t){case"compositionend":return Qg(e);case"keypress":return e.which!==32?null:(Yf=!0,Xf);case"textInput":return t=e.data,t===Xf&&Yf?null:t;default:return null}}function WE(t,e){if($r)return t==="compositionend"||!Uh&&Gg(t,e)?(t=Kg(),Jo=Mh=Cn=null,$r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qg&&e.locale!=="ko"?null:e.data;default:return null}}var KE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!KE[t.type]:e==="textarea"}function Xg(t,e,n,r){Ng(r),e=_a(e,"onChange"),0<e.length&&(n=new Lh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ns=null,Es=null;function qE(t){ay(t,0)}function fl(t){var e=Fr(t);if(Eg(e))return t}function GE(t,e){if(t==="change")return e}var Yg=!1;if(on){var pu;if(on){var mu="oninput"in document;if(!mu){var Zf=document.createElement("div");Zf.setAttribute("oninput","return;"),mu=typeof Zf.oninput=="function"}pu=mu}else pu=!1;Yg=pu&&(!document.documentMode||9<document.documentMode)}function ep(){ns&&(ns.detachEvent("onpropertychange",Jg),Es=ns=null)}function Jg(t){if(t.propertyName==="value"&&fl(Es)){var e=[];Xg(e,Es,t,Dh(t)),Pg(qE,e)}}function QE(t,e,n){t==="focusin"?(ep(),ns=e,Es=n,ns.attachEvent("onpropertychange",Jg)):t==="focusout"&&ep()}function XE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fl(Es)}function YE(t,e){if(t==="click")return fl(e)}function JE(t,e){if(t==="input"||t==="change")return fl(e)}function ZE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Mt=typeof Object.is=="function"?Object.is:ZE;function Ss(t,e){if(Mt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Yu.call(e,i)||!Mt(t[i],e[i]))return!1}return!0}function tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function np(t,e){var n=tp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tp(n)}}function Zg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Zg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ey(){for(var t=window,e=ma();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ma(t.document)}return e}function bh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function eS(t){var e=ey(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Zg(n.ownerDocument.documentElement,n)){if(r!==null&&bh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=np(n,s);var o=np(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var tS=on&&"documentMode"in document&&11>=document.documentMode,Ur=null,gc=null,rs=null,yc=!1;function rp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yc||Ur==null||Ur!==ma(r)||(r=Ur,"selectionStart"in r&&bh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),rs&&Ss(rs,r)||(rs=r,r=_a(gc,"onSelect"),0<r.length&&(e=new Lh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ur)))}function Ro(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var br={animationend:Ro("Animation","AnimationEnd"),animationiteration:Ro("Animation","AnimationIteration"),animationstart:Ro("Animation","AnimationStart"),transitionend:Ro("Transition","TransitionEnd")},gu={},ty={};on&&(ty=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function pl(t){if(gu[t])return gu[t];if(!br[t])return t;var e=br[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ty)return gu[t]=e[n];return t}var ny=pl("animationend"),ry=pl("animationiteration"),iy=pl("animationstart"),sy=pl("transitionend"),oy=new Map,ip="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(t,e){oy.set(t,e),Nr(e,[t])}for(var yu=0;yu<ip.length;yu++){var vu=ip[yu],nS=vu.toLowerCase(),rS=vu[0].toUpperCase()+vu.slice(1);Kn(nS,"on"+rS)}Kn(ny,"onAnimationEnd");Kn(ry,"onAnimationIteration");Kn(iy,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(sy,"onTransitionEnd");ai("onMouseEnter",["mouseout","mouseover"]);ai("onMouseLeave",["mouseout","mouseover"]);ai("onPointerEnter",["pointerout","pointerover"]);ai("onPointerLeave",["pointerout","pointerover"]);Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qi));function sp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,nE(r,e,void 0,t),t.currentTarget=null}function ay(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;sp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;sp(i,a,u),s=l}}}if(ya)throw t=dc,ya=!1,dc=null,t}function ne(t,e){var n=e[_c];n===void 0&&(n=e[_c]=new Set);var r=t+"__bubble";n.has(r)||(ly(e,t,2,!1),n.add(r))}function wu(t,e,n){var r=0;e&&(r|=4),ly(n,t,r,e)}var Po="_reactListening"+Math.random().toString(36).slice(2);function _s(t){if(!t[Po]){t[Po]=!0,mg.forEach(function(n){n!=="selectionchange"&&(iS.has(n)||wu(n,!1,t),wu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Po]||(e[Po]=!0,wu("selectionchange",!1,e))}}function ly(t,e,n,r){switch(Wg(e)){case 1:var i=vE;break;case 4:i=wE;break;default:i=xh}n=i.bind(null,e,n,t),i=void 0,!hc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Eu(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=rr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Pg(function(){var u=s,c=Dh(n),h=[];e:{var d=oy.get(t);if(d!==void 0){var g=Lh,y=t;switch(t){case"keypress":if(Zo(n)===0)break e;case"keydown":case"keyup":g=ME;break;case"focusin":y="focus",g=fu;break;case"focusout":y="blur",g=fu;break;case"beforeblur":case"afterblur":g=fu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=_E;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=UE;break;case ny:case ry:case iy:g=IE;break;case sy:g=FE;break;case"scroll":g=EE;break;case"wheel":g=BE;break;case"copy":case"cut":case"paste":g=NE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Qf}var v=(e&4)!==0,D=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=gs(f,p),w!=null&&v.push(Ts(f,w,m)))),D)break;f=f.return}0<v.length&&(d=new g(d,y,null,n,c),h.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==uc&&(y=n.relatedTarget||n.fromElement)&&(rr(y)||y[an]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?rr(y):null,y!==null&&(D=Ar(y),y!==D||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=qf,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Qf,w="onPointerLeave",p="onPointerEnter",f="pointer"),D=g==null?d:Fr(g),m=y==null?d:Fr(y),d=new v(w,f+"leave",g,n,c),d.target=D,d.relatedTarget=m,w=null,rr(c)===u&&(v=new v(p,f+"enter",y,n,c),v.target=m,v.relatedTarget=D,w=v),D=w,g&&y)t:{for(v=g,p=y,f=0,m=v;m;m=Or(m))f++;for(m=0,w=p;w;w=Or(w))m++;for(;0<f-m;)v=Or(v),f--;for(;0<m-f;)p=Or(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=Or(v),p=Or(p)}v=null}else v=null;g!==null&&op(h,d,g,v,!1),y!==null&&D!==null&&op(h,D,y,v,!0)}}e:{if(d=u?Fr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var T=GE;else if(Jf(d))if(Yg)T=JE;else{T=XE;var N=QE}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=YE);if(T&&(T=T(t,u))){Xg(h,T,n,c);break e}N&&N(t,d,u),t==="focusout"&&(N=d._wrapperState)&&N.controlled&&d.type==="number"&&ic(d,"number",d.value)}switch(N=u?Fr(u):window,t){case"focusin":(Jf(N)||N.contentEditable==="true")&&(Ur=N,gc=u,rs=null);break;case"focusout":rs=gc=Ur=null;break;case"mousedown":yc=!0;break;case"contextmenu":case"mouseup":case"dragend":yc=!1,rp(h,n,c);break;case"selectionchange":if(tS)break;case"keydown":case"keyup":rp(h,n,c)}var A;if(Uh)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else $r?Gg(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(qg&&n.locale!=="ko"&&($r||x!=="onCompositionStart"?x==="onCompositionEnd"&&$r&&(A=Kg()):(Cn=c,Mh="value"in Cn?Cn.value:Cn.textContent,$r=!0)),N=_a(u,x),0<N.length&&(x=new Gf(x,t,null,n,c),h.push({event:x,listeners:N}),A?x.data=A:(A=Qg(n),A!==null&&(x.data=A)))),(A=jE?HE(t,n):WE(t,n))&&(u=_a(u,"onBeforeInput"),0<u.length&&(c=new Gf("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=A))}ay(h,e)})}function Ts(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _a(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=gs(t,n),s!=null&&r.unshift(Ts(t,s,i)),s=gs(t,e),s!=null&&r.push(Ts(t,s,i))),t=t.return}return r}function Or(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function op(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=gs(n,s),l!=null&&o.unshift(Ts(n,l,a))):i||(l=gs(n,s),l!=null&&o.push(Ts(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var sS=/\r\n?/g,oS=/\u0000|\uFFFD/g;function ap(t){return(typeof t=="string"?t:""+t).replace(sS,`
`).replace(oS,"")}function Oo(t,e,n){if(e=ap(e),ap(t)!==e&&n)throw Error(S(425))}function Ta(){}var vc=null,wc=null;function Ec(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sc=typeof setTimeout=="function"?setTimeout:void 0,aS=typeof clearTimeout=="function"?clearTimeout:void 0,lp=typeof Promise=="function"?Promise:void 0,lS=typeof queueMicrotask=="function"?queueMicrotask:typeof lp!="undefined"?function(t){return lp.resolve(null).then(t).catch(uS)}:Sc;function uS(t){setTimeout(function(){throw t})}function Su(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ws(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ws(e)}function Pn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function up(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ai=Math.random().toString(36).slice(2),bt="__reactFiber$"+Ai,ks="__reactProps$"+Ai,an="__reactContainer$"+Ai,_c="__reactEvents$"+Ai,cS="__reactListeners$"+Ai,hS="__reactHandles$"+Ai;function rr(t){var e=t[bt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[an]||n[bt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=up(t);t!==null;){if(n=t[bt])return n;t=up(t)}return e}t=n,n=t.parentNode}return null}function Gs(t){return t=t[bt]||t[an],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function ml(t){return t[ks]||null}var Tc=[],Vr=-1;function qn(t){return{current:t}}function re(t){0>Vr||(t.current=Tc[Vr],Tc[Vr]=null,Vr--)}function Z(t,e){Vr++,Tc[Vr]=t.current,t.current=e}var Vn={},Qe=qn(Vn),ut=qn(!1),pr=Vn;function li(t,e){var n=t.type.contextTypes;if(!n)return Vn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ct(t){return t=t.childContextTypes,t!=null}function ka(){re(ut),re(Qe)}function cp(t,e,n){if(Qe.current!==Vn)throw Error(S(168));Z(Qe,e),Z(ut,n)}function uy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,Q1(t)||"Unknown",i));return de({},n,r)}function Ia(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vn,pr=Qe.current,Z(Qe,t),Z(ut,ut.current),!0}function hp(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=uy(t,e,pr),r.__reactInternalMemoizedMergedChildContext=t,re(ut),re(Qe),Z(Qe,t)):re(ut),Z(ut,n)}var Gt=null,gl=!1,_u=!1;function cy(t){Gt===null?Gt=[t]:Gt.push(t)}function dS(t){gl=!0,cy(t)}function Gn(){if(!_u&&Gt!==null){_u=!0;var t=0,e=Y;try{var n=Gt;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Gt=null,gl=!1}catch(i){throw Gt!==null&&(Gt=Gt.slice(t+1)),Lg(Rh,Gn),i}finally{Y=e,_u=!1}}return null}var Br=[],zr=0,Ca=null,Na=0,Et=[],St=0,mr=null,Yt=1,Jt="";function er(t,e){Br[zr++]=Na,Br[zr++]=Ca,Ca=t,Na=e}function hy(t,e,n){Et[St++]=Yt,Et[St++]=Jt,Et[St++]=mr,mr=t;var r=Yt;t=Jt;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var s=32-Ot(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yt=1<<32-Ot(e)+i|n<<i|r,Jt=s+t}else Yt=1<<s|n<<i|r,Jt=t}function Fh(t){t.return!==null&&(er(t,1),hy(t,1,0))}function Vh(t){for(;t===Ca;)Ca=Br[--zr],Br[zr]=null,Na=Br[--zr],Br[zr]=null;for(;t===mr;)mr=Et[--St],Et[St]=null,Jt=Et[--St],Et[St]=null,Yt=Et[--St],Et[St]=null}var pt=null,ft=null,se=!1,Pt=null;function dy(t,e){var n=_t(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pt=t,ft=Pn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pt=t,ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=mr!==null?{id:Yt,overflow:Jt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=_t(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pt=t,ft=null,!0):!1;default:return!1}}function kc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ic(t){if(se){var e=ft;if(e){var n=e;if(!dp(t,e)){if(kc(t))throw Error(S(418));e=Pn(n.nextSibling);var r=pt;e&&dp(t,e)?dy(r,n):(t.flags=t.flags&-4097|2,se=!1,pt=t)}}else{if(kc(t))throw Error(S(418));t.flags=t.flags&-4097|2,se=!1,pt=t}}}function fp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pt=t}function xo(t){if(t!==pt)return!1;if(!se)return fp(t),se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ec(t.type,t.memoizedProps)),e&&(e=ft)){if(kc(t))throw fy(),Error(S(418));for(;e;)dy(t,e),e=Pn(e.nextSibling)}if(fp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ft=Pn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ft=null}}else ft=pt?Pn(t.stateNode.nextSibling):null;return!0}function fy(){for(var t=ft;t;)t=Pn(t.nextSibling)}function ui(){ft=pt=null,se=!1}function Bh(t){Pt===null?Pt=[t]:Pt.push(t)}var fS=mn.ReactCurrentBatchConfig;function Dt(t,e){if(t&&t.defaultProps){e=de({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Aa=qn(null),Da=null,jr=null,zh=null;function jh(){zh=jr=Da=null}function Hh(t){var e=Aa.current;re(Aa),t._currentValue=e}function Cc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ei(t,e){Da=t,zh=jr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(at=!0),t.firstContext=null)}function It(t){var e=t._currentValue;if(zh!==t)if(t={context:t,memoizedValue:e,next:null},jr===null){if(Da===null)throw Error(S(308));jr=t,Da.dependencies={lanes:0,firstContext:t}}else jr=jr.next=t;return e}var ir=null;function Wh(t){ir===null?ir=[t]:ir.push(t)}function py(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Wh(e)):(n.next=i.next,i.next=n),e.interleaved=n,ln(t,r)}function ln(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Sn=!1;function Kh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function my(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function On(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(q&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ln(t,n)}return i=r.interleaved,i===null?(e.next=e,Wh(r)):(e.next=i.next,i.next=e),r.interleaved=e,ln(t,n)}function ea(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ph(t,n)}}function pp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ra(t,e,n,r){var i=t.updateQueue;Sn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(g,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(g,h,d):y,d==null)break e;h=de({},h,d);break e;case 2:Sn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);yr|=o,t.lanes=o,t.memoizedState=h}}function mp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var gy=new pg.Component().refs;function Nc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:de({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yl={isMounted:function(t){return(t=t._reactInternals)?Ar(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=et(),i=Mn(t),s=nn(r,i);s.payload=e,n!=null&&(s.callback=n),e=On(t,s,i),e!==null&&(xt(e,t,i,r),ea(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=et(),i=Mn(t),s=nn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=On(t,s,i),e!==null&&(xt(e,t,i,r),ea(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=et(),r=Mn(t),i=nn(n,r);i.tag=2,e!=null&&(i.callback=e),e=On(t,i,r),e!==null&&(xt(e,t,r,n),ea(e,t,r))}};function gp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ss(n,r)||!Ss(i,s):!0}function yy(t,e,n){var r=!1,i=Vn,s=e.contextType;return typeof s=="object"&&s!==null?s=It(s):(i=ct(e)?pr:Qe.current,r=e.contextTypes,s=(r=r!=null)?li(t,i):Vn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function yp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&yl.enqueueReplaceState(e,e.state,null)}function Ac(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=gy,Kh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=It(s):(s=ct(e)?pr:Qe.current,i.context=li(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Nc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&yl.enqueueReplaceState(i,i.state,null),Ra(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function zi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===gy&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function Mo(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vp(t){var e=t._init;return e(t._payload)}function vy(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Ln(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,w){return f===null||f.tag!==6?(f=Du(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,w){var T=m.type;return T===Lr?c(p,f,m.props.children,w,m.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===En&&vp(T)===f.type)?(w=i(f,m.props),w.ref=zi(p,f,m),w.return=p,w):(w=oa(m.type,m.key,m.props,null,p.mode,w),w.ref=zi(p,f,m),w.return=p,w)}function u(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Ru(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,w,T){return f===null||f.tag!==7?(f=hr(m,p.mode,w,T),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Du(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case To:return m=oa(f.type,f.key,f.props,null,p.mode,m),m.ref=zi(p,null,f),m.return=p,m;case Mr:return f=Ru(f,p.mode,m),f.return=p,f;case En:var w=f._init;return h(p,w(f._payload),m)}if(qi(f)||Ui(f))return f=hr(f,p.mode,m,null),f.return=p,f;Mo(p,f)}return null}function d(p,f,m,w){var T=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case To:return m.key===T?l(p,f,m,w):null;case Mr:return m.key===T?u(p,f,m,w):null;case En:return T=m._init,d(p,f,T(m._payload),w)}if(qi(m)||Ui(m))return T!==null?null:c(p,f,m,w,null);Mo(p,m)}return null}function g(p,f,m,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(f,p,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case To:return p=p.get(w.key===null?m:w.key)||null,l(f,p,w,T);case Mr:return p=p.get(w.key===null?m:w.key)||null,u(f,p,w,T);case En:var N=w._init;return g(p,f,m,N(w._payload),T)}if(qi(w)||Ui(w))return p=p.get(m)||null,c(f,p,w,T,null);Mo(f,w)}return null}function y(p,f,m,w){for(var T=null,N=null,A=f,x=f=0,te=null;A!==null&&x<m.length;x++){A.index>x?(te=A,A=null):te=A.sibling;var j=d(p,A,m[x],w);if(j===null){A===null&&(A=te);break}t&&A&&j.alternate===null&&e(p,A),f=s(j,f,x),N===null?T=j:N.sibling=j,N=j,A=te}if(x===m.length)return n(p,A),se&&er(p,x),T;if(A===null){for(;x<m.length;x++)A=h(p,m[x],w),A!==null&&(f=s(A,f,x),N===null?T=A:N.sibling=A,N=A);return se&&er(p,x),T}for(A=r(p,A);x<m.length;x++)te=g(A,p,x,m[x],w),te!==null&&(t&&te.alternate!==null&&A.delete(te.key===null?x:te.key),f=s(te,f,x),N===null?T=te:N.sibling=te,N=te);return t&&A.forEach(function(Nt){return e(p,Nt)}),se&&er(p,x),T}function v(p,f,m,w){var T=Ui(m);if(typeof T!="function")throw Error(S(150));if(m=T.call(m),m==null)throw Error(S(151));for(var N=T=null,A=f,x=f=0,te=null,j=m.next();A!==null&&!j.done;x++,j=m.next()){A.index>x?(te=A,A=null):te=A.sibling;var Nt=d(p,A,j.value,w);if(Nt===null){A===null&&(A=te);break}t&&A&&Nt.alternate===null&&e(p,A),f=s(Nt,f,x),N===null?T=Nt:N.sibling=Nt,N=Nt,A=te}if(j.done)return n(p,A),se&&er(p,x),T;if(A===null){for(;!j.done;x++,j=m.next())j=h(p,j.value,w),j!==null&&(f=s(j,f,x),N===null?T=j:N.sibling=j,N=j);return se&&er(p,x),T}for(A=r(p,A);!j.done;x++,j=m.next())j=g(A,p,x,j.value,w),j!==null&&(t&&j.alternate!==null&&A.delete(j.key===null?x:j.key),f=s(j,f,x),N===null?T=j:N.sibling=j,N=j);return t&&A.forEach(function(Li){return e(p,Li)}),se&&er(p,x),T}function D(p,f,m,w){if(typeof m=="object"&&m!==null&&m.type===Lr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case To:e:{for(var T=m.key,N=f;N!==null;){if(N.key===T){if(T=m.type,T===Lr){if(N.tag===7){n(p,N.sibling),f=i(N,m.props.children),f.return=p,p=f;break e}}else if(N.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===En&&vp(T)===N.type){n(p,N.sibling),f=i(N,m.props),f.ref=zi(p,N,m),f.return=p,p=f;break e}n(p,N);break}else e(p,N);N=N.sibling}m.type===Lr?(f=hr(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=oa(m.type,m.key,m.props,null,p.mode,w),w.ref=zi(p,f,m),w.return=p,p=w)}return o(p);case Mr:e:{for(N=m.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Ru(m,p.mode,w),f.return=p,p=f}return o(p);case En:return N=m._init,D(p,f,N(m._payload),w)}if(qi(m))return y(p,f,m,w);if(Ui(m))return v(p,f,m,w);Mo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Du(m,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return D}var ci=vy(!0),wy=vy(!1),Qs={},Vt=qn(Qs),Is=qn(Qs),Cs=qn(Qs);function sr(t){if(t===Qs)throw Error(S(174));return t}function qh(t,e){switch(Z(Cs,e),Z(Is,t),Z(Vt,Qs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:oc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=oc(e,t)}re(Vt),Z(Vt,e)}function hi(){re(Vt),re(Is),re(Cs)}function Ey(t){sr(Cs.current);var e=sr(Vt.current),n=oc(e,t.type);e!==n&&(Z(Is,t),Z(Vt,n))}function Gh(t){Is.current===t&&(re(Vt),re(Is))}var ce=qn(0);function Pa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Tu=[];function Qh(){for(var t=0;t<Tu.length;t++)Tu[t]._workInProgressVersionPrimary=null;Tu.length=0}var ta=mn.ReactCurrentDispatcher,ku=mn.ReactCurrentBatchConfig,gr=0,he=null,Se=null,Ae=null,Oa=!1,is=!1,Ns=0,pS=0;function He(){throw Error(S(321))}function Xh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Mt(t[n],e[n]))return!1;return!0}function Yh(t,e,n,r,i,s){if(gr=s,he=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ta.current=t===null||t.memoizedState===null?vS:wS,t=n(r,i),is){s=0;do{if(is=!1,Ns=0,25<=s)throw Error(S(301));s+=1,Ae=Se=null,e.updateQueue=null,ta.current=ES,t=n(r,i)}while(is)}if(ta.current=xa,e=Se!==null&&Se.next!==null,gr=0,Ae=Se=he=null,Oa=!1,e)throw Error(S(300));return t}function Jh(){var t=Ns!==0;return Ns=0,t}function $t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?he.memoizedState=Ae=t:Ae=Ae.next=t,Ae}function Ct(){if(Se===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=Se.next;var e=Ae===null?he.memoizedState:Ae.next;if(e!==null)Ae=e,Se=t;else{if(t===null)throw Error(S(310));Se=t,t={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Ae===null?he.memoizedState=Ae=t:Ae=Ae.next=t}return Ae}function As(t,e){return typeof e=="function"?e(t):e}function Iu(t){var e=Ct(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=Se,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((gr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,he.lanes|=c,yr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Mt(r,e.memoizedState)||(at=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,he.lanes|=s,yr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Cu(t){var e=Ct(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Mt(s,e.memoizedState)||(at=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Sy(){}function _y(t,e){var n=he,r=Ct(),i=e(),s=!Mt(r.memoizedState,i);if(s&&(r.memoizedState=i,at=!0),r=r.queue,Zh(Iy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,Ds(9,ky.bind(null,n,r,i,e),void 0,null),De===null)throw Error(S(349));(gr&30)!==0||Ty(n,e,i)}return i}function Ty(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=he.updateQueue,e===null?(e={lastEffect:null,stores:null},he.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ky(t,e,n,r){e.value=n,e.getSnapshot=r,Cy(e)&&Ny(t)}function Iy(t,e,n){return n(function(){Cy(e)&&Ny(t)})}function Cy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Mt(t,n)}catch{return!0}}function Ny(t){var e=ln(t,1);e!==null&&xt(e,t,1,-1)}function wp(t){var e=$t();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:t},e.queue=t,t=t.dispatch=yS.bind(null,he,t),[e.memoizedState,t]}function Ds(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=he.updateQueue,e===null?(e={lastEffect:null,stores:null},he.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ay(){return Ct().memoizedState}function na(t,e,n,r){var i=$t();he.flags|=t,i.memoizedState=Ds(1|e,n,void 0,r===void 0?null:r)}function vl(t,e,n,r){var i=Ct();r=r===void 0?null:r;var s=void 0;if(Se!==null){var o=Se.memoizedState;if(s=o.destroy,r!==null&&Xh(r,o.deps)){i.memoizedState=Ds(e,n,s,r);return}}he.flags|=t,i.memoizedState=Ds(1|e,n,s,r)}function Ep(t,e){return na(8390656,8,t,e)}function Zh(t,e){return vl(2048,8,t,e)}function Dy(t,e){return vl(4,2,t,e)}function Ry(t,e){return vl(4,4,t,e)}function Py(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Oy(t,e,n){return n=n!=null?n.concat([t]):null,vl(4,4,Py.bind(null,e,t),n)}function ed(){}function xy(t,e){var n=Ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function My(t,e){var n=Ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ly(t,e,n){return(gr&21)===0?(t.baseState&&(t.baseState=!1,at=!0),t.memoizedState=n):(Mt(n,e)||(n=bg(),he.lanes|=n,yr|=n,t.baseState=!0),e)}function mS(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=ku.transition;ku.transition={};try{t(!1),e()}finally{Y=n,ku.transition=r}}function $y(){return Ct().memoizedState}function gS(t,e,n){var r=Mn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Uy(t))by(e,n);else if(n=py(t,e,n,r),n!==null){var i=et();xt(n,t,r,i),Fy(n,e,r)}}function yS(t,e,n){var r=Mn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uy(t))by(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Mt(a,o)){var l=e.interleaved;l===null?(i.next=i,Wh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=py(t,e,i,r),n!==null&&(i=et(),xt(n,t,r,i),Fy(n,e,r))}}function Uy(t){var e=t.alternate;return t===he||e!==null&&e===he}function by(t,e){is=Oa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Fy(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ph(t,n)}}var xa={readContext:It,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},vS={readContext:It,useCallback:function(t,e){return $t().memoizedState=[t,e===void 0?null:e],t},useContext:It,useEffect:Ep,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,na(4194308,4,Py.bind(null,e,t),n)},useLayoutEffect:function(t,e){return na(4194308,4,t,e)},useInsertionEffect:function(t,e){return na(4,2,t,e)},useMemo:function(t,e){var n=$t();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=$t();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=gS.bind(null,he,t),[r.memoizedState,t]},useRef:function(t){var e=$t();return t={current:t},e.memoizedState=t},useState:wp,useDebugValue:ed,useDeferredValue:function(t){return $t().memoizedState=t},useTransition:function(){var t=wp(!1),e=t[0];return t=mS.bind(null,t[1]),$t().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=he,i=$t();if(se){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),De===null)throw Error(S(349));(gr&30)!==0||Ty(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ep(Iy.bind(null,r,s,t),[t]),r.flags|=2048,Ds(9,ky.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=$t(),e=De.identifierPrefix;if(se){var n=Jt,r=Yt;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ns++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=pS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wS={readContext:It,useCallback:xy,useContext:It,useEffect:Zh,useImperativeHandle:Oy,useInsertionEffect:Dy,useLayoutEffect:Ry,useMemo:My,useReducer:Iu,useRef:Ay,useState:function(){return Iu(As)},useDebugValue:ed,useDeferredValue:function(t){var e=Ct();return Ly(e,Se.memoizedState,t)},useTransition:function(){var t=Iu(As)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:Sy,useSyncExternalStore:_y,useId:$y,unstable_isNewReconciler:!1},ES={readContext:It,useCallback:xy,useContext:It,useEffect:Zh,useImperativeHandle:Oy,useInsertionEffect:Dy,useLayoutEffect:Ry,useMemo:My,useReducer:Cu,useRef:Ay,useState:function(){return Cu(As)},useDebugValue:ed,useDeferredValue:function(t){var e=Ct();return Se===null?e.memoizedState=t:Ly(e,Se.memoizedState,t)},useTransition:function(){var t=Cu(As)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:Sy,useSyncExternalStore:_y,useId:$y,unstable_isNewReconciler:!1};function di(t,e){try{var n="",r=e;do n+=G1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Nu(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Dc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var SS=typeof WeakMap=="function"?WeakMap:Map;function Vy(t,e,n){n=nn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){La||(La=!0,Fc=r),Dc(t,e)},n}function By(t,e,n){n=nn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Dc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Dc(t,e),typeof r!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Sp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new SS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=LS.bind(null,t,e,n),e.then(t,t))}function _p(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tp(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=nn(-1,1),e.tag=2,On(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var _S=mn.ReactCurrentOwner,at=!1;function Xe(t,e,n,r){e.child=t===null?wy(e,null,n,r):ci(e,t.child,n,r)}function kp(t,e,n,r,i){n=n.render;var s=e.ref;return ei(e,i),r=Yh(t,e,n,r,s,i),n=Jh(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,un(t,e,i)):(se&&n&&Fh(e),e.flags|=1,Xe(t,e,r,i),e.child)}function Ip(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ld(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,zy(t,e,s,r,i)):(t=oa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ss,n(o,r)&&t.ref===e.ref)return un(t,e,i)}return e.flags|=1,t=Ln(s,r),t.ref=e.ref,t.return=e,e.child=t}function zy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ss(s,r)&&t.ref===e.ref)if(at=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(at=!0);else return e.lanes=t.lanes,un(t,e,i)}return Rc(t,e,n,r,i)}function jy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Wr,dt),dt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Z(Wr,dt),dt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(Wr,dt),dt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Z(Wr,dt),dt|=r;return Xe(t,e,i,n),e.child}function Hy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Rc(t,e,n,r,i){var s=ct(n)?pr:Qe.current;return s=li(e,s),ei(e,i),n=Yh(t,e,n,r,s,i),r=Jh(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,un(t,e,i)):(se&&r&&Fh(e),e.flags|=1,Xe(t,e,n,i),e.child)}function Cp(t,e,n,r,i){if(ct(n)){var s=!0;Ia(e)}else s=!1;if(ei(e,i),e.stateNode===null)ra(t,e),yy(e,n,r),Ac(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=It(u):(u=ct(n)?pr:Qe.current,u=li(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&yp(e,o,r,u),Sn=!1;var d=e.memoizedState;o.state=d,Ra(e,r,o,i),l=e.memoizedState,a!==r||d!==l||ut.current||Sn?(typeof c=="function"&&(Nc(e,n,c,r),l=e.memoizedState),(a=Sn||gp(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,my(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Dt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=It(l):(l=ct(n)?pr:Qe.current,l=li(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&yp(e,o,r,l),Sn=!1,d=e.memoizedState,o.state=d,Ra(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||ut.current||Sn?(typeof g=="function"&&(Nc(e,n,g,r),y=e.memoizedState),(u=Sn||gp(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Pc(t,e,n,r,s,i)}function Pc(t,e,n,r,i,s){Hy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&hp(e,n,!1),un(t,e,s);r=e.stateNode,_S.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ci(e,t.child,null,s),e.child=ci(e,null,a,s)):Xe(t,e,a,s),e.memoizedState=r.state,i&&hp(e,n,!0),e.child}function Wy(t){var e=t.stateNode;e.pendingContext?cp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cp(t,e.context,!1),qh(t,e.containerInfo)}function Np(t,e,n,r,i){return ui(),Bh(i),e.flags|=256,Xe(t,e,n,r),e.child}var Oc={dehydrated:null,treeContext:null,retryLane:0};function xc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ky(t,e,n){var r=e.pendingProps,i=ce.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Z(ce,i&1),t===null)return Ic(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Sl(o,r,0,null),t=hr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xc(n),e.memoizedState=Oc,t):td(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return TS(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ln(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ln(a,s):(s=hr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?xc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Oc,r}return s=t.child,t=s.sibling,r=Ln(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function td(t,e){return e=Sl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Lo(t,e,n,r){return r!==null&&Bh(r),ci(e,t.child,null,n),t=td(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function TS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Nu(Error(S(422))),Lo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Sl({mode:"visible",children:r.children},i,0,null),s=hr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&ci(e,t.child,null,o),e.child.memoizedState=xc(o),e.memoizedState=Oc,s);if((e.mode&1)===0)return Lo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=Nu(s,r,void 0),Lo(t,e,o,r)}if(a=(o&t.childLanes)!==0,at||a){if(r=De,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ln(t,i),xt(r,t,i,-1))}return ad(),r=Nu(Error(S(421))),Lo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=$S.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ft=Pn(i.nextSibling),pt=e,se=!0,Pt=null,t!==null&&(Et[St++]=Yt,Et[St++]=Jt,Et[St++]=mr,Yt=t.id,Jt=t.overflow,mr=e),e=td(e,r.children),e.flags|=4096,e)}function Ap(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Cc(t.return,e,n)}function Au(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function qy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Xe(t,e,r.children,n),r=ce.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ap(t,n,e);else if(t.tag===19)Ap(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Z(ce,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Pa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Au(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Pa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Au(e,!0,n,null,s);break;case"together":Au(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ra(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function un(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),yr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=Ln(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ln(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function kS(t,e,n){switch(e.tag){case 3:Wy(e),ui();break;case 5:Ey(e);break;case 1:ct(e.type)&&Ia(e);break;case 4:qh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Z(Aa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Z(ce,ce.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Ky(t,e,n):(Z(ce,ce.current&1),t=un(t,e,n),t!==null?t.sibling:null);Z(ce,ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return qy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(ce,ce.current),r)break;return null;case 22:case 23:return e.lanes=0,jy(t,e,n)}return un(t,e,n)}var Gy,Mc,Qy,Xy;Gy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mc=function(){};Qy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,sr(Vt.current);var s=null;switch(n){case"input":i=nc(t,i),r=nc(t,r),s=[];break;case"select":i=de({},i,{value:void 0}),r=de({},r,{value:void 0}),s=[];break;case"textarea":i=sc(t,i),r=sc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ta)}ac(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ps.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ps.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ne("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Xy=function(t,e,n,r){n!==r&&(e.flags|=4)};function ji(t,e){if(!se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function We(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function IS(t,e,n){var r=e.pendingProps;switch(Vh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(e),null;case 1:return ct(e.type)&&ka(),We(e),null;case 3:return r=e.stateNode,hi(),re(ut),re(Qe),Qh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(xo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Pt!==null&&(zc(Pt),Pt=null))),Mc(t,e),We(e),null;case 5:Gh(e);var i=sr(Cs.current);if(n=e.type,t!==null&&e.stateNode!=null)Qy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return We(e),null}if(t=sr(Vt.current),xo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[bt]=e,r[ks]=s,t=(e.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<Qi.length;i++)ne(Qi[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Uf(r,s),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ne("invalid",r);break;case"textarea":Ff(r,s),ne("invalid",r)}ac(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Oo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Oo(r.textContent,a,t),i=["children",""+a]):ps.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ne("scroll",r)}switch(n){case"input":ko(r),bf(r,s,!0);break;case"textarea":ko(r),Vf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ta)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Tg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[bt]=e,t[ks]=r,Gy(t,e,!1,!1),e.stateNode=t;e:{switch(o=lc(n,r),n){case"dialog":ne("cancel",t),ne("close",t),i=r;break;case"iframe":case"object":case"embed":ne("load",t),i=r;break;case"video":case"audio":for(i=0;i<Qi.length;i++)ne(Qi[i],t);i=r;break;case"source":ne("error",t),i=r;break;case"img":case"image":case"link":ne("error",t),ne("load",t),i=r;break;case"details":ne("toggle",t),i=r;break;case"input":Uf(t,r),i=nc(t,r),ne("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=de({},r,{value:void 0}),ne("invalid",t);break;case"textarea":Ff(t,r),i=sc(t,r),ne("invalid",t);break;default:i=r}ac(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Cg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&kg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ms(t,l):typeof l=="number"&&ms(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ps.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ne("scroll",t):l!=null&&Ih(t,s,l,o))}switch(n){case"input":ko(t),bf(t,r,!1);break;case"textarea":ko(t),Vf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Fn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Xr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Xr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ta)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return We(e),null;case 6:if(t&&e.stateNode!=null)Xy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=sr(Cs.current),sr(Vt.current),xo(e)){if(r=e.stateNode,n=e.memoizedProps,r[bt]=e,(s=r.nodeValue!==n)&&(t=pt,t!==null))switch(t.tag){case 3:Oo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Oo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=e,e.stateNode=r}return We(e),null;case 13:if(re(ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(se&&ft!==null&&(e.mode&1)!==0&&(e.flags&128)===0)fy(),ui(),e.flags|=98560,s=!1;else if(s=xo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[bt]=e}else ui(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;We(e),s=!1}else Pt!==null&&(zc(Pt),Pt=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(ce.current&1)!==0?_e===0&&(_e=3):ad())),e.updateQueue!==null&&(e.flags|=4),We(e),null);case 4:return hi(),Mc(t,e),t===null&&_s(e.stateNode.containerInfo),We(e),null;case 10:return Hh(e.type._context),We(e),null;case 17:return ct(e.type)&&ka(),We(e),null;case 19:if(re(ce),s=e.memoizedState,s===null)return We(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ji(s,!1);else{if(_e!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Pa(t),o!==null){for(e.flags|=128,ji(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Z(ce,ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&me()>fi&&(e.flags|=128,r=!0,ji(s,!1),e.lanes=4194304)}else{if(!r)if(t=Pa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ji(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!se)return We(e),null}else 2*me()-s.renderingStartTime>fi&&n!==1073741824&&(e.flags|=128,r=!0,ji(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=me(),e.sibling=null,n=ce.current,Z(ce,r?n&1|2:n&1),e):(We(e),null);case 22:case 23:return od(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(dt&1073741824)!==0&&(We(e),e.subtreeFlags&6&&(e.flags|=8192)):We(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function CS(t,e){switch(Vh(e),e.tag){case 1:return ct(e.type)&&ka(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return hi(),re(ut),re(Qe),Qh(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Gh(e),null;case 13:if(re(ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));ui()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return re(ce),null;case 4:return hi(),null;case 10:return Hh(e.type._context),null;case 22:case 23:return od(),null;case 24:return null;default:return null}}var $o=!1,Ke=!1,NS=typeof WeakSet=="function"?WeakSet:Set,k=null;function Hr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(t,e,r)}else n.current=null}function Lc(t,e,n){try{n()}catch(r){fe(t,e,r)}}var Dp=!1;function AS(t,e){if(vc=Ea,t=ey(),bh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wc={focusedElem:t,selectionRange:n},Ea=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var y=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,D=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:Dt(e.type,v),D);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){fe(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return y=Dp,Dp=!1,y}function ss(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Lc(e,n,s)}i=i.next}while(i!==r)}}function wl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function $c(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Yy(t){var e=t.alternate;e!==null&&(t.alternate=null,Yy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[bt],delete e[ks],delete e[_c],delete e[cS],delete e[hS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jy(t){return t.tag===5||t.tag===3||t.tag===4}function Rp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ta));else if(r!==4&&(t=t.child,t!==null))for(Uc(t,e,n),t=t.sibling;t!==null;)Uc(t,e,n),t=t.sibling}function bc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(bc(t,e,n),t=t.sibling;t!==null;)bc(t,e,n),t=t.sibling}var xe=null,Rt=!1;function yn(t,e,n){for(n=n.child;n!==null;)Zy(t,e,n),n=n.sibling}function Zy(t,e,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 5:Ke||Hr(n,e);case 6:var r=xe,i=Rt;xe=null,yn(t,e,n),xe=r,Rt=i,xe!==null&&(Rt?(t=xe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(Rt?(t=xe,n=n.stateNode,t.nodeType===8?Su(t.parentNode,n):t.nodeType===1&&Su(t,n),ws(t)):Su(xe,n.stateNode));break;case 4:r=xe,i=Rt,xe=n.stateNode.containerInfo,Rt=!0,yn(t,e,n),xe=r,Rt=i;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Lc(n,e,o),i=i.next}while(i!==r)}yn(t,e,n);break;case 1:if(!Ke&&(Hr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,e,a)}yn(t,e,n);break;case 21:yn(t,e,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,yn(t,e,n),Ke=r):yn(t,e,n);break;default:yn(t,e,n)}}function Pp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new NS),e.forEach(function(r){var i=US.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function At(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:xe=a.stateNode,Rt=!1;break e;case 3:xe=a.stateNode.containerInfo,Rt=!0;break e;case 4:xe=a.stateNode.containerInfo,Rt=!0;break e}a=a.return}if(xe===null)throw Error(S(160));Zy(s,o,i),xe=null,Rt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){fe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ev(e,t),e=e.sibling}function ev(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(At(e,t),Lt(t),r&4){try{ss(3,t,t.return),wl(3,t)}catch(v){fe(t,t.return,v)}try{ss(5,t,t.return)}catch(v){fe(t,t.return,v)}}break;case 1:At(e,t),Lt(t),r&512&&n!==null&&Hr(n,n.return);break;case 5:if(At(e,t),Lt(t),r&512&&n!==null&&Hr(n,n.return),t.flags&32){var i=t.stateNode;try{ms(i,"")}catch(v){fe(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Sg(i,s),lc(a,o);var u=lc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Cg(i,h):c==="dangerouslySetInnerHTML"?kg(i,h):c==="children"?ms(i,h):Ih(i,c,h,u)}switch(a){case"input":rc(i,s);break;case"textarea":_g(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Xr(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Xr(i,!!s.multiple,s.defaultValue,!0):Xr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ks]=s}catch(v){fe(t,t.return,v)}}break;case 6:if(At(e,t),Lt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){fe(t,t.return,v)}}break;case 3:if(At(e,t),Lt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ws(e.containerInfo)}catch(v){fe(t,t.return,v)}break;case 4:At(e,t),Lt(t);break;case 13:At(e,t),Lt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(id=me())),r&4&&Pp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ke=(u=Ke)||c,At(e,t),Ke=u):At(e,t),Lt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(k=t,c=t.child;c!==null;){for(h=k=c;k!==null;){switch(d=k,g=d.child,d.tag){case 0:case 11:case 14:case 15:ss(4,d,d.return);break;case 1:Hr(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){fe(r,n,v)}}break;case 5:Hr(d,d.return);break;case 22:if(d.memoizedState!==null){xp(h);continue}}g!==null?(g.return=d,k=g):xp(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ig("display",o))}catch(v){fe(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){fe(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:At(e,t),Lt(t),r&4&&Pp(t);break;case 21:break;default:At(e,t),Lt(t)}}function Lt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Jy(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ms(i,""),r.flags&=-33);var s=Rp(t);bc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Rp(t);Uc(t,a,o);break;default:throw Error(S(161))}}catch(l){fe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function DS(t,e,n){k=t,tv(t)}function tv(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||$o;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ke;a=$o;var u=Ke;if($o=o,(Ke=l)&&!u)for(k=i;k!==null;)o=k,l=o.child,o.tag===22&&o.memoizedState!==null?Mp(i):l!==null?(l.return=o,k=l):Mp(i);for(;s!==null;)k=s,tv(s),s=s.sibling;k=i,$o=a,Ke=u}Op(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,k=s):Op(t)}}function Op(t){for(;k!==null;){var e=k;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Ke||wl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Dt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&mp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ws(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Ke||e.flags&512&&$c(e)}catch(d){fe(e,e.return,d)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function xp(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function Mp(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wl(4,e)}catch(l){fe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){fe(e,i,l)}}var s=e.return;try{$c(e)}catch(l){fe(e,s,l)}break;case 5:var o=e.return;try{$c(e)}catch(l){fe(e,o,l)}}}catch(l){fe(e,e.return,l)}if(e===t){k=null;break}var a=e.sibling;if(a!==null){a.return=e.return,k=a;break}k=e.return}}var RS=Math.ceil,Ma=mn.ReactCurrentDispatcher,nd=mn.ReactCurrentOwner,Tt=mn.ReactCurrentBatchConfig,q=0,De=null,we=null,Ue=0,dt=0,Wr=qn(0),_e=0,Rs=null,yr=0,El=0,rd=0,os=null,st=null,id=0,fi=1/0,qt=null,La=!1,Fc=null,xn=null,Uo=!1,Nn=null,$a=0,as=0,Vc=null,ia=-1,sa=0;function et(){return(q&6)!==0?me():ia!==-1?ia:ia=me()}function Mn(t){return(t.mode&1)===0?1:(q&2)!==0&&Ue!==0?Ue&-Ue:fS.transition!==null?(sa===0&&(sa=bg()),sa):(t=Y,t!==0||(t=window.event,t=t===void 0?16:Wg(t.type)),t)}function xt(t,e,n,r){if(50<as)throw as=0,Vc=null,Error(S(185));Ks(t,n,r),((q&2)===0||t!==De)&&(t===De&&((q&2)===0&&(El|=n),_e===4&&Tn(t,Ue)),ht(t,r),n===1&&q===0&&(e.mode&1)===0&&(fi=me()+500,gl&&Gn()))}function ht(t,e){var n=t.callbackNode;fE(t,e);var r=wa(t,t===De?Ue:0);if(r===0)n!==null&&jf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&jf(n),e===1)t.tag===0?dS(Lp.bind(null,t)):cy(Lp.bind(null,t)),lS(function(){(q&6)===0&&Gn()}),n=null;else{switch(Fg(r)){case 1:n=Rh;break;case 4:n=$g;break;case 16:n=va;break;case 536870912:n=Ug;break;default:n=va}n=uv(n,nv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function nv(t,e){if(ia=-1,sa=0,(q&6)!==0)throw Error(S(327));var n=t.callbackNode;if(ti()&&t.callbackNode!==n)return null;var r=wa(t,t===De?Ue:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Ua(t,r);else{e=r;var i=q;q|=2;var s=iv();(De!==t||Ue!==e)&&(qt=null,fi=me()+500,cr(t,e));do try{xS();break}catch(a){rv(t,a)}while(1);jh(),Ma.current=s,q=i,we!==null?e=0:(De=null,Ue=0,e=_e)}if(e!==0){if(e===2&&(i=fc(t),i!==0&&(r=i,e=Bc(t,i))),e===1)throw n=Rs,cr(t,0),Tn(t,r),ht(t,me()),n;if(e===6)Tn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!PS(i)&&(e=Ua(t,r),e===2&&(s=fc(t),s!==0&&(r=s,e=Bc(t,s))),e===1))throw n=Rs,cr(t,0),Tn(t,r),ht(t,me()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:tr(t,st,qt);break;case 3:if(Tn(t,r),(r&130023424)===r&&(e=id+500-me(),10<e)){if(wa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Sc(tr.bind(null,t,st,qt),e);break}tr(t,st,qt);break;case 4:if(Tn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ot(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*RS(r/1960))-r,10<r){t.timeoutHandle=Sc(tr.bind(null,t,st,qt),r);break}tr(t,st,qt);break;case 5:tr(t,st,qt);break;default:throw Error(S(329))}}}return ht(t,me()),t.callbackNode===n?nv.bind(null,t):null}function Bc(t,e){var n=os;return t.current.memoizedState.isDehydrated&&(cr(t,e).flags|=256),t=Ua(t,e),t!==2&&(e=st,st=n,e!==null&&zc(e)),t}function zc(t){st===null?st=t:st.push.apply(st,t)}function PS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Mt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Tn(t,e){for(e&=~rd,e&=~El,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ot(e),r=1<<n;t[n]=-1,e&=~r}}function Lp(t){if((q&6)!==0)throw Error(S(327));ti();var e=wa(t,0);if((e&1)===0)return ht(t,me()),null;var n=Ua(t,e);if(t.tag!==0&&n===2){var r=fc(t);r!==0&&(e=r,n=Bc(t,r))}if(n===1)throw n=Rs,cr(t,0),Tn(t,e),ht(t,me()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,tr(t,st,qt),ht(t,me()),null}function sd(t,e){var n=q;q|=1;try{return t(e)}finally{q=n,q===0&&(fi=me()+500,gl&&Gn())}}function vr(t){Nn!==null&&Nn.tag===0&&(q&6)===0&&ti();var e=q;q|=1;var n=Tt.transition,r=Y;try{if(Tt.transition=null,Y=1,t)return t()}finally{Y=r,Tt.transition=n,q=e,(q&6)===0&&Gn()}}function od(){dt=Wr.current,re(Wr)}function cr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,aS(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(Vh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ka();break;case 3:hi(),re(ut),re(Qe),Qh();break;case 5:Gh(r);break;case 4:hi();break;case 13:re(ce);break;case 19:re(ce);break;case 10:Hh(r.type._context);break;case 22:case 23:od()}n=n.return}if(De=t,we=t=Ln(t.current,null),Ue=dt=e,_e=0,Rs=null,rd=El=yr=0,st=os=null,ir!==null){for(e=0;e<ir.length;e++)if(n=ir[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ir=null}return t}function rv(t,e){do{var n=we;try{if(jh(),ta.current=xa,Oa){for(var r=he.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Oa=!1}if(gr=0,Ae=Se=he=null,is=!1,Ns=0,nd.current=null,n===null||n.return===null){_e=1,Rs=e,we=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ue,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=_p(o);if(g!==null){g.flags&=-257,Tp(g,o,a,s,e),g.mode&1&&Sp(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if((e&1)===0){Sp(s,u,e),ad();break e}l=Error(S(426))}}else if(se&&a.mode&1){var D=_p(o);if(D!==null){(D.flags&65536)===0&&(D.flags|=256),Tp(D,o,a,s,e),Bh(di(l,a));break e}}s=l=di(l,a),_e!==4&&(_e=2),os===null?os=[s]:os.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Vy(s,l,e);pp(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(xn===null||!xn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=By(s,a,e);pp(s,w);break e}}s=s.return}while(s!==null)}ov(n)}catch(T){e=T,we===n&&n!==null&&(we=n=n.return);continue}break}while(1)}function iv(){var t=Ma.current;return Ma.current=xa,t===null?xa:t}function ad(){(_e===0||_e===3||_e===2)&&(_e=4),De===null||(yr&268435455)===0&&(El&268435455)===0||Tn(De,Ue)}function Ua(t,e){var n=q;q|=2;var r=iv();(De!==t||Ue!==e)&&(qt=null,cr(t,e));do try{OS();break}catch(i){rv(t,i)}while(1);if(jh(),q=n,Ma.current=r,we!==null)throw Error(S(261));return De=null,Ue=0,_e}function OS(){for(;we!==null;)sv(we)}function xS(){for(;we!==null&&!iE();)sv(we)}function sv(t){var e=lv(t.alternate,t,dt);t.memoizedProps=t.pendingProps,e===null?ov(t):we=e,nd.current=null}function ov(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=IS(n,e,dt),n!==null){we=n;return}}else{if(n=CS(n,e),n!==null){n.flags&=32767,we=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_e=6,we=null;return}}if(e=e.sibling,e!==null){we=e;return}we=e=t}while(e!==null);_e===0&&(_e=5)}function tr(t,e,n){var r=Y,i=Tt.transition;try{Tt.transition=null,Y=1,MS(t,e,n,r)}finally{Tt.transition=i,Y=r}return null}function MS(t,e,n,r){do ti();while(Nn!==null);if((q&6)!==0)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(pE(t,s),t===De&&(we=De=null,Ue=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Uo||(Uo=!0,uv(va,function(){return ti(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Tt.transition,Tt.transition=null;var o=Y;Y=1;var a=q;q|=4,nd.current=null,AS(t,n),ev(n,t),eS(wc),Ea=!!vc,wc=vc=null,t.current=n,DS(n),sE(),q=a,Y=o,Tt.transition=s}else t.current=n;if(Uo&&(Uo=!1,Nn=t,$a=i),s=t.pendingLanes,s===0&&(xn=null),lE(n.stateNode),ht(t,me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(La)throw La=!1,t=Fc,Fc=null,t;return($a&1)!==0&&t.tag!==0&&ti(),s=t.pendingLanes,(s&1)!==0?t===Vc?as++:(as=0,Vc=t):as=0,Gn(),null}function ti(){if(Nn!==null){var t=Fg($a),e=Tt.transition,n=Y;try{if(Tt.transition=null,Y=16>t?16:t,Nn===null)var r=!1;else{if(t=Nn,Nn=null,$a=0,(q&6)!==0)throw Error(S(331));var i=q;for(q|=4,k=t.current;k!==null;){var s=k,o=s.child;if((k.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(k=u;k!==null;){var c=k;switch(c.tag){case 0:case 11:case 15:ss(8,c,s)}var h=c.child;if(h!==null)h.return=c,k=h;else for(;k!==null;){c=k;var d=c.sibling,g=c.return;if(Yy(c),c===u){k=null;break}if(d!==null){d.return=g,k=d;break}k=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var D=v.sibling;v.sibling=null,v=D}while(v!==null)}}k=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:ss(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,k=p;break e}k=s.return}}var f=t.current;for(k=f;k!==null;){o=k;var m=o.child;if((o.subtreeFlags&2064)!==0&&m!==null)m.return=o,k=m;else e:for(o=f;k!==null;){if(a=k,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:wl(9,a)}}catch(T){fe(a,a.return,T)}if(a===o){k=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,k=w;break e}k=a.return}}if(q=i,Gn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(hl,t)}catch{}r=!0}return r}finally{Y=n,Tt.transition=e}}return!1}function $p(t,e,n){e=di(n,e),e=Vy(t,e,1),t=On(t,e,1),e=et(),t!==null&&(Ks(t,1,e),ht(t,e))}function fe(t,e,n){if(t.tag===3)$p(t,t,n);else for(;e!==null;){if(e.tag===3){$p(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xn===null||!xn.has(r))){t=di(n,t),t=By(e,t,1),e=On(e,t,1),t=et(),e!==null&&(Ks(e,1,t),ht(e,t));break}}e=e.return}}function LS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=et(),t.pingedLanes|=t.suspendedLanes&n,De===t&&(Ue&n)===n&&(_e===4||_e===3&&(Ue&130023424)===Ue&&500>me()-id?cr(t,0):rd|=n),ht(t,e)}function av(t,e){e===0&&((t.mode&1)===0?e=1:(e=No,No<<=1,(No&130023424)===0&&(No=4194304)));var n=et();t=ln(t,e),t!==null&&(Ks(t,e,n),ht(t,n))}function $S(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),av(t,n)}function US(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),av(t,n)}var lv;lv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ut.current)at=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return at=!1,kS(t,e,n);at=(t.flags&131072)!==0}else at=!1,se&&(e.flags&1048576)!==0&&hy(e,Na,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ra(t,e),t=e.pendingProps;var i=li(e,Qe.current);ei(e,n),i=Yh(null,e,r,t,i,n);var s=Jh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ct(r)?(s=!0,Ia(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Kh(e),i.updater=yl,e.stateNode=i,i._reactInternals=e,Ac(e,r,t,n),e=Pc(null,e,r,!0,s,n)):(e.tag=0,se&&s&&Fh(e),Xe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ra(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=FS(r),t=Dt(r,t),i){case 0:e=Rc(null,e,r,t,n);break e;case 1:e=Cp(null,e,r,t,n);break e;case 11:e=kp(null,e,r,t,n);break e;case 14:e=Ip(null,e,r,Dt(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dt(r,i),Rc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dt(r,i),Cp(t,e,r,i,n);case 3:e:{if(Wy(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,my(t,e),Ra(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=di(Error(S(423)),e),e=Np(t,e,r,n,i);break e}else if(r!==i){i=di(Error(S(424)),e),e=Np(t,e,r,n,i);break e}else for(ft=Pn(e.stateNode.containerInfo.firstChild),pt=e,se=!0,Pt=null,n=wy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ui(),r===i){e=un(t,e,n);break e}Xe(t,e,r,n)}e=e.child}return e;case 5:return Ey(e),t===null&&Ic(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ec(r,i)?o=null:s!==null&&Ec(r,s)&&(e.flags|=32),Hy(t,e),Xe(t,e,o,n),e.child;case 6:return t===null&&Ic(e),null;case 13:return Ky(t,e,n);case 4:return qh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ci(e,null,r,n):Xe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dt(r,i),kp(t,e,r,i,n);case 7:return Xe(t,e,e.pendingProps,n),e.child;case 8:return Xe(t,e,e.pendingProps.children,n),e.child;case 12:return Xe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Z(Aa,r._currentValue),r._currentValue=o,s!==null)if(Mt(s.value,o)){if(s.children===i.children&&!ut.current){e=un(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=nn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Cc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Cc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Xe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ei(e,n),i=It(i),r=r(i),e.flags|=1,Xe(t,e,r,n),e.child;case 14:return r=e.type,i=Dt(r,e.pendingProps),i=Dt(r.type,i),Ip(t,e,r,i,n);case 15:return zy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dt(r,i),ra(t,e),e.tag=1,ct(r)?(t=!0,Ia(e)):t=!1,ei(e,n),yy(e,r,i),Ac(e,r,i,n),Pc(null,e,r,!0,t,n);case 19:return qy(t,e,n);case 22:return jy(t,e,n)}throw Error(S(156,e.tag))};function uv(t,e){return Lg(t,e)}function bS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(t,e,n,r){return new bS(t,e,n,r)}function ld(t){return t=t.prototype,!(!t||!t.isReactComponent)}function FS(t){if(typeof t=="function")return ld(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nh)return 11;if(t===Ah)return 14}return 2}function Ln(t,e){var n=t.alternate;return n===null?(n=_t(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function oa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ld(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Lr:return hr(n.children,i,s,e);case Ch:o=8,i|=8;break;case Ju:return t=_t(12,n,e,i|2),t.elementType=Ju,t.lanes=s,t;case Zu:return t=_t(13,n,e,i),t.elementType=Zu,t.lanes=s,t;case ec:return t=_t(19,n,e,i),t.elementType=ec,t.lanes=s,t;case vg:return Sl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gg:o=10;break e;case yg:o=9;break e;case Nh:o=11;break e;case Ah:o=14;break e;case En:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=_t(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function hr(t,e,n,r){return t=_t(7,t,r,e),t.lanes=n,t}function Sl(t,e,n,r){return t=_t(22,t,r,e),t.elementType=vg,t.lanes=n,t.stateNode={isHidden:!1},t}function Du(t,e,n){return t=_t(6,t,null,e),t.lanes=n,t}function Ru(t,e,n){return e=_t(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function VS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cu(0),this.expirationTimes=cu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ud(t,e,n,r,i,s,o,a,l){return t=new VS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=_t(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kh(s),t}function BS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function cv(t){if(!t)return Vn;t=t._reactInternals;e:{if(Ar(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(ct(n))return uy(t,n,e)}return e}function hv(t,e,n,r,i,s,o,a,l){return t=ud(n,r,!0,t,i,s,o,a,l),t.context=cv(null),n=t.current,r=et(),i=Mn(n),s=nn(r,i),s.callback=e!=null?e:null,On(n,s,i),t.current.lanes=i,Ks(t,i,r),ht(t,r),t}function _l(t,e,n,r){var i=e.current,s=et(),o=Mn(i);return n=cv(n),e.context===null?e.context=n:e.pendingContext=n,e=nn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=On(i,e,o),t!==null&&(xt(t,i,o,s),ea(t,i,o)),o}function ba(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Up(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function cd(t,e){Up(t,e),(t=t.alternate)&&Up(t,e)}function zS(){return null}var dv=typeof reportError=="function"?reportError:function(t){console.error(t)};function hd(t){this._internalRoot=t}Tl.prototype.render=hd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));_l(t,e,null,null)};Tl.prototype.unmount=hd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;vr(function(){_l(null,t,null,null)}),e[an]=null}};function Tl(t){this._internalRoot=t}Tl.prototype.unstable_scheduleHydration=function(t){if(t){var e=zg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_n.length&&e!==0&&e<_n[n].priority;n++);_n.splice(n,0,t),n===0&&Hg(t)}};function dd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bp(){}function jS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ba(o);s.call(u)}}var o=hv(e,r,t,0,null,!1,!1,"",bp);return t._reactRootContainer=o,t[an]=o.current,_s(t.nodeType===8?t.parentNode:t),vr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ba(l);a.call(u)}}var l=ud(t,0,!1,null,null,!1,!1,"",bp);return t._reactRootContainer=l,t[an]=l.current,_s(t.nodeType===8?t.parentNode:t),vr(function(){_l(e,l,n,r)}),l}function Il(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ba(o);a.call(l)}}_l(e,o,t,i)}else o=jS(n,e,t,i,r);return ba(o)}Vg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Gi(e.pendingLanes);n!==0&&(Ph(e,n|1),ht(e,me()),(q&6)===0&&(fi=me()+500,Gn()))}break;case 13:vr(function(){var r=ln(t,1);if(r!==null){var i=et();xt(r,t,1,i)}}),cd(t,1)}};Oh=function(t){if(t.tag===13){var e=ln(t,134217728);if(e!==null){var n=et();xt(e,t,134217728,n)}cd(t,134217728)}};Bg=function(t){if(t.tag===13){var e=Mn(t),n=ln(t,e);if(n!==null){var r=et();xt(n,t,e,r)}cd(t,e)}};zg=function(){return Y};jg=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};cc=function(t,e,n){switch(e){case"input":if(rc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ml(r);if(!i)throw Error(S(90));Eg(r),rc(r,i)}}}break;case"textarea":_g(t,n);break;case"select":e=n.value,e!=null&&Xr(t,!!n.multiple,e,!1)}};Dg=sd;Rg=vr;var HS={usingClientEntryPoint:!1,Events:[Gs,Fr,ml,Ng,Ag,sd]},Hi={findFiberByHostInstance:rr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},WS={bundleType:Hi.bundleType,version:Hi.version,rendererPackageName:Hi.rendererPackageName,rendererConfig:Hi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=xg(t),t===null?null:t.stateNode},findFiberByHostInstance:Hi.findFiberByHostInstance||zS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bo.isDisabled&&bo.supportsFiber)try{hl=bo.inject(WS),Ft=bo}catch{}}yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HS;yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dd(e))throw Error(S(200));return BS(t,e,null,n)};yt.createRoot=function(t,e){if(!dd(t))throw Error(S(299));var n=!1,r="",i=dv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ud(t,1,!1,null,null,n,!1,r,i),t[an]=e.current,_s(t.nodeType===8?t.parentNode:t),new hd(e)};yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=xg(e),t=t===null?null:t.stateNode,t};yt.flushSync=function(t){return vr(t)};yt.hydrate=function(t,e,n){if(!kl(e))throw Error(S(200));return Il(null,t,e,!0,n)};yt.hydrateRoot=function(t,e,n){if(!dd(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=dv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=hv(e,null,t,1,n!=null?n:null,i,!1,s,o),t[an]=e.current,_s(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Tl(e)};yt.render=function(t,e,n){if(!kl(e))throw Error(S(200));return Il(null,t,e,!1,n)};yt.unmountComponentAtNode=function(t){if(!kl(t))throw Error(S(40));return t._reactRootContainer?(vr(function(){Il(null,null,t,!1,function(){t._reactRootContainer=null,t[an]=null})}),!0):!1};yt.unstable_batchedUpdates=sd;yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!kl(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return Il(t,e,n,!1,r)};yt.version="18.2.0-next-9e3b772b8-20220608";function fv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fv)}catch(t){console.error(t)}}fv(),hg.exports=yt;var Fp=hg.exports;Xu.createRoot=Fp.createRoot,Xu.hydrateRoot=Fp.hydrateRoot;/**
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
 */const pv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},KS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},mv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):KS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},qS=function(t){const e=pv(t);return mv.encodeByteArray(e,!0)},gv=function(t){return qS(t).replace(/\./g,"")},GS=function(t){try{return mv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class QS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Re(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yv(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function vv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function XS(){return Re().indexOf("Electron/")>=0}function Ev(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function YS(){return Re().indexOf("MSAppHost/")>=0}function JS(){return typeof indexedDB=="object"}function ZS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const e_="FirebaseError";class gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=e_,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xs.prototype.create)}}class Xs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?t_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new gn(i,a,r)}}function t_(t,e){return t.replace(n_,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const n_=/\{\$([^}]+)}/g;function r_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Vp(s)&&Vp(o)){if(!Fa(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Vp(t){return t!==null&&typeof t=="object"}/**
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
 */function Ys(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function i_(t,e){const n=new s_(t,e);return n.subscribe.bind(n)}class s_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");o_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Pu),i.error===void 0&&(i.error=Pu),i.complete===void 0&&(i.complete=Pu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function o_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pu(){}/**
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
 */function Pe(t){return t&&t._delegate?t._delegate:t}class wr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const nr="[DEFAULT]";/**
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
 */class a_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new QS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(u_(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:l_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function l_(t){return t===nr?void 0:t}function u_(t){return t.instantiationMode==="EAGER"}/**
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
 */class c_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new a_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const h_={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},d_=G.INFO,f_={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},p_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=f_[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fd{constructor(e){this.name=e,this._logLevel=d_,this._logHandler=p_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?h_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const m_=(t,e)=>e.some(n=>t instanceof n);let Bp,zp;function g_(){return Bp||(Bp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function y_(){return zp||(zp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sv=new WeakMap,jc=new WeakMap,_v=new WeakMap,Ou=new WeakMap,pd=new WeakMap;function v_(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n($n(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sv.set(n,t)}).catch(()=>{}),pd.set(e,t),e}function w_(t){if(jc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});jc.set(t,e)}let Hc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_v.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function E_(t){Hc=t(Hc)}function S_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xu(this),e,...n);return _v.set(r,e.sort?e.sort():[e]),$n(r)}:y_().includes(t)?function(...e){return t.apply(xu(this),e),$n(Sv.get(this))}:function(...e){return $n(t.apply(xu(this),e))}}function __(t){return typeof t=="function"?S_(t):(t instanceof IDBTransaction&&w_(t),m_(t,g_())?new Proxy(t,Hc):t)}function $n(t){if(t instanceof IDBRequest)return v_(t);if(Ou.has(t))return Ou.get(t);const e=__(t);return e!==t&&(Ou.set(t,e),pd.set(e,t)),e}const xu=t=>pd.get(t);function T_(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=$n(o);return r&&o.addEventListener("upgradeneeded",l=>{r($n(o.result),l.oldVersion,l.newVersion,$n(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const k_=["get","getKey","getAll","getAllKeys","count"],I_=["put","add","delete","clear"],Mu=new Map;function jp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Mu.get(e))return Mu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=I_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||k_.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Mu.set(e,s),s}E_(t=>({...t,get:(e,n,r)=>jp(e,n)||t.get(e,n,r),has:(e,n)=>!!jp(e,n)||t.has(e,n)}));/**
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
 */class C_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(N_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function N_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wc="@firebase/app",Hp="0.7.30";/**
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
 */const Er=new fd("@firebase/app"),A_="@firebase/app-compat",D_="@firebase/analytics-compat",R_="@firebase/analytics",P_="@firebase/app-check-compat",O_="@firebase/app-check",x_="@firebase/auth",M_="@firebase/auth-compat",L_="@firebase/database",$_="@firebase/database-compat",U_="@firebase/functions",b_="@firebase/functions-compat",F_="@firebase/installations",V_="@firebase/installations-compat",B_="@firebase/messaging",z_="@firebase/messaging-compat",j_="@firebase/performance",H_="@firebase/performance-compat",W_="@firebase/remote-config",K_="@firebase/remote-config-compat",q_="@firebase/storage",G_="@firebase/storage-compat",Q_="@firebase/firestore",X_="@firebase/firestore-compat",Y_="firebase",J_="9.9.2";/**
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
 */const Tv="[DEFAULT]",Z_={[Wc]:"fire-core",[A_]:"fire-core-compat",[R_]:"fire-analytics",[D_]:"fire-analytics-compat",[O_]:"fire-app-check",[P_]:"fire-app-check-compat",[x_]:"fire-auth",[M_]:"fire-auth-compat",[L_]:"fire-rtdb",[$_]:"fire-rtdb-compat",[U_]:"fire-fn",[b_]:"fire-fn-compat",[F_]:"fire-iid",[V_]:"fire-iid-compat",[B_]:"fire-fcm",[z_]:"fire-fcm-compat",[j_]:"fire-perf",[H_]:"fire-perf-compat",[W_]:"fire-rc",[K_]:"fire-rc-compat",[q_]:"fire-gcs",[G_]:"fire-gcs-compat",[Q_]:"fire-fst",[X_]:"fire-fst-compat","fire-js":"fire-js",[Y_]:"fire-js-all"};/**
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
 */const Va=new Map,Kc=new Map;function eT(t,e){try{t.container.addComponent(e)}catch(n){Er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pi(t){const e=t.name;if(Kc.has(e))return Er.debug(`There were multiple attempts to register component ${e}.`),!1;Kc.set(e,t);for(const n of Va.values())eT(n,t);return!0}function md(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const tT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Sr=new Xs("app","Firebase",tT);/**
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
 */class nT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sr.create("app-deleted",{appName:this._name})}}/**
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
 */const Js=J_;function rT(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Tv,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Sr.create("bad-app-name",{appName:String(r)});const i=Va.get(r);if(i){if(Fa(t,i.options)&&Fa(n,i.config))return i;throw Sr.create("duplicate-app",{appName:r})}const s=new c_(r);for(const a of Kc.values())s.addComponent(a);const o=new nT(t,n,s);return Va.set(r,o),o}function kv(t=Tv){const e=Va.get(t);if(!e)throw Sr.create("no-app",{appName:t});return e}function Un(t,e,n){var r;let i=(r=Z_[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Er.warn(a.join(" "));return}pi(new wr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const iT="firebase-heartbeat-database",sT=1,Ps="firebase-heartbeat-store";let Lu=null;function Iv(){return Lu||(Lu=T_(iT,sT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ps)}}}).catch(t=>{throw Sr.create("idb-open",{originalErrorMessage:t.message})})),Lu}async function oT(t){var e;try{return(await Iv()).transaction(Ps).objectStore(Ps).get(Cv(t))}catch(n){if(n instanceof gn)Er.warn(n.message);else{const r=Sr.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Er.warn(r.message)}}}async function Wp(t,e){var n;try{const i=(await Iv()).transaction(Ps,"readwrite");return await i.objectStore(Ps).put(e,Cv(t)),i.done}catch(r){if(r instanceof gn)Er.warn(r.message);else{const i=Sr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Er.warn(i.message)}}}function Cv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const aT=1024,lT=30*24*60*60*1e3;class uT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Kp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=lT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Kp(),{heartbeatsToSend:n,unsentEntries:r}=cT(this._heartbeatsCache.heartbeats),i=gv(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Kp(){return new Date().toISOString().substring(0,10)}function cT(t,e=aT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),qp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return JS()?ZS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await oT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function qp(t){return gv(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function dT(t){pi(new wr("platform-logger",e=>new C_(e),"PRIVATE")),pi(new wr("heartbeat",e=>new uT(e),"PRIVATE")),Un(Wc,Hp,t),Un(Wc,Hp,"esm2017"),Un("fire-js","")}dT("");var fT=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},I,gd=gd||{},$=fT||self;function Ba(){}function qc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Zs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function pT(t){return Object.prototype.hasOwnProperty.call(t,$u)&&t[$u]||(t[$u]=++mT)}var $u="closure_uid_"+(1e9*Math.random()>>>0),mT=0;function gT(t,e,n){return t.call.apply(t.bind,arguments)}function yT(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function be(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?be=gT:be=yT,be.apply(null,arguments)}function Fo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function je(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Qn(){this.s=this.s,this.o=this.o}var vT=0;Qn.prototype.s=!1;Qn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),vT!=0)&&pT(this)};Qn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Nv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Av=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function wT(t){e:{var e=ck;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Gp(t){return Array.prototype.concat.apply([],arguments)}function yd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function za(t){return/^[\s\xa0]*$/.test(t)}var Qp=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ye(t,e){return t.indexOf(e)!=-1}function Uu(t,e){return t<e?-1:t>e?1:0}var Je;e:{var Xp=$.navigator;if(Xp){var Yp=Xp.userAgent;if(Yp){Je=Yp;break e}}Je=""}function vd(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Dv(t){const e={};for(const n in t)e[n]=t[n];return e}var Jp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rv(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Jp.length;s++)n=Jp[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function wd(t){return wd[" "](t),t}wd[" "]=Ba;function ET(t){var e=TT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ST=Ye(Je,"Opera"),mi=Ye(Je,"Trident")||Ye(Je,"MSIE"),Pv=Ye(Je,"Edge"),Gc=Pv||mi,Ov=Ye(Je,"Gecko")&&!(Ye(Je.toLowerCase(),"webkit")&&!Ye(Je,"Edge"))&&!(Ye(Je,"Trident")||Ye(Je,"MSIE"))&&!Ye(Je,"Edge"),_T=Ye(Je.toLowerCase(),"webkit")&&!Ye(Je,"Edge");function xv(){var t=$.document;return t?t.documentMode:void 0}var ja;e:{var bu="",Fu=function(){var t=Je;if(Ov)return/rv:([^\);]+)(\)|;)/.exec(t);if(Pv)return/Edge\/([\d\.]+)/.exec(t);if(mi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(_T)return/WebKit\/(\S+)/.exec(t);if(ST)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Fu&&(bu=Fu?Fu[1]:""),mi){var Vu=xv();if(Vu!=null&&Vu>parseFloat(bu)){ja=String(Vu);break e}}ja=bu}var TT={};function kT(){return ET(function(){let t=0;const e=Qp(String(ja)).split("."),n=Qp("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Uu(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Uu(i[2].length==0,s[2].length==0)||Uu(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Qc;if($.document&&mi){var Zp=xv();Qc=Zp||parseInt(ja,10)||void 0}else Qc=void 0;var IT=Qc,CT=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",Ba,e),$.removeEventListener("test",Ba,e)}catch{}return t}();function Ge(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};function Os(t,e){if(Ge.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ov){e:{try{wd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:NT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Os.Z.h.call(this)}}je(Os,Ge);var NT={2:"touch",3:"pen",4:"mouse"};Os.prototype.h=function(){Os.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var eo="closure_listenable_"+(1e6*Math.random()|0),AT=0;function DT(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++AT,this.ca=this.fa=!1}function Cl(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Nl(t){this.src=t,this.g={},this.h=0}Nl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Yc(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new DT(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Xc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Nv(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Cl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Yc(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Ed="closure_lm_"+(1e6*Math.random()|0),Bu={};function Mv(t,e,n,r,i){if(r&&r.once)return $v(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Mv(t,e[s],n,r,i);return null}return n=Td(n),t&&t[eo]?t.N(e,n,Zs(r)?!!r.capture:!!r,i):Lv(t,e,n,!1,r,i)}function Lv(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Zs(i)?!!i.capture:!!i,a=_d(t);if(a||(t[Ed]=a=new Nl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=RT(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)CT||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(bv(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function RT(){function t(n){return e.call(t.src,t.listener,n)}var e=PT;return t}function $v(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)$v(t,e[s],n,r,i);return null}return n=Td(n),t&&t[eo]?t.O(e,n,Zs(r)?!!r.capture:!!r,i):Lv(t,e,n,!0,r,i)}function Uv(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Uv(t,e[s],n,r,i);else r=Zs(r)?!!r.capture:!!r,n=Td(n),t&&t[eo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Yc(s,n,r,i),-1<n&&(Cl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=_d(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Yc(e,n,r,i)),(n=-1<t?e[t]:null)&&Sd(n))}function Sd(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[eo])Xc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(bv(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=_d(e))?(Xc(n,t),n.h==0&&(n.src=null,e[Ed]=null)):Cl(t)}}}function bv(t){return t in Bu?Bu[t]:Bu[t]="on"+t}function PT(t,e){if(t.ca)t=!0;else{e=new Os(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Sd(t),t=n.call(r,e)}return t}function _d(t){return t=t[Ed],t instanceof Nl?t:null}var zu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Td(t){return typeof t=="function"?t:(t[zu]||(t[zu]=function(e){return t.handleEvent(e)}),t[zu])}function Oe(){Qn.call(this),this.i=new Nl(this),this.P=this,this.I=null}je(Oe,Qn);Oe.prototype[eo]=!0;Oe.prototype.removeEventListener=function(t,e,n,r){Uv(this,t,e,n,r)};function Fe(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ge(e,t);else if(e instanceof Ge)e.target=e.target||t;else{var i=e;e=new Ge(r,t),Rv(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Vo(o,r,!0,e)&&i}if(o=e.g=t,i=Vo(o,r,!0,e)&&i,i=Vo(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Vo(o,r,!1,e)&&i}Oe.prototype.M=function(){if(Oe.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Cl(n[r]);delete t.g[e],t.h--}}this.I=null};Oe.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Oe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Vo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Xc(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var kd=$.JSON.stringify;function OT(){var t=Vv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class xT{constructor(){this.h=this.g=null}add(e,n){const r=Fv.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Fv=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new MT,t=>t.reset());class MT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function LT(t){$.setTimeout(()=>{throw t},0)}function Id(t,e){Jc||$T(),Zc||(Jc(),Zc=!0),Vv.add(t,e)}var Jc;function $T(){var t=$.Promise.resolve(void 0);Jc=function(){t.then(UT)}}var Zc=!1,Vv=new xT;function UT(){for(var t;t=OT();){try{t.h.call(t.g)}catch(n){LT(n)}var e=Fv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Zc=!1}function Al(t,e){Oe.call(this),this.h=t||1,this.g=e||$,this.j=be(this.kb,this),this.l=Date.now()}je(Al,Oe);I=Al.prototype;I.da=!1;I.S=null;I.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Fe(this,"tick"),this.da&&(Cd(this),this.start()))}};I.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Cd(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}I.M=function(){Al.Z.M.call(this),Cd(this),delete this.g};function Nd(t,e,n){if(typeof t=="function")n&&(t=be(t,n));else if(t&&typeof t.handleEvent=="function")t=be(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function Bv(t){t.g=Nd(()=>{t.g=null,t.i&&(t.i=!1,Bv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class bT extends Qn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Bv(this)}M(){super.M(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xs(t){Qn.call(this),this.h=t,this.g={}}je(xs,Qn);var em=[];function zv(t,e,n,r){Array.isArray(n)||(n&&(em[0]=n.toString()),n=em);for(var i=0;i<n.length;i++){var s=Mv(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function jv(t){vd(t.g,function(e,n){this.g.hasOwnProperty(n)&&Sd(e)},t),t.g={}}xs.prototype.M=function(){xs.Z.M.call(this),jv(this)};xs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Dl(){this.g=!0}Dl.prototype.Aa=function(){this.g=!1};function FT(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function VT(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Kr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+zT(t,n)+(r?" "+r:"")})}function BT(t,e){t.info(function(){return"TIMEOUT: "+e})}Dl.prototype.info=function(){};function zT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return kd(n)}catch{return e}}var Dr={},tm=null;function Rl(){return tm=tm||new Oe}Dr.Ma="serverreachability";function Hv(t){Ge.call(this,Dr.Ma,t)}je(Hv,Ge);function Ms(t){const e=Rl();Fe(e,new Hv(e))}Dr.STAT_EVENT="statevent";function Wv(t,e){Ge.call(this,Dr.STAT_EVENT,t),this.stat=e}je(Wv,Ge);function Ze(t){const e=Rl();Fe(e,new Wv(e,t))}Dr.Na="timingevent";function Kv(t,e){Ge.call(this,Dr.Na,t),this.size=e}je(Kv,Ge);function to(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var Pl={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},qv={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ad(){}Ad.prototype.h=null;function nm(t){return t.h||(t.h=t.i())}function Gv(){}var no={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Dd(){Ge.call(this,"d")}je(Dd,Ge);function Rd(){Ge.call(this,"c")}je(Rd,Ge);var eh;function Ol(){}je(Ol,Ad);Ol.prototype.g=function(){return new XMLHttpRequest};Ol.prototype.i=function(){return{}};eh=new Ol;function ro(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new xs(this),this.P=jT,t=Gc?125:void 0,this.W=new Al(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Qv}function Qv(){this.i=null,this.g="",this.h=!1}var jT=45e3,th={},Ha={};I=ro.prototype;I.setTimeout=function(t){this.P=t};function nh(t,e,n){t.K=1,t.v=Ml(cn(e)),t.s=n,t.U=!0,Xv(t,null)}function Xv(t,e){t.F=Date.now(),io(t),t.A=cn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),r0(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Qv,t.g=T0(t.l,n?e:null,!t.s),0<t.O&&(t.L=new bT(be(t.Ia,t,t.g),t.O)),zv(t.V,t.g,"readystatechange",t.gb),e=t.H?Dv(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ms(),FT(t.j,t.u,t.A,t.m,t.X,t.s)}I.gb=function(t){t=t.target;const e=this.L;e&&Zt(t)==3?e.l():this.Ia(t)};I.Ia=function(t){try{if(t==this.g)e:{const c=Zt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||Gc||this.g&&(this.h.h||this.g.ga()||om(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Ms(3):Ms(2)),xl(this);var n=this.g.ba();this.N=n;t:if(Yv(this)){var r=om(this.g);t="";var i=r.length,s=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){or(this),ls(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,VT(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!za(a)){var u=a;break t}}u=null}if(n=u)Kr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,rh(this,n);else{this.i=!1,this.o=3,Ze(12),or(this),ls(this);break e}}this.U?(Jv(this,c,o),Gc&&this.i&&c==3&&(zv(this.V,this.W,"tick",this.fb),this.W.start())):(Kr(this.j,this.m,o,null),rh(this,o)),c==4&&or(this),this.i&&!this.I&&(c==4?w0(this.l,this):(this.i=!1,io(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ze(12)):(this.o=0,Ze(13)),or(this),ls(this)}}}catch{}finally{}};function Yv(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Jv(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=HT(t,n),i==Ha){e==4&&(t.o=4,Ze(14),r=!1),Kr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==th){t.o=4,Ze(15),Kr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Kr(t.j,t.m,i,null),rh(t,i);Yv(t)&&i!=Ha&&i!=th&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ze(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fd(e),e.L=!0,Ze(11))):(Kr(t.j,t.m,n,"[Invalid Chunked Response]"),or(t),ls(t))}I.fb=function(){if(this.g){var t=Zt(this.g),e=this.g.ga();this.C<e.length&&(xl(this),Jv(this,t,e),this.i&&t!=4&&io(this))}};function HT(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ha:(n=Number(e.substring(n,r)),isNaN(n)?th:(r+=1,r+n>e.length?Ha:(e=e.substr(r,n),t.C=r+n,e)))}I.cancel=function(){this.I=!0,or(this)};function io(t){t.Y=Date.now()+t.P,Zv(t,t.P)}function Zv(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=to(be(t.eb,t),e)}function xl(t){t.B&&($.clearTimeout(t.B),t.B=null)}I.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(BT(this.j,this.A),this.K!=2&&(Ms(),Ze(17)),or(this),this.o=2,ls(this)):Zv(this,this.Y-t)};function ls(t){t.l.G==0||t.I||w0(t.l,t)}function or(t){xl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Cd(t.W),jv(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function rh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ih(n.i,t))){if(n.I=t.N,!t.J&&ih(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ga(n),Ul(n);else break e;bd(n),Ze(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=to(be(n.ab,n),6e3));if(1>=o0(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else ar(n,11)}else if((t.J||n.g==t)&&Ga(n),!za(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;!s.g&&(Ye(y,"spdy")||Ye(y,"quic")||Ye(y,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(xd(s,s.h),s.h=null))}if(r.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.sa=v,oe(r.F,r.D,v))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=_0(r,r.H?r.la:null,r.W),o.J){a0(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(xl(a),io(a)),r.g=o}else y0(r);0<n.l.length&&bl(n)}else u[0]!="stop"&&u[0]!="close"||ar(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ar(n,7):Ud(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Ms(4)}catch{}}function WT(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(qc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Pd(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(qc(t)||typeof t=="string")Av(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(qc(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=WT(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Di(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Di)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}I=Di.prototype;I.R=function(){Od(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};I.T=function(){return Od(this),this.g.concat()};function Od(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];_r(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],_r(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}I.get=function(t,e){return _r(this.h,t)?this.h[t]:e};I.set=function(t,e){_r(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};I.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function _r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var e0=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function KT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Tr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Tr){this.g=e!==void 0?e:t.g,Wa(this,t.j),this.s=t.s,Ka(this,t.i),qa(this,t.m),this.l=t.l,e=t.h;var n=new Ls;n.i=e.i,e.g&&(n.g=new Di(e.g),n.h=e.h),rm(this,n),this.o=t.o}else t&&(n=String(t).match(e0))?(this.g=!!e,Wa(this,n[1]||"",!0),this.s=us(n[2]||""),Ka(this,n[3]||"",!0),qa(this,n[4]),this.l=us(n[5]||"",!0),rm(this,n[6]||"",!0),this.o=us(n[7]||"")):(this.g=!!e,this.h=new Ls(null,this.g))}Tr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xi(e,im,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Xi(e,im,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Xi(n,n.charAt(0)=="/"?YT:XT,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xi(n,ZT)),t.join("")};function cn(t){return new Tr(t)}function Wa(t,e,n){t.j=n?us(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ka(t,e,n){t.i=n?us(e,!0):e}function qa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function rm(t,e,n){e instanceof Ls?(t.h=e,ek(t.h,t.g)):(n||(e=Xi(e,JT)),t.h=new Ls(e,t.g))}function oe(t,e,n){t.h.set(e,n)}function Ml(t){return oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function qT(t){return t instanceof Tr?cn(t):new Tr(t,void 0)}function GT(t,e,n,r){var i=new Tr(null,void 0);return t&&Wa(i,t),e&&Ka(i,e),n&&qa(i,n),r&&(i.l=r),i}function us(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,QT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function QT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var im=/[#\/\?@]/g,XT=/[#\?:]/g,YT=/[#\?]/g,JT=/[#\?@]/g,ZT=/#/g;function Ls(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Xn(t){t.g||(t.g=new Di,t.h=0,t.i&&KT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}I=Ls.prototype;I.add=function(t,e){Xn(this),this.i=null,t=Ri(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function t0(t,e){Xn(t),e=Ri(t,e),_r(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,_r(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Od(t)))}function n0(t,e){return Xn(t),e=Ri(t,e),_r(t.g.h,e)}I.forEach=function(t,e){Xn(this),this.g.forEach(function(n,r){Av(n,function(i){t.call(e,i,r,this)},this)},this)};I.T=function(){Xn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};I.R=function(t){Xn(this);var e=[];if(typeof t=="string")n0(this,t)&&(e=Gp(e,this.g.get(Ri(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Gp(e,t[n])}return e};I.set=function(t,e){return Xn(this),this.i=null,t=Ri(this,t),n0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};I.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function r0(t,e,n){t0(t,e),0<n.length&&(t.i=null,t.g.set(Ri(t,e),yd(n)),t.h+=n.length)}I.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Ri(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ek(t,e){e&&!t.j&&(Xn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(t0(this,r),r0(this,i,n))},t)),t.j=e}var tk=class{constructor(t,e){this.h=t,this.g=e}};function i0(t){this.l=t||nk,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ea&&$.g.Ea()&&$.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nk=10;function s0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function o0(t){return t.h?1:t.g?t.g.size:0}function ih(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function xd(t,e){t.g?t.g.add(e):t.h=e}function a0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}i0.prototype.cancel=function(){if(this.i=l0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function l0(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return yd(t.i)}function Md(){}Md.prototype.stringify=function(t){return $.JSON.stringify(t,void 0)};Md.prototype.parse=function(t){return $.JSON.parse(t,void 0)};function rk(){this.g=new Md}function ik(t,e,n){const r=n||"";try{Pd(t,function(i,s){let o=i;Zs(i)&&(o=kd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function sk(t,e){const n=new Dl;if($.Image){const r=new Image;r.onload=Fo(Bo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Fo(Bo,n,r,"TestLoadImage: error",!1,e),r.onabort=Fo(Bo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Fo(Bo,n,r,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Bo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function so(t){this.l=t.$b||null,this.j=t.ib||!1}je(so,Ad);so.prototype.g=function(){return new Ll(this.l,this.j)};so.prototype.i=function(t){return function(){return t}}({});function Ll(t,e){Oe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ld,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}je(Ll,Oe);var Ld=0;I=Ll.prototype;I.open=function(t,e){if(this.readyState!=Ld)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,$s(this)};I.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||$).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};I.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oo(this)),this.readyState=Ld};I.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,$s(this)),this.g&&(this.readyState=3,$s(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof $.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;u0(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function u0(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}I.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?oo(this):$s(this),this.readyState==3&&u0(this)}};I.Ua=function(t){this.g&&(this.response=this.responseText=t,oo(this))};I.Ta=function(t){this.g&&(this.response=t,oo(this))};I.ha=function(){this.g&&oo(this)};function oo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,$s(t)}I.setRequestHeader=function(t,e){this.v.append(t,e)};I.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};I.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function $s(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ll.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ok=$.JSON.parse;function Ee(t){Oe.call(this),this.headers=new Di,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=c0,this.K=this.L=!1}je(Ee,Oe);var c0="",ak=/^https?$/i,lk=["POST","PUT"];I=Ee.prototype;I.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():eh.g(),this.C=this.u?nm(this.u):nm(eh),this.g.onreadystatechange=be(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){sm(this,s);return}t=n||"";const i=new Di(this.headers);r&&Pd(r,function(s,o){i.set(o,s)}),r=wT(i.T()),n=$.FormData&&t instanceof $.FormData,!(0<=Nv(lk,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{f0(this),0<this.B&&((this.K=uk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=be(this.pa,this)):this.A=Nd(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){sm(this,s)}};function uk(t){return mi&&kT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function ck(t){return t.toLowerCase()=="content-type"}I.pa=function(){typeof gd!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Fe(this,"timeout"),this.abort(8))};function sm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,h0(t),$l(t)}function h0(t){t.D||(t.D=!0,Fe(t,"complete"),Fe(t,"error"))}I.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Fe(this,"complete"),Fe(this,"abort"),$l(this))};I.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$l(this,!0)),Ee.Z.M.call(this)};I.Fa=function(){this.s||(this.F||this.v||this.l?d0(this):this.cb())};I.cb=function(){d0(this)};function d0(t){if(t.h&&typeof gd!="undefined"&&(!t.C[1]||Zt(t)!=4||t.ba()!=2)){if(t.v&&Zt(t)==4)Nd(t.Fa,0,t);else if(Fe(t,"readystatechange"),Zt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(e0)[1]||null;if(!i&&$.self&&$.self.location){var s=$.self.location.protocol;i=s.substr(0,s.length-1)}r=!ak.test(i?i.toLowerCase():"")}n=r}if(n)Fe(t,"complete"),Fe(t,"success");else{t.m=6;try{var o=2<Zt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",h0(t)}}finally{$l(t)}}}}function $l(t,e){if(t.g){f0(t);const n=t.g,r=t.C[0]?Ba:null;t.g=null,t.C=null,e||Fe(t,"ready");try{n.onreadystatechange=r}catch{}}}function f0(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}function Zt(t){return t.g?t.g.readyState:0}I.ba=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}};I.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};I.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ok(e)}};function om(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case c0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}I.Da=function(){return this.m};I.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function hk(t){let e="";return vd(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function $d(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=hk(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):oe(t,e,n))}function Wi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function p0(t){this.za=0,this.l=[],this.h=new Dl,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Wi("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Wi("baseRetryDelayMs",5e3,t),this.$a=Wi("retryDelaySeedMs",1e4,t),this.Ya=Wi("forwardChannelMaxRetries",2,t),this.ra=Wi("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new i0(t&&t.concurrentRequestLimit),this.Ca=new rk,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}I=p0.prototype;I.ma=8;I.G=1;function Ud(t){if(m0(t),t.G==3){var e=t.V++,n=cn(t.F);oe(n,"SID",t.J),oe(n,"RID",e),oe(n,"TYPE","terminate"),ao(t,n),e=new ro(t,t.h,e,void 0),e.K=2,e.v=Ml(cn(n)),n=!1,$.navigator&&$.navigator.sendBeacon&&(n=$.navigator.sendBeacon(e.v.toString(),"")),!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=T0(e.l,null),e.g.ea(e.v)),e.F=Date.now(),io(e)}S0(t)}I.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Ul(t){t.g&&(Fd(t),t.g.cancel(),t.g=null)}function m0(t){Ul(t),t.u&&($.clearTimeout(t.u),t.u=null),Ga(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function ju(t,e){t.l.push(new tk(t.Za++,e)),t.G==3&&bl(t)}function bl(t){s0(t.i)||t.m||(t.m=!0,Id(t.Ha,t),t.C=0)}function dk(t,e){return o0(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=to(be(t.Ha,t,e),E0(t,t.C)),t.C++,!0)}I.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new ro(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=Dv(s),Rv(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=g0(this,i,e),n=cn(this.F),oe(n,"RID",t),oe(n,"CVER",22),this.D&&oe(n,"X-HTTP-Session-Id",this.D),ao(this,n),this.o&&s&&$d(n,this.o,s),xd(this.i,i),this.Ra&&oe(n,"TYPE","init"),this.ja?(oe(n,"$req",e),oe(n,"SID","null"),i.$=!0,nh(i,n,null)):nh(i,n,e),this.G=2}}else this.G==3&&(t?am(this,t):this.l.length==0||s0(this.i)||am(this))};function am(t,e){var n;e?n=e.m:n=t.V++;const r=cn(t.F);oe(r,"SID",t.J),oe(r,"RID",n),oe(r,"AID",t.U),ao(t,r),t.o&&t.s&&$d(r,t.o,t.s),n=new ro(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=g0(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),xd(t.i,n),nh(n,r,e)}function ao(t,e){t.j&&Pd({},function(n,r){oe(e,r,n)})}function g0(t,e,n){n=Math.min(t.l.length,n);var r=t.j?be(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{ik(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function y0(t){t.g||t.u||(t.Y=1,Id(t.Ga,t),t.A=0)}function bd(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=to(be(t.Ga,t),E0(t,t.A)),t.A++,!0)}I.Ga=function(){if(this.u=null,v0(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=to(be(this.bb,this),t)}};I.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ze(10),Ul(this),v0(this))};function Fd(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function v0(t){t.g=new ro(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=cn(t.oa);oe(e,"RID","rpc"),oe(e,"SID",t.J),oe(e,"CI",t.N?"0":"1"),oe(e,"AID",t.U),ao(t,e),oe(e,"TYPE","xmlhttp"),t.o&&t.s&&$d(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ml(cn(e)),n.s=null,n.U=!0,Xv(n,t)}I.ab=function(){this.v!=null&&(this.v=null,Ul(this),bd(this),Ze(19))};function Ga(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function w0(t,e){var n=null;if(t.g==e){Ga(t),Fd(t),t.g=null;var r=2}else if(ih(t.i,e))n=e.D,a0(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Rl(),Fe(r,new Kv(r,n)),bl(t)}else y0(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&dk(t,e)||r==2&&bd(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ar(t,5);break;case 4:ar(t,10);break;case 3:ar(t,6);break;default:ar(t,2)}}}function E0(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function ar(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=be(t.jb,t);n||(n=new Tr("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||Wa(n,"https"),Ml(n)),sk(n.toString(),r)}else Ze(2);t.G=0,t.j&&t.j.va(e),S0(t),m0(t)}I.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ze(2)):(this.h.info("Failed to ping google.com"),Ze(1))};function S0(t){t.G=0,t.I=-1,t.j&&((l0(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,yd(t.l),t.l.length=0),t.j.ua())}function _0(t,e,n){let r=qT(n);if(r.i!="")e&&Ka(r,e+"."+r.i),qa(r,r.m);else{const i=$.location;r=GT(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&vd(t.aa,function(i,s){oe(r,s,i)}),e=t.D,n=t.sa,e&&n&&oe(r,e,n),oe(r,"VER",t.ma),ao(t,r),r}function T0(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ee(new so({ib:!0})):new Ee(t.qa),e.L=t.H,e}function k0(){}I=k0.prototype;I.xa=function(){};I.wa=function(){};I.va=function(){};I.ua=function(){};I.Oa=function(){};function Qa(){if(mi&&!(10<=Number(IT)))throw Error("Environmental error: no available transport.")}Qa.prototype.g=function(t,e){return new gt(t,e)};function gt(t,e){Oe.call(this),this.g=new p0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!za(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!za(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Pi(this)}je(gt,Oe);gt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Id(be(t.hb,t,e))),Ze(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=_0(t,null,t.W),bl(t)};gt.prototype.close=function(){Ud(this.g)};gt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,ju(this.g,e)}else this.v?(e={},e.__data__=kd(t),ju(this.g,e)):ju(this.g,t)};gt.prototype.M=function(){this.g.j=null,delete this.j,Ud(this.g),delete this.g,gt.Z.M.call(this)};function I0(t){Dd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}je(I0,Dd);function C0(){Rd.call(this),this.status=1}je(C0,Rd);function Pi(t){this.g=t}je(Pi,k0);Pi.prototype.xa=function(){Fe(this.g,"a")};Pi.prototype.wa=function(t){Fe(this.g,new I0(t))};Pi.prototype.va=function(t){Fe(this.g,new C0)};Pi.prototype.ua=function(){Fe(this.g,"b")};Qa.prototype.createWebChannel=Qa.prototype.g;gt.prototype.send=gt.prototype.u;gt.prototype.open=gt.prototype.m;gt.prototype.close=gt.prototype.close;Pl.NO_ERROR=0;Pl.TIMEOUT=8;Pl.HTTP_ERROR=6;qv.COMPLETE="complete";Gv.EventType=no;no.OPEN="a";no.CLOSE="b";no.ERROR="c";no.MESSAGE="d";Oe.prototype.listen=Oe.prototype.N;Ee.prototype.listenOnce=Ee.prototype.O;Ee.prototype.getLastError=Ee.prototype.La;Ee.prototype.getLastErrorCode=Ee.prototype.Da;Ee.prototype.getStatus=Ee.prototype.ba;Ee.prototype.getResponseJson=Ee.prototype.Qa;Ee.prototype.getResponseText=Ee.prototype.ga;Ee.prototype.send=Ee.prototype.ea;var fk=function(){return new Qa},pk=function(){return Rl()},Hu=Pl,mk=qv,gk=Dr,lm={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},yk=so,zo=Gv,vk=Ee;const um="@firebase/firestore";/**
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
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */let Oi="9.9.2";/**
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
 */const kr=new fd("@firebase/firestore");function cm(){return kr.logLevel}function O(t,...e){if(kr.logLevel<=G.DEBUG){const n=e.map(Vd);kr.debug(`Firestore (${Oi}): ${t}`,...n)}}function hn(t,...e){if(kr.logLevel<=G.ERROR){const n=e.map(Vd);kr.error(`Firestore (${Oi}): ${t}`,...n)}}function hm(t,...e){if(kr.logLevel<=G.WARN){const n=e.map(Vd);kr.warn(`Firestore (${Oi}): ${t}`,...n)}}function Vd(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function b(t="Unexpected state"){const e=`FIRESTORE (${Oi}) INTERNAL ASSERTION FAILED: `+t;throw hn(e),new Error(e)}function ee(t,e){t||b()}function F(t,e){return t}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class wk{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ek{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class Sk{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new bn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new bn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ee(typeof r.accessToken=="string"),new wk(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string"),new it(e)}}class _k{constructor(e,n,r){this.type="FirstParty",this.user=it.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class Tk{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new _k(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ik{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ee(typeof n.token=="string"),this.p=n.token,new kk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Ck(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class N0{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Ck(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function X(t,e){return t<e?-1:t>e?1:0}function gi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Te{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Te(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new Te(0,0))}static max(){return new z(new Te(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Us{constructor(e,n,r){n===void 0?n=0:n>e.length&&b(),r===void 0?r=e.length-n:r>e.length-n&&b(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Us.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Us?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ae extends Us{construct(e,n,r){return new ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ae(n)}static emptyPath(){return new ae([])}}const Nk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends Us{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return Nk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new M(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new M(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new M(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
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
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(ae.fromString(e))}static fromName(e){return new L(ae.fromString(e).popFirst(5))}static empty(){return new L(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new ae(e.slice()))}}function Ak(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=z.fromTimestamp(r===1e9?new Te(n+1,0):new Te(n,r));return new Bn(i,L.empty(),e)}function Dk(t){return new Bn(t.readTime,t.key,-1)}class Bn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Bn(z.min(),L.empty(),-1)}static max(){return new Bn(z.max(),L.empty(),-1)}}function Rk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:X(t.largestBatchId,e.largestBatchId))}/**
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
 */const Pk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ok{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function lo(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==Pk)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,r)=>{n(e)})}static reject(e){return new _((n,r)=>{r(e)})}static waitFor(e){return new _((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=_.resolve(!1);for(const r of e)n=n.next(i=>i?_.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new _((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new _((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function uo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Bd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
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
 */function dm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function A0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Bd.ot=-1;class Ie{constructor(e,n){this.comparator=e,this.root=n||Me.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Me.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jo(this.root,e,this.comparator,!1)}getReverseIterator(){return new jo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jo(this.root,e,this.comparator,!0)}}class jo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Me{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Me.RED,this.left=i!=null?i:Me.EMPTY,this.right=s!=null?s:Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Me(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Me.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1;Me.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Me(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ke{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new fm(this.data.getIterator())}getIteratorFrom(e){return new fm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ke(this.comparator);return n.data=e,n}}class fm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class kt{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new kt([])}unionWith(e){let n=new ke(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ze(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ze.EMPTY_BYTE_STRING=new ze("");const xk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zn(t){if(ee(!!t),typeof t=="string"){let e=0;const n=xk.exec(t);if(ee(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ve(t.seconds),nanos:ve(t.nanos)}}function ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yi(t){return typeof t=="string"?ze.fromBase64String(t):ze.fromUint8Array(t)}/**
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
 */function D0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function R0(t){const e=t.mapValue.fields.__previous_value__;return D0(e)?R0(e):e}function bs(t){const e=zn(t.mapValue.fields.__local_write_time__.timestampValue);return new Te(e.seconds,e.nanos)}/**
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
 */class Mk{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class vi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new vi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof vi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Fl(t){return t==null}function Xa(t){return t===0&&1/t==-1/0}function Lk(t){return typeof t=="number"&&Number.isInteger(t)&&!Xa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ho={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ir(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?D0(t)?4:$k(t)?9007199254740991:10:b()}function Wt(t,e){if(t===e)return!0;const n=Ir(t);if(n!==Ir(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bs(t).isEqual(bs(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=zn(r.timestampValue),o=zn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return yi(r.bytesValue).isEqual(yi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ve(r.geoPointValue.latitude)===ve(i.geoPointValue.latitude)&&ve(r.geoPointValue.longitude)===ve(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ve(r.integerValue)===ve(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ve(r.doubleValue),o=ve(i.doubleValue);return s===o?Xa(s)===Xa(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return gi(t.arrayValue.values||[],e.arrayValue.values||[],Wt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(dm(s)!==dm(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Wt(s[a],o[a])))return!1;return!0}(t,e);default:return b()}}function Fs(t,e){return(t.values||[]).find(n=>Wt(n,e))!==void 0}function wi(t,e){if(t===e)return 0;const n=Ir(t),r=Ir(e);if(n!==r)return X(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return X(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ve(i.integerValue||i.doubleValue),a=ve(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return pm(t.timestampValue,e.timestampValue);case 4:return pm(bs(t),bs(e));case 5:return X(t.stringValue,e.stringValue);case 6:return function(i,s){const o=yi(i),a=yi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=X(o[l],a[l]);if(u!==0)return u}return X(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=X(ve(i.latitude),ve(s.latitude));return o!==0?o:X(ve(i.longitude),ve(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=wi(o[l],a[l]);if(u)return u}return X(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Ho.mapValue&&s===Ho.mapValue)return 0;if(i===Ho.mapValue)return 1;if(s===Ho.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=X(a[c],u[c]);if(h!==0)return h;const d=wi(o[a[c]],l[u[c]]);if(d!==0)return d}return X(a.length,u.length)}(t.mapValue,e.mapValue);default:throw b()}}function pm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return X(t,e);const n=zn(t),r=zn(e),i=X(n.seconds,r.seconds);return i!==0?i:X(n.nanos,r.nanos)}function ni(t){return sh(t)}function sh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=zn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?yi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=sh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${sh(r.fields[a])}`;return s+"}"}(t.mapValue):b();var e,n}function oh(t){return!!t&&"integerValue"in t}function zd(t){return!!t&&"arrayValue"in t}function mm(t){return!!t&&"nullValue"in t}function gm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function aa(t){return!!t&&"mapValue"in t}function cs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=cs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=cs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $k(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ot{constructor(e){this.value=e}static empty(){return new ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!aa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=cs(n)}setAll(e){let n=qe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=cs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());aa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];aa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Rr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ot(cs(this.value))}}function P0(t){const e=[];return Rr(t.fields,(n,r)=>{const i=new qe([n]);if(aa(r)){const s=P0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new kt(e)}/**
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
 */class Le{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Le(e,0,z.min(),z.min(),ot.empty(),0)}static newFoundDocument(e,n,r){return new Le(e,1,n,z.min(),r,0)}static newNoDocument(e,n){return new Le(e,2,n,z.min(),ot.empty(),0)}static newUnknownDocument(e,n){return new Le(e,3,n,z.min(),ot.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Le(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Uk{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ut=null}}function ym(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Uk(t,e,n,r,i,s,o)}function jd(t){const e=F(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+ni(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Fl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ni(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ni(r)).join(",")),e.ut=n}return e.ut}function bk(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${ni(r.value)}`;var r}).join(", ")}]`),Fl(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ni(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ni(n)).join(",")),`Target(${e})`}function Hd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Kk(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Wt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wm(t.startAt,e.startAt)&&wm(t.endAt,e.endAt)}function ah(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class lt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new Fk(e,n,r):n==="array-contains"?new zk(e,r):n==="in"?new jk(e,r):n==="not-in"?new Hk(e,r):n==="array-contains-any"?new Wk(e,r):new lt(e,n,r)}static ct(e,n,r){return n==="in"?new Vk(e,r):new Bk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(wi(n,this.value)):n!==null&&Ir(this.value)===Ir(n)&&this.at(wi(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Fk extends lt{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.at(n)}}class Vk extends lt{constructor(e,n){super(e,"in",n),this.keys=O0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Bk extends lt{constructor(e,n){super(e,"not-in",n),this.keys=O0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function O0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class zk extends lt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zd(n)&&Fs(n.arrayValue,this.value)}}class jk extends lt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Fs(this.value.arrayValue,n)}}class Hk extends lt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Fs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Fs(this.value.arrayValue,n)}}class Wk extends lt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Fs(this.value.arrayValue,r))}}class Ya{constructor(e,n){this.position=e,this.inclusive=n}}class ri{constructor(e,n="asc"){this.field=e,this.dir=n}}function Kk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function vm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=wi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function wm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class co{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.lt=null,this.ft=null,this.startAt,this.endAt}}function qk(t,e,n,r,i,s,o,a){return new co(t,e,n,r,i,s,o,a)}function Vl(t){return new co(t)}function Em(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function x0(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function M0(t){for(const e of t.filters)if(e.ht())return e.field;return null}function Gk(t){return t.collectionGroup!==null}function Vs(t){const e=F(t);if(e.lt===null){e.lt=[];const n=M0(e),r=x0(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new ri(n)),e.lt.push(new ri(qe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.lt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new ri(qe.keyField(),s))}}}return e.lt}function dn(t){const e=F(t);if(!e.ft)if(e.limitType==="F")e.ft=ym(e.path,e.collectionGroup,Vs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Vs(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ri(s.field,o))}const r=e.endAt?new Ya(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ya(e.startAt.position,e.startAt.inclusive):null;e.ft=ym(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.ft}function Ja(t,e,n){return new co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ho(t,e){return Hd(dn(t),dn(e))&&t.limitType===e.limitType}function L0(t){return`${jd(dn(t))}|lt:${t.limitType}`}function lh(t){return`Query(target=${bk(dn(t))}; limitType=${t.limitType})`}function Wd(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):L.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=vm(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Vs(n),r)||n.endAt&&!function(i,s,o){const a=vm(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Vs(n),r))}(t,e)}function Qk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $0(t){return(e,n)=>{let r=!1;for(const i of Vs(t)){const s=Xk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Xk(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?wi(a,l):b()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}/**
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
 */function U0(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xa(e)?"-0":e}}function b0(t){return{integerValue:""+t}}function Yk(t,e){return Lk(e)?b0(e):U0(t,e)}/**
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
 */class Bl{constructor(){this._=void 0}}function Jk(t,e,n){return t instanceof Za?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Bs?V0(t,e):t instanceof zs?B0(t,e):function(r,i){const s=F0(r,i),o=Sm(s)+Sm(r._t);return oh(s)&&oh(r._t)?b0(o):U0(r.wt,o)}(t,e)}function Zk(t,e,n){return t instanceof Bs?V0(t,e):t instanceof zs?B0(t,e):n}function F0(t,e){return t instanceof el?oh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Za extends Bl{}class Bs extends Bl{constructor(e){super(),this.elements=e}}function V0(t,e){const n=z0(e);for(const r of t.elements)n.some(i=>Wt(i,r))||n.push(r);return{arrayValue:{values:n}}}class zs extends Bl{constructor(e){super(),this.elements=e}}function B0(t,e){let n=z0(e);for(const r of t.elements)n=n.filter(i=>!Wt(i,r));return{arrayValue:{values:n}}}class el extends Bl{constructor(e,n){super(),this.wt=e,this._t=n}}function Sm(t){return ve(t.integerValue||t.doubleValue)}function z0(t){return zd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function eI(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Bs&&r instanceof Bs||n instanceof zs&&r instanceof zs?gi(n.elements,r.elements,Wt):n instanceof el&&r instanceof el?Wt(n._t,r._t):n instanceof Za&&r instanceof Za}(t.transform,e.transform)}class tI{constructor(e,n){this.version=e,this.transformResults=n}}class Bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bt}static exists(e){return new Bt(void 0,e)}static updateTime(e){return new Bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function la(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zl{}function j0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new W0(t.key,Bt.none()):new fo(t.key,t.data,Bt.none());{const n=t.data,r=ot.empty();let i=new ke(qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Yn(t.key,r,new kt(i.toArray()),Bt.none())}}function nI(t,e,n){t instanceof fo?function(r,i,s){const o=r.value.clone(),a=Tm(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Yn?function(r,i,s){if(!la(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Tm(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(H0(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function hs(t,e,n,r){return t instanceof fo?function(i,s,o,a){if(!la(i.precondition,s))return o;const l=i.value.clone(),u=km(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Yn?function(i,s,o,a){if(!la(i.precondition,s))return o;const l=km(i.fieldTransforms,a,s),u=s.data;return u.setAll(H0(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return la(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function rI(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=F0(r.transform,i||null);s!=null&&(n===null&&(n=ot.empty()),n.set(r.field,s))}return n||null}function _m(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&gi(n,r,(i,s)=>eI(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class fo extends zl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Yn extends zl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function H0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Tm(t,e,n){const r=new Map;ee(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Zk(o,a,n[i]))}return r}function km(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Jk(s,o,e))}return r}class W0 extends zl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iI extends zl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class sI{constructor(e){this.count=e}}/**
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
 */var ye,K;function oI(t){switch(t){default:return b();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function K0(t){if(t===void 0)return hn("GRPC error has no .code"),E.UNKNOWN;switch(t){case ye.OK:return E.OK;case ye.CANCELLED:return E.CANCELLED;case ye.UNKNOWN:return E.UNKNOWN;case ye.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case ye.INTERNAL:return E.INTERNAL;case ye.UNAVAILABLE:return E.UNAVAILABLE;case ye.UNAUTHENTICATED:return E.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case ye.NOT_FOUND:return E.NOT_FOUND;case ye.ALREADY_EXISTS:return E.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return E.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case ye.ABORTED:return E.ABORTED;case ye.OUT_OF_RANGE:return E.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return E.UNIMPLEMENTED;case ye.DATA_LOSS:return E.DATA_LOSS;default:return b()}}(K=ye||(ye={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class xi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Rr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return A0(this.inner)}size(){return this.innerSize}}/**
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
 */const aI=new Ie(L.comparator);function fn(){return aI}const q0=new Ie(L.comparator);function Yi(...t){let e=q0;for(const n of t)e=e.insert(n.key,n);return e}function G0(t){let e=q0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function lr(){return ds()}function Q0(){return ds()}function ds(){return new xi(t=>t.toString(),(t,e)=>t.isEqual(e))}const lI=new Ie(L.comparator),uI=new ke(L.comparator);function H(...t){let e=uI;for(const n of t)e=e.add(n);return e}const cI=new ke(X);function X0(){return cI}/**
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
 */class jl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,po.createSynthesizedTargetChangeForCurrentChange(e,n)),new jl(z.min(),r,X0(),fn(),H())}}class po{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new po(ze.EMPTY_BYTE_STRING,n,H(),H(),H())}}/**
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
 */class ua{constructor(e,n,r,i){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=i}}class Y0{constructor(e,n){this.targetId=e,this.It=n}}class J0{constructor(e,n,r=ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Im{constructor(){this.Tt=0,this.Et=Nm(),this.At=ze.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=H(),n=H(),r=H();return this.Et.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:b()}}),new po(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=Nm()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class hI{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=fn(),this.Bt=Cm(),this.Lt=new ke(X)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Mt(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:b()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,i)=>{this.jt(i)&&n(i)})}zt(e){const n=e.targetId,r=e.It.count,i=this.Ht(n);if(i){const s=i.target;if(ah(s))if(r===0){const o=new L(s.path);this.Kt(n,o,Le.newNoDocument(o,z.min()))}else ee(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((s,o)=>{const a=this.Ht(o);if(a){if(s.current&&ah(a.target)){const l=new L(a.target.path);this.$t.get(l)!==null||this.Xt(o,l)||this.Kt(o,l,Le.newNoDocument(l,e))}s.vt&&(n.set(o,s.St()),s.Dt())}});let r=H();this.Bt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ht(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.$t.forEach((s,o)=>o.setReadTime(e));const i=new jl(e,n,this.Lt,this.$t,r);return this.$t=fn(),this.Bt=Cm(),this.Lt=new ke(X),i}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const i=this.Qt(e);this.Xt(e,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new Im,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new ke(X),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new Im),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function Cm(){return new Ie(L.comparator)}function Nm(){return new Ie(L.comparator)}/**
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
 */const dI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),fI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class pI{constructor(e,n){this.databaseId=e,this.dt=n}}function tl(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Z0(t,e){return t.dt?e.toBase64():e.toUint8Array()}function mI(t,e){return tl(t,e.toTimestamp())}function rn(t){return ee(!!t),z.fromTimestamp(function(e){const n=zn(e);return new Te(n.seconds,n.nanos)}(t))}function Kd(t,e){return function(n){return new ae(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function ew(t){const e=ae.fromString(t);return ee(rw(e)),e}function uh(t,e){return Kd(t.databaseId,e.path)}function Wu(t,e){const n=ew(e);if(n.get(1)!==t.databaseId.projectId)throw new M(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(tw(n))}function ch(t,e){return Kd(t.databaseId,e)}function gI(t){const e=ew(t);return e.length===4?ae.emptyPath():tw(e)}function hh(t){return new ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function tw(t){return ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Am(t,e,n){return{name:uh(t,e),fields:n.value.mapValue.fields}}function yI(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.dt?(ee(u===void 0||typeof u=="string"),ze.fromBase64String(u||"")):(ee(u===void 0||u instanceof Uint8Array),ze.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?E.UNKNOWN:K0(l.code);return new M(u,l.message||"")}(o);n=new J0(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Wu(t,r.document.name),s=rn(r.document.updateTime),o=new ot({mapValue:{fields:r.document.fields}}),a=Le.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new ua(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Wu(t,r.document),s=r.readTime?rn(r.readTime):z.min(),o=Le.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ua([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Wu(t,r.document),s=r.removedTargetIds||[];n=new ua([],s,i,null)}else{if(!("filter"in e))return b();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new sI(i),o=r.targetId;n=new Y0(o,s)}}return n}function vI(t,e){let n;if(e instanceof fo)n={update:Am(t,e.key,e.value)};else if(e instanceof W0)n={delete:uh(t,e.key)};else if(e instanceof Yn)n={update:Am(t,e.key,e.data),updateMask:AI(e.fieldMask)};else{if(!(e instanceof iI))return b();n={verify:uh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Za)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Bs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof zs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof el)return{fieldPath:s.field.canonicalString(),increment:o._t};throw b()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:mI(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:b()}(t,e.precondition)),n}function wI(t,e){return t&&t.length>0?(ee(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?rn(r.updateTime):rn(i);return s.isEqual(z.min())&&(s=rn(i)),new tI(s,r.transformResults||[])}(n,e))):[]}function EI(t,e){return{documents:[ch(t,e.path)]}}function SI(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ch(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ch(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(gm(h.value))return{unaryFilter:{field:xr(h.field),op:"IS_NAN"}};if(mm(h.value))return{unaryFilter:{field:xr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(gm(h.value))return{unaryFilter:{field:xr(h.field),op:"IS_NOT_NAN"}};if(mm(h.value))return{unaryFilter:{field:xr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xr(h.field),op:II(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:xr(c.field),direction:kI(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.dt||Fl(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function _I(t){let e=gI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ee(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=nw(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new ri(qr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Fl(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Ya(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Ya(d,h)}(n.endAt)),qk(e,i,o,s,a,"F",l,u)}function TI(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function nw(t){return t?t.unaryFilter!==void 0?[NI(t)]:t.fieldFilter!==void 0?[CI(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>nw(e)).reduce((e,n)=>e.concat(n)):b():[]}function kI(t){return dI[t]}function II(t){return fI[t]}function xr(t){return{fieldPath:t.canonicalString()}}function qr(t){return qe.fromServerFormat(t.fieldPath)}function CI(t){return lt.create(qr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(t.fieldFilter.op),t.fieldFilter.value)}function NI(t){switch(t.unaryFilter.op){case"IS_NAN":const e=qr(t.unaryFilter.field);return lt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=qr(t.unaryFilter.field);return lt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=qr(t.unaryFilter.field);return lt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=qr(t.unaryFilter.field);return lt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return b()}}function AI(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function rw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class DI{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&nI(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=hs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=hs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Q0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=j0(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),H())}isEqual(e){return this.batchId===e.batchId&&gi(this.mutations,e.mutations,(n,r)=>_m(n,r))&&gi(this.baseMutations,e.baseMutations,(n,r)=>_m(n,r))}}class qd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ee(e.mutations.length===r.length);let i=lI;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new qd(e,n,r,i)}}/**
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
 */class RI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class dr{constructor(e,n,r,i,s=z.min(),o=z.min(),a=ze.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class PI{constructor(e){this.ne=e}}function OI(t){const e=_I({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ja(e,e.limit,"L"):e}/**
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
 */class xI{constructor(){this.ze=new MI}addToCollectionParentIndex(e,n){return this.ze.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(Bn.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(Bn.min())}updateCollectionGroup(e,n,r){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class MI{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ke(ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ke(ae.comparator)).toArray()}}/**
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
 */class Ei{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Ei(0)}static Rn(){return new Ei(-1)}}/**
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
 */class LI{constructor(){this.changes=new xi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Le.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?_.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class $I{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class UI{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&hs(r.mutation,i,kt.empty(),Te.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,n,r=H()){const i=lr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Yi();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=lr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,H()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=fn();const o=ds(),a=ds();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Yn)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),hs(c.mutation,u,c.mutation.getFieldMask(),Te.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new $I(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ds();let i=new Ie((o,a)=>o-a),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||kt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||H()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=Q0();c.forEach(d=>{if(!s.has(d)){const g=j0(n.get(d),r.get(d));g!==null&&h.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return L.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Gk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):_.resolve(lr());let a=-1,l=s;return o.next(u=>_.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?_.resolve():this.getBaseDocument(e,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,H())).next(c=>({batchId:a,changes:G0(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=Yi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Yi();return this.indexManager.getCollectionParents(e,i).next(o=>_.forEach(o,a=>{const l=function(u,c){return new co(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,Le.newInvalidDocument(u)))});let o=Yi();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&hs(u.mutation,l,kt.empty(),Te.now()),Wd(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):_.resolve(Le.newInvalidDocument(n))}}/**
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
 */class bI{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return _.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:rn(r.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:OI(r.bundledQuery),readTime:rn(r.readTime)}}(n)),_.resolve()}}/**
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
 */class FI{constructor(){this.overlays=new Ie(L.comparator),this.Xn=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const r=lr();return _.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ie(e,n,s)}),_.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Xn.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Xn.delete(r)),_.resolve()}getOverlaysForCollection(e,n,r){const i=lr(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return _.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ie((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=lr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=lr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return _.resolve(a)}ie(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(r.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new RI(n,r));let s=this.Xn.get(n);s===void 0&&(s=H(),this.Xn.set(n,s)),this.Xn.set(n,s.add(r.key))}}/**
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
 */class Gd{constructor(){this.Zn=new ke(Ne.ts),this.es=new ke(Ne.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new Ne(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new Ne(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new L(new ae([])),r=new Ne(n,e),i=new Ne(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new L(new ae([])),r=new Ne(n,e),i=new Ne(n,e+1);let s=H();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ne(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ne{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return L.comparator(e.key,n.key)||X(e.ls,n.ls)}static ns(e,n){return X(e.ls,n.ls)||L.comparator(e.key,n.key)}}/**
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
 */class VI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new ke(Ne.ts)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new DI(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new Ne(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ws(r),s=i<0?0:i;return _.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ne(n,0),i=new Ne(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const a=this._s(o.ls);s.push(a)}),_.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ke(X);return n.forEach(i=>{const s=new Ne(i,0),o=new Ne(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{r=r.add(a.ls)})}),_.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new Ne(new L(s),0);let a=new ke(X);return this.ds.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.ls)),!0)},o),_.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ee(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return _.forEach(n.mutations,i=>{const s=new Ne(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new Ne(n,0),i=this.ds.firstAfterOrEqual(r);return _.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class BI{constructor(e){this.ps=e,this.docs=new Ie(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return _.resolve(r?r.document.mutableCopy():Le.newInvalidDocument(n))}getEntries(e,n){let r=fn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Le.newInvalidDocument(i))}),_.resolve(r)}getAllFromCollection(e,n,r){let i=fn();const s=new L(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Rk(Dk(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return _.resolve(i)}getAllFromCollectionGroup(e,n,r,i){b()}Is(e,n){return _.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new zI(this)}getSize(e){return _.resolve(this.size)}}class zI extends LI{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(e,i)):this.zn.removeEntry(r)}),_.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
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
 */class jI{constructor(e){this.persistence=e,this.Ts=new xi(n=>jd(n),Hd),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Es=0,this.As=new Gd,this.targetCount=0,this.Rs=Ei.An()}forEachTarget(e,n){return this.Ts.forEach((r,i)=>n(i)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),_.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Ei(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.vn(n),_.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),_.waitFor(s).next(()=>i)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return _.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),_.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),_.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),_.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return _.resolve(r)}containsKey(e,n){return _.resolve(this.As.containsKey(n))}}/**
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
 */class HI{constructor(e,n){this.bs={},this.overlays={},this.Ps=new Bd(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new jI(this),this.indexManager=new xI,this.remoteDocumentCache=function(r){return new BI(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new PI(n),this.Ds=new bI(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new FI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new VI(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){O("MemoryPersistence","Starting transaction:",e);const i=new WI(this.Ps.next());return this.referenceDelegate.Cs(),r(i).next(s=>this.referenceDelegate.xs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ns(e,n){return _.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class WI extends Ok{constructor(e){super(),this.currentSequenceNumber=e}}class Qd{constructor(e){this.persistence=e,this.ks=new Gd,this.Ms=null}static Os(e){return new Qd(e)}get Fs(){if(this.Ms)return this.Ms;throw b()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),_.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),_.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Fs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Fs,r=>{const i=L.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i,z.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return _.or([()=>_.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
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
 */class Xd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=i}static Vi(e,n){let r=H(),i=H();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Xd(e,n.fromCache,r,i)}}/**
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
 */class KI{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ci(e,n).next(s=>s||this.xi(e,n,i,r)).next(s=>s||this.Ni(e,n))}Ci(e,n){if(Em(n))return _.resolve(null);let r=dn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ja(n,null,"F"),r=dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=H(...s);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ki(n,a);return this.Mi(n,u,o,l.readTime)?this.Ci(e,Ja(n,null,"F")):this.Oi(e,u,n,l)}))})))}xi(e,n,r,i){return Em(n)||i.isEqual(z.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(s=>{const o=this.ki(n,s);return this.Mi(n,o,r,i)?this.Ni(e,n):(cm()<=G.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),lh(n)),this.Oi(e,o,n,Ak(i,-1)))})}ki(e,n){let r=new ke($0(e));return n.forEach((i,s)=>{Wd(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ni(e,n){return cm()<=G.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",lh(n)),this.Di.getDocumentsMatchingQuery(e,n,Bn.min())}Oi(e,n,r,i){return this.Di.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class qI{constructor(e,n,r,i){this.persistence=e,this.Fi=n,this.wt=i,this.$i=new Ie(X),this.Bi=new xi(s=>jd(s),Hd),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UI(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function GI(t,e,n,r){return new qI(t,e,n,r)}async function iw(t,e){const n=F(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=H();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ki:u,removedBatchIds:o,addedBatchIds:a}))})})}function QI(t,e){const n=F(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=_.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(y=>{const v=l.docVersions.get(g);ee(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=H();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function sw(t){const e=F(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function XI(t,e){const n=F(t),r=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Vs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(s,c.addedDocuments,h)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(ze.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(y,v,D){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(d,g,c)&&a.push(n.Vs.updateTargetData(s,g))});let l=fn(),u=H();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(YI(s,o,e.documentUpdates).next(c=>{l=c.Gi,u=c.Qi})),!r.isEqual(z.min())){const c=n.Vs.getLastRemoteSnapshotVersion(s).next(h=>n.Vs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return _.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.$i=i,s))}function YI(t,e,n){let r=H(),i=H();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=fn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Gi:o,Qi:i}})}function JI(t,e){const n=F(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ZI(t,e){const n=F(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Vs.getTargetData(r,e).next(s=>s?(i=s,_.resolve(i)):n.Vs.allocateTargetId(r).next(o=>(i=new dr(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.$i.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function dh(t,e,n){const r=F(t),i=r.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!uo(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(i.target)}function Dm(t,e,n){const r=F(t);let i=z.min(),s=H();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=F(a),h=c.Bi.get(u);return h!==void 0?_.resolve(c.$i.get(h)):c.Vs.getTargetData(l,u)}(r,o,dn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?i:z.min(),n?s:H())).next(a=>(eC(r,Qk(e),a),{documents:a,ji:s})))}function eC(t,e,n){let r=z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Li.set(e,r)}class Rm{constructor(){this.activeTargetIds=X0()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tC{constructor(){this.Fr=new Rm,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new Rm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class nC{Br(e){}shutdown(){}}/**
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
 */class Pm{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const rC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class iC{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
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
 */class sC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,i,s){const o=this.oo(e,n);O("RestConnection","Sending: ",o,r);const a={};return this.uo(a,i,s),this.co(e,o,a,r).then(l=>(O("RestConnection","Received: ",l),l),l=>{throw hm("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}ao(e,n,r,i,s,o){return this.ro(e,n,r,i,s)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Oi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}oo(e,n){const r=rC[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,i){return new Promise((s,o)=>{const a=new vk;a.listenOnce(mk.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Hu.NO_ERROR:const u=a.getResponseJson();O("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Hu.TIMEOUT:O("Connection",'RPC "'+e+'" timed out'),o(new M(E.DEADLINE_EXCEEDED,"Request time out"));break;case Hu.HTTP_ERROR:const c=a.getStatus();if(O("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(y)>=0?y:E.UNKNOWN}(h.status);o(new M(d,h.message))}else o(new M(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new M(E.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{O("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}ho(e,n,r){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=fk(),o=pk(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new yk({})),this.uo(a.initMessageHeaders,n,r),yv()||wv()||XS()||Ev()||YS()||vv()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");O("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new iC({jr:y=>{h?O("Connection","Not sending because WebChannel is closed:",y):(c||(O("Connection","Opening WebChannel transport."),u.open(),c=!0),O("Connection","WebChannel sending:",y),u.send(y))},Wr:()=>u.close()}),g=(y,v,D)=>{y.listen(v,p=>{try{D(p)}catch(f){setTimeout(()=>{throw f},0)}})};return g(u,zo.EventType.OPEN,()=>{h||O("Connection","WebChannel transport opened.")}),g(u,zo.EventType.CLOSE,()=>{h||(h=!0,O("Connection","WebChannel transport closed"),d.eo())}),g(u,zo.EventType.ERROR,y=>{h||(h=!0,hm("Connection","WebChannel transport errored:",y),d.eo(new M(E.UNAVAILABLE,"The operation could not be completed")))}),g(u,zo.EventType.MESSAGE,y=>{var v;if(!h){const D=y.data[0];ee(!!D);const p=D,f=p.error||((v=p[0])===null||v===void 0?void 0:v.error);if(f){O("Connection","WebChannel received error:",f);const m=f.status;let w=function(N){const A=ye[N];if(A!==void 0)return K0(A)}(m),T=f.message;w===void 0&&(w=E.INTERNAL,T="Unknown error status: "+m+" with message "+f.message),h=!0,d.eo(new M(w,T)),u.close()}else O("Connection","WebChannel received:",D),d.no(D)}}),g(o,gk.STAT_EVENT,y=>{y.stat===lm.PROXY?O("Connection","Detected buffering proxy"):y.stat===lm.NOPROXY&&O("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}function Ku(){return typeof document!="undefined"?document:null}/**
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
 */function Hl(t){return new pI(t,!0)}class ow{constructor(e,n,r=1e3,i=1.5,s=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class aw{constructor(e,n,r,i,s,o,a,l){this.js=e,this.Ao=r,this.Ro=i,this.bo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new ow(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(hn(n.toString()),hn("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Po===n&&this.Uo(r,i)},r=>{e(()=>{const i=new M(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(i)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{r(()=>this.qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oC extends aw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.wt=s}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=yI(this.wt,e),r=function(i){if(!("targetChange"in i))return z.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?z.min():s.readTime?rn(s.readTime):z.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=hh(this.wt),n.addTarget=function(i,s){let o;const a=s.target;return o=ah(a)?{documents:EI(i,a)}:{query:SI(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Z0(i,s.resumeToken):s.snapshotVersion.compareTo(z.min())>0&&(o.readTime=tl(i,s.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=TI(this.wt,e);r&&(n.labels=r),this.Oo(n)}jo(e){const n={};n.database=hh(this.wt),n.removeTarget=e,this.Oo(n)}}class aC extends aw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.wt=s,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=wI(e.writeResults,e.commitTime),r=rn(e.commitTime);return this.listener.Jo(r,n)}return ee(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=hh(this.wt),this.Oo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>vI(this.wt,r))};this.Oo(n)}}/**
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
 */class lC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new M(E.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ro(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(E.UNKNOWN,i.toString())})}ao(e,n,r,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.bo.ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(E.UNKNOWN,s.toString())})}terminate(){this.Zo=!0}}class uC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(hn(n),this.su=!1):O("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
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
 */class cC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br(o=>{r.enqueueAndForget(async()=>{Pr(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=F(a);l.lu.add(4),await mo(l),l._u.set("Unknown"),l.lu.delete(4),await Wl(l)}(this))})}),this._u=new uC(r,i)}}async function Wl(t){if(Pr(t))for(const e of t.fu)await e(!0)}async function mo(t){for(const e of t.fu)await e(!1)}function lw(t,e){const n=F(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Zd(n)?Jd(n):Mi(n).Co()&&Yd(n,e))}function uw(t,e){const n=F(t),r=Mi(n);n.hu.delete(e),r.Co()&&cw(n,e),n.hu.size===0&&(r.Co()?r.ko():Pr(n)&&n._u.set("Unknown"))}function Yd(t,e){t.wu.Nt(e.targetId),Mi(t).Qo(e)}function cw(t,e){t.wu.Nt(e),Mi(t).jo(e)}function Jd(t){t.wu=new hI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Mi(t).start(),t._u.iu()}function Zd(t){return Pr(t)&&!Mi(t).Do()&&t.hu.size>0}function Pr(t){return F(t).lu.size===0}function hw(t){t.wu=void 0}async function hC(t){t.hu.forEach((e,n)=>{Yd(t,e)})}async function dC(t,e){hw(t),Zd(t)?(t._u.uu(e),Jd(t)):t._u.set("Unknown")}async function fC(t,e,n){if(t._u.set("Online"),e instanceof J0&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await nl(t,r)}else if(e instanceof ua?t.wu.Ut(e):e instanceof Y0?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(z.min()))try{const r=await sw(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.wu.Yt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.hu.get(l);u&&i.hu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.hu.get(a);if(!l)return;i.hu.set(a,l.withResumeToken(ze.EMPTY_BYTE_STRING,l.snapshotVersion)),cw(i,a);const u=new dr(l.target,a,1,l.sequenceNumber);Yd(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await nl(t,r)}}async function nl(t,e,n){if(!uo(e))throw e;t.lu.add(1),await mo(t),t._u.set("Offline"),n||(n=()=>sw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Wl(t)})}function dw(t,e){return e().catch(n=>nl(t,n,e))}async function Kl(t){const e=F(t),n=jn(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;pC(e);)try{const i=await JI(e.localStore,r);if(i===null){e.au.length===0&&n.ko();break}r=i.batchId,mC(e,i)}catch(i){await nl(e,i)}fw(e)&&pw(e)}function pC(t){return Pr(t)&&t.au.length<10}function mC(t,e){t.au.push(e);const n=jn(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function fw(t){return Pr(t)&&!jn(t).Do()&&t.au.length>0}function pw(t){jn(t).start()}async function gC(t){jn(t).Xo()}async function yC(t){const e=jn(t);for(const n of t.au)e.Ho(n.mutations)}async function vC(t,e,n){const r=t.au.shift(),i=qd.from(r,e,n);await dw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Kl(t)}async function wC(t,e){e&&jn(t).zo&&await async function(n,r){if(i=r.code,oI(i)&&i!==E.ABORTED){const s=n.au.shift();jn(n).No(),await dw(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Kl(n)}var i}(t,e),fw(t)&&pw(t)}async function Om(t,e){const n=F(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=Pr(n);n.lu.add(3),await mo(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Wl(n)}async function EC(t,e){const n=F(t);e?(n.lu.delete(2),await Wl(n)):e||(n.lu.add(2),await mo(n),n._u.set("Unknown"))}function Mi(t){return t.mu||(t.mu=function(e,n,r){const i=F(e);return i.tu(),new oC(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,r)}(t.datastore,t.asyncQueue,{zr:hC.bind(null,t),Jr:dC.bind(null,t),Go:fC.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Zd(t)?Jd(t):t._u.set("Unknown")):(await t.mu.stop(),hw(t))})),t.mu}function jn(t){return t.gu||(t.gu=function(e,n,r){const i=F(e);return i.tu(),new aC(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,r)}(t.datastore,t.asyncQueue,{zr:gC.bind(null,t),Jr:wC.bind(null,t),Yo:yC.bind(null,t),Jo:vC.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await Kl(t)):(await t.gu.stop(),t.au.length>0&&(O("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
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
 */class ef{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ef(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tf(t,e){if(hn("AsyncQueue",`${e}: ${t}`),uo(t))return new M(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ii{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=Yi(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new ii(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ii)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ii;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class xm{constructor(){this.yu=new Ie(L.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):b():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Si{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Si(e,n,ii.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ho(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class SC{constructor(){this.Iu=void 0,this.listeners=[]}}class _C{constructor(){this.queries=new xi(e=>L0(e),ho),this.onlineState="Unknown",this.Tu=new Set}}async function mw(t,e){const n=F(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new SC),i)try{s.Iu=await n.onListen(r)}catch(o){const a=tf(o,`Initialization of query '${lh(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&nf(n)}async function gw(t,e){const n=F(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function TC(t,e){const n=F(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Au(i)&&(r=!0);o.Iu=i}}r&&nf(n)}function kC(t,e,n){const r=F(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function nf(t){t.Tu.forEach(e=>{e.next()})}class yw{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Si(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=Si.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
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
 */class vw{constructor(e){this.key=e}}class ww{constructor(e){this.key=e}}class IC{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=H(),this.mutatedKeys=H(),this.Lu=$0(e),this.Uu=new ii(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new xm,i=n?n.Uu:this.Uu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=Wd(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let D=!1;d&&g?d.data.isEqual(g.data)?y!==v&&(r.track({type:3,doc:g}),D=!0):this.Qu(d,g)||(r.track({type:2,doc:g}),D=!0,(l&&this.Lu(g,l)>0||u&&this.Lu(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),D=!0):d&&!g&&(r.track({type:1,doc:d}),D=!0,(l||u)&&(a=!0)),D&&(g?(o=o.add(g),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Uu:o,Gu:r,Mi:a,mutatedKeys:s}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const s=e.Gu.pu();s.sort((u,c)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return g(h)-g(d)}(u.type,c.type)||this.Lu(u.doc,c.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,l=a!==this.$u;return this.$u=a,s.length!==0||l?{snapshot:new Si(this.query,e.Uu,i,s,e.mutatedKeys,a===0,l,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new xm,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=H(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new ww(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new vw(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=H();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return Si.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class CC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class NC{constructor(e){this.key=e,this.Xu=!1}}class AC{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new xi(a=>L0(a),ho),this.ec=new Map,this.nc=new Set,this.sc=new Ie(L.comparator),this.ic=new Map,this.rc=new Gd,this.oc={},this.uc=new Map,this.cc=Ei.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function DC(t,e){const n=FC(t);let r,i;const s=n.tc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const o=await ZI(n.localStore,dn(e));n.isPrimaryClient&&lw(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await RC(n,e,r,a==="current")}return i}async function RC(t,e,n,r){t.hc=(c,h,d)=>async function(g,y,v,D){let p=y.view.Ku(v);p.Mi&&(p=await Dm(g.localStore,y.query,!1).then(({documents:w})=>y.view.Ku(w,p)));const f=D&&D.targetChanges.get(y.targetId),m=y.view.applyChanges(p,g.isPrimaryClient,f);return Lm(g,y.targetId,m.zu),m.snapshot}(t,c,h,d);const i=await Dm(t.localStore,e,!0),s=new IC(e,i.ji),o=s.Ku(i.documents),a=po.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);Lm(t,n,l.zu);const u=new CC(e,n,s);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),l.snapshot}async function PC(t,e){const n=F(t),r=n.tc.get(e),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter(s=>!ho(s,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await dh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),uw(n.remoteStore,r.targetId),fh(n,r.targetId)}).catch(lo)):(fh(n,r.targetId),await dh(n.localStore,r.targetId,!0))}async function OC(t,e,n){const r=VC(t);try{const i=await function(s,o){const a=F(s),l=Te.now(),u=o.reduce((d,g)=>d.add(g.key),H());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=fn(),y=H();return a.Ui.getEntries(d,u).next(v=>{g=v,g.forEach((D,p)=>{p.isValidDocument()||(y=y.add(D))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(v=>{c=v;const D=[];for(const p of o){const f=rI(p,c.get(p.key).overlayedDocument);f!=null&&D.push(new Yn(p.key,f,P0(f.value.mapValue),Bt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,D,o)}).next(v=>{h=v;const D=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,v.batchId,D)})}).then(()=>({batchId:h.batchId,changes:G0(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.oc[s.currentUser.toKey()];l||(l=new Ie(X)),l=l.insert(o,a),s.oc[s.currentUser.toKey()]=l}(r,i.batchId,n),await go(r,i.changes),await Kl(r.remoteStore)}catch(i){const s=tf(i,"Failed to persist write");n.reject(s)}}async function Ew(t,e){const n=F(t);try{const r=await XI(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ic.get(s);o&&(ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?ee(o.Xu):i.removedDocuments.size>0&&(ee(o.Xu),o.Xu=!1))}),await go(n,r,e)}catch(r){await lo(r)}}function Mm(t,e,n){const r=F(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.tc.forEach((s,o)=>{const a=o.view.Eu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=F(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Eu(o)&&(l=!0)}),l&&nf(a)}(r.eventManager,e),i.length&&r.Zu.Go(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xC(t,e,n){const r=F(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ic.get(e),s=i&&i.key;if(s){let o=new Ie(L.comparator);o=o.insert(s,Le.newNoDocument(s,z.min()));const a=H().add(s),l=new jl(z.min(),new Map,new ke(X),o,a);await Ew(r,l),r.sc=r.sc.remove(s),r.ic.delete(e),rf(r)}else await dh(r.localStore,e,!1).then(()=>fh(r,e,n)).catch(lo)}async function MC(t,e){const n=F(t),r=e.batch.batchId;try{const i=await QI(n.localStore,e);_w(n,r,null),Sw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await go(n,i)}catch(i){await lo(i)}}async function LC(t,e,n){const r=F(t);try{const i=await function(s,o){const a=F(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ee(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);_w(r,e,n),Sw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await go(r,i)}catch(i){await lo(i)}}function Sw(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function _w(t,e,n){const r=F(t);let i=r.oc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.oc[r.currentUser.toKey()]=i}}function fh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||Tw(t,r)})}function Tw(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(uw(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),rf(t))}function Lm(t,e,n){for(const r of n)r instanceof vw?(t.rc.addReference(r.key,e),$C(t,r)):r instanceof ww?(O("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||Tw(t,r.key)):b()}function $C(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(O("SyncEngine","New document in limbo: "+n),t.nc.add(r),rf(t))}function rf(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new L(ae.fromString(e)),r=t.cc.next();t.ic.set(r,new NC(n)),t.sc=t.sc.insert(n,r),lw(t.remoteStore,new dr(dn(Vl(n.path)),r,2,Bd.ot))}}async function go(t,e,n){const r=F(t),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,l)=>{o.push(r.hc(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=Xd.Vi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Zu.Go(i),await async function(a,l){const u=F(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>_.forEach(l,h=>_.forEach(h.Pi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>_.forEach(h.vi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!uo(c))throw c;O("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.$i.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);u.$i=u.$i.insert(h,y)}}}(r.localStore,s))}async function UC(t,e){const n=F(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await iw(n.localStore,e);n.currentUser=e,function(i,s){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new M(E.CANCELLED,s))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await go(n,r.Ki)}}function bC(t,e){const n=F(t),r=n.ic.get(e);if(r&&r.Xu)return H().add(r.key);{let i=H();const s=n.ec.get(e);if(!s)return i;for(const o of s){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}function FC(t){const e=F(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ew.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xC.bind(null,e),e.Zu.Go=TC.bind(null,e.eventManager),e.Zu.lc=kC.bind(null,e.eventManager),e}function VC(t){const e=F(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=LC.bind(null,e),e}class BC{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=Hl(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return GI(this.persistence,new KI,e.initialUser,this.wt)}_c(e){return new HI(Qd.Os,this.wt)}dc(e){return new tC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class zC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Mm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=UC.bind(null,this.syncEngine),await EC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new _C}createDatastore(e){const n=Hl(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new sC(i));var i;return function(s,o,a,l){return new lC(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Mm(this.syncEngine,a,0),o=Pm.V()?new Pm:new nC,new cC(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new AC(r,i,s,o,a,l);return u&&(c.ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=F(e);O("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await mo(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
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
 */class kw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):hn("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class jC{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=N0.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{O("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(O("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=tf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function HC(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await iw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function WC(t,e){t.asyncQueue.verifyOperationInProgress();const n=await KC(t);O("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Om(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Om(e.remoteStore,s)),t.onlineComponents=e}async function KC(t){return t.offlineComponents||(O("FirestoreClient","Using default OfflineComponentProvider"),await HC(t,new BC)),t.offlineComponents}async function Iw(t){return t.onlineComponents||(O("FirestoreClient","Using default OnlineComponentProvider"),await WC(t,new zC)),t.onlineComponents}function qC(t){return Iw(t).then(e=>e.syncEngine)}async function ph(t){const e=await Iw(t),n=e.eventManager;return n.onListen=DC.bind(null,e.syncEngine),n.onUnlisten=PC.bind(null,e.syncEngine),n}function GC(t,e,n={}){const r=new bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new kw({next:h=>{s.enqueueAndForget(()=>gw(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new M(E.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new M(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new yw(Vl(o.path),u,{includeMetadataChanges:!0,Du:!0});return mw(i,c)}(await ph(t),t.asyncQueue,e,n,r)),r.promise}const $m=new Map;/**
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
 */function Cw(t,e,n){if(!n)throw new M(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function QC(t,e,n,r){if(e===!0&&r===!0)throw new M(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Um(t){if(!L.isDocumentKey(t))throw new M(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bm(t){if(L.isDocumentKey(t))throw new M(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":b()}function sn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sf(t);throw new M(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function XC(t,e){if(e<=0)throw new M(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Fm{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new M(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,QC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class of{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fm({}),this._settingsFrozen=!1,e instanceof vi?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new M(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vi(i.options.projectId)}(e))}get app(){if(!this._app)throw new M(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fm(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ek;switch(n.type){case"gapi":const r=n.client;return ee(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new Tk(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new M(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=$m.get(e);n&&(O("ComponentProvider","Removing Datastore"),$m.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class Ve{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ve(this.firestore,e,this._key)}}class Hn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hn(this.firestore,e,this._query)}}class zt extends Hn{constructor(e,n,r){super(e,n,Vl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ve(this.firestore,null,new L(e))}withConverter(e){return new zt(this.firestore,e,this._path)}}function Nw(t,e,...n){if(t=Pe(t),Cw("collection","path",e),t instanceof of){const r=ae.fromString(e,...n);return bm(r),new zt(t,null,r)}{if(!(t instanceof Ve||t instanceof zt))throw new M(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return bm(r),new zt(t.firestore,null,r)}}function mh(t,e,...n){if(t=Pe(t),arguments.length===1&&(e=N0.I()),Cw("doc","path",e),t instanceof of){const r=ae.fromString(e,...n);return Um(r),new Ve(t,null,new L(r))}{if(!(t instanceof Ve||t instanceof zt))throw new M(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return Um(r),new Ve(t.firestore,t instanceof zt?t.converter:null,new L(r))}}function YC(t,e){return t=Pe(t),e=Pe(e),(t instanceof Ve||t instanceof zt)&&(e instanceof Ve||e instanceof zt)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function JC(t,e){return t=Pe(t),e=Pe(e),t instanceof Hn&&e instanceof Hn&&t.firestore===e.firestore&&ho(t._query,e._query)&&t.converter===e.converter}/**
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
 */class ZC{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new ow(this,"async_queue_retry"),this.Kc=()=>{const n=Ku();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Ku();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=Ku();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new bn;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!uo(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw hn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Lc=!1,r))));return this.Mc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const i=ef.createAndSchedule(this,e,n,r,s=>this.Wc(s));return this.$c.push(i),i}Gc(){this.Bc&&b()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function Vm(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class _i extends of{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new ZC,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Aw(this),this._firestoreClient.terminate()}}function eN(t=kv()){return md(t,"firestore").getImmediate()}function af(t){return t._firestoreClient||Aw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Aw(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new Mk(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new jC(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class ql{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ti{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ti(ze.fromBase64String(e))}catch(n){throw new M(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ti(ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class lf{constructor(e){this._methodName=e}}/**
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
 */class uf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
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
 */const tN=/^__.*__$/;class nN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Yn(e,this.data,this.fieldMask,n,this.fieldTransforms):new fo(e,this.data,n,this.fieldTransforms)}}class Dw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Yn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Rw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class cf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.wt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new cf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ta({path:r,na:!1});return i.sa(e),i}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ta({path:r,na:!1});return i.Xc(),i}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return rl(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(Rw(this.Zc)&&tN.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class rN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=r||Hl(e)}aa(e,n,r,i=!1){return new cf({Zc:e,methodName:n,ca:r,path:qe.emptyPath(),na:!1,ua:i},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function Pw(t){const e=t._freezeSettings(),n=Hl(t._databaseId);return new rN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function iN(t,e,n,r,i,s={}){const o=t.aa(s.merge||s.mergeFields?2:0,e,n,i);hf("Data must be an object, but it was:",o,r);const a=Ow(r,o);let l,u;if(s.merge)l=new kt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=gh(e,h,n);if(!o.contains(d))throw new M(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Mw(c,d)||c.push(d)}l=new kt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new nN(new ot(a),l,u)}class Gl extends lf{_toFieldTransform(e){if(e.Zc!==2)throw e.Zc===1?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gl}}function sN(t,e,n,r){const i=t.aa(1,e,n);hf("Data must be an object, but it was:",i,r);const s=[],o=ot.empty();Rr(r,(l,u)=>{const c=df(e,l,n);u=Pe(u);const h=i.ia(c);if(u instanceof Gl)s.push(c);else{const d=Ql(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new kt(s);return new Dw(o,a,i.fieldTransforms)}function oN(t,e,n,r,i,s){const o=t.aa(1,e,n),a=[gh(e,r,n)],l=[i];if(s.length%2!=0)throw new M(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(gh(e,s[d])),l.push(s[d+1]);const u=[],c=ot.empty();for(let d=a.length-1;d>=0;--d)if(!Mw(u,a[d])){const g=a[d];let y=l[d];y=Pe(y);const v=o.ia(g);if(y instanceof Gl)u.push(g);else{const D=Ql(y,v);D!=null&&(u.push(g),c.set(g,D))}}const h=new kt(u);return new Dw(c,h,o.fieldTransforms)}function Ql(t,e){if(xw(t=Pe(t)))return hf("Unsupported field value:",e,t),Ow(t,e);if(t instanceof lf)return function(n,r){if(!Rw(r.Zc))throw r.oa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.oa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Ql(o,r.ra(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Pe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Yk(r.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Te.fromDate(n);return{timestampValue:tl(r.wt,i)}}if(n instanceof Te){const i=new Te(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:tl(r.wt,i)}}if(n instanceof uf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ti)return{bytesValue:Z0(r.wt,n._byteString)};if(n instanceof Ve){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.oa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Kd(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.oa(`Unsupported field value: ${sf(n)}`)}(t,e)}function Ow(t,e){const n={};return A0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rr(t,(r,i)=>{const s=Ql(i,e.ea(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function xw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Te||t instanceof uf||t instanceof Ti||t instanceof Ve||t instanceof lf)}function hf(t,e,n){if(!xw(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=sf(n);throw r==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function gh(t,e,n){if((e=Pe(e))instanceof ql)return e._internalPath;if(typeof e=="string")return df(t,e);throw rl("Field path arguments must be of type string or ",t,!1,void 0,n)}const aN=new RegExp("[~\\*/\\[\\]]");function df(t,e,n){if(e.search(aN)>=0)throw rl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ql(...e.split("."))._internalPath}catch{throw rl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new M(E.INVALID_ARGUMENT,a+t+l)}function Mw(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Lw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ff("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lN extends Lw{data(){return super.data()}}function ff(t,e){return typeof e=="string"?df(t,e):e instanceof ql?e._internalPath:e._delegate._internalPath}/**
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
 */class Ji{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $w extends Lw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ca(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ff("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ca extends $w{data(e={}){return super.data(e)}}class uN{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ji(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ca(this._firestore,this._userDataWriter,r.key,r,new Ji(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new ca(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ji(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ca(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ji(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:cN(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function cN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}/**
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
 */function hN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uw{}function dN(t,...e){for(const n of e)t=n._apply(t);return t}class fN extends Uw{constructor(e,n){super(),this.fa=e,this.wa=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new M(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new M(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ri(i,s);return function(a,l){if(x0(a)===null){const u=M0(a);u!==null&&yN(a,u,l.field)}}(r,o),o}(e._query,this.fa,this.wa);return new Hn(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new co(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function pN(t,e="asc"){const n=e,r=ff("orderBy",t);return new fN(r,n)}class mN extends Uw{constructor(e,n,r){super(),this.type=e,this.ma=n,this.ga=r}_apply(e){return new Hn(e.firestore,e.converter,Ja(e._query,this.ma,this.ga))}}function gN(t){return XC("limit",t),new mN("limit",t,"F")}function yN(t,e,n){if(!n.isEqual(e))throw new M(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class vN{convertValue(e,n="none"){switch(Ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw b()}}convertObject(e,n){const r={};return Rr(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new uf(ve(e.latitude),ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=R0(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(bs(e));default:return null}}convertTimestamp(e){const n=zn(e);return new Te(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ae.fromString(e);ee(rw(r));const i=new vi(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||hn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function wN(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */function EN(t){t=sn(t,Ve);const e=sn(t.firestore,_i);return GC(af(e),t._key).then(n=>Vw(e,t,n))}class bw extends vN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ti(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ve(this.firestore,null,n)}}function SN(t,e,n){t=sn(t,Ve);const r=sn(t.firestore,_i),i=wN(t.converter,e,n);return Fw(r,[iN(Pw(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Bt.none())])}function _N(t,e,n,...r){t=sn(t,Ve);const i=sn(t.firestore,_i),s=Pw(i);let o;return o=typeof(e=Pe(e))=="string"||e instanceof ql?oN(s,"updateDoc",t._key,e,n,r):sN(s,"updateDoc",t._key,e),Fw(i,[o.toMutation(t._key,Bt.exists(!0))])}function il(t,...e){var n,r,i;t=Pe(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Vm(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Vm(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Ve)u=sn(t.firestore,_i),c=Vl(t._key.path),l={next:h=>{e[o]&&e[o](Vw(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=sn(t,Hn);u=sn(h.firestore,_i),c=h._query;const d=new bw(u);l={next:g=>{e[o]&&e[o](new uN(u,d,h,g))},error:e[o+1],complete:e[o+2]},hN(t._query)}return function(h,d,g,y){const v=new kw(y),D=new yw(d,v,g);return h.asyncQueue.enqueueAndForget(async()=>mw(await ph(h),D)),()=>{v.Tc(),h.asyncQueue.enqueueAndForget(async()=>gw(await ph(h),D))}}(af(u),c,a,l)}function Fw(t,e){return function(n,r){const i=new bn;return n.asyncQueue.enqueueAndForget(async()=>OC(await qC(n),r,i)),i.promise}(af(t),e)}function Vw(t,e,n){const r=n.docs.get(e._key),i=new bw(t);return new $w(t,i,e._key,r,new Ji(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Oi=n})(Js),pi(new wr("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new _i(i,new Sk(n.getProvider("auth-internal")),new Ik(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),Un(um,"3.4.14",t),Un(um,"3.4.14","esm2017")})();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Gr=function(){return Gr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Gr.apply(this,arguments)},Bw=function(t){return{loading:t==null,value:t}},TN=function(){return function(t,e){switch(e.type){case"error":return Gr(Gr({},t),{error:e.error,loading:!1,value:void 0});case"reset":return Bw(e.defaultValue);case"value":return Gr(Gr({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},zw=function(t){var e=t?t():void 0,n=ie.exports.useReducer(TN(),Bw(e)),r=n[0],i=n[1],s=function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},o=function(l){i({type:"error",error:l})},a=function(l){i({type:"value",value:l})};return ie.exports.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},jw=function(t,e,n){var r=ie.exports.useRef(t);return ie.exports.useEffect(function(){e(t,r.current)||(r.current=t,n&&n())}),r},kN=function(t,e){var n=!t&&!e,r=!!t&&!!e&&YC(t,e);return n||r},IN=function(t,e){return jw(t,kN,e)},CN=function(t,e){var n=!t&&!e,r=!!t&&!!e&&JC(t,e);return n||r},NN=function(t,e){return jw(t,CN,e)},AN=function(t,e){var n=zw(),r=n.error,i=n.loading,s=n.reset,o=n.setError,a=n.setValue,l=n.value,u=NN(t,s);ie.exports.useEffect(function(){if(!u.current){a(void 0);return}var h=e!=null&&e.snapshotListenOptions?il(u.current,e.snapshotListenOptions,a,o):il(u.current,a,o);return function(){h()}},[u.current]);var c=[l,i,r];return ie.exports.useMemo(function(){return c},c)},DN=function(t,e){var n=e==null?void 0:e.snapshotOptions,r=AN(t,e),i=r[0],s=r[1],o=r[2],a=RN(i,n),l=[a,s,o,i];return ie.exports.useMemo(function(){return l},l)},RN=function(t,e){return ie.exports.useMemo(function(){return t==null?void 0:t.docs.map(function(n){return n.data(e)})},[t,e])},PN=function(t,e){var n=zw(),r=n.error,i=n.loading,s=n.reset,o=n.setError,a=n.setValue,l=n.value,u=IN(t,s);ie.exports.useEffect(function(){if(!u.current){a(void 0);return}var h=e!=null&&e.snapshotListenOptions?il(u.current,e.snapshotListenOptions,a,o):il(u.current,a,o);return function(){h()}},[u.current]);var c=[l,i,r];return ie.exports.useMemo(function(){return c},c)},ON=function(t,e){var n=e==null?void 0:e.snapshotOptions,r=PN(t,e),i=r[0],s=r[1],o=r[2],a=ie.exports.useMemo(function(){return i==null?void 0:i.data(n)},[i,n]),l=[a,s,o,i];return ie.exports.useMemo(function(){return l},l)},xN="firebase",MN="9.9.2";/**
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
 */Un(xN,MN,"app");function pf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Hw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LN=Hw,Ww=new Xs("auth","Firebase",Hw());/**
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
 */const Bm=new fd("@firebase/auth");function ha(t,...e){Bm.logLevel<=G.ERROR&&Bm.error(`Auth (${Js}): ${t}`,...e)}/**
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
 */function Kt(t,...e){throw mf(t,...e)}function jt(t,...e){return mf(t,...e)}function Kw(t,e,n){const r=Object.assign(Object.assign({},LN()),{[e]:n});return new Xs("auth","Firebase",r).create(e,{appName:t.name})}function $N(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Kt(t,"argument-error"),Kw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ww.create(t,...e)}function U(t,e,...n){if(!t)throw mf(e,...n)}function en(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ha(e),new Error(e)}function pn(t,e){t||en(e)}/**
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
 */const zm=new Map;function tn(t){pn(t instanceof Function,"Expected a class definition");let e=zm.get(t);return e?(pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zm.set(t,e),e)}/**
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
 */function UN(t,e){const n=md(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Fa(s,e!=null?e:{}))return i;Kt(i,"already-initialized")}return n.initialize({options:e})}function bN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function yh(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function FN(){return jm()==="http:"||jm()==="https:"}function jm(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function VN(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FN()||vv()||"connection"in navigator)?navigator.onLine:!0}function BN(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class yo{constructor(e,n){this.shortDelay=e,this.longDelay=n,pn(n>e,"Short delay should be less than long delay!"),this.isMobile=yv()||wv()}get(){return VN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function gf(t,e){pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class qw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;en("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;en("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;en("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const jN=new yo(3e4,6e4);function HN(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xl(t,e,n,r,i={}){return Gw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ys(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),qw.fetch()(Qw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Gw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zN),e);try{const i=new KN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Wo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wo(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Kw(t,c,u);Kt(t,c)}}catch(i){if(i instanceof gn)throw i;Kt(t,"network-request-failed")}}async function WN(t,e,n,r,i={}){const s=await Xl(t,e,n,r,i);return"mfaPendingCredential"in s&&Kt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Qw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?gf(t.config,i):`${t.config.apiScheme}://${i}`}class KN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(jt(this.auth,"network-request-failed")),jN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=jt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function qN(t,e){return Xl(t,"POST","/v1/accounts:delete",e)}async function GN(t,e){return Xl(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function fs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QN(t,e=!1){const n=Pe(t),r=await n.getIdToken(e),i=yf(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:fs(qu(i.auth_time)),issuedAtTime:fs(qu(i.iat)),expirationTime:fs(qu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function qu(t){return Number(t)*1e3}function yf(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return ha("JWT malformed, contained fewer than 3 sections"),null;try{const s=GS(r);return s?JSON.parse(s):(ha("Failed to decode base64 JWT payload"),null)}catch(s){return ha("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function XN(t){const e=yf(t);return U(e,"internal-error"),U(typeof e.exp!="undefined","internal-error"),U(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function js(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gn&&YN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function YN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class JN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Xw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fs(this.lastLoginAt),this.creationTime=fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await js(t,GN(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?tA(s.providerUserInfo):[],a=eA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Xw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function ZN(t){const e=Pe(t);await sl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function tA(t){return t.map(e=>{var{providerId:n}=e,r=pf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function nA(t,e){const n=await Gw(t,{},async()=>{const r=Ys({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Qw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",qw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken!="undefined","internal-error"),U(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):XN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await nA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Hs;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hs,this.toJSON())}_performRefresh(){return en("not implemented")}}/**
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
 */function vn(t,e){U(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class fr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=pf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new JN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await js(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return QN(this,e)}reload(){return ZN(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new fr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await sl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await js(this,qN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:T,providerData:N,stsTokenManager:A}=n;U(m&&A,e,"internal-error");const x=Hs.fromJSON(this.name,A);U(typeof m=="string",e,"internal-error"),vn(h,e.name),vn(d,e.name),U(typeof w=="boolean",e,"internal-error"),U(typeof T=="boolean",e,"internal-error"),vn(g,e.name),vn(y,e.name),vn(v,e.name),vn(D,e.name),vn(p,e.name),vn(f,e.name);const te=new fr({uid:m,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:T,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:x,createdAt:p,lastLoginAt:f});return N&&Array.isArray(N)&&(te.providerData=N.map(j=>Object.assign({},j))),D&&(te._redirectEventId=D),te}static async _fromIdTokenResponse(e,n,r=!1){const i=new Hs;i.updateFromServerResponse(n);const s=new fr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await sl(s),s}}/**
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
 */class Yw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yw.type="NONE";const Hm=Yw;/**
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
 */function da(t,e,n){return`firebase:${t}:${e}:${n}`}class si{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=da(this.userKey,i.apiKey,s),this.fullPersistenceKey=da("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new si(tn(Hm),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||tn(Hm);const o=da(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=fr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new si(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new si(s,e,r))}}/**
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
 */function Wm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(e1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(n1(e))return"Blackberry";if(r1(e))return"Webos";if(vf(e))return"Safari";if((e.includes("chrome/")||Zw(e))&&!e.includes("edge/"))return"Chrome";if(t1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jw(t=Re()){return/firefox\//i.test(t)}function vf(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zw(t=Re()){return/crios\//i.test(t)}function e1(t=Re()){return/iemobile/i.test(t)}function t1(t=Re()){return/android/i.test(t)}function n1(t=Re()){return/blackberry/i.test(t)}function r1(t=Re()){return/webos/i.test(t)}function Yl(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rA(t=Re()){var e;return Yl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iA(){return Ev()&&document.documentMode===10}function i1(t=Re()){return Yl(t)||t1(t)||r1(t)||n1(t)||/windows phone/i.test(t)||e1(t)}function sA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function s1(t,e=[]){let n;switch(t){case"Browser":n=Wm(Re());break;case"Worker":n=`${Wm(Re())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Js}/${r}`}/**
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
 */class oA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class aA{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Km(this),this.idTokenSubscription=new Km(this),this.beforeStateQueue=new oA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ww,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await si.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await sl(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pe(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tn(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await si.create(this,[tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=s1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function wf(t){return Pe(t)}class Km{constructor(e){this.auth=e,this.observer=null,this.addObserver=i_(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class o1{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return en("not implemented")}_getIdTokenResponse(e){return en("not implemented")}_linkToIdToken(e,n){return en("not implemented")}_getReauthenticationResolver(e){return en("not implemented")}}/**
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
 */async function oi(t,e){return WN(t,"POST","/v1/accounts:signInWithIdp",HN(t,e))}/**
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
 */const lA="http://localhost";class Cr extends o1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=pf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Cr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return oi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,oi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,oi(e,n)}buildRequest(){const e={requestUri:lA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ys(n)}return e}}/**
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
 */class Ef{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class vo extends Ef{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qt extends vo{constructor(){super("facebook.com")}static credential(e){return Cr._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qt.PROVIDER_ID="facebook.com";/**
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
 */class Xt extends vo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cr._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xt.credential(n,r)}catch{return null}}}Xt.GOOGLE_SIGN_IN_METHOD="google.com";Xt.PROVIDER_ID="google.com";/**
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
 */class kn extends vo{constructor(){super("github.com")}static credential(e){return Cr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.GITHUB_SIGN_IN_METHOD="github.com";kn.PROVIDER_ID="github.com";/**
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
 */class In extends vo{constructor(){super("twitter.com")}static credential(e,n){return Cr._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return In.credential(n,r)}catch{return null}}}In.TWITTER_SIGN_IN_METHOD="twitter.com";In.PROVIDER_ID="twitter.com";/**
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
 */class ki{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await fr._fromIdTokenResponse(e,r,i),o=qm(r);return new ki({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=qm(r);return new ki({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function qm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ol extends gn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ol.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ol(e,n,r,i)}}function a1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ol._fromErrorAndOperation(t,s,e,r):s})}async function uA(t,e,n=!1){const r=await js(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ki._forOperation(t,"link",r)}/**
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
 */async function cA(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await js(t,a1(i,s,e,t),n);U(o.idToken,i,"internal-error");const a=yf(o.idToken);U(a,i,"internal-error");const{sub:l}=a;return U(t.uid===l,i,"user-mismatch"),ki._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Kt(i,"user-mismatch"),o}}/**
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
 */async function hA(t,e,n=!1){const r="signIn",i=await a1(t,r,e),s=await ki._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function dA(t,e,n,r){return Pe(t).onAuthStateChanged(e,n,r)}const al="__sak";/**
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
 */class l1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(al,"1"),this.storage.removeItem(al),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function fA(){const t=Re();return vf(t)||Yl(t)}const pA=1e3,mA=10;class u1 extends l1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fA()&&sA(),this.fallbackToPolling=i1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);iA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},pA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}u1.type="LOCAL";const gA=u1;/**
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
 */class c1 extends l1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}c1.type="SESSION";const h1=c1;/**
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
 */function yA(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Jl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Jl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await yA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jl.receivers=[];/**
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
 */function Sf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class vA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Sf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ht(){return window}function wA(t){Ht().location.href=t}/**
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
 */function d1(){return typeof Ht().WorkerGlobalScope!="undefined"&&typeof Ht().importScripts=="function"}async function EA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _A(){return d1()?self:null}/**
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
 */const f1="firebaseLocalStorageDb",TA=1,ll="firebaseLocalStorage",p1="fbase_key";class wo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zl(t,e){return t.transaction([ll],e?"readwrite":"readonly").objectStore(ll)}function kA(){const t=indexedDB.deleteDatabase(f1);return new wo(t).toPromise()}function vh(){const t=indexedDB.open(f1,TA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ll,{keyPath:p1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ll)?e(r):(r.close(),await kA(),e(await vh()))})})}async function Gm(t,e,n){const r=Zl(t,!0).put({[p1]:e,value:n});return new wo(r).toPromise()}async function IA(t,e){const n=Zl(t,!1).get(e),r=await new wo(n).toPromise();return r===void 0?null:r.value}function Qm(t,e){const n=Zl(t,!0).delete(e);return new wo(n).toPromise()}const CA=800,NA=3;class m1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>NA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return d1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jl._getInstance(_A()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await EA(),!this.activeServiceWorker)return;this.sender=new vA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vh();return await Gm(e,al,"1"),await Qm(e,al),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>IA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Zl(i,!1).getAll();return new wo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}m1.type="LOCAL";const AA=m1;/**
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
 */function DA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function RA(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=jt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",DA().appendChild(r)})}function PA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new yo(3e4,6e4);/**
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
 */function g1(t,e){return e?tn(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class _f extends o1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return oi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function OA(t){return hA(t.auth,new _f(t),t.bypassAuthState)}function xA(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),cA(n,new _f(t),t.bypassAuthState)}async function MA(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),uA(n,new _f(t),t.bypassAuthState)}/**
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
 */class y1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OA;case"linkViaPopup":case"linkViaRedirect":return MA;case"reauthViaPopup":case"reauthViaRedirect":return xA;default:Kt(this.auth,"internal-error")}}resolve(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const LA=new yo(2e3,1e4);async function v1(t,e,n){const r=wf(t);$N(t,e,Ef);const i=g1(r,n);return new ur(r,"signInViaPopup",e,i).executeNotNull()}class ur extends y1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ur.currentPopupAction&&ur.currentPopupAction.cancel(),ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){pn(this.filter.length===1,"Popup operations only handle one event");const e=Sf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,LA.get())};e()}}ur.currentPopupAction=null;/**
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
 */const $A="pendingRedirect",fa=new Map;class UA extends y1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fa.get(this.auth._key());if(!e){try{const r=await bA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fa.set(this.auth._key(),e)}return this.bypassAuthState||fa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bA(t,e){const n=BA(e),r=VA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function FA(t,e){fa.set(t._key(),e)}function VA(t){return tn(t._redirectPersistence)}function BA(t){return da($A,t.config.apiKey,t.name)}async function zA(t,e,n=!1){const r=wf(t),i=g1(r,e),o=await new UA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const jA=10*60*1e3;class HA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!w1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(jt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xm(e))}saveEventToCache(e){this.cachedEventUids.add(Xm(e)),this.lastProcessedEventTime=Date.now()}}function Xm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function w1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return w1(t);default:return!1}}/**
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
 */async function KA(t,e={}){return Xl(t,"GET","/v1/projects",e)}/**
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
 */const qA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GA=/^https?/;async function QA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await KA(t);for(const n of e)try{if(XA(n))return}catch{}Kt(t,"unauthorized-domain")}function XA(t){const e=yh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!GA.test(n))return!1;if(qA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const YA=new yo(3e4,6e4);function Ym(){const t=Ht().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function JA(t){return new Promise((e,n)=>{var r,i,s;function o(){Ym(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ym(),n(jt(t,"network-request-failed"))},timeout:YA.get()})}if(!((i=(r=Ht().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ht().gapi)===null||s===void 0)&&s.load)o();else{const a=PA("iframefcb");return Ht()[a]=()=>{gapi.load?o():n(jt(t,"network-request-failed"))},RA(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw pa=null,e})}let pa=null;function ZA(t){return pa=pa||JA(t),pa}/**
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
 */const eD=new yo(5e3,15e3),tD="__/auth/iframe",nD="emulator/auth/iframe",rD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sD(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gf(e,nD):`https://${t.config.authDomain}/${tD}`,r={apiKey:e.apiKey,appName:t.name,v:Js},i=iD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ys(r).slice(1)}`}async function oD(t){const e=await ZA(t),n=Ht().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:sD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=jt(t,"network-request-failed"),a=Ht().setTimeout(()=>{s(o)},eD.get());function l(){Ht().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const aD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lD=500,uD=600,cD="_blank",hD="http://localhost";class Jm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dD(t,e,n,r=lD,i=uD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},aD),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Re().toLowerCase();n&&(a=Zw(u)?cD:n),Jw(u)&&(e=e||hD,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(rA(u)&&a!=="_self")return fD(e||"",a),new Jm(null);const h=window.open(e||"",a,c);U(h,t,"popup-blocked");try{h.focus()}catch{}return new Jm(h)}function fD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const pD="__/auth/handler",mD="emulator/auth/handler";function Zm(t,e,n,r,i,s){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Js,eventId:i};if(e instanceof Ef){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",r_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof vo){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${gD(t)}?${Ys(a).slice(1)}`}function gD({config:t}){return t.emulator?gf(t,mD):`https://${t.authDomain}/${pD}`}/**
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
 */const Gu="webStorageSupport";class yD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=h1,this._completeRedirectFn=zA,this._overrideRedirectResult=FA}async _openPopup(e,n,r,i){var s;pn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Zm(e,n,r,yh(),i);return dD(e,o,Sf())}async _openRedirect(e,n,r,i){return await this._originValidation(e),wA(Zm(e,n,r,yh(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(pn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await oD(e),r=new HA(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gu,{type:Gu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Gu];o!==void 0&&n(!!o),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return i1()||vf()||Yl()}}const vD=yD;var eg="@firebase/auth",tg="0.20.5";/**
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
 */class wD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ED(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function SD(t){pi(new wr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{U(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),U(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:s1(t)},c=new aA(a,l,u);return bN(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),pi(new wr("auth-internal",e=>{const n=wf(e.getProvider("auth").getImmediate());return(r=>new wD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Un(eg,tg,ED(t)),Un(eg,tg,"esm2017")}/**
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
 */function E1(t=kv()){const e=md(t,"auth");return e.isInitialized()?e.getImmediate():UN(t,{popupRedirectResolver:vD,persistence:[AA,gA,h1]})}SD("Browser");const{VITE_API_KEY:_D,VITE_AUTH_DOMAIN:TD,VITE_PROJECT_ID:kD,VITE_STORAGE_BUCKET:ID,VITE_MESSAGING_SENDER_ID:CD,VITE_APP_ID:ND}={VITE_API_KEY:"AIzaSyAGfLgXSIWOXu2bs2JCobBEXiyk5Be9pbQ",VITE_AUTH_DOMAIN:"blob-mob-cfe57.firebaseapp.com",VITE_PROJECT_ID:"blob-mob-cfe57",VITE_STORAGE_BUCKET:"blob-mob-cfe57.appspot.com",VITE_MESSAGING_SENDER_ID:"340119698127",VITE_APP_ID:"1:340119698127:web:4a2a0e642ccbfe96aa15ba",BASE_URL:"/Blob-Mob/",MODE:"production",DEV:!1,PROD:!0},AD={apiKey:_D,authDomain:TD,projectId:kD,storageBucket:ID,messagingSenderId:CD,appId:ND},Tf=rT(AD),$e=E1(Tf),ul=eN(Tf),DD=async t=>{var e,n;try{const r=""+((e=$e==null?void 0:$e.currentUser)==null?void 0:e.uid),i=mh(ul,"highscores",r),s=await EN(i);if(s.exists())console.log("Highscore exists"),t>s.data().score?await _N(i,{score:t}):console.log("not a new highscore :/");else{const o=Nw(ul,"highscores"),a=await SN(mh(o,r),{uid:r,username:(n=$e==null?void 0:$e.currentUser)==null?void 0:n.displayName,score:t});console.log("Document written")}}catch(r){console.error("Error adding document: ",r)}},RD=()=>{console.log("sign in attempt");const t=new Xt;v1($e,t).then(e=>{const n=e.user;console.log(n)})},PD=()=>{console.log("sign in attempt");const t=new Qt;v1($e,t).then(e=>{const n=e.user;console.log(n)})},S1=()=>{$e.signOut(),window.location.reload()};var eu={exports:{}},tu={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OD=ie.exports,xD=Symbol.for("react.element"),MD=Symbol.for("react.fragment"),LD=Object.prototype.hasOwnProperty,$D=OD.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,UD={key:!0,ref:!0,__self:!0,__source:!0};function _1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)LD.call(e,r)&&!UD.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:xD,type:t,key:s,ref:o,props:i,_owner:$D.current}}tu.Fragment=MD;tu.jsx=_1;tu.jsxs=_1;eu.exports=tu;const P=eu.exports.jsx,J=eu.exports.jsxs,kf=eu.exports.Fragment,bD=t=>{const{draw:e,...n}=t,r=ie.exports.useRef(null);return ie.exports.useEffect(()=>{const i=r.current;if(i==null)throw new Error("Could not get canvas");const s=i.getContext("2d");if(s==null)throw new Error("Could not get context");let o=0;const a=()=>{FD(i),e(s),o=window.requestAnimationFrame(a)};return a(),()=>{window.cancelAnimationFrame(o)}},[e]),P("canvas",{ref:r,...n,className:"canvas"})},FD=t=>{const{width:e,height:n}=t.getBoundingClientRect();return t.width!==e||t.height!==n?(t.width=e,t.height=n,!0):!1};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function VD(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(h){o(h)}}function l(c){try{u(r.throw(c))}catch(h){o(h)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function BD(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Qr=function(){return Qr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Qr.apply(this,arguments)},T1=function(t){return{loading:t==null,value:t}},zD=function(){return function(t,e){switch(e.type){case"error":return Qr(Qr({},t),{error:e.error,loading:!1,value:void 0});case"reset":return T1(e.defaultValue);case"value":return Qr(Qr({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},jD=function(t){var e=t?t():void 0,n=ie.exports.useReducer(zD(),T1(e)),r=n[0],i=n[1],s=function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},o=function(l){i({type:"error",error:l})},a=function(l){i({type:"value",value:l})};return ie.exports.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},If=function(t,e){var n=jD(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;ie.exports.useEffect(function(){var u=dA(t,function(c){return VD(void 0,void 0,void 0,function(){var h;return BD(this,function(d){switch(d.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];d.label=1;case 1:return d.trys.push([1,3,,4]),[4,e.onUserChanged(c)];case 2:return d.sent(),[3,4];case 3:return h=d.sent(),s(h),[3,4];case 4:return o(c),[2]}})})},s);return function(){u()}},[t]);var l=[a,i,r];return ie.exports.useMemo(function(){return l},l)};const HD=t=>{const{navHome:e,coins:n}=t,[r]=If($e);return J("div",{className:"navbar",children:[J("p",{className:"navbar__coins",children:["$",""+n]}),J("div",{className:"navbar__left",children:[P("div",{className:"navbar__left-icon",onClick:()=>e(),children:P("i",{className:"fa-solid fa-house fa-2xl"})}),r&&P("div",{className:"navbar__left-icon",onClick:()=>S1(),children:P("i",{className:"fa-solid fa-right-to-bracket fa-2xl"})})]})]})};var le=(t=>(t[t.menu=0]="menu",t[t.shop=1]="shop",t[t.shopMain=2]="shopMain",t[t.tutorial=3]="tutorial",t[t.tutorialMain=4]="tutorialMain",t[t.play=5]="play",t[t.battle=6]="battle",t[t.gameOver=7]="gameOver",t[t.gameOverMain=8]="gameOverMain",t))(le||{});const WD={2:{player:{speed:4,accel:.6,cool:5,health:1e3},enemy:{speed:.8,spawnWait:1,maxInst:10}},3:{player:{speed:4,accel:.4,cool:20,health:800},enemy:{speed:1,spawnWait:.8,maxInst:50}},4:{player:{speed:4,accel:.4,cool:40,health:500},enemy:{speed:1.5,spawnWait:.6,maxInst:100}},5:{player:{speed:4,accel:.4,cool:50,health:300},enemy:{speed:1.7,spawnWait:.6,maxInst:150}},6:{player:{speed:14,accel:1,cool:15,health:100},enemy:{speed:5,spawnWait:.1,maxInst:200}}};var ue=(t=>(t[t.Spawn=0]="Spawn",t[t.Normal=1]="Normal",t[t.Damage=2]="Damage",t[t.Dying=3]="Dying",t[t.Dead=4]="Dead",t))(ue||{}),rt=(t=>(t[t.Normal=0]="Normal",t[t.Attack=1]="Attack",t[t.Push=2]="Push",t[t.Regenerate=3]="Regenerate",t))(rt||{});class Cf{constructor(e,n,r,i){R(this,"x");R(this,"y");R(this,"w");R(this,"h");R(this,"color");R(this,"state");this.x=e,this.y=n,this.w=i,this.h=r,this.color="",this.state=1}}class KD{constructor(){R(this,"mouse");R(this,"mouseDown");R(this,"keyState");R(this,"keyMap");this.mouse={x:0,y:0},this.mouseDown=!1,this.keyState={right:!1,up:!1,left:!1,down:!1,attack:!1,push:!1,pause:!1,enemySpawn:!1},this.keyMap={ArrowRight:"right",d:"right",ArrowUp:"up",w:"up",ArrowLeft:"left",a:"left",ArrowDown:"down",s:"down"," ":"attack",q:"push",p:"pause",r:"enemySpawn"},this.addKeyListeners(),this.addMouseListener()}addKeyListeners(){document.addEventListener("keydown",e=>this.keyDownHandler(e),!1),document.addEventListener("keyup",e=>this.keyUpHandler(e),!1)}keyDownHandler(e){let n=this.keyMap[e.key];this.keyState[n]=!0}keyUpHandler(e){let n=this.keyMap[e.key];this.keyState[n]=!1}mousePosition(e){this.mouse.x=e.x,this.mouse.y=e.y,this.mouseDown=!0}addMouseListener(){document.addEventListener("click",e=>this.mousePosition(e),!1)}}const Nf=new KD;class qD{constructor(){R(this,"interval");R(this,"maxPoints");R(this,"cool");R(this,"instances");this.interval=5,this.maxPoints=5,this.cool=0,this.instances=new Array}draw(e){this.instances.forEach(n=>n.draw(e))}controller(){this.cool>0&&--this.cool;for(let e=0;e<this.instances.length;e++)this.instances[e].life<=0?this.instances.splice(e,1):this.instances[e].live()}spawn(e){if(this.instances.length<this.maxPoints&&this.cool<=0){let n=new GD(e);this.instances.push(n),this.cool=this.interval}}reset(){this.instances=new Array,this.cool=0}}class GD extends Cf{constructor(n){super(n.x,n.y,0,0);R(this,"life");let r=n.w,i=n.h,s=Math.random();s<.5?(this.x+=s<.5?-r/2-1:r/2+1,s=Math.random(),this.y+=s*(i+10)-5):(this.x+=s*(r+10)-5,s=Math.random(),this.y+=s<.5?-i/2-1:i/2+1),this.life=100}draw(n){n.font="18px Comic Sans MS",n.fillStyle=`rgba(225, 0, 0, ${this.life/100})`,n.fillText("-1",this.x,this.y)}live(){this.life>0&&--this.life}}const Wn=new qD;class QD{constructor(){R(this,"instances");R(this,"cool");R(this,"speed");R(this,"maxInst");R(this,"spawnWait");this.instances=new Array,this.cool=0,this.speed=1,this.maxInst=10,this.spawnWait=300}draw(e){this.instances.forEach(n=>n.draw(e))}controller(e){for(let n=0;n<this.instances.length;n++)this.instances[n].state==ue.Dead?this.instances.splice(n,1):this.instances[n].controller(e)}spawner(e,n,r){this.cool-=.01,this.instances.length<this.maxInst&&this.cool*1e3<=0&&(this.spawn(e,n,r),this.cool=this.spawnWait)}updateAttributes(e){this.speed=e.speed,this.maxInst=e.maxInst,this.spawnWait=e.spawnWait}reset(){this.instances=new Array,this.cool=0}spawn(e,n,r){let i=new XD(e,n,r,this.speed);this.instances.push(i)}}class XD extends Cf{constructor(n,r,i,s){super(0,0,50,50);R(this,"rcolors");R(this,"speed");R(this,"xdir");R(this,"ydir");R(this,"target");R(this,"distance");R(this,"pushMagnitude");this.rcolors=["#81ea25","#6bba27","#96e84e","#abf966","#b9f981"],this.color=this.rcolors[0],this.state=ue.Spawn,this.speed=s,this.xdir=0,this.ydir=0,this.target=null,this.distance=0,this.pushMagnitude=17,this.spawn(n,r,i)}spawn(n,r,i){let s=Math.random();s<.5?(this.x=s<.5?-this.w-5:n+5,s=Math.random(),this.y=s*(r+10)-5):(this.x=s*(n+10)-5,s=Math.random(),this.y=s<.5?-this.h-5:r+5),this.target=i,this.state=ue.Normal}draw(n){if(this.state==ue.Spawn)return;let r=this.x-this.w/2,i=this.y-this.h/2,s=Math.round(Math.random()*2);this.color=this.rcolors[s],n.fillStyle=this.color,this.target!=null&&this.state==ue.Normal&&(this.w=this.target.w/2-10,this.h=this.target.h-10),n.beginPath(),n.moveTo(r-this.w/8,i),n.bezierCurveTo(r-this.w/8,i-this.h/4,r+this.w+this.w/8,i-this.h/4,r+this.w+this.w/8,i),n.bezierCurveTo(r+this.w*2,i,r+this.w*2,i+this.h,r+this.w-this.w/8,i+this.h),n.bezierCurveTo(r+this.w-this.w/8,i+this.h*1.75,r-this.w*2,i+this.h/4,r-10,i+this.h/2-10),n.bezierCurveTo(r-this.w-5,i+this.h/2,r-this.w/4,i,r-this.w/8,i),n.fill(),n.closePath(),n.lineWidth=3,n.beginPath(),n.fillStyle="black",n.arc(r+this.w/6+this.xdir*5,i+this.h/6+this.ydir*5,(this.w/4+this.h/4)/4,0,2*Math.PI),n.stroke(),n.closePath(),n.beginPath(),n.arc(r+this.w-this.w/8+this.xdir*5,i+this.h/6+this.ydir*5,(this.w/4+this.h/4)/6,0,2*Math.PI),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(r+this.w/8,i+this.h),n.bezierCurveTo(r+this.h/8,i+this.h-this.h/3,r+this.w-this.h/8,i+this.h-this.h/3,r+this.w-this.h/8,i+this.h),n.stroke(),n.closePath()}controller(n){switch(this.state){case ue.Normal:this.move();break;case ue.Dying:this.death(n,this.target);break}}calculateDir(){if(this.target==null)return;let n=this.target.x-this.x,r=this.target.y-this.y;this.distance=Math.sqrt(n*n+r*r),this.distance>0&&(this.xdir=n/this.distance,this.ydir=r/this.distance)}move(){this.target!=null&&(this.calculateDir(),this.target.state==ue.Dead&&(this.xdir=-this.xdir,this.ydir=-this.ydir),this.x+=this.xdir*this.speed,this.y+=this.ydir*this.speed,this.wiggle())}wiggle(){let n=Math.random()>.5?1:-1;this.x=this.x+n*2,n=Math.random()>.5?1:-1,this.y=this.y+n*2}death(n,r){this.w=Math.max(0,this.w-2),this.h=Math.max(0,this.h-3.9),(this.w==0||this.h==0)&&(r!=null&&r.updatePower(),n.score++,this.state=ue.Dead)}pushField(n){this.distance<n&&(this.x+=this.pushMagnitude*-this.xdir,this.y+=this.pushMagnitude*-this.ydir)}}const ge=new QD,wn=(t,e,n)=>Math.min(Math.max(t,e),n),Ko=30,ng="#ffd6cc",YD="#adedff",JD="#ff6d6d";class ZD extends Cf{constructor(n,r,i,s){super(n,r,i,s);R(this,"maxSpeed");R(this,"accel");R(this,"xdir");R(this,"ydir");R(this,"xvel");R(this,"yvel");R(this,"action");R(this,"maxCool");R(this,"cool");R(this,"maxPower");R(this,"power");R(this,"maxHealth");R(this,"health");R(this,"frownCount");R(this,"pushRadius");R(this,"pushR");R(this,"timer");this.color=ng,this.state=ue.Normal,this.maxSpeed=7,this.accel=.4,this.xdir=1,this.ydir=0,this.xvel=0,this.yvel=0,this.action=rt.Normal,this.maxCool=50,this.cool=0,this.maxPower=50,this.power=0,this.maxHealth=500,this.health=this.maxHealth,this.frownCount=0,this.pushRadius=240,this.pushR=0,this.timer=0}draw(n){let r=this.x-this.w/2,i=this.y-this.h/2;n.fillStyle=this.color,n.fillRect(r,i,this.w,this.h),n.lineWidth=3,n.beginPath(),n.fillStyle="black",n.arc(r+this.w/4+this.xvel/2,i+this.h/4+this.yvel/2,(this.w/4+this.h/4)/4,0,2*Math.PI),n.stroke(),n.closePath(),n.beginPath(),n.arc(r+this.w-this.w/4+this.xvel,i+this.h/4+this.yvel,(this.w/4+this.h/4)/6,0,2*Math.PI),n.stroke(),n.closePath(),n.beginPath();const s=this.frownCount/Ko*10;n.moveTo(r+this.w/8,i+this.h*2/3+s),n.bezierCurveTo(r+this.h/8,i+this.h-s*2,r+this.w-this.h/8+this.xvel,i+this.h-s*2,r+this.w-this.h/8,i+this.h*2/3+s),n.stroke(),n.closePath(),this.action==rt.Push&&(n.beginPath(),n.arc(this.x,this.y,this.pushR,0,2*Math.PI),n.stroke(),n.closePath())}controller(n,r){this.state!=ue.Dead&&(this.actionController(n,r,Nf.keyState),this.x+=this.xvel,this.y+=this.yvel,this.action!=rt.Push&&(this.cool>0?(--this.cool,this.color=YD,this.frownCount<Ko*.65&&this.frownCount++):this.color=ng),this.healthController(),this.health<=0&&(this.state=ue.Dead))}actionController(n,r,i){switch(this.cool<=0&&(this.cool=0,i.attack?this.action=rt.Attack:i.push&&this.power==this.maxPower&&(this.action=rt.Push)),this.action){case rt.Attack:this.color="#adedff",this.attack(n,r,8);return;case rt.Normal:this.move(n,r,i);break;case rt.Push:this.move(n,r,i),this.color="#adedff",this.pushField(600);break}}healthController(){if(this.action==rt.Attack)return;let n=!1;ge.instances.forEach(r=>{if(this.collides(r)&&r.state==ue.Normal){n=!0;return}}),n?(this.color=JD,this.health--,this.frownCount++,Wn!=null&&Wn.spawn(this)):this.cool<=0&&this.frownCount--,this.frownCount=wn(this.frownCount,0,Ko)}shrink(n,r,i){i=wn(i/2,55,60+i/2),this.wiggle(55,i),this.x+=n,this.y+=r}move(n,r,i){i.right&&(this.xvel+=this.accel),i.left&&(this.xvel-=this.accel),i.down&&(this.yvel+=this.accel),i.up&&(this.yvel-=this.accel),!i.right&&!i.left&&(Math.abs(this.xvel)<=this.accel?this.xvel=0:this.xvel>0?this.xvel-=this.accel*1.5:this.xvel<0&&(this.xvel+=this.accel*1.5)),!i.down&&!i.up&&(Math.abs(this.yvel)<=this.accel?this.yvel=0:this.yvel>0?this.yvel-=this.accel*1.5:this.yvel<0&&(this.yvel+=this.accel*1.5)),this.xvel=wn(this.xvel,-this.maxSpeed,this.maxSpeed),this.yvel=wn(this.yvel,-this.maxSpeed,this.maxSpeed),this.calculateDir(),this.wiggle(50,69),this.keepOnScreen(n,r)}calculateDir(){let n=Math.sqrt(this.xvel*this.xvel+this.yvel*this.yvel);n>0&&(this.xdir=this.xvel/n,this.ydir=this.yvel/n)}attack(n,r,i){++this.timer,this.cool+=this.maxCool/i;const s=Math.max(10,Math.abs(this.xvel)*2),o=Math.max(10,Math.abs(this.yvel)*2);this.x+=this.xdir*s,this.y+=this.ydir*o,ge.instances.forEach(a=>{this.collides(a)&&a.state!=ue.Dying&&a.state!=ue.Dead&&(a.state=ue.Dying)}),this.keepOnScreen(n,r),this.timer>=i&&(this.xvel=0,this.yvel=0,this.timer=0,this.action=rt.Normal)}pushField(n){++this.timer,this.power-=this.maxPower/n,this.cool+=this.maxCool/n,ge.instances.forEach(r=>{r.state!=ue.Dying&&r.state!=ue.Dead&&(this.pushR=Math.min(this.timer/(n/4),1)*this.pushRadius,r.pushField(this.pushR))}),this.timer>=n&&(this.pushR=0,this.power=0,this.timer=0,this.action=rt.Normal)}collides(n){return n==null?!1:!(this.x+this.w/2<n.x-n.w/2||this.x-this.w/2>n.x+n.w/2)&&!(this.y+this.h/2<n.y-n.h/2||this.y-this.h/2>n.y+n.w/2)}wiggle(n,r){let i=Math.random()>.5?1:-1;this.x=this.x+i,i=Math.random()>.5?1:-1,this.y=this.y+i,i=Math.random()>.5?1:-1,this.w=wn(this.w+i,n,r),i=Math.random()>.5?1:-1,this.h=wn(this.h+i,n,r)}keepOnScreen(n,r){this.x=wn(this.x,this.w/2+5,n-this.w/2-5),this.y=wn(this.y,this.h/2+5,r-this.h/2-5)}reset(){this.health=this.maxHealth,this.power=0,this.cool=0,this.state=ue.Normal,this.action=rt.Normal,this.xvel=0,this.yvel=0,this.frownCount=Ko*.6}updateAttributes(n){this.maxSpeed=n.maxSpeed,this.maxCool=n.maxCool,this.maxHealth=n.maxHealth,this.health=this.maxHealth}getAttributes(){return{maxSpeed:this.maxSpeed,maxCool:this.maxCool,maxHealth:this.maxHealth,maxPower:this.maxPower}}updatePower(){this.power<this.maxPower?this.power++:this.power=this.maxPower}}const Q=new ZD(250,250,250,250);class eR{constructor(){R(this,"frame");R(this,"paused");R(this,"score");R(this,"difficulty");R(this,"tutorial");R(this,"highscore");R(this,"pauseKeyRelease");R(this,"fxSound");R(this,"musSound");R(this,"scene");this.difficulty=5,this.tutorial=!1,this.score=0,this.highscore=0,this.frame=0,this.paused=!1,this.pauseKeyRelease=!0,this.fxSound=1,this.musSound=.5,this.scene=le.menu}setTutorial(){window.localStorage.setItem("tutorial","COMPLETED")}getTutorial(){return window.localStorage.getItem("tutorial")!=null}gameOver(){this.scene=le.gameOver}pause(){}reset(){Q.reset(),ge.reset(),Wn.reset(),this.score=0,this.frame=0}updateDifficulty(e){this.difficulty=e;const n=WD[5].enemy;ge.updateAttributes(n)}}function tR(t,e){e.clearRect(0,0,e.canvas.width,e.canvas.height)}const wt=3;function Af(t,e){e.fillStyle="black",e.fillRect(e.canvas.width/2,10,e.canvas.width/2-10,20),e.fillStyle=Q.color,e.font="10px monospace",e.fillText(Q.health+"/"+Q.maxHealth,e.canvas.width*3/4-10,23),e.fillRect(e.canvas.width/2+wt,10+wt,Math.max(0,Q.health/Q.maxHealth*(e.canvas.width/2-10)-wt*2),20-wt*2),e.fillStyle="black",e.fillRect(e.canvas.width*3/4+5,40,e.canvas.width/4-15,20),e.fillStyle="#33cc33",Q.power>0&&e.fillRect(e.canvas.width*3/4+5+wt,40+wt,Q.power/Q.maxPower*(e.canvas.width/4-15)+5-wt*2,20-wt*2),e.fillStyle="black",e.fillRect(e.canvas.width/2,40,e.canvas.width/4-5,20),e.fillStyle="blue",e.fillRect(e.canvas.width/2+wt,40+wt,(1-Q.cool/Q.maxCool)*(e.canvas.width/4-5)-wt*2,20-wt*2),e.fillStyle="black",e.font="30px futura";let n=`Score ${t.score}`;e.fillText(n,20,30),n=`Highscore ${t.highscore}`,e.fillText(n,20,60)}function nR(t){t.fillStyle="rgba(225, 220, 212, 0.4)",t.fillRect(0,0,t.canvas.width,t.canvas.height),t.fillStyle="grey",t.font="50px monospace",t.fillText("PAUSE",t.canvas.width/2-t.measureText("Pause").width/2,t.canvas.height/2+10)}let qo=0;function rR(t,e){sR(t,e),iR(t,e),Q.state==ue.Dead&&t.reset()}function iR(t,e){Q.controller(e.canvas.width/2,e.canvas.height),ge.controller(t),Wn.controller(),qo>0&&qo--,Nf.keyState.enemySpawn&&qo<=0&&(qo=50,ge.spawn(e.canvas.width,e.canvas.height,Q))}function sR(t,e){e.clearRect(0,0,e.canvas.width,e.canvas.height),Q.draw(e),ge.draw(e),Wn.draw(e),Af(t,e)}var Df=(t=>(t[t.move=0]="move",t[t.enemy=1]="enemy",t[t.push=2]="push",t[t.bars=3]="bars",t[t.goodLuck=4]="goodLuck",t[t.end=5]="end",t))(Df||{});class oR{constructor(){R(this,"timer");R(this,"stage");R(this,"check");R(this,"controlCheck");this.timer=0,this.stage=0,this.check=!1,this.controlCheck=[0,0,0,0]}debug(e,n){n.font="20px Arial Bold",n.strokeStyle="black";let r=40,i=n.canvas.height*6/8+100;switch(n.fillText("Stage: "+this.stage,r,i),i+=20,n.fillText("Timer: "+this.timer,r,i),this.stage){case 1:i+=30,n.fillText(`Enemy State: ${ge.instances[0].state}`,r,i);break}}controller(e,n,r){++this.timer;const i=Nf.keyState;switch(this.check&&(this.stage++,this.check=!1),this.stage){case 0:i.right&&(this.controlCheck[0]=1),i.up&&(this.controlCheck[1]=1),i.left&&(this.controlCheck[2]=1),i.down&&(this.controlCheck[3]=1),!this.controlCheck.includes(0)&&this.timer>200&&(this.timer=0,this.check=!0);break;case 1:ge.instances.length==0&&ge.spawn(n,r,Q),e.score==1&&(this.timer=0,this.check=!0,Q.power=Q.maxPower);break;case 2:ge.instances.length<=5&&ge.spawn(n,r,Q),Q.action==rt.Push&&(this.timer=0,this.check=!0);break;case 3:ge.instances.length==0&&(this.timer=0,this.check=!0);break;case 4:this.timer>300&&(this.check=!0);break}}draw(e){let n=0,r=0;const i=e.canvas.width,s=e.canvas.height;let o="";switch(e.font="30px Comic Sans MS",this.stage){case 0:o="Use WASD or Arrow Keys to Move",n=i/2-e.measureText(o).width/2,r=s*2/8,e.fillStyle="black",e.fillText(o,n,r);break;case 1:o="This is an enemy! Use space to kill him",n=i/2-e.measureText(o).width/2,r=s*2/8,e.fillStyle="black",e.fillText(o,n,r);break;case 2:o="More Homies! Push em away with Q",n=i/2-e.measureText(o).width/2,r=s*2/8,e.fillStyle="black",e.fillText(o,n,r);break;case 3:e.lineWidth=3,e.beginPath(),e.moveTo(i*5/8-20,145),e.lineTo(i*5/8,80),e.stroke(),e.closePath(),e.beginPath(),e.moveTo(i*5/8,80),e.lineTo(i*5/8-10,85),e.stroke(),e.closePath(),e.beginPath(),e.moveTo(i*5/8,80),e.lineTo(i*5/8+5,89),e.stroke(),e.closePath(),e.beginPath(),e.moveTo(i*7/8-20,145),e.lineTo(i*7/8,80),e.stroke(),e.closePath(),e.beginPath(),e.moveTo(i*7/8,80),e.lineTo(i*7/8-10,85),e.stroke(),e.closePath(),e.beginPath(),e.moveTo(i*7/8,80),e.lineTo(i*7/8+5,89),e.stroke(),e.closePath(),e.fillStyle="black",e.font="25px Comic Sans MS",o="Cooldown",n=i*5/8-20-e.measureText(o).width/2,r=170,e.fillText(o,n,r),o="Power",n=i*7/8-20-e.measureText(o).width/2,r=170,e.fillText(o,n,r),e.font="30px Comic Sans MS",o="Attacks and specials have a Cooldown,",n=i/2-e.measureText(o).width/2,r=s*2/8,e.fillText(o,n,r),e.font="30px Comic Sans MS",o="specials require full Power",n=i/2-e.measureText(o).width/2,r+=34,e.fillText(o,n,r);break;case 4:o="Kill as many Blobs as you can,",n=i/2-e.measureText(o).width/2,r=s*2/8,e.fillStyle="black",e.fillText(o,n,r),o="Good luck!",n=i/2-e.measureText(o).width/2,r+=34,e.fillText(o,n,r);break}}reset(){this.timer=0,this.stage=0,this.check=!1,this.controlCheck=[0,0,0,0]}}const Ii=new oR;function aR(t,e){lR(t,e),uR(t,e),Ii.stage==Df.end&&(t.reset(),Ii.reset(),t.scene=le.battle)}function lR(t,e){Q.controller(e.canvas.width,e.canvas.height),Wn.controller(),ge.controller(t),Q.health<=50&&(Q.health=50),Ii.controller(t,e.canvas.width,e.canvas.height)}function uR(t,e){e.clearRect(0,0,e.canvas.width,e.canvas.height),Q.draw(e),ge.draw(e),Ii.draw(e),Ii.stage>=Df.bars&&Af(t,e)}let Qu=0,cR=100;function hR(t,e){t.paused||dR(t,e),t.pause(),fR(t,e),Q.state==ue.Dead&&(Qu++,Qu>cR&&(t.gameOver(),Qu=0))}function dR(t,e){Q.state!=ue.Dead&&ge.spawner(e.canvas.width,e.canvas.height,Q),Q.controller(e.canvas.width,e.canvas.height),ge.controller(t),Wn.controller()}function fR(t,e){e.clearRect(0,0,e.canvas.width,e.canvas.height),Q.draw(e),ge.draw(e),Wn.draw(e),Af(t,e),t.paused&&nR(e)}function pR(t,e){mR(t),gR(t,e)}function mR(t,e){ge.controller(t)}function gR(t,e){e.clearRect(0,0,e.canvas.width,e.canvas.height),Q.draw(e),ge.draw(e)}const yR=t=>{const{navPlay:e,navTutorial:n}=t,[r]=If($e);return J("div",{className:"login",children:[P("h2",{children:"BLOB MOB"}),J("div",{className:"login__buttons",children:[P("button",{className:"play-button",onClick:()=>e(),children:r?"Play":"Play as Guest"}),P("div",{className:"login__buttons-auth",children:r?P("button",{className:"signout-button",onClick:()=>S1(),children:"Sign Out"}):J(kf,{children:[J("button",{className:"google-button",onClick:()=>RD(),children:["Google",P("i",{className:"fa-brands fa-google"})]}),J("button",{className:"facebook-button",onClick:()=>PD(),children:["Facebook",P("i",{className:"fa-brands fa-square-facebook"})]})]})})]}),J("div",{className:"login__tutorial-blurb",children:[P("b",{children:"WASD"})," to move, ",P("b",{children:"SPACE"})," to attack, or play..."]}),P("button",{className:"tutorial-button",onClick:()=>n(),children:"Tutorial"})]})};const vR=()=>{const t=Nw(ul,"highscores"),e=dN(t,pN("score","desc"),gN(10)),[n,r,i]=DN(e);return r?P("div",{className:"scoreboard",children:P("h2",{children:"Loading..."})}):i?P("div",{className:"scoreboard",children:J("h2",{children:["Error: ",""+i]})}):J("div",{className:"scoreboard",children:[P("h2",{children:"Top Scores"}),P("ul",{children:n==null?void 0:n.map((s,o)=>J("li",{children:[P("p",{className:rg(s.uid),children:s.username}),P("p",{className:rg(s.uid),children:s.score})]},o))})]})},rg=t=>{var e;return((e=$e==null?void 0:$e.currentUser)==null?void 0:e.uid)===`${t}`?"featured":"norm"};const wR=t=>{const{navShop:e}=t;return J("div",{className:"shopCard",children:[P("h2",{children:"Shop"}),P("button",{className:"upgrade-button",onClick:()=>e(),children:"Upgrade"})]})};const ER=t=>{const{navPlay:e,navTutorial:n,navShop:r}=t;return J("div",{className:"home",children:[P(yR,{navPlay:()=>e(),navTutorial:()=>n()}),P(wR,{navShop:()=>r()}),P(vR,{})]})};const Go=t=>{const{name:e,value:n,cost:r}=t;return J("div",{className:"playerStat",children:[J("div",{className:"playerStat__stat",children:[P("p",{className:"playerStat__stat-name",children:e}),P("p",{className:"playerStat__stat-number",children:n})]}),J("div",{className:"playerStat__upgrade",children:[P("i",{className:"fa-solid fa-arrow-up fa-2xl",onClick:()=>{console.log("UPGRADE",e)}}),P("span",{className:"playerStat__upgrade-cost",children:P("p",{children:"$"+r})})]})]})};const SR=t=>{const[e,n]=ie.exports.useState(Q.getAttributes()),{maxHealth:r,maxCool:i,maxSpeed:s,maxPower:o}=e,a=E1(Tf),[l]=If(a);let u="Gerald";return l&&l.displayName&&(u=l.displayName),J("div",{className:"shop",children:[P("div",{className:"shop__left",children:P("p",{children:"Press R to spawn enemy"})}),J("div",{className:"shop__right",children:[P("h2",{children:u}),J("div",{className:"stats",children:[P(Go,{name:"Speed",value:s,cost:15}),P(Go,{name:"Health",value:r,cost:5}),P(Go,{name:"Power",value:o,cost:10}),P(Go,{name:"Cool",value:i,cost:20})]}),P("div",{className:"powerups"})]})]})};const _R=t=>{const{blobsKilled:e,coins:n,navPlay:r,navShop:i}=t;return J("div",{className:"gameover",children:[P("h2",{children:"GAMEOVER"}),J("ul",{children:[J("li",{children:[P("p",{children:"Blobs Killed"}),P("p",{children:e})]}),J("li",{children:[P("p",{children:"Highscore is still"}),P("p",{children:Ut.highscore})]}),J("li",{children:[P("p",{children:"Coins Aquired"}),P("p",{children:n})]})]}),J("div",{className:"gameover__buttons",children:[P("button",{className:"play-button",onClick:()=>r(),children:"Play Again"}),P("button",{className:"upgrade-button",onClick:()=>i(),children:"Upgrade"})]})]})};var cl=(t=>(t[t.Home=0]="Home",t[t.Shop=1]="Shop",t[t.Tutorial=2]="Tutorial",t[t.Play=3]="Play",t[t.Gameover=4]="Gameover",t))(cl||{});const TR=t=>{const{page:e,setPage:n}=t;switch(e){case 0:return P(ER,{navPlay:()=>n(3),navTutorial:()=>n(2),navShop:()=>{n(1),Ut.scene=le.shop}});case 2:Ut.scene=le.tutorial;break;case 3:Ut.scene=le.play;break;case 1:return P(SR,{navHome:()=>{n(0),Ut.scene=le.menu}});case 4:return P(_R,{blobsKilled:Ut.score,coins:0,navPlay:()=>n(3),navShop:()=>{n(1),Ut.scene=le.shop}})}return P(kf,{})},kR=(t,e,n)=>{if(e!=null){switch(++t.frame,t.scene){case le.menu:tR(t,e);break;case le.shop:t.reset(),t.scene=le.shopMain;case le.shopMain:rR(t,e);break;case le.tutorial:t.reset(),Ii.reset(),t.scene=le.tutorialMain;case le.tutorialMain:aR(t,e);break;case le.play:t.reset(),t.updateDifficulty(5),t.scene=le.battle;case le.battle:hR(t,e);break;case le.gameOver:DD(t.score),n(cl.Gameover),t.scene=le.gameOverMain;case le.gameOverMain:pR(t,e);break}return t}},Ut=new eR,IR=()=>{var a;const[t,e]=ie.exports.useState(cl.Home),[n,r]=ie.exports.useState(0),i=""+((a=$e==null?void 0:$e.currentUser)==null?void 0:a.uid),s=mh(ul,"highscores",i),[o]=ON(s);return o&&o.score&&(Ut.highscore=o.score),J(kf,{children:[P(bD,{draw:l=>kR(Ut,l,e)}),P("div",{className:"app",children:P(TR,{page:t,setPage:e})}),P(HD,{navHome:()=>{e(cl.Home),Ut.scene=le.menu},coins:n})]})};Xu.createRoot(document.getElementById("root")).render(P(j1.StrictMode,{children:P(IR,{})}));
