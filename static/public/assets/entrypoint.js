function aS(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var wi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rb(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var te={},sS={get exports(){return te},set exports(e){te=e}},rc={},E={},lS={get exports(){return E},set exports(e){E=e}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Is=Symbol.for("react.element"),uS=Symbol.for("react.portal"),cS=Symbol.for("react.fragment"),dS=Symbol.for("react.strict_mode"),fS=Symbol.for("react.profiler"),hS=Symbol.for("react.provider"),pS=Symbol.for("react.context"),mS=Symbol.for("react.forward_ref"),_S=Symbol.for("react.suspense"),gS=Symbol.for("react.memo"),vS=Symbol.for("react.lazy"),I_=Symbol.iterator;function yS(e){return e===null||typeof e!="object"?null:(e=I_&&e[I_]||e["@@iterator"],typeof e=="function"?e:null)}var Ab={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zb=Object.assign,Nb={};function sa(e,t,n){this.props=e,this.context=t,this.refs=Nb,this.updater=n||Ab}sa.prototype.isReactComponent={};sa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ib(){}Ib.prototype=sa.prototype;function pp(e,t,n){this.props=e,this.context=t,this.refs=Nb,this.updater=n||Ab}var mp=pp.prototype=new Ib;mp.constructor=pp;zb(mp,sa.prototype);mp.isPureReactComponent=!0;var B_=Array.isArray,Bb=Object.prototype.hasOwnProperty,_p={current:null},Mb={key:!0,ref:!0,__self:!0,__source:!0};function Db(e,t,n){var r,o={},a=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)Bb.call(t,r)&&!Mb.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(u===1)o.children=n;else if(1<u){for(var d=Array(u),f=0;f<u;f++)d[f]=arguments[f+2];o.children=d}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)o[r]===void 0&&(o[r]=u[r]);return{$$typeof:Is,type:e,key:a,ref:s,props:o,_owner:_p.current}}function bS(e,t){return{$$typeof:Is,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function gp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Is}function xS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var M_=/\/+/g;function Od(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xS(""+e.key):t.toString(36)}function Il(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Is:case uS:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Od(s,0):r,B_(o)?(n="",e!=null&&(n=e.replace(M_,"$&/")+"/"),Il(o,t,n,"",function(f){return f})):o!=null&&(gp(o)&&(o=bS(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(M_,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",B_(e))for(var u=0;u<e.length;u++){a=e[u];var d=r+Od(a,u);s+=Il(a,t,n,d,o)}else if(d=yS(e),typeof d=="function")for(e=d.call(e),u=0;!(a=e.next()).done;)a=a.value,d=r+Od(a,u++),s+=Il(a,t,n,d,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function hl(e,t,n){if(e==null)return e;var r=[],o=0;return Il(e,r,"","",function(a){return t.call(n,a,o++)}),r}function wS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Vt={current:null},Bl={transition:null},kS={ReactCurrentDispatcher:Vt,ReactCurrentBatchConfig:Bl,ReactCurrentOwner:_p};Re.Children={map:hl,forEach:function(e,t,n){hl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hl(e,function(){t++}),t},toArray:function(e){return hl(e,function(t){return t})||[]},only:function(e){if(!gp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Re.Component=sa;Re.Fragment=cS;Re.Profiler=fS;Re.PureComponent=pp;Re.StrictMode=dS;Re.Suspense=_S;Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kS;Re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zb({},e.props),o=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=_p.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(d in t)Bb.call(t,d)&&!Mb.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&u!==void 0?u[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){u=Array(d);for(var f=0;f<d;f++)u[f]=arguments[f+2];r.children=u}return{$$typeof:Is,type:e.type,key:o,ref:a,props:r,_owner:s}};Re.createContext=function(e){return e={$$typeof:pS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hS,_context:e},e.Consumer=e};Re.createElement=Db;Re.createFactory=function(e){var t=Db.bind(null,e);return t.type=e,t};Re.createRef=function(){return{current:null}};Re.forwardRef=function(e){return{$$typeof:mS,render:e}};Re.isValidElement=gp;Re.lazy=function(e){return{$$typeof:vS,_payload:{_status:-1,_result:e},_init:wS}};Re.memo=function(e,t){return{$$typeof:gS,type:e,compare:t===void 0?null:t}};Re.startTransition=function(e){var t=Bl.transition;Bl.transition={};try{e()}finally{Bl.transition=t}};Re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Re.useCallback=function(e,t){return Vt.current.useCallback(e,t)};Re.useContext=function(e){return Vt.current.useContext(e)};Re.useDebugValue=function(){};Re.useDeferredValue=function(e){return Vt.current.useDeferredValue(e)};Re.useEffect=function(e,t){return Vt.current.useEffect(e,t)};Re.useId=function(){return Vt.current.useId()};Re.useImperativeHandle=function(e,t,n){return Vt.current.useImperativeHandle(e,t,n)};Re.useInsertionEffect=function(e,t){return Vt.current.useInsertionEffect(e,t)};Re.useLayoutEffect=function(e,t){return Vt.current.useLayoutEffect(e,t)};Re.useMemo=function(e,t){return Vt.current.useMemo(e,t)};Re.useReducer=function(e,t,n){return Vt.current.useReducer(e,t,n)};Re.useRef=function(e){return Vt.current.useRef(e)};Re.useState=function(e){return Vt.current.useState(e)};Re.useSyncExternalStore=function(e,t,n){return Vt.current.useSyncExternalStore(e,t,n)};Re.useTransition=function(){return Vt.current.useTransition()};Re.version="18.2.0";(function(e){e.exports=Re})(lS);const U=Rb(E),jb=aS({__proto__:null,default:U},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SS=E,PS=Symbol.for("react.element"),CS=Symbol.for("react.fragment"),ES=Object.prototype.hasOwnProperty,OS=SS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LS={key:!0,ref:!0,__self:!0,__source:!0};function Fb(e,t,n){var r,o={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)ES.call(t,r)&&!LS.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:PS,type:e,key:a,ref:s,props:o,_owner:OS.current}}rc.Fragment=CS;rc.jsx=Fb;rc.jsxs=Fb;(function(e){e.exports=rc})(sS);var qo={},TS={get exports(){return qo},set exports(e){qo=e}},cn={},If={},RS={get exports(){return If},set exports(e){If=e}},Ub={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,oe){var q=z.length;z.push(oe);e:for(;0<q;){var O=q-1>>>1,N=z[O];if(0<o(N,oe))z[O]=oe,z[q]=N,q=O;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var oe=z[0],q=z.pop();if(q!==oe){z[0]=q;e:for(var O=0,N=z.length,M=N>>>1;O<M;){var Q=2*(O+1)-1,ne=z[Q],ue=Q+1,he=z[ue];if(0>o(ne,q))ue<N&&0>o(he,ne)?(z[O]=he,z[ue]=q,O=ue):(z[O]=ne,z[Q]=q,O=Q);else if(ue<N&&0>o(he,q))z[O]=he,z[ue]=q,O=ue;else break e}}return oe}function o(z,oe){var q=z.sortIndex-oe.sortIndex;return q!==0?q:z.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,u=s.now();e.unstable_now=function(){return s.now()-u}}var d=[],f=[],p=1,m=null,_=3,b=!1,y=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(z){for(var oe=n(f);oe!==null;){if(oe.callback===null)r(f);else if(oe.startTime<=z)r(f),oe.sortIndex=oe.expirationTime,t(d,oe);else break;oe=n(f)}}function P(z){if(w=!1,k(z),!y)if(n(d)!==null)y=!0,X(T);else{var oe=n(f);oe!==null&&D(P,oe.startTime-z)}}function T(z,oe){y=!1,w&&(w=!1,g(F),F=-1),b=!0;var q=_;try{for(k(oe),m=n(d);m!==null&&(!(m.expirationTime>oe)||z&&!G());){var O=m.callback;if(typeof O=="function"){m.callback=null,_=m.priorityLevel;var N=O(m.expirationTime<=oe);oe=e.unstable_now(),typeof N=="function"?m.callback=N:m===n(d)&&r(d),k(oe)}else r(d);m=n(d)}if(m!==null)var M=!0;else{var Q=n(f);Q!==null&&D(P,Q.startTime-oe),M=!1}return M}finally{m=null,_=q,b=!1}}var A=!1,I=null,F=-1,W=5,B=-1;function G(){return!(e.unstable_now()-B<W)}function J(){if(I!==null){var z=e.unstable_now();B=z;var oe=!0;try{oe=I(!0,z)}finally{oe?ee():(A=!1,I=null)}}else A=!1}var ee;if(typeof x=="function")ee=function(){x(J)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,le=V.port2;V.port1.onmessage=J,ee=function(){le.postMessage(null)}}else ee=function(){C(J,0)};function X(z){I=z,A||(A=!0,ee())}function D(z,oe){F=C(function(){z(e.unstable_now())},oe)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){y||b||(y=!0,X(T))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return _},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(z){switch(_){case 1:case 2:case 3:var oe=3;break;default:oe=_}var q=_;_=oe;try{return z()}finally{_=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,oe){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var q=_;_=z;try{return oe()}finally{_=q}},e.unstable_scheduleCallback=function(z,oe,q){var O=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?O+q:O):q=O,z){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=q+N,z={id:p++,callback:oe,priorityLevel:z,startTime:q,expirationTime:N,sortIndex:-1},q>O?(z.sortIndex=q,t(f,z),n(d)===null&&z===n(f)&&(w?(g(F),F=-1):w=!0,D(P,q-O))):(z.sortIndex=N,t(d,z),y||b||(y=!0,X(T))),z},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(z){var oe=_;return function(){var q=_;_=oe;try{return z.apply(this,arguments)}finally{_=q}}}})(Ub);(function(e){e.exports=Ub})(RS);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $b=E,ln=If;function se(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wb=new Set,ls={};function ni(e,t){Ki(e,t),Ki(e+"Capture",t)}function Ki(e,t){for(ls[e]=t,e=0;e<t.length;e++)Wb.add(t[e])}var Cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bf=Object.prototype.hasOwnProperty,AS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,D_={},j_={};function zS(e){return Bf.call(j_,e)?!0:Bf.call(D_,e)?!1:AS.test(e)?j_[e]=!0:(D_[e]=!0,!1)}function NS(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function IS(e,t,n,r){if(t===null||typeof t>"u"||NS(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Zt(e,t,n,r,o,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var At={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){At[e]=new Zt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];At[t]=new Zt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){At[e]=new Zt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){At[e]=new Zt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){At[e]=new Zt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){At[e]=new Zt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){At[e]=new Zt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){At[e]=new Zt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){At[e]=new Zt(e,5,!1,e.toLowerCase(),null,!1,!1)});var vp=/[\-:]([a-z])/g;function yp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(vp,yp);At[t]=new Zt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(vp,yp);At[t]=new Zt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(vp,yp);At[t]=new Zt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){At[e]=new Zt(e,1,!1,e.toLowerCase(),null,!1,!1)});At.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){At[e]=new Zt(e,1,!1,e.toLowerCase(),null,!0,!0)});function bp(e,t,n,r){var o=At.hasOwnProperty(t)?At[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(IS(t,n,o,r)&&(n=null),r||o===null?zS(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Rr=$b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pl=Symbol.for("react.element"),ki=Symbol.for("react.portal"),Si=Symbol.for("react.fragment"),xp=Symbol.for("react.strict_mode"),Mf=Symbol.for("react.profiler"),Hb=Symbol.for("react.provider"),Vb=Symbol.for("react.context"),wp=Symbol.for("react.forward_ref"),Df=Symbol.for("react.suspense"),jf=Symbol.for("react.suspense_list"),kp=Symbol.for("react.memo"),Fr=Symbol.for("react.lazy"),Zb=Symbol.for("react.offscreen"),F_=Symbol.iterator;function Ta(e){return e===null||typeof e!="object"?null:(e=F_&&e[F_]||e["@@iterator"],typeof e=="function"?e:null)}var ut=Object.assign,Ld;function Ha(e){if(Ld===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ld=t&&t[1]||""}return`
`+Ld+e}var Td=!1;function Rd(e,t){if(!e||Td)return"";Td=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var o=f.stack.split(`
`),a=r.stack.split(`
`),s=o.length-1,u=a.length-1;1<=s&&0<=u&&o[s]!==a[u];)u--;for(;1<=s&&0<=u;s--,u--)if(o[s]!==a[u]){if(s!==1||u!==1)do if(s--,u--,0>u||o[s]!==a[u]){var d=`
`+o[s].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=s&&0<=u);break}}}finally{Td=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ha(e):""}function BS(e){switch(e.tag){case 5:return Ha(e.type);case 16:return Ha("Lazy");case 13:return Ha("Suspense");case 19:return Ha("SuspenseList");case 0:case 2:case 15:return e=Rd(e.type,!1),e;case 11:return e=Rd(e.type.render,!1),e;case 1:return e=Rd(e.type,!0),e;default:return""}}function Ff(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Si:return"Fragment";case ki:return"Portal";case Mf:return"Profiler";case xp:return"StrictMode";case Df:return"Suspense";case jf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vb:return(e.displayName||"Context")+".Consumer";case Hb:return(e._context.displayName||"Context")+".Provider";case wp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case kp:return t=e.displayName||null,t!==null?t:Ff(e.type)||"Memo";case Fr:t=e._payload,e=e._init;try{return Ff(e(t))}catch{}}return null}function MS(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ff(t);case 8:return t===xp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ho(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qb(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function DS(e){var t=qb(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ml(e){e._valueTracker||(e._valueTracker=DS(e))}function Kb(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=qb(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function iu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Uf(e,t){var n=t.checked;return ut({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function U_(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ho(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qb(e,t){t=t.checked,t!=null&&bp(e,"checked",t,!1)}function $f(e,t){Qb(e,t);var n=ho(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Wf(e,t.type,n):t.hasOwnProperty("defaultValue")&&Wf(e,t.type,ho(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $_(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Wf(e,t,n){(t!=="number"||iu(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Va=Array.isArray;function Mi(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ho(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Hf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(se(91));return ut({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function W_(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(se(92));if(Va(n)){if(1<n.length)throw Error(se(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ho(n)}}function Gb(e,t){var n=ho(t.value),r=ho(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function H_(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jb(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _l,Yb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_l=_l||document.createElement("div"),_l.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_l.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function us(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jS=["Webkit","ms","Moz","O"];Object.keys(Qa).forEach(function(e){jS.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qa[t]=Qa[e]})});function Xb(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qa.hasOwnProperty(e)&&Qa[e]?(""+t).trim():t+"px"}function e0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Xb(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var FS=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zf(e,t){if(t){if(FS[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(se(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(se(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(se(61))}if(t.style!=null&&typeof t.style!="object")throw Error(se(62))}}function qf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kf=null;function Sp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qf=null,Di=null,ji=null;function V_(e){if(e=Ds(e)){if(typeof Qf!="function")throw Error(se(280));var t=e.stateNode;t&&(t=lc(t),Qf(e.stateNode,e.type,t))}}function t0(e){Di?ji?ji.push(e):ji=[e]:Di=e}function n0(){if(Di){var e=Di,t=ji;if(ji=Di=null,V_(e),t)for(e=0;e<t.length;e++)V_(t[e])}}function r0(e,t){return e(t)}function o0(){}var Ad=!1;function i0(e,t,n){if(Ad)return e(t,n);Ad=!0;try{return r0(e,t,n)}finally{Ad=!1,(Di!==null||ji!==null)&&(o0(),n0())}}function cs(e,t){var n=e.stateNode;if(n===null)return null;var r=lc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(se(231,t,typeof n));return n}var Gf=!1;if(Cr)try{var Ra={};Object.defineProperty(Ra,"passive",{get:function(){Gf=!0}}),window.addEventListener("test",Ra,Ra),window.removeEventListener("test",Ra,Ra)}catch{Gf=!1}function US(e,t,n,r,o,a,s,u,d){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(p){this.onError(p)}}var Ga=!1,au=null,su=!1,Jf=null,$S={onError:function(e){Ga=!0,au=e}};function WS(e,t,n,r,o,a,s,u,d){Ga=!1,au=null,US.apply($S,arguments)}function HS(e,t,n,r,o,a,s,u,d){if(WS.apply(this,arguments),Ga){if(Ga){var f=au;Ga=!1,au=null}else throw Error(se(198));su||(su=!0,Jf=f)}}function ri(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function a0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Z_(e){if(ri(e)!==e)throw Error(se(188))}function VS(e){var t=e.alternate;if(!t){if(t=ri(e),t===null)throw Error(se(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return Z_(o),e;if(a===r)return Z_(o),t;a=a.sibling}throw Error(se(188))}if(n.return!==r.return)n=o,r=a;else{for(var s=!1,u=o.child;u;){if(u===n){s=!0,n=o,r=a;break}if(u===r){s=!0,r=o,n=a;break}u=u.sibling}if(!s){for(u=a.child;u;){if(u===n){s=!0,n=a,r=o;break}if(u===r){s=!0,r=a,n=o;break}u=u.sibling}if(!s)throw Error(se(189))}}if(n.alternate!==r)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?e:t}function s0(e){return e=VS(e),e!==null?l0(e):null}function l0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=l0(e);if(t!==null)return t;e=e.sibling}return null}var u0=ln.unstable_scheduleCallback,q_=ln.unstable_cancelCallback,ZS=ln.unstable_shouldYield,qS=ln.unstable_requestPaint,mt=ln.unstable_now,KS=ln.unstable_getCurrentPriorityLevel,Pp=ln.unstable_ImmediatePriority,c0=ln.unstable_UserBlockingPriority,lu=ln.unstable_NormalPriority,QS=ln.unstable_LowPriority,d0=ln.unstable_IdlePriority,oc=null,or=null;function GS(e){if(or&&typeof or.onCommitFiberRoot=="function")try{or.onCommitFiberRoot(oc,e,void 0,(e.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:XS,JS=Math.log,YS=Math.LN2;function XS(e){return e>>>=0,e===0?32:31-(JS(e)/YS|0)|0}var gl=64,vl=4194304;function Za(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function uu(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,s=n&268435455;if(s!==0){var u=s&~o;u!==0?r=Za(u):(a&=s,a!==0&&(r=Za(a)))}else s=n&~o,s!==0?r=Za(s):a!==0&&(r=Za(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Bn(t),o=1<<n,r|=e[n],t&=~o;return r}function eP(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tP(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-Bn(a),u=1<<s,d=o[s];d===-1?(!(u&n)||u&r)&&(o[s]=eP(u,t)):d<=t&&(e.expiredLanes|=u),a&=~u}}function Yf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function f0(){var e=gl;return gl<<=1,!(gl&4194240)&&(gl=64),e}function zd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Bs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Bn(t),e[t]=n}function nP(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Bn(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function Cp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Bn(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Ke=0;function h0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var p0,Ep,m0,_0,g0,Xf=!1,yl=[],Gr=null,Jr=null,Yr=null,ds=new Map,fs=new Map,Wr=[],rP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function K_(e,t){switch(e){case"focusin":case"focusout":Gr=null;break;case"dragenter":case"dragleave":Jr=null;break;case"mouseover":case"mouseout":Yr=null;break;case"pointerover":case"pointerout":ds.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fs.delete(t.pointerId)}}function Aa(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=Ds(t),t!==null&&Ep(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function oP(e,t,n,r,o){switch(t){case"focusin":return Gr=Aa(Gr,e,t,n,r,o),!0;case"dragenter":return Jr=Aa(Jr,e,t,n,r,o),!0;case"mouseover":return Yr=Aa(Yr,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return ds.set(a,Aa(ds.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,fs.set(a,Aa(fs.get(a)||null,e,t,n,r,o)),!0}return!1}function v0(e){var t=Do(e.target);if(t!==null){var n=ri(t);if(n!==null){if(t=n.tag,t===13){if(t=a0(n),t!==null){e.blockedOn=t,g0(e.priority,function(){m0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ml(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=eh(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Kf=r,n.target.dispatchEvent(r),Kf=null}else return t=Ds(n),t!==null&&Ep(t),e.blockedOn=n,!1;t.shift()}return!0}function Q_(e,t,n){Ml(e)&&n.delete(t)}function iP(){Xf=!1,Gr!==null&&Ml(Gr)&&(Gr=null),Jr!==null&&Ml(Jr)&&(Jr=null),Yr!==null&&Ml(Yr)&&(Yr=null),ds.forEach(Q_),fs.forEach(Q_)}function za(e,t){e.blockedOn===t&&(e.blockedOn=null,Xf||(Xf=!0,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,iP)))}function hs(e){function t(o){return za(o,e)}if(0<yl.length){za(yl[0],e);for(var n=1;n<yl.length;n++){var r=yl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gr!==null&&za(Gr,e),Jr!==null&&za(Jr,e),Yr!==null&&za(Yr,e),ds.forEach(t),fs.forEach(t),n=0;n<Wr.length;n++)r=Wr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Wr.length&&(n=Wr[0],n.blockedOn===null);)v0(n),n.blockedOn===null&&Wr.shift()}var Fi=Rr.ReactCurrentBatchConfig,cu=!0;function aP(e,t,n,r){var o=Ke,a=Fi.transition;Fi.transition=null;try{Ke=1,Op(e,t,n,r)}finally{Ke=o,Fi.transition=a}}function sP(e,t,n,r){var o=Ke,a=Fi.transition;Fi.transition=null;try{Ke=4,Op(e,t,n,r)}finally{Ke=o,Fi.transition=a}}function Op(e,t,n,r){if(cu){var o=eh(e,t,n,r);if(o===null)Wd(e,t,r,du,n),K_(e,r);else if(oP(o,e,t,n,r))r.stopPropagation();else if(K_(e,r),t&4&&-1<rP.indexOf(e)){for(;o!==null;){var a=Ds(o);if(a!==null&&p0(a),a=eh(e,t,n,r),a===null&&Wd(e,t,r,du,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else Wd(e,t,r,null,n)}}var du=null;function eh(e,t,n,r){if(du=null,e=Sp(r),e=Do(e),e!==null)if(t=ri(e),t===null)e=null;else if(n=t.tag,n===13){if(e=a0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return du=e,null}function y0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(KS()){case Pp:return 1;case c0:return 4;case lu:case QS:return 16;case d0:return 536870912;default:return 16}default:return 16}}var qr=null,Lp=null,Dl=null;function b0(){if(Dl)return Dl;var e,t=Lp,n=t.length,r,o="value"in qr?qr.value:qr.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[a-r];r++);return Dl=o.slice(e,1<r?1-r:void 0)}function jl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bl(){return!0}function G_(){return!1}function dn(e){function t(n,r,o,a,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(a):a[u]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?bl:G_,this.isPropagationStopped=G_,this}return ut(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),t}var la={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tp=dn(la),Ms=ut({},la,{view:0,detail:0}),lP=dn(Ms),Nd,Id,Na,ic=ut({},Ms,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Na&&(Na&&e.type==="mousemove"?(Nd=e.screenX-Na.screenX,Id=e.screenY-Na.screenY):Id=Nd=0,Na=e),Nd)},movementY:function(e){return"movementY"in e?e.movementY:Id}}),J_=dn(ic),uP=ut({},ic,{dataTransfer:0}),cP=dn(uP),dP=ut({},Ms,{relatedTarget:0}),Bd=dn(dP),fP=ut({},la,{animationName:0,elapsedTime:0,pseudoElement:0}),hP=dn(fP),pP=ut({},la,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mP=dn(pP),_P=ut({},la,{data:0}),Y_=dn(_P),gP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bP(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yP[e])?!!t[e]:!1}function Rp(){return bP}var xP=ut({},Ms,{key:function(e){if(e.key){var t=gP[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vP[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rp,charCode:function(e){return e.type==="keypress"?jl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wP=dn(xP),kP=ut({},ic,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),X_=dn(kP),SP=ut({},Ms,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rp}),PP=dn(SP),CP=ut({},la,{propertyName:0,elapsedTime:0,pseudoElement:0}),EP=dn(CP),OP=ut({},ic,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),LP=dn(OP),TP=[9,13,27,32],Ap=Cr&&"CompositionEvent"in window,Ja=null;Cr&&"documentMode"in document&&(Ja=document.documentMode);var RP=Cr&&"TextEvent"in window&&!Ja,x0=Cr&&(!Ap||Ja&&8<Ja&&11>=Ja),eg=String.fromCharCode(32),tg=!1;function w0(e,t){switch(e){case"keyup":return TP.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function k0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pi=!1;function AP(e,t){switch(e){case"compositionend":return k0(t);case"keypress":return t.which!==32?null:(tg=!0,eg);case"textInput":return e=t.data,e===eg&&tg?null:e;default:return null}}function zP(e,t){if(Pi)return e==="compositionend"||!Ap&&w0(e,t)?(e=b0(),Dl=Lp=qr=null,Pi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return x0&&t.locale!=="ko"?null:t.data;default:return null}}var NP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ng(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!NP[e.type]:t==="textarea"}function S0(e,t,n,r){t0(r),t=fu(t,"onChange"),0<t.length&&(n=new Tp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ya=null,ps=null;function IP(e){I0(e,0)}function ac(e){var t=Oi(e);if(Kb(t))return e}function BP(e,t){if(e==="change")return t}var P0=!1;if(Cr){var Md;if(Cr){var Dd="oninput"in document;if(!Dd){var rg=document.createElement("div");rg.setAttribute("oninput","return;"),Dd=typeof rg.oninput=="function"}Md=Dd}else Md=!1;P0=Md&&(!document.documentMode||9<document.documentMode)}function og(){Ya&&(Ya.detachEvent("onpropertychange",C0),ps=Ya=null)}function C0(e){if(e.propertyName==="value"&&ac(ps)){var t=[];S0(t,ps,e,Sp(e)),i0(IP,t)}}function MP(e,t,n){e==="focusin"?(og(),Ya=t,ps=n,Ya.attachEvent("onpropertychange",C0)):e==="focusout"&&og()}function DP(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ac(ps)}function jP(e,t){if(e==="click")return ac(t)}function FP(e,t){if(e==="input"||e==="change")return ac(t)}function UP(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jn=typeof Object.is=="function"?Object.is:UP;function ms(e,t){if(jn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Bf.call(t,o)||!jn(e[o],t[o]))return!1}return!0}function ig(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ag(e,t){var n=ig(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ig(n)}}function E0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?E0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function O0(){for(var e=window,t=iu();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=iu(e.document)}return t}function zp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $P(e){var t=O0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&E0(n.ownerDocument.documentElement,n)){if(r!==null&&zp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=ag(n,a);var s=ag(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var WP=Cr&&"documentMode"in document&&11>=document.documentMode,Ci=null,th=null,Xa=null,nh=!1;function sg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nh||Ci==null||Ci!==iu(r)||(r=Ci,"selectionStart"in r&&zp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xa&&ms(Xa,r)||(Xa=r,r=fu(th,"onSelect"),0<r.length&&(t=new Tp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ci)))}function xl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ei={animationend:xl("Animation","AnimationEnd"),animationiteration:xl("Animation","AnimationIteration"),animationstart:xl("Animation","AnimationStart"),transitionend:xl("Transition","TransitionEnd")},jd={},L0={};Cr&&(L0=document.createElement("div").style,"AnimationEvent"in window||(delete Ei.animationend.animation,delete Ei.animationiteration.animation,delete Ei.animationstart.animation),"TransitionEvent"in window||delete Ei.transitionend.transition);function sc(e){if(jd[e])return jd[e];if(!Ei[e])return e;var t=Ei[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in L0)return jd[e]=t[n];return e}var T0=sc("animationend"),R0=sc("animationiteration"),A0=sc("animationstart"),z0=sc("transitionend"),N0=new Map,lg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yo(e,t){N0.set(e,t),ni(t,[e])}for(var Fd=0;Fd<lg.length;Fd++){var Ud=lg[Fd],HP=Ud.toLowerCase(),VP=Ud[0].toUpperCase()+Ud.slice(1);yo(HP,"on"+VP)}yo(T0,"onAnimationEnd");yo(R0,"onAnimationIteration");yo(A0,"onAnimationStart");yo("dblclick","onDoubleClick");yo("focusin","onFocus");yo("focusout","onBlur");yo(z0,"onTransitionEnd");Ki("onMouseEnter",["mouseout","mouseover"]);Ki("onMouseLeave",["mouseout","mouseover"]);Ki("onPointerEnter",["pointerout","pointerover"]);Ki("onPointerLeave",["pointerout","pointerover"]);ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ni("onBeforeInput",["compositionend","keypress","textInput","paste"]);ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZP=new Set("cancel close invalid load scroll toggle".split(" ").concat(qa));function ug(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,HS(r,t,void 0,e),e.currentTarget=null}function I0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var s=r.length-1;0<=s;s--){var u=r[s],d=u.instance,f=u.currentTarget;if(u=u.listener,d!==a&&o.isPropagationStopped())break e;ug(o,u,f),a=d}else for(s=0;s<r.length;s++){if(u=r[s],d=u.instance,f=u.currentTarget,u=u.listener,d!==a&&o.isPropagationStopped())break e;ug(o,u,f),a=d}}}if(su)throw e=Jf,su=!1,Jf=null,e}function nt(e,t){var n=t[sh];n===void 0&&(n=t[sh]=new Set);var r=e+"__bubble";n.has(r)||(B0(t,e,2,!1),n.add(r))}function $d(e,t,n){var r=0;t&&(r|=4),B0(n,e,r,t)}var wl="_reactListening"+Math.random().toString(36).slice(2);function _s(e){if(!e[wl]){e[wl]=!0,Wb.forEach(function(n){n!=="selectionchange"&&(ZP.has(n)||$d(n,!1,e),$d(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wl]||(t[wl]=!0,$d("selectionchange",!1,t))}}function B0(e,t,n,r){switch(y0(t)){case 1:var o=aP;break;case 4:o=sP;break;default:o=Op}n=o.bind(null,t,n,e),o=void 0,!Gf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Wd(e,t,n,r,o){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var d=s.tag;if((d===3||d===4)&&(d=s.stateNode.containerInfo,d===o||d.nodeType===8&&d.parentNode===o))return;s=s.return}for(;u!==null;){if(s=Do(u),s===null)return;if(d=s.tag,d===5||d===6){r=a=s;continue e}u=u.parentNode}}r=r.return}i0(function(){var f=a,p=Sp(n),m=[];e:{var _=N0.get(e);if(_!==void 0){var b=Tp,y=e;switch(e){case"keypress":if(jl(n)===0)break e;case"keydown":case"keyup":b=wP;break;case"focusin":y="focus",b=Bd;break;case"focusout":y="blur",b=Bd;break;case"beforeblur":case"afterblur":b=Bd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=J_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=cP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=PP;break;case T0:case R0:case A0:b=hP;break;case z0:b=EP;break;case"scroll":b=lP;break;case"wheel":b=LP;break;case"copy":case"cut":case"paste":b=mP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=X_}var w=(t&4)!==0,C=!w&&e==="scroll",g=w?_!==null?_+"Capture":null:_;w=[];for(var x=f,k;x!==null;){k=x;var P=k.stateNode;if(k.tag===5&&P!==null&&(k=P,g!==null&&(P=cs(x,g),P!=null&&w.push(gs(x,P,k)))),C)break;x=x.return}0<w.length&&(_=new b(_,y,null,n,p),m.push({event:_,listeners:w}))}}if(!(t&7)){e:{if(_=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",_&&n!==Kf&&(y=n.relatedTarget||n.fromElement)&&(Do(y)||y[Er]))break e;if((b||_)&&(_=p.window===p?p:(_=p.ownerDocument)?_.defaultView||_.parentWindow:window,b?(y=n.relatedTarget||n.toElement,b=f,y=y?Do(y):null,y!==null&&(C=ri(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(b=null,y=f),b!==y)){if(w=J_,P="onMouseLeave",g="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(w=X_,P="onPointerLeave",g="onPointerEnter",x="pointer"),C=b==null?_:Oi(b),k=y==null?_:Oi(y),_=new w(P,x+"leave",b,n,p),_.target=C,_.relatedTarget=k,P=null,Do(p)===f&&(w=new w(g,x+"enter",y,n,p),w.target=k,w.relatedTarget=C,P=w),C=P,b&&y)t:{for(w=b,g=y,x=0,k=w;k;k=vi(k))x++;for(k=0,P=g;P;P=vi(P))k++;for(;0<x-k;)w=vi(w),x--;for(;0<k-x;)g=vi(g),k--;for(;x--;){if(w===g||g!==null&&w===g.alternate)break t;w=vi(w),g=vi(g)}w=null}else w=null;b!==null&&cg(m,_,b,w,!1),y!==null&&C!==null&&cg(m,C,y,w,!0)}}e:{if(_=f?Oi(f):window,b=_.nodeName&&_.nodeName.toLowerCase(),b==="select"||b==="input"&&_.type==="file")var T=BP;else if(ng(_))if(P0)T=FP;else{T=DP;var A=MP}else(b=_.nodeName)&&b.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(T=jP);if(T&&(T=T(e,f))){S0(m,T,n,p);break e}A&&A(e,_,f),e==="focusout"&&(A=_._wrapperState)&&A.controlled&&_.type==="number"&&Wf(_,"number",_.value)}switch(A=f?Oi(f):window,e){case"focusin":(ng(A)||A.contentEditable==="true")&&(Ci=A,th=f,Xa=null);break;case"focusout":Xa=th=Ci=null;break;case"mousedown":nh=!0;break;case"contextmenu":case"mouseup":case"dragend":nh=!1,sg(m,n,p);break;case"selectionchange":if(WP)break;case"keydown":case"keyup":sg(m,n,p)}var I;if(Ap)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else Pi?w0(e,n)&&(F="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(x0&&n.locale!=="ko"&&(Pi||F!=="onCompositionStart"?F==="onCompositionEnd"&&Pi&&(I=b0()):(qr=p,Lp="value"in qr?qr.value:qr.textContent,Pi=!0)),A=fu(f,F),0<A.length&&(F=new Y_(F,e,null,n,p),m.push({event:F,listeners:A}),I?F.data=I:(I=k0(n),I!==null&&(F.data=I)))),(I=RP?AP(e,n):zP(e,n))&&(f=fu(f,"onBeforeInput"),0<f.length&&(p=new Y_("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:f}),p.data=I))}I0(m,t)})}function gs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fu(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=cs(e,n),a!=null&&r.unshift(gs(e,a,o)),a=cs(e,t),a!=null&&r.push(gs(e,a,o))),e=e.return}return r}function vi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cg(e,t,n,r,o){for(var a=t._reactName,s=[];n!==null&&n!==r;){var u=n,d=u.alternate,f=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&f!==null&&(u=f,o?(d=cs(n,a),d!=null&&s.unshift(gs(n,d,u))):o||(d=cs(n,a),d!=null&&s.push(gs(n,d,u)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var qP=/\r\n?/g,KP=/\u0000|\uFFFD/g;function dg(e){return(typeof e=="string"?e:""+e).replace(qP,`
`).replace(KP,"")}function kl(e,t,n){if(t=dg(t),dg(e)!==t&&n)throw Error(se(425))}function hu(){}var rh=null,oh=null;function ih(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ah=typeof setTimeout=="function"?setTimeout:void 0,QP=typeof clearTimeout=="function"?clearTimeout:void 0,fg=typeof Promise=="function"?Promise:void 0,GP=typeof queueMicrotask=="function"?queueMicrotask:typeof fg<"u"?function(e){return fg.resolve(null).then(e).catch(JP)}:ah;function JP(e){setTimeout(function(){throw e})}function Hd(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),hs(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);hs(t)}function Xr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ua=Math.random().toString(36).slice(2),tr="__reactFiber$"+ua,vs="__reactProps$"+ua,Er="__reactContainer$"+ua,sh="__reactEvents$"+ua,YP="__reactListeners$"+ua,XP="__reactHandles$"+ua;function Do(e){var t=e[tr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Er]||n[tr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hg(e);e!==null;){if(n=e[tr])return n;e=hg(e)}return t}e=n,n=e.parentNode}return null}function Ds(e){return e=e[tr]||e[Er],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Oi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(se(33))}function lc(e){return e[vs]||null}var lh=[],Li=-1;function bo(e){return{current:e}}function rt(e){0>Li||(e.current=lh[Li],lh[Li]=null,Li--)}function et(e,t){Li++,lh[Li]=e.current,e.current=t}var po={},Ft=bo(po),Jt=bo(!1),Ko=po;function Qi(e,t){var n=e.type.contextTypes;if(!n)return po;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Yt(e){return e=e.childContextTypes,e!=null}function pu(){rt(Jt),rt(Ft)}function pg(e,t,n){if(Ft.current!==po)throw Error(se(168));et(Ft,t),et(Jt,n)}function M0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(se(108,MS(e)||"Unknown",o));return ut({},n,r)}function mu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||po,Ko=Ft.current,et(Ft,e),et(Jt,Jt.current),!0}function mg(e,t,n){var r=e.stateNode;if(!r)throw Error(se(169));n?(e=M0(e,t,Ko),r.__reactInternalMemoizedMergedChildContext=e,rt(Jt),rt(Ft),et(Ft,e)):rt(Jt),et(Jt,n)}var br=null,uc=!1,Vd=!1;function D0(e){br===null?br=[e]:br.push(e)}function eC(e){uc=!0,D0(e)}function xo(){if(!Vd&&br!==null){Vd=!0;var e=0,t=Ke;try{var n=br;for(Ke=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}br=null,uc=!1}catch(o){throw br!==null&&(br=br.slice(e+1)),u0(Pp,xo),o}finally{Ke=t,Vd=!1}}return null}var Ti=[],Ri=0,_u=null,gu=0,gn=[],vn=0,Qo=null,wr=1,kr="";function No(e,t){Ti[Ri++]=gu,Ti[Ri++]=_u,_u=e,gu=t}function j0(e,t,n){gn[vn++]=wr,gn[vn++]=kr,gn[vn++]=Qo,Qo=e;var r=wr;e=kr;var o=32-Bn(r)-1;r&=~(1<<o),n+=1;var a=32-Bn(t)+o;if(30<a){var s=o-o%5;a=(r&(1<<s)-1).toString(32),r>>=s,o-=s,wr=1<<32-Bn(t)+o|n<<o|r,kr=a+e}else wr=1<<a|n<<o|r,kr=e}function Np(e){e.return!==null&&(No(e,1),j0(e,1,0))}function Ip(e){for(;e===_u;)_u=Ti[--Ri],Ti[Ri]=null,gu=Ti[--Ri],Ti[Ri]=null;for(;e===Qo;)Qo=gn[--vn],gn[vn]=null,kr=gn[--vn],gn[vn]=null,wr=gn[--vn],gn[vn]=null}var an=null,nn=null,it=!1,Nn=null;function F0(e,t){var n=yn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _g(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,an=e,nn=Xr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,an=e,nn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qo!==null?{id:wr,overflow:kr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,an=e,nn=null,!0):!1;default:return!1}}function uh(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ch(e){if(it){var t=nn;if(t){var n=t;if(!_g(e,t)){if(uh(e))throw Error(se(418));t=Xr(n.nextSibling);var r=an;t&&_g(e,t)?F0(r,n):(e.flags=e.flags&-4097|2,it=!1,an=e)}}else{if(uh(e))throw Error(se(418));e.flags=e.flags&-4097|2,it=!1,an=e}}}function gg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;an=e}function Sl(e){if(e!==an)return!1;if(!it)return gg(e),it=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ih(e.type,e.memoizedProps)),t&&(t=nn)){if(uh(e))throw U0(),Error(se(418));for(;t;)F0(e,t),t=Xr(t.nextSibling)}if(gg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(se(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nn=Xr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nn=null}}else nn=an?Xr(e.stateNode.nextSibling):null;return!0}function U0(){for(var e=nn;e;)e=Xr(e.nextSibling)}function Gi(){nn=an=null,it=!1}function Bp(e){Nn===null?Nn=[e]:Nn.push(e)}var tC=Rr.ReactCurrentBatchConfig;function Rn(e,t){if(e&&e.defaultProps){t=ut({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var vu=bo(null),yu=null,Ai=null,Mp=null;function Dp(){Mp=Ai=yu=null}function jp(e){var t=vu.current;rt(vu),e._currentValue=t}function dh(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ui(e,t){yu=e,Mp=Ai=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Gt=!0),e.firstContext=null)}function wn(e){var t=e._currentValue;if(Mp!==e)if(e={context:e,memoizedValue:t,next:null},Ai===null){if(yu===null)throw Error(se(308));Ai=e,yu.dependencies={lanes:0,firstContext:e}}else Ai=Ai.next=e;return t}var jo=null;function Fp(e){jo===null?jo=[e]:jo.push(e)}function $0(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Fp(t)):(n.next=o.next,o.next=n),t.interleaved=n,Or(e,r)}function Or(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ur=!1;function Up(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function W0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Sr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function eo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Fe&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Or(e,n)}return o=r.interleaved,o===null?(t.next=t,Fp(r)):(t.next=o.next,o.next=t),r.interleaved=t,Or(e,n)}function Fl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cp(e,n)}}function vg(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bu(e,t,n,r){var o=e.updateQueue;Ur=!1;var a=o.firstBaseUpdate,s=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var d=u,f=d.next;d.next=null,s===null?a=f:s.next=f,s=d;var p=e.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==s&&(u===null?p.firstBaseUpdate=f:u.next=f,p.lastBaseUpdate=d))}if(a!==null){var m=o.baseState;s=0,p=f=d=null,u=a;do{var _=u.lane,b=u.eventTime;if((r&_)===_){p!==null&&(p=p.next={eventTime:b,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var y=e,w=u;switch(_=t,b=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){m=y.call(b,m,_);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,_=typeof y=="function"?y.call(b,m,_):y,_==null)break e;m=ut({},m,_);break e;case 2:Ur=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,_=o.effects,_===null?o.effects=[u]:_.push(u))}else b={eventTime:b,lane:_,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(f=p=b,d=m):p=p.next=b,s|=_;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;_=u,u=_.next,_.next=null,o.lastBaseUpdate=_,o.shared.pending=null}}while(1);if(p===null&&(d=m),o.baseState=d,o.firstBaseUpdate=f,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);Jo|=s,e.lanes=s,e.memoizedState=m}}function yg(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(se(191,o));o.call(r)}}}var H0=new $b.Component().refs;function fh(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ut({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cc={isMounted:function(e){return(e=e._reactInternals)?ri(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ht(),o=no(e),a=Sr(r,o);a.payload=t,n!=null&&(a.callback=n),t=eo(e,a,o),t!==null&&(Mn(t,e,o,r),Fl(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ht(),o=no(e),a=Sr(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=eo(e,a,o),t!==null&&(Mn(t,e,o,r),Fl(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ht(),r=no(e),o=Sr(n,r);o.tag=2,t!=null&&(o.callback=t),t=eo(e,o,r),t!==null&&(Mn(t,e,r,n),Fl(t,e,r))}};function bg(e,t,n,r,o,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,s):t.prototype&&t.prototype.isPureReactComponent?!ms(n,r)||!ms(o,a):!0}function V0(e,t,n){var r=!1,o=po,a=t.contextType;return typeof a=="object"&&a!==null?a=wn(a):(o=Yt(t)?Ko:Ft.current,r=t.contextTypes,a=(r=r!=null)?Qi(e,o):po),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function xg(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&cc.enqueueReplaceState(t,t.state,null)}function hh(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=H0,Up(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=wn(a):(a=Yt(t)?Ko:Ft.current,o.context=Qi(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(fh(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&cc.enqueueReplaceState(o,o.state,null),bu(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ia(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var r=n.stateNode}if(!r)throw Error(se(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var u=o.refs;u===H0&&(u=o.refs={}),s===null?delete u[a]:u[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,e))}return e}function Pl(e,t){throw e=Object.prototype.toString.call(t),Error(se(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function wg(e){var t=e._init;return t(e._payload)}function Z0(e){function t(g,x){if(e){var k=g.deletions;k===null?(g.deletions=[x],g.flags|=16):k.push(x)}}function n(g,x){if(!e)return null;for(;x!==null;)t(g,x),x=x.sibling;return null}function r(g,x){for(g=new Map;x!==null;)x.key!==null?g.set(x.key,x):g.set(x.index,x),x=x.sibling;return g}function o(g,x){return g=ro(g,x),g.index=0,g.sibling=null,g}function a(g,x,k){return g.index=k,e?(k=g.alternate,k!==null?(k=k.index,k<x?(g.flags|=2,x):k):(g.flags|=2,x)):(g.flags|=1048576,x)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function u(g,x,k,P){return x===null||x.tag!==6?(x=Yd(k,g.mode,P),x.return=g,x):(x=o(x,k),x.return=g,x)}function d(g,x,k,P){var T=k.type;return T===Si?p(g,x,k.props.children,P,k.key):x!==null&&(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Fr&&wg(T)===x.type)?(P=o(x,k.props),P.ref=Ia(g,x,k),P.return=g,P):(P=Zl(k.type,k.key,k.props,null,g.mode,P),P.ref=Ia(g,x,k),P.return=g,P)}function f(g,x,k,P){return x===null||x.tag!==4||x.stateNode.containerInfo!==k.containerInfo||x.stateNode.implementation!==k.implementation?(x=Xd(k,g.mode,P),x.return=g,x):(x=o(x,k.children||[]),x.return=g,x)}function p(g,x,k,P,T){return x===null||x.tag!==7?(x=Vo(k,g.mode,P,T),x.return=g,x):(x=o(x,k),x.return=g,x)}function m(g,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Yd(""+x,g.mode,k),x.return=g,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case pl:return k=Zl(x.type,x.key,x.props,null,g.mode,k),k.ref=Ia(g,null,x),k.return=g,k;case ki:return x=Xd(x,g.mode,k),x.return=g,x;case Fr:var P=x._init;return m(g,P(x._payload),k)}if(Va(x)||Ta(x))return x=Vo(x,g.mode,k,null),x.return=g,x;Pl(g,x)}return null}function _(g,x,k,P){var T=x!==null?x.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return T!==null?null:u(g,x,""+k,P);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case pl:return k.key===T?d(g,x,k,P):null;case ki:return k.key===T?f(g,x,k,P):null;case Fr:return T=k._init,_(g,x,T(k._payload),P)}if(Va(k)||Ta(k))return T!==null?null:p(g,x,k,P,null);Pl(g,k)}return null}function b(g,x,k,P,T){if(typeof P=="string"&&P!==""||typeof P=="number")return g=g.get(k)||null,u(x,g,""+P,T);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case pl:return g=g.get(P.key===null?k:P.key)||null,d(x,g,P,T);case ki:return g=g.get(P.key===null?k:P.key)||null,f(x,g,P,T);case Fr:var A=P._init;return b(g,x,k,A(P._payload),T)}if(Va(P)||Ta(P))return g=g.get(k)||null,p(x,g,P,T,null);Pl(x,P)}return null}function y(g,x,k,P){for(var T=null,A=null,I=x,F=x=0,W=null;I!==null&&F<k.length;F++){I.index>F?(W=I,I=null):W=I.sibling;var B=_(g,I,k[F],P);if(B===null){I===null&&(I=W);break}e&&I&&B.alternate===null&&t(g,I),x=a(B,x,F),A===null?T=B:A.sibling=B,A=B,I=W}if(F===k.length)return n(g,I),it&&No(g,F),T;if(I===null){for(;F<k.length;F++)I=m(g,k[F],P),I!==null&&(x=a(I,x,F),A===null?T=I:A.sibling=I,A=I);return it&&No(g,F),T}for(I=r(g,I);F<k.length;F++)W=b(I,g,F,k[F],P),W!==null&&(e&&W.alternate!==null&&I.delete(W.key===null?F:W.key),x=a(W,x,F),A===null?T=W:A.sibling=W,A=W);return e&&I.forEach(function(G){return t(g,G)}),it&&No(g,F),T}function w(g,x,k,P){var T=Ta(k);if(typeof T!="function")throw Error(se(150));if(k=T.call(k),k==null)throw Error(se(151));for(var A=T=null,I=x,F=x=0,W=null,B=k.next();I!==null&&!B.done;F++,B=k.next()){I.index>F?(W=I,I=null):W=I.sibling;var G=_(g,I,B.value,P);if(G===null){I===null&&(I=W);break}e&&I&&G.alternate===null&&t(g,I),x=a(G,x,F),A===null?T=G:A.sibling=G,A=G,I=W}if(B.done)return n(g,I),it&&No(g,F),T;if(I===null){for(;!B.done;F++,B=k.next())B=m(g,B.value,P),B!==null&&(x=a(B,x,F),A===null?T=B:A.sibling=B,A=B);return it&&No(g,F),T}for(I=r(g,I);!B.done;F++,B=k.next())B=b(I,g,F,B.value,P),B!==null&&(e&&B.alternate!==null&&I.delete(B.key===null?F:B.key),x=a(B,x,F),A===null?T=B:A.sibling=B,A=B);return e&&I.forEach(function(J){return t(g,J)}),it&&No(g,F),T}function C(g,x,k,P){if(typeof k=="object"&&k!==null&&k.type===Si&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case pl:e:{for(var T=k.key,A=x;A!==null;){if(A.key===T){if(T=k.type,T===Si){if(A.tag===7){n(g,A.sibling),x=o(A,k.props.children),x.return=g,g=x;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Fr&&wg(T)===A.type){n(g,A.sibling),x=o(A,k.props),x.ref=Ia(g,A,k),x.return=g,g=x;break e}n(g,A);break}else t(g,A);A=A.sibling}k.type===Si?(x=Vo(k.props.children,g.mode,P,k.key),x.return=g,g=x):(P=Zl(k.type,k.key,k.props,null,g.mode,P),P.ref=Ia(g,x,k),P.return=g,g=P)}return s(g);case ki:e:{for(A=k.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===k.containerInfo&&x.stateNode.implementation===k.implementation){n(g,x.sibling),x=o(x,k.children||[]),x.return=g,g=x;break e}else{n(g,x);break}else t(g,x);x=x.sibling}x=Xd(k,g.mode,P),x.return=g,g=x}return s(g);case Fr:return A=k._init,C(g,x,A(k._payload),P)}if(Va(k))return y(g,x,k,P);if(Ta(k))return w(g,x,k,P);Pl(g,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,x!==null&&x.tag===6?(n(g,x.sibling),x=o(x,k),x.return=g,g=x):(n(g,x),x=Yd(k,g.mode,P),x.return=g,g=x),s(g)):n(g,x)}return C}var Ji=Z0(!0),q0=Z0(!1),js={},ir=bo(js),ys=bo(js),bs=bo(js);function Fo(e){if(e===js)throw Error(se(174));return e}function $p(e,t){switch(et(bs,t),et(ys,e),et(ir,js),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Vf(t,e)}rt(ir),et(ir,t)}function Yi(){rt(ir),rt(ys),rt(bs)}function K0(e){Fo(bs.current);var t=Fo(ir.current),n=Vf(t,e.type);t!==n&&(et(ys,e),et(ir,n))}function Wp(e){ys.current===e&&(rt(ir),rt(ys))}var st=bo(0);function xu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zd=[];function Hp(){for(var e=0;e<Zd.length;e++)Zd[e]._workInProgressVersionPrimary=null;Zd.length=0}var Ul=Rr.ReactCurrentDispatcher,qd=Rr.ReactCurrentBatchConfig,Go=0,lt=null,kt=null,Ct=null,wu=!1,es=!1,xs=0,nC=0;function Nt(){throw Error(se(321))}function Vp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jn(e[n],t[n]))return!1;return!0}function Zp(e,t,n,r,o,a){if(Go=a,lt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ul.current=e===null||e.memoizedState===null?aC:sC,e=n(r,o),es){a=0;do{if(es=!1,xs=0,25<=a)throw Error(se(301));a+=1,Ct=kt=null,t.updateQueue=null,Ul.current=lC,e=n(r,o)}while(es)}if(Ul.current=ku,t=kt!==null&&kt.next!==null,Go=0,Ct=kt=lt=null,wu=!1,t)throw Error(se(300));return e}function qp(){var e=xs!==0;return xs=0,e}function Yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?lt.memoizedState=Ct=e:Ct=Ct.next=e,Ct}function kn(){if(kt===null){var e=lt.alternate;e=e!==null?e.memoizedState:null}else e=kt.next;var t=Ct===null?lt.memoizedState:Ct.next;if(t!==null)Ct=t,kt=e;else{if(e===null)throw Error(se(310));kt=e,e={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Ct===null?lt.memoizedState=Ct=e:Ct=Ct.next=e}return Ct}function ws(e,t){return typeof t=="function"?t(e):t}function Kd(e){var t=kn(),n=t.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=e;var r=kt,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var s=o.next;o.next=a.next,a.next=s}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var u=s=null,d=null,f=a;do{var p=f.lane;if((Go&p)===p)d!==null&&(d=d.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var m={lane:p,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};d===null?(u=d=m,s=r):d=d.next=m,lt.lanes|=p,Jo|=p}f=f.next}while(f!==null&&f!==a);d===null?s=r:d.next=u,jn(r,t.memoizedState)||(Gt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,lt.lanes|=a,Jo|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Qd(e){var t=kn(),n=t.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do a=e(a,s.action),s=s.next;while(s!==o);jn(a,t.memoizedState)||(Gt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Q0(){}function G0(e,t){var n=lt,r=kn(),o=t(),a=!jn(r.memoizedState,o);if(a&&(r.memoizedState=o,Gt=!0),r=r.queue,Kp(X0.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,ks(9,Y0.bind(null,n,r,o,t),void 0,null),Et===null)throw Error(se(349));Go&30||J0(n,t,o)}return o}function J0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=lt.updateQueue,t===null?(t={lastEffect:null,stores:null},lt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Y0(e,t,n,r){t.value=n,t.getSnapshot=r,ex(t)&&tx(e)}function X0(e,t,n){return n(function(){ex(t)&&tx(e)})}function ex(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jn(e,n)}catch{return!0}}function tx(e){var t=Or(e,1);t!==null&&Mn(t,e,1,-1)}function kg(e){var t=Yn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ws,lastRenderedState:e},t.queue=e,e=e.dispatch=iC.bind(null,lt,e),[t.memoizedState,e]}function ks(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=lt.updateQueue,t===null?(t={lastEffect:null,stores:null},lt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nx(){return kn().memoizedState}function $l(e,t,n,r){var o=Yn();lt.flags|=e,o.memoizedState=ks(1|t,n,void 0,r===void 0?null:r)}function dc(e,t,n,r){var o=kn();r=r===void 0?null:r;var a=void 0;if(kt!==null){var s=kt.memoizedState;if(a=s.destroy,r!==null&&Vp(r,s.deps)){o.memoizedState=ks(t,n,a,r);return}}lt.flags|=e,o.memoizedState=ks(1|t,n,a,r)}function Sg(e,t){return $l(8390656,8,e,t)}function Kp(e,t){return dc(2048,8,e,t)}function rx(e,t){return dc(4,2,e,t)}function ox(e,t){return dc(4,4,e,t)}function ix(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ax(e,t,n){return n=n!=null?n.concat([e]):null,dc(4,4,ix.bind(null,t,e),n)}function Qp(){}function sx(e,t){var n=kn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function lx(e,t){var n=kn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ux(e,t,n){return Go&21?(jn(n,t)||(n=f0(),lt.lanes|=n,Jo|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Gt=!0),e.memoizedState=n)}function rC(e,t){var n=Ke;Ke=n!==0&&4>n?n:4,e(!0);var r=qd.transition;qd.transition={};try{e(!1),t()}finally{Ke=n,qd.transition=r}}function cx(){return kn().memoizedState}function oC(e,t,n){var r=no(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dx(e))fx(t,n);else if(n=$0(e,t,n,r),n!==null){var o=Ht();Mn(n,e,r,o),hx(n,t,r)}}function iC(e,t,n){var r=no(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dx(e))fx(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,u=a(s,n);if(o.hasEagerState=!0,o.eagerState=u,jn(u,s)){var d=t.interleaved;d===null?(o.next=o,Fp(t)):(o.next=d.next,d.next=o),t.interleaved=o;return}}catch{}finally{}n=$0(e,t,o,r),n!==null&&(o=Ht(),Mn(n,e,r,o),hx(n,t,r))}}function dx(e){var t=e.alternate;return e===lt||t!==null&&t===lt}function fx(e,t){es=wu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cp(e,n)}}var ku={readContext:wn,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},aC={readContext:wn,useCallback:function(e,t){return Yn().memoizedState=[e,t===void 0?null:t],e},useContext:wn,useEffect:Sg,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$l(4194308,4,ix.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $l(4194308,4,e,t)},useInsertionEffect:function(e,t){return $l(4,2,e,t)},useMemo:function(e,t){var n=Yn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Yn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=oC.bind(null,lt,e),[r.memoizedState,e]},useRef:function(e){var t=Yn();return e={current:e},t.memoizedState=e},useState:kg,useDebugValue:Qp,useDeferredValue:function(e){return Yn().memoizedState=e},useTransition:function(){var e=kg(!1),t=e[0];return e=rC.bind(null,e[1]),Yn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=lt,o=Yn();if(it){if(n===void 0)throw Error(se(407));n=n()}else{if(n=t(),Et===null)throw Error(se(349));Go&30||J0(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Sg(X0.bind(null,r,a,e),[e]),r.flags|=2048,ks(9,Y0.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Yn(),t=Et.identifierPrefix;if(it){var n=kr,r=wr;n=(r&~(1<<32-Bn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=xs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=nC++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sC={readContext:wn,useCallback:sx,useContext:wn,useEffect:Kp,useImperativeHandle:ax,useInsertionEffect:rx,useLayoutEffect:ox,useMemo:lx,useReducer:Kd,useRef:nx,useState:function(){return Kd(ws)},useDebugValue:Qp,useDeferredValue:function(e){var t=kn();return ux(t,kt.memoizedState,e)},useTransition:function(){var e=Kd(ws)[0],t=kn().memoizedState;return[e,t]},useMutableSource:Q0,useSyncExternalStore:G0,useId:cx,unstable_isNewReconciler:!1},lC={readContext:wn,useCallback:sx,useContext:wn,useEffect:Kp,useImperativeHandle:ax,useInsertionEffect:rx,useLayoutEffect:ox,useMemo:lx,useReducer:Qd,useRef:nx,useState:function(){return Qd(ws)},useDebugValue:Qp,useDeferredValue:function(e){var t=kn();return kt===null?t.memoizedState=e:ux(t,kt.memoizedState,e)},useTransition:function(){var e=Qd(ws)[0],t=kn().memoizedState;return[e,t]},useMutableSource:Q0,useSyncExternalStore:G0,useId:cx,unstable_isNewReconciler:!1};function Xi(e,t){try{var n="",r=t;do n+=BS(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function Gd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ph(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var uC=typeof WeakMap=="function"?WeakMap:Map;function px(e,t,n){n=Sr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Pu||(Pu=!0,Sh=r),ph(e,t)},n}function mx(e,t,n){n=Sr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ph(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ph(e,t),typeof r!="function"&&(to===null?to=new Set([this]):to.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Pg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new uC;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=kC.bind(null,e,t,n),t.then(e,e))}function Cg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Eg(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Sr(-1,1),t.tag=2,eo(n,t,1))),n.lanes|=1),e)}var cC=Rr.ReactCurrentOwner,Gt=!1;function Wt(e,t,n,r){t.child=e===null?q0(t,null,n,r):Ji(t,e.child,n,r)}function Og(e,t,n,r,o){n=n.render;var a=t.ref;return Ui(t,o),r=Zp(e,t,n,r,a,o),n=qp(),e!==null&&!Gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Lr(e,t,o)):(it&&n&&Np(t),t.flags|=1,Wt(e,t,r,o),t.child)}function Lg(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!rm(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,_x(e,t,a,r,o)):(e=Zl(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:ms,n(s,r)&&e.ref===t.ref)return Lr(e,t,o)}return t.flags|=1,e=ro(a,r),e.ref=t.ref,e.return=t,t.child=e}function _x(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(ms(a,r)&&e.ref===t.ref)if(Gt=!1,t.pendingProps=r=a,(e.lanes&o)!==0)e.flags&131072&&(Gt=!0);else return t.lanes=e.lanes,Lr(e,t,o)}return mh(e,t,n,r,o)}function gx(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(Ni,tn),tn|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,et(Ni,tn),tn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,et(Ni,tn),tn|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,et(Ni,tn),tn|=r;return Wt(e,t,o,n),t.child}function vx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function mh(e,t,n,r,o){var a=Yt(n)?Ko:Ft.current;return a=Qi(t,a),Ui(t,o),n=Zp(e,t,n,r,a,o),r=qp(),e!==null&&!Gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Lr(e,t,o)):(it&&r&&Np(t),t.flags|=1,Wt(e,t,n,o),t.child)}function Tg(e,t,n,r,o){if(Yt(n)){var a=!0;mu(t)}else a=!1;if(Ui(t,o),t.stateNode===null)Wl(e,t),V0(t,n,r),hh(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,u=t.memoizedProps;s.props=u;var d=s.context,f=n.contextType;typeof f=="object"&&f!==null?f=wn(f):(f=Yt(n)?Ko:Ft.current,f=Qi(t,f));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u!==r||d!==f)&&xg(t,s,r,f),Ur=!1;var _=t.memoizedState;s.state=_,bu(t,r,s,o),d=t.memoizedState,u!==r||_!==d||Jt.current||Ur?(typeof p=="function"&&(fh(t,n,p,r),d=t.memoizedState),(u=Ur||bg(t,n,u,r,_,d,f))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),s.props=r,s.state=d,s.context=f,r=u):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,W0(e,t),u=t.memoizedProps,f=t.type===t.elementType?u:Rn(t.type,u),s.props=f,m=t.pendingProps,_=s.context,d=n.contextType,typeof d=="object"&&d!==null?d=wn(d):(d=Yt(n)?Ko:Ft.current,d=Qi(t,d));var b=n.getDerivedStateFromProps;(p=typeof b=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u!==m||_!==d)&&xg(t,s,r,d),Ur=!1,_=t.memoizedState,s.state=_,bu(t,r,s,o);var y=t.memoizedState;u!==m||_!==y||Jt.current||Ur?(typeof b=="function"&&(fh(t,n,b,r),y=t.memoizedState),(f=Ur||bg(t,n,f,r,_,y,d)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,d)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=d,r=f):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),r=!1)}return _h(e,t,n,r,a,o)}function _h(e,t,n,r,o,a){vx(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&mg(t,n,!1),Lr(e,t,a);r=t.stateNode,cC.current=t;var u=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Ji(t,e.child,null,a),t.child=Ji(t,null,u,a)):Wt(e,t,u,a),t.memoizedState=r.state,o&&mg(t,n,!0),t.child}function yx(e){var t=e.stateNode;t.pendingContext?pg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pg(e,t.context,!1),$p(e,t.containerInfo)}function Rg(e,t,n,r,o){return Gi(),Bp(o),t.flags|=256,Wt(e,t,n,r),t.child}var gh={dehydrated:null,treeContext:null,retryLane:0};function vh(e){return{baseLanes:e,cachePool:null,transitions:null}}function bx(e,t,n){var r=t.pendingProps,o=st.current,a=!1,s=(t.flags&128)!==0,u;if((u=s)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),et(st,o&1),e===null)return ch(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,a?(r=t.mode,a=t.child,s={mode:"hidden",children:s},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=pc(s,r,0,null),e=Vo(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=vh(n),t.memoizedState=gh,e):Gp(t,s));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return dC(e,t,s,r,u,o,n);if(a){a=r.fallback,s=t.mode,o=e.child,u=o.sibling;var d={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=ro(o,d),r.subtreeFlags=o.subtreeFlags&14680064),u!==null?a=ro(u,a):(a=Vo(a,s,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,s=e.child.memoizedState,s=s===null?vh(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~n,t.memoizedState=gh,r}return a=e.child,e=a.sibling,r=ro(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Gp(e,t){return t=pc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Cl(e,t,n,r){return r!==null&&Bp(r),Ji(t,e.child,null,n),e=Gp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dC(e,t,n,r,o,a,s){if(n)return t.flags&256?(t.flags&=-257,r=Gd(Error(se(422))),Cl(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=pc({mode:"visible",children:r.children},o,0,null),a=Vo(a,o,s,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Ji(t,e.child,null,s),t.child.memoizedState=vh(s),t.memoizedState=gh,a);if(!(t.mode&1))return Cl(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;return r=u,a=Error(se(419)),r=Gd(a,r,void 0),Cl(e,t,s,r)}if(u=(s&e.childLanes)!==0,Gt||u){if(r=Et,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Or(e,o),Mn(r,e,o,-1))}return nm(),r=Gd(Error(se(421))),Cl(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=SC.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,nn=Xr(o.nextSibling),an=t,it=!0,Nn=null,e!==null&&(gn[vn++]=wr,gn[vn++]=kr,gn[vn++]=Qo,wr=e.id,kr=e.overflow,Qo=t),t=Gp(t,r.children),t.flags|=4096,t)}function Ag(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),dh(e.return,t,n)}function Jd(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function xx(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(Wt(e,t,r.children,n),r=st.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ag(e,n,t);else if(e.tag===19)Ag(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(et(st,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&xu(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Jd(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&xu(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Jd(t,!0,n,null,a);break;case"together":Jd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Lr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jo|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(se(153));if(t.child!==null){for(e=t.child,n=ro(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ro(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fC(e,t,n){switch(t.tag){case 3:yx(t),Gi();break;case 5:K0(t);break;case 1:Yt(t.type)&&mu(t);break;case 4:$p(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;et(vu,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(et(st,st.current&1),t.flags|=128,null):n&t.child.childLanes?bx(e,t,n):(et(st,st.current&1),e=Lr(e,t,n),e!==null?e.sibling:null);et(st,st.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return xx(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),et(st,st.current),r)break;return null;case 22:case 23:return t.lanes=0,gx(e,t,n)}return Lr(e,t,n)}var wx,yh,kx,Sx;wx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yh=function(){};kx=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Fo(ir.current);var a=null;switch(n){case"input":o=Uf(e,o),r=Uf(e,r),a=[];break;case"select":o=ut({},o,{value:void 0}),r=ut({},r,{value:void 0}),a=[];break;case"textarea":o=Hf(e,o),r=Hf(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=hu)}Zf(n,r);var s;n=null;for(f in o)if(!r.hasOwnProperty(f)&&o.hasOwnProperty(f)&&o[f]!=null)if(f==="style"){var u=o[f];for(s in u)u.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(ls.hasOwnProperty(f)?a||(a=[]):(a=a||[]).push(f,null));for(f in r){var d=r[f];if(u=o?.[f],r.hasOwnProperty(f)&&d!==u&&(d!=null||u!=null))if(f==="style")if(u){for(s in u)!u.hasOwnProperty(s)||d&&d.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in d)d.hasOwnProperty(s)&&u[s]!==d[s]&&(n||(n={}),n[s]=d[s])}else n||(a||(a=[]),a.push(f,n)),n=d;else f==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(a=a||[]).push(f,d)):f==="children"?typeof d!="string"&&typeof d!="number"||(a=a||[]).push(f,""+d):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(ls.hasOwnProperty(f)?(d!=null&&f==="onScroll"&&nt("scroll",e),a||u===d||(a=[])):(a=a||[]).push(f,d))}n&&(a=a||[]).push("style",n);var f=a;(t.updateQueue=f)&&(t.flags|=4)}};Sx=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ba(e,t){if(!it)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function It(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hC(e,t,n){var r=t.pendingProps;switch(Ip(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(t),null;case 1:return Yt(t.type)&&pu(),It(t),null;case 3:return r=t.stateNode,Yi(),rt(Jt),rt(Ft),Hp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Sl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Nn!==null&&(Eh(Nn),Nn=null))),yh(e,t),It(t),null;case 5:Wp(t);var o=Fo(bs.current);if(n=t.type,e!==null&&t.stateNode!=null)kx(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(se(166));return It(t),null}if(e=Fo(ir.current),Sl(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[tr]=t,r[vs]=a,e=(t.mode&1)!==0,n){case"dialog":nt("cancel",r),nt("close",r);break;case"iframe":case"object":case"embed":nt("load",r);break;case"video":case"audio":for(o=0;o<qa.length;o++)nt(qa[o],r);break;case"source":nt("error",r);break;case"img":case"image":case"link":nt("error",r),nt("load",r);break;case"details":nt("toggle",r);break;case"input":U_(r,a),nt("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},nt("invalid",r);break;case"textarea":W_(r,a),nt("invalid",r)}Zf(n,a),o=null;for(var s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="children"?typeof u=="string"?r.textContent!==u&&(a.suppressHydrationWarning!==!0&&kl(r.textContent,u,e),o=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(a.suppressHydrationWarning!==!0&&kl(r.textContent,u,e),o=["children",""+u]):ls.hasOwnProperty(s)&&u!=null&&s==="onScroll"&&nt("scroll",r)}switch(n){case"input":ml(r),$_(r,a,!0);break;case"textarea":ml(r),H_(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=hu)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jb(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[tr]=t,e[vs]=r,wx(e,t,!1,!1),t.stateNode=e;e:{switch(s=qf(n,r),n){case"dialog":nt("cancel",e),nt("close",e),o=r;break;case"iframe":case"object":case"embed":nt("load",e),o=r;break;case"video":case"audio":for(o=0;o<qa.length;o++)nt(qa[o],e);o=r;break;case"source":nt("error",e),o=r;break;case"img":case"image":case"link":nt("error",e),nt("load",e),o=r;break;case"details":nt("toggle",e),o=r;break;case"input":U_(e,r),o=Uf(e,r),nt("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ut({},r,{value:void 0}),nt("invalid",e);break;case"textarea":W_(e,r),o=Hf(e,r),nt("invalid",e);break;default:o=r}Zf(n,o),u=o;for(a in u)if(u.hasOwnProperty(a)){var d=u[a];a==="style"?e0(e,d):a==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Yb(e,d)):a==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&us(e,d):typeof d=="number"&&us(e,""+d):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ls.hasOwnProperty(a)?d!=null&&a==="onScroll"&&nt("scroll",e):d!=null&&bp(e,a,d,s))}switch(n){case"input":ml(e),$_(e,r,!1);break;case"textarea":ml(e),H_(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ho(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Mi(e,!!r.multiple,a,!1):r.defaultValue!=null&&Mi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=hu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return It(t),null;case 6:if(e&&t.stateNode!=null)Sx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(se(166));if(n=Fo(bs.current),Fo(ir.current),Sl(t)){if(r=t.stateNode,n=t.memoizedProps,r[tr]=t,(a=r.nodeValue!==n)&&(e=an,e!==null))switch(e.tag){case 3:kl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&kl(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tr]=t,t.stateNode=r}return It(t),null;case 13:if(rt(st),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(it&&nn!==null&&t.mode&1&&!(t.flags&128))U0(),Gi(),t.flags|=98560,a=!1;else if(a=Sl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(se(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(se(317));a[tr]=t}else Gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;It(t),a=!1}else Nn!==null&&(Eh(Nn),Nn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||st.current&1?St===0&&(St=3):nm())),t.updateQueue!==null&&(t.flags|=4),It(t),null);case 4:return Yi(),yh(e,t),e===null&&_s(t.stateNode.containerInfo),It(t),null;case 10:return jp(t.type._context),It(t),null;case 17:return Yt(t.type)&&pu(),It(t),null;case 19:if(rt(st),a=t.memoizedState,a===null)return It(t),null;if(r=(t.flags&128)!==0,s=a.rendering,s===null)if(r)Ba(a,!1);else{if(St!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=xu(e),s!==null){for(t.flags|=128,Ba(a,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return et(st,st.current&1|2),t.child}e=e.sibling}a.tail!==null&&mt()>ea&&(t.flags|=128,r=!0,Ba(a,!1),t.lanes=4194304)}else{if(!r)if(e=xu(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ba(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!it)return It(t),null}else 2*mt()-a.renderingStartTime>ea&&n!==1073741824&&(t.flags|=128,r=!0,Ba(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(n=a.last,n!==null?n.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=mt(),t.sibling=null,n=st.current,et(st,r?n&1|2:n&1),t):(It(t),null);case 22:case 23:return tm(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?tn&1073741824&&(It(t),t.subtreeFlags&6&&(t.flags|=8192)):It(t),null;case 24:return null;case 25:return null}throw Error(se(156,t.tag))}function pC(e,t){switch(Ip(t),t.tag){case 1:return Yt(t.type)&&pu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yi(),rt(Jt),rt(Ft),Hp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Wp(t),null;case 13:if(rt(st),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(se(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return rt(st),null;case 4:return Yi(),null;case 10:return jp(t.type._context),null;case 22:case 23:return tm(),null;case 24:return null;default:return null}}var El=!1,jt=!1,mC=typeof WeakSet=="function"?WeakSet:Set,ve=null;function zi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ct(e,t,r)}else n.current=null}function bh(e,t,n){try{n()}catch(r){ct(e,t,r)}}var zg=!1;function _C(e,t){if(rh=cu,e=O0(),zp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,u=-1,d=-1,f=0,p=0,m=e,_=null;t:for(;;){for(var b;m!==n||o!==0&&m.nodeType!==3||(u=s+o),m!==a||r!==0&&m.nodeType!==3||(d=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(b=m.firstChild)!==null;)_=m,m=b;for(;;){if(m===e)break t;if(_===n&&++f===o&&(u=s),_===a&&++p===r&&(d=s),(b=m.nextSibling)!==null)break;m=_,_=m.parentNode}m=b}n=u===-1||d===-1?null:{start:u,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(oh={focusedElem:e,selectionRange:n},cu=!1,ve=t;ve!==null;)if(t=ve,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ve=e;else for(;ve!==null;){t=ve;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,C=y.memoizedState,g=t.stateNode,x=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:Rn(t.type,w),C);g.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var k=t.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(P){ct(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,ve=e;break}ve=t.return}return y=zg,zg=!1,y}function ts(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&bh(t,n,a)}o=o.next}while(o!==r)}}function fc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xh(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Px(e){var t=e.alternate;t!==null&&(e.alternate=null,Px(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tr],delete t[vs],delete t[sh],delete t[YP],delete t[XP])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cx(e){return e.tag===5||e.tag===3||e.tag===4}function Ng(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wh(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hu));else if(r!==4&&(e=e.child,e!==null))for(wh(e,t,n),e=e.sibling;e!==null;)wh(e,t,n),e=e.sibling}function kh(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(kh(e,t,n),e=e.sibling;e!==null;)kh(e,t,n),e=e.sibling}var Tt=null,zn=!1;function Mr(e,t,n){for(n=n.child;n!==null;)Ex(e,t,n),n=n.sibling}function Ex(e,t,n){if(or&&typeof or.onCommitFiberUnmount=="function")try{or.onCommitFiberUnmount(oc,n)}catch{}switch(n.tag){case 5:jt||zi(n,t);case 6:var r=Tt,o=zn;Tt=null,Mr(e,t,n),Tt=r,zn=o,Tt!==null&&(zn?(e=Tt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Tt.removeChild(n.stateNode));break;case 18:Tt!==null&&(zn?(e=Tt,n=n.stateNode,e.nodeType===8?Hd(e.parentNode,n):e.nodeType===1&&Hd(e,n),hs(e)):Hd(Tt,n.stateNode));break;case 4:r=Tt,o=zn,Tt=n.stateNode.containerInfo,zn=!0,Mr(e,t,n),Tt=r,zn=o;break;case 0:case 11:case 14:case 15:if(!jt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&bh(n,t,s),o=o.next}while(o!==r)}Mr(e,t,n);break;case 1:if(!jt&&(zi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){ct(n,t,u)}Mr(e,t,n);break;case 21:Mr(e,t,n);break;case 22:n.mode&1?(jt=(r=jt)||n.memoizedState!==null,Mr(e,t,n),jt=r):Mr(e,t,n);break;default:Mr(e,t,n)}}function Ig(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new mC),t.forEach(function(r){var o=PC.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function On(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,s=t,u=s;e:for(;u!==null;){switch(u.tag){case 5:Tt=u.stateNode,zn=!1;break e;case 3:Tt=u.stateNode.containerInfo,zn=!0;break e;case 4:Tt=u.stateNode.containerInfo,zn=!0;break e}u=u.return}if(Tt===null)throw Error(se(160));Ex(a,s,o),Tt=null,zn=!1;var d=o.alternate;d!==null&&(d.return=null),o.return=null}catch(f){ct(o,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ox(t,e),t=t.sibling}function Ox(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(On(t,e),Qn(e),r&4){try{ts(3,e,e.return),fc(3,e)}catch(w){ct(e,e.return,w)}try{ts(5,e,e.return)}catch(w){ct(e,e.return,w)}}break;case 1:On(t,e),Qn(e),r&512&&n!==null&&zi(n,n.return);break;case 5:if(On(t,e),Qn(e),r&512&&n!==null&&zi(n,n.return),e.flags&32){var o=e.stateNode;try{us(o,"")}catch(w){ct(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,s=n!==null?n.memoizedProps:a,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&a.type==="radio"&&a.name!=null&&Qb(o,a),qf(u,s);var f=qf(u,a);for(s=0;s<d.length;s+=2){var p=d[s],m=d[s+1];p==="style"?e0(o,m):p==="dangerouslySetInnerHTML"?Yb(o,m):p==="children"?us(o,m):bp(o,p,m,f)}switch(u){case"input":$f(o,a);break;case"textarea":Gb(o,a);break;case"select":var _=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var b=a.value;b!=null?Mi(o,!!a.multiple,b,!1):_!==!!a.multiple&&(a.defaultValue!=null?Mi(o,!!a.multiple,a.defaultValue,!0):Mi(o,!!a.multiple,a.multiple?[]:"",!1))}o[vs]=a}catch(w){ct(e,e.return,w)}}break;case 6:if(On(t,e),Qn(e),r&4){if(e.stateNode===null)throw Error(se(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(w){ct(e,e.return,w)}}break;case 3:if(On(t,e),Qn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{hs(t.containerInfo)}catch(w){ct(e,e.return,w)}break;case 4:On(t,e),Qn(e);break;case 13:On(t,e),Qn(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Xp=mt())),r&4&&Ig(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(jt=(f=jt)||p,On(t,e),jt=f):On(t,e),Qn(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!p&&e.mode&1)for(ve=e,p=e.child;p!==null;){for(m=ve=p;ve!==null;){switch(_=ve,b=_.child,_.tag){case 0:case 11:case 14:case 15:ts(4,_,_.return);break;case 1:zi(_,_.return);var y=_.stateNode;if(typeof y.componentWillUnmount=="function"){r=_,n=_.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){ct(r,n,w)}}break;case 5:zi(_,_.return);break;case 22:if(_.memoizedState!==null){Mg(m);continue}}b!==null?(b.return=_,ve=b):Mg(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{o=m.stateNode,f?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(u=m.stateNode,d=m.memoizedProps.style,s=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=Xb("display",s))}catch(w){ct(e,e.return,w)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=f?"":m.memoizedProps}catch(w){ct(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:On(t,e),Qn(e),r&4&&Ig(e);break;case 21:break;default:On(t,e),Qn(e)}}function Qn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Cx(n)){var r=n;break e}n=n.return}throw Error(se(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(us(o,""),r.flags&=-33);var a=Ng(e);kh(e,a,o);break;case 3:case 4:var s=r.stateNode.containerInfo,u=Ng(e);wh(e,u,s);break;default:throw Error(se(161))}}catch(d){ct(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gC(e,t,n){ve=e,Lx(e)}function Lx(e,t,n){for(var r=(e.mode&1)!==0;ve!==null;){var o=ve,a=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||El;if(!s){var u=o.alternate,d=u!==null&&u.memoizedState!==null||jt;u=El;var f=jt;if(El=s,(jt=d)&&!f)for(ve=o;ve!==null;)s=ve,d=s.child,s.tag===22&&s.memoizedState!==null?Dg(o):d!==null?(d.return=s,ve=d):Dg(o);for(;a!==null;)ve=a,Lx(a),a=a.sibling;ve=o,El=u,jt=f}Bg(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,ve=a):Bg(e)}}function Bg(e){for(;ve!==null;){var t=ve;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:jt||fc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!jt)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Rn(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&yg(t,a,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}yg(t,s,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var p=f.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&hs(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}jt||t.flags&512&&xh(t)}catch(_){ct(t,t.return,_)}}if(t===e){ve=null;break}if(n=t.sibling,n!==null){n.return=t.return,ve=n;break}ve=t.return}}function Mg(e){for(;ve!==null;){var t=ve;if(t===e){ve=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ve=n;break}ve=t.return}}function Dg(e){for(;ve!==null;){var t=ve;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fc(4,t)}catch(d){ct(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(d){ct(t,o,d)}}var a=t.return;try{xh(t)}catch(d){ct(t,a,d)}break;case 5:var s=t.return;try{xh(t)}catch(d){ct(t,s,d)}}}catch(d){ct(t,t.return,d)}if(t===e){ve=null;break}var u=t.sibling;if(u!==null){u.return=t.return,ve=u;break}ve=t.return}}var vC=Math.ceil,Su=Rr.ReactCurrentDispatcher,Jp=Rr.ReactCurrentOwner,bn=Rr.ReactCurrentBatchConfig,Fe=0,Et=null,bt=null,Rt=0,tn=0,Ni=bo(0),St=0,Ss=null,Jo=0,hc=0,Yp=0,ns=null,Qt=null,Xp=0,ea=1/0,vr=null,Pu=!1,Sh=null,to=null,Ol=!1,Kr=null,Cu=0,rs=0,Ph=null,Hl=-1,Vl=0;function Ht(){return Fe&6?mt():Hl!==-1?Hl:Hl=mt()}function no(e){return e.mode&1?Fe&2&&Rt!==0?Rt&-Rt:tC.transition!==null?(Vl===0&&(Vl=f0()),Vl):(e=Ke,e!==0||(e=window.event,e=e===void 0?16:y0(e.type)),e):1}function Mn(e,t,n,r){if(50<rs)throw rs=0,Ph=null,Error(se(185));Bs(e,n,r),(!(Fe&2)||e!==Et)&&(e===Et&&(!(Fe&2)&&(hc|=n),St===4&&Hr(e,Rt)),Xt(e,r),n===1&&Fe===0&&!(t.mode&1)&&(ea=mt()+500,uc&&xo()))}function Xt(e,t){var n=e.callbackNode;tP(e,t);var r=uu(e,e===Et?Rt:0);if(r===0)n!==null&&q_(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&q_(n),t===1)e.tag===0?eC(jg.bind(null,e)):D0(jg.bind(null,e)),GP(function(){!(Fe&6)&&xo()}),n=null;else{switch(h0(r)){case 1:n=Pp;break;case 4:n=c0;break;case 16:n=lu;break;case 536870912:n=d0;break;default:n=lu}n=Mx(n,Tx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Tx(e,t){if(Hl=-1,Vl=0,Fe&6)throw Error(se(327));var n=e.callbackNode;if($i()&&e.callbackNode!==n)return null;var r=uu(e,e===Et?Rt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Eu(e,r);else{t=r;var o=Fe;Fe|=2;var a=Ax();(Et!==e||Rt!==t)&&(vr=null,ea=mt()+500,Ho(e,t));do try{xC();break}catch(u){Rx(e,u)}while(1);Dp(),Su.current=a,Fe=o,bt!==null?t=0:(Et=null,Rt=0,t=St)}if(t!==0){if(t===2&&(o=Yf(e),o!==0&&(r=o,t=Ch(e,o))),t===1)throw n=Ss,Ho(e,0),Hr(e,r),Xt(e,mt()),n;if(t===6)Hr(e,r);else{if(o=e.current.alternate,!(r&30)&&!yC(o)&&(t=Eu(e,r),t===2&&(a=Yf(e),a!==0&&(r=a,t=Ch(e,a))),t===1))throw n=Ss,Ho(e,0),Hr(e,r),Xt(e,mt()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(se(345));case 2:Io(e,Qt,vr);break;case 3:if(Hr(e,r),(r&130023424)===r&&(t=Xp+500-mt(),10<t)){if(uu(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ht(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ah(Io.bind(null,e,Qt,vr),t);break}Io(e,Qt,vr);break;case 4:if(Hr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Bn(r);a=1<<s,s=t[s],s>o&&(o=s),r&=~a}if(r=o,r=mt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vC(r/1960))-r,10<r){e.timeoutHandle=ah(Io.bind(null,e,Qt,vr),r);break}Io(e,Qt,vr);break;case 5:Io(e,Qt,vr);break;default:throw Error(se(329))}}}return Xt(e,mt()),e.callbackNode===n?Tx.bind(null,e):null}function Ch(e,t){var n=ns;return e.current.memoizedState.isDehydrated&&(Ho(e,t).flags|=256),e=Eu(e,t),e!==2&&(t=Qt,Qt=n,t!==null&&Eh(t)),e}function Eh(e){Qt===null?Qt=e:Qt.push.apply(Qt,e)}function yC(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!jn(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Hr(e,t){for(t&=~Yp,t&=~hc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Bn(t),r=1<<n;e[n]=-1,t&=~r}}function jg(e){if(Fe&6)throw Error(se(327));$i();var t=uu(e,0);if(!(t&1))return Xt(e,mt()),null;var n=Eu(e,t);if(e.tag!==0&&n===2){var r=Yf(e);r!==0&&(t=r,n=Ch(e,r))}if(n===1)throw n=Ss,Ho(e,0),Hr(e,t),Xt(e,mt()),n;if(n===6)throw Error(se(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Io(e,Qt,vr),Xt(e,mt()),null}function em(e,t){var n=Fe;Fe|=1;try{return e(t)}finally{Fe=n,Fe===0&&(ea=mt()+500,uc&&xo())}}function Yo(e){Kr!==null&&Kr.tag===0&&!(Fe&6)&&$i();var t=Fe;Fe|=1;var n=bn.transition,r=Ke;try{if(bn.transition=null,Ke=1,e)return e()}finally{Ke=r,bn.transition=n,Fe=t,!(Fe&6)&&xo()}}function tm(){tn=Ni.current,rt(Ni)}function Ho(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,QP(n)),bt!==null)for(n=bt.return;n!==null;){var r=n;switch(Ip(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pu();break;case 3:Yi(),rt(Jt),rt(Ft),Hp();break;case 5:Wp(r);break;case 4:Yi();break;case 13:rt(st);break;case 19:rt(st);break;case 10:jp(r.type._context);break;case 22:case 23:tm()}n=n.return}if(Et=e,bt=e=ro(e.current,null),Rt=tn=t,St=0,Ss=null,Yp=hc=Jo=0,Qt=ns=null,jo!==null){for(t=0;t<jo.length;t++)if(n=jo[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var s=a.next;a.next=o,r.next=s}n.pending=r}jo=null}return e}function Rx(e,t){do{var n=bt;try{if(Dp(),Ul.current=ku,wu){for(var r=lt.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}wu=!1}if(Go=0,Ct=kt=lt=null,es=!1,xs=0,Jp.current=null,n===null||n.return===null){St=1,Ss=t,bt=null;break}e:{var a=e,s=n.return,u=n,d=t;if(t=Rt,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var f=d,p=u,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var _=p.alternate;_?(p.updateQueue=_.updateQueue,p.memoizedState=_.memoizedState,p.lanes=_.lanes):(p.updateQueue=null,p.memoizedState=null)}var b=Cg(s);if(b!==null){b.flags&=-257,Eg(b,s,u,a,t),b.mode&1&&Pg(a,f,t),t=b,d=f;var y=t.updateQueue;if(y===null){var w=new Set;w.add(d),t.updateQueue=w}else y.add(d);break e}else{if(!(t&1)){Pg(a,f,t),nm();break e}d=Error(se(426))}}else if(it&&u.mode&1){var C=Cg(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Eg(C,s,u,a,t),Bp(Xi(d,u));break e}}a=d=Xi(d,u),St!==4&&(St=2),ns===null?ns=[a]:ns.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=px(a,d,t);vg(a,g);break e;case 1:u=d;var x=a.type,k=a.stateNode;if(!(a.flags&128)&&(typeof x.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(to===null||!to.has(k)))){a.flags|=65536,t&=-t,a.lanes|=t;var P=mx(a,u,t);vg(a,P);break e}}a=a.return}while(a!==null)}Nx(n)}catch(T){t=T,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(1)}function Ax(){var e=Su.current;return Su.current=ku,e===null?ku:e}function nm(){(St===0||St===3||St===2)&&(St=4),Et===null||!(Jo&268435455)&&!(hc&268435455)||Hr(Et,Rt)}function Eu(e,t){var n=Fe;Fe|=2;var r=Ax();(Et!==e||Rt!==t)&&(vr=null,Ho(e,t));do try{bC();break}catch(o){Rx(e,o)}while(1);if(Dp(),Fe=n,Su.current=r,bt!==null)throw Error(se(261));return Et=null,Rt=0,St}function bC(){for(;bt!==null;)zx(bt)}function xC(){for(;bt!==null&&!ZS();)zx(bt)}function zx(e){var t=Bx(e.alternate,e,tn);e.memoizedProps=e.pendingProps,t===null?Nx(e):bt=t,Jp.current=null}function Nx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=pC(n,t),n!==null){n.flags&=32767,bt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{St=6,bt=null;return}}else if(n=hC(n,t,tn),n!==null){bt=n;return}if(t=t.sibling,t!==null){bt=t;return}bt=t=e}while(t!==null);St===0&&(St=5)}function Io(e,t,n){var r=Ke,o=bn.transition;try{bn.transition=null,Ke=1,wC(e,t,n,r)}finally{bn.transition=o,Ke=r}return null}function wC(e,t,n,r){do $i();while(Kr!==null);if(Fe&6)throw Error(se(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(se(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(nP(e,a),e===Et&&(bt=Et=null,Rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ol||(Ol=!0,Mx(lu,function(){return $i(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=bn.transition,bn.transition=null;var s=Ke;Ke=1;var u=Fe;Fe|=4,Jp.current=null,_C(e,n),Ox(n,e),$P(oh),cu=!!rh,oh=rh=null,e.current=n,gC(n),qS(),Fe=u,Ke=s,bn.transition=a}else e.current=n;if(Ol&&(Ol=!1,Kr=e,Cu=o),a=e.pendingLanes,a===0&&(to=null),GS(n.stateNode),Xt(e,mt()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Pu)throw Pu=!1,e=Sh,Sh=null,e;return Cu&1&&e.tag!==0&&$i(),a=e.pendingLanes,a&1?e===Ph?rs++:(rs=0,Ph=e):rs=0,xo(),null}function $i(){if(Kr!==null){var e=h0(Cu),t=bn.transition,n=Ke;try{if(bn.transition=null,Ke=16>e?16:e,Kr===null)var r=!1;else{if(e=Kr,Kr=null,Cu=0,Fe&6)throw Error(se(331));var o=Fe;for(Fe|=4,ve=e.current;ve!==null;){var a=ve,s=a.child;if(ve.flags&16){var u=a.deletions;if(u!==null){for(var d=0;d<u.length;d++){var f=u[d];for(ve=f;ve!==null;){var p=ve;switch(p.tag){case 0:case 11:case 15:ts(8,p,a)}var m=p.child;if(m!==null)m.return=p,ve=m;else for(;ve!==null;){p=ve;var _=p.sibling,b=p.return;if(Px(p),p===f){ve=null;break}if(_!==null){_.return=b,ve=_;break}ve=b}}}var y=a.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}ve=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,ve=s;else e:for(;ve!==null;){if(a=ve,a.flags&2048)switch(a.tag){case 0:case 11:case 15:ts(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,ve=g;break e}ve=a.return}}var x=e.current;for(ve=x;ve!==null;){s=ve;var k=s.child;if(s.subtreeFlags&2064&&k!==null)k.return=s,ve=k;else e:for(s=x;ve!==null;){if(u=ve,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:fc(9,u)}}catch(T){ct(u,u.return,T)}if(u===s){ve=null;break e}var P=u.sibling;if(P!==null){P.return=u.return,ve=P;break e}ve=u.return}}if(Fe=o,xo(),or&&typeof or.onPostCommitFiberRoot=="function")try{or.onPostCommitFiberRoot(oc,e)}catch{}r=!0}return r}finally{Ke=n,bn.transition=t}}return!1}function Fg(e,t,n){t=Xi(n,t),t=px(e,t,1),e=eo(e,t,1),t=Ht(),e!==null&&(Bs(e,1,t),Xt(e,t))}function ct(e,t,n){if(e.tag===3)Fg(e,e,n);else for(;t!==null;){if(t.tag===3){Fg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(to===null||!to.has(r))){e=Xi(n,e),e=mx(t,e,1),t=eo(t,e,1),e=Ht(),t!==null&&(Bs(t,1,e),Xt(t,e));break}}t=t.return}}function kC(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ht(),e.pingedLanes|=e.suspendedLanes&n,Et===e&&(Rt&n)===n&&(St===4||St===3&&(Rt&130023424)===Rt&&500>mt()-Xp?Ho(e,0):Yp|=n),Xt(e,t)}function Ix(e,t){t===0&&(e.mode&1?(t=vl,vl<<=1,!(vl&130023424)&&(vl=4194304)):t=1);var n=Ht();e=Or(e,t),e!==null&&(Bs(e,t,n),Xt(e,n))}function SC(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ix(e,n)}function PC(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(se(314))}r!==null&&r.delete(t),Ix(e,n)}var Bx;Bx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Jt.current)Gt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Gt=!1,fC(e,t,n);Gt=!!(e.flags&131072)}else Gt=!1,it&&t.flags&1048576&&j0(t,gu,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wl(e,t),e=t.pendingProps;var o=Qi(t,Ft.current);Ui(t,n),o=Zp(null,t,r,e,o,n);var a=qp();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Yt(r)?(a=!0,mu(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Up(t),o.updater=cc,t.stateNode=o,o._reactInternals=t,hh(t,r,e,n),t=_h(null,t,r,!0,a,n)):(t.tag=0,it&&a&&Np(t),Wt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wl(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=EC(r),e=Rn(r,e),o){case 0:t=mh(null,t,r,e,n);break e;case 1:t=Tg(null,t,r,e,n);break e;case 11:t=Og(null,t,r,e,n);break e;case 14:t=Lg(null,t,r,Rn(r.type,e),n);break e}throw Error(se(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Rn(r,o),mh(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Rn(r,o),Tg(e,t,r,o,n);case 3:e:{if(yx(t),e===null)throw Error(se(387));r=t.pendingProps,a=t.memoizedState,o=a.element,W0(e,t),bu(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=Xi(Error(se(423)),t),t=Rg(e,t,r,n,o);break e}else if(r!==o){o=Xi(Error(se(424)),t),t=Rg(e,t,r,n,o);break e}else for(nn=Xr(t.stateNode.containerInfo.firstChild),an=t,it=!0,Nn=null,n=q0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gi(),r===o){t=Lr(e,t,n);break e}Wt(e,t,r,n)}t=t.child}return t;case 5:return K0(t),e===null&&ch(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,s=o.children,ih(r,o)?s=null:a!==null&&ih(r,a)&&(t.flags|=32),vx(e,t),Wt(e,t,s,n),t.child;case 6:return e===null&&ch(t),null;case 13:return bx(e,t,n);case 4:return $p(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ji(t,null,r,n):Wt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Rn(r,o),Og(e,t,r,o,n);case 7:return Wt(e,t,t.pendingProps,n),t.child;case 8:return Wt(e,t,t.pendingProps.children,n),t.child;case 12:return Wt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,s=o.value,et(vu,r._currentValue),r._currentValue=s,a!==null)if(jn(a.value,s)){if(a.children===o.children&&!Jt.current){t=Lr(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){s=a.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(a.tag===1){d=Sr(-1,n&-n),d.tag=2;var f=a.updateQueue;if(f!==null){f=f.shared;var p=f.pending;p===null?d.next=d:(d.next=p.next,p.next=d),f.pending=d}}a.lanes|=n,d=a.alternate,d!==null&&(d.lanes|=n),dh(a.return,n,t),u.lanes|=n;break}d=d.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(se(341));s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),dh(s,n,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}Wt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Ui(t,n),o=wn(o),r=r(o),t.flags|=1,Wt(e,t,r,n),t.child;case 14:return r=t.type,o=Rn(r,t.pendingProps),o=Rn(r.type,o),Lg(e,t,r,o,n);case 15:return _x(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Rn(r,o),Wl(e,t),t.tag=1,Yt(r)?(e=!0,mu(t)):e=!1,Ui(t,n),V0(t,r,o),hh(t,r,o,n),_h(null,t,r,!0,e,n);case 19:return xx(e,t,n);case 22:return gx(e,t,n)}throw Error(se(156,t.tag))};function Mx(e,t){return u0(e,t)}function CC(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(e,t,n,r){return new CC(e,t,n,r)}function rm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function EC(e){if(typeof e=="function")return rm(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wp)return 11;if(e===kp)return 14}return 2}function ro(e,t){var n=e.alternate;return n===null?(n=yn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zl(e,t,n,r,o,a){var s=2;if(r=e,typeof e=="function")rm(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Si:return Vo(n.children,o,a,t);case xp:s=8,o|=8;break;case Mf:return e=yn(12,n,t,o|2),e.elementType=Mf,e.lanes=a,e;case Df:return e=yn(13,n,t,o),e.elementType=Df,e.lanes=a,e;case jf:return e=yn(19,n,t,o),e.elementType=jf,e.lanes=a,e;case Zb:return pc(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hb:s=10;break e;case Vb:s=9;break e;case wp:s=11;break e;case kp:s=14;break e;case Fr:s=16,r=null;break e}throw Error(se(130,e==null?e:typeof e,""))}return t=yn(s,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function Vo(e,t,n,r){return e=yn(7,e,r,t),e.lanes=n,e}function pc(e,t,n,r){return e=yn(22,e,r,t),e.elementType=Zb,e.lanes=n,e.stateNode={isHidden:!1},e}function Yd(e,t,n){return e=yn(6,e,null,t),e.lanes=n,e}function Xd(e,t,n){return t=yn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function OC(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zd(0),this.expirationTimes=zd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zd(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function om(e,t,n,r,o,a,s,u,d){return e=new OC(e,t,n,u,d),t===1?(t=1,a===!0&&(t|=8)):t=0,a=yn(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Up(a),e}function LC(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ki,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Dx(e){if(!e)return po;e=e._reactInternals;e:{if(ri(e)!==e||e.tag!==1)throw Error(se(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Yt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(se(171))}if(e.tag===1){var n=e.type;if(Yt(n))return M0(e,n,t)}return t}function jx(e,t,n,r,o,a,s,u,d){return e=om(n,r,!0,e,o,a,s,u,d),e.context=Dx(null),n=e.current,r=Ht(),o=no(n),a=Sr(r,o),a.callback=t??null,eo(n,a,o),e.current.lanes=o,Bs(e,o,r),Xt(e,r),e}function mc(e,t,n,r){var o=t.current,a=Ht(),s=no(o);return n=Dx(n),t.context===null?t.context=n:t.pendingContext=n,t=Sr(a,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=eo(o,t,s),e!==null&&(Mn(e,o,s,a),Fl(e,o,s)),s}function Ou(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ug(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function im(e,t){Ug(e,t),(e=e.alternate)&&Ug(e,t)}function TC(){return null}var Fx=typeof reportError=="function"?reportError:function(e){console.error(e)};function am(e){this._internalRoot=e}_c.prototype.render=am.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(se(409));mc(e,t,null,null)};_c.prototype.unmount=am.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yo(function(){mc(null,e,null,null)}),t[Er]=null}};function _c(e){this._internalRoot=e}_c.prototype.unstable_scheduleHydration=function(e){if(e){var t=_0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wr.length&&t!==0&&t<Wr[n].priority;n++);Wr.splice(n,0,e),n===0&&v0(e)}};function sm(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $g(){}function RC(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var f=Ou(s);a.call(f)}}var s=jx(t,r,e,0,null,!1,!1,"",$g);return e._reactRootContainer=s,e[Er]=s.current,_s(e.nodeType===8?e.parentNode:e),Yo(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var u=r;r=function(){var f=Ou(d);u.call(f)}}var d=om(e,0,!1,null,null,!1,!1,"",$g);return e._reactRootContainer=d,e[Er]=d.current,_s(e.nodeType===8?e.parentNode:e),Yo(function(){mc(t,d,n,r)}),d}function vc(e,t,n,r,o){var a=n._reactRootContainer;if(a){var s=a;if(typeof o=="function"){var u=o;o=function(){var d=Ou(s);u.call(d)}}mc(t,s,e,o)}else s=RC(n,t,e,o,r);return Ou(s)}p0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Za(t.pendingLanes);n!==0&&(Cp(t,n|1),Xt(t,mt()),!(Fe&6)&&(ea=mt()+500,xo()))}break;case 13:Yo(function(){var r=Or(e,1);if(r!==null){var o=Ht();Mn(r,e,1,o)}}),im(e,1)}};Ep=function(e){if(e.tag===13){var t=Or(e,134217728);if(t!==null){var n=Ht();Mn(t,e,134217728,n)}im(e,134217728)}};m0=function(e){if(e.tag===13){var t=no(e),n=Or(e,t);if(n!==null){var r=Ht();Mn(n,e,t,r)}im(e,t)}};_0=function(){return Ke};g0=function(e,t){var n=Ke;try{return Ke=e,t()}finally{Ke=n}};Qf=function(e,t,n){switch(t){case"input":if($f(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=lc(r);if(!o)throw Error(se(90));Kb(r),$f(r,o)}}}break;case"textarea":Gb(e,n);break;case"select":t=n.value,t!=null&&Mi(e,!!n.multiple,t,!1)}};r0=em;o0=Yo;var AC={usingClientEntryPoint:!1,Events:[Ds,Oi,lc,t0,n0,em]},Ma={findFiberByHostInstance:Do,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},zC={bundleType:Ma.bundleType,version:Ma.version,rendererPackageName:Ma.rendererPackageName,rendererConfig:Ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=s0(e),e===null?null:e.stateNode},findFiberByHostInstance:Ma.findFiberByHostInstance||TC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ll.isDisabled&&Ll.supportsFiber)try{oc=Ll.inject(zC),or=Ll}catch{}}cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AC;cn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sm(t))throw Error(se(200));return LC(e,t,null,n)};cn.createRoot=function(e,t){if(!sm(e))throw Error(se(299));var n=!1,r="",o=Fx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=om(e,1,!1,null,null,n,!1,r,o),e[Er]=t.current,_s(e.nodeType===8?e.parentNode:e),new am(t)};cn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(se(188)):(e=Object.keys(e).join(","),Error(se(268,e)));return e=s0(t),e=e===null?null:e.stateNode,e};cn.flushSync=function(e){return Yo(e)};cn.hydrate=function(e,t,n){if(!gc(t))throw Error(se(200));return vc(null,e,t,!0,n)};cn.hydrateRoot=function(e,t,n){if(!sm(e))throw Error(se(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",s=Fx;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=jx(t,null,e,1,n??null,o,!1,a,s),e[Er]=t.current,_s(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new _c(t)};cn.render=function(e,t,n){if(!gc(t))throw Error(se(200));return vc(null,e,t,!1,n)};cn.unmountComponentAtNode=function(e){if(!gc(e))throw Error(se(40));return e._reactRootContainer?(Yo(function(){vc(null,null,e,!1,function(){e._reactRootContainer=null,e[Er]=null})}),!0):!1};cn.unstable_batchedUpdates=em;cn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gc(n))throw Error(se(200));if(e==null||e._reactInternals===void 0)throw Error(se(38));return vc(e,t,n,!1,r)};cn.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=cn})(TS);const NC=Rb(qo);var Ux,Wg=qo;Ux=Wg.createRoot,Wg.hydrateRoot;var Oh={},IC={get exports(){return Oh},set exports(e){Oh=e}},$x={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ta=E;function BC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var MC=typeof Object.is=="function"?Object.is:BC,DC=ta.useState,jC=ta.useEffect,FC=ta.useLayoutEffect,UC=ta.useDebugValue;function $C(e,t){var n=t(),r=DC({inst:{value:n,getSnapshot:t}}),o=r[0].inst,a=r[1];return FC(function(){o.value=n,o.getSnapshot=t,ef(o)&&a({inst:o})},[e,n,t]),jC(function(){return ef(o)&&a({inst:o}),e(function(){ef(o)&&a({inst:o})})},[e]),UC(n),n}function ef(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!MC(e,n)}catch{return!0}}function WC(e,t){return t()}var HC=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?WC:$C;$x.useSyncExternalStore=ta.useSyncExternalStore!==void 0?ta.useSyncExternalStore:HC;(function(e){e.exports=$x})(IC);var Lh={},VC={get exports(){return Lh},set exports(e){Lh=e}},Wx={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yc=E,ZC=Oh;function qC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var KC=typeof Object.is=="function"?Object.is:qC,QC=ZC.useSyncExternalStore,GC=yc.useRef,JC=yc.useEffect,YC=yc.useMemo,XC=yc.useDebugValue;Wx.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var a=GC(null);if(a.current===null){var s={hasValue:!1,value:null};a.current=s}else s=a.current;a=YC(function(){function d(b){if(!f){if(f=!0,p=b,b=r(b),o!==void 0&&s.hasValue){var y=s.value;if(o(y,b))return m=y}return m=b}if(y=m,KC(p,b))return y;var w=r(b);return o!==void 0&&o(y,w)?y:(p=b,m=w)}var f=!1,p,m,_=n===void 0?null:n;return[function(){return d(t())},_===null?void 0:function(){return d(_())}]},[t,n,r,o]);var u=QC(e,a[0],a[1]);return JC(function(){s.hasValue=!0,s.value=u},[u]),XC(u),u};(function(e){e.exports=Wx})(VC);function eE(e){e()}let Hx=eE;const tE=e=>Hx=e,nE=()=>Hx,mo=E.createContext(null);function Vx(){return E.useContext(mo)}const rE=()=>{throw new Error("uSES not initialized!")};let Zx=rE;const oE=e=>{Zx=e},iE=(e,t)=>e===t;function aE(e=mo){const t=e===mo?Vx:()=>E.useContext(e);return function(r,o=iE){const{store:a,subscription:s,getServerState:u}=t(),d=Zx(s.addNestedSub,a.getState,u||a.getState,r,o);return E.useDebugValue(d),d}}const sE=aE();function Ve(){return Ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ve.apply(this,arguments)}var Th={},lE={get exports(){return Th},set exports(e){Th=e}},Qe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ot=typeof Symbol=="function"&&Symbol.for,lm=Ot?Symbol.for("react.element"):60103,um=Ot?Symbol.for("react.portal"):60106,bc=Ot?Symbol.for("react.fragment"):60107,xc=Ot?Symbol.for("react.strict_mode"):60108,wc=Ot?Symbol.for("react.profiler"):60114,kc=Ot?Symbol.for("react.provider"):60109,Sc=Ot?Symbol.for("react.context"):60110,cm=Ot?Symbol.for("react.async_mode"):60111,Pc=Ot?Symbol.for("react.concurrent_mode"):60111,Cc=Ot?Symbol.for("react.forward_ref"):60112,Ec=Ot?Symbol.for("react.suspense"):60113,uE=Ot?Symbol.for("react.suspense_list"):60120,Oc=Ot?Symbol.for("react.memo"):60115,Lc=Ot?Symbol.for("react.lazy"):60116,cE=Ot?Symbol.for("react.block"):60121,dE=Ot?Symbol.for("react.fundamental"):60117,fE=Ot?Symbol.for("react.responder"):60118,hE=Ot?Symbol.for("react.scope"):60119;function fn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case lm:switch(e=e.type,e){case cm:case Pc:case bc:case wc:case xc:case Ec:return e;default:switch(e=e&&e.$$typeof,e){case Sc:case Cc:case Lc:case Oc:case kc:return e;default:return t}}case um:return t}}}function qx(e){return fn(e)===Pc}Qe.AsyncMode=cm;Qe.ConcurrentMode=Pc;Qe.ContextConsumer=Sc;Qe.ContextProvider=kc;Qe.Element=lm;Qe.ForwardRef=Cc;Qe.Fragment=bc;Qe.Lazy=Lc;Qe.Memo=Oc;Qe.Portal=um;Qe.Profiler=wc;Qe.StrictMode=xc;Qe.Suspense=Ec;Qe.isAsyncMode=function(e){return qx(e)||fn(e)===cm};Qe.isConcurrentMode=qx;Qe.isContextConsumer=function(e){return fn(e)===Sc};Qe.isContextProvider=function(e){return fn(e)===kc};Qe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===lm};Qe.isForwardRef=function(e){return fn(e)===Cc};Qe.isFragment=function(e){return fn(e)===bc};Qe.isLazy=function(e){return fn(e)===Lc};Qe.isMemo=function(e){return fn(e)===Oc};Qe.isPortal=function(e){return fn(e)===um};Qe.isProfiler=function(e){return fn(e)===wc};Qe.isStrictMode=function(e){return fn(e)===xc};Qe.isSuspense=function(e){return fn(e)===Ec};Qe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===bc||e===Pc||e===wc||e===xc||e===Ec||e===uE||typeof e=="object"&&e!==null&&(e.$$typeof===Lc||e.$$typeof===Oc||e.$$typeof===kc||e.$$typeof===Sc||e.$$typeof===Cc||e.$$typeof===dE||e.$$typeof===fE||e.$$typeof===hE||e.$$typeof===cE)};Qe.typeOf=fn;(function(e){e.exports=Qe})(lE);var Kx=Th,pE={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},mE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Qx={};Qx[Kx.ForwardRef]=pE;Qx[Kx.Memo]=mE;var Hg={},_E={get exports(){return Hg},set exports(e){Hg=e}},Ge={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm=Symbol.for("react.element"),fm=Symbol.for("react.portal"),Tc=Symbol.for("react.fragment"),Rc=Symbol.for("react.strict_mode"),Ac=Symbol.for("react.profiler"),zc=Symbol.for("react.provider"),Nc=Symbol.for("react.context"),gE=Symbol.for("react.server_context"),Ic=Symbol.for("react.forward_ref"),Bc=Symbol.for("react.suspense"),Mc=Symbol.for("react.suspense_list"),Dc=Symbol.for("react.memo"),jc=Symbol.for("react.lazy"),vE=Symbol.for("react.offscreen"),Gx;Gx=Symbol.for("react.module.reference");function Sn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case dm:switch(e=e.type,e){case Tc:case Ac:case Rc:case Bc:case Mc:return e;default:switch(e=e&&e.$$typeof,e){case gE:case Nc:case Ic:case jc:case Dc:case zc:return e;default:return t}}case fm:return t}}}Ge.ContextConsumer=Nc;Ge.ContextProvider=zc;Ge.Element=dm;Ge.ForwardRef=Ic;Ge.Fragment=Tc;Ge.Lazy=jc;Ge.Memo=Dc;Ge.Portal=fm;Ge.Profiler=Ac;Ge.StrictMode=Rc;Ge.Suspense=Bc;Ge.SuspenseList=Mc;Ge.isAsyncMode=function(){return!1};Ge.isConcurrentMode=function(){return!1};Ge.isContextConsumer=function(e){return Sn(e)===Nc};Ge.isContextProvider=function(e){return Sn(e)===zc};Ge.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===dm};Ge.isForwardRef=function(e){return Sn(e)===Ic};Ge.isFragment=function(e){return Sn(e)===Tc};Ge.isLazy=function(e){return Sn(e)===jc};Ge.isMemo=function(e){return Sn(e)===Dc};Ge.isPortal=function(e){return Sn(e)===fm};Ge.isProfiler=function(e){return Sn(e)===Ac};Ge.isStrictMode=function(e){return Sn(e)===Rc};Ge.isSuspense=function(e){return Sn(e)===Bc};Ge.isSuspenseList=function(e){return Sn(e)===Mc};Ge.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Tc||e===Ac||e===Rc||e===Bc||e===Mc||e===vE||typeof e=="object"&&e!==null&&(e.$$typeof===jc||e.$$typeof===Dc||e.$$typeof===zc||e.$$typeof===Nc||e.$$typeof===Ic||e.$$typeof===Gx||e.getModuleId!==void 0)};Ge.typeOf=Sn;(function(e){e.exports=Ge})(_E);function yE(){const e=nE();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],o=t;for(;o;)r.push(o),o=o.next;return r},subscribe(r){let o=!0,a=n={callback:r,next:null,prev:n};return a.prev?a.prev.next=a:t=a,function(){!o||t===null||(o=!1,a.next?a.next.prev=a.prev:n=a.prev,a.prev?a.prev.next=a.next:t=a.next)}}}}const Vg={notify(){},get:()=>[]};function bE(e,t){let n,r=Vg;function o(m){return d(),r.subscribe(m)}function a(){r.notify()}function s(){p.onStateChange&&p.onStateChange()}function u(){return!!n}function d(){n||(n=t?t.addNestedSub(s):e.subscribe(s),r=yE())}function f(){n&&(n(),n=void 0,r.clear(),r=Vg)}const p={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:s,isSubscribed:u,trySubscribe:d,tryUnsubscribe:f,getListeners:()=>r};return p}const xE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wE=xE?E.useLayoutEffect:E.useEffect;function kE({store:e,context:t,children:n,serverState:r}){const o=E.useMemo(()=>{const u=bE(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0}},[e,r]),a=E.useMemo(()=>e.getState(),[e]);wE(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const s=t||mo;return U.createElement(s.Provider,{value:o},n)}function Jx(e=mo){const t=e===mo?Vx:()=>E.useContext(e);return function(){const{store:r}=t();return r}}const SE=Jx();function PE(e=mo){const t=e===mo?SE:Jx(e);return function(){return t().dispatch}}const CE=PE();oE(Lh.useSyncExternalStoreWithSelector);tE(qo.unstable_batchedUpdates);/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function He(){return He=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},He.apply(this,arguments)}var yt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(yt||(yt={}));const Zg="popstate";function EE(e){e===void 0&&(e={});function t(r,o){let{pathname:a,search:s,hash:u}=r.location;return Ps("",{pathname:a,search:s,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Fs(o)}return LE(t,n,null,e)}function Ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function na(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function OE(){return Math.random().toString(36).substr(2,8)}function qg(e,t){return{usr:e.state,key:e.key,idx:t}}function Ps(e,t,n,r){return n===void 0&&(n=null),He({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ar(t):t,{state:n,key:t&&t.key||r||OE()})}function Fs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ar(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function LE(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:a=!1}=r,s=o.history,u=yt.Pop,d=null,f=p();f==null&&(f=0,s.replaceState(He({},s.state,{idx:f}),""));function p(){return(s.state||{idx:null}).idx}function m(){u=yt.Pop;let C=p(),g=C==null?null:C-f;f=C,d&&d({action:u,location:w.location,delta:g})}function _(C,g){u=yt.Push;let x=Ps(w.location,C,g);n&&n(x,C),f=p()+1;let k=qg(x,f),P=w.createHref(x);try{s.pushState(k,"",P)}catch{o.location.assign(P)}a&&d&&d({action:u,location:w.location,delta:1})}function b(C,g){u=yt.Replace;let x=Ps(w.location,C,g);n&&n(x,C),f=p();let k=qg(x,f),P=w.createHref(x);s.replaceState(k,"",P),a&&d&&d({action:u,location:w.location,delta:0})}function y(C){let g=o.location.origin!=="null"?o.location.origin:o.location.href,x=typeof C=="string"?C:Fs(C);return Ne(g,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,g)}let w={get action(){return u},get location(){return e(o,s)},listen(C){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(Zg,m),d=C,()=>{o.removeEventListener(Zg,m),d=null}},createHref(C){return t(o,C)},createURL:y,encodeLocation(C){let g=y(C);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:_,replace:b,go(C){return s.go(C)}};return w}var wt;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(wt||(wt={}));const TE=new Set(["lazy","caseSensitive","path","id","index","children"]);function RE(e){return e.index===!0}function Rh(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((o,a)=>{let s=[...n,a],u=typeof o.id=="string"?o.id:s.join("-");if(Ne(o.index!==!0||!o.children,"Cannot specify children on an index route"),Ne(!r[u],'Found a route id collision on id "'+u+`".  Route id's must be globally unique within Data Router usages`),RE(o)){let d=He({},o,t(o),{id:u});return r[u]=d,d}else{let d=He({},o,t(o),{id:u,children:void 0});return r[u]=d,o.children&&(d.children=Rh(o.children,t,s,r)),d}})}function Ii(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ar(t):t,o=Us(r.pathname||"/",n);if(o==null)return null;let a=Yx(e);AE(a);let s=null;for(let u=0;s==null&&u<a.length;++u)s=UE(a[u],HE(o));return s}function Yx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(a,s,u)=>{let d={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};d.relativePath.startsWith("/")&&(Ne(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let f=oo([r,d.relativePath]),p=n.concat(d);a.children&&a.children.length>0&&(Ne(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),Yx(a.children,t,p,f)),!(a.path==null&&!a.index)&&t.push({path:f,score:jE(f,a.index),routesMeta:p})};return e.forEach((a,s)=>{var u;if(a.path===""||!((u=a.path)!=null&&u.includes("?")))o(a,s);else for(let d of Xx(a.path))o(a,s,d)}),t}function Xx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let s=Xx(r.join("/")),u=[];return u.push(...s.map(d=>d===""?a:[a,d].join("/"))),o&&u.push(...s),u.map(d=>e.startsWith("/")&&d===""?"/":d)}function AE(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:FE(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const zE=/^:\w+$/,NE=3,IE=2,BE=1,ME=10,DE=-2,Kg=e=>e==="*";function jE(e,t){let n=e.split("/"),r=n.length;return n.some(Kg)&&(r+=DE),t&&(r+=IE),n.filter(o=>!Kg(o)).reduce((o,a)=>o+(zE.test(a)?NE:a===""?BE:ME),r)}function FE(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function UE(e,t){let{routesMeta:n}=e,r={},o="/",a=[];for(let s=0;s<n.length;++s){let u=n[s],d=s===n.length-1,f=o==="/"?t:t.slice(o.length)||"/",p=$E({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f);if(!p)return null;Object.assign(r,p.params);let m=u.route;a.push({params:r,pathname:oo([o,p.pathname]),pathnameBase:KE(oo([o,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(o=oo([o,p.pathnameBase]))}return a}function $E(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=WE(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],s=a.replace(/(.)\/+$/,"$1"),u=o.slice(1);return{params:r.reduce((f,p,m)=>{if(p==="*"){let _=u[m]||"";s=a.slice(0,a.length-_.length).replace(/(.)\/+$/,"$1")}return f[p]=VE(u[m]||"",p),f},{}),pathname:a,pathnameBase:s,pattern:e}}function WE(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),na(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,u)=>(r.push(u),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function HE(e){try{return decodeURI(e)}catch(t){return na(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function VE(e,t){try{return decodeURIComponent(e)}catch(n){return na(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Us(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ZE(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Ar(e):e;return{pathname:n?n.startsWith("/")?n:qE(n,t):t,search:QE(r),hash:GE(o)}}function qE(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function tf(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ew(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Ar(e):(o=He({},e),Ne(!o.pathname||!o.pathname.includes("?"),tf("?","pathname","search",o)),Ne(!o.pathname||!o.pathname.includes("#"),tf("#","pathname","hash",o)),Ne(!o.search||!o.search.includes("#"),tf("#","search","hash",o)));let a=e===""||o.pathname==="",s=a?"/":o.pathname,u;if(r||s==null)u=n;else{let m=t.length-1;if(s.startsWith("..")){let _=s.split("/");for(;_[0]==="..";)_.shift(),m-=1;o.pathname=_.join("/")}u=m>=0?t[m]:"/"}let d=ZE(o,u),f=s&&s!=="/"&&s.endsWith("/"),p=(a||s===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(f||p)&&(d.pathname+="/"),d}const oo=e=>e.join("/").replace(/\/\/+/g,"/"),KE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),QE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,GE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class pm{constructor(t,n,r,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function tw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const nw=["post","put","patch","delete"],JE=new Set(nw),YE=["get",...nw],XE=new Set(YE),e2=new Set([301,302,303,307,308]),t2=new Set([307,308]),nf={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},n2={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Qg={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},rw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ow=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",r2=!ow,o2=e=>({hasErrorBoundary:!!e.hasErrorBoundary});function i2(e){Ne(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t;if(e.mapRouteProperties)t=e.mapRouteProperties;else if(e.detectErrorBoundary){let H=e.detectErrorBoundary;t=Z=>({hasErrorBoundary:H(Z)})}else t=o2;let n={},r=Rh(e.routes,t,void 0,n),o,a=e.basename||"/",s=He({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),u=null,d=new Set,f=null,p=null,m=null,_=e.hydrationData!=null,b=Ii(r,e.history.location,a),y=null;if(b==null){let H=An(404,{pathname:e.history.location.pathname}),{matches:Z,route:ie}=nv(r);b=Z,y={[ie.id]:H}}let w=!b.some(H=>H.route.lazy)&&(!b.some(H=>H.route.loader)||e.hydrationData!=null),C,g={historyAction:e.history.action,location:e.history.location,matches:b,initialized:w,navigation:nf,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||y,fetchers:new Map,blockers:new Map},x=yt.Pop,k=!1,P,T=!1,A=!1,I=[],F=[],W=new Map,B=0,G=-1,J=new Map,ee=new Set,V=new Map,le=new Map,X=new Map,D=!1;function z(){return u=e.history.listen(H=>{let{action:Z,location:ie,delta:ge}=H;if(D){D=!1;return}na(X.size===0||ge!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ye=oi({currentLocation:g.location,nextLocation:ie,historyAction:Z});if(ye&&ge!=null){D=!0,e.history.go(ge*-1),qt(ye,{state:"blocked",location:ie,proceed(){qt(ye,{state:"proceeding",proceed:void 0,reset:void 0,location:ie}),e.history.go(ge)},reset(){tt(ye),O({blockers:new Map(C.state.blockers)})}});return}return ne(Z,ie)}),g.initialized||ne(yt.Pop,g.location),C}function oe(){u&&u(),d.clear(),P&&P.abort(),g.fetchers.forEach((H,Z)=>de(Z)),g.blockers.forEach((H,Z)=>tt(Z))}function q(H){return d.add(H),()=>d.delete(H)}function O(H){g=He({},g,H),d.forEach(Z=>Z(g))}function N(H,Z){var ie,ge;let ye=g.actionData!=null&&g.navigation.formMethod!=null&&yr(g.navigation.formMethod)&&g.navigation.state==="loading"&&((ie=H.state)==null?void 0:ie._isRedirect)!==!0,ke;Z.actionData?Object.keys(Z.actionData).length>0?ke=Z.actionData:ke=null:ye?ke=g.actionData:ke=null;let Ce=Z.loaderData?tv(g.loaderData,Z.loaderData,Z.matches||[],Z.errors):g.loaderData;for(let[xe]of X)tt(xe);let we=k===!0||g.navigation.formMethod!=null&&yr(g.navigation.formMethod)&&((ge=H.state)==null?void 0:ge._isRedirect)!==!0;o&&(r=o,o=void 0),O(He({},Z,{actionData:ke,loaderData:Ce,historyAction:x,location:H,initialized:!0,navigation:nf,revalidation:"idle",restoreScrollPosition:ur(H,Z.matches||g.matches),preventScrollReset:we,blockers:new Map(g.blockers)})),T||x===yt.Pop||(x===yt.Push?e.history.push(H,H.state):x===yt.Replace&&e.history.replace(H,H.state)),x=yt.Pop,k=!1,T=!1,A=!1,I=[],F=[]}async function M(H,Z){if(typeof H=="number"){e.history.go(H);return}let ie=Ah(g.location,g.matches,a,s.v7_prependBasename,H,Z?.fromRouteId,Z?.relative),{path:ge,submission:ye,error:ke}=Gg(s.v7_normalizeFormMethod,!1,ie,Z),Ce=g.location,we=Ps(g.location,ge,Z&&Z.state);we=He({},we,e.history.encodeLocation(we));let xe=Z&&Z.replace!=null?Z.replace:void 0,Be=yt.Push;xe===!0?Be=yt.Replace:xe===!1||ye!=null&&yr(ye.formMethod)&&ye.formAction===g.location.pathname+g.location.search&&(Be=yt.Replace);let We=Z&&"preventScrollReset"in Z?Z.preventScrollReset===!0:void 0,xt=oi({currentLocation:Ce,nextLocation:we,historyAction:Be});if(xt){qt(xt,{state:"blocked",location:we,proceed(){qt(xt,{state:"proceeding",proceed:void 0,reset:void 0,location:we}),M(H,Z)},reset(){tt(xt),O({blockers:new Map(g.blockers)})}});return}return await ne(Be,we,{submission:ye,pendingError:ke,preventScrollReset:We,replace:Z&&Z.replace})}function Q(){if(K(),O({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){ne(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}ne(x||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function ne(H,Z,ie){P&&P.abort(),P=null,x=H,T=(ie&&ie.startUninterruptedRevalidation)===!0,Hn(g.location,g.matches),k=(ie&&ie.preventScrollReset)===!0;let ge=o||r,ye=ie&&ie.overrideNavigation,ke=Ii(ge,Z,a);if(!ke){let ht=An(404,{pathname:Z.pathname}),{matches:_t,route:Kt}=nv(ge);wo(),N(Z,{matches:_t,loaderData:{},errors:{[Kt.id]:ht}});return}if(g.initialized&&c2(g.location,Z)&&!(ie&&ie.submission&&yr(ie.submission.formMethod))){N(Z,{matches:ke});return}P=new AbortController;let Ce=ja(e.history,Z,P.signal,ie&&ie.submission),we,xe;if(ie&&ie.pendingError)xe={[Bi(ke).route.id]:ie.pendingError};else if(ie&&ie.submission&&yr(ie.submission.formMethod)){let ht=await ue(Ce,Z,ie.submission,ke,{replace:ie.replace});if(ht.shortCircuited)return;we=ht.pendingActionData,xe=ht.pendingActionError,ye=He({state:"loading",location:Z},ie.submission),Ce=new Request(Ce.url,{signal:Ce.signal})}let{shortCircuited:Be,loaderData:We,errors:xt}=await he(Ce,Z,ke,ye,ie&&ie.submission,ie&&ie.fetcherSubmission,ie&&ie.replace,we,xe);Be||(P=null,N(Z,He({matches:ke},we?{actionData:we}:{},{loaderData:We,errors:xt})))}async function ue(H,Z,ie,ge,ye){K();let ke=He({state:"submitting",location:Z},ie);O({navigation:ke});let Ce,we=zh(ge,Z);if(!we.route.action&&!we.route.lazy)Ce={type:wt.error,error:An(405,{method:H.method,pathname:Z.pathname,routeId:we.route.id})};else if(Ce=await Da("action",H,we,ge,n,t,a),H.signal.aborted)return{shortCircuited:!0};if(Wi(Ce)){let xe;return ye&&ye.replace!=null?xe=ye.replace:xe=Ce.location===g.location.pathname+g.location.search,await ae(g,Ce,{submission:ie,replace:xe}),{shortCircuited:!0}}if(os(Ce)){let xe=Bi(ge,we.route.id);return(ye&&ye.replace)!==!0&&(x=yt.Push),{pendingActionData:{},pendingActionError:{[xe.route.id]:Ce.error}}}if(Uo(Ce))throw An(400,{type:"defer-action"});return{pendingActionData:{[we.route.id]:Ce.data}}}async function he(H,Z,ie,ge,ye,ke,Ce,we,xe){let Be=ge;Be||(Be=He({state:"loading",location:Z,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ye));let We=ye||ke?ye||ke:Be.formMethod&&Be.formAction&&Be.formData&&Be.formEncType?{formMethod:Be.formMethod,formAction:Be.formAction,formData:Be.formData,formEncType:Be.formEncType}:void 0,xt=o||r,[ht,_t]=Jg(e.history,g,ie,We,Z,A,I,F,V,xt,a,we,xe);if(wo(Me=>!(ie&&ie.some(pe=>pe.route.id===Me))||ht&&ht.some(pe=>pe.route.id===Me)),ht.length===0&&_t.length===0){let Me=Ie();return N(Z,He({matches:ie,loaderData:{},errors:xe||null},we?{actionData:we}:{},Me?{fetchers:new Map(g.fetchers)}:{})),{shortCircuited:!0}}if(!T){_t.forEach(pe=>{let cr=g.fetchers.get(pe.key),si={state:"loading",data:cr&&cr.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(pe.key,si)});let Me=we||g.actionData;O(He({navigation:Be},Me?Object.keys(Me).length===0?{actionData:null}:{actionData:Me}:{},_t.length>0?{fetchers:new Map(g.fetchers)}:{}))}G=++B,_t.forEach(Me=>{Me.controller&&W.set(Me.key,Me.controller)});let Kt=()=>_t.forEach(Me=>_e(Me.key));P&&P.signal.addEventListener("abort",Kt);let{results:So,loaderResults:pa,fetcherResults:ii}=await me(g.matches,ie,ht,_t,H);if(H.signal.aborted)return{shortCircuited:!0};P&&P.signal.removeEventListener("abort",Kt),_t.forEach(Me=>W.delete(Me.key));let Vn=rv(So);if(Vn)return await ae(g,Vn,{replace:Ce}),{shortCircuited:!0};let{loaderData:zr,errors:ma}=ev(g,ie,ht,pa,xe,_t,ii,le);le.forEach((Me,pe)=>{Me.subscribe(cr=>{(cr||Me.done)&&le.delete(pe)})});let _a=Ie(),ga=Ue(G),ai=_a||ga||_t.length>0;return He({loaderData:zr,errors:ma},ai?{fetchers:new Map(g.fetchers)}:{})}function be(H){return g.fetchers.get(H)||n2}function Je(H,Z,ie,ge){if(r2)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");W.has(H)&&_e(H);let ye=o||r,ke=Ah(g.location,g.matches,a,s.v7_prependBasename,ie,Z,ge?.relative),Ce=Ii(ye,ke,a);if(!Ce){ce(H,Z,An(404,{pathname:ke}));return}let{path:we,submission:xe}=Gg(s.v7_normalizeFormMethod,!0,ke,ge),Be=zh(Ce,we);if(k=(ge&&ge.preventScrollReset)===!0,xe&&yr(xe.formMethod)){Ze(H,Z,we,Be,Ce,xe);return}V.set(H,{routeId:Z,path:we}),Le(H,Z,we,Be,Ce,xe)}async function Ze(H,Z,ie,ge,ye,ke){if(K(),V.delete(H),!ge.route.action&&!ge.route.lazy){let zt=An(405,{method:ke.formMethod,pathname:ie,routeId:Z});ce(H,Z,zt);return}let Ce=g.fetchers.get(H),we=He({state:"submitting"},ke,{data:Ce&&Ce.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(H,we),O({fetchers:new Map(g.fetchers)});let xe=new AbortController,Be=ja(e.history,ie,xe.signal,ke);W.set(H,xe);let We=await Da("action",Be,ge,ye,n,t,a);if(Be.signal.aborted){W.get(H)===xe&&W.delete(H);return}if(Wi(We)){W.delete(H),ee.add(H);let zt=He({state:"loading"},ke,{data:void 0," _hasFetcherDoneAnything ":!0});return g.fetchers.set(H,zt),O({fetchers:new Map(g.fetchers)}),ae(g,We,{submission:ke,isFetchActionRedirect:!0})}if(os(We)){ce(H,Z,We.error);return}if(Uo(We))throw An(400,{type:"defer-action"});let xt=g.navigation.location||g.location,ht=ja(e.history,xt,xe.signal),_t=o||r,Kt=g.navigation.state!=="idle"?Ii(_t,g.navigation.location,a):g.matches;Ne(Kt,"Didn't find any matches after fetcher action");let So=++B;J.set(H,So);let pa=He({state:"loading",data:We.data},ke,{" _hasFetcherDoneAnything ":!0});g.fetchers.set(H,pa);let[ii,Vn]=Jg(e.history,g,Kt,ke,xt,A,I,F,V,_t,a,{[ge.route.id]:We.data},void 0);Vn.filter(zt=>zt.key!==H).forEach(zt=>{let li=zt.key,ui=g.fetchers.get(li),qs={state:"loading",data:ui&&ui.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(li,qs),zt.controller&&W.set(li,zt.controller)}),O({fetchers:new Map(g.fetchers)});let zr=()=>Vn.forEach(zt=>_e(zt.key));xe.signal.addEventListener("abort",zr);let{results:ma,loaderResults:_a,fetcherResults:ga}=await me(g.matches,Kt,ii,Vn,ht);if(xe.signal.aborted)return;xe.signal.removeEventListener("abort",zr),J.delete(H),W.delete(H),Vn.forEach(zt=>W.delete(zt.key));let ai=rv(ma);if(ai)return ae(g,ai);let{loaderData:Me,errors:pe}=ev(g,g.matches,ii,_a,void 0,Vn,ga,le),cr={state:"idle",data:We.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(H,cr);let si=Ue(So);g.navigation.state==="loading"&&So>G?(Ne(x,"Expected pending action"),P&&P.abort(),N(g.navigation.location,{matches:Kt,loaderData:Me,errors:pe,fetchers:new Map(g.fetchers)})):(O(He({errors:pe,loaderData:tv(g.loaderData,Me,Kt,pe)},si?{fetchers:new Map(g.fetchers)}:{})),A=!1)}async function Le(H,Z,ie,ge,ye,ke){let Ce=g.fetchers.get(H),we=He({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ke,{data:Ce&&Ce.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(H,we),O({fetchers:new Map(g.fetchers)});let xe=new AbortController,Be=ja(e.history,ie,xe.signal);W.set(H,xe);let We=await Da("loader",Be,ge,ye,n,t,a);if(Uo(We)&&(We=await lw(We,Be.signal,!0)||We),W.get(H)===xe&&W.delete(H),Be.signal.aborted)return;if(Wi(We)){ee.add(H),await ae(g,We);return}if(os(We)){let ht=Bi(g.matches,Z);g.fetchers.delete(H),O({fetchers:new Map(g.fetchers),errors:{[ht.route.id]:We.error}});return}Ne(!Uo(We),"Unhandled fetcher deferred data");let xt={state:"idle",data:We.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(H,xt),O({fetchers:new Map(g.fetchers)})}async function ae(H,Z,ie){var ge;let{submission:ye,replace:ke,isFetchActionRedirect:Ce}=ie===void 0?{}:ie;Z.revalidate&&(A=!0);let we=Ps(H.location,Z.location,He({_isRedirect:!0},Ce?{_isFetchActionRedirect:!0}:{}));if(Ne(we,"Expected a location on the redirect navigation"),rw.test(Z.location)&&ow&&typeof((ge=window)==null?void 0:ge.location)<"u"){let _t=e.history.createURL(Z.location),Kt=Us(_t.pathname,a)==null;if(window.location.origin!==_t.origin||Kt){ke?window.location.replace(Z.location):window.location.assign(Z.location);return}}P=null;let xe=ke===!0?yt.Replace:yt.Push,{formMethod:Be,formAction:We,formEncType:xt,formData:ht}=H.navigation;!ye&&Be&&We&&ht&&xt&&(ye={formMethod:Be,formAction:We,formEncType:xt,formData:ht}),t2.has(Z.status)&&ye&&yr(ye.formMethod)?await ne(xe,we,{submission:He({},ye,{formAction:Z.location}),preventScrollReset:k}):Ce?await ne(xe,we,{overrideNavigation:{state:"loading",location:we,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:ye,preventScrollReset:k}):await ne(xe,we,{overrideNavigation:{state:"loading",location:we,formMethod:ye?ye.formMethod:void 0,formAction:ye?ye.formAction:void 0,formEncType:ye?ye.formEncType:void 0,formData:ye?ye.formData:void 0},preventScrollReset:k})}async function me(H,Z,ie,ge,ye){let ke=await Promise.all([...ie.map(xe=>Da("loader",ye,xe,Z,n,t,a)),...ge.map(xe=>xe.matches&&xe.match&&xe.controller?Da("loader",ja(e.history,xe.path,xe.controller.signal),xe.match,xe.matches,n,t,a):{type:wt.error,error:An(404,{pathname:xe.path})})]),Ce=ke.slice(0,ie.length),we=ke.slice(ie.length);return await Promise.all([ov(H,ie,Ce,Ce.map(()=>ye.signal),!1,g.loaderData),ov(H,ge.map(xe=>xe.match),we,ge.map(xe=>xe.controller?xe.controller.signal:null),!0)]),{results:ke,loaderResults:Ce,fetcherResults:we}}function K(){A=!0,I.push(...wo()),V.forEach((H,Z)=>{W.has(Z)&&(F.push(Z),_e(Z))})}function ce(H,Z,ie){let ge=Bi(g.matches,Z);de(H),O({errors:{[ge.route.id]:ie},fetchers:new Map(g.fetchers)})}function de(H){W.has(H)&&_e(H),V.delete(H),J.delete(H),ee.delete(H),g.fetchers.delete(H)}function _e(H){let Z=W.get(H);Ne(Z,"Expected fetch controller: "+H),Z.abort(),W.delete(H)}function Se(H){for(let Z of H){let ge={state:"idle",data:be(Z).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(Z,ge)}}function Ie(){let H=[],Z=!1;for(let ie of ee){let ge=g.fetchers.get(ie);Ne(ge,"Expected fetcher: "+ie),ge.state==="loading"&&(ee.delete(ie),H.push(ie),Z=!0)}return Se(H),Z}function Ue(H){let Z=[];for(let[ie,ge]of J)if(ge<H){let ye=g.fetchers.get(ie);Ne(ye,"Expected fetcher: "+ie),ye.state==="loading"&&(_e(ie),J.delete(ie),Z.push(ie))}return Se(Z),Z.length>0}function Ye(H,Z){let ie=g.blockers.get(H)||Qg;return X.get(H)!==Z&&X.set(H,Z),ie}function tt(H){g.blockers.delete(H),X.delete(H)}function qt(H,Z){let ie=g.blockers.get(H)||Qg;Ne(ie.state==="unblocked"&&Z.state==="blocked"||ie.state==="blocked"&&Z.state==="blocked"||ie.state==="blocked"&&Z.state==="proceeding"||ie.state==="blocked"&&Z.state==="unblocked"||ie.state==="proceeding"&&Z.state==="unblocked","Invalid blocker state transition: "+ie.state+" -> "+Z.state),g.blockers.set(H,Z),O({blockers:new Map(g.blockers)})}function oi(H){let{currentLocation:Z,nextLocation:ie,historyAction:ge}=H;if(X.size===0)return;X.size>1&&na(!1,"A router only supports one blocker at a time");let ye=Array.from(X.entries()),[ke,Ce]=ye[ye.length-1],we=g.blockers.get(ke);if(!(we&&we.state==="proceeding")&&Ce({currentLocation:Z,nextLocation:ie,historyAction:ge}))return ke}function wo(H){let Z=[];return le.forEach((ie,ge)=>{(!H||H(ge))&&(ie.cancel(),Z.push(ge),le.delete(ge))}),Z}function Pn(H,Z,ie){if(f=H,m=Z,p=ie||(ge=>ge.key),!_&&g.navigation===nf){_=!0;let ge=ur(g.location,g.matches);ge!=null&&O({restoreScrollPosition:ge})}return()=>{f=null,m=null,p=null}}function Hn(H,Z){if(f&&p&&m){let ie=Z.map(ye=>iv(ye,g.loaderData)),ge=p(H,ie)||H.key;f[ge]=m()}}function ur(H,Z){if(f&&p&&m){let ie=Z.map(ke=>iv(ke,g.loaderData)),ge=p(H,ie)||H.key,ye=f[ge];if(typeof ye=="number")return ye}return null}function ko(H){n={},o=Rh(H,t,void 0,n)}return C={get basename(){return a},get state(){return g},get routes(){return r},initialize:z,subscribe:q,enableScrollRestoration:Pn,navigate:M,fetch:Je,revalidate:Q,createHref:H=>e.history.createHref(H),encodeLocation:H=>e.history.encodeLocation(H),getFetcher:be,deleteFetcher:de,dispose:oe,getBlocker:Ye,deleteBlocker:tt,_internalFetchControllers:W,_internalActiveDeferreds:le,_internalSetRoutes:ko},C}function a2(e){return e!=null&&"formData"in e}function Ah(e,t,n,r,o,a,s){let u,d;if(a!=null&&s!=="path"){u=[];for(let p of t)if(u.push(p),p.route.id===a){d=p;break}}else u=t,d=t[t.length-1];let f=ew(o||".",hm(u).map(p=>p.pathnameBase),Us(e.pathname,n)||e.pathname,s==="path");return o==null&&(f.search=e.search,f.hash=e.hash),(o==null||o===""||o===".")&&d&&d.route.index&&!mm(f.search)&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(f.pathname=f.pathname==="/"?n:oo([n,f.pathname])),Fs(f)}function Gg(e,t,n,r){if(!r||!a2(r))return{path:n};if(r.formMethod&&!h2(r.formMethod))return{path:n,error:An(405,{method:r.formMethod})};let o;if(r.formData){let u=r.formMethod||"get";if(o={formMethod:e?u.toUpperCase():u.toLowerCase(),formAction:sw(n),formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:r.formData},yr(o.formMethod))return{path:n,submission:o}}let a=Ar(n),s=aw(r.formData);return t&&a.search&&mm(a.search)&&s.append("index",""),a.search="?"+s,{path:Fs(a),submission:o}}function s2(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Jg(e,t,n,r,o,a,s,u,d,f,p,m,_){let b=_?Object.values(_)[0]:m?Object.values(m)[0]:void 0,y=e.createURL(t.location),w=e.createURL(o),C=_?Object.keys(_)[0]:void 0,x=s2(n,C).filter((P,T)=>{if(P.route.lazy)return!0;if(P.route.loader==null)return!1;if(l2(t.loaderData,t.matches[T],P)||s.some(F=>F===P.route.id))return!0;let A=t.matches[T],I=P;return Yg(P,He({currentUrl:y,currentParams:A.params,nextUrl:w,nextParams:I.params},r,{actionResult:b,defaultShouldRevalidate:a||y.pathname+y.search===w.pathname+w.search||y.search!==w.search||iw(A,I)}))}),k=[];return d.forEach((P,T)=>{if(!n.some(W=>W.route.id===P.routeId))return;let A=Ii(f,P.path,p);if(!A){k.push({key:T,routeId:P.routeId,path:P.path,matches:null,match:null,controller:null});return}let I=zh(A,P.path);if(u.includes(T)){k.push({key:T,routeId:P.routeId,path:P.path,matches:A,match:I,controller:new AbortController});return}Yg(I,He({currentUrl:y,currentParams:t.matches[t.matches.length-1].params,nextUrl:w,nextParams:n[n.length-1].params},r,{actionResult:b,defaultShouldRevalidate:a}))&&k.push({key:T,routeId:P.routeId,path:P.path,matches:A,match:I,controller:new AbortController})}),[x,k]}function l2(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function iw(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Yg(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Xg(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];Ne(o,"No route found in manifest");let a={};for(let s in r){let d=o[s]!==void 0&&s!=="hasErrorBoundary";na(!d,'Route "'+o.id+'" has a static property "'+s+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+s+'" will be ignored.')),!d&&!TE.has(s)&&(a[s]=r[s])}Object.assign(o,a),Object.assign(o,He({},t(o),{lazy:void 0}))}async function Da(e,t,n,r,o,a,s,u,d,f){u===void 0&&(u=!1),d===void 0&&(d=!1);let p,m,_,b=C=>{let g,x=new Promise((k,P)=>g=P);return _=()=>g(),t.signal.addEventListener("abort",_),Promise.race([C({request:t,params:n.params,context:f}),x])};try{let C=n.route[e];if(n.route.lazy)if(C)m=(await Promise.all([b(C),Xg(n.route,a,o)]))[0];else if(await Xg(n.route,a,o),C=n.route[e],C)m=await b(C);else if(e==="action"){let g=new URL(t.url),x=g.pathname+g.search;throw An(405,{method:t.method,pathname:x,routeId:n.route.id})}else return{type:wt.data,data:void 0};else if(C)m=await b(C);else{let g=new URL(t.url),x=g.pathname+g.search;throw An(404,{pathname:x})}Ne(m!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(C){p=wt.error,m=C}finally{_&&t.signal.removeEventListener("abort",_)}if(f2(m)){let C=m.status;if(e2.has(C)){let k=m.headers.get("Location");if(Ne(k,"Redirects returned/thrown from loaders/actions must have a Location header"),!rw.test(k))k=Ah(new URL(t.url),r.slice(0,r.indexOf(n)+1),s,!0,k);else if(!u){let P=new URL(t.url),T=k.startsWith("//")?new URL(P.protocol+k):new URL(k),A=Us(T.pathname,s)!=null;T.origin===P.origin&&A&&(k=T.pathname+T.search+T.hash)}if(u)throw m.headers.set("Location",k),m;return{type:wt.redirect,status:C,location:k,revalidate:m.headers.get("X-Remix-Revalidate")!==null}}if(d)throw{type:p||wt.data,response:m};let g,x=m.headers.get("Content-Type");return x&&/\bapplication\/json\b/.test(x)?g=await m.json():g=await m.text(),p===wt.error?{type:p,error:new pm(C,m.statusText,g),headers:m.headers}:{type:wt.data,data:g,statusCode:m.status,headers:m.headers}}if(p===wt.error)return{type:p,error:m};if(d2(m)){var y,w;return{type:wt.deferred,deferredData:m,statusCode:(y=m.init)==null?void 0:y.status,headers:((w=m.init)==null?void 0:w.headers)&&new Headers(m.init.headers)}}return{type:wt.data,data:m}}function ja(e,t,n,r){let o=e.createURL(sw(t)).toString(),a={signal:n};if(r&&yr(r.formMethod)){let{formMethod:s,formEncType:u,formData:d}=r;a.method=s.toUpperCase(),a.body=u==="application/x-www-form-urlencoded"?aw(d):d}return new Request(o,a)}function aw(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function u2(e,t,n,r,o){let a={},s=null,u,d=!1,f={};return n.forEach((p,m)=>{let _=t[m].route.id;if(Ne(!Wi(p),"Cannot handle redirect results in processLoaderData"),os(p)){let b=Bi(e,_),y=p.error;r&&(y=Object.values(r)[0],r=void 0),s=s||{},s[b.route.id]==null&&(s[b.route.id]=y),a[_]=void 0,d||(d=!0,u=tw(p.error)?p.error.status:500),p.headers&&(f[_]=p.headers)}else Uo(p)?(o.set(_,p.deferredData),a[_]=p.deferredData.data):a[_]=p.data,p.statusCode!=null&&p.statusCode!==200&&!d&&(u=p.statusCode),p.headers&&(f[_]=p.headers)}),r&&(s=r,a[Object.keys(r)[0]]=void 0),{loaderData:a,errors:s,statusCode:u||200,loaderHeaders:f}}function ev(e,t,n,r,o,a,s,u){let{loaderData:d,errors:f}=u2(t,n,r,o,u);for(let p=0;p<a.length;p++){let{key:m,match:_,controller:b}=a[p];Ne(s!==void 0&&s[p]!==void 0,"Did not find corresponding fetcher result");let y=s[p];if(!(b&&b.signal.aborted))if(os(y)){let w=Bi(e.matches,_?.route.id);f&&f[w.route.id]||(f=He({},f,{[w.route.id]:y.error})),e.fetchers.delete(m)}else if(Wi(y))Ne(!1,"Unhandled fetcher revalidation redirect");else if(Uo(y))Ne(!1,"Unhandled fetcher deferred data");else{let w={state:"idle",data:y.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(m,w)}}return{loaderData:d,errors:f}}function tv(e,t,n,r){let o=He({},t);for(let a of n){let s=a.route.id;if(t.hasOwnProperty(s)?t[s]!==void 0&&(o[s]=t[s]):e[s]!==void 0&&a.route.loader&&(o[s]=e[s]),r&&r.hasOwnProperty(s))break}return o}function Bi(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function nv(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function An(e,t){let{pathname:n,routeId:r,method:o,type:a}=t===void 0?{}:t,s="Unknown Server Error",u="Unknown @remix-run/router error";return e===400?(s="Bad Request",o&&n&&r?u="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a==="defer-action"&&(u="defer() is not supported in actions")):e===403?(s="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):e===404?(s="Not Found",u='No route matches URL "'+n+'"'):e===405&&(s="Method Not Allowed",o&&n&&r?u="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(u='Invalid request method "'+o.toUpperCase()+'"')),new pm(e||500,s,new Error(u),!0)}function rv(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Wi(n))return n}}function sw(e){let t=typeof e=="string"?Ar(e):e;return Fs(He({},t,{hash:""}))}function c2(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Uo(e){return e.type===wt.deferred}function os(e){return e.type===wt.error}function Wi(e){return(e&&e.type)===wt.redirect}function d2(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function f2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function h2(e){return XE.has(e.toLowerCase())}function yr(e){return JE.has(e.toLowerCase())}async function ov(e,t,n,r,o,a){for(let s=0;s<n.length;s++){let u=n[s],d=t[s];if(!d)continue;let f=e.find(m=>m.route.id===d.route.id),p=f!=null&&!iw(f,d)&&(a&&a[d.route.id])!==void 0;if(Uo(u)&&(o||p)){let m=r[s];Ne(m,"Expected an AbortSignal for revalidating fetcher deferred result"),await lw(u,m,o).then(_=>{_&&(n[s]=_||n[s])})}}}async function lw(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:wt.data,data:e.deferredData.unwrappedData}}catch(o){return{type:wt.error,error:o}}return{type:wt.data,data:e.deferredData.data}}}function mm(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function iv(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function zh(e,t){let n=typeof t=="string"?Ar(t).search:t.search;if(e[e.length-1].route.index&&mm(n||""))return e[e.length-1];let r=hm(e);return r[r.length-1]}/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lu(){return Lu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Lu.apply(this,arguments)}const Fc=E.createContext(null),uw=E.createContext(null),Uc=E.createContext(null),$c=E.createContext(null),ca=E.createContext({outlet:null,matches:[],isDataRoute:!1}),cw=E.createContext(null);function Wc(){return E.useContext($c)!=null}function dw(){return Wc()||Ne(!1),E.useContext($c).location}function fw(e){E.useContext(Uc).static||E.useLayoutEffect(e)}function p2(){let{isDataRoute:e}=E.useContext(ca);return e?C2():m2()}function m2(){Wc()||Ne(!1);let e=E.useContext(Fc),{basename:t,navigator:n}=E.useContext(Uc),{matches:r}=E.useContext(ca),{pathname:o}=dw(),a=JSON.stringify(hm(r).map(d=>d.pathnameBase)),s=E.useRef(!1);return fw(()=>{s.current=!0}),E.useCallback(function(d,f){if(f===void 0&&(f={}),!s.current)return;if(typeof d=="number"){n.go(d);return}let p=ew(d,JSON.parse(a),o,f.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:oo([t,p.pathname])),(f.replace?n.replace:n.push)(p,f.state,f)},[t,n,a,o,e])}function _2(e,t,n){Wc()||Ne(!1);let{navigator:r}=E.useContext(Uc),{matches:o}=E.useContext(ca),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let d=dw(),f;if(t){var p;let w=typeof t=="string"?Ar(t):t;u==="/"||(p=w.pathname)!=null&&p.startsWith(u)||Ne(!1),f=w}else f=d;let m=f.pathname||"/",_=u==="/"?m:m.slice(u.length)||"/",b=Ii(e,{pathname:_}),y=x2(b&&b.map(w=>Object.assign({},w,{params:Object.assign({},s,w.params),pathname:oo([u,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?u:oo([u,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,n);return t&&y?E.createElement($c.Provider,{value:{location:Lu({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:yt.Pop}},y):y}function g2(){let e=P2(),t=tw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:o},n):null,a)}const v2=E.createElement(g2,null);class y2 extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?E.createElement(ca.Provider,{value:this.props.routeContext},E.createElement(cw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function b2(e){let{routeContext:t,match:n,children:r}=e,o=E.useContext(Fc);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(ca.Provider,{value:t},r)}function x2(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let a=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let u=a.findIndex(d=>d.route.id&&s?.[d.route.id]);u>=0||Ne(!1),a=a.slice(0,Math.min(a.length,u+1))}return a.reduceRight((u,d,f)=>{let p=d.route.id?s?.[d.route.id]:null,m=null;n&&(m=d.route.errorElement||v2);let _=t.concat(a.slice(0,f+1)),b=()=>{let y;return p?y=m:d.route.Component?y=E.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=u,E.createElement(b2,{match:d,routeContext:{outlet:u,matches:_,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?E.createElement(y2,{location:n.location,revalidation:n.revalidation,component:m,error:p,children:b(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):b()},null)}var Nh;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Nh||(Nh={}));var Cs;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Cs||(Cs={}));function w2(e){let t=E.useContext(Fc);return t||Ne(!1),t}function k2(e){let t=E.useContext(uw);return t||Ne(!1),t}function S2(e){let t=E.useContext(ca);return t||Ne(!1),t}function hw(e){let t=S2(),n=t.matches[t.matches.length-1];return n.route.id||Ne(!1),n.route.id}function P2(){var e;let t=E.useContext(cw),n=k2(Cs.UseRouteError),r=hw(Cs.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function C2(){let{router:e}=w2(Nh.UseNavigateStable),t=hw(Cs.UseNavigateStable),n=E.useRef(!1);return fw(()=>{n.current=!0}),E.useCallback(function(o,a){a===void 0&&(a={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Lu({fromRouteId:t},a)))},[e,t])}function E2(e){let{fallbackElement:t,router:n}=e,[r,o]=E.useState(n.state);E.useLayoutEffect(()=>n.subscribe(o),[n,o]);let a=E.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:d=>n.navigate(d),push:(d,f,p)=>n.navigate(d,{state:f,preventScrollReset:p?.preventScrollReset}),replace:(d,f,p)=>n.navigate(d,{replace:!0,state:f,preventScrollReset:p?.preventScrollReset})}),[n]),s=n.basename||"/",u=E.useMemo(()=>({router:n,navigator:a,static:!1,basename:s}),[n,a,s]);return E.createElement(E.Fragment,null,E.createElement(Fc.Provider,{value:u},E.createElement(uw.Provider,{value:r},E.createElement(L2,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:a},n.state.initialized?E.createElement(O2,{routes:n.routes,state:r}):t))),null)}function O2(e){let{routes:t,state:n}=e;return _2(t,void 0,n)}function L2(e){let{basename:t="/",children:n=null,location:r,navigationType:o=yt.Pop,navigator:a,static:s=!1}=e;Wc()&&Ne(!1);let u=t.replace(/^\/*/,"/"),d=E.useMemo(()=>({basename:u,navigator:a,static:s}),[u,a,s]);typeof r=="string"&&(r=Ar(r));let{pathname:f="/",search:p="",hash:m="",state:_=null,key:b="default"}=r,y=E.useMemo(()=>{let w=Us(f,u);return w==null?null:{location:{pathname:w,search:p,hash:m,state:_,key:b},navigationType:o}},[u,f,p,m,_,b,o]);return y==null?null:E.createElement(Uc.Provider,{value:d},E.createElement($c.Provider,{children:n,value:y}))}var av;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(av||(av={}));new Promise(()=>{});function T2(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:E.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:E.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tu(){return Tu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tu.apply(this,arguments)}function R2(e,t){return i2({basename:t?.basename,future:Tu({},t?.future,{v7_prependBasename:!0}),history:EE({window:t?.window}),hydrationData:t?.hydrationData||A2(),routes:e,mapRouteProperties:T2}).initialize()}function A2(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Tu({},t,{errors:z2(t.errors)})),t}function z2(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&o.__type==="RouteErrorResponse")n[r]=new pm(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){let a=new Error(o.message);a.stack="",n[r]=a}else n[r]=o;return n}var sv;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(sv||(sv={}));var lv;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(lv||(lv={}));function sn(e){return sn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},sn(e)}function N2(e,t){if(sn(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(sn(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function pw(e){var t=N2(e,"string");return sn(t)==="symbol"?t:String(t)}function Un(e,t,n){return t=pw(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I2(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];typeof n[0]=="string"&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var uv={};function Ih(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&uv[t[0]]||(typeof t[0]=="string"&&(uv[t[0]]=new Date),I2.apply(void 0,t))}var mw=function(t,n){return function(){if(t.isInitialized)n();else{var r=function o(){setTimeout(function(){t.off("initialized",o)},0),n()};t.on("initialized",r)}}};function cv(e,t,n){e.loadNamespaces(t,mw(e,n))}function dv(e,t,n,r){typeof n=="string"&&(n=[n]),n.forEach(function(o){e.options.ns.indexOf(o)<0&&e.options.ns.push(o)}),e.loadLanguages(t,mw(e,r))}function B2(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.languages[0],o=t.options?t.options.fallbackLng:!1,a=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;var s=function(d,f){var p=t.services.backendConnector.state["".concat(d,"|").concat(f)];return p===-1||p===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!s(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||s(r,e)&&(!o||s(a,e)))}function M2(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!t.languages||!t.languages.length)return Ih("i18n.languages were undefined or empty",t.languages),!0;var r=t.options.ignoreJSONStructure!==void 0;return r?t.hasLoadedNamespace(e,{lng:n.lng,precheck:function(a,s){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!s(a.isLanguageChangingTo,e))return!1}}):B2(e,t,n)}var D2=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,j2={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},F2=function(t){return j2[t]},U2=function(t){return t.replace(D2,F2)};function fv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function hv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fv(Object(n),!0).forEach(function(r){Un(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Bh={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:U2};function $2(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Bh=hv(hv({},Bh),e)}function W2(){return Bh}var _w;function H2(e){_w=e}function V2(){return _w}function $n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function pv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,pw(r.key),r)}}function Wn(e,t,n){return t&&pv(e.prototype,t),n&&pv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var Z2={type:"3rdParty",init:function(t){$2(t.options.react),H2(t)}},q2=E.createContext(),K2=function(){function e(){$n(this,e),this.usedNamespaces={}}return Wn(e,[{key:"addUsedNamespaces",value:function(n){var r=this;n.forEach(function(o){r.usedNamespaces[o]||(r.usedNamespaces[o]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function gw(e){if(Array.isArray(e))return e}function Q2(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,a,s,u=[],d=!0,f=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;d=!1}else for(;!(d=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);d=!0);}catch(p){f=!0,o=p}finally{try{if(!d&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw o}}return u}}function mv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function vw(e,t){if(e){if(typeof e=="string")return mv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return mv(e,t)}}function yw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G2(e,t){return gw(e)||Q2(e,t)||vw(e,t)||yw()}function _v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function rf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_v(Object(n),!0).forEach(function(r){Un(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_v(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var J2=function(t,n){var r=E.useRef();return E.useEffect(function(){r.current=n?r.current:t},[t,n]),r.current};function _m(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.i18n,r=E.useContext(q2)||{},o=r.i18n,a=r.defaultNS,s=n||o||V2();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new K2),!s){Ih("You will need to pass in an i18next instance by using initReactI18next");var u=function(W,B){return typeof B=="string"?B:B&&sn(B)==="object"&&typeof B.defaultValue=="string"?B.defaultValue:Array.isArray(W)?W[W.length-1]:W},d=[u,{},!1];return d.t=u,d.i18n={},d.ready=!1,d}s.options.react&&s.options.react.wait!==void 0&&Ih("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var f=rf(rf(rf({},W2()),s.options.react),t),p=f.useSuspense,m=f.keyPrefix,_=e||a||s.options&&s.options.defaultNS;_=typeof _=="string"?[_]:_||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(_);var b=(s.isInitialized||s.initializedStoreOnce)&&_.every(function(F){return M2(F,s,f)});function y(){return s.getFixedT(t.lng||null,f.nsMode==="fallback"?_:_[0],m)}var w=E.useState(y),C=G2(w,2),g=C[0],x=C[1],k=_.join();t.lng&&(k="".concat(t.lng).concat(k));var P=J2(k),T=E.useRef(!0);E.useEffect(function(){var F=f.bindI18n,W=f.bindI18nStore;T.current=!0,!b&&!p&&(t.lng?dv(s,t.lng,_,function(){T.current&&x(y)}):cv(s,_,function(){T.current&&x(y)})),b&&P&&P!==k&&T.current&&x(y);function B(){T.current&&x(y)}return F&&s&&s.on(F,B),W&&s&&s.store.on(W,B),function(){T.current=!1,F&&s&&F.split(" ").forEach(function(G){return s.off(G,B)}),W&&s&&W.split(" ").forEach(function(G){return s.store.off(G,B)})}},[s,k]);var A=E.useRef(!0);E.useEffect(function(){T.current&&!A.current&&x(y),A.current=!1},[s,m]);var I=[g,s,b];if(I.t=g,I.i18n=s,I.ready=b,b||!b&&!p)return I;throw new Promise(function(F){t.lng?dv(s,t.lng,_,function(){return F()}):cv(s,_,function(){return F()})})}function Ru(e,t){return Ru=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Ru(e,t)}function $s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ru(e,t)}var Ws=function(){function e(){this.listeners=[]}var t=e.prototype;return t.subscribe=function(r){var o=this,a=r||function(){};return this.listeners.push(a),this.onSubscribe(),function(){o.listeners=o.listeners.filter(function(s){return s!==a}),o.onUnsubscribe()}},t.hasListeners=function(){return this.listeners.length>0},t.onSubscribe=function(){},t.onUnsubscribe=function(){},e}(),Au=typeof window>"u";function Dt(){}function Y2(e,t){return typeof e=="function"?e(t):e}function Mh(e){return typeof e=="number"&&e>=0&&e!==1/0}function zu(e){return Array.isArray(e)?e:[e]}function bw(e,t){return Math.max(e+(t||0)-Date.now(),0)}function ql(e,t,n){return Hc(e)?typeof t=="function"?Ve({},n,{queryKey:e,queryFn:t}):Ve({},t,{queryKey:e}):e}function $r(e,t,n){return Hc(e)?[Ve({},t,{queryKey:e}),n]:[e||{},t]}function X2(e,t){if(e===!0&&t===!0||e==null&&t==null)return"all";if(e===!1&&t===!1)return"none";var n=e??!t;return n?"active":"inactive"}function gv(e,t){var n=e.active,r=e.exact,o=e.fetching,a=e.inactive,s=e.predicate,u=e.queryKey,d=e.stale;if(Hc(u)){if(r){if(t.queryHash!==gm(u,t.options))return!1}else if(!Nu(t.queryKey,u))return!1}var f=X2(n,a);if(f==="none")return!1;if(f!=="all"){var p=t.isActive();if(f==="active"&&!p||f==="inactive"&&p)return!1}return!(typeof d=="boolean"&&t.isStale()!==d||typeof o=="boolean"&&t.isFetching()!==o||s&&!s(t))}function vv(e,t){var n=e.exact,r=e.fetching,o=e.predicate,a=e.mutationKey;if(Hc(a)){if(!t.options.mutationKey)return!1;if(n){if($o(t.options.mutationKey)!==$o(a))return!1}else if(!Nu(t.options.mutationKey,a))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||o&&!o(t))}function gm(e,t){var n=t?.queryKeyHashFn||$o;return n(e)}function $o(e){var t=zu(e);return eO(t)}function eO(e){return JSON.stringify(e,function(t,n){return Dh(n)?Object.keys(n).sort().reduce(function(r,o){return r[o]=n[o],r},{}):n})}function Nu(e,t){return xw(zu(e),zu(t))}function xw(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(function(n){return!xw(e[n],t[n])}):!1}function Iu(e,t){if(e===t)return e;var n=Array.isArray(e)&&Array.isArray(t);if(n||Dh(e)&&Dh(t)){for(var r=n?e.length:Object.keys(e).length,o=n?t:Object.keys(t),a=o.length,s=n?[]:{},u=0,d=0;d<a;d++){var f=n?d:o[d];s[f]=Iu(e[f],t[f]),s[f]===e[f]&&u++}return r===a&&u===r?e:s}return t}function tO(e,t){if(e&&!t||t&&!e)return!1;for(var n in e)if(e[n]!==t[n])return!1;return!0}function Dh(e){if(!yv(e))return!1;var t=e.constructor;if(typeof t>"u")return!0;var n=t.prototype;return!(!yv(n)||!n.hasOwnProperty("isPrototypeOf"))}function yv(e){return Object.prototype.toString.call(e)==="[object Object]"}function Hc(e){return typeof e=="string"||Array.isArray(e)}function nO(e){return new Promise(function(t){setTimeout(t,e)})}function bv(e){Promise.resolve().then(e).catch(function(t){return setTimeout(function(){throw t})})}function ww(){if(typeof AbortController=="function")return new AbortController}var rO=function(e){$s(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(o){var a;if(!Au&&((a=window)!=null&&a.addEventListener)){var s=function(){return o()};return window.addEventListener("visibilitychange",s,!1),window.addEventListener("focus",s,!1),function(){window.removeEventListener("visibilitychange",s),window.removeEventListener("focus",s)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var o;(o=this.cleanup)==null||o.call(this),this.cleanup=void 0}},n.setEventListener=function(o){var a,s=this;this.setup=o,(a=this.cleanup)==null||a.call(this),this.cleanup=o(function(u){typeof u=="boolean"?s.setFocused(u):s.onFocus()})},n.setFocused=function(o){this.focused=o,o&&this.onFocus()},n.onFocus=function(){this.listeners.forEach(function(o){o()})},n.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},t}(Ws),is=new rO,oO=function(e){$s(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(o){var a;if(!Au&&((a=window)!=null&&a.addEventListener)){var s=function(){return o()};return window.addEventListener("online",s,!1),window.addEventListener("offline",s,!1),function(){window.removeEventListener("online",s),window.removeEventListener("offline",s)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var o;(o=this.cleanup)==null||o.call(this),this.cleanup=void 0}},n.setEventListener=function(o){var a,s=this;this.setup=o,(a=this.cleanup)==null||a.call(this),this.cleanup=o(function(u){typeof u=="boolean"?s.setOnline(u):s.onOnline()})},n.setOnline=function(o){this.online=o,o&&this.onOnline()},n.onOnline=function(){this.listeners.forEach(function(o){o()})},n.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},t}(Ws),Kl=new oO;function iO(e){return Math.min(1e3*Math.pow(2,e),3e4)}function Bu(e){return typeof e?.cancel=="function"}var kw=function(t){this.revert=t?.revert,this.silent=t?.silent};function Ql(e){return e instanceof kw}var Sw=function(t){var n=this,r=!1,o,a,s,u;this.abort=t.abort,this.cancel=function(_){return o?.(_)},this.cancelRetry=function(){r=!0},this.continueRetry=function(){r=!1},this.continue=function(){return a?.()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(_,b){s=_,u=b});var d=function(b){n.isResolved||(n.isResolved=!0,t.onSuccess==null||t.onSuccess(b),a?.(),s(b))},f=function(b){n.isResolved||(n.isResolved=!0,t.onError==null||t.onError(b),a?.(),u(b))},p=function(){return new Promise(function(b){a=b,n.isPaused=!0,t.onPause==null||t.onPause()}).then(function(){a=void 0,n.isPaused=!1,t.onContinue==null||t.onContinue()})},m=function _(){if(!n.isResolved){var b;try{b=t.fn()}catch(y){b=Promise.reject(y)}o=function(w){if(!n.isResolved&&(f(new kw(w)),n.abort==null||n.abort(),Bu(b)))try{b.cancel()}catch{}},n.isTransportCancelable=Bu(b),Promise.resolve(b).then(d).catch(function(y){var w,C;if(!n.isResolved){var g=(w=t.retry)!=null?w:3,x=(C=t.retryDelay)!=null?C:iO,k=typeof x=="function"?x(n.failureCount,y):x,P=g===!0||typeof g=="number"&&n.failureCount<g||typeof g=="function"&&g(n.failureCount,y);if(r||!P){f(y);return}n.failureCount++,t.onFail==null||t.onFail(n.failureCount,y),nO(k).then(function(){if(!is.isFocused()||!Kl.isOnline())return p()}).then(function(){r?f(y):_()})}})}};m()},aO=function(){function e(){this.queue=[],this.transactions=0,this.notifyFn=function(n){n()},this.batchNotifyFn=function(n){n()}}var t=e.prototype;return t.batch=function(r){var o;this.transactions++;try{o=r()}finally{this.transactions--,this.transactions||this.flush()}return o},t.schedule=function(r){var o=this;this.transactions?this.queue.push(r):bv(function(){o.notifyFn(r)})},t.batchCalls=function(r){var o=this;return function(){for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];o.schedule(function(){r.apply(void 0,s)})}},t.flush=function(){var r=this,o=this.queue;this.queue=[],o.length&&bv(function(){r.batchNotifyFn(function(){o.forEach(function(a){r.notifyFn(a)})})})},t.setNotifyFunction=function(r){this.notifyFn=r},t.setBatchNotifyFunction=function(r){this.batchNotifyFn=r},e}(),dt=new aO,Pw=console;function Mu(){return Pw}function sO(e){Pw=e}var lO=function(){function e(n){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.cache=n.cache,this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.initialState=n.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=n.meta,this.scheduleGc()}var t=e.prototype;return t.setOptions=function(r){var o;this.options=Ve({},this.defaultOptions,r),this.meta=r?.meta,this.cacheTime=Math.max(this.cacheTime||0,(o=this.options.cacheTime)!=null?o:5*60*1e3)},t.setDefaultOptions=function(r){this.defaultOptions=r},t.scheduleGc=function(){var r=this;this.clearGcTimeout(),Mh(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){r.optionalRemove()},this.cacheTime))},t.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},t.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},t.setData=function(r,o){var a,s,u=this.state.data,d=Y2(r,u);return(a=(s=this.options).isDataEqual)!=null&&a.call(s,u,d)?d=u:this.options.structuralSharing!==!1&&(d=Iu(u,d)),this.dispatch({data:d,type:"success",dataUpdatedAt:o?.updatedAt}),d},t.setState=function(r,o){this.dispatch({type:"setState",state:r,setStateOptions:o})},t.cancel=function(r){var o,a=this.promise;return(o=this.retryer)==null||o.cancel(r),a?a.then(Dt).catch(Dt):Promise.resolve()},t.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},t.reset=function(){this.destroy(),this.setState(this.initialState)},t.isActive=function(){return this.observers.some(function(r){return r.options.enabled!==!1})},t.isFetching=function(){return this.state.isFetching},t.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(r){return r.getCurrentResult().isStale})},t.isStaleByTime=function(r){return r===void 0&&(r=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!bw(this.state.dataUpdatedAt,r)},t.onFocus=function(){var r,o=this.observers.find(function(a){return a.shouldFetchOnWindowFocus()});o&&o.refetch(),(r=this.retryer)==null||r.continue()},t.onOnline=function(){var r,o=this.observers.find(function(a){return a.shouldFetchOnReconnect()});o&&o.refetch(),(r=this.retryer)==null||r.continue()},t.addObserver=function(r){this.observers.indexOf(r)===-1&&(this.observers.push(r),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:r}))},t.removeObserver=function(r){this.observers.indexOf(r)!==-1&&(this.observers=this.observers.filter(function(o){return o!==r}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:r}))},t.getObserversCount=function(){return this.observers.length},t.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},t.fetch=function(r,o){var a=this,s,u,d;if(this.state.isFetching){if(this.state.dataUpdatedAt&&o?.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var f;return(f=this.retryer)==null||f.continueRetry(),this.promise}}if(r&&this.setOptions(r),!this.options.queryFn){var p=this.observers.find(function(x){return x.options.queryFn});p&&this.setOptions(p.options)}var m=zu(this.queryKey),_=ww(),b={queryKey:m,pageParam:void 0,meta:this.meta};Object.defineProperty(b,"signal",{enumerable:!0,get:function(){if(_)return a.abortSignalConsumed=!0,_.signal}});var y=function(){return a.options.queryFn?(a.abortSignalConsumed=!1,a.options.queryFn(b)):Promise.reject("Missing queryFn")},w={fetchOptions:o,options:this.options,queryKey:m,state:this.state,fetchFn:y,meta:this.meta};if((s=this.options.behavior)!=null&&s.onFetch){var C;(C=this.options.behavior)==null||C.onFetch(w)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((u=w.fetchOptions)==null?void 0:u.meta)){var g;this.dispatch({type:"fetch",meta:(g=w.fetchOptions)==null?void 0:g.meta})}return this.retryer=new Sw({fn:w.fetchFn,abort:_==null||(d=_.abort)==null?void 0:d.bind(_),onSuccess:function(k){a.setData(k),a.cache.config.onSuccess==null||a.cache.config.onSuccess(k,a),a.cacheTime===0&&a.optionalRemove()},onError:function(k){Ql(k)&&k.silent||a.dispatch({type:"error",error:k}),Ql(k)||(a.cache.config.onError==null||a.cache.config.onError(k,a),Mu().error(k)),a.cacheTime===0&&a.optionalRemove()},onFail:function(){a.dispatch({type:"failed"})},onPause:function(){a.dispatch({type:"pause"})},onContinue:function(){a.dispatch({type:"continue"})},retry:w.options.retry,retryDelay:w.options.retryDelay}),this.promise=this.retryer.promise,this.promise},t.dispatch=function(r){var o=this;this.state=this.reducer(this.state,r),dt.batch(function(){o.observers.forEach(function(a){a.onQueryUpdate(r)}),o.cache.notify({query:o,type:"queryUpdated",action:r})})},t.getDefaultState=function(r){var o=typeof r.initialData=="function"?r.initialData():r.initialData,a=typeof r.initialData<"u",s=a?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0,u=typeof o<"u";return{data:o,dataUpdateCount:0,dataUpdatedAt:u?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:u?"success":"idle"}},t.reducer=function(r,o){var a,s;switch(o.type){case"failed":return Ve({},r,{fetchFailureCount:r.fetchFailureCount+1});case"pause":return Ve({},r,{isPaused:!0});case"continue":return Ve({},r,{isPaused:!1});case"fetch":return Ve({},r,{fetchFailureCount:0,fetchMeta:(a=o.meta)!=null?a:null,isFetching:!0,isPaused:!1},!r.dataUpdatedAt&&{error:null,status:"loading"});case"success":return Ve({},r,{data:o.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(s=o.dataUpdatedAt)!=null?s:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var u=o.error;return Ql(u)&&u.revert&&this.revertState?Ve({},this.revertState):Ve({},r,{error:u,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return Ve({},r,{isInvalidated:!0});case"setState":return Ve({},r,o.state);default:return r}},e}(),uO=function(e){$s(t,e);function t(r){var o;return o=e.call(this)||this,o.config=r||{},o.queries=[],o.queriesMap={},o}var n=t.prototype;return n.build=function(o,a,s){var u,d=a.queryKey,f=(u=a.queryHash)!=null?u:gm(d,a),p=this.get(f);return p||(p=new lO({cache:this,queryKey:d,queryHash:f,options:o.defaultQueryOptions(a),state:s,defaultOptions:o.getQueryDefaults(d),meta:a.meta}),this.add(p)),p},n.add=function(o){this.queriesMap[o.queryHash]||(this.queriesMap[o.queryHash]=o,this.queries.push(o),this.notify({type:"queryAdded",query:o}))},n.remove=function(o){var a=this.queriesMap[o.queryHash];a&&(o.destroy(),this.queries=this.queries.filter(function(s){return s!==o}),a===o&&delete this.queriesMap[o.queryHash],this.notify({type:"queryRemoved",query:o}))},n.clear=function(){var o=this;dt.batch(function(){o.queries.forEach(function(a){o.remove(a)})})},n.get=function(o){return this.queriesMap[o]},n.getAll=function(){return this.queries},n.find=function(o,a){var s=$r(o,a),u=s[0];return typeof u.exact>"u"&&(u.exact=!0),this.queries.find(function(d){return gv(u,d)})},n.findAll=function(o,a){var s=$r(o,a),u=s[0];return Object.keys(u).length>0?this.queries.filter(function(d){return gv(u,d)}):this.queries},n.notify=function(o){var a=this;dt.batch(function(){a.listeners.forEach(function(s){s(o)})})},n.onFocus=function(){var o=this;dt.batch(function(){o.queries.forEach(function(a){a.onFocus()})})},n.onOnline=function(){var o=this;dt.batch(function(){o.queries.forEach(function(a){a.onOnline()})})},t}(Ws),cO=function(){function e(n){this.options=Ve({},n.defaultOptions,n.options),this.mutationId=n.mutationId,this.mutationCache=n.mutationCache,this.observers=[],this.state=n.state||dO(),this.meta=n.meta}var t=e.prototype;return t.setState=function(r){this.dispatch({type:"setState",state:r})},t.addObserver=function(r){this.observers.indexOf(r)===-1&&this.observers.push(r)},t.removeObserver=function(r){this.observers=this.observers.filter(function(o){return o!==r})},t.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(Dt).catch(Dt)):Promise.resolve()},t.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},t.execute=function(){var r=this,o,a=this.state.status==="loading",s=Promise.resolve();return a||(this.dispatch({type:"loading",variables:this.options.variables}),s=s.then(function(){r.mutationCache.config.onMutate==null||r.mutationCache.config.onMutate(r.state.variables,r)}).then(function(){return r.options.onMutate==null?void 0:r.options.onMutate(r.state.variables)}).then(function(u){u!==r.state.context&&r.dispatch({type:"loading",context:u,variables:r.state.variables})})),s.then(function(){return r.executeMutation()}).then(function(u){o=u,r.mutationCache.config.onSuccess==null||r.mutationCache.config.onSuccess(o,r.state.variables,r.state.context,r)}).then(function(){return r.options.onSuccess==null?void 0:r.options.onSuccess(o,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(o,null,r.state.variables,r.state.context)}).then(function(){return r.dispatch({type:"success",data:o}),o}).catch(function(u){return r.mutationCache.config.onError==null||r.mutationCache.config.onError(u,r.state.variables,r.state.context,r),Mu().error(u),Promise.resolve().then(function(){return r.options.onError==null?void 0:r.options.onError(u,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(void 0,u,r.state.variables,r.state.context)}).then(function(){throw r.dispatch({type:"error",error:u}),u})})},t.executeMutation=function(){var r=this,o;return this.retryer=new Sw({fn:function(){return r.options.mutationFn?r.options.mutationFn(r.state.variables):Promise.reject("No mutationFn found")},onFail:function(){r.dispatch({type:"failed"})},onPause:function(){r.dispatch({type:"pause"})},onContinue:function(){r.dispatch({type:"continue"})},retry:(o=this.options.retry)!=null?o:0,retryDelay:this.options.retryDelay}),this.retryer.promise},t.dispatch=function(r){var o=this;this.state=fO(this.state,r),dt.batch(function(){o.observers.forEach(function(a){a.onMutationUpdate(r)}),o.mutationCache.notify(o)})},e}();function dO(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function fO(e,t){switch(t.type){case"failed":return Ve({},e,{failureCount:e.failureCount+1});case"pause":return Ve({},e,{isPaused:!0});case"continue":return Ve({},e,{isPaused:!1});case"loading":return Ve({},e,{context:t.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:t.variables});case"success":return Ve({},e,{data:t.data,error:null,status:"success",isPaused:!1});case"error":return Ve({},e,{data:void 0,error:t.error,failureCount:e.failureCount+1,isPaused:!1,status:"error"});case"setState":return Ve({},e,t.state);default:return e}}var hO=function(e){$s(t,e);function t(r){var o;return o=e.call(this)||this,o.config=r||{},o.mutations=[],o.mutationId=0,o}var n=t.prototype;return n.build=function(o,a,s){var u=new cO({mutationCache:this,mutationId:++this.mutationId,options:o.defaultMutationOptions(a),state:s,defaultOptions:a.mutationKey?o.getMutationDefaults(a.mutationKey):void 0,meta:a.meta});return this.add(u),u},n.add=function(o){this.mutations.push(o),this.notify(o)},n.remove=function(o){this.mutations=this.mutations.filter(function(a){return a!==o}),o.cancel(),this.notify(o)},n.clear=function(){var o=this;dt.batch(function(){o.mutations.forEach(function(a){o.remove(a)})})},n.getAll=function(){return this.mutations},n.find=function(o){return typeof o.exact>"u"&&(o.exact=!0),this.mutations.find(function(a){return vv(o,a)})},n.findAll=function(o){return this.mutations.filter(function(a){return vv(o,a)})},n.notify=function(o){var a=this;dt.batch(function(){a.listeners.forEach(function(s){s(o)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var o=this.mutations.filter(function(a){return a.state.isPaused});return dt.batch(function(){return o.reduce(function(a,s){return a.then(function(){return s.continue().catch(Dt)})},Promise.resolve())})},t}(Ws);function pO(){return{onFetch:function(t){t.fetchFn=function(){var n,r,o,a,s,u,d=(n=t.fetchOptions)==null||(r=n.meta)==null?void 0:r.refetchPage,f=(o=t.fetchOptions)==null||(a=o.meta)==null?void 0:a.fetchMore,p=f?.pageParam,m=f?.direction==="forward",_=f?.direction==="backward",b=((s=t.state.data)==null?void 0:s.pages)||[],y=((u=t.state.data)==null?void 0:u.pageParams)||[],w=ww(),C=w?.signal,g=y,x=!1,k=t.options.queryFn||function(){return Promise.reject("Missing queryFn")},P=function(V,le,X,D){return g=D?[le].concat(g):[].concat(g,[le]),D?[X].concat(V):[].concat(V,[X])},T=function(V,le,X,D){if(x)return Promise.reject("Cancelled");if(typeof X>"u"&&!le&&V.length)return Promise.resolve(V);var z={queryKey:t.queryKey,signal:C,pageParam:X,meta:t.meta},oe=k(z),q=Promise.resolve(oe).then(function(N){return P(V,X,N,D)});if(Bu(oe)){var O=q;O.cancel=oe.cancel}return q},A;if(!b.length)A=T([]);else if(m){var I=typeof p<"u",F=I?p:xv(t.options,b);A=T(b,I,F)}else if(_){var W=typeof p<"u",B=W?p:mO(t.options,b);A=T(b,W,B,!0)}else(function(){g=[];var ee=typeof t.options.getNextPageParam>"u",V=d&&b[0]?d(b[0],0,b):!0;A=V?T([],ee,y[0]):Promise.resolve(P([],y[0],b[0]));for(var le=function(z){A=A.then(function(oe){var q=d&&b[z]?d(b[z],z,b):!0;if(q){var O=ee?y[z]:xv(t.options,oe);return T(oe,ee,O)}return Promise.resolve(P(oe,y[z],b[z]))})},X=1;X<b.length;X++)le(X)})();var G=A.then(function(ee){return{pages:ee,pageParams:g}}),J=G;return J.cancel=function(){x=!0,w?.abort(),Bu(A)&&A.cancel()},G}}}}function xv(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function mO(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}var _O=function(){function e(n){n===void 0&&(n={}),this.queryCache=n.queryCache||new uO,this.mutationCache=n.mutationCache||new hO,this.defaultOptions=n.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var t=e.prototype;return t.mount=function(){var r=this;this.unsubscribeFocus=is.subscribe(function(){is.isFocused()&&Kl.isOnline()&&(r.mutationCache.onFocus(),r.queryCache.onFocus())}),this.unsubscribeOnline=Kl.subscribe(function(){is.isFocused()&&Kl.isOnline()&&(r.mutationCache.onOnline(),r.queryCache.onOnline())})},t.unmount=function(){var r,o;(r=this.unsubscribeFocus)==null||r.call(this),(o=this.unsubscribeOnline)==null||o.call(this)},t.isFetching=function(r,o){var a=$r(r,o),s=a[0];return s.fetching=!0,this.queryCache.findAll(s).length},t.isMutating=function(r){return this.mutationCache.findAll(Ve({},r,{fetching:!0})).length},t.getQueryData=function(r,o){var a;return(a=this.queryCache.find(r,o))==null?void 0:a.state.data},t.getQueriesData=function(r){return this.getQueryCache().findAll(r).map(function(o){var a=o.queryKey,s=o.state,u=s.data;return[a,u]})},t.setQueryData=function(r,o,a){var s=ql(r),u=this.defaultQueryOptions(s);return this.queryCache.build(this,u).setData(o,a)},t.setQueriesData=function(r,o,a){var s=this;return dt.batch(function(){return s.getQueryCache().findAll(r).map(function(u){var d=u.queryKey;return[d,s.setQueryData(d,o,a)]})})},t.getQueryState=function(r,o){var a;return(a=this.queryCache.find(r,o))==null?void 0:a.state},t.removeQueries=function(r,o){var a=$r(r,o),s=a[0],u=this.queryCache;dt.batch(function(){u.findAll(s).forEach(function(d){u.remove(d)})})},t.resetQueries=function(r,o,a){var s=this,u=$r(r,o,a),d=u[0],f=u[1],p=this.queryCache,m=Ve({},d,{active:!0});return dt.batch(function(){return p.findAll(d).forEach(function(_){_.reset()}),s.refetchQueries(m,f)})},t.cancelQueries=function(r,o,a){var s=this,u=$r(r,o,a),d=u[0],f=u[1],p=f===void 0?{}:f;typeof p.revert>"u"&&(p.revert=!0);var m=dt.batch(function(){return s.queryCache.findAll(d).map(function(_){return _.cancel(p)})});return Promise.all(m).then(Dt).catch(Dt)},t.invalidateQueries=function(r,o,a){var s,u,d,f=this,p=$r(r,o,a),m=p[0],_=p[1],b=Ve({},m,{active:(s=(u=m.refetchActive)!=null?u:m.active)!=null?s:!0,inactive:(d=m.refetchInactive)!=null?d:!1});return dt.batch(function(){return f.queryCache.findAll(m).forEach(function(y){y.invalidate()}),f.refetchQueries(b,_)})},t.refetchQueries=function(r,o,a){var s=this,u=$r(r,o,a),d=u[0],f=u[1],p=dt.batch(function(){return s.queryCache.findAll(d).map(function(_){return _.fetch(void 0,Ve({},f,{meta:{refetchPage:d?.refetchPage}}))})}),m=Promise.all(p).then(Dt);return f?.throwOnError||(m=m.catch(Dt)),m},t.fetchQuery=function(r,o,a){var s=ql(r,o,a),u=this.defaultQueryOptions(s);typeof u.retry>"u"&&(u.retry=!1);var d=this.queryCache.build(this,u);return d.isStaleByTime(u.staleTime)?d.fetch(u):Promise.resolve(d.state.data)},t.prefetchQuery=function(r,o,a){return this.fetchQuery(r,o,a).then(Dt).catch(Dt)},t.fetchInfiniteQuery=function(r,o,a){var s=ql(r,o,a);return s.behavior=pO(),this.fetchQuery(s)},t.prefetchInfiniteQuery=function(r,o,a){return this.fetchInfiniteQuery(r,o,a).then(Dt).catch(Dt)},t.cancelMutations=function(){var r=this,o=dt.batch(function(){return r.mutationCache.getAll().map(function(a){return a.cancel()})});return Promise.all(o).then(Dt).catch(Dt)},t.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},t.executeMutation=function(r){return this.mutationCache.build(this,r).execute()},t.getQueryCache=function(){return this.queryCache},t.getMutationCache=function(){return this.mutationCache},t.getDefaultOptions=function(){return this.defaultOptions},t.setDefaultOptions=function(r){this.defaultOptions=r},t.setQueryDefaults=function(r,o){var a=this.queryDefaults.find(function(s){return $o(r)===$o(s.queryKey)});a?a.defaultOptions=o:this.queryDefaults.push({queryKey:r,defaultOptions:o})},t.getQueryDefaults=function(r){var o;return r?(o=this.queryDefaults.find(function(a){return Nu(r,a.queryKey)}))==null?void 0:o.defaultOptions:void 0},t.setMutationDefaults=function(r,o){var a=this.mutationDefaults.find(function(s){return $o(r)===$o(s.mutationKey)});a?a.defaultOptions=o:this.mutationDefaults.push({mutationKey:r,defaultOptions:o})},t.getMutationDefaults=function(r){var o;return r?(o=this.mutationDefaults.find(function(a){return Nu(r,a.mutationKey)}))==null?void 0:o.defaultOptions:void 0},t.defaultQueryOptions=function(r){if(r?._defaulted)return r;var o=Ve({},this.defaultOptions.queries,this.getQueryDefaults(r?.queryKey),r,{_defaulted:!0});return!o.queryHash&&o.queryKey&&(o.queryHash=gm(o.queryKey,o)),o},t.defaultQueryObserverOptions=function(r){return this.defaultQueryOptions(r)},t.defaultMutationOptions=function(r){return r?._defaulted?r:Ve({},this.defaultOptions.mutations,this.getMutationDefaults(r?.mutationKey),r,{_defaulted:!0})},t.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},e}(),gO=function(e){$s(t,e);function t(r,o){var a;return a=e.call(this)||this,a.client=r,a.options=o,a.trackedProps=[],a.selectError=null,a.bindMethods(),a.setOptions(o),a}var n=t.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),wv(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return jh(this.currentQuery,this.options,this.options.refetchOnReconnect)},n.shouldFetchOnWindowFocus=function(){return jh(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(o,a){var s=this.options,u=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(o),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.updateQuery();var d=this.hasListeners();d&&kv(this.currentQuery,u,this.options,s)&&this.executeFetch(),this.updateResult(a),d&&(this.currentQuery!==u||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.updateStaleTimeout();var f=this.computeRefetchInterval();d&&(this.currentQuery!==u||this.options.enabled!==s.enabled||f!==this.currentRefetchInterval)&&this.updateRefetchInterval(f)},n.getOptimisticResult=function(o){var a=this.client.defaultQueryObserverOptions(o),s=this.client.getQueryCache().build(this.client,a);return this.createResult(s,a)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(o,a){var s=this,u={},d=function(p){s.trackedProps.includes(p)||s.trackedProps.push(p)};return Object.keys(o).forEach(function(f){Object.defineProperty(u,f,{configurable:!1,enumerable:!0,get:function(){return d(f),o[f]}})}),(a.useErrorBoundary||a.suspense)&&d("error"),u},n.getNextResult=function(o){var a=this;return new Promise(function(s,u){var d=a.subscribe(function(f){f.isFetching||(d(),f.isError&&o?.throwOnError?u(f.error):s(f))})})},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(o){return this.fetch(Ve({},o,{meta:{refetchPage:o?.refetchPage}}))},n.fetchOptimistic=function(o){var a=this,s=this.client.defaultQueryObserverOptions(o),u=this.client.getQueryCache().build(this.client,s);return u.fetch().then(function(){return a.createResult(u,s)})},n.fetch=function(o){var a=this;return this.executeFetch(o).then(function(){return a.updateResult(),a.currentResult})},n.executeFetch=function(o){this.updateQuery();var a=this.currentQuery.fetch(this.options,o);return o?.throwOnError||(a=a.catch(Dt)),a},n.updateStaleTimeout=function(){var o=this;if(this.clearStaleTimeout(),!(Au||this.currentResult.isStale||!Mh(this.options.staleTime))){var a=bw(this.currentResult.dataUpdatedAt,this.options.staleTime),s=a+1;this.staleTimeoutId=setTimeout(function(){o.currentResult.isStale||o.updateResult()},s)}},n.computeRefetchInterval=function(){var o;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(o=this.options.refetchInterval)!=null?o:!1},n.updateRefetchInterval=function(o){var a=this;this.clearRefetchInterval(),this.currentRefetchInterval=o,!(Au||this.options.enabled===!1||!Mh(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(a.options.refetchIntervalInBackground||is.isFocused())&&a.executeFetch()},this.currentRefetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},n.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},n.createResult=function(o,a){var s=this.currentQuery,u=this.options,d=this.currentResult,f=this.currentResultState,p=this.currentResultOptions,m=o!==s,_=m?o.state:this.currentQueryInitialState,b=m?this.currentResult:this.previousQueryResult,y=o.state,w=y.dataUpdatedAt,C=y.error,g=y.errorUpdatedAt,x=y.isFetching,k=y.status,P=!1,T=!1,A;if(a.optimisticResults){var I=this.hasListeners(),F=!I&&wv(o,a),W=I&&kv(o,s,a,u);(F||W)&&(x=!0,w||(k="loading"))}if(a.keepPreviousData&&!y.dataUpdateCount&&b?.isSuccess&&k!=="error")A=b.data,w=b.dataUpdatedAt,k=b.status,P=!0;else if(a.select&&typeof y.data<"u")if(d&&y.data===f?.data&&a.select===this.selectFn)A=this.selectResult;else try{this.selectFn=a.select,A=a.select(y.data),a.structuralSharing!==!1&&(A=Iu(d?.data,A)),this.selectResult=A,this.selectError=null}catch(J){Mu().error(J),this.selectError=J}else A=y.data;if(typeof a.placeholderData<"u"&&typeof A>"u"&&(k==="loading"||k==="idle")){var B;if(d?.isPlaceholderData&&a.placeholderData===p?.placeholderData)B=d.data;else if(B=typeof a.placeholderData=="function"?a.placeholderData():a.placeholderData,a.select&&typeof B<"u")try{B=a.select(B),a.structuralSharing!==!1&&(B=Iu(d?.data,B)),this.selectError=null}catch(J){Mu().error(J),this.selectError=J}typeof B<"u"&&(k="success",A=B,T=!0)}this.selectError&&(C=this.selectError,A=this.selectResult,g=Date.now(),k="error");var G={status:k,isLoading:k==="loading",isSuccess:k==="success",isError:k==="error",isIdle:k==="idle",data:A,dataUpdatedAt:w,error:C,errorUpdatedAt:g,failureCount:y.fetchFailureCount,errorUpdateCount:y.errorUpdateCount,isFetched:y.dataUpdateCount>0||y.errorUpdateCount>0,isFetchedAfterMount:y.dataUpdateCount>_.dataUpdateCount||y.errorUpdateCount>_.errorUpdateCount,isFetching:x,isRefetching:x&&k!=="loading",isLoadingError:k==="error"&&y.dataUpdatedAt===0,isPlaceholderData:T,isPreviousData:P,isRefetchError:k==="error"&&y.dataUpdatedAt!==0,isStale:vm(o,a),refetch:this.refetch,remove:this.remove};return G},n.shouldNotifyListeners=function(o,a){if(!a)return!0;var s=this.options,u=s.notifyOnChangeProps,d=s.notifyOnChangePropsExclusions;if(!u&&!d||u==="tracked"&&!this.trackedProps.length)return!0;var f=u==="tracked"?this.trackedProps:u;return Object.keys(o).some(function(p){var m=p,_=o[m]!==a[m],b=f?.some(function(w){return w===p}),y=d?.some(function(w){return w===p});return _&&!y&&(!f||b)})},n.updateResult=function(o){var a=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!tO(this.currentResult,a)){var s={cache:!0};o?.listeners!==!1&&this.shouldNotifyListeners(this.currentResult,a)&&(s.listeners=!0),this.notify(Ve({},s,o))}},n.updateQuery=function(){var o=this.client.getQueryCache().build(this.client,this.options);if(o!==this.currentQuery){var a=this.currentQuery;this.currentQuery=o,this.currentQueryInitialState=o.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(a?.removeObserver(this),o.addObserver(this))}},n.onQueryUpdate=function(o){var a={};o.type==="success"?a.onSuccess=!0:o.type==="error"&&!Ql(o.error)&&(a.onError=!0),this.updateResult(a),this.hasListeners()&&this.updateTimers()},n.notify=function(o){var a=this;dt.batch(function(){o.onSuccess?(a.options.onSuccess==null||a.options.onSuccess(a.currentResult.data),a.options.onSettled==null||a.options.onSettled(a.currentResult.data,null)):o.onError&&(a.options.onError==null||a.options.onError(a.currentResult.error),a.options.onSettled==null||a.options.onSettled(void 0,a.currentResult.error)),o.listeners&&a.listeners.forEach(function(s){s(a.currentResult)}),o.cache&&a.client.getQueryCache().notify({query:a.currentQuery,type:"observerResultsUpdated"})})},t}(Ws);function vO(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function wv(e,t){return vO(e,t)||e.state.dataUpdatedAt>0&&jh(e,t,t.refetchOnMount)}function jh(e,t,n){if(t.enabled!==!1){var r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&vm(e,t)}return!1}function kv(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&vm(e,n)}function vm(e,t){return e.isStaleByTime(t.staleTime)}var yO=NC.unstable_batchedUpdates;dt.setBatchNotifyFunction(yO);var bO=console;sO(bO);var Sv=U.createContext(void 0),Cw=U.createContext(!1);function Ew(e){return e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Sv),window.ReactQueryClientContext):Sv}var xO=function(){var t=U.useContext(Ew(U.useContext(Cw)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},wO=function(t){var n=t.client,r=t.contextSharing,o=r===void 0?!1:r,a=t.children;U.useEffect(function(){return n.mount(),function(){n.unmount()}},[n]);var s=Ew(o);return U.createElement(Cw.Provider,{value:o},U.createElement(s.Provider,{value:n},a))};function kO(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var SO=U.createContext(kO()),PO=function(){return U.useContext(SO)};function CO(e,t,n){return typeof t=="function"?t.apply(void 0,n):typeof t=="boolean"?t:!!e}function EO(e,t){var n=U.useRef(!1),r=U.useState(0),o=r[1],a=xO(),s=PO(),u=a.defaultQueryObserverOptions(e);u.optimisticResults=!0,u.onError&&(u.onError=dt.batchCalls(u.onError)),u.onSuccess&&(u.onSuccess=dt.batchCalls(u.onSuccess)),u.onSettled&&(u.onSettled=dt.batchCalls(u.onSettled)),u.suspense&&(typeof u.staleTime!="number"&&(u.staleTime=1e3),u.cacheTime===0&&(u.cacheTime=1)),(u.suspense||u.useErrorBoundary)&&(s.isReset()||(u.retryOnMount=!1));var d=U.useState(function(){return new t(a,u)}),f=d[0],p=f.getOptimisticResult(u);if(U.useEffect(function(){n.current=!0,s.clearReset();var m=f.subscribe(dt.batchCalls(function(){n.current&&o(function(_){return _+1})}));return f.updateResult(),function(){n.current=!1,m()}},[s,f]),U.useEffect(function(){f.setOptions(u,{listeners:!1})},[u,f]),u.suspense&&p.isLoading)throw f.fetchOptimistic(u).then(function(m){var _=m.data;u.onSuccess==null||u.onSuccess(_),u.onSettled==null||u.onSettled(_,null)}).catch(function(m){s.clearReset(),u.onError==null||u.onError(m),u.onSettled==null||u.onSettled(void 0,m)});if(p.isError&&!s.isReset()&&!p.isFetching&&CO(u.suspense,u.useErrorBoundary,[p.error,f.getCurrentQuery()]))throw p.error;return u.notifyOnChangeProps==="tracked"&&(p=f.trackResult(p,u)),p}function OO(e,t,n){var r=ql(e,t,n);return EO(r,gO)}function io(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Vc(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ru(e,t)}function Hs(e,t){if(t&&(sn(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return io(e)}function sr(e){return sr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},sr(e)}function LO(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function TO(e){return gw(e)||LO(e)||vw(e)||yw()}function Pv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Cv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pv(Object(n),!0).forEach(function(r){Un(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var RO={type:"logger",log:function(t){this.output("log",t)},warn:function(t){this.output("warn",t)},error:function(t){this.output("error",t)},output:function(t,n){console&&console[t]&&console[t].apply(console,n)}},AO=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};$n(this,e),this.init(t,n)}return Wn(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=r.prefix||"i18next:",this.logger=n||RO,this.options=r,this.debug=r.debug}},{key:"setDebug",value:function(n){this.debug=n}},{key:"log",value:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return this.forward(r,"log","",!0)}},{key:"warn",value:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return this.forward(r,"warn","",!0)}},{key:"error",value:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return this.forward(r,"error","")}},{key:"deprecate",value:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return this.forward(r,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(n,r,o,a){return a&&!this.debug?null:(typeof n[0]=="string"&&(n[0]="".concat(o).concat(this.prefix," ").concat(n[0])),this.logger[r](n))}},{key:"create",value:function(n){return new e(this.logger,Cv(Cv({},{prefix:"".concat(this.prefix,":").concat(n,":")}),this.options))}},{key:"clone",value:function(n){return n=n||this.options,n.prefix=n.prefix||this.prefix,new e(this.logger,n)}}]),e}(),nr=new AO,_o=function(){function e(){$n(this,e),this.observers={}}return Wn(e,[{key:"on",value:function(n,r){var o=this;return n.split(" ").forEach(function(a){o.observers[a]=o.observers[a]||[],o.observers[a].push(r)}),this}},{key:"off",value:function(n,r){if(this.observers[n]){if(!r){delete this.observers[n];return}this.observers[n]=this.observers[n].filter(function(o){return o!==r})}}},{key:"emit",value:function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];if(this.observers[n]){var s=[].concat(this.observers[n]);s.forEach(function(d){d.apply(void 0,o)})}if(this.observers["*"]){var u=[].concat(this.observers["*"]);u.forEach(function(d){d.apply(d,[n].concat(o))})}}}]),e}();function Fa(){var e,t,n=new Promise(function(r,o){e=r,t=o});return n.resolve=e,n.reject=t,n}function Ev(e){return e==null?"":""+e}function zO(e,t,n){e.forEach(function(r){t[r]&&(n[r]=t[r])})}function ym(e,t,n){function r(u){return u&&u.indexOf("###")>-1?u.replace(/###/g,"."):u}function o(){return!e||typeof e=="string"}for(var a=typeof t!="string"?[].concat(t):t.split(".");a.length>1;){if(o())return{};var s=r(a.shift());!e[s]&&n&&(e[s]=new n),Object.prototype.hasOwnProperty.call(e,s)?e=e[s]:e={}}return o()?{}:{obj:e,k:r(a.shift())}}function Ov(e,t,n){var r=ym(e,t,Object),o=r.obj,a=r.k;o[a]=n}function NO(e,t,n,r){var o=ym(e,t,Object),a=o.obj,s=o.k;a[s]=a[s]||[],r&&(a[s]=a[s].concat(n)),r||a[s].push(n)}function Du(e,t){var n=ym(e,t),r=n.obj,o=n.k;if(r)return r[o]}function IO(e,t,n){var r=Du(e,n);return r!==void 0?r:Du(t,n)}function Ow(e,t,n){for(var r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):Ow(e[r],t[r],n):e[r]=t[r]);return e}function yi(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var BO={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function MO(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,function(t){return BO[t]}):e}var Zc=typeof window<"u"&&window.navigator&&typeof window.navigator.userAgentData>"u"&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,DO=[" ",",","?","!",";"];function jO(e,t,n){t=t||"",n=n||"";var r=DO.filter(function(u){return t.indexOf(u)<0&&n.indexOf(u)<0});if(r.length===0)return!0;var o=new RegExp("(".concat(r.map(function(u){return u==="?"?"\\?":u}).join("|"),")")),a=!o.test(e);if(!a){var s=e.indexOf(n);s>0&&!o.test(e.substring(0,s))&&(a=!0)}return a}function ju(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(e){if(e[t])return e[t];for(var r=t.split(n),o=e,a=0;a<r.length;++a){if(!o||typeof o[r[a]]=="string"&&a+1<r.length)return;if(o[r[a]]===void 0){for(var s=2,u=r.slice(a,a+s).join(n),d=o[u];d===void 0&&r.length>a+s;)s++,u=r.slice(a,a+s).join(n),d=o[u];if(d===void 0)return;if(d===null)return null;if(t.endsWith(u)){if(typeof d=="string")return d;if(u&&typeof d[u]=="string")return d[u]}var f=r.slice(a+s).join(n);return f?ju(d,f,n):void 0}o=o[r[a]]}return o}}function Lv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Tl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lv(Object(n),!0).forEach(function(r){Un(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function FO(e){var t=UO();return function(){var r=sr(e),o;if(t){var a=sr(this).constructor;o=Reflect.construct(r,arguments,a)}else o=r.apply(this,arguments);return Hs(this,o)}}function UO(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var $O=function(e){Vc(n,e);var t=FO(n);function n(r){var o,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};return $n(this,n),o=t.call(this),Zc&&_o.call(io(o)),o.data=r||{},o.options=a,o.options.keySeparator===void 0&&(o.options.keySeparator="."),o.options.ignoreJSONStructure===void 0&&(o.options.ignoreJSONStructure=!0),o}return Wn(n,[{key:"addNamespaces",value:function(o){this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}},{key:"removeNamespaces",value:function(o){var a=this.options.ns.indexOf(o);a>-1&&this.options.ns.splice(a,1)}},{key:"getResource",value:function(o,a,s){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},d=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator,f=u.ignoreJSONStructure!==void 0?u.ignoreJSONStructure:this.options.ignoreJSONStructure,p=[o,a];s&&typeof s!="string"&&(p=p.concat(s)),s&&typeof s=="string"&&(p=p.concat(d?s.split(d):s)),o.indexOf(".")>-1&&(p=o.split("."));var m=Du(this.data,p);return m||!f||typeof s!="string"?m:ju(this.data&&this.data[o]&&this.data[o][a],s,d)}},{key:"addResource",value:function(o,a,s,u){var d=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1},f=this.options.keySeparator;f===void 0&&(f=".");var p=[o,a];s&&(p=p.concat(f?s.split(f):s)),o.indexOf(".")>-1&&(p=o.split("."),u=a,a=p[1]),this.addNamespaces(a),Ov(this.data,p,u),d.silent||this.emit("added",o,a,s,u)}},{key:"addResources",value:function(o,a,s){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(var d in s)(typeof s[d]=="string"||Object.prototype.toString.apply(s[d])==="[object Array]")&&this.addResource(o,a,d,s[d],{silent:!0});u.silent||this.emit("added",o,a,s)}},{key:"addResourceBundle",value:function(o,a,s,u,d){var f=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},p=[o,a];o.indexOf(".")>-1&&(p=o.split("."),u=s,s=a,a=p[1]),this.addNamespaces(a);var m=Du(this.data,p)||{};u?Ow(m,s,d):m=Tl(Tl({},m),s),Ov(this.data,p,m),f.silent||this.emit("added",o,a,s)}},{key:"removeResourceBundle",value:function(o,a){this.hasResourceBundle(o,a)&&delete this.data[o][a],this.removeNamespaces(a),this.emit("removed",o,a)}},{key:"hasResourceBundle",value:function(o,a){return this.getResource(o,a)!==void 0}},{key:"getResourceBundle",value:function(o,a){return a||(a=this.options.defaultNS),this.options.compatibilityAPI==="v1"?Tl(Tl({},{}),this.getResource(o,a)):this.getResource(o,a)}},{key:"getDataByLanguage",value:function(o){return this.data[o]}},{key:"hasLanguageSomeTranslations",value:function(o){var a=this.getDataByLanguage(o),s=a&&Object.keys(a)||[];return!!s.find(function(u){return a[u]&&Object.keys(a[u]).length>0})}},{key:"toJSON",value:function(){return this.data}}]),n}(_o),Lw={processors:{},addPostProcessor:function(t){this.processors[t.name]=t},handle:function(t,n,r,o,a){var s=this;return t.forEach(function(u){s.processors[u]&&(n=s.processors[u].process(n,r,o,a))}),n}};function Tv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Bt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tv(Object(n),!0).forEach(function(r){Un(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function WO(e){var t=HO();return function(){var r=sr(e),o;if(t){var a=sr(this).constructor;o=Reflect.construct(r,arguments,a)}else o=r.apply(this,arguments);return Hs(this,o)}}function HO(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Rv={},Av=function(e){Vc(n,e);var t=WO(n);function n(r){var o,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return $n(this,n),o=t.call(this),Zc&&_o.call(io(o)),zO(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r,io(o)),o.options=a,o.options.keySeparator===void 0&&(o.options.keySeparator="."),o.logger=nr.create("translator"),o}return Wn(n,[{key:"changeLanguage",value:function(o){o&&(this.language=o)}},{key:"exists",value:function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(o==null)return!1;var s=this.resolve(o,a);return s&&s.res!==void 0}},{key:"extractFromKey",value:function(o,a){var s=a.nsSeparator!==void 0?a.nsSeparator:this.options.nsSeparator;s===void 0&&(s=":");var u=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,d=a.ns||this.options.defaultNS||[],f=s&&o.indexOf(s)>-1,p=!this.options.userDefinedKeySeparator&&!a.keySeparator&&!this.options.userDefinedNsSeparator&&!a.nsSeparator&&!jO(o,s,u);if(f&&!p){var m=o.match(this.interpolator.nestingRegexp);if(m&&m.length>0)return{key:o,namespaces:d};var _=o.split(s);(s!==u||s===u&&this.options.ns.indexOf(_[0])>-1)&&(d=_.shift()),o=_.join(u)}return typeof d=="string"&&(d=[d]),{key:o,namespaces:d}}},{key:"translate",value:function(o,a,s){var u=this;if(sn(a)!=="object"&&this.options.overloadTranslationOptionHandler&&(a=this.options.overloadTranslationOptionHandler(arguments)),sn(a)==="object"&&(a=Bt({},a)),a||(a={}),o==null)return"";Array.isArray(o)||(o=[String(o)]);var d=a.returnDetails!==void 0?a.returnDetails:this.options.returnDetails,f=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,p=this.extractFromKey(o[o.length-1],a),m=p.key,_=p.namespaces,b=_[_.length-1],y=a.lng||this.language,w=a.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(y&&y.toLowerCase()==="cimode"){if(w){var C=a.nsSeparator||this.options.nsSeparator;return d?{res:"".concat(b).concat(C).concat(m),usedKey:m,exactUsedKey:m,usedLng:y,usedNS:b}:"".concat(b).concat(C).concat(m)}return d?{res:m,usedKey:m,exactUsedKey:m,usedLng:y,usedNS:b}:m}var g=this.resolve(o,a),x=g&&g.res,k=g&&g.usedKey||m,P=g&&g.exactUsedKey||m,T=Object.prototype.toString.apply(x),A=["[object Number]","[object Function]","[object RegExp]"],I=a.joinArrays!==void 0?a.joinArrays:this.options.joinArrays,F=!this.i18nFormat||this.i18nFormat.handleAsObject,W=typeof x!="string"&&typeof x!="boolean"&&typeof x!="number";if(F&&x&&W&&A.indexOf(T)<0&&!(typeof I=="string"&&T==="[object Array]")){if(!a.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var B=this.options.returnedObjectHandler?this.options.returnedObjectHandler(k,x,Bt(Bt({},a),{},{ns:_})):"key '".concat(m," (").concat(this.language,")' returned an object instead of string.");return d?(g.res=B,g):B}if(f){var G=T==="[object Array]",J=G?[]:{},ee=G?P:k;for(var V in x)if(Object.prototype.hasOwnProperty.call(x,V)){var le="".concat(ee).concat(f).concat(V);J[V]=this.translate(le,Bt(Bt({},a),{joinArrays:!1,ns:_})),J[V]===le&&(J[V]=x[V])}x=J}}else if(F&&typeof I=="string"&&T==="[object Array]")x=x.join(I),x&&(x=this.extendTranslation(x,o,a,s));else{var X=!1,D=!1,z=a.count!==void 0&&typeof a.count!="string",oe=n.hasDefaultValue(a),q=z?this.pluralResolver.getSuffix(y,a.count,a):"",O=a["defaultValue".concat(q)]||a.defaultValue;!this.isValidLookup(x)&&oe&&(X=!0,x=O),this.isValidLookup(x)||(D=!0,x=m);var N=a.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey,M=N&&D?void 0:x,Q=oe&&O!==x&&this.options.updateMissing;if(D||X||Q){if(this.logger.log(Q?"updateKey":"missingKey",y,b,m,Q?O:x),f){var ne=this.resolve(m,Bt(Bt({},a),{},{keySeparator:!1}));ne&&ne.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var ue=[],he=this.languageUtils.getFallbackCodes(this.options.fallbackLng,a.lng||this.language);if(this.options.saveMissingTo==="fallback"&&he&&he[0])for(var be=0;be<he.length;be++)ue.push(he[be]);else this.options.saveMissingTo==="all"?ue=this.languageUtils.toResolveHierarchy(a.lng||this.language):ue.push(a.lng||this.language);var Je=function(Le,ae,me){var K=oe&&me!==x?me:M;u.options.missingKeyHandler?u.options.missingKeyHandler(Le,b,ae,K,Q,a):u.backendConnector&&u.backendConnector.saveMissing&&u.backendConnector.saveMissing(Le,b,ae,K,Q,a),u.emit("missingKey",Le,b,ae,x)};this.options.saveMissing&&(this.options.saveMissingPlurals&&z?ue.forEach(function(Ze){u.pluralResolver.getSuffixes(Ze,a).forEach(function(Le){Je([Ze],m+Le,a["defaultValue".concat(Le)]||O)})}):Je(ue,m,O))}x=this.extendTranslation(x,o,a,g,s),D&&x===m&&this.options.appendNamespaceToMissingKey&&(x="".concat(b,":").concat(m)),(D||X)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?x=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(b,":").concat(m):m,X?x:void 0):x=this.options.parseMissingKeyHandler(x))}return d?(g.res=x,g):x}},{key:"extendTranslation",value:function(o,a,s,u,d){var f=this;if(this.i18nFormat&&this.i18nFormat.parse)o=this.i18nFormat.parse(o,Bt(Bt({},this.options.interpolation.defaultVariables),s),u.usedLng,u.usedNS,u.usedKey,{resolved:u});else if(!s.skipInterpolation){s.interpolation&&this.interpolator.init(Bt(Bt({},s),{interpolation:Bt(Bt({},this.options.interpolation),s.interpolation)}));var p=typeof o=="string"&&(s&&s.interpolation&&s.interpolation.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables),m;if(p){var _=o.match(this.interpolator.nestingRegexp);m=_&&_.length}var b=s.replace&&typeof s.replace!="string"?s.replace:s;if(this.options.interpolation.defaultVariables&&(b=Bt(Bt({},this.options.interpolation.defaultVariables),b)),o=this.interpolator.interpolate(o,b,s.lng||this.language,s),p){var y=o.match(this.interpolator.nestingRegexp),w=y&&y.length;m<w&&(s.nest=!1)}!s.lng&&this.options.compatibilityAPI!=="v1"&&u&&u.res&&(s.lng=u.usedLng),s.nest!==!1&&(o=this.interpolator.nest(o,function(){for(var x=arguments.length,k=new Array(x),P=0;P<x;P++)k[P]=arguments[P];return d&&d[0]===k[0]&&!s.context?(f.logger.warn("It seems you are nesting recursively key: ".concat(k[0]," in key: ").concat(a[0])),null):f.translate.apply(f,k.concat([a]))},s)),s.interpolation&&this.interpolator.reset()}var C=s.postProcess||this.options.postProcess,g=typeof C=="string"?[C]:C;return o!=null&&g&&g.length&&s.applyPostProcessor!==!1&&(o=Lw.handle(g,o,a,this.options&&this.options.postProcessPassResolved?Bt({i18nResolved:u},s):s,this)),o}},{key:"resolve",value:function(o){var a=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u,d,f,p,m;return typeof o=="string"&&(o=[o]),o.forEach(function(_){if(!a.isValidLookup(u)){var b=a.extractFromKey(_,s),y=b.key;d=y;var w=b.namespaces;a.options.fallbackNS&&(w=w.concat(a.options.fallbackNS));var C=s.count!==void 0&&typeof s.count!="string",g=C&&!s.ordinal&&s.count===0&&a.pluralResolver.shouldUseIntlApi(),x=s.context!==void 0&&(typeof s.context=="string"||typeof s.context=="number")&&s.context!=="",k=s.lngs?s.lngs:a.languageUtils.toResolveHierarchy(s.lng||a.language,s.fallbackLng);w.forEach(function(P){a.isValidLookup(u)||(m=P,!Rv["".concat(k[0],"-").concat(P)]&&a.utils&&a.utils.hasLoadedNamespace&&!a.utils.hasLoadedNamespace(m)&&(Rv["".concat(k[0],"-").concat(P)]=!0,a.logger.warn('key "'.concat(d,'" for languages "').concat(k.join(", "),`" won't get resolved as namespace "`).concat(m,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),k.forEach(function(T){if(!a.isValidLookup(u)){p=T;var A=[y];if(a.i18nFormat&&a.i18nFormat.addLookupKeys)a.i18nFormat.addLookupKeys(A,y,T,P,s);else{var I;C&&(I=a.pluralResolver.getSuffix(T,s.count,s));var F="".concat(a.options.pluralSeparator,"zero");if(C&&(A.push(y+I),g&&A.push(y+F)),x){var W="".concat(y).concat(a.options.contextSeparator).concat(s.context);A.push(W),C&&(A.push(W+I),g&&A.push(W+F))}}for(var B;B=A.pop();)a.isValidLookup(u)||(f=B,u=a.getResource(T,P,B,s))}}))})}}),{res:u,usedKey:d,exactUsedKey:f,usedLng:p,usedNS:m}}},{key:"isValidLookup",value:function(o){return o!==void 0&&!(!this.options.returnNull&&o===null)&&!(!this.options.returnEmptyString&&o==="")}},{key:"getResource",value:function(o,a,s){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(o,a,s,u):this.resourceStore.getResource(o,a,s,u)}}],[{key:"hasDefaultValue",value:function(o){var a="defaultValue";for(var s in o)if(Object.prototype.hasOwnProperty.call(o,s)&&a===s.substring(0,a.length)&&o[s]!==void 0)return!0;return!1}}]),n}(_o);function of(e){return e.charAt(0).toUpperCase()+e.slice(1)}var zv=function(){function e(t){$n(this,e),this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=nr.create("languageUtils")}return Wn(e,[{key:"getScriptPartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return null;var r=n.split("-");return r.length===2||(r.pop(),r[r.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(r.join("-"))}},{key:"getLanguagePartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return n;var r=n.split("-");return this.formatLanguageCode(r[0])}},{key:"formatLanguageCode",value:function(n){if(typeof n=="string"&&n.indexOf("-")>-1){var r=["hans","hant","latn","cyrl","cans","mong","arab"],o=n.split("-");return this.options.lowerCaseLng?o=o.map(function(a){return a.toLowerCase()}):o.length===2?(o[0]=o[0].toLowerCase(),o[1]=o[1].toUpperCase(),r.indexOf(o[1].toLowerCase())>-1&&(o[1]=of(o[1].toLowerCase()))):o.length===3&&(o[0]=o[0].toLowerCase(),o[1].length===2&&(o[1]=o[1].toUpperCase()),o[0]!=="sgn"&&o[2].length===2&&(o[2]=o[2].toUpperCase()),r.indexOf(o[1].toLowerCase())>-1&&(o[1]=of(o[1].toLowerCase())),r.indexOf(o[2].toLowerCase())>-1&&(o[2]=of(o[2].toLowerCase()))),o.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?n.toLowerCase():n}},{key:"isSupportedCode",value:function(n){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(n=this.getLanguagePartFromCode(n)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(n)>-1}},{key:"getBestMatchFromCodes",value:function(n){var r=this;if(!n)return null;var o;return n.forEach(function(a){if(!o){var s=r.formatLanguageCode(a);(!r.options.supportedLngs||r.isSupportedCode(s))&&(o=s)}}),!o&&this.options.supportedLngs&&n.forEach(function(a){if(!o){var s=r.getLanguagePartFromCode(a);if(r.isSupportedCode(s))return o=s;o=r.options.supportedLngs.find(function(u){if(u===s)return u;if(!(u.indexOf("-")<0&&s.indexOf("-")<0)&&u.indexOf(s)===0)return u})}}),o||(o=this.getFallbackCodes(this.options.fallbackLng)[0]),o}},{key:"getFallbackCodes",value:function(n,r){if(!n)return[];if(typeof n=="function"&&(n=n(r)),typeof n=="string"&&(n=[n]),Object.prototype.toString.apply(n)==="[object Array]")return n;if(!r)return n.default||[];var o=n[r];return o||(o=n[this.getScriptPartFromCode(r)]),o||(o=n[this.formatLanguageCode(r)]),o||(o=n[this.getLanguagePartFromCode(r)]),o||(o=n.default),o||[]}},{key:"toResolveHierarchy",value:function(n,r){var o=this,a=this.getFallbackCodes(r||this.options.fallbackLng||[],n),s=[],u=function(f){f&&(o.isSupportedCode(f)?s.push(f):o.logger.warn("rejecting language code not found in supportedLngs: ".concat(f)))};return typeof n=="string"&&n.indexOf("-")>-1?(this.options.load!=="languageOnly"&&u(this.formatLanguageCode(n)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&u(this.getScriptPartFromCode(n)),this.options.load!=="currentOnly"&&u(this.getLanguagePartFromCode(n))):typeof n=="string"&&u(this.formatLanguageCode(n)),a.forEach(function(d){s.indexOf(d)<0&&u(o.formatLanguageCode(d))}),s}}]),e}(),VO=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],ZO={1:function(t){return+(t>1)},2:function(t){return+(t!=1)},3:function(t){return 0},4:function(t){return t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2},5:function(t){return t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5},6:function(t){return t==1?0:t>=2&&t<=4?1:2},7:function(t){return t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2},8:function(t){return t==1?0:t==2?1:t!=8&&t!=11?2:3},9:function(t){return+(t>=2)},10:function(t){return t==1?0:t==2?1:t<7?2:t<11?3:4},11:function(t){return t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3},12:function(t){return+(t%10!=1||t%100==11)},13:function(t){return+(t!==0)},14:function(t){return t==1?0:t==2?1:t==3?2:3},15:function(t){return t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2},16:function(t){return t%10==1&&t%100!=11?0:t!==0?1:2},17:function(t){return t==1||t%10==1&&t%100!=11?0:1},18:function(t){return t==0?0:t==1?1:2},19:function(t){return t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3},20:function(t){return t==1?0:t==0||t%100>0&&t%100<20?1:2},21:function(t){return t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0},22:function(t){return t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3}},qO=["v1","v2","v3"],Nv={zero:0,one:1,two:2,few:3,many:4,other:5};function KO(){var e={};return VO.forEach(function(t){t.lngs.forEach(function(n){e[n]={numbers:t.nr,plurals:ZO[t.fc]}})}),e}var QO=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};$n(this,e),this.languageUtils=t,this.options=n,this.logger=nr.create("pluralResolver"),(!this.options.compatibilityJSON||this.options.compatibilityJSON==="v4")&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=KO()}return Wn(e,[{key:"addRule",value:function(n,r){this.rules[n]=r}},{key:"getRule",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(n,{type:r.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[n]||this.rules[this.languageUtils.getLanguagePartFromCode(n)]}},{key:"needsPlural",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=this.getRule(n,r);return this.shouldUseIntlApi()?o&&o.resolvedOptions().pluralCategories.length>1:o&&o.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(n,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(n,o).map(function(a){return"".concat(r).concat(a)})}},{key:"getSuffixes",value:function(n){var r=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(n,o);return a?this.shouldUseIntlApi()?a.resolvedOptions().pluralCategories.sort(function(s,u){return Nv[s]-Nv[u]}).map(function(s){return"".concat(r.options.prepend).concat(s)}):a.numbers.map(function(s){return r.getSuffix(n,s,o)}):[]}},{key:"getSuffix",value:function(n,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=this.getRule(n,o);return a?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(a.select(r)):this.getSuffixRetroCompatible(a,r):(this.logger.warn("no plural rule found for: ".concat(n)),"")}},{key:"getSuffixRetroCompatible",value:function(n,r){var o=this,a=n.noAbs?n.plurals(r):n.plurals(Math.abs(r)),s=n.numbers[a];this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1&&(s===2?s="plural":s===1&&(s=""));var u=function(){return o.options.prepend&&s.toString()?o.options.prepend+s.toString():s.toString()};return this.options.compatibilityJSON==="v1"?s===1?"":typeof s=="number"?"_plural_".concat(s.toString()):u():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1?u():this.options.prepend&&a.toString()?this.options.prepend+a.toString():a.toString()}},{key:"shouldUseIntlApi",value:function(){return!qO.includes(this.options.compatibilityJSON)}}]),e}();function Iv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Ln(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Iv(Object(n),!0).forEach(function(r){Un(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Iv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bv(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,a=IO(e,t,n);return!a&&o&&typeof n=="string"&&(a=ju(e,n,r),a===void 0&&(a=ju(t,n,r))),a}var GO=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};$n(this,e),this.logger=nr.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(n){return n},this.init(t)}return Wn(e,[{key:"init",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};n.interpolation||(n.interpolation={escapeValue:!0});var r=n.interpolation;this.escape=r.escape!==void 0?r.escape:MO,this.escapeValue=r.escapeValue!==void 0?r.escapeValue:!0,this.useRawValueToEscape=r.useRawValueToEscape!==void 0?r.useRawValueToEscape:!1,this.prefix=r.prefix?yi(r.prefix):r.prefixEscaped||"{{",this.suffix=r.suffix?yi(r.suffix):r.suffixEscaped||"}}",this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||",",this.unescapePrefix=r.unescapeSuffix?"":r.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":r.unescapeSuffix||"",this.nestingPrefix=r.nestingPrefix?yi(r.nestingPrefix):r.nestingPrefixEscaped||yi("$t("),this.nestingSuffix=r.nestingSuffix?yi(r.nestingSuffix):r.nestingSuffixEscaped||yi(")"),this.nestingOptionsSeparator=r.nestingOptionsSeparator?r.nestingOptionsSeparator:r.nestingOptionsSeparator||",",this.maxReplaces=r.maxReplaces?r.maxReplaces:1e3,this.alwaysFormat=r.alwaysFormat!==void 0?r.alwaysFormat:!1,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var n="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(n,"g");var r="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(r,"g");var o="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(o,"g")}},{key:"interpolate",value:function(n,r,o,a){var s=this,u,d,f,p=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function m(C){return C.replace(/\$/g,"$$$$")}var _=function(g){if(g.indexOf(s.formatSeparator)<0){var x=Bv(r,p,g,s.options.keySeparator,s.options.ignoreJSONStructure);return s.alwaysFormat?s.format(x,void 0,o,Ln(Ln(Ln({},a),r),{},{interpolationkey:g})):x}var k=g.split(s.formatSeparator),P=k.shift().trim(),T=k.join(s.formatSeparator).trim();return s.format(Bv(r,p,P,s.options.keySeparator,s.options.ignoreJSONStructure),T,o,Ln(Ln(Ln({},a),r),{},{interpolationkey:P}))};this.resetRegExp();var b=a&&a.missingInterpolationHandler||this.options.missingInterpolationHandler,y=a&&a.interpolation&&a.interpolation.skipOnVariables!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables,w=[{regex:this.regexpUnescape,safeValue:function(g){return m(g)}},{regex:this.regexp,safeValue:function(g){return s.escapeValue?m(s.escape(g)):m(g)}}];return w.forEach(function(C){for(f=0;u=C.regex.exec(n);){var g=u[1].trim();if(d=_(g),d===void 0)if(typeof b=="function"){var x=b(n,u,a);d=typeof x=="string"?x:""}else if(a&&Object.prototype.hasOwnProperty.call(a,g))d="";else if(y){d=u[0];continue}else s.logger.warn("missed to pass in variable ".concat(g," for interpolating ").concat(n)),d="";else typeof d!="string"&&!s.useRawValueToEscape&&(d=Ev(d));var k=C.safeValue(d);if(n=n.replace(u[0],k),y?(C.regex.lastIndex+=d.length,C.regex.lastIndex-=u[0].length):C.regex.lastIndex=0,f++,f>=s.maxReplaces)break}}),n}},{key:"nest",value:function(n,r){var o=this,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s,u,d;function f(b,y){var w=this.nestingOptionsSeparator;if(b.indexOf(w)<0)return b;var C=b.split(new RegExp("".concat(w,"[ ]*{"))),g="{".concat(C[1]);b=C[0],g=this.interpolate(g,d);var x=g.match(/'/g),k=g.match(/"/g);(x&&x.length%2===0&&!k||k.length%2!==0)&&(g=g.replace(/'/g,'"'));try{d=JSON.parse(g),y&&(d=Ln(Ln({},y),d))}catch(P){return this.logger.warn("failed parsing options string in nesting for key ".concat(b),P),"".concat(b).concat(w).concat(g)}return delete d.defaultValue,b}for(;s=this.nestingRegexp.exec(n);){var p=[];d=Ln({},a),d=d.replace&&typeof d.replace!="string"?d.replace:d,d.applyPostProcessor=!1,delete d.defaultValue;var m=!1;if(s[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(s[1])){var _=s[1].split(this.formatSeparator).map(function(b){return b.trim()});s[1]=_.shift(),p=_,m=!0}if(u=r(f.call(this,s[1].trim(),d),d),u&&s[0]===n&&typeof u!="string")return u;typeof u!="string"&&(u=Ev(u)),u||(this.logger.warn("missed to resolve ".concat(s[1]," for nesting ").concat(n)),u=""),m&&(u=p.reduce(function(b,y){return o.format(b,y,a.lng,Ln(Ln({},a),{},{interpolationkey:s[1].trim()}))},u.trim())),n=n.replace(s[0],u),this.regexp.lastIndex=0}return n}}]),e}();function Mv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function mr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mv(Object(n),!0).forEach(function(r){Un(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function JO(e){var t=e.toLowerCase().trim(),n={};if(e.indexOf("(")>-1){var r=e.split("(");t=r[0].toLowerCase().trim();var o=r[1].substring(0,r[1].length-1);if(t==="currency"&&o.indexOf(":")<0)n.currency||(n.currency=o.trim());else if(t==="relativetime"&&o.indexOf(":")<0)n.range||(n.range=o.trim());else{var a=o.split(";");a.forEach(function(s){if(s){var u=s.split(":"),d=TO(u),f=d[0],p=d.slice(1),m=p.join(":").trim().replace(/^'+|'+$/g,"");n[f.trim()]||(n[f.trim()]=m),m==="false"&&(n[f.trim()]=!1),m==="true"&&(n[f.trim()]=!0),isNaN(m)||(n[f.trim()]=parseInt(m,10))}})}}return{formatName:t,formatOptions:n}}function bi(e){var t={};return function(r,o,a){var s=o+JSON.stringify(a),u=t[s];return u||(u=e(o,a),t[s]=u),u(r)}}var YO=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};$n(this,e),this.logger=nr.create("formatter"),this.options=t,this.formats={number:bi(function(n,r){var o=new Intl.NumberFormat(n,mr({},r));return function(a){return o.format(a)}}),currency:bi(function(n,r){var o=new Intl.NumberFormat(n,mr(mr({},r),{},{style:"currency"}));return function(a){return o.format(a)}}),datetime:bi(function(n,r){var o=new Intl.DateTimeFormat(n,mr({},r));return function(a){return o.format(a)}}),relativetime:bi(function(n,r){var o=new Intl.RelativeTimeFormat(n,mr({},r));return function(a){return o.format(a,r.range||"day")}}),list:bi(function(n,r){var o=new Intl.ListFormat(n,mr({},r));return function(a){return o.format(a)}})},this.init(t)}return Wn(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}},o=r.interpolation;this.formatSeparator=o.formatSeparator?o.formatSeparator:o.formatSeparator||","}},{key:"add",value:function(n,r){this.formats[n.toLowerCase().trim()]=r}},{key:"addCached",value:function(n,r){this.formats[n.toLowerCase().trim()]=bi(r)}},{key:"format",value:function(n,r,o){var a=this,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},u=r.split(this.formatSeparator),d=u.reduce(function(f,p){var m=JO(p),_=m.formatName,b=m.formatOptions;if(a.formats[_]){var y=f;try{var w=s&&s.formatParams&&s.formatParams[s.interpolationkey]||{},C=w.locale||w.lng||s.locale||s.lng||o;y=a.formats[_](f,C,mr(mr(mr({},b),s),w))}catch(g){a.logger.warn(g)}return y}else a.logger.warn("there was no format function for ".concat(_));return f},n);return d}}]),e}();function Dv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function jv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Dv(Object(n),!0).forEach(function(r){Un(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function XO(e){var t=eL();return function(){var r=sr(e),o;if(t){var a=sr(this).constructor;o=Reflect.construct(r,arguments,a)}else o=r.apply(this,arguments);return Hs(this,o)}}function eL(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function tL(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}var nL=function(e){Vc(n,e);var t=XO(n);function n(r,o,a){var s,u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return $n(this,n),s=t.call(this),Zc&&_o.call(io(s)),s.backend=r,s.store=o,s.services=a,s.languageUtils=a.languageUtils,s.options=u,s.logger=nr.create("backendConnector"),s.waitingReads=[],s.maxParallelReads=u.maxParallelReads||10,s.readingCalls=0,s.maxRetries=u.maxRetries>=0?u.maxRetries:5,s.retryTimeout=u.retryTimeout>=1?u.retryTimeout:350,s.state={},s.queue=[],s.backend&&s.backend.init&&s.backend.init(a,u.backend,u),s}return Wn(n,[{key:"queueLoad",value:function(o,a,s,u){var d=this,f={},p={},m={},_={};return o.forEach(function(b){var y=!0;a.forEach(function(w){var C="".concat(b,"|").concat(w);!s.reload&&d.store.hasResourceBundle(b,w)?d.state[C]=2:d.state[C]<0||(d.state[C]===1?p[C]===void 0&&(p[C]=!0):(d.state[C]=1,y=!1,p[C]===void 0&&(p[C]=!0),f[C]===void 0&&(f[C]=!0),_[w]===void 0&&(_[w]=!0)))}),y||(m[b]=!0)}),(Object.keys(f).length||Object.keys(p).length)&&this.queue.push({pending:p,pendingCount:Object.keys(p).length,loaded:{},errors:[],callback:u}),{toLoad:Object.keys(f),pending:Object.keys(p),toLoadLanguages:Object.keys(m),toLoadNamespaces:Object.keys(_)}}},{key:"loaded",value:function(o,a,s){var u=o.split("|"),d=u[0],f=u[1];a&&this.emit("failedLoading",d,f,a),s&&this.store.addResourceBundle(d,f,s),this.state[o]=a?-1:2;var p={};this.queue.forEach(function(m){NO(m.loaded,[d],f),tL(m,o),a&&m.errors.push(a),m.pendingCount===0&&!m.done&&(Object.keys(m.loaded).forEach(function(_){p[_]||(p[_]={});var b=m.loaded[_];b.length&&b.forEach(function(y){p[_][y]===void 0&&(p[_][y]=!0)})}),m.done=!0,m.errors.length?m.callback(m.errors):m.callback())}),this.emit("loaded",p),this.queue=this.queue.filter(function(m){return!m.done})}},{key:"read",value:function(o,a,s){var u=this,d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,f=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,p=arguments.length>5?arguments[5]:void 0;if(!o.length)return p(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:o,ns:a,fcName:s,tried:d,wait:f,callback:p});return}this.readingCalls++;var m=function(w,C){if(u.readingCalls--,u.waitingReads.length>0){var g=u.waitingReads.shift();u.read(g.lng,g.ns,g.fcName,g.tried,g.wait,g.callback)}if(w&&C&&d<u.maxRetries){setTimeout(function(){u.read.call(u,o,a,s,d+1,f*2,p)},f);return}p(w,C)},_=this.backend[s].bind(this.backend);if(_.length===2){try{var b=_(o,a);b&&typeof b.then=="function"?b.then(function(y){return m(null,y)}).catch(m):m(null,b)}catch(y){m(y)}return}return _(o,a,m)}},{key:"prepareLoading",value:function(o,a){var s=this,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},d=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),d&&d();typeof o=="string"&&(o=this.languageUtils.toResolveHierarchy(o)),typeof a=="string"&&(a=[a]);var f=this.queueLoad(o,a,u,d);if(!f.toLoad.length)return f.pending.length||d(),null;f.toLoad.forEach(function(p){s.loadOne(p)})}},{key:"load",value:function(o,a,s){this.prepareLoading(o,a,{},s)}},{key:"reload",value:function(o,a,s){this.prepareLoading(o,a,{reload:!0},s)}},{key:"loadOne",value:function(o){var a=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",u=o.split("|"),d=u[0],f=u[1];this.read(d,f,"read",void 0,void 0,function(p,m){p&&a.logger.warn("".concat(s,"loading namespace ").concat(f," for language ").concat(d," failed"),p),!p&&m&&a.logger.log("".concat(s,"loaded namespace ").concat(f," for language ").concat(d),m),a.loaded(o,p,m)})}},{key:"saveMissing",value:function(o,a,s,u,d){var f=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},p=arguments.length>6&&arguments[6]!==void 0?arguments[6]:function(){};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(a)){this.logger.warn('did not save key "'.concat(s,'" as the namespace "').concat(a,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(s==null||s==="")){if(this.backend&&this.backend.create){var m=jv(jv({},f),{},{isUpdate:d}),_=this.backend.create.bind(this.backend);if(_.length<6)try{var b;_.length===5?b=_(o,a,s,u,m):b=_(o,a,s,u),b&&typeof b.then=="function"?b.then(function(y){return p(null,y)}).catch(p):p(null,b)}catch(y){p(y)}else _(o,a,s,u,p,m)}!o||!o[0]||this.store.addResource(o[0],a,s,u)}}}]),n}(_o);function Fv(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){var n={};if(sn(t[1])==="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),sn(t[2])==="object"||sn(t[3])==="object"){var r=t[3]||t[2];Object.keys(r).forEach(function(o){n[o]=r[o]})}return n},interpolation:{escapeValue:!0,format:function(t,n,r,o){return t},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function Uv(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function $v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Gn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$v(Object(n),!0).forEach(function(r){Un(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$v(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rL(e){var t=oL();return function(){var r=sr(e),o;if(t){var a=sr(this).constructor;o=Reflect.construct(r,arguments,a)}else o=r.apply(this,arguments);return Hs(this,o)}}function oL(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Rl(){}function iL(e){var t=Object.getOwnPropertyNames(Object.getPrototypeOf(e));t.forEach(function(n){typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}var Fu=function(e){Vc(n,e);var t=rL(n);function n(){var r,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;if($n(this,n),r=t.call(this),Zc&&_o.call(io(r)),r.options=Uv(o),r.services={},r.logger=nr,r.modules={external:[]},iL(io(r)),a&&!r.isInitialized&&!o.isClone){if(!r.options.initImmediate)return r.init(o,a),Hs(r,io(r));setTimeout(function(){r.init(o,a)},0)}return r}return Wn(n,[{key:"init",value:function(){var o=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;typeof a=="function"&&(s=a,a={}),!a.defaultNS&&a.defaultNS!==!1&&a.ns&&(typeof a.ns=="string"?a.defaultNS=a.ns:a.ns.indexOf("translation")<0&&(a.defaultNS=a.ns[0]));var u=Fv();this.options=Gn(Gn(Gn({},u),this.options),Uv(a)),this.options.compatibilityAPI!=="v1"&&(this.options.interpolation=Gn(Gn({},u.interpolation),this.options.interpolation)),a.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=a.keySeparator),a.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=a.nsSeparator);function d(g){return g?typeof g=="function"?new g:g:null}if(!this.options.isClone){this.modules.logger?nr.init(d(this.modules.logger),this.options):nr.init(null,this.options);var f;this.modules.formatter?f=this.modules.formatter:typeof Intl<"u"&&(f=YO);var p=new zv(this.options);this.store=new $O(this.options.resources,this.options);var m=this.services;m.logger=nr,m.resourceStore=this.store,m.languageUtils=p,m.pluralResolver=new QO(p,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),f&&(!this.options.interpolation.format||this.options.interpolation.format===u.interpolation.format)&&(m.formatter=d(f),m.formatter.init(m,this.options),this.options.interpolation.format=m.formatter.format.bind(m.formatter)),m.interpolator=new GO(this.options),m.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},m.backendConnector=new nL(d(this.modules.backend),m.resourceStore,m,this.options),m.backendConnector.on("*",function(g){for(var x=arguments.length,k=new Array(x>1?x-1:0),P=1;P<x;P++)k[P-1]=arguments[P];o.emit.apply(o,[g].concat(k))}),this.modules.languageDetector&&(m.languageDetector=d(this.modules.languageDetector),m.languageDetector.init&&m.languageDetector.init(m,this.options.detection,this.options)),this.modules.i18nFormat&&(m.i18nFormat=d(this.modules.i18nFormat),m.i18nFormat.init&&m.i18nFormat.init(this)),this.translator=new Av(this.services,this.options),this.translator.on("*",function(g){for(var x=arguments.length,k=new Array(x>1?x-1:0),P=1;P<x;P++)k[P-1]=arguments[P];o.emit.apply(o,[g].concat(k))}),this.modules.external.forEach(function(g){g.init&&g.init(o)})}if(this.format=this.options.interpolation.format,s||(s=Rl),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var _=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);_.length>0&&_[0]!=="dev"&&(this.options.lng=_[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined");var b=["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"];b.forEach(function(g){o[g]=function(){var x;return(x=o.store)[g].apply(x,arguments)}});var y=["addResource","addResources","addResourceBundle","removeResourceBundle"];y.forEach(function(g){o[g]=function(){var x;return(x=o.store)[g].apply(x,arguments),o}});var w=Fa(),C=function(){var x=function(P,T){o.isInitialized&&!o.initializedStoreOnce&&o.logger.warn("init: i18next is already initialized. You should call init just once!"),o.isInitialized=!0,o.options.isClone||o.logger.log("initialized",o.options),o.emit("initialized",o.options),w.resolve(T),s(P,T)};if(o.languages&&o.options.compatibilityAPI!=="v1"&&!o.isInitialized)return x(null,o.t.bind(o));o.changeLanguage(o.options.lng,x)};return this.options.resources||!this.options.initImmediate?C():setTimeout(C,0),w}},{key:"loadResources",value:function(o){var a=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Rl,u=s,d=typeof o=="string"?o:this.language;if(typeof o=="function"&&(u=o),!this.options.resources||this.options.partialBundledLanguages){if(d&&d.toLowerCase()==="cimode")return u();var f=[],p=function(b){if(b){var y=a.services.languageUtils.toResolveHierarchy(b);y.forEach(function(w){f.indexOf(w)<0&&f.push(w)})}};if(d)p(d);else{var m=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);m.forEach(function(_){return p(_)})}this.options.preload&&this.options.preload.forEach(function(_){return p(_)}),this.services.backendConnector.load(f,this.options.ns,function(_){!_&&!a.resolvedLanguage&&a.language&&a.setResolvedLanguage(a.language),u(_)})}else u(null)}},{key:"reloadResources",value:function(o,a,s){var u=Fa();return o||(o=this.languages),a||(a=this.options.ns),s||(s=Rl),this.services.backendConnector.reload(o,a,function(d){u.resolve(),s(d)}),u}},{key:"use",value:function(o){if(!o)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!o.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return o.type==="backend"&&(this.modules.backend=o),(o.type==="logger"||o.log&&o.warn&&o.error)&&(this.modules.logger=o),o.type==="languageDetector"&&(this.modules.languageDetector=o),o.type==="i18nFormat"&&(this.modules.i18nFormat=o),o.type==="postProcessor"&&Lw.addPostProcessor(o),o.type==="formatter"&&(this.modules.formatter=o),o.type==="3rdParty"&&this.modules.external.push(o),this}},{key:"setResolvedLanguage",value:function(o){if(!(!o||!this.languages)&&!(["cimode","dev"].indexOf(o)>-1))for(var a=0;a<this.languages.length;a++){var s=this.languages[a];if(!(["cimode","dev"].indexOf(s)>-1)&&this.store.hasLanguageSomeTranslations(s)){this.resolvedLanguage=s;break}}}},{key:"changeLanguage",value:function(o,a){var s=this;this.isLanguageChangingTo=o;var u=Fa();this.emit("languageChanging",o);var d=function(_){s.language=_,s.languages=s.services.languageUtils.toResolveHierarchy(_),s.resolvedLanguage=void 0,s.setResolvedLanguage(_)},f=function(_,b){b?(d(b),s.translator.changeLanguage(b),s.isLanguageChangingTo=void 0,s.emit("languageChanged",b),s.logger.log("languageChanged",b)):s.isLanguageChangingTo=void 0,u.resolve(function(){return s.t.apply(s,arguments)}),a&&a(_,function(){return s.t.apply(s,arguments)})},p=function(_){!o&&!_&&s.services.languageDetector&&(_=[]);var b=typeof _=="string"?_:s.services.languageUtils.getBestMatchFromCodes(_);b&&(s.language||d(b),s.translator.language||s.translator.changeLanguage(b),s.services.languageDetector&&s.services.languageDetector.cacheUserLanguage&&s.services.languageDetector.cacheUserLanguage(b)),s.loadResources(b,function(y){f(y,b)})};return!o&&this.services.languageDetector&&!this.services.languageDetector.async?p(this.services.languageDetector.detect()):!o&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(p):this.services.languageDetector.detect(p):p(o),u}},{key:"getFixedT",value:function(o,a,s){var u=this,d=function f(p,m){var _;if(sn(m)!=="object"){for(var b=arguments.length,y=new Array(b>2?b-2:0),w=2;w<b;w++)y[w-2]=arguments[w];_=u.options.overloadTranslationOptionHandler([p,m].concat(y))}else _=Gn({},m);_.lng=_.lng||f.lng,_.lngs=_.lngs||f.lngs,_.ns=_.ns||f.ns,_.keyPrefix=_.keyPrefix||s||f.keyPrefix;var C=u.options.keySeparator||".",g;return _.keyPrefix&&Array.isArray(p)?g=p.map(function(x){return"".concat(_.keyPrefix).concat(C).concat(x)}):g=_.keyPrefix?"".concat(_.keyPrefix).concat(C).concat(p):p,u.t(g,_)};return typeof o=="string"?d.lng=o:d.lngs=o,d.ns=a,d.keyPrefix=s,d}},{key:"t",value:function(){var o;return this.translator&&(o=this.translator).translate.apply(o,arguments)}},{key:"exists",value:function(){var o;return this.translator&&(o=this.translator).exists.apply(o,arguments)}},{key:"setDefaultNamespace",value:function(o){this.options.defaultNS=o}},{key:"hasLoadedNamespace",value:function(o){var a=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var u=s.lng||this.resolvedLanguage||this.languages[0],d=this.options?this.options.fallbackLng:!1,f=this.languages[this.languages.length-1];if(u.toLowerCase()==="cimode")return!0;var p=function(b,y){var w=a.services.backendConnector.state["".concat(b,"|").concat(y)];return w===-1||w===2};if(s.precheck){var m=s.precheck(this,p);if(m!==void 0)return m}return!!(this.hasResourceBundle(u,o)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||p(u,o)&&(!d||p(f,o)))}},{key:"loadNamespaces",value:function(o,a){var s=this,u=Fa();return this.options.ns?(typeof o=="string"&&(o=[o]),o.forEach(function(d){s.options.ns.indexOf(d)<0&&s.options.ns.push(d)}),this.loadResources(function(d){u.resolve(),a&&a(d)}),u):(a&&a(),Promise.resolve())}},{key:"loadLanguages",value:function(o,a){var s=Fa();typeof o=="string"&&(o=[o]);var u=this.options.preload||[],d=o.filter(function(f){return u.indexOf(f)<0});return d.length?(this.options.preload=u.concat(d),this.loadResources(function(f){s.resolve(),a&&a(f)}),s):(a&&a(),Promise.resolve())}},{key:"dir",value:function(o){if(o||(o=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!o)return"rtl";var a=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],s=this.services&&this.services.languageUtils||new zv(Fv());return a.indexOf(s.getLanguagePartFromCode(o))>-1||o.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var o=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Rl,u=Gn(Gn(Gn({},this.options),a),{isClone:!0}),d=new n(u);(a.debug!==void 0||a.prefix!==void 0)&&(d.logger=d.logger.clone(a));var f=["store","services","language"];return f.forEach(function(p){d[p]=o[p]}),d.services=Gn({},this.services),d.services.utils={hasLoadedNamespace:d.hasLoadedNamespace.bind(d)},d.translator=new Av(d.services,d.options),d.translator.on("*",function(p){for(var m=arguments.length,_=new Array(m>1?m-1:0),b=1;b<m;b++)_[b-1]=arguments[b];d.emit.apply(d,[p].concat(_))}),d.init(u,s),d.translator.options=d.options,d.translator.backendConnector.services.utils={hasLoadedNamespace:d.hasLoadedNamespace.bind(d)},d}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),n}(_o);Un(Fu,"createInstance",function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Fu(e,t)});var Ut=Fu.createInstance();Ut.createInstance=Fu.createInstance;Ut.createInstance;Ut.dir;Ut.init;Ut.loadResources;Ut.reloadResources;var aL=Ut.use;Ut.changeLanguage;Ut.getFixedT;var Ro=Ut.t;Ut.exists;Ut.setDefaultNamespace;Ut.hasLoadedNamespace;Ut.loadNamespaces;Ut.loadLanguages;const af=()=>te.jsxs("div",{children:[te.jsx("h1",{children:"Det skjedde en feil"}),te.jsx("p",{children:te.jsx("i",{children:"Vennligst gå tilbake i nettleseren eller refresh siden"})})]}),sL="2.25rem",lL="3.75rem",uL="540px";var Fh={},cL={get exports(){return Fh},set exports(e){Fh=e}};/* @preserve
 * Leaflet 1.9.3, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2022 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(e,t){(function(n,r){r(t)})(wi,function(n){var r="1.9.3";function o(i){var l,c,h,v;for(c=1,h=arguments.length;c<h;c++){v=arguments[c];for(l in v)i[l]=v[l]}return i}var a=Object.create||function(){function i(){}return function(l){return i.prototype=l,new i}}();function s(i,l){var c=Array.prototype.slice;if(i.bind)return i.bind.apply(i,c.call(arguments,1));var h=c.call(arguments,2);return function(){return i.apply(l,h.length?h.concat(c.call(arguments)):arguments)}}var u=0;function d(i){return"_leaflet_id"in i||(i._leaflet_id=++u),i._leaflet_id}function f(i,l,c){var h,v,S,R;return R=function(){h=!1,v&&(S.apply(c,v),v=!1)},S=function(){h?v=arguments:(i.apply(c,arguments),setTimeout(R,l),h=!0)},S}function p(i,l,c){var h=l[1],v=l[0],S=h-v;return i===h&&c?i:((i-v)%S+S)%S+v}function m(){return!1}function _(i,l){if(l===!1)return i;var c=Math.pow(10,l===void 0?6:l);return Math.round(i*c)/c}function b(i){return i.trim?i.trim():i.replace(/^\s+|\s+$/g,"")}function y(i){return b(i).split(/\s+/)}function w(i,l){Object.prototype.hasOwnProperty.call(i,"options")||(i.options=i.options?a(i.options):{});for(var c in l)i.options[c]=l[c];return i.options}function C(i,l,c){var h=[];for(var v in i)h.push(encodeURIComponent(c?v.toUpperCase():v)+"="+encodeURIComponent(i[v]));return(!l||l.indexOf("?")===-1?"?":"&")+h.join("&")}var g=/\{ *([\w_ -]+) *\}/g;function x(i,l){return i.replace(g,function(c,h){var v=l[h];if(v===void 0)throw new Error("No value provided for variable "+c);return typeof v=="function"&&(v=v(l)),v})}var k=Array.isArray||function(i){return Object.prototype.toString.call(i)==="[object Array]"};function P(i,l){for(var c=0;c<i.length;c++)if(i[c]===l)return c;return-1}var T="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function A(i){return window["webkit"+i]||window["moz"+i]||window["ms"+i]}var I=0;function F(i){var l=+new Date,c=Math.max(0,16-(l-I));return I=l+c,window.setTimeout(i,c)}var W=window.requestAnimationFrame||A("RequestAnimationFrame")||F,B=window.cancelAnimationFrame||A("CancelAnimationFrame")||A("CancelRequestAnimationFrame")||function(i){window.clearTimeout(i)};function G(i,l,c){if(c&&W===F)i.call(l);else return W.call(window,s(i,l))}function J(i){i&&B.call(window,i)}var ee={__proto__:null,extend:o,create:a,bind:s,get lastId(){return u},stamp:d,throttle:f,wrapNum:p,falseFn:m,formatNum:_,trim:b,splitWords:y,setOptions:w,getParamString:C,template:x,isArray:k,indexOf:P,emptyImageUrl:T,requestFn:W,cancelFn:B,requestAnimFrame:G,cancelAnimFrame:J};function V(){}V.extend=function(i){var l=function(){w(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},c=l.__super__=this.prototype,h=a(c);h.constructor=l,l.prototype=h;for(var v in this)Object.prototype.hasOwnProperty.call(this,v)&&v!=="prototype"&&v!=="__super__"&&(l[v]=this[v]);return i.statics&&o(l,i.statics),i.includes&&(le(i.includes),o.apply(null,[h].concat(i.includes))),o(h,i),delete h.statics,delete h.includes,h.options&&(h.options=c.options?a(c.options):{},o(h.options,i.options)),h._initHooks=[],h.callInitHooks=function(){if(!this._initHooksCalled){c.callInitHooks&&c.callInitHooks.call(this),this._initHooksCalled=!0;for(var S=0,R=h._initHooks.length;S<R;S++)h._initHooks[S].call(this)}},l},V.include=function(i){var l=this.prototype.options;return o(this.prototype,i),i.options&&(this.prototype.options=l,this.mergeOptions(i.options)),this},V.mergeOptions=function(i){return o(this.prototype.options,i),this},V.addInitHook=function(i){var l=Array.prototype.slice.call(arguments,1),c=typeof i=="function"?i:function(){this[i].apply(this,l)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(c),this};function le(i){if(!(typeof L>"u"||!L||!L.Mixin)){i=k(i)?i:[i];for(var l=0;l<i.length;l++)i[l]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var X={on:function(i,l,c){if(typeof i=="object")for(var h in i)this._on(h,i[h],l);else{i=y(i);for(var v=0,S=i.length;v<S;v++)this._on(i[v],l,c)}return this},off:function(i,l,c){if(!arguments.length)delete this._events;else if(typeof i=="object")for(var h in i)this._off(h,i[h],l);else{i=y(i);for(var v=arguments.length===1,S=0,R=i.length;S<R;S++)v?this._off(i[S]):this._off(i[S],l,c)}return this},_on:function(i,l,c,h){if(typeof l!="function"){console.warn("wrong listener type: "+typeof l);return}if(this._listens(i,l,c)===!1){c===this&&(c=void 0);var v={fn:l,ctx:c};h&&(v.once=!0),this._events=this._events||{},this._events[i]=this._events[i]||[],this._events[i].push(v)}},_off:function(i,l,c){var h,v,S;if(this._events&&(h=this._events[i],!!h)){if(arguments.length===1){if(this._firingCount)for(v=0,S=h.length;v<S;v++)h[v].fn=m;delete this._events[i];return}if(typeof l!="function"){console.warn("wrong listener type: "+typeof l);return}var R=this._listens(i,l,c);if(R!==!1){var j=h[R];this._firingCount&&(j.fn=m,this._events[i]=h=h.slice()),h.splice(R,1)}}},fire:function(i,l,c){if(!this.listens(i,c))return this;var h=o({},l,{type:i,target:this,sourceTarget:l&&l.sourceTarget||this});if(this._events){var v=this._events[i];if(v){this._firingCount=this._firingCount+1||1;for(var S=0,R=v.length;S<R;S++){var j=v[S],$=j.fn;j.once&&this.off(i,$,j.ctx),$.call(j.ctx||this,h)}this._firingCount--}}return c&&this._propagateEvent(h),this},listens:function(i,l,c,h){typeof i!="string"&&console.warn('"string" type argument expected');var v=l;typeof l!="function"&&(h=!!l,v=void 0,c=void 0);var S=this._events&&this._events[i];if(S&&S.length&&this._listens(i,v,c)!==!1)return!0;if(h){for(var R in this._eventParents)if(this._eventParents[R].listens(i,l,c,h))return!0}return!1},_listens:function(i,l,c){if(!this._events)return!1;var h=this._events[i]||[];if(!l)return!!h.length;c===this&&(c=void 0);for(var v=0,S=h.length;v<S;v++)if(h[v].fn===l&&h[v].ctx===c)return v;return!1},once:function(i,l,c){if(typeof i=="object")for(var h in i)this._on(h,i[h],l,!0);else{i=y(i);for(var v=0,S=i.length;v<S;v++)this._on(i[v],l,c,!0)}return this},addEventParent:function(i){return this._eventParents=this._eventParents||{},this._eventParents[d(i)]=i,this},removeEventParent:function(i){return this._eventParents&&delete this._eventParents[d(i)],this},_propagateEvent:function(i){for(var l in this._eventParents)this._eventParents[l].fire(i.type,o({layer:i.target,propagatedFrom:i.target},i),!0)}};X.addEventListener=X.on,X.removeEventListener=X.clearAllEventListeners=X.off,X.addOneTimeEventListener=X.once,X.fireEvent=X.fire,X.hasEventListeners=X.listens;var D=V.extend(X);function z(i,l,c){this.x=c?Math.round(i):i,this.y=c?Math.round(l):l}var oe=Math.trunc||function(i){return i>0?Math.floor(i):Math.ceil(i)};z.prototype={clone:function(){return new z(this.x,this.y)},add:function(i){return this.clone()._add(q(i))},_add:function(i){return this.x+=i.x,this.y+=i.y,this},subtract:function(i){return this.clone()._subtract(q(i))},_subtract:function(i){return this.x-=i.x,this.y-=i.y,this},divideBy:function(i){return this.clone()._divideBy(i)},_divideBy:function(i){return this.x/=i,this.y/=i,this},multiplyBy:function(i){return this.clone()._multiplyBy(i)},_multiplyBy:function(i){return this.x*=i,this.y*=i,this},scaleBy:function(i){return new z(this.x*i.x,this.y*i.y)},unscaleBy:function(i){return new z(this.x/i.x,this.y/i.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=oe(this.x),this.y=oe(this.y),this},distanceTo:function(i){i=q(i);var l=i.x-this.x,c=i.y-this.y;return Math.sqrt(l*l+c*c)},equals:function(i){return i=q(i),i.x===this.x&&i.y===this.y},contains:function(i){return i=q(i),Math.abs(i.x)<=Math.abs(this.x)&&Math.abs(i.y)<=Math.abs(this.y)},toString:function(){return"Point("+_(this.x)+", "+_(this.y)+")"}};function q(i,l,c){return i instanceof z?i:k(i)?new z(i[0],i[1]):i==null?i:typeof i=="object"&&"x"in i&&"y"in i?new z(i.x,i.y):new z(i,l,c)}function O(i,l){if(i)for(var c=l?[i,l]:i,h=0,v=c.length;h<v;h++)this.extend(c[h])}O.prototype={extend:function(i){var l,c;if(!i)return this;if(i instanceof z||typeof i[0]=="number"||"x"in i)l=c=q(i);else if(i=N(i),l=i.min,c=i.max,!l||!c)return this;return!this.min&&!this.max?(this.min=l.clone(),this.max=c.clone()):(this.min.x=Math.min(l.x,this.min.x),this.max.x=Math.max(c.x,this.max.x),this.min.y=Math.min(l.y,this.min.y),this.max.y=Math.max(c.y,this.max.y)),this},getCenter:function(i){return q((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,i)},getBottomLeft:function(){return q(this.min.x,this.max.y)},getTopRight:function(){return q(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(i){var l,c;return typeof i[0]=="number"||i instanceof z?i=q(i):i=N(i),i instanceof O?(l=i.min,c=i.max):l=c=i,l.x>=this.min.x&&c.x<=this.max.x&&l.y>=this.min.y&&c.y<=this.max.y},intersects:function(i){i=N(i);var l=this.min,c=this.max,h=i.min,v=i.max,S=v.x>=l.x&&h.x<=c.x,R=v.y>=l.y&&h.y<=c.y;return S&&R},overlaps:function(i){i=N(i);var l=this.min,c=this.max,h=i.min,v=i.max,S=v.x>l.x&&h.x<c.x,R=v.y>l.y&&h.y<c.y;return S&&R},isValid:function(){return!!(this.min&&this.max)},pad:function(i){var l=this.min,c=this.max,h=Math.abs(l.x-c.x)*i,v=Math.abs(l.y-c.y)*i;return N(q(l.x-h,l.y-v),q(c.x+h,c.y+v))},equals:function(i){return i?(i=N(i),this.min.equals(i.getTopLeft())&&this.max.equals(i.getBottomRight())):!1}};function N(i,l){return!i||i instanceof O?i:new O(i,l)}function M(i,l){if(i)for(var c=l?[i,l]:i,h=0,v=c.length;h<v;h++)this.extend(c[h])}M.prototype={extend:function(i){var l=this._southWest,c=this._northEast,h,v;if(i instanceof ne)h=i,v=i;else if(i instanceof M){if(h=i._southWest,v=i._northEast,!h||!v)return this}else return i?this.extend(ue(i)||Q(i)):this;return!l&&!c?(this._southWest=new ne(h.lat,h.lng),this._northEast=new ne(v.lat,v.lng)):(l.lat=Math.min(h.lat,l.lat),l.lng=Math.min(h.lng,l.lng),c.lat=Math.max(v.lat,c.lat),c.lng=Math.max(v.lng,c.lng)),this},pad:function(i){var l=this._southWest,c=this._northEast,h=Math.abs(l.lat-c.lat)*i,v=Math.abs(l.lng-c.lng)*i;return new M(new ne(l.lat-h,l.lng-v),new ne(c.lat+h,c.lng+v))},getCenter:function(){return new ne((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new ne(this.getNorth(),this.getWest())},getSouthEast:function(){return new ne(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(i){typeof i[0]=="number"||i instanceof ne||"lat"in i?i=ue(i):i=Q(i);var l=this._southWest,c=this._northEast,h,v;return i instanceof M?(h=i.getSouthWest(),v=i.getNorthEast()):h=v=i,h.lat>=l.lat&&v.lat<=c.lat&&h.lng>=l.lng&&v.lng<=c.lng},intersects:function(i){i=Q(i);var l=this._southWest,c=this._northEast,h=i.getSouthWest(),v=i.getNorthEast(),S=v.lat>=l.lat&&h.lat<=c.lat,R=v.lng>=l.lng&&h.lng<=c.lng;return S&&R},overlaps:function(i){i=Q(i);var l=this._southWest,c=this._northEast,h=i.getSouthWest(),v=i.getNorthEast(),S=v.lat>l.lat&&h.lat<c.lat,R=v.lng>l.lng&&h.lng<c.lng;return S&&R},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(i,l){return i?(i=Q(i),this._southWest.equals(i.getSouthWest(),l)&&this._northEast.equals(i.getNorthEast(),l)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function Q(i,l){return i instanceof M?i:new M(i,l)}function ne(i,l,c){if(isNaN(i)||isNaN(l))throw new Error("Invalid LatLng object: ("+i+", "+l+")");this.lat=+i,this.lng=+l,c!==void 0&&(this.alt=+c)}ne.prototype={equals:function(i,l){if(!i)return!1;i=ue(i);var c=Math.max(Math.abs(this.lat-i.lat),Math.abs(this.lng-i.lng));return c<=(l===void 0?1e-9:l)},toString:function(i){return"LatLng("+_(this.lat,i)+", "+_(this.lng,i)+")"},distanceTo:function(i){return be.distance(this,ue(i))},wrap:function(){return be.wrapLatLng(this)},toBounds:function(i){var l=180*i/40075017,c=l/Math.cos(Math.PI/180*this.lat);return Q([this.lat-l,this.lng-c],[this.lat+l,this.lng+c])},clone:function(){return new ne(this.lat,this.lng,this.alt)}};function ue(i,l,c){return i instanceof ne?i:k(i)&&typeof i[0]!="object"?i.length===3?new ne(i[0],i[1],i[2]):i.length===2?new ne(i[0],i[1]):null:i==null?i:typeof i=="object"&&"lat"in i?new ne(i.lat,"lng"in i?i.lng:i.lon,i.alt):l===void 0?null:new ne(i,l,c)}var he={latLngToPoint:function(i,l){var c=this.projection.project(i),h=this.scale(l);return this.transformation._transform(c,h)},pointToLatLng:function(i,l){var c=this.scale(l),h=this.transformation.untransform(i,c);return this.projection.unproject(h)},project:function(i){return this.projection.project(i)},unproject:function(i){return this.projection.unproject(i)},scale:function(i){return 256*Math.pow(2,i)},zoom:function(i){return Math.log(i/256)/Math.LN2},getProjectedBounds:function(i){if(this.infinite)return null;var l=this.projection.bounds,c=this.scale(i),h=this.transformation.transform(l.min,c),v=this.transformation.transform(l.max,c);return new O(h,v)},infinite:!1,wrapLatLng:function(i){var l=this.wrapLng?p(i.lng,this.wrapLng,!0):i.lng,c=this.wrapLat?p(i.lat,this.wrapLat,!0):i.lat,h=i.alt;return new ne(c,l,h)},wrapLatLngBounds:function(i){var l=i.getCenter(),c=this.wrapLatLng(l),h=l.lat-c.lat,v=l.lng-c.lng;if(h===0&&v===0)return i;var S=i.getSouthWest(),R=i.getNorthEast(),j=new ne(S.lat-h,S.lng-v),$=new ne(R.lat-h,R.lng-v);return new M(j,$)}},be=o({},he,{wrapLng:[-180,180],R:6371e3,distance:function(i,l){var c=Math.PI/180,h=i.lat*c,v=l.lat*c,S=Math.sin((l.lat-i.lat)*c/2),R=Math.sin((l.lng-i.lng)*c/2),j=S*S+Math.cos(h)*Math.cos(v)*R*R,$=2*Math.atan2(Math.sqrt(j),Math.sqrt(1-j));return this.R*$}}),Je=6378137,Ze={R:Je,MAX_LATITUDE:85.0511287798,project:function(i){var l=Math.PI/180,c=this.MAX_LATITUDE,h=Math.max(Math.min(c,i.lat),-c),v=Math.sin(h*l);return new z(this.R*i.lng*l,this.R*Math.log((1+v)/(1-v))/2)},unproject:function(i){var l=180/Math.PI;return new ne((2*Math.atan(Math.exp(i.y/this.R))-Math.PI/2)*l,i.x*l/this.R)},bounds:function(){var i=Je*Math.PI;return new O([-i,-i],[i,i])}()};function Le(i,l,c,h){if(k(i)){this._a=i[0],this._b=i[1],this._c=i[2],this._d=i[3];return}this._a=i,this._b=l,this._c=c,this._d=h}Le.prototype={transform:function(i,l){return this._transform(i.clone(),l)},_transform:function(i,l){return l=l||1,i.x=l*(this._a*i.x+this._b),i.y=l*(this._c*i.y+this._d),i},untransform:function(i,l){return l=l||1,new z((i.x/l-this._b)/this._a,(i.y/l-this._d)/this._c)}};function ae(i,l,c,h){return new Le(i,l,c,h)}var me=o({},be,{code:"EPSG:3857",projection:Ze,transformation:function(){var i=.5/(Math.PI*Ze.R);return ae(i,.5,-i,.5)}()}),K=o({},me,{code:"EPSG:900913"});function ce(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function de(i,l){var c="",h,v,S,R,j,$;for(h=0,S=i.length;h<S;h++){for(j=i[h],v=0,R=j.length;v<R;v++)$=j[v],c+=(v?"L":"M")+$.x+" "+$.y;c+=l?pe.svg?"z":"x":""}return c||"M0 0"}var _e=document.documentElement.style,Se="ActiveXObject"in window,Ie=Se&&!document.addEventListener,Ue="msLaunchUri"in navigator&&!("documentMode"in document),Ye=Me("webkit"),tt=Me("android"),qt=Me("android 2")||Me("android 3"),oi=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),wo=tt&&Me("Google")&&oi<537&&!("AudioNode"in window),Pn=!!window.opera,Hn=!Ue&&Me("chrome"),ur=Me("gecko")&&!Ye&&!Pn&&!Se,ko=!Hn&&Me("safari"),H=Me("phantom"),Z="OTransition"in _e,ie=navigator.platform.indexOf("Win")===0,ge=Se&&"transition"in _e,ye="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!qt,ke="MozPerspective"in _e,Ce=!window.L_DISABLE_3D&&(ge||ye||ke)&&!Z&&!H,we=typeof orientation<"u"||Me("mobile"),xe=we&&Ye,Be=we&&ye,We=!window.PointerEvent&&window.MSPointerEvent,xt=!!(window.PointerEvent||We),ht="ontouchstart"in window||!!window.TouchEvent,_t=!window.L_NO_TOUCH&&(ht||xt),Kt=we&&Pn,So=we&&ur,pa=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,ii=function(){var i=!1;try{var l=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("testPassiveEventSupport",m,l),window.removeEventListener("testPassiveEventSupport",m,l)}catch{}return i}(),Vn=function(){return!!document.createElement("canvas").getContext}(),zr=!!(document.createElementNS&&ce("svg").createSVGRect),ma=!!zr&&function(){var i=document.createElement("div");return i.innerHTML="<svg/>",(i.firstChild&&i.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),_a=!zr&&function(){try{var i=document.createElement("div");i.innerHTML='<v:shape adj="1"/>';var l=i.firstChild;return l.style.behavior="url(#default#VML)",l&&typeof l.adj=="object"}catch{return!1}}(),ga=navigator.platform.indexOf("Mac")===0,ai=navigator.platform.indexOf("Linux")===0;function Me(i){return navigator.userAgent.toLowerCase().indexOf(i)>=0}var pe={ie:Se,ielt9:Ie,edge:Ue,webkit:Ye,android:tt,android23:qt,androidStock:wo,opera:Pn,chrome:Hn,gecko:ur,safari:ko,phantom:H,opera12:Z,win:ie,ie3d:ge,webkit3d:ye,gecko3d:ke,any3d:Ce,mobile:we,mobileWebkit:xe,mobileWebkit3d:Be,msPointer:We,pointer:xt,touch:_t,touchNative:ht,mobileOpera:Kt,mobileGecko:So,retina:pa,passiveEvents:ii,canvas:Vn,svg:zr,vml:_a,inlineSvg:ma,mac:ga,linux:ai},cr=pe.msPointer?"MSPointerDown":"pointerdown",si=pe.msPointer?"MSPointerMove":"pointermove",zt=pe.msPointer?"MSPointerUp":"pointerup",li=pe.msPointer?"MSPointerCancel":"pointercancel",ui={touchstart:cr,touchmove:si,touchend:zt,touchcancel:li},qs={touchstart:ak,touchmove:Ks,touchend:Ks,touchcancel:Ks},ci={},Vm=!1;function tk(i,l,c){return l==="touchstart"&&ik(),qs[l]?(c=qs[l].bind(this,c),i.addEventListener(ui[l],c,!1),c):(console.warn("wrong event specified:",l),m)}function nk(i,l,c){if(!ui[l]){console.warn("wrong event specified:",l);return}i.removeEventListener(ui[l],c,!1)}function rk(i){ci[i.pointerId]=i}function ok(i){ci[i.pointerId]&&(ci[i.pointerId]=i)}function Zm(i){delete ci[i.pointerId]}function ik(){Vm||(document.addEventListener(cr,rk,!0),document.addEventListener(si,ok,!0),document.addEventListener(zt,Zm,!0),document.addEventListener(li,Zm,!0),Vm=!0)}function Ks(i,l){if(l.pointerType!==(l.MSPOINTER_TYPE_MOUSE||"mouse")){l.touches=[];for(var c in ci)l.touches.push(ci[c]);l.changedTouches=[l],i(l)}}function ak(i,l){l.MSPOINTER_TYPE_TOUCH&&l.pointerType===l.MSPOINTER_TYPE_TOUCH&&Lt(l),Ks(i,l)}function sk(i){var l={},c,h;for(h in i)c=i[h],l[h]=c&&c.bind?c.bind(i):c;return i=l,l.type="dblclick",l.detail=2,l.isTrusted=!1,l._simulated=!0,l}var lk=200;function uk(i,l){i.addEventListener("dblclick",l);var c=0,h;function v(S){if(S.detail!==1){h=S.detail;return}if(!(S.pointerType==="mouse"||S.sourceCapabilities&&!S.sourceCapabilities.firesTouchEvents)){var R=Jm(S);if(!(R.some(function($){return $ instanceof HTMLLabelElement&&$.attributes.for})&&!R.some(function($){return $ instanceof HTMLInputElement||$ instanceof HTMLSelectElement}))){var j=Date.now();j-c<=lk?(h++,h===2&&l(sk(S))):h=1,c=j}}}return i.addEventListener("click",v),{dblclick:l,simDblclick:v}}function ck(i,l){i.removeEventListener("dblclick",l.dblclick),i.removeEventListener("click",l.simDblclick)}var rd=Js(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),va=Js(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),qm=va==="webkitTransition"||va==="OTransition"?va+"End":"transitionend";function Km(i){return typeof i=="string"?document.getElementById(i):i}function ya(i,l){var c=i.style[l]||i.currentStyle&&i.currentStyle[l];if((!c||c==="auto")&&document.defaultView){var h=document.defaultView.getComputedStyle(i,null);c=h?h[l]:null}return c==="auto"?null:c}function $e(i,l,c){var h=document.createElement(i);return h.className=l||"",c&&c.appendChild(h),h}function at(i){var l=i.parentNode;l&&l.removeChild(i)}function Qs(i){for(;i.firstChild;)i.removeChild(i.firstChild)}function di(i){var l=i.parentNode;l&&l.lastChild!==i&&l.appendChild(i)}function fi(i){var l=i.parentNode;l&&l.firstChild!==i&&l.insertBefore(i,l.firstChild)}function od(i,l){if(i.classList!==void 0)return i.classList.contains(l);var c=Gs(i);return c.length>0&&new RegExp("(^|\\s)"+l+"(\\s|$)").test(c)}function Oe(i,l){if(i.classList!==void 0)for(var c=y(l),h=0,v=c.length;h<v;h++)i.classList.add(c[h]);else if(!od(i,l)){var S=Gs(i);id(i,(S?S+" ":"")+l)}}function pt(i,l){i.classList!==void 0?i.classList.remove(l):id(i,b((" "+Gs(i)+" ").replace(" "+l+" "," ")))}function id(i,l){i.className.baseVal===void 0?i.className=l:i.className.baseVal=l}function Gs(i){return i.correspondingElement&&(i=i.correspondingElement),i.className.baseVal===void 0?i.className:i.className.baseVal}function hn(i,l){"opacity"in i.style?i.style.opacity=l:"filter"in i.style&&dk(i,l)}function dk(i,l){var c=!1,h="DXImageTransform.Microsoft.Alpha";try{c=i.filters.item(h)}catch{if(l===1)return}l=Math.round(l*100),c?(c.Enabled=l!==100,c.Opacity=l):i.style.filter+=" progid:"+h+"(opacity="+l+")"}function Js(i){for(var l=document.documentElement.style,c=0;c<i.length;c++)if(i[c]in l)return i[c];return!1}function Po(i,l,c){var h=l||new z(0,0);i.style[rd]=(pe.ie3d?"translate("+h.x+"px,"+h.y+"px)":"translate3d("+h.x+"px,"+h.y+"px,0)")+(c?" scale("+c+")":"")}function gt(i,l){i._leaflet_pos=l,pe.any3d?Po(i,l):(i.style.left=l.x+"px",i.style.top=l.y+"px")}function Co(i){return i._leaflet_pos||new z(0,0)}var ba,xa,ad;if("onselectstart"in document)ba=function(){Ee(window,"selectstart",Lt)},xa=function(){Xe(window,"selectstart",Lt)};else{var wa=Js(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);ba=function(){if(wa){var i=document.documentElement.style;ad=i[wa],i[wa]="none"}},xa=function(){wa&&(document.documentElement.style[wa]=ad,ad=void 0)}}function sd(){Ee(window,"dragstart",Lt)}function ld(){Xe(window,"dragstart",Lt)}var Ys,ud;function cd(i){for(;i.tabIndex===-1;)i=i.parentNode;i.style&&(Xs(),Ys=i,ud=i.style.outline,i.style.outline="none",Ee(window,"keydown",Xs))}function Xs(){Ys&&(Ys.style.outline=ud,Ys=void 0,ud=void 0,Xe(window,"keydown",Xs))}function Qm(i){do i=i.parentNode;while((!i.offsetWidth||!i.offsetHeight)&&i!==document.body);return i}function dd(i){var l=i.getBoundingClientRect();return{x:l.width/i.offsetWidth||1,y:l.height/i.offsetHeight||1,boundingClientRect:l}}var fk={__proto__:null,TRANSFORM:rd,TRANSITION:va,TRANSITION_END:qm,get:Km,getStyle:ya,create:$e,remove:at,empty:Qs,toFront:di,toBack:fi,hasClass:od,addClass:Oe,removeClass:pt,setClass:id,getClass:Gs,setOpacity:hn,testProp:Js,setTransform:Po,setPosition:gt,getPosition:Co,get disableTextSelection(){return ba},get enableTextSelection(){return xa},disableImageDrag:sd,enableImageDrag:ld,preventOutline:cd,restoreOutline:Xs,getSizedParentNode:Qm,getScale:dd};function Ee(i,l,c,h){if(l&&typeof l=="object")for(var v in l)hd(i,v,l[v],c);else{l=y(l);for(var S=0,R=l.length;S<R;S++)hd(i,l[S],c,h)}return this}var Zn="_leaflet_events";function Xe(i,l,c,h){if(arguments.length===1)Gm(i),delete i[Zn];else if(l&&typeof l=="object")for(var v in l)pd(i,v,l[v],c);else if(l=y(l),arguments.length===2)Gm(i,function(j){return P(l,j)!==-1});else for(var S=0,R=l.length;S<R;S++)pd(i,l[S],c,h);return this}function Gm(i,l){for(var c in i[Zn]){var h=c.split(/\d/)[0];(!l||l(h))&&pd(i,h,null,null,c)}}var fd={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function hd(i,l,c,h){var v=l+d(c)+(h?"_"+d(h):"");if(i[Zn]&&i[Zn][v])return this;var S=function(j){return c.call(h||i,j||window.event)},R=S;!pe.touchNative&&pe.pointer&&l.indexOf("touch")===0?S=tk(i,l,S):pe.touch&&l==="dblclick"?S=uk(i,S):"addEventListener"in i?l==="touchstart"||l==="touchmove"||l==="wheel"||l==="mousewheel"?i.addEventListener(fd[l]||l,S,pe.passiveEvents?{passive:!1}:!1):l==="mouseenter"||l==="mouseleave"?(S=function(j){j=j||window.event,_d(i,j)&&R(j)},i.addEventListener(fd[l],S,!1)):i.addEventListener(l,R,!1):i.attachEvent("on"+l,S),i[Zn]=i[Zn]||{},i[Zn][v]=S}function pd(i,l,c,h,v){v=v||l+d(c)+(h?"_"+d(h):"");var S=i[Zn]&&i[Zn][v];if(!S)return this;!pe.touchNative&&pe.pointer&&l.indexOf("touch")===0?nk(i,l,S):pe.touch&&l==="dblclick"?ck(i,S):"removeEventListener"in i?i.removeEventListener(fd[l]||l,S,!1):i.detachEvent("on"+l,S),i[Zn][v]=null}function Eo(i){return i.stopPropagation?i.stopPropagation():i.originalEvent?i.originalEvent._stopped=!0:i.cancelBubble=!0,this}function md(i){return hd(i,"wheel",Eo),this}function ka(i){return Ee(i,"mousedown touchstart dblclick contextmenu",Eo),i._leaflet_disable_click=!0,this}function Lt(i){return i.preventDefault?i.preventDefault():i.returnValue=!1,this}function Oo(i){return Lt(i),Eo(i),this}function Jm(i){if(i.composedPath)return i.composedPath();for(var l=[],c=i.target;c;)l.push(c),c=c.parentNode;return l}function Ym(i,l){if(!l)return new z(i.clientX,i.clientY);var c=dd(l),h=c.boundingClientRect;return new z((i.clientX-h.left)/c.x-l.clientLeft,(i.clientY-h.top)/c.y-l.clientTop)}var hk=pe.linux&&pe.chrome?window.devicePixelRatio:pe.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Xm(i){return pe.edge?i.wheelDeltaY/2:i.deltaY&&i.deltaMode===0?-i.deltaY/hk:i.deltaY&&i.deltaMode===1?-i.deltaY*20:i.deltaY&&i.deltaMode===2?-i.deltaY*60:i.deltaX||i.deltaZ?0:i.wheelDelta?(i.wheelDeltaY||i.wheelDelta)/2:i.detail&&Math.abs(i.detail)<32765?-i.detail*20:i.detail?i.detail/-32765*60:0}function _d(i,l){var c=l.relatedTarget;if(!c)return!0;try{for(;c&&c!==i;)c=c.parentNode}catch{return!1}return c!==i}var pk={__proto__:null,on:Ee,off:Xe,stopPropagation:Eo,disableScrollPropagation:md,disableClickPropagation:ka,preventDefault:Lt,stop:Oo,getPropagationPath:Jm,getMousePosition:Ym,getWheelDelta:Xm,isExternalTarget:_d,addListener:Ee,removeListener:Xe},e_=D.extend({run:function(i,l,c,h){this.stop(),this._el=i,this._inProgress=!0,this._duration=c||.25,this._easeOutPower=1/Math.max(h||.5,.2),this._startPos=Co(i),this._offset=l.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=G(this._animate,this),this._step()},_step:function(i){var l=+new Date-this._startTime,c=this._duration*1e3;l<c?this._runFrame(this._easeOut(l/c),i):(this._runFrame(1),this._complete())},_runFrame:function(i,l){var c=this._startPos.add(this._offset.multiplyBy(i));l&&c._round(),gt(this._el,c),this.fire("step")},_complete:function(){J(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(i){return 1-Math.pow(1-i,this._easeOutPower)}}),De=D.extend({options:{crs:me,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(i,l){l=w(this,l),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(i),this._initLayout(),this._onResize=s(this._onResize,this),this._initEvents(),l.maxBounds&&this.setMaxBounds(l.maxBounds),l.zoom!==void 0&&(this._zoom=this._limitZoom(l.zoom)),l.center&&l.zoom!==void 0&&this.setView(ue(l.center),l.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=va&&pe.any3d&&!pe.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),Ee(this._proxy,qm,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(i,l,c){if(l=l===void 0?this._zoom:this._limitZoom(l),i=this._limitCenter(ue(i),l,this.options.maxBounds),c=c||{},this._stop(),this._loaded&&!c.reset&&c!==!0){c.animate!==void 0&&(c.zoom=o({animate:c.animate},c.zoom),c.pan=o({animate:c.animate,duration:c.duration},c.pan));var h=this._zoom!==l?this._tryAnimatedZoom&&this._tryAnimatedZoom(i,l,c.zoom):this._tryAnimatedPan(i,c.pan);if(h)return clearTimeout(this._sizeTimer),this}return this._resetView(i,l,c.pan&&c.pan.noMoveStart),this},setZoom:function(i,l){return this._loaded?this.setView(this.getCenter(),i,{zoom:l}):(this._zoom=i,this)},zoomIn:function(i,l){return i=i||(pe.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+i,l)},zoomOut:function(i,l){return i=i||(pe.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-i,l)},setZoomAround:function(i,l,c){var h=this.getZoomScale(l),v=this.getSize().divideBy(2),S=i instanceof z?i:this.latLngToContainerPoint(i),R=S.subtract(v).multiplyBy(1-1/h),j=this.containerPointToLatLng(v.add(R));return this.setView(j,l,{zoom:c})},_getBoundsCenterZoom:function(i,l){l=l||{},i=i.getBounds?i.getBounds():Q(i);var c=q(l.paddingTopLeft||l.padding||[0,0]),h=q(l.paddingBottomRight||l.padding||[0,0]),v=this.getBoundsZoom(i,!1,c.add(h));if(v=typeof l.maxZoom=="number"?Math.min(l.maxZoom,v):v,v===1/0)return{center:i.getCenter(),zoom:v};var S=h.subtract(c).divideBy(2),R=this.project(i.getSouthWest(),v),j=this.project(i.getNorthEast(),v),$=this.unproject(R.add(j).divideBy(2).add(S),v);return{center:$,zoom:v}},fitBounds:function(i,l){if(i=Q(i),!i.isValid())throw new Error("Bounds are not valid.");var c=this._getBoundsCenterZoom(i,l);return this.setView(c.center,c.zoom,l)},fitWorld:function(i){return this.fitBounds([[-90,-180],[90,180]],i)},panTo:function(i,l){return this.setView(i,this._zoom,{pan:l})},panBy:function(i,l){if(i=q(i).round(),l=l||{},!i.x&&!i.y)return this.fire("moveend");if(l.animate!==!0&&!this.getSize().contains(i))return this._resetView(this.unproject(this.project(this.getCenter()).add(i)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new e_,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),l.noMoveStart||this.fire("movestart"),l.animate!==!1){Oe(this._mapPane,"leaflet-pan-anim");var c=this._getMapPanePos().subtract(i).round();this._panAnim.run(this._mapPane,c,l.duration||.25,l.easeLinearity)}else this._rawPanBy(i),this.fire("move").fire("moveend");return this},flyTo:function(i,l,c){if(c=c||{},c.animate===!1||!pe.any3d)return this.setView(i,l,c);this._stop();var h=this.project(this.getCenter()),v=this.project(i),S=this.getSize(),R=this._zoom;i=ue(i),l=l===void 0?R:l;var j=Math.max(S.x,S.y),$=j*this.getZoomScale(R,l),re=v.distanceTo(h)||1,fe=1.42,Pe=fe*fe;function Te(vt){var fl=vt?-1:1,nS=vt?$:j,rS=$*$-j*j+fl*Pe*Pe*re*re,oS=2*nS*Pe*re,Ed=rS/oS,N_=Math.sqrt(Ed*Ed+1)-Ed,iS=N_<1e-9?-18:Math.log(N_);return iS}function mn(vt){return(Math.exp(vt)-Math.exp(-vt))/2}function To(vt){return(Math.exp(vt)+Math.exp(-vt))/2}function dl(vt){return mn(vt)/To(vt)}var Br=Te(0);function Cd(vt){return j*(To(Br)/To(Br+fe*vt))}function Yk(vt){return j*(To(Br)*dl(Br+fe*vt)-mn(Br))/Pe}function Xk(vt){return 1-Math.pow(1-vt,1.5)}var eS=Date.now(),A_=(Te(1)-Br)/fe,tS=c.duration?1e3*c.duration:1e3*A_*.8;function z_(){var vt=(Date.now()-eS)/tS,fl=Xk(vt)*A_;vt<=1?(this._flyToFrame=G(z_,this),this._move(this.unproject(h.add(v.subtract(h).multiplyBy(Yk(fl)/re)),R),this.getScaleZoom(j/Cd(fl),R),{flyTo:!0})):this._move(i,l)._moveEnd(!0)}return this._moveStart(!0,c.noMoveStart),z_.call(this),this},flyToBounds:function(i,l){var c=this._getBoundsCenterZoom(i,l);return this.flyTo(c.center,c.zoom,l)},setMaxBounds:function(i){return i=Q(i),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),i.isValid()?(this.options.maxBounds=i,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(i){var l=this.options.minZoom;return this.options.minZoom=i,this._loaded&&l!==i&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(i):this},setMaxZoom:function(i){var l=this.options.maxZoom;return this.options.maxZoom=i,this._loaded&&l!==i&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(i):this},panInsideBounds:function(i,l){this._enforcingBounds=!0;var c=this.getCenter(),h=this._limitCenter(c,this._zoom,Q(i));return c.equals(h)||this.panTo(h,l),this._enforcingBounds=!1,this},panInside:function(i,l){l=l||{};var c=q(l.paddingTopLeft||l.padding||[0,0]),h=q(l.paddingBottomRight||l.padding||[0,0]),v=this.project(this.getCenter()),S=this.project(i),R=this.getPixelBounds(),j=N([R.min.add(c),R.max.subtract(h)]),$=j.getSize();if(!j.contains(S)){this._enforcingBounds=!0;var re=S.subtract(j.getCenter()),fe=j.extend(S).getSize().subtract($);v.x+=re.x<0?-fe.x:fe.x,v.y+=re.y<0?-fe.y:fe.y,this.panTo(this.unproject(v),l),this._enforcingBounds=!1}return this},invalidateSize:function(i){if(!this._loaded)return this;i=o({animate:!1,pan:!0},i===!0?{animate:!0}:i);var l=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var c=this.getSize(),h=l.divideBy(2).round(),v=c.divideBy(2).round(),S=h.subtract(v);return!S.x&&!S.y?this:(i.animate&&i.pan?this.panBy(S):(i.pan&&this._rawPanBy(S),this.fire("move"),i.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(s(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:l,newSize:c}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(i){if(i=this._locateOptions=o({timeout:1e4,watch:!1},i),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var l=s(this._handleGeolocationResponse,this),c=s(this._handleGeolocationError,this);return i.watch?this._locationWatchId=navigator.geolocation.watchPosition(l,c,i):navigator.geolocation.getCurrentPosition(l,c,i),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(i){if(this._container._leaflet_id){var l=i.code,c=i.message||(l===1?"permission denied":l===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:l,message:"Geolocation error: "+c+"."})}},_handleGeolocationResponse:function(i){if(this._container._leaflet_id){var l=i.coords.latitude,c=i.coords.longitude,h=new ne(l,c),v=h.toBounds(i.coords.accuracy*2),S=this._locateOptions;if(S.setView){var R=this.getBoundsZoom(v);this.setView(h,S.maxZoom?Math.min(R,S.maxZoom):R)}var j={latlng:h,bounds:v,timestamp:i.timestamp};for(var $ in i.coords)typeof i.coords[$]=="number"&&(j[$]=i.coords[$]);this.fire("locationfound",j)}},addHandler:function(i,l){if(!l)return this;var c=this[i]=new l(this);return this._handlers.push(c),this.options[i]&&c.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),at(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(J(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var i;for(i in this._layers)this._layers[i].remove();for(i in this._panes)at(this._panes[i]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(i,l){var c="leaflet-pane"+(i?" leaflet-"+i.replace("Pane","")+"-pane":""),h=$e("div",c,l||this._mapPane);return i&&(this._panes[i]=h),h},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var i=this.getPixelBounds(),l=this.unproject(i.getBottomLeft()),c=this.unproject(i.getTopRight());return new M(l,c)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(i,l,c){i=Q(i),c=q(c||[0,0]);var h=this.getZoom()||0,v=this.getMinZoom(),S=this.getMaxZoom(),R=i.getNorthWest(),j=i.getSouthEast(),$=this.getSize().subtract(c),re=N(this.project(j,h),this.project(R,h)).getSize(),fe=pe.any3d?this.options.zoomSnap:1,Pe=$.x/re.x,Te=$.y/re.y,mn=l?Math.max(Pe,Te):Math.min(Pe,Te);return h=this.getScaleZoom(mn,h),fe&&(h=Math.round(h/(fe/100))*(fe/100),h=l?Math.ceil(h/fe)*fe:Math.floor(h/fe)*fe),Math.max(v,Math.min(S,h))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new z(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(i,l){var c=this._getTopLeftPoint(i,l);return new O(c,c.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(i){return this.options.crs.getProjectedBounds(i===void 0?this.getZoom():i)},getPane:function(i){return typeof i=="string"?this._panes[i]:i},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(i,l){var c=this.options.crs;return l=l===void 0?this._zoom:l,c.scale(i)/c.scale(l)},getScaleZoom:function(i,l){var c=this.options.crs;l=l===void 0?this._zoom:l;var h=c.zoom(i*c.scale(l));return isNaN(h)?1/0:h},project:function(i,l){return l=l===void 0?this._zoom:l,this.options.crs.latLngToPoint(ue(i),l)},unproject:function(i,l){return l=l===void 0?this._zoom:l,this.options.crs.pointToLatLng(q(i),l)},layerPointToLatLng:function(i){var l=q(i).add(this.getPixelOrigin());return this.unproject(l)},latLngToLayerPoint:function(i){var l=this.project(ue(i))._round();return l._subtract(this.getPixelOrigin())},wrapLatLng:function(i){return this.options.crs.wrapLatLng(ue(i))},wrapLatLngBounds:function(i){return this.options.crs.wrapLatLngBounds(Q(i))},distance:function(i,l){return this.options.crs.distance(ue(i),ue(l))},containerPointToLayerPoint:function(i){return q(i).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(i){return q(i).add(this._getMapPanePos())},containerPointToLatLng:function(i){var l=this.containerPointToLayerPoint(q(i));return this.layerPointToLatLng(l)},latLngToContainerPoint:function(i){return this.layerPointToContainerPoint(this.latLngToLayerPoint(ue(i)))},mouseEventToContainerPoint:function(i){return Ym(i,this._container)},mouseEventToLayerPoint:function(i){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(i))},mouseEventToLatLng:function(i){return this.layerPointToLatLng(this.mouseEventToLayerPoint(i))},_initContainer:function(i){var l=this._container=Km(i);if(l){if(l._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");Ee(l,"scroll",this._onScroll,this),this._containerId=d(l)},_initLayout:function(){var i=this._container;this._fadeAnimated=this.options.fadeAnimation&&pe.any3d,Oe(i,"leaflet-container"+(pe.touch?" leaflet-touch":"")+(pe.retina?" leaflet-retina":"")+(pe.ielt9?" leaflet-oldie":"")+(pe.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var l=ya(i,"position");l!=="absolute"&&l!=="relative"&&l!=="fixed"&&l!=="sticky"&&(i.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var i=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),gt(this._mapPane,new z(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Oe(i.markerPane,"leaflet-zoom-hide"),Oe(i.shadowPane,"leaflet-zoom-hide"))},_resetView:function(i,l,c){gt(this._mapPane,new z(0,0));var h=!this._loaded;this._loaded=!0,l=this._limitZoom(l),this.fire("viewprereset");var v=this._zoom!==l;this._moveStart(v,c)._move(i,l)._moveEnd(v),this.fire("viewreset"),h&&this.fire("load")},_moveStart:function(i,l){return i&&this.fire("zoomstart"),l||this.fire("movestart"),this},_move:function(i,l,c,h){l===void 0&&(l=this._zoom);var v=this._zoom!==l;return this._zoom=l,this._lastCenter=i,this._pixelOrigin=this._getNewPixelOrigin(i),h?c&&c.pinch&&this.fire("zoom",c):((v||c&&c.pinch)&&this.fire("zoom",c),this.fire("move",c)),this},_moveEnd:function(i){return i&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return J(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(i){gt(this._mapPane,this._getMapPanePos().subtract(i))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(i){this._targets={},this._targets[d(this._container)]=this;var l=i?Xe:Ee;l(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&l(window,"resize",this._onResize,this),pe.any3d&&this.options.transform3DLimit&&(i?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){J(this._resizeRequest),this._resizeRequest=G(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var i=this._getMapPanePos();Math.max(Math.abs(i.x),Math.abs(i.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(i,l){for(var c=[],h,v=l==="mouseout"||l==="mouseover",S=i.target||i.srcElement,R=!1;S;){if(h=this._targets[d(S)],h&&(l==="click"||l==="preclick")&&this._draggableMoved(h)){R=!0;break}if(h&&h.listens(l,!0)&&(v&&!_d(S,i)||(c.push(h),v))||S===this._container)break;S=S.parentNode}return!c.length&&!R&&!v&&this.listens(l,!0)&&(c=[this]),c},_isClickDisabled:function(i){for(;i&&i!==this._container;){if(i._leaflet_disable_click)return!0;i=i.parentNode}},_handleDOMEvent:function(i){var l=i.target||i.srcElement;if(!(!this._loaded||l._leaflet_disable_events||i.type==="click"&&this._isClickDisabled(l))){var c=i.type;c==="mousedown"&&cd(l),this._fireDOMEvent(i,c)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(i,l,c){if(i.type==="click"){var h=o({},i);h.type="preclick",this._fireDOMEvent(h,h.type,c)}var v=this._findEventTargets(i,l);if(c){for(var S=[],R=0;R<c.length;R++)c[R].listens(l,!0)&&S.push(c[R]);v=S.concat(v)}if(v.length){l==="contextmenu"&&Lt(i);var j=v[0],$={originalEvent:i};if(i.type!=="keypress"&&i.type!=="keydown"&&i.type!=="keyup"){var re=j.getLatLng&&(!j._radius||j._radius<=10);$.containerPoint=re?this.latLngToContainerPoint(j.getLatLng()):this.mouseEventToContainerPoint(i),$.layerPoint=this.containerPointToLayerPoint($.containerPoint),$.latlng=re?j.getLatLng():this.layerPointToLatLng($.layerPoint)}for(R=0;R<v.length;R++)if(v[R].fire(l,$,!0),$.originalEvent._stopped||v[R].options.bubblingMouseEvents===!1&&P(this._mouseEvents,l)!==-1)return}},_draggableMoved:function(i){return i=i.dragging&&i.dragging.enabled()?i:this,i.dragging&&i.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var i=0,l=this._handlers.length;i<l;i++)this._handlers[i].disable()},whenReady:function(i,l){return this._loaded?i.call(l||this,{target:this}):this.on("load",i,l),this},_getMapPanePos:function(){return Co(this._mapPane)||new z(0,0)},_moved:function(){var i=this._getMapPanePos();return i&&!i.equals([0,0])},_getTopLeftPoint:function(i,l){var c=i&&l!==void 0?this._getNewPixelOrigin(i,l):this.getPixelOrigin();return c.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(i,l){var c=this.getSize()._divideBy(2);return this.project(i,l)._subtract(c)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(i,l,c){var h=this._getNewPixelOrigin(c,l);return this.project(i,l)._subtract(h)},_latLngBoundsToNewLayerBounds:function(i,l,c){var h=this._getNewPixelOrigin(c,l);return N([this.project(i.getSouthWest(),l)._subtract(h),this.project(i.getNorthWest(),l)._subtract(h),this.project(i.getSouthEast(),l)._subtract(h),this.project(i.getNorthEast(),l)._subtract(h)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(i){return this.latLngToLayerPoint(i).subtract(this._getCenterLayerPoint())},_limitCenter:function(i,l,c){if(!c)return i;var h=this.project(i,l),v=this.getSize().divideBy(2),S=new O(h.subtract(v),h.add(v)),R=this._getBoundsOffset(S,c,l);return Math.abs(R.x)<=1&&Math.abs(R.y)<=1?i:this.unproject(h.add(R),l)},_limitOffset:function(i,l){if(!l)return i;var c=this.getPixelBounds(),h=new O(c.min.add(i),c.max.add(i));return i.add(this._getBoundsOffset(h,l))},_getBoundsOffset:function(i,l,c){var h=N(this.project(l.getNorthEast(),c),this.project(l.getSouthWest(),c)),v=h.min.subtract(i.min),S=h.max.subtract(i.max),R=this._rebound(v.x,-S.x),j=this._rebound(v.y,-S.y);return new z(R,j)},_rebound:function(i,l){return i+l>0?Math.round(i-l)/2:Math.max(0,Math.ceil(i))-Math.max(0,Math.floor(l))},_limitZoom:function(i){var l=this.getMinZoom(),c=this.getMaxZoom(),h=pe.any3d?this.options.zoomSnap:1;return h&&(i=Math.round(i/h)*h),Math.max(l,Math.min(c,i))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){pt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(i,l){var c=this._getCenterOffset(i)._trunc();return(l&&l.animate)!==!0&&!this.getSize().contains(c)?!1:(this.panBy(c,l),!0)},_createAnimProxy:function(){var i=this._proxy=$e("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(i),this.on("zoomanim",function(l){var c=rd,h=this._proxy.style[c];Po(this._proxy,this.project(l.center,l.zoom),this.getZoomScale(l.zoom,1)),h===this._proxy.style[c]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){at(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var i=this.getCenter(),l=this.getZoom();Po(this._proxy,this.project(i,l),this.getZoomScale(l,1))},_catchTransitionEnd:function(i){this._animatingZoom&&i.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(i,l,c){if(this._animatingZoom)return!0;if(c=c||{},!this._zoomAnimated||c.animate===!1||this._nothingToAnimate()||Math.abs(l-this._zoom)>this.options.zoomAnimationThreshold)return!1;var h=this.getZoomScale(l),v=this._getCenterOffset(i)._divideBy(1-1/h);return c.animate!==!0&&!this.getSize().contains(v)?!1:(G(function(){this._moveStart(!0,!1)._animateZoom(i,l,!0)},this),!0)},_animateZoom:function(i,l,c,h){this._mapPane&&(c&&(this._animatingZoom=!0,this._animateToCenter=i,this._animateToZoom=l,Oe(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:i,zoom:l,noUpdate:h}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(s(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&pt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function mk(i,l){return new De(i,l)}var Cn=V.extend({options:{position:"topright"},initialize:function(i){w(this,i)},getPosition:function(){return this.options.position},setPosition:function(i){var l=this._map;return l&&l.removeControl(this),this.options.position=i,l&&l.addControl(this),this},getContainer:function(){return this._container},addTo:function(i){this.remove(),this._map=i;var l=this._container=this.onAdd(i),c=this.getPosition(),h=i._controlCorners[c];return Oe(l,"leaflet-control"),c.indexOf("bottom")!==-1?h.insertBefore(l,h.firstChild):h.appendChild(l),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(at(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(i){this._map&&i&&i.screenX>0&&i.screenY>0&&this._map.getContainer().focus()}}),Sa=function(i){return new Cn(i)};De.include({addControl:function(i){return i.addTo(this),this},removeControl:function(i){return i.remove(),this},_initControlPos:function(){var i=this._controlCorners={},l="leaflet-",c=this._controlContainer=$e("div",l+"control-container",this._container);function h(v,S){var R=l+v+" "+l+S;i[v+S]=$e("div",R,c)}h("top","left"),h("top","right"),h("bottom","left"),h("bottom","right")},_clearControlPos:function(){for(var i in this._controlCorners)at(this._controlCorners[i]);at(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var t_=Cn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(i,l,c,h){return c<h?-1:h<c?1:0}},initialize:function(i,l,c){w(this,c),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1;for(var h in i)this._addLayer(i[h],h);for(h in l)this._addLayer(l[h],h,!0)},onAdd:function(i){this._initLayout(),this._update(),this._map=i,i.on("zoomend",this._checkDisabledLayers,this);for(var l=0;l<this._layers.length;l++)this._layers[l].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(i){return Cn.prototype.addTo.call(this,i),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(i,l){return this._addLayer(i,l),this._map?this._update():this},addOverlay:function(i,l){return this._addLayer(i,l,!0),this._map?this._update():this},removeLayer:function(i){i.off("add remove",this._onLayerChange,this);var l=this._getLayer(d(i));return l&&this._layers.splice(this._layers.indexOf(l),1),this._map?this._update():this},expand:function(){Oe(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var i=this._map.getSize().y-(this._container.offsetTop+50);return i<this._section.clientHeight?(Oe(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=i+"px"):pt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return pt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var i="leaflet-control-layers",l=this._container=$e("div",i),c=this.options.collapsed;l.setAttribute("aria-haspopup",!0),ka(l),md(l);var h=this._section=$e("section",i+"-list");c&&(this._map.on("click",this.collapse,this),Ee(l,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var v=this._layersLink=$e("a",i+"-toggle",l);v.href="#",v.title="Layers",v.setAttribute("role","button"),Ee(v,{keydown:function(S){S.keyCode===13&&this._expandSafely()},click:function(S){Lt(S),this._expandSafely()}},this),c||this.expand(),this._baseLayersList=$e("div",i+"-base",h),this._separator=$e("div",i+"-separator",h),this._overlaysList=$e("div",i+"-overlays",h),l.appendChild(h)},_getLayer:function(i){for(var l=0;l<this._layers.length;l++)if(this._layers[l]&&d(this._layers[l].layer)===i)return this._layers[l]},_addLayer:function(i,l,c){this._map&&i.on("add remove",this._onLayerChange,this),this._layers.push({layer:i,name:l,overlay:c}),this.options.sortLayers&&this._layers.sort(s(function(h,v){return this.options.sortFunction(h.layer,v.layer,h.name,v.name)},this)),this.options.autoZIndex&&i.setZIndex&&(this._lastZIndex++,i.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Qs(this._baseLayersList),Qs(this._overlaysList),this._layerControlInputs=[];var i,l,c,h,v=0;for(c=0;c<this._layers.length;c++)h=this._layers[c],this._addItem(h),l=l||h.overlay,i=i||!h.overlay,v+=h.overlay?0:1;return this.options.hideSingleBase&&(i=i&&v>1,this._baseLayersList.style.display=i?"":"none"),this._separator.style.display=l&&i?"":"none",this},_onLayerChange:function(i){this._handlingClick||this._update();var l=this._getLayer(d(i.target)),c=l.overlay?i.type==="add"?"overlayadd":"overlayremove":i.type==="add"?"baselayerchange":null;c&&this._map.fire(c,l)},_createRadioElement:function(i,l){var c='<input type="radio" class="leaflet-control-layers-selector" name="'+i+'"'+(l?' checked="checked"':"")+"/>",h=document.createElement("div");return h.innerHTML=c,h.firstChild},_addItem:function(i){var l=document.createElement("label"),c=this._map.hasLayer(i.layer),h;i.overlay?(h=document.createElement("input"),h.type="checkbox",h.className="leaflet-control-layers-selector",h.defaultChecked=c):h=this._createRadioElement("leaflet-base-layers_"+d(this),c),this._layerControlInputs.push(h),h.layerId=d(i.layer),Ee(h,"click",this._onInputClick,this);var v=document.createElement("span");v.innerHTML=" "+i.name;var S=document.createElement("span");l.appendChild(S),S.appendChild(h),S.appendChild(v);var R=i.overlay?this._overlaysList:this._baseLayersList;return R.appendChild(l),this._checkDisabledLayers(),l},_onInputClick:function(){var i=this._layerControlInputs,l,c,h=[],v=[];this._handlingClick=!0;for(var S=i.length-1;S>=0;S--)l=i[S],c=this._getLayer(l.layerId).layer,l.checked?h.push(c):l.checked||v.push(c);for(S=0;S<v.length;S++)this._map.hasLayer(v[S])&&this._map.removeLayer(v[S]);for(S=0;S<h.length;S++)this._map.hasLayer(h[S])||this._map.addLayer(h[S]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var i=this._layerControlInputs,l,c,h=this._map.getZoom(),v=i.length-1;v>=0;v--)l=i[v],c=this._getLayer(l.layerId).layer,l.disabled=c.options.minZoom!==void 0&&h<c.options.minZoom||c.options.maxZoom!==void 0&&h>c.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var i=this._section;Ee(i,"click",Lt),this.expand(),setTimeout(function(){Xe(i,"click",Lt)})}}),_k=function(i,l,c){return new t_(i,l,c)},gd=Cn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(i){var l="leaflet-control-zoom",c=$e("div",l+" leaflet-bar"),h=this.options;return this._zoomInButton=this._createButton(h.zoomInText,h.zoomInTitle,l+"-in",c,this._zoomIn),this._zoomOutButton=this._createButton(h.zoomOutText,h.zoomOutTitle,l+"-out",c,this._zoomOut),this._updateDisabled(),i.on("zoomend zoomlevelschange",this._updateDisabled,this),c},onRemove:function(i){i.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(i){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(i.shiftKey?3:1))},_zoomOut:function(i){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(i.shiftKey?3:1))},_createButton:function(i,l,c,h,v){var S=$e("a",c,h);return S.innerHTML=i,S.href="#",S.title=l,S.setAttribute("role","button"),S.setAttribute("aria-label",l),ka(S),Ee(S,"click",Oo),Ee(S,"click",v,this),Ee(S,"click",this._refocusOnMap,this),S},_updateDisabled:function(){var i=this._map,l="leaflet-disabled";pt(this._zoomInButton,l),pt(this._zoomOutButton,l),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||i._zoom===i.getMinZoom())&&(Oe(this._zoomOutButton,l),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||i._zoom===i.getMaxZoom())&&(Oe(this._zoomInButton,l),this._zoomInButton.setAttribute("aria-disabled","true"))}});De.mergeOptions({zoomControl:!0}),De.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new gd,this.addControl(this.zoomControl))});var gk=function(i){return new gd(i)},n_=Cn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(i){var l="leaflet-control-scale",c=$e("div",l),h=this.options;return this._addScales(h,l+"-line",c),i.on(h.updateWhenIdle?"moveend":"move",this._update,this),i.whenReady(this._update,this),c},onRemove:function(i){i.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(i,l,c){i.metric&&(this._mScale=$e("div",l,c)),i.imperial&&(this._iScale=$e("div",l,c))},_update:function(){var i=this._map,l=i.getSize().y/2,c=i.distance(i.containerPointToLatLng([0,l]),i.containerPointToLatLng([this.options.maxWidth,l]));this._updateScales(c)},_updateScales:function(i){this.options.metric&&i&&this._updateMetric(i),this.options.imperial&&i&&this._updateImperial(i)},_updateMetric:function(i){var l=this._getRoundNum(i),c=l<1e3?l+" m":l/1e3+" km";this._updateScale(this._mScale,c,l/i)},_updateImperial:function(i){var l=i*3.2808399,c,h,v;l>5280?(c=l/5280,h=this._getRoundNum(c),this._updateScale(this._iScale,h+" mi",h/c)):(v=this._getRoundNum(l),this._updateScale(this._iScale,v+" ft",v/l))},_updateScale:function(i,l,c){i.style.width=Math.round(this.options.maxWidth*c)+"px",i.innerHTML=l},_getRoundNum:function(i){var l=Math.pow(10,(Math.floor(i)+"").length-1),c=i/l;return c=c>=10?10:c>=5?5:c>=3?3:c>=2?2:1,l*c}}),vk=function(i){return new n_(i)},yk='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',vd=Cn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(pe.inlineSvg?yk+" ":"")+"Leaflet</a>"},initialize:function(i){w(this,i),this._attributions={}},onAdd:function(i){i.attributionControl=this,this._container=$e("div","leaflet-control-attribution"),ka(this._container);for(var l in i._layers)i._layers[l].getAttribution&&this.addAttribution(i._layers[l].getAttribution());return this._update(),i.on("layeradd",this._addAttribution,this),this._container},onRemove:function(i){i.off("layeradd",this._addAttribution,this)},_addAttribution:function(i){i.layer.getAttribution&&(this.addAttribution(i.layer.getAttribution()),i.layer.once("remove",function(){this.removeAttribution(i.layer.getAttribution())},this))},setPrefix:function(i){return this.options.prefix=i,this._update(),this},addAttribution:function(i){return i?(this._attributions[i]||(this._attributions[i]=0),this._attributions[i]++,this._update(),this):this},removeAttribution:function(i){return i?(this._attributions[i]&&(this._attributions[i]--,this._update()),this):this},_update:function(){if(this._map){var i=[];for(var l in this._attributions)this._attributions[l]&&i.push(l);var c=[];this.options.prefix&&c.push(this.options.prefix),i.length&&c.push(i.join(", ")),this._container.innerHTML=c.join(' <span aria-hidden="true">|</span> ')}}});De.mergeOptions({attributionControl:!0}),De.addInitHook(function(){this.options.attributionControl&&new vd().addTo(this)});var bk=function(i){return new vd(i)};Cn.Layers=t_,Cn.Zoom=gd,Cn.Scale=n_,Cn.Attribution=vd,Sa.layers=_k,Sa.zoom=gk,Sa.scale=vk,Sa.attribution=bk;var qn=V.extend({initialize:function(i){this._map=i},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});qn.addTo=function(i,l){return i.addHandler(l,this),this};var xk={Events:X},r_=pe.touch?"touchstart mousedown":"mousedown",Nr=D.extend({options:{clickTolerance:3},initialize:function(i,l,c,h){w(this,h),this._element=i,this._dragStartTarget=l||i,this._preventOutline=c},enable:function(){this._enabled||(Ee(this._dragStartTarget,r_,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Nr._dragging===this&&this.finishDrag(!0),Xe(this._dragStartTarget,r_,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(i){if(this._enabled&&(this._moved=!1,!od(this._element,"leaflet-zoom-anim"))){if(i.touches&&i.touches.length!==1){Nr._dragging===this&&this.finishDrag();return}if(!(Nr._dragging||i.shiftKey||i.which!==1&&i.button!==1&&!i.touches)&&(Nr._dragging=this,this._preventOutline&&cd(this._element),sd(),ba(),!this._moving)){this.fire("down");var l=i.touches?i.touches[0]:i,c=Qm(this._element);this._startPoint=new z(l.clientX,l.clientY),this._startPos=Co(this._element),this._parentScale=dd(c);var h=i.type==="mousedown";Ee(document,h?"mousemove":"touchmove",this._onMove,this),Ee(document,h?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(i){if(this._enabled){if(i.touches&&i.touches.length>1){this._moved=!0;return}var l=i.touches&&i.touches.length===1?i.touches[0]:i,c=new z(l.clientX,l.clientY)._subtract(this._startPoint);!c.x&&!c.y||Math.abs(c.x)+Math.abs(c.y)<this.options.clickTolerance||(c.x/=this._parentScale.x,c.y/=this._parentScale.y,Lt(i),this._moved||(this.fire("dragstart"),this._moved=!0,Oe(document.body,"leaflet-dragging"),this._lastTarget=i.target||i.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Oe(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(c),this._moving=!0,this._lastEvent=i,this._updatePosition())}},_updatePosition:function(){var i={originalEvent:this._lastEvent};this.fire("predrag",i),gt(this._element,this._newPos),this.fire("drag",i)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(i){pt(document.body,"leaflet-dragging"),this._lastTarget&&(pt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Xe(document,"mousemove touchmove",this._onMove,this),Xe(document,"mouseup touchend touchcancel",this._onUp,this),ld(),xa(),this._moved&&this._moving&&this.fire("dragend",{noInertia:i,distance:this._newPos.distanceTo(this._startPos)}),this._moving=!1,Nr._dragging=!1}});function o_(i,l){if(!l||!i.length)return i.slice();var c=l*l;return i=Sk(i,c),i=kk(i,c),i}function i_(i,l,c){return Math.sqrt(Pa(i,l,c,!0))}function wk(i,l,c){return Pa(i,l,c)}function kk(i,l){var c=i.length,h=typeof Uint8Array!=void 0+""?Uint8Array:Array,v=new h(c);v[0]=v[c-1]=1,yd(i,v,l,0,c-1);var S,R=[];for(S=0;S<c;S++)v[S]&&R.push(i[S]);return R}function yd(i,l,c,h,v){var S=0,R,j,$;for(j=h+1;j<=v-1;j++)$=Pa(i[j],i[h],i[v],!0),$>S&&(R=j,S=$);S>c&&(l[R]=1,yd(i,l,c,h,R),yd(i,l,c,R,v))}function Sk(i,l){for(var c=[i[0]],h=1,v=0,S=i.length;h<S;h++)Pk(i[h],i[v])>l&&(c.push(i[h]),v=h);return v<S-1&&c.push(i[S-1]),c}var a_;function s_(i,l,c,h,v){var S=h?a_:Lo(i,c),R=Lo(l,c),j,$,re;for(a_=R;;){if(!(S|R))return[i,l];if(S&R)return!1;j=S||R,$=el(i,l,j,c,v),re=Lo($,c),j===S?(i=$,S=re):(l=$,R=re)}}function el(i,l,c,h,v){var S=l.x-i.x,R=l.y-i.y,j=h.min,$=h.max,re,fe;return c&8?(re=i.x+S*($.y-i.y)/R,fe=$.y):c&4?(re=i.x+S*(j.y-i.y)/R,fe=j.y):c&2?(re=$.x,fe=i.y+R*($.x-i.x)/S):c&1&&(re=j.x,fe=i.y+R*(j.x-i.x)/S),new z(re,fe,v)}function Lo(i,l){var c=0;return i.x<l.min.x?c|=1:i.x>l.max.x&&(c|=2),i.y<l.min.y?c|=4:i.y>l.max.y&&(c|=8),c}function Pk(i,l){var c=l.x-i.x,h=l.y-i.y;return c*c+h*h}function Pa(i,l,c,h){var v=l.x,S=l.y,R=c.x-v,j=c.y-S,$=R*R+j*j,re;return $>0&&(re=((i.x-v)*R+(i.y-S)*j)/$,re>1?(v=c.x,S=c.y):re>0&&(v+=R*re,S+=j*re)),R=i.x-v,j=i.y-S,h?R*R+j*j:new z(v,S)}function pn(i){return!k(i[0])||typeof i[0][0]!="object"&&typeof i[0][0]<"u"}function l_(i){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),pn(i)}function u_(i,l){var c,h,v,S,R,j,$,re;if(!i||i.length===0)throw new Error("latlngs not passed");pn(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var fe=[];for(var Pe in i)fe.push(l.project(ue(i[Pe])));var Te=fe.length;for(c=0,h=0;c<Te-1;c++)h+=fe[c].distanceTo(fe[c+1])/2;if(h===0)re=fe[0];else for(c=0,S=0;c<Te-1;c++)if(R=fe[c],j=fe[c+1],v=R.distanceTo(j),S+=v,S>h){$=(S-h)/v,re=[j.x-$*(j.x-R.x),j.y-$*(j.y-R.y)];break}return l.unproject(q(re))}var Ck={__proto__:null,simplify:o_,pointToSegmentDistance:i_,closestPointOnSegment:wk,clipSegment:s_,_getEdgeIntersection:el,_getBitCode:Lo,_sqClosestPointOnSegment:Pa,isFlat:pn,_flat:l_,polylineCenter:u_};function c_(i,l,c){var h,v=[1,4,2,8],S,R,j,$,re,fe,Pe,Te;for(S=0,fe=i.length;S<fe;S++)i[S]._code=Lo(i[S],l);for(j=0;j<4;j++){for(Pe=v[j],h=[],S=0,fe=i.length,R=fe-1;S<fe;R=S++)$=i[S],re=i[R],$._code&Pe?re._code&Pe||(Te=el(re,$,Pe,l,c),Te._code=Lo(Te,l),h.push(Te)):(re._code&Pe&&(Te=el(re,$,Pe,l,c),Te._code=Lo(Te,l),h.push(Te)),h.push($));i=h}return i}function d_(i,l){var c,h,v,S,R,j,$,re,fe;if(!i||i.length===0)throw new Error("latlngs not passed");pn(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var Pe=[];for(var Te in i)Pe.push(l.project(ue(i[Te])));var mn=Pe.length;for(j=$=re=0,c=0,h=mn-1;c<mn;h=c++)v=Pe[c],S=Pe[h],R=v.y*S.x-S.y*v.x,$+=(v.x+S.x)*R,re+=(v.y+S.y)*R,j+=R*3;return j===0?fe=Pe[0]:fe=[$/j,re/j],l.unproject(q(fe))}var Ek={__proto__:null,clipPolygon:c_,polygonCenter:d_},bd={project:function(i){return new z(i.lng,i.lat)},unproject:function(i){return new ne(i.y,i.x)},bounds:new O([-180,-90],[180,90])},xd={R:6378137,R_MINOR:6356752314245179e-9,bounds:new O([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(i){var l=Math.PI/180,c=this.R,h=i.lat*l,v=this.R_MINOR/c,S=Math.sqrt(1-v*v),R=S*Math.sin(h),j=Math.tan(Math.PI/4-h/2)/Math.pow((1-R)/(1+R),S/2);return h=-c*Math.log(Math.max(j,1e-10)),new z(i.lng*l*c,h)},unproject:function(i){for(var l=180/Math.PI,c=this.R,h=this.R_MINOR/c,v=Math.sqrt(1-h*h),S=Math.exp(-i.y/c),R=Math.PI/2-2*Math.atan(S),j=0,$=.1,re;j<15&&Math.abs($)>1e-7;j++)re=v*Math.sin(R),re=Math.pow((1-re)/(1+re),v/2),$=Math.PI/2-2*Math.atan(S*re)-R,R+=$;return new ne(R*l,i.x*l/c)}},Ok={__proto__:null,LonLat:bd,Mercator:xd,SphericalMercator:Ze},Lk=o({},be,{code:"EPSG:3395",projection:xd,transformation:function(){var i=.5/(Math.PI*xd.R);return ae(i,.5,-i,.5)}()}),f_=o({},be,{code:"EPSG:4326",projection:bd,transformation:ae(1/180,1,-1/180,.5)}),Tk=o({},he,{projection:bd,transformation:ae(1,0,-1,0),scale:function(i){return Math.pow(2,i)},zoom:function(i){return Math.log(i)/Math.LN2},distance:function(i,l){var c=l.lng-i.lng,h=l.lat-i.lat;return Math.sqrt(c*c+h*h)},infinite:!0});he.Earth=be,he.EPSG3395=Lk,he.EPSG3857=me,he.EPSG900913=K,he.EPSG4326=f_,he.Simple=Tk;var En=D.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(i){return i.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(i){return i&&i.removeLayer(this),this},getPane:function(i){return this._map.getPane(i?this.options[i]||i:this.options.pane)},addInteractiveTarget:function(i){return this._map._targets[d(i)]=this,this},removeInteractiveTarget:function(i){return delete this._map._targets[d(i)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(i){var l=i.target;if(l.hasLayer(this)){if(this._map=l,this._zoomAnimated=l._zoomAnimated,this.getEvents){var c=this.getEvents();l.on(c,this),this.once("remove",function(){l.off(c,this)},this)}this.onAdd(l),this.fire("add"),l.fire("layeradd",{layer:this})}}});De.include({addLayer:function(i){if(!i._layerAdd)throw new Error("The provided object is not a Layer.");var l=d(i);return this._layers[l]?this:(this._layers[l]=i,i._mapToAdd=this,i.beforeAdd&&i.beforeAdd(this),this.whenReady(i._layerAdd,i),this)},removeLayer:function(i){var l=d(i);return this._layers[l]?(this._loaded&&i.onRemove(this),delete this._layers[l],this._loaded&&(this.fire("layerremove",{layer:i}),i.fire("remove")),i._map=i._mapToAdd=null,this):this},hasLayer:function(i){return d(i)in this._layers},eachLayer:function(i,l){for(var c in this._layers)i.call(l,this._layers[c]);return this},_addLayers:function(i){i=i?k(i)?i:[i]:[];for(var l=0,c=i.length;l<c;l++)this.addLayer(i[l])},_addZoomLimit:function(i){(!isNaN(i.options.maxZoom)||!isNaN(i.options.minZoom))&&(this._zoomBoundLayers[d(i)]=i,this._updateZoomLevels())},_removeZoomLimit:function(i){var l=d(i);this._zoomBoundLayers[l]&&(delete this._zoomBoundLayers[l],this._updateZoomLevels())},_updateZoomLevels:function(){var i=1/0,l=-1/0,c=this._getZoomSpan();for(var h in this._zoomBoundLayers){var v=this._zoomBoundLayers[h].options;i=v.minZoom===void 0?i:Math.min(i,v.minZoom),l=v.maxZoom===void 0?l:Math.max(l,v.maxZoom)}this._layersMaxZoom=l===-1/0?void 0:l,this._layersMinZoom=i===1/0?void 0:i,c!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var hi=En.extend({initialize:function(i,l){w(this,l),this._layers={};var c,h;if(i)for(c=0,h=i.length;c<h;c++)this.addLayer(i[c])},addLayer:function(i){var l=this.getLayerId(i);return this._layers[l]=i,this._map&&this._map.addLayer(i),this},removeLayer:function(i){var l=i in this._layers?i:this.getLayerId(i);return this._map&&this._layers[l]&&this._map.removeLayer(this._layers[l]),delete this._layers[l],this},hasLayer:function(i){var l=typeof i=="number"?i:this.getLayerId(i);return l in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(i){var l=Array.prototype.slice.call(arguments,1),c,h;for(c in this._layers)h=this._layers[c],h[i]&&h[i].apply(h,l);return this},onAdd:function(i){this.eachLayer(i.addLayer,i)},onRemove:function(i){this.eachLayer(i.removeLayer,i)},eachLayer:function(i,l){for(var c in this._layers)i.call(l,this._layers[c]);return this},getLayer:function(i){return this._layers[i]},getLayers:function(){var i=[];return this.eachLayer(i.push,i),i},setZIndex:function(i){return this.invoke("setZIndex",i)},getLayerId:function(i){return d(i)}}),Rk=function(i,l){return new hi(i,l)},dr=hi.extend({addLayer:function(i){return this.hasLayer(i)?this:(i.addEventParent(this),hi.prototype.addLayer.call(this,i),this.fire("layeradd",{layer:i}))},removeLayer:function(i){return this.hasLayer(i)?(i in this._layers&&(i=this._layers[i]),i.removeEventParent(this),hi.prototype.removeLayer.call(this,i),this.fire("layerremove",{layer:i})):this},setStyle:function(i){return this.invoke("setStyle",i)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var i=new M;for(var l in this._layers){var c=this._layers[l];i.extend(c.getBounds?c.getBounds():c.getLatLng())}return i}}),Ak=function(i,l){return new dr(i,l)},pi=V.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(i){w(this,i)},createIcon:function(i){return this._createIcon("icon",i)},createShadow:function(i){return this._createIcon("shadow",i)},_createIcon:function(i,l){var c=this._getIconUrl(i);if(!c){if(i==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var h=this._createImg(c,l&&l.tagName==="IMG"?l:null);return this._setIconStyles(h,i),(this.options.crossOrigin||this.options.crossOrigin==="")&&(h.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),h},_setIconStyles:function(i,l){var c=this.options,h=c[l+"Size"];typeof h=="number"&&(h=[h,h]);var v=q(h),S=q(l==="shadow"&&c.shadowAnchor||c.iconAnchor||v&&v.divideBy(2,!0));i.className="leaflet-marker-"+l+" "+(c.className||""),S&&(i.style.marginLeft=-S.x+"px",i.style.marginTop=-S.y+"px"),v&&(i.style.width=v.x+"px",i.style.height=v.y+"px")},_createImg:function(i,l){return l=l||document.createElement("img"),l.src=i,l},_getIconUrl:function(i){return pe.retina&&this.options[i+"RetinaUrl"]||this.options[i+"Url"]}});function zk(i){return new pi(i)}var Ca=pi.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(i){return typeof Ca.imagePath!="string"&&(Ca.imagePath=this._detectIconPath()),(this.options.imagePath||Ca.imagePath)+pi.prototype._getIconUrl.call(this,i)},_stripUrl:function(i){var l=function(c,h,v){var S=h.exec(c);return S&&S[v]};return i=l(i,/^url\((['"])?(.+)\1\)$/,2),i&&l(i,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var i=$e("div","leaflet-default-icon-path",document.body),l=ya(i,"background-image")||ya(i,"backgroundImage");if(document.body.removeChild(i),l=this._stripUrl(l),l)return l;var c=document.querySelector('link[href$="leaflet.css"]');return c?c.href.substring(0,c.href.length-11-1):""}}),h_=qn.extend({initialize:function(i){this._marker=i},addHooks:function(){var i=this._marker._icon;this._draggable||(this._draggable=new Nr(i,i,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Oe(i,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&pt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(i){var l=this._marker,c=l._map,h=this._marker.options.autoPanSpeed,v=this._marker.options.autoPanPadding,S=Co(l._icon),R=c.getPixelBounds(),j=c.getPixelOrigin(),$=N(R.min._subtract(j).add(v),R.max._subtract(j).subtract(v));if(!$.contains(S)){var re=q((Math.max($.max.x,S.x)-$.max.x)/(R.max.x-$.max.x)-(Math.min($.min.x,S.x)-$.min.x)/(R.min.x-$.min.x),(Math.max($.max.y,S.y)-$.max.y)/(R.max.y-$.max.y)-(Math.min($.min.y,S.y)-$.min.y)/(R.min.y-$.min.y)).multiplyBy(h);c.panBy(re,{animate:!1}),this._draggable._newPos._add(re),this._draggable._startPos._add(re),gt(l._icon,this._draggable._newPos),this._onDrag(i),this._panRequest=G(this._adjustPan.bind(this,i))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(i){this._marker.options.autoPan&&(J(this._panRequest),this._panRequest=G(this._adjustPan.bind(this,i)))},_onDrag:function(i){var l=this._marker,c=l._shadow,h=Co(l._icon),v=l._map.layerPointToLatLng(h);c&&gt(c,h),l._latlng=v,i.latlng=v,i.oldLatLng=this._oldLatLng,l.fire("move",i).fire("drag",i)},_onDragEnd:function(i){J(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",i)}}),tl=En.extend({options:{icon:new Ca,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(i,l){w(this,l),this._latlng=ue(i)},onAdd:function(i){this._zoomAnimated=this._zoomAnimated&&i.options.markerZoomAnimation,this._zoomAnimated&&i.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(i){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&i.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(i){var l=this._latlng;return this._latlng=ue(i),this.update(),this.fire("move",{oldLatLng:l,latlng:this._latlng})},setZIndexOffset:function(i){return this.options.zIndexOffset=i,this.update()},getIcon:function(){return this.options.icon},setIcon:function(i){return this.options.icon=i,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var i=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(i)}return this},_initIcon:function(){var i=this.options,l="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),c=i.icon.createIcon(this._icon),h=!1;c!==this._icon&&(this._icon&&this._removeIcon(),h=!0,i.title&&(c.title=i.title),c.tagName==="IMG"&&(c.alt=i.alt||"")),Oe(c,l),i.keyboard&&(c.tabIndex="0",c.setAttribute("role","button")),this._icon=c,i.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Ee(c,"focus",this._panOnFocus,this);var v=i.icon.createShadow(this._shadow),S=!1;v!==this._shadow&&(this._removeShadow(),S=!0),v&&(Oe(v,l),v.alt=""),this._shadow=v,i.opacity<1&&this._updateOpacity(),h&&this.getPane().appendChild(this._icon),this._initInteraction(),v&&S&&this.getPane(i.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Xe(this._icon,"focus",this._panOnFocus,this),at(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&at(this._shadow),this._shadow=null},_setPos:function(i){this._icon&&gt(this._icon,i),this._shadow&&gt(this._shadow,i),this._zIndex=i.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(i){this._icon&&(this._icon.style.zIndex=this._zIndex+i)},_animateZoom:function(i){var l=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center).round();this._setPos(l)},_initInteraction:function(){if(this.options.interactive&&(Oe(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),h_)){var i=this.options.draggable;this.dragging&&(i=this.dragging.enabled(),this.dragging.disable()),this.dragging=new h_(this),i&&this.dragging.enable()}},setOpacity:function(i){return this.options.opacity=i,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var i=this.options.opacity;this._icon&&hn(this._icon,i),this._shadow&&hn(this._shadow,i)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var i=this._map;if(i){var l=this.options.icon.options,c=l.iconSize?q(l.iconSize):q(0,0),h=l.iconAnchor?q(l.iconAnchor):q(0,0);i.panInside(this._latlng,{paddingTopLeft:h,paddingBottomRight:c.subtract(h)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Nk(i,l){return new tl(i,l)}var Ir=En.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(i){this._renderer=i.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(i){return w(this,i),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&i&&Object.prototype.hasOwnProperty.call(i,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),nl=Ir.extend({options:{fill:!0,radius:10},initialize:function(i,l){w(this,l),this._latlng=ue(i),this._radius=this.options.radius},setLatLng:function(i){var l=this._latlng;return this._latlng=ue(i),this.redraw(),this.fire("move",{oldLatLng:l,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(i){return this.options.radius=this._radius=i,this.redraw()},getRadius:function(){return this._radius},setStyle:function(i){var l=i&&i.radius||this._radius;return Ir.prototype.setStyle.call(this,i),this.setRadius(l),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var i=this._radius,l=this._radiusY||i,c=this._clickTolerance(),h=[i+c,l+c];this._pxBounds=new O(this._point.subtract(h),this._point.add(h))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(i){return i.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Ik(i,l){return new nl(i,l)}var wd=nl.extend({initialize:function(i,l,c){if(typeof l=="number"&&(l=o({},c,{radius:l})),w(this,l),this._latlng=ue(i),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(i){return this._mRadius=i,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var i=[this._radius,this._radiusY||this._radius];return new M(this._map.layerPointToLatLng(this._point.subtract(i)),this._map.layerPointToLatLng(this._point.add(i)))},setStyle:Ir.prototype.setStyle,_project:function(){var i=this._latlng.lng,l=this._latlng.lat,c=this._map,h=c.options.crs;if(h.distance===be.distance){var v=Math.PI/180,S=this._mRadius/be.R/v,R=c.project([l+S,i]),j=c.project([l-S,i]),$=R.add(j).divideBy(2),re=c.unproject($).lat,fe=Math.acos((Math.cos(S*v)-Math.sin(l*v)*Math.sin(re*v))/(Math.cos(l*v)*Math.cos(re*v)))/v;(isNaN(fe)||fe===0)&&(fe=S/Math.cos(Math.PI/180*l)),this._point=$.subtract(c.getPixelOrigin()),this._radius=isNaN(fe)?0:$.x-c.project([re,i-fe]).x,this._radiusY=$.y-R.y}else{var Pe=h.unproject(h.project(this._latlng).subtract([this._mRadius,0]));this._point=c.latLngToLayerPoint(this._latlng),this._radius=this._point.x-c.latLngToLayerPoint(Pe).x}this._updateBounds()}});function Bk(i,l,c){return new wd(i,l,c)}var fr=Ir.extend({options:{smoothFactor:1,noClip:!1},initialize:function(i,l){w(this,l),this._setLatLngs(i)},getLatLngs:function(){return this._latlngs},setLatLngs:function(i){return this._setLatLngs(i),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(i){for(var l=1/0,c=null,h=Pa,v,S,R=0,j=this._parts.length;R<j;R++)for(var $=this._parts[R],re=1,fe=$.length;re<fe;re++){v=$[re-1],S=$[re];var Pe=h(i,v,S,!0);Pe<l&&(l=Pe,c=h(i,v,S))}return c&&(c.distance=Math.sqrt(l)),c},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return u_(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(i,l){return l=l||this._defaultShape(),i=ue(i),l.push(i),this._bounds.extend(i),this.redraw()},_setLatLngs:function(i){this._bounds=new M,this._latlngs=this._convertLatLngs(i)},_defaultShape:function(){return pn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(i){for(var l=[],c=pn(i),h=0,v=i.length;h<v;h++)c?(l[h]=ue(i[h]),this._bounds.extend(l[h])):l[h]=this._convertLatLngs(i[h]);return l},_project:function(){var i=new O;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,i),this._bounds.isValid()&&i.isValid()&&(this._rawPxBounds=i,this._updateBounds())},_updateBounds:function(){var i=this._clickTolerance(),l=new z(i,i);this._rawPxBounds&&(this._pxBounds=new O([this._rawPxBounds.min.subtract(l),this._rawPxBounds.max.add(l)]))},_projectLatlngs:function(i,l,c){var h=i[0]instanceof ne,v=i.length,S,R;if(h){for(R=[],S=0;S<v;S++)R[S]=this._map.latLngToLayerPoint(i[S]),c.extend(R[S]);l.push(R)}else for(S=0;S<v;S++)this._projectLatlngs(i[S],l,c)},_clipPoints:function(){var i=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}var l=this._parts,c,h,v,S,R,j,$;for(c=0,v=0,S=this._rings.length;c<S;c++)for($=this._rings[c],h=0,R=$.length;h<R-1;h++)j=s_($[h],$[h+1],i,h,!0),j&&(l[v]=l[v]||[],l[v].push(j[0]),(j[1]!==$[h+1]||h===R-2)&&(l[v].push(j[1]),v++))}},_simplifyPoints:function(){for(var i=this._parts,l=this.options.smoothFactor,c=0,h=i.length;c<h;c++)i[c]=o_(i[c],l)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(i,l){var c,h,v,S,R,j,$=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(c=0,S=this._parts.length;c<S;c++)for(j=this._parts[c],h=0,R=j.length,v=R-1;h<R;v=h++)if(!(!l&&h===0)&&i_(i,j[v],j[h])<=$)return!0;return!1}});function Mk(i,l){return new fr(i,l)}fr._flat=l_;var mi=fr.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return d_(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(i){var l=fr.prototype._convertLatLngs.call(this,i),c=l.length;return c>=2&&l[0]instanceof ne&&l[0].equals(l[c-1])&&l.pop(),l},_setLatLngs:function(i){fr.prototype._setLatLngs.call(this,i),pn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return pn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var i=this._renderer._bounds,l=this.options.weight,c=new z(l,l);if(i=new O(i.min.subtract(c),i.max.add(c)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}for(var h=0,v=this._rings.length,S;h<v;h++)S=c_(this._rings[h],i,!0),S.length&&this._parts.push(S)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(i){var l=!1,c,h,v,S,R,j,$,re;if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(S=0,$=this._parts.length;S<$;S++)for(c=this._parts[S],R=0,re=c.length,j=re-1;R<re;j=R++)h=c[R],v=c[j],h.y>i.y!=v.y>i.y&&i.x<(v.x-h.x)*(i.y-h.y)/(v.y-h.y)+h.x&&(l=!l);return l||fr.prototype._containsPoint.call(this,i,!0)}});function Dk(i,l){return new mi(i,l)}var hr=dr.extend({initialize:function(i,l){w(this,l),this._layers={},i&&this.addData(i)},addData:function(i){var l=k(i)?i:i.features,c,h,v;if(l){for(c=0,h=l.length;c<h;c++)v=l[c],(v.geometries||v.geometry||v.features||v.coordinates)&&this.addData(v);return this}var S=this.options;if(S.filter&&!S.filter(i))return this;var R=rl(i,S);return R?(R.feature=al(i),R.defaultOptions=R.options,this.resetStyle(R),S.onEachFeature&&S.onEachFeature(i,R),this.addLayer(R)):this},resetStyle:function(i){return i===void 0?this.eachLayer(this.resetStyle,this):(i.options=o({},i.defaultOptions),this._setLayerStyle(i,this.options.style),this)},setStyle:function(i){return this.eachLayer(function(l){this._setLayerStyle(l,i)},this)},_setLayerStyle:function(i,l){i.setStyle&&(typeof l=="function"&&(l=l(i.feature)),i.setStyle(l))}});function rl(i,l){var c=i.type==="Feature"?i.geometry:i,h=c?c.coordinates:null,v=[],S=l&&l.pointToLayer,R=l&&l.coordsToLatLng||kd,j,$,re,fe;if(!h&&!c)return null;switch(c.type){case"Point":return j=R(h),p_(S,i,j,l);case"MultiPoint":for(re=0,fe=h.length;re<fe;re++)j=R(h[re]),v.push(p_(S,i,j,l));return new dr(v);case"LineString":case"MultiLineString":return $=ol(h,c.type==="LineString"?0:1,R),new fr($,l);case"Polygon":case"MultiPolygon":return $=ol(h,c.type==="Polygon"?1:2,R),new mi($,l);case"GeometryCollection":for(re=0,fe=c.geometries.length;re<fe;re++){var Pe=rl({geometry:c.geometries[re],type:"Feature",properties:i.properties},l);Pe&&v.push(Pe)}return new dr(v);case"FeatureCollection":for(re=0,fe=c.features.length;re<fe;re++){var Te=rl(c.features[re],l);Te&&v.push(Te)}return new dr(v);default:throw new Error("Invalid GeoJSON object.")}}function p_(i,l,c,h){return i?i(l,c):new tl(c,h&&h.markersInheritOptions&&h)}function kd(i){return new ne(i[1],i[0],i[2])}function ol(i,l,c){for(var h=[],v=0,S=i.length,R;v<S;v++)R=l?ol(i[v],l-1,c):(c||kd)(i[v]),h.push(R);return h}function Sd(i,l){return i=ue(i),i.alt!==void 0?[_(i.lng,l),_(i.lat,l),_(i.alt,l)]:[_(i.lng,l),_(i.lat,l)]}function il(i,l,c,h){for(var v=[],S=0,R=i.length;S<R;S++)v.push(l?il(i[S],pn(i[S])?0:l-1,c,h):Sd(i[S],h));return!l&&c&&v.push(v[0].slice()),v}function _i(i,l){return i.feature?o({},i.feature,{geometry:l}):al(l)}function al(i){return i.type==="Feature"||i.type==="FeatureCollection"?i:{type:"Feature",properties:{},geometry:i}}var Pd={toGeoJSON:function(i){return _i(this,{type:"Point",coordinates:Sd(this.getLatLng(),i)})}};tl.include(Pd),wd.include(Pd),nl.include(Pd),fr.include({toGeoJSON:function(i){var l=!pn(this._latlngs),c=il(this._latlngs,l?1:0,!1,i);return _i(this,{type:(l?"Multi":"")+"LineString",coordinates:c})}}),mi.include({toGeoJSON:function(i){var l=!pn(this._latlngs),c=l&&!pn(this._latlngs[0]),h=il(this._latlngs,c?2:l?1:0,!0,i);return l||(h=[h]),_i(this,{type:(c?"Multi":"")+"Polygon",coordinates:h})}}),hi.include({toMultiPoint:function(i){var l=[];return this.eachLayer(function(c){l.push(c.toGeoJSON(i).geometry.coordinates)}),_i(this,{type:"MultiPoint",coordinates:l})},toGeoJSON:function(i){var l=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(l==="MultiPoint")return this.toMultiPoint(i);var c=l==="GeometryCollection",h=[];return this.eachLayer(function(v){if(v.toGeoJSON){var S=v.toGeoJSON(i);if(c)h.push(S.geometry);else{var R=al(S);R.type==="FeatureCollection"?h.push.apply(h,R.features):h.push(R)}}}),c?_i(this,{geometries:h,type:"GeometryCollection"}):{type:"FeatureCollection",features:h}}});function m_(i,l){return new hr(i,l)}var jk=m_,sl=En.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(i,l,c){this._url=i,this._bounds=Q(l),w(this,c)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Oe(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){at(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(i){return this.options.opacity=i,this._image&&this._updateOpacity(),this},setStyle:function(i){return i.opacity&&this.setOpacity(i.opacity),this},bringToFront:function(){return this._map&&di(this._image),this},bringToBack:function(){return this._map&&fi(this._image),this},setUrl:function(i){return this._url=i,this._image&&(this._image.src=i),this},setBounds:function(i){return this._bounds=Q(i),this._map&&this._reset(),this},getEvents:function(){var i={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var i=this._url.tagName==="IMG",l=this._image=i?this._url:$e("img");if(Oe(l,"leaflet-image-layer"),this._zoomAnimated&&Oe(l,"leaflet-zoom-animated"),this.options.className&&Oe(l,this.options.className),l.onselectstart=m,l.onmousemove=m,l.onload=s(this.fire,this,"load"),l.onerror=s(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),i){this._url=l.src;return}l.src=this._url,l.alt=this.options.alt},_animateZoom:function(i){var l=this._map.getZoomScale(i.zoom),c=this._map._latLngBoundsToNewLayerBounds(this._bounds,i.zoom,i.center).min;Po(this._image,c,l)},_reset:function(){var i=this._image,l=new O(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),c=l.getSize();gt(i,l.min),i.style.width=c.x+"px",i.style.height=c.y+"px"},_updateOpacity:function(){hn(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var i=this.options.errorOverlayUrl;i&&this._url!==i&&(this._url=i,this._image.src=i)},getCenter:function(){return this._bounds.getCenter()}}),Fk=function(i,l,c){return new sl(i,l,c)},__=sl.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var i=this._url.tagName==="VIDEO",l=this._image=i?this._url:$e("video");if(Oe(l,"leaflet-image-layer"),this._zoomAnimated&&Oe(l,"leaflet-zoom-animated"),this.options.className&&Oe(l,this.options.className),l.onselectstart=m,l.onmousemove=m,l.onloadeddata=s(this.fire,this,"load"),i){for(var c=l.getElementsByTagName("source"),h=[],v=0;v<c.length;v++)h.push(c[v].src);this._url=c.length>0?h:[l.src];return}k(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(l.style,"objectFit")&&(l.style.objectFit="fill"),l.autoplay=!!this.options.autoplay,l.loop=!!this.options.loop,l.muted=!!this.options.muted,l.playsInline=!!this.options.playsInline;for(var S=0;S<this._url.length;S++){var R=$e("source");R.src=this._url[S],l.appendChild(R)}}});function Uk(i,l,c){return new __(i,l,c)}var g_=sl.extend({_initImage:function(){var i=this._image=this._url;Oe(i,"leaflet-image-layer"),this._zoomAnimated&&Oe(i,"leaflet-zoom-animated"),this.options.className&&Oe(i,this.options.className),i.onselectstart=m,i.onmousemove=m}});function $k(i,l,c){return new g_(i,l,c)}var Kn=En.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(i,l){i&&(i instanceof ne||k(i))?(this._latlng=ue(i),w(this,l)):(w(this,i),this._source=l),this.options.content&&(this._content=this.options.content)},openOn:function(i){return i=arguments.length?i:this._source._map,i.hasLayer(this)||i.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(i){return this._map?this.close():(arguments.length?this._source=i:i=this._source,this._prepareOpen(),this.openOn(i._map)),this},onAdd:function(i){this._zoomAnimated=i._zoomAnimated,this._container||this._initLayout(),i._fadeAnimated&&hn(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),i._fadeAnimated&&hn(this._container,1),this.bringToFront(),this.options.interactive&&(Oe(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(i){i._fadeAnimated?(hn(this._container,0),this._removeTimeout=setTimeout(s(at,void 0,this._container),200)):at(this._container),this.options.interactive&&(pt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(i){return this._latlng=ue(i),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(i){return this._content=i,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var i={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&di(this._container),this},bringToBack:function(){return this._map&&fi(this._container),this},_prepareOpen:function(i){var l=this._source;if(!l._map)return!1;if(l instanceof dr){l=null;var c=this._source._layers;for(var h in c)if(c[h]._map){l=c[h];break}if(!l)return!1;this._source=l}if(!i)if(l.getCenter)i=l.getCenter();else if(l.getLatLng)i=l.getLatLng();else if(l.getBounds)i=l.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(i),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var i=this._contentNode,l=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof l=="string")i.innerHTML=l;else{for(;i.hasChildNodes();)i.removeChild(i.firstChild);i.appendChild(l)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var i=this._map.latLngToLayerPoint(this._latlng),l=q(this.options.offset),c=this._getAnchor();this._zoomAnimated?gt(this._container,i.add(c)):l=l.add(i).add(c);var h=this._containerBottom=-l.y,v=this._containerLeft=-Math.round(this._containerWidth/2)+l.x;this._container.style.bottom=h+"px",this._container.style.left=v+"px"}},_getAnchor:function(){return[0,0]}});De.include({_initOverlay:function(i,l,c,h){var v=l;return v instanceof i||(v=new i(h).setContent(l)),c&&v.setLatLng(c),v}}),En.include({_initOverlay:function(i,l,c,h){var v=c;return v instanceof i?(w(v,h),v._source=this):(v=l&&!h?l:new i(h,this),v.setContent(c)),v}});var ll=Kn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(i){return i=arguments.length?i:this._source._map,!i.hasLayer(this)&&i._popup&&i._popup.options.autoClose&&i.removeLayer(i._popup),i._popup=this,Kn.prototype.openOn.call(this,i)},onAdd:function(i){Kn.prototype.onAdd.call(this,i),i.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Ir||this._source.on("preclick",Eo))},onRemove:function(i){Kn.prototype.onRemove.call(this,i),i.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Ir||this._source.off("preclick",Eo))},getEvents:function(){var i=Kn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(i.preclick=this.close),this.options.keepInView&&(i.moveend=this._adjustPan),i},_initLayout:function(){var i="leaflet-popup",l=this._container=$e("div",i+" "+(this.options.className||"")+" leaflet-zoom-animated"),c=this._wrapper=$e("div",i+"-content-wrapper",l);if(this._contentNode=$e("div",i+"-content",c),ka(l),md(this._contentNode),Ee(l,"contextmenu",Eo),this._tipContainer=$e("div",i+"-tip-container",l),this._tip=$e("div",i+"-tip",this._tipContainer),this.options.closeButton){var h=this._closeButton=$e("a",i+"-close-button",l);h.setAttribute("role","button"),h.setAttribute("aria-label","Close popup"),h.href="#close",h.innerHTML='<span aria-hidden="true">&#215;</span>',Ee(h,"click",function(v){Lt(v),this.close()},this)}},_updateLayout:function(){var i=this._contentNode,l=i.style;l.width="",l.whiteSpace="nowrap";var c=i.offsetWidth;c=Math.min(c,this.options.maxWidth),c=Math.max(c,this.options.minWidth),l.width=c+1+"px",l.whiteSpace="",l.height="";var h=i.offsetHeight,v=this.options.maxHeight,S="leaflet-popup-scrolled";v&&h>v?(l.height=v+"px",Oe(i,S)):pt(i,S),this._containerWidth=this._container.offsetWidth},_animateZoom:function(i){var l=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center),c=this._getAnchor();gt(this._container,l.add(c))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var i=this._map,l=parseInt(ya(this._container,"marginBottom"),10)||0,c=this._container.offsetHeight+l,h=this._containerWidth,v=new z(this._containerLeft,-c-this._containerBottom);v._add(Co(this._container));var S=i.layerPointToContainerPoint(v),R=q(this.options.autoPanPadding),j=q(this.options.autoPanPaddingTopLeft||R),$=q(this.options.autoPanPaddingBottomRight||R),re=i.getSize(),fe=0,Pe=0;S.x+h+$.x>re.x&&(fe=S.x+h-re.x+$.x),S.x-fe-j.x<0&&(fe=S.x-j.x),S.y+c+$.y>re.y&&(Pe=S.y+c-re.y+$.y),S.y-Pe-j.y<0&&(Pe=S.y-j.y),(fe||Pe)&&(this.options.keepInView&&(this._autopanning=!0),i.fire("autopanstart").panBy([fe,Pe]))}},_getAnchor:function(){return q(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Wk=function(i,l){return new ll(i,l)};De.mergeOptions({closePopupOnClick:!0}),De.include({openPopup:function(i,l,c){return this._initOverlay(ll,i,l,c).openOn(this),this},closePopup:function(i){return i=arguments.length?i:this._popup,i&&i.close(),this}}),En.include({bindPopup:function(i,l){return this._popup=this._initOverlay(ll,this._popup,i,l),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(i){return this._popup&&(this instanceof dr||(this._popup._source=this),this._popup._prepareOpen(i||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(i){return this._popup&&this._popup.setContent(i),this},getPopup:function(){return this._popup},_openPopup:function(i){if(!(!this._popup||!this._map)){Oo(i);var l=i.layer||i.target;if(this._popup._source===l&&!(l instanceof Ir)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(i.latlng);return}this._popup._source=l,this.openPopup(i.latlng)}},_movePopup:function(i){this._popup.setLatLng(i.latlng)},_onKeyPress:function(i){i.originalEvent.keyCode===13&&this._openPopup(i)}});var ul=Kn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(i){Kn.prototype.onAdd.call(this,i),this.setOpacity(this.options.opacity),i.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(i){Kn.prototype.onRemove.call(this,i),i.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var i=Kn.prototype.getEvents.call(this);return this.options.permanent||(i.preclick=this.close),i},_initLayout:function(){var i="leaflet-tooltip",l=i+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=$e("div",l),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+d(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(i){var l,c,h=this._map,v=this._container,S=h.latLngToContainerPoint(h.getCenter()),R=h.layerPointToContainerPoint(i),j=this.options.direction,$=v.offsetWidth,re=v.offsetHeight,fe=q(this.options.offset),Pe=this._getAnchor();j==="top"?(l=$/2,c=re):j==="bottom"?(l=$/2,c=0):j==="center"?(l=$/2,c=re/2):j==="right"?(l=0,c=re/2):j==="left"?(l=$,c=re/2):R.x<S.x?(j="right",l=0,c=re/2):(j="left",l=$+(fe.x+Pe.x)*2,c=re/2),i=i.subtract(q(l,c,!0)).add(fe).add(Pe),pt(v,"leaflet-tooltip-right"),pt(v,"leaflet-tooltip-left"),pt(v,"leaflet-tooltip-top"),pt(v,"leaflet-tooltip-bottom"),Oe(v,"leaflet-tooltip-"+j),gt(v,i)},_updatePosition:function(){var i=this._map.latLngToLayerPoint(this._latlng);this._setPosition(i)},setOpacity:function(i){this.options.opacity=i,this._container&&hn(this._container,i)},_animateZoom:function(i){var l=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center);this._setPosition(l)},_getAnchor:function(){return q(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Hk=function(i,l){return new ul(i,l)};De.include({openTooltip:function(i,l,c){return this._initOverlay(ul,i,l,c).openOn(this),this},closeTooltip:function(i){return i.close(),this}}),En.include({bindTooltip:function(i,l){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(ul,this._tooltip,i,l),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(i){if(!(!i&&this._tooltipHandlersAdded)){var l=i?"off":"on",c={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?c.add=this._openTooltip:(c.mouseover=this._openTooltip,c.mouseout=this.closeTooltip,c.click=this._openTooltip,this._map?this._addFocusListeners():c.add=this._addFocusListeners),this._tooltip.options.sticky&&(c.mousemove=this._moveTooltip),this[l](c),this._tooltipHandlersAdded=!i}},openTooltip:function(i){return this._tooltip&&(this instanceof dr||(this._tooltip._source=this),this._tooltip._prepareOpen(i)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(i){return this._tooltip&&this._tooltip.setContent(i),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(i){var l=i.getElement();l&&(Ee(l,"focus",function(){this._tooltip._source=i,this.openTooltip()},this),Ee(l,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(i){var l=i.getElement();l&&l.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(i){!this._tooltip||!this._map||this._map.dragging&&this._map.dragging.moving()||(this._tooltip._source=i.layer||i.target,this.openTooltip(this._tooltip.options.sticky?i.latlng:void 0))},_moveTooltip:function(i){var l=i.latlng,c,h;this._tooltip.options.sticky&&i.originalEvent&&(c=this._map.mouseEventToContainerPoint(i.originalEvent),h=this._map.containerPointToLayerPoint(c),l=this._map.layerPointToLatLng(h)),this._tooltip.setLatLng(l)}});var v_=pi.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(i){var l=i&&i.tagName==="DIV"?i:document.createElement("div"),c=this.options;if(c.html instanceof Element?(Qs(l),l.appendChild(c.html)):l.innerHTML=c.html!==!1?c.html:"",c.bgPos){var h=q(c.bgPos);l.style.backgroundPosition=-h.x+"px "+-h.y+"px"}return this._setIconStyles(l,"icon"),l},createShadow:function(){return null}});function Vk(i){return new v_(i)}pi.Default=Ca;var Ea=En.extend({options:{tileSize:256,opacity:1,updateWhenIdle:pe.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(i){w(this,i)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(i){i._addZoomLimit(this)},onRemove:function(i){this._removeAllTiles(),at(this._container),i._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(di(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(fi(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(i){return this.options.opacity=i,this._updateOpacity(),this},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var i=this._clampZoom(this._map.getZoom());i!==this._tileZoom&&(this._tileZoom=i,this._updateLevels()),this._update()}return this},getEvents:function(){var i={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=f(this._onMoveEnd,this.options.updateInterval,this)),i.move=this._onMove),this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},createTile:function(){return document.createElement("div")},getTileSize:function(){var i=this.options.tileSize;return i instanceof z?i:new z(i,i)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(i){for(var l=this.getPane().children,c=-i(-1/0,1/0),h=0,v=l.length,S;h<v;h++)S=l[h].style.zIndex,l[h]!==this._container&&S&&(c=i(c,+S));isFinite(c)&&(this.options.zIndex=c+i(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!pe.ielt9){hn(this._container,this.options.opacity);var i=+new Date,l=!1,c=!1;for(var h in this._tiles){var v=this._tiles[h];if(!(!v.current||!v.loaded)){var S=Math.min(1,(i-v.loaded)/200);hn(v.el,S),S<1?l=!0:(v.active?c=!0:this._onOpaqueTile(v),v.active=!0)}}c&&!this._noPrune&&this._pruneTiles(),l&&(J(this._fadeFrame),this._fadeFrame=G(this._updateOpacity,this))}},_onOpaqueTile:m,_initContainer:function(){this._container||(this._container=$e("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var i=this._tileZoom,l=this.options.maxZoom;if(i!==void 0){for(var c in this._levels)c=Number(c),this._levels[c].el.children.length||c===i?(this._levels[c].el.style.zIndex=l-Math.abs(i-c),this._onUpdateLevel(c)):(at(this._levels[c].el),this._removeTilesAtZoom(c),this._onRemoveLevel(c),delete this._levels[c]);var h=this._levels[i],v=this._map;return h||(h=this._levels[i]={},h.el=$e("div","leaflet-tile-container leaflet-zoom-animated",this._container),h.el.style.zIndex=l,h.origin=v.project(v.unproject(v.getPixelOrigin()),i).round(),h.zoom=i,this._setZoomTransform(h,v.getCenter(),v.getZoom()),m(h.el.offsetWidth),this._onCreateLevel(h)),this._level=h,h}},_onUpdateLevel:m,_onRemoveLevel:m,_onCreateLevel:m,_pruneTiles:function(){if(this._map){var i,l,c=this._map.getZoom();if(c>this.options.maxZoom||c<this.options.minZoom){this._removeAllTiles();return}for(i in this._tiles)l=this._tiles[i],l.retain=l.current;for(i in this._tiles)if(l=this._tiles[i],l.current&&!l.active){var h=l.coords;this._retainParent(h.x,h.y,h.z,h.z-5)||this._retainChildren(h.x,h.y,h.z,h.z+2)}for(i in this._tiles)this._tiles[i].retain||this._removeTile(i)}},_removeTilesAtZoom:function(i){for(var l in this._tiles)this._tiles[l].coords.z===i&&this._removeTile(l)},_removeAllTiles:function(){for(var i in this._tiles)this._removeTile(i)},_invalidateAll:function(){for(var i in this._levels)at(this._levels[i].el),this._onRemoveLevel(Number(i)),delete this._levels[i];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(i,l,c,h){var v=Math.floor(i/2),S=Math.floor(l/2),R=c-1,j=new z(+v,+S);j.z=+R;var $=this._tileCoordsToKey(j),re=this._tiles[$];return re&&re.active?(re.retain=!0,!0):(re&&re.loaded&&(re.retain=!0),R>h?this._retainParent(v,S,R,h):!1)},_retainChildren:function(i,l,c,h){for(var v=2*i;v<2*i+2;v++)for(var S=2*l;S<2*l+2;S++){var R=new z(v,S);R.z=c+1;var j=this._tileCoordsToKey(R),$=this._tiles[j];if($&&$.active){$.retain=!0;continue}else $&&$.loaded&&($.retain=!0);c+1<h&&this._retainChildren(v,S,c+1,h)}},_resetView:function(i){var l=i&&(i.pinch||i.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),l,l)},_animateZoom:function(i){this._setView(i.center,i.zoom,!0,i.noUpdate)},_clampZoom:function(i){var l=this.options;return l.minNativeZoom!==void 0&&i<l.minNativeZoom?l.minNativeZoom:l.maxNativeZoom!==void 0&&l.maxNativeZoom<i?l.maxNativeZoom:i},_setView:function(i,l,c,h){var v=Math.round(l);this.options.maxZoom!==void 0&&v>this.options.maxZoom||this.options.minZoom!==void 0&&v<this.options.minZoom?v=void 0:v=this._clampZoom(v);var S=this.options.updateWhenZooming&&v!==this._tileZoom;(!h||S)&&(this._tileZoom=v,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),v!==void 0&&this._update(i),c||this._pruneTiles(),this._noPrune=!!c),this._setZoomTransforms(i,l)},_setZoomTransforms:function(i,l){for(var c in this._levels)this._setZoomTransform(this._levels[c],i,l)},_setZoomTransform:function(i,l,c){var h=this._map.getZoomScale(c,i.zoom),v=i.origin.multiplyBy(h).subtract(this._map._getNewPixelOrigin(l,c)).round();pe.any3d?Po(i.el,v,h):gt(i.el,v)},_resetGrid:function(){var i=this._map,l=i.options.crs,c=this._tileSize=this.getTileSize(),h=this._tileZoom,v=this._map.getPixelWorldBounds(this._tileZoom);v&&(this._globalTileRange=this._pxBoundsToTileRange(v)),this._wrapX=l.wrapLng&&!this.options.noWrap&&[Math.floor(i.project([0,l.wrapLng[0]],h).x/c.x),Math.ceil(i.project([0,l.wrapLng[1]],h).x/c.y)],this._wrapY=l.wrapLat&&!this.options.noWrap&&[Math.floor(i.project([l.wrapLat[0],0],h).y/c.x),Math.ceil(i.project([l.wrapLat[1],0],h).y/c.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(i){var l=this._map,c=l._animatingZoom?Math.max(l._animateToZoom,l.getZoom()):l.getZoom(),h=l.getZoomScale(c,this._tileZoom),v=l.project(i,this._tileZoom).floor(),S=l.getSize().divideBy(h*2);return new O(v.subtract(S),v.add(S))},_update:function(i){var l=this._map;if(l){var c=this._clampZoom(l.getZoom());if(i===void 0&&(i=l.getCenter()),this._tileZoom!==void 0){var h=this._getTiledPixelBounds(i),v=this._pxBoundsToTileRange(h),S=v.getCenter(),R=[],j=this.options.keepBuffer,$=new O(v.getBottomLeft().subtract([j,-j]),v.getTopRight().add([j,-j]));if(!(isFinite(v.min.x)&&isFinite(v.min.y)&&isFinite(v.max.x)&&isFinite(v.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var re in this._tiles){var fe=this._tiles[re].coords;(fe.z!==this._tileZoom||!$.contains(new z(fe.x,fe.y)))&&(this._tiles[re].current=!1)}if(Math.abs(c-this._tileZoom)>1){this._setView(i,c);return}for(var Pe=v.min.y;Pe<=v.max.y;Pe++)for(var Te=v.min.x;Te<=v.max.x;Te++){var mn=new z(Te,Pe);if(mn.z=this._tileZoom,!!this._isValidTile(mn)){var To=this._tiles[this._tileCoordsToKey(mn)];To?To.current=!0:R.push(mn)}}if(R.sort(function(Br,Cd){return Br.distanceTo(S)-Cd.distanceTo(S)}),R.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var dl=document.createDocumentFragment();for(Te=0;Te<R.length;Te++)this._addTile(R[Te],dl);this._level.el.appendChild(dl)}}}},_isValidTile:function(i){var l=this._map.options.crs;if(!l.infinite){var c=this._globalTileRange;if(!l.wrapLng&&(i.x<c.min.x||i.x>c.max.x)||!l.wrapLat&&(i.y<c.min.y||i.y>c.max.y))return!1}if(!this.options.bounds)return!0;var h=this._tileCoordsToBounds(i);return Q(this.options.bounds).overlaps(h)},_keyToBounds:function(i){return this._tileCoordsToBounds(this._keyToTileCoords(i))},_tileCoordsToNwSe:function(i){var l=this._map,c=this.getTileSize(),h=i.scaleBy(c),v=h.add(c),S=l.unproject(h,i.z),R=l.unproject(v,i.z);return[S,R]},_tileCoordsToBounds:function(i){var l=this._tileCoordsToNwSe(i),c=new M(l[0],l[1]);return this.options.noWrap||(c=this._map.wrapLatLngBounds(c)),c},_tileCoordsToKey:function(i){return i.x+":"+i.y+":"+i.z},_keyToTileCoords:function(i){var l=i.split(":"),c=new z(+l[0],+l[1]);return c.z=+l[2],c},_removeTile:function(i){var l=this._tiles[i];l&&(at(l.el),delete this._tiles[i],this.fire("tileunload",{tile:l.el,coords:this._keyToTileCoords(i)}))},_initTile:function(i){Oe(i,"leaflet-tile");var l=this.getTileSize();i.style.width=l.x+"px",i.style.height=l.y+"px",i.onselectstart=m,i.onmousemove=m,pe.ielt9&&this.options.opacity<1&&hn(i,this.options.opacity)},_addTile:function(i,l){var c=this._getTilePos(i),h=this._tileCoordsToKey(i),v=this.createTile(this._wrapCoords(i),s(this._tileReady,this,i));this._initTile(v),this.createTile.length<2&&G(s(this._tileReady,this,i,null,v)),gt(v,c),this._tiles[h]={el:v,coords:i,current:!0},l.appendChild(v),this.fire("tileloadstart",{tile:v,coords:i})},_tileReady:function(i,l,c){l&&this.fire("tileerror",{error:l,tile:c,coords:i});var h=this._tileCoordsToKey(i);c=this._tiles[h],c&&(c.loaded=+new Date,this._map._fadeAnimated?(hn(c.el,0),J(this._fadeFrame),this._fadeFrame=G(this._updateOpacity,this)):(c.active=!0,this._pruneTiles()),l||(Oe(c.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:c.el,coords:i})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),pe.ielt9||!this._map._fadeAnimated?G(this._pruneTiles,this):setTimeout(s(this._pruneTiles,this),250)))},_getTilePos:function(i){return i.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(i){var l=new z(this._wrapX?p(i.x,this._wrapX):i.x,this._wrapY?p(i.y,this._wrapY):i.y);return l.z=i.z,l},_pxBoundsToTileRange:function(i){var l=this.getTileSize();return new O(i.min.unscaleBy(l).floor(),i.max.unscaleBy(l).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var i in this._tiles)if(!this._tiles[i].loaded)return!1;return!0}});function Zk(i){return new Ea(i)}var gi=Ea.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(i,l){this._url=i,l=w(this,l),l.detectRetina&&pe.retina&&l.maxZoom>0?(l.tileSize=Math.floor(l.tileSize/2),l.zoomReverse?(l.zoomOffset--,l.minZoom=Math.min(l.maxZoom,l.minZoom+1)):(l.zoomOffset++,l.maxZoom=Math.max(l.minZoom,l.maxZoom-1)),l.minZoom=Math.max(0,l.minZoom)):l.zoomReverse?l.minZoom=Math.min(l.maxZoom,l.minZoom):l.maxZoom=Math.max(l.minZoom,l.maxZoom),typeof l.subdomains=="string"&&(l.subdomains=l.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(i,l){return this._url===i&&l===void 0&&(l=!0),this._url=i,l||this.redraw(),this},createTile:function(i,l){var c=document.createElement("img");return Ee(c,"load",s(this._tileOnLoad,this,l,c)),Ee(c,"error",s(this._tileOnError,this,l,c)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(c.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(c.referrerPolicy=this.options.referrerPolicy),c.alt="",c.src=this.getTileUrl(i),c},getTileUrl:function(i){var l={r:pe.retina?"@2x":"",s:this._getSubdomain(i),x:i.x,y:i.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var c=this._globalTileRange.max.y-i.y;this.options.tms&&(l.y=c),l["-y"]=c}return x(this._url,o(l,this.options))},_tileOnLoad:function(i,l){pe.ielt9?setTimeout(s(i,this,null,l),0):i(null,l)},_tileOnError:function(i,l,c){var h=this.options.errorTileUrl;h&&l.getAttribute("src")!==h&&(l.src=h),i(c,l)},_onTileRemove:function(i){i.tile.onload=null},_getZoomForUrl:function(){var i=this._tileZoom,l=this.options.maxZoom,c=this.options.zoomReverse,h=this.options.zoomOffset;return c&&(i=l-i),i+h},_getSubdomain:function(i){var l=Math.abs(i.x+i.y)%this.options.subdomains.length;return this.options.subdomains[l]},_abortLoading:function(){var i,l;for(i in this._tiles)if(this._tiles[i].coords.z!==this._tileZoom&&(l=this._tiles[i].el,l.onload=m,l.onerror=m,!l.complete)){l.src=T;var c=this._tiles[i].coords;at(l),delete this._tiles[i],this.fire("tileabort",{tile:l,coords:c})}},_removeTile:function(i){var l=this._tiles[i];if(l)return l.el.setAttribute("src",T),Ea.prototype._removeTile.call(this,i)},_tileReady:function(i,l,c){if(!(!this._map||c&&c.getAttribute("src")===T))return Ea.prototype._tileReady.call(this,i,l,c)}});function y_(i,l){return new gi(i,l)}var b_=gi.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(i,l){this._url=i;var c=o({},this.defaultWmsParams);for(var h in l)h in this.options||(c[h]=l[h]);l=w(this,l);var v=l.detectRetina&&pe.retina?2:1,S=this.getTileSize();c.width=S.x*v,c.height=S.y*v,this.wmsParams=c},onAdd:function(i){this._crs=this.options.crs||i.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var l=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[l]=this._crs.code,gi.prototype.onAdd.call(this,i)},getTileUrl:function(i){var l=this._tileCoordsToNwSe(i),c=this._crs,h=N(c.project(l[0]),c.project(l[1])),v=h.min,S=h.max,R=(this._wmsVersion>=1.3&&this._crs===f_?[v.y,v.x,S.y,S.x]:[v.x,v.y,S.x,S.y]).join(","),j=gi.prototype.getTileUrl.call(this,i);return j+C(this.wmsParams,j,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+R},setParams:function(i,l){return o(this.wmsParams,i),l||this.redraw(),this}});function qk(i,l){return new b_(i,l)}gi.WMS=b_,y_.wms=qk;var pr=En.extend({options:{padding:.1},initialize:function(i){w(this,i),d(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&Oe(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var i={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(i.zoomanim=this._onAnimZoom),i},_onAnimZoom:function(i){this._updateTransform(i.center,i.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(i,l){var c=this._map.getZoomScale(l,this._zoom),h=this._map.getSize().multiplyBy(.5+this.options.padding),v=this._map.project(this._center,l),S=h.multiplyBy(-c).add(v).subtract(this._map._getNewPixelOrigin(i,l));pe.any3d?Po(this._container,S,c):gt(this._container,S)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var i in this._layers)this._layers[i]._reset()},_onZoomEnd:function(){for(var i in this._layers)this._layers[i]._project()},_updatePaths:function(){for(var i in this._layers)this._layers[i]._update()},_update:function(){var i=this.options.padding,l=this._map.getSize(),c=this._map.containerPointToLayerPoint(l.multiplyBy(-i)).round();this._bounds=new O(c,c.add(l.multiplyBy(1+i*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),x_=pr.extend({options:{tolerance:0},getEvents:function(){var i=pr.prototype.getEvents.call(this);return i.viewprereset=this._onViewPreReset,i},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){pr.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var i=this._container=document.createElement("canvas");Ee(i,"mousemove",this._onMouseMove,this),Ee(i,"click dblclick mousedown mouseup contextmenu",this._onClick,this),Ee(i,"mouseout",this._handleMouseOut,this),i._leaflet_disable_events=!0,this._ctx=i.getContext("2d")},_destroyContainer:function(){J(this._redrawRequest),delete this._ctx,at(this._container),Xe(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var i;this._redrawBounds=null;for(var l in this._layers)i=this._layers[l],i._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){pr.prototype._update.call(this);var i=this._bounds,l=this._container,c=i.getSize(),h=pe.retina?2:1;gt(l,i.min),l.width=h*c.x,l.height=h*c.y,l.style.width=c.x+"px",l.style.height=c.y+"px",pe.retina&&this._ctx.scale(2,2),this._ctx.translate(-i.min.x,-i.min.y),this.fire("update")}},_reset:function(){pr.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(i){this._updateDashArray(i),this._layers[d(i)]=i;var l=i._order={layer:i,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=l),this._drawLast=l,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(i){this._requestRedraw(i)},_removePath:function(i){var l=i._order,c=l.next,h=l.prev;c?c.prev=h:this._drawLast=h,h?h.next=c:this._drawFirst=c,delete i._order,delete this._layers[d(i)],this._requestRedraw(i)},_updatePath:function(i){this._extendRedrawBounds(i),i._project(),i._update(),this._requestRedraw(i)},_updateStyle:function(i){this._updateDashArray(i),this._requestRedraw(i)},_updateDashArray:function(i){if(typeof i.options.dashArray=="string"){var l=i.options.dashArray.split(/[, ]+/),c=[],h,v;for(v=0;v<l.length;v++){if(h=Number(l[v]),isNaN(h))return;c.push(h)}i.options._dashArray=c}else i.options._dashArray=i.options.dashArray},_requestRedraw:function(i){this._map&&(this._extendRedrawBounds(i),this._redrawRequest=this._redrawRequest||G(this._redraw,this))},_extendRedrawBounds:function(i){if(i._pxBounds){var l=(i.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new O,this._redrawBounds.extend(i._pxBounds.min.subtract([l,l])),this._redrawBounds.extend(i._pxBounds.max.add([l,l]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var i=this._redrawBounds;if(i){var l=i.getSize();this._ctx.clearRect(i.min.x,i.min.y,l.x,l.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var i,l=this._redrawBounds;if(this._ctx.save(),l){var c=l.getSize();this._ctx.beginPath(),this._ctx.rect(l.min.x,l.min.y,c.x,c.y),this._ctx.clip()}this._drawing=!0;for(var h=this._drawFirst;h;h=h.next)i=h.layer,(!l||i._pxBounds&&i._pxBounds.intersects(l))&&i._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(i,l){if(this._drawing){var c,h,v,S,R=i._parts,j=R.length,$=this._ctx;if(j){for($.beginPath(),c=0;c<j;c++){for(h=0,v=R[c].length;h<v;h++)S=R[c][h],$[h?"lineTo":"moveTo"](S.x,S.y);l&&$.closePath()}this._fillStroke($,i)}}},_updateCircle:function(i){if(!(!this._drawing||i._empty())){var l=i._point,c=this._ctx,h=Math.max(Math.round(i._radius),1),v=(Math.max(Math.round(i._radiusY),1)||h)/h;v!==1&&(c.save(),c.scale(1,v)),c.beginPath(),c.arc(l.x,l.y/v,h,0,Math.PI*2,!1),v!==1&&c.restore(),this._fillStroke(c,i)}},_fillStroke:function(i,l){var c=l.options;c.fill&&(i.globalAlpha=c.fillOpacity,i.fillStyle=c.fillColor||c.color,i.fill(c.fillRule||"evenodd")),c.stroke&&c.weight!==0&&(i.setLineDash&&i.setLineDash(l.options&&l.options._dashArray||[]),i.globalAlpha=c.opacity,i.lineWidth=c.weight,i.strokeStyle=c.color,i.lineCap=c.lineCap,i.lineJoin=c.lineJoin,i.stroke())},_onClick:function(i){for(var l=this._map.mouseEventToLayerPoint(i),c,h,v=this._drawFirst;v;v=v.next)c=v.layer,c.options.interactive&&c._containsPoint(l)&&(!(i.type==="click"||i.type==="preclick")||!this._map._draggableMoved(c))&&(h=c);this._fireEvent(h?[h]:!1,i)},_onMouseMove:function(i){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var l=this._map.mouseEventToLayerPoint(i);this._handleMouseHover(i,l)}},_handleMouseOut:function(i){var l=this._hoveredLayer;l&&(pt(this._container,"leaflet-interactive"),this._fireEvent([l],i,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(i,l){if(!this._mouseHoverThrottled){for(var c,h,v=this._drawFirst;v;v=v.next)c=v.layer,c.options.interactive&&c._containsPoint(l)&&(h=c);h!==this._hoveredLayer&&(this._handleMouseOut(i),h&&(Oe(this._container,"leaflet-interactive"),this._fireEvent([h],i,"mouseover"),this._hoveredLayer=h)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,i),this._mouseHoverThrottled=!0,setTimeout(s(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(i,l,c){this._map._fireDOMEvent(l,c||l.type,i)},_bringToFront:function(i){var l=i._order;if(l){var c=l.next,h=l.prev;if(c)c.prev=h;else return;h?h.next=c:c&&(this._drawFirst=c),l.prev=this._drawLast,this._drawLast.next=l,l.next=null,this._drawLast=l,this._requestRedraw(i)}},_bringToBack:function(i){var l=i._order;if(l){var c=l.next,h=l.prev;if(h)h.next=c;else return;c?c.prev=h:h&&(this._drawLast=h),l.prev=null,l.next=this._drawFirst,this._drawFirst.prev=l,this._drawFirst=l,this._requestRedraw(i)}}});function w_(i){return pe.canvas?new x_(i):null}var Oa=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(i){return document.createElement("<lvml:"+i+' class="lvml">')}}catch{}return function(i){return document.createElement("<"+i+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),Kk={_initContainer:function(){this._container=$e("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(pr.prototype._update.call(this),this.fire("update"))},_initPath:function(i){var l=i._container=Oa("shape");Oe(l,"leaflet-vml-shape "+(this.options.className||"")),l.coordsize="1 1",i._path=Oa("path"),l.appendChild(i._path),this._updateStyle(i),this._layers[d(i)]=i},_addPath:function(i){var l=i._container;this._container.appendChild(l),i.options.interactive&&i.addInteractiveTarget(l)},_removePath:function(i){var l=i._container;at(l),i.removeInteractiveTarget(l),delete this._layers[d(i)]},_updateStyle:function(i){var l=i._stroke,c=i._fill,h=i.options,v=i._container;v.stroked=!!h.stroke,v.filled=!!h.fill,h.stroke?(l||(l=i._stroke=Oa("stroke")),v.appendChild(l),l.weight=h.weight+"px",l.color=h.color,l.opacity=h.opacity,h.dashArray?l.dashStyle=k(h.dashArray)?h.dashArray.join(" "):h.dashArray.replace(/( *, *)/g," "):l.dashStyle="",l.endcap=h.lineCap.replace("butt","flat"),l.joinstyle=h.lineJoin):l&&(v.removeChild(l),i._stroke=null),h.fill?(c||(c=i._fill=Oa("fill")),v.appendChild(c),c.color=h.fillColor||h.color,c.opacity=h.fillOpacity):c&&(v.removeChild(c),i._fill=null)},_updateCircle:function(i){var l=i._point.round(),c=Math.round(i._radius),h=Math.round(i._radiusY||c);this._setPath(i,i._empty()?"M0 0":"AL "+l.x+","+l.y+" "+c+","+h+" 0,"+65535*360)},_setPath:function(i,l){i._path.v=l},_bringToFront:function(i){di(i._container)},_bringToBack:function(i){fi(i._container)}},cl=pe.vml?Oa:ce,La=pr.extend({_initContainer:function(){this._container=cl("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=cl("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){at(this._container),Xe(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){pr.prototype._update.call(this);var i=this._bounds,l=i.getSize(),c=this._container;(!this._svgSize||!this._svgSize.equals(l))&&(this._svgSize=l,c.setAttribute("width",l.x),c.setAttribute("height",l.y)),gt(c,i.min),c.setAttribute("viewBox",[i.min.x,i.min.y,l.x,l.y].join(" ")),this.fire("update")}},_initPath:function(i){var l=i._path=cl("path");i.options.className&&Oe(l,i.options.className),i.options.interactive&&Oe(l,"leaflet-interactive"),this._updateStyle(i),this._layers[d(i)]=i},_addPath:function(i){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(i._path),i.addInteractiveTarget(i._path)},_removePath:function(i){at(i._path),i.removeInteractiveTarget(i._path),delete this._layers[d(i)]},_updatePath:function(i){i._project(),i._update()},_updateStyle:function(i){var l=i._path,c=i.options;l&&(c.stroke?(l.setAttribute("stroke",c.color),l.setAttribute("stroke-opacity",c.opacity),l.setAttribute("stroke-width",c.weight),l.setAttribute("stroke-linecap",c.lineCap),l.setAttribute("stroke-linejoin",c.lineJoin),c.dashArray?l.setAttribute("stroke-dasharray",c.dashArray):l.removeAttribute("stroke-dasharray"),c.dashOffset?l.setAttribute("stroke-dashoffset",c.dashOffset):l.removeAttribute("stroke-dashoffset")):l.setAttribute("stroke","none"),c.fill?(l.setAttribute("fill",c.fillColor||c.color),l.setAttribute("fill-opacity",c.fillOpacity),l.setAttribute("fill-rule",c.fillRule||"evenodd")):l.setAttribute("fill","none"))},_updatePoly:function(i,l){this._setPath(i,de(i._parts,l))},_updateCircle:function(i){var l=i._point,c=Math.max(Math.round(i._radius),1),h=Math.max(Math.round(i._radiusY),1)||c,v="a"+c+","+h+" 0 1,0 ",S=i._empty()?"M0 0":"M"+(l.x-c)+","+l.y+v+c*2+",0 "+v+-c*2+",0 ";this._setPath(i,S)},_setPath:function(i,l){i._path.setAttribute("d",l)},_bringToFront:function(i){di(i._path)},_bringToBack:function(i){fi(i._path)}});pe.vml&&La.include(Kk);function k_(i){return pe.svg||pe.vml?new La(i):null}De.include({getRenderer:function(i){var l=i.options.renderer||this._getPaneRenderer(i.options.pane)||this.options.renderer||this._renderer;return l||(l=this._renderer=this._createRenderer()),this.hasLayer(l)||this.addLayer(l),l},_getPaneRenderer:function(i){if(i==="overlayPane"||i===void 0)return!1;var l=this._paneRenderers[i];return l===void 0&&(l=this._createRenderer({pane:i}),this._paneRenderers[i]=l),l},_createRenderer:function(i){return this.options.preferCanvas&&w_(i)||k_(i)}});var S_=mi.extend({initialize:function(i,l){mi.prototype.initialize.call(this,this._boundsToLatLngs(i),l)},setBounds:function(i){return this.setLatLngs(this._boundsToLatLngs(i))},_boundsToLatLngs:function(i){return i=Q(i),[i.getSouthWest(),i.getNorthWest(),i.getNorthEast(),i.getSouthEast()]}});function Qk(i,l){return new S_(i,l)}La.create=cl,La.pointsToPath=de,hr.geometryToLayer=rl,hr.coordsToLatLng=kd,hr.coordsToLatLngs=ol,hr.latLngToCoords=Sd,hr.latLngsToCoords=il,hr.getFeature=_i,hr.asFeature=al,De.mergeOptions({boxZoom:!0});var P_=qn.extend({initialize:function(i){this._map=i,this._container=i._container,this._pane=i._panes.overlayPane,this._resetStateTimeout=0,i.on("unload",this._destroy,this)},addHooks:function(){Ee(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Xe(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){at(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(i){if(!i.shiftKey||i.which!==1&&i.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),ba(),sd(),this._startPoint=this._map.mouseEventToContainerPoint(i),Ee(document,{contextmenu:Oo,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(i){this._moved||(this._moved=!0,this._box=$e("div","leaflet-zoom-box",this._container),Oe(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(i);var l=new O(this._point,this._startPoint),c=l.getSize();gt(this._box,l.min),this._box.style.width=c.x+"px",this._box.style.height=c.y+"px"},_finish:function(){this._moved&&(at(this._box),pt(this._container,"leaflet-crosshair")),xa(),ld(),Xe(document,{contextmenu:Oo,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(i){if(!(i.which!==1&&i.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(s(this._resetState,this),0);var l=new M(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(l).fire("boxzoomend",{boxZoomBounds:l})}},_onKeyDown:function(i){i.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});De.addInitHook("addHandler","boxZoom",P_),De.mergeOptions({doubleClickZoom:!0});var C_=qn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(i){var l=this._map,c=l.getZoom(),h=l.options.zoomDelta,v=i.originalEvent.shiftKey?c-h:c+h;l.options.doubleClickZoom==="center"?l.setZoom(v):l.setZoomAround(i.containerPoint,v)}});De.addInitHook("addHandler","doubleClickZoom",C_),De.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var E_=qn.extend({addHooks:function(){if(!this._draggable){var i=this._map;this._draggable=new Nr(i._mapPane,i._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),i.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),i.on("zoomend",this._onZoomEnd,this),i.whenReady(this._onZoomEnd,this))}Oe(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){pt(this._map._container,"leaflet-grab"),pt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var i=this._map;if(i._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var l=Q(this._map.options.maxBounds);this._offsetLimit=N(this._map.latLngToContainerPoint(l.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(l.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;i.fire("movestart").fire("dragstart"),i.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(i){if(this._map.options.inertia){var l=this._lastTime=+new Date,c=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(c),this._times.push(l),this._prunePositions(l)}this._map.fire("move",i).fire("drag",i)},_prunePositions:function(i){for(;this._positions.length>1&&i-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var i=this._map.getSize().divideBy(2),l=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=l.subtract(i).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(i,l){return i-(i-l)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var i=this._draggable._newPos.subtract(this._draggable._startPos),l=this._offsetLimit;i.x<l.min.x&&(i.x=this._viscousLimit(i.x,l.min.x)),i.y<l.min.y&&(i.y=this._viscousLimit(i.y,l.min.y)),i.x>l.max.x&&(i.x=this._viscousLimit(i.x,l.max.x)),i.y>l.max.y&&(i.y=this._viscousLimit(i.y,l.max.y)),this._draggable._newPos=this._draggable._startPos.add(i)}},_onPreDragWrap:function(){var i=this._worldWidth,l=Math.round(i/2),c=this._initialWorldOffset,h=this._draggable._newPos.x,v=(h-l+c)%i+l-c,S=(h+l+c)%i-l-c,R=Math.abs(v+c)<Math.abs(S+c)?v:S;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=R},_onDragEnd:function(i){var l=this._map,c=l.options,h=!c.inertia||i.noInertia||this._times.length<2;if(l.fire("dragend",i),h)l.fire("moveend");else{this._prunePositions(+new Date);var v=this._lastPos.subtract(this._positions[0]),S=(this._lastTime-this._times[0])/1e3,R=c.easeLinearity,j=v.multiplyBy(R/S),$=j.distanceTo([0,0]),re=Math.min(c.inertiaMaxSpeed,$),fe=j.multiplyBy(re/$),Pe=re/(c.inertiaDeceleration*R),Te=fe.multiplyBy(-Pe/2).round();!Te.x&&!Te.y?l.fire("moveend"):(Te=l._limitOffset(Te,l.options.maxBounds),G(function(){l.panBy(Te,{duration:Pe,easeLinearity:R,noMoveStart:!0,animate:!0})}))}}});De.addInitHook("addHandler","dragging",E_),De.mergeOptions({keyboard:!0,keyboardPanDelta:80});var O_=qn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(i){this._map=i,this._setPanDelta(i.options.keyboardPanDelta),this._setZoomDelta(i.options.zoomDelta)},addHooks:function(){var i=this._map._container;i.tabIndex<=0&&(i.tabIndex="0"),Ee(i,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Xe(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var i=document.body,l=document.documentElement,c=i.scrollTop||l.scrollTop,h=i.scrollLeft||l.scrollLeft;this._map._container.focus(),window.scrollTo(h,c)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(i){var l=this._panKeys={},c=this.keyCodes,h,v;for(h=0,v=c.left.length;h<v;h++)l[c.left[h]]=[-1*i,0];for(h=0,v=c.right.length;h<v;h++)l[c.right[h]]=[i,0];for(h=0,v=c.down.length;h<v;h++)l[c.down[h]]=[0,i];for(h=0,v=c.up.length;h<v;h++)l[c.up[h]]=[0,-1*i]},_setZoomDelta:function(i){var l=this._zoomKeys={},c=this.keyCodes,h,v;for(h=0,v=c.zoomIn.length;h<v;h++)l[c.zoomIn[h]]=i;for(h=0,v=c.zoomOut.length;h<v;h++)l[c.zoomOut[h]]=-i},_addHooks:function(){Ee(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Xe(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(i){if(!(i.altKey||i.ctrlKey||i.metaKey)){var l=i.keyCode,c=this._map,h;if(l in this._panKeys){if(!c._panAnim||!c._panAnim._inProgress)if(h=this._panKeys[l],i.shiftKey&&(h=q(h).multiplyBy(3)),c.options.maxBounds&&(h=c._limitOffset(q(h),c.options.maxBounds)),c.options.worldCopyJump){var v=c.wrapLatLng(c.unproject(c.project(c.getCenter()).add(h)));c.panTo(v)}else c.panBy(h)}else if(l in this._zoomKeys)c.setZoom(c.getZoom()+(i.shiftKey?3:1)*this._zoomKeys[l]);else if(l===27&&c._popup&&c._popup.options.closeOnEscapeKey)c.closePopup();else return;Oo(i)}}});De.addInitHook("addHandler","keyboard",O_),De.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var L_=qn.extend({addHooks:function(){Ee(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Xe(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(i){var l=Xm(i),c=this._map.options.wheelDebounceTime;this._delta+=l,this._lastMousePos=this._map.mouseEventToContainerPoint(i),this._startTime||(this._startTime=+new Date);var h=Math.max(c-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(s(this._performZoom,this),h),Oo(i)},_performZoom:function(){var i=this._map,l=i.getZoom(),c=this._map.options.zoomSnap||0;i._stop();var h=this._delta/(this._map.options.wheelPxPerZoomLevel*4),v=4*Math.log(2/(1+Math.exp(-Math.abs(h))))/Math.LN2,S=c?Math.ceil(v/c)*c:v,R=i._limitZoom(l+(this._delta>0?S:-S))-l;this._delta=0,this._startTime=null,R&&(i.options.scrollWheelZoom==="center"?i.setZoom(l+R):i.setZoomAround(this._lastMousePos,l+R))}});De.addInitHook("addHandler","scrollWheelZoom",L_);var Gk=600;De.mergeOptions({tapHold:pe.touchNative&&pe.safari&&pe.mobile,tapTolerance:15});var T_=qn.extend({addHooks:function(){Ee(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Xe(this._map._container,"touchstart",this._onDown,this)},_onDown:function(i){if(clearTimeout(this._holdTimeout),i.touches.length===1){var l=i.touches[0];this._startPos=this._newPos=new z(l.clientX,l.clientY),this._holdTimeout=setTimeout(s(function(){this._cancel(),this._isTapValid()&&(Ee(document,"touchend",Lt),Ee(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",l))},this),Gk),Ee(document,"touchend touchcancel contextmenu",this._cancel,this),Ee(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function i(){Xe(document,"touchend",Lt),Xe(document,"touchend touchcancel",i)},_cancel:function(){clearTimeout(this._holdTimeout),Xe(document,"touchend touchcancel contextmenu",this._cancel,this),Xe(document,"touchmove",this._onMove,this)},_onMove:function(i){var l=i.touches[0];this._newPos=new z(l.clientX,l.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(i,l){var c=new MouseEvent(i,{bubbles:!0,cancelable:!0,view:window,screenX:l.screenX,screenY:l.screenY,clientX:l.clientX,clientY:l.clientY});c._simulated=!0,l.target.dispatchEvent(c)}});De.addInitHook("addHandler","tapHold",T_),De.mergeOptions({touchZoom:pe.touch,bounceAtZoomLimits:!0});var R_=qn.extend({addHooks:function(){Oe(this._map._container,"leaflet-touch-zoom"),Ee(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){pt(this._map._container,"leaflet-touch-zoom"),Xe(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(i){var l=this._map;if(!(!i.touches||i.touches.length!==2||l._animatingZoom||this._zooming)){var c=l.mouseEventToContainerPoint(i.touches[0]),h=l.mouseEventToContainerPoint(i.touches[1]);this._centerPoint=l.getSize()._divideBy(2),this._startLatLng=l.containerPointToLatLng(this._centerPoint),l.options.touchZoom!=="center"&&(this._pinchStartLatLng=l.containerPointToLatLng(c.add(h)._divideBy(2))),this._startDist=c.distanceTo(h),this._startZoom=l.getZoom(),this._moved=!1,this._zooming=!0,l._stop(),Ee(document,"touchmove",this._onTouchMove,this),Ee(document,"touchend touchcancel",this._onTouchEnd,this),Lt(i)}},_onTouchMove:function(i){if(!(!i.touches||i.touches.length!==2||!this._zooming)){var l=this._map,c=l.mouseEventToContainerPoint(i.touches[0]),h=l.mouseEventToContainerPoint(i.touches[1]),v=c.distanceTo(h)/this._startDist;if(this._zoom=l.getScaleZoom(v,this._startZoom),!l.options.bounceAtZoomLimits&&(this._zoom<l.getMinZoom()&&v<1||this._zoom>l.getMaxZoom()&&v>1)&&(this._zoom=l._limitZoom(this._zoom)),l.options.touchZoom==="center"){if(this._center=this._startLatLng,v===1)return}else{var S=c._add(h)._divideBy(2)._subtract(this._centerPoint);if(v===1&&S.x===0&&S.y===0)return;this._center=l.unproject(l.project(this._pinchStartLatLng,this._zoom).subtract(S),this._zoom)}this._moved||(l._moveStart(!0,!1),this._moved=!0),J(this._animRequest);var R=s(l._move,l,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=G(R,this,!0),Lt(i)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,J(this._animRequest),Xe(document,"touchmove",this._onTouchMove,this),Xe(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});De.addInitHook("addHandler","touchZoom",R_),De.BoxZoom=P_,De.DoubleClickZoom=C_,De.Drag=E_,De.Keyboard=O_,De.ScrollWheelZoom=L_,De.TapHold=T_,De.TouchZoom=R_,n.Bounds=O,n.Browser=pe,n.CRS=he,n.Canvas=x_,n.Circle=wd,n.CircleMarker=nl,n.Class=V,n.Control=Cn,n.DivIcon=v_,n.DivOverlay=Kn,n.DomEvent=pk,n.DomUtil=fk,n.Draggable=Nr,n.Evented=D,n.FeatureGroup=dr,n.GeoJSON=hr,n.GridLayer=Ea,n.Handler=qn,n.Icon=pi,n.ImageOverlay=sl,n.LatLng=ne,n.LatLngBounds=M,n.Layer=En,n.LayerGroup=hi,n.LineUtil=Ck,n.Map=De,n.Marker=tl,n.Mixin=xk,n.Path=Ir,n.Point=z,n.PolyUtil=Ek,n.Polygon=mi,n.Polyline=fr,n.Popup=ll,n.PosAnimation=e_,n.Projection=Ok,n.Rectangle=S_,n.Renderer=pr,n.SVG=La,n.SVGOverlay=g_,n.TileLayer=gi,n.Tooltip=ul,n.Transformation=Le,n.Util=ee,n.VideoOverlay=__,n.bind=s,n.bounds=N,n.canvas=w_,n.circle=Bk,n.circleMarker=Ik,n.control=Sa,n.divIcon=Vk,n.extend=o,n.featureGroup=Ak,n.geoJSON=m_,n.geoJson=jk,n.gridLayer=Zk,n.icon=zk,n.imageOverlay=Fk,n.latLng=ue,n.latLngBounds=Q,n.layerGroup=Rk,n.map=mk,n.marker=Nk,n.point=q,n.polygon=Dk,n.polyline=Mk,n.popup=Wk,n.rectangle=Qk,n.setOptions=w,n.stamp=d,n.svg=k_,n.svgOverlay=$k,n.tileLayer=y_,n.tooltip=Hk,n.transformation=ae,n.version=r,n.videoOverlay=Uk;var Jk=window.L;n.noConflict=function(){return window.L=Jk,this},window.L=n})})(cL,Fh);function dL(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sf,Tw={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/sf=Tw,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var a=typeof o;if(a==="string"||a==="number")n.push(o);else if(Array.isArray(o)){if(o.length){var s=t.apply(null,o);s&&n.push(s)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){n.push(o.toString());continue}for(var u in o)e.call(o,u)&&o[u]&&n.push(u)}}}return n.join(" ")}sf.exports?(t.default=t,sf.exports=t):window.classNames=t}();var Wv,Hv,Vv,Hi=dL(Tw.exports);function fL(e){const t=a=>{var s;return(s=window?.matchMedia(a).matches)!==null&&s!==void 0&&s},[n,r]=E.useState(t(e)),o=()=>{r(t(e))};return E.useEffect(()=>{const a=window.matchMedia(e);return o(),a.addEventListener("change",o),()=>a.removeEventListener("change",o)},[e]),n}function Uh(){return Uh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Uh.apply(this,arguments)}var Zv,qv,Kv,hL=function(e){return E.createElement("svg",Uh({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},e),Wv||(Wv=E.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),Hv||(Hv=E.createElement("path",{fillRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z",clipRule:"evenodd"})),Vv||(Vv=E.createElement("path",{fillRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z",clipRule:"evenodd"})))};function $h(){return $h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$h.apply(this,arguments)}var pL=function(e){return E.createElement("svg",$h({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},e),Zv||(Zv=E.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),qv||(qv=E.createElement("path",{fillRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z",clipRule:"evenodd"})),Kv||(Kv=E.createElement("path",{fillRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z",clipRule:"evenodd"})))};function Ae(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var Qr,Tn={panel:"Panel-module_panel__4VWNp","panel--mobile-layout":"Panel-module_panel--mobile-layout__OII-B",panel__pointer:"Panel-module_panel__pointer__BETJ8","panel__pointer-position":"Panel-module_panel__pointer-position__Zer8q","panel__content-wrapper--info":"Panel-module_panel__content-wrapper--info__lrfgo","panel__pointer--info":"Panel-module_panel__pointer--info__5OaTN","panel__content-wrapper--success":"Panel-module_panel__content-wrapper--success__k0JQD","panel__pointer--success":"Panel-module_panel__pointer--success__O-X6n","panel__content-wrapper--warning":"Panel-module_panel__content-wrapper--warning__vYY8E","panel__pointer--warning":"Panel-module_panel__pointer--warning__l5Zf8","panel__content-wrapper--error":"Panel-module_panel__content-wrapper--error__3LhKe","panel__pointer--error":"Panel-module_panel__pointer--error__4MGTF","panel__content-wrapper":"Panel-module_panel__content-wrapper__oiWk8","panel__icon-wrapper":"Panel-module_panel__icon-wrapper__631EQ",panel__content:"Panel-module_panel__content__U3cAc",panel__header:"Panel-module_panel__header__UJuRe",panel__body:"Panel-module_panel__body__gRd1x"};Ae(`/* breakpoints-xs */
@media only screen and (min-width: 0) {
  .Panel-module_panel__4VWNp {
    --panel-y-padding: var(--component-panel-space-padding-y-xs);
    --panel-x-padding: var(--component-panel-space-padding-x-xs);
    --panel-content-gap: var(--component-panel-space-gap-xs);
    --panel-pointer-width: calc(var(--component-panel-size-icon-xs) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_sm);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_sm
    );
  }
}

/* breakpoints-sm */
@media only screen and (min-width: 540px) {
  .Panel-module_panel__4VWNp:not(.Panel-module_panel--mobile-layout__OII-B) {
    --panel-y-padding: var(--component-panel-space-padding-y-md);
    --panel-x-padding: var(--component-panel-space-padding-x-md);
    --panel-content-gap: var(--component-panel-space-gap-md);
    --panel-pointer-width: calc(var(--component-panel-size-icon-md) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_sm);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_sm
    );
  }
}

/* breakpoints-md */
@media only screen and (min-width: 768px) {
  .Panel-module_panel__4VWNp:not(.Panel-module_panel--mobile-layout__OII-B) {
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_md);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_md
    );
  }
}

/* breakpoints-lg */
@media only screen and (min-width: 960px) {
  .Panel-module_panel__4VWNp:not(.Panel-module_panel--mobile-layout__OII-B) {
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_md);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_lg
    );
  }
}

/* breakpoints-xl */
@media only screen and (min-width: 1200px) {
  .Panel-module_panel__4VWNp:not(.Panel-module_panel--mobile-layout__OII-B) {
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_md);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_lg
    );
  }
}

/* print style */
@media print {
  .Panel-module_panel__4VWNp {
    --panel-y-padding: var(--component-panel-space-padding-y-xs);
    --panel-x-padding: var(--component-panel-space-padding-x-xs);
    --panel-content-gap: var(--component-panel-space-gap-xs);
    --panel-pointer-width: calc(var(--component-panel-size-icon-xs) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_sm);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_sm
    );
  }
}

.Panel-module_panel__4VWNp {
  width: 100%;
}

.Panel-module_panel__pointer__BETJ8 {
  width: var(--panel-pointer-width);
  height: var(--panel-pointer-height);
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}

.Panel-module_panel__pointer-position__Zer8q {
  top: 1px;
  position: relative;
  left: calc(var(--panel-x-padding) + (var(--panel-pointer-width) / 2));
}

.Panel-module_panel__content-wrapper--info__lrfgo,
.Panel-module_panel__pointer--info__5OaTN {
  background-color: var(--component-panel-color-background-default);
}

.Panel-module_panel__content-wrapper--success__k0JQD,
.Panel-module_panel__pointer--success__O-X6n {
  background-color: var(--component-panel-color-background-success);
}

.Panel-module_panel__content-wrapper--warning__vYY8E,
.Panel-module_panel__pointer--warning__l5Zf8 {
  background-color: var(--component-panel-color-background-warning);
}

.Panel-module_panel__content-wrapper--error__3LhKe,
.Panel-module_panel__pointer--error__4MGTF {
  background-color: var(--colors-red-200);
}

.Panel-module_panel__content-wrapper__oiWk8 {
  display: flex;
  gap: var(--panel-content-gap);
  padding: var(--panel-y-padding) var(--panel-x-padding);
}

.Panel-module_panel__icon-wrapper__631EQ {
  display: flex;
  flex: none;
}

.Panel-module_panel__content__U3cAc {
  display: flex;
  flex-direction: column;
  gap: var(--component-panel-space-text_group-gap-xs);
}

.Panel-module_panel__header__UJuRe {
  margin: 0;
  font-size: var(--panel-header-font_size);
  font-weight: var(--component-panel-font_weight-heading);
}

.Panel-module_panel__body__gRd1x {
  font-size: var(--panel-body-font_size);
}
`),function(e){e.Success="success",e.Info="info",e.Warning="warning",e.Error="error"}(Qr||(Qr={}));const mL=({size:e,variant:t})=>{switch(t){case Qr.Info:case Qr.Error:case Qr.Warning:return U.createElement(hL,{style:{width:e,height:e},"data-testid":"panel-icon-info"});case Qr.Success:return U.createElement(pL,{style:{width:e,height:e},"data-testid":"panel-icon-success"})}},_L=({children:e})=>U.createElement("div",{className:Hi(Tn["panel__pointer-position"])},e),gL=({renderIcon:e=mL,title:t,children:n,variant:r=Qr.Info,showPointer:o=!1,showIcon:a=!0,forceMobileLayout:s=!1,renderArrow:u=_L})=>{const d=(({forceMobileLayout:p})=>{const m=fL(`(max-width: ${uL})`);return!!p||m})({forceMobileLayout:s}),f=d?sL:lL;return U.createElement("div",{className:Hi(Tn.panel,{[Tn["panel--mobile-layout"]]:d})},o&&u({children:U.createElement("div",{"data-testid":"panel-pointer",className:Hi(Tn.panel__pointer,Tn[`panel__pointer--${r}`])})}),U.createElement("div",{"data-testid":"panel-content-wrapper",className:Hi(Tn["panel__content-wrapper"],Tn[`panel__content-wrapper--${r}`])},a&&U.createElement("div",{"data-testid":"panel-icon-wrapper",className:Tn["panel__icon-wrapper"]},e({size:f,variant:r})),U.createElement("div",{className:Tn.panel__content},t&&U.createElement("h2",{className:Tn.panel__header},t),U.createElement("div",{className:Tn.panel__body},n))))};Ae(`.PopoverPanel-module_popover-panel__tGILa {
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
}

.PopoverPanel-module_popover-panel__arrow__Cmcr3 {
  transform: scale(-1);
  margin-top: -1px;
}
`);Ae(`.CircularProgress-module_svg__TUYPH {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  overflow: visible;
}

.CircularProgress-module_circleTransition__D9rut {
  transition: stroke-dashoffset 1s ease-in-out;
}

.CircularProgress-module_container__gVi97 {
  position: relative;
}

.CircularProgress-module_label__OgO-f {
  all: initial;
  font-family: inherit;
  font-size: var(--font_size-300);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
`);Ae(`/**
 * Do not edit directly
 * Generated on Thu, 02 Feb 2023 08:15:46 GMT
 */

:root {
  --token-set-order-0: Base;
  --token-set-order-1: Components;
  --felles: [object Object];
  --altinn: [object Object];
  --component-icon-size-xs: 1.5rem;
  --component-icon-size-sm: 1.875rem;
  --component-icon-size-md: 2.25rem;
  --component-icon-size-lg: 3rem;
  --component-icon-size-xl: 3.75rem;
  --component-panel-color-background-default: #e6eff8;
  --component-panel-color-background-success: #d1f4e1;
  --component-panel-color-background-warning: #fffbe6;
  --component-panel-color-arrow-default: #e6eff8;
  --component-panel-color-arrow-success: #d1f4e1;
  --component-panel-color-arrow-warning: #fffbe6;
  --component-panel-font_size-header-breakpoint_sm: 1.5rem;
  --component-panel-font_size-header-breakpoint_md: 1.75rem;
  --component-panel-font_size-header-breakpoint_lg: 2.25rem;
  --component-panel-font_size-body-breakpoint_sm: 1rem;
  --component-panel-font_size-body-breakpoint_md: 1.125rem;
  --component-panel-space-padding-x-xs: 1.5rem;
  --component-panel-space-padding-x-md: 6rem;
  --component-panel-space-padding-y-xs: 1.5rem;
  --component-panel-space-padding-y-md: 2.25rem;
  --component-panel-space-gap-xs: 0.75rem;
  --component-panel-space-gap-md: 0.75rem;
  --component-panel-space-text_group-gap-xs: 0.375rem;
  --component-panel-space-arrow_left-md: 6.688rem;
  --component-panel-space-arrow_left-xs: 4rem;
  --component-panel-size-icon-xs: 2.25rem;
  --component-panel-size-icon-md: 3.75rem;
  --component-panel-typography-default-font-family: Altinn-DIN;
  --component-panel-typography-default-font-weight: Regular;
  --component-panel-typography-default-line-height: 1.5;
  --component-panel-typography-default-font-size: 1rem;
  --component-panel-typography-default-letter-spacing: 3%;
  --component-panel-typography-default-paragraph-spacing: 0;
  --component-panel-typography-default-text-decoration: none;
  --component-panel-typography-default-text-case: none;
  --component-panel-font_weight-heading: bold;
  --component-legend-font_weight-default: medium;
  --component-label-font_weight-default: medium;
  --component-expandable_row-color-border_top-default: #d2d5d8;
  --component-expandable_row-color-border_bottom-default: #d2d5d8;
  --component-expandable_row-space-padding-x-xs: 0.75rem;
  --component-expandable_row-space-padding-x-md: 1.5rem;
  --component-expandable_row-space-padding-top-xs: 0.25rem;
  --component-expandable_row-space-padding-bottom-xs: 0.5rem;
  --component-expandable_row-space-gap-title-xs: 0.75;
  --component-expandable_row-space-gap-title-md: 1.5rem;
  --component-expandable_row-size-icon-xs: 1.5rem;
  --component-expandable_row-font_weight-header: medium;
  --component-expandable_row-font_size-header-breakpoint_sm: 1rem;
  --component-expandable_row-font_size-header-breakpoint_md: 1.125rem;
  --component-expandable_row-border_width-default: 1px;
  --component-checkbox-space-gap-xsmall: 0.5rem;
  --component-checkbox-space-gap-small: 0.75rem;
  --component-checkbox-size-width-xsmall: 1.125rem;
  --component-checkbox-size-width-small: 1.5rem;
  --component-checkbox-size-height-xsmall: 1.125rem;
  --component-checkbox-size-height-small: 1.5rem;
  --component-checkbox-color-border-default: #1e2b3c;
  --component-checkbox-color-border-hover: #0062ba;
  --component-checkbox-color-border-checked: #0062ba;
  --component-checkbox-color-border-error: #b3253a;
  --component-checkbox-color-background-default: #ffffff;
  --component-checkbox-color-background-hover: #e6eff8;
  --component-checkbox-color-background-checked: #0062ba;
  --component-checkbox-color-background-error: #ffffff;
  --component-checkbox-color-text-default: #1e2b3c;
  --component-checkbox-color-text-hover: #0062ba;
  --component-checkbox-color-text-checked: #1e2b3c;
  --component-checkbox-color-text-error: #1e2b3c;
  --component-checkbox-border_width-xsmall: 2px;
  --component-checkbox-border_width-small: 2px;
  --component-checkbox-font_size-xs: 0.875rem;
  --component-checkbox-font_size-sm: 1rem;
  --component-fieldset-space-gap-y-xsmall: 0.75rem;
  --component-fieldset-space-gap-y-small: 1.125rem;
  --component-fieldset-space-gap-y-medium: 1.5rem;
  --component-fieldset-space-gap-y-large: 1.5rem;
  --component-field_description-color-text-default: #1e2b3c;
  --component-field_description-space-top-small: 0.5rem;
  --component-field_description-space-top-xsmall: 0.375rem;
  --component-textarea-border_width-normal: 2px;
  --component-textarea-color-border-default: #1e2b3c;
  --component-textarea-color-border-hover: #0062ba;
  --component-textarea-color-border-error: #b3253a;
  --component-textarea-color-background-default: #ffffff;
  --component-textarea-color-background-hover: #ffffff;
  --component-textarea-color-background-focus: #ffffff;
  --component-textarea-color-text-default: #1e2b3c;
  --component-textarea-space-padding-x: 0.75rem;
  --component-textarea-space-padding-y: 0.375rem;
  --component-textarea-size-min_height-xsmall: 6.25rem;
  --component-textarea-size-min_height-small: 9.375rem;
  --component-textarea-size-min_height-medium: 12.5rem;
  --component-textarea-size-min_height-large: 18.75rem;
  --component-textarea-size-min_height-xlarge: 25rem;
  --component-textarea-font_size-sm: 1rem;
  --component-checkbox-group-space-gap-x-xsmall: 1.5rem;
  --component-checkbox-group-space-gap-x-small: 2.25rem;
  --component-checkbox-group-space-gap-y-xsmall: 0.563rem;
  --component-checkbox-group-space-gap-y-small: 1.125rem;
  --component-toggle_button-font_size-sm: 1rem;
  --component-toggle_button-size-min_width-sm: 100%;
  --component-toggle_button-size-min_width-md: auto;
  --component-toggle_button-border_width-inactive: 2px;
  --component-toggle_button-color-background-active: #0062ba;
  --component-toggle_button-color-background-inactive: #ffffff;
  --component-toggle_button-color-text-active: #ffffff;
  --component-toggle_button-color-text-inactive: #1e2b3c;
  --component-toggle_button-color-border-inactive: #0062ba;
  --component-toggle_button-space-padding-x: 1.5rem;
  --component-toggle_button-space-padding-top: 0.125rem;
  --component-toggle_button-space-padding-bottom: 0.25rem;
  --component-icon_button-size-large-circle: 2.25rem;
  --component-icon_button-size-large-icon: 1.4rem;
  --component-icon_button-size-medium-circle: 1.5rem;
  --component-icon_button-size-medium-icon: 0.875rem;
  --component-icon_button-size-small-circle: 1.125rem;
  --component-icon_button-size-small-icon: 0.688rem;
  --component-icon_button-border_width-default: 1px;
  --component-button-filled-primary-color-background-default: #0062ba;
  --component-button-filled-primary-color-background-hover: #004e95;
  --component-button-filled-primary-color-background-pressed: #00315d;
  --component-button-filled-color-text-all: #ffffff;
  --component-button-filled-success-color-background-default: #118849;
  --component-button-filled-success-color-background-hover: #0c6536;
  --component-button-filled-success-color-background-pressed: #084826;
  --component-button-filled-danger-color-background-default: #e02e49;
  --component-button-filled-danger-color-background-hover: #b3253a;
  --component-button-filled-danger-color-background-pressed: #861c2c;
  --component-button-space-gap-small: 0.5rem;
  --component-button-space-gap-medium: 0.5rem;
  --component-button-space-gap-large: 0.5rem;
  --component-button-space-padding-x-small: 1.125rem;
  --component-button-space-padding-x-medium: 2.25rem;
  --component-button-space-padding-x-large: 3rem;
  --component-button-quiet-space-padding-x-small: 0.375rem;
  --component-button-quiet-space-padding-x-medium: 0.563rem;
  --component-button-quiet-space-padding-x-large: 0.563rem;
  --component-button-quiet-primary-color-text-default: #0062ba;
  --component-button-quiet-primary-color-text-pressed: #ffffff;
  --component-button-quiet-primary-color-background-hover: #e6eff8;
  --component-button-quiet-primary-color-background-pressed: #004e95;
  --component-button-outline-primary-color-text-default: #0062ba;
  --component-button-outline-primary-color-text-pressed: #ffffff;
  --component-button-outline-primary-color-border-default: #0062ba;
  --component-button-outline-primary-color-border-hover: #004e95;
  --component-button-outline-primary-color-background-default: #ffffff;
  --component-button-outline-primary-color-background-hover: #e6eff8;
  --component-button-outline-primary-color-background-pressed: #004e95;
  --component-button-border_width-default: 1px;
  --component-button-size-height-small: 2.25rem;
  --component-button-size-height-medium: 3rem;
  --component-button-size-height-large: 3.75rem;
  --component-button-size-icon-small: 1.5rem;
  --component-button-size-icon-medium: 1.875rem;
  --component-button-size-icon-large: 2.5rem;
  --component-input-color-border-default: #1e2b3c;
  --component-input-color-border-hover: #0062ba;
  --component-input-color-background-default: #ffffff;
  --component-input-color-background-hover: #ffffff;
  --component-input-color-background-focus: #ffffff;
  --component-input-error-color-border-default: #b3253a;
  --component-input-space-padding-x: 0.75rem;
  --component-input-space-padding-y: 0.375rem;
  --component-input-border_width-default: 2px;
  --component-input-border_width-focus: 4px;
  --component-input-read_only_info-color-border-default: #fff4b4;
  --component-input-read_only_info-color-background-default: #fff4b4;
  --component-input-read_only_confirm-color-background-default: #d1f4e1;
  --component-input-read_only_confirm-color-border-default: #d1f4e1;
  --component-input-size-min_height-default: 2.25rem;
  --component-input-font_size-sm: 1rem;
  --component-input-font_size-md: 1.125rem;
  --component-error_message-space-padding-top: 0.375rem;
  --component-error_message-color-text: #b3253a;
  --component-error_message-font_size-xs: 0.875rem;
  --border_width-thin: 1px;
  --border_width-standard: 2px;
  --space-half: 0.375;
  --space-base: 0.75;
  --space-x2: 1.5;
  --space-x3: 2.25;
  --space-x4: 3;
  --space-x5: 3.75;
  --space-x6: 4.5;
  --space-x7: 5.25;
  --space-x8: 6;
  --space-x16: 12;
  --interactive_components-border_radius-normal: 3px;
  --interactive_components-border_width-normal: 2px;
  --paragraph_space-default: 2.25rem;
  --font_size-100: 0.75rem;
  --font_size-200: 0.875rem;
  --font_size-300: 1rem;
  --font_size-400-breakpoint_sm: 1rem;
  --font_size-400-breakpoint_md: 1.125rem;
  --font_size-500-breakpoint_sm: 1rem;
  --font_size-500-breakpoint_md: 1.125rem;
  --font_size-500-breakpoint_lg: 1.25rem;
  --font_size-600-breakpoint_sm: 1.125rem;
  --font_size-600-breakpoint_md: 1.25rem;
  --font_size-600-breakpoint_lg: 1.5rem;
  --font_size-700-breakpoint_sm: 1.25rem;
  --font_size-700-breakpoint_md: 1.5rem;
  --font_size-700-breakpoint_lg: 1.75rem;
  --font_size-800-breakpoint_sm: 1.5rem;
  --font_size-800-breakpoint_md: 1.75rem;
  --font_size-800-breakpoint_lg: 2.25rem;
  --font_size-900-breakpoint_sm: 1.75rem;
  --font_size-900-breakpoint_md: 2.25rem;
  --font_size-900-breakpoint_lg: 2.75rem;
  --font_size-heading-h1-breakpoint_sm: 1.75rem;
  --font_size-heading-h1-breakpoint_md: 2.25rem;
  --font_size-heading-h1-breakpoint_lg: 2.75rem;
  --font_size-heading-h2-breakpoint_sm: 1.5rem;
  --font_size-heading-h2-breakpoint_md: 1.75rem;
  --font_size-heading-h2-breakpoint_lg: 2.25rem;
  --font_size-heading-h3-breakpoint_sm: 1.25rem;
  --font_size-heading-h3-breakpoint_md: 1.5rem;
  --font_size-heading-h3-breakpoint_lg: 1.75rem;
  --font_size-heading-h4-breakpoint_sm: 1.125rem;
  --font_size-heading-h4-breakpoint_md: 1.25rem;
  --font_size-heading-h4-breakpoint_lg: 1.5rem;
  --font_size-heading-h5-breakpoint_sm: 1rem;
  --font_size-heading-h5-breakpoint_md: 1.125rem;
  --font_size-heading-h5-breakpoint_lg: 1.25rem;
  --font_size-component-size-xs: 0.875rem;
  --font_size-component-size-sm: 1rem;
  --font_size-component-size-md: 1.125rem;
  --font_size-component-size-lg: 1.5rem;
  --font_size-body-medium: 1rem;
  --font_size-body-large-breakpoint_sm: 1rem;
  --font_size-body-large-breakpoint_md: 1.125rem;
  --font_size-label-small-breakpoint_sm: 1rem;
  --font_size-label-small-breakpoint_md: 1.125rem;
  --font_size-detail-default: 0.875rem;
  --font_size-ingress-small-breakpoint_sm: 1.125rem;
  --font_size-ingress-small-breakpoint_md: 1.25rem;
  --font_size-ingress-medium-breakpoint_sm: 1.25rem;
  --font_size-ingress-medium-breakpoint_md: 1.5rem;
  --font_family-default: Altinn-DIN;
  --font_family-heading: Altinn-DIN;
  --font_family-ingress: Altinn-DIN;
  --font_family-body: Altinn-DIN;
  --font_family-label: Altinn-DIN;
  --breakpoints-xs: 0px;
  --breakpoints-sm: 540px;
  --breakpoints-md: 768px;
  --breakpoints-lg: 960px;
  --breakpoints-xl: 1200px;
  --breakpoints-xxl: 1600px;
  --typography-default-font-family: Altinn-DIN;
  --typography-default-font-weight: Regular;
  --typography-default-line-height: 1.5;
  --typography-default-font-size: 1rem;
  --typography-default-letter-spacing: 0.3px;
  --typography-default-paragraph-spacing: 0;
  --typography-default-text-decoration: none;
  --typography-default-text-case: none;
  --size-base: 0.75rem;
  --size-x2: 1.5rem;
  --size-x3: 2.25rem;
  --size-x4: 3rem;
  --size-x5: 3.75rem;
  --size-x6: 4.5rem;
  --size-x7: 5.25rem;
  --size-x8: 6rem;
  --size-x10: 7.5rem;
  --size-x16: 12rem;
  --opacity-disabled: 30%;
  --colors-grey-100: #f4f5f6;
  --colors-grey-200: #e9eaec;
  --colors-grey-300: #d2d5d8;
  --colors-grey-400: #bcbfc5;
  --colors-grey-500: #a5aab1;
  --colors-grey-600: #68707c;
  --colors-grey-700: #4b5563;
  --colors-grey-800: #1e2b3c;
  --colors-grey-900: #141e29;
  --colors-white: #ffffff;
  --colors-black: #000000;
  --colors-red-100: #f9d5db;
  --colors-red-200: #f3abb6;
  --colors-red-300: #ec8292;
  --colors-red-400: #e6586d;
  --colors-red-500: #e02e49;
  --colors-red-600: #b3253a;
  --colors-red-700: #861c2c;
  --colors-red-800: #5a121d;
  --colors-red-900: #480e17;
  --colors-orange-100: #ffe8cd;
  --colors-orange-200: #ffd19b;
  --colors-orange-300: #ffba6a;
  --colors-orange-400: #ffa338;
  --colors-orange-500: #ff8c06;
  --colors-orange-600: #cc7005;
  --colors-orange-700: #995404;
  --colors-orange-800: #663802;
  --colors-orange-900: #522d02;
  --colors-yellow-100: #fffbe6;
  --colors-yellow-200: #fff4b4;
  --colors-yellow-300: #ffed83;
  --colors-yellow-400: #ffe551;
  --colors-yellow-500: #ffda06;
  --colors-yellow-600: #e6c405;
  --colors-yellow-700: #ccae05;
  --colors-yellow-800: #998304;
  --colors-yellow-900: #665702;
  --colors-green-100: #e8faf0;
  --colors-green-200: #d1f4e1;
  --colors-green-300: #8be4b5;
  --colors-green-400: #5dd997;
  --colors-green-500: #2ece7a;
  --colors-green-600: #15b560;
  --colors-green-700: #118849;
  --colors-green-800: #0c6536;
  --colors-green-900: #084826;
  --colors-blue-100: #e6eff8;
  --colors-blue-200: #b3d0ea;
  --colors-blue-300: #80b1dd;
  --colors-blue-400: #66a1d6;
  --colors-blue-500: #3381c8;
  --colors-blue-600: #1a72c1;
  --colors-blue-700: #0062ba;
  --colors-blue-800: #004e95;
  --colors-blue-900: #00315d;
  --colors-purple-100: #f5e8f2;
  --colors-purple-200: #e0b9d8;
  --colors-purple-300: #cc8bbf;
  --colors-purple-400: #b75da5;
  --colors-purple-500: #a22e8b;
  --colors-purple-600: #98177e;
  --colors-purple-700: #7a1265;
  --colors-purple-800: #5b0e4c;
  --colors-purple-900: #490b3d;
  --semantic-background-default: #ffffff;
  --semantic-background-subtle: #f4f5f6;
  --semantic-surface-neutral-default: #ffffff;
  --semantic-surface-neutral-subtle: #f4f5f6;
  --semantic-surface-neutral-subtle-hover: #e9eaec;
  --semantic-surface-neutral-selected: #e6eff8;
  --semantic-surface-neutral-inverted: #1e2b3c;
  --semantic-surface-action-subtle: #e6eff8;
  --semantic-surface-action-default: #0062ba;
  --semantic-surface-action-hover: #004e95;
  --semantic-surface-action-active: #00315d;
  --semantic-surface-success-subtle: #d1f4e1;
  --semantic-surface-success-default: #118849;
  --semantic-surface-success-hover: #0c6536;
  --semantic-surface-success-active: #084826;
  --semantic-surface-warning-subtle: #fffbe6;
  --semantic-surface-danger-subtle: #f9d5db;
  --semantic-surface-danger-default: #e02e49;
  --semantic-surface-danger-hover: #b3253a;
  --semantic-surface-danger-active: #861c2c;
  --semantic-surface-info-subtle: #e6eff8;
  --semantic-border-info-default: #004e95;
  --semantic-border-action-subtle: #e6eff8;
  --semantic-border-action-default: #0062ba;
  --semantic-border-action-hover: #004e95;
  --semantic-border-action-active: #00315d;
  --semantic-border-neutral-default: #68707c;
  --semantic-border-neutral-subtle: #d2d5d8;
  --semantic-border-neutral-strong: #1e2b3c;
  --semantic-border-neutral-divider: #bcbfc5;
  --semantic-border-success-default: #0c6536;
  --semantic-border-warning-default: #cc7005;
  --semantic-border-danger-default: #b3253a;
  --semantic-tab_focus-outline-color: #98177e;
  --semantic-tab_focus-outline-offset: 2px;
  --semantic-tab_focus-outline-width: 2px;
  --semantic-text-success-default: #0c6536;
  --semantic-text-success-on_success: #ffffff;
  --semantic-text-neutral-default: #1e2b3c;
  --semantic-text-neutral-subtle: #68707c;
  --semantic-text-neutral-on_inverted: #ffffff;
  --semantic-text-action-default: #0062ba;
  --semantic-text-action-on_action: #ffffff;
  --semantic-text-warning-default: #995404;
  --semantic-text-warning-on_warning: #663802;
  --semantic-text-warning-icon_warning: #cc7005;
  --semantic-text-danger-default: #b3253a;
  --semantic-text-danger-on_danger: #ffffff;
  --semantic-text-visited-default: #7a1265;
  --brand-default-first-100: #feefef;
  --brand-default-first-200: #fddfe0;
  --brand-default-first-300: #fbbfc1;
  --brand-default-first-400: #f89fa1;
  --brand-default-first-500: #f67f82;
  --brand-default-first-600: #f45f63;
  --brand-default-first-700: #dc5659;
  --brand-default-first-800: #c34c4f;
  --brand-default-second-100: #fcf7e9;
  --brand-default-second-200: #faeec2;
  --brand-default-second-300: #f5dda6;
  --brand-default-second-400: #efcc79;
  --brand-default-second-500: #eabb4d;
  --brand-default-second-600: #e5aa20;
  --brand-default-second-700: #ce991d;
  --brand-default-second-800: #b7881a;
  --brand-default-third-100: #e9f5ff;
  --brand-default-third-200: #d2eafd;
  --brand-default-third-300: #a5d6fb;
  --brand-default-third-400: #78c1f9;
  --brand-default-third-500: #4badf7;
  --brand-default-third-600: #1e98f5;
  --brand-default-third-700: #1b88dd;
  --brand-default-third-800: #156aac;
}
`);Ae(`@import 'https://altinncdn.no/fonts/altinn-din/altinn-din.css';

html {
  font-family: var(--font_family-default), sans-serif;
}
`);E.createContext(void 0);Ae(`.ToggleButtonGroup-module_toggle-button-group__op1wi {
  border-color: var(--component-toggle_button-color-border-inactive);
  border-width: 2px;
  border-style: solid;
  min-height: 32px;
  border-radius: 3px;
  display: inline-grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  width: var(--toggle-button-group-width);
}

/* breakpoints-xs */
@media only screen and (min-width: 0) {
  .ToggleButtonGroup-module_toggle-button-group__op1wi {
    --toggle-button-group-width: 100%;
  }
}

/* breakpoints-md and above */
@media only screen and (min-width: 768px) {
  .ToggleButtonGroup-module_toggle-button-group__op1wi {
    --toggle-button-group-width: auto;
  }
}
`);Ae(`.ToggleButton-module_toggle-button__g4lb- {
  border-radius: 0;
  border: none;
  padding-left: var(--component-toggle_button-space-padding-x);
  padding-right: var(--component-toggle_button-space-padding-x);
  font-family: inherit;
  background-color: var(--component-toggle_button-color-background-inactive);
  color: var(--component-toggle_button-color-text-inactive);
  font-size: var(--component-toggle_button-font_size-sm);
  height: 100%;
}

.ToggleButton-module_toggle-button--selected__Gm7TD {
  background-color: var(--component-toggle_button-color-background-active);
  color: var(--component-toggle_button-color-text-active);
}

.ToggleButton-module_toggle-button__g4lb-:not(.ToggleButton-module_toggle-button--selected__Gm7TD):hover {
  background-color: var(--colors-blue-200);
}
`);var Qv;(function(e){e.Primary="primary",e.Secondary="secondary"})(Qv||(Qv={}));E.createContext(void 0);Ae(`.Accordion-module_accordion__LVhhv {
  --component-accordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;
  background-color: var(--component-accordion-color-background);
  width: var(--component-panel-size-width);
}
`);Ae(`.AccordionHeader-module_accordion-header__QlYjQ {
  --component-accordion_header-border_top_style: solid;
  --component-accordion_header-border_top_color: var(--colors-neutral-200);
  --component-accordion_header-border_top_width: var(--border_width-thin);
  --component-accordion_header-color-background: var(--colors-white);
  display: flex;
  border-top-width: var(--component-accordion_header-border_top_width);
  border-top-style: var(--component-accordion_header-border_top_style);
  border-top-color: var(--component-accordion_header-border_top_color);
  background-color: var(--component-accordion_header-color-background);
}

/* breakpoints-xs */
@media only screen and (min-width: 0) {
  .AccordionHeader-module_accordion-header__subtitle__OSUoH {
    display: none;
  }
}

/* breakpoints-sm */
@media only screen and (min-width: 540px) {
  .AccordionHeader-module_accordion-header__subtitle__OSUoH {
    opacity: 60%;
    font-size: 0.9rem;
    display: block;
  }
  .AccordionHeader-module_accordion-header--subtitle__DNear {
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    padding-right: 0.2rem;
  }
}

.AccordionHeader-module_accordion-header__title__ss-G6 {
  --component-accordion_header_title-spacing-margin_left: 1.6rem;
  --component-accordion_header_title-border_top_style: none;
  --component-accordion_header_title-border_bottom_style: none;
  --component-accordion_header_title-border_right_style: none;
  --component-accordion_header_title-border_left_style: none;
  --component-accordion_header_title-font_size: var(--font_size-300);
  --component-accordion_header_title-font_weight: var(
    --component-panel-font_weight-heading
  );
  --component-accordion_header_title-color-background: none;
  font-family: inherit;
  flex: 1 1 auto;
  border-top-style: var(--component-accordion_header_title-border_top_style);
  border-bottom-style: var(
    --component-accordion_header_title-border_bottom_style
  );
  border-left-style: var(--component-accordion_header_title-border_left_style);
  border-right-style: var(
    --component-accordion_header_title-border_right_style
  );
  text-align: var(--component-accordion_header_title-text-align);
  background-color: var(--component-accordion_header_title-color-background);
  font-size: var(--component-accordion_header_title-font_size);
  font-weight: var(--component-accordion_header_title-font_weight);
  margin-left: var(--component-accordion_header_title-spacing-margin_left);
  line-height: 16px;
}

.AccordionHeader-module_accordion-header__actions__eYrxF {
  display: grid;
  grid-auto-flow: column;
  column-gap: 0.3rem;
  align-items: center;
  padding: 0 0.2rem;
}
`);Ae(`.AccordionIcon-module_accordion-icon__PWdLi {
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  margin-left: 1.6rem;
  box-sizing: border-box;
  flex-shrink: 0;
}

.AccordionIcon-module_accordion-icon--opened__Vv1Nk {
  transform: rotate(90deg);
}
`);function Rw(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}const Gv=e=>{var{svgIconComponent:t}=e,n=Rw(e,["svgIconComponent"]);return E.isValidElement(t)?E.cloneElement(t,Object.assign({},n)):null};var Wh,Hh,Vh,Jn={"altinn-button":"Button-module_altinn-button__66e22",icon:"Button-module_icon__-43u5","altinn-button--small":"Button-module_altinn-button--small__Dgk-Q","altinn-button--medium":"Button-module_altinn-button--medium__bOVBh","altinn-button--large":"Button-module_altinn-button--large__xStsn","altinn-button--full-width":"Button-module_altinn-button--full-width__MAP1E","altinn-button--dashed-border":"Button-module_altinn-button--dashed-border__qpC6S","altinn-button--only-icon":"Button-module_altinn-button--only-icon__dHhst","altinn-button--filled":"Button-module_altinn-button--filled__-w8IZ","altinn-button--outline":"Button-module_altinn-button--outline__NWnjl","altinn-button--quiet":"Button-module_altinn-button--quiet__2HgNN","altinn-button--filled--primary":"Button-module_altinn-button--filled--primary__qR1t6","altinn-button--filled--secondary":"Button-module_altinn-button--filled--secondary__RXBZU","altinn-button--filled--success":"Button-module_altinn-button--filled--success__-hCDf","altinn-button--filled--danger":"Button-module_altinn-button--filled--danger__dshZU","altinn-button--filled--inverted":"Button-module_altinn-button--filled--inverted__B3H2y","altinn-button--outline--primary":"Button-module_altinn-button--outline--primary__yrQtz","altinn-button--outline--secondary":"Button-module_altinn-button--outline--secondary__NQPoO","altinn-button--outline--success":"Button-module_altinn-button--outline--success__oAdH7","altinn-button--outline--danger":"Button-module_altinn-button--outline--danger__ngRhZ","altinn-button--outline--inverted":"Button-module_altinn-button--outline--inverted__opiJ3","altinn-button--quiet--primary":"Button-module_altinn-button--quiet--primary__ym-xv","altinn-button--quiet--secondary":"Button-module_altinn-button--quiet--secondary__LschY","altinn-button--quiet--success":"Button-module_altinn-button--quiet--success__AvIPs","altinn-button--quiet--danger":"Button-module_altinn-button--quiet--danger__buvJM","altinn-button--quiet--inverted":"Button-module_altinn-button--quiet--inverted__-VC-B"};Ae(`.Button-module_altinn-button__66e22 {
  --icon-size: var(--component-button-size-icon-small);
  --button-vertical-padding: var(--component-button-space-padding-x-small);

  all: initial; /* reset all styles to default, to avoid style overrides/surprises caused by other css (from Design system v1 f.ex) */
  font-family: inherit;
  border: var(--component-button-border_width-default) solid transparent;
  padding: 0 var(--button-vertical-padding);
  text-align: center;
  box-sizing: border-box;
  letter-spacing: var(--typography-default-letter-spacing);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Button-module_altinn-button__66e22:focus-visible {
  outline: var(--interactive_components-colors-focus_outline) solid
    var(--border_width-standard);
  outline-offset: var(--border_width-standard);
}

.Button-module_altinn-button__66e22:focus:not(:focus-visible) {
  outline: none;
}

.Button-module_altinn-button__66e22:disabled {
  cursor: auto;
  opacity: var(--interactive_components-colors-disabled-opacity);
}

.Button-module_icon__-43u5 {
  height: var(--icon-size);
  width: var(--icon-size);
}

.Button-module_altinn-button--small__Dgk-Q {
  height: var(--component-button-size-height-small);
  font-size: var(--font_size-300);
  --icon-size: var(--component-button-size-icon-small);
  --button-vertical-padding: var(--component-button-space-padding-x-small);
  gap: var(--component-button-space-gap-small);
}

.Button-module_altinn-button--medium__bOVBh {
  height: var(--component-button-size-height-medium);
  min-width: var(--component-button-size-height-medium);
  font-size: var(--font_size-400-breakpoint_md);
  --icon-size: var(--component-button-size-icon-medium);
  --button-vertical-padding: var(--component-button-space-padding-x-medium);
  gap: var(--component-button-space-gap-medium);
}

.Button-module_altinn-button--large__xStsn {
  height: var(--component-button-size-height-large);
  min-width: var(--component-button-size-height-large);
  font-size: var(--font_size-600-breakpoint_md);
  --icon-size: var(--component-button-size-icon-large);
  --button-vertical-padding: var(--component-button-space-padding-x-large);
  gap: var(--component-button-space-gap-large);
}

.Button-module_altinn-button--full-width__MAP1E {
  width: 100%;
}

.Button-module_altinn-button--dashed-border__qpC6S {
  border-style: dashed;
}

.Button-module_altinn-button--only-icon__dHhst {
  padding: 0.5rem !important;
}

.Button-module_altinn-button--filled__-w8IZ {
  border-radius: 3px;
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
}

.Button-module_altinn-button--outline__NWnjl {
  border-radius: 3px;
  background-color: transparent;
}

.Button-module_altinn-button--quiet__2HgNN {
  border-radius: 50px;
  padding: 0 calc(var(--button-vertical-padding) * 2 / 3);
  background-color: transparent;
}

/* Filled button colors */
.Button-module_altinn-button--filled--primary__qR1t6 {
  background: var(--component-button-filled-primary-color-background-default);
}

.Button-module_altinn-button--filled--primary__qR1t6:not(:disabled):hover {
  background: var(--component-button-filled-primary-color-background-hover);
}

.Button-module_altinn-button--filled--primary__qR1t6:not(:disabled):active {
  background: var(--component-button-filled-primary-color-background-pressed);
}

.Button-module_altinn-button--filled--secondary__RXBZU {
  background: var(--component-button-filled-primary-color-background-pressed);
}

.Button-module_altinn-button--filled--secondary__RXBZU:not(:disabled):hover {
  background: var(--colors-blue-800);
}

.Button-module_altinn-button--filled--secondary__RXBZU:not(:disabled):active {
  background: var(--colors-blue-950);
}

.Button-module_altinn-button--filled--success__-hCDf {
  background: var(--component-button-filled-success-color-background-default);
}

.Button-module_altinn-button--filled--success__-hCDf:not(:disabled):hover {
  background: var(--component-button-filled-success-color-background-hover);
}

.Button-module_altinn-button--filled--success__-hCDf:not(:disabled):active {
  background: var(--component-button-filled-success-color-background-pressed);
}

.Button-module_altinn-button--filled--danger__dshZU {
  background: var(--component-button-filled-danger-color-background-default);
}

.Button-module_altinn-button--filled--danger__dshZU:not(:disabled):hover {
  background: var(--component-button-filled-danger-color-background-hover);
}

.Button-module_altinn-button--filled--danger__dshZU:not(:disabled):active {
  background: var(--colors-red-800);
}

.Button-module_altinn-button--filled--inverted__B3H2y {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
}

.Button-module_altinn-button--filled--inverted__B3H2y:not(:disabled):hover {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: rgba(255, 255, 255, 0.9);
}

.Button-module_altinn-button--filled--inverted__B3H2y:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: rgba(255, 255, 255, 0.1);
}

.Button-module_altinn-button--filled--inverted__B3H2y:focus-visible {
  outline-color: var(--colors-white);
}

/* Outline button colors */
.Button-module_altinn-button--outline--primary__yrQtz {
  color: var(--component-button-outline-primary-color-text-default);
  fill: var(--component-button-outline-primary-color-text-default);
  border-color: var(--component-button-outline-primary-color-border-default);
  background: var(--component-button-outline-primary-color-background-default);
}

.Button-module_altinn-button--outline--primary__yrQtz:not(:disabled):hover {
  color: var(--colors-blue-800);
  fill: var(--colors-blue-800);
  background: var(--component-button-outline-primary-color-background-hover);
  border-color: var(--component-button-outline-primary-color-border-hover);
}

.Button-module_altinn-button--outline--primary__yrQtz:not(:disabled):active {
  color: var(--component-button-outline-primary-color-text-pressed);
  fill: var(--component-button-outline-primary-color-text-pressed);
  background: var(--component-button-outline-primary-color-background-pressed);
}

.Button-module_altinn-button--outline--secondary__NQPoO {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
  border-color: var(--colors-blue-900);
}

.Button-module_altinn-button--outline--secondary__NQPoO:not(:disabled):hover {
  background: var(--colors-blue-200);
}

.Button-module_altinn-button--outline--secondary__NQPoO:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: var(--colors-blue-900);
}

.Button-module_altinn-button--outline--success__oAdH7 {
  color: var(--colors-green-700);
  fill: var(--colors-green-700);
  background: var(--colors-white);
  border-color: var(--colors-green-700);
}

.Button-module_altinn-button--outline--success__oAdH7:not(:disabled):hover {
  color: var(--colors-green-800);
  fill: var(--colors-green-800);
  background: var(--colors-green-300);
}

.Button-module_altinn-button--outline--success__oAdH7:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: var(--colors-green-700);
}

.Button-module_altinn-button--outline--danger__ngRhZ {
  color: var(--colors-red-500);
  fill: var(--colors-red-500);
  background: var(--colors-white);
  border-color: var(--colors-red-500);
}

.Button-module_altinn-button--outline--danger__ngRhZ:not(:disabled):hover {
  color: var(--colors-red-700);
  fill: var(--colors-red-700);
  background: var(--colors-red-200);
  border-color: var(--colors-red-700);
}

.Button-module_altinn-button--outline--danger__ngRhZ:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: var(--colors-red-500);
}

.Button-module_altinn-button--outline--inverted__opiJ3 {
  color: var(--colors-white);
  fill: var(--colors-white);
  border-color: var(--colors-white);
  background: transparent;
}

.Button-module_altinn-button--outline--inverted__opiJ3:not(:disabled):hover {
  background: rgba(255, 255, 255, 0.1);
}

.Button-module_altinn-button--outline--inverted__opiJ3:not(:disabled):active {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
}

.Button-module_altinn-button--outline--inverted__opiJ3:focus-visible {
  outline-color: var(--colors-white);
}

/* Quiet button colors */
.Button-module_altinn-button--quiet--primary__ym-xv {
  color: var(--component-button-quiet-primary-color-text-default);
  fill: var(--component-button-quiet-primary-color-text-default);
}

.Button-module_altinn-button--quiet--primary__ym-xv:not(:disabled):hover {
  color: var(--colors-blue-800);
  fill: var(--colors-blue-800);
  background: var(--component-button-quiet-primary-color-background-hover);
}

.Button-module_altinn-button--quiet--primary__ym-xv:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--component-button-quiet-primary-color-background-pressed);
}

.Button-module_altinn-button--quiet--secondary__LschY {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
}

.Button-module_altinn-button--quiet--secondary__LschY:not(:disabled):hover {
  background: var(--colors-neutral-400);
}

.Button-module_altinn-button--quiet--secondary__LschY:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--colors-blue-900);
}

.Button-module_altinn-button--quiet--success__AvIPs {
  color: var(--colors-green-700);
  fill: var(--colors-green-700);
}

.Button-module_altinn-button--quiet--success__AvIPs:not(:disabled):hover {
  color: var(--colors-green-800);
  fill: var(--colors-green-800);
  background: var(--colors-green-300);
}

.Button-module_altinn-button--quiet--success__AvIPs:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--colors-green-900);
}

.Button-module_altinn-button--quiet--danger__buvJM {
  color: var(--colors-red-600);
  fill: var(--colors-red-600);
}

.Button-module_altinn-button--quiet--danger__buvJM:not(:disabled):hover {
  color: var(--colors-red-800);
  fill: var(--colors-red-800);
  background: var(--colors-red-200);
}

.Button-module_altinn-button--quiet--danger__buvJM:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--colors-red-800);
}

.Button-module_altinn-button--quiet--inverted__-VC-B {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: transparent;
}

.Button-module_altinn-button--quiet--inverted__-VC-B:not(:disabled):hover {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: rgba(255, 255, 255, 0.9);
}

.Button-module_altinn-button--quiet--inverted__-VC-B:not(:disabled):active {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
}

.Button-module_altinn-button--quiet--inverted__-VC-B:focus-visible {
  outline-color: var(--colors-white);
}
`),function(e){e.Small="small",e.Medium="medium",e.Large="large"}(Wh||(Wh={})),function(e){e.Primary="primary",e.Secondary="secondary",e.Success="success",e.Danger="danger",e.Inverted="inverted"}(Hh||(Hh={})),function(e){e.Filled="filled",e.Outline="outline",e.Quiet="quiet"}(Vh||(Vh={}));var Uu,$u;E.forwardRef((e,t)=>{var{children:n,color:r=Hh.Primary,variant:o=Vh.Filled,size:a=Wh.Small,fullWidth:s=!1,dashedBorder:u=!1,iconPlacement:d="left",icon:f,type:p="button",className:m}=e,_=Rw(e,["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"]);return U.createElement("button",Object.assign({},_,{ref:t,className:Hi(Jn["altinn-button"],Jn[`altinn-button--${a}`],Jn[`altinn-button--${o}`],Jn[`altinn-button--${r}`],Jn[`altinn-button--${o}--${r}`],{[Jn["altinn-button--full-width"]]:s},{[Jn["altinn-button--dashed-border"]]:u},{[Jn["altinn-button--only-icon"]]:!n&&f},m),type:p}),f&&d==="left"&&U.createElement(Gv,{svgIconComponent:f,className:Jn.icon}),n,f&&d==="right"&&U.createElement(Gv,{svgIconComponent:f,className:Jn.icon}))});(function(e){e.Primary="primary",e.Success="success"})(Uu||(Uu={})),function(e){e.Small="small",e.Medium="medium"}($u||($u={}));const vL=E.createContext({color:Uu.Primary,size:$u.Medium});var yL="Page-module_page__THNNc";Ae(`.Page-module_page__THNNc {
  width: 100%;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
}
`);const bL=({children:e,color:t=Uu.Primary,size:n=$u.Medium})=>U.createElement("div",{className:yL},U.createElement(vL.Provider,{value:{color:t,size:n}},e));Ae(`.PageHeader-module_page-header__94GS1 {
  height: var(--page-header-height);
  background-color: var(--component-page_header-background-color);
  display: flex;
  width: 100%;
  color: var(--component-page_header-color);
  gap: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  box-sizing: inherit;
  align-items: center;
  font-size: var(--page_header-title-font-size);
  fill: var(--component-page_header-color);
}

.PageHeader-module_page-header--primary__-DYm- {
  --component-page_header-background-color: #022f51;
  --component-page_header-color: white;
}

.PageHeader-module_page-header--success__JUNEP {
  --component-page_header-background-color: #17c96b;
  --component-page_header-color: black;
}

.PageHeader-module_page-header--small__iSiFU {
  --page_header-title-font-size: 18px;
  --page-header-height: 72px;
}

.PageHeader-module_page-header--medium__TiCR6 {
  --page_header-title-font-size: 28px;
  --page-header-height: 96px;
}
`);var xL={"page-content":"PageContent-module_page-content__-sHWi"};Ae(`.PageContent-module_page-content__-sHWi {
  --component-page_content-vertical-padding: 2rem;
  background-color: white;
  padding-top: var(--component-page_content-vertical-padding);
  padding-bottom: var(--component-page_content-vertical-padding);
  box-sizing: inherit;
}
`);const lf=({children:e})=>U.createElement("div",{className:Hi(xL["page-content"])},e);var Zh;Ae(`.List-module_list__9aWGq {
  padding-left: 0;
  list-style-type: none;
  border-top-color: var(--component-list-border_top_color);
  border-top-style: var(--component-list-border_top_style);
  border-top-width: var(--component-list-border_top_width);
}

.List-module_list--solid__--Ld- {
  --component-list-border_top_color: #bcc7cc;
  --component-list-border_top_style: solid;
  --component-list-border_top_width: 0.1rem;
}

.List-module_list--dashed__CDfmL {
  --component-list-border_top_color: #1eadf7;
  --component-list-border_top_style: dashed;
  --component-list-border_top_width: 0.1rem;
}
`),function(e){e.Solid="solid",e.Dashed="dashed"}(Zh||(Zh={}));E.createContext({borderStyle:Zh.Solid});Ae(`.ListItem-module_list-item__OIENi {
  display: block;
  border-bottom-color: var(--component-list_item-border_bottom_color);
  border-bottom-style: var(--component-list_item-border-bottom-style);
  border-bottom-width: var(--component-list_item-border-bottom-width);
}

.ListItem-module_list-item--solid__H4Nk8 {
  --component-list_item-border_bottom_color: #bcc7cc;
  --component-list_item-border-bottom-style: solid;
  --component-list_item-border-bottom-width: 0.1rem;
}

.ListItem-module_list-item--dashed__26PJV {
  --component-list_item-border-bottom-width: 0.1rem;
  --component-list_item-border_bottom_color: #1eadf7;
  --component-list_item-border-bottom-style: dashed;
}
`);var Jv,Yv,Xv;(function(e){e.Default="default",e.Error="error",e.Disabled="disabled",e.ReadOnlyInfo="readonly-info",e.ReadOnlyConfirm="readonly-confirm"})(Jv||(Jv={})),function(e){e.ReadOnlyInfo="readonly-info",e.ReadOnlyConfirm="readonly-confirm"}(Yv||(Yv={})),function(e){e.None="none",e.Error="error",e.Search="search"}(Xv||(Xv={}));Ae(`.InputWrapper-module_InputWrapper__us2BQ {
  --background: var(--component-input-color-background-default);
  --border-color: var(--component-input-color-border-default);
  --outline-color: var(--component-input-color-outline-focus);
  --icon-background: transparent;
  --paddingY: 0;
  --paddingX: 0;
  background: var(--background);
  border-width: var(--component-input-border_width-default);
  border-radius: var(--interactive_components-border_radius-normal);
  border-style: solid;
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
  border-color: var(--border-color);
}

.InputWrapper-module_InputWrapper--with-focus-effect__24aF7:focus-within {
  outline: var(--outline-color) auto var(--border_width-thin);
  outline-offset: calc(var(--border_width-thin) + var(--border_width-standard));
}

.InputWrapper-module_InputWrapper--default__Lcj6I:hover {
  --border-color: var(--component-input-color-border-hover);
}

.InputWrapper-module_InputWrapper--error__C8fG3 {
  --icon-background: var(--component-input-error-color-border-default);
  --border-color: var(--component-input-error-color-border-default);
}

.InputWrapper-module_InputWrapper--error__C8fG3:hover {
  --icon-background: var(--component-input-error-color-border-hover);
  --border-color: var(--component-input-error-color-border-hover);
}

.InputWrapper-module_InputWrapper--disabled__p0H70 {
  --background: repeating-linear-gradient(
    135deg,
    #efefef,
    #efefef 2px,
    #fff 3px,
    #fff 5px
  );
  --border-color: var(--component-input-disabled-color-border-default);
}

.InputWrapper-module_InputWrapper--readonly-info__u6Mi8 {
  --background: var(--component-input-read_only_info-color-background-default);
  --border-color: var(--component-input-read_only_info-color-border-default);
}

.InputWrapper-module_InputWrapper--readonly-confirm__Y-YY- {
  --background: var(
    --component-input-read_only_confirm-color-background-default
  );
  --border-color: var(--component-input-read_only_confirm-color-border-default);
}

.InputWrapper-module_InputWrapper--search__1aIP8 {
  flex-direction: row-reverse;
}

.InputWrapper-module_InputWrapper--with-padding__o-H2V {
  /* Subtract size of border on padding-y, because border is on outer element. Without this, height of entire component will be too big */
  --paddingY: calc(
    var(--component-input-space-padding-y) -
      var(--component-input-border_width-default)
  );
  --paddingX: var(--component-input-space-padding-x);
}

.InputWrapper-module_InputWrapper__field__-Uwxu {
  box-sizing: border-box;
  border: none;
  outline: none;
  padding: var(--paddingY) var(--paddingX);
  width: 100%;
  background: var(--background);
}

.InputWrapper-module_InputWrapper__icon__tbkEy {
  background: var(--icon-background);
  padding-right: var(--component-input-border_width-focus);
  padding-left: var(--component-input-border_width-default);
  display: flex;
  align-items: center;
  flex: none;
}

.InputWrapper-module_InputWrapper__icon--disabled__mmqUt {
  opacity: 60%;
}

.InputWrapper-module_InputWrapper__label__tLifi {
  font-weight: var(--component-label-font_weight-default);
  padding: 0;
}
`);Ae(`.ErrorMessage-module_altinn-error-message-wrapper__zR1LF {
  color: var(--component-error_message-color-text);
  font-size: var(--component-error_message-font_size-xs);
}
`);Ae(`.Map-module_map__mpwLI {
  position: relative;
  height: 50rem;
  width: 100%;
}
`);var qh,ey;Ae(`Table {
  /* #FFFFFF */

  /* Inside auto layout */
  background-color: #ffffff;
  flex: none;
  order: 3;
  align-self: stretch;
  flex-grow: 0;
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12);
}
`),function(e){e.Header="header",e.Body="body",e.Footer="footer"}(qh||(qh={})),function(e){e.Descending="desc",e.Ascending="asc",e.NotSortable="notSortable",e.NotActive="notActive"}(ey||(ey={}));E.createContext(void 0);E.createContext({variantStandard:qh.Body});Ae(`.TableHeader-module_table-header__mrqgB {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`);Ae(`.TableRow-module_TableRow__3GK6I {
  width: 1056px;
  height: 60px;
}

.TableRow-module_table-row--selected__0i2on {
  background-color: #e0daf7;
  border-top: 1px solid #dde3e5;
  border-bottom: 1px solid #dde3e5;
  border-left: 2px solid #011728;
}

.TableRow-module_table-row--body__CP23F:hover {
  background-color: #e3f7ff;
  cursor: pointer;
}
`);Ae(`.TableBody-module_TableBody__tqUvt {
  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  background-color: #ffff;
}
`);Ae(`.TableCell-module_header-table-cell__NOs4b {
  text-align: left;
  padding: 8px;
  margin: 20px 0 20px 0;
  background: #f5f5f5;
  user-select: none;
}

.TableCell-module_header-table-cell-radiobutton__I1mdW {
  text-align: left;
  padding: 8px;
  margin: 10px 0 10px 0;
  background: #f5f5f5;
  user-select: none;
}

.TableCell-module_body-table-cell__MhHfa {
  text-align: left;
  border-top: 1px solid #dde3e5;
  max-width: 300px;
  margin: 20px 0 20px 0;
  border-top: 1px solid #dde3e5;
  border-bottom: 1px solid #dde3e5;
}

.TableCell-module_body-table-cell-radiobutton__kha-K {
  text-align: left;
  border-top: 1px solid #dde3e5;
  border-top: 1px solid #dde3e5;
  border-bottom: 1px solid #dde3e5;
}

.TableCell-module_image__vWvwd {
  max-width: 45px;
  max-height: 45px;
}

.TableCell-module_input__cyAaE {
  margin: 0px 15px 0px 15px;
}
.TableCell-module_radio-button__FbSRH {
  margin: 0px 0px 0px 15px;
}

.TableCell-module_container-sortable__70xdN {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

.TableCell-module_icon__ADG4G {
  fill: rgba(0, 0, 0, 0.4);
  margin-left: -5px;
}

.TableCell-module_icon-desc__do5N3 {
  fill: rgb(0, 0, 0);
  margin-left: -5px;
}

.TableCell-module_icon-asc__96gN7 {
  fill: rgb(0, 0, 0);
  transform: rotate(180deg);
  margin-left: -5px;
}

.TableCell-module_header__HuaKn {
  color: #4b5563;
  font-weight: 600;
  margin: 10px 10px 10px 0;
}

.TableCell-module_property__k74rm {
  margin: 10px 10px 10px 0;
}
`);Ae(`.TableFooter-module_table-footer__FJZKm {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`);var ty;Ae(`.CheckboxRadioTemplate-module_altinn-template__x5xJ- {
  --cursor: pointer;
  --description-color: var(--component-field_description-color-text-default);
  --label-color: var(--component-checkbox-color-text-default);
  --opacity: 1;

  border-radius: var(--input_box-border_radius);
  cursor: var(--cursor);
  display: inline-flex;
  flex-direction: row;
  font-size: var(--font_size);
  gap: var(--gap);
  line-height: var(--typography-default-line-height);
  opacity: var(--opacity);
}

.CheckboxRadioTemplate-module_altinn-template--xsmall__oK4HN {
  --description-margin_top: var(--component-field_description-space-top-xsmall);
  --font_size: var(--component-checkbox-font_size-xs);
  --gap: var(--component-checkbox-space-gap-xsmall);
}

.CheckboxRadioTemplate-module_altinn-template--small__AkNZO {
  --description-margin_top: var(--component-field_description-space-top-small);
  --font_size: var(--component-checkbox-font_size-sm);
  --gap: var(--component-checkbox-space-gap-small);
}

.CheckboxRadioTemplate-module_altinn-template__x5xJ-:not(.CheckboxRadioTemplate-module_altinn-template--disabled__M05zX):hover {
  --label-color: var(--component-checkbox-color-text-hover);
}

.CheckboxRadioTemplate-module_altinn-template--disabled__M05zX {
  --cursor: auto;
  --opacity: var(--interactive_components-colors-disabled-opacity);
}

.CheckboxRadioTemplate-module_altinn-template__input-wrapper__ToryX {
  display: inline-block;
  height: var(--input_box-size);
  position: relative;
}

.CheckboxRadioTemplate-module_altinn-template__input-wrapper__input__SiID4 {
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;
}

.CheckboxRadioTemplate-module_altinn-template__input-wrapper__visible-box__qrEbd {
  display: inline-block;
  flex: 0 0 var(--input_box-size);
  height: var(--input_box-size);
  position: relative;
  width: var(--input_box-size);
}

.CheckboxRadioTemplate-module_altinn-template__label-and-description__jBhWL {
  display: inline-flex;
  flex-direction: column;
  gap: var(--description-margin_top);

  /* Center-align input box with the first line in the label */
  margin-top: calc(
    (
        var(--input_box-size) -
          (var(--typography-default-line-height) * var(--font_size))
      ) / 2
  );
}

.CheckboxRadioTemplate-module_altinn-template__label-and-description__label__p2F6D {
  color: var(--label-color);
}

.CheckboxRadioTemplate-module_altinn-template__label-and-description__description__vqkxP {
  color: var(--description-color);
}

@supports not selector(:has(:focus-visible)) {
  .CheckboxRadioTemplate-module_altinn-template__x5xJ-:not(.CheckboxRadioTemplate-module_altinn-template--disabled__M05zX):focus-within {
    outline: 2px solid var(--interactive_components-colors-focus_outline);
    outline-offset: 2px;
  }
}

.CheckboxRadioTemplate-module_altinn-template__x5xJ-:not(.CheckboxRadioTemplate-module_altinn-template--disabled__M05zX):has(:focus-visible) {
  outline: 2px solid var(--interactive_components-colors-focus_outline);
  outline-offset: 2px;
}
`),function(e){e.Xsmall="xsmall",e.Small="small"}(ty||(ty={}));var ny;Ae(`.RadioButton-module_altinn-radio__iDfpf {
  /* Internal variables */
  --radio-background_color: var(--component-checkbox-color-background-default);
  --radio-border_color: var(--component-checkbox-color-border-default);
  --radio-border_width: var(--component-checkbox-border_width-small);
  --radio-checkmark-color: var(--colors-blue-700);
  --radio-checkmark-display: none;
  --radio-size: var(--component-checkbox-size-width-small);

  /* Variables used by CheckboxRadioTemplate */
  --input_box-border_radius: calc(var(--radio-size) / 2);
  --input_box-size: var(--radio-size);
}

.RadioButton-module_altinn-radio--small__DK5Mw {
  --radio-size: var(--component-checkbox-size-width-small);
}

.RadioButton-module_altinn-radio--xsmall__pYclx {
  --radio-size: var(--component-checkbox-size-width-xsmall);
}

.RadioButton-module_altinn-radio--error__-z3qC {
  --radio-background_color: var(--component-checkbox-color-background-error);
  --radio-border_color: var(--component-checkbox-color-border-error);
}

.RadioButton-module_altinn-radio--checked__LWN7U {
  --radio-checkmark-display: inline-block;
}

.RadioButton-module_altinn-radio--checked__LWN7U:not(.RadioButton-module_altinn-radio--disabled__XCncL, .RadioButton-module_altinn-radio--error__-z3qC) {
  --radio-border_color: var(--component-checkbox-color-border-checked);
}

.RadioButton-module_altinn-radio__iDfpf:not(.RadioButton-module_altinn-radio--disabled__XCncL, .RadioButton-module_altinn-radio--checked__LWN7U):hover {
  --radio-background_color: var(--component-checkbox-color-background-hover);
}

.RadioButton-module_altinn-radio__iDfpf:not(
    .RadioButton-module_altinn-radio--disabled__XCncL,
    .RadioButton-module_altinn-radio--error__-z3qC,
    .RadioButton-module_altinn-radio--checked__LWN7U
  ):hover {
  --radio-border_color: var(--component-checkbox-color-border-hover);
}

.RadioButton-module_altinn-radio--disabled__XCncL.RadioButton-module_altinn-radio--checked__LWN7U {
  --radio-background_color: var(--component-checkbox-color-border-disabled);
  --radio-border_color: transparent;
}

.RadioButton-module_altinn-visible-button__2nitf {
  background-color: var(--radio-background_color);
  border-color: var(--radio-border_color);
  border-radius: 50%;
  border-style: solid;
  border-width: var(--radio-border_width);
  box-sizing: border-box;
  display: inline-block;
  height: var(--radio-size);
  width: var(--radio-size);
}

.RadioButton-module_altinn-visible-button__checkmark__U-wDg {
  --radio-checkmark-size: 80%;
  background-color: var(--radio-checkmark-color);
  border-radius: 50%;
  display: var(--radio-checkmark-display);
  height: var(--radio-checkmark-size);
  margin: calc(
    (var(--radio-size) - var(--radio-checkmark-size)) / 2 -
      var(--radio-border_width)
  );
  width: var(--radio-checkmark-size);
}
`),function(e){e.Xsmall="xsmall",e.Small="small"}(ny||(ny={}));Ae(`.Checkbox-module_altinn-checkbox__UGXBu {
  /* Internal variables */
  --checkbox-background_color: var(
    --component-checkbox-color-background-default
  );
  --checkbox-border_color: var(--component-checkbox-color-border-default);
  --checkbox-border_radius: var(--interactive_components-border_radius-normal);
  --checkbox-border_width: var(--component-checkbox-border_width-small);
  --checkbox-checkmark-display: none;
  --checkbox-height: var(--component-checkbox-size-height-small);
  --checkbox-width: var(--component-checkbox-size-width-small);

  /* Variables used by CheckboxRadioTemplate */
  --input_box-size: var(--checkbox-height);
  --input_box-border_radius: var(--checkbox-border_radius);
}

.Checkbox-module_altinn-checkbox--compact__GRWwc {
  --checkbox-border_width: var(--component-checkbox-border_width-xsmall);
  --checkbox-height: var(--component-checkbox-size-height-xsmall);
  --checkbox-width: var(--component-checkbox-size-width-xsmall);
}

.Checkbox-module_altinn-checkbox--error__drS2Y {
  --checkbox-background_color: var(--component-checkbox-color-background-error);
  --checkbox-border_color: var(--component-checkbox-color-border-error);
}

.Checkbox-module_altinn-checkbox--checked__jZ1RZ {
  --checkbox-checkmark-display: inline-block;
}

.Checkbox-module_altinn-checkbox--checked__jZ1RZ:not(.Checkbox-module_altinn-checkbox--disabled__w-UgR) {
  --checkbox-background_color: var(
    --component-checkbox-color-background-checked
  );
  --checkbox-border_color: var(--component-checkbox-color-border-checked);
}

.Checkbox-module_altinn-checkbox__UGXBu:not(
    .Checkbox-module_altinn-checkbox--disabled__w-UgR,
    .Checkbox-module_altinn-checkbox--checked__jZ1RZ
  ):hover {
  --checkbox-background_color: var(--component-checkbox-color-background-hover);
}

.Checkbox-module_altinn-checkbox__UGXBu:not(
    .Checkbox-module_altinn-checkbox--disabled__w-UgR,
    .Checkbox-module_altinn-checkbox--error__drS2Y,
    .Checkbox-module_altinn-checkbox--checked__jZ1RZ
  ):hover {
  --checkbox-border_color: var(--component-checkbox-color-border-hover);
}

.Checkbox-module_altinn-checkbox--disabled__w-UgR.Checkbox-module_altinn-checkbox--checked__jZ1RZ {
  --checkbox-background_color: var(--component-checkbox-color-border-disabled);
  --checkbox-border_color: transparent;
}

.Checkbox-module_altinn-checkbox--read-only__EJpNV {
  --cursor: auto;
}

.Checkbox-module_altinn-visible-box__MaStE {
  background-color: var(--checkbox-background_color);
  border-color: var(--checkbox-border_color);
  border-radius: var(--checkbox-border_radius);
  border-style: solid;
  border-width: var(--checkbox-border_width);
  box-sizing: border-box;
  display: inline-block;
  height: var(--checkbox-height);
  width: var(--checkbox-width);
}

.Checkbox-module_altinn-visible-box__checkmark__MP-Mb {
  background-color: white;
  clip-path: polygon(
    47.11% 56.51%,
    30.37% 38.94%,
    21.5% 48.09%,
    47.11% 74.54%,
    81.5% 39.16%,
    72.63% 30%
  );
  display: var(--checkbox-checkmark-display);
  height: 100%;
  width: 100%;
}
`);Ae(`.TextArea-module_altinn-TextArea__lzLj9 {
  font-family: inherit;
  font-size: var(--component-checkbox-font_size-sm);
}

.TextArea-module_altinn-TextArea--resize-none__N8fGA {
  resize: none;
}

.TextArea-module_altinn-TextArea--resize-both__EPavZ {
  resize: both;
}

.TextArea-module_altinn-TextArea--resize-horizontal__VRq3u {
  resize: horizontal;
}

.TextArea-module_altinn-TextArea--resize-vertical__qxnks {
  resize: vertical;
}
`);var ry;Ae(`.FieldSet-module_altinn-field-set__NebiS {
  --color: var(--component-checkbox-color-text-default);
  --content-margin_top: var(--component-fieldset-space-gap-y-small);
  --description-color: var(--component-field_description-color-text-default);
  --description-margin_top: var(--component-field_description-space-top-small);
  --error_message-margin_top: var(--component-fieldset-space-gap-y-small);
  --font_size: var(--component-checkbox-font_size-sm);

  color: var(--color);
  border: 0;
  font-size: var(--font_size);
  line-height: var(--typography-default-line-height);
  margin: 0;
  padding: 0;
}

.FieldSet-module_altinn-field-set--xsmall__J07mi {
  --content-margin_top: var(--component-fieldset-space-gap-y-xsmall);
  --description-margin_top: var(--component-field_description-space-top-xsmall);
  --error_message-margin_top: var(--component-fieldset-space-gap-y-xsmall);
  --font_size: var(--component-checkbox-font_size-xs);
}

.FieldSet-module_altinn-field-set__NebiS:disabled {
  opacity: var(--interactive_components-colors-disabled-opacity);
}

.FieldSet-module_altinn-field-set__NebiS:disabled * {
  opacity: 1;
}

.FieldSet-module_altinn-field-set__legend__W9vL3 {
  font-weight: bold;
  padding: 0;
}

.FieldSet-module_altinn-field-set__description__8AMj5 {
  color: var(--description-color);
  margin: 0;
}

.FieldSet-module_altinn-field-set__legend__W9vL3 + .FieldSet-module_altinn-field-set__description__8AMj5 {
  margin-top: var(--description-margin_top);
}

.FieldSet-module_altinn-field-set__content__Q5V0v:not(:first-child) {
  margin-top: var(--content-margin_top);
}

.FieldSet-module_altinn-field-set__error-message__rNV-5 {
  margin-top: var(--error_message-margin_top);
}
`),function(e){e.Xsmall="xsmall",e.Small="small"}(ry||(ry={}));var oy;Ae(`.CheckboxGroup-module_altinn-checkbox-group__Q7GlX {
  --gap-x: var(--component-checkbox-group-space-gap-x-small);
  --gap-y: var(--component-checkbox-group-space-gap-y-small);

  column-gap: var(--gap-x);
  display: flex;
  flex-wrap: wrap;
  row-gap: var(--gap-y);
}

.CheckboxGroup-module_altinn-checkbox-group--compact__xSYGF {
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);
}

.CheckboxGroup-module_altinn-checkbox-group--vertical__s2AkE {
  flex-direction: column;
}

.CheckboxGroup-module_altinn-checkbox-group--horizontal__Wl42J {
  flex-direction: row;
}
`),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(oy||(oy={}));Ae(`.Pagination-module_pagination-icon__zVOLT {
  fill: rgb(0, 0, 0);
}

.Pagination-module_pagination-icon__zVOLT:not(:last-child) {
  margin-right: 20px;
}

.Pagination-module_pagination-icon__zVOLT:hover {
  cursor: pointer;
}

.Pagination-module_pagination-icon--disabled__IvaxN {
  fill: rgba(0, 0, 0, 0.4);
  cursor: default !important;
}

.Pagination-module_pagination-wrapper__cUN7w {
  display: flex;
  align-items: center;
  justify-content: right;
}

.Pagination-module_icon-button__uZQ12 {
  background-color: transparent;
  margin: 5px;
  border: none;
}

.Pagination-module_description-text__ondJh {
  margin-right: 64px;
}

.Pagination-module_select-pagination__mma1- {
  margin-right: 25px;
}

/* breakpoints-sm */
@media only screen and (max-width: 540px) {
  .Pagination-module_pagination-wrapper__cUN7w {
    display: flex;
    flex-direction: column;
  }
  .Pagination-module_pagination-wrapper-row__yaNEB {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
  .Pagination-module_description-text__ondJh {
    margin-top: 10px;
    margin-right: 30px;
  }
  .Pagination-module_select-pagination__mma1- {
    margin-top: 10px;
    margin-right: 25px;
  }
}
`);Ae(`.MultiSelectItem-module_altinn-multi-select-item__fb2Ov {
  --border-radius: calc(var(--multiselect_item-height) / 2);
  align-items: center;
  background-color: var(--multiselect_item-background_color);
  border-radius: var(--border-radius);
  color: var(--multiselect_item-text_color);
  display: inline-flex;
  font-size: var(--font_size);
  gap: var(--multiselect_item-space_between);
  height: var(--multiselect_item-height);
  padding-left: var(--multiselect_item-space_left);
}

.MultiSelectItem-module_altinn-multi-select-item__delete-button__UBRN4 {
  background-color: transparent;
  border-bottom-right-radius: inherit;
  border-top-right-radius: inherit;
  border: 0;
  cursor: var(--interactive_element-cursor);
  height: 100%;
  padding: calc(
    (var(--multiselect_item-height) - var(--delete_cross-size)) / 2
  );
  width: var(--multiselect_item-height);
}

.MultiSelectItem-module_altinn-multi-select-item__delete-button__UBRN4:not(:disabled):hover {
  background-color: var(--delete_cross_box-color-hover);
}

.MultiSelectItem-module_altinn-multi-select-item__delete-button__UBRN4:focus-visible {
  background-color: var(--delete_cross_box-color-hover);
  outline: var(--focus_visible-outline);
}

.MultiSelectItem-module_altinn-multi-select-item__delete-button__cross__tRRZX {
  background-color: var(--multiselect_item_delete_cross-color);
  clip-path: var(--delete_cross-clip_path);
  display: inline-block;
  height: var(--delete_cross-size);
  width: var(--delete_cross-size);
}
`);Ae(`.Select-module_altinn-select__678hU {
  --delete_cross_box-border_radius: var(
    --interactive_components-border_radius-normal
  );
  --delete_cross_box-color-hover: var(--colors-red-500);
  --delete_cross_box-size: 25px;
  --delete_cross-clip_path: polygon(
    14.29% 0%,
    50% 35.71%,
    85.71% 0%,
    100% 14.29%,
    64.29% 50%,
    100% 85.71%,
    85.71% 100%,
    50% 64.29%,
    14.29% 100%,
    0% 85.71%,
    35.71% 50%,
    0% 14.29%
  );
  --delete_cross-color: var(--colors-blue-900);
  --delete_cross-color-active: var(--colors-blue-700);
  --delete_cross-color-disabled: #022f5180;
  --delete_cross-color-hover: white;
  --delete_cross-size: 12px;
  --arrow-border_left: 1px solid #022f5180;
  --arrow-color: var(--colors-blue-900);
  --arrow-height_to_width_fraction: calc(8 / 14);
  --arrow-horizontal_padding: 6px;
  --arrow-size: 14px;
  --arrow_wrapper-margin: 4px;
  --field-height-inside: calc(
    var(--field-height) - var(--component-input-border_width-default) * 2
  );
  --field-height: 36px;
  --font_size: 16px;
  --interactive_element-cursor: pointer;
  --line-height: 1.5;
  --multiselect_item-background_color: var(--colors-blue-900);
  --multiselect_item-height: 24px;
  --multiselect_item-space_between: 6px;
  --multiselect_item-space_left: 16px;
  --multiselect_item-text_color: white;
  --multiselect_item_delete_cross-color: white;
  --multiselect_items-gap: 4px;
  --multiselect_items-padding: calc(
    (var(--field-height-inside) - var(--multiselect_item-height)) / 2
  );
  --option-background_color-default: transparent;
  --option-background_color-hover: var(--colors-blue-200);
  --option-background_color-selected: var(--colors-blue-300);
  --option-background_color-selected-hover: var(--colors-blue-500);
  --option-border_color: #022f5180;
  --option-border_width: 1px;
  --option-height: 36px;
  --option_list-background_color: white;
  --option_list-border: 1px solid #68707c;
  --option_list-border_radius: var(
    --interactive_components-border_radius-normal
  );
  --option_list-number_of_visible_options: 7;
  --option_list-shadow: 1px 1px 3px #00000040;
  --option_list-z_index: 1;
  --option-outline-focus: none;
  --option-padding_horizontal: 12px;
  --singleselect_field-padding_left: 12px;
  --focus_visible-outline: 2px auto
    var(--interactive_components-colors-focus_outline);

  font-size: var(--font_size);
  line-height: var(--line-height);
  position: relative;
}

.Select-module_altinn-select--disabled__3ckBL {
  --interactive_element-cursor: auto;
  opacity: var(--interactive_components-colors-disabled-opacity);
}

.Select-module_altinn-select--expanded__cA3tN {
  --delete_cross-color: var(--delete_cross-color-active);
}

.Select-module_altinn-select__678hU:not(.Select-module_altinn-select--expanded__cA3tN) .Select-module_altinn-select__option-list__ZT-fJ {
  display: none;
}

.Select-module_altinn-select--using-keyboard__-6NMj {
  --option-outline-focus: var(--focus_visible-outline);
}

.Select-module_altinn-select__field__button__2FWU3 {
  background: transparent;
  border: 0;
  cursor: var(--interactive_element-cursor);
  height: 100%;
  margin: 0;
  padding: 0;
}

.Select-module_altinn-select__field__R4jZc {
  display: inline-flex;
  padding: 0;
}

.Select-module_altinn-select--multiple__5eSEL .Select-module_altinn-select__field__R4jZc,
.Select-module_altinn-select--single__IapdF .Select-module_altinn-select__field__button__2FWU3 {
  align-items: center;
  display: inline-flex;
  flex-direction: row;
  font-family: var(--font_family-default);
  font-size: var(--font_size);
  min-height: var(--field-height-inside);
  position: relative;
  width: 100%;
}

.Select-module_altinn-select--single__field__value__ywU8x {
  flex: 1;
  padding-left: var(--singleselect_field-padding_left);
  text-align: left;
}

.Select-module_altinn-select--multiple__field__values__oNU3G {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  gap: var(--multiselect_items-gap);
  padding: var(--multiselect_items-padding);
}

.Select-module_altinn-select--multiple__5eSEL .Select-module_altinn-select__field__button__2FWU3:focus-visible {
  outline: var(--focus_visible-outline);
}

.Select-module_altinn-select__field__arrow-wrapper__TqwIN {
  --arrow-height: calc(
    var(--arrow-size) * var(--arrow-height_to_width_fraction)
  );
  --arrow-vertical_padding: calc(
    (var(--field-height-inside) - var(--arrow-height)) / 2 -
      var(--arrow_wrapper-margin)
  );
  align-items: center;
  border-left: var(--arrow-border_left);
  box-sizing: border-box;
  display: flex;
  height: calc(100% - var(--arrow-vertical_padding));
  margin-bottom: var(--arrow_wrapper-margin);
  margin-left: var(--arrow_wrapper-margin);
  margin-top: var(--arrow_wrapper-margin);
  padding: var(--arrow-vertical_padding) var(--arrow-horizontal_padding);
}

.Select-module_altinn-select__field__arrow-wrapper__arrow__4z33K {
  background-color: var(--arrow-color);
  clip-path: polygon(
    11.72% 9.93%,
    50% 67.28%,
    88.28% 9.93%,
    97.43% 29.13%,
    50% 96.79%,
    2.57% 29.13%
  );
  display: inline-block;
  height: var(--arrow-height);
  width: var(--arrow-size);
}

.Select-module_altinn-select--multiple__field__delete-button__G1EI6 {
  background: none;
  border-radius: var(--delete_cross_box-border_radius);
  border: none;
  cursor: var(--interactive_element-cursor);
  height: var(--delete_cross_box-size);
  padding: calc((var(--delete_cross_box-size) - var(--delete_cross-size)) / 2);
  width: var(--delete_cross_box-size);
}

.Select-module_altinn-select--multiple__field__delete-button__G1EI6:disabled {
  cursor: auto;
}

.Select-module_altinn-select--multiple__field__delete-button__G1EI6:focus-visible {
  outline: var(--focus_visible-outline);
}

.Select-module_altinn-select--multiple__field__delete-button__G1EI6:hover:not(:disabled) {
  background-color: var(--delete_cross_box-color-hover);
  --delete_cross-color: var(--delete_cross-color-hover);
}

.Select-module_altinn-select--multiple__field__delete-button__G1EI6:disabled {
  --delete_cross-color: var(--delete_cross-color-disabled);
  background-color: transparent;
}

.Select-module_altinn-select--multiple__field__delete-button__cross__PqK7N {
  background-color: var(--delete_cross-color);
  clip-path: var(--delete_cross-clip_path);
  display: inline-block;
  height: var(--delete_cross-size);
  width: var(--delete_cross-size);
}

.Select-module_altinn-select__option-list__ZT-fJ {
  background-color: var(--option_list-background_color);
  border-radius: var(--option_list-border_radius);
  border: var(--option_list-border);
  box-shadow: var(--option_list-shadow);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0;
  max-height: calc(
    var(--option-height) * var(--option_list-number_of_visible_options)
  );
  overflow-y: auto;
  padding: 0;
  position: absolute;
  z-index: var(--option_list-z_index);
}

.Select-module_altinn-select__option-list__option__6b--t {
  background-color: var(--option-background_color-default);
  border-color: var(--option-border_color);
  border-style: solid;
  border-width: var(--option-border_width) 0 0 0;
  box-sizing: border-box;
  cursor: var(--interactive_element-cursor);
  display: inline-block;
  min-height: var(--option-height);
  overflow-x: hidden;
  padding-left: var(--option-padding_horizontal);
  padding-right: var(--option-padding_horizontal);
  padding-top: calc(
    (var(--option-height) - (var(--font_size) * var(--line-height))) / 2
  );
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.Select-module_altinn-select__option-list__option__6b--t:hover {
  background-color: var(--option-background_color-hover);
}

.Select-module_altinn-select__option-list__option--selected__m7OPk {
  background-color: var(--option-background_color-selected);
}

.Select-module_altinn-select__option-list__option--selected__m7OPk:hover {
  background-color: var(--option-background_color-selected-hover);
}

.Select-module_altinn-select--multiple__option-list__option--focused__R36IO {
  outline: var(--option-outline-focus);
}
`);Ae(`.Tabs-module_altinn-tabs__YJ7fE {
  --divider-color: #c9c9c9;
  --divider-width: 1px;
  --tab-border_bottom_color-selected: var(--colors-blue-700);
  --tab-border_bottom_color: transparent;
  --tab-border_bottom_width: 4px;
  --tab-font_family: var(--font_family-default);
  --tab-font_size: var(--font_size-component-size-sm);
  --tab-font_weight: 500;
  --tab-height: 32px;
  --tab-text_color-hover: var(--colors-black);
  --tab-text_color-selected: var(--colors-blue-700);
  --tab-text_color: #68707c;
  --tablist-gap: 36px;
  --tablist-margin_horizontal: 2rem;
  --tabpanel-margin_horizontal: 2rem;
  --tabpanel-margin_vertical: 2rem;
  position: relative;
}

.Tabs-module_altinn-tabs__tablist__iOp0D {
  display: flex;
  gap: var(--tablist-gap);
  margin: 0 var(--tablist-margin_horizontal);
  position: relative;
  z-index: 1;
}

.Tabs-module_altinn-tabs__tablist__tab__ZaGUg {
  background-color: transparent;
  border-bottom-color: var(--tab-border_bottom_color);
  border-bottom-style: solid;
  border-width: 0 0 var(--tab-border_bottom_width) 0;
  color: var(--tab-text_color);
  cursor: pointer;
  font-family: var(--tab-font_family);
  font-size: var(--tab-font_size);
  font-weight: var(--tab-font_weight);
  line-height: var(--tab-height);
  margin: 0;
  overflow: hidden;
  padding: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.Tabs-module_altinn-tabs__tablist__tab--selected__zxZv4 {
  --tab-text_color: var(--tab-text_color-selected);
  --tab-border_bottom_color: var(--tab-border_bottom_color-selected);
}

.Tabs-module_altinn-tabs__tablist__tab__ZaGUg:hover {
  --tab-text_color: var(--tab-text_color-hover);
}

.Tabs-module_altinn-tabs__tablist__tab__ZaGUg:focus-visible {
  outline: var(--component-input-color-outline-focus) auto 2px;
  outline-offset: 2px;
}

.Tabs-module_altinn-tabs__divider__jmabD {
  border-color: var(--divider-color);
  border-style: solid;
  border-width: var(--divider-width) 0 0 0;
  height: var(--divider-width);
  margin: 0;
  position: absolute;
  top: var(--tab-height);
  width: 100%;
}

.Tabs-module_altinn-tabs__tabpanel__RBbkH {
  margin: var(--tabpanel-margin_vertical) var(--tabpanel-margin_horizontal);
}
`);var iy,ay;Ae(`.RadioGroup-module_altinn-radio-group__Eje9Q {
  column-gap: var(--gap-x);
  display: flex;
  flex-wrap: wrap;
  row-gap: var(--gap-y);
}

.RadioGroup-module_altinn-radio-group--xsmall__50AkM {
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);
}

.RadioGroup-module_altinn-radio-group--small__nFoFM {
  --gap-x: var(--component-checkbox-group-space-gap-x-small);
  --gap-y: var(--component-checkbox-group-space-gap-y-small);
}

.RadioGroup-module_altinn-radio-group--vertical__uCqzM {
  flex-direction: column;
}

.RadioGroup-module_altinn-radio-group--horizontal__jACTG {
  flex-direction: row;
}
`),function(e){e.Xsmall="xsmall",e.Small="small"}(iy||(iy={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(ay||(ay={}));let sy=0;function wL(e){const[t,n]=E.useState(e),r=e||t;return E.useEffect(()=>{t==null&&(sy+=1,n(`aksel-icon-${sy}`))},[t]),r}const ly=U["useId"];function Aw(e){var t;if(ly!==void 0){const n=ly();return e??n.replace(/(:)/g,"")}return(t=wL(e))!==null&&t!==void 0?t:""}var kL=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const SL=E.forwardRef((e,t)=>{var{title:n,titleId:r}=e,o=kL(e,["title","titleId"]);let a=Aw();return a=n?r||"title-"+a:void 0,E.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},o),n?E.createElement("title",{id:a},n):null,E.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-11c2.205 0 4 1.657 4 3.693 0 .986-.416 1.914-1.172 2.612l-.593.54-.294.28c-.477.466-.869.94-.936 1.417l-.01.144v.814h-1.991v-.814c0-1.254.84-2.214 1.675-3.002l.74-.68c.38-.35.59-.816.59-1.31 0-1.024-.901-1.856-2.01-1.856-1.054 0-1.922.755-2.002 1.71l-.006.145H8C8 6.657 9.794 5 12 5Z",fill:"currentColor"}))}),PL=SL;var CL=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const EL=E.forwardRef((e,t)=>{var{title:n,titleId:r}=e,o=CL(e,["title","titleId"]);let a=Aw();return a=n?r||"title-"+a:void 0,E.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},o),n?E.createElement("title",{id:a},n):null,E.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 16a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-11c2.205 0 4 1.657 4 3.693 0 .986-.416 1.914-1.172 2.612l-.593.54-.294.28c-.477.466-.869.94-.936 1.417l-.01.144v.814h-1.991v-.814c0-1.254.84-2.214 1.675-3.002l.74-.68c.38-.35.59-.816.59-1.31 0-1.024-.901-1.856-2.01-1.856-1.054 0-1.922.755-2.002 1.71l-.006.145H8C8 6.657 9.794 5 12 5Z",fill:"currentColor"}))}),OL=EL;function bm(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}var Es;(function(e){e.event="event",e.props="prop"})(Es||(Es={}));function xr(){}function Xo(e){return!!(e||"").match(/\d/)}function Zo(e){return e==null}function LL(e){return typeof e=="number"&&isNaN(e)}function zw(e){return Zo(e)||LL(e)||typeof e=="number"&&!isFinite(e)}function Nw(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function TL(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function RL(e,t,n){var r=TL(n),o=e.search(/[1-9]/);return o=o===-1?e.length:o,e.substring(0,o)+e.substring(o,e.length).replace(r,"$1"+t)}function AL(e){var t=E.useRef(e);t.current=e;var n=E.useRef(function(){for(var r=[],o=arguments.length;o--;)r[o]=arguments[o];return t.current.apply(t,r)});return n.current}function xm(e,t){t===void 0&&(t=!0);var n=e[0]==="-",r=n&&t;e=e.replace("-","");var o=e.split("."),a=o[0],s=o[1]||"";return{beforeDecimal:a,afterDecimal:s,hasNegation:n,addNegation:r}}function zL(e){if(!e)return e;var t=e[0]==="-";t&&(e=e.substring(1,e.length));var n=e.split("."),r=n[0].replace(/^0+/,"")||"0",o=n[1]||"";return(t?"-":"")+r+(o?"."+o:"")}function Iw(e,t,n){for(var r="",o=n?"0":"",a=0;a<=t-1;a++)r+=e[a]||o;return r}function uy(e,t){return Array(t+1).join(e)}function Bw(e){var t=e+"",n=t[0]==="-"?"-":"";n&&(t=t.substring(1));var r=t.split(/[eE]/g),o=r[0],a=r[1];if(a=Number(a),!a)return n+o;o=o.replace(".","");var s=1+a,u=o.length;return s<0?o="0."+uy("0",Math.abs(s))+o:s>=u?o=o+uy("0",s-u):o=(o.substring(0,s)||"0")+"."+o.substring(s),n+o}function cy(e,t,n){if(["","-"].indexOf(e)!==-1)return e;var r=(e.indexOf(".")!==-1||n)&&t,o=xm(e),a=o.beforeDecimal,s=o.afterDecimal,u=o.hasNegation,d=parseFloat("0."+(s||"0")),f=s.length<=t?"0."+s:d.toFixed(t),p=f.split("."),m=a.split("").reverse().reduce(function(w,C,g){return w.length>g?(Number(w[0])+Number(C)).toString()+w.substring(1,w.length):C+w},p[0]),_=Iw(p[1]||"",t,n),b=u?"-":"",y=r?".":"";return""+b+m+y+_}function Vr(e,t){if(e.value=e.value,e!==null){if(e.createTextRange){var n=e.createTextRange();return n.move("character",t),n.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}function Mw(e,t){for(var n=0,r=0,o=e.length,a=t.length;e[n]===t[n]&&n<o;)n++;for(;e[o-1-r]===t[a-1-r]&&a-r>n&&o-r>n;)r++;return{from:{start:n,end:o-r},to:{start:n,end:a-r}}}function NL(e,t,n){return Math.min(Math.max(e,t),n)}function uf(e){return Math.max(e.selectionStart,e.selectionEnd)}function IL(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function Dw(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function jw(e,t){return e===void 0&&(e=" "),typeof e=="string"?e:e[t]||" "}function BL(e,t,n,r,o,a){var s=Mw(n,e),u=s.from,d=s.to;if(u.end-u.start===1&&u.end===d.end&&d.end===r)return r;var f=o.findIndex(function(T){return T}),p=e.slice(0,f);!t&&!n.startsWith(p)&&(n=p+n,r=r+p.length);for(var m=n.length,_=e.length,b={},y=new Array(m),w=0;w<m;w++){y[w]=-1;for(var C=0,g=_;C<g;C++)if(n[w]===e[C]&&b[C]!==!0){y[w]=C,b[C]=!0;break}}for(var x=r;x<m&&(y[x]===-1||!a(n[x]));)x++;var k=x===m||y[x]===-1?_:y[x];for(x=r-1;x>0&&y[x]===-1;)x--;var P=x===-1||y[x]===-1?0:y[x]+1;return P>k?k:r-P<k-r?P:k}function Wu(e,t,n,r){var o=e.length;if(t=NL(t,0,o),r==="left"){for(;t>=0&&!n[t];)t--;t===-1&&(t=n.indexOf(!0))}else{for(;t<=o&&!n[t];)t++;t>o&&(t=n.lastIndexOf(!0))}return t===-1&&(t=o),t}function ML(e){for(var t=Array.from({length:e.length+1}).map(function(){return!0}),n=0,r=t.length;n<r;n++)t[n]=!!(Xo(e[n])||Xo(e[n-1]));return t}function Fw(e,t,n,r,o,a){a===void 0&&(a=xr);var s=AL(function(y,w){var C,g;return zw(y)?(g="",C=""):typeof y=="number"||w?(g=typeof y=="number"?Bw(y):y,C=r(g)):(g=o(y,void 0),C=r(g)),{formattedValue:C,numAsString:g}}),u=E.useState(function(){return s(Zo(e)?t:e,n)}),d=u[0],f=u[1],p=function(y,w){y.formattedValue!==d.formattedValue&&f({formattedValue:y.formattedValue,numAsString:y.value}),a(y,w)},m=e,_=n;Zo(e)&&(m=d.numAsString,_=!0);var b=s(m,_);return E.useMemo(function(){f(b)},[b.formattedValue]),[d,p]}function DL(e){return e.replace(/[^0-9]/g,"")}function jL(e){return e}function Uw(e){var t=e.type;t===void 0&&(t="text");var n=e.displayType;n===void 0&&(n="input");var r=e.customInput,o=e.renderText,a=e.getInputRef,s=e.format;s===void 0&&(s=jL);var u=e.removeFormatting;u===void 0&&(u=DL);var d=e.defaultValue,f=e.valueIsNumericString,p=e.onValueChange,m=e.isAllowed,_=e.onChange;_===void 0&&(_=xr);var b=e.onKeyDown;b===void 0&&(b=xr);var y=e.onMouseUp;y===void 0&&(y=xr);var w=e.onFocus;w===void 0&&(w=xr);var C=e.onBlur;C===void 0&&(C=xr);var g=e.value,x=e.getCaretBoundary;x===void 0&&(x=ML);var k=e.isValidInputCharacter;k===void 0&&(k=Xo);var P=bm(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter"]),T=Fw(g,d,!!f,s,u,p),A=T[0],I=A.formattedValue,F=A.numAsString,W=T[1],B=E.useRef({formattedValue:I,numAsString:F}),G=function(K,ce){B.current={formattedValue:K.formattedValue,numAsString:K.value},W(K,ce)},J=E.useState(!1),ee=J[0],V=J[1],le=E.useRef(null),X=E.useRef({setCaretTimeout:null,focusTimeout:null});E.useEffect(function(){return V(!0),function(){clearTimeout(X.current.setCaretTimeout),clearTimeout(X.current.focusTimeout)}},[]);var D=s,z=function(K,ce){var de=parseFloat(ce);return{formattedValue:K,value:ce,floatValue:isNaN(de)?void 0:de}},oe=function(K,ce,de){K.selectionStart===0&&K.selectionEnd===K.value.length||(Vr(K,ce),X.current.setCaretTimeout=setTimeout(function(){K.value===de&&K.selectionStart!==K.selectionEnd&&Vr(K,ce)},0))},q=function(K,ce,de){return Wu(K,ce,x(K),de)},O=function(K,ce,de){var _e=x(ce),Se=BL(ce,I,K,de,_e,k);return Se=Wu(ce,Se,_e),Se},N=function(K){var ce=K.formattedValue;ce===void 0&&(ce="");var de=K.input,_e=K.setCaretPosition;_e===void 0&&(_e=!0);var Se=K.source,Ie=K.event,Ue=K.numAsString,Ye=K.caretPos;if(de){if(Ye===void 0&&_e){var tt=K.inputValue||de.value,qt=uf(de);de.value=ce,Ye=O(tt,ce,qt)}de.value=ce,_e&&Ye!==void 0&&oe(de,Ye,ce)}ce!==I&&G(z(ce,Ue),{event:Ie,source:Se})};E.useEffect(function(){var K=B.current,ce=K.formattedValue,de=K.numAsString;I!==ce&&(I!==F||ce!==de)&&G(z(I,F),{event:void 0,source:Es.props})},[I,F]);var M=le.current?uf(le.current):void 0,Q=typeof window<"u"?E.useLayoutEffect:E.useEffect;Q(function(){var K=le.current;if(I!==B.current.formattedValue&&K){var ce=O(B.current.formattedValue,I,M);K.value=I,oe(K,ce,I)}},[I]);var ne=function(K,ce,de){var _e=Mw(I,K),Se=Object.assign(Object.assign({},_e),{lastValue:I}),Ie=u(K,Se),Ue=D(Ie);if(Ie=u(Ue,void 0),m&&!m(z(Ue,Ie))){var Ye=ce.target,tt=uf(Ye),qt=O(K,I,tt);return Ye.value=I,oe(Ye,qt,I),!1}return N({formattedValue:Ue,numAsString:Ie,inputValue:K,event:ce,source:de,setCaretPosition:!0,input:ce.target}),!0},ue=function(K){var ce=K.target,de=ce.value,_e=ne(de,K,Es.event);_e&&_(K)},he=function(K){var ce=K.target,de=K.key,_e=ce.selectionStart,Se=ce.selectionEnd,Ie=ce.value;Ie===void 0&&(Ie="");var Ue;if(de==="ArrowLeft"||de==="Backspace"?Ue=Math.max(_e-1,0):de==="ArrowRight"?Ue=Math.min(_e+1,Ie.length):de==="Delete"&&(Ue=_e),Ue===void 0||_e!==Se){b(K);return}var Ye=Ue;if(de==="ArrowLeft"||de==="ArrowRight"){var tt=de==="ArrowLeft"?"left":"right";Ye=q(Ie,Ue,tt),Ye!==Ue&&K.preventDefault()}else de==="Delete"&&!k(Ie[Ue])?Ye=q(Ie,Ue,"right"):de==="Backspace"&&!k(Ie[Ue])&&(Ye=q(Ie,Ue,"left"));Ye!==Ue&&oe(ce,Ye,Ie),K.isUnitTestRun&&oe(ce,Ye,Ie),b(K)},be=function(K){var ce=K.target,de=ce.selectionStart,_e=ce.selectionEnd,Se=ce.value;if(Se===void 0&&(Se=""),de===_e){var Ie=q(Se,de);Ie!==de&&oe(ce,Ie,Se)}y(K)},Je=function(K){K.persist&&K.persist();var ce=K.target;le.current=ce,X.current.focusTimeout=setTimeout(function(){var de=ce.selectionStart,_e=ce.selectionEnd,Se=ce.value;Se===void 0&&(Se="");var Ie=q(Se,de);Ie!==de&&!(de===0&&_e===Se.length)&&oe(ce,Ie,Se),w(K)},0)},Ze=function(K){le.current=null,clearTimeout(X.current.focusTimeout),clearTimeout(X.current.setCaretTimeout),C(K)},Le=ee&&IL()?"numeric":void 0,ae=Object.assign({inputMode:Le},P,{type:t,value:I,onChange:ue,onKeyDown:he,onMouseUp:be,onFocus:Je,onBlur:Ze});if(n==="text")return o?U.createElement(U.Fragment,null,o(I,P)||null):U.createElement("span",Object.assign({},P,{ref:a}),I);if(r){var me=r;return U.createElement(me,Object.assign({},ae,{ref:a}))}return U.createElement("input",Object.assign({},ae,{ref:a}))}function dy(e,t){var n=t.decimalScale,r=t.fixedDecimalScale,o=t.prefix;o===void 0&&(o="");var a=t.suffix;a===void 0&&(a="");var s=t.allowNegative,u=t.thousandsGroupStyle;if(u===void 0&&(u="thousand"),e===""||e==="-")return e;var d=qc(t),f=d.thousandSeparator,p=d.decimalSeparator,m=n!==0&&e.indexOf(".")!==-1||n&&r,_=xm(e,s),b=_.beforeDecimal,y=_.afterDecimal,w=_.addNegation;return n!==void 0&&(y=Iw(y,n,!!r)),f&&(b=RL(b,f,u)),o&&(b=o+b),a&&(y=y+a),w&&(b="-"+b),e=b+(m&&p||"")+y,e}function qc(e){var t=e.decimalSeparator;t===void 0&&(t=".");var n=e.thousandSeparator,r=e.allowedDecimalSeparators;return n===!0&&(n=","),r||(r=[t,"."]),{decimalSeparator:t,thousandSeparator:n,allowedDecimalSeparators:r}}function FL(e,t){e===void 0&&(e="");var n=new RegExp("(-)"),r=new RegExp("(-)(.)*(-)"),o=n.test(e),a=r.test(e);return e=e.replace(/-/g,""),o&&!a&&t&&(e="-"+e),e}function UL(e,t){return new RegExp("(^-)|[0-9]|"+Nw(e),t?"g":void 0)}function $L(e,t,n){return e===""?!0:!t?.match(/\d/)&&!n?.match(/\d/)&&typeof e=="string"&&!isNaN(Number(e))}function WL(e,t,n){var r;t===void 0&&(t=Dw(e));var o=n.allowNegative,a=n.prefix;a===void 0&&(a="");var s=n.suffix;s===void 0&&(s="");var u=n.decimalScale,d=t.from,f=t.to,p=f.start,m=f.end,_=qc(n),b=_.allowedDecimalSeparators,y=_.decimalSeparator,w=e[m]===y;if(Xo(e)&&(e===a||e===s)&&t.lastValue==="")return e;if(m-p===1&&b.indexOf(e[p])!==-1){var C=u===0?"":y;e=e.substring(0,p)+C+e.substring(p+1,e.length)}var g=function(D,z,oe){var q=!1,O=!1;a.startsWith("-")?q=!1:D.startsWith("--")?(q=!1,O=!0):s.startsWith("-")&&D.length===s.length?q=!1:D[0]==="-"&&(q=!0);var N=q?1:0;return O&&(N=2),N&&(D=D.substring(N),z-=N,oe-=N),{value:D,start:z,end:oe,hasNegation:q}},x=g(e,p,m),k=x.hasNegation;r=x,e=r.value,p=r.start,m=r.end;var P=g(t.lastValue,d.start,d.end),T=P.start,A=P.end,I=P.value,F=e.substring(p,m);e.length&&I.length&&(T>I.length-s.length||A<a.length)&&!(F&&s.startsWith(F))&&(e=I);var W=0;e.startsWith(a)?W+=a.length:p<a.length&&(W=p),e=e.substring(W),m-=W;var B=e.length,G=e.length-s.length;e.endsWith(s)?B=G:(m>G||m>e.length-s.length)&&(B=m),e=e.substring(0,B),e=FL(k?"-"+e:e,o),e=(e.match(UL(y,!0))||[]).join("");var J=e.indexOf(y);e=e.replace(new RegExp(Nw(y),"g"),function(D,z){return z===J?".":""});var ee=xm(e,o),V=ee.beforeDecimal,le=ee.afterDecimal,X=ee.addNegation;return f.end-f.start<d.end-d.start&&V===""&&w&&!parseFloat(le)&&(e=X?"-":""),e}function HL(e,t){var n=t.prefix;n===void 0&&(n="");var r=t.suffix;r===void 0&&(r="");var o=Array.from({length:e.length+1}).map(function(){return!0}),a=e[0]==="-";o.fill(!1,0,n.length+(a?1:0));var s=e.length;return o.fill(!1,s-r.length+1,s+1),o}function VL(e){var t=qc(e),n=t.thousandSeparator,r=t.decimalSeparator,o=e.prefix;o===void 0&&(o="");var a=e.allowNegative;if(a===void 0&&(a=!0),n===r)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+n+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+r+` (default value for decimalSeparator is .)
     `);return o.startsWith("-")&&a&&(console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+o+`
      allowNegative: `+a+`
    `),a=!1),Object.assign(Object.assign({},e),{allowNegative:a})}function ZL(e){e=VL(e);var t=e.decimalSeparator;t===void 0&&(t="."),e.allowedDecimalSeparators,e.thousandsGroupStyle;var n=e.suffix,r=e.allowNegative,o=e.allowLeadingZeros,a=e.onKeyDown;a===void 0&&(a=xr);var s=e.onBlur;s===void 0&&(s=xr);var u=e.thousandSeparator,d=e.decimalScale,f=e.fixedDecimalScale,p=e.prefix;p===void 0&&(p="");var m=e.defaultValue,_=e.value,b=e.valueIsNumericString,y=e.onValueChange,w=bm(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),C=function(ee){return dy(ee,e)},g=function(ee,V){return WL(ee,V,e)},x=Zo(_)?m:_,k=b??$L(x,p,n);Zo(_)?Zo(m)||(k=b||typeof m=="number"):k=b||typeof _=="number";var P=function(ee){return zw(ee)?ee:(typeof ee=="number"&&(ee=Bw(ee)),k&&typeof d=="number"?cy(ee,d,!!f):ee)},T=Fw(P(_),P(m),!!k,C,g,y),A=T[0],I=A.numAsString,F=A.formattedValue,W=T[1],B=function(ee){var V=ee.target,le=ee.key,X=V.selectionStart,D=V.selectionEnd,z=V.value;if(z===void 0&&(z=""),X!==D){a(ee);return}le==="Backspace"&&z[0]==="-"&&X===p.length+1&&r&&Vr(V,1);var oe=qc(e),q=oe.decimalSeparator,O=oe.allowedDecimalSeparators;le==="Backspace"&&z[X-1]===q&&d&&f&&(Vr(V,X-1),ee.preventDefault()),O?.includes(le)&&z[X]===q&&Vr(V,X+1);var N=u===!0?",":u;le==="Backspace"&&z[X-1]===N&&Vr(V,X-1),le==="Delete"&&z[X]===N&&Vr(V,X+1),a(ee)},G=function(ee){var V=I;if(V.match(/\d/g)||(V=""),o||(V=zL(V)),f&&d&&(V=cy(V,d,f)),V!==I){var le=dy(V,e);W({formattedValue:le,value:V,floatValue:parseFloat(V)},{event:ee,source:Es.event})}s(ee)},J=function(ee){return ee===t?!0:Xo(ee)};return Object.assign(Object.assign({},w),{value:F,valueIsNumericString:!1,isValidInputCharacter:J,onValueChange:W,format:C,removeFormatting:g,getCaretBoundary:function(ee){return HL(ee,e)},onKeyDown:B,onBlur:G})}function qL(e){var t=ZL(e);return U.createElement(Uw,Object.assign({},t))}function KL(e,t){var n=t.format,r=t.allowEmptyFormatting,o=t.mask,a=t.patternChar;if(a===void 0&&(a="#"),e===""&&!r)return"";for(var s=0,u=n.split(""),d=0,f=n.length;d<f;d++)n[d]===a&&(u[d]=e[s]||jw(o,s),s+=1);return u.join("")}function QL(e,t,n){t===void 0&&(t=Dw(e));var r=n.format,o=n.patternChar;o===void 0&&(o="#");var a=t.from,s=t.to,u=t.lastValue;u===void 0&&(u="");var d=function(C){return r[C]===o},f=function(C,g){for(var x="",k=0;k<C.length;k++)d(g+k)&&Xo(C[k])&&(x+=C[k]);return x},p=function(C){return C.replace(/[^0-9]/g,"")};if(!r.match(/\d/))return p(e);if(u===""&&e.length===r.length){for(var m="",_=0;_<e.length;_++)if(d(_))Xo(e[_])&&(m+=e[_]);else if(e[_]!==r[_])return p(e);return m}var b=u.substring(0,a.start),y=e.substring(s.start,s.end),w=u.substring(a.end);return""+f(b,0)+p(y)+f(w,a.end)}function GL(e,t){var n=t.format,r=t.mask,o=t.patternChar;o===void 0&&(o="#");var a=Array.from({length:e.length+1}).map(function(){return!0}),s=0,u=-1,d={};n.split("").forEach(function(_,b){var y=void 0;_===o&&(s++,y=jw(r,s-1),u===-1&&e[b]===y&&(u=b)),d[b]=y});for(var f=function(_){return n[_]===o&&e[_]!==d[_]},p=0,m=a.length;p<m;p++)a[p]=p===u||f(p)||f(p-1);return a[n.indexOf(o)]=!0,a}function JL(e){var t=e.mask;if(t){var n=t==="string"?t:t.toString();if(n.match(/\d/g))throw new Error("Mask "+t+" should not contain numeric character;")}}function YL(e,t){return e===""?!0:!t?.match(/\d/)&&typeof e=="string"&&(!!e.match(/^\d+$/)||e==="")}function XL(e){e.mask,e.allowEmptyFormatting;var t=e.format,n=e.inputMode;n===void 0&&(n="numeric");var r=e.onKeyDown;r===void 0&&(r=xr);var o=e.patternChar;o===void 0&&(o="#");var a=e.value,s=e.defaultValue,u=e.valueIsNumericString,d=bm(e,["mask","allowEmptyFormatting","format","inputMode","onKeyDown","patternChar","value","defaultValue","valueIsNumericString"]);JL(e);var f=function(y){return GL(y,e)},p=function(y){var w=y.key,C=y.target,g=C.selectionStart,x=C.selectionEnd,k=C.value;if(g!==x){r(y);return}var P=g;if(w==="Backspace"||w==="Delete"){var T="right";if(w==="Backspace"){for(;P>0&&t[P-1]!==o;)P--;T="left"}else{for(var A=t.length;P<A&&t[P]!==o;)P++;T="right"}P=Wu(k,P,f(k),T)}else t[P]!==o&&w!=="ArrowLeft"&&w!=="ArrowRight"&&(P=Wu(k,P+1,f(k),"right"));P!==g&&Vr(C,P),r(y)},m=Zo(a)?s:a,_=u??YL(m,t),b=Object.assign(Object.assign({},e),{valueIsNumericString:_});return Object.assign(Object.assign({},d),{value:a,defaultValue:s,valueIsNumericString:_,inputMode:n,format:function(y){return KL(y,b)},removeFormatting:function(y,w){return QL(y,w,b)},getCaretBoundary:f,onKeyDown:p})}function eT(e){var t=XL(e);return U.createElement(Uw,Object.assign({},t))}function ft(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}var cf,$w={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/cf=$w,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var a=typeof o;if(a==="string"||a==="number")n.push(o);else if(Array.isArray(o)){if(o.length){var s=t.apply(null,o);s&&n.push(s)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){n.push(o.toString());continue}for(var u in o)e.call(o,u)&&o[u]&&n.push(u)}}}return n.join(" ")}cf.exports?(t.default=t,cf.exports=t):window.classNames=t}();var qe=$w.exports;const Kh=e=>{var{svgIconComponent:t}=e,n=ft(e,["svgIconComponent"]);return E.isValidElement(t)?E.cloneElement(t,Object.assign({},n)):null};function ze(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}Kh.displayName="SvgIcon";var _r={button:"Button-module_button__2ZuB7 utility-module_focusable__1fBKr",icon:"Button-module_icon__-43u5",small:"Button-module_small__l39oh",medium:"Button-module_medium__KTxdk",large:"Button-module_large__6bsb7",fullWidth:"Button-module_fullWidth__36oJT",dashedBorder:"Button-module_dashedBorder__500FL",outline:"Button-module_outline__F5jq-",quiet:"Button-module_quiet__1KlhF",onlyIcon:"Button-module_onlyIcon__lENu3",filled:"Button-module_filled__inpPb",primary:"Button-module_primary__s1sM6",secondary:"Button-module_secondary__R0waJ",success:"Button-module_success__w6qB6",danger:"Button-module_danger__V4fX8",inverted:"Button-module_inverted__VD6YO"};ze(`/**
 * Visually hide an element, but leave it available for screen readers
 */.utility-module_visuallyHidden__R-C67 {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}/**
 * Apply a focus outline on an element when it is focused or one of its children is focused
 */.utility-module_focusable__1fBKr:focus-within {
  --fds-inner-focus-border-color: #1e2b3c;
  --fds-outer-focus-border-color: #fadf4b;
  --fds-focus-border-width: 3px;

  outline: var(--fds-focus-border-width) solid var(--fds-outer-focus-border-color);
  outline-offset: var(--fds-focus-border-width);
  box-shadow: 0 0 0 var(--fds-focus-border-width) var(--fds-inner-focus-border-color);
}

.Button-module_button__2ZuB7 {
  --border-radius: 3px;
  --button-size: var(--component-button-size-height-small);
  --button-vertical-padding: var(--component-button-space-padding-x-small);
  --font-and-icon-color: var(--component-button-filled-color-text-all);
  --icon-size: var(--component-button-size-icon-small);
  align-items: center;
  border-radius: var(--border-radius);
  border: var(--component-button-border_width-default) solid transparent;
  box-sizing: border-box;
  color: var(--font-and-icon-color);
  cursor: pointer;
  display: flex;
  fill: var(--font-and-icon-color);
  font-family: inherit;
  height: var(--button-size);
  justify-content: center;
  letter-spacing: var(--typography-default-letter-spacing);
  padding: 0 var(--button-vertical-padding);
  text-align: center;
}

.Button-module_button__2ZuB7:disabled,
.Button-module_button__2ZuB7[aria-disabled='true'] {
  cursor: auto;
  opacity: var(--opacity-disabled);
}

.Button-module_icon__-43u5 {
  display: inline-block;
  height: var(--icon-size);
  width: var(--icon-size);
}

.Button-module_button__2ZuB7.Button-module_small__l39oh {
  --button-size: var(--component-button-size-height-small);
  --button-vertical-padding: var(--component-button-space-padding-x-small);
  --icon-size: var(--component-button-size-icon-small);

  font-size: var(--font_size-300);
  gap: var(--component-button-space-gap-small);
}

.Button-module_button__2ZuB7.Button-module_medium__KTxdk {
  --button-size: var(--component-button-size-height-medium);
  --button-vertical-padding: var(--component-button-space-padding-x-medium);
  --icon-size: var(--component-button-size-icon-medium);

  font-size: var(--font_size-400-breakpoint_md);
  gap: var(--component-button-space-gap-medium);
  min-width: var(--component-button-size-height-medium);
}

.Button-module_button__2ZuB7.Button-module_large__6bsb7 {
  --button-size: var(--component-button-size-height-large);
  --button-vertical-padding: var(--component-button-space-padding-x-large);
  --icon-size: var(--component-button-size-icon-large);

  font-size: var(--font_size-600-breakpoint_md);
  gap: var(--component-button-space-gap-large);
  min-width: var(--component-button-size-height-large);
}

.Button-module_button__2ZuB7.Button-module_fullWidth__36oJT {
  width: 100%;
}

.Button-module_button__2ZuB7.Button-module_dashedBorder__500FL {
  border-style: dashed;
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq- {
  background-color: transparent;
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF {
  --border-radius: 50px;

  padding: 0 calc(var(--button-vertical-padding) * 2 / 3);
  background-color: transparent;
}

.Button-module_button__2ZuB7.Button-module_onlyIcon__lENu3 {
  padding: calc((var(--button-size) - var(--icon-size)) / 2 - var(--component-button-border_width-default));
}

/* Filled button colors */
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_primary__s1sM6 {
  background: var(--component-button-filled-primary-color-background-default);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_primary__s1sM6:not([aria-disabled='true'], :disabled):hover {
  background: var(--component-button-filled-primary-color-background-hover);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_primary__s1sM6:not([aria-disabled='true'], :disabled):active {
  background: var(--component-button-filled-primary-color-background-pressed);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_secondary__R0waJ {
  background: var(--component-button-filled-primary-color-background-pressed);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_secondary__R0waJ:not([aria-disabled='true'], :disabled):hover {
  background: var(--colors-blue-800);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_secondary__R0waJ:not([aria-disabled='true'], :disabled):active {
  background: var(--colors-blue-900);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_success__w6qB6 {
  background: var(--component-button-filled-success-color-background-default);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_success__w6qB6:not([aria-disabled='true'], :disabled):hover {
  background: var(--component-button-filled-success-color-background-hover);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_success__w6qB6:not([aria-disabled='true'], :disabled):active {
  background: var(--component-button-filled-success-color-background-pressed);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_danger__V4fX8 {
  background: var(--component-button-filled-danger-color-background-default);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_danger__V4fX8:not([aria-disabled='true'], :disabled):hover {
  background: var(--component-button-filled-danger-color-background-hover);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_danger__V4fX8:not([aria-disabled='true'], :disabled):active {
  background: var(--colors-red-800);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO {
  --font-and-icon-color: var(--colors-blue-900);

  background: var(--colors-white);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO:not([aria-disabled='true'], :disabled):hover {
  --font-and-icon-color: var(--colors-blue-900);

  background: rgb(255 255 255 / 0.9);
}

.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO:not([aria-disabled='true'], :disabled):active {
  --font-and-icon-color: var(--colors-white);

  background: rgb(255 255 255 / 0.1);
}

/* Outline button colors */
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_primary__s1sM6 {
  --font-and-icon-color: var(--component-button-outline-primary-color-text-default);

  border-color: var(--component-button-outline-primary-color-border-default);
  background: var(--component-button-outline-primary-color-background-default);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_primary__s1sM6:not([aria-disabled='true'], :disabled):hover {
  --font-and-icon-color: var(--colors-blue-800);

  background: var(--component-button-outline-primary-color-background-hover);
  border-color: var(--component-button-outline-primary-color-border-hover);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_primary__s1sM6:not([aria-disabled='true'], :disabled):active {
  --font-and-icon-color: var(--component-button-outline-primary-color-text-pressed);

  background: var(--component-button-outline-primary-color-background-pressed);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_secondary__R0waJ {
  --font-and-icon-color: var(--colors-blue-900);

  background: var(--colors-white);
  border-color: var(--colors-blue-900);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_secondary__R0waJ:not([aria-disabled='true'], :disabled):hover {
  background: var(--colors-blue-100);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_secondary__R0waJ:not([aria-disabled='true'], :disabled):active {
  --font-and-icon-color: var(--colors-white);

  background: var(--colors-blue-900);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_success__w6qB6 {
  --font-and-icon-color: var(--colors-green-700);

  background: var(--colors-white);
  border-color: var(--colors-green-700);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_success__w6qB6:not([aria-disabled='true'], :disabled):hover {
  --font-and-icon-color: var(--colors-green-800);

  background: var(--colors-green-200);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_success__w6qB6:not([aria-disabled='true'], :disabled):active {
  --font-and-icon-color: var(--colors-white);

  background: var(--colors-green-700);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_danger__V4fX8 {
  --font-and-icon-color: var(--colors-red-500);

  background: var(--colors-white);
  border-color: var(--colors-red-500);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_danger__V4fX8:not([aria-disabled='true'], :disabled):hover {
  --font-and-icon-color: var(--colors-red-700);

  background: var(--colors-red-100);
  border-color: var(--colors-red-700);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_danger__V4fX8:not([aria-disabled='true'], :disabled):active {
  --font-and-icon-color: var(--colors-white);

  background: var(--colors-red-500);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO {
  --font-and-icon-color: var(--colors-white);

  border-color: var(--colors-white);
  background: transparent;
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO:not([aria-disabled='true'], :disabled):hover {
  background: rgb(255 255 255 / 0.1);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO:not([aria-disabled='true'], :disabled):active {
  --font-and-icon-color: var(--colors-blue-900);

  background: var(--colors-white);
}

/* Quiet button colors */
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_primary__s1sM6 {
  --font-and-icon-color: var(--component-button-quiet-primary-color-text-default);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_primary__s1sM6:not([aria-disabled='true'], :disabled):hover {
  --font-and-icon-color: var(--colors-blue-800);

  background: var(--component-button-quiet-primary-color-background-hover);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_primary__s1sM6:not([aria-disabled='true'], :disabled):active {
  --font-and-icon-color: var(--component-button-filled-color-text-all);

  background: var(--component-button-quiet-primary-color-background-pressed);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_secondary__R0waJ {
  --font-and-icon-color: var(--colors-blue-900);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_secondary__R0waJ:not([aria-disabled='true'], :disabled):hover {
  background: var(--colors-grey-300);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_secondary__R0waJ:not([aria-disabled='true'], :disabled):active {
  --font-and-icon-color: var(--component-button-filled-color-text-all);

  background: var(--colors-blue-900);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_success__w6qB6 {
  --font-and-icon-color: var(--colors-green-700);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_success__w6qB6:not([aria-disabled='true'], :disabled):hover {
  --font-and-icon-color: var(--colors-green-800);

  background: var(--colors-green-200);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_success__w6qB6:not([aria-disabled='true'], :disabled):active {
  --font-and-icon-color: var(--component-button-filled-color-text-all);

  background: var(--colors-green-900);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_danger__V4fX8 {
  --font-and-icon-color: var(--colors-red-600);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_danger__V4fX8:not([aria-disabled='true'], :disabled):hover {
  --font-and-icon-color: var(--colors-red-800);

  background: var(--colors-red-100);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_danger__V4fX8:not([aria-disabled='true'], :disabled):active {
  --font-and-icon-color: var(--component-button-filled-color-text-all);

  background: var(--colors-red-800);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO {
  --font-and-icon-color: var(--colors-white);

  background: transparent;
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO:not([aria-disabled='true'], :disabled):hover {
  --font-and-icon-color: var(--colors-blue-900);

  background: rgb(255 255 255 / 0.9);
}

.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO:not([aria-disabled='true'], :disabled):active {
  --font-and-icon-color: var(--colors-blue-900);

  background: var(--colors-white);
}
`);const tT=E.forwardRef((e,t)=>{var{children:n,color:r="primary",variant:o="filled",size:a="small",fullWidth:s=!1,dashedBorder:u=!1,iconPlacement:d="left",icon:f,type:p="button",className:m}=e,_=ft(e,["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"]);return U.createElement("button",Object.assign({},_,{ref:t,className:qe(_r.button,_r[a],_r[o],_r[r],{[_r.fullWidth]:s},{[_r.dashedBorder]:u},{[_r.onlyIcon]:!n&&f},m),type:p}),f&&d==="left"&&U.createElement(Kh,{svgIconComponent:f,className:_r.icon}),n,f&&d==="right"&&U.createElement(Kh,{svgIconComponent:f,className:_r.icon}))});function Hu(e,t,n){E.useEffect(()=>{const r=n??document.body;return r.addEventListener(e,t),()=>r.removeEventListener(e,t)},[e,t,n])}function df(e,t,n){E.useEffect(()=>{if(!n)return;const r=o=>{o.key===e&&t()};return n.addEventListener("keydown",r),()=>n.removeEventListener("keydown",r)},[e,t,n])}function Vu(e){const t=E.useRef();return E.useEffect(()=>{t.current=e},[e]),t.current}tT.displayName="Button";const Os=(e,t)=>{const n=E.useRef(!0);E.useEffect(()=>{if(!n.current)return e();n.current=!1},t)};function Ww(e,t){if(e===t)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(const[n]of e.entries())if(e[n]!==t[n])return!1;return!0}function Hw(e){return e.length===new Set(e).size}var nT="Tabs-module_tabs__QzIkz",rT="Tabs-module_tablist__WR6ag",oT="Tabs-module_tab__IdDYc",iT="Tabs-module_selected__TxfYv",aT="Tabs-module_divider__-r5Cd",sT="Tabs-module_tabpanel__0vR1c";ze(`@import url('https://altinncdn.no/fonts/altinn-din/altinn-din.css');

.Tabs-module_tabs__QzIkz {
  --divider-color: #c9c9c9;
  --divider-width: 1px;
  --tab-border_bottom_color-selected: var(--colors-blue-700);
  --tab-border_bottom_color: transparent;
  --tab-border_bottom_width: 4px;
  --tab-font_size: var(--font_size-component-size-sm);
  --tab-font_weight: 500;
  --tab-height: 32px;
  --tab-text_color-hover: var(--colors-black);
  --tab-text_color-selected: var(--colors-blue-700);
  --tab-text_color: #68707c;
  --tablist-gap: 1.5rem;
  --tablist-margin_horizontal: 20px;
  --tabpanel-margin_horizontal: 20px;
  --tabpanel-margin_vertical: 20px;

  position: relative;
}

.Tabs-module_tablist__WR6ag {
  display: flex;
  gap: var(--tablist-gap);
  margin: 0 var(--tablist-margin_horizontal);
  position: relative;
  z-index: 1;
}

.Tabs-module_tab__IdDYc {
  background-color: transparent;
  border-bottom-color: var(--tab-border_bottom_color);
  border-bottom-style: solid;
  border-width: 0 0 var(--tab-border_bottom_width) 0;
  color: var(--tab-text_color);
  cursor: pointer;
  font-family: inherit;
  font-size: var(--tab-font_size);
  font-weight: var(--tab-font_weight);
  line-height: var(--tab-height);
  margin: 0;
  overflow: hidden;
  padding: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.Tabs-module_tab__IdDYc.Tabs-module_selected__TxfYv {
  --tab-text_color: var(--tab-text_color-selected);
  --tab-border_bottom_color: var(--tab-border_bottom_color-selected);
}

.Tabs-module_tab__IdDYc:hover {
  --tab-text_color: var(--tab-text_color-hover);
}

.Tabs-module_tab__IdDYc:focus-visible {
  outline: var(--semantic-tab_focus-outline-color) auto var(--semantic-tab_focus-outline-width);
  outline-offset: var(--semantic-tab_focus-outline-offset);
}

.Tabs-module_divider__-r5Cd {
  border-color: var(--divider-color);
  border-style: solid;
  border-width: var(--divider-width) 0 0 0;
  height: var(--divider-width);
  margin: 0;
  position: absolute;
  top: var(--tab-height);
  width: 100%;
}

.Tabs-module_tabpanel__0vR1c {
  margin: var(--tabpanel-margin_vertical) var(--tabpanel-margin_horizontal);
}
`);const fy=e=>e.replace(/\s/,"_"),Vw=({activeTab:e,items:t,onChange:n})=>{const r=E.useId(),o=t.map(({name:w,content:C,value:g,tabId:x,panelId:k})=>{const P=g??w;return{name:w,content:C,value:P,tabId:x??r+fy(P)+"-tab",panelId:k??r+fy(P)+"-panel"}});if(!Hw(o.map(({value:w})=>w)))throw Error("Each tab value must be unique.");if(e!==void 0&&!o.some(w=>w.value===e))throw Error("The given active tab value must exist in the list of items.");const a=w=>o.findIndex(C=>C.value===w),s=e??o[0].value,[u,d]=E.useState(s),[f,p]=E.useState(a(s));E.useEffect(()=>d(s),[s]);const m=E.useRef(null),_=o.length-1;Os(()=>{var w;(w=m.current)===null||w===void 0||w.querySelectorAll('[role="tab"]')[f].focus()},[f]);const b=w=>{u!==w&&n&&n(w),d(w),p(a(w))},y=w=>C=>{switch(C.key){case"ArrowRight":f!==void 0&&p(f===_?0:f+1);break;case"ArrowLeft":f!==void 0&&p(f===0?_:f-1);break;case"Space":b(w)}};return U.createElement("div",{className:nT},U.createElement("div",{className:rT,ref:m,role:"tablist"},o.map((w,C)=>{const g=w.value===u;return U.createElement("button",{"aria-controls":w.panelId,"aria-selected":g,className:qe(oT,g&&iT),id:w.tabId,key:w.value,onClick:()=>b(w.value),onKeyDown:y(w.value),role:"tab",tabIndex:f===C?0:-1},w.name)})),U.createElement("hr",{className:aT}),o.map(w=>U.createElement("div",{className:sT,"aria-labelledby":w.tabId,hidden:w.value!==u,id:w.panelId,key:w.panelId,role:"tabpanel"},w.content)))};Vw.displayName="Tabs";var Dr={fieldSet:"FieldSet-module_fieldSet__GgktD",small:"FieldSet-module_small__eNG6Q",xsmall:"FieldSet-module_xsmall__y9foq",legendAndHelpText:"FieldSet-module_legendAndHelpText__WDZ-j",legend:"FieldSet-module_legend__PjhoV",legendContent:"FieldSet-module_legendContent__nOeHK",description:"FieldSet-module_description__XKHS-",content:"FieldSet-module_content__aZp-0",errorMessage:"FieldSet-module_errorMessage__nDaJ7"};ze(`.FieldSet-module_fieldSet__GgktD {
  --color: var(--component-checkbox-color-text-default);
  --content-margin_top: var(--component-fieldset-space-gap-y-small);
  --description-color: var(--component-field_description-color-text-default);
  --description-margin_top: var(--component-field_description-space-top-small);
  --error_message-margin_top: var(--component-fieldset-space-gap-y-small);
  --help_text-gap: var(--component-field_description-space-top-small);
  --font_size: var(--component-checkbox-font_size-sm);

  color: var(--color);
  border: 0;
  font-size: var(--font_size);
  line-height: var(--typography-default-line-height);
  margin: 0;
  padding: 0;
}

.FieldSet-module_small__eNG6Q {
  --content-margin_top: var(--component-fieldset-space-gap-y-small);
  --description-margin_top: var(--component-field_description-space-top-small);
  --error_message-margin_top: var(--component-fieldset-space-gap-y-small);
  --help_text-gap: var(--component-field_description-space-top-small);
  --font_size: var(--component-checkbox-font_size-sm);
}

.FieldSet-module_xsmall__y9foq {
  --content-margin_top: var(--component-fieldset-space-gap-y-xsmall);
  --description-margin_top: var(--component-field_description-space-top-xsmall);
  --error_message-margin_top: var(--component-fieldset-space-gap-y-xsmall);
  --help_text-gap: var(--component-field_description-space-top-xsmall);
  --font_size: var(--component-checkbox-font_size-xs);
}

.FieldSet-module_fieldSet__GgktD:disabled {
  opacity: var(--opacity-disabled);
}

.FieldSet-module_fieldSet__GgktD:disabled * {
  opacity: 1;
}

.FieldSet-module_legendAndHelpText__WDZ-j {
  display: flex;
  gap: var(--help_text-gap);
  padding: 0;
}

.FieldSet-module_legend__PjhoV {
  padding: 0;
}

.FieldSet-module_legendContent__nOeHK {
  font-weight: bold;
}

.FieldSet-module_description__XKHS- {
  color: var(--description-color);
  margin: 0;
}

.FieldSet-module_legend__PjhoV + .FieldSet-module_description__XKHS- {
  margin-top: var(--description-margin_top);
}

.FieldSet-module_content__aZp-0:not(:first-child) {
  margin-top: var(--content-margin_top);
}

.FieldSet-module_errorMessage__nDaJ7 {
  margin-top: var(--error_message-margin_top);
}
`);const Zw=e=>{var{children:t,className:n,contentClassName:r,description:o,error:a,helpText:s,legend:u,size:d="small"}=e,f=ft(e,["children","className","contentClassName","description","error","helpText","legend","size"]);return U.createElement("fieldset",Object.assign({},f,{className:qe(Dr.fieldSet,Dr[d],n)}),u&&U.createElement("legend",{className:Dr.legend},U.createElement("span",{className:Dr.legendAndHelpText},U.createElement("span",{className:Dr.legendContent},u),s&&U.createElement(Tm,{size:d,title:typeof u=="string"?`Help text for ${u}`:""},s))),o&&U.createElement("p",{className:Dr.description},o),U.createElement("div",{className:qe(Dr.content,r)},t),a&&U.createElement("div",{className:Dr.errorMessage},U.createElement(TR,{role:"alertdialog"},a)))};function ra(e){return e.split("-")[1]}function wm(e){return e==="y"?"height":"width"}function ao(e){return e.split("-")[0]}function da(e){return["top","bottom"].includes(ao(e))?"x":"y"}function hy(e,t,n){let{reference:r,floating:o}=e;const a=r.x+r.width/2-o.width/2,s=r.y+r.height/2-o.height/2,u=da(t),d=wm(u),f=r[d]/2-o[d]/2,p=u==="x";let m;switch(ao(t)){case"top":m={x:a,y:r.y-o.height};break;case"bottom":m={x:a,y:r.y+r.height};break;case"right":m={x:r.x+r.width,y:s};break;case"left":m={x:r.x-o.width,y:s};break;default:m={x:r.x,y:r.y}}switch(ra(t)){case"start":m[u]-=f*(n&&p?-1:1);break;case"end":m[u]+=f*(n&&p?-1:1)}return m}Zw.displayName="FieldSet";function qw(e){return typeof e!="number"?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(e):{top:e,right:e,bottom:e,left:e}}function Zu(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function km(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:a,rects:s,elements:u,strategy:d}=e,{boundary:f="clippingAncestors",rootBoundary:p="viewport",elementContext:m="floating",altBoundary:_=!1,padding:b=0}=t,y=qw(b),w=u[_?m==="floating"?"reference":"floating":m],C=Zu(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(w)))==null||n?w:w.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(u.floating)),boundary:f,rootBoundary:p,strategy:d})),g=m==="floating"?{...s.floating,x:r,y:o}:s.reference,x=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u.floating)),k=await(a.isElement==null?void 0:a.isElement(x))&&await(a.getScale==null?void 0:a.getScale(x))||{x:1,y:1},P=Zu(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:g,offsetParent:x,strategy:d}):g);return{top:(C.top-P.top+y.top)/k.y,bottom:(P.bottom-C.bottom+y.bottom)/k.y,left:(C.left-P.left+y.left)/k.x,right:(P.right-C.right+y.right)/k.x}}const Qh=Math.min,Bo=Math.max;function Gh(e,t,n){return Bo(e,Qh(t,n))}const py=e=>({name:"arrow",options:e,async fn(t){const{element:n,padding:r=0}=e||{},{x:o,y:a,placement:s,rects:u,platform:d,elements:f}=t;if(n==null)return{};const p=qw(r),m={x:o,y:a},_=da(s),b=wm(_),y=await d.getDimensions(n),w=_==="y",C=w?"top":"left",g=w?"bottom":"right",x=w?"clientHeight":"clientWidth",k=u.reference[b]+u.reference[_]-m[_]-u.floating[b],P=m[_]-u.reference[_],T=await(d.getOffsetParent==null?void 0:d.getOffsetParent(n));let A=T?T[x]:0;A&&await(d.isElement==null?void 0:d.isElement(T))||(A=f.floating[x]||u.floating[b]);const I=k/2-P/2,F=p[C],W=A-y[b]-p[g],B=A/2-y[b]/2+I,G=Gh(F,B,W),J=ra(s)!=null&&B!=G&&u.reference[b]/2-(B<F?p[C]:p[g])-y[b]/2<0;return{[_]:m[_]-(J?B<F?F-B:W-B:0),data:{[_]:G,centerOffset:B-G}}}}),lT={left:"right",right:"left",bottom:"top",top:"bottom"};function Al(e){return e.replace(/left|right|bottom|top/g,t=>lT[t])}const uT={start:"end",end:"start"};function ff(e){return e.replace(/start|end/g,t=>uT[t])}const Kw=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:r,middlewareData:o,rects:a,initialPlacement:s,platform:u,elements:d}=t,{mainAxis:f=!0,crossAxis:p=!0,fallbackPlacements:m,fallbackStrategy:_="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:y=!0,...w}=e,C=ao(r),g=ao(s)===s,x=await(u.isRTL==null?void 0:u.isRTL(d.floating)),k=m||(g||!y?[Al(s)]:function(G){const J=Al(G);return[ff(G),J,ff(J)]}(s));m||b==="none"||k.push(...function(G,J,ee,V){const le=ra(G);let X=function(D,z,oe){const q=["left","right"],O=["right","left"],N=["top","bottom"],M=["bottom","top"];switch(D){case"top":case"bottom":return oe?z?O:q:z?q:O;case"left":case"right":return z?N:M;default:return[]}}(ao(G),ee==="start",V);return le&&(X=X.map(D=>D+"-"+le),J&&(X=X.concat(X.map(ff)))),X}(s,y,b,x));const P=[s,...k],T=await km(t,w),A=[];let I=((n=o.flip)==null?void 0:n.overflows)||[];if(f&&A.push(T[C]),p){const{main:G,cross:J}=function(ee,V,le){le===void 0&&(le=!1);const X=ra(ee),D=da(ee),z=wm(D);let oe=D==="x"?X===(le?"end":"start")?"right":"left":X==="start"?"bottom":"top";return V.reference[z]>V.floating[z]&&(oe=Al(oe)),{main:oe,cross:Al(oe)}}(r,a,x);A.push(T[G],T[J])}if(I=[...I,{placement:r,overflows:A}],!A.every(G=>G<=0)){var F,W;const G=(((F=o.flip)==null?void 0:F.index)||0)+1,J=P[G];if(J)return{data:{index:G,overflows:I},reset:{placement:J}};let ee=(W=I.filter(V=>V.overflows[0]<=0).sort((V,le)=>V.overflows[1]-le.overflows[1])[0])==null?void 0:W.placement;if(!ee)switch(_){case"bestFit":{var B;const V=(B=I.map(le=>[le.placement,le.overflows.filter(X=>X>0).reduce((X,D)=>X+D,0)]).sort((le,X)=>le[1]-X[1])[0])==null?void 0:B[0];V&&(ee=V);break}case"initialPlacement":ee=s}if(r!==ee)return{reset:{placement:ee}}}return{}}}},cT=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,o=await async function(a,s){const{placement:u,platform:d,elements:f}=a,p=await(d.isRTL==null?void 0:d.isRTL(f.floating)),m=ao(u),_=ra(u),b=da(u)==="x",y=["left","top"].includes(m)?-1:1,w=p&&b?-1:1,C=typeof s=="function"?s(a):s;let{mainAxis:g,crossAxis:x,alignmentAxis:k}=typeof C=="number"?{mainAxis:C,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...C};return _&&typeof k=="number"&&(x=_==="end"?-1*k:k),b?{x:x*w,y:g*y}:{x:g*y,y:x*w}}(t,e);return{x:n+o.x,y:r+o.y,data:o}}}},dT=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:a}=t,{apply:s=()=>{},...u}=e,d=await km(t,u),f=ao(n),p=ra(n),m=da(n)==="x",{width:_,height:b}=r.floating;let y,w;f==="top"||f==="bottom"?(y=f,w=p===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(w=f,y=p==="end"?"top":"bottom");const C=b-d[y],g=_-d[w],x=!t.middlewareData.shift;let k=C,P=g;if(m){const A=_-d.left-d.right;P=p||x?Qh(g,A):A}else{const A=b-d.top-d.bottom;k=p||x?Qh(C,A):A}if(x&&!p){const A=Bo(d.left,0),I=Bo(d.right,0),F=Bo(d.top,0),W=Bo(d.bottom,0);m?P=_-2*(A!==0||I!==0?A+I:Bo(d.left,d.right)):k=b-2*(F!==0||W!==0?F+W:Bo(d.top,d.bottom))}await s({...t,availableWidth:P,availableHeight:k});const T=await o.getDimensions(a.floating);return _!==T.width||b!==T.height?{reset:{rects:!0}}:{}}}};function rn(e){var t;return((t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Dn(e){return rn(e).getComputedStyle(e)}function Qw(e){return e instanceof rn(e).Node}function go(e){return Qw(e)?(e.nodeName||"").toLowerCase():""}let zl;function Gw(){if(zl)return zl;const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?(zl=e.brands.map(t=>t.brand+"/"+t.version).join(" "),zl):navigator.userAgent}function Fn(e){return e instanceof rn(e).HTMLElement}function on(e){return e instanceof rn(e).Element}function my(e){return typeof ShadowRoot>"u"?!1:e instanceof rn(e).ShadowRoot||e instanceof ShadowRoot}function Ls(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Dn(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function fT(e){return["table","td","th"].includes(go(e))}function Jh(e){const t=/firefox/i.test(Gw()),n=Dn(e),r=n.backdropFilter||n.WebkitBackdropFilter;return n.transform!=="none"||n.perspective!=="none"||!!r&&r!=="none"||t&&n.willChange==="filter"||t&&!!n.filter&&n.filter!=="none"||["transform","perspective"].some(o=>n.willChange.includes(o))||["paint","layout","strict","content"].some(o=>{const a=n.contain;return a!=null&&a.includes(o)})}function Yh(){return/^((?!chrome|android).)*safari/i.test(Gw())}function Kc(e){return["html","body","#document"].includes(go(e))}const _y=Math.min,as=Math.max,qu=Math.round;function Jw(e){const t=Dn(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Fn(e),a=o?e.offsetWidth:n,s=o?e.offsetHeight:r,u=qu(n)!==a||qu(r)!==s;return u&&(n=a,r=s),{width:n,height:r,fallback:u}}function Yw(e){return on(e)?e:e.contextElement}const Xw={x:1,y:1};function Vi(e){const t=Yw(e);if(!Fn(t))return Xw;const n=t.getBoundingClientRect(),{width:r,height:o,fallback:a}=Jw(t);let s=(a?qu(n.width):n.width)/r,u=(a?qu(n.height):n.height)/o;return s&&Number.isFinite(s)||(s=1),u&&Number.isFinite(u)||(u=1),{x:s,y:u}}function ei(e,t,n,r){var o,a;t===void 0&&(t=!1),n===void 0&&(n=!1);const s=e.getBoundingClientRect(),u=Yw(e);let d=Xw;t&&(r?on(r)&&(d=Vi(r)):d=Vi(e));const f=u?rn(u):window,p=Yh()&&n;let m=(s.left+(p&&((o=f.visualViewport)==null?void 0:o.offsetLeft)||0))/d.x,_=(s.top+(p&&((a=f.visualViewport)==null?void 0:a.offsetTop)||0))/d.y,b=s.width/d.x,y=s.height/d.y;if(u){const w=rn(u),C=r&&on(r)?rn(r):r;let g=w.frameElement;for(;g&&r&&C!==w;){const x=Vi(g),k=g.getBoundingClientRect(),P=getComputedStyle(g);k.x+=(g.clientLeft+parseFloat(P.paddingLeft))*x.x,k.y+=(g.clientTop+parseFloat(P.paddingTop))*x.y,m*=x.x,_*=x.y,b*=x.x,y*=x.y,m+=k.x,_+=k.y,g=rn(g).frameElement}}return Zu({width:b,height:y,x:m,y:_})}function so(e){return((Qw(e)?e.ownerDocument:e.document)||window.document).documentElement}function Qc(e){return on(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function e1(e){return ei(so(e)).left+Qc(e).scrollLeft}function oa(e){if(go(e)==="html")return e;const t=e.assignedSlot||e.parentNode||my(e)&&e.host||so(e);return my(t)?t.host:t}function t1(e){const t=oa(e);return Kc(t)?t.ownerDocument.body:Fn(t)&&Ls(t)?t:t1(t)}function lo(e,t){var n;t===void 0&&(t=[]);const r=t1(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),a=rn(r);return o?t.concat(a,a.visualViewport||[],Ls(r)?r:[]):t.concat(r,lo(r))}function gy(e,t,n){let r;if(t==="viewport")r=function(s,u){const d=rn(s),f=so(s),p=d.visualViewport;let m=f.clientWidth,_=f.clientHeight,b=0,y=0;if(p){m=p.width,_=p.height;const w=Yh();(!w||w&&u==="fixed")&&(b=p.offsetLeft,y=p.offsetTop)}return{width:m,height:_,x:b,y}}(e,n);else if(t==="document")r=function(s){const u=so(s),d=Qc(s),f=s.ownerDocument.body,p=as(u.scrollWidth,u.clientWidth,f.scrollWidth,f.clientWidth),m=as(u.scrollHeight,u.clientHeight,f.scrollHeight,f.clientHeight);let _=-d.scrollLeft+e1(s);const b=-d.scrollTop;return Dn(f).direction==="rtl"&&(_+=as(u.clientWidth,f.clientWidth)-p),{width:p,height:m,x:_,y:b}}(so(e));else if(on(t))r=function(s,u){const d=ei(s,!0,u==="fixed"),f=d.top+s.clientTop,p=d.left+s.clientLeft,m=Fn(s)?Vi(s):{x:1,y:1};return{width:s.clientWidth*m.x,height:s.clientHeight*m.y,x:p*m.x,y:f*m.y}}(t,n);else{const s={...t};if(Yh()){var o,a;const u=rn(e);s.x-=((o=u.visualViewport)==null?void 0:o.offsetLeft)||0,s.y-=((a=u.visualViewport)==null?void 0:a.offsetTop)||0}r=s}return Zu(r)}function n1(e,t){const n=oa(e);return!(n===t||!on(n)||Kc(n))&&(Dn(n).position==="fixed"||n1(n,t))}function vy(e,t){return Fn(e)&&Dn(e).position!=="fixed"?t?t(e):e.offsetParent:null}function yy(e,t){const n=rn(e);if(!Fn(e))return n;let r=vy(e,t);for(;r&&fT(r)&&Dn(r).position==="static";)r=vy(r,t);return r&&(go(r)==="html"||go(r)==="body"&&Dn(r).position==="static"&&!Jh(r))?n:r||function(o){let a=oa(o);for(;Fn(a)&&!Kc(a);){if(Jh(a))return a;a=oa(a)}return null}(e)||n}function hT(e,t,n){const r=Fn(t),o=so(t),a=ei(e,!0,n==="fixed",t);let s={scrollLeft:0,scrollTop:0};const u={x:0,y:0};if(r||!r&&n!=="fixed")if((go(t)!=="body"||Ls(o))&&(s=Qc(t)),Fn(t)){const d=ei(t,!0);u.x=d.x+t.clientLeft,u.y=d.y+t.clientTop}else o&&(u.x=e1(o));return{x:a.left+s.scrollLeft-u.x,y:a.top+s.scrollTop-u.y,width:a.width,height:a.height}}const pT={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const a=[...n==="clippingAncestors"?function(d,f){const p=f.get(d);if(p)return p;let m=lo(d).filter(w=>on(w)&&go(w)!=="body"),_=null;const b=Dn(d).position==="fixed";let y=b?oa(d):d;for(;on(y)&&!Kc(y);){const w=Dn(y),C=Jh(y);C||w.position!=="fixed"||(_=null),(b?!C&&!_:!C&&w.position==="static"&&_&&["absolute","fixed"].includes(_.position)||Ls(y)&&!C&&n1(d,y))?m=m.filter(g=>g!==y):_=w,y=oa(y)}return f.set(d,m),m}(t,this._c):[].concat(n),r],s=a[0],u=a.reduce((d,f)=>{const p=gy(t,f,o);return d.top=as(p.top,d.top),d.right=_y(p.right,d.right),d.bottom=_y(p.bottom,d.bottom),d.left=as(p.left,d.left),d},gy(t,s,o));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=Fn(n),a=so(n);if(n===a)return t;let s={scrollLeft:0,scrollTop:0},u={x:1,y:1};const d={x:0,y:0};if((o||!o&&r!=="fixed")&&((go(n)!=="body"||Ls(a))&&(s=Qc(n)),Fn(n))){const f=ei(n);u=Vi(n),d.x=f.x+n.clientLeft,d.y=f.y+n.clientTop}return{width:t.width*u.x,height:t.height*u.y,x:t.x*u.x-s.scrollLeft*u.x+d.x,y:t.y*u.y-s.scrollTop*u.y+d.y}},isElement:on,getDimensions:function(e){return Jw(e)},getOffsetParent:yy,getDocumentElement:so,getScale:Vi,async getElementRects(e){let{reference:t,floating:n,strategy:r}=e;const o=this.getOffsetParent||yy,a=this.getDimensions;return{reference:hT(t,await o(n),r),floating:{x:0,y:0,...await a(n)}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>Dn(e).direction==="rtl"};function r1(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:a=!0,elementResize:s=!0,animationFrame:u=!1}=r,d=o||a?[...on(e)?lo(e):e.contextElement?lo(e.contextElement):[],...lo(t)]:[];d.forEach(_=>{const b=!on(_)&&_.toString().includes("V");!o||u&&!b||_.addEventListener("scroll",n,{passive:!0}),a&&_.addEventListener("resize",n)});let f,p=null;s&&(p=new ResizeObserver(()=>{n()}),on(e)&&!u&&p.observe(e),on(e)||!e.contextElement||u||p.observe(e.contextElement),p.observe(t));let m=u?ei(e):null;return u&&function _(){const b=ei(e);!m||b.x===m.x&&b.y===m.y&&b.width===m.width&&b.height===m.height||n(),m=b,f=requestAnimationFrame(_)}(),n(),()=>{var _;d.forEach(b=>{o&&b.removeEventListener("scroll",n),a&&b.removeEventListener("resize",n)}),(_=p)==null||_.disconnect(),p=null,u&&cancelAnimationFrame(f)}}const mT=(e,t,n)=>{const r=new Map,o={platform:pT,...n},a={...o.platform,_c:r};return(async(s,u,d)=>{const{placement:f="bottom",strategy:p="absolute",middleware:m=[],platform:_}=d,b=m.filter(Boolean),y=await(_.isRTL==null?void 0:_.isRTL(u));let w=await _.getElementRects({reference:s,floating:u,strategy:p}),{x:C,y:g}=hy(w,f,y),x=f,k={},P=0;for(let T=0;T<b.length;T++){const{name:A,fn:I}=b[T],{x:F,y:W,data:B,reset:G}=await I({x:C,y:g,initialPlacement:f,placement:x,strategy:p,middlewareData:k,rects:w,platform:_,elements:{reference:s,floating:u}});C=F??C,g=W??g,k={...k,[A]:{...k[A],...B}},G&&P<=50&&(P++,typeof G=="object"&&(G.placement&&(x=G.placement),G.rects&&(w=G.rects===!0?await _.getElementRects({reference:s,floating:u,strategy:p}):G.rects),{x:C,y:g}=hy(w,x,y)),T=-1)}return{x:C,y:g,placement:x,strategy:p,middlewareData:k}})(e,t,{...o,platform:a})},_T=e=>{const{element:t,padding:n}=e;return{name:"arrow",options:e,fn(r){return t&&(o=t,{}.hasOwnProperty.call(o,"current"))?t.current!=null?py({element:t.current,padding:n}).fn(r):{}:t?py({element:t,padding:n}).fn(r):{};var o}}};var Gl=typeof document<"u"?E.useLayoutEffect:E.useEffect;function Ku(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!=0;)if(!Ku(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!=0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!=0;){const a=o[r];if((a!=="_owner"||!e.$$typeof)&&!Ku(e[a],t[a]))return!1}return!0}return e!=e&&t!=t}function o1(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function by(e,t){const n=o1(e);return Math.round(t*n)/n}function xy(e){const t=E.useRef(e);return Gl(()=>{t.current=e}),t}/*!
* tabbable 6.1.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Xh=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),i1=typeof Element>"u",Ts=i1?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Jl=!i1&&Element.prototype.getRootNode?function(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}:function(e){return e?.ownerDocument},Qu=function e(t,n){var r;n===void 0&&(n=!0);var o=t==null||(r=t.getAttribute)===null||r===void 0?void 0:r.call(t,"inert");return o===""||o==="true"||n&&t&&e(t.parentNode)},gT=function e(t,n,r){for(var o=[],a=Array.from(t);a.length;){var s=a.shift();if(!Qu(s,!1))if(s.tagName==="SLOT"){var u=s.assignedElements(),d=e(u.length?u:s.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:s,candidates:d})}else{Ts.call(s,Xh)&&r.filter(s)&&(n||!t.includes(s))&&o.push(s);var f=s.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(s),p=!Qu(f,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(s));if(f&&p){var m=e(f===!0?s.children:f.children,!0,r);r.flatten?o.push.apply(o,m):o.push({scopeParent:s,candidates:m})}else a.unshift.apply(a,s.children)}}return o},a1=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(n){var r,o=n==null||(r=n.getAttribute)===null||r===void 0?void 0:r.call(n,"contenteditable");return o===""||o==="true"}(e))&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},vT=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},s1=function(e){return e.tagName==="INPUT"},yT=function(e){return function(t){return s1(t)&&t.type==="radio"}(e)&&!function(t){if(!t.name)return!0;var n,r=t.form||Jl(t),o=function(s){return r.querySelectorAll('input[type="radio"][name="'+s+'"]')};if(typeof window<"u"&&window.CSS!==void 0&&typeof window.CSS.escape=="function")n=o(window.CSS.escape(t.name));else try{n=o(t.name)}catch(s){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",s.message),!1}var a=function(s,u){for(var d=0;d<s.length;d++)if(s[d].checked&&s[d].form===u)return s[d]}(n,t.form);return!a||a===t}(e)},wy=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return n===0&&r===0},bT=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var o=Ts.call(e,"details>summary:first-of-type")?e.parentElement:e;if(Ts.call(o,"details:not([open]) *"))return!0;if(n&&n!=="full"&&n!=="legacy-full"){if(n==="non-zero-area")return wy(e)}else{if(typeof r=="function"){for(var a=e;e;){var s=e.parentElement,u=Jl(e);if(s&&!s.shadowRoot&&r(s)===!0)return wy(e);e=e.assignedSlot?e.assignedSlot:s||u===e.ownerDocument?s:u.host}e=a}if(function(d){var f,p,m,_,b=d&&Jl(d),y=(f=b)===null||f===void 0?void 0:f.host,w=!1;if(b&&b!==d)for(w=!!((p=y)!==null&&p!==void 0&&(m=p.ownerDocument)!==null&&m!==void 0&&m.contains(y)||d!=null&&(_=d.ownerDocument)!==null&&_!==void 0&&_.contains(d));!w&&y;){var C,g,x;w=!((g=y=(C=b=Jl(y))===null||C===void 0?void 0:C.host)===null||g===void 0||(x=g.ownerDocument)===null||x===void 0||!x.contains(y))}return w}(e))return!e.getClientRects().length;if(n!=="legacy-full")return!0}return!1},xT=function(e,t){return!(t.disabled||Qu(t)||function(n){return s1(n)&&n.type==="hidden"}(t)||bT(t,e)||function(n){return n.tagName==="DETAILS"&&Array.prototype.slice.apply(n.children).some(function(r){return r.tagName==="SUMMARY"})}(t)||function(n){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(n.tagName))for(var r=n.parentElement;r;){if(r.tagName==="FIELDSET"&&r.disabled){for(var o=0;o<r.children.length;o++){var a=r.children.item(o);if(a.tagName==="LEGEND")return!!Ts.call(r,"fieldset[disabled] *")||!a.contains(n)}return!0}r=r.parentElement}return!1}(t))},ky=function(e,t){return!(yT(t)||a1(t)<0||!xT(e,t))},wT=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},kT=function e(t){var n=[],r=[];return t.forEach(function(o,a){var s=!!o.scopeParent,u=s?o.scopeParent:o,d=a1(u,s),f=s?e(o.candidates):u;d===0?s?n.push.apply(n,f):n.push(u):r.push({documentOrder:a,tabIndex:d,item:o,isScope:s,content:f})}),r.sort(vT).reduce(function(o,a){return a.isScope?o.push.apply(o,a.content):o.push(a.content),o},[]).concat(n)},l1=function(e,t){var n;return n=(t=t||{}).getShadowRoot?gT([e],t.includeContainer,{filter:ky.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:wT}):function(r,o,a){if(Qu(r))return[];var s=Array.prototype.slice.apply(r.querySelectorAll(Xh));return o&&Ts.call(r,Xh)&&s.unshift(r),s.filter(a)}(e,t.includeContainer,ky.bind(null,t)),kT(n)};function ep(){return ep=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ep.apply(this,arguments)}var Rs=typeof document<"u"?E.useLayoutEffect:E.useEffect;let hf=!1,ST=0;const Sy=()=>"floating-ui-"+ST++,Sm=jb["useId".toString()]||function(){const[e,t]=E.useState(()=>hf?Sy():void 0);return Rs(()=>{e==null&&t(Sy())},[]),E.useEffect(()=>{hf||(hf=!0)},[]),e},PT=E.createContext(null),CT=E.createContext(null),u1=()=>E.useContext(CT);function Pm(e){return e?.ownerDocument||document}function Gc(e){return Pm(e).defaultView||window}function Wo(e){return!!e&&e instanceof Gc(e).Element}function Cm(e){return!!e&&e instanceof Gc(e).HTMLElement}function ET(e){if(e.mozInputSource===0&&e.isTrusted)return!0;const t=/Android/i;return(t.test(function(){const n=navigator.userAgentData;return n!=null&&n.platform?n.platform:navigator.platform}())||t.test(function(){const n=navigator.userAgentData;return n&&Array.isArray(n.brands)?n.brands.map(r=>{let{brand:o,version:a}=r;return o+"/"+a}).join(" "):navigator.userAgent}()))&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function OT(e){return e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType!=="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0}function Py(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function LT(e,t){if(!e||!t)return!1;const n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&(r=n,typeof ShadowRoot<"u"&&(r instanceof Gc(r).ShadowRoot||r instanceof ShadowRoot))){let o=t;for(;o;){if(e===o)return!0;o=o.parentNode||o.host}}var r;return!1}function pf(e,t){let n=e.filter(o=>{var a;return o.parentId===t&&((a=o.context)==null?void 0:a.open)}),r=n;for(;r.length;)r=e.filter(o=>{var a;return(a=r)==null?void 0:a.some(s=>{var u;return o.parentId===s.id&&((u=o.context)==null?void 0:u.open)})}),n=n.concat(r);return n}const c1=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function Cy(e,t){const n=l1(e,c1());t==="prev"&&n.reverse();const r=n.indexOf(function(o){let a=o.activeElement;for(;((s=a)==null||(u=s.shadowRoot)==null?void 0:u.activeElement)!=null;){var s,u;a=a.shadowRoot.activeElement}return a}(Pm(e)));return n.slice(r+1)[0]}function mf(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!LT(n,r)}function TT(e){l1(e,c1()).forEach(t=>{t.dataset.tabindex=t.getAttribute("tabindex")||"",t.setAttribute("tabindex","-1")})}function RT(e){e.querySelectorAll("[data-tabindex]").forEach(t=>{const n=t.dataset.tabindex;delete t.dataset.tabindex,n?t.setAttribute("tabindex",n):t.removeAttribute("tabindex")})}const d1={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function Ey(e){e.key==="Tab"&&(e.target,clearTimeout(void 0))}const Oy=E.forwardRef(function(e,t){const[n,r]=E.useState();return Rs(()=>(/apple/i.test(navigator.vendor)&&r("button"),document.addEventListener("keydown",Ey),()=>{document.removeEventListener("keydown",Ey)}),[]),E.createElement("span",ep({},e,{ref:t,tabIndex:0,role:n,"aria-hidden":!n||void 0,"data-floating-ui-focus-guard":"",style:d1}))}),f1=E.createContext(null);function AT(e){let{children:t,id:n,root:r=null,preserveTabOrder:o=!0}=e;const a=function(b){let{id:y,root:w}=b===void 0?{}:b;const[C,g]=E.useState(null),x=Sm(),k=zT(),P=E.useMemo(()=>({id:y,root:w,portalContext:k,uniqueId:x}),[y,w,k,x]),T=E.useRef();return Rs(()=>()=>{C?.remove()},[C,P]),Rs(()=>{if(T.current===P)return;T.current=P;const{id:A,root:I,portalContext:F,uniqueId:W}=P,B=A?document.getElementById(A):null,G="data-floating-ui-portal";if(B){const J=document.createElement("div");J.id=W,J.setAttribute(G,""),B.appendChild(J),g(J)}else{let J=F?.portalNode||I||document.body,ee=null;A&&(ee=document.createElement("div"),ee.id=A,J.appendChild(ee));const V=document.createElement("div");V.id=W,V.setAttribute(G,""),J=ee||J,J.appendChild(V),g(V)}},[P]),C}({id:n,root:r}),[s,u]=E.useState(null),d=E.useRef(null),f=E.useRef(null),p=E.useRef(null),m=E.useRef(null),_=!!s&&!s.modal&&s.open&&o&&!(!r&&!a);return E.useEffect(()=>{if(a&&o&&(s==null||!s.modal))return a.addEventListener("focusin",b,!0),a.addEventListener("focusout",b,!0),()=>{a.removeEventListener("focusin",b,!0),a.removeEventListener("focusout",b,!0)};function b(y){a&&mf(y)&&(y.type==="focusin"?RT:TT)(a)}},[a,o,s?.modal]),E.createElement(f1.Provider,{value:E.useMemo(()=>({preserveTabOrder:o,beforeOutsideRef:d,afterOutsideRef:f,beforeInsideRef:p,afterInsideRef:m,portalNode:a,setFocusManagerState:u}),[o,a])},_&&a&&E.createElement(Oy,{"data-type":"outside",ref:d,onFocus:b=>{if(mf(b,a)){var y;(y=p.current)==null||y.focus()}else{const w=Cy(document.body,"prev")||s?.refs.domReference.current;w?.focus()}}}),_&&a&&E.createElement("span",{"aria-owns":a.id,style:d1}),a&&qo.createPortal(t,a),_&&a&&E.createElement(Oy,{"data-type":"outside",ref:f,onFocus:b=>{if(mf(b,a)){var y;(y=m.current)==null||y.focus()}else{const w=Cy(document.body,"next")||s?.refs.domReference.current;w?.focus(),s?.closeOnFocusOut&&s?.onOpenChange(!1)}}}))}const zT=()=>E.useContext(f1);function Ly(e){return Cm(e.target)&&e.target.tagName==="BUTTON"}function Ty(e){return function(t){return Cm(t)&&t.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])")}(e)}const NT=jb["useInsertionEffect".toString()]||(e=>e());function Yl(e){const t=E.useRef(()=>{});return NT(()=>{t.current=e}),E.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.current==null?void 0:t.current(...r)},[])}function _f(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}const IT={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},BT={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"};function MT(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,events:o,nodeId:a,elements:{reference:s,domReference:u,floating:d},dataRef:f}=e,{enabled:p=!0,escapeKey:m=!0,outsidePress:_=!0,outsidePressEvent:b="pointerdown",referencePress:y=!1,referencePressEvent:w="pointerdown",ancestorScroll:C=!1,bubbles:g}=t,x=u1(),k=(((P=E.useContext(PT))==null?void 0:P.id)||null)!=null;var P;const T=Yl(typeof _=="function"?_:()=>!1),A=typeof _=="function"?T:_,I=E.useRef(!1),{escapeKeyBubbles:F,outsidePressBubbles:W}=(J=>{var ee,V;return{escapeKeyBubbles:typeof J=="boolean"?J:(ee=J?.escapeKey)!=null&&ee,outsidePressBubbles:typeof J=="boolean"?J:(V=J?.outsidePress)==null||V}})(g),B=Yl(J=>{if(!n||!p||!m||J.key!=="Escape")return;const ee=x?pf(x.nodesRef.current,a):[];if(!F&&(J.stopPropagation(),ee.length>0)){let V=!0;if(ee.forEach(le=>{var X;(X=le.context)==null||!X.open||le.context.dataRef.current.__escapeKeyBubbles||(V=!1)}),!V)return}o.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),r(!1)}),G=Yl(J=>{const ee=I.current;if(I.current=!1,ee||typeof A=="function"&&!A(J))return;const V=function(D){return"composedPath"in D?D.composedPath()[0]:D.target}(J);if(Cm(V)&&d){const D=V.clientWidth>0&&V.scrollWidth>V.clientWidth,z=V.clientHeight>0&&V.scrollHeight>V.clientHeight;let oe=z&&J.offsetX>V.clientWidth;if(z&&Gc(d).getComputedStyle(V).direction==="rtl"&&(oe=J.offsetX<=V.offsetWidth-V.clientWidth),oe||D&&J.offsetY>V.clientHeight)return}const le=x&&pf(x.nodesRef.current,a).some(D=>{var z;return _f(J,(z=D.context)==null?void 0:z.elements.floating)});if(_f(J,d)||_f(J,u)||le)return;const X=x?pf(x.nodesRef.current,a):[];if(X.length>0){let D=!0;if(X.forEach(z=>{var oe;(oe=z.context)==null||!oe.open||z.context.dataRef.current.__outsidePressBubbles||(D=!1)}),!D)return}o.emit("dismiss",{type:"outsidePress",data:{returnFocus:k?{preventScroll:!0}:ET(J)||OT(J)}}),r(!1)});return E.useEffect(()=>{if(!n||!p)return;function J(){r(!1)}f.current.__escapeKeyBubbles=F,f.current.__outsidePressBubbles=W;const ee=Pm(d);m&&ee.addEventListener("keydown",B),A&&ee.addEventListener(b,G);let V=[];return C&&(Wo(u)&&(V=lo(u)),Wo(d)&&(V=V.concat(lo(d))),!Wo(s)&&s&&s.contextElement&&(V=V.concat(lo(s.contextElement)))),V=V.filter(le=>{var X;return le!==((X=ee.defaultView)==null?void 0:X.visualViewport)}),V.forEach(le=>{le.addEventListener("scroll",J,{passive:!0})}),()=>{m&&ee.removeEventListener("keydown",B),A&&ee.removeEventListener(b,G),V.forEach(le=>{le.removeEventListener("scroll",J)})}},[f,d,u,s,m,A,b,n,r,C,p,F,W,B,G]),E.useEffect(()=>{I.current=!1},[A,b]),E.useMemo(()=>p?{reference:{onKeyDown:B,[IT[w]]:()=>{y&&(o.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),r(!1))}},floating:{onKeyDown:B,[BT[b]]:()=>{I.current=!0}}}:{},[p,o,y,b,w,r,B])}function Em(e){return E.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})},e)}function h1(e){var t;e===void 0&&(e={});const{open:n=!1,onOpenChange:r,nodeId:o}=e,[a,s]=E.useState(null),u=((t=e.elements)==null?void 0:t.reference)||a,d=function(P){P===void 0&&(P={});const{placement:T="bottom",strategy:A="absolute",middleware:I=[],platform:F,elements:{reference:W,floating:B}={},transform:G=!0,whileElementsMounted:J,open:ee}=P,[V,le]=E.useState({x:0,y:0,strategy:A,placement:T,middlewareData:{},isPositioned:!1}),[X,D]=E.useState(I);Ku(X,I)||D(I);const[z,oe]=E.useState(null),[q,O]=E.useState(null),N=E.useCallback(de=>{de!=ue.current&&(ue.current=de,oe(de))},[oe]),M=E.useCallback(de=>{de!==he.current&&(he.current=de,O(de))},[O]),Q=W||z,ne=B||q,ue=E.useRef(null),he=E.useRef(null),be=E.useRef(V),Je=xy(J),Ze=xy(F),Le=E.useCallback(()=>{if(!ue.current||!he.current)return;const de={placement:T,strategy:A,middleware:X};Ze.current&&(de.platform=Ze.current),mT(ue.current,he.current,de).then(_e=>{const Se={..._e,isPositioned:!0};ae.current&&!Ku(be.current,Se)&&(be.current=Se,qo.flushSync(()=>{le(Se)}))})},[X,T,A,Ze]);Gl(()=>{ee===!1&&be.current.isPositioned&&(be.current.isPositioned=!1,le(de=>({...de,isPositioned:!1})))},[ee]);const ae=E.useRef(!1);Gl(()=>(ae.current=!0,()=>{ae.current=!1}),[]),Gl(()=>{if(Q&&(ue.current=Q),ne&&(he.current=ne),Q&&ne){if(Je.current)return Je.current(Q,ne,Le);Le()}},[Q,ne,Le,Je]);const me=E.useMemo(()=>({reference:ue,floating:he,setReference:N,setFloating:M}),[N,M]),K=E.useMemo(()=>({reference:Q,floating:ne}),[Q,ne]),ce=E.useMemo(()=>{const de={position:A,left:0,top:0};if(!K.floating)return de;const _e=by(K.floating,V.x),Se=by(K.floating,V.y);return G?{...de,transform:"translate("+_e+"px, "+Se+"px)",...o1(K.floating)>=1.5&&{willChange:"transform"}}:{position:A,left:_e,top:Se}},[A,G,K.floating,V.x,V.y]);return E.useMemo(()=>({...V,update:Le,refs:me,elements:K,floatingStyles:ce}),[V,Le,me,K,ce])}(e),f=u1(),p=Yl(r),m=E.useRef(null),_=E.useRef({}),b=E.useState(()=>function(){const P=new Map;return{emit(T,A){var I;(I=P.get(T))==null||I.forEach(F=>F(A))},on(T,A){P.set(T,[...P.get(T)||[],A])},off(T,A){var I;P.set(T,((I=P.get(T))==null?void 0:I.filter(F=>F!==A))||[])}}}())[0],y=Sm(),w=E.useCallback(P=>{const T=Wo(P)?{getBoundingClientRect:()=>P.getBoundingClientRect(),contextElement:P}:P;d.refs.setReference(T)},[d.refs]),C=E.useCallback(P=>{(Wo(P)||P===null)&&(m.current=P,s(P)),(Wo(d.refs.reference.current)||d.refs.reference.current===null||P!==null&&!Wo(P))&&d.refs.setReference(P)},[d.refs]),g=E.useMemo(()=>({...d.refs,setReference:C,setPositionReference:w,domReference:m}),[d.refs,C,w]),x=E.useMemo(()=>({...d.elements,domReference:u}),[d.elements,u]),k=E.useMemo(()=>({...d,refs:g,elements:x,dataRef:_,nodeId:o,floatingId:y,events:b,open:n,onOpenChange:p}),[d,o,y,b,n,p,g,x]);return Rs(()=>{const P=f?.nodesRef.current.find(T=>T.id===o);P&&(P.context=k)}),E.useMemo(()=>({...d,context:k,refs:g,elements:x}),[d,g,x,k])}function gf(e,t,n){const r=new Map;return{...n==="floating"&&{tabIndex:-1},...e,...t.map(o=>o?o[n]:null).concat(e).reduce((o,a)=>(a&&Object.entries(a).forEach(s=>{let[u,d]=s;var f;u.indexOf("on")===0?(r.has(u)||r.set(u,[]),typeof d=="function"&&((f=r.get(u))==null||f.push(d),o[u]=function(){for(var p,m=arguments.length,_=new Array(m),b=0;b<m;b++)_[b]=arguments[b];return(p=r.get(u))==null?void 0:p.map(y=>y(..._)).find(y=>y!==void 0)})):o[u]=d}),o),{})}}var tp={popover:"Popover-module_popover__E9K9X",default:"Popover-module_default__TlPJp",info:"Popover-module_info__VKCAP",warning:"Popover-module_warning__o27i9",danger:"Popover-module_danger__9bIyx",arrow:"Popover-module_arrow__5A-0e"};function DT(e){var{variant:t="default",arrow:n,initialOpen:r,placement:o,offset:a,open:s,onOpenChange:u}=e,d=ft(e,["variant","arrow","initialOpen","placement","offset","open","onOpenChange"]);const[f,p]=E.useState(r),m=s??f,_=u??p,b=E.useRef(null),y=h1({placement:o,open:m,onOpenChange:_,whileElementsMounted:r1,middleware:[cT(a??(n?12:4)),Kw({padding:5,fallbackPlacements:["bottom","top"]}),(w={padding:5},w===void 0&&(w={}),{name:"shift",options:w,async fn(T){const{x:A,y:I,placement:F}=T,{mainAxis:W=!0,crossAxis:B=!1,limiter:G={fn:q=>{let{x:O,y:N}=q;return{x:O,y:N}}},...J}=w,ee={x:A,y:I},V=await km(T,J),le=da(ao(F)),X=le==="x"?"y":"x";let D=ee[le],z=ee[X];if(W){const q=le==="y"?"bottom":"right";D=Gh(D+V[le==="y"?"top":"left"],D,D-V[q])}if(B){const q=X==="y"?"bottom":"right";z=Gh(z+V[X==="y"?"top":"left"],z,z-V[q])}const oe=G.fn({...T,[le]:D,[X]:z});return{...oe,data:{x:oe.x-A,y:oe.y-I}}}}),_T({element:b,padding:8})]});var w;const C=y.context,g=function(T,A){A===void 0&&(A={});const{open:I,onOpenChange:F,dataRef:W,elements:{domReference:B}}=T,{enabled:G=!0,event:J="click",toggle:ee=!0,ignoreMouse:V=!1,keyboardHandlers:le=!0}=A,X=E.useRef(),D=E.useRef(!1);return E.useMemo(()=>G?{reference:{onPointerDown(z){X.current=z.pointerType},onMouseDown(z){z.button===0&&(Py(X.current,!0)&&V||J!=="click"&&(I?!ee||W.current.openEvent&&W.current.openEvent.type!=="mousedown"||F(!1):(z.preventDefault(),F(!0)),W.current.openEvent=z.nativeEvent))},onClick(z){J==="mousedown"&&X.current?X.current=void 0:Py(X.current,!0)&&V||(I?!ee||W.current.openEvent&&W.current.openEvent.type!=="click"||F(!1):F(!0),W.current.openEvent=z.nativeEvent)},onKeyDown(z){X.current=void 0,z.defaultPrevented||!le||Ly(z)||(z.key!==" "||Ty(B)||(z.preventDefault(),D.current=!0),z.key==="Enter"&&(I?ee&&F(!1):F(!0)))},onKeyUp(z){z.defaultPrevented||!le||Ly(z)||Ty(B)||z.key===" "&&D.current&&(D.current=!1,I?ee&&F(!1):F(!0))}}}:{},[G,W,J,V,le,B,ee,I,F])}(C,{enabled:s==null}),x=MT(C,{referencePress:!1}),k=function(T,A){A===void 0&&(A={});const{open:I,floatingId:F}=T,{enabled:W=!0,role:B="dialog"}=A,G=Sm();return E.useMemo(()=>{const J={id:F,role:B};return W?B==="tooltip"?{reference:{"aria-describedby":I?F:void 0},floating:J}:{reference:{"aria-expanded":I?"true":"false","aria-haspopup":B==="alertdialog"?"dialog":B,"aria-controls":I?F:void 0,...B==="listbox"&&{role:"combobox"},...B==="menu"&&{id:G}},floating:{...J,...B==="menu"&&{"aria-labelledby":G}}}:{}},[W,B,I,F,G])}(C),P=function(T){T===void 0&&(T=[]);const A=T,I=E.useCallback(B=>gf(B,T,"reference"),A),F=E.useCallback(B=>gf(B,T,"floating"),A),W=E.useCallback(B=>gf(B,T,"item"),T.map(B=>B?.item));return E.useMemo(()=>({getReferenceProps:I,getFloatingProps:F,getItemProps:W}),[I,F,W])}([g,x,k]);return E.useMemo(()=>Object.assign(Object.assign(Object.assign(Object.assign({open:m,setOpen:_},P),y),d),{arrow:n,arrowRef:b,variant:t}),[m,_,P,y,d,n,b,t])}ze(`.Popover-module_popover__E9K9X {
  width: max-content;
  z-index: 2;
  padding: 12px;
  max-width: calc(100vw - 20px);
  border: 1px solid gray;
  border-radius: 3px;
  box-shadow: 0 3px 6px 0 #0003;
}

.Popover-module_popover__E9K9X:focus-visible {
  outline: var(--semantic-tab_focus-outline-color) solid var(--semantic-tab_focus-outline-width);
  outline-offset: var(--semantic-tab_focus-outline-offset);
}

.Popover-module_popover__E9K9X:focus:not(:focus-visible) {
  outline: none;
}

.Popover-module_popover__E9K9X.Popover-module_default__TlPJp {
  background-color: #fff;
  border-color: #68707c;
}

.Popover-module_popover__E9K9X.Popover-module_info__VKCAP {
  background-color: #e6eff8;
  border-color: #004c8f;
}

.Popover-module_popover__E9K9X.Popover-module_warning__o27i9 {
  background-color: #fffbe6;
  border-color: #cc7005;
}

.Popover-module_popover__E9K9X.Popover-module_danger__9bIyx {
  background-color: #f9d5db;
  border-color: #b3253a;
}

.Popover-module_arrow__5A-0e {
  position: absolute;
  box-sizing: content-box;
  z-index: -1;
  transform: rotate(45deg);
  background-color: inherit;
  border: 1px solid;

  /* Set border color separately in order to make inheritance work. */
  border-color: inherit;
  width: 12px;
  height: 12px;
}

.Popover-module_popover__E9K9X[data-placement^='top'] > .Popover-module_arrow__5A-0e {
  box-shadow: 3px 3px 6px 0 #0003;
  clip-path: inset(0 -10px -10px 0);
  border-left-color: transparent;
  border-top-color: transparent;
}

.Popover-module_popover__E9K9X[data-placement^='bottom'] > .Popover-module_arrow__5A-0e {
  clip-path: inset(-10px 0 0 -10px);
  border-bottom-color: transparent;
  border-right-color: transparent;
}

.Popover-module_popover__E9K9X[data-placement^='left'] > .Popover-module_arrow__5A-0e {
  box-shadow: 1px 3px 6px 0 #0003;
  clip-path: inset(-10px -10px 0 0);
  border-left-color: transparent;
  border-bottom-color: transparent;
}

.Popover-module_popover__E9K9X[data-placement^='right'] > .Popover-module_arrow__5A-0e {
  box-shadow: -1px 3px 6px 0 #0003;
  clip-path: inset(0 0 -10px -10px);
  border-right-color: transparent;
  border-top-color: transparent;
}
`);const p1=E.createContext(null),Om=()=>{const e=E.useContext(p1);if(e==null)throw new Error("Popover components must be wrapped in <Popover />");return e};function m1(e){var{children:t,trigger:n,arrow:r=!0,initialOpen:o=!1}=e,a=ft(e,["children","trigger","arrow","initialOpen"]);const s=DT(Object.assign({arrow:r,initialOpen:o},a));return U.createElement(p1.Provider,{value:s},U.createElement(jT,null,n),U.createElement(FT,null,t,s.arrow&&U.createElement(UT,null)))}m1.displayName="Popover";const jT=E.forwardRef(function(e,t){var{children:n}=e,r=ft(e,["children"]);const o=Om(),a=E.isValidElement(n)?n:null,s=Em([o.refs.setReference,t]);if(a){const u=Object.assign(Object.assign(Object.assign(Object.assign({ref:s},r),a.props),o.getReferenceProps()),{"data-state":o.open?"open":"closed","aria-expanded":o.open});return E.cloneElement(a,u)}return null}),FT=E.forwardRef(function(e,t){var n,r;const o=Om(),a=Em([o.refs.setFloating,t]);return o.open?U.createElement("div",Object.assign({ref:a,style:{position:o.strategy,top:(n=o.y)!==null&&n!==void 0?n:0,left:(r=o.x)!==null&&r!==void 0?r:0},"data-placement":o.placement,className:qe(tp.popover,tp[o.variant],o.className)},o.getFloatingProps(e),{tabIndex:-1,role:o.role||"dialog"}),e.children):null}),UT=E.forwardRef(function(e,t){var n,r;const o=Om(),a=Em([o.arrowRef,t]),s=(n=o.middlewareData.arrow)===null||n===void 0?void 0:n.x,u=(r=o.middlewareData.arrow)===null||r===void 0?void 0:r.y,d={top:"bottom",right:"left",bottom:"top",left:"right"}[o.placement.split("-")[0]];return U.createElement("div",Object.assign({ref:a,style:Object.assign(Object.assign(Object.assign({},s!=null?{left:s}:{}),u!=null?{top:u}:{}),d?{[d]:"-7px"}:{}),className:tp.arrow},e))});var _1="utility-module_visuallyHidden__R-C67",Lm="utility-module_focusable__1fBKr";ze(`/**
 * Visually hide an element, but leave it available for screen readers
 */
.utility-module_visuallyHidden__R-C67 {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

/**
 * Apply a focus outline on an element when it is focused or one of its children is focused
 */
.utility-module_focusable__1fBKr:focus-within {
  --fds-inner-focus-border-color: #1e2b3c;
  --fds-outer-focus-border-color: #fadf4b;
  --fds-focus-border-width: 3px;

  outline: var(--fds-focus-border-width) solid var(--fds-outer-focus-border-color);
  outline-offset: var(--fds-focus-border-width);
  box-shadow: 0 0 0 var(--fds-focus-border-width) var(--fds-inner-focus-border-color);
}
`);var Ao={helpTextButton:"HelpText-module_helpTextButton__Ir4Uk utility-module_focusable__1fBKr",helpTextIconFilled:"HelpText-module_helpTextIconFilled__SjZ8e",helpTextIcon:"HelpText-module_helpTextIcon__ex2WU",helpTextContent:"HelpText-module_helpTextContent__EDHac",small:"HelpText-module_small__Y44D4",xsmall:"HelpText-module_xsmall__peaFV"};ze(`/**
 * Visually hide an element, but leave it available for screen readers
 */.utility-module_visuallyHidden__R-C67 {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}/**
 * Apply a focus outline on an element when it is focused or one of its children is focused
 */.utility-module_focusable__1fBKr:focus-within {
  --fds-inner-focus-border-color: #1e2b3c;
  --fds-outer-focus-border-color: #fadf4b;
  --fds-focus-border-width: 3px;

  outline: var(--fds-focus-border-width) solid var(--fds-outer-focus-border-color);
  outline-offset: var(--fds-focus-border-width);
  box-shadow: 0 0 0 var(--fds-focus-border-width) var(--fds-inner-focus-border-color);
}

.HelpText-module_helpTextButton__Ir4Uk {
  background-color: transparent;
  border-radius: 50px;
  padding: 0;
  cursor: pointer;
  display: flex;
  border: none;
}

@media print {
  .HelpText-module_helpTextButton__Ir4Uk {
    display: none;
  }
}

.HelpText-module_helpTextIconFilled__SjZ8e {
  display: none;
}

.HelpText-module_helpTextIcon__ex2WU {
  color: var(--colors-blue-700);
  width: var(--help_text-icon-width);
  height: var(--help_text-icon-height);
}

.HelpText-module_helpTextButton__Ir4Uk:where(:hover, :focus, [data-state^='open']) > .HelpText-module_helpTextIcon__ex2WU {
  display: none;
}

.HelpText-module_helpTextButton__Ir4Uk:where(:hover, :focus, [data-state^='open']) > .HelpText-module_helpTextIconFilled__SjZ8e {
  display: inline-block;
}

.HelpText-module_helpTextContent__EDHac {
  font-size: var(--font_size-300);
  line-height: var(--typography-default-line-height);
  width: fit-content;
  max-width: 700px;
}

.HelpText-module_helpTextIcon__ex2WU.HelpText-module_small__Y44D4 {
  --help_text-icon-width: 24px;
  --help_text-icon-height: 24px;
}

.HelpText-module_helpTextIcon__ex2WU.HelpText-module_xsmall__peaFV {
  --help_text-icon-width: 18px;
  --help_text-icon-height: 18px;
}
`);const Tm=e=>{var{className:t,children:n,title:r,placement:o="right",onClick:a,size:s="small"}=e,u=ft(e,["className","children","title","placement","onClick","size"]);const[d,f]=E.useState(!1);return U.createElement(m1,{variant:"info",placement:o,open:d,onOpenChange:f,className:Ao.helpTextContent,role:"tooltip",trigger:U.createElement("button",Object.assign({},u,{className:qe(Ao.helpTextButton,t),onClick:p=>{f(m=>!m),a?.(p)}}),U.createElement(OL,{className:qe(Ao.helpTextIcon,Ao.helpTextIconFilled,Ao[s],t),"data-state":d?"open":"closed","aria-hidden":!0}),U.createElement(PL,{className:qe(Ao.helpTextIcon,Ao[s],t),"data-state":d?"open":"closed","aria-hidden":!0}),U.createElement("span",{className:_1},r))},n)};Tm.displayName="HelpText";var _n={template:"CheckboxRadioTemplate-module_template__CbnTf",xsmall:"CheckboxRadioTemplate-module_xsmall__JkKoU",small:"CheckboxRadioTemplate-module_small__7fCnT",hiddenLabel:"CheckboxRadioTemplate-module_hiddenLabel__iHKhU",disabled:"CheckboxRadioTemplate-module_disabled__AUMha",clickable:"CheckboxRadioTemplate-module_clickable__iw4S2",inputWrapper:"CheckboxRadioTemplate-module_inputWrapper__K4Urn",input:"CheckboxRadioTemplate-module_input__O2CzZ",visibleBox:"CheckboxRadioTemplate-module_visibleBox__mj4RB",labelAndDescription:"CheckboxRadioTemplate-module_labelAndDescription__NcntT",label:"CheckboxRadioTemplate-module_label__hsc7R",labelAndHelpText:"CheckboxRadioTemplate-module_labelAndHelpText__JIDAJ",description:"CheckboxRadioTemplate-module_description__FX9dz"};ze(`.CheckboxRadioTemplate-module_template__CbnTf {
  --click-cursor: pointer;
  --description-color: var(--component-field_description-color-text-default);
  --label-color: var(--component-checkbox-color-text-default);
  --opacity: 1;

  border-radius: var(--input_box-border_radius);
  display: inline-flex;
  flex-direction: row;
  font-size: var(--font_size);
  gap: var(--gap);
  line-height: var(--typography-default-line-height);
  margin: -4px;
  opacity: var(--opacity);
  padding: 4px;
}

.CheckboxRadioTemplate-module_template__CbnTf.CheckboxRadioTemplate-module_xsmall__JkKoU {
  --description-margin_top: var(--component-field_description-space-top-xsmall);
  --font_size: var(--component-checkbox-font_size-xs);
  --gap: var(--component-checkbox-space-gap-xsmall);
}

.CheckboxRadioTemplate-module_template__CbnTf.CheckboxRadioTemplate-module_small__7fCnT {
  --description-margin_top: var(--component-field_description-space-top-small);
  --font_size: var(--component-checkbox-font_size-sm);
  --gap: var(--component-checkbox-space-gap-small);
}

.CheckboxRadioTemplate-module_template__CbnTf.CheckboxRadioTemplate-module_hiddenLabel__iHKhU {
  --gap: 0;
}

.CheckboxRadioTemplate-module_template__CbnTf:not(.CheckboxRadioTemplate-module_disabled__AUMha):hover {
  --label-color: var(--component-checkbox-color-text-hover);
}

.CheckboxRadioTemplate-module_template__CbnTf.CheckboxRadioTemplate-module_disabled__AUMha {
  --click-cursor: auto;
  --opacity: var(--opacity-disabled);
}

.CheckboxRadioTemplate-module_clickable__iw4S2 {
  cursor: var(--click-cursor);
}

.CheckboxRadioTemplate-module_inputWrapper__K4Urn {
  display: inline-block;
  height: var(--input_box-size);
  position: relative;
}

.CheckboxRadioTemplate-module_input__O2CzZ {
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;
}

.CheckboxRadioTemplate-module_visibleBox__mj4RB {
  display: inline-block;
  flex: 0 0 var(--input_box-size);
  height: var(--input_box-size);
  position: relative;
  width: var(--input_box-size);
}

.CheckboxRadioTemplate-module_labelAndDescription__NcntT {
  display: inline-flex;
  flex-direction: column;
  gap: var(--description-margin_top);

  /* Center-align input box with the first line in the label */
  margin-top: calc((var(--input_box-size) - (var(--typography-default-line-height) * var(--font_size))) / 2);
}

.CheckboxRadioTemplate-module_label__hsc7R {
  color: var(--label-color);
}

.CheckboxRadioTemplate-module_labelAndHelpText__JIDAJ {
  display: inline-flex;
  flex-direction: row;
  gap: var(--gap);
  align-items: center;
}

.CheckboxRadioTemplate-module_description__FX9dz {
  color: var(--description-color);
}
`);const $T=({checked:e,children:t,className:n,description:r,disabled:o,helpText:a,hideInput:s,hideLabel:u,inputId:d,label:f,name:p,onChange:m,presentation:_,size:b="small",type:y,value:w})=>{const C=E.useId(),g=d??"input-"+C,x=f?`${g}-label`:void 0,k=r?`${g}-description`:void 0,P=f&&!u,T=!_||typeof f!="object"&&typeof r!="object";return U.createElement(Ry,{className:qe(_n.template,_n[b],!P&&_n.hiddenLabel,o?_n.disabled:Lm,n),htmlFor:g,isLabel:T},!s&&U.createElement(Ry,{className:_n.inputWrapper,htmlFor:g,isLabel:!T},U.createElement("input",{"aria-describedby":k,"aria-labelledby":f?x:void 0,checked:e!=null&&e,className:_n.input,disabled:o,id:g,name:p,onChange:o?void 0:m,role:_?"presentation":void 0,type:y,value:w}),U.createElement("span",{className:_n.visibleBox},t)),(f||r)&&U.createElement("span",{className:_n.labelAndDescription},U.createElement("span",{className:_n.labelAndHelpText},f&&U.createElement("span",{className:_n.label,id:x,style:{display:P?"inline":"none"}},f),a&&U.createElement(Tm,{size:b,title:typeof f=="string"?`Help text for ${f}`:""},a)),r&&U.createElement("span",{className:_n.description,id:k},r)))},Ry=({children:e,className:t,htmlFor:n,isLabel:r})=>r?U.createElement("label",{className:t+" "+_n.clickable,htmlFor:n},e):U.createElement("span",{className:t},e);var WT="Checkbox-module_checkbox__lSeQj",HT="Checkbox-module_compact__Cl41-",VT="Checkbox-module_error__E-bmD",ZT="Checkbox-module_checked__3yAq6",qT="Checkbox-module_disabled__x7-eg",KT="Checkbox-module_readOnly__FamUn",QT="Checkbox-module_visibleBox__G7q8H",GT="Checkbox-module_checkmark__ES9N8";ze(`.Checkbox-module_checkbox__lSeQj {
  /* Internal variables */
  --checkbox-background_color: var(--component-checkbox-color-background-default);
  --checkbox-border_color: var(--component-checkbox-color-border-default);
  --checkbox-border_radius: var(--interactive_components-border_radius-normal);
  --checkbox-border_width: var(--component-checkbox-border_width-small);
  --checkbox-checkmark-display: none;
  --checkbox-height: var(--component-checkbox-size-height-small);
  --checkbox-width: var(--component-checkbox-size-width-small);

  /* Variables used by CheckboxRadioTemplate */
  --input_box-size: var(--checkbox-height);
  --input_box-border_radius: var(--checkbox-border_radius);
}

.Checkbox-module_checkbox__lSeQj.Checkbox-module_compact__Cl41- {
  --checkbox-border_width: var(--component-checkbox-border_width-xsmall);
  --checkbox-height: var(--component-checkbox-size-height-xsmall);
  --checkbox-width: var(--component-checkbox-size-width-xsmall);
}

.Checkbox-module_checkbox__lSeQj.Checkbox-module_error__E-bmD {
  --checkbox-background_color: var(--component-checkbox-color-background-error);
  --checkbox-border_color: var(--component-checkbox-color-border-error);
}

.Checkbox-module_checkbox__lSeQj.Checkbox-module_checked__3yAq6 {
  --checkbox-checkmark-display: inline-block;
  --checkbox-background_color: var(--component-checkbox-color-background-checked);
  --checkbox-border_color: var(--component-checkbox-color-border-checked);
}

.Checkbox-module_checkbox__lSeQj:not(.Checkbox-module_disabled__x7-eg, .Checkbox-module_checked__3yAq6):hover {
  --checkbox-background_color: var(--component-checkbox-color-background-hover);
}

.Checkbox-module_checkbox__lSeQj:not(.Checkbox-module_disabled__x7-eg, .Checkbox-module_error__E-bmD, .Checkbox-module_checked__3yAq6):hover {
  --checkbox-border_color: var(--component-checkbox-color-border-hover);
}

.Checkbox-module_checkbox__lSeQj.Checkbox-module_readOnly__FamUn {
  --cursor: auto;
}

.Checkbox-module_visibleBox__G7q8H {
  background-color: var(--checkbox-background_color);
  border-color: var(--checkbox-border_color);
  border-radius: var(--checkbox-border_radius);
  border-style: solid;
  border-width: var(--checkbox-border_width);
  box-sizing: border-box;
  display: inline-block;
  height: var(--checkbox-height);
  width: var(--checkbox-width);
}

.Checkbox-module_checkmark__ES9N8 {
  background-color: white;
  clip-path: polygon(47.11% 56.51%, 30.37% 38.94%, 21.5% 48.09%, 47.11% 74.54%, 81.5% 39.16%, 72.63% 30%);
  display: var(--checkbox-checkmark-display);
  height: 100%;
  width: 100%;
}
`);const $t=({checkboxId:e,checked:t,compact:n,description:r,disabled:o,error:a,helpText:s,hideLabel:u,label:d,name:f,onChange:p,presentation:m,readOnly:_})=>U.createElement($T,{checked:t,className:qe(WT,t&&ZT,a&&VT,o&&qT,n&&HT,_&&KT),description:r,disabled:o,helpText:s,hideInput:_,hideLabel:u,inputId:e,label:d,name:f,onChange:p,presentation:m,size:n?"xsmall":"small",type:"checkbox"},U.createElement("span",{className:QT},U.createElement("span",{className:GT})));$t.displayName="Checkbox";const JT=(e,t)=>{if(e.length!==1)throw new Error("Char must be a single character.");const n=[];for(let r=0;r<t.length;r++)t[r]===e&&n.push(r);return n},Ay=(e,t)=>{const n=e.toLowerCase(),r=t.toLowerCase(),o=new Set;for(let a=0;a<e.length;a++){const s=n[a];for(const u of JT(s,r))if(!o.has(u)){o.add(u);break}}return o.size},zy=(e,t)=>{const n=e.toLowerCase(),r=t.toLowerCase();let o=0;for(let a=0;a<r.length;a++)if(r[a]===n[o]&&(o++,o===n.length))return!0;return!1},YT=e=>(t,n)=>{const r=(o=>(a,s)=>{const u=zy(o,a),d=zy(o,s);if(!u&&!d)return 0;if(u&&!d)return-1;if(!u&&d)return 1;let f=0;for(let p=0;p<o.length;p++){const m=a.substring(f).indexOf(o[p]),_=s.substring(f).indexOf(o[p]);if(m<_)return-1;if(m>_)return 1;f+=m+1}return 0})(e)(t,n);return r!==0?r:(o=>(a,s)=>{const u=Ay(o,a);return Ay(o,s)-u})(e)(t,n)},XT=e=>e.format!==void 0,eR=e=>e.format===void 0,g1=(e,t)=>{const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const o of n)if(e[o]!==t[o])return!1;return!0};var vf={checkboxGroup:"CheckboxGroup-module_checkboxGroup__LIGFC",compact:"CheckboxGroup-module_compact__IPuN8",vertical:"CheckboxGroup-module_vertical__R-l07",horizontal:"CheckboxGroup-module_horizontal__myCqF"};ze(`.CheckboxGroup-module_checkboxGroup__LIGFC {
  --gap-x: var(--component-checkbox-group-space-gap-x-small);
  --gap-y: var(--component-checkbox-group-space-gap-y-small);

  column-gap: var(--gap-x);
  display: flex;
  flex-wrap: wrap;
  row-gap: var(--gap-y);
}

.CheckboxGroup-module_checkboxGroup__LIGFC.CheckboxGroup-module_compact__IPuN8 {
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);
}

.CheckboxGroup-module_checkboxGroup__LIGFC.CheckboxGroup-module_vertical__R-l07 {
  flex-direction: column;
}

.CheckboxGroup-module_checkboxGroup__LIGFC.CheckboxGroup-module_horizontal__myCqF {
  flex-direction: row;
}
`);const tR=(e,t)=>{switch(t.type){case"check":return e.concat([t.name]);case"uncheck":return e.filter(n=>n!==t.name);case"reset":return t.state}},Ny=e=>e.filter(({checked:t})=>t).map(({name:t})=>t),Xl=({compact:e,description:t,disabled:n,error:r,helpText:o,items:a,legend:s,onChange:u,presentation:d,variant:f="vertical",fieldSetProps:p})=>{if(!Hw(a.map(w=>w.name)))throw Error("Each name in the checkbox group must be unique.");const[m,_]=E.useReducer(tR,Ny(a)),b=Vu([...a]);Os(()=>{(a.length!==b?.length||a.some((w,C)=>!g1(w,b[C])))&&_({type:"reset",state:Ny(a)})});const y=Vu(m);return Os(()=>{u&&!n&&!Ww(y,m)&&u(m)},[m,u,n]),U.createElement(Zw,Object.assign({contentClassName:qe(vf.checkboxGroup,vf[f],e&&vf.compact),description:t,disabled:n,error:r,helpText:o,legend:s,size:e?"xsmall":"small"},p),a.map(w=>U.createElement($t,{checkboxId:w.checkboxId,checked:m.includes(w.name),compact:e,description:w.description,disabled:n||w.disabled,error:!!r,helpText:w.helpText,key:w.name,hideLabel:w.hideLabel,label:w.label,name:w.name,onChange:C=>{_({type:C.target.checked?"check":"uncheck",name:w.name})},presentation:d})))};Xl.displayName="CheckboxGroup";ze(`.RadioButton-module_radio__-lcP- {
  /* Internal variables */
  --radio-background_color: var(--component-checkbox-color-background-default);
  --radio-border_color: var(--component-checkbox-color-border-default);
  --radio-border_width: var(--component-checkbox-border_width-small);
  --radio-checkmark-color: var(--colors-blue-700);
  --radio-checkmark-display: none;
  --radio-size: var(--component-checkbox-size-width-small);

  /* Variables used by CheckboxRadioTemplate */
  --input_box-border_radius: calc(var(--radio-size) / 2);
  --input_box-size: var(--radio-size);
}

.RadioButton-module_radio__-lcP-.RadioButton-module_small__bDKxm {
  --radio-size: var(--component-checkbox-size-width-small);
}

.RadioButton-module_radio__-lcP-.RadioButton-module_xsmall__i7xp0 {
  --radio-size: var(--component-checkbox-size-width-xsmall);
}

.RadioButton-module_radio__-lcP-.RadioButton-module_error__WeFrR {
  --radio-background_color: var(--component-checkbox-color-background-error);
  --radio-border_color: var(--component-checkbox-color-border-error);
}

.RadioButton-module_radio__-lcP-.RadioButton-module_checked__Uc9Re {
  --radio-checkmark-display: inline-block;
}

.RadioButton-module_radio__-lcP-.RadioButton-module_checked__Uc9Re:not(.RadioButton-module_error__WeFrR) {
  --radio-border_color: var(--component-checkbox-color-border-checked);
}

.RadioButton-module_radio__-lcP-:not(.RadioButton-module_disabled__thDlK, .RadioButton-module_checked__Uc9Re):hover {
  --radio-background_color: var(--component-checkbox-color-background-hover);
}

.RadioButton-module_radio__-lcP-:not(.RadioButton-module_disabled__thDlK, .RadioButton-module_error__WeFrR, .RadioButton-module_checked__Uc9Re):hover {
  --radio-border_color: var(--component-checkbox-color-border-hover);
}

.RadioButton-module_visibleButton__QmmNn {
  background-color: var(--radio-background_color);
  border-radius: 50%;
  outline-color: var(--radio-border_color);
  outline-style: solid;
  outline-offset: calc(-1 * var(--radio-border_width));
  outline-width: var(--radio-border_width);
  box-sizing: border-box;
  display: inline-block;
  height: var(--radio-size);
  width: var(--radio-size);
}

.RadioButton-module_checkmark__fHNs0 {
  box-shadow: 0 0 0 calc(2 * var(--radio-border_width)) var(--radio-background_color) inset, 0 0 0 var(--radio-size) var(--radio-checkmark-color) inset;
  border-radius: 50%;
  display: var(--radio-checkmark-display);
  height: 100%;
  width: 100%;
}
`);ze(`.RadioGroup-module_radioGroup__pO2pz {
  column-gap: var(--gap-x);
  display: flex;
  flex-wrap: wrap;
  row-gap: var(--gap-y);
}

.RadioGroup-module_radioGroup__pO2pz.RadioGroup-module_xsmall__wwC4P {
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);
}

.RadioGroup-module_radioGroup__pO2pz.RadioGroup-module_small__j8rVm {
  --gap-x: var(--component-checkbox-group-space-gap-x-small);
  --gap-y: var(--component-checkbox-group-space-gap-y-small);
}

.RadioGroup-module_radioGroup__pO2pz.RadioGroup-module_vertical__VIcHp {
  flex-direction: column;
}

.RadioGroup-module_radioGroup__pO2pz.RadioGroup-module_horizontal__vsHUV {
  flex-direction: row;
}
`);const nR=()=>U.createElement("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},U.createElement("path",{d:"M8 0C3.875 0 0.5 3.375 0.5 7.5C0.5 11.625 3.875 15 8 15C12.125 15 15.5 11.625 15.5 7.5C15.5 3.375 12.125 0 8 0ZM8.875 11.25H7.5V9.9375H8.875V11.25ZM8.6875 9H7.6875L7.375 4.125H9L8.6875 9Z",fill:"white"})),rR=()=>U.createElement("svg",{width:"15",height:"15",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},U.createElement("path",{d:"M34 31.5758L23.9289 21.3939C25.5533 19.2929 26.3655 16.8687 26.3655 14.1212C26.3655 7.49495 20.8426 2 14.1827 2C7.52284 2 2 7.49495 2 14.1212C2 20.7475 7.52284 26.2424 14.1827 26.2424C16.9442 26.2424 19.5431 25.2727 21.4924 23.8182L31.7259 34L34 31.5758ZM5.24873 14.1212C5.24873 9.27273 9.30965 5.23232 14.1827 5.23232C19.0558 5.23232 23.1168 9.27273 23.1168 14.1212C23.1168 18.9697 19.0558 23.0101 14.1827 23.0101C9.30965 23.0101 5.24873 18.9697 5.24873 14.1212Z",fill:"black"}));var Iy="Icon-module_icon__3YqoF",oR="Icon-module_disabled__e4-Yg";ze(`.Icon-module_icon__3YqoF {
  align-items: center;
  background: var(--icon-background);
  border-bottom-left-radius: var(--border-radius);
  border-top-left-radius: var(--border-radius);
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: var(--icon-width);
}

.Icon-module_icon__3YqoF.Icon-module_disabled__e4-Yg {
  opacity: 0.6;
}
`);const iR=({variant:e,disabled:t=!1})=>{switch(e){case"error":return U.createElement("span",{className:Iy,"data-testid":"input-icon-error"},U.createElement(nR,null));case"search":return U.createElement("span",{className:qe(Iy,t&&oR),"data-testid":"input-icon-search"},U.createElement(rR,null));default:return null}};var Xn={inputAndLabel:"InputWrapper-module_inputAndLabel__t1-Vi",inputWrapper:"InputWrapper-module_inputWrapper__I-Tcb",default:"InputWrapper-module_default__SS3Cg",error:"InputWrapper-module_error__FhSCJ",disabled:"InputWrapper-module_disabled__8mIxc",readonlyInfo:"InputWrapper-module_readonlyInfo__mQyMN",readonlyConfirm:"InputWrapper-module_readonlyConfirm__WrHUu",search:"InputWrapper-module_search__SwwFJ",withPadding:"InputWrapper-module_withPadding__6NkNf",field:"InputWrapper-module_field__UA-RS",withIcon:"InputWrapper-module_withIcon__x0I81",label:"InputWrapper-module_label__x0-XH",characterLimitLabel:"InputWrapper-module_characterLimitLabel__x9Z9p",characterLimitExceeded:"InputWrapper-module_characterLimitExceeded__WKRxJ"};ze(`.InputWrapper-module_inputAndLabel__t1-Vi {
  align-items: stretch;
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.InputWrapper-module_inputWrapper__I-Tcb {
  --background: var(--component-input-color-background-default);
  --border-radius: var(--interactive_components-border_radius-normal);
  --icon-background: transparent;
  --icon-width: 22px;
  --outline-color: var(--component-input-color-border-default);
  --outline-width: 1px;
  --paddingX: 0;
  --paddingY: 0;

  align-items: stretch;
  background: var(--background);
  border-radius: var(--border-radius);
  box-sizing: border-box;
  display: inline-flex;
  min-height: var(--component-input-size-min_height-default);
  position: relative;
}

.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_default__SS3Cg:hover {
  --outline-color: var(--component-input-color-border-hover);
}

.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_error__FhSCJ {
  --icon-background: var(--component-input-error-color-border-default);
  --outline-color: var(--component-input-error-color-border-default);
}

.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_disabled__8mIxc {
  --background: repeating-linear-gradient(135deg, #efefef, #efefef 2px, #fff 3px, #fff 5px);

  opacity: var(--opacity-disabled);
}

.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_readonlyInfo__mQyMN {
  --background: var(--component-input-read_only_info-color-background-default);
  --outline-color: var(--component-input-read_only_info-color-border-default);
}

.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_readonlyConfirm__WrHUu {
  --background: var(--component-input-read_only_confirm-color-background-default);
  --outline-color: var(--component-input-read_only_confirm-color-border-default);
}

.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_search__SwwFJ {
  flex-direction: row-reverse;
}

.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_withPadding__6NkNf {
  /* Subtract size of border on padding-y, because border is on outer element. Without this, height of entire component will be too big */
  --paddingY: calc(var(--component-input-space-padding-y) - var(--component-input-border_width-default));
  --paddingX: var(--component-input-space-padding-x);
}

.InputWrapper-module_field__UA-RS {
  background: var(--background);
  border-radius: var(--border-radius);
  border-width: 0;
  box-sizing: border-box;
  font-family: inherit;
  font-size: var(--component-input-font_size-sm);
  outline: var(--outline-width) solid var(--outline-color);
  padding: var(--paddingY) var(--paddingX);
  width: 100%;
}

.InputWrapper-module_inputAndLabel__t1-Vi.InputWrapper-module_withIcon__x0I81 .InputWrapper-module_field__UA-RS {
  padding-left: calc(var(--paddingX) + var(--icon-width));
}

.InputWrapper-module_inputWrapper__I-Tcb:not(.InputWrapper-module_disabled__8mIxc) .InputWrapper-module_field__UA-RS:hover {
  --outline-width: 2px;
}

.InputWrapper-module_label__x0-XH {
  font-weight: var(--component-label-font_weight-default);
  padding: 0;
}

.InputWrapper-module_characterLimitLabel__x9Z9p {
  margin-top: 4px;
}

.InputWrapper-module_characterLimitExceeded__WKRxJ {
  color: var(--fds-semantic-text-danger-default);
}
`);const Rm=({className:e="",disabled:t=!1,inputId:n,inputRenderer:r,isSearch:o=!1,isValid:a=!0,label:s,noFocusEffect:u,noPadding:d,readOnly:f=!1,characterLimit:p,value:m,ariaDescribedBy:_})=>{const b=E.useId(),y=n??b,w=E.useId(),C=p?w:void 0,g=m?m.toString():"",{variant:x,iconVariant:k}=(({readOnly:A=!1,disabled:I=!1,isValid:F=!0,isSearch:W=!1}={})=>A===!0||A==="readonlyInfo"?{variant:"readonlyInfo",iconVariant:"none"}:A==="readonlyConfirm"?{variant:"readonlyConfirm",iconVariant:"none"}:F===!1?{variant:"error",iconVariant:"error"}:{variant:I?"disabled":"default",iconVariant:W?"search":"none"})({disabled:t,isSearch:o,isValid:p?g.length<p.maxCount&&a:a,readOnly:f}),P=k!=="none";return U.createElement("div",null,U.createElement("span",{className:qe(Xn.inputAndLabel,P&&Xn.withIcon)},s&&U.createElement("label",{className:Xn.label,htmlFor:y},s),U.createElement("span",{"data-testid":"InputWrapper",className:qe(Xn.inputWrapper,Xn[x],{[Xn.search]:o,[Xn.withPadding]:!d})},U.createElement(iR,{variant:k,disabled:t}),r({className:qe(Xn.field,!u&&Lm,e),hasIcon:P,inputId:y,variant:x,describedBy:(T=[_,C],T.filter(Boolean).join(" ")||void 0)}))),p&&C&&U.createElement(aR,Object.assign({},p,{value:g,ariaDescribedById:C})));var T},aR=({label:e,srLabel:t,maxCount:n,value:r,ariaDescribedById:o})=>{const a=n-r.length,s=r.length>n;return U.createElement(U.Fragment,null,U.createElement("span",{className:_1,id:o},t),U.createElement("div",{className:[Xn.characterLimitLabel,s?Xn.characterLimitExceeded:""].join(" "),"aria-live":s?"polite":"off"},e(a)))};var sR="MultiSelectItem-module_multiSelectItem__GMBKc",lR="MultiSelectItem-module_deleteButton__1imxW utility-module_focusable__1fBKr",uR="MultiSelectItem-module_deleteButtonCross__SI-Vd";ze(`/**
 * Visually hide an element, but leave it available for screen readers
 */.utility-module_visuallyHidden__R-C67 {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}/**
 * Apply a focus outline on an element when it is focused or one of its children is focused
 */.utility-module_focusable__1fBKr:focus-within {
  --fds-inner-focus-border-color: #1e2b3c;
  --fds-outer-focus-border-color: #fadf4b;
  --fds-focus-border-width: 3px;

  outline: var(--fds-focus-border-width) solid var(--fds-outer-focus-border-color);
  outline-offset: var(--fds-focus-border-width);
  box-shadow: 0 0 0 var(--fds-focus-border-width) var(--fds-inner-focus-border-color);
}

.MultiSelectItem-module_multiSelectItem__GMBKc {
  --border-radius: calc(var(--multiselect_item-height) / 2);

  align-items: center;
  background-color: var(--multiselect_item-background_color);
  border-radius: var(--border-radius);
  color: var(--multiselect_item-text_color);
  display: inline-flex;
  font-size: var(--font_size);
  gap: var(--multiselect_item-space_between);
  height: var(--multiselect_item-height);
  padding-left: var(--multiselect_item-space_left);
}

.MultiSelectItem-module_deleteButton__1imxW {
  background-color: transparent;
  border-bottom-right-radius: inherit;
  border-top-right-radius: inherit;
  border: 0;
  cursor: var(--interactive_element-cursor);
  height: 100%;
  padding: calc((var(--multiselect_item-height) - var(--delete_cross-size)) / 2);
  width: var(--multiselect_item-height);
}

.MultiSelectItem-module_deleteButton__1imxW:focus {
  background-color: var(--delete_cross_box-color-hover);
}

.MultiSelectItem-module_deleteButton__1imxW:not(:disabled):hover {
  background-color: var(--delete_cross_box-color-hover);
}

.MultiSelectItem-module_deleteButtonCross__SI-Vd {
  background-color: var(--multiselect_item_delete_cross-color);
  clip-path: var(--delete_cross-clip_path);
  display: inline-block;
  height: var(--delete_cross-size);
  width: var(--delete_cross-size);
}
`);const v1=({deleteButtonLabel:e,disabled:t,onDeleteButtonClick:n,label:r})=>U.createElement("span",{className:sR},U.createElement("span",null,r),U.createElement("button",{"aria-label":e,className:lR,disabled:t,onClick:n,type:"button"},U.createElement("span",{className:uR})));v1.displayName="MultiSelectItem";var en={select:"Select-module_select__cjdcr",disabled:"Select-module_disabled__8YgjS",fieldButton:"Select-module_fieldButton__uKwX8",field:"Select-module_field__h-wBy",inputArea:"Select-module_inputArea__jBTNl",multiple:"Select-module_multiple__cwGEC",single:"Select-module_single__i2zPs",hasIcon:"Select-module_hasIcon__Jgj-c",textInput:"Select-module_textInput__QOpiN",arrowWrapper:"Select-module_arrowWrapper__meDQz",arrow:"Select-module_arrow__w35wW",deleteButton:"Select-module_deleteButton__hZfr7",deleteButtonCross:"Select-module_deleteButtonCross__OKMwb",expanded:"Select-module_expanded__QPHZ6"};ze(`.Select-module_select__cjdcr {
  --delete_cross_box-border_radius: var(--interactive_components-border_radius-normal);
  --delete_cross_box-color-hover: var(--colors-red-500);
  --delete_cross_box-size: 25px;
  --delete_cross-clip_path: polygon(
    14.29% 0%,
    50% 35.71%,
    85.71% 0%,
    100% 14.29%,
    64.29% 50%,
    100% 85.71%,
    85.71% 100%,
    50% 64.29%,
    14.29% 100%,
    0% 85.71%,
    35.71% 50%,
    0% 14.29%
  );
  --delete_cross-color: var(--colors-blue-900);
  --delete_cross-color-active: var(--colors-blue-700);
  --delete_cross-color-disabled: #022f5180;
  --delete_cross-color-hover: white;
  --delete_cross-size: 12px;
  --arrow-border_left: 1px solid #022f5180;
  --arrow-color: var(--colors-blue-900);
  --arrow-height_to_width_fraction: calc(8 / 14);
  --arrow-horizontal_padding: 6px;
  --arrow-size: 14px;
  --arrow_wrapper-margin: 4px;
  --field-height-inside: calc(var(--field-height) - var(--component-input-border_width-default) * 2);
  --field-height: var(--component-input-size-min_height-default);
  --font_size: 1rem;
  --interactive_element-cursor: pointer;
  --line-height: 1.5;
  --multiselect_item-background_color: var(--colors-blue-900);
  --multiselect_item-height: 24px;
  --multiselect_item-space_between: 6px;
  --multiselect_item-space_left: 16px;
  --multiselect_item-text_color: white;
  --multiselect_item_delete_cross-color: white;
  --multiselect_items-gap: 4px;
  --multiselect_items-padding: calc((var(--field-height-inside) - var(--multiselect_item-height)) / 2);
  --singleselect_field-padding_left: 12px;
  --focus_visible-outline: var(--semantic-tab_focus-outline-width) auto var(--semantic-tab_focus-outline-color);

  font-size: var(--font_size);
  line-height: var(--line-height);
}

.Select-module_select__cjdcr.Select-module_disabled__8YgjS {
  --interactive_element-cursor: auto;

  opacity: var(--opacity-disabled);
}

.Select-module_fieldButton__uKwX8 {
  background: transparent;
  border: 0;
  cursor: var(--interactive_element-cursor);
  height: 100%;
  margin: 0;
  padding: 0;
}

.Select-module_field__h-wBy {
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  font-family: inherit;
  font-size: var(--font_size);
  min-height: var(--field-height);
  width: 100%;
}

.Select-module_inputArea__jBTNl {
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  position: relative;
}

.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_inputArea__jBTNl {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  gap: var(--multiselect_items-gap);
  padding: var(--multiselect_items-padding);
}

.Select-module_select__cjdcr.Select-module_single__i2zPs .Select-module_field__h-wBy.Select-module_hasIcon__Jgj-c .Select-module_inputArea__jBTNl {
  padding-left: var(--icon-width);
}

.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_field__h-wBy.Select-module_hasIcon__Jgj-c .Select-module_inputArea__jBTNl {
  padding-left: calc(var(--multiselect_items-padding) + var(--icon-width));
}

.Select-module_textInput__QOpiN {
  background: transparent;
  border: 0;
  box-sizing: border-box;
  font-family: inherit;
  font-size: var(--font_size);
  line-height: var(--line-height);
  min-height: var(--field-height-inside);
  outline: none;
}

.Select-module_select__cjdcr.Select-module_single__i2zPs .Select-module_textInput__QOpiN {
  cursor: var(--interactive_element-cursor);
  padding: 0 0 0 var(--singleselect_field-padding_left);
  position: absolute;
  width: 100%;
}

.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_textInput__QOpiN {
  flex: 1;
  min-height: 0;
  min-width: 3rem;
  padding: 0;
}

.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_fieldButton__uKwX8:focus-visible {
  outline: var(--focus_visible-outline);
}

.Select-module_arrowWrapper__meDQz {
  --arrow-height: calc(var(--arrow-size) * var(--arrow-height_to_width_fraction));
  --arrow-vertical_padding: calc((var(--field-height-inside) - var(--arrow-height)) / 2 - var(--arrow_wrapper-margin));

  align-items: center;
  border-left: var(--arrow-border_left);
  box-sizing: border-box;
  display: flex;
  height: calc(100% - var(--arrow-vertical_padding));
  margin-bottom: var(--arrow_wrapper-margin);
  margin-left: var(--arrow_wrapper-margin);
  margin-top: var(--arrow_wrapper-margin);
  padding: var(--arrow-vertical_padding) var(--arrow-horizontal_padding);
}

.Select-module_arrow__w35wW {
  background-color: var(--arrow-color);
  clip-path: polygon(11.72% 9.93%, 50% 67.28%, 88.28% 9.93%, 97.43% 29.13%, 50% 96.79%, 2.57% 29.13%);
  display: inline-block;
  height: var(--arrow-height);
  width: var(--arrow-size);
}

.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7 {
  background: none;
  border-radius: var(--delete_cross_box-border_radius);
  border: none;
  cursor: var(--interactive_element-cursor);
  height: var(--delete_cross_box-size);
  padding: calc((var(--delete_cross_box-size) - var(--delete_cross-size)) / 2);
  width: var(--delete_cross_box-size);
}

.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7:disabled {
  --delete_cross-color: var(--delete_cross-color-disabled);

  cursor: auto;
  background-color: transparent;
}

.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7:hover:not(:disabled) {
  background-color: var(--delete_cross_box-color-hover);

  --delete_cross-color: var(--delete_cross-color-hover);
}

.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButtonCross__OKMwb {
  background-color: var(--delete_cross-color);
  clip-path: var(--delete_cross-clip_path);
  display: inline-block;
  height: var(--delete_cross-size);
  width: var(--delete_cross-size);
}

.Select-module_select__cjdcr.Select-module_expanded__QPHZ6 {
  --delete_cross-color: var(--delete_cross-color-active);
}
`);const cR=(e,t)=>((n,r)=>[...n.entries()].map(([o,a])=>({key:o,keywords:(a?.length?a:[o]).sort(r)})).sort((o,a)=>{const s=Math.min(o.keywords.length,a.keywords.length);for(let u=0;u<s;u++){const d=r(o.keywords[u],a.keywords[u]);if(d!==0)return d}return 0}).map(({key:o})=>o))(new Map(e.map(({label:n,value:r,keywords:o})=>[r,o?[n,...o]:[n]])),YT(t)).map(n=>e.find(r=>r.value===n));var dR="OptionList-module_wrapper__VWxy0",fR="OptionList-module_expanded__zQMFT",hR="OptionList-module_optionList__Ij1Ct",pR="OptionList-module_option__pIUbJ",mR="OptionList-module_selected__mCVJf",_R="OptionList-module_usingKeyboard__vHoYA",gR="OptionList-module_focused__-bi1s";ze(`.OptionList-module_wrapper__VWxy0 {
  --font_size: 1rem;
  --line-height: 1.5;
  --option-background_color-default: transparent;
  --option-background_color-hover: var(--colors-blue-100);
  --option-background_color-selected-hover: var(--colors-blue-500);
  --option-background_color-selected: var(--colors-blue-200);
  --option-border_color: #022f5180;
  --option-border_width: 1px;
  --option-height: 36px;
  --option-padding_horizontal: 12px;
  --option_list-background_color: white;
  --option_list-border: 1px solid #68707c;
  --option_list-border_radius: var(--interactive_components-border_radius-normal);
  --option_list-max_height: calc(var(--option-height) * var(--option_list-number_of_visible_options));
  --option_list-number_of_visible_options: 7;
  --option_list-shadow: 1px 1px 3px #00000040;
  --option_list-z_index: 2;

  background-color: var(--option_list-background_color);
  border-radius: var(--option_list-border_radius);
  border: var(--option_list-border);
  box-shadow: var(--option_list-shadow);
  box-sizing: border-box;
  margin: 0;
  overflow-y: auto;
  padding: 0;
  position: absolute;
  z-index: var(--option_list-z_index);
}

.OptionList-module_wrapper__VWxy0:not(.OptionList-module_expanded__zQMFT) {
  display: none;
}

.OptionList-module_optionList__Ij1Ct {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.OptionList-module_option__pIUbJ {
  background-color: var(--option-background_color-default);
  border-color: var(--option-border_color);
  border-style: solid;
  border-width: var(--option-border_width) 0 0 0;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-size: var(--font_size);
  min-height: var(--option-height);
  overflow-x: hidden;
  padding-left: var(--option-padding_horizontal);
  padding-right: var(--option-padding_horizontal);
  padding-top: calc((var(--option-height) - (var(--font_size) * var(--line-height))) / 2);
  text-align: left;
  text-overflow: ellipsis;
}

.OptionList-module_option__pIUbJ:hover {
  background-color: var(--option-background_color-hover);
}

.OptionList-module_option__pIUbJ.OptionList-module_selected__mCVJf {
  background-color: var(--option-background_color-selected);
}

.OptionList-module_option__pIUbJ.OptionList-module_selected__mCVJf:hover {
  background-color: var(--option-background_color-selected-hover);
}

.OptionList-module_wrapper__VWxy0.OptionList-module_usingKeyboard__vHoYA .OptionList-module_option__pIUbJ.OptionList-module_focused__-bi1s {
  outline: var(--semantic-tab_focus-outline-width) auto var(--semantic-tab_focus-outline-color);
}
`);const y1=({active:e,id:t,multiple:n,onClick:r,option:o,selected:a})=>{var s;return U.createElement("button",{"aria-label":o.label,"aria-selected":a,className:qe(pR,a&&mR,n&&e&&gR),id:t,key:o.value,onClick:()=>r(o.value),onMouseDown:u=>u.preventDefault(),onKeyDown:u=>u.preventDefault(),role:"option",type:"button",value:o.value},(s=o.formattedLabel)!==null&&s!==void 0?s:o.label)};y1.displayName="Option";const b1=({activeValue:e,expanded:t,listboxId:n,multiple:r,onOptionClick:o,optionId:a,options:s,selectedValues:u,setFloating:d,x:f,y:p})=>{const m=E.useId(),[_,b]=E.useState(!1);Hu("click",()=>b(!1)),Hu("keydown",()=>b(!0));const y=w=>e===w;return U.createElement(AT,{id:`fds-select-${m}`},U.createElement("span",{className:qe(dR,t&&fR,_&&_R),ref:d,style:{left:f,top:p}},U.createElement("span",{"aria-expanded":t,className:hR,id:n,role:"listbox"},s.map(w=>{return U.createElement(y1,{active:y(w.value),id:a(w.value),key:w.value,multiple:r,onClick:o,option:w,selected:(C=w.value,r?u.includes(C):y(C))});var C}))))};b1.displayName="OptionList";const Ua={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},np=e=>{var t,n;const{disabled:r,error:o,hideLabel:a,inputId:s,label:u,multiple:d,onBlur:f,onChange:p,onFocus:m,options:_,searchLabel:b,value:y}=e,w=_.map(ae=>ae.value);if(w.length!==new Set(w).size)throw Error("Each value in the option list must be unique.");const C=E.useCallback(ae=>{var me;return(me=_.find(K=>K.value===ae))!==null&&me!==void 0?me:{label:"",value:""}},[_]),[g,x]=E.useState(d&&y!=null?y:[]),[k,P]=E.useState(d?"":(n=(t=C(y))===null||t===void 0?void 0:t.label)!==null&&n!==void 0?n:""),[T,A]=E.useState(_),I=Vu([..._]),F=Vu(y);Os(()=>{var ae,me;let K=!1;(_.length!==I?.length||_.some((ce,de)=>!g1(ce,I[de])))&&(A(_),K=!0),(!d&&y!==F||d&&(typeof F=="string"||!Ww(y,F))||K)&&(d?x(y??[]):(G(y),P((me=(ae=C(y))===null||ae===void 0?void 0:ae.label)!==null&&me!==void 0?me:"")))});const W=_.length,[B,G]=E.useState(d?void 0:y),J=T.findIndex(ae=>ae.value===B),ee=E.useCallback(ae=>P(!d&&ae||""),[P,d]),{x:V,y:le,elements:X,refs:D}=h1({placement:"bottom",whileElementsMounted:r1,middleware:[Kw(),dT({apply:({availableHeight:ae,elements:me,rects:K})=>{Object.assign(me.floating.style,{maxHeight:`min(${ae}px, var(--option_list-max_height))`,width:`${K.reference.width}px`})}})]}),z=X.floating,oe=X.reference,q=function(ae){const[me,K]=E.useState(!1),ce=()=>{var de;const{activeElement:_e}=document;K((de=ae?.contains(_e))!==null&&de!==void 0&&de)};return Hu("focusin",ce,ae),Hu("focusout",ce,ae),me}(oe);Os(()=>{var ae,me;d||q||P((me=(ae=C(B))===null||ae===void 0?void 0:ae.label)!==null&&me!==void 0?me:""),q&&m?m(d?g:B||""):!q&&f&&f(d?g:B||"")},[q]);const[O,N]=E.useState(!1);E.useEffect(()=>{if(z){const ae=z.offsetHeight,me=z.querySelectorAll("button");if(!me.length)return;const K=z.scrollTop,ce=K+ae,de=me[J];if(de){const _e=de.offsetTop,Se=_e+de.offsetHeight;_e>=K&&Se<=ce||(z.scrollTop=_e<K?_e:Se-ae)}}},[J,z]);const M=(ae,me)=>{g?.length||G(me),x(ae),p&&p(ae),ee()},Q=ae=>{var me;d?g.includes(ae)?ne(ae):M([...g,ae],ae):(G(me=ae),ee(C(me).label),N(!1),p&&p(me))},ne=ae=>{M(g.filter(me=>me!==ae),ae)},ue=E.useCallback(()=>{let ae=null;if(B===void 0)ae=T[0];else{const me=J+1;me>=0&&me<W&&(ae=T[me])}ae&&(G(ae.value),ee(ae.label)),N(!0)},[B,J,ee,G,T,W]),he=E.useCallback(()=>{let ae=null;if(B===void 0)ae=T[W-1];else{const me=J-1;me>=0&&me<W&&(ae=T[me])}ae&&(G(ae.value),ee(ae.label)),N(!0)},[B,J,ee,G,T,W]);df(Ua.ArrowDown,()=>O?ue():N(!0),oe),df(Ua.ArrowUp,()=>O?he():N(!0),oe),df(Ua.Enter,()=>{O&&(B?Q(B):N(!1))},oe);const be=ae=>{var me,K;const ce=ae.target.value;if(ce){const de=cR(_,ce);A(de);const _e=(me=T[0])===null||me===void 0?void 0:me.value,Se=(K=de[0])===null||K===void 0?void 0:K.value;de&&_e!=Se&&G(Se),!O&&N(!0)}P(ce)},Je=E.useId(),Ze=s??Je,Le=E.useId();return U.createElement("span",{className:qe(en.select,en[d?"multiple":"single"],O&&en.expanded,r&&en.disabled),"data-testid":"select-root"},U.createElement(Rm,{disabled:r,inputId:Ze,inputRenderer:({className:ae,inputId:me,hasIcon:K})=>U.createElement("span",{className:qe(ae,en.field,K&&en.hasIcon),ref:D.setReference},U.createElement("span",{className:en.inputArea},d&&U.createElement(U.Fragment,null,g.map(C).map(ce=>U.createElement(v1,{deleteButtonLabel:ce.deleteButtonLabel,disabled:r!=null&&r,key:ce.value,label:ce.label,onDeleteButtonClick:()=>ne(ce.value)}))),U.createElement("input",{"aria-activedescendant":B?`${me}-${B}`:void 0,"aria-autocomplete":"list","aria-controls":Le,"aria-expanded":O,"aria-haspopup":"listbox","aria-label":b??u,"aria-owns":Le,autoComplete:"off",className:en.textInput,disabled:r,id:me,onBlur:()=>N(!1),onClick:()=>N(!0),onChange:be,onFocus:()=>N(!0),onKeyDown:ce=>{Object.values(Ua).includes(ce.key)&&ce.preventDefault()},role:"combobox",type:"text",value:k})),d&&U.createElement("button",{"aria-label":e.deleteButtonLabel,className:en.deleteButton+" "+Lm,disabled:!g.length||r,onClick:()=>{M([])},type:"button"},U.createElement("span",{className:en.deleteButtonCross})),U.createElement("button",{"aria-controls":Le,"aria-expanded":O,"aria-haspopup":"listbox","aria-label":u,className:en.fieldButton,disabled:r,onBlur:()=>N(!1),onClick:()=>N(!O),onKeyDown:ce=>{Object.values(Ua).includes(ce.key)&&(ce.preventDefault(),N(!0))},tabIndex:-1,type:"button",value:d?g:B},U.createElement("span",{className:en.arrowWrapper},U.createElement("span",{className:en.arrow})))),isSearch:!1,isValid:!o,label:a?void 0:u,noFocusEffect:d,noPadding:!0,readOnly:!1}),U.createElement(b1,{activeValue:B,expanded:O,listboxId:Le,multiple:!!d,onOptionClick:Q,optionId:ae=>`${Ze}-${ae}`,options:T,selectedValues:g,setFloating:D.setFloating,x:V,y:le}))};np.displayName="Select";var vR="Spinner-module_spinner__GpFZS",yR="Spinner-module_spinnerCircle__DRFwJ",bR="Spinner-module_defaultForeground__Ay0Sq",xR="Spinner-module_interactionForeground__8aY93",wR="Spinner-module_invertedForeground__DF2fs",kR="Spinner-module_defaultBackground__7A7zq",SR="Spinner-module_interactionBackground__jBIwt",PR="Spinner-module_invertedBackground__nQ8Oa";ze(`.Spinner-module_spinner__GpFZS {
  animation: Spinner-module_rotate-animation__PTh4z 2s linear infinite;
}

.Spinner-module_spinnerCircle__DRFwJ {
  animation: Spinner-module_stroke-animation__bulMB 1.5s ease-in-out infinite;
}

.Spinner-module_defaultForeground__Ay0Sq {
  stroke: var(--colors-grey-500);
}

.Spinner-module_interactionForeground__8aY93 {
  stroke: var(--semantic-border-action-default);
}

.Spinner-module_invertedForeground__DF2fs {
  stroke: var(--colors-white);
}

.Spinner-module_defaultBackground__7A7zq,
.Spinner-module_interactionBackground__jBIwt,
.Spinner-module_invertedBackground__nQ8Oa {
  stroke: var(--colors-grey-200);
}

@keyframes Spinner-module_rotate-animation__PTh4z {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes Spinner-module_stroke-animation__bulMB {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -62;
  }

  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
`);const By={xSmall:13,small:20,medium:27,large:40,"1xLarge":44,"2xLarge":56,"3xLarge":79},My={default:{foreground:bR,background:kR},interaction:{foreground:xR,background:SR},inverted:{foreground:wR,background:PR}},CR=e=>{var{title:t,size:n="medium",variant:r="default",className:o=""}=e,a=ft(e,["title","size","variant","className"]);return U.createElement("svg",Object.assign({className:`${vR} ${o}`,style:{width:By[n],height:By[n]},viewBox:"0 0 50 50"},a),U.createElement("title",null,t),U.createElement("circle",{className:My[r].background,cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"}),U.createElement("circle",{className:`${yR} ${My[r].foreground}`,cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"}))};var Dy={textArea:"TextArea-module_textArea__Fp7-I","resize-none":"TextArea-module_resize-none__LLMFm","resize-both":"TextArea-module_resize-both__LTKmK","resize-horizontal":"TextArea-module_resize-horizontal__SIRxw","resize-vertical":"TextArea-module_resize-vertical__oRHAF"};ze(`.TextArea-module_textArea__Fp7-I {
  font-family: inherit;
  font-size: var(--component-textarea-font_size-sm);
}

.TextArea-module_textArea__Fp7-I.TextArea-module_resize-none__LLMFm {
  resize: none;
}

.TextArea-module_textArea__Fp7-I.TextArea-module_resize-both__LTKmK {
  resize: both;
}

.TextArea-module_textArea__Fp7-I.TextArea-module_resize-horizontal__SIRxw {
  resize: horizontal;
}

.TextArea-module_textArea__Fp7-I.TextArea-module_resize-vertical__oRHAF {
  resize: vertical;
}
`);E.forwardRef((e,t)=>{var n,{isValid:r=!0,disabled:o=!1,readOnly:a=!1,resize:s="none",label:u,characterLimit:d,value:f,onChange:p,"aria-describedby":m}=e,_=ft(e,["isValid","disabled","readOnly","resize","label","characterLimit","value","onChange","aria-describedby"]);const[b,y]=E.useState(f?f.toString():""),w=E.useId(),C=(n=_.id)!==null&&n!==void 0?n:w,g=x=>{y(x.target.value),p&&p(x)};return U.createElement(Rm,{value:b,disabled:o,inputId:C,characterLimit:d,ariaDescribedBy:m,inputRenderer:({className:x,inputId:k,describedBy:P})=>U.createElement("textarea",Object.assign({},_,{ref:t,value:f,onChange:g,id:k,"aria-describedby":P,disabled:o,readOnly:!!a,className:[x,Dy.textArea,Dy[`resize-${s}`]].join(" ")})),isValid:r,label:u,readOnly:a})});E.forwardRef((e,t)=>{var{id:n,onChange:r,isValid:o=!0,disabled:a=!1,readOnly:s=!1,required:u=!1,formatting:d,label:f,value:p,characterLimit:m,"aria-describedby":_}=e,b=ft(e,["id","onChange","isValid","disabled","readOnly","required","formatting","label","value","characterLimit","aria-describedby"]);const[y,w]=E.useState(p?p.toString():""),C=(x,k)=>{if(k.source==="event"&&r){const P=(({values:T,sourceInfo:A})=>{const I=Object.assign({},A.event);return Object.assign(Object.assign({},I),{target:Object.assign(Object.assign({},I.target),{value:T.value.trim()})})})({values:x,sourceInfo:k});w(P.target.value),r(P)}},g=x=>{r&&r(x),w(x.target.value||"")};return U.createElement(Rm,{value:y,isValid:o,disabled:a,readOnly:s,label:f,inputId:n,characterLimit:m,ariaDescribedBy:_,inputRenderer:({className:x,variant:k,inputId:P,describedBy:T})=>{const A={id:P,readOnly:!!s,disabled:a,required:u,className:qe(x,b.className),style:Object.assign({textAlign:d?.align},b.style)};return d?.number&&eR(d.number)?(d.number.prefix&&d.number.prefix[0]==="-"&&(d.number.prefix=` ${d.number.prefix}`),U.createElement(qL,Object.assign({},A,d.number,b,{value:p,"data-testid":`${P}-formatted-number-${k}`,onValueChange:C,valueIsNumericString:!0,"aria-describedby":T,getInputRef:t}))):d?.number&&XT(d.number)?U.createElement(eT,Object.assign({},A,d.number,b,{value:p,"data-testid":`${P}-formatted-number-${k}`,onValueChange:C,valueIsNumericString:!0,"aria-describedby":T,getInputRef:t})):U.createElement("input",Object.assign({},A,b,{value:p,"data-testid":`${P}-${k}`,onChange:g,"aria-describedby":T,ref:t}))}})});E.createContext(void 0);ze(`.LegacyAccordion-module_legacyAccordion__eadKx {
  --component-LegacyAccordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;

  background-color: var(--component-LegacyAccordion-color-background);
  width: var(--component-panel-size-width);
}
`);ze(`.LegacyAccordionHeader-module_legacyAccordionHeader__2Vu0a {
  --component-LegacyAccordion_header-border_top_color: var(--colors-grey-200);
  --component-LegacyAccordion_header-border_top_style: solid;
  --component-LegacyAccordion_header-border_top_width: var(--border_width-thin);
  --component-LegacyAccordion_header-color-background: var(--colors-white);

  align-items: center;
  background-color: var(--component-LegacyAccordion_header-color-background);
  border-top-color: var(--component-LegacyAccordion_header-border_top_color);
  border-top-style: var(--component-LegacyAccordion_header-border_top_style);
  border-top-width: var(--component-LegacyAccordion_header-border_top_width);
  display: flex;
}

/* breakpoints-xs */
@media only screen and (min-width: 0) {
  .LegacyAccordionHeader-module_subtitle__4zhgP {
    display: none;
  }
}

/* breakpoints-sm */
@media only screen and (min-width: 540px) {
  .LegacyAccordionHeader-module_legacyAccordionHeader__2Vu0a.LegacyAccordionHeader-module_withSubtitle__6ISS5 {
    padding-bottom: 0.2rem;
    padding-right: 0.2rem;
    padding-top: 0.2rem;
  }

  .LegacyAccordionHeader-module_subtitle__4zhgP {
    display: inline-block;
    font-size: 0.9rem;
    opacity: 0.6;
  }
}

.LegacyAccordionHeader-module_title__m0-FG {
  --component-LegacyAccordion_header_title-border_bottom_style: none;
  --component-LegacyAccordion_header_title-border_left_style: none;
  --component-LegacyAccordion_header_title-border_right_style: none;
  --component-LegacyAccordion_header_title-border_top_style: none;
  --component-LegacyAccordion_header_title-color-background: none;
  --component-LegacyAccordion_header_title-font_size: var(--font_size-300);
  --component-LegacyAccordion_header_title-font_weight: var(--component-panel-font_weight-heading);
  --component-LegacyAccordion_header_title-spacing-margin_left: 1.6rem;

  background-color: var(--component-LegacyAccordion_header_title-color-background);
  border-bottom-style: var(--component-LegacyAccordion_header_title-border_bottom_style);
  border-left-style: var(--component-LegacyAccordion_header_title-border_left_style);
  border-right-style: var(--component-LegacyAccordion_header_title-border_right_style);
  border-top-style: var(--component-LegacyAccordion_header_title-border_top_style);
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 auto;
  flex-direction: column;
  font-family: inherit;
  font-size: var(--component-LegacyAccordion_header_title-font_size);
  font-weight: var(--component-LegacyAccordion_header_title-font_weight);
  line-height: 16px;
  margin-left: var(--component-LegacyAccordion_header_title-spacing-margin_left);
  text-align: left;
  word-break: break-word;
}

.LegacyAccordionHeader-module_actions__L11E1 {
  align-items: center;
  column-gap: 0.3rem;
  display: grid;
  grid-auto-flow: column;
  padding: 0 0.2rem;
}

.LegacyAccordionHeader-module_subtitle__4zhgP {
  word-break: break-word;
}
`);ze(`.LegacyAccordionIcon-module_legacyAccordionIcon__-LNuQ {
  --size: 20px;

  box-sizing: border-box;
  cursor: pointer;
  flex-shrink: 0;
  height: var(--size);
  margin-bottom: 0.6rem;
  margin-left: 0.6rem;
  margin-top: 0.6rem;
  width: var(--size);
}

.LegacyAccordionIcon-module_legacyAccordionIcon__-LNuQ.LegacyAccordionIcon-module_opened__Zoiav {
  transform: rotate(90deg);
}
`);var jy={list:"List-module_list__9aWGq",solid:"List-module_solid__g5log",dashed:"List-module_dashed__sq10j"};ze(`.List-module_list__9aWGq {
  --component-list-border_width: 1px;

  border-top-color: var(--component-list-border_color);
  border-top-style: var(--component-list-border_style);
  border-top-width: var(--component-list-border_width);
  list-style-type: none;
  padding-left: 0;
}

.List-module_list__9aWGq.List-module_solid__g5log {
  --component-list-border_color: #bcc7cc;
  --component-list-border_style: solid;
}

.List-module_list__9aWGq.List-module_dashed__sq10j {
  --component-list-border_color: #1eadf7;
  --component-list-border_style: dashed;
}
`);const ER=e=>{var{borderStyle:t="solid",children:n,className:r}=e,o=ft(e,["borderStyle","children","className"]);return U.createElement("ul",Object.assign({},o,{className:qe([jy.list,jy[t],r])}),n)};var OR="ListItem-module_listItem__AJQMK";ze(`.ListItem-module_listItem__AJQMK {
  border-bottom-color: var(--component-list-border_color);
  border-bottom-style: var(--component-list-border_style);
  border-bottom-width: var(--component-list-border_width);
  display: block;
}
`);const zo=e=>{var{children:t}=e,n=ft(e,["children"]);return U.createElement("li",Object.assign({},n,{className:OR}),t)};ze(`.Table-module_table__Dkosn {
  align-self: stretch;
  background-color: #fff;
  border-collapse: collapse;
  border-spacing: 0;
  box-shadow: 0 1px 1px rgb(0 0 0 / 0.12), 0 2px 2px rgb(0 0 0 / 0.12);
  flex-grow: 0;
  order: 3;
  width: 100%;
}
`);E.createContext(void 0);E.createContext({variantStandard:"body"});ze(`.TableHeader-module_table-header__mrqgB {
  align-self: stretch;
  background: #f5f5f5;
  flex-grow: 0;
  order: 1;
}
`);ze(`.TableRow-module_tableRow__lREy- {
  height: 60px;
  width: 1056px;
}

.TableRow-module_tableRow__lREy-.TableRow-module_selected__0FWjw {
  background-color: #e0daf7;
  border-bottom: 1px solid #dde3e5;
  border-left: 2px solid #011728;
  border-top: 1px solid #dde3e5;
}

.TableRow-module_tableRow__lREy-.TableRow-module_body__CUiHu:hover {
  background-color: #e3f7ff;
  cursor: pointer;
}
`);ze(`.TableCell-module_headerTableCell__1Riow {
  background: #f5f5f5;
  margin: 20px 0;
  padding: 8px;
  text-align: left;
  user-select: none;
}

.TableCell-module_headerTableCellRadiobutton__aHo20 {
  background: #f5f5f5;
  margin: 10px 0;
  padding: 8px;
  text-align: left;
  user-select: none;
}

.TableCell-module_bodyTableCell__MTK68 {
  border-bottom: 1px solid #dde3e5;
  border-top: 1px solid #dde3e5;
  margin: 20px 0;
  max-width: 300px;
  text-align: left;
}

.TableCell-module_bodyTableCellRadiobutton__zztqA {
  border-bottom: 1px solid #dde3e5;
  border-top: 1px solid #dde3e5;
  text-align: left;
}

.TableCell-module_image__vWvwd {
  max-height: 45px;
  max-width: 45px;
}

.TableCell-module_input__cyAaE {
  margin: 0 15px;
}

.TableCell-module_radioButton__kN3Cg {
  margin: 0 0 0 15px;
}

.TableCell-module_containerSortable__8hKI3 {
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.TableCell-module_icon__ADG4G {
  fill: rgb(0 0 0 / 0.4);
  margin-left: -5px;
}

.TableCell-module_iconDesc__bD3-5 {
  fill: rgb(0 0 0);
  margin-left: -5px;
}

.TableCell-module_iconAsc__bGb1O {
  fill: rgb(0 0 0);
  margin-left: -5px;
  transform: rotate(180deg);
}

.TableCell-module_header__HuaKn {
  color: #4b5563;
  font-weight: 600;
  margin: 10px 10px 10px 0;
}

.TableCell-module_property__k74rm {
  margin: 10px 10px 10px 0;
}
`);ze(`.TableBody-module_tableBody__fKFbY {
  align-self: stretch;
  background-color: #ffff;
  flex-grow: 0;
  order: 2;
}
`);ze(`.TableFooter-module_tableFooter__MJ37D {
  align-self: stretch;
  background: #f5f5f5;
  flex-grow: 0;
  order: 1;
}
`);ze(`.ToggleButtonGroup-module_toggleButtonGroup__Q-2j7 {
  align-items: stretch;
  border-color: var(--component-toggle_button-color-border-inactive);
  border-radius: var(--interactive_components-border_radius-normal);
  border-style: solid;
  border-width: 2px;
  box-sizing: border-box;
  display: inline-flex;
  height: var(--component-button-size-height-small);
  width: 100%;
}

.ToggleButtonGroup-module_toggleButton__RA-MW {
  background-color: var(--component-toggle_button-color-background-inactive);
  border-radius: 0;
  border: none;
  color: var(--component-toggle_button-color-text-inactive);
  cursor: pointer;
  flex: 1;
  font-family: inherit;
  font-size: var(--component-toggle_button-font_size-sm);
  padding-left: var(--component-toggle_button-space-padding-x);
  padding-right: var(--component-toggle_button-space-padding-x);
}

.ToggleButtonGroup-module_toggleButton__RA-MW.ToggleButtonGroup-module_pressed__aAphL {
  background-color: var(--component-toggle_button-color-background-active);
  color: var(--component-toggle_button-color-text-active);
}

.ToggleButtonGroup-module_toggleButton__RA-MW:focus-visible {
  outline-offset: var(--semantic-tab_focus-outline-offset);
  outline: var(--semantic-tab_focus-outline-color) auto var(--semantic-tab_focus-outline-width);
  z-index: 1;
}

.ToggleButtonGroup-module_toggleButton__RA-MW:not(.ToggleButtonGroup-module_pressed__aAphL):hover {
  background-color: #cff0ff;
}
`);var Nl={paragraph:"Paragraph-module_paragraph__Q65gR",spacing:"Paragraph-module_spacing__NqukG",large:"Paragraph-module_large__a1-p4",short:"Paragraph-module_short__2YxWV",medium:"Paragraph-module_medium__LYuYD",small:"Paragraph-module_small__nw9qP",xsmall:"Paragraph-module_xsmall__sCdyx"};ze(`.Paragraph-module_paragraph__Q65gR {
  --fdsc-typography-font-family: inherit;

  margin: 0;
}

.Paragraph-module_spacing__NqukG {
  margin-bottom: var(--fds-spacing-4);
}

.Paragraph-module_paragraph__Q65gR.Paragraph-module_large__a1-p4 {
  font: var(--fds-typography-paragraph-large);
  font-family: var(--fdsc-typography-font-family);
}

.Paragraph-module_paragraph__Q65gR.Paragraph-module_large__a1-p4.Paragraph-module_short__2YxWV {
  font: var(--fds-typography-paragraph-short-large);
  font-family: var(--fdsc-typography-font-family);
}

.Paragraph-module_paragraph__Q65gR.Paragraph-module_medium__LYuYD {
  font: var(--fds-typography-paragraph-medium);
  font-family: var(--fdsc-typography-font-family);
}

.Paragraph-module_paragraph__Q65gR.Paragraph-module_medium__LYuYD.Paragraph-module_short__2YxWV {
  font: var(--fds-typography-paragraph-short-medium);
  font-family: var(--fdsc-typography-font-family);
}

.Paragraph-module_paragraph__Q65gR.Paragraph-module_small__nw9qP {
  font: var(--fds-typography-paragraph-small);
  font-family: var(--fdsc-typography-font-family);
}

.Paragraph-module_paragraph__Q65gR.Paragraph-module_small__nw9qP.Paragraph-module_short__2YxWV {
  font: var(--fds-typography-paragraph-short-small);
  font-family: var(--fdsc-typography-font-family);
}

.Paragraph-module_paragraph__Q65gR.Paragraph-module_xsmall__sCdyx {
  font: var(--fds-typography-paragraph-xsmall);
  font-family: var(--fdsc-typography-font-family);
}

.Paragraph-module_paragraph__Q65gR.Paragraph-module_xsmall__sCdyx.Paragraph-module_short__2YxWV {
  font: var(--fds-typography-paragraph-short-xsmall);
  font-family: var(--fdsc-typography-font-family);
}
`);const x1=E.forwardRef((e,t)=>{var{className:n,size:r="medium",spacing:o,as:a="p",short:s}=e,u=ft(e,["className","size","spacing","as","short"]);return U.createElement(a,Object.assign({},u,{ref:t,className:qe(Nl.paragraph,Nl[r],{[Nl.spacing]:!!o,[Nl.short]:s},n)}))});var yf={heading:"Heading-module_heading__oGM7x",spacing:"Heading-module_spacing__F-DQ2",xlarge:"Heading-module_xlarge__Aq3TF",large:"Heading-module_large__kEdDZ",medium:"Heading-module_medium__VfBrh",small:"Heading-module_small__SY2lJ",xsmall:"Heading-module_xsmall__hYzb1",xxsmall:"Heading-module_xxsmall__TrWhu"};ze(`.Heading-module_heading__oGM7x {
  --fdsc-typography-font-family: inherit;

  margin: 0;
}

.Heading-module_spacing__F-DQ2 {
  margin-bottom: var(--fds-spacing-5);
}

.Heading-module_heading__oGM7x.Heading-module_xlarge__Aq3TF {
  font: var(--fds-typography-heading-xlarge);
  font-family: var(--fdsc-typography-font-family);
}

.Heading-module_heading__oGM7x.Heading-module_large__kEdDZ {
  font: var(--fds-typography-heading-large);
  font-family: var(--fdsc-typography-font-family);
}

.Heading-module_heading__oGM7x.Heading-module_medium__VfBrh {
  font: var(--fds-typography-heading-medium);
  font-family: var(--fdsc-typography-font-family);
}

.Heading-module_heading__oGM7x.Heading-module_small__SY2lJ {
  font: var(--fds-typography-heading-small);
  font-family: var(--fdsc-typography-font-family);
}

.Heading-module_heading__oGM7x.Heading-module_xsmall__hYzb1 {
  font: var(--fds-typography-heading-xsmall);
  font-family: var(--fdsc-typography-font-family);
}

.Heading-module_heading__oGM7x.Heading-module_xxsmall__TrWhu {
  font: var(--fds-typography-heading-xxsmall);
  font-family: var(--fdsc-typography-font-family);
}
`);const w1=E.forwardRef((e,t)=>{var{level:n=1,size:r="xlarge",spacing:o=!1,className:a,as:s}=e,u=ft(e,["level","size","spacing","className","as"]);const d=s??`h${n??1}`;return U.createElement(d,Object.assign({},u,{ref:t,className:qe(yf.heading,yf[r],{[yf.spacing]:o},a)}))});var bf={ingress:"Ingress-module_ingress__QiPXj",spacing:"Ingress-module_spacing__C2m1n",medium:"Ingress-module_medium__r-UCu"};ze(`.Ingress-module_ingress__QiPXj {
  --fdsc-typography-font-family: inherit;

  margin: 0;
}

.Ingress-module_spacing__C2m1n {
  margin-bottom: var(--fds-spacing-5);
}

.Ingress-module_ingress__QiPXj.Ingress-module_medium__r-UCu {
  font: var(--fds-typography-ingress-medium);
  font-family: var(--fdsc-typography-font-family);
}
`);const LR=E.forwardRef((e,t)=>{var{className:n,size:r="medium",spacing:o,as:a="p"}=e,s=ft(e,["className","size","spacing","as"]);return U.createElement(a,Object.assign({},s,{ref:t,className:qe(bf.ingress,bf[r],{[bf.spacing]:!!o},n)}))});var xf={label:"Label-module_label__vyjHz",spacing:"Label-module_spacing__8PZyR",large:"Label-module_large__Y2DhY",medium:"Label-module_medium__mDhxE",small:"Label-module_small__5UUDo",xsmall:"Label-module_xsmall__TwPQx"};ze(`.Label-module_label__vyjHz {
  --fdsc-typography-font-family: inherit;

  display: inline-block;
  margin: 0;
}

.Label-module_spacing__8PZyR {
  margin-bottom: var(--fds-spacing-5);
}

.Label-module_label__vyjHz.Label-module_large__Y2DhY {
  font: var(--fds-typography-label-large);
  font-family: var(--fdsc-typography-font-family);
}

.Label-module_label__vyjHz.Label-module_medium__mDhxE {
  font: var(--fds-typography-label-medium);
  font-family: var(--fdsc-typography-font-family);
}

.Label-module_label__vyjHz.Label-module_small__5UUDo {
  font: var(--fds-typography-label-small);
  font-family: var(--fdsc-typography-font-family);
}

.Label-module_label__vyjHz.Label-module_xsmall__TwPQx {
  font: var(--fds-typography-label-xsmall);
  font-family: var(--fdsc-typography-font-family);
}
`);E.forwardRef((e,t)=>{var{className:n,size:r="medium",spacing:o,as:a="label"}=e,s=ft(e,["className","size","spacing","as"]);return U.createElement(a,Object.assign({},s,{ref:t,className:qe(xf.label,xf[r],{[xf.spacing]:!!o},n)}))});var wf={errorMessage:"ErrorMessage-module_errorMessage__Mn3zg",spacing:"ErrorMessage-module_spacing__cDjeN",medium:"ErrorMessage-module_medium__ZOE1G",small:"ErrorMessage-module_small__mUspd"};ze(`.ErrorMessage-module_errorMessage__Mn3zg {
  --fdsc-typography-font-family: inherit;

  margin: 0;
  color: var(--fds-semantic-text-danger-default);
}

.ErrorMessage-module_errorMessage__Mn3zg.ErrorMessage-module_spacing__cDjeN {
  margin-bottom: var(--fds-spacing-5);
}

.ErrorMessage-module_errorMessage__Mn3zg.ErrorMessage-module_medium__ZOE1G {
  font: var(--fds-typography-error_message-medium);
  font-family: var(--fdsc-typography-font-family);
}

.ErrorMessage-module_errorMessage__Mn3zg.ErrorMessage-module_small__mUspd {
  font: var(--fds-typography-error_message-small);
  font-family: var(--fdsc-typography-font-family);
}
`);const TR=E.forwardRef((e,t)=>{var{className:n,size:r="medium",spacing:o,as:a="p"}=e,s=ft(e,["className","size","spacing","as"]);return U.createElement(a,Object.assign({},s,{ref:t,className:qe(wf.errorMessage,wf[r],{[wf.spacing]:!!o},n)}))});var uo={accordion:"Accordion-module_accordion__LVhhv",border:"Accordion-module_border__33ZCr",expandIcon:"Accordion-module_expandIcon__VoOG-",content:"Accordion-module_content__PEM9t",item:"Accordion-module_item__7ryVk",header:"Accordion-module_header__WaTdJ",button:"Accordion-module_button__DIKcm",neutral:"Accordion-module_neutral__qNam6",subtle:"Accordion-module_subtle__Mo-a1",primary:"Accordion-module_primary__62zA0",secondary:"Accordion-module_secondary__D7Kj1",tertiary:"Accordion-module_tertiary__jJX6T",open:"Accordion-module_open__98jLY",filled:"Accordion-module_filled__lWoG4"};ze(`.Accordion-module_accordion__LVhhv {
  --fdsc-accordion-border: var(--fds-semantic-border-neutral-subtle);
  --fdsc-accordion-border-radius: 3px;
  --fdsc-accordion-header-padding-top: var(--fds-spacing-4);
  --fdsc-accordion-header-padding-right: var(--fds-spacing-5);
  --fdsc-accordion-header-padding-bottom: var(--fds-spacing-4);
  --fdsc-accordion-header-padding-left: var(--fds-spacing-5);
  --fdsc-accordion-header-bg-neutral: var(--fds-semantic-surface-neutral-default);
  --fdsc-accordion-header-bg-neutral-active: var(--fds-semantic-surface-action-no_fill-hover);
  --fdsc-accordion-header-bg-brand-active: var(--fds-semantic-surface-neutral-subtle-hover);
  --fdsc-accordion-header-bg-subtle: var(--fds-semantic-surface-neutral-subtle);
  --fdsc-accordion-header-bg-subtle-hover: var(--fds-semantic-surface-neutral-subtle-hover);
  --fdsc-accordion-header-bg-primary: var(--fds-semantic-surface-primary-primary);
  --fdsc-accordion-header-bg-primary-hover: var(--fds-semantic-surface-primary-primary-hover);
  --fdsc-accordion-header-bg-secondary: var(--fds-semantic-surface-secondary-secondary);
  --fdsc-accordion-header-bg-secondary-hover: var(--fds-semantic-surface-secondary-secondary-hover);
  --fdsc-accordion-header-bg-tertiary: var(--fds-semantic-surface-tertiary-tertiary);
  --fdsc-accordion-header-bg-tertiary-hover: var(--fds-semantic-surface-tertiary-tertiary-hover);
  --fdsc-accordion-header-border: var(--fds-semantic-border-neutral-subtle);
  --fdsc-accordion-header-border-inverted: var(--fds-semantic-border-on_inverted-default);
  --fdsc-accordion-header-shadow-focus: 2px 2px 3px var(--fds-semantic-border-neutral-subtle);
  --fdsc-accordion-header-color-hover: var(--fds-semantic-text-action-default);
  --fdsc-accordion-content-border: var(--fds-semantic-border-neutral-subtle);
  --fdsc-accordion-content-border-open: var(--fds-semantic-border-neutral-strong);
}

.Accordion-module_border__33ZCr {
  border: 1px solid var(--fdsc-accordion-border);
  border-radius: var(--fdsc-accordion-border-radius);
}

.Accordion-module_expandIcon__VoOG- {
  font-size: 1.5rem;
  height: 1.75rem;
  flex-shrink: 0;
}

.Accordion-module_content__PEM9t {
  padding: var(--fds-spacing-5, 1rem);
  background-color: #ffffff50;
  overflow: hidden;
  text-overflow: ellipsis;
}

.Accordion-module_item__7ryVk:last-child .Accordion-module_content__PEM9t {
  border-bottom: 1px solid var(--fdsc-accordion-content-border);
}

.Accordion-module_header__WaTdJ {
  margin: 0;
}

.Accordion-module_header__WaTdJ > button {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: var(--fds-sizing-4);
  gap: var(--fds-spacing-4);
  margin: 0;
  text-align: left;
  cursor: pointer;
  border: none;
  border-top: 1px solid var(--fdsc-accordion-header-border);
  padding-top: var(--fdsc-accordion-header-padding-top);
  padding-right: var(--fdsc-accordion-header-padding-right);
  padding-bottom: var(--fdsc-accordion-header-padding-bottom);
  padding-left: var(--fdsc-accordion-header-padding-left);
}

.Accordion-module_header__WaTdJ > button:focus-visible {
  outline: var(--semantic-tab_focus-outline-color) solid var(--semantic-tab_focus-outline-width);
  outline-offset: var(--semantic-tab_focus-outline-offset);
}

.Accordion-module_header__WaTdJ > .Accordion-module_button__DIKcm:focus:not(:focus-visible) {
  outline: none;
}

@media (hover: hover) and (pointer: fine) {
  .Accordion-module_header__WaTdJ > button:hover {
    color: var(--fdsc-accordion-header-color-hover);
  }
}

.Accordion-module_item__7ryVk:focus-within {
  position: relative;
}

.Accordion-module_accordion__LVhhv.Accordion-module_neutral__qNam6,
.Accordion-module_accordion__LVhhv.Accordion-module_neutral__qNam6 > .Accordion-module_item__7ryVk > .Accordion-module_header__WaTdJ > button {
  background: var(--fdsc-accordion-header-bg-neutral);
}

.Accordion-module_accordion__LVhhv.Accordion-module_subtle__Mo-a1,
.Accordion-module_accordion__LVhhv.Accordion-module_subtle__Mo-a1 > .Accordion-module_item__7ryVk > .Accordion-module_header__WaTdJ > button {
  background: var(--fdsc-accordion-header-bg-subtle);
}

.Accordion-module_accordion__LVhhv.Accordion-module_primary__62zA0,
.Accordion-module_accordion__LVhhv.Accordion-module_primary__62zA0 > .Accordion-module_item__7ryVk > .Accordion-module_header__WaTdJ > button {
  background: var(--fdsc-accordion-header-bg-primary);
}

.Accordion-module_accordion__LVhhv.Accordion-module_secondary__D7Kj1,
.Accordion-module_accordion__LVhhv.Accordion-module_secondary__D7Kj1 > .Accordion-module_item__7ryVk > .Accordion-module_header__WaTdJ > button {
  background: var(--fdsc-accordion-header-bg-secondary);
}

.Accordion-module_accordion__LVhhv.Accordion-module_tertiary__jJX6T,
.Accordion-module_accordion__LVhhv.Accordion-module_tertiary__jJX6T > .Accordion-module_item__7ryVk > .Accordion-module_header__WaTdJ > button {
  background: var(--fdsc-accordion-header-bg-tertiary);
}

.Accordion-module_accordion__LVhhv.Accordion-module_border__33ZCr > .Accordion-module_item__7ryVk:first-child > .Accordion-module_header__WaTdJ > button {
  border-top: 0;
}

.Accordion-module_accordion__LVhhv.Accordion-module_primary__62zA0 > .Accordion-module_item__7ryVk:not(:first-child) > .Accordion-module_header__WaTdJ > button,
.Accordion-module_accordion__LVhhv.Accordion-module_secondary__D7Kj1 > .Accordion-module_item__7ryVk:not(:first-child) > .Accordion-module_header__WaTdJ > button,
.Accordion-module_accordion__LVhhv.Accordion-module_tertiary__jJX6T > .Accordion-module_item__7ryVk:not(:first-child) > .Accordion-module_header__WaTdJ > button {
  border-top: 1px solid var(--fdsc-accordion-header-border-inverted);
}

@media (hover: hover) and (pointer: fine) {
  .Accordion-module_accordion__LVhhv.Accordion-module_subtle__Mo-a1 > .Accordion-module_item__7ryVk > .Accordion-module_header__WaTdJ > button:hover {
    background: var(--fdsc-accordion-header-bg-subtle-hover);
  }

  .Accordion-module_accordion__LVhhv.Accordion-module_primary__62zA0 > .Accordion-module_item__7ryVk > .Accordion-module_header__WaTdJ > button:hover {
    background: var(--fdsc-accordion-header-bg-primary-hover);
  }

  .Accordion-module_accordion__LVhhv.Accordion-module_secondary__D7Kj1 > .Accordion-module_item__7ryVk > .Accordion-module_header__WaTdJ > button:hover {
    background: var(--fdsc-accordion-header-bg-secondary-hover);
  }

  .Accordion-module_accordion__LVhhv.Accordion-module_tertiary__jJX6T > .Accordion-module_item__7ryVk > .Accordion-module_header__WaTdJ > button:hover {
    background: var(--fdsc-accordion-header-bg-tertiary-hover);
  }
}

.Accordion-module_accordion__LVhhv.Accordion-module_neutral__qNam6 > .Accordion-module_item__7ryVk.Accordion-module_open__98jLY > .Accordion-module_header__WaTdJ > button,
.Accordion-module_accordion__LVhhv.Accordion-module_subtle__Mo-a1 > .Accordion-module_item__7ryVk.Accordion-module_open__98jLY > .Accordion-module_header__WaTdJ > button {
  background-color: var(--fdsc-accordion-header-bg-neutral-active);
}

.Accordion-module_accordion__LVhhv.Accordion-module_primary__62zA0 > .Accordion-module_item__7ryVk.Accordion-module_open__98jLY > .Accordion-module_header__WaTdJ > button,
.Accordion-module_accordion__LVhhv.Accordion-module_secondary__D7Kj1 > .Accordion-module_item__7ryVk.Accordion-module_open__98jLY > .Accordion-module_header__WaTdJ > button,
.Accordion-module_accordion__LVhhv.Accordion-module_tertiary__jJX6T > .Accordion-module_item__7ryVk.Accordion-module_open__98jLY > .Accordion-module_header__WaTdJ > button {
  background-color: var(--fdsc-accordion-header-bg-brand-active);
}

.Accordion-module_item__7ryVk.Accordion-module_open__98jLY > .Accordion-module_header__WaTdJ > button:hover + * .Accordion-module_content__PEM9t {
  border-color: var(--fdsc-accordion-content-border-open);
}

.Accordion-module_item__7ryVk.Accordion-module_open__98jLY > .Accordion-module_header__WaTdJ > button .Accordion-module_expandIcon__VoOG- {
  transform: rotateZ(180deg);
}

.Accordion-module_header__WaTdJ > button:hover > .Accordion-module_accordion__LVhhv.Accordion-module_expandIcon__VoOG-.Accordion-module_filled__lWoG4 {
  display: inherit;
}
`);const RR=E.forwardRef((e,t)=>{var{border:n=!1,color:r="neutral",className:o}=e,a=ft(e,["border","color","className"]);return U.createElement("div",Object.assign({},a,{className:qe(uo.accordion,uo[r],{[uo.border]:n},o),ref:t}))}),Am=E.createContext(null),AR=E.forwardRef((e,t)=>{var{children:n,className:r,open:o,defaultOpen:a=!1}=e,s=ft(e,["children","className","open","defaultOpen"]);const[u,d]=E.useState(a),f=E.useId();return U.createElement("div",Object.assign({className:qe(uo.item,r,{[uo.open]:o??u}),ref:t},s),U.createElement(Am.Provider,{value:{open:o??u,toggleOpen:()=>{o===void 0&&d(p=>!p)},contentId:f}},n))});function Fy(e){return typeof e=="string"&&e[e.length-1]==="%"&&function(t){const n=parseFloat(t);return!isNaN(n)&&isFinite(n)}(e.substring(0,e.length-1))}function kf(e,t){t===0&&e?.style&&(e.style.display="none")}const zR=e=>{var{children:t,className:n,innerClassName:r,duration:o=250,easing:a="ease",height:s}=e,u=ft(e,["children","className","innerClassName","duration","easing","height"]);const d=E.useRef(s),f=E.useRef(null),p=E.useRef(),m=E.useRef(),_=typeof window<"u",b=E.useRef(!(!_||!window.matchMedia)&&window.matchMedia("(prefers-reduced-motion)").matches).current?0:o;let y=s,w="visible";typeof y=="number"?(y=+s<0?0:s,w="hidden"):Fy(y)&&(y=s==="0%"?0:s,w="hidden");const[C,g]=E.useState(y),[x,k]=E.useState(w),[P,T]=E.useState(!1);E.useEffect(()=>{kf(f.current,C)},[]),E.useEffect(()=>{if(s!==d.current&&f.current){(function(le,X){X===0&&le?.style&&(le.style.display="")})(f.current,d.current),f.current.style.overflow="hidden";const F=f.current.offsetHeight;f.current.style.overflow="";const W=b;let B,G,J,ee="hidden";const V=d.current==="auto";typeof s=="number"?(B=s<0?0:s,G=B):Fy(s)?(B=s==="0%"?0:s,G=B):(B=F,G="auto",ee=void 0),V&&(G=B,B=F),g(B),k("hidden"),T(!V),clearTimeout(m.current),clearTimeout(p.current),V?(J=!0,m.current=setTimeout(()=>{g(G),k(ee),T(J)},50),p.current=setTimeout(()=>{T(!1),kf(f.current,G)},W)):m.current=setTimeout(()=>{g(G),k(ee),T(!1),s!=="auto"&&kf(f.current,B)},W)}return d.current=s,()=>{clearTimeout(m.current),clearTimeout(p.current)}},[s]);const A={height:C,overflow:x};P&&(A.transition=`height ${b}ms ${a} 0ms`,A.WebkitTransition=A.transition);const I=u["aria-hidden"]!==void 0?u["aria-hidden"]:s===0;return U.createElement("div",Object.assign({},u,{className:n,style:A}),U.createElement("div",{"aria-hidden":I,className:r,ref:f},t))},NR=E.forwardRef((e,t)=>{var{children:n,className:r}=e,o=ft(e,["children","className"]);const a=E.useContext(Am);return a===null?(console.error("<Accordion.Content> has to be used within an <Accordion.Item>"),null):U.createElement(zR,{id:a.contentId,height:a.open?"auto":0,duration:250},U.createElement(x1,Object.assign({},o,{as:"div",size:"small",ref:t,className:qe(uo.content,r)}),n))});let Uy=0;const $y=U.useId;function IR(e){var t;if($y!==void 0){const n=$y();return e??n.replace(/(:)/g,"")}return(t=function(n){const[r,o]=E.useState(n),a=n||r;return E.useEffect(()=>{r==null&&(Uy+=1,o(`aksel-icon-${Uy}`))},[r]),a}(e))!==null&&t!==void 0?t:""}var BR=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},MR=E.forwardRef((e,t)=>{var{title:n,titleId:r}=e,o=BR(e,["title","titleId"]);let a=IR();return a=n?r||"title-"+a:void 0,E.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},o),n?E.createElement("title",{id:a},n):null,E.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06Z",fill:"currentColor"}))});const DR=E.forwardRef((e,t)=>{var{level:n=1,children:r,className:o,onHeaderClick:a}=e,s=ft(e,["level","children","className","onHeaderClick"]);const u=E.useContext(Am);return u===null?(console.error("<Accordion.Header> has to be used within an <Accordion.Item>"),null):U.createElement(w1,Object.assign({},s,{ref:t,size:"xsmall",level:n,className:qe(uo.header,o)}),U.createElement("button",{type:"button",onClick:d=>{u.toggleOpen(),a&&a(d)},"aria-expanded":u.open,"aria-controls":u.contentId},U.createElement(MR,{"aria-hidden":!0,className:uo.expandIcon}),U.createElement(x1,{as:"span",size:"small"},r)))}),er=RR;var Wy,Hy,Vy,Zy,qy,Ky,Qy,Gy,ss,Jy,Yy,Xy,eb,tb,nb,rb,ob;er.Header=DR,er.Content=NR,er.Item=AR,er.Header.displayName="Accordion.Header",er.Content.displayName="Accordion.Content",er.Item.displayName="Accordion.Item",function(e){e.Xsmall="xsmall",e.Small="small"}(Wy||(Wy={})),function(e){e.Default="default",e.Error="error",e.Disabled="disabled",e.ReadOnlyInfo="readonlyInfo",e.ReadOnlyConfirm="readonlyConfirm"}(Hy||(Hy={})),function(e){e.ReadOnlyInfo="readonlyInfo",e.ReadOnlyConfirm="readonlyConfirm"}(Vy||(Vy={})),function(e){e.None="none",e.Error="error",e.Search="search"}(Zy||(Zy={})),function(e){e.Primary="primary",e.Secondary="secondary"}(qy||(qy={})),function(e){e.Small="small",e.Medium="medium",e.Large="large"}(Ky||(Ky={})),function(e){e.Primary="primary",e.Secondary="secondary",e.Success="success",e.Danger="danger",e.Inverted="inverted"}(Qy||(Qy={})),function(e){e.Filled="filled",e.Outline="outline",e.Quiet="quiet"}(Gy||(Gy={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(ss||(ss={})),function(e){e.Xsmall="xsmall",e.Small="small"}(Jy||(Jy={})),function(e){e.Xsmall="xsmall",e.Small="small"}(Yy||(Yy={})),function(e){e.Xsmall="xsmall",e.Small="small"}(Xy||(Xy={})),function(e){e.Xsmall="xsmall",e.Small="small"}(eb||(eb={})),function(e){e.Default="default",e.Info="info",e.Warning="warning",e.Danger="danger"}(tb||(tb={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(nb||(nb={})),function(e){e.XLarge="xlarge",e.Large="large",e.Medium="medium",e.Small="small",e.XSmall="xsmall"}(rb||(rb={})),function(e){e[e.H1=1]="H1",e[e.H2=2]="H2",e[e.H3=3]="H3",e[e.H4=4]="H4",e[e.H5=5]="H5",e[e.H6=6]="H6"}(ob||(ob={}));function k1(e,t){return function(){return e.apply(t,arguments)}}const{toString:jR}=Object.prototype,{getPrototypeOf:zm}=Object,Jc=(e=>t=>{const n=jR.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),lr=e=>(e=e.toLowerCase(),t=>Jc(t)===e),Yc=e=>t=>typeof t===e,{isArray:fa}=Array,As=Yc("undefined");function FR(e){return e!==null&&!As(e)&&e.constructor!==null&&!As(e.constructor)&&xn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const S1=lr("ArrayBuffer");function UR(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&S1(e.buffer),t}const $R=Yc("string"),xn=Yc("function"),P1=Yc("number"),Xc=e=>e!==null&&typeof e=="object",WR=e=>e===!0||e===!1,eu=e=>{if(Jc(e)!=="object")return!1;const t=zm(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},HR=lr("Date"),VR=lr("File"),ZR=lr("Blob"),qR=lr("FileList"),KR=e=>Xc(e)&&xn(e.pipe),QR=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||xn(e.append)&&((t=Jc(e))==="formdata"||t==="object"&&xn(e.toString)&&e.toString()==="[object FormData]"))},GR=lr("URLSearchParams"),JR=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Vs(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),fa(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),s=a.length;let u;for(r=0;r<s;r++)u=a[r],t.call(null,e[u],u,e)}}function C1(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const E1=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),O1=e=>!As(e)&&e!==E1;function rp(){const{caseless:e}=O1(this)&&this||{},t={},n=(r,o)=>{const a=e&&C1(t,o)||o;eu(t[a])&&eu(r)?t[a]=rp(t[a],r):eu(r)?t[a]=rp({},r):fa(r)?t[a]=r.slice():t[a]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&Vs(arguments[r],n);return t}const YR=(e,t,n,{allOwnKeys:r}={})=>(Vs(t,(o,a)=>{n&&xn(o)?e[a]=k1(o,n):e[a]=o},{allOwnKeys:r}),e),XR=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),eA=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},tA=(e,t,n,r)=>{let o,a,s;const u={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),a=o.length;a-- >0;)s=o[a],(!r||r(s,e,t))&&!u[s]&&(t[s]=e[s],u[s]=!0);e=n!==!1&&zm(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},nA=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},rA=e=>{if(!e)return null;if(fa(e))return e;let t=e.length;if(!P1(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},oA=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&zm(Uint8Array)),iA=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const a=o.value;t.call(e,a[0],a[1])}},aA=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},sA=lr("HTMLFormElement"),lA=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),ib=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),uA=lr("RegExp"),L1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Vs(n,(o,a)=>{t(o,a,e)!==!1&&(r[a]=o)}),Object.defineProperties(e,r)},cA=e=>{L1(e,(t,n)=>{if(xn(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(xn(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},dA=(e,t)=>{const n={},r=o=>{o.forEach(a=>{n[a]=!0})};return fa(e)?r(e):r(String(e).split(t)),n},fA=()=>{},hA=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Sf="abcdefghijklmnopqrstuvwxyz",ab="0123456789",T1={DIGIT:ab,ALPHA:Sf,ALPHA_DIGIT:Sf+Sf.toUpperCase()+ab},pA=(e=16,t=T1.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function mA(e){return!!(e&&xn(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const _A=e=>{const t=new Array(10),n=(r,o)=>{if(Xc(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const a=fa(r)?[]:{};return Vs(r,(s,u)=>{const d=n(s,o+1);!As(d)&&(a[u]=d)}),t[o]=void 0,a}}return r};return n(e,0)},gA=lr("AsyncFunction"),vA=e=>e&&(Xc(e)||xn(e))&&xn(e.then)&&xn(e.catch),Y={isArray:fa,isArrayBuffer:S1,isBuffer:FR,isFormData:QR,isArrayBufferView:UR,isString:$R,isNumber:P1,isBoolean:WR,isObject:Xc,isPlainObject:eu,isUndefined:As,isDate:HR,isFile:VR,isBlob:ZR,isRegExp:uA,isFunction:xn,isStream:KR,isURLSearchParams:GR,isTypedArray:oA,isFileList:qR,forEach:Vs,merge:rp,extend:YR,trim:JR,stripBOM:XR,inherits:eA,toFlatObject:tA,kindOf:Jc,kindOfTest:lr,endsWith:nA,toArray:rA,forEachEntry:iA,matchAll:aA,isHTMLForm:sA,hasOwnProperty:ib,hasOwnProp:ib,reduceDescriptors:L1,freezeMethods:cA,toObjectSet:dA,toCamelCase:lA,noop:fA,toFiniteNumber:hA,findKey:C1,global:E1,isContextDefined:O1,ALPHABET:T1,generateString:pA,isSpecCompliantForm:mA,toJSONObject:_A,isAsyncFn:gA,isThenable:vA};function je(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}Y.inherits(je,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Y.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const R1=je.prototype,A1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{A1[e]={value:e}});Object.defineProperties(je,A1);Object.defineProperty(R1,"isAxiosError",{value:!0});je.from=(e,t,n,r,o,a)=>{const s=Object.create(R1);return Y.toFlatObject(e,s,function(d){return d!==Error.prototype},u=>u!=="isAxiosError"),je.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,a&&Object.assign(s,a),s};const yA=null;function op(e){return Y.isPlainObject(e)||Y.isArray(e)}function z1(e){return Y.endsWith(e,"[]")?e.slice(0,-2):e}function sb(e,t,n){return e?e.concat(t).map(function(o,a){return o=z1(o),!n&&a?"["+o+"]":o}).join(n?".":""):t}function bA(e){return Y.isArray(e)&&!e.some(op)}const xA=Y.toFlatObject(Y,{},null,function(t){return/^is[A-Z]/.test(t)});function ed(e,t,n){if(!Y.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=Y.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,C){return!Y.isUndefined(C[w])});const r=n.metaTokens,o=n.visitor||p,a=n.dots,s=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&Y.isSpecCompliantForm(t);if(!Y.isFunction(o))throw new TypeError("visitor must be a function");function f(y){if(y===null)return"";if(Y.isDate(y))return y.toISOString();if(!d&&Y.isBlob(y))throw new je("Blob is not supported. Use a Buffer instead.");return Y.isArrayBuffer(y)||Y.isTypedArray(y)?d&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function p(y,w,C){let g=y;if(y&&!C&&typeof y=="object"){if(Y.endsWith(w,"{}"))w=r?w:w.slice(0,-2),y=JSON.stringify(y);else if(Y.isArray(y)&&bA(y)||(Y.isFileList(y)||Y.endsWith(w,"[]"))&&(g=Y.toArray(y)))return w=z1(w),g.forEach(function(k,P){!(Y.isUndefined(k)||k===null)&&t.append(s===!0?sb([w],P,a):s===null?w:w+"[]",f(k))}),!1}return op(y)?!0:(t.append(sb(C,w,a),f(y)),!1)}const m=[],_=Object.assign(xA,{defaultVisitor:p,convertValue:f,isVisitable:op});function b(y,w){if(!Y.isUndefined(y)){if(m.indexOf(y)!==-1)throw Error("Circular reference detected in "+w.join("."));m.push(y),Y.forEach(y,function(g,x){(!(Y.isUndefined(g)||g===null)&&o.call(t,g,Y.isString(x)?x.trim():x,w,_))===!0&&b(g,w?w.concat(x):[x])}),m.pop()}}if(!Y.isObject(e))throw new TypeError("data must be an object");return b(e),t}function lb(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Nm(e,t){this._pairs=[],e&&ed(e,this,t)}const N1=Nm.prototype;N1.append=function(t,n){this._pairs.push([t,n])};N1.toString=function(t){const n=t?function(r){return t.call(this,r,lb)}:lb;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function wA(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function I1(e,t,n){if(!t)return e;const r=n&&n.encode||wA,o=n&&n.serialize;let a;if(o?a=o(t,n):a=Y.isURLSearchParams(t)?t.toString():new Nm(t,n).toString(r),a){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class kA{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){Y.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ub=kA,B1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},SA=typeof URLSearchParams<"u"?URLSearchParams:Nm,PA=typeof FormData<"u"?FormData:null,CA=typeof Blob<"u"?Blob:null,EA=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),OA=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),rr={isBrowser:!0,classes:{URLSearchParams:SA,FormData:PA,Blob:CA},isStandardBrowserEnv:EA,isStandardBrowserWebWorkerEnv:OA,protocols:["http","https","file","blob","url","data"]};function LA(e,t){return ed(e,new rr.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,a){return rr.isNode&&Y.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function TA(e){return Y.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function RA(e){const t={},n=Object.keys(e);let r;const o=n.length;let a;for(r=0;r<o;r++)a=n[r],t[a]=e[a];return t}function M1(e){function t(n,r,o,a){let s=n[a++];const u=Number.isFinite(+s),d=a>=n.length;return s=!s&&Y.isArray(o)?o.length:s,d?(Y.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!u):((!o[s]||!Y.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],a)&&Y.isArray(o[s])&&(o[s]=RA(o[s])),!u)}if(Y.isFormData(e)&&Y.isFunction(e.entries)){const n={};return Y.forEachEntry(e,(r,o)=>{t(TA(r),o,n,0)}),n}return null}const AA={"Content-Type":void 0};function zA(e,t,n){if(Y.isString(e))try{return(t||JSON.parse)(e),Y.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const td={transitional:B1,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,a=Y.isObject(t);if(a&&Y.isHTMLForm(t)&&(t=new FormData(t)),Y.isFormData(t))return o&&o?JSON.stringify(M1(t)):t;if(Y.isArrayBuffer(t)||Y.isBuffer(t)||Y.isStream(t)||Y.isFile(t)||Y.isBlob(t))return t;if(Y.isArrayBufferView(t))return t.buffer;if(Y.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return LA(t,this.formSerializer).toString();if((u=Y.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return ed(u?{"files[]":t}:t,d&&new d,this.formSerializer)}}return a||o?(n.setContentType("application/json",!1),zA(t)):t}],transformResponse:[function(t){const n=this.transitional||td.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&Y.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(u){if(s)throw u.name==="SyntaxError"?je.from(u,je.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:rr.classes.FormData,Blob:rr.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Y.forEach(["delete","get","head"],function(t){td.headers[t]={}});Y.forEach(["post","put","patch"],function(t){td.headers[t]=Y.merge(AA)});const Im=td,NA=Y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),IA=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&NA[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},cb=Symbol("internals");function $a(e){return e&&String(e).trim().toLowerCase()}function tu(e){return e===!1||e==null?e:Y.isArray(e)?e.map(tu):String(e)}function BA(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const MA=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Pf(e,t,n,r,o){if(Y.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!Y.isString(t)){if(Y.isString(r))return t.indexOf(r)!==-1;if(Y.isRegExp(r))return r.test(t)}}function DA(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function jA(e,t){const n=Y.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,a,s){return this[r].call(this,t,o,a,s)},configurable:!0})})}class nd{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function a(u,d,f){const p=$a(d);if(!p)throw new Error("header name must be a non-empty string");const m=Y.findKey(o,p);(!m||o[m]===void 0||f===!0||f===void 0&&o[m]!==!1)&&(o[m||d]=tu(u))}const s=(u,d)=>Y.forEach(u,(f,p)=>a(f,p,d));return Y.isPlainObject(t)||t instanceof this.constructor?s(t,n):Y.isString(t)&&(t=t.trim())&&!MA(t)?s(IA(t),n):t!=null&&a(n,t,r),this}get(t,n){if(t=$a(t),t){const r=Y.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return BA(o);if(Y.isFunction(n))return n.call(this,o,r);if(Y.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=$a(t),t){const r=Y.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Pf(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function a(s){if(s=$a(s),s){const u=Y.findKey(r,s);u&&(!n||Pf(r,r[u],u,n))&&(delete r[u],o=!0)}}return Y.isArray(t)?t.forEach(a):a(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const a=n[r];(!t||Pf(this,this[a],a,t,!0))&&(delete this[a],o=!0)}return o}normalize(t){const n=this,r={};return Y.forEach(this,(o,a)=>{const s=Y.findKey(r,a);if(s){n[s]=tu(o),delete n[a];return}const u=t?DA(a):String(a).trim();u!==a&&delete n[a],n[u]=tu(o),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return Y.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&Y.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[cb]=this[cb]={accessors:{}}).accessors,o=this.prototype;function a(s){const u=$a(s);r[u]||(jA(o,s),r[u]=!0)}return Y.isArray(t)?t.forEach(a):a(t),this}}nd.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Y.freezeMethods(nd.prototype);Y.freezeMethods(nd);const Pr=nd;function Cf(e,t){const n=this||Im,r=t||n,o=Pr.from(r.headers);let a=r.data;return Y.forEach(e,function(u){a=u.call(n,a,o.normalize(),t?t.status:void 0)}),o.normalize(),a}function D1(e){return!!(e&&e.__CANCEL__)}function Zs(e,t,n){je.call(this,e??"canceled",je.ERR_CANCELED,t,n),this.name="CanceledError"}Y.inherits(Zs,je,{__CANCEL__:!0});function FA(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new je("Request failed with status code "+n.status,[je.ERR_BAD_REQUEST,je.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const UA=rr.isStandardBrowserEnv?function(){return{write:function(n,r,o,a,s,u){const d=[];d.push(n+"="+encodeURIComponent(r)),Y.isNumber(o)&&d.push("expires="+new Date(o).toGMTString()),Y.isString(a)&&d.push("path="+a),Y.isString(s)&&d.push("domain="+s),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function $A(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function WA(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function j1(e,t){return e&&!$A(t)?WA(e,t):t}const HA=rr.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(a){let s=a;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(s){const u=Y.isString(s)?o(s):s;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function VA(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ZA(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,a=0,s;return t=t!==void 0?t:1e3,function(d){const f=Date.now(),p=r[a];s||(s=f),n[o]=d,r[o]=f;let m=a,_=0;for(;m!==o;)_+=n[m++],m=m%e;if(o=(o+1)%e,o===a&&(a=(a+1)%e),f-s<t)return;const b=p&&f-p;return b?Math.round(_*1e3/b):void 0}}function db(e,t){let n=0;const r=ZA(50,250);return o=>{const a=o.loaded,s=o.lengthComputable?o.total:void 0,u=a-n,d=r(u),f=a<=s;n=a;const p={loaded:a,total:s,progress:s?a/s:void 0,bytes:u,rate:d||void 0,estimated:d&&s&&f?(s-a)/d:void 0,event:o};p[t?"download":"upload"]=!0,e(p)}}const qA=typeof XMLHttpRequest<"u",KA=qA&&function(e){return new Promise(function(n,r){let o=e.data;const a=Pr.from(e.headers).normalize(),s=e.responseType;let u;function d(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}Y.isFormData(o)&&(rr.isStandardBrowserEnv||rr.isStandardBrowserWebWorkerEnv?a.setContentType(!1):a.setContentType("multipart/form-data;",!1));let f=new XMLHttpRequest;if(e.auth){const b=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(b+":"+y))}const p=j1(e.baseURL,e.url);f.open(e.method.toUpperCase(),I1(p,e.params,e.paramsSerializer),!0),f.timeout=e.timeout;function m(){if(!f)return;const b=Pr.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),w={data:!s||s==="text"||s==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:b,config:e,request:f};FA(function(g){n(g),d()},function(g){r(g),d()},w),f=null}if("onloadend"in f?f.onloadend=m:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(m)},f.onabort=function(){f&&(r(new je("Request aborted",je.ECONNABORTED,e,f)),f=null)},f.onerror=function(){r(new je("Network Error",je.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let y=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||B1;e.timeoutErrorMessage&&(y=e.timeoutErrorMessage),r(new je(y,w.clarifyTimeoutError?je.ETIMEDOUT:je.ECONNABORTED,e,f)),f=null},rr.isStandardBrowserEnv){const b=(e.withCredentials||HA(p))&&e.xsrfCookieName&&UA.read(e.xsrfCookieName);b&&a.set(e.xsrfHeaderName,b)}o===void 0&&a.setContentType(null),"setRequestHeader"in f&&Y.forEach(a.toJSON(),function(y,w){f.setRequestHeader(w,y)}),Y.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),s&&s!=="json"&&(f.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&f.addEventListener("progress",db(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",db(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=b=>{f&&(r(!b||b.type?new Zs(null,e,f):b),f.abort(),f=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const _=VA(p);if(_&&rr.protocols.indexOf(_)===-1){r(new je("Unsupported protocol "+_+":",je.ERR_BAD_REQUEST,e));return}f.send(o||null)})},nu={http:yA,xhr:KA};Y.forEach(nu,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const QA={getAdapter:e=>{e=Y.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=Y.isString(n)?nu[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new je(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(Y.hasOwnProp(nu,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!Y.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:nu};function Ef(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Zs(null,e)}function fb(e){return Ef(e),e.headers=Pr.from(e.headers),e.data=Cf.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),QA.getAdapter(e.adapter||Im.adapter)(e).then(function(r){return Ef(e),r.data=Cf.call(e,e.transformResponse,r),r.headers=Pr.from(r.headers),r},function(r){return D1(r)||(Ef(e),r&&r.response&&(r.response.data=Cf.call(e,e.transformResponse,r.response),r.response.headers=Pr.from(r.response.headers))),Promise.reject(r)})}const hb=e=>e instanceof Pr?e.toJSON():e;function ia(e,t){t=t||{};const n={};function r(f,p,m){return Y.isPlainObject(f)&&Y.isPlainObject(p)?Y.merge.call({caseless:m},f,p):Y.isPlainObject(p)?Y.merge({},p):Y.isArray(p)?p.slice():p}function o(f,p,m){if(Y.isUndefined(p)){if(!Y.isUndefined(f))return r(void 0,f,m)}else return r(f,p,m)}function a(f,p){if(!Y.isUndefined(p))return r(void 0,p)}function s(f,p){if(Y.isUndefined(p)){if(!Y.isUndefined(f))return r(void 0,f)}else return r(void 0,p)}function u(f,p,m){if(m in t)return r(f,p);if(m in e)return r(void 0,f)}const d={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:u,headers:(f,p)=>o(hb(f),hb(p),!0)};return Y.forEach(Object.keys(Object.assign({},e,t)),function(p){const m=d[p]||o,_=m(e[p],t[p],p);Y.isUndefined(_)&&m!==u||(n[p]=_)}),n}const F1="1.4.0",Bm={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Bm[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const pb={};Bm.transitional=function(t,n,r){function o(a,s){return"[Axios v"+F1+"] Transitional option '"+a+"'"+s+(r?". "+r:"")}return(a,s,u)=>{if(t===!1)throw new je(o(s," has been removed"+(n?" in "+n:"")),je.ERR_DEPRECATED);return n&&!pb[s]&&(pb[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,s,u):!0}};function GA(e,t,n){if(typeof e!="object")throw new je("options must be an object",je.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const a=r[o],s=t[a];if(s){const u=e[a],d=u===void 0||s(u,a,e);if(d!==!0)throw new je("option "+a+" must be "+d,je.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new je("Unknown option "+a,je.ERR_BAD_OPTION)}}const ip={assertOptions:GA,validators:Bm},jr=ip.validators;class Gu{constructor(t){this.defaults=t,this.interceptors={request:new ub,response:new ub}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ia(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:a}=n;r!==void 0&&ip.assertOptions(r,{silentJSONParsing:jr.transitional(jr.boolean),forcedJSONParsing:jr.transitional(jr.boolean),clarifyTimeoutError:jr.transitional(jr.boolean)},!1),o!=null&&(Y.isFunction(o)?n.paramsSerializer={serialize:o}:ip.assertOptions(o,{encode:jr.function,serialize:jr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s;s=a&&Y.merge(a.common,a[n.method]),s&&Y.forEach(["delete","get","head","post","put","patch","common"],y=>{delete a[y]}),n.headers=Pr.concat(s,a);const u=[];let d=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(d=d&&w.synchronous,u.unshift(w.fulfilled,w.rejected))});const f=[];this.interceptors.response.forEach(function(w){f.push(w.fulfilled,w.rejected)});let p,m=0,_;if(!d){const y=[fb.bind(this),void 0];for(y.unshift.apply(y,u),y.push.apply(y,f),_=y.length,p=Promise.resolve(n);m<_;)p=p.then(y[m++],y[m++]);return p}_=u.length;let b=n;for(m=0;m<_;){const y=u[m++],w=u[m++];try{b=y(b)}catch(C){w.call(this,C);break}}try{p=fb.call(this,b)}catch(y){return Promise.reject(y)}for(m=0,_=f.length;m<_;)p=p.then(f[m++],f[m++]);return p}getUri(t){t=ia(this.defaults,t);const n=j1(t.baseURL,t.url);return I1(n,t.params,t.paramsSerializer)}}Y.forEach(["delete","get","head","options"],function(t){Gu.prototype[t]=function(n,r){return this.request(ia(r||{},{method:t,url:n,data:(r||{}).data}))}});Y.forEach(["post","put","patch"],function(t){function n(r){return function(a,s,u){return this.request(ia(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:s}))}}Gu.prototype[t]=n(),Gu.prototype[t+"Form"]=n(!0)});const ru=Gu;class Mm{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(o=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](o);r._listeners=null}),this.promise.then=o=>{let a;const s=new Promise(u=>{r.subscribe(u),a=u}).then(o);return s.cancel=function(){r.unsubscribe(a)},s},t(function(a,s,u){r.reason||(r.reason=new Zs(a,s,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Mm(function(o){t=o}),cancel:t}}}const JA=Mm;function YA(e){return function(n){return e.apply(null,n)}}function XA(e){return Y.isObject(e)&&e.isAxiosError===!0}const ap={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ap).forEach(([e,t])=>{ap[t]=e});const ez=ap;function U1(e){const t=new ru(e),n=k1(ru.prototype.request,t);return Y.extend(n,ru.prototype,t,{allOwnKeys:!0}),Y.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return U1(ia(e,o))},n}const Pt=U1(Im);Pt.Axios=ru;Pt.CanceledError=Zs;Pt.CancelToken=JA;Pt.isCancel=D1;Pt.VERSION=F1;Pt.toFormData=ed;Pt.AxiosError=je;Pt.Cancel=Pt.CanceledError;Pt.all=function(t){return Promise.all(t)};Pt.spread=YA;Pt.isAxiosError=XA;Pt.mergeConfig=ia;Pt.AxiosHeaders=Pr;Pt.formToJSON=e=>M1(Y.isHTMLForm(e)?new FormData(e):e);Pt.HttpStatusCode=ez;Pt.default=Pt;const $1=Pt;function In(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function vo(e){return!!e&&!!e[ot]}function Tr(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var o=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===uz}(e)||Array.isArray(e)||!!e[xb]||!!(!((t=e.constructor)===null||t===void 0)&&t[xb])||Dm(e)||jm(e))}function ti(e,t,n){n===void 0&&(n=!1),ha(e)===0?(n?Object.keys:qi)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,o){return t(o,r,e)})}function ha(e){var t=e[ot];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Dm(e)?2:jm(e)?3:0}function Zi(e,t){return ha(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function tz(e,t){return ha(e)===2?e.get(t):e[t]}function W1(e,t,n){var r=ha(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function H1(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Dm(e){return sz&&e instanceof Map}function jm(e){return lz&&e instanceof Set}function Mo(e){return e.o||e.t}function Fm(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Z1(e);delete t[ot];for(var n=qi(t),r=0;r<n.length;r++){var o=n[r],a=t[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function Um(e,t){return t===void 0&&(t=!1),$m(e)||vo(e)||!Tr(e)||(ha(e)>1&&(e.set=e.add=e.clear=e.delete=nz),Object.freeze(e),t&&ti(e,function(n,r){return Um(r,!0)},!0)),e}function nz(){In(2)}function $m(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function ar(e){var t=cp[e];return t||In(18,e),t}function rz(e,t){cp[e]||(cp[e]=t)}function sp(){return zs}function Of(e,t){t&&(ar("Patches"),e.u=[],e.s=[],e.v=t)}function Ju(e){lp(e),e.p.forEach(oz),e.p=null}function lp(e){e===zs&&(zs=e.l)}function mb(e){return zs={p:[],l:zs,h:e,m:!0,_:0}}function oz(e){var t=e[ot];t.i===0||t.i===1?t.j():t.g=!0}function Lf(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||ar("ES5").S(t,e,r),r?(n[ot].P&&(Ju(t),In(4)),Tr(e)&&(e=Yu(t,e),t.l||Xu(t,e)),t.u&&ar("Patches").M(n[ot].t,e,t.u,t.s)):e=Yu(t,n,[]),Ju(t),t.u&&t.v(t.u,t.s),e!==V1?e:void 0}function Yu(e,t,n){if($m(t))return t;var r=t[ot];if(!r)return ti(t,function(u,d){return _b(e,r,t,u,d,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Xu(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=r.i===4||r.i===5?r.o=Fm(r.k):r.o,a=o,s=!1;r.i===3&&(a=new Set(o),o.clear(),s=!0),ti(a,function(u,d){return _b(e,r,o,u,d,n,s)}),Xu(e,o,!1),n&&e.u&&ar("Patches").N(r,n,e.u,e.s)}return r.o}function _b(e,t,n,r,o,a,s){if(vo(o)){var u=Yu(e,o,a&&t&&t.i!==3&&!Zi(t.R,r)?a.concat(r):void 0);if(W1(n,r,u),!vo(u))return;e.m=!1}else s&&n.add(o);if(Tr(o)&&!$m(o)){if(!e.h.D&&e._<1)return;Yu(e,o),t&&t.A.l||Xu(e,o)}}function Xu(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Um(t,n)}function Tf(e,t){var n=e[ot];return(n?Mo(n):e)[t]}function gb(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Zr(e){e.P||(e.P=!0,e.l&&Zr(e.l))}function Rf(e){e.o||(e.o=Fm(e.t))}function up(e,t,n){var r=Dm(t)?ar("MapSet").F(t,n):jm(t)?ar("MapSet").T(t,n):e.O?function(o,a){var s=Array.isArray(o),u={i:s?1:0,A:a?a.A:sp(),P:!1,I:!1,R:{},l:a,t:o,k:null,o:null,j:null,C:!1},d=u,f=Ns;s&&(d=[u],f=Ka);var p=Proxy.revocable(d,f),m=p.revoke,_=p.proxy;return u.k=_,u.j=m,_}(t,n):ar("ES5").J(t,n);return(n?n.A:sp()).p.push(r),r}function iz(e){return vo(e)||In(22,e),function t(n){if(!Tr(n))return n;var r,o=n[ot],a=ha(n);if(o){if(!o.P&&(o.i<4||!ar("ES5").K(o)))return o.t;o.I=!0,r=vb(n,a),o.I=!1}else r=vb(n,a);return ti(r,function(s,u){o&&tz(o.t,s)===u||W1(r,s,t(u))}),a===3?new Set(r):r}(e)}function vb(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Fm(e)}function az(){function e(a,s){var u=o[a];return u?u.enumerable=s:o[a]=u={configurable:!0,enumerable:s,get:function(){var d=this[ot];return Ns.get(d,a)},set:function(d){var f=this[ot];Ns.set(f,a,d)}},u}function t(a){for(var s=a.length-1;s>=0;s--){var u=a[s][ot];if(!u.P)switch(u.i){case 5:r(u)&&Zr(u);break;case 4:n(u)&&Zr(u)}}}function n(a){for(var s=a.t,u=a.k,d=qi(u),f=d.length-1;f>=0;f--){var p=d[f];if(p!==ot){var m=s[p];if(m===void 0&&!Zi(s,p))return!0;var _=u[p],b=_&&_[ot];if(b?b.t!==m:!H1(_,m))return!0}}var y=!!s[ot];return d.length!==qi(s).length+(y?0:1)}function r(a){var s=a.k;if(s.length!==a.t.length)return!0;var u=Object.getOwnPropertyDescriptor(s,s.length-1);if(u&&!u.get)return!0;for(var d=0;d<s.length;d++)if(!s.hasOwnProperty(d))return!0;return!1}var o={};rz("ES5",{J:function(a,s){var u=Array.isArray(a),d=function(p,m){if(p){for(var _=Array(m.length),b=0;b<m.length;b++)Object.defineProperty(_,""+b,e(b,!0));return _}var y=Z1(m);delete y[ot];for(var w=qi(y),C=0;C<w.length;C++){var g=w[C];y[g]=e(g,p||!!y[g].enumerable)}return Object.create(Object.getPrototypeOf(m),y)}(u,a),f={i:u?5:4,A:s?s.A:sp(),P:!1,I:!1,R:{},l:s,t:a,k:d,o:null,g:!1,C:!1};return Object.defineProperty(d,ot,{value:f,writable:!0}),d},S:function(a,s,u){u?vo(s)&&s[ot].A===a&&t(a.p):(a.u&&function d(f){if(f&&typeof f=="object"){var p=f[ot];if(p){var m=p.t,_=p.k,b=p.R,y=p.i;if(y===4)ti(_,function(k){k!==ot&&(m[k]!==void 0||Zi(m,k)?b[k]||d(_[k]):(b[k]=!0,Zr(p)))}),ti(m,function(k){_[k]!==void 0||Zi(_,k)||(b[k]=!1,Zr(p))});else if(y===5){if(r(p)&&(Zr(p),b.length=!0),_.length<m.length)for(var w=_.length;w<m.length;w++)b[w]=!1;else for(var C=m.length;C<_.length;C++)b[C]=!0;for(var g=Math.min(_.length,m.length),x=0;x<g;x++)_.hasOwnProperty(x)||(b[x]=!0),b[x]===void 0&&d(_[x])}}}}(a.p[0]),t(a.p))},K:function(a){return a.i===4?n(a):r(a)}})}var yb,zs,Wm=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",sz=typeof Map<"u",lz=typeof Set<"u",bb=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",V1=Wm?Symbol.for("immer-nothing"):((yb={})["immer-nothing"]=!0,yb),xb=Wm?Symbol.for("immer-draftable"):"__$immer_draftable",ot=Wm?Symbol.for("immer-state"):"__$immer_state",uz=""+Object.prototype.constructor,qi=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Z1=Object.getOwnPropertyDescriptors||function(e){var t={};return qi(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},cp={},Ns={get:function(e,t){if(t===ot)return e;var n=Mo(e);if(!Zi(n,t))return function(o,a,s){var u,d=gb(a,s);return d?"value"in d?d.value:(u=d.get)===null||u===void 0?void 0:u.call(o.k):void 0}(e,n,t);var r=n[t];return e.I||!Tr(r)?r:r===Tf(e.t,t)?(Rf(e),e.o[t]=up(e.A.h,r,e)):r},has:function(e,t){return t in Mo(e)},ownKeys:function(e){return Reflect.ownKeys(Mo(e))},set:function(e,t,n){var r=gb(Mo(e),t);if(r?.set)return r.set.call(e.k,n),!0;if(!e.P){var o=Tf(Mo(e),t),a=o?.[ot];if(a&&a.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(H1(n,o)&&(n!==void 0||Zi(e.t,t)))return!0;Rf(e),Zr(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Tf(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Rf(e),Zr(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Mo(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){In(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){In(12)}},Ka={};ti(Ns,function(e,t){Ka[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Ka.deleteProperty=function(e,t){return Ka.set.call(this,e,t,void 0)},Ka.set=function(e,t,n){return Ns.set.call(this,e[0],t,n,e[0])};var cz=function(){function e(n){var r=this;this.O=bb,this.D=!0,this.produce=function(o,a,s){if(typeof o=="function"&&typeof a!="function"){var u=a;a=o;var d=r;return function(w){var C=this;w===void 0&&(w=u);for(var g=arguments.length,x=Array(g>1?g-1:0),k=1;k<g;k++)x[k-1]=arguments[k];return d.produce(w,function(P){var T;return(T=a).call.apply(T,[C,P].concat(x))})}}var f;if(typeof a!="function"&&In(6),s!==void 0&&typeof s!="function"&&In(7),Tr(o)){var p=mb(r),m=up(r,o,void 0),_=!0;try{f=a(m),_=!1}finally{_?Ju(p):lp(p)}return typeof Promise<"u"&&f instanceof Promise?f.then(function(w){return Of(p,s),Lf(w,p)},function(w){throw Ju(p),w}):(Of(p,s),Lf(f,p))}if(!o||typeof o!="object"){if((f=a(o))===void 0&&(f=o),f===V1&&(f=void 0),r.D&&Um(f,!0),s){var b=[],y=[];ar("Patches").M(o,f,b,y),s(b,y)}return f}In(21,o)},this.produceWithPatches=function(o,a){if(typeof o=="function")return function(f){for(var p=arguments.length,m=Array(p>1?p-1:0),_=1;_<p;_++)m[_-1]=arguments[_];return r.produceWithPatches(f,function(b){return o.apply(void 0,[b].concat(m))})};var s,u,d=r.produce(o,a,function(f,p){s=f,u=p});return typeof Promise<"u"&&d instanceof Promise?d.then(function(f){return[f,s,u]}):[d,s,u]},typeof n?.useProxies=="boolean"&&this.setUseProxies(n.useProxies),typeof n?.autoFreeze=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Tr(n)||In(8),vo(n)&&(n=iz(n));var r=mb(this),o=up(this,n,void 0);return o[ot].C=!0,lp(r),o},t.finishDraft=function(n,r){var o=n&&n[ot],a=o.A;return Of(a,r),Lf(void 0,a)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!bb&&In(20),this.O=n},t.applyPatches=function(n,r){var o;for(o=r.length-1;o>=0;o--){var a=r[o];if(a.path.length===0&&a.op==="replace"){n=a.value;break}}o>-1&&(r=r.slice(o+1));var s=ar("Patches").$;return vo(n)?s(n,r):this.produce(n,function(u){return s(u,r)})},e}(),un=new cz,q1=un.produce;un.produceWithPatches.bind(un);un.setAutoFreeze.bind(un);un.setUseProxies.bind(un);un.applyPatches.bind(un);un.createDraft.bind(un);un.finishDraft.bind(un);function wb(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function kb(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wb(Object(n),!0).forEach(function(r){Un(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wb(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Mt(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Sb=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Af=function(){return Math.random().toString(36).substring(7).split("").join(".")},ec={INIT:"@@redux/INIT"+Af(),REPLACE:"@@redux/REPLACE"+Af(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Af()}};function dz(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function K1(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Mt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Mt(1));return n(K1)(e,t)}if(typeof e!="function")throw new Error(Mt(2));var o=e,a=t,s=[],u=s,d=!1;function f(){u===s&&(u=s.slice())}function p(){if(d)throw new Error(Mt(3));return a}function m(w){if(typeof w!="function")throw new Error(Mt(4));if(d)throw new Error(Mt(5));var C=!0;return f(),u.push(w),function(){if(C){if(d)throw new Error(Mt(6));C=!1,f();var x=u.indexOf(w);u.splice(x,1),s=null}}}function _(w){if(!dz(w))throw new Error(Mt(7));if(typeof w.type>"u")throw new Error(Mt(8));if(d)throw new Error(Mt(9));try{d=!0,a=o(a,w)}finally{d=!1}for(var C=s=u,g=0;g<C.length;g++){var x=C[g];x()}return w}function b(w){if(typeof w!="function")throw new Error(Mt(10));o=w,_({type:ec.REPLACE})}function y(){var w,C=m;return w={subscribe:function(x){if(typeof x!="object"||x===null)throw new Error(Mt(11));function k(){x.next&&x.next(p())}k();var P=C(k);return{unsubscribe:P}}},w[Sb]=function(){return this},w}return _({type:ec.INIT}),r={dispatch:_,subscribe:m,getState:p,replaceReducer:b},r[Sb]=y,r}function fz(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:ec.INIT});if(typeof r>"u")throw new Error(Mt(12));if(typeof n(void 0,{type:ec.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Mt(13))})}function hz(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];typeof e[o]=="function"&&(n[o]=e[o])}var a=Object.keys(n),s;try{fz(n)}catch(u){s=u}return function(d,f){if(d===void 0&&(d={}),s)throw s;for(var p=!1,m={},_=0;_<a.length;_++){var b=a[_],y=n[b],w=d[b],C=y(w,f);if(typeof C>"u")throw f&&f.type,new Error(Mt(14));m[b]=C,p=p||C!==w}return p=p||a.length!==Object.keys(d).length,p?m:d}}function tc(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,o){return function(){return r(o.apply(void 0,arguments))}})}function pz(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var o=r.apply(void 0,arguments),a=function(){throw new Error(Mt(15))},s={getState:o.getState,dispatch:function(){return a.apply(void 0,arguments)}},u=t.map(function(d){return d(s)});return a=tc.apply(void 0,u)(o.dispatch),kb(kb({},o),{},{dispatch:a})}}}function Q1(e){var t=function(r){var o=r.dispatch,a=r.getState;return function(s){return function(u){return typeof u=="function"?u(o,a,e):s(u)}}};return t}var G1=Q1();G1.withExtraArgument=Q1;const Pb=G1;var J1=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(r[a]=o[a])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),mz=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,o,a,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(f){return function(p){return d([f,p])}}function d(f){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(a=f[0]&2?o.return:f[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,f[1])).done)return a;switch(o=0,a&&(f=[f[0]&2,a.value]),f[0]){case 0:case 1:a=f;break;case 4:return n.label++,{value:f[1],done:!1};case 5:n.label++,o=f[1],f=[0];continue;case 7:f=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(f[0]===6||f[0]===2)){n=0;continue}if(f[0]===3&&(!a||f[1]>a[0]&&f[1]<a[3])){n.label=f[1];break}if(f[0]===6&&n.label<a[1]){n.label=a[1],a=f;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(f);break}a[2]&&n.ops.pop(),n.trys.pop();continue}f=t.call(e,n)}catch(p){f=[6,p],o=0}finally{r=a=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}},aa=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},_z=Object.defineProperty,gz=Object.defineProperties,vz=Object.getOwnPropertyDescriptors,Cb=Object.getOwnPropertySymbols,yz=Object.prototype.hasOwnProperty,bz=Object.prototype.propertyIsEnumerable,Eb=function(e,t,n){return t in e?_z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},co=function(e,t){for(var n in t||(t={}))yz.call(t,n)&&Eb(e,n,t[n]);if(Cb)for(var r=0,o=Cb(t);r<o.length;r++){var n=o[r];bz.call(t,n)&&Eb(e,n,t[n])}return e},zf=function(e,t){return gz(e,vz(t))},xz=function(e,t,n){return new Promise(function(r,o){var a=function(d){try{u(n.next(d))}catch(f){o(f)}},s=function(d){try{u(n.throw(d))}catch(f){o(f)}},u=function(d){return d.done?r(d.value):Promise.resolve(d.value).then(a,s)};u((n=n.apply(e,t)).next())})},wz=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?tc:tc.apply(null,arguments)};function kz(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var Sz=function(e){J1(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,aa([void 0],n[0].concat(this)))):new(t.bind.apply(t,aa([void 0],n.concat(this))))},t}(Array),Pz=function(e){J1(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,aa([void 0],n[0].concat(this)))):new(t.bind.apply(t,aa([void 0],n.concat(this))))},t}(Array);function dp(e){return Tr(e)?q1(e,function(){}):e}function Cz(e){return typeof e=="boolean"}function Ez(){return function(t){return Oz(t)}}function Oz(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new Sz;return n&&(Cz(n)?r.push(Pb):r.push(Pb.withExtraArgument(n.extraArgument))),r}var Lz=!0;function Tz(e){var t=Ez(),n=e||{},r=n.reducer,o=r===void 0?void 0:r,a=n.middleware,s=a===void 0?t():a,u=n.devTools,d=u===void 0?!0:u,f=n.preloadedState,p=f===void 0?void 0:f,m=n.enhancers,_=m===void 0?void 0:m,b;if(typeof o=="function")b=o;else if(kz(o))b=hz(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var y=s;typeof y=="function"&&(y=y(t));var w=pz.apply(void 0,y),C=tc;d&&(C=wz(co({trace:!Lz},typeof d=="object"&&d)));var g=new Pz(w),x=g;Array.isArray(_)?x=aa([w],_):typeof _=="function"&&(x=_(g));var k=C.apply(void 0,x);return K1(b,p,k)}function fo(e,t){function n(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(t){var a=t.apply(void 0,r);if(!a)throw new Error("prepareAction did not return an object");return co(co({type:e,payload:a.payload},"meta"in a&&{meta:a.meta}),"error"in a&&{error:a.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function Y1(e){var t={},n=[],r,o={addCase:function(a,s){var u=typeof a=="string"?a:a.type;if(u in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[u]=s,o},addMatcher:function(a,s){return n.push({matcher:a,reducer:s}),o},addDefaultCase:function(a){return r=a,o}};return e(o),[t,n,r]}function Rz(e){return typeof e=="function"}function Az(e,t,n,r){n===void 0&&(n=[]);var o=typeof t=="function"?Y1(t):[t,n,r],a=o[0],s=o[1],u=o[2],d;if(Rz(e))d=function(){return dp(e())};else{var f=dp(e);d=function(){return f}}function p(m,_){m===void 0&&(m=d());var b=aa([a[_.type]],s.filter(function(y){var w=y.matcher;return w(_)}).map(function(y){var w=y.reducer;return w}));return b.filter(function(y){return!!y}).length===0&&(b=[u]),b.reduce(function(y,w){if(w)if(vo(y)){var C=y,g=w(C,_);return g===void 0?y:g}else{if(Tr(y))return q1(y,function(x){return w(x,_)});var g=w(y,_);if(g===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}return y},m)}return p.getInitialState=d,p}function zz(e,t){return e+"/"+t}function Nz(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:dp(e.initialState),r=e.reducers||{},o=Object.keys(r),a={},s={},u={};o.forEach(function(p){var m=r[p],_=zz(t,p),b,y;"reducer"in m?(b=m.reducer,y=m.prepare):b=m,a[p]=b,s[_]=b,u[p]=y?fo(_,y):fo(_)});function d(){var p=typeof e.extraReducers=="function"?Y1(e.extraReducers):[e.extraReducers],m=p[0],_=m===void 0?{}:m,b=p[1],y=b===void 0?[]:b,w=p[2],C=w===void 0?void 0:w,g=co(co({},_),s);return Az(n,function(x){for(var k in g)x.addCase(k,g[k]);for(var P=0,T=y;P<T.length;P++){var A=T[P];x.addMatcher(A.matcher,A.reducer)}C&&x.addDefaultCase(C)})}var f;return{name:t,reducer:function(p,m){return f||(f=d()),f(p,m)},actions:u,caseReducers:a,getInitialState:function(){return f||(f=d()),f.getInitialState()}}}var Iz="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Bz=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=Iz[Math.random()*64|0];return t},Mz=["name","message","stack","code"],Nf=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Ob=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Dz=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=Mz;n<r.length;n++){var o=r[n];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}},X1=function(){function e(t,n,r){var o=fo(t+"/fulfilled",function(f,p,m,_){return{payload:f,meta:zf(co({},_||{}),{arg:m,requestId:p,requestStatus:"fulfilled"})}}),a=fo(t+"/pending",function(f,p,m){return{payload:void 0,meta:zf(co({},m||{}),{arg:p,requestId:f,requestStatus:"pending"})}}),s=fo(t+"/rejected",function(f,p,m,_,b){return{payload:_,error:(r&&r.serializeError||Dz)(f||"Rejected"),meta:zf(co({},b||{}),{arg:m,requestId:p,rejectedWithValue:!!_,requestStatus:"rejected",aborted:f?.name==="AbortError",condition:f?.name==="ConditionError"})}}),u=typeof AbortController<"u"?AbortController:function(){function f(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return f.prototype.abort=function(){},f}();function d(f){return function(p,m,_){var b=r?.idGenerator?r.idGenerator(f):Bz(),y=new u,w;function C(x){w=x,y.abort()}var g=function(){return xz(this,null,function(){var x,k,P,T,A,I,F;return mz(this,function(W){switch(W.label){case 0:return W.trys.push([0,4,,5]),T=(x=r?.condition)==null?void 0:x.call(r,f,{getState:m,extra:_}),Fz(T)?[4,T]:[3,2];case 1:T=W.sent(),W.label=2;case 2:if(T===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return A=new Promise(function(B,G){return y.signal.addEventListener("abort",function(){return G({name:"AbortError",message:w||"Aborted"})})}),p(a(b,f,(k=r?.getPendingMeta)==null?void 0:k.call(r,{requestId:b,arg:f},{getState:m,extra:_}))),[4,Promise.race([A,Promise.resolve(n(f,{dispatch:p,getState:m,extra:_,requestId:b,signal:y.signal,abort:C,rejectWithValue:function(B,G){return new Nf(B,G)},fulfillWithValue:function(B,G){return new Ob(B,G)}})).then(function(B){if(B instanceof Nf)throw B;return B instanceof Ob?o(B.payload,b,f,B.meta):o(B,b,f)})])];case 3:return P=W.sent(),[3,5];case 4:return I=W.sent(),P=I instanceof Nf?s(null,b,f,I.payload,I.meta):s(I,b,f),[3,5];case 5:return F=r&&!r.dispatchConditionRejection&&s.match(P)&&P.meta.condition,F||p(P),[2,P]}})})}();return Object.assign(g,{abort:C,requestId:b,arg:f,unwrap:function(){return g.then(jz)}})}}return Object.assign(d,{pending:a,rejected:s,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e}();function jz(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Fz(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Hm="listenerMiddleware";fo(Hm+"/add");fo(Hm+"/removeAll");fo(Hm+"/remove");var Lb;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);az();const Uz={loading:!0,brandloading:!0,evList:{evs:[],count:0},search:{name:"",sortOrder:"Name",evType:[],brands:[],seatConfiguration:[],seatMassageFirstRow:!1,seatMassageSecondRow:!1,seatVentilationFirstRow:!1,seatVentilationSecondRow:!1,allWheelDrive:!1,nightVision:!1,adaptiveSuspension:!1,airSuspension:!1,instrumentCluster:!1,headUpDisplay:!1,androidAuto:!1,appleCarPlay:!1,colors:[],fWD:!1,rWD:!1,rearAxleSteering:!1,adaptiveCruiseControl:!1,autoSteer:!1,automaticParking:!1,blindSpotMonitoring:!1,automatedLaneChange:!1,driverDrowsinessDetection:!1,driverMonitoringSystem:!1,rearCrossTrafficAlert:!1,exitWarning:!1,trafficSignRecognition:!1,efficiencyAssist:!1},searchOptions:{brands:["Audi","BMW","BYD","CUPRA","Hongqi","Hyundai","Kia","Lucid","Mercedes","Nio","Nissan","Porsche","SKODA","Tesla","Toyota","Volkswagen"],seatConfig:[],bodyTypes:["Sedan"],seatConfiguration:["5 seat"],colors:["Red"]},error:""},fp=X1("evsearch/fetchEvs",async e=>{const t=window.location.href;let n="https://api.evkx.net/api/Ev";return t.startsWith("http://localhost")&&(n="https://localhost:7033/api/Ev"),await $1.post(n,e,{headers:{"Content-Type":"application/json"}}).then(r=>r.data).catch(r=>{console.error("error",r)})}),hp=X1("evsearch/fetchSearchOptions",async()=>{const e=window.location.href;let t="https://api.evkx.net/api/searchoptions";return e.startsWith("http://localhost")&&(t="https://localhost:7033/api/searchoptions"),await $1.get(t).then(n=>n.data).catch(n=>{console.error("error",n)})}),ek=Nz({name:"evsearch",initialState:Uz,reducers:{updateSortOrder:(e,t)=>{e.search.sortOrder=t.payload},updateEvType:(e,t)=>{const n=t.payload;e.search.evType=n},updateBrands:(e,t)=>{const n=t.payload;e.search.brands=n},updateSeatConfig:(e,t)=>{const n=t.payload;e.search.seatConfiguration=n},updateAllWheelDrive:(e,t)=>{const n=t.payload;e.search.allWheelDrive=n},updateRWD:(e,t)=>{e.search.rWD=t.payload},updateFWD:(e,t)=>{e.search.fWD=t.payload},updateRearAxleSteering:(e,t)=>{e.search.rearAxleSteering=t.payload},updateNightVision:(e,t)=>{const n=t.payload;e.search.nightVision=n},updateAdaptiveDamping:(e,t)=>{const n=t.payload;e.search.adaptiveSuspension=n},updateAdaptiveAirSuspension:(e,t)=>{e.search.airSuspension=t.payload},updateInstrumentCluster:(e,t)=>{const n=t.payload;e.search.instrumentCluster=n},updateHeadUpDisplay:(e,t)=>{const n=t.payload;e.search.headUpDisplay=n},updateAndroidAuto:(e,t)=>{const n=t.payload;e.search.androidAuto=n},updateAppleCarPlay:(e,t)=>{const n=t.payload;e.search.appleCarPlay=n},updateAdaptiveCruiseControl:(e,t)=>{e.search.adaptiveCruiseControl=t.payload},updateAutoSteer:(e,t)=>{e.search.autoSteer=t.payload},updateColors:(e,t)=>{const n=t.payload;e.search.colors=n},updateSortOrderFromParam:(e,t)=>{e.search.sortOrder=t.payload}},extraReducers:e=>{e.addCase(fp.fulfilled,(t,n)=>{const r=n.payload;t.evList=r,t.loading=!1}).addCase(fp.rejected,(t,n)=>{t.error=n.error.message}).addCase(hp.fulfilled,(t,n)=>{const r=n.payload;t.searchOptions=r,t.brandloading=!1}).addCase(hp.rejected,(t,n)=>{t.error=n.error.message})}}),$z=ek.reducer,{updateSortOrder:Wz,updateEvType:Hz,updateBrands:Vz,updateSeatConfig:Zz,updateAllWheelDrive:qz,updateNightVision:Kz,updateAdaptiveDamping:Qz,updateAdaptiveAirSuspension:Gz,updateInstrumentCluster:Jz,updateHeadUpDisplay:Yz,updateAndroidAuto:Xz,updateAppleCarPlay:eN,updateColors:tN,updateFWD:nN,updateRWD:rN,updateRearAxleSteering:oN,updateSortOrderFromParam:MN,updateAdaptiveCruiseControl:iN,updateAutoSteer:aN}=ek.actions,gr=sE,sN=()=>CE(),lN="_pageContainer_kmlfw_3",uN="_exitButton_kmlfw_71",cN={pageContainer:lN,exitButton:uN},dN=({children:e})=>(p2(),_m("common"),te.jsx("div",{className:cN.pageContainer,children:te.jsx("div",{children:e})})),fN="_evsearchAccordionContent_f6igx_1",hN="_evText_f6igx_11",pN="_scopeItems_f6igx_19",mN="_line_f6igx_27",_N="_contentTexts_f6igx_37",gN="_bottomContentTexts_f6igx_47",vN="_thumb_f6igx_55",yN="_card_f6igx_73",bN="_cards_f6igx_81",xN="_thumbcontainer_f6igx_105",xi={evsearchAccordionContent:fN,evText:hN,scopeItems:pN,line:mN,contentTexts:_N,bottomContentTexts:gN,thumb:vN,card:yN,cards:bN,thumbcontainer:xN},wN=({title:e="No info",subtitle:t="No info",maxPower:n=0,topSpeedKph:r=0,infoUri:o="",netBattery:a=0,wltpConsumption:s=0,wltpRange:u=0,zeroTo100:d=0,thumbUri:f="",maxDcChargingSpeed:p=0,averageDcChargingSpeed:m=0})=>{const[_,b]=E.useState(!1);return te.jsx("div",{children:te.jsx(er,{onClick:()=>{b(!_)},children:te.jsxs(er.Item,{children:[te.jsxs(er.Header,{children:[e," ",t]}),te.jsx(er.Content,{children:te.jsx("div",{className:xi.evsearchAccordionContent,children:te.jsxs("div",{className:xi.cards,children:[te.jsx("div",{className:xi.card,children:te.jsx("div",{className:xi.thumbcontainer,children:te.jsx("img",{src:f,alt:e,className:xi.thumb})})}),te.jsxs("div",{className:xi.card,children:["Read our ",te.jsx("a",{href:o,children:"full article"}),", see all"," ",te.jsx("a",{href:o+"specifications/",children:"specifications"}),", or see our"," ",te.jsx("a",{href:o+"gallery/",children:"image gallery"}),".",te.jsx("br",{}),te.jsx("br",{}),te.jsxs(ER,{borderStyle:"dashed",children:[te.jsxs(zo,{children:[te.jsx("b",{children:Ro("evsearch.specwltprange")})," - ",u," km"]}),te.jsxs(zo,{children:[te.jsx("b",{children:Ro("evsearch.specwltpconsumption")})," - ",s," kWh/100km"]}),te.jsxs(zo,{children:[te.jsx("b",{children:Ro("evsearch.specnetbattery")})," - ",a," kWh"]}),te.jsxs(zo,{children:[te.jsx("b",{children:Ro("evsearch.zeroto100")})," - ",d," seconds"]}),te.jsxs(zo,{children:[te.jsx("b",{children:Ro("evsearch.topspeed")}),"- ",r," km/h"]}),te.jsxs(zo,{children:[te.jsx("b",{children:Ro("evsearch.maxpower")})," - ",n," kW"]}),te.jsxs(zo,{children:[te.jsx("b",{children:Ro("evsearch.chargingspeed")})," - ",p,"/",m," kW"]})]})]})]})})})]})})})},kN="_pageContent_1gqfc_1",SN="_pageContentContainer_1gqfc_19",PN="_resultInfo_1gqfc_33",CN="_searchinput_1gqfc_45",EN="_searchinfo_1gqfc_53",ON="_searchinfoContent_1gqfc_63",Wa={pageContent:kN,pageContentContainer:SN,resultInfo:PN,searchinput:CN,searchinfo:EN,searchinfoContent:ON},Tb=()=>{const{t:e}=_m("common"),t=gr(D=>D.evsearchResult.loading),n=sN(),r=async()=>await n(hp()),o=gr(D=>D.evsearchResult.evList.evs),a=gr(D=>D.evsearchResult.evList.count),s=gr(D=>D.evsearchResult.searchOptions.bodyTypes),u=gr(D=>D.evsearchResult.searchOptions.colors),d=gr(D=>D.evsearchResult.searchOptions.seatConfiguration),f=gr(D=>D.evsearchResult.searchOptions.brands),p=gr(D=>D.evsearchResult.search),m=async D=>await n(fp(D)),_=gr(D=>D.evsearchResult.error);E.useEffect(()=>{t&&(r(),m(p))},[]),E.useEffect(()=>{t||m(p)},[p]);const b=D=>{n(Wz(D))},y=D=>{n(Vz(D))},w=f.map(D=>({label:D,value:D})),C=D=>{n(Hz(D))},g=D=>{n(Zz(D))},x=D=>{n(qz(D.target.checked))},k=D=>{n(rN(D.target.checked))},P=D=>{n(nN(D.target.checked))},T=D=>{n(oN(D.target.checked))},A=D=>{n(Kz(D.target.checked))},I=D=>{n(Qz(D.target.checked))},F=D=>{n(Gz(D.target.checked))},W=D=>{n(Jz(D.target.checked))},B=D=>{n(Yz(D.target.checked))},G=D=>{n(eN(D.target.checked))},J=D=>{n(iN(D.target.checked))},ee=D=>{n(aN(D.target.checked))},V=D=>{n(Xz(D.target.checked))},le=D=>{n(tN(D))},X=()=>_?te.jsx(gL,{title:e("api_delegation.data_retrieval_failed"),variant:Qr.Error,forceMobileLayout:!0,children:te.jsxs("div",{children:[e("api_delegation.error_message"),": ",_]})}):t?te.jsx("center",{children:te.jsx(CR,{title:"Spinner",size:"3xLarge",variant:"interaction"})}):o.map((D,z)=>te.jsx(wN,{title:D.name,subtitle:D.sortValue+" "+D.sortParameter,maxPower:D.maxPowerKw,topSpeedKph:D.topSpeedKph,infoUri:D.infoUri,wltpConsumption:D.wltpConsumption,wltpRange:D.wltpRange,netBattery:D.netBattery,zeroTo100:D.zeroTo100,thumbUri:D.thumbUri,averageDcChargingSpeed:D.averageDcChargingSpeed,maxDcChargingSpeed:D.maxDcChargingSpeed},z));return te.jsx(dN,{children:te.jsx(bL,{children:te.jsxs(lf,{children:[te.jsxs("div",{className:Wa.pageContent,children:[te.jsx(w1,{size:"large",children:"Welcome to EVKX EV Search"}),te.jsxs(LR,{size:"medium",children:["EVKX offers the most comprehensive search for EVs.",te.jsx("br",{}),"You can search and sort on a whole lot of parameters. ",te.jsx("br",{}),"Please read our ",te.jsx("a",{href:"/guides/evsearch/",children:"search guide"}),te.jsx("br",{}),te.jsx("br",{})]}),te.jsx(np,{label:String(e("evsearch.brandfilter")),multiple:!0,onChange:y,options:w}),te.jsx("br",{}),te.jsx(Xl,{"data-testid":"evsearch-evtype",variant:ss.Horizontal,onChange:D=>{C(D)},compact:!0,legend:"Select body type",items:s.map(D=>({label:D,name:D,checked:p.evType===void 0||p.evType.includes(D)}))}),te.jsx("br",{}),te.jsx(Vw,{items:[{content:te.jsx(Xl,{"data-testid":"evsearch-seatconfig",variant:ss.Horizontal,onChange:D=>{g(D)},compact:!0,legend:"Number of seats",items:d.map(D=>({label:D,name:D,checked:p.seatConfiguration===void 0||p.seatConfiguration.includes(D)}))}),name:"Seats"},{content:te.jsxs(lf,{children:[te.jsx($t,{checked:p.allWheelDrive,label:"All wheel drive",onChange:x,compact:!0}),te.jsx("br",{}),te.jsx($t,{checked:p.rWD,label:"RWD",onChange:k,compact:!0}),te.jsx("br",{}),te.jsx($t,{checked:p.fWD,label:"FWD",onChange:P,compact:!0}),te.jsx("br",{}),te.jsx($t,{checked:p.adaptiveSuspension,label:"Adaptive Suspension",onChange:I,compact:!0}),te.jsx("br",{}),te.jsx($t,{checked:p.airSuspension,label:"Air Suspension",onChange:F,compact:!0}),te.jsx("br",{}),te.jsx($t,{checked:p.rearAxleSteering,label:"Rear Axle Steering",onChange:T,compact:!0})]}),name:"Drivetrain"},{content:te.jsxs(lf,{children:[te.jsx($t,{checked:p.nightVision,label:"Nightvision",onChange:A,compact:!0}),te.jsx("br",{}),te.jsx($t,{checked:p.adaptiveCruiseControl,label:"AdaptiveCruiseControl",onChange:J,compact:!0}),te.jsx("br",{}),te.jsx($t,{checked:p.autoSteer,label:"Autosteer",onChange:ee,compact:!0}),te.jsx("br",{}),"Read more about Adavanced Driver Assist Systems in our"," ",te.jsx("a",{href:"../technology/driverassistance/",children:"technology section"})]}),name:"Driver Assistance"},{content:te.jsx(Xl,{"data-testid":"evsearch-evtype",variant:ss.Horizontal,onChange:D=>{le(D)},compact:!0,legend:"Select paint color",items:u.map(D=>({label:D,name:D,checked:p.colors===void 0||p.colors.includes(D)}))}),name:"Exterior"},{content:te.jsxs("div",{children:[te.jsx($t,{checked:p.headUpDisplay,label:"Head Up Display",onChange:B,compact:!0}),te.jsx("br",{}),te.jsx($t,{checked:p.instrumentCluster,label:"Dedicated Instrument Cluster",onChange:W,compact:!0}),te.jsx("br",{}),te.jsx($t,{checked:p.androidAuto,label:"Android Auto Support",onChange:V,compact:!0}),te.jsx("br",{}),te.jsx($t,{checked:p.appleCarPlay,label:"Apple Car Play Support",onChange:G,compact:!0})]}),name:"UI & Interface"}]}),te.jsx(np,{label:String(e("evsearch.sortorder")),multiple:!1,onChange:b,options:[{label:String(e("evsearch.sortorderbrand")),value:"Name"},{label:String(e("evsearch.specwltprange")),value:"RangeMinimumWltp"},{label:String(e("evsearch.specwltpconsumption")),value:"WltpBasicConsumption"},{label:String(e("evsearch.sortordernetsize")),value:"NetBattery"},{label:String(e("evsearch.sortordernetsizedesc")),value:"NetBatteryDesc"},{label:String(e("evsearch.maxpowersort")),value:"PowerDesc"},{label:String(e("evsearch.topspeedsort")),value:"TopSpeedDesc"},{label:String(e("evsearch.maxdcchargingsort")),value:"MaxDCCharging"},{label:String(e("evsearch.averagechargingspeed0100")),value:"AverageChargingSpeedDesc"},{label:String(e("evsearch.averagechargingspeed10100")),value:"AverageChargingSpeed10100Desc"},{label:String(e("evsearch.averagechargingspeed1080")),value:"AverageChargingSpeed1080Desc"},{label:String(e("evsearch.sort0100kmh")),value:"ZeroTo100"},{label:String(e("evsearch.sort1000kmdrivingtime")),value:"DrivingTime1000kmChallenge"},{label:String(e("evsearch.sort1000kmaveragespeed")),value:"AverageSpeed1000kmChallengeDesc"},{label:String(e("evsearch.travelspeedwltpcyclus")),value:"TravelSpeedWltpDesc"},{label:String(e("evsearch.travelspeed120kmh")),value:"TravelSpeed120kmhDesc"},{label:String(e("evsearch.nominalvoltagesort")),value:"NominalVoltage"},{label:String(e("evsearch.trunksize")),value:"TrunkSizeDesc"},{label:String(e("evsearch.maxtrunksize")),value:"MaxTrunkSizeDesc"},{label:String(e("evsearch.maxload")),value:"MaxLoadDesc"},{label:String(e("evsearch.maxtrailer")),value:"MaxTrailerSizeDesc"},{label:String(e("evsearch.maxgroundclearance")),value:"MaxGroundClearanceDesc"},{label:String(e("evsearch.mingroundclearance")),value:"MinGroundClearance"},{label:String(e("evsearch.suspensionheightadjustment")),value:"SuspensionHeightAdjustment"}]})]}),te.jsx("div",{className:Wa.pageContentAccordionsContainer,children:te.jsxs("div",{className:Wa.apiAccordions,children:[te.jsxs("h4",{className:Wa.resultInfo,children:[a," ",e("evsearch.searchresult"),":"]}),te.jsx("div",{className:Wa.accordionScrollContainer,children:X()})]})})]})})})},LN=R2([{path:"/",errorElement:te.jsx(af,{})},{path:"evsearch",element:te.jsx(Tb,{}),errorElement:te.jsx(af,{})},{path:"nb/evsearch",element:te.jsx(Tb,{}),errorElement:te.jsx(af,{})}],{basename:"/"}),TN={backendApiUrl:new URL(window.location.href).origin+"/api/",defaultLocale:"no_nb"},ou={backendApiUrl:{}.VITE_BACKEND_API_URL,defaultLocale:{}.VITE_DEFAULT_LOCALE};for(const e in ou)ou[e]===void 0&&delete ou[e];const RN={...TN,...ou};function AN(e){return RN[e]}const zN=({children:e})=>{const{i18n:t}=_m("common"),n=window.location.href;let r="en";n.includes("nb/")&&(r="no_nb");const a=`/public/localizations/${r}.json`,s=new URL(a,import.meta.url).href;return OO("Localizations",async()=>{const d=await(await fetch(s)).json();Ut.addResourceBundle(t.language,"common",d)},{staleTime:1/0,suspense:!0}),te.jsx(te.Fragment,{children:e})};var nc={},NN={get exports(){return nc},set exports(e){nc=e}};(function(e,t){(function(n,r){r(t)})(wi,function(n){function r(O,N){O.super_=N,O.prototype=Object.create(N.prototype,{constructor:{value:O,enumerable:!1,writable:!0,configurable:!0}})}function o(O,N){Object.defineProperty(this,"kind",{value:O,enumerable:!0}),N&&N.length&&Object.defineProperty(this,"path",{value:N,enumerable:!0})}function a(O,N,M){a.super_.call(this,"E",O),Object.defineProperty(this,"lhs",{value:N,enumerable:!0}),Object.defineProperty(this,"rhs",{value:M,enumerable:!0})}function s(O,N){s.super_.call(this,"N",O),Object.defineProperty(this,"rhs",{value:N,enumerable:!0})}function u(O,N){u.super_.call(this,"D",O),Object.defineProperty(this,"lhs",{value:N,enumerable:!0})}function d(O,N,M){d.super_.call(this,"A",O),Object.defineProperty(this,"index",{value:N,enumerable:!0}),Object.defineProperty(this,"item",{value:M,enumerable:!0})}function f(O,N,M){var Q=O.slice((M||N)+1||O.length);return O.length=N<0?O.length+N:N,O.push.apply(O,Q),O}function p(O){var N=typeof O>"u"?"undefined":le(O);return N!=="object"?N:O===Math?"math":O===null?"null":Array.isArray(O)?"array":Object.prototype.toString.call(O)==="[object Date]"?"date":typeof O.toString=="function"&&/^\/.*\//.test(O.toString())?"regexp":"object"}function m(O,N,M,Q,ne,ue,he){ne=ne||[],he=he||[];var be=ne.slice(0);if(typeof ue<"u"){if(Q){if(typeof Q=="function"&&Q(be,ue))return;if((typeof Q>"u"?"undefined":le(Q))==="object"){if(Q.prefilter&&Q.prefilter(be,ue))return;if(Q.normalize){var Je=Q.normalize(be,ue,O,N);Je&&(O=Je[0],N=Je[1])}}}be.push(ue)}p(O)==="regexp"&&p(N)==="regexp"&&(O=O.toString(),N=N.toString());var Ze=typeof O>"u"?"undefined":le(O),Le=typeof N>"u"?"undefined":le(N),ae=Ze!=="undefined"||he&&he[he.length-1].lhs&&he[he.length-1].lhs.hasOwnProperty(ue),me=Le!=="undefined"||he&&he[he.length-1].rhs&&he[he.length-1].rhs.hasOwnProperty(ue);if(!ae&&me)M(new s(be,N));else if(!me&&ae)M(new u(be,O));else if(p(O)!==p(N))M(new a(be,O,N));else if(p(O)==="date"&&O-N!==0)M(new a(be,O,N));else if(Ze==="object"&&O!==null&&N!==null)if(he.filter(function(_e){return _e.lhs===O}).length)O!==N&&M(new a(be,O,N));else{if(he.push({lhs:O,rhs:N}),Array.isArray(O)){var K;for(O.length,K=0;K<O.length;K++)K>=N.length?M(new d(be,K,new u(void 0,O[K]))):m(O[K],N[K],M,Q,be,K,he);for(;K<N.length;)M(new d(be,K,new s(void 0,N[K++])))}else{var ce=Object.keys(O),de=Object.keys(N);ce.forEach(function(_e,Se){var Ie=de.indexOf(_e);Ie>=0?(m(O[_e],N[_e],M,Q,be,_e,he),de=f(de,Ie)):m(O[_e],void 0,M,Q,be,_e,he)}),de.forEach(function(_e){m(void 0,N[_e],M,Q,be,_e,he)})}he.length=he.length-1}else O!==N&&(Ze==="number"&&isNaN(O)&&isNaN(N)||M(new a(be,O,N)))}function _(O,N,M,Q){return Q=Q||[],m(O,N,function(ne){ne&&Q.push(ne)},M),Q.length?Q:void 0}function b(O,N,M){if(M.path&&M.path.length){var Q,ne=O[N],ue=M.path.length-1;for(Q=0;Q<ue;Q++)ne=ne[M.path[Q]];switch(M.kind){case"A":b(ne[M.path[Q]],M.index,M.item);break;case"D":delete ne[M.path[Q]];break;case"E":case"N":ne[M.path[Q]]=M.rhs}}else switch(M.kind){case"A":b(O[N],M.index,M.item);break;case"D":O=f(O,N);break;case"E":case"N":O[N]=M.rhs}return O}function y(O,N,M){if(O&&N&&M&&M.kind){for(var Q=O,ne=-1,ue=M.path?M.path.length-1:0;++ne<ue;)typeof Q[M.path[ne]]>"u"&&(Q[M.path[ne]]=typeof M.path[ne]=="number"?[]:{}),Q=Q[M.path[ne]];switch(M.kind){case"A":b(M.path?Q[M.path[ne]]:Q,M.index,M.item);break;case"D":delete Q[M.path[ne]];break;case"E":case"N":Q[M.path[ne]]=M.rhs}}}function w(O,N,M){if(M.path&&M.path.length){var Q,ne=O[N],ue=M.path.length-1;for(Q=0;Q<ue;Q++)ne=ne[M.path[Q]];switch(M.kind){case"A":w(ne[M.path[Q]],M.index,M.item);break;case"D":ne[M.path[Q]]=M.lhs;break;case"E":ne[M.path[Q]]=M.lhs;break;case"N":delete ne[M.path[Q]]}}else switch(M.kind){case"A":w(O[N],M.index,M.item);break;case"D":O[N]=M.lhs;break;case"E":O[N]=M.lhs;break;case"N":O=f(O,N)}return O}function C(O,N,M){if(O&&N&&M&&M.kind){var Q,ne,ue=O;for(ne=M.path.length-1,Q=0;Q<ne;Q++)typeof ue[M.path[Q]]>"u"&&(ue[M.path[Q]]={}),ue=ue[M.path[Q]];switch(M.kind){case"A":w(ue[M.path[Q]],M.index,M.item);break;case"D":ue[M.path[Q]]=M.lhs;break;case"E":ue[M.path[Q]]=M.lhs;break;case"N":delete ue[M.path[Q]]}}}function g(O,N,M){if(O&&N){var Q=function(ne){M&&!M(O,N,ne)||y(O,N,ne)};m(O,N,Q)}}function x(O){return"color: "+z[O].color+"; font-weight: bold"}function k(O){var N=O.kind,M=O.path,Q=O.lhs,ne=O.rhs,ue=O.index,he=O.item;switch(N){case"E":return[M.join("."),Q,"→",ne];case"N":return[M.join("."),ne];case"D":return[M.join(".")];case"A":return[M.join(".")+"["+ue+"]",he];default:return[]}}function P(O,N,M,Q){var ne=_(O,N);try{Q?M.groupCollapsed("diff"):M.group("diff")}catch{M.log("diff")}ne?ne.forEach(function(ue){var he=ue.kind,be=k(ue);M.log.apply(M,["%c "+z[he].text,x(he)].concat(X(be)))}):M.log("—— no diff ——");try{M.groupEnd()}catch{M.log("—— diff end —— ")}}function T(O,N,M,Q){switch(typeof O>"u"?"undefined":le(O)){case"object":return typeof O[Q]=="function"?O[Q].apply(O,X(M)):O[Q];case"function":return O(N);default:return O}}function A(O){var N=O.timestamp,M=O.duration;return function(Q,ne,ue){var he=["action"];return he.push("%c"+String(Q.type)),N&&he.push("%c@ "+ne),M&&he.push("%c(in "+ue.toFixed(2)+" ms)"),he.join(" ")}}function I(O,N){var M=N.logger,Q=N.actionTransformer,ne=N.titleFormatter,ue=ne===void 0?A(N):ne,he=N.collapsed,be=N.colors,Je=N.level,Ze=N.diff,Le=typeof N.titleFormatter>"u";O.forEach(function(ae,me){var K=ae.started,ce=ae.startedTime,de=ae.action,_e=ae.prevState,Se=ae.error,Ie=ae.took,Ue=ae.nextState,Ye=O[me+1];Ye&&(Ue=Ye.prevState,Ie=Ye.started-K);var tt=Q(de),qt=typeof he=="function"?he(function(){return Ue},de,ae):he,oi=ee(ce),wo=be.title?"color: "+be.title(tt)+";":"",Pn=["color: gray; font-weight: lighter;"];Pn.push(wo),N.timestamp&&Pn.push("color: gray; font-weight: lighter;"),N.duration&&Pn.push("color: gray; font-weight: lighter;");var Hn=ue(tt,oi,Ie);try{qt?be.title&&Le?M.groupCollapsed.apply(M,["%c "+Hn].concat(Pn)):M.groupCollapsed(Hn):be.title&&Le?M.group.apply(M,["%c "+Hn].concat(Pn)):M.group(Hn)}catch{M.log(Hn)}var ur=T(Je,tt,[_e],"prevState"),ko=T(Je,tt,[tt],"action"),H=T(Je,tt,[Se,_e],"error"),Z=T(Je,tt,[Ue],"nextState");if(ur)if(be.prevState){var ie="color: "+be.prevState(_e)+"; font-weight: bold";M[ur]("%c prev state",ie,_e)}else M[ur]("prev state",_e);if(ko)if(be.action){var ge="color: "+be.action(tt)+"; font-weight: bold";M[ko]("%c action    ",ge,tt)}else M[ko]("action    ",tt);if(Se&&H)if(be.error){var ye="color: "+be.error(Se,_e)+"; font-weight: bold;";M[H]("%c error     ",ye,Se)}else M[H]("error     ",Se);if(Z)if(be.nextState){var ke="color: "+be.nextState(Ue)+"; font-weight: bold";M[Z]("%c next state",ke,Ue)}else M[Z]("next state",Ue);Ze&&P(_e,Ue,M,qt);try{M.groupEnd()}catch{M.log("—— log end ——")}})}function F(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},N=Object.assign({},oe,O),M=N.logger,Q=N.stateTransformer,ne=N.errorTransformer,ue=N.predicate,he=N.logErrors,be=N.diffPredicate;if(typeof M>"u")return function(){return function(Ze){return function(Le){return Ze(Le)}}};if(O.getState&&O.dispatch)return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
// Logger with default options
import { logger } from 'redux-logger'
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
// Or you can create your own logger with custom options http://bit.ly/redux-logger-options
import createLogger from 'redux-logger'
const logger = createLogger({
  // ...options
});
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
`),function(){return function(Ze){return function(Le){return Ze(Le)}}};var Je=[];return function(Ze){var Le=Ze.getState;return function(ae){return function(me){if(typeof ue=="function"&&!ue(Le,me))return ae(me);var K={};Je.push(K),K.started=V.now(),K.startedTime=new Date,K.prevState=Q(Le()),K.action=me;var ce=void 0;if(he)try{ce=ae(me)}catch(_e){K.error=ne(_e)}else ce=ae(me);K.took=V.now()-K.started,K.nextState=Q(Le());var de=N.diff&&typeof be=="function"?be(Le,me):N.diff;if(I(Je,Object.assign({},N,{diff:de})),Je.length=0,K.error)throw K.error;return ce}}}}var W,B,G=function(O,N){return new Array(N+1).join(O)},J=function(O,N){return G("0",N-O.toString().length)+O},ee=function(O){return J(O.getHours(),2)+":"+J(O.getMinutes(),2)+":"+J(O.getSeconds(),2)+"."+J(O.getMilliseconds(),3)},V=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance:Date,le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},X=function(O){if(Array.isArray(O)){for(var N=0,M=Array(O.length);N<O.length;N++)M[N]=O[N];return M}return Array.from(O)},D=[];W=(typeof wi>"u"?"undefined":le(wi))==="object"&&wi?wi:typeof window<"u"?window:{},B=W.DeepDiff,B&&D.push(function(){typeof B<"u"&&W.DeepDiff===_&&(W.DeepDiff=B,B=void 0)}),r(a,o),r(s,o),r(u,o),r(d,o),Object.defineProperties(_,{diff:{value:_,enumerable:!0},observableDiff:{value:m,enumerable:!0},applyDiff:{value:g,enumerable:!0},applyChange:{value:y,enumerable:!0},revertChange:{value:C,enumerable:!0},isConflict:{value:function(){return typeof B<"u"},enumerable:!0},noConflict:{value:function(){return D&&(D.forEach(function(O){O()}),D=null),_},enumerable:!0}});var z={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},oe={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(O){return O},actionTransformer:function(O){return O},errorTransformer:function(O){return O},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},q=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},N=O.dispatch,M=O.getState;return typeof N=="function"||typeof M=="function"?F()({dispatch:N,getState:M}):void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`)};n.defaults=oe,n.createLogger=F,n.logger=q,n.default=q,Object.defineProperty(n,"__esModule",{value:!0})})})(NN,nc);nc.createLogger();const IN=Tz({reducer:{evsearchResult:$z}}),BN=e=>{if(e==="no_nb")return"no_nb";if(e==="en")return"en";if(e==="no_nn")return"no_nn"};aL(Z2).init({lng:BN("no_nb"),fallbackLng:AN("defaultLocale"),ns:["common"],defaultNS:"common",returnNull:!1},()=>{const e=new _O({defaultOptions:void 0});Ux(document.getElementById("root")).render(te.jsx(E.StrictMode,{children:te.jsx(kE,{store:IN,children:te.jsx(wO,{client:e,children:te.jsx(zN,{children:te.jsx(E2,{router:LN})})})})}))});
