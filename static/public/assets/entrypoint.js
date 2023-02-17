function qw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var di=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ny(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qa={},Kw={get exports(){return qa},set exports(e){qa=e}},Fu={},T={},Qw={get exports(){return T},set exports(e){T=e}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xs=Symbol.for("react.element"),Gw=Symbol.for("react.portal"),Xw=Symbol.for("react.fragment"),Jw=Symbol.for("react.strict_mode"),Yw=Symbol.for("react.profiler"),ek=Symbol.for("react.provider"),tk=Symbol.for("react.context"),nk=Symbol.for("react.forward_ref"),rk=Symbol.for("react.suspense"),ok=Symbol.for("react.memo"),ik=Symbol.for("react.lazy"),u_=Symbol.iterator;function ak(e){return e===null||typeof e!="object"?null:(e=u_&&e[u_]||e["@@iterator"],typeof e=="function"?e:null)}var By={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Iy=Object.assign,My={};function Ki(e,t,n){this.props=e,this.context=t,this.refs=My,this.updater=n||By}Ki.prototype.isReactComponent={};Ki.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ki.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Dy(){}Dy.prototype=Ki.prototype;function Dh(e,t,n){this.props=e,this.context=t,this.refs=My,this.updater=n||By}var Fh=Dh.prototype=new Dy;Fh.constructor=Dh;Iy(Fh,Ki.prototype);Fh.isPureReactComponent=!0;var c_=Array.isArray,Fy=Object.prototype.hasOwnProperty,jh={current:null},jy={key:!0,ref:!0,__self:!0,__source:!0};function Uy(e,t,n){var r,i={},a=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)Fy.call(t,r)&&!jy.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var d=Array(u),f=0;f<u;f++)d[f]=arguments[f+2];i.children=d}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:xs,type:e,key:a,ref:l,props:i,_owner:jh.current}}function sk(e,t){return{$$typeof:xs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Uh(e){return typeof e=="object"&&e!==null&&e.$$typeof===xs}function lk(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var d_=/\/+/g;function sd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lk(""+e.key):t.toString(36)}function xl(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case xs:case Gw:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+sd(l,0):r,c_(i)?(n="",e!=null&&(n=e.replace(d_,"$&/")+"/"),xl(i,t,n,"",function(f){return f})):i!=null&&(Uh(i)&&(i=sk(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(d_,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",c_(e))for(var u=0;u<e.length;u++){a=e[u];var d=r+sd(a,u);l+=xl(a,t,n,d,i)}else if(d=ak(e),typeof d=="function")for(e=d.call(e),u=0;!(a=e.next()).done;)a=a.value,d=r+sd(a,u++),l+=xl(a,t,n,d,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ys(e,t,n){if(e==null)return e;var r=[],i=0;return xl(e,r,"","",function(a){return t.call(n,a,i++)}),r}function uk(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ft={current:null},wl={transition:null},ck={ReactCurrentDispatcher:Ft,ReactCurrentBatchConfig:wl,ReactCurrentOwner:jh};Pe.Children={map:Ys,forEach:function(e,t,n){Ys(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ys(e,function(){t++}),t},toArray:function(e){return Ys(e,function(t){return t})||[]},only:function(e){if(!Uh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Pe.Component=Ki;Pe.Fragment=Xw;Pe.Profiler=Yw;Pe.PureComponent=Dh;Pe.StrictMode=Jw;Pe.Suspense=rk;Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ck;Pe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Iy({},e.props),i=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=jh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(d in t)Fy.call(t,d)&&!jy.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&u!==void 0?u[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){u=Array(d);for(var f=0;f<d;f++)u[f]=arguments[f+2];r.children=u}return{$$typeof:xs,type:e.type,key:i,ref:a,props:r,_owner:l}};Pe.createContext=function(e){return e={$$typeof:tk,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ek,_context:e},e.Consumer=e};Pe.createElement=Uy;Pe.createFactory=function(e){var t=Uy.bind(null,e);return t.type=e,t};Pe.createRef=function(){return{current:null}};Pe.forwardRef=function(e){return{$$typeof:nk,render:e}};Pe.isValidElement=Uh;Pe.lazy=function(e){return{$$typeof:ik,_payload:{_status:-1,_result:e},_init:uk}};Pe.memo=function(e,t){return{$$typeof:ok,type:e,compare:t===void 0?null:t}};Pe.startTransition=function(e){var t=wl.transition;wl.transition={};try{e()}finally{wl.transition=t}};Pe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Pe.useCallback=function(e,t){return Ft.current.useCallback(e,t)};Pe.useContext=function(e){return Ft.current.useContext(e)};Pe.useDebugValue=function(){};Pe.useDeferredValue=function(e){return Ft.current.useDeferredValue(e)};Pe.useEffect=function(e,t){return Ft.current.useEffect(e,t)};Pe.useId=function(){return Ft.current.useId()};Pe.useImperativeHandle=function(e,t,n){return Ft.current.useImperativeHandle(e,t,n)};Pe.useInsertionEffect=function(e,t){return Ft.current.useInsertionEffect(e,t)};Pe.useLayoutEffect=function(e,t){return Ft.current.useLayoutEffect(e,t)};Pe.useMemo=function(e,t){return Ft.current.useMemo(e,t)};Pe.useReducer=function(e,t,n){return Ft.current.useReducer(e,t,n)};Pe.useRef=function(e){return Ft.current.useRef(e)};Pe.useState=function(e){return Ft.current.useState(e)};Pe.useSyncExternalStore=function(e,t,n){return Ft.current.useSyncExternalStore(e,t,n)};Pe.useTransition=function(){return Ft.current.useTransition()};Pe.version="18.2.0";(function(e){e.exports=Pe})(Qw);const Z=Ny(T),Ka=qw({__proto__:null,default:Z},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dk=T,fk=Symbol.for("react.element"),hk=Symbol.for("react.fragment"),pk=Object.prototype.hasOwnProperty,mk=dk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_k={key:!0,ref:!0,__self:!0,__source:!0};function $y(e,t,n){var r,i={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)pk.call(t,r)&&!_k.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:fk,type:e,key:a,ref:l,props:i,_owner:mk.current}}Fu.Fragment=hk;Fu.jsx=$y;Fu.jsxs=$y;(function(e){e.exports=Fu})(Kw);const vk=qa.Fragment,de=qa.jsx,mt=qa.jsxs;var Mi={},gk={get exports(){return Mi},set exports(e){Mi=e}},en={},sf={},yk={get exports(){return sf},set exports(e){sf=e}},Zy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,oe){var K=M.length;M.push(oe);e:for(;0<K;){var O=K-1>>>1,B=M[O];if(0<i(B,oe))M[O]=oe,M[K]=B,K=O;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var oe=M[0],K=M.pop();if(K!==oe){M[0]=K;e:for(var O=0,B=M.length,A=B>>>1;O<A;){var Q=2*(O+1)-1,te=M[Q],$=Q+1,ne=M[$];if(0>i(te,K))$<B&&0>i(ne,te)?(M[O]=ne,M[$]=K,O=$):(M[O]=te,M[Q]=K,O=Q);else if($<B&&0>i(ne,K))M[O]=ne,M[$]=K,O=$;else break e}}return oe}function i(M,oe){var K=M.sortIndex-oe.sortIndex;return K!==0?K:M.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var d=[],f=[],m=1,_=null,p=3,g=!1,x=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(M){for(var oe=n(f);oe!==null;){if(oe.callback===null)r(f);else if(oe.startTime<=M)r(f),oe.sortIndex=oe.expirationTime,t(d,oe);else break;oe=n(f)}}function P(M){if(w=!1,S(M),!x)if(n(d)!==null)x=!0,ee(z);else{var oe=n(f);oe!==null&&ue(P,oe.startTime-M)}}function z(M,oe){x=!1,w&&(w=!1,y(j),j=-1),g=!0;var K=p;try{for(S(oe),_=n(d);_!==null&&(!(_.expirationTime>oe)||M&&!R());){var O=_.callback;if(typeof O=="function"){_.callback=null,p=_.priorityLevel;var B=O(_.expirationTime<=oe);oe=e.unstable_now(),typeof B=="function"?_.callback=B:_===n(d)&&r(d),S(oe)}else r(d);_=n(d)}if(_!==null)var A=!0;else{var Q=n(f);Q!==null&&ue(P,Q.startTime-oe),A=!1}return A}finally{_=null,p=K,g=!1}}var I=!1,D=null,j=-1,V=5,U=-1;function R(){return!(e.unstable_now()-U<V)}function Y(){if(D!==null){var M=e.unstable_now();U=M;var oe=!0;try{oe=D(!0,M)}finally{oe?_e():(I=!1,D=null)}}else I=!1}var _e;if(typeof b=="function")_e=function(){b(Y)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,fe=re.port2;re.port1.onmessage=Y,_e=function(){fe.postMessage(null)}}else _e=function(){C(Y,0)};function ee(M){D=M,I||(I=!0,_e())}function ue(M,oe){j=C(function(){M(e.unstable_now())},oe)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){x||g||(x=!0,ee(z))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(M){switch(p){case 1:case 2:case 3:var oe=3;break;default:oe=p}var K=p;p=oe;try{return M()}finally{p=K}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,oe){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var K=p;p=M;try{return oe()}finally{p=K}},e.unstable_scheduleCallback=function(M,oe,K){var O=e.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?O+K:O):K=O,M){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=K+B,M={id:m++,callback:oe,priorityLevel:M,startTime:K,expirationTime:B,sortIndex:-1},K>O?(M.sortIndex=K,t(f,M),n(d)===null&&M===n(f)&&(w?(y(j),j=-1):w=!0,ue(P,K-O))):(M.sortIndex=B,t(d,M),x||g||(x=!0,ee(z))),M},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(M){var oe=p;return function(){var K=p;p=oe;try{return M.apply(this,arguments)}finally{p=K}}}})(Zy);(function(e){e.exports=Zy})(yk);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wy=T,Jt=sf;function J(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hy=new Set,Qa={};function qo(e,t){Di(e,t),Di(e+"Capture",t)}function Di(e,t){for(Qa[e]=t,e=0;e<t.length;e++)Hy.add(t[e])}var mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lf=Object.prototype.hasOwnProperty,bk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f_={},h_={};function xk(e){return lf.call(h_,e)?!0:lf.call(f_,e)?!1:bk.test(e)?h_[e]=!0:(f_[e]=!0,!1)}function wk(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function kk(e,t,n,r){if(t===null||typeof t>"u"||wk(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function jt(e,t,n,r,i,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var Pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pt[e]=new jt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Pt[t]=new jt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pt[e]=new jt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pt[e]=new jt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pt[e]=new jt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pt[e]=new jt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pt[e]=new jt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pt[e]=new jt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pt[e]=new jt(e,5,!1,e.toLowerCase(),null,!1,!1)});var $h=/[\-:]([a-z])/g;function Zh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($h,Zh);Pt[t]=new jt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($h,Zh);Pt[t]=new jt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($h,Zh);Pt[t]=new jt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pt[e]=new jt(e,1,!1,e.toLowerCase(),null,!1,!1)});Pt.xlinkHref=new jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pt[e]=new jt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wh(e,t,n,r){var i=Pt.hasOwnProperty(t)?Pt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(kk(t,n,i,r)&&(n=null),r||i===null?xk(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var xr=Wy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,el=Symbol.for("react.element"),fi=Symbol.for("react.portal"),hi=Symbol.for("react.fragment"),Hh=Symbol.for("react.strict_mode"),uf=Symbol.for("react.profiler"),Vy=Symbol.for("react.provider"),qy=Symbol.for("react.context"),Vh=Symbol.for("react.forward_ref"),cf=Symbol.for("react.suspense"),df=Symbol.for("react.suspense_list"),qh=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy"),Ky=Symbol.for("react.offscreen"),p_=Symbol.iterator;function ma(e){return e===null||typeof e!="object"?null:(e=p_&&e[p_]||e["@@iterator"],typeof e=="function"?e:null)}var Ye=Object.assign,ld;function Ta(e){if(ld===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ld=t&&t[1]||""}return`
`+ld+e}var ud=!1;function cd(e,t){if(!e||ud)return"";ud=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),a=r.stack.split(`
`),l=i.length-1,u=a.length-1;1<=l&&0<=u&&i[l]!==a[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==a[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==a[u]){var d=`
`+i[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=u);break}}}finally{ud=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ta(e):""}function Sk(e){switch(e.tag){case 5:return Ta(e.type);case 16:return Ta("Lazy");case 13:return Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 2:case 15:return e=cd(e.type,!1),e;case 11:return e=cd(e.type.render,!1),e;case 1:return e=cd(e.type,!0),e;default:return""}}function ff(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hi:return"Fragment";case fi:return"Portal";case uf:return"Profiler";case Hh:return"StrictMode";case cf:return"Suspense";case df:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qy:return(e.displayName||"Context")+".Consumer";case Vy:return(e._context.displayName||"Context")+".Provider";case Vh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qh:return t=e.displayName||null,t!==null?t:ff(e.type)||"Memo";case Ar:t=e._payload,e=e._init;try{return ff(e(t))}catch{}}return null}function Pk(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ff(t);case 8:return t===Hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function no(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ck(e){var t=Qy(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function tl(e){e._valueTracker||(e._valueTracker=Ck(e))}function Gy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Qy(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $l(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hf(e,t){var n=t.checked;return Ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function m_(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=no(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xy(e,t){t=t.checked,t!=null&&Wh(e,"checked",t,!1)}function pf(e,t){Xy(e,t);var n=no(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?mf(e,t.type,n):t.hasOwnProperty("defaultValue")&&mf(e,t.type,no(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function __(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function mf(e,t,n){(t!=="number"||$l(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var La=Array.isArray;function Pi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+no(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function _f(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(J(91));return Ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function v_(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(J(92));if(La(n)){if(1<n.length)throw Error(J(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:no(n)}}function Jy(e,t){var n=no(t.value),r=no(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function g_(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Yy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Yy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var nl,eb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(nl=nl||document.createElement("div"),nl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=nl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ga(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ek=["Webkit","ms","Moz","O"];Object.keys(Ba).forEach(function(e){Ek.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ba[t]=Ba[e]})});function tb(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ba.hasOwnProperty(e)&&Ba[e]?(""+t).trim():t+"px"}function nb(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=tb(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ok=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gf(e,t){if(t){if(Ok[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(J(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(J(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(J(61))}if(t.style!=null&&typeof t.style!="object")throw Error(J(62))}}function yf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bf=null;function Kh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xf=null,Ci=null,Ei=null;function y_(e){if(e=Ss(e)){if(typeof xf!="function")throw Error(J(280));var t=e.stateNode;t&&(t=Wu(t),xf(e.stateNode,e.type,t))}}function rb(e){Ci?Ei?Ei.push(e):Ei=[e]:Ci=e}function ob(){if(Ci){var e=Ci,t=Ei;if(Ei=Ci=null,y_(e),t)for(e=0;e<t.length;e++)y_(t[e])}}function ib(e,t){return e(t)}function ab(){}var dd=!1;function sb(e,t,n){if(dd)return e(t,n);dd=!0;try{return ib(e,t,n)}finally{dd=!1,(Ci!==null||Ei!==null)&&(ab(),ob())}}function Xa(e,t){var n=e.stateNode;if(n===null)return null;var r=Wu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(J(231,t,typeof n));return n}var wf=!1;if(mr)try{var _a={};Object.defineProperty(_a,"passive",{get:function(){wf=!0}}),window.addEventListener("test",_a,_a),window.removeEventListener("test",_a,_a)}catch{wf=!1}function Tk(e,t,n,r,i,a,l,u,d){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(m){this.onError(m)}}var Ia=!1,Zl=null,Wl=!1,kf=null,Lk={onError:function(e){Ia=!0,Zl=e}};function zk(e,t,n,r,i,a,l,u,d){Ia=!1,Zl=null,Tk.apply(Lk,arguments)}function Rk(e,t,n,r,i,a,l,u,d){if(zk.apply(this,arguments),Ia){if(Ia){var f=Zl;Ia=!1,Zl=null}else throw Error(J(198));Wl||(Wl=!0,kf=f)}}function Ko(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lb(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b_(e){if(Ko(e)!==e)throw Error(J(188))}function Ak(e){var t=e.alternate;if(!t){if(t=Ko(e),t===null)throw Error(J(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return b_(i),e;if(a===r)return b_(i),t;a=a.sibling}throw Error(J(188))}if(n.return!==r.return)n=i,r=a;else{for(var l=!1,u=i.child;u;){if(u===n){l=!0,n=i,r=a;break}if(u===r){l=!0,r=i,n=a;break}u=u.sibling}if(!l){for(u=a.child;u;){if(u===n){l=!0,n=a,r=i;break}if(u===r){l=!0,r=a,n=i;break}u=u.sibling}if(!l)throw Error(J(189))}}if(n.alternate!==r)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?e:t}function ub(e){return e=Ak(e),e!==null?cb(e):null}function cb(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=cb(e);if(t!==null)return t;e=e.sibling}return null}var db=Jt.unstable_scheduleCallback,x_=Jt.unstable_cancelCallback,Nk=Jt.unstable_shouldYield,Bk=Jt.unstable_requestPaint,ot=Jt.unstable_now,Ik=Jt.unstable_getCurrentPriorityLevel,Qh=Jt.unstable_ImmediatePriority,fb=Jt.unstable_UserBlockingPriority,Hl=Jt.unstable_NormalPriority,Mk=Jt.unstable_LowPriority,hb=Jt.unstable_IdlePriority,ju=null,qn=null;function Dk(e){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(ju,e,void 0,(e.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:Uk,Fk=Math.log,jk=Math.LN2;function Uk(e){return e>>>=0,e===0?32:31-(Fk(e)/jk|0)|0}var rl=64,ol=4194304;function za(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~i;u!==0?r=za(u):(a&=l,a!==0&&(r=za(a)))}else l=n&~i,l!==0?r=za(l):a!==0&&(r=za(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-En(t),i=1<<n,r|=e[n],t&=~i;return r}function $k(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zk(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-En(a),u=1<<l,d=i[l];d===-1?(!(u&n)||u&r)&&(i[l]=$k(u,t)):d<=t&&(e.expiredLanes|=u),a&=~u}}function Sf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pb(){var e=rl;return rl<<=1,!(rl&4194240)&&(rl=64),e}function fd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ws(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-En(t),e[t]=n}function Wk(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-En(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Gh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-En(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Me=0;function mb(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _b,Xh,vb,gb,yb,Pf=!1,il=[],$r=null,Zr=null,Wr=null,Ja=new Map,Ya=new Map,Ir=[],Hk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function w_(e,t){switch(e){case"focusin":case"focusout":$r=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":Wr=null;break;case"pointerover":case"pointerout":Ja.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ya.delete(t.pointerId)}}function va(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ss(t),t!==null&&Xh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Vk(e,t,n,r,i){switch(t){case"focusin":return $r=va($r,e,t,n,r,i),!0;case"dragenter":return Zr=va(Zr,e,t,n,r,i),!0;case"mouseover":return Wr=va(Wr,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Ja.set(a,va(Ja.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Ya.set(a,va(Ya.get(a)||null,e,t,n,r,i)),!0}return!1}function bb(e){var t=Oo(e.target);if(t!==null){var n=Ko(t);if(n!==null){if(t=n.tag,t===13){if(t=lb(n),t!==null){e.blockedOn=t,yb(e.priority,function(){vb(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);bf=r,n.target.dispatchEvent(r),bf=null}else return t=Ss(n),t!==null&&Xh(t),e.blockedOn=n,!1;t.shift()}return!0}function k_(e,t,n){kl(e)&&n.delete(t)}function qk(){Pf=!1,$r!==null&&kl($r)&&($r=null),Zr!==null&&kl(Zr)&&(Zr=null),Wr!==null&&kl(Wr)&&(Wr=null),Ja.forEach(k_),Ya.forEach(k_)}function ga(e,t){e.blockedOn===t&&(e.blockedOn=null,Pf||(Pf=!0,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,qk)))}function es(e){function t(i){return ga(i,e)}if(0<il.length){ga(il[0],e);for(var n=1;n<il.length;n++){var r=il[n];r.blockedOn===e&&(r.blockedOn=null)}}for($r!==null&&ga($r,e),Zr!==null&&ga(Zr,e),Wr!==null&&ga(Wr,e),Ja.forEach(t),Ya.forEach(t),n=0;n<Ir.length;n++)r=Ir[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ir.length&&(n=Ir[0],n.blockedOn===null);)bb(n),n.blockedOn===null&&Ir.shift()}var Oi=xr.ReactCurrentBatchConfig,ql=!0;function Kk(e,t,n,r){var i=Me,a=Oi.transition;Oi.transition=null;try{Me=1,Jh(e,t,n,r)}finally{Me=i,Oi.transition=a}}function Qk(e,t,n,r){var i=Me,a=Oi.transition;Oi.transition=null;try{Me=4,Jh(e,t,n,r)}finally{Me=i,Oi.transition=a}}function Jh(e,t,n,r){if(ql){var i=Cf(e,t,n,r);if(i===null)wd(e,t,r,Kl,n),w_(e,r);else if(Vk(i,e,t,n,r))r.stopPropagation();else if(w_(e,r),t&4&&-1<Hk.indexOf(e)){for(;i!==null;){var a=Ss(i);if(a!==null&&_b(a),a=Cf(e,t,n,r),a===null&&wd(e,t,r,Kl,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}var Kl=null;function Cf(e,t,n,r){if(Kl=null,e=Kh(r),e=Oo(e),e!==null)if(t=Ko(e),t===null)e=null;else if(n=t.tag,n===13){if(e=lb(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kl=e,null}function xb(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ik()){case Qh:return 1;case fb:return 4;case Hl:case Mk:return 16;case hb:return 536870912;default:return 16}default:return 16}}var Fr=null,Yh=null,Sl=null;function wb(){if(Sl)return Sl;var e,t=Yh,n=t.length,r,i="value"in Fr?Fr.value:Fr.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[a-r];r++);return Sl=i.slice(e,1<r?1-r:void 0)}function Pl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function al(){return!0}function S_(){return!1}function tn(e){function t(n,r,i,a,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(a):a[u]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?al:S_,this.isPropagationStopped=S_,this}return Ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),t}var Qi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ep=tn(Qi),ks=Ye({},Qi,{view:0,detail:0}),Gk=tn(ks),hd,pd,ya,Uu=Ye({},ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ya&&(ya&&e.type==="mousemove"?(hd=e.screenX-ya.screenX,pd=e.screenY-ya.screenY):pd=hd=0,ya=e),hd)},movementY:function(e){return"movementY"in e?e.movementY:pd}}),P_=tn(Uu),Xk=Ye({},Uu,{dataTransfer:0}),Jk=tn(Xk),Yk=Ye({},ks,{relatedTarget:0}),md=tn(Yk),eS=Ye({},Qi,{animationName:0,elapsedTime:0,pseudoElement:0}),tS=tn(eS),nS=Ye({},Qi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rS=tn(nS),oS=Ye({},Qi,{data:0}),C_=tn(oS),iS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sS[e])?!!t[e]:!1}function tp(){return lS}var uS=Ye({},ks,{key:function(e){if(e.key){var t=iS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?aS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tp,charCode:function(e){return e.type==="keypress"?Pl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cS=tn(uS),dS=Ye({},Uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E_=tn(dS),fS=Ye({},ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tp}),hS=tn(fS),pS=Ye({},Qi,{propertyName:0,elapsedTime:0,pseudoElement:0}),mS=tn(pS),_S=Ye({},Uu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vS=tn(_S),gS=[9,13,27,32],np=mr&&"CompositionEvent"in window,Ma=null;mr&&"documentMode"in document&&(Ma=document.documentMode);var yS=mr&&"TextEvent"in window&&!Ma,kb=mr&&(!np||Ma&&8<Ma&&11>=Ma),O_=String.fromCharCode(32),T_=!1;function Sb(e,t){switch(e){case"keyup":return gS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pb(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pi=!1;function bS(e,t){switch(e){case"compositionend":return Pb(t);case"keypress":return t.which!==32?null:(T_=!0,O_);case"textInput":return e=t.data,e===O_&&T_?null:e;default:return null}}function xS(e,t){if(pi)return e==="compositionend"||!np&&Sb(e,t)?(e=wb(),Sl=Yh=Fr=null,pi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kb&&t.locale!=="ko"?null:t.data;default:return null}}var wS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function L_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wS[e.type]:t==="textarea"}function Cb(e,t,n,r){rb(r),t=Ql(t,"onChange"),0<t.length&&(n=new ep("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Da=null,ts=null;function kS(e){Mb(e,0)}function $u(e){var t=vi(e);if(Gy(t))return e}function SS(e,t){if(e==="change")return t}var Eb=!1;if(mr){var _d;if(mr){var vd="oninput"in document;if(!vd){var z_=document.createElement("div");z_.setAttribute("oninput","return;"),vd=typeof z_.oninput=="function"}_d=vd}else _d=!1;Eb=_d&&(!document.documentMode||9<document.documentMode)}function R_(){Da&&(Da.detachEvent("onpropertychange",Ob),ts=Da=null)}function Ob(e){if(e.propertyName==="value"&&$u(ts)){var t=[];Cb(t,ts,e,Kh(e)),sb(kS,t)}}function PS(e,t,n){e==="focusin"?(R_(),Da=t,ts=n,Da.attachEvent("onpropertychange",Ob)):e==="focusout"&&R_()}function CS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $u(ts)}function ES(e,t){if(e==="click")return $u(t)}function OS(e,t){if(e==="input"||e==="change")return $u(t)}function TS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zn=typeof Object.is=="function"?Object.is:TS;function ns(e,t){if(zn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!lf.call(t,i)||!zn(e[i],t[i]))return!1}return!0}function A_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function N_(e,t){var n=A_(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=A_(n)}}function Tb(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tb(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lb(){for(var e=window,t=$l();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$l(e.document)}return t}function rp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function LS(e){var t=Lb(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Tb(n.ownerDocument.documentElement,n)){if(r!==null&&rp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=N_(n,a);var l=N_(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zS=mr&&"documentMode"in document&&11>=document.documentMode,mi=null,Ef=null,Fa=null,Of=!1;function B_(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Of||mi==null||mi!==$l(r)||(r=mi,"selectionStart"in r&&rp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fa&&ns(Fa,r)||(Fa=r,r=Ql(Ef,"onSelect"),0<r.length&&(t=new ep("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mi)))}function sl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _i={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionend:sl("Transition","TransitionEnd")},gd={},zb={};mr&&(zb=document.createElement("div").style,"AnimationEvent"in window||(delete _i.animationend.animation,delete _i.animationiteration.animation,delete _i.animationstart.animation),"TransitionEvent"in window||delete _i.transitionend.transition);function Zu(e){if(gd[e])return gd[e];if(!_i[e])return e;var t=_i[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zb)return gd[e]=t[n];return e}var Rb=Zu("animationend"),Ab=Zu("animationiteration"),Nb=Zu("animationstart"),Bb=Zu("transitionend"),Ib=new Map,I_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function uo(e,t){Ib.set(e,t),qo(t,[e])}for(var yd=0;yd<I_.length;yd++){var bd=I_[yd],RS=bd.toLowerCase(),AS=bd[0].toUpperCase()+bd.slice(1);uo(RS,"on"+AS)}uo(Rb,"onAnimationEnd");uo(Ab,"onAnimationIteration");uo(Nb,"onAnimationStart");uo("dblclick","onDoubleClick");uo("focusin","onFocus");uo("focusout","onBlur");uo(Bb,"onTransitionEnd");Di("onMouseEnter",["mouseout","mouseover"]);Di("onMouseLeave",["mouseout","mouseover"]);Di("onPointerEnter",["pointerout","pointerover"]);Di("onPointerLeave",["pointerout","pointerover"]);qo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qo("onBeforeInput",["compositionend","keypress","textInput","paste"]);qo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ra));function M_(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Rk(r,t,void 0,e),e.currentTarget=null}function Mb(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],d=u.instance,f=u.currentTarget;if(u=u.listener,d!==a&&i.isPropagationStopped())break e;M_(i,u,f),a=d}else for(l=0;l<r.length;l++){if(u=r[l],d=u.instance,f=u.currentTarget,u=u.listener,d!==a&&i.isPropagationStopped())break e;M_(i,u,f),a=d}}}if(Wl)throw e=kf,Wl=!1,kf=null,e}function He(e,t){var n=t[Af];n===void 0&&(n=t[Af]=new Set);var r=e+"__bubble";n.has(r)||(Db(t,e,2,!1),n.add(r))}function xd(e,t,n){var r=0;t&&(r|=4),Db(n,e,r,t)}var ll="_reactListening"+Math.random().toString(36).slice(2);function rs(e){if(!e[ll]){e[ll]=!0,Hy.forEach(function(n){n!=="selectionchange"&&(NS.has(n)||xd(n,!1,e),xd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ll]||(t[ll]=!0,xd("selectionchange",!1,t))}}function Db(e,t,n,r){switch(xb(t)){case 1:var i=Kk;break;case 4:i=Qk;break;default:i=Jh}n=i.bind(null,t,n,e),i=void 0,!wf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;u!==null;){if(l=Oo(u),l===null)return;if(d=l.tag,d===5||d===6){r=a=l;continue e}u=u.parentNode}}r=r.return}sb(function(){var f=a,m=Kh(n),_=[];e:{var p=Ib.get(e);if(p!==void 0){var g=ep,x=e;switch(e){case"keypress":if(Pl(n)===0)break e;case"keydown":case"keyup":g=cS;break;case"focusin":x="focus",g=md;break;case"focusout":x="blur",g=md;break;case"beforeblur":case"afterblur":g=md;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=P_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Jk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=hS;break;case Rb:case Ab:case Nb:g=tS;break;case Bb:g=mS;break;case"scroll":g=Gk;break;case"wheel":g=vS;break;case"copy":case"cut":case"paste":g=rS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=E_}var w=(t&4)!==0,C=!w&&e==="scroll",y=w?p!==null?p+"Capture":null:p;w=[];for(var b=f,S;b!==null;){S=b;var P=S.stateNode;if(S.tag===5&&P!==null&&(S=P,y!==null&&(P=Xa(b,y),P!=null&&w.push(os(b,P,S)))),C)break;b=b.return}0<w.length&&(p=new g(p,x,null,n,m),_.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==bf&&(x=n.relatedTarget||n.fromElement)&&(Oo(x)||x[_r]))break e;if((g||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=f,x=x?Oo(x):null,x!==null&&(C=Ko(x),x!==C||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=f),g!==x)){if(w=P_,P="onMouseLeave",y="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(w=E_,P="onPointerLeave",y="onPointerEnter",b="pointer"),C=g==null?p:vi(g),S=x==null?p:vi(x),p=new w(P,b+"leave",g,n,m),p.target=C,p.relatedTarget=S,P=null,Oo(m)===f&&(w=new w(y,b+"enter",x,n,m),w.target=S,w.relatedTarget=C,P=w),C=P,g&&x)t:{for(w=g,y=x,b=0,S=w;S;S=ai(S))b++;for(S=0,P=y;P;P=ai(P))S++;for(;0<b-S;)w=ai(w),b--;for(;0<S-b;)y=ai(y),S--;for(;b--;){if(w===y||y!==null&&w===y.alternate)break t;w=ai(w),y=ai(y)}w=null}else w=null;g!==null&&D_(_,p,g,w,!1),x!==null&&C!==null&&D_(_,C,x,w,!0)}}e:{if(p=f?vi(f):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var z=SS;else if(L_(p))if(Eb)z=OS;else{z=CS;var I=PS}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(z=ES);if(z&&(z=z(e,f))){Cb(_,z,n,m);break e}I&&I(e,p,f),e==="focusout"&&(I=p._wrapperState)&&I.controlled&&p.type==="number"&&mf(p,"number",p.value)}switch(I=f?vi(f):window,e){case"focusin":(L_(I)||I.contentEditable==="true")&&(mi=I,Ef=f,Fa=null);break;case"focusout":Fa=Ef=mi=null;break;case"mousedown":Of=!0;break;case"contextmenu":case"mouseup":case"dragend":Of=!1,B_(_,n,m);break;case"selectionchange":if(zS)break;case"keydown":case"keyup":B_(_,n,m)}var D;if(np)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else pi?Sb(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(kb&&n.locale!=="ko"&&(pi||j!=="onCompositionStart"?j==="onCompositionEnd"&&pi&&(D=wb()):(Fr=m,Yh="value"in Fr?Fr.value:Fr.textContent,pi=!0)),I=Ql(f,j),0<I.length&&(j=new C_(j,e,null,n,m),_.push({event:j,listeners:I}),D?j.data=D:(D=Pb(n),D!==null&&(j.data=D)))),(D=yS?bS(e,n):xS(e,n))&&(f=Ql(f,"onBeforeInput"),0<f.length&&(m=new C_("onBeforeInput","beforeinput",null,n,m),_.push({event:m,listeners:f}),m.data=D))}Mb(_,t)})}function os(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ql(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Xa(e,n),a!=null&&r.unshift(os(e,a,i)),a=Xa(e,t),a!=null&&r.push(os(e,a,i))),e=e.return}return r}function ai(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function D_(e,t,n,r,i){for(var a=t._reactName,l=[];n!==null&&n!==r;){var u=n,d=u.alternate,f=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&f!==null&&(u=f,i?(d=Xa(n,a),d!=null&&l.unshift(os(n,d,u))):i||(d=Xa(n,a),d!=null&&l.push(os(n,d,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var BS=/\r\n?/g,IS=/\u0000|\uFFFD/g;function F_(e){return(typeof e=="string"?e:""+e).replace(BS,`
`).replace(IS,"")}function ul(e,t,n){if(t=F_(t),F_(e)!==t&&n)throw Error(J(425))}function Gl(){}var Tf=null,Lf=null;function zf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rf=typeof setTimeout=="function"?setTimeout:void 0,MS=typeof clearTimeout=="function"?clearTimeout:void 0,j_=typeof Promise=="function"?Promise:void 0,DS=typeof queueMicrotask=="function"?queueMicrotask:typeof j_<"u"?function(e){return j_.resolve(null).then(e).catch(FS)}:Rf;function FS(e){setTimeout(function(){throw e})}function kd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),es(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);es(t)}function Hr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function U_(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gi=Math.random().toString(36).slice(2),Wn="__reactFiber$"+Gi,is="__reactProps$"+Gi,_r="__reactContainer$"+Gi,Af="__reactEvents$"+Gi,jS="__reactListeners$"+Gi,US="__reactHandles$"+Gi;function Oo(e){var t=e[Wn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_r]||n[Wn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=U_(e);e!==null;){if(n=e[Wn])return n;e=U_(e)}return t}e=n,n=e.parentNode}return null}function Ss(e){return e=e[Wn]||e[_r],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(J(33))}function Wu(e){return e[is]||null}var Nf=[],gi=-1;function co(e){return{current:e}}function Ve(e){0>gi||(e.current=Nf[gi],Nf[gi]=null,gi--)}function Ze(e,t){gi++,Nf[gi]=e.current,e.current=t}var ro={},Rt=co(ro),Ht=co(!1),Do=ro;function Fi(e,t){var n=e.type.contextTypes;if(!n)return ro;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Vt(e){return e=e.childContextTypes,e!=null}function Xl(){Ve(Ht),Ve(Rt)}function $_(e,t,n){if(Rt.current!==ro)throw Error(J(168));Ze(Rt,t),Ze(Ht,n)}function Fb(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(J(108,Pk(e)||"Unknown",i));return Ye({},n,r)}function Jl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ro,Do=Rt.current,Ze(Rt,e),Ze(Ht,Ht.current),!0}function Z_(e,t,n){var r=e.stateNode;if(!r)throw Error(J(169));n?(e=Fb(e,t,Do),r.__reactInternalMemoizedMergedChildContext=e,Ve(Ht),Ve(Rt),Ze(Rt,e)):Ve(Ht),Ze(Ht,n)}var cr=null,Hu=!1,Sd=!1;function jb(e){cr===null?cr=[e]:cr.push(e)}function $S(e){Hu=!0,jb(e)}function fo(){if(!Sd&&cr!==null){Sd=!0;var e=0,t=Me;try{var n=cr;for(Me=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}cr=null,Hu=!1}catch(i){throw cr!==null&&(cr=cr.slice(e+1)),db(Qh,fo),i}finally{Me=t,Sd=!1}}return null}var yi=[],bi=0,Yl=null,eu=0,ln=[],un=0,Fo=null,dr=1,fr="";function So(e,t){yi[bi++]=eu,yi[bi++]=Yl,Yl=e,eu=t}function Ub(e,t,n){ln[un++]=dr,ln[un++]=fr,ln[un++]=Fo,Fo=e;var r=dr;e=fr;var i=32-En(r)-1;r&=~(1<<i),n+=1;var a=32-En(t)+i;if(30<a){var l=i-i%5;a=(r&(1<<l)-1).toString(32),r>>=l,i-=l,dr=1<<32-En(t)+i|n<<i|r,fr=a+e}else dr=1<<a|n<<i|r,fr=e}function op(e){e.return!==null&&(So(e,1),Ub(e,1,0))}function ip(e){for(;e===Yl;)Yl=yi[--bi],yi[bi]=null,eu=yi[--bi],yi[bi]=null;for(;e===Fo;)Fo=ln[--un],ln[un]=null,fr=ln[--un],ln[un]=null,dr=ln[--un],ln[un]=null}var Xt=null,Gt=null,Qe=!1,Pn=null;function $b(e,t){var n=cn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function W_(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xt=e,Gt=Hr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xt=e,Gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Fo!==null?{id:dr,overflow:fr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=cn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xt=e,Gt=null,!0):!1;default:return!1}}function Bf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function If(e){if(Qe){var t=Gt;if(t){var n=t;if(!W_(e,t)){if(Bf(e))throw Error(J(418));t=Hr(n.nextSibling);var r=Xt;t&&W_(e,t)?$b(r,n):(e.flags=e.flags&-4097|2,Qe=!1,Xt=e)}}else{if(Bf(e))throw Error(J(418));e.flags=e.flags&-4097|2,Qe=!1,Xt=e}}}function H_(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xt=e}function cl(e){if(e!==Xt)return!1;if(!Qe)return H_(e),Qe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zf(e.type,e.memoizedProps)),t&&(t=Gt)){if(Bf(e))throw Zb(),Error(J(418));for(;t;)$b(e,t),t=Hr(t.nextSibling)}if(H_(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Gt=Hr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Gt=null}}else Gt=Xt?Hr(e.stateNode.nextSibling):null;return!0}function Zb(){for(var e=Gt;e;)e=Hr(e.nextSibling)}function ji(){Gt=Xt=null,Qe=!1}function ap(e){Pn===null?Pn=[e]:Pn.push(e)}var ZS=xr.ReactCurrentBatchConfig;function kn(e,t){if(e&&e.defaultProps){t=Ye({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var tu=co(null),nu=null,xi=null,sp=null;function lp(){sp=xi=nu=null}function up(e){var t=tu.current;Ve(tu),e._currentValue=t}function Mf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ti(e,t){nu=e,sp=xi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Wt=!0),e.firstContext=null)}function hn(e){var t=e._currentValue;if(sp!==e)if(e={context:e,memoizedValue:t,next:null},xi===null){if(nu===null)throw Error(J(308));xi=e,nu.dependencies={lanes:0,firstContext:e}}else xi=xi.next=e;return t}var To=null;function cp(e){To===null?To=[e]:To.push(e)}function Wb(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,cp(t)):(n.next=i.next,i.next=n),t.interleaved=n,vr(e,r)}function vr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nr=!1;function dp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hb(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function hr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ze&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,vr(e,n)}return i=r.interleaved,i===null?(t.next=t,cp(r)):(t.next=i.next,i.next=t),r.interleaved=t,vr(e,n)}function Cl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gh(e,n)}}function V_(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ru(e,t,n,r){var i=e.updateQueue;Nr=!1;var a=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var d=u,f=d.next;d.next=null,l===null?a=f:l.next=f,l=d;var m=e.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==l&&(u===null?m.firstBaseUpdate=f:u.next=f,m.lastBaseUpdate=d))}if(a!==null){var _=i.baseState;l=0,m=f=d=null,u=a;do{var p=u.lane,g=u.eventTime;if((r&p)===p){m!==null&&(m=m.next={eventTime:g,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var x=e,w=u;switch(p=t,g=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){_=x.call(g,_,p);break e}_=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,p=typeof x=="function"?x.call(g,_,p):x,p==null)break e;_=Ye({},_,p);break e;case 2:Nr=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[u]:p.push(u))}else g={eventTime:g,lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(f=m=g,d=_):m=m.next=g,l|=p;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;p=u,u=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(m===null&&(d=_),i.baseState=d,i.firstBaseUpdate=f,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Uo|=l,e.lanes=l,e.memoizedState=_}}function q_(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(J(191,i));i.call(r)}}}var Vb=new Wy.Component().refs;function Df(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vu={isMounted:function(e){return(e=e._reactInternals)?Ko(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Dt(),i=Kr(e),a=hr(r,i);a.payload=t,n!=null&&(a.callback=n),t=Vr(e,a,i),t!==null&&(On(t,e,i,r),Cl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Dt(),i=Kr(e),a=hr(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Vr(e,a,i),t!==null&&(On(t,e,i,r),Cl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Dt(),r=Kr(e),i=hr(n,r);i.tag=2,t!=null&&(i.callback=t),t=Vr(e,i,r),t!==null&&(On(t,e,r,n),Cl(t,e,r))}};function K_(e,t,n,r,i,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,l):t.prototype&&t.prototype.isPureReactComponent?!ns(n,r)||!ns(i,a):!0}function qb(e,t,n){var r=!1,i=ro,a=t.contextType;return typeof a=="object"&&a!==null?a=hn(a):(i=Vt(t)?Do:Rt.current,r=t.contextTypes,a=(r=r!=null)?Fi(e,i):ro),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Q_(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vu.enqueueReplaceState(t,t.state,null)}function Ff(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Vb,dp(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=hn(a):(a=Vt(t)?Do:Rt.current,i.context=Fi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Df(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Vu.enqueueReplaceState(i,i.state,null),ru(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ba(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(J(309));var r=n.stateNode}if(!r)throw Error(J(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var u=i.refs;u===Vb&&(u=i.refs={}),l===null?delete u[a]:u[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(J(284));if(!n._owner)throw Error(J(290,e))}return e}function dl(e,t){throw e=Object.prototype.toString.call(t),Error(J(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function G_(e){var t=e._init;return t(e._payload)}function Kb(e){function t(y,b){if(e){var S=y.deletions;S===null?(y.deletions=[b],y.flags|=16):S.push(b)}}function n(y,b){if(!e)return null;for(;b!==null;)t(y,b),b=b.sibling;return null}function r(y,b){for(y=new Map;b!==null;)b.key!==null?y.set(b.key,b):y.set(b.index,b),b=b.sibling;return y}function i(y,b){return y=Qr(y,b),y.index=0,y.sibling=null,y}function a(y,b,S){return y.index=S,e?(S=y.alternate,S!==null?(S=S.index,S<b?(y.flags|=2,b):S):(y.flags|=2,b)):(y.flags|=1048576,b)}function l(y){return e&&y.alternate===null&&(y.flags|=2),y}function u(y,b,S,P){return b===null||b.tag!==6?(b=zd(S,y.mode,P),b.return=y,b):(b=i(b,S),b.return=y,b)}function d(y,b,S,P){var z=S.type;return z===hi?m(y,b,S.props.children,P,S.key):b!==null&&(b.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ar&&G_(z)===b.type)?(P=i(b,S.props),P.ref=ba(y,b,S),P.return=y,P):(P=Rl(S.type,S.key,S.props,null,y.mode,P),P.ref=ba(y,b,S),P.return=y,P)}function f(y,b,S,P){return b===null||b.tag!==4||b.stateNode.containerInfo!==S.containerInfo||b.stateNode.implementation!==S.implementation?(b=Rd(S,y.mode,P),b.return=y,b):(b=i(b,S.children||[]),b.return=y,b)}function m(y,b,S,P,z){return b===null||b.tag!==7?(b=Bo(S,y.mode,P,z),b.return=y,b):(b=i(b,S),b.return=y,b)}function _(y,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return b=zd(""+b,y.mode,S),b.return=y,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case el:return S=Rl(b.type,b.key,b.props,null,y.mode,S),S.ref=ba(y,null,b),S.return=y,S;case fi:return b=Rd(b,y.mode,S),b.return=y,b;case Ar:var P=b._init;return _(y,P(b._payload),S)}if(La(b)||ma(b))return b=Bo(b,y.mode,S,null),b.return=y,b;dl(y,b)}return null}function p(y,b,S,P){var z=b!==null?b.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return z!==null?null:u(y,b,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case el:return S.key===z?d(y,b,S,P):null;case fi:return S.key===z?f(y,b,S,P):null;case Ar:return z=S._init,p(y,b,z(S._payload),P)}if(La(S)||ma(S))return z!==null?null:m(y,b,S,P,null);dl(y,S)}return null}function g(y,b,S,P,z){if(typeof P=="string"&&P!==""||typeof P=="number")return y=y.get(S)||null,u(b,y,""+P,z);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case el:return y=y.get(P.key===null?S:P.key)||null,d(b,y,P,z);case fi:return y=y.get(P.key===null?S:P.key)||null,f(b,y,P,z);case Ar:var I=P._init;return g(y,b,S,I(P._payload),z)}if(La(P)||ma(P))return y=y.get(S)||null,m(b,y,P,z,null);dl(b,P)}return null}function x(y,b,S,P){for(var z=null,I=null,D=b,j=b=0,V=null;D!==null&&j<S.length;j++){D.index>j?(V=D,D=null):V=D.sibling;var U=p(y,D,S[j],P);if(U===null){D===null&&(D=V);break}e&&D&&U.alternate===null&&t(y,D),b=a(U,b,j),I===null?z=U:I.sibling=U,I=U,D=V}if(j===S.length)return n(y,D),Qe&&So(y,j),z;if(D===null){for(;j<S.length;j++)D=_(y,S[j],P),D!==null&&(b=a(D,b,j),I===null?z=D:I.sibling=D,I=D);return Qe&&So(y,j),z}for(D=r(y,D);j<S.length;j++)V=g(D,y,j,S[j],P),V!==null&&(e&&V.alternate!==null&&D.delete(V.key===null?j:V.key),b=a(V,b,j),I===null?z=V:I.sibling=V,I=V);return e&&D.forEach(function(R){return t(y,R)}),Qe&&So(y,j),z}function w(y,b,S,P){var z=ma(S);if(typeof z!="function")throw Error(J(150));if(S=z.call(S),S==null)throw Error(J(151));for(var I=z=null,D=b,j=b=0,V=null,U=S.next();D!==null&&!U.done;j++,U=S.next()){D.index>j?(V=D,D=null):V=D.sibling;var R=p(y,D,U.value,P);if(R===null){D===null&&(D=V);break}e&&D&&R.alternate===null&&t(y,D),b=a(R,b,j),I===null?z=R:I.sibling=R,I=R,D=V}if(U.done)return n(y,D),Qe&&So(y,j),z;if(D===null){for(;!U.done;j++,U=S.next())U=_(y,U.value,P),U!==null&&(b=a(U,b,j),I===null?z=U:I.sibling=U,I=U);return Qe&&So(y,j),z}for(D=r(y,D);!U.done;j++,U=S.next())U=g(D,y,j,U.value,P),U!==null&&(e&&U.alternate!==null&&D.delete(U.key===null?j:U.key),b=a(U,b,j),I===null?z=U:I.sibling=U,I=U);return e&&D.forEach(function(Y){return t(y,Y)}),Qe&&So(y,j),z}function C(y,b,S,P){if(typeof S=="object"&&S!==null&&S.type===hi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case el:e:{for(var z=S.key,I=b;I!==null;){if(I.key===z){if(z=S.type,z===hi){if(I.tag===7){n(y,I.sibling),b=i(I,S.props.children),b.return=y,y=b;break e}}else if(I.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ar&&G_(z)===I.type){n(y,I.sibling),b=i(I,S.props),b.ref=ba(y,I,S),b.return=y,y=b;break e}n(y,I);break}else t(y,I);I=I.sibling}S.type===hi?(b=Bo(S.props.children,y.mode,P,S.key),b.return=y,y=b):(P=Rl(S.type,S.key,S.props,null,y.mode,P),P.ref=ba(y,b,S),P.return=y,y=P)}return l(y);case fi:e:{for(I=S.key;b!==null;){if(b.key===I)if(b.tag===4&&b.stateNode.containerInfo===S.containerInfo&&b.stateNode.implementation===S.implementation){n(y,b.sibling),b=i(b,S.children||[]),b.return=y,y=b;break e}else{n(y,b);break}else t(y,b);b=b.sibling}b=Rd(S,y.mode,P),b.return=y,y=b}return l(y);case Ar:return I=S._init,C(y,b,I(S._payload),P)}if(La(S))return x(y,b,S,P);if(ma(S))return w(y,b,S,P);dl(y,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,b!==null&&b.tag===6?(n(y,b.sibling),b=i(b,S),b.return=y,y=b):(n(y,b),b=zd(S,y.mode,P),b.return=y,y=b),l(y)):n(y,b)}return C}var Ui=Kb(!0),Qb=Kb(!1),Ps={},Kn=co(Ps),as=co(Ps),ss=co(Ps);function Lo(e){if(e===Ps)throw Error(J(174));return e}function fp(e,t){switch(Ze(ss,t),Ze(as,e),Ze(Kn,Ps),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vf(t,e)}Ve(Kn),Ze(Kn,t)}function $i(){Ve(Kn),Ve(as),Ve(ss)}function Gb(e){Lo(ss.current);var t=Lo(Kn.current),n=vf(t,e.type);t!==n&&(Ze(as,e),Ze(Kn,n))}function hp(e){as.current===e&&(Ve(Kn),Ve(as))}var Xe=co(0);function ou(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pd=[];function pp(){for(var e=0;e<Pd.length;e++)Pd[e]._workInProgressVersionPrimary=null;Pd.length=0}var El=xr.ReactCurrentDispatcher,Cd=xr.ReactCurrentBatchConfig,jo=0,Je=null,dt=null,_t=null,iu=!1,ja=!1,ls=0,WS=0;function Et(){throw Error(J(321))}function mp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zn(e[n],t[n]))return!1;return!0}function _p(e,t,n,r,i,a){if(jo=a,Je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,El.current=e===null||e.memoizedState===null?KS:QS,e=n(r,i),ja){a=0;do{if(ja=!1,ls=0,25<=a)throw Error(J(301));a+=1,_t=dt=null,t.updateQueue=null,El.current=GS,e=n(r,i)}while(ja)}if(El.current=au,t=dt!==null&&dt.next!==null,jo=0,_t=dt=Je=null,iu=!1,t)throw Error(J(300));return e}function vp(){var e=ls!==0;return ls=0,e}function Zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Je.memoizedState=_t=e:_t=_t.next=e,_t}function pn(){if(dt===null){var e=Je.alternate;e=e!==null?e.memoizedState:null}else e=dt.next;var t=_t===null?Je.memoizedState:_t.next;if(t!==null)_t=t,dt=e;else{if(e===null)throw Error(J(310));dt=e,e={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},_t===null?Je.memoizedState=_t=e:_t=_t.next=e}return _t}function us(e,t){return typeof t=="function"?t(e):t}function Ed(e){var t=pn(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var r=dt,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var u=l=null,d=null,f=a;do{var m=f.lane;if((jo&m)===m)d!==null&&(d=d.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var _={lane:m,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};d===null?(u=d=_,l=r):d=d.next=_,Je.lanes|=m,Uo|=m}f=f.next}while(f!==null&&f!==a);d===null?l=r:d.next=u,zn(r,t.memoizedState)||(Wt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Je.lanes|=a,Uo|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Od(e){var t=pn(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do a=e(a,l.action),l=l.next;while(l!==i);zn(a,t.memoizedState)||(Wt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Xb(){}function Jb(e,t){var n=Je,r=pn(),i=t(),a=!zn(r.memoizedState,i);if(a&&(r.memoizedState=i,Wt=!0),r=r.queue,gp(t0.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||_t!==null&&_t.memoizedState.tag&1){if(n.flags|=2048,cs(9,e0.bind(null,n,r,i,t),void 0,null),vt===null)throw Error(J(349));jo&30||Yb(n,t,i)}return i}function Yb(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Je.updateQueue,t===null?(t={lastEffect:null,stores:null},Je.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function e0(e,t,n,r){t.value=n,t.getSnapshot=r,n0(t)&&r0(e)}function t0(e,t,n){return n(function(){n0(t)&&r0(e)})}function n0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zn(e,n)}catch{return!0}}function r0(e){var t=vr(e,1);t!==null&&On(t,e,1,-1)}function X_(e){var t=Zn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:e},t.queue=e,e=e.dispatch=qS.bind(null,Je,e),[t.memoizedState,e]}function cs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Je.updateQueue,t===null?(t={lastEffect:null,stores:null},Je.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function o0(){return pn().memoizedState}function Ol(e,t,n,r){var i=Zn();Je.flags|=e,i.memoizedState=cs(1|t,n,void 0,r===void 0?null:r)}function qu(e,t,n,r){var i=pn();r=r===void 0?null:r;var a=void 0;if(dt!==null){var l=dt.memoizedState;if(a=l.destroy,r!==null&&mp(r,l.deps)){i.memoizedState=cs(t,n,a,r);return}}Je.flags|=e,i.memoizedState=cs(1|t,n,a,r)}function J_(e,t){return Ol(8390656,8,e,t)}function gp(e,t){return qu(2048,8,e,t)}function i0(e,t){return qu(4,2,e,t)}function a0(e,t){return qu(4,4,e,t)}function s0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function l0(e,t,n){return n=n!=null?n.concat([e]):null,qu(4,4,s0.bind(null,t,e),n)}function yp(){}function u0(e,t){var n=pn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function c0(e,t){var n=pn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function d0(e,t,n){return jo&21?(zn(n,t)||(n=pb(),Je.lanes|=n,Uo|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Wt=!0),e.memoizedState=n)}function HS(e,t){var n=Me;Me=n!==0&&4>n?n:4,e(!0);var r=Cd.transition;Cd.transition={};try{e(!1),t()}finally{Me=n,Cd.transition=r}}function f0(){return pn().memoizedState}function VS(e,t,n){var r=Kr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},h0(e))p0(t,n);else if(n=Wb(e,t,n,r),n!==null){var i=Dt();On(n,e,r,i),m0(n,t,r)}}function qS(e,t,n){var r=Kr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(h0(e))p0(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,u=a(l,n);if(i.hasEagerState=!0,i.eagerState=u,zn(u,l)){var d=t.interleaved;d===null?(i.next=i,cp(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=Wb(e,t,i,r),n!==null&&(i=Dt(),On(n,e,r,i),m0(n,t,r))}}function h0(e){var t=e.alternate;return e===Je||t!==null&&t===Je}function p0(e,t){ja=iu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function m0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gh(e,n)}}var au={readContext:hn,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useInsertionEffect:Et,useLayoutEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useMutableSource:Et,useSyncExternalStore:Et,useId:Et,unstable_isNewReconciler:!1},KS={readContext:hn,useCallback:function(e,t){return Zn().memoizedState=[e,t===void 0?null:t],e},useContext:hn,useEffect:J_,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ol(4194308,4,s0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ol(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ol(4,2,e,t)},useMemo:function(e,t){var n=Zn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Zn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=VS.bind(null,Je,e),[r.memoizedState,e]},useRef:function(e){var t=Zn();return e={current:e},t.memoizedState=e},useState:X_,useDebugValue:yp,useDeferredValue:function(e){return Zn().memoizedState=e},useTransition:function(){var e=X_(!1),t=e[0];return e=HS.bind(null,e[1]),Zn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Je,i=Zn();if(Qe){if(n===void 0)throw Error(J(407));n=n()}else{if(n=t(),vt===null)throw Error(J(349));jo&30||Yb(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,J_(t0.bind(null,r,a,e),[e]),r.flags|=2048,cs(9,e0.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Zn(),t=vt.identifierPrefix;if(Qe){var n=fr,r=dr;n=(r&~(1<<32-En(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ls++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=WS++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},QS={readContext:hn,useCallback:u0,useContext:hn,useEffect:gp,useImperativeHandle:l0,useInsertionEffect:i0,useLayoutEffect:a0,useMemo:c0,useReducer:Ed,useRef:o0,useState:function(){return Ed(us)},useDebugValue:yp,useDeferredValue:function(e){var t=pn();return d0(t,dt.memoizedState,e)},useTransition:function(){var e=Ed(us)[0],t=pn().memoizedState;return[e,t]},useMutableSource:Xb,useSyncExternalStore:Jb,useId:f0,unstable_isNewReconciler:!1},GS={readContext:hn,useCallback:u0,useContext:hn,useEffect:gp,useImperativeHandle:l0,useInsertionEffect:i0,useLayoutEffect:a0,useMemo:c0,useReducer:Od,useRef:o0,useState:function(){return Od(us)},useDebugValue:yp,useDeferredValue:function(e){var t=pn();return dt===null?t.memoizedState=e:d0(t,dt.memoizedState,e)},useTransition:function(){var e=Od(us)[0],t=pn().memoizedState;return[e,t]},useMutableSource:Xb,useSyncExternalStore:Jb,useId:f0,unstable_isNewReconciler:!1};function Zi(e,t){try{var n="",r=t;do n+=Sk(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Td(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function jf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var XS=typeof WeakMap=="function"?WeakMap:Map;function _0(e,t,n){n=hr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){lu||(lu=!0,Gf=r),jf(e,t)},n}function v0(e,t,n){n=hr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){jf(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){jf(e,t),typeof r!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Y_(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new XS;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=d2.bind(null,e,t,n),t.then(e,e))}function ev(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function tv(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=hr(-1,1),t.tag=2,Vr(n,t,1))),n.lanes|=1),e)}var JS=xr.ReactCurrentOwner,Wt=!1;function Mt(e,t,n,r){t.child=e===null?Qb(t,null,n,r):Ui(t,e.child,n,r)}function nv(e,t,n,r,i){n=n.render;var a=t.ref;return Ti(t,i),r=_p(e,t,n,r,a,i),n=vp(),e!==null&&!Wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,gr(e,t,i)):(Qe&&n&&op(t),t.flags|=1,Mt(e,t,r,i),t.child)}function rv(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Ep(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,g0(e,t,a,r,i)):(e=Rl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:ns,n(l,r)&&e.ref===t.ref)return gr(e,t,i)}return t.flags|=1,e=Qr(a,r),e.ref=t.ref,e.return=t,t.child=e}function g0(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(ns(a,r)&&e.ref===t.ref)if(Wt=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Wt=!0);else return t.lanes=e.lanes,gr(e,t,i)}return Uf(e,t,n,r,i)}function y0(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ze(ki,Qt),Qt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ze(ki,Qt),Qt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Ze(ki,Qt),Qt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Ze(ki,Qt),Qt|=r;return Mt(e,t,i,n),t.child}function b0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Uf(e,t,n,r,i){var a=Vt(n)?Do:Rt.current;return a=Fi(t,a),Ti(t,i),n=_p(e,t,n,r,a,i),r=vp(),e!==null&&!Wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,gr(e,t,i)):(Qe&&r&&op(t),t.flags|=1,Mt(e,t,n,i),t.child)}function ov(e,t,n,r,i){if(Vt(n)){var a=!0;Jl(t)}else a=!1;if(Ti(t,i),t.stateNode===null)Tl(e,t),qb(t,n,r),Ff(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var d=l.context,f=n.contextType;typeof f=="object"&&f!==null?f=hn(f):(f=Vt(n)?Do:Rt.current,f=Fi(t,f));var m=n.getDerivedStateFromProps,_=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";_||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||d!==f)&&Q_(t,l,r,f),Nr=!1;var p=t.memoizedState;l.state=p,ru(t,r,l,i),d=t.memoizedState,u!==r||p!==d||Ht.current||Nr?(typeof m=="function"&&(Df(t,n,m,r),d=t.memoizedState),(u=Nr||K_(t,n,u,r,p,d,f))?(_||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),l.props=r,l.state=d,l.context=f,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Hb(e,t),u=t.memoizedProps,f=t.type===t.elementType?u:kn(t.type,u),l.props=f,_=t.pendingProps,p=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=hn(d):(d=Vt(n)?Do:Rt.current,d=Fi(t,d));var g=n.getDerivedStateFromProps;(m=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==_||p!==d)&&Q_(t,l,r,d),Nr=!1,p=t.memoizedState,l.state=p,ru(t,r,l,i);var x=t.memoizedState;u!==_||p!==x||Ht.current||Nr?(typeof g=="function"&&(Df(t,n,g,r),x=t.memoizedState),(f=Nr||K_(t,n,f,r,p,x,d)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=d,r=f):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return $f(e,t,n,r,a,i)}function $f(e,t,n,r,i,a){b0(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Z_(t,n,!1),gr(e,t,a);r=t.stateNode,JS.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Ui(t,e.child,null,a),t.child=Ui(t,null,u,a)):Mt(e,t,u,a),t.memoizedState=r.state,i&&Z_(t,n,!0),t.child}function x0(e){var t=e.stateNode;t.pendingContext?$_(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$_(e,t.context,!1),fp(e,t.containerInfo)}function iv(e,t,n,r,i){return ji(),ap(i),t.flags|=256,Mt(e,t,n,r),t.child}var Zf={dehydrated:null,treeContext:null,retryLane:0};function Wf(e){return{baseLanes:e,cachePool:null,transitions:null}}function w0(e,t,n){var r=t.pendingProps,i=Xe.current,a=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ze(Xe,i&1),e===null)return If(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,a?(r=t.mode,a=t.child,l={mode:"hidden",children:l},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=Gu(l,r,0,null),e=Bo(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Wf(n),t.memoizedState=Zf,e):bp(t,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return YS(e,t,l,r,u,i,n);if(a){a=r.fallback,l=t.mode,i=e.child,u=i.sibling;var d={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Qr(i,d),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?a=Qr(u,a):(a=Bo(a,l,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,l=e.child.memoizedState,l=l===null?Wf(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=Zf,r}return a=e.child,e=a.sibling,r=Qr(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function bp(e,t){return t=Gu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fl(e,t,n,r){return r!==null&&ap(r),Ui(t,e.child,null,n),e=bp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function YS(e,t,n,r,i,a,l){if(n)return t.flags&256?(t.flags&=-257,r=Td(Error(J(422))),fl(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Gu({mode:"visible",children:r.children},i,0,null),a=Bo(a,i,l,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Ui(t,e.child,null,l),t.child.memoizedState=Wf(l),t.memoizedState=Zf,a);if(!(t.mode&1))return fl(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,a=Error(J(419)),r=Td(a,r,void 0),fl(e,t,l,r)}if(u=(l&e.childLanes)!==0,Wt||u){if(r=vt,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,vr(e,i),On(r,e,i,-1))}return Cp(),r=Td(Error(J(421))),fl(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=f2.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Gt=Hr(i.nextSibling),Xt=t,Qe=!0,Pn=null,e!==null&&(ln[un++]=dr,ln[un++]=fr,ln[un++]=Fo,dr=e.id,fr=e.overflow,Fo=t),t=bp(t,r.children),t.flags|=4096,t)}function av(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Mf(e.return,t,n)}function Ld(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function k0(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Mt(e,t,r.children,n),r=Xe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&av(e,n,t);else if(e.tag===19)av(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ze(Xe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ou(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ld(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ou(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ld(t,!0,n,null,a);break;case"together":Ld(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Tl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Uo|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(J(153));if(t.child!==null){for(e=t.child,n=Qr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function e2(e,t,n){switch(t.tag){case 3:x0(t),ji();break;case 5:Gb(t);break;case 1:Vt(t.type)&&Jl(t);break;case 4:fp(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ze(tu,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ze(Xe,Xe.current&1),t.flags|=128,null):n&t.child.childLanes?w0(e,t,n):(Ze(Xe,Xe.current&1),e=gr(e,t,n),e!==null?e.sibling:null);Ze(Xe,Xe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return k0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ze(Xe,Xe.current),r)break;return null;case 22:case 23:return t.lanes=0,y0(e,t,n)}return gr(e,t,n)}var S0,Hf,P0,C0;S0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hf=function(){};P0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Lo(Kn.current);var a=null;switch(n){case"input":i=hf(e,i),r=hf(e,r),a=[];break;case"select":i=Ye({},i,{value:void 0}),r=Ye({},r,{value:void 0}),a=[];break;case"textarea":i=_f(e,i),r=_f(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gl)}gf(n,r);var l;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var u=i[f];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Qa.hasOwnProperty(f)?a||(a=[]):(a=a||[]).push(f,null));for(f in r){var d=r[f];if(u=i?.[f],r.hasOwnProperty(f)&&d!==u&&(d!=null||u!=null))if(f==="style")if(u){for(l in u)!u.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&u[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(a||(a=[]),a.push(f,n)),n=d;else f==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(a=a||[]).push(f,d)):f==="children"?typeof d!="string"&&typeof d!="number"||(a=a||[]).push(f,""+d):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Qa.hasOwnProperty(f)?(d!=null&&f==="onScroll"&&He("scroll",e),a||u===d||(a=[])):(a=a||[]).push(f,d))}n&&(a=a||[]).push("style",n);var f=a;(t.updateQueue=f)&&(t.flags|=4)}};C0=function(e,t,n,r){n!==r&&(t.flags|=4)};function xa(e,t){if(!Qe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function t2(e,t,n){var r=t.pendingProps;switch(ip(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(t),null;case 1:return Vt(t.type)&&Xl(),Ot(t),null;case 3:return r=t.stateNode,$i(),Ve(Ht),Ve(Rt),pp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(cl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pn!==null&&(Yf(Pn),Pn=null))),Hf(e,t),Ot(t),null;case 5:hp(t);var i=Lo(ss.current);if(n=t.type,e!==null&&t.stateNode!=null)P0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(J(166));return Ot(t),null}if(e=Lo(Kn.current),cl(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Wn]=t,r[is]=a,e=(t.mode&1)!==0,n){case"dialog":He("cancel",r),He("close",r);break;case"iframe":case"object":case"embed":He("load",r);break;case"video":case"audio":for(i=0;i<Ra.length;i++)He(Ra[i],r);break;case"source":He("error",r);break;case"img":case"image":case"link":He("error",r),He("load",r);break;case"details":He("toggle",r);break;case"input":m_(r,a),He("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},He("invalid",r);break;case"textarea":v_(r,a),He("invalid",r)}gf(n,a),i=null;for(var l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="children"?typeof u=="string"?r.textContent!==u&&(a.suppressHydrationWarning!==!0&&ul(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(a.suppressHydrationWarning!==!0&&ul(r.textContent,u,e),i=["children",""+u]):Qa.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&He("scroll",r)}switch(n){case"input":tl(r),__(r,a,!0);break;case"textarea":tl(r),g_(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Gl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Yy(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Wn]=t,e[is]=r,S0(e,t,!1,!1),t.stateNode=e;e:{switch(l=yf(n,r),n){case"dialog":He("cancel",e),He("close",e),i=r;break;case"iframe":case"object":case"embed":He("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ra.length;i++)He(Ra[i],e);i=r;break;case"source":He("error",e),i=r;break;case"img":case"image":case"link":He("error",e),He("load",e),i=r;break;case"details":He("toggle",e),i=r;break;case"input":m_(e,r),i=hf(e,r),He("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ye({},r,{value:void 0}),He("invalid",e);break;case"textarea":v_(e,r),i=_f(e,r),He("invalid",e);break;default:i=r}gf(n,i),u=i;for(a in u)if(u.hasOwnProperty(a)){var d=u[a];a==="style"?nb(e,d):a==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&eb(e,d)):a==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Ga(e,d):typeof d=="number"&&Ga(e,""+d):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Qa.hasOwnProperty(a)?d!=null&&a==="onScroll"&&He("scroll",e):d!=null&&Wh(e,a,d,l))}switch(n){case"input":tl(e),__(e,r,!1);break;case"textarea":tl(e),g_(e);break;case"option":r.value!=null&&e.setAttribute("value",""+no(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Pi(e,!!r.multiple,a,!1):r.defaultValue!=null&&Pi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Gl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ot(t),null;case 6:if(e&&t.stateNode!=null)C0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(J(166));if(n=Lo(ss.current),Lo(Kn.current),cl(t)){if(r=t.stateNode,n=t.memoizedProps,r[Wn]=t,(a=r.nodeValue!==n)&&(e=Xt,e!==null))switch(e.tag){case 3:ul(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ul(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wn]=t,t.stateNode=r}return Ot(t),null;case 13:if(Ve(Xe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Qe&&Gt!==null&&t.mode&1&&!(t.flags&128))Zb(),ji(),t.flags|=98560,a=!1;else if(a=cl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(J(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(J(317));a[Wn]=t}else ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ot(t),a=!1}else Pn!==null&&(Yf(Pn),Pn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Xe.current&1?ft===0&&(ft=3):Cp())),t.updateQueue!==null&&(t.flags|=4),Ot(t),null);case 4:return $i(),Hf(e,t),e===null&&rs(t.stateNode.containerInfo),Ot(t),null;case 10:return up(t.type._context),Ot(t),null;case 17:return Vt(t.type)&&Xl(),Ot(t),null;case 19:if(Ve(Xe),a=t.memoizedState,a===null)return Ot(t),null;if(r=(t.flags&128)!==0,l=a.rendering,l===null)if(r)xa(a,!1);else{if(ft!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ou(e),l!==null){for(t.flags|=128,xa(a,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ze(Xe,Xe.current&1|2),t.child}e=e.sibling}a.tail!==null&&ot()>Wi&&(t.flags|=128,r=!0,xa(a,!1),t.lanes=4194304)}else{if(!r)if(e=ou(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!Qe)return Ot(t),null}else 2*ot()-a.renderingStartTime>Wi&&n!==1073741824&&(t.flags|=128,r=!0,xa(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ot(),t.sibling=null,n=Xe.current,Ze(Xe,r?n&1|2:n&1),t):(Ot(t),null);case 22:case 23:return Pp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Qt&1073741824&&(Ot(t),t.subtreeFlags&6&&(t.flags|=8192)):Ot(t),null;case 24:return null;case 25:return null}throw Error(J(156,t.tag))}function n2(e,t){switch(ip(t),t.tag){case 1:return Vt(t.type)&&Xl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $i(),Ve(Ht),Ve(Rt),pp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hp(t),null;case 13:if(Ve(Xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(J(340));ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ve(Xe),null;case 4:return $i(),null;case 10:return up(t.type._context),null;case 22:case 23:return Pp(),null;case 24:return null;default:return null}}var hl=!1,zt=!1,r2=typeof WeakSet=="function"?WeakSet:Set,ce=null;function wi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){et(e,t,r)}else n.current=null}function Vf(e,t,n){try{n()}catch(r){et(e,t,r)}}var sv=!1;function o2(e,t){if(Tf=ql,e=Lb(),rp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,u=-1,d=-1,f=0,m=0,_=e,p=null;t:for(;;){for(var g;_!==n||i!==0&&_.nodeType!==3||(u=l+i),_!==a||r!==0&&_.nodeType!==3||(d=l+r),_.nodeType===3&&(l+=_.nodeValue.length),(g=_.firstChild)!==null;)p=_,_=g;for(;;){if(_===e)break t;if(p===n&&++f===i&&(u=l),p===a&&++m===r&&(d=l),(g=_.nextSibling)!==null)break;_=p,p=_.parentNode}_=g}n=u===-1||d===-1?null:{start:u,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lf={focusedElem:e,selectionRange:n},ql=!1,ce=t;ce!==null;)if(t=ce,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ce=e;else for(;ce!==null;){t=ce;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,C=x.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?w:kn(t.type,w),C);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(P){et(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,ce=e;break}ce=t.return}return x=sv,sv=!1,x}function Ua(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Vf(t,n,a)}i=i.next}while(i!==r)}}function Ku(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function qf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function E0(e){var t=e.alternate;t!==null&&(e.alternate=null,E0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Wn],delete t[is],delete t[Af],delete t[jS],delete t[US])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function O0(e){return e.tag===5||e.tag===3||e.tag===4}function lv(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||O0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gl));else if(r!==4&&(e=e.child,e!==null))for(Kf(e,t,n),e=e.sibling;e!==null;)Kf(e,t,n),e=e.sibling}function Qf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Qf(e,t,n),e=e.sibling;e!==null;)Qf(e,t,n),e=e.sibling}var xt=null,Sn=!1;function Or(e,t,n){for(n=n.child;n!==null;)T0(e,t,n),n=n.sibling}function T0(e,t,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(ju,n)}catch{}switch(n.tag){case 5:zt||wi(n,t);case 6:var r=xt,i=Sn;xt=null,Or(e,t,n),xt=r,Sn=i,xt!==null&&(Sn?(e=xt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xt.removeChild(n.stateNode));break;case 18:xt!==null&&(Sn?(e=xt,n=n.stateNode,e.nodeType===8?kd(e.parentNode,n):e.nodeType===1&&kd(e,n),es(e)):kd(xt,n.stateNode));break;case 4:r=xt,i=Sn,xt=n.stateNode.containerInfo,Sn=!0,Or(e,t,n),xt=r,Sn=i;break;case 0:case 11:case 14:case 15:if(!zt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&Vf(n,t,l),i=i.next}while(i!==r)}Or(e,t,n);break;case 1:if(!zt&&(wi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){et(n,t,u)}Or(e,t,n);break;case 21:Or(e,t,n);break;case 22:n.mode&1?(zt=(r=zt)||n.memoizedState!==null,Or(e,t,n),zt=r):Or(e,t,n);break;default:Or(e,t,n)}}function uv(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new r2),t.forEach(function(r){var i=h2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function yn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:xt=u.stateNode,Sn=!1;break e;case 3:xt=u.stateNode.containerInfo,Sn=!0;break e;case 4:xt=u.stateNode.containerInfo,Sn=!0;break e}u=u.return}if(xt===null)throw Error(J(160));T0(a,l,i),xt=null,Sn=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(f){et(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)L0(t,e),t=t.sibling}function L0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yn(t,e),jn(e),r&4){try{Ua(3,e,e.return),Ku(3,e)}catch(w){et(e,e.return,w)}try{Ua(5,e,e.return)}catch(w){et(e,e.return,w)}}break;case 1:yn(t,e),jn(e),r&512&&n!==null&&wi(n,n.return);break;case 5:if(yn(t,e),jn(e),r&512&&n!==null&&wi(n,n.return),e.flags&32){var i=e.stateNode;try{Ga(i,"")}catch(w){et(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&a.type==="radio"&&a.name!=null&&Xy(i,a),yf(u,l);var f=yf(u,a);for(l=0;l<d.length;l+=2){var m=d[l],_=d[l+1];m==="style"?nb(i,_):m==="dangerouslySetInnerHTML"?eb(i,_):m==="children"?Ga(i,_):Wh(i,m,_,f)}switch(u){case"input":pf(i,a);break;case"textarea":Jy(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?Pi(i,!!a.multiple,g,!1):p!==!!a.multiple&&(a.defaultValue!=null?Pi(i,!!a.multiple,a.defaultValue,!0):Pi(i,!!a.multiple,a.multiple?[]:"",!1))}i[is]=a}catch(w){et(e,e.return,w)}}break;case 6:if(yn(t,e),jn(e),r&4){if(e.stateNode===null)throw Error(J(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(w){et(e,e.return,w)}}break;case 3:if(yn(t,e),jn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{es(t.containerInfo)}catch(w){et(e,e.return,w)}break;case 4:yn(t,e),jn(e);break;case 13:yn(t,e),jn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(kp=ot())),r&4&&uv(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(zt=(f=zt)||m,yn(t,e),zt=f):yn(t,e),jn(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!m&&e.mode&1)for(ce=e,m=e.child;m!==null;){for(_=ce=m;ce!==null;){switch(p=ce,g=p.child,p.tag){case 0:case 11:case 14:case 15:Ua(4,p,p.return);break;case 1:wi(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){et(r,n,w)}}break;case 5:wi(p,p.return);break;case 22:if(p.memoizedState!==null){dv(_);continue}}g!==null?(g.return=p,ce=g):dv(_)}m=m.sibling}e:for(m=null,_=e;;){if(_.tag===5){if(m===null){m=_;try{i=_.stateNode,f?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(u=_.stateNode,d=_.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=tb("display",l))}catch(w){et(e,e.return,w)}}}else if(_.tag===6){if(m===null)try{_.stateNode.nodeValue=f?"":_.memoizedProps}catch(w){et(e,e.return,w)}}else if((_.tag!==22&&_.tag!==23||_.memoizedState===null||_===e)&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===e)break e;for(;_.sibling===null;){if(_.return===null||_.return===e)break e;m===_&&(m=null),_=_.return}m===_&&(m=null),_.sibling.return=_.return,_=_.sibling}}break;case 19:yn(t,e),jn(e),r&4&&uv(e);break;case 21:break;default:yn(t,e),jn(e)}}function jn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(O0(n)){var r=n;break e}n=n.return}throw Error(J(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ga(i,""),r.flags&=-33);var a=lv(e);Qf(e,a,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=lv(e);Kf(e,u,l);break;default:throw Error(J(161))}}catch(d){et(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function i2(e,t,n){ce=e,z0(e)}function z0(e,t,n){for(var r=(e.mode&1)!==0;ce!==null;){var i=ce,a=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||hl;if(!l){var u=i.alternate,d=u!==null&&u.memoizedState!==null||zt;u=hl;var f=zt;if(hl=l,(zt=d)&&!f)for(ce=i;ce!==null;)l=ce,d=l.child,l.tag===22&&l.memoizedState!==null?fv(i):d!==null?(d.return=l,ce=d):fv(i);for(;a!==null;)ce=a,z0(a),a=a.sibling;ce=i,hl=u,zt=f}cv(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,ce=a):cv(e)}}function cv(e){for(;ce!==null;){var t=ce;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:zt||Ku(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!zt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:kn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&q_(t,a,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}q_(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var m=f.memoizedState;if(m!==null){var _=m.dehydrated;_!==null&&es(_)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}zt||t.flags&512&&qf(t)}catch(p){et(t,t.return,p)}}if(t===e){ce=null;break}if(n=t.sibling,n!==null){n.return=t.return,ce=n;break}ce=t.return}}function dv(e){for(;ce!==null;){var t=ce;if(t===e){ce=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ce=n;break}ce=t.return}}function fv(e){for(;ce!==null;){var t=ce;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ku(4,t)}catch(d){et(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(d){et(t,i,d)}}var a=t.return;try{qf(t)}catch(d){et(t,a,d)}break;case 5:var l=t.return;try{qf(t)}catch(d){et(t,l,d)}}}catch(d){et(t,t.return,d)}if(t===e){ce=null;break}var u=t.sibling;if(u!==null){u.return=t.return,ce=u;break}ce=t.return}}var a2=Math.ceil,su=xr.ReactCurrentDispatcher,xp=xr.ReactCurrentOwner,fn=xr.ReactCurrentBatchConfig,ze=0,vt=null,ut=null,kt=0,Qt=0,ki=co(0),ft=0,ds=null,Uo=0,Qu=0,wp=0,$a=null,Zt=null,kp=0,Wi=1/0,sr=null,lu=!1,Gf=null,qr=null,pl=!1,jr=null,uu=0,Za=0,Xf=null,Ll=-1,zl=0;function Dt(){return ze&6?ot():Ll!==-1?Ll:Ll=ot()}function Kr(e){return e.mode&1?ze&2&&kt!==0?kt&-kt:ZS.transition!==null?(zl===0&&(zl=pb()),zl):(e=Me,e!==0||(e=window.event,e=e===void 0?16:xb(e.type)),e):1}function On(e,t,n,r){if(50<Za)throw Za=0,Xf=null,Error(J(185));ws(e,n,r),(!(ze&2)||e!==vt)&&(e===vt&&(!(ze&2)&&(Qu|=n),ft===4&&Mr(e,kt)),qt(e,r),n===1&&ze===0&&!(t.mode&1)&&(Wi=ot()+500,Hu&&fo()))}function qt(e,t){var n=e.callbackNode;Zk(e,t);var r=Vl(e,e===vt?kt:0);if(r===0)n!==null&&x_(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&x_(n),t===1)e.tag===0?$S(hv.bind(null,e)):jb(hv.bind(null,e)),DS(function(){!(ze&6)&&fo()}),n=null;else{switch(mb(r)){case 1:n=Qh;break;case 4:n=fb;break;case 16:n=Hl;break;case 536870912:n=hb;break;default:n=Hl}n=F0(n,R0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function R0(e,t){if(Ll=-1,zl=0,ze&6)throw Error(J(327));var n=e.callbackNode;if(Li()&&e.callbackNode!==n)return null;var r=Vl(e,e===vt?kt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=cu(e,r);else{t=r;var i=ze;ze|=2;var a=N0();(vt!==e||kt!==t)&&(sr=null,Wi=ot()+500,No(e,t));do try{u2();break}catch(u){A0(e,u)}while(1);lp(),su.current=a,ze=i,ut!==null?t=0:(vt=null,kt=0,t=ft)}if(t!==0){if(t===2&&(i=Sf(e),i!==0&&(r=i,t=Jf(e,i))),t===1)throw n=ds,No(e,0),Mr(e,r),qt(e,ot()),n;if(t===6)Mr(e,r);else{if(i=e.current.alternate,!(r&30)&&!s2(i)&&(t=cu(e,r),t===2&&(a=Sf(e),a!==0&&(r=a,t=Jf(e,a))),t===1))throw n=ds,No(e,0),Mr(e,r),qt(e,ot()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(J(345));case 2:Po(e,Zt,sr);break;case 3:if(Mr(e,r),(r&130023424)===r&&(t=kp+500-ot(),10<t)){if(Vl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Dt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Rf(Po.bind(null,e,Zt,sr),t);break}Po(e,Zt,sr);break;case 4:if(Mr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-En(r);a=1<<l,l=t[l],l>i&&(i=l),r&=~a}if(r=i,r=ot()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*a2(r/1960))-r,10<r){e.timeoutHandle=Rf(Po.bind(null,e,Zt,sr),r);break}Po(e,Zt,sr);break;case 5:Po(e,Zt,sr);break;default:throw Error(J(329))}}}return qt(e,ot()),e.callbackNode===n?R0.bind(null,e):null}function Jf(e,t){var n=$a;return e.current.memoizedState.isDehydrated&&(No(e,t).flags|=256),e=cu(e,t),e!==2&&(t=Zt,Zt=n,t!==null&&Yf(t)),e}function Yf(e){Zt===null?Zt=e:Zt.push.apply(Zt,e)}function s2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!zn(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mr(e,t){for(t&=~wp,t&=~Qu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-En(t),r=1<<n;e[n]=-1,t&=~r}}function hv(e){if(ze&6)throw Error(J(327));Li();var t=Vl(e,0);if(!(t&1))return qt(e,ot()),null;var n=cu(e,t);if(e.tag!==0&&n===2){var r=Sf(e);r!==0&&(t=r,n=Jf(e,r))}if(n===1)throw n=ds,No(e,0),Mr(e,t),qt(e,ot()),n;if(n===6)throw Error(J(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Po(e,Zt,sr),qt(e,ot()),null}function Sp(e,t){var n=ze;ze|=1;try{return e(t)}finally{ze=n,ze===0&&(Wi=ot()+500,Hu&&fo())}}function $o(e){jr!==null&&jr.tag===0&&!(ze&6)&&Li();var t=ze;ze|=1;var n=fn.transition,r=Me;try{if(fn.transition=null,Me=1,e)return e()}finally{Me=r,fn.transition=n,ze=t,!(ze&6)&&fo()}}function Pp(){Qt=ki.current,Ve(ki)}function No(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,MS(n)),ut!==null)for(n=ut.return;n!==null;){var r=n;switch(ip(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xl();break;case 3:$i(),Ve(Ht),Ve(Rt),pp();break;case 5:hp(r);break;case 4:$i();break;case 13:Ve(Xe);break;case 19:Ve(Xe);break;case 10:up(r.type._context);break;case 22:case 23:Pp()}n=n.return}if(vt=e,ut=e=Qr(e.current,null),kt=Qt=t,ft=0,ds=null,wp=Qu=Uo=0,Zt=$a=null,To!==null){for(t=0;t<To.length;t++)if(n=To[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var l=a.next;a.next=i,r.next=l}n.pending=r}To=null}return e}function A0(e,t){do{var n=ut;try{if(lp(),El.current=au,iu){for(var r=Je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}iu=!1}if(jo=0,_t=dt=Je=null,ja=!1,ls=0,xp.current=null,n===null||n.return===null){ft=1,ds=t,ut=null;break}e:{var a=e,l=n.return,u=n,d=t;if(t=kt,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var f=d,m=u,_=m.tag;if(!(m.mode&1)&&(_===0||_===11||_===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var g=ev(l);if(g!==null){g.flags&=-257,tv(g,l,u,a,t),g.mode&1&&Y_(a,f,t),t=g,d=f;var x=t.updateQueue;if(x===null){var w=new Set;w.add(d),t.updateQueue=w}else x.add(d);break e}else{if(!(t&1)){Y_(a,f,t),Cp();break e}d=Error(J(426))}}else if(Qe&&u.mode&1){var C=ev(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),tv(C,l,u,a,t),ap(Zi(d,u));break e}}a=d=Zi(d,u),ft!==4&&(ft=2),$a===null?$a=[a]:$a.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var y=_0(a,d,t);V_(a,y);break e;case 1:u=d;var b=a.type,S=a.stateNode;if(!(a.flags&128)&&(typeof b.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(qr===null||!qr.has(S)))){a.flags|=65536,t&=-t,a.lanes|=t;var P=v0(a,u,t);V_(a,P);break e}}a=a.return}while(a!==null)}I0(n)}catch(z){t=z,ut===n&&n!==null&&(ut=n=n.return);continue}break}while(1)}function N0(){var e=su.current;return su.current=au,e===null?au:e}function Cp(){(ft===0||ft===3||ft===2)&&(ft=4),vt===null||!(Uo&268435455)&&!(Qu&268435455)||Mr(vt,kt)}function cu(e,t){var n=ze;ze|=2;var r=N0();(vt!==e||kt!==t)&&(sr=null,No(e,t));do try{l2();break}catch(i){A0(e,i)}while(1);if(lp(),ze=n,su.current=r,ut!==null)throw Error(J(261));return vt=null,kt=0,ft}function l2(){for(;ut!==null;)B0(ut)}function u2(){for(;ut!==null&&!Nk();)B0(ut)}function B0(e){var t=D0(e.alternate,e,Qt);e.memoizedProps=e.pendingProps,t===null?I0(e):ut=t,xp.current=null}function I0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=n2(n,t),n!==null){n.flags&=32767,ut=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ft=6,ut=null;return}}else if(n=t2(n,t,Qt),n!==null){ut=n;return}if(t=t.sibling,t!==null){ut=t;return}ut=t=e}while(t!==null);ft===0&&(ft=5)}function Po(e,t,n){var r=Me,i=fn.transition;try{fn.transition=null,Me=1,c2(e,t,n,r)}finally{fn.transition=i,Me=r}return null}function c2(e,t,n,r){do Li();while(jr!==null);if(ze&6)throw Error(J(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(J(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Wk(e,a),e===vt&&(ut=vt=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pl||(pl=!0,F0(Hl,function(){return Li(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=fn.transition,fn.transition=null;var l=Me;Me=1;var u=ze;ze|=4,xp.current=null,o2(e,n),L0(n,e),LS(Lf),ql=!!Tf,Lf=Tf=null,e.current=n,i2(n),Bk(),ze=u,Me=l,fn.transition=a}else e.current=n;if(pl&&(pl=!1,jr=e,uu=i),a=e.pendingLanes,a===0&&(qr=null),Dk(n.stateNode),qt(e,ot()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(lu)throw lu=!1,e=Gf,Gf=null,e;return uu&1&&e.tag!==0&&Li(),a=e.pendingLanes,a&1?e===Xf?Za++:(Za=0,Xf=e):Za=0,fo(),null}function Li(){if(jr!==null){var e=mb(uu),t=fn.transition,n=Me;try{if(fn.transition=null,Me=16>e?16:e,jr===null)var r=!1;else{if(e=jr,jr=null,uu=0,ze&6)throw Error(J(331));var i=ze;for(ze|=4,ce=e.current;ce!==null;){var a=ce,l=a.child;if(ce.flags&16){var u=a.deletions;if(u!==null){for(var d=0;d<u.length;d++){var f=u[d];for(ce=f;ce!==null;){var m=ce;switch(m.tag){case 0:case 11:case 15:Ua(8,m,a)}var _=m.child;if(_!==null)_.return=m,ce=_;else for(;ce!==null;){m=ce;var p=m.sibling,g=m.return;if(E0(m),m===f){ce=null;break}if(p!==null){p.return=g,ce=p;break}ce=g}}}var x=a.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}ce=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,ce=l;else e:for(;ce!==null;){if(a=ce,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Ua(9,a,a.return)}var y=a.sibling;if(y!==null){y.return=a.return,ce=y;break e}ce=a.return}}var b=e.current;for(ce=b;ce!==null;){l=ce;var S=l.child;if(l.subtreeFlags&2064&&S!==null)S.return=l,ce=S;else e:for(l=b;ce!==null;){if(u=ce,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Ku(9,u)}}catch(z){et(u,u.return,z)}if(u===l){ce=null;break e}var P=u.sibling;if(P!==null){P.return=u.return,ce=P;break e}ce=u.return}}if(ze=i,fo(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(ju,e)}catch{}r=!0}return r}finally{Me=n,fn.transition=t}}return!1}function pv(e,t,n){t=Zi(n,t),t=_0(e,t,1),e=Vr(e,t,1),t=Dt(),e!==null&&(ws(e,1,t),qt(e,t))}function et(e,t,n){if(e.tag===3)pv(e,e,n);else for(;t!==null;){if(t.tag===3){pv(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qr===null||!qr.has(r))){e=Zi(n,e),e=v0(t,e,1),t=Vr(t,e,1),e=Dt(),t!==null&&(ws(t,1,e),qt(t,e));break}}t=t.return}}function d2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Dt(),e.pingedLanes|=e.suspendedLanes&n,vt===e&&(kt&n)===n&&(ft===4||ft===3&&(kt&130023424)===kt&&500>ot()-kp?No(e,0):wp|=n),qt(e,t)}function M0(e,t){t===0&&(e.mode&1?(t=ol,ol<<=1,!(ol&130023424)&&(ol=4194304)):t=1);var n=Dt();e=vr(e,t),e!==null&&(ws(e,t,n),qt(e,n))}function f2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),M0(e,n)}function h2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(J(314))}r!==null&&r.delete(t),M0(e,n)}var D0;D0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ht.current)Wt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Wt=!1,e2(e,t,n);Wt=!!(e.flags&131072)}else Wt=!1,Qe&&t.flags&1048576&&Ub(t,eu,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Tl(e,t),e=t.pendingProps;var i=Fi(t,Rt.current);Ti(t,n),i=_p(null,t,r,e,i,n);var a=vp();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Vt(r)?(a=!0,Jl(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,dp(t),i.updater=Vu,t.stateNode=i,i._reactInternals=t,Ff(t,r,e,n),t=$f(null,t,r,!0,a,n)):(t.tag=0,Qe&&a&&op(t),Mt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Tl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=m2(r),e=kn(r,e),i){case 0:t=Uf(null,t,r,e,n);break e;case 1:t=ov(null,t,r,e,n);break e;case 11:t=nv(null,t,r,e,n);break e;case 14:t=rv(null,t,r,kn(r.type,e),n);break e}throw Error(J(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kn(r,i),Uf(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kn(r,i),ov(e,t,r,i,n);case 3:e:{if(x0(t),e===null)throw Error(J(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Hb(e,t),ru(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Zi(Error(J(423)),t),t=iv(e,t,r,n,i);break e}else if(r!==i){i=Zi(Error(J(424)),t),t=iv(e,t,r,n,i);break e}else for(Gt=Hr(t.stateNode.containerInfo.firstChild),Xt=t,Qe=!0,Pn=null,n=Qb(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ji(),r===i){t=gr(e,t,n);break e}Mt(e,t,r,n)}t=t.child}return t;case 5:return Gb(t),e===null&&If(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,l=i.children,zf(r,i)?l=null:a!==null&&zf(r,a)&&(t.flags|=32),b0(e,t),Mt(e,t,l,n),t.child;case 6:return e===null&&If(t),null;case 13:return w0(e,t,n);case 4:return fp(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ui(t,null,r,n):Mt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kn(r,i),nv(e,t,r,i,n);case 7:return Mt(e,t,t.pendingProps,n),t.child;case 8:return Mt(e,t,t.pendingProps.children,n),t.child;case 12:return Mt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,Ze(tu,r._currentValue),r._currentValue=l,a!==null)if(zn(a.value,l)){if(a.children===i.children&&!Ht.current){t=gr(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){l=a.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(a.tag===1){d=hr(-1,n&-n),d.tag=2;var f=a.updateQueue;if(f!==null){f=f.shared;var m=f.pending;m===null?d.next=d:(d.next=m.next,m.next=d),f.pending=d}}a.lanes|=n,d=a.alternate,d!==null&&(d.lanes|=n),Mf(a.return,n,t),u.lanes|=n;break}d=d.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(J(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Mf(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}Mt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ti(t,n),i=hn(i),r=r(i),t.flags|=1,Mt(e,t,r,n),t.child;case 14:return r=t.type,i=kn(r,t.pendingProps),i=kn(r.type,i),rv(e,t,r,i,n);case 15:return g0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kn(r,i),Tl(e,t),t.tag=1,Vt(r)?(e=!0,Jl(t)):e=!1,Ti(t,n),qb(t,r,i),Ff(t,r,i,n),$f(null,t,r,!0,e,n);case 19:return k0(e,t,n);case 22:return y0(e,t,n)}throw Error(J(156,t.tag))};function F0(e,t){return db(e,t)}function p2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(e,t,n,r){return new p2(e,t,n,r)}function Ep(e){return e=e.prototype,!(!e||!e.isReactComponent)}function m2(e){if(typeof e=="function")return Ep(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vh)return 11;if(e===qh)return 14}return 2}function Qr(e,t){var n=e.alternate;return n===null?(n=cn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rl(e,t,n,r,i,a){var l=2;if(r=e,typeof e=="function")Ep(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case hi:return Bo(n.children,i,a,t);case Hh:l=8,i|=8;break;case uf:return e=cn(12,n,t,i|2),e.elementType=uf,e.lanes=a,e;case cf:return e=cn(13,n,t,i),e.elementType=cf,e.lanes=a,e;case df:return e=cn(19,n,t,i),e.elementType=df,e.lanes=a,e;case Ky:return Gu(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vy:l=10;break e;case qy:l=9;break e;case Vh:l=11;break e;case qh:l=14;break e;case Ar:l=16,r=null;break e}throw Error(J(130,e==null?e:typeof e,""))}return t=cn(l,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Bo(e,t,n,r){return e=cn(7,e,r,t),e.lanes=n,e}function Gu(e,t,n,r){return e=cn(22,e,r,t),e.elementType=Ky,e.lanes=n,e.stateNode={isHidden:!1},e}function zd(e,t,n){return e=cn(6,e,null,t),e.lanes=n,e}function Rd(e,t,n){return t=cn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fd(0),this.expirationTimes=fd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Op(e,t,n,r,i,a,l,u,d){return e=new _2(e,t,n,u,d),t===1?(t=1,a===!0&&(t|=8)):t=0,a=cn(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dp(a),e}function v2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function j0(e){if(!e)return ro;e=e._reactInternals;e:{if(Ko(e)!==e||e.tag!==1)throw Error(J(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Vt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(J(171))}if(e.tag===1){var n=e.type;if(Vt(n))return Fb(e,n,t)}return t}function U0(e,t,n,r,i,a,l,u,d){return e=Op(n,r,!0,e,i,a,l,u,d),e.context=j0(null),n=e.current,r=Dt(),i=Kr(n),a=hr(r,i),a.callback=t??null,Vr(n,a,i),e.current.lanes=i,ws(e,i,r),qt(e,r),e}function Xu(e,t,n,r){var i=t.current,a=Dt(),l=Kr(i);return n=j0(n),t.context===null?t.context=n:t.pendingContext=n,t=hr(a,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vr(i,t,l),e!==null&&(On(e,i,l,a),Cl(e,i,l)),l}function du(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Tp(e,t){mv(e,t),(e=e.alternate)&&mv(e,t)}function g2(){return null}var $0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Lp(e){this._internalRoot=e}Ju.prototype.render=Lp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(J(409));Xu(e,t,null,null)};Ju.prototype.unmount=Lp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$o(function(){Xu(null,e,null,null)}),t[_r]=null}};function Ju(e){this._internalRoot=e}Ju.prototype.unstable_scheduleHydration=function(e){if(e){var t=gb();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ir.length&&t!==0&&t<Ir[n].priority;n++);Ir.splice(n,0,e),n===0&&bb(e)}};function zp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _v(){}function y2(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var f=du(l);a.call(f)}}var l=U0(t,r,e,0,null,!1,!1,"",_v);return e._reactRootContainer=l,e[_r]=l.current,rs(e.nodeType===8?e.parentNode:e),$o(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var f=du(d);u.call(f)}}var d=Op(e,0,!1,null,null,!1,!1,"",_v);return e._reactRootContainer=d,e[_r]=d.current,rs(e.nodeType===8?e.parentNode:e),$o(function(){Xu(t,d,n,r)}),d}function ec(e,t,n,r,i){var a=n._reactRootContainer;if(a){var l=a;if(typeof i=="function"){var u=i;i=function(){var d=du(l);u.call(d)}}Xu(t,l,e,i)}else l=y2(n,t,e,i,r);return du(l)}_b=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=za(t.pendingLanes);n!==0&&(Gh(t,n|1),qt(t,ot()),!(ze&6)&&(Wi=ot()+500,fo()))}break;case 13:$o(function(){var r=vr(e,1);if(r!==null){var i=Dt();On(r,e,1,i)}}),Tp(e,1)}};Xh=function(e){if(e.tag===13){var t=vr(e,134217728);if(t!==null){var n=Dt();On(t,e,134217728,n)}Tp(e,134217728)}};vb=function(e){if(e.tag===13){var t=Kr(e),n=vr(e,t);if(n!==null){var r=Dt();On(n,e,t,r)}Tp(e,t)}};gb=function(){return Me};yb=function(e,t){var n=Me;try{return Me=e,t()}finally{Me=n}};xf=function(e,t,n){switch(t){case"input":if(pf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Wu(r);if(!i)throw Error(J(90));Gy(r),pf(r,i)}}}break;case"textarea":Jy(e,n);break;case"select":t=n.value,t!=null&&Pi(e,!!n.multiple,t,!1)}};ib=Sp;ab=$o;var b2={usingClientEntryPoint:!1,Events:[Ss,vi,Wu,rb,ob,Sp]},wa={findFiberByHostInstance:Oo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},x2={bundleType:wa.bundleType,version:wa.version,rendererPackageName:wa.rendererPackageName,rendererConfig:wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ub(e),e===null?null:e.stateNode},findFiberByHostInstance:wa.findFiberByHostInstance||g2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ml.isDisabled&&ml.supportsFiber)try{ju=ml.inject(x2),qn=ml}catch{}}en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b2;en.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zp(t))throw Error(J(200));return v2(e,t,null,n)};en.createRoot=function(e,t){if(!zp(e))throw Error(J(299));var n=!1,r="",i=$0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Op(e,1,!1,null,null,n,!1,r,i),e[_r]=t.current,rs(e.nodeType===8?e.parentNode:e),new Lp(t)};en.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(J(188)):(e=Object.keys(e).join(","),Error(J(268,e)));return e=ub(t),e=e===null?null:e.stateNode,e};en.flushSync=function(e){return $o(e)};en.hydrate=function(e,t,n){if(!Yu(t))throw Error(J(200));return ec(null,e,t,!0,n)};en.hydrateRoot=function(e,t,n){if(!zp(e))throw Error(J(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",l=$0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=U0(t,null,e,1,n??null,i,!1,a,l),e[_r]=t.current,rs(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ju(t)};en.render=function(e,t,n){if(!Yu(t))throw Error(J(200));return ec(null,e,t,!1,n)};en.unmountComponentAtNode=function(e){if(!Yu(e))throw Error(J(40));return e._reactRootContainer?($o(function(){ec(null,null,e,!1,function(){e._reactRootContainer=null,e[_r]=null})}),!0):!1};en.unstable_batchedUpdates=Sp;en.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Yu(n))throw Error(J(200));if(e==null||e._reactInternals===void 0)throw Error(J(38));return ec(e,t,n,!1,r)};en.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=en})(gk);const w2=Ny(Mi);var Z0,vv=Mi;Z0=vv.createRoot,vv.hydrateRoot;var eh={},k2={get exports(){return eh},set exports(e){eh=e}},W0={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hi=T;function S2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var P2=typeof Object.is=="function"?Object.is:S2,C2=Hi.useState,E2=Hi.useEffect,O2=Hi.useLayoutEffect,T2=Hi.useDebugValue;function L2(e,t){var n=t(),r=C2({inst:{value:n,getSnapshot:t}}),i=r[0].inst,a=r[1];return O2(function(){i.value=n,i.getSnapshot=t,Ad(i)&&a({inst:i})},[e,n,t]),E2(function(){return Ad(i)&&a({inst:i}),e(function(){Ad(i)&&a({inst:i})})},[e]),T2(n),n}function Ad(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!P2(e,n)}catch{return!0}}function z2(e,t){return t()}var R2=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?z2:L2;W0.useSyncExternalStore=Hi.useSyncExternalStore!==void 0?Hi.useSyncExternalStore:R2;(function(e){e.exports=W0})(k2);var th={},A2={get exports(){return th},set exports(e){th=e}},H0={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tc=T,N2=eh;function B2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var I2=typeof Object.is=="function"?Object.is:B2,M2=N2.useSyncExternalStore,D2=tc.useRef,F2=tc.useEffect,j2=tc.useMemo,U2=tc.useDebugValue;H0.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var a=D2(null);if(a.current===null){var l={hasValue:!1,value:null};a.current=l}else l=a.current;a=j2(function(){function d(g){if(!f){if(f=!0,m=g,g=r(g),i!==void 0&&l.hasValue){var x=l.value;if(i(x,g))return _=x}return _=g}if(x=_,I2(m,g))return x;var w=r(g);return i!==void 0&&i(x,w)?x:(m=g,_=w)}var f=!1,m,_,p=n===void 0?null:n;return[function(){return d(t())},p===null?void 0:function(){return d(p())}]},[t,n,r,i]);var u=M2(e,a[0],a[1]);return F2(function(){l.hasValue=!0,l.value=u},[u]),U2(u),u};(function(e){e.exports=H0})(A2);function $2(e){e()}let V0=$2;const Z2=e=>V0=e,W2=()=>V0,oo=T.createContext(null);function q0(){return T.useContext(oo)}const H2=()=>{throw new Error("uSES not initialized!")};let K0=H2;const V2=e=>{K0=e},q2=(e,t)=>e===t;function K2(e=oo){const t=e===oo?q0:()=>T.useContext(e);return function(r,i=q2){const{store:a,subscription:l,getServerState:u}=t(),d=K0(l.addNestedSub,a.getState,u||a.getState,r,i);return T.useDebugValue(d),d}}const Q2=K2();function Ie(){return Ie=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ie.apply(this,arguments)}var nh={},G2={get exports(){return nh},set exports(e){nh=e}},De={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gt=typeof Symbol=="function"&&Symbol.for,Rp=gt?Symbol.for("react.element"):60103,Ap=gt?Symbol.for("react.portal"):60106,nc=gt?Symbol.for("react.fragment"):60107,rc=gt?Symbol.for("react.strict_mode"):60108,oc=gt?Symbol.for("react.profiler"):60114,ic=gt?Symbol.for("react.provider"):60109,ac=gt?Symbol.for("react.context"):60110,Np=gt?Symbol.for("react.async_mode"):60111,sc=gt?Symbol.for("react.concurrent_mode"):60111,lc=gt?Symbol.for("react.forward_ref"):60112,uc=gt?Symbol.for("react.suspense"):60113,X2=gt?Symbol.for("react.suspense_list"):60120,cc=gt?Symbol.for("react.memo"):60115,dc=gt?Symbol.for("react.lazy"):60116,J2=gt?Symbol.for("react.block"):60121,Y2=gt?Symbol.for("react.fundamental"):60117,eP=gt?Symbol.for("react.responder"):60118,tP=gt?Symbol.for("react.scope"):60119;function nn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Rp:switch(e=e.type,e){case Np:case sc:case nc:case oc:case rc:case uc:return e;default:switch(e=e&&e.$$typeof,e){case ac:case lc:case dc:case cc:case ic:return e;default:return t}}case Ap:return t}}}function Q0(e){return nn(e)===sc}De.AsyncMode=Np;De.ConcurrentMode=sc;De.ContextConsumer=ac;De.ContextProvider=ic;De.Element=Rp;De.ForwardRef=lc;De.Fragment=nc;De.Lazy=dc;De.Memo=cc;De.Portal=Ap;De.Profiler=oc;De.StrictMode=rc;De.Suspense=uc;De.isAsyncMode=function(e){return Q0(e)||nn(e)===Np};De.isConcurrentMode=Q0;De.isContextConsumer=function(e){return nn(e)===ac};De.isContextProvider=function(e){return nn(e)===ic};De.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Rp};De.isForwardRef=function(e){return nn(e)===lc};De.isFragment=function(e){return nn(e)===nc};De.isLazy=function(e){return nn(e)===dc};De.isMemo=function(e){return nn(e)===cc};De.isPortal=function(e){return nn(e)===Ap};De.isProfiler=function(e){return nn(e)===oc};De.isStrictMode=function(e){return nn(e)===rc};De.isSuspense=function(e){return nn(e)===uc};De.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===nc||e===sc||e===oc||e===rc||e===uc||e===X2||typeof e=="object"&&e!==null&&(e.$$typeof===dc||e.$$typeof===cc||e.$$typeof===ic||e.$$typeof===ac||e.$$typeof===lc||e.$$typeof===Y2||e.$$typeof===eP||e.$$typeof===tP||e.$$typeof===J2)};De.typeOf=nn;(function(e){e.exports=De})(G2);var G0=nh,nP={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},rP={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},X0={};X0[G0.ForwardRef]=nP;X0[G0.Memo]=rP;var gv={},oP={get exports(){return gv},set exports(e){gv=e}},Fe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp=Symbol.for("react.element"),Ip=Symbol.for("react.portal"),fc=Symbol.for("react.fragment"),hc=Symbol.for("react.strict_mode"),pc=Symbol.for("react.profiler"),mc=Symbol.for("react.provider"),_c=Symbol.for("react.context"),iP=Symbol.for("react.server_context"),vc=Symbol.for("react.forward_ref"),gc=Symbol.for("react.suspense"),yc=Symbol.for("react.suspense_list"),bc=Symbol.for("react.memo"),xc=Symbol.for("react.lazy"),aP=Symbol.for("react.offscreen"),J0;J0=Symbol.for("react.module.reference");function mn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Bp:switch(e=e.type,e){case fc:case pc:case hc:case gc:case yc:return e;default:switch(e=e&&e.$$typeof,e){case iP:case _c:case vc:case xc:case bc:case mc:return e;default:return t}}case Ip:return t}}}Fe.ContextConsumer=_c;Fe.ContextProvider=mc;Fe.Element=Bp;Fe.ForwardRef=vc;Fe.Fragment=fc;Fe.Lazy=xc;Fe.Memo=bc;Fe.Portal=Ip;Fe.Profiler=pc;Fe.StrictMode=hc;Fe.Suspense=gc;Fe.SuspenseList=yc;Fe.isAsyncMode=function(){return!1};Fe.isConcurrentMode=function(){return!1};Fe.isContextConsumer=function(e){return mn(e)===_c};Fe.isContextProvider=function(e){return mn(e)===mc};Fe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Bp};Fe.isForwardRef=function(e){return mn(e)===vc};Fe.isFragment=function(e){return mn(e)===fc};Fe.isLazy=function(e){return mn(e)===xc};Fe.isMemo=function(e){return mn(e)===bc};Fe.isPortal=function(e){return mn(e)===Ip};Fe.isProfiler=function(e){return mn(e)===pc};Fe.isStrictMode=function(e){return mn(e)===hc};Fe.isSuspense=function(e){return mn(e)===gc};Fe.isSuspenseList=function(e){return mn(e)===yc};Fe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===fc||e===pc||e===hc||e===gc||e===yc||e===aP||typeof e=="object"&&e!==null&&(e.$$typeof===xc||e.$$typeof===bc||e.$$typeof===mc||e.$$typeof===_c||e.$$typeof===vc||e.$$typeof===J0||e.getModuleId!==void 0)};Fe.typeOf=mn;(function(e){e.exports=Fe})(oP);function sP(){const e=W2();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,a=n={callback:r,next:null,prev:n};return a.prev?a.prev.next=a:t=a,function(){!i||t===null||(i=!1,a.next?a.next.prev=a.prev:n=a.prev,a.prev?a.prev.next=a.next:t=a.next)}}}}const yv={notify(){},get:()=>[]};function lP(e,t){let n,r=yv;function i(_){return d(),r.subscribe(_)}function a(){r.notify()}function l(){m.onStateChange&&m.onStateChange()}function u(){return Boolean(n)}function d(){n||(n=t?t.addNestedSub(l):e.subscribe(l),r=sP())}function f(){n&&(n(),n=void 0,r.clear(),r=yv)}const m={addNestedSub:i,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:d,tryUnsubscribe:f,getListeners:()=>r};return m}const uP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cP=uP?T.useLayoutEffect:T.useEffect;function dP({store:e,context:t,children:n,serverState:r}){const i=T.useMemo(()=>{const u=lP(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0}},[e,r]),a=T.useMemo(()=>e.getState(),[e]);cP(()=>{const{subscription:u}=i;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[i,a]);const l=t||oo;return Z.createElement(l.Provider,{value:i},n)}function Y0(e=oo){const t=e===oo?q0:()=>T.useContext(e);return function(){const{store:r}=t();return r}}const fP=Y0();function hP(e=oo){const t=e===oo?fP:Y0(e);return function(){return t().dispatch}}const pP=hP();V2(th.useSyncExternalStoreWithSelector);Z2(Mi.unstable_batchedUpdates);/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Be(){return Be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Be.apply(this,arguments)}var lt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(lt||(lt={}));const bv="popstate";function mP(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:l,hash:u}=r.location;return fs("",{pathname:a,search:l,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Zo(i)}return vP(t,n,null,e)}function ke(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function _P(){return Math.random().toString(36).substr(2,8)}function xv(e,t){return{usr:e.state,key:e.key,idx:t}}function fs(e,t,n,r){return n===void 0&&(n=null),Be({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?wr(t):t,{state:n,key:t&&t.key||r||_P()})}function Zo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function wr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function vP(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,l=i.history,u=lt.Pop,d=null,f=m();f==null&&(f=0,l.replaceState(Be({},l.state,{idx:f}),""));function m(){return(l.state||{idx:null}).idx}function _(){u=lt.Pop;let C=m(),y=C==null?null:C-f;f=C,d&&d({action:u,location:w.location,delta:y})}function p(C,y){u=lt.Push;let b=fs(w.location,C,y);n&&n(b,C),f=m()+1;let S=xv(b,f),P=w.createHref(b);try{l.pushState(S,"",P)}catch{i.location.assign(P)}a&&d&&d({action:u,location:w.location,delta:1})}function g(C,y){u=lt.Replace;let b=fs(w.location,C,y);n&&n(b,C),f=m();let S=xv(b,f),P=w.createHref(b);l.replaceState(S,"",P),a&&d&&d({action:u,location:w.location,delta:0})}function x(C){let y=i.location.origin!=="null"?i.location.origin:i.location.href,b=typeof C=="string"?C:Zo(C);return ke(y,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,y)}let w={get action(){return u},get location(){return e(i,l)},listen(C){if(d)throw new Error("A history only accepts one active listener");return i.addEventListener(bv,_),d=C,()=>{i.removeEventListener(bv,_),d=null}},createHref(C){return t(i,C)},createURL:x,encodeLocation(C){let y=x(C);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:p,replace:g,go(C){return l.go(C)}};return w}var wt;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(wt||(wt={}));function gP(e){return e.index===!0}function e1(e,t,n){return t===void 0&&(t=[]),n===void 0&&(n=new Set),e.map((r,i)=>{let a=[...t,i],l=typeof r.id=="string"?r.id:a.join("-");return ke(r.index!==!0||!r.children,"Cannot specify children on an index route"),ke(!n.has(l),'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),n.add(l),gP(r)?Be({},r,{id:l}):Be({},r,{id:l,children:r.children?e1(r.children,a,n):void 0})})}function Aa(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?wr(t):t,i=r1(r.pathname||"/",n);if(i==null)return null;let a=t1(e);yP(a);let l=null;for(let u=0;l==null&&u<a.length;++u)l=OP(a[u],zP(i));return l}function t1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,l,u)=>{let d={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};d.relativePath.startsWith("/")&&(ke(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let f=Gr([r,d.relativePath]),m=n.concat(d);a.children&&a.children.length>0&&(ke(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),t1(a.children,t,m,f)),!(a.path==null&&!a.index)&&t.push({path:f,score:CP(f,a.index),routesMeta:m})};return e.forEach((a,l)=>{var u;if(a.path===""||!((u=a.path)!=null&&u.includes("?")))i(a,l);else for(let d of n1(a.path))i(a,l,d)}),t}function n1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let l=n1(r.join("/")),u=[];return u.push(...l.map(d=>d===""?a:[a,d].join("/"))),i&&u.push(...l),u.map(d=>e.startsWith("/")&&d===""?"/":d)}function yP(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:EP(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bP=/^:\w+$/,xP=3,wP=2,kP=1,SP=10,PP=-2,wv=e=>e==="*";function CP(e,t){let n=e.split("/"),r=n.length;return n.some(wv)&&(r+=PP),t&&(r+=wP),n.filter(i=>!wv(i)).reduce((i,a)=>i+(bP.test(a)?xP:a===""?kP:SP),r)}function EP(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function OP(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let l=0;l<n.length;++l){let u=n[l],d=l===n.length-1,f=i==="/"?t:t.slice(i.length)||"/",m=TP({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f);if(!m)return null;Object.assign(r,m.params);let _=u.route;a.push({params:r,pathname:Gr([i,m.pathname]),pathnameBase:BP(Gr([i,m.pathnameBase])),route:_}),m.pathnameBase!=="/"&&(i=Gr([i,m.pathnameBase]))}return a}function TP(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=LP(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:r.reduce((f,m,_)=>{if(m==="*"){let p=u[_]||"";l=a.slice(0,a.length-p.length).replace(/(.)\/+$/,"$1")}return f[m]=RP(u[_]||"",m),f},{}),pathname:a,pathnameBase:l,pattern:e}}function LP(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),hs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,u)=>(r.push(u),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function zP(e){try{return decodeURI(e)}catch(t){return hs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function RP(e,t){try{return decodeURIComponent(e)}catch(n){return hs(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function r1(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function hs(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function AP(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?wr(e):e;return{pathname:n?n.startsWith("/")?n:NP(n,t):t,search:IP(r),hash:MP(i)}}function NP(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Nd(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Mp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function o1(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=wr(e):(i=Be({},e),ke(!i.pathname||!i.pathname.includes("?"),Nd("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),Nd("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),Nd("#","search","hash",i)));let a=e===""||i.pathname==="",l=a?"/":i.pathname,u;if(r||l==null)u=n;else{let _=t.length-1;if(l.startsWith("..")){let p=l.split("/");for(;p[0]==="..";)p.shift(),_-=1;i.pathname=p.join("/")}u=_>=0?t[_]:"/"}let d=AP(i,u),f=l&&l!=="/"&&l.endsWith("/"),m=(a||l===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(f||m)&&(d.pathname+="/"),d}const Gr=e=>e.join("/").replace(/\/\/+/g,"/"),BP=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),IP=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,MP=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class kv extends Error{}class DP{constructor(t,n){this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],ke(t&&typeof t=="object"&&!Array.isArray(t),"defer() only accepts plain objects");let r;this.abortPromise=new Promise((a,l)=>r=l),this.controller=new AbortController;let i=()=>r(new kv("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",i),this.controller.signal.addEventListener("abort",i),this.data=Object.entries(t).reduce((a,l)=>{let[u,d]=l;return Object.assign(a,{[u]:this.trackPromise(u,d)})},{}),this.done&&this.unlistenAbortSignal(),this.init=n}trackPromise(t,n){if(!(n instanceof Promise))return n;this.deferredKeys.push(t),this.pendingKeysSet.add(t);let r=Promise.race([n,this.abortPromise]).then(i=>this.onSettle(r,t,null,i),i=>this.onSettle(r,t,i));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(t,n,r,i){return this.controller.signal.aborted&&r instanceof kv?(this.unlistenAbortSignal(),Object.defineProperty(t,"_error",{get:()=>r}),Promise.reject(r)):(this.pendingKeysSet.delete(n),this.done&&this.unlistenAbortSignal(),r?(Object.defineProperty(t,"_error",{get:()=>r}),this.emit(!1,n),Promise.reject(r)):(Object.defineProperty(t,"_data",{get:()=>i}),this.emit(!1,n),i))}emit(t,n){this.subscribers.forEach(r=>r(t,n))}subscribe(t){return this.subscribers.add(t),()=>this.subscribers.delete(t)}cancel(){this.controller.abort(),this.pendingKeysSet.forEach((t,n)=>this.pendingKeysSet.delete(n)),this.emit(!0)}async resolveData(t){let n=!1;if(!this.done){let r=()=>this.cancel();t.addEventListener("abort",r),n=await new Promise(i=>{this.subscribe(a=>{t.removeEventListener("abort",r),(a||this.done)&&i(a)})})}return n}get done(){return this.pendingKeysSet.size===0}get unwrappedData(){return ke(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((t,n)=>{let[r,i]=n;return Object.assign(t,{[r]:jP(i)})},{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}}function FP(e){return e instanceof Promise&&e._tracked===!0}function jP(e){if(!FP(e))return e;if(e._error)throw e._error;return e._data}class Dp{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function i1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const a1=["post","put","patch","delete"],UP=new Set(a1),$P=["get",...a1],ZP=new Set($P),WP=new Set([301,302,303,307,308]),HP=new Set([307,308]),Bd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},VP={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Sv={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},s1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,l1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qP=!l1;function KP(e){ke(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=e1(e.routes),n=null,r=new Set,i=null,a=null,l=null,u=e.hydrationData!=null,d=Aa(t,e.history.location,e.basename),f=null;if(d==null){let W=Rr(404,{pathname:e.history.location.pathname}),{matches:H,route:G}=Lv(t);d=H,f={[G.id]:W}}let m=!d.some(W=>W.route.loader)||e.hydrationData!=null,_,p={historyAction:e.history.action,location:e.history.location,matches:d,initialized:m,navigation:Bd,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||f,fetchers:new Map,blockers:new Map},g=lt.Pop,x=!1,w,C=!1,y=!1,b=[],S=[],P=new Map,z=0,I=-1,D=new Map,j=new Set,V=new Map,U=new Map,R=new Map,Y=!1;function _e(){return n=e.history.listen(W=>{let{action:H,location:G,delta:le}=W;if(Y){Y=!1;return}hs(R.size===0||le!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ie=Bn({currentLocation:p.location,nextLocation:G,historyAction:H});if(ie&&le!=null){Y=!0,e.history.go(le*-1),Ct(ie,{state:"blocked",location:G,proceed(){Ct(ie,{state:"proceeding",proceed:void 0,reset:void 0,location:G}),e.history.go(le)},reset(){Ne(ie),ee({blockers:new Map(_.state.blockers)})}});return}return K(H,G)}),p.initialized||K(lt.Pop,p.location),_}function re(){n&&n(),r.clear(),w&&w.abort(),p.fetchers.forEach((W,H)=>Re(H)),p.blockers.forEach((W,H)=>Ne(H))}function fe(W){return r.add(W),()=>r.delete(W)}function ee(W){p=Be({},p,W),r.forEach(H=>H(p))}function ue(W,H){var G,le;let ie=p.actionData!=null&&p.navigation.formMethod!=null&&lr(p.navigation.formMethod)&&p.navigation.state==="loading"&&((G=W.state)==null?void 0:G._isRedirect)!==!0,ve;H.actionData?Object.keys(H.actionData).length>0?ve=H.actionData:ve=null:ie?ve=p.actionData:ve=null;let pe=H.loaderData?Tv(p.loaderData,H.loaderData,H.matches||[],H.errors):p.loaderData;for(let[me]of R)Ne(me);let ye=x===!0||p.navigation.formMethod!=null&&lr(p.navigation.formMethod)&&((le=W.state)==null?void 0:le._isRedirect)!==!0;ee(Be({},H,{actionData:ve,loaderData:pe,historyAction:g,location:W,initialized:!0,navigation:Bd,revalidation:"idle",restoreScrollPosition:Sr(W,H.matches||p.matches),preventScrollReset:ye,blockers:new Map(p.blockers)})),C||g===lt.Pop||(g===lt.Push?e.history.push(W,W.state):g===lt.Replace&&e.history.replace(W,W.state)),g=lt.Pop,x=!1,C=!1,y=!1,b=[],S=[]}async function M(W,H){if(typeof W=="number"){e.history.go(W);return}let{path:G,submission:le,error:ie}=Pv(W,H),ve=p.location,pe=fs(p.location,G,H&&H.state);pe=Be({},pe,e.history.encodeLocation(pe));let ye=H&&H.replace!=null?H.replace:void 0,me=lt.Push;ye===!0?me=lt.Replace:ye===!1||le!=null&&lr(le.formMethod)&&le.formAction===p.location.pathname+p.location.search&&(me=lt.Replace);let it=H&&"preventScrollReset"in H?H.preventScrollReset===!0:void 0,xe=Bn({currentLocation:ve,nextLocation:pe,historyAction:me});if(xe){Ct(xe,{state:"blocked",location:pe,proceed(){Ct(xe,{state:"proceeding",proceed:void 0,reset:void 0,location:pe}),M(W,H)},reset(){Ne(xe),ee({blockers:new Map(p.blockers)})}});return}return await K(me,pe,{submission:le,pendingError:ie,preventScrollReset:it,replace:H&&H.replace})}function oe(){if(Ue(),ee({revalidation:"loading"}),p.navigation.state!=="submitting"){if(p.navigation.state==="idle"){K(p.historyAction,p.location,{startUninterruptedRevalidation:!0});return}K(g||p.historyAction,p.navigation.location,{overrideNavigation:p.navigation})}}async function K(W,H,G){w&&w.abort(),w=null,g=W,C=(G&&G.startUninterruptedRevalidation)===!0,Nt(p.location,p.matches),x=(G&&G.preventScrollReset)===!0;let le=G&&G.overrideNavigation,ie=Aa(t,H,e.basename);if(!ie){let je=Rr(404,{pathname:H.pathname}),{matches:Bt,route:yt}=Lv(t);$t(),ue(H,{matches:Bt,loaderData:{},errors:{[yt.id]:je}});return}if(YP(p.location,H)&&!(G&&G.submission&&lr(G.submission.formMethod))){ue(H,{matches:ie});return}w=new AbortController;let ve=Sa(e.history,H,w.signal,G&&G.submission),pe,ye;if(G&&G.pendingError)ye={[Si(ie).route.id]:G.pendingError};else if(G&&G.submission&&lr(G.submission.formMethod)){let je=await O(ve,H,G.submission,ie,{replace:G.replace});if(je.shortCircuited)return;pe=je.pendingActionData,ye=je.pendingActionError,le=Be({state:"loading",location:H},G.submission),ve=new Request(ve.url,{signal:ve.signal})}let{shortCircuited:me,loaderData:it,errors:xe}=await B(ve,H,ie,le,G&&G.submission,G&&G.replace,pe,ye);me||(w=null,ue(H,Be({matches:ie},pe?{actionData:pe}:{},{loaderData:it,errors:xe})))}async function O(W,H,G,le,ie){Ue();let ve=Be({state:"submitting",location:H},G);ee({navigation:ve});let pe,ye=Nv(le,H);if(!ye.route.action)pe={type:wt.error,error:Rr(405,{method:W.method,pathname:H.pathname,routeId:ye.route.id})};else if(pe=await ka("action",W,ye,le,_.basename),W.signal.aborted)return{shortCircuited:!0};if(zi(pe)){let me;return ie&&ie.replace!=null?me=ie.replace:me=pe.location===p.location.pathname+p.location.search,await ne(p,pe,{submission:G,replace:me}),{shortCircuited:!0}}if(Wa(pe)){let me=Si(le,ye.route.id);return(ie&&ie.replace)!==!0&&(g=lt.Push),{pendingActionData:{},pendingActionError:{[me.route.id]:pe.error}}}if(zo(pe))throw Rr(400,{type:"defer-action"});return{pendingActionData:{[ye.route.id]:pe.data}}}async function B(W,H,G,le,ie,ve,pe,ye){let me=le;me||(me=Be({state:"loading",location:H,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ie));let it=ie||(me.formMethod&&me.formAction&&me.formData&&me.formEncType?{formMethod:me.formMethod,formAction:me.formAction,formData:me.formData,formEncType:me.formEncType}:void 0),[xe,je]=Cv(e.history,p,G,it,H,y,b,S,pe,ye,V);if($t(pt=>!(G&&G.some(rn=>rn.route.id===pt))||xe&&xe.some(rn=>rn.route.id===pt)),xe.length===0&&je.length===0)return ue(H,Be({matches:G,loaderData:{},errors:ye||null},pe?{actionData:pe}:{})),{shortCircuited:!0};if(!C){je.forEach(rn=>{let er=p.fetchers.get(rn.key),Xo={state:"loading",data:er&&er.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};p.fetchers.set(rn.key,Xo)});let pt=pe||p.actionData;ee(Be({navigation:me},pt?Object.keys(pt).length===0?{actionData:null}:{actionData:pt}:{},je.length>0?{fetchers:new Map(p.fetchers)}:{}))}I=++z,je.forEach(pt=>P.set(pt.key,w));let{results:Bt,loaderResults:yt,fetcherResults:ho}=await se(p.matches,G,xe,je,W);if(W.signal.aborted)return{shortCircuited:!0};je.forEach(pt=>P.delete(pt.key));let Qo=zv(Bt);if(Qo)return await ne(p,Qo,{replace:ve}),{shortCircuited:!0};let{loaderData:po,errors:Yn}=Ov(p,G,xe,yt,ye,je,ho,U);U.forEach((pt,rn)=>{pt.subscribe(er=>{(er||pt.done)&&U.delete(rn)})}),Te();let Go=Kt(I);return Be({loaderData:po,errors:Yn},Go||je.length>0?{fetchers:new Map(p.fetchers)}:{})}function A(W){return p.fetchers.get(W)||VP}function Q(W,H,G,le){if(qP)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");P.has(W)&&Ee(W);let ie=Aa(t,G,e.basename);if(!ie){We(W,H,Rr(404,{pathname:G}));return}let{path:ve,submission:pe}=Pv(G,le,!0),ye=Nv(ie,ve);if(x=(le&&le.preventScrollReset)===!0,pe&&lr(pe.formMethod)){te(W,H,ve,ye,ie,pe);return}V.set(W,{routeId:H,path:ve,match:ye,matches:ie}),$(W,H,ve,ye,ie,pe)}async function te(W,H,G,le,ie,ve){if(Ue(),V.delete(W),!le.route.action){let _n=Rr(405,{method:ve.formMethod,pathname:G,routeId:H});We(W,H,_n);return}let pe=p.fetchers.get(W),ye=Be({state:"submitting"},ve,{data:pe&&pe.data," _hasFetcherDoneAnything ":!0});p.fetchers.set(W,ye),ee({fetchers:new Map(p.fetchers)});let me=new AbortController,it=Sa(e.history,G,me.signal,ve);P.set(W,me);let xe=await ka("action",it,le,ie,_.basename);if(it.signal.aborted){P.get(W)===me&&P.delete(W);return}if(zi(xe)){P.delete(W),j.add(W);let _n=Be({state:"loading"},ve,{data:void 0," _hasFetcherDoneAnything ":!0});return p.fetchers.set(W,_n),ee({fetchers:new Map(p.fetchers)}),ne(p,xe,{isFetchActionRedirect:!0})}if(Wa(xe)){We(W,H,xe.error);return}if(zo(xe))throw Rr(400,{type:"defer-action"});let je=p.navigation.location||p.location,Bt=Sa(e.history,je,me.signal),yt=p.navigation.state!=="idle"?Aa(t,p.navigation.location,e.basename):p.matches;ke(yt,"Didn't find any matches after fetcher action");let ho=++z;D.set(W,ho);let Qo=Be({state:"loading",data:xe.data},ve,{" _hasFetcherDoneAnything ":!0});p.fetchers.set(W,Qo);let[po,Yn]=Cv(e.history,p,yt,ve,je,y,b,S,{[le.route.id]:xe.data},void 0,V);Yn.filter(_n=>_n.key!==W).forEach(_n=>{let na=_n.key,As=p.fetchers.get(na),Nc={state:"loading",data:As&&As.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};p.fetchers.set(na,Nc),P.set(na,me)}),ee({fetchers:new Map(p.fetchers)});let{results:Go,loaderResults:pt,fetcherResults:rn}=await se(p.matches,yt,po,Yn,Bt);if(me.signal.aborted)return;D.delete(W),P.delete(W),Yn.forEach(_n=>P.delete(_n.key));let er=zv(Go);if(er)return ne(p,er);let{loaderData:Xo,errors:ea}=Ov(p,p.matches,po,pt,void 0,Yn,rn,U),Ac={state:"idle",data:xe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};p.fetchers.set(W,Ac);let ta=Kt(ho);p.navigation.state==="loading"&&ho>I?(ke(g,"Expected pending action"),w&&w.abort(),ue(p.navigation.location,{matches:yt,loaderData:Xo,errors:ea,fetchers:new Map(p.fetchers)})):(ee(Be({errors:ea,loaderData:Tv(p.loaderData,Xo,yt,ea)},ta?{fetchers:new Map(p.fetchers)}:{})),y=!1)}async function $(W,H,G,le,ie,ve){let pe=p.fetchers.get(W),ye=Be({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ve,{data:pe&&pe.data," _hasFetcherDoneAnything ":!0});p.fetchers.set(W,ye),ee({fetchers:new Map(p.fetchers)});let me=new AbortController,it=Sa(e.history,G,me.signal);P.set(W,me);let xe=await ka("loader",it,le,ie,_.basename);if(zo(xe)&&(xe=await f1(xe,it.signal,!0)||xe),P.get(W)===me&&P.delete(W),it.signal.aborted)return;if(zi(xe)){await ne(p,xe);return}if(Wa(xe)){let Bt=Si(p.matches,H);p.fetchers.delete(W),ee({fetchers:new Map(p.fetchers),errors:{[Bt.route.id]:xe.error}});return}ke(!zo(xe),"Unhandled fetcher deferred data");let je={state:"idle",data:xe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};p.fetchers.set(W,je),ee({fetchers:new Map(p.fetchers)})}async function ne(W,H,G){var le;let{submission:ie,replace:ve,isFetchActionRedirect:pe}=G===void 0?{}:G;H.revalidate&&(y=!0);let ye=fs(W.location,H.location,Be({_isRedirect:!0},pe?{_isFetchActionRedirect:!0}:{}));if(ke(ye,"Expected a location on the redirect navigation"),s1.test(H.location)&&l1&&typeof((le=window)==null?void 0:le.location)<"u"){let yt=e.history.createURL(H.location).origin;if(window.location.origin!==yt){ve?window.location.replace(H.location):window.location.assign(H.location);return}}w=null;let me=ve===!0?lt.Replace:lt.Push,{formMethod:it,formAction:xe,formEncType:je,formData:Bt}=W.navigation;!ie&&it&&xe&&Bt&&je&&(ie={formMethod:it,formAction:xe,formEncType:je,formData:Bt}),HP.has(H.status)&&ie&&lr(ie.formMethod)?await K(me,ye,{submission:Be({},ie,{formAction:H.location}),preventScrollReset:x}):await K(me,ye,{overrideNavigation:{state:"loading",location:ye,formMethod:ie?ie.formMethod:void 0,formAction:ie?ie.formAction:void 0,formEncType:ie?ie.formEncType:void 0,formData:ie?ie.formData:void 0},preventScrollReset:x})}async function se(W,H,G,le,ie){let ve=await Promise.all([...G.map(me=>ka("loader",ie,me,H,_.basename)),...le.map(me=>ka("loader",Sa(e.history,me.path,ie.signal),me.match,me.matches,_.basename))]),pe=ve.slice(0,G.length),ye=ve.slice(G.length);return await Promise.all([Rv(W,G,pe,ie.signal,!1,p.loaderData),Rv(W,le.map(me=>me.match),ye,ie.signal,!0)]),{results:ve,loaderResults:pe,fetcherResults:ye}}function Ue(){y=!0,b.push(...$t()),V.forEach((W,H)=>{P.has(H)&&(S.push(H),Ee(H))})}function We(W,H,G){let le=Si(p.matches,H);Re(W),ee({errors:{[le.route.id]:G},fetchers:new Map(p.fetchers)})}function Re(W){P.has(W)&&Ee(W),V.delete(W),D.delete(W),j.delete(W),p.fetchers.delete(W)}function Ee(W){let H=P.get(W);ke(H,"Expected fetch controller: "+W),H.abort(),P.delete(W)}function qe(W){for(let H of W){let le={state:"idle",data:A(H).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};p.fetchers.set(H,le)}}function Te(){let W=[];for(let H of j){let G=p.fetchers.get(H);ke(G,"Expected fetcher: "+H),G.state==="loading"&&(j.delete(H),W.push(H))}qe(W)}function Kt(W){let H=[];for(let[G,le]of D)if(le<W){let ie=p.fetchers.get(G);ke(ie,"Expected fetcher: "+G),ie.state==="loading"&&(Ee(G),D.delete(G),H.push(G))}return qe(H),H.length>0}function Ut(W,H){let G=p.blockers.get(W)||Sv;return R.get(W)!==H&&R.set(W,H),G}function Ne(W){p.blockers.delete(W),R.delete(W)}function Ct(W,H){let G=p.blockers.get(W)||Sv;ke(G.state==="unblocked"&&H.state==="blocked"||G.state==="blocked"&&H.state==="blocked"||G.state==="blocked"&&H.state==="proceeding"||G.state==="blocked"&&H.state==="unblocked"||G.state==="proceeding"&&H.state==="unblocked","Invalid blocker state transition: "+G.state+" -> "+H.state),p.blockers.set(W,H),ee({blockers:new Map(p.blockers)})}function Bn(W){let{currentLocation:H,nextLocation:G,historyAction:le}=W;if(R.size===0)return;R.size>1&&hs(!1,"A router only supports one blocker at a time");let ie=Array.from(R.entries()),[ve,pe]=ie[ie.length-1],ye=p.blockers.get(ve);if(!(ye&&ye.state==="proceeding")&&pe({currentLocation:H,nextLocation:G,historyAction:le}))return ve}function $t(W){let H=[];return U.forEach((G,le)=>{(!W||W(le))&&(G.cancel(),H.push(le),U.delete(le))}),H}function Jn(W,H,G){if(i=W,l=H,a=G||(le=>le.key),!u&&p.navigation===Bd){u=!0;let le=Sr(p.location,p.matches);le!=null&&ee({restoreScrollPosition:le})}return()=>{i=null,l=null,a=null}}function Nt(W,H){if(i&&a&&l){let G=H.map(ie=>Av(ie,p.loaderData)),le=a(W,G)||W.key;i[le]=l()}}function Sr(W,H){if(i&&a&&l){let G=H.map(ve=>Av(ve,p.loaderData)),le=a(W,G)||W.key,ie=i[le];if(typeof ie=="number")return ie}return null}return _={get basename(){return e.basename},get state(){return p},get routes(){return t},initialize:_e,subscribe:fe,enableScrollRestoration:Jn,navigate:M,fetch:Q,revalidate:oe,createHref:W=>e.history.createHref(W),encodeLocation:W=>e.history.encodeLocation(W),getFetcher:A,deleteFetcher:Re,dispose:re,getBlocker:Ut,deleteBlocker:Ne,_internalFetchControllers:P,_internalActiveDeferreds:U},_}function QP(e){return e!=null&&"formData"in e}function Pv(e,t,n){n===void 0&&(n=!1);let r=typeof e=="string"?e:Zo(e);if(!t||!QP(t))return{path:r};if(t.formMethod&&!tC(t.formMethod))return{path:r,error:Rr(405,{method:t.formMethod})};let i;if(t.formData&&(i={formMethod:t.formMethod||"get",formAction:d1(r),formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:t.formData},lr(i.formMethod)))return{path:r,submission:i};let a=wr(r),l=c1(t.formData);return n&&a.search&&h1(a.search)&&l.append("index",""),a.search="?"+l,{path:Zo(a),submission:i}}function GP(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Cv(e,t,n,r,i,a,l,u,d,f,m){let _=f?Object.values(f)[0]:d?Object.values(d)[0]:void 0,p=e.createURL(t.location),g=e.createURL(i),x=a||p.toString()===g.toString()||p.search!==g.search,w=f?Object.keys(f)[0]:void 0,y=GP(n,w).filter((S,P)=>{if(S.route.loader==null)return!1;if(XP(t.loaderData,t.matches[P],S)||l.some(D=>D===S.route.id))return!0;let z=t.matches[P],I=S;return Ev(S,Be({currentUrl:p,currentParams:z.params,nextUrl:g,nextParams:I.params},r,{actionResult:_,defaultShouldRevalidate:x||u1(z,I)}))}),b=[];return m&&m.forEach((S,P)=>{if(n.some(z=>z.route.id===S.routeId))u.includes(P)?b.push(Be({key:P},S)):Ev(S.match,Be({currentUrl:p,currentParams:t.matches[t.matches.length-1].params,nextUrl:g,nextParams:n[n.length-1].params},r,{actionResult:_,defaultShouldRevalidate:x}))&&b.push(Be({key:P},S));else return}),[y,b]}function XP(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function u1(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Ev(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function ka(e,t,n,r,i,a,l,u){i===void 0&&(i="/"),a===void 0&&(a=!1),l===void 0&&(l=!1);let d,f,m,_=new Promise((g,x)=>m=x),p=()=>m();t.signal.addEventListener("abort",p);try{let g=n.route[e];ke(g,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),f=await Promise.race([g({request:t,params:n.params,context:u}),_]),ke(f!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(g){d=wt.error,f=g}finally{t.signal.removeEventListener("abort",p)}if(eC(f)){let g=f.status;if(WP.has(g)){let C=f.headers.get("Location");if(ke(C,"Redirects returned/thrown from loaders/actions must have a Location header"),s1.test(C)){if(!a){let y=new URL(t.url),b=C.startsWith("//")?new URL(y.protocol+C):new URL(C);b.origin===y.origin&&(C=b.pathname+b.search+b.hash)}}else{let y=r.slice(0,r.indexOf(n)+1),b=Mp(y).map(P=>P.pathnameBase),S=o1(C,b,new URL(t.url).pathname);if(ke(Zo(S),"Unable to resolve redirect location: "+C),i){let P=S.pathname;S.pathname=P==="/"?i:Gr([i,P])}C=Zo(S)}if(a)throw f.headers.set("Location",C),f;return{type:wt.redirect,status:g,location:C,revalidate:f.headers.get("X-Remix-Revalidate")!==null}}if(l)throw{type:d||wt.data,response:f};let x,w=f.headers.get("Content-Type");return w&&/\bapplication\/json\b/.test(w)?x=await f.json():x=await f.text(),d===wt.error?{type:d,error:new Dp(g,f.statusText,x),headers:f.headers}:{type:wt.data,data:x,statusCode:f.status,headers:f.headers}}return d===wt.error?{type:d,error:f}:f instanceof DP?{type:wt.deferred,deferredData:f}:{type:wt.data,data:f}}function Sa(e,t,n,r){let i=e.createURL(d1(t)).toString(),a={signal:n};if(r&&lr(r.formMethod)){let{formMethod:l,formEncType:u,formData:d}=r;a.method=l.toUpperCase(),a.body=u==="application/x-www-form-urlencoded"?c1(d):d}return new Request(i,a)}function c1(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function JP(e,t,n,r,i){let a={},l=null,u,d=!1,f={};return n.forEach((m,_)=>{let p=t[_].route.id;if(ke(!zi(m),"Cannot handle redirect results in processLoaderData"),Wa(m)){let g=Si(e,p),x=m.error;r&&(x=Object.values(r)[0],r=void 0),l=l||{},l[g.route.id]==null&&(l[g.route.id]=x),a[p]=void 0,d||(d=!0,u=i1(m.error)?m.error.status:500),m.headers&&(f[p]=m.headers)}else zo(m)?(i.set(p,m.deferredData),a[p]=m.deferredData.data):a[p]=m.data,m.statusCode!=null&&m.statusCode!==200&&!d&&(u=m.statusCode),m.headers&&(f[p]=m.headers)}),r&&(l=r,a[Object.keys(r)[0]]=void 0),{loaderData:a,errors:l,statusCode:u||200,loaderHeaders:f}}function Ov(e,t,n,r,i,a,l,u){let{loaderData:d,errors:f}=JP(t,n,r,i,u);for(let m=0;m<a.length;m++){let{key:_,match:p}=a[m];ke(l!==void 0&&l[m]!==void 0,"Did not find corresponding fetcher result");let g=l[m];if(Wa(g)){let x=Si(e.matches,p.route.id);f&&f[x.route.id]||(f=Be({},f,{[x.route.id]:g.error})),e.fetchers.delete(_)}else if(zi(g))ke(!1,"Unhandled fetcher revalidation redirect");else if(zo(g))ke(!1,"Unhandled fetcher deferred data");else{let x={state:"idle",data:g.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(_,x)}}return{loaderData:d,errors:f}}function Tv(e,t,n,r){let i=Be({},t);for(let a of n){let l=a.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(i[l]=t[l]):e[l]!==void 0&&(i[l]=e[l]),r&&r.hasOwnProperty(l))break}return i}function Si(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Lv(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Rr(e,t){let{pathname:n,routeId:r,method:i,type:a}=t===void 0?{}:t,l="Unknown Server Error",u="Unknown @remix-run/router error";return e===400?(l="Bad Request",i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a==="defer-action"&&(u="defer() is not supported in actions")):e===403?(l="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",u='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new Dp(e||500,l,new Error(u),!0)}function zv(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(zi(n))return n}}function d1(e){let t=typeof e=="string"?wr(e):e;return Zo(Be({},t,{hash:""}))}function YP(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function zo(e){return e.type===wt.deferred}function Wa(e){return e.type===wt.error}function zi(e){return(e&&e.type)===wt.redirect}function eC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function tC(e){return ZP.has(e)}function lr(e){return UP.has(e)}async function Rv(e,t,n,r,i,a){for(let l=0;l<n.length;l++){let u=n[l],d=t[l],f=e.find(_=>_.route.id===d.route.id),m=f!=null&&!u1(f,d)&&(a&&a[d.route.id])!==void 0;zo(u)&&(i||m)&&await f1(u,r,i).then(_=>{_&&(n[l]=_||n[l])})}}async function f1(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:wt.data,data:e.deferredData.unwrappedData}}catch(i){return{type:wt.error,error:i}}return{type:wt.data,data:e.deferredData.data}}}function h1(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Av(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function Nv(e,t){let n=typeof t=="string"?wr(t).search:t.search;if(e[e.length-1].route.index&&h1(n||""))return e[e.length-1];let r=Mp(e);return r[r.length-1]}/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fu(){return fu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fu.apply(this,arguments)}function nC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const rC=typeof Object.is=="function"?Object.is:nC,{useState:oC,useEffect:iC,useLayoutEffect:aC,useDebugValue:sC}=Ka;function lC(e,t,n){const r=t(),[{inst:i},a]=oC({inst:{value:r,getSnapshot:t}});return aC(()=>{i.value=r,i.getSnapshot=t,Id(i)&&a({inst:i})},[e,r,t]),iC(()=>(Id(i)&&a({inst:i}),e(()=>{Id(i)&&a({inst:i})})),[e]),sC(r),r}function Id(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!rC(n,r)}catch{return!0}}function uC(e,t,n){return t()}const cC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dC=!cC,fC=dC?uC:lC,hC="useSyncExternalStore"in Ka?(e=>e.useSyncExternalStore)(Ka):fC,Fp=T.createContext(null),jp=T.createContext(null),Up=T.createContext(null),wc=T.createContext(null),Cs=T.createContext({outlet:null,matches:[]}),p1=T.createContext(null);function kc(){return T.useContext(wc)!=null}function m1(){return kc()||ke(!1),T.useContext(wc).location}function pC(){kc()||ke(!1);let{basename:e,navigator:t}=T.useContext(Up),{matches:n}=T.useContext(Cs),{pathname:r}=m1(),i=JSON.stringify(Mp(n).map(u=>u.pathnameBase)),a=T.useRef(!1);return T.useEffect(()=>{a.current=!0}),T.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){t.go(u);return}let f=o1(u,JSON.parse(i),r,d.relative==="path");e!=="/"&&(f.pathname=f.pathname==="/"?e:Gr([e,f.pathname])),(d.replace?t.replace:t.push)(f,d.state,d)},[e,t,i,r])}function mC(e,t){kc()||ke(!1);let{navigator:n}=T.useContext(Up),r=T.useContext(jp),{matches:i}=T.useContext(Cs),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let d=m1(),f;if(t){var m;let w=typeof t=="string"?wr(t):t;u==="/"||(m=w.pathname)!=null&&m.startsWith(u)||ke(!1),f=w}else f=d;let _=f.pathname||"/",p=u==="/"?_:_.slice(u.length)||"/",g=Aa(e,{pathname:p}),x=yC(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:Gr([u,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?u:Gr([u,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r||void 0);return t&&x?T.createElement(wc.Provider,{value:{location:fu({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:lt.Pop}},x):x}function _C(){let e=kC(),t=i1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,a)}class vC extends T.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?T.createElement(Cs.Provider,{value:this.props.routeContext},T.createElement(p1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function gC(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(Fp);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Cs.Provider,{value:t},r)}function yC(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n?.errors;if(i!=null){let a=r.findIndex(l=>l.route.id&&i?.[l.route.id]);a>=0||ke(!1),r=r.slice(0,Math.min(r.length,a+1))}return r.reduceRight((a,l,u)=>{let d=l.route.id?i?.[l.route.id]:null,f=n?l.route.errorElement||T.createElement(_C,null):null,m=t.concat(r.slice(0,u+1)),_=()=>T.createElement(gC,{match:l,routeContext:{outlet:a,matches:m}},d?f:l.route.element!==void 0?l.route.element:a);return n&&(l.route.errorElement||u===0)?T.createElement(vC,{location:n.location,component:f,error:d,children:_(),routeContext:{outlet:null,matches:m}}):_()},null)}var Bv;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Bv||(Bv={}));var hu;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(hu||(hu={}));function bC(e){let t=T.useContext(jp);return t||ke(!1),t}function xC(e){let t=T.useContext(Cs);return t||ke(!1),t}function wC(e){let t=xC(),n=t.matches[t.matches.length-1];return n.route.id||ke(!1),n.route.id}function kC(){var e;let t=T.useContext(p1),n=bC(hu.UseRouteError),r=wC(hu.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function SC(e){let{fallbackElement:t,router:n}=e,r=hC(n.subscribe,()=>n.state,()=>n.state),i=T.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:l=>n.navigate(l),push:(l,u,d)=>n.navigate(l,{state:u,preventScrollReset:d?.preventScrollReset}),replace:(l,u,d)=>n.navigate(l,{replace:!0,state:u,preventScrollReset:d?.preventScrollReset})}),[n]),a=n.basename||"/";return T.createElement(T.Fragment,null,T.createElement(Fp.Provider,{value:{router:n,navigator:i,static:!1,basename:a}},T.createElement(jp.Provider,{value:r},T.createElement(CC,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:i},n.state.initialized?T.createElement(EC,null):t))),null)}function PC(e){ke(!1)}function CC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=lt.Pop,navigator:a,static:l=!1}=e;kc()&&ke(!1);let u=t.replace(/^\/*/,"/"),d=T.useMemo(()=>({basename:u,navigator:a,static:l}),[u,a,l]);typeof r=="string"&&(r=wr(r));let{pathname:f="/",search:m="",hash:_="",state:p=null,key:g="default"}=r,x=T.useMemo(()=>{let w=r1(f,u);return w==null?null:{pathname:w,search:m,hash:_,state:p,key:g}},[u,f,m,_,p,g]);return x==null?null:T.createElement(Up.Provider,{value:d},T.createElement(wc.Provider,{children:n,value:{location:x,navigationType:i}}))}function EC(e){let{children:t,location:n}=e,r=T.useContext(Fp),i=r&&!t?r.router.routes:rh(t);return mC(i,n)}var Iv;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Iv||(Iv={}));new Promise(()=>{});function rh(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;if(r.type===T.Fragment){n.push.apply(n,rh(r.props.children,t));return}r.type!==PC&&ke(!1),!r.props.index||!r.props.children||ke(!1);let a=[...t,i],l={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(l.children=rh(r.props.children,a)),n.push(l)}),n}function _1(e){return e.map(t=>{let n=fu({},t);return n.hasErrorBoundary==null&&(n.hasErrorBoundary=n.errorElement!=null),n.children&&(n.children=_1(n.children)),n})}/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oh(){return oh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oh.apply(this,arguments)}function OC(e,t){return KP({basename:t?.basename,history:mP({window:t?.window}),hydrationData:t?.hydrationData||TC(),routes:_1(e)}).initialize()}function TC(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=oh({},t,{errors:LC(t.errors)})),t}function LC(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Dp(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let a=new Error(i.message);a.stack="",n[r]=a}else n[r]=i;return n}var Mv;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Mv||(Mv={}));var Dv;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Dv||(Dv={}));function Tn(e){return Tn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Tn(e)}function zC(e,t){if(Tn(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Tn(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function v1(e){var t=zC(e,"string");return Tn(t)==="symbol"?t:String(t)}function Rn(e,t,n){return t=v1(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function RC(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];typeof n[0]=="string"&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var Fv={};function ih(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&Fv[t[0]]||(typeof t[0]=="string"&&(Fv[t[0]]=new Date),RC.apply(void 0,t))}function jv(e,t,n){e.loadNamespaces(t,function(){if(e.isInitialized)n();else{var r=function i(){setTimeout(function(){e.off("initialized",i)},0),n()};e.on("initialized",r)}})}function AC(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.languages[0],i=t.options?t.options.fallbackLng:!1,a=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;var l=function(d,f){var m=t.services.backendConnector.state["".concat(d,"|").concat(f)];return m===-1||m===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!l(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||l(r,e)&&(!i||l(a,e)))}function NC(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!t.languages||!t.languages.length)return ih("i18n.languages were undefined or empty",t.languages),!0;var r=t.options.ignoreJSONStructure!==void 0;return r?t.hasLoadedNamespace(e,{precheck:function(a,l){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!l(a.isLanguageChangingTo,e))return!1}}):AC(e,t,n)}var BC=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,IC={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},MC=function(t){return IC[t]},DC=function(t){return t.replace(BC,MC)};function Uv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function $v(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Uv(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Uv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var ah={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:DC};function FC(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ah=$v($v({},ah),e)}function jC(){return ah}var g1;function UC(e){g1=e}function $C(){return g1}function An(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Zv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v1(r.key),r)}}function Nn(e,t,n){return t&&Zv(e.prototype,t),n&&Zv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var ZC={type:"3rdParty",init:function(t){FC(t.options.react),UC(t)}},WC=T.createContext(),HC=function(){function e(){An(this,e),this.usedNamespaces={}}return Nn(e,[{key:"addUsedNamespaces",value:function(n){var r=this;n.forEach(function(i){r.usedNamespaces[i]||(r.usedNamespaces[i]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function y1(e){if(Array.isArray(e))return e}function VC(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,u=[],d=!0,f=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;d=!1}else for(;!(d=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);d=!0);}catch(m){f=!0,i=m}finally{try{if(!d&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(f)throw i}}return u}}function Wv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b1(e,t){if(e){if(typeof e=="string")return Wv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Wv(e,t)}}function x1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qC(e,t){return y1(e)||VC(e,t)||b1(e,t)||x1()}function Hv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Md(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hv(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var KC=function(t,n){var r=T.useRef();return T.useEffect(function(){r.current=n?r.current:t},[t,n]),r.current};function $p(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.i18n,r=T.useContext(WC)||{},i=r.i18n,a=r.defaultNS,l=n||i||$C();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new HC),!l){ih("You will need to pass in an i18next instance by using initReactI18next");var u=function(V){return Array.isArray(V)?V[V.length-1]:V},d=[u,{},!1];return d.t=u,d.i18n={},d.ready=!1,d}l.options.react&&l.options.react.wait!==void 0&&ih("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var f=Md(Md(Md({},jC()),l.options.react),t),m=f.useSuspense,_=f.keyPrefix,p=e||a||l.options&&l.options.defaultNS;p=typeof p=="string"?[p]:p||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(p);var g=(l.isInitialized||l.initializedStoreOnce)&&p.every(function(j){return NC(j,l,f)});function x(){return l.getFixedT(null,f.nsMode==="fallback"?p:p[0],_)}var w=T.useState(x),C=qC(w,2),y=C[0],b=C[1],S=p.join(),P=KC(S),z=T.useRef(!0);T.useEffect(function(){var j=f.bindI18n,V=f.bindI18nStore;z.current=!0,!g&&!m&&jv(l,p,function(){z.current&&b(x)}),g&&P&&P!==S&&z.current&&b(x);function U(){z.current&&b(x)}return j&&l&&l.on(j,U),V&&l&&l.store.on(V,U),function(){z.current=!1,j&&l&&j.split(" ").forEach(function(R){return l.off(R,U)}),V&&l&&V.split(" ").forEach(function(R){return l.store.off(R,U)})}},[l,S]);var I=T.useRef(!0);T.useEffect(function(){z.current&&!I.current&&b(x),I.current=!1},[l,_]);var D=[y,l,g];if(D.t=y,D.i18n=l,D.ready=g,g||!g&&!m)return D;throw new Promise(function(j){jv(l,p,function(){j()})})}function pu(e,t){return pu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},pu(e,t)}function Es(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,pu(e,t)}var Os=function(){function e(){this.listeners=[]}var t=e.prototype;return t.subscribe=function(r){var i=this,a=r||function(){};return this.listeners.push(a),this.onSubscribe(),function(){i.listeners=i.listeners.filter(function(l){return l!==a}),i.onUnsubscribe()}},t.hasListeners=function(){return this.listeners.length>0},t.onSubscribe=function(){},t.onUnsubscribe=function(){},e}(),mu=typeof window>"u";function Lt(){}function QC(e,t){return typeof e=="function"?e(t):e}function sh(e){return typeof e=="number"&&e>=0&&e!==1/0}function _u(e){return Array.isArray(e)?e:[e]}function w1(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Al(e,t,n){return Sc(e)?typeof t=="function"?Ie({},n,{queryKey:e,queryFn:t}):Ie({},t,{queryKey:e}):e}function Br(e,t,n){return Sc(e)?[Ie({},t,{queryKey:e}),n]:[e||{},t]}function GC(e,t){if(e===!0&&t===!0||e==null&&t==null)return"all";if(e===!1&&t===!1)return"none";var n=e??!t;return n?"active":"inactive"}function Vv(e,t){var n=e.active,r=e.exact,i=e.fetching,a=e.inactive,l=e.predicate,u=e.queryKey,d=e.stale;if(Sc(u)){if(r){if(t.queryHash!==Zp(u,t.options))return!1}else if(!vu(t.queryKey,u))return!1}var f=GC(n,a);if(f==="none")return!1;if(f!=="all"){var m=t.isActive();if(f==="active"&&!m||f==="inactive"&&m)return!1}return!(typeof d=="boolean"&&t.isStale()!==d||typeof i=="boolean"&&t.isFetching()!==i||l&&!l(t))}function qv(e,t){var n=e.exact,r=e.fetching,i=e.predicate,a=e.mutationKey;if(Sc(a)){if(!t.options.mutationKey)return!1;if(n){if(Ro(t.options.mutationKey)!==Ro(a))return!1}else if(!vu(t.options.mutationKey,a))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||i&&!i(t))}function Zp(e,t){var n=t?.queryKeyHashFn||Ro;return n(e)}function Ro(e){var t=_u(e);return XC(t)}function XC(e){return JSON.stringify(e,function(t,n){return lh(n)?Object.keys(n).sort().reduce(function(r,i){return r[i]=n[i],r},{}):n})}function vu(e,t){return k1(_u(e),_u(t))}function k1(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(function(n){return!k1(e[n],t[n])}):!1}function gu(e,t){if(e===t)return e;var n=Array.isArray(e)&&Array.isArray(t);if(n||lh(e)&&lh(t)){for(var r=n?e.length:Object.keys(e).length,i=n?t:Object.keys(t),a=i.length,l=n?[]:{},u=0,d=0;d<a;d++){var f=n?d:i[d];l[f]=gu(e[f],t[f]),l[f]===e[f]&&u++}return r===a&&u===r?e:l}return t}function JC(e,t){if(e&&!t||t&&!e)return!1;for(var n in e)if(e[n]!==t[n])return!1;return!0}function lh(e){if(!Kv(e))return!1;var t=e.constructor;if(typeof t>"u")return!0;var n=t.prototype;return!(!Kv(n)||!n.hasOwnProperty("isPrototypeOf"))}function Kv(e){return Object.prototype.toString.call(e)==="[object Object]"}function Sc(e){return typeof e=="string"||Array.isArray(e)}function YC(e){return new Promise(function(t){setTimeout(t,e)})}function Qv(e){Promise.resolve().then(e).catch(function(t){return setTimeout(function(){throw t})})}function S1(){if(typeof AbortController=="function")return new AbortController}var eE=function(e){Es(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(i){var a;if(!mu&&((a=window)!=null&&a.addEventListener)){var l=function(){return i()};return window.addEventListener("visibilitychange",l,!1),window.addEventListener("focus",l,!1),function(){window.removeEventListener("visibilitychange",l),window.removeEventListener("focus",l)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var a,l=this;this.setup=i,(a=this.cleanup)==null||a.call(this),this.cleanup=i(function(u){typeof u=="boolean"?l.setFocused(u):l.onFocus()})},n.setFocused=function(i){this.focused=i,i&&this.onFocus()},n.onFocus=function(){this.listeners.forEach(function(i){i()})},n.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},t}(Os),Ha=new eE,tE=function(e){Es(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(i){var a;if(!mu&&((a=window)!=null&&a.addEventListener)){var l=function(){return i()};return window.addEventListener("online",l,!1),window.addEventListener("offline",l,!1),function(){window.removeEventListener("online",l),window.removeEventListener("offline",l)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var a,l=this;this.setup=i,(a=this.cleanup)==null||a.call(this),this.cleanup=i(function(u){typeof u=="boolean"?l.setOnline(u):l.onOnline()})},n.setOnline=function(i){this.online=i,i&&this.onOnline()},n.onOnline=function(){this.listeners.forEach(function(i){i()})},n.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},t}(Os),Nl=new tE;function nE(e){return Math.min(1e3*Math.pow(2,e),3e4)}function yu(e){return typeof e?.cancel=="function"}var P1=function(t){this.revert=t?.revert,this.silent=t?.silent};function Bl(e){return e instanceof P1}var C1=function(t){var n=this,r=!1,i,a,l,u;this.abort=t.abort,this.cancel=function(p){return i?.(p)},this.cancelRetry=function(){r=!0},this.continueRetry=function(){r=!1},this.continue=function(){return a?.()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(p,g){l=p,u=g});var d=function(g){n.isResolved||(n.isResolved=!0,t.onSuccess==null||t.onSuccess(g),a?.(),l(g))},f=function(g){n.isResolved||(n.isResolved=!0,t.onError==null||t.onError(g),a?.(),u(g))},m=function(){return new Promise(function(g){a=g,n.isPaused=!0,t.onPause==null||t.onPause()}).then(function(){a=void 0,n.isPaused=!1,t.onContinue==null||t.onContinue()})},_=function p(){if(!n.isResolved){var g;try{g=t.fn()}catch(x){g=Promise.reject(x)}i=function(w){if(!n.isResolved&&(f(new P1(w)),n.abort==null||n.abort(),yu(g)))try{g.cancel()}catch{}},n.isTransportCancelable=yu(g),Promise.resolve(g).then(d).catch(function(x){var w,C;if(!n.isResolved){var y=(w=t.retry)!=null?w:3,b=(C=t.retryDelay)!=null?C:nE,S=typeof b=="function"?b(n.failureCount,x):b,P=y===!0||typeof y=="number"&&n.failureCount<y||typeof y=="function"&&y(n.failureCount,x);if(r||!P){f(x);return}n.failureCount++,t.onFail==null||t.onFail(n.failureCount,x),YC(S).then(function(){if(!Ha.isFocused()||!Nl.isOnline())return m()}).then(function(){r?f(x):p()})}})}};_()},rE=function(){function e(){this.queue=[],this.transactions=0,this.notifyFn=function(n){n()},this.batchNotifyFn=function(n){n()}}var t=e.prototype;return t.batch=function(r){var i;this.transactions++;try{i=r()}finally{this.transactions--,this.transactions||this.flush()}return i},t.schedule=function(r){var i=this;this.transactions?this.queue.push(r):Qv(function(){i.notifyFn(r)})},t.batchCalls=function(r){var i=this;return function(){for(var a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];i.schedule(function(){r.apply(void 0,l)})}},t.flush=function(){var r=this,i=this.queue;this.queue=[],i.length&&Qv(function(){r.batchNotifyFn(function(){i.forEach(function(a){r.notifyFn(a)})})})},t.setNotifyFunction=function(r){this.notifyFn=r},t.setBatchNotifyFunction=function(r){this.batchNotifyFn=r},e}(),tt=new rE,E1=console;function bu(){return E1}function oE(e){E1=e}var iE=function(){function e(n){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.cache=n.cache,this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.initialState=n.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=n.meta,this.scheduleGc()}var t=e.prototype;return t.setOptions=function(r){var i;this.options=Ie({},this.defaultOptions,r),this.meta=r?.meta,this.cacheTime=Math.max(this.cacheTime||0,(i=this.options.cacheTime)!=null?i:5*60*1e3)},t.setDefaultOptions=function(r){this.defaultOptions=r},t.scheduleGc=function(){var r=this;this.clearGcTimeout(),sh(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){r.optionalRemove()},this.cacheTime))},t.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},t.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},t.setData=function(r,i){var a,l,u=this.state.data,d=QC(r,u);return(a=(l=this.options).isDataEqual)!=null&&a.call(l,u,d)?d=u:this.options.structuralSharing!==!1&&(d=gu(u,d)),this.dispatch({data:d,type:"success",dataUpdatedAt:i?.updatedAt}),d},t.setState=function(r,i){this.dispatch({type:"setState",state:r,setStateOptions:i})},t.cancel=function(r){var i,a=this.promise;return(i=this.retryer)==null||i.cancel(r),a?a.then(Lt).catch(Lt):Promise.resolve()},t.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},t.reset=function(){this.destroy(),this.setState(this.initialState)},t.isActive=function(){return this.observers.some(function(r){return r.options.enabled!==!1})},t.isFetching=function(){return this.state.isFetching},t.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(r){return r.getCurrentResult().isStale})},t.isStaleByTime=function(r){return r===void 0&&(r=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!w1(this.state.dataUpdatedAt,r)},t.onFocus=function(){var r,i=this.observers.find(function(a){return a.shouldFetchOnWindowFocus()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},t.onOnline=function(){var r,i=this.observers.find(function(a){return a.shouldFetchOnReconnect()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},t.addObserver=function(r){this.observers.indexOf(r)===-1&&(this.observers.push(r),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:r}))},t.removeObserver=function(r){this.observers.indexOf(r)!==-1&&(this.observers=this.observers.filter(function(i){return i!==r}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:r}))},t.getObserversCount=function(){return this.observers.length},t.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},t.fetch=function(r,i){var a=this,l,u,d;if(this.state.isFetching){if(this.state.dataUpdatedAt&&i?.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var f;return(f=this.retryer)==null||f.continueRetry(),this.promise}}if(r&&this.setOptions(r),!this.options.queryFn){var m=this.observers.find(function(b){return b.options.queryFn});m&&this.setOptions(m.options)}var _=_u(this.queryKey),p=S1(),g={queryKey:_,pageParam:void 0,meta:this.meta};Object.defineProperty(g,"signal",{enumerable:!0,get:function(){if(p)return a.abortSignalConsumed=!0,p.signal}});var x=function(){return a.options.queryFn?(a.abortSignalConsumed=!1,a.options.queryFn(g)):Promise.reject("Missing queryFn")},w={fetchOptions:i,options:this.options,queryKey:_,state:this.state,fetchFn:x,meta:this.meta};if((l=this.options.behavior)!=null&&l.onFetch){var C;(C=this.options.behavior)==null||C.onFetch(w)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((u=w.fetchOptions)==null?void 0:u.meta)){var y;this.dispatch({type:"fetch",meta:(y=w.fetchOptions)==null?void 0:y.meta})}return this.retryer=new C1({fn:w.fetchFn,abort:p==null||(d=p.abort)==null?void 0:d.bind(p),onSuccess:function(S){a.setData(S),a.cache.config.onSuccess==null||a.cache.config.onSuccess(S,a),a.cacheTime===0&&a.optionalRemove()},onError:function(S){Bl(S)&&S.silent||a.dispatch({type:"error",error:S}),Bl(S)||(a.cache.config.onError==null||a.cache.config.onError(S,a),bu().error(S)),a.cacheTime===0&&a.optionalRemove()},onFail:function(){a.dispatch({type:"failed"})},onPause:function(){a.dispatch({type:"pause"})},onContinue:function(){a.dispatch({type:"continue"})},retry:w.options.retry,retryDelay:w.options.retryDelay}),this.promise=this.retryer.promise,this.promise},t.dispatch=function(r){var i=this;this.state=this.reducer(this.state,r),tt.batch(function(){i.observers.forEach(function(a){a.onQueryUpdate(r)}),i.cache.notify({query:i,type:"queryUpdated",action:r})})},t.getDefaultState=function(r){var i=typeof r.initialData=="function"?r.initialData():r.initialData,a=typeof r.initialData<"u",l=a?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0,u=typeof i<"u";return{data:i,dataUpdateCount:0,dataUpdatedAt:u?l??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:u?"success":"idle"}},t.reducer=function(r,i){var a,l;switch(i.type){case"failed":return Ie({},r,{fetchFailureCount:r.fetchFailureCount+1});case"pause":return Ie({},r,{isPaused:!0});case"continue":return Ie({},r,{isPaused:!1});case"fetch":return Ie({},r,{fetchFailureCount:0,fetchMeta:(a=i.meta)!=null?a:null,isFetching:!0,isPaused:!1},!r.dataUpdatedAt&&{error:null,status:"loading"});case"success":return Ie({},r,{data:i.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(l=i.dataUpdatedAt)!=null?l:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var u=i.error;return Bl(u)&&u.revert&&this.revertState?Ie({},this.revertState):Ie({},r,{error:u,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return Ie({},r,{isInvalidated:!0});case"setState":return Ie({},r,i.state);default:return r}},e}(),aE=function(e){Es(t,e);function t(r){var i;return i=e.call(this)||this,i.config=r||{},i.queries=[],i.queriesMap={},i}var n=t.prototype;return n.build=function(i,a,l){var u,d=a.queryKey,f=(u=a.queryHash)!=null?u:Zp(d,a),m=this.get(f);return m||(m=new iE({cache:this,queryKey:d,queryHash:f,options:i.defaultQueryOptions(a),state:l,defaultOptions:i.getQueryDefaults(d),meta:a.meta}),this.add(m)),m},n.add=function(i){this.queriesMap[i.queryHash]||(this.queriesMap[i.queryHash]=i,this.queries.push(i),this.notify({type:"queryAdded",query:i}))},n.remove=function(i){var a=this.queriesMap[i.queryHash];a&&(i.destroy(),this.queries=this.queries.filter(function(l){return l!==i}),a===i&&delete this.queriesMap[i.queryHash],this.notify({type:"queryRemoved",query:i}))},n.clear=function(){var i=this;tt.batch(function(){i.queries.forEach(function(a){i.remove(a)})})},n.get=function(i){return this.queriesMap[i]},n.getAll=function(){return this.queries},n.find=function(i,a){var l=Br(i,a),u=l[0];return typeof u.exact>"u"&&(u.exact=!0),this.queries.find(function(d){return Vv(u,d)})},n.findAll=function(i,a){var l=Br(i,a),u=l[0];return Object.keys(u).length>0?this.queries.filter(function(d){return Vv(u,d)}):this.queries},n.notify=function(i){var a=this;tt.batch(function(){a.listeners.forEach(function(l){l(i)})})},n.onFocus=function(){var i=this;tt.batch(function(){i.queries.forEach(function(a){a.onFocus()})})},n.onOnline=function(){var i=this;tt.batch(function(){i.queries.forEach(function(a){a.onOnline()})})},t}(Os),sE=function(){function e(n){this.options=Ie({},n.defaultOptions,n.options),this.mutationId=n.mutationId,this.mutationCache=n.mutationCache,this.observers=[],this.state=n.state||lE(),this.meta=n.meta}var t=e.prototype;return t.setState=function(r){this.dispatch({type:"setState",state:r})},t.addObserver=function(r){this.observers.indexOf(r)===-1&&this.observers.push(r)},t.removeObserver=function(r){this.observers=this.observers.filter(function(i){return i!==r})},t.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(Lt).catch(Lt)):Promise.resolve()},t.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},t.execute=function(){var r=this,i,a=this.state.status==="loading",l=Promise.resolve();return a||(this.dispatch({type:"loading",variables:this.options.variables}),l=l.then(function(){r.mutationCache.config.onMutate==null||r.mutationCache.config.onMutate(r.state.variables,r)}).then(function(){return r.options.onMutate==null?void 0:r.options.onMutate(r.state.variables)}).then(function(u){u!==r.state.context&&r.dispatch({type:"loading",context:u,variables:r.state.variables})})),l.then(function(){return r.executeMutation()}).then(function(u){i=u,r.mutationCache.config.onSuccess==null||r.mutationCache.config.onSuccess(i,r.state.variables,r.state.context,r)}).then(function(){return r.options.onSuccess==null?void 0:r.options.onSuccess(i,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(i,null,r.state.variables,r.state.context)}).then(function(){return r.dispatch({type:"success",data:i}),i}).catch(function(u){return r.mutationCache.config.onError==null||r.mutationCache.config.onError(u,r.state.variables,r.state.context,r),bu().error(u),Promise.resolve().then(function(){return r.options.onError==null?void 0:r.options.onError(u,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(void 0,u,r.state.variables,r.state.context)}).then(function(){throw r.dispatch({type:"error",error:u}),u})})},t.executeMutation=function(){var r=this,i;return this.retryer=new C1({fn:function(){return r.options.mutationFn?r.options.mutationFn(r.state.variables):Promise.reject("No mutationFn found")},onFail:function(){r.dispatch({type:"failed"})},onPause:function(){r.dispatch({type:"pause"})},onContinue:function(){r.dispatch({type:"continue"})},retry:(i=this.options.retry)!=null?i:0,retryDelay:this.options.retryDelay}),this.retryer.promise},t.dispatch=function(r){var i=this;this.state=uE(this.state,r),tt.batch(function(){i.observers.forEach(function(a){a.onMutationUpdate(r)}),i.mutationCache.notify(i)})},e}();function lE(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function uE(e,t){switch(t.type){case"failed":return Ie({},e,{failureCount:e.failureCount+1});case"pause":return Ie({},e,{isPaused:!0});case"continue":return Ie({},e,{isPaused:!1});case"loading":return Ie({},e,{context:t.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:t.variables});case"success":return Ie({},e,{data:t.data,error:null,status:"success",isPaused:!1});case"error":return Ie({},e,{data:void 0,error:t.error,failureCount:e.failureCount+1,isPaused:!1,status:"error"});case"setState":return Ie({},e,t.state);default:return e}}var cE=function(e){Es(t,e);function t(r){var i;return i=e.call(this)||this,i.config=r||{},i.mutations=[],i.mutationId=0,i}var n=t.prototype;return n.build=function(i,a,l){var u=new sE({mutationCache:this,mutationId:++this.mutationId,options:i.defaultMutationOptions(a),state:l,defaultOptions:a.mutationKey?i.getMutationDefaults(a.mutationKey):void 0,meta:a.meta});return this.add(u),u},n.add=function(i){this.mutations.push(i),this.notify(i)},n.remove=function(i){this.mutations=this.mutations.filter(function(a){return a!==i}),i.cancel(),this.notify(i)},n.clear=function(){var i=this;tt.batch(function(){i.mutations.forEach(function(a){i.remove(a)})})},n.getAll=function(){return this.mutations},n.find=function(i){return typeof i.exact>"u"&&(i.exact=!0),this.mutations.find(function(a){return qv(i,a)})},n.findAll=function(i){return this.mutations.filter(function(a){return qv(i,a)})},n.notify=function(i){var a=this;tt.batch(function(){a.listeners.forEach(function(l){l(i)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var i=this.mutations.filter(function(a){return a.state.isPaused});return tt.batch(function(){return i.reduce(function(a,l){return a.then(function(){return l.continue().catch(Lt)})},Promise.resolve())})},t}(Os);function dE(){return{onFetch:function(t){t.fetchFn=function(){var n,r,i,a,l,u,d=(n=t.fetchOptions)==null||(r=n.meta)==null?void 0:r.refetchPage,f=(i=t.fetchOptions)==null||(a=i.meta)==null?void 0:a.fetchMore,m=f?.pageParam,_=f?.direction==="forward",p=f?.direction==="backward",g=((l=t.state.data)==null?void 0:l.pages)||[],x=((u=t.state.data)==null?void 0:u.pageParams)||[],w=S1(),C=w?.signal,y=x,b=!1,S=t.options.queryFn||function(){return Promise.reject("Missing queryFn")},P=function(re,fe,ee,ue){return y=ue?[fe].concat(y):[].concat(y,[fe]),ue?[ee].concat(re):[].concat(re,[ee])},z=function(re,fe,ee,ue){if(b)return Promise.reject("Cancelled");if(typeof ee>"u"&&!fe&&re.length)return Promise.resolve(re);var M={queryKey:t.queryKey,signal:C,pageParam:ee,meta:t.meta},oe=S(M),K=Promise.resolve(oe).then(function(B){return P(re,ee,B,ue)});if(yu(oe)){var O=K;O.cancel=oe.cancel}return K},I;if(!g.length)I=z([]);else if(_){var D=typeof m<"u",j=D?m:Gv(t.options,g);I=z(g,D,j)}else if(p){var V=typeof m<"u",U=V?m:fE(t.options,g);I=z(g,V,U,!0)}else(function(){y=[];var _e=typeof t.options.getNextPageParam>"u",re=d&&g[0]?d(g[0],0,g):!0;I=re?z([],_e,x[0]):Promise.resolve(P([],x[0],g[0]));for(var fe=function(M){I=I.then(function(oe){var K=d&&g[M]?d(g[M],M,g):!0;if(K){var O=_e?x[M]:Gv(t.options,oe);return z(oe,_e,O)}return Promise.resolve(P(oe,x[M],g[M]))})},ee=1;ee<g.length;ee++)fe(ee)})();var R=I.then(function(_e){return{pages:_e,pageParams:y}}),Y=R;return Y.cancel=function(){b=!0,w?.abort(),yu(I)&&I.cancel()},R}}}}function Gv(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function fE(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}var hE=function(){function e(n){n===void 0&&(n={}),this.queryCache=n.queryCache||new aE,this.mutationCache=n.mutationCache||new cE,this.defaultOptions=n.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var t=e.prototype;return t.mount=function(){var r=this;this.unsubscribeFocus=Ha.subscribe(function(){Ha.isFocused()&&Nl.isOnline()&&(r.mutationCache.onFocus(),r.queryCache.onFocus())}),this.unsubscribeOnline=Nl.subscribe(function(){Ha.isFocused()&&Nl.isOnline()&&(r.mutationCache.onOnline(),r.queryCache.onOnline())})},t.unmount=function(){var r,i;(r=this.unsubscribeFocus)==null||r.call(this),(i=this.unsubscribeOnline)==null||i.call(this)},t.isFetching=function(r,i){var a=Br(r,i),l=a[0];return l.fetching=!0,this.queryCache.findAll(l).length},t.isMutating=function(r){return this.mutationCache.findAll(Ie({},r,{fetching:!0})).length},t.getQueryData=function(r,i){var a;return(a=this.queryCache.find(r,i))==null?void 0:a.state.data},t.getQueriesData=function(r){return this.getQueryCache().findAll(r).map(function(i){var a=i.queryKey,l=i.state,u=l.data;return[a,u]})},t.setQueryData=function(r,i,a){var l=Al(r),u=this.defaultQueryOptions(l);return this.queryCache.build(this,u).setData(i,a)},t.setQueriesData=function(r,i,a){var l=this;return tt.batch(function(){return l.getQueryCache().findAll(r).map(function(u){var d=u.queryKey;return[d,l.setQueryData(d,i,a)]})})},t.getQueryState=function(r,i){var a;return(a=this.queryCache.find(r,i))==null?void 0:a.state},t.removeQueries=function(r,i){var a=Br(r,i),l=a[0],u=this.queryCache;tt.batch(function(){u.findAll(l).forEach(function(d){u.remove(d)})})},t.resetQueries=function(r,i,a){var l=this,u=Br(r,i,a),d=u[0],f=u[1],m=this.queryCache,_=Ie({},d,{active:!0});return tt.batch(function(){return m.findAll(d).forEach(function(p){p.reset()}),l.refetchQueries(_,f)})},t.cancelQueries=function(r,i,a){var l=this,u=Br(r,i,a),d=u[0],f=u[1],m=f===void 0?{}:f;typeof m.revert>"u"&&(m.revert=!0);var _=tt.batch(function(){return l.queryCache.findAll(d).map(function(p){return p.cancel(m)})});return Promise.all(_).then(Lt).catch(Lt)},t.invalidateQueries=function(r,i,a){var l,u,d,f=this,m=Br(r,i,a),_=m[0],p=m[1],g=Ie({},_,{active:(l=(u=_.refetchActive)!=null?u:_.active)!=null?l:!0,inactive:(d=_.refetchInactive)!=null?d:!1});return tt.batch(function(){return f.queryCache.findAll(_).forEach(function(x){x.invalidate()}),f.refetchQueries(g,p)})},t.refetchQueries=function(r,i,a){var l=this,u=Br(r,i,a),d=u[0],f=u[1],m=tt.batch(function(){return l.queryCache.findAll(d).map(function(p){return p.fetch(void 0,Ie({},f,{meta:{refetchPage:d?.refetchPage}}))})}),_=Promise.all(m).then(Lt);return f?.throwOnError||(_=_.catch(Lt)),_},t.fetchQuery=function(r,i,a){var l=Al(r,i,a),u=this.defaultQueryOptions(l);typeof u.retry>"u"&&(u.retry=!1);var d=this.queryCache.build(this,u);return d.isStaleByTime(u.staleTime)?d.fetch(u):Promise.resolve(d.state.data)},t.prefetchQuery=function(r,i,a){return this.fetchQuery(r,i,a).then(Lt).catch(Lt)},t.fetchInfiniteQuery=function(r,i,a){var l=Al(r,i,a);return l.behavior=dE(),this.fetchQuery(l)},t.prefetchInfiniteQuery=function(r,i,a){return this.fetchInfiniteQuery(r,i,a).then(Lt).catch(Lt)},t.cancelMutations=function(){var r=this,i=tt.batch(function(){return r.mutationCache.getAll().map(function(a){return a.cancel()})});return Promise.all(i).then(Lt).catch(Lt)},t.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},t.executeMutation=function(r){return this.mutationCache.build(this,r).execute()},t.getQueryCache=function(){return this.queryCache},t.getMutationCache=function(){return this.mutationCache},t.getDefaultOptions=function(){return this.defaultOptions},t.setDefaultOptions=function(r){this.defaultOptions=r},t.setQueryDefaults=function(r,i){var a=this.queryDefaults.find(function(l){return Ro(r)===Ro(l.queryKey)});a?a.defaultOptions=i:this.queryDefaults.push({queryKey:r,defaultOptions:i})},t.getQueryDefaults=function(r){var i;return r?(i=this.queryDefaults.find(function(a){return vu(r,a.queryKey)}))==null?void 0:i.defaultOptions:void 0},t.setMutationDefaults=function(r,i){var a=this.mutationDefaults.find(function(l){return Ro(r)===Ro(l.mutationKey)});a?a.defaultOptions=i:this.mutationDefaults.push({mutationKey:r,defaultOptions:i})},t.getMutationDefaults=function(r){var i;return r?(i=this.mutationDefaults.find(function(a){return vu(r,a.mutationKey)}))==null?void 0:i.defaultOptions:void 0},t.defaultQueryOptions=function(r){if(r?._defaulted)return r;var i=Ie({},this.defaultOptions.queries,this.getQueryDefaults(r?.queryKey),r,{_defaulted:!0});return!i.queryHash&&i.queryKey&&(i.queryHash=Zp(i.queryKey,i)),i},t.defaultQueryObserverOptions=function(r){return this.defaultQueryOptions(r)},t.defaultMutationOptions=function(r){return r?._defaulted?r:Ie({},this.defaultOptions.mutations,this.getMutationDefaults(r?.mutationKey),r,{_defaulted:!0})},t.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},e}(),pE=function(e){Es(t,e);function t(r,i){var a;return a=e.call(this)||this,a.client=r,a.options=i,a.trackedProps=[],a.selectError=null,a.bindMethods(),a.setOptions(i),a}var n=t.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),Xv(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return uh(this.currentQuery,this.options,this.options.refetchOnReconnect)},n.shouldFetchOnWindowFocus=function(){return uh(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(i,a){var l=this.options,u=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(i),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=l.queryKey),this.updateQuery();var d=this.hasListeners();d&&Jv(this.currentQuery,u,this.options,l)&&this.executeFetch(),this.updateResult(a),d&&(this.currentQuery!==u||this.options.enabled!==l.enabled||this.options.staleTime!==l.staleTime)&&this.updateStaleTimeout();var f=this.computeRefetchInterval();d&&(this.currentQuery!==u||this.options.enabled!==l.enabled||f!==this.currentRefetchInterval)&&this.updateRefetchInterval(f)},n.getOptimisticResult=function(i){var a=this.client.defaultQueryObserverOptions(i),l=this.client.getQueryCache().build(this.client,a);return this.createResult(l,a)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(i,a){var l=this,u={},d=function(m){l.trackedProps.includes(m)||l.trackedProps.push(m)};return Object.keys(i).forEach(function(f){Object.defineProperty(u,f,{configurable:!1,enumerable:!0,get:function(){return d(f),i[f]}})}),(a.useErrorBoundary||a.suspense)&&d("error"),u},n.getNextResult=function(i){var a=this;return new Promise(function(l,u){var d=a.subscribe(function(f){f.isFetching||(d(),f.isError&&i?.throwOnError?u(f.error):l(f))})})},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(i){return this.fetch(Ie({},i,{meta:{refetchPage:i?.refetchPage}}))},n.fetchOptimistic=function(i){var a=this,l=this.client.defaultQueryObserverOptions(i),u=this.client.getQueryCache().build(this.client,l);return u.fetch().then(function(){return a.createResult(u,l)})},n.fetch=function(i){var a=this;return this.executeFetch(i).then(function(){return a.updateResult(),a.currentResult})},n.executeFetch=function(i){this.updateQuery();var a=this.currentQuery.fetch(this.options,i);return i?.throwOnError||(a=a.catch(Lt)),a},n.updateStaleTimeout=function(){var i=this;if(this.clearStaleTimeout(),!(mu||this.currentResult.isStale||!sh(this.options.staleTime))){var a=w1(this.currentResult.dataUpdatedAt,this.options.staleTime),l=a+1;this.staleTimeoutId=setTimeout(function(){i.currentResult.isStale||i.updateResult()},l)}},n.computeRefetchInterval=function(){var i;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(i=this.options.refetchInterval)!=null?i:!1},n.updateRefetchInterval=function(i){var a=this;this.clearRefetchInterval(),this.currentRefetchInterval=i,!(mu||this.options.enabled===!1||!sh(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(a.options.refetchIntervalInBackground||Ha.isFocused())&&a.executeFetch()},this.currentRefetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},n.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},n.createResult=function(i,a){var l=this.currentQuery,u=this.options,d=this.currentResult,f=this.currentResultState,m=this.currentResultOptions,_=i!==l,p=_?i.state:this.currentQueryInitialState,g=_?this.currentResult:this.previousQueryResult,x=i.state,w=x.dataUpdatedAt,C=x.error,y=x.errorUpdatedAt,b=x.isFetching,S=x.status,P=!1,z=!1,I;if(a.optimisticResults){var D=this.hasListeners(),j=!D&&Xv(i,a),V=D&&Jv(i,l,a,u);(j||V)&&(b=!0,w||(S="loading"))}if(a.keepPreviousData&&!x.dataUpdateCount&&g?.isSuccess&&S!=="error")I=g.data,w=g.dataUpdatedAt,S=g.status,P=!0;else if(a.select&&typeof x.data<"u")if(d&&x.data===f?.data&&a.select===this.selectFn)I=this.selectResult;else try{this.selectFn=a.select,I=a.select(x.data),a.structuralSharing!==!1&&(I=gu(d?.data,I)),this.selectResult=I,this.selectError=null}catch(Y){bu().error(Y),this.selectError=Y}else I=x.data;if(typeof a.placeholderData<"u"&&typeof I>"u"&&(S==="loading"||S==="idle")){var U;if(d?.isPlaceholderData&&a.placeholderData===m?.placeholderData)U=d.data;else if(U=typeof a.placeholderData=="function"?a.placeholderData():a.placeholderData,a.select&&typeof U<"u")try{U=a.select(U),a.structuralSharing!==!1&&(U=gu(d?.data,U)),this.selectError=null}catch(Y){bu().error(Y),this.selectError=Y}typeof U<"u"&&(S="success",I=U,z=!0)}this.selectError&&(C=this.selectError,I=this.selectResult,y=Date.now(),S="error");var R={status:S,isLoading:S==="loading",isSuccess:S==="success",isError:S==="error",isIdle:S==="idle",data:I,dataUpdatedAt:w,error:C,errorUpdatedAt:y,failureCount:x.fetchFailureCount,errorUpdateCount:x.errorUpdateCount,isFetched:x.dataUpdateCount>0||x.errorUpdateCount>0,isFetchedAfterMount:x.dataUpdateCount>p.dataUpdateCount||x.errorUpdateCount>p.errorUpdateCount,isFetching:b,isRefetching:b&&S!=="loading",isLoadingError:S==="error"&&x.dataUpdatedAt===0,isPlaceholderData:z,isPreviousData:P,isRefetchError:S==="error"&&x.dataUpdatedAt!==0,isStale:Wp(i,a),refetch:this.refetch,remove:this.remove};return R},n.shouldNotifyListeners=function(i,a){if(!a)return!0;var l=this.options,u=l.notifyOnChangeProps,d=l.notifyOnChangePropsExclusions;if(!u&&!d||u==="tracked"&&!this.trackedProps.length)return!0;var f=u==="tracked"?this.trackedProps:u;return Object.keys(i).some(function(m){var _=m,p=i[_]!==a[_],g=f?.some(function(w){return w===m}),x=d?.some(function(w){return w===m});return p&&!x&&(!f||g)})},n.updateResult=function(i){var a=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!JC(this.currentResult,a)){var l={cache:!0};i?.listeners!==!1&&this.shouldNotifyListeners(this.currentResult,a)&&(l.listeners=!0),this.notify(Ie({},l,i))}},n.updateQuery=function(){var i=this.client.getQueryCache().build(this.client,this.options);if(i!==this.currentQuery){var a=this.currentQuery;this.currentQuery=i,this.currentQueryInitialState=i.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(a?.removeObserver(this),i.addObserver(this))}},n.onQueryUpdate=function(i){var a={};i.type==="success"?a.onSuccess=!0:i.type==="error"&&!Bl(i.error)&&(a.onError=!0),this.updateResult(a),this.hasListeners()&&this.updateTimers()},n.notify=function(i){var a=this;tt.batch(function(){i.onSuccess?(a.options.onSuccess==null||a.options.onSuccess(a.currentResult.data),a.options.onSettled==null||a.options.onSettled(a.currentResult.data,null)):i.onError&&(a.options.onError==null||a.options.onError(a.currentResult.error),a.options.onSettled==null||a.options.onSettled(void 0,a.currentResult.error)),i.listeners&&a.listeners.forEach(function(l){l(a.currentResult)}),i.cache&&a.client.getQueryCache().notify({query:a.currentQuery,type:"observerResultsUpdated"})})},t}(Os);function mE(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Xv(e,t){return mE(e,t)||e.state.dataUpdatedAt>0&&uh(e,t,t.refetchOnMount)}function uh(e,t,n){if(t.enabled!==!1){var r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&Wp(e,t)}return!1}function Jv(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Wp(e,n)}function Wp(e,t){return e.isStaleByTime(t.staleTime)}var _E=w2.unstable_batchedUpdates;tt.setBatchNotifyFunction(_E);var vE=console;oE(vE);var Yv=Z.createContext(void 0),O1=Z.createContext(!1);function T1(e){return e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Yv),window.ReactQueryClientContext):Yv}var gE=function(){var t=Z.useContext(T1(Z.useContext(O1)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},yE=function(t){var n=t.client,r=t.contextSharing,i=r===void 0?!1:r,a=t.children;Z.useEffect(function(){return n.mount(),function(){n.unmount()}},[n]);var l=T1(i);return Z.createElement(O1.Provider,{value:i},Z.createElement(l.Provider,{value:n},a))};function bE(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var xE=Z.createContext(bE()),wE=function(){return Z.useContext(xE)};function kE(e,t,n){return typeof t=="function"?t.apply(void 0,n):typeof t=="boolean"?t:!!e}function SE(e,t){var n=Z.useRef(!1),r=Z.useState(0),i=r[1],a=gE(),l=wE(),u=a.defaultQueryObserverOptions(e);u.optimisticResults=!0,u.onError&&(u.onError=tt.batchCalls(u.onError)),u.onSuccess&&(u.onSuccess=tt.batchCalls(u.onSuccess)),u.onSettled&&(u.onSettled=tt.batchCalls(u.onSettled)),u.suspense&&(typeof u.staleTime!="number"&&(u.staleTime=1e3),u.cacheTime===0&&(u.cacheTime=1)),(u.suspense||u.useErrorBoundary)&&(l.isReset()||(u.retryOnMount=!1));var d=Z.useState(function(){return new t(a,u)}),f=d[0],m=f.getOptimisticResult(u);if(Z.useEffect(function(){n.current=!0,l.clearReset();var _=f.subscribe(tt.batchCalls(function(){n.current&&i(function(p){return p+1})}));return f.updateResult(),function(){n.current=!1,_()}},[l,f]),Z.useEffect(function(){f.setOptions(u,{listeners:!1})},[u,f]),u.suspense&&m.isLoading)throw f.fetchOptimistic(u).then(function(_){var p=_.data;u.onSuccess==null||u.onSuccess(p),u.onSettled==null||u.onSettled(p,null)}).catch(function(_){l.clearReset(),u.onError==null||u.onError(_),u.onSettled==null||u.onSettled(void 0,_)});if(m.isError&&!l.isReset()&&!m.isFetching&&kE(u.suspense,u.useErrorBoundary,[m.error,f.getCurrentQuery()]))throw m.error;return u.notifyOnChangeProps==="tracked"&&(m=f.trackResult(m,u)),m}function PE(e,t,n){var r=Al(e,t,n);return SE(r,pE)}function Xr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Pc(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&pu(e,t)}function Ts(e,t){if(t&&(Tn(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Xr(e)}function Xn(e){return Xn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Xn(e)}function CE(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function EE(e){return y1(e)||CE(e)||b1(e)||x1()}function eg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function tg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?eg(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):eg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var OE={type:"logger",log:function(t){this.output("log",t)},warn:function(t){this.output("warn",t)},error:function(t){this.output("error",t)},output:function(t,n){console&&console[t]&&console[t].apply(console,n)}},TE=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};An(this,e),this.init(t,n)}return Nn(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=r.prefix||"i18next:",this.logger=n||OE,this.options=r,this.debug=r.debug}},{key:"setDebug",value:function(n){this.debug=n}},{key:"log",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"log","",!0)}},{key:"warn",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"warn","",!0)}},{key:"error",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"error","")}},{key:"deprecate",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(n,r,i,a){return a&&!this.debug?null:(typeof n[0]=="string"&&(n[0]="".concat(i).concat(this.prefix," ").concat(n[0])),this.logger[r](n))}},{key:"create",value:function(n){return new e(this.logger,tg(tg({},{prefix:"".concat(this.prefix,":").concat(n,":")}),this.options))}},{key:"clone",value:function(n){return n=n||this.options,n.prefix=n.prefix||this.prefix,new e(this.logger,n)}}]),e}(),Hn=new TE,io=function(){function e(){An(this,e),this.observers={}}return Nn(e,[{key:"on",value:function(n,r){var i=this;return n.split(" ").forEach(function(a){i.observers[a]=i.observers[a]||[],i.observers[a].push(r)}),this}},{key:"off",value:function(n,r){if(this.observers[n]){if(!r){delete this.observers[n];return}this.observers[n]=this.observers[n].filter(function(i){return i!==r})}}},{key:"emit",value:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];if(this.observers[n]){var l=[].concat(this.observers[n]);l.forEach(function(d){d.apply(void 0,i)})}if(this.observers["*"]){var u=[].concat(this.observers["*"]);u.forEach(function(d){d.apply(d,[n].concat(i))})}}}]),e}();function Pa(){var e,t,n=new Promise(function(r,i){e=r,t=i});return n.resolve=e,n.reject=t,n}function ng(e){return e==null?"":""+e}function LE(e,t,n){e.forEach(function(r){t[r]&&(n[r]=t[r])})}function Hp(e,t,n){function r(u){return u&&u.indexOf("###")>-1?u.replace(/###/g,"."):u}function i(){return!e||typeof e=="string"}for(var a=typeof t!="string"?[].concat(t):t.split(".");a.length>1;){if(i())return{};var l=r(a.shift());!e[l]&&n&&(e[l]=new n),Object.prototype.hasOwnProperty.call(e,l)?e=e[l]:e={}}return i()?{}:{obj:e,k:r(a.shift())}}function rg(e,t,n){var r=Hp(e,t,Object),i=r.obj,a=r.k;i[a]=n}function zE(e,t,n,r){var i=Hp(e,t,Object),a=i.obj,l=i.k;a[l]=a[l]||[],r&&(a[l]=a[l].concat(n)),r||a[l].push(n)}function xu(e,t){var n=Hp(e,t),r=n.obj,i=n.k;if(r)return r[i]}function og(e,t,n){var r=xu(e,n);return r!==void 0?r:xu(t,n)}function L1(e,t,n){for(var r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):L1(e[r],t[r],n):e[r]=t[r]);return e}function si(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var RE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function AE(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,function(t){return RE[t]}):e}var Cc=typeof window<"u"&&window.navigator&&typeof window.navigator.userAgentData>"u"&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,NE=[" ",",","?","!",";"];function BE(e,t,n){t=t||"",n=n||"";var r=NE.filter(function(u){return t.indexOf(u)<0&&n.indexOf(u)<0});if(r.length===0)return!0;var i=new RegExp("(".concat(r.map(function(u){return u==="?"?"\\?":u}).join("|"),")")),a=!i.test(e);if(!a){var l=e.indexOf(n);l>0&&!i.test(e.substring(0,l))&&(a=!0)}return a}function ig(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function _l(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ig(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ig(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function IE(e){var t=ME();return function(){var r=Xn(e),i;if(t){var a=Xn(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ts(this,i)}}function ME(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function z1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(e){if(e[t])return e[t];for(var r=t.split(n),i=e,a=0;a<r.length;++a){if(!i||typeof i[r[a]]=="string"&&a+1<r.length)return;if(i[r[a]]===void 0){for(var l=2,u=r.slice(a,a+l).join(n),d=i[u];d===void 0&&r.length>a+l;)l++,u=r.slice(a,a+l).join(n),d=i[u];if(d===void 0)return;if(d===null)return null;if(t.endsWith(u)){if(typeof d=="string")return d;if(u&&typeof d[u]=="string")return d[u]}var f=r.slice(a+l).join(n);return f?z1(d,f,n):void 0}i=i[r[a]]}return i}}var DE=function(e){Pc(n,e);var t=IE(n);function n(r){var i,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};return An(this,n),i=t.call(this),Cc&&io.call(Xr(i)),i.data=r||{},i.options=a,i.options.keySeparator===void 0&&(i.options.keySeparator="."),i.options.ignoreJSONStructure===void 0&&(i.options.ignoreJSONStructure=!0),i}return Nn(n,[{key:"addNamespaces",value:function(i){this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}},{key:"removeNamespaces",value:function(i){var a=this.options.ns.indexOf(i);a>-1&&this.options.ns.splice(a,1)}},{key:"getResource",value:function(i,a,l){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},d=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator,f=u.ignoreJSONStructure!==void 0?u.ignoreJSONStructure:this.options.ignoreJSONStructure,m=[i,a];l&&typeof l!="string"&&(m=m.concat(l)),l&&typeof l=="string"&&(m=m.concat(d?l.split(d):l)),i.indexOf(".")>-1&&(m=i.split("."));var _=xu(this.data,m);return _||!f||typeof l!="string"?_:z1(this.data&&this.data[i]&&this.data[i][a],l,d)}},{key:"addResource",value:function(i,a,l,u){var d=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1},f=this.options.keySeparator;f===void 0&&(f=".");var m=[i,a];l&&(m=m.concat(f?l.split(f):l)),i.indexOf(".")>-1&&(m=i.split("."),u=a,a=m[1]),this.addNamespaces(a),rg(this.data,m,u),d.silent||this.emit("added",i,a,l,u)}},{key:"addResources",value:function(i,a,l){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(var d in l)(typeof l[d]=="string"||Object.prototype.toString.apply(l[d])==="[object Array]")&&this.addResource(i,a,d,l[d],{silent:!0});u.silent||this.emit("added",i,a,l)}},{key:"addResourceBundle",value:function(i,a,l,u,d){var f=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},m=[i,a];i.indexOf(".")>-1&&(m=i.split("."),u=l,l=a,a=m[1]),this.addNamespaces(a);var _=xu(this.data,m)||{};u?L1(_,l,d):_=_l(_l({},_),l),rg(this.data,m,_),f.silent||this.emit("added",i,a,l)}},{key:"removeResourceBundle",value:function(i,a){this.hasResourceBundle(i,a)&&delete this.data[i][a],this.removeNamespaces(a),this.emit("removed",i,a)}},{key:"hasResourceBundle",value:function(i,a){return this.getResource(i,a)!==void 0}},{key:"getResourceBundle",value:function(i,a){return a||(a=this.options.defaultNS),this.options.compatibilityAPI==="v1"?_l(_l({},{}),this.getResource(i,a)):this.getResource(i,a)}},{key:"getDataByLanguage",value:function(i){return this.data[i]}},{key:"hasLanguageSomeTranslations",value:function(i){var a=this.getDataByLanguage(i),l=a&&Object.keys(a)||[];return!!l.find(function(u){return a[u]&&Object.keys(a[u]).length>0})}},{key:"toJSON",value:function(){return this.data}}]),n}(io),R1={processors:{},addPostProcessor:function(t){this.processors[t.name]=t},handle:function(t,n,r,i,a){var l=this;return t.forEach(function(u){l.processors[u]&&(n=l.processors[u].process(n,r,i,a))}),n}};function ag(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function It(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ag(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ag(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function FE(e){var t=jE();return function(){var r=Xn(e),i;if(t){var a=Xn(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ts(this,i)}}function jE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var sg={},lg=function(e){Pc(n,e);var t=FE(n);function n(r){var i,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return An(this,n),i=t.call(this),Cc&&io.call(Xr(i)),LE(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r,Xr(i)),i.options=a,i.options.keySeparator===void 0&&(i.options.keySeparator="."),i.logger=Hn.create("translator"),i}return Nn(n,[{key:"changeLanguage",value:function(i){i&&(this.language=i)}},{key:"exists",value:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(i==null)return!1;var l=this.resolve(i,a);return l&&l.res!==void 0}},{key:"extractFromKey",value:function(i,a){var l=a.nsSeparator!==void 0?a.nsSeparator:this.options.nsSeparator;l===void 0&&(l=":");var u=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,d=a.ns||this.options.defaultNS||[],f=l&&i.indexOf(l)>-1,m=!this.options.userDefinedKeySeparator&&!a.keySeparator&&!this.options.userDefinedNsSeparator&&!a.nsSeparator&&!BE(i,l,u);if(f&&!m){var _=i.match(this.interpolator.nestingRegexp);if(_&&_.length>0)return{key:i,namespaces:d};var p=i.split(l);(l!==u||l===u&&this.options.ns.indexOf(p[0])>-1)&&(d=p.shift()),i=p.join(u)}return typeof d=="string"&&(d=[d]),{key:i,namespaces:d}}},{key:"translate",value:function(i,a,l){var u=this;if(Tn(a)!=="object"&&this.options.overloadTranslationOptionHandler&&(a=this.options.overloadTranslationOptionHandler(arguments)),a||(a={}),i==null)return"";Array.isArray(i)||(i=[String(i)]);var d=a.returnDetails!==void 0?a.returnDetails:this.options.returnDetails,f=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,m=this.extractFromKey(i[i.length-1],a),_=m.key,p=m.namespaces,g=p[p.length-1],x=a.lng||this.language,w=a.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(x&&x.toLowerCase()==="cimode"){if(w){var C=a.nsSeparator||this.options.nsSeparator;return d?(y.res="".concat(g).concat(C).concat(_),y):"".concat(g).concat(C).concat(_)}return d?(y.res=_,y):_}var y=this.resolve(i,a),b=y&&y.res,S=y&&y.usedKey||_,P=y&&y.exactUsedKey||_,z=Object.prototype.toString.apply(b),I=["[object Number]","[object Function]","[object RegExp]"],D=a.joinArrays!==void 0?a.joinArrays:this.options.joinArrays,j=!this.i18nFormat||this.i18nFormat.handleAsObject,V=typeof b!="string"&&typeof b!="boolean"&&typeof b!="number";if(j&&b&&V&&I.indexOf(z)<0&&!(typeof D=="string"&&z==="[object Array]")){if(!a.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var U=this.options.returnedObjectHandler?this.options.returnedObjectHandler(S,b,It(It({},a),{},{ns:p})):"key '".concat(_," (").concat(this.language,")' returned an object instead of string.");return d?(y.res=U,y):U}if(f){var R=z==="[object Array]",Y=R?[]:{},_e=R?P:S;for(var re in b)if(Object.prototype.hasOwnProperty.call(b,re)){var fe="".concat(_e).concat(f).concat(re);Y[re]=this.translate(fe,It(It({},a),{joinArrays:!1,ns:p})),Y[re]===fe&&(Y[re]=b[re])}b=Y}}else if(j&&typeof D=="string"&&z==="[object Array]")b=b.join(D),b&&(b=this.extendTranslation(b,i,a,l));else{var ee=!1,ue=!1,M=a.count!==void 0&&typeof a.count!="string",oe=n.hasDefaultValue(a),K=M?this.pluralResolver.getSuffix(x,a.count,a):"",O=a["defaultValue".concat(K)]||a.defaultValue;!this.isValidLookup(b)&&oe&&(ee=!0,b=O),this.isValidLookup(b)||(ue=!0,b=_);var B=a.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey,A=B&&ue?void 0:b,Q=oe&&O!==b&&this.options.updateMissing;if(ue||ee||Q){if(this.logger.log(Q?"updateKey":"missingKey",x,g,_,Q?O:b),f){var te=this.resolve(_,It(It({},a),{},{keySeparator:!1}));te&&te.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var $=[],ne=this.languageUtils.getFallbackCodes(this.options.fallbackLng,a.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ne&&ne[0])for(var se=0;se<ne.length;se++)$.push(ne[se]);else this.options.saveMissingTo==="all"?$=this.languageUtils.toResolveHierarchy(a.lng||this.language):$.push(a.lng||this.language);var Ue=function(Re,Ee,qe){var Te=oe&&qe!==b?qe:A;u.options.missingKeyHandler?u.options.missingKeyHandler(Re,g,Ee,Te,Q,a):u.backendConnector&&u.backendConnector.saveMissing&&u.backendConnector.saveMissing(Re,g,Ee,Te,Q,a),u.emit("missingKey",Re,g,Ee,b)};this.options.saveMissing&&(this.options.saveMissingPlurals&&M?$.forEach(function(We){u.pluralResolver.getSuffixes(We,a).forEach(function(Re){Ue([We],_+Re,a["defaultValue".concat(Re)]||O)})}):Ue($,_,O))}b=this.extendTranslation(b,i,a,y,l),ue&&b===_&&this.options.appendNamespaceToMissingKey&&(b="".concat(g,":").concat(_)),(ue||ee)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?b=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(g,":").concat(_):_,ee?b:void 0):b=this.options.parseMissingKeyHandler(b))}return d?(y.res=b,y):b}},{key:"extendTranslation",value:function(i,a,l,u,d){var f=this;if(this.i18nFormat&&this.i18nFormat.parse)i=this.i18nFormat.parse(i,It(It({},this.options.interpolation.defaultVariables),l),u.usedLng,u.usedNS,u.usedKey,{resolved:u});else if(!l.skipInterpolation){l.interpolation&&this.interpolator.init(It(It({},l),{interpolation:It(It({},this.options.interpolation),l.interpolation)}));var m=typeof i=="string"&&(l&&l.interpolation&&l.interpolation.skipOnVariables!==void 0?l.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables),_;if(m){var p=i.match(this.interpolator.nestingRegexp);_=p&&p.length}var g=l.replace&&typeof l.replace!="string"?l.replace:l;if(this.options.interpolation.defaultVariables&&(g=It(It({},this.options.interpolation.defaultVariables),g)),i=this.interpolator.interpolate(i,g,l.lng||this.language,l),m){var x=i.match(this.interpolator.nestingRegexp),w=x&&x.length;_<w&&(l.nest=!1)}l.nest!==!1&&(i=this.interpolator.nest(i,function(){for(var b=arguments.length,S=new Array(b),P=0;P<b;P++)S[P]=arguments[P];return d&&d[0]===S[0]&&!l.context?(f.logger.warn("It seems you are nesting recursively key: ".concat(S[0]," in key: ").concat(a[0])),null):f.translate.apply(f,S.concat([a]))},l)),l.interpolation&&this.interpolator.reset()}var C=l.postProcess||this.options.postProcess,y=typeof C=="string"?[C]:C;return i!=null&&y&&y.length&&l.applyPostProcessor!==!1&&(i=R1.handle(y,i,a,this.options&&this.options.postProcessPassResolved?It({i18nResolved:u},l):l,this)),i}},{key:"resolve",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u,d,f,m,_;return typeof i=="string"&&(i=[i]),i.forEach(function(p){if(!a.isValidLookup(u)){var g=a.extractFromKey(p,l),x=g.key;d=x;var w=g.namespaces;a.options.fallbackNS&&(w=w.concat(a.options.fallbackNS));var C=l.count!==void 0&&typeof l.count!="string",y=C&&!l.ordinal&&l.count===0&&a.pluralResolver.shouldUseIntlApi(),b=l.context!==void 0&&(typeof l.context=="string"||typeof l.context=="number")&&l.context!=="",S=l.lngs?l.lngs:a.languageUtils.toResolveHierarchy(l.lng||a.language,l.fallbackLng);w.forEach(function(P){a.isValidLookup(u)||(_=P,!sg["".concat(S[0],"-").concat(P)]&&a.utils&&a.utils.hasLoadedNamespace&&!a.utils.hasLoadedNamespace(_)&&(sg["".concat(S[0],"-").concat(P)]=!0,a.logger.warn('key "'.concat(d,'" for languages "').concat(S.join(", "),`" won't get resolved as namespace "`).concat(_,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),S.forEach(function(z){if(!a.isValidLookup(u)){m=z;var I=[x];if(a.i18nFormat&&a.i18nFormat.addLookupKeys)a.i18nFormat.addLookupKeys(I,x,z,P,l);else{var D;C&&(D=a.pluralResolver.getSuffix(z,l.count,l));var j="".concat(a.options.pluralSeparator,"zero");if(C&&(I.push(x+D),y&&I.push(x+j)),b){var V="".concat(x).concat(a.options.contextSeparator).concat(l.context);I.push(V),C&&(I.push(V+D),y&&I.push(V+j))}}for(var U;U=I.pop();)a.isValidLookup(u)||(f=U,u=a.getResource(z,P,U,l))}}))})}}),{res:u,usedKey:d,exactUsedKey:f,usedLng:m,usedNS:_}}},{key:"isValidLookup",value:function(i){return i!==void 0&&!(!this.options.returnNull&&i===null)&&!(!this.options.returnEmptyString&&i==="")}},{key:"getResource",value:function(i,a,l){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(i,a,l,u):this.resourceStore.getResource(i,a,l,u)}}],[{key:"hasDefaultValue",value:function(i){var a="defaultValue";for(var l in i)if(Object.prototype.hasOwnProperty.call(i,l)&&a===l.substring(0,a.length)&&i[l]!==void 0)return!0;return!1}}]),n}(io);function Dd(e){return e.charAt(0).toUpperCase()+e.slice(1)}var ug=function(){function e(t){An(this,e),this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Hn.create("languageUtils")}return Nn(e,[{key:"getScriptPartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return null;var r=n.split("-");return r.length===2||(r.pop(),r[r.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(r.join("-"))}},{key:"getLanguagePartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return n;var r=n.split("-");return this.formatLanguageCode(r[0])}},{key:"formatLanguageCode",value:function(n){if(typeof n=="string"&&n.indexOf("-")>-1){var r=["hans","hant","latn","cyrl","cans","mong","arab"],i=n.split("-");return this.options.lowerCaseLng?i=i.map(function(a){return a.toLowerCase()}):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),r.indexOf(i[1].toLowerCase())>-1&&(i[1]=Dd(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),r.indexOf(i[1].toLowerCase())>-1&&(i[1]=Dd(i[1].toLowerCase())),r.indexOf(i[2].toLowerCase())>-1&&(i[2]=Dd(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?n.toLowerCase():n}},{key:"isSupportedCode",value:function(n){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(n=this.getLanguagePartFromCode(n)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(n)>-1}},{key:"getBestMatchFromCodes",value:function(n){var r=this;if(!n)return null;var i;return n.forEach(function(a){if(!i){var l=r.formatLanguageCode(a);(!r.options.supportedLngs||r.isSupportedCode(l))&&(i=l)}}),!i&&this.options.supportedLngs&&n.forEach(function(a){if(!i){var l=r.getLanguagePartFromCode(a);if(r.isSupportedCode(l))return i=l;i=r.options.supportedLngs.find(function(u){if(u.indexOf(l)===0)return u})}}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}},{key:"getFallbackCodes",value:function(n,r){if(!n)return[];if(typeof n=="function"&&(n=n(r)),typeof n=="string"&&(n=[n]),Object.prototype.toString.apply(n)==="[object Array]")return n;if(!r)return n.default||[];var i=n[r];return i||(i=n[this.getScriptPartFromCode(r)]),i||(i=n[this.formatLanguageCode(r)]),i||(i=n[this.getLanguagePartFromCode(r)]),i||(i=n.default),i||[]}},{key:"toResolveHierarchy",value:function(n,r){var i=this,a=this.getFallbackCodes(r||this.options.fallbackLng||[],n),l=[],u=function(f){f&&(i.isSupportedCode(f)?l.push(f):i.logger.warn("rejecting language code not found in supportedLngs: ".concat(f)))};return typeof n=="string"&&n.indexOf("-")>-1?(this.options.load!=="languageOnly"&&u(this.formatLanguageCode(n)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&u(this.getScriptPartFromCode(n)),this.options.load!=="currentOnly"&&u(this.getLanguagePartFromCode(n))):typeof n=="string"&&u(this.formatLanguageCode(n)),a.forEach(function(d){l.indexOf(d)<0&&u(i.formatLanguageCode(d))}),l}}]),e}(),UE=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],$E={1:function(t){return Number(t>1)},2:function(t){return Number(t!=1)},3:function(t){return 0},4:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},5:function(t){return Number(t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5)},6:function(t){return Number(t==1?0:t>=2&&t<=4?1:2)},7:function(t){return Number(t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},8:function(t){return Number(t==1?0:t==2?1:t!=8&&t!=11?2:3)},9:function(t){return Number(t>=2)},10:function(t){return Number(t==1?0:t==2?1:t<7?2:t<11?3:4)},11:function(t){return Number(t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3)},12:function(t){return Number(t%10!=1||t%100==11)},13:function(t){return Number(t!==0)},14:function(t){return Number(t==1?0:t==2?1:t==3?2:3)},15:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2)},16:function(t){return Number(t%10==1&&t%100!=11?0:t!==0?1:2)},17:function(t){return Number(t==1||t%10==1&&t%100!=11?0:1)},18:function(t){return Number(t==0?0:t==1?1:2)},19:function(t){return Number(t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3)},20:function(t){return Number(t==1?0:t==0||t%100>0&&t%100<20?1:2)},21:function(t){return Number(t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0)},22:function(t){return Number(t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3)}},ZE=["v1","v2","v3"],cg={zero:0,one:1,two:2,few:3,many:4,other:5};function WE(){var e={};return UE.forEach(function(t){t.lngs.forEach(function(n){e[n]={numbers:t.nr,plurals:$E[t.fc]}})}),e}var HE=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};An(this,e),this.languageUtils=t,this.options=n,this.logger=Hn.create("pluralResolver"),(!this.options.compatibilityJSON||this.options.compatibilityJSON==="v4")&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=WE()}return Nn(e,[{key:"addRule",value:function(n,r){this.rules[n]=r}},{key:"getRule",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(n,{type:r.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[n]||this.rules[this.languageUtils.getLanguagePartFromCode(n)]}},{key:"needsPlural",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(n,r);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(n,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(n,i).map(function(a){return"".concat(r).concat(a)})}},{key:"getSuffixes",value:function(n){var r=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(n,i);return a?this.shouldUseIntlApi()?a.resolvedOptions().pluralCategories.sort(function(l,u){return cg[l]-cg[u]}).map(function(l){return"".concat(r.options.prepend).concat(l)}):a.numbers.map(function(l){return r.getSuffix(n,l,i)}):[]}},{key:"getSuffix",value:function(n,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=this.getRule(n,i);return a?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(a.select(r)):this.getSuffixRetroCompatible(a,r):(this.logger.warn("no plural rule found for: ".concat(n)),"")}},{key:"getSuffixRetroCompatible",value:function(n,r){var i=this,a=n.noAbs?n.plurals(r):n.plurals(Math.abs(r)),l=n.numbers[a];this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1&&(l===2?l="plural":l===1&&(l=""));var u=function(){return i.options.prepend&&l.toString()?i.options.prepend+l.toString():l.toString()};return this.options.compatibilityJSON==="v1"?l===1?"":typeof l=="number"?"_plural_".concat(l.toString()):u():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1?u():this.options.prepend&&a.toString()?this.options.prepend+a.toString():a.toString()}},{key:"shouldUseIntlApi",value:function(){return!ZE.includes(this.options.compatibilityJSON)}}]),e}();function dg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function bn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dg(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var VE=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};An(this,e),this.logger=Hn.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(n){return n},this.init(t)}return Nn(e,[{key:"init",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};n.interpolation||(n.interpolation={escapeValue:!0});var r=n.interpolation;this.escape=r.escape!==void 0?r.escape:AE,this.escapeValue=r.escapeValue!==void 0?r.escapeValue:!0,this.useRawValueToEscape=r.useRawValueToEscape!==void 0?r.useRawValueToEscape:!1,this.prefix=r.prefix?si(r.prefix):r.prefixEscaped||"{{",this.suffix=r.suffix?si(r.suffix):r.suffixEscaped||"}}",this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||",",this.unescapePrefix=r.unescapeSuffix?"":r.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":r.unescapeSuffix||"",this.nestingPrefix=r.nestingPrefix?si(r.nestingPrefix):r.nestingPrefixEscaped||si("$t("),this.nestingSuffix=r.nestingSuffix?si(r.nestingSuffix):r.nestingSuffixEscaped||si(")"),this.nestingOptionsSeparator=r.nestingOptionsSeparator?r.nestingOptionsSeparator:r.nestingOptionsSeparator||",",this.maxReplaces=r.maxReplaces?r.maxReplaces:1e3,this.alwaysFormat=r.alwaysFormat!==void 0?r.alwaysFormat:!1,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var n="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(n,"g");var r="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(r,"g");var i="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(i,"g")}},{key:"interpolate",value:function(n,r,i,a){var l=this,u,d,f,m=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function _(C){return C.replace(/\$/g,"$$$$")}var p=function(y){if(y.indexOf(l.formatSeparator)<0){var b=og(r,m,y);return l.alwaysFormat?l.format(b,void 0,i,bn(bn(bn({},a),r),{},{interpolationkey:y})):b}var S=y.split(l.formatSeparator),P=S.shift().trim(),z=S.join(l.formatSeparator).trim();return l.format(og(r,m,P),z,i,bn(bn(bn({},a),r),{},{interpolationkey:P}))};this.resetRegExp();var g=a&&a.missingInterpolationHandler||this.options.missingInterpolationHandler,x=a&&a.interpolation&&a.interpolation.skipOnVariables!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables,w=[{regex:this.regexpUnescape,safeValue:function(y){return _(y)}},{regex:this.regexp,safeValue:function(y){return l.escapeValue?_(l.escape(y)):_(y)}}];return w.forEach(function(C){for(f=0;u=C.regex.exec(n);){var y=u[1].trim();if(d=p(y),d===void 0)if(typeof g=="function"){var b=g(n,u,a);d=typeof b=="string"?b:""}else if(a&&a.hasOwnProperty(y))d="";else if(x){d=u[0];continue}else l.logger.warn("missed to pass in variable ".concat(y," for interpolating ").concat(n)),d="";else typeof d!="string"&&!l.useRawValueToEscape&&(d=ng(d));var S=C.safeValue(d);if(n=n.replace(u[0],S),x?(C.regex.lastIndex+=d.length,C.regex.lastIndex-=u[0].length):C.regex.lastIndex=0,f++,f>=l.maxReplaces)break}}),n}},{key:"nest",value:function(n,r){var i=this,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l,u,d;function f(g,x){var w=this.nestingOptionsSeparator;if(g.indexOf(w)<0)return g;var C=g.split(new RegExp("".concat(w,"[ ]*{"))),y="{".concat(C[1]);g=C[0],y=this.interpolate(y,d);var b=y.match(/'/g),S=y.match(/"/g);(b&&b.length%2===0&&!S||S.length%2!==0)&&(y=y.replace(/'/g,'"'));try{d=JSON.parse(y),x&&(d=bn(bn({},x),d))}catch(P){return this.logger.warn("failed parsing options string in nesting for key ".concat(g),P),"".concat(g).concat(w).concat(y)}return delete d.defaultValue,g}for(;l=this.nestingRegexp.exec(n);){var m=[];d=bn({},a),d=d.replace&&typeof d.replace!="string"?d.replace:d,d.applyPostProcessor=!1,delete d.defaultValue;var _=!1;if(l[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(l[1])){var p=l[1].split(this.formatSeparator).map(function(g){return g.trim()});l[1]=p.shift(),m=p,_=!0}if(u=r(f.call(this,l[1].trim(),d),d),u&&l[0]===n&&typeof u!="string")return u;typeof u!="string"&&(u=ng(u)),u||(this.logger.warn("missed to resolve ".concat(l[1]," for nesting ").concat(n)),u=""),_&&(u=m.reduce(function(g,x){return i.format(g,x,a.lng,bn(bn({},a),{},{interpolationkey:l[1].trim()}))},u.trim())),n=n.replace(l[0],u),this.regexp.lastIndex=0}return n}}]),e}();function fg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Tr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fg(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function qE(e){var t=e.toLowerCase().trim(),n={};if(e.indexOf("(")>-1){var r=e.split("(");t=r[0].toLowerCase().trim();var i=r[1].substring(0,r[1].length-1);if(t==="currency"&&i.indexOf(":")<0)n.currency||(n.currency=i.trim());else if(t==="relativetime"&&i.indexOf(":")<0)n.range||(n.range=i.trim());else{var a=i.split(";");a.forEach(function(l){if(l){var u=l.split(":"),d=EE(u),f=d[0],m=d.slice(1),_=m.join(":").trim().replace(/^'+|'+$/g,"");n[f.trim()]||(n[f.trim()]=_),_==="false"&&(n[f.trim()]=!1),_==="true"&&(n[f.trim()]=!0),isNaN(_)||(n[f.trim()]=parseInt(_,10))}})}}return{formatName:t,formatOptions:n}}function li(e){var t={};return function(r,i,a){var l=i+JSON.stringify(a),u=t[l];return u||(u=e(i,a),t[l]=u),u(r)}}var KE=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};An(this,e),this.logger=Hn.create("formatter"),this.options=t,this.formats={number:li(function(n,r){var i=new Intl.NumberFormat(n,r);return function(a){return i.format(a)}}),currency:li(function(n,r){var i=new Intl.NumberFormat(n,Tr(Tr({},r),{},{style:"currency"}));return function(a){return i.format(a)}}),datetime:li(function(n,r){var i=new Intl.DateTimeFormat(n,Tr({},r));return function(a){return i.format(a)}}),relativetime:li(function(n,r){var i=new Intl.RelativeTimeFormat(n,Tr({},r));return function(a){return i.format(a,r.range||"day")}}),list:li(function(n,r){var i=new Intl.ListFormat(n,Tr({},r));return function(a){return i.format(a)}})},this.init(t)}return Nn(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}},i=r.interpolation;this.formatSeparator=i.formatSeparator?i.formatSeparator:i.formatSeparator||","}},{key:"add",value:function(n,r){this.formats[n.toLowerCase().trim()]=r}},{key:"addCached",value:function(n,r){this.formats[n.toLowerCase().trim()]=li(r)}},{key:"format",value:function(n,r,i,a){var l=this,u=r.split(this.formatSeparator),d=u.reduce(function(f,m){var _=qE(m),p=_.formatName,g=_.formatOptions;if(l.formats[p]){var x=f;try{var w=a&&a.formatParams&&a.formatParams[a.interpolationkey]||{},C=w.locale||w.lng||a.locale||a.lng||i;x=l.formats[p](f,C,Tr(Tr(Tr({},g),a),w))}catch(y){l.logger.warn(y)}return x}else l.logger.warn("there was no format function for ".concat(p));return f},n);return d}}]),e}();function hg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function pg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hg(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function QE(e){var t=GE();return function(){var r=Xn(e),i;if(t){var a=Xn(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ts(this,i)}}function GE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function XE(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}var JE=function(e){Pc(n,e);var t=QE(n);function n(r,i,a){var l,u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return An(this,n),l=t.call(this),Cc&&io.call(Xr(l)),l.backend=r,l.store=i,l.services=a,l.languageUtils=a.languageUtils,l.options=u,l.logger=Hn.create("backendConnector"),l.waitingReads=[],l.maxParallelReads=u.maxParallelReads||10,l.readingCalls=0,l.maxRetries=u.maxRetries>=0?u.maxRetries:5,l.retryTimeout=u.retryTimeout>=1?u.retryTimeout:350,l.state={},l.queue=[],l.backend&&l.backend.init&&l.backend.init(a,u.backend,u),l}return Nn(n,[{key:"queueLoad",value:function(i,a,l,u){var d=this,f={},m={},_={},p={};return i.forEach(function(g){var x=!0;a.forEach(function(w){var C="".concat(g,"|").concat(w);!l.reload&&d.store.hasResourceBundle(g,w)?d.state[C]=2:d.state[C]<0||(d.state[C]===1?m[C]===void 0&&(m[C]=!0):(d.state[C]=1,x=!1,m[C]===void 0&&(m[C]=!0),f[C]===void 0&&(f[C]=!0),p[w]===void 0&&(p[w]=!0)))}),x||(_[g]=!0)}),(Object.keys(f).length||Object.keys(m).length)&&this.queue.push({pending:m,pendingCount:Object.keys(m).length,loaded:{},errors:[],callback:u}),{toLoad:Object.keys(f),pending:Object.keys(m),toLoadLanguages:Object.keys(_),toLoadNamespaces:Object.keys(p)}}},{key:"loaded",value:function(i,a,l){var u=i.split("|"),d=u[0],f=u[1];a&&this.emit("failedLoading",d,f,a),l&&this.store.addResourceBundle(d,f,l),this.state[i]=a?-1:2;var m={};this.queue.forEach(function(_){zE(_.loaded,[d],f),XE(_,i),a&&_.errors.push(a),_.pendingCount===0&&!_.done&&(Object.keys(_.loaded).forEach(function(p){m[p]||(m[p]={});var g=_.loaded[p];g.length&&g.forEach(function(x){m[p][x]===void 0&&(m[p][x]=!0)})}),_.done=!0,_.errors.length?_.callback(_.errors):_.callback())}),this.emit("loaded",m),this.queue=this.queue.filter(function(_){return!_.done})}},{key:"read",value:function(i,a,l){var u=this,d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,f=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,m=arguments.length>5?arguments[5]:void 0;if(!i.length)return m(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:i,ns:a,fcName:l,tried:d,wait:f,callback:m});return}this.readingCalls++;var _=function(w,C){if(u.readingCalls--,u.waitingReads.length>0){var y=u.waitingReads.shift();u.read(y.lng,y.ns,y.fcName,y.tried,y.wait,y.callback)}if(w&&C&&d<u.maxRetries){setTimeout(function(){u.read.call(u,i,a,l,d+1,f*2,m)},f);return}m(w,C)},p=this.backend[l].bind(this.backend);if(p.length===2){try{var g=p(i,a);g&&typeof g.then=="function"?g.then(function(x){return _(null,x)}).catch(_):_(null,g)}catch(x){_(x)}return}return p(i,a,_)}},{key:"prepareLoading",value:function(i,a){var l=this,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},d=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),d&&d();typeof i=="string"&&(i=this.languageUtils.toResolveHierarchy(i)),typeof a=="string"&&(a=[a]);var f=this.queueLoad(i,a,u,d);if(!f.toLoad.length)return f.pending.length||d(),null;f.toLoad.forEach(function(m){l.loadOne(m)})}},{key:"load",value:function(i,a,l){this.prepareLoading(i,a,{},l)}},{key:"reload",value:function(i,a,l){this.prepareLoading(i,a,{reload:!0},l)}},{key:"loadOne",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",u=i.split("|"),d=u[0],f=u[1];this.read(d,f,"read",void 0,void 0,function(m,_){m&&a.logger.warn("".concat(l,"loading namespace ").concat(f," for language ").concat(d," failed"),m),!m&&_&&a.logger.log("".concat(l,"loaded namespace ").concat(f," for language ").concat(d),_),a.loaded(i,m,_)})}},{key:"saveMissing",value:function(i,a,l,u,d){var f=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},m=arguments.length>6&&arguments[6]!==void 0?arguments[6]:function(){};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(a)){this.logger.warn('did not save key "'.concat(l,'" as the namespace "').concat(a,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(l==null||l==="")){if(this.backend&&this.backend.create){var _=pg(pg({},f),{},{isUpdate:d}),p=this.backend.create.bind(this.backend);if(p.length<6)try{var g;p.length===5?g=p(i,a,l,u,_):g=p(i,a,l,u),g&&typeof g.then=="function"?g.then(function(x){return m(null,x)}).catch(m):m(null,g)}catch(x){m(x)}else p(i,a,l,u,m,_)}!i||!i[0]||this.store.addResource(i[0],a,l,u)}}}]),n}(io);function mg(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){var n={};if(Tn(t[1])==="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),Tn(t[2])==="object"||Tn(t[3])==="object"){var r=t[3]||t[2];Object.keys(r).forEach(function(i){n[i]=r[i]})}return n},interpolation:{escapeValue:!0,format:function(t,n,r,i){return t},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function _g(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function vg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Un(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vg(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function YE(e){var t=eO();return function(){var r=Xn(e),i;if(t){var a=Xn(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ts(this,i)}}function eO(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function vl(){}function tO(e){var t=Object.getOwnPropertyNames(Object.getPrototypeOf(e));t.forEach(function(n){typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}var wu=function(e){Pc(n,e);var t=YE(n);function n(){var r,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;if(An(this,n),r=t.call(this),Cc&&io.call(Xr(r)),r.options=_g(i),r.services={},r.logger=Hn,r.modules={external:[]},tO(Xr(r)),a&&!r.isInitialized&&!i.isClone){if(!r.options.initImmediate)return r.init(i,a),Ts(r,Xr(r));setTimeout(function(){r.init(i,a)},0)}return r}return Nn(n,[{key:"init",value:function(){var i=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=arguments.length>1?arguments[1]:void 0;typeof a=="function"&&(l=a,a={}),!a.defaultNS&&a.defaultNS!==!1&&a.ns&&(typeof a.ns=="string"?a.defaultNS=a.ns:a.ns.indexOf("translation")<0&&(a.defaultNS=a.ns[0]));var u=mg();this.options=Un(Un(Un({},u),this.options),_g(a)),this.options.compatibilityAPI!=="v1"&&(this.options.interpolation=Un(Un({},u.interpolation),this.options.interpolation)),a.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=a.keySeparator),a.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=a.nsSeparator);function d(y){return y?typeof y=="function"?new y:y:null}if(!this.options.isClone){this.modules.logger?Hn.init(d(this.modules.logger),this.options):Hn.init(null,this.options);var f;this.modules.formatter?f=this.modules.formatter:typeof Intl<"u"&&(f=KE);var m=new ug(this.options);this.store=new DE(this.options.resources,this.options);var _=this.services;_.logger=Hn,_.resourceStore=this.store,_.languageUtils=m,_.pluralResolver=new HE(m,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),f&&(!this.options.interpolation.format||this.options.interpolation.format===u.interpolation.format)&&(_.formatter=d(f),_.formatter.init(_,this.options),this.options.interpolation.format=_.formatter.format.bind(_.formatter)),_.interpolator=new VE(this.options),_.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},_.backendConnector=new JE(d(this.modules.backend),_.resourceStore,_,this.options),_.backendConnector.on("*",function(y){for(var b=arguments.length,S=new Array(b>1?b-1:0),P=1;P<b;P++)S[P-1]=arguments[P];i.emit.apply(i,[y].concat(S))}),this.modules.languageDetector&&(_.languageDetector=d(this.modules.languageDetector),_.languageDetector.init&&_.languageDetector.init(_,this.options.detection,this.options)),this.modules.i18nFormat&&(_.i18nFormat=d(this.modules.i18nFormat),_.i18nFormat.init&&_.i18nFormat.init(this)),this.translator=new lg(this.services,this.options),this.translator.on("*",function(y){for(var b=arguments.length,S=new Array(b>1?b-1:0),P=1;P<b;P++)S[P-1]=arguments[P];i.emit.apply(i,[y].concat(S))}),this.modules.external.forEach(function(y){y.init&&y.init(i)})}if(this.format=this.options.interpolation.format,l||(l=vl),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var p=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);p.length>0&&p[0]!=="dev"&&(this.options.lng=p[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined");var g=["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"];g.forEach(function(y){i[y]=function(){var b;return(b=i.store)[y].apply(b,arguments)}});var x=["addResource","addResources","addResourceBundle","removeResourceBundle"];x.forEach(function(y){i[y]=function(){var b;return(b=i.store)[y].apply(b,arguments),i}});var w=Pa(),C=function(){var b=function(P,z){i.isInitialized&&!i.initializedStoreOnce&&i.logger.warn("init: i18next is already initialized. You should call init just once!"),i.isInitialized=!0,i.options.isClone||i.logger.log("initialized",i.options),i.emit("initialized",i.options),w.resolve(z),l(P,z)};if(i.languages&&i.options.compatibilityAPI!=="v1"&&!i.isInitialized)return b(null,i.t.bind(i));i.changeLanguage(i.options.lng,b)};return this.options.resources||!this.options.initImmediate?C():setTimeout(C,0),w}},{key:"loadResources",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vl,u=l,d=typeof i=="string"?i:this.language;if(typeof i=="function"&&(u=i),!this.options.resources||this.options.partialBundledLanguages){if(d&&d.toLowerCase()==="cimode")return u();var f=[],m=function(g){if(g){var x=a.services.languageUtils.toResolveHierarchy(g);x.forEach(function(w){f.indexOf(w)<0&&f.push(w)})}};if(d)m(d);else{var _=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);_.forEach(function(p){return m(p)})}this.options.preload&&this.options.preload.forEach(function(p){return m(p)}),this.services.backendConnector.load(f,this.options.ns,function(p){!p&&!a.resolvedLanguage&&a.language&&a.setResolvedLanguage(a.language),u(p)})}else u(null)}},{key:"reloadResources",value:function(i,a,l){var u=Pa();return i||(i=this.languages),a||(a=this.options.ns),l||(l=vl),this.services.backendConnector.reload(i,a,function(d){u.resolve(),l(d)}),u}},{key:"use",value:function(i){if(!i)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!i.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return i.type==="backend"&&(this.modules.backend=i),(i.type==="logger"||i.log&&i.warn&&i.error)&&(this.modules.logger=i),i.type==="languageDetector"&&(this.modules.languageDetector=i),i.type==="i18nFormat"&&(this.modules.i18nFormat=i),i.type==="postProcessor"&&R1.addPostProcessor(i),i.type==="formatter"&&(this.modules.formatter=i),i.type==="3rdParty"&&this.modules.external.push(i),this}},{key:"setResolvedLanguage",value:function(i){if(!(!i||!this.languages)&&!(["cimode","dev"].indexOf(i)>-1))for(var a=0;a<this.languages.length;a++){var l=this.languages[a];if(!(["cimode","dev"].indexOf(l)>-1)&&this.store.hasLanguageSomeTranslations(l)){this.resolvedLanguage=l;break}}}},{key:"changeLanguage",value:function(i,a){var l=this;this.isLanguageChangingTo=i;var u=Pa();this.emit("languageChanging",i);var d=function(p){l.language=p,l.languages=l.services.languageUtils.toResolveHierarchy(p),l.resolvedLanguage=void 0,l.setResolvedLanguage(p)},f=function(p,g){g?(d(g),l.translator.changeLanguage(g),l.isLanguageChangingTo=void 0,l.emit("languageChanged",g),l.logger.log("languageChanged",g)):l.isLanguageChangingTo=void 0,u.resolve(function(){return l.t.apply(l,arguments)}),a&&a(p,function(){return l.t.apply(l,arguments)})},m=function(p){!i&&!p&&l.services.languageDetector&&(p=[]);var g=typeof p=="string"?p:l.services.languageUtils.getBestMatchFromCodes(p);g&&(l.language||d(g),l.translator.language||l.translator.changeLanguage(g),l.services.languageDetector&&l.services.languageDetector.cacheUserLanguage&&l.services.languageDetector.cacheUserLanguage(g)),l.loadResources(g,function(x){f(x,g)})};return!i&&this.services.languageDetector&&!this.services.languageDetector.async?m(this.services.languageDetector.detect()):!i&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(m):this.services.languageDetector.detect(m):m(i),u}},{key:"getFixedT",value:function(i,a,l){var u=this,d=function f(m,_){var p;if(Tn(_)!=="object"){for(var g=arguments.length,x=new Array(g>2?g-2:0),w=2;w<g;w++)x[w-2]=arguments[w];p=u.options.overloadTranslationOptionHandler([m,_].concat(x))}else p=Un({},_);p.lng=p.lng||f.lng,p.lngs=p.lngs||f.lngs,p.ns=p.ns||f.ns,p.keyPrefix=p.keyPrefix||l||f.keyPrefix;var C=u.options.keySeparator||".",y;return p.keyPrefix&&Array.isArray(m)?y=m.map(function(b){return"".concat(p.keyPrefix).concat(C).concat(b)}):y=p.keyPrefix?"".concat(p.keyPrefix).concat(C).concat(m):m,u.t(y,p)};return typeof i=="string"?d.lng=i:d.lngs=i,d.ns=a,d.keyPrefix=l,d}},{key:"t",value:function(){var i;return this.translator&&(i=this.translator).translate.apply(i,arguments)}},{key:"exists",value:function(){var i;return this.translator&&(i=this.translator).exists.apply(i,arguments)}},{key:"setDefaultNamespace",value:function(i){this.options.defaultNS=i}},{key:"hasLoadedNamespace",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var u=this.resolvedLanguage||this.languages[0],d=this.options?this.options.fallbackLng:!1,f=this.languages[this.languages.length-1];if(u.toLowerCase()==="cimode")return!0;var m=function(g,x){var w=a.services.backendConnector.state["".concat(g,"|").concat(x)];return w===-1||w===2};if(l.precheck){var _=l.precheck(this,m);if(_!==void 0)return _}return!!(this.hasResourceBundle(u,i)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||m(u,i)&&(!d||m(f,i)))}},{key:"loadNamespaces",value:function(i,a){var l=this,u=Pa();return this.options.ns?(typeof i=="string"&&(i=[i]),i.forEach(function(d){l.options.ns.indexOf(d)<0&&l.options.ns.push(d)}),this.loadResources(function(d){u.resolve(),a&&a(d)}),u):(a&&a(),Promise.resolve())}},{key:"loadLanguages",value:function(i,a){var l=Pa();typeof i=="string"&&(i=[i]);var u=this.options.preload||[],d=i.filter(function(f){return u.indexOf(f)<0});return d.length?(this.options.preload=u.concat(d),this.loadResources(function(f){l.resolve(),a&&a(f)}),l):(a&&a(),Promise.resolve())}},{key:"dir",value:function(i){if(i||(i=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!i)return"rtl";var a=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],l=this.services&&this.services.languageUtils||new ug(mg());return a.indexOf(l.getLanguagePartFromCode(i))>-1||i.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var i=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vl,u=Un(Un(Un({},this.options),a),{isClone:!0}),d=new n(u);(a.debug!==void 0||a.prefix!==void 0)&&(d.logger=d.logger.clone(a));var f=["store","services","language"];return f.forEach(function(m){d[m]=i[m]}),d.services=Un({},this.services),d.services.utils={hasLoadedNamespace:d.hasLoadedNamespace.bind(d)},d.translator=new lg(d.services,d.options),d.translator.on("*",function(m){for(var _=arguments.length,p=new Array(_>1?_-1:0),g=1;g<_;g++)p[g-1]=arguments[g];d.emit.apply(d,[m].concat(p))}),d.init(u,l),d.translator.options=d.options,d.translator.backendConnector.services.utils={hasLoadedNamespace:d.hasLoadedNamespace.bind(d)},d}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),n}(io);Rn(wu,"createInstance",function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new wu(e,t)});var At=wu.createInstance();At.createInstance=wu.createInstance;At.createInstance;At.dir;At.init;At.loadResources;At.reloadResources;var nO=At.use;At.changeLanguage;At.getFixedT;var xo=At.t;At.exists;At.setDefaultNamespace;At.hasLoadedNamespace;At.loadNamespaces;At.loadLanguages;const Fd=()=>mt("div",{children:[de("h1",{children:"Det skjedde en feil"}),de("p",{children:de("i",{children:"Vennligst gå tilbake i nettleseren eller refresh siden"})})]}),rO="2.25rem",oO="3.75rem",iO="540px",aO="#000000",sO="#0062ba",lO={0:{value:"Base",type:"other"},1:{value:"Components",type:"other"}},uO={id:"edeff752fe55f2581f6ceee82c66aac8b8a8622d",selectedTokenSets:{Base:"source"},$figmaStyleReferences:{},type:"other",value:"[object Object]"},cO={id:"df8b73b683752ef5f35b3cf293bbe5a0cba9f88d",selectedTokenSets:{Base:"source"},$figmaStyleReferences:{},type:"other",value:"[object Object]"},dO={icon:{size:{xs:{value:"1.5rem",type:"sizing"},sm:{value:"1.875rem",type:"sizing"},md:{value:"2.25rem",type:"sizing"},lg:{value:"3rem",type:"sizing"},xl:{value:"3.75rem",type:"sizing"}}},panel:{color:{background:{default:{value:"#e6eff8",type:"color"},success:{value:"#d1f4e1",type:"color"},warning:{value:"#fffbe6",type:"color"}},arrow:{default:{value:"#e6eff8",type:"color"},success:{value:"#d1f4e1",type:"color"},warning:{value:"#fffbe6",type:"color"}}},font_size:{header:{breakpoint_sm:{value:"1.5rem",type:"fontSizes"},breakpoint_md:{value:"1.75rem",type:"fontSizes"},breakpoint_lg:{value:"2.25rem",type:"fontSizes"}},body:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},space:{padding:{x:{xs:{value:"1.5rem",type:"spacing"},md:{value:"6rem",type:"spacing"}},y:{xs:{value:"1.5rem",type:"spacing"},md:{value:"2.25rem",type:"spacing"}}},gap:{xs:{value:"0.75rem",type:"spacing"},md:{value:"0.75rem",type:"spacing"}},text_group:{gap:{xs:{value:"0.375rem",type:"spacing"}}},arrow_left:{md:{value:"6.688rem",type:"spacing"},xs:{value:"4rem",type:"spacing"}}},size:{icon:{xs:{value:"2.25rem",type:"sizing"},md:{value:"3.75rem",type:"sizing"}}},typography:{default:{fontFamily:{value:"Altinn-DIN",type:"fontFamily"},fontWeight:{value:"Regular",type:"fontWeight"},lineHeight:{value:1.5,type:"lineHeight"},fontSize:{value:"1rem",type:"fontSize"},letterSpacing:{value:"3%",type:"letterSpacing"},paragraphSpacing:{value:0,type:"paragraphSpacing"},textDecoration:{value:"none",type:"textDecoration"},textCase:{value:"none",type:"textCase"}}},font_weight:{heading:{value:"bold",type:"fontWeights"}}},legend:{font_weight:{default:{value:"medium",type:"fontWeights"}}},label:{font_weight:{default:{value:"medium",type:"fontWeights"}}},expandable_row:{color:{border_top:{default:{value:"#d2d5d8",type:"color"}},border_bottom:{default:{value:"#d2d5d8",type:"color"}}},space:{padding:{x:{xs:{value:"0.75rem",type:"spacing"},md:{value:"1.5rem",type:"spacing"}},top:{xs:{value:"0.25rem",type:"spacing"}},bottom:{xs:{value:"0.5rem",type:"spacing"}}},gap:{title:{xs:{value:.75,type:"spacing"},md:{value:"1.5rem",type:"spacing"}}}},size:{icon:{xs:{value:"1.5rem",type:"sizing"}}},font_weight:{header:{value:"medium",type:"fontWeights"}},font_size:{header:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},border_width:{default:{value:"1px",type:"borderWidth"}}},checkbox:{space:{gap:{xsmall:{value:"0.5rem",type:"spacing"},small:{value:"0.75rem",type:"spacing"}}},size:{width:{xsmall:{value:"1.125rem",type:"sizing"},small:{value:"1.5rem",type:"sizing"}},height:{xsmall:{value:"1.125rem",type:"sizing"},small:{value:"1.5rem",type:"sizing"}}},color:{border:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"},checked:{value:"#0062ba",type:"color"},error:{value:"#b3253a",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#e6eff8",type:"color"},checked:{value:"#0062ba",type:"color"},error:{value:"#ffffff",type:"color"}},text:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"},checked:{value:"#1e2b3c",type:"color"},error:{value:"#1e2b3c",type:"color"}}},border_width:{xsmall:{value:"2px",type:"borderWidth"},small:{value:"2px",type:"borderWidth"}},font_size:{xs:{value:"0.875rem",type:"fontSizes"},sm:{value:"1rem",type:"fontSizes"}}},fieldset:{space:{gap:{y:{xsmall:{value:"0.75rem",type:"spacing"},small:{value:"1.125rem",type:"spacing"},medium:{value:"1.5rem",type:"spacing"},large:{value:"1.5rem",type:"spacing"}}}}},field_description:{color:{text:{default:{value:"#1e2b3c",type:"color"}}},space:{top:{small:{value:"0.5rem",type:"spacing"},xsmall:{value:"0.375rem",type:"spacing"}}}},textarea:{border_width:{normal:{value:"2px",type:"borderWidth"}},color:{border:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"},error:{value:"#b3253a",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#ffffff",type:"color"},focus:{value:"#ffffff",type:"color"}},text:{default:{value:"#1e2b3c",type:"color"}}},space:{padding:{x:{value:"0.75rem",type:"spacing"},y:{value:"0.375rem",type:"spacing"}}},size:{min_height:{xsmall:{value:"6.25rem",type:"sizing"},small:{value:"9.375rem",type:"sizing"},medium:{value:"12.5rem",type:"sizing"},large:{value:"18.75rem",type:"sizing"},xlarge:{value:"25rem",type:"sizing"}}},font_size:{sm:{value:"1rem",type:"fontSizes"}}},"checkbox-group":{space:{gap:{x:{xsmall:{value:"1.5rem",type:"spacing"},small:{value:"2.25rem",type:"spacing"}},y:{xsmall:{value:"0.563rem",type:"spacing"},small:{value:"1.125rem",type:"spacing"}}}}},toggle_button:{font_size:{sm:{value:"1rem",type:"fontSizes"}},size:{min_width:{sm:{value:"100%",type:"sizing"},md:{value:"auto",type:"sizing"}}},border_width:{inactive:{value:"2px",type:"borderWidth"}},color:{background:{active:{value:"#0062ba",type:"color"},inactive:{value:"#ffffff",type:"color"}},text:{active:{value:"#ffffff",type:"color"},inactive:{value:"#1e2b3c",type:"color"}},border:{inactive:{value:"#0062ba",type:"color"}}},space:{padding:{x:{value:"1.5rem",type:"spacing"},top:{value:"0.125rem",type:"spacing"},bottom:{value:"0.25rem",type:"spacing"}}}},icon_button:{size:{large:{circle:{value:"2.25rem",type:"sizing"},icon:{value:"1.4rem",type:"sizing"}},medium:{circle:{value:"1.5rem",type:"sizing"},icon:{value:"0.875rem",type:"sizing"}},small:{circle:{value:"1.125rem",type:"sizing"},icon:{value:"0.688rem",type:"sizing"}}},border_width:{default:{value:"1px",type:"borderWidth"}}},button:{filled:{primary:{color:{background:{default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"},pressed:{value:"#00315d",type:"color"}}}},color:{text:{all:{value:"#ffffff",type:"color"}}},success:{color:{background:{default:{value:"#118849",type:"color"},hover:{value:"#0c6536",type:"color"},pressed:{value:"#084826",type:"color"}}}},danger:{color:{background:{default:{value:"#e02e49",type:"color"},hover:{value:"#b3253a",type:"color"},pressed:{value:"#861c2c",type:"color"}}}}},space:{gap:{small:{value:"0.5rem",type:"spacing"},medium:{value:"0.5rem",type:"spacing"},large:{value:"0.5rem",type:"spacing"}},padding:{x:{small:{value:"1.125rem",type:"spacing"},medium:{value:"2.25rem",type:"spacing"},large:{value:"3rem",type:"spacing"}}}},quiet:{space:{padding:{x:{small:{value:"0.375rem",type:"spacing"},medium:{value:"0.563rem",type:"spacing"},large:{value:"0.563rem",type:"spacing"}}}},primary:{color:{text:{default:{value:"#0062ba",type:"color"},pressed:{value:"#ffffff",type:"color"}},background:{hover:{value:"#e6eff8",type:"color"},pressed:{value:"#004e95",type:"color"}}}}},outline:{primary:{color:{text:{default:{value:"#0062ba",type:"color"},pressed:{value:"#ffffff",type:"color"}},border:{default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#e6eff8",type:"color"},pressed:{value:"#004e95",type:"color"}}}}},border_width:{default:{value:"1px",type:"borderWidth"}},size:{height:{small:{value:"2.25rem",type:"sizing"},medium:{value:"3rem",type:"sizing"},large:{value:"3.75rem",type:"sizing"}},icon:{small:{value:"1.5rem",type:"sizing"},medium:{value:"1.875rem",type:"sizing"},large:{value:"2.5rem",type:"sizing"}}}},input:{color:{border:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#ffffff",type:"color"},focus:{value:"#ffffff",type:"color"}}},error:{color:{border:{default:{value:"#b3253a",type:"color"}}}},space:{padding:{x:{value:"0.75rem",type:"spacing"},y:{value:"0.375rem",type:"spacing"}}},border_width:{default:{value:"2px",type:"borderWidth"},focus:{value:"4px",type:"borderWidth"}},read_only_info:{color:{border:{default:{value:"#fff4b4",type:"color"}},background:{default:{value:"#fff4b4",type:"color"}}}},read_only_confirm:{color:{background:{default:{value:"#d1f4e1",type:"color"}},border:{default:{value:"#d1f4e1",type:"color"}}}},size:{min_height:{default:{value:"2.25rem",type:"sizing"}}},font_size:{sm:{value:"1rem",type:"fontSizes"},md:{value:"1.125rem",type:"fontSizes"}}},error_message:{space:{padding:{top:{value:"0.375rem",type:"spacing"}}},color:{text:{value:"#b3253a",type:"color"}},font_size:{xs:{value:"0.875rem",type:"fontSizes"}}}},fO={thin:{value:"1px",type:"borderWidth"},standard:{value:"2px",type:"borderWidth"}},hO={half:{value:.375,type:"spacing"},base:{value:.75,type:"spacing"},x2:{value:1.5,type:"spacing"},x3:{value:2.25,type:"spacing"},x4:{value:3,type:"spacing"},x5:{value:3.75,type:"spacing"},x6:{value:4.5,type:"spacing"},x7:{value:5.25,type:"spacing"},x8:{value:6,type:"spacing"},x16:{value:12,type:"spacing"}},pO={border_radius:{normal:{value:"3px",type:"borderRadius"}},border_width:{normal:{value:"2px",type:"borderWidth"}}},mO={default:{value:"2.25rem",type:"paragraphSpacing"}},_O={100:{value:"0.75rem",type:"fontSizes"},200:{value:"0.875rem",type:"fontSizes"},300:{value:"1rem",type:"fontSizes"},400:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}},500:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"},breakpoint_lg:{value:"1.25rem",type:"fontSizes"}},600:{breakpoint_sm:{value:"1.125rem",type:"fontSizes",description:"18px"},breakpoint_md:{value:"1.25rem",type:"fontSizes",description:"20px"},breakpoint_lg:{value:"1.5rem",type:"fontSizes",description:"24px"}},700:{breakpoint_sm:{value:"1.25rem",type:"fontSizes",description:"20px"},breakpoint_md:{value:"1.5rem",type:"fontSizes",description:"24px"},breakpoint_lg:{value:"1.75rem",type:"fontSizes",description:"28px"}},800:{breakpoint_sm:{value:"1.5rem",type:"fontSizes",description:"24px"},breakpoint_md:{value:"1.75rem",type:"fontSizes",description:"28px"},breakpoint_lg:{value:"2.25rem",type:"fontSizes",description:"36px"}},900:{breakpoint_sm:{value:"1.75rem",type:"fontSizes",description:"28px"},breakpoint_md:{value:"2.25rem",type:"fontSizes",description:"36px"},breakpoint_lg:{value:"2.75rem",type:"fontSizes",description:"44px"}},heading:{h1:{breakpoint_sm:{value:"1.75rem",type:"fontSizes"},breakpoint_md:{value:"2.25rem",type:"fontSizes"},breakpoint_lg:{value:"2.75rem",type:"fontSizes"}},h2:{breakpoint_sm:{value:"1.5rem",type:"fontSizes"},breakpoint_md:{value:"1.75rem",type:"fontSizes"},breakpoint_lg:{value:"2.25rem",type:"fontSizes"}},h3:{breakpoint_sm:{value:"1.25rem",type:"fontSizes"},breakpoint_md:{value:"1.5rem",type:"fontSizes"},breakpoint_lg:{value:"1.75rem",type:"fontSizes"}},h4:{breakpoint_sm:{value:"1.125rem",type:"fontSizes"},breakpoint_md:{value:"1.25rem",type:"fontSizes"},breakpoint_lg:{value:"1.5rem",type:"fontSizes"}},h5:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"},breakpoint_lg:{value:"1.25rem",type:"fontSizes"}}},"component-size":{xs:{value:"0.875rem",type:"fontSizes",description:"14px"},sm:{value:"1rem",type:"fontSizes",description:"16px"},md:{value:"1.125rem",type:"fontSizes",description:"18px"},lg:{value:"1.5rem",type:"fontSizes",description:"24px"}},body:{medium:{value:"1rem",type:"fontSizes",description:"Body text should never be smaller than 16px"},large:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},label:{small:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},detail:{default:{value:"0.875rem",type:"fontSizes"}},ingress:{small:{breakpoint_sm:{value:"1.125rem",type:"fontSizes",description:"18px (Ingress should never be smaller than 18px, to keep a visual difference from the body text that is 16px.)"},breakpoint_md:{value:"1.25rem",type:"fontSizes",description:"20px"}},medium:{breakpoint_sm:{value:"1.25rem",type:"fontSizes",description:"20px"},breakpoint_md:{value:"1.5rem",type:"fontSizes",description:"24px"}}}},vO={default:{value:"Altinn-DIN",type:"fontFamilies"},heading:{value:"Altinn-DIN",type:"fontFamilies"},ingress:{value:"Altinn-DIN",type:"fontFamilies"},body:{value:"Altinn-DIN",type:"fontFamilies"},label:{value:"Altinn-DIN",type:"fontFamilies"}},gO={xs:{value:"0px",type:"sizing",description:"Specific styling for the smallest mobile sizes and up. Will affect screen sizes with the set size and larger."},sm:{value:"540px",type:"sizing",description:"Specific styling for the largest mobile sizes and up. Will affect screen sizes with the set size and larger."},md:{value:"768px",type:"sizing",description:"Specific styling for tablet and up. Will affect screen sizes with the set size and larger."},lg:{value:"960px",type:"sizing",description:"Specific styling for the largest tablets and up. Will affect screen sizes with the set size and larger.Will affect screen sizes with this size and larger"},xl:{value:"1200px",type:"sizing",description:"Specific styling for laptops and up. Will affect screen sizes with the set size and larger."},xxl:{value:"1600px",type:"sizing",description:"Specific styling for desktops and up. Will affect screen sizes with the set size and larger."}},yO={default:{fontFamily:{value:"Altinn-DIN",type:"fontFamily"},fontWeight:{value:"Regular",type:"fontWeight"},lineHeight:{value:1.5,type:"lineHeight"},fontSize:{value:"1rem",type:"fontSize"},letterSpacing:{value:"0.3px",type:"letterSpacing"},paragraphSpacing:{value:0,type:"paragraphSpacing"},textDecoration:{value:"none",type:"textDecoration"},textCase:{value:"none",type:"textCase"}}},bO={base:{value:.75,type:"sizing"},x2:{value:1.5,type:"sizing"},x3:{value:2.25,type:"sizing"},x4:{value:3,type:"sizing"},x5:{value:3.75,type:"sizing"},x6:{value:4.5,type:"sizing"},x7:{value:5.25,type:"sizing"},x8:{value:6,type:"sizing"},x10:{value:7.5,type:"sizing"},x16:{value:12,type:"sizing"}},xO={disabled:{value:"30%",type:"opacity"}},wO={grey:{100:{value:"#f4f5f6",type:"color",description:`AAA 13.1 on grey 800
AA 6.5 as bkdg for interaction blue`},200:{value:"#e9eaec",type:"color",description:`AAA 11.9 on grey 800
AA 5.9 as bkdg for interaction blue`},300:{value:"#d2d5d8",type:"color",description:`AAA 11.9 on grey 800
AA 5.9 as bkdg for interaction blue`},400:{value:"#bcbfc5",type:"color",description:`AAA 8.7 on grey 800
AA18 4.4 as bkdg for interaction blue`},500:{value:"#a5aab1",type:"color",description:`AA 6.1 on grey 800
AA18 3 as bkdg for interaction blue`},600:{value:"#68707c",type:"color",description:`AA18 3.5 on grey 800
AA18 4 on white`},700:{value:"#4b5563",type:"color",description:"AAA 7.5 on white"},800:{value:"#1e2b3c",type:"color",description:`Main Text Color
AAA 14.3 on white`},900:{value:"#141e29",type:"color",description:"AAA 16.8 on white"}},white:{value:"#ffffff",type:"color",description:`Standard bckd color.
AAA 13.1 on grey 800
AAA 7.2 as bkdg for interaction blue`},black:{value:"#000000",type:"color"},red:{100:{value:"#f9d5db",type:"color"},200:{value:"#f3abb6",type:"color"},300:{value:"#ec8292",type:"color"},400:{value:"#e6586d",type:"color"},500:{value:"#e02e49",type:"color"},600:{value:"#b3253a",type:"color"},700:{value:"#861c2c",type:"color"},800:{value:"#5a121d",type:"color"},900:{value:"#480e17",type:"color"}},orange:{100:{value:"#ffe8cd",type:"color"},200:{value:"#ffd19b",type:"color"},300:{value:"#ffba6a",type:"color"},400:{value:"#ffa338",type:"color"},500:{value:"#ff8c06",type:"color"},600:{value:"#cc7005",type:"color"},700:{value:"#995404",type:"color"},800:{value:"#663802",type:"color"},900:{value:"#522d02",type:"color"}},yellow:{100:{value:"#fffbe6",type:"color"},200:{value:"#fff4b4",type:"color"},300:{value:"#ffed83",type:"color"},400:{value:"#ffe551",type:"color"},500:{value:"#ffda06",type:"color"},600:{value:"#e6c405",type:"color"},700:{value:"#ccae05",type:"color"},800:{value:"#998304",type:"color"},900:{value:"#665702",type:"color"}},green:{100:{value:"#e8faf0",type:"color"},200:{value:"#d1f4e1",type:"color"},300:{value:"#8be4b5",type:"color"},400:{value:"#5dd997",type:"color"},500:{value:"#2ece7a",type:"color"},600:{value:"#15b560",type:"color"},700:{value:"#118849",type:"color"},800:{value:"#0c6536",type:"color"},900:{value:"#084826",type:"color"}},blue:{100:{value:"#e6eff8",type:"color"},200:{value:"#b3d0ea",type:"color"},300:{value:"#80b1dd",type:"color"},400:{value:"#66a1d6",type:"color"},500:{value:"#3381c8",type:"color"},600:{value:"#1a72c1",type:"color"},700:{value:"#0062ba",type:"color"},800:{value:"#004e95",type:"color"},900:{value:"#00315d",type:"color"}},purple:{100:{value:"#f5e8f2",type:"color"},200:{value:"#e0b9d8",type:"color"},300:{value:"#cc8bbf",type:"color"},400:{value:"#b75da5",type:"color"},500:{value:"#a22e8b",type:"color"},600:{value:"#98177e",type:"color"},700:{value:"#7a1265",type:"color"},800:{value:"#5b0e4c",type:"color"},900:{value:"#490b3d",type:"color"}}},kO={background:{default:{value:"#ffffff",type:"color"},subtle:{value:"#f4f5f6",type:"color"}},surface:{neutral:{default:{value:"#ffffff",type:"color"},subtle:{value:"#f4f5f6",type:"color"},"subtle-hover":{value:"#e9eaec",type:"color"},selected:{value:"#e6eff8",type:"color"},inverted:{value:"#1e2b3c",type:"color"}},action:{subtle:{value:"#e6eff8",type:"color"},default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"},active:{value:"#00315d",type:"color",description:"Standard farge for handlinger"}},success:{subtle:{value:"#d1f4e1",type:"color"},default:{value:"#118849",type:"color"},hover:{value:"#0c6536",type:"color"},active:{value:"#084826",type:"color"}},warning:{subtle:{value:"#fffbe6",type:"color"}},danger:{subtle:{value:"#f9d5db",type:"color"},default:{value:"#e02e49",type:"color"},hover:{value:"#b3253a",type:"color"},active:{value:"#861c2c",type:"color"}},info:{subtle:{value:"#e6eff8",type:"color"}}},border:{info:{default:{value:"#004e95",type:"color"}},action:{subtle:{value:"#e6eff8",type:"color"},default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"},active:{value:"#00315d",type:"color"}},neutral:{default:{value:"#68707c",type:"color"},subtle:{value:"#d2d5d8",type:"color"},strong:{value:"#1e2b3c",type:"color"},divider:{value:"#bcbfc5",type:"color"}},success:{default:{value:"#0c6536",type:"color"}},warning:{default:{value:"#cc7005",type:"color"}},danger:{default:{value:"#b3253a",type:"color"}}},tab_focus:{outline:{color:{value:"#98177e",type:"color"},offset:{value:"2px",type:"spacing"},width:{value:"2px",type:"borderWidth"}}},text:{success:{default:{value:"#0c6536",type:"color"},on_success:{value:"#ffffff",type:"color"}},neutral:{default:{value:"#1e2b3c",type:"color"},subtle:{value:"#68707c",type:"color"},on_inverted:{value:"#ffffff",type:"color"}},action:{default:{value:"#0062ba",type:"color"},on_action:{value:"#ffffff",type:"color"}},warning:{default:{value:"#995404",type:"color"},on_warning:{value:"#663802",type:"color"},icon_warning:{value:"#cc7005",type:"color"}},danger:{default:{value:"#b3253a",type:"color"},on_danger:{value:"#ffffff",type:"color"}},visited:{default:{value:"#7a1265",type:"color"}}}},SO={default:{first:{100:{value:"#feefef",type:"color",description:`AAA 12.8 on grey 800
AA 6.4 as bkdg for interaction blue`},200:{value:"#fddfe0",type:"color",description:`Light error color
AAA 11.4 on grey 800
AA 5.7 as bkdg for interaction blue`},300:{value:"#fbbfc1",type:"color",description:`AAA 9 on grey 800
AA 4.5 as bkdg for interaction blue`},400:{value:"#f89fa1",type:"color",description:`AAA 7.1 on grey 800
AA18 3.5 as bkdg for interaction blue`},500:{value:"#f67f82",type:"color",description:"AA 5.6 on grey 800"},600:{value:"#f45f63",type:"color",description:"AA 4.5 on grey 800"},700:{value:"#dc5659",type:"color",description:"AA18 3.7 on grey 800"},800:{value:"#c34c4f",type:"color",description:"AA 4.7 on white"}},second:{100:{value:"#fcf7e9",type:"color",description:`AAA 13.3 on grey 800
AA 6.7 as bkdg for interaction blue`},200:{value:"#faeec2",type:"color",description:`Light warning color
AAA 12.3 on grey 800
AA 1.1 as bkdg for interaction blue`},300:{value:"#f5dda6",type:"color",description:`AAA 10 on grey 800
AA 5.4 as bkdg for interaction blue`},400:{value:"#efcc79",type:"color",description:`AAA 9.2 on grey 800
AA 4.6 as bkdg for interaction blue`},500:{value:"#eabb4d",type:"color",description:`AAA 7.9 on grey 800
AA18 4 as bkdg for interaction blue`},600:{value:"#e5aa20",type:"color",description:`AA 6.8 on grey 800
AA18 3.4 as bkdg for interaction blue`},700:{value:"#ce991d",type:"color",description:"AA 5.5 on grey 800"},800:{value:"#b7881a",type:"color",description:`AA18 4.4 on grey 800
AA18 3.2 on white`}},third:{100:{value:"#e9f5ff",type:"color",description:`AAA 12.9 on grey 800
AA 6.5 as bkdg for interaction blue`},200:{value:"#d2eafd",type:"color",description:`Light information color 
AAA 11.5 on grey 800
AA 5.8 as bkdg for interaction blue`},300:{value:"#a5d6fb",type:"color",description:`AAA 9.2 on grey 800
AA 4.6 as bkdg for interaction blue`},400:{value:"#78c1f9",type:"color",description:`AAA 7.3 on grey 800
AA18 3.7 as bkdg for interaction blue`},500:{value:"#4badf7",type:"color",description:"AA 5.8 on grey 800"},600:{value:"#1e98f5",type:"color",description:"AA 4.6 on grey 800"},700:{value:"#1b88dd",type:"color",description:"AA18 3.8 on grey 800"},800:{value:"#156aac",type:"color",description:"AA 5.6 on white"}}}},PO={tokenSetOrder:lO,Felles:uO,Altinn:cO,component:dO,border_width:fO,space:hO,interactive_components:pO,paragraph_space:mO,font_size:_O,font_family:vO,breakpoints:gO,typography:yO,size:bO,opacity:xO,colors:wO,semantic:kO,brand:SO};var ch={},CO={get exports(){return ch},set exports(e){ch=e}};/* @preserve
 * Leaflet 1.9.3, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2022 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(e,t){(function(n,r){r(t)})(di,function(n){var r="1.9.3";function i(o){var s,c,h,v;for(c=1,h=arguments.length;c<h;c++){v=arguments[c];for(s in v)o[s]=v[s]}return o}var a=Object.create||function(){function o(){}return function(s){return o.prototype=s,new o}}();function l(o,s){var c=Array.prototype.slice;if(o.bind)return o.bind.apply(o,c.call(arguments,1));var h=c.call(arguments,2);return function(){return o.apply(s,h.length?h.concat(c.call(arguments)):arguments)}}var u=0;function d(o){return"_leaflet_id"in o||(o._leaflet_id=++u),o._leaflet_id}function f(o,s,c){var h,v,k,E;return E=function(){h=!1,v&&(k.apply(c,v),v=!1)},k=function(){h?v=arguments:(o.apply(c,arguments),setTimeout(E,s),h=!0)},k}function m(o,s,c){var h=s[1],v=s[0],k=h-v;return o===h&&c?o:((o-v)%k+k)%k+v}function _(){return!1}function p(o,s){if(s===!1)return o;var c=Math.pow(10,s===void 0?6:s);return Math.round(o*c)/c}function g(o){return o.trim?o.trim():o.replace(/^\s+|\s+$/g,"")}function x(o){return g(o).split(/\s+/)}function w(o,s){Object.prototype.hasOwnProperty.call(o,"options")||(o.options=o.options?a(o.options):{});for(var c in s)o.options[c]=s[c];return o.options}function C(o,s,c){var h=[];for(var v in o)h.push(encodeURIComponent(c?v.toUpperCase():v)+"="+encodeURIComponent(o[v]));return(!s||s.indexOf("?")===-1?"?":"&")+h.join("&")}var y=/\{ *([\w_ -]+) *\}/g;function b(o,s){return o.replace(y,function(c,h){var v=s[h];if(v===void 0)throw new Error("No value provided for variable "+c);return typeof v=="function"&&(v=v(s)),v})}var S=Array.isArray||function(o){return Object.prototype.toString.call(o)==="[object Array]"};function P(o,s){for(var c=0;c<o.length;c++)if(o[c]===s)return c;return-1}var z="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function I(o){return window["webkit"+o]||window["moz"+o]||window["ms"+o]}var D=0;function j(o){var s=+new Date,c=Math.max(0,16-(s-D));return D=s+c,window.setTimeout(o,c)}var V=window.requestAnimationFrame||I("RequestAnimationFrame")||j,U=window.cancelAnimationFrame||I("CancelAnimationFrame")||I("CancelRequestAnimationFrame")||function(o){window.clearTimeout(o)};function R(o,s,c){if(c&&V===j)o.call(s);else return V.call(window,l(o,s))}function Y(o){o&&U.call(window,o)}var _e={__proto__:null,extend:i,create:a,bind:l,get lastId(){return u},stamp:d,throttle:f,wrapNum:m,falseFn:_,formatNum:p,trim:g,splitWords:x,setOptions:w,getParamString:C,template:b,isArray:S,indexOf:P,emptyImageUrl:z,requestFn:V,cancelFn:U,requestAnimFrame:R,cancelAnimFrame:Y};function re(){}re.extend=function(o){var s=function(){w(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},c=s.__super__=this.prototype,h=a(c);h.constructor=s,s.prototype=h;for(var v in this)Object.prototype.hasOwnProperty.call(this,v)&&v!=="prototype"&&v!=="__super__"&&(s[v]=this[v]);return o.statics&&i(s,o.statics),o.includes&&(fe(o.includes),i.apply(null,[h].concat(o.includes))),i(h,o),delete h.statics,delete h.includes,h.options&&(h.options=c.options?a(c.options):{},i(h.options,o.options)),h._initHooks=[],h.callInitHooks=function(){if(!this._initHooksCalled){c.callInitHooks&&c.callInitHooks.call(this),this._initHooksCalled=!0;for(var k=0,E=h._initHooks.length;k<E;k++)h._initHooks[k].call(this)}},s},re.include=function(o){var s=this.prototype.options;return i(this.prototype,o),o.options&&(this.prototype.options=s,this.mergeOptions(o.options)),this},re.mergeOptions=function(o){return i(this.prototype.options,o),this},re.addInitHook=function(o){var s=Array.prototype.slice.call(arguments,1),c=typeof o=="function"?o:function(){this[o].apply(this,s)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(c),this};function fe(o){if(!(typeof L>"u"||!L||!L.Mixin)){o=S(o)?o:[o];for(var s=0;s<o.length;s++)o[s]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var ee={on:function(o,s,c){if(typeof o=="object")for(var h in o)this._on(h,o[h],s);else{o=x(o);for(var v=0,k=o.length;v<k;v++)this._on(o[v],s,c)}return this},off:function(o,s,c){if(!arguments.length)delete this._events;else if(typeof o=="object")for(var h in o)this._off(h,o[h],s);else{o=x(o);for(var v=arguments.length===1,k=0,E=o.length;k<E;k++)v?this._off(o[k]):this._off(o[k],s,c)}return this},_on:function(o,s,c,h){if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}if(this._listens(o,s,c)===!1){c===this&&(c=void 0);var v={fn:s,ctx:c};h&&(v.once=!0),this._events=this._events||{},this._events[o]=this._events[o]||[],this._events[o].push(v)}},_off:function(o,s,c){var h,v,k;if(this._events&&(h=this._events[o],!!h)){if(arguments.length===1){if(this._firingCount)for(v=0,k=h.length;v<k;v++)h[v].fn=_;delete this._events[o];return}if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}var E=this._listens(o,s,c);if(E!==!1){var N=h[E];this._firingCount&&(N.fn=_,this._events[o]=h=h.slice()),h.splice(E,1)}}},fire:function(o,s,c){if(!this.listens(o,c))return this;var h=i({},s,{type:o,target:this,sourceTarget:s&&s.sourceTarget||this});if(this._events){var v=this._events[o];if(v){this._firingCount=this._firingCount+1||1;for(var k=0,E=v.length;k<E;k++){var N=v[k],F=N.fn;N.once&&this.off(o,F,N.ctx),F.call(N.ctx||this,h)}this._firingCount--}}return c&&this._propagateEvent(h),this},listens:function(o,s,c,h){typeof o!="string"&&console.warn('"string" type argument expected');var v=s;typeof s!="function"&&(h=!!s,v=void 0,c=void 0);var k=this._events&&this._events[o];if(k&&k.length&&this._listens(o,v,c)!==!1)return!0;if(h){for(var E in this._eventParents)if(this._eventParents[E].listens(o,s,c,h))return!0}return!1},_listens:function(o,s,c){if(!this._events)return!1;var h=this._events[o]||[];if(!s)return!!h.length;c===this&&(c=void 0);for(var v=0,k=h.length;v<k;v++)if(h[v].fn===s&&h[v].ctx===c)return v;return!1},once:function(o,s,c){if(typeof o=="object")for(var h in o)this._on(h,o[h],s,!0);else{o=x(o);for(var v=0,k=o.length;v<k;v++)this._on(o[v],s,c,!0)}return this},addEventParent:function(o){return this._eventParents=this._eventParents||{},this._eventParents[d(o)]=o,this},removeEventParent:function(o){return this._eventParents&&delete this._eventParents[d(o)],this},_propagateEvent:function(o){for(var s in this._eventParents)this._eventParents[s].fire(o.type,i({layer:o.target,propagatedFrom:o.target},o),!0)}};ee.addEventListener=ee.on,ee.removeEventListener=ee.clearAllEventListeners=ee.off,ee.addOneTimeEventListener=ee.once,ee.fireEvent=ee.fire,ee.hasEventListeners=ee.listens;var ue=re.extend(ee);function M(o,s,c){this.x=c?Math.round(o):o,this.y=c?Math.round(s):s}var oe=Math.trunc||function(o){return o>0?Math.floor(o):Math.ceil(o)};M.prototype={clone:function(){return new M(this.x,this.y)},add:function(o){return this.clone()._add(K(o))},_add:function(o){return this.x+=o.x,this.y+=o.y,this},subtract:function(o){return this.clone()._subtract(K(o))},_subtract:function(o){return this.x-=o.x,this.y-=o.y,this},divideBy:function(o){return this.clone()._divideBy(o)},_divideBy:function(o){return this.x/=o,this.y/=o,this},multiplyBy:function(o){return this.clone()._multiplyBy(o)},_multiplyBy:function(o){return this.x*=o,this.y*=o,this},scaleBy:function(o){return new M(this.x*o.x,this.y*o.y)},unscaleBy:function(o){return new M(this.x/o.x,this.y/o.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=oe(this.x),this.y=oe(this.y),this},distanceTo:function(o){o=K(o);var s=o.x-this.x,c=o.y-this.y;return Math.sqrt(s*s+c*c)},equals:function(o){return o=K(o),o.x===this.x&&o.y===this.y},contains:function(o){return o=K(o),Math.abs(o.x)<=Math.abs(this.x)&&Math.abs(o.y)<=Math.abs(this.y)},toString:function(){return"Point("+p(this.x)+", "+p(this.y)+")"}};function K(o,s,c){return o instanceof M?o:S(o)?new M(o[0],o[1]):o==null?o:typeof o=="object"&&"x"in o&&"y"in o?new M(o.x,o.y):new M(o,s,c)}function O(o,s){if(o)for(var c=s?[o,s]:o,h=0,v=c.length;h<v;h++)this.extend(c[h])}O.prototype={extend:function(o){var s,c;if(!o)return this;if(o instanceof M||typeof o[0]=="number"||"x"in o)s=c=K(o);else if(o=B(o),s=o.min,c=o.max,!s||!c)return this;return!this.min&&!this.max?(this.min=s.clone(),this.max=c.clone()):(this.min.x=Math.min(s.x,this.min.x),this.max.x=Math.max(c.x,this.max.x),this.min.y=Math.min(s.y,this.min.y),this.max.y=Math.max(c.y,this.max.y)),this},getCenter:function(o){return K((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,o)},getBottomLeft:function(){return K(this.min.x,this.max.y)},getTopRight:function(){return K(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(o){var s,c;return typeof o[0]=="number"||o instanceof M?o=K(o):o=B(o),o instanceof O?(s=o.min,c=o.max):s=c=o,s.x>=this.min.x&&c.x<=this.max.x&&s.y>=this.min.y&&c.y<=this.max.y},intersects:function(o){o=B(o);var s=this.min,c=this.max,h=o.min,v=o.max,k=v.x>=s.x&&h.x<=c.x,E=v.y>=s.y&&h.y<=c.y;return k&&E},overlaps:function(o){o=B(o);var s=this.min,c=this.max,h=o.min,v=o.max,k=v.x>s.x&&h.x<c.x,E=v.y>s.y&&h.y<c.y;return k&&E},isValid:function(){return!!(this.min&&this.max)},pad:function(o){var s=this.min,c=this.max,h=Math.abs(s.x-c.x)*o,v=Math.abs(s.y-c.y)*o;return B(K(s.x-h,s.y-v),K(c.x+h,c.y+v))},equals:function(o){return o?(o=B(o),this.min.equals(o.getTopLeft())&&this.max.equals(o.getBottomRight())):!1}};function B(o,s){return!o||o instanceof O?o:new O(o,s)}function A(o,s){if(o)for(var c=s?[o,s]:o,h=0,v=c.length;h<v;h++)this.extend(c[h])}A.prototype={extend:function(o){var s=this._southWest,c=this._northEast,h,v;if(o instanceof te)h=o,v=o;else if(o instanceof A){if(h=o._southWest,v=o._northEast,!h||!v)return this}else return o?this.extend($(o)||Q(o)):this;return!s&&!c?(this._southWest=new te(h.lat,h.lng),this._northEast=new te(v.lat,v.lng)):(s.lat=Math.min(h.lat,s.lat),s.lng=Math.min(h.lng,s.lng),c.lat=Math.max(v.lat,c.lat),c.lng=Math.max(v.lng,c.lng)),this},pad:function(o){var s=this._southWest,c=this._northEast,h=Math.abs(s.lat-c.lat)*o,v=Math.abs(s.lng-c.lng)*o;return new A(new te(s.lat-h,s.lng-v),new te(c.lat+h,c.lng+v))},getCenter:function(){return new te((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new te(this.getNorth(),this.getWest())},getSouthEast:function(){return new te(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(o){typeof o[0]=="number"||o instanceof te||"lat"in o?o=$(o):o=Q(o);var s=this._southWest,c=this._northEast,h,v;return o instanceof A?(h=o.getSouthWest(),v=o.getNorthEast()):h=v=o,h.lat>=s.lat&&v.lat<=c.lat&&h.lng>=s.lng&&v.lng<=c.lng},intersects:function(o){o=Q(o);var s=this._southWest,c=this._northEast,h=o.getSouthWest(),v=o.getNorthEast(),k=v.lat>=s.lat&&h.lat<=c.lat,E=v.lng>=s.lng&&h.lng<=c.lng;return k&&E},overlaps:function(o){o=Q(o);var s=this._southWest,c=this._northEast,h=o.getSouthWest(),v=o.getNorthEast(),k=v.lat>s.lat&&h.lat<c.lat,E=v.lng>s.lng&&h.lng<c.lng;return k&&E},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(o,s){return o?(o=Q(o),this._southWest.equals(o.getSouthWest(),s)&&this._northEast.equals(o.getNorthEast(),s)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function Q(o,s){return o instanceof A?o:new A(o,s)}function te(o,s,c){if(isNaN(o)||isNaN(s))throw new Error("Invalid LatLng object: ("+o+", "+s+")");this.lat=+o,this.lng=+s,c!==void 0&&(this.alt=+c)}te.prototype={equals:function(o,s){if(!o)return!1;o=$(o);var c=Math.max(Math.abs(this.lat-o.lat),Math.abs(this.lng-o.lng));return c<=(s===void 0?1e-9:s)},toString:function(o){return"LatLng("+p(this.lat,o)+", "+p(this.lng,o)+")"},distanceTo:function(o){return se.distance(this,$(o))},wrap:function(){return se.wrapLatLng(this)},toBounds:function(o){var s=180*o/40075017,c=s/Math.cos(Math.PI/180*this.lat);return Q([this.lat-s,this.lng-c],[this.lat+s,this.lng+c])},clone:function(){return new te(this.lat,this.lng,this.alt)}};function $(o,s,c){return o instanceof te?o:S(o)&&typeof o[0]!="object"?o.length===3?new te(o[0],o[1],o[2]):o.length===2?new te(o[0],o[1]):null:o==null?o:typeof o=="object"&&"lat"in o?new te(o.lat,"lng"in o?o.lng:o.lon,o.alt):s===void 0?null:new te(o,s,c)}var ne={latLngToPoint:function(o,s){var c=this.projection.project(o),h=this.scale(s);return this.transformation._transform(c,h)},pointToLatLng:function(o,s){var c=this.scale(s),h=this.transformation.untransform(o,c);return this.projection.unproject(h)},project:function(o){return this.projection.project(o)},unproject:function(o){return this.projection.unproject(o)},scale:function(o){return 256*Math.pow(2,o)},zoom:function(o){return Math.log(o/256)/Math.LN2},getProjectedBounds:function(o){if(this.infinite)return null;var s=this.projection.bounds,c=this.scale(o),h=this.transformation.transform(s.min,c),v=this.transformation.transform(s.max,c);return new O(h,v)},infinite:!1,wrapLatLng:function(o){var s=this.wrapLng?m(o.lng,this.wrapLng,!0):o.lng,c=this.wrapLat?m(o.lat,this.wrapLat,!0):o.lat,h=o.alt;return new te(c,s,h)},wrapLatLngBounds:function(o){var s=o.getCenter(),c=this.wrapLatLng(s),h=s.lat-c.lat,v=s.lng-c.lng;if(h===0&&v===0)return o;var k=o.getSouthWest(),E=o.getNorthEast(),N=new te(k.lat-h,k.lng-v),F=new te(E.lat-h,E.lng-v);return new A(N,F)}},se=i({},ne,{wrapLng:[-180,180],R:6371e3,distance:function(o,s){var c=Math.PI/180,h=o.lat*c,v=s.lat*c,k=Math.sin((s.lat-o.lat)*c/2),E=Math.sin((s.lng-o.lng)*c/2),N=k*k+Math.cos(h)*Math.cos(v)*E*E,F=2*Math.atan2(Math.sqrt(N),Math.sqrt(1-N));return this.R*F}}),Ue=6378137,We={R:Ue,MAX_LATITUDE:85.0511287798,project:function(o){var s=Math.PI/180,c=this.MAX_LATITUDE,h=Math.max(Math.min(c,o.lat),-c),v=Math.sin(h*s);return new M(this.R*o.lng*s,this.R*Math.log((1+v)/(1-v))/2)},unproject:function(o){var s=180/Math.PI;return new te((2*Math.atan(Math.exp(o.y/this.R))-Math.PI/2)*s,o.x*s/this.R)},bounds:function(){var o=Ue*Math.PI;return new O([-o,-o],[o,o])}()};function Re(o,s,c,h){if(S(o)){this._a=o[0],this._b=o[1],this._c=o[2],this._d=o[3];return}this._a=o,this._b=s,this._c=c,this._d=h}Re.prototype={transform:function(o,s){return this._transform(o.clone(),s)},_transform:function(o,s){return s=s||1,o.x=s*(this._a*o.x+this._b),o.y=s*(this._c*o.y+this._d),o},untransform:function(o,s){return s=s||1,new M((o.x/s-this._b)/this._a,(o.y/s-this._d)/this._c)}};function Ee(o,s,c,h){return new Re(o,s,c,h)}var qe=i({},se,{code:"EPSG:3857",projection:We,transformation:function(){var o=.5/(Math.PI*We.R);return Ee(o,.5,-o,.5)}()}),Te=i({},qe,{code:"EPSG:900913"});function Kt(o){return document.createElementNS("http://www.w3.org/2000/svg",o)}function Ut(o,s){var c="",h,v,k,E,N,F;for(h=0,k=o.length;h<k;h++){for(N=o[h],v=0,E=N.length;v<E;v++)F=N[v],c+=(v?"L":"M")+F.x+" "+F.y;c+=s?he.svg?"z":"x":""}return c||"M0 0"}var Ne=document.documentElement.style,Ct="ActiveXObject"in window,Bn=Ct&&!document.addEventListener,$t="msLaunchUri"in navigator&&!("documentMode"in document),Jn=In("webkit"),Nt=In("android"),Sr=In("android 2")||In("android 3"),W=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),H=Nt&&In("Google")&&W<537&&!("AudioNode"in window),G=!!window.opera,le=!$t&&In("chrome"),ie=In("gecko")&&!Jn&&!G&&!Ct,ve=!le&&In("safari"),pe=In("phantom"),ye="OTransition"in Ne,me=navigator.platform.indexOf("Win")===0,it=Ct&&"transition"in Ne,xe="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Sr,je="MozPerspective"in Ne,Bt=!window.L_DISABLE_3D&&(it||xe||je)&&!ye&&!pe,yt=typeof orientation<"u"||In("mobile"),ho=yt&&Jn,Qo=yt&&xe,po=!window.PointerEvent&&window.MSPointerEvent,Yn=!!(window.PointerEvent||po),Go="ontouchstart"in window||!!window.TouchEvent,pt=!window.L_NO_TOUCH&&(Go||Yn),rn=yt&&G,er=yt&&ie,Xo=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,ea=function(){var o=!1;try{var s=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("testPassiveEventSupport",_,s),window.removeEventListener("testPassiveEventSupport",_,s)}catch{}return o}(),Ac=function(){return!!document.createElement("canvas").getContext}(),ta=!!(document.createElementNS&&Kt("svg").createSVGRect),_n=!!ta&&function(){var o=document.createElement("div");return o.innerHTML="<svg/>",(o.firstChild&&o.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),na=!ta&&function(){try{var o=document.createElement("div");o.innerHTML='<v:shape adj="1"/>';var s=o.firstChild;return s.style.behavior="url(#default#VML)",s&&typeof s.adj=="object"}catch{return!1}}(),As=navigator.platform.indexOf("Mac")===0,Nc=navigator.platform.indexOf("Linux")===0;function In(o){return navigator.userAgent.toLowerCase().indexOf(o)>=0}var he={ie:Ct,ielt9:Bn,edge:$t,webkit:Jn,android:Nt,android23:Sr,androidStock:H,opera:G,chrome:le,gecko:ie,safari:ve,phantom:pe,opera12:ye,win:me,ie3d:it,webkit3d:xe,gecko3d:je,any3d:Bt,mobile:yt,mobileWebkit:ho,mobileWebkit3d:Qo,msPointer:po,pointer:Yn,touch:pt,touchNative:Go,mobileOpera:rn,mobileGecko:er,retina:Xo,passiveEvents:ea,canvas:Ac,svg:ta,vml:na,inlineSvg:_n,mac:As,linux:Nc},pm=he.msPointer?"MSPointerDown":"pointerdown",mm=he.msPointer?"MSPointerMove":"pointermove",_m=he.msPointer?"MSPointerUp":"pointerup",vm=he.msPointer?"MSPointerCancel":"pointercancel",Bc={touchstart:pm,touchmove:mm,touchend:_m,touchcancel:vm},gm={touchstart:qx,touchmove:Ns,touchend:Ns,touchcancel:Ns},Jo={},ym=!1;function $x(o,s,c){return s==="touchstart"&&Vx(),gm[s]?(c=gm[s].bind(this,c),o.addEventListener(Bc[s],c,!1),c):(console.warn("wrong event specified:",s),_)}function Zx(o,s,c){if(!Bc[s]){console.warn("wrong event specified:",s);return}o.removeEventListener(Bc[s],c,!1)}function Wx(o){Jo[o.pointerId]=o}function Hx(o){Jo[o.pointerId]&&(Jo[o.pointerId]=o)}function bm(o){delete Jo[o.pointerId]}function Vx(){ym||(document.addEventListener(pm,Wx,!0),document.addEventListener(mm,Hx,!0),document.addEventListener(_m,bm,!0),document.addEventListener(vm,bm,!0),ym=!0)}function Ns(o,s){if(s.pointerType!==(s.MSPOINTER_TYPE_MOUSE||"mouse")){s.touches=[];for(var c in Jo)s.touches.push(Jo[c]);s.changedTouches=[s],o(s)}}function qx(o,s){s.MSPOINTER_TYPE_TOUCH&&s.pointerType===s.MSPOINTER_TYPE_TOUCH&&bt(s),Ns(o,s)}function Kx(o){var s={},c,h;for(h in o)c=o[h],s[h]=c&&c.bind?c.bind(o):c;return o=s,s.type="dblclick",s.detail=2,s.isTrusted=!1,s._simulated=!0,s}var Qx=200;function Gx(o,s){o.addEventListener("dblclick",s);var c=0,h;function v(k){if(k.detail!==1){h=k.detail;return}if(!(k.pointerType==="mouse"||k.sourceCapabilities&&!k.sourceCapabilities.firesTouchEvents)){var E=Pm(k);if(!(E.some(function(F){return F instanceof HTMLLabelElement&&F.attributes.for})&&!E.some(function(F){return F instanceof HTMLInputElement||F instanceof HTMLSelectElement}))){var N=Date.now();N-c<=Qx?(h++,h===2&&s(Kx(k))):h=1,c=N}}}return o.addEventListener("click",v),{dblclick:s,simDblclick:v}}function Xx(o,s){o.removeEventListener("dblclick",s.dblclick),o.removeEventListener("click",s.simDblclick)}var Ic=Ms(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ra=Ms(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),xm=ra==="webkitTransition"||ra==="OTransition"?ra+"End":"transitionend";function wm(o){return typeof o=="string"?document.getElementById(o):o}function oa(o,s){var c=o.style[s]||o.currentStyle&&o.currentStyle[s];if((!c||c==="auto")&&document.defaultView){var h=document.defaultView.getComputedStyle(o,null);c=h?h[s]:null}return c==="auto"?null:c}function Ae(o,s,c){var h=document.createElement(o);return h.className=s||"",c&&c.appendChild(h),h}function Ge(o){var s=o.parentNode;s&&s.removeChild(o)}function Bs(o){for(;o.firstChild;)o.removeChild(o.firstChild)}function Yo(o){var s=o.parentNode;s&&s.lastChild!==o&&s.appendChild(o)}function ei(o){var s=o.parentNode;s&&s.firstChild!==o&&s.insertBefore(o,s.firstChild)}function Mc(o,s){if(o.classList!==void 0)return o.classList.contains(s);var c=Is(o);return c.length>0&&new RegExp("(^|\\s)"+s+"(\\s|$)").test(c)}function we(o,s){if(o.classList!==void 0)for(var c=x(s),h=0,v=c.length;h<v;h++)o.classList.add(c[h]);else if(!Mc(o,s)){var k=Is(o);Dc(o,(k?k+" ":"")+s)}}function rt(o,s){o.classList!==void 0?o.classList.remove(s):Dc(o,g((" "+Is(o)+" ").replace(" "+s+" "," ")))}function Dc(o,s){o.className.baseVal===void 0?o.className=s:o.className.baseVal=s}function Is(o){return o.correspondingElement&&(o=o.correspondingElement),o.className.baseVal===void 0?o.className:o.className.baseVal}function on(o,s){"opacity"in o.style?o.style.opacity=s:"filter"in o.style&&Jx(o,s)}function Jx(o,s){var c=!1,h="DXImageTransform.Microsoft.Alpha";try{c=o.filters.item(h)}catch{if(s===1)return}s=Math.round(s*100),c?(c.Enabled=s!==100,c.Opacity=s):o.style.filter+=" progid:"+h+"(opacity="+s+")"}function Ms(o){for(var s=document.documentElement.style,c=0;c<o.length;c++)if(o[c]in s)return o[c];return!1}function mo(o,s,c){var h=s||new M(0,0);o.style[Ic]=(he.ie3d?"translate("+h.x+"px,"+h.y+"px)":"translate3d("+h.x+"px,"+h.y+"px,0)")+(c?" scale("+c+")":"")}function at(o,s){o._leaflet_pos=s,he.any3d?mo(o,s):(o.style.left=s.x+"px",o.style.top=s.y+"px")}function _o(o){return o._leaflet_pos||new M(0,0)}var ia,aa,Fc;if("onselectstart"in document)ia=function(){be(window,"selectstart",bt)},aa=function(){$e(window,"selectstart",bt)};else{var sa=Ms(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);ia=function(){if(sa){var o=document.documentElement.style;Fc=o[sa],o[sa]="none"}},aa=function(){sa&&(document.documentElement.style[sa]=Fc,Fc=void 0)}}function jc(){be(window,"dragstart",bt)}function Uc(){$e(window,"dragstart",bt)}var Ds,$c;function Zc(o){for(;o.tabIndex===-1;)o=o.parentNode;o.style&&(Fs(),Ds=o,$c=o.style.outline,o.style.outline="none",be(window,"keydown",Fs))}function Fs(){Ds&&(Ds.style.outline=$c,Ds=void 0,$c=void 0,$e(window,"keydown",Fs))}function km(o){do o=o.parentNode;while((!o.offsetWidth||!o.offsetHeight)&&o!==document.body);return o}function Wc(o){var s=o.getBoundingClientRect();return{x:s.width/o.offsetWidth||1,y:s.height/o.offsetHeight||1,boundingClientRect:s}}var Yx={__proto__:null,TRANSFORM:Ic,TRANSITION:ra,TRANSITION_END:xm,get:wm,getStyle:oa,create:Ae,remove:Ge,empty:Bs,toFront:Yo,toBack:ei,hasClass:Mc,addClass:we,removeClass:rt,setClass:Dc,getClass:Is,setOpacity:on,testProp:Ms,setTransform:mo,setPosition:at,getPosition:_o,get disableTextSelection(){return ia},get enableTextSelection(){return aa},disableImageDrag:jc,enableImageDrag:Uc,preventOutline:Zc,restoreOutline:Fs,getSizedParentNode:km,getScale:Wc};function be(o,s,c,h){if(s&&typeof s=="object")for(var v in s)Vc(o,v,s[v],c);else{s=x(s);for(var k=0,E=s.length;k<E;k++)Vc(o,s[k],c,h)}return this}var Mn="_leaflet_events";function $e(o,s,c,h){if(arguments.length===1)Sm(o),delete o[Mn];else if(s&&typeof s=="object")for(var v in s)qc(o,v,s[v],c);else if(s=x(s),arguments.length===2)Sm(o,function(N){return P(s,N)!==-1});else for(var k=0,E=s.length;k<E;k++)qc(o,s[k],c,h);return this}function Sm(o,s){for(var c in o[Mn]){var h=c.split(/\d/)[0];(!s||s(h))&&qc(o,h,null,null,c)}}var Hc={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Vc(o,s,c,h){var v=s+d(c)+(h?"_"+d(h):"");if(o[Mn]&&o[Mn][v])return this;var k=function(N){return c.call(h||o,N||window.event)},E=k;!he.touchNative&&he.pointer&&s.indexOf("touch")===0?k=$x(o,s,k):he.touch&&s==="dblclick"?k=Gx(o,k):"addEventListener"in o?s==="touchstart"||s==="touchmove"||s==="wheel"||s==="mousewheel"?o.addEventListener(Hc[s]||s,k,he.passiveEvents?{passive:!1}:!1):s==="mouseenter"||s==="mouseleave"?(k=function(N){N=N||window.event,Qc(o,N)&&E(N)},o.addEventListener(Hc[s],k,!1)):o.addEventListener(s,E,!1):o.attachEvent("on"+s,k),o[Mn]=o[Mn]||{},o[Mn][v]=k}function qc(o,s,c,h,v){v=v||s+d(c)+(h?"_"+d(h):"");var k=o[Mn]&&o[Mn][v];if(!k)return this;!he.touchNative&&he.pointer&&s.indexOf("touch")===0?Zx(o,s,k):he.touch&&s==="dblclick"?Xx(o,k):"removeEventListener"in o?o.removeEventListener(Hc[s]||s,k,!1):o.detachEvent("on"+s,k),o[Mn][v]=null}function vo(o){return o.stopPropagation?o.stopPropagation():o.originalEvent?o.originalEvent._stopped=!0:o.cancelBubble=!0,this}function Kc(o){return Vc(o,"wheel",vo),this}function la(o){return be(o,"mousedown touchstart dblclick contextmenu",vo),o._leaflet_disable_click=!0,this}function bt(o){return o.preventDefault?o.preventDefault():o.returnValue=!1,this}function go(o){return bt(o),vo(o),this}function Pm(o){if(o.composedPath)return o.composedPath();for(var s=[],c=o.target;c;)s.push(c),c=c.parentNode;return s}function Cm(o,s){if(!s)return new M(o.clientX,o.clientY);var c=Wc(s),h=c.boundingClientRect;return new M((o.clientX-h.left)/c.x-s.clientLeft,(o.clientY-h.top)/c.y-s.clientTop)}var ew=he.linux&&he.chrome?window.devicePixelRatio:he.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Em(o){return he.edge?o.wheelDeltaY/2:o.deltaY&&o.deltaMode===0?-o.deltaY/ew:o.deltaY&&o.deltaMode===1?-o.deltaY*20:o.deltaY&&o.deltaMode===2?-o.deltaY*60:o.deltaX||o.deltaZ?0:o.wheelDelta?(o.wheelDeltaY||o.wheelDelta)/2:o.detail&&Math.abs(o.detail)<32765?-o.detail*20:o.detail?o.detail/-32765*60:0}function Qc(o,s){var c=s.relatedTarget;if(!c)return!0;try{for(;c&&c!==o;)c=c.parentNode}catch{return!1}return c!==o}var tw={__proto__:null,on:be,off:$e,stopPropagation:vo,disableScrollPropagation:Kc,disableClickPropagation:la,preventDefault:bt,stop:go,getPropagationPath:Pm,getMousePosition:Cm,getWheelDelta:Em,isExternalTarget:Qc,addListener:be,removeListener:$e},Om=ue.extend({run:function(o,s,c,h){this.stop(),this._el=o,this._inProgress=!0,this._duration=c||.25,this._easeOutPower=1/Math.max(h||.5,.2),this._startPos=_o(o),this._offset=s.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=R(this._animate,this),this._step()},_step:function(o){var s=+new Date-this._startTime,c=this._duration*1e3;s<c?this._runFrame(this._easeOut(s/c),o):(this._runFrame(1),this._complete())},_runFrame:function(o,s){var c=this._startPos.add(this._offset.multiplyBy(o));s&&c._round(),at(this._el,c),this.fire("step")},_complete:function(){Y(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(o){return 1-Math.pow(1-o,this._easeOutPower)}}),Oe=ue.extend({options:{crs:qe,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(o,s){s=w(this,s),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(o),this._initLayout(),this._onResize=l(this._onResize,this),this._initEvents(),s.maxBounds&&this.setMaxBounds(s.maxBounds),s.zoom!==void 0&&(this._zoom=this._limitZoom(s.zoom)),s.center&&s.zoom!==void 0&&this.setView($(s.center),s.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=ra&&he.any3d&&!he.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),be(this._proxy,xm,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(o,s,c){if(s=s===void 0?this._zoom:this._limitZoom(s),o=this._limitCenter($(o),s,this.options.maxBounds),c=c||{},this._stop(),this._loaded&&!c.reset&&c!==!0){c.animate!==void 0&&(c.zoom=i({animate:c.animate},c.zoom),c.pan=i({animate:c.animate,duration:c.duration},c.pan));var h=this._zoom!==s?this._tryAnimatedZoom&&this._tryAnimatedZoom(o,s,c.zoom):this._tryAnimatedPan(o,c.pan);if(h)return clearTimeout(this._sizeTimer),this}return this._resetView(o,s,c.pan&&c.pan.noMoveStart),this},setZoom:function(o,s){return this._loaded?this.setView(this.getCenter(),o,{zoom:s}):(this._zoom=o,this)},zoomIn:function(o,s){return o=o||(he.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+o,s)},zoomOut:function(o,s){return o=o||(he.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-o,s)},setZoomAround:function(o,s,c){var h=this.getZoomScale(s),v=this.getSize().divideBy(2),k=o instanceof M?o:this.latLngToContainerPoint(o),E=k.subtract(v).multiplyBy(1-1/h),N=this.containerPointToLatLng(v.add(E));return this.setView(N,s,{zoom:c})},_getBoundsCenterZoom:function(o,s){s=s||{},o=o.getBounds?o.getBounds():Q(o);var c=K(s.paddingTopLeft||s.padding||[0,0]),h=K(s.paddingBottomRight||s.padding||[0,0]),v=this.getBoundsZoom(o,!1,c.add(h));if(v=typeof s.maxZoom=="number"?Math.min(s.maxZoom,v):v,v===1/0)return{center:o.getCenter(),zoom:v};var k=h.subtract(c).divideBy(2),E=this.project(o.getSouthWest(),v),N=this.project(o.getNorthEast(),v),F=this.unproject(E.add(N).divideBy(2).add(k),v);return{center:F,zoom:v}},fitBounds:function(o,s){if(o=Q(o),!o.isValid())throw new Error("Bounds are not valid.");var c=this._getBoundsCenterZoom(o,s);return this.setView(c.center,c.zoom,s)},fitWorld:function(o){return this.fitBounds([[-90,-180],[90,180]],o)},panTo:function(o,s){return this.setView(o,this._zoom,{pan:s})},panBy:function(o,s){if(o=K(o).round(),s=s||{},!o.x&&!o.y)return this.fire("moveend");if(s.animate!==!0&&!this.getSize().contains(o))return this._resetView(this.unproject(this.project(this.getCenter()).add(o)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Om,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),s.noMoveStart||this.fire("movestart"),s.animate!==!1){we(this._mapPane,"leaflet-pan-anim");var c=this._getMapPanePos().subtract(o).round();this._panAnim.run(this._mapPane,c,s.duration||.25,s.easeLinearity)}else this._rawPanBy(o),this.fire("move").fire("moveend");return this},flyTo:function(o,s,c){if(c=c||{},c.animate===!1||!he.any3d)return this.setView(o,s,c);this._stop();var h=this.project(this.getCenter()),v=this.project(o),k=this.getSize(),E=this._zoom;o=$(o),s=s===void 0?E:s;var N=Math.max(k.x,k.y),F=N*this.getZoomScale(E,s),X=v.distanceTo(h)||1,ae=1.42,ge=ae*ae;function Se(st){var Js=st?-1:1,Zw=st?F:N,Ww=F*F-N*N+Js*ge*ge*X*X,Hw=2*Zw*ge*X,ad=Ww/Hw,l_=Math.sqrt(ad*ad+1)-ad,Vw=l_<1e-9?-18:Math.log(l_);return Vw}function sn(st){return(Math.exp(st)-Math.exp(-st))/2}function bo(st){return(Math.exp(st)+Math.exp(-st))/2}function Xs(st){return sn(st)/bo(st)}var Er=Se(0);function id(st){return N*(bo(Er)/bo(Er+ae*st))}function Fw(st){return N*(bo(Er)*Xs(Er+ae*st)-sn(Er))/ge}function jw(st){return 1-Math.pow(1-st,1.5)}var Uw=Date.now(),a_=(Se(1)-Er)/ae,$w=c.duration?1e3*c.duration:1e3*a_*.8;function s_(){var st=(Date.now()-Uw)/$w,Js=jw(st)*a_;st<=1?(this._flyToFrame=R(s_,this),this._move(this.unproject(h.add(v.subtract(h).multiplyBy(Fw(Js)/X)),E),this.getScaleZoom(N/id(Js),E),{flyTo:!0})):this._move(o,s)._moveEnd(!0)}return this._moveStart(!0,c.noMoveStart),s_.call(this),this},flyToBounds:function(o,s){var c=this._getBoundsCenterZoom(o,s);return this.flyTo(c.center,c.zoom,s)},setMaxBounds:function(o){return o=Q(o),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),o.isValid()?(this.options.maxBounds=o,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(o){var s=this.options.minZoom;return this.options.minZoom=o,this._loaded&&s!==o&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(o):this},setMaxZoom:function(o){var s=this.options.maxZoom;return this.options.maxZoom=o,this._loaded&&s!==o&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(o):this},panInsideBounds:function(o,s){this._enforcingBounds=!0;var c=this.getCenter(),h=this._limitCenter(c,this._zoom,Q(o));return c.equals(h)||this.panTo(h,s),this._enforcingBounds=!1,this},panInside:function(o,s){s=s||{};var c=K(s.paddingTopLeft||s.padding||[0,0]),h=K(s.paddingBottomRight||s.padding||[0,0]),v=this.project(this.getCenter()),k=this.project(o),E=this.getPixelBounds(),N=B([E.min.add(c),E.max.subtract(h)]),F=N.getSize();if(!N.contains(k)){this._enforcingBounds=!0;var X=k.subtract(N.getCenter()),ae=N.extend(k).getSize().subtract(F);v.x+=X.x<0?-ae.x:ae.x,v.y+=X.y<0?-ae.y:ae.y,this.panTo(this.unproject(v),s),this._enforcingBounds=!1}return this},invalidateSize:function(o){if(!this._loaded)return this;o=i({animate:!1,pan:!0},o===!0?{animate:!0}:o);var s=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var c=this.getSize(),h=s.divideBy(2).round(),v=c.divideBy(2).round(),k=h.subtract(v);return!k.x&&!k.y?this:(o.animate&&o.pan?this.panBy(k):(o.pan&&this._rawPanBy(k),this.fire("move"),o.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(l(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:s,newSize:c}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(o){if(o=this._locateOptions=i({timeout:1e4,watch:!1},o),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var s=l(this._handleGeolocationResponse,this),c=l(this._handleGeolocationError,this);return o.watch?this._locationWatchId=navigator.geolocation.watchPosition(s,c,o):navigator.geolocation.getCurrentPosition(s,c,o),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(o){if(this._container._leaflet_id){var s=o.code,c=o.message||(s===1?"permission denied":s===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:s,message:"Geolocation error: "+c+"."})}},_handleGeolocationResponse:function(o){if(this._container._leaflet_id){var s=o.coords.latitude,c=o.coords.longitude,h=new te(s,c),v=h.toBounds(o.coords.accuracy*2),k=this._locateOptions;if(k.setView){var E=this.getBoundsZoom(v);this.setView(h,k.maxZoom?Math.min(E,k.maxZoom):E)}var N={latlng:h,bounds:v,timestamp:o.timestamp};for(var F in o.coords)typeof o.coords[F]=="number"&&(N[F]=o.coords[F]);this.fire("locationfound",N)}},addHandler:function(o,s){if(!s)return this;var c=this[o]=new s(this);return this._handlers.push(c),this.options[o]&&c.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Ge(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(Y(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var o;for(o in this._layers)this._layers[o].remove();for(o in this._panes)Ge(this._panes[o]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(o,s){var c="leaflet-pane"+(o?" leaflet-"+o.replace("Pane","")+"-pane":""),h=Ae("div",c,s||this._mapPane);return o&&(this._panes[o]=h),h},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var o=this.getPixelBounds(),s=this.unproject(o.getBottomLeft()),c=this.unproject(o.getTopRight());return new A(s,c)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(o,s,c){o=Q(o),c=K(c||[0,0]);var h=this.getZoom()||0,v=this.getMinZoom(),k=this.getMaxZoom(),E=o.getNorthWest(),N=o.getSouthEast(),F=this.getSize().subtract(c),X=B(this.project(N,h),this.project(E,h)).getSize(),ae=he.any3d?this.options.zoomSnap:1,ge=F.x/X.x,Se=F.y/X.y,sn=s?Math.max(ge,Se):Math.min(ge,Se);return h=this.getScaleZoom(sn,h),ae&&(h=Math.round(h/(ae/100))*(ae/100),h=s?Math.ceil(h/ae)*ae:Math.floor(h/ae)*ae),Math.max(v,Math.min(k,h))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new M(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(o,s){var c=this._getTopLeftPoint(o,s);return new O(c,c.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(o){return this.options.crs.getProjectedBounds(o===void 0?this.getZoom():o)},getPane:function(o){return typeof o=="string"?this._panes[o]:o},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(o,s){var c=this.options.crs;return s=s===void 0?this._zoom:s,c.scale(o)/c.scale(s)},getScaleZoom:function(o,s){var c=this.options.crs;s=s===void 0?this._zoom:s;var h=c.zoom(o*c.scale(s));return isNaN(h)?1/0:h},project:function(o,s){return s=s===void 0?this._zoom:s,this.options.crs.latLngToPoint($(o),s)},unproject:function(o,s){return s=s===void 0?this._zoom:s,this.options.crs.pointToLatLng(K(o),s)},layerPointToLatLng:function(o){var s=K(o).add(this.getPixelOrigin());return this.unproject(s)},latLngToLayerPoint:function(o){var s=this.project($(o))._round();return s._subtract(this.getPixelOrigin())},wrapLatLng:function(o){return this.options.crs.wrapLatLng($(o))},wrapLatLngBounds:function(o){return this.options.crs.wrapLatLngBounds(Q(o))},distance:function(o,s){return this.options.crs.distance($(o),$(s))},containerPointToLayerPoint:function(o){return K(o).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(o){return K(o).add(this._getMapPanePos())},containerPointToLatLng:function(o){var s=this.containerPointToLayerPoint(K(o));return this.layerPointToLatLng(s)},latLngToContainerPoint:function(o){return this.layerPointToContainerPoint(this.latLngToLayerPoint($(o)))},mouseEventToContainerPoint:function(o){return Cm(o,this._container)},mouseEventToLayerPoint:function(o){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(o))},mouseEventToLatLng:function(o){return this.layerPointToLatLng(this.mouseEventToLayerPoint(o))},_initContainer:function(o){var s=this._container=wm(o);if(s){if(s._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");be(s,"scroll",this._onScroll,this),this._containerId=d(s)},_initLayout:function(){var o=this._container;this._fadeAnimated=this.options.fadeAnimation&&he.any3d,we(o,"leaflet-container"+(he.touch?" leaflet-touch":"")+(he.retina?" leaflet-retina":"")+(he.ielt9?" leaflet-oldie":"")+(he.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var s=oa(o,"position");s!=="absolute"&&s!=="relative"&&s!=="fixed"&&s!=="sticky"&&(o.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var o=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),at(this._mapPane,new M(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(we(o.markerPane,"leaflet-zoom-hide"),we(o.shadowPane,"leaflet-zoom-hide"))},_resetView:function(o,s,c){at(this._mapPane,new M(0,0));var h=!this._loaded;this._loaded=!0,s=this._limitZoom(s),this.fire("viewprereset");var v=this._zoom!==s;this._moveStart(v,c)._move(o,s)._moveEnd(v),this.fire("viewreset"),h&&this.fire("load")},_moveStart:function(o,s){return o&&this.fire("zoomstart"),s||this.fire("movestart"),this},_move:function(o,s,c,h){s===void 0&&(s=this._zoom);var v=this._zoom!==s;return this._zoom=s,this._lastCenter=o,this._pixelOrigin=this._getNewPixelOrigin(o),h?c&&c.pinch&&this.fire("zoom",c):((v||c&&c.pinch)&&this.fire("zoom",c),this.fire("move",c)),this},_moveEnd:function(o){return o&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return Y(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(o){at(this._mapPane,this._getMapPanePos().subtract(o))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(o){this._targets={},this._targets[d(this._container)]=this;var s=o?$e:be;s(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&s(window,"resize",this._onResize,this),he.any3d&&this.options.transform3DLimit&&(o?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){Y(this._resizeRequest),this._resizeRequest=R(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var o=this._getMapPanePos();Math.max(Math.abs(o.x),Math.abs(o.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(o,s){for(var c=[],h,v=s==="mouseout"||s==="mouseover",k=o.target||o.srcElement,E=!1;k;){if(h=this._targets[d(k)],h&&(s==="click"||s==="preclick")&&this._draggableMoved(h)){E=!0;break}if(h&&h.listens(s,!0)&&(v&&!Qc(k,o)||(c.push(h),v))||k===this._container)break;k=k.parentNode}return!c.length&&!E&&!v&&this.listens(s,!0)&&(c=[this]),c},_isClickDisabled:function(o){for(;o&&o!==this._container;){if(o._leaflet_disable_click)return!0;o=o.parentNode}},_handleDOMEvent:function(o){var s=o.target||o.srcElement;if(!(!this._loaded||s._leaflet_disable_events||o.type==="click"&&this._isClickDisabled(s))){var c=o.type;c==="mousedown"&&Zc(s),this._fireDOMEvent(o,c)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(o,s,c){if(o.type==="click"){var h=i({},o);h.type="preclick",this._fireDOMEvent(h,h.type,c)}var v=this._findEventTargets(o,s);if(c){for(var k=[],E=0;E<c.length;E++)c[E].listens(s,!0)&&k.push(c[E]);v=k.concat(v)}if(v.length){s==="contextmenu"&&bt(o);var N=v[0],F={originalEvent:o};if(o.type!=="keypress"&&o.type!=="keydown"&&o.type!=="keyup"){var X=N.getLatLng&&(!N._radius||N._radius<=10);F.containerPoint=X?this.latLngToContainerPoint(N.getLatLng()):this.mouseEventToContainerPoint(o),F.layerPoint=this.containerPointToLayerPoint(F.containerPoint),F.latlng=X?N.getLatLng():this.layerPointToLatLng(F.layerPoint)}for(E=0;E<v.length;E++)if(v[E].fire(s,F,!0),F.originalEvent._stopped||v[E].options.bubblingMouseEvents===!1&&P(this._mouseEvents,s)!==-1)return}},_draggableMoved:function(o){return o=o.dragging&&o.dragging.enabled()?o:this,o.dragging&&o.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var o=0,s=this._handlers.length;o<s;o++)this._handlers[o].disable()},whenReady:function(o,s){return this._loaded?o.call(s||this,{target:this}):this.on("load",o,s),this},_getMapPanePos:function(){return _o(this._mapPane)||new M(0,0)},_moved:function(){var o=this._getMapPanePos();return o&&!o.equals([0,0])},_getTopLeftPoint:function(o,s){var c=o&&s!==void 0?this._getNewPixelOrigin(o,s):this.getPixelOrigin();return c.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(o,s){var c=this.getSize()._divideBy(2);return this.project(o,s)._subtract(c)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(o,s,c){var h=this._getNewPixelOrigin(c,s);return this.project(o,s)._subtract(h)},_latLngBoundsToNewLayerBounds:function(o,s,c){var h=this._getNewPixelOrigin(c,s);return B([this.project(o.getSouthWest(),s)._subtract(h),this.project(o.getNorthWest(),s)._subtract(h),this.project(o.getSouthEast(),s)._subtract(h),this.project(o.getNorthEast(),s)._subtract(h)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(o){return this.latLngToLayerPoint(o).subtract(this._getCenterLayerPoint())},_limitCenter:function(o,s,c){if(!c)return o;var h=this.project(o,s),v=this.getSize().divideBy(2),k=new O(h.subtract(v),h.add(v)),E=this._getBoundsOffset(k,c,s);return Math.abs(E.x)<=1&&Math.abs(E.y)<=1?o:this.unproject(h.add(E),s)},_limitOffset:function(o,s){if(!s)return o;var c=this.getPixelBounds(),h=new O(c.min.add(o),c.max.add(o));return o.add(this._getBoundsOffset(h,s))},_getBoundsOffset:function(o,s,c){var h=B(this.project(s.getNorthEast(),c),this.project(s.getSouthWest(),c)),v=h.min.subtract(o.min),k=h.max.subtract(o.max),E=this._rebound(v.x,-k.x),N=this._rebound(v.y,-k.y);return new M(E,N)},_rebound:function(o,s){return o+s>0?Math.round(o-s)/2:Math.max(0,Math.ceil(o))-Math.max(0,Math.floor(s))},_limitZoom:function(o){var s=this.getMinZoom(),c=this.getMaxZoom(),h=he.any3d?this.options.zoomSnap:1;return h&&(o=Math.round(o/h)*h),Math.max(s,Math.min(c,o))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){rt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(o,s){var c=this._getCenterOffset(o)._trunc();return(s&&s.animate)!==!0&&!this.getSize().contains(c)?!1:(this.panBy(c,s),!0)},_createAnimProxy:function(){var o=this._proxy=Ae("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(o),this.on("zoomanim",function(s){var c=Ic,h=this._proxy.style[c];mo(this._proxy,this.project(s.center,s.zoom),this.getZoomScale(s.zoom,1)),h===this._proxy.style[c]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Ge(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var o=this.getCenter(),s=this.getZoom();mo(this._proxy,this.project(o,s),this.getZoomScale(s,1))},_catchTransitionEnd:function(o){this._animatingZoom&&o.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(o,s,c){if(this._animatingZoom)return!0;if(c=c||{},!this._zoomAnimated||c.animate===!1||this._nothingToAnimate()||Math.abs(s-this._zoom)>this.options.zoomAnimationThreshold)return!1;var h=this.getZoomScale(s),v=this._getCenterOffset(o)._divideBy(1-1/h);return c.animate!==!0&&!this.getSize().contains(v)?!1:(R(function(){this._moveStart(!0,!1)._animateZoom(o,s,!0)},this),!0)},_animateZoom:function(o,s,c,h){this._mapPane&&(c&&(this._animatingZoom=!0,this._animateToCenter=o,this._animateToZoom=s,we(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:o,zoom:s,noUpdate:h}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(l(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&rt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function nw(o,s){return new Oe(o,s)}var vn=re.extend({options:{position:"topright"},initialize:function(o){w(this,o)},getPosition:function(){return this.options.position},setPosition:function(o){var s=this._map;return s&&s.removeControl(this),this.options.position=o,s&&s.addControl(this),this},getContainer:function(){return this._container},addTo:function(o){this.remove(),this._map=o;var s=this._container=this.onAdd(o),c=this.getPosition(),h=o._controlCorners[c];return we(s,"leaflet-control"),c.indexOf("bottom")!==-1?h.insertBefore(s,h.firstChild):h.appendChild(s),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Ge(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(o){this._map&&o&&o.screenX>0&&o.screenY>0&&this._map.getContainer().focus()}}),ua=function(o){return new vn(o)};Oe.include({addControl:function(o){return o.addTo(this),this},removeControl:function(o){return o.remove(),this},_initControlPos:function(){var o=this._controlCorners={},s="leaflet-",c=this._controlContainer=Ae("div",s+"control-container",this._container);function h(v,k){var E=s+v+" "+s+k;o[v+k]=Ae("div",E,c)}h("top","left"),h("top","right"),h("bottom","left"),h("bottom","right")},_clearControlPos:function(){for(var o in this._controlCorners)Ge(this._controlCorners[o]);Ge(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Tm=vn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(o,s,c,h){return c<h?-1:h<c?1:0}},initialize:function(o,s,c){w(this,c),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1;for(var h in o)this._addLayer(o[h],h);for(h in s)this._addLayer(s[h],h,!0)},onAdd:function(o){this._initLayout(),this._update(),this._map=o,o.on("zoomend",this._checkDisabledLayers,this);for(var s=0;s<this._layers.length;s++)this._layers[s].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(o){return vn.prototype.addTo.call(this,o),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(o,s){return this._addLayer(o,s),this._map?this._update():this},addOverlay:function(o,s){return this._addLayer(o,s,!0),this._map?this._update():this},removeLayer:function(o){o.off("add remove",this._onLayerChange,this);var s=this._getLayer(d(o));return s&&this._layers.splice(this._layers.indexOf(s),1),this._map?this._update():this},expand:function(){we(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var o=this._map.getSize().y-(this._container.offsetTop+50);return o<this._section.clientHeight?(we(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=o+"px"):rt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return rt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var o="leaflet-control-layers",s=this._container=Ae("div",o),c=this.options.collapsed;s.setAttribute("aria-haspopup",!0),la(s),Kc(s);var h=this._section=Ae("section",o+"-list");c&&(this._map.on("click",this.collapse,this),be(s,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var v=this._layersLink=Ae("a",o+"-toggle",s);v.href="#",v.title="Layers",v.setAttribute("role","button"),be(v,{keydown:function(k){k.keyCode===13&&this._expandSafely()},click:function(k){bt(k),this._expandSafely()}},this),c||this.expand(),this._baseLayersList=Ae("div",o+"-base",h),this._separator=Ae("div",o+"-separator",h),this._overlaysList=Ae("div",o+"-overlays",h),s.appendChild(h)},_getLayer:function(o){for(var s=0;s<this._layers.length;s++)if(this._layers[s]&&d(this._layers[s].layer)===o)return this._layers[s]},_addLayer:function(o,s,c){this._map&&o.on("add remove",this._onLayerChange,this),this._layers.push({layer:o,name:s,overlay:c}),this.options.sortLayers&&this._layers.sort(l(function(h,v){return this.options.sortFunction(h.layer,v.layer,h.name,v.name)},this)),this.options.autoZIndex&&o.setZIndex&&(this._lastZIndex++,o.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Bs(this._baseLayersList),Bs(this._overlaysList),this._layerControlInputs=[];var o,s,c,h,v=0;for(c=0;c<this._layers.length;c++)h=this._layers[c],this._addItem(h),s=s||h.overlay,o=o||!h.overlay,v+=h.overlay?0:1;return this.options.hideSingleBase&&(o=o&&v>1,this._baseLayersList.style.display=o?"":"none"),this._separator.style.display=s&&o?"":"none",this},_onLayerChange:function(o){this._handlingClick||this._update();var s=this._getLayer(d(o.target)),c=s.overlay?o.type==="add"?"overlayadd":"overlayremove":o.type==="add"?"baselayerchange":null;c&&this._map.fire(c,s)},_createRadioElement:function(o,s){var c='<input type="radio" class="leaflet-control-layers-selector" name="'+o+'"'+(s?' checked="checked"':"")+"/>",h=document.createElement("div");return h.innerHTML=c,h.firstChild},_addItem:function(o){var s=document.createElement("label"),c=this._map.hasLayer(o.layer),h;o.overlay?(h=document.createElement("input"),h.type="checkbox",h.className="leaflet-control-layers-selector",h.defaultChecked=c):h=this._createRadioElement("leaflet-base-layers_"+d(this),c),this._layerControlInputs.push(h),h.layerId=d(o.layer),be(h,"click",this._onInputClick,this);var v=document.createElement("span");v.innerHTML=" "+o.name;var k=document.createElement("span");s.appendChild(k),k.appendChild(h),k.appendChild(v);var E=o.overlay?this._overlaysList:this._baseLayersList;return E.appendChild(s),this._checkDisabledLayers(),s},_onInputClick:function(){var o=this._layerControlInputs,s,c,h=[],v=[];this._handlingClick=!0;for(var k=o.length-1;k>=0;k--)s=o[k],c=this._getLayer(s.layerId).layer,s.checked?h.push(c):s.checked||v.push(c);for(k=0;k<v.length;k++)this._map.hasLayer(v[k])&&this._map.removeLayer(v[k]);for(k=0;k<h.length;k++)this._map.hasLayer(h[k])||this._map.addLayer(h[k]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var o=this._layerControlInputs,s,c,h=this._map.getZoom(),v=o.length-1;v>=0;v--)s=o[v],c=this._getLayer(s.layerId).layer,s.disabled=c.options.minZoom!==void 0&&h<c.options.minZoom||c.options.maxZoom!==void 0&&h>c.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var o=this._section;be(o,"click",bt),this.expand(),setTimeout(function(){$e(o,"click",bt)})}}),rw=function(o,s,c){return new Tm(o,s,c)},Gc=vn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(o){var s="leaflet-control-zoom",c=Ae("div",s+" leaflet-bar"),h=this.options;return this._zoomInButton=this._createButton(h.zoomInText,h.zoomInTitle,s+"-in",c,this._zoomIn),this._zoomOutButton=this._createButton(h.zoomOutText,h.zoomOutTitle,s+"-out",c,this._zoomOut),this._updateDisabled(),o.on("zoomend zoomlevelschange",this._updateDisabled,this),c},onRemove:function(o){o.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(o){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(o.shiftKey?3:1))},_zoomOut:function(o){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(o.shiftKey?3:1))},_createButton:function(o,s,c,h,v){var k=Ae("a",c,h);return k.innerHTML=o,k.href="#",k.title=s,k.setAttribute("role","button"),k.setAttribute("aria-label",s),la(k),be(k,"click",go),be(k,"click",v,this),be(k,"click",this._refocusOnMap,this),k},_updateDisabled:function(){var o=this._map,s="leaflet-disabled";rt(this._zoomInButton,s),rt(this._zoomOutButton,s),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||o._zoom===o.getMinZoom())&&(we(this._zoomOutButton,s),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||o._zoom===o.getMaxZoom())&&(we(this._zoomInButton,s),this._zoomInButton.setAttribute("aria-disabled","true"))}});Oe.mergeOptions({zoomControl:!0}),Oe.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Gc,this.addControl(this.zoomControl))});var ow=function(o){return new Gc(o)},Lm=vn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(o){var s="leaflet-control-scale",c=Ae("div",s),h=this.options;return this._addScales(h,s+"-line",c),o.on(h.updateWhenIdle?"moveend":"move",this._update,this),o.whenReady(this._update,this),c},onRemove:function(o){o.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(o,s,c){o.metric&&(this._mScale=Ae("div",s,c)),o.imperial&&(this._iScale=Ae("div",s,c))},_update:function(){var o=this._map,s=o.getSize().y/2,c=o.distance(o.containerPointToLatLng([0,s]),o.containerPointToLatLng([this.options.maxWidth,s]));this._updateScales(c)},_updateScales:function(o){this.options.metric&&o&&this._updateMetric(o),this.options.imperial&&o&&this._updateImperial(o)},_updateMetric:function(o){var s=this._getRoundNum(o),c=s<1e3?s+" m":s/1e3+" km";this._updateScale(this._mScale,c,s/o)},_updateImperial:function(o){var s=o*3.2808399,c,h,v;s>5280?(c=s/5280,h=this._getRoundNum(c),this._updateScale(this._iScale,h+" mi",h/c)):(v=this._getRoundNum(s),this._updateScale(this._iScale,v+" ft",v/s))},_updateScale:function(o,s,c){o.style.width=Math.round(this.options.maxWidth*c)+"px",o.innerHTML=s},_getRoundNum:function(o){var s=Math.pow(10,(Math.floor(o)+"").length-1),c=o/s;return c=c>=10?10:c>=5?5:c>=3?3:c>=2?2:1,s*c}}),iw=function(o){return new Lm(o)},aw='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Xc=vn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(he.inlineSvg?aw+" ":"")+"Leaflet</a>"},initialize:function(o){w(this,o),this._attributions={}},onAdd:function(o){o.attributionControl=this,this._container=Ae("div","leaflet-control-attribution"),la(this._container);for(var s in o._layers)o._layers[s].getAttribution&&this.addAttribution(o._layers[s].getAttribution());return this._update(),o.on("layeradd",this._addAttribution,this),this._container},onRemove:function(o){o.off("layeradd",this._addAttribution,this)},_addAttribution:function(o){o.layer.getAttribution&&(this.addAttribution(o.layer.getAttribution()),o.layer.once("remove",function(){this.removeAttribution(o.layer.getAttribution())},this))},setPrefix:function(o){return this.options.prefix=o,this._update(),this},addAttribution:function(o){return o?(this._attributions[o]||(this._attributions[o]=0),this._attributions[o]++,this._update(),this):this},removeAttribution:function(o){return o?(this._attributions[o]&&(this._attributions[o]--,this._update()),this):this},_update:function(){if(this._map){var o=[];for(var s in this._attributions)this._attributions[s]&&o.push(s);var c=[];this.options.prefix&&c.push(this.options.prefix),o.length&&c.push(o.join(", ")),this._container.innerHTML=c.join(' <span aria-hidden="true">|</span> ')}}});Oe.mergeOptions({attributionControl:!0}),Oe.addInitHook(function(){this.options.attributionControl&&new Xc().addTo(this)});var sw=function(o){return new Xc(o)};vn.Layers=Tm,vn.Zoom=Gc,vn.Scale=Lm,vn.Attribution=Xc,ua.layers=rw,ua.zoom=ow,ua.scale=iw,ua.attribution=sw;var Dn=re.extend({initialize:function(o){this._map=o},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Dn.addTo=function(o,s){return o.addHandler(s,this),this};var lw={Events:ee},zm=he.touch?"touchstart mousedown":"mousedown",Pr=ue.extend({options:{clickTolerance:3},initialize:function(o,s,c,h){w(this,h),this._element=o,this._dragStartTarget=s||o,this._preventOutline=c},enable:function(){this._enabled||(be(this._dragStartTarget,zm,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Pr._dragging===this&&this.finishDrag(!0),$e(this._dragStartTarget,zm,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(o){if(this._enabled&&(this._moved=!1,!Mc(this._element,"leaflet-zoom-anim"))){if(o.touches&&o.touches.length!==1){Pr._dragging===this&&this.finishDrag();return}if(!(Pr._dragging||o.shiftKey||o.which!==1&&o.button!==1&&!o.touches)&&(Pr._dragging=this,this._preventOutline&&Zc(this._element),jc(),ia(),!this._moving)){this.fire("down");var s=o.touches?o.touches[0]:o,c=km(this._element);this._startPoint=new M(s.clientX,s.clientY),this._startPos=_o(this._element),this._parentScale=Wc(c);var h=o.type==="mousedown";be(document,h?"mousemove":"touchmove",this._onMove,this),be(document,h?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(o){if(this._enabled){if(o.touches&&o.touches.length>1){this._moved=!0;return}var s=o.touches&&o.touches.length===1?o.touches[0]:o,c=new M(s.clientX,s.clientY)._subtract(this._startPoint);!c.x&&!c.y||Math.abs(c.x)+Math.abs(c.y)<this.options.clickTolerance||(c.x/=this._parentScale.x,c.y/=this._parentScale.y,bt(o),this._moved||(this.fire("dragstart"),this._moved=!0,we(document.body,"leaflet-dragging"),this._lastTarget=o.target||o.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),we(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(c),this._moving=!0,this._lastEvent=o,this._updatePosition())}},_updatePosition:function(){var o={originalEvent:this._lastEvent};this.fire("predrag",o),at(this._element,this._newPos),this.fire("drag",o)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(o){rt(document.body,"leaflet-dragging"),this._lastTarget&&(rt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),$e(document,"mousemove touchmove",this._onMove,this),$e(document,"mouseup touchend touchcancel",this._onUp,this),Uc(),aa(),this._moved&&this._moving&&this.fire("dragend",{noInertia:o,distance:this._newPos.distanceTo(this._startPos)}),this._moving=!1,Pr._dragging=!1}});function Rm(o,s){if(!s||!o.length)return o.slice();var c=s*s;return o=dw(o,c),o=cw(o,c),o}function Am(o,s,c){return Math.sqrt(ca(o,s,c,!0))}function uw(o,s,c){return ca(o,s,c)}function cw(o,s){var c=o.length,h=typeof Uint8Array!=void 0+""?Uint8Array:Array,v=new h(c);v[0]=v[c-1]=1,Jc(o,v,s,0,c-1);var k,E=[];for(k=0;k<c;k++)v[k]&&E.push(o[k]);return E}function Jc(o,s,c,h,v){var k=0,E,N,F;for(N=h+1;N<=v-1;N++)F=ca(o[N],o[h],o[v],!0),F>k&&(E=N,k=F);k>c&&(s[E]=1,Jc(o,s,c,h,E),Jc(o,s,c,E,v))}function dw(o,s){for(var c=[o[0]],h=1,v=0,k=o.length;h<k;h++)fw(o[h],o[v])>s&&(c.push(o[h]),v=h);return v<k-1&&c.push(o[k-1]),c}var Nm;function Bm(o,s,c,h,v){var k=h?Nm:yo(o,c),E=yo(s,c),N,F,X;for(Nm=E;;){if(!(k|E))return[o,s];if(k&E)return!1;N=k||E,F=js(o,s,N,c,v),X=yo(F,c),N===k?(o=F,k=X):(s=F,E=X)}}function js(o,s,c,h,v){var k=s.x-o.x,E=s.y-o.y,N=h.min,F=h.max,X,ae;return c&8?(X=o.x+k*(F.y-o.y)/E,ae=F.y):c&4?(X=o.x+k*(N.y-o.y)/E,ae=N.y):c&2?(X=F.x,ae=o.y+E*(F.x-o.x)/k):c&1&&(X=N.x,ae=o.y+E*(N.x-o.x)/k),new M(X,ae,v)}function yo(o,s){var c=0;return o.x<s.min.x?c|=1:o.x>s.max.x&&(c|=2),o.y<s.min.y?c|=4:o.y>s.max.y&&(c|=8),c}function fw(o,s){var c=s.x-o.x,h=s.y-o.y;return c*c+h*h}function ca(o,s,c,h){var v=s.x,k=s.y,E=c.x-v,N=c.y-k,F=E*E+N*N,X;return F>0&&(X=((o.x-v)*E+(o.y-k)*N)/F,X>1?(v=c.x,k=c.y):X>0&&(v+=E*X,k+=N*X)),E=o.x-v,N=o.y-k,h?E*E+N*N:new M(v,k)}function an(o){return!S(o[0])||typeof o[0][0]!="object"&&typeof o[0][0]<"u"}function Im(o){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),an(o)}function Mm(o,s){var c,h,v,k,E,N,F,X;if(!o||o.length===0)throw new Error("latlngs not passed");an(o)||(console.warn("latlngs are not flat! Only the first ring will be used"),o=o[0]);var ae=[];for(var ge in o)ae.push(s.project($(o[ge])));var Se=ae.length;for(c=0,h=0;c<Se-1;c++)h+=ae[c].distanceTo(ae[c+1])/2;if(h===0)X=ae[0];else for(c=0,k=0;c<Se-1;c++)if(E=ae[c],N=ae[c+1],v=E.distanceTo(N),k+=v,k>h){F=(k-h)/v,X=[N.x-F*(N.x-E.x),N.y-F*(N.y-E.y)];break}return s.unproject(K(X))}var hw={__proto__:null,simplify:Rm,pointToSegmentDistance:Am,closestPointOnSegment:uw,clipSegment:Bm,_getEdgeIntersection:js,_getBitCode:yo,_sqClosestPointOnSegment:ca,isFlat:an,_flat:Im,polylineCenter:Mm};function Dm(o,s,c){var h,v=[1,4,2,8],k,E,N,F,X,ae,ge,Se;for(k=0,ae=o.length;k<ae;k++)o[k]._code=yo(o[k],s);for(N=0;N<4;N++){for(ge=v[N],h=[],k=0,ae=o.length,E=ae-1;k<ae;E=k++)F=o[k],X=o[E],F._code&ge?X._code&ge||(Se=js(X,F,ge,s,c),Se._code=yo(Se,s),h.push(Se)):(X._code&ge&&(Se=js(X,F,ge,s,c),Se._code=yo(Se,s),h.push(Se)),h.push(F));o=h}return o}function Fm(o,s){var c,h,v,k,E,N,F,X,ae;if(!o||o.length===0)throw new Error("latlngs not passed");an(o)||(console.warn("latlngs are not flat! Only the first ring will be used"),o=o[0]);var ge=[];for(var Se in o)ge.push(s.project($(o[Se])));var sn=ge.length;for(N=F=X=0,c=0,h=sn-1;c<sn;h=c++)v=ge[c],k=ge[h],E=v.y*k.x-k.y*v.x,F+=(v.x+k.x)*E,X+=(v.y+k.y)*E,N+=E*3;return N===0?ae=ge[0]:ae=[F/N,X/N],s.unproject(K(ae))}var pw={__proto__:null,clipPolygon:Dm,polygonCenter:Fm},Yc={project:function(o){return new M(o.lng,o.lat)},unproject:function(o){return new te(o.y,o.x)},bounds:new O([-180,-90],[180,90])},ed={R:6378137,R_MINOR:6356752314245179e-9,bounds:new O([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(o){var s=Math.PI/180,c=this.R,h=o.lat*s,v=this.R_MINOR/c,k=Math.sqrt(1-v*v),E=k*Math.sin(h),N=Math.tan(Math.PI/4-h/2)/Math.pow((1-E)/(1+E),k/2);return h=-c*Math.log(Math.max(N,1e-10)),new M(o.lng*s*c,h)},unproject:function(o){for(var s=180/Math.PI,c=this.R,h=this.R_MINOR/c,v=Math.sqrt(1-h*h),k=Math.exp(-o.y/c),E=Math.PI/2-2*Math.atan(k),N=0,F=.1,X;N<15&&Math.abs(F)>1e-7;N++)X=v*Math.sin(E),X=Math.pow((1-X)/(1+X),v/2),F=Math.PI/2-2*Math.atan(k*X)-E,E+=F;return new te(E*s,o.x*s/c)}},mw={__proto__:null,LonLat:Yc,Mercator:ed,SphericalMercator:We},_w=i({},se,{code:"EPSG:3395",projection:ed,transformation:function(){var o=.5/(Math.PI*ed.R);return Ee(o,.5,-o,.5)}()}),jm=i({},se,{code:"EPSG:4326",projection:Yc,transformation:Ee(1/180,1,-1/180,.5)}),vw=i({},ne,{projection:Yc,transformation:Ee(1,0,-1,0),scale:function(o){return Math.pow(2,o)},zoom:function(o){return Math.log(o)/Math.LN2},distance:function(o,s){var c=s.lng-o.lng,h=s.lat-o.lat;return Math.sqrt(c*c+h*h)},infinite:!0});ne.Earth=se,ne.EPSG3395=_w,ne.EPSG3857=qe,ne.EPSG900913=Te,ne.EPSG4326=jm,ne.Simple=vw;var gn=ue.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(o){return o.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(o){return o&&o.removeLayer(this),this},getPane:function(o){return this._map.getPane(o?this.options[o]||o:this.options.pane)},addInteractiveTarget:function(o){return this._map._targets[d(o)]=this,this},removeInteractiveTarget:function(o){return delete this._map._targets[d(o)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(o){var s=o.target;if(s.hasLayer(this)){if(this._map=s,this._zoomAnimated=s._zoomAnimated,this.getEvents){var c=this.getEvents();s.on(c,this),this.once("remove",function(){s.off(c,this)},this)}this.onAdd(s),this.fire("add"),s.fire("layeradd",{layer:this})}}});Oe.include({addLayer:function(o){if(!o._layerAdd)throw new Error("The provided object is not a Layer.");var s=d(o);return this._layers[s]?this:(this._layers[s]=o,o._mapToAdd=this,o.beforeAdd&&o.beforeAdd(this),this.whenReady(o._layerAdd,o),this)},removeLayer:function(o){var s=d(o);return this._layers[s]?(this._loaded&&o.onRemove(this),delete this._layers[s],this._loaded&&(this.fire("layerremove",{layer:o}),o.fire("remove")),o._map=o._mapToAdd=null,this):this},hasLayer:function(o){return d(o)in this._layers},eachLayer:function(o,s){for(var c in this._layers)o.call(s,this._layers[c]);return this},_addLayers:function(o){o=o?S(o)?o:[o]:[];for(var s=0,c=o.length;s<c;s++)this.addLayer(o[s])},_addZoomLimit:function(o){(!isNaN(o.options.maxZoom)||!isNaN(o.options.minZoom))&&(this._zoomBoundLayers[d(o)]=o,this._updateZoomLevels())},_removeZoomLimit:function(o){var s=d(o);this._zoomBoundLayers[s]&&(delete this._zoomBoundLayers[s],this._updateZoomLevels())},_updateZoomLevels:function(){var o=1/0,s=-1/0,c=this._getZoomSpan();for(var h in this._zoomBoundLayers){var v=this._zoomBoundLayers[h].options;o=v.minZoom===void 0?o:Math.min(o,v.minZoom),s=v.maxZoom===void 0?s:Math.max(s,v.maxZoom)}this._layersMaxZoom=s===-1/0?void 0:s,this._layersMinZoom=o===1/0?void 0:o,c!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var ti=gn.extend({initialize:function(o,s){w(this,s),this._layers={};var c,h;if(o)for(c=0,h=o.length;c<h;c++)this.addLayer(o[c])},addLayer:function(o){var s=this.getLayerId(o);return this._layers[s]=o,this._map&&this._map.addLayer(o),this},removeLayer:function(o){var s=o in this._layers?o:this.getLayerId(o);return this._map&&this._layers[s]&&this._map.removeLayer(this._layers[s]),delete this._layers[s],this},hasLayer:function(o){var s=typeof o=="number"?o:this.getLayerId(o);return s in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(o){var s=Array.prototype.slice.call(arguments,1),c,h;for(c in this._layers)h=this._layers[c],h[o]&&h[o].apply(h,s);return this},onAdd:function(o){this.eachLayer(o.addLayer,o)},onRemove:function(o){this.eachLayer(o.removeLayer,o)},eachLayer:function(o,s){for(var c in this._layers)o.call(s,this._layers[c]);return this},getLayer:function(o){return this._layers[o]},getLayers:function(){var o=[];return this.eachLayer(o.push,o),o},setZIndex:function(o){return this.invoke("setZIndex",o)},getLayerId:function(o){return d(o)}}),gw=function(o,s){return new ti(o,s)},tr=ti.extend({addLayer:function(o){return this.hasLayer(o)?this:(o.addEventParent(this),ti.prototype.addLayer.call(this,o),this.fire("layeradd",{layer:o}))},removeLayer:function(o){return this.hasLayer(o)?(o in this._layers&&(o=this._layers[o]),o.removeEventParent(this),ti.prototype.removeLayer.call(this,o),this.fire("layerremove",{layer:o})):this},setStyle:function(o){return this.invoke("setStyle",o)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var o=new A;for(var s in this._layers){var c=this._layers[s];o.extend(c.getBounds?c.getBounds():c.getLatLng())}return o}}),yw=function(o,s){return new tr(o,s)},ni=re.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(o){w(this,o)},createIcon:function(o){return this._createIcon("icon",o)},createShadow:function(o){return this._createIcon("shadow",o)},_createIcon:function(o,s){var c=this._getIconUrl(o);if(!c){if(o==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var h=this._createImg(c,s&&s.tagName==="IMG"?s:null);return this._setIconStyles(h,o),(this.options.crossOrigin||this.options.crossOrigin==="")&&(h.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),h},_setIconStyles:function(o,s){var c=this.options,h=c[s+"Size"];typeof h=="number"&&(h=[h,h]);var v=K(h),k=K(s==="shadow"&&c.shadowAnchor||c.iconAnchor||v&&v.divideBy(2,!0));o.className="leaflet-marker-"+s+" "+(c.className||""),k&&(o.style.marginLeft=-k.x+"px",o.style.marginTop=-k.y+"px"),v&&(o.style.width=v.x+"px",o.style.height=v.y+"px")},_createImg:function(o,s){return s=s||document.createElement("img"),s.src=o,s},_getIconUrl:function(o){return he.retina&&this.options[o+"RetinaUrl"]||this.options[o+"Url"]}});function bw(o){return new ni(o)}var da=ni.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(o){return typeof da.imagePath!="string"&&(da.imagePath=this._detectIconPath()),(this.options.imagePath||da.imagePath)+ni.prototype._getIconUrl.call(this,o)},_stripUrl:function(o){var s=function(c,h,v){var k=h.exec(c);return k&&k[v]};return o=s(o,/^url\((['"])?(.+)\1\)$/,2),o&&s(o,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var o=Ae("div","leaflet-default-icon-path",document.body),s=oa(o,"background-image")||oa(o,"backgroundImage");if(document.body.removeChild(o),s=this._stripUrl(s),s)return s;var c=document.querySelector('link[href$="leaflet.css"]');return c?c.href.substring(0,c.href.length-11-1):""}}),Um=Dn.extend({initialize:function(o){this._marker=o},addHooks:function(){var o=this._marker._icon;this._draggable||(this._draggable=new Pr(o,o,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),we(o,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&rt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(o){var s=this._marker,c=s._map,h=this._marker.options.autoPanSpeed,v=this._marker.options.autoPanPadding,k=_o(s._icon),E=c.getPixelBounds(),N=c.getPixelOrigin(),F=B(E.min._subtract(N).add(v),E.max._subtract(N).subtract(v));if(!F.contains(k)){var X=K((Math.max(F.max.x,k.x)-F.max.x)/(E.max.x-F.max.x)-(Math.min(F.min.x,k.x)-F.min.x)/(E.min.x-F.min.x),(Math.max(F.max.y,k.y)-F.max.y)/(E.max.y-F.max.y)-(Math.min(F.min.y,k.y)-F.min.y)/(E.min.y-F.min.y)).multiplyBy(h);c.panBy(X,{animate:!1}),this._draggable._newPos._add(X),this._draggable._startPos._add(X),at(s._icon,this._draggable._newPos),this._onDrag(o),this._panRequest=R(this._adjustPan.bind(this,o))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(o){this._marker.options.autoPan&&(Y(this._panRequest),this._panRequest=R(this._adjustPan.bind(this,o)))},_onDrag:function(o){var s=this._marker,c=s._shadow,h=_o(s._icon),v=s._map.layerPointToLatLng(h);c&&at(c,h),s._latlng=v,o.latlng=v,o.oldLatLng=this._oldLatLng,s.fire("move",o).fire("drag",o)},_onDragEnd:function(o){Y(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",o)}}),Us=gn.extend({options:{icon:new da,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(o,s){w(this,s),this._latlng=$(o)},onAdd:function(o){this._zoomAnimated=this._zoomAnimated&&o.options.markerZoomAnimation,this._zoomAnimated&&o.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(o){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&o.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(o){var s=this._latlng;return this._latlng=$(o),this.update(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},setZIndexOffset:function(o){return this.options.zIndexOffset=o,this.update()},getIcon:function(){return this.options.icon},setIcon:function(o){return this.options.icon=o,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var o=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(o)}return this},_initIcon:function(){var o=this.options,s="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),c=o.icon.createIcon(this._icon),h=!1;c!==this._icon&&(this._icon&&this._removeIcon(),h=!0,o.title&&(c.title=o.title),c.tagName==="IMG"&&(c.alt=o.alt||"")),we(c,s),o.keyboard&&(c.tabIndex="0",c.setAttribute("role","button")),this._icon=c,o.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&be(c,"focus",this._panOnFocus,this);var v=o.icon.createShadow(this._shadow),k=!1;v!==this._shadow&&(this._removeShadow(),k=!0),v&&(we(v,s),v.alt=""),this._shadow=v,o.opacity<1&&this._updateOpacity(),h&&this.getPane().appendChild(this._icon),this._initInteraction(),v&&k&&this.getPane(o.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&$e(this._icon,"focus",this._panOnFocus,this),Ge(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Ge(this._shadow),this._shadow=null},_setPos:function(o){this._icon&&at(this._icon,o),this._shadow&&at(this._shadow,o),this._zIndex=o.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(o){this._icon&&(this._icon.style.zIndex=this._zIndex+o)},_animateZoom:function(o){var s=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center).round();this._setPos(s)},_initInteraction:function(){if(this.options.interactive&&(we(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Um)){var o=this.options.draggable;this.dragging&&(o=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Um(this),o&&this.dragging.enable()}},setOpacity:function(o){return this.options.opacity=o,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var o=this.options.opacity;this._icon&&on(this._icon,o),this._shadow&&on(this._shadow,o)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var o=this._map;if(o){var s=this.options.icon.options,c=s.iconSize?K(s.iconSize):K(0,0),h=s.iconAnchor?K(s.iconAnchor):K(0,0);o.panInside(this._latlng,{paddingTopLeft:h,paddingBottomRight:c.subtract(h)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function xw(o,s){return new Us(o,s)}var Cr=gn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(o){this._renderer=o.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(o){return w(this,o),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&o&&Object.prototype.hasOwnProperty.call(o,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),$s=Cr.extend({options:{fill:!0,radius:10},initialize:function(o,s){w(this,s),this._latlng=$(o),this._radius=this.options.radius},setLatLng:function(o){var s=this._latlng;return this._latlng=$(o),this.redraw(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(o){return this.options.radius=this._radius=o,this.redraw()},getRadius:function(){return this._radius},setStyle:function(o){var s=o&&o.radius||this._radius;return Cr.prototype.setStyle.call(this,o),this.setRadius(s),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var o=this._radius,s=this._radiusY||o,c=this._clickTolerance(),h=[o+c,s+c];this._pxBounds=new O(this._point.subtract(h),this._point.add(h))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(o){return o.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function ww(o,s){return new $s(o,s)}var td=$s.extend({initialize:function(o,s,c){if(typeof s=="number"&&(s=i({},c,{radius:s})),w(this,s),this._latlng=$(o),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(o){return this._mRadius=o,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var o=[this._radius,this._radiusY||this._radius];return new A(this._map.layerPointToLatLng(this._point.subtract(o)),this._map.layerPointToLatLng(this._point.add(o)))},setStyle:Cr.prototype.setStyle,_project:function(){var o=this._latlng.lng,s=this._latlng.lat,c=this._map,h=c.options.crs;if(h.distance===se.distance){var v=Math.PI/180,k=this._mRadius/se.R/v,E=c.project([s+k,o]),N=c.project([s-k,o]),F=E.add(N).divideBy(2),X=c.unproject(F).lat,ae=Math.acos((Math.cos(k*v)-Math.sin(s*v)*Math.sin(X*v))/(Math.cos(s*v)*Math.cos(X*v)))/v;(isNaN(ae)||ae===0)&&(ae=k/Math.cos(Math.PI/180*s)),this._point=F.subtract(c.getPixelOrigin()),this._radius=isNaN(ae)?0:F.x-c.project([X,o-ae]).x,this._radiusY=F.y-E.y}else{var ge=h.unproject(h.project(this._latlng).subtract([this._mRadius,0]));this._point=c.latLngToLayerPoint(this._latlng),this._radius=this._point.x-c.latLngToLayerPoint(ge).x}this._updateBounds()}});function kw(o,s,c){return new td(o,s,c)}var nr=Cr.extend({options:{smoothFactor:1,noClip:!1},initialize:function(o,s){w(this,s),this._setLatLngs(o)},getLatLngs:function(){return this._latlngs},setLatLngs:function(o){return this._setLatLngs(o),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(o){for(var s=1/0,c=null,h=ca,v,k,E=0,N=this._parts.length;E<N;E++)for(var F=this._parts[E],X=1,ae=F.length;X<ae;X++){v=F[X-1],k=F[X];var ge=h(o,v,k,!0);ge<s&&(s=ge,c=h(o,v,k))}return c&&(c.distance=Math.sqrt(s)),c},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Mm(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(o,s){return s=s||this._defaultShape(),o=$(o),s.push(o),this._bounds.extend(o),this.redraw()},_setLatLngs:function(o){this._bounds=new A,this._latlngs=this._convertLatLngs(o)},_defaultShape:function(){return an(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(o){for(var s=[],c=an(o),h=0,v=o.length;h<v;h++)c?(s[h]=$(o[h]),this._bounds.extend(s[h])):s[h]=this._convertLatLngs(o[h]);return s},_project:function(){var o=new O;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,o),this._bounds.isValid()&&o.isValid()&&(this._rawPxBounds=o,this._updateBounds())},_updateBounds:function(){var o=this._clickTolerance(),s=new M(o,o);this._rawPxBounds&&(this._pxBounds=new O([this._rawPxBounds.min.subtract(s),this._rawPxBounds.max.add(s)]))},_projectLatlngs:function(o,s,c){var h=o[0]instanceof te,v=o.length,k,E;if(h){for(E=[],k=0;k<v;k++)E[k]=this._map.latLngToLayerPoint(o[k]),c.extend(E[k]);s.push(E)}else for(k=0;k<v;k++)this._projectLatlngs(o[k],s,c)},_clipPoints:function(){var o=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(o))){if(this.options.noClip){this._parts=this._rings;return}var s=this._parts,c,h,v,k,E,N,F;for(c=0,v=0,k=this._rings.length;c<k;c++)for(F=this._rings[c],h=0,E=F.length;h<E-1;h++)N=Bm(F[h],F[h+1],o,h,!0),N&&(s[v]=s[v]||[],s[v].push(N[0]),(N[1]!==F[h+1]||h===E-2)&&(s[v].push(N[1]),v++))}},_simplifyPoints:function(){for(var o=this._parts,s=this.options.smoothFactor,c=0,h=o.length;c<h;c++)o[c]=Rm(o[c],s)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(o,s){var c,h,v,k,E,N,F=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(o))return!1;for(c=0,k=this._parts.length;c<k;c++)for(N=this._parts[c],h=0,E=N.length,v=E-1;h<E;v=h++)if(!(!s&&h===0)&&Am(o,N[v],N[h])<=F)return!0;return!1}});function Sw(o,s){return new nr(o,s)}nr._flat=Im;var ri=nr.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Fm(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(o){var s=nr.prototype._convertLatLngs.call(this,o),c=s.length;return c>=2&&s[0]instanceof te&&s[0].equals(s[c-1])&&s.pop(),s},_setLatLngs:function(o){nr.prototype._setLatLngs.call(this,o),an(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return an(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var o=this._renderer._bounds,s=this.options.weight,c=new M(s,s);if(o=new O(o.min.subtract(c),o.max.add(c)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(o))){if(this.options.noClip){this._parts=this._rings;return}for(var h=0,v=this._rings.length,k;h<v;h++)k=Dm(this._rings[h],o,!0),k.length&&this._parts.push(k)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(o){var s=!1,c,h,v,k,E,N,F,X;if(!this._pxBounds||!this._pxBounds.contains(o))return!1;for(k=0,F=this._parts.length;k<F;k++)for(c=this._parts[k],E=0,X=c.length,N=X-1;E<X;N=E++)h=c[E],v=c[N],h.y>o.y!=v.y>o.y&&o.x<(v.x-h.x)*(o.y-h.y)/(v.y-h.y)+h.x&&(s=!s);return s||nr.prototype._containsPoint.call(this,o,!0)}});function Pw(o,s){return new ri(o,s)}var rr=tr.extend({initialize:function(o,s){w(this,s),this._layers={},o&&this.addData(o)},addData:function(o){var s=S(o)?o:o.features,c,h,v;if(s){for(c=0,h=s.length;c<h;c++)v=s[c],(v.geometries||v.geometry||v.features||v.coordinates)&&this.addData(v);return this}var k=this.options;if(k.filter&&!k.filter(o))return this;var E=Zs(o,k);return E?(E.feature=Vs(o),E.defaultOptions=E.options,this.resetStyle(E),k.onEachFeature&&k.onEachFeature(o,E),this.addLayer(E)):this},resetStyle:function(o){return o===void 0?this.eachLayer(this.resetStyle,this):(o.options=i({},o.defaultOptions),this._setLayerStyle(o,this.options.style),this)},setStyle:function(o){return this.eachLayer(function(s){this._setLayerStyle(s,o)},this)},_setLayerStyle:function(o,s){o.setStyle&&(typeof s=="function"&&(s=s(o.feature)),o.setStyle(s))}});function Zs(o,s){var c=o.type==="Feature"?o.geometry:o,h=c?c.coordinates:null,v=[],k=s&&s.pointToLayer,E=s&&s.coordsToLatLng||nd,N,F,X,ae;if(!h&&!c)return null;switch(c.type){case"Point":return N=E(h),$m(k,o,N,s);case"MultiPoint":for(X=0,ae=h.length;X<ae;X++)N=E(h[X]),v.push($m(k,o,N,s));return new tr(v);case"LineString":case"MultiLineString":return F=Ws(h,c.type==="LineString"?0:1,E),new nr(F,s);case"Polygon":case"MultiPolygon":return F=Ws(h,c.type==="Polygon"?1:2,E),new ri(F,s);case"GeometryCollection":for(X=0,ae=c.geometries.length;X<ae;X++){var ge=Zs({geometry:c.geometries[X],type:"Feature",properties:o.properties},s);ge&&v.push(ge)}return new tr(v);case"FeatureCollection":for(X=0,ae=c.features.length;X<ae;X++){var Se=Zs(c.features[X],s);Se&&v.push(Se)}return new tr(v);default:throw new Error("Invalid GeoJSON object.")}}function $m(o,s,c,h){return o?o(s,c):new Us(c,h&&h.markersInheritOptions&&h)}function nd(o){return new te(o[1],o[0],o[2])}function Ws(o,s,c){for(var h=[],v=0,k=o.length,E;v<k;v++)E=s?Ws(o[v],s-1,c):(c||nd)(o[v]),h.push(E);return h}function rd(o,s){return o=$(o),o.alt!==void 0?[p(o.lng,s),p(o.lat,s),p(o.alt,s)]:[p(o.lng,s),p(o.lat,s)]}function Hs(o,s,c,h){for(var v=[],k=0,E=o.length;k<E;k++)v.push(s?Hs(o[k],an(o[k])?0:s-1,c,h):rd(o[k],h));return!s&&c&&v.push(v[0].slice()),v}function oi(o,s){return o.feature?i({},o.feature,{geometry:s}):Vs(s)}function Vs(o){return o.type==="Feature"||o.type==="FeatureCollection"?o:{type:"Feature",properties:{},geometry:o}}var od={toGeoJSON:function(o){return oi(this,{type:"Point",coordinates:rd(this.getLatLng(),o)})}};Us.include(od),td.include(od),$s.include(od),nr.include({toGeoJSON:function(o){var s=!an(this._latlngs),c=Hs(this._latlngs,s?1:0,!1,o);return oi(this,{type:(s?"Multi":"")+"LineString",coordinates:c})}}),ri.include({toGeoJSON:function(o){var s=!an(this._latlngs),c=s&&!an(this._latlngs[0]),h=Hs(this._latlngs,c?2:s?1:0,!0,o);return s||(h=[h]),oi(this,{type:(c?"Multi":"")+"Polygon",coordinates:h})}}),ti.include({toMultiPoint:function(o){var s=[];return this.eachLayer(function(c){s.push(c.toGeoJSON(o).geometry.coordinates)}),oi(this,{type:"MultiPoint",coordinates:s})},toGeoJSON:function(o){var s=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(s==="MultiPoint")return this.toMultiPoint(o);var c=s==="GeometryCollection",h=[];return this.eachLayer(function(v){if(v.toGeoJSON){var k=v.toGeoJSON(o);if(c)h.push(k.geometry);else{var E=Vs(k);E.type==="FeatureCollection"?h.push.apply(h,E.features):h.push(E)}}}),c?oi(this,{geometries:h,type:"GeometryCollection"}):{type:"FeatureCollection",features:h}}});function Zm(o,s){return new rr(o,s)}var Cw=Zm,qs=gn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(o,s,c){this._url=o,this._bounds=Q(s),w(this,c)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(we(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Ge(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(o){return this.options.opacity=o,this._image&&this._updateOpacity(),this},setStyle:function(o){return o.opacity&&this.setOpacity(o.opacity),this},bringToFront:function(){return this._map&&Yo(this._image),this},bringToBack:function(){return this._map&&ei(this._image),this},setUrl:function(o){return this._url=o,this._image&&(this._image.src=o),this},setBounds:function(o){return this._bounds=Q(o),this._map&&this._reset(),this},getEvents:function(){var o={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},setZIndex:function(o){return this.options.zIndex=o,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var o=this._url.tagName==="IMG",s=this._image=o?this._url:Ae("img");if(we(s,"leaflet-image-layer"),this._zoomAnimated&&we(s,"leaflet-zoom-animated"),this.options.className&&we(s,this.options.className),s.onselectstart=_,s.onmousemove=_,s.onload=l(this.fire,this,"load"),s.onerror=l(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),o){this._url=s.src;return}s.src=this._url,s.alt=this.options.alt},_animateZoom:function(o){var s=this._map.getZoomScale(o.zoom),c=this._map._latLngBoundsToNewLayerBounds(this._bounds,o.zoom,o.center).min;mo(this._image,c,s)},_reset:function(){var o=this._image,s=new O(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),c=s.getSize();at(o,s.min),o.style.width=c.x+"px",o.style.height=c.y+"px"},_updateOpacity:function(){on(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var o=this.options.errorOverlayUrl;o&&this._url!==o&&(this._url=o,this._image.src=o)},getCenter:function(){return this._bounds.getCenter()}}),Ew=function(o,s,c){return new qs(o,s,c)},Wm=qs.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var o=this._url.tagName==="VIDEO",s=this._image=o?this._url:Ae("video");if(we(s,"leaflet-image-layer"),this._zoomAnimated&&we(s,"leaflet-zoom-animated"),this.options.className&&we(s,this.options.className),s.onselectstart=_,s.onmousemove=_,s.onloadeddata=l(this.fire,this,"load"),o){for(var c=s.getElementsByTagName("source"),h=[],v=0;v<c.length;v++)h.push(c[v].src);this._url=c.length>0?h:[s.src];return}S(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(s.style,"objectFit")&&(s.style.objectFit="fill"),s.autoplay=!!this.options.autoplay,s.loop=!!this.options.loop,s.muted=!!this.options.muted,s.playsInline=!!this.options.playsInline;for(var k=0;k<this._url.length;k++){var E=Ae("source");E.src=this._url[k],s.appendChild(E)}}});function Ow(o,s,c){return new Wm(o,s,c)}var Hm=qs.extend({_initImage:function(){var o=this._image=this._url;we(o,"leaflet-image-layer"),this._zoomAnimated&&we(o,"leaflet-zoom-animated"),this.options.className&&we(o,this.options.className),o.onselectstart=_,o.onmousemove=_}});function Tw(o,s,c){return new Hm(o,s,c)}var Fn=gn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(o,s){o&&(o instanceof te||S(o))?(this._latlng=$(o),w(this,s)):(w(this,o),this._source=s),this.options.content&&(this._content=this.options.content)},openOn:function(o){return o=arguments.length?o:this._source._map,o.hasLayer(this)||o.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(o){return this._map?this.close():(arguments.length?this._source=o:o=this._source,this._prepareOpen(),this.openOn(o._map)),this},onAdd:function(o){this._zoomAnimated=o._zoomAnimated,this._container||this._initLayout(),o._fadeAnimated&&on(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),o._fadeAnimated&&on(this._container,1),this.bringToFront(),this.options.interactive&&(we(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(o){o._fadeAnimated?(on(this._container,0),this._removeTimeout=setTimeout(l(Ge,void 0,this._container),200)):Ge(this._container),this.options.interactive&&(rt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(o){return this._latlng=$(o),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(o){return this._content=o,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var o={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Yo(this._container),this},bringToBack:function(){return this._map&&ei(this._container),this},_prepareOpen:function(o){var s=this._source;if(!s._map)return!1;if(s instanceof tr){s=null;var c=this._source._layers;for(var h in c)if(c[h]._map){s=c[h];break}if(!s)return!1;this._source=s}if(!o)if(s.getCenter)o=s.getCenter();else if(s.getLatLng)o=s.getLatLng();else if(s.getBounds)o=s.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(o),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var o=this._contentNode,s=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof s=="string")o.innerHTML=s;else{for(;o.hasChildNodes();)o.removeChild(o.firstChild);o.appendChild(s)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var o=this._map.latLngToLayerPoint(this._latlng),s=K(this.options.offset),c=this._getAnchor();this._zoomAnimated?at(this._container,o.add(c)):s=s.add(o).add(c);var h=this._containerBottom=-s.y,v=this._containerLeft=-Math.round(this._containerWidth/2)+s.x;this._container.style.bottom=h+"px",this._container.style.left=v+"px"}},_getAnchor:function(){return[0,0]}});Oe.include({_initOverlay:function(o,s,c,h){var v=s;return v instanceof o||(v=new o(h).setContent(s)),c&&v.setLatLng(c),v}}),gn.include({_initOverlay:function(o,s,c,h){var v=c;return v instanceof o?(w(v,h),v._source=this):(v=s&&!h?s:new o(h,this),v.setContent(c)),v}});var Ks=Fn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(o){return o=arguments.length?o:this._source._map,!o.hasLayer(this)&&o._popup&&o._popup.options.autoClose&&o.removeLayer(o._popup),o._popup=this,Fn.prototype.openOn.call(this,o)},onAdd:function(o){Fn.prototype.onAdd.call(this,o),o.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Cr||this._source.on("preclick",vo))},onRemove:function(o){Fn.prototype.onRemove.call(this,o),o.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Cr||this._source.off("preclick",vo))},getEvents:function(){var o=Fn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(o.preclick=this.close),this.options.keepInView&&(o.moveend=this._adjustPan),o},_initLayout:function(){var o="leaflet-popup",s=this._container=Ae("div",o+" "+(this.options.className||"")+" leaflet-zoom-animated"),c=this._wrapper=Ae("div",o+"-content-wrapper",s);if(this._contentNode=Ae("div",o+"-content",c),la(s),Kc(this._contentNode),be(s,"contextmenu",vo),this._tipContainer=Ae("div",o+"-tip-container",s),this._tip=Ae("div",o+"-tip",this._tipContainer),this.options.closeButton){var h=this._closeButton=Ae("a",o+"-close-button",s);h.setAttribute("role","button"),h.setAttribute("aria-label","Close popup"),h.href="#close",h.innerHTML='<span aria-hidden="true">&#215;</span>',be(h,"click",function(v){bt(v),this.close()},this)}},_updateLayout:function(){var o=this._contentNode,s=o.style;s.width="",s.whiteSpace="nowrap";var c=o.offsetWidth;c=Math.min(c,this.options.maxWidth),c=Math.max(c,this.options.minWidth),s.width=c+1+"px",s.whiteSpace="",s.height="";var h=o.offsetHeight,v=this.options.maxHeight,k="leaflet-popup-scrolled";v&&h>v?(s.height=v+"px",we(o,k)):rt(o,k),this._containerWidth=this._container.offsetWidth},_animateZoom:function(o){var s=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center),c=this._getAnchor();at(this._container,s.add(c))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var o=this._map,s=parseInt(oa(this._container,"marginBottom"),10)||0,c=this._container.offsetHeight+s,h=this._containerWidth,v=new M(this._containerLeft,-c-this._containerBottom);v._add(_o(this._container));var k=o.layerPointToContainerPoint(v),E=K(this.options.autoPanPadding),N=K(this.options.autoPanPaddingTopLeft||E),F=K(this.options.autoPanPaddingBottomRight||E),X=o.getSize(),ae=0,ge=0;k.x+h+F.x>X.x&&(ae=k.x+h-X.x+F.x),k.x-ae-N.x<0&&(ae=k.x-N.x),k.y+c+F.y>X.y&&(ge=k.y+c-X.y+F.y),k.y-ge-N.y<0&&(ge=k.y-N.y),(ae||ge)&&(this.options.keepInView&&(this._autopanning=!0),o.fire("autopanstart").panBy([ae,ge]))}},_getAnchor:function(){return K(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Lw=function(o,s){return new Ks(o,s)};Oe.mergeOptions({closePopupOnClick:!0}),Oe.include({openPopup:function(o,s,c){return this._initOverlay(Ks,o,s,c).openOn(this),this},closePopup:function(o){return o=arguments.length?o:this._popup,o&&o.close(),this}}),gn.include({bindPopup:function(o,s){return this._popup=this._initOverlay(Ks,this._popup,o,s),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(o){return this._popup&&(this instanceof tr||(this._popup._source=this),this._popup._prepareOpen(o||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(o){return this._popup&&this._popup.setContent(o),this},getPopup:function(){return this._popup},_openPopup:function(o){if(!(!this._popup||!this._map)){go(o);var s=o.layer||o.target;if(this._popup._source===s&&!(s instanceof Cr)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(o.latlng);return}this._popup._source=s,this.openPopup(o.latlng)}},_movePopup:function(o){this._popup.setLatLng(o.latlng)},_onKeyPress:function(o){o.originalEvent.keyCode===13&&this._openPopup(o)}});var Qs=Fn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(o){Fn.prototype.onAdd.call(this,o),this.setOpacity(this.options.opacity),o.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(o){Fn.prototype.onRemove.call(this,o),o.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var o=Fn.prototype.getEvents.call(this);return this.options.permanent||(o.preclick=this.close),o},_initLayout:function(){var o="leaflet-tooltip",s=o+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Ae("div",s),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+d(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(o){var s,c,h=this._map,v=this._container,k=h.latLngToContainerPoint(h.getCenter()),E=h.layerPointToContainerPoint(o),N=this.options.direction,F=v.offsetWidth,X=v.offsetHeight,ae=K(this.options.offset),ge=this._getAnchor();N==="top"?(s=F/2,c=X):N==="bottom"?(s=F/2,c=0):N==="center"?(s=F/2,c=X/2):N==="right"?(s=0,c=X/2):N==="left"?(s=F,c=X/2):E.x<k.x?(N="right",s=0,c=X/2):(N="left",s=F+(ae.x+ge.x)*2,c=X/2),o=o.subtract(K(s,c,!0)).add(ae).add(ge),rt(v,"leaflet-tooltip-right"),rt(v,"leaflet-tooltip-left"),rt(v,"leaflet-tooltip-top"),rt(v,"leaflet-tooltip-bottom"),we(v,"leaflet-tooltip-"+N),at(v,o)},_updatePosition:function(){var o=this._map.latLngToLayerPoint(this._latlng);this._setPosition(o)},setOpacity:function(o){this.options.opacity=o,this._container&&on(this._container,o)},_animateZoom:function(o){var s=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center);this._setPosition(s)},_getAnchor:function(){return K(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),zw=function(o,s){return new Qs(o,s)};Oe.include({openTooltip:function(o,s,c){return this._initOverlay(Qs,o,s,c).openOn(this),this},closeTooltip:function(o){return o.close(),this}}),gn.include({bindTooltip:function(o,s){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Qs,this._tooltip,o,s),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(o){if(!(!o&&this._tooltipHandlersAdded)){var s=o?"off":"on",c={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?c.add=this._openTooltip:(c.mouseover=this._openTooltip,c.mouseout=this.closeTooltip,c.click=this._openTooltip,this._map?this._addFocusListeners():c.add=this._addFocusListeners),this._tooltip.options.sticky&&(c.mousemove=this._moveTooltip),this[s](c),this._tooltipHandlersAdded=!o}},openTooltip:function(o){return this._tooltip&&(this instanceof tr||(this._tooltip._source=this),this._tooltip._prepareOpen(o)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(o){return this._tooltip&&this._tooltip.setContent(o),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(o){var s=o.getElement();s&&(be(s,"focus",function(){this._tooltip._source=o,this.openTooltip()},this),be(s,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(o){var s=o.getElement();s&&s.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(o){!this._tooltip||!this._map||this._map.dragging&&this._map.dragging.moving()||(this._tooltip._source=o.layer||o.target,this.openTooltip(this._tooltip.options.sticky?o.latlng:void 0))},_moveTooltip:function(o){var s=o.latlng,c,h;this._tooltip.options.sticky&&o.originalEvent&&(c=this._map.mouseEventToContainerPoint(o.originalEvent),h=this._map.containerPointToLayerPoint(c),s=this._map.layerPointToLatLng(h)),this._tooltip.setLatLng(s)}});var Vm=ni.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(o){var s=o&&o.tagName==="DIV"?o:document.createElement("div"),c=this.options;if(c.html instanceof Element?(Bs(s),s.appendChild(c.html)):s.innerHTML=c.html!==!1?c.html:"",c.bgPos){var h=K(c.bgPos);s.style.backgroundPosition=-h.x+"px "+-h.y+"px"}return this._setIconStyles(s,"icon"),s},createShadow:function(){return null}});function Rw(o){return new Vm(o)}ni.Default=da;var fa=gn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:he.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(o){w(this,o)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(o){o._addZoomLimit(this)},onRemove:function(o){this._removeAllTiles(),Ge(this._container),o._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Yo(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(ei(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(o){return this.options.opacity=o,this._updateOpacity(),this},setZIndex:function(o){return this.options.zIndex=o,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var o=this._clampZoom(this._map.getZoom());o!==this._tileZoom&&(this._tileZoom=o,this._updateLevels()),this._update()}return this},getEvents:function(){var o={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=f(this._onMoveEnd,this.options.updateInterval,this)),o.move=this._onMove),this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},createTile:function(){return document.createElement("div")},getTileSize:function(){var o=this.options.tileSize;return o instanceof M?o:new M(o,o)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(o){for(var s=this.getPane().children,c=-o(-1/0,1/0),h=0,v=s.length,k;h<v;h++)k=s[h].style.zIndex,s[h]!==this._container&&k&&(c=o(c,+k));isFinite(c)&&(this.options.zIndex=c+o(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!he.ielt9){on(this._container,this.options.opacity);var o=+new Date,s=!1,c=!1;for(var h in this._tiles){var v=this._tiles[h];if(!(!v.current||!v.loaded)){var k=Math.min(1,(o-v.loaded)/200);on(v.el,k),k<1?s=!0:(v.active?c=!0:this._onOpaqueTile(v),v.active=!0)}}c&&!this._noPrune&&this._pruneTiles(),s&&(Y(this._fadeFrame),this._fadeFrame=R(this._updateOpacity,this))}},_onOpaqueTile:_,_initContainer:function(){this._container||(this._container=Ae("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var o=this._tileZoom,s=this.options.maxZoom;if(o!==void 0){for(var c in this._levels)c=Number(c),this._levels[c].el.children.length||c===o?(this._levels[c].el.style.zIndex=s-Math.abs(o-c),this._onUpdateLevel(c)):(Ge(this._levels[c].el),this._removeTilesAtZoom(c),this._onRemoveLevel(c),delete this._levels[c]);var h=this._levels[o],v=this._map;return h||(h=this._levels[o]={},h.el=Ae("div","leaflet-tile-container leaflet-zoom-animated",this._container),h.el.style.zIndex=s,h.origin=v.project(v.unproject(v.getPixelOrigin()),o).round(),h.zoom=o,this._setZoomTransform(h,v.getCenter(),v.getZoom()),_(h.el.offsetWidth),this._onCreateLevel(h)),this._level=h,h}},_onUpdateLevel:_,_onRemoveLevel:_,_onCreateLevel:_,_pruneTiles:function(){if(this._map){var o,s,c=this._map.getZoom();if(c>this.options.maxZoom||c<this.options.minZoom){this._removeAllTiles();return}for(o in this._tiles)s=this._tiles[o],s.retain=s.current;for(o in this._tiles)if(s=this._tiles[o],s.current&&!s.active){var h=s.coords;this._retainParent(h.x,h.y,h.z,h.z-5)||this._retainChildren(h.x,h.y,h.z,h.z+2)}for(o in this._tiles)this._tiles[o].retain||this._removeTile(o)}},_removeTilesAtZoom:function(o){for(var s in this._tiles)this._tiles[s].coords.z===o&&this._removeTile(s)},_removeAllTiles:function(){for(var o in this._tiles)this._removeTile(o)},_invalidateAll:function(){for(var o in this._levels)Ge(this._levels[o].el),this._onRemoveLevel(Number(o)),delete this._levels[o];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(o,s,c,h){var v=Math.floor(o/2),k=Math.floor(s/2),E=c-1,N=new M(+v,+k);N.z=+E;var F=this._tileCoordsToKey(N),X=this._tiles[F];return X&&X.active?(X.retain=!0,!0):(X&&X.loaded&&(X.retain=!0),E>h?this._retainParent(v,k,E,h):!1)},_retainChildren:function(o,s,c,h){for(var v=2*o;v<2*o+2;v++)for(var k=2*s;k<2*s+2;k++){var E=new M(v,k);E.z=c+1;var N=this._tileCoordsToKey(E),F=this._tiles[N];if(F&&F.active){F.retain=!0;continue}else F&&F.loaded&&(F.retain=!0);c+1<h&&this._retainChildren(v,k,c+1,h)}},_resetView:function(o){var s=o&&(o.pinch||o.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),s,s)},_animateZoom:function(o){this._setView(o.center,o.zoom,!0,o.noUpdate)},_clampZoom:function(o){var s=this.options;return s.minNativeZoom!==void 0&&o<s.minNativeZoom?s.minNativeZoom:s.maxNativeZoom!==void 0&&s.maxNativeZoom<o?s.maxNativeZoom:o},_setView:function(o,s,c,h){var v=Math.round(s);this.options.maxZoom!==void 0&&v>this.options.maxZoom||this.options.minZoom!==void 0&&v<this.options.minZoom?v=void 0:v=this._clampZoom(v);var k=this.options.updateWhenZooming&&v!==this._tileZoom;(!h||k)&&(this._tileZoom=v,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),v!==void 0&&this._update(o),c||this._pruneTiles(),this._noPrune=!!c),this._setZoomTransforms(o,s)},_setZoomTransforms:function(o,s){for(var c in this._levels)this._setZoomTransform(this._levels[c],o,s)},_setZoomTransform:function(o,s,c){var h=this._map.getZoomScale(c,o.zoom),v=o.origin.multiplyBy(h).subtract(this._map._getNewPixelOrigin(s,c)).round();he.any3d?mo(o.el,v,h):at(o.el,v)},_resetGrid:function(){var o=this._map,s=o.options.crs,c=this._tileSize=this.getTileSize(),h=this._tileZoom,v=this._map.getPixelWorldBounds(this._tileZoom);v&&(this._globalTileRange=this._pxBoundsToTileRange(v)),this._wrapX=s.wrapLng&&!this.options.noWrap&&[Math.floor(o.project([0,s.wrapLng[0]],h).x/c.x),Math.ceil(o.project([0,s.wrapLng[1]],h).x/c.y)],this._wrapY=s.wrapLat&&!this.options.noWrap&&[Math.floor(o.project([s.wrapLat[0],0],h).y/c.x),Math.ceil(o.project([s.wrapLat[1],0],h).y/c.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(o){var s=this._map,c=s._animatingZoom?Math.max(s._animateToZoom,s.getZoom()):s.getZoom(),h=s.getZoomScale(c,this._tileZoom),v=s.project(o,this._tileZoom).floor(),k=s.getSize().divideBy(h*2);return new O(v.subtract(k),v.add(k))},_update:function(o){var s=this._map;if(s){var c=this._clampZoom(s.getZoom());if(o===void 0&&(o=s.getCenter()),this._tileZoom!==void 0){var h=this._getTiledPixelBounds(o),v=this._pxBoundsToTileRange(h),k=v.getCenter(),E=[],N=this.options.keepBuffer,F=new O(v.getBottomLeft().subtract([N,-N]),v.getTopRight().add([N,-N]));if(!(isFinite(v.min.x)&&isFinite(v.min.y)&&isFinite(v.max.x)&&isFinite(v.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var X in this._tiles){var ae=this._tiles[X].coords;(ae.z!==this._tileZoom||!F.contains(new M(ae.x,ae.y)))&&(this._tiles[X].current=!1)}if(Math.abs(c-this._tileZoom)>1){this._setView(o,c);return}for(var ge=v.min.y;ge<=v.max.y;ge++)for(var Se=v.min.x;Se<=v.max.x;Se++){var sn=new M(Se,ge);if(sn.z=this._tileZoom,!!this._isValidTile(sn)){var bo=this._tiles[this._tileCoordsToKey(sn)];bo?bo.current=!0:E.push(sn)}}if(E.sort(function(Er,id){return Er.distanceTo(k)-id.distanceTo(k)}),E.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Xs=document.createDocumentFragment();for(Se=0;Se<E.length;Se++)this._addTile(E[Se],Xs);this._level.el.appendChild(Xs)}}}},_isValidTile:function(o){var s=this._map.options.crs;if(!s.infinite){var c=this._globalTileRange;if(!s.wrapLng&&(o.x<c.min.x||o.x>c.max.x)||!s.wrapLat&&(o.y<c.min.y||o.y>c.max.y))return!1}if(!this.options.bounds)return!0;var h=this._tileCoordsToBounds(o);return Q(this.options.bounds).overlaps(h)},_keyToBounds:function(o){return this._tileCoordsToBounds(this._keyToTileCoords(o))},_tileCoordsToNwSe:function(o){var s=this._map,c=this.getTileSize(),h=o.scaleBy(c),v=h.add(c),k=s.unproject(h,o.z),E=s.unproject(v,o.z);return[k,E]},_tileCoordsToBounds:function(o){var s=this._tileCoordsToNwSe(o),c=new A(s[0],s[1]);return this.options.noWrap||(c=this._map.wrapLatLngBounds(c)),c},_tileCoordsToKey:function(o){return o.x+":"+o.y+":"+o.z},_keyToTileCoords:function(o){var s=o.split(":"),c=new M(+s[0],+s[1]);return c.z=+s[2],c},_removeTile:function(o){var s=this._tiles[o];s&&(Ge(s.el),delete this._tiles[o],this.fire("tileunload",{tile:s.el,coords:this._keyToTileCoords(o)}))},_initTile:function(o){we(o,"leaflet-tile");var s=this.getTileSize();o.style.width=s.x+"px",o.style.height=s.y+"px",o.onselectstart=_,o.onmousemove=_,he.ielt9&&this.options.opacity<1&&on(o,this.options.opacity)},_addTile:function(o,s){var c=this._getTilePos(o),h=this._tileCoordsToKey(o),v=this.createTile(this._wrapCoords(o),l(this._tileReady,this,o));this._initTile(v),this.createTile.length<2&&R(l(this._tileReady,this,o,null,v)),at(v,c),this._tiles[h]={el:v,coords:o,current:!0},s.appendChild(v),this.fire("tileloadstart",{tile:v,coords:o})},_tileReady:function(o,s,c){s&&this.fire("tileerror",{error:s,tile:c,coords:o});var h=this._tileCoordsToKey(o);c=this._tiles[h],c&&(c.loaded=+new Date,this._map._fadeAnimated?(on(c.el,0),Y(this._fadeFrame),this._fadeFrame=R(this._updateOpacity,this)):(c.active=!0,this._pruneTiles()),s||(we(c.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:c.el,coords:o})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),he.ielt9||!this._map._fadeAnimated?R(this._pruneTiles,this):setTimeout(l(this._pruneTiles,this),250)))},_getTilePos:function(o){return o.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(o){var s=new M(this._wrapX?m(o.x,this._wrapX):o.x,this._wrapY?m(o.y,this._wrapY):o.y);return s.z=o.z,s},_pxBoundsToTileRange:function(o){var s=this.getTileSize();return new O(o.min.unscaleBy(s).floor(),o.max.unscaleBy(s).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var o in this._tiles)if(!this._tiles[o].loaded)return!1;return!0}});function Aw(o){return new fa(o)}var ii=fa.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(o,s){this._url=o,s=w(this,s),s.detectRetina&&he.retina&&s.maxZoom>0?(s.tileSize=Math.floor(s.tileSize/2),s.zoomReverse?(s.zoomOffset--,s.minZoom=Math.min(s.maxZoom,s.minZoom+1)):(s.zoomOffset++,s.maxZoom=Math.max(s.minZoom,s.maxZoom-1)),s.minZoom=Math.max(0,s.minZoom)):s.zoomReverse?s.minZoom=Math.min(s.maxZoom,s.minZoom):s.maxZoom=Math.max(s.minZoom,s.maxZoom),typeof s.subdomains=="string"&&(s.subdomains=s.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(o,s){return this._url===o&&s===void 0&&(s=!0),this._url=o,s||this.redraw(),this},createTile:function(o,s){var c=document.createElement("img");return be(c,"load",l(this._tileOnLoad,this,s,c)),be(c,"error",l(this._tileOnError,this,s,c)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(c.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(c.referrerPolicy=this.options.referrerPolicy),c.alt="",c.src=this.getTileUrl(o),c},getTileUrl:function(o){var s={r:he.retina?"@2x":"",s:this._getSubdomain(o),x:o.x,y:o.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var c=this._globalTileRange.max.y-o.y;this.options.tms&&(s.y=c),s["-y"]=c}return b(this._url,i(s,this.options))},_tileOnLoad:function(o,s){he.ielt9?setTimeout(l(o,this,null,s),0):o(null,s)},_tileOnError:function(o,s,c){var h=this.options.errorTileUrl;h&&s.getAttribute("src")!==h&&(s.src=h),o(c,s)},_onTileRemove:function(o){o.tile.onload=null},_getZoomForUrl:function(){var o=this._tileZoom,s=this.options.maxZoom,c=this.options.zoomReverse,h=this.options.zoomOffset;return c&&(o=s-o),o+h},_getSubdomain:function(o){var s=Math.abs(o.x+o.y)%this.options.subdomains.length;return this.options.subdomains[s]},_abortLoading:function(){var o,s;for(o in this._tiles)if(this._tiles[o].coords.z!==this._tileZoom&&(s=this._tiles[o].el,s.onload=_,s.onerror=_,!s.complete)){s.src=z;var c=this._tiles[o].coords;Ge(s),delete this._tiles[o],this.fire("tileabort",{tile:s,coords:c})}},_removeTile:function(o){var s=this._tiles[o];if(s)return s.el.setAttribute("src",z),fa.prototype._removeTile.call(this,o)},_tileReady:function(o,s,c){if(!(!this._map||c&&c.getAttribute("src")===z))return fa.prototype._tileReady.call(this,o,s,c)}});function qm(o,s){return new ii(o,s)}var Km=ii.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(o,s){this._url=o;var c=i({},this.defaultWmsParams);for(var h in s)h in this.options||(c[h]=s[h]);s=w(this,s);var v=s.detectRetina&&he.retina?2:1,k=this.getTileSize();c.width=k.x*v,c.height=k.y*v,this.wmsParams=c},onAdd:function(o){this._crs=this.options.crs||o.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var s=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[s]=this._crs.code,ii.prototype.onAdd.call(this,o)},getTileUrl:function(o){var s=this._tileCoordsToNwSe(o),c=this._crs,h=B(c.project(s[0]),c.project(s[1])),v=h.min,k=h.max,E=(this._wmsVersion>=1.3&&this._crs===jm?[v.y,v.x,k.y,k.x]:[v.x,v.y,k.x,k.y]).join(","),N=ii.prototype.getTileUrl.call(this,o);return N+C(this.wmsParams,N,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+E},setParams:function(o,s){return i(this.wmsParams,o),s||this.redraw(),this}});function Nw(o,s){return new Km(o,s)}ii.WMS=Km,qm.wms=Nw;var or=gn.extend({options:{padding:.1},initialize:function(o){w(this,o),d(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&we(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var o={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(o.zoomanim=this._onAnimZoom),o},_onAnimZoom:function(o){this._updateTransform(o.center,o.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(o,s){var c=this._map.getZoomScale(s,this._zoom),h=this._map.getSize().multiplyBy(.5+this.options.padding),v=this._map.project(this._center,s),k=h.multiplyBy(-c).add(v).subtract(this._map._getNewPixelOrigin(o,s));he.any3d?mo(this._container,k,c):at(this._container,k)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var o in this._layers)this._layers[o]._reset()},_onZoomEnd:function(){for(var o in this._layers)this._layers[o]._project()},_updatePaths:function(){for(var o in this._layers)this._layers[o]._update()},_update:function(){var o=this.options.padding,s=this._map.getSize(),c=this._map.containerPointToLayerPoint(s.multiplyBy(-o)).round();this._bounds=new O(c,c.add(s.multiplyBy(1+o*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Qm=or.extend({options:{tolerance:0},getEvents:function(){var o=or.prototype.getEvents.call(this);return o.viewprereset=this._onViewPreReset,o},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){or.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var o=this._container=document.createElement("canvas");be(o,"mousemove",this._onMouseMove,this),be(o,"click dblclick mousedown mouseup contextmenu",this._onClick,this),be(o,"mouseout",this._handleMouseOut,this),o._leaflet_disable_events=!0,this._ctx=o.getContext("2d")},_destroyContainer:function(){Y(this._redrawRequest),delete this._ctx,Ge(this._container),$e(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var o;this._redrawBounds=null;for(var s in this._layers)o=this._layers[s],o._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){or.prototype._update.call(this);var o=this._bounds,s=this._container,c=o.getSize(),h=he.retina?2:1;at(s,o.min),s.width=h*c.x,s.height=h*c.y,s.style.width=c.x+"px",s.style.height=c.y+"px",he.retina&&this._ctx.scale(2,2),this._ctx.translate(-o.min.x,-o.min.y),this.fire("update")}},_reset:function(){or.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(o){this._updateDashArray(o),this._layers[d(o)]=o;var s=o._order={layer:o,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=s),this._drawLast=s,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(o){this._requestRedraw(o)},_removePath:function(o){var s=o._order,c=s.next,h=s.prev;c?c.prev=h:this._drawLast=h,h?h.next=c:this._drawFirst=c,delete o._order,delete this._layers[d(o)],this._requestRedraw(o)},_updatePath:function(o){this._extendRedrawBounds(o),o._project(),o._update(),this._requestRedraw(o)},_updateStyle:function(o){this._updateDashArray(o),this._requestRedraw(o)},_updateDashArray:function(o){if(typeof o.options.dashArray=="string"){var s=o.options.dashArray.split(/[, ]+/),c=[],h,v;for(v=0;v<s.length;v++){if(h=Number(s[v]),isNaN(h))return;c.push(h)}o.options._dashArray=c}else o.options._dashArray=o.options.dashArray},_requestRedraw:function(o){this._map&&(this._extendRedrawBounds(o),this._redrawRequest=this._redrawRequest||R(this._redraw,this))},_extendRedrawBounds:function(o){if(o._pxBounds){var s=(o.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new O,this._redrawBounds.extend(o._pxBounds.min.subtract([s,s])),this._redrawBounds.extend(o._pxBounds.max.add([s,s]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var o=this._redrawBounds;if(o){var s=o.getSize();this._ctx.clearRect(o.min.x,o.min.y,s.x,s.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var o,s=this._redrawBounds;if(this._ctx.save(),s){var c=s.getSize();this._ctx.beginPath(),this._ctx.rect(s.min.x,s.min.y,c.x,c.y),this._ctx.clip()}this._drawing=!0;for(var h=this._drawFirst;h;h=h.next)o=h.layer,(!s||o._pxBounds&&o._pxBounds.intersects(s))&&o._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(o,s){if(this._drawing){var c,h,v,k,E=o._parts,N=E.length,F=this._ctx;if(N){for(F.beginPath(),c=0;c<N;c++){for(h=0,v=E[c].length;h<v;h++)k=E[c][h],F[h?"lineTo":"moveTo"](k.x,k.y);s&&F.closePath()}this._fillStroke(F,o)}}},_updateCircle:function(o){if(!(!this._drawing||o._empty())){var s=o._point,c=this._ctx,h=Math.max(Math.round(o._radius),1),v=(Math.max(Math.round(o._radiusY),1)||h)/h;v!==1&&(c.save(),c.scale(1,v)),c.beginPath(),c.arc(s.x,s.y/v,h,0,Math.PI*2,!1),v!==1&&c.restore(),this._fillStroke(c,o)}},_fillStroke:function(o,s){var c=s.options;c.fill&&(o.globalAlpha=c.fillOpacity,o.fillStyle=c.fillColor||c.color,o.fill(c.fillRule||"evenodd")),c.stroke&&c.weight!==0&&(o.setLineDash&&o.setLineDash(s.options&&s.options._dashArray||[]),o.globalAlpha=c.opacity,o.lineWidth=c.weight,o.strokeStyle=c.color,o.lineCap=c.lineCap,o.lineJoin=c.lineJoin,o.stroke())},_onClick:function(o){for(var s=this._map.mouseEventToLayerPoint(o),c,h,v=this._drawFirst;v;v=v.next)c=v.layer,c.options.interactive&&c._containsPoint(s)&&(!(o.type==="click"||o.type==="preclick")||!this._map._draggableMoved(c))&&(h=c);this._fireEvent(h?[h]:!1,o)},_onMouseMove:function(o){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var s=this._map.mouseEventToLayerPoint(o);this._handleMouseHover(o,s)}},_handleMouseOut:function(o){var s=this._hoveredLayer;s&&(rt(this._container,"leaflet-interactive"),this._fireEvent([s],o,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(o,s){if(!this._mouseHoverThrottled){for(var c,h,v=this._drawFirst;v;v=v.next)c=v.layer,c.options.interactive&&c._containsPoint(s)&&(h=c);h!==this._hoveredLayer&&(this._handleMouseOut(o),h&&(we(this._container,"leaflet-interactive"),this._fireEvent([h],o,"mouseover"),this._hoveredLayer=h)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,o),this._mouseHoverThrottled=!0,setTimeout(l(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(o,s,c){this._map._fireDOMEvent(s,c||s.type,o)},_bringToFront:function(o){var s=o._order;if(s){var c=s.next,h=s.prev;if(c)c.prev=h;else return;h?h.next=c:c&&(this._drawFirst=c),s.prev=this._drawLast,this._drawLast.next=s,s.next=null,this._drawLast=s,this._requestRedraw(o)}},_bringToBack:function(o){var s=o._order;if(s){var c=s.next,h=s.prev;if(h)h.next=c;else return;c?c.prev=h:h&&(this._drawLast=h),s.prev=null,s.next=this._drawFirst,this._drawFirst.prev=s,this._drawFirst=s,this._requestRedraw(o)}}});function Gm(o){return he.canvas?new Qm(o):null}var ha=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(o){return document.createElement("<lvml:"+o+' class="lvml">')}}catch{}return function(o){return document.createElement("<"+o+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),Bw={_initContainer:function(){this._container=Ae("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(or.prototype._update.call(this),this.fire("update"))},_initPath:function(o){var s=o._container=ha("shape");we(s,"leaflet-vml-shape "+(this.options.className||"")),s.coordsize="1 1",o._path=ha("path"),s.appendChild(o._path),this._updateStyle(o),this._layers[d(o)]=o},_addPath:function(o){var s=o._container;this._container.appendChild(s),o.options.interactive&&o.addInteractiveTarget(s)},_removePath:function(o){var s=o._container;Ge(s),o.removeInteractiveTarget(s),delete this._layers[d(o)]},_updateStyle:function(o){var s=o._stroke,c=o._fill,h=o.options,v=o._container;v.stroked=!!h.stroke,v.filled=!!h.fill,h.stroke?(s||(s=o._stroke=ha("stroke")),v.appendChild(s),s.weight=h.weight+"px",s.color=h.color,s.opacity=h.opacity,h.dashArray?s.dashStyle=S(h.dashArray)?h.dashArray.join(" "):h.dashArray.replace(/( *, *)/g," "):s.dashStyle="",s.endcap=h.lineCap.replace("butt","flat"),s.joinstyle=h.lineJoin):s&&(v.removeChild(s),o._stroke=null),h.fill?(c||(c=o._fill=ha("fill")),v.appendChild(c),c.color=h.fillColor||h.color,c.opacity=h.fillOpacity):c&&(v.removeChild(c),o._fill=null)},_updateCircle:function(o){var s=o._point.round(),c=Math.round(o._radius),h=Math.round(o._radiusY||c);this._setPath(o,o._empty()?"M0 0":"AL "+s.x+","+s.y+" "+c+","+h+" 0,"+65535*360)},_setPath:function(o,s){o._path.v=s},_bringToFront:function(o){Yo(o._container)},_bringToBack:function(o){ei(o._container)}},Gs=he.vml?ha:Kt,pa=or.extend({_initContainer:function(){this._container=Gs("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Gs("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Ge(this._container),$e(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){or.prototype._update.call(this);var o=this._bounds,s=o.getSize(),c=this._container;(!this._svgSize||!this._svgSize.equals(s))&&(this._svgSize=s,c.setAttribute("width",s.x),c.setAttribute("height",s.y)),at(c,o.min),c.setAttribute("viewBox",[o.min.x,o.min.y,s.x,s.y].join(" ")),this.fire("update")}},_initPath:function(o){var s=o._path=Gs("path");o.options.className&&we(s,o.options.className),o.options.interactive&&we(s,"leaflet-interactive"),this._updateStyle(o),this._layers[d(o)]=o},_addPath:function(o){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(o._path),o.addInteractiveTarget(o._path)},_removePath:function(o){Ge(o._path),o.removeInteractiveTarget(o._path),delete this._layers[d(o)]},_updatePath:function(o){o._project(),o._update()},_updateStyle:function(o){var s=o._path,c=o.options;s&&(c.stroke?(s.setAttribute("stroke",c.color),s.setAttribute("stroke-opacity",c.opacity),s.setAttribute("stroke-width",c.weight),s.setAttribute("stroke-linecap",c.lineCap),s.setAttribute("stroke-linejoin",c.lineJoin),c.dashArray?s.setAttribute("stroke-dasharray",c.dashArray):s.removeAttribute("stroke-dasharray"),c.dashOffset?s.setAttribute("stroke-dashoffset",c.dashOffset):s.removeAttribute("stroke-dashoffset")):s.setAttribute("stroke","none"),c.fill?(s.setAttribute("fill",c.fillColor||c.color),s.setAttribute("fill-opacity",c.fillOpacity),s.setAttribute("fill-rule",c.fillRule||"evenodd")):s.setAttribute("fill","none"))},_updatePoly:function(o,s){this._setPath(o,Ut(o._parts,s))},_updateCircle:function(o){var s=o._point,c=Math.max(Math.round(o._radius),1),h=Math.max(Math.round(o._radiusY),1)||c,v="a"+c+","+h+" 0 1,0 ",k=o._empty()?"M0 0":"M"+(s.x-c)+","+s.y+v+c*2+",0 "+v+-c*2+",0 ";this._setPath(o,k)},_setPath:function(o,s){o._path.setAttribute("d",s)},_bringToFront:function(o){Yo(o._path)},_bringToBack:function(o){ei(o._path)}});he.vml&&pa.include(Bw);function Xm(o){return he.svg||he.vml?new pa(o):null}Oe.include({getRenderer:function(o){var s=o.options.renderer||this._getPaneRenderer(o.options.pane)||this.options.renderer||this._renderer;return s||(s=this._renderer=this._createRenderer()),this.hasLayer(s)||this.addLayer(s),s},_getPaneRenderer:function(o){if(o==="overlayPane"||o===void 0)return!1;var s=this._paneRenderers[o];return s===void 0&&(s=this._createRenderer({pane:o}),this._paneRenderers[o]=s),s},_createRenderer:function(o){return this.options.preferCanvas&&Gm(o)||Xm(o)}});var Jm=ri.extend({initialize:function(o,s){ri.prototype.initialize.call(this,this._boundsToLatLngs(o),s)},setBounds:function(o){return this.setLatLngs(this._boundsToLatLngs(o))},_boundsToLatLngs:function(o){return o=Q(o),[o.getSouthWest(),o.getNorthWest(),o.getNorthEast(),o.getSouthEast()]}});function Iw(o,s){return new Jm(o,s)}pa.create=Gs,pa.pointsToPath=Ut,rr.geometryToLayer=Zs,rr.coordsToLatLng=nd,rr.coordsToLatLngs=Ws,rr.latLngToCoords=rd,rr.latLngsToCoords=Hs,rr.getFeature=oi,rr.asFeature=Vs,Oe.mergeOptions({boxZoom:!0});var Ym=Dn.extend({initialize:function(o){this._map=o,this._container=o._container,this._pane=o._panes.overlayPane,this._resetStateTimeout=0,o.on("unload",this._destroy,this)},addHooks:function(){be(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){$e(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Ge(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(o){if(!o.shiftKey||o.which!==1&&o.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),ia(),jc(),this._startPoint=this._map.mouseEventToContainerPoint(o),be(document,{contextmenu:go,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(o){this._moved||(this._moved=!0,this._box=Ae("div","leaflet-zoom-box",this._container),we(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(o);var s=new O(this._point,this._startPoint),c=s.getSize();at(this._box,s.min),this._box.style.width=c.x+"px",this._box.style.height=c.y+"px"},_finish:function(){this._moved&&(Ge(this._box),rt(this._container,"leaflet-crosshair")),aa(),Uc(),$e(document,{contextmenu:go,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(o){if(!(o.which!==1&&o.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(l(this._resetState,this),0);var s=new A(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(s).fire("boxzoomend",{boxZoomBounds:s})}},_onKeyDown:function(o){o.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});Oe.addInitHook("addHandler","boxZoom",Ym),Oe.mergeOptions({doubleClickZoom:!0});var e_=Dn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(o){var s=this._map,c=s.getZoom(),h=s.options.zoomDelta,v=o.originalEvent.shiftKey?c-h:c+h;s.options.doubleClickZoom==="center"?s.setZoom(v):s.setZoomAround(o.containerPoint,v)}});Oe.addInitHook("addHandler","doubleClickZoom",e_),Oe.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var t_=Dn.extend({addHooks:function(){if(!this._draggable){var o=this._map;this._draggable=new Pr(o._mapPane,o._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),o.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),o.on("zoomend",this._onZoomEnd,this),o.whenReady(this._onZoomEnd,this))}we(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){rt(this._map._container,"leaflet-grab"),rt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var o=this._map;if(o._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var s=Q(this._map.options.maxBounds);this._offsetLimit=B(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;o.fire("movestart").fire("dragstart"),o.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(o){if(this._map.options.inertia){var s=this._lastTime=+new Date,c=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(c),this._times.push(s),this._prunePositions(s)}this._map.fire("move",o).fire("drag",o)},_prunePositions:function(o){for(;this._positions.length>1&&o-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var o=this._map.getSize().divideBy(2),s=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=s.subtract(o).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(o,s){return o-(o-s)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var o=this._draggable._newPos.subtract(this._draggable._startPos),s=this._offsetLimit;o.x<s.min.x&&(o.x=this._viscousLimit(o.x,s.min.x)),o.y<s.min.y&&(o.y=this._viscousLimit(o.y,s.min.y)),o.x>s.max.x&&(o.x=this._viscousLimit(o.x,s.max.x)),o.y>s.max.y&&(o.y=this._viscousLimit(o.y,s.max.y)),this._draggable._newPos=this._draggable._startPos.add(o)}},_onPreDragWrap:function(){var o=this._worldWidth,s=Math.round(o/2),c=this._initialWorldOffset,h=this._draggable._newPos.x,v=(h-s+c)%o+s-c,k=(h+s+c)%o-s-c,E=Math.abs(v+c)<Math.abs(k+c)?v:k;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=E},_onDragEnd:function(o){var s=this._map,c=s.options,h=!c.inertia||o.noInertia||this._times.length<2;if(s.fire("dragend",o),h)s.fire("moveend");else{this._prunePositions(+new Date);var v=this._lastPos.subtract(this._positions[0]),k=(this._lastTime-this._times[0])/1e3,E=c.easeLinearity,N=v.multiplyBy(E/k),F=N.distanceTo([0,0]),X=Math.min(c.inertiaMaxSpeed,F),ae=N.multiplyBy(X/F),ge=X/(c.inertiaDeceleration*E),Se=ae.multiplyBy(-ge/2).round();!Se.x&&!Se.y?s.fire("moveend"):(Se=s._limitOffset(Se,s.options.maxBounds),R(function(){s.panBy(Se,{duration:ge,easeLinearity:E,noMoveStart:!0,animate:!0})}))}}});Oe.addInitHook("addHandler","dragging",t_),Oe.mergeOptions({keyboard:!0,keyboardPanDelta:80});var n_=Dn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(o){this._map=o,this._setPanDelta(o.options.keyboardPanDelta),this._setZoomDelta(o.options.zoomDelta)},addHooks:function(){var o=this._map._container;o.tabIndex<=0&&(o.tabIndex="0"),be(o,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),$e(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var o=document.body,s=document.documentElement,c=o.scrollTop||s.scrollTop,h=o.scrollLeft||s.scrollLeft;this._map._container.focus(),window.scrollTo(h,c)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(o){var s=this._panKeys={},c=this.keyCodes,h,v;for(h=0,v=c.left.length;h<v;h++)s[c.left[h]]=[-1*o,0];for(h=0,v=c.right.length;h<v;h++)s[c.right[h]]=[o,0];for(h=0,v=c.down.length;h<v;h++)s[c.down[h]]=[0,o];for(h=0,v=c.up.length;h<v;h++)s[c.up[h]]=[0,-1*o]},_setZoomDelta:function(o){var s=this._zoomKeys={},c=this.keyCodes,h,v;for(h=0,v=c.zoomIn.length;h<v;h++)s[c.zoomIn[h]]=o;for(h=0,v=c.zoomOut.length;h<v;h++)s[c.zoomOut[h]]=-o},_addHooks:function(){be(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){$e(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(o){if(!(o.altKey||o.ctrlKey||o.metaKey)){var s=o.keyCode,c=this._map,h;if(s in this._panKeys){if(!c._panAnim||!c._panAnim._inProgress)if(h=this._panKeys[s],o.shiftKey&&(h=K(h).multiplyBy(3)),c.options.maxBounds&&(h=c._limitOffset(K(h),c.options.maxBounds)),c.options.worldCopyJump){var v=c.wrapLatLng(c.unproject(c.project(c.getCenter()).add(h)));c.panTo(v)}else c.panBy(h)}else if(s in this._zoomKeys)c.setZoom(c.getZoom()+(o.shiftKey?3:1)*this._zoomKeys[s]);else if(s===27&&c._popup&&c._popup.options.closeOnEscapeKey)c.closePopup();else return;go(o)}}});Oe.addInitHook("addHandler","keyboard",n_),Oe.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var r_=Dn.extend({addHooks:function(){be(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){$e(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(o){var s=Em(o),c=this._map.options.wheelDebounceTime;this._delta+=s,this._lastMousePos=this._map.mouseEventToContainerPoint(o),this._startTime||(this._startTime=+new Date);var h=Math.max(c-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(l(this._performZoom,this),h),go(o)},_performZoom:function(){var o=this._map,s=o.getZoom(),c=this._map.options.zoomSnap||0;o._stop();var h=this._delta/(this._map.options.wheelPxPerZoomLevel*4),v=4*Math.log(2/(1+Math.exp(-Math.abs(h))))/Math.LN2,k=c?Math.ceil(v/c)*c:v,E=o._limitZoom(s+(this._delta>0?k:-k))-s;this._delta=0,this._startTime=null,E&&(o.options.scrollWheelZoom==="center"?o.setZoom(s+E):o.setZoomAround(this._lastMousePos,s+E))}});Oe.addInitHook("addHandler","scrollWheelZoom",r_);var Mw=600;Oe.mergeOptions({tapHold:he.touchNative&&he.safari&&he.mobile,tapTolerance:15});var o_=Dn.extend({addHooks:function(){be(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){$e(this._map._container,"touchstart",this._onDown,this)},_onDown:function(o){if(clearTimeout(this._holdTimeout),o.touches.length===1){var s=o.touches[0];this._startPos=this._newPos=new M(s.clientX,s.clientY),this._holdTimeout=setTimeout(l(function(){this._cancel(),this._isTapValid()&&(be(document,"touchend",bt),be(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",s))},this),Mw),be(document,"touchend touchcancel contextmenu",this._cancel,this),be(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function o(){$e(document,"touchend",bt),$e(document,"touchend touchcancel",o)},_cancel:function(){clearTimeout(this._holdTimeout),$e(document,"touchend touchcancel contextmenu",this._cancel,this),$e(document,"touchmove",this._onMove,this)},_onMove:function(o){var s=o.touches[0];this._newPos=new M(s.clientX,s.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(o,s){var c=new MouseEvent(o,{bubbles:!0,cancelable:!0,view:window,screenX:s.screenX,screenY:s.screenY,clientX:s.clientX,clientY:s.clientY});c._simulated=!0,s.target.dispatchEvent(c)}});Oe.addInitHook("addHandler","tapHold",o_),Oe.mergeOptions({touchZoom:he.touch,bounceAtZoomLimits:!0});var i_=Dn.extend({addHooks:function(){we(this._map._container,"leaflet-touch-zoom"),be(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){rt(this._map._container,"leaflet-touch-zoom"),$e(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(o){var s=this._map;if(!(!o.touches||o.touches.length!==2||s._animatingZoom||this._zooming)){var c=s.mouseEventToContainerPoint(o.touches[0]),h=s.mouseEventToContainerPoint(o.touches[1]);this._centerPoint=s.getSize()._divideBy(2),this._startLatLng=s.containerPointToLatLng(this._centerPoint),s.options.touchZoom!=="center"&&(this._pinchStartLatLng=s.containerPointToLatLng(c.add(h)._divideBy(2))),this._startDist=c.distanceTo(h),this._startZoom=s.getZoom(),this._moved=!1,this._zooming=!0,s._stop(),be(document,"touchmove",this._onTouchMove,this),be(document,"touchend touchcancel",this._onTouchEnd,this),bt(o)}},_onTouchMove:function(o){if(!(!o.touches||o.touches.length!==2||!this._zooming)){var s=this._map,c=s.mouseEventToContainerPoint(o.touches[0]),h=s.mouseEventToContainerPoint(o.touches[1]),v=c.distanceTo(h)/this._startDist;if(this._zoom=s.getScaleZoom(v,this._startZoom),!s.options.bounceAtZoomLimits&&(this._zoom<s.getMinZoom()&&v<1||this._zoom>s.getMaxZoom()&&v>1)&&(this._zoom=s._limitZoom(this._zoom)),s.options.touchZoom==="center"){if(this._center=this._startLatLng,v===1)return}else{var k=c._add(h)._divideBy(2)._subtract(this._centerPoint);if(v===1&&k.x===0&&k.y===0)return;this._center=s.unproject(s.project(this._pinchStartLatLng,this._zoom).subtract(k),this._zoom)}this._moved||(s._moveStart(!0,!1),this._moved=!0),Y(this._animRequest);var E=l(s._move,s,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=R(E,this,!0),bt(o)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,Y(this._animRequest),$e(document,"touchmove",this._onTouchMove,this),$e(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});Oe.addInitHook("addHandler","touchZoom",i_),Oe.BoxZoom=Ym,Oe.DoubleClickZoom=e_,Oe.Drag=t_,Oe.Keyboard=n_,Oe.ScrollWheelZoom=r_,Oe.TapHold=o_,Oe.TouchZoom=i_,n.Bounds=O,n.Browser=he,n.CRS=ne,n.Canvas=Qm,n.Circle=td,n.CircleMarker=$s,n.Class=re,n.Control=vn,n.DivIcon=Vm,n.DivOverlay=Fn,n.DomEvent=tw,n.DomUtil=Yx,n.Draggable=Pr,n.Evented=ue,n.FeatureGroup=tr,n.GeoJSON=rr,n.GridLayer=fa,n.Handler=Dn,n.Icon=ni,n.ImageOverlay=qs,n.LatLng=te,n.LatLngBounds=A,n.Layer=gn,n.LayerGroup=ti,n.LineUtil=hw,n.Map=Oe,n.Marker=Us,n.Mixin=lw,n.Path=Cr,n.Point=M,n.PolyUtil=pw,n.Polygon=ri,n.Polyline=nr,n.Popup=Ks,n.PosAnimation=Om,n.Projection=mw,n.Rectangle=Jm,n.Renderer=or,n.SVG=pa,n.SVGOverlay=Hm,n.TileLayer=ii,n.Tooltip=Qs,n.Transformation=Re,n.Util=_e,n.VideoOverlay=Wm,n.bind=l,n.bounds=B,n.canvas=Gm,n.circle=kw,n.circleMarker=ww,n.control=ua,n.divIcon=Rw,n.extend=i,n.featureGroup=yw,n.geoJSON=Zm,n.geoJson=Cw,n.gridLayer=Aw,n.icon=bw,n.imageOverlay=Ew,n.latLng=$,n.latLngBounds=Q,n.layerGroup=gw,n.map=nw,n.marker=xw,n.point=K,n.polygon=Pw,n.polyline=Sw,n.popup=Lw,n.rectangle=Iw,n.setOptions=w,n.stamp=d,n.svg=Xm,n.svgOverlay=Tw,n.tileLayer=qm,n.tooltip=zw,n.transformation=Ee,n.version=r,n.videoOverlay=Ow;var Dw=window.L;n.noConflict=function(){return window.L=Dw,this},window.L=n})})(CO,ch);var jd,dh={};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/jd={get exports(){return dh},set exports(e){dh=e}},function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=typeof i;if(a==="string"||a==="number")n.push(i);else if(Array.isArray(i)){if(i.length){var l=t.apply(null,i);l&&n.push(l)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var u in i)e.call(i,u)&&i[u]&&n.push(u)}}}return n.join(" ")}jd.exports?(t.default=t,jd.exports=t):window.classNames=t}();var gg,yg,bg,Ri=dh;function EO(e){const t=a=>{var l;return(l=window?.matchMedia(a).matches)!==null&&l!==void 0&&l},[n,r]=T.useState(t(e)),i=()=>{r(t(e))};return T.useEffect(()=>{const a=window.matchMedia(e);return i(),a.addEventListener("change",i),()=>a.removeEventListener("change",i)},[e]),n}function fh(){return fh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fh.apply(this,arguments)}var xg,wg,kg,OO=function(e){return T.createElement("svg",fh({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},e),gg||(gg=T.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),yg||(yg=T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),bg||(bg=T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))};function hh(){return hh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hh.apply(this,arguments)}var TO=function(e){return T.createElement("svg",hh({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},e),xg||(xg=T.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),wg||(wg=T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),kg||(kg=T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))};function Ce(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var Ur,xn={panel:"Panel-module_panel__4VWNp","panel--mobile-layout":"Panel-module_panel--mobile-layout__OII-B",panel__pointer:"Panel-module_panel__pointer__BETJ8","panel__pointer-position":"Panel-module_panel__pointer-position__Zer8q","panel__content-wrapper--info":"Panel-module_panel__content-wrapper--info__lrfgo","panel__pointer--info":"Panel-module_panel__pointer--info__5OaTN","panel__content-wrapper--success":"Panel-module_panel__content-wrapper--success__k0JQD","panel__pointer--success":"Panel-module_panel__pointer--success__O-X6n","panel__content-wrapper--warning":"Panel-module_panel__content-wrapper--warning__vYY8E","panel__pointer--warning":"Panel-module_panel__pointer--warning__l5Zf8","panel__content-wrapper--error":"Panel-module_panel__content-wrapper--error__3LhKe","panel__pointer--error":"Panel-module_panel__pointer--error__4MGTF","panel__content-wrapper":"Panel-module_panel__content-wrapper__oiWk8","panel__icon-wrapper":"Panel-module_panel__icon-wrapper__631EQ",panel__content:"Panel-module_panel__content__U3cAc",panel__header:"Panel-module_panel__header__UJuRe",panel__body:"Panel-module_panel__body__gRd1x"};Ce(`/* breakpoints-xs */
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
`),function(e){e.Success="success",e.Info="info",e.Warning="warning",e.Error="error"}(Ur||(Ur={}));const LO=({size:e,variant:t})=>{switch(t){case Ur.Info:case Ur.Error:case Ur.Warning:return Z.createElement(OO,{style:{width:e,height:e},"data-testid":"panel-icon-info"});case Ur.Success:return Z.createElement(TO,{style:{width:e,height:e},"data-testid":"panel-icon-success"})}},zO=({children:e})=>Z.createElement("div",{className:Ri(xn["panel__pointer-position"])},e),RO=({renderIcon:e=LO,title:t,children:n,variant:r=Ur.Info,showPointer:i=!1,showIcon:a=!0,forceMobileLayout:l=!1,renderArrow:u=zO})=>{const d=(({forceMobileLayout:m})=>{const _=EO(`(max-width: ${iO})`);return!!m||_})({forceMobileLayout:l}),f=d?rO:oO;return Z.createElement("div",{className:Ri(xn.panel,{[xn["panel--mobile-layout"]]:d})},i&&u({children:Z.createElement("div",{"data-testid":"panel-pointer",className:Ri(xn.panel__pointer,xn[`panel__pointer--${r}`])})}),Z.createElement("div",{"data-testid":"panel-content-wrapper",className:Ri(xn["panel__content-wrapper"],xn[`panel__content-wrapper--${r}`])},a&&Z.createElement("div",{"data-testid":"panel-icon-wrapper",className:xn["panel__icon-wrapper"]},e({size:f,variant:r})),Z.createElement("div",{className:xn.panel__content},t&&Z.createElement("h2",{className:xn.panel__header},t),Z.createElement("div",{className:xn.panel__body},n))))};Ce(`.PopoverPanel-module_popover-panel__tGILa {
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
}

.PopoverPanel-module_popover-panel__arrow__Cmcr3 {
  transform: scale(-1);
  margin-top: -1px;
}
`);Ce(`.CircularProgress-module_svg__TUYPH {
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
`);Ce(`/**
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
`);Ce(`@import 'https://altinncdn.no/fonts/altinn-din/altinn-din.css';

html {
  font-family: var(--font_family-default), sans-serif;
}
`);T.createContext(void 0);Ce(`.ToggleButtonGroup-module_toggle-button-group__op1wi {
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
`);Ce(`.ToggleButton-module_toggle-button__g4lb- {
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
`);var Sg;(function(e){e.Primary="primary",e.Secondary="secondary"})(Sg||(Sg={}));T.createContext(void 0);Ce(`.Accordion-module_accordion__LVhhv {
  --component-accordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;
  background-color: var(--component-accordion-color-background);
  width: var(--component-panel-size-width);
}
`);Ce(`.AccordionHeader-module_accordion-header__QlYjQ {
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
`);Ce(`.AccordionIcon-module_accordion-icon__PWdLi {
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  margin-left: 1.6rem;
  box-sizing: border-box;
  flex-shrink: 0;
}

.AccordionIcon-module_accordion-icon--opened__Vv1Nk {
  transform: rotate(90deg);
}
`);function A1(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}const Pg=e=>{var{svgIconComponent:t}=e,n=A1(e,["svgIconComponent"]);return T.isValidElement(t)?T.cloneElement(t,Object.assign({},n)):null};var ph,mh,_h,$n={"altinn-button":"Button-module_altinn-button__66e22",icon:"Button-module_icon__-43u5","altinn-button--small":"Button-module_altinn-button--small__Dgk-Q","altinn-button--medium":"Button-module_altinn-button--medium__bOVBh","altinn-button--large":"Button-module_altinn-button--large__xStsn","altinn-button--full-width":"Button-module_altinn-button--full-width__MAP1E","altinn-button--dashed-border":"Button-module_altinn-button--dashed-border__qpC6S","altinn-button--only-icon":"Button-module_altinn-button--only-icon__dHhst","altinn-button--filled":"Button-module_altinn-button--filled__-w8IZ","altinn-button--outline":"Button-module_altinn-button--outline__NWnjl","altinn-button--quiet":"Button-module_altinn-button--quiet__2HgNN","altinn-button--filled--primary":"Button-module_altinn-button--filled--primary__qR1t6","altinn-button--filled--secondary":"Button-module_altinn-button--filled--secondary__RXBZU","altinn-button--filled--success":"Button-module_altinn-button--filled--success__-hCDf","altinn-button--filled--danger":"Button-module_altinn-button--filled--danger__dshZU","altinn-button--filled--inverted":"Button-module_altinn-button--filled--inverted__B3H2y","altinn-button--outline--primary":"Button-module_altinn-button--outline--primary__yrQtz","altinn-button--outline--secondary":"Button-module_altinn-button--outline--secondary__NQPoO","altinn-button--outline--success":"Button-module_altinn-button--outline--success__oAdH7","altinn-button--outline--danger":"Button-module_altinn-button--outline--danger__ngRhZ","altinn-button--outline--inverted":"Button-module_altinn-button--outline--inverted__opiJ3","altinn-button--quiet--primary":"Button-module_altinn-button--quiet--primary__ym-xv","altinn-button--quiet--secondary":"Button-module_altinn-button--quiet--secondary__LschY","altinn-button--quiet--success":"Button-module_altinn-button--quiet--success__AvIPs","altinn-button--quiet--danger":"Button-module_altinn-button--quiet--danger__buvJM","altinn-button--quiet--inverted":"Button-module_altinn-button--quiet--inverted__-VC-B"};Ce(`.Button-module_altinn-button__66e22 {
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
`),function(e){e.Small="small",e.Medium="medium",e.Large="large"}(ph||(ph={})),function(e){e.Primary="primary",e.Secondary="secondary",e.Success="success",e.Danger="danger",e.Inverted="inverted"}(mh||(mh={})),function(e){e.Filled="filled",e.Outline="outline",e.Quiet="quiet"}(_h||(_h={}));var ku,Su;T.forwardRef((e,t)=>{var{children:n,color:r=mh.Primary,variant:i=_h.Filled,size:a=ph.Small,fullWidth:l=!1,dashedBorder:u=!1,iconPlacement:d="left",icon:f,type:m="button",className:_}=e,p=A1(e,["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"]);return Z.createElement("button",Object.assign({},p,{ref:t,className:Ri($n["altinn-button"],$n[`altinn-button--${a}`],$n[`altinn-button--${i}`],$n[`altinn-button--${r}`],$n[`altinn-button--${i}--${r}`],{[$n["altinn-button--full-width"]]:l},{[$n["altinn-button--dashed-border"]]:u},{[$n["altinn-button--only-icon"]]:!n&&f},_),type:m}),f&&d==="left"&&Z.createElement(Pg,{svgIconComponent:f,className:$n.icon}),n,f&&d==="right"&&Z.createElement(Pg,{svgIconComponent:f,className:$n.icon}))});(function(e){e.Primary="primary",e.Success="success"})(ku||(ku={})),function(e){e.Small="small",e.Medium="medium"}(Su||(Su={}));const AO=T.createContext({color:ku.Primary,size:Su.Medium});var NO="Page-module_page__THNNc";Ce(`.Page-module_page__THNNc {
  width: 100%;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
}
`);const BO=({children:e,color:t=ku.Primary,size:n=Su.Medium})=>Z.createElement("div",{className:NO},Z.createElement(AO.Provider,{value:{color:t,size:n}},e));Ce(`.PageHeader-module_page-header__94GS1 {
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
`);var IO={"page-content":"PageContent-module_page-content__-sHWi"};Ce(`.PageContent-module_page-content__-sHWi {
  --component-page_content-vertical-padding: 2rem;
  background-color: white;
  padding-top: var(--component-page_content-vertical-padding);
  padding-bottom: var(--component-page_content-vertical-padding);
  box-sizing: inherit;
}
`);const Cg=({children:e})=>Z.createElement("div",{className:Ri(IO["page-content"])},e);var vh;Ce(`.List-module_list__9aWGq {
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
`),function(e){e.Solid="solid",e.Dashed="dashed"}(vh||(vh={}));T.createContext({borderStyle:vh.Solid});Ce(`.ListItem-module_list-item__OIENi {
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
`);var Eg,Og,Tg;(function(e){e.Default="default",e.Error="error",e.Disabled="disabled",e.ReadOnlyInfo="readonly-info",e.ReadOnlyConfirm="readonly-confirm"})(Eg||(Eg={})),function(e){e.ReadOnlyInfo="readonly-info",e.ReadOnlyConfirm="readonly-confirm"}(Og||(Og={})),function(e){e.None="none",e.Error="error",e.Search="search"}(Tg||(Tg={}));Ce(`.InputWrapper-module_InputWrapper__us2BQ {
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
`);Ce(`.ErrorMessage-module_altinn-error-message-wrapper__zR1LF {
  color: var(--component-error_message-color-text);
  font-size: var(--component-error_message-font_size-xs);
}
`);Ce(`.Map-module_map__mpwLI {
  position: relative;
  height: 50rem;
  width: 100%;
}
`);var gh,Lg;Ce(`Table {
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
`),function(e){e.Header="header",e.Body="body",e.Footer="footer"}(gh||(gh={})),function(e){e.Descending="desc",e.Ascending="asc",e.NotSortable="notSortable",e.NotActive="notActive"}(Lg||(Lg={}));T.createContext(void 0);T.createContext({variantStandard:gh.Body});Ce(`.TableHeader-module_table-header__mrqgB {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`);Ce(`.TableRow-module_TableRow__3GK6I {
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
`);Ce(`.TableBody-module_TableBody__tqUvt {
  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  background-color: #ffff;
}
`);Ce(`.TableCell-module_header-table-cell__NOs4b {
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
`);Ce(`.TableFooter-module_table-footer__FJZKm {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`);var zg;Ce(`.CheckboxRadioTemplate-module_altinn-template__x5xJ- {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(zg||(zg={}));var Rg;Ce(`.RadioButton-module_altinn-radio__iDfpf {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Rg||(Rg={}));Ce(`.Checkbox-module_altinn-checkbox__UGXBu {
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
`);Ce(`.TextArea-module_altinn-TextArea__lzLj9 {
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
`);var Ag;Ce(`.FieldSet-module_altinn-field-set__NebiS {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Ag||(Ag={}));var Ng;Ce(`.CheckboxGroup-module_altinn-checkbox-group__Q7GlX {
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
`),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(Ng||(Ng={}));Ce(`.Pagination-module_pagination-icon__zVOLT {
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
`);Ce(`.MultiSelectItem-module_altinn-multi-select-item__fb2Ov {
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
`);Ce(`.Select-module_altinn-select__678hU {
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
`);Ce(`.Tabs-module_altinn-tabs__YJ7fE {
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
`);var Bg,Ig;Ce(`.RadioGroup-module_altinn-radio-group__Eje9Q {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Bg||(Bg={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(Ig||(Ig={}));let Mg=0;function MO(e){const[t,n]=T.useState(e),r=e||t;return T.useEffect(()=>{t==null&&(Mg+=1,n(`aksel-icon-${Mg}`))},[t]),r}const Dg=Z["useId"];function N1(e){var t;if(Dg!==void 0){const n=Dg();return e??n.replace(/(:)/g,"")}return(t=MO(e))!==null&&t!==void 0?t:""}var DO=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const FO=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,i=DO(e,["title","titleId"]);let a=N1();return a=n?r||"title-"+a:void 0,T.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},i),n?T.createElement("title",{id:a},n):null,T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-11c2.205 0 4 1.657 4 3.693 0 .986-.416 1.914-1.172 2.612l-.593.54-.294.28c-.477.466-.869.94-.936 1.417l-.01.144v.814h-1.991v-.814c0-1.254.84-2.214 1.675-3.002l.74-.68c.38-.35.59-.816.59-1.31 0-1.024-.901-1.856-2.01-1.856-1.054 0-1.922.755-2.002 1.71l-.006.145H8C8 6.657 9.794 5 12 5Z",fill:"currentColor"}))}),jO=FO;var UO=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const $O=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,i=UO(e,["title","titleId"]);let a=N1();return a=n?r||"title-"+a:void 0,T.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},i),n?T.createElement("title",{id:a},n):null,T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 16a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-11c2.205 0 4 1.657 4 3.693 0 .986-.416 1.914-1.172 2.612l-.593.54-.294.28c-.477.466-.869.94-.936 1.417l-.01.144v.814h-1.991v-.814c0-1.254.84-2.214 1.675-3.002l.74-.68c.38-.35.59-.816.59-1.31 0-1.024-.901-1.856-2.01-1.856-1.054 0-1.922.755-2.002 1.71l-.006.145H8C8 6.657 9.794 5 12 5Z",fill:"currentColor"}))}),ZO=$O;function Xi(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var Ud,B1={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/Ud=B1,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=typeof i;if(a==="string"||a==="number")n.push(i);else if(Array.isArray(i)){if(i.length){var l=t.apply(null,i);l&&n.push(l)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var u in i)e.call(i,u)&&i[u]&&n.push(u)}}}return n.join(" ")}Ud.exports?(t.default=t,Ud.exports=t):window.classNames=t}();var St=B1.exports;const yh=e=>{var{svgIconComponent:t}=e,n=Xi(e,["svgIconComponent"]);return T.isValidElement(t)?T.cloneElement(t,Object.assign({},n)):null};function nt(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}yh.displayName="SvgIcon";var bh,xh,wh,ir={button:"Button-module_button__2ZuB7",icon:"Button-module_icon__-43u5",small:"Button-module_small__l39oh",medium:"Button-module_medium__KTxdk",large:"Button-module_large__6bsb7",fullWidth:"Button-module_fullWidth__36oJT",dashedBorder:"Button-module_dashedBorder__500FL",outline:"Button-module_outline__F5jq-",quiet:"Button-module_quiet__1KlhF",onlyIcon:"Button-module_onlyIcon__lENu3",filled:"Button-module_filled__inpPb",primary:"Button-module_primary__s1sM6",secondary:"Button-module_secondary__R0waJ",success:"Button-module_success__w6qB6",danger:"Button-module_danger__V4fX8",inverted:"Button-module_inverted__VD6YO"};nt(`.Button-module_button__2ZuB7 {\r
    --border-radius: 3px;\r
    --button-size: var(--component-button-size-height-small);\r
    --button-vertical-padding: var(--component-button-space-padding-x-small);\r
    --font-and-icon-color: var(--component-button-filled-color-text-all);\r
    --icon-size: var(--component-button-size-icon-small);\r
\r
    all: initial; /* reset all styles to default, to avoid style overrides/surprises caused by other css (from Design system v1 f.ex) */\r
    align-items: center;\r
    border-radius: var(--border-radius);\r
    border: var(--component-button-border_width-default) solid transparent;\r
    box-sizing: border-box;\r
    color: var(--font-and-icon-color);\r
    cursor: pointer;\r
    display: flex;\r
    fill: var(--font-and-icon-color);\r
    font-family: inherit;\r
    height: var(--button-size);\r
    justify-content: center;\r
    letter-spacing: var(--typography-default-letter-spacing);\r
    padding: 0 var(--button-vertical-padding);\r
    text-align: center;\r
}\r
\r
.Button-module_button__2ZuB7:focus-visible {\r
    outline: var(--semantic-tab_focus-outline-color) solid\r
    var(--semantic-tab_focus-outline-width);\r
    outline-offset: var(--semantic-tab_focus-outline-offset);\r
}\r
\r
.Button-module_button__2ZuB7:focus:not(:focus-visible) {\r
    outline: none;\r
}\r
\r
.Button-module_button__2ZuB7:disabled {\r
    cursor: auto;\r
    opacity: var(--opacity-disabled);\r
}\r
\r
.Button-module_icon__-43u5 {\r
    display: inline-block;\r
    height: var(--icon-size);\r
    width: var(--icon-size);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_small__l39oh {\r
    --button-size: var(--component-button-size-height-small);\r
    --button-vertical-padding: var(--component-button-space-padding-x-small);\r
    --icon-size: var(--component-button-size-icon-small);\r
    font-size: var(--font_size-300);\r
    gap: var(--component-button-space-gap-small);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_medium__KTxdk {\r
    --button-size: var(--component-button-size-height-medium);\r
    --button-vertical-padding: var(--component-button-space-padding-x-medium);\r
    --icon-size: var(--component-button-size-icon-medium);\r
    font-size: var(--font_size-400-breakpoint_md);\r
    gap: var(--component-button-space-gap-medium);\r
    min-width: var(--component-button-size-height-medium);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_large__6bsb7 {\r
    --button-size: var(--component-button-size-height-large);\r
    --button-vertical-padding: var(--component-button-space-padding-x-large);\r
    --icon-size: var(--component-button-size-icon-large);\r
    font-size: var(--font_size-600-breakpoint_md);\r
    gap: var(--component-button-space-gap-large);\r
    min-width: var(--component-button-size-height-large);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_fullWidth__36oJT {\r
    width: 100%;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_dashedBorder__500FL {\r
    border-style: dashed;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq- {\r
    background-color: transparent;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF {\r
    --border-radius: 50px;\r
    padding: 0 calc(var(--button-vertical-padding) * 2 / 3);\r
    background-color: transparent;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_onlyIcon__lENu3 {\r
    padding: 0.5rem;\r
    width: var(--button-size);\r
}\r
\r
/* Filled button colors */\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_primary__s1sM6 {\r
    background: var(--component-button-filled-primary-color-background-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_primary__s1sM6:not(:disabled):hover {\r
    background: var(--component-button-filled-primary-color-background-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_primary__s1sM6:not(:disabled):active {\r
    background: var(--component-button-filled-primary-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_secondary__R0waJ {\r
    background: var(--component-button-filled-primary-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_secondary__R0waJ:not(:disabled):hover {\r
    background: var(--colors-blue-800);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_secondary__R0waJ:not(:disabled):active {\r
    background: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_success__w6qB6 {\r
    background: var(--component-button-filled-success-color-background-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_success__w6qB6:not(:disabled):hover {\r
    background: var(--component-button-filled-success-color-background-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_success__w6qB6:not(:disabled):active {\r
    background: var(--component-button-filled-success-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_danger__V4fX8 {\r
    background: var(--component-button-filled-danger-color-background-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_danger__V4fX8:not(:disabled):hover {\r
    background: var(--component-button-filled-danger-color-background-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_danger__V4fX8:not(:disabled):active {\r
    background: var(--colors-red-800);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO {\r
    --font-and-icon-color: var(--colors-blue-900);\r
    background: var(--colors-white);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-blue-900);\r
    background: rgba(255, 255, 255, 0.9);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO:not(:disabled):active {\r
    --font-and-icon-color: var(--colors-white);\r
    background: rgba(255, 255, 255, 0.1);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO:focus-visible {\r
    outline-color: var(--colors-white);\r
}\r
\r
/* Outline button colors */\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_primary__s1sM6 {\r
    --font-and-icon-color: var(--component-button-outline-primary-color-text-default);\r
    border-color: var(--component-button-outline-primary-color-border-default);\r
    background: var(--component-button-outline-primary-color-background-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_primary__s1sM6:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-blue-800);\r
    background: var(--component-button-outline-primary-color-background-hover);\r
    border-color: var(--component-button-outline-primary-color-border-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_primary__s1sM6:not(:disabled):active {\r
    --font-and-icon-color: var(--component-button-outline-primary-color-text-pressed);\r
    background: var(--component-button-outline-primary-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_secondary__R0waJ {\r
    --font-and-icon-color: var(--colors-blue-900);\r
    background: var(--colors-white);\r
    border-color: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_secondary__R0waJ:not(:disabled):hover {\r
    background: var(--colors-blue-100);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_secondary__R0waJ:not(:disabled):active {\r
    --font-and-icon-color: var(--colors-white);\r
    background: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_success__w6qB6 {\r
    --font-and-icon-color: var(--colors-green-700);\r
    background: var(--colors-white);\r
    border-color: var(--colors-green-700);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_success__w6qB6:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-green-800);\r
    background: var(--colors-green-200);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_success__w6qB6:not(:disabled):active {\r
    --font-and-icon-color: var(--colors-white);\r
    background: var(--colors-green-700);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_danger__V4fX8 {\r
    --font-and-icon-color: var(--colors-red-500);\r
    background: var(--colors-white);\r
    border-color: var(--colors-red-500);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_danger__V4fX8:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-red-700);\r
    background: var(--colors-red-100);\r
    border-color: var(--colors-red-700);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_danger__V4fX8:not(:disabled):active {\r
    --font-and-icon-color: var(--colors-white);\r
    background: var(--colors-red-500);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO {\r
    --font-and-icon-color: var(--colors-white);\r
    border-color: var(--colors-white);\r
    background: transparent;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO:not(:disabled):hover {\r
    background: rgba(255, 255, 255, 0.1);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO:not(:disabled):active {\r
    --font-and-icon-color: var(--colors-blue-900);\r
    background: var(--colors-white);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO:focus-visible {\r
    outline-color: var(--colors-white);\r
}\r
\r
/* Quiet button colors */\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_primary__s1sM6 {\r
    --font-and-icon-color: var(--component-button-quiet-primary-color-text-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_primary__s1sM6:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-blue-800);\r
    background: var(--component-button-quiet-primary-color-background-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_primary__s1sM6:not(:disabled):active {\r
    --font-and-icon-color: var(--component-button-filled-color-text-all);\r
    background: var(--component-button-quiet-primary-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_secondary__R0waJ {\r
    --font-and-icon-color: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_secondary__R0waJ:not(:disabled):hover {\r
    background: var(--colors-grey-300);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_secondary__R0waJ:not(:disabled):active {\r
    --font-and-icon-color: var(--component-button-filled-color-text-all);\r
    background: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_success__w6qB6 {\r
    --font-and-icon-color: var(--colors-green-700);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_success__w6qB6:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-green-800);\r
    background: var(--colors-green-200);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_success__w6qB6:not(:disabled):active {\r
    --font-and-icon-color: var(--component-button-filled-color-text-all);\r
    background: var(--colors-green-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_danger__V4fX8 {\r
    --font-and-icon-color: var(--colors-red-600);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_danger__V4fX8:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-red-800);\r
    background: var(--colors-red-100);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_danger__V4fX8:not(:disabled):active {\r
    --font-and-icon-color: var(--component-button-filled-color-text-all);\r
    background: var(--colors-red-800);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO {\r
    --font-and-icon-color: var(--colors-white);\r
    background: transparent;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-blue-900);\r
    background: rgba(255, 255, 255, 0.9);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO:not(:disabled):active {\r
    --font-and-icon-color: var(--colors-blue-900);\r
    background: var(--colors-white);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO:focus-visible {\r
    outline-color: var(--colors-white);\r
}`),function(e){e.Small="small",e.Medium="medium",e.Large="large"}(bh||(bh={})),function(e){e.Primary="primary",e.Secondary="secondary",e.Success="success",e.Danger="danger",e.Inverted="inverted"}(xh||(xh={})),function(e){e.Filled="filled",e.Outline="outline",e.Quiet="quiet"}(wh||(wh={}));const I1=(e,t)=>{var{children:n,color:r=xh.Primary,variant:i=wh.Filled,size:a=bh.Small,fullWidth:l=!1,dashedBorder:u=!1,iconPlacement:d="left",icon:f,type:m="button",className:_}=e,p=Xi(e,["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"]);return Z.createElement("button",Object.assign({},p,{ref:t,className:St(ir.button,ir[a],ir[i],ir[r],{[ir.fullWidth]:l},{[ir.dashedBorder]:u},{[ir.onlyIcon]:!n&&f},_),type:m}),f&&d==="left"&&Z.createElement(yh,{svgIconComponent:f,className:ir.icon}),n,f&&d==="right"&&Z.createElement(yh,{svgIconComponent:f,className:ir.icon}))};I1.displayName="Button";T.forwardRef(I1);var WO="ErrorMessage-module_errorMessageWrapper__rSdCu";nt(`.ErrorMessage-module_errorMessageWrapper__rSdCu {\r
  color: var(--component-error_message-color-text);\r
  font-size: var(--component-error_message-font_size-xs);\r
}\r
`);const M1=({id:e,children:t,ariaLabel:n})=>Z.createElement("div",{"aria-label":n,className:WO,"data-testid":"ErrorMessage",id:e,role:"alertdialog"},t);function Fg(e,t){T.useEffect(()=>(document.addEventListener(e,t),()=>document.removeEventListener(e,t)),[e,t])}function $d(e,t){T.useEffect(()=>{const n=r=>{r.key===e&&t()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[e,t])}function HO(e){const t=T.useRef();return T.useEffect(()=>{t.current=e},[e]),t.current}M1.displayName="ErrorMessage";const Pu=(e,t)=>{const n=T.useRef(!0);T.useEffect(()=>{if(!n.current)return e();n.current=!1},t)};function D1(e,t){if(e===t)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function F1(e){return e.length===new Set(e).size}var VO="Tabs-module_tabs__QzIkz",qO="Tabs-module_tablist__WR6ag",KO="Tabs-module_tab__IdDYc",QO="Tabs-module_selected__TxfYv",GO="Tabs-module_divider__-r5Cd",XO="Tabs-module_tabpanel__0vR1c";nt(`@import 'https://altinncdn.no/fonts/altinn-din/altinn-din.css';\r
\r
.Tabs-module_tabs__QzIkz {\r
  --divider-color: #c9c9c9;\r
  --divider-width: 1px;\r
  --tab-border_bottom_color-selected: var(--colors-blue-700);\r
  --tab-border_bottom_color: transparent;\r
  --tab-border_bottom_width: 4px;\r
  --tab-font_family: var(--font_family-default);\r
  --tab-font_size: var(--font_size-component-size-sm);\r
  --tab-font_weight: 500;\r
  --tab-height: 32px;\r
  --tab-text_color-hover: var(--colors-black);\r
  --tab-text_color-selected: var(--colors-blue-700);\r
  --tab-text_color: #68707c;\r
  --tablist-gap: 1.5rem;\r
  --tablist-margin_horizontal: 20px;\r
  --tabpanel-margin_horizontal: 20px;\r
  --tabpanel-margin_vertical: 20px;\r
  position: relative;\r
}\r
\r
.Tabs-module_tablist__WR6ag {\r
  display: flex;\r
  gap: var(--tablist-gap);\r
  margin: 0 var(--tablist-margin_horizontal);\r
  position: relative;\r
  z-index: 1;\r
}\r
\r
.Tabs-module_tab__IdDYc {\r
  background-color: transparent;\r
  border-bottom-color: var(--tab-border_bottom_color);\r
  border-bottom-style: solid;\r
  border-width: 0 0 var(--tab-border_bottom_width) 0;\r
  color: var(--tab-text_color);\r
  cursor: pointer;\r
  font-family: var(--tab-font_family);\r
  font-size: var(--tab-font_size);\r
  font-weight: var(--tab-font_weight);\r
  line-height: var(--tab-height);\r
  margin: 0;\r
  overflow: hidden;\r
  padding: 0;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
.Tabs-module_tab__IdDYc.Tabs-module_selected__TxfYv {\r
  --tab-text_color: var(--tab-text_color-selected);\r
  --tab-border_bottom_color: var(--tab-border_bottom_color-selected);\r
}\r
\r
.Tabs-module_tab__IdDYc:hover {\r
  --tab-text_color: var(--tab-text_color-hover);\r
}\r
\r
.Tabs-module_tab__IdDYc:focus-visible {\r
  outline: var(--semantic-tab_focus-outline-color) auto var(--semantic-tab_focus-outline-width);\r
  outline-offset: var(--semantic-tab_focus-outline-offset);\r
}\r
\r
.Tabs-module_divider__-r5Cd {\r
  border-color: var(--divider-color);\r
  border-style: solid;\r
  border-width: var(--divider-width) 0 0 0;\r
  height: var(--divider-width);\r
  margin: 0;\r
  position: absolute;\r
  top: var(--tab-height);\r
  width: 100%;\r
}\r
\r
.Tabs-module_tabpanel__0vR1c {\r
  margin: var(--tabpanel-margin_vertical) var(--tabpanel-margin_horizontal);\r
}\r
`);const jg=e=>e.replace(/\s/,"_"),j1=({activeTab:e,items:t,onChange:n})=>{const r=T.useId(),i=t.map(({name:w,content:C,value:y,tabId:b,panelId:S})=>{const P=y??w;return{name:w,content:C,value:P,tabId:b??r+jg(P)+"-tab",panelId:S??r+jg(P)+"-panel"}});if(!F1(i.map(({value:w})=>w)))throw Error("Each tab value must be unique.");if(e!==void 0&&!i.some(w=>w.value===e))throw Error("The given active tab value must exist in the list of items.");const a=w=>i.findIndex(C=>C.value===w),l=e??i[0].value,[u,d]=T.useState(l),[f,m]=T.useState(a(l));T.useEffect(()=>d(l),[l]);const _=T.useRef(null),p=i.length-1;Pu(()=>{var w;(w=_.current)===null||w===void 0||w.querySelectorAll('[role="tab"]')[f].focus()},[f]);const g=w=>{u!==w&&n&&n(w),d(w),m(a(w))},x=w=>C=>{switch(C.key){case"ArrowRight":f!==void 0&&m(f===p?0:f+1);break;case"ArrowLeft":f!==void 0&&m(f===0?p:f-1);break;case"Space":g(w)}};return Z.createElement("div",{className:VO},Z.createElement("div",{className:qO,ref:_,role:"tablist"},i.map((w,C)=>{const y=w.value===u;return Z.createElement("button",{"aria-controls":w.panelId,"aria-selected":y,className:St(KO,y&&QO),id:w.tabId,key:w.value,onClick:()=>g(w.value),onKeyDown:x(w.value),role:"tab",tabIndex:f===C?0:-1},w.name)})),Z.createElement("hr",{className:GO}),i.map(w=>Z.createElement("div",{className:XO,"aria-labelledby":w.tabId,hidden:w.value!==u,id:w.panelId,key:w.panelId,role:"tabpanel"},w.content)))};function ps(e){return e.split("-")[1]}function Vp(e){return e==="y"?"height":"width"}function Io(e){return e.split("-")[0]}function Ls(e){return["top","bottom"].includes(Io(e))?"x":"y"}function Ug(e,t,n){let{reference:r,floating:i}=e;const a=r.x+r.width/2-i.width/2,l=r.y+r.height/2-i.height/2,u=Ls(t),d=Vp(u),f=r[d]/2-i[d]/2,m=u==="x";let _;switch(Io(t)){case"top":_={x:a,y:r.y-i.height};break;case"bottom":_={x:a,y:r.y+r.height};break;case"right":_={x:r.x+r.width,y:l};break;case"left":_={x:r.x-i.width,y:l};break;default:_={x:r.x,y:r.y}}switch(ps(t)){case"start":_[u]-=f*(n&&m?-1:1);break;case"end":_[u]+=f*(n&&m?-1:1)}return _}j1.displayName="Tabs";function U1(e){return typeof e!="number"?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(e):{top:e,right:e,bottom:e,left:e}}function Cu(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function $1(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:a,rects:l,elements:u,strategy:d}=e,{boundary:f="clippingAncestors",rootBoundary:m="viewport",elementContext:_="floating",altBoundary:p=!1,padding:g=0}=t,x=U1(g),w=u[p?_==="floating"?"reference":"floating":_],C=Cu(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(w)))==null||n?w:w.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(u.floating)),boundary:f,rootBoundary:m,strategy:d})),y=_==="floating"?{...l.floating,x:r,y:i}:l.reference,b=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u.floating)),S=await(a.isElement==null?void 0:a.isElement(b))&&await(a.getScale==null?void 0:a.getScale(b))||{x:1,y:1},P=Cu(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:b,strategy:d}):y);return{top:(C.top-P.top+x.top)/S.y,bottom:(P.bottom-C.bottom+x.bottom)/S.y,left:(C.left-P.left+x.left)/S.x,right:(P.right-C.right+x.right)/S.x}}const JO=Math.min,YO=Math.max;function kh(e,t,n){return YO(e,JO(t,n))}const $g=e=>({name:"arrow",options:e,async fn(t){const{element:n,padding:r=0}=e||{},{x:i,y:a,placement:l,rects:u,platform:d}=t;if(n==null)return{};const f=U1(r),m={x:i,y:a},_=Ls(l),p=Vp(_),g=await d.getDimensions(n),x=_==="y"?"top":"left",w=_==="y"?"bottom":"right",C=u.reference[p]+u.reference[_]-m[_]-u.floating[p],y=m[_]-u.reference[_],b=await(d.getOffsetParent==null?void 0:d.getOffsetParent(n));let S=b?_==="y"?b.clientHeight||0:b.clientWidth||0:0;S===0&&(S=u.floating[p]);const P=C/2-y/2,z=f[x],I=S-g[p]-f[w],D=S/2-g[p]/2+P,j=kh(z,D,I),V=ps(l)!=null&&D!=j&&u.reference[p]/2-(D<z?f[x]:f[w])-g[p]/2<0;return{[_]:m[_]-(V?D<z?z-D:I-D:0),data:{[_]:j,centerOffset:D-j}}}}),eT={left:"right",right:"left",bottom:"top",top:"bottom"};function gl(e){return e.replace(/left|right|bottom|top/g,t=>eT[t])}const tT={start:"end",end:"start"};function Zd(e){return e.replace(/start|end/g,t=>tT[t])}const nT=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:r,middlewareData:i,rects:a,initialPlacement:l,platform:u,elements:d}=t,{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:_,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:x=!0,...w}=e,C=Io(r),y=Io(l)===l,b=await(u.isRTL==null?void 0:u.isRTL(d.floating)),S=_||(y||!x?[gl(l)]:function(U){const R=gl(U);return[Zd(U),R,Zd(R)]}(l));_||g==="none"||S.push(...function(U,R,Y,_e){const re=ps(U);let fe=function(ee,ue,M){const oe=["left","right"],K=["right","left"],O=["top","bottom"],B=["bottom","top"];switch(ee){case"top":case"bottom":return M?ue?K:oe:ue?oe:K;case"left":case"right":return ue?O:B;default:return[]}}(Io(U),Y==="start",_e);return re&&(fe=fe.map(ee=>ee+"-"+re),R&&(fe=fe.concat(fe.map(Zd)))),fe}(l,x,g,b));const P=[l,...S],z=await $1(t,w),I=[];let D=((n=i.flip)==null?void 0:n.overflows)||[];if(f&&I.push(z[C]),m){const{main:U,cross:R}=function(Y,_e,re){re===void 0&&(re=!1);const fe=ps(Y),ee=Ls(Y),ue=Vp(ee);let M=ee==="x"?fe===(re?"end":"start")?"right":"left":fe==="start"?"bottom":"top";return _e.reference[ue]>_e.floating[ue]&&(M=gl(M)),{main:M,cross:gl(M)}}(r,a,b);I.push(z[U],z[R])}if(D=[...D,{placement:r,overflows:I}],!I.every(U=>U<=0)){var j;const U=(((j=i.flip)==null?void 0:j.index)||0)+1,R=P[U];if(R)return{data:{index:U,overflows:D},reset:{placement:R}};let Y="bottom";switch(p){case"bestFit":{var V;const _e=(V=D.map(re=>[re,re.overflows.filter(fe=>fe>0).reduce((fe,ee)=>fe+ee,0)]).sort((re,fe)=>re[1]-fe[1])[0])==null?void 0:V[0].placement;_e&&(Y=_e);break}case"initialPlacement":Y=l}if(r!==Y)return{reset:{placement:Y}}}return{}}}},rT=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,i=await async function(a,l){const{placement:u,platform:d,elements:f}=a,m=await(d.isRTL==null?void 0:d.isRTL(f.floating)),_=Io(u),p=ps(u),g=Ls(u)==="x",x=["left","top"].includes(_)?-1:1,w=m&&g?-1:1,C=typeof l=="function"?l(a):l;let{mainAxis:y,crossAxis:b,alignmentAxis:S}=typeof C=="number"?{mainAxis:C,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...C};return p&&typeof S=="number"&&(b=p==="end"?-1*S:S),g?{x:b*w,y:y*x}:{x:y*x,y:b*w}}(t,e);return{x:n+i.x,y:r+i.y,data:i}}}};function dn(e){var t;return((t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Qn(e){return dn(e).getComputedStyle(e)}function ao(e){return W1(e)?(e.nodeName||"").toLowerCase():""}let yl;function Z1(){if(yl)return yl;const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?(yl=e.brands.map(t=>t.brand+"/"+t.version).join(" "),yl):navigator.userAgent}function yr(e){return e instanceof dn(e).HTMLElement}function Ln(e){return e instanceof dn(e).Element}function W1(e){return e instanceof dn(e).Node}function Zg(e){return typeof ShadowRoot>"u"?!1:e instanceof dn(e).ShadowRoot||e instanceof ShadowRoot}function Ec(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Qn(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function oT(e){return["table","td","th"].includes(ao(e))}function Sh(e){const t=/firefox/i.test(Z1()),n=Qn(e),r=n.backdropFilter||n.WebkitBackdropFilter;return n.transform!=="none"||n.perspective!=="none"||!!r&&r!=="none"||t&&n.willChange==="filter"||t&&!!n.filter&&n.filter!=="none"||["transform","perspective"].some(i=>n.willChange.includes(i))||["paint","layout","strict","content"].some(i=>{const a=n.contain;return a!=null&&a.includes(i)})}function H1(){return!/^((?!chrome|android).)*safari/i.test(Z1())}function qp(e){return["html","body","#document"].includes(ao(e))}const Wg=Math.min,Va=Math.max,Eu=Math.round;function V1(e){const t=Qn(e);let n=parseFloat(t.width),r=parseFloat(t.height);const i=e.offsetWidth,a=e.offsetHeight,l=Eu(n)!==i||Eu(r)!==a;return l&&(n=i,r=a),{width:n,height:r,fallback:l}}function q1(e){return Ln(e)?e:e.contextElement}const K1={x:1,y:1};function Ai(e){const t=q1(e);if(!yr(t))return K1;const n=t.getBoundingClientRect(),{width:r,height:i,fallback:a}=V1(t);let l=(a?Eu(n.width):n.width)/r,u=(a?Eu(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),u&&Number.isFinite(u)||(u=1),{x:l,y:u}}function Wo(e,t,n,r){var i,a;t===void 0&&(t=!1),n===void 0&&(n=!1);const l=e.getBoundingClientRect(),u=q1(e);let d=K1;t&&(r?Ln(r)&&(d=Ai(r)):d=Ai(e));const f=u?dn(u):window,m=!H1()&&n;let _=(l.left+(m&&((i=f.visualViewport)==null?void 0:i.offsetLeft)||0))/d.x,p=(l.top+(m&&((a=f.visualViewport)==null?void 0:a.offsetTop)||0))/d.y,g=l.width/d.x,x=l.height/d.y;if(u){const w=dn(u),C=r&&Ln(r)?dn(r):r;let y=w.frameElement;for(;y&&r&&C!==w;){const b=Ai(y),S=y.getBoundingClientRect(),P=getComputedStyle(y);S.x+=(y.clientLeft+parseFloat(P.paddingLeft))*b.x,S.y+=(y.clientTop+parseFloat(P.paddingTop))*b.y,_*=b.x,p*=b.y,g*=b.x,x*=b.y,_+=S.x,p+=S.y,y=dn(y).frameElement}}return{width:g,height:x,top:p,right:_+g,bottom:p+x,left:_,x:_,y:p}}function Jr(e){return((W1(e)?e.ownerDocument:e.document)||window.document).documentElement}function Oc(e){return Ln(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Q1(e){return Wo(Jr(e)).left+Oc(e).scrollLeft}function iT(e,t,n){const r=yr(t),i=Jr(t),a=Wo(e,!0,n==="fixed",t);let l={scrollLeft:0,scrollTop:0};const u={x:0,y:0};if(r||!r&&n!=="fixed")if((ao(t)!=="body"||Ec(i))&&(l=Oc(t)),yr(t)){const d=Wo(t,!0);u.x=d.x+t.clientLeft,u.y=d.y+t.clientTop}else i&&(u.x=Q1(i));return{x:a.left+l.scrollLeft-u.x,y:a.top+l.scrollTop-u.y,width:a.width,height:a.height}}function ms(e){if(ao(e)==="html")return e;const t=e.assignedSlot||e.parentNode||(Zg(e)?e.host:null)||Jr(e);return Zg(t)?t.host:t}function Hg(e){return yr(e)&&Qn(e).position!=="fixed"?e.offsetParent:null}function Vg(e){const t=dn(e);let n=Hg(e);for(;n&&oT(n)&&Qn(n).position==="static";)n=Hg(n);return n&&(ao(n)==="html"||ao(n)==="body"&&Qn(n).position==="static"&&!Sh(n))?t:n||function(r){let i=ms(r);for(;yr(i)&&!qp(i);){if(Sh(i))return i;i=ms(i)}return null}(e)||t}function G1(e){const t=ms(e);return qp(t)?e.ownerDocument.body:yr(t)&&Ec(t)?t:G1(t)}function Yr(e,t){var n;t===void 0&&(t=[]);const r=G1(e),i=r===((n=e.ownerDocument)==null?void 0:n.body),a=dn(r);return i?t.concat(a,a.visualViewport||[],Ec(r)?r:[]):t.concat(r,Yr(r))}function qg(e,t,n){return t==="viewport"?Cu(function(r,i){const a=dn(r),l=Jr(r),u=a.visualViewport;let d=l.clientWidth,f=l.clientHeight,m=0,_=0;if(u){d=u.width,f=u.height;const p=H1();(p||!p&&i==="fixed")&&(m=u.offsetLeft,_=u.offsetTop)}return{width:d,height:f,x:m,y:_}}(e,n)):Ln(t)?function(r,i){const a=Wo(r,!0,i==="fixed"),l=a.top+r.clientTop,u=a.left+r.clientLeft,d=yr(r)?Ai(r):{x:1,y:1},f=r.clientWidth*d.x,m=r.clientHeight*d.y,_=u*d.x,p=l*d.y;return{top:p,left:_,right:_+f,bottom:p+m,x:_,y:p,width:f,height:m}}(t,n):Cu(function(r){var i;const a=Jr(r),l=Oc(r),u=(i=r.ownerDocument)==null?void 0:i.body,d=Va(a.scrollWidth,a.clientWidth,u?u.scrollWidth:0,u?u.clientWidth:0),f=Va(a.scrollHeight,a.clientHeight,u?u.scrollHeight:0,u?u.clientHeight:0);let m=-l.scrollLeft+Q1(r);const _=-l.scrollTop;return Qn(u||a).direction==="rtl"&&(m+=Va(a.clientWidth,u?u.clientWidth:0)-d),{width:d,height:f,x:m,y:_}}(Jr(e)))}const aT={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const a=[...n==="clippingAncestors"?function(d,f){const m=f.get(d);if(m)return m;let _=Yr(d).filter(w=>Ln(w)&&ao(w)!=="body"),p=null;const g=Qn(d).position==="fixed";let x=g?ms(d):d;for(;Ln(x)&&!qp(x);){const w=Qn(x),C=Sh(x);(g?C||p:C||w.position!=="static"||!p||!["absolute","fixed"].includes(p.position))?p=w:_=_.filter(y=>y!==x),x=ms(x)}return f.set(d,_),_}(t,this._c):[].concat(n),r],l=a[0],u=a.reduce((d,f)=>{const m=qg(t,f,i);return d.top=Va(m.top,d.top),d.right=Wg(m.right,d.right),d.bottom=Wg(m.bottom,d.bottom),d.left=Va(m.left,d.left),d},qg(t,l,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e;const i=yr(n),a=Jr(n);if(n===a)return t;let l={scrollLeft:0,scrollTop:0},u={x:1,y:1};const d={x:0,y:0};if((i||!i&&r!=="fixed")&&((ao(n)!=="body"||Ec(a))&&(l=Oc(n)),yr(n))){const f=Wo(n);u=Ai(n),d.x=f.x+n.clientLeft,d.y=f.y+n.clientTop}return{width:t.width*u.x,height:t.height*u.y,x:t.x*u.x-l.scrollLeft*u.x+d.x,y:t.y*u.y-l.scrollTop*u.y+d.y}},isElement:Ln,getDimensions:function(e){return V1(e)},getOffsetParent:Vg,getDocumentElement:Jr,getScale:Ai,async getElementRects(e){let{reference:t,floating:n,strategy:r}=e;const i=this.getOffsetParent||Vg,a=this.getDimensions;return{reference:iT(t,await i(n),r),floating:{x:0,y:0,...await a(n)}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>Qn(e).direction==="rtl"};function sT(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:l=!0,animationFrame:u=!1}=r,d=i&&!u,f=d||a?[...Ln(e)?Yr(e):e.contextElement?Yr(e.contextElement):[],...Yr(t)]:[];f.forEach(g=>{d&&g.addEventListener("scroll",n,{passive:!0}),a&&g.addEventListener("resize",n)});let m,_=null;if(l){let g=!0;_=new ResizeObserver(()=>{g||n(),g=!1}),Ln(e)&&!u&&_.observe(e),Ln(e)||!e.contextElement||u||_.observe(e.contextElement),_.observe(t)}let p=u?Wo(e):null;return u&&function g(){const x=Wo(e);!p||x.x===p.x&&x.y===p.y&&x.width===p.width&&x.height===p.height||n(),p=x,m=requestAnimationFrame(g)}(),n(),()=>{var g;f.forEach(x=>{d&&x.removeEventListener("scroll",n),a&&x.removeEventListener("resize",n)}),(g=_)==null||g.disconnect(),_=null,u&&cancelAnimationFrame(m)}}const lT=(e,t,n)=>{const r=new Map,i={platform:aT,...n},a={...i.platform,_c:r};return(async(l,u,d)=>{const{placement:f="bottom",strategy:m="absolute",middleware:_=[],platform:p}=d,g=_.filter(Boolean),x=await(p.isRTL==null?void 0:p.isRTL(u));let w=await p.getElementRects({reference:l,floating:u,strategy:m}),{x:C,y}=Ug(w,f,x),b=f,S={},P=0;for(let z=0;z<g.length;z++){const{name:I,fn:D}=g[z],{x:j,y:V,data:U,reset:R}=await D({x:C,y,initialPlacement:f,placement:b,strategy:m,middlewareData:S,rects:w,platform:p,elements:{reference:l,floating:u}});C=j??C,y=V??y,S={...S,[I]:{...S[I],...U}},R&&P<=50&&(P++,typeof R=="object"&&(R.placement&&(b=R.placement),R.rects&&(w=R.rects===!0?await p.getElementRects({reference:l,floating:u,strategy:m}):R.rects),{x:C,y}=Ug(w,b,x)),z=-1)}return{x:C,y,placement:b,strategy:m,middlewareData:S}})(e,t,{...i,platform:a})},uT=e=>{const{element:t,padding:n}=e;return{name:"arrow",options:e,fn(r){return i=t,Object.prototype.hasOwnProperty.call(i,"current")?t.current!=null?$g({element:t.current,padding:n}).fn(r):{}:t?$g({element:t,padding:n}).fn(r):{};var i}}};var bl=typeof document<"u"?T.useLayoutEffect:T.useEffect;function Ou(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!=0;)if(!Ou(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!=0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!=0;){const a=i[r];if((a!=="_owner"||!e.$$typeof)&&!Ou(e[a],t[a]))return!1}return!0}return e!=e&&t!=t}function cT(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],whileElementsMounted:i,open:a}=e,[l,u]=T.useState({x:null,y:null,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[d,f]=T.useState(r);Ou(d,r)||f(r);const m=T.useRef(null),_=T.useRef(null),p=T.useRef(l),g=function(j){const V=T.useRef(j);return bl(()=>{V.current=j}),V}(i),[x,w]=T.useState(null),[C,y]=T.useState(null),b=T.useCallback(j=>{m.current!==j&&(m.current=j,w(j))},[]),S=T.useCallback(j=>{_.current!==j&&(_.current=j,y(j))},[]),P=T.useCallback(()=>{m.current&&_.current&&lT(m.current,_.current,{middleware:d,placement:t,strategy:n}).then(j=>{const V={...j,isPositioned:!0};z.current&&!Ou(p.current,V)&&(p.current=V,Mi.flushSync(()=>{u(V)}))})},[d,t,n]);bl(()=>{a===!1&&p.current.isPositioned&&(p.current.isPositioned=!1,u(j=>({...j,isPositioned:!1})))},[a]);const z=T.useRef(!1);bl(()=>(z.current=!0,()=>{z.current=!1}),[]),bl(()=>{if(x&&C){if(g.current)return g.current(x,C,P);P()}},[x,C,P,g]);const I=T.useMemo(()=>({reference:m,floating:_,setReference:b,setFloating:S}),[b,S]),D=T.useMemo(()=>({reference:x,floating:C}),[x,C]);return T.useMemo(()=>({...l,update:P,refs:I,elements:D,reference:b,floating:S}),[l,P,I,D,b,S])}var X1=typeof document<"u"?T.useLayoutEffect:T.useEffect;let Wd=!1,dT=0;const Kg=()=>"floating-ui-"+dT++,Qg=Ka["useId".toString()]||function(){const[e,t]=T.useState(()=>Wd?Kg():void 0);return X1(()=>{e==null&&t(Kg())},[]),T.useEffect(()=>{Wd||(Wd=!0)},[]),e},fT=T.createContext(null),hT=T.createContext(null),J1=()=>T.useContext(hT);function Y1(e){return e?.ownerDocument||document}function ex(e){return Y1(e).defaultView||window}function Ao(e){return!!e&&e instanceof ex(e).Element}function Kp(e){return!!e&&e instanceof ex(e).HTMLElement}function pT(e){if(e.mozInputSource===0&&e.isTrusted)return!0;const t=/Android/i;return(t.test(function(){const n=navigator.userAgentData;return n!=null&&n.platform?n.platform:navigator.platform}())||t.test(function(){const n=navigator.userAgentData;return n&&Array.isArray(n.brands)?n.brands.map(r=>{let{brand:i,version:a}=r;return i+"/"+a}).join(" "):navigator.userAgent}()))&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function mT(e){return e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType!=="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0}function Gg(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function Hd(e,t){let n=e.filter(i=>{var a;return i.parentId===t&&((a=i.context)==null?void 0:a.open)})||[],r=n;for(;r.length;)r=e.filter(i=>{var a;return(a=r)==null?void 0:a.some(l=>{var u;return i.parentId===l.id&&((u=i.context)==null?void 0:u.open)})})||[],n=n.concat(r);return n}const _T=Ka["useInsertionEffect".toString()]||(e=>e());function tx(e){const t=T.useRef(()=>{});return _T(()=>{t.current=e}),T.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current==null?void 0:t.current(...r)},[])}function Xg(e){return Kp(e.target)&&e.target.tagName==="BUTTON"}function Jg(e){return function(t){return Kp(t)&&t.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])")}(e)}function Vd(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}const vT={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},gT={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},yT=function(e,t){let{open:n,onOpenChange:r,events:i,nodeId:a,elements:{reference:l,domReference:u,floating:d}}=e,{enabled:f=!0,escapeKey:m=!0,outsidePress:_=!0,outsidePressEvent:p="pointerdown",referencePress:g=!1,referencePressEvent:x="pointerdown",ancestorScroll:w=!1,bubbles:C=!0}=t===void 0?{}:t;const y=J1(),b=(((S=T.useContext(fT))==null?void 0:S.id)||null)!=null;var S;const P=tx(typeof _=="function"?_:()=>!1),z=typeof _=="function"?P:_,I=T.useRef(!1),{escapeKeyBubbles:D,outsidePressBubbles:j}=function(V){var U,R;return V===void 0&&(V=!0),{escapeKeyBubbles:typeof V=="boolean"?V:(U=V.escapeKey)==null||U,outsidePressBubbles:typeof V=="boolean"?V:(R=V.outsidePress)==null||R}}(C);return T.useEffect(()=>{if(!n||!f)return;function V(re){if(re.key==="Escape"){if(!D&&y&&Hd(y.nodesRef.current,a).length>0)return;i.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),r(!1)}}function U(re){const fe=I.current;if(I.current=!1,fe||typeof z=="function"&&!z(re))return;const ee=function(M){return"composedPath"in M?M.composedPath()[0]:M.target}(re);if(Kp(ee)&&d){const M=d.ownerDocument.defaultView||window,oe=ee.scrollWidth>ee.clientWidth,K=ee.scrollHeight>ee.clientHeight;let O=K&&re.offsetX>ee.clientWidth;if(K&&M.getComputedStyle(ee).direction==="rtl"&&(O=re.offsetX<=ee.offsetWidth-ee.clientWidth),O||oe&&re.offsetY>ee.clientHeight)return}const ue=y&&Hd(y.nodesRef.current,a).some(M=>{var oe;return Vd(re,(oe=M.context)==null?void 0:oe.elements.floating)});Vd(re,d)||Vd(re,u)||ue||!j&&y&&Hd(y.nodesRef.current,a).length>0||(i.emit("dismiss",{type:"outsidePress",data:{returnFocus:b?{preventScroll:!0}:pT(re)||mT(re)}}),r(!1))}function R(){r(!1)}const Y=Y1(d);m&&Y.addEventListener("keydown",V),z&&Y.addEventListener(p,U);let _e=[];return w&&(Ao(u)&&(_e=Yr(u)),Ao(d)&&(_e=_e.concat(Yr(d))),!Ao(l)&&l&&l.contextElement&&(_e=_e.concat(Yr(l.contextElement)))),_e=_e.filter(re=>{var fe;return re!==((fe=Y.defaultView)==null?void 0:fe.visualViewport)}),_e.forEach(re=>{re.addEventListener("scroll",R,{passive:!0})}),()=>{m&&Y.removeEventListener("keydown",V),z&&Y.removeEventListener(p,U),_e.forEach(re=>{re.removeEventListener("scroll",R)})}},[d,u,l,m,z,p,i,y,a,n,r,w,f,D,j,b]),T.useEffect(()=>{I.current=!1},[z,p]),T.useMemo(()=>f?{reference:{[vT[x]]:()=>{g&&(i.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),r(!1))}},floating:{[gT[p]]:()=>{I.current=!0}}}:{},[f,i,g,p,x,r])};function Qp(e){return T.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})},e)}function bT(e){e===void 0&&(e={});const{open:t=!1,onOpenChange:n,nodeId:r}=e,i=cT(e),a=J1(),l=T.useRef(null),u=T.useRef({}),d=T.useState(()=>function(){const y=new Map;return{emit(b,S){var P;(P=y.get(b))==null||P.forEach(z=>z(S))},on(b,S){y.set(b,[...y.get(b)||[],S])},off(b,S){y.set(b,(y.get(b)||[]).filter(P=>P!==S))}}}())[0],[f,m]=T.useState(null),_=T.useCallback(y=>{const b=Ao(y)?{getBoundingClientRect:()=>y.getBoundingClientRect(),contextElement:y}:y;i.refs.setReference(b)},[i.refs]),p=T.useCallback(y=>{(Ao(y)||y===null)&&(l.current=y,m(y)),(Ao(i.refs.reference.current)||i.refs.reference.current===null||y!==null&&!Ao(y))&&i.refs.setReference(y)},[i.refs]),g=T.useMemo(()=>({...i.refs,setReference:p,setPositionReference:_,domReference:l}),[i.refs,p,_]),x=T.useMemo(()=>({...i.elements,domReference:f}),[i.elements,f]),w=tx(n),C=T.useMemo(()=>({...i,refs:g,elements:x,dataRef:u,nodeId:r,events:d,open:t,onOpenChange:w}),[i,r,d,t,w,g,x]);return X1(()=>{const y=a?.nodesRef.current.find(b=>b.id===r);y&&(y.context=C)}),T.useMemo(()=>({...i,context:C,refs:g,reference:p,positionReference:_}),[i,g,C,p,_])}function qd(e,t,n){const r=new Map;return{...n==="floating"&&{tabIndex:-1},...e,...t.map(i=>i?i[n]:null).concat(e).reduce((i,a)=>(a&&Object.entries(a).forEach(l=>{let[u,d]=l;var f;u.indexOf("on")===0?(r.has(u)||r.set(u,[]),typeof d=="function"&&((f=r.get(u))==null||f.push(d),i[u]=function(){for(var m,_=arguments.length,p=new Array(_),g=0;g<_;g++)p[g]=arguments[g];(m=r.get(u))==null||m.forEach(x=>x(...p))})):i[u]=d}),i),{})}}var Tu,Ph={popover:"Popover-module_popover__E9K9X",default:"Popover-module_default__TlPJp",info:"Popover-module_info__VKCAP",warning:"Popover-module_warning__o27i9",danger:"Popover-module_danger__9bIyx",arrow:"Popover-module_arrow__5A-0e"};function xT(e){var{variant:t=Tu.Default,arrow:n,initialOpen:r,placement:i,offset:a,open:l,onOpenChange:u}=e,d=Xi(e,["variant","arrow","initialOpen","placement","offset","open","onOpenChange"]);const[f,m]=T.useState(r),_=l??f,p=u??m,g=T.useRef(null),x=bT({placement:i,open:_,onOpenChange:p,whileElementsMounted:sT,middleware:[rT(a??(n?12:4)),nT({padding:5,fallbackPlacements:["bottom","top"]}),(w={padding:5},w===void 0&&(w={}),{name:"shift",options:w,async fn(z){const{x:I,y:D,placement:j}=z,{mainAxis:V=!0,crossAxis:U=!1,limiter:R={fn:K=>{let{x:O,y:B}=K;return{x:O,y:B}}},...Y}=w,_e={x:I,y:D},re=await $1(z,Y),fe=Ls(Io(j)),ee=fe==="x"?"y":"x";let ue=_e[fe],M=_e[ee];if(V){const K=fe==="y"?"bottom":"right";ue=kh(ue+re[fe==="y"?"top":"left"],ue,ue-re[K])}if(U){const K=ee==="y"?"bottom":"right";M=kh(M+re[ee==="y"?"top":"left"],M,M-re[K])}const oe=R.fn({...z,[fe]:ue,[ee]:M});return{...oe,data:{x:oe.x-I,y:oe.y-D}}}}),uT({element:g,padding:8})]});var w;const C=x.context,y=function(z,I){let{open:D,onOpenChange:j,dataRef:V,refs:U}=z,{enabled:R=!0,event:Y="click",toggle:_e=!0,ignoreMouse:re=!1,keyboardHandlers:fe=!0}=I===void 0?{}:I;const ee=T.useRef();return T.useMemo(()=>R?{reference:{onPointerDown(ue){ee.current=ue.pointerType},onMouseDown(ue){ue.button===0&&(Gg(ee.current,!0)&&re||Y!=="click"&&(D?!_e||V.current.openEvent&&V.current.openEvent.type!=="mousedown"||j(!1):(ue.preventDefault(),j(!0)),V.current.openEvent=ue.nativeEvent))},onClick(ue){V.current.__syncReturnFocus||(Y==="mousedown"&&ee.current?ee.current=void 0:Gg(ee.current,!0)&&re||(D?!_e||V.current.openEvent&&V.current.openEvent.type!=="click"||j(!1):j(!0),V.current.openEvent=ue.nativeEvent))},onKeyDown(ue){ee.current=void 0,fe&&(Xg(ue)||(ue.key!==" "||Jg(U.domReference.current)||ue.preventDefault(),ue.key==="Enter"&&(D?_e&&j(!1):j(!0))))},onKeyUp(ue){fe&&(Xg(ue)||Jg(U.domReference.current)||ue.key===" "&&(D?_e&&j(!1):j(!0)))}}}:{},[R,V,Y,re,fe,U,_e,D,j])}(C,{enabled:l==null}),b=yT(C,{referencePress:!1}),S=function(z,I){let{open:D}=z,{enabled:j=!0,role:V="dialog"}=I===void 0?{}:I;const U=Qg(),R=Qg();return T.useMemo(()=>{const Y={id:U,role:V};return j?V==="tooltip"?{reference:{"aria-describedby":D?U:void 0},floating:Y}:{reference:{"aria-expanded":D?"true":"false","aria-haspopup":V==="alertdialog"?"dialog":V,"aria-controls":D?U:void 0,...V==="listbox"&&{role:"combobox"},...V==="menu"&&{id:R}},floating:{...Y,...V==="menu"&&{"aria-labelledby":R}}}:{}},[j,V,D,U,R])}(C),P=function(z){z===void 0&&(z=[]);const I=z,D=T.useCallback(U=>qd(U,z,"reference"),I),j=T.useCallback(U=>qd(U,z,"floating"),I),V=T.useCallback(U=>qd(U,z,"item"),I);return T.useMemo(()=>({getReferenceProps:D,getFloatingProps:j,getItemProps:V}),[D,j,V])}([y,b,S]);return T.useMemo(()=>Object.assign(Object.assign(Object.assign(Object.assign({open:_,setOpen:p},P),x),d),{arrow:n,arrowRef:g,variant:t}),[_,p,P,x,d,n,g,t])}nt(`.Popover-module_popover__E9K9X {\r
  width: max-content;\r
  z-index: 2;\r
  padding: 12px;\r
  max-width: calc(100vw - 20px);\r
  border: 1px solid gray;\r
  border-radius: 3px;\r
  box-shadow: 0 3px 6px 0 #00000033;\r
}\r
\r
.Popover-module_popover__E9K9X:focus-visible {\r
  outline: var(--semantic-tab_focus-outline-color) solid\r
  var(--semantic-tab_focus-outline-width);\r
  outline-offset: var(--semantic-tab_focus-outline-offset);\r
}\r
\r
.Popover-module_popover__E9K9X:focus:not(:focus-visible) {\r
  outline: none;\r
}\r
\r
.Popover-module_popover__E9K9X.Popover-module_default__TlPJp {\r
  background-color: #FFFFFF;\r
  border-color: #68707C;\r
}\r
\r
.Popover-module_popover__E9K9X.Popover-module_info__VKCAP {\r
  background-color: #E6EFF8;\r
  border-color: #004C8F;\r
}\r
\r
.Popover-module_popover__E9K9X.Popover-module_warning__o27i9 {\r
  background-color: #FFFBE6;\r
  border-color: #CC7005;\r
}\r
\r
.Popover-module_popover__E9K9X.Popover-module_danger__9bIyx {\r
  background-color: #F9D5DB;\r
  border-color: #B3253A;\r
}\r
\r
.Popover-module_arrow__5A-0e {\r
  position: absolute;\r
  box-sizing: content-box;\r
  z-index: -1;\r
  transform: rotate(45deg);\r
  background-color: inherit;\r
  border: 1px solid;\r
  /* Set border color separately in order to make inheritance work. */\r
  border-color: inherit;\r
  width: 12px;\r
  height: 12px;\r
}\r
\r
.Popover-module_popover__E9K9X[data-placement^="top"] > .Popover-module_arrow__5A-0e {\r
  box-shadow: 3px 3px 6px 0 #00000033;\r
  clip-path: inset(0px -10px -10px 0px);\r
  border-left-color: transparent;\r
  border-top-color: transparent;\r
}\r
\r
.Popover-module_popover__E9K9X[data-placement^="bottom"] > .Popover-module_arrow__5A-0e {\r
  clip-path: inset(-10px 0 0 -10px);\r
  border-bottom-color: transparent;\r
  border-right-color: transparent;\r
}\r
\r
.Popover-module_popover__E9K9X[data-placement^="left"] > .Popover-module_arrow__5A-0e {\r
  box-shadow: 1px 3px 6px 0 #00000033;\r
  clip-path: inset(-10px -10px 0 0);\r
  border-left-color: transparent;\r
  border-bottom-color: transparent;\r
}\r
\r
.Popover-module_popover__E9K9X[data-placement^="right"] > .Popover-module_arrow__5A-0e {\r
  box-shadow: -1px 3px 6px 0 #00000033;\r
  clip-path: inset(0 0 -10px -10px);\r
  border-right-color: transparent;\r
  border-top-color: transparent;\r
}\r
`),function(e){e.Default="default",e.Info="info",e.Warning="warning",e.Danger="danger"}(Tu||(Tu={}));const nx=T.createContext(null),Gp=()=>{const e=T.useContext(nx);if(e==null)throw new Error("Popover components must be wrapped in <Popover />");return e};function rx(e){var{children:t,trigger:n,arrow:r=!0,initialOpen:i=!1}=e,a=Xi(e,["children","trigger","arrow","initialOpen"]);const l=xT(Object.assign({arrow:r,initialOpen:i},a));return Z.createElement(nx.Provider,{value:l},Z.createElement(wT,null,n),Z.createElement(kT,null,t,l.arrow&&Z.createElement(ST,null)))}rx.displayName="Popover";const wT=T.forwardRef(function(e,t){var{children:n}=e,r=Xi(e,["children"]);const i=Gp(),a=n.ref,l=Qp([i.reference,t,a]);return T.isValidElement(n)?T.cloneElement(n,i.getReferenceProps(Object.assign(Object.assign(Object.assign({ref:l},r),n.props),{"data-state":i.open?"open":"closed","aria-expanded":i.open}))):null}),kT=T.forwardRef(function(e,t){var n,r;const i=Gp(),a=Qp([i.floating,t]);return i.open?Z.createElement("div",Object.assign({ref:a,style:{position:i.strategy,top:(n=i.y)!==null&&n!==void 0?n:0,left:(r=i.x)!==null&&r!==void 0?r:0},"data-placement":i.placement,className:St(Ph.popover,Ph[i.variant],i.className)},i.getFloatingProps(e),{tabIndex:-1,role:"dialog"}),e.children):null}),ST=T.forwardRef(function(e,t){var n,r;const i=Gp(),a=Qp([i.arrowRef,t]),l=(n=i.middlewareData.arrow)===null||n===void 0?void 0:n.x,u=(r=i.middlewareData.arrow)===null||r===void 0?void 0:r.y,d={top:"bottom",right:"left",bottom:"top",left:"right"}[i.placement.split("-")[0]];return Z.createElement("div",Object.assign({ref:a,style:Object.assign(Object.assign(Object.assign({},l!=null?{left:l}:{}),u!=null?{top:u}:{}),d?{[d]:"-7px"}:{}),className:Ph.arrow},e))});var PT="utility-module_visuallyHidden__R-C67";nt(`/**\r
 * Visually hide an element, but leave it available for screen readers\r
 */\r
.utility-module_visuallyHidden__R-C67 {\r
	border: 0;\r
	clip: rect(0 0 0 0);\r
	height: 1px;\r
	overflow: hidden;\r
	padding: 0;\r
	position: absolute;\r
	white-space: nowrap;\r
	width: 1px;\r
}\r
`);var Ho,wo={helpTextButton:"HelpText-module_helpTextButton__Ir4Uk",helpTextIconFilled:"HelpText-module_helpTextIconFilled__SjZ8e",helpTextIcon:"HelpText-module_helpTextIcon__ex2WU",helpTextContent:"HelpText-module_helpTextContent__EDHac",small:"HelpText-module_small__Y44D4",xsmall:"HelpText-module_xsmall__peaFV"};nt(`.HelpText-module_helpTextButton__Ir4Uk {\r
  all: initial;\r
  background-color: transparent;\r
  border-radius: 50px;\r
  padding: 0;\r
  cursor: pointer;\r
  display: flex;\r
  border: none;\r
}\r
\r
.HelpText-module_helpTextButton__Ir4Uk:focus-visible {\r
  outline: var(--semantic-tab_focus-outline-color) solid\r
    var(--semantic-tab_focus-outline-width);\r
  outline-offset: var(--semantic-tab_focus-outline-offset);\r
  color: var(--colors-blue-700);\r
}\r
\r
.HelpText-module_helpTextButton__Ir4Uk:focus:not(:focus-visible) {\r
  outline: none;\r
}\r
\r
.HelpText-module_helpTextIconFilled__SjZ8e {\r
  display: none;\r
}\r
\r
.HelpText-module_helpTextButton__Ir4Uk:where(:hover, :focus-visible, [data-state^="open"]) > .HelpText-module_helpTextIcon__ex2WU {\r
  display: none;\r
}\r
\r
.HelpText-module_helpTextButton__Ir4Uk:where(:hover, :focus-visible, [data-state^="open"]) > .HelpText-module_helpTextIconFilled__SjZ8e {\r
  display: inline-block;\r
}\r
\r
.HelpText-module_helpTextIcon__ex2WU {\r
  color: var(--colors-blue-700);\r
  width: var(--help_text-icon-width);\r
  height: var(--help_text-icon-height);\r
}\r
\r
.HelpText-module_helpTextContent__EDHac {\r
  font-size: var(--font_size-300);\r
  line-height: var(--typography-default-line-height);\r
  width: fit-content;\r
  max-width: 700px;\r
}\r
\r
.HelpText-module_helpTextIcon__ex2WU.HelpText-module_small__Y44D4 {\r
  --help_text-icon-width: 24px;\r
  --help_text-icon-height: 24px;\r
}\r
\r
.HelpText-module_helpTextIcon__ex2WU.HelpText-module_xsmall__peaFV {\r
  --help_text-icon-width: 18px;\r
  --help_text-icon-height: 18px;\r
}\r
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Ho||(Ho={}));const Xp=e=>{var{className:t,children:n,title:r,placement:i="right",onClick:a,size:l=Ho.Small}=e,u=Xi(e,["className","children","title","placement","onClick","size"]);const[d,f]=T.useState(!1);return Z.createElement(rx,{variant:Tu.Info,placement:i,open:d,onOpenChange:f,className:wo.helpTextContent,trigger:Z.createElement("button",Object.assign({},u,{className:St(wo.helpTextButton,t),onClick:m=>{f(_=>!_),a?.(m)}}),Z.createElement(ZO,{className:St(wo.helpTextIcon,wo.helpTextIconFilled,wo[l],t),"data-state":d?"open":"closed","aria-hidden":!0}),Z.createElement(jO,{className:St(wo.helpTextIcon,wo[l],t),"data-state":d?"open":"closed","aria-hidden":!0}),Z.createElement("span",{className:PT},r))},n)};Xp.displayName="HelpText";var Vi,Lr={fieldSet:"FieldSet-module_fieldSet__GgktD",xsmall:"FieldSet-module_xsmall__y9foq",legendAndHelpText:"FieldSet-module_legendAndHelpText__WDZ-j",legend:"FieldSet-module_legend__PjhoV",legendContent:"FieldSet-module_legendContent__nOeHK",description:"FieldSet-module_description__XKHS-",content:"FieldSet-module_content__aZp-0",errorMessage:"FieldSet-module_errorMessage__nDaJ7"};nt(`.FieldSet-module_fieldSet__GgktD {\r
  --color: var(--component-checkbox-color-text-default);\r
  --content-margin_top: var(--component-fieldset-space-gap-y-small);\r
  --description-color: var(--component-field_description-color-text-default);\r
  --description-margin_top: var(--component-field_description-space-top-small);\r
  --error_message-margin_top: var(--component-fieldset-space-gap-y-small);\r
  --help_text-gap: var(--component-field_description-space-top-small);\r
  --font_size: var(--component-checkbox-font_size-sm);\r
\r
  color: var(--color);\r
  border: 0;\r
  font-size: var(--font_size);\r
  line-height: var(--typography-default-line-height);\r
  margin: 0;\r
  padding: 0;\r
}\r
\r
.FieldSet-module_xsmall__y9foq {\r
  --content-margin_top: var(--component-fieldset-space-gap-y-xsmall);\r
  --description-margin_top: var(--component-field_description-space-top-xsmall);\r
  --error_message-margin_top: var(--component-fieldset-space-gap-y-xsmall);\r
  --help_text-gap: var(--component-field_description-space-top-xsmall);\r
  --font_size: var(--component-checkbox-font_size-xs);\r
}\r
\r
.FieldSet-module_fieldSet__GgktD:disabled {\r
  opacity: var(--opacity-disabled);\r
}\r
\r
.FieldSet-module_fieldSet__GgktD:disabled * {\r
  opacity: 1;\r
}\r
\r
.FieldSet-module_legendAndHelpText__WDZ-j {\r
  display: flex;\r
  gap: var(--help_text-gap);\r
  padding: 0;\r
}\r
\r
.FieldSet-module_legend__PjhoV {\r
  padding: 0;\r
}\r
\r
.FieldSet-module_legendContent__nOeHK {\r
  font-weight: bold;\r
}\r
\r
.FieldSet-module_description__XKHS- {\r
  color: var(--description-color);\r
  margin: 0;\r
}\r
\r
.FieldSet-module_legend__PjhoV + .FieldSet-module_description__XKHS- {\r
  margin-top: var(--description-margin_top);\r
}\r
\r
.FieldSet-module_content__aZp-0:not(:first-child) {\r
  margin-top: var(--content-margin_top);\r
}\r
\r
.FieldSet-module_errorMessage__nDaJ7 {\r
  margin-top: var(--error_message-margin_top);\r
}\r
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Vi||(Vi={}));const Jp=({children:e,className:t,contentClassName:n,description:r,disabled:i,error:a,helpText:l,legend:u,size:d=Vi.Small})=>{const f=d===Vi.Xsmall?Ho.Xsmall:Ho.Small;return Z.createElement("fieldset",{className:St(Lr.fieldSet,Lr[d],t),disabled:i},u&&Z.createElement("legend",{className:Lr.legend},Z.createElement("span",{className:Lr.legendAndHelpText},Z.createElement("span",{className:Lr.legendContent},u),l&&Z.createElement(Xp,{size:f,title:`Help text for ${u}`},l))),r&&Z.createElement("p",{className:Lr.description},r),Z.createElement("div",{className:St(Lr.content,n)},e),a&&Z.createElement("div",{className:Lr.errorMessage},Z.createElement(M1,null,a)))};Jp.displayName="FieldSet";var _s,wn={template:"CheckboxRadioTemplate-module_template__CbnTf",xsmall:"CheckboxRadioTemplate-module_xsmall__JkKoU",small:"CheckboxRadioTemplate-module_small__7fCnT",disabled:"CheckboxRadioTemplate-module_disabled__AUMha",clickable:"CheckboxRadioTemplate-module_clickable__iw4S2",inputWrapper:"CheckboxRadioTemplate-module_inputWrapper__K4Urn",input:"CheckboxRadioTemplate-module_input__O2CzZ",visibleBox:"CheckboxRadioTemplate-module_visibleBox__mj4RB",labelAndDescription:"CheckboxRadioTemplate-module_labelAndDescription__NcntT",label:"CheckboxRadioTemplate-module_label__hsc7R",labelAndHelpText:"CheckboxRadioTemplate-module_labelAndHelpText__JIDAJ",description:"CheckboxRadioTemplate-module_description__FX9dz"};nt(`.CheckboxRadioTemplate-module_template__CbnTf {\r
  --click-cursor: pointer;\r
  --description-color: var(--component-field_description-color-text-default);\r
  --label-color: var(--component-checkbox-color-text-default);\r
  --opacity: 1;\r
\r
  border-radius: var(--input_box-border_radius);\r
  display: inline-flex;\r
  flex-direction: row;\r
  font-size: var(--font_size);\r
  gap: var(--gap);\r
  line-height: var(--typography-default-line-height);\r
  opacity: var(--opacity);\r
}\r
\r
.CheckboxRadioTemplate-module_template__CbnTf.CheckboxRadioTemplate-module_xsmall__JkKoU {\r
  --description-margin_top: var(--component-field_description-space-top-xsmall);\r
  --font_size: var(--component-checkbox-font_size-xs);\r
  --gap: var(--component-checkbox-space-gap-xsmall);\r
}\r
\r
.CheckboxRadioTemplate-module_template__CbnTf.CheckboxRadioTemplate-module_small__7fCnT {\r
  --description-margin_top: var(--component-field_description-space-top-small);\r
  --font_size: var(--component-checkbox-font_size-sm);\r
  --gap: var(--component-checkbox-space-gap-small);\r
}\r
\r
.CheckboxRadioTemplate-module_template__CbnTf:not(.CheckboxRadioTemplate-module_disabled__AUMha):hover {\r
  --label-color: var(--component-checkbox-color-text-hover);\r
}\r
\r
.CheckboxRadioTemplate-module_template__CbnTf.CheckboxRadioTemplate-module_disabled__AUMha {\r
  --click-cursor: auto;\r
  --opacity: var(--opacity-disabled);\r
}\r
\r
.CheckboxRadioTemplate-module_clickable__iw4S2  {\r
  cursor: var(--click-cursor);\r
}\r
\r
.CheckboxRadioTemplate-module_inputWrapper__K4Urn {\r
  display: inline-block;\r
  height: var(--input_box-size);\r
  position: relative;\r
}\r
\r
.CheckboxRadioTemplate-module_input__O2CzZ {\r
  height: 0;\r
  opacity: 0;\r
  position: absolute;\r
  width: 0;\r
}\r
\r
.CheckboxRadioTemplate-module_visibleBox__mj4RB {\r
  display: inline-block;\r
  flex: 0 0 var(--input_box-size);\r
  height: var(--input_box-size);\r
  position: relative;\r
  width: var(--input_box-size);\r
}\r
\r
.CheckboxRadioTemplate-module_labelAndDescription__NcntT {\r
  display: inline-flex;\r
  flex-direction: column;\r
  gap: var(--description-margin_top);\r
\r
  /* Center-align input box with the first line in the label */\r
  margin-top: calc(\r
    (\r
        var(--input_box-size) -\r
          (var(--typography-default-line-height) * var(--font_size))\r
      ) / 2\r
  );\r
}\r
\r
.CheckboxRadioTemplate-module_label__hsc7R {\r
  color: var(--label-color);\r
}\r
\r
.CheckboxRadioTemplate-module_labelAndHelpText__JIDAJ {\r
  display: inline-flex;\r
  flex-direction: row;\r
  gap: var(--gap);\r
  align-items: center;\r
}\r
\r
.CheckboxRadioTemplate-module_description__FX9dz {\r
  color: var(--description-color);\r
}\r
\r
@supports not selector(:has(:focus-visible)) {\r
  .CheckboxRadioTemplate-module_template__CbnTf:not(.CheckboxRadioTemplate-module_disabled__AUMha):focus-within {\r
    outline: 2px solid var(--semantic-tab_focus-outline-color);\r
    outline-offset: 2px;\r
  }\r
}\r
\r
.CheckboxRadioTemplate-module_template__CbnTf:not(.CheckboxRadioTemplate-module_disabled__AUMha):not(:has(button:focus-visible)):has(:focus-visible) {\r
  outline: 2px solid var(--semantic-tab_focus-outline-color);\r
  outline-offset: 2px;\r
}\r
`),function(e){e.Xsmall="xsmall",e.Small="small"}(_s||(_s={}));const CT=({checked:e,children:t,className:n,description:r,disabled:i,helpText:a,hideInput:l,hideLabel:u,inputId:d,label:f,name:m,onChange:_,presentation:p,size:g,type:x,value:w})=>{const C=T.useId(),y=d??"input-"+C,b=f?`${y}-label`:void 0,S=r?`${y}-description`:void 0,P=f&&!u,z=!p||typeof f!="object"&&typeof r!="object",I=g===_s.Xsmall?Ho.Xsmall:Ho.Small;return Z.createElement(Yg,{className:St(wn.template,wn[g],i&&wn.disabled,n),htmlFor:y,isLabel:z},!l&&Z.createElement(Yg,{className:wn.inputWrapper,htmlFor:y,isLabel:!z},Z.createElement("input",{"aria-describedby":S,"aria-label":P||typeof f!="string"?void 0:f,"aria-labelledby":P?b:void 0,checked:e!=null&&e,className:wn.input,disabled:i,id:y,name:m,onChange:i?void 0:_,role:p?"presentation":void 0,type:x,value:w}),Z.createElement("span",{className:wn.visibleBox},t)),(P||r)&&Z.createElement("span",{className:wn.labelAndDescription},P&&Z.createElement("span",{className:wn.labelAndHelpText},Z.createElement("span",{className:wn.label,id:b},f),a&&Z.createElement(Xp,{size:I,title:`Help text for ${f}`},a)),r&&Z.createElement("span",{className:wn.description,id:S},r)))},Yg=({children:e,className:t,htmlFor:n,isLabel:r})=>r?Z.createElement("label",{className:t+" "+wn.clickable,htmlFor:n},e):Z.createElement("span",{className:t},e);var ET="Checkbox-module_checkbox__lSeQj",OT="Checkbox-module_compact__Cl41-",TT="Checkbox-module_error__E-bmD",LT="Checkbox-module_checked__3yAq6",zT="Checkbox-module_disabled__x7-eg",RT="Checkbox-module_readOnly__FamUn",AT="Checkbox-module_visibleBox__G7q8H",NT="Checkbox-module_checkmark__ES9N8";nt(`.Checkbox-module_checkbox__lSeQj {\r
  /* Internal variables */\r
  --checkbox-background_color: var(\r
    --component-checkbox-color-background-default\r
  );\r
  --checkbox-border_color: var(--component-checkbox-color-border-default);\r
  --checkbox-border_radius: var(--interactive_components-border_radius-normal);\r
  --checkbox-border_width: var(--component-checkbox-border_width-small);\r
  --checkbox-checkmark-display: none;\r
  --checkbox-height: var(--component-checkbox-size-height-small);\r
  --checkbox-width: var(--component-checkbox-size-width-small);\r
\r
  /* Variables used by CheckboxRadioTemplate */\r
  --input_box-size: var(--checkbox-height);\r
  --input_box-border_radius: var(--checkbox-border_radius);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj.Checkbox-module_compact__Cl41- {\r
  --checkbox-border_width: var(--component-checkbox-border_width-xsmall);\r
  --checkbox-height: var(--component-checkbox-size-height-xsmall);\r
  --checkbox-width: var(--component-checkbox-size-width-xsmall);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj.Checkbox-module_error__E-bmD {\r
  --checkbox-background_color: var(--component-checkbox-color-background-error);\r
  --checkbox-border_color: var(--component-checkbox-color-border-error);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj.Checkbox-module_checked__3yAq6 {\r
  --checkbox-checkmark-display: inline-block;\r
  --checkbox-background_color: var(\r
    --component-checkbox-color-background-checked\r
  );\r
  --checkbox-border_color: var(--component-checkbox-color-border-checked);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj:not(.Checkbox-module_disabled__x7-eg, .Checkbox-module_checked__3yAq6):hover {\r
  --checkbox-background_color: var(--component-checkbox-color-background-hover);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj:not(.Checkbox-module_disabled__x7-eg, .Checkbox-module_error__E-bmD, .Checkbox-module_checked__3yAq6):hover {\r
  --checkbox-border_color: var(--component-checkbox-color-border-hover);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj.Checkbox-module_readOnly__FamUn {\r
  --cursor: auto;\r
}\r
\r
.Checkbox-module_visibleBox__G7q8H {\r
  background-color: var(--checkbox-background_color);\r
  border-color: var(--checkbox-border_color);\r
  border-radius: var(--checkbox-border_radius);\r
  border-style: solid;\r
  border-width: var(--checkbox-border_width);\r
  box-sizing: border-box;\r
  display: inline-block;\r
  height: var(--checkbox-height);\r
  width: var(--checkbox-width);\r
}\r
\r
.Checkbox-module_checkmark__ES9N8 {\r
  background-color: white;\r
  clip-path: polygon(\r
    47.11% 56.51%,\r
    30.37% 38.94%,\r
    21.5% 48.09%,\r
    47.11% 74.54%,\r
    81.5% 39.16%,\r
    72.63% 30%\r
  );\r
  display: var(--checkbox-checkmark-display);\r
  height: 100%;\r
  width: 100%;\r
}\r
`);const ur=({checkboxId:e,checked:t,compact:n,description:r,disabled:i,error:a,helpText:l,hideLabel:u,label:d,name:f,onChange:m,presentation:_,readOnly:p})=>Z.createElement(CT,{checked:t,className:St(ET,t&&LT,a&&TT,i&&zT,n&&OT,p&&RT),description:r,disabled:i,helpText:l,hideInput:p,hideLabel:u,inputId:e,label:d,name:f,onChange:m,presentation:_,size:n?_s.Xsmall:_s.Small,type:"checkbox"},Z.createElement("span",{className:AT},Z.createElement("span",{className:NT})));ur.displayName="Checkbox";var Ni,Kd={checkboxGroup:"CheckboxGroup-module_checkboxGroup__LIGFC",compact:"CheckboxGroup-module_compact__IPuN8",vertical:"CheckboxGroup-module_vertical__R-l07",horizontal:"CheckboxGroup-module_horizontal__myCqF"};nt(`.CheckboxGroup-module_checkboxGroup__LIGFC {\r
  --gap-x: var(--component-checkbox-group-space-gap-x-small);\r
  --gap-y: var(--component-checkbox-group-space-gap-y-small);\r
\r
  column-gap: var(--gap-x);\r
  display: flex;\r
  flex-wrap: wrap;\r
  row-gap: var(--gap-y);\r
}\r
\r
.CheckboxGroup-module_checkboxGroup__LIGFC.CheckboxGroup-module_compact__IPuN8 {\r
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);\r
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);\r
}\r
\r
.CheckboxGroup-module_checkboxGroup__LIGFC.CheckboxGroup-module_vertical__R-l07 {\r
  flex-direction: column;\r
}\r
\r
.CheckboxGroup-module_checkboxGroup__LIGFC.CheckboxGroup-module_horizontal__myCqF {\r
  flex-direction: row;\r
}\r
`),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(Ni||(Ni={}));const BT=(e,t)=>{switch(t.type){case"check":return e.concat([t.name]);case"uncheck":return e.filter(n=>n!==t.name);case"reset":return t.state}},ey=e=>e.filter(({checked:t})=>t).map(({name:t})=>t),Il=({compact:e,description:t,disabled:n,error:r,helpText:i,items:a,legend:l,onChange:u,presentation:d,variant:f=Ni.Vertical})=>{if(!F1(a.map(g=>g.name)))throw Error("Each name in the checkbox group must be unique.");const[m,_]=T.useReducer(BT,ey(a));T.useEffect(()=>_({type:"reset",state:ey(a)}),[a]);const p=HO(m);return Pu(()=>{u&&!n&&!D1(p,m)&&u(m)},[m,u,n]),Z.createElement(Jp,{contentClassName:St(Kd.checkboxGroup,Kd[f],e&&Kd.compact),description:t,disabled:n,error:r,helpText:i,legend:l,size:e?Vi.Xsmall:Vi.Small},a.map(g=>Z.createElement(ur,{checkboxId:g.checkboxId,checked:m.includes(g.name),compact:e,description:g.description,disabled:n||g.disabled,error:!!r,helpText:g.helpText,key:g.name,label:g.label,name:g.name,onChange:x=>{_({type:x.target.checked?"check":"uncheck",name:g.name})},presentation:d})))};Il.displayName="CheckboxGroup";var ty;nt(`.RadioButton-module_radio__-lcP- {\r
  /* Internal variables */\r
  --radio-background_color: var(--component-checkbox-color-background-default);\r
  --radio-border_color: var(--component-checkbox-color-border-default);\r
  --radio-border_width: var(--component-checkbox-border_width-small);\r
  --radio-checkmark-color: var(--colors-blue-700);\r
  --radio-checkmark-display: none;\r
  --radio-size: var(--component-checkbox-size-width-small);\r
\r
  /* Variables used by CheckboxRadioTemplate */\r
  --input_box-border_radius: calc(var(--radio-size) / 2);\r
  --input_box-size: var(--radio-size);\r
}\r
\r
.RadioButton-module_radio__-lcP-.RadioButton-module_small__bDKxm {\r
  --radio-size: var(--component-checkbox-size-width-small);\r
}\r
\r
.RadioButton-module_radio__-lcP-.RadioButton-module_xsmall__i7xp0 {\r
  --radio-size: var(--component-checkbox-size-width-xsmall);\r
}\r
\r
.RadioButton-module_radio__-lcP-.RadioButton-module_error__WeFrR {\r
  --radio-background_color: var(--component-checkbox-color-background-error);\r
  --radio-border_color: var(--component-checkbox-color-border-error);\r
}\r
\r
.RadioButton-module_radio__-lcP-.RadioButton-module_checked__Uc9Re {\r
  --radio-checkmark-display: inline-block;\r
}\r
\r
.RadioButton-module_radio__-lcP-.RadioButton-module_checked__Uc9Re:not(.RadioButton-module_error__WeFrR) {\r
  --radio-border_color: var(--component-checkbox-color-border-checked);\r
}\r
\r
.RadioButton-module_radio__-lcP-:not(.RadioButton-module_disabled__thDlK, .RadioButton-module_checked__Uc9Re):hover {\r
  --radio-background_color: var(--component-checkbox-color-background-hover);\r
}\r
\r
.RadioButton-module_radio__-lcP-:not(.RadioButton-module_disabled__thDlK, .RadioButton-module_error__WeFrR, .RadioButton-module_checked__Uc9Re):hover {\r
  --radio-border_color: var(--component-checkbox-color-border-hover);\r
}\r
\r
.RadioButton-module_visibleButton__QmmNn {\r
  background-color: var(--radio-background_color);\r
  border-color: var(--radio-border_color);\r
  border-radius: 50%;\r
  border-style: solid;\r
  border-width: var(--radio-border_width);\r
  box-sizing: border-box;\r
  display: inline-block;\r
  height: var(--radio-size);\r
  width: var(--radio-size);\r
}\r
\r
.RadioButton-module_checkmark__fHNs0 {\r
  --radio-checkmark-size: 80%;\r
  background-color: var(--radio-checkmark-color);\r
  border-radius: 50%;\r
  display: var(--radio-checkmark-display);\r
  height: var(--radio-checkmark-size);\r
  margin: calc(\r
    (var(--radio-size) - var(--radio-checkmark-size)) / 2 -\r
      var(--radio-border_width)\r
  );\r
  width: var(--radio-checkmark-size);\r
}\r
`),function(e){e.Xsmall="xsmall",e.Small="small"}(ty||(ty={}));var ny,ry;nt(`.RadioGroup-module_radioGroup__pO2pz {\r
  column-gap: var(--gap-x);\r
  display: flex;\r
  flex-wrap: wrap;\r
  row-gap: var(--gap-y);\r
}\r
\r
.RadioGroup-module_radioGroup__pO2pz.RadioGroup-module_xsmall__wwC4P {\r
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);\r
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);\r
}\r
\r
.RadioGroup-module_radioGroup__pO2pz.RadioGroup-module_small__j8rVm {\r
  --gap-x: var(--component-checkbox-group-space-gap-x-small);\r
  --gap-y: var(--component-checkbox-group-space-gap-y-small);\r
}\r
\r
.RadioGroup-module_radioGroup__pO2pz.RadioGroup-module_vertical__VIcHp {\r
  flex-direction: column;\r
}\r
\r
.RadioGroup-module_radioGroup__pO2pz.RadioGroup-module_horizontal__vsHUV {\r
  flex-direction: row;\r
}\r
`),function(e){e.Xsmall="xsmall",e.Small="small"}(ny||(ny={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(ry||(ry={}));var Eo,Lu,Mo;(function(e){e.Default="default",e.Error="error",e.Disabled="disabled",e.ReadOnlyInfo="readonlyInfo",e.ReadOnlyConfirm="readonlyConfirm"})(Eo||(Eo={})),function(e){e.ReadOnlyInfo="readonlyInfo",e.ReadOnlyConfirm="readonlyConfirm"}(Lu||(Lu={})),function(e){e.None="none",e.Error="error",e.Search="search"}(Mo||(Mo={}));const IT=()=>Z.createElement("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Z.createElement("path",{d:"M8 0C3.875 0 0.5 3.375 0.5 7.5C0.5 11.625 3.875 15 8 15C12.125 15 15.5 11.625 15.5 7.5C15.5 3.375 12.125 0 8 0ZM8.875 11.25H7.5V9.9375H8.875V11.25ZM8.6875 9H7.6875L7.375 4.125H9L8.6875 9Z",fill:"white"})),MT=()=>Z.createElement("svg",{width:"15",height:"15",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Z.createElement("path",{d:"M34 31.5758L23.9289 21.3939C25.5533 19.2929 26.3655 16.8687 26.3655 14.1212C26.3655 7.49495 20.8426 2 14.1827 2C7.52284 2 2 7.49495 2 14.1212C2 20.7475 7.52284 26.2424 14.1827 26.2424C16.9442 26.2424 19.5431 25.2727 21.4924 23.8182L31.7259 34L34 31.5758ZM5.24873 14.1212C5.24873 9.27273 9.30965 5.23232 14.1827 5.23232C19.0558 5.23232 23.1168 9.27273 23.1168 14.1212C23.1168 18.9697 19.0558 23.0101 14.1827 23.0101C9.30965 23.0101 5.24873 18.9697 5.24873 14.1212Z",fill:"black"}));var oy="Icon-module_icon__3YqoF",DT="Icon-module_disabled__e4-Yg";nt(`.Icon-module_icon__3YqoF {\r
    background: var(--icon-background);\r
    padding-right: var(--component-input-border_width-focus);\r
    padding-left: var(--component-input-border_width-default);\r
    display: flex;\r
    align-items: center;\r
    flex: none;\r
}\r
\r
.Icon-module_icon__3YqoF.Icon-module_disabled__e4-Yg {\r
    opacity: 60%;\r
}`);const FT=({variant:e,disabled:t=!1})=>{switch(e){case Mo.Error:return Z.createElement("div",{className:oy,"data-testid":"input-icon-error"},Z.createElement(IT,null));case Mo.Search:return Z.createElement("div",{className:St(oy,t&&DT),"data-testid":"input-icon-search"},Z.createElement(MT,null));default:return null}};var ko={inputWrapper:"InputWrapper-module_inputWrapper__I-Tcb",withFocusEffect:"InputWrapper-module_withFocusEffect__9DobY",default:"InputWrapper-module_default__SS3Cg",error:"InputWrapper-module_error__FhSCJ",disabled:"InputWrapper-module_disabled__8mIxc",readonlyInfo:"InputWrapper-module_readonlyInfo__mQyMN",readonlyConfirm:"InputWrapper-module_readonlyConfirm__WrHUu",search:"InputWrapper-module_search__SwwFJ",withPadding:"InputWrapper-module_withPadding__6NkNf",field:"InputWrapper-module_field__UA-RS",label:"InputWrapper-module_label__x0-XH"};nt(`.InputWrapper-module_inputWrapper__I-Tcb {\r
  --background: var(--component-input-color-background-default);\r
  --border-color: var(--component-input-color-border-default);\r
  --icon-background: transparent;\r
  --outline-color: var(--semantic-tab_focus-outline-color);\r
  --paddingX: 0;\r
  --paddingY: 0;\r
  align-items: stretch;\r
  background: var(--background);\r
  border-color: var(--border-color);\r
  border-radius: var(--interactive_components-border_radius-normal);\r
  border-style: solid;\r
  border-width: var(--component-input-border_width-default);\r
  box-sizing: border-box;\r
  display: flex;\r
  min-height: var(--component-input-size-min_height-default);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_withFocusEffect__9DobY:focus-within {\r
  outline: var(--outline-color) solid var(--semantic-tab_focus-outline-width);\r
  outline-offset: var(--semantic-tab_focus-outline-offset);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_default__SS3Cg:hover {\r
  --border-color: var(--component-input-color-border-hover);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_error__FhSCJ {\r
  --icon-background: var(--component-input-error-color-border-default);\r
  --border-color: var(--component-input-error-color-border-default);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_disabled__8mIxc {\r
  --background: repeating-linear-gradient(\r
    135deg,\r
    #efefef,\r
    #efefef 2px,\r
    #fff 3px,\r
    #fff 5px\r
  );\r
  opacity: var(--opacity-disabled);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_readonlyInfo__mQyMN {\r
  --background: var(--component-input-read_only_info-color-background-default);\r
  --border-color: var(--component-input-read_only_info-color-border-default);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_readonlyConfirm__WrHUu {\r
  --background: var(\r
    --component-input-read_only_confirm-color-background-default\r
  );\r
  --border-color: var(--component-input-read_only_confirm-color-border-default);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_search__SwwFJ {\r
  flex-direction: row-reverse;\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_withPadding__6NkNf {\r
  /* Subtract size of border on padding-y, because border is on outer element. Without this, height of entire component will be too big */\r
  --paddingY: calc(\r
    var(--component-input-space-padding-y) -\r
      var(--component-input-border_width-default)\r
  );\r
  --paddingX: var(--component-input-space-padding-x);\r
}\r
\r
.InputWrapper-module_field__UA-RS {\r
  background: var(--background);\r
  border: none;\r
  box-sizing: border-box;\r
  font-family: var(--font_family-default);\r
  outline: none;\r
  padding: var(--paddingY) var(--paddingX);\r
  width: 100%;\r
}\r
\r
.InputWrapper-module_label__x0-XH {\r
  font-weight: var(--component-label-font_weight-default);\r
  padding: 0;\r
}\r
`);const jT=({disabled:e=!1,inputId:t,inputRenderer:n,isSearch:r=!1,isValid:i=!0,label:a,noFocusEffect:l,noPadding:u,readOnly:d=!1})=>{const f=T.useId(),m=t??f,{variant:_,iconVariant:p}=(({readOnly:g=!1,disabled:x=!1,isValid:w=!0,isSearch:C=!1}={})=>{let y=Mo.None;return C&&(y=Mo.Search),x?{variant:Eo.Disabled,iconVariant:y}:g===!0||g===Lu.ReadOnlyInfo?{variant:Eo.ReadOnlyInfo,iconVariant:y}:g===Lu.ReadOnlyConfirm?{variant:Eo.ReadOnlyConfirm,iconVariant:y}:w===!1?{variant:Eo.Error,iconVariant:Mo.Error}:{variant:Eo.Default,iconVariant:y}})({disabled:e,isSearch:r,isValid:i,readOnly:d});return Z.createElement(Z.Fragment,null,a&&Z.createElement("label",{className:ko.label,htmlFor:m},a),Z.createElement("div",{"data-testid":"InputWrapper",className:St(ko.inputWrapper,ko[_],{[ko.search]:r,[ko.withFocusEffect]:!l,[ko.withPadding]:!u})},Z.createElement(FT,{variant:p,disabled:e}),n({className:ko.field,inputId:m,variant:_})))},UT=(e,t)=>{if(e.length!==1)throw new Error("Char must be a single character.");const n=[];for(let r=0;r<t.length;r++)t[r]===e&&n.push(r);return n},iy=(e,t)=>{const n=e.toLowerCase(),r=t.toLowerCase(),i=new Set;for(let a=0;a<e.length;a++){const l=n[a];for(const u of UT(l,r))if(!i.has(u)){i.add(u);break}}return i.size},ay=(e,t)=>{const n=e.toLowerCase(),r=t.toLowerCase();let i=0;for(let a=0;a<r.length;a++)if(r[a]===n[i]&&(i++,i===n.length))return!0;return!1},$T=e=>(t,n)=>{const r=(i=>(a,l)=>{const u=ay(i,a),d=ay(i,l);if(!u&&!d)return 0;if(u&&!d)return-1;if(!u&&d)return 1;let f=0;for(let m=0;m<i.length;m++){const _=a.substring(f).indexOf(i[m]),p=l.substring(f).indexOf(i[m]);if(_<p)return-1;if(_>p)return 1;f+=_+1}return 0})(e)(t,n);return r!==0?r:(i=>(a,l)=>{const u=iy(i,a);return iy(i,l)-u})(e)(t,n)};var ZT="MultiSelectItem-module_multiSelectItem__tjklN",WT="MultiSelectItem-module_deleteButton__xRVRz",HT="MultiSelectItem-module_deleteButtonCross__yqZOX";nt(`.MultiSelectItem-module_multiSelectItem__tjklN {\r
  --border-radius: calc(var(--multiselect_item-height) / 2);\r
  align-items: center;\r
  background-color: var(--multiselect_item-background_color);\r
  border-radius: var(--border-radius);\r
  color: var(--multiselect_item-text_color);\r
  display: inline-flex;\r
  font-size: var(--font_size);\r
  gap: var(--multiselect_item-space_between);\r
  height: var(--multiselect_item-height);\r
  padding-left: var(--multiselect_item-space_left);\r
}\r
\r
.MultiSelectItem-module_deleteButton__xRVRz {\r
  background-color: transparent;\r
  border-bottom-right-radius: inherit;\r
  border-top-right-radius: inherit;\r
  border: 0;\r
  cursor: var(--interactive_element-cursor);\r
  height: 100%;\r
  padding: calc(\r
    (var(--multiselect_item-height) - var(--delete_cross-size)) / 2\r
  );\r
  width: var(--multiselect_item-height);\r
}\r
\r
.MultiSelectItem-module_deleteButton__xRVRz:not(:disabled):hover {\r
  background-color: var(--delete_cross_box-color-hover);\r
}\r
\r
.MultiSelectItem-module_deleteButton__xRVRz:focus-visible {\r
  background-color: var(--delete_cross_box-color-hover);\r
  outline: var(--focus_visible-outline);\r
}\r
\r
.MultiSelectItem-module_deleteButtonCross__yqZOX {\r
  background-color: var(--multiselect_item_delete_cross-color);\r
  clip-path: var(--delete_cross-clip_path);\r
  display: inline-block;\r
  height: var(--delete_cross-size);\r
  width: var(--delete_cross-size);\r
}\r
`);const ox=({deleteButtonLabel:e,disabled:t,onDeleteButtonClick:n,label:r})=>Z.createElement("span",{className:ZT},Z.createElement("span",null,r),Z.createElement("button",{"aria-label":e,className:WT,disabled:t,onClick:n},Z.createElement("span",{className:HT})));ox.displayName="MultiSelectItem";var ct={select:"Select-module_select__cjdcr",disabled:"Select-module_disabled__8YgjS",expanded:"Select-module_expanded__QPHZ6",optionListWrapper:"Select-module_optionListWrapper__Ech-7",usingKeyboard:"Select-module_usingKeyboard__RCPHw",fieldButton:"Select-module_fieldButton__uKwX8",field:"Select-module_field__h-wBy",inputArea:"Select-module_inputArea__jBTNl",multiple:"Select-module_multiple__cwGEC",textInput:"Select-module_textInput__QOpiN",single:"Select-module_single__i2zPs",fieldValue:"Select-module_fieldValue__XgrGc",arrowWrapper:"Select-module_arrowWrapper__meDQz",arrow:"Select-module_arrow__w35wW",deleteButton:"Select-module_deleteButton__hZfr7",deleteButtonCross:"Select-module_deleteButtonCross__OKMwb",optionList:"Select-module_optionList__Lhg-F",option:"Select-module_option__Hvo8n",selected:"Select-module_selected__8A13A",focused:"Select-module_focused__joVjV"};nt(`.Select-module_select__cjdcr {\r
  --delete_cross_box-border_radius: var(\r
    --interactive_components-border_radius-normal\r
  );\r
  --delete_cross_box-color-hover: var(--colors-red-500);\r
  --delete_cross_box-size: 25px;\r
  --delete_cross-clip_path: polygon(\r
    14.29% 0%,\r
    50% 35.71%,\r
    85.71% 0%,\r
    100% 14.29%,\r
    64.29% 50%,\r
    100% 85.71%,\r
    85.71% 100%,\r
    50% 64.29%,\r
    14.29% 100%,\r
    0% 85.71%,\r
    35.71% 50%,\r
    0% 14.29%\r
  );\r
  --delete_cross-color: var(--colors-blue-900);\r
  --delete_cross-color-active: var(--colors-blue-700);\r
  --delete_cross-color-disabled: #022f5180;\r
  --delete_cross-color-hover: white;\r
  --delete_cross-size: 12px;\r
  --arrow-border_left: 1px solid #022f5180;\r
  --arrow-color: var(--colors-blue-900);\r
  --arrow-height_to_width_fraction: calc(8 / 14);\r
  --arrow-horizontal_padding: 6px;\r
  --arrow-size: 14px;\r
  --arrow_wrapper-margin: 4px;\r
  --field-height-inside: calc(\r
    var(--field-height) - var(--component-input-border_width-default) * 2\r
  );\r
  --field-height: var(--component-input-size-min_height-default);\r
  --font_size: 16px;\r
  --interactive_element-cursor: pointer;\r
  --line-height: 1.5;\r
  --multiselect_item-background_color: var(--colors-blue-900);\r
  --multiselect_item-height: 24px;\r
  --multiselect_item-space_between: 6px;\r
  --multiselect_item-space_left: 16px;\r
  --multiselect_item-text_color: white;\r
  --multiselect_item_delete_cross-color: white;\r
  --multiselect_items-gap: 4px;\r
  --multiselect_items-padding: calc(\r
    (var(--field-height-inside) - var(--multiselect_item-height)) / 2\r
  );\r
  --option-background_color-default: transparent;\r
  --option-background_color-hover: var(--colors-blue-100);\r
  --option-background_color-selected: var(--colors-blue-200);\r
  --option-background_color-selected-hover: var(--colors-blue-500);\r
  --option-border_color: #022f5180;\r
  --option-border_width: 1px;\r
  --option-height: 36px;\r
  --option_list-background_color: white;\r
  --option_list-border: 1px solid #68707c;\r
  --option_list-border_radius: var(\r
    --interactive_components-border_radius-normal\r
  );\r
  --option_list-number_of_visible_options: 7;\r
  --option_list-shadow: 1px 1px 3px #00000040;\r
  --option_list-z_index: 2;\r
  --option-outline-focus: none;\r
  --option-padding_horizontal: 12px;\r
  --singleselect_field-padding_left: 12px;\r
  --focus_visible-outline: var(--semantic-tab_focus-outline-width) auto\r
    var(--semantic-tab_focus-outline-color);\r
\r
  font-size: var(--font_size);\r
  line-height: var(--line-height);\r
  position: relative;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_disabled__8YgjS {\r
  --interactive_element-cursor: auto;\r
  opacity: var(--opacity-disabled);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_expanded__QPHZ6 {\r
  --delete_cross-color: var(--delete_cross-color-active);\r
}\r
\r
.Select-module_select__cjdcr:not(.Select-module_expanded__QPHZ6) .Select-module_optionListWrapper__Ech-7 {\r
  display: none;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_usingKeyboard__RCPHw {\r
  --option-outline-focus: var(--focus_visible-outline);\r
}\r
\r
.Select-module_fieldButton__uKwX8 {\r
  background: transparent;\r
  border: 0;\r
  cursor: var(--interactive_element-cursor);\r
  height: 100%;\r
  margin: 0;\r
  padding: 0;\r
}\r
\r
.Select-module_field__h-wBy {\r
  display: inline-flex;\r
  padding: 0;\r
  align-items: center;\r
  flex-direction: row;\r
  font-family: var(--font_family-default);\r
  font-size: var(--font_size);\r
  min-height: var(--field-height-inside);\r
  position: relative;\r
  width: 100%;\r
}\r
\r
.Select-module_inputArea__jBTNl {\r
  align-items: center;\r
  display: flex;\r
  flex: 1;\r
  height: 100%;\r
  position: relative;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_inputArea__jBTNl {\r
  display: inline-flex;\r
  flex-direction: row;\r
  flex-wrap: wrap;\r
  flex: 1;\r
  gap: var(--multiselect_items-gap);\r
  padding: var(--multiselect_items-padding);\r
}\r
\r
.Select-module_textInput__QOpiN {\r
  background: transparent;\r
  border: 0;\r
  box-sizing: border-box;\r
  font-family: var(--font_family-default);\r
  font-size: var(--font_size);\r
  line-height: var(--line-height);\r
  min-height: var(--field-height-inside);\r
  outline: none;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_single__i2zPs .Select-module_textInput__QOpiN {\r
  cursor: var(--interactive_element-cursor);\r
  padding: 0 0 0 var(--singleselect_field-padding_left);\r
  position: absolute;\r
  width: 100%;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_textInput__QOpiN {\r
  flex: 1;\r
  min-height: 0;\r
  min-width: 3rem;\r
  padding: 0;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_single__i2zPs .Select-module_fieldValue__XgrGc {\r
  flex: 1;\r
  padding-left: var(--singleselect_field-padding_left);\r
  text-align: left;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_fieldButton__uKwX8:focus-visible {\r
  outline: var(--focus_visible-outline);\r
}\r
\r
.Select-module_arrowWrapper__meDQz {\r
  --arrow-height: calc(\r
    var(--arrow-size) * var(--arrow-height_to_width_fraction)\r
  );\r
  --arrow-vertical_padding: calc(\r
    (var(--field-height-inside) - var(--arrow-height)) / 2 -\r
      var(--arrow_wrapper-margin)\r
  );\r
  align-items: center;\r
  border-left: var(--arrow-border_left);\r
  box-sizing: border-box;\r
  display: flex;\r
  height: calc(100% - var(--arrow-vertical_padding));\r
  margin-bottom: var(--arrow_wrapper-margin);\r
  margin-left: var(--arrow_wrapper-margin);\r
  margin-top: var(--arrow_wrapper-margin);\r
  padding: var(--arrow-vertical_padding) var(--arrow-horizontal_padding);\r
}\r
\r
.Select-module_arrow__w35wW {\r
  background-color: var(--arrow-color);\r
  clip-path: polygon(\r
    11.72% 9.93%,\r
    50% 67.28%,\r
    88.28% 9.93%,\r
    97.43% 29.13%,\r
    50% 96.79%,\r
    2.57% 29.13%\r
  );\r
  display: inline-block;\r
  height: var(--arrow-height);\r
  width: var(--arrow-size);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7 {\r
  background: none;\r
  border-radius: var(--delete_cross_box-border_radius);\r
  border: none;\r
  cursor: var(--interactive_element-cursor);\r
  height: var(--delete_cross_box-size);\r
  padding: calc((var(--delete_cross_box-size) - var(--delete_cross-size)) / 2);\r
  width: var(--delete_cross_box-size);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7:disabled {\r
  cursor: auto;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7:focus-visible {\r
  outline: var(--focus_visible-outline);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7:hover:not(:disabled) {\r
  background-color: var(--delete_cross_box-color-hover);\r
  --delete_cross-color: var(--delete_cross-color-hover);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7:disabled {\r
  --delete_cross-color: var(--delete_cross-color-disabled);\r
  background-color: transparent;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButtonCross__OKMwb {\r
  background-color: var(--delete_cross-color);\r
  clip-path: var(--delete_cross-clip_path);\r
  display: inline-block;\r
  height: var(--delete_cross-size);\r
  width: var(--delete_cross-size);\r
}\r
\r
.Select-module_optionListWrapper__Ech-7 {\r
  background-color: var(--option_list-background_color);\r
  border-radius: var(--option_list-border_radius);\r
  border: var(--option_list-border);\r
  box-shadow: var(--option_list-shadow);\r
  box-sizing: border-box;\r
  margin: 0;\r
  max-height: calc(\r
    var(--option-height) * var(--option_list-number_of_visible_options)\r
  );\r
  overflow-y: auto;\r
  padding: 0;\r
  position: absolute;\r
  z-index: var(--option_list-z_index);\r
}\r
\r
.Select-module_optionList__Lhg-F {\r
  display: flex;\r
  flex-direction: column;\r
  width: 100%;\r
}\r
\r
.Select-module_option__Hvo8n {\r
  background-color: var(--option-background_color-default);\r
  border-color: var(--option-border_color);\r
  border-style: solid;\r
  border-width: var(--option-border_width) 0 0 0;\r
  box-sizing: border-box;\r
  cursor: var(--interactive_element-cursor);\r
  display: inline-block;\r
  font-family: var(--font_family-default);\r
  font-size: var(--font_size);\r
  min-height: var(--option-height);\r
  overflow-x: hidden;\r
  padding-left: var(--option-padding_horizontal);\r
  padding-right: var(--option-padding_horizontal);\r
  padding-top: calc(\r
    (var(--option-height) - (var(--font_size) * var(--line-height))) / 2\r
  );\r
  text-align: left;\r
  text-overflow: ellipsis;\r
}\r
\r
.Select-module_option__Hvo8n:hover {\r
  background-color: var(--option-background_color-hover);\r
}\r
\r
.Select-module_option__Hvo8n.Select-module_selected__8A13A {\r
  background-color: var(--option-background_color-selected);\r
}\r
\r
.Select-module_option__Hvo8n.Select-module_selected__8A13A:hover {\r
  background-color: var(--option-background_color-selected-hover);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_option__Hvo8n.Select-module_focused__joVjV {\r
  outline: var(--option-outline-focus);\r
}\r
`);const VT=(e,t)=>((n,r)=>[...n.entries()].map(([i,a])=>({key:i,keywords:(a?.length?a:[i]).sort(r)})).sort((i,a)=>{const l=Math.min(i.keywords.length,a.keywords.length);for(let u=0;u<l;u++){const d=r(i.keywords[u],a.keywords[u]);if(d!==0)return d}return 0}).map(({key:i})=>i))(new Map(e.map(({label:n,value:r,keywords:i})=>[r,i?[n,...i]:[n]])),$T(t)).map(n=>e.find(r=>r.value===n)),Ca={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},Ch=e=>{var t;const{disabled:n,error:r,hideLabel:i,inputId:a,label:l,multiple:u,onChange:d,options:f,searchLabel:m,value:_}=e,p=f.map($=>$.value);if(p.length!==new Set(p).size)throw Error("Each value in the option list must be unique.");const[g,x]=T.useState(u&&_!=null?_:[]),[w,C]=T.useState(""),y=()=>w&&C(""),[b,S]=T.useState(f),P=f.length,z=(t=b[0])===null||t===void 0?void 0:t.value;Pu(()=>{z!==void 0&&D(z)},[z]);const[I,D]=T.useState(u?void 0:_),j=b.findIndex($=>$.value===I),[V,U]=T.useState(!1);Fg("click",()=>U(!1)),Fg("keydown",()=>U(!0));const[R,Y]=T.useState(!1),_e=T.useRef(null),re=T.useRef(null);Pu(()=>{u?D1(_,g)||x(_??[]):D(_)},[_]),T.useEffect(()=>{const $=_e.current;if($){const ne=$.offsetHeight,se=$.querySelectorAll("button");if(!se.length)return;const Ue=$.scrollTop,We=Ue+ne,Re=se[j];if(Re){const Ee=Re.offsetTop,qe=Ee+Re.offsetHeight;Ee>=Ue&&qe<=We||($.scrollTop=Ee<Ue?Ee:qe-ne)}}},[j]);const fe=$=>{var ne;return(ne=f.find(se=>se.value===$))!==null&&ne!==void 0?ne:{label:"",value:""}},ee=($,ne)=>{g?.length||D(ne),x($),d&&d($)},ue=$=>{var ne;u?g.includes($)?M($):ee([...g,$],$):(D(ne=$),Y(!1),y(),d&&d(ne))},M=$=>{ee(g.filter(ne=>ne!==$),$)},oe=T.useCallback(()=>{if(I===void 0)D(b[0].value);else{const $=j+1;$>=0&&$<P&&D(b[$].value)}Y(!0)},[I,j,D,b,P]),K=T.useCallback(()=>{if(I===void 0)D(b[P-1].value);else{const $=j-1;$>=0&&$<P&&D(b[$].value)}Y(!0)},[I,j,D,b,P]);$d(Ca.ArrowDown,()=>{R&&(oe(),y())}),$d(Ca.ArrowUp,()=>{R&&(K(),y())}),$d(Ca.Enter,()=>{R&&u&&I?ue(I):R&&Y(!1),y()});const O=$=>{const ne=$.target.value;ne&&(S(VT(f,ne)),!R&&Y(!0)),C(ne)},B=$=>I===$,A=$=>u?g.includes($):B($),Q=T.useId(),te=re.current?`calc(${re.current.offsetWidth}px + 2 * ${PO.component.input.border_width.default.value})`:void 0;return Z.createElement("span",{className:St(ct.select,ct[u?"multiple":"single"],R&&ct.expanded,n&&ct.disabled,V&&ct.usingKeyboard),"data-testid":"select-root"},Z.createElement(jT,{disabled:n,inputId:a,inputRenderer:({className:$,inputId:ne})=>Z.createElement("span",{className:$+" "+ct.field,ref:re},Z.createElement("span",{className:ct.inputArea},u&&Z.createElement(Z.Fragment,null,g.map(fe).map(se=>Z.createElement(ox,{deleteButtonLabel:se.deleteButtonLabel,disabled:n!=null&&n,key:se.value,label:se.label,onDeleteButtonClick:()=>M(se.value)}))),Z.createElement("input",{"aria-label":m,autoComplete:"off",className:ct.textInput,disabled:n,onBlur:()=>Y(!1),onChange:O,onFocus:()=>Y(!0),onKeyDown:se=>{Object.values(Ca).includes(se.key)&&se.preventDefault()},type:"text",value:w}),!u&&!w.length&&Z.createElement("span",{className:ct.fieldValue},fe(I).label)),u&&Z.createElement("button",{"aria-label":e.deleteButtonLabel,className:ct.deleteButton,disabled:!g.length||n,onClick:()=>{ee([])}},Z.createElement("span",{className:ct.deleteButtonCross})),Z.createElement("button",{"aria-controls":Q,"aria-expanded":R,"aria-haspopup":"listbox","aria-label":l,className:ct.fieldButton,disabled:n,id:ne,onBlur:()=>Y(!1),onClick:()=>Y(!0),onKeyDown:se=>{Object.values(Ca).includes(se.key)&&(se.preventDefault(),Y(!0))},role:"combobox",tabIndex:-1,value:u?g:I},Z.createElement("span",{className:ct.arrowWrapper},Z.createElement("span",{className:ct.arrow})))),isSearch:!1,isValid:!r,label:i?void 0:l,noFocusEffect:u,noPadding:!0,readOnly:!1}),Z.createElement("span",{className:ct.optionListWrapper,ref:_e,style:{width:te}},Z.createElement("span",{className:ct.optionList,id:Q,role:"listbox"},b.map($=>{var ne;return Z.createElement("button",{"aria-label":$.label,"aria-selected":A($.value),className:St(ct.option,A($.value)&&ct.selected,u&&B($.value)&&ct.focused),key:$.value,onClick:()=>ue($.value),onMouseDown:se=>se.preventDefault(),onKeyDown:se=>se.preventDefault(),role:"option",value:$.value},(ne=$.formattedLabel)!==null&&ne!==void 0?ne:$.label)}))))};Ch.displayName="Select";nt(`.TextArea-module_textArea__Fp7-I {\r
  border: none;\r
  font-family: inherit;\r
  font-size: var(--component-textarea-font_size-sm);\r
}\r
\r
.TextArea-module_textArea__Fp7-I.TextArea-module_resize-none__LLMFm {\r
  resize: none;\r
}\r
\r
.TextArea-module_textArea__Fp7-I.TextArea-module_resize-both__LTKmK {\r
  resize: both;\r
}\r
\r
.TextArea-module_textArea__Fp7-I.TextArea-module_resize-horizontal__SIRxw {\r
  resize: horizontal;\r
}\r
\r
.TextArea-module_textArea__Fp7-I.TextArea-module_resize-vertical__oRHAF {\r
  resize: vertical;\r
}\r
`);var vs;(function(e){e.Primary="primary",e.Secondary="secondary"})(vs||(vs={}));const ix=T.createContext(void 0),Yp=()=>{const e=T.useContext(ix);if(e===void 0)throw new Error("useAccordionContext must be used within an AccordionContext");return e};var qT="Accordion-module_accordion__LVhhv";nt(`.Accordion-module_accordion__LVhhv {\r
  --component-accordion-color-background: var(--colors-white);\r
  --component-panel-size-width: 100%;\r
  background-color: var(--component-accordion-color-background);\r
  width: var(--component-panel-size-width);\r
}\r
`);const ax=({children:e,open:t,onClick:n,iconVariant:r=vs.Primary})=>{const i=T.useId(),a=T.useId();return Z.createElement("div",{className:qT},Z.createElement(ix.Provider,{value:{onClick:n,open:t,headerId:i,contentId:a,iconVariant:r}},e))};ax.displayName="Accordion";const sx=({children:e})=>{const{open:t,contentId:n,headerId:r}=Yp();return Z.createElement("div",null,t&&Z.createElement("div",{"aria-expanded":t,id:n,"aria-labelledby":r},e))};sx.displayName="AccordionContent";var KT="AccordionHeader-module_accordionHeader__nap0Y",QT="AccordionHeader-module_subtitle__CpDh7",GT="AccordionHeader-module_withSubtitle__zCXnG",XT="AccordionHeader-module_title__3VVAA",JT="AccordionHeader-module_actions__WCBkS";nt(`.AccordionHeader-module_accordionHeader__nap0Y {\r
  --component-accordion_header-border_top_color: var(--colors-grey-200);\r
  --component-accordion_header-border_top_style: solid;\r
  --component-accordion_header-border_top_width: var(--border_width-thin);\r
  --component-accordion_header-color-background: var(--colors-white);\r
  align-items: center;\r
  background-color: var(--component-accordion_header-color-background);\r
  border-top-color: var(--component-accordion_header-border_top_color);\r
  border-top-style: var(--component-accordion_header-border_top_style);\r
  border-top-width: var(--component-accordion_header-border_top_width);\r
  display: flex;\r
}\r
\r
/* breakpoints-xs */\r
@media only screen and (min-width: 0) {\r
  .AccordionHeader-module_subtitle__CpDh7 {\r
    display: none;\r
  }\r
}\r
\r
/* breakpoints-sm */\r
@media only screen and (min-width: 540px) {\r
  .AccordionHeader-module_accordionHeader__nap0Y.AccordionHeader-module_withSubtitle__zCXnG {\r
    padding-bottom: 0.2rem;\r
    padding-right: 0.2rem;\r
    padding-top: 0.2rem;\r
  }\r
\r
  .AccordionHeader-module_subtitle__CpDh7 {\r
    display: inline-block;\r
    font-size: 0.9rem;\r
    opacity: 60%;\r
  }\r
}\r
\r
.AccordionHeader-module_title__3VVAA {\r
  --component-accordion_header_title-border_bottom_style: none;\r
  --component-accordion_header_title-border_left_style: none;\r
  --component-accordion_header_title-border_right_style: none;\r
  --component-accordion_header_title-border_top_style: none;\r
  --component-accordion_header_title-color-background: none;\r
  --component-accordion_header_title-font_size: var(--font_size-300);\r
  --component-accordion_header_title-font_weight: var(--component-panel-font_weight-heading);\r
  --component-accordion_header_title-spacing-margin_left: 1.6rem;\r
  background-color: var(--component-accordion_header_title-color-background);\r
  border-bottom-style: var(--component-accordion_header_title-border_bottom_style);\r
  border-left-style: var(--component-accordion_header_title-border_left_style);\r
  border-right-style: var(--component-accordion_header_title-border_right_style);\r
  border-top-style: var(--component-accordion_header_title-border_top_style);\r
  cursor: pointer;\r
  display: inline-flex;\r
  flex: 1 1 auto;\r
  flex-direction: column;\r
  font-family: inherit;\r
  font-size: var(--component-accordion_header_title-font_size);\r
  font-weight: var(--component-accordion_header_title-font_weight);\r
  line-height: 16px;\r
  margin-left: var(--component-accordion_header_title-spacing-margin_left);\r
  text-align: left;\r
}\r
\r
.AccordionHeader-module_actions__WCBkS {\r
  align-items: center;\r
  column-gap: 0.3rem;\r
  display: grid;\r
  grid-auto-flow: column;\r
  padding: 0 0.2rem;\r
}\r
`);var YT="AccordionIcon-module_accordionIcon__C4yU3",eL="AccordionIcon-module_opened__jWTPV";nt(`.AccordionIcon-module_accordionIcon__C4yU3 {\r
  --size: 20px;\r
  box-sizing: border-box;\r
  cursor: pointer;\r
  flex-shrink: 0;\r
  height: var(--size);\r
  margin-bottom: 0.6rem;\r
  margin-left: 0.6rem;\r
  margin-top: 0.6rem;\r
  width: var(--size);\r
}\r
\r
.AccordionIcon-module_accordionIcon__C4yU3.AccordionIcon-module_opened__jWTPV {\r
  transform: rotate(90deg);\r
}\r
`);const tL=e=>Z.createElement("svg",Object.assign({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),Z.createElement("path",{d:`\r
        M 12.8834 34\r
        L 10      31.0909\r
        L 22.9754 18\r
        L 10       4.90909\r
        L 12.8834  2\r
        L 28.7423 18\r
        L 12.8834 34\r
        Z\r
      `,fill:aO})),nL=e=>Z.createElement("svg",Object.assign({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),Z.createElement("path",{d:`\r
        M 18   34\r
        C 26.8 34    34   26.8 34 18\r
        C 34    9.2  26.8  2   18  2\r
        C  9.2  2     2    9.2  2 18\r
        C  2   26.8   9.2 34   18 34\r
        Z\r
        M 14.3556 11.1556\r
        L 16.0444 9.37778\r
        L 24.2222 17.5556\r
        L 16.0444 25.7333\r
        L 14.3556 23.9556\r
        L 20.8444 17.5556\r
        L 14.3556 11.1556\r
        Z\r
      `,fill:sO})),lx=()=>{const{onClick:e,open:t,iconVariant:n}=Yp(),r={className:St(YT,t&&eL),onClick:e};switch(n){case vs.Primary:return Z.createElement(tL,Object.assign({},r));case vs.Secondary:return Z.createElement(nL,Object.assign({},r))}};lx.displayName="AccordionIcon";const ux=({children:e,actions:t,subtitle:n})=>{const{onClick:r,open:i,headerId:a,contentId:l}=Yp();return Z.createElement("div",{className:St(KT,{[GT]:n})},Z.createElement(lx,null),Z.createElement("button",{className:XT,"aria-expanded":i,type:"button",onClick:r,id:a,"aria-controls":l},e,n?.length&&Z.createElement("span",{"data-testid":"accordion-header-subtitle",className:QT},n)),Z.createElement("div",{className:JT},t))};ux.displayName="AccordionHeader";var sy={list:"List-module_list__9aWGq",solid:"List-module_solid__g5log",dashed:"List-module_dashed__sq10j"};nt(`.List-module_list__9aWGq {\r
  --component-list-border_width: 1px;\r
  border-top-color: var(--component-list-border_color);\r
  border-top-style: var(--component-list-border_style);\r
  border-top-width: var(--component-list-border_width);\r
  list-style-type: none;\r
  padding-left: 0;\r
}\r
\r
.List-module_list__9aWGq.List-module_solid__g5log {\r
  --component-list-border_color: #bcc7cc;\r
  --component-list-border_style: solid;\r
}\r
\r
.List-module_list__9aWGq.List-module_dashed__sq10j {\r
  --component-list-border_color: #1eadf7;\r
  --component-list-border_style: dashed;\r
}\r
`);const rL=({children:e,borderStyle:t="solid"})=>Z.createElement("ul",{className:sy.list+" "+sy[t]},e);var oL="ListItem-module_listItem__AJQMK";nt(`.ListItem-module_listItem__AJQMK {\r
  border-bottom-color: var(--component-list-border_color);\r
  border-bottom-style: var(--component-list-border_style);\r
  border-bottom-width: var(--component-list-border_width);\r
  display: block;\r
}\r
`);const ui=({children:e})=>Z.createElement("li",{className:oL},e);function cx(e,t){return function(){return e.apply(t,arguments)}}const{toString:dx}=Object.prototype,{getPrototypeOf:em}=Object,tm=(e=>t=>{const n=dx.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),kr=e=>(e=e.toLowerCase(),t=>tm(t)===e),Tc=e=>t=>typeof t===e,{isArray:Ji}=Array,gs=Tc("undefined");function iL(e){return e!==null&&!gs(e)&&e.constructor!==null&&!gs(e.constructor)&&so(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const fx=kr("ArrayBuffer");function aL(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&fx(e.buffer),t}const sL=Tc("string"),so=Tc("function"),hx=Tc("number"),nm=e=>e!==null&&typeof e=="object",lL=e=>e===!0||e===!1,Ml=e=>{if(tm(e)!=="object")return!1;const t=em(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},uL=kr("Date"),cL=kr("File"),dL=kr("Blob"),fL=kr("FileList"),hL=e=>nm(e)&&so(e.pipe),pL=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||dx.call(e)===t||so(e.toString)&&e.toString()===t)},mL=kr("URLSearchParams"),_L=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function zs(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Ji(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),l=a.length;let u;for(r=0;r<l;r++)u=a[r],t.call(null,e[u],u,e)}}function px(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const mx=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),_x=e=>!gs(e)&&e!==mx;function Eh(){const{caseless:e}=_x(this)&&this||{},t={},n=(r,i)=>{const a=e&&px(t,i)||i;Ml(t[a])&&Ml(r)?t[a]=Eh(t[a],r):Ml(r)?t[a]=Eh({},r):Ji(r)?t[a]=r.slice():t[a]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&zs(arguments[r],n);return t}const vL=(e,t,n,{allOwnKeys:r}={})=>(zs(t,(i,a)=>{n&&so(i)?e[a]=cx(i,n):e[a]=i},{allOwnKeys:r}),e),gL=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),yL=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},bL=(e,t,n,r)=>{let i,a,l;const u={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)l=i[a],(!r||r(l,e,t))&&!u[l]&&(t[l]=e[l],u[l]=!0);e=n!==!1&&em(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},xL=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},wL=e=>{if(!e)return null;if(Ji(e))return e;let t=e.length;if(!hx(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},kL=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&em(Uint8Array)),SL=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const a=i.value;t.call(e,a[0],a[1])}},PL=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},CL=kr("HTMLFormElement"),EL=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),ly=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),OL=kr("RegExp"),vx=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};zs(n,(i,a)=>{t(i,a,e)!==!1&&(r[a]=i)}),Object.defineProperties(e,r)},TL=e=>{vx(e,(t,n)=>{if(so(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(so(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},LL=(e,t)=>{const n={},r=i=>{i.forEach(a=>{n[a]=!0})};return Ji(e)?r(e):r(String(e).split(t)),n},zL=()=>{},RL=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Qd="abcdefghijklmnopqrstuvwxyz",uy="0123456789",gx={DIGIT:uy,ALPHA:Qd,ALPHA_DIGIT:Qd+Qd.toUpperCase()+uy},AL=(e=16,t=gx.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function NL(e){return!!(e&&so(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const BL=e=>{const t=new Array(10),n=(r,i)=>{if(nm(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const a=Ji(r)?[]:{};return zs(r,(l,u)=>{const d=n(l,i+1);!gs(d)&&(a[u]=d)}),t[i]=void 0,a}}return r};return n(e,0)},q={isArray:Ji,isArrayBuffer:fx,isBuffer:iL,isFormData:pL,isArrayBufferView:aL,isString:sL,isNumber:hx,isBoolean:lL,isObject:nm,isPlainObject:Ml,isUndefined:gs,isDate:uL,isFile:cL,isBlob:dL,isRegExp:OL,isFunction:so,isStream:hL,isURLSearchParams:mL,isTypedArray:kL,isFileList:fL,forEach:zs,merge:Eh,extend:vL,trim:_L,stripBOM:gL,inherits:yL,toFlatObject:bL,kindOf:tm,kindOfTest:kr,endsWith:xL,toArray:wL,forEachEntry:SL,matchAll:PL,isHTMLForm:CL,hasOwnProperty:ly,hasOwnProp:ly,reduceDescriptors:vx,freezeMethods:TL,toObjectSet:LL,toCamelCase:EL,noop:zL,toFiniteNumber:RL,findKey:px,global:mx,isContextDefined:_x,ALPHABET:gx,generateString:AL,isSpecCompliantForm:NL,toJSONObject:BL};function Le(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}q.inherits(Le,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:q.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const yx=Le.prototype,bx={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{bx[e]={value:e}});Object.defineProperties(Le,bx);Object.defineProperty(yx,"isAxiosError",{value:!0});Le.from=(e,t,n,r,i,a)=>{const l=Object.create(yx);return q.toFlatObject(e,l,function(d){return d!==Error.prototype},u=>u!=="isAxiosError"),Le.call(l,e.message,t,n,r,i),l.cause=e,l.name=e.name,a&&Object.assign(l,a),l};const IL=null;function Oh(e){return q.isPlainObject(e)||q.isArray(e)}function xx(e){return q.endsWith(e,"[]")?e.slice(0,-2):e}function cy(e,t,n){return e?e.concat(t).map(function(i,a){return i=xx(i),!n&&a?"["+i+"]":i}).join(n?".":""):t}function ML(e){return q.isArray(e)&&!e.some(Oh)}const DL=q.toFlatObject(q,{},null,function(t){return/^is[A-Z]/.test(t)});function Lc(e,t,n){if(!q.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,C){return!q.isUndefined(C[w])});const r=n.metaTokens,i=n.visitor||m,a=n.dots,l=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&q.isSpecCompliantForm(t);if(!q.isFunction(i))throw new TypeError("visitor must be a function");function f(x){if(x===null)return"";if(q.isDate(x))return x.toISOString();if(!d&&q.isBlob(x))throw new Le("Blob is not supported. Use a Buffer instead.");return q.isArrayBuffer(x)||q.isTypedArray(x)?d&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function m(x,w,C){let y=x;if(x&&!C&&typeof x=="object"){if(q.endsWith(w,"{}"))w=r?w:w.slice(0,-2),x=JSON.stringify(x);else if(q.isArray(x)&&ML(x)||(q.isFileList(x)||q.endsWith(w,"[]"))&&(y=q.toArray(x)))return w=xx(w),y.forEach(function(S,P){!(q.isUndefined(S)||S===null)&&t.append(l===!0?cy([w],P,a):l===null?w:w+"[]",f(S))}),!1}return Oh(x)?!0:(t.append(cy(C,w,a),f(x)),!1)}const _=[],p=Object.assign(DL,{defaultVisitor:m,convertValue:f,isVisitable:Oh});function g(x,w){if(!q.isUndefined(x)){if(_.indexOf(x)!==-1)throw Error("Circular reference detected in "+w.join("."));_.push(x),q.forEach(x,function(y,b){(!(q.isUndefined(y)||y===null)&&i.call(t,y,q.isString(b)?b.trim():b,w,p))===!0&&g(y,w?w.concat(b):[b])}),_.pop()}}if(!q.isObject(e))throw new TypeError("data must be an object");return g(e),t}function dy(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function rm(e,t){this._pairs=[],e&&Lc(e,this,t)}const wx=rm.prototype;wx.append=function(t,n){this._pairs.push([t,n])};wx.toString=function(t){const n=t?function(r){return t.call(this,r,dy)}:dy;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function FL(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function kx(e,t,n){if(!t)return e;const r=n&&n.encode||FL,i=n&&n.serialize;let a;if(i?a=i(t,n):a=q.isURLSearchParams(t)?t.toString():new rm(t,n).toString(r),a){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class jL{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){q.forEach(this.handlers,function(r){r!==null&&t(r)})}}const fy=jL,Sx={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},UL=typeof URLSearchParams<"u"?URLSearchParams:rm,$L=typeof FormData<"u"?FormData:null,ZL=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),WL=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Vn={isBrowser:!0,classes:{URLSearchParams:UL,FormData:$L,Blob},isStandardBrowserEnv:ZL,isStandardBrowserWebWorkerEnv:WL,protocols:["http","https","file","blob","url","data"]};function HL(e,t){return Lc(e,new Vn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,a){return Vn.isNode&&q.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function VL(e){return q.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function qL(e){const t={},n=Object.keys(e);let r;const i=n.length;let a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function Px(e){function t(n,r,i,a){let l=n[a++];const u=Number.isFinite(+l),d=a>=n.length;return l=!l&&q.isArray(i)?i.length:l,d?(q.hasOwnProp(i,l)?i[l]=[i[l],r]:i[l]=r,!u):((!i[l]||!q.isObject(i[l]))&&(i[l]=[]),t(n,r,i[l],a)&&q.isArray(i[l])&&(i[l]=qL(i[l])),!u)}if(q.isFormData(e)&&q.isFunction(e.entries)){const n={};return q.forEachEntry(e,(r,i)=>{t(VL(r),i,n,0)}),n}return null}const KL={"Content-Type":void 0};function QL(e,t,n){if(q.isString(e))try{return(t||JSON.parse)(e),q.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const zc={transitional:Sx,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,a=q.isObject(t);if(a&&q.isHTMLForm(t)&&(t=new FormData(t)),q.isFormData(t))return i&&i?JSON.stringify(Px(t)):t;if(q.isArrayBuffer(t)||q.isBuffer(t)||q.isStream(t)||q.isFile(t)||q.isBlob(t))return t;if(q.isArrayBufferView(t))return t.buffer;if(q.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return HL(t,this.formSerializer).toString();if((u=q.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Lc(u?{"files[]":t}:t,d&&new d,this.formSerializer)}}return a||i?(n.setContentType("application/json",!1),QL(t)):t}],transformResponse:[function(t){const n=this.transitional||zc.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&q.isString(t)&&(r&&!this.responseType||i)){const l=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(u){if(l)throw u.name==="SyntaxError"?Le.from(u,Le.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Vn.classes.FormData,Blob:Vn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};q.forEach(["delete","get","head"],function(t){zc.headers[t]={}});q.forEach(["post","put","patch"],function(t){zc.headers[t]=q.merge(KL)});const om=zc,GL=q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),XL=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(l){i=l.indexOf(":"),n=l.substring(0,i).trim().toLowerCase(),r=l.substring(i+1).trim(),!(!n||t[n]&&GL[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},hy=Symbol("internals");function Ea(e){return e&&String(e).trim().toLowerCase()}function Dl(e){return e===!1||e==null?e:q.isArray(e)?e.map(Dl):String(e)}function JL(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function YL(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function Gd(e,t,n,r,i){if(q.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!q.isString(t)){if(q.isString(r))return t.indexOf(r)!==-1;if(q.isRegExp(r))return r.test(t)}}function ez(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function tz(e,t){const n=q.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,a,l){return this[r].call(this,t,i,a,l)},configurable:!0})})}class Rc{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function a(u,d,f){const m=Ea(d);if(!m)throw new Error("header name must be a non-empty string");const _=q.findKey(i,m);(!_||i[_]===void 0||f===!0||f===void 0&&i[_]!==!1)&&(i[_||d]=Dl(u))}const l=(u,d)=>q.forEach(u,(f,m)=>a(f,m,d));return q.isPlainObject(t)||t instanceof this.constructor?l(t,n):q.isString(t)&&(t=t.trim())&&!YL(t)?l(XL(t),n):t!=null&&a(n,t,r),this}get(t,n){if(t=Ea(t),t){const r=q.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return JL(i);if(q.isFunction(n))return n.call(this,i,r);if(q.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Ea(t),t){const r=q.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Gd(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function a(l){if(l=Ea(l),l){const u=q.findKey(r,l);u&&(!n||Gd(r,r[u],u,n))&&(delete r[u],i=!0)}}return q.isArray(t)?t.forEach(a):a(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const a=n[r];(!t||Gd(this,this[a],a,t,!0))&&(delete this[a],i=!0)}return i}normalize(t){const n=this,r={};return q.forEach(this,(i,a)=>{const l=q.findKey(r,a);if(l){n[l]=Dl(i),delete n[a];return}const u=t?ez(a):String(a).trim();u!==a&&delete n[a],n[u]=Dl(i),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return q.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&q.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[hy]=this[hy]={accessors:{}}).accessors,i=this.prototype;function a(l){const u=Ea(l);r[u]||(tz(i,l),r[u]=!0)}return q.isArray(t)?t.forEach(a):a(t),this}}Rc.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);q.freezeMethods(Rc.prototype);q.freezeMethods(Rc);const pr=Rc;function Xd(e,t){const n=this||om,r=t||n,i=pr.from(r.headers);let a=r.data;return q.forEach(e,function(u){a=u.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function Cx(e){return!!(e&&e.__CANCEL__)}function Rs(e,t,n){Le.call(this,e??"canceled",Le.ERR_CANCELED,t,n),this.name="CanceledError"}q.inherits(Rs,Le,{__CANCEL__:!0});function nz(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Le("Request failed with status code "+n.status,[Le.ERR_BAD_REQUEST,Le.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const rz=Vn.isStandardBrowserEnv?function(){return{write:function(n,r,i,a,l,u){const d=[];d.push(n+"="+encodeURIComponent(r)),q.isNumber(i)&&d.push("expires="+new Date(i).toGMTString()),q.isString(a)&&d.push("path="+a),q.isString(l)&&d.push("domain="+l),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function oz(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function iz(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ex(e,t){return e&&!oz(t)?iz(e,t):t}const az=Vn.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(a){let l=a;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(l){const u=q.isString(l)?i(l):l;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function sz(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function lz(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,a=0,l;return t=t!==void 0?t:1e3,function(d){const f=Date.now(),m=r[a];l||(l=f),n[i]=d,r[i]=f;let _=a,p=0;for(;_!==i;)p+=n[_++],_=_%e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),f-l<t)return;const g=m&&f-m;return g?Math.round(p*1e3/g):void 0}}function py(e,t){let n=0;const r=lz(50,250);return i=>{const a=i.loaded,l=i.lengthComputable?i.total:void 0,u=a-n,d=r(u),f=a<=l;n=a;const m={loaded:a,total:l,progress:l?a/l:void 0,bytes:u,rate:d||void 0,estimated:d&&l&&f?(l-a)/d:void 0,event:i};m[t?"download":"upload"]=!0,e(m)}}const uz=typeof XMLHttpRequest<"u",cz=uz&&function(e){return new Promise(function(n,r){let i=e.data;const a=pr.from(e.headers).normalize(),l=e.responseType;let u;function d(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}q.isFormData(i)&&(Vn.isStandardBrowserEnv||Vn.isStandardBrowserWebWorkerEnv)&&a.setContentType(!1);let f=new XMLHttpRequest;if(e.auth){const g=e.auth.username||"",x=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(g+":"+x))}const m=Ex(e.baseURL,e.url);f.open(e.method.toUpperCase(),kx(m,e.params,e.paramsSerializer),!0),f.timeout=e.timeout;function _(){if(!f)return;const g=pr.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),w={data:!l||l==="text"||l==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:g,config:e,request:f};nz(function(y){n(y),d()},function(y){r(y),d()},w),f=null}if("onloadend"in f?f.onloadend=_:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(_)},f.onabort=function(){f&&(r(new Le("Request aborted",Le.ECONNABORTED,e,f)),f=null)},f.onerror=function(){r(new Le("Network Error",Le.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let x=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||Sx;e.timeoutErrorMessage&&(x=e.timeoutErrorMessage),r(new Le(x,w.clarifyTimeoutError?Le.ETIMEDOUT:Le.ECONNABORTED,e,f)),f=null},Vn.isStandardBrowserEnv){const g=(e.withCredentials||az(m))&&e.xsrfCookieName&&rz.read(e.xsrfCookieName);g&&a.set(e.xsrfHeaderName,g)}i===void 0&&a.setContentType(null),"setRequestHeader"in f&&q.forEach(a.toJSON(),function(x,w){f.setRequestHeader(w,x)}),q.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),l&&l!=="json"&&(f.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&f.addEventListener("progress",py(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",py(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=g=>{f&&(r(!g||g.type?new Rs(null,e,f):g),f.abort(),f=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const p=sz(m);if(p&&Vn.protocols.indexOf(p)===-1){r(new Le("Unsupported protocol "+p+":",Le.ERR_BAD_REQUEST,e));return}f.send(i||null)})},Fl={http:IL,xhr:cz};q.forEach(Fl,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const dz={getAdapter:e=>{e=q.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=q.isString(n)?Fl[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new Le(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(q.hasOwnProp(Fl,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!q.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Fl};function Jd(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Rs(null,e)}function my(e){return Jd(e),e.headers=pr.from(e.headers),e.data=Xd.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),dz.getAdapter(e.adapter||om.adapter)(e).then(function(r){return Jd(e),r.data=Xd.call(e,e.transformResponse,r),r.headers=pr.from(r.headers),r},function(r){return Cx(r)||(Jd(e),r&&r.response&&(r.response.data=Xd.call(e,e.transformResponse,r.response),r.response.headers=pr.from(r.response.headers))),Promise.reject(r)})}const _y=e=>e instanceof pr?e.toJSON():e;function qi(e,t){t=t||{};const n={};function r(f,m,_){return q.isPlainObject(f)&&q.isPlainObject(m)?q.merge.call({caseless:_},f,m):q.isPlainObject(m)?q.merge({},m):q.isArray(m)?m.slice():m}function i(f,m,_){if(q.isUndefined(m)){if(!q.isUndefined(f))return r(void 0,f,_)}else return r(f,m,_)}function a(f,m){if(!q.isUndefined(m))return r(void 0,m)}function l(f,m){if(q.isUndefined(m)){if(!q.isUndefined(f))return r(void 0,f)}else return r(void 0,m)}function u(f,m,_){if(_ in t)return r(f,m);if(_ in e)return r(void 0,f)}const d={url:a,method:a,data:a,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:u,headers:(f,m)=>i(_y(f),_y(m),!0)};return q.forEach(Object.keys(e).concat(Object.keys(t)),function(m){const _=d[m]||i,p=_(e[m],t[m],m);q.isUndefined(p)&&_!==u||(n[m]=p)}),n}const Ox="1.3.3",im={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{im[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const vy={};im.transitional=function(t,n,r){function i(a,l){return"[Axios v"+Ox+"] Transitional option '"+a+"'"+l+(r?". "+r:"")}return(a,l,u)=>{if(t===!1)throw new Le(i(l," has been removed"+(n?" in "+n:"")),Le.ERR_DEPRECATED);return n&&!vy[l]&&(vy[l]=!0,console.warn(i(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,l,u):!0}};function fz(e,t,n){if(typeof e!="object")throw new Le("options must be an object",Le.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const a=r[i],l=t[a];if(l){const u=e[a],d=u===void 0||l(u,a,e);if(d!==!0)throw new Le("option "+a+" must be "+d,Le.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Le("Unknown option "+a,Le.ERR_BAD_OPTION)}}const Th={assertOptions:fz,validators:im},zr=Th.validators;class zu{constructor(t){this.defaults=t,this.interceptors={request:new fy,response:new fy}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=qi(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:a}=n;r!==void 0&&Th.assertOptions(r,{silentJSONParsing:zr.transitional(zr.boolean),forcedJSONParsing:zr.transitional(zr.boolean),clarifyTimeoutError:zr.transitional(zr.boolean)},!1),i!==void 0&&Th.assertOptions(i,{encode:zr.function,serialize:zr.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l;l=a&&q.merge(a.common,a[n.method]),l&&q.forEach(["delete","get","head","post","put","patch","common"],x=>{delete a[x]}),n.headers=pr.concat(l,a);const u=[];let d=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(d=d&&w.synchronous,u.unshift(w.fulfilled,w.rejected))});const f=[];this.interceptors.response.forEach(function(w){f.push(w.fulfilled,w.rejected)});let m,_=0,p;if(!d){const x=[my.bind(this),void 0];for(x.unshift.apply(x,u),x.push.apply(x,f),p=x.length,m=Promise.resolve(n);_<p;)m=m.then(x[_++],x[_++]);return m}p=u.length;let g=n;for(_=0;_<p;){const x=u[_++],w=u[_++];try{g=x(g)}catch(C){w.call(this,C);break}}try{m=my.call(this,g)}catch(x){return Promise.reject(x)}for(_=0,p=f.length;_<p;)m=m.then(f[_++],f[_++]);return m}getUri(t){t=qi(this.defaults,t);const n=Ex(t.baseURL,t.url);return kx(n,t.params,t.paramsSerializer)}}q.forEach(["delete","get","head","options"],function(t){zu.prototype[t]=function(n,r){return this.request(qi(r||{},{method:t,url:n,data:(r||{}).data}))}});q.forEach(["post","put","patch"],function(t){function n(r){return function(a,l,u){return this.request(qi(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:l}))}}zu.prototype[t]=n(),zu.prototype[t+"Form"]=n(!0)});const jl=zu;class am{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(i=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](i);r._listeners=null}),this.promise.then=i=>{let a;const l=new Promise(u=>{r.subscribe(u),a=u}).then(i);return l.cancel=function(){r.unsubscribe(a)},l},t(function(a,l,u){r.reason||(r.reason=new Rs(a,l,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new am(function(i){t=i}),cancel:t}}}const hz=am;function pz(e){return function(n){return e.apply(null,n)}}function mz(e){return q.isObject(e)&&e.isAxiosError===!0}const Lh={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Lh).forEach(([e,t])=>{Lh[t]=e});const _z=Lh;function Tx(e){const t=new jl(e),n=cx(jl.prototype.request,t);return q.extend(n,jl.prototype,t,{allOwnKeys:!0}),q.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Tx(qi(e,i))},n}const ht=Tx(om);ht.Axios=jl;ht.CanceledError=Rs;ht.CancelToken=hz;ht.isCancel=Cx;ht.VERSION=Ox;ht.toFormData=Lc;ht.AxiosError=Le;ht.Cancel=ht.CanceledError;ht.all=function(t){return Promise.all(t)};ht.spread=pz;ht.isAxiosError=mz;ht.mergeConfig=qi;ht.AxiosHeaders=pr;ht.formToJSON=e=>Px(q.isHTMLForm(e)?new FormData(e):e);ht.HttpStatusCode=_z;ht.default=ht;const Lx=ht;function Cn(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function lo(e){return!!e&&!!e[Ke]}function br(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===Pz}(e)||Array.isArray(e)||!!e[Sy]||!!(!((t=e.constructor)===null||t===void 0)&&t[Sy])||sm(e)||lm(e))}function Vo(e,t,n){n===void 0&&(n=!1),Yi(e)===0?(n?Object.keys:Ii)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function Yi(e){var t=e[Ke];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:sm(e)?2:lm(e)?3:0}function Bi(e,t){return Yi(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function vz(e,t){return Yi(e)===2?e.get(t):e[t]}function zx(e,t,n){var r=Yi(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Rx(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function sm(e){return kz&&e instanceof Map}function lm(e){return Sz&&e instanceof Set}function Co(e){return e.o||e.t}function um(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Nx(e);delete t[Ke];for(var n=Ii(t),r=0;r<n.length;r++){var i=n[r],a=t[i];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function cm(e,t){return t===void 0&&(t=!1),dm(e)||lo(e)||!br(e)||(Yi(e)>1&&(e.set=e.add=e.clear=e.delete=gz),Object.freeze(e),t&&Vo(e,function(n,r){return cm(r,!0)},!0)),e}function gz(){Cn(2)}function dm(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Gn(e){var t=Nh[e];return t||Cn(18,e),t}function yz(e,t){Nh[e]||(Nh[e]=t)}function zh(){return ys}function Yd(e,t){t&&(Gn("Patches"),e.u=[],e.s=[],e.v=t)}function Ru(e){Rh(e),e.p.forEach(bz),e.p=null}function Rh(e){e===ys&&(ys=e.l)}function gy(e){return ys={p:[],l:ys,h:e,m:!0,_:0}}function bz(e){var t=e[Ke];t.i===0||t.i===1?t.j():t.O=!0}function ef(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.g||Gn("ES5").S(t,e,r),r?(n[Ke].P&&(Ru(t),Cn(4)),br(e)&&(e=Au(t,e),t.l||Nu(t,e)),t.u&&Gn("Patches").M(n[Ke].t,e,t.u,t.s)):e=Au(t,n,[]),Ru(t),t.u&&t.v(t.u,t.s),e!==Ax?e:void 0}function Au(e,t,n){if(dm(t))return t;var r=t[Ke];if(!r)return Vo(t,function(u,d){return yy(e,r,t,u,d,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Nu(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=um(r.k):r.o,a=i,l=!1;r.i===3&&(a=new Set(i),i.clear(),l=!0),Vo(a,function(u,d){return yy(e,r,i,u,d,n,l)}),Nu(e,i,!1),n&&e.u&&Gn("Patches").N(r,n,e.u,e.s)}return r.o}function yy(e,t,n,r,i,a,l){if(lo(i)){var u=Au(e,i,a&&t&&t.i!==3&&!Bi(t.R,r)?a.concat(r):void 0);if(zx(n,r,u),!lo(u))return;e.m=!1}else l&&n.add(i);if(br(i)&&!dm(i)){if(!e.h.D&&e._<1)return;Au(e,i),t&&t.A.l||Nu(e,i)}}function Nu(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&cm(t,n)}function tf(e,t){var n=e[Ke];return(n?Co(n):e)[t]}function by(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Dr(e){e.P||(e.P=!0,e.l&&Dr(e.l))}function nf(e){e.o||(e.o=um(e.t))}function Ah(e,t,n){var r=sm(t)?Gn("MapSet").F(t,n):lm(t)?Gn("MapSet").T(t,n):e.g?function(i,a){var l=Array.isArray(i),u={i:l?1:0,A:a?a.A:zh(),P:!1,I:!1,R:{},l:a,t:i,k:null,o:null,j:null,C:!1},d=u,f=bs;l&&(d=[u],f=Na);var m=Proxy.revocable(d,f),_=m.revoke,p=m.proxy;return u.k=p,u.j=_,p}(t,n):Gn("ES5").J(t,n);return(n?n.A:zh()).p.push(r),r}function xz(e){return lo(e)||Cn(22,e),function t(n){if(!br(n))return n;var r,i=n[Ke],a=Yi(n);if(i){if(!i.P&&(i.i<4||!Gn("ES5").K(i)))return i.t;i.I=!0,r=xy(n,a),i.I=!1}else r=xy(n,a);return Vo(r,function(l,u){i&&vz(i.t,l)===u||zx(r,l,t(u))}),a===3?new Set(r):r}(e)}function xy(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return um(e)}function wz(){function e(a,l){var u=i[a];return u?u.enumerable=l:i[a]=u={configurable:!0,enumerable:l,get:function(){var d=this[Ke];return bs.get(d,a)},set:function(d){var f=this[Ke];bs.set(f,a,d)}},u}function t(a){for(var l=a.length-1;l>=0;l--){var u=a[l][Ke];if(!u.P)switch(u.i){case 5:r(u)&&Dr(u);break;case 4:n(u)&&Dr(u)}}}function n(a){for(var l=a.t,u=a.k,d=Ii(u),f=d.length-1;f>=0;f--){var m=d[f];if(m!==Ke){var _=l[m];if(_===void 0&&!Bi(l,m))return!0;var p=u[m],g=p&&p[Ke];if(g?g.t!==_:!Rx(p,_))return!0}}var x=!!l[Ke];return d.length!==Ii(l).length+(x?0:1)}function r(a){var l=a.k;if(l.length!==a.t.length)return!0;var u=Object.getOwnPropertyDescriptor(l,l.length-1);if(u&&!u.get)return!0;for(var d=0;d<l.length;d++)if(!l.hasOwnProperty(d))return!0;return!1}var i={};yz("ES5",{J:function(a,l){var u=Array.isArray(a),d=function(m,_){if(m){for(var p=Array(_.length),g=0;g<_.length;g++)Object.defineProperty(p,""+g,e(g,!0));return p}var x=Nx(_);delete x[Ke];for(var w=Ii(x),C=0;C<w.length;C++){var y=w[C];x[y]=e(y,m||!!x[y].enumerable)}return Object.create(Object.getPrototypeOf(_),x)}(u,a),f={i:u?5:4,A:l?l.A:zh(),P:!1,I:!1,R:{},l,t:a,k:d,o:null,O:!1,C:!1};return Object.defineProperty(d,Ke,{value:f,writable:!0}),d},S:function(a,l,u){u?lo(l)&&l[Ke].A===a&&t(a.p):(a.u&&function d(f){if(f&&typeof f=="object"){var m=f[Ke];if(m){var _=m.t,p=m.k,g=m.R,x=m.i;if(x===4)Vo(p,function(S){S!==Ke&&(_[S]!==void 0||Bi(_,S)?g[S]||d(p[S]):(g[S]=!0,Dr(m)))}),Vo(_,function(S){p[S]!==void 0||Bi(p,S)||(g[S]=!1,Dr(m))});else if(x===5){if(r(m)&&(Dr(m),g.length=!0),p.length<_.length)for(var w=p.length;w<_.length;w++)g[w]=!1;else for(var C=_.length;C<p.length;C++)g[C]=!0;for(var y=Math.min(p.length,_.length),b=0;b<y;b++)p.hasOwnProperty(b)||(g[b]=!0),g[b]===void 0&&d(p[b])}}}}(a.p[0]),t(a.p))},K:function(a){return a.i===4?n(a):r(a)}})}var wy,ys,fm=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",kz=typeof Map<"u",Sz=typeof Set<"u",ky=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Ax=fm?Symbol.for("immer-nothing"):((wy={})["immer-nothing"]=!0,wy),Sy=fm?Symbol.for("immer-draftable"):"__$immer_draftable",Ke=fm?Symbol.for("immer-state"):"__$immer_state",Pz=""+Object.prototype.constructor,Ii=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Nx=Object.getOwnPropertyDescriptors||function(e){var t={};return Ii(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Nh={},bs={get:function(e,t){if(t===Ke)return e;var n=Co(e);if(!Bi(n,t))return function(i,a,l){var u,d=by(a,l);return d?"value"in d?d.value:(u=d.get)===null||u===void 0?void 0:u.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!br(r)?r:r===tf(e.t,t)?(nf(e),e.o[t]=Ah(e.A.h,r,e)):r},has:function(e,t){return t in Co(e)},ownKeys:function(e){return Reflect.ownKeys(Co(e))},set:function(e,t,n){var r=by(Co(e),t);if(r?.set)return r.set.call(e.k,n),!0;if(!e.P){var i=tf(Co(e),t),a=i?.[Ke];if(a&&a.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Rx(n,i)&&(n!==void 0||Bi(e.t,t)))return!0;nf(e),Dr(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return tf(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,nf(e),Dr(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Co(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Cn(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Cn(12)}},Na={};Vo(bs,function(e,t){Na[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Na.deleteProperty=function(e,t){return Na.set.call(this,e,t,void 0)},Na.set=function(e,t,n){return bs.set.call(this,e[0],t,n,e[0])};var Cz=function(){function e(n){var r=this;this.g=ky,this.D=!0,this.produce=function(i,a,l){if(typeof i=="function"&&typeof a!="function"){var u=a;a=i;var d=r;return function(w){var C=this;w===void 0&&(w=u);for(var y=arguments.length,b=Array(y>1?y-1:0),S=1;S<y;S++)b[S-1]=arguments[S];return d.produce(w,function(P){var z;return(z=a).call.apply(z,[C,P].concat(b))})}}var f;if(typeof a!="function"&&Cn(6),l!==void 0&&typeof l!="function"&&Cn(7),br(i)){var m=gy(r),_=Ah(r,i,void 0),p=!0;try{f=a(_),p=!1}finally{p?Ru(m):Rh(m)}return typeof Promise<"u"&&f instanceof Promise?f.then(function(w){return Yd(m,l),ef(w,m)},function(w){throw Ru(m),w}):(Yd(m,l),ef(f,m))}if(!i||typeof i!="object"){if((f=a(i))===void 0&&(f=i),f===Ax&&(f=void 0),r.D&&cm(f,!0),l){var g=[],x=[];Gn("Patches").M(i,f,g,x),l(g,x)}return f}Cn(21,i)},this.produceWithPatches=function(i,a){if(typeof i=="function")return function(f){for(var m=arguments.length,_=Array(m>1?m-1:0),p=1;p<m;p++)_[p-1]=arguments[p];return r.produceWithPatches(f,function(g){return i.apply(void 0,[g].concat(_))})};var l,u,d=r.produce(i,a,function(f,m){l=f,u=m});return typeof Promise<"u"&&d instanceof Promise?d.then(function(f){return[f,l,u]}):[d,l,u]},typeof n?.useProxies=="boolean"&&this.setUseProxies(n.useProxies),typeof n?.autoFreeze=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){br(n)||Cn(8),lo(n)&&(n=xz(n));var r=gy(this),i=Ah(this,n,void 0);return i[Ke].C=!0,Rh(r),i},t.finishDraft=function(n,r){var i=n&&n[Ke],a=i.A;return Yd(a,r),ef(void 0,a)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!ky&&Cn(20),this.g=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var a=r[i];if(a.path.length===0&&a.op==="replace"){n=a.value;break}}i>-1&&(r=r.slice(i+1));var l=Gn("Patches").$;return lo(n)?l(n,r):this.produce(n,function(u){return l(u,r)})},e}(),Yt=new Cz,Bx=Yt.produce;Yt.produceWithPatches.bind(Yt);Yt.setAutoFreeze.bind(Yt);Yt.setUseProxies.bind(Yt);Yt.applyPatches.bind(Yt);Yt.createDraft.bind(Yt);Yt.finishDraft.bind(Yt);function Py(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Cy(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Py(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Py(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Tt(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Ey=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),rf=function(){return Math.random().toString(36).substring(7).split("").join(".")},Bu={INIT:"@@redux/INIT"+rf(),REPLACE:"@@redux/REPLACE"+rf(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+rf()}};function Ez(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Ix(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Tt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Tt(1));return n(Ix)(e,t)}if(typeof e!="function")throw new Error(Tt(2));var i=e,a=t,l=[],u=l,d=!1;function f(){u===l&&(u=l.slice())}function m(){if(d)throw new Error(Tt(3));return a}function _(w){if(typeof w!="function")throw new Error(Tt(4));if(d)throw new Error(Tt(5));var C=!0;return f(),u.push(w),function(){if(C){if(d)throw new Error(Tt(6));C=!1,f();var b=u.indexOf(w);u.splice(b,1),l=null}}}function p(w){if(!Ez(w))throw new Error(Tt(7));if(typeof w.type>"u")throw new Error(Tt(8));if(d)throw new Error(Tt(9));try{d=!0,a=i(a,w)}finally{d=!1}for(var C=l=u,y=0;y<C.length;y++){var b=C[y];b()}return w}function g(w){if(typeof w!="function")throw new Error(Tt(10));i=w,p({type:Bu.REPLACE})}function x(){var w,C=_;return w={subscribe:function(b){if(typeof b!="object"||b===null)throw new Error(Tt(11));function S(){b.next&&b.next(m())}S();var P=C(S);return{unsubscribe:P}}},w[Ey]=function(){return this},w}return p({type:Bu.INIT}),r={dispatch:p,subscribe:_,getState:m,replaceReducer:g},r[Ey]=x,r}function Oz(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Bu.INIT});if(typeof r>"u")throw new Error(Tt(12));if(typeof n(void 0,{type:Bu.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Tt(13))})}function Tz(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var a=Object.keys(n),l;try{Oz(n)}catch(u){l=u}return function(d,f){if(d===void 0&&(d={}),l)throw l;for(var m=!1,_={},p=0;p<a.length;p++){var g=a[p],x=n[g],w=d[g],C=x(w,f);if(typeof C>"u")throw f&&f.type,new Error(Tt(14));_[g]=C,m=m||C!==w}return m=m||a.length!==Object.keys(d).length,m?_:d}}function Iu(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function Lz(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),a=function(){throw new Error(Tt(15))},l={getState:i.getState,dispatch:function(){return a.apply(void 0,arguments)}},u=t.map(function(d){return d(l)});return a=Iu.apply(void 0,u)(i.dispatch),Cy(Cy({},i),{},{dispatch:a})}}}function Mx(e){var t=function(r){var i=r.dispatch,a=r.getState;return function(l){return function(u){return typeof u=="function"?u(i,a,e):l(u)}}};return t}var Dx=Mx();Dx.withExtraArgument=Mx;const Oy=Dx;var zz=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(r[a]=i[a])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Rz=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,l;return l={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function u(f){return function(m){return d([f,m])}}function d(f){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=f[0]&2?i.return:f[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,f[1])).done)return a;switch(i=0,a&&(f=[f[0]&2,a.value]),f[0]){case 0:case 1:a=f;break;case 4:return n.label++,{value:f[1],done:!1};case 5:n.label++,i=f[1],f=[0];continue;case 7:f=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(f[0]===6||f[0]===2)){n=0;continue}if(f[0]===3&&(!a||f[1]>a[0]&&f[1]<a[3])){n.label=f[1];break}if(f[0]===6&&n.label<a[1]){n.label=a[1],a=f;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(f);break}a[2]&&n.ops.pop(),n.trys.pop();continue}f=t.call(e,n)}catch(m){f=[6,m],i=0}finally{r=a=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}},Mu=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},Az=Object.defineProperty,Nz=Object.defineProperties,Bz=Object.getOwnPropertyDescriptors,Ty=Object.getOwnPropertySymbols,Iz=Object.prototype.hasOwnProperty,Mz=Object.prototype.propertyIsEnumerable,Ly=function(e,t,n){return t in e?Az(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},eo=function(e,t){for(var n in t||(t={}))Iz.call(t,n)&&Ly(e,n,t[n]);if(Ty)for(var r=0,i=Ty(t);r<i.length;r++){var n=i[r];Mz.call(t,n)&&Ly(e,n,t[n])}return e},of=function(e,t){return Nz(e,Bz(t))},Dz=function(e,t,n){return new Promise(function(r,i){var a=function(d){try{u(n.next(d))}catch(f){i(f)}},l=function(d){try{u(n.throw(d))}catch(f){i(f)}},u=function(d){return d.done?r(d.value):Promise.resolve(d.value).then(a,l)};u((n=n.apply(e,t)).next())})},Fz=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Iu:Iu.apply(null,arguments)};function jz(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var Uz=function(e){zz(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Mu([void 0],n[0].concat(this)))):new(t.bind.apply(t,Mu([void 0],n.concat(this))))},t}(Array);function Bh(e){return br(e)?Bx(e,function(){}):e}function $z(e){return typeof e=="boolean"}function Zz(){return function(t){return Wz(t)}}function Wz(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new Uz;return n&&($z(n)?r.push(Oy):r.push(Oy.withExtraArgument(n.extraArgument))),r}var Hz=!0;function Vz(e){var t=Zz(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,a=n.middleware,l=a===void 0?t():a,u=n.devTools,d=u===void 0?!0:u,f=n.preloadedState,m=f===void 0?void 0:f,_=n.enhancers,p=_===void 0?void 0:_,g;if(typeof i=="function")g=i;else if(jz(i))g=Tz(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var x=l;typeof x=="function"&&(x=x(t));var w=Lz.apply(void 0,x),C=Iu;d&&(C=Fz(eo({trace:!Hz},typeof d=="object"&&d)));var y=[w];Array.isArray(p)?y=Mu([w],p):typeof p=="function"&&(y=p(y));var b=C.apply(void 0,y);return Ix(g,m,b)}function to(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var a=t.apply(void 0,r);if(!a)throw new Error("prepareAction did not return an object");return eo(eo({type:e,payload:a.payload},"meta"in a&&{meta:a.meta}),"error"in a&&{error:a.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function Fx(e){var t={},n=[],r,i={addCase:function(a,l){var u=typeof a=="string"?a:a.type;if(u in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[u]=l,i},addMatcher:function(a,l){return n.push({matcher:a,reducer:l}),i},addDefaultCase:function(a){return r=a,i}};return e(i),[t,n,r]}function qz(e){return typeof e=="function"}function Kz(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?Fx(t):[t,n,r],a=i[0],l=i[1],u=i[2],d;if(qz(e))d=function(){return Bh(e())};else{var f=Bh(e);d=function(){return f}}function m(_,p){_===void 0&&(_=d());var g=Mu([a[p.type]],l.filter(function(x){var w=x.matcher;return w(p)}).map(function(x){var w=x.reducer;return w}));return g.filter(function(x){return!!x}).length===0&&(g=[u]),g.reduce(function(x,w){if(w)if(lo(x)){var C=x,y=w(C,p);return y===void 0?x:y}else{if(br(x))return Bx(x,function(b){return w(b,p)});var y=w(x,p);if(y===void 0){if(x===null)return x;throw Error("A case reducer on a non-draftable value must not return undefined")}return y}return x},_)}return m.getInitialState=d,m}function Qz(e,t){return e+"/"+t}function Gz(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Bh(e.initialState),r=e.reducers||{},i=Object.keys(r),a={},l={},u={};i.forEach(function(m){var _=r[m],p=Qz(t,m),g,x;"reducer"in _?(g=_.reducer,x=_.prepare):g=_,a[m]=g,l[p]=g,u[m]=x?to(p,x):to(p)});function d(){var m=typeof e.extraReducers=="function"?Fx(e.extraReducers):[e.extraReducers],_=m[0],p=_===void 0?{}:_,g=m[1],x=g===void 0?[]:g,w=m[2],C=w===void 0?void 0:w,y=eo(eo({},p),l);return Kz(n,function(b){for(var S in y)b.addCase(S,y[S]);for(var P=0,z=x;P<z.length;P++){var I=z[P];b.addMatcher(I.matcher,I.reducer)}C&&b.addDefaultCase(C)})}var f;return{name:t,reducer:function(m,_){return f||(f=d()),f(m,_)},actions:u,caseReducers:a,getInitialState:function(){return f||(f=d()),f.getInitialState()}}}var Xz="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Jz=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=Xz[Math.random()*64|0];return t},Yz=["name","message","stack","code"],af=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),zy=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),eR=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=Yz;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}},jx=function(){function e(t,n,r){var i=to(t+"/fulfilled",function(f,m,_,p){return{payload:f,meta:of(eo({},p||{}),{arg:_,requestId:m,requestStatus:"fulfilled"})}}),a=to(t+"/pending",function(f,m,_){return{payload:void 0,meta:of(eo({},_||{}),{arg:m,requestId:f,requestStatus:"pending"})}}),l=to(t+"/rejected",function(f,m,_,p,g){return{payload:p,error:(r&&r.serializeError||eR)(f||"Rejected"),meta:of(eo({},g||{}),{arg:_,requestId:m,rejectedWithValue:!!p,requestStatus:"rejected",aborted:f?.name==="AbortError",condition:f?.name==="ConditionError"})}}),u=typeof AbortController<"u"?AbortController:function(){function f(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return f.prototype.abort=function(){},f}();function d(f){return function(m,_,p){var g=r?.idGenerator?r.idGenerator(f):Jz(),x=new u,w;function C(b){w=b,x.abort()}var y=function(){return Dz(this,null,function(){var b,S,P,z,I,D,j;return Rz(this,function(V){switch(V.label){case 0:return V.trys.push([0,4,,5]),z=(b=r?.condition)==null?void 0:b.call(r,f,{getState:_,extra:p}),nR(z)?[4,z]:[3,2];case 1:z=V.sent(),V.label=2;case 2:if(z===!1||x.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return I=new Promise(function(U,R){return x.signal.addEventListener("abort",function(){return R({name:"AbortError",message:w||"Aborted"})})}),m(a(g,f,(S=r?.getPendingMeta)==null?void 0:S.call(r,{requestId:g,arg:f},{getState:_,extra:p}))),[4,Promise.race([I,Promise.resolve(n(f,{dispatch:m,getState:_,extra:p,requestId:g,signal:x.signal,abort:C,rejectWithValue:function(U,R){return new af(U,R)},fulfillWithValue:function(U,R){return new zy(U,R)}})).then(function(U){if(U instanceof af)throw U;return U instanceof zy?i(U.payload,g,f,U.meta):i(U,g,f)})])];case 3:return P=V.sent(),[3,5];case 4:return D=V.sent(),P=D instanceof af?l(null,g,f,D.payload,D.meta):l(D,g,f),[3,5];case 5:return j=r&&!r.dispatchConditionRejection&&l.match(P)&&P.meta.condition,j||m(P),[2,P]}})})}();return Object.assign(y,{abort:C,requestId:g,arg:f,unwrap:function(){return y.then(tR)}})}}return Object.assign(d,{pending:a,rejected:l,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e}();function tR(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function nR(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var hm="listenerMiddleware";to(hm+"/add");to(hm+"/removeAll");to(hm+"/remove");var Ry;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);wz();const rR={loading:!0,brandloading:!0,evList:{evs:[],count:0},search:{name:"",sortOrder:1,evType:[],brands:[],seatConfiguration:[],seatMassageFirstRow:!1,seatMassageSecondRow:!1,seatVentilationFirstRow:!1,seatVentilationSecondRow:!1,allWheelDrive:!1,nightVision:!1,adaptiveSuspension:!1,airSuspension:!1,instrumentCluster:!1,headUpDisplay:!1,androidAuto:!1,appleCarPlay:!1,colors:[]},searchOptions:{brands:["Audi"],seatConfig:[],bodyTypes:["Sedan"],seatConfiguration:["5 seat"],colors:["Red"]},error:""},Ih=jx("evsearch/fetchEvs",async e=>{const t=window.location.href;let n="https://api.evkx.net/api/Ev";return t.startsWith("http://localhost")&&(n="https://localhost:7033/api/Ev"),await Lx.post(n,e,{headers:{"Content-Type":"application/json"}}).then(r=>r.data).catch(r=>{console.error("error",r)})}),Mh=jx("evsearch/fetchSearchOptions",async()=>{const e=window.location.href;let t="https://api.evkx.net/api/searchoptions";return e.startsWith("http://localhost")&&(t="https://localhost:7033/api/searchoptions"),await Lx.get(t).then(n=>n.data).catch(n=>{console.error("error",n)})}),Ux=Gz({name:"evsearch",initialState:rR,reducers:{updateSortOrder:(e,t)=>{const n=t.payload.trim().toLowerCase();e.search.sortOrder=parseInt(n)},updateEvType:(e,t)=>{const n=t.payload;e.search.evType=n},updateBrands:(e,t)=>{const n=t.payload;e.search.brands=n},updateSeatConfig:(e,t)=>{const n=t.payload;e.search.seatConfiguration=n},updateAllWheelDrive:(e,t)=>{const n=t.payload;e.search.allWheelDrive=n},updateNightVision:(e,t)=>{const n=t.payload;e.search.nightVision=n},updateAdaptiveDamping:(e,t)=>{const n=t.payload;e.search.adaptiveSuspension=n},updateAdaptiveAirSuspension:(e,t)=>{const n=t.payload;e.search.airSuspension=n},updateInstrumentCluster:(e,t)=>{const n=t.payload;e.search.instrumentCluster=n},updateHeadUpDisplay:(e,t)=>{const n=t.payload;e.search.headUpDisplay=n},updateAndroidAuto:(e,t)=>{const n=t.payload;e.search.androidAuto=n},updateAppleCarPlay:(e,t)=>{const n=t.payload;e.search.appleCarPlay=n},updateColors:(e,t)=>{const n=t.payload;e.search.colors=n}},extraReducers:e=>{e.addCase(Ih.fulfilled,(t,n)=>{const r=n.payload;t.evList=r,t.loading=!1}).addCase(Ih.rejected,(t,n)=>{t.error=n.error.message}).addCase(Mh.fulfilled,(t,n)=>{const r=n.payload;t.searchOptions=r,t.brandloading=!1}).addCase(Mh.rejected,(t,n)=>{t.error=n.error.message})}}),oR=Ux.reducer,{updateSortOrder:iR,updateEvType:aR,updateBrands:sR,updateSeatConfig:lR,updateAllWheelDrive:uR,updateNightVision:cR,updateAdaptiveDamping:dR,updateAdaptiveAirSuspension:WR,updateInstrumentCluster:fR,updateHeadUpDisplay:hR,updateAndroidAuto:pR,updateAppleCarPlay:mR,updateColors:_R}=Ux.actions,ar=Q2,vR=()=>pP(),gR="_pageContainer_kmlfw_3",yR="_exitButton_kmlfw_71",bR={pageContainer:gR,exitButton:yR},xR=({children:e})=>(pC(),$p("common"),de("div",{className:bR.pageContainer,children:de("div",{children:e})})),wR="_evsearchAccordionContent_1w6bc_1",kR="_evText_1w6bc_11",SR="_scopeItems_1w6bc_19",PR="_line_1w6bc_27",CR="_contentTexts_1w6bc_37",ER="_bottomContentTexts_1w6bc_47",OR="_thumb_1w6bc_55",TR="_card_1w6bc_73",LR="_cards_1w6bc_81",zR="_thumbcontainer_1w6bc_105",ci={evsearchAccordionContent:wR,evText:kR,scopeItems:SR,line:PR,contentTexts:CR,bottomContentTexts:ER,thumb:OR,card:TR,cards:LR,thumbcontainer:zR},RR=({title:e="No info",subtitle:t="No info",topContentText:n,textList:r=[""],maxPower:i=0,topSpeedKph:a=0,infoUri:l="",netBattery:u=0,wltpConsumption:d=0,wltpRange:f=0,zeroTo100:m=0,thumbUri:_=""})=>{const[p,g]=T.useState(!1);return de("div",{children:mt(ax,{open:p,onClick:()=>{g(!p)},children:[de(ux,{subtitle:t,children:e}),de(sx,{children:de("div",{className:ci.evsearchAccordionContent,children:mt("div",{className:ci.cards,children:[de("div",{className:ci.card,children:de("div",{className:ci.thumbcontainer,children:de("img",{src:_,alt:e,className:ci.thumb})})}),mt("div",{className:ci.card,children:["Read our ",de("a",{href:l,children:"full article"}),", see all"," ",de("a",{href:l+"specifications/",children:"specifications"}),", or see our"," ",de("a",{href:l+"gallery/",children:"image gallery"}),".",de("br",{}),de("br",{}),de(Jp,{legend:xo("evsearch.specificationshiglihts"),children:mt(rL,{borderStyle:"dashed",children:[mt(ui,{children:[de("b",{children:xo("evsearch.specwltprange")})," - ",f," km"]}),mt(ui,{children:[de("b",{children:xo("evsearch.specwltpconsumption")})," - ",d," kWh/100km"]}),mt(ui,{children:[de("b",{children:xo("evsearch.specnetbattery")})," - ",u," kWh"]}),mt(ui,{children:[de("b",{children:xo("evsearch.zeroto100")})," - ",m," seconds"]}),mt(ui,{children:[de("b",{children:xo("evsearch.topspeed")}),"- ",a," km/h"]}),mt(ui,{children:[de("b",{children:xo("evsearch.maxpower")})," - ",i," kW"]})]})})]})]})})})]})})},AR="_pageContent_xhe0h_1",NR="_pageContentContainer_xhe0h_19",BR="_resultInfo_xhe0h_33",Oa={pageContent:AR,pageContentContainer:NR,resultInfo:BR},Ay=()=>{const{t:e}=$p("common"),t=ar(R=>R.evsearchResult.loading),n=vR(),r=async()=>await n(Mh()),i=ar(R=>R.evsearchResult.evList.evs),a=ar(R=>R.evsearchResult.evList.count),l=ar(R=>R.evsearchResult.searchOptions.brands),u=ar(R=>R.evsearchResult.searchOptions.bodyTypes),d=ar(R=>R.evsearchResult.searchOptions.colors),f=ar(R=>R.evsearchResult.searchOptions.seatConfiguration),m=ar(R=>R.evsearchResult.search),_=async R=>await n(Ih(R)),p=ar(R=>R.evsearchResult.error);T.useEffect(()=>{t&&(_(m),r())},[]),T.useEffect(()=>{_(m)},[m]);const g=R=>{n(iR(R))},x=R=>{n(sR(R))},w=l.map(R=>({label:R,value:R})),C=R=>{n(aR(R))},y=R=>{n(lR(R))},b=R=>{const Y=R.target.checked;n(uR(Y))},S=R=>{const Y=R.target.checked;n(cR(Y))},P=R=>{const Y=R.target.checked;n(dR(Y))},z=R=>{const Y=R.target.checked;n(fR(Y))},I=R=>{const Y=R.target.checked;n(hR(Y))},D=R=>{const Y=R.target.checked;n(mR(Y))},j=R=>{const Y=R.target.checked;n(pR(Y))},V=R=>{n(_R(R))},U=()=>p?de(RO,{title:e("api_delegation.data_retrieval_failed"),variant:Ur.Error,forceMobileLayout:!0,children:mt("div",{children:[e("api_delegation.error_message"),": ",p]})}):t?e("evsearch.loading")+"...":i.map((R,Y)=>de(RR,{title:R.name,subtitle:R.sortValue+" "+R.sortParameter,topContentText:R.infoUri,maxPower:R.maxPowerKw,topSpeedKph:R.topSpeedKph,infoUri:R.infoUri,wltpConsumption:R.wltpConsumption,wltpRange:R.wltpRange,netBattery:R.netBattery,zeroTo100:R.zeroTo100,thumbUri:R.thumbUri},Y));return de(xR,{children:de(BO,{children:mt(Cg,{children:[mt("div",{className:Oa.pageContent,children:[de(Ch,{label:String(e("evsearch.sortorder")),multiple:!1,onChange:g,options:[{label:String(e("evsearch.sortorderbrand")),value:"1"},{label:String(e("evsearch.sortorderrange")),value:"2"},{label:String(e("evsearch.sortordernetsize")),value:"3"},{label:String(e("evsearch.sortordernetsizedesc")),value:"4"},{label:"WLTP forbruk minium spesifikasjon",value:"5"},{label:"Power more > less",value:"6"},{label:"Top speed more >less",value:"7"},{label:"Max DC Charging",value:"8"},{label:"Nominal voltage",value:"9"},{label:"0-100kph",value:"10"}]}),de(Ch,{label:String(e("evsearch.brandfilter")),multiple:!0,onChange:x,options:w}),de("br",{}),de(Il,{"data-testid":"evsearch-evtype",variant:Ni.Horizontal,onChange:R=>{C(R)},compact:!0,legend:"Select body type",items:u.map(R=>({label:R,name:R,checked:m.evType===void 0||m.evType.includes(R)}))}),de("br",{}),de(j1,{items:[{content:de(Il,{"data-testid":"evsearch-seatconfig",variant:Ni.Horizontal,onChange:R=>{y(R)},compact:!0,legend:"Number of seats",items:f.map(R=>({label:R,name:R,checked:m.seatConfiguration===void 0||m.seatConfiguration.includes(R)}))}),name:"Seats"},{content:mt(Cg,{children:[de(ur,{checked:m.allWheelDrive,label:"All wheel drive",onChange:b,compact:!0}),de("br",{}),de(ur,{checked:m.adaptiveSuspension,label:"Adaptive Suspension",onChange:P,compact:!0})]}),name:"Drivetrain"},{content:de(ur,{checked:m.nightVision,label:"Nightvision",onChange:S,compact:!0}),name:"Driver Assistance"},{content:de(Il,{"data-testid":"evsearch-evtype",variant:Ni.Horizontal,onChange:R=>{V(R)},compact:!0,legend:"Select paint color",items:d.map(R=>({label:R,name:R,checked:m.colors===void 0||m.colors.includes(R)}))}),name:"Exterior"},{content:mt("div",{children:[de(ur,{checked:m.headUpDisplay,label:"Head Up Display",onChange:I,compact:!0}),de("br",{}),de(ur,{checked:m.instrumentCluster,label:"Dedicated Instrument Cluster",onChange:z,compact:!0}),de("br",{}),de(ur,{checked:m.androidAuto,label:"Android Auto Support",onChange:j,compact:!0}),de("br",{}),de(ur,{checked:m.appleCarPlay,label:"Apple Car Play Support",onChange:D,compact:!0})]}),name:"UI & Interface"}]}),de("br",{})]}),de("div",{className:Oa.pageContentAccordionsContainer,children:mt("div",{className:Oa.apiAccordions,children:[mt("h4",{className:Oa.resultInfo,children:[a," ",e("evsearch.searchresult"),":"]}),de("div",{className:Oa.accordionScrollContainer,children:U()})]})})]})})})},IR=OC([{path:"/",errorElement:de(Fd,{})},{path:"evsearch",element:de(Ay,{}),errorElement:de(Fd,{})},{path:"nb/evsearch",element:de(Ay,{}),errorElement:de(Fd,{})}],{basename:"/"}),MR={backendApiUrl:new URL(window.location.href).origin+"/api/",defaultLocale:"no_nb"},Ul={backendApiUrl:{}.VITE_BACKEND_API_URL,defaultLocale:{}.VITE_DEFAULT_LOCALE};for(const e in Ul)Ul[e]===void 0&&delete Ul[e];const DR={...MR,...Ul};function FR(e){return DR[e]}const jR=({children:e})=>{const{i18n:t}=$p("common"),n=window.location.href;let r="en";n.includes("nb/")&&(r="no_nb");const a=`/public/localizations/${r}.json`,l=new URL(a,import.meta.url).href;return PE("Localizations",async()=>{const d=await(await fetch(l)).json();At.addResourceBundle(t.language,"common",d)},{staleTime:1/0,suspense:!0}),de(vk,{children:e})};var Du={},UR={get exports(){return Du},set exports(e){Du=e}};(function(e,t){(function(n,r){r(t)})(di,function(n){function r(O,B){O.super_=B,O.prototype=Object.create(B.prototype,{constructor:{value:O,enumerable:!1,writable:!0,configurable:!0}})}function i(O,B){Object.defineProperty(this,"kind",{value:O,enumerable:!0}),B&&B.length&&Object.defineProperty(this,"path",{value:B,enumerable:!0})}function a(O,B,A){a.super_.call(this,"E",O),Object.defineProperty(this,"lhs",{value:B,enumerable:!0}),Object.defineProperty(this,"rhs",{value:A,enumerable:!0})}function l(O,B){l.super_.call(this,"N",O),Object.defineProperty(this,"rhs",{value:B,enumerable:!0})}function u(O,B){u.super_.call(this,"D",O),Object.defineProperty(this,"lhs",{value:B,enumerable:!0})}function d(O,B,A){d.super_.call(this,"A",O),Object.defineProperty(this,"index",{value:B,enumerable:!0}),Object.defineProperty(this,"item",{value:A,enumerable:!0})}function f(O,B,A){var Q=O.slice((A||B)+1||O.length);return O.length=B<0?O.length+B:B,O.push.apply(O,Q),O}function m(O){var B=typeof O>"u"?"undefined":fe(O);return B!=="object"?B:O===Math?"math":O===null?"null":Array.isArray(O)?"array":Object.prototype.toString.call(O)==="[object Date]"?"date":typeof O.toString=="function"&&/^\/.*\//.test(O.toString())?"regexp":"object"}function _(O,B,A,Q,te,$,ne){te=te||[],ne=ne||[];var se=te.slice(0);if(typeof $<"u"){if(Q){if(typeof Q=="function"&&Q(se,$))return;if((typeof Q>"u"?"undefined":fe(Q))==="object"){if(Q.prefilter&&Q.prefilter(se,$))return;if(Q.normalize){var Ue=Q.normalize(se,$,O,B);Ue&&(O=Ue[0],B=Ue[1])}}}se.push($)}m(O)==="regexp"&&m(B)==="regexp"&&(O=O.toString(),B=B.toString());var We=typeof O>"u"?"undefined":fe(O),Re=typeof B>"u"?"undefined":fe(B),Ee=We!=="undefined"||ne&&ne[ne.length-1].lhs&&ne[ne.length-1].lhs.hasOwnProperty($),qe=Re!=="undefined"||ne&&ne[ne.length-1].rhs&&ne[ne.length-1].rhs.hasOwnProperty($);if(!Ee&&qe)A(new l(se,B));else if(!qe&&Ee)A(new u(se,O));else if(m(O)!==m(B))A(new a(se,O,B));else if(m(O)==="date"&&O-B!==0)A(new a(se,O,B));else if(We==="object"&&O!==null&&B!==null)if(ne.filter(function(Ne){return Ne.lhs===O}).length)O!==B&&A(new a(se,O,B));else{if(ne.push({lhs:O,rhs:B}),Array.isArray(O)){var Te;for(O.length,Te=0;Te<O.length;Te++)Te>=B.length?A(new d(se,Te,new u(void 0,O[Te]))):_(O[Te],B[Te],A,Q,se,Te,ne);for(;Te<B.length;)A(new d(se,Te,new l(void 0,B[Te++])))}else{var Kt=Object.keys(O),Ut=Object.keys(B);Kt.forEach(function(Ne,Ct){var Bn=Ut.indexOf(Ne);Bn>=0?(_(O[Ne],B[Ne],A,Q,se,Ne,ne),Ut=f(Ut,Bn)):_(O[Ne],void 0,A,Q,se,Ne,ne)}),Ut.forEach(function(Ne){_(void 0,B[Ne],A,Q,se,Ne,ne)})}ne.length=ne.length-1}else O!==B&&(We==="number"&&isNaN(O)&&isNaN(B)||A(new a(se,O,B)))}function p(O,B,A,Q){return Q=Q||[],_(O,B,function(te){te&&Q.push(te)},A),Q.length?Q:void 0}function g(O,B,A){if(A.path&&A.path.length){var Q,te=O[B],$=A.path.length-1;for(Q=0;Q<$;Q++)te=te[A.path[Q]];switch(A.kind){case"A":g(te[A.path[Q]],A.index,A.item);break;case"D":delete te[A.path[Q]];break;case"E":case"N":te[A.path[Q]]=A.rhs}}else switch(A.kind){case"A":g(O[B],A.index,A.item);break;case"D":O=f(O,B);break;case"E":case"N":O[B]=A.rhs}return O}function x(O,B,A){if(O&&B&&A&&A.kind){for(var Q=O,te=-1,$=A.path?A.path.length-1:0;++te<$;)typeof Q[A.path[te]]>"u"&&(Q[A.path[te]]=typeof A.path[te]=="number"?[]:{}),Q=Q[A.path[te]];switch(A.kind){case"A":g(A.path?Q[A.path[te]]:Q,A.index,A.item);break;case"D":delete Q[A.path[te]];break;case"E":case"N":Q[A.path[te]]=A.rhs}}}function w(O,B,A){if(A.path&&A.path.length){var Q,te=O[B],$=A.path.length-1;for(Q=0;Q<$;Q++)te=te[A.path[Q]];switch(A.kind){case"A":w(te[A.path[Q]],A.index,A.item);break;case"D":te[A.path[Q]]=A.lhs;break;case"E":te[A.path[Q]]=A.lhs;break;case"N":delete te[A.path[Q]]}}else switch(A.kind){case"A":w(O[B],A.index,A.item);break;case"D":O[B]=A.lhs;break;case"E":O[B]=A.lhs;break;case"N":O=f(O,B)}return O}function C(O,B,A){if(O&&B&&A&&A.kind){var Q,te,$=O;for(te=A.path.length-1,Q=0;Q<te;Q++)typeof $[A.path[Q]]>"u"&&($[A.path[Q]]={}),$=$[A.path[Q]];switch(A.kind){case"A":w($[A.path[Q]],A.index,A.item);break;case"D":$[A.path[Q]]=A.lhs;break;case"E":$[A.path[Q]]=A.lhs;break;case"N":delete $[A.path[Q]]}}}function y(O,B,A){if(O&&B){var Q=function(te){A&&!A(O,B,te)||x(O,B,te)};_(O,B,Q)}}function b(O){return"color: "+M[O].color+"; font-weight: bold"}function S(O){var B=O.kind,A=O.path,Q=O.lhs,te=O.rhs,$=O.index,ne=O.item;switch(B){case"E":return[A.join("."),Q,"→",te];case"N":return[A.join("."),te];case"D":return[A.join(".")];case"A":return[A.join(".")+"["+$+"]",ne];default:return[]}}function P(O,B,A,Q){var te=p(O,B);try{Q?A.groupCollapsed("diff"):A.group("diff")}catch{A.log("diff")}te?te.forEach(function($){var ne=$.kind,se=S($);A.log.apply(A,["%c "+M[ne].text,b(ne)].concat(ee(se)))}):A.log("—— no diff ——");try{A.groupEnd()}catch{A.log("—— diff end —— ")}}function z(O,B,A,Q){switch(typeof O>"u"?"undefined":fe(O)){case"object":return typeof O[Q]=="function"?O[Q].apply(O,ee(A)):O[Q];case"function":return O(B);default:return O}}function I(O){var B=O.timestamp,A=O.duration;return function(Q,te,$){var ne=["action"];return ne.push("%c"+String(Q.type)),B&&ne.push("%c@ "+te),A&&ne.push("%c(in "+$.toFixed(2)+" ms)"),ne.join(" ")}}function D(O,B){var A=B.logger,Q=B.actionTransformer,te=B.titleFormatter,$=te===void 0?I(B):te,ne=B.collapsed,se=B.colors,Ue=B.level,We=B.diff,Re=typeof B.titleFormatter>"u";O.forEach(function(Ee,qe){var Te=Ee.started,Kt=Ee.startedTime,Ut=Ee.action,Ne=Ee.prevState,Ct=Ee.error,Bn=Ee.took,$t=Ee.nextState,Jn=O[qe+1];Jn&&($t=Jn.prevState,Bn=Jn.started-Te);var Nt=Q(Ut),Sr=typeof ne=="function"?ne(function(){return $t},Ut,Ee):ne,W=_e(Kt),H=se.title?"color: "+se.title(Nt)+";":"",G=["color: gray; font-weight: lighter;"];G.push(H),B.timestamp&&G.push("color: gray; font-weight: lighter;"),B.duration&&G.push("color: gray; font-weight: lighter;");var le=$(Nt,W,Bn);try{Sr?se.title&&Re?A.groupCollapsed.apply(A,["%c "+le].concat(G)):A.groupCollapsed(le):se.title&&Re?A.group.apply(A,["%c "+le].concat(G)):A.group(le)}catch{A.log(le)}var ie=z(Ue,Nt,[Ne],"prevState"),ve=z(Ue,Nt,[Nt],"action"),pe=z(Ue,Nt,[Ct,Ne],"error"),ye=z(Ue,Nt,[$t],"nextState");if(ie)if(se.prevState){var me="color: "+se.prevState(Ne)+"; font-weight: bold";A[ie]("%c prev state",me,Ne)}else A[ie]("prev state",Ne);if(ve)if(se.action){var it="color: "+se.action(Nt)+"; font-weight: bold";A[ve]("%c action    ",it,Nt)}else A[ve]("action    ",Nt);if(Ct&&pe)if(se.error){var xe="color: "+se.error(Ct,Ne)+"; font-weight: bold;";A[pe]("%c error     ",xe,Ct)}else A[pe]("error     ",Ct);if(ye)if(se.nextState){var je="color: "+se.nextState($t)+"; font-weight: bold";A[ye]("%c next state",je,$t)}else A[ye]("next state",$t);We&&P(Ne,$t,A,Sr);try{A.groupEnd()}catch{A.log("—— log end ——")}})}function j(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},B=Object.assign({},oe,O),A=B.logger,Q=B.stateTransformer,te=B.errorTransformer,$=B.predicate,ne=B.logErrors,se=B.diffPredicate;if(typeof A>"u")return function(){return function(We){return function(Re){return We(Re)}}};if(O.getState&&O.dispatch)return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
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
`),function(){return function(We){return function(Re){return We(Re)}}};var Ue=[];return function(We){var Re=We.getState;return function(Ee){return function(qe){if(typeof $=="function"&&!$(Re,qe))return Ee(qe);var Te={};Ue.push(Te),Te.started=re.now(),Te.startedTime=new Date,Te.prevState=Q(Re()),Te.action=qe;var Kt=void 0;if(ne)try{Kt=Ee(qe)}catch(Ne){Te.error=te(Ne)}else Kt=Ee(qe);Te.took=re.now()-Te.started,Te.nextState=Q(Re());var Ut=B.diff&&typeof se=="function"?se(Re,qe):B.diff;if(D(Ue,Object.assign({},B,{diff:Ut})),Ue.length=0,Te.error)throw Te.error;return Kt}}}}var V,U,R=function(O,B){return new Array(B+1).join(O)},Y=function(O,B){return R("0",B-O.toString().length)+O},_e=function(O){return Y(O.getHours(),2)+":"+Y(O.getMinutes(),2)+":"+Y(O.getSeconds(),2)+"."+Y(O.getMilliseconds(),3)},re=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance:Date,fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},ee=function(O){if(Array.isArray(O)){for(var B=0,A=Array(O.length);B<O.length;B++)A[B]=O[B];return A}return Array.from(O)},ue=[];V=(typeof di>"u"?"undefined":fe(di))==="object"&&di?di:typeof window<"u"?window:{},U=V.DeepDiff,U&&ue.push(function(){typeof U<"u"&&V.DeepDiff===p&&(V.DeepDiff=U,U=void 0)}),r(a,i),r(l,i),r(u,i),r(d,i),Object.defineProperties(p,{diff:{value:p,enumerable:!0},observableDiff:{value:_,enumerable:!0},applyDiff:{value:y,enumerable:!0},applyChange:{value:x,enumerable:!0},revertChange:{value:C,enumerable:!0},isConflict:{value:function(){return typeof U<"u"},enumerable:!0},noConflict:{value:function(){return ue&&(ue.forEach(function(O){O()}),ue=null),p},enumerable:!0}});var M={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},oe={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(O){return O},actionTransformer:function(O){return O},errorTransformer:function(O){return O},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},K=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},B=O.dispatch,A=O.getState;return typeof B=="function"||typeof A=="function"?j()({dispatch:B,getState:A}):void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`)};n.defaults=oe,n.createLogger=j,n.logger=K,n.default=K,Object.defineProperty(n,"__esModule",{value:!0})})})(UR,Du);Du.createLogger();const $R=Vz({reducer:{evsearchResult:oR}}),ZR=e=>{if(e==="no_nb")return"no_nb";if(e==="en")return"en";if(e==="no_nn")return"no_nn"};nO(ZC).init({lng:ZR("no_nb"),fallbackLng:FR("defaultLocale"),ns:["common"],defaultNS:"common",returnNull:!1},()=>{const e=new hE({defaultOptions:void 0});Z0(document.getElementById("root")).render(de(T.StrictMode,{children:de(dP,{store:$R,children:de(yE,{client:e,children:de(jR,{children:de(SC,{router:IR})})})})}))});
