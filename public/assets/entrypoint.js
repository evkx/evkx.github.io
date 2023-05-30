function Fk(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _b(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ee={},Uk={get exports(){return ee},set exports(e){ee=e}},Qu={},E={},$k={get exports(){return E},set exports(e){E=e}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rs=Symbol.for("react.element"),Wk=Symbol.for("react.portal"),Hk=Symbol.for("react.fragment"),Zk=Symbol.for("react.strict_mode"),Vk=Symbol.for("react.profiler"),qk=Symbol.for("react.provider"),Kk=Symbol.for("react.context"),Qk=Symbol.for("react.forward_ref"),Gk=Symbol.for("react.suspense"),Jk=Symbol.for("react.memo"),Yk=Symbol.for("react.lazy"),O_=Symbol.iterator;function Xk(e){return e===null||typeof e!="object"?null:(e=O_&&e[O_]||e["@@iterator"],typeof e=="function"?e:null)}var gb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vb=Object.assign,yb={};function aa(e,t,n){this.props=e,this.context=t,this.refs=yb,this.updater=n||gb}aa.prototype.isReactComponent={};aa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};aa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bb(){}bb.prototype=aa.prototype;function ip(e,t,n){this.props=e,this.context=t,this.refs=yb,this.updater=n||gb}var ap=ip.prototype=new bb;ap.constructor=ip;vb(ap,aa.prototype);ap.isPureReactComponent=!0;var L_=Array.isArray,xb=Object.prototype.hasOwnProperty,sp={current:null},wb={key:!0,ref:!0,__self:!0,__source:!0};function kb(e,t,n){var r,o={},a=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)xb.call(t,r)&&!wb.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(u===1)o.children=n;else if(1<u){for(var d=Array(u),f=0;f<u;f++)d[f]=arguments[f+2];o.children=d}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)o[r]===void 0&&(o[r]=u[r]);return{$$typeof:Rs,type:e,key:a,ref:l,props:o,_owner:sp.current}}function eS(e,t){return{$$typeof:Rs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function lp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Rs}function tS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var T_=/\/+/g;function yd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?tS(""+e.key):t.toString(36)}function Al(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Rs:case Wk:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+yd(l,0):r,L_(o)?(n="",e!=null&&(n=e.replace(T_,"$&/")+"/"),Al(o,t,n,"",function(f){return f})):o!=null&&(lp(o)&&(o=eS(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(T_,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",L_(e))for(var u=0;u<e.length;u++){a=e[u];var d=r+yd(a,u);l+=Al(a,t,n,d,o)}else if(d=Xk(e),typeof d=="function")for(e=d.call(e),u=0;!(a=e.next()).done;)a=a.value,d=r+yd(a,u++),l+=Al(a,t,n,d,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ul(e,t,n){if(e==null)return e;var r=[],o=0;return Al(e,r,"","",function(a){return t.call(n,a,o++)}),r}function nS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Vt={current:null},zl={transition:null},rS={ReactCurrentDispatcher:Vt,ReactCurrentBatchConfig:zl,ReactCurrentOwner:sp};Re.Children={map:ul,forEach:function(e,t,n){ul(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ul(e,function(){t++}),t},toArray:function(e){return ul(e,function(t){return t})||[]},only:function(e){if(!lp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Re.Component=aa;Re.Fragment=Hk;Re.Profiler=Vk;Re.PureComponent=ip;Re.StrictMode=Zk;Re.Suspense=Gk;Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rS;Re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vb({},e.props),o=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=sp.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(d in t)xb.call(t,d)&&!wb.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&u!==void 0?u[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){u=Array(d);for(var f=0;f<d;f++)u[f]=arguments[f+2];r.children=u}return{$$typeof:Rs,type:e.type,key:o,ref:a,props:r,_owner:l}};Re.createContext=function(e){return e={$$typeof:Kk,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qk,_context:e},e.Consumer=e};Re.createElement=kb;Re.createFactory=function(e){var t=kb.bind(null,e);return t.type=e,t};Re.createRef=function(){return{current:null}};Re.forwardRef=function(e){return{$$typeof:Qk,render:e}};Re.isValidElement=lp;Re.lazy=function(e){return{$$typeof:Yk,_payload:{_status:-1,_result:e},_init:nS}};Re.memo=function(e,t){return{$$typeof:Jk,type:e,compare:t===void 0?null:t}};Re.startTransition=function(e){var t=zl.transition;zl.transition={};try{e()}finally{zl.transition=t}};Re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Re.useCallback=function(e,t){return Vt.current.useCallback(e,t)};Re.useContext=function(e){return Vt.current.useContext(e)};Re.useDebugValue=function(){};Re.useDeferredValue=function(e){return Vt.current.useDeferredValue(e)};Re.useEffect=function(e,t){return Vt.current.useEffect(e,t)};Re.useId=function(){return Vt.current.useId()};Re.useImperativeHandle=function(e,t,n){return Vt.current.useImperativeHandle(e,t,n)};Re.useInsertionEffect=function(e,t){return Vt.current.useInsertionEffect(e,t)};Re.useLayoutEffect=function(e,t){return Vt.current.useLayoutEffect(e,t)};Re.useMemo=function(e,t){return Vt.current.useMemo(e,t)};Re.useReducer=function(e,t,n){return Vt.current.useReducer(e,t,n)};Re.useRef=function(e){return Vt.current.useRef(e)};Re.useState=function(e){return Vt.current.useState(e)};Re.useSyncExternalStore=function(e,t,n){return Vt.current.useSyncExternalStore(e,t,n)};Re.useTransition=function(){return Vt.current.useTransition()};Re.version="18.2.0";(function(e){e.exports=Re})($k);const D=_b(E),Sb=Fk({__proto__:null,default:D},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oS=E,iS=Symbol.for("react.element"),aS=Symbol.for("react.fragment"),sS=Object.prototype.hasOwnProperty,lS=oS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uS={key:!0,ref:!0,__self:!0,__source:!0};function Pb(e,t,n){var r,o={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)sS.call(t,r)&&!uS.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:iS,type:e,key:a,ref:l,props:o,_owner:lS.current}}Qu.Fragment=aS;Qu.jsx=Pb;Qu.jsxs=Pb;(function(e){e.exports=Qu})(Uk);var qi={},cS={get exports(){return qi},set exports(e){qi=e}},un={},Cf={},dS={get exports(){return Cf},set exports(e){Cf=e}},Cb={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,ne){var q=M.length;M.push(ne);e:for(;0<q;){var O=q-1>>>1,A=M[O];if(0<o(A,ne))M[O]=ne,M[q]=A,q=O;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var ne=M[0],q=M.pop();if(q!==ne){M[0]=q;e:for(var O=0,A=M.length,z=A>>>1;O<z;){var Z=2*(O+1)-1,re=M[Z],ue=Z+1,de=M[ue];if(0>o(re,q))ue<A&&0>o(de,re)?(M[O]=de,M[ue]=q,O=ue):(M[O]=re,M[Z]=q,O=Z);else if(ue<A&&0>o(de,q))M[O]=de,M[ue]=q,O=ue;else break e}}return ne}function o(M,ne){var q=M.sortIndex-ne.sortIndex;return q!==0?q:M.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var d=[],f=[],p=1,m=null,g=3,x=!1,y=!1,w=!1,P=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(M){for(var ne=n(f);ne!==null;){if(ne.callback===null)r(f);else if(ne.startTime<=M)r(f),ne.sortIndex=ne.expirationTime,t(d,ne);else break;ne=n(f)}}function C(M){if(w=!1,k(M),!y)if(n(d)!==null)y=!0,Y(R);else{var ne=n(f);ne!==null&&B(C,ne.startTime-M)}}function R(M,ne){y=!1,w&&(w=!1,_(U),U=-1),x=!0;var q=g;try{for(k(ne),m=n(d);m!==null&&(!(m.expirationTime>ne)||M&&!J());){var O=m.callback;if(typeof O=="function"){m.callback=null,g=m.priorityLevel;var A=O(m.expirationTime<=ne);ne=e.unstable_now(),typeof A=="function"?m.callback=A:m===n(d)&&r(d),k(ne)}else r(d);m=n(d)}if(m!==null)var z=!0;else{var Z=n(f);Z!==null&&B(C,Z.startTime-ne),z=!1}return z}finally{m=null,g=q,x=!1}}var I=!1,N=null,U=-1,$=5,F=-1;function J(){return!(e.unstable_now()-F<$)}function le(){if(N!==null){var M=e.unstable_now();F=M;var ne=!0;try{ne=N(!0,M)}finally{ne?X():(I=!1,N=null)}}else I=!1}var X;if(typeof b=="function")X=function(){b(le)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,ce=Q.port2;Q.port1.onmessage=le,X=function(){ce.postMessage(null)}}else X=function(){P(le,0)};function Y(M){N=M,I||(I=!0,X())}function B(M,ne){U=P(function(){M(e.unstable_now())},ne)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,Y(R))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(M){switch(g){case 1:case 2:case 3:var ne=3;break;default:ne=g}var q=g;g=ne;try{return M()}finally{g=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,ne){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var q=g;g=M;try{return ne()}finally{g=q}},e.unstable_scheduleCallback=function(M,ne,q){var O=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?O+q:O):q=O,M){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=q+A,M={id:p++,callback:ne,priorityLevel:M,startTime:q,expirationTime:A,sortIndex:-1},q>O?(M.sortIndex=q,t(f,M),n(d)===null&&M===n(f)&&(w?(_(U),U=-1):w=!0,B(C,q-O))):(M.sortIndex=A,t(d,M),y||x||(y=!0,Y(R))),M},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(M){var ne=g;return function(){var q=g;g=ne;try{return M.apply(this,arguments)}finally{g=q}}}})(Cb);(function(e){e.exports=Cb})(dS);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eb=E,sn=Cf;function se(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ob=new Set,as={};function ti(e,t){Ki(e,t),Ki(e+"Capture",t)}function Ki(e,t){for(as[e]=t,e=0;e<t.length;e++)Ob.add(t[e])}var Pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ef=Object.prototype.hasOwnProperty,fS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,R_={},A_={};function hS(e){return Ef.call(A_,e)?!0:Ef.call(R_,e)?!1:fS.test(e)?A_[e]=!0:(R_[e]=!0,!1)}function pS(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function mS(e,t,n,r){if(t===null||typeof t>"u"||pS(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function qt(e,t,n,r,o,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){zt[e]=new qt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];zt[t]=new qt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){zt[e]=new qt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){zt[e]=new qt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){zt[e]=new qt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){zt[e]=new qt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){zt[e]=new qt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){zt[e]=new qt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){zt[e]=new qt(e,5,!1,e.toLowerCase(),null,!1,!1)});var up=/[\-:]([a-z])/g;function cp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(up,cp);zt[t]=new qt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(up,cp);zt[t]=new qt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(up,cp);zt[t]=new qt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){zt[e]=new qt(e,1,!1,e.toLowerCase(),null,!1,!1)});zt.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){zt[e]=new qt(e,1,!1,e.toLowerCase(),null,!0,!0)});function dp(e,t,n,r){var o=zt.hasOwnProperty(t)?zt[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(mS(t,n,o,r)&&(n=null),r||o===null?hS(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Tr=Eb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cl=Symbol.for("react.element"),wi=Symbol.for("react.portal"),ki=Symbol.for("react.fragment"),fp=Symbol.for("react.strict_mode"),Of=Symbol.for("react.profiler"),Lb=Symbol.for("react.provider"),Tb=Symbol.for("react.context"),hp=Symbol.for("react.forward_ref"),Lf=Symbol.for("react.suspense"),Tf=Symbol.for("react.suspense_list"),pp=Symbol.for("react.memo"),jr=Symbol.for("react.lazy"),Rb=Symbol.for("react.offscreen"),z_=Symbol.iterator;function La(e){return e===null||typeof e!="object"?null:(e=z_&&e[z_]||e["@@iterator"],typeof e=="function"?e:null)}var ut=Object.assign,bd;function $a(e){if(bd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bd=t&&t[1]||""}return`
`+bd+e}var xd=!1;function wd(e,t){if(!e||xd)return"";xd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var o=f.stack.split(`
`),a=r.stack.split(`
`),l=o.length-1,u=a.length-1;1<=l&&0<=u&&o[l]!==a[u];)u--;for(;1<=l&&0<=u;l--,u--)if(o[l]!==a[u]){if(l!==1||u!==1)do if(l--,u--,0>u||o[l]!==a[u]){var d=`
`+o[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=u);break}}}finally{xd=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?$a(e):""}function _S(e){switch(e.tag){case 5:return $a(e.type);case 16:return $a("Lazy");case 13:return $a("Suspense");case 19:return $a("SuspenseList");case 0:case 2:case 15:return e=wd(e.type,!1),e;case 11:return e=wd(e.type.render,!1),e;case 1:return e=wd(e.type,!0),e;default:return""}}function Rf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ki:return"Fragment";case wi:return"Portal";case Of:return"Profiler";case fp:return"StrictMode";case Lf:return"Suspense";case Tf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Tb:return(e.displayName||"Context")+".Consumer";case Lb:return(e._context.displayName||"Context")+".Provider";case hp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pp:return t=e.displayName||null,t!==null?t:Rf(e.type)||"Memo";case jr:t=e._payload,e=e._init;try{return Rf(e(t))}catch{}}return null}function gS(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rf(t);case 8:return t===fp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function fo(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ab(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vS(e){var t=Ab(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function dl(e){e._valueTracker||(e._valueTracker=vS(e))}function zb(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ab(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function eu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Af(e,t){var n=t.checked;return ut({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function N_(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=fo(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Nb(e,t){t=t.checked,t!=null&&dp(e,"checked",t,!1)}function zf(e,t){Nb(e,t);var n=fo(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Nf(e,t.type,n):t.hasOwnProperty("defaultValue")&&Nf(e,t.type,fo(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function I_(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Nf(e,t,n){(t!=="number"||eu(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Wa=Array.isArray;function Bi(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+fo(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function If(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(se(91));return ut({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function B_(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(se(92));if(Wa(n)){if(1<n.length)throw Error(se(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:fo(n)}}function Ib(e,t){var n=fo(t.value),r=fo(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function M_(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bb(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fl,Mb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fl=fl||document.createElement("div"),fl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ss(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yS=["Webkit","ms","Moz","O"];Object.keys(qa).forEach(function(e){yS.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qa[t]=qa[e]})});function Db(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||qa.hasOwnProperty(e)&&qa[e]?(""+t).trim():t+"px"}function jb(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Db(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var bS=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mf(e,t){if(t){if(bS[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(se(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(se(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(se(61))}if(t.style!=null&&typeof t.style!="object")throw Error(se(62))}}function Df(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jf=null;function mp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ff=null,Mi=null,Di=null;function D_(e){if(e=Ns(e)){if(typeof Ff!="function")throw Error(se(280));var t=e.stateNode;t&&(t=ec(t),Ff(e.stateNode,e.type,t))}}function Fb(e){Mi?Di?Di.push(e):Di=[e]:Mi=e}function Ub(){if(Mi){var e=Mi,t=Di;if(Di=Mi=null,D_(e),t)for(e=0;e<t.length;e++)D_(t[e])}}function $b(e,t){return e(t)}function Wb(){}var kd=!1;function Hb(e,t,n){if(kd)return e(t,n);kd=!0;try{return $b(e,t,n)}finally{kd=!1,(Mi!==null||Di!==null)&&(Wb(),Ub())}}function ls(e,t){var n=e.stateNode;if(n===null)return null;var r=ec(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(se(231,t,typeof n));return n}var Uf=!1;if(Pr)try{var Ta={};Object.defineProperty(Ta,"passive",{get:function(){Uf=!0}}),window.addEventListener("test",Ta,Ta),window.removeEventListener("test",Ta,Ta)}catch{Uf=!1}function xS(e,t,n,r,o,a,l,u,d){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(p){this.onError(p)}}var Ka=!1,tu=null,nu=!1,$f=null,wS={onError:function(e){Ka=!0,tu=e}};function kS(e,t,n,r,o,a,l,u,d){Ka=!1,tu=null,xS.apply(wS,arguments)}function SS(e,t,n,r,o,a,l,u,d){if(kS.apply(this,arguments),Ka){if(Ka){var f=tu;Ka=!1,tu=null}else throw Error(se(198));nu||(nu=!0,$f=f)}}function ni(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zb(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j_(e){if(ni(e)!==e)throw Error(se(188))}function PS(e){var t=e.alternate;if(!t){if(t=ni(e),t===null)throw Error(se(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return j_(o),e;if(a===r)return j_(o),t;a=a.sibling}throw Error(se(188))}if(n.return!==r.return)n=o,r=a;else{for(var l=!1,u=o.child;u;){if(u===n){l=!0,n=o,r=a;break}if(u===r){l=!0,r=o,n=a;break}u=u.sibling}if(!l){for(u=a.child;u;){if(u===n){l=!0,n=a,r=o;break}if(u===r){l=!0,r=a,n=o;break}u=u.sibling}if(!l)throw Error(se(189))}}if(n.alternate!==r)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?e:t}function Vb(e){return e=PS(e),e!==null?qb(e):null}function qb(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qb(e);if(t!==null)return t;e=e.sibling}return null}var Kb=sn.unstable_scheduleCallback,F_=sn.unstable_cancelCallback,CS=sn.unstable_shouldYield,ES=sn.unstable_requestPaint,mt=sn.unstable_now,OS=sn.unstable_getCurrentPriorityLevel,_p=sn.unstable_ImmediatePriority,Qb=sn.unstable_UserBlockingPriority,ru=sn.unstable_NormalPriority,LS=sn.unstable_LowPriority,Gb=sn.unstable_IdlePriority,Gu=null,tr=null;function TS(e){if(tr&&typeof tr.onCommitFiberRoot=="function")try{tr.onCommitFiberRoot(Gu,e,void 0,(e.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:zS,RS=Math.log,AS=Math.LN2;function zS(e){return e>>>=0,e===0?32:31-(RS(e)/AS|0)|0}var hl=64,pl=4194304;function Ha(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ou(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~o;u!==0?r=Ha(u):(a&=l,a!==0&&(r=Ha(a)))}else l=n&~o,l!==0?r=Ha(l):a!==0&&(r=Ha(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-In(t),o=1<<n,r|=e[n],t&=~o;return r}function NS(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IS(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-In(a),u=1<<l,d=o[l];d===-1?(!(u&n)||u&r)&&(o[l]=NS(u,t)):d<=t&&(e.expiredLanes|=u),a&=~u}}function Wf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Jb(){var e=hl;return hl<<=1,!(hl&4194240)&&(hl=64),e}function Sd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function As(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-In(t),e[t]=n}function BS(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-In(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function gp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-In(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Ke=0;function Yb(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xb,vp,e0,t0,n0,Hf=!1,ml=[],Qr=null,Gr=null,Jr=null,us=new Map,cs=new Map,$r=[],MS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function U_(e,t){switch(e){case"focusin":case"focusout":Qr=null;break;case"dragenter":case"dragleave":Gr=null;break;case"mouseover":case"mouseout":Jr=null;break;case"pointerover":case"pointerout":us.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":cs.delete(t.pointerId)}}function Ra(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=Ns(t),t!==null&&vp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function DS(e,t,n,r,o){switch(t){case"focusin":return Qr=Ra(Qr,e,t,n,r,o),!0;case"dragenter":return Gr=Ra(Gr,e,t,n,r,o),!0;case"mouseover":return Jr=Ra(Jr,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return us.set(a,Ra(us.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,cs.set(a,Ra(cs.get(a)||null,e,t,n,r,o)),!0}return!1}function r0(e){var t=Do(e.target);if(t!==null){var n=ni(t);if(n!==null){if(t=n.tag,t===13){if(t=Zb(n),t!==null){e.blockedOn=t,n0(e.priority,function(){e0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);jf=r,n.target.dispatchEvent(r),jf=null}else return t=Ns(n),t!==null&&vp(t),e.blockedOn=n,!1;t.shift()}return!0}function $_(e,t,n){Nl(e)&&n.delete(t)}function jS(){Hf=!1,Qr!==null&&Nl(Qr)&&(Qr=null),Gr!==null&&Nl(Gr)&&(Gr=null),Jr!==null&&Nl(Jr)&&(Jr=null),us.forEach($_),cs.forEach($_)}function Aa(e,t){e.blockedOn===t&&(e.blockedOn=null,Hf||(Hf=!0,sn.unstable_scheduleCallback(sn.unstable_NormalPriority,jS)))}function ds(e){function t(o){return Aa(o,e)}if(0<ml.length){Aa(ml[0],e);for(var n=1;n<ml.length;n++){var r=ml[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Qr!==null&&Aa(Qr,e),Gr!==null&&Aa(Gr,e),Jr!==null&&Aa(Jr,e),us.forEach(t),cs.forEach(t),n=0;n<$r.length;n++)r=$r[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<$r.length&&(n=$r[0],n.blockedOn===null);)r0(n),n.blockedOn===null&&$r.shift()}var ji=Tr.ReactCurrentBatchConfig,iu=!0;function FS(e,t,n,r){var o=Ke,a=ji.transition;ji.transition=null;try{Ke=1,yp(e,t,n,r)}finally{Ke=o,ji.transition=a}}function US(e,t,n,r){var o=Ke,a=ji.transition;ji.transition=null;try{Ke=4,yp(e,t,n,r)}finally{Ke=o,ji.transition=a}}function yp(e,t,n,r){if(iu){var o=Zf(e,t,n,r);if(o===null)Nd(e,t,r,au,n),U_(e,r);else if(DS(o,e,t,n,r))r.stopPropagation();else if(U_(e,r),t&4&&-1<MS.indexOf(e)){for(;o!==null;){var a=Ns(o);if(a!==null&&Xb(a),a=Zf(e,t,n,r),a===null&&Nd(e,t,r,au,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else Nd(e,t,r,null,n)}}var au=null;function Zf(e,t,n,r){if(au=null,e=mp(r),e=Do(e),e!==null)if(t=ni(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zb(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return au=e,null}function o0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(OS()){case _p:return 1;case Qb:return 4;case ru:case LS:return 16;case Gb:return 536870912;default:return 16}default:return 16}}var Vr=null,bp=null,Il=null;function i0(){if(Il)return Il;var e,t=bp,n=t.length,r,o="value"in Vr?Vr.value:Vr.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[a-r];r++);return Il=o.slice(e,1<r?1-r:void 0)}function Bl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _l(){return!0}function W_(){return!1}function cn(e){function t(n,r,o,a,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(a):a[u]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?_l:W_,this.isPropagationStopped=W_,this}return ut(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),t}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xp=cn(sa),zs=ut({},sa,{view:0,detail:0}),$S=cn(zs),Pd,Cd,za,Ju=ut({},zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==za&&(za&&e.type==="mousemove"?(Pd=e.screenX-za.screenX,Cd=e.screenY-za.screenY):Cd=Pd=0,za=e),Pd)},movementY:function(e){return"movementY"in e?e.movementY:Cd}}),H_=cn(Ju),WS=ut({},Ju,{dataTransfer:0}),HS=cn(WS),ZS=ut({},zs,{relatedTarget:0}),Ed=cn(ZS),VS=ut({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),qS=cn(VS),KS=ut({},sa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),QS=cn(KS),GS=ut({},sa,{data:0}),Z_=cn(GS),JS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},YS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},XS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eP(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=XS[e])?!!t[e]:!1}function wp(){return eP}var tP=ut({},zs,{key:function(e){if(e.key){var t=JS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?YS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wp,charCode:function(e){return e.type==="keypress"?Bl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nP=cn(tP),rP=ut({},Ju,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),V_=cn(rP),oP=ut({},zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wp}),iP=cn(oP),aP=ut({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),sP=cn(aP),lP=ut({},Ju,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uP=cn(lP),cP=[9,13,27,32],kp=Pr&&"CompositionEvent"in window,Qa=null;Pr&&"documentMode"in document&&(Qa=document.documentMode);var dP=Pr&&"TextEvent"in window&&!Qa,a0=Pr&&(!kp||Qa&&8<Qa&&11>=Qa),q_=String.fromCharCode(32),K_=!1;function s0(e,t){switch(e){case"keyup":return cP.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function l0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Si=!1;function fP(e,t){switch(e){case"compositionend":return l0(t);case"keypress":return t.which!==32?null:(K_=!0,q_);case"textInput":return e=t.data,e===q_&&K_?null:e;default:return null}}function hP(e,t){if(Si)return e==="compositionend"||!kp&&s0(e,t)?(e=i0(),Il=bp=Vr=null,Si=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return a0&&t.locale!=="ko"?null:t.data;default:return null}}var pP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Q_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pP[e.type]:t==="textarea"}function u0(e,t,n,r){Fb(r),t=su(t,"onChange"),0<t.length&&(n=new xp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ga=null,fs=null;function mP(e){b0(e,0)}function Yu(e){var t=Ei(e);if(zb(t))return e}function _P(e,t){if(e==="change")return t}var c0=!1;if(Pr){var Od;if(Pr){var Ld="oninput"in document;if(!Ld){var G_=document.createElement("div");G_.setAttribute("oninput","return;"),Ld=typeof G_.oninput=="function"}Od=Ld}else Od=!1;c0=Od&&(!document.documentMode||9<document.documentMode)}function J_(){Ga&&(Ga.detachEvent("onpropertychange",d0),fs=Ga=null)}function d0(e){if(e.propertyName==="value"&&Yu(fs)){var t=[];u0(t,fs,e,mp(e)),Hb(mP,t)}}function gP(e,t,n){e==="focusin"?(J_(),Ga=t,fs=n,Ga.attachEvent("onpropertychange",d0)):e==="focusout"&&J_()}function vP(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yu(fs)}function yP(e,t){if(e==="click")return Yu(t)}function bP(e,t){if(e==="input"||e==="change")return Yu(t)}function xP(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dn=typeof Object.is=="function"?Object.is:xP;function hs(e,t){if(Dn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ef.call(t,o)||!Dn(e[o],t[o]))return!1}return!0}function Y_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function X_(e,t){var n=Y_(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Y_(n)}}function f0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?f0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function h0(){for(var e=window,t=eu();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=eu(e.document)}return t}function Sp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wP(e){var t=h0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&f0(n.ownerDocument.documentElement,n)){if(r!==null&&Sp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=X_(n,a);var l=X_(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kP=Pr&&"documentMode"in document&&11>=document.documentMode,Pi=null,Vf=null,Ja=null,qf=!1;function eg(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qf||Pi==null||Pi!==eu(r)||(r=Pi,"selectionStart"in r&&Sp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ja&&hs(Ja,r)||(Ja=r,r=su(Vf,"onSelect"),0<r.length&&(t=new xp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pi)))}function gl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ci={animationend:gl("Animation","AnimationEnd"),animationiteration:gl("Animation","AnimationIteration"),animationstart:gl("Animation","AnimationStart"),transitionend:gl("Transition","TransitionEnd")},Td={},p0={};Pr&&(p0=document.createElement("div").style,"AnimationEvent"in window||(delete Ci.animationend.animation,delete Ci.animationiteration.animation,delete Ci.animationstart.animation),"TransitionEvent"in window||delete Ci.transitionend.transition);function Xu(e){if(Td[e])return Td[e];if(!Ci[e])return e;var t=Ci[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in p0)return Td[e]=t[n];return e}var m0=Xu("animationend"),_0=Xu("animationiteration"),g0=Xu("animationstart"),v0=Xu("transitionend"),y0=new Map,tg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vo(e,t){y0.set(e,t),ti(t,[e])}for(var Rd=0;Rd<tg.length;Rd++){var Ad=tg[Rd],SP=Ad.toLowerCase(),PP=Ad[0].toUpperCase()+Ad.slice(1);vo(SP,"on"+PP)}vo(m0,"onAnimationEnd");vo(_0,"onAnimationIteration");vo(g0,"onAnimationStart");vo("dblclick","onDoubleClick");vo("focusin","onFocus");vo("focusout","onBlur");vo(v0,"onTransitionEnd");Ki("onMouseEnter",["mouseout","mouseover"]);Ki("onMouseLeave",["mouseout","mouseover"]);Ki("onPointerEnter",["pointerout","pointerover"]);Ki("onPointerLeave",["pointerout","pointerover"]);ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CP=new Set("cancel close invalid load scroll toggle".split(" ").concat(Za));function ng(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,SS(r,t,void 0,e),e.currentTarget=null}function b0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],d=u.instance,f=u.currentTarget;if(u=u.listener,d!==a&&o.isPropagationStopped())break e;ng(o,u,f),a=d}else for(l=0;l<r.length;l++){if(u=r[l],d=u.instance,f=u.currentTarget,u=u.listener,d!==a&&o.isPropagationStopped())break e;ng(o,u,f),a=d}}}if(nu)throw e=$f,nu=!1,$f=null,e}function nt(e,t){var n=t[Yf];n===void 0&&(n=t[Yf]=new Set);var r=e+"__bubble";n.has(r)||(x0(t,e,2,!1),n.add(r))}function zd(e,t,n){var r=0;t&&(r|=4),x0(n,e,r,t)}var vl="_reactListening"+Math.random().toString(36).slice(2);function ps(e){if(!e[vl]){e[vl]=!0,Ob.forEach(function(n){n!=="selectionchange"&&(CP.has(n)||zd(n,!1,e),zd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vl]||(t[vl]=!0,zd("selectionchange",!1,t))}}function x0(e,t,n,r){switch(o0(t)){case 1:var o=FS;break;case 4:o=US;break;default:o=yp}n=o.bind(null,t,n,e),o=void 0,!Uf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Nd(e,t,n,r,o){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===o||d.nodeType===8&&d.parentNode===o))return;l=l.return}for(;u!==null;){if(l=Do(u),l===null)return;if(d=l.tag,d===5||d===6){r=a=l;continue e}u=u.parentNode}}r=r.return}Hb(function(){var f=a,p=mp(n),m=[];e:{var g=y0.get(e);if(g!==void 0){var x=xp,y=e;switch(e){case"keypress":if(Bl(n)===0)break e;case"keydown":case"keyup":x=nP;break;case"focusin":y="focus",x=Ed;break;case"focusout":y="blur",x=Ed;break;case"beforeblur":case"afterblur":x=Ed;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=H_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=HS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=iP;break;case m0:case _0:case g0:x=qS;break;case v0:x=sP;break;case"scroll":x=$S;break;case"wheel":x=uP;break;case"copy":case"cut":case"paste":x=QS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=V_}var w=(t&4)!==0,P=!w&&e==="scroll",_=w?g!==null?g+"Capture":null:g;w=[];for(var b=f,k;b!==null;){k=b;var C=k.stateNode;if(k.tag===5&&C!==null&&(k=C,_!==null&&(C=ls(b,_),C!=null&&w.push(ms(b,C,k)))),P)break;b=b.return}0<w.length&&(g=new x(g,y,null,n,p),m.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==jf&&(y=n.relatedTarget||n.fromElement)&&(Do(y)||y[Cr]))break e;if((x||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=f,y=y?Do(y):null,y!==null&&(P=ni(y),y!==P||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=f),x!==y)){if(w=H_,C="onMouseLeave",_="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(w=V_,C="onPointerLeave",_="onPointerEnter",b="pointer"),P=x==null?g:Ei(x),k=y==null?g:Ei(y),g=new w(C,b+"leave",x,n,p),g.target=P,g.relatedTarget=k,C=null,Do(p)===f&&(w=new w(_,b+"enter",y,n,p),w.target=k,w.relatedTarget=P,C=w),P=C,x&&y)t:{for(w=x,_=y,b=0,k=w;k;k=gi(k))b++;for(k=0,C=_;C;C=gi(C))k++;for(;0<b-k;)w=gi(w),b--;for(;0<k-b;)_=gi(_),k--;for(;b--;){if(w===_||_!==null&&w===_.alternate)break t;w=gi(w),_=gi(_)}w=null}else w=null;x!==null&&rg(m,g,x,w,!1),y!==null&&P!==null&&rg(m,P,y,w,!0)}}e:{if(g=f?Ei(f):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var R=_P;else if(Q_(g))if(c0)R=bP;else{R=vP;var I=gP}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(R=yP);if(R&&(R=R(e,f))){u0(m,R,n,p);break e}I&&I(e,g,f),e==="focusout"&&(I=g._wrapperState)&&I.controlled&&g.type==="number"&&Nf(g,"number",g.value)}switch(I=f?Ei(f):window,e){case"focusin":(Q_(I)||I.contentEditable==="true")&&(Pi=I,Vf=f,Ja=null);break;case"focusout":Ja=Vf=Pi=null;break;case"mousedown":qf=!0;break;case"contextmenu":case"mouseup":case"dragend":qf=!1,eg(m,n,p);break;case"selectionchange":if(kP)break;case"keydown":case"keyup":eg(m,n,p)}var N;if(kp)e:{switch(e){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else Si?s0(e,n)&&(U="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(a0&&n.locale!=="ko"&&(Si||U!=="onCompositionStart"?U==="onCompositionEnd"&&Si&&(N=i0()):(Vr=p,bp="value"in Vr?Vr.value:Vr.textContent,Si=!0)),I=su(f,U),0<I.length&&(U=new Z_(U,e,null,n,p),m.push({event:U,listeners:I}),N?U.data=N:(N=l0(n),N!==null&&(U.data=N)))),(N=dP?fP(e,n):hP(e,n))&&(f=su(f,"onBeforeInput"),0<f.length&&(p=new Z_("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:f}),p.data=N))}b0(m,t)})}function ms(e,t,n){return{instance:e,listener:t,currentTarget:n}}function su(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=ls(e,n),a!=null&&r.unshift(ms(e,a,o)),a=ls(e,t),a!=null&&r.push(ms(e,a,o))),e=e.return}return r}function gi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rg(e,t,n,r,o){for(var a=t._reactName,l=[];n!==null&&n!==r;){var u=n,d=u.alternate,f=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&f!==null&&(u=f,o?(d=ls(n,a),d!=null&&l.unshift(ms(n,d,u))):o||(d=ls(n,a),d!=null&&l.push(ms(n,d,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var EP=/\r\n?/g,OP=/\u0000|\uFFFD/g;function og(e){return(typeof e=="string"?e:""+e).replace(EP,`
`).replace(OP,"")}function yl(e,t,n){if(t=og(t),og(e)!==t&&n)throw Error(se(425))}function lu(){}var Kf=null,Qf=null;function Gf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jf=typeof setTimeout=="function"?setTimeout:void 0,LP=typeof clearTimeout=="function"?clearTimeout:void 0,ig=typeof Promise=="function"?Promise:void 0,TP=typeof queueMicrotask=="function"?queueMicrotask:typeof ig<"u"?function(e){return ig.resolve(null).then(e).catch(RP)}:Jf;function RP(e){setTimeout(function(){throw e})}function Id(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ds(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ds(t)}function Yr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ag(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var la=Math.random().toString(36).slice(2),Yn="__reactFiber$"+la,_s="__reactProps$"+la,Cr="__reactContainer$"+la,Yf="__reactEvents$"+la,AP="__reactListeners$"+la,zP="__reactHandles$"+la;function Do(e){var t=e[Yn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Cr]||n[Yn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ag(e);e!==null;){if(n=e[Yn])return n;e=ag(e)}return t}e=n,n=e.parentNode}return null}function Ns(e){return e=e[Yn]||e[Cr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ei(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(se(33))}function ec(e){return e[_s]||null}var Xf=[],Oi=-1;function yo(e){return{current:e}}function rt(e){0>Oi||(e.current=Xf[Oi],Xf[Oi]=null,Oi--)}function Xe(e,t){Oi++,Xf[Oi]=e.current,e.current=t}var ho={},Ut=yo(ho),Yt=yo(!1),qo=ho;function Qi(e,t){var n=e.type.contextTypes;if(!n)return ho;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Xt(e){return e=e.childContextTypes,e!=null}function uu(){rt(Yt),rt(Ut)}function sg(e,t,n){if(Ut.current!==ho)throw Error(se(168));Xe(Ut,t),Xe(Yt,n)}function w0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(se(108,gS(e)||"Unknown",o));return ut({},n,r)}function cu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ho,qo=Ut.current,Xe(Ut,e),Xe(Yt,Yt.current),!0}function lg(e,t,n){var r=e.stateNode;if(!r)throw Error(se(169));n?(e=w0(e,t,qo),r.__reactInternalMemoizedMergedChildContext=e,rt(Yt),rt(Ut),Xe(Ut,e)):rt(Yt),Xe(Yt,n)}var yr=null,tc=!1,Bd=!1;function k0(e){yr===null?yr=[e]:yr.push(e)}function NP(e){tc=!0,k0(e)}function bo(){if(!Bd&&yr!==null){Bd=!0;var e=0,t=Ke;try{var n=yr;for(Ke=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}yr=null,tc=!1}catch(o){throw yr!==null&&(yr=yr.slice(e+1)),Kb(_p,bo),o}finally{Ke=t,Bd=!1}}return null}var Li=[],Ti=0,du=null,fu=0,mn=[],_n=0,Ko=null,xr=1,wr="";function No(e,t){Li[Ti++]=fu,Li[Ti++]=du,du=e,fu=t}function S0(e,t,n){mn[_n++]=xr,mn[_n++]=wr,mn[_n++]=Ko,Ko=e;var r=xr;e=wr;var o=32-In(r)-1;r&=~(1<<o),n+=1;var a=32-In(t)+o;if(30<a){var l=o-o%5;a=(r&(1<<l)-1).toString(32),r>>=l,o-=l,xr=1<<32-In(t)+o|n<<o|r,wr=a+e}else xr=1<<a|n<<o|r,wr=e}function Pp(e){e.return!==null&&(No(e,1),S0(e,1,0))}function Cp(e){for(;e===du;)du=Li[--Ti],Li[Ti]=null,fu=Li[--Ti],Li[Ti]=null;for(;e===Ko;)Ko=mn[--_n],mn[_n]=null,wr=mn[--_n],mn[_n]=null,xr=mn[--_n],mn[_n]=null}var on=null,nn=null,it=!1,zn=null;function P0(e,t){var n=gn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ug(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,on=e,nn=Yr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,on=e,nn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ko!==null?{id:xr,overflow:wr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=gn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,on=e,nn=null,!0):!1;default:return!1}}function eh(e){return(e.mode&1)!==0&&(e.flags&128)===0}function th(e){if(it){var t=nn;if(t){var n=t;if(!ug(e,t)){if(eh(e))throw Error(se(418));t=Yr(n.nextSibling);var r=on;t&&ug(e,t)?P0(r,n):(e.flags=e.flags&-4097|2,it=!1,on=e)}}else{if(eh(e))throw Error(se(418));e.flags=e.flags&-4097|2,it=!1,on=e}}}function cg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;on=e}function bl(e){if(e!==on)return!1;if(!it)return cg(e),it=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Gf(e.type,e.memoizedProps)),t&&(t=nn)){if(eh(e))throw C0(),Error(se(418));for(;t;)P0(e,t),t=Yr(t.nextSibling)}if(cg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(se(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nn=Yr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nn=null}}else nn=on?Yr(e.stateNode.nextSibling):null;return!0}function C0(){for(var e=nn;e;)e=Yr(e.nextSibling)}function Gi(){nn=on=null,it=!1}function Ep(e){zn===null?zn=[e]:zn.push(e)}var IP=Tr.ReactCurrentBatchConfig;function Tn(e,t){if(e&&e.defaultProps){t=ut({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var hu=yo(null),pu=null,Ri=null,Op=null;function Lp(){Op=Ri=pu=null}function Tp(e){var t=hu.current;rt(hu),e._currentValue=t}function nh(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fi(e,t){pu=e,Op=Ri=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Jt=!0),e.firstContext=null)}function bn(e){var t=e._currentValue;if(Op!==e)if(e={context:e,memoizedValue:t,next:null},Ri===null){if(pu===null)throw Error(se(308));Ri=e,pu.dependencies={lanes:0,firstContext:e}}else Ri=Ri.next=e;return t}var jo=null;function Rp(e){jo===null?jo=[e]:jo.push(e)}function E0(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Rp(t)):(n.next=o.next,o.next=n),t.interleaved=n,Er(e,r)}function Er(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Fr=!1;function Ap(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function O0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Fe&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Er(e,n)}return o=r.interleaved,o===null?(t.next=t,Rp(r)):(t.next=o.next,o.next=t),r.interleaved=t,Er(e,n)}function Ml(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gp(e,n)}}function dg(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function mu(e,t,n,r){var o=e.updateQueue;Fr=!1;var a=o.firstBaseUpdate,l=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var d=u,f=d.next;d.next=null,l===null?a=f:l.next=f,l=d;var p=e.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==l&&(u===null?p.firstBaseUpdate=f:u.next=f,p.lastBaseUpdate=d))}if(a!==null){var m=o.baseState;l=0,p=f=d=null,u=a;do{var g=u.lane,x=u.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:x,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var y=e,w=u;switch(g=t,x=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){m=y.call(x,m,g);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,g=typeof y=="function"?y.call(x,m,g):y,g==null)break e;m=ut({},m,g);break e;case 2:Fr=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[u]:g.push(u))}else x={eventTime:x,lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(f=p=x,d=m):p=p.next=x,l|=g;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;g=u,u=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(1);if(p===null&&(d=m),o.baseState=d,o.firstBaseUpdate=f,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);Go|=l,e.lanes=l,e.memoizedState=m}}function fg(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(se(191,o));o.call(r)}}}var L0=new Eb.Component().refs;function rh(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ut({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var nc={isMounted:function(e){return(e=e._reactInternals)?ni(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Zt(),o=to(e),a=kr(r,o);a.payload=t,n!=null&&(a.callback=n),t=Xr(e,a,o),t!==null&&(Bn(t,e,o,r),Ml(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Zt(),o=to(e),a=kr(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Xr(e,a,o),t!==null&&(Bn(t,e,o,r),Ml(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Zt(),r=to(e),o=kr(n,r);o.tag=2,t!=null&&(o.callback=t),t=Xr(e,o,r),t!==null&&(Bn(t,e,r,n),Ml(t,e,r))}};function hg(e,t,n,r,o,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,l):t.prototype&&t.prototype.isPureReactComponent?!hs(n,r)||!hs(o,a):!0}function T0(e,t,n){var r=!1,o=ho,a=t.contextType;return typeof a=="object"&&a!==null?a=bn(a):(o=Xt(t)?qo:Ut.current,r=t.contextTypes,a=(r=r!=null)?Qi(e,o):ho),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=nc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function pg(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&nc.enqueueReplaceState(t,t.state,null)}function oh(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=L0,Ap(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=bn(a):(a=Xt(t)?qo:Ut.current,o.context=Qi(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(rh(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&nc.enqueueReplaceState(o,o.state,null),mu(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Na(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var r=n.stateNode}if(!r)throw Error(se(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var u=o.refs;u===L0&&(u=o.refs={}),l===null?delete u[a]:u[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,e))}return e}function xl(e,t){throw e=Object.prototype.toString.call(t),Error(se(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mg(e){var t=e._init;return t(e._payload)}function R0(e){function t(_,b){if(e){var k=_.deletions;k===null?(_.deletions=[b],_.flags|=16):k.push(b)}}function n(_,b){if(!e)return null;for(;b!==null;)t(_,b),b=b.sibling;return null}function r(_,b){for(_=new Map;b!==null;)b.key!==null?_.set(b.key,b):_.set(b.index,b),b=b.sibling;return _}function o(_,b){return _=no(_,b),_.index=0,_.sibling=null,_}function a(_,b,k){return _.index=k,e?(k=_.alternate,k!==null?(k=k.index,k<b?(_.flags|=2,b):k):(_.flags|=2,b)):(_.flags|=1048576,b)}function l(_){return e&&_.alternate===null&&(_.flags|=2),_}function u(_,b,k,C){return b===null||b.tag!==6?(b=Wd(k,_.mode,C),b.return=_,b):(b=o(b,k),b.return=_,b)}function d(_,b,k,C){var R=k.type;return R===ki?p(_,b,k.props.children,C,k.key):b!==null&&(b.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===jr&&mg(R)===b.type)?(C=o(b,k.props),C.ref=Na(_,b,k),C.return=_,C):(C=Wl(k.type,k.key,k.props,null,_.mode,C),C.ref=Na(_,b,k),C.return=_,C)}function f(_,b,k,C){return b===null||b.tag!==4||b.stateNode.containerInfo!==k.containerInfo||b.stateNode.implementation!==k.implementation?(b=Hd(k,_.mode,C),b.return=_,b):(b=o(b,k.children||[]),b.return=_,b)}function p(_,b,k,C,R){return b===null||b.tag!==7?(b=Zo(k,_.mode,C,R),b.return=_,b):(b=o(b,k),b.return=_,b)}function m(_,b,k){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Wd(""+b,_.mode,k),b.return=_,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case cl:return k=Wl(b.type,b.key,b.props,null,_.mode,k),k.ref=Na(_,null,b),k.return=_,k;case wi:return b=Hd(b,_.mode,k),b.return=_,b;case jr:var C=b._init;return m(_,C(b._payload),k)}if(Wa(b)||La(b))return b=Zo(b,_.mode,k,null),b.return=_,b;xl(_,b)}return null}function g(_,b,k,C){var R=b!==null?b.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return R!==null?null:u(_,b,""+k,C);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case cl:return k.key===R?d(_,b,k,C):null;case wi:return k.key===R?f(_,b,k,C):null;case jr:return R=k._init,g(_,b,R(k._payload),C)}if(Wa(k)||La(k))return R!==null?null:p(_,b,k,C,null);xl(_,k)}return null}function x(_,b,k,C,R){if(typeof C=="string"&&C!==""||typeof C=="number")return _=_.get(k)||null,u(b,_,""+C,R);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case cl:return _=_.get(C.key===null?k:C.key)||null,d(b,_,C,R);case wi:return _=_.get(C.key===null?k:C.key)||null,f(b,_,C,R);case jr:var I=C._init;return x(_,b,k,I(C._payload),R)}if(Wa(C)||La(C))return _=_.get(k)||null,p(b,_,C,R,null);xl(b,C)}return null}function y(_,b,k,C){for(var R=null,I=null,N=b,U=b=0,$=null;N!==null&&U<k.length;U++){N.index>U?($=N,N=null):$=N.sibling;var F=g(_,N,k[U],C);if(F===null){N===null&&(N=$);break}e&&N&&F.alternate===null&&t(_,N),b=a(F,b,U),I===null?R=F:I.sibling=F,I=F,N=$}if(U===k.length)return n(_,N),it&&No(_,U),R;if(N===null){for(;U<k.length;U++)N=m(_,k[U],C),N!==null&&(b=a(N,b,U),I===null?R=N:I.sibling=N,I=N);return it&&No(_,U),R}for(N=r(_,N);U<k.length;U++)$=x(N,_,U,k[U],C),$!==null&&(e&&$.alternate!==null&&N.delete($.key===null?U:$.key),b=a($,b,U),I===null?R=$:I.sibling=$,I=$);return e&&N.forEach(function(J){return t(_,J)}),it&&No(_,U),R}function w(_,b,k,C){var R=La(k);if(typeof R!="function")throw Error(se(150));if(k=R.call(k),k==null)throw Error(se(151));for(var I=R=null,N=b,U=b=0,$=null,F=k.next();N!==null&&!F.done;U++,F=k.next()){N.index>U?($=N,N=null):$=N.sibling;var J=g(_,N,F.value,C);if(J===null){N===null&&(N=$);break}e&&N&&J.alternate===null&&t(_,N),b=a(J,b,U),I===null?R=J:I.sibling=J,I=J,N=$}if(F.done)return n(_,N),it&&No(_,U),R;if(N===null){for(;!F.done;U++,F=k.next())F=m(_,F.value,C),F!==null&&(b=a(F,b,U),I===null?R=F:I.sibling=F,I=F);return it&&No(_,U),R}for(N=r(_,N);!F.done;U++,F=k.next())F=x(N,_,U,F.value,C),F!==null&&(e&&F.alternate!==null&&N.delete(F.key===null?U:F.key),b=a(F,b,U),I===null?R=F:I.sibling=F,I=F);return e&&N.forEach(function(le){return t(_,le)}),it&&No(_,U),R}function P(_,b,k,C){if(typeof k=="object"&&k!==null&&k.type===ki&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case cl:e:{for(var R=k.key,I=b;I!==null;){if(I.key===R){if(R=k.type,R===ki){if(I.tag===7){n(_,I.sibling),b=o(I,k.props.children),b.return=_,_=b;break e}}else if(I.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===jr&&mg(R)===I.type){n(_,I.sibling),b=o(I,k.props),b.ref=Na(_,I,k),b.return=_,_=b;break e}n(_,I);break}else t(_,I);I=I.sibling}k.type===ki?(b=Zo(k.props.children,_.mode,C,k.key),b.return=_,_=b):(C=Wl(k.type,k.key,k.props,null,_.mode,C),C.ref=Na(_,b,k),C.return=_,_=C)}return l(_);case wi:e:{for(I=k.key;b!==null;){if(b.key===I)if(b.tag===4&&b.stateNode.containerInfo===k.containerInfo&&b.stateNode.implementation===k.implementation){n(_,b.sibling),b=o(b,k.children||[]),b.return=_,_=b;break e}else{n(_,b);break}else t(_,b);b=b.sibling}b=Hd(k,_.mode,C),b.return=_,_=b}return l(_);case jr:return I=k._init,P(_,b,I(k._payload),C)}if(Wa(k))return y(_,b,k,C);if(La(k))return w(_,b,k,C);xl(_,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,b!==null&&b.tag===6?(n(_,b.sibling),b=o(b,k),b.return=_,_=b):(n(_,b),b=Wd(k,_.mode,C),b.return=_,_=b),l(_)):n(_,b)}return P}var Ji=R0(!0),A0=R0(!1),Is={},nr=yo(Is),gs=yo(Is),vs=yo(Is);function Fo(e){if(e===Is)throw Error(se(174));return e}function zp(e,t){switch(Xe(vs,t),Xe(gs,e),Xe(nr,Is),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bf(t,e)}rt(nr),Xe(nr,t)}function Yi(){rt(nr),rt(gs),rt(vs)}function z0(e){Fo(vs.current);var t=Fo(nr.current),n=Bf(t,e.type);t!==n&&(Xe(gs,e),Xe(nr,n))}function Np(e){gs.current===e&&(rt(nr),rt(gs))}var st=yo(0);function _u(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Md=[];function Ip(){for(var e=0;e<Md.length;e++)Md[e]._workInProgressVersionPrimary=null;Md.length=0}var Dl=Tr.ReactCurrentDispatcher,Dd=Tr.ReactCurrentBatchConfig,Qo=0,lt=null,St=null,Et=null,gu=!1,Ya=!1,ys=0,BP=0;function It(){throw Error(se(321))}function Bp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dn(e[n],t[n]))return!1;return!0}function Mp(e,t,n,r,o,a){if(Qo=a,lt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Dl.current=e===null||e.memoizedState===null?FP:UP,e=n(r,o),Ya){a=0;do{if(Ya=!1,ys=0,25<=a)throw Error(se(301));a+=1,Et=St=null,t.updateQueue=null,Dl.current=$P,e=n(r,o)}while(Ya)}if(Dl.current=vu,t=St!==null&&St.next!==null,Qo=0,Et=St=lt=null,gu=!1,t)throw Error(se(300));return e}function Dp(){var e=ys!==0;return ys=0,e}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?lt.memoizedState=Et=e:Et=Et.next=e,Et}function xn(){if(St===null){var e=lt.alternate;e=e!==null?e.memoizedState:null}else e=St.next;var t=Et===null?lt.memoizedState:Et.next;if(t!==null)Et=t,St=e;else{if(e===null)throw Error(se(310));St=e,e={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Et===null?lt.memoizedState=Et=e:Et=Et.next=e}return Et}function bs(e,t){return typeof t=="function"?t(e):t}function jd(e){var t=xn(),n=t.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=e;var r=St,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var l=o.next;o.next=a.next,a.next=l}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var u=l=null,d=null,f=a;do{var p=f.lane;if((Qo&p)===p)d!==null&&(d=d.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var m={lane:p,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};d===null?(u=d=m,l=r):d=d.next=m,lt.lanes|=p,Go|=p}f=f.next}while(f!==null&&f!==a);d===null?l=r:d.next=u,Dn(r,t.memoizedState)||(Jt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,lt.lanes|=a,Go|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Fd(e){var t=xn(),n=t.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do a=e(a,l.action),l=l.next;while(l!==o);Dn(a,t.memoizedState)||(Jt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function N0(){}function I0(e,t){var n=lt,r=xn(),o=t(),a=!Dn(r.memoizedState,o);if(a&&(r.memoizedState=o,Jt=!0),r=r.queue,jp(D0.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Et!==null&&Et.memoizedState.tag&1){if(n.flags|=2048,xs(9,M0.bind(null,n,r,o,t),void 0,null),Ot===null)throw Error(se(349));Qo&30||B0(n,t,o)}return o}function B0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=lt.updateQueue,t===null?(t={lastEffect:null,stores:null},lt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function M0(e,t,n,r){t.value=n,t.getSnapshot=r,j0(t)&&F0(e)}function D0(e,t,n){return n(function(){j0(t)&&F0(e)})}function j0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dn(e,n)}catch{return!0}}function F0(e){var t=Er(e,1);t!==null&&Bn(t,e,1,-1)}function _g(e){var t=Gn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bs,lastRenderedState:e},t.queue=e,e=e.dispatch=jP.bind(null,lt,e),[t.memoizedState,e]}function xs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=lt.updateQueue,t===null?(t={lastEffect:null,stores:null},lt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function U0(){return xn().memoizedState}function jl(e,t,n,r){var o=Gn();lt.flags|=e,o.memoizedState=xs(1|t,n,void 0,r===void 0?null:r)}function rc(e,t,n,r){var o=xn();r=r===void 0?null:r;var a=void 0;if(St!==null){var l=St.memoizedState;if(a=l.destroy,r!==null&&Bp(r,l.deps)){o.memoizedState=xs(t,n,a,r);return}}lt.flags|=e,o.memoizedState=xs(1|t,n,a,r)}function gg(e,t){return jl(8390656,8,e,t)}function jp(e,t){return rc(2048,8,e,t)}function $0(e,t){return rc(4,2,e,t)}function W0(e,t){return rc(4,4,e,t)}function H0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Z0(e,t,n){return n=n!=null?n.concat([e]):null,rc(4,4,H0.bind(null,t,e),n)}function Fp(){}function V0(e,t){var n=xn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function q0(e,t){var n=xn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function K0(e,t,n){return Qo&21?(Dn(n,t)||(n=Jb(),lt.lanes|=n,Go|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Jt=!0),e.memoizedState=n)}function MP(e,t){var n=Ke;Ke=n!==0&&4>n?n:4,e(!0);var r=Dd.transition;Dd.transition={};try{e(!1),t()}finally{Ke=n,Dd.transition=r}}function Q0(){return xn().memoizedState}function DP(e,t,n){var r=to(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},G0(e))J0(t,n);else if(n=E0(e,t,n,r),n!==null){var o=Zt();Bn(n,e,r,o),Y0(n,t,r)}}function jP(e,t,n){var r=to(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(G0(e))J0(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,u=a(l,n);if(o.hasEagerState=!0,o.eagerState=u,Dn(u,l)){var d=t.interleaved;d===null?(o.next=o,Rp(t)):(o.next=d.next,d.next=o),t.interleaved=o;return}}catch{}finally{}n=E0(e,t,o,r),n!==null&&(o=Zt(),Bn(n,e,r,o),Y0(n,t,r))}}function G0(e){var t=e.alternate;return e===lt||t!==null&&t===lt}function J0(e,t){Ya=gu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Y0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gp(e,n)}}var vu={readContext:bn,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},FP={readContext:bn,useCallback:function(e,t){return Gn().memoizedState=[e,t===void 0?null:t],e},useContext:bn,useEffect:gg,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,jl(4194308,4,H0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return jl(4194308,4,e,t)},useInsertionEffect:function(e,t){return jl(4,2,e,t)},useMemo:function(e,t){var n=Gn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Gn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=DP.bind(null,lt,e),[r.memoizedState,e]},useRef:function(e){var t=Gn();return e={current:e},t.memoizedState=e},useState:_g,useDebugValue:Fp,useDeferredValue:function(e){return Gn().memoizedState=e},useTransition:function(){var e=_g(!1),t=e[0];return e=MP.bind(null,e[1]),Gn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=lt,o=Gn();if(it){if(n===void 0)throw Error(se(407));n=n()}else{if(n=t(),Ot===null)throw Error(se(349));Qo&30||B0(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,gg(D0.bind(null,r,a,e),[e]),r.flags|=2048,xs(9,M0.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Gn(),t=Ot.identifierPrefix;if(it){var n=wr,r=xr;n=(r&~(1<<32-In(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ys++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=BP++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},UP={readContext:bn,useCallback:V0,useContext:bn,useEffect:jp,useImperativeHandle:Z0,useInsertionEffect:$0,useLayoutEffect:W0,useMemo:q0,useReducer:jd,useRef:U0,useState:function(){return jd(bs)},useDebugValue:Fp,useDeferredValue:function(e){var t=xn();return K0(t,St.memoizedState,e)},useTransition:function(){var e=jd(bs)[0],t=xn().memoizedState;return[e,t]},useMutableSource:N0,useSyncExternalStore:I0,useId:Q0,unstable_isNewReconciler:!1},$P={readContext:bn,useCallback:V0,useContext:bn,useEffect:jp,useImperativeHandle:Z0,useInsertionEffect:$0,useLayoutEffect:W0,useMemo:q0,useReducer:Fd,useRef:U0,useState:function(){return Fd(bs)},useDebugValue:Fp,useDeferredValue:function(e){var t=xn();return St===null?t.memoizedState=e:K0(t,St.memoizedState,e)},useTransition:function(){var e=Fd(bs)[0],t=xn().memoizedState;return[e,t]},useMutableSource:N0,useSyncExternalStore:I0,useId:Q0,unstable_isNewReconciler:!1};function Xi(e,t){try{var n="",r=t;do n+=_S(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function Ud(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ih(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var WP=typeof WeakMap=="function"?WeakMap:Map;function X0(e,t,n){n=kr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){bu||(bu=!0,mh=r),ih(e,t)},n}function ex(e,t,n){n=kr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ih(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ih(e,t),typeof r!="function"&&(eo===null?eo=new Set([this]):eo.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function vg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new WP;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=rC.bind(null,e,t,n),t.then(e,e))}function yg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bg(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kr(-1,1),t.tag=2,Xr(n,t,1))),n.lanes|=1),e)}var HP=Tr.ReactCurrentOwner,Jt=!1;function Ht(e,t,n,r){t.child=e===null?A0(t,null,n,r):Ji(t,e.child,n,r)}function xg(e,t,n,r,o){n=n.render;var a=t.ref;return Fi(t,o),r=Mp(e,t,n,r,a,o),n=Dp(),e!==null&&!Jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Or(e,t,o)):(it&&n&&Pp(t),t.flags|=1,Ht(e,t,r,o),t.child)}function wg(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!Kp(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,tx(e,t,a,r,o)):(e=Wl(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:hs,n(l,r)&&e.ref===t.ref)return Or(e,t,o)}return t.flags|=1,e=no(a,r),e.ref=t.ref,e.return=t,t.child=e}function tx(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(hs(a,r)&&e.ref===t.ref)if(Jt=!1,t.pendingProps=r=a,(e.lanes&o)!==0)e.flags&131072&&(Jt=!0);else return t.lanes=e.lanes,Or(e,t,o)}return ah(e,t,n,r,o)}function nx(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xe(zi,tn),tn|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Xe(zi,tn),tn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Xe(zi,tn),tn|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Xe(zi,tn),tn|=r;return Ht(e,t,o,n),t.child}function rx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ah(e,t,n,r,o){var a=Xt(n)?qo:Ut.current;return a=Qi(t,a),Fi(t,o),n=Mp(e,t,n,r,a,o),r=Dp(),e!==null&&!Jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Or(e,t,o)):(it&&r&&Pp(t),t.flags|=1,Ht(e,t,n,o),t.child)}function kg(e,t,n,r,o){if(Xt(n)){var a=!0;cu(t)}else a=!1;if(Fi(t,o),t.stateNode===null)Fl(e,t),T0(t,n,r),oh(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var d=l.context,f=n.contextType;typeof f=="object"&&f!==null?f=bn(f):(f=Xt(n)?qo:Ut.current,f=Qi(t,f));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||d!==f)&&pg(t,l,r,f),Fr=!1;var g=t.memoizedState;l.state=g,mu(t,r,l,o),d=t.memoizedState,u!==r||g!==d||Yt.current||Fr?(typeof p=="function"&&(rh(t,n,p,r),d=t.memoizedState),(u=Fr||hg(t,n,u,r,g,d,f))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),l.props=r,l.state=d,l.context=f,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,O0(e,t),u=t.memoizedProps,f=t.type===t.elementType?u:Tn(t.type,u),l.props=f,m=t.pendingProps,g=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=bn(d):(d=Xt(n)?qo:Ut.current,d=Qi(t,d));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==m||g!==d)&&pg(t,l,r,d),Fr=!1,g=t.memoizedState,l.state=g,mu(t,r,l,o);var y=t.memoizedState;u!==m||g!==y||Yt.current||Fr?(typeof x=="function"&&(rh(t,n,x,r),y=t.memoizedState),(f=Fr||hg(t,n,f,r,g,y,d)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=d,r=f):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return sh(e,t,n,r,a,o)}function sh(e,t,n,r,o,a){rx(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&lg(t,n,!1),Or(e,t,a);r=t.stateNode,HP.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Ji(t,e.child,null,a),t.child=Ji(t,null,u,a)):Ht(e,t,u,a),t.memoizedState=r.state,o&&lg(t,n,!0),t.child}function ox(e){var t=e.stateNode;t.pendingContext?sg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&sg(e,t.context,!1),zp(e,t.containerInfo)}function Sg(e,t,n,r,o){return Gi(),Ep(o),t.flags|=256,Ht(e,t,n,r),t.child}var lh={dehydrated:null,treeContext:null,retryLane:0};function uh(e){return{baseLanes:e,cachePool:null,transitions:null}}function ix(e,t,n){var r=t.pendingProps,o=st.current,a=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Xe(st,o&1),e===null)return th(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,a?(r=t.mode,a=t.child,l={mode:"hidden",children:l},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=ac(l,r,0,null),e=Zo(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=uh(n),t.memoizedState=lh,e):Up(t,l));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return ZP(e,t,l,r,u,o,n);if(a){a=r.fallback,l=t.mode,o=e.child,u=o.sibling;var d={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=no(o,d),r.subtreeFlags=o.subtreeFlags&14680064),u!==null?a=no(u,a):(a=Zo(a,l,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,l=e.child.memoizedState,l=l===null?uh(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=lh,r}return a=e.child,e=a.sibling,r=no(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Up(e,t){return t=ac({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wl(e,t,n,r){return r!==null&&Ep(r),Ji(t,e.child,null,n),e=Up(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ZP(e,t,n,r,o,a,l){if(n)return t.flags&256?(t.flags&=-257,r=Ud(Error(se(422))),wl(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=ac({mode:"visible",children:r.children},o,0,null),a=Zo(a,o,l,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Ji(t,e.child,null,l),t.child.memoizedState=uh(l),t.memoizedState=lh,a);if(!(t.mode&1))return wl(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;return r=u,a=Error(se(419)),r=Ud(a,r,void 0),wl(e,t,l,r)}if(u=(l&e.childLanes)!==0,Jt||u){if(r=Ot,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Er(e,o),Bn(r,e,o,-1))}return qp(),r=Ud(Error(se(421))),wl(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=oC.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,nn=Yr(o.nextSibling),on=t,it=!0,zn=null,e!==null&&(mn[_n++]=xr,mn[_n++]=wr,mn[_n++]=Ko,xr=e.id,wr=e.overflow,Ko=t),t=Up(t,r.children),t.flags|=4096,t)}function Pg(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),nh(e.return,t,n)}function $d(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function ax(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(Ht(e,t,r.children,n),r=st.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pg(e,n,t);else if(e.tag===19)Pg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Xe(st,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&_u(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),$d(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&_u(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}$d(t,!0,n,null,a);break;case"together":$d(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Or(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Go|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(se(153));if(t.child!==null){for(e=t.child,n=no(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=no(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function VP(e,t,n){switch(t.tag){case 3:ox(t),Gi();break;case 5:z0(t);break;case 1:Xt(t.type)&&cu(t);break;case 4:zp(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Xe(hu,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Xe(st,st.current&1),t.flags|=128,null):n&t.child.childLanes?ix(e,t,n):(Xe(st,st.current&1),e=Or(e,t,n),e!==null?e.sibling:null);Xe(st,st.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ax(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Xe(st,st.current),r)break;return null;case 22:case 23:return t.lanes=0,nx(e,t,n)}return Or(e,t,n)}var sx,ch,lx,ux;sx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ch=function(){};lx=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Fo(nr.current);var a=null;switch(n){case"input":o=Af(e,o),r=Af(e,r),a=[];break;case"select":o=ut({},o,{value:void 0}),r=ut({},r,{value:void 0}),a=[];break;case"textarea":o=If(e,o),r=If(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=lu)}Mf(n,r);var l;n=null;for(f in o)if(!r.hasOwnProperty(f)&&o.hasOwnProperty(f)&&o[f]!=null)if(f==="style"){var u=o[f];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(as.hasOwnProperty(f)?a||(a=[]):(a=a||[]).push(f,null));for(f in r){var d=r[f];if(u=o?.[f],r.hasOwnProperty(f)&&d!==u&&(d!=null||u!=null))if(f==="style")if(u){for(l in u)!u.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&u[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(a||(a=[]),a.push(f,n)),n=d;else f==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(a=a||[]).push(f,d)):f==="children"?typeof d!="string"&&typeof d!="number"||(a=a||[]).push(f,""+d):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(as.hasOwnProperty(f)?(d!=null&&f==="onScroll"&&nt("scroll",e),a||u===d||(a=[])):(a=a||[]).push(f,d))}n&&(a=a||[]).push("style",n);var f=a;(t.updateQueue=f)&&(t.flags|=4)}};ux=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ia(e,t){if(!it)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Bt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function qP(e,t,n){var r=t.pendingProps;switch(Cp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(t),null;case 1:return Xt(t.type)&&uu(),Bt(t),null;case 3:return r=t.stateNode,Yi(),rt(Yt),rt(Ut),Ip(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(bl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,zn!==null&&(vh(zn),zn=null))),ch(e,t),Bt(t),null;case 5:Np(t);var o=Fo(vs.current);if(n=t.type,e!==null&&t.stateNode!=null)lx(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(se(166));return Bt(t),null}if(e=Fo(nr.current),bl(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Yn]=t,r[_s]=a,e=(t.mode&1)!==0,n){case"dialog":nt("cancel",r),nt("close",r);break;case"iframe":case"object":case"embed":nt("load",r);break;case"video":case"audio":for(o=0;o<Za.length;o++)nt(Za[o],r);break;case"source":nt("error",r);break;case"img":case"image":case"link":nt("error",r),nt("load",r);break;case"details":nt("toggle",r);break;case"input":N_(r,a),nt("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},nt("invalid",r);break;case"textarea":B_(r,a),nt("invalid",r)}Mf(n,a),o=null;for(var l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="children"?typeof u=="string"?r.textContent!==u&&(a.suppressHydrationWarning!==!0&&yl(r.textContent,u,e),o=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(a.suppressHydrationWarning!==!0&&yl(r.textContent,u,e),o=["children",""+u]):as.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&nt("scroll",r)}switch(n){case"input":dl(r),I_(r,a,!0);break;case"textarea":dl(r),M_(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=lu)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bb(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Yn]=t,e[_s]=r,sx(e,t,!1,!1),t.stateNode=e;e:{switch(l=Df(n,r),n){case"dialog":nt("cancel",e),nt("close",e),o=r;break;case"iframe":case"object":case"embed":nt("load",e),o=r;break;case"video":case"audio":for(o=0;o<Za.length;o++)nt(Za[o],e);o=r;break;case"source":nt("error",e),o=r;break;case"img":case"image":case"link":nt("error",e),nt("load",e),o=r;break;case"details":nt("toggle",e),o=r;break;case"input":N_(e,r),o=Af(e,r),nt("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ut({},r,{value:void 0}),nt("invalid",e);break;case"textarea":B_(e,r),o=If(e,r),nt("invalid",e);break;default:o=r}Mf(n,o),u=o;for(a in u)if(u.hasOwnProperty(a)){var d=u[a];a==="style"?jb(e,d):a==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Mb(e,d)):a==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&ss(e,d):typeof d=="number"&&ss(e,""+d):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(as.hasOwnProperty(a)?d!=null&&a==="onScroll"&&nt("scroll",e):d!=null&&dp(e,a,d,l))}switch(n){case"input":dl(e),I_(e,r,!1);break;case"textarea":dl(e),M_(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fo(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Bi(e,!!r.multiple,a,!1):r.defaultValue!=null&&Bi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=lu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Bt(t),null;case 6:if(e&&t.stateNode!=null)ux(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(se(166));if(n=Fo(vs.current),Fo(nr.current),bl(t)){if(r=t.stateNode,n=t.memoizedProps,r[Yn]=t,(a=r.nodeValue!==n)&&(e=on,e!==null))switch(e.tag){case 3:yl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yl(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yn]=t,t.stateNode=r}return Bt(t),null;case 13:if(rt(st),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(it&&nn!==null&&t.mode&1&&!(t.flags&128))C0(),Gi(),t.flags|=98560,a=!1;else if(a=bl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(se(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(se(317));a[Yn]=t}else Gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Bt(t),a=!1}else zn!==null&&(vh(zn),zn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||st.current&1?Pt===0&&(Pt=3):qp())),t.updateQueue!==null&&(t.flags|=4),Bt(t),null);case 4:return Yi(),ch(e,t),e===null&&ps(t.stateNode.containerInfo),Bt(t),null;case 10:return Tp(t.type._context),Bt(t),null;case 17:return Xt(t.type)&&uu(),Bt(t),null;case 19:if(rt(st),a=t.memoizedState,a===null)return Bt(t),null;if(r=(t.flags&128)!==0,l=a.rendering,l===null)if(r)Ia(a,!1);else{if(Pt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=_u(e),l!==null){for(t.flags|=128,Ia(a,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Xe(st,st.current&1|2),t.child}e=e.sibling}a.tail!==null&&mt()>ea&&(t.flags|=128,r=!0,Ia(a,!1),t.lanes=4194304)}else{if(!r)if(e=_u(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ia(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!it)return Bt(t),null}else 2*mt()-a.renderingStartTime>ea&&n!==1073741824&&(t.flags|=128,r=!0,Ia(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=mt(),t.sibling=null,n=st.current,Xe(st,r?n&1|2:n&1),t):(Bt(t),null);case 22:case 23:return Vp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?tn&1073741824&&(Bt(t),t.subtreeFlags&6&&(t.flags|=8192)):Bt(t),null;case 24:return null;case 25:return null}throw Error(se(156,t.tag))}function KP(e,t){switch(Cp(t),t.tag){case 1:return Xt(t.type)&&uu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yi(),rt(Yt),rt(Ut),Ip(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Np(t),null;case 13:if(rt(st),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(se(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return rt(st),null;case 4:return Yi(),null;case 10:return Tp(t.type._context),null;case 22:case 23:return Vp(),null;case 24:return null;default:return null}}var kl=!1,Ft=!1,QP=typeof WeakSet=="function"?WeakSet:Set,_e=null;function Ai(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ct(e,t,r)}else n.current=null}function dh(e,t,n){try{n()}catch(r){ct(e,t,r)}}var Cg=!1;function GP(e,t){if(Kf=iu,e=h0(),Sp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,u=-1,d=-1,f=0,p=0,m=e,g=null;t:for(;;){for(var x;m!==n||o!==0&&m.nodeType!==3||(u=l+o),m!==a||r!==0&&m.nodeType!==3||(d=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(x=m.firstChild)!==null;)g=m,m=x;for(;;){if(m===e)break t;if(g===n&&++f===o&&(u=l),g===a&&++p===r&&(d=l),(x=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=x}n=u===-1||d===-1?null:{start:u,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qf={focusedElem:e,selectionRange:n},iu=!1,_e=t;_e!==null;)if(t=_e,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_e=e;else for(;_e!==null;){t=_e;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,P=y.memoizedState,_=t.stateNode,b=_.getSnapshotBeforeUpdate(t.elementType===t.type?w:Tn(t.type,w),P);_.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var k=t.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(C){ct(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,_e=e;break}_e=t.return}return y=Cg,Cg=!1,y}function Xa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&dh(t,n,a)}o=o.next}while(o!==r)}}function oc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fh(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function cx(e){var t=e.alternate;t!==null&&(e.alternate=null,cx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Yn],delete t[_s],delete t[Yf],delete t[AP],delete t[zP])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dx(e){return e.tag===5||e.tag===3||e.tag===4}function Eg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hh(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=lu));else if(r!==4&&(e=e.child,e!==null))for(hh(e,t,n),e=e.sibling;e!==null;)hh(e,t,n),e=e.sibling}function ph(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ph(e,t,n),e=e.sibling;e!==null;)ph(e,t,n),e=e.sibling}var Rt=null,An=!1;function Br(e,t,n){for(n=n.child;n!==null;)fx(e,t,n),n=n.sibling}function fx(e,t,n){if(tr&&typeof tr.onCommitFiberUnmount=="function")try{tr.onCommitFiberUnmount(Gu,n)}catch{}switch(n.tag){case 5:Ft||Ai(n,t);case 6:var r=Rt,o=An;Rt=null,Br(e,t,n),Rt=r,An=o,Rt!==null&&(An?(e=Rt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Rt.removeChild(n.stateNode));break;case 18:Rt!==null&&(An?(e=Rt,n=n.stateNode,e.nodeType===8?Id(e.parentNode,n):e.nodeType===1&&Id(e,n),ds(e)):Id(Rt,n.stateNode));break;case 4:r=Rt,o=An,Rt=n.stateNode.containerInfo,An=!0,Br(e,t,n),Rt=r,An=o;break;case 0:case 11:case 14:case 15:if(!Ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&dh(n,t,l),o=o.next}while(o!==r)}Br(e,t,n);break;case 1:if(!Ft&&(Ai(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){ct(n,t,u)}Br(e,t,n);break;case 21:Br(e,t,n);break;case 22:n.mode&1?(Ft=(r=Ft)||n.memoizedState!==null,Br(e,t,n),Ft=r):Br(e,t,n);break;default:Br(e,t,n)}}function Og(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new QP),t.forEach(function(r){var o=iC.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Cn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:Rt=u.stateNode,An=!1;break e;case 3:Rt=u.stateNode.containerInfo,An=!0;break e;case 4:Rt=u.stateNode.containerInfo,An=!0;break e}u=u.return}if(Rt===null)throw Error(se(160));fx(a,l,o),Rt=null,An=!1;var d=o.alternate;d!==null&&(d.return=null),o.return=null}catch(f){ct(o,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hx(t,e),t=t.sibling}function hx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Cn(t,e),qn(e),r&4){try{Xa(3,e,e.return),oc(3,e)}catch(w){ct(e,e.return,w)}try{Xa(5,e,e.return)}catch(w){ct(e,e.return,w)}}break;case 1:Cn(t,e),qn(e),r&512&&n!==null&&Ai(n,n.return);break;case 5:if(Cn(t,e),qn(e),r&512&&n!==null&&Ai(n,n.return),e.flags&32){var o=e.stateNode;try{ss(o,"")}catch(w){ct(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&a.type==="radio"&&a.name!=null&&Nb(o,a),Df(u,l);var f=Df(u,a);for(l=0;l<d.length;l+=2){var p=d[l],m=d[l+1];p==="style"?jb(o,m):p==="dangerouslySetInnerHTML"?Mb(o,m):p==="children"?ss(o,m):dp(o,p,m,f)}switch(u){case"input":zf(o,a);break;case"textarea":Ib(o,a);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var x=a.value;x!=null?Bi(o,!!a.multiple,x,!1):g!==!!a.multiple&&(a.defaultValue!=null?Bi(o,!!a.multiple,a.defaultValue,!0):Bi(o,!!a.multiple,a.multiple?[]:"",!1))}o[_s]=a}catch(w){ct(e,e.return,w)}}break;case 6:if(Cn(t,e),qn(e),r&4){if(e.stateNode===null)throw Error(se(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(w){ct(e,e.return,w)}}break;case 3:if(Cn(t,e),qn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ds(t.containerInfo)}catch(w){ct(e,e.return,w)}break;case 4:Cn(t,e),qn(e);break;case 13:Cn(t,e),qn(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Hp=mt())),r&4&&Og(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Ft=(f=Ft)||p,Cn(t,e),Ft=f):Cn(t,e),qn(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!p&&e.mode&1)for(_e=e,p=e.child;p!==null;){for(m=_e=p;_e!==null;){switch(g=_e,x=g.child,g.tag){case 0:case 11:case 14:case 15:Xa(4,g,g.return);break;case 1:Ai(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){ct(r,n,w)}}break;case 5:Ai(g,g.return);break;case 22:if(g.memoizedState!==null){Tg(m);continue}}x!==null?(x.return=g,_e=x):Tg(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{o=m.stateNode,f?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(u=m.stateNode,d=m.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=Db("display",l))}catch(w){ct(e,e.return,w)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=f?"":m.memoizedProps}catch(w){ct(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Cn(t,e),qn(e),r&4&&Og(e);break;case 21:break;default:Cn(t,e),qn(e)}}function qn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(dx(n)){var r=n;break e}n=n.return}throw Error(se(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ss(o,""),r.flags&=-33);var a=Eg(e);ph(e,a,o);break;case 3:case 4:var l=r.stateNode.containerInfo,u=Eg(e);hh(e,u,l);break;default:throw Error(se(161))}}catch(d){ct(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function JP(e,t,n){_e=e,px(e)}function px(e,t,n){for(var r=(e.mode&1)!==0;_e!==null;){var o=_e,a=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||kl;if(!l){var u=o.alternate,d=u!==null&&u.memoizedState!==null||Ft;u=kl;var f=Ft;if(kl=l,(Ft=d)&&!f)for(_e=o;_e!==null;)l=_e,d=l.child,l.tag===22&&l.memoizedState!==null?Rg(o):d!==null?(d.return=l,_e=d):Rg(o);for(;a!==null;)_e=a,px(a),a=a.sibling;_e=o,kl=u,Ft=f}Lg(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,_e=a):Lg(e)}}function Lg(e){for(;_e!==null;){var t=_e;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ft||oc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ft)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Tn(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&fg(t,a,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fg(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var p=f.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&ds(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Ft||t.flags&512&&fh(t)}catch(g){ct(t,t.return,g)}}if(t===e){_e=null;break}if(n=t.sibling,n!==null){n.return=t.return,_e=n;break}_e=t.return}}function Tg(e){for(;_e!==null;){var t=_e;if(t===e){_e=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_e=n;break}_e=t.return}}function Rg(e){for(;_e!==null;){var t=_e;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{oc(4,t)}catch(d){ct(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(d){ct(t,o,d)}}var a=t.return;try{fh(t)}catch(d){ct(t,a,d)}break;case 5:var l=t.return;try{fh(t)}catch(d){ct(t,l,d)}}}catch(d){ct(t,t.return,d)}if(t===e){_e=null;break}var u=t.sibling;if(u!==null){u.return=t.return,_e=u;break}_e=t.return}}var YP=Math.ceil,yu=Tr.ReactCurrentDispatcher,$p=Tr.ReactCurrentOwner,vn=Tr.ReactCurrentBatchConfig,Fe=0,Ot=null,bt=null,At=0,tn=0,zi=yo(0),Pt=0,ws=null,Go=0,ic=0,Wp=0,es=null,Gt=null,Hp=0,ea=1/0,gr=null,bu=!1,mh=null,eo=null,Sl=!1,qr=null,xu=0,ts=0,_h=null,Ul=-1,$l=0;function Zt(){return Fe&6?mt():Ul!==-1?Ul:Ul=mt()}function to(e){return e.mode&1?Fe&2&&At!==0?At&-At:IP.transition!==null?($l===0&&($l=Jb()),$l):(e=Ke,e!==0||(e=window.event,e=e===void 0?16:o0(e.type)),e):1}function Bn(e,t,n,r){if(50<ts)throw ts=0,_h=null,Error(se(185));As(e,n,r),(!(Fe&2)||e!==Ot)&&(e===Ot&&(!(Fe&2)&&(ic|=n),Pt===4&&Wr(e,At)),en(e,r),n===1&&Fe===0&&!(t.mode&1)&&(ea=mt()+500,tc&&bo()))}function en(e,t){var n=e.callbackNode;IS(e,t);var r=ou(e,e===Ot?At:0);if(r===0)n!==null&&F_(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&F_(n),t===1)e.tag===0?NP(Ag.bind(null,e)):k0(Ag.bind(null,e)),TP(function(){!(Fe&6)&&bo()}),n=null;else{switch(Yb(r)){case 1:n=_p;break;case 4:n=Qb;break;case 16:n=ru;break;case 536870912:n=Gb;break;default:n=ru}n=wx(n,mx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function mx(e,t){if(Ul=-1,$l=0,Fe&6)throw Error(se(327));var n=e.callbackNode;if(Ui()&&e.callbackNode!==n)return null;var r=ou(e,e===Ot?At:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=wu(e,r);else{t=r;var o=Fe;Fe|=2;var a=gx();(Ot!==e||At!==t)&&(gr=null,ea=mt()+500,Ho(e,t));do try{tC();break}catch(u){_x(e,u)}while(1);Lp(),yu.current=a,Fe=o,bt!==null?t=0:(Ot=null,At=0,t=Pt)}if(t!==0){if(t===2&&(o=Wf(e),o!==0&&(r=o,t=gh(e,o))),t===1)throw n=ws,Ho(e,0),Wr(e,r),en(e,mt()),n;if(t===6)Wr(e,r);else{if(o=e.current.alternate,!(r&30)&&!XP(o)&&(t=wu(e,r),t===2&&(a=Wf(e),a!==0&&(r=a,t=gh(e,a))),t===1))throw n=ws,Ho(e,0),Wr(e,r),en(e,mt()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(se(345));case 2:Io(e,Gt,gr);break;case 3:if(Wr(e,r),(r&130023424)===r&&(t=Hp+500-mt(),10<t)){if(ou(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Zt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Jf(Io.bind(null,e,Gt,gr),t);break}Io(e,Gt,gr);break;case 4:if(Wr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-In(r);a=1<<l,l=t[l],l>o&&(o=l),r&=~a}if(r=o,r=mt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*YP(r/1960))-r,10<r){e.timeoutHandle=Jf(Io.bind(null,e,Gt,gr),r);break}Io(e,Gt,gr);break;case 5:Io(e,Gt,gr);break;default:throw Error(se(329))}}}return en(e,mt()),e.callbackNode===n?mx.bind(null,e):null}function gh(e,t){var n=es;return e.current.memoizedState.isDehydrated&&(Ho(e,t).flags|=256),e=wu(e,t),e!==2&&(t=Gt,Gt=n,t!==null&&vh(t)),e}function vh(e){Gt===null?Gt=e:Gt.push.apply(Gt,e)}function XP(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!Dn(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wr(e,t){for(t&=~Wp,t&=~ic,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-In(t),r=1<<n;e[n]=-1,t&=~r}}function Ag(e){if(Fe&6)throw Error(se(327));Ui();var t=ou(e,0);if(!(t&1))return en(e,mt()),null;var n=wu(e,t);if(e.tag!==0&&n===2){var r=Wf(e);r!==0&&(t=r,n=gh(e,r))}if(n===1)throw n=ws,Ho(e,0),Wr(e,t),en(e,mt()),n;if(n===6)throw Error(se(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Io(e,Gt,gr),en(e,mt()),null}function Zp(e,t){var n=Fe;Fe|=1;try{return e(t)}finally{Fe=n,Fe===0&&(ea=mt()+500,tc&&bo())}}function Jo(e){qr!==null&&qr.tag===0&&!(Fe&6)&&Ui();var t=Fe;Fe|=1;var n=vn.transition,r=Ke;try{if(vn.transition=null,Ke=1,e)return e()}finally{Ke=r,vn.transition=n,Fe=t,!(Fe&6)&&bo()}}function Vp(){tn=zi.current,rt(zi)}function Ho(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,LP(n)),bt!==null)for(n=bt.return;n!==null;){var r=n;switch(Cp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&uu();break;case 3:Yi(),rt(Yt),rt(Ut),Ip();break;case 5:Np(r);break;case 4:Yi();break;case 13:rt(st);break;case 19:rt(st);break;case 10:Tp(r.type._context);break;case 22:case 23:Vp()}n=n.return}if(Ot=e,bt=e=no(e.current,null),At=tn=t,Pt=0,ws=null,Wp=ic=Go=0,Gt=es=null,jo!==null){for(t=0;t<jo.length;t++)if(n=jo[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var l=a.next;a.next=o,r.next=l}n.pending=r}jo=null}return e}function _x(e,t){do{var n=bt;try{if(Lp(),Dl.current=vu,gu){for(var r=lt.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}gu=!1}if(Qo=0,Et=St=lt=null,Ya=!1,ys=0,$p.current=null,n===null||n.return===null){Pt=1,ws=t,bt=null;break}e:{var a=e,l=n.return,u=n,d=t;if(t=At,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var f=d,p=u,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=yg(l);if(x!==null){x.flags&=-257,bg(x,l,u,a,t),x.mode&1&&vg(a,f,t),t=x,d=f;var y=t.updateQueue;if(y===null){var w=new Set;w.add(d),t.updateQueue=w}else y.add(d);break e}else{if(!(t&1)){vg(a,f,t),qp();break e}d=Error(se(426))}}else if(it&&u.mode&1){var P=yg(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),bg(P,l,u,a,t),Ep(Xi(d,u));break e}}a=d=Xi(d,u),Pt!==4&&(Pt=2),es===null?es=[a]:es.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var _=X0(a,d,t);dg(a,_);break e;case 1:u=d;var b=a.type,k=a.stateNode;if(!(a.flags&128)&&(typeof b.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(eo===null||!eo.has(k)))){a.flags|=65536,t&=-t,a.lanes|=t;var C=ex(a,u,t);dg(a,C);break e}}a=a.return}while(a!==null)}yx(n)}catch(R){t=R,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(1)}function gx(){var e=yu.current;return yu.current=vu,e===null?vu:e}function qp(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ot===null||!(Go&268435455)&&!(ic&268435455)||Wr(Ot,At)}function wu(e,t){var n=Fe;Fe|=2;var r=gx();(Ot!==e||At!==t)&&(gr=null,Ho(e,t));do try{eC();break}catch(o){_x(e,o)}while(1);if(Lp(),Fe=n,yu.current=r,bt!==null)throw Error(se(261));return Ot=null,At=0,Pt}function eC(){for(;bt!==null;)vx(bt)}function tC(){for(;bt!==null&&!CS();)vx(bt)}function vx(e){var t=xx(e.alternate,e,tn);e.memoizedProps=e.pendingProps,t===null?yx(e):bt=t,$p.current=null}function yx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=KP(n,t),n!==null){n.flags&=32767,bt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pt=6,bt=null;return}}else if(n=qP(n,t,tn),n!==null){bt=n;return}if(t=t.sibling,t!==null){bt=t;return}bt=t=e}while(t!==null);Pt===0&&(Pt=5)}function Io(e,t,n){var r=Ke,o=vn.transition;try{vn.transition=null,Ke=1,nC(e,t,n,r)}finally{vn.transition=o,Ke=r}return null}function nC(e,t,n,r){do Ui();while(qr!==null);if(Fe&6)throw Error(se(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(se(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(BS(e,a),e===Ot&&(bt=Ot=null,At=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sl||(Sl=!0,wx(ru,function(){return Ui(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=vn.transition,vn.transition=null;var l=Ke;Ke=1;var u=Fe;Fe|=4,$p.current=null,GP(e,n),hx(n,e),wP(Qf),iu=!!Kf,Qf=Kf=null,e.current=n,JP(n),ES(),Fe=u,Ke=l,vn.transition=a}else e.current=n;if(Sl&&(Sl=!1,qr=e,xu=o),a=e.pendingLanes,a===0&&(eo=null),TS(n.stateNode),en(e,mt()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(bu)throw bu=!1,e=mh,mh=null,e;return xu&1&&e.tag!==0&&Ui(),a=e.pendingLanes,a&1?e===_h?ts++:(ts=0,_h=e):ts=0,bo(),null}function Ui(){if(qr!==null){var e=Yb(xu),t=vn.transition,n=Ke;try{if(vn.transition=null,Ke=16>e?16:e,qr===null)var r=!1;else{if(e=qr,qr=null,xu=0,Fe&6)throw Error(se(331));var o=Fe;for(Fe|=4,_e=e.current;_e!==null;){var a=_e,l=a.child;if(_e.flags&16){var u=a.deletions;if(u!==null){for(var d=0;d<u.length;d++){var f=u[d];for(_e=f;_e!==null;){var p=_e;switch(p.tag){case 0:case 11:case 15:Xa(8,p,a)}var m=p.child;if(m!==null)m.return=p,_e=m;else for(;_e!==null;){p=_e;var g=p.sibling,x=p.return;if(cx(p),p===f){_e=null;break}if(g!==null){g.return=x,_e=g;break}_e=x}}}var y=a.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var P=w.sibling;w.sibling=null,w=P}while(w!==null)}}_e=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,_e=l;else e:for(;_e!==null;){if(a=_e,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Xa(9,a,a.return)}var _=a.sibling;if(_!==null){_.return=a.return,_e=_;break e}_e=a.return}}var b=e.current;for(_e=b;_e!==null;){l=_e;var k=l.child;if(l.subtreeFlags&2064&&k!==null)k.return=l,_e=k;else e:for(l=b;_e!==null;){if(u=_e,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:oc(9,u)}}catch(R){ct(u,u.return,R)}if(u===l){_e=null;break e}var C=u.sibling;if(C!==null){C.return=u.return,_e=C;break e}_e=u.return}}if(Fe=o,bo(),tr&&typeof tr.onPostCommitFiberRoot=="function")try{tr.onPostCommitFiberRoot(Gu,e)}catch{}r=!0}return r}finally{Ke=n,vn.transition=t}}return!1}function zg(e,t,n){t=Xi(n,t),t=X0(e,t,1),e=Xr(e,t,1),t=Zt(),e!==null&&(As(e,1,t),en(e,t))}function ct(e,t,n){if(e.tag===3)zg(e,e,n);else for(;t!==null;){if(t.tag===3){zg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(eo===null||!eo.has(r))){e=Xi(n,e),e=ex(t,e,1),t=Xr(t,e,1),e=Zt(),t!==null&&(As(t,1,e),en(t,e));break}}t=t.return}}function rC(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Zt(),e.pingedLanes|=e.suspendedLanes&n,Ot===e&&(At&n)===n&&(Pt===4||Pt===3&&(At&130023424)===At&&500>mt()-Hp?Ho(e,0):Wp|=n),en(e,t)}function bx(e,t){t===0&&(e.mode&1?(t=pl,pl<<=1,!(pl&130023424)&&(pl=4194304)):t=1);var n=Zt();e=Er(e,t),e!==null&&(As(e,t,n),en(e,n))}function oC(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bx(e,n)}function iC(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(se(314))}r!==null&&r.delete(t),bx(e,n)}var xx;xx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Yt.current)Jt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Jt=!1,VP(e,t,n);Jt=!!(e.flags&131072)}else Jt=!1,it&&t.flags&1048576&&S0(t,fu,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fl(e,t),e=t.pendingProps;var o=Qi(t,Ut.current);Fi(t,n),o=Mp(null,t,r,e,o,n);var a=Dp();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xt(r)?(a=!0,cu(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ap(t),o.updater=nc,t.stateNode=o,o._reactInternals=t,oh(t,r,e,n),t=sh(null,t,r,!0,a,n)):(t.tag=0,it&&a&&Pp(t),Ht(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fl(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=sC(r),e=Tn(r,e),o){case 0:t=ah(null,t,r,e,n);break e;case 1:t=kg(null,t,r,e,n);break e;case 11:t=xg(null,t,r,e,n);break e;case 14:t=wg(null,t,r,Tn(r.type,e),n);break e}throw Error(se(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Tn(r,o),ah(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Tn(r,o),kg(e,t,r,o,n);case 3:e:{if(ox(t),e===null)throw Error(se(387));r=t.pendingProps,a=t.memoizedState,o=a.element,O0(e,t),mu(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=Xi(Error(se(423)),t),t=Sg(e,t,r,n,o);break e}else if(r!==o){o=Xi(Error(se(424)),t),t=Sg(e,t,r,n,o);break e}else for(nn=Yr(t.stateNode.containerInfo.firstChild),on=t,it=!0,zn=null,n=A0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gi(),r===o){t=Or(e,t,n);break e}Ht(e,t,r,n)}t=t.child}return t;case 5:return z0(t),e===null&&th(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,l=o.children,Gf(r,o)?l=null:a!==null&&Gf(r,a)&&(t.flags|=32),rx(e,t),Ht(e,t,l,n),t.child;case 6:return e===null&&th(t),null;case 13:return ix(e,t,n);case 4:return zp(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ji(t,null,r,n):Ht(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Tn(r,o),xg(e,t,r,o,n);case 7:return Ht(e,t,t.pendingProps,n),t.child;case 8:return Ht(e,t,t.pendingProps.children,n),t.child;case 12:return Ht(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,l=o.value,Xe(hu,r._currentValue),r._currentValue=l,a!==null)if(Dn(a.value,l)){if(a.children===o.children&&!Yt.current){t=Or(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){l=a.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(a.tag===1){d=kr(-1,n&-n),d.tag=2;var f=a.updateQueue;if(f!==null){f=f.shared;var p=f.pending;p===null?d.next=d:(d.next=p.next,p.next=d),f.pending=d}}a.lanes|=n,d=a.alternate,d!==null&&(d.lanes|=n),nh(a.return,n,t),u.lanes|=n;break}d=d.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(se(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),nh(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}Ht(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Fi(t,n),o=bn(o),r=r(o),t.flags|=1,Ht(e,t,r,n),t.child;case 14:return r=t.type,o=Tn(r,t.pendingProps),o=Tn(r.type,o),wg(e,t,r,o,n);case 15:return tx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Tn(r,o),Fl(e,t),t.tag=1,Xt(r)?(e=!0,cu(t)):e=!1,Fi(t,n),T0(t,r,o),oh(t,r,o,n),sh(null,t,r,!0,e,n);case 19:return ax(e,t,n);case 22:return nx(e,t,n)}throw Error(se(156,t.tag))};function wx(e,t){return Kb(e,t)}function aC(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(e,t,n,r){return new aC(e,t,n,r)}function Kp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sC(e){if(typeof e=="function")return Kp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hp)return 11;if(e===pp)return 14}return 2}function no(e,t){var n=e.alternate;return n===null?(n=gn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wl(e,t,n,r,o,a){var l=2;if(r=e,typeof e=="function")Kp(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case ki:return Zo(n.children,o,a,t);case fp:l=8,o|=8;break;case Of:return e=gn(12,n,t,o|2),e.elementType=Of,e.lanes=a,e;case Lf:return e=gn(13,n,t,o),e.elementType=Lf,e.lanes=a,e;case Tf:return e=gn(19,n,t,o),e.elementType=Tf,e.lanes=a,e;case Rb:return ac(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lb:l=10;break e;case Tb:l=9;break e;case hp:l=11;break e;case pp:l=14;break e;case jr:l=16,r=null;break e}throw Error(se(130,e==null?e:typeof e,""))}return t=gn(l,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function Zo(e,t,n,r){return e=gn(7,e,r,t),e.lanes=n,e}function ac(e,t,n,r){return e=gn(22,e,r,t),e.elementType=Rb,e.lanes=n,e.stateNode={isHidden:!1},e}function Wd(e,t,n){return e=gn(6,e,null,t),e.lanes=n,e}function Hd(e,t,n){return t=gn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lC(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sd(0),this.expirationTimes=Sd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sd(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Qp(e,t,n,r,o,a,l,u,d){return e=new lC(e,t,n,u,d),t===1?(t=1,a===!0&&(t|=8)):t=0,a=gn(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ap(a),e}function uC(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function kx(e){if(!e)return ho;e=e._reactInternals;e:{if(ni(e)!==e||e.tag!==1)throw Error(se(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(se(171))}if(e.tag===1){var n=e.type;if(Xt(n))return w0(e,n,t)}return t}function Sx(e,t,n,r,o,a,l,u,d){return e=Qp(n,r,!0,e,o,a,l,u,d),e.context=kx(null),n=e.current,r=Zt(),o=to(n),a=kr(r,o),a.callback=t??null,Xr(n,a,o),e.current.lanes=o,As(e,o,r),en(e,r),e}function sc(e,t,n,r){var o=t.current,a=Zt(),l=to(o);return n=kx(n),t.context===null?t.context=n:t.pendingContext=n,t=kr(a,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Xr(o,t,l),e!==null&&(Bn(e,o,l,a),Ml(e,o,l)),l}function ku(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ng(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gp(e,t){Ng(e,t),(e=e.alternate)&&Ng(e,t)}function cC(){return null}var Px=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jp(e){this._internalRoot=e}lc.prototype.render=Jp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(se(409));sc(e,t,null,null)};lc.prototype.unmount=Jp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jo(function(){sc(null,e,null,null)}),t[Cr]=null}};function lc(e){this._internalRoot=e}lc.prototype.unstable_scheduleHydration=function(e){if(e){var t=t0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$r.length&&t!==0&&t<$r[n].priority;n++);$r.splice(n,0,e),n===0&&r0(e)}};function Yp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function uc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ig(){}function dC(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var f=ku(l);a.call(f)}}var l=Sx(t,r,e,0,null,!1,!1,"",Ig);return e._reactRootContainer=l,e[Cr]=l.current,ps(e.nodeType===8?e.parentNode:e),Jo(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var u=r;r=function(){var f=ku(d);u.call(f)}}var d=Qp(e,0,!1,null,null,!1,!1,"",Ig);return e._reactRootContainer=d,e[Cr]=d.current,ps(e.nodeType===8?e.parentNode:e),Jo(function(){sc(t,d,n,r)}),d}function cc(e,t,n,r,o){var a=n._reactRootContainer;if(a){var l=a;if(typeof o=="function"){var u=o;o=function(){var d=ku(l);u.call(d)}}sc(t,l,e,o)}else l=dC(n,t,e,o,r);return ku(l)}Xb=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ha(t.pendingLanes);n!==0&&(gp(t,n|1),en(t,mt()),!(Fe&6)&&(ea=mt()+500,bo()))}break;case 13:Jo(function(){var r=Er(e,1);if(r!==null){var o=Zt();Bn(r,e,1,o)}}),Gp(e,1)}};vp=function(e){if(e.tag===13){var t=Er(e,134217728);if(t!==null){var n=Zt();Bn(t,e,134217728,n)}Gp(e,134217728)}};e0=function(e){if(e.tag===13){var t=to(e),n=Er(e,t);if(n!==null){var r=Zt();Bn(n,e,t,r)}Gp(e,t)}};t0=function(){return Ke};n0=function(e,t){var n=Ke;try{return Ke=e,t()}finally{Ke=n}};Ff=function(e,t,n){switch(t){case"input":if(zf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ec(r);if(!o)throw Error(se(90));zb(r),zf(r,o)}}}break;case"textarea":Ib(e,n);break;case"select":t=n.value,t!=null&&Bi(e,!!n.multiple,t,!1)}};$b=Zp;Wb=Jo;var fC={usingClientEntryPoint:!1,Events:[Ns,Ei,ec,Fb,Ub,Zp]},Ba={findFiberByHostInstance:Do,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},hC={bundleType:Ba.bundleType,version:Ba.version,rendererPackageName:Ba.rendererPackageName,rendererConfig:Ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vb(e),e===null?null:e.stateNode},findFiberByHostInstance:Ba.findFiberByHostInstance||cC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{Gu=Pl.inject(hC),tr=Pl}catch{}}un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fC;un.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yp(t))throw Error(se(200));return uC(e,t,null,n)};un.createRoot=function(e,t){if(!Yp(e))throw Error(se(299));var n=!1,r="",o=Px;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Qp(e,1,!1,null,null,n,!1,r,o),e[Cr]=t.current,ps(e.nodeType===8?e.parentNode:e),new Jp(t)};un.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(se(188)):(e=Object.keys(e).join(","),Error(se(268,e)));return e=Vb(t),e=e===null?null:e.stateNode,e};un.flushSync=function(e){return Jo(e)};un.hydrate=function(e,t,n){if(!uc(t))throw Error(se(200));return cc(null,e,t,!0,n)};un.hydrateRoot=function(e,t,n){if(!Yp(e))throw Error(se(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",l=Px;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Sx(t,null,e,1,n??null,o,!1,a,l),e[Cr]=t.current,ps(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new lc(t)};un.render=function(e,t,n){if(!uc(t))throw Error(se(200));return cc(null,e,t,!1,n)};un.unmountComponentAtNode=function(e){if(!uc(e))throw Error(se(40));return e._reactRootContainer?(Jo(function(){cc(null,null,e,!1,function(){e._reactRootContainer=null,e[Cr]=null})}),!0):!1};un.unstable_batchedUpdates=Zp;un.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!uc(n))throw Error(se(200));if(e==null||e._reactInternals===void 0)throw Error(se(38));return cc(e,t,n,!1,r)};un.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=un})(cS);const pC=_b(qi);var Cx,Bg=qi;Cx=Bg.createRoot,Bg.hydrateRoot;var yh={},mC={get exports(){return yh},set exports(e){yh=e}},Ex={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ta=E;function _C(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gC=typeof Object.is=="function"?Object.is:_C,vC=ta.useState,yC=ta.useEffect,bC=ta.useLayoutEffect,xC=ta.useDebugValue;function wC(e,t){var n=t(),r=vC({inst:{value:n,getSnapshot:t}}),o=r[0].inst,a=r[1];return bC(function(){o.value=n,o.getSnapshot=t,Zd(o)&&a({inst:o})},[e,n,t]),yC(function(){return Zd(o)&&a({inst:o}),e(function(){Zd(o)&&a({inst:o})})},[e]),xC(n),n}function Zd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gC(e,n)}catch{return!0}}function kC(e,t){return t()}var SC=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?kC:wC;Ex.useSyncExternalStore=ta.useSyncExternalStore!==void 0?ta.useSyncExternalStore:SC;(function(e){e.exports=Ex})(mC);var bh={},PC={get exports(){return bh},set exports(e){bh=e}},Ox={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dc=E,CC=yh;function EC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var OC=typeof Object.is=="function"?Object.is:EC,LC=CC.useSyncExternalStore,TC=dc.useRef,RC=dc.useEffect,AC=dc.useMemo,zC=dc.useDebugValue;Ox.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var a=TC(null);if(a.current===null){var l={hasValue:!1,value:null};a.current=l}else l=a.current;a=AC(function(){function d(x){if(!f){if(f=!0,p=x,x=r(x),o!==void 0&&l.hasValue){var y=l.value;if(o(y,x))return m=y}return m=x}if(y=m,OC(p,x))return y;var w=r(x);return o!==void 0&&o(y,w)?y:(p=x,m=w)}var f=!1,p,m,g=n===void 0?null:n;return[function(){return d(t())},g===null?void 0:function(){return d(g())}]},[t,n,r,o]);var u=LC(e,a[0],a[1]);return RC(function(){l.hasValue=!0,l.value=u},[u]),zC(u),u};(function(e){e.exports=Ox})(PC);function NC(e){e()}let Lx=NC;const IC=e=>Lx=e,BC=()=>Lx,po=E.createContext(null);function Tx(){return E.useContext(po)}const MC=()=>{throw new Error("uSES not initialized!")};let Rx=MC;const DC=e=>{Rx=e},jC=(e,t)=>e===t;function FC(e=po){const t=e===po?Tx:()=>E.useContext(e);return function(r,o=jC){const{store:a,subscription:l,getServerState:u}=t(),d=Rx(l.addNestedSub,a.getState,u||a.getState,r,o);return E.useDebugValue(d),d}}const UC=FC();function Ve(){return Ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ve.apply(this,arguments)}var xh={},$C={get exports(){return xh},set exports(e){xh=e}},Qe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lt=typeof Symbol=="function"&&Symbol.for,Xp=Lt?Symbol.for("react.element"):60103,em=Lt?Symbol.for("react.portal"):60106,fc=Lt?Symbol.for("react.fragment"):60107,hc=Lt?Symbol.for("react.strict_mode"):60108,pc=Lt?Symbol.for("react.profiler"):60114,mc=Lt?Symbol.for("react.provider"):60109,_c=Lt?Symbol.for("react.context"):60110,tm=Lt?Symbol.for("react.async_mode"):60111,gc=Lt?Symbol.for("react.concurrent_mode"):60111,vc=Lt?Symbol.for("react.forward_ref"):60112,yc=Lt?Symbol.for("react.suspense"):60113,WC=Lt?Symbol.for("react.suspense_list"):60120,bc=Lt?Symbol.for("react.memo"):60115,xc=Lt?Symbol.for("react.lazy"):60116,HC=Lt?Symbol.for("react.block"):60121,ZC=Lt?Symbol.for("react.fundamental"):60117,VC=Lt?Symbol.for("react.responder"):60118,qC=Lt?Symbol.for("react.scope"):60119;function dn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xp:switch(e=e.type,e){case tm:case gc:case fc:case pc:case hc:case yc:return e;default:switch(e=e&&e.$$typeof,e){case _c:case vc:case xc:case bc:case mc:return e;default:return t}}case em:return t}}}function Ax(e){return dn(e)===gc}Qe.AsyncMode=tm;Qe.ConcurrentMode=gc;Qe.ContextConsumer=_c;Qe.ContextProvider=mc;Qe.Element=Xp;Qe.ForwardRef=vc;Qe.Fragment=fc;Qe.Lazy=xc;Qe.Memo=bc;Qe.Portal=em;Qe.Profiler=pc;Qe.StrictMode=hc;Qe.Suspense=yc;Qe.isAsyncMode=function(e){return Ax(e)||dn(e)===tm};Qe.isConcurrentMode=Ax;Qe.isContextConsumer=function(e){return dn(e)===_c};Qe.isContextProvider=function(e){return dn(e)===mc};Qe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xp};Qe.isForwardRef=function(e){return dn(e)===vc};Qe.isFragment=function(e){return dn(e)===fc};Qe.isLazy=function(e){return dn(e)===xc};Qe.isMemo=function(e){return dn(e)===bc};Qe.isPortal=function(e){return dn(e)===em};Qe.isProfiler=function(e){return dn(e)===pc};Qe.isStrictMode=function(e){return dn(e)===hc};Qe.isSuspense=function(e){return dn(e)===yc};Qe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===fc||e===gc||e===pc||e===hc||e===yc||e===WC||typeof e=="object"&&e!==null&&(e.$$typeof===xc||e.$$typeof===bc||e.$$typeof===mc||e.$$typeof===_c||e.$$typeof===vc||e.$$typeof===ZC||e.$$typeof===VC||e.$$typeof===qC||e.$$typeof===HC)};Qe.typeOf=dn;(function(e){e.exports=Qe})($C);var zx=xh,KC={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},QC={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Nx={};Nx[zx.ForwardRef]=KC;Nx[zx.Memo]=QC;var Mg={},GC={get exports(){return Mg},set exports(e){Mg=e}},Ge={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm=Symbol.for("react.element"),rm=Symbol.for("react.portal"),wc=Symbol.for("react.fragment"),kc=Symbol.for("react.strict_mode"),Sc=Symbol.for("react.profiler"),Pc=Symbol.for("react.provider"),Cc=Symbol.for("react.context"),JC=Symbol.for("react.server_context"),Ec=Symbol.for("react.forward_ref"),Oc=Symbol.for("react.suspense"),Lc=Symbol.for("react.suspense_list"),Tc=Symbol.for("react.memo"),Rc=Symbol.for("react.lazy"),YC=Symbol.for("react.offscreen"),Ix;Ix=Symbol.for("react.module.reference");function wn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case nm:switch(e=e.type,e){case wc:case Sc:case kc:case Oc:case Lc:return e;default:switch(e=e&&e.$$typeof,e){case JC:case Cc:case Ec:case Rc:case Tc:case Pc:return e;default:return t}}case rm:return t}}}Ge.ContextConsumer=Cc;Ge.ContextProvider=Pc;Ge.Element=nm;Ge.ForwardRef=Ec;Ge.Fragment=wc;Ge.Lazy=Rc;Ge.Memo=Tc;Ge.Portal=rm;Ge.Profiler=Sc;Ge.StrictMode=kc;Ge.Suspense=Oc;Ge.SuspenseList=Lc;Ge.isAsyncMode=function(){return!1};Ge.isConcurrentMode=function(){return!1};Ge.isContextConsumer=function(e){return wn(e)===Cc};Ge.isContextProvider=function(e){return wn(e)===Pc};Ge.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===nm};Ge.isForwardRef=function(e){return wn(e)===Ec};Ge.isFragment=function(e){return wn(e)===wc};Ge.isLazy=function(e){return wn(e)===Rc};Ge.isMemo=function(e){return wn(e)===Tc};Ge.isPortal=function(e){return wn(e)===rm};Ge.isProfiler=function(e){return wn(e)===Sc};Ge.isStrictMode=function(e){return wn(e)===kc};Ge.isSuspense=function(e){return wn(e)===Oc};Ge.isSuspenseList=function(e){return wn(e)===Lc};Ge.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===wc||e===Sc||e===kc||e===Oc||e===Lc||e===YC||typeof e=="object"&&e!==null&&(e.$$typeof===Rc||e.$$typeof===Tc||e.$$typeof===Pc||e.$$typeof===Cc||e.$$typeof===Ec||e.$$typeof===Ix||e.getModuleId!==void 0)};Ge.typeOf=wn;(function(e){e.exports=Ge})(GC);function XC(){const e=BC();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],o=t;for(;o;)r.push(o),o=o.next;return r},subscribe(r){let o=!0,a=n={callback:r,next:null,prev:n};return a.prev?a.prev.next=a:t=a,function(){!o||t===null||(o=!1,a.next?a.next.prev=a.prev:n=a.prev,a.prev?a.prev.next=a.next:t=a.next)}}}}const Dg={notify(){},get:()=>[]};function eE(e,t){let n,r=Dg;function o(m){return d(),r.subscribe(m)}function a(){r.notify()}function l(){p.onStateChange&&p.onStateChange()}function u(){return!!n}function d(){n||(n=t?t.addNestedSub(l):e.subscribe(l),r=XC())}function f(){n&&(n(),n=void 0,r.clear(),r=Dg)}const p={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:d,tryUnsubscribe:f,getListeners:()=>r};return p}const tE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",nE=tE?E.useLayoutEffect:E.useEffect;function rE({store:e,context:t,children:n,serverState:r}){const o=E.useMemo(()=>{const u=eE(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0}},[e,r]),a=E.useMemo(()=>e.getState(),[e]);nE(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=t||po;return D.createElement(l.Provider,{value:o},n)}function Bx(e=po){const t=e===po?Tx:()=>E.useContext(e);return function(){const{store:r}=t();return r}}const oE=Bx();function iE(e=po){const t=e===po?oE:Bx(e);return function(){return t().dispatch}}const aE=iE();DC(bh.useSyncExternalStoreWithSelector);IC(qi.unstable_batchedUpdates);/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ze(){return Ze=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ze.apply(this,arguments)}var yt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(yt||(yt={}));const jg="popstate";function sE(e){e===void 0&&(e={});function t(r,o){let{pathname:a,search:l,hash:u}=r.location;return ks("",{pathname:a,search:l,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Bs(o)}return uE(t,n,null,e)}function Ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function na(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function lE(){return Math.random().toString(36).substr(2,8)}function Fg(e,t){return{usr:e.state,key:e.key,idx:t}}function ks(e,t,n,r){return n===void 0&&(n=null),Ze({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Rr(t):t,{state:n,key:t&&t.key||r||lE()})}function Bs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Rr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function uE(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:a=!1}=r,l=o.history,u=yt.Pop,d=null,f=p();f==null&&(f=0,l.replaceState(Ze({},l.state,{idx:f}),""));function p(){return(l.state||{idx:null}).idx}function m(){u=yt.Pop;let P=p(),_=P==null?null:P-f;f=P,d&&d({action:u,location:w.location,delta:_})}function g(P,_){u=yt.Push;let b=ks(w.location,P,_);n&&n(b,P),f=p()+1;let k=Fg(b,f),C=w.createHref(b);try{l.pushState(k,"",C)}catch{o.location.assign(C)}a&&d&&d({action:u,location:w.location,delta:1})}function x(P,_){u=yt.Replace;let b=ks(w.location,P,_);n&&n(b,P),f=p();let k=Fg(b,f),C=w.createHref(b);l.replaceState(k,"",C),a&&d&&d({action:u,location:w.location,delta:0})}function y(P){let _=o.location.origin!=="null"?o.location.origin:o.location.href,b=typeof P=="string"?P:Bs(P);return Ne(_,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,_)}let w={get action(){return u},get location(){return e(o,l)},listen(P){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(jg,m),d=P,()=>{o.removeEventListener(jg,m),d=null}},createHref(P){return t(o,P)},createURL:y,encodeLocation(P){let _=y(P);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:g,replace:x,go(P){return l.go(P)}};return w}var kt;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(kt||(kt={}));const cE=new Set(["lazy","caseSensitive","path","id","index","children"]);function dE(e){return e.index===!0}function wh(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((o,a)=>{let l=[...n,a],u=typeof o.id=="string"?o.id:l.join("-");if(Ne(o.index!==!0||!o.children,"Cannot specify children on an index route"),Ne(!r[u],'Found a route id collision on id "'+u+`".  Route id's must be globally unique within Data Router usages`),dE(o)){let d=Ze({},o,t(o),{id:u});return r[u]=d,d}else{let d=Ze({},o,t(o),{id:u,children:void 0});return r[u]=d,o.children&&(d.children=wh(o.children,t,l,r)),d}})}function Ni(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Rr(t):t,o=Ms(r.pathname||"/",n);if(o==null)return null;let a=Mx(e);fE(a);let l=null;for(let u=0;l==null&&u<a.length;++u)l=xE(a[u],SE(o));return l}function Mx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(a,l,u)=>{let d={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};d.relativePath.startsWith("/")&&(Ne(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let f=ro([r,d.relativePath]),p=n.concat(d);a.children&&a.children.length>0&&(Ne(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),Mx(a.children,t,p,f)),!(a.path==null&&!a.index)&&t.push({path:f,score:yE(f,a.index),routesMeta:p})};return e.forEach((a,l)=>{var u;if(a.path===""||!((u=a.path)!=null&&u.includes("?")))o(a,l);else for(let d of Dx(a.path))o(a,l,d)}),t}function Dx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let l=Dx(r.join("/")),u=[];return u.push(...l.map(d=>d===""?a:[a,d].join("/"))),o&&u.push(...l),u.map(d=>e.startsWith("/")&&d===""?"/":d)}function fE(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:bE(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const hE=/^:\w+$/,pE=3,mE=2,_E=1,gE=10,vE=-2,Ug=e=>e==="*";function yE(e,t){let n=e.split("/"),r=n.length;return n.some(Ug)&&(r+=vE),t&&(r+=mE),n.filter(o=>!Ug(o)).reduce((o,a)=>o+(hE.test(a)?pE:a===""?_E:gE),r)}function bE(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function xE(e,t){let{routesMeta:n}=e,r={},o="/",a=[];for(let l=0;l<n.length;++l){let u=n[l],d=l===n.length-1,f=o==="/"?t:t.slice(o.length)||"/",p=wE({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f);if(!p)return null;Object.assign(r,p.params);let m=u.route;a.push({params:r,pathname:ro([o,p.pathname]),pathnameBase:OE(ro([o,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(o=ro([o,p.pathnameBase]))}return a}function wE(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=kE(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],l=a.replace(/(.)\/+$/,"$1"),u=o.slice(1);return{params:r.reduce((f,p,m)=>{if(p==="*"){let g=u[m]||"";l=a.slice(0,a.length-g.length).replace(/(.)\/+$/,"$1")}return f[p]=PE(u[m]||"",p),f},{}),pathname:a,pathnameBase:l,pattern:e}}function kE(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),na(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,u)=>(r.push(u),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function SE(e){try{return decodeURI(e)}catch(t){return na(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function PE(e,t){try{return decodeURIComponent(e)}catch(n){return na(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ms(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function CE(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Rr(e):e;return{pathname:n?n.startsWith("/")?n:EE(n,t):t,search:LE(r),hash:TE(o)}}function EE(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Vd(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function om(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function jx(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Rr(e):(o=Ze({},e),Ne(!o.pathname||!o.pathname.includes("?"),Vd("?","pathname","search",o)),Ne(!o.pathname||!o.pathname.includes("#"),Vd("#","pathname","hash",o)),Ne(!o.search||!o.search.includes("#"),Vd("#","search","hash",o)));let a=e===""||o.pathname==="",l=a?"/":o.pathname,u;if(r||l==null)u=n;else{let m=t.length-1;if(l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),m-=1;o.pathname=g.join("/")}u=m>=0?t[m]:"/"}let d=CE(o,u),f=l&&l!=="/"&&l.endsWith("/"),p=(a||l===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(f||p)&&(d.pathname+="/"),d}const ro=e=>e.join("/").replace(/\/\/+/g,"/"),OE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),LE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,TE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class im{constructor(t,n,r,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Fx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ux=["post","put","patch","delete"],RE=new Set(Ux),AE=["get",...Ux],zE=new Set(AE),NE=new Set([301,302,303,307,308]),IE=new Set([307,308]),qd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},BE={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},$g={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},$x=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ME=!Wx,DE=e=>({hasErrorBoundary:!!e.hasErrorBoundary});function jE(e){Ne(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t;if(e.mapRouteProperties)t=e.mapRouteProperties;else if(e.detectErrorBoundary){let H=e.detectErrorBoundary;t=V=>({hasErrorBoundary:H(V)})}else t=DE;let n={},r=wh(e.routes,t,void 0,n),o,a=e.basename||"/",l=Ze({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),u=null,d=new Set,f=null,p=null,m=null,g=e.hydrationData!=null,x=Ni(r,e.history.location,a),y=null;if(x==null){let H=Rn(404,{pathname:e.history.location.pathname}),{matches:V,route:ie}=Qg(r);x=V,y={[ie.id]:H}}let w=!x.some(H=>H.route.lazy)&&(!x.some(H=>H.route.loader)||e.hydrationData!=null),P,_={historyAction:e.history.action,location:e.history.location,matches:x,initialized:w,navigation:qd,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||y,fetchers:new Map,blockers:new Map},b=yt.Pop,k=!1,C,R=!1,I=!1,N=[],U=[],$=new Map,F=0,J=-1,le=new Map,X=new Set,Q=new Map,ce=new Map,Y=new Map,B=!1;function M(){return u=e.history.listen(H=>{let{action:V,location:ie,delta:me}=H;if(B){B=!1;return}na(Y.size===0||me!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ge=ri({currentLocation:_.location,nextLocation:ie,historyAction:V});if(ge&&me!=null){B=!0,e.history.go(me*-1),Kt(ge,{state:"blocked",location:ie,proceed(){Kt(ge,{state:"proceeding",proceed:void 0,reset:void 0,location:ie}),e.history.go(me)},reset(){We(ge),O({blockers:new Map(P.state.blockers)})}});return}return re(V,ie)}),_.initialized||re(yt.Pop,_.location),P}function ne(){u&&u(),d.clear(),C&&C.abort(),_.fetchers.forEach((H,V)=>K(V)),_.blockers.forEach((H,V)=>We(V))}function q(H){return d.add(H),()=>d.delete(H)}function O(H){_=Ze({},_,H),d.forEach(V=>V(_))}function A(H,V){var ie,me;let ge=_.actionData!=null&&_.navigation.formMethod!=null&&vr(_.navigation.formMethod)&&_.navigation.state==="loading"&&((ie=H.state)==null?void 0:ie._isRedirect)!==!0,ke;V.actionData?Object.keys(V.actionData).length>0?ke=V.actionData:ke=null:ge?ke=_.actionData:ke=null;let Ce=V.loaderData?Kg(_.loaderData,V.loaderData,V.matches||[],V.errors):_.loaderData;for(let[ye]of Y)We(ye);let we=k===!0||_.navigation.formMethod!=null&&vr(_.navigation.formMethod)&&((me=H.state)==null?void 0:me._isRedirect)!==!0;o&&(r=o,o=void 0),O(Ze({},V,{actionData:ke,loaderData:Ce,historyAction:b,location:H,initialized:!0,navigation:qd,revalidation:"idle",restoreScrollPosition:lr(H,V.matches||_.matches),preventScrollReset:we,blockers:new Map(_.blockers)})),R||b===yt.Pop||(b===yt.Push?e.history.push(H,H.state):b===yt.Replace&&e.history.replace(H,H.state)),b=yt.Pop,k=!1,R=!1,I=!1,N=[],U=[]}async function z(H,V){if(typeof H=="number"){e.history.go(H);return}let ie=kh(_.location,_.matches,a,l.v7_prependBasename,H,V?.fromRouteId,V?.relative),{path:me,submission:ge,error:ke}=Wg(l.v7_normalizeFormMethod,!1,ie,V),Ce=_.location,we=ks(_.location,me,V&&V.state);we=Ze({},we,e.history.encodeLocation(we));let ye=V&&V.replace!=null?V.replace:void 0,Be=yt.Push;ye===!0?Be=yt.Replace:ye===!1||ge!=null&&vr(ge.formMethod)&&ge.formAction===_.location.pathname+_.location.search&&(Be=yt.Replace);let He=V&&"preventScrollReset"in V?V.preventScrollReset===!0:void 0,xt=ri({currentLocation:Ce,nextLocation:we,historyAction:Be});if(xt){Kt(xt,{state:"blocked",location:we,proceed(){Kt(xt,{state:"proceeding",proceed:void 0,reset:void 0,location:we}),z(H,V)},reset(){We(xt),O({blockers:new Map(_.blockers)})}});return}return await re(Be,we,{submission:ge,pendingError:ke,preventScrollReset:He,replace:V&&V.replace})}function Z(){if(oe(),O({revalidation:"loading"}),_.navigation.state!=="submitting"){if(_.navigation.state==="idle"){re(_.historyAction,_.location,{startUninterruptedRevalidation:!0});return}re(b||_.historyAction,_.navigation.location,{overrideNavigation:_.navigation})}}async function re(H,V,ie){C&&C.abort(),C=null,b=H,R=(ie&&ie.startUninterruptedRevalidation)===!0,$n(_.location,_.matches),k=(ie&&ie.preventScrollReset)===!0;let me=o||r,ge=ie&&ie.overrideNavigation,ke=Ni(me,V,a);if(!ke){let ht=Rn(404,{pathname:V.pathname}),{matches:_t,route:Qt}=Qg(me);xo(),A(V,{matches:_t,loaderData:{},errors:{[Qt.id]:ht}});return}if(_.initialized&&HE(_.location,V)&&!(ie&&ie.submission&&vr(ie.submission.formMethod))){A(V,{matches:ke});return}C=new AbortController;let Ce=Da(e.history,V,C.signal,ie&&ie.submission),we,ye;if(ie&&ie.pendingError)ye={[Ii(ke).route.id]:ie.pendingError};else if(ie&&ie.submission&&vr(ie.submission.formMethod)){let ht=await ue(Ce,V,ie.submission,ke,{replace:ie.replace});if(ht.shortCircuited)return;we=ht.pendingActionData,ye=ht.pendingActionError,ge=Ze({state:"loading",location:V},ie.submission),Ce=new Request(Ce.url,{signal:Ce.signal})}let{shortCircuited:Be,loaderData:He,errors:xt}=await de(Ce,V,ke,ge,ie&&ie.submission,ie&&ie.fetcherSubmission,ie&&ie.replace,we,ye);Be||(C=null,A(V,Ze({matches:ke},we?{actionData:we}:{},{loaderData:He,errors:xt})))}async function ue(H,V,ie,me,ge){oe();let ke=Ze({state:"submitting",location:V},ie);O({navigation:ke});let Ce,we=Sh(me,V);if(!we.route.action&&!we.route.lazy)Ce={type:kt.error,error:Rn(405,{method:H.method,pathname:V.pathname,routeId:we.route.id})};else if(Ce=await Ma("action",H,we,me,n,t,a),H.signal.aborted)return{shortCircuited:!0};if($i(Ce)){let ye;return ge&&ge.replace!=null?ye=ge.replace:ye=Ce.location===_.location.pathname+_.location.search,await Le(_,Ce,{submission:ie,replace:ye}),{shortCircuited:!0}}if(ns(Ce)){let ye=Ii(me,we.route.id);return(ge&&ge.replace)!==!0&&(b=yt.Push),{pendingActionData:{},pendingActionError:{[ye.route.id]:Ce.error}}}if(Uo(Ce))throw Rn(400,{type:"defer-action"});return{pendingActionData:{[we.route.id]:Ce.data}}}async function de(H,V,ie,me,ge,ke,Ce,we,ye){let Be=me;Be||(Be=Ze({state:"loading",location:V,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ge));let He=ge||ke?ge||ke:Be.formMethod&&Be.formAction&&Be.formData&&Be.formEncType?{formMethod:Be.formMethod,formAction:Be.formAction,formData:Be.formData,formEncType:Be.formEncType}:void 0,xt=o||r,[ht,_t]=Hg(e.history,_,ie,He,V,I,N,U,Q,xt,a,we,ye);if(xo(Me=>!(ie&&ie.some(pe=>pe.route.id===Me))||ht&&ht.some(pe=>pe.route.id===Me)),ht.length===0&&_t.length===0){let Me=xe();return A(V,Ze({matches:ie,loaderData:{},errors:ye||null},we?{actionData:we}:{},Me?{fetchers:new Map(_.fetchers)}:{})),{shortCircuited:!0}}if(!R){_t.forEach(pe=>{let ur=_.fetchers.get(pe.key),ai={state:"loading",data:ur&&ur.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};_.fetchers.set(pe.key,ai)});let Me=we||_.actionData;O(Ze({navigation:Be},Me?Object.keys(Me).length===0?{actionData:null}:{actionData:Me}:{},_t.length>0?{fetchers:new Map(_.fetchers)}:{}))}J=++F,_t.forEach(Me=>{Me.controller&&$.set(Me.key,Me.controller)});let Qt=()=>_t.forEach(Me=>ae(Me.key));C&&C.signal.addEventListener("abort",Qt);let{results:ko,loaderResults:ha,fetcherResults:oi}=await tt(_.matches,ie,ht,_t,H);if(H.signal.aborted)return{shortCircuited:!0};C&&C.signal.removeEventListener("abort",Qt),_t.forEach(Me=>$.delete(Me.key));let Wn=Gg(ko);if(Wn)return await Le(_,Wn,{replace:Ce}),{shortCircuited:!0};let{loaderData:Ar,errors:pa}=qg(_,ie,ht,ha,ye,_t,oi,ce);ce.forEach((Me,pe)=>{Me.subscribe(ur=>{(ur||Me.done)&&ce.delete(pe)})});let ma=xe(),_a=Se(J),ii=ma||_a||_t.length>0;return Ze({loaderData:Ar,errors:pa},ii?{fetchers:new Map(_.fetchers)}:{})}function be(H){return _.fetchers.get(H)||BE}function Je(H,V,ie,me){if(ME)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");$.has(H)&&ae(H);let ge=o||r,ke=kh(_.location,_.matches,a,l.v7_prependBasename,ie,V,me?.relative),Ce=Ni(ge,ke,a);if(!Ce){he(H,V,Rn(404,{pathname:ke}));return}let{path:we,submission:ye}=Wg(l.v7_normalizeFormMethod,!0,ke,me),Be=Sh(Ce,we);if(k=(me&&me.preventScrollReset)===!0,ye&&vr(ye.formMethod)){et(H,V,we,Be,Ce,ye);return}Q.set(H,{routeId:V,path:we}),$e(H,V,we,Be,Ce,ye)}async function et(H,V,ie,me,ge,ke){if(oe(),Q.delete(H),!me.route.action&&!me.route.lazy){let Nt=Rn(405,{method:ke.formMethod,pathname:ie,routeId:V});he(H,V,Nt);return}let Ce=_.fetchers.get(H),we=Ze({state:"submitting"},ke,{data:Ce&&Ce.data," _hasFetcherDoneAnything ":!0});_.fetchers.set(H,we),O({fetchers:new Map(_.fetchers)});let ye=new AbortController,Be=Da(e.history,ie,ye.signal,ke);$.set(H,ye);let He=await Ma("action",Be,me,ge,n,t,a);if(Be.signal.aborted){$.get(H)===ye&&$.delete(H);return}if($i(He)){$.delete(H),X.add(H);let Nt=Ze({state:"loading"},ke,{data:void 0," _hasFetcherDoneAnything ":!0});return _.fetchers.set(H,Nt),O({fetchers:new Map(_.fetchers)}),Le(_,He,{submission:ke,isFetchActionRedirect:!0})}if(ns(He)){he(H,V,He.error);return}if(Uo(He))throw Rn(400,{type:"defer-action"});let xt=_.navigation.location||_.location,ht=Da(e.history,xt,ye.signal),_t=o||r,Qt=_.navigation.state!=="idle"?Ni(_t,_.navigation.location,a):_.matches;Ne(Qt,"Didn't find any matches after fetcher action");let ko=++F;le.set(H,ko);let ha=Ze({state:"loading",data:He.data},ke,{" _hasFetcherDoneAnything ":!0});_.fetchers.set(H,ha);let[oi,Wn]=Hg(e.history,_,Qt,ke,xt,I,N,U,Q,_t,a,{[me.route.id]:He.data},void 0);Wn.filter(Nt=>Nt.key!==H).forEach(Nt=>{let si=Nt.key,li=_.fetchers.get(si),Ws={state:"loading",data:li&&li.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};_.fetchers.set(si,Ws),Nt.controller&&$.set(si,Nt.controller)}),O({fetchers:new Map(_.fetchers)});let Ar=()=>Wn.forEach(Nt=>ae(Nt.key));ye.signal.addEventListener("abort",Ar);let{results:pa,loaderResults:ma,fetcherResults:_a}=await tt(_.matches,Qt,oi,Wn,ht);if(ye.signal.aborted)return;ye.signal.removeEventListener("abort",Ar),le.delete(H),$.delete(H),Wn.forEach(Nt=>$.delete(Nt.key));let ii=Gg(pa);if(ii)return Le(_,ii);let{loaderData:Me,errors:pe}=qg(_,_.matches,oi,ma,void 0,Wn,_a,ce),ur={state:"idle",data:He.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};_.fetchers.set(H,ur);let ai=Se(ko);_.navigation.state==="loading"&&ko>J?(Ne(b,"Expected pending action"),C&&C.abort(),A(_.navigation.location,{matches:Qt,loaderData:Me,errors:pe,fetchers:new Map(_.fetchers)})):(O(Ze({errors:pe,loaderData:Kg(_.loaderData,Me,Qt,pe)},ai?{fetchers:new Map(_.fetchers)}:{})),I=!1)}async function $e(H,V,ie,me,ge,ke){let Ce=_.fetchers.get(H),we=Ze({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ke,{data:Ce&&Ce.data," _hasFetcherDoneAnything ":!0});_.fetchers.set(H,we),O({fetchers:new Map(_.fetchers)});let ye=new AbortController,Be=Da(e.history,ie,ye.signal);$.set(H,ye);let He=await Ma("loader",Be,me,ge,n,t,a);if(Uo(He)&&(He=await qx(He,Be.signal,!0)||He),$.get(H)===ye&&$.delete(H),Be.signal.aborted)return;if($i(He)){X.add(H),await Le(_,He);return}if(ns(He)){let ht=Ii(_.matches,V);_.fetchers.delete(H),O({fetchers:new Map(_.fetchers),errors:{[ht.route.id]:He.error}});return}Ne(!Uo(He),"Unhandled fetcher deferred data");let xt={state:"idle",data:He.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};_.fetchers.set(H,xt),O({fetchers:new Map(_.fetchers)})}async function Le(H,V,ie){var me;let{submission:ge,replace:ke,isFetchActionRedirect:Ce}=ie===void 0?{}:ie;V.revalidate&&(I=!0);let we=ks(H.location,V.location,Ze({_isRedirect:!0},Ce?{_isFetchActionRedirect:!0}:{}));if(Ne(we,"Expected a location on the redirect navigation"),$x.test(V.location)&&Wx&&typeof((me=window)==null?void 0:me.location)<"u"){let _t=e.history.createURL(V.location),Qt=Ms(_t.pathname,a)==null;if(window.location.origin!==_t.origin||Qt){ke?window.location.replace(V.location):window.location.assign(V.location);return}}C=null;let ye=ke===!0?yt.Replace:yt.Push,{formMethod:Be,formAction:He,formEncType:xt,formData:ht}=H.navigation;!ge&&Be&&He&&ht&&xt&&(ge={formMethod:Be,formAction:He,formEncType:xt,formData:ht}),IE.has(V.status)&&ge&&vr(ge.formMethod)?await re(ye,we,{submission:Ze({},ge,{formAction:V.location}),preventScrollReset:k}):Ce?await re(ye,we,{overrideNavigation:{state:"loading",location:we,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:ge,preventScrollReset:k}):await re(ye,we,{overrideNavigation:{state:"loading",location:we,formMethod:ge?ge.formMethod:void 0,formAction:ge?ge.formAction:void 0,formEncType:ge?ge.formEncType:void 0,formData:ge?ge.formData:void 0},preventScrollReset:k})}async function tt(H,V,ie,me,ge){let ke=await Promise.all([...ie.map(ye=>Ma("loader",ge,ye,V,n,t,a)),...me.map(ye=>ye.matches&&ye.match&&ye.controller?Ma("loader",Da(e.history,ye.path,ye.controller.signal),ye.match,ye.matches,n,t,a):{type:kt.error,error:Rn(404,{pathname:ye.path})})]),Ce=ke.slice(0,ie.length),we=ke.slice(ie.length);return await Promise.all([Jg(H,ie,Ce,Ce.map(()=>ge.signal),!1,_.loaderData),Jg(H,me.map(ye=>ye.match),we,me.map(ye=>ye.controller?ye.controller.signal:null),!0)]),{results:ke,loaderResults:Ce,fetcherResults:we}}function oe(){I=!0,N.push(...xo()),Q.forEach((H,V)=>{$.has(V)&&(U.push(V),ae(V))})}function he(H,V,ie){let me=Ii(_.matches,V);K(H),O({errors:{[me.route.id]:ie},fetchers:new Map(_.fetchers)})}function K(H){$.has(H)&&ae(H),Q.delete(H),le.delete(H),X.delete(H),_.fetchers.delete(H)}function ae(H){let V=$.get(H);Ne(V,"Expected fetch controller: "+H),V.abort(),$.delete(H)}function ve(H){for(let V of H){let me={state:"idle",data:be(V).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};_.fetchers.set(V,me)}}function xe(){let H=[],V=!1;for(let ie of X){let me=_.fetchers.get(ie);Ne(me,"Expected fetcher: "+ie),me.state==="loading"&&(X.delete(ie),H.push(ie),V=!0)}return ve(H),V}function Se(H){let V=[];for(let[ie,me]of le)if(me<H){let ge=_.fetchers.get(ie);Ne(ge,"Expected fetcher: "+ie),ge.state==="loading"&&(ae(ie),le.delete(ie),V.push(ie))}return ve(V),V.length>0}function ze(H,V){let ie=_.blockers.get(H)||$g;return Y.get(H)!==V&&Y.set(H,V),ie}function We(H){_.blockers.delete(H),Y.delete(H)}function Kt(H,V){let ie=_.blockers.get(H)||$g;Ne(ie.state==="unblocked"&&V.state==="blocked"||ie.state==="blocked"&&V.state==="blocked"||ie.state==="blocked"&&V.state==="proceeding"||ie.state==="blocked"&&V.state==="unblocked"||ie.state==="proceeding"&&V.state==="unblocked","Invalid blocker state transition: "+ie.state+" -> "+V.state),_.blockers.set(H,V),O({blockers:new Map(_.blockers)})}function ri(H){let{currentLocation:V,nextLocation:ie,historyAction:me}=H;if(Y.size===0)return;Y.size>1&&na(!1,"A router only supports one blocker at a time");let ge=Array.from(Y.entries()),[ke,Ce]=ge[ge.length-1],we=_.blockers.get(ke);if(!(we&&we.state==="proceeding")&&Ce({currentLocation:V,nextLocation:ie,historyAction:me}))return ke}function xo(H){let V=[];return ce.forEach((ie,me)=>{(!H||H(me))&&(ie.cancel(),V.push(me),ce.delete(me))}),V}function kn(H,V,ie){if(f=H,m=V,p=ie||(me=>me.key),!g&&_.navigation===qd){g=!0;let me=lr(_.location,_.matches);me!=null&&O({restoreScrollPosition:me})}return()=>{f=null,m=null,p=null}}function $n(H,V){if(f&&p&&m){let ie=V.map(ge=>Yg(ge,_.loaderData)),me=p(H,ie)||H.key;f[me]=m()}}function lr(H,V){if(f&&p&&m){let ie=V.map(ke=>Yg(ke,_.loaderData)),me=p(H,ie)||H.key,ge=f[me];if(typeof ge=="number")return ge}return null}function wo(H){n={},o=wh(H,t,void 0,n)}return P={get basename(){return a},get state(){return _},get routes(){return r},initialize:M,subscribe:q,enableScrollRestoration:kn,navigate:z,fetch:Je,revalidate:Z,createHref:H=>e.history.createHref(H),encodeLocation:H=>e.history.encodeLocation(H),getFetcher:be,deleteFetcher:K,dispose:ne,getBlocker:ze,deleteBlocker:We,_internalFetchControllers:$,_internalActiveDeferreds:ce,_internalSetRoutes:wo},P}function FE(e){return e!=null&&"formData"in e}function kh(e,t,n,r,o,a,l){let u,d;if(a!=null&&l!=="path"){u=[];for(let p of t)if(u.push(p),p.route.id===a){d=p;break}}else u=t,d=t[t.length-1];let f=jx(o||".",om(u).map(p=>p.pathnameBase),Ms(e.pathname,n)||e.pathname,l==="path");return o==null&&(f.search=e.search,f.hash=e.hash),(o==null||o===""||o===".")&&d&&d.route.index&&!am(f.search)&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(f.pathname=f.pathname==="/"?n:ro([n,f.pathname])),Bs(f)}function Wg(e,t,n,r){if(!r||!FE(r))return{path:n};if(r.formMethod&&!qE(r.formMethod))return{path:n,error:Rn(405,{method:r.formMethod})};let o;if(r.formData){let u=r.formMethod||"get";if(o={formMethod:e?u.toUpperCase():u.toLowerCase(),formAction:Vx(n),formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:r.formData},vr(o.formMethod))return{path:n,submission:o}}let a=Rr(n),l=Zx(r.formData);return t&&a.search&&am(a.search)&&l.append("index",""),a.search="?"+l,{path:Bs(a),submission:o}}function UE(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Hg(e,t,n,r,o,a,l,u,d,f,p,m,g){let x=g?Object.values(g)[0]:m?Object.values(m)[0]:void 0,y=e.createURL(t.location),w=e.createURL(o),P=g?Object.keys(g)[0]:void 0,b=UE(n,P).filter((C,R)=>{if(C.route.lazy)return!0;if(C.route.loader==null)return!1;if($E(t.loaderData,t.matches[R],C)||l.some(U=>U===C.route.id))return!0;let I=t.matches[R],N=C;return Zg(C,Ze({currentUrl:y,currentParams:I.params,nextUrl:w,nextParams:N.params},r,{actionResult:x,defaultShouldRevalidate:a||y.pathname+y.search===w.pathname+w.search||y.search!==w.search||Hx(I,N)}))}),k=[];return d.forEach((C,R)=>{if(!n.some($=>$.route.id===C.routeId))return;let I=Ni(f,C.path,p);if(!I){k.push({key:R,routeId:C.routeId,path:C.path,matches:null,match:null,controller:null});return}let N=Sh(I,C.path);if(u.includes(R)){k.push({key:R,routeId:C.routeId,path:C.path,matches:I,match:N,controller:new AbortController});return}Zg(N,Ze({currentUrl:y,currentParams:t.matches[t.matches.length-1].params,nextUrl:w,nextParams:n[n.length-1].params},r,{actionResult:x,defaultShouldRevalidate:a}))&&k.push({key:R,routeId:C.routeId,path:C.path,matches:I,match:N,controller:new AbortController})}),[b,k]}function $E(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function Hx(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Zg(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Vg(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];Ne(o,"No route found in manifest");let a={};for(let l in r){let d=o[l]!==void 0&&l!=="hasErrorBoundary";na(!d,'Route "'+o.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!d&&!cE.has(l)&&(a[l]=r[l])}Object.assign(o,a),Object.assign(o,Ze({},t(o),{lazy:void 0}))}async function Ma(e,t,n,r,o,a,l,u,d,f){u===void 0&&(u=!1),d===void 0&&(d=!1);let p,m,g,x=P=>{let _,b=new Promise((k,C)=>_=C);return g=()=>_(),t.signal.addEventListener("abort",g),Promise.race([P({request:t,params:n.params,context:f}),b])};try{let P=n.route[e];if(n.route.lazy)if(P)m=(await Promise.all([x(P),Vg(n.route,a,o)]))[0];else if(await Vg(n.route,a,o),P=n.route[e],P)m=await x(P);else if(e==="action"){let _=new URL(t.url),b=_.pathname+_.search;throw Rn(405,{method:t.method,pathname:b,routeId:n.route.id})}else return{type:kt.data,data:void 0};else if(P)m=await x(P);else{let _=new URL(t.url),b=_.pathname+_.search;throw Rn(404,{pathname:b})}Ne(m!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(P){p=kt.error,m=P}finally{g&&t.signal.removeEventListener("abort",g)}if(VE(m)){let P=m.status;if(NE.has(P)){let k=m.headers.get("Location");if(Ne(k,"Redirects returned/thrown from loaders/actions must have a Location header"),!$x.test(k))k=kh(new URL(t.url),r.slice(0,r.indexOf(n)+1),l,!0,k);else if(!u){let C=new URL(t.url),R=k.startsWith("//")?new URL(C.protocol+k):new URL(k),I=Ms(R.pathname,l)!=null;R.origin===C.origin&&I&&(k=R.pathname+R.search+R.hash)}if(u)throw m.headers.set("Location",k),m;return{type:kt.redirect,status:P,location:k,revalidate:m.headers.get("X-Remix-Revalidate")!==null}}if(d)throw{type:p||kt.data,response:m};let _,b=m.headers.get("Content-Type");return b&&/\bapplication\/json\b/.test(b)?_=await m.json():_=await m.text(),p===kt.error?{type:p,error:new im(P,m.statusText,_),headers:m.headers}:{type:kt.data,data:_,statusCode:m.status,headers:m.headers}}if(p===kt.error)return{type:p,error:m};if(ZE(m)){var y,w;return{type:kt.deferred,deferredData:m,statusCode:(y=m.init)==null?void 0:y.status,headers:((w=m.init)==null?void 0:w.headers)&&new Headers(m.init.headers)}}return{type:kt.data,data:m}}function Da(e,t,n,r){let o=e.createURL(Vx(t)).toString(),a={signal:n};if(r&&vr(r.formMethod)){let{formMethod:l,formEncType:u,formData:d}=r;a.method=l.toUpperCase(),a.body=u==="application/x-www-form-urlencoded"?Zx(d):d}return new Request(o,a)}function Zx(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function WE(e,t,n,r,o){let a={},l=null,u,d=!1,f={};return n.forEach((p,m)=>{let g=t[m].route.id;if(Ne(!$i(p),"Cannot handle redirect results in processLoaderData"),ns(p)){let x=Ii(e,g),y=p.error;r&&(y=Object.values(r)[0],r=void 0),l=l||{},l[x.route.id]==null&&(l[x.route.id]=y),a[g]=void 0,d||(d=!0,u=Fx(p.error)?p.error.status:500),p.headers&&(f[g]=p.headers)}else Uo(p)?(o.set(g,p.deferredData),a[g]=p.deferredData.data):a[g]=p.data,p.statusCode!=null&&p.statusCode!==200&&!d&&(u=p.statusCode),p.headers&&(f[g]=p.headers)}),r&&(l=r,a[Object.keys(r)[0]]=void 0),{loaderData:a,errors:l,statusCode:u||200,loaderHeaders:f}}function qg(e,t,n,r,o,a,l,u){let{loaderData:d,errors:f}=WE(t,n,r,o,u);for(let p=0;p<a.length;p++){let{key:m,match:g,controller:x}=a[p];Ne(l!==void 0&&l[p]!==void 0,"Did not find corresponding fetcher result");let y=l[p];if(!(x&&x.signal.aborted))if(ns(y)){let w=Ii(e.matches,g?.route.id);f&&f[w.route.id]||(f=Ze({},f,{[w.route.id]:y.error})),e.fetchers.delete(m)}else if($i(y))Ne(!1,"Unhandled fetcher revalidation redirect");else if(Uo(y))Ne(!1,"Unhandled fetcher deferred data");else{let w={state:"idle",data:y.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(m,w)}}return{loaderData:d,errors:f}}function Kg(e,t,n,r){let o=Ze({},t);for(let a of n){let l=a.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(o[l]=t[l]):e[l]!==void 0&&a.route.loader&&(o[l]=e[l]),r&&r.hasOwnProperty(l))break}return o}function Ii(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Qg(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Rn(e,t){let{pathname:n,routeId:r,method:o,type:a}=t===void 0?{}:t,l="Unknown Server Error",u="Unknown @remix-run/router error";return e===400?(l="Bad Request",o&&n&&r?u="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a==="defer-action"&&(u="defer() is not supported in actions")):e===403?(l="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",u='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",o&&n&&r?u="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(u='Invalid request method "'+o.toUpperCase()+'"')),new im(e||500,l,new Error(u),!0)}function Gg(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if($i(n))return n}}function Vx(e){let t=typeof e=="string"?Rr(e):e;return Bs(Ze({},t,{hash:""}))}function HE(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Uo(e){return e.type===kt.deferred}function ns(e){return e.type===kt.error}function $i(e){return(e&&e.type)===kt.redirect}function ZE(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function VE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function qE(e){return zE.has(e.toLowerCase())}function vr(e){return RE.has(e.toLowerCase())}async function Jg(e,t,n,r,o,a){for(let l=0;l<n.length;l++){let u=n[l],d=t[l];if(!d)continue;let f=e.find(m=>m.route.id===d.route.id),p=f!=null&&!Hx(f,d)&&(a&&a[d.route.id])!==void 0;if(Uo(u)&&(o||p)){let m=r[l];Ne(m,"Expected an AbortSignal for revalidating fetcher deferred result"),await qx(u,m,o).then(g=>{g&&(n[l]=g||n[l])})}}}async function qx(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:kt.data,data:e.deferredData.unwrappedData}}catch(o){return{type:kt.error,error:o}}return{type:kt.data,data:e.deferredData.data}}}function am(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Yg(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function Sh(e,t){let n=typeof t=="string"?Rr(t).search:t.search;if(e[e.length-1].route.index&&am(n||""))return e[e.length-1];let r=om(e);return r[r.length-1]}/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Su(){return Su=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Su.apply(this,arguments)}const Ac=E.createContext(null),Kx=E.createContext(null),zc=E.createContext(null),Nc=E.createContext(null),ua=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Qx=E.createContext(null);function Ic(){return E.useContext(Nc)!=null}function Gx(){return Ic()||Ne(!1),E.useContext(Nc).location}function Jx(e){E.useContext(zc).static||E.useLayoutEffect(e)}function KE(){let{isDataRoute:e}=E.useContext(ua);return e?a2():QE()}function QE(){Ic()||Ne(!1);let e=E.useContext(Ac),{basename:t,navigator:n}=E.useContext(zc),{matches:r}=E.useContext(ua),{pathname:o}=Gx(),a=JSON.stringify(om(r).map(d=>d.pathnameBase)),l=E.useRef(!1);return Jx(()=>{l.current=!0}),E.useCallback(function(d,f){if(f===void 0&&(f={}),!l.current)return;if(typeof d=="number"){n.go(d);return}let p=jx(d,JSON.parse(a),o,f.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:ro([t,p.pathname])),(f.replace?n.replace:n.push)(p,f.state,f)},[t,n,a,o,e])}function GE(e,t,n){Ic()||Ne(!1);let{navigator:r}=E.useContext(zc),{matches:o}=E.useContext(ua),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let d=Gx(),f;if(t){var p;let w=typeof t=="string"?Rr(t):t;u==="/"||(p=w.pathname)!=null&&p.startsWith(u)||Ne(!1),f=w}else f=d;let m=f.pathname||"/",g=u==="/"?m:m.slice(u.length)||"/",x=Ni(e,{pathname:g}),y=t2(x&&x.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:ro([u,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?u:ro([u,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,n);return t&&y?E.createElement(Nc.Provider,{value:{location:Su({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:yt.Pop}},y):y}function JE(){let e=i2(),t=Fx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:o},n):null,a)}const YE=E.createElement(JE,null);class XE extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?E.createElement(ua.Provider,{value:this.props.routeContext},E.createElement(Qx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function e2(e){let{routeContext:t,match:n,children:r}=e,o=E.useContext(Ac);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(ua.Provider,{value:t},r)}function t2(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let a=e,l=(r=n)==null?void 0:r.errors;if(l!=null){let u=a.findIndex(d=>d.route.id&&l?.[d.route.id]);u>=0||Ne(!1),a=a.slice(0,Math.min(a.length,u+1))}return a.reduceRight((u,d,f)=>{let p=d.route.id?l?.[d.route.id]:null,m=null;n&&(m=d.route.errorElement||YE);let g=t.concat(a.slice(0,f+1)),x=()=>{let y;return p?y=m:d.route.Component?y=E.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=u,E.createElement(e2,{match:d,routeContext:{outlet:u,matches:g,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?E.createElement(XE,{location:n.location,revalidation:n.revalidation,component:m,error:p,children:x(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):x()},null)}var Ph;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Ph||(Ph={}));var Ss;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Ss||(Ss={}));function n2(e){let t=E.useContext(Ac);return t||Ne(!1),t}function r2(e){let t=E.useContext(Kx);return t||Ne(!1),t}function o2(e){let t=E.useContext(ua);return t||Ne(!1),t}function Yx(e){let t=o2(),n=t.matches[t.matches.length-1];return n.route.id||Ne(!1),n.route.id}function i2(){var e;let t=E.useContext(Qx),n=r2(Ss.UseRouteError),r=Yx(Ss.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function a2(){let{router:e}=n2(Ph.UseNavigateStable),t=Yx(Ss.UseNavigateStable),n=E.useRef(!1);return Jx(()=>{n.current=!0}),E.useCallback(function(o,a){a===void 0&&(a={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Su({fromRouteId:t},a)))},[e,t])}function s2(e){let{fallbackElement:t,router:n}=e,[r,o]=E.useState(n.state);E.useLayoutEffect(()=>n.subscribe(o),[n,o]);let a=E.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:d=>n.navigate(d),push:(d,f,p)=>n.navigate(d,{state:f,preventScrollReset:p?.preventScrollReset}),replace:(d,f,p)=>n.navigate(d,{replace:!0,state:f,preventScrollReset:p?.preventScrollReset})}),[n]),l=n.basename||"/",u=E.useMemo(()=>({router:n,navigator:a,static:!1,basename:l}),[n,a,l]);return E.createElement(E.Fragment,null,E.createElement(Ac.Provider,{value:u},E.createElement(Kx.Provider,{value:r},E.createElement(u2,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:a},n.state.initialized?E.createElement(l2,{routes:n.routes,state:r}):t))),null)}function l2(e){let{routes:t,state:n}=e;return GE(t,void 0,n)}function u2(e){let{basename:t="/",children:n=null,location:r,navigationType:o=yt.Pop,navigator:a,static:l=!1}=e;Ic()&&Ne(!1);let u=t.replace(/^\/*/,"/"),d=E.useMemo(()=>({basename:u,navigator:a,static:l}),[u,a,l]);typeof r=="string"&&(r=Rr(r));let{pathname:f="/",search:p="",hash:m="",state:g=null,key:x="default"}=r,y=E.useMemo(()=>{let w=Ms(f,u);return w==null?null:{location:{pathname:w,search:p,hash:m,state:g,key:x},navigationType:o}},[u,f,p,m,g,x,o]);return y==null?null:E.createElement(zc.Provider,{value:d},E.createElement(Nc.Provider,{children:n,value:y}))}var Xg;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Xg||(Xg={}));new Promise(()=>{});function c2(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:E.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:E.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pu(){return Pu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pu.apply(this,arguments)}function d2(e,t){return jE({basename:t?.basename,future:Pu({},t?.future,{v7_prependBasename:!0}),history:sE({window:t?.window}),hydrationData:t?.hydrationData||f2(),routes:e,mapRouteProperties:c2}).initialize()}function f2(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Pu({},t,{errors:h2(t.errors)})),t}function h2(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&o.__type==="RouteErrorResponse")n[r]=new im(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){let a=new Error(o.message);a.stack="",n[r]=a}else n[r]=o;return n}var ev;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(ev||(ev={}));var tv;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(tv||(tv={}));function an(e){return an=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},an(e)}function p2(e,t){if(an(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(an(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Xx(e){var t=p2(e,"string");return an(t)==="symbol"?t:String(t)}function jn(e,t,n){return t=Xx(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m2(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];typeof n[0]=="string"&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var nv={};function Ch(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&nv[t[0]]||(typeof t[0]=="string"&&(nv[t[0]]=new Date),m2.apply(void 0,t))}var ew=function(t,n){return function(){if(t.isInitialized)n();else{var r=function o(){setTimeout(function(){t.off("initialized",o)},0),n()};t.on("initialized",r)}}};function rv(e,t,n){e.loadNamespaces(t,ew(e,n))}function ov(e,t,n,r){typeof n=="string"&&(n=[n]),n.forEach(function(o){e.options.ns.indexOf(o)<0&&e.options.ns.push(o)}),e.loadLanguages(t,ew(e,r))}function _2(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.languages[0],o=t.options?t.options.fallbackLng:!1,a=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;var l=function(d,f){var p=t.services.backendConnector.state["".concat(d,"|").concat(f)];return p===-1||p===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!l(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||l(r,e)&&(!o||l(a,e)))}function g2(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!t.languages||!t.languages.length)return Ch("i18n.languages were undefined or empty",t.languages),!0;var r=t.options.ignoreJSONStructure!==void 0;return r?t.hasLoadedNamespace(e,{lng:n.lng,precheck:function(a,l){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!l(a.isLanguageChangingTo,e))return!1}}):_2(e,t,n)}var v2=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,y2={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},b2=function(t){return y2[t]},x2=function(t){return t.replace(v2,b2)};function iv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function av(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?iv(Object(n),!0).forEach(function(r){jn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):iv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Eh={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:x2};function w2(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Eh=av(av({},Eh),e)}function k2(){return Eh}var tw;function S2(e){tw=e}function P2(){return tw}function Fn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function sv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Xx(r.key),r)}}function Un(e,t,n){return t&&sv(e.prototype,t),n&&sv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var C2={type:"3rdParty",init:function(t){w2(t.options.react),S2(t)}},E2=E.createContext(),O2=function(){function e(){Fn(this,e),this.usedNamespaces={}}return Un(e,[{key:"addUsedNamespaces",value:function(n){var r=this;n.forEach(function(o){r.usedNamespaces[o]||(r.usedNamespaces[o]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function nw(e){if(Array.isArray(e))return e}function L2(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,a,l,u=[],d=!0,f=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;d=!1}else for(;!(d=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);d=!0);}catch(p){f=!0,o=p}finally{try{if(!d&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(f)throw o}}return u}}function lv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function rw(e,t){if(e){if(typeof e=="string")return lv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return lv(e,t)}}function ow(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T2(e,t){return nw(e)||L2(e,t)||rw(e,t)||ow()}function uv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Kd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?uv(Object(n),!0).forEach(function(r){jn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):uv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var R2=function(t,n){var r=E.useRef();return E.useEffect(function(){r.current=n?r.current:t},[t,n]),r.current};function sm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.i18n,r=E.useContext(E2)||{},o=r.i18n,a=r.defaultNS,l=n||o||P2();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new O2),!l){Ch("You will need to pass in an i18next instance by using initReactI18next");var u=function($,F){return typeof F=="string"?F:F&&an(F)==="object"&&typeof F.defaultValue=="string"?F.defaultValue:Array.isArray($)?$[$.length-1]:$},d=[u,{},!1];return d.t=u,d.i18n={},d.ready=!1,d}l.options.react&&l.options.react.wait!==void 0&&Ch("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var f=Kd(Kd(Kd({},k2()),l.options.react),t),p=f.useSuspense,m=f.keyPrefix,g=e||a||l.options&&l.options.defaultNS;g=typeof g=="string"?[g]:g||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(g);var x=(l.isInitialized||l.initializedStoreOnce)&&g.every(function(U){return g2(U,l,f)});function y(){return l.getFixedT(t.lng||null,f.nsMode==="fallback"?g:g[0],m)}var w=E.useState(y),P=T2(w,2),_=P[0],b=P[1],k=g.join();t.lng&&(k="".concat(t.lng).concat(k));var C=R2(k),R=E.useRef(!0);E.useEffect(function(){var U=f.bindI18n,$=f.bindI18nStore;R.current=!0,!x&&!p&&(t.lng?ov(l,t.lng,g,function(){R.current&&b(y)}):rv(l,g,function(){R.current&&b(y)})),x&&C&&C!==k&&R.current&&b(y);function F(){R.current&&b(y)}return U&&l&&l.on(U,F),$&&l&&l.store.on($,F),function(){R.current=!1,U&&l&&U.split(" ").forEach(function(J){return l.off(J,F)}),$&&l&&$.split(" ").forEach(function(J){return l.store.off(J,F)})}},[l,k]);var I=E.useRef(!0);E.useEffect(function(){R.current&&!I.current&&b(y),I.current=!1},[l,m]);var N=[_,l,x];if(N.t=_,N.i18n=l,N.ready=x,x||!x&&!p)return N;throw new Promise(function(U){t.lng?ov(l,t.lng,g,function(){return U()}):rv(l,g,function(){return U()})})}function Cu(e,t){return Cu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Cu(e,t)}function Ds(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Cu(e,t)}var js=function(){function e(){this.listeners=[]}var t=e.prototype;return t.subscribe=function(r){var o=this,a=r||function(){};return this.listeners.push(a),this.onSubscribe(),function(){o.listeners=o.listeners.filter(function(l){return l!==a}),o.onUnsubscribe()}},t.hasListeners=function(){return this.listeners.length>0},t.onSubscribe=function(){},t.onUnsubscribe=function(){},e}(),Eu=typeof window>"u";function jt(){}function A2(e,t){return typeof e=="function"?e(t):e}function Oh(e){return typeof e=="number"&&e>=0&&e!==1/0}function Ou(e){return Array.isArray(e)?e:[e]}function iw(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Hl(e,t,n){return Bc(e)?typeof t=="function"?Ve({},n,{queryKey:e,queryFn:t}):Ve({},t,{queryKey:e}):e}function Ur(e,t,n){return Bc(e)?[Ve({},t,{queryKey:e}),n]:[e||{},t]}function z2(e,t){if(e===!0&&t===!0||e==null&&t==null)return"all";if(e===!1&&t===!1)return"none";var n=e??!t;return n?"active":"inactive"}function cv(e,t){var n=e.active,r=e.exact,o=e.fetching,a=e.inactive,l=e.predicate,u=e.queryKey,d=e.stale;if(Bc(u)){if(r){if(t.queryHash!==lm(u,t.options))return!1}else if(!Lu(t.queryKey,u))return!1}var f=z2(n,a);if(f==="none")return!1;if(f!=="all"){var p=t.isActive();if(f==="active"&&!p||f==="inactive"&&p)return!1}return!(typeof d=="boolean"&&t.isStale()!==d||typeof o=="boolean"&&t.isFetching()!==o||l&&!l(t))}function dv(e,t){var n=e.exact,r=e.fetching,o=e.predicate,a=e.mutationKey;if(Bc(a)){if(!t.options.mutationKey)return!1;if(n){if($o(t.options.mutationKey)!==$o(a))return!1}else if(!Lu(t.options.mutationKey,a))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||o&&!o(t))}function lm(e,t){var n=t?.queryKeyHashFn||$o;return n(e)}function $o(e){var t=Ou(e);return N2(t)}function N2(e){return JSON.stringify(e,function(t,n){return Lh(n)?Object.keys(n).sort().reduce(function(r,o){return r[o]=n[o],r},{}):n})}function Lu(e,t){return aw(Ou(e),Ou(t))}function aw(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(function(n){return!aw(e[n],t[n])}):!1}function Tu(e,t){if(e===t)return e;var n=Array.isArray(e)&&Array.isArray(t);if(n||Lh(e)&&Lh(t)){for(var r=n?e.length:Object.keys(e).length,o=n?t:Object.keys(t),a=o.length,l=n?[]:{},u=0,d=0;d<a;d++){var f=n?d:o[d];l[f]=Tu(e[f],t[f]),l[f]===e[f]&&u++}return r===a&&u===r?e:l}return t}function I2(e,t){if(e&&!t||t&&!e)return!1;for(var n in e)if(e[n]!==t[n])return!1;return!0}function Lh(e){if(!fv(e))return!1;var t=e.constructor;if(typeof t>"u")return!0;var n=t.prototype;return!(!fv(n)||!n.hasOwnProperty("isPrototypeOf"))}function fv(e){return Object.prototype.toString.call(e)==="[object Object]"}function Bc(e){return typeof e=="string"||Array.isArray(e)}function B2(e){return new Promise(function(t){setTimeout(t,e)})}function hv(e){Promise.resolve().then(e).catch(function(t){return setTimeout(function(){throw t})})}function sw(){if(typeof AbortController=="function")return new AbortController}var M2=function(e){Ds(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(o){var a;if(!Eu&&((a=window)!=null&&a.addEventListener)){var l=function(){return o()};return window.addEventListener("visibilitychange",l,!1),window.addEventListener("focus",l,!1),function(){window.removeEventListener("visibilitychange",l),window.removeEventListener("focus",l)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var o;(o=this.cleanup)==null||o.call(this),this.cleanup=void 0}},n.setEventListener=function(o){var a,l=this;this.setup=o,(a=this.cleanup)==null||a.call(this),this.cleanup=o(function(u){typeof u=="boolean"?l.setFocused(u):l.onFocus()})},n.setFocused=function(o){this.focused=o,o&&this.onFocus()},n.onFocus=function(){this.listeners.forEach(function(o){o()})},n.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},t}(js),rs=new M2,D2=function(e){Ds(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(o){var a;if(!Eu&&((a=window)!=null&&a.addEventListener)){var l=function(){return o()};return window.addEventListener("online",l,!1),window.addEventListener("offline",l,!1),function(){window.removeEventListener("online",l),window.removeEventListener("offline",l)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var o;(o=this.cleanup)==null||o.call(this),this.cleanup=void 0}},n.setEventListener=function(o){var a,l=this;this.setup=o,(a=this.cleanup)==null||a.call(this),this.cleanup=o(function(u){typeof u=="boolean"?l.setOnline(u):l.onOnline()})},n.setOnline=function(o){this.online=o,o&&this.onOnline()},n.onOnline=function(){this.listeners.forEach(function(o){o()})},n.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},t}(js),Zl=new D2;function j2(e){return Math.min(1e3*Math.pow(2,e),3e4)}function Ru(e){return typeof e?.cancel=="function"}var lw=function(t){this.revert=t?.revert,this.silent=t?.silent};function Vl(e){return e instanceof lw}var uw=function(t){var n=this,r=!1,o,a,l,u;this.abort=t.abort,this.cancel=function(g){return o?.(g)},this.cancelRetry=function(){r=!0},this.continueRetry=function(){r=!1},this.continue=function(){return a?.()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(g,x){l=g,u=x});var d=function(x){n.isResolved||(n.isResolved=!0,t.onSuccess==null||t.onSuccess(x),a?.(),l(x))},f=function(x){n.isResolved||(n.isResolved=!0,t.onError==null||t.onError(x),a?.(),u(x))},p=function(){return new Promise(function(x){a=x,n.isPaused=!0,t.onPause==null||t.onPause()}).then(function(){a=void 0,n.isPaused=!1,t.onContinue==null||t.onContinue()})},m=function g(){if(!n.isResolved){var x;try{x=t.fn()}catch(y){x=Promise.reject(y)}o=function(w){if(!n.isResolved&&(f(new lw(w)),n.abort==null||n.abort(),Ru(x)))try{x.cancel()}catch{}},n.isTransportCancelable=Ru(x),Promise.resolve(x).then(d).catch(function(y){var w,P;if(!n.isResolved){var _=(w=t.retry)!=null?w:3,b=(P=t.retryDelay)!=null?P:j2,k=typeof b=="function"?b(n.failureCount,y):b,C=_===!0||typeof _=="number"&&n.failureCount<_||typeof _=="function"&&_(n.failureCount,y);if(r||!C){f(y);return}n.failureCount++,t.onFail==null||t.onFail(n.failureCount,y),B2(k).then(function(){if(!rs.isFocused()||!Zl.isOnline())return p()}).then(function(){r?f(y):g()})}})}};m()},F2=function(){function e(){this.queue=[],this.transactions=0,this.notifyFn=function(n){n()},this.batchNotifyFn=function(n){n()}}var t=e.prototype;return t.batch=function(r){var o;this.transactions++;try{o=r()}finally{this.transactions--,this.transactions||this.flush()}return o},t.schedule=function(r){var o=this;this.transactions?this.queue.push(r):hv(function(){o.notifyFn(r)})},t.batchCalls=function(r){var o=this;return function(){for(var a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];o.schedule(function(){r.apply(void 0,l)})}},t.flush=function(){var r=this,o=this.queue;this.queue=[],o.length&&hv(function(){r.batchNotifyFn(function(){o.forEach(function(a){r.notifyFn(a)})})})},t.setNotifyFunction=function(r){this.notifyFn=r},t.setBatchNotifyFunction=function(r){this.batchNotifyFn=r},e}(),dt=new F2,cw=console;function Au(){return cw}function U2(e){cw=e}var $2=function(){function e(n){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.cache=n.cache,this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.initialState=n.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=n.meta,this.scheduleGc()}var t=e.prototype;return t.setOptions=function(r){var o;this.options=Ve({},this.defaultOptions,r),this.meta=r?.meta,this.cacheTime=Math.max(this.cacheTime||0,(o=this.options.cacheTime)!=null?o:5*60*1e3)},t.setDefaultOptions=function(r){this.defaultOptions=r},t.scheduleGc=function(){var r=this;this.clearGcTimeout(),Oh(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){r.optionalRemove()},this.cacheTime))},t.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},t.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},t.setData=function(r,o){var a,l,u=this.state.data,d=A2(r,u);return(a=(l=this.options).isDataEqual)!=null&&a.call(l,u,d)?d=u:this.options.structuralSharing!==!1&&(d=Tu(u,d)),this.dispatch({data:d,type:"success",dataUpdatedAt:o?.updatedAt}),d},t.setState=function(r,o){this.dispatch({type:"setState",state:r,setStateOptions:o})},t.cancel=function(r){var o,a=this.promise;return(o=this.retryer)==null||o.cancel(r),a?a.then(jt).catch(jt):Promise.resolve()},t.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},t.reset=function(){this.destroy(),this.setState(this.initialState)},t.isActive=function(){return this.observers.some(function(r){return r.options.enabled!==!1})},t.isFetching=function(){return this.state.isFetching},t.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(r){return r.getCurrentResult().isStale})},t.isStaleByTime=function(r){return r===void 0&&(r=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!iw(this.state.dataUpdatedAt,r)},t.onFocus=function(){var r,o=this.observers.find(function(a){return a.shouldFetchOnWindowFocus()});o&&o.refetch(),(r=this.retryer)==null||r.continue()},t.onOnline=function(){var r,o=this.observers.find(function(a){return a.shouldFetchOnReconnect()});o&&o.refetch(),(r=this.retryer)==null||r.continue()},t.addObserver=function(r){this.observers.indexOf(r)===-1&&(this.observers.push(r),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:r}))},t.removeObserver=function(r){this.observers.indexOf(r)!==-1&&(this.observers=this.observers.filter(function(o){return o!==r}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:r}))},t.getObserversCount=function(){return this.observers.length},t.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},t.fetch=function(r,o){var a=this,l,u,d;if(this.state.isFetching){if(this.state.dataUpdatedAt&&o?.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var f;return(f=this.retryer)==null||f.continueRetry(),this.promise}}if(r&&this.setOptions(r),!this.options.queryFn){var p=this.observers.find(function(b){return b.options.queryFn});p&&this.setOptions(p.options)}var m=Ou(this.queryKey),g=sw(),x={queryKey:m,pageParam:void 0,meta:this.meta};Object.defineProperty(x,"signal",{enumerable:!0,get:function(){if(g)return a.abortSignalConsumed=!0,g.signal}});var y=function(){return a.options.queryFn?(a.abortSignalConsumed=!1,a.options.queryFn(x)):Promise.reject("Missing queryFn")},w={fetchOptions:o,options:this.options,queryKey:m,state:this.state,fetchFn:y,meta:this.meta};if((l=this.options.behavior)!=null&&l.onFetch){var P;(P=this.options.behavior)==null||P.onFetch(w)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((u=w.fetchOptions)==null?void 0:u.meta)){var _;this.dispatch({type:"fetch",meta:(_=w.fetchOptions)==null?void 0:_.meta})}return this.retryer=new uw({fn:w.fetchFn,abort:g==null||(d=g.abort)==null?void 0:d.bind(g),onSuccess:function(k){a.setData(k),a.cache.config.onSuccess==null||a.cache.config.onSuccess(k,a),a.cacheTime===0&&a.optionalRemove()},onError:function(k){Vl(k)&&k.silent||a.dispatch({type:"error",error:k}),Vl(k)||(a.cache.config.onError==null||a.cache.config.onError(k,a),Au().error(k)),a.cacheTime===0&&a.optionalRemove()},onFail:function(){a.dispatch({type:"failed"})},onPause:function(){a.dispatch({type:"pause"})},onContinue:function(){a.dispatch({type:"continue"})},retry:w.options.retry,retryDelay:w.options.retryDelay}),this.promise=this.retryer.promise,this.promise},t.dispatch=function(r){var o=this;this.state=this.reducer(this.state,r),dt.batch(function(){o.observers.forEach(function(a){a.onQueryUpdate(r)}),o.cache.notify({query:o,type:"queryUpdated",action:r})})},t.getDefaultState=function(r){var o=typeof r.initialData=="function"?r.initialData():r.initialData,a=typeof r.initialData<"u",l=a?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0,u=typeof o<"u";return{data:o,dataUpdateCount:0,dataUpdatedAt:u?l??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:u?"success":"idle"}},t.reducer=function(r,o){var a,l;switch(o.type){case"failed":return Ve({},r,{fetchFailureCount:r.fetchFailureCount+1});case"pause":return Ve({},r,{isPaused:!0});case"continue":return Ve({},r,{isPaused:!1});case"fetch":return Ve({},r,{fetchFailureCount:0,fetchMeta:(a=o.meta)!=null?a:null,isFetching:!0,isPaused:!1},!r.dataUpdatedAt&&{error:null,status:"loading"});case"success":return Ve({},r,{data:o.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(l=o.dataUpdatedAt)!=null?l:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var u=o.error;return Vl(u)&&u.revert&&this.revertState?Ve({},this.revertState):Ve({},r,{error:u,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return Ve({},r,{isInvalidated:!0});case"setState":return Ve({},r,o.state);default:return r}},e}(),W2=function(e){Ds(t,e);function t(r){var o;return o=e.call(this)||this,o.config=r||{},o.queries=[],o.queriesMap={},o}var n=t.prototype;return n.build=function(o,a,l){var u,d=a.queryKey,f=(u=a.queryHash)!=null?u:lm(d,a),p=this.get(f);return p||(p=new $2({cache:this,queryKey:d,queryHash:f,options:o.defaultQueryOptions(a),state:l,defaultOptions:o.getQueryDefaults(d),meta:a.meta}),this.add(p)),p},n.add=function(o){this.queriesMap[o.queryHash]||(this.queriesMap[o.queryHash]=o,this.queries.push(o),this.notify({type:"queryAdded",query:o}))},n.remove=function(o){var a=this.queriesMap[o.queryHash];a&&(o.destroy(),this.queries=this.queries.filter(function(l){return l!==o}),a===o&&delete this.queriesMap[o.queryHash],this.notify({type:"queryRemoved",query:o}))},n.clear=function(){var o=this;dt.batch(function(){o.queries.forEach(function(a){o.remove(a)})})},n.get=function(o){return this.queriesMap[o]},n.getAll=function(){return this.queries},n.find=function(o,a){var l=Ur(o,a),u=l[0];return typeof u.exact>"u"&&(u.exact=!0),this.queries.find(function(d){return cv(u,d)})},n.findAll=function(o,a){var l=Ur(o,a),u=l[0];return Object.keys(u).length>0?this.queries.filter(function(d){return cv(u,d)}):this.queries},n.notify=function(o){var a=this;dt.batch(function(){a.listeners.forEach(function(l){l(o)})})},n.onFocus=function(){var o=this;dt.batch(function(){o.queries.forEach(function(a){a.onFocus()})})},n.onOnline=function(){var o=this;dt.batch(function(){o.queries.forEach(function(a){a.onOnline()})})},t}(js),H2=function(){function e(n){this.options=Ve({},n.defaultOptions,n.options),this.mutationId=n.mutationId,this.mutationCache=n.mutationCache,this.observers=[],this.state=n.state||Z2(),this.meta=n.meta}var t=e.prototype;return t.setState=function(r){this.dispatch({type:"setState",state:r})},t.addObserver=function(r){this.observers.indexOf(r)===-1&&this.observers.push(r)},t.removeObserver=function(r){this.observers=this.observers.filter(function(o){return o!==r})},t.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(jt).catch(jt)):Promise.resolve()},t.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},t.execute=function(){var r=this,o,a=this.state.status==="loading",l=Promise.resolve();return a||(this.dispatch({type:"loading",variables:this.options.variables}),l=l.then(function(){r.mutationCache.config.onMutate==null||r.mutationCache.config.onMutate(r.state.variables,r)}).then(function(){return r.options.onMutate==null?void 0:r.options.onMutate(r.state.variables)}).then(function(u){u!==r.state.context&&r.dispatch({type:"loading",context:u,variables:r.state.variables})})),l.then(function(){return r.executeMutation()}).then(function(u){o=u,r.mutationCache.config.onSuccess==null||r.mutationCache.config.onSuccess(o,r.state.variables,r.state.context,r)}).then(function(){return r.options.onSuccess==null?void 0:r.options.onSuccess(o,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(o,null,r.state.variables,r.state.context)}).then(function(){return r.dispatch({type:"success",data:o}),o}).catch(function(u){return r.mutationCache.config.onError==null||r.mutationCache.config.onError(u,r.state.variables,r.state.context,r),Au().error(u),Promise.resolve().then(function(){return r.options.onError==null?void 0:r.options.onError(u,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(void 0,u,r.state.variables,r.state.context)}).then(function(){throw r.dispatch({type:"error",error:u}),u})})},t.executeMutation=function(){var r=this,o;return this.retryer=new uw({fn:function(){return r.options.mutationFn?r.options.mutationFn(r.state.variables):Promise.reject("No mutationFn found")},onFail:function(){r.dispatch({type:"failed"})},onPause:function(){r.dispatch({type:"pause"})},onContinue:function(){r.dispatch({type:"continue"})},retry:(o=this.options.retry)!=null?o:0,retryDelay:this.options.retryDelay}),this.retryer.promise},t.dispatch=function(r){var o=this;this.state=V2(this.state,r),dt.batch(function(){o.observers.forEach(function(a){a.onMutationUpdate(r)}),o.mutationCache.notify(o)})},e}();function Z2(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function V2(e,t){switch(t.type){case"failed":return Ve({},e,{failureCount:e.failureCount+1});case"pause":return Ve({},e,{isPaused:!0});case"continue":return Ve({},e,{isPaused:!1});case"loading":return Ve({},e,{context:t.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:t.variables});case"success":return Ve({},e,{data:t.data,error:null,status:"success",isPaused:!1});case"error":return Ve({},e,{data:void 0,error:t.error,failureCount:e.failureCount+1,isPaused:!1,status:"error"});case"setState":return Ve({},e,t.state);default:return e}}var q2=function(e){Ds(t,e);function t(r){var o;return o=e.call(this)||this,o.config=r||{},o.mutations=[],o.mutationId=0,o}var n=t.prototype;return n.build=function(o,a,l){var u=new H2({mutationCache:this,mutationId:++this.mutationId,options:o.defaultMutationOptions(a),state:l,defaultOptions:a.mutationKey?o.getMutationDefaults(a.mutationKey):void 0,meta:a.meta});return this.add(u),u},n.add=function(o){this.mutations.push(o),this.notify(o)},n.remove=function(o){this.mutations=this.mutations.filter(function(a){return a!==o}),o.cancel(),this.notify(o)},n.clear=function(){var o=this;dt.batch(function(){o.mutations.forEach(function(a){o.remove(a)})})},n.getAll=function(){return this.mutations},n.find=function(o){return typeof o.exact>"u"&&(o.exact=!0),this.mutations.find(function(a){return dv(o,a)})},n.findAll=function(o){return this.mutations.filter(function(a){return dv(o,a)})},n.notify=function(o){var a=this;dt.batch(function(){a.listeners.forEach(function(l){l(o)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var o=this.mutations.filter(function(a){return a.state.isPaused});return dt.batch(function(){return o.reduce(function(a,l){return a.then(function(){return l.continue().catch(jt)})},Promise.resolve())})},t}(js);function K2(){return{onFetch:function(t){t.fetchFn=function(){var n,r,o,a,l,u,d=(n=t.fetchOptions)==null||(r=n.meta)==null?void 0:r.refetchPage,f=(o=t.fetchOptions)==null||(a=o.meta)==null?void 0:a.fetchMore,p=f?.pageParam,m=f?.direction==="forward",g=f?.direction==="backward",x=((l=t.state.data)==null?void 0:l.pages)||[],y=((u=t.state.data)==null?void 0:u.pageParams)||[],w=sw(),P=w?.signal,_=y,b=!1,k=t.options.queryFn||function(){return Promise.reject("Missing queryFn")},C=function(Q,ce,Y,B){return _=B?[ce].concat(_):[].concat(_,[ce]),B?[Y].concat(Q):[].concat(Q,[Y])},R=function(Q,ce,Y,B){if(b)return Promise.reject("Cancelled");if(typeof Y>"u"&&!ce&&Q.length)return Promise.resolve(Q);var M={queryKey:t.queryKey,signal:P,pageParam:Y,meta:t.meta},ne=k(M),q=Promise.resolve(ne).then(function(A){return C(Q,Y,A,B)});if(Ru(ne)){var O=q;O.cancel=ne.cancel}return q},I;if(!x.length)I=R([]);else if(m){var N=typeof p<"u",U=N?p:pv(t.options,x);I=R(x,N,U)}else if(g){var $=typeof p<"u",F=$?p:Q2(t.options,x);I=R(x,$,F,!0)}else(function(){_=[];var X=typeof t.options.getNextPageParam>"u",Q=d&&x[0]?d(x[0],0,x):!0;I=Q?R([],X,y[0]):Promise.resolve(C([],y[0],x[0]));for(var ce=function(M){I=I.then(function(ne){var q=d&&x[M]?d(x[M],M,x):!0;if(q){var O=X?y[M]:pv(t.options,ne);return R(ne,X,O)}return Promise.resolve(C(ne,y[M],x[M]))})},Y=1;Y<x.length;Y++)ce(Y)})();var J=I.then(function(X){return{pages:X,pageParams:_}}),le=J;return le.cancel=function(){b=!0,w?.abort(),Ru(I)&&I.cancel()},J}}}}function pv(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function Q2(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}var G2=function(){function e(n){n===void 0&&(n={}),this.queryCache=n.queryCache||new W2,this.mutationCache=n.mutationCache||new q2,this.defaultOptions=n.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var t=e.prototype;return t.mount=function(){var r=this;this.unsubscribeFocus=rs.subscribe(function(){rs.isFocused()&&Zl.isOnline()&&(r.mutationCache.onFocus(),r.queryCache.onFocus())}),this.unsubscribeOnline=Zl.subscribe(function(){rs.isFocused()&&Zl.isOnline()&&(r.mutationCache.onOnline(),r.queryCache.onOnline())})},t.unmount=function(){var r,o;(r=this.unsubscribeFocus)==null||r.call(this),(o=this.unsubscribeOnline)==null||o.call(this)},t.isFetching=function(r,o){var a=Ur(r,o),l=a[0];return l.fetching=!0,this.queryCache.findAll(l).length},t.isMutating=function(r){return this.mutationCache.findAll(Ve({},r,{fetching:!0})).length},t.getQueryData=function(r,o){var a;return(a=this.queryCache.find(r,o))==null?void 0:a.state.data},t.getQueriesData=function(r){return this.getQueryCache().findAll(r).map(function(o){var a=o.queryKey,l=o.state,u=l.data;return[a,u]})},t.setQueryData=function(r,o,a){var l=Hl(r),u=this.defaultQueryOptions(l);return this.queryCache.build(this,u).setData(o,a)},t.setQueriesData=function(r,o,a){var l=this;return dt.batch(function(){return l.getQueryCache().findAll(r).map(function(u){var d=u.queryKey;return[d,l.setQueryData(d,o,a)]})})},t.getQueryState=function(r,o){var a;return(a=this.queryCache.find(r,o))==null?void 0:a.state},t.removeQueries=function(r,o){var a=Ur(r,o),l=a[0],u=this.queryCache;dt.batch(function(){u.findAll(l).forEach(function(d){u.remove(d)})})},t.resetQueries=function(r,o,a){var l=this,u=Ur(r,o,a),d=u[0],f=u[1],p=this.queryCache,m=Ve({},d,{active:!0});return dt.batch(function(){return p.findAll(d).forEach(function(g){g.reset()}),l.refetchQueries(m,f)})},t.cancelQueries=function(r,o,a){var l=this,u=Ur(r,o,a),d=u[0],f=u[1],p=f===void 0?{}:f;typeof p.revert>"u"&&(p.revert=!0);var m=dt.batch(function(){return l.queryCache.findAll(d).map(function(g){return g.cancel(p)})});return Promise.all(m).then(jt).catch(jt)},t.invalidateQueries=function(r,o,a){var l,u,d,f=this,p=Ur(r,o,a),m=p[0],g=p[1],x=Ve({},m,{active:(l=(u=m.refetchActive)!=null?u:m.active)!=null?l:!0,inactive:(d=m.refetchInactive)!=null?d:!1});return dt.batch(function(){return f.queryCache.findAll(m).forEach(function(y){y.invalidate()}),f.refetchQueries(x,g)})},t.refetchQueries=function(r,o,a){var l=this,u=Ur(r,o,a),d=u[0],f=u[1],p=dt.batch(function(){return l.queryCache.findAll(d).map(function(g){return g.fetch(void 0,Ve({},f,{meta:{refetchPage:d?.refetchPage}}))})}),m=Promise.all(p).then(jt);return f?.throwOnError||(m=m.catch(jt)),m},t.fetchQuery=function(r,o,a){var l=Hl(r,o,a),u=this.defaultQueryOptions(l);typeof u.retry>"u"&&(u.retry=!1);var d=this.queryCache.build(this,u);return d.isStaleByTime(u.staleTime)?d.fetch(u):Promise.resolve(d.state.data)},t.prefetchQuery=function(r,o,a){return this.fetchQuery(r,o,a).then(jt).catch(jt)},t.fetchInfiniteQuery=function(r,o,a){var l=Hl(r,o,a);return l.behavior=K2(),this.fetchQuery(l)},t.prefetchInfiniteQuery=function(r,o,a){return this.fetchInfiniteQuery(r,o,a).then(jt).catch(jt)},t.cancelMutations=function(){var r=this,o=dt.batch(function(){return r.mutationCache.getAll().map(function(a){return a.cancel()})});return Promise.all(o).then(jt).catch(jt)},t.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},t.executeMutation=function(r){return this.mutationCache.build(this,r).execute()},t.getQueryCache=function(){return this.queryCache},t.getMutationCache=function(){return this.mutationCache},t.getDefaultOptions=function(){return this.defaultOptions},t.setDefaultOptions=function(r){this.defaultOptions=r},t.setQueryDefaults=function(r,o){var a=this.queryDefaults.find(function(l){return $o(r)===$o(l.queryKey)});a?a.defaultOptions=o:this.queryDefaults.push({queryKey:r,defaultOptions:o})},t.getQueryDefaults=function(r){var o;return r?(o=this.queryDefaults.find(function(a){return Lu(r,a.queryKey)}))==null?void 0:o.defaultOptions:void 0},t.setMutationDefaults=function(r,o){var a=this.mutationDefaults.find(function(l){return $o(r)===$o(l.mutationKey)});a?a.defaultOptions=o:this.mutationDefaults.push({mutationKey:r,defaultOptions:o})},t.getMutationDefaults=function(r){var o;return r?(o=this.mutationDefaults.find(function(a){return Lu(r,a.mutationKey)}))==null?void 0:o.defaultOptions:void 0},t.defaultQueryOptions=function(r){if(r?._defaulted)return r;var o=Ve({},this.defaultOptions.queries,this.getQueryDefaults(r?.queryKey),r,{_defaulted:!0});return!o.queryHash&&o.queryKey&&(o.queryHash=lm(o.queryKey,o)),o},t.defaultQueryObserverOptions=function(r){return this.defaultQueryOptions(r)},t.defaultMutationOptions=function(r){return r?._defaulted?r:Ve({},this.defaultOptions.mutations,this.getMutationDefaults(r?.mutationKey),r,{_defaulted:!0})},t.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},e}(),J2=function(e){Ds(t,e);function t(r,o){var a;return a=e.call(this)||this,a.client=r,a.options=o,a.trackedProps=[],a.selectError=null,a.bindMethods(),a.setOptions(o),a}var n=t.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),mv(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return Th(this.currentQuery,this.options,this.options.refetchOnReconnect)},n.shouldFetchOnWindowFocus=function(){return Th(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(o,a){var l=this.options,u=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(o),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=l.queryKey),this.updateQuery();var d=this.hasListeners();d&&_v(this.currentQuery,u,this.options,l)&&this.executeFetch(),this.updateResult(a),d&&(this.currentQuery!==u||this.options.enabled!==l.enabled||this.options.staleTime!==l.staleTime)&&this.updateStaleTimeout();var f=this.computeRefetchInterval();d&&(this.currentQuery!==u||this.options.enabled!==l.enabled||f!==this.currentRefetchInterval)&&this.updateRefetchInterval(f)},n.getOptimisticResult=function(o){var a=this.client.defaultQueryObserverOptions(o),l=this.client.getQueryCache().build(this.client,a);return this.createResult(l,a)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(o,a){var l=this,u={},d=function(p){l.trackedProps.includes(p)||l.trackedProps.push(p)};return Object.keys(o).forEach(function(f){Object.defineProperty(u,f,{configurable:!1,enumerable:!0,get:function(){return d(f),o[f]}})}),(a.useErrorBoundary||a.suspense)&&d("error"),u},n.getNextResult=function(o){var a=this;return new Promise(function(l,u){var d=a.subscribe(function(f){f.isFetching||(d(),f.isError&&o?.throwOnError?u(f.error):l(f))})})},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(o){return this.fetch(Ve({},o,{meta:{refetchPage:o?.refetchPage}}))},n.fetchOptimistic=function(o){var a=this,l=this.client.defaultQueryObserverOptions(o),u=this.client.getQueryCache().build(this.client,l);return u.fetch().then(function(){return a.createResult(u,l)})},n.fetch=function(o){var a=this;return this.executeFetch(o).then(function(){return a.updateResult(),a.currentResult})},n.executeFetch=function(o){this.updateQuery();var a=this.currentQuery.fetch(this.options,o);return o?.throwOnError||(a=a.catch(jt)),a},n.updateStaleTimeout=function(){var o=this;if(this.clearStaleTimeout(),!(Eu||this.currentResult.isStale||!Oh(this.options.staleTime))){var a=iw(this.currentResult.dataUpdatedAt,this.options.staleTime),l=a+1;this.staleTimeoutId=setTimeout(function(){o.currentResult.isStale||o.updateResult()},l)}},n.computeRefetchInterval=function(){var o;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(o=this.options.refetchInterval)!=null?o:!1},n.updateRefetchInterval=function(o){var a=this;this.clearRefetchInterval(),this.currentRefetchInterval=o,!(Eu||this.options.enabled===!1||!Oh(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(a.options.refetchIntervalInBackground||rs.isFocused())&&a.executeFetch()},this.currentRefetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},n.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},n.createResult=function(o,a){var l=this.currentQuery,u=this.options,d=this.currentResult,f=this.currentResultState,p=this.currentResultOptions,m=o!==l,g=m?o.state:this.currentQueryInitialState,x=m?this.currentResult:this.previousQueryResult,y=o.state,w=y.dataUpdatedAt,P=y.error,_=y.errorUpdatedAt,b=y.isFetching,k=y.status,C=!1,R=!1,I;if(a.optimisticResults){var N=this.hasListeners(),U=!N&&mv(o,a),$=N&&_v(o,l,a,u);(U||$)&&(b=!0,w||(k="loading"))}if(a.keepPreviousData&&!y.dataUpdateCount&&x?.isSuccess&&k!=="error")I=x.data,w=x.dataUpdatedAt,k=x.status,C=!0;else if(a.select&&typeof y.data<"u")if(d&&y.data===f?.data&&a.select===this.selectFn)I=this.selectResult;else try{this.selectFn=a.select,I=a.select(y.data),a.structuralSharing!==!1&&(I=Tu(d?.data,I)),this.selectResult=I,this.selectError=null}catch(le){Au().error(le),this.selectError=le}else I=y.data;if(typeof a.placeholderData<"u"&&typeof I>"u"&&(k==="loading"||k==="idle")){var F;if(d?.isPlaceholderData&&a.placeholderData===p?.placeholderData)F=d.data;else if(F=typeof a.placeholderData=="function"?a.placeholderData():a.placeholderData,a.select&&typeof F<"u")try{F=a.select(F),a.structuralSharing!==!1&&(F=Tu(d?.data,F)),this.selectError=null}catch(le){Au().error(le),this.selectError=le}typeof F<"u"&&(k="success",I=F,R=!0)}this.selectError&&(P=this.selectError,I=this.selectResult,_=Date.now(),k="error");var J={status:k,isLoading:k==="loading",isSuccess:k==="success",isError:k==="error",isIdle:k==="idle",data:I,dataUpdatedAt:w,error:P,errorUpdatedAt:_,failureCount:y.fetchFailureCount,errorUpdateCount:y.errorUpdateCount,isFetched:y.dataUpdateCount>0||y.errorUpdateCount>0,isFetchedAfterMount:y.dataUpdateCount>g.dataUpdateCount||y.errorUpdateCount>g.errorUpdateCount,isFetching:b,isRefetching:b&&k!=="loading",isLoadingError:k==="error"&&y.dataUpdatedAt===0,isPlaceholderData:R,isPreviousData:C,isRefetchError:k==="error"&&y.dataUpdatedAt!==0,isStale:um(o,a),refetch:this.refetch,remove:this.remove};return J},n.shouldNotifyListeners=function(o,a){if(!a)return!0;var l=this.options,u=l.notifyOnChangeProps,d=l.notifyOnChangePropsExclusions;if(!u&&!d||u==="tracked"&&!this.trackedProps.length)return!0;var f=u==="tracked"?this.trackedProps:u;return Object.keys(o).some(function(p){var m=p,g=o[m]!==a[m],x=f?.some(function(w){return w===p}),y=d?.some(function(w){return w===p});return g&&!y&&(!f||x)})},n.updateResult=function(o){var a=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!I2(this.currentResult,a)){var l={cache:!0};o?.listeners!==!1&&this.shouldNotifyListeners(this.currentResult,a)&&(l.listeners=!0),this.notify(Ve({},l,o))}},n.updateQuery=function(){var o=this.client.getQueryCache().build(this.client,this.options);if(o!==this.currentQuery){var a=this.currentQuery;this.currentQuery=o,this.currentQueryInitialState=o.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(a?.removeObserver(this),o.addObserver(this))}},n.onQueryUpdate=function(o){var a={};o.type==="success"?a.onSuccess=!0:o.type==="error"&&!Vl(o.error)&&(a.onError=!0),this.updateResult(a),this.hasListeners()&&this.updateTimers()},n.notify=function(o){var a=this;dt.batch(function(){o.onSuccess?(a.options.onSuccess==null||a.options.onSuccess(a.currentResult.data),a.options.onSettled==null||a.options.onSettled(a.currentResult.data,null)):o.onError&&(a.options.onError==null||a.options.onError(a.currentResult.error),a.options.onSettled==null||a.options.onSettled(void 0,a.currentResult.error)),o.listeners&&a.listeners.forEach(function(l){l(a.currentResult)}),o.cache&&a.client.getQueryCache().notify({query:a.currentQuery,type:"observerResultsUpdated"})})},t}(js);function Y2(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function mv(e,t){return Y2(e,t)||e.state.dataUpdatedAt>0&&Th(e,t,t.refetchOnMount)}function Th(e,t,n){if(t.enabled!==!1){var r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&um(e,t)}return!1}function _v(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&um(e,n)}function um(e,t){return e.isStaleByTime(t.staleTime)}var X2=pC.unstable_batchedUpdates;dt.setBatchNotifyFunction(X2);var eO=console;U2(eO);var gv=D.createContext(void 0),dw=D.createContext(!1);function fw(e){return e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=gv),window.ReactQueryClientContext):gv}var tO=function(){var t=D.useContext(fw(D.useContext(dw)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},nO=function(t){var n=t.client,r=t.contextSharing,o=r===void 0?!1:r,a=t.children;D.useEffect(function(){return n.mount(),function(){n.unmount()}},[n]);var l=fw(o);return D.createElement(dw.Provider,{value:o},D.createElement(l.Provider,{value:n},a))};function rO(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var oO=D.createContext(rO()),iO=function(){return D.useContext(oO)};function aO(e,t,n){return typeof t=="function"?t.apply(void 0,n):typeof t=="boolean"?t:!!e}function sO(e,t){var n=D.useRef(!1),r=D.useState(0),o=r[1],a=tO(),l=iO(),u=a.defaultQueryObserverOptions(e);u.optimisticResults=!0,u.onError&&(u.onError=dt.batchCalls(u.onError)),u.onSuccess&&(u.onSuccess=dt.batchCalls(u.onSuccess)),u.onSettled&&(u.onSettled=dt.batchCalls(u.onSettled)),u.suspense&&(typeof u.staleTime!="number"&&(u.staleTime=1e3),u.cacheTime===0&&(u.cacheTime=1)),(u.suspense||u.useErrorBoundary)&&(l.isReset()||(u.retryOnMount=!1));var d=D.useState(function(){return new t(a,u)}),f=d[0],p=f.getOptimisticResult(u);if(D.useEffect(function(){n.current=!0,l.clearReset();var m=f.subscribe(dt.batchCalls(function(){n.current&&o(function(g){return g+1})}));return f.updateResult(),function(){n.current=!1,m()}},[l,f]),D.useEffect(function(){f.setOptions(u,{listeners:!1})},[u,f]),u.suspense&&p.isLoading)throw f.fetchOptimistic(u).then(function(m){var g=m.data;u.onSuccess==null||u.onSuccess(g),u.onSettled==null||u.onSettled(g,null)}).catch(function(m){l.clearReset(),u.onError==null||u.onError(m),u.onSettled==null||u.onSettled(void 0,m)});if(p.isError&&!l.isReset()&&!p.isFetching&&aO(u.suspense,u.useErrorBoundary,[p.error,f.getCurrentQuery()]))throw p.error;return u.notifyOnChangeProps==="tracked"&&(p=f.trackResult(p,u)),p}function lO(e,t,n){var r=Hl(e,t,n);return sO(r,J2)}function oo(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Mc(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Cu(e,t)}function Fs(e,t){if(t&&(an(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return oo(e)}function ar(e){return ar=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},ar(e)}function uO(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function cO(e){return nw(e)||uO(e)||rw(e)||ow()}function vv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function yv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vv(Object(n),!0).forEach(function(r){jn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var dO={type:"logger",log:function(t){this.output("log",t)},warn:function(t){this.output("warn",t)},error:function(t){this.output("error",t)},output:function(t,n){console&&console[t]&&console[t].apply(console,n)}},fO=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Fn(this,e),this.init(t,n)}return Un(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=r.prefix||"i18next:",this.logger=n||dO,this.options=r,this.debug=r.debug}},{key:"setDebug",value:function(n){this.debug=n}},{key:"log",value:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return this.forward(r,"log","",!0)}},{key:"warn",value:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return this.forward(r,"warn","",!0)}},{key:"error",value:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return this.forward(r,"error","")}},{key:"deprecate",value:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return this.forward(r,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(n,r,o,a){return a&&!this.debug?null:(typeof n[0]=="string"&&(n[0]="".concat(o).concat(this.prefix," ").concat(n[0])),this.logger[r](n))}},{key:"create",value:function(n){return new e(this.logger,yv(yv({},{prefix:"".concat(this.prefix,":").concat(n,":")}),this.options))}},{key:"clone",value:function(n){return n=n||this.options,n.prefix=n.prefix||this.prefix,new e(this.logger,n)}}]),e}(),Xn=new fO,mo=function(){function e(){Fn(this,e),this.observers={}}return Un(e,[{key:"on",value:function(n,r){var o=this;return n.split(" ").forEach(function(a){o.observers[a]=o.observers[a]||[],o.observers[a].push(r)}),this}},{key:"off",value:function(n,r){if(this.observers[n]){if(!r){delete this.observers[n];return}this.observers[n]=this.observers[n].filter(function(o){return o!==r})}}},{key:"emit",value:function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];if(this.observers[n]){var l=[].concat(this.observers[n]);l.forEach(function(d){d.apply(void 0,o)})}if(this.observers["*"]){var u=[].concat(this.observers["*"]);u.forEach(function(d){d.apply(d,[n].concat(o))})}}}]),e}();function ja(){var e,t,n=new Promise(function(r,o){e=r,t=o});return n.resolve=e,n.reject=t,n}function bv(e){return e==null?"":""+e}function hO(e,t,n){e.forEach(function(r){t[r]&&(n[r]=t[r])})}function cm(e,t,n){function r(u){return u&&u.indexOf("###")>-1?u.replace(/###/g,"."):u}function o(){return!e||typeof e=="string"}for(var a=typeof t!="string"?[].concat(t):t.split(".");a.length>1;){if(o())return{};var l=r(a.shift());!e[l]&&n&&(e[l]=new n),Object.prototype.hasOwnProperty.call(e,l)?e=e[l]:e={}}return o()?{}:{obj:e,k:r(a.shift())}}function xv(e,t,n){var r=cm(e,t,Object),o=r.obj,a=r.k;o[a]=n}function pO(e,t,n,r){var o=cm(e,t,Object),a=o.obj,l=o.k;a[l]=a[l]||[],r&&(a[l]=a[l].concat(n)),r||a[l].push(n)}function zu(e,t){var n=cm(e,t),r=n.obj,o=n.k;if(r)return r[o]}function mO(e,t,n){var r=zu(e,n);return r!==void 0?r:zu(t,n)}function hw(e,t,n){for(var r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):hw(e[r],t[r],n):e[r]=t[r]);return e}function vi(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var _O={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function gO(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,function(t){return _O[t]}):e}var Dc=typeof window<"u"&&window.navigator&&typeof window.navigator.userAgentData>"u"&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,vO=[" ",",","?","!",";"];function yO(e,t,n){t=t||"",n=n||"";var r=vO.filter(function(u){return t.indexOf(u)<0&&n.indexOf(u)<0});if(r.length===0)return!0;var o=new RegExp("(".concat(r.map(function(u){return u==="?"?"\\?":u}).join("|"),")")),a=!o.test(e);if(!a){var l=e.indexOf(n);l>0&&!o.test(e.substring(0,l))&&(a=!0)}return a}function Nu(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(e){if(e[t])return e[t];for(var r=t.split(n),o=e,a=0;a<r.length;++a){if(!o||typeof o[r[a]]=="string"&&a+1<r.length)return;if(o[r[a]]===void 0){for(var l=2,u=r.slice(a,a+l).join(n),d=o[u];d===void 0&&r.length>a+l;)l++,u=r.slice(a,a+l).join(n),d=o[u];if(d===void 0)return;if(d===null)return null;if(t.endsWith(u)){if(typeof d=="string")return d;if(u&&typeof d[u]=="string")return d[u]}var f=r.slice(a+l).join(n);return f?Nu(d,f,n):void 0}o=o[r[a]]}return o}}function wv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Cl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wv(Object(n),!0).forEach(function(r){jn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function bO(e){var t=xO();return function(){var r=ar(e),o;if(t){var a=ar(this).constructor;o=Reflect.construct(r,arguments,a)}else o=r.apply(this,arguments);return Fs(this,o)}}function xO(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var wO=function(e){Mc(n,e);var t=bO(n);function n(r){var o,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};return Fn(this,n),o=t.call(this),Dc&&mo.call(oo(o)),o.data=r||{},o.options=a,o.options.keySeparator===void 0&&(o.options.keySeparator="."),o.options.ignoreJSONStructure===void 0&&(o.options.ignoreJSONStructure=!0),o}return Un(n,[{key:"addNamespaces",value:function(o){this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}},{key:"removeNamespaces",value:function(o){var a=this.options.ns.indexOf(o);a>-1&&this.options.ns.splice(a,1)}},{key:"getResource",value:function(o,a,l){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},d=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator,f=u.ignoreJSONStructure!==void 0?u.ignoreJSONStructure:this.options.ignoreJSONStructure,p=[o,a];l&&typeof l!="string"&&(p=p.concat(l)),l&&typeof l=="string"&&(p=p.concat(d?l.split(d):l)),o.indexOf(".")>-1&&(p=o.split("."));var m=zu(this.data,p);return m||!f||typeof l!="string"?m:Nu(this.data&&this.data[o]&&this.data[o][a],l,d)}},{key:"addResource",value:function(o,a,l,u){var d=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1},f=this.options.keySeparator;f===void 0&&(f=".");var p=[o,a];l&&(p=p.concat(f?l.split(f):l)),o.indexOf(".")>-1&&(p=o.split("."),u=a,a=p[1]),this.addNamespaces(a),xv(this.data,p,u),d.silent||this.emit("added",o,a,l,u)}},{key:"addResources",value:function(o,a,l){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(var d in l)(typeof l[d]=="string"||Object.prototype.toString.apply(l[d])==="[object Array]")&&this.addResource(o,a,d,l[d],{silent:!0});u.silent||this.emit("added",o,a,l)}},{key:"addResourceBundle",value:function(o,a,l,u,d){var f=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},p=[o,a];o.indexOf(".")>-1&&(p=o.split("."),u=l,l=a,a=p[1]),this.addNamespaces(a);var m=zu(this.data,p)||{};u?hw(m,l,d):m=Cl(Cl({},m),l),xv(this.data,p,m),f.silent||this.emit("added",o,a,l)}},{key:"removeResourceBundle",value:function(o,a){this.hasResourceBundle(o,a)&&delete this.data[o][a],this.removeNamespaces(a),this.emit("removed",o,a)}},{key:"hasResourceBundle",value:function(o,a){return this.getResource(o,a)!==void 0}},{key:"getResourceBundle",value:function(o,a){return a||(a=this.options.defaultNS),this.options.compatibilityAPI==="v1"?Cl(Cl({},{}),this.getResource(o,a)):this.getResource(o,a)}},{key:"getDataByLanguage",value:function(o){return this.data[o]}},{key:"hasLanguageSomeTranslations",value:function(o){var a=this.getDataByLanguage(o),l=a&&Object.keys(a)||[];return!!l.find(function(u){return a[u]&&Object.keys(a[u]).length>0})}},{key:"toJSON",value:function(){return this.data}}]),n}(mo),pw={processors:{},addPostProcessor:function(t){this.processors[t.name]=t},handle:function(t,n,r,o,a){var l=this;return t.forEach(function(u){l.processors[u]&&(n=l.processors[u].process(n,r,o,a))}),n}};function kv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Mt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kv(Object(n),!0).forEach(function(r){jn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function kO(e){var t=SO();return function(){var r=ar(e),o;if(t){var a=ar(this).constructor;o=Reflect.construct(r,arguments,a)}else o=r.apply(this,arguments);return Fs(this,o)}}function SO(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Sv={},Pv=function(e){Mc(n,e);var t=kO(n);function n(r){var o,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Fn(this,n),o=t.call(this),Dc&&mo.call(oo(o)),hO(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r,oo(o)),o.options=a,o.options.keySeparator===void 0&&(o.options.keySeparator="."),o.logger=Xn.create("translator"),o}return Un(n,[{key:"changeLanguage",value:function(o){o&&(this.language=o)}},{key:"exists",value:function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(o==null)return!1;var l=this.resolve(o,a);return l&&l.res!==void 0}},{key:"extractFromKey",value:function(o,a){var l=a.nsSeparator!==void 0?a.nsSeparator:this.options.nsSeparator;l===void 0&&(l=":");var u=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,d=a.ns||this.options.defaultNS||[],f=l&&o.indexOf(l)>-1,p=!this.options.userDefinedKeySeparator&&!a.keySeparator&&!this.options.userDefinedNsSeparator&&!a.nsSeparator&&!yO(o,l,u);if(f&&!p){var m=o.match(this.interpolator.nestingRegexp);if(m&&m.length>0)return{key:o,namespaces:d};var g=o.split(l);(l!==u||l===u&&this.options.ns.indexOf(g[0])>-1)&&(d=g.shift()),o=g.join(u)}return typeof d=="string"&&(d=[d]),{key:o,namespaces:d}}},{key:"translate",value:function(o,a,l){var u=this;if(an(a)!=="object"&&this.options.overloadTranslationOptionHandler&&(a=this.options.overloadTranslationOptionHandler(arguments)),an(a)==="object"&&(a=Mt({},a)),a||(a={}),o==null)return"";Array.isArray(o)||(o=[String(o)]);var d=a.returnDetails!==void 0?a.returnDetails:this.options.returnDetails,f=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,p=this.extractFromKey(o[o.length-1],a),m=p.key,g=p.namespaces,x=g[g.length-1],y=a.lng||this.language,w=a.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(y&&y.toLowerCase()==="cimode"){if(w){var P=a.nsSeparator||this.options.nsSeparator;return d?{res:"".concat(x).concat(P).concat(m),usedKey:m,exactUsedKey:m,usedLng:y,usedNS:x}:"".concat(x).concat(P).concat(m)}return d?{res:m,usedKey:m,exactUsedKey:m,usedLng:y,usedNS:x}:m}var _=this.resolve(o,a),b=_&&_.res,k=_&&_.usedKey||m,C=_&&_.exactUsedKey||m,R=Object.prototype.toString.apply(b),I=["[object Number]","[object Function]","[object RegExp]"],N=a.joinArrays!==void 0?a.joinArrays:this.options.joinArrays,U=!this.i18nFormat||this.i18nFormat.handleAsObject,$=typeof b!="string"&&typeof b!="boolean"&&typeof b!="number";if(U&&b&&$&&I.indexOf(R)<0&&!(typeof N=="string"&&R==="[object Array]")){if(!a.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var F=this.options.returnedObjectHandler?this.options.returnedObjectHandler(k,b,Mt(Mt({},a),{},{ns:g})):"key '".concat(m," (").concat(this.language,")' returned an object instead of string.");return d?(_.res=F,_):F}if(f){var J=R==="[object Array]",le=J?[]:{},X=J?C:k;for(var Q in b)if(Object.prototype.hasOwnProperty.call(b,Q)){var ce="".concat(X).concat(f).concat(Q);le[Q]=this.translate(ce,Mt(Mt({},a),{joinArrays:!1,ns:g})),le[Q]===ce&&(le[Q]=b[Q])}b=le}}else if(U&&typeof N=="string"&&R==="[object Array]")b=b.join(N),b&&(b=this.extendTranslation(b,o,a,l));else{var Y=!1,B=!1,M=a.count!==void 0&&typeof a.count!="string",ne=n.hasDefaultValue(a),q=M?this.pluralResolver.getSuffix(y,a.count,a):"",O=a["defaultValue".concat(q)]||a.defaultValue;!this.isValidLookup(b)&&ne&&(Y=!0,b=O),this.isValidLookup(b)||(B=!0,b=m);var A=a.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey,z=A&&B?void 0:b,Z=ne&&O!==b&&this.options.updateMissing;if(B||Y||Z){if(this.logger.log(Z?"updateKey":"missingKey",y,x,m,Z?O:b),f){var re=this.resolve(m,Mt(Mt({},a),{},{keySeparator:!1}));re&&re.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var ue=[],de=this.languageUtils.getFallbackCodes(this.options.fallbackLng,a.lng||this.language);if(this.options.saveMissingTo==="fallback"&&de&&de[0])for(var be=0;be<de.length;be++)ue.push(de[be]);else this.options.saveMissingTo==="all"?ue=this.languageUtils.toResolveHierarchy(a.lng||this.language):ue.push(a.lng||this.language);var Je=function($e,Le,tt){var oe=ne&&tt!==b?tt:z;u.options.missingKeyHandler?u.options.missingKeyHandler($e,x,Le,oe,Z,a):u.backendConnector&&u.backendConnector.saveMissing&&u.backendConnector.saveMissing($e,x,Le,oe,Z,a),u.emit("missingKey",$e,x,Le,b)};this.options.saveMissing&&(this.options.saveMissingPlurals&&M?ue.forEach(function(et){u.pluralResolver.getSuffixes(et,a).forEach(function($e){Je([et],m+$e,a["defaultValue".concat($e)]||O)})}):Je(ue,m,O))}b=this.extendTranslation(b,o,a,_,l),B&&b===m&&this.options.appendNamespaceToMissingKey&&(b="".concat(x,":").concat(m)),(B||Y)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?b=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(x,":").concat(m):m,Y?b:void 0):b=this.options.parseMissingKeyHandler(b))}return d?(_.res=b,_):b}},{key:"extendTranslation",value:function(o,a,l,u,d){var f=this;if(this.i18nFormat&&this.i18nFormat.parse)o=this.i18nFormat.parse(o,Mt(Mt({},this.options.interpolation.defaultVariables),l),u.usedLng,u.usedNS,u.usedKey,{resolved:u});else if(!l.skipInterpolation){l.interpolation&&this.interpolator.init(Mt(Mt({},l),{interpolation:Mt(Mt({},this.options.interpolation),l.interpolation)}));var p=typeof o=="string"&&(l&&l.interpolation&&l.interpolation.skipOnVariables!==void 0?l.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables),m;if(p){var g=o.match(this.interpolator.nestingRegexp);m=g&&g.length}var x=l.replace&&typeof l.replace!="string"?l.replace:l;if(this.options.interpolation.defaultVariables&&(x=Mt(Mt({},this.options.interpolation.defaultVariables),x)),o=this.interpolator.interpolate(o,x,l.lng||this.language,l),p){var y=o.match(this.interpolator.nestingRegexp),w=y&&y.length;m<w&&(l.nest=!1)}!l.lng&&this.options.compatibilityAPI!=="v1"&&u&&u.res&&(l.lng=u.usedLng),l.nest!==!1&&(o=this.interpolator.nest(o,function(){for(var b=arguments.length,k=new Array(b),C=0;C<b;C++)k[C]=arguments[C];return d&&d[0]===k[0]&&!l.context?(f.logger.warn("It seems you are nesting recursively key: ".concat(k[0]," in key: ").concat(a[0])),null):f.translate.apply(f,k.concat([a]))},l)),l.interpolation&&this.interpolator.reset()}var P=l.postProcess||this.options.postProcess,_=typeof P=="string"?[P]:P;return o!=null&&_&&_.length&&l.applyPostProcessor!==!1&&(o=pw.handle(_,o,a,this.options&&this.options.postProcessPassResolved?Mt({i18nResolved:u},l):l,this)),o}},{key:"resolve",value:function(o){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u,d,f,p,m;return typeof o=="string"&&(o=[o]),o.forEach(function(g){if(!a.isValidLookup(u)){var x=a.extractFromKey(g,l),y=x.key;d=y;var w=x.namespaces;a.options.fallbackNS&&(w=w.concat(a.options.fallbackNS));var P=l.count!==void 0&&typeof l.count!="string",_=P&&!l.ordinal&&l.count===0&&a.pluralResolver.shouldUseIntlApi(),b=l.context!==void 0&&(typeof l.context=="string"||typeof l.context=="number")&&l.context!=="",k=l.lngs?l.lngs:a.languageUtils.toResolveHierarchy(l.lng||a.language,l.fallbackLng);w.forEach(function(C){a.isValidLookup(u)||(m=C,!Sv["".concat(k[0],"-").concat(C)]&&a.utils&&a.utils.hasLoadedNamespace&&!a.utils.hasLoadedNamespace(m)&&(Sv["".concat(k[0],"-").concat(C)]=!0,a.logger.warn('key "'.concat(d,'" for languages "').concat(k.join(", "),`" won't get resolved as namespace "`).concat(m,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),k.forEach(function(R){if(!a.isValidLookup(u)){p=R;var I=[y];if(a.i18nFormat&&a.i18nFormat.addLookupKeys)a.i18nFormat.addLookupKeys(I,y,R,C,l);else{var N;P&&(N=a.pluralResolver.getSuffix(R,l.count,l));var U="".concat(a.options.pluralSeparator,"zero");if(P&&(I.push(y+N),_&&I.push(y+U)),b){var $="".concat(y).concat(a.options.contextSeparator).concat(l.context);I.push($),P&&(I.push($+N),_&&I.push($+U))}}for(var F;F=I.pop();)a.isValidLookup(u)||(f=F,u=a.getResource(R,C,F,l))}}))})}}),{res:u,usedKey:d,exactUsedKey:f,usedLng:p,usedNS:m}}},{key:"isValidLookup",value:function(o){return o!==void 0&&!(!this.options.returnNull&&o===null)&&!(!this.options.returnEmptyString&&o==="")}},{key:"getResource",value:function(o,a,l){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(o,a,l,u):this.resourceStore.getResource(o,a,l,u)}}],[{key:"hasDefaultValue",value:function(o){var a="defaultValue";for(var l in o)if(Object.prototype.hasOwnProperty.call(o,l)&&a===l.substring(0,a.length)&&o[l]!==void 0)return!0;return!1}}]),n}(mo);function Qd(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Cv=function(){function e(t){Fn(this,e),this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Xn.create("languageUtils")}return Un(e,[{key:"getScriptPartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return null;var r=n.split("-");return r.length===2||(r.pop(),r[r.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(r.join("-"))}},{key:"getLanguagePartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return n;var r=n.split("-");return this.formatLanguageCode(r[0])}},{key:"formatLanguageCode",value:function(n){if(typeof n=="string"&&n.indexOf("-")>-1){var r=["hans","hant","latn","cyrl","cans","mong","arab"],o=n.split("-");return this.options.lowerCaseLng?o=o.map(function(a){return a.toLowerCase()}):o.length===2?(o[0]=o[0].toLowerCase(),o[1]=o[1].toUpperCase(),r.indexOf(o[1].toLowerCase())>-1&&(o[1]=Qd(o[1].toLowerCase()))):o.length===3&&(o[0]=o[0].toLowerCase(),o[1].length===2&&(o[1]=o[1].toUpperCase()),o[0]!=="sgn"&&o[2].length===2&&(o[2]=o[2].toUpperCase()),r.indexOf(o[1].toLowerCase())>-1&&(o[1]=Qd(o[1].toLowerCase())),r.indexOf(o[2].toLowerCase())>-1&&(o[2]=Qd(o[2].toLowerCase()))),o.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?n.toLowerCase():n}},{key:"isSupportedCode",value:function(n){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(n=this.getLanguagePartFromCode(n)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(n)>-1}},{key:"getBestMatchFromCodes",value:function(n){var r=this;if(!n)return null;var o;return n.forEach(function(a){if(!o){var l=r.formatLanguageCode(a);(!r.options.supportedLngs||r.isSupportedCode(l))&&(o=l)}}),!o&&this.options.supportedLngs&&n.forEach(function(a){if(!o){var l=r.getLanguagePartFromCode(a);if(r.isSupportedCode(l))return o=l;o=r.options.supportedLngs.find(function(u){if(u===l)return u;if(!(u.indexOf("-")<0&&l.indexOf("-")<0)&&u.indexOf(l)===0)return u})}}),o||(o=this.getFallbackCodes(this.options.fallbackLng)[0]),o}},{key:"getFallbackCodes",value:function(n,r){if(!n)return[];if(typeof n=="function"&&(n=n(r)),typeof n=="string"&&(n=[n]),Object.prototype.toString.apply(n)==="[object Array]")return n;if(!r)return n.default||[];var o=n[r];return o||(o=n[this.getScriptPartFromCode(r)]),o||(o=n[this.formatLanguageCode(r)]),o||(o=n[this.getLanguagePartFromCode(r)]),o||(o=n.default),o||[]}},{key:"toResolveHierarchy",value:function(n,r){var o=this,a=this.getFallbackCodes(r||this.options.fallbackLng||[],n),l=[],u=function(f){f&&(o.isSupportedCode(f)?l.push(f):o.logger.warn("rejecting language code not found in supportedLngs: ".concat(f)))};return typeof n=="string"&&n.indexOf("-")>-1?(this.options.load!=="languageOnly"&&u(this.formatLanguageCode(n)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&u(this.getScriptPartFromCode(n)),this.options.load!=="currentOnly"&&u(this.getLanguagePartFromCode(n))):typeof n=="string"&&u(this.formatLanguageCode(n)),a.forEach(function(d){l.indexOf(d)<0&&u(o.formatLanguageCode(d))}),l}}]),e}(),PO=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],CO={1:function(t){return+(t>1)},2:function(t){return+(t!=1)},3:function(t){return 0},4:function(t){return t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2},5:function(t){return t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5},6:function(t){return t==1?0:t>=2&&t<=4?1:2},7:function(t){return t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2},8:function(t){return t==1?0:t==2?1:t!=8&&t!=11?2:3},9:function(t){return+(t>=2)},10:function(t){return t==1?0:t==2?1:t<7?2:t<11?3:4},11:function(t){return t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3},12:function(t){return+(t%10!=1||t%100==11)},13:function(t){return+(t!==0)},14:function(t){return t==1?0:t==2?1:t==3?2:3},15:function(t){return t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2},16:function(t){return t%10==1&&t%100!=11?0:t!==0?1:2},17:function(t){return t==1||t%10==1&&t%100!=11?0:1},18:function(t){return t==0?0:t==1?1:2},19:function(t){return t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3},20:function(t){return t==1?0:t==0||t%100>0&&t%100<20?1:2},21:function(t){return t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0},22:function(t){return t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3}},EO=["v1","v2","v3"],Ev={zero:0,one:1,two:2,few:3,many:4,other:5};function OO(){var e={};return PO.forEach(function(t){t.lngs.forEach(function(n){e[n]={numbers:t.nr,plurals:CO[t.fc]}})}),e}var LO=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Fn(this,e),this.languageUtils=t,this.options=n,this.logger=Xn.create("pluralResolver"),(!this.options.compatibilityJSON||this.options.compatibilityJSON==="v4")&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=OO()}return Un(e,[{key:"addRule",value:function(n,r){this.rules[n]=r}},{key:"getRule",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(n,{type:r.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[n]||this.rules[this.languageUtils.getLanguagePartFromCode(n)]}},{key:"needsPlural",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=this.getRule(n,r);return this.shouldUseIntlApi()?o&&o.resolvedOptions().pluralCategories.length>1:o&&o.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(n,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(n,o).map(function(a){return"".concat(r).concat(a)})}},{key:"getSuffixes",value:function(n){var r=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(n,o);return a?this.shouldUseIntlApi()?a.resolvedOptions().pluralCategories.sort(function(l,u){return Ev[l]-Ev[u]}).map(function(l){return"".concat(r.options.prepend).concat(l)}):a.numbers.map(function(l){return r.getSuffix(n,l,o)}):[]}},{key:"getSuffix",value:function(n,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=this.getRule(n,o);return a?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(a.select(r)):this.getSuffixRetroCompatible(a,r):(this.logger.warn("no plural rule found for: ".concat(n)),"")}},{key:"getSuffixRetroCompatible",value:function(n,r){var o=this,a=n.noAbs?n.plurals(r):n.plurals(Math.abs(r)),l=n.numbers[a];this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1&&(l===2?l="plural":l===1&&(l=""));var u=function(){return o.options.prepend&&l.toString()?o.options.prepend+l.toString():l.toString()};return this.options.compatibilityJSON==="v1"?l===1?"":typeof l=="number"?"_plural_".concat(l.toString()):u():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1?u():this.options.prepend&&a.toString()?this.options.prepend+a.toString():a.toString()}},{key:"shouldUseIntlApi",value:function(){return!EO.includes(this.options.compatibilityJSON)}}]),e}();function Ov(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function En(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ov(Object(n),!0).forEach(function(r){jn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ov(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Lv(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,a=mO(e,t,n);return!a&&o&&typeof n=="string"&&(a=Nu(e,n,r),a===void 0&&(a=Nu(t,n,r))),a}var TO=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Fn(this,e),this.logger=Xn.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(n){return n},this.init(t)}return Un(e,[{key:"init",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};n.interpolation||(n.interpolation={escapeValue:!0});var r=n.interpolation;this.escape=r.escape!==void 0?r.escape:gO,this.escapeValue=r.escapeValue!==void 0?r.escapeValue:!0,this.useRawValueToEscape=r.useRawValueToEscape!==void 0?r.useRawValueToEscape:!1,this.prefix=r.prefix?vi(r.prefix):r.prefixEscaped||"{{",this.suffix=r.suffix?vi(r.suffix):r.suffixEscaped||"}}",this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||",",this.unescapePrefix=r.unescapeSuffix?"":r.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":r.unescapeSuffix||"",this.nestingPrefix=r.nestingPrefix?vi(r.nestingPrefix):r.nestingPrefixEscaped||vi("$t("),this.nestingSuffix=r.nestingSuffix?vi(r.nestingSuffix):r.nestingSuffixEscaped||vi(")"),this.nestingOptionsSeparator=r.nestingOptionsSeparator?r.nestingOptionsSeparator:r.nestingOptionsSeparator||",",this.maxReplaces=r.maxReplaces?r.maxReplaces:1e3,this.alwaysFormat=r.alwaysFormat!==void 0?r.alwaysFormat:!1,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var n="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(n,"g");var r="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(r,"g");var o="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(o,"g")}},{key:"interpolate",value:function(n,r,o,a){var l=this,u,d,f,p=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function m(P){return P.replace(/\$/g,"$$$$")}var g=function(_){if(_.indexOf(l.formatSeparator)<0){var b=Lv(r,p,_,l.options.keySeparator,l.options.ignoreJSONStructure);return l.alwaysFormat?l.format(b,void 0,o,En(En(En({},a),r),{},{interpolationkey:_})):b}var k=_.split(l.formatSeparator),C=k.shift().trim(),R=k.join(l.formatSeparator).trim();return l.format(Lv(r,p,C,l.options.keySeparator,l.options.ignoreJSONStructure),R,o,En(En(En({},a),r),{},{interpolationkey:C}))};this.resetRegExp();var x=a&&a.missingInterpolationHandler||this.options.missingInterpolationHandler,y=a&&a.interpolation&&a.interpolation.skipOnVariables!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables,w=[{regex:this.regexpUnescape,safeValue:function(_){return m(_)}},{regex:this.regexp,safeValue:function(_){return l.escapeValue?m(l.escape(_)):m(_)}}];return w.forEach(function(P){for(f=0;u=P.regex.exec(n);){var _=u[1].trim();if(d=g(_),d===void 0)if(typeof x=="function"){var b=x(n,u,a);d=typeof b=="string"?b:""}else if(a&&Object.prototype.hasOwnProperty.call(a,_))d="";else if(y){d=u[0];continue}else l.logger.warn("missed to pass in variable ".concat(_," for interpolating ").concat(n)),d="";else typeof d!="string"&&!l.useRawValueToEscape&&(d=bv(d));var k=P.safeValue(d);if(n=n.replace(u[0],k),y?(P.regex.lastIndex+=d.length,P.regex.lastIndex-=u[0].length):P.regex.lastIndex=0,f++,f>=l.maxReplaces)break}}),n}},{key:"nest",value:function(n,r){var o=this,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l,u,d;function f(x,y){var w=this.nestingOptionsSeparator;if(x.indexOf(w)<0)return x;var P=x.split(new RegExp("".concat(w,"[ ]*{"))),_="{".concat(P[1]);x=P[0],_=this.interpolate(_,d);var b=_.match(/'/g),k=_.match(/"/g);(b&&b.length%2===0&&!k||k.length%2!==0)&&(_=_.replace(/'/g,'"'));try{d=JSON.parse(_),y&&(d=En(En({},y),d))}catch(C){return this.logger.warn("failed parsing options string in nesting for key ".concat(x),C),"".concat(x).concat(w).concat(_)}return delete d.defaultValue,x}for(;l=this.nestingRegexp.exec(n);){var p=[];d=En({},a),d=d.replace&&typeof d.replace!="string"?d.replace:d,d.applyPostProcessor=!1,delete d.defaultValue;var m=!1;if(l[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(l[1])){var g=l[1].split(this.formatSeparator).map(function(x){return x.trim()});l[1]=g.shift(),p=g,m=!0}if(u=r(f.call(this,l[1].trim(),d),d),u&&l[0]===n&&typeof u!="string")return u;typeof u!="string"&&(u=bv(u)),u||(this.logger.warn("missed to resolve ".concat(l[1]," for nesting ").concat(n)),u=""),m&&(u=p.reduce(function(x,y){return o.format(x,y,a.lng,En(En({},a),{},{interpolationkey:l[1].trim()}))},u.trim())),n=n.replace(l[0],u),this.regexp.lastIndex=0}return n}}]),e}();function Tv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function pr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tv(Object(n),!0).forEach(function(r){jn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function RO(e){var t=e.toLowerCase().trim(),n={};if(e.indexOf("(")>-1){var r=e.split("(");t=r[0].toLowerCase().trim();var o=r[1].substring(0,r[1].length-1);if(t==="currency"&&o.indexOf(":")<0)n.currency||(n.currency=o.trim());else if(t==="relativetime"&&o.indexOf(":")<0)n.range||(n.range=o.trim());else{var a=o.split(";");a.forEach(function(l){if(l){var u=l.split(":"),d=cO(u),f=d[0],p=d.slice(1),m=p.join(":").trim().replace(/^'+|'+$/g,"");n[f.trim()]||(n[f.trim()]=m),m==="false"&&(n[f.trim()]=!1),m==="true"&&(n[f.trim()]=!0),isNaN(m)||(n[f.trim()]=parseInt(m,10))}})}}return{formatName:t,formatOptions:n}}function yi(e){var t={};return function(r,o,a){var l=o+JSON.stringify(a),u=t[l];return u||(u=e(o,a),t[l]=u),u(r)}}var AO=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Fn(this,e),this.logger=Xn.create("formatter"),this.options=t,this.formats={number:yi(function(n,r){var o=new Intl.NumberFormat(n,pr({},r));return function(a){return o.format(a)}}),currency:yi(function(n,r){var o=new Intl.NumberFormat(n,pr(pr({},r),{},{style:"currency"}));return function(a){return o.format(a)}}),datetime:yi(function(n,r){var o=new Intl.DateTimeFormat(n,pr({},r));return function(a){return o.format(a)}}),relativetime:yi(function(n,r){var o=new Intl.RelativeTimeFormat(n,pr({},r));return function(a){return o.format(a,r.range||"day")}}),list:yi(function(n,r){var o=new Intl.ListFormat(n,pr({},r));return function(a){return o.format(a)}})},this.init(t)}return Un(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}},o=r.interpolation;this.formatSeparator=o.formatSeparator?o.formatSeparator:o.formatSeparator||","}},{key:"add",value:function(n,r){this.formats[n.toLowerCase().trim()]=r}},{key:"addCached",value:function(n,r){this.formats[n.toLowerCase().trim()]=yi(r)}},{key:"format",value:function(n,r,o){var a=this,l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},u=r.split(this.formatSeparator),d=u.reduce(function(f,p){var m=RO(p),g=m.formatName,x=m.formatOptions;if(a.formats[g]){var y=f;try{var w=l&&l.formatParams&&l.formatParams[l.interpolationkey]||{},P=w.locale||w.lng||l.locale||l.lng||o;y=a.formats[g](f,P,pr(pr(pr({},x),l),w))}catch(_){a.logger.warn(_)}return y}else a.logger.warn("there was no format function for ".concat(g));return f},n);return d}}]),e}();function Rv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Av(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Rv(Object(n),!0).forEach(function(r){jn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Rv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zO(e){var t=NO();return function(){var r=ar(e),o;if(t){var a=ar(this).constructor;o=Reflect.construct(r,arguments,a)}else o=r.apply(this,arguments);return Fs(this,o)}}function NO(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function IO(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}var BO=function(e){Mc(n,e);var t=zO(n);function n(r,o,a){var l,u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return Fn(this,n),l=t.call(this),Dc&&mo.call(oo(l)),l.backend=r,l.store=o,l.services=a,l.languageUtils=a.languageUtils,l.options=u,l.logger=Xn.create("backendConnector"),l.waitingReads=[],l.maxParallelReads=u.maxParallelReads||10,l.readingCalls=0,l.maxRetries=u.maxRetries>=0?u.maxRetries:5,l.retryTimeout=u.retryTimeout>=1?u.retryTimeout:350,l.state={},l.queue=[],l.backend&&l.backend.init&&l.backend.init(a,u.backend,u),l}return Un(n,[{key:"queueLoad",value:function(o,a,l,u){var d=this,f={},p={},m={},g={};return o.forEach(function(x){var y=!0;a.forEach(function(w){var P="".concat(x,"|").concat(w);!l.reload&&d.store.hasResourceBundle(x,w)?d.state[P]=2:d.state[P]<0||(d.state[P]===1?p[P]===void 0&&(p[P]=!0):(d.state[P]=1,y=!1,p[P]===void 0&&(p[P]=!0),f[P]===void 0&&(f[P]=!0),g[w]===void 0&&(g[w]=!0)))}),y||(m[x]=!0)}),(Object.keys(f).length||Object.keys(p).length)&&this.queue.push({pending:p,pendingCount:Object.keys(p).length,loaded:{},errors:[],callback:u}),{toLoad:Object.keys(f),pending:Object.keys(p),toLoadLanguages:Object.keys(m),toLoadNamespaces:Object.keys(g)}}},{key:"loaded",value:function(o,a,l){var u=o.split("|"),d=u[0],f=u[1];a&&this.emit("failedLoading",d,f,a),l&&this.store.addResourceBundle(d,f,l),this.state[o]=a?-1:2;var p={};this.queue.forEach(function(m){pO(m.loaded,[d],f),IO(m,o),a&&m.errors.push(a),m.pendingCount===0&&!m.done&&(Object.keys(m.loaded).forEach(function(g){p[g]||(p[g]={});var x=m.loaded[g];x.length&&x.forEach(function(y){p[g][y]===void 0&&(p[g][y]=!0)})}),m.done=!0,m.errors.length?m.callback(m.errors):m.callback())}),this.emit("loaded",p),this.queue=this.queue.filter(function(m){return!m.done})}},{key:"read",value:function(o,a,l){var u=this,d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,f=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,p=arguments.length>5?arguments[5]:void 0;if(!o.length)return p(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:o,ns:a,fcName:l,tried:d,wait:f,callback:p});return}this.readingCalls++;var m=function(w,P){if(u.readingCalls--,u.waitingReads.length>0){var _=u.waitingReads.shift();u.read(_.lng,_.ns,_.fcName,_.tried,_.wait,_.callback)}if(w&&P&&d<u.maxRetries){setTimeout(function(){u.read.call(u,o,a,l,d+1,f*2,p)},f);return}p(w,P)},g=this.backend[l].bind(this.backend);if(g.length===2){try{var x=g(o,a);x&&typeof x.then=="function"?x.then(function(y){return m(null,y)}).catch(m):m(null,x)}catch(y){m(y)}return}return g(o,a,m)}},{key:"prepareLoading",value:function(o,a){var l=this,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},d=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),d&&d();typeof o=="string"&&(o=this.languageUtils.toResolveHierarchy(o)),typeof a=="string"&&(a=[a]);var f=this.queueLoad(o,a,u,d);if(!f.toLoad.length)return f.pending.length||d(),null;f.toLoad.forEach(function(p){l.loadOne(p)})}},{key:"load",value:function(o,a,l){this.prepareLoading(o,a,{},l)}},{key:"reload",value:function(o,a,l){this.prepareLoading(o,a,{reload:!0},l)}},{key:"loadOne",value:function(o){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",u=o.split("|"),d=u[0],f=u[1];this.read(d,f,"read",void 0,void 0,function(p,m){p&&a.logger.warn("".concat(l,"loading namespace ").concat(f," for language ").concat(d," failed"),p),!p&&m&&a.logger.log("".concat(l,"loaded namespace ").concat(f," for language ").concat(d),m),a.loaded(o,p,m)})}},{key:"saveMissing",value:function(o,a,l,u,d){var f=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},p=arguments.length>6&&arguments[6]!==void 0?arguments[6]:function(){};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(a)){this.logger.warn('did not save key "'.concat(l,'" as the namespace "').concat(a,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(l==null||l==="")){if(this.backend&&this.backend.create){var m=Av(Av({},f),{},{isUpdate:d}),g=this.backend.create.bind(this.backend);if(g.length<6)try{var x;g.length===5?x=g(o,a,l,u,m):x=g(o,a,l,u),x&&typeof x.then=="function"?x.then(function(y){return p(null,y)}).catch(p):p(null,x)}catch(y){p(y)}else g(o,a,l,u,p,m)}!o||!o[0]||this.store.addResource(o[0],a,l,u)}}}]),n}(mo);function zv(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){var n={};if(an(t[1])==="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),an(t[2])==="object"||an(t[3])==="object"){var r=t[3]||t[2];Object.keys(r).forEach(function(o){n[o]=r[o]})}return n},interpolation:{escapeValue:!0,format:function(t,n,r,o){return t},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function Nv(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function Iv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Kn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Iv(Object(n),!0).forEach(function(r){jn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Iv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function MO(e){var t=DO();return function(){var r=ar(e),o;if(t){var a=ar(this).constructor;o=Reflect.construct(r,arguments,a)}else o=r.apply(this,arguments);return Fs(this,o)}}function DO(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function El(){}function jO(e){var t=Object.getOwnPropertyNames(Object.getPrototypeOf(e));t.forEach(function(n){typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}var Iu=function(e){Mc(n,e);var t=MO(n);function n(){var r,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;if(Fn(this,n),r=t.call(this),Dc&&mo.call(oo(r)),r.options=Nv(o),r.services={},r.logger=Xn,r.modules={external:[]},jO(oo(r)),a&&!r.isInitialized&&!o.isClone){if(!r.options.initImmediate)return r.init(o,a),Fs(r,oo(r));setTimeout(function(){r.init(o,a)},0)}return r}return Un(n,[{key:"init",value:function(){var o=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=arguments.length>1?arguments[1]:void 0;typeof a=="function"&&(l=a,a={}),!a.defaultNS&&a.defaultNS!==!1&&a.ns&&(typeof a.ns=="string"?a.defaultNS=a.ns:a.ns.indexOf("translation")<0&&(a.defaultNS=a.ns[0]));var u=zv();this.options=Kn(Kn(Kn({},u),this.options),Nv(a)),this.options.compatibilityAPI!=="v1"&&(this.options.interpolation=Kn(Kn({},u.interpolation),this.options.interpolation)),a.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=a.keySeparator),a.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=a.nsSeparator);function d(_){return _?typeof _=="function"?new _:_:null}if(!this.options.isClone){this.modules.logger?Xn.init(d(this.modules.logger),this.options):Xn.init(null,this.options);var f;this.modules.formatter?f=this.modules.formatter:typeof Intl<"u"&&(f=AO);var p=new Cv(this.options);this.store=new wO(this.options.resources,this.options);var m=this.services;m.logger=Xn,m.resourceStore=this.store,m.languageUtils=p,m.pluralResolver=new LO(p,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),f&&(!this.options.interpolation.format||this.options.interpolation.format===u.interpolation.format)&&(m.formatter=d(f),m.formatter.init(m,this.options),this.options.interpolation.format=m.formatter.format.bind(m.formatter)),m.interpolator=new TO(this.options),m.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},m.backendConnector=new BO(d(this.modules.backend),m.resourceStore,m,this.options),m.backendConnector.on("*",function(_){for(var b=arguments.length,k=new Array(b>1?b-1:0),C=1;C<b;C++)k[C-1]=arguments[C];o.emit.apply(o,[_].concat(k))}),this.modules.languageDetector&&(m.languageDetector=d(this.modules.languageDetector),m.languageDetector.init&&m.languageDetector.init(m,this.options.detection,this.options)),this.modules.i18nFormat&&(m.i18nFormat=d(this.modules.i18nFormat),m.i18nFormat.init&&m.i18nFormat.init(this)),this.translator=new Pv(this.services,this.options),this.translator.on("*",function(_){for(var b=arguments.length,k=new Array(b>1?b-1:0),C=1;C<b;C++)k[C-1]=arguments[C];o.emit.apply(o,[_].concat(k))}),this.modules.external.forEach(function(_){_.init&&_.init(o)})}if(this.format=this.options.interpolation.format,l||(l=El),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var g=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);g.length>0&&g[0]!=="dev"&&(this.options.lng=g[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined");var x=["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"];x.forEach(function(_){o[_]=function(){var b;return(b=o.store)[_].apply(b,arguments)}});var y=["addResource","addResources","addResourceBundle","removeResourceBundle"];y.forEach(function(_){o[_]=function(){var b;return(b=o.store)[_].apply(b,arguments),o}});var w=ja(),P=function(){var b=function(C,R){o.isInitialized&&!o.initializedStoreOnce&&o.logger.warn("init: i18next is already initialized. You should call init just once!"),o.isInitialized=!0,o.options.isClone||o.logger.log("initialized",o.options),o.emit("initialized",o.options),w.resolve(R),l(C,R)};if(o.languages&&o.options.compatibilityAPI!=="v1"&&!o.isInitialized)return b(null,o.t.bind(o));o.changeLanguage(o.options.lng,b)};return this.options.resources||!this.options.initImmediate?P():setTimeout(P,0),w}},{key:"loadResources",value:function(o){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:El,u=l,d=typeof o=="string"?o:this.language;if(typeof o=="function"&&(u=o),!this.options.resources||this.options.partialBundledLanguages){if(d&&d.toLowerCase()==="cimode")return u();var f=[],p=function(x){if(x){var y=a.services.languageUtils.toResolveHierarchy(x);y.forEach(function(w){f.indexOf(w)<0&&f.push(w)})}};if(d)p(d);else{var m=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);m.forEach(function(g){return p(g)})}this.options.preload&&this.options.preload.forEach(function(g){return p(g)}),this.services.backendConnector.load(f,this.options.ns,function(g){!g&&!a.resolvedLanguage&&a.language&&a.setResolvedLanguage(a.language),u(g)})}else u(null)}},{key:"reloadResources",value:function(o,a,l){var u=ja();return o||(o=this.languages),a||(a=this.options.ns),l||(l=El),this.services.backendConnector.reload(o,a,function(d){u.resolve(),l(d)}),u}},{key:"use",value:function(o){if(!o)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!o.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return o.type==="backend"&&(this.modules.backend=o),(o.type==="logger"||o.log&&o.warn&&o.error)&&(this.modules.logger=o),o.type==="languageDetector"&&(this.modules.languageDetector=o),o.type==="i18nFormat"&&(this.modules.i18nFormat=o),o.type==="postProcessor"&&pw.addPostProcessor(o),o.type==="formatter"&&(this.modules.formatter=o),o.type==="3rdParty"&&this.modules.external.push(o),this}},{key:"setResolvedLanguage",value:function(o){if(!(!o||!this.languages)&&!(["cimode","dev"].indexOf(o)>-1))for(var a=0;a<this.languages.length;a++){var l=this.languages[a];if(!(["cimode","dev"].indexOf(l)>-1)&&this.store.hasLanguageSomeTranslations(l)){this.resolvedLanguage=l;break}}}},{key:"changeLanguage",value:function(o,a){var l=this;this.isLanguageChangingTo=o;var u=ja();this.emit("languageChanging",o);var d=function(g){l.language=g,l.languages=l.services.languageUtils.toResolveHierarchy(g),l.resolvedLanguage=void 0,l.setResolvedLanguage(g)},f=function(g,x){x?(d(x),l.translator.changeLanguage(x),l.isLanguageChangingTo=void 0,l.emit("languageChanged",x),l.logger.log("languageChanged",x)):l.isLanguageChangingTo=void 0,u.resolve(function(){return l.t.apply(l,arguments)}),a&&a(g,function(){return l.t.apply(l,arguments)})},p=function(g){!o&&!g&&l.services.languageDetector&&(g=[]);var x=typeof g=="string"?g:l.services.languageUtils.getBestMatchFromCodes(g);x&&(l.language||d(x),l.translator.language||l.translator.changeLanguage(x),l.services.languageDetector&&l.services.languageDetector.cacheUserLanguage&&l.services.languageDetector.cacheUserLanguage(x)),l.loadResources(x,function(y){f(y,x)})};return!o&&this.services.languageDetector&&!this.services.languageDetector.async?p(this.services.languageDetector.detect()):!o&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(p):this.services.languageDetector.detect(p):p(o),u}},{key:"getFixedT",value:function(o,a,l){var u=this,d=function f(p,m){var g;if(an(m)!=="object"){for(var x=arguments.length,y=new Array(x>2?x-2:0),w=2;w<x;w++)y[w-2]=arguments[w];g=u.options.overloadTranslationOptionHandler([p,m].concat(y))}else g=Kn({},m);g.lng=g.lng||f.lng,g.lngs=g.lngs||f.lngs,g.ns=g.ns||f.ns,g.keyPrefix=g.keyPrefix||l||f.keyPrefix;var P=u.options.keySeparator||".",_;return g.keyPrefix&&Array.isArray(p)?_=p.map(function(b){return"".concat(g.keyPrefix).concat(P).concat(b)}):_=g.keyPrefix?"".concat(g.keyPrefix).concat(P).concat(p):p,u.t(_,g)};return typeof o=="string"?d.lng=o:d.lngs=o,d.ns=a,d.keyPrefix=l,d}},{key:"t",value:function(){var o;return this.translator&&(o=this.translator).translate.apply(o,arguments)}},{key:"exists",value:function(){var o;return this.translator&&(o=this.translator).exists.apply(o,arguments)}},{key:"setDefaultNamespace",value:function(o){this.options.defaultNS=o}},{key:"hasLoadedNamespace",value:function(o){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var u=l.lng||this.resolvedLanguage||this.languages[0],d=this.options?this.options.fallbackLng:!1,f=this.languages[this.languages.length-1];if(u.toLowerCase()==="cimode")return!0;var p=function(x,y){var w=a.services.backendConnector.state["".concat(x,"|").concat(y)];return w===-1||w===2};if(l.precheck){var m=l.precheck(this,p);if(m!==void 0)return m}return!!(this.hasResourceBundle(u,o)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||p(u,o)&&(!d||p(f,o)))}},{key:"loadNamespaces",value:function(o,a){var l=this,u=ja();return this.options.ns?(typeof o=="string"&&(o=[o]),o.forEach(function(d){l.options.ns.indexOf(d)<0&&l.options.ns.push(d)}),this.loadResources(function(d){u.resolve(),a&&a(d)}),u):(a&&a(),Promise.resolve())}},{key:"loadLanguages",value:function(o,a){var l=ja();typeof o=="string"&&(o=[o]);var u=this.options.preload||[],d=o.filter(function(f){return u.indexOf(f)<0});return d.length?(this.options.preload=u.concat(d),this.loadResources(function(f){l.resolve(),a&&a(f)}),l):(a&&a(),Promise.resolve())}},{key:"dir",value:function(o){if(o||(o=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!o)return"rtl";var a=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],l=this.services&&this.services.languageUtils||new Cv(zv());return a.indexOf(l.getLanguagePartFromCode(o))>-1||o.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var o=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:El,u=Kn(Kn(Kn({},this.options),a),{isClone:!0}),d=new n(u);(a.debug!==void 0||a.prefix!==void 0)&&(d.logger=d.logger.clone(a));var f=["store","services","language"];return f.forEach(function(p){d[p]=o[p]}),d.services=Kn({},this.services),d.services.utils={hasLoadedNamespace:d.hasLoadedNamespace.bind(d)},d.translator=new Pv(d.services,d.options),d.translator.on("*",function(p){for(var m=arguments.length,g=new Array(m>1?m-1:0),x=1;x<m;x++)g[x-1]=arguments[x];d.emit.apply(d,[p].concat(g))}),d.init(u,l),d.translator.options=d.options,d.translator.backendConnector.services.utils={hasLoadedNamespace:d.hasLoadedNamespace.bind(d)},d}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),n}(mo);jn(Iu,"createInstance",function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Iu(e,t)});var $t=Iu.createInstance();$t.createInstance=Iu.createInstance;$t.createInstance;$t.dir;$t.init;$t.loadResources;$t.reloadResources;var FO=$t.use;$t.changeLanguage;$t.getFixedT;var To=$t.t;$t.exists;$t.setDefaultNamespace;$t.hasLoadedNamespace;$t.loadNamespaces;$t.loadLanguages;const Gd=()=>ee.jsxs("div",{children:[ee.jsx("h1",{children:"Det skjedde en feil"}),ee.jsx("p",{children:ee.jsx("i",{children:"Vennligst gå tilbake i nettleseren eller refresh siden"})})]}),UO="2.25rem",$O="3.75rem",WO="540px",HO="#000000",ZO="#0062ba";var Rh={},VO={get exports(){return Rh},set exports(e){Rh=e}};/* @preserve
 * Leaflet 1.9.3, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2022 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(e,t){(function(n,r){r(t)})(xi,function(n){var r="1.9.3";function o(i){var s,c,h,v;for(c=1,h=arguments.length;c<h;c++){v=arguments[c];for(s in v)i[s]=v[s]}return i}var a=Object.create||function(){function i(){}return function(s){return i.prototype=s,new i}}();function l(i,s){var c=Array.prototype.slice;if(i.bind)return i.bind.apply(i,c.call(arguments,1));var h=c.call(arguments,2);return function(){return i.apply(s,h.length?h.concat(c.call(arguments)):arguments)}}var u=0;function d(i){return"_leaflet_id"in i||(i._leaflet_id=++u),i._leaflet_id}function f(i,s,c){var h,v,S,T;return T=function(){h=!1,v&&(S.apply(c,v),v=!1)},S=function(){h?v=arguments:(i.apply(c,arguments),setTimeout(T,s),h=!0)},S}function p(i,s,c){var h=s[1],v=s[0],S=h-v;return i===h&&c?i:((i-v)%S+S)%S+v}function m(){return!1}function g(i,s){if(s===!1)return i;var c=Math.pow(10,s===void 0?6:s);return Math.round(i*c)/c}function x(i){return i.trim?i.trim():i.replace(/^\s+|\s+$/g,"")}function y(i){return x(i).split(/\s+/)}function w(i,s){Object.prototype.hasOwnProperty.call(i,"options")||(i.options=i.options?a(i.options):{});for(var c in s)i.options[c]=s[c];return i.options}function P(i,s,c){var h=[];for(var v in i)h.push(encodeURIComponent(c?v.toUpperCase():v)+"="+encodeURIComponent(i[v]));return(!s||s.indexOf("?")===-1?"?":"&")+h.join("&")}var _=/\{ *([\w_ -]+) *\}/g;function b(i,s){return i.replace(_,function(c,h){var v=s[h];if(v===void 0)throw new Error("No value provided for variable "+c);return typeof v=="function"&&(v=v(s)),v})}var k=Array.isArray||function(i){return Object.prototype.toString.call(i)==="[object Array]"};function C(i,s){for(var c=0;c<i.length;c++)if(i[c]===s)return c;return-1}var R="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function I(i){return window["webkit"+i]||window["moz"+i]||window["ms"+i]}var N=0;function U(i){var s=+new Date,c=Math.max(0,16-(s-N));return N=s+c,window.setTimeout(i,c)}var $=window.requestAnimationFrame||I("RequestAnimationFrame")||U,F=window.cancelAnimationFrame||I("CancelAnimationFrame")||I("CancelRequestAnimationFrame")||function(i){window.clearTimeout(i)};function J(i,s,c){if(c&&$===U)i.call(s);else return $.call(window,l(i,s))}function le(i){i&&F.call(window,i)}var X={__proto__:null,extend:o,create:a,bind:l,get lastId(){return u},stamp:d,throttle:f,wrapNum:p,falseFn:m,formatNum:g,trim:x,splitWords:y,setOptions:w,getParamString:P,template:b,isArray:k,indexOf:C,emptyImageUrl:R,requestFn:$,cancelFn:F,requestAnimFrame:J,cancelAnimFrame:le};function Q(){}Q.extend=function(i){var s=function(){w(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},c=s.__super__=this.prototype,h=a(c);h.constructor=s,s.prototype=h;for(var v in this)Object.prototype.hasOwnProperty.call(this,v)&&v!=="prototype"&&v!=="__super__"&&(s[v]=this[v]);return i.statics&&o(s,i.statics),i.includes&&(ce(i.includes),o.apply(null,[h].concat(i.includes))),o(h,i),delete h.statics,delete h.includes,h.options&&(h.options=c.options?a(c.options):{},o(h.options,i.options)),h._initHooks=[],h.callInitHooks=function(){if(!this._initHooksCalled){c.callInitHooks&&c.callInitHooks.call(this),this._initHooksCalled=!0;for(var S=0,T=h._initHooks.length;S<T;S++)h._initHooks[S].call(this)}},s},Q.include=function(i){var s=this.prototype.options;return o(this.prototype,i),i.options&&(this.prototype.options=s,this.mergeOptions(i.options)),this},Q.mergeOptions=function(i){return o(this.prototype.options,i),this},Q.addInitHook=function(i){var s=Array.prototype.slice.call(arguments,1),c=typeof i=="function"?i:function(){this[i].apply(this,s)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(c),this};function ce(i){if(!(typeof L>"u"||!L||!L.Mixin)){i=k(i)?i:[i];for(var s=0;s<i.length;s++)i[s]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var Y={on:function(i,s,c){if(typeof i=="object")for(var h in i)this._on(h,i[h],s);else{i=y(i);for(var v=0,S=i.length;v<S;v++)this._on(i[v],s,c)}return this},off:function(i,s,c){if(!arguments.length)delete this._events;else if(typeof i=="object")for(var h in i)this._off(h,i[h],s);else{i=y(i);for(var v=arguments.length===1,S=0,T=i.length;S<T;S++)v?this._off(i[S]):this._off(i[S],s,c)}return this},_on:function(i,s,c,h){if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}if(this._listens(i,s,c)===!1){c===this&&(c=void 0);var v={fn:s,ctx:c};h&&(v.once=!0),this._events=this._events||{},this._events[i]=this._events[i]||[],this._events[i].push(v)}},_off:function(i,s,c){var h,v,S;if(this._events&&(h=this._events[i],!!h)){if(arguments.length===1){if(this._firingCount)for(v=0,S=h.length;v<S;v++)h[v].fn=m;delete this._events[i];return}if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}var T=this._listens(i,s,c);if(T!==!1){var j=h[T];this._firingCount&&(j.fn=m,this._events[i]=h=h.slice()),h.splice(T,1)}}},fire:function(i,s,c){if(!this.listens(i,c))return this;var h=o({},s,{type:i,target:this,sourceTarget:s&&s.sourceTarget||this});if(this._events){var v=this._events[i];if(v){this._firingCount=this._firingCount+1||1;for(var S=0,T=v.length;S<T;S++){var j=v[S],W=j.fn;j.once&&this.off(i,W,j.ctx),W.call(j.ctx||this,h)}this._firingCount--}}return c&&this._propagateEvent(h),this},listens:function(i,s,c,h){typeof i!="string"&&console.warn('"string" type argument expected');var v=s;typeof s!="function"&&(h=!!s,v=void 0,c=void 0);var S=this._events&&this._events[i];if(S&&S.length&&this._listens(i,v,c)!==!1)return!0;if(h){for(var T in this._eventParents)if(this._eventParents[T].listens(i,s,c,h))return!0}return!1},_listens:function(i,s,c){if(!this._events)return!1;var h=this._events[i]||[];if(!s)return!!h.length;c===this&&(c=void 0);for(var v=0,S=h.length;v<S;v++)if(h[v].fn===s&&h[v].ctx===c)return v;return!1},once:function(i,s,c){if(typeof i=="object")for(var h in i)this._on(h,i[h],s,!0);else{i=y(i);for(var v=0,S=i.length;v<S;v++)this._on(i[v],s,c,!0)}return this},addEventParent:function(i){return this._eventParents=this._eventParents||{},this._eventParents[d(i)]=i,this},removeEventParent:function(i){return this._eventParents&&delete this._eventParents[d(i)],this},_propagateEvent:function(i){for(var s in this._eventParents)this._eventParents[s].fire(i.type,o({layer:i.target,propagatedFrom:i.target},i),!0)}};Y.addEventListener=Y.on,Y.removeEventListener=Y.clearAllEventListeners=Y.off,Y.addOneTimeEventListener=Y.once,Y.fireEvent=Y.fire,Y.hasEventListeners=Y.listens;var B=Q.extend(Y);function M(i,s,c){this.x=c?Math.round(i):i,this.y=c?Math.round(s):s}var ne=Math.trunc||function(i){return i>0?Math.floor(i):Math.ceil(i)};M.prototype={clone:function(){return new M(this.x,this.y)},add:function(i){return this.clone()._add(q(i))},_add:function(i){return this.x+=i.x,this.y+=i.y,this},subtract:function(i){return this.clone()._subtract(q(i))},_subtract:function(i){return this.x-=i.x,this.y-=i.y,this},divideBy:function(i){return this.clone()._divideBy(i)},_divideBy:function(i){return this.x/=i,this.y/=i,this},multiplyBy:function(i){return this.clone()._multiplyBy(i)},_multiplyBy:function(i){return this.x*=i,this.y*=i,this},scaleBy:function(i){return new M(this.x*i.x,this.y*i.y)},unscaleBy:function(i){return new M(this.x/i.x,this.y/i.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=ne(this.x),this.y=ne(this.y),this},distanceTo:function(i){i=q(i);var s=i.x-this.x,c=i.y-this.y;return Math.sqrt(s*s+c*c)},equals:function(i){return i=q(i),i.x===this.x&&i.y===this.y},contains:function(i){return i=q(i),Math.abs(i.x)<=Math.abs(this.x)&&Math.abs(i.y)<=Math.abs(this.y)},toString:function(){return"Point("+g(this.x)+", "+g(this.y)+")"}};function q(i,s,c){return i instanceof M?i:k(i)?new M(i[0],i[1]):i==null?i:typeof i=="object"&&"x"in i&&"y"in i?new M(i.x,i.y):new M(i,s,c)}function O(i,s){if(i)for(var c=s?[i,s]:i,h=0,v=c.length;h<v;h++)this.extend(c[h])}O.prototype={extend:function(i){var s,c;if(!i)return this;if(i instanceof M||typeof i[0]=="number"||"x"in i)s=c=q(i);else if(i=A(i),s=i.min,c=i.max,!s||!c)return this;return!this.min&&!this.max?(this.min=s.clone(),this.max=c.clone()):(this.min.x=Math.min(s.x,this.min.x),this.max.x=Math.max(c.x,this.max.x),this.min.y=Math.min(s.y,this.min.y),this.max.y=Math.max(c.y,this.max.y)),this},getCenter:function(i){return q((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,i)},getBottomLeft:function(){return q(this.min.x,this.max.y)},getTopRight:function(){return q(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(i){var s,c;return typeof i[0]=="number"||i instanceof M?i=q(i):i=A(i),i instanceof O?(s=i.min,c=i.max):s=c=i,s.x>=this.min.x&&c.x<=this.max.x&&s.y>=this.min.y&&c.y<=this.max.y},intersects:function(i){i=A(i);var s=this.min,c=this.max,h=i.min,v=i.max,S=v.x>=s.x&&h.x<=c.x,T=v.y>=s.y&&h.y<=c.y;return S&&T},overlaps:function(i){i=A(i);var s=this.min,c=this.max,h=i.min,v=i.max,S=v.x>s.x&&h.x<c.x,T=v.y>s.y&&h.y<c.y;return S&&T},isValid:function(){return!!(this.min&&this.max)},pad:function(i){var s=this.min,c=this.max,h=Math.abs(s.x-c.x)*i,v=Math.abs(s.y-c.y)*i;return A(q(s.x-h,s.y-v),q(c.x+h,c.y+v))},equals:function(i){return i?(i=A(i),this.min.equals(i.getTopLeft())&&this.max.equals(i.getBottomRight())):!1}};function A(i,s){return!i||i instanceof O?i:new O(i,s)}function z(i,s){if(i)for(var c=s?[i,s]:i,h=0,v=c.length;h<v;h++)this.extend(c[h])}z.prototype={extend:function(i){var s=this._southWest,c=this._northEast,h,v;if(i instanceof re)h=i,v=i;else if(i instanceof z){if(h=i._southWest,v=i._northEast,!h||!v)return this}else return i?this.extend(ue(i)||Z(i)):this;return!s&&!c?(this._southWest=new re(h.lat,h.lng),this._northEast=new re(v.lat,v.lng)):(s.lat=Math.min(h.lat,s.lat),s.lng=Math.min(h.lng,s.lng),c.lat=Math.max(v.lat,c.lat),c.lng=Math.max(v.lng,c.lng)),this},pad:function(i){var s=this._southWest,c=this._northEast,h=Math.abs(s.lat-c.lat)*i,v=Math.abs(s.lng-c.lng)*i;return new z(new re(s.lat-h,s.lng-v),new re(c.lat+h,c.lng+v))},getCenter:function(){return new re((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new re(this.getNorth(),this.getWest())},getSouthEast:function(){return new re(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(i){typeof i[0]=="number"||i instanceof re||"lat"in i?i=ue(i):i=Z(i);var s=this._southWest,c=this._northEast,h,v;return i instanceof z?(h=i.getSouthWest(),v=i.getNorthEast()):h=v=i,h.lat>=s.lat&&v.lat<=c.lat&&h.lng>=s.lng&&v.lng<=c.lng},intersects:function(i){i=Z(i);var s=this._southWest,c=this._northEast,h=i.getSouthWest(),v=i.getNorthEast(),S=v.lat>=s.lat&&h.lat<=c.lat,T=v.lng>=s.lng&&h.lng<=c.lng;return S&&T},overlaps:function(i){i=Z(i);var s=this._southWest,c=this._northEast,h=i.getSouthWest(),v=i.getNorthEast(),S=v.lat>s.lat&&h.lat<c.lat,T=v.lng>s.lng&&h.lng<c.lng;return S&&T},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(i,s){return i?(i=Z(i),this._southWest.equals(i.getSouthWest(),s)&&this._northEast.equals(i.getNorthEast(),s)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function Z(i,s){return i instanceof z?i:new z(i,s)}function re(i,s,c){if(isNaN(i)||isNaN(s))throw new Error("Invalid LatLng object: ("+i+", "+s+")");this.lat=+i,this.lng=+s,c!==void 0&&(this.alt=+c)}re.prototype={equals:function(i,s){if(!i)return!1;i=ue(i);var c=Math.max(Math.abs(this.lat-i.lat),Math.abs(this.lng-i.lng));return c<=(s===void 0?1e-9:s)},toString:function(i){return"LatLng("+g(this.lat,i)+", "+g(this.lng,i)+")"},distanceTo:function(i){return be.distance(this,ue(i))},wrap:function(){return be.wrapLatLng(this)},toBounds:function(i){var s=180*i/40075017,c=s/Math.cos(Math.PI/180*this.lat);return Z([this.lat-s,this.lng-c],[this.lat+s,this.lng+c])},clone:function(){return new re(this.lat,this.lng,this.alt)}};function ue(i,s,c){return i instanceof re?i:k(i)&&typeof i[0]!="object"?i.length===3?new re(i[0],i[1],i[2]):i.length===2?new re(i[0],i[1]):null:i==null?i:typeof i=="object"&&"lat"in i?new re(i.lat,"lng"in i?i.lng:i.lon,i.alt):s===void 0?null:new re(i,s,c)}var de={latLngToPoint:function(i,s){var c=this.projection.project(i),h=this.scale(s);return this.transformation._transform(c,h)},pointToLatLng:function(i,s){var c=this.scale(s),h=this.transformation.untransform(i,c);return this.projection.unproject(h)},project:function(i){return this.projection.project(i)},unproject:function(i){return this.projection.unproject(i)},scale:function(i){return 256*Math.pow(2,i)},zoom:function(i){return Math.log(i/256)/Math.LN2},getProjectedBounds:function(i){if(this.infinite)return null;var s=this.projection.bounds,c=this.scale(i),h=this.transformation.transform(s.min,c),v=this.transformation.transform(s.max,c);return new O(h,v)},infinite:!1,wrapLatLng:function(i){var s=this.wrapLng?p(i.lng,this.wrapLng,!0):i.lng,c=this.wrapLat?p(i.lat,this.wrapLat,!0):i.lat,h=i.alt;return new re(c,s,h)},wrapLatLngBounds:function(i){var s=i.getCenter(),c=this.wrapLatLng(s),h=s.lat-c.lat,v=s.lng-c.lng;if(h===0&&v===0)return i;var S=i.getSouthWest(),T=i.getNorthEast(),j=new re(S.lat-h,S.lng-v),W=new re(T.lat-h,T.lng-v);return new z(j,W)}},be=o({},de,{wrapLng:[-180,180],R:6371e3,distance:function(i,s){var c=Math.PI/180,h=i.lat*c,v=s.lat*c,S=Math.sin((s.lat-i.lat)*c/2),T=Math.sin((s.lng-i.lng)*c/2),j=S*S+Math.cos(h)*Math.cos(v)*T*T,W=2*Math.atan2(Math.sqrt(j),Math.sqrt(1-j));return this.R*W}}),Je=6378137,et={R:Je,MAX_LATITUDE:85.0511287798,project:function(i){var s=Math.PI/180,c=this.MAX_LATITUDE,h=Math.max(Math.min(c,i.lat),-c),v=Math.sin(h*s);return new M(this.R*i.lng*s,this.R*Math.log((1+v)/(1-v))/2)},unproject:function(i){var s=180/Math.PI;return new re((2*Math.atan(Math.exp(i.y/this.R))-Math.PI/2)*s,i.x*s/this.R)},bounds:function(){var i=Je*Math.PI;return new O([-i,-i],[i,i])}()};function $e(i,s,c,h){if(k(i)){this._a=i[0],this._b=i[1],this._c=i[2],this._d=i[3];return}this._a=i,this._b=s,this._c=c,this._d=h}$e.prototype={transform:function(i,s){return this._transform(i.clone(),s)},_transform:function(i,s){return s=s||1,i.x=s*(this._a*i.x+this._b),i.y=s*(this._c*i.y+this._d),i},untransform:function(i,s){return s=s||1,new M((i.x/s-this._b)/this._a,(i.y/s-this._d)/this._c)}};function Le(i,s,c,h){return new $e(i,s,c,h)}var tt=o({},be,{code:"EPSG:3857",projection:et,transformation:function(){var i=.5/(Math.PI*et.R);return Le(i,.5,-i,.5)}()}),oe=o({},tt,{code:"EPSG:900913"});function he(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function K(i,s){var c="",h,v,S,T,j,W;for(h=0,S=i.length;h<S;h++){for(j=i[h],v=0,T=j.length;v<T;v++)W=j[v],c+=(v?"L":"M")+W.x+" "+W.y;c+=s?pe.svg?"z":"x":""}return c||"M0 0"}var ae=document.documentElement.style,ve="ActiveXObject"in window,xe=ve&&!document.addEventListener,Se="msLaunchUri"in navigator&&!("documentMode"in document),ze=Me("webkit"),We=Me("android"),Kt=Me("android 2")||Me("android 3"),ri=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),xo=We&&Me("Google")&&ri<537&&!("AudioNode"in window),kn=!!window.opera,$n=!Se&&Me("chrome"),lr=Me("gecko")&&!ze&&!kn&&!ve,wo=!$n&&Me("safari"),H=Me("phantom"),V="OTransition"in ae,ie=navigator.platform.indexOf("Win")===0,me=ve&&"transition"in ae,ge="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Kt,ke="MozPerspective"in ae,Ce=!window.L_DISABLE_3D&&(me||ge||ke)&&!V&&!H,we=typeof orientation<"u"||Me("mobile"),ye=we&&ze,Be=we&&ge,He=!window.PointerEvent&&window.MSPointerEvent,xt=!!(window.PointerEvent||He),ht="ontouchstart"in window||!!window.TouchEvent,_t=!window.L_NO_TOUCH&&(ht||xt),Qt=we&&kn,ko=we&&lr,ha=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,oi=function(){var i=!1;try{var s=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("testPassiveEventSupport",m,s),window.removeEventListener("testPassiveEventSupport",m,s)}catch{}return i}(),Wn=function(){return!!document.createElement("canvas").getContext}(),Ar=!!(document.createElementNS&&he("svg").createSVGRect),pa=!!Ar&&function(){var i=document.createElement("div");return i.innerHTML="<svg/>",(i.firstChild&&i.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),ma=!Ar&&function(){try{var i=document.createElement("div");i.innerHTML='<v:shape adj="1"/>';var s=i.firstChild;return s.style.behavior="url(#default#VML)",s&&typeof s.adj=="object"}catch{return!1}}(),_a=navigator.platform.indexOf("Mac")===0,ii=navigator.platform.indexOf("Linux")===0;function Me(i){return navigator.userAgent.toLowerCase().indexOf(i)>=0}var pe={ie:ve,ielt9:xe,edge:Se,webkit:ze,android:We,android23:Kt,androidStock:xo,opera:kn,chrome:$n,gecko:lr,safari:wo,phantom:H,opera12:V,win:ie,ie3d:me,webkit3d:ge,gecko3d:ke,any3d:Ce,mobile:we,mobileWebkit:ye,mobileWebkit3d:Be,msPointer:He,pointer:xt,touch:_t,touchNative:ht,mobileOpera:Qt,mobileGecko:ko,retina:ha,passiveEvents:oi,canvas:Wn,svg:Ar,vml:ma,inlineSvg:pa,mac:_a,linux:ii},ur=pe.msPointer?"MSPointerDown":"pointerdown",ai=pe.msPointer?"MSPointerMove":"pointermove",Nt=pe.msPointer?"MSPointerUp":"pointerup",si=pe.msPointer?"MSPointerCancel":"pointercancel",li={touchstart:ur,touchmove:ai,touchend:Nt,touchcancel:si},Ws={touchstart:F1,touchmove:Hs,touchend:Hs,touchcancel:Hs},ui={},Dm=!1;function I1(i,s,c){return s==="touchstart"&&j1(),Ws[s]?(c=Ws[s].bind(this,c),i.addEventListener(li[s],c,!1),c):(console.warn("wrong event specified:",s),m)}function B1(i,s,c){if(!li[s]){console.warn("wrong event specified:",s);return}i.removeEventListener(li[s],c,!1)}function M1(i){ui[i.pointerId]=i}function D1(i){ui[i.pointerId]&&(ui[i.pointerId]=i)}function jm(i){delete ui[i.pointerId]}function j1(){Dm||(document.addEventListener(ur,M1,!0),document.addEventListener(ai,D1,!0),document.addEventListener(Nt,jm,!0),document.addEventListener(si,jm,!0),Dm=!0)}function Hs(i,s){if(s.pointerType!==(s.MSPOINTER_TYPE_MOUSE||"mouse")){s.touches=[];for(var c in ui)s.touches.push(ui[c]);s.changedTouches=[s],i(s)}}function F1(i,s){s.MSPOINTER_TYPE_TOUCH&&s.pointerType===s.MSPOINTER_TYPE_TOUCH&&Tt(s),Hs(i,s)}function U1(i){var s={},c,h;for(h in i)c=i[h],s[h]=c&&c.bind?c.bind(i):c;return i=s,s.type="dblclick",s.detail=2,s.isTrusted=!1,s._simulated=!0,s}var $1=200;function W1(i,s){i.addEventListener("dblclick",s);var c=0,h;function v(S){if(S.detail!==1){h=S.detail;return}if(!(S.pointerType==="mouse"||S.sourceCapabilities&&!S.sourceCapabilities.firesTouchEvents)){var T=Hm(S);if(!(T.some(function(W){return W instanceof HTMLLabelElement&&W.attributes.for})&&!T.some(function(W){return W instanceof HTMLInputElement||W instanceof HTMLSelectElement}))){var j=Date.now();j-c<=$1?(h++,h===2&&s(U1(S))):h=1,c=j}}}return i.addEventListener("click",v),{dblclick:s,simDblclick:v}}function H1(i,s){i.removeEventListener("dblclick",s.dblclick),i.removeEventListener("click",s.simDblclick)}var Kc=qs(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ga=qs(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Fm=ga==="webkitTransition"||ga==="OTransition"?ga+"End":"transitionend";function Um(i){return typeof i=="string"?document.getElementById(i):i}function va(i,s){var c=i.style[s]||i.currentStyle&&i.currentStyle[s];if((!c||c==="auto")&&document.defaultView){var h=document.defaultView.getComputedStyle(i,null);c=h?h[s]:null}return c==="auto"?null:c}function Ue(i,s,c){var h=document.createElement(i);return h.className=s||"",c&&c.appendChild(h),h}function at(i){var s=i.parentNode;s&&s.removeChild(i)}function Zs(i){for(;i.firstChild;)i.removeChild(i.firstChild)}function ci(i){var s=i.parentNode;s&&s.lastChild!==i&&s.appendChild(i)}function di(i){var s=i.parentNode;s&&s.firstChild!==i&&s.insertBefore(i,s.firstChild)}function Qc(i,s){if(i.classList!==void 0)return i.classList.contains(s);var c=Vs(i);return c.length>0&&new RegExp("(^|\\s)"+s+"(\\s|$)").test(c)}function Oe(i,s){if(i.classList!==void 0)for(var c=y(s),h=0,v=c.length;h<v;h++)i.classList.add(c[h]);else if(!Qc(i,s)){var S=Vs(i);Gc(i,(S?S+" ":"")+s)}}function pt(i,s){i.classList!==void 0?i.classList.remove(s):Gc(i,x((" "+Vs(i)+" ").replace(" "+s+" "," ")))}function Gc(i,s){i.className.baseVal===void 0?i.className=s:i.className.baseVal=s}function Vs(i){return i.correspondingElement&&(i=i.correspondingElement),i.className.baseVal===void 0?i.className:i.className.baseVal}function fn(i,s){"opacity"in i.style?i.style.opacity=s:"filter"in i.style&&Z1(i,s)}function Z1(i,s){var c=!1,h="DXImageTransform.Microsoft.Alpha";try{c=i.filters.item(h)}catch{if(s===1)return}s=Math.round(s*100),c?(c.Enabled=s!==100,c.Opacity=s):i.style.filter+=" progid:"+h+"(opacity="+s+")"}function qs(i){for(var s=document.documentElement.style,c=0;c<i.length;c++)if(i[c]in s)return i[c];return!1}function So(i,s,c){var h=s||new M(0,0);i.style[Kc]=(pe.ie3d?"translate("+h.x+"px,"+h.y+"px)":"translate3d("+h.x+"px,"+h.y+"px,0)")+(c?" scale("+c+")":"")}function gt(i,s){i._leaflet_pos=s,pe.any3d?So(i,s):(i.style.left=s.x+"px",i.style.top=s.y+"px")}function Po(i){return i._leaflet_pos||new M(0,0)}var ya,ba,Jc;if("onselectstart"in document)ya=function(){Ee(window,"selectstart",Tt)},ba=function(){Ye(window,"selectstart",Tt)};else{var xa=qs(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);ya=function(){if(xa){var i=document.documentElement.style;Jc=i[xa],i[xa]="none"}},ba=function(){xa&&(document.documentElement.style[xa]=Jc,Jc=void 0)}}function Yc(){Ee(window,"dragstart",Tt)}function Xc(){Ye(window,"dragstart",Tt)}var Ks,ed;function td(i){for(;i.tabIndex===-1;)i=i.parentNode;i.style&&(Qs(),Ks=i,ed=i.style.outline,i.style.outline="none",Ee(window,"keydown",Qs))}function Qs(){Ks&&(Ks.style.outline=ed,Ks=void 0,ed=void 0,Ye(window,"keydown",Qs))}function $m(i){do i=i.parentNode;while((!i.offsetWidth||!i.offsetHeight)&&i!==document.body);return i}function nd(i){var s=i.getBoundingClientRect();return{x:s.width/i.offsetWidth||1,y:s.height/i.offsetHeight||1,boundingClientRect:s}}var V1={__proto__:null,TRANSFORM:Kc,TRANSITION:ga,TRANSITION_END:Fm,get:Um,getStyle:va,create:Ue,remove:at,empty:Zs,toFront:ci,toBack:di,hasClass:Qc,addClass:Oe,removeClass:pt,setClass:Gc,getClass:Vs,setOpacity:fn,testProp:qs,setTransform:So,setPosition:gt,getPosition:Po,get disableTextSelection(){return ya},get enableTextSelection(){return ba},disableImageDrag:Yc,enableImageDrag:Xc,preventOutline:td,restoreOutline:Qs,getSizedParentNode:$m,getScale:nd};function Ee(i,s,c,h){if(s&&typeof s=="object")for(var v in s)od(i,v,s[v],c);else{s=y(s);for(var S=0,T=s.length;S<T;S++)od(i,s[S],c,h)}return this}var Hn="_leaflet_events";function Ye(i,s,c,h){if(arguments.length===1)Wm(i),delete i[Hn];else if(s&&typeof s=="object")for(var v in s)id(i,v,s[v],c);else if(s=y(s),arguments.length===2)Wm(i,function(j){return C(s,j)!==-1});else for(var S=0,T=s.length;S<T;S++)id(i,s[S],c,h);return this}function Wm(i,s){for(var c in i[Hn]){var h=c.split(/\d/)[0];(!s||s(h))&&id(i,h,null,null,c)}}var rd={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function od(i,s,c,h){var v=s+d(c)+(h?"_"+d(h):"");if(i[Hn]&&i[Hn][v])return this;var S=function(j){return c.call(h||i,j||window.event)},T=S;!pe.touchNative&&pe.pointer&&s.indexOf("touch")===0?S=I1(i,s,S):pe.touch&&s==="dblclick"?S=W1(i,S):"addEventListener"in i?s==="touchstart"||s==="touchmove"||s==="wheel"||s==="mousewheel"?i.addEventListener(rd[s]||s,S,pe.passiveEvents?{passive:!1}:!1):s==="mouseenter"||s==="mouseleave"?(S=function(j){j=j||window.event,sd(i,j)&&T(j)},i.addEventListener(rd[s],S,!1)):i.addEventListener(s,T,!1):i.attachEvent("on"+s,S),i[Hn]=i[Hn]||{},i[Hn][v]=S}function id(i,s,c,h,v){v=v||s+d(c)+(h?"_"+d(h):"");var S=i[Hn]&&i[Hn][v];if(!S)return this;!pe.touchNative&&pe.pointer&&s.indexOf("touch")===0?B1(i,s,S):pe.touch&&s==="dblclick"?H1(i,S):"removeEventListener"in i?i.removeEventListener(rd[s]||s,S,!1):i.detachEvent("on"+s,S),i[Hn][v]=null}function Co(i){return i.stopPropagation?i.stopPropagation():i.originalEvent?i.originalEvent._stopped=!0:i.cancelBubble=!0,this}function ad(i){return od(i,"wheel",Co),this}function wa(i){return Ee(i,"mousedown touchstart dblclick contextmenu",Co),i._leaflet_disable_click=!0,this}function Tt(i){return i.preventDefault?i.preventDefault():i.returnValue=!1,this}function Eo(i){return Tt(i),Co(i),this}function Hm(i){if(i.composedPath)return i.composedPath();for(var s=[],c=i.target;c;)s.push(c),c=c.parentNode;return s}function Zm(i,s){if(!s)return new M(i.clientX,i.clientY);var c=nd(s),h=c.boundingClientRect;return new M((i.clientX-h.left)/c.x-s.clientLeft,(i.clientY-h.top)/c.y-s.clientTop)}var q1=pe.linux&&pe.chrome?window.devicePixelRatio:pe.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Vm(i){return pe.edge?i.wheelDeltaY/2:i.deltaY&&i.deltaMode===0?-i.deltaY/q1:i.deltaY&&i.deltaMode===1?-i.deltaY*20:i.deltaY&&i.deltaMode===2?-i.deltaY*60:i.deltaX||i.deltaZ?0:i.wheelDelta?(i.wheelDeltaY||i.wheelDelta)/2:i.detail&&Math.abs(i.detail)<32765?-i.detail*20:i.detail?i.detail/-32765*60:0}function sd(i,s){var c=s.relatedTarget;if(!c)return!0;try{for(;c&&c!==i;)c=c.parentNode}catch{return!1}return c!==i}var K1={__proto__:null,on:Ee,off:Ye,stopPropagation:Co,disableScrollPropagation:ad,disableClickPropagation:wa,preventDefault:Tt,stop:Eo,getPropagationPath:Hm,getMousePosition:Zm,getWheelDelta:Vm,isExternalTarget:sd,addListener:Ee,removeListener:Ye},qm=B.extend({run:function(i,s,c,h){this.stop(),this._el=i,this._inProgress=!0,this._duration=c||.25,this._easeOutPower=1/Math.max(h||.5,.2),this._startPos=Po(i),this._offset=s.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=J(this._animate,this),this._step()},_step:function(i){var s=+new Date-this._startTime,c=this._duration*1e3;s<c?this._runFrame(this._easeOut(s/c),i):(this._runFrame(1),this._complete())},_runFrame:function(i,s){var c=this._startPos.add(this._offset.multiplyBy(i));s&&c._round(),gt(this._el,c),this.fire("step")},_complete:function(){le(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(i){return 1-Math.pow(1-i,this._easeOutPower)}}),De=B.extend({options:{crs:tt,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(i,s){s=w(this,s),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(i),this._initLayout(),this._onResize=l(this._onResize,this),this._initEvents(),s.maxBounds&&this.setMaxBounds(s.maxBounds),s.zoom!==void 0&&(this._zoom=this._limitZoom(s.zoom)),s.center&&s.zoom!==void 0&&this.setView(ue(s.center),s.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=ga&&pe.any3d&&!pe.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),Ee(this._proxy,Fm,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(i,s,c){if(s=s===void 0?this._zoom:this._limitZoom(s),i=this._limitCenter(ue(i),s,this.options.maxBounds),c=c||{},this._stop(),this._loaded&&!c.reset&&c!==!0){c.animate!==void 0&&(c.zoom=o({animate:c.animate},c.zoom),c.pan=o({animate:c.animate,duration:c.duration},c.pan));var h=this._zoom!==s?this._tryAnimatedZoom&&this._tryAnimatedZoom(i,s,c.zoom):this._tryAnimatedPan(i,c.pan);if(h)return clearTimeout(this._sizeTimer),this}return this._resetView(i,s,c.pan&&c.pan.noMoveStart),this},setZoom:function(i,s){return this._loaded?this.setView(this.getCenter(),i,{zoom:s}):(this._zoom=i,this)},zoomIn:function(i,s){return i=i||(pe.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+i,s)},zoomOut:function(i,s){return i=i||(pe.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-i,s)},setZoomAround:function(i,s,c){var h=this.getZoomScale(s),v=this.getSize().divideBy(2),S=i instanceof M?i:this.latLngToContainerPoint(i),T=S.subtract(v).multiplyBy(1-1/h),j=this.containerPointToLatLng(v.add(T));return this.setView(j,s,{zoom:c})},_getBoundsCenterZoom:function(i,s){s=s||{},i=i.getBounds?i.getBounds():Z(i);var c=q(s.paddingTopLeft||s.padding||[0,0]),h=q(s.paddingBottomRight||s.padding||[0,0]),v=this.getBoundsZoom(i,!1,c.add(h));if(v=typeof s.maxZoom=="number"?Math.min(s.maxZoom,v):v,v===1/0)return{center:i.getCenter(),zoom:v};var S=h.subtract(c).divideBy(2),T=this.project(i.getSouthWest(),v),j=this.project(i.getNorthEast(),v),W=this.unproject(T.add(j).divideBy(2).add(S),v);return{center:W,zoom:v}},fitBounds:function(i,s){if(i=Z(i),!i.isValid())throw new Error("Bounds are not valid.");var c=this._getBoundsCenterZoom(i,s);return this.setView(c.center,c.zoom,s)},fitWorld:function(i){return this.fitBounds([[-90,-180],[90,180]],i)},panTo:function(i,s){return this.setView(i,this._zoom,{pan:s})},panBy:function(i,s){if(i=q(i).round(),s=s||{},!i.x&&!i.y)return this.fire("moveend");if(s.animate!==!0&&!this.getSize().contains(i))return this._resetView(this.unproject(this.project(this.getCenter()).add(i)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new qm,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),s.noMoveStart||this.fire("movestart"),s.animate!==!1){Oe(this._mapPane,"leaflet-pan-anim");var c=this._getMapPanePos().subtract(i).round();this._panAnim.run(this._mapPane,c,s.duration||.25,s.easeLinearity)}else this._rawPanBy(i),this.fire("move").fire("moveend");return this},flyTo:function(i,s,c){if(c=c||{},c.animate===!1||!pe.any3d)return this.setView(i,s,c);this._stop();var h=this.project(this.getCenter()),v=this.project(i),S=this.getSize(),T=this._zoom;i=ue(i),s=s===void 0?T:s;var j=Math.max(S.x,S.y),W=j*this.getZoomScale(T,s),te=v.distanceTo(h)||1,fe=1.42,Pe=fe*fe;function Te(vt){var ll=vt?-1:1,Bk=vt?W:j,Mk=W*W-j*j+ll*Pe*Pe*te*te,Dk=2*Bk*Pe*te,vd=Mk/Dk,E_=Math.sqrt(vd*vd+1)-vd,jk=E_<1e-9?-18:Math.log(E_);return jk}function pn(vt){return(Math.exp(vt)-Math.exp(-vt))/2}function Lo(vt){return(Math.exp(vt)+Math.exp(-vt))/2}function sl(vt){return pn(vt)/Lo(vt)}var Ir=Te(0);function gd(vt){return j*(Lo(Ir)/Lo(Ir+fe*vt))}function Ak(vt){return j*(Lo(Ir)*sl(Ir+fe*vt)-pn(Ir))/Pe}function zk(vt){return 1-Math.pow(1-vt,1.5)}var Nk=Date.now(),P_=(Te(1)-Ir)/fe,Ik=c.duration?1e3*c.duration:1e3*P_*.8;function C_(){var vt=(Date.now()-Nk)/Ik,ll=zk(vt)*P_;vt<=1?(this._flyToFrame=J(C_,this),this._move(this.unproject(h.add(v.subtract(h).multiplyBy(Ak(ll)/te)),T),this.getScaleZoom(j/gd(ll),T),{flyTo:!0})):this._move(i,s)._moveEnd(!0)}return this._moveStart(!0,c.noMoveStart),C_.call(this),this},flyToBounds:function(i,s){var c=this._getBoundsCenterZoom(i,s);return this.flyTo(c.center,c.zoom,s)},setMaxBounds:function(i){return i=Z(i),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),i.isValid()?(this.options.maxBounds=i,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(i){var s=this.options.minZoom;return this.options.minZoom=i,this._loaded&&s!==i&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(i):this},setMaxZoom:function(i){var s=this.options.maxZoom;return this.options.maxZoom=i,this._loaded&&s!==i&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(i):this},panInsideBounds:function(i,s){this._enforcingBounds=!0;var c=this.getCenter(),h=this._limitCenter(c,this._zoom,Z(i));return c.equals(h)||this.panTo(h,s),this._enforcingBounds=!1,this},panInside:function(i,s){s=s||{};var c=q(s.paddingTopLeft||s.padding||[0,0]),h=q(s.paddingBottomRight||s.padding||[0,0]),v=this.project(this.getCenter()),S=this.project(i),T=this.getPixelBounds(),j=A([T.min.add(c),T.max.subtract(h)]),W=j.getSize();if(!j.contains(S)){this._enforcingBounds=!0;var te=S.subtract(j.getCenter()),fe=j.extend(S).getSize().subtract(W);v.x+=te.x<0?-fe.x:fe.x,v.y+=te.y<0?-fe.y:fe.y,this.panTo(this.unproject(v),s),this._enforcingBounds=!1}return this},invalidateSize:function(i){if(!this._loaded)return this;i=o({animate:!1,pan:!0},i===!0?{animate:!0}:i);var s=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var c=this.getSize(),h=s.divideBy(2).round(),v=c.divideBy(2).round(),S=h.subtract(v);return!S.x&&!S.y?this:(i.animate&&i.pan?this.panBy(S):(i.pan&&this._rawPanBy(S),this.fire("move"),i.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(l(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:s,newSize:c}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(i){if(i=this._locateOptions=o({timeout:1e4,watch:!1},i),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var s=l(this._handleGeolocationResponse,this),c=l(this._handleGeolocationError,this);return i.watch?this._locationWatchId=navigator.geolocation.watchPosition(s,c,i):navigator.geolocation.getCurrentPosition(s,c,i),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(i){if(this._container._leaflet_id){var s=i.code,c=i.message||(s===1?"permission denied":s===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:s,message:"Geolocation error: "+c+"."})}},_handleGeolocationResponse:function(i){if(this._container._leaflet_id){var s=i.coords.latitude,c=i.coords.longitude,h=new re(s,c),v=h.toBounds(i.coords.accuracy*2),S=this._locateOptions;if(S.setView){var T=this.getBoundsZoom(v);this.setView(h,S.maxZoom?Math.min(T,S.maxZoom):T)}var j={latlng:h,bounds:v,timestamp:i.timestamp};for(var W in i.coords)typeof i.coords[W]=="number"&&(j[W]=i.coords[W]);this.fire("locationfound",j)}},addHandler:function(i,s){if(!s)return this;var c=this[i]=new s(this);return this._handlers.push(c),this.options[i]&&c.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),at(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(le(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var i;for(i in this._layers)this._layers[i].remove();for(i in this._panes)at(this._panes[i]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(i,s){var c="leaflet-pane"+(i?" leaflet-"+i.replace("Pane","")+"-pane":""),h=Ue("div",c,s||this._mapPane);return i&&(this._panes[i]=h),h},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var i=this.getPixelBounds(),s=this.unproject(i.getBottomLeft()),c=this.unproject(i.getTopRight());return new z(s,c)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(i,s,c){i=Z(i),c=q(c||[0,0]);var h=this.getZoom()||0,v=this.getMinZoom(),S=this.getMaxZoom(),T=i.getNorthWest(),j=i.getSouthEast(),W=this.getSize().subtract(c),te=A(this.project(j,h),this.project(T,h)).getSize(),fe=pe.any3d?this.options.zoomSnap:1,Pe=W.x/te.x,Te=W.y/te.y,pn=s?Math.max(Pe,Te):Math.min(Pe,Te);return h=this.getScaleZoom(pn,h),fe&&(h=Math.round(h/(fe/100))*(fe/100),h=s?Math.ceil(h/fe)*fe:Math.floor(h/fe)*fe),Math.max(v,Math.min(S,h))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new M(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(i,s){var c=this._getTopLeftPoint(i,s);return new O(c,c.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(i){return this.options.crs.getProjectedBounds(i===void 0?this.getZoom():i)},getPane:function(i){return typeof i=="string"?this._panes[i]:i},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(i,s){var c=this.options.crs;return s=s===void 0?this._zoom:s,c.scale(i)/c.scale(s)},getScaleZoom:function(i,s){var c=this.options.crs;s=s===void 0?this._zoom:s;var h=c.zoom(i*c.scale(s));return isNaN(h)?1/0:h},project:function(i,s){return s=s===void 0?this._zoom:s,this.options.crs.latLngToPoint(ue(i),s)},unproject:function(i,s){return s=s===void 0?this._zoom:s,this.options.crs.pointToLatLng(q(i),s)},layerPointToLatLng:function(i){var s=q(i).add(this.getPixelOrigin());return this.unproject(s)},latLngToLayerPoint:function(i){var s=this.project(ue(i))._round();return s._subtract(this.getPixelOrigin())},wrapLatLng:function(i){return this.options.crs.wrapLatLng(ue(i))},wrapLatLngBounds:function(i){return this.options.crs.wrapLatLngBounds(Z(i))},distance:function(i,s){return this.options.crs.distance(ue(i),ue(s))},containerPointToLayerPoint:function(i){return q(i).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(i){return q(i).add(this._getMapPanePos())},containerPointToLatLng:function(i){var s=this.containerPointToLayerPoint(q(i));return this.layerPointToLatLng(s)},latLngToContainerPoint:function(i){return this.layerPointToContainerPoint(this.latLngToLayerPoint(ue(i)))},mouseEventToContainerPoint:function(i){return Zm(i,this._container)},mouseEventToLayerPoint:function(i){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(i))},mouseEventToLatLng:function(i){return this.layerPointToLatLng(this.mouseEventToLayerPoint(i))},_initContainer:function(i){var s=this._container=Um(i);if(s){if(s._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");Ee(s,"scroll",this._onScroll,this),this._containerId=d(s)},_initLayout:function(){var i=this._container;this._fadeAnimated=this.options.fadeAnimation&&pe.any3d,Oe(i,"leaflet-container"+(pe.touch?" leaflet-touch":"")+(pe.retina?" leaflet-retina":"")+(pe.ielt9?" leaflet-oldie":"")+(pe.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var s=va(i,"position");s!=="absolute"&&s!=="relative"&&s!=="fixed"&&s!=="sticky"&&(i.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var i=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),gt(this._mapPane,new M(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Oe(i.markerPane,"leaflet-zoom-hide"),Oe(i.shadowPane,"leaflet-zoom-hide"))},_resetView:function(i,s,c){gt(this._mapPane,new M(0,0));var h=!this._loaded;this._loaded=!0,s=this._limitZoom(s),this.fire("viewprereset");var v=this._zoom!==s;this._moveStart(v,c)._move(i,s)._moveEnd(v),this.fire("viewreset"),h&&this.fire("load")},_moveStart:function(i,s){return i&&this.fire("zoomstart"),s||this.fire("movestart"),this},_move:function(i,s,c,h){s===void 0&&(s=this._zoom);var v=this._zoom!==s;return this._zoom=s,this._lastCenter=i,this._pixelOrigin=this._getNewPixelOrigin(i),h?c&&c.pinch&&this.fire("zoom",c):((v||c&&c.pinch)&&this.fire("zoom",c),this.fire("move",c)),this},_moveEnd:function(i){return i&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return le(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(i){gt(this._mapPane,this._getMapPanePos().subtract(i))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(i){this._targets={},this._targets[d(this._container)]=this;var s=i?Ye:Ee;s(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&s(window,"resize",this._onResize,this),pe.any3d&&this.options.transform3DLimit&&(i?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){le(this._resizeRequest),this._resizeRequest=J(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var i=this._getMapPanePos();Math.max(Math.abs(i.x),Math.abs(i.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(i,s){for(var c=[],h,v=s==="mouseout"||s==="mouseover",S=i.target||i.srcElement,T=!1;S;){if(h=this._targets[d(S)],h&&(s==="click"||s==="preclick")&&this._draggableMoved(h)){T=!0;break}if(h&&h.listens(s,!0)&&(v&&!sd(S,i)||(c.push(h),v))||S===this._container)break;S=S.parentNode}return!c.length&&!T&&!v&&this.listens(s,!0)&&(c=[this]),c},_isClickDisabled:function(i){for(;i&&i!==this._container;){if(i._leaflet_disable_click)return!0;i=i.parentNode}},_handleDOMEvent:function(i){var s=i.target||i.srcElement;if(!(!this._loaded||s._leaflet_disable_events||i.type==="click"&&this._isClickDisabled(s))){var c=i.type;c==="mousedown"&&td(s),this._fireDOMEvent(i,c)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(i,s,c){if(i.type==="click"){var h=o({},i);h.type="preclick",this._fireDOMEvent(h,h.type,c)}var v=this._findEventTargets(i,s);if(c){for(var S=[],T=0;T<c.length;T++)c[T].listens(s,!0)&&S.push(c[T]);v=S.concat(v)}if(v.length){s==="contextmenu"&&Tt(i);var j=v[0],W={originalEvent:i};if(i.type!=="keypress"&&i.type!=="keydown"&&i.type!=="keyup"){var te=j.getLatLng&&(!j._radius||j._radius<=10);W.containerPoint=te?this.latLngToContainerPoint(j.getLatLng()):this.mouseEventToContainerPoint(i),W.layerPoint=this.containerPointToLayerPoint(W.containerPoint),W.latlng=te?j.getLatLng():this.layerPointToLatLng(W.layerPoint)}for(T=0;T<v.length;T++)if(v[T].fire(s,W,!0),W.originalEvent._stopped||v[T].options.bubblingMouseEvents===!1&&C(this._mouseEvents,s)!==-1)return}},_draggableMoved:function(i){return i=i.dragging&&i.dragging.enabled()?i:this,i.dragging&&i.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var i=0,s=this._handlers.length;i<s;i++)this._handlers[i].disable()},whenReady:function(i,s){return this._loaded?i.call(s||this,{target:this}):this.on("load",i,s),this},_getMapPanePos:function(){return Po(this._mapPane)||new M(0,0)},_moved:function(){var i=this._getMapPanePos();return i&&!i.equals([0,0])},_getTopLeftPoint:function(i,s){var c=i&&s!==void 0?this._getNewPixelOrigin(i,s):this.getPixelOrigin();return c.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(i,s){var c=this.getSize()._divideBy(2);return this.project(i,s)._subtract(c)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(i,s,c){var h=this._getNewPixelOrigin(c,s);return this.project(i,s)._subtract(h)},_latLngBoundsToNewLayerBounds:function(i,s,c){var h=this._getNewPixelOrigin(c,s);return A([this.project(i.getSouthWest(),s)._subtract(h),this.project(i.getNorthWest(),s)._subtract(h),this.project(i.getSouthEast(),s)._subtract(h),this.project(i.getNorthEast(),s)._subtract(h)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(i){return this.latLngToLayerPoint(i).subtract(this._getCenterLayerPoint())},_limitCenter:function(i,s,c){if(!c)return i;var h=this.project(i,s),v=this.getSize().divideBy(2),S=new O(h.subtract(v),h.add(v)),T=this._getBoundsOffset(S,c,s);return Math.abs(T.x)<=1&&Math.abs(T.y)<=1?i:this.unproject(h.add(T),s)},_limitOffset:function(i,s){if(!s)return i;var c=this.getPixelBounds(),h=new O(c.min.add(i),c.max.add(i));return i.add(this._getBoundsOffset(h,s))},_getBoundsOffset:function(i,s,c){var h=A(this.project(s.getNorthEast(),c),this.project(s.getSouthWest(),c)),v=h.min.subtract(i.min),S=h.max.subtract(i.max),T=this._rebound(v.x,-S.x),j=this._rebound(v.y,-S.y);return new M(T,j)},_rebound:function(i,s){return i+s>0?Math.round(i-s)/2:Math.max(0,Math.ceil(i))-Math.max(0,Math.floor(s))},_limitZoom:function(i){var s=this.getMinZoom(),c=this.getMaxZoom(),h=pe.any3d?this.options.zoomSnap:1;return h&&(i=Math.round(i/h)*h),Math.max(s,Math.min(c,i))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){pt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(i,s){var c=this._getCenterOffset(i)._trunc();return(s&&s.animate)!==!0&&!this.getSize().contains(c)?!1:(this.panBy(c,s),!0)},_createAnimProxy:function(){var i=this._proxy=Ue("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(i),this.on("zoomanim",function(s){var c=Kc,h=this._proxy.style[c];So(this._proxy,this.project(s.center,s.zoom),this.getZoomScale(s.zoom,1)),h===this._proxy.style[c]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){at(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var i=this.getCenter(),s=this.getZoom();So(this._proxy,this.project(i,s),this.getZoomScale(s,1))},_catchTransitionEnd:function(i){this._animatingZoom&&i.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(i,s,c){if(this._animatingZoom)return!0;if(c=c||{},!this._zoomAnimated||c.animate===!1||this._nothingToAnimate()||Math.abs(s-this._zoom)>this.options.zoomAnimationThreshold)return!1;var h=this.getZoomScale(s),v=this._getCenterOffset(i)._divideBy(1-1/h);return c.animate!==!0&&!this.getSize().contains(v)?!1:(J(function(){this._moveStart(!0,!1)._animateZoom(i,s,!0)},this),!0)},_animateZoom:function(i,s,c,h){this._mapPane&&(c&&(this._animatingZoom=!0,this._animateToCenter=i,this._animateToZoom=s,Oe(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:i,zoom:s,noUpdate:h}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(l(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&pt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Q1(i,s){return new De(i,s)}var Sn=Q.extend({options:{position:"topright"},initialize:function(i){w(this,i)},getPosition:function(){return this.options.position},setPosition:function(i){var s=this._map;return s&&s.removeControl(this),this.options.position=i,s&&s.addControl(this),this},getContainer:function(){return this._container},addTo:function(i){this.remove(),this._map=i;var s=this._container=this.onAdd(i),c=this.getPosition(),h=i._controlCorners[c];return Oe(s,"leaflet-control"),c.indexOf("bottom")!==-1?h.insertBefore(s,h.firstChild):h.appendChild(s),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(at(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(i){this._map&&i&&i.screenX>0&&i.screenY>0&&this._map.getContainer().focus()}}),ka=function(i){return new Sn(i)};De.include({addControl:function(i){return i.addTo(this),this},removeControl:function(i){return i.remove(),this},_initControlPos:function(){var i=this._controlCorners={},s="leaflet-",c=this._controlContainer=Ue("div",s+"control-container",this._container);function h(v,S){var T=s+v+" "+s+S;i[v+S]=Ue("div",T,c)}h("top","left"),h("top","right"),h("bottom","left"),h("bottom","right")},_clearControlPos:function(){for(var i in this._controlCorners)at(this._controlCorners[i]);at(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Km=Sn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(i,s,c,h){return c<h?-1:h<c?1:0}},initialize:function(i,s,c){w(this,c),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1;for(var h in i)this._addLayer(i[h],h);for(h in s)this._addLayer(s[h],h,!0)},onAdd:function(i){this._initLayout(),this._update(),this._map=i,i.on("zoomend",this._checkDisabledLayers,this);for(var s=0;s<this._layers.length;s++)this._layers[s].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(i){return Sn.prototype.addTo.call(this,i),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(i,s){return this._addLayer(i,s),this._map?this._update():this},addOverlay:function(i,s){return this._addLayer(i,s,!0),this._map?this._update():this},removeLayer:function(i){i.off("add remove",this._onLayerChange,this);var s=this._getLayer(d(i));return s&&this._layers.splice(this._layers.indexOf(s),1),this._map?this._update():this},expand:function(){Oe(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var i=this._map.getSize().y-(this._container.offsetTop+50);return i<this._section.clientHeight?(Oe(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=i+"px"):pt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return pt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var i="leaflet-control-layers",s=this._container=Ue("div",i),c=this.options.collapsed;s.setAttribute("aria-haspopup",!0),wa(s),ad(s);var h=this._section=Ue("section",i+"-list");c&&(this._map.on("click",this.collapse,this),Ee(s,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var v=this._layersLink=Ue("a",i+"-toggle",s);v.href="#",v.title="Layers",v.setAttribute("role","button"),Ee(v,{keydown:function(S){S.keyCode===13&&this._expandSafely()},click:function(S){Tt(S),this._expandSafely()}},this),c||this.expand(),this._baseLayersList=Ue("div",i+"-base",h),this._separator=Ue("div",i+"-separator",h),this._overlaysList=Ue("div",i+"-overlays",h),s.appendChild(h)},_getLayer:function(i){for(var s=0;s<this._layers.length;s++)if(this._layers[s]&&d(this._layers[s].layer)===i)return this._layers[s]},_addLayer:function(i,s,c){this._map&&i.on("add remove",this._onLayerChange,this),this._layers.push({layer:i,name:s,overlay:c}),this.options.sortLayers&&this._layers.sort(l(function(h,v){return this.options.sortFunction(h.layer,v.layer,h.name,v.name)},this)),this.options.autoZIndex&&i.setZIndex&&(this._lastZIndex++,i.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Zs(this._baseLayersList),Zs(this._overlaysList),this._layerControlInputs=[];var i,s,c,h,v=0;for(c=0;c<this._layers.length;c++)h=this._layers[c],this._addItem(h),s=s||h.overlay,i=i||!h.overlay,v+=h.overlay?0:1;return this.options.hideSingleBase&&(i=i&&v>1,this._baseLayersList.style.display=i?"":"none"),this._separator.style.display=s&&i?"":"none",this},_onLayerChange:function(i){this._handlingClick||this._update();var s=this._getLayer(d(i.target)),c=s.overlay?i.type==="add"?"overlayadd":"overlayremove":i.type==="add"?"baselayerchange":null;c&&this._map.fire(c,s)},_createRadioElement:function(i,s){var c='<input type="radio" class="leaflet-control-layers-selector" name="'+i+'"'+(s?' checked="checked"':"")+"/>",h=document.createElement("div");return h.innerHTML=c,h.firstChild},_addItem:function(i){var s=document.createElement("label"),c=this._map.hasLayer(i.layer),h;i.overlay?(h=document.createElement("input"),h.type="checkbox",h.className="leaflet-control-layers-selector",h.defaultChecked=c):h=this._createRadioElement("leaflet-base-layers_"+d(this),c),this._layerControlInputs.push(h),h.layerId=d(i.layer),Ee(h,"click",this._onInputClick,this);var v=document.createElement("span");v.innerHTML=" "+i.name;var S=document.createElement("span");s.appendChild(S),S.appendChild(h),S.appendChild(v);var T=i.overlay?this._overlaysList:this._baseLayersList;return T.appendChild(s),this._checkDisabledLayers(),s},_onInputClick:function(){var i=this._layerControlInputs,s,c,h=[],v=[];this._handlingClick=!0;for(var S=i.length-1;S>=0;S--)s=i[S],c=this._getLayer(s.layerId).layer,s.checked?h.push(c):s.checked||v.push(c);for(S=0;S<v.length;S++)this._map.hasLayer(v[S])&&this._map.removeLayer(v[S]);for(S=0;S<h.length;S++)this._map.hasLayer(h[S])||this._map.addLayer(h[S]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var i=this._layerControlInputs,s,c,h=this._map.getZoom(),v=i.length-1;v>=0;v--)s=i[v],c=this._getLayer(s.layerId).layer,s.disabled=c.options.minZoom!==void 0&&h<c.options.minZoom||c.options.maxZoom!==void 0&&h>c.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var i=this._section;Ee(i,"click",Tt),this.expand(),setTimeout(function(){Ye(i,"click",Tt)})}}),G1=function(i,s,c){return new Km(i,s,c)},ld=Sn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(i){var s="leaflet-control-zoom",c=Ue("div",s+" leaflet-bar"),h=this.options;return this._zoomInButton=this._createButton(h.zoomInText,h.zoomInTitle,s+"-in",c,this._zoomIn),this._zoomOutButton=this._createButton(h.zoomOutText,h.zoomOutTitle,s+"-out",c,this._zoomOut),this._updateDisabled(),i.on("zoomend zoomlevelschange",this._updateDisabled,this),c},onRemove:function(i){i.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(i){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(i.shiftKey?3:1))},_zoomOut:function(i){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(i.shiftKey?3:1))},_createButton:function(i,s,c,h,v){var S=Ue("a",c,h);return S.innerHTML=i,S.href="#",S.title=s,S.setAttribute("role","button"),S.setAttribute("aria-label",s),wa(S),Ee(S,"click",Eo),Ee(S,"click",v,this),Ee(S,"click",this._refocusOnMap,this),S},_updateDisabled:function(){var i=this._map,s="leaflet-disabled";pt(this._zoomInButton,s),pt(this._zoomOutButton,s),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||i._zoom===i.getMinZoom())&&(Oe(this._zoomOutButton,s),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||i._zoom===i.getMaxZoom())&&(Oe(this._zoomInButton,s),this._zoomInButton.setAttribute("aria-disabled","true"))}});De.mergeOptions({zoomControl:!0}),De.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new ld,this.addControl(this.zoomControl))});var J1=function(i){return new ld(i)},Qm=Sn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(i){var s="leaflet-control-scale",c=Ue("div",s),h=this.options;return this._addScales(h,s+"-line",c),i.on(h.updateWhenIdle?"moveend":"move",this._update,this),i.whenReady(this._update,this),c},onRemove:function(i){i.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(i,s,c){i.metric&&(this._mScale=Ue("div",s,c)),i.imperial&&(this._iScale=Ue("div",s,c))},_update:function(){var i=this._map,s=i.getSize().y/2,c=i.distance(i.containerPointToLatLng([0,s]),i.containerPointToLatLng([this.options.maxWidth,s]));this._updateScales(c)},_updateScales:function(i){this.options.metric&&i&&this._updateMetric(i),this.options.imperial&&i&&this._updateImperial(i)},_updateMetric:function(i){var s=this._getRoundNum(i),c=s<1e3?s+" m":s/1e3+" km";this._updateScale(this._mScale,c,s/i)},_updateImperial:function(i){var s=i*3.2808399,c,h,v;s>5280?(c=s/5280,h=this._getRoundNum(c),this._updateScale(this._iScale,h+" mi",h/c)):(v=this._getRoundNum(s),this._updateScale(this._iScale,v+" ft",v/s))},_updateScale:function(i,s,c){i.style.width=Math.round(this.options.maxWidth*c)+"px",i.innerHTML=s},_getRoundNum:function(i){var s=Math.pow(10,(Math.floor(i)+"").length-1),c=i/s;return c=c>=10?10:c>=5?5:c>=3?3:c>=2?2:1,s*c}}),Y1=function(i){return new Qm(i)},X1='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',ud=Sn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(pe.inlineSvg?X1+" ":"")+"Leaflet</a>"},initialize:function(i){w(this,i),this._attributions={}},onAdd:function(i){i.attributionControl=this,this._container=Ue("div","leaflet-control-attribution"),wa(this._container);for(var s in i._layers)i._layers[s].getAttribution&&this.addAttribution(i._layers[s].getAttribution());return this._update(),i.on("layeradd",this._addAttribution,this),this._container},onRemove:function(i){i.off("layeradd",this._addAttribution,this)},_addAttribution:function(i){i.layer.getAttribution&&(this.addAttribution(i.layer.getAttribution()),i.layer.once("remove",function(){this.removeAttribution(i.layer.getAttribution())},this))},setPrefix:function(i){return this.options.prefix=i,this._update(),this},addAttribution:function(i){return i?(this._attributions[i]||(this._attributions[i]=0),this._attributions[i]++,this._update(),this):this},removeAttribution:function(i){return i?(this._attributions[i]&&(this._attributions[i]--,this._update()),this):this},_update:function(){if(this._map){var i=[];for(var s in this._attributions)this._attributions[s]&&i.push(s);var c=[];this.options.prefix&&c.push(this.options.prefix),i.length&&c.push(i.join(", ")),this._container.innerHTML=c.join(' <span aria-hidden="true">|</span> ')}}});De.mergeOptions({attributionControl:!0}),De.addInitHook(function(){this.options.attributionControl&&new ud().addTo(this)});var ek=function(i){return new ud(i)};Sn.Layers=Km,Sn.Zoom=ld,Sn.Scale=Qm,Sn.Attribution=ud,ka.layers=G1,ka.zoom=J1,ka.scale=Y1,ka.attribution=ek;var Zn=Q.extend({initialize:function(i){this._map=i},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Zn.addTo=function(i,s){return i.addHandler(s,this),this};var tk={Events:Y},Gm=pe.touch?"touchstart mousedown":"mousedown",zr=B.extend({options:{clickTolerance:3},initialize:function(i,s,c,h){w(this,h),this._element=i,this._dragStartTarget=s||i,this._preventOutline=c},enable:function(){this._enabled||(Ee(this._dragStartTarget,Gm,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(zr._dragging===this&&this.finishDrag(!0),Ye(this._dragStartTarget,Gm,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(i){if(this._enabled&&(this._moved=!1,!Qc(this._element,"leaflet-zoom-anim"))){if(i.touches&&i.touches.length!==1){zr._dragging===this&&this.finishDrag();return}if(!(zr._dragging||i.shiftKey||i.which!==1&&i.button!==1&&!i.touches)&&(zr._dragging=this,this._preventOutline&&td(this._element),Yc(),ya(),!this._moving)){this.fire("down");var s=i.touches?i.touches[0]:i,c=$m(this._element);this._startPoint=new M(s.clientX,s.clientY),this._startPos=Po(this._element),this._parentScale=nd(c);var h=i.type==="mousedown";Ee(document,h?"mousemove":"touchmove",this._onMove,this),Ee(document,h?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(i){if(this._enabled){if(i.touches&&i.touches.length>1){this._moved=!0;return}var s=i.touches&&i.touches.length===1?i.touches[0]:i,c=new M(s.clientX,s.clientY)._subtract(this._startPoint);!c.x&&!c.y||Math.abs(c.x)+Math.abs(c.y)<this.options.clickTolerance||(c.x/=this._parentScale.x,c.y/=this._parentScale.y,Tt(i),this._moved||(this.fire("dragstart"),this._moved=!0,Oe(document.body,"leaflet-dragging"),this._lastTarget=i.target||i.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Oe(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(c),this._moving=!0,this._lastEvent=i,this._updatePosition())}},_updatePosition:function(){var i={originalEvent:this._lastEvent};this.fire("predrag",i),gt(this._element,this._newPos),this.fire("drag",i)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(i){pt(document.body,"leaflet-dragging"),this._lastTarget&&(pt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Ye(document,"mousemove touchmove",this._onMove,this),Ye(document,"mouseup touchend touchcancel",this._onUp,this),Xc(),ba(),this._moved&&this._moving&&this.fire("dragend",{noInertia:i,distance:this._newPos.distanceTo(this._startPos)}),this._moving=!1,zr._dragging=!1}});function Jm(i,s){if(!s||!i.length)return i.slice();var c=s*s;return i=ok(i,c),i=rk(i,c),i}function Ym(i,s,c){return Math.sqrt(Sa(i,s,c,!0))}function nk(i,s,c){return Sa(i,s,c)}function rk(i,s){var c=i.length,h=typeof Uint8Array!=void 0+""?Uint8Array:Array,v=new h(c);v[0]=v[c-1]=1,cd(i,v,s,0,c-1);var S,T=[];for(S=0;S<c;S++)v[S]&&T.push(i[S]);return T}function cd(i,s,c,h,v){var S=0,T,j,W;for(j=h+1;j<=v-1;j++)W=Sa(i[j],i[h],i[v],!0),W>S&&(T=j,S=W);S>c&&(s[T]=1,cd(i,s,c,h,T),cd(i,s,c,T,v))}function ok(i,s){for(var c=[i[0]],h=1,v=0,S=i.length;h<S;h++)ik(i[h],i[v])>s&&(c.push(i[h]),v=h);return v<S-1&&c.push(i[S-1]),c}var Xm;function e_(i,s,c,h,v){var S=h?Xm:Oo(i,c),T=Oo(s,c),j,W,te;for(Xm=T;;){if(!(S|T))return[i,s];if(S&T)return!1;j=S||T,W=Gs(i,s,j,c,v),te=Oo(W,c),j===S?(i=W,S=te):(s=W,T=te)}}function Gs(i,s,c,h,v){var S=s.x-i.x,T=s.y-i.y,j=h.min,W=h.max,te,fe;return c&8?(te=i.x+S*(W.y-i.y)/T,fe=W.y):c&4?(te=i.x+S*(j.y-i.y)/T,fe=j.y):c&2?(te=W.x,fe=i.y+T*(W.x-i.x)/S):c&1&&(te=j.x,fe=i.y+T*(j.x-i.x)/S),new M(te,fe,v)}function Oo(i,s){var c=0;return i.x<s.min.x?c|=1:i.x>s.max.x&&(c|=2),i.y<s.min.y?c|=4:i.y>s.max.y&&(c|=8),c}function ik(i,s){var c=s.x-i.x,h=s.y-i.y;return c*c+h*h}function Sa(i,s,c,h){var v=s.x,S=s.y,T=c.x-v,j=c.y-S,W=T*T+j*j,te;return W>0&&(te=((i.x-v)*T+(i.y-S)*j)/W,te>1?(v=c.x,S=c.y):te>0&&(v+=T*te,S+=j*te)),T=i.x-v,j=i.y-S,h?T*T+j*j:new M(v,S)}function hn(i){return!k(i[0])||typeof i[0][0]!="object"&&typeof i[0][0]<"u"}function t_(i){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),hn(i)}function n_(i,s){var c,h,v,S,T,j,W,te;if(!i||i.length===0)throw new Error("latlngs not passed");hn(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var fe=[];for(var Pe in i)fe.push(s.project(ue(i[Pe])));var Te=fe.length;for(c=0,h=0;c<Te-1;c++)h+=fe[c].distanceTo(fe[c+1])/2;if(h===0)te=fe[0];else for(c=0,S=0;c<Te-1;c++)if(T=fe[c],j=fe[c+1],v=T.distanceTo(j),S+=v,S>h){W=(S-h)/v,te=[j.x-W*(j.x-T.x),j.y-W*(j.y-T.y)];break}return s.unproject(q(te))}var ak={__proto__:null,simplify:Jm,pointToSegmentDistance:Ym,closestPointOnSegment:nk,clipSegment:e_,_getEdgeIntersection:Gs,_getBitCode:Oo,_sqClosestPointOnSegment:Sa,isFlat:hn,_flat:t_,polylineCenter:n_};function r_(i,s,c){var h,v=[1,4,2,8],S,T,j,W,te,fe,Pe,Te;for(S=0,fe=i.length;S<fe;S++)i[S]._code=Oo(i[S],s);for(j=0;j<4;j++){for(Pe=v[j],h=[],S=0,fe=i.length,T=fe-1;S<fe;T=S++)W=i[S],te=i[T],W._code&Pe?te._code&Pe||(Te=Gs(te,W,Pe,s,c),Te._code=Oo(Te,s),h.push(Te)):(te._code&Pe&&(Te=Gs(te,W,Pe,s,c),Te._code=Oo(Te,s),h.push(Te)),h.push(W));i=h}return i}function o_(i,s){var c,h,v,S,T,j,W,te,fe;if(!i||i.length===0)throw new Error("latlngs not passed");hn(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var Pe=[];for(var Te in i)Pe.push(s.project(ue(i[Te])));var pn=Pe.length;for(j=W=te=0,c=0,h=pn-1;c<pn;h=c++)v=Pe[c],S=Pe[h],T=v.y*S.x-S.y*v.x,W+=(v.x+S.x)*T,te+=(v.y+S.y)*T,j+=T*3;return j===0?fe=Pe[0]:fe=[W/j,te/j],s.unproject(q(fe))}var sk={__proto__:null,clipPolygon:r_,polygonCenter:o_},dd={project:function(i){return new M(i.lng,i.lat)},unproject:function(i){return new re(i.y,i.x)},bounds:new O([-180,-90],[180,90])},fd={R:6378137,R_MINOR:6356752314245179e-9,bounds:new O([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(i){var s=Math.PI/180,c=this.R,h=i.lat*s,v=this.R_MINOR/c,S=Math.sqrt(1-v*v),T=S*Math.sin(h),j=Math.tan(Math.PI/4-h/2)/Math.pow((1-T)/(1+T),S/2);return h=-c*Math.log(Math.max(j,1e-10)),new M(i.lng*s*c,h)},unproject:function(i){for(var s=180/Math.PI,c=this.R,h=this.R_MINOR/c,v=Math.sqrt(1-h*h),S=Math.exp(-i.y/c),T=Math.PI/2-2*Math.atan(S),j=0,W=.1,te;j<15&&Math.abs(W)>1e-7;j++)te=v*Math.sin(T),te=Math.pow((1-te)/(1+te),v/2),W=Math.PI/2-2*Math.atan(S*te)-T,T+=W;return new re(T*s,i.x*s/c)}},lk={__proto__:null,LonLat:dd,Mercator:fd,SphericalMercator:et},uk=o({},be,{code:"EPSG:3395",projection:fd,transformation:function(){var i=.5/(Math.PI*fd.R);return Le(i,.5,-i,.5)}()}),i_=o({},be,{code:"EPSG:4326",projection:dd,transformation:Le(1/180,1,-1/180,.5)}),ck=o({},de,{projection:dd,transformation:Le(1,0,-1,0),scale:function(i){return Math.pow(2,i)},zoom:function(i){return Math.log(i)/Math.LN2},distance:function(i,s){var c=s.lng-i.lng,h=s.lat-i.lat;return Math.sqrt(c*c+h*h)},infinite:!0});de.Earth=be,de.EPSG3395=uk,de.EPSG3857=tt,de.EPSG900913=oe,de.EPSG4326=i_,de.Simple=ck;var Pn=B.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(i){return i.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(i){return i&&i.removeLayer(this),this},getPane:function(i){return this._map.getPane(i?this.options[i]||i:this.options.pane)},addInteractiveTarget:function(i){return this._map._targets[d(i)]=this,this},removeInteractiveTarget:function(i){return delete this._map._targets[d(i)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(i){var s=i.target;if(s.hasLayer(this)){if(this._map=s,this._zoomAnimated=s._zoomAnimated,this.getEvents){var c=this.getEvents();s.on(c,this),this.once("remove",function(){s.off(c,this)},this)}this.onAdd(s),this.fire("add"),s.fire("layeradd",{layer:this})}}});De.include({addLayer:function(i){if(!i._layerAdd)throw new Error("The provided object is not a Layer.");var s=d(i);return this._layers[s]?this:(this._layers[s]=i,i._mapToAdd=this,i.beforeAdd&&i.beforeAdd(this),this.whenReady(i._layerAdd,i),this)},removeLayer:function(i){var s=d(i);return this._layers[s]?(this._loaded&&i.onRemove(this),delete this._layers[s],this._loaded&&(this.fire("layerremove",{layer:i}),i.fire("remove")),i._map=i._mapToAdd=null,this):this},hasLayer:function(i){return d(i)in this._layers},eachLayer:function(i,s){for(var c in this._layers)i.call(s,this._layers[c]);return this},_addLayers:function(i){i=i?k(i)?i:[i]:[];for(var s=0,c=i.length;s<c;s++)this.addLayer(i[s])},_addZoomLimit:function(i){(!isNaN(i.options.maxZoom)||!isNaN(i.options.minZoom))&&(this._zoomBoundLayers[d(i)]=i,this._updateZoomLevels())},_removeZoomLimit:function(i){var s=d(i);this._zoomBoundLayers[s]&&(delete this._zoomBoundLayers[s],this._updateZoomLevels())},_updateZoomLevels:function(){var i=1/0,s=-1/0,c=this._getZoomSpan();for(var h in this._zoomBoundLayers){var v=this._zoomBoundLayers[h].options;i=v.minZoom===void 0?i:Math.min(i,v.minZoom),s=v.maxZoom===void 0?s:Math.max(s,v.maxZoom)}this._layersMaxZoom=s===-1/0?void 0:s,this._layersMinZoom=i===1/0?void 0:i,c!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var fi=Pn.extend({initialize:function(i,s){w(this,s),this._layers={};var c,h;if(i)for(c=0,h=i.length;c<h;c++)this.addLayer(i[c])},addLayer:function(i){var s=this.getLayerId(i);return this._layers[s]=i,this._map&&this._map.addLayer(i),this},removeLayer:function(i){var s=i in this._layers?i:this.getLayerId(i);return this._map&&this._layers[s]&&this._map.removeLayer(this._layers[s]),delete this._layers[s],this},hasLayer:function(i){var s=typeof i=="number"?i:this.getLayerId(i);return s in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(i){var s=Array.prototype.slice.call(arguments,1),c,h;for(c in this._layers)h=this._layers[c],h[i]&&h[i].apply(h,s);return this},onAdd:function(i){this.eachLayer(i.addLayer,i)},onRemove:function(i){this.eachLayer(i.removeLayer,i)},eachLayer:function(i,s){for(var c in this._layers)i.call(s,this._layers[c]);return this},getLayer:function(i){return this._layers[i]},getLayers:function(){var i=[];return this.eachLayer(i.push,i),i},setZIndex:function(i){return this.invoke("setZIndex",i)},getLayerId:function(i){return d(i)}}),dk=function(i,s){return new fi(i,s)},cr=fi.extend({addLayer:function(i){return this.hasLayer(i)?this:(i.addEventParent(this),fi.prototype.addLayer.call(this,i),this.fire("layeradd",{layer:i}))},removeLayer:function(i){return this.hasLayer(i)?(i in this._layers&&(i=this._layers[i]),i.removeEventParent(this),fi.prototype.removeLayer.call(this,i),this.fire("layerremove",{layer:i})):this},setStyle:function(i){return this.invoke("setStyle",i)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var i=new z;for(var s in this._layers){var c=this._layers[s];i.extend(c.getBounds?c.getBounds():c.getLatLng())}return i}}),fk=function(i,s){return new cr(i,s)},hi=Q.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(i){w(this,i)},createIcon:function(i){return this._createIcon("icon",i)},createShadow:function(i){return this._createIcon("shadow",i)},_createIcon:function(i,s){var c=this._getIconUrl(i);if(!c){if(i==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var h=this._createImg(c,s&&s.tagName==="IMG"?s:null);return this._setIconStyles(h,i),(this.options.crossOrigin||this.options.crossOrigin==="")&&(h.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),h},_setIconStyles:function(i,s){var c=this.options,h=c[s+"Size"];typeof h=="number"&&(h=[h,h]);var v=q(h),S=q(s==="shadow"&&c.shadowAnchor||c.iconAnchor||v&&v.divideBy(2,!0));i.className="leaflet-marker-"+s+" "+(c.className||""),S&&(i.style.marginLeft=-S.x+"px",i.style.marginTop=-S.y+"px"),v&&(i.style.width=v.x+"px",i.style.height=v.y+"px")},_createImg:function(i,s){return s=s||document.createElement("img"),s.src=i,s},_getIconUrl:function(i){return pe.retina&&this.options[i+"RetinaUrl"]||this.options[i+"Url"]}});function hk(i){return new hi(i)}var Pa=hi.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(i){return typeof Pa.imagePath!="string"&&(Pa.imagePath=this._detectIconPath()),(this.options.imagePath||Pa.imagePath)+hi.prototype._getIconUrl.call(this,i)},_stripUrl:function(i){var s=function(c,h,v){var S=h.exec(c);return S&&S[v]};return i=s(i,/^url\((['"])?(.+)\1\)$/,2),i&&s(i,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var i=Ue("div","leaflet-default-icon-path",document.body),s=va(i,"background-image")||va(i,"backgroundImage");if(document.body.removeChild(i),s=this._stripUrl(s),s)return s;var c=document.querySelector('link[href$="leaflet.css"]');return c?c.href.substring(0,c.href.length-11-1):""}}),a_=Zn.extend({initialize:function(i){this._marker=i},addHooks:function(){var i=this._marker._icon;this._draggable||(this._draggable=new zr(i,i,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Oe(i,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&pt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(i){var s=this._marker,c=s._map,h=this._marker.options.autoPanSpeed,v=this._marker.options.autoPanPadding,S=Po(s._icon),T=c.getPixelBounds(),j=c.getPixelOrigin(),W=A(T.min._subtract(j).add(v),T.max._subtract(j).subtract(v));if(!W.contains(S)){var te=q((Math.max(W.max.x,S.x)-W.max.x)/(T.max.x-W.max.x)-(Math.min(W.min.x,S.x)-W.min.x)/(T.min.x-W.min.x),(Math.max(W.max.y,S.y)-W.max.y)/(T.max.y-W.max.y)-(Math.min(W.min.y,S.y)-W.min.y)/(T.min.y-W.min.y)).multiplyBy(h);c.panBy(te,{animate:!1}),this._draggable._newPos._add(te),this._draggable._startPos._add(te),gt(s._icon,this._draggable._newPos),this._onDrag(i),this._panRequest=J(this._adjustPan.bind(this,i))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(i){this._marker.options.autoPan&&(le(this._panRequest),this._panRequest=J(this._adjustPan.bind(this,i)))},_onDrag:function(i){var s=this._marker,c=s._shadow,h=Po(s._icon),v=s._map.layerPointToLatLng(h);c&&gt(c,h),s._latlng=v,i.latlng=v,i.oldLatLng=this._oldLatLng,s.fire("move",i).fire("drag",i)},_onDragEnd:function(i){le(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",i)}}),Js=Pn.extend({options:{icon:new Pa,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(i,s){w(this,s),this._latlng=ue(i)},onAdd:function(i){this._zoomAnimated=this._zoomAnimated&&i.options.markerZoomAnimation,this._zoomAnimated&&i.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(i){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&i.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(i){var s=this._latlng;return this._latlng=ue(i),this.update(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},setZIndexOffset:function(i){return this.options.zIndexOffset=i,this.update()},getIcon:function(){return this.options.icon},setIcon:function(i){return this.options.icon=i,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var i=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(i)}return this},_initIcon:function(){var i=this.options,s="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),c=i.icon.createIcon(this._icon),h=!1;c!==this._icon&&(this._icon&&this._removeIcon(),h=!0,i.title&&(c.title=i.title),c.tagName==="IMG"&&(c.alt=i.alt||"")),Oe(c,s),i.keyboard&&(c.tabIndex="0",c.setAttribute("role","button")),this._icon=c,i.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Ee(c,"focus",this._panOnFocus,this);var v=i.icon.createShadow(this._shadow),S=!1;v!==this._shadow&&(this._removeShadow(),S=!0),v&&(Oe(v,s),v.alt=""),this._shadow=v,i.opacity<1&&this._updateOpacity(),h&&this.getPane().appendChild(this._icon),this._initInteraction(),v&&S&&this.getPane(i.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Ye(this._icon,"focus",this._panOnFocus,this),at(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&at(this._shadow),this._shadow=null},_setPos:function(i){this._icon&&gt(this._icon,i),this._shadow&&gt(this._shadow,i),this._zIndex=i.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(i){this._icon&&(this._icon.style.zIndex=this._zIndex+i)},_animateZoom:function(i){var s=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center).round();this._setPos(s)},_initInteraction:function(){if(this.options.interactive&&(Oe(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),a_)){var i=this.options.draggable;this.dragging&&(i=this.dragging.enabled(),this.dragging.disable()),this.dragging=new a_(this),i&&this.dragging.enable()}},setOpacity:function(i){return this.options.opacity=i,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var i=this.options.opacity;this._icon&&fn(this._icon,i),this._shadow&&fn(this._shadow,i)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var i=this._map;if(i){var s=this.options.icon.options,c=s.iconSize?q(s.iconSize):q(0,0),h=s.iconAnchor?q(s.iconAnchor):q(0,0);i.panInside(this._latlng,{paddingTopLeft:h,paddingBottomRight:c.subtract(h)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function pk(i,s){return new Js(i,s)}var Nr=Pn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(i){this._renderer=i.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(i){return w(this,i),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&i&&Object.prototype.hasOwnProperty.call(i,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Ys=Nr.extend({options:{fill:!0,radius:10},initialize:function(i,s){w(this,s),this._latlng=ue(i),this._radius=this.options.radius},setLatLng:function(i){var s=this._latlng;return this._latlng=ue(i),this.redraw(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(i){return this.options.radius=this._radius=i,this.redraw()},getRadius:function(){return this._radius},setStyle:function(i){var s=i&&i.radius||this._radius;return Nr.prototype.setStyle.call(this,i),this.setRadius(s),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var i=this._radius,s=this._radiusY||i,c=this._clickTolerance(),h=[i+c,s+c];this._pxBounds=new O(this._point.subtract(h),this._point.add(h))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(i){return i.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function mk(i,s){return new Ys(i,s)}var hd=Ys.extend({initialize:function(i,s,c){if(typeof s=="number"&&(s=o({},c,{radius:s})),w(this,s),this._latlng=ue(i),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(i){return this._mRadius=i,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var i=[this._radius,this._radiusY||this._radius];return new z(this._map.layerPointToLatLng(this._point.subtract(i)),this._map.layerPointToLatLng(this._point.add(i)))},setStyle:Nr.prototype.setStyle,_project:function(){var i=this._latlng.lng,s=this._latlng.lat,c=this._map,h=c.options.crs;if(h.distance===be.distance){var v=Math.PI/180,S=this._mRadius/be.R/v,T=c.project([s+S,i]),j=c.project([s-S,i]),W=T.add(j).divideBy(2),te=c.unproject(W).lat,fe=Math.acos((Math.cos(S*v)-Math.sin(s*v)*Math.sin(te*v))/(Math.cos(s*v)*Math.cos(te*v)))/v;(isNaN(fe)||fe===0)&&(fe=S/Math.cos(Math.PI/180*s)),this._point=W.subtract(c.getPixelOrigin()),this._radius=isNaN(fe)?0:W.x-c.project([te,i-fe]).x,this._radiusY=W.y-T.y}else{var Pe=h.unproject(h.project(this._latlng).subtract([this._mRadius,0]));this._point=c.latLngToLayerPoint(this._latlng),this._radius=this._point.x-c.latLngToLayerPoint(Pe).x}this._updateBounds()}});function _k(i,s,c){return new hd(i,s,c)}var dr=Nr.extend({options:{smoothFactor:1,noClip:!1},initialize:function(i,s){w(this,s),this._setLatLngs(i)},getLatLngs:function(){return this._latlngs},setLatLngs:function(i){return this._setLatLngs(i),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(i){for(var s=1/0,c=null,h=Sa,v,S,T=0,j=this._parts.length;T<j;T++)for(var W=this._parts[T],te=1,fe=W.length;te<fe;te++){v=W[te-1],S=W[te];var Pe=h(i,v,S,!0);Pe<s&&(s=Pe,c=h(i,v,S))}return c&&(c.distance=Math.sqrt(s)),c},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return n_(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(i,s){return s=s||this._defaultShape(),i=ue(i),s.push(i),this._bounds.extend(i),this.redraw()},_setLatLngs:function(i){this._bounds=new z,this._latlngs=this._convertLatLngs(i)},_defaultShape:function(){return hn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(i){for(var s=[],c=hn(i),h=0,v=i.length;h<v;h++)c?(s[h]=ue(i[h]),this._bounds.extend(s[h])):s[h]=this._convertLatLngs(i[h]);return s},_project:function(){var i=new O;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,i),this._bounds.isValid()&&i.isValid()&&(this._rawPxBounds=i,this._updateBounds())},_updateBounds:function(){var i=this._clickTolerance(),s=new M(i,i);this._rawPxBounds&&(this._pxBounds=new O([this._rawPxBounds.min.subtract(s),this._rawPxBounds.max.add(s)]))},_projectLatlngs:function(i,s,c){var h=i[0]instanceof re,v=i.length,S,T;if(h){for(T=[],S=0;S<v;S++)T[S]=this._map.latLngToLayerPoint(i[S]),c.extend(T[S]);s.push(T)}else for(S=0;S<v;S++)this._projectLatlngs(i[S],s,c)},_clipPoints:function(){var i=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}var s=this._parts,c,h,v,S,T,j,W;for(c=0,v=0,S=this._rings.length;c<S;c++)for(W=this._rings[c],h=0,T=W.length;h<T-1;h++)j=e_(W[h],W[h+1],i,h,!0),j&&(s[v]=s[v]||[],s[v].push(j[0]),(j[1]!==W[h+1]||h===T-2)&&(s[v].push(j[1]),v++))}},_simplifyPoints:function(){for(var i=this._parts,s=this.options.smoothFactor,c=0,h=i.length;c<h;c++)i[c]=Jm(i[c],s)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(i,s){var c,h,v,S,T,j,W=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(c=0,S=this._parts.length;c<S;c++)for(j=this._parts[c],h=0,T=j.length,v=T-1;h<T;v=h++)if(!(!s&&h===0)&&Ym(i,j[v],j[h])<=W)return!0;return!1}});function gk(i,s){return new dr(i,s)}dr._flat=t_;var pi=dr.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return o_(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(i){var s=dr.prototype._convertLatLngs.call(this,i),c=s.length;return c>=2&&s[0]instanceof re&&s[0].equals(s[c-1])&&s.pop(),s},_setLatLngs:function(i){dr.prototype._setLatLngs.call(this,i),hn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return hn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var i=this._renderer._bounds,s=this.options.weight,c=new M(s,s);if(i=new O(i.min.subtract(c),i.max.add(c)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}for(var h=0,v=this._rings.length,S;h<v;h++)S=r_(this._rings[h],i,!0),S.length&&this._parts.push(S)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(i){var s=!1,c,h,v,S,T,j,W,te;if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(S=0,W=this._parts.length;S<W;S++)for(c=this._parts[S],T=0,te=c.length,j=te-1;T<te;j=T++)h=c[T],v=c[j],h.y>i.y!=v.y>i.y&&i.x<(v.x-h.x)*(i.y-h.y)/(v.y-h.y)+h.x&&(s=!s);return s||dr.prototype._containsPoint.call(this,i,!0)}});function vk(i,s){return new pi(i,s)}var fr=cr.extend({initialize:function(i,s){w(this,s),this._layers={},i&&this.addData(i)},addData:function(i){var s=k(i)?i:i.features,c,h,v;if(s){for(c=0,h=s.length;c<h;c++)v=s[c],(v.geometries||v.geometry||v.features||v.coordinates)&&this.addData(v);return this}var S=this.options;if(S.filter&&!S.filter(i))return this;var T=Xs(i,S);return T?(T.feature=nl(i),T.defaultOptions=T.options,this.resetStyle(T),S.onEachFeature&&S.onEachFeature(i,T),this.addLayer(T)):this},resetStyle:function(i){return i===void 0?this.eachLayer(this.resetStyle,this):(i.options=o({},i.defaultOptions),this._setLayerStyle(i,this.options.style),this)},setStyle:function(i){return this.eachLayer(function(s){this._setLayerStyle(s,i)},this)},_setLayerStyle:function(i,s){i.setStyle&&(typeof s=="function"&&(s=s(i.feature)),i.setStyle(s))}});function Xs(i,s){var c=i.type==="Feature"?i.geometry:i,h=c?c.coordinates:null,v=[],S=s&&s.pointToLayer,T=s&&s.coordsToLatLng||pd,j,W,te,fe;if(!h&&!c)return null;switch(c.type){case"Point":return j=T(h),s_(S,i,j,s);case"MultiPoint":for(te=0,fe=h.length;te<fe;te++)j=T(h[te]),v.push(s_(S,i,j,s));return new cr(v);case"LineString":case"MultiLineString":return W=el(h,c.type==="LineString"?0:1,T),new dr(W,s);case"Polygon":case"MultiPolygon":return W=el(h,c.type==="Polygon"?1:2,T),new pi(W,s);case"GeometryCollection":for(te=0,fe=c.geometries.length;te<fe;te++){var Pe=Xs({geometry:c.geometries[te],type:"Feature",properties:i.properties},s);Pe&&v.push(Pe)}return new cr(v);case"FeatureCollection":for(te=0,fe=c.features.length;te<fe;te++){var Te=Xs(c.features[te],s);Te&&v.push(Te)}return new cr(v);default:throw new Error("Invalid GeoJSON object.")}}function s_(i,s,c,h){return i?i(s,c):new Js(c,h&&h.markersInheritOptions&&h)}function pd(i){return new re(i[1],i[0],i[2])}function el(i,s,c){for(var h=[],v=0,S=i.length,T;v<S;v++)T=s?el(i[v],s-1,c):(c||pd)(i[v]),h.push(T);return h}function md(i,s){return i=ue(i),i.alt!==void 0?[g(i.lng,s),g(i.lat,s),g(i.alt,s)]:[g(i.lng,s),g(i.lat,s)]}function tl(i,s,c,h){for(var v=[],S=0,T=i.length;S<T;S++)v.push(s?tl(i[S],hn(i[S])?0:s-1,c,h):md(i[S],h));return!s&&c&&v.push(v[0].slice()),v}function mi(i,s){return i.feature?o({},i.feature,{geometry:s}):nl(s)}function nl(i){return i.type==="Feature"||i.type==="FeatureCollection"?i:{type:"Feature",properties:{},geometry:i}}var _d={toGeoJSON:function(i){return mi(this,{type:"Point",coordinates:md(this.getLatLng(),i)})}};Js.include(_d),hd.include(_d),Ys.include(_d),dr.include({toGeoJSON:function(i){var s=!hn(this._latlngs),c=tl(this._latlngs,s?1:0,!1,i);return mi(this,{type:(s?"Multi":"")+"LineString",coordinates:c})}}),pi.include({toGeoJSON:function(i){var s=!hn(this._latlngs),c=s&&!hn(this._latlngs[0]),h=tl(this._latlngs,c?2:s?1:0,!0,i);return s||(h=[h]),mi(this,{type:(c?"Multi":"")+"Polygon",coordinates:h})}}),fi.include({toMultiPoint:function(i){var s=[];return this.eachLayer(function(c){s.push(c.toGeoJSON(i).geometry.coordinates)}),mi(this,{type:"MultiPoint",coordinates:s})},toGeoJSON:function(i){var s=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(s==="MultiPoint")return this.toMultiPoint(i);var c=s==="GeometryCollection",h=[];return this.eachLayer(function(v){if(v.toGeoJSON){var S=v.toGeoJSON(i);if(c)h.push(S.geometry);else{var T=nl(S);T.type==="FeatureCollection"?h.push.apply(h,T.features):h.push(T)}}}),c?mi(this,{geometries:h,type:"GeometryCollection"}):{type:"FeatureCollection",features:h}}});function l_(i,s){return new fr(i,s)}var yk=l_,rl=Pn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(i,s,c){this._url=i,this._bounds=Z(s),w(this,c)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Oe(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){at(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(i){return this.options.opacity=i,this._image&&this._updateOpacity(),this},setStyle:function(i){return i.opacity&&this.setOpacity(i.opacity),this},bringToFront:function(){return this._map&&ci(this._image),this},bringToBack:function(){return this._map&&di(this._image),this},setUrl:function(i){return this._url=i,this._image&&(this._image.src=i),this},setBounds:function(i){return this._bounds=Z(i),this._map&&this._reset(),this},getEvents:function(){var i={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var i=this._url.tagName==="IMG",s=this._image=i?this._url:Ue("img");if(Oe(s,"leaflet-image-layer"),this._zoomAnimated&&Oe(s,"leaflet-zoom-animated"),this.options.className&&Oe(s,this.options.className),s.onselectstart=m,s.onmousemove=m,s.onload=l(this.fire,this,"load"),s.onerror=l(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),i){this._url=s.src;return}s.src=this._url,s.alt=this.options.alt},_animateZoom:function(i){var s=this._map.getZoomScale(i.zoom),c=this._map._latLngBoundsToNewLayerBounds(this._bounds,i.zoom,i.center).min;So(this._image,c,s)},_reset:function(){var i=this._image,s=new O(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),c=s.getSize();gt(i,s.min),i.style.width=c.x+"px",i.style.height=c.y+"px"},_updateOpacity:function(){fn(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var i=this.options.errorOverlayUrl;i&&this._url!==i&&(this._url=i,this._image.src=i)},getCenter:function(){return this._bounds.getCenter()}}),bk=function(i,s,c){return new rl(i,s,c)},u_=rl.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var i=this._url.tagName==="VIDEO",s=this._image=i?this._url:Ue("video");if(Oe(s,"leaflet-image-layer"),this._zoomAnimated&&Oe(s,"leaflet-zoom-animated"),this.options.className&&Oe(s,this.options.className),s.onselectstart=m,s.onmousemove=m,s.onloadeddata=l(this.fire,this,"load"),i){for(var c=s.getElementsByTagName("source"),h=[],v=0;v<c.length;v++)h.push(c[v].src);this._url=c.length>0?h:[s.src];return}k(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(s.style,"objectFit")&&(s.style.objectFit="fill"),s.autoplay=!!this.options.autoplay,s.loop=!!this.options.loop,s.muted=!!this.options.muted,s.playsInline=!!this.options.playsInline;for(var S=0;S<this._url.length;S++){var T=Ue("source");T.src=this._url[S],s.appendChild(T)}}});function xk(i,s,c){return new u_(i,s,c)}var c_=rl.extend({_initImage:function(){var i=this._image=this._url;Oe(i,"leaflet-image-layer"),this._zoomAnimated&&Oe(i,"leaflet-zoom-animated"),this.options.className&&Oe(i,this.options.className),i.onselectstart=m,i.onmousemove=m}});function wk(i,s,c){return new c_(i,s,c)}var Vn=Pn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(i,s){i&&(i instanceof re||k(i))?(this._latlng=ue(i),w(this,s)):(w(this,i),this._source=s),this.options.content&&(this._content=this.options.content)},openOn:function(i){return i=arguments.length?i:this._source._map,i.hasLayer(this)||i.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(i){return this._map?this.close():(arguments.length?this._source=i:i=this._source,this._prepareOpen(),this.openOn(i._map)),this},onAdd:function(i){this._zoomAnimated=i._zoomAnimated,this._container||this._initLayout(),i._fadeAnimated&&fn(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),i._fadeAnimated&&fn(this._container,1),this.bringToFront(),this.options.interactive&&(Oe(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(i){i._fadeAnimated?(fn(this._container,0),this._removeTimeout=setTimeout(l(at,void 0,this._container),200)):at(this._container),this.options.interactive&&(pt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(i){return this._latlng=ue(i),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(i){return this._content=i,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var i={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&ci(this._container),this},bringToBack:function(){return this._map&&di(this._container),this},_prepareOpen:function(i){var s=this._source;if(!s._map)return!1;if(s instanceof cr){s=null;var c=this._source._layers;for(var h in c)if(c[h]._map){s=c[h];break}if(!s)return!1;this._source=s}if(!i)if(s.getCenter)i=s.getCenter();else if(s.getLatLng)i=s.getLatLng();else if(s.getBounds)i=s.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(i),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var i=this._contentNode,s=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof s=="string")i.innerHTML=s;else{for(;i.hasChildNodes();)i.removeChild(i.firstChild);i.appendChild(s)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var i=this._map.latLngToLayerPoint(this._latlng),s=q(this.options.offset),c=this._getAnchor();this._zoomAnimated?gt(this._container,i.add(c)):s=s.add(i).add(c);var h=this._containerBottom=-s.y,v=this._containerLeft=-Math.round(this._containerWidth/2)+s.x;this._container.style.bottom=h+"px",this._container.style.left=v+"px"}},_getAnchor:function(){return[0,0]}});De.include({_initOverlay:function(i,s,c,h){var v=s;return v instanceof i||(v=new i(h).setContent(s)),c&&v.setLatLng(c),v}}),Pn.include({_initOverlay:function(i,s,c,h){var v=c;return v instanceof i?(w(v,h),v._source=this):(v=s&&!h?s:new i(h,this),v.setContent(c)),v}});var ol=Vn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(i){return i=arguments.length?i:this._source._map,!i.hasLayer(this)&&i._popup&&i._popup.options.autoClose&&i.removeLayer(i._popup),i._popup=this,Vn.prototype.openOn.call(this,i)},onAdd:function(i){Vn.prototype.onAdd.call(this,i),i.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Nr||this._source.on("preclick",Co))},onRemove:function(i){Vn.prototype.onRemove.call(this,i),i.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Nr||this._source.off("preclick",Co))},getEvents:function(){var i=Vn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(i.preclick=this.close),this.options.keepInView&&(i.moveend=this._adjustPan),i},_initLayout:function(){var i="leaflet-popup",s=this._container=Ue("div",i+" "+(this.options.className||"")+" leaflet-zoom-animated"),c=this._wrapper=Ue("div",i+"-content-wrapper",s);if(this._contentNode=Ue("div",i+"-content",c),wa(s),ad(this._contentNode),Ee(s,"contextmenu",Co),this._tipContainer=Ue("div",i+"-tip-container",s),this._tip=Ue("div",i+"-tip",this._tipContainer),this.options.closeButton){var h=this._closeButton=Ue("a",i+"-close-button",s);h.setAttribute("role","button"),h.setAttribute("aria-label","Close popup"),h.href="#close",h.innerHTML='<span aria-hidden="true">&#215;</span>',Ee(h,"click",function(v){Tt(v),this.close()},this)}},_updateLayout:function(){var i=this._contentNode,s=i.style;s.width="",s.whiteSpace="nowrap";var c=i.offsetWidth;c=Math.min(c,this.options.maxWidth),c=Math.max(c,this.options.minWidth),s.width=c+1+"px",s.whiteSpace="",s.height="";var h=i.offsetHeight,v=this.options.maxHeight,S="leaflet-popup-scrolled";v&&h>v?(s.height=v+"px",Oe(i,S)):pt(i,S),this._containerWidth=this._container.offsetWidth},_animateZoom:function(i){var s=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center),c=this._getAnchor();gt(this._container,s.add(c))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var i=this._map,s=parseInt(va(this._container,"marginBottom"),10)||0,c=this._container.offsetHeight+s,h=this._containerWidth,v=new M(this._containerLeft,-c-this._containerBottom);v._add(Po(this._container));var S=i.layerPointToContainerPoint(v),T=q(this.options.autoPanPadding),j=q(this.options.autoPanPaddingTopLeft||T),W=q(this.options.autoPanPaddingBottomRight||T),te=i.getSize(),fe=0,Pe=0;S.x+h+W.x>te.x&&(fe=S.x+h-te.x+W.x),S.x-fe-j.x<0&&(fe=S.x-j.x),S.y+c+W.y>te.y&&(Pe=S.y+c-te.y+W.y),S.y-Pe-j.y<0&&(Pe=S.y-j.y),(fe||Pe)&&(this.options.keepInView&&(this._autopanning=!0),i.fire("autopanstart").panBy([fe,Pe]))}},_getAnchor:function(){return q(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),kk=function(i,s){return new ol(i,s)};De.mergeOptions({closePopupOnClick:!0}),De.include({openPopup:function(i,s,c){return this._initOverlay(ol,i,s,c).openOn(this),this},closePopup:function(i){return i=arguments.length?i:this._popup,i&&i.close(),this}}),Pn.include({bindPopup:function(i,s){return this._popup=this._initOverlay(ol,this._popup,i,s),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(i){return this._popup&&(this instanceof cr||(this._popup._source=this),this._popup._prepareOpen(i||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(i){return this._popup&&this._popup.setContent(i),this},getPopup:function(){return this._popup},_openPopup:function(i){if(!(!this._popup||!this._map)){Eo(i);var s=i.layer||i.target;if(this._popup._source===s&&!(s instanceof Nr)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(i.latlng);return}this._popup._source=s,this.openPopup(i.latlng)}},_movePopup:function(i){this._popup.setLatLng(i.latlng)},_onKeyPress:function(i){i.originalEvent.keyCode===13&&this._openPopup(i)}});var il=Vn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(i){Vn.prototype.onAdd.call(this,i),this.setOpacity(this.options.opacity),i.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(i){Vn.prototype.onRemove.call(this,i),i.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var i=Vn.prototype.getEvents.call(this);return this.options.permanent||(i.preclick=this.close),i},_initLayout:function(){var i="leaflet-tooltip",s=i+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Ue("div",s),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+d(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(i){var s,c,h=this._map,v=this._container,S=h.latLngToContainerPoint(h.getCenter()),T=h.layerPointToContainerPoint(i),j=this.options.direction,W=v.offsetWidth,te=v.offsetHeight,fe=q(this.options.offset),Pe=this._getAnchor();j==="top"?(s=W/2,c=te):j==="bottom"?(s=W/2,c=0):j==="center"?(s=W/2,c=te/2):j==="right"?(s=0,c=te/2):j==="left"?(s=W,c=te/2):T.x<S.x?(j="right",s=0,c=te/2):(j="left",s=W+(fe.x+Pe.x)*2,c=te/2),i=i.subtract(q(s,c,!0)).add(fe).add(Pe),pt(v,"leaflet-tooltip-right"),pt(v,"leaflet-tooltip-left"),pt(v,"leaflet-tooltip-top"),pt(v,"leaflet-tooltip-bottom"),Oe(v,"leaflet-tooltip-"+j),gt(v,i)},_updatePosition:function(){var i=this._map.latLngToLayerPoint(this._latlng);this._setPosition(i)},setOpacity:function(i){this.options.opacity=i,this._container&&fn(this._container,i)},_animateZoom:function(i){var s=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center);this._setPosition(s)},_getAnchor:function(){return q(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Sk=function(i,s){return new il(i,s)};De.include({openTooltip:function(i,s,c){return this._initOverlay(il,i,s,c).openOn(this),this},closeTooltip:function(i){return i.close(),this}}),Pn.include({bindTooltip:function(i,s){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(il,this._tooltip,i,s),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(i){if(!(!i&&this._tooltipHandlersAdded)){var s=i?"off":"on",c={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?c.add=this._openTooltip:(c.mouseover=this._openTooltip,c.mouseout=this.closeTooltip,c.click=this._openTooltip,this._map?this._addFocusListeners():c.add=this._addFocusListeners),this._tooltip.options.sticky&&(c.mousemove=this._moveTooltip),this[s](c),this._tooltipHandlersAdded=!i}},openTooltip:function(i){return this._tooltip&&(this instanceof cr||(this._tooltip._source=this),this._tooltip._prepareOpen(i)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(i){return this._tooltip&&this._tooltip.setContent(i),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(i){var s=i.getElement();s&&(Ee(s,"focus",function(){this._tooltip._source=i,this.openTooltip()},this),Ee(s,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(i){var s=i.getElement();s&&s.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(i){!this._tooltip||!this._map||this._map.dragging&&this._map.dragging.moving()||(this._tooltip._source=i.layer||i.target,this.openTooltip(this._tooltip.options.sticky?i.latlng:void 0))},_moveTooltip:function(i){var s=i.latlng,c,h;this._tooltip.options.sticky&&i.originalEvent&&(c=this._map.mouseEventToContainerPoint(i.originalEvent),h=this._map.containerPointToLayerPoint(c),s=this._map.layerPointToLatLng(h)),this._tooltip.setLatLng(s)}});var d_=hi.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(i){var s=i&&i.tagName==="DIV"?i:document.createElement("div"),c=this.options;if(c.html instanceof Element?(Zs(s),s.appendChild(c.html)):s.innerHTML=c.html!==!1?c.html:"",c.bgPos){var h=q(c.bgPos);s.style.backgroundPosition=-h.x+"px "+-h.y+"px"}return this._setIconStyles(s,"icon"),s},createShadow:function(){return null}});function Pk(i){return new d_(i)}hi.Default=Pa;var Ca=Pn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:pe.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(i){w(this,i)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(i){i._addZoomLimit(this)},onRemove:function(i){this._removeAllTiles(),at(this._container),i._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(ci(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(di(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(i){return this.options.opacity=i,this._updateOpacity(),this},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var i=this._clampZoom(this._map.getZoom());i!==this._tileZoom&&(this._tileZoom=i,this._updateLevels()),this._update()}return this},getEvents:function(){var i={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=f(this._onMoveEnd,this.options.updateInterval,this)),i.move=this._onMove),this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},createTile:function(){return document.createElement("div")},getTileSize:function(){var i=this.options.tileSize;return i instanceof M?i:new M(i,i)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(i){for(var s=this.getPane().children,c=-i(-1/0,1/0),h=0,v=s.length,S;h<v;h++)S=s[h].style.zIndex,s[h]!==this._container&&S&&(c=i(c,+S));isFinite(c)&&(this.options.zIndex=c+i(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!pe.ielt9){fn(this._container,this.options.opacity);var i=+new Date,s=!1,c=!1;for(var h in this._tiles){var v=this._tiles[h];if(!(!v.current||!v.loaded)){var S=Math.min(1,(i-v.loaded)/200);fn(v.el,S),S<1?s=!0:(v.active?c=!0:this._onOpaqueTile(v),v.active=!0)}}c&&!this._noPrune&&this._pruneTiles(),s&&(le(this._fadeFrame),this._fadeFrame=J(this._updateOpacity,this))}},_onOpaqueTile:m,_initContainer:function(){this._container||(this._container=Ue("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var i=this._tileZoom,s=this.options.maxZoom;if(i!==void 0){for(var c in this._levels)c=Number(c),this._levels[c].el.children.length||c===i?(this._levels[c].el.style.zIndex=s-Math.abs(i-c),this._onUpdateLevel(c)):(at(this._levels[c].el),this._removeTilesAtZoom(c),this._onRemoveLevel(c),delete this._levels[c]);var h=this._levels[i],v=this._map;return h||(h=this._levels[i]={},h.el=Ue("div","leaflet-tile-container leaflet-zoom-animated",this._container),h.el.style.zIndex=s,h.origin=v.project(v.unproject(v.getPixelOrigin()),i).round(),h.zoom=i,this._setZoomTransform(h,v.getCenter(),v.getZoom()),m(h.el.offsetWidth),this._onCreateLevel(h)),this._level=h,h}},_onUpdateLevel:m,_onRemoveLevel:m,_onCreateLevel:m,_pruneTiles:function(){if(this._map){var i,s,c=this._map.getZoom();if(c>this.options.maxZoom||c<this.options.minZoom){this._removeAllTiles();return}for(i in this._tiles)s=this._tiles[i],s.retain=s.current;for(i in this._tiles)if(s=this._tiles[i],s.current&&!s.active){var h=s.coords;this._retainParent(h.x,h.y,h.z,h.z-5)||this._retainChildren(h.x,h.y,h.z,h.z+2)}for(i in this._tiles)this._tiles[i].retain||this._removeTile(i)}},_removeTilesAtZoom:function(i){for(var s in this._tiles)this._tiles[s].coords.z===i&&this._removeTile(s)},_removeAllTiles:function(){for(var i in this._tiles)this._removeTile(i)},_invalidateAll:function(){for(var i in this._levels)at(this._levels[i].el),this._onRemoveLevel(Number(i)),delete this._levels[i];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(i,s,c,h){var v=Math.floor(i/2),S=Math.floor(s/2),T=c-1,j=new M(+v,+S);j.z=+T;var W=this._tileCoordsToKey(j),te=this._tiles[W];return te&&te.active?(te.retain=!0,!0):(te&&te.loaded&&(te.retain=!0),T>h?this._retainParent(v,S,T,h):!1)},_retainChildren:function(i,s,c,h){for(var v=2*i;v<2*i+2;v++)for(var S=2*s;S<2*s+2;S++){var T=new M(v,S);T.z=c+1;var j=this._tileCoordsToKey(T),W=this._tiles[j];if(W&&W.active){W.retain=!0;continue}else W&&W.loaded&&(W.retain=!0);c+1<h&&this._retainChildren(v,S,c+1,h)}},_resetView:function(i){var s=i&&(i.pinch||i.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),s,s)},_animateZoom:function(i){this._setView(i.center,i.zoom,!0,i.noUpdate)},_clampZoom:function(i){var s=this.options;return s.minNativeZoom!==void 0&&i<s.minNativeZoom?s.minNativeZoom:s.maxNativeZoom!==void 0&&s.maxNativeZoom<i?s.maxNativeZoom:i},_setView:function(i,s,c,h){var v=Math.round(s);this.options.maxZoom!==void 0&&v>this.options.maxZoom||this.options.minZoom!==void 0&&v<this.options.minZoom?v=void 0:v=this._clampZoom(v);var S=this.options.updateWhenZooming&&v!==this._tileZoom;(!h||S)&&(this._tileZoom=v,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),v!==void 0&&this._update(i),c||this._pruneTiles(),this._noPrune=!!c),this._setZoomTransforms(i,s)},_setZoomTransforms:function(i,s){for(var c in this._levels)this._setZoomTransform(this._levels[c],i,s)},_setZoomTransform:function(i,s,c){var h=this._map.getZoomScale(c,i.zoom),v=i.origin.multiplyBy(h).subtract(this._map._getNewPixelOrigin(s,c)).round();pe.any3d?So(i.el,v,h):gt(i.el,v)},_resetGrid:function(){var i=this._map,s=i.options.crs,c=this._tileSize=this.getTileSize(),h=this._tileZoom,v=this._map.getPixelWorldBounds(this._tileZoom);v&&(this._globalTileRange=this._pxBoundsToTileRange(v)),this._wrapX=s.wrapLng&&!this.options.noWrap&&[Math.floor(i.project([0,s.wrapLng[0]],h).x/c.x),Math.ceil(i.project([0,s.wrapLng[1]],h).x/c.y)],this._wrapY=s.wrapLat&&!this.options.noWrap&&[Math.floor(i.project([s.wrapLat[0],0],h).y/c.x),Math.ceil(i.project([s.wrapLat[1],0],h).y/c.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(i){var s=this._map,c=s._animatingZoom?Math.max(s._animateToZoom,s.getZoom()):s.getZoom(),h=s.getZoomScale(c,this._tileZoom),v=s.project(i,this._tileZoom).floor(),S=s.getSize().divideBy(h*2);return new O(v.subtract(S),v.add(S))},_update:function(i){var s=this._map;if(s){var c=this._clampZoom(s.getZoom());if(i===void 0&&(i=s.getCenter()),this._tileZoom!==void 0){var h=this._getTiledPixelBounds(i),v=this._pxBoundsToTileRange(h),S=v.getCenter(),T=[],j=this.options.keepBuffer,W=new O(v.getBottomLeft().subtract([j,-j]),v.getTopRight().add([j,-j]));if(!(isFinite(v.min.x)&&isFinite(v.min.y)&&isFinite(v.max.x)&&isFinite(v.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var te in this._tiles){var fe=this._tiles[te].coords;(fe.z!==this._tileZoom||!W.contains(new M(fe.x,fe.y)))&&(this._tiles[te].current=!1)}if(Math.abs(c-this._tileZoom)>1){this._setView(i,c);return}for(var Pe=v.min.y;Pe<=v.max.y;Pe++)for(var Te=v.min.x;Te<=v.max.x;Te++){var pn=new M(Te,Pe);if(pn.z=this._tileZoom,!!this._isValidTile(pn)){var Lo=this._tiles[this._tileCoordsToKey(pn)];Lo?Lo.current=!0:T.push(pn)}}if(T.sort(function(Ir,gd){return Ir.distanceTo(S)-gd.distanceTo(S)}),T.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var sl=document.createDocumentFragment();for(Te=0;Te<T.length;Te++)this._addTile(T[Te],sl);this._level.el.appendChild(sl)}}}},_isValidTile:function(i){var s=this._map.options.crs;if(!s.infinite){var c=this._globalTileRange;if(!s.wrapLng&&(i.x<c.min.x||i.x>c.max.x)||!s.wrapLat&&(i.y<c.min.y||i.y>c.max.y))return!1}if(!this.options.bounds)return!0;var h=this._tileCoordsToBounds(i);return Z(this.options.bounds).overlaps(h)},_keyToBounds:function(i){return this._tileCoordsToBounds(this._keyToTileCoords(i))},_tileCoordsToNwSe:function(i){var s=this._map,c=this.getTileSize(),h=i.scaleBy(c),v=h.add(c),S=s.unproject(h,i.z),T=s.unproject(v,i.z);return[S,T]},_tileCoordsToBounds:function(i){var s=this._tileCoordsToNwSe(i),c=new z(s[0],s[1]);return this.options.noWrap||(c=this._map.wrapLatLngBounds(c)),c},_tileCoordsToKey:function(i){return i.x+":"+i.y+":"+i.z},_keyToTileCoords:function(i){var s=i.split(":"),c=new M(+s[0],+s[1]);return c.z=+s[2],c},_removeTile:function(i){var s=this._tiles[i];s&&(at(s.el),delete this._tiles[i],this.fire("tileunload",{tile:s.el,coords:this._keyToTileCoords(i)}))},_initTile:function(i){Oe(i,"leaflet-tile");var s=this.getTileSize();i.style.width=s.x+"px",i.style.height=s.y+"px",i.onselectstart=m,i.onmousemove=m,pe.ielt9&&this.options.opacity<1&&fn(i,this.options.opacity)},_addTile:function(i,s){var c=this._getTilePos(i),h=this._tileCoordsToKey(i),v=this.createTile(this._wrapCoords(i),l(this._tileReady,this,i));this._initTile(v),this.createTile.length<2&&J(l(this._tileReady,this,i,null,v)),gt(v,c),this._tiles[h]={el:v,coords:i,current:!0},s.appendChild(v),this.fire("tileloadstart",{tile:v,coords:i})},_tileReady:function(i,s,c){s&&this.fire("tileerror",{error:s,tile:c,coords:i});var h=this._tileCoordsToKey(i);c=this._tiles[h],c&&(c.loaded=+new Date,this._map._fadeAnimated?(fn(c.el,0),le(this._fadeFrame),this._fadeFrame=J(this._updateOpacity,this)):(c.active=!0,this._pruneTiles()),s||(Oe(c.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:c.el,coords:i})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),pe.ielt9||!this._map._fadeAnimated?J(this._pruneTiles,this):setTimeout(l(this._pruneTiles,this),250)))},_getTilePos:function(i){return i.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(i){var s=new M(this._wrapX?p(i.x,this._wrapX):i.x,this._wrapY?p(i.y,this._wrapY):i.y);return s.z=i.z,s},_pxBoundsToTileRange:function(i){var s=this.getTileSize();return new O(i.min.unscaleBy(s).floor(),i.max.unscaleBy(s).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var i in this._tiles)if(!this._tiles[i].loaded)return!1;return!0}});function Ck(i){return new Ca(i)}var _i=Ca.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(i,s){this._url=i,s=w(this,s),s.detectRetina&&pe.retina&&s.maxZoom>0?(s.tileSize=Math.floor(s.tileSize/2),s.zoomReverse?(s.zoomOffset--,s.minZoom=Math.min(s.maxZoom,s.minZoom+1)):(s.zoomOffset++,s.maxZoom=Math.max(s.minZoom,s.maxZoom-1)),s.minZoom=Math.max(0,s.minZoom)):s.zoomReverse?s.minZoom=Math.min(s.maxZoom,s.minZoom):s.maxZoom=Math.max(s.minZoom,s.maxZoom),typeof s.subdomains=="string"&&(s.subdomains=s.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(i,s){return this._url===i&&s===void 0&&(s=!0),this._url=i,s||this.redraw(),this},createTile:function(i,s){var c=document.createElement("img");return Ee(c,"load",l(this._tileOnLoad,this,s,c)),Ee(c,"error",l(this._tileOnError,this,s,c)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(c.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(c.referrerPolicy=this.options.referrerPolicy),c.alt="",c.src=this.getTileUrl(i),c},getTileUrl:function(i){var s={r:pe.retina?"@2x":"",s:this._getSubdomain(i),x:i.x,y:i.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var c=this._globalTileRange.max.y-i.y;this.options.tms&&(s.y=c),s["-y"]=c}return b(this._url,o(s,this.options))},_tileOnLoad:function(i,s){pe.ielt9?setTimeout(l(i,this,null,s),0):i(null,s)},_tileOnError:function(i,s,c){var h=this.options.errorTileUrl;h&&s.getAttribute("src")!==h&&(s.src=h),i(c,s)},_onTileRemove:function(i){i.tile.onload=null},_getZoomForUrl:function(){var i=this._tileZoom,s=this.options.maxZoom,c=this.options.zoomReverse,h=this.options.zoomOffset;return c&&(i=s-i),i+h},_getSubdomain:function(i){var s=Math.abs(i.x+i.y)%this.options.subdomains.length;return this.options.subdomains[s]},_abortLoading:function(){var i,s;for(i in this._tiles)if(this._tiles[i].coords.z!==this._tileZoom&&(s=this._tiles[i].el,s.onload=m,s.onerror=m,!s.complete)){s.src=R;var c=this._tiles[i].coords;at(s),delete this._tiles[i],this.fire("tileabort",{tile:s,coords:c})}},_removeTile:function(i){var s=this._tiles[i];if(s)return s.el.setAttribute("src",R),Ca.prototype._removeTile.call(this,i)},_tileReady:function(i,s,c){if(!(!this._map||c&&c.getAttribute("src")===R))return Ca.prototype._tileReady.call(this,i,s,c)}});function f_(i,s){return new _i(i,s)}var h_=_i.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(i,s){this._url=i;var c=o({},this.defaultWmsParams);for(var h in s)h in this.options||(c[h]=s[h]);s=w(this,s);var v=s.detectRetina&&pe.retina?2:1,S=this.getTileSize();c.width=S.x*v,c.height=S.y*v,this.wmsParams=c},onAdd:function(i){this._crs=this.options.crs||i.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var s=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[s]=this._crs.code,_i.prototype.onAdd.call(this,i)},getTileUrl:function(i){var s=this._tileCoordsToNwSe(i),c=this._crs,h=A(c.project(s[0]),c.project(s[1])),v=h.min,S=h.max,T=(this._wmsVersion>=1.3&&this._crs===i_?[v.y,v.x,S.y,S.x]:[v.x,v.y,S.x,S.y]).join(","),j=_i.prototype.getTileUrl.call(this,i);return j+P(this.wmsParams,j,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+T},setParams:function(i,s){return o(this.wmsParams,i),s||this.redraw(),this}});function Ek(i,s){return new h_(i,s)}_i.WMS=h_,f_.wms=Ek;var hr=Pn.extend({options:{padding:.1},initialize:function(i){w(this,i),d(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&Oe(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var i={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(i.zoomanim=this._onAnimZoom),i},_onAnimZoom:function(i){this._updateTransform(i.center,i.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(i,s){var c=this._map.getZoomScale(s,this._zoom),h=this._map.getSize().multiplyBy(.5+this.options.padding),v=this._map.project(this._center,s),S=h.multiplyBy(-c).add(v).subtract(this._map._getNewPixelOrigin(i,s));pe.any3d?So(this._container,S,c):gt(this._container,S)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var i in this._layers)this._layers[i]._reset()},_onZoomEnd:function(){for(var i in this._layers)this._layers[i]._project()},_updatePaths:function(){for(var i in this._layers)this._layers[i]._update()},_update:function(){var i=this.options.padding,s=this._map.getSize(),c=this._map.containerPointToLayerPoint(s.multiplyBy(-i)).round();this._bounds=new O(c,c.add(s.multiplyBy(1+i*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),p_=hr.extend({options:{tolerance:0},getEvents:function(){var i=hr.prototype.getEvents.call(this);return i.viewprereset=this._onViewPreReset,i},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){hr.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var i=this._container=document.createElement("canvas");Ee(i,"mousemove",this._onMouseMove,this),Ee(i,"click dblclick mousedown mouseup contextmenu",this._onClick,this),Ee(i,"mouseout",this._handleMouseOut,this),i._leaflet_disable_events=!0,this._ctx=i.getContext("2d")},_destroyContainer:function(){le(this._redrawRequest),delete this._ctx,at(this._container),Ye(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var i;this._redrawBounds=null;for(var s in this._layers)i=this._layers[s],i._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){hr.prototype._update.call(this);var i=this._bounds,s=this._container,c=i.getSize(),h=pe.retina?2:1;gt(s,i.min),s.width=h*c.x,s.height=h*c.y,s.style.width=c.x+"px",s.style.height=c.y+"px",pe.retina&&this._ctx.scale(2,2),this._ctx.translate(-i.min.x,-i.min.y),this.fire("update")}},_reset:function(){hr.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(i){this._updateDashArray(i),this._layers[d(i)]=i;var s=i._order={layer:i,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=s),this._drawLast=s,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(i){this._requestRedraw(i)},_removePath:function(i){var s=i._order,c=s.next,h=s.prev;c?c.prev=h:this._drawLast=h,h?h.next=c:this._drawFirst=c,delete i._order,delete this._layers[d(i)],this._requestRedraw(i)},_updatePath:function(i){this._extendRedrawBounds(i),i._project(),i._update(),this._requestRedraw(i)},_updateStyle:function(i){this._updateDashArray(i),this._requestRedraw(i)},_updateDashArray:function(i){if(typeof i.options.dashArray=="string"){var s=i.options.dashArray.split(/[, ]+/),c=[],h,v;for(v=0;v<s.length;v++){if(h=Number(s[v]),isNaN(h))return;c.push(h)}i.options._dashArray=c}else i.options._dashArray=i.options.dashArray},_requestRedraw:function(i){this._map&&(this._extendRedrawBounds(i),this._redrawRequest=this._redrawRequest||J(this._redraw,this))},_extendRedrawBounds:function(i){if(i._pxBounds){var s=(i.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new O,this._redrawBounds.extend(i._pxBounds.min.subtract([s,s])),this._redrawBounds.extend(i._pxBounds.max.add([s,s]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var i=this._redrawBounds;if(i){var s=i.getSize();this._ctx.clearRect(i.min.x,i.min.y,s.x,s.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var i,s=this._redrawBounds;if(this._ctx.save(),s){var c=s.getSize();this._ctx.beginPath(),this._ctx.rect(s.min.x,s.min.y,c.x,c.y),this._ctx.clip()}this._drawing=!0;for(var h=this._drawFirst;h;h=h.next)i=h.layer,(!s||i._pxBounds&&i._pxBounds.intersects(s))&&i._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(i,s){if(this._drawing){var c,h,v,S,T=i._parts,j=T.length,W=this._ctx;if(j){for(W.beginPath(),c=0;c<j;c++){for(h=0,v=T[c].length;h<v;h++)S=T[c][h],W[h?"lineTo":"moveTo"](S.x,S.y);s&&W.closePath()}this._fillStroke(W,i)}}},_updateCircle:function(i){if(!(!this._drawing||i._empty())){var s=i._point,c=this._ctx,h=Math.max(Math.round(i._radius),1),v=(Math.max(Math.round(i._radiusY),1)||h)/h;v!==1&&(c.save(),c.scale(1,v)),c.beginPath(),c.arc(s.x,s.y/v,h,0,Math.PI*2,!1),v!==1&&c.restore(),this._fillStroke(c,i)}},_fillStroke:function(i,s){var c=s.options;c.fill&&(i.globalAlpha=c.fillOpacity,i.fillStyle=c.fillColor||c.color,i.fill(c.fillRule||"evenodd")),c.stroke&&c.weight!==0&&(i.setLineDash&&i.setLineDash(s.options&&s.options._dashArray||[]),i.globalAlpha=c.opacity,i.lineWidth=c.weight,i.strokeStyle=c.color,i.lineCap=c.lineCap,i.lineJoin=c.lineJoin,i.stroke())},_onClick:function(i){for(var s=this._map.mouseEventToLayerPoint(i),c,h,v=this._drawFirst;v;v=v.next)c=v.layer,c.options.interactive&&c._containsPoint(s)&&(!(i.type==="click"||i.type==="preclick")||!this._map._draggableMoved(c))&&(h=c);this._fireEvent(h?[h]:!1,i)},_onMouseMove:function(i){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var s=this._map.mouseEventToLayerPoint(i);this._handleMouseHover(i,s)}},_handleMouseOut:function(i){var s=this._hoveredLayer;s&&(pt(this._container,"leaflet-interactive"),this._fireEvent([s],i,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(i,s){if(!this._mouseHoverThrottled){for(var c,h,v=this._drawFirst;v;v=v.next)c=v.layer,c.options.interactive&&c._containsPoint(s)&&(h=c);h!==this._hoveredLayer&&(this._handleMouseOut(i),h&&(Oe(this._container,"leaflet-interactive"),this._fireEvent([h],i,"mouseover"),this._hoveredLayer=h)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,i),this._mouseHoverThrottled=!0,setTimeout(l(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(i,s,c){this._map._fireDOMEvent(s,c||s.type,i)},_bringToFront:function(i){var s=i._order;if(s){var c=s.next,h=s.prev;if(c)c.prev=h;else return;h?h.next=c:c&&(this._drawFirst=c),s.prev=this._drawLast,this._drawLast.next=s,s.next=null,this._drawLast=s,this._requestRedraw(i)}},_bringToBack:function(i){var s=i._order;if(s){var c=s.next,h=s.prev;if(h)h.next=c;else return;c?c.prev=h:h&&(this._drawLast=h),s.prev=null,s.next=this._drawFirst,this._drawFirst.prev=s,this._drawFirst=s,this._requestRedraw(i)}}});function m_(i){return pe.canvas?new p_(i):null}var Ea=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(i){return document.createElement("<lvml:"+i+' class="lvml">')}}catch{}return function(i){return document.createElement("<"+i+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),Ok={_initContainer:function(){this._container=Ue("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(hr.prototype._update.call(this),this.fire("update"))},_initPath:function(i){var s=i._container=Ea("shape");Oe(s,"leaflet-vml-shape "+(this.options.className||"")),s.coordsize="1 1",i._path=Ea("path"),s.appendChild(i._path),this._updateStyle(i),this._layers[d(i)]=i},_addPath:function(i){var s=i._container;this._container.appendChild(s),i.options.interactive&&i.addInteractiveTarget(s)},_removePath:function(i){var s=i._container;at(s),i.removeInteractiveTarget(s),delete this._layers[d(i)]},_updateStyle:function(i){var s=i._stroke,c=i._fill,h=i.options,v=i._container;v.stroked=!!h.stroke,v.filled=!!h.fill,h.stroke?(s||(s=i._stroke=Ea("stroke")),v.appendChild(s),s.weight=h.weight+"px",s.color=h.color,s.opacity=h.opacity,h.dashArray?s.dashStyle=k(h.dashArray)?h.dashArray.join(" "):h.dashArray.replace(/( *, *)/g," "):s.dashStyle="",s.endcap=h.lineCap.replace("butt","flat"),s.joinstyle=h.lineJoin):s&&(v.removeChild(s),i._stroke=null),h.fill?(c||(c=i._fill=Ea("fill")),v.appendChild(c),c.color=h.fillColor||h.color,c.opacity=h.fillOpacity):c&&(v.removeChild(c),i._fill=null)},_updateCircle:function(i){var s=i._point.round(),c=Math.round(i._radius),h=Math.round(i._radiusY||c);this._setPath(i,i._empty()?"M0 0":"AL "+s.x+","+s.y+" "+c+","+h+" 0,"+65535*360)},_setPath:function(i,s){i._path.v=s},_bringToFront:function(i){ci(i._container)},_bringToBack:function(i){di(i._container)}},al=pe.vml?Ea:he,Oa=hr.extend({_initContainer:function(){this._container=al("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=al("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){at(this._container),Ye(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){hr.prototype._update.call(this);var i=this._bounds,s=i.getSize(),c=this._container;(!this._svgSize||!this._svgSize.equals(s))&&(this._svgSize=s,c.setAttribute("width",s.x),c.setAttribute("height",s.y)),gt(c,i.min),c.setAttribute("viewBox",[i.min.x,i.min.y,s.x,s.y].join(" ")),this.fire("update")}},_initPath:function(i){var s=i._path=al("path");i.options.className&&Oe(s,i.options.className),i.options.interactive&&Oe(s,"leaflet-interactive"),this._updateStyle(i),this._layers[d(i)]=i},_addPath:function(i){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(i._path),i.addInteractiveTarget(i._path)},_removePath:function(i){at(i._path),i.removeInteractiveTarget(i._path),delete this._layers[d(i)]},_updatePath:function(i){i._project(),i._update()},_updateStyle:function(i){var s=i._path,c=i.options;s&&(c.stroke?(s.setAttribute("stroke",c.color),s.setAttribute("stroke-opacity",c.opacity),s.setAttribute("stroke-width",c.weight),s.setAttribute("stroke-linecap",c.lineCap),s.setAttribute("stroke-linejoin",c.lineJoin),c.dashArray?s.setAttribute("stroke-dasharray",c.dashArray):s.removeAttribute("stroke-dasharray"),c.dashOffset?s.setAttribute("stroke-dashoffset",c.dashOffset):s.removeAttribute("stroke-dashoffset")):s.setAttribute("stroke","none"),c.fill?(s.setAttribute("fill",c.fillColor||c.color),s.setAttribute("fill-opacity",c.fillOpacity),s.setAttribute("fill-rule",c.fillRule||"evenodd")):s.setAttribute("fill","none"))},_updatePoly:function(i,s){this._setPath(i,K(i._parts,s))},_updateCircle:function(i){var s=i._point,c=Math.max(Math.round(i._radius),1),h=Math.max(Math.round(i._radiusY),1)||c,v="a"+c+","+h+" 0 1,0 ",S=i._empty()?"M0 0":"M"+(s.x-c)+","+s.y+v+c*2+",0 "+v+-c*2+",0 ";this._setPath(i,S)},_setPath:function(i,s){i._path.setAttribute("d",s)},_bringToFront:function(i){ci(i._path)},_bringToBack:function(i){di(i._path)}});pe.vml&&Oa.include(Ok);function __(i){return pe.svg||pe.vml?new Oa(i):null}De.include({getRenderer:function(i){var s=i.options.renderer||this._getPaneRenderer(i.options.pane)||this.options.renderer||this._renderer;return s||(s=this._renderer=this._createRenderer()),this.hasLayer(s)||this.addLayer(s),s},_getPaneRenderer:function(i){if(i==="overlayPane"||i===void 0)return!1;var s=this._paneRenderers[i];return s===void 0&&(s=this._createRenderer({pane:i}),this._paneRenderers[i]=s),s},_createRenderer:function(i){return this.options.preferCanvas&&m_(i)||__(i)}});var g_=pi.extend({initialize:function(i,s){pi.prototype.initialize.call(this,this._boundsToLatLngs(i),s)},setBounds:function(i){return this.setLatLngs(this._boundsToLatLngs(i))},_boundsToLatLngs:function(i){return i=Z(i),[i.getSouthWest(),i.getNorthWest(),i.getNorthEast(),i.getSouthEast()]}});function Lk(i,s){return new g_(i,s)}Oa.create=al,Oa.pointsToPath=K,fr.geometryToLayer=Xs,fr.coordsToLatLng=pd,fr.coordsToLatLngs=el,fr.latLngToCoords=md,fr.latLngsToCoords=tl,fr.getFeature=mi,fr.asFeature=nl,De.mergeOptions({boxZoom:!0});var v_=Zn.extend({initialize:function(i){this._map=i,this._container=i._container,this._pane=i._panes.overlayPane,this._resetStateTimeout=0,i.on("unload",this._destroy,this)},addHooks:function(){Ee(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Ye(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){at(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(i){if(!i.shiftKey||i.which!==1&&i.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),ya(),Yc(),this._startPoint=this._map.mouseEventToContainerPoint(i),Ee(document,{contextmenu:Eo,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(i){this._moved||(this._moved=!0,this._box=Ue("div","leaflet-zoom-box",this._container),Oe(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(i);var s=new O(this._point,this._startPoint),c=s.getSize();gt(this._box,s.min),this._box.style.width=c.x+"px",this._box.style.height=c.y+"px"},_finish:function(){this._moved&&(at(this._box),pt(this._container,"leaflet-crosshair")),ba(),Xc(),Ye(document,{contextmenu:Eo,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(i){if(!(i.which!==1&&i.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(l(this._resetState,this),0);var s=new z(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(s).fire("boxzoomend",{boxZoomBounds:s})}},_onKeyDown:function(i){i.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});De.addInitHook("addHandler","boxZoom",v_),De.mergeOptions({doubleClickZoom:!0});var y_=Zn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(i){var s=this._map,c=s.getZoom(),h=s.options.zoomDelta,v=i.originalEvent.shiftKey?c-h:c+h;s.options.doubleClickZoom==="center"?s.setZoom(v):s.setZoomAround(i.containerPoint,v)}});De.addInitHook("addHandler","doubleClickZoom",y_),De.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var b_=Zn.extend({addHooks:function(){if(!this._draggable){var i=this._map;this._draggable=new zr(i._mapPane,i._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),i.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),i.on("zoomend",this._onZoomEnd,this),i.whenReady(this._onZoomEnd,this))}Oe(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){pt(this._map._container,"leaflet-grab"),pt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var i=this._map;if(i._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var s=Z(this._map.options.maxBounds);this._offsetLimit=A(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;i.fire("movestart").fire("dragstart"),i.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(i){if(this._map.options.inertia){var s=this._lastTime=+new Date,c=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(c),this._times.push(s),this._prunePositions(s)}this._map.fire("move",i).fire("drag",i)},_prunePositions:function(i){for(;this._positions.length>1&&i-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var i=this._map.getSize().divideBy(2),s=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=s.subtract(i).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(i,s){return i-(i-s)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var i=this._draggable._newPos.subtract(this._draggable._startPos),s=this._offsetLimit;i.x<s.min.x&&(i.x=this._viscousLimit(i.x,s.min.x)),i.y<s.min.y&&(i.y=this._viscousLimit(i.y,s.min.y)),i.x>s.max.x&&(i.x=this._viscousLimit(i.x,s.max.x)),i.y>s.max.y&&(i.y=this._viscousLimit(i.y,s.max.y)),this._draggable._newPos=this._draggable._startPos.add(i)}},_onPreDragWrap:function(){var i=this._worldWidth,s=Math.round(i/2),c=this._initialWorldOffset,h=this._draggable._newPos.x,v=(h-s+c)%i+s-c,S=(h+s+c)%i-s-c,T=Math.abs(v+c)<Math.abs(S+c)?v:S;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=T},_onDragEnd:function(i){var s=this._map,c=s.options,h=!c.inertia||i.noInertia||this._times.length<2;if(s.fire("dragend",i),h)s.fire("moveend");else{this._prunePositions(+new Date);var v=this._lastPos.subtract(this._positions[0]),S=(this._lastTime-this._times[0])/1e3,T=c.easeLinearity,j=v.multiplyBy(T/S),W=j.distanceTo([0,0]),te=Math.min(c.inertiaMaxSpeed,W),fe=j.multiplyBy(te/W),Pe=te/(c.inertiaDeceleration*T),Te=fe.multiplyBy(-Pe/2).round();!Te.x&&!Te.y?s.fire("moveend"):(Te=s._limitOffset(Te,s.options.maxBounds),J(function(){s.panBy(Te,{duration:Pe,easeLinearity:T,noMoveStart:!0,animate:!0})}))}}});De.addInitHook("addHandler","dragging",b_),De.mergeOptions({keyboard:!0,keyboardPanDelta:80});var x_=Zn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(i){this._map=i,this._setPanDelta(i.options.keyboardPanDelta),this._setZoomDelta(i.options.zoomDelta)},addHooks:function(){var i=this._map._container;i.tabIndex<=0&&(i.tabIndex="0"),Ee(i,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Ye(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var i=document.body,s=document.documentElement,c=i.scrollTop||s.scrollTop,h=i.scrollLeft||s.scrollLeft;this._map._container.focus(),window.scrollTo(h,c)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(i){var s=this._panKeys={},c=this.keyCodes,h,v;for(h=0,v=c.left.length;h<v;h++)s[c.left[h]]=[-1*i,0];for(h=0,v=c.right.length;h<v;h++)s[c.right[h]]=[i,0];for(h=0,v=c.down.length;h<v;h++)s[c.down[h]]=[0,i];for(h=0,v=c.up.length;h<v;h++)s[c.up[h]]=[0,-1*i]},_setZoomDelta:function(i){var s=this._zoomKeys={},c=this.keyCodes,h,v;for(h=0,v=c.zoomIn.length;h<v;h++)s[c.zoomIn[h]]=i;for(h=0,v=c.zoomOut.length;h<v;h++)s[c.zoomOut[h]]=-i},_addHooks:function(){Ee(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Ye(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(i){if(!(i.altKey||i.ctrlKey||i.metaKey)){var s=i.keyCode,c=this._map,h;if(s in this._panKeys){if(!c._panAnim||!c._panAnim._inProgress)if(h=this._panKeys[s],i.shiftKey&&(h=q(h).multiplyBy(3)),c.options.maxBounds&&(h=c._limitOffset(q(h),c.options.maxBounds)),c.options.worldCopyJump){var v=c.wrapLatLng(c.unproject(c.project(c.getCenter()).add(h)));c.panTo(v)}else c.panBy(h)}else if(s in this._zoomKeys)c.setZoom(c.getZoom()+(i.shiftKey?3:1)*this._zoomKeys[s]);else if(s===27&&c._popup&&c._popup.options.closeOnEscapeKey)c.closePopup();else return;Eo(i)}}});De.addInitHook("addHandler","keyboard",x_),De.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var w_=Zn.extend({addHooks:function(){Ee(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Ye(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(i){var s=Vm(i),c=this._map.options.wheelDebounceTime;this._delta+=s,this._lastMousePos=this._map.mouseEventToContainerPoint(i),this._startTime||(this._startTime=+new Date);var h=Math.max(c-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(l(this._performZoom,this),h),Eo(i)},_performZoom:function(){var i=this._map,s=i.getZoom(),c=this._map.options.zoomSnap||0;i._stop();var h=this._delta/(this._map.options.wheelPxPerZoomLevel*4),v=4*Math.log(2/(1+Math.exp(-Math.abs(h))))/Math.LN2,S=c?Math.ceil(v/c)*c:v,T=i._limitZoom(s+(this._delta>0?S:-S))-s;this._delta=0,this._startTime=null,T&&(i.options.scrollWheelZoom==="center"?i.setZoom(s+T):i.setZoomAround(this._lastMousePos,s+T))}});De.addInitHook("addHandler","scrollWheelZoom",w_);var Tk=600;De.mergeOptions({tapHold:pe.touchNative&&pe.safari&&pe.mobile,tapTolerance:15});var k_=Zn.extend({addHooks:function(){Ee(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Ye(this._map._container,"touchstart",this._onDown,this)},_onDown:function(i){if(clearTimeout(this._holdTimeout),i.touches.length===1){var s=i.touches[0];this._startPos=this._newPos=new M(s.clientX,s.clientY),this._holdTimeout=setTimeout(l(function(){this._cancel(),this._isTapValid()&&(Ee(document,"touchend",Tt),Ee(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",s))},this),Tk),Ee(document,"touchend touchcancel contextmenu",this._cancel,this),Ee(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function i(){Ye(document,"touchend",Tt),Ye(document,"touchend touchcancel",i)},_cancel:function(){clearTimeout(this._holdTimeout),Ye(document,"touchend touchcancel contextmenu",this._cancel,this),Ye(document,"touchmove",this._onMove,this)},_onMove:function(i){var s=i.touches[0];this._newPos=new M(s.clientX,s.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(i,s){var c=new MouseEvent(i,{bubbles:!0,cancelable:!0,view:window,screenX:s.screenX,screenY:s.screenY,clientX:s.clientX,clientY:s.clientY});c._simulated=!0,s.target.dispatchEvent(c)}});De.addInitHook("addHandler","tapHold",k_),De.mergeOptions({touchZoom:pe.touch,bounceAtZoomLimits:!0});var S_=Zn.extend({addHooks:function(){Oe(this._map._container,"leaflet-touch-zoom"),Ee(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){pt(this._map._container,"leaflet-touch-zoom"),Ye(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(i){var s=this._map;if(!(!i.touches||i.touches.length!==2||s._animatingZoom||this._zooming)){var c=s.mouseEventToContainerPoint(i.touches[0]),h=s.mouseEventToContainerPoint(i.touches[1]);this._centerPoint=s.getSize()._divideBy(2),this._startLatLng=s.containerPointToLatLng(this._centerPoint),s.options.touchZoom!=="center"&&(this._pinchStartLatLng=s.containerPointToLatLng(c.add(h)._divideBy(2))),this._startDist=c.distanceTo(h),this._startZoom=s.getZoom(),this._moved=!1,this._zooming=!0,s._stop(),Ee(document,"touchmove",this._onTouchMove,this),Ee(document,"touchend touchcancel",this._onTouchEnd,this),Tt(i)}},_onTouchMove:function(i){if(!(!i.touches||i.touches.length!==2||!this._zooming)){var s=this._map,c=s.mouseEventToContainerPoint(i.touches[0]),h=s.mouseEventToContainerPoint(i.touches[1]),v=c.distanceTo(h)/this._startDist;if(this._zoom=s.getScaleZoom(v,this._startZoom),!s.options.bounceAtZoomLimits&&(this._zoom<s.getMinZoom()&&v<1||this._zoom>s.getMaxZoom()&&v>1)&&(this._zoom=s._limitZoom(this._zoom)),s.options.touchZoom==="center"){if(this._center=this._startLatLng,v===1)return}else{var S=c._add(h)._divideBy(2)._subtract(this._centerPoint);if(v===1&&S.x===0&&S.y===0)return;this._center=s.unproject(s.project(this._pinchStartLatLng,this._zoom).subtract(S),this._zoom)}this._moved||(s._moveStart(!0,!1),this._moved=!0),le(this._animRequest);var T=l(s._move,s,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=J(T,this,!0),Tt(i)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,le(this._animRequest),Ye(document,"touchmove",this._onTouchMove,this),Ye(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});De.addInitHook("addHandler","touchZoom",S_),De.BoxZoom=v_,De.DoubleClickZoom=y_,De.Drag=b_,De.Keyboard=x_,De.ScrollWheelZoom=w_,De.TapHold=k_,De.TouchZoom=S_,n.Bounds=O,n.Browser=pe,n.CRS=de,n.Canvas=p_,n.Circle=hd,n.CircleMarker=Ys,n.Class=Q,n.Control=Sn,n.DivIcon=d_,n.DivOverlay=Vn,n.DomEvent=K1,n.DomUtil=V1,n.Draggable=zr,n.Evented=B,n.FeatureGroup=cr,n.GeoJSON=fr,n.GridLayer=Ca,n.Handler=Zn,n.Icon=hi,n.ImageOverlay=rl,n.LatLng=re,n.LatLngBounds=z,n.Layer=Pn,n.LayerGroup=fi,n.LineUtil=ak,n.Map=De,n.Marker=Js,n.Mixin=tk,n.Path=Nr,n.Point=M,n.PolyUtil=sk,n.Polygon=pi,n.Polyline=dr,n.Popup=ol,n.PosAnimation=qm,n.Projection=lk,n.Rectangle=g_,n.Renderer=hr,n.SVG=Oa,n.SVGOverlay=c_,n.TileLayer=_i,n.Tooltip=il,n.Transformation=$e,n.Util=X,n.VideoOverlay=u_,n.bind=l,n.bounds=A,n.canvas=m_,n.circle=_k,n.circleMarker=mk,n.control=ka,n.divIcon=Pk,n.extend=o,n.featureGroup=fk,n.geoJSON=l_,n.geoJson=yk,n.gridLayer=Ck,n.icon=hk,n.imageOverlay=bk,n.latLng=ue,n.latLngBounds=Z,n.layerGroup=dk,n.map=Q1,n.marker=pk,n.point=q,n.polygon=vk,n.polyline=gk,n.popup=kk,n.rectangle=Lk,n.setOptions=w,n.stamp=d,n.svg=__,n.svgOverlay=wk,n.tileLayer=f_,n.tooltip=Sk,n.transformation=Le,n.version=r,n.videoOverlay=xk;var Rk=window.L;n.noConflict=function(){return window.L=Rk,this},window.L=n})})(VO,Rh);function qO(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Jd,mw={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/Jd=mw,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var a=typeof o;if(a==="string"||a==="number")n.push(o);else if(Array.isArray(o)){if(o.length){var l=t.apply(null,o);l&&n.push(l)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){n.push(o.toString());continue}for(var u in o)e.call(o,u)&&o[u]&&n.push(u)}}}return n.join(" ")}Jd.exports?(t.default=t,Jd.exports=t):window.classNames=t}();var Bv,Mv,Dv,Wi=qO(mw.exports);function KO(e){const t=a=>{var l;return(l=window?.matchMedia(a).matches)!==null&&l!==void 0&&l},[n,r]=E.useState(t(e)),o=()=>{r(t(e))};return E.useEffect(()=>{const a=window.matchMedia(e);return o(),a.addEventListener("change",o),()=>a.removeEventListener("change",o)},[e]),n}function Ah(){return Ah=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ah.apply(this,arguments)}var jv,Fv,Uv,QO=function(e){return E.createElement("svg",Ah({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},e),Bv||(Bv=E.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),Mv||(Mv=E.createElement("path",{fillRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z",clipRule:"evenodd"})),Dv||(Dv=E.createElement("path",{fillRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z",clipRule:"evenodd"})))};function zh(){return zh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zh.apply(this,arguments)}var GO=function(e){return E.createElement("svg",zh({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},e),jv||(jv=E.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),Fv||(Fv=E.createElement("path",{fillRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z",clipRule:"evenodd"})),Uv||(Uv=E.createElement("path",{fillRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z",clipRule:"evenodd"})))};function Ae(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var Kr,On={panel:"Panel-module_panel__4VWNp","panel--mobile-layout":"Panel-module_panel--mobile-layout__OII-B",panel__pointer:"Panel-module_panel__pointer__BETJ8","panel__pointer-position":"Panel-module_panel__pointer-position__Zer8q","panel__content-wrapper--info":"Panel-module_panel__content-wrapper--info__lrfgo","panel__pointer--info":"Panel-module_panel__pointer--info__5OaTN","panel__content-wrapper--success":"Panel-module_panel__content-wrapper--success__k0JQD","panel__pointer--success":"Panel-module_panel__pointer--success__O-X6n","panel__content-wrapper--warning":"Panel-module_panel__content-wrapper--warning__vYY8E","panel__pointer--warning":"Panel-module_panel__pointer--warning__l5Zf8","panel__content-wrapper--error":"Panel-module_panel__content-wrapper--error__3LhKe","panel__pointer--error":"Panel-module_panel__pointer--error__4MGTF","panel__content-wrapper":"Panel-module_panel__content-wrapper__oiWk8","panel__icon-wrapper":"Panel-module_panel__icon-wrapper__631EQ",panel__content:"Panel-module_panel__content__U3cAc",panel__header:"Panel-module_panel__header__UJuRe",panel__body:"Panel-module_panel__body__gRd1x"};Ae(`/* breakpoints-xs */
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
`),function(e){e.Success="success",e.Info="info",e.Warning="warning",e.Error="error"}(Kr||(Kr={}));const JO=({size:e,variant:t})=>{switch(t){case Kr.Info:case Kr.Error:case Kr.Warning:return D.createElement(QO,{style:{width:e,height:e},"data-testid":"panel-icon-info"});case Kr.Success:return D.createElement(GO,{style:{width:e,height:e},"data-testid":"panel-icon-success"})}},YO=({children:e})=>D.createElement("div",{className:Wi(On["panel__pointer-position"])},e),XO=({renderIcon:e=JO,title:t,children:n,variant:r=Kr.Info,showPointer:o=!1,showIcon:a=!0,forceMobileLayout:l=!1,renderArrow:u=YO})=>{const d=(({forceMobileLayout:p})=>{const m=KO(`(max-width: ${WO})`);return!!p||m})({forceMobileLayout:l}),f=d?UO:$O;return D.createElement("div",{className:Wi(On.panel,{[On["panel--mobile-layout"]]:d})},o&&u({children:D.createElement("div",{"data-testid":"panel-pointer",className:Wi(On.panel__pointer,On[`panel__pointer--${r}`])})}),D.createElement("div",{"data-testid":"panel-content-wrapper",className:Wi(On["panel__content-wrapper"],On[`panel__content-wrapper--${r}`])},a&&D.createElement("div",{"data-testid":"panel-icon-wrapper",className:On["panel__icon-wrapper"]},e({size:f,variant:r})),D.createElement("div",{className:On.panel__content},t&&D.createElement("h2",{className:On.panel__header},t),D.createElement("div",{className:On.panel__body},n))))};Ae(`.PopoverPanel-module_popover-panel__tGILa {
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
`);var $v;(function(e){e.Primary="primary",e.Secondary="secondary"})($v||($v={}));E.createContext(void 0);Ae(`.Accordion-module_accordion__LVhhv {
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
`);function _w(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}const Wv=e=>{var{svgIconComponent:t}=e,n=_w(e,["svgIconComponent"]);return E.isValidElement(t)?E.cloneElement(t,Object.assign({},n)):null};var Nh,Ih,Bh,Qn={"altinn-button":"Button-module_altinn-button__66e22",icon:"Button-module_icon__-43u5","altinn-button--small":"Button-module_altinn-button--small__Dgk-Q","altinn-button--medium":"Button-module_altinn-button--medium__bOVBh","altinn-button--large":"Button-module_altinn-button--large__xStsn","altinn-button--full-width":"Button-module_altinn-button--full-width__MAP1E","altinn-button--dashed-border":"Button-module_altinn-button--dashed-border__qpC6S","altinn-button--only-icon":"Button-module_altinn-button--only-icon__dHhst","altinn-button--filled":"Button-module_altinn-button--filled__-w8IZ","altinn-button--outline":"Button-module_altinn-button--outline__NWnjl","altinn-button--quiet":"Button-module_altinn-button--quiet__2HgNN","altinn-button--filled--primary":"Button-module_altinn-button--filled--primary__qR1t6","altinn-button--filled--secondary":"Button-module_altinn-button--filled--secondary__RXBZU","altinn-button--filled--success":"Button-module_altinn-button--filled--success__-hCDf","altinn-button--filled--danger":"Button-module_altinn-button--filled--danger__dshZU","altinn-button--filled--inverted":"Button-module_altinn-button--filled--inverted__B3H2y","altinn-button--outline--primary":"Button-module_altinn-button--outline--primary__yrQtz","altinn-button--outline--secondary":"Button-module_altinn-button--outline--secondary__NQPoO","altinn-button--outline--success":"Button-module_altinn-button--outline--success__oAdH7","altinn-button--outline--danger":"Button-module_altinn-button--outline--danger__ngRhZ","altinn-button--outline--inverted":"Button-module_altinn-button--outline--inverted__opiJ3","altinn-button--quiet--primary":"Button-module_altinn-button--quiet--primary__ym-xv","altinn-button--quiet--secondary":"Button-module_altinn-button--quiet--secondary__LschY","altinn-button--quiet--success":"Button-module_altinn-button--quiet--success__AvIPs","altinn-button--quiet--danger":"Button-module_altinn-button--quiet--danger__buvJM","altinn-button--quiet--inverted":"Button-module_altinn-button--quiet--inverted__-VC-B"};Ae(`.Button-module_altinn-button__66e22 {
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
`),function(e){e.Small="small",e.Medium="medium",e.Large="large"}(Nh||(Nh={})),function(e){e.Primary="primary",e.Secondary="secondary",e.Success="success",e.Danger="danger",e.Inverted="inverted"}(Ih||(Ih={})),function(e){e.Filled="filled",e.Outline="outline",e.Quiet="quiet"}(Bh||(Bh={}));var Bu,Mu;E.forwardRef((e,t)=>{var{children:n,color:r=Ih.Primary,variant:o=Bh.Filled,size:a=Nh.Small,fullWidth:l=!1,dashedBorder:u=!1,iconPlacement:d="left",icon:f,type:p="button",className:m}=e,g=_w(e,["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"]);return D.createElement("button",Object.assign({},g,{ref:t,className:Wi(Qn["altinn-button"],Qn[`altinn-button--${a}`],Qn[`altinn-button--${o}`],Qn[`altinn-button--${r}`],Qn[`altinn-button--${o}--${r}`],{[Qn["altinn-button--full-width"]]:l},{[Qn["altinn-button--dashed-border"]]:u},{[Qn["altinn-button--only-icon"]]:!n&&f},m),type:p}),f&&d==="left"&&D.createElement(Wv,{svgIconComponent:f,className:Qn.icon}),n,f&&d==="right"&&D.createElement(Wv,{svgIconComponent:f,className:Qn.icon}))});(function(e){e.Primary="primary",e.Success="success"})(Bu||(Bu={})),function(e){e.Small="small",e.Medium="medium"}(Mu||(Mu={}));const eL=E.createContext({color:Bu.Primary,size:Mu.Medium});var tL="Page-module_page__THNNc";Ae(`.Page-module_page__THNNc {
  width: 100%;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
}
`);const nL=({children:e,color:t=Bu.Primary,size:n=Mu.Medium})=>D.createElement("div",{className:tL},D.createElement(eL.Provider,{value:{color:t,size:n}},e));Ae(`.PageHeader-module_page-header__94GS1 {
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
`);var rL={"page-content":"PageContent-module_page-content__-sHWi"};Ae(`.PageContent-module_page-content__-sHWi {
  --component-page_content-vertical-padding: 2rem;
  background-color: white;
  padding-top: var(--component-page_content-vertical-padding);
  padding-bottom: var(--component-page_content-vertical-padding);
  box-sizing: inherit;
}
`);const Yd=({children:e})=>D.createElement("div",{className:Wi(rL["page-content"])},e);var Mh;Ae(`.List-module_list__9aWGq {
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
`),function(e){e.Solid="solid",e.Dashed="dashed"}(Mh||(Mh={}));E.createContext({borderStyle:Mh.Solid});Ae(`.ListItem-module_list-item__OIENi {
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
`);var Hv,Zv,Vv;(function(e){e.Default="default",e.Error="error",e.Disabled="disabled",e.ReadOnlyInfo="readonly-info",e.ReadOnlyConfirm="readonly-confirm"})(Hv||(Hv={})),function(e){e.ReadOnlyInfo="readonly-info",e.ReadOnlyConfirm="readonly-confirm"}(Zv||(Zv={})),function(e){e.None="none",e.Error="error",e.Search="search"}(Vv||(Vv={}));Ae(`.InputWrapper-module_InputWrapper__us2BQ {
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
`);var Dh,qv;Ae(`Table {
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
`),function(e){e.Header="header",e.Body="body",e.Footer="footer"}(Dh||(Dh={})),function(e){e.Descending="desc",e.Ascending="asc",e.NotSortable="notSortable",e.NotActive="notActive"}(qv||(qv={}));E.createContext(void 0);E.createContext({variantStandard:Dh.Body});Ae(`.TableHeader-module_table-header__mrqgB {
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
`);var Kv;Ae(`.CheckboxRadioTemplate-module_altinn-template__x5xJ- {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Kv||(Kv={}));var Qv;Ae(`.RadioButton-module_altinn-radio__iDfpf {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Qv||(Qv={}));Ae(`.Checkbox-module_altinn-checkbox__UGXBu {
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
`);var Gv;Ae(`.FieldSet-module_altinn-field-set__NebiS {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Gv||(Gv={}));var Jv;Ae(`.CheckboxGroup-module_altinn-checkbox-group__Q7GlX {
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
`),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(Jv||(Jv={}));Ae(`.Pagination-module_pagination-icon__zVOLT {
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
`);var Yv,Xv;Ae(`.RadioGroup-module_altinn-radio-group__Eje9Q {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Yv||(Yv={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(Xv||(Xv={}));let ey=0;function oL(e){const[t,n]=E.useState(e),r=e||t;return E.useEffect(()=>{t==null&&(ey+=1,n(`aksel-icon-${ey}`))},[t]),r}const ty=D["useId"];function dm(e){var t;if(ty!==void 0){const n=ty();return e??n.replace(/(:)/g,"")}return(t=oL(e))!==null&&t!==void 0?t:""}var iL=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const aL=E.forwardRef((e,t)=>{var{title:n,titleId:r}=e,o=iL(e,["title","titleId"]);let a=dm();return a=n?r||"title-"+a:void 0,E.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},o),n?E.createElement("title",{id:a},n):null,E.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 17.414 4.293 9.707l1.414-1.414L12 14.586l6.293-6.293 1.414 1.414L12 17.414Z",fill:"currentColor"}))}),sL=aL;var lL=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const uL=E.forwardRef((e,t)=>{var{title:n,titleId:r}=e,o=lL(e,["title","titleId"]);let a=dm();return a=n?r||"title-"+a:void 0,E.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},o),n?E.createElement("title",{id:a},n):null,E.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-11c2.205 0 4 1.657 4 3.693 0 .986-.416 1.914-1.172 2.612l-.593.54-.294.28c-.477.466-.869.94-.936 1.417l-.01.144v.814h-1.991v-.814c0-1.254.84-2.214 1.675-3.002l.74-.68c.38-.35.59-.816.59-1.31 0-1.024-.901-1.856-2.01-1.856-1.054 0-1.922.755-2.002 1.71l-.006.145H8C8 6.657 9.794 5 12 5Z",fill:"currentColor"}))}),cL=uL;var dL=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const fL=E.forwardRef((e,t)=>{var{title:n,titleId:r}=e,o=dL(e,["title","titleId"]);let a=dm();return a=n?r||"title-"+a:void 0,E.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},o),n?E.createElement("title",{id:a},n):null,E.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 16a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-11c2.205 0 4 1.657 4 3.693 0 .986-.416 1.914-1.172 2.612l-.593.54-.294.28c-.477.466-.869.94-.936 1.417l-.01.144v.814h-1.991v-.814c0-1.254.84-2.214 1.675-3.002l.74-.68c.38-.35.59-.816.59-1.31 0-1.024-.901-1.856-2.01-1.856-1.054 0-1.922.755-2.002 1.71l-.006.145H8C8 6.657 9.794 5 12 5Z",fill:"currentColor"}))}),hL=fL;function fm(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}var Ps;(function(e){e.event="event",e.props="prop"})(Ps||(Ps={}));function br(){}function Yo(e){return!!(e||"").match(/\d/)}function Vo(e){return e==null}function pL(e){return typeof e=="number"&&isNaN(e)}function gw(e){return Vo(e)||pL(e)||typeof e=="number"&&!isFinite(e)}function vw(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function mL(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function _L(e,t,n){var r=mL(n),o=e.search(/[1-9]/);return o=o===-1?e.length:o,e.substring(0,o)+e.substring(o,e.length).replace(r,"$1"+t)}function gL(e){var t=E.useRef(e);t.current=e;var n=E.useRef(function(){for(var r=[],o=arguments.length;o--;)r[o]=arguments[o];return t.current.apply(t,r)});return n.current}function hm(e,t){t===void 0&&(t=!0);var n=e[0]==="-",r=n&&t;e=e.replace("-","");var o=e.split("."),a=o[0],l=o[1]||"";return{beforeDecimal:a,afterDecimal:l,hasNegation:n,addNegation:r}}function vL(e){if(!e)return e;var t=e[0]==="-";t&&(e=e.substring(1,e.length));var n=e.split("."),r=n[0].replace(/^0+/,"")||"0",o=n[1]||"";return(t?"-":"")+r+(o?"."+o:"")}function yw(e,t,n){for(var r="",o=n?"0":"",a=0;a<=t-1;a++)r+=e[a]||o;return r}function ny(e,t){return Array(t+1).join(e)}function bw(e){var t=e+"",n=t[0]==="-"?"-":"";n&&(t=t.substring(1));var r=t.split(/[eE]/g),o=r[0],a=r[1];if(a=Number(a),!a)return n+o;o=o.replace(".","");var l=1+a,u=o.length;return l<0?o="0."+ny("0",Math.abs(l))+o:l>=u?o=o+ny("0",l-u):o=(o.substring(0,l)||"0")+"."+o.substring(l),n+o}function ry(e,t,n){if(["","-"].indexOf(e)!==-1)return e;var r=(e.indexOf(".")!==-1||n)&&t,o=hm(e),a=o.beforeDecimal,l=o.afterDecimal,u=o.hasNegation,d=parseFloat("0."+(l||"0")),f=l.length<=t?"0."+l:d.toFixed(t),p=f.split("."),m=a.split("").reverse().reduce(function(w,P,_){return w.length>_?(Number(w[0])+Number(P)).toString()+w.substring(1,w.length):P+w},p[0]),g=yw(p[1]||"",t,n),x=u?"-":"",y=r?".":"";return""+x+m+y+g}function Hr(e,t){if(e.value=e.value,e!==null){if(e.createTextRange){var n=e.createTextRange();return n.move("character",t),n.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}function xw(e,t){for(var n=0,r=0,o=e.length,a=t.length;e[n]===t[n]&&n<o;)n++;for(;e[o-1-r]===t[a-1-r]&&a-r>n&&o-r>n;)r++;return{from:{start:n,end:o-r},to:{start:n,end:a-r}}}function yL(e,t,n){return Math.min(Math.max(e,t),n)}function Xd(e){return Math.max(e.selectionStart,e.selectionEnd)}function bL(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function ww(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function kw(e,t){return e===void 0&&(e=" "),typeof e=="string"?e:e[t]||" "}function xL(e,t,n,r,o,a){var l=xw(n,e),u=l.from,d=l.to;if(u.end-u.start===1&&u.end===d.end&&d.end===r)return r;var f=o.findIndex(function(R){return R}),p=e.slice(0,f);!t&&!n.startsWith(p)&&(n=p+n,r=r+p.length);for(var m=n.length,g=e.length,x={},y=new Array(m),w=0;w<m;w++){y[w]=-1;for(var P=0,_=g;P<_;P++)if(n[w]===e[P]&&x[P]!==!0){y[w]=P,x[P]=!0;break}}for(var b=r;b<m&&(y[b]===-1||!a(n[b]));)b++;var k=b===m||y[b]===-1?g:y[b];for(b=r-1;b>0&&y[b]===-1;)b--;var C=b===-1||y[b]===-1?0:y[b]+1;return C>k?k:r-C<k-r?C:k}function Du(e,t,n,r){var o=e.length;if(t=yL(t,0,o),r==="left"){for(;t>=0&&!n[t];)t--;t===-1&&(t=n.indexOf(!0))}else{for(;t<=o&&!n[t];)t++;t>o&&(t=n.lastIndexOf(!0))}return t===-1&&(t=o),t}function wL(e){for(var t=Array.from({length:e.length+1}).map(function(){return!0}),n=0,r=t.length;n<r;n++)t[n]=!!(Yo(e[n])||Yo(e[n-1]));return t}function Sw(e,t,n,r,o,a){a===void 0&&(a=br);var l=gL(function(y,w){var P,_;return gw(y)?(_="",P=""):typeof y=="number"||w?(_=typeof y=="number"?bw(y):y,P=r(_)):(_=o(y,void 0),P=r(_)),{formattedValue:P,numAsString:_}}),u=E.useState(function(){return l(Vo(e)?t:e,n)}),d=u[0],f=u[1],p=function(y,w){y.formattedValue!==d.formattedValue&&f({formattedValue:y.formattedValue,numAsString:y.value}),a(y,w)},m=e,g=n;Vo(e)&&(m=d.numAsString,g=!0);var x=l(m,g);return E.useMemo(function(){f(x)},[x.formattedValue]),[d,p]}function kL(e){return e.replace(/[^0-9]/g,"")}function SL(e){return e}function Pw(e){var t=e.type;t===void 0&&(t="text");var n=e.displayType;n===void 0&&(n="input");var r=e.customInput,o=e.renderText,a=e.getInputRef,l=e.format;l===void 0&&(l=SL);var u=e.removeFormatting;u===void 0&&(u=kL);var d=e.defaultValue,f=e.valueIsNumericString,p=e.onValueChange,m=e.isAllowed,g=e.onChange;g===void 0&&(g=br);var x=e.onKeyDown;x===void 0&&(x=br);var y=e.onMouseUp;y===void 0&&(y=br);var w=e.onFocus;w===void 0&&(w=br);var P=e.onBlur;P===void 0&&(P=br);var _=e.value,b=e.getCaretBoundary;b===void 0&&(b=wL);var k=e.isValidInputCharacter;k===void 0&&(k=Yo);var C=fm(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter"]),R=Sw(_,d,!!f,l,u,p),I=R[0],N=I.formattedValue,U=I.numAsString,$=R[1],F=E.useRef({formattedValue:N,numAsString:U}),J=function(oe,he){F.current={formattedValue:oe.formattedValue,numAsString:oe.value},$(oe,he)},le=E.useState(!1),X=le[0],Q=le[1],ce=E.useRef(null),Y=E.useRef({setCaretTimeout:null,focusTimeout:null});E.useEffect(function(){return Q(!0),function(){clearTimeout(Y.current.setCaretTimeout),clearTimeout(Y.current.focusTimeout)}},[]);var B=l,M=function(oe,he){var K=parseFloat(he);return{formattedValue:oe,value:he,floatValue:isNaN(K)?void 0:K}},ne=function(oe,he,K){oe.selectionStart===0&&oe.selectionEnd===oe.value.length||(Hr(oe,he),Y.current.setCaretTimeout=setTimeout(function(){oe.value===K&&oe.selectionStart!==oe.selectionEnd&&Hr(oe,he)},0))},q=function(oe,he,K){return Du(oe,he,b(oe),K)},O=function(oe,he,K){var ae=b(he),ve=xL(he,N,oe,K,ae,k);return ve=Du(he,ve,ae),ve},A=function(oe){var he=oe.formattedValue;he===void 0&&(he="");var K=oe.input,ae=oe.setCaretPosition;ae===void 0&&(ae=!0);var ve=oe.source,xe=oe.event,Se=oe.numAsString,ze=oe.caretPos;if(K){if(ze===void 0&&ae){var We=oe.inputValue||K.value,Kt=Xd(K);K.value=he,ze=O(We,he,Kt)}K.value=he,ae&&ze!==void 0&&ne(K,ze,he)}he!==N&&J(M(he,Se),{event:xe,source:ve})};E.useEffect(function(){var oe=F.current,he=oe.formattedValue,K=oe.numAsString;N!==he&&(N!==U||he!==K)&&J(M(N,U),{event:void 0,source:Ps.props})},[N,U]);var z=ce.current?Xd(ce.current):void 0,Z=typeof window<"u"?E.useLayoutEffect:E.useEffect;Z(function(){var oe=ce.current;if(N!==F.current.formattedValue&&oe){var he=O(F.current.formattedValue,N,z);oe.value=N,ne(oe,he,N)}},[N]);var re=function(oe,he,K){var ae=xw(N,oe),ve=Object.assign(Object.assign({},ae),{lastValue:N}),xe=u(oe,ve),Se=B(xe);if(xe=u(Se,void 0),m&&!m(M(Se,xe))){var ze=he.target,We=Xd(ze),Kt=O(oe,N,We);return ze.value=N,ne(ze,Kt,N),!1}return A({formattedValue:Se,numAsString:xe,inputValue:oe,event:he,source:K,setCaretPosition:!0,input:he.target}),!0},ue=function(oe){var he=oe.target,K=he.value,ae=re(K,oe,Ps.event);ae&&g(oe)},de=function(oe){var he=oe.target,K=oe.key,ae=he.selectionStart,ve=he.selectionEnd,xe=he.value;xe===void 0&&(xe="");var Se;if(K==="ArrowLeft"||K==="Backspace"?Se=Math.max(ae-1,0):K==="ArrowRight"?Se=Math.min(ae+1,xe.length):K==="Delete"&&(Se=ae),Se===void 0||ae!==ve){x(oe);return}var ze=Se;if(K==="ArrowLeft"||K==="ArrowRight"){var We=K==="ArrowLeft"?"left":"right";ze=q(xe,Se,We),ze!==Se&&oe.preventDefault()}else K==="Delete"&&!k(xe[Se])?ze=q(xe,Se,"right"):K==="Backspace"&&!k(xe[Se])&&(ze=q(xe,Se,"left"));ze!==Se&&ne(he,ze,xe),oe.isUnitTestRun&&ne(he,ze,xe),x(oe)},be=function(oe){var he=oe.target,K=he.selectionStart,ae=he.selectionEnd,ve=he.value;if(ve===void 0&&(ve=""),K===ae){var xe=q(ve,K);xe!==K&&ne(he,xe,ve)}y(oe)},Je=function(oe){oe.persist&&oe.persist();var he=oe.target;ce.current=he,Y.current.focusTimeout=setTimeout(function(){var K=he.selectionStart,ae=he.selectionEnd,ve=he.value;ve===void 0&&(ve="");var xe=q(ve,K);xe!==K&&!(K===0&&ae===ve.length)&&ne(he,xe,ve),w(oe)},0)},et=function(oe){ce.current=null,clearTimeout(Y.current.focusTimeout),clearTimeout(Y.current.setCaretTimeout),P(oe)},$e=X&&bL()?"numeric":void 0,Le=Object.assign({inputMode:$e},C,{type:t,value:N,onChange:ue,onKeyDown:de,onMouseUp:be,onFocus:Je,onBlur:et});if(n==="text")return o?D.createElement(D.Fragment,null,o(N,C)||null):D.createElement("span",Object.assign({},C,{ref:a}),N);if(r){var tt=r;return D.createElement(tt,Object.assign({},Le,{ref:a}))}return D.createElement("input",Object.assign({},Le,{ref:a}))}function oy(e,t){var n=t.decimalScale,r=t.fixedDecimalScale,o=t.prefix;o===void 0&&(o="");var a=t.suffix;a===void 0&&(a="");var l=t.allowNegative,u=t.thousandsGroupStyle;if(u===void 0&&(u="thousand"),e===""||e==="-")return e;var d=jc(t),f=d.thousandSeparator,p=d.decimalSeparator,m=n!==0&&e.indexOf(".")!==-1||n&&r,g=hm(e,l),x=g.beforeDecimal,y=g.afterDecimal,w=g.addNegation;return n!==void 0&&(y=yw(y,n,!!r)),f&&(x=_L(x,f,u)),o&&(x=o+x),a&&(y=y+a),w&&(x="-"+x),e=x+(m&&p||"")+y,e}function jc(e){var t=e.decimalSeparator;t===void 0&&(t=".");var n=e.thousandSeparator,r=e.allowedDecimalSeparators;return n===!0&&(n=","),r||(r=[t,"."]),{decimalSeparator:t,thousandSeparator:n,allowedDecimalSeparators:r}}function PL(e,t){e===void 0&&(e="");var n=new RegExp("(-)"),r=new RegExp("(-)(.)*(-)"),o=n.test(e),a=r.test(e);return e=e.replace(/-/g,""),o&&!a&&t&&(e="-"+e),e}function CL(e,t){return new RegExp("(^-)|[0-9]|"+vw(e),t?"g":void 0)}function EL(e,t,n){return e===""?!0:!t?.match(/\d/)&&!n?.match(/\d/)&&typeof e=="string"&&!isNaN(Number(e))}function OL(e,t,n){var r;t===void 0&&(t=ww(e));var o=n.allowNegative,a=n.prefix;a===void 0&&(a="");var l=n.suffix;l===void 0&&(l="");var u=n.decimalScale,d=t.from,f=t.to,p=f.start,m=f.end,g=jc(n),x=g.allowedDecimalSeparators,y=g.decimalSeparator,w=e[m]===y;if(Yo(e)&&(e===a||e===l)&&t.lastValue==="")return e;if(m-p===1&&x.indexOf(e[p])!==-1){var P=u===0?"":y;e=e.substring(0,p)+P+e.substring(p+1,e.length)}var _=function(B,M,ne){var q=!1,O=!1;a.startsWith("-")?q=!1:B.startsWith("--")?(q=!1,O=!0):l.startsWith("-")&&B.length===l.length?q=!1:B[0]==="-"&&(q=!0);var A=q?1:0;return O&&(A=2),A&&(B=B.substring(A),M-=A,ne-=A),{value:B,start:M,end:ne,hasNegation:q}},b=_(e,p,m),k=b.hasNegation;r=b,e=r.value,p=r.start,m=r.end;var C=_(t.lastValue,d.start,d.end),R=C.start,I=C.end,N=C.value,U=e.substring(p,m);e.length&&N.length&&(R>N.length-l.length||I<a.length)&&!(U&&l.startsWith(U))&&(e=N);var $=0;e.startsWith(a)?$+=a.length:p<a.length&&($=p),e=e.substring($),m-=$;var F=e.length,J=e.length-l.length;e.endsWith(l)?F=J:(m>J||m>e.length-l.length)&&(F=m),e=e.substring(0,F),e=PL(k?"-"+e:e,o),e=(e.match(CL(y,!0))||[]).join("");var le=e.indexOf(y);e=e.replace(new RegExp(vw(y),"g"),function(B,M){return M===le?".":""});var X=hm(e,o),Q=X.beforeDecimal,ce=X.afterDecimal,Y=X.addNegation;return f.end-f.start<d.end-d.start&&Q===""&&w&&!parseFloat(ce)&&(e=Y?"-":""),e}function LL(e,t){var n=t.prefix;n===void 0&&(n="");var r=t.suffix;r===void 0&&(r="");var o=Array.from({length:e.length+1}).map(function(){return!0}),a=e[0]==="-";o.fill(!1,0,n.length+(a?1:0));var l=e.length;return o.fill(!1,l-r.length+1,l+1),o}function TL(e){var t=jc(e),n=t.thousandSeparator,r=t.decimalSeparator,o=e.prefix;o===void 0&&(o="");var a=e.allowNegative;if(a===void 0&&(a=!0),n===r)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+n+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+r+` (default value for decimalSeparator is .)
     `);return o.startsWith("-")&&a&&(console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+o+`
      allowNegative: `+a+`
    `),a=!1),Object.assign(Object.assign({},e),{allowNegative:a})}function RL(e){e=TL(e);var t=e.decimalSeparator;t===void 0&&(t="."),e.allowedDecimalSeparators,e.thousandsGroupStyle;var n=e.suffix,r=e.allowNegative,o=e.allowLeadingZeros,a=e.onKeyDown;a===void 0&&(a=br);var l=e.onBlur;l===void 0&&(l=br);var u=e.thousandSeparator,d=e.decimalScale,f=e.fixedDecimalScale,p=e.prefix;p===void 0&&(p="");var m=e.defaultValue,g=e.value,x=e.valueIsNumericString,y=e.onValueChange,w=fm(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),P=function(X){return oy(X,e)},_=function(X,Q){return OL(X,Q,e)},b=Vo(g)?m:g,k=x??EL(b,p,n);Vo(g)?Vo(m)||(k=x||typeof m=="number"):k=x||typeof g=="number";var C=function(X){return gw(X)?X:(typeof X=="number"&&(X=bw(X)),k&&typeof d=="number"?ry(X,d,!!f):X)},R=Sw(C(g),C(m),!!k,P,_,y),I=R[0],N=I.numAsString,U=I.formattedValue,$=R[1],F=function(X){var Q=X.target,ce=X.key,Y=Q.selectionStart,B=Q.selectionEnd,M=Q.value;if(M===void 0&&(M=""),Y!==B){a(X);return}ce==="Backspace"&&M[0]==="-"&&Y===p.length+1&&r&&Hr(Q,1);var ne=jc(e),q=ne.decimalSeparator,O=ne.allowedDecimalSeparators;ce==="Backspace"&&M[Y-1]===q&&d&&f&&(Hr(Q,Y-1),X.preventDefault()),O?.includes(ce)&&M[Y]===q&&Hr(Q,Y+1);var A=u===!0?",":u;ce==="Backspace"&&M[Y-1]===A&&Hr(Q,Y-1),ce==="Delete"&&M[Y]===A&&Hr(Q,Y+1),a(X)},J=function(X){var Q=N;if(Q.match(/\d/g)||(Q=""),o||(Q=vL(Q)),f&&d&&(Q=ry(Q,d,f)),Q!==N){var ce=oy(Q,e);$({formattedValue:ce,value:Q,floatValue:parseFloat(Q)},{event:X,source:Ps.event})}l(X)},le=function(X){return X===t?!0:Yo(X)};return Object.assign(Object.assign({},w),{value:U,valueIsNumericString:!1,isValidInputCharacter:le,onValueChange:$,format:P,removeFormatting:_,getCaretBoundary:function(X){return LL(X,e)},onKeyDown:F,onBlur:J})}function AL(e){var t=RL(e);return D.createElement(Pw,Object.assign({},t))}function zL(e,t){var n=t.format,r=t.allowEmptyFormatting,o=t.mask,a=t.patternChar;if(a===void 0&&(a="#"),e===""&&!r)return"";for(var l=0,u=n.split(""),d=0,f=n.length;d<f;d++)n[d]===a&&(u[d]=e[l]||kw(o,l),l+=1);return u.join("")}function NL(e,t,n){t===void 0&&(t=ww(e));var r=n.format,o=n.patternChar;o===void 0&&(o="#");var a=t.from,l=t.to,u=t.lastValue;u===void 0&&(u="");var d=function(P){return r[P]===o},f=function(P,_){for(var b="",k=0;k<P.length;k++)d(_+k)&&Yo(P[k])&&(b+=P[k]);return b},p=function(P){return P.replace(/[^0-9]/g,"")};if(!r.match(/\d/))return p(e);if(u===""&&e.length===r.length){for(var m="",g=0;g<e.length;g++)if(d(g))Yo(e[g])&&(m+=e[g]);else if(e[g]!==r[g])return p(e);return m}var x=u.substring(0,a.start),y=e.substring(l.start,l.end),w=u.substring(a.end);return""+f(x,0)+p(y)+f(w,a.end)}function IL(e,t){var n=t.format,r=t.mask,o=t.patternChar;o===void 0&&(o="#");var a=Array.from({length:e.length+1}).map(function(){return!0}),l=0,u=-1,d={};n.split("").forEach(function(g,x){var y=void 0;g===o&&(l++,y=kw(r,l-1),u===-1&&e[x]===y&&(u=x)),d[x]=y});for(var f=function(g){return n[g]===o&&e[g]!==d[g]},p=0,m=a.length;p<m;p++)a[p]=p===u||f(p)||f(p-1);return a[n.indexOf(o)]=!0,a}function BL(e){var t=e.mask;if(t){var n=t==="string"?t:t.toString();if(n.match(/\d/g))throw new Error("Mask "+t+" should not contain numeric character;")}}function ML(e,t){return e===""?!0:!t?.match(/\d/)&&typeof e=="string"&&(!!e.match(/^\d+$/)||e==="")}function DL(e){e.mask,e.allowEmptyFormatting;var t=e.format,n=e.inputMode;n===void 0&&(n="numeric");var r=e.onKeyDown;r===void 0&&(r=br);var o=e.patternChar;o===void 0&&(o="#");var a=e.value,l=e.defaultValue,u=e.valueIsNumericString,d=fm(e,["mask","allowEmptyFormatting","format","inputMode","onKeyDown","patternChar","value","defaultValue","valueIsNumericString"]);BL(e);var f=function(y){return IL(y,e)},p=function(y){var w=y.key,P=y.target,_=P.selectionStart,b=P.selectionEnd,k=P.value;if(_!==b){r(y);return}var C=_;if(w==="Backspace"||w==="Delete"){var R="right";if(w==="Backspace"){for(;C>0&&t[C-1]!==o;)C--;R="left"}else{for(var I=t.length;C<I&&t[C]!==o;)C++;R="right"}C=Du(k,C,f(k),R)}else t[C]!==o&&w!=="ArrowLeft"&&w!=="ArrowRight"&&(C=Du(k,C+1,f(k),"right"));C!==_&&Hr(P,C),r(y)},m=Vo(a)?l:a,g=u??ML(m,t),x=Object.assign(Object.assign({},e),{valueIsNumericString:g});return Object.assign(Object.assign({},d),{value:a,defaultValue:l,valueIsNumericString:g,inputMode:n,format:function(y){return zL(y,x)},removeFormatting:function(y,w){return NL(y,w,x)},getCaretBoundary:f,onKeyDown:p})}function jL(e){var t=DL(e);return D.createElement(Pw,Object.assign({},t))}function ft(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}var ef,Cw={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ef=Cw,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var a=typeof o;if(a==="string"||a==="number")n.push(o);else if(Array.isArray(o)){if(o.length){var l=t.apply(null,o);l&&n.push(l)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){n.push(o.toString());continue}for(var u in o)e.call(o,u)&&o[u]&&n.push(u)}}}return n.join(" ")}ef.exports?(t.default=t,ef.exports=t):window.classNames=t}();var qe=Cw.exports;const jh=e=>{var{svgIconComponent:t}=e,n=ft(e,["svgIconComponent"]);return E.isValidElement(t)?E.cloneElement(t,Object.assign({},n)):null};function Ie(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}jh.displayName="SvgIcon";var mr={button:"Button-module_button__2ZuB7 utility-module_focusable__1fBKr",icon:"Button-module_icon__-43u5",small:"Button-module_small__l39oh",medium:"Button-module_medium__KTxdk",large:"Button-module_large__6bsb7",fullWidth:"Button-module_fullWidth__36oJT",dashedBorder:"Button-module_dashedBorder__500FL",outline:"Button-module_outline__F5jq-",quiet:"Button-module_quiet__1KlhF",onlyIcon:"Button-module_onlyIcon__lENu3",filled:"Button-module_filled__inpPb",primary:"Button-module_primary__s1sM6",secondary:"Button-module_secondary__R0waJ",success:"Button-module_success__w6qB6",danger:"Button-module_danger__V4fX8",inverted:"Button-module_inverted__VD6YO"};Ie(`/**
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
  padding: calc(
    (var(--button-size) - var(--icon-size)) / 2 -
      var(--component-button-border_width-default)
  );
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
  --font-and-icon-color: var(
    --component-button-outline-primary-color-text-default
  );

  border-color: var(--component-button-outline-primary-color-border-default);
  background: var(--component-button-outline-primary-color-background-default);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_primary__s1sM6:not([aria-disabled='true'], :disabled):hover {
  --font-and-icon-color: var(--colors-blue-800);

  background: var(--component-button-outline-primary-color-background-hover);
  border-color: var(--component-button-outline-primary-color-border-hover);
}

.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_primary__s1sM6:not([aria-disabled='true'], :disabled):active {
  --font-and-icon-color: var(
    --component-button-outline-primary-color-text-pressed
  );

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
  --font-and-icon-color: var(
    --component-button-quiet-primary-color-text-default
  );
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
`);const FL=E.forwardRef((e,t)=>{var{children:n,color:r="primary",variant:o="filled",size:a="small",fullWidth:l=!1,dashedBorder:u=!1,iconPlacement:d="left",icon:f,type:p="button",className:m}=e,g=ft(e,["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"]);return D.createElement("button",Object.assign({},g,{ref:t,className:qe(mr.button,mr[a],mr[o],mr[r],{[mr.fullWidth]:l},{[mr.dashedBorder]:u},{[mr.onlyIcon]:!n&&f},m),type:p}),f&&d==="left"&&D.createElement(jh,{svgIconComponent:f,className:mr.icon}),n,f&&d==="right"&&D.createElement(jh,{svgIconComponent:f,className:mr.icon}))});function Ol(e,t,n){E.useEffect(()=>{const r=n??document.body;return r.addEventListener(e,t),()=>r.removeEventListener(e,t)},[e,t,n])}function tf(e,t,n){E.useEffect(()=>{if(!n)return;const r=o=>{o.key===e&&t()};return n.addEventListener("keydown",r),()=>n.removeEventListener("keydown",r)},[e,t,n])}function ju(e){const t=E.useRef();return E.useEffect(()=>{t.current=e},[e]),t.current}FL.displayName="Button";const Cs=(e,t)=>{const n=E.useRef(!0);E.useEffect(()=>{if(!n.current)return e();n.current=!1},t)};function Ew(e,t){if(e===t)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(const[n]of e.entries())if(e[n]!==t[n])return!1;return!0}function Ow(e){return e.length===new Set(e).size}var UL="Tabs-module_tabs__QzIkz",$L="Tabs-module_tablist__WR6ag",WL="Tabs-module_tab__IdDYc",HL="Tabs-module_selected__TxfYv",ZL="Tabs-module_divider__-r5Cd",VL="Tabs-module_tabpanel__0vR1c";Ie(`@import url('https://altinncdn.no/fonts/altinn-din/altinn-din.css');

.Tabs-module_tabs__QzIkz {
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

.Tabs-module_tab__IdDYc.Tabs-module_selected__TxfYv {
  --tab-text_color: var(--tab-text_color-selected);
  --tab-border_bottom_color: var(--tab-border_bottom_color-selected);
}

.Tabs-module_tab__IdDYc:hover {
  --tab-text_color: var(--tab-text_color-hover);
}

.Tabs-module_tab__IdDYc:focus-visible {
  outline: var(--semantic-tab_focus-outline-color) auto
  var(--semantic-tab_focus-outline-width);
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
`);const iy=e=>e.replace(/\s/,"_"),Lw=({activeTab:e,items:t,onChange:n})=>{const r=E.useId(),o=t.map(({name:w,content:P,value:_,tabId:b,panelId:k})=>{const C=_??w;return{name:w,content:P,value:C,tabId:b??r+iy(C)+"-tab",panelId:k??r+iy(C)+"-panel"}});if(!Ow(o.map(({value:w})=>w)))throw Error("Each tab value must be unique.");if(e!==void 0&&!o.some(w=>w.value===e))throw Error("The given active tab value must exist in the list of items.");const a=w=>o.findIndex(P=>P.value===w),l=e??o[0].value,[u,d]=E.useState(l),[f,p]=E.useState(a(l));E.useEffect(()=>d(l),[l]);const m=E.useRef(null),g=o.length-1;Cs(()=>{var w;(w=m.current)===null||w===void 0||w.querySelectorAll('[role="tab"]')[f].focus()},[f]);const x=w=>{u!==w&&n&&n(w),d(w),p(a(w))},y=w=>P=>{switch(P.key){case"ArrowRight":f!==void 0&&p(f===g?0:f+1);break;case"ArrowLeft":f!==void 0&&p(f===0?g:f-1);break;case"Space":x(w)}};return D.createElement("div",{className:UL},D.createElement("div",{className:$L,ref:m,role:"tablist"},o.map((w,P)=>{const _=w.value===u;return D.createElement("button",{"aria-controls":w.panelId,"aria-selected":_,className:qe(WL,_&&HL),id:w.tabId,key:w.value,onClick:()=>x(w.value),onKeyDown:y(w.value),role:"tab",tabIndex:f===P?0:-1},w.name)})),D.createElement("hr",{className:ZL}),o.map(w=>D.createElement("div",{className:VL,"aria-labelledby":w.tabId,hidden:w.value!==u,id:w.panelId,key:w.panelId,role:"tabpanel"},w.content)))};Lw.displayName="Tabs";var Mr={fieldSet:"FieldSet-module_fieldSet__GgktD",small:"FieldSet-module_small__eNG6Q",xsmall:"FieldSet-module_xsmall__y9foq",legendAndHelpText:"FieldSet-module_legendAndHelpText__WDZ-j",legend:"FieldSet-module_legend__PjhoV",legendContent:"FieldSet-module_legendContent__nOeHK",description:"FieldSet-module_description__XKHS-",content:"FieldSet-module_content__aZp-0",errorMessage:"FieldSet-module_errorMessage__nDaJ7"};Ie(`.FieldSet-module_fieldSet__GgktD {
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
`);const pm=e=>{var{children:t,className:n,contentClassName:r,description:o,error:a,helpText:l,legend:u,size:d="small"}=e,f=ft(e,["children","className","contentClassName","description","error","helpText","legend","size"]);return D.createElement("fieldset",Object.assign({},f,{className:qe(Mr.fieldSet,Mr[d],n)}),u&&D.createElement("legend",{className:Mr.legend},D.createElement("span",{className:Mr.legendAndHelpText},D.createElement("span",{className:Mr.legendContent},u),l&&D.createElement(wm,{size:d,title:typeof u=="string"?`Help text for ${u}`:""},l))),o&&D.createElement("p",{className:Mr.description},o),D.createElement("div",{className:qe(Mr.content,r)},t),a&&D.createElement("div",{className:Mr.errorMessage},D.createElement(aR,{role:"alertdialog"},a)))};function ra(e){return e.split("-")[1]}function mm(e){return e==="y"?"height":"width"}function io(e){return e.split("-")[0]}function ca(e){return["top","bottom"].includes(io(e))?"x":"y"}function ay(e,t,n){let{reference:r,floating:o}=e;const a=r.x+r.width/2-o.width/2,l=r.y+r.height/2-o.height/2,u=ca(t),d=mm(u),f=r[d]/2-o[d]/2,p=u==="x";let m;switch(io(t)){case"top":m={x:a,y:r.y-o.height};break;case"bottom":m={x:a,y:r.y+r.height};break;case"right":m={x:r.x+r.width,y:l};break;case"left":m={x:r.x-o.width,y:l};break;default:m={x:r.x,y:r.y}}switch(ra(t)){case"start":m[u]-=f*(n&&p?-1:1);break;case"end":m[u]+=f*(n&&p?-1:1)}return m}pm.displayName="FieldSet";function Tw(e){return typeof e!="number"?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(e):{top:e,right:e,bottom:e,left:e}}function Fh(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function _m(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:a,rects:l,elements:u,strategy:d}=e,{boundary:f="clippingAncestors",rootBoundary:p="viewport",elementContext:m="floating",altBoundary:g=!1,padding:x=0}=t,y=Tw(x),w=u[g?m==="floating"?"reference":"floating":m],P=Fh(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(w)))==null||n?w:w.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(u.floating)),boundary:f,rootBoundary:p,strategy:d})),_=m==="floating"?{...l.floating,x:r,y:o}:l.reference,b=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u.floating)),k=await(a.isElement==null?void 0:a.isElement(b))&&await(a.getScale==null?void 0:a.getScale(b))||{x:1,y:1},C=Fh(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:_,offsetParent:b,strategy:d}):_);return{top:(P.top-C.top+y.top)/k.y,bottom:(C.bottom-P.bottom+y.bottom)/k.y,left:(P.left-C.left+y.left)/k.x,right:(C.right-P.right+y.right)/k.x}}const Uh=Math.min,Bo=Math.max;function $h(e,t,n){return Bo(e,Uh(t,n))}const sy=e=>({name:"arrow",options:e,async fn(t){const{element:n,padding:r=0}=e||{},{x:o,y:a,placement:l,rects:u,platform:d}=t;if(n==null)return{};const f=Tw(r),p={x:o,y:a},m=ca(l),g=mm(m),x=await d.getDimensions(n),y=m==="y"?"top":"left",w=m==="y"?"bottom":"right",P=u.reference[g]+u.reference[m]-p[m]-u.floating[g],_=p[m]-u.reference[m],b=await(d.getOffsetParent==null?void 0:d.getOffsetParent(n));let k=b?m==="y"?b.clientHeight||0:b.clientWidth||0:0;k===0&&(k=u.floating[g]);const C=P/2-_/2,R=f[y],I=k-x[g]-f[w],N=k/2-x[g]/2+C,U=$h(R,N,I),$=ra(l)!=null&&N!=U&&u.reference[g]/2-(N<R?f[y]:f[w])-x[g]/2<0;return{[m]:p[m]-($?N<R?R-N:I-N:0),data:{[m]:U,centerOffset:N-U}}}}),qL={left:"right",right:"left",bottom:"top",top:"bottom"};function Ll(e){return e.replace(/left|right|bottom|top/g,t=>qL[t])}const KL={start:"end",end:"start"};function nf(e){return e.replace(/start|end/g,t=>KL[t])}const Rw=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:r,middlewareData:o,rects:a,initialPlacement:l,platform:u,elements:d}=t,{mainAxis:f=!0,crossAxis:p=!0,fallbackPlacements:m,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:y=!0,...w}=e,P=io(r),_=io(l)===l,b=await(u.isRTL==null?void 0:u.isRTL(d.floating)),k=m||(_||!y?[Ll(l)]:function(J){const le=Ll(J);return[nf(J),le,nf(le)]}(l));m||x==="none"||k.push(...function(J,le,X,Q){const ce=ra(J);let Y=function(B,M,ne){const q=["left","right"],O=["right","left"],A=["top","bottom"],z=["bottom","top"];switch(B){case"top":case"bottom":return ne?M?O:q:M?q:O;case"left":case"right":return M?A:z;default:return[]}}(io(J),X==="start",Q);return ce&&(Y=Y.map(B=>B+"-"+ce),le&&(Y=Y.concat(Y.map(nf)))),Y}(l,y,x,b));const C=[l,...k],R=await _m(t,w),I=[];let N=((n=o.flip)==null?void 0:n.overflows)||[];if(f&&I.push(R[P]),p){const{main:J,cross:le}=function(X,Q,ce){ce===void 0&&(ce=!1);const Y=ra(X),B=ca(X),M=mm(B);let ne=B==="x"?Y===(ce?"end":"start")?"right":"left":Y==="start"?"bottom":"top";return Q.reference[M]>Q.floating[M]&&(ne=Ll(ne)),{main:ne,cross:Ll(ne)}}(r,a,b);I.push(R[J],R[le])}if(N=[...N,{placement:r,overflows:I}],!I.every(J=>J<=0)){var U,$;const J=(((U=o.flip)==null?void 0:U.index)||0)+1,le=C[J];if(le)return{data:{index:J,overflows:N},reset:{placement:le}};let X=($=N.filter(Q=>Q.overflows[0]<=0).sort((Q,ce)=>Q.overflows[1]-ce.overflows[1])[0])==null?void 0:$.placement;if(!X)switch(g){case"bestFit":{var F;const Q=(F=N.map(ce=>[ce.placement,ce.overflows.filter(Y=>Y>0).reduce((Y,B)=>Y+B,0)]).sort((ce,Y)=>ce[1]-Y[1])[0])==null?void 0:F[0];Q&&(X=Q);break}case"initialPlacement":X=l}if(r!==X)return{reset:{placement:X}}}return{}}}},QL=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,o=await async function(a,l){const{placement:u,platform:d,elements:f}=a,p=await(d.isRTL==null?void 0:d.isRTL(f.floating)),m=io(u),g=ra(u),x=ca(u)==="x",y=["left","top"].includes(m)?-1:1,w=p&&x?-1:1,P=typeof l=="function"?l(a):l;let{mainAxis:_,crossAxis:b,alignmentAxis:k}=typeof P=="number"?{mainAxis:P,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...P};return g&&typeof k=="number"&&(b=g==="end"?-1*k:k),x?{x:b*w,y:_*y}:{x:_*y,y:b*w}}(t,e);return{x:n+o.x,y:r+o.y,data:o}}}},GL=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:a}=t,{apply:l=()=>{},...u}=e,d=await _m(t,u),f=io(n),p=ra(n),m=ca(n)==="x",{width:g,height:x}=r.floating;let y,w;f==="top"||f==="bottom"?(y=f,w=p===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(w=f,y=p==="end"?"top":"bottom");const P=x-d[y],_=g-d[w];let b=P,k=_;if(m?k=Uh(g-d.right-d.left,_):b=Uh(x-d.bottom-d.top,P),!t.middlewareData.shift&&!p){const R=Bo(d.left,0),I=Bo(d.right,0),N=Bo(d.top,0),U=Bo(d.bottom,0);m?k=g-2*(R!==0||I!==0?R+I:Bo(d.left,d.right)):b=x-2*(N!==0||U!==0?N+U:Bo(d.top,d.bottom))}await l({...t,availableWidth:k,availableHeight:b});const C=await o.getDimensions(a.floating);return g!==C.width||x!==C.height?{reset:{rects:!0}}:{}}}};function rn(e){var t;return((t=e.ownerDocument)==null?void 0:t.defaultView)||window}function rr(e){return rn(e).getComputedStyle(e)}const ly=Math.min,os=Math.max,Fu=Math.round;function Aw(e){const t=rr(e);let n=parseFloat(t.width),r=parseFloat(t.height);const o=e.offsetWidth,a=e.offsetHeight,l=Fu(n)!==o||Fu(r)!==a;return l&&(n=o,r=a),{width:n,height:r,fallback:l}}function _o(e){return Nw(e)?(e.nodeName||"").toLowerCase():""}let Tl;function zw(){if(Tl)return Tl;const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?(Tl=e.brands.map(t=>t.brand+"/"+t.version).join(" "),Tl):navigator.userAgent}function or(e){return e instanceof rn(e).HTMLElement}function Mn(e){return e instanceof rn(e).Element}function Nw(e){return e instanceof rn(e).Node}function uy(e){return typeof ShadowRoot>"u"?!1:e instanceof rn(e).ShadowRoot||e instanceof ShadowRoot}function Fc(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=rr(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function JL(e){return["table","td","th"].includes(_o(e))}function Wh(e){const t=/firefox/i.test(zw()),n=rr(e),r=n.backdropFilter||n.WebkitBackdropFilter;return n.transform!=="none"||n.perspective!=="none"||!!r&&r!=="none"||t&&n.willChange==="filter"||t&&!!n.filter&&n.filter!=="none"||["transform","perspective"].some(o=>n.willChange.includes(o))||["paint","layout","strict","content"].some(o=>{const a=n.contain;return a!=null&&a.includes(o)})}function Hh(){return/^((?!chrome|android).)*safari/i.test(zw())}function gm(e){return["html","body","#document"].includes(_o(e))}function Iw(e){return Mn(e)?e:e.contextElement}const Bw={x:1,y:1};function Hi(e){const t=Iw(e);if(!or(t))return Bw;const n=t.getBoundingClientRect(),{width:r,height:o,fallback:a}=Aw(t);let l=(a?Fu(n.width):n.width)/r,u=(a?Fu(n.height):n.height)/o;return l&&Number.isFinite(l)||(l=1),u&&Number.isFinite(u)||(u=1),{x:l,y:u}}function Xo(e,t,n,r){var o,a;t===void 0&&(t=!1),n===void 0&&(n=!1);const l=e.getBoundingClientRect(),u=Iw(e);let d=Bw;t&&(r?Mn(r)&&(d=Hi(r)):d=Hi(e));const f=u?rn(u):window,p=Hh()&&n;let m=(l.left+(p&&((o=f.visualViewport)==null?void 0:o.offsetLeft)||0))/d.x,g=(l.top+(p&&((a=f.visualViewport)==null?void 0:a.offsetTop)||0))/d.y,x=l.width/d.x,y=l.height/d.y;if(u){const w=rn(u),P=r&&Mn(r)?rn(r):r;let _=w.frameElement;for(;_&&r&&P!==w;){const b=Hi(_),k=_.getBoundingClientRect(),C=getComputedStyle(_);k.x+=(_.clientLeft+parseFloat(C.paddingLeft))*b.x,k.y+=(_.clientTop+parseFloat(C.paddingTop))*b.y,m*=b.x,g*=b.y,x*=b.x,y*=b.y,m+=k.x,g+=k.y,_=rn(_).frameElement}}return{width:x,height:y,top:g,right:m+x,bottom:g+y,left:m,x:m,y:g}}function ao(e){return((Nw(e)?e.ownerDocument:e.document)||window.document).documentElement}function Uc(e){return Mn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Mw(e){return Xo(ao(e)).left+Uc(e).scrollLeft}function Es(e){if(_o(e)==="html")return e;const t=e.assignedSlot||e.parentNode||uy(e)&&e.host||ao(e);return uy(t)?t.host:t}function Dw(e){const t=Es(e);return gm(t)?t.ownerDocument.body:or(t)&&Fc(t)?t:Dw(t)}function so(e,t){var n;t===void 0&&(t=[]);const r=Dw(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),a=rn(r);return o?t.concat(a,a.visualViewport||[],Fc(r)?r:[]):t.concat(r,so(r))}function cy(e,t,n){let r;if(t==="viewport")r=function(l,u){const d=rn(l),f=ao(l),p=d.visualViewport;let m=f.clientWidth,g=f.clientHeight,x=0,y=0;if(p){m=p.width,g=p.height;const w=Hh();(!w||w&&u==="fixed")&&(x=p.offsetLeft,y=p.offsetTop)}return{width:m,height:g,x,y}}(e,n);else if(t==="document")r=function(l){const u=ao(l),d=Uc(l),f=l.ownerDocument.body,p=os(u.scrollWidth,u.clientWidth,f.scrollWidth,f.clientWidth),m=os(u.scrollHeight,u.clientHeight,f.scrollHeight,f.clientHeight);let g=-d.scrollLeft+Mw(l);const x=-d.scrollTop;return rr(f).direction==="rtl"&&(g+=os(u.clientWidth,f.clientWidth)-p),{width:p,height:m,x:g,y:x}}(ao(e));else if(Mn(t))r=function(l,u){const d=Xo(l,!0,u==="fixed"),f=d.top+l.clientTop,p=d.left+l.clientLeft,m=or(l)?Hi(l):{x:1,y:1};return{width:l.clientWidth*m.x,height:l.clientHeight*m.y,x:p*m.x,y:f*m.y}}(t,n);else{const l={...t};if(Hh()){var o,a;const u=rn(e);l.x-=((o=u.visualViewport)==null?void 0:o.offsetLeft)||0,l.y-=((a=u.visualViewport)==null?void 0:a.offsetTop)||0}r=l}return Fh(r)}function dy(e,t){return or(e)&&rr(e).position!=="fixed"?t?t(e):e.offsetParent:null}function fy(e,t){const n=rn(e);let r=dy(e,t);for(;r&&JL(r)&&rr(r).position==="static";)r=dy(r,t);return r&&(_o(r)==="html"||_o(r)==="body"&&rr(r).position==="static"&&!Wh(r))?n:r||function(o){let a=Es(o);for(;or(a)&&!gm(a);){if(Wh(a))return a;a=Es(a)}return null}(e)||n}function YL(e,t,n){const r=or(t),o=ao(t),a=Xo(e,!0,n==="fixed",t);let l={scrollLeft:0,scrollTop:0};const u={x:0,y:0};if(r||!r&&n!=="fixed")if((_o(t)!=="body"||Fc(o))&&(l=Uc(t)),or(t)){const d=Xo(t,!0);u.x=d.x+t.clientLeft,u.y=d.y+t.clientTop}else o&&(u.x=Mw(o));return{x:a.left+l.scrollLeft-u.x,y:a.top+l.scrollTop-u.y,width:a.width,height:a.height}}const XL={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const a=[...n==="clippingAncestors"?function(d,f){const p=f.get(d);if(p)return p;let m=so(d).filter(w=>Mn(w)&&_o(w)!=="body"),g=null;const x=rr(d).position==="fixed";let y=x?Es(d):d;for(;Mn(y)&&!gm(y);){const w=rr(y),P=Wh(y);w.position==="fixed"?g=null:(x?P||g:P||w.position!=="static"||!g||!["absolute","fixed"].includes(g.position))?g=w:m=m.filter(_=>_!==y),y=Es(y)}return f.set(d,m),m}(t,this._c):[].concat(n),r],l=a[0],u=a.reduce((d,f)=>{const p=cy(t,f,o);return d.top=os(p.top,d.top),d.right=ly(p.right,d.right),d.bottom=ly(p.bottom,d.bottom),d.left=os(p.left,d.left),d},cy(t,l,o));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=or(n),a=ao(n);if(n===a)return t;let l={scrollLeft:0,scrollTop:0},u={x:1,y:1};const d={x:0,y:0};if((o||!o&&r!=="fixed")&&((_o(n)!=="body"||Fc(a))&&(l=Uc(n)),or(n))){const f=Xo(n);u=Hi(n),d.x=f.x+n.clientLeft,d.y=f.y+n.clientTop}return{width:t.width*u.x,height:t.height*u.y,x:t.x*u.x-l.scrollLeft*u.x+d.x,y:t.y*u.y-l.scrollTop*u.y+d.y}},isElement:Mn,getDimensions:function(e){return or(e)?Aw(e):e.getBoundingClientRect()},getOffsetParent:fy,getDocumentElement:ao,getScale:Hi,async getElementRects(e){let{reference:t,floating:n,strategy:r}=e;const o=this.getOffsetParent||fy,a=this.getDimensions;return{reference:YL(t,await o(n),r),floating:{x:0,y:0,...await a(n)}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>rr(e).direction==="rtl"};function jw(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:a=!0,elementResize:l=!0,animationFrame:u=!1}=r,d=o&&!u,f=d||a?[...Mn(e)?so(e):e.contextElement?so(e.contextElement):[],...so(t)]:[];f.forEach(x=>{d&&x.addEventListener("scroll",n,{passive:!0}),a&&x.addEventListener("resize",n)});let p,m=null;if(l){let x=!0;m=new ResizeObserver(()=>{x||n(),x=!1}),Mn(e)&&!u&&m.observe(e),Mn(e)||!e.contextElement||u||m.observe(e.contextElement),m.observe(t)}let g=u?Xo(e):null;return u&&function x(){const y=Xo(e);!g||y.x===g.x&&y.y===g.y&&y.width===g.width&&y.height===g.height||n(),g=y,p=requestAnimationFrame(x)}(),n(),()=>{var x;f.forEach(y=>{d&&y.removeEventListener("scroll",n),a&&y.removeEventListener("resize",n)}),(x=m)==null||x.disconnect(),m=null,u&&cancelAnimationFrame(p)}}const eT=(e,t,n)=>{const r=new Map,o={platform:XL,...n},a={...o.platform,_c:r};return(async(l,u,d)=>{const{placement:f="bottom",strategy:p="absolute",middleware:m=[],platform:g}=d,x=m.filter(Boolean),y=await(g.isRTL==null?void 0:g.isRTL(u));let w=await g.getElementRects({reference:l,floating:u,strategy:p}),{x:P,y:_}=ay(w,f,y),b=f,k={},C=0;for(let R=0;R<x.length;R++){const{name:I,fn:N}=x[R],{x:U,y:$,data:F,reset:J}=await N({x:P,y:_,initialPlacement:f,placement:b,strategy:p,middlewareData:k,rects:w,platform:g,elements:{reference:l,floating:u}});P=U??P,_=$??_,k={...k,[I]:{...k[I],...F}},J&&C<=50&&(C++,typeof J=="object"&&(J.placement&&(b=J.placement),J.rects&&(w=J.rects===!0?await g.getElementRects({reference:l,floating:u,strategy:p}):J.rects),{x:P,y:_}=ay(w,b,y)),R=-1)}return{x:P,y:_,placement:b,strategy:p,middlewareData:k}})(e,t,{...o,platform:a})},tT=e=>{const{element:t,padding:n}=e;return{name:"arrow",options:e,fn(r){return o=t,Object.prototype.hasOwnProperty.call(o,"current")?t.current!=null?sy({element:t.current,padding:n}).fn(r):{}:t?sy({element:t,padding:n}).fn(r):{};var o}}};var ql=typeof document<"u"?E.useLayoutEffect:E.useEffect;function Uu(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!=0;)if(!Uu(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!=0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!=0;){const a=o[r];if((a!=="_owner"||!e.$$typeof)&&!Uu(e[a],t[a]))return!1}return!0}return e!=e&&t!=t}function hy(e){const t=E.useRef(e);return ql(()=>{t.current=e}),t}var Fw=typeof document<"u"?E.useLayoutEffect:E.useEffect;let rf=!1,nT=0;const py=()=>"floating-ui-"+nT++,my=Sb["useId".toString()]||function(){const[e,t]=E.useState(()=>rf?py():void 0);return Fw(()=>{e==null&&t(py())},[]),E.useEffect(()=>{rf||(rf=!0)},[]),e},rT=E.createContext(null),oT=E.createContext(null),Uw=()=>E.useContext(oT);function $w(e){return e?.ownerDocument||document}function Ww(e){return $w(e).defaultView||window}function Wo(e){return!!e&&e instanceof Ww(e).Element}function vm(e){return!!e&&e instanceof Ww(e).HTMLElement}function iT(e){if(e.mozInputSource===0&&e.isTrusted)return!0;const t=/Android/i;return(t.test(function(){const n=navigator.userAgentData;return n!=null&&n.platform?n.platform:navigator.platform}())||t.test(function(){const n=navigator.userAgentData;return n&&Array.isArray(n.brands)?n.brands.map(r=>{let{brand:o,version:a}=r;return o+"/"+a}).join(" "):navigator.userAgent}()))&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function aT(e){return e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType!=="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0}function _y(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function of(e,t){let n=e.filter(o=>{var a;return o.parentId===t&&((a=o.context)==null?void 0:a.open)})||[],r=n;for(;r.length;)r=e.filter(o=>{var a;return(a=r)==null?void 0:a.some(l=>{var u;return o.parentId===l.id&&((u=o.context)==null?void 0:u.open)})})||[],n=n.concat(r);return n}const sT=Sb["useInsertionEffect".toString()]||(e=>e());function Hw(e){const t=E.useRef(()=>{});return sT(()=>{t.current=e}),E.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.current==null?void 0:t.current(...r)},[])}function gy(e){return vm(e.target)&&e.target.tagName==="BUTTON"}function vy(e){return function(t){return vm(t)&&t.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])")}(e)}function af(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}const lT={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},uT={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},cT=function(e,t){let{open:n,onOpenChange:r,events:o,nodeId:a,elements:{reference:l,domReference:u,floating:d}}=e,{enabled:f=!0,escapeKey:p=!0,outsidePress:m=!0,outsidePressEvent:g="pointerdown",referencePress:x=!1,referencePressEvent:y="pointerdown",ancestorScroll:w=!1,bubbles:P=!0}=t===void 0?{}:t;const _=Uw(),b=(((k=E.useContext(rT))==null?void 0:k.id)||null)!=null;var k;const C=Hw(typeof m=="function"?m:()=>!1),R=typeof m=="function"?C:m,I=E.useRef(!1),{escapeKeyBubbles:N,outsidePressBubbles:U}=function($){var F,J;return $===void 0&&($=!0),{escapeKeyBubbles:typeof $=="boolean"?$:(F=$.escapeKey)==null||F,outsidePressBubbles:typeof $=="boolean"?$:(J=$.outsidePress)==null||J}}(P);return E.useEffect(()=>{if(!n||!f)return;function $(Q){if(Q.key==="Escape"){if(!N&&_&&of(_.nodesRef.current,a).length>0)return;o.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),r(!1)}}function F(Q){const ce=I.current;if(I.current=!1,ce||typeof R=="function"&&!R(Q))return;const Y=function(M){return"composedPath"in M?M.composedPath()[0]:M.target}(Q);if(vm(Y)&&d){const M=d.ownerDocument.defaultView||window,ne=Y.scrollWidth>Y.clientWidth,q=Y.scrollHeight>Y.clientHeight;let O=q&&Q.offsetX>Y.clientWidth;if(q&&M.getComputedStyle(Y).direction==="rtl"&&(O=Q.offsetX<=Y.offsetWidth-Y.clientWidth),O||ne&&Q.offsetY>Y.clientHeight)return}const B=_&&of(_.nodesRef.current,a).some(M=>{var ne;return af(Q,(ne=M.context)==null?void 0:ne.elements.floating)});af(Q,d)||af(Q,u)||B||!U&&_&&of(_.nodesRef.current,a).length>0||(o.emit("dismiss",{type:"outsidePress",data:{returnFocus:b?{preventScroll:!0}:iT(Q)||aT(Q)}}),r(!1))}function J(){r(!1)}const le=$w(d);p&&le.addEventListener("keydown",$),R&&le.addEventListener(g,F);let X=[];return w&&(Wo(u)&&(X=so(u)),Wo(d)&&(X=X.concat(so(d))),!Wo(l)&&l&&l.contextElement&&(X=X.concat(so(l.contextElement)))),X=X.filter(Q=>{var ce;return Q!==((ce=le.defaultView)==null?void 0:ce.visualViewport)}),X.forEach(Q=>{Q.addEventListener("scroll",J,{passive:!0})}),()=>{p&&le.removeEventListener("keydown",$),R&&le.removeEventListener(g,F),X.forEach(Q=>{Q.removeEventListener("scroll",J)})}},[d,u,l,p,R,g,o,_,a,n,r,w,f,N,U,b]),E.useEffect(()=>{I.current=!1},[R,g]),E.useMemo(()=>f?{reference:{[lT[y]]:()=>{x&&(o.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),r(!1))}},floating:{[uT[g]]:()=>{I.current=!0}}}:{},[f,o,x,g,y,r])};function ym(e){return E.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})},e)}function Zw(e){e===void 0&&(e={});const{open:t=!1,onOpenChange:n,nodeId:r}=e,o=function(_){_===void 0&&(_={});const{placement:b="bottom",strategy:k="absolute",middleware:C=[],platform:R,whileElementsMounted:I,open:N}=_,[U,$]=E.useState({x:null,y:null,strategy:k,placement:b,middlewareData:{},isPositioned:!1}),[F,J]=E.useState(C);Uu(F,C)||J(C);const le=E.useRef(null),X=E.useRef(null),Q=E.useRef(U),ce=hy(I),Y=hy(R),[B,M]=E.useState(null),[ne,q]=E.useState(null),O=E.useCallback(de=>{le.current!==de&&(le.current=de,M(de))},[]),A=E.useCallback(de=>{X.current!==de&&(X.current=de,q(de))},[]),z=E.useCallback(()=>{if(!le.current||!X.current)return;const de={placement:b,strategy:k,middleware:F};Y.current&&(de.platform=Y.current),eT(le.current,X.current,de).then(be=>{const Je={...be,isPositioned:!0};Z.current&&!Uu(Q.current,Je)&&(Q.current=Je,qi.flushSync(()=>{$(Je)}))})},[F,b,k,Y]);ql(()=>{N===!1&&Q.current.isPositioned&&(Q.current.isPositioned=!1,$(de=>({...de,isPositioned:!1})))},[N]);const Z=E.useRef(!1);ql(()=>(Z.current=!0,()=>{Z.current=!1}),[]),ql(()=>{if(B&&ne){if(ce.current)return ce.current(B,ne,z);z()}},[B,ne,z,ce]);const re=E.useMemo(()=>({reference:le,floating:X,setReference:O,setFloating:A}),[O,A]),ue=E.useMemo(()=>({reference:B,floating:ne}),[B,ne]);return E.useMemo(()=>({...U,update:z,refs:re,elements:ue,reference:O,floating:A}),[U,z,re,ue,O,A])}(e),a=Uw(),l=E.useRef(null),u=E.useRef({}),d=E.useState(()=>function(){const _=new Map;return{emit(b,k){var C;(C=_.get(b))==null||C.forEach(R=>R(k))},on(b,k){_.set(b,[..._.get(b)||[],k])},off(b,k){_.set(b,(_.get(b)||[]).filter(C=>C!==k))}}}())[0],[f,p]=E.useState(null),m=E.useCallback(_=>{const b=Wo(_)?{getBoundingClientRect:()=>_.getBoundingClientRect(),contextElement:_}:_;o.refs.setReference(b)},[o.refs]),g=E.useCallback(_=>{(Wo(_)||_===null)&&(l.current=_,p(_)),(Wo(o.refs.reference.current)||o.refs.reference.current===null||_!==null&&!Wo(_))&&o.refs.setReference(_)},[o.refs]),x=E.useMemo(()=>({...o.refs,setReference:g,setPositionReference:m,domReference:l}),[o.refs,g,m]),y=E.useMemo(()=>({...o.elements,domReference:f}),[o.elements,f]),w=Hw(n),P=E.useMemo(()=>({...o,refs:x,elements:y,dataRef:u,nodeId:r,events:d,open:t,onOpenChange:w}),[o,r,d,t,w,x,y]);return Fw(()=>{const _=a?.nodesRef.current.find(b=>b.id===r);_&&(_.context=P)}),E.useMemo(()=>({...o,context:P,refs:x,reference:g,positionReference:m}),[o,x,P,g,m])}function sf(e,t,n){const r=new Map;return{...n==="floating"&&{tabIndex:-1},...e,...t.map(o=>o?o[n]:null).concat(e).reduce((o,a)=>(a&&Object.entries(a).forEach(l=>{let[u,d]=l;var f;u.indexOf("on")===0?(r.has(u)||r.set(u,[]),typeof d=="function"&&((f=r.get(u))==null||f.push(d),o[u]=function(){for(var p,m=arguments.length,g=new Array(m),x=0;x<m;x++)g[x]=arguments[x];(p=r.get(u))==null||p.forEach(y=>y(...g))})):o[u]=d}),o),{})}}var Zh={popover:"Popover-module_popover__E9K9X",default:"Popover-module_default__TlPJp",info:"Popover-module_info__VKCAP",warning:"Popover-module_warning__o27i9",danger:"Popover-module_danger__9bIyx",arrow:"Popover-module_arrow__5A-0e"};function dT(e){var{variant:t="default",arrow:n,initialOpen:r,placement:o,offset:a,open:l,onOpenChange:u}=e,d=ft(e,["variant","arrow","initialOpen","placement","offset","open","onOpenChange"]);const[f,p]=E.useState(r),m=l??f,g=u??p,x=E.useRef(null),y=Zw({placement:o,open:m,onOpenChange:g,whileElementsMounted:jw,middleware:[QL(a??(n?12:4)),Rw({padding:5,fallbackPlacements:["bottom","top"]}),(w={padding:5},w===void 0&&(w={}),{name:"shift",options:w,async fn(R){const{x:I,y:N,placement:U}=R,{mainAxis:$=!0,crossAxis:F=!1,limiter:J={fn:q=>{let{x:O,y:A}=q;return{x:O,y:A}}},...le}=w,X={x:I,y:N},Q=await _m(R,le),ce=ca(io(U)),Y=ce==="x"?"y":"x";let B=X[ce],M=X[Y];if($){const q=ce==="y"?"bottom":"right";B=$h(B+Q[ce==="y"?"top":"left"],B,B-Q[q])}if(F){const q=Y==="y"?"bottom":"right";M=$h(M+Q[Y==="y"?"top":"left"],M,M-Q[q])}const ne=J.fn({...R,[ce]:B,[Y]:M});return{...ne,data:{x:ne.x-I,y:ne.y-N}}}}),tT({element:x,padding:8})]});var w;const P=y.context,_=function(R,I){let{open:N,onOpenChange:U,dataRef:$,refs:F}=R,{enabled:J=!0,event:le="click",toggle:X=!0,ignoreMouse:Q=!1,keyboardHandlers:ce=!0}=I===void 0?{}:I;const Y=E.useRef();return E.useMemo(()=>J?{reference:{onPointerDown(B){Y.current=B.pointerType},onMouseDown(B){B.button===0&&(_y(Y.current,!0)&&Q||le!=="click"&&(N?!X||$.current.openEvent&&$.current.openEvent.type!=="mousedown"||U(!1):(B.preventDefault(),U(!0)),$.current.openEvent=B.nativeEvent))},onClick(B){$.current.__syncReturnFocus||(le==="mousedown"&&Y.current?Y.current=void 0:_y(Y.current,!0)&&Q||(N?!X||$.current.openEvent&&$.current.openEvent.type!=="click"||U(!1):U(!0),$.current.openEvent=B.nativeEvent))},onKeyDown(B){Y.current=void 0,ce&&(gy(B)||(B.key!==" "||vy(F.domReference.current)||B.preventDefault(),B.key==="Enter"&&(N?X&&U(!1):U(!0))))},onKeyUp(B){ce&&(gy(B)||vy(F.domReference.current)||B.key===" "&&(N?X&&U(!1):U(!0)))}}}:{},[J,$,le,Q,ce,F,X,N,U])}(P,{enabled:l==null}),b=cT(P,{referencePress:!1}),k=function(R,I){let{open:N}=R,{enabled:U=!0,role:$="dialog"}=I===void 0?{}:I;const F=my(),J=my();return E.useMemo(()=>{const le={id:F,role:$};return U?$==="tooltip"?{reference:{"aria-describedby":N?F:void 0},floating:le}:{reference:{"aria-expanded":N?"true":"false","aria-haspopup":$==="alertdialog"?"dialog":$,"aria-controls":N?F:void 0,...$==="listbox"&&{role:"combobox"},...$==="menu"&&{id:J}},floating:{...le,...$==="menu"&&{"aria-labelledby":J}}}:{}},[U,$,N,F,J])}(P),C=function(R){R===void 0&&(R=[]);const I=R,N=E.useCallback(F=>sf(F,R,"reference"),I),U=E.useCallback(F=>sf(F,R,"floating"),I),$=E.useCallback(F=>sf(F,R,"item"),I);return E.useMemo(()=>({getReferenceProps:N,getFloatingProps:U,getItemProps:$}),[N,U,$])}([_,b,k]);return E.useMemo(()=>Object.assign(Object.assign(Object.assign(Object.assign({open:m,setOpen:g},C),y),d),{arrow:n,arrowRef:x,variant:t}),[m,g,C,y,d,n,x,t])}Ie(`.Popover-module_popover__E9K9X {
  width: max-content;
  z-index: 2;
  padding: 12px;
  max-width: calc(100vw - 20px);
  border: 1px solid gray;
  border-radius: 3px;
  box-shadow: 0 3px 6px 0 #0003;
}

.Popover-module_popover__E9K9X:focus-visible {
  outline: var(--semantic-tab_focus-outline-color) solid
    var(--semantic-tab_focus-outline-width);
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
`);const Vw=E.createContext(null),bm=()=>{const e=E.useContext(Vw);if(e==null)throw new Error("Popover components must be wrapped in <Popover />");return e};function qw(e){var{children:t,trigger:n,arrow:r=!0,initialOpen:o=!1}=e,a=ft(e,["children","trigger","arrow","initialOpen"]);const l=dT(Object.assign({arrow:r,initialOpen:o},a));return D.createElement(Vw.Provider,{value:l},D.createElement(fT,null,n),D.createElement(hT,null,t,l.arrow&&D.createElement(pT,null)))}qw.displayName="Popover";const fT=E.forwardRef(function(e,t){var{children:n}=e,r=ft(e,["children"]);const o=bm(),a=E.isValidElement(n)?n:null,l=ym([o.reference,t]);if(a){const u=Object.assign(Object.assign(Object.assign(Object.assign({ref:l},r),a.props),o.getReferenceProps()),{"data-state":o.open?"open":"closed","aria-expanded":o.open});return E.cloneElement(a,u)}return null}),hT=E.forwardRef(function(e,t){var n,r;const o=bm(),a=ym([o.floating,t]);return o.open?D.createElement("div",Object.assign({ref:a,style:{position:o.strategy,top:(n=o.y)!==null&&n!==void 0?n:0,left:(r=o.x)!==null&&r!==void 0?r:0},"data-placement":o.placement,className:qe(Zh.popover,Zh[o.variant],o.className)},o.getFloatingProps(e),{tabIndex:-1,role:o.role||"dialog"}),e.children):null}),pT=E.forwardRef(function(e,t){var n,r;const o=bm(),a=ym([o.arrowRef,t]),l=(n=o.middlewareData.arrow)===null||n===void 0?void 0:n.x,u=(r=o.middlewareData.arrow)===null||r===void 0?void 0:r.y,d={top:"bottom",right:"left",bottom:"top",left:"right"}[o.placement.split("-")[0]];return D.createElement("div",Object.assign({ref:a,style:Object.assign(Object.assign(Object.assign({},l!=null?{left:l}:{}),u!=null?{top:u}:{}),d?{[d]:"-7px"}:{}),className:Zh.arrow},e))});var Kw="utility-module_visuallyHidden__R-C67",xm="utility-module_focusable__1fBKr";Ie(`/**
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
`);var Ro={helpTextButton:"HelpText-module_helpTextButton__Ir4Uk utility-module_focusable__1fBKr",helpTextIconFilled:"HelpText-module_helpTextIconFilled__SjZ8e",helpTextIcon:"HelpText-module_helpTextIcon__ex2WU",helpTextContent:"HelpText-module_helpTextContent__EDHac",small:"HelpText-module_small__Y44D4",xsmall:"HelpText-module_xsmall__peaFV"};Ie(`/**
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
`);const wm=e=>{var{className:t,children:n,title:r,placement:o="right",onClick:a,size:l="small"}=e,u=ft(e,["className","children","title","placement","onClick","size"]);const[d,f]=E.useState(!1);return D.createElement(qw,{variant:"info",placement:o,open:d,onOpenChange:f,className:Ro.helpTextContent,role:"tooltip",trigger:D.createElement("button",Object.assign({},u,{className:qe(Ro.helpTextButton,t),onClick:p=>{f(m=>!m),a?.(p)}}),D.createElement(hL,{className:qe(Ro.helpTextIcon,Ro.helpTextIconFilled,Ro[l],t),"data-state":d?"open":"closed","aria-hidden":!0}),D.createElement(cL,{className:qe(Ro.helpTextIcon,Ro[l],t),"data-state":d?"open":"closed","aria-hidden":!0}),D.createElement("span",{className:Kw},r))},n)};wm.displayName="HelpText";var Ln={template:"CheckboxRadioTemplate-module_template__CbnTf",xsmall:"CheckboxRadioTemplate-module_xsmall__JkKoU",small:"CheckboxRadioTemplate-module_small__7fCnT",disabled:"CheckboxRadioTemplate-module_disabled__AUMha",clickable:"CheckboxRadioTemplate-module_clickable__iw4S2",inputWrapper:"CheckboxRadioTemplate-module_inputWrapper__K4Urn",input:"CheckboxRadioTemplate-module_input__O2CzZ",visibleBox:"CheckboxRadioTemplate-module_visibleBox__mj4RB",labelAndDescription:"CheckboxRadioTemplate-module_labelAndDescription__NcntT",label:"CheckboxRadioTemplate-module_label__hsc7R",labelAndHelpText:"CheckboxRadioTemplate-module_labelAndHelpText__JIDAJ",description:"CheckboxRadioTemplate-module_description__FX9dz"};Ie(`.CheckboxRadioTemplate-module_template__CbnTf {
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
  margin-top: calc(
    (
        var(--input_box-size) -
          (var(--typography-default-line-height) * var(--font_size))
      ) / 2
  );
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
`);const mT=({checked:e,children:t,className:n,description:r,disabled:o,helpText:a,hideInput:l,hideLabel:u,inputId:d,label:f,name:p,onChange:m,presentation:g,size:x="small",type:y,value:w})=>{const P=E.useId(),_=d??"input-"+P,b=f?`${_}-label`:void 0,k=r?`${_}-description`:void 0,C=f&&!u,R=!g||typeof f!="object"&&typeof r!="object";return D.createElement(yy,{className:qe(Ln.template,Ln[x],o?Ln.disabled:xm,n),htmlFor:_,isLabel:R},!l&&D.createElement(yy,{className:Ln.inputWrapper,htmlFor:_,isLabel:!R},D.createElement("input",{"aria-describedby":k,"aria-labelledby":f?b:void 0,checked:e!=null&&e,className:Ln.input,disabled:o,id:_,name:p,onChange:o?void 0:m,role:g?"presentation":void 0,type:y,value:w}),D.createElement("span",{className:Ln.visibleBox},t)),(f||r)&&D.createElement("span",{className:Ln.labelAndDescription},D.createElement("span",{className:Ln.labelAndHelpText},f&&D.createElement("span",{className:Ln.label,id:b,style:{display:C?"inline":"none"}},f),a&&D.createElement(wm,{size:x,title:typeof f=="string"?`Help text for ${f}`:""},a)),r&&D.createElement("span",{className:Ln.description,id:k},r)))},yy=({children:e,className:t,htmlFor:n,isLabel:r})=>r?D.createElement("label",{className:t+" "+Ln.clickable,htmlFor:n},e):D.createElement("span",{className:t},e);var _T="Checkbox-module_checkbox__lSeQj",gT="Checkbox-module_compact__Cl41-",vT="Checkbox-module_error__E-bmD",yT="Checkbox-module_checked__3yAq6",bT="Checkbox-module_disabled__x7-eg",xT="Checkbox-module_readOnly__FamUn",wT="Checkbox-module_visibleBox__G7q8H",kT="Checkbox-module_checkmark__ES9N8";Ie(`.Checkbox-module_checkbox__lSeQj {
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
  --checkbox-background_color: var(
    --component-checkbox-color-background-checked
  );
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
`);const Wt=({checkboxId:e,checked:t,compact:n,description:r,disabled:o,error:a,helpText:l,hideLabel:u,label:d,name:f,onChange:p,presentation:m,readOnly:g})=>D.createElement(mT,{checked:t,className:qe(_T,t&&yT,a&&vT,o&&bT,n&&gT,g&&xT),description:r,disabled:o,helpText:l,hideInput:g,hideLabel:u,inputId:e,label:d,name:f,onChange:p,presentation:m,size:n?"xsmall":"small",type:"checkbox"},D.createElement("span",{className:wT},D.createElement("span",{className:kT})));Wt.displayName="Checkbox";const ST=(e,t)=>{if(e.length!==1)throw new Error("Char must be a single character.");const n=[];for(let r=0;r<t.length;r++)t[r]===e&&n.push(r);return n},by=(e,t)=>{const n=e.toLowerCase(),r=t.toLowerCase(),o=new Set;for(let a=0;a<e.length;a++){const l=n[a];for(const u of ST(l,r))if(!o.has(u)){o.add(u);break}}return o.size},xy=(e,t)=>{const n=e.toLowerCase(),r=t.toLowerCase();let o=0;for(let a=0;a<r.length;a++)if(r[a]===n[o]&&(o++,o===n.length))return!0;return!1},PT=e=>(t,n)=>{const r=(o=>(a,l)=>{const u=xy(o,a),d=xy(o,l);if(!u&&!d)return 0;if(u&&!d)return-1;if(!u&&d)return 1;let f=0;for(let p=0;p<o.length;p++){const m=a.substring(f).indexOf(o[p]),g=l.substring(f).indexOf(o[p]);if(m<g)return-1;if(m>g)return 1;f+=m+1}return 0})(e)(t,n);return r!==0?r:(o=>(a,l)=>{const u=by(o,a);return by(o,l)-u})(e)(t,n)},CT=e=>e.format!==void 0,ET=e=>e.format===void 0,Qw=(e,t)=>{const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const o of n)if(e[o]!==t[o])return!1;return!0};var lf={checkboxGroup:"CheckboxGroup-module_checkboxGroup__LIGFC",compact:"CheckboxGroup-module_compact__IPuN8",vertical:"CheckboxGroup-module_vertical__R-l07",horizontal:"CheckboxGroup-module_horizontal__myCqF"};Ie(`.CheckboxGroup-module_checkboxGroup__LIGFC {
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
`);const OT=(e,t)=>{switch(t.type){case"check":return e.concat([t.name]);case"uncheck":return e.filter(n=>n!==t.name);case"reset":return t.state}},wy=e=>e.filter(({checked:t})=>t).map(({name:t})=>t),Kl=({compact:e,description:t,disabled:n,error:r,helpText:o,items:a,legend:l,onChange:u,presentation:d,variant:f="vertical",fieldSetProps:p})=>{if(!Ow(a.map(w=>w.name)))throw Error("Each name in the checkbox group must be unique.");const[m,g]=E.useReducer(OT,wy(a)),x=ju([...a]);Cs(()=>{(a.length!==x?.length||a.some((w,P)=>!Qw(w,x[P])))&&g({type:"reset",state:wy(a)})});const y=ju(m);return Cs(()=>{u&&!n&&!Ew(y,m)&&u(m)},[m,u,n]),D.createElement(pm,Object.assign({contentClassName:qe(lf.checkboxGroup,lf[f],e&&lf.compact),description:t,disabled:n,error:r,helpText:o,legend:l,size:e?"xsmall":"small"},p),a.map(w=>D.createElement(Wt,{checkboxId:w.checkboxId,checked:m.includes(w.name),compact:e,description:w.description,disabled:n||w.disabled,error:!!r,helpText:w.helpText,key:w.name,hideLabel:w.hideLabel,label:w.label,name:w.name,onChange:P=>{g({type:P.target.checked?"check":"uncheck",name:w.name})},presentation:d})))};Kl.displayName="CheckboxGroup";Ie(`.RadioButton-module_radio__-lcP- {
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
  box-shadow: 0 0 0 calc(2 * var(--radio-border_width))
      var(--radio-background_color) inset,
    0 0 0 var(--radio-size) var(--radio-checkmark-color) inset;
  border-radius: 50%;
  display: var(--radio-checkmark-display);
  height: 100%;
  width: 100%;
}
`);Ie(`.RadioGroup-module_radioGroup__pO2pz {
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
`);const LT=()=>D.createElement("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},D.createElement("path",{d:"M8 0C3.875 0 0.5 3.375 0.5 7.5C0.5 11.625 3.875 15 8 15C12.125 15 15.5 11.625 15.5 7.5C15.5 3.375 12.125 0 8 0ZM8.875 11.25H7.5V9.9375H8.875V11.25ZM8.6875 9H7.6875L7.375 4.125H9L8.6875 9Z",fill:"white"})),TT=()=>D.createElement("svg",{width:"15",height:"15",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},D.createElement("path",{d:"M34 31.5758L23.9289 21.3939C25.5533 19.2929 26.3655 16.8687 26.3655 14.1212C26.3655 7.49495 20.8426 2 14.1827 2C7.52284 2 2 7.49495 2 14.1212C2 20.7475 7.52284 26.2424 14.1827 26.2424C16.9442 26.2424 19.5431 25.2727 21.4924 23.8182L31.7259 34L34 31.5758ZM5.24873 14.1212C5.24873 9.27273 9.30965 5.23232 14.1827 5.23232C19.0558 5.23232 23.1168 9.27273 23.1168 14.1212C23.1168 18.9697 19.0558 23.0101 14.1827 23.0101C9.30965 23.0101 5.24873 18.9697 5.24873 14.1212Z",fill:"black"}));var ky="Icon-module_icon__3YqoF",RT="Icon-module_disabled__e4-Yg";Ie(`.Icon-module_icon__3YqoF {
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
`);const AT=({variant:e,disabled:t=!1})=>{switch(e){case"error":return D.createElement("span",{className:ky,"data-testid":"input-icon-error"},D.createElement(LT,null));case"search":return D.createElement("span",{className:qe(ky,t&&RT),"data-testid":"input-icon-search"},D.createElement(TT,null));default:return null}};var Jn={inputAndLabel:"InputWrapper-module_inputAndLabel__t1-Vi",inputWrapper:"InputWrapper-module_inputWrapper__I-Tcb",default:"InputWrapper-module_default__SS3Cg",error:"InputWrapper-module_error__FhSCJ",disabled:"InputWrapper-module_disabled__8mIxc",readonlyInfo:"InputWrapper-module_readonlyInfo__mQyMN",readonlyConfirm:"InputWrapper-module_readonlyConfirm__WrHUu",search:"InputWrapper-module_search__SwwFJ",withPadding:"InputWrapper-module_withPadding__6NkNf",field:"InputWrapper-module_field__UA-RS",withIcon:"InputWrapper-module_withIcon__x0I81",label:"InputWrapper-module_label__x0-XH",characterLimitLabel:"InputWrapper-module_characterLimitLabel__x9Z9p",characterLimitExceeded:"InputWrapper-module_characterLimitExceeded__WKRxJ"};Ie(`.InputWrapper-module_inputAndLabel__t1-Vi {
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
  --background: repeating-linear-gradient(
    135deg,
    #efefef,
    #efefef 2px,
    #fff 3px,
    #fff 5px
  );

  opacity: var(--opacity-disabled);
}

.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_readonlyInfo__mQyMN {
  --background: var(--component-input-read_only_info-color-background-default);
  --outline-color: var(--component-input-read_only_info-color-border-default);
}

.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_readonlyConfirm__WrHUu {
  --background: var(
    --component-input-read_only_confirm-color-background-default
  );
  --outline-color: var(
    --component-input-read_only_confirm-color-border-default
  );
}

.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_search__SwwFJ {
  flex-direction: row-reverse;
}

.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_withPadding__6NkNf {
  /* Subtract size of border on padding-y, because border is on outer element. Without this, height of entire component will be too big */
  --paddingY: calc(
    var(--component-input-space-padding-y) -
      var(--component-input-border_width-default)
  );
  --paddingX: var(--component-input-space-padding-x);
}

.InputWrapper-module_field__UA-RS {
  background: var(--background);
  border-radius: var(--border-radius);
  border-width: 0;
  box-sizing: border-box;
  font-family: var(--font_family-default);
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
`);const km=({className:e="",disabled:t=!1,inputId:n,inputRenderer:r,isSearch:o=!1,isValid:a=!0,label:l,noFocusEffect:u,noPadding:d,readOnly:f=!1,characterLimit:p,value:m})=>{const g=E.useId(),x=n??g,y=E.useId(),w=m?m.toString():"",{variant:P,iconVariant:_}=(({readOnly:k=!1,disabled:C=!1,isValid:R=!0,isSearch:I=!1}={})=>k===!0||k==="readonlyInfo"?{variant:"readonlyInfo",iconVariant:"none"}:k==="readonlyConfirm"?{variant:"readonlyConfirm",iconVariant:"none"}:R===!1?{variant:"error",iconVariant:"error"}:{variant:C?"disabled":"default",iconVariant:I?"search":"none"})({disabled:t,isSearch:o,isValid:p?w.length<p.maxCount&&a:a,readOnly:f}),b=_!=="none";return D.createElement("div",null,D.createElement("span",{className:qe(Jn.inputAndLabel,b&&Jn.withIcon)},l&&D.createElement("label",{className:Jn.label,htmlFor:x},l),D.createElement("span",{"data-testid":"InputWrapper",className:qe(Jn.inputWrapper,Jn[P],{[Jn.search]:o,[Jn.withPadding]:!d})},D.createElement(AT,{variant:_,disabled:t}),r({className:qe(Jn.field,!u&&xm,e),hasIcon:b,inputId:x,variant:P,describedBy:y}))),p&&D.createElement(zT,Object.assign({},p,{value:w,ariaDescribedById:y})))},zT=({label:e,srLabel:t,maxCount:n,value:r,ariaDescribedById:o})=>{const a=n-r.length,l=r.length>n;return D.createElement(D.Fragment,null,D.createElement("span",{className:Kw,id:o},t),D.createElement("div",{className:[Jn.characterLimitLabel,l?Jn.characterLimitExceeded:""].join(" "),"aria-live":l?"polite":"off"},e(a)))};var NT="MultiSelectItem-module_multiSelectItem__tjklN",IT="MultiSelectItem-module_deleteButton__xRVRz utility-module_focusable__1fBKr",BT="MultiSelectItem-module_deleteButtonCross__yqZOX";Ie(`/**
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

.MultiSelectItem-module_multiSelectItem__tjklN {
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

.MultiSelectItem-module_deleteButton__xRVRz {
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

.MultiSelectItem-module_deleteButton__xRVRz:focus {
  background-color: var(--delete_cross_box-color-hover);
}

.MultiSelectItem-module_deleteButton__xRVRz:not(:disabled):hover {
  background-color: var(--delete_cross_box-color-hover);
}

.MultiSelectItem-module_deleteButtonCross__yqZOX {
  background-color: var(--multiselect_item_delete_cross-color);
  clip-path: var(--delete_cross-clip_path);
  display: inline-block;
  height: var(--delete_cross-size);
  width: var(--delete_cross-size);
}
`);const Gw=({deleteButtonLabel:e,disabled:t,onDeleteButtonClick:n,label:r})=>D.createElement("span",{className:NT},D.createElement("span",null,r),D.createElement("button",{"aria-label":e,className:IT,disabled:t,onClick:n,type:"button"},D.createElement("span",{className:BT})));Gw.displayName="MultiSelectItem";var wt={select:"Select-module_select__cjdcr",disabled:"Select-module_disabled__8YgjS",usingKeyboard:"Select-module_usingKeyboard__RCPHw",fieldButton:"Select-module_fieldButton__uKwX8",field:"Select-module_field__h-wBy",inputArea:"Select-module_inputArea__jBTNl",multiple:"Select-module_multiple__cwGEC",single:"Select-module_single__i2zPs",hasIcon:"Select-module_hasIcon__Jgj-c",textInput:"Select-module_textInput__QOpiN",arrowWrapper:"Select-module_arrowWrapper__meDQz",arrow:"Select-module_arrow__w35wW",deleteButton:"Select-module_deleteButton__hZfr7",deleteButtonCross:"Select-module_deleteButtonCross__OKMwb",optionListWrapper:"Select-module_optionListWrapper__Ech-7",expanded:"Select-module_expanded__QPHZ6",optionList:"Select-module_optionList__Lhg-F",option:"Select-module_option__Hvo8n",selected:"Select-module_selected__8A13A",focused:"Select-module_focused__joVjV"};Ie(`.Select-module_select__cjdcr {
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
  --multiselect_items-padding: calc((var(--field-height-inside) - var(--multiselect_item-height)) / 2);
  --option-background_color-default: transparent;
  --option-background_color-hover: var(--colors-blue-100);
  --option-background_color-selected: var(--colors-blue-200);
  --option-background_color-selected-hover: var(--colors-blue-500);
  --option-border_color: #022f5180;
  --option-border_width: 1px;
  --option-height: 36px;
  --option_list-background_color: white;
  --option_list-border: 1px solid #68707c;
  --option_list-border_radius: var(--interactive_components-border_radius-normal);
  --option_list-max_height: calc(var(--option-height) * var(--option_list-number_of_visible_options));
  --option_list-number_of_visible_options: 7;
  --option_list-shadow: 1px 1px 3px #00000040;
  --option_list-z_index: 2;
  --option-outline-focus: none;
  --option-padding_horizontal: 12px;
  --singleselect_field-padding_left: 12px;
  --focus_visible-outline: var(--semantic-tab_focus-outline-width) auto var(--semantic-tab_focus-outline-color);

  font-size: var(--font_size);
  line-height: var(--line-height);
}

.Select-module_select__cjdcr.Select-module_disabled__8YgjS {
  --interactive_element-cursor: auto;

  opacity: var(--opacity-disabled);
}

.Select-module_select__cjdcr.Select-module_usingKeyboard__RCPHw {
  --option-outline-focus: var(--focus_visible-outline);
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
  font-family: var(--font_family-default);
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
  font-family: var(--font_family-default);
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

.Select-module_arrow__w35wW {
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

.Select-module_optionListWrapper__Ech-7 {
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

.Select-module_select__cjdcr.Select-module_expanded__QPHZ6 {
  --delete_cross-color: var(--delete_cross-color-active);
}

.Select-module_select__cjdcr:not(.Select-module_expanded__QPHZ6) .Select-module_optionListWrapper__Ech-7 {
  display: none;
}

.Select-module_optionList__Lhg-F {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.Select-module_option__Hvo8n {
  background-color: var(--option-background_color-default);
  border-color: var(--option-border_color);
  border-style: solid;
  border-width: var(--option-border_width) 0 0 0;
  box-sizing: border-box;
  cursor: var(--interactive_element-cursor);
  display: inline-block;
  font-family: var(--font_family-default);
  font-size: var(--font_size);
  min-height: var(--option-height);
  overflow-x: hidden;
  padding-left: var(--option-padding_horizontal);
  padding-right: var(--option-padding_horizontal);
  padding-top: calc(
    (var(--option-height) - (var(--font_size) * var(--line-height))) / 2
  );
  text-align: left;
  text-overflow: ellipsis;
}

.Select-module_option__Hvo8n:hover {
  background-color: var(--option-background_color-hover);
}

.Select-module_option__Hvo8n.Select-module_selected__8A13A {
  background-color: var(--option-background_color-selected);
}

.Select-module_option__Hvo8n.Select-module_selected__8A13A:hover {
  background-color: var(--option-background_color-selected-hover);
}

.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_option__Hvo8n.Select-module_focused__joVjV {
  outline: var(--option-outline-focus);
}
`);const MT=(e,t)=>((n,r)=>[...n.entries()].map(([o,a])=>({key:o,keywords:(a?.length?a:[o]).sort(r)})).sort((o,a)=>{const l=Math.min(o.keywords.length,a.keywords.length);for(let u=0;u<l;u++){const d=r(o.keywords[u],a.keywords[u]);if(d!==0)return d}return 0}).map(({key:o})=>o))(new Map(e.map(({label:n,value:r,keywords:o})=>[r,o?[n,...o]:[n]])),PT(t)).map(n=>e.find(r=>r.value===n)),Fa={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},Vh=e=>{var t,n;const{disabled:r,error:o,hideLabel:a,inputId:l,label:u,multiple:d,onBlur:f,onChange:p,onFocus:m,options:g,searchLabel:x,value:y}=e,w=g.map(K=>K.value);if(w.length!==new Set(w).size)throw Error("Each value in the option list must be unique.");const P=E.useCallback(K=>{var ae;return(ae=g.find(ve=>ve.value===K))!==null&&ae!==void 0?ae:{label:"",value:""}},[g]),[_,b]=E.useState(d&&y!=null?y:[]),[k,C]=E.useState(d?"":(n=(t=P(y))===null||t===void 0?void 0:t.label)!==null&&n!==void 0?n:""),[R,I]=E.useState(g),N=ju([...g]),U=ju(y);Cs(()=>{var K,ae;let ve=!1;(g.length!==N?.length||g.some((xe,Se)=>!Qw(xe,N[Se])))&&(I(g),ve=!0),(!d&&y!==U||d&&(typeof U=="string"||!Ew(y,U))||ve)&&(d?b(y??[]):(J(y),C((ae=(K=P(y))===null||K===void 0?void 0:K.label)!==null&&ae!==void 0?ae:"")))});const $=g.length,[F,J]=E.useState(d?void 0:y),le=R.findIndex(K=>K.value===F),X=E.useCallback(K=>C(!d&&K||""),[C,d]),{x:Q,y:ce,elements:Y,refs:B}=Zw({placement:"bottom",whileElementsMounted:jw,middleware:[Rw(),GL({apply:({availableHeight:K,elements:ae,rects:ve})=>{Object.assign(ae.floating.style,{maxHeight:`min(${K}px, var(--option_list-max_height))`,width:`${ve.reference.width}px`})}})]}),M=Y.floating,ne=Y.reference,[q,O]=E.useState(!1),A=function(K){const[ae,ve]=E.useState(!1),xe=()=>{var Se;const{activeElement:ze}=document;ve((Se=K?.contains(ze))!==null&&Se!==void 0&&Se)};return Ol("focusin",xe,K),Ol("focusout",xe,K),ae}(ne);Ol("click",()=>O(!1)),Ol("keydown",()=>O(!0)),Cs(()=>{var K,ae;d||A||C((ae=(K=P(F))===null||K===void 0?void 0:K.label)!==null&&ae!==void 0?ae:""),A&&m?m(d?_:F||""):!A&&f&&f(d?_:F||"")},[A]);const[z,Z]=E.useState(!1);E.useEffect(()=>{if(M){const K=M.offsetHeight,ae=M.querySelectorAll("button");if(!ae.length)return;const ve=M.scrollTop,xe=ve+K,Se=ae[le];if(Se){const ze=Se.offsetTop,We=ze+Se.offsetHeight;ze>=ve&&We<=xe||(M.scrollTop=ze<ve?ze:We-K)}}},[le,M]);const re=(K,ae)=>{_?.length||J(ae),b(K),p&&p(K),X()},ue=K=>{var ae;d?_.includes(K)?de(K):re([..._,K],K):(J(ae=K),X(P(ae).label),Z(!1),p&&p(ae))},de=K=>{re(_.filter(ae=>ae!==K),K)},be=E.useCallback(()=>{let K=null;if(F===void 0)K=R[0];else{const ae=le+1;ae>=0&&ae<$&&(K=R[ae])}K&&(J(K.value),X(K.label)),Z(!0)},[F,le,X,J,R,$]),Je=E.useCallback(()=>{let K=null;if(F===void 0)K=R[$-1];else{const ae=le-1;ae>=0&&ae<$&&(K=R[ae])}K&&(J(K.value),X(K.label)),Z(!0)},[F,le,X,J,R,$]);tf(Fa.ArrowDown,()=>z?be():Z(!0),ne),tf(Fa.ArrowUp,()=>z?Je():Z(!0),ne),tf(Fa.Enter,()=>{z&&(F?ue(F):Z(!1))},ne);const et=K=>{var ae,ve;const xe=K.target.value;if(xe){const Se=MT(g,xe);I(Se);const ze=(ae=R[0])===null||ae===void 0?void 0:ae.value,We=(ve=Se[0])===null||ve===void 0?void 0:ve.value;Se&&ze!=We&&J(We),!z&&Z(!0)}C(xe)},$e=K=>F===K,Le=K=>d?_.includes(K):$e(K),tt=E.useId(),oe=l??tt,he=E.useId();return D.createElement("span",{className:qe(wt.select,wt[d?"multiple":"single"],z&&wt.expanded,r&&wt.disabled,q&&wt.usingKeyboard),"data-testid":"select-root"},D.createElement(km,{disabled:r,inputId:oe,inputRenderer:({className:K,inputId:ae,hasIcon:ve})=>D.createElement("span",{className:qe(K,wt.field,ve&&wt.hasIcon),ref:B.setReference},D.createElement("span",{className:wt.inputArea},d&&D.createElement(D.Fragment,null,_.map(P).map(xe=>D.createElement(Gw,{deleteButtonLabel:xe.deleteButtonLabel,disabled:r!=null&&r,key:xe.value,label:xe.label,onDeleteButtonClick:()=>de(xe.value)}))),D.createElement("input",{"aria-activedescendant":F?`${ae}-${F}`:void 0,"aria-autocomplete":"list","aria-controls":he,"aria-expanded":z,"aria-haspopup":"listbox","aria-label":x??u,"aria-owns":he,autoComplete:"off",className:wt.textInput,disabled:r,id:ae,onBlur:()=>Z(!1),onClick:()=>Z(!0),onChange:et,onFocus:()=>Z(!0),onKeyDown:xe=>{Object.values(Fa).includes(xe.key)&&xe.preventDefault()},role:"combobox",type:"text",value:k})),d&&D.createElement("button",{"aria-label":e.deleteButtonLabel,className:wt.deleteButton+" "+xm,disabled:!_.length||r,onClick:()=>{re([])},type:"button"},D.createElement("span",{className:wt.deleteButtonCross})),D.createElement("button",{"aria-controls":he,"aria-expanded":z,"aria-haspopup":"listbox","aria-label":u,className:wt.fieldButton,disabled:r,onBlur:()=>Z(!1),onClick:()=>Z(!z),onKeyDown:xe=>{Object.values(Fa).includes(xe.key)&&(xe.preventDefault(),Z(!0))},tabIndex:-1,type:"button",value:d?_:F},D.createElement("span",{className:wt.arrowWrapper},D.createElement("span",{className:wt.arrow})))),isSearch:!1,isValid:!o,label:a?void 0:u,noFocusEffect:d,noPadding:!0,readOnly:!1}),D.createElement("span",{className:wt.optionListWrapper,ref:B.setFloating,style:{left:Q??0,top:ce??0}},D.createElement("span",{"aria-expanded":z,className:wt.optionList,id:he,role:"listbox"},R.map(K=>{var ae;return D.createElement("button",{"aria-label":K.label,"aria-selected":Le(K.value),className:qe(wt.option,Le(K.value)&&wt.selected,d&&$e(K.value)&&wt.focused),id:`${oe}-${K.value}`,key:K.value,onClick:()=>ue(K.value),onMouseDown:ve=>ve.preventDefault(),onKeyDown:ve=>ve.preventDefault(),role:"option",type:"button",value:K.value},(ae=K.formattedLabel)!==null&&ae!==void 0?ae:K.label)}))))};Vh.displayName="Select";var DT="Spinner-module_spinner__GpFZS",jT="Spinner-module_spinnerCircle__DRFwJ",FT="Spinner-module_defaultForeground__Ay0Sq",UT="Spinner-module_interactionForeground__8aY93",$T="Spinner-module_invertedForeground__DF2fs",WT="Spinner-module_defaultBackground__7A7zq",HT="Spinner-module_interactionBackground__jBIwt",ZT="Spinner-module_invertedBackground__nQ8Oa";Ie(`.Spinner-module_spinner__GpFZS {
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
`);const Sy={xSmall:13,small:20,medium:27,large:40,"1xLarge":44,"2xLarge":56,"3xLarge":79},Py={default:{foreground:FT,background:WT},interaction:{foreground:UT,background:HT},inverted:{foreground:$T,background:ZT}},VT=e=>{var{title:t,size:n="medium",variant:r="default",className:o=""}=e,a=ft(e,["title","size","variant","className"]);return D.createElement("svg",Object.assign({className:`${DT} ${o}`,style:{width:Sy[n],height:Sy[n]},viewBox:"0 0 50 50"},a),D.createElement("title",null,t),D.createElement("circle",{className:Py[r].background,cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"}),D.createElement("circle",{className:`${jT} ${Py[r].foreground}`,cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"}))};var Cy={textArea:"TextArea-module_textArea__Fp7-I","resize-none":"TextArea-module_resize-none__LLMFm","resize-both":"TextArea-module_resize-both__LTKmK","resize-horizontal":"TextArea-module_resize-horizontal__SIRxw","resize-vertical":"TextArea-module_resize-vertical__oRHAF"};Ie(`.TextArea-module_textArea__Fp7-I {
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
`);E.forwardRef((e,t)=>{var n,{isValid:r=!0,disabled:o=!1,readOnly:a=!1,resize:l="none",label:u,characterLimit:d,value:f,onChange:p}=e,m=ft(e,["isValid","disabled","readOnly","resize","label","characterLimit","value","onChange"]);const[g,x]=E.useState(f?f.toString():""),y=E.useId(),w=(n=m.id)!==null&&n!==void 0?n:y,P=_=>{x(_.target.value),p&&p(_)};return D.createElement(km,{value:g,disabled:o,inputId:w,characterLimit:d,inputRenderer:({className:_,inputId:b,describedBy:k})=>D.createElement("textarea",Object.assign({},m,{ref:t,value:f,onChange:P,id:b,"aria-describedby":k,disabled:o,readOnly:!!a,className:[_,Cy.textArea,Cy[`resize-${l}`]].join(" ")})),isValid:r,label:u,readOnly:a})});E.forwardRef((e,t)=>{var{id:n,onChange:r,isValid:o=!0,disabled:a=!1,readOnly:l=!1,required:u=!1,formatting:d,label:f,value:p,characterLimit:m}=e,g=ft(e,["id","onChange","isValid","disabled","readOnly","required","formatting","label","value","characterLimit"]);const[x,y]=E.useState(p?p.toString():""),w=(_,b)=>{b.source==="event"&&r&&(y(_.value.trim()),(({values:k,sourceInfo:C})=>{C.event.target.value=k.value.trim()})({values:_,sourceInfo:b}),r(b.event))},P=_=>{r&&r(_),y(_.target.value||"")};return D.createElement(km,{value:x,isValid:o,disabled:a,readOnly:l,label:f,inputId:n,characterLimit:m,inputRenderer:({className:_,variant:b,inputId:k,describedBy:C})=>{const R={id:k,readOnly:!!l,disabled:a,required:u,className:qe(_,g.className),style:Object.assign({textAlign:d?.align},g.style)};return d?.number&&ET(d.number)?(d.number.prefix&&d.number.prefix[0]==="-"&&(d.number.prefix=` ${d.number.prefix}`),D.createElement(AL,Object.assign({},R,d.number,g,{value:p,"data-testid":`${k}-formatted-number-${b}`,onValueChange:w,valueIsNumericString:!0,"aria-describedby":C,getInputRef:t}))):d?.number&&CT(d.number)?D.createElement(jL,Object.assign({},R,d.number,g,{value:p,"data-testid":`${k}-formatted-number-${b}`,onValueChange:w,valueIsNumericString:!0,"aria-describedby":C,getInputRef:t})):D.createElement("input",Object.assign({},R,g,{value:p,"data-testid":`${k}-${b}`,onChange:P,"aria-describedby":C,ref:t}))}})});const Jw=E.createContext(void 0),Sm=()=>{const e=E.useContext(Jw);if(e===void 0)throw new Error("useAccordionContext must be used within an AccordionContext");return e};var qT="LegacyAccordion-module_legacyAccordion__eadKx";Ie(`.LegacyAccordion-module_legacyAccordion__eadKx {
  --component-LegacyAccordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;

  background-color: var(--component-LegacyAccordion-color-background);
  width: var(--component-panel-size-width);
}
`);const Yw=({children:e,open:t,onClick:n,iconVariant:r="primary"})=>{const o=E.useId(),a=E.useId();return D.createElement("div",{className:qT},D.createElement(Jw.Provider,{value:{onClick:n,open:t,headerId:o,contentId:a,iconVariant:r}},e))};Yw.displayName="LegacyAccordion";const Xw=({children:e})=>{const{open:t,contentId:n,headerId:r}=Sm();return D.createElement("div",null,t&&D.createElement("div",{"aria-expanded":t,id:n,"aria-labelledby":r},e))};Xw.displayName="LegacyAccordionContent";var KT="LegacyAccordionHeader-module_legacyAccordionHeader__2Vu0a",QT="LegacyAccordionHeader-module_subtitle__4zhgP",GT="LegacyAccordionHeader-module_withSubtitle__6ISS5",JT="LegacyAccordionHeader-module_title__m0-FG",YT="LegacyAccordionHeader-module_actions__L11E1";Ie(`.LegacyAccordionHeader-module_legacyAccordionHeader__2Vu0a {
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
  --component-LegacyAccordion_header_title-font_weight: var(
    --component-panel-font_weight-heading
  );
  --component-LegacyAccordion_header_title-spacing-margin_left: 1.6rem;

  background-color: var(
    --component-LegacyAccordion_header_title-color-background
  );
  border-bottom-style: var(
    --component-LegacyAccordion_header_title-border_bottom_style
  );
  border-left-style: var(
    --component-LegacyAccordion_header_title-border_left_style
  );
  border-right-style: var(
    --component-LegacyAccordion_header_title-border_right_style
  );
  border-top-style: var(
    --component-LegacyAccordion_header_title-border_top_style
  );
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 auto;
  flex-direction: column;
  font-family: inherit;
  font-size: var(--component-LegacyAccordion_header_title-font_size);
  font-weight: var(--component-LegacyAccordion_header_title-font_weight);
  line-height: 16px;
  margin-left: var(
    --component-LegacyAccordion_header_title-spacing-margin_left
  );
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
`);var XT="LegacyAccordionIcon-module_legacyAccordionIcon__-LNuQ",eR="LegacyAccordionIcon-module_opened__Zoiav";Ie(`.LegacyAccordionIcon-module_legacyAccordionIcon__-LNuQ {
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
`);const tR=e=>D.createElement("svg",Object.assign({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),D.createElement("path",{d:`
        M 12.8834 34
        L 10      31.0909
        L 22.9754 18
        L 10       4.90909
        L 12.8834  2
        L 28.7423 18
        L 12.8834 34
        Z
      `,fill:HO})),nR=e=>D.createElement("svg",Object.assign({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),D.createElement("path",{d:`
        M 18   34
        C 26.8 34    34   26.8 34 18
        C 34    9.2  26.8  2   18  2
        C  9.2  2     2    9.2  2 18
        C  2   26.8   9.2 34   18 34
        Z
        M 14.3556 11.1556
        L 16.0444 9.37778
        L 24.2222 17.5556
        L 16.0444 25.7333
        L 14.3556 23.9556
        L 20.8444 17.5556
        L 14.3556 11.1556
        Z
      `,fill:ZO})),e1=()=>{const{onClick:e,open:t,iconVariant:n}=Sm(),r={className:qe(XT,t&&eR),onClick:e};switch(n){case"primary":return D.createElement(tR,Object.assign({},r));case"secondary":return D.createElement(nR,Object.assign({},r))}};e1.displayName="LegacyAccordionIcon";const t1=({children:e,actions:t,subtitle:n})=>{const{onClick:r,open:o,headerId:a,contentId:l}=Sm();return D.createElement("div",{className:qe(KT,{[GT]:n})},D.createElement(e1,null),D.createElement("button",{className:JT,"aria-expanded":o,type:"button",onClick:r,id:a,"aria-controls":l},e,n?.length&&D.createElement("span",{"data-testid":"LegacyAccordion-header-subtitle",className:QT},n)),D.createElement("div",{className:YT},t))};t1.displayName="LegacyAccordionHeader";var Ey={list:"List-module_list__9aWGq",solid:"List-module_solid__g5log",dashed:"List-module_dashed__sq10j"};Ie(`.List-module_list__9aWGq {
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
`);const rR=e=>{var{borderStyle:t="solid",children:n,className:r}=e,o=ft(e,["borderStyle","children","className"]);return D.createElement("ul",Object.assign({},o,{className:qe([Ey.list,Ey[t],r])}),n)};var oR="ListItem-module_listItem__AJQMK";Ie(`.ListItem-module_listItem__AJQMK {
  border-bottom-color: var(--component-list-border_color);
  border-bottom-style: var(--component-list-border_style);
  border-bottom-width: var(--component-list-border_width);
  display: block;
}
`);const Ao=e=>{var{children:t}=e,n=ft(e,["children"]);return D.createElement("li",Object.assign({},n,{className:oR}),t)};Ie(`.Table-module_table__Dkosn {
  align-self: stretch;
  background-color: #fff;
  border-collapse: collapse;
  border-spacing: 0;
  box-shadow: 0 1px 1px rgb(0 0 0 / 0.12), 0 2px 2px rgb(0 0 0 / 0.12);
  flex-grow: 0;
  order: 3;
  width: 100%;
}
`);E.createContext(void 0);E.createContext({variantStandard:"body"});Ie(`.TableHeader-module_table-header__mrqgB {
  align-self: stretch;
  background: #f5f5f5;
  flex-grow: 0;
  order: 1;
}
`);Ie(`.TableRow-module_tableRow__lREy- {
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
`);Ie(`.TableCell-module_headerTableCell__1Riow {
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
`);Ie(`.TableBody-module_tableBody__fKFbY {
  align-self: stretch;
  background-color: #ffff;
  flex-grow: 0;
  order: 2;
}
`);Ie(`.TableFooter-module_tableFooter__MJ37D {
  align-self: stretch;
  background: #f5f5f5;
  flex-grow: 0;
  order: 1;
}
`);Ie(`.ToggleButtonGroup-module_toggleButtonGroup__Q-2j7 {
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
  font-family: var(--font_family-default);
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
  outline: var(--semantic-tab_focus-outline-color) auto
    var(--semantic-tab_focus-outline-width);
  z-index: 1;
}

.ToggleButtonGroup-module_toggleButton__RA-MW:not(.ToggleButtonGroup-module_pressed__aAphL):hover {
  background-color: #cff0ff;
}
`);var Rl={paragraph:"Paragraph-module_paragraph__Q65gR",spacing:"Paragraph-module_spacing__NqukG",large:"Paragraph-module_large__a1-p4",short:"Paragraph-module_short__2YxWV",medium:"Paragraph-module_medium__LYuYD",small:"Paragraph-module_small__nw9qP",xsmall:"Paragraph-module_xsmall__sCdyx"};Ie(`.Paragraph-module_paragraph__Q65gR {
  margin: 0;
}

.Paragraph-module_spacing__NqukG {
  margin-bottom:var(--fds-spacing-4);
}

.Paragraph-module_paragraph__Q65gR.Paragraph-module_large__a1-p4 {
  font: var(--fds-typography-paragraph-large);
}

.Paragraph-module_paragraph__Q65gR.Paragraph-module_large__a1-p4.Paragraph-module_short__2YxWV{
  font: var(--fds-typography-paragraph-short-large);
}

.Paragraph-module_paragraph__Q65gR.Paragraph-module_medium__LYuYD {
  font: var(--fds-typography-paragraph-medium);
}

.Paragraph-module_paragraph__Q65gR.Paragraph-module_medium__LYuYD.Paragraph-module_short__2YxWV{
  font: var(--fds-typography-paragraph-short-medium);
}

.Paragraph-module_paragraph__Q65gR.Paragraph-module_small__nw9qP {
  font: var(--fds-typography-paragraph-small);
}

.Paragraph-module_paragraph__Q65gR.Paragraph-module_small__nw9qP.Paragraph-module_short__2YxWV {
  font: var(--fds-typography-paragraph-short-small);
}


.Paragraph-module_paragraph__Q65gR.Paragraph-module_xsmall__sCdyx {
  font: var(--fds-typography-paragraph-xsmall);
}

.Paragraph-module_paragraph__Q65gR.Paragraph-module_xsmall__sCdyx.Paragraph-module_short__2YxWV {
  font: var(--fds-typography-paragraph-short-xsmall);
}
`);const n1=E.forwardRef((e,t)=>{var{className:n,size:r="medium",spacing:o,as:a="p",short:l}=e,u=ft(e,["className","size","spacing","as","short"]);return D.createElement(a,Object.assign({},u,{ref:t,className:qe(Rl.paragraph,Rl[r],{[Rl.spacing]:!!o,[Rl.short]:l},n)}))});var uf={heading:"Heading-module_heading__oGM7x",spacing:"Heading-module_spacing__F-DQ2",xlarge:"Heading-module_xlarge__Aq3TF",large:"Heading-module_large__kEdDZ",medium:"Heading-module_medium__VfBrh",small:"Heading-module_small__SY2lJ",xsmall:"Heading-module_xsmall__hYzb1",xxsmall:"Heading-module_xxsmall__TrWhu"};Ie(`.Heading-module_heading__oGM7x {
  margin: 0;
}

.Heading-module_spacing__F-DQ2 {
  margin-bottom: var(--fds-spacing-5);
}

.Heading-module_heading__oGM7x.Heading-module_xlarge__Aq3TF {
  font: var(--fds-typography-heading-xlarge);
}

.Heading-module_heading__oGM7x.Heading-module_large__kEdDZ {
  font: var(--fds-typography-heading-large);
}

.Heading-module_heading__oGM7x.Heading-module_medium__VfBrh {
  font: var(--fds-typography-heading-medium);
}

.Heading-module_heading__oGM7x.Heading-module_small__SY2lJ {
  font: var(--fds-typography-heading-small);
}

.Heading-module_heading__oGM7x.Heading-module_xsmall__hYzb1 {
  font: var(--fds-typography-heading-xsmall);
}

.Heading-module_heading__oGM7x.Heading-module_xxsmall__TrWhu {
  font: var(--fds-typography-heading-xxsmall);
}
`);const iR=E.forwardRef((e,t)=>{var{level:n=1,size:r="xlarge",spacing:o=!1,className:a,as:l}=e,u=ft(e,["level","size","spacing","className","as"]);const d=l??`h${n??1}`;return D.createElement(d,Object.assign({},u,{ref:t,className:qe(uf.heading,uf[r],{[uf.spacing]:o},a)}))});var cf={ingress:"Ingress-module_ingress__QiPXj",spacing:"Ingress-module_spacing__C2m1n",medium:"Ingress-module_medium__r-UCu",large:"Ingress-module_large__c00wp"};Ie(`.Ingress-module_ingress__QiPXj {
  margin: 0;
}

.Ingress-module_spacing__C2m1n {
  margin-bottom: var(--fds-spacing-5);
}

.Ingress-module_ingress__QiPXj.Ingress-module_medium__r-UCu {
   font: var(--fds-typography-ingress-medium);
}

.Ingress-module_ingress__QiPXj.Ingress-module_large__c00wp {
   font: var(--fds-typography-ingress-large);
}

`);E.forwardRef((e,t)=>{var{className:n,size:r="medium",spacing:o,as:a="p"}=e,l=ft(e,["className","size","spacing","as"]);return D.createElement(a,Object.assign({},l,{ref:t,className:qe(cf.ingress,cf[r],{[cf.spacing]:!!o},n)}))});var df={label:"Label-module_label__vyjHz",spacing:"Label-module_spacing__8PZyR",large:"Label-module_large__Y2DhY",medium:"Label-module_medium__mDhxE",small:"Label-module_small__5UUDo",xsmall:"Label-module_xsmall__TwPQx"};Ie(`.Label-module_label__vyjHz {
  display: inline-block;
  margin: 0;
}

.Label-module_spacing__8PZyR {
  margin-bottom: var(--fds-spacing-5);
}

.Label-module_label__vyjHz.Label-module_large__Y2DhY {
   font: var(--fds-typography-label-large);
}

.Label-module_label__vyjHz.Label-module_medium__mDhxE {
   font: var(--fds-typography-label-medium);
}

.Label-module_label__vyjHz.Label-module_small__5UUDo {
   font: var(--fds-typography-label-small);
}

.Label-module_label__vyjHz.Label-module_xsmall__TwPQx {
   font: var(--fds-typography-label-xsmall);
}
`);E.forwardRef((e,t)=>{var{className:n,size:r="medium",spacing:o,as:a="label"}=e,l=ft(e,["className","size","spacing","as"]);return D.createElement(a,Object.assign({},l,{ref:t,className:qe(df.label,df[r],{[df.spacing]:!!o},n)}))});var ff={errorMessage:"ErrorMessage-module_errorMessage__Mn3zg",spacing:"ErrorMessage-module_spacing__cDjeN",medium:"ErrorMessage-module_medium__ZOE1G",small:"ErrorMessage-module_small__mUspd"};Ie(`.ErrorMessage-module_errorMessage__Mn3zg {
  margin: 0;
  color: var(--fds-semantic-text-danger-default);
}

.ErrorMessage-module_errorMessage__Mn3zg.ErrorMessage-module_spacing__cDjeN {
  margin-bottom: var(--fds-spacing-5);
}

.ErrorMessage-module_errorMessage__Mn3zg.ErrorMessage-module_medium__ZOE1G {
  font: var(--fds-typography-error_message-medium);
}

.ErrorMessage-module_errorMessage__Mn3zg.ErrorMessage-module_small__mUspd {
  font: var(--fds-typography-error_message-small);
}

`);const aR=E.forwardRef((e,t)=>{var{className:n,size:r="medium",spacing:o,as:a="p"}=e,l=ft(e,["className","size","spacing","as"]);return D.createElement(a,Object.assign({},l,{ref:t,className:qe(ff.errorMessage,ff[r],{[ff.spacing]:!!o},n)}))});var lo={accordion:"Accordion-module_accordion__LVhhv",border:"Accordion-module_border__33ZCr",expandIcon:"Accordion-module_expandIcon__VoOG-",content:"Accordion-module_content__PEM9t",item:"Accordion-module_item__7ryVk",header:"Accordion-module_header__WaTdJ",button:"Accordion-module_button__DIKcm",neutral:"Accordion-module_neutral__qNam6",subtle:"Accordion-module_subtle__Mo-a1",primary:"Accordion-module_primary__62zA0",secondary:"Accordion-module_secondary__D7Kj1",tertiary:"Accordion-module_tertiary__jJX6T",open:"Accordion-module_open__98jLY",filled:"Accordion-module_filled__lWoG4"};Ie(`.Accordion-module_accordion__LVhhv {
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
  --fdsc-accordion-header-shadow-focus: 2px 2px 3px
    var(--fds-semantic-border-neutral-subtle);
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
  outline: var(--semantic-tab_focus-outline-color) solid
    var(--semantic-tab_focus-outline-width);
  outline-offset: var(--semantic-tab_focus-outline-offset);
}

.Accordion-module_header__WaTdJ > .Accordion-module_button__DIKcm:focus:not(:focus-visible) {
  outline: none;
}

.Accordion-module_header__WaTdJ > button:hover {
  color: var(--fdsc-accordion-header-color-hover)
}

.Accordion-module_item__7ryVk:focus-within {
  position: relative;
}

.Accordion-module_accordion__LVhhv.Accordion-module_neutral__qNam6, .Accordion-module_accordion__LVhhv.Accordion-module_neutral__qNam6 > .Accordion-module_item__7ryVk > .Accordion-module_header__WaTdJ > button {
  background: var(--fdsc-accordion-header-bg-neutral);
}

.Accordion-module_accordion__LVhhv.Accordion-module_subtle__Mo-a1, .Accordion-module_accordion__LVhhv.Accordion-module_subtle__Mo-a1 > .Accordion-module_item__7ryVk > .Accordion-module_header__WaTdJ > button {
  background: var(--fdsc-accordion-header-bg-subtle);
}

.Accordion-module_accordion__LVhhv.Accordion-module_primary__62zA0, .Accordion-module_accordion__LVhhv.Accordion-module_primary__62zA0 > .Accordion-module_item__7ryVk > .Accordion-module_header__WaTdJ > button {
  background: var(--fdsc-accordion-header-bg-primary);
}

.Accordion-module_accordion__LVhhv.Accordion-module_secondary__D7Kj1, .Accordion-module_accordion__LVhhv.Accordion-module_secondary__D7Kj1 > .Accordion-module_item__7ryVk > .Accordion-module_header__WaTdJ > button {
  background: var(--fdsc-accordion-header-bg-secondary);
}

.Accordion-module_accordion__LVhhv.Accordion-module_tertiary__jJX6T, .Accordion-module_accordion__LVhhv.Accordion-module_tertiary__jJX6T > .Accordion-module_item__7ryVk > .Accordion-module_header__WaTdJ > button {
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
`);const sR=E.forwardRef((e,t)=>{var{border:n=!1,color:r="neutral",className:o}=e,a=ft(e,["border","color","className"]);return D.createElement("div",Object.assign({},a,{className:qe(lo.accordion,lo[r],{[lo.border]:n},o),ref:t}))}),Pm=E.createContext(null),lR=E.forwardRef((e,t)=>{var{children:n,className:r,open:o,defaultOpen:a=!1}=e,l=ft(e,["children","className","open","defaultOpen"]);const[u,d]=E.useState(a),f=E.useId();return D.createElement("div",Object.assign({className:qe(lo.item,r,{[lo.open]:o??u}),ref:t},l),D.createElement(Pm.Provider,{value:{open:o??u,toggleOpen:()=>{o===void 0&&d(p=>!p)},contentId:f}},n))});function Oy(e){return typeof e=="string"&&e[e.length-1]==="%"&&function(t){const n=parseFloat(t);return!isNaN(n)&&isFinite(n)}(e.substring(0,e.length-1))}function hf(e,t){t===0&&e?.style&&(e.style.display="none")}const uR=e=>{var{children:t,className:n,innerClassName:r,duration:o=250,easing:a="ease",height:l}=e,u=ft(e,["children","className","innerClassName","duration","easing","height"]);const d=E.useRef(l),f=E.useRef(null),p=E.useRef(),m=E.useRef(),g=typeof window<"u",x=E.useRef(!(!g||!window.matchMedia)&&window.matchMedia("(prefers-reduced-motion)").matches).current?0:o;let y=l,w="visible";typeof y=="number"?(y=+l<0?0:l,w="hidden"):Oy(y)&&(y=l==="0%"?0:l,w="hidden");const[P,_]=E.useState(y),[b,k]=E.useState(w),[C,R]=E.useState(!1);E.useEffect(()=>{hf(f.current,P)},[]),E.useEffect(()=>{if(l!==d.current&&f.current){(function(ce,Y){Y===0&&ce?.style&&(ce.style.display="")})(f.current,d.current),f.current.style.overflow="hidden";const U=f.current.offsetHeight;f.current.style.overflow="";const $=x;let F,J,le,X="hidden";const Q=d.current==="auto";typeof l=="number"?(F=l<0?0:l,J=F):Oy(l)?(F=l==="0%"?0:l,J=F):(F=U,J="auto",X=void 0),Q&&(J=F,F=U),_(F),k("hidden"),R(!Q),clearTimeout(m.current),clearTimeout(p.current),Q?(le=!0,m.current=setTimeout(()=>{_(J),k(X),R(le)},50),p.current=setTimeout(()=>{R(!1),hf(f.current,J)},$)):m.current=setTimeout(()=>{_(J),k(X),R(!1),l!=="auto"&&hf(f.current,F)},$)}return d.current=l,()=>{clearTimeout(m.current),clearTimeout(p.current)}},[l]);const I={height:P,overflow:b};C&&(I.transition=`height ${x}ms ${a} 0ms`,I.WebkitTransition=I.transition);const N=u["aria-hidden"]!==void 0?u["aria-hidden"]:l===0;return D.createElement("div",Object.assign({},u,{className:n,style:I}),D.createElement("div",{"aria-hidden":N,className:r,ref:f},t))},cR=E.forwardRef((e,t)=>{var{children:n,className:r}=e,o=ft(e,["children","className"]);const a=E.useContext(Pm);return a===null?(console.error("<Accordion.Content> has to be used within an <Accordion.Item>"),null):D.createElement(uR,{id:a.contentId,height:a.open?"auto":0,duration:250},D.createElement(n1,Object.assign({},o,{as:"div",size:"small",ref:t,className:qe(lo.content,r)}),n))}),dR=E.forwardRef((e,t)=>{var{level:n=1,children:r,className:o,onHeaderClick:a}=e,l=ft(e,["level","children","className","onHeaderClick"]);const u=E.useContext(Pm);return u===null?(console.error("<Accordion.Header> has to be used within an <Accordion.Item>"),null):D.createElement(iR,Object.assign({},l,{ref:t,size:"xsmall",level:n,className:qe(lo.header,o)}),D.createElement("button",{type:"button",onClick:d=>{u.toggleOpen(),a&&a(d)},"aria-expanded":u.open,"aria-controls":u.contentId},D.createElement(sL,{"aria-hidden":!0,className:lo.expandIcon}),D.createElement(n1,{as:"span",size:"small"},r)))}),pf=sR;var Ly,Ty,Ry,Ay,zy,Ny,Iy,By,is,qh,My,Dy,jy,Fy,Uy,$y,Wy;pf.Header=dR,pf.Content=cR,pf.Item=lR,function(e){e.Xsmall="xsmall",e.Small="small"}(Ly||(Ly={})),function(e){e.Default="default",e.Error="error",e.Disabled="disabled",e.ReadOnlyInfo="readonlyInfo",e.ReadOnlyConfirm="readonlyConfirm"}(Ty||(Ty={})),function(e){e.ReadOnlyInfo="readonlyInfo",e.ReadOnlyConfirm="readonlyConfirm"}(Ry||(Ry={})),function(e){e.None="none",e.Error="error",e.Search="search"}(Ay||(Ay={})),function(e){e.Primary="primary",e.Secondary="secondary"}(zy||(zy={})),function(e){e.Small="small",e.Medium="medium",e.Large="large"}(Ny||(Ny={})),function(e){e.Primary="primary",e.Secondary="secondary",e.Success="success",e.Danger="danger",e.Inverted="inverted"}(Iy||(Iy={})),function(e){e.Filled="filled",e.Outline="outline",e.Quiet="quiet"}(By||(By={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(is||(is={})),function(e){e.Xsmall="xsmall",e.Small="small"}(qh||(qh={})),function(e){e.Xsmall="xsmall",e.Small="small"}(My||(My={})),function(e){e.Xsmall="xsmall",e.Small="small"}(Dy||(Dy={})),function(e){e.Xsmall="xsmall",e.Small="small"}(jy||(jy={})),function(e){e.Default="default",e.Info="info",e.Warning="warning",e.Danger="danger"}(Fy||(Fy={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(Uy||(Uy={})),function(e){e.XLarge="xlarge",e.Large="large",e.Medium="medium",e.Small="small",e.XSmall="xsmall"}($y||($y={})),function(e){e[e.H1=1]="H1",e[e.H2=2]="H2",e[e.H3=3]="H3",e[e.H4=4]="H4",e[e.H5=5]="H5",e[e.H6=6]="H6"}(Wy||(Wy={}));function r1(e,t){return function(){return e.apply(t,arguments)}}const{toString:fR}=Object.prototype,{getPrototypeOf:Cm}=Object,$c=(e=>t=>{const n=fR.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),sr=e=>(e=e.toLowerCase(),t=>$c(t)===e),Wc=e=>t=>typeof t===e,{isArray:da}=Array,Os=Wc("undefined");function hR(e){return e!==null&&!Os(e)&&e.constructor!==null&&!Os(e.constructor)&&yn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const o1=sr("ArrayBuffer");function pR(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&o1(e.buffer),t}const mR=Wc("string"),yn=Wc("function"),i1=Wc("number"),Hc=e=>e!==null&&typeof e=="object",_R=e=>e===!0||e===!1,Ql=e=>{if($c(e)!=="object")return!1;const t=Cm(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},gR=sr("Date"),vR=sr("File"),yR=sr("Blob"),bR=sr("FileList"),xR=e=>Hc(e)&&yn(e.pipe),wR=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||yn(e.append)&&((t=$c(e))==="formdata"||t==="object"&&yn(e.toString)&&e.toString()==="[object FormData]"))},kR=sr("URLSearchParams"),SR=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Us(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),da(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),l=a.length;let u;for(r=0;r<l;r++)u=a[r],t.call(null,e[u],u,e)}}function a1(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const s1=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),l1=e=>!Os(e)&&e!==s1;function Kh(){const{caseless:e}=l1(this)&&this||{},t={},n=(r,o)=>{const a=e&&a1(t,o)||o;Ql(t[a])&&Ql(r)?t[a]=Kh(t[a],r):Ql(r)?t[a]=Kh({},r):da(r)?t[a]=r.slice():t[a]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&Us(arguments[r],n);return t}const PR=(e,t,n,{allOwnKeys:r}={})=>(Us(t,(o,a)=>{n&&yn(o)?e[a]=r1(o,n):e[a]=o},{allOwnKeys:r}),e),CR=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ER=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},OR=(e,t,n,r)=>{let o,a,l;const u={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),a=o.length;a-- >0;)l=o[a],(!r||r(l,e,t))&&!u[l]&&(t[l]=e[l],u[l]=!0);e=n!==!1&&Cm(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},LR=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},TR=e=>{if(!e)return null;if(da(e))return e;let t=e.length;if(!i1(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},RR=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Cm(Uint8Array)),AR=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const a=o.value;t.call(e,a[0],a[1])}},zR=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},NR=sr("HTMLFormElement"),IR=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Hy=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),BR=sr("RegExp"),u1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Us(n,(o,a)=>{t(o,a,e)!==!1&&(r[a]=o)}),Object.defineProperties(e,r)},MR=e=>{u1(e,(t,n)=>{if(yn(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(yn(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},DR=(e,t)=>{const n={},r=o=>{o.forEach(a=>{n[a]=!0})};return da(e)?r(e):r(String(e).split(t)),n},jR=()=>{},FR=(e,t)=>(e=+e,Number.isFinite(e)?e:t),mf="abcdefghijklmnopqrstuvwxyz",Zy="0123456789",c1={DIGIT:Zy,ALPHA:mf,ALPHA_DIGIT:mf+mf.toUpperCase()+Zy},UR=(e=16,t=c1.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function $R(e){return!!(e&&yn(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const WR=e=>{const t=new Array(10),n=(r,o)=>{if(Hc(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const a=da(r)?[]:{};return Us(r,(l,u)=>{const d=n(l,o+1);!Os(d)&&(a[u]=d)}),t[o]=void 0,a}}return r};return n(e,0)},HR=sr("AsyncFunction"),ZR=e=>e&&(Hc(e)||yn(e))&&yn(e.then)&&yn(e.catch),G={isArray:da,isArrayBuffer:o1,isBuffer:hR,isFormData:wR,isArrayBufferView:pR,isString:mR,isNumber:i1,isBoolean:_R,isObject:Hc,isPlainObject:Ql,isUndefined:Os,isDate:gR,isFile:vR,isBlob:yR,isRegExp:BR,isFunction:yn,isStream:xR,isURLSearchParams:kR,isTypedArray:RR,isFileList:bR,forEach:Us,merge:Kh,extend:PR,trim:SR,stripBOM:CR,inherits:ER,toFlatObject:OR,kindOf:$c,kindOfTest:sr,endsWith:LR,toArray:TR,forEachEntry:AR,matchAll:zR,isHTMLForm:NR,hasOwnProperty:Hy,hasOwnProp:Hy,reduceDescriptors:u1,freezeMethods:MR,toObjectSet:DR,toCamelCase:IR,noop:jR,toFiniteNumber:FR,findKey:a1,global:s1,isContextDefined:l1,ALPHABET:c1,generateString:UR,isSpecCompliantForm:$R,toJSONObject:WR,isAsyncFn:HR,isThenable:ZR};function je(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}G.inherits(je,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:G.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const d1=je.prototype,f1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{f1[e]={value:e}});Object.defineProperties(je,f1);Object.defineProperty(d1,"isAxiosError",{value:!0});je.from=(e,t,n,r,o,a)=>{const l=Object.create(d1);return G.toFlatObject(e,l,function(d){return d!==Error.prototype},u=>u!=="isAxiosError"),je.call(l,e.message,t,n,r,o),l.cause=e,l.name=e.name,a&&Object.assign(l,a),l};const VR=null;function Qh(e){return G.isPlainObject(e)||G.isArray(e)}function h1(e){return G.endsWith(e,"[]")?e.slice(0,-2):e}function Vy(e,t,n){return e?e.concat(t).map(function(o,a){return o=h1(o),!n&&a?"["+o+"]":o}).join(n?".":""):t}function qR(e){return G.isArray(e)&&!e.some(Qh)}const KR=G.toFlatObject(G,{},null,function(t){return/^is[A-Z]/.test(t)});function Zc(e,t,n){if(!G.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=G.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,P){return!G.isUndefined(P[w])});const r=n.metaTokens,o=n.visitor||p,a=n.dots,l=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&G.isSpecCompliantForm(t);if(!G.isFunction(o))throw new TypeError("visitor must be a function");function f(y){if(y===null)return"";if(G.isDate(y))return y.toISOString();if(!d&&G.isBlob(y))throw new je("Blob is not supported. Use a Buffer instead.");return G.isArrayBuffer(y)||G.isTypedArray(y)?d&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function p(y,w,P){let _=y;if(y&&!P&&typeof y=="object"){if(G.endsWith(w,"{}"))w=r?w:w.slice(0,-2),y=JSON.stringify(y);else if(G.isArray(y)&&qR(y)||(G.isFileList(y)||G.endsWith(w,"[]"))&&(_=G.toArray(y)))return w=h1(w),_.forEach(function(k,C){!(G.isUndefined(k)||k===null)&&t.append(l===!0?Vy([w],C,a):l===null?w:w+"[]",f(k))}),!1}return Qh(y)?!0:(t.append(Vy(P,w,a),f(y)),!1)}const m=[],g=Object.assign(KR,{defaultVisitor:p,convertValue:f,isVisitable:Qh});function x(y,w){if(!G.isUndefined(y)){if(m.indexOf(y)!==-1)throw Error("Circular reference detected in "+w.join("."));m.push(y),G.forEach(y,function(_,b){(!(G.isUndefined(_)||_===null)&&o.call(t,_,G.isString(b)?b.trim():b,w,g))===!0&&x(_,w?w.concat(b):[b])}),m.pop()}}if(!G.isObject(e))throw new TypeError("data must be an object");return x(e),t}function qy(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Em(e,t){this._pairs=[],e&&Zc(e,this,t)}const p1=Em.prototype;p1.append=function(t,n){this._pairs.push([t,n])};p1.toString=function(t){const n=t?function(r){return t.call(this,r,qy)}:qy;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function QR(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function m1(e,t,n){if(!t)return e;const r=n&&n.encode||QR,o=n&&n.serialize;let a;if(o?a=o(t,n):a=G.isURLSearchParams(t)?t.toString():new Em(t,n).toString(r),a){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class GR{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){G.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ky=GR,_1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},JR=typeof URLSearchParams<"u"?URLSearchParams:Em,YR=typeof FormData<"u"?FormData:null,XR=typeof Blob<"u"?Blob:null,eA=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),tA=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),er={isBrowser:!0,classes:{URLSearchParams:JR,FormData:YR,Blob:XR},isStandardBrowserEnv:eA,isStandardBrowserWebWorkerEnv:tA,protocols:["http","https","file","blob","url","data"]};function nA(e,t){return Zc(e,new er.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,a){return er.isNode&&G.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function rA(e){return G.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function oA(e){const t={},n=Object.keys(e);let r;const o=n.length;let a;for(r=0;r<o;r++)a=n[r],t[a]=e[a];return t}function g1(e){function t(n,r,o,a){let l=n[a++];const u=Number.isFinite(+l),d=a>=n.length;return l=!l&&G.isArray(o)?o.length:l,d?(G.hasOwnProp(o,l)?o[l]=[o[l],r]:o[l]=r,!u):((!o[l]||!G.isObject(o[l]))&&(o[l]=[]),t(n,r,o[l],a)&&G.isArray(o[l])&&(o[l]=oA(o[l])),!u)}if(G.isFormData(e)&&G.isFunction(e.entries)){const n={};return G.forEachEntry(e,(r,o)=>{t(rA(r),o,n,0)}),n}return null}const iA={"Content-Type":void 0};function aA(e,t,n){if(G.isString(e))try{return(t||JSON.parse)(e),G.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Vc={transitional:_1,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,a=G.isObject(t);if(a&&G.isHTMLForm(t)&&(t=new FormData(t)),G.isFormData(t))return o&&o?JSON.stringify(g1(t)):t;if(G.isArrayBuffer(t)||G.isBuffer(t)||G.isStream(t)||G.isFile(t)||G.isBlob(t))return t;if(G.isArrayBufferView(t))return t.buffer;if(G.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return nA(t,this.formSerializer).toString();if((u=G.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Zc(u?{"files[]":t}:t,d&&new d,this.formSerializer)}}return a||o?(n.setContentType("application/json",!1),aA(t)):t}],transformResponse:[function(t){const n=this.transitional||Vc.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&G.isString(t)&&(r&&!this.responseType||o)){const l=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(u){if(l)throw u.name==="SyntaxError"?je.from(u,je.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:er.classes.FormData,Blob:er.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};G.forEach(["delete","get","head"],function(t){Vc.headers[t]={}});G.forEach(["post","put","patch"],function(t){Vc.headers[t]=G.merge(iA)});const Om=Vc,sA=G.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),lA=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(l){o=l.indexOf(":"),n=l.substring(0,o).trim().toLowerCase(),r=l.substring(o+1).trim(),!(!n||t[n]&&sA[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Qy=Symbol("internals");function Ua(e){return e&&String(e).trim().toLowerCase()}function Gl(e){return e===!1||e==null?e:G.isArray(e)?e.map(Gl):String(e)}function uA(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const cA=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function _f(e,t,n,r,o){if(G.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!G.isString(t)){if(G.isString(r))return t.indexOf(r)!==-1;if(G.isRegExp(r))return r.test(t)}}function dA(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function fA(e,t){const n=G.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,a,l){return this[r].call(this,t,o,a,l)},configurable:!0})})}class qc{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function a(u,d,f){const p=Ua(d);if(!p)throw new Error("header name must be a non-empty string");const m=G.findKey(o,p);(!m||o[m]===void 0||f===!0||f===void 0&&o[m]!==!1)&&(o[m||d]=Gl(u))}const l=(u,d)=>G.forEach(u,(f,p)=>a(f,p,d));return G.isPlainObject(t)||t instanceof this.constructor?l(t,n):G.isString(t)&&(t=t.trim())&&!cA(t)?l(lA(t),n):t!=null&&a(n,t,r),this}get(t,n){if(t=Ua(t),t){const r=G.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return uA(o);if(G.isFunction(n))return n.call(this,o,r);if(G.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Ua(t),t){const r=G.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||_f(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function a(l){if(l=Ua(l),l){const u=G.findKey(r,l);u&&(!n||_f(r,r[u],u,n))&&(delete r[u],o=!0)}}return G.isArray(t)?t.forEach(a):a(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const a=n[r];(!t||_f(this,this[a],a,t,!0))&&(delete this[a],o=!0)}return o}normalize(t){const n=this,r={};return G.forEach(this,(o,a)=>{const l=G.findKey(r,a);if(l){n[l]=Gl(o),delete n[a];return}const u=t?dA(a):String(a).trim();u!==a&&delete n[a],n[u]=Gl(o),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return G.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&G.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Qy]=this[Qy]={accessors:{}}).accessors,o=this.prototype;function a(l){const u=Ua(l);r[u]||(fA(o,l),r[u]=!0)}return G.isArray(t)?t.forEach(a):a(t),this}}qc.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);G.freezeMethods(qc.prototype);G.freezeMethods(qc);const Sr=qc;function gf(e,t){const n=this||Om,r=t||n,o=Sr.from(r.headers);let a=r.data;return G.forEach(e,function(u){a=u.call(n,a,o.normalize(),t?t.status:void 0)}),o.normalize(),a}function v1(e){return!!(e&&e.__CANCEL__)}function $s(e,t,n){je.call(this,e??"canceled",je.ERR_CANCELED,t,n),this.name="CanceledError"}G.inherits($s,je,{__CANCEL__:!0});function hA(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new je("Request failed with status code "+n.status,[je.ERR_BAD_REQUEST,je.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const pA=er.isStandardBrowserEnv?function(){return{write:function(n,r,o,a,l,u){const d=[];d.push(n+"="+encodeURIComponent(r)),G.isNumber(o)&&d.push("expires="+new Date(o).toGMTString()),G.isString(a)&&d.push("path="+a),G.isString(l)&&d.push("domain="+l),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function mA(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function _A(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function y1(e,t){return e&&!mA(t)?_A(e,t):t}const gA=er.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(a){let l=a;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(l){const u=G.isString(l)?o(l):l;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function vA(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function yA(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,a=0,l;return t=t!==void 0?t:1e3,function(d){const f=Date.now(),p=r[a];l||(l=f),n[o]=d,r[o]=f;let m=a,g=0;for(;m!==o;)g+=n[m++],m=m%e;if(o=(o+1)%e,o===a&&(a=(a+1)%e),f-l<t)return;const x=p&&f-p;return x?Math.round(g*1e3/x):void 0}}function Gy(e,t){let n=0;const r=yA(50,250);return o=>{const a=o.loaded,l=o.lengthComputable?o.total:void 0,u=a-n,d=r(u),f=a<=l;n=a;const p={loaded:a,total:l,progress:l?a/l:void 0,bytes:u,rate:d||void 0,estimated:d&&l&&f?(l-a)/d:void 0,event:o};p[t?"download":"upload"]=!0,e(p)}}const bA=typeof XMLHttpRequest<"u",xA=bA&&function(e){return new Promise(function(n,r){let o=e.data;const a=Sr.from(e.headers).normalize(),l=e.responseType;let u;function d(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}G.isFormData(o)&&(er.isStandardBrowserEnv||er.isStandardBrowserWebWorkerEnv?a.setContentType(!1):a.setContentType("multipart/form-data;",!1));let f=new XMLHttpRequest;if(e.auth){const x=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(x+":"+y))}const p=y1(e.baseURL,e.url);f.open(e.method.toUpperCase(),m1(p,e.params,e.paramsSerializer),!0),f.timeout=e.timeout;function m(){if(!f)return;const x=Sr.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),w={data:!l||l==="text"||l==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:x,config:e,request:f};hA(function(_){n(_),d()},function(_){r(_),d()},w),f=null}if("onloadend"in f?f.onloadend=m:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(m)},f.onabort=function(){f&&(r(new je("Request aborted",je.ECONNABORTED,e,f)),f=null)},f.onerror=function(){r(new je("Network Error",je.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let y=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||_1;e.timeoutErrorMessage&&(y=e.timeoutErrorMessage),r(new je(y,w.clarifyTimeoutError?je.ETIMEDOUT:je.ECONNABORTED,e,f)),f=null},er.isStandardBrowserEnv){const x=(e.withCredentials||gA(p))&&e.xsrfCookieName&&pA.read(e.xsrfCookieName);x&&a.set(e.xsrfHeaderName,x)}o===void 0&&a.setContentType(null),"setRequestHeader"in f&&G.forEach(a.toJSON(),function(y,w){f.setRequestHeader(w,y)}),G.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),l&&l!=="json"&&(f.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&f.addEventListener("progress",Gy(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",Gy(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=x=>{f&&(r(!x||x.type?new $s(null,e,f):x),f.abort(),f=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const g=vA(p);if(g&&er.protocols.indexOf(g)===-1){r(new je("Unsupported protocol "+g+":",je.ERR_BAD_REQUEST,e));return}f.send(o||null)})},Jl={http:VR,xhr:xA};G.forEach(Jl,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const wA={getAdapter:e=>{e=G.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=G.isString(n)?Jl[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new je(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(G.hasOwnProp(Jl,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!G.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Jl};function vf(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new $s(null,e)}function Jy(e){return vf(e),e.headers=Sr.from(e.headers),e.data=gf.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),wA.getAdapter(e.adapter||Om.adapter)(e).then(function(r){return vf(e),r.data=gf.call(e,e.transformResponse,r),r.headers=Sr.from(r.headers),r},function(r){return v1(r)||(vf(e),r&&r.response&&(r.response.data=gf.call(e,e.transformResponse,r.response),r.response.headers=Sr.from(r.response.headers))),Promise.reject(r)})}const Yy=e=>e instanceof Sr?e.toJSON():e;function oa(e,t){t=t||{};const n={};function r(f,p,m){return G.isPlainObject(f)&&G.isPlainObject(p)?G.merge.call({caseless:m},f,p):G.isPlainObject(p)?G.merge({},p):G.isArray(p)?p.slice():p}function o(f,p,m){if(G.isUndefined(p)){if(!G.isUndefined(f))return r(void 0,f,m)}else return r(f,p,m)}function a(f,p){if(!G.isUndefined(p))return r(void 0,p)}function l(f,p){if(G.isUndefined(p)){if(!G.isUndefined(f))return r(void 0,f)}else return r(void 0,p)}function u(f,p,m){if(m in t)return r(f,p);if(m in e)return r(void 0,f)}const d={url:a,method:a,data:a,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:u,headers:(f,p)=>o(Yy(f),Yy(p),!0)};return G.forEach(Object.keys(Object.assign({},e,t)),function(p){const m=d[p]||o,g=m(e[p],t[p],p);G.isUndefined(g)&&m!==u||(n[p]=g)}),n}const b1="1.4.0",Lm={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Lm[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Xy={};Lm.transitional=function(t,n,r){function o(a,l){return"[Axios v"+b1+"] Transitional option '"+a+"'"+l+(r?". "+r:"")}return(a,l,u)=>{if(t===!1)throw new je(o(l," has been removed"+(n?" in "+n:"")),je.ERR_DEPRECATED);return n&&!Xy[l]&&(Xy[l]=!0,console.warn(o(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,l,u):!0}};function kA(e,t,n){if(typeof e!="object")throw new je("options must be an object",je.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const a=r[o],l=t[a];if(l){const u=e[a],d=u===void 0||l(u,a,e);if(d!==!0)throw new je("option "+a+" must be "+d,je.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new je("Unknown option "+a,je.ERR_BAD_OPTION)}}const Gh={assertOptions:kA,validators:Lm},Dr=Gh.validators;class $u{constructor(t){this.defaults=t,this.interceptors={request:new Ky,response:new Ky}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=oa(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:a}=n;r!==void 0&&Gh.assertOptions(r,{silentJSONParsing:Dr.transitional(Dr.boolean),forcedJSONParsing:Dr.transitional(Dr.boolean),clarifyTimeoutError:Dr.transitional(Dr.boolean)},!1),o!=null&&(G.isFunction(o)?n.paramsSerializer={serialize:o}:Gh.assertOptions(o,{encode:Dr.function,serialize:Dr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l;l=a&&G.merge(a.common,a[n.method]),l&&G.forEach(["delete","get","head","post","put","patch","common"],y=>{delete a[y]}),n.headers=Sr.concat(l,a);const u=[];let d=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(d=d&&w.synchronous,u.unshift(w.fulfilled,w.rejected))});const f=[];this.interceptors.response.forEach(function(w){f.push(w.fulfilled,w.rejected)});let p,m=0,g;if(!d){const y=[Jy.bind(this),void 0];for(y.unshift.apply(y,u),y.push.apply(y,f),g=y.length,p=Promise.resolve(n);m<g;)p=p.then(y[m++],y[m++]);return p}g=u.length;let x=n;for(m=0;m<g;){const y=u[m++],w=u[m++];try{x=y(x)}catch(P){w.call(this,P);break}}try{p=Jy.call(this,x)}catch(y){return Promise.reject(y)}for(m=0,g=f.length;m<g;)p=p.then(f[m++],f[m++]);return p}getUri(t){t=oa(this.defaults,t);const n=y1(t.baseURL,t.url);return m1(n,t.params,t.paramsSerializer)}}G.forEach(["delete","get","head","options"],function(t){$u.prototype[t]=function(n,r){return this.request(oa(r||{},{method:t,url:n,data:(r||{}).data}))}});G.forEach(["post","put","patch"],function(t){function n(r){return function(a,l,u){return this.request(oa(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:l}))}}$u.prototype[t]=n(),$u.prototype[t+"Form"]=n(!0)});const Yl=$u;class Tm{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(o=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](o);r._listeners=null}),this.promise.then=o=>{let a;const l=new Promise(u=>{r.subscribe(u),a=u}).then(o);return l.cancel=function(){r.unsubscribe(a)},l},t(function(a,l,u){r.reason||(r.reason=new $s(a,l,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Tm(function(o){t=o}),cancel:t}}}const SA=Tm;function PA(e){return function(n){return e.apply(null,n)}}function CA(e){return G.isObject(e)&&e.isAxiosError===!0}const Jh={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Jh).forEach(([e,t])=>{Jh[t]=e});const EA=Jh;function x1(e){const t=new Yl(e),n=r1(Yl.prototype.request,t);return G.extend(n,Yl.prototype,t,{allOwnKeys:!0}),G.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return x1(oa(e,o))},n}const Ct=x1(Om);Ct.Axios=Yl;Ct.CanceledError=$s;Ct.CancelToken=SA;Ct.isCancel=v1;Ct.VERSION=b1;Ct.toFormData=Zc;Ct.AxiosError=je;Ct.Cancel=Ct.CanceledError;Ct.all=function(t){return Promise.all(t)};Ct.spread=PA;Ct.isAxiosError=CA;Ct.mergeConfig=oa;Ct.AxiosHeaders=Sr;Ct.formToJSON=e=>g1(G.isHTMLForm(e)?new FormData(e):e);Ct.HttpStatusCode=EA;Ct.default=Ct;const w1=Ct;function Nn(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function go(e){return!!e&&!!e[ot]}function Lr(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var o=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===BA}(e)||Array.isArray(e)||!!e[ab]||!!(!((t=e.constructor)===null||t===void 0)&&t[ab])||Rm(e)||Am(e))}function ei(e,t,n){n===void 0&&(n=!1),fa(e)===0?(n?Object.keys:Vi)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,o){return t(o,r,e)})}function fa(e){var t=e[ot];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Rm(e)?2:Am(e)?3:0}function Zi(e,t){return fa(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function OA(e,t){return fa(e)===2?e.get(t):e[t]}function k1(e,t,n){var r=fa(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function S1(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Rm(e){return NA&&e instanceof Map}function Am(e){return IA&&e instanceof Set}function Mo(e){return e.o||e.t}function zm(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=C1(e);delete t[ot];for(var n=Vi(t),r=0;r<n.length;r++){var o=n[r],a=t[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function Nm(e,t){return t===void 0&&(t=!1),Im(e)||go(e)||!Lr(e)||(fa(e)>1&&(e.set=e.add=e.clear=e.delete=LA),Object.freeze(e),t&&ei(e,function(n,r){return Nm(r,!0)},!0)),e}function LA(){Nn(2)}function Im(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function ir(e){var t=tp[e];return t||Nn(18,e),t}function TA(e,t){tp[e]||(tp[e]=t)}function Yh(){return Ls}function yf(e,t){t&&(ir("Patches"),e.u=[],e.s=[],e.v=t)}function Wu(e){Xh(e),e.p.forEach(RA),e.p=null}function Xh(e){e===Ls&&(Ls=e.l)}function eb(e){return Ls={p:[],l:Ls,h:e,m:!0,_:0}}function RA(e){var t=e[ot];t.i===0||t.i===1?t.j():t.g=!0}function bf(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||ir("ES5").S(t,e,r),r?(n[ot].P&&(Wu(t),Nn(4)),Lr(e)&&(e=Hu(t,e),t.l||Zu(t,e)),t.u&&ir("Patches").M(n[ot].t,e,t.u,t.s)):e=Hu(t,n,[]),Wu(t),t.u&&t.v(t.u,t.s),e!==P1?e:void 0}function Hu(e,t,n){if(Im(t))return t;var r=t[ot];if(!r)return ei(t,function(u,d){return tb(e,r,t,u,d,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Zu(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=r.i===4||r.i===5?r.o=zm(r.k):r.o,a=o,l=!1;r.i===3&&(a=new Set(o),o.clear(),l=!0),ei(a,function(u,d){return tb(e,r,o,u,d,n,l)}),Zu(e,o,!1),n&&e.u&&ir("Patches").N(r,n,e.u,e.s)}return r.o}function tb(e,t,n,r,o,a,l){if(go(o)){var u=Hu(e,o,a&&t&&t.i!==3&&!Zi(t.R,r)?a.concat(r):void 0);if(k1(n,r,u),!go(u))return;e.m=!1}else l&&n.add(o);if(Lr(o)&&!Im(o)){if(!e.h.D&&e._<1)return;Hu(e,o),t&&t.A.l||Zu(e,o)}}function Zu(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Nm(t,n)}function xf(e,t){var n=e[ot];return(n?Mo(n):e)[t]}function nb(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Zr(e){e.P||(e.P=!0,e.l&&Zr(e.l))}function wf(e){e.o||(e.o=zm(e.t))}function ep(e,t,n){var r=Rm(t)?ir("MapSet").F(t,n):Am(t)?ir("MapSet").T(t,n):e.O?function(o,a){var l=Array.isArray(o),u={i:l?1:0,A:a?a.A:Yh(),P:!1,I:!1,R:{},l:a,t:o,k:null,o:null,j:null,C:!1},d=u,f=Ts;l&&(d=[u],f=Va);var p=Proxy.revocable(d,f),m=p.revoke,g=p.proxy;return u.k=g,u.j=m,g}(t,n):ir("ES5").J(t,n);return(n?n.A:Yh()).p.push(r),r}function AA(e){return go(e)||Nn(22,e),function t(n){if(!Lr(n))return n;var r,o=n[ot],a=fa(n);if(o){if(!o.P&&(o.i<4||!ir("ES5").K(o)))return o.t;o.I=!0,r=rb(n,a),o.I=!1}else r=rb(n,a);return ei(r,function(l,u){o&&OA(o.t,l)===u||k1(r,l,t(u))}),a===3?new Set(r):r}(e)}function rb(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return zm(e)}function zA(){function e(a,l){var u=o[a];return u?u.enumerable=l:o[a]=u={configurable:!0,enumerable:l,get:function(){var d=this[ot];return Ts.get(d,a)},set:function(d){var f=this[ot];Ts.set(f,a,d)}},u}function t(a){for(var l=a.length-1;l>=0;l--){var u=a[l][ot];if(!u.P)switch(u.i){case 5:r(u)&&Zr(u);break;case 4:n(u)&&Zr(u)}}}function n(a){for(var l=a.t,u=a.k,d=Vi(u),f=d.length-1;f>=0;f--){var p=d[f];if(p!==ot){var m=l[p];if(m===void 0&&!Zi(l,p))return!0;var g=u[p],x=g&&g[ot];if(x?x.t!==m:!S1(g,m))return!0}}var y=!!l[ot];return d.length!==Vi(l).length+(y?0:1)}function r(a){var l=a.k;if(l.length!==a.t.length)return!0;var u=Object.getOwnPropertyDescriptor(l,l.length-1);if(u&&!u.get)return!0;for(var d=0;d<l.length;d++)if(!l.hasOwnProperty(d))return!0;return!1}var o={};TA("ES5",{J:function(a,l){var u=Array.isArray(a),d=function(p,m){if(p){for(var g=Array(m.length),x=0;x<m.length;x++)Object.defineProperty(g,""+x,e(x,!0));return g}var y=C1(m);delete y[ot];for(var w=Vi(y),P=0;P<w.length;P++){var _=w[P];y[_]=e(_,p||!!y[_].enumerable)}return Object.create(Object.getPrototypeOf(m),y)}(u,a),f={i:u?5:4,A:l?l.A:Yh(),P:!1,I:!1,R:{},l,t:a,k:d,o:null,g:!1,C:!1};return Object.defineProperty(d,ot,{value:f,writable:!0}),d},S:function(a,l,u){u?go(l)&&l[ot].A===a&&t(a.p):(a.u&&function d(f){if(f&&typeof f=="object"){var p=f[ot];if(p){var m=p.t,g=p.k,x=p.R,y=p.i;if(y===4)ei(g,function(k){k!==ot&&(m[k]!==void 0||Zi(m,k)?x[k]||d(g[k]):(x[k]=!0,Zr(p)))}),ei(m,function(k){g[k]!==void 0||Zi(g,k)||(x[k]=!1,Zr(p))});else if(y===5){if(r(p)&&(Zr(p),x.length=!0),g.length<m.length)for(var w=g.length;w<m.length;w++)x[w]=!1;else for(var P=m.length;P<g.length;P++)x[P]=!0;for(var _=Math.min(g.length,m.length),b=0;b<_;b++)g.hasOwnProperty(b)||(x[b]=!0),x[b]===void 0&&d(g[b])}}}}(a.p[0]),t(a.p))},K:function(a){return a.i===4?n(a):r(a)}})}var ob,Ls,Bm=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",NA=typeof Map<"u",IA=typeof Set<"u",ib=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",P1=Bm?Symbol.for("immer-nothing"):((ob={})["immer-nothing"]=!0,ob),ab=Bm?Symbol.for("immer-draftable"):"__$immer_draftable",ot=Bm?Symbol.for("immer-state"):"__$immer_state",BA=""+Object.prototype.constructor,Vi=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,C1=Object.getOwnPropertyDescriptors||function(e){var t={};return Vi(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},tp={},Ts={get:function(e,t){if(t===ot)return e;var n=Mo(e);if(!Zi(n,t))return function(o,a,l){var u,d=nb(a,l);return d?"value"in d?d.value:(u=d.get)===null||u===void 0?void 0:u.call(o.k):void 0}(e,n,t);var r=n[t];return e.I||!Lr(r)?r:r===xf(e.t,t)?(wf(e),e.o[t]=ep(e.A.h,r,e)):r},has:function(e,t){return t in Mo(e)},ownKeys:function(e){return Reflect.ownKeys(Mo(e))},set:function(e,t,n){var r=nb(Mo(e),t);if(r?.set)return r.set.call(e.k,n),!0;if(!e.P){var o=xf(Mo(e),t),a=o?.[ot];if(a&&a.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(S1(n,o)&&(n!==void 0||Zi(e.t,t)))return!0;wf(e),Zr(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return xf(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,wf(e),Zr(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Mo(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Nn(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Nn(12)}},Va={};ei(Ts,function(e,t){Va[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Va.deleteProperty=function(e,t){return Va.set.call(this,e,t,void 0)},Va.set=function(e,t,n){return Ts.set.call(this,e[0],t,n,e[0])};var MA=function(){function e(n){var r=this;this.O=ib,this.D=!0,this.produce=function(o,a,l){if(typeof o=="function"&&typeof a!="function"){var u=a;a=o;var d=r;return function(w){var P=this;w===void 0&&(w=u);for(var _=arguments.length,b=Array(_>1?_-1:0),k=1;k<_;k++)b[k-1]=arguments[k];return d.produce(w,function(C){var R;return(R=a).call.apply(R,[P,C].concat(b))})}}var f;if(typeof a!="function"&&Nn(6),l!==void 0&&typeof l!="function"&&Nn(7),Lr(o)){var p=eb(r),m=ep(r,o,void 0),g=!0;try{f=a(m),g=!1}finally{g?Wu(p):Xh(p)}return typeof Promise<"u"&&f instanceof Promise?f.then(function(w){return yf(p,l),bf(w,p)},function(w){throw Wu(p),w}):(yf(p,l),bf(f,p))}if(!o||typeof o!="object"){if((f=a(o))===void 0&&(f=o),f===P1&&(f=void 0),r.D&&Nm(f,!0),l){var x=[],y=[];ir("Patches").M(o,f,x,y),l(x,y)}return f}Nn(21,o)},this.produceWithPatches=function(o,a){if(typeof o=="function")return function(f){for(var p=arguments.length,m=Array(p>1?p-1:0),g=1;g<p;g++)m[g-1]=arguments[g];return r.produceWithPatches(f,function(x){return o.apply(void 0,[x].concat(m))})};var l,u,d=r.produce(o,a,function(f,p){l=f,u=p});return typeof Promise<"u"&&d instanceof Promise?d.then(function(f){return[f,l,u]}):[d,l,u]},typeof n?.useProxies=="boolean"&&this.setUseProxies(n.useProxies),typeof n?.autoFreeze=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Lr(n)||Nn(8),go(n)&&(n=AA(n));var r=eb(this),o=ep(this,n,void 0);return o[ot].C=!0,Xh(r),o},t.finishDraft=function(n,r){var o=n&&n[ot],a=o.A;return yf(a,r),bf(void 0,a)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!ib&&Nn(20),this.O=n},t.applyPatches=function(n,r){var o;for(o=r.length-1;o>=0;o--){var a=r[o];if(a.path.length===0&&a.op==="replace"){n=a.value;break}}o>-1&&(r=r.slice(o+1));var l=ir("Patches").$;return go(n)?l(n,r):this.produce(n,function(u){return l(u,r)})},e}(),ln=new MA,E1=ln.produce;ln.produceWithPatches.bind(ln);ln.setAutoFreeze.bind(ln);ln.setUseProxies.bind(ln);ln.applyPatches.bind(ln);ln.createDraft.bind(ln);ln.finishDraft.bind(ln);function sb(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function lb(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sb(Object(n),!0).forEach(function(r){jn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sb(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Dt(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var ub=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),kf=function(){return Math.random().toString(36).substring(7).split("").join(".")},Vu={INIT:"@@redux/INIT"+kf(),REPLACE:"@@redux/REPLACE"+kf(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+kf()}};function DA(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function O1(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Dt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Dt(1));return n(O1)(e,t)}if(typeof e!="function")throw new Error(Dt(2));var o=e,a=t,l=[],u=l,d=!1;function f(){u===l&&(u=l.slice())}function p(){if(d)throw new Error(Dt(3));return a}function m(w){if(typeof w!="function")throw new Error(Dt(4));if(d)throw new Error(Dt(5));var P=!0;return f(),u.push(w),function(){if(P){if(d)throw new Error(Dt(6));P=!1,f();var b=u.indexOf(w);u.splice(b,1),l=null}}}function g(w){if(!DA(w))throw new Error(Dt(7));if(typeof w.type>"u")throw new Error(Dt(8));if(d)throw new Error(Dt(9));try{d=!0,a=o(a,w)}finally{d=!1}for(var P=l=u,_=0;_<P.length;_++){var b=P[_];b()}return w}function x(w){if(typeof w!="function")throw new Error(Dt(10));o=w,g({type:Vu.REPLACE})}function y(){var w,P=m;return w={subscribe:function(b){if(typeof b!="object"||b===null)throw new Error(Dt(11));function k(){b.next&&b.next(p())}k();var C=P(k);return{unsubscribe:C}}},w[ub]=function(){return this},w}return g({type:Vu.INIT}),r={dispatch:g,subscribe:m,getState:p,replaceReducer:x},r[ub]=y,r}function jA(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Vu.INIT});if(typeof r>"u")throw new Error(Dt(12));if(typeof n(void 0,{type:Vu.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Dt(13))})}function FA(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];typeof e[o]=="function"&&(n[o]=e[o])}var a=Object.keys(n),l;try{jA(n)}catch(u){l=u}return function(d,f){if(d===void 0&&(d={}),l)throw l;for(var p=!1,m={},g=0;g<a.length;g++){var x=a[g],y=n[x],w=d[x],P=y(w,f);if(typeof P>"u")throw f&&f.type,new Error(Dt(14));m[x]=P,p=p||P!==w}return p=p||a.length!==Object.keys(d).length,p?m:d}}function qu(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,o){return function(){return r(o.apply(void 0,arguments))}})}function UA(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var o=r.apply(void 0,arguments),a=function(){throw new Error(Dt(15))},l={getState:o.getState,dispatch:function(){return a.apply(void 0,arguments)}},u=t.map(function(d){return d(l)});return a=qu.apply(void 0,u)(o.dispatch),lb(lb({},o),{},{dispatch:a})}}}function L1(e){var t=function(r){var o=r.dispatch,a=r.getState;return function(l){return function(u){return typeof u=="function"?u(o,a,e):l(u)}}};return t}var T1=L1();T1.withExtraArgument=L1;const cb=T1;var R1=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(r[a]=o[a])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),$A=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,o,a,l;return l={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function u(f){return function(p){return d([f,p])}}function d(f){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(a=f[0]&2?o.return:f[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,f[1])).done)return a;switch(o=0,a&&(f=[f[0]&2,a.value]),f[0]){case 0:case 1:a=f;break;case 4:return n.label++,{value:f[1],done:!1};case 5:n.label++,o=f[1],f=[0];continue;case 7:f=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(f[0]===6||f[0]===2)){n=0;continue}if(f[0]===3&&(!a||f[1]>a[0]&&f[1]<a[3])){n.label=f[1];break}if(f[0]===6&&n.label<a[1]){n.label=a[1],a=f;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(f);break}a[2]&&n.ops.pop(),n.trys.pop();continue}f=t.call(e,n)}catch(p){f=[6,p],o=0}finally{r=a=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}},ia=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},WA=Object.defineProperty,HA=Object.defineProperties,ZA=Object.getOwnPropertyDescriptors,db=Object.getOwnPropertySymbols,VA=Object.prototype.hasOwnProperty,qA=Object.prototype.propertyIsEnumerable,fb=function(e,t,n){return t in e?WA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},uo=function(e,t){for(var n in t||(t={}))VA.call(t,n)&&fb(e,n,t[n]);if(db)for(var r=0,o=db(t);r<o.length;r++){var n=o[r];qA.call(t,n)&&fb(e,n,t[n])}return e},Sf=function(e,t){return HA(e,ZA(t))},KA=function(e,t,n){return new Promise(function(r,o){var a=function(d){try{u(n.next(d))}catch(f){o(f)}},l=function(d){try{u(n.throw(d))}catch(f){o(f)}},u=function(d){return d.done?r(d.value):Promise.resolve(d.value).then(a,l)};u((n=n.apply(e,t)).next())})},QA=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?qu:qu.apply(null,arguments)};function GA(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var JA=function(e){R1(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,ia([void 0],n[0].concat(this)))):new(t.bind.apply(t,ia([void 0],n.concat(this))))},t}(Array),YA=function(e){R1(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,ia([void 0],n[0].concat(this)))):new(t.bind.apply(t,ia([void 0],n.concat(this))))},t}(Array);function np(e){return Lr(e)?E1(e,function(){}):e}function XA(e){return typeof e=="boolean"}function ez(){return function(t){return tz(t)}}function tz(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new JA;return n&&(XA(n)?r.push(cb):r.push(cb.withExtraArgument(n.extraArgument))),r}var nz=!0;function rz(e){var t=ez(),n=e||{},r=n.reducer,o=r===void 0?void 0:r,a=n.middleware,l=a===void 0?t():a,u=n.devTools,d=u===void 0?!0:u,f=n.preloadedState,p=f===void 0?void 0:f,m=n.enhancers,g=m===void 0?void 0:m,x;if(typeof o=="function")x=o;else if(GA(o))x=FA(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var y=l;typeof y=="function"&&(y=y(t));var w=UA.apply(void 0,y),P=qu;d&&(P=QA(uo({trace:!nz},typeof d=="object"&&d)));var _=new YA(w),b=_;Array.isArray(g)?b=ia([w],g):typeof g=="function"&&(b=g(_));var k=P.apply(void 0,b);return O1(x,p,k)}function co(e,t){function n(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(t){var a=t.apply(void 0,r);if(!a)throw new Error("prepareAction did not return an object");return uo(uo({type:e,payload:a.payload},"meta"in a&&{meta:a.meta}),"error"in a&&{error:a.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function A1(e){var t={},n=[],r,o={addCase:function(a,l){var u=typeof a=="string"?a:a.type;if(u in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[u]=l,o},addMatcher:function(a,l){return n.push({matcher:a,reducer:l}),o},addDefaultCase:function(a){return r=a,o}};return e(o),[t,n,r]}function oz(e){return typeof e=="function"}function iz(e,t,n,r){n===void 0&&(n=[]);var o=typeof t=="function"?A1(t):[t,n,r],a=o[0],l=o[1],u=o[2],d;if(oz(e))d=function(){return np(e())};else{var f=np(e);d=function(){return f}}function p(m,g){m===void 0&&(m=d());var x=ia([a[g.type]],l.filter(function(y){var w=y.matcher;return w(g)}).map(function(y){var w=y.reducer;return w}));return x.filter(function(y){return!!y}).length===0&&(x=[u]),x.reduce(function(y,w){if(w)if(go(y)){var P=y,_=w(P,g);return _===void 0?y:_}else{if(Lr(y))return E1(y,function(b){return w(b,g)});var _=w(y,g);if(_===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return _}return y},m)}return p.getInitialState=d,p}function az(e,t){return e+"/"+t}function sz(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:np(e.initialState),r=e.reducers||{},o=Object.keys(r),a={},l={},u={};o.forEach(function(p){var m=r[p],g=az(t,p),x,y;"reducer"in m?(x=m.reducer,y=m.prepare):x=m,a[p]=x,l[g]=x,u[p]=y?co(g,y):co(g)});function d(){var p=typeof e.extraReducers=="function"?A1(e.extraReducers):[e.extraReducers],m=p[0],g=m===void 0?{}:m,x=p[1],y=x===void 0?[]:x,w=p[2],P=w===void 0?void 0:w,_=uo(uo({},g),l);return iz(n,function(b){for(var k in _)b.addCase(k,_[k]);for(var C=0,R=y;C<R.length;C++){var I=R[C];b.addMatcher(I.matcher,I.reducer)}P&&b.addDefaultCase(P)})}var f;return{name:t,reducer:function(p,m){return f||(f=d()),f(p,m)},actions:u,caseReducers:a,getInitialState:function(){return f||(f=d()),f.getInitialState()}}}var lz="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",uz=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=lz[Math.random()*64|0];return t},cz=["name","message","stack","code"],Pf=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),hb=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),dz=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=cz;n<r.length;n++){var o=r[n];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}},z1=function(){function e(t,n,r){var o=co(t+"/fulfilled",function(f,p,m,g){return{payload:f,meta:Sf(uo({},g||{}),{arg:m,requestId:p,requestStatus:"fulfilled"})}}),a=co(t+"/pending",function(f,p,m){return{payload:void 0,meta:Sf(uo({},m||{}),{arg:p,requestId:f,requestStatus:"pending"})}}),l=co(t+"/rejected",function(f,p,m,g,x){return{payload:g,error:(r&&r.serializeError||dz)(f||"Rejected"),meta:Sf(uo({},x||{}),{arg:m,requestId:p,rejectedWithValue:!!g,requestStatus:"rejected",aborted:f?.name==="AbortError",condition:f?.name==="ConditionError"})}}),u=typeof AbortController<"u"?AbortController:function(){function f(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return f.prototype.abort=function(){},f}();function d(f){return function(p,m,g){var x=r?.idGenerator?r.idGenerator(f):uz(),y=new u,w;function P(b){w=b,y.abort()}var _=function(){return KA(this,null,function(){var b,k,C,R,I,N,U;return $A(this,function($){switch($.label){case 0:return $.trys.push([0,4,,5]),R=(b=r?.condition)==null?void 0:b.call(r,f,{getState:m,extra:g}),hz(R)?[4,R]:[3,2];case 1:R=$.sent(),$.label=2;case 2:if(R===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return I=new Promise(function(F,J){return y.signal.addEventListener("abort",function(){return J({name:"AbortError",message:w||"Aborted"})})}),p(a(x,f,(k=r?.getPendingMeta)==null?void 0:k.call(r,{requestId:x,arg:f},{getState:m,extra:g}))),[4,Promise.race([I,Promise.resolve(n(f,{dispatch:p,getState:m,extra:g,requestId:x,signal:y.signal,abort:P,rejectWithValue:function(F,J){return new Pf(F,J)},fulfillWithValue:function(F,J){return new hb(F,J)}})).then(function(F){if(F instanceof Pf)throw F;return F instanceof hb?o(F.payload,x,f,F.meta):o(F,x,f)})])];case 3:return C=$.sent(),[3,5];case 4:return N=$.sent(),C=N instanceof Pf?l(null,x,f,N.payload,N.meta):l(N,x,f),[3,5];case 5:return U=r&&!r.dispatchConditionRejection&&l.match(C)&&C.meta.condition,U||p(C),[2,C]}})})}();return Object.assign(_,{abort:P,requestId:x,arg:f,unwrap:function(){return _.then(fz)}})}}return Object.assign(d,{pending:a,rejected:l,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e}();function fz(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function hz(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Mm="listenerMiddleware";co(Mm+"/add");co(Mm+"/removeAll");co(Mm+"/remove");var pb;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);zA();const pz={loading:!0,brandloading:!0,evList:{evs:[],count:0},search:{name:"",sortOrder:"Name",evType:[],brands:[],seatConfiguration:[],seatMassageFirstRow:!1,seatMassageSecondRow:!1,seatVentilationFirstRow:!1,seatVentilationSecondRow:!1,allWheelDrive:!1,nightVision:!1,adaptiveSuspension:!1,airSuspension:!1,instrumentCluster:!1,headUpDisplay:!1,androidAuto:!1,appleCarPlay:!1,colors:[],fWD:!1,rWD:!1,rearAxleSteering:!1,adaptiveCruiseControl:!1,autoSteer:!1,automaticParking:!1,blindSpotMonitoring:!1,automatedLaneChange:!1,driverDrowsinessDetection:!1,driverMonitoringSystem:!1,rearCrossTrafficAlert:!1,exitWarning:!1,trafficSignRecognition:!1,efficiencyAssist:!1},searchOptions:{brands:["Audi","BMW","BYD","CUPRA","Hongqi","Hyundai","Kia","Lucid","Mercedes","Nio","Nissan","Porsche","SKODA","Tesla","Toyota","Volkswagen"],seatConfig:[],bodyTypes:["Sedan"],seatConfiguration:["5 seat"],colors:["Red"]},error:""},rp=z1("evsearch/fetchEvs",async e=>{const t=window.location.href;let n="https://api.evkx.net/api/Ev";return t.startsWith("http://localhost")&&(n="https://localhost:7033/api/Ev"),await w1.post(n,e,{headers:{"Content-Type":"application/json"}}).then(r=>r.data).catch(r=>{console.error("error",r)})}),op=z1("evsearch/fetchSearchOptions",async()=>{const e=window.location.href;let t="https://api.evkx.net/api/searchoptions";return e.startsWith("http://localhost")&&(t="https://localhost:7033/api/searchoptions"),await w1.get(t).then(n=>n.data).catch(n=>{console.error("error",n)})}),N1=sz({name:"evsearch",initialState:pz,reducers:{updateSortOrder:(e,t)=>{e.search.sortOrder=t.payload},updateEvType:(e,t)=>{const n=t.payload;e.search.evType=n},updateBrands:(e,t)=>{const n=t.payload;e.search.brands=n},updateSeatConfig:(e,t)=>{const n=t.payload;e.search.seatConfiguration=n},updateAllWheelDrive:(e,t)=>{const n=t.payload;e.search.allWheelDrive=n},updateRWD:(e,t)=>{e.search.rWD=t.payload},updateFWD:(e,t)=>{e.search.fWD=t.payload},updateRearAxleSteering:(e,t)=>{e.search.rearAxleSteering=t.payload},updateNightVision:(e,t)=>{const n=t.payload;e.search.nightVision=n},updateAdaptiveDamping:(e,t)=>{const n=t.payload;e.search.adaptiveSuspension=n},updateAdaptiveAirSuspension:(e,t)=>{e.search.airSuspension=t.payload},updateInstrumentCluster:(e,t)=>{const n=t.payload;e.search.instrumentCluster=n},updateHeadUpDisplay:(e,t)=>{const n=t.payload;e.search.headUpDisplay=n},updateAndroidAuto:(e,t)=>{const n=t.payload;e.search.androidAuto=n},updateAppleCarPlay:(e,t)=>{const n=t.payload;e.search.appleCarPlay=n},updateAdaptiveCruiseControl:(e,t)=>{e.search.adaptiveCruiseControl=t.payload},updateAutoSteer:(e,t)=>{e.search.autoSteer=t.payload},updateColors:(e,t)=>{const n=t.payload;e.search.colors=n},updateSortOrderFromParam:(e,t)=>{e.search.sortOrder=t.payload}},extraReducers:e=>{e.addCase(rp.fulfilled,(t,n)=>{const r=n.payload;t.evList=r,t.loading=!1}).addCase(rp.rejected,(t,n)=>{t.error=n.error.message}).addCase(op.fulfilled,(t,n)=>{const r=n.payload;t.searchOptions=r,t.brandloading=!1}).addCase(op.rejected,(t,n)=>{t.error=n.error.message})}}),mz=N1.reducer,{updateSortOrder:_z,updateEvType:gz,updateBrands:vz,updateSeatConfig:yz,updateAllWheelDrive:bz,updateNightVision:xz,updateAdaptiveDamping:wz,updateAdaptiveAirSuspension:kz,updateInstrumentCluster:Sz,updateHeadUpDisplay:Pz,updateAndroidAuto:Cz,updateAppleCarPlay:Ez,updateColors:Oz,updateFWD:Lz,updateRWD:Tz,updateRearAxleSteering:Rz,updateSortOrderFromParam:cN,updateAdaptiveCruiseControl:Az,updateAutoSteer:zz}=N1.actions,_r=UC,Nz=()=>aE(),Iz="_pageContainer_kmlfw_3",Bz="_exitButton_kmlfw_71",Mz={pageContainer:Iz,exitButton:Bz},Dz=({children:e})=>(KE(),sm("common"),ee.jsx("div",{className:Mz.pageContainer,children:ee.jsx("div",{children:e})})),jz="_evsearchAccordionContent_1w6bc_1",Fz="_evText_1w6bc_11",Uz="_scopeItems_1w6bc_19",$z="_line_1w6bc_27",Wz="_contentTexts_1w6bc_37",Hz="_bottomContentTexts_1w6bc_47",Zz="_thumb_1w6bc_55",Vz="_card_1w6bc_73",qz="_cards_1w6bc_81",Kz="_thumbcontainer_1w6bc_105",bi={evsearchAccordionContent:jz,evText:Fz,scopeItems:Uz,line:$z,contentTexts:Wz,bottomContentTexts:Hz,thumb:Zz,card:Vz,cards:qz,thumbcontainer:Kz},Qz=({title:e="No info",subtitle:t="No info",maxPower:n=0,topSpeedKph:r=0,infoUri:o="",netBattery:a=0,wltpConsumption:l=0,wltpRange:u=0,zeroTo100:d=0,thumbUri:f="",maxDcChargingSpeed:p=0,averageDcChargingSpeed:m=0})=>{const[g,x]=E.useState(!1);return ee.jsx("div",{children:ee.jsxs(Yw,{open:g,onClick:()=>{x(!g)},children:[ee.jsx(t1,{subtitle:t,children:e}),ee.jsx(Xw,{children:ee.jsx("div",{className:bi.evsearchAccordionContent,children:ee.jsxs("div",{className:bi.cards,children:[ee.jsx("div",{className:bi.card,children:ee.jsx("div",{className:bi.thumbcontainer,children:ee.jsx("img",{src:f,alt:e,className:bi.thumb})})}),ee.jsxs("div",{className:bi.card,children:["Read our ",ee.jsx("a",{href:o,children:"full article"}),", see all"," ",ee.jsx("a",{href:o+"specifications/",children:"specifications"}),", or see our"," ",ee.jsx("a",{href:o+"gallery/",children:"image gallery"}),".",ee.jsx("br",{}),ee.jsx("br",{}),ee.jsxs(rR,{borderStyle:"dashed",children:[ee.jsxs(Ao,{children:[ee.jsx("b",{children:To("evsearch.specwltprange")})," - ",u," km"]}),ee.jsxs(Ao,{children:[ee.jsx("b",{children:To("evsearch.specwltpconsumption")})," - ",l," kWh/100km"]}),ee.jsxs(Ao,{children:[ee.jsx("b",{children:To("evsearch.specnetbattery")})," - ",a," kWh"]}),ee.jsxs(Ao,{children:[ee.jsx("b",{children:To("evsearch.zeroto100")})," - ",d," seconds"]}),ee.jsxs(Ao,{children:[ee.jsx("b",{children:To("evsearch.topspeed")}),"- ",r," km/h"]}),ee.jsxs(Ao,{children:[ee.jsx("b",{children:To("evsearch.maxpower")})," - ",n," kW"]}),ee.jsxs(Ao,{children:[ee.jsx("b",{children:To("evsearch.chargingspeed")})," - ",p,"/",m," kW"]})]})]})]})})})]})})},Gz="_pageContent_1gqfc_1",Jz="_pageContentContainer_1gqfc_19",Yz="_resultInfo_1gqfc_33",Xz="_searchinput_1gqfc_45",eN="_searchinfo_1gqfc_53",tN="_searchinfoContent_1gqfc_63",zo={pageContent:Gz,pageContentContainer:Jz,resultInfo:Yz,searchinput:Xz,searchinfo:eN,searchinfoContent:tN},mb=()=>{const{t:e}=sm("common"),t=_r(B=>B.evsearchResult.loading),n=Nz(),r=async()=>await n(op()),o=_r(B=>B.evsearchResult.evList.evs),a=_r(B=>B.evsearchResult.evList.count),l=_r(B=>B.evsearchResult.searchOptions.bodyTypes),u=_r(B=>B.evsearchResult.searchOptions.colors),d=_r(B=>B.evsearchResult.searchOptions.seatConfiguration),f=_r(B=>B.evsearchResult.searchOptions.brands),p=_r(B=>B.evsearchResult.search),m=async B=>await n(rp(B)),g=_r(B=>B.evsearchResult.error);E.useEffect(()=>{t&&(r(),m(p))},[]),E.useEffect(()=>{t||m(p)},[p]);const x=B=>{n(_z(B))},y=B=>{n(vz(B))},w=f.map(B=>({label:B,value:B})),P=B=>{n(gz(B))},_=B=>{n(yz(B))},b=B=>{n(bz(B.target.checked))},k=B=>{n(Tz(B.target.checked))},C=B=>{n(Lz(B.target.checked))},R=B=>{n(Rz(B.target.checked))},I=B=>{n(xz(B.target.checked))},N=B=>{n(wz(B.target.checked))},U=B=>{n(kz(B.target.checked))},$=B=>{n(Sz(B.target.checked))},F=B=>{n(Pz(B.target.checked))},J=B=>{n(Ez(B.target.checked))},le=B=>{n(Az(B.target.checked))},X=B=>{n(zz(B.target.checked))},Q=B=>{n(Cz(B.target.checked))},ce=B=>{n(Oz(B))},Y=()=>g?ee.jsx(XO,{title:e("api_delegation.data_retrieval_failed"),variant:Kr.Error,forceMobileLayout:!0,children:ee.jsxs("div",{children:[e("api_delegation.error_message"),": ",g]})}):t?ee.jsx("center",{children:ee.jsx(VT,{title:"Spinner",size:"3xLarge",variant:"interaction"})}):o.map((B,M)=>ee.jsx(Qz,{title:B.name,subtitle:B.sortValue+" "+B.sortParameter,maxPower:B.maxPowerKw,topSpeedKph:B.topSpeedKph,infoUri:B.infoUri,wltpConsumption:B.wltpConsumption,wltpRange:B.wltpRange,netBattery:B.netBattery,zeroTo100:B.zeroTo100,thumbUri:B.thumbUri,averageDcChargingSpeed:B.averageDcChargingSpeed,maxDcChargingSpeed:B.maxDcChargingSpeed},M));return ee.jsx(Dz,{children:ee.jsx(nL,{children:ee.jsxs(Yd,{children:[ee.jsxs("div",{className:zo.pageContent,children:[ee.jsx(pm,{legend:"Welcome to EVKX EV Search",size:qh.Small,className:zo.searchinfo,contentClassName:zo.searchinfoContent,children:ee.jsxs("p",{children:["EVKX offers the most comprehensive search for EVs.",ee.jsx("br",{}),"You can search and sort on a whole lot of parameters. Please read our"," ",ee.jsx("a",{href:"/guides/evsearch/",children:"search guide"})]})}),ee.jsx("br",{}),ee.jsx(Vh,{label:String(e("evsearch.sortorder")),multiple:!1,onChange:x,options:[{label:String(e("evsearch.sortorderbrand")),value:"Name"},{label:String(e("evsearch.specwltprange")),value:"RangeMinimumWltp"},{label:String(e("evsearch.specwltpconsumption")),value:"WltpBasicConsumption"},{label:String(e("evsearch.sortordernetsize")),value:"NetBattery"},{label:String(e("evsearch.sortordernetsizedesc")),value:"NetBatteryDesc"},{label:String(e("evsearch.maxpowersort")),value:"PowerDesc"},{label:String(e("evsearch.topspeedsort")),value:"TopSpeedDesc"},{label:String(e("evsearch.maxdcchargingsort")),value:"MaxDCCharging"},{label:String(e("evsearch.averagechargingspeed0100")),value:"AverageChargingSpeedDesc"},{label:String(e("evsearch.averagechargingspeed10100")),value:"AverageChargingSpeed10100Desc"},{label:String(e("evsearch.averagechargingspeed1080")),value:"AverageChargingSpeed1080Desc"},{label:String(e("evsearch.sort0100kmh")),value:"ZeroTo100"},{label:String(e("evsearch.sort1000kmdrivingtime")),value:"DrivingTime1000kmChallenge"},{label:String(e("evsearch.sort1000kmaveragespeed")),value:"AverageSpeed1000kmChallengeDesc"},{label:String(e("evsearch.travelspeedwltpcyclus")),value:"TravelSpeedWltpDesc"},{label:String(e("evsearch.travelspeed120kmh")),value:"TravelSpeed120kmhDesc"},{label:String(e("evsearch.nominalvoltagesort")),value:"NominalVoltage"},{label:String(e("evsearch.trunksize")),value:"TrunkSizeDesc"},{label:String(e("evsearch.maxtrunksize")),value:"MaxTrunkSizeDesc"},{label:String(e("evsearch.maxload")),value:"MaxLoadDesc"},{label:String(e("evsearch.maxtrailer")),value:"MaxTrailerSizeDesc"},{label:String(e("evsearch.maxgroundclearance")),value:"MaxGroundClearanceDesc"},{label:String(e("evsearch.mingroundclearance")),value:"MinGroundClearance"},{label:String(e("evsearch.suspensionheightadjustment")),value:"SuspensionHeightAdjustment"}]}),ee.jsx(Vh,{label:String(e("evsearch.brandfilter")),multiple:!0,onChange:y,options:w}),ee.jsx("br",{}),ee.jsx(Kl,{"data-testid":"evsearch-evtype",variant:is.Horizontal,onChange:B=>{P(B)},compact:!0,legend:"Select body type",items:l.map(B=>({label:B,name:B,checked:p.evType===void 0||p.evType.includes(B)}))}),ee.jsx("br",{}),ee.jsx(Lw,{items:[{content:ee.jsx(Kl,{"data-testid":"evsearch-seatconfig",variant:is.Horizontal,onChange:B=>{_(B)},compact:!0,legend:"Number of seats",items:d.map(B=>({label:B,name:B,checked:p.seatConfiguration===void 0||p.seatConfiguration.includes(B)}))}),name:"Seats"},{content:ee.jsxs(Yd,{children:[ee.jsx(Wt,{checked:p.allWheelDrive,label:"All wheel drive",onChange:b,compact:!0}),ee.jsx("br",{}),ee.jsx(Wt,{checked:p.rWD,label:"RWD",onChange:k,compact:!0}),ee.jsx("br",{}),ee.jsx(Wt,{checked:p.fWD,label:"FWD",onChange:C,compact:!0}),ee.jsx("br",{}),ee.jsx(Wt,{checked:p.adaptiveSuspension,label:"Adaptive Suspension",onChange:N,compact:!0}),ee.jsx("br",{}),ee.jsx(Wt,{checked:p.airSuspension,label:"Air Suspension",onChange:U,compact:!0}),ee.jsx("br",{}),ee.jsx(Wt,{checked:p.rearAxleSteering,label:"Rear Axle Steering",onChange:R,compact:!0})]}),name:"Drivetrain"},{content:ee.jsxs(Yd,{children:[ee.jsx(Wt,{checked:p.nightVision,label:"Nightvision",onChange:I,compact:!0}),ee.jsx("br",{}),ee.jsx(Wt,{checked:p.adaptiveCruiseControl,label:"AdaptiveCruiseControl",onChange:le,compact:!0}),ee.jsx("br",{}),ee.jsx(Wt,{checked:p.autoSteer,label:"Autosteer",onChange:X,compact:!0}),ee.jsx("br",{}),"Read more about Adavanced Driver Assist Systems in our"," ",ee.jsx("a",{href:"../technology/driverassistance/",children:"technology section"})]}),name:"Driver Assistance"},{content:ee.jsx(Kl,{"data-testid":"evsearch-evtype",variant:is.Horizontal,onChange:B=>{ce(B)},compact:!0,legend:"Select paint color",items:u.map(B=>({label:B,name:B,checked:p.colors===void 0||p.colors.includes(B)}))}),name:"Exterior"},{content:ee.jsxs("div",{children:[ee.jsx(Wt,{checked:p.headUpDisplay,label:"Head Up Display",onChange:F,compact:!0}),ee.jsx("br",{}),ee.jsx(Wt,{checked:p.instrumentCluster,label:"Dedicated Instrument Cluster",onChange:$,compact:!0}),ee.jsx("br",{}),ee.jsx(Wt,{checked:p.androidAuto,label:"Android Auto Support",onChange:Q,compact:!0}),ee.jsx("br",{}),ee.jsx(Wt,{checked:p.appleCarPlay,label:"Apple Car Play Support",onChange:J,compact:!0})]}),name:"UI & Interface"}]}),ee.jsx("br",{})]}),ee.jsx("div",{className:zo.pageContentAccordionsContainer,children:ee.jsxs("div",{className:zo.apiAccordions,children:[ee.jsxs("h4",{className:zo.resultInfo,children:[a," ",e("evsearch.searchresult"),":"]}),ee.jsx("div",{className:zo.accordionScrollContainer,children:Y()})]})})]})})})},nN=d2([{path:"/",errorElement:ee.jsx(Gd,{})},{path:"evsearch",element:ee.jsx(mb,{}),errorElement:ee.jsx(Gd,{})},{path:"nb/evsearch",element:ee.jsx(mb,{}),errorElement:ee.jsx(Gd,{})}],{basename:"/"}),rN={backendApiUrl:new URL(window.location.href).origin+"/api/",defaultLocale:"no_nb"},Xl={backendApiUrl:{}.VITE_BACKEND_API_URL,defaultLocale:{}.VITE_DEFAULT_LOCALE};for(const e in Xl)Xl[e]===void 0&&delete Xl[e];const oN={...rN,...Xl};function iN(e){return oN[e]}const aN=({children:e})=>{const{i18n:t}=sm("common"),n=window.location.href;let r="en";n.includes("nb/")&&(r="no_nb");const a=`/public/localizations/${r}.json`,l=new URL(a,import.meta.url).href;return lO("Localizations",async()=>{const d=await(await fetch(l)).json();$t.addResourceBundle(t.language,"common",d)},{staleTime:1/0,suspense:!0}),ee.jsx(ee.Fragment,{children:e})};var Ku={},sN={get exports(){return Ku},set exports(e){Ku=e}};(function(e,t){(function(n,r){r(t)})(xi,function(n){function r(O,A){O.super_=A,O.prototype=Object.create(A.prototype,{constructor:{value:O,enumerable:!1,writable:!0,configurable:!0}})}function o(O,A){Object.defineProperty(this,"kind",{value:O,enumerable:!0}),A&&A.length&&Object.defineProperty(this,"path",{value:A,enumerable:!0})}function a(O,A,z){a.super_.call(this,"E",O),Object.defineProperty(this,"lhs",{value:A,enumerable:!0}),Object.defineProperty(this,"rhs",{value:z,enumerable:!0})}function l(O,A){l.super_.call(this,"N",O),Object.defineProperty(this,"rhs",{value:A,enumerable:!0})}function u(O,A){u.super_.call(this,"D",O),Object.defineProperty(this,"lhs",{value:A,enumerable:!0})}function d(O,A,z){d.super_.call(this,"A",O),Object.defineProperty(this,"index",{value:A,enumerable:!0}),Object.defineProperty(this,"item",{value:z,enumerable:!0})}function f(O,A,z){var Z=O.slice((z||A)+1||O.length);return O.length=A<0?O.length+A:A,O.push.apply(O,Z),O}function p(O){var A=typeof O>"u"?"undefined":ce(O);return A!=="object"?A:O===Math?"math":O===null?"null":Array.isArray(O)?"array":Object.prototype.toString.call(O)==="[object Date]"?"date":typeof O.toString=="function"&&/^\/.*\//.test(O.toString())?"regexp":"object"}function m(O,A,z,Z,re,ue,de){re=re||[],de=de||[];var be=re.slice(0);if(typeof ue<"u"){if(Z){if(typeof Z=="function"&&Z(be,ue))return;if((typeof Z>"u"?"undefined":ce(Z))==="object"){if(Z.prefilter&&Z.prefilter(be,ue))return;if(Z.normalize){var Je=Z.normalize(be,ue,O,A);Je&&(O=Je[0],A=Je[1])}}}be.push(ue)}p(O)==="regexp"&&p(A)==="regexp"&&(O=O.toString(),A=A.toString());var et=typeof O>"u"?"undefined":ce(O),$e=typeof A>"u"?"undefined":ce(A),Le=et!=="undefined"||de&&de[de.length-1].lhs&&de[de.length-1].lhs.hasOwnProperty(ue),tt=$e!=="undefined"||de&&de[de.length-1].rhs&&de[de.length-1].rhs.hasOwnProperty(ue);if(!Le&&tt)z(new l(be,A));else if(!tt&&Le)z(new u(be,O));else if(p(O)!==p(A))z(new a(be,O,A));else if(p(O)==="date"&&O-A!==0)z(new a(be,O,A));else if(et==="object"&&O!==null&&A!==null)if(de.filter(function(ae){return ae.lhs===O}).length)O!==A&&z(new a(be,O,A));else{if(de.push({lhs:O,rhs:A}),Array.isArray(O)){var oe;for(O.length,oe=0;oe<O.length;oe++)oe>=A.length?z(new d(be,oe,new u(void 0,O[oe]))):m(O[oe],A[oe],z,Z,be,oe,de);for(;oe<A.length;)z(new d(be,oe,new l(void 0,A[oe++])))}else{var he=Object.keys(O),K=Object.keys(A);he.forEach(function(ae,ve){var xe=K.indexOf(ae);xe>=0?(m(O[ae],A[ae],z,Z,be,ae,de),K=f(K,xe)):m(O[ae],void 0,z,Z,be,ae,de)}),K.forEach(function(ae){m(void 0,A[ae],z,Z,be,ae,de)})}de.length=de.length-1}else O!==A&&(et==="number"&&isNaN(O)&&isNaN(A)||z(new a(be,O,A)))}function g(O,A,z,Z){return Z=Z||[],m(O,A,function(re){re&&Z.push(re)},z),Z.length?Z:void 0}function x(O,A,z){if(z.path&&z.path.length){var Z,re=O[A],ue=z.path.length-1;for(Z=0;Z<ue;Z++)re=re[z.path[Z]];switch(z.kind){case"A":x(re[z.path[Z]],z.index,z.item);break;case"D":delete re[z.path[Z]];break;case"E":case"N":re[z.path[Z]]=z.rhs}}else switch(z.kind){case"A":x(O[A],z.index,z.item);break;case"D":O=f(O,A);break;case"E":case"N":O[A]=z.rhs}return O}function y(O,A,z){if(O&&A&&z&&z.kind){for(var Z=O,re=-1,ue=z.path?z.path.length-1:0;++re<ue;)typeof Z[z.path[re]]>"u"&&(Z[z.path[re]]=typeof z.path[re]=="number"?[]:{}),Z=Z[z.path[re]];switch(z.kind){case"A":x(z.path?Z[z.path[re]]:Z,z.index,z.item);break;case"D":delete Z[z.path[re]];break;case"E":case"N":Z[z.path[re]]=z.rhs}}}function w(O,A,z){if(z.path&&z.path.length){var Z,re=O[A],ue=z.path.length-1;for(Z=0;Z<ue;Z++)re=re[z.path[Z]];switch(z.kind){case"A":w(re[z.path[Z]],z.index,z.item);break;case"D":re[z.path[Z]]=z.lhs;break;case"E":re[z.path[Z]]=z.lhs;break;case"N":delete re[z.path[Z]]}}else switch(z.kind){case"A":w(O[A],z.index,z.item);break;case"D":O[A]=z.lhs;break;case"E":O[A]=z.lhs;break;case"N":O=f(O,A)}return O}function P(O,A,z){if(O&&A&&z&&z.kind){var Z,re,ue=O;for(re=z.path.length-1,Z=0;Z<re;Z++)typeof ue[z.path[Z]]>"u"&&(ue[z.path[Z]]={}),ue=ue[z.path[Z]];switch(z.kind){case"A":w(ue[z.path[Z]],z.index,z.item);break;case"D":ue[z.path[Z]]=z.lhs;break;case"E":ue[z.path[Z]]=z.lhs;break;case"N":delete ue[z.path[Z]]}}}function _(O,A,z){if(O&&A){var Z=function(re){z&&!z(O,A,re)||y(O,A,re)};m(O,A,Z)}}function b(O){return"color: "+M[O].color+"; font-weight: bold"}function k(O){var A=O.kind,z=O.path,Z=O.lhs,re=O.rhs,ue=O.index,de=O.item;switch(A){case"E":return[z.join("."),Z,"→",re];case"N":return[z.join("."),re];case"D":return[z.join(".")];case"A":return[z.join(".")+"["+ue+"]",de];default:return[]}}function C(O,A,z,Z){var re=g(O,A);try{Z?z.groupCollapsed("diff"):z.group("diff")}catch{z.log("diff")}re?re.forEach(function(ue){var de=ue.kind,be=k(ue);z.log.apply(z,["%c "+M[de].text,b(de)].concat(Y(be)))}):z.log("—— no diff ——");try{z.groupEnd()}catch{z.log("—— diff end —— ")}}function R(O,A,z,Z){switch(typeof O>"u"?"undefined":ce(O)){case"object":return typeof O[Z]=="function"?O[Z].apply(O,Y(z)):O[Z];case"function":return O(A);default:return O}}function I(O){var A=O.timestamp,z=O.duration;return function(Z,re,ue){var de=["action"];return de.push("%c"+String(Z.type)),A&&de.push("%c@ "+re),z&&de.push("%c(in "+ue.toFixed(2)+" ms)"),de.join(" ")}}function N(O,A){var z=A.logger,Z=A.actionTransformer,re=A.titleFormatter,ue=re===void 0?I(A):re,de=A.collapsed,be=A.colors,Je=A.level,et=A.diff,$e=typeof A.titleFormatter>"u";O.forEach(function(Le,tt){var oe=Le.started,he=Le.startedTime,K=Le.action,ae=Le.prevState,ve=Le.error,xe=Le.took,Se=Le.nextState,ze=O[tt+1];ze&&(Se=ze.prevState,xe=ze.started-oe);var We=Z(K),Kt=typeof de=="function"?de(function(){return Se},K,Le):de,ri=X(he),xo=be.title?"color: "+be.title(We)+";":"",kn=["color: gray; font-weight: lighter;"];kn.push(xo),A.timestamp&&kn.push("color: gray; font-weight: lighter;"),A.duration&&kn.push("color: gray; font-weight: lighter;");var $n=ue(We,ri,xe);try{Kt?be.title&&$e?z.groupCollapsed.apply(z,["%c "+$n].concat(kn)):z.groupCollapsed($n):be.title&&$e?z.group.apply(z,["%c "+$n].concat(kn)):z.group($n)}catch{z.log($n)}var lr=R(Je,We,[ae],"prevState"),wo=R(Je,We,[We],"action"),H=R(Je,We,[ve,ae],"error"),V=R(Je,We,[Se],"nextState");if(lr)if(be.prevState){var ie="color: "+be.prevState(ae)+"; font-weight: bold";z[lr]("%c prev state",ie,ae)}else z[lr]("prev state",ae);if(wo)if(be.action){var me="color: "+be.action(We)+"; font-weight: bold";z[wo]("%c action    ",me,We)}else z[wo]("action    ",We);if(ve&&H)if(be.error){var ge="color: "+be.error(ve,ae)+"; font-weight: bold;";z[H]("%c error     ",ge,ve)}else z[H]("error     ",ve);if(V)if(be.nextState){var ke="color: "+be.nextState(Se)+"; font-weight: bold";z[V]("%c next state",ke,Se)}else z[V]("next state",Se);et&&C(ae,Se,z,Kt);try{z.groupEnd()}catch{z.log("—— log end ——")}})}function U(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},A=Object.assign({},ne,O),z=A.logger,Z=A.stateTransformer,re=A.errorTransformer,ue=A.predicate,de=A.logErrors,be=A.diffPredicate;if(typeof z>"u")return function(){return function(et){return function($e){return et($e)}}};if(O.getState&&O.dispatch)return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
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
`),function(){return function(et){return function($e){return et($e)}}};var Je=[];return function(et){var $e=et.getState;return function(Le){return function(tt){if(typeof ue=="function"&&!ue($e,tt))return Le(tt);var oe={};Je.push(oe),oe.started=Q.now(),oe.startedTime=new Date,oe.prevState=Z($e()),oe.action=tt;var he=void 0;if(de)try{he=Le(tt)}catch(ae){oe.error=re(ae)}else he=Le(tt);oe.took=Q.now()-oe.started,oe.nextState=Z($e());var K=A.diff&&typeof be=="function"?be($e,tt):A.diff;if(N(Je,Object.assign({},A,{diff:K})),Je.length=0,oe.error)throw oe.error;return he}}}}var $,F,J=function(O,A){return new Array(A+1).join(O)},le=function(O,A){return J("0",A-O.toString().length)+O},X=function(O){return le(O.getHours(),2)+":"+le(O.getMinutes(),2)+":"+le(O.getSeconds(),2)+"."+le(O.getMilliseconds(),3)},Q=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance:Date,ce=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},Y=function(O){if(Array.isArray(O)){for(var A=0,z=Array(O.length);A<O.length;A++)z[A]=O[A];return z}return Array.from(O)},B=[];$=(typeof xi>"u"?"undefined":ce(xi))==="object"&&xi?xi:typeof window<"u"?window:{},F=$.DeepDiff,F&&B.push(function(){typeof F<"u"&&$.DeepDiff===g&&($.DeepDiff=F,F=void 0)}),r(a,o),r(l,o),r(u,o),r(d,o),Object.defineProperties(g,{diff:{value:g,enumerable:!0},observableDiff:{value:m,enumerable:!0},applyDiff:{value:_,enumerable:!0},applyChange:{value:y,enumerable:!0},revertChange:{value:P,enumerable:!0},isConflict:{value:function(){return typeof F<"u"},enumerable:!0},noConflict:{value:function(){return B&&(B.forEach(function(O){O()}),B=null),g},enumerable:!0}});var M={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},ne={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(O){return O},actionTransformer:function(O){return O},errorTransformer:function(O){return O},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},q=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},A=O.dispatch,z=O.getState;return typeof A=="function"||typeof z=="function"?U()({dispatch:A,getState:z}):void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`)};n.defaults=ne,n.createLogger=U,n.logger=q,n.default=q,Object.defineProperty(n,"__esModule",{value:!0})})})(sN,Ku);Ku.createLogger();const lN=rz({reducer:{evsearchResult:mz}}),uN=e=>{if(e==="no_nb")return"no_nb";if(e==="en")return"en";if(e==="no_nn")return"no_nn"};FO(C2).init({lng:uN("no_nb"),fallbackLng:iN("defaultLocale"),ns:["common"],defaultNS:"common",returnNull:!1},()=>{const e=new G2({defaultOptions:void 0});Cx(document.getElementById("root")).render(ee.jsx(E.StrictMode,{children:ee.jsx(rE,{store:lN,children:ee.jsx(nO,{client:e,children:ee.jsx(aN,{children:ee.jsx(s2,{router:nN})})})})}))});
