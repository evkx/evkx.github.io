function fC(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var Zi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function px(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Z={},hC={get exports(){return Z},set exports(e){Z=e}},Vc={},k={},pC={get exports(){return k},set exports(e){k=e}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dl=Symbol.for("react.element"),mC=Symbol.for("react.portal"),_C=Symbol.for("react.fragment"),gC=Symbol.for("react.strict_mode"),vC=Symbol.for("react.profiler"),yC=Symbol.for("react.provider"),bC=Symbol.for("react.context"),xC=Symbol.for("react.forward_ref"),wC=Symbol.for("react.suspense"),SC=Symbol.for("react.memo"),kC=Symbol.for("react.lazy"),Gg=Symbol.iterator;function PC(e){return e===null||typeof e!="object"?null:(e=Gg&&e[Gg]||e["@@iterator"],typeof e=="function"?e:null)}var mx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_x=Object.assign,gx={};function Ia(e,t,n){this.props=e,this.context=t,this.refs=gx,this.updater=n||mx}Ia.prototype.isReactComponent={};Ia.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ia.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vx(){}vx.prototype=Ia.prototype;function Pm(e,t,n){this.props=e,this.context=t,this.refs=gx,this.updater=n||mx}var Cm=Pm.prototype=new vx;Cm.constructor=Pm;_x(Cm,Ia.prototype);Cm.isPureReactComponent=!0;var Jg=Array.isArray,yx=Object.prototype.hasOwnProperty,Em={current:null},bx={key:!0,ref:!0,__self:!0,__source:!0};function xx(e,t,n){var r,o={},a=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)yx.call(t,r)&&!bx.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(u===1)o.children=n;else if(1<u){for(var c=Array(u),f=0;f<u;f++)c[f]=arguments[f+2];o.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)o[r]===void 0&&(o[r]=u[r]);return{$$typeof:dl,type:e,key:a,ref:s,props:o,_owner:Em.current}}function CC(e,t){return{$$typeof:dl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Om(e){return typeof e=="object"&&e!==null&&e.$$typeof===dl}function EC(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Yg=/\/+/g;function wf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?EC(""+e.key):t.toString(36)}function mu(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case dl:case mC:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+wf(s,0):r,Jg(o)?(n="",e!=null&&(n=e.replace(Yg,"$&/")+"/"),mu(o,t,n,"",function(f){return f})):o!=null&&(Om(o)&&(o=CC(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Yg,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Jg(e))for(var u=0;u<e.length;u++){a=e[u];var c=r+wf(a,u);s+=mu(a,t,n,c,o)}else if(c=PC(e),typeof c=="function")for(e=c.call(e),u=0;!(a=e.next()).done;)a=a.value,c=r+wf(a,u++),s+=mu(a,t,n,c,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Hl(e,t,n){if(e==null)return e;var r=[],o=0;return mu(e,r,"","",function(a){return t.call(n,a,o++)}),r}function OC(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Vt={current:null},_u={transition:null},RC={ReactCurrentDispatcher:Vt,ReactCurrentBatchConfig:_u,ReactCurrentOwner:Em};Le.Children={map:Hl,forEach:function(e,t,n){Hl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Hl(e,function(){t++}),t},toArray:function(e){return Hl(e,function(t){return t})||[]},only:function(e){if(!Om(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Le.Component=Ia;Le.Fragment=_C;Le.Profiler=vC;Le.PureComponent=Pm;Le.StrictMode=gC;Le.Suspense=wC;Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RC;Le.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_x({},e.props),o=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=Em.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)yx.call(t,c)&&!bx.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&u!==void 0?u[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){u=Array(c);for(var f=0;f<c;f++)u[f]=arguments[f+2];r.children=u}return{$$typeof:dl,type:e.type,key:o,ref:a,props:r,_owner:s}};Le.createContext=function(e){return e={$$typeof:bC,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yC,_context:e},e.Consumer=e};Le.createElement=xx;Le.createFactory=function(e){var t=xx.bind(null,e);return t.type=e,t};Le.createRef=function(){return{current:null}};Le.forwardRef=function(e){return{$$typeof:xC,render:e}};Le.isValidElement=Om;Le.lazy=function(e){return{$$typeof:kC,_payload:{_status:-1,_result:e},_init:OC}};Le.memo=function(e,t){return{$$typeof:SC,type:e,compare:t===void 0?null:t}};Le.startTransition=function(e){var t=_u.transition;_u.transition={};try{e()}finally{_u.transition=t}};Le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Le.useCallback=function(e,t){return Vt.current.useCallback(e,t)};Le.useContext=function(e){return Vt.current.useContext(e)};Le.useDebugValue=function(){};Le.useDeferredValue=function(e){return Vt.current.useDeferredValue(e)};Le.useEffect=function(e,t){return Vt.current.useEffect(e,t)};Le.useId=function(){return Vt.current.useId()};Le.useImperativeHandle=function(e,t,n){return Vt.current.useImperativeHandle(e,t,n)};Le.useInsertionEffect=function(e,t){return Vt.current.useInsertionEffect(e,t)};Le.useLayoutEffect=function(e,t){return Vt.current.useLayoutEffect(e,t)};Le.useMemo=function(e,t){return Vt.current.useMemo(e,t)};Le.useReducer=function(e,t,n){return Vt.current.useReducer(e,t,n)};Le.useRef=function(e){return Vt.current.useRef(e)};Le.useState=function(e){return Vt.current.useState(e)};Le.useSyncExternalStore=function(e,t,n){return Vt.current.useSyncExternalStore(e,t,n)};Le.useTransition=function(){return Vt.current.useTransition()};Le.version="18.2.0";(function(e){e.exports=Le})(pC);const $=px(k),Zc=fC({__proto__:null,default:$},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TC=k,LC=Symbol.for("react.element"),AC=Symbol.for("react.fragment"),IC=Object.prototype.hasOwnProperty,zC=TC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,NC={key:!0,ref:!0,__self:!0,__source:!0};function wx(e,t,n){var r,o={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)IC.call(t,r)&&!NC.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:LC,type:e,key:a,ref:s,props:o,_owner:zC.current}}Vc.Fragment=AC;Vc.jsx=wx;Vc.jsxs=wx;(function(e){e.exports=Vc})(hC);var ko={},BC={get exports(){return ko},set exports(e){ko=e}},dn={},Bh={},MC={get exports(){return Bh},set exports(e){Bh=e}},Sx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(B,Y){var A=B.length;B.push(Y);e:for(;0<A;){var O=A-1>>>1,z=B[O];if(0<o(z,Y))B[O]=Y,B[A]=z,A=O;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Y=B[0],A=B.pop();if(A!==Y){B[0]=A;e:for(var O=0,z=B.length,D=z>>>1;O<D;){var V=2*(O+1)-1,te=B[V],ie=V+1,fe=B[ie];if(0>o(te,A))ie<z&&0>o(fe,te)?(B[O]=fe,B[ie]=A,O=ie):(B[O]=te,B[V]=A,O=V);else if(ie<z&&0>o(fe,A))B[O]=fe,B[ie]=A,O=ie;else break e}}return Y}function o(B,Y){var A=B.sortIndex-Y.sortIndex;return A!==0?A:B.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,u=s.now();e.unstable_now=function(){return s.now()-u}}var c=[],f=[],p=1,h=null,_=3,v=!1,y=!1,b=!1,P=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(B){for(var Y=n(f);Y!==null;){if(Y.callback===null)r(f);else if(Y.startTime<=B)r(f),Y.sortIndex=Y.expirationTime,t(c,Y);else break;Y=n(f)}}function E(B){if(b=!1,S(B),!y)if(n(c)!==null)y=!0,q(R);else{var Y=n(f);Y!==null&&se(E,Y.startTime-B)}}function R(B,Y){y=!1,b&&(b=!1,g(j),j=-1),v=!0;var A=_;try{for(S(Y),h=n(c);h!==null&&(!(h.expirationTime>Y)||B&&!H());){var O=h.callback;if(typeof O=="function"){h.callback=null,_=h.priorityLevel;var z=O(h.expirationTime<=Y);Y=e.unstable_now(),typeof z=="function"?h.callback=z:h===n(c)&&r(c),S(Y)}else r(c);h=n(c)}if(h!==null)var D=!0;else{var V=n(f);V!==null&&se(E,V.startTime-Y),D=!1}return D}finally{h=null,_=A,v=!1}}var T=!1,N=null,j=-1,W=5,M=-1;function H(){return!(e.unstable_now()-M<W)}function G(){if(N!==null){var B=e.unstable_now();M=B;var Y=!0;try{Y=N(!0,B)}finally{Y?K():(T=!1,N=null)}}else T=!1}var K;if(typeof x=="function")K=function(){x(G)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,re=U.port2;U.port1.onmessage=G,K=function(){re.postMessage(null)}}else K=function(){P(G,0)};function q(B){N=B,T||(T=!0,K())}function se(B,Y){j=P(function(){B(e.unstable_now())},Y)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(B){B.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,q(R))},e.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<B?Math.floor(1e3/B):5},e.unstable_getCurrentPriorityLevel=function(){return _},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(B){switch(_){case 1:case 2:case 3:var Y=3;break;default:Y=_}var A=_;_=Y;try{return B()}finally{_=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var A=_;_=B;try{return Y()}finally{_=A}},e.unstable_scheduleCallback=function(B,Y,A){var O=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?O+A:O):A=O,B){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=A+z,B={id:p++,callback:Y,priorityLevel:B,startTime:A,expirationTime:z,sortIndex:-1},A>O?(B.sortIndex=A,t(f,B),n(c)===null&&B===n(f)&&(b?(g(j),j=-1):b=!0,se(E,A-O))):(B.sortIndex=z,t(c,B),y||v||(y=!0,q(R))),B},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(B){var Y=_;return function(){var A=_;_=Y;try{return B.apply(this,arguments)}finally{_=A}}}})(Sx);(function(e){e.exports=Sx})(MC);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kx=k,un=Bh;function ue(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Px=new Set,zs={};function Si(e,t){ya(e,t),ya(e+"Capture",t)}function ya(e,t){for(zs[e]=t,e=0;e<t.length;e++)Px.add(t[e])}var Nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mh=Object.prototype.hasOwnProperty,DC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xg={},ev={};function jC(e){return Mh.call(ev,e)?!0:Mh.call(Xg,e)?!1:DC.test(e)?ev[e]=!0:(Xg[e]=!0,!1)}function FC(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $C(e,t,n,r){if(t===null||typeof t>"u"||FC(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Zt(e,t,n,r,o,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var At={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){At[e]=new Zt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];At[t]=new Zt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){At[e]=new Zt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){At[e]=new Zt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){At[e]=new Zt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){At[e]=new Zt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){At[e]=new Zt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){At[e]=new Zt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){At[e]=new Zt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Rm=/[\-:]([a-z])/g;function Tm(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Rm,Tm);At[t]=new Zt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Rm,Tm);At[t]=new Zt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Rm,Tm);At[t]=new Zt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){At[e]=new Zt(e,1,!1,e.toLowerCase(),null,!1,!1)});At.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){At[e]=new Zt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Lm(e,t,n,r){var o=At.hasOwnProperty(t)?At[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($C(t,n,o,r)&&(n=null),r||o===null?jC(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Fr=kx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vl=Symbol.for("react.element"),Ki=Symbol.for("react.portal"),Qi=Symbol.for("react.fragment"),Am=Symbol.for("react.strict_mode"),Dh=Symbol.for("react.profiler"),Cx=Symbol.for("react.provider"),Ex=Symbol.for("react.context"),Im=Symbol.for("react.forward_ref"),jh=Symbol.for("react.suspense"),Fh=Symbol.for("react.suspense_list"),zm=Symbol.for("react.memo"),Qr=Symbol.for("react.lazy"),Ox=Symbol.for("react.offscreen"),tv=Symbol.iterator;function ns(e){return e===null||typeof e!="object"?null:(e=tv&&e[tv]||e["@@iterator"],typeof e=="function"?e:null)}var ut=Object.assign,Sf;function ms(e){if(Sf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sf=t&&t[1]||""}return`
`+Sf+e}var kf=!1;function Pf(e,t){if(!e||kf)return"";kf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var o=f.stack.split(`
`),a=r.stack.split(`
`),s=o.length-1,u=a.length-1;1<=s&&0<=u&&o[s]!==a[u];)u--;for(;1<=s&&0<=u;s--,u--)if(o[s]!==a[u]){if(s!==1||u!==1)do if(s--,u--,0>u||o[s]!==a[u]){var c=`
`+o[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=u);break}}}finally{kf=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ms(e):""}function UC(e){switch(e.tag){case 5:return ms(e.type);case 16:return ms("Lazy");case 13:return ms("Suspense");case 19:return ms("SuspenseList");case 0:case 2:case 15:return e=Pf(e.type,!1),e;case 11:return e=Pf(e.type.render,!1),e;case 1:return e=Pf(e.type,!0),e;default:return""}}function $h(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qi:return"Fragment";case Ki:return"Portal";case Dh:return"Profiler";case Am:return"StrictMode";case jh:return"Suspense";case Fh:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ex:return(e.displayName||"Context")+".Consumer";case Cx:return(e._context.displayName||"Context")+".Provider";case Im:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zm:return t=e.displayName||null,t!==null?t:$h(e.type)||"Memo";case Qr:t=e._payload,e=e._init;try{return $h(e(t))}catch{}}return null}function WC(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $h(t);case 8:return t===Am?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Po(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function HC(e){var t=Rx(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zl(e){e._valueTracker||(e._valueTracker=HC(e))}function Tx(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rx(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $u(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Uh(e,t){var n=t.checked;return ut({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function nv(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Po(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Lx(e,t){t=t.checked,t!=null&&Lm(e,"checked",t,!1)}function Wh(e,t){Lx(e,t);var n=Po(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hh(e,t.type,n):t.hasOwnProperty("defaultValue")&&Hh(e,t.type,Po(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function rv(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Hh(e,t,n){(t!=="number"||$u(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var _s=Array.isArray;function la(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Po(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Vh(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(ue(91));return ut({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ov(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(ue(92));if(_s(n)){if(1<n.length)throw Error(ue(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Po(n)}}function Ax(e,t){var n=Po(t.value),r=Po(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function iv(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ix(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zh(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ix(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ql,zx=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ql=ql||document.createElement("div"),ql.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ql.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ns(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},VC=["Webkit","ms","Moz","O"];Object.keys(bs).forEach(function(e){VC.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),bs[t]=bs[e]})});function Nx(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||bs.hasOwnProperty(e)&&bs[e]?(""+t).trim():t+"px"}function Bx(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Nx(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var ZC=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qh(e,t){if(t){if(ZC[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(ue(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(ue(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(ue(61))}if(t.style!=null&&typeof t.style!="object")throw Error(ue(62))}}function Kh(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qh=null;function Nm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gh=null,ua=null,ca=null;function av(e){if(e=pl(e)){if(typeof Gh!="function")throw Error(ue(280));var t=e.stateNode;t&&(t=Jc(t),Gh(e.stateNode,e.type,t))}}function Mx(e){ua?ca?ca.push(e):ca=[e]:ua=e}function Dx(){if(ua){var e=ua,t=ca;if(ca=ua=null,av(e),t)for(e=0;e<t.length;e++)av(t[e])}}function jx(e,t){return e(t)}function Fx(){}var Cf=!1;function $x(e,t,n){if(Cf)return e(t,n);Cf=!0;try{return jx(e,t,n)}finally{Cf=!1,(ua!==null||ca!==null)&&(Fx(),Dx())}}function Bs(e,t){var n=e.stateNode;if(n===null)return null;var r=Jc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(ue(231,t,typeof n));return n}var Jh=!1;if(Nr)try{var rs={};Object.defineProperty(rs,"passive",{get:function(){Jh=!0}}),window.addEventListener("test",rs,rs),window.removeEventListener("test",rs,rs)}catch{Jh=!1}function qC(e,t,n,r,o,a,s,u,c){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(p){this.onError(p)}}var xs=!1,Uu=null,Wu=!1,Yh=null,KC={onError:function(e){xs=!0,Uu=e}};function QC(e,t,n,r,o,a,s,u,c){xs=!1,Uu=null,qC.apply(KC,arguments)}function GC(e,t,n,r,o,a,s,u,c){if(QC.apply(this,arguments),xs){if(xs){var f=Uu;xs=!1,Uu=null}else throw Error(ue(198));Wu||(Wu=!0,Yh=f)}}function ki(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ux(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sv(e){if(ki(e)!==e)throw Error(ue(188))}function JC(e){var t=e.alternate;if(!t){if(t=ki(e),t===null)throw Error(ue(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return sv(o),e;if(a===r)return sv(o),t;a=a.sibling}throw Error(ue(188))}if(n.return!==r.return)n=o,r=a;else{for(var s=!1,u=o.child;u;){if(u===n){s=!0,n=o,r=a;break}if(u===r){s=!0,r=o,n=a;break}u=u.sibling}if(!s){for(u=a.child;u;){if(u===n){s=!0,n=a,r=o;break}if(u===r){s=!0,r=a,n=o;break}u=u.sibling}if(!s)throw Error(ue(189))}}if(n.alternate!==r)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?e:t}function Wx(e){return e=JC(e),e!==null?Hx(e):null}function Hx(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Hx(e);if(t!==null)return t;e=e.sibling}return null}var Vx=un.unstable_scheduleCallback,lv=un.unstable_cancelCallback,YC=un.unstable_shouldYield,XC=un.unstable_requestPaint,mt=un.unstable_now,eE=un.unstable_getCurrentPriorityLevel,Bm=un.unstable_ImmediatePriority,Zx=un.unstable_UserBlockingPriority,Hu=un.unstable_NormalPriority,tE=un.unstable_LowPriority,qx=un.unstable_IdlePriority,qc=null,cr=null;function nE(e){if(cr&&typeof cr.onCommitFiberRoot=="function")try{cr.onCommitFiberRoot(qc,e,void 0,(e.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:iE,rE=Math.log,oE=Math.LN2;function iE(e){return e>>>=0,e===0?32:31-(rE(e)/oE|0)|0}var Kl=64,Ql=4194304;function gs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vu(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,s=n&268435455;if(s!==0){var u=s&~o;u!==0?r=gs(u):(a&=s,a!==0&&(r=gs(a)))}else s=n&~o,s!==0?r=gs(s):a!==0&&(r=gs(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-jn(t),o=1<<n,r|=e[n],t&=~o;return r}function aE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-jn(a),u=1<<s,c=o[s];c===-1?(!(u&n)||u&r)&&(o[s]=aE(u,t)):c<=t&&(e.expiredLanes|=u),a&=~u}}function Xh(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Kx(){var e=Kl;return Kl<<=1,!(Kl&4194240)&&(Kl=64),e}function Ef(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-jn(t),e[t]=n}function lE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-jn(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function Mm(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-jn(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Ke=0;function Qx(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Gx,Dm,Jx,Yx,Xx,ep=!1,Gl=[],io=null,ao=null,so=null,Ms=new Map,Ds=new Map,Yr=[],uE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uv(e,t){switch(e){case"focusin":case"focusout":io=null;break;case"dragenter":case"dragleave":ao=null;break;case"mouseover":case"mouseout":so=null;break;case"pointerover":case"pointerout":Ms.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ds.delete(t.pointerId)}}function os(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=pl(t),t!==null&&Dm(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function cE(e,t,n,r,o){switch(t){case"focusin":return io=os(io,e,t,n,r,o),!0;case"dragenter":return ao=os(ao,e,t,n,r,o),!0;case"mouseover":return so=os(so,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Ms.set(a,os(Ms.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Ds.set(a,os(Ds.get(a)||null,e,t,n,r,o)),!0}return!1}function ew(e){var t=ni(e.target);if(t!==null){var n=ki(t);if(n!==null){if(t=n.tag,t===13){if(t=Ux(n),t!==null){e.blockedOn=t,Xx(e.priority,function(){Jx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=tp(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qh=r,n.target.dispatchEvent(r),Qh=null}else return t=pl(n),t!==null&&Dm(t),e.blockedOn=n,!1;t.shift()}return!0}function cv(e,t,n){gu(e)&&n.delete(t)}function dE(){ep=!1,io!==null&&gu(io)&&(io=null),ao!==null&&gu(ao)&&(ao=null),so!==null&&gu(so)&&(so=null),Ms.forEach(cv),Ds.forEach(cv)}function is(e,t){e.blockedOn===t&&(e.blockedOn=null,ep||(ep=!0,un.unstable_scheduleCallback(un.unstable_NormalPriority,dE)))}function js(e){function t(o){return is(o,e)}if(0<Gl.length){is(Gl[0],e);for(var n=1;n<Gl.length;n++){var r=Gl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(io!==null&&is(io,e),ao!==null&&is(ao,e),so!==null&&is(so,e),Ms.forEach(t),Ds.forEach(t),n=0;n<Yr.length;n++)r=Yr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yr.length&&(n=Yr[0],n.blockedOn===null);)ew(n),n.blockedOn===null&&Yr.shift()}var da=Fr.ReactCurrentBatchConfig,Zu=!0;function fE(e,t,n,r){var o=Ke,a=da.transition;da.transition=null;try{Ke=1,jm(e,t,n,r)}finally{Ke=o,da.transition=a}}function hE(e,t,n,r){var o=Ke,a=da.transition;da.transition=null;try{Ke=4,jm(e,t,n,r)}finally{Ke=o,da.transition=a}}function jm(e,t,n,r){if(Zu){var o=tp(e,t,n,r);if(o===null)Mf(e,t,r,qu,n),uv(e,r);else if(cE(o,e,t,n,r))r.stopPropagation();else if(uv(e,r),t&4&&-1<uE.indexOf(e)){for(;o!==null;){var a=pl(o);if(a!==null&&Gx(a),a=tp(e,t,n,r),a===null&&Mf(e,t,r,qu,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else Mf(e,t,r,null,n)}}var qu=null;function tp(e,t,n,r){if(qu=null,e=Nm(r),e=ni(e),e!==null)if(t=ki(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ux(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qu=e,null}function tw(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eE()){case Bm:return 1;case Zx:return 4;case Hu:case tE:return 16;case qx:return 536870912;default:return 16}default:return 16}}var no=null,Fm=null,vu=null;function nw(){if(vu)return vu;var e,t=Fm,n=t.length,r,o="value"in no?no.value:no.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[a-r];r++);return vu=o.slice(e,1<r?1-r:void 0)}function yu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jl(){return!0}function dv(){return!1}function fn(e){function t(n,r,o,a,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(a):a[u]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Jl:dv,this.isPropagationStopped=dv,this}return ut(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jl)},persist:function(){},isPersistent:Jl}),t}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$m=fn(za),hl=ut({},za,{view:0,detail:0}),pE=fn(hl),Of,Rf,as,Kc=ut({},hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Um,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==as&&(as&&e.type==="mousemove"?(Of=e.screenX-as.screenX,Rf=e.screenY-as.screenY):Rf=Of=0,as=e),Of)},movementY:function(e){return"movementY"in e?e.movementY:Rf}}),fv=fn(Kc),mE=ut({},Kc,{dataTransfer:0}),_E=fn(mE),gE=ut({},hl,{relatedTarget:0}),Tf=fn(gE),vE=ut({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),yE=fn(vE),bE=ut({},za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xE=fn(bE),wE=ut({},za,{data:0}),hv=fn(wE),SE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function CE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=PE[e])?!!t[e]:!1}function Um(){return CE}var EE=ut({},hl,{key:function(e){if(e.key){var t=SE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Um,charCode:function(e){return e.type==="keypress"?yu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),OE=fn(EE),RE=ut({},Kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pv=fn(RE),TE=ut({},hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Um}),LE=fn(TE),AE=ut({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),IE=fn(AE),zE=ut({},Kc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),NE=fn(zE),BE=[9,13,27,32],Wm=Nr&&"CompositionEvent"in window,ws=null;Nr&&"documentMode"in document&&(ws=document.documentMode);var ME=Nr&&"TextEvent"in window&&!ws,rw=Nr&&(!Wm||ws&&8<ws&&11>=ws),mv=String.fromCharCode(32),_v=!1;function ow(e,t){switch(e){case"keyup":return BE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iw(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gi=!1;function DE(e,t){switch(e){case"compositionend":return iw(t);case"keypress":return t.which!==32?null:(_v=!0,mv);case"textInput":return e=t.data,e===mv&&_v?null:e;default:return null}}function jE(e,t){if(Gi)return e==="compositionend"||!Wm&&ow(e,t)?(e=nw(),vu=Fm=no=null,Gi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rw&&t.locale!=="ko"?null:t.data;default:return null}}var FE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!FE[e.type]:t==="textarea"}function aw(e,t,n,r){Mx(r),t=Ku(t,"onChange"),0<t.length&&(n=new $m("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ss=null,Fs=null;function $E(e){gw(e,0)}function Qc(e){var t=Xi(e);if(Tx(t))return e}function UE(e,t){if(e==="change")return t}var sw=!1;if(Nr){var Lf;if(Nr){var Af="oninput"in document;if(!Af){var vv=document.createElement("div");vv.setAttribute("oninput","return;"),Af=typeof vv.oninput=="function"}Lf=Af}else Lf=!1;sw=Lf&&(!document.documentMode||9<document.documentMode)}function yv(){Ss&&(Ss.detachEvent("onpropertychange",lw),Fs=Ss=null)}function lw(e){if(e.propertyName==="value"&&Qc(Fs)){var t=[];aw(t,Fs,e,Nm(e)),$x($E,t)}}function WE(e,t,n){e==="focusin"?(yv(),Ss=t,Fs=n,Ss.attachEvent("onpropertychange",lw)):e==="focusout"&&yv()}function HE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qc(Fs)}function VE(e,t){if(e==="click")return Qc(t)}function ZE(e,t){if(e==="input"||e==="change")return Qc(t)}function qE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Wn=typeof Object.is=="function"?Object.is:qE;function $s(e,t){if(Wn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Mh.call(t,o)||!Wn(e[o],t[o]))return!1}return!0}function bv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xv(e,t){var n=bv(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bv(n)}}function uw(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?uw(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cw(){for(var e=window,t=$u();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$u(e.document)}return t}function Hm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function KE(e){var t=cw(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&uw(n.ownerDocument.documentElement,n)){if(r!==null&&Hm(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=xv(n,a);var s=xv(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var QE=Nr&&"documentMode"in document&&11>=document.documentMode,Ji=null,np=null,ks=null,rp=!1;function wv(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rp||Ji==null||Ji!==$u(r)||(r=Ji,"selectionStart"in r&&Hm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ks&&$s(ks,r)||(ks=r,r=Ku(np,"onSelect"),0<r.length&&(t=new $m("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ji)))}function Yl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yi={animationend:Yl("Animation","AnimationEnd"),animationiteration:Yl("Animation","AnimationIteration"),animationstart:Yl("Animation","AnimationStart"),transitionend:Yl("Transition","TransitionEnd")},If={},dw={};Nr&&(dw=document.createElement("div").style,"AnimationEvent"in window||(delete Yi.animationend.animation,delete Yi.animationiteration.animation,delete Yi.animationstart.animation),"TransitionEvent"in window||delete Yi.transitionend.transition);function Gc(e){if(If[e])return If[e];if(!Yi[e])return e;var t=Yi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in dw)return If[e]=t[n];return e}var fw=Gc("animationend"),hw=Gc("animationiteration"),pw=Gc("animationstart"),mw=Gc("transitionend"),_w=new Map,Sv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ao(e,t){_w.set(e,t),Si(t,[e])}for(var zf=0;zf<Sv.length;zf++){var Nf=Sv[zf],GE=Nf.toLowerCase(),JE=Nf[0].toUpperCase()+Nf.slice(1);Ao(GE,"on"+JE)}Ao(fw,"onAnimationEnd");Ao(hw,"onAnimationIteration");Ao(pw,"onAnimationStart");Ao("dblclick","onDoubleClick");Ao("focusin","onFocus");Ao("focusout","onBlur");Ao(mw,"onTransitionEnd");ya("onMouseEnter",["mouseout","mouseover"]);ya("onMouseLeave",["mouseout","mouseover"]);ya("onPointerEnter",["pointerout","pointerover"]);ya("onPointerLeave",["pointerout","pointerover"]);Si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Si("onBeforeInput",["compositionend","keypress","textInput","paste"]);Si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YE=new Set("cancel close invalid load scroll toggle".split(" ").concat(vs));function kv(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,GC(r,t,void 0,e),e.currentTarget=null}function gw(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var s=r.length-1;0<=s;s--){var u=r[s],c=u.instance,f=u.currentTarget;if(u=u.listener,c!==a&&o.isPropagationStopped())break e;kv(o,u,f),a=c}else for(s=0;s<r.length;s++){if(u=r[s],c=u.instance,f=u.currentTarget,u=u.listener,c!==a&&o.isPropagationStopped())break e;kv(o,u,f),a=c}}}if(Wu)throw e=Yh,Wu=!1,Yh=null,e}function nt(e,t){var n=t[lp];n===void 0&&(n=t[lp]=new Set);var r=e+"__bubble";n.has(r)||(vw(t,e,2,!1),n.add(r))}function Bf(e,t,n){var r=0;t&&(r|=4),vw(n,e,r,t)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Us(e){if(!e[Xl]){e[Xl]=!0,Px.forEach(function(n){n!=="selectionchange"&&(YE.has(n)||Bf(n,!1,e),Bf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xl]||(t[Xl]=!0,Bf("selectionchange",!1,t))}}function vw(e,t,n,r){switch(tw(t)){case 1:var o=fE;break;case 4:o=hE;break;default:o=jm}n=o.bind(null,t,n,e),o=void 0,!Jh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Mf(e,t,n,r,o){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;s=s.return}for(;u!==null;){if(s=ni(u),s===null)return;if(c=s.tag,c===5||c===6){r=a=s;continue e}u=u.parentNode}}r=r.return}$x(function(){var f=a,p=Nm(n),h=[];e:{var _=_w.get(e);if(_!==void 0){var v=$m,y=e;switch(e){case"keypress":if(yu(n)===0)break e;case"keydown":case"keyup":v=OE;break;case"focusin":y="focus",v=Tf;break;case"focusout":y="blur",v=Tf;break;case"beforeblur":case"afterblur":v=Tf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=fv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=_E;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=LE;break;case fw:case hw:case pw:v=yE;break;case mw:v=IE;break;case"scroll":v=pE;break;case"wheel":v=NE;break;case"copy":case"cut":case"paste":v=xE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=pv}var b=(t&4)!==0,P=!b&&e==="scroll",g=b?_!==null?_+"Capture":null:_;b=[];for(var x=f,S;x!==null;){S=x;var E=S.stateNode;if(S.tag===5&&E!==null&&(S=E,g!==null&&(E=Bs(x,g),E!=null&&b.push(Ws(x,E,S)))),P)break;x=x.return}0<b.length&&(_=new v(_,y,null,n,p),h.push({event:_,listeners:b}))}}if(!(t&7)){e:{if(_=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",_&&n!==Qh&&(y=n.relatedTarget||n.fromElement)&&(ni(y)||y[Br]))break e;if((v||_)&&(_=p.window===p?p:(_=p.ownerDocument)?_.defaultView||_.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=f,y=y?ni(y):null,y!==null&&(P=ki(y),y!==P||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=f),v!==y)){if(b=fv,E="onMouseLeave",g="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(b=pv,E="onPointerLeave",g="onPointerEnter",x="pointer"),P=v==null?_:Xi(v),S=y==null?_:Xi(y),_=new b(E,x+"leave",v,n,p),_.target=P,_.relatedTarget=S,E=null,ni(p)===f&&(b=new b(g,x+"enter",y,n,p),b.target=S,b.relatedTarget=P,E=b),P=E,v&&y)t:{for(b=v,g=y,x=0,S=b;S;S=ji(S))x++;for(S=0,E=g;E;E=ji(E))S++;for(;0<x-S;)b=ji(b),x--;for(;0<S-x;)g=ji(g),S--;for(;x--;){if(b===g||g!==null&&b===g.alternate)break t;b=ji(b),g=ji(g)}b=null}else b=null;v!==null&&Pv(h,_,v,b,!1),y!==null&&P!==null&&Pv(h,P,y,b,!0)}}e:{if(_=f?Xi(f):window,v=_.nodeName&&_.nodeName.toLowerCase(),v==="select"||v==="input"&&_.type==="file")var R=UE;else if(gv(_))if(sw)R=ZE;else{R=HE;var T=WE}else(v=_.nodeName)&&v.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(R=VE);if(R&&(R=R(e,f))){aw(h,R,n,p);break e}T&&T(e,_,f),e==="focusout"&&(T=_._wrapperState)&&T.controlled&&_.type==="number"&&Hh(_,"number",_.value)}switch(T=f?Xi(f):window,e){case"focusin":(gv(T)||T.contentEditable==="true")&&(Ji=T,np=f,ks=null);break;case"focusout":ks=np=Ji=null;break;case"mousedown":rp=!0;break;case"contextmenu":case"mouseup":case"dragend":rp=!1,wv(h,n,p);break;case"selectionchange":if(QE)break;case"keydown":case"keyup":wv(h,n,p)}var N;if(Wm)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Gi?ow(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(rw&&n.locale!=="ko"&&(Gi||j!=="onCompositionStart"?j==="onCompositionEnd"&&Gi&&(N=nw()):(no=p,Fm="value"in no?no.value:no.textContent,Gi=!0)),T=Ku(f,j),0<T.length&&(j=new hv(j,e,null,n,p),h.push({event:j,listeners:T}),N?j.data=N:(N=iw(n),N!==null&&(j.data=N)))),(N=ME?DE(e,n):jE(e,n))&&(f=Ku(f,"onBeforeInput"),0<f.length&&(p=new hv("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:f}),p.data=N))}gw(h,t)})}function Ws(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ku(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=Bs(e,n),a!=null&&r.unshift(Ws(e,a,o)),a=Bs(e,t),a!=null&&r.push(Ws(e,a,o))),e=e.return}return r}function ji(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Pv(e,t,n,r,o){for(var a=t._reactName,s=[];n!==null&&n!==r;){var u=n,c=u.alternate,f=u.stateNode;if(c!==null&&c===r)break;u.tag===5&&f!==null&&(u=f,o?(c=Bs(n,a),c!=null&&s.unshift(Ws(n,c,u))):o||(c=Bs(n,a),c!=null&&s.push(Ws(n,c,u)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var XE=/\r\n?/g,eO=/\u0000|\uFFFD/g;function Cv(e){return(typeof e=="string"?e:""+e).replace(XE,`
`).replace(eO,"")}function eu(e,t,n){if(t=Cv(t),Cv(e)!==t&&n)throw Error(ue(425))}function Qu(){}var op=null,ip=null;function ap(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sp=typeof setTimeout=="function"?setTimeout:void 0,tO=typeof clearTimeout=="function"?clearTimeout:void 0,Ev=typeof Promise=="function"?Promise:void 0,nO=typeof queueMicrotask=="function"?queueMicrotask:typeof Ev<"u"?function(e){return Ev.resolve(null).then(e).catch(rO)}:sp;function rO(e){setTimeout(function(){throw e})}function Df(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),js(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);js(t)}function lo(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ov(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Na=Math.random().toString(36).slice(2),sr="__reactFiber$"+Na,Hs="__reactProps$"+Na,Br="__reactContainer$"+Na,lp="__reactEvents$"+Na,oO="__reactListeners$"+Na,iO="__reactHandles$"+Na;function ni(e){var t=e[sr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Br]||n[sr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ov(e);e!==null;){if(n=e[sr])return n;e=Ov(e)}return t}e=n,n=e.parentNode}return null}function pl(e){return e=e[sr]||e[Br],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(ue(33))}function Jc(e){return e[Hs]||null}var up=[],ea=-1;function Io(e){return{current:e}}function rt(e){0>ea||(e.current=up[ea],up[ea]=null,ea--)}function et(e,t){ea++,up[ea]=e.current,e.current=t}var Co={},$t=Io(Co),Jt=Io(!1),hi=Co;function ba(e,t){var n=e.type.contextTypes;if(!n)return Co;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Yt(e){return e=e.childContextTypes,e!=null}function Gu(){rt(Jt),rt($t)}function Rv(e,t,n){if($t.current!==Co)throw Error(ue(168));et($t,t),et(Jt,n)}function yw(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(ue(108,WC(e)||"Unknown",o));return ut({},n,r)}function Ju(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Co,hi=$t.current,et($t,e),et(Jt,Jt.current),!0}function Tv(e,t,n){var r=e.stateNode;if(!r)throw Error(ue(169));n?(e=yw(e,t,hi),r.__reactInternalMemoizedMergedChildContext=e,rt(Jt),rt($t),et($t,e)):rt(Jt),et(Jt,n)}var Cr=null,Yc=!1,jf=!1;function bw(e){Cr===null?Cr=[e]:Cr.push(e)}function aO(e){Yc=!0,bw(e)}function zo(){if(!jf&&Cr!==null){jf=!0;var e=0,t=Ke;try{var n=Cr;for(Ke=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Cr=null,Yc=!1}catch(o){throw Cr!==null&&(Cr=Cr.slice(e+1)),Vx(Bm,zo),o}finally{Ke=t,jf=!1}}return null}var ta=[],na=0,Yu=null,Xu=0,vn=[],yn=0,pi=null,Rr=1,Tr="";function Jo(e,t){ta[na++]=Xu,ta[na++]=Yu,Yu=e,Xu=t}function xw(e,t,n){vn[yn++]=Rr,vn[yn++]=Tr,vn[yn++]=pi,pi=e;var r=Rr;e=Tr;var o=32-jn(r)-1;r&=~(1<<o),n+=1;var a=32-jn(t)+o;if(30<a){var s=o-o%5;a=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Rr=1<<32-jn(t)+o|n<<o|r,Tr=a+e}else Rr=1<<a|n<<o|r,Tr=e}function Vm(e){e.return!==null&&(Jo(e,1),xw(e,1,0))}function Zm(e){for(;e===Yu;)Yu=ta[--na],ta[na]=null,Xu=ta[--na],ta[na]=null;for(;e===pi;)pi=vn[--yn],vn[yn]=null,Tr=vn[--yn],vn[yn]=null,Rr=vn[--yn],vn[yn]=null}var sn=null,nn=null,it=!1,Mn=null;function ww(e,t){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lv(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,sn=e,nn=lo(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,sn=e,nn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=pi!==null?{id:Rr,overflow:Tr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,sn=e,nn=null,!0):!1;default:return!1}}function cp(e){return(e.mode&1)!==0&&(e.flags&128)===0}function dp(e){if(it){var t=nn;if(t){var n=t;if(!Lv(e,t)){if(cp(e))throw Error(ue(418));t=lo(n.nextSibling);var r=sn;t&&Lv(e,t)?ww(r,n):(e.flags=e.flags&-4097|2,it=!1,sn=e)}}else{if(cp(e))throw Error(ue(418));e.flags=e.flags&-4097|2,it=!1,sn=e}}}function Av(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;sn=e}function tu(e){if(e!==sn)return!1;if(!it)return Av(e),it=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ap(e.type,e.memoizedProps)),t&&(t=nn)){if(cp(e))throw Sw(),Error(ue(418));for(;t;)ww(e,t),t=lo(t.nextSibling)}if(Av(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(ue(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nn=lo(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nn=null}}else nn=sn?lo(e.stateNode.nextSibling):null;return!0}function Sw(){for(var e=nn;e;)e=lo(e.nextSibling)}function xa(){nn=sn=null,it=!1}function qm(e){Mn===null?Mn=[e]:Mn.push(e)}var sO=Fr.ReactCurrentBatchConfig;function zn(e,t){if(e&&e.defaultProps){t=ut({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ec=Io(null),tc=null,ra=null,Km=null;function Qm(){Km=ra=tc=null}function Gm(e){var t=ec.current;rt(ec),e._currentValue=t}function fp(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fa(e,t){tc=e,Km=ra=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Gt=!0),e.firstContext=null)}function kn(e){var t=e._currentValue;if(Km!==e)if(e={context:e,memoizedValue:t,next:null},ra===null){if(tc===null)throw Error(ue(308));ra=e,tc.dependencies={lanes:0,firstContext:e}}else ra=ra.next=e;return t}var ri=null;function Jm(e){ri===null?ri=[e]:ri.push(e)}function kw(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Jm(t)):(n.next=o.next,o.next=n),t.interleaved=n,Mr(e,r)}function Mr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Gr=!1;function Ym(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pw(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ar(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function uo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Fe&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Mr(e,n)}return o=r.interleaved,o===null?(t.next=t,Jm(r)):(t.next=o.next,o.next=t),r.interleaved=t,Mr(e,n)}function bu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Mm(e,n)}}function Iv(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function nc(e,t,n,r){var o=e.updateQueue;Gr=!1;var a=o.firstBaseUpdate,s=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var c=u,f=c.next;c.next=null,s===null?a=f:s.next=f,s=c;var p=e.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==s&&(u===null?p.firstBaseUpdate=f:u.next=f,p.lastBaseUpdate=c))}if(a!==null){var h=o.baseState;s=0,p=f=c=null,u=a;do{var _=u.lane,v=u.eventTime;if((r&_)===_){p!==null&&(p=p.next={eventTime:v,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var y=e,b=u;switch(_=t,v=n,b.tag){case 1:if(y=b.payload,typeof y=="function"){h=y.call(v,h,_);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,_=typeof y=="function"?y.call(v,h,_):y,_==null)break e;h=ut({},h,_);break e;case 2:Gr=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,_=o.effects,_===null?o.effects=[u]:_.push(u))}else v={eventTime:v,lane:_,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(f=p=v,c=h):p=p.next=v,s|=_;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;_=u,u=_.next,_.next=null,o.lastBaseUpdate=_,o.shared.pending=null}}while(1);if(p===null&&(c=h),o.baseState=c,o.firstBaseUpdate=f,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);_i|=s,e.lanes=s,e.memoizedState=h}}function zv(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(ue(191,o));o.call(r)}}}var Cw=new kx.Component().refs;function hp(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ut({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xc={isMounted:function(e){return(e=e._reactInternals)?ki(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ht(),o=fo(e),a=Ar(r,o);a.payload=t,n!=null&&(a.callback=n),t=uo(e,a,o),t!==null&&(Fn(t,e,o,r),bu(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ht(),o=fo(e),a=Ar(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=uo(e,a,o),t!==null&&(Fn(t,e,o,r),bu(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ht(),r=fo(e),o=Ar(n,r);o.tag=2,t!=null&&(o.callback=t),t=uo(e,o,r),t!==null&&(Fn(t,e,r,n),bu(t,e,r))}};function Nv(e,t,n,r,o,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,s):t.prototype&&t.prototype.isPureReactComponent?!$s(n,r)||!$s(o,a):!0}function Ew(e,t,n){var r=!1,o=Co,a=t.contextType;return typeof a=="object"&&a!==null?a=kn(a):(o=Yt(t)?hi:$t.current,r=t.contextTypes,a=(r=r!=null)?ba(e,o):Co),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Bv(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Xc.enqueueReplaceState(t,t.state,null)}function pp(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Cw,Ym(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=kn(a):(a=Yt(t)?hi:$t.current,o.context=ba(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(hp(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Xc.enqueueReplaceState(o,o.state,null),nc(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ss(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var r=n.stateNode}if(!r)throw Error(ue(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var u=o.refs;u===Cw&&(u=o.refs={}),s===null?delete u[a]:u[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,e))}return e}function nu(e,t){throw e=Object.prototype.toString.call(t),Error(ue(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Mv(e){var t=e._init;return t(e._payload)}function Ow(e){function t(g,x){if(e){var S=g.deletions;S===null?(g.deletions=[x],g.flags|=16):S.push(x)}}function n(g,x){if(!e)return null;for(;x!==null;)t(g,x),x=x.sibling;return null}function r(g,x){for(g=new Map;x!==null;)x.key!==null?g.set(x.key,x):g.set(x.index,x),x=x.sibling;return g}function o(g,x){return g=ho(g,x),g.index=0,g.sibling=null,g}function a(g,x,S){return g.index=S,e?(S=g.alternate,S!==null?(S=S.index,S<x?(g.flags|=2,x):S):(g.flags|=2,x)):(g.flags|=1048576,x)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function u(g,x,S,E){return x===null||x.tag!==6?(x=Zf(S,g.mode,E),x.return=g,x):(x=o(x,S),x.return=g,x)}function c(g,x,S,E){var R=S.type;return R===Qi?p(g,x,S.props.children,E,S.key):x!==null&&(x.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Qr&&Mv(R)===x.type)?(E=o(x,S.props),E.ref=ss(g,x,S),E.return=g,E):(E=Cu(S.type,S.key,S.props,null,g.mode,E),E.ref=ss(g,x,S),E.return=g,E)}function f(g,x,S,E){return x===null||x.tag!==4||x.stateNode.containerInfo!==S.containerInfo||x.stateNode.implementation!==S.implementation?(x=qf(S,g.mode,E),x.return=g,x):(x=o(x,S.children||[]),x.return=g,x)}function p(g,x,S,E,R){return x===null||x.tag!==7?(x=ci(S,g.mode,E,R),x.return=g,x):(x=o(x,S),x.return=g,x)}function h(g,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Zf(""+x,g.mode,S),x.return=g,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Vl:return S=Cu(x.type,x.key,x.props,null,g.mode,S),S.ref=ss(g,null,x),S.return=g,S;case Ki:return x=qf(x,g.mode,S),x.return=g,x;case Qr:var E=x._init;return h(g,E(x._payload),S)}if(_s(x)||ns(x))return x=ci(x,g.mode,S,null),x.return=g,x;nu(g,x)}return null}function _(g,x,S,E){var R=x!==null?x.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return R!==null?null:u(g,x,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Vl:return S.key===R?c(g,x,S,E):null;case Ki:return S.key===R?f(g,x,S,E):null;case Qr:return R=S._init,_(g,x,R(S._payload),E)}if(_s(S)||ns(S))return R!==null?null:p(g,x,S,E,null);nu(g,S)}return null}function v(g,x,S,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(S)||null,u(x,g,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Vl:return g=g.get(E.key===null?S:E.key)||null,c(x,g,E,R);case Ki:return g=g.get(E.key===null?S:E.key)||null,f(x,g,E,R);case Qr:var T=E._init;return v(g,x,S,T(E._payload),R)}if(_s(E)||ns(E))return g=g.get(S)||null,p(x,g,E,R,null);nu(x,E)}return null}function y(g,x,S,E){for(var R=null,T=null,N=x,j=x=0,W=null;N!==null&&j<S.length;j++){N.index>j?(W=N,N=null):W=N.sibling;var M=_(g,N,S[j],E);if(M===null){N===null&&(N=W);break}e&&N&&M.alternate===null&&t(g,N),x=a(M,x,j),T===null?R=M:T.sibling=M,T=M,N=W}if(j===S.length)return n(g,N),it&&Jo(g,j),R;if(N===null){for(;j<S.length;j++)N=h(g,S[j],E),N!==null&&(x=a(N,x,j),T===null?R=N:T.sibling=N,T=N);return it&&Jo(g,j),R}for(N=r(g,N);j<S.length;j++)W=v(N,g,j,S[j],E),W!==null&&(e&&W.alternate!==null&&N.delete(W.key===null?j:W.key),x=a(W,x,j),T===null?R=W:T.sibling=W,T=W);return e&&N.forEach(function(H){return t(g,H)}),it&&Jo(g,j),R}function b(g,x,S,E){var R=ns(S);if(typeof R!="function")throw Error(ue(150));if(S=R.call(S),S==null)throw Error(ue(151));for(var T=R=null,N=x,j=x=0,W=null,M=S.next();N!==null&&!M.done;j++,M=S.next()){N.index>j?(W=N,N=null):W=N.sibling;var H=_(g,N,M.value,E);if(H===null){N===null&&(N=W);break}e&&N&&H.alternate===null&&t(g,N),x=a(H,x,j),T===null?R=H:T.sibling=H,T=H,N=W}if(M.done)return n(g,N),it&&Jo(g,j),R;if(N===null){for(;!M.done;j++,M=S.next())M=h(g,M.value,E),M!==null&&(x=a(M,x,j),T===null?R=M:T.sibling=M,T=M);return it&&Jo(g,j),R}for(N=r(g,N);!M.done;j++,M=S.next())M=v(N,g,j,M.value,E),M!==null&&(e&&M.alternate!==null&&N.delete(M.key===null?j:M.key),x=a(M,x,j),T===null?R=M:T.sibling=M,T=M);return e&&N.forEach(function(G){return t(g,G)}),it&&Jo(g,j),R}function P(g,x,S,E){if(typeof S=="object"&&S!==null&&S.type===Qi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Vl:e:{for(var R=S.key,T=x;T!==null;){if(T.key===R){if(R=S.type,R===Qi){if(T.tag===7){n(g,T.sibling),x=o(T,S.props.children),x.return=g,g=x;break e}}else if(T.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Qr&&Mv(R)===T.type){n(g,T.sibling),x=o(T,S.props),x.ref=ss(g,T,S),x.return=g,g=x;break e}n(g,T);break}else t(g,T);T=T.sibling}S.type===Qi?(x=ci(S.props.children,g.mode,E,S.key),x.return=g,g=x):(E=Cu(S.type,S.key,S.props,null,g.mode,E),E.ref=ss(g,x,S),E.return=g,g=E)}return s(g);case Ki:e:{for(T=S.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===S.containerInfo&&x.stateNode.implementation===S.implementation){n(g,x.sibling),x=o(x,S.children||[]),x.return=g,g=x;break e}else{n(g,x);break}else t(g,x);x=x.sibling}x=qf(S,g.mode,E),x.return=g,g=x}return s(g);case Qr:return T=S._init,P(g,x,T(S._payload),E)}if(_s(S))return y(g,x,S,E);if(ns(S))return b(g,x,S,E);nu(g,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,x!==null&&x.tag===6?(n(g,x.sibling),x=o(x,S),x.return=g,g=x):(n(g,x),x=Zf(S,g.mode,E),x.return=g,g=x),s(g)):n(g,x)}return P}var wa=Ow(!0),Rw=Ow(!1),ml={},dr=Io(ml),Vs=Io(ml),Zs=Io(ml);function oi(e){if(e===ml)throw Error(ue(174));return e}function Xm(e,t){switch(et(Zs,t),et(Vs,e),et(dr,ml),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zh(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zh(t,e)}rt(dr),et(dr,t)}function Sa(){rt(dr),rt(Vs),rt(Zs)}function Tw(e){oi(Zs.current);var t=oi(dr.current),n=Zh(t,e.type);t!==n&&(et(Vs,e),et(dr,n))}function e_(e){Vs.current===e&&(rt(dr),rt(Vs))}var st=Io(0);function rc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ff=[];function t_(){for(var e=0;e<Ff.length;e++)Ff[e]._workInProgressVersionPrimary=null;Ff.length=0}var xu=Fr.ReactCurrentDispatcher,$f=Fr.ReactCurrentBatchConfig,mi=0,lt=null,St=null,Ct=null,oc=!1,Ps=!1,qs=0,lO=0;function zt(){throw Error(ue(321))}function n_(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Wn(e[n],t[n]))return!1;return!0}function r_(e,t,n,r,o,a){if(mi=a,lt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xu.current=e===null||e.memoizedState===null?fO:hO,e=n(r,o),Ps){a=0;do{if(Ps=!1,qs=0,25<=a)throw Error(ue(301));a+=1,Ct=St=null,t.updateQueue=null,xu.current=pO,e=n(r,o)}while(Ps)}if(xu.current=ic,t=St!==null&&St.next!==null,mi=0,Ct=St=lt=null,oc=!1,t)throw Error(ue(300));return e}function o_(){var e=qs!==0;return qs=0,e}function rr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?lt.memoizedState=Ct=e:Ct=Ct.next=e,Ct}function Pn(){if(St===null){var e=lt.alternate;e=e!==null?e.memoizedState:null}else e=St.next;var t=Ct===null?lt.memoizedState:Ct.next;if(t!==null)Ct=t,St=e;else{if(e===null)throw Error(ue(310));St=e,e={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Ct===null?lt.memoizedState=Ct=e:Ct=Ct.next=e}return Ct}function Ks(e,t){return typeof t=="function"?t(e):t}function Uf(e){var t=Pn(),n=t.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=e;var r=St,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var s=o.next;o.next=a.next,a.next=s}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var u=s=null,c=null,f=a;do{var p=f.lane;if((mi&p)===p)c!==null&&(c=c.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var h={lane:p,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};c===null?(u=c=h,s=r):c=c.next=h,lt.lanes|=p,_i|=p}f=f.next}while(f!==null&&f!==a);c===null?s=r:c.next=u,Wn(r,t.memoizedState)||(Gt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,lt.lanes|=a,_i|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wf(e){var t=Pn(),n=t.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do a=e(a,s.action),s=s.next;while(s!==o);Wn(a,t.memoizedState)||(Gt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Lw(){}function Aw(e,t){var n=lt,r=Pn(),o=t(),a=!Wn(r.memoizedState,o);if(a&&(r.memoizedState=o,Gt=!0),r=r.queue,i_(Nw.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,Qs(9,zw.bind(null,n,r,o,t),void 0,null),Et===null)throw Error(ue(349));mi&30||Iw(n,t,o)}return o}function Iw(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=lt.updateQueue,t===null?(t={lastEffect:null,stores:null},lt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zw(e,t,n,r){t.value=n,t.getSnapshot=r,Bw(t)&&Mw(e)}function Nw(e,t,n){return n(function(){Bw(t)&&Mw(e)})}function Bw(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Wn(e,n)}catch{return!0}}function Mw(e){var t=Mr(e,1);t!==null&&Fn(t,e,1,-1)}function Dv(e){var t=rr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ks,lastRenderedState:e},t.queue=e,e=e.dispatch=dO.bind(null,lt,e),[t.memoizedState,e]}function Qs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=lt.updateQueue,t===null?(t={lastEffect:null,stores:null},lt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Dw(){return Pn().memoizedState}function wu(e,t,n,r){var o=rr();lt.flags|=e,o.memoizedState=Qs(1|t,n,void 0,r===void 0?null:r)}function ed(e,t,n,r){var o=Pn();r=r===void 0?null:r;var a=void 0;if(St!==null){var s=St.memoizedState;if(a=s.destroy,r!==null&&n_(r,s.deps)){o.memoizedState=Qs(t,n,a,r);return}}lt.flags|=e,o.memoizedState=Qs(1|t,n,a,r)}function jv(e,t){return wu(8390656,8,e,t)}function i_(e,t){return ed(2048,8,e,t)}function jw(e,t){return ed(4,2,e,t)}function Fw(e,t){return ed(4,4,e,t)}function $w(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Uw(e,t,n){return n=n!=null?n.concat([e]):null,ed(4,4,$w.bind(null,t,e),n)}function a_(){}function Ww(e,t){var n=Pn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&n_(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hw(e,t){var n=Pn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&n_(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Vw(e,t,n){return mi&21?(Wn(n,t)||(n=Kx(),lt.lanes|=n,_i|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Gt=!0),e.memoizedState=n)}function uO(e,t){var n=Ke;Ke=n!==0&&4>n?n:4,e(!0);var r=$f.transition;$f.transition={};try{e(!1),t()}finally{Ke=n,$f.transition=r}}function Zw(){return Pn().memoizedState}function cO(e,t,n){var r=fo(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qw(e))Kw(t,n);else if(n=kw(e,t,n,r),n!==null){var o=Ht();Fn(n,e,r,o),Qw(n,t,r)}}function dO(e,t,n){var r=fo(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qw(e))Kw(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,u=a(s,n);if(o.hasEagerState=!0,o.eagerState=u,Wn(u,s)){var c=t.interleaved;c===null?(o.next=o,Jm(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=kw(e,t,o,r),n!==null&&(o=Ht(),Fn(n,e,r,o),Qw(n,t,r))}}function qw(e){var t=e.alternate;return e===lt||t!==null&&t===lt}function Kw(e,t){Ps=oc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qw(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Mm(e,n)}}var ic={readContext:kn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},fO={readContext:kn,useCallback:function(e,t){return rr().memoizedState=[e,t===void 0?null:t],e},useContext:kn,useEffect:jv,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wu(4194308,4,$w.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wu(4194308,4,e,t)},useInsertionEffect:function(e,t){return wu(4,2,e,t)},useMemo:function(e,t){var n=rr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=rr();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cO.bind(null,lt,e),[r.memoizedState,e]},useRef:function(e){var t=rr();return e={current:e},t.memoizedState=e},useState:Dv,useDebugValue:a_,useDeferredValue:function(e){return rr().memoizedState=e},useTransition:function(){var e=Dv(!1),t=e[0];return e=uO.bind(null,e[1]),rr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=lt,o=rr();if(it){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=t(),Et===null)throw Error(ue(349));mi&30||Iw(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,jv(Nw.bind(null,r,a,e),[e]),r.flags|=2048,Qs(9,zw.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=rr(),t=Et.identifierPrefix;if(it){var n=Tr,r=Rr;n=(r&~(1<<32-jn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lO++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hO={readContext:kn,useCallback:Ww,useContext:kn,useEffect:i_,useImperativeHandle:Uw,useInsertionEffect:jw,useLayoutEffect:Fw,useMemo:Hw,useReducer:Uf,useRef:Dw,useState:function(){return Uf(Ks)},useDebugValue:a_,useDeferredValue:function(e){var t=Pn();return Vw(t,St.memoizedState,e)},useTransition:function(){var e=Uf(Ks)[0],t=Pn().memoizedState;return[e,t]},useMutableSource:Lw,useSyncExternalStore:Aw,useId:Zw,unstable_isNewReconciler:!1},pO={readContext:kn,useCallback:Ww,useContext:kn,useEffect:i_,useImperativeHandle:Uw,useInsertionEffect:jw,useLayoutEffect:Fw,useMemo:Hw,useReducer:Wf,useRef:Dw,useState:function(){return Wf(Ks)},useDebugValue:a_,useDeferredValue:function(e){var t=Pn();return St===null?t.memoizedState=e:Vw(t,St.memoizedState,e)},useTransition:function(){var e=Wf(Ks)[0],t=Pn().memoizedState;return[e,t]},useMutableSource:Lw,useSyncExternalStore:Aw,useId:Zw,unstable_isNewReconciler:!1};function ka(e,t){try{var n="",r=t;do n+=UC(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function Hf(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function mp(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mO=typeof WeakMap=="function"?WeakMap:Map;function Gw(e,t,n){n=Ar(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sc||(sc=!0,Pp=r),mp(e,t)},n}function Jw(e,t,n){n=Ar(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){mp(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){mp(e,t),typeof r!="function"&&(co===null?co=new Set([this]):co.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Fv(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new mO;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=RO.bind(null,e,t,n),t.then(e,e))}function $v(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Uv(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ar(-1,1),t.tag=2,uo(n,t,1))),n.lanes|=1),e)}var _O=Fr.ReactCurrentOwner,Gt=!1;function Wt(e,t,n,r){t.child=e===null?Rw(t,null,n,r):wa(t,e.child,n,r)}function Wv(e,t,n,r,o){n=n.render;var a=t.ref;return fa(t,o),r=r_(e,t,n,r,a,o),n=o_(),e!==null&&!Gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Dr(e,t,o)):(it&&n&&Vm(t),t.flags|=1,Wt(e,t,r,o),t.child)}function Hv(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!p_(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Yw(e,t,a,r,o)):(e=Cu(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:$s,n(s,r)&&e.ref===t.ref)return Dr(e,t,o)}return t.flags|=1,e=ho(a,r),e.ref=t.ref,e.return=t,t.child=e}function Yw(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if($s(a,r)&&e.ref===t.ref)if(Gt=!1,t.pendingProps=r=a,(e.lanes&o)!==0)e.flags&131072&&(Gt=!0);else return t.lanes=e.lanes,Dr(e,t,o)}return _p(e,t,n,r,o)}function Xw(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(ia,tn),tn|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,et(ia,tn),tn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,et(ia,tn),tn|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,et(ia,tn),tn|=r;return Wt(e,t,o,n),t.child}function e1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _p(e,t,n,r,o){var a=Yt(n)?hi:$t.current;return a=ba(t,a),fa(t,o),n=r_(e,t,n,r,a,o),r=o_(),e!==null&&!Gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Dr(e,t,o)):(it&&r&&Vm(t),t.flags|=1,Wt(e,t,n,o),t.child)}function Vv(e,t,n,r,o){if(Yt(n)){var a=!0;Ju(t)}else a=!1;if(fa(t,o),t.stateNode===null)Su(e,t),Ew(t,n,r),pp(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,u=t.memoizedProps;s.props=u;var c=s.context,f=n.contextType;typeof f=="object"&&f!==null?f=kn(f):(f=Yt(n)?hi:$t.current,f=ba(t,f));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u!==r||c!==f)&&Bv(t,s,r,f),Gr=!1;var _=t.memoizedState;s.state=_,nc(t,r,s,o),c=t.memoizedState,u!==r||_!==c||Jt.current||Gr?(typeof p=="function"&&(hp(t,n,p,r),c=t.memoizedState),(u=Gr||Nv(t,n,u,r,_,c,f))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=f,r=u):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Pw(e,t),u=t.memoizedProps,f=t.type===t.elementType?u:zn(t.type,u),s.props=f,h=t.pendingProps,_=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=kn(c):(c=Yt(n)?hi:$t.current,c=ba(t,c));var v=n.getDerivedStateFromProps;(p=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u!==h||_!==c)&&Bv(t,s,r,c),Gr=!1,_=t.memoizedState,s.state=_,nc(t,r,s,o);var y=t.memoizedState;u!==h||_!==y||Jt.current||Gr?(typeof v=="function"&&(hp(t,n,v,r),y=t.memoizedState),(f=Gr||Nv(t,n,f,r,_,y,c)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=c,r=f):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),r=!1)}return gp(e,t,n,r,a,o)}function gp(e,t,n,r,o,a){e1(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Tv(t,n,!1),Dr(e,t,a);r=t.stateNode,_O.current=t;var u=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=wa(t,e.child,null,a),t.child=wa(t,null,u,a)):Wt(e,t,u,a),t.memoizedState=r.state,o&&Tv(t,n,!0),t.child}function t1(e){var t=e.stateNode;t.pendingContext?Rv(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Rv(e,t.context,!1),Xm(e,t.containerInfo)}function Zv(e,t,n,r,o){return xa(),qm(o),t.flags|=256,Wt(e,t,n,r),t.child}var vp={dehydrated:null,treeContext:null,retryLane:0};function yp(e){return{baseLanes:e,cachePool:null,transitions:null}}function n1(e,t,n){var r=t.pendingProps,o=st.current,a=!1,s=(t.flags&128)!==0,u;if((u=s)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),et(st,o&1),e===null)return dp(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,a?(r=t.mode,a=t.child,s={mode:"hidden",children:s},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=rd(s,r,0,null),e=ci(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=yp(n),t.memoizedState=vp,e):s_(t,s));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return gO(e,t,s,r,u,o,n);if(a){a=r.fallback,s=t.mode,o=e.child,u=o.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=ho(o,c),r.subtreeFlags=o.subtreeFlags&14680064),u!==null?a=ho(u,a):(a=ci(a,s,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,s=e.child.memoizedState,s=s===null?yp(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~n,t.memoizedState=vp,r}return a=e.child,e=a.sibling,r=ho(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function s_(e,t){return t=rd({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ru(e,t,n,r){return r!==null&&qm(r),wa(t,e.child,null,n),e=s_(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gO(e,t,n,r,o,a,s){if(n)return t.flags&256?(t.flags&=-257,r=Hf(Error(ue(422))),ru(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=rd({mode:"visible",children:r.children},o,0,null),a=ci(a,o,s,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&wa(t,e.child,null,s),t.child.memoizedState=yp(s),t.memoizedState=vp,a);if(!(t.mode&1))return ru(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;return r=u,a=Error(ue(419)),r=Hf(a,r,void 0),ru(e,t,s,r)}if(u=(s&e.childLanes)!==0,Gt||u){if(r=Et,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Mr(e,o),Fn(r,e,o,-1))}return h_(),r=Hf(Error(ue(421))),ru(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=TO.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,nn=lo(o.nextSibling),sn=t,it=!0,Mn=null,e!==null&&(vn[yn++]=Rr,vn[yn++]=Tr,vn[yn++]=pi,Rr=e.id,Tr=e.overflow,pi=t),t=s_(t,r.children),t.flags|=4096,t)}function qv(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fp(e.return,t,n)}function Vf(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function r1(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(Wt(e,t,r.children,n),r=st.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qv(e,n,t);else if(e.tag===19)qv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(et(st,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&rc(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Vf(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&rc(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Vf(t,!0,n,null,a);break;case"together":Vf(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Su(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_i|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(ue(153));if(t.child!==null){for(e=t.child,n=ho(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ho(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vO(e,t,n){switch(t.tag){case 3:t1(t),xa();break;case 5:Tw(t);break;case 1:Yt(t.type)&&Ju(t);break;case 4:Xm(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;et(ec,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(et(st,st.current&1),t.flags|=128,null):n&t.child.childLanes?n1(e,t,n):(et(st,st.current&1),e=Dr(e,t,n),e!==null?e.sibling:null);et(st,st.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return r1(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),et(st,st.current),r)break;return null;case 22:case 23:return t.lanes=0,Xw(e,t,n)}return Dr(e,t,n)}var o1,bp,i1,a1;o1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bp=function(){};i1=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,oi(dr.current);var a=null;switch(n){case"input":o=Uh(e,o),r=Uh(e,r),a=[];break;case"select":o=ut({},o,{value:void 0}),r=ut({},r,{value:void 0}),a=[];break;case"textarea":o=Vh(e,o),r=Vh(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qu)}qh(n,r);var s;n=null;for(f in o)if(!r.hasOwnProperty(f)&&o.hasOwnProperty(f)&&o[f]!=null)if(f==="style"){var u=o[f];for(s in u)u.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(zs.hasOwnProperty(f)?a||(a=[]):(a=a||[]).push(f,null));for(f in r){var c=r[f];if(u=o?.[f],r.hasOwnProperty(f)&&c!==u&&(c!=null||u!=null))if(f==="style")if(u){for(s in u)!u.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&u[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(a||(a=[]),a.push(f,n)),n=c;else f==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(a=a||[]).push(f,c)):f==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(f,""+c):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(zs.hasOwnProperty(f)?(c!=null&&f==="onScroll"&&nt("scroll",e),a||u===c||(a=[])):(a=a||[]).push(f,c))}n&&(a=a||[]).push("style",n);var f=a;(t.updateQueue=f)&&(t.flags|=4)}};a1=function(e,t,n,r){n!==r&&(t.flags|=4)};function ls(e,t){if(!it)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yO(e,t,n){var r=t.pendingProps;switch(Zm(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(t),null;case 1:return Yt(t.type)&&Gu(),Nt(t),null;case 3:return r=t.stateNode,Sa(),rt(Jt),rt($t),t_(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(tu(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Mn!==null&&(Op(Mn),Mn=null))),bp(e,t),Nt(t),null;case 5:e_(t);var o=oi(Zs.current);if(n=t.type,e!==null&&t.stateNode!=null)i1(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(ue(166));return Nt(t),null}if(e=oi(dr.current),tu(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[sr]=t,r[Hs]=a,e=(t.mode&1)!==0,n){case"dialog":nt("cancel",r),nt("close",r);break;case"iframe":case"object":case"embed":nt("load",r);break;case"video":case"audio":for(o=0;o<vs.length;o++)nt(vs[o],r);break;case"source":nt("error",r);break;case"img":case"image":case"link":nt("error",r),nt("load",r);break;case"details":nt("toggle",r);break;case"input":nv(r,a),nt("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},nt("invalid",r);break;case"textarea":ov(r,a),nt("invalid",r)}qh(n,a),o=null;for(var s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="children"?typeof u=="string"?r.textContent!==u&&(a.suppressHydrationWarning!==!0&&eu(r.textContent,u,e),o=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(a.suppressHydrationWarning!==!0&&eu(r.textContent,u,e),o=["children",""+u]):zs.hasOwnProperty(s)&&u!=null&&s==="onScroll"&&nt("scroll",r)}switch(n){case"input":Zl(r),rv(r,a,!0);break;case"textarea":Zl(r),iv(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Qu)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ix(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[sr]=t,e[Hs]=r,o1(e,t,!1,!1),t.stateNode=e;e:{switch(s=Kh(n,r),n){case"dialog":nt("cancel",e),nt("close",e),o=r;break;case"iframe":case"object":case"embed":nt("load",e),o=r;break;case"video":case"audio":for(o=0;o<vs.length;o++)nt(vs[o],e);o=r;break;case"source":nt("error",e),o=r;break;case"img":case"image":case"link":nt("error",e),nt("load",e),o=r;break;case"details":nt("toggle",e),o=r;break;case"input":nv(e,r),o=Uh(e,r),nt("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ut({},r,{value:void 0}),nt("invalid",e);break;case"textarea":ov(e,r),o=Vh(e,r),nt("invalid",e);break;default:o=r}qh(n,o),u=o;for(a in u)if(u.hasOwnProperty(a)){var c=u[a];a==="style"?Bx(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&zx(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ns(e,c):typeof c=="number"&&Ns(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(zs.hasOwnProperty(a)?c!=null&&a==="onScroll"&&nt("scroll",e):c!=null&&Lm(e,a,c,s))}switch(n){case"input":Zl(e),rv(e,r,!1);break;case"textarea":Zl(e),iv(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Po(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?la(e,!!r.multiple,a,!1):r.defaultValue!=null&&la(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Qu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Nt(t),null;case 6:if(e&&t.stateNode!=null)a1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(ue(166));if(n=oi(Zs.current),oi(dr.current),tu(t)){if(r=t.stateNode,n=t.memoizedProps,r[sr]=t,(a=r.nodeValue!==n)&&(e=sn,e!==null))switch(e.tag){case 3:eu(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&eu(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sr]=t,t.stateNode=r}return Nt(t),null;case 13:if(rt(st),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(it&&nn!==null&&t.mode&1&&!(t.flags&128))Sw(),xa(),t.flags|=98560,a=!1;else if(a=tu(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(ue(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(ue(317));a[sr]=t}else xa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Nt(t),a=!1}else Mn!==null&&(Op(Mn),Mn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||st.current&1?kt===0&&(kt=3):h_())),t.updateQueue!==null&&(t.flags|=4),Nt(t),null);case 4:return Sa(),bp(e,t),e===null&&Us(t.stateNode.containerInfo),Nt(t),null;case 10:return Gm(t.type._context),Nt(t),null;case 17:return Yt(t.type)&&Gu(),Nt(t),null;case 19:if(rt(st),a=t.memoizedState,a===null)return Nt(t),null;if(r=(t.flags&128)!==0,s=a.rendering,s===null)if(r)ls(a,!1);else{if(kt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=rc(e),s!==null){for(t.flags|=128,ls(a,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return et(st,st.current&1|2),t.child}e=e.sibling}a.tail!==null&&mt()>Pa&&(t.flags|=128,r=!0,ls(a,!1),t.lanes=4194304)}else{if(!r)if(e=rc(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ls(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!it)return Nt(t),null}else 2*mt()-a.renderingStartTime>Pa&&n!==1073741824&&(t.flags|=128,r=!0,ls(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(n=a.last,n!==null?n.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=mt(),t.sibling=null,n=st.current,et(st,r?n&1|2:n&1),t):(Nt(t),null);case 22:case 23:return f_(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?tn&1073741824&&(Nt(t),t.subtreeFlags&6&&(t.flags|=8192)):Nt(t),null;case 24:return null;case 25:return null}throw Error(ue(156,t.tag))}function bO(e,t){switch(Zm(t),t.tag){case 1:return Yt(t.type)&&Gu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sa(),rt(Jt),rt($t),t_(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return e_(t),null;case 13:if(rt(st),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(ue(340));xa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return rt(st),null;case 4:return Sa(),null;case 10:return Gm(t.type._context),null;case 22:case 23:return f_(),null;case 24:return null;default:return null}}var ou=!1,Ft=!1,xO=typeof WeakSet=="function"?WeakSet:Set,ve=null;function oa(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ct(e,t,r)}else n.current=null}function xp(e,t,n){try{n()}catch(r){ct(e,t,r)}}var Kv=!1;function wO(e,t){if(op=Zu,e=cw(),Hm(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,u=-1,c=-1,f=0,p=0,h=e,_=null;t:for(;;){for(var v;h!==n||o!==0&&h.nodeType!==3||(u=s+o),h!==a||r!==0&&h.nodeType!==3||(c=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(v=h.firstChild)!==null;)_=h,h=v;for(;;){if(h===e)break t;if(_===n&&++f===o&&(u=s),_===a&&++p===r&&(c=s),(v=h.nextSibling)!==null)break;h=_,_=h.parentNode}h=v}n=u===-1||c===-1?null:{start:u,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ip={focusedElem:e,selectionRange:n},Zu=!1,ve=t;ve!==null;)if(t=ve,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ve=e;else for(;ve!==null;){t=ve;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var b=y.memoizedProps,P=y.memoizedState,g=t.stateNode,x=g.getSnapshotBeforeUpdate(t.elementType===t.type?b:zn(t.type,b),P);g.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(E){ct(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,ve=e;break}ve=t.return}return y=Kv,Kv=!1,y}function Cs(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&xp(t,n,a)}o=o.next}while(o!==r)}}function td(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wp(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function s1(e){var t=e.alternate;t!==null&&(e.alternate=null,s1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[sr],delete t[Hs],delete t[lp],delete t[oO],delete t[iO])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function l1(e){return e.tag===5||e.tag===3||e.tag===4}function Qv(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||l1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qu));else if(r!==4&&(e=e.child,e!==null))for(Sp(e,t,n),e=e.sibling;e!==null;)Sp(e,t,n),e=e.sibling}function kp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(kp(e,t,n),e=e.sibling;e!==null;)kp(e,t,n),e=e.sibling}var Tt=null,Bn=!1;function Zr(e,t,n){for(n=n.child;n!==null;)u1(e,t,n),n=n.sibling}function u1(e,t,n){if(cr&&typeof cr.onCommitFiberUnmount=="function")try{cr.onCommitFiberUnmount(qc,n)}catch{}switch(n.tag){case 5:Ft||oa(n,t);case 6:var r=Tt,o=Bn;Tt=null,Zr(e,t,n),Tt=r,Bn=o,Tt!==null&&(Bn?(e=Tt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Tt.removeChild(n.stateNode));break;case 18:Tt!==null&&(Bn?(e=Tt,n=n.stateNode,e.nodeType===8?Df(e.parentNode,n):e.nodeType===1&&Df(e,n),js(e)):Df(Tt,n.stateNode));break;case 4:r=Tt,o=Bn,Tt=n.stateNode.containerInfo,Bn=!0,Zr(e,t,n),Tt=r,Bn=o;break;case 0:case 11:case 14:case 15:if(!Ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&xp(n,t,s),o=o.next}while(o!==r)}Zr(e,t,n);break;case 1:if(!Ft&&(oa(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){ct(n,t,u)}Zr(e,t,n);break;case 21:Zr(e,t,n);break;case 22:n.mode&1?(Ft=(r=Ft)||n.memoizedState!==null,Zr(e,t,n),Ft=r):Zr(e,t,n);break;default:Zr(e,t,n)}}function Gv(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xO),t.forEach(function(r){var o=LO.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Tn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,s=t,u=s;e:for(;u!==null;){switch(u.tag){case 5:Tt=u.stateNode,Bn=!1;break e;case 3:Tt=u.stateNode.containerInfo,Bn=!0;break e;case 4:Tt=u.stateNode.containerInfo,Bn=!0;break e}u=u.return}if(Tt===null)throw Error(ue(160));u1(a,s,o),Tt=null,Bn=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(f){ct(o,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)c1(t,e),t=t.sibling}function c1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tn(t,e),er(e),r&4){try{Cs(3,e,e.return),td(3,e)}catch(b){ct(e,e.return,b)}try{Cs(5,e,e.return)}catch(b){ct(e,e.return,b)}}break;case 1:Tn(t,e),er(e),r&512&&n!==null&&oa(n,n.return);break;case 5:if(Tn(t,e),er(e),r&512&&n!==null&&oa(n,n.return),e.flags&32){var o=e.stateNode;try{Ns(o,"")}catch(b){ct(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,s=n!==null?n.memoizedProps:a,u=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{u==="input"&&a.type==="radio"&&a.name!=null&&Lx(o,a),Kh(u,s);var f=Kh(u,a);for(s=0;s<c.length;s+=2){var p=c[s],h=c[s+1];p==="style"?Bx(o,h):p==="dangerouslySetInnerHTML"?zx(o,h):p==="children"?Ns(o,h):Lm(o,p,h,f)}switch(u){case"input":Wh(o,a);break;case"textarea":Ax(o,a);break;case"select":var _=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?la(o,!!a.multiple,v,!1):_!==!!a.multiple&&(a.defaultValue!=null?la(o,!!a.multiple,a.defaultValue,!0):la(o,!!a.multiple,a.multiple?[]:"",!1))}o[Hs]=a}catch(b){ct(e,e.return,b)}}break;case 6:if(Tn(t,e),er(e),r&4){if(e.stateNode===null)throw Error(ue(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(b){ct(e,e.return,b)}}break;case 3:if(Tn(t,e),er(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{js(t.containerInfo)}catch(b){ct(e,e.return,b)}break;case 4:Tn(t,e),er(e);break;case 13:Tn(t,e),er(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(c_=mt())),r&4&&Gv(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Ft=(f=Ft)||p,Tn(t,e),Ft=f):Tn(t,e),er(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!p&&e.mode&1)for(ve=e,p=e.child;p!==null;){for(h=ve=p;ve!==null;){switch(_=ve,v=_.child,_.tag){case 0:case 11:case 14:case 15:Cs(4,_,_.return);break;case 1:oa(_,_.return);var y=_.stateNode;if(typeof y.componentWillUnmount=="function"){r=_,n=_.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(b){ct(r,n,b)}}break;case 5:oa(_,_.return);break;case 22:if(_.memoizedState!==null){Yv(h);continue}}v!==null?(v.return=_,ve=v):Yv(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,f?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(u=h.stateNode,c=h.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=Nx("display",s))}catch(b){ct(e,e.return,b)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=f?"":h.memoizedProps}catch(b){ct(e,e.return,b)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Tn(t,e),er(e),r&4&&Gv(e);break;case 21:break;default:Tn(t,e),er(e)}}function er(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(l1(n)){var r=n;break e}n=n.return}throw Error(ue(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ns(o,""),r.flags&=-33);var a=Qv(e);kp(e,a,o);break;case 3:case 4:var s=r.stateNode.containerInfo,u=Qv(e);Sp(e,u,s);break;default:throw Error(ue(161))}}catch(c){ct(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function SO(e,t,n){ve=e,d1(e)}function d1(e,t,n){for(var r=(e.mode&1)!==0;ve!==null;){var o=ve,a=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||ou;if(!s){var u=o.alternate,c=u!==null&&u.memoizedState!==null||Ft;u=ou;var f=Ft;if(ou=s,(Ft=c)&&!f)for(ve=o;ve!==null;)s=ve,c=s.child,s.tag===22&&s.memoizedState!==null?Xv(o):c!==null?(c.return=s,ve=c):Xv(o);for(;a!==null;)ve=a,d1(a),a=a.sibling;ve=o,ou=u,Ft=f}Jv(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,ve=a):Jv(e)}}function Jv(e){for(;ve!==null;){var t=ve;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ft||td(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ft)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:zn(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&zv(t,a,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}zv(t,s,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var p=f.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&js(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}Ft||t.flags&512&&wp(t)}catch(_){ct(t,t.return,_)}}if(t===e){ve=null;break}if(n=t.sibling,n!==null){n.return=t.return,ve=n;break}ve=t.return}}function Yv(e){for(;ve!==null;){var t=ve;if(t===e){ve=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ve=n;break}ve=t.return}}function Xv(e){for(;ve!==null;){var t=ve;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{td(4,t)}catch(c){ct(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){ct(t,o,c)}}var a=t.return;try{wp(t)}catch(c){ct(t,a,c)}break;case 5:var s=t.return;try{wp(t)}catch(c){ct(t,s,c)}}}catch(c){ct(t,t.return,c)}if(t===e){ve=null;break}var u=t.sibling;if(u!==null){u.return=t.return,ve=u;break}ve=t.return}}var kO=Math.ceil,ac=Fr.ReactCurrentDispatcher,l_=Fr.ReactCurrentOwner,xn=Fr.ReactCurrentBatchConfig,Fe=0,Et=null,bt=null,Lt=0,tn=0,ia=Io(0),kt=0,Gs=null,_i=0,nd=0,u_=0,Es=null,Qt=null,c_=0,Pa=1/0,kr=null,sc=!1,Pp=null,co=null,iu=!1,ro=null,lc=0,Os=0,Cp=null,ku=-1,Pu=0;function Ht(){return Fe&6?mt():ku!==-1?ku:ku=mt()}function fo(e){return e.mode&1?Fe&2&&Lt!==0?Lt&-Lt:sO.transition!==null?(Pu===0&&(Pu=Kx()),Pu):(e=Ke,e!==0||(e=window.event,e=e===void 0?16:tw(e.type)),e):1}function Fn(e,t,n,r){if(50<Os)throw Os=0,Cp=null,Error(ue(185));fl(e,n,r),(!(Fe&2)||e!==Et)&&(e===Et&&(!(Fe&2)&&(nd|=n),kt===4&&Xr(e,Lt)),Xt(e,r),n===1&&Fe===0&&!(t.mode&1)&&(Pa=mt()+500,Yc&&zo()))}function Xt(e,t){var n=e.callbackNode;sE(e,t);var r=Vu(e,e===Et?Lt:0);if(r===0)n!==null&&lv(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&lv(n),t===1)e.tag===0?aO(ey.bind(null,e)):bw(ey.bind(null,e)),nO(function(){!(Fe&6)&&zo()}),n=null;else{switch(Qx(r)){case 1:n=Bm;break;case 4:n=Zx;break;case 16:n=Hu;break;case 536870912:n=qx;break;default:n=Hu}n=y1(n,f1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function f1(e,t){if(ku=-1,Pu=0,Fe&6)throw Error(ue(327));var n=e.callbackNode;if(ha()&&e.callbackNode!==n)return null;var r=Vu(e,e===Et?Lt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=uc(e,r);else{t=r;var o=Fe;Fe|=2;var a=p1();(Et!==e||Lt!==t)&&(kr=null,Pa=mt()+500,ui(e,t));do try{EO();break}catch(u){h1(e,u)}while(1);Qm(),ac.current=a,Fe=o,bt!==null?t=0:(Et=null,Lt=0,t=kt)}if(t!==0){if(t===2&&(o=Xh(e),o!==0&&(r=o,t=Ep(e,o))),t===1)throw n=Gs,ui(e,0),Xr(e,r),Xt(e,mt()),n;if(t===6)Xr(e,r);else{if(o=e.current.alternate,!(r&30)&&!PO(o)&&(t=uc(e,r),t===2&&(a=Xh(e),a!==0&&(r=a,t=Ep(e,a))),t===1))throw n=Gs,ui(e,0),Xr(e,r),Xt(e,mt()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(ue(345));case 2:Yo(e,Qt,kr);break;case 3:if(Xr(e,r),(r&130023424)===r&&(t=c_+500-mt(),10<t)){if(Vu(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ht(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=sp(Yo.bind(null,e,Qt,kr),t);break}Yo(e,Qt,kr);break;case 4:if(Xr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-jn(r);a=1<<s,s=t[s],s>o&&(o=s),r&=~a}if(r=o,r=mt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kO(r/1960))-r,10<r){e.timeoutHandle=sp(Yo.bind(null,e,Qt,kr),r);break}Yo(e,Qt,kr);break;case 5:Yo(e,Qt,kr);break;default:throw Error(ue(329))}}}return Xt(e,mt()),e.callbackNode===n?f1.bind(null,e):null}function Ep(e,t){var n=Es;return e.current.memoizedState.isDehydrated&&(ui(e,t).flags|=256),e=uc(e,t),e!==2&&(t=Qt,Qt=n,t!==null&&Op(t)),e}function Op(e){Qt===null?Qt=e:Qt.push.apply(Qt,e)}function PO(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!Wn(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xr(e,t){for(t&=~u_,t&=~nd,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-jn(t),r=1<<n;e[n]=-1,t&=~r}}function ey(e){if(Fe&6)throw Error(ue(327));ha();var t=Vu(e,0);if(!(t&1))return Xt(e,mt()),null;var n=uc(e,t);if(e.tag!==0&&n===2){var r=Xh(e);r!==0&&(t=r,n=Ep(e,r))}if(n===1)throw n=Gs,ui(e,0),Xr(e,t),Xt(e,mt()),n;if(n===6)throw Error(ue(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yo(e,Qt,kr),Xt(e,mt()),null}function d_(e,t){var n=Fe;Fe|=1;try{return e(t)}finally{Fe=n,Fe===0&&(Pa=mt()+500,Yc&&zo())}}function gi(e){ro!==null&&ro.tag===0&&!(Fe&6)&&ha();var t=Fe;Fe|=1;var n=xn.transition,r=Ke;try{if(xn.transition=null,Ke=1,e)return e()}finally{Ke=r,xn.transition=n,Fe=t,!(Fe&6)&&zo()}}function f_(){tn=ia.current,rt(ia)}function ui(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,tO(n)),bt!==null)for(n=bt.return;n!==null;){var r=n;switch(Zm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gu();break;case 3:Sa(),rt(Jt),rt($t),t_();break;case 5:e_(r);break;case 4:Sa();break;case 13:rt(st);break;case 19:rt(st);break;case 10:Gm(r.type._context);break;case 22:case 23:f_()}n=n.return}if(Et=e,bt=e=ho(e.current,null),Lt=tn=t,kt=0,Gs=null,u_=nd=_i=0,Qt=Es=null,ri!==null){for(t=0;t<ri.length;t++)if(n=ri[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var s=a.next;a.next=o,r.next=s}n.pending=r}ri=null}return e}function h1(e,t){do{var n=bt;try{if(Qm(),xu.current=ic,oc){for(var r=lt.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}oc=!1}if(mi=0,Ct=St=lt=null,Ps=!1,qs=0,l_.current=null,n===null||n.return===null){kt=1,Gs=t,bt=null;break}e:{var a=e,s=n.return,u=n,c=t;if(t=Lt,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var f=c,p=u,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var _=p.alternate;_?(p.updateQueue=_.updateQueue,p.memoizedState=_.memoizedState,p.lanes=_.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=$v(s);if(v!==null){v.flags&=-257,Uv(v,s,u,a,t),v.mode&1&&Fv(a,f,t),t=v,c=f;var y=t.updateQueue;if(y===null){var b=new Set;b.add(c),t.updateQueue=b}else y.add(c);break e}else{if(!(t&1)){Fv(a,f,t),h_();break e}c=Error(ue(426))}}else if(it&&u.mode&1){var P=$v(s);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Uv(P,s,u,a,t),qm(ka(c,u));break e}}a=c=ka(c,u),kt!==4&&(kt=2),Es===null?Es=[a]:Es.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=Gw(a,c,t);Iv(a,g);break e;case 1:u=c;var x=a.type,S=a.stateNode;if(!(a.flags&128)&&(typeof x.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(co===null||!co.has(S)))){a.flags|=65536,t&=-t,a.lanes|=t;var E=Jw(a,u,t);Iv(a,E);break e}}a=a.return}while(a!==null)}_1(n)}catch(R){t=R,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(1)}function p1(){var e=ac.current;return ac.current=ic,e===null?ic:e}function h_(){(kt===0||kt===3||kt===2)&&(kt=4),Et===null||!(_i&268435455)&&!(nd&268435455)||Xr(Et,Lt)}function uc(e,t){var n=Fe;Fe|=2;var r=p1();(Et!==e||Lt!==t)&&(kr=null,ui(e,t));do try{CO();break}catch(o){h1(e,o)}while(1);if(Qm(),Fe=n,ac.current=r,bt!==null)throw Error(ue(261));return Et=null,Lt=0,kt}function CO(){for(;bt!==null;)m1(bt)}function EO(){for(;bt!==null&&!YC();)m1(bt)}function m1(e){var t=v1(e.alternate,e,tn);e.memoizedProps=e.pendingProps,t===null?_1(e):bt=t,l_.current=null}function _1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=bO(n,t),n!==null){n.flags&=32767,bt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{kt=6,bt=null;return}}else if(n=yO(n,t,tn),n!==null){bt=n;return}if(t=t.sibling,t!==null){bt=t;return}bt=t=e}while(t!==null);kt===0&&(kt=5)}function Yo(e,t,n){var r=Ke,o=xn.transition;try{xn.transition=null,Ke=1,OO(e,t,n,r)}finally{xn.transition=o,Ke=r}return null}function OO(e,t,n,r){do ha();while(ro!==null);if(Fe&6)throw Error(ue(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(ue(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(lE(e,a),e===Et&&(bt=Et=null,Lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||iu||(iu=!0,y1(Hu,function(){return ha(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=xn.transition,xn.transition=null;var s=Ke;Ke=1;var u=Fe;Fe|=4,l_.current=null,wO(e,n),c1(n,e),KE(ip),Zu=!!op,ip=op=null,e.current=n,SO(n),XC(),Fe=u,Ke=s,xn.transition=a}else e.current=n;if(iu&&(iu=!1,ro=e,lc=o),a=e.pendingLanes,a===0&&(co=null),nE(n.stateNode),Xt(e,mt()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(sc)throw sc=!1,e=Pp,Pp=null,e;return lc&1&&e.tag!==0&&ha(),a=e.pendingLanes,a&1?e===Cp?Os++:(Os=0,Cp=e):Os=0,zo(),null}function ha(){if(ro!==null){var e=Qx(lc),t=xn.transition,n=Ke;try{if(xn.transition=null,Ke=16>e?16:e,ro===null)var r=!1;else{if(e=ro,ro=null,lc=0,Fe&6)throw Error(ue(331));var o=Fe;for(Fe|=4,ve=e.current;ve!==null;){var a=ve,s=a.child;if(ve.flags&16){var u=a.deletions;if(u!==null){for(var c=0;c<u.length;c++){var f=u[c];for(ve=f;ve!==null;){var p=ve;switch(p.tag){case 0:case 11:case 15:Cs(8,p,a)}var h=p.child;if(h!==null)h.return=p,ve=h;else for(;ve!==null;){p=ve;var _=p.sibling,v=p.return;if(s1(p),p===f){ve=null;break}if(_!==null){_.return=v,ve=_;break}ve=v}}}var y=a.alternate;if(y!==null){var b=y.child;if(b!==null){y.child=null;do{var P=b.sibling;b.sibling=null,b=P}while(b!==null)}}ve=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,ve=s;else e:for(;ve!==null;){if(a=ve,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Cs(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,ve=g;break e}ve=a.return}}var x=e.current;for(ve=x;ve!==null;){s=ve;var S=s.child;if(s.subtreeFlags&2064&&S!==null)S.return=s,ve=S;else e:for(s=x;ve!==null;){if(u=ve,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:td(9,u)}}catch(R){ct(u,u.return,R)}if(u===s){ve=null;break e}var E=u.sibling;if(E!==null){E.return=u.return,ve=E;break e}ve=u.return}}if(Fe=o,zo(),cr&&typeof cr.onPostCommitFiberRoot=="function")try{cr.onPostCommitFiberRoot(qc,e)}catch{}r=!0}return r}finally{Ke=n,xn.transition=t}}return!1}function ty(e,t,n){t=ka(n,t),t=Gw(e,t,1),e=uo(e,t,1),t=Ht(),e!==null&&(fl(e,1,t),Xt(e,t))}function ct(e,t,n){if(e.tag===3)ty(e,e,n);else for(;t!==null;){if(t.tag===3){ty(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(co===null||!co.has(r))){e=ka(n,e),e=Jw(t,e,1),t=uo(t,e,1),e=Ht(),t!==null&&(fl(t,1,e),Xt(t,e));break}}t=t.return}}function RO(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ht(),e.pingedLanes|=e.suspendedLanes&n,Et===e&&(Lt&n)===n&&(kt===4||kt===3&&(Lt&130023424)===Lt&&500>mt()-c_?ui(e,0):u_|=n),Xt(e,t)}function g1(e,t){t===0&&(e.mode&1?(t=Ql,Ql<<=1,!(Ql&130023424)&&(Ql=4194304)):t=1);var n=Ht();e=Mr(e,t),e!==null&&(fl(e,t,n),Xt(e,n))}function TO(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),g1(e,n)}function LO(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(ue(314))}r!==null&&r.delete(t),g1(e,n)}var v1;v1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Jt.current)Gt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Gt=!1,vO(e,t,n);Gt=!!(e.flags&131072)}else Gt=!1,it&&t.flags&1048576&&xw(t,Xu,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Su(e,t),e=t.pendingProps;var o=ba(t,$t.current);fa(t,n),o=r_(null,t,r,e,o,n);var a=o_();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Yt(r)?(a=!0,Ju(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ym(t),o.updater=Xc,t.stateNode=o,o._reactInternals=t,pp(t,r,e,n),t=gp(null,t,r,!0,a,n)):(t.tag=0,it&&a&&Vm(t),Wt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Su(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=IO(r),e=zn(r,e),o){case 0:t=_p(null,t,r,e,n);break e;case 1:t=Vv(null,t,r,e,n);break e;case 11:t=Wv(null,t,r,e,n);break e;case 14:t=Hv(null,t,r,zn(r.type,e),n);break e}throw Error(ue(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:zn(r,o),_p(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:zn(r,o),Vv(e,t,r,o,n);case 3:e:{if(t1(t),e===null)throw Error(ue(387));r=t.pendingProps,a=t.memoizedState,o=a.element,Pw(e,t),nc(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=ka(Error(ue(423)),t),t=Zv(e,t,r,n,o);break e}else if(r!==o){o=ka(Error(ue(424)),t),t=Zv(e,t,r,n,o);break e}else for(nn=lo(t.stateNode.containerInfo.firstChild),sn=t,it=!0,Mn=null,n=Rw(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xa(),r===o){t=Dr(e,t,n);break e}Wt(e,t,r,n)}t=t.child}return t;case 5:return Tw(t),e===null&&dp(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,s=o.children,ap(r,o)?s=null:a!==null&&ap(r,a)&&(t.flags|=32),e1(e,t),Wt(e,t,s,n),t.child;case 6:return e===null&&dp(t),null;case 13:return n1(e,t,n);case 4:return Xm(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=wa(t,null,r,n):Wt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:zn(r,o),Wv(e,t,r,o,n);case 7:return Wt(e,t,t.pendingProps,n),t.child;case 8:return Wt(e,t,t.pendingProps.children,n),t.child;case 12:return Wt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,s=o.value,et(ec,r._currentValue),r._currentValue=s,a!==null)if(Wn(a.value,s)){if(a.children===o.children&&!Jt.current){t=Dr(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){s=a.child;for(var c=u.firstContext;c!==null;){if(c.context===r){if(a.tag===1){c=Ar(-1,n&-n),c.tag=2;var f=a.updateQueue;if(f!==null){f=f.shared;var p=f.pending;p===null?c.next=c:(c.next=p.next,p.next=c),f.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),fp(a.return,n,t),u.lanes|=n;break}c=c.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(ue(341));s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),fp(s,n,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}Wt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,fa(t,n),o=kn(o),r=r(o),t.flags|=1,Wt(e,t,r,n),t.child;case 14:return r=t.type,o=zn(r,t.pendingProps),o=zn(r.type,o),Hv(e,t,r,o,n);case 15:return Yw(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:zn(r,o),Su(e,t),t.tag=1,Yt(r)?(e=!0,Ju(t)):e=!1,fa(t,n),Ew(t,r,o),pp(t,r,o,n),gp(null,t,r,!0,e,n);case 19:return r1(e,t,n);case 22:return Xw(e,t,n)}throw Error(ue(156,t.tag))};function y1(e,t){return Vx(e,t)}function AO(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(e,t,n,r){return new AO(e,t,n,r)}function p_(e){return e=e.prototype,!(!e||!e.isReactComponent)}function IO(e){if(typeof e=="function")return p_(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Im)return 11;if(e===zm)return 14}return 2}function ho(e,t){var n=e.alternate;return n===null?(n=bn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Cu(e,t,n,r,o,a){var s=2;if(r=e,typeof e=="function")p_(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Qi:return ci(n.children,o,a,t);case Am:s=8,o|=8;break;case Dh:return e=bn(12,n,t,o|2),e.elementType=Dh,e.lanes=a,e;case jh:return e=bn(13,n,t,o),e.elementType=jh,e.lanes=a,e;case Fh:return e=bn(19,n,t,o),e.elementType=Fh,e.lanes=a,e;case Ox:return rd(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Cx:s=10;break e;case Ex:s=9;break e;case Im:s=11;break e;case zm:s=14;break e;case Qr:s=16,r=null;break e}throw Error(ue(130,e==null?e:typeof e,""))}return t=bn(s,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function ci(e,t,n,r){return e=bn(7,e,r,t),e.lanes=n,e}function rd(e,t,n,r){return e=bn(22,e,r,t),e.elementType=Ox,e.lanes=n,e.stateNode={isHidden:!1},e}function Zf(e,t,n){return e=bn(6,e,null,t),e.lanes=n,e}function qf(e,t,n){return t=bn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zO(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ef(0),this.expirationTimes=Ef(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ef(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function m_(e,t,n,r,o,a,s,u,c){return e=new zO(e,t,n,u,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=bn(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ym(a),e}function NO(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ki,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function b1(e){if(!e)return Co;e=e._reactInternals;e:{if(ki(e)!==e||e.tag!==1)throw Error(ue(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Yt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(ue(171))}if(e.tag===1){var n=e.type;if(Yt(n))return yw(e,n,t)}return t}function x1(e,t,n,r,o,a,s,u,c){return e=m_(n,r,!0,e,o,a,s,u,c),e.context=b1(null),n=e.current,r=Ht(),o=fo(n),a=Ar(r,o),a.callback=t??null,uo(n,a,o),e.current.lanes=o,fl(e,o,r),Xt(e,r),e}function od(e,t,n,r){var o=t.current,a=Ht(),s=fo(o);return n=b1(n),t.context===null?t.context=n:t.pendingContext=n,t=Ar(a,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=uo(o,t,s),e!==null&&(Fn(e,o,s,a),bu(e,o,s)),s}function cc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ny(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function __(e,t){ny(e,t),(e=e.alternate)&&ny(e,t)}function BO(){return null}var w1=typeof reportError=="function"?reportError:function(e){console.error(e)};function g_(e){this._internalRoot=e}id.prototype.render=g_.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(ue(409));od(e,t,null,null)};id.prototype.unmount=g_.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gi(function(){od(null,e,null,null)}),t[Br]=null}};function id(e){this._internalRoot=e}id.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yr.length&&t!==0&&t<Yr[n].priority;n++);Yr.splice(n,0,e),n===0&&ew(e)}};function v_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ad(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ry(){}function MO(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var f=cc(s);a.call(f)}}var s=x1(t,r,e,0,null,!1,!1,"",ry);return e._reactRootContainer=s,e[Br]=s.current,Us(e.nodeType===8?e.parentNode:e),gi(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var u=r;r=function(){var f=cc(c);u.call(f)}}var c=m_(e,0,!1,null,null,!1,!1,"",ry);return e._reactRootContainer=c,e[Br]=c.current,Us(e.nodeType===8?e.parentNode:e),gi(function(){od(t,c,n,r)}),c}function sd(e,t,n,r,o){var a=n._reactRootContainer;if(a){var s=a;if(typeof o=="function"){var u=o;o=function(){var c=cc(s);u.call(c)}}od(t,s,e,o)}else s=MO(n,t,e,o,r);return cc(s)}Gx=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=gs(t.pendingLanes);n!==0&&(Mm(t,n|1),Xt(t,mt()),!(Fe&6)&&(Pa=mt()+500,zo()))}break;case 13:gi(function(){var r=Mr(e,1);if(r!==null){var o=Ht();Fn(r,e,1,o)}}),__(e,1)}};Dm=function(e){if(e.tag===13){var t=Mr(e,134217728);if(t!==null){var n=Ht();Fn(t,e,134217728,n)}__(e,134217728)}};Jx=function(e){if(e.tag===13){var t=fo(e),n=Mr(e,t);if(n!==null){var r=Ht();Fn(n,e,t,r)}__(e,t)}};Yx=function(){return Ke};Xx=function(e,t){var n=Ke;try{return Ke=e,t()}finally{Ke=n}};Gh=function(e,t,n){switch(t){case"input":if(Wh(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Jc(r);if(!o)throw Error(ue(90));Tx(r),Wh(r,o)}}}break;case"textarea":Ax(e,n);break;case"select":t=n.value,t!=null&&la(e,!!n.multiple,t,!1)}};jx=d_;Fx=gi;var DO={usingClientEntryPoint:!1,Events:[pl,Xi,Jc,Mx,Dx,d_]},us={findFiberByHostInstance:ni,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},jO={bundleType:us.bundleType,version:us.version,rendererPackageName:us.rendererPackageName,rendererConfig:us.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Wx(e),e===null?null:e.stateNode},findFiberByHostInstance:us.findFiberByHostInstance||BO,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!au.isDisabled&&au.supportsFiber)try{qc=au.inject(jO),cr=au}catch{}}dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DO;dn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v_(t))throw Error(ue(200));return NO(e,t,null,n)};dn.createRoot=function(e,t){if(!v_(e))throw Error(ue(299));var n=!1,r="",o=w1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=m_(e,1,!1,null,null,n,!1,r,o),e[Br]=t.current,Us(e.nodeType===8?e.parentNode:e),new g_(t)};dn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(ue(188)):(e=Object.keys(e).join(","),Error(ue(268,e)));return e=Wx(t),e=e===null?null:e.stateNode,e};dn.flushSync=function(e){return gi(e)};dn.hydrate=function(e,t,n){if(!ad(t))throw Error(ue(200));return sd(null,e,t,!0,n)};dn.hydrateRoot=function(e,t,n){if(!v_(e))throw Error(ue(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",s=w1;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=x1(t,null,e,1,n??null,o,!1,a,s),e[Br]=t.current,Us(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new id(t)};dn.render=function(e,t,n){if(!ad(t))throw Error(ue(200));return sd(null,e,t,!1,n)};dn.unmountComponentAtNode=function(e){if(!ad(e))throw Error(ue(40));return e._reactRootContainer?(gi(function(){sd(null,null,e,!1,function(){e._reactRootContainer=null,e[Br]=null})}),!0):!1};dn.unstable_batchedUpdates=d_;dn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ad(n))throw Error(ue(200));if(e==null||e._reactInternals===void 0)throw Error(ue(38));return sd(e,t,n,!1,r)};dn.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=dn})(BC);const FO=px(ko);var S1,oy=ko;S1=oy.createRoot,oy.hydrateRoot;var Rp={},$O={get exports(){return Rp},set exports(e){Rp=e}},k1={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ca=k;function UO(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var WO=typeof Object.is=="function"?Object.is:UO,HO=Ca.useState,VO=Ca.useEffect,ZO=Ca.useLayoutEffect,qO=Ca.useDebugValue;function KO(e,t){var n=t(),r=HO({inst:{value:n,getSnapshot:t}}),o=r[0].inst,a=r[1];return ZO(function(){o.value=n,o.getSnapshot=t,Kf(o)&&a({inst:o})},[e,n,t]),VO(function(){return Kf(o)&&a({inst:o}),e(function(){Kf(o)&&a({inst:o})})},[e]),qO(n),n}function Kf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!WO(e,n)}catch{return!0}}function QO(e,t){return t()}var GO=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?QO:KO;k1.useSyncExternalStore=Ca.useSyncExternalStore!==void 0?Ca.useSyncExternalStore:GO;(function(e){e.exports=k1})($O);var Tp={},JO={get exports(){return Tp},set exports(e){Tp=e}},P1={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld=k,YO=Rp;function XO(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var e2=typeof Object.is=="function"?Object.is:XO,t2=YO.useSyncExternalStore,n2=ld.useRef,r2=ld.useEffect,o2=ld.useMemo,i2=ld.useDebugValue;P1.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var a=n2(null);if(a.current===null){var s={hasValue:!1,value:null};a.current=s}else s=a.current;a=o2(function(){function c(v){if(!f){if(f=!0,p=v,v=r(v),o!==void 0&&s.hasValue){var y=s.value;if(o(y,v))return h=y}return h=v}if(y=h,e2(p,v))return y;var b=r(v);return o!==void 0&&o(y,b)?y:(p=v,h=b)}var f=!1,p,h,_=n===void 0?null:n;return[function(){return c(t())},_===null?void 0:function(){return c(_())}]},[t,n,r,o]);var u=t2(e,a[0],a[1]);return r2(function(){s.hasValue=!0,s.value=u},[u]),i2(u),u};(function(e){e.exports=P1})(JO);function a2(e){e()}let C1=a2;const s2=e=>C1=e,l2=()=>C1,Eo=k.createContext(null);function E1(){return k.useContext(Eo)}const u2=()=>{throw new Error("uSES not initialized!")};let O1=u2;const c2=e=>{O1=e},d2=(e,t)=>e===t;function f2(e=Eo){const t=e===Eo?E1:()=>k.useContext(e);return function(r,o=d2){const{store:a,subscription:s,getServerState:u}=t(),c=O1(s.addNestedSub,a.getState,u||a.getState,r,o);return k.useDebugValue(c),c}}const h2=f2();function Ve(){return Ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ve.apply(this,arguments)}var Lp={},p2={get exports(){return Lp},set exports(e){Lp=e}},Qe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ot=typeof Symbol=="function"&&Symbol.for,y_=Ot?Symbol.for("react.element"):60103,b_=Ot?Symbol.for("react.portal"):60106,ud=Ot?Symbol.for("react.fragment"):60107,cd=Ot?Symbol.for("react.strict_mode"):60108,dd=Ot?Symbol.for("react.profiler"):60114,fd=Ot?Symbol.for("react.provider"):60109,hd=Ot?Symbol.for("react.context"):60110,x_=Ot?Symbol.for("react.async_mode"):60111,pd=Ot?Symbol.for("react.concurrent_mode"):60111,md=Ot?Symbol.for("react.forward_ref"):60112,_d=Ot?Symbol.for("react.suspense"):60113,m2=Ot?Symbol.for("react.suspense_list"):60120,gd=Ot?Symbol.for("react.memo"):60115,vd=Ot?Symbol.for("react.lazy"):60116,_2=Ot?Symbol.for("react.block"):60121,g2=Ot?Symbol.for("react.fundamental"):60117,v2=Ot?Symbol.for("react.responder"):60118,y2=Ot?Symbol.for("react.scope"):60119;function hn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case y_:switch(e=e.type,e){case x_:case pd:case ud:case dd:case cd:case _d:return e;default:switch(e=e&&e.$$typeof,e){case hd:case md:case vd:case gd:case fd:return e;default:return t}}case b_:return t}}}function R1(e){return hn(e)===pd}Qe.AsyncMode=x_;Qe.ConcurrentMode=pd;Qe.ContextConsumer=hd;Qe.ContextProvider=fd;Qe.Element=y_;Qe.ForwardRef=md;Qe.Fragment=ud;Qe.Lazy=vd;Qe.Memo=gd;Qe.Portal=b_;Qe.Profiler=dd;Qe.StrictMode=cd;Qe.Suspense=_d;Qe.isAsyncMode=function(e){return R1(e)||hn(e)===x_};Qe.isConcurrentMode=R1;Qe.isContextConsumer=function(e){return hn(e)===hd};Qe.isContextProvider=function(e){return hn(e)===fd};Qe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===y_};Qe.isForwardRef=function(e){return hn(e)===md};Qe.isFragment=function(e){return hn(e)===ud};Qe.isLazy=function(e){return hn(e)===vd};Qe.isMemo=function(e){return hn(e)===gd};Qe.isPortal=function(e){return hn(e)===b_};Qe.isProfiler=function(e){return hn(e)===dd};Qe.isStrictMode=function(e){return hn(e)===cd};Qe.isSuspense=function(e){return hn(e)===_d};Qe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ud||e===pd||e===dd||e===cd||e===_d||e===m2||typeof e=="object"&&e!==null&&(e.$$typeof===vd||e.$$typeof===gd||e.$$typeof===fd||e.$$typeof===hd||e.$$typeof===md||e.$$typeof===g2||e.$$typeof===v2||e.$$typeof===y2||e.$$typeof===_2)};Qe.typeOf=hn;(function(e){e.exports=Qe})(p2);var T1=Lp,b2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},x2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},L1={};L1[T1.ForwardRef]=b2;L1[T1.Memo]=x2;var iy={},w2={get exports(){return iy},set exports(e){iy=e}},Ge={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_=Symbol.for("react.element"),S_=Symbol.for("react.portal"),yd=Symbol.for("react.fragment"),bd=Symbol.for("react.strict_mode"),xd=Symbol.for("react.profiler"),wd=Symbol.for("react.provider"),Sd=Symbol.for("react.context"),S2=Symbol.for("react.server_context"),kd=Symbol.for("react.forward_ref"),Pd=Symbol.for("react.suspense"),Cd=Symbol.for("react.suspense_list"),Ed=Symbol.for("react.memo"),Od=Symbol.for("react.lazy"),k2=Symbol.for("react.offscreen"),A1;A1=Symbol.for("react.module.reference");function Cn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case w_:switch(e=e.type,e){case yd:case xd:case bd:case Pd:case Cd:return e;default:switch(e=e&&e.$$typeof,e){case S2:case Sd:case kd:case Od:case Ed:case wd:return e;default:return t}}case S_:return t}}}Ge.ContextConsumer=Sd;Ge.ContextProvider=wd;Ge.Element=w_;Ge.ForwardRef=kd;Ge.Fragment=yd;Ge.Lazy=Od;Ge.Memo=Ed;Ge.Portal=S_;Ge.Profiler=xd;Ge.StrictMode=bd;Ge.Suspense=Pd;Ge.SuspenseList=Cd;Ge.isAsyncMode=function(){return!1};Ge.isConcurrentMode=function(){return!1};Ge.isContextConsumer=function(e){return Cn(e)===Sd};Ge.isContextProvider=function(e){return Cn(e)===wd};Ge.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===w_};Ge.isForwardRef=function(e){return Cn(e)===kd};Ge.isFragment=function(e){return Cn(e)===yd};Ge.isLazy=function(e){return Cn(e)===Od};Ge.isMemo=function(e){return Cn(e)===Ed};Ge.isPortal=function(e){return Cn(e)===S_};Ge.isProfiler=function(e){return Cn(e)===xd};Ge.isStrictMode=function(e){return Cn(e)===bd};Ge.isSuspense=function(e){return Cn(e)===Pd};Ge.isSuspenseList=function(e){return Cn(e)===Cd};Ge.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===yd||e===xd||e===bd||e===Pd||e===Cd||e===k2||typeof e=="object"&&e!==null&&(e.$$typeof===Od||e.$$typeof===Ed||e.$$typeof===wd||e.$$typeof===Sd||e.$$typeof===kd||e.$$typeof===A1||e.getModuleId!==void 0)};Ge.typeOf=Cn;(function(e){e.exports=Ge})(w2);function P2(){const e=l2();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],o=t;for(;o;)r.push(o),o=o.next;return r},subscribe(r){let o=!0,a=n={callback:r,next:null,prev:n};return a.prev?a.prev.next=a:t=a,function(){!o||t===null||(o=!1,a.next?a.next.prev=a.prev:n=a.prev,a.prev?a.prev.next=a.next:t=a.next)}}}}const ay={notify(){},get:()=>[]};function C2(e,t){let n,r=ay;function o(h){return c(),r.subscribe(h)}function a(){r.notify()}function s(){p.onStateChange&&p.onStateChange()}function u(){return!!n}function c(){n||(n=t?t.addNestedSub(s):e.subscribe(s),r=P2())}function f(){n&&(n(),n=void 0,r.clear(),r=ay)}const p={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:s,isSubscribed:u,trySubscribe:c,tryUnsubscribe:f,getListeners:()=>r};return p}const E2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",O2=E2?k.useLayoutEffect:k.useEffect;function R2({store:e,context:t,children:n,serverState:r}){const o=k.useMemo(()=>{const u=C2(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0}},[e,r]),a=k.useMemo(()=>e.getState(),[e]);O2(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const s=t||Eo;return $.createElement(s.Provider,{value:o},n)}function I1(e=Eo){const t=e===Eo?E1:()=>k.useContext(e);return function(){const{store:r}=t();return r}}const T2=I1();function L2(e=Eo){const t=e===Eo?T2:I1(e);return function(){return t().dispatch}}const A2=L2();c2(Tp.useSyncExternalStoreWithSelector);s2(ko.unstable_batchedUpdates);/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function He(){return He=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},He.apply(this,arguments)}var yt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(yt||(yt={}));const sy="popstate";function I2(e){e===void 0&&(e={});function t(r,o){let{pathname:a,search:s,hash:u}=r.location;return Js("",{pathname:a,search:s,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:_l(o)}return N2(t,n,null,e)}function ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ea(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function z2(){return Math.random().toString(36).substr(2,8)}function ly(e,t){return{usr:e.state,key:e.key,idx:t}}function Js(e,t,n,r){return n===void 0&&(n=null),He({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?$r(t):t,{state:n,key:t&&t.key||r||z2()})}function _l(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function $r(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function N2(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:a=!1}=r,s=o.history,u=yt.Pop,c=null,f=p();f==null&&(f=0,s.replaceState(He({},s.state,{idx:f}),""));function p(){return(s.state||{idx:null}).idx}function h(){u=yt.Pop;let P=p(),g=P==null?null:P-f;f=P,c&&c({action:u,location:b.location,delta:g})}function _(P,g){u=yt.Push;let x=Js(b.location,P,g);n&&n(x,P),f=p()+1;let S=ly(x,f),E=b.createHref(x);try{s.pushState(S,"",E)}catch{o.location.assign(E)}a&&c&&c({action:u,location:b.location,delta:1})}function v(P,g){u=yt.Replace;let x=Js(b.location,P,g);n&&n(x,P),f=p();let S=ly(x,f),E=b.createHref(x);s.replaceState(S,"",E),a&&c&&c({action:u,location:b.location,delta:0})}function y(P){let g=o.location.origin!=="null"?o.location.origin:o.location.href,x=typeof P=="string"?P:_l(P);return ze(g,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,g)}let b={get action(){return u},get location(){return e(o,s)},listen(P){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(sy,h),c=P,()=>{o.removeEventListener(sy,h),c=null}},createHref(P){return t(o,P)},createURL:y,encodeLocation(P){let g=y(P);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:_,replace:v,go(P){return s.go(P)}};return b}var wt;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(wt||(wt={}));const B2=new Set(["lazy","caseSensitive","path","id","index","children"]);function M2(e){return e.index===!0}function Ap(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((o,a)=>{let s=[...n,a],u=typeof o.id=="string"?o.id:s.join("-");if(ze(o.index!==!0||!o.children,"Cannot specify children on an index route"),ze(!r[u],'Found a route id collision on id "'+u+`".  Route id's must be globally unique within Data Router usages`),M2(o)){let c=He({},o,t(o),{id:u});return r[u]=c,c}else{let c=He({},o,t(o),{id:u,children:void 0});return r[u]=c,o.children&&(c.children=Ap(o.children,t,s,r)),c}})}function aa(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?$r(t):t,o=gl(r.pathname||"/",n);if(o==null)return null;let a=z1(e);D2(a);let s=null;for(let u=0;s==null&&u<a.length;++u)s=q2(a[u],G2(o));return s}function z1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(a,s,u)=>{let c={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};c.relativePath.startsWith("/")&&(ze(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let f=po([r,c.relativePath]),p=n.concat(c);a.children&&a.children.length>0&&(ze(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),z1(a.children,t,p,f)),!(a.path==null&&!a.index)&&t.push({path:f,score:V2(f,a.index),routesMeta:p})};return e.forEach((a,s)=>{var u;if(a.path===""||!((u=a.path)!=null&&u.includes("?")))o(a,s);else for(let c of N1(a.path))o(a,s,c)}),t}function N1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let s=N1(r.join("/")),u=[];return u.push(...s.map(c=>c===""?a:[a,c].join("/"))),o&&u.push(...s),u.map(c=>e.startsWith("/")&&c===""?"/":c)}function D2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Z2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const j2=/^:\w+$/,F2=3,$2=2,U2=1,W2=10,H2=-2,uy=e=>e==="*";function V2(e,t){let n=e.split("/"),r=n.length;return n.some(uy)&&(r+=H2),t&&(r+=$2),n.filter(o=>!uy(o)).reduce((o,a)=>o+(j2.test(a)?F2:a===""?U2:W2),r)}function Z2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function q2(e,t){let{routesMeta:n}=e,r={},o="/",a=[];for(let s=0;s<n.length;++s){let u=n[s],c=s===n.length-1,f=o==="/"?t:t.slice(o.length)||"/",p=K2({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f);if(!p)return null;Object.assign(r,p.params);let h=u.route;a.push({params:r,pathname:po([o,p.pathname]),pathnameBase:eR(po([o,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(o=po([o,p.pathnameBase]))}return a}function K2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Q2(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],s=a.replace(/(.)\/+$/,"$1"),u=o.slice(1);return{params:r.reduce((f,p,h)=>{if(p==="*"){let _=u[h]||"";s=a.slice(0,a.length-_.length).replace(/(.)\/+$/,"$1")}return f[p]=J2(u[h]||"",p),f},{}),pathname:a,pathnameBase:s,pattern:e}}function Q2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ea(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,u)=>(r.push(u),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function G2(e){try{return decodeURI(e)}catch(t){return Ea(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function J2(e,t){try{return decodeURIComponent(e)}catch(n){return Ea(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function gl(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Y2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?$r(e):e;return{pathname:n?n.startsWith("/")?n:X2(n,t):t,search:tR(r),hash:nR(o)}}function X2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Qf(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function k_(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function B1(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=$r(e):(o=He({},e),ze(!o.pathname||!o.pathname.includes("?"),Qf("?","pathname","search",o)),ze(!o.pathname||!o.pathname.includes("#"),Qf("#","pathname","hash",o)),ze(!o.search||!o.search.includes("#"),Qf("#","search","hash",o)));let a=e===""||o.pathname==="",s=a?"/":o.pathname,u;if(r||s==null)u=n;else{let h=t.length-1;if(s.startsWith("..")){let _=s.split("/");for(;_[0]==="..";)_.shift(),h-=1;o.pathname=_.join("/")}u=h>=0?t[h]:"/"}let c=Y2(o,u),f=s&&s!=="/"&&s.endsWith("/"),p=(a||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(f||p)&&(c.pathname+="/"),c}const po=e=>e.join("/").replace(/\/\/+/g,"/"),eR=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),tR=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,nR=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class P_{constructor(t,n,r,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function M1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const D1=["post","put","patch","delete"],rR=new Set(D1),oR=["get",...D1],iR=new Set(oR),aR=new Set([301,302,303,307,308]),sR=new Set([307,308]),Gf={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},lR={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},cy={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},j1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,F1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",uR=!F1,cR=e=>({hasErrorBoundary:!!e.hasErrorBoundary});function dR(e){ze(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t;if(e.mapRouteProperties)t=e.mapRouteProperties;else if(e.detectErrorBoundary){let J=e.detectErrorBoundary;t=X=>({hasErrorBoundary:J(X)})}else t=cR;let n={},r=Ap(e.routes,t,void 0,n),o,a=e.basename||"/",s=He({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),u=null,c=new Set,f=null,p=null,h=null,_=e.hydrationData!=null,v=aa(r,e.history.location,a),y=null;if(v==null){let J=Nn(404,{pathname:e.history.location.pathname}),{matches:X,route:ae}=gy(r);v=X,y={[ae.id]:J}}let b=!v.some(J=>J.route.lazy)&&(!v.some(J=>J.route.loader)||e.hydrationData!=null),P,g={historyAction:e.history.action,location:e.history.location,matches:v,initialized:b,navigation:Gf,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||y,fetchers:new Map,blockers:new Map},x=yt.Pop,S=!1,E,R=!1,T=!1,N=[],j=[],W=new Map,M=0,H=-1,G=new Map,K=new Set,U=new Map,re=new Map,q=new Map,se=!1;function B(){return u=e.history.listen(J=>{let{action:X,location:ae,delta:ge}=J;if(se){se=!1;return}Ea(q.size===0||ge!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ye=Pi({currentLocation:g.location,nextLocation:ae,historyAction:X});if(ye&&ge!=null){se=!0,e.history.go(ge*-1),qt(ye,{state:"blocked",location:ae,proceed(){qt(ye,{state:"proceeding",proceed:void 0,reset:void 0,location:ae}),e.history.go(ge)},reset(){tt(ye),O({blockers:new Map(P.state.blockers)})}});return}return te(X,ae)}),g.initialized||te(yt.Pop,g.location),P}function Y(){u&&u(),c.clear(),E&&E.abort(),g.fetchers.forEach((J,X)=>de(X)),g.blockers.forEach((J,X)=>tt(X))}function A(J){return c.add(J),()=>c.delete(J)}function O(J){g=He({},g,J),c.forEach(X=>X(g))}function z(J,X){var ae,ge;let ye=g.actionData!=null&&g.navigation.formMethod!=null&&Pr(g.navigation.formMethod)&&g.navigation.state==="loading"&&((ae=J.state)==null?void 0:ae._isRedirect)!==!0,Se;X.actionData?Object.keys(X.actionData).length>0?Se=X.actionData:Se=null:ye?Se=g.actionData:Se=null;let Ce=X.loaderData?_y(g.loaderData,X.loaderData,X.matches||[],X.errors):g.loaderData;for(let[xe]of q)tt(xe);let we=S===!0||g.navigation.formMethod!=null&&Pr(g.navigation.formMethod)&&((ge=J.state)==null?void 0:ge._isRedirect)!==!0;o&&(r=o,o=void 0),O(He({},X,{actionData:Se,loaderData:Ce,historyAction:x,location:J,initialized:!0,navigation:Gf,revalidation:"idle",restoreScrollPosition:mr(J,X.matches||g.matches),preventScrollReset:we,blockers:new Map(g.blockers)})),R||x===yt.Pop||(x===yt.Push?e.history.push(J,J.state):x===yt.Replace&&e.history.replace(J,J.state)),x=yt.Pop,S=!1,R=!1,T=!1,N=[],j=[]}async function D(J,X){if(typeof J=="number"){e.history.go(J);return}let ae=Ip(g.location,g.matches,a,s.v7_prependBasename,J,X?.fromRouteId,X?.relative),{path:ge,submission:ye,error:Se}=dy(s.v7_normalizeFormMethod,!1,ae,X),Ce=g.location,we=Js(g.location,ge,X&&X.state);we=He({},we,e.history.encodeLocation(we));let xe=X&&X.replace!=null?X.replace:void 0,Be=yt.Push;xe===!0?Be=yt.Replace:xe===!1||ye!=null&&Pr(ye.formMethod)&&ye.formAction===g.location.pathname+g.location.search&&(Be=yt.Replace);let We=X&&"preventScrollReset"in X?X.preventScrollReset===!0:void 0,xt=Pi({currentLocation:Ce,nextLocation:we,historyAction:Be});if(xt){qt(xt,{state:"blocked",location:we,proceed(){qt(xt,{state:"proceeding",proceed:void 0,reset:void 0,location:we}),D(J,X)},reset(){tt(xt),O({blockers:new Map(g.blockers)})}});return}return await te(Be,we,{submission:ye,pendingError:Se,preventScrollReset:We,replace:X&&X.replace})}function V(){if(ee(),O({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){te(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}te(x||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function te(J,X,ae){E&&E.abort(),E=null,x=J,R=(ae&&ae.startUninterruptedRevalidation)===!0,Qn(g.location,g.matches),S=(ae&&ae.preventScrollReset)===!0;let ge=o||r,ye=ae&&ae.overrideNavigation,Se=aa(ge,X,a);if(!Se){let ht=Nn(404,{pathname:X.pathname}),{matches:_t,route:Kt}=gy(ge);No(),z(X,{matches:_t,loaderData:{},errors:{[Kt.id]:ht}});return}if(g.initialized&&_R(g.location,X)&&!(ae&&ae.submission&&Pr(ae.submission.formMethod))){z(X,{matches:Se});return}E=new AbortController;let Ce=ds(e.history,X,E.signal,ae&&ae.submission),we,xe;if(ae&&ae.pendingError)xe={[sa(Se).route.id]:ae.pendingError};else if(ae&&ae.submission&&Pr(ae.submission.formMethod)){let ht=await ie(Ce,X,ae.submission,Se,{replace:ae.replace});if(ht.shortCircuited)return;we=ht.pendingActionData,xe=ht.pendingActionError,ye=He({state:"loading",location:X},ae.submission),Ce=new Request(Ce.url,{signal:Ce.signal})}let{shortCircuited:Be,loaderData:We,errors:xt}=await fe(Ce,X,Se,ye,ae&&ae.submission,ae&&ae.fetcherSubmission,ae&&ae.replace,we,xe);Be||(E=null,z(X,He({matches:Se},we?{actionData:we}:{},{loaderData:We,errors:xt})))}async function ie(J,X,ae,ge,ye){ee();let Se=He({state:"submitting",location:X},ae);O({navigation:Se});let Ce,we=zp(ge,X);if(!we.route.action&&!we.route.lazy)Ce={type:wt.error,error:Nn(405,{method:J.method,pathname:X.pathname,routeId:we.route.id})};else if(Ce=await cs("action",J,we,ge,n,t,a),J.signal.aborted)return{shortCircuited:!0};if(pa(Ce)){let xe;return ye&&ye.replace!=null?xe=ye.replace:xe=Ce.location===g.location.pathname+g.location.search,await le(g,Ce,{submission:ae,replace:xe}),{shortCircuited:!0}}if(Rs(Ce)){let xe=sa(ge,we.route.id);return(ye&&ye.replace)!==!0&&(x=yt.Push),{pendingActionData:{},pendingActionError:{[xe.route.id]:Ce.error}}}if(ii(Ce))throw Nn(400,{type:"defer-action"});return{pendingActionData:{[we.route.id]:Ce.data}}}async function fe(J,X,ae,ge,ye,Se,Ce,we,xe){let Be=ge;Be||(Be=He({state:"loading",location:X,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ye));let We=ye||Se?ye||Se:Be.formMethod&&Be.formAction&&Be.formData&&Be.formEncType?{formMethod:Be.formMethod,formAction:Be.formAction,formData:Be.formData,formEncType:Be.formEncType}:void 0,xt=o||r,[ht,_t]=fy(e.history,g,ae,We,X,T,N,j,U,xt,a,we,xe);if(No(Me=>!(ae&&ae.some(pe=>pe.route.id===Me))||ht&&ht.some(pe=>pe.route.id===Me)),ht.length===0&&_t.length===0){let Me=Ne();return z(X,He({matches:ae,loaderData:{},errors:xe||null},we?{actionData:we}:{},Me?{fetchers:new Map(g.fetchers)}:{})),{shortCircuited:!0}}if(!R){_t.forEach(pe=>{let _r=g.fetchers.get(pe.key),Oi={state:"loading",data:_r&&_r.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(pe.key,Oi)});let Me=we||g.actionData;O(He({navigation:Be},Me?Object.keys(Me).length===0?{actionData:null}:{actionData:Me}:{},_t.length>0?{fetchers:new Map(g.fetchers)}:{}))}H=++M,_t.forEach(Me=>{Me.controller&&W.set(Me.key,Me.controller)});let Kt=()=>_t.forEach(Me=>_e(Me.key));E&&E.signal.addEventListener("abort",Kt);let{results:Mo,loaderResults:Fa,fetcherResults:Ci}=await me(g.matches,ae,ht,_t,J);if(J.signal.aborted)return{shortCircuited:!0};E&&E.signal.removeEventListener("abort",Kt),_t.forEach(Me=>W.delete(Me.key));let Gn=vy(Mo);if(Gn)return await le(g,Gn,{replace:Ce}),{shortCircuited:!0};let{loaderData:Ur,errors:$a}=my(g,ae,ht,Fa,xe,_t,Ci,re);re.forEach((Me,pe)=>{Me.subscribe(_r=>{(_r||Me.done)&&re.delete(pe)})});let Ua=Ne(),Wa=$e(H),Ei=Ua||Wa||_t.length>0;return He({loaderData:Ur,errors:$a},Ei?{fetchers:new Map(g.fetchers)}:{})}function be(J){return g.fetchers.get(J)||lR}function Je(J,X,ae,ge){if(uR)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");W.has(J)&&_e(J);let ye=o||r,Se=Ip(g.location,g.matches,a,s.v7_prependBasename,ae,X,ge?.relative),Ce=aa(ye,Se,a);if(!Ce){ce(J,X,Nn(404,{pathname:Se}));return}let{path:we,submission:xe}=dy(s.v7_normalizeFormMethod,!0,Se,ge),Be=zp(Ce,we);if(S=(ge&&ge.preventScrollReset)===!0,xe&&Pr(xe.formMethod)){Ze(J,X,we,Be,Ce,xe);return}U.set(J,{routeId:X,path:we}),Re(J,X,we,Be,Ce,xe)}async function Ze(J,X,ae,ge,ye,Se){if(ee(),U.delete(J),!ge.route.action&&!ge.route.lazy){let It=Nn(405,{method:Se.formMethod,pathname:ae,routeId:X});ce(J,X,It);return}let Ce=g.fetchers.get(J),we=He({state:"submitting"},Se,{data:Ce&&Ce.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(J,we),O({fetchers:new Map(g.fetchers)});let xe=new AbortController,Be=ds(e.history,ae,xe.signal,Se);W.set(J,xe);let We=await cs("action",Be,ge,ye,n,t,a);if(Be.signal.aborted){W.get(J)===xe&&W.delete(J);return}if(pa(We)){W.delete(J),K.add(J);let It=He({state:"loading"},Se,{data:void 0," _hasFetcherDoneAnything ":!0});return g.fetchers.set(J,It),O({fetchers:new Map(g.fetchers)}),le(g,We,{submission:Se,isFetchActionRedirect:!0})}if(Rs(We)){ce(J,X,We.error);return}if(ii(We))throw Nn(400,{type:"defer-action"});let xt=g.navigation.location||g.location,ht=ds(e.history,xt,xe.signal),_t=o||r,Kt=g.navigation.state!=="idle"?aa(_t,g.navigation.location,a):g.matches;ze(Kt,"Didn't find any matches after fetcher action");let Mo=++M;G.set(J,Mo);let Fa=He({state:"loading",data:We.data},Se,{" _hasFetcherDoneAnything ":!0});g.fetchers.set(J,Fa);let[Ci,Gn]=fy(e.history,g,Kt,Se,xt,T,N,j,U,_t,a,{[ge.route.id]:We.data},void 0);Gn.filter(It=>It.key!==J).forEach(It=>{let Ri=It.key,Ti=g.fetchers.get(Ri),kl={state:"loading",data:Ti&&Ti.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(Ri,kl),It.controller&&W.set(Ri,It.controller)}),O({fetchers:new Map(g.fetchers)});let Ur=()=>Gn.forEach(It=>_e(It.key));xe.signal.addEventListener("abort",Ur);let{results:$a,loaderResults:Ua,fetcherResults:Wa}=await me(g.matches,Kt,Ci,Gn,ht);if(xe.signal.aborted)return;xe.signal.removeEventListener("abort",Ur),G.delete(J),W.delete(J),Gn.forEach(It=>W.delete(It.key));let Ei=vy($a);if(Ei)return le(g,Ei);let{loaderData:Me,errors:pe}=my(g,g.matches,Ci,Ua,void 0,Gn,Wa,re),_r={state:"idle",data:We.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(J,_r);let Oi=$e(Mo);g.navigation.state==="loading"&&Mo>H?(ze(x,"Expected pending action"),E&&E.abort(),z(g.navigation.location,{matches:Kt,loaderData:Me,errors:pe,fetchers:new Map(g.fetchers)})):(O(He({errors:pe,loaderData:_y(g.loaderData,Me,Kt,pe)},Oi?{fetchers:new Map(g.fetchers)}:{})),T=!1)}async function Re(J,X,ae,ge,ye,Se){let Ce=g.fetchers.get(J),we=He({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Se,{data:Ce&&Ce.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(J,we),O({fetchers:new Map(g.fetchers)});let xe=new AbortController,Be=ds(e.history,ae,xe.signal);W.set(J,xe);let We=await cs("loader",Be,ge,ye,n,t,a);if(ii(We)&&(We=await H1(We,Be.signal,!0)||We),W.get(J)===xe&&W.delete(J),Be.signal.aborted)return;if(pa(We)){K.add(J),await le(g,We);return}if(Rs(We)){let ht=sa(g.matches,X);g.fetchers.delete(J),O({fetchers:new Map(g.fetchers),errors:{[ht.route.id]:We.error}});return}ze(!ii(We),"Unhandled fetcher deferred data");let xt={state:"idle",data:We.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(J,xt),O({fetchers:new Map(g.fetchers)})}async function le(J,X,ae){var ge;let{submission:ye,replace:Se,isFetchActionRedirect:Ce}=ae===void 0?{}:ae;X.revalidate&&(T=!0);let we=Js(J.location,X.location,He({_isRedirect:!0},Ce?{_isFetchActionRedirect:!0}:{}));if(ze(we,"Expected a location on the redirect navigation"),j1.test(X.location)&&F1&&typeof((ge=window)==null?void 0:ge.location)<"u"){let _t=e.history.createURL(X.location),Kt=gl(_t.pathname,a)==null;if(window.location.origin!==_t.origin||Kt){Se?window.location.replace(X.location):window.location.assign(X.location);return}}E=null;let xe=Se===!0?yt.Replace:yt.Push,{formMethod:Be,formAction:We,formEncType:xt,formData:ht}=J.navigation;!ye&&Be&&We&&ht&&xt&&(ye={formMethod:Be,formAction:We,formEncType:xt,formData:ht}),sR.has(X.status)&&ye&&Pr(ye.formMethod)?await te(xe,we,{submission:He({},ye,{formAction:X.location}),preventScrollReset:S}):Ce?await te(xe,we,{overrideNavigation:{state:"loading",location:we,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:ye,preventScrollReset:S}):await te(xe,we,{overrideNavigation:{state:"loading",location:we,formMethod:ye?ye.formMethod:void 0,formAction:ye?ye.formAction:void 0,formEncType:ye?ye.formEncType:void 0,formData:ye?ye.formData:void 0},preventScrollReset:S})}async function me(J,X,ae,ge,ye){let Se=await Promise.all([...ae.map(xe=>cs("loader",ye,xe,X,n,t,a)),...ge.map(xe=>xe.matches&&xe.match&&xe.controller?cs("loader",ds(e.history,xe.path,xe.controller.signal),xe.match,xe.matches,n,t,a):{type:wt.error,error:Nn(404,{pathname:xe.path})})]),Ce=Se.slice(0,ae.length),we=Se.slice(ae.length);return await Promise.all([yy(J,ae,Ce,Ce.map(()=>ye.signal),!1,g.loaderData),yy(J,ge.map(xe=>xe.match),we,ge.map(xe=>xe.controller?xe.controller.signal:null),!0)]),{results:Se,loaderResults:Ce,fetcherResults:we}}function ee(){T=!0,N.push(...No()),U.forEach((J,X)=>{W.has(X)&&(j.push(X),_e(X))})}function ce(J,X,ae){let ge=sa(g.matches,X);de(J),O({errors:{[ge.route.id]:ae},fetchers:new Map(g.fetchers)})}function de(J){W.has(J)&&_e(J),U.delete(J),G.delete(J),K.delete(J),g.fetchers.delete(J)}function _e(J){let X=W.get(J);ze(X,"Expected fetch controller: "+J),X.abort(),W.delete(J)}function ke(J){for(let X of J){let ge={state:"idle",data:be(X).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(X,ge)}}function Ne(){let J=[],X=!1;for(let ae of K){let ge=g.fetchers.get(ae);ze(ge,"Expected fetcher: "+ae),ge.state==="loading"&&(K.delete(ae),J.push(ae),X=!0)}return ke(J),X}function $e(J){let X=[];for(let[ae,ge]of G)if(ge<J){let ye=g.fetchers.get(ae);ze(ye,"Expected fetcher: "+ae),ye.state==="loading"&&(_e(ae),G.delete(ae),X.push(ae))}return ke(X),X.length>0}function Ye(J,X){let ae=g.blockers.get(J)||cy;return q.get(J)!==X&&q.set(J,X),ae}function tt(J){g.blockers.delete(J),q.delete(J)}function qt(J,X){let ae=g.blockers.get(J)||cy;ze(ae.state==="unblocked"&&X.state==="blocked"||ae.state==="blocked"&&X.state==="blocked"||ae.state==="blocked"&&X.state==="proceeding"||ae.state==="blocked"&&X.state==="unblocked"||ae.state==="proceeding"&&X.state==="unblocked","Invalid blocker state transition: "+ae.state+" -> "+X.state),g.blockers.set(J,X),O({blockers:new Map(g.blockers)})}function Pi(J){let{currentLocation:X,nextLocation:ae,historyAction:ge}=J;if(q.size===0)return;q.size>1&&Ea(!1,"A router only supports one blocker at a time");let ye=Array.from(q.entries()),[Se,Ce]=ye[ye.length-1],we=g.blockers.get(Se);if(!(we&&we.state==="proceeding")&&Ce({currentLocation:X,nextLocation:ae,historyAction:ge}))return Se}function No(J){let X=[];return re.forEach((ae,ge)=>{(!J||J(ge))&&(ae.cancel(),X.push(ge),re.delete(ge))}),X}function En(J,X,ae){if(f=J,h=X,p=ae||(ge=>ge.key),!_&&g.navigation===Gf){_=!0;let ge=mr(g.location,g.matches);ge!=null&&O({restoreScrollPosition:ge})}return()=>{f=null,h=null,p=null}}function Qn(J,X){if(f&&p&&h){let ae=X.map(ye=>by(ye,g.loaderData)),ge=p(J,ae)||J.key;f[ge]=h()}}function mr(J,X){if(f&&p&&h){let ae=X.map(Se=>by(Se,g.loaderData)),ge=p(J,ae)||J.key,ye=f[ge];if(typeof ye=="number")return ye}return null}function Bo(J){n={},o=Ap(J,t,void 0,n)}return P={get basename(){return a},get state(){return g},get routes(){return r},initialize:B,subscribe:A,enableScrollRestoration:En,navigate:D,fetch:Je,revalidate:V,createHref:J=>e.history.createHref(J),encodeLocation:J=>e.history.encodeLocation(J),getFetcher:be,deleteFetcher:de,dispose:Y,getBlocker:Ye,deleteBlocker:tt,_internalFetchControllers:W,_internalActiveDeferreds:re,_internalSetRoutes:Bo},P}function fR(e){return e!=null&&"formData"in e}function Ip(e,t,n,r,o,a,s){let u,c;if(a!=null&&s!=="path"){u=[];for(let p of t)if(u.push(p),p.route.id===a){c=p;break}}else u=t,c=t[t.length-1];let f=B1(o||".",k_(u).map(p=>p.pathnameBase),gl(e.pathname,n)||e.pathname,s==="path");return o==null&&(f.search=e.search,f.hash=e.hash),(o==null||o===""||o===".")&&c&&c.route.index&&!C_(f.search)&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(f.pathname=f.pathname==="/"?n:po([n,f.pathname])),_l(f)}function dy(e,t,n,r){if(!r||!fR(r))return{path:n};if(r.formMethod&&!yR(r.formMethod))return{path:n,error:Nn(405,{method:r.formMethod})};let o;if(r.formData){let u=r.formMethod||"get";if(o={formMethod:e?u.toUpperCase():u.toLowerCase(),formAction:W1(n),formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:r.formData},Pr(o.formMethod))return{path:n,submission:o}}let a=$r(n),s=U1(r.formData);return t&&a.search&&C_(a.search)&&s.append("index",""),a.search="?"+s,{path:_l(a),submission:o}}function hR(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function fy(e,t,n,r,o,a,s,u,c,f,p,h,_){let v=_?Object.values(_)[0]:h?Object.values(h)[0]:void 0,y=e.createURL(t.location),b=e.createURL(o),P=_?Object.keys(_)[0]:void 0,x=hR(n,P).filter((E,R)=>{if(E.route.lazy)return!0;if(E.route.loader==null)return!1;if(pR(t.loaderData,t.matches[R],E)||s.some(j=>j===E.route.id))return!0;let T=t.matches[R],N=E;return hy(E,He({currentUrl:y,currentParams:T.params,nextUrl:b,nextParams:N.params},r,{actionResult:v,defaultShouldRevalidate:a||y.pathname+y.search===b.pathname+b.search||y.search!==b.search||$1(T,N)}))}),S=[];return c.forEach((E,R)=>{if(!n.some(W=>W.route.id===E.routeId))return;let T=aa(f,E.path,p);if(!T){S.push({key:R,routeId:E.routeId,path:E.path,matches:null,match:null,controller:null});return}let N=zp(T,E.path);if(u.includes(R)){S.push({key:R,routeId:E.routeId,path:E.path,matches:T,match:N,controller:new AbortController});return}hy(N,He({currentUrl:y,currentParams:t.matches[t.matches.length-1].params,nextUrl:b,nextParams:n[n.length-1].params},r,{actionResult:v,defaultShouldRevalidate:a}))&&S.push({key:R,routeId:E.routeId,path:E.path,matches:T,match:N,controller:new AbortController})}),[x,S]}function pR(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function $1(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function hy(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function py(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];ze(o,"No route found in manifest");let a={};for(let s in r){let c=o[s]!==void 0&&s!=="hasErrorBoundary";Ea(!c,'Route "'+o.id+'" has a static property "'+s+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+s+'" will be ignored.')),!c&&!B2.has(s)&&(a[s]=r[s])}Object.assign(o,a),Object.assign(o,He({},t(o),{lazy:void 0}))}async function cs(e,t,n,r,o,a,s,u,c,f){u===void 0&&(u=!1),c===void 0&&(c=!1);let p,h,_,v=P=>{let g,x=new Promise((S,E)=>g=E);return _=()=>g(),t.signal.addEventListener("abort",_),Promise.race([P({request:t,params:n.params,context:f}),x])};try{let P=n.route[e];if(n.route.lazy)if(P)h=(await Promise.all([v(P),py(n.route,a,o)]))[0];else if(await py(n.route,a,o),P=n.route[e],P)h=await v(P);else if(e==="action"){let g=new URL(t.url),x=g.pathname+g.search;throw Nn(405,{method:t.method,pathname:x,routeId:n.route.id})}else return{type:wt.data,data:void 0};else if(P)h=await v(P);else{let g=new URL(t.url),x=g.pathname+g.search;throw Nn(404,{pathname:x})}ze(h!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(P){p=wt.error,h=P}finally{_&&t.signal.removeEventListener("abort",_)}if(vR(h)){let P=h.status;if(aR.has(P)){let S=h.headers.get("Location");if(ze(S,"Redirects returned/thrown from loaders/actions must have a Location header"),!j1.test(S))S=Ip(new URL(t.url),r.slice(0,r.indexOf(n)+1),s,!0,S);else if(!u){let E=new URL(t.url),R=S.startsWith("//")?new URL(E.protocol+S):new URL(S),T=gl(R.pathname,s)!=null;R.origin===E.origin&&T&&(S=R.pathname+R.search+R.hash)}if(u)throw h.headers.set("Location",S),h;return{type:wt.redirect,status:P,location:S,revalidate:h.headers.get("X-Remix-Revalidate")!==null}}if(c)throw{type:p||wt.data,response:h};let g,x=h.headers.get("Content-Type");return x&&/\bapplication\/json\b/.test(x)?g=await h.json():g=await h.text(),p===wt.error?{type:p,error:new P_(P,h.statusText,g),headers:h.headers}:{type:wt.data,data:g,statusCode:h.status,headers:h.headers}}if(p===wt.error)return{type:p,error:h};if(gR(h)){var y,b;return{type:wt.deferred,deferredData:h,statusCode:(y=h.init)==null?void 0:y.status,headers:((b=h.init)==null?void 0:b.headers)&&new Headers(h.init.headers)}}return{type:wt.data,data:h}}function ds(e,t,n,r){let o=e.createURL(W1(t)).toString(),a={signal:n};if(r&&Pr(r.formMethod)){let{formMethod:s,formEncType:u,formData:c}=r;a.method=s.toUpperCase(),a.body=u==="application/x-www-form-urlencoded"?U1(c):c}return new Request(o,a)}function U1(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function mR(e,t,n,r,o){let a={},s=null,u,c=!1,f={};return n.forEach((p,h)=>{let _=t[h].route.id;if(ze(!pa(p),"Cannot handle redirect results in processLoaderData"),Rs(p)){let v=sa(e,_),y=p.error;r&&(y=Object.values(r)[0],r=void 0),s=s||{},s[v.route.id]==null&&(s[v.route.id]=y),a[_]=void 0,c||(c=!0,u=M1(p.error)?p.error.status:500),p.headers&&(f[_]=p.headers)}else ii(p)?(o.set(_,p.deferredData),a[_]=p.deferredData.data):a[_]=p.data,p.statusCode!=null&&p.statusCode!==200&&!c&&(u=p.statusCode),p.headers&&(f[_]=p.headers)}),r&&(s=r,a[Object.keys(r)[0]]=void 0),{loaderData:a,errors:s,statusCode:u||200,loaderHeaders:f}}function my(e,t,n,r,o,a,s,u){let{loaderData:c,errors:f}=mR(t,n,r,o,u);for(let p=0;p<a.length;p++){let{key:h,match:_,controller:v}=a[p];ze(s!==void 0&&s[p]!==void 0,"Did not find corresponding fetcher result");let y=s[p];if(!(v&&v.signal.aborted))if(Rs(y)){let b=sa(e.matches,_?.route.id);f&&f[b.route.id]||(f=He({},f,{[b.route.id]:y.error})),e.fetchers.delete(h)}else if(pa(y))ze(!1,"Unhandled fetcher revalidation redirect");else if(ii(y))ze(!1,"Unhandled fetcher deferred data");else{let b={state:"idle",data:y.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(h,b)}}return{loaderData:c,errors:f}}function _y(e,t,n,r){let o=He({},t);for(let a of n){let s=a.route.id;if(t.hasOwnProperty(s)?t[s]!==void 0&&(o[s]=t[s]):e[s]!==void 0&&a.route.loader&&(o[s]=e[s]),r&&r.hasOwnProperty(s))break}return o}function sa(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function gy(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Nn(e,t){let{pathname:n,routeId:r,method:o,type:a}=t===void 0?{}:t,s="Unknown Server Error",u="Unknown @remix-run/router error";return e===400?(s="Bad Request",o&&n&&r?u="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a==="defer-action"&&(u="defer() is not supported in actions")):e===403?(s="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):e===404?(s="Not Found",u='No route matches URL "'+n+'"'):e===405&&(s="Method Not Allowed",o&&n&&r?u="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(u='Invalid request method "'+o.toUpperCase()+'"')),new P_(e||500,s,new Error(u),!0)}function vy(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(pa(n))return n}}function W1(e){let t=typeof e=="string"?$r(e):e;return _l(He({},t,{hash:""}))}function _R(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function ii(e){return e.type===wt.deferred}function Rs(e){return e.type===wt.error}function pa(e){return(e&&e.type)===wt.redirect}function gR(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function vR(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function yR(e){return iR.has(e.toLowerCase())}function Pr(e){return rR.has(e.toLowerCase())}async function yy(e,t,n,r,o,a){for(let s=0;s<n.length;s++){let u=n[s],c=t[s];if(!c)continue;let f=e.find(h=>h.route.id===c.route.id),p=f!=null&&!$1(f,c)&&(a&&a[c.route.id])!==void 0;if(ii(u)&&(o||p)){let h=r[s];ze(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await H1(u,h,o).then(_=>{_&&(n[s]=_||n[s])})}}}async function H1(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:wt.data,data:e.deferredData.unwrappedData}}catch(o){return{type:wt.error,error:o}}return{type:wt.data,data:e.deferredData.data}}}function C_(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function by(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function zp(e,t){let n=typeof t=="string"?$r(t).search:t.search;if(e[e.length-1].route.index&&C_(n||""))return e[e.length-1];let r=k_(e);return r[r.length-1]}/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dc(){return dc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dc.apply(this,arguments)}const Rd=k.createContext(null),V1=k.createContext(null),Td=k.createContext(null),Ld=k.createContext(null),Ba=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Z1=k.createContext(null);function Ad(){return k.useContext(Ld)!=null}function q1(){return Ad()||ze(!1),k.useContext(Ld).location}function K1(e){k.useContext(Td).static||k.useLayoutEffect(e)}function bR(){let{isDataRoute:e}=k.useContext(Ba);return e?AR():xR()}function xR(){Ad()||ze(!1);let e=k.useContext(Rd),{basename:t,navigator:n}=k.useContext(Td),{matches:r}=k.useContext(Ba),{pathname:o}=q1(),a=JSON.stringify(k_(r).map(c=>c.pathnameBase)),s=k.useRef(!1);return K1(()=>{s.current=!0}),k.useCallback(function(c,f){if(f===void 0&&(f={}),!s.current)return;if(typeof c=="number"){n.go(c);return}let p=B1(c,JSON.parse(a),o,f.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:po([t,p.pathname])),(f.replace?n.replace:n.push)(p,f.state,f)},[t,n,a,o,e])}function wR(e,t,n){Ad()||ze(!1);let{navigator:r}=k.useContext(Td),{matches:o}=k.useContext(Ba),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let c=q1(),f;if(t){var p;let b=typeof t=="string"?$r(t):t;u==="/"||(p=b.pathname)!=null&&p.startsWith(u)||ze(!1),f=b}else f=c;let h=f.pathname||"/",_=u==="/"?h:h.slice(u.length)||"/",v=aa(e,{pathname:_}),y=ER(v&&v.map(b=>Object.assign({},b,{params:Object.assign({},s,b.params),pathname:po([u,r.encodeLocation?r.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?u:po([u,r.encodeLocation?r.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),o,n);return t&&y?k.createElement(Ld.Provider,{value:{location:dc({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:yt.Pop}},y):y}function SR(){let e=LR(),t=M1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:o},n):null,a)}const kR=k.createElement(SR,null);class PR extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?k.createElement(Ba.Provider,{value:this.props.routeContext},k.createElement(Z1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function CR(e){let{routeContext:t,match:n,children:r}=e,o=k.useContext(Rd);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Ba.Provider,{value:t},r)}function ER(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let a=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let u=a.findIndex(c=>c.route.id&&s?.[c.route.id]);u>=0||ze(!1),a=a.slice(0,Math.min(a.length,u+1))}return a.reduceRight((u,c,f)=>{let p=c.route.id?s?.[c.route.id]:null,h=null;n&&(h=c.route.errorElement||kR);let _=t.concat(a.slice(0,f+1)),v=()=>{let y;return p?y=h:c.route.Component?y=k.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=u,k.createElement(CR,{match:c,routeContext:{outlet:u,matches:_,isDataRoute:n!=null},children:y})};return n&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?k.createElement(PR,{location:n.location,revalidation:n.revalidation,component:h,error:p,children:v(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):v()},null)}var Np;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Np||(Np={}));var Ys;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Ys||(Ys={}));function OR(e){let t=k.useContext(Rd);return t||ze(!1),t}function RR(e){let t=k.useContext(V1);return t||ze(!1),t}function TR(e){let t=k.useContext(Ba);return t||ze(!1),t}function Q1(e){let t=TR(),n=t.matches[t.matches.length-1];return n.route.id||ze(!1),n.route.id}function LR(){var e;let t=k.useContext(Z1),n=RR(Ys.UseRouteError),r=Q1(Ys.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function AR(){let{router:e}=OR(Np.UseNavigateStable),t=Q1(Ys.UseNavigateStable),n=k.useRef(!1);return K1(()=>{n.current=!0}),k.useCallback(function(o,a){a===void 0&&(a={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,dc({fromRouteId:t},a)))},[e,t])}function IR(e){let{fallbackElement:t,router:n}=e,[r,o]=k.useState(n.state);k.useLayoutEffect(()=>n.subscribe(o),[n,o]);let a=k.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:c=>n.navigate(c),push:(c,f,p)=>n.navigate(c,{state:f,preventScrollReset:p?.preventScrollReset}),replace:(c,f,p)=>n.navigate(c,{replace:!0,state:f,preventScrollReset:p?.preventScrollReset})}),[n]),s=n.basename||"/",u=k.useMemo(()=>({router:n,navigator:a,static:!1,basename:s}),[n,a,s]);return k.createElement(k.Fragment,null,k.createElement(Rd.Provider,{value:u},k.createElement(V1.Provider,{value:r},k.createElement(NR,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:a},n.state.initialized?k.createElement(zR,{routes:n.routes,state:r}):t))),null)}function zR(e){let{routes:t,state:n}=e;return wR(t,void 0,n)}function NR(e){let{basename:t="/",children:n=null,location:r,navigationType:o=yt.Pop,navigator:a,static:s=!1}=e;Ad()&&ze(!1);let u=t.replace(/^\/*/,"/"),c=k.useMemo(()=>({basename:u,navigator:a,static:s}),[u,a,s]);typeof r=="string"&&(r=$r(r));let{pathname:f="/",search:p="",hash:h="",state:_=null,key:v="default"}=r,y=k.useMemo(()=>{let b=gl(f,u);return b==null?null:{location:{pathname:b,search:p,hash:h,state:_,key:v},navigationType:o}},[u,f,p,h,_,v,o]);return y==null?null:k.createElement(Td.Provider,{value:c},k.createElement(Ld.Provider,{children:n,value:y}))}var xy;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(xy||(xy={}));new Promise(()=>{});function BR(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:k.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:k.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fc(){return fc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fc.apply(this,arguments)}function MR(e,t){return dR({basename:t?.basename,future:fc({},t?.future,{v7_prependBasename:!0}),history:I2({window:t?.window}),hydrationData:t?.hydrationData||DR(),routes:e,mapRouteProperties:BR}).initialize()}function DR(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=fc({},t,{errors:jR(t.errors)})),t}function jR(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&o.__type==="RouteErrorResponse")n[r]=new P_(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){let a=new Error(o.message);a.stack="",n[r]=a}else n[r]=o;return n}var wy;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(wy||(wy={}));var Sy;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Sy||(Sy={}));function ln(e){return ln=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ln(e)}function FR(e,t){if(ln(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ln(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function G1(e){var t=FR(e,"string");return ln(t)==="symbol"?t:String(t)}function Zn(e,t,n){return t=G1(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $R(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];typeof n[0]=="string"&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var ky={};function Bp(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&ky[t[0]]||(typeof t[0]=="string"&&(ky[t[0]]=new Date),$R.apply(void 0,t))}var J1=function(t,n){return function(){if(t.isInitialized)n();else{var r=function o(){setTimeout(function(){t.off("initialized",o)},0),n()};t.on("initialized",r)}}};function Py(e,t,n){e.loadNamespaces(t,J1(e,n))}function Cy(e,t,n,r){typeof n=="string"&&(n=[n]),n.forEach(function(o){e.options.ns.indexOf(o)<0&&e.options.ns.push(o)}),e.loadLanguages(t,J1(e,r))}function UR(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.languages[0],o=t.options?t.options.fallbackLng:!1,a=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;var s=function(c,f){var p=t.services.backendConnector.state["".concat(c,"|").concat(f)];return p===-1||p===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!s(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||s(r,e)&&(!o||s(a,e)))}function WR(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!t.languages||!t.languages.length)return Bp("i18n.languages were undefined or empty",t.languages),!0;var r=t.options.ignoreJSONStructure!==void 0;return r?t.hasLoadedNamespace(e,{lng:n.lng,precheck:function(a,s){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!s(a.isLanguageChangingTo,e))return!1}}):UR(e,t,n)}var HR=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,VR={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},ZR=function(t){return VR[t]},qR=function(t){return t.replace(HR,ZR)};function Ey(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Oy(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ey(Object(n),!0).forEach(function(r){Zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ey(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Mp={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:qR};function KR(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Mp=Oy(Oy({},Mp),e)}function QR(){return Mp}var Y1;function GR(e){Y1=e}function JR(){return Y1}function qn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ry(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,G1(r.key),r)}}function Kn(e,t,n){return t&&Ry(e.prototype,t),n&&Ry(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var YR={type:"3rdParty",init:function(t){KR(t.options.react),GR(t)}},XR=k.createContext(),eT=function(){function e(){qn(this,e),this.usedNamespaces={}}return Kn(e,[{key:"addUsedNamespaces",value:function(n){var r=this;n.forEach(function(o){r.usedNamespaces[o]||(r.usedNamespaces[o]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function X1(e){if(Array.isArray(e))return e}function tT(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,a,s,u=[],c=!0,f=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(p){f=!0,o=p}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw o}}return u}}function Ty(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function eS(e,t){if(e){if(typeof e=="string")return Ty(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ty(e,t)}}function tS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nT(e,t){return X1(e)||tT(e,t)||eS(e,t)||tS()}function Ly(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Jf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ly(Object(n),!0).forEach(function(r){Zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ly(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var rT=function(t,n){var r=k.useRef();return k.useEffect(function(){r.current=n?r.current:t},[t,n]),r.current};function vl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.i18n,r=k.useContext(XR)||{},o=r.i18n,a=r.defaultNS,s=n||o||JR();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new eT),!s){Bp("You will need to pass in an i18next instance by using initReactI18next");var u=function(W,M){return typeof M=="string"?M:M&&ln(M)==="object"&&typeof M.defaultValue=="string"?M.defaultValue:Array.isArray(W)?W[W.length-1]:W},c=[u,{},!1];return c.t=u,c.i18n={},c.ready=!1,c}s.options.react&&s.options.react.wait!==void 0&&Bp("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var f=Jf(Jf(Jf({},QR()),s.options.react),t),p=f.useSuspense,h=f.keyPrefix,_=e||a||s.options&&s.options.defaultNS;_=typeof _=="string"?[_]:_||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(_);var v=(s.isInitialized||s.initializedStoreOnce)&&_.every(function(j){return WR(j,s,f)});function y(){return s.getFixedT(t.lng||null,f.nsMode==="fallback"?_:_[0],h)}var b=k.useState(y),P=nT(b,2),g=P[0],x=P[1],S=_.join();t.lng&&(S="".concat(t.lng).concat(S));var E=rT(S),R=k.useRef(!0);k.useEffect(function(){var j=f.bindI18n,W=f.bindI18nStore;R.current=!0,!v&&!p&&(t.lng?Cy(s,t.lng,_,function(){R.current&&x(y)}):Py(s,_,function(){R.current&&x(y)})),v&&E&&E!==S&&R.current&&x(y);function M(){R.current&&x(y)}return j&&s&&s.on(j,M),W&&s&&s.store.on(W,M),function(){R.current=!1,j&&s&&j.split(" ").forEach(function(H){return s.off(H,M)}),W&&s&&W.split(" ").forEach(function(H){return s.store.off(H,M)})}},[s,S]);var T=k.useRef(!0);k.useEffect(function(){R.current&&!T.current&&x(y),T.current=!1},[s,h]);var N=[g,s,v];if(N.t=g,N.i18n=s,N.ready=v,v||!v&&!p)return N;throw new Promise(function(j){t.lng?Cy(s,t.lng,_,function(){return j()}):Py(s,_,function(){return j()})})}function hc(e,t){return hc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},hc(e,t)}function yl(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,hc(e,t)}var bl=function(){function e(){this.listeners=[]}var t=e.prototype;return t.subscribe=function(r){var o=this,a=r||function(){};return this.listeners.push(a),this.onSubscribe(),function(){o.listeners=o.listeners.filter(function(s){return s!==a}),o.onUnsubscribe()}},t.hasListeners=function(){return this.listeners.length>0},t.onSubscribe=function(){},t.onUnsubscribe=function(){},e}(),pc=typeof window>"u";function jt(){}function oT(e,t){return typeof e=="function"?e(t):e}function Dp(e){return typeof e=="number"&&e>=0&&e!==1/0}function mc(e){return Array.isArray(e)?e:[e]}function nS(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Eu(e,t,n){return Id(e)?typeof t=="function"?Ve({},n,{queryKey:e,queryFn:t}):Ve({},t,{queryKey:e}):e}function Jr(e,t,n){return Id(e)?[Ve({},t,{queryKey:e}),n]:[e||{},t]}function iT(e,t){if(e===!0&&t===!0||e==null&&t==null)return"all";if(e===!1&&t===!1)return"none";var n=e??!t;return n?"active":"inactive"}function Ay(e,t){var n=e.active,r=e.exact,o=e.fetching,a=e.inactive,s=e.predicate,u=e.queryKey,c=e.stale;if(Id(u)){if(r){if(t.queryHash!==E_(u,t.options))return!1}else if(!_c(t.queryKey,u))return!1}var f=iT(n,a);if(f==="none")return!1;if(f!=="all"){var p=t.isActive();if(f==="active"&&!p||f==="inactive"&&p)return!1}return!(typeof c=="boolean"&&t.isStale()!==c||typeof o=="boolean"&&t.isFetching()!==o||s&&!s(t))}function Iy(e,t){var n=e.exact,r=e.fetching,o=e.predicate,a=e.mutationKey;if(Id(a)){if(!t.options.mutationKey)return!1;if(n){if(ai(t.options.mutationKey)!==ai(a))return!1}else if(!_c(t.options.mutationKey,a))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||o&&!o(t))}function E_(e,t){var n=t?.queryKeyHashFn||ai;return n(e)}function ai(e){var t=mc(e);return aT(t)}function aT(e){return JSON.stringify(e,function(t,n){return jp(n)?Object.keys(n).sort().reduce(function(r,o){return r[o]=n[o],r},{}):n})}function _c(e,t){return rS(mc(e),mc(t))}function rS(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(function(n){return!rS(e[n],t[n])}):!1}function gc(e,t){if(e===t)return e;var n=Array.isArray(e)&&Array.isArray(t);if(n||jp(e)&&jp(t)){for(var r=n?e.length:Object.keys(e).length,o=n?t:Object.keys(t),a=o.length,s=n?[]:{},u=0,c=0;c<a;c++){var f=n?c:o[c];s[f]=gc(e[f],t[f]),s[f]===e[f]&&u++}return r===a&&u===r?e:s}return t}function sT(e,t){if(e&&!t||t&&!e)return!1;for(var n in e)if(e[n]!==t[n])return!1;return!0}function jp(e){if(!zy(e))return!1;var t=e.constructor;if(typeof t>"u")return!0;var n=t.prototype;return!(!zy(n)||!n.hasOwnProperty("isPrototypeOf"))}function zy(e){return Object.prototype.toString.call(e)==="[object Object]"}function Id(e){return typeof e=="string"||Array.isArray(e)}function lT(e){return new Promise(function(t){setTimeout(t,e)})}function Ny(e){Promise.resolve().then(e).catch(function(t){return setTimeout(function(){throw t})})}function oS(){if(typeof AbortController=="function")return new AbortController}var uT=function(e){yl(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(o){var a;if(!pc&&((a=window)!=null&&a.addEventListener)){var s=function(){return o()};return window.addEventListener("visibilitychange",s,!1),window.addEventListener("focus",s,!1),function(){window.removeEventListener("visibilitychange",s),window.removeEventListener("focus",s)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var o;(o=this.cleanup)==null||o.call(this),this.cleanup=void 0}},n.setEventListener=function(o){var a,s=this;this.setup=o,(a=this.cleanup)==null||a.call(this),this.cleanup=o(function(u){typeof u=="boolean"?s.setFocused(u):s.onFocus()})},n.setFocused=function(o){this.focused=o,o&&this.onFocus()},n.onFocus=function(){this.listeners.forEach(function(o){o()})},n.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},t}(bl),Ts=new uT,cT=function(e){yl(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(o){var a;if(!pc&&((a=window)!=null&&a.addEventListener)){var s=function(){return o()};return window.addEventListener("online",s,!1),window.addEventListener("offline",s,!1),function(){window.removeEventListener("online",s),window.removeEventListener("offline",s)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var o;(o=this.cleanup)==null||o.call(this),this.cleanup=void 0}},n.setEventListener=function(o){var a,s=this;this.setup=o,(a=this.cleanup)==null||a.call(this),this.cleanup=o(function(u){typeof u=="boolean"?s.setOnline(u):s.onOnline()})},n.setOnline=function(o){this.online=o,o&&this.onOnline()},n.onOnline=function(){this.listeners.forEach(function(o){o()})},n.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},t}(bl),Ou=new cT;function dT(e){return Math.min(1e3*Math.pow(2,e),3e4)}function vc(e){return typeof e?.cancel=="function"}var iS=function(t){this.revert=t?.revert,this.silent=t?.silent};function Ru(e){return e instanceof iS}var aS=function(t){var n=this,r=!1,o,a,s,u;this.abort=t.abort,this.cancel=function(_){return o?.(_)},this.cancelRetry=function(){r=!0},this.continueRetry=function(){r=!1},this.continue=function(){return a?.()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(_,v){s=_,u=v});var c=function(v){n.isResolved||(n.isResolved=!0,t.onSuccess==null||t.onSuccess(v),a?.(),s(v))},f=function(v){n.isResolved||(n.isResolved=!0,t.onError==null||t.onError(v),a?.(),u(v))},p=function(){return new Promise(function(v){a=v,n.isPaused=!0,t.onPause==null||t.onPause()}).then(function(){a=void 0,n.isPaused=!1,t.onContinue==null||t.onContinue()})},h=function _(){if(!n.isResolved){var v;try{v=t.fn()}catch(y){v=Promise.reject(y)}o=function(b){if(!n.isResolved&&(f(new iS(b)),n.abort==null||n.abort(),vc(v)))try{v.cancel()}catch{}},n.isTransportCancelable=vc(v),Promise.resolve(v).then(c).catch(function(y){var b,P;if(!n.isResolved){var g=(b=t.retry)!=null?b:3,x=(P=t.retryDelay)!=null?P:dT,S=typeof x=="function"?x(n.failureCount,y):x,E=g===!0||typeof g=="number"&&n.failureCount<g||typeof g=="function"&&g(n.failureCount,y);if(r||!E){f(y);return}n.failureCount++,t.onFail==null||t.onFail(n.failureCount,y),lT(S).then(function(){if(!Ts.isFocused()||!Ou.isOnline())return p()}).then(function(){r?f(y):_()})}})}};h()},fT=function(){function e(){this.queue=[],this.transactions=0,this.notifyFn=function(n){n()},this.batchNotifyFn=function(n){n()}}var t=e.prototype;return t.batch=function(r){var o;this.transactions++;try{o=r()}finally{this.transactions--,this.transactions||this.flush()}return o},t.schedule=function(r){var o=this;this.transactions?this.queue.push(r):Ny(function(){o.notifyFn(r)})},t.batchCalls=function(r){var o=this;return function(){for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];o.schedule(function(){r.apply(void 0,s)})}},t.flush=function(){var r=this,o=this.queue;this.queue=[],o.length&&Ny(function(){r.batchNotifyFn(function(){o.forEach(function(a){r.notifyFn(a)})})})},t.setNotifyFunction=function(r){this.notifyFn=r},t.setBatchNotifyFunction=function(r){this.batchNotifyFn=r},e}(),dt=new fT,sS=console;function yc(){return sS}function hT(e){sS=e}var pT=function(){function e(n){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.cache=n.cache,this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.initialState=n.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=n.meta,this.scheduleGc()}var t=e.prototype;return t.setOptions=function(r){var o;this.options=Ve({},this.defaultOptions,r),this.meta=r?.meta,this.cacheTime=Math.max(this.cacheTime||0,(o=this.options.cacheTime)!=null?o:5*60*1e3)},t.setDefaultOptions=function(r){this.defaultOptions=r},t.scheduleGc=function(){var r=this;this.clearGcTimeout(),Dp(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){r.optionalRemove()},this.cacheTime))},t.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},t.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},t.setData=function(r,o){var a,s,u=this.state.data,c=oT(r,u);return(a=(s=this.options).isDataEqual)!=null&&a.call(s,u,c)?c=u:this.options.structuralSharing!==!1&&(c=gc(u,c)),this.dispatch({data:c,type:"success",dataUpdatedAt:o?.updatedAt}),c},t.setState=function(r,o){this.dispatch({type:"setState",state:r,setStateOptions:o})},t.cancel=function(r){var o,a=this.promise;return(o=this.retryer)==null||o.cancel(r),a?a.then(jt).catch(jt):Promise.resolve()},t.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},t.reset=function(){this.destroy(),this.setState(this.initialState)},t.isActive=function(){return this.observers.some(function(r){return r.options.enabled!==!1})},t.isFetching=function(){return this.state.isFetching},t.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(r){return r.getCurrentResult().isStale})},t.isStaleByTime=function(r){return r===void 0&&(r=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!nS(this.state.dataUpdatedAt,r)},t.onFocus=function(){var r,o=this.observers.find(function(a){return a.shouldFetchOnWindowFocus()});o&&o.refetch(),(r=this.retryer)==null||r.continue()},t.onOnline=function(){var r,o=this.observers.find(function(a){return a.shouldFetchOnReconnect()});o&&o.refetch(),(r=this.retryer)==null||r.continue()},t.addObserver=function(r){this.observers.indexOf(r)===-1&&(this.observers.push(r),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:r}))},t.removeObserver=function(r){this.observers.indexOf(r)!==-1&&(this.observers=this.observers.filter(function(o){return o!==r}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:r}))},t.getObserversCount=function(){return this.observers.length},t.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},t.fetch=function(r,o){var a=this,s,u,c;if(this.state.isFetching){if(this.state.dataUpdatedAt&&o?.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var f;return(f=this.retryer)==null||f.continueRetry(),this.promise}}if(r&&this.setOptions(r),!this.options.queryFn){var p=this.observers.find(function(x){return x.options.queryFn});p&&this.setOptions(p.options)}var h=mc(this.queryKey),_=oS(),v={queryKey:h,pageParam:void 0,meta:this.meta};Object.defineProperty(v,"signal",{enumerable:!0,get:function(){if(_)return a.abortSignalConsumed=!0,_.signal}});var y=function(){return a.options.queryFn?(a.abortSignalConsumed=!1,a.options.queryFn(v)):Promise.reject("Missing queryFn")},b={fetchOptions:o,options:this.options,queryKey:h,state:this.state,fetchFn:y,meta:this.meta};if((s=this.options.behavior)!=null&&s.onFetch){var P;(P=this.options.behavior)==null||P.onFetch(b)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((u=b.fetchOptions)==null?void 0:u.meta)){var g;this.dispatch({type:"fetch",meta:(g=b.fetchOptions)==null?void 0:g.meta})}return this.retryer=new aS({fn:b.fetchFn,abort:_==null||(c=_.abort)==null?void 0:c.bind(_),onSuccess:function(S){a.setData(S),a.cache.config.onSuccess==null||a.cache.config.onSuccess(S,a),a.cacheTime===0&&a.optionalRemove()},onError:function(S){Ru(S)&&S.silent||a.dispatch({type:"error",error:S}),Ru(S)||(a.cache.config.onError==null||a.cache.config.onError(S,a),yc().error(S)),a.cacheTime===0&&a.optionalRemove()},onFail:function(){a.dispatch({type:"failed"})},onPause:function(){a.dispatch({type:"pause"})},onContinue:function(){a.dispatch({type:"continue"})},retry:b.options.retry,retryDelay:b.options.retryDelay}),this.promise=this.retryer.promise,this.promise},t.dispatch=function(r){var o=this;this.state=this.reducer(this.state,r),dt.batch(function(){o.observers.forEach(function(a){a.onQueryUpdate(r)}),o.cache.notify({query:o,type:"queryUpdated",action:r})})},t.getDefaultState=function(r){var o=typeof r.initialData=="function"?r.initialData():r.initialData,a=typeof r.initialData<"u",s=a?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0,u=typeof o<"u";return{data:o,dataUpdateCount:0,dataUpdatedAt:u?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:u?"success":"idle"}},t.reducer=function(r,o){var a,s;switch(o.type){case"failed":return Ve({},r,{fetchFailureCount:r.fetchFailureCount+1});case"pause":return Ve({},r,{isPaused:!0});case"continue":return Ve({},r,{isPaused:!1});case"fetch":return Ve({},r,{fetchFailureCount:0,fetchMeta:(a=o.meta)!=null?a:null,isFetching:!0,isPaused:!1},!r.dataUpdatedAt&&{error:null,status:"loading"});case"success":return Ve({},r,{data:o.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(s=o.dataUpdatedAt)!=null?s:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var u=o.error;return Ru(u)&&u.revert&&this.revertState?Ve({},this.revertState):Ve({},r,{error:u,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return Ve({},r,{isInvalidated:!0});case"setState":return Ve({},r,o.state);default:return r}},e}(),mT=function(e){yl(t,e);function t(r){var o;return o=e.call(this)||this,o.config=r||{},o.queries=[],o.queriesMap={},o}var n=t.prototype;return n.build=function(o,a,s){var u,c=a.queryKey,f=(u=a.queryHash)!=null?u:E_(c,a),p=this.get(f);return p||(p=new pT({cache:this,queryKey:c,queryHash:f,options:o.defaultQueryOptions(a),state:s,defaultOptions:o.getQueryDefaults(c),meta:a.meta}),this.add(p)),p},n.add=function(o){this.queriesMap[o.queryHash]||(this.queriesMap[o.queryHash]=o,this.queries.push(o),this.notify({type:"queryAdded",query:o}))},n.remove=function(o){var a=this.queriesMap[o.queryHash];a&&(o.destroy(),this.queries=this.queries.filter(function(s){return s!==o}),a===o&&delete this.queriesMap[o.queryHash],this.notify({type:"queryRemoved",query:o}))},n.clear=function(){var o=this;dt.batch(function(){o.queries.forEach(function(a){o.remove(a)})})},n.get=function(o){return this.queriesMap[o]},n.getAll=function(){return this.queries},n.find=function(o,a){var s=Jr(o,a),u=s[0];return typeof u.exact>"u"&&(u.exact=!0),this.queries.find(function(c){return Ay(u,c)})},n.findAll=function(o,a){var s=Jr(o,a),u=s[0];return Object.keys(u).length>0?this.queries.filter(function(c){return Ay(u,c)}):this.queries},n.notify=function(o){var a=this;dt.batch(function(){a.listeners.forEach(function(s){s(o)})})},n.onFocus=function(){var o=this;dt.batch(function(){o.queries.forEach(function(a){a.onFocus()})})},n.onOnline=function(){var o=this;dt.batch(function(){o.queries.forEach(function(a){a.onOnline()})})},t}(bl),_T=function(){function e(n){this.options=Ve({},n.defaultOptions,n.options),this.mutationId=n.mutationId,this.mutationCache=n.mutationCache,this.observers=[],this.state=n.state||gT(),this.meta=n.meta}var t=e.prototype;return t.setState=function(r){this.dispatch({type:"setState",state:r})},t.addObserver=function(r){this.observers.indexOf(r)===-1&&this.observers.push(r)},t.removeObserver=function(r){this.observers=this.observers.filter(function(o){return o!==r})},t.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(jt).catch(jt)):Promise.resolve()},t.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},t.execute=function(){var r=this,o,a=this.state.status==="loading",s=Promise.resolve();return a||(this.dispatch({type:"loading",variables:this.options.variables}),s=s.then(function(){r.mutationCache.config.onMutate==null||r.mutationCache.config.onMutate(r.state.variables,r)}).then(function(){return r.options.onMutate==null?void 0:r.options.onMutate(r.state.variables)}).then(function(u){u!==r.state.context&&r.dispatch({type:"loading",context:u,variables:r.state.variables})})),s.then(function(){return r.executeMutation()}).then(function(u){o=u,r.mutationCache.config.onSuccess==null||r.mutationCache.config.onSuccess(o,r.state.variables,r.state.context,r)}).then(function(){return r.options.onSuccess==null?void 0:r.options.onSuccess(o,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(o,null,r.state.variables,r.state.context)}).then(function(){return r.dispatch({type:"success",data:o}),o}).catch(function(u){return r.mutationCache.config.onError==null||r.mutationCache.config.onError(u,r.state.variables,r.state.context,r),yc().error(u),Promise.resolve().then(function(){return r.options.onError==null?void 0:r.options.onError(u,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(void 0,u,r.state.variables,r.state.context)}).then(function(){throw r.dispatch({type:"error",error:u}),u})})},t.executeMutation=function(){var r=this,o;return this.retryer=new aS({fn:function(){return r.options.mutationFn?r.options.mutationFn(r.state.variables):Promise.reject("No mutationFn found")},onFail:function(){r.dispatch({type:"failed"})},onPause:function(){r.dispatch({type:"pause"})},onContinue:function(){r.dispatch({type:"continue"})},retry:(o=this.options.retry)!=null?o:0,retryDelay:this.options.retryDelay}),this.retryer.promise},t.dispatch=function(r){var o=this;this.state=vT(this.state,r),dt.batch(function(){o.observers.forEach(function(a){a.onMutationUpdate(r)}),o.mutationCache.notify(o)})},e}();function gT(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function vT(e,t){switch(t.type){case"failed":return Ve({},e,{failureCount:e.failureCount+1});case"pause":return Ve({},e,{isPaused:!0});case"continue":return Ve({},e,{isPaused:!1});case"loading":return Ve({},e,{context:t.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:t.variables});case"success":return Ve({},e,{data:t.data,error:null,status:"success",isPaused:!1});case"error":return Ve({},e,{data:void 0,error:t.error,failureCount:e.failureCount+1,isPaused:!1,status:"error"});case"setState":return Ve({},e,t.state);default:return e}}var yT=function(e){yl(t,e);function t(r){var o;return o=e.call(this)||this,o.config=r||{},o.mutations=[],o.mutationId=0,o}var n=t.prototype;return n.build=function(o,a,s){var u=new _T({mutationCache:this,mutationId:++this.mutationId,options:o.defaultMutationOptions(a),state:s,defaultOptions:a.mutationKey?o.getMutationDefaults(a.mutationKey):void 0,meta:a.meta});return this.add(u),u},n.add=function(o){this.mutations.push(o),this.notify(o)},n.remove=function(o){this.mutations=this.mutations.filter(function(a){return a!==o}),o.cancel(),this.notify(o)},n.clear=function(){var o=this;dt.batch(function(){o.mutations.forEach(function(a){o.remove(a)})})},n.getAll=function(){return this.mutations},n.find=function(o){return typeof o.exact>"u"&&(o.exact=!0),this.mutations.find(function(a){return Iy(o,a)})},n.findAll=function(o){return this.mutations.filter(function(a){return Iy(o,a)})},n.notify=function(o){var a=this;dt.batch(function(){a.listeners.forEach(function(s){s(o)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var o=this.mutations.filter(function(a){return a.state.isPaused});return dt.batch(function(){return o.reduce(function(a,s){return a.then(function(){return s.continue().catch(jt)})},Promise.resolve())})},t}(bl);function bT(){return{onFetch:function(t){t.fetchFn=function(){var n,r,o,a,s,u,c=(n=t.fetchOptions)==null||(r=n.meta)==null?void 0:r.refetchPage,f=(o=t.fetchOptions)==null||(a=o.meta)==null?void 0:a.fetchMore,p=f?.pageParam,h=f?.direction==="forward",_=f?.direction==="backward",v=((s=t.state.data)==null?void 0:s.pages)||[],y=((u=t.state.data)==null?void 0:u.pageParams)||[],b=oS(),P=b?.signal,g=y,x=!1,S=t.options.queryFn||function(){return Promise.reject("Missing queryFn")},E=function(U,re,q,se){return g=se?[re].concat(g):[].concat(g,[re]),se?[q].concat(U):[].concat(U,[q])},R=function(U,re,q,se){if(x)return Promise.reject("Cancelled");if(typeof q>"u"&&!re&&U.length)return Promise.resolve(U);var B={queryKey:t.queryKey,signal:P,pageParam:q,meta:t.meta},Y=S(B),A=Promise.resolve(Y).then(function(z){return E(U,q,z,se)});if(vc(Y)){var O=A;O.cancel=Y.cancel}return A},T;if(!v.length)T=R([]);else if(h){var N=typeof p<"u",j=N?p:By(t.options,v);T=R(v,N,j)}else if(_){var W=typeof p<"u",M=W?p:xT(t.options,v);T=R(v,W,M,!0)}else(function(){g=[];var K=typeof t.options.getNextPageParam>"u",U=c&&v[0]?c(v[0],0,v):!0;T=U?R([],K,y[0]):Promise.resolve(E([],y[0],v[0]));for(var re=function(B){T=T.then(function(Y){var A=c&&v[B]?c(v[B],B,v):!0;if(A){var O=K?y[B]:By(t.options,Y);return R(Y,K,O)}return Promise.resolve(E(Y,y[B],v[B]))})},q=1;q<v.length;q++)re(q)})();var H=T.then(function(K){return{pages:K,pageParams:g}}),G=H;return G.cancel=function(){x=!0,b?.abort(),vc(T)&&T.cancel()},H}}}}function By(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function xT(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}var wT=function(){function e(n){n===void 0&&(n={}),this.queryCache=n.queryCache||new mT,this.mutationCache=n.mutationCache||new yT,this.defaultOptions=n.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var t=e.prototype;return t.mount=function(){var r=this;this.unsubscribeFocus=Ts.subscribe(function(){Ts.isFocused()&&Ou.isOnline()&&(r.mutationCache.onFocus(),r.queryCache.onFocus())}),this.unsubscribeOnline=Ou.subscribe(function(){Ts.isFocused()&&Ou.isOnline()&&(r.mutationCache.onOnline(),r.queryCache.onOnline())})},t.unmount=function(){var r,o;(r=this.unsubscribeFocus)==null||r.call(this),(o=this.unsubscribeOnline)==null||o.call(this)},t.isFetching=function(r,o){var a=Jr(r,o),s=a[0];return s.fetching=!0,this.queryCache.findAll(s).length},t.isMutating=function(r){return this.mutationCache.findAll(Ve({},r,{fetching:!0})).length},t.getQueryData=function(r,o){var a;return(a=this.queryCache.find(r,o))==null?void 0:a.state.data},t.getQueriesData=function(r){return this.getQueryCache().findAll(r).map(function(o){var a=o.queryKey,s=o.state,u=s.data;return[a,u]})},t.setQueryData=function(r,o,a){var s=Eu(r),u=this.defaultQueryOptions(s);return this.queryCache.build(this,u).setData(o,a)},t.setQueriesData=function(r,o,a){var s=this;return dt.batch(function(){return s.getQueryCache().findAll(r).map(function(u){var c=u.queryKey;return[c,s.setQueryData(c,o,a)]})})},t.getQueryState=function(r,o){var a;return(a=this.queryCache.find(r,o))==null?void 0:a.state},t.removeQueries=function(r,o){var a=Jr(r,o),s=a[0],u=this.queryCache;dt.batch(function(){u.findAll(s).forEach(function(c){u.remove(c)})})},t.resetQueries=function(r,o,a){var s=this,u=Jr(r,o,a),c=u[0],f=u[1],p=this.queryCache,h=Ve({},c,{active:!0});return dt.batch(function(){return p.findAll(c).forEach(function(_){_.reset()}),s.refetchQueries(h,f)})},t.cancelQueries=function(r,o,a){var s=this,u=Jr(r,o,a),c=u[0],f=u[1],p=f===void 0?{}:f;typeof p.revert>"u"&&(p.revert=!0);var h=dt.batch(function(){return s.queryCache.findAll(c).map(function(_){return _.cancel(p)})});return Promise.all(h).then(jt).catch(jt)},t.invalidateQueries=function(r,o,a){var s,u,c,f=this,p=Jr(r,o,a),h=p[0],_=p[1],v=Ve({},h,{active:(s=(u=h.refetchActive)!=null?u:h.active)!=null?s:!0,inactive:(c=h.refetchInactive)!=null?c:!1});return dt.batch(function(){return f.queryCache.findAll(h).forEach(function(y){y.invalidate()}),f.refetchQueries(v,_)})},t.refetchQueries=function(r,o,a){var s=this,u=Jr(r,o,a),c=u[0],f=u[1],p=dt.batch(function(){return s.queryCache.findAll(c).map(function(_){return _.fetch(void 0,Ve({},f,{meta:{refetchPage:c?.refetchPage}}))})}),h=Promise.all(p).then(jt);return f?.throwOnError||(h=h.catch(jt)),h},t.fetchQuery=function(r,o,a){var s=Eu(r,o,a),u=this.defaultQueryOptions(s);typeof u.retry>"u"&&(u.retry=!1);var c=this.queryCache.build(this,u);return c.isStaleByTime(u.staleTime)?c.fetch(u):Promise.resolve(c.state.data)},t.prefetchQuery=function(r,o,a){return this.fetchQuery(r,o,a).then(jt).catch(jt)},t.fetchInfiniteQuery=function(r,o,a){var s=Eu(r,o,a);return s.behavior=bT(),this.fetchQuery(s)},t.prefetchInfiniteQuery=function(r,o,a){return this.fetchInfiniteQuery(r,o,a).then(jt).catch(jt)},t.cancelMutations=function(){var r=this,o=dt.batch(function(){return r.mutationCache.getAll().map(function(a){return a.cancel()})});return Promise.all(o).then(jt).catch(jt)},t.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},t.executeMutation=function(r){return this.mutationCache.build(this,r).execute()},t.getQueryCache=function(){return this.queryCache},t.getMutationCache=function(){return this.mutationCache},t.getDefaultOptions=function(){return this.defaultOptions},t.setDefaultOptions=function(r){this.defaultOptions=r},t.setQueryDefaults=function(r,o){var a=this.queryDefaults.find(function(s){return ai(r)===ai(s.queryKey)});a?a.defaultOptions=o:this.queryDefaults.push({queryKey:r,defaultOptions:o})},t.getQueryDefaults=function(r){var o;return r?(o=this.queryDefaults.find(function(a){return _c(r,a.queryKey)}))==null?void 0:o.defaultOptions:void 0},t.setMutationDefaults=function(r,o){var a=this.mutationDefaults.find(function(s){return ai(r)===ai(s.mutationKey)});a?a.defaultOptions=o:this.mutationDefaults.push({mutationKey:r,defaultOptions:o})},t.getMutationDefaults=function(r){var o;return r?(o=this.mutationDefaults.find(function(a){return _c(r,a.mutationKey)}))==null?void 0:o.defaultOptions:void 0},t.defaultQueryOptions=function(r){if(r?._defaulted)return r;var o=Ve({},this.defaultOptions.queries,this.getQueryDefaults(r?.queryKey),r,{_defaulted:!0});return!o.queryHash&&o.queryKey&&(o.queryHash=E_(o.queryKey,o)),o},t.defaultQueryObserverOptions=function(r){return this.defaultQueryOptions(r)},t.defaultMutationOptions=function(r){return r?._defaulted?r:Ve({},this.defaultOptions.mutations,this.getMutationDefaults(r?.mutationKey),r,{_defaulted:!0})},t.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},e}(),ST=function(e){yl(t,e);function t(r,o){var a;return a=e.call(this)||this,a.client=r,a.options=o,a.trackedProps=[],a.selectError=null,a.bindMethods(),a.setOptions(o),a}var n=t.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),My(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return Fp(this.currentQuery,this.options,this.options.refetchOnReconnect)},n.shouldFetchOnWindowFocus=function(){return Fp(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(o,a){var s=this.options,u=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(o),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.updateQuery();var c=this.hasListeners();c&&Dy(this.currentQuery,u,this.options,s)&&this.executeFetch(),this.updateResult(a),c&&(this.currentQuery!==u||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.updateStaleTimeout();var f=this.computeRefetchInterval();c&&(this.currentQuery!==u||this.options.enabled!==s.enabled||f!==this.currentRefetchInterval)&&this.updateRefetchInterval(f)},n.getOptimisticResult=function(o){var a=this.client.defaultQueryObserverOptions(o),s=this.client.getQueryCache().build(this.client,a);return this.createResult(s,a)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(o,a){var s=this,u={},c=function(p){s.trackedProps.includes(p)||s.trackedProps.push(p)};return Object.keys(o).forEach(function(f){Object.defineProperty(u,f,{configurable:!1,enumerable:!0,get:function(){return c(f),o[f]}})}),(a.useErrorBoundary||a.suspense)&&c("error"),u},n.getNextResult=function(o){var a=this;return new Promise(function(s,u){var c=a.subscribe(function(f){f.isFetching||(c(),f.isError&&o?.throwOnError?u(f.error):s(f))})})},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(o){return this.fetch(Ve({},o,{meta:{refetchPage:o?.refetchPage}}))},n.fetchOptimistic=function(o){var a=this,s=this.client.defaultQueryObserverOptions(o),u=this.client.getQueryCache().build(this.client,s);return u.fetch().then(function(){return a.createResult(u,s)})},n.fetch=function(o){var a=this;return this.executeFetch(o).then(function(){return a.updateResult(),a.currentResult})},n.executeFetch=function(o){this.updateQuery();var a=this.currentQuery.fetch(this.options,o);return o?.throwOnError||(a=a.catch(jt)),a},n.updateStaleTimeout=function(){var o=this;if(this.clearStaleTimeout(),!(pc||this.currentResult.isStale||!Dp(this.options.staleTime))){var a=nS(this.currentResult.dataUpdatedAt,this.options.staleTime),s=a+1;this.staleTimeoutId=setTimeout(function(){o.currentResult.isStale||o.updateResult()},s)}},n.computeRefetchInterval=function(){var o;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(o=this.options.refetchInterval)!=null?o:!1},n.updateRefetchInterval=function(o){var a=this;this.clearRefetchInterval(),this.currentRefetchInterval=o,!(pc||this.options.enabled===!1||!Dp(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(a.options.refetchIntervalInBackground||Ts.isFocused())&&a.executeFetch()},this.currentRefetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},n.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},n.createResult=function(o,a){var s=this.currentQuery,u=this.options,c=this.currentResult,f=this.currentResultState,p=this.currentResultOptions,h=o!==s,_=h?o.state:this.currentQueryInitialState,v=h?this.currentResult:this.previousQueryResult,y=o.state,b=y.dataUpdatedAt,P=y.error,g=y.errorUpdatedAt,x=y.isFetching,S=y.status,E=!1,R=!1,T;if(a.optimisticResults){var N=this.hasListeners(),j=!N&&My(o,a),W=N&&Dy(o,s,a,u);(j||W)&&(x=!0,b||(S="loading"))}if(a.keepPreviousData&&!y.dataUpdateCount&&v?.isSuccess&&S!=="error")T=v.data,b=v.dataUpdatedAt,S=v.status,E=!0;else if(a.select&&typeof y.data<"u")if(c&&y.data===f?.data&&a.select===this.selectFn)T=this.selectResult;else try{this.selectFn=a.select,T=a.select(y.data),a.structuralSharing!==!1&&(T=gc(c?.data,T)),this.selectResult=T,this.selectError=null}catch(G){yc().error(G),this.selectError=G}else T=y.data;if(typeof a.placeholderData<"u"&&typeof T>"u"&&(S==="loading"||S==="idle")){var M;if(c?.isPlaceholderData&&a.placeholderData===p?.placeholderData)M=c.data;else if(M=typeof a.placeholderData=="function"?a.placeholderData():a.placeholderData,a.select&&typeof M<"u")try{M=a.select(M),a.structuralSharing!==!1&&(M=gc(c?.data,M)),this.selectError=null}catch(G){yc().error(G),this.selectError=G}typeof M<"u"&&(S="success",T=M,R=!0)}this.selectError&&(P=this.selectError,T=this.selectResult,g=Date.now(),S="error");var H={status:S,isLoading:S==="loading",isSuccess:S==="success",isError:S==="error",isIdle:S==="idle",data:T,dataUpdatedAt:b,error:P,errorUpdatedAt:g,failureCount:y.fetchFailureCount,errorUpdateCount:y.errorUpdateCount,isFetched:y.dataUpdateCount>0||y.errorUpdateCount>0,isFetchedAfterMount:y.dataUpdateCount>_.dataUpdateCount||y.errorUpdateCount>_.errorUpdateCount,isFetching:x,isRefetching:x&&S!=="loading",isLoadingError:S==="error"&&y.dataUpdatedAt===0,isPlaceholderData:R,isPreviousData:E,isRefetchError:S==="error"&&y.dataUpdatedAt!==0,isStale:O_(o,a),refetch:this.refetch,remove:this.remove};return H},n.shouldNotifyListeners=function(o,a){if(!a)return!0;var s=this.options,u=s.notifyOnChangeProps,c=s.notifyOnChangePropsExclusions;if(!u&&!c||u==="tracked"&&!this.trackedProps.length)return!0;var f=u==="tracked"?this.trackedProps:u;return Object.keys(o).some(function(p){var h=p,_=o[h]!==a[h],v=f?.some(function(b){return b===p}),y=c?.some(function(b){return b===p});return _&&!y&&(!f||v)})},n.updateResult=function(o){var a=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!sT(this.currentResult,a)){var s={cache:!0};o?.listeners!==!1&&this.shouldNotifyListeners(this.currentResult,a)&&(s.listeners=!0),this.notify(Ve({},s,o))}},n.updateQuery=function(){var o=this.client.getQueryCache().build(this.client,this.options);if(o!==this.currentQuery){var a=this.currentQuery;this.currentQuery=o,this.currentQueryInitialState=o.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(a?.removeObserver(this),o.addObserver(this))}},n.onQueryUpdate=function(o){var a={};o.type==="success"?a.onSuccess=!0:o.type==="error"&&!Ru(o.error)&&(a.onError=!0),this.updateResult(a),this.hasListeners()&&this.updateTimers()},n.notify=function(o){var a=this;dt.batch(function(){o.onSuccess?(a.options.onSuccess==null||a.options.onSuccess(a.currentResult.data),a.options.onSettled==null||a.options.onSettled(a.currentResult.data,null)):o.onError&&(a.options.onError==null||a.options.onError(a.currentResult.error),a.options.onSettled==null||a.options.onSettled(void 0,a.currentResult.error)),o.listeners&&a.listeners.forEach(function(s){s(a.currentResult)}),o.cache&&a.client.getQueryCache().notify({query:a.currentQuery,type:"observerResultsUpdated"})})},t}(bl);function kT(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function My(e,t){return kT(e,t)||e.state.dataUpdatedAt>0&&Fp(e,t,t.refetchOnMount)}function Fp(e,t,n){if(t.enabled!==!1){var r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&O_(e,t)}return!1}function Dy(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&O_(e,n)}function O_(e,t){return e.isStaleByTime(t.staleTime)}var PT=FO.unstable_batchedUpdates;dt.setBatchNotifyFunction(PT);var CT=console;hT(CT);var jy=$.createContext(void 0),lS=$.createContext(!1);function uS(e){return e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=jy),window.ReactQueryClientContext):jy}var ET=function(){var t=$.useContext(uS($.useContext(lS)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},OT=function(t){var n=t.client,r=t.contextSharing,o=r===void 0?!1:r,a=t.children;$.useEffect(function(){return n.mount(),function(){n.unmount()}},[n]);var s=uS(o);return $.createElement(lS.Provider,{value:o},$.createElement(s.Provider,{value:n},a))};function RT(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var TT=$.createContext(RT()),LT=function(){return $.useContext(TT)};function AT(e,t,n){return typeof t=="function"?t.apply(void 0,n):typeof t=="boolean"?t:!!e}function IT(e,t){var n=$.useRef(!1),r=$.useState(0),o=r[1],a=ET(),s=LT(),u=a.defaultQueryObserverOptions(e);u.optimisticResults=!0,u.onError&&(u.onError=dt.batchCalls(u.onError)),u.onSuccess&&(u.onSuccess=dt.batchCalls(u.onSuccess)),u.onSettled&&(u.onSettled=dt.batchCalls(u.onSettled)),u.suspense&&(typeof u.staleTime!="number"&&(u.staleTime=1e3),u.cacheTime===0&&(u.cacheTime=1)),(u.suspense||u.useErrorBoundary)&&(s.isReset()||(u.retryOnMount=!1));var c=$.useState(function(){return new t(a,u)}),f=c[0],p=f.getOptimisticResult(u);if($.useEffect(function(){n.current=!0,s.clearReset();var h=f.subscribe(dt.batchCalls(function(){n.current&&o(function(_){return _+1})}));return f.updateResult(),function(){n.current=!1,h()}},[s,f]),$.useEffect(function(){f.setOptions(u,{listeners:!1})},[u,f]),u.suspense&&p.isLoading)throw f.fetchOptimistic(u).then(function(h){var _=h.data;u.onSuccess==null||u.onSuccess(_),u.onSettled==null||u.onSettled(_,null)}).catch(function(h){s.clearReset(),u.onError==null||u.onError(h),u.onSettled==null||u.onSettled(void 0,h)});if(p.isError&&!s.isReset()&&!p.isFetching&&AT(u.suspense,u.useErrorBoundary,[p.error,f.getCurrentQuery()]))throw p.error;return u.notifyOnChangeProps==="tracked"&&(p=f.trackResult(p,u)),p}function zT(e,t,n){var r=Eu(e,t,n);return IT(r,ST)}function mo(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function zd(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&hc(e,t)}function xl(e,t){if(t&&(ln(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return mo(e)}function hr(e){return hr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},hr(e)}function NT(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function BT(e){return X1(e)||NT(e)||eS(e)||tS()}function Fy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function $y(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Fy(Object(n),!0).forEach(function(r){Zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fy(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var MT={type:"logger",log:function(t){this.output("log",t)},warn:function(t){this.output("warn",t)},error:function(t){this.output("error",t)},output:function(t,n){console&&console[t]&&console[t].apply(console,n)}},DT=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};qn(this,e),this.init(t,n)}return Kn(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=r.prefix||"i18next:",this.logger=n||MT,this.options=r,this.debug=r.debug}},{key:"setDebug",value:function(n){this.debug=n}},{key:"log",value:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return this.forward(r,"log","",!0)}},{key:"warn",value:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return this.forward(r,"warn","",!0)}},{key:"error",value:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return this.forward(r,"error","")}},{key:"deprecate",value:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return this.forward(r,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(n,r,o,a){return a&&!this.debug?null:(typeof n[0]=="string"&&(n[0]="".concat(o).concat(this.prefix," ").concat(n[0])),this.logger[r](n))}},{key:"create",value:function(n){return new e(this.logger,$y($y({},{prefix:"".concat(this.prefix,":").concat(n,":")}),this.options))}},{key:"clone",value:function(n){return n=n||this.options,n.prefix=n.prefix||this.prefix,new e(this.logger,n)}}]),e}(),lr=new DT,Oo=function(){function e(){qn(this,e),this.observers={}}return Kn(e,[{key:"on",value:function(n,r){var o=this;return n.split(" ").forEach(function(a){o.observers[a]=o.observers[a]||[],o.observers[a].push(r)}),this}},{key:"off",value:function(n,r){if(this.observers[n]){if(!r){delete this.observers[n];return}this.observers[n]=this.observers[n].filter(function(o){return o!==r})}}},{key:"emit",value:function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];if(this.observers[n]){var s=[].concat(this.observers[n]);s.forEach(function(c){c.apply(void 0,o)})}if(this.observers["*"]){var u=[].concat(this.observers["*"]);u.forEach(function(c){c.apply(c,[n].concat(o))})}}}]),e}();function fs(){var e,t,n=new Promise(function(r,o){e=r,t=o});return n.resolve=e,n.reject=t,n}function Uy(e){return e==null?"":""+e}function jT(e,t,n){e.forEach(function(r){t[r]&&(n[r]=t[r])})}function R_(e,t,n){function r(u){return u&&u.indexOf("###")>-1?u.replace(/###/g,"."):u}function o(){return!e||typeof e=="string"}for(var a=typeof t!="string"?[].concat(t):t.split(".");a.length>1;){if(o())return{};var s=r(a.shift());!e[s]&&n&&(e[s]=new n),Object.prototype.hasOwnProperty.call(e,s)?e=e[s]:e={}}return o()?{}:{obj:e,k:r(a.shift())}}function Wy(e,t,n){var r=R_(e,t,Object),o=r.obj,a=r.k;o[a]=n}function FT(e,t,n,r){var o=R_(e,t,Object),a=o.obj,s=o.k;a[s]=a[s]||[],r&&(a[s]=a[s].concat(n)),r||a[s].push(n)}function bc(e,t){var n=R_(e,t),r=n.obj,o=n.k;if(r)return r[o]}function $T(e,t,n){var r=bc(e,n);return r!==void 0?r:bc(t,n)}function cS(e,t,n){for(var r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):cS(e[r],t[r],n):e[r]=t[r]);return e}function Fi(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var UT={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function WT(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,function(t){return UT[t]}):e}var Nd=typeof window<"u"&&window.navigator&&typeof window.navigator.userAgentData>"u"&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,HT=[" ",",","?","!",";"];function VT(e,t,n){t=t||"",n=n||"";var r=HT.filter(function(u){return t.indexOf(u)<0&&n.indexOf(u)<0});if(r.length===0)return!0;var o=new RegExp("(".concat(r.map(function(u){return u==="?"?"\\?":u}).join("|"),")")),a=!o.test(e);if(!a){var s=e.indexOf(n);s>0&&!o.test(e.substring(0,s))&&(a=!0)}return a}function xc(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(e){if(e[t])return e[t];for(var r=t.split(n),o=e,a=0;a<r.length;++a){if(!o||typeof o[r[a]]=="string"&&a+1<r.length)return;if(o[r[a]]===void 0){for(var s=2,u=r.slice(a,a+s).join(n),c=o[u];c===void 0&&r.length>a+s;)s++,u=r.slice(a,a+s).join(n),c=o[u];if(c===void 0)return;if(c===null)return null;if(t.endsWith(u)){if(typeof c=="string")return c;if(u&&typeof c[u]=="string")return c[u]}var f=r.slice(a+s).join(n);return f?xc(c,f,n):void 0}o=o[r[a]]}return o}}function Hy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function su(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hy(Object(n),!0).forEach(function(r){Zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hy(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ZT(e){var t=qT();return function(){var r=hr(e),o;if(t){var a=hr(this).constructor;o=Reflect.construct(r,arguments,a)}else o=r.apply(this,arguments);return xl(this,o)}}function qT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var KT=function(e){zd(n,e);var t=ZT(n);function n(r){var o,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};return qn(this,n),o=t.call(this),Nd&&Oo.call(mo(o)),o.data=r||{},o.options=a,o.options.keySeparator===void 0&&(o.options.keySeparator="."),o.options.ignoreJSONStructure===void 0&&(o.options.ignoreJSONStructure=!0),o}return Kn(n,[{key:"addNamespaces",value:function(o){this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}},{key:"removeNamespaces",value:function(o){var a=this.options.ns.indexOf(o);a>-1&&this.options.ns.splice(a,1)}},{key:"getResource",value:function(o,a,s){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator,f=u.ignoreJSONStructure!==void 0?u.ignoreJSONStructure:this.options.ignoreJSONStructure,p=[o,a];s&&typeof s!="string"&&(p=p.concat(s)),s&&typeof s=="string"&&(p=p.concat(c?s.split(c):s)),o.indexOf(".")>-1&&(p=o.split("."));var h=bc(this.data,p);return h||!f||typeof s!="string"?h:xc(this.data&&this.data[o]&&this.data[o][a],s,c)}},{key:"addResource",value:function(o,a,s,u){var c=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1},f=this.options.keySeparator;f===void 0&&(f=".");var p=[o,a];s&&(p=p.concat(f?s.split(f):s)),o.indexOf(".")>-1&&(p=o.split("."),u=a,a=p[1]),this.addNamespaces(a),Wy(this.data,p,u),c.silent||this.emit("added",o,a,s,u)}},{key:"addResources",value:function(o,a,s){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(var c in s)(typeof s[c]=="string"||Object.prototype.toString.apply(s[c])==="[object Array]")&&this.addResource(o,a,c,s[c],{silent:!0});u.silent||this.emit("added",o,a,s)}},{key:"addResourceBundle",value:function(o,a,s,u,c){var f=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},p=[o,a];o.indexOf(".")>-1&&(p=o.split("."),u=s,s=a,a=p[1]),this.addNamespaces(a);var h=bc(this.data,p)||{};u?cS(h,s,c):h=su(su({},h),s),Wy(this.data,p,h),f.silent||this.emit("added",o,a,s)}},{key:"removeResourceBundle",value:function(o,a){this.hasResourceBundle(o,a)&&delete this.data[o][a],this.removeNamespaces(a),this.emit("removed",o,a)}},{key:"hasResourceBundle",value:function(o,a){return this.getResource(o,a)!==void 0}},{key:"getResourceBundle",value:function(o,a){return a||(a=this.options.defaultNS),this.options.compatibilityAPI==="v1"?su(su({},{}),this.getResource(o,a)):this.getResource(o,a)}},{key:"getDataByLanguage",value:function(o){return this.data[o]}},{key:"hasLanguageSomeTranslations",value:function(o){var a=this.getDataByLanguage(o),s=a&&Object.keys(a)||[];return!!s.find(function(u){return a[u]&&Object.keys(a[u]).length>0})}},{key:"toJSON",value:function(){return this.data}}]),n}(Oo),dS={processors:{},addPostProcessor:function(t){this.processors[t.name]=t},handle:function(t,n,r,o,a){var s=this;return t.forEach(function(u){s.processors[u]&&(n=s.processors[u].process(n,r,o,a))}),n}};function Vy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Bt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vy(Object(n),!0).forEach(function(r){Zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vy(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function QT(e){var t=GT();return function(){var r=hr(e),o;if(t){var a=hr(this).constructor;o=Reflect.construct(r,arguments,a)}else o=r.apply(this,arguments);return xl(this,o)}}function GT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Zy={},qy=function(e){zd(n,e);var t=QT(n);function n(r){var o,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return qn(this,n),o=t.call(this),Nd&&Oo.call(mo(o)),jT(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r,mo(o)),o.options=a,o.options.keySeparator===void 0&&(o.options.keySeparator="."),o.logger=lr.create("translator"),o}return Kn(n,[{key:"changeLanguage",value:function(o){o&&(this.language=o)}},{key:"exists",value:function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(o==null)return!1;var s=this.resolve(o,a);return s&&s.res!==void 0}},{key:"extractFromKey",value:function(o,a){var s=a.nsSeparator!==void 0?a.nsSeparator:this.options.nsSeparator;s===void 0&&(s=":");var u=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,c=a.ns||this.options.defaultNS||[],f=s&&o.indexOf(s)>-1,p=!this.options.userDefinedKeySeparator&&!a.keySeparator&&!this.options.userDefinedNsSeparator&&!a.nsSeparator&&!VT(o,s,u);if(f&&!p){var h=o.match(this.interpolator.nestingRegexp);if(h&&h.length>0)return{key:o,namespaces:c};var _=o.split(s);(s!==u||s===u&&this.options.ns.indexOf(_[0])>-1)&&(c=_.shift()),o=_.join(u)}return typeof c=="string"&&(c=[c]),{key:o,namespaces:c}}},{key:"translate",value:function(o,a,s){var u=this;if(ln(a)!=="object"&&this.options.overloadTranslationOptionHandler&&(a=this.options.overloadTranslationOptionHandler(arguments)),ln(a)==="object"&&(a=Bt({},a)),a||(a={}),o==null)return"";Array.isArray(o)||(o=[String(o)]);var c=a.returnDetails!==void 0?a.returnDetails:this.options.returnDetails,f=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,p=this.extractFromKey(o[o.length-1],a),h=p.key,_=p.namespaces,v=_[_.length-1],y=a.lng||this.language,b=a.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(y&&y.toLowerCase()==="cimode"){if(b){var P=a.nsSeparator||this.options.nsSeparator;return c?{res:"".concat(v).concat(P).concat(h),usedKey:h,exactUsedKey:h,usedLng:y,usedNS:v}:"".concat(v).concat(P).concat(h)}return c?{res:h,usedKey:h,exactUsedKey:h,usedLng:y,usedNS:v}:h}var g=this.resolve(o,a),x=g&&g.res,S=g&&g.usedKey||h,E=g&&g.exactUsedKey||h,R=Object.prototype.toString.apply(x),T=["[object Number]","[object Function]","[object RegExp]"],N=a.joinArrays!==void 0?a.joinArrays:this.options.joinArrays,j=!this.i18nFormat||this.i18nFormat.handleAsObject,W=typeof x!="string"&&typeof x!="boolean"&&typeof x!="number";if(j&&x&&W&&T.indexOf(R)<0&&!(typeof N=="string"&&R==="[object Array]")){if(!a.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var M=this.options.returnedObjectHandler?this.options.returnedObjectHandler(S,x,Bt(Bt({},a),{},{ns:_})):"key '".concat(h," (").concat(this.language,")' returned an object instead of string.");return c?(g.res=M,g):M}if(f){var H=R==="[object Array]",G=H?[]:{},K=H?E:S;for(var U in x)if(Object.prototype.hasOwnProperty.call(x,U)){var re="".concat(K).concat(f).concat(U);G[U]=this.translate(re,Bt(Bt({},a),{joinArrays:!1,ns:_})),G[U]===re&&(G[U]=x[U])}x=G}}else if(j&&typeof N=="string"&&R==="[object Array]")x=x.join(N),x&&(x=this.extendTranslation(x,o,a,s));else{var q=!1,se=!1,B=a.count!==void 0&&typeof a.count!="string",Y=n.hasDefaultValue(a),A=B?this.pluralResolver.getSuffix(y,a.count,a):"",O=a["defaultValue".concat(A)]||a.defaultValue;!this.isValidLookup(x)&&Y&&(q=!0,x=O),this.isValidLookup(x)||(se=!0,x=h);var z=a.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey,D=z&&se?void 0:x,V=Y&&O!==x&&this.options.updateMissing;if(se||q||V){if(this.logger.log(V?"updateKey":"missingKey",y,v,h,V?O:x),f){var te=this.resolve(h,Bt(Bt({},a),{},{keySeparator:!1}));te&&te.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var ie=[],fe=this.languageUtils.getFallbackCodes(this.options.fallbackLng,a.lng||this.language);if(this.options.saveMissingTo==="fallback"&&fe&&fe[0])for(var be=0;be<fe.length;be++)ie.push(fe[be]);else this.options.saveMissingTo==="all"?ie=this.languageUtils.toResolveHierarchy(a.lng||this.language):ie.push(a.lng||this.language);var Je=function(Re,le,me){var ee=Y&&me!==x?me:D;u.options.missingKeyHandler?u.options.missingKeyHandler(Re,v,le,ee,V,a):u.backendConnector&&u.backendConnector.saveMissing&&u.backendConnector.saveMissing(Re,v,le,ee,V,a),u.emit("missingKey",Re,v,le,x)};this.options.saveMissing&&(this.options.saveMissingPlurals&&B?ie.forEach(function(Ze){u.pluralResolver.getSuffixes(Ze,a).forEach(function(Re){Je([Ze],h+Re,a["defaultValue".concat(Re)]||O)})}):Je(ie,h,O))}x=this.extendTranslation(x,o,a,g,s),se&&x===h&&this.options.appendNamespaceToMissingKey&&(x="".concat(v,":").concat(h)),(se||q)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?x=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(v,":").concat(h):h,q?x:void 0):x=this.options.parseMissingKeyHandler(x))}return c?(g.res=x,g):x}},{key:"extendTranslation",value:function(o,a,s,u,c){var f=this;if(this.i18nFormat&&this.i18nFormat.parse)o=this.i18nFormat.parse(o,Bt(Bt({},this.options.interpolation.defaultVariables),s),u.usedLng,u.usedNS,u.usedKey,{resolved:u});else if(!s.skipInterpolation){s.interpolation&&this.interpolator.init(Bt(Bt({},s),{interpolation:Bt(Bt({},this.options.interpolation),s.interpolation)}));var p=typeof o=="string"&&(s&&s.interpolation&&s.interpolation.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables),h;if(p){var _=o.match(this.interpolator.nestingRegexp);h=_&&_.length}var v=s.replace&&typeof s.replace!="string"?s.replace:s;if(this.options.interpolation.defaultVariables&&(v=Bt(Bt({},this.options.interpolation.defaultVariables),v)),o=this.interpolator.interpolate(o,v,s.lng||this.language,s),p){var y=o.match(this.interpolator.nestingRegexp),b=y&&y.length;h<b&&(s.nest=!1)}!s.lng&&this.options.compatibilityAPI!=="v1"&&u&&u.res&&(s.lng=u.usedLng),s.nest!==!1&&(o=this.interpolator.nest(o,function(){for(var x=arguments.length,S=new Array(x),E=0;E<x;E++)S[E]=arguments[E];return c&&c[0]===S[0]&&!s.context?(f.logger.warn("It seems you are nesting recursively key: ".concat(S[0]," in key: ").concat(a[0])),null):f.translate.apply(f,S.concat([a]))},s)),s.interpolation&&this.interpolator.reset()}var P=s.postProcess||this.options.postProcess,g=typeof P=="string"?[P]:P;return o!=null&&g&&g.length&&s.applyPostProcessor!==!1&&(o=dS.handle(g,o,a,this.options&&this.options.postProcessPassResolved?Bt({i18nResolved:u},s):s,this)),o}},{key:"resolve",value:function(o){var a=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u,c,f,p,h;return typeof o=="string"&&(o=[o]),o.forEach(function(_){if(!a.isValidLookup(u)){var v=a.extractFromKey(_,s),y=v.key;c=y;var b=v.namespaces;a.options.fallbackNS&&(b=b.concat(a.options.fallbackNS));var P=s.count!==void 0&&typeof s.count!="string",g=P&&!s.ordinal&&s.count===0&&a.pluralResolver.shouldUseIntlApi(),x=s.context!==void 0&&(typeof s.context=="string"||typeof s.context=="number")&&s.context!=="",S=s.lngs?s.lngs:a.languageUtils.toResolveHierarchy(s.lng||a.language,s.fallbackLng);b.forEach(function(E){a.isValidLookup(u)||(h=E,!Zy["".concat(S[0],"-").concat(E)]&&a.utils&&a.utils.hasLoadedNamespace&&!a.utils.hasLoadedNamespace(h)&&(Zy["".concat(S[0],"-").concat(E)]=!0,a.logger.warn('key "'.concat(c,'" for languages "').concat(S.join(", "),`" won't get resolved as namespace "`).concat(h,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),S.forEach(function(R){if(!a.isValidLookup(u)){p=R;var T=[y];if(a.i18nFormat&&a.i18nFormat.addLookupKeys)a.i18nFormat.addLookupKeys(T,y,R,E,s);else{var N;P&&(N=a.pluralResolver.getSuffix(R,s.count,s));var j="".concat(a.options.pluralSeparator,"zero");if(P&&(T.push(y+N),g&&T.push(y+j)),x){var W="".concat(y).concat(a.options.contextSeparator).concat(s.context);T.push(W),P&&(T.push(W+N),g&&T.push(W+j))}}for(var M;M=T.pop();)a.isValidLookup(u)||(f=M,u=a.getResource(R,E,M,s))}}))})}}),{res:u,usedKey:c,exactUsedKey:f,usedLng:p,usedNS:h}}},{key:"isValidLookup",value:function(o){return o!==void 0&&!(!this.options.returnNull&&o===null)&&!(!this.options.returnEmptyString&&o==="")}},{key:"getResource",value:function(o,a,s){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(o,a,s,u):this.resourceStore.getResource(o,a,s,u)}}],[{key:"hasDefaultValue",value:function(o){var a="defaultValue";for(var s in o)if(Object.prototype.hasOwnProperty.call(o,s)&&a===s.substring(0,a.length)&&o[s]!==void 0)return!0;return!1}}]),n}(Oo);function Yf(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Ky=function(){function e(t){qn(this,e),this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=lr.create("languageUtils")}return Kn(e,[{key:"getScriptPartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return null;var r=n.split("-");return r.length===2||(r.pop(),r[r.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(r.join("-"))}},{key:"getLanguagePartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return n;var r=n.split("-");return this.formatLanguageCode(r[0])}},{key:"formatLanguageCode",value:function(n){if(typeof n=="string"&&n.indexOf("-")>-1){var r=["hans","hant","latn","cyrl","cans","mong","arab"],o=n.split("-");return this.options.lowerCaseLng?o=o.map(function(a){return a.toLowerCase()}):o.length===2?(o[0]=o[0].toLowerCase(),o[1]=o[1].toUpperCase(),r.indexOf(o[1].toLowerCase())>-1&&(o[1]=Yf(o[1].toLowerCase()))):o.length===3&&(o[0]=o[0].toLowerCase(),o[1].length===2&&(o[1]=o[1].toUpperCase()),o[0]!=="sgn"&&o[2].length===2&&(o[2]=o[2].toUpperCase()),r.indexOf(o[1].toLowerCase())>-1&&(o[1]=Yf(o[1].toLowerCase())),r.indexOf(o[2].toLowerCase())>-1&&(o[2]=Yf(o[2].toLowerCase()))),o.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?n.toLowerCase():n}},{key:"isSupportedCode",value:function(n){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(n=this.getLanguagePartFromCode(n)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(n)>-1}},{key:"getBestMatchFromCodes",value:function(n){var r=this;if(!n)return null;var o;return n.forEach(function(a){if(!o){var s=r.formatLanguageCode(a);(!r.options.supportedLngs||r.isSupportedCode(s))&&(o=s)}}),!o&&this.options.supportedLngs&&n.forEach(function(a){if(!o){var s=r.getLanguagePartFromCode(a);if(r.isSupportedCode(s))return o=s;o=r.options.supportedLngs.find(function(u){if(u===s)return u;if(!(u.indexOf("-")<0&&s.indexOf("-")<0)&&u.indexOf(s)===0)return u})}}),o||(o=this.getFallbackCodes(this.options.fallbackLng)[0]),o}},{key:"getFallbackCodes",value:function(n,r){if(!n)return[];if(typeof n=="function"&&(n=n(r)),typeof n=="string"&&(n=[n]),Object.prototype.toString.apply(n)==="[object Array]")return n;if(!r)return n.default||[];var o=n[r];return o||(o=n[this.getScriptPartFromCode(r)]),o||(o=n[this.formatLanguageCode(r)]),o||(o=n[this.getLanguagePartFromCode(r)]),o||(o=n.default),o||[]}},{key:"toResolveHierarchy",value:function(n,r){var o=this,a=this.getFallbackCodes(r||this.options.fallbackLng||[],n),s=[],u=function(f){f&&(o.isSupportedCode(f)?s.push(f):o.logger.warn("rejecting language code not found in supportedLngs: ".concat(f)))};return typeof n=="string"&&n.indexOf("-")>-1?(this.options.load!=="languageOnly"&&u(this.formatLanguageCode(n)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&u(this.getScriptPartFromCode(n)),this.options.load!=="currentOnly"&&u(this.getLanguagePartFromCode(n))):typeof n=="string"&&u(this.formatLanguageCode(n)),a.forEach(function(c){s.indexOf(c)<0&&u(o.formatLanguageCode(c))}),s}}]),e}(),JT=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],YT={1:function(t){return+(t>1)},2:function(t){return+(t!=1)},3:function(t){return 0},4:function(t){return t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2},5:function(t){return t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5},6:function(t){return t==1?0:t>=2&&t<=4?1:2},7:function(t){return t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2},8:function(t){return t==1?0:t==2?1:t!=8&&t!=11?2:3},9:function(t){return+(t>=2)},10:function(t){return t==1?0:t==2?1:t<7?2:t<11?3:4},11:function(t){return t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3},12:function(t){return+(t%10!=1||t%100==11)},13:function(t){return+(t!==0)},14:function(t){return t==1?0:t==2?1:t==3?2:3},15:function(t){return t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2},16:function(t){return t%10==1&&t%100!=11?0:t!==0?1:2},17:function(t){return t==1||t%10==1&&t%100!=11?0:1},18:function(t){return t==0?0:t==1?1:2},19:function(t){return t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3},20:function(t){return t==1?0:t==0||t%100>0&&t%100<20?1:2},21:function(t){return t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0},22:function(t){return t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3}},XT=["v1","v2","v3"],Qy={zero:0,one:1,two:2,few:3,many:4,other:5};function eL(){var e={};return JT.forEach(function(t){t.lngs.forEach(function(n){e[n]={numbers:t.nr,plurals:YT[t.fc]}})}),e}var tL=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};qn(this,e),this.languageUtils=t,this.options=n,this.logger=lr.create("pluralResolver"),(!this.options.compatibilityJSON||this.options.compatibilityJSON==="v4")&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=eL()}return Kn(e,[{key:"addRule",value:function(n,r){this.rules[n]=r}},{key:"getRule",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(n,{type:r.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[n]||this.rules[this.languageUtils.getLanguagePartFromCode(n)]}},{key:"needsPlural",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=this.getRule(n,r);return this.shouldUseIntlApi()?o&&o.resolvedOptions().pluralCategories.length>1:o&&o.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(n,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(n,o).map(function(a){return"".concat(r).concat(a)})}},{key:"getSuffixes",value:function(n){var r=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(n,o);return a?this.shouldUseIntlApi()?a.resolvedOptions().pluralCategories.sort(function(s,u){return Qy[s]-Qy[u]}).map(function(s){return"".concat(r.options.prepend).concat(s)}):a.numbers.map(function(s){return r.getSuffix(n,s,o)}):[]}},{key:"getSuffix",value:function(n,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=this.getRule(n,o);return a?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(a.select(r)):this.getSuffixRetroCompatible(a,r):(this.logger.warn("no plural rule found for: ".concat(n)),"")}},{key:"getSuffixRetroCompatible",value:function(n,r){var o=this,a=n.noAbs?n.plurals(r):n.plurals(Math.abs(r)),s=n.numbers[a];this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1&&(s===2?s="plural":s===1&&(s=""));var u=function(){return o.options.prepend&&s.toString()?o.options.prepend+s.toString():s.toString()};return this.options.compatibilityJSON==="v1"?s===1?"":typeof s=="number"?"_plural_".concat(s.toString()):u():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1?u():this.options.prepend&&a.toString()?this.options.prepend+a.toString():a.toString()}},{key:"shouldUseIntlApi",value:function(){return!XT.includes(this.options.compatibilityJSON)}}]),e}();function Gy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Ln(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gy(Object(n),!0).forEach(function(r){Zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gy(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Jy(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,a=$T(e,t,n);return!a&&o&&typeof n=="string"&&(a=xc(e,n,r),a===void 0&&(a=xc(t,n,r))),a}var nL=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};qn(this,e),this.logger=lr.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(n){return n},this.init(t)}return Kn(e,[{key:"init",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};n.interpolation||(n.interpolation={escapeValue:!0});var r=n.interpolation;this.escape=r.escape!==void 0?r.escape:WT,this.escapeValue=r.escapeValue!==void 0?r.escapeValue:!0,this.useRawValueToEscape=r.useRawValueToEscape!==void 0?r.useRawValueToEscape:!1,this.prefix=r.prefix?Fi(r.prefix):r.prefixEscaped||"{{",this.suffix=r.suffix?Fi(r.suffix):r.suffixEscaped||"}}",this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||",",this.unescapePrefix=r.unescapeSuffix?"":r.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":r.unescapeSuffix||"",this.nestingPrefix=r.nestingPrefix?Fi(r.nestingPrefix):r.nestingPrefixEscaped||Fi("$t("),this.nestingSuffix=r.nestingSuffix?Fi(r.nestingSuffix):r.nestingSuffixEscaped||Fi(")"),this.nestingOptionsSeparator=r.nestingOptionsSeparator?r.nestingOptionsSeparator:r.nestingOptionsSeparator||",",this.maxReplaces=r.maxReplaces?r.maxReplaces:1e3,this.alwaysFormat=r.alwaysFormat!==void 0?r.alwaysFormat:!1,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var n="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(n,"g");var r="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(r,"g");var o="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(o,"g")}},{key:"interpolate",value:function(n,r,o,a){var s=this,u,c,f,p=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function h(P){return P.replace(/\$/g,"$$$$")}var _=function(g){if(g.indexOf(s.formatSeparator)<0){var x=Jy(r,p,g,s.options.keySeparator,s.options.ignoreJSONStructure);return s.alwaysFormat?s.format(x,void 0,o,Ln(Ln(Ln({},a),r),{},{interpolationkey:g})):x}var S=g.split(s.formatSeparator),E=S.shift().trim(),R=S.join(s.formatSeparator).trim();return s.format(Jy(r,p,E,s.options.keySeparator,s.options.ignoreJSONStructure),R,o,Ln(Ln(Ln({},a),r),{},{interpolationkey:E}))};this.resetRegExp();var v=a&&a.missingInterpolationHandler||this.options.missingInterpolationHandler,y=a&&a.interpolation&&a.interpolation.skipOnVariables!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables,b=[{regex:this.regexpUnescape,safeValue:function(g){return h(g)}},{regex:this.regexp,safeValue:function(g){return s.escapeValue?h(s.escape(g)):h(g)}}];return b.forEach(function(P){for(f=0;u=P.regex.exec(n);){var g=u[1].trim();if(c=_(g),c===void 0)if(typeof v=="function"){var x=v(n,u,a);c=typeof x=="string"?x:""}else if(a&&Object.prototype.hasOwnProperty.call(a,g))c="";else if(y){c=u[0];continue}else s.logger.warn("missed to pass in variable ".concat(g," for interpolating ").concat(n)),c="";else typeof c!="string"&&!s.useRawValueToEscape&&(c=Uy(c));var S=P.safeValue(c);if(n=n.replace(u[0],S),y?(P.regex.lastIndex+=c.length,P.regex.lastIndex-=u[0].length):P.regex.lastIndex=0,f++,f>=s.maxReplaces)break}}),n}},{key:"nest",value:function(n,r){var o=this,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s,u,c;function f(v,y){var b=this.nestingOptionsSeparator;if(v.indexOf(b)<0)return v;var P=v.split(new RegExp("".concat(b,"[ ]*{"))),g="{".concat(P[1]);v=P[0],g=this.interpolate(g,c);var x=g.match(/'/g),S=g.match(/"/g);(x&&x.length%2===0&&!S||S.length%2!==0)&&(g=g.replace(/'/g,'"'));try{c=JSON.parse(g),y&&(c=Ln(Ln({},y),c))}catch(E){return this.logger.warn("failed parsing options string in nesting for key ".concat(v),E),"".concat(v).concat(b).concat(g)}return delete c.defaultValue,v}for(;s=this.nestingRegexp.exec(n);){var p=[];c=Ln({},a),c=c.replace&&typeof c.replace!="string"?c.replace:c,c.applyPostProcessor=!1,delete c.defaultValue;var h=!1;if(s[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(s[1])){var _=s[1].split(this.formatSeparator).map(function(v){return v.trim()});s[1]=_.shift(),p=_,h=!0}if(u=r(f.call(this,s[1].trim(),c),c),u&&s[0]===n&&typeof u!="string")return u;typeof u!="string"&&(u=Uy(u)),u||(this.logger.warn("missed to resolve ".concat(s[1]," for nesting ").concat(n)),u=""),h&&(u=p.reduce(function(v,y){return o.format(v,y,a.lng,Ln(Ln({},a),{},{interpolationkey:s[1].trim()}))},u.trim())),n=n.replace(s[0],u),this.regexp.lastIndex=0}return n}}]),e}();function Yy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function xr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yy(Object(n),!0).forEach(function(r){Zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yy(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rL(e){var t=e.toLowerCase().trim(),n={};if(e.indexOf("(")>-1){var r=e.split("(");t=r[0].toLowerCase().trim();var o=r[1].substring(0,r[1].length-1);if(t==="currency"&&o.indexOf(":")<0)n.currency||(n.currency=o.trim());else if(t==="relativetime"&&o.indexOf(":")<0)n.range||(n.range=o.trim());else{var a=o.split(";");a.forEach(function(s){if(s){var u=s.split(":"),c=BT(u),f=c[0],p=c.slice(1),h=p.join(":").trim().replace(/^'+|'+$/g,"");n[f.trim()]||(n[f.trim()]=h),h==="false"&&(n[f.trim()]=!1),h==="true"&&(n[f.trim()]=!0),isNaN(h)||(n[f.trim()]=parseInt(h,10))}})}}return{formatName:t,formatOptions:n}}function $i(e){var t={};return function(r,o,a){var s=o+JSON.stringify(a),u=t[s];return u||(u=e(o,a),t[s]=u),u(r)}}var oL=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};qn(this,e),this.logger=lr.create("formatter"),this.options=t,this.formats={number:$i(function(n,r){var o=new Intl.NumberFormat(n,xr({},r));return function(a){return o.format(a)}}),currency:$i(function(n,r){var o=new Intl.NumberFormat(n,xr(xr({},r),{},{style:"currency"}));return function(a){return o.format(a)}}),datetime:$i(function(n,r){var o=new Intl.DateTimeFormat(n,xr({},r));return function(a){return o.format(a)}}),relativetime:$i(function(n,r){var o=new Intl.RelativeTimeFormat(n,xr({},r));return function(a){return o.format(a,r.range||"day")}}),list:$i(function(n,r){var o=new Intl.ListFormat(n,xr({},r));return function(a){return o.format(a)}})},this.init(t)}return Kn(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}},o=r.interpolation;this.formatSeparator=o.formatSeparator?o.formatSeparator:o.formatSeparator||","}},{key:"add",value:function(n,r){this.formats[n.toLowerCase().trim()]=r}},{key:"addCached",value:function(n,r){this.formats[n.toLowerCase().trim()]=$i(r)}},{key:"format",value:function(n,r,o){var a=this,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},u=r.split(this.formatSeparator),c=u.reduce(function(f,p){var h=rL(p),_=h.formatName,v=h.formatOptions;if(a.formats[_]){var y=f;try{var b=s&&s.formatParams&&s.formatParams[s.interpolationkey]||{},P=b.locale||b.lng||s.locale||s.lng||o;y=a.formats[_](f,P,xr(xr(xr({},v),s),b))}catch(g){a.logger.warn(g)}return y}else a.logger.warn("there was no format function for ".concat(_));return f},n);return c}}]),e}();function Xy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function eb(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xy(Object(n),!0).forEach(function(r){Zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xy(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function iL(e){var t=aL();return function(){var r=hr(e),o;if(t){var a=hr(this).constructor;o=Reflect.construct(r,arguments,a)}else o=r.apply(this,arguments);return xl(this,o)}}function aL(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function sL(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}var lL=function(e){zd(n,e);var t=iL(n);function n(r,o,a){var s,u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return qn(this,n),s=t.call(this),Nd&&Oo.call(mo(s)),s.backend=r,s.store=o,s.services=a,s.languageUtils=a.languageUtils,s.options=u,s.logger=lr.create("backendConnector"),s.waitingReads=[],s.maxParallelReads=u.maxParallelReads||10,s.readingCalls=0,s.maxRetries=u.maxRetries>=0?u.maxRetries:5,s.retryTimeout=u.retryTimeout>=1?u.retryTimeout:350,s.state={},s.queue=[],s.backend&&s.backend.init&&s.backend.init(a,u.backend,u),s}return Kn(n,[{key:"queueLoad",value:function(o,a,s,u){var c=this,f={},p={},h={},_={};return o.forEach(function(v){var y=!0;a.forEach(function(b){var P="".concat(v,"|").concat(b);!s.reload&&c.store.hasResourceBundle(v,b)?c.state[P]=2:c.state[P]<0||(c.state[P]===1?p[P]===void 0&&(p[P]=!0):(c.state[P]=1,y=!1,p[P]===void 0&&(p[P]=!0),f[P]===void 0&&(f[P]=!0),_[b]===void 0&&(_[b]=!0)))}),y||(h[v]=!0)}),(Object.keys(f).length||Object.keys(p).length)&&this.queue.push({pending:p,pendingCount:Object.keys(p).length,loaded:{},errors:[],callback:u}),{toLoad:Object.keys(f),pending:Object.keys(p),toLoadLanguages:Object.keys(h),toLoadNamespaces:Object.keys(_)}}},{key:"loaded",value:function(o,a,s){var u=o.split("|"),c=u[0],f=u[1];a&&this.emit("failedLoading",c,f,a),s&&this.store.addResourceBundle(c,f,s),this.state[o]=a?-1:2;var p={};this.queue.forEach(function(h){FT(h.loaded,[c],f),sL(h,o),a&&h.errors.push(a),h.pendingCount===0&&!h.done&&(Object.keys(h.loaded).forEach(function(_){p[_]||(p[_]={});var v=h.loaded[_];v.length&&v.forEach(function(y){p[_][y]===void 0&&(p[_][y]=!0)})}),h.done=!0,h.errors.length?h.callback(h.errors):h.callback())}),this.emit("loaded",p),this.queue=this.queue.filter(function(h){return!h.done})}},{key:"read",value:function(o,a,s){var u=this,c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,f=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,p=arguments.length>5?arguments[5]:void 0;if(!o.length)return p(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:o,ns:a,fcName:s,tried:c,wait:f,callback:p});return}this.readingCalls++;var h=function(b,P){if(u.readingCalls--,u.waitingReads.length>0){var g=u.waitingReads.shift();u.read(g.lng,g.ns,g.fcName,g.tried,g.wait,g.callback)}if(b&&P&&c<u.maxRetries){setTimeout(function(){u.read.call(u,o,a,s,c+1,f*2,p)},f);return}p(b,P)},_=this.backend[s].bind(this.backend);if(_.length===2){try{var v=_(o,a);v&&typeof v.then=="function"?v.then(function(y){return h(null,y)}).catch(h):h(null,v)}catch(y){h(y)}return}return _(o,a,h)}},{key:"prepareLoading",value:function(o,a){var s=this,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},c=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),c&&c();typeof o=="string"&&(o=this.languageUtils.toResolveHierarchy(o)),typeof a=="string"&&(a=[a]);var f=this.queueLoad(o,a,u,c);if(!f.toLoad.length)return f.pending.length||c(),null;f.toLoad.forEach(function(p){s.loadOne(p)})}},{key:"load",value:function(o,a,s){this.prepareLoading(o,a,{},s)}},{key:"reload",value:function(o,a,s){this.prepareLoading(o,a,{reload:!0},s)}},{key:"loadOne",value:function(o){var a=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",u=o.split("|"),c=u[0],f=u[1];this.read(c,f,"read",void 0,void 0,function(p,h){p&&a.logger.warn("".concat(s,"loading namespace ").concat(f," for language ").concat(c," failed"),p),!p&&h&&a.logger.log("".concat(s,"loaded namespace ").concat(f," for language ").concat(c),h),a.loaded(o,p,h)})}},{key:"saveMissing",value:function(o,a,s,u,c){var f=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},p=arguments.length>6&&arguments[6]!==void 0?arguments[6]:function(){};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(a)){this.logger.warn('did not save key "'.concat(s,'" as the namespace "').concat(a,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(s==null||s==="")){if(this.backend&&this.backend.create){var h=eb(eb({},f),{},{isUpdate:c}),_=this.backend.create.bind(this.backend);if(_.length<6)try{var v;_.length===5?v=_(o,a,s,u,h):v=_(o,a,s,u),v&&typeof v.then=="function"?v.then(function(y){return p(null,y)}).catch(p):p(null,v)}catch(y){p(y)}else _(o,a,s,u,p,h)}!o||!o[0]||this.store.addResource(o[0],a,s,u)}}}]),n}(Oo);function tb(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){var n={};if(ln(t[1])==="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),ln(t[2])==="object"||ln(t[3])==="object"){var r=t[3]||t[2];Object.keys(r).forEach(function(o){n[o]=r[o]})}return n},interpolation:{escapeValue:!0,format:function(t,n,r,o){return t},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function nb(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function rb(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function tr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rb(Object(n),!0).forEach(function(r){Zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rb(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function uL(e){var t=cL();return function(){var r=hr(e),o;if(t){var a=hr(this).constructor;o=Reflect.construct(r,arguments,a)}else o=r.apply(this,arguments);return xl(this,o)}}function cL(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function lu(){}function dL(e){var t=Object.getOwnPropertyNames(Object.getPrototypeOf(e));t.forEach(function(n){typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}var wc=function(e){zd(n,e);var t=uL(n);function n(){var r,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;if(qn(this,n),r=t.call(this),Nd&&Oo.call(mo(r)),r.options=nb(o),r.services={},r.logger=lr,r.modules={external:[]},dL(mo(r)),a&&!r.isInitialized&&!o.isClone){if(!r.options.initImmediate)return r.init(o,a),xl(r,mo(r));setTimeout(function(){r.init(o,a)},0)}return r}return Kn(n,[{key:"init",value:function(){var o=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;typeof a=="function"&&(s=a,a={}),!a.defaultNS&&a.defaultNS!==!1&&a.ns&&(typeof a.ns=="string"?a.defaultNS=a.ns:a.ns.indexOf("translation")<0&&(a.defaultNS=a.ns[0]));var u=tb();this.options=tr(tr(tr({},u),this.options),nb(a)),this.options.compatibilityAPI!=="v1"&&(this.options.interpolation=tr(tr({},u.interpolation),this.options.interpolation)),a.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=a.keySeparator),a.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=a.nsSeparator);function c(g){return g?typeof g=="function"?new g:g:null}if(!this.options.isClone){this.modules.logger?lr.init(c(this.modules.logger),this.options):lr.init(null,this.options);var f;this.modules.formatter?f=this.modules.formatter:typeof Intl<"u"&&(f=oL);var p=new Ky(this.options);this.store=new KT(this.options.resources,this.options);var h=this.services;h.logger=lr,h.resourceStore=this.store,h.languageUtils=p,h.pluralResolver=new tL(p,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),f&&(!this.options.interpolation.format||this.options.interpolation.format===u.interpolation.format)&&(h.formatter=c(f),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new nL(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new lL(c(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(g){for(var x=arguments.length,S=new Array(x>1?x-1:0),E=1;E<x;E++)S[E-1]=arguments[E];o.emit.apply(o,[g].concat(S))}),this.modules.languageDetector&&(h.languageDetector=c(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=c(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new qy(this.services,this.options),this.translator.on("*",function(g){for(var x=arguments.length,S=new Array(x>1?x-1:0),E=1;E<x;E++)S[E-1]=arguments[E];o.emit.apply(o,[g].concat(S))}),this.modules.external.forEach(function(g){g.init&&g.init(o)})}if(this.format=this.options.interpolation.format,s||(s=lu),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var _=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);_.length>0&&_[0]!=="dev"&&(this.options.lng=_[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined");var v=["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"];v.forEach(function(g){o[g]=function(){var x;return(x=o.store)[g].apply(x,arguments)}});var y=["addResource","addResources","addResourceBundle","removeResourceBundle"];y.forEach(function(g){o[g]=function(){var x;return(x=o.store)[g].apply(x,arguments),o}});var b=fs(),P=function(){var x=function(E,R){o.isInitialized&&!o.initializedStoreOnce&&o.logger.warn("init: i18next is already initialized. You should call init just once!"),o.isInitialized=!0,o.options.isClone||o.logger.log("initialized",o.options),o.emit("initialized",o.options),b.resolve(R),s(E,R)};if(o.languages&&o.options.compatibilityAPI!=="v1"&&!o.isInitialized)return x(null,o.t.bind(o));o.changeLanguage(o.options.lng,x)};return this.options.resources||!this.options.initImmediate?P():setTimeout(P,0),b}},{key:"loadResources",value:function(o){var a=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:lu,u=s,c=typeof o=="string"?o:this.language;if(typeof o=="function"&&(u=o),!this.options.resources||this.options.partialBundledLanguages){if(c&&c.toLowerCase()==="cimode")return u();var f=[],p=function(v){if(v){var y=a.services.languageUtils.toResolveHierarchy(v);y.forEach(function(b){f.indexOf(b)<0&&f.push(b)})}};if(c)p(c);else{var h=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);h.forEach(function(_){return p(_)})}this.options.preload&&this.options.preload.forEach(function(_){return p(_)}),this.services.backendConnector.load(f,this.options.ns,function(_){!_&&!a.resolvedLanguage&&a.language&&a.setResolvedLanguage(a.language),u(_)})}else u(null)}},{key:"reloadResources",value:function(o,a,s){var u=fs();return o||(o=this.languages),a||(a=this.options.ns),s||(s=lu),this.services.backendConnector.reload(o,a,function(c){u.resolve(),s(c)}),u}},{key:"use",value:function(o){if(!o)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!o.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return o.type==="backend"&&(this.modules.backend=o),(o.type==="logger"||o.log&&o.warn&&o.error)&&(this.modules.logger=o),o.type==="languageDetector"&&(this.modules.languageDetector=o),o.type==="i18nFormat"&&(this.modules.i18nFormat=o),o.type==="postProcessor"&&dS.addPostProcessor(o),o.type==="formatter"&&(this.modules.formatter=o),o.type==="3rdParty"&&this.modules.external.push(o),this}},{key:"setResolvedLanguage",value:function(o){if(!(!o||!this.languages)&&!(["cimode","dev"].indexOf(o)>-1))for(var a=0;a<this.languages.length;a++){var s=this.languages[a];if(!(["cimode","dev"].indexOf(s)>-1)&&this.store.hasLanguageSomeTranslations(s)){this.resolvedLanguage=s;break}}}},{key:"changeLanguage",value:function(o,a){var s=this;this.isLanguageChangingTo=o;var u=fs();this.emit("languageChanging",o);var c=function(_){s.language=_,s.languages=s.services.languageUtils.toResolveHierarchy(_),s.resolvedLanguage=void 0,s.setResolvedLanguage(_)},f=function(_,v){v?(c(v),s.translator.changeLanguage(v),s.isLanguageChangingTo=void 0,s.emit("languageChanged",v),s.logger.log("languageChanged",v)):s.isLanguageChangingTo=void 0,u.resolve(function(){return s.t.apply(s,arguments)}),a&&a(_,function(){return s.t.apply(s,arguments)})},p=function(_){!o&&!_&&s.services.languageDetector&&(_=[]);var v=typeof _=="string"?_:s.services.languageUtils.getBestMatchFromCodes(_);v&&(s.language||c(v),s.translator.language||s.translator.changeLanguage(v),s.services.languageDetector&&s.services.languageDetector.cacheUserLanguage&&s.services.languageDetector.cacheUserLanguage(v)),s.loadResources(v,function(y){f(y,v)})};return!o&&this.services.languageDetector&&!this.services.languageDetector.async?p(this.services.languageDetector.detect()):!o&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(p):this.services.languageDetector.detect(p):p(o),u}},{key:"getFixedT",value:function(o,a,s){var u=this,c=function f(p,h){var _;if(ln(h)!=="object"){for(var v=arguments.length,y=new Array(v>2?v-2:0),b=2;b<v;b++)y[b-2]=arguments[b];_=u.options.overloadTranslationOptionHandler([p,h].concat(y))}else _=tr({},h);_.lng=_.lng||f.lng,_.lngs=_.lngs||f.lngs,_.ns=_.ns||f.ns,_.keyPrefix=_.keyPrefix||s||f.keyPrefix;var P=u.options.keySeparator||".",g;return _.keyPrefix&&Array.isArray(p)?g=p.map(function(x){return"".concat(_.keyPrefix).concat(P).concat(x)}):g=_.keyPrefix?"".concat(_.keyPrefix).concat(P).concat(p):p,u.t(g,_)};return typeof o=="string"?c.lng=o:c.lngs=o,c.ns=a,c.keyPrefix=s,c}},{key:"t",value:function(){var o;return this.translator&&(o=this.translator).translate.apply(o,arguments)}},{key:"exists",value:function(){var o;return this.translator&&(o=this.translator).exists.apply(o,arguments)}},{key:"setDefaultNamespace",value:function(o){this.options.defaultNS=o}},{key:"hasLoadedNamespace",value:function(o){var a=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var u=s.lng||this.resolvedLanguage||this.languages[0],c=this.options?this.options.fallbackLng:!1,f=this.languages[this.languages.length-1];if(u.toLowerCase()==="cimode")return!0;var p=function(v,y){var b=a.services.backendConnector.state["".concat(v,"|").concat(y)];return b===-1||b===2};if(s.precheck){var h=s.precheck(this,p);if(h!==void 0)return h}return!!(this.hasResourceBundle(u,o)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||p(u,o)&&(!c||p(f,o)))}},{key:"loadNamespaces",value:function(o,a){var s=this,u=fs();return this.options.ns?(typeof o=="string"&&(o=[o]),o.forEach(function(c){s.options.ns.indexOf(c)<0&&s.options.ns.push(c)}),this.loadResources(function(c){u.resolve(),a&&a(c)}),u):(a&&a(),Promise.resolve())}},{key:"loadLanguages",value:function(o,a){var s=fs();typeof o=="string"&&(o=[o]);var u=this.options.preload||[],c=o.filter(function(f){return u.indexOf(f)<0});return c.length?(this.options.preload=u.concat(c),this.loadResources(function(f){s.resolve(),a&&a(f)}),s):(a&&a(),Promise.resolve())}},{key:"dir",value:function(o){if(o||(o=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!o)return"rtl";var a=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],s=this.services&&this.services.languageUtils||new Ky(tb());return a.indexOf(s.getLanguagePartFromCode(o))>-1||o.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var o=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:lu,u=tr(tr(tr({},this.options),a),{isClone:!0}),c=new n(u);(a.debug!==void 0||a.prefix!==void 0)&&(c.logger=c.logger.clone(a));var f=["store","services","language"];return f.forEach(function(p){c[p]=o[p]}),c.services=tr({},this.services),c.services.utils={hasLoadedNamespace:c.hasLoadedNamespace.bind(c)},c.translator=new qy(c.services,c.options),c.translator.on("*",function(p){for(var h=arguments.length,_=new Array(h>1?h-1:0),v=1;v<h;v++)_[v-1]=arguments[v];c.emit.apply(c,[p].concat(_))}),c.init(u,s),c.translator.options=c.options,c.translator.backendConnector.services.utils={hasLoadedNamespace:c.hasLoadedNamespace.bind(c)},c}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),n}(Oo);Zn(wc,"createInstance",function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new wc(e,t)});var Ut=wc.createInstance();Ut.createInstance=wc.createInstance;Ut.createInstance;Ut.dir;Ut.init;Ut.loadResources;Ut.reloadResources;var fL=Ut.use;Ut.changeLanguage;Ut.getFixedT;var Ho=Ut.t;Ut.exists;Ut.setDefaultNamespace;Ut.hasLoadedNamespace;Ut.loadNamespaces;Ut.loadLanguages;const Xf=()=>Z.jsxs("div",{children:[Z.jsx("h1",{children:"Det skjedde en feil"}),Z.jsx("p",{children:Z.jsx("i",{children:"Vennligst gå tilbake i nettleseren eller refresh siden"})})]}),hL="2.25rem",pL="3.75rem",mL="540px";var $p={},_L={get exports(){return $p},set exports(e){$p=e}};/* @preserve
 * Leaflet 1.9.3, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2022 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(e,t){(function(n,r){r(t)})(Zi,function(n){var r="1.9.3";function o(i){var l,d,m,w;for(d=1,m=arguments.length;d<m;d++){w=arguments[d];for(l in w)i[l]=w[l]}return i}var a=Object.create||function(){function i(){}return function(l){return i.prototype=l,new i}}();function s(i,l){var d=Array.prototype.slice;if(i.bind)return i.bind.apply(i,d.call(arguments,1));var m=d.call(arguments,2);return function(){return i.apply(l,m.length?m.concat(d.call(arguments)):arguments)}}var u=0;function c(i){return"_leaflet_id"in i||(i._leaflet_id=++u),i._leaflet_id}function f(i,l,d){var m,w,C,I;return I=function(){m=!1,w&&(C.apply(d,w),w=!1)},C=function(){m?w=arguments:(i.apply(d,arguments),setTimeout(I,l),m=!0)},C}function p(i,l,d){var m=l[1],w=l[0],C=m-w;return i===m&&d?i:((i-w)%C+C)%C+w}function h(){return!1}function _(i,l){if(l===!1)return i;var d=Math.pow(10,l===void 0?6:l);return Math.round(i*d)/d}function v(i){return i.trim?i.trim():i.replace(/^\s+|\s+$/g,"")}function y(i){return v(i).split(/\s+/)}function b(i,l){Object.prototype.hasOwnProperty.call(i,"options")||(i.options=i.options?a(i.options):{});for(var d in l)i.options[d]=l[d];return i.options}function P(i,l,d){var m=[];for(var w in i)m.push(encodeURIComponent(d?w.toUpperCase():w)+"="+encodeURIComponent(i[w]));return(!l||l.indexOf("?")===-1?"?":"&")+m.join("&")}var g=/\{ *([\w_ -]+) *\}/g;function x(i,l){return i.replace(g,function(d,m){var w=l[m];if(w===void 0)throw new Error("No value provided for variable "+d);return typeof w=="function"&&(w=w(l)),w})}var S=Array.isArray||function(i){return Object.prototype.toString.call(i)==="[object Array]"};function E(i,l){for(var d=0;d<i.length;d++)if(i[d]===l)return d;return-1}var R="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function T(i){return window["webkit"+i]||window["moz"+i]||window["ms"+i]}var N=0;function j(i){var l=+new Date,d=Math.max(0,16-(l-N));return N=l+d,window.setTimeout(i,d)}var W=window.requestAnimationFrame||T("RequestAnimationFrame")||j,M=window.cancelAnimationFrame||T("CancelAnimationFrame")||T("CancelRequestAnimationFrame")||function(i){window.clearTimeout(i)};function H(i,l,d){if(d&&W===j)i.call(l);else return W.call(window,s(i,l))}function G(i){i&&M.call(window,i)}var K={__proto__:null,extend:o,create:a,bind:s,get lastId(){return u},stamp:c,throttle:f,wrapNum:p,falseFn:h,formatNum:_,trim:v,splitWords:y,setOptions:b,getParamString:P,template:x,isArray:S,indexOf:E,emptyImageUrl:R,requestFn:W,cancelFn:M,requestAnimFrame:H,cancelAnimFrame:G};function U(){}U.extend=function(i){var l=function(){b(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},d=l.__super__=this.prototype,m=a(d);m.constructor=l,l.prototype=m;for(var w in this)Object.prototype.hasOwnProperty.call(this,w)&&w!=="prototype"&&w!=="__super__"&&(l[w]=this[w]);return i.statics&&o(l,i.statics),i.includes&&(re(i.includes),o.apply(null,[m].concat(i.includes))),o(m,i),delete m.statics,delete m.includes,m.options&&(m.options=d.options?a(d.options):{},o(m.options,i.options)),m._initHooks=[],m.callInitHooks=function(){if(!this._initHooksCalled){d.callInitHooks&&d.callInitHooks.call(this),this._initHooksCalled=!0;for(var C=0,I=m._initHooks.length;C<I;C++)m._initHooks[C].call(this)}},l},U.include=function(i){var l=this.prototype.options;return o(this.prototype,i),i.options&&(this.prototype.options=l,this.mergeOptions(i.options)),this},U.mergeOptions=function(i){return o(this.prototype.options,i),this},U.addInitHook=function(i){var l=Array.prototype.slice.call(arguments,1),d=typeof i=="function"?i:function(){this[i].apply(this,l)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(d),this};function re(i){if(!(typeof L>"u"||!L||!L.Mixin)){i=S(i)?i:[i];for(var l=0;l<i.length;l++)i[l]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var q={on:function(i,l,d){if(typeof i=="object")for(var m in i)this._on(m,i[m],l);else{i=y(i);for(var w=0,C=i.length;w<C;w++)this._on(i[w],l,d)}return this},off:function(i,l,d){if(!arguments.length)delete this._events;else if(typeof i=="object")for(var m in i)this._off(m,i[m],l);else{i=y(i);for(var w=arguments.length===1,C=0,I=i.length;C<I;C++)w?this._off(i[C]):this._off(i[C],l,d)}return this},_on:function(i,l,d,m){if(typeof l!="function"){console.warn("wrong listener type: "+typeof l);return}if(this._listens(i,l,d)===!1){d===this&&(d=void 0);var w={fn:l,ctx:d};m&&(w.once=!0),this._events=this._events||{},this._events[i]=this._events[i]||[],this._events[i].push(w)}},_off:function(i,l,d){var m,w,C;if(this._events&&(m=this._events[i],!!m)){if(arguments.length===1){if(this._firingCount)for(w=0,C=m.length;w<C;w++)m[w].fn=h;delete this._events[i];return}if(typeof l!="function"){console.warn("wrong listener type: "+typeof l);return}var I=this._listens(i,l,d);if(I!==!1){var F=m[I];this._firingCount&&(F.fn=h,this._events[i]=m=m.slice()),m.splice(I,1)}}},fire:function(i,l,d){if(!this.listens(i,d))return this;var m=o({},l,{type:i,target:this,sourceTarget:l&&l.sourceTarget||this});if(this._events){var w=this._events[i];if(w){this._firingCount=this._firingCount+1||1;for(var C=0,I=w.length;C<I;C++){var F=w[C],Q=F.fn;F.once&&this.off(i,Q,F.ctx),Q.call(F.ctx||this,m)}this._firingCount--}}return d&&this._propagateEvent(m),this},listens:function(i,l,d,m){typeof i!="string"&&console.warn('"string" type argument expected');var w=l;typeof l!="function"&&(m=!!l,w=void 0,d=void 0);var C=this._events&&this._events[i];if(C&&C.length&&this._listens(i,w,d)!==!1)return!0;if(m){for(var I in this._eventParents)if(this._eventParents[I].listens(i,l,d,m))return!0}return!1},_listens:function(i,l,d){if(!this._events)return!1;var m=this._events[i]||[];if(!l)return!!m.length;d===this&&(d=void 0);for(var w=0,C=m.length;w<C;w++)if(m[w].fn===l&&m[w].ctx===d)return w;return!1},once:function(i,l,d){if(typeof i=="object")for(var m in i)this._on(m,i[m],l,!0);else{i=y(i);for(var w=0,C=i.length;w<C;w++)this._on(i[w],l,d,!0)}return this},addEventParent:function(i){return this._eventParents=this._eventParents||{},this._eventParents[c(i)]=i,this},removeEventParent:function(i){return this._eventParents&&delete this._eventParents[c(i)],this},_propagateEvent:function(i){for(var l in this._eventParents)this._eventParents[l].fire(i.type,o({layer:i.target,propagatedFrom:i.target},i),!0)}};q.addEventListener=q.on,q.removeEventListener=q.clearAllEventListeners=q.off,q.addOneTimeEventListener=q.once,q.fireEvent=q.fire,q.hasEventListeners=q.listens;var se=U.extend(q);function B(i,l,d){this.x=d?Math.round(i):i,this.y=d?Math.round(l):l}var Y=Math.trunc||function(i){return i>0?Math.floor(i):Math.ceil(i)};B.prototype={clone:function(){return new B(this.x,this.y)},add:function(i){return this.clone()._add(A(i))},_add:function(i){return this.x+=i.x,this.y+=i.y,this},subtract:function(i){return this.clone()._subtract(A(i))},_subtract:function(i){return this.x-=i.x,this.y-=i.y,this},divideBy:function(i){return this.clone()._divideBy(i)},_divideBy:function(i){return this.x/=i,this.y/=i,this},multiplyBy:function(i){return this.clone()._multiplyBy(i)},_multiplyBy:function(i){return this.x*=i,this.y*=i,this},scaleBy:function(i){return new B(this.x*i.x,this.y*i.y)},unscaleBy:function(i){return new B(this.x/i.x,this.y/i.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Y(this.x),this.y=Y(this.y),this},distanceTo:function(i){i=A(i);var l=i.x-this.x,d=i.y-this.y;return Math.sqrt(l*l+d*d)},equals:function(i){return i=A(i),i.x===this.x&&i.y===this.y},contains:function(i){return i=A(i),Math.abs(i.x)<=Math.abs(this.x)&&Math.abs(i.y)<=Math.abs(this.y)},toString:function(){return"Point("+_(this.x)+", "+_(this.y)+")"}};function A(i,l,d){return i instanceof B?i:S(i)?new B(i[0],i[1]):i==null?i:typeof i=="object"&&"x"in i&&"y"in i?new B(i.x,i.y):new B(i,l,d)}function O(i,l){if(i)for(var d=l?[i,l]:i,m=0,w=d.length;m<w;m++)this.extend(d[m])}O.prototype={extend:function(i){var l,d;if(!i)return this;if(i instanceof B||typeof i[0]=="number"||"x"in i)l=d=A(i);else if(i=z(i),l=i.min,d=i.max,!l||!d)return this;return!this.min&&!this.max?(this.min=l.clone(),this.max=d.clone()):(this.min.x=Math.min(l.x,this.min.x),this.max.x=Math.max(d.x,this.max.x),this.min.y=Math.min(l.y,this.min.y),this.max.y=Math.max(d.y,this.max.y)),this},getCenter:function(i){return A((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,i)},getBottomLeft:function(){return A(this.min.x,this.max.y)},getTopRight:function(){return A(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(i){var l,d;return typeof i[0]=="number"||i instanceof B?i=A(i):i=z(i),i instanceof O?(l=i.min,d=i.max):l=d=i,l.x>=this.min.x&&d.x<=this.max.x&&l.y>=this.min.y&&d.y<=this.max.y},intersects:function(i){i=z(i);var l=this.min,d=this.max,m=i.min,w=i.max,C=w.x>=l.x&&m.x<=d.x,I=w.y>=l.y&&m.y<=d.y;return C&&I},overlaps:function(i){i=z(i);var l=this.min,d=this.max,m=i.min,w=i.max,C=w.x>l.x&&m.x<d.x,I=w.y>l.y&&m.y<d.y;return C&&I},isValid:function(){return!!(this.min&&this.max)},pad:function(i){var l=this.min,d=this.max,m=Math.abs(l.x-d.x)*i,w=Math.abs(l.y-d.y)*i;return z(A(l.x-m,l.y-w),A(d.x+m,d.y+w))},equals:function(i){return i?(i=z(i),this.min.equals(i.getTopLeft())&&this.max.equals(i.getBottomRight())):!1}};function z(i,l){return!i||i instanceof O?i:new O(i,l)}function D(i,l){if(i)for(var d=l?[i,l]:i,m=0,w=d.length;m<w;m++)this.extend(d[m])}D.prototype={extend:function(i){var l=this._southWest,d=this._northEast,m,w;if(i instanceof te)m=i,w=i;else if(i instanceof D){if(m=i._southWest,w=i._northEast,!m||!w)return this}else return i?this.extend(ie(i)||V(i)):this;return!l&&!d?(this._southWest=new te(m.lat,m.lng),this._northEast=new te(w.lat,w.lng)):(l.lat=Math.min(m.lat,l.lat),l.lng=Math.min(m.lng,l.lng),d.lat=Math.max(w.lat,d.lat),d.lng=Math.max(w.lng,d.lng)),this},pad:function(i){var l=this._southWest,d=this._northEast,m=Math.abs(l.lat-d.lat)*i,w=Math.abs(l.lng-d.lng)*i;return new D(new te(l.lat-m,l.lng-w),new te(d.lat+m,d.lng+w))},getCenter:function(){return new te((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new te(this.getNorth(),this.getWest())},getSouthEast:function(){return new te(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(i){typeof i[0]=="number"||i instanceof te||"lat"in i?i=ie(i):i=V(i);var l=this._southWest,d=this._northEast,m,w;return i instanceof D?(m=i.getSouthWest(),w=i.getNorthEast()):m=w=i,m.lat>=l.lat&&w.lat<=d.lat&&m.lng>=l.lng&&w.lng<=d.lng},intersects:function(i){i=V(i);var l=this._southWest,d=this._northEast,m=i.getSouthWest(),w=i.getNorthEast(),C=w.lat>=l.lat&&m.lat<=d.lat,I=w.lng>=l.lng&&m.lng<=d.lng;return C&&I},overlaps:function(i){i=V(i);var l=this._southWest,d=this._northEast,m=i.getSouthWest(),w=i.getNorthEast(),C=w.lat>l.lat&&m.lat<d.lat,I=w.lng>l.lng&&m.lng<d.lng;return C&&I},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(i,l){return i?(i=V(i),this._southWest.equals(i.getSouthWest(),l)&&this._northEast.equals(i.getNorthEast(),l)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function V(i,l){return i instanceof D?i:new D(i,l)}function te(i,l,d){if(isNaN(i)||isNaN(l))throw new Error("Invalid LatLng object: ("+i+", "+l+")");this.lat=+i,this.lng=+l,d!==void 0&&(this.alt=+d)}te.prototype={equals:function(i,l){if(!i)return!1;i=ie(i);var d=Math.max(Math.abs(this.lat-i.lat),Math.abs(this.lng-i.lng));return d<=(l===void 0?1e-9:l)},toString:function(i){return"LatLng("+_(this.lat,i)+", "+_(this.lng,i)+")"},distanceTo:function(i){return be.distance(this,ie(i))},wrap:function(){return be.wrapLatLng(this)},toBounds:function(i){var l=180*i/40075017,d=l/Math.cos(Math.PI/180*this.lat);return V([this.lat-l,this.lng-d],[this.lat+l,this.lng+d])},clone:function(){return new te(this.lat,this.lng,this.alt)}};function ie(i,l,d){return i instanceof te?i:S(i)&&typeof i[0]!="object"?i.length===3?new te(i[0],i[1],i[2]):i.length===2?new te(i[0],i[1]):null:i==null?i:typeof i=="object"&&"lat"in i?new te(i.lat,"lng"in i?i.lng:i.lon,i.alt):l===void 0?null:new te(i,l,d)}var fe={latLngToPoint:function(i,l){var d=this.projection.project(i),m=this.scale(l);return this.transformation._transform(d,m)},pointToLatLng:function(i,l){var d=this.scale(l),m=this.transformation.untransform(i,d);return this.projection.unproject(m)},project:function(i){return this.projection.project(i)},unproject:function(i){return this.projection.unproject(i)},scale:function(i){return 256*Math.pow(2,i)},zoom:function(i){return Math.log(i/256)/Math.LN2},getProjectedBounds:function(i){if(this.infinite)return null;var l=this.projection.bounds,d=this.scale(i),m=this.transformation.transform(l.min,d),w=this.transformation.transform(l.max,d);return new O(m,w)},infinite:!1,wrapLatLng:function(i){var l=this.wrapLng?p(i.lng,this.wrapLng,!0):i.lng,d=this.wrapLat?p(i.lat,this.wrapLat,!0):i.lat,m=i.alt;return new te(d,l,m)},wrapLatLngBounds:function(i){var l=i.getCenter(),d=this.wrapLatLng(l),m=l.lat-d.lat,w=l.lng-d.lng;if(m===0&&w===0)return i;var C=i.getSouthWest(),I=i.getNorthEast(),F=new te(C.lat-m,C.lng-w),Q=new te(I.lat-m,I.lng-w);return new D(F,Q)}},be=o({},fe,{wrapLng:[-180,180],R:6371e3,distance:function(i,l){var d=Math.PI/180,m=i.lat*d,w=l.lat*d,C=Math.sin((l.lat-i.lat)*d/2),I=Math.sin((l.lng-i.lng)*d/2),F=C*C+Math.cos(m)*Math.cos(w)*I*I,Q=2*Math.atan2(Math.sqrt(F),Math.sqrt(1-F));return this.R*Q}}),Je=6378137,Ze={R:Je,MAX_LATITUDE:85.0511287798,project:function(i){var l=Math.PI/180,d=this.MAX_LATITUDE,m=Math.max(Math.min(d,i.lat),-d),w=Math.sin(m*l);return new B(this.R*i.lng*l,this.R*Math.log((1+w)/(1-w))/2)},unproject:function(i){var l=180/Math.PI;return new te((2*Math.atan(Math.exp(i.y/this.R))-Math.PI/2)*l,i.x*l/this.R)},bounds:function(){var i=Je*Math.PI;return new O([-i,-i],[i,i])}()};function Re(i,l,d,m){if(S(i)){this._a=i[0],this._b=i[1],this._c=i[2],this._d=i[3];return}this._a=i,this._b=l,this._c=d,this._d=m}Re.prototype={transform:function(i,l){return this._transform(i.clone(),l)},_transform:function(i,l){return l=l||1,i.x=l*(this._a*i.x+this._b),i.y=l*(this._c*i.y+this._d),i},untransform:function(i,l){return l=l||1,new B((i.x/l-this._b)/this._a,(i.y/l-this._d)/this._c)}};function le(i,l,d,m){return new Re(i,l,d,m)}var me=o({},be,{code:"EPSG:3857",projection:Ze,transformation:function(){var i=.5/(Math.PI*Ze.R);return le(i,.5,-i,.5)}()}),ee=o({},me,{code:"EPSG:900913"});function ce(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function de(i,l){var d="",m,w,C,I,F,Q;for(m=0,C=i.length;m<C;m++){for(F=i[m],w=0,I=F.length;w<I;w++)Q=F[w],d+=(w?"L":"M")+Q.x+" "+Q.y;d+=l?pe.svg?"z":"x":""}return d||"M0 0"}var _e=document.documentElement.style,ke="ActiveXObject"in window,Ne=ke&&!document.addEventListener,$e="msLaunchUri"in navigator&&!("documentMode"in document),Ye=Me("webkit"),tt=Me("android"),qt=Me("android 2")||Me("android 3"),Pi=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),No=tt&&Me("Google")&&Pi<537&&!("AudioNode"in window),En=!!window.opera,Qn=!$e&&Me("chrome"),mr=Me("gecko")&&!Ye&&!En&&!ke,Bo=!Qn&&Me("safari"),J=Me("phantom"),X="OTransition"in _e,ae=navigator.platform.indexOf("Win")===0,ge=ke&&"transition"in _e,ye="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!qt,Se="MozPerspective"in _e,Ce=!window.L_DISABLE_3D&&(ge||ye||Se)&&!X&&!J,we=typeof orientation<"u"||Me("mobile"),xe=we&&Ye,Be=we&&ye,We=!window.PointerEvent&&window.MSPointerEvent,xt=!!(window.PointerEvent||We),ht="ontouchstart"in window||!!window.TouchEvent,_t=!window.L_NO_TOUCH&&(ht||xt),Kt=we&&En,Mo=we&&mr,Fa=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Ci=function(){var i=!1;try{var l=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("testPassiveEventSupport",h,l),window.removeEventListener("testPassiveEventSupport",h,l)}catch{}return i}(),Gn=function(){return!!document.createElement("canvas").getContext}(),Ur=!!(document.createElementNS&&ce("svg").createSVGRect),$a=!!Ur&&function(){var i=document.createElement("div");return i.innerHTML="<svg/>",(i.firstChild&&i.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),Ua=!Ur&&function(){try{var i=document.createElement("div");i.innerHTML='<v:shape adj="1"/>';var l=i.firstChild;return l.style.behavior="url(#default#VML)",l&&typeof l.adj=="object"}catch{return!1}}(),Wa=navigator.platform.indexOf("Mac")===0,Ei=navigator.platform.indexOf("Linux")===0;function Me(i){return navigator.userAgent.toLowerCase().indexOf(i)>=0}var pe={ie:ke,ielt9:Ne,edge:$e,webkit:Ye,android:tt,android23:qt,androidStock:No,opera:En,chrome:Qn,gecko:mr,safari:Bo,phantom:J,opera12:X,win:ae,ie3d:ge,webkit3d:ye,gecko3d:Se,any3d:Ce,mobile:we,mobileWebkit:xe,mobileWebkit3d:Be,msPointer:We,pointer:xt,touch:_t,touchNative:ht,mobileOpera:Kt,mobileGecko:Mo,retina:Fa,passiveEvents:Ci,canvas:Gn,svg:Ur,vml:Ua,inlineSvg:$a,mac:Wa,linux:Ei},_r=pe.msPointer?"MSPointerDown":"pointerdown",Oi=pe.msPointer?"MSPointerMove":"pointermove",It=pe.msPointer?"MSPointerUp":"pointerup",Ri=pe.msPointer?"MSPointerCancel":"pointercancel",Ti={touchstart:_r,touchmove:Oi,touchend:It,touchcancel:Ri},kl={touchstart:fP,touchmove:Pl,touchend:Pl,touchcancel:Pl},Li={},ag=!1;function sP(i,l,d){return l==="touchstart"&&dP(),kl[l]?(d=kl[l].bind(this,d),i.addEventListener(Ti[l],d,!1),d):(console.warn("wrong event specified:",l),h)}function lP(i,l,d){if(!Ti[l]){console.warn("wrong event specified:",l);return}i.removeEventListener(Ti[l],d,!1)}function uP(i){Li[i.pointerId]=i}function cP(i){Li[i.pointerId]&&(Li[i.pointerId]=i)}function sg(i){delete Li[i.pointerId]}function dP(){ag||(document.addEventListener(_r,uP,!0),document.addEventListener(Oi,cP,!0),document.addEventListener(It,sg,!0),document.addEventListener(Ri,sg,!0),ag=!0)}function Pl(i,l){if(l.pointerType!==(l.MSPOINTER_TYPE_MOUSE||"mouse")){l.touches=[];for(var d in Li)l.touches.push(Li[d]);l.changedTouches=[l],i(l)}}function fP(i,l){l.MSPOINTER_TYPE_TOUCH&&l.pointerType===l.MSPOINTER_TYPE_TOUCH&&Rt(l),Pl(i,l)}function hP(i){var l={},d,m;for(m in i)d=i[m],l[m]=d&&d.bind?d.bind(i):d;return i=l,l.type="dblclick",l.detail=2,l.isTrusted=!1,l._simulated=!0,l}var pP=200;function mP(i,l){i.addEventListener("dblclick",l);var d=0,m;function w(C){if(C.detail!==1){m=C.detail;return}if(!(C.pointerType==="mouse"||C.sourceCapabilities&&!C.sourceCapabilities.firesTouchEvents)){var I=fg(C);if(!(I.some(function(Q){return Q instanceof HTMLLabelElement&&Q.attributes.for})&&!I.some(function(Q){return Q instanceof HTMLInputElement||Q instanceof HTMLSelectElement}))){var F=Date.now();F-d<=pP?(m++,m===2&&l(hP(C))):m=1,d=F}}}return i.addEventListener("click",w),{dblclick:l,simDblclick:w}}function _P(i,l){i.removeEventListener("dblclick",l.dblclick),i.removeEventListener("click",l.simDblclick)}var Gd=Ol(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Ha=Ol(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),lg=Ha==="webkitTransition"||Ha==="OTransition"?Ha+"End":"transitionend";function ug(i){return typeof i=="string"?document.getElementById(i):i}function Va(i,l){var d=i.style[l]||i.currentStyle&&i.currentStyle[l];if((!d||d==="auto")&&document.defaultView){var m=document.defaultView.getComputedStyle(i,null);d=m?m[l]:null}return d==="auto"?null:d}function Ue(i,l,d){var m=document.createElement(i);return m.className=l||"",d&&d.appendChild(m),m}function at(i){var l=i.parentNode;l&&l.removeChild(i)}function Cl(i){for(;i.firstChild;)i.removeChild(i.firstChild)}function Ai(i){var l=i.parentNode;l&&l.lastChild!==i&&l.appendChild(i)}function Ii(i){var l=i.parentNode;l&&l.firstChild!==i&&l.insertBefore(i,l.firstChild)}function Jd(i,l){if(i.classList!==void 0)return i.classList.contains(l);var d=El(i);return d.length>0&&new RegExp("(^|\\s)"+l+"(\\s|$)").test(d)}function Oe(i,l){if(i.classList!==void 0)for(var d=y(l),m=0,w=d.length;m<w;m++)i.classList.add(d[m]);else if(!Jd(i,l)){var C=El(i);Yd(i,(C?C+" ":"")+l)}}function pt(i,l){i.classList!==void 0?i.classList.remove(l):Yd(i,v((" "+El(i)+" ").replace(" "+l+" "," ")))}function Yd(i,l){i.className.baseVal===void 0?i.className=l:i.className.baseVal=l}function El(i){return i.correspondingElement&&(i=i.correspondingElement),i.className.baseVal===void 0?i.className:i.className.baseVal}function pn(i,l){"opacity"in i.style?i.style.opacity=l:"filter"in i.style&&gP(i,l)}function gP(i,l){var d=!1,m="DXImageTransform.Microsoft.Alpha";try{d=i.filters.item(m)}catch{if(l===1)return}l=Math.round(l*100),d?(d.Enabled=l!==100,d.Opacity=l):i.style.filter+=" progid:"+m+"(opacity="+l+")"}function Ol(i){for(var l=document.documentElement.style,d=0;d<i.length;d++)if(i[d]in l)return i[d];return!1}function Do(i,l,d){var m=l||new B(0,0);i.style[Gd]=(pe.ie3d?"translate("+m.x+"px,"+m.y+"px)":"translate3d("+m.x+"px,"+m.y+"px,0)")+(d?" scale("+d+")":"")}function gt(i,l){i._leaflet_pos=l,pe.any3d?Do(i,l):(i.style.left=l.x+"px",i.style.top=l.y+"px")}function jo(i){return i._leaflet_pos||new B(0,0)}var Za,qa,Xd;if("onselectstart"in document)Za=function(){Ee(window,"selectstart",Rt)},qa=function(){Xe(window,"selectstart",Rt)};else{var Ka=Ol(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Za=function(){if(Ka){var i=document.documentElement.style;Xd=i[Ka],i[Ka]="none"}},qa=function(){Ka&&(document.documentElement.style[Ka]=Xd,Xd=void 0)}}function ef(){Ee(window,"dragstart",Rt)}function tf(){Xe(window,"dragstart",Rt)}var Rl,nf;function rf(i){for(;i.tabIndex===-1;)i=i.parentNode;i.style&&(Tl(),Rl=i,nf=i.style.outline,i.style.outline="none",Ee(window,"keydown",Tl))}function Tl(){Rl&&(Rl.style.outline=nf,Rl=void 0,nf=void 0,Xe(window,"keydown",Tl))}function cg(i){do i=i.parentNode;while((!i.offsetWidth||!i.offsetHeight)&&i!==document.body);return i}function of(i){var l=i.getBoundingClientRect();return{x:l.width/i.offsetWidth||1,y:l.height/i.offsetHeight||1,boundingClientRect:l}}var vP={__proto__:null,TRANSFORM:Gd,TRANSITION:Ha,TRANSITION_END:lg,get:ug,getStyle:Va,create:Ue,remove:at,empty:Cl,toFront:Ai,toBack:Ii,hasClass:Jd,addClass:Oe,removeClass:pt,setClass:Yd,getClass:El,setOpacity:pn,testProp:Ol,setTransform:Do,setPosition:gt,getPosition:jo,get disableTextSelection(){return Za},get enableTextSelection(){return qa},disableImageDrag:ef,enableImageDrag:tf,preventOutline:rf,restoreOutline:Tl,getSizedParentNode:cg,getScale:of};function Ee(i,l,d,m){if(l&&typeof l=="object")for(var w in l)sf(i,w,l[w],d);else{l=y(l);for(var C=0,I=l.length;C<I;C++)sf(i,l[C],d,m)}return this}var Jn="_leaflet_events";function Xe(i,l,d,m){if(arguments.length===1)dg(i),delete i[Jn];else if(l&&typeof l=="object")for(var w in l)lf(i,w,l[w],d);else if(l=y(l),arguments.length===2)dg(i,function(F){return E(l,F)!==-1});else for(var C=0,I=l.length;C<I;C++)lf(i,l[C],d,m);return this}function dg(i,l){for(var d in i[Jn]){var m=d.split(/\d/)[0];(!l||l(m))&&lf(i,m,null,null,d)}}var af={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function sf(i,l,d,m){var w=l+c(d)+(m?"_"+c(m):"");if(i[Jn]&&i[Jn][w])return this;var C=function(F){return d.call(m||i,F||window.event)},I=C;!pe.touchNative&&pe.pointer&&l.indexOf("touch")===0?C=sP(i,l,C):pe.touch&&l==="dblclick"?C=mP(i,C):"addEventListener"in i?l==="touchstart"||l==="touchmove"||l==="wheel"||l==="mousewheel"?i.addEventListener(af[l]||l,C,pe.passiveEvents?{passive:!1}:!1):l==="mouseenter"||l==="mouseleave"?(C=function(F){F=F||window.event,cf(i,F)&&I(F)},i.addEventListener(af[l],C,!1)):i.addEventListener(l,I,!1):i.attachEvent("on"+l,C),i[Jn]=i[Jn]||{},i[Jn][w]=C}function lf(i,l,d,m,w){w=w||l+c(d)+(m?"_"+c(m):"");var C=i[Jn]&&i[Jn][w];if(!C)return this;!pe.touchNative&&pe.pointer&&l.indexOf("touch")===0?lP(i,l,C):pe.touch&&l==="dblclick"?_P(i,C):"removeEventListener"in i?i.removeEventListener(af[l]||l,C,!1):i.detachEvent("on"+l,C),i[Jn][w]=null}function Fo(i){return i.stopPropagation?i.stopPropagation():i.originalEvent?i.originalEvent._stopped=!0:i.cancelBubble=!0,this}function uf(i){return sf(i,"wheel",Fo),this}function Qa(i){return Ee(i,"mousedown touchstart dblclick contextmenu",Fo),i._leaflet_disable_click=!0,this}function Rt(i){return i.preventDefault?i.preventDefault():i.returnValue=!1,this}function $o(i){return Rt(i),Fo(i),this}function fg(i){if(i.composedPath)return i.composedPath();for(var l=[],d=i.target;d;)l.push(d),d=d.parentNode;return l}function hg(i,l){if(!l)return new B(i.clientX,i.clientY);var d=of(l),m=d.boundingClientRect;return new B((i.clientX-m.left)/d.x-l.clientLeft,(i.clientY-m.top)/d.y-l.clientTop)}var yP=pe.linux&&pe.chrome?window.devicePixelRatio:pe.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function pg(i){return pe.edge?i.wheelDeltaY/2:i.deltaY&&i.deltaMode===0?-i.deltaY/yP:i.deltaY&&i.deltaMode===1?-i.deltaY*20:i.deltaY&&i.deltaMode===2?-i.deltaY*60:i.deltaX||i.deltaZ?0:i.wheelDelta?(i.wheelDeltaY||i.wheelDelta)/2:i.detail&&Math.abs(i.detail)<32765?-i.detail*20:i.detail?i.detail/-32765*60:0}function cf(i,l){var d=l.relatedTarget;if(!d)return!0;try{for(;d&&d!==i;)d=d.parentNode}catch{return!1}return d!==i}var bP={__proto__:null,on:Ee,off:Xe,stopPropagation:Fo,disableScrollPropagation:uf,disableClickPropagation:Qa,preventDefault:Rt,stop:$o,getPropagationPath:fg,getMousePosition:hg,getWheelDelta:pg,isExternalTarget:cf,addListener:Ee,removeListener:Xe},mg=se.extend({run:function(i,l,d,m){this.stop(),this._el=i,this._inProgress=!0,this._duration=d||.25,this._easeOutPower=1/Math.max(m||.5,.2),this._startPos=jo(i),this._offset=l.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=H(this._animate,this),this._step()},_step:function(i){var l=+new Date-this._startTime,d=this._duration*1e3;l<d?this._runFrame(this._easeOut(l/d),i):(this._runFrame(1),this._complete())},_runFrame:function(i,l){var d=this._startPos.add(this._offset.multiplyBy(i));l&&d._round(),gt(this._el,d),this.fire("step")},_complete:function(){G(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(i){return 1-Math.pow(1-i,this._easeOutPower)}}),De=se.extend({options:{crs:me,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(i,l){l=b(this,l),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(i),this._initLayout(),this._onResize=s(this._onResize,this),this._initEvents(),l.maxBounds&&this.setMaxBounds(l.maxBounds),l.zoom!==void 0&&(this._zoom=this._limitZoom(l.zoom)),l.center&&l.zoom!==void 0&&this.setView(ie(l.center),l.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Ha&&pe.any3d&&!pe.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),Ee(this._proxy,lg,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(i,l,d){if(l=l===void 0?this._zoom:this._limitZoom(l),i=this._limitCenter(ie(i),l,this.options.maxBounds),d=d||{},this._stop(),this._loaded&&!d.reset&&d!==!0){d.animate!==void 0&&(d.zoom=o({animate:d.animate},d.zoom),d.pan=o({animate:d.animate,duration:d.duration},d.pan));var m=this._zoom!==l?this._tryAnimatedZoom&&this._tryAnimatedZoom(i,l,d.zoom):this._tryAnimatedPan(i,d.pan);if(m)return clearTimeout(this._sizeTimer),this}return this._resetView(i,l,d.pan&&d.pan.noMoveStart),this},setZoom:function(i,l){return this._loaded?this.setView(this.getCenter(),i,{zoom:l}):(this._zoom=i,this)},zoomIn:function(i,l){return i=i||(pe.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+i,l)},zoomOut:function(i,l){return i=i||(pe.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-i,l)},setZoomAround:function(i,l,d){var m=this.getZoomScale(l),w=this.getSize().divideBy(2),C=i instanceof B?i:this.latLngToContainerPoint(i),I=C.subtract(w).multiplyBy(1-1/m),F=this.containerPointToLatLng(w.add(I));return this.setView(F,l,{zoom:d})},_getBoundsCenterZoom:function(i,l){l=l||{},i=i.getBounds?i.getBounds():V(i);var d=A(l.paddingTopLeft||l.padding||[0,0]),m=A(l.paddingBottomRight||l.padding||[0,0]),w=this.getBoundsZoom(i,!1,d.add(m));if(w=typeof l.maxZoom=="number"?Math.min(l.maxZoom,w):w,w===1/0)return{center:i.getCenter(),zoom:w};var C=m.subtract(d).divideBy(2),I=this.project(i.getSouthWest(),w),F=this.project(i.getNorthEast(),w),Q=this.unproject(I.add(F).divideBy(2).add(C),w);return{center:Q,zoom:w}},fitBounds:function(i,l){if(i=V(i),!i.isValid())throw new Error("Bounds are not valid.");var d=this._getBoundsCenterZoom(i,l);return this.setView(d.center,d.zoom,l)},fitWorld:function(i){return this.fitBounds([[-90,-180],[90,180]],i)},panTo:function(i,l){return this.setView(i,this._zoom,{pan:l})},panBy:function(i,l){if(i=A(i).round(),l=l||{},!i.x&&!i.y)return this.fire("moveend");if(l.animate!==!0&&!this.getSize().contains(i))return this._resetView(this.unproject(this.project(this.getCenter()).add(i)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new mg,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),l.noMoveStart||this.fire("movestart"),l.animate!==!1){Oe(this._mapPane,"leaflet-pan-anim");var d=this._getMapPanePos().subtract(i).round();this._panAnim.run(this._mapPane,d,l.duration||.25,l.easeLinearity)}else this._rawPanBy(i),this.fire("move").fire("moveend");return this},flyTo:function(i,l,d){if(d=d||{},d.animate===!1||!pe.any3d)return this.setView(i,l,d);this._stop();var m=this.project(this.getCenter()),w=this.project(i),C=this.getSize(),I=this._zoom;i=ie(i),l=l===void 0?I:l;var F=Math.max(C.x,C.y),Q=F*this.getZoomScale(I,l),oe=w.distanceTo(m)||1,he=1.42,Pe=he*he;function Te(vt){var Wl=vt?-1:1,lC=vt?Q:F,uC=Q*Q-F*F+Wl*Pe*Pe*oe*oe,cC=2*lC*Pe*oe,xf=uC/cC,Qg=Math.sqrt(xf*xf+1)-xf,dC=Qg<1e-9?-18:Math.log(Qg);return dC}function _n(vt){return(Math.exp(vt)-Math.exp(-vt))/2}function Wo(vt){return(Math.exp(vt)+Math.exp(-vt))/2}function Ul(vt){return _n(vt)/Wo(vt)}var Vr=Te(0);function bf(vt){return F*(Wo(Vr)/Wo(Vr+he*vt))}function oC(vt){return F*(Wo(Vr)*Ul(Vr+he*vt)-_n(Vr))/Pe}function iC(vt){return 1-Math.pow(1-vt,1.5)}var aC=Date.now(),qg=(Te(1)-Vr)/he,sC=d.duration?1e3*d.duration:1e3*qg*.8;function Kg(){var vt=(Date.now()-aC)/sC,Wl=iC(vt)*qg;vt<=1?(this._flyToFrame=H(Kg,this),this._move(this.unproject(m.add(w.subtract(m).multiplyBy(oC(Wl)/oe)),I),this.getScaleZoom(F/bf(Wl),I),{flyTo:!0})):this._move(i,l)._moveEnd(!0)}return this._moveStart(!0,d.noMoveStart),Kg.call(this),this},flyToBounds:function(i,l){var d=this._getBoundsCenterZoom(i,l);return this.flyTo(d.center,d.zoom,l)},setMaxBounds:function(i){return i=V(i),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),i.isValid()?(this.options.maxBounds=i,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(i){var l=this.options.minZoom;return this.options.minZoom=i,this._loaded&&l!==i&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(i):this},setMaxZoom:function(i){var l=this.options.maxZoom;return this.options.maxZoom=i,this._loaded&&l!==i&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(i):this},panInsideBounds:function(i,l){this._enforcingBounds=!0;var d=this.getCenter(),m=this._limitCenter(d,this._zoom,V(i));return d.equals(m)||this.panTo(m,l),this._enforcingBounds=!1,this},panInside:function(i,l){l=l||{};var d=A(l.paddingTopLeft||l.padding||[0,0]),m=A(l.paddingBottomRight||l.padding||[0,0]),w=this.project(this.getCenter()),C=this.project(i),I=this.getPixelBounds(),F=z([I.min.add(d),I.max.subtract(m)]),Q=F.getSize();if(!F.contains(C)){this._enforcingBounds=!0;var oe=C.subtract(F.getCenter()),he=F.extend(C).getSize().subtract(Q);w.x+=oe.x<0?-he.x:he.x,w.y+=oe.y<0?-he.y:he.y,this.panTo(this.unproject(w),l),this._enforcingBounds=!1}return this},invalidateSize:function(i){if(!this._loaded)return this;i=o({animate:!1,pan:!0},i===!0?{animate:!0}:i);var l=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var d=this.getSize(),m=l.divideBy(2).round(),w=d.divideBy(2).round(),C=m.subtract(w);return!C.x&&!C.y?this:(i.animate&&i.pan?this.panBy(C):(i.pan&&this._rawPanBy(C),this.fire("move"),i.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(s(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:l,newSize:d}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(i){if(i=this._locateOptions=o({timeout:1e4,watch:!1},i),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var l=s(this._handleGeolocationResponse,this),d=s(this._handleGeolocationError,this);return i.watch?this._locationWatchId=navigator.geolocation.watchPosition(l,d,i):navigator.geolocation.getCurrentPosition(l,d,i),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(i){if(this._container._leaflet_id){var l=i.code,d=i.message||(l===1?"permission denied":l===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:l,message:"Geolocation error: "+d+"."})}},_handleGeolocationResponse:function(i){if(this._container._leaflet_id){var l=i.coords.latitude,d=i.coords.longitude,m=new te(l,d),w=m.toBounds(i.coords.accuracy*2),C=this._locateOptions;if(C.setView){var I=this.getBoundsZoom(w);this.setView(m,C.maxZoom?Math.min(I,C.maxZoom):I)}var F={latlng:m,bounds:w,timestamp:i.timestamp};for(var Q in i.coords)typeof i.coords[Q]=="number"&&(F[Q]=i.coords[Q]);this.fire("locationfound",F)}},addHandler:function(i,l){if(!l)return this;var d=this[i]=new l(this);return this._handlers.push(d),this.options[i]&&d.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),at(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(G(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var i;for(i in this._layers)this._layers[i].remove();for(i in this._panes)at(this._panes[i]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(i,l){var d="leaflet-pane"+(i?" leaflet-"+i.replace("Pane","")+"-pane":""),m=Ue("div",d,l||this._mapPane);return i&&(this._panes[i]=m),m},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var i=this.getPixelBounds(),l=this.unproject(i.getBottomLeft()),d=this.unproject(i.getTopRight());return new D(l,d)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(i,l,d){i=V(i),d=A(d||[0,0]);var m=this.getZoom()||0,w=this.getMinZoom(),C=this.getMaxZoom(),I=i.getNorthWest(),F=i.getSouthEast(),Q=this.getSize().subtract(d),oe=z(this.project(F,m),this.project(I,m)).getSize(),he=pe.any3d?this.options.zoomSnap:1,Pe=Q.x/oe.x,Te=Q.y/oe.y,_n=l?Math.max(Pe,Te):Math.min(Pe,Te);return m=this.getScaleZoom(_n,m),he&&(m=Math.round(m/(he/100))*(he/100),m=l?Math.ceil(m/he)*he:Math.floor(m/he)*he),Math.max(w,Math.min(C,m))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new B(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(i,l){var d=this._getTopLeftPoint(i,l);return new O(d,d.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(i){return this.options.crs.getProjectedBounds(i===void 0?this.getZoom():i)},getPane:function(i){return typeof i=="string"?this._panes[i]:i},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(i,l){var d=this.options.crs;return l=l===void 0?this._zoom:l,d.scale(i)/d.scale(l)},getScaleZoom:function(i,l){var d=this.options.crs;l=l===void 0?this._zoom:l;var m=d.zoom(i*d.scale(l));return isNaN(m)?1/0:m},project:function(i,l){return l=l===void 0?this._zoom:l,this.options.crs.latLngToPoint(ie(i),l)},unproject:function(i,l){return l=l===void 0?this._zoom:l,this.options.crs.pointToLatLng(A(i),l)},layerPointToLatLng:function(i){var l=A(i).add(this.getPixelOrigin());return this.unproject(l)},latLngToLayerPoint:function(i){var l=this.project(ie(i))._round();return l._subtract(this.getPixelOrigin())},wrapLatLng:function(i){return this.options.crs.wrapLatLng(ie(i))},wrapLatLngBounds:function(i){return this.options.crs.wrapLatLngBounds(V(i))},distance:function(i,l){return this.options.crs.distance(ie(i),ie(l))},containerPointToLayerPoint:function(i){return A(i).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(i){return A(i).add(this._getMapPanePos())},containerPointToLatLng:function(i){var l=this.containerPointToLayerPoint(A(i));return this.layerPointToLatLng(l)},latLngToContainerPoint:function(i){return this.layerPointToContainerPoint(this.latLngToLayerPoint(ie(i)))},mouseEventToContainerPoint:function(i){return hg(i,this._container)},mouseEventToLayerPoint:function(i){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(i))},mouseEventToLatLng:function(i){return this.layerPointToLatLng(this.mouseEventToLayerPoint(i))},_initContainer:function(i){var l=this._container=ug(i);if(l){if(l._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");Ee(l,"scroll",this._onScroll,this),this._containerId=c(l)},_initLayout:function(){var i=this._container;this._fadeAnimated=this.options.fadeAnimation&&pe.any3d,Oe(i,"leaflet-container"+(pe.touch?" leaflet-touch":"")+(pe.retina?" leaflet-retina":"")+(pe.ielt9?" leaflet-oldie":"")+(pe.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var l=Va(i,"position");l!=="absolute"&&l!=="relative"&&l!=="fixed"&&l!=="sticky"&&(i.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var i=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),gt(this._mapPane,new B(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Oe(i.markerPane,"leaflet-zoom-hide"),Oe(i.shadowPane,"leaflet-zoom-hide"))},_resetView:function(i,l,d){gt(this._mapPane,new B(0,0));var m=!this._loaded;this._loaded=!0,l=this._limitZoom(l),this.fire("viewprereset");var w=this._zoom!==l;this._moveStart(w,d)._move(i,l)._moveEnd(w),this.fire("viewreset"),m&&this.fire("load")},_moveStart:function(i,l){return i&&this.fire("zoomstart"),l||this.fire("movestart"),this},_move:function(i,l,d,m){l===void 0&&(l=this._zoom);var w=this._zoom!==l;return this._zoom=l,this._lastCenter=i,this._pixelOrigin=this._getNewPixelOrigin(i),m?d&&d.pinch&&this.fire("zoom",d):((w||d&&d.pinch)&&this.fire("zoom",d),this.fire("move",d)),this},_moveEnd:function(i){return i&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return G(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(i){gt(this._mapPane,this._getMapPanePos().subtract(i))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(i){this._targets={},this._targets[c(this._container)]=this;var l=i?Xe:Ee;l(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&l(window,"resize",this._onResize,this),pe.any3d&&this.options.transform3DLimit&&(i?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){G(this._resizeRequest),this._resizeRequest=H(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var i=this._getMapPanePos();Math.max(Math.abs(i.x),Math.abs(i.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(i,l){for(var d=[],m,w=l==="mouseout"||l==="mouseover",C=i.target||i.srcElement,I=!1;C;){if(m=this._targets[c(C)],m&&(l==="click"||l==="preclick")&&this._draggableMoved(m)){I=!0;break}if(m&&m.listens(l,!0)&&(w&&!cf(C,i)||(d.push(m),w))||C===this._container)break;C=C.parentNode}return!d.length&&!I&&!w&&this.listens(l,!0)&&(d=[this]),d},_isClickDisabled:function(i){for(;i&&i!==this._container;){if(i._leaflet_disable_click)return!0;i=i.parentNode}},_handleDOMEvent:function(i){var l=i.target||i.srcElement;if(!(!this._loaded||l._leaflet_disable_events||i.type==="click"&&this._isClickDisabled(l))){var d=i.type;d==="mousedown"&&rf(l),this._fireDOMEvent(i,d)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(i,l,d){if(i.type==="click"){var m=o({},i);m.type="preclick",this._fireDOMEvent(m,m.type,d)}var w=this._findEventTargets(i,l);if(d){for(var C=[],I=0;I<d.length;I++)d[I].listens(l,!0)&&C.push(d[I]);w=C.concat(w)}if(w.length){l==="contextmenu"&&Rt(i);var F=w[0],Q={originalEvent:i};if(i.type!=="keypress"&&i.type!=="keydown"&&i.type!=="keyup"){var oe=F.getLatLng&&(!F._radius||F._radius<=10);Q.containerPoint=oe?this.latLngToContainerPoint(F.getLatLng()):this.mouseEventToContainerPoint(i),Q.layerPoint=this.containerPointToLayerPoint(Q.containerPoint),Q.latlng=oe?F.getLatLng():this.layerPointToLatLng(Q.layerPoint)}for(I=0;I<w.length;I++)if(w[I].fire(l,Q,!0),Q.originalEvent._stopped||w[I].options.bubblingMouseEvents===!1&&E(this._mouseEvents,l)!==-1)return}},_draggableMoved:function(i){return i=i.dragging&&i.dragging.enabled()?i:this,i.dragging&&i.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var i=0,l=this._handlers.length;i<l;i++)this._handlers[i].disable()},whenReady:function(i,l){return this._loaded?i.call(l||this,{target:this}):this.on("load",i,l),this},_getMapPanePos:function(){return jo(this._mapPane)||new B(0,0)},_moved:function(){var i=this._getMapPanePos();return i&&!i.equals([0,0])},_getTopLeftPoint:function(i,l){var d=i&&l!==void 0?this._getNewPixelOrigin(i,l):this.getPixelOrigin();return d.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(i,l){var d=this.getSize()._divideBy(2);return this.project(i,l)._subtract(d)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(i,l,d){var m=this._getNewPixelOrigin(d,l);return this.project(i,l)._subtract(m)},_latLngBoundsToNewLayerBounds:function(i,l,d){var m=this._getNewPixelOrigin(d,l);return z([this.project(i.getSouthWest(),l)._subtract(m),this.project(i.getNorthWest(),l)._subtract(m),this.project(i.getSouthEast(),l)._subtract(m),this.project(i.getNorthEast(),l)._subtract(m)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(i){return this.latLngToLayerPoint(i).subtract(this._getCenterLayerPoint())},_limitCenter:function(i,l,d){if(!d)return i;var m=this.project(i,l),w=this.getSize().divideBy(2),C=new O(m.subtract(w),m.add(w)),I=this._getBoundsOffset(C,d,l);return Math.abs(I.x)<=1&&Math.abs(I.y)<=1?i:this.unproject(m.add(I),l)},_limitOffset:function(i,l){if(!l)return i;var d=this.getPixelBounds(),m=new O(d.min.add(i),d.max.add(i));return i.add(this._getBoundsOffset(m,l))},_getBoundsOffset:function(i,l,d){var m=z(this.project(l.getNorthEast(),d),this.project(l.getSouthWest(),d)),w=m.min.subtract(i.min),C=m.max.subtract(i.max),I=this._rebound(w.x,-C.x),F=this._rebound(w.y,-C.y);return new B(I,F)},_rebound:function(i,l){return i+l>0?Math.round(i-l)/2:Math.max(0,Math.ceil(i))-Math.max(0,Math.floor(l))},_limitZoom:function(i){var l=this.getMinZoom(),d=this.getMaxZoom(),m=pe.any3d?this.options.zoomSnap:1;return m&&(i=Math.round(i/m)*m),Math.max(l,Math.min(d,i))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){pt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(i,l){var d=this._getCenterOffset(i)._trunc();return(l&&l.animate)!==!0&&!this.getSize().contains(d)?!1:(this.panBy(d,l),!0)},_createAnimProxy:function(){var i=this._proxy=Ue("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(i),this.on("zoomanim",function(l){var d=Gd,m=this._proxy.style[d];Do(this._proxy,this.project(l.center,l.zoom),this.getZoomScale(l.zoom,1)),m===this._proxy.style[d]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){at(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var i=this.getCenter(),l=this.getZoom();Do(this._proxy,this.project(i,l),this.getZoomScale(l,1))},_catchTransitionEnd:function(i){this._animatingZoom&&i.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(i,l,d){if(this._animatingZoom)return!0;if(d=d||{},!this._zoomAnimated||d.animate===!1||this._nothingToAnimate()||Math.abs(l-this._zoom)>this.options.zoomAnimationThreshold)return!1;var m=this.getZoomScale(l),w=this._getCenterOffset(i)._divideBy(1-1/m);return d.animate!==!0&&!this.getSize().contains(w)?!1:(H(function(){this._moveStart(!0,!1)._animateZoom(i,l,!0)},this),!0)},_animateZoom:function(i,l,d,m){this._mapPane&&(d&&(this._animatingZoom=!0,this._animateToCenter=i,this._animateToZoom=l,Oe(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:i,zoom:l,noUpdate:m}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(s(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&pt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function xP(i,l){return new De(i,l)}var On=U.extend({options:{position:"topright"},initialize:function(i){b(this,i)},getPosition:function(){return this.options.position},setPosition:function(i){var l=this._map;return l&&l.removeControl(this),this.options.position=i,l&&l.addControl(this),this},getContainer:function(){return this._container},addTo:function(i){this.remove(),this._map=i;var l=this._container=this.onAdd(i),d=this.getPosition(),m=i._controlCorners[d];return Oe(l,"leaflet-control"),d.indexOf("bottom")!==-1?m.insertBefore(l,m.firstChild):m.appendChild(l),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(at(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(i){this._map&&i&&i.screenX>0&&i.screenY>0&&this._map.getContainer().focus()}}),Ga=function(i){return new On(i)};De.include({addControl:function(i){return i.addTo(this),this},removeControl:function(i){return i.remove(),this},_initControlPos:function(){var i=this._controlCorners={},l="leaflet-",d=this._controlContainer=Ue("div",l+"control-container",this._container);function m(w,C){var I=l+w+" "+l+C;i[w+C]=Ue("div",I,d)}m("top","left"),m("top","right"),m("bottom","left"),m("bottom","right")},_clearControlPos:function(){for(var i in this._controlCorners)at(this._controlCorners[i]);at(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var _g=On.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(i,l,d,m){return d<m?-1:m<d?1:0}},initialize:function(i,l,d){b(this,d),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1;for(var m in i)this._addLayer(i[m],m);for(m in l)this._addLayer(l[m],m,!0)},onAdd:function(i){this._initLayout(),this._update(),this._map=i,i.on("zoomend",this._checkDisabledLayers,this);for(var l=0;l<this._layers.length;l++)this._layers[l].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(i){return On.prototype.addTo.call(this,i),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(i,l){return this._addLayer(i,l),this._map?this._update():this},addOverlay:function(i,l){return this._addLayer(i,l,!0),this._map?this._update():this},removeLayer:function(i){i.off("add remove",this._onLayerChange,this);var l=this._getLayer(c(i));return l&&this._layers.splice(this._layers.indexOf(l),1),this._map?this._update():this},expand:function(){Oe(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var i=this._map.getSize().y-(this._container.offsetTop+50);return i<this._section.clientHeight?(Oe(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=i+"px"):pt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return pt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var i="leaflet-control-layers",l=this._container=Ue("div",i),d=this.options.collapsed;l.setAttribute("aria-haspopup",!0),Qa(l),uf(l);var m=this._section=Ue("section",i+"-list");d&&(this._map.on("click",this.collapse,this),Ee(l,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var w=this._layersLink=Ue("a",i+"-toggle",l);w.href="#",w.title="Layers",w.setAttribute("role","button"),Ee(w,{keydown:function(C){C.keyCode===13&&this._expandSafely()},click:function(C){Rt(C),this._expandSafely()}},this),d||this.expand(),this._baseLayersList=Ue("div",i+"-base",m),this._separator=Ue("div",i+"-separator",m),this._overlaysList=Ue("div",i+"-overlays",m),l.appendChild(m)},_getLayer:function(i){for(var l=0;l<this._layers.length;l++)if(this._layers[l]&&c(this._layers[l].layer)===i)return this._layers[l]},_addLayer:function(i,l,d){this._map&&i.on("add remove",this._onLayerChange,this),this._layers.push({layer:i,name:l,overlay:d}),this.options.sortLayers&&this._layers.sort(s(function(m,w){return this.options.sortFunction(m.layer,w.layer,m.name,w.name)},this)),this.options.autoZIndex&&i.setZIndex&&(this._lastZIndex++,i.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Cl(this._baseLayersList),Cl(this._overlaysList),this._layerControlInputs=[];var i,l,d,m,w=0;for(d=0;d<this._layers.length;d++)m=this._layers[d],this._addItem(m),l=l||m.overlay,i=i||!m.overlay,w+=m.overlay?0:1;return this.options.hideSingleBase&&(i=i&&w>1,this._baseLayersList.style.display=i?"":"none"),this._separator.style.display=l&&i?"":"none",this},_onLayerChange:function(i){this._handlingClick||this._update();var l=this._getLayer(c(i.target)),d=l.overlay?i.type==="add"?"overlayadd":"overlayremove":i.type==="add"?"baselayerchange":null;d&&this._map.fire(d,l)},_createRadioElement:function(i,l){var d='<input type="radio" class="leaflet-control-layers-selector" name="'+i+'"'+(l?' checked="checked"':"")+"/>",m=document.createElement("div");return m.innerHTML=d,m.firstChild},_addItem:function(i){var l=document.createElement("label"),d=this._map.hasLayer(i.layer),m;i.overlay?(m=document.createElement("input"),m.type="checkbox",m.className="leaflet-control-layers-selector",m.defaultChecked=d):m=this._createRadioElement("leaflet-base-layers_"+c(this),d),this._layerControlInputs.push(m),m.layerId=c(i.layer),Ee(m,"click",this._onInputClick,this);var w=document.createElement("span");w.innerHTML=" "+i.name;var C=document.createElement("span");l.appendChild(C),C.appendChild(m),C.appendChild(w);var I=i.overlay?this._overlaysList:this._baseLayersList;return I.appendChild(l),this._checkDisabledLayers(),l},_onInputClick:function(){var i=this._layerControlInputs,l,d,m=[],w=[];this._handlingClick=!0;for(var C=i.length-1;C>=0;C--)l=i[C],d=this._getLayer(l.layerId).layer,l.checked?m.push(d):l.checked||w.push(d);for(C=0;C<w.length;C++)this._map.hasLayer(w[C])&&this._map.removeLayer(w[C]);for(C=0;C<m.length;C++)this._map.hasLayer(m[C])||this._map.addLayer(m[C]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var i=this._layerControlInputs,l,d,m=this._map.getZoom(),w=i.length-1;w>=0;w--)l=i[w],d=this._getLayer(l.layerId).layer,l.disabled=d.options.minZoom!==void 0&&m<d.options.minZoom||d.options.maxZoom!==void 0&&m>d.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var i=this._section;Ee(i,"click",Rt),this.expand(),setTimeout(function(){Xe(i,"click",Rt)})}}),wP=function(i,l,d){return new _g(i,l,d)},df=On.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(i){var l="leaflet-control-zoom",d=Ue("div",l+" leaflet-bar"),m=this.options;return this._zoomInButton=this._createButton(m.zoomInText,m.zoomInTitle,l+"-in",d,this._zoomIn),this._zoomOutButton=this._createButton(m.zoomOutText,m.zoomOutTitle,l+"-out",d,this._zoomOut),this._updateDisabled(),i.on("zoomend zoomlevelschange",this._updateDisabled,this),d},onRemove:function(i){i.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(i){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(i.shiftKey?3:1))},_zoomOut:function(i){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(i.shiftKey?3:1))},_createButton:function(i,l,d,m,w){var C=Ue("a",d,m);return C.innerHTML=i,C.href="#",C.title=l,C.setAttribute("role","button"),C.setAttribute("aria-label",l),Qa(C),Ee(C,"click",$o),Ee(C,"click",w,this),Ee(C,"click",this._refocusOnMap,this),C},_updateDisabled:function(){var i=this._map,l="leaflet-disabled";pt(this._zoomInButton,l),pt(this._zoomOutButton,l),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||i._zoom===i.getMinZoom())&&(Oe(this._zoomOutButton,l),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||i._zoom===i.getMaxZoom())&&(Oe(this._zoomInButton,l),this._zoomInButton.setAttribute("aria-disabled","true"))}});De.mergeOptions({zoomControl:!0}),De.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new df,this.addControl(this.zoomControl))});var SP=function(i){return new df(i)},gg=On.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(i){var l="leaflet-control-scale",d=Ue("div",l),m=this.options;return this._addScales(m,l+"-line",d),i.on(m.updateWhenIdle?"moveend":"move",this._update,this),i.whenReady(this._update,this),d},onRemove:function(i){i.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(i,l,d){i.metric&&(this._mScale=Ue("div",l,d)),i.imperial&&(this._iScale=Ue("div",l,d))},_update:function(){var i=this._map,l=i.getSize().y/2,d=i.distance(i.containerPointToLatLng([0,l]),i.containerPointToLatLng([this.options.maxWidth,l]));this._updateScales(d)},_updateScales:function(i){this.options.metric&&i&&this._updateMetric(i),this.options.imperial&&i&&this._updateImperial(i)},_updateMetric:function(i){var l=this._getRoundNum(i),d=l<1e3?l+" m":l/1e3+" km";this._updateScale(this._mScale,d,l/i)},_updateImperial:function(i){var l=i*3.2808399,d,m,w;l>5280?(d=l/5280,m=this._getRoundNum(d),this._updateScale(this._iScale,m+" mi",m/d)):(w=this._getRoundNum(l),this._updateScale(this._iScale,w+" ft",w/l))},_updateScale:function(i,l,d){i.style.width=Math.round(this.options.maxWidth*d)+"px",i.innerHTML=l},_getRoundNum:function(i){var l=Math.pow(10,(Math.floor(i)+"").length-1),d=i/l;return d=d>=10?10:d>=5?5:d>=3?3:d>=2?2:1,l*d}}),kP=function(i){return new gg(i)},PP='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',ff=On.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(pe.inlineSvg?PP+" ":"")+"Leaflet</a>"},initialize:function(i){b(this,i),this._attributions={}},onAdd:function(i){i.attributionControl=this,this._container=Ue("div","leaflet-control-attribution"),Qa(this._container);for(var l in i._layers)i._layers[l].getAttribution&&this.addAttribution(i._layers[l].getAttribution());return this._update(),i.on("layeradd",this._addAttribution,this),this._container},onRemove:function(i){i.off("layeradd",this._addAttribution,this)},_addAttribution:function(i){i.layer.getAttribution&&(this.addAttribution(i.layer.getAttribution()),i.layer.once("remove",function(){this.removeAttribution(i.layer.getAttribution())},this))},setPrefix:function(i){return this.options.prefix=i,this._update(),this},addAttribution:function(i){return i?(this._attributions[i]||(this._attributions[i]=0),this._attributions[i]++,this._update(),this):this},removeAttribution:function(i){return i?(this._attributions[i]&&(this._attributions[i]--,this._update()),this):this},_update:function(){if(this._map){var i=[];for(var l in this._attributions)this._attributions[l]&&i.push(l);var d=[];this.options.prefix&&d.push(this.options.prefix),i.length&&d.push(i.join(", ")),this._container.innerHTML=d.join(' <span aria-hidden="true">|</span> ')}}});De.mergeOptions({attributionControl:!0}),De.addInitHook(function(){this.options.attributionControl&&new ff().addTo(this)});var CP=function(i){return new ff(i)};On.Layers=_g,On.Zoom=df,On.Scale=gg,On.Attribution=ff,Ga.layers=wP,Ga.zoom=SP,Ga.scale=kP,Ga.attribution=CP;var Yn=U.extend({initialize:function(i){this._map=i},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Yn.addTo=function(i,l){return i.addHandler(l,this),this};var EP={Events:q},vg=pe.touch?"touchstart mousedown":"mousedown",Wr=se.extend({options:{clickTolerance:3},initialize:function(i,l,d,m){b(this,m),this._element=i,this._dragStartTarget=l||i,this._preventOutline=d},enable:function(){this._enabled||(Ee(this._dragStartTarget,vg,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Wr._dragging===this&&this.finishDrag(!0),Xe(this._dragStartTarget,vg,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(i){if(this._enabled&&(this._moved=!1,!Jd(this._element,"leaflet-zoom-anim"))){if(i.touches&&i.touches.length!==1){Wr._dragging===this&&this.finishDrag();return}if(!(Wr._dragging||i.shiftKey||i.which!==1&&i.button!==1&&!i.touches)&&(Wr._dragging=this,this._preventOutline&&rf(this._element),ef(),Za(),!this._moving)){this.fire("down");var l=i.touches?i.touches[0]:i,d=cg(this._element);this._startPoint=new B(l.clientX,l.clientY),this._startPos=jo(this._element),this._parentScale=of(d);var m=i.type==="mousedown";Ee(document,m?"mousemove":"touchmove",this._onMove,this),Ee(document,m?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(i){if(this._enabled){if(i.touches&&i.touches.length>1){this._moved=!0;return}var l=i.touches&&i.touches.length===1?i.touches[0]:i,d=new B(l.clientX,l.clientY)._subtract(this._startPoint);!d.x&&!d.y||Math.abs(d.x)+Math.abs(d.y)<this.options.clickTolerance||(d.x/=this._parentScale.x,d.y/=this._parentScale.y,Rt(i),this._moved||(this.fire("dragstart"),this._moved=!0,Oe(document.body,"leaflet-dragging"),this._lastTarget=i.target||i.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Oe(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(d),this._moving=!0,this._lastEvent=i,this._updatePosition())}},_updatePosition:function(){var i={originalEvent:this._lastEvent};this.fire("predrag",i),gt(this._element,this._newPos),this.fire("drag",i)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(i){pt(document.body,"leaflet-dragging"),this._lastTarget&&(pt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Xe(document,"mousemove touchmove",this._onMove,this),Xe(document,"mouseup touchend touchcancel",this._onUp,this),tf(),qa(),this._moved&&this._moving&&this.fire("dragend",{noInertia:i,distance:this._newPos.distanceTo(this._startPos)}),this._moving=!1,Wr._dragging=!1}});function yg(i,l){if(!l||!i.length)return i.slice();var d=l*l;return i=TP(i,d),i=RP(i,d),i}function bg(i,l,d){return Math.sqrt(Ja(i,l,d,!0))}function OP(i,l,d){return Ja(i,l,d)}function RP(i,l){var d=i.length,m=typeof Uint8Array!=void 0+""?Uint8Array:Array,w=new m(d);w[0]=w[d-1]=1,hf(i,w,l,0,d-1);var C,I=[];for(C=0;C<d;C++)w[C]&&I.push(i[C]);return I}function hf(i,l,d,m,w){var C=0,I,F,Q;for(F=m+1;F<=w-1;F++)Q=Ja(i[F],i[m],i[w],!0),Q>C&&(I=F,C=Q);C>d&&(l[I]=1,hf(i,l,d,m,I),hf(i,l,d,I,w))}function TP(i,l){for(var d=[i[0]],m=1,w=0,C=i.length;m<C;m++)LP(i[m],i[w])>l&&(d.push(i[m]),w=m);return w<C-1&&d.push(i[C-1]),d}var xg;function wg(i,l,d,m,w){var C=m?xg:Uo(i,d),I=Uo(l,d),F,Q,oe;for(xg=I;;){if(!(C|I))return[i,l];if(C&I)return!1;F=C||I,Q=Ll(i,l,F,d,w),oe=Uo(Q,d),F===C?(i=Q,C=oe):(l=Q,I=oe)}}function Ll(i,l,d,m,w){var C=l.x-i.x,I=l.y-i.y,F=m.min,Q=m.max,oe,he;return d&8?(oe=i.x+C*(Q.y-i.y)/I,he=Q.y):d&4?(oe=i.x+C*(F.y-i.y)/I,he=F.y):d&2?(oe=Q.x,he=i.y+I*(Q.x-i.x)/C):d&1&&(oe=F.x,he=i.y+I*(F.x-i.x)/C),new B(oe,he,w)}function Uo(i,l){var d=0;return i.x<l.min.x?d|=1:i.x>l.max.x&&(d|=2),i.y<l.min.y?d|=4:i.y>l.max.y&&(d|=8),d}function LP(i,l){var d=l.x-i.x,m=l.y-i.y;return d*d+m*m}function Ja(i,l,d,m){var w=l.x,C=l.y,I=d.x-w,F=d.y-C,Q=I*I+F*F,oe;return Q>0&&(oe=((i.x-w)*I+(i.y-C)*F)/Q,oe>1?(w=d.x,C=d.y):oe>0&&(w+=I*oe,C+=F*oe)),I=i.x-w,F=i.y-C,m?I*I+F*F:new B(w,C)}function mn(i){return!S(i[0])||typeof i[0][0]!="object"&&typeof i[0][0]<"u"}function Sg(i){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),mn(i)}function kg(i,l){var d,m,w,C,I,F,Q,oe;if(!i||i.length===0)throw new Error("latlngs not passed");mn(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var he=[];for(var Pe in i)he.push(l.project(ie(i[Pe])));var Te=he.length;for(d=0,m=0;d<Te-1;d++)m+=he[d].distanceTo(he[d+1])/2;if(m===0)oe=he[0];else for(d=0,C=0;d<Te-1;d++)if(I=he[d],F=he[d+1],w=I.distanceTo(F),C+=w,C>m){Q=(C-m)/w,oe=[F.x-Q*(F.x-I.x),F.y-Q*(F.y-I.y)];break}return l.unproject(A(oe))}var AP={__proto__:null,simplify:yg,pointToSegmentDistance:bg,closestPointOnSegment:OP,clipSegment:wg,_getEdgeIntersection:Ll,_getBitCode:Uo,_sqClosestPointOnSegment:Ja,isFlat:mn,_flat:Sg,polylineCenter:kg};function Pg(i,l,d){var m,w=[1,4,2,8],C,I,F,Q,oe,he,Pe,Te;for(C=0,he=i.length;C<he;C++)i[C]._code=Uo(i[C],l);for(F=0;F<4;F++){for(Pe=w[F],m=[],C=0,he=i.length,I=he-1;C<he;I=C++)Q=i[C],oe=i[I],Q._code&Pe?oe._code&Pe||(Te=Ll(oe,Q,Pe,l,d),Te._code=Uo(Te,l),m.push(Te)):(oe._code&Pe&&(Te=Ll(oe,Q,Pe,l,d),Te._code=Uo(Te,l),m.push(Te)),m.push(Q));i=m}return i}function Cg(i,l){var d,m,w,C,I,F,Q,oe,he;if(!i||i.length===0)throw new Error("latlngs not passed");mn(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var Pe=[];for(var Te in i)Pe.push(l.project(ie(i[Te])));var _n=Pe.length;for(F=Q=oe=0,d=0,m=_n-1;d<_n;m=d++)w=Pe[d],C=Pe[m],I=w.y*C.x-C.y*w.x,Q+=(w.x+C.x)*I,oe+=(w.y+C.y)*I,F+=I*3;return F===0?he=Pe[0]:he=[Q/F,oe/F],l.unproject(A(he))}var IP={__proto__:null,clipPolygon:Pg,polygonCenter:Cg},pf={project:function(i){return new B(i.lng,i.lat)},unproject:function(i){return new te(i.y,i.x)},bounds:new O([-180,-90],[180,90])},mf={R:6378137,R_MINOR:6356752314245179e-9,bounds:new O([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(i){var l=Math.PI/180,d=this.R,m=i.lat*l,w=this.R_MINOR/d,C=Math.sqrt(1-w*w),I=C*Math.sin(m),F=Math.tan(Math.PI/4-m/2)/Math.pow((1-I)/(1+I),C/2);return m=-d*Math.log(Math.max(F,1e-10)),new B(i.lng*l*d,m)},unproject:function(i){for(var l=180/Math.PI,d=this.R,m=this.R_MINOR/d,w=Math.sqrt(1-m*m),C=Math.exp(-i.y/d),I=Math.PI/2-2*Math.atan(C),F=0,Q=.1,oe;F<15&&Math.abs(Q)>1e-7;F++)oe=w*Math.sin(I),oe=Math.pow((1-oe)/(1+oe),w/2),Q=Math.PI/2-2*Math.atan(C*oe)-I,I+=Q;return new te(I*l,i.x*l/d)}},zP={__proto__:null,LonLat:pf,Mercator:mf,SphericalMercator:Ze},NP=o({},be,{code:"EPSG:3395",projection:mf,transformation:function(){var i=.5/(Math.PI*mf.R);return le(i,.5,-i,.5)}()}),Eg=o({},be,{code:"EPSG:4326",projection:pf,transformation:le(1/180,1,-1/180,.5)}),BP=o({},fe,{projection:pf,transformation:le(1,0,-1,0),scale:function(i){return Math.pow(2,i)},zoom:function(i){return Math.log(i)/Math.LN2},distance:function(i,l){var d=l.lng-i.lng,m=l.lat-i.lat;return Math.sqrt(d*d+m*m)},infinite:!0});fe.Earth=be,fe.EPSG3395=NP,fe.EPSG3857=me,fe.EPSG900913=ee,fe.EPSG4326=Eg,fe.Simple=BP;var Rn=se.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(i){return i.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(i){return i&&i.removeLayer(this),this},getPane:function(i){return this._map.getPane(i?this.options[i]||i:this.options.pane)},addInteractiveTarget:function(i){return this._map._targets[c(i)]=this,this},removeInteractiveTarget:function(i){return delete this._map._targets[c(i)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(i){var l=i.target;if(l.hasLayer(this)){if(this._map=l,this._zoomAnimated=l._zoomAnimated,this.getEvents){var d=this.getEvents();l.on(d,this),this.once("remove",function(){l.off(d,this)},this)}this.onAdd(l),this.fire("add"),l.fire("layeradd",{layer:this})}}});De.include({addLayer:function(i){if(!i._layerAdd)throw new Error("The provided object is not a Layer.");var l=c(i);return this._layers[l]?this:(this._layers[l]=i,i._mapToAdd=this,i.beforeAdd&&i.beforeAdd(this),this.whenReady(i._layerAdd,i),this)},removeLayer:function(i){var l=c(i);return this._layers[l]?(this._loaded&&i.onRemove(this),delete this._layers[l],this._loaded&&(this.fire("layerremove",{layer:i}),i.fire("remove")),i._map=i._mapToAdd=null,this):this},hasLayer:function(i){return c(i)in this._layers},eachLayer:function(i,l){for(var d in this._layers)i.call(l,this._layers[d]);return this},_addLayers:function(i){i=i?S(i)?i:[i]:[];for(var l=0,d=i.length;l<d;l++)this.addLayer(i[l])},_addZoomLimit:function(i){(!isNaN(i.options.maxZoom)||!isNaN(i.options.minZoom))&&(this._zoomBoundLayers[c(i)]=i,this._updateZoomLevels())},_removeZoomLimit:function(i){var l=c(i);this._zoomBoundLayers[l]&&(delete this._zoomBoundLayers[l],this._updateZoomLevels())},_updateZoomLevels:function(){var i=1/0,l=-1/0,d=this._getZoomSpan();for(var m in this._zoomBoundLayers){var w=this._zoomBoundLayers[m].options;i=w.minZoom===void 0?i:Math.min(i,w.minZoom),l=w.maxZoom===void 0?l:Math.max(l,w.maxZoom)}this._layersMaxZoom=l===-1/0?void 0:l,this._layersMinZoom=i===1/0?void 0:i,d!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var zi=Rn.extend({initialize:function(i,l){b(this,l),this._layers={};var d,m;if(i)for(d=0,m=i.length;d<m;d++)this.addLayer(i[d])},addLayer:function(i){var l=this.getLayerId(i);return this._layers[l]=i,this._map&&this._map.addLayer(i),this},removeLayer:function(i){var l=i in this._layers?i:this.getLayerId(i);return this._map&&this._layers[l]&&this._map.removeLayer(this._layers[l]),delete this._layers[l],this},hasLayer:function(i){var l=typeof i=="number"?i:this.getLayerId(i);return l in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(i){var l=Array.prototype.slice.call(arguments,1),d,m;for(d in this._layers)m=this._layers[d],m[i]&&m[i].apply(m,l);return this},onAdd:function(i){this.eachLayer(i.addLayer,i)},onRemove:function(i){this.eachLayer(i.removeLayer,i)},eachLayer:function(i,l){for(var d in this._layers)i.call(l,this._layers[d]);return this},getLayer:function(i){return this._layers[i]},getLayers:function(){var i=[];return this.eachLayer(i.push,i),i},setZIndex:function(i){return this.invoke("setZIndex",i)},getLayerId:function(i){return c(i)}}),MP=function(i,l){return new zi(i,l)},gr=zi.extend({addLayer:function(i){return this.hasLayer(i)?this:(i.addEventParent(this),zi.prototype.addLayer.call(this,i),this.fire("layeradd",{layer:i}))},removeLayer:function(i){return this.hasLayer(i)?(i in this._layers&&(i=this._layers[i]),i.removeEventParent(this),zi.prototype.removeLayer.call(this,i),this.fire("layerremove",{layer:i})):this},setStyle:function(i){return this.invoke("setStyle",i)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var i=new D;for(var l in this._layers){var d=this._layers[l];i.extend(d.getBounds?d.getBounds():d.getLatLng())}return i}}),DP=function(i,l){return new gr(i,l)},Ni=U.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(i){b(this,i)},createIcon:function(i){return this._createIcon("icon",i)},createShadow:function(i){return this._createIcon("shadow",i)},_createIcon:function(i,l){var d=this._getIconUrl(i);if(!d){if(i==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var m=this._createImg(d,l&&l.tagName==="IMG"?l:null);return this._setIconStyles(m,i),(this.options.crossOrigin||this.options.crossOrigin==="")&&(m.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),m},_setIconStyles:function(i,l){var d=this.options,m=d[l+"Size"];typeof m=="number"&&(m=[m,m]);var w=A(m),C=A(l==="shadow"&&d.shadowAnchor||d.iconAnchor||w&&w.divideBy(2,!0));i.className="leaflet-marker-"+l+" "+(d.className||""),C&&(i.style.marginLeft=-C.x+"px",i.style.marginTop=-C.y+"px"),w&&(i.style.width=w.x+"px",i.style.height=w.y+"px")},_createImg:function(i,l){return l=l||document.createElement("img"),l.src=i,l},_getIconUrl:function(i){return pe.retina&&this.options[i+"RetinaUrl"]||this.options[i+"Url"]}});function jP(i){return new Ni(i)}var Ya=Ni.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(i){return typeof Ya.imagePath!="string"&&(Ya.imagePath=this._detectIconPath()),(this.options.imagePath||Ya.imagePath)+Ni.prototype._getIconUrl.call(this,i)},_stripUrl:function(i){var l=function(d,m,w){var C=m.exec(d);return C&&C[w]};return i=l(i,/^url\((['"])?(.+)\1\)$/,2),i&&l(i,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var i=Ue("div","leaflet-default-icon-path",document.body),l=Va(i,"background-image")||Va(i,"backgroundImage");if(document.body.removeChild(i),l=this._stripUrl(l),l)return l;var d=document.querySelector('link[href$="leaflet.css"]');return d?d.href.substring(0,d.href.length-11-1):""}}),Og=Yn.extend({initialize:function(i){this._marker=i},addHooks:function(){var i=this._marker._icon;this._draggable||(this._draggable=new Wr(i,i,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Oe(i,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&pt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(i){var l=this._marker,d=l._map,m=this._marker.options.autoPanSpeed,w=this._marker.options.autoPanPadding,C=jo(l._icon),I=d.getPixelBounds(),F=d.getPixelOrigin(),Q=z(I.min._subtract(F).add(w),I.max._subtract(F).subtract(w));if(!Q.contains(C)){var oe=A((Math.max(Q.max.x,C.x)-Q.max.x)/(I.max.x-Q.max.x)-(Math.min(Q.min.x,C.x)-Q.min.x)/(I.min.x-Q.min.x),(Math.max(Q.max.y,C.y)-Q.max.y)/(I.max.y-Q.max.y)-(Math.min(Q.min.y,C.y)-Q.min.y)/(I.min.y-Q.min.y)).multiplyBy(m);d.panBy(oe,{animate:!1}),this._draggable._newPos._add(oe),this._draggable._startPos._add(oe),gt(l._icon,this._draggable._newPos),this._onDrag(i),this._panRequest=H(this._adjustPan.bind(this,i))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(i){this._marker.options.autoPan&&(G(this._panRequest),this._panRequest=H(this._adjustPan.bind(this,i)))},_onDrag:function(i){var l=this._marker,d=l._shadow,m=jo(l._icon),w=l._map.layerPointToLatLng(m);d&&gt(d,m),l._latlng=w,i.latlng=w,i.oldLatLng=this._oldLatLng,l.fire("move",i).fire("drag",i)},_onDragEnd:function(i){G(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",i)}}),Al=Rn.extend({options:{icon:new Ya,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(i,l){b(this,l),this._latlng=ie(i)},onAdd:function(i){this._zoomAnimated=this._zoomAnimated&&i.options.markerZoomAnimation,this._zoomAnimated&&i.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(i){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&i.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(i){var l=this._latlng;return this._latlng=ie(i),this.update(),this.fire("move",{oldLatLng:l,latlng:this._latlng})},setZIndexOffset:function(i){return this.options.zIndexOffset=i,this.update()},getIcon:function(){return this.options.icon},setIcon:function(i){return this.options.icon=i,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var i=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(i)}return this},_initIcon:function(){var i=this.options,l="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),d=i.icon.createIcon(this._icon),m=!1;d!==this._icon&&(this._icon&&this._removeIcon(),m=!0,i.title&&(d.title=i.title),d.tagName==="IMG"&&(d.alt=i.alt||"")),Oe(d,l),i.keyboard&&(d.tabIndex="0",d.setAttribute("role","button")),this._icon=d,i.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Ee(d,"focus",this._panOnFocus,this);var w=i.icon.createShadow(this._shadow),C=!1;w!==this._shadow&&(this._removeShadow(),C=!0),w&&(Oe(w,l),w.alt=""),this._shadow=w,i.opacity<1&&this._updateOpacity(),m&&this.getPane().appendChild(this._icon),this._initInteraction(),w&&C&&this.getPane(i.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Xe(this._icon,"focus",this._panOnFocus,this),at(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&at(this._shadow),this._shadow=null},_setPos:function(i){this._icon&&gt(this._icon,i),this._shadow&&gt(this._shadow,i),this._zIndex=i.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(i){this._icon&&(this._icon.style.zIndex=this._zIndex+i)},_animateZoom:function(i){var l=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center).round();this._setPos(l)},_initInteraction:function(){if(this.options.interactive&&(Oe(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Og)){var i=this.options.draggable;this.dragging&&(i=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Og(this),i&&this.dragging.enable()}},setOpacity:function(i){return this.options.opacity=i,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var i=this.options.opacity;this._icon&&pn(this._icon,i),this._shadow&&pn(this._shadow,i)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var i=this._map;if(i){var l=this.options.icon.options,d=l.iconSize?A(l.iconSize):A(0,0),m=l.iconAnchor?A(l.iconAnchor):A(0,0);i.panInside(this._latlng,{paddingTopLeft:m,paddingBottomRight:d.subtract(m)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function FP(i,l){return new Al(i,l)}var Hr=Rn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(i){this._renderer=i.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(i){return b(this,i),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&i&&Object.prototype.hasOwnProperty.call(i,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Il=Hr.extend({options:{fill:!0,radius:10},initialize:function(i,l){b(this,l),this._latlng=ie(i),this._radius=this.options.radius},setLatLng:function(i){var l=this._latlng;return this._latlng=ie(i),this.redraw(),this.fire("move",{oldLatLng:l,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(i){return this.options.radius=this._radius=i,this.redraw()},getRadius:function(){return this._radius},setStyle:function(i){var l=i&&i.radius||this._radius;return Hr.prototype.setStyle.call(this,i),this.setRadius(l),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var i=this._radius,l=this._radiusY||i,d=this._clickTolerance(),m=[i+d,l+d];this._pxBounds=new O(this._point.subtract(m),this._point.add(m))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(i){return i.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function $P(i,l){return new Il(i,l)}var _f=Il.extend({initialize:function(i,l,d){if(typeof l=="number"&&(l=o({},d,{radius:l})),b(this,l),this._latlng=ie(i),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(i){return this._mRadius=i,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var i=[this._radius,this._radiusY||this._radius];return new D(this._map.layerPointToLatLng(this._point.subtract(i)),this._map.layerPointToLatLng(this._point.add(i)))},setStyle:Hr.prototype.setStyle,_project:function(){var i=this._latlng.lng,l=this._latlng.lat,d=this._map,m=d.options.crs;if(m.distance===be.distance){var w=Math.PI/180,C=this._mRadius/be.R/w,I=d.project([l+C,i]),F=d.project([l-C,i]),Q=I.add(F).divideBy(2),oe=d.unproject(Q).lat,he=Math.acos((Math.cos(C*w)-Math.sin(l*w)*Math.sin(oe*w))/(Math.cos(l*w)*Math.cos(oe*w)))/w;(isNaN(he)||he===0)&&(he=C/Math.cos(Math.PI/180*l)),this._point=Q.subtract(d.getPixelOrigin()),this._radius=isNaN(he)?0:Q.x-d.project([oe,i-he]).x,this._radiusY=Q.y-I.y}else{var Pe=m.unproject(m.project(this._latlng).subtract([this._mRadius,0]));this._point=d.latLngToLayerPoint(this._latlng),this._radius=this._point.x-d.latLngToLayerPoint(Pe).x}this._updateBounds()}});function UP(i,l,d){return new _f(i,l,d)}var vr=Hr.extend({options:{smoothFactor:1,noClip:!1},initialize:function(i,l){b(this,l),this._setLatLngs(i)},getLatLngs:function(){return this._latlngs},setLatLngs:function(i){return this._setLatLngs(i),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(i){for(var l=1/0,d=null,m=Ja,w,C,I=0,F=this._parts.length;I<F;I++)for(var Q=this._parts[I],oe=1,he=Q.length;oe<he;oe++){w=Q[oe-1],C=Q[oe];var Pe=m(i,w,C,!0);Pe<l&&(l=Pe,d=m(i,w,C))}return d&&(d.distance=Math.sqrt(l)),d},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return kg(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(i,l){return l=l||this._defaultShape(),i=ie(i),l.push(i),this._bounds.extend(i),this.redraw()},_setLatLngs:function(i){this._bounds=new D,this._latlngs=this._convertLatLngs(i)},_defaultShape:function(){return mn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(i){for(var l=[],d=mn(i),m=0,w=i.length;m<w;m++)d?(l[m]=ie(i[m]),this._bounds.extend(l[m])):l[m]=this._convertLatLngs(i[m]);return l},_project:function(){var i=new O;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,i),this._bounds.isValid()&&i.isValid()&&(this._rawPxBounds=i,this._updateBounds())},_updateBounds:function(){var i=this._clickTolerance(),l=new B(i,i);this._rawPxBounds&&(this._pxBounds=new O([this._rawPxBounds.min.subtract(l),this._rawPxBounds.max.add(l)]))},_projectLatlngs:function(i,l,d){var m=i[0]instanceof te,w=i.length,C,I;if(m){for(I=[],C=0;C<w;C++)I[C]=this._map.latLngToLayerPoint(i[C]),d.extend(I[C]);l.push(I)}else for(C=0;C<w;C++)this._projectLatlngs(i[C],l,d)},_clipPoints:function(){var i=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}var l=this._parts,d,m,w,C,I,F,Q;for(d=0,w=0,C=this._rings.length;d<C;d++)for(Q=this._rings[d],m=0,I=Q.length;m<I-1;m++)F=wg(Q[m],Q[m+1],i,m,!0),F&&(l[w]=l[w]||[],l[w].push(F[0]),(F[1]!==Q[m+1]||m===I-2)&&(l[w].push(F[1]),w++))}},_simplifyPoints:function(){for(var i=this._parts,l=this.options.smoothFactor,d=0,m=i.length;d<m;d++)i[d]=yg(i[d],l)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(i,l){var d,m,w,C,I,F,Q=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(d=0,C=this._parts.length;d<C;d++)for(F=this._parts[d],m=0,I=F.length,w=I-1;m<I;w=m++)if(!(!l&&m===0)&&bg(i,F[w],F[m])<=Q)return!0;return!1}});function WP(i,l){return new vr(i,l)}vr._flat=Sg;var Bi=vr.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Cg(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(i){var l=vr.prototype._convertLatLngs.call(this,i),d=l.length;return d>=2&&l[0]instanceof te&&l[0].equals(l[d-1])&&l.pop(),l},_setLatLngs:function(i){vr.prototype._setLatLngs.call(this,i),mn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return mn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var i=this._renderer._bounds,l=this.options.weight,d=new B(l,l);if(i=new O(i.min.subtract(d),i.max.add(d)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}for(var m=0,w=this._rings.length,C;m<w;m++)C=Pg(this._rings[m],i,!0),C.length&&this._parts.push(C)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(i){var l=!1,d,m,w,C,I,F,Q,oe;if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(C=0,Q=this._parts.length;C<Q;C++)for(d=this._parts[C],I=0,oe=d.length,F=oe-1;I<oe;F=I++)m=d[I],w=d[F],m.y>i.y!=w.y>i.y&&i.x<(w.x-m.x)*(i.y-m.y)/(w.y-m.y)+m.x&&(l=!l);return l||vr.prototype._containsPoint.call(this,i,!0)}});function HP(i,l){return new Bi(i,l)}var yr=gr.extend({initialize:function(i,l){b(this,l),this._layers={},i&&this.addData(i)},addData:function(i){var l=S(i)?i:i.features,d,m,w;if(l){for(d=0,m=l.length;d<m;d++)w=l[d],(w.geometries||w.geometry||w.features||w.coordinates)&&this.addData(w);return this}var C=this.options;if(C.filter&&!C.filter(i))return this;var I=zl(i,C);return I?(I.feature=Ml(i),I.defaultOptions=I.options,this.resetStyle(I),C.onEachFeature&&C.onEachFeature(i,I),this.addLayer(I)):this},resetStyle:function(i){return i===void 0?this.eachLayer(this.resetStyle,this):(i.options=o({},i.defaultOptions),this._setLayerStyle(i,this.options.style),this)},setStyle:function(i){return this.eachLayer(function(l){this._setLayerStyle(l,i)},this)},_setLayerStyle:function(i,l){i.setStyle&&(typeof l=="function"&&(l=l(i.feature)),i.setStyle(l))}});function zl(i,l){var d=i.type==="Feature"?i.geometry:i,m=d?d.coordinates:null,w=[],C=l&&l.pointToLayer,I=l&&l.coordsToLatLng||gf,F,Q,oe,he;if(!m&&!d)return null;switch(d.type){case"Point":return F=I(m),Rg(C,i,F,l);case"MultiPoint":for(oe=0,he=m.length;oe<he;oe++)F=I(m[oe]),w.push(Rg(C,i,F,l));return new gr(w);case"LineString":case"MultiLineString":return Q=Nl(m,d.type==="LineString"?0:1,I),new vr(Q,l);case"Polygon":case"MultiPolygon":return Q=Nl(m,d.type==="Polygon"?1:2,I),new Bi(Q,l);case"GeometryCollection":for(oe=0,he=d.geometries.length;oe<he;oe++){var Pe=zl({geometry:d.geometries[oe],type:"Feature",properties:i.properties},l);Pe&&w.push(Pe)}return new gr(w);case"FeatureCollection":for(oe=0,he=d.features.length;oe<he;oe++){var Te=zl(d.features[oe],l);Te&&w.push(Te)}return new gr(w);default:throw new Error("Invalid GeoJSON object.")}}function Rg(i,l,d,m){return i?i(l,d):new Al(d,m&&m.markersInheritOptions&&m)}function gf(i){return new te(i[1],i[0],i[2])}function Nl(i,l,d){for(var m=[],w=0,C=i.length,I;w<C;w++)I=l?Nl(i[w],l-1,d):(d||gf)(i[w]),m.push(I);return m}function vf(i,l){return i=ie(i),i.alt!==void 0?[_(i.lng,l),_(i.lat,l),_(i.alt,l)]:[_(i.lng,l),_(i.lat,l)]}function Bl(i,l,d,m){for(var w=[],C=0,I=i.length;C<I;C++)w.push(l?Bl(i[C],mn(i[C])?0:l-1,d,m):vf(i[C],m));return!l&&d&&w.push(w[0].slice()),w}function Mi(i,l){return i.feature?o({},i.feature,{geometry:l}):Ml(l)}function Ml(i){return i.type==="Feature"||i.type==="FeatureCollection"?i:{type:"Feature",properties:{},geometry:i}}var yf={toGeoJSON:function(i){return Mi(this,{type:"Point",coordinates:vf(this.getLatLng(),i)})}};Al.include(yf),_f.include(yf),Il.include(yf),vr.include({toGeoJSON:function(i){var l=!mn(this._latlngs),d=Bl(this._latlngs,l?1:0,!1,i);return Mi(this,{type:(l?"Multi":"")+"LineString",coordinates:d})}}),Bi.include({toGeoJSON:function(i){var l=!mn(this._latlngs),d=l&&!mn(this._latlngs[0]),m=Bl(this._latlngs,d?2:l?1:0,!0,i);return l||(m=[m]),Mi(this,{type:(d?"Multi":"")+"Polygon",coordinates:m})}}),zi.include({toMultiPoint:function(i){var l=[];return this.eachLayer(function(d){l.push(d.toGeoJSON(i).geometry.coordinates)}),Mi(this,{type:"MultiPoint",coordinates:l})},toGeoJSON:function(i){var l=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(l==="MultiPoint")return this.toMultiPoint(i);var d=l==="GeometryCollection",m=[];return this.eachLayer(function(w){if(w.toGeoJSON){var C=w.toGeoJSON(i);if(d)m.push(C.geometry);else{var I=Ml(C);I.type==="FeatureCollection"?m.push.apply(m,I.features):m.push(I)}}}),d?Mi(this,{geometries:m,type:"GeometryCollection"}):{type:"FeatureCollection",features:m}}});function Tg(i,l){return new yr(i,l)}var VP=Tg,Dl=Rn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(i,l,d){this._url=i,this._bounds=V(l),b(this,d)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Oe(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){at(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(i){return this.options.opacity=i,this._image&&this._updateOpacity(),this},setStyle:function(i){return i.opacity&&this.setOpacity(i.opacity),this},bringToFront:function(){return this._map&&Ai(this._image),this},bringToBack:function(){return this._map&&Ii(this._image),this},setUrl:function(i){return this._url=i,this._image&&(this._image.src=i),this},setBounds:function(i){return this._bounds=V(i),this._map&&this._reset(),this},getEvents:function(){var i={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var i=this._url.tagName==="IMG",l=this._image=i?this._url:Ue("img");if(Oe(l,"leaflet-image-layer"),this._zoomAnimated&&Oe(l,"leaflet-zoom-animated"),this.options.className&&Oe(l,this.options.className),l.onselectstart=h,l.onmousemove=h,l.onload=s(this.fire,this,"load"),l.onerror=s(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),i){this._url=l.src;return}l.src=this._url,l.alt=this.options.alt},_animateZoom:function(i){var l=this._map.getZoomScale(i.zoom),d=this._map._latLngBoundsToNewLayerBounds(this._bounds,i.zoom,i.center).min;Do(this._image,d,l)},_reset:function(){var i=this._image,l=new O(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),d=l.getSize();gt(i,l.min),i.style.width=d.x+"px",i.style.height=d.y+"px"},_updateOpacity:function(){pn(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var i=this.options.errorOverlayUrl;i&&this._url!==i&&(this._url=i,this._image.src=i)},getCenter:function(){return this._bounds.getCenter()}}),ZP=function(i,l,d){return new Dl(i,l,d)},Lg=Dl.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var i=this._url.tagName==="VIDEO",l=this._image=i?this._url:Ue("video");if(Oe(l,"leaflet-image-layer"),this._zoomAnimated&&Oe(l,"leaflet-zoom-animated"),this.options.className&&Oe(l,this.options.className),l.onselectstart=h,l.onmousemove=h,l.onloadeddata=s(this.fire,this,"load"),i){for(var d=l.getElementsByTagName("source"),m=[],w=0;w<d.length;w++)m.push(d[w].src);this._url=d.length>0?m:[l.src];return}S(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(l.style,"objectFit")&&(l.style.objectFit="fill"),l.autoplay=!!this.options.autoplay,l.loop=!!this.options.loop,l.muted=!!this.options.muted,l.playsInline=!!this.options.playsInline;for(var C=0;C<this._url.length;C++){var I=Ue("source");I.src=this._url[C],l.appendChild(I)}}});function qP(i,l,d){return new Lg(i,l,d)}var Ag=Dl.extend({_initImage:function(){var i=this._image=this._url;Oe(i,"leaflet-image-layer"),this._zoomAnimated&&Oe(i,"leaflet-zoom-animated"),this.options.className&&Oe(i,this.options.className),i.onselectstart=h,i.onmousemove=h}});function KP(i,l,d){return new Ag(i,l,d)}var Xn=Rn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(i,l){i&&(i instanceof te||S(i))?(this._latlng=ie(i),b(this,l)):(b(this,i),this._source=l),this.options.content&&(this._content=this.options.content)},openOn:function(i){return i=arguments.length?i:this._source._map,i.hasLayer(this)||i.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(i){return this._map?this.close():(arguments.length?this._source=i:i=this._source,this._prepareOpen(),this.openOn(i._map)),this},onAdd:function(i){this._zoomAnimated=i._zoomAnimated,this._container||this._initLayout(),i._fadeAnimated&&pn(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),i._fadeAnimated&&pn(this._container,1),this.bringToFront(),this.options.interactive&&(Oe(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(i){i._fadeAnimated?(pn(this._container,0),this._removeTimeout=setTimeout(s(at,void 0,this._container),200)):at(this._container),this.options.interactive&&(pt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(i){return this._latlng=ie(i),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(i){return this._content=i,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var i={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Ai(this._container),this},bringToBack:function(){return this._map&&Ii(this._container),this},_prepareOpen:function(i){var l=this._source;if(!l._map)return!1;if(l instanceof gr){l=null;var d=this._source._layers;for(var m in d)if(d[m]._map){l=d[m];break}if(!l)return!1;this._source=l}if(!i)if(l.getCenter)i=l.getCenter();else if(l.getLatLng)i=l.getLatLng();else if(l.getBounds)i=l.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(i),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var i=this._contentNode,l=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof l=="string")i.innerHTML=l;else{for(;i.hasChildNodes();)i.removeChild(i.firstChild);i.appendChild(l)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var i=this._map.latLngToLayerPoint(this._latlng),l=A(this.options.offset),d=this._getAnchor();this._zoomAnimated?gt(this._container,i.add(d)):l=l.add(i).add(d);var m=this._containerBottom=-l.y,w=this._containerLeft=-Math.round(this._containerWidth/2)+l.x;this._container.style.bottom=m+"px",this._container.style.left=w+"px"}},_getAnchor:function(){return[0,0]}});De.include({_initOverlay:function(i,l,d,m){var w=l;return w instanceof i||(w=new i(m).setContent(l)),d&&w.setLatLng(d),w}}),Rn.include({_initOverlay:function(i,l,d,m){var w=d;return w instanceof i?(b(w,m),w._source=this):(w=l&&!m?l:new i(m,this),w.setContent(d)),w}});var jl=Xn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(i){return i=arguments.length?i:this._source._map,!i.hasLayer(this)&&i._popup&&i._popup.options.autoClose&&i.removeLayer(i._popup),i._popup=this,Xn.prototype.openOn.call(this,i)},onAdd:function(i){Xn.prototype.onAdd.call(this,i),i.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Hr||this._source.on("preclick",Fo))},onRemove:function(i){Xn.prototype.onRemove.call(this,i),i.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Hr||this._source.off("preclick",Fo))},getEvents:function(){var i=Xn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(i.preclick=this.close),this.options.keepInView&&(i.moveend=this._adjustPan),i},_initLayout:function(){var i="leaflet-popup",l=this._container=Ue("div",i+" "+(this.options.className||"")+" leaflet-zoom-animated"),d=this._wrapper=Ue("div",i+"-content-wrapper",l);if(this._contentNode=Ue("div",i+"-content",d),Qa(l),uf(this._contentNode),Ee(l,"contextmenu",Fo),this._tipContainer=Ue("div",i+"-tip-container",l),this._tip=Ue("div",i+"-tip",this._tipContainer),this.options.closeButton){var m=this._closeButton=Ue("a",i+"-close-button",l);m.setAttribute("role","button"),m.setAttribute("aria-label","Close popup"),m.href="#close",m.innerHTML='<span aria-hidden="true">&#215;</span>',Ee(m,"click",function(w){Rt(w),this.close()},this)}},_updateLayout:function(){var i=this._contentNode,l=i.style;l.width="",l.whiteSpace="nowrap";var d=i.offsetWidth;d=Math.min(d,this.options.maxWidth),d=Math.max(d,this.options.minWidth),l.width=d+1+"px",l.whiteSpace="",l.height="";var m=i.offsetHeight,w=this.options.maxHeight,C="leaflet-popup-scrolled";w&&m>w?(l.height=w+"px",Oe(i,C)):pt(i,C),this._containerWidth=this._container.offsetWidth},_animateZoom:function(i){var l=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center),d=this._getAnchor();gt(this._container,l.add(d))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var i=this._map,l=parseInt(Va(this._container,"marginBottom"),10)||0,d=this._container.offsetHeight+l,m=this._containerWidth,w=new B(this._containerLeft,-d-this._containerBottom);w._add(jo(this._container));var C=i.layerPointToContainerPoint(w),I=A(this.options.autoPanPadding),F=A(this.options.autoPanPaddingTopLeft||I),Q=A(this.options.autoPanPaddingBottomRight||I),oe=i.getSize(),he=0,Pe=0;C.x+m+Q.x>oe.x&&(he=C.x+m-oe.x+Q.x),C.x-he-F.x<0&&(he=C.x-F.x),C.y+d+Q.y>oe.y&&(Pe=C.y+d-oe.y+Q.y),C.y-Pe-F.y<0&&(Pe=C.y-F.y),(he||Pe)&&(this.options.keepInView&&(this._autopanning=!0),i.fire("autopanstart").panBy([he,Pe]))}},_getAnchor:function(){return A(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),QP=function(i,l){return new jl(i,l)};De.mergeOptions({closePopupOnClick:!0}),De.include({openPopup:function(i,l,d){return this._initOverlay(jl,i,l,d).openOn(this),this},closePopup:function(i){return i=arguments.length?i:this._popup,i&&i.close(),this}}),Rn.include({bindPopup:function(i,l){return this._popup=this._initOverlay(jl,this._popup,i,l),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(i){return this._popup&&(this instanceof gr||(this._popup._source=this),this._popup._prepareOpen(i||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(i){return this._popup&&this._popup.setContent(i),this},getPopup:function(){return this._popup},_openPopup:function(i){if(!(!this._popup||!this._map)){$o(i);var l=i.layer||i.target;if(this._popup._source===l&&!(l instanceof Hr)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(i.latlng);return}this._popup._source=l,this.openPopup(i.latlng)}},_movePopup:function(i){this._popup.setLatLng(i.latlng)},_onKeyPress:function(i){i.originalEvent.keyCode===13&&this._openPopup(i)}});var Fl=Xn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(i){Xn.prototype.onAdd.call(this,i),this.setOpacity(this.options.opacity),i.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(i){Xn.prototype.onRemove.call(this,i),i.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var i=Xn.prototype.getEvents.call(this);return this.options.permanent||(i.preclick=this.close),i},_initLayout:function(){var i="leaflet-tooltip",l=i+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Ue("div",l),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+c(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(i){var l,d,m=this._map,w=this._container,C=m.latLngToContainerPoint(m.getCenter()),I=m.layerPointToContainerPoint(i),F=this.options.direction,Q=w.offsetWidth,oe=w.offsetHeight,he=A(this.options.offset),Pe=this._getAnchor();F==="top"?(l=Q/2,d=oe):F==="bottom"?(l=Q/2,d=0):F==="center"?(l=Q/2,d=oe/2):F==="right"?(l=0,d=oe/2):F==="left"?(l=Q,d=oe/2):I.x<C.x?(F="right",l=0,d=oe/2):(F="left",l=Q+(he.x+Pe.x)*2,d=oe/2),i=i.subtract(A(l,d,!0)).add(he).add(Pe),pt(w,"leaflet-tooltip-right"),pt(w,"leaflet-tooltip-left"),pt(w,"leaflet-tooltip-top"),pt(w,"leaflet-tooltip-bottom"),Oe(w,"leaflet-tooltip-"+F),gt(w,i)},_updatePosition:function(){var i=this._map.latLngToLayerPoint(this._latlng);this._setPosition(i)},setOpacity:function(i){this.options.opacity=i,this._container&&pn(this._container,i)},_animateZoom:function(i){var l=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center);this._setPosition(l)},_getAnchor:function(){return A(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),GP=function(i,l){return new Fl(i,l)};De.include({openTooltip:function(i,l,d){return this._initOverlay(Fl,i,l,d).openOn(this),this},closeTooltip:function(i){return i.close(),this}}),Rn.include({bindTooltip:function(i,l){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Fl,this._tooltip,i,l),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(i){if(!(!i&&this._tooltipHandlersAdded)){var l=i?"off":"on",d={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?d.add=this._openTooltip:(d.mouseover=this._openTooltip,d.mouseout=this.closeTooltip,d.click=this._openTooltip,this._map?this._addFocusListeners():d.add=this._addFocusListeners),this._tooltip.options.sticky&&(d.mousemove=this._moveTooltip),this[l](d),this._tooltipHandlersAdded=!i}},openTooltip:function(i){return this._tooltip&&(this instanceof gr||(this._tooltip._source=this),this._tooltip._prepareOpen(i)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(i){return this._tooltip&&this._tooltip.setContent(i),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(i){var l=i.getElement();l&&(Ee(l,"focus",function(){this._tooltip._source=i,this.openTooltip()},this),Ee(l,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(i){var l=i.getElement();l&&l.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(i){!this._tooltip||!this._map||this._map.dragging&&this._map.dragging.moving()||(this._tooltip._source=i.layer||i.target,this.openTooltip(this._tooltip.options.sticky?i.latlng:void 0))},_moveTooltip:function(i){var l=i.latlng,d,m;this._tooltip.options.sticky&&i.originalEvent&&(d=this._map.mouseEventToContainerPoint(i.originalEvent),m=this._map.containerPointToLayerPoint(d),l=this._map.layerPointToLatLng(m)),this._tooltip.setLatLng(l)}});var Ig=Ni.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(i){var l=i&&i.tagName==="DIV"?i:document.createElement("div"),d=this.options;if(d.html instanceof Element?(Cl(l),l.appendChild(d.html)):l.innerHTML=d.html!==!1?d.html:"",d.bgPos){var m=A(d.bgPos);l.style.backgroundPosition=-m.x+"px "+-m.y+"px"}return this._setIconStyles(l,"icon"),l},createShadow:function(){return null}});function JP(i){return new Ig(i)}Ni.Default=Ya;var Xa=Rn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:pe.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(i){b(this,i)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(i){i._addZoomLimit(this)},onRemove:function(i){this._removeAllTiles(),at(this._container),i._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Ai(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Ii(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(i){return this.options.opacity=i,this._updateOpacity(),this},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var i=this._clampZoom(this._map.getZoom());i!==this._tileZoom&&(this._tileZoom=i,this._updateLevels()),this._update()}return this},getEvents:function(){var i={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=f(this._onMoveEnd,this.options.updateInterval,this)),i.move=this._onMove),this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},createTile:function(){return document.createElement("div")},getTileSize:function(){var i=this.options.tileSize;return i instanceof B?i:new B(i,i)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(i){for(var l=this.getPane().children,d=-i(-1/0,1/0),m=0,w=l.length,C;m<w;m++)C=l[m].style.zIndex,l[m]!==this._container&&C&&(d=i(d,+C));isFinite(d)&&(this.options.zIndex=d+i(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!pe.ielt9){pn(this._container,this.options.opacity);var i=+new Date,l=!1,d=!1;for(var m in this._tiles){var w=this._tiles[m];if(!(!w.current||!w.loaded)){var C=Math.min(1,(i-w.loaded)/200);pn(w.el,C),C<1?l=!0:(w.active?d=!0:this._onOpaqueTile(w),w.active=!0)}}d&&!this._noPrune&&this._pruneTiles(),l&&(G(this._fadeFrame),this._fadeFrame=H(this._updateOpacity,this))}},_onOpaqueTile:h,_initContainer:function(){this._container||(this._container=Ue("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var i=this._tileZoom,l=this.options.maxZoom;if(i!==void 0){for(var d in this._levels)d=Number(d),this._levels[d].el.children.length||d===i?(this._levels[d].el.style.zIndex=l-Math.abs(i-d),this._onUpdateLevel(d)):(at(this._levels[d].el),this._removeTilesAtZoom(d),this._onRemoveLevel(d),delete this._levels[d]);var m=this._levels[i],w=this._map;return m||(m=this._levels[i]={},m.el=Ue("div","leaflet-tile-container leaflet-zoom-animated",this._container),m.el.style.zIndex=l,m.origin=w.project(w.unproject(w.getPixelOrigin()),i).round(),m.zoom=i,this._setZoomTransform(m,w.getCenter(),w.getZoom()),h(m.el.offsetWidth),this._onCreateLevel(m)),this._level=m,m}},_onUpdateLevel:h,_onRemoveLevel:h,_onCreateLevel:h,_pruneTiles:function(){if(this._map){var i,l,d=this._map.getZoom();if(d>this.options.maxZoom||d<this.options.minZoom){this._removeAllTiles();return}for(i in this._tiles)l=this._tiles[i],l.retain=l.current;for(i in this._tiles)if(l=this._tiles[i],l.current&&!l.active){var m=l.coords;this._retainParent(m.x,m.y,m.z,m.z-5)||this._retainChildren(m.x,m.y,m.z,m.z+2)}for(i in this._tiles)this._tiles[i].retain||this._removeTile(i)}},_removeTilesAtZoom:function(i){for(var l in this._tiles)this._tiles[l].coords.z===i&&this._removeTile(l)},_removeAllTiles:function(){for(var i in this._tiles)this._removeTile(i)},_invalidateAll:function(){for(var i in this._levels)at(this._levels[i].el),this._onRemoveLevel(Number(i)),delete this._levels[i];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(i,l,d,m){var w=Math.floor(i/2),C=Math.floor(l/2),I=d-1,F=new B(+w,+C);F.z=+I;var Q=this._tileCoordsToKey(F),oe=this._tiles[Q];return oe&&oe.active?(oe.retain=!0,!0):(oe&&oe.loaded&&(oe.retain=!0),I>m?this._retainParent(w,C,I,m):!1)},_retainChildren:function(i,l,d,m){for(var w=2*i;w<2*i+2;w++)for(var C=2*l;C<2*l+2;C++){var I=new B(w,C);I.z=d+1;var F=this._tileCoordsToKey(I),Q=this._tiles[F];if(Q&&Q.active){Q.retain=!0;continue}else Q&&Q.loaded&&(Q.retain=!0);d+1<m&&this._retainChildren(w,C,d+1,m)}},_resetView:function(i){var l=i&&(i.pinch||i.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),l,l)},_animateZoom:function(i){this._setView(i.center,i.zoom,!0,i.noUpdate)},_clampZoom:function(i){var l=this.options;return l.minNativeZoom!==void 0&&i<l.minNativeZoom?l.minNativeZoom:l.maxNativeZoom!==void 0&&l.maxNativeZoom<i?l.maxNativeZoom:i},_setView:function(i,l,d,m){var w=Math.round(l);this.options.maxZoom!==void 0&&w>this.options.maxZoom||this.options.minZoom!==void 0&&w<this.options.minZoom?w=void 0:w=this._clampZoom(w);var C=this.options.updateWhenZooming&&w!==this._tileZoom;(!m||C)&&(this._tileZoom=w,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),w!==void 0&&this._update(i),d||this._pruneTiles(),this._noPrune=!!d),this._setZoomTransforms(i,l)},_setZoomTransforms:function(i,l){for(var d in this._levels)this._setZoomTransform(this._levels[d],i,l)},_setZoomTransform:function(i,l,d){var m=this._map.getZoomScale(d,i.zoom),w=i.origin.multiplyBy(m).subtract(this._map._getNewPixelOrigin(l,d)).round();pe.any3d?Do(i.el,w,m):gt(i.el,w)},_resetGrid:function(){var i=this._map,l=i.options.crs,d=this._tileSize=this.getTileSize(),m=this._tileZoom,w=this._map.getPixelWorldBounds(this._tileZoom);w&&(this._globalTileRange=this._pxBoundsToTileRange(w)),this._wrapX=l.wrapLng&&!this.options.noWrap&&[Math.floor(i.project([0,l.wrapLng[0]],m).x/d.x),Math.ceil(i.project([0,l.wrapLng[1]],m).x/d.y)],this._wrapY=l.wrapLat&&!this.options.noWrap&&[Math.floor(i.project([l.wrapLat[0],0],m).y/d.x),Math.ceil(i.project([l.wrapLat[1],0],m).y/d.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(i){var l=this._map,d=l._animatingZoom?Math.max(l._animateToZoom,l.getZoom()):l.getZoom(),m=l.getZoomScale(d,this._tileZoom),w=l.project(i,this._tileZoom).floor(),C=l.getSize().divideBy(m*2);return new O(w.subtract(C),w.add(C))},_update:function(i){var l=this._map;if(l){var d=this._clampZoom(l.getZoom());if(i===void 0&&(i=l.getCenter()),this._tileZoom!==void 0){var m=this._getTiledPixelBounds(i),w=this._pxBoundsToTileRange(m),C=w.getCenter(),I=[],F=this.options.keepBuffer,Q=new O(w.getBottomLeft().subtract([F,-F]),w.getTopRight().add([F,-F]));if(!(isFinite(w.min.x)&&isFinite(w.min.y)&&isFinite(w.max.x)&&isFinite(w.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var oe in this._tiles){var he=this._tiles[oe].coords;(he.z!==this._tileZoom||!Q.contains(new B(he.x,he.y)))&&(this._tiles[oe].current=!1)}if(Math.abs(d-this._tileZoom)>1){this._setView(i,d);return}for(var Pe=w.min.y;Pe<=w.max.y;Pe++)for(var Te=w.min.x;Te<=w.max.x;Te++){var _n=new B(Te,Pe);if(_n.z=this._tileZoom,!!this._isValidTile(_n)){var Wo=this._tiles[this._tileCoordsToKey(_n)];Wo?Wo.current=!0:I.push(_n)}}if(I.sort(function(Vr,bf){return Vr.distanceTo(C)-bf.distanceTo(C)}),I.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Ul=document.createDocumentFragment();for(Te=0;Te<I.length;Te++)this._addTile(I[Te],Ul);this._level.el.appendChild(Ul)}}}},_isValidTile:function(i){var l=this._map.options.crs;if(!l.infinite){var d=this._globalTileRange;if(!l.wrapLng&&(i.x<d.min.x||i.x>d.max.x)||!l.wrapLat&&(i.y<d.min.y||i.y>d.max.y))return!1}if(!this.options.bounds)return!0;var m=this._tileCoordsToBounds(i);return V(this.options.bounds).overlaps(m)},_keyToBounds:function(i){return this._tileCoordsToBounds(this._keyToTileCoords(i))},_tileCoordsToNwSe:function(i){var l=this._map,d=this.getTileSize(),m=i.scaleBy(d),w=m.add(d),C=l.unproject(m,i.z),I=l.unproject(w,i.z);return[C,I]},_tileCoordsToBounds:function(i){var l=this._tileCoordsToNwSe(i),d=new D(l[0],l[1]);return this.options.noWrap||(d=this._map.wrapLatLngBounds(d)),d},_tileCoordsToKey:function(i){return i.x+":"+i.y+":"+i.z},_keyToTileCoords:function(i){var l=i.split(":"),d=new B(+l[0],+l[1]);return d.z=+l[2],d},_removeTile:function(i){var l=this._tiles[i];l&&(at(l.el),delete this._tiles[i],this.fire("tileunload",{tile:l.el,coords:this._keyToTileCoords(i)}))},_initTile:function(i){Oe(i,"leaflet-tile");var l=this.getTileSize();i.style.width=l.x+"px",i.style.height=l.y+"px",i.onselectstart=h,i.onmousemove=h,pe.ielt9&&this.options.opacity<1&&pn(i,this.options.opacity)},_addTile:function(i,l){var d=this._getTilePos(i),m=this._tileCoordsToKey(i),w=this.createTile(this._wrapCoords(i),s(this._tileReady,this,i));this._initTile(w),this.createTile.length<2&&H(s(this._tileReady,this,i,null,w)),gt(w,d),this._tiles[m]={el:w,coords:i,current:!0},l.appendChild(w),this.fire("tileloadstart",{tile:w,coords:i})},_tileReady:function(i,l,d){l&&this.fire("tileerror",{error:l,tile:d,coords:i});var m=this._tileCoordsToKey(i);d=this._tiles[m],d&&(d.loaded=+new Date,this._map._fadeAnimated?(pn(d.el,0),G(this._fadeFrame),this._fadeFrame=H(this._updateOpacity,this)):(d.active=!0,this._pruneTiles()),l||(Oe(d.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:d.el,coords:i})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),pe.ielt9||!this._map._fadeAnimated?H(this._pruneTiles,this):setTimeout(s(this._pruneTiles,this),250)))},_getTilePos:function(i){return i.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(i){var l=new B(this._wrapX?p(i.x,this._wrapX):i.x,this._wrapY?p(i.y,this._wrapY):i.y);return l.z=i.z,l},_pxBoundsToTileRange:function(i){var l=this.getTileSize();return new O(i.min.unscaleBy(l).floor(),i.max.unscaleBy(l).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var i in this._tiles)if(!this._tiles[i].loaded)return!1;return!0}});function YP(i){return new Xa(i)}var Di=Xa.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(i,l){this._url=i,l=b(this,l),l.detectRetina&&pe.retina&&l.maxZoom>0?(l.tileSize=Math.floor(l.tileSize/2),l.zoomReverse?(l.zoomOffset--,l.minZoom=Math.min(l.maxZoom,l.minZoom+1)):(l.zoomOffset++,l.maxZoom=Math.max(l.minZoom,l.maxZoom-1)),l.minZoom=Math.max(0,l.minZoom)):l.zoomReverse?l.minZoom=Math.min(l.maxZoom,l.minZoom):l.maxZoom=Math.max(l.minZoom,l.maxZoom),typeof l.subdomains=="string"&&(l.subdomains=l.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(i,l){return this._url===i&&l===void 0&&(l=!0),this._url=i,l||this.redraw(),this},createTile:function(i,l){var d=document.createElement("img");return Ee(d,"load",s(this._tileOnLoad,this,l,d)),Ee(d,"error",s(this._tileOnError,this,l,d)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(d.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(d.referrerPolicy=this.options.referrerPolicy),d.alt="",d.src=this.getTileUrl(i),d},getTileUrl:function(i){var l={r:pe.retina?"@2x":"",s:this._getSubdomain(i),x:i.x,y:i.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var d=this._globalTileRange.max.y-i.y;this.options.tms&&(l.y=d),l["-y"]=d}return x(this._url,o(l,this.options))},_tileOnLoad:function(i,l){pe.ielt9?setTimeout(s(i,this,null,l),0):i(null,l)},_tileOnError:function(i,l,d){var m=this.options.errorTileUrl;m&&l.getAttribute("src")!==m&&(l.src=m),i(d,l)},_onTileRemove:function(i){i.tile.onload=null},_getZoomForUrl:function(){var i=this._tileZoom,l=this.options.maxZoom,d=this.options.zoomReverse,m=this.options.zoomOffset;return d&&(i=l-i),i+m},_getSubdomain:function(i){var l=Math.abs(i.x+i.y)%this.options.subdomains.length;return this.options.subdomains[l]},_abortLoading:function(){var i,l;for(i in this._tiles)if(this._tiles[i].coords.z!==this._tileZoom&&(l=this._tiles[i].el,l.onload=h,l.onerror=h,!l.complete)){l.src=R;var d=this._tiles[i].coords;at(l),delete this._tiles[i],this.fire("tileabort",{tile:l,coords:d})}},_removeTile:function(i){var l=this._tiles[i];if(l)return l.el.setAttribute("src",R),Xa.prototype._removeTile.call(this,i)},_tileReady:function(i,l,d){if(!(!this._map||d&&d.getAttribute("src")===R))return Xa.prototype._tileReady.call(this,i,l,d)}});function zg(i,l){return new Di(i,l)}var Ng=Di.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(i,l){this._url=i;var d=o({},this.defaultWmsParams);for(var m in l)m in this.options||(d[m]=l[m]);l=b(this,l);var w=l.detectRetina&&pe.retina?2:1,C=this.getTileSize();d.width=C.x*w,d.height=C.y*w,this.wmsParams=d},onAdd:function(i){this._crs=this.options.crs||i.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var l=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[l]=this._crs.code,Di.prototype.onAdd.call(this,i)},getTileUrl:function(i){var l=this._tileCoordsToNwSe(i),d=this._crs,m=z(d.project(l[0]),d.project(l[1])),w=m.min,C=m.max,I=(this._wmsVersion>=1.3&&this._crs===Eg?[w.y,w.x,C.y,C.x]:[w.x,w.y,C.x,C.y]).join(","),F=Di.prototype.getTileUrl.call(this,i);return F+P(this.wmsParams,F,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+I},setParams:function(i,l){return o(this.wmsParams,i),l||this.redraw(),this}});function XP(i,l){return new Ng(i,l)}Di.WMS=Ng,zg.wms=XP;var br=Rn.extend({options:{padding:.1},initialize:function(i){b(this,i),c(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&Oe(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var i={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(i.zoomanim=this._onAnimZoom),i},_onAnimZoom:function(i){this._updateTransform(i.center,i.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(i,l){var d=this._map.getZoomScale(l,this._zoom),m=this._map.getSize().multiplyBy(.5+this.options.padding),w=this._map.project(this._center,l),C=m.multiplyBy(-d).add(w).subtract(this._map._getNewPixelOrigin(i,l));pe.any3d?Do(this._container,C,d):gt(this._container,C)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var i in this._layers)this._layers[i]._reset()},_onZoomEnd:function(){for(var i in this._layers)this._layers[i]._project()},_updatePaths:function(){for(var i in this._layers)this._layers[i]._update()},_update:function(){var i=this.options.padding,l=this._map.getSize(),d=this._map.containerPointToLayerPoint(l.multiplyBy(-i)).round();this._bounds=new O(d,d.add(l.multiplyBy(1+i*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Bg=br.extend({options:{tolerance:0},getEvents:function(){var i=br.prototype.getEvents.call(this);return i.viewprereset=this._onViewPreReset,i},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){br.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var i=this._container=document.createElement("canvas");Ee(i,"mousemove",this._onMouseMove,this),Ee(i,"click dblclick mousedown mouseup contextmenu",this._onClick,this),Ee(i,"mouseout",this._handleMouseOut,this),i._leaflet_disable_events=!0,this._ctx=i.getContext("2d")},_destroyContainer:function(){G(this._redrawRequest),delete this._ctx,at(this._container),Xe(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var i;this._redrawBounds=null;for(var l in this._layers)i=this._layers[l],i._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){br.prototype._update.call(this);var i=this._bounds,l=this._container,d=i.getSize(),m=pe.retina?2:1;gt(l,i.min),l.width=m*d.x,l.height=m*d.y,l.style.width=d.x+"px",l.style.height=d.y+"px",pe.retina&&this._ctx.scale(2,2),this._ctx.translate(-i.min.x,-i.min.y),this.fire("update")}},_reset:function(){br.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(i){this._updateDashArray(i),this._layers[c(i)]=i;var l=i._order={layer:i,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=l),this._drawLast=l,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(i){this._requestRedraw(i)},_removePath:function(i){var l=i._order,d=l.next,m=l.prev;d?d.prev=m:this._drawLast=m,m?m.next=d:this._drawFirst=d,delete i._order,delete this._layers[c(i)],this._requestRedraw(i)},_updatePath:function(i){this._extendRedrawBounds(i),i._project(),i._update(),this._requestRedraw(i)},_updateStyle:function(i){this._updateDashArray(i),this._requestRedraw(i)},_updateDashArray:function(i){if(typeof i.options.dashArray=="string"){var l=i.options.dashArray.split(/[, ]+/),d=[],m,w;for(w=0;w<l.length;w++){if(m=Number(l[w]),isNaN(m))return;d.push(m)}i.options._dashArray=d}else i.options._dashArray=i.options.dashArray},_requestRedraw:function(i){this._map&&(this._extendRedrawBounds(i),this._redrawRequest=this._redrawRequest||H(this._redraw,this))},_extendRedrawBounds:function(i){if(i._pxBounds){var l=(i.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new O,this._redrawBounds.extend(i._pxBounds.min.subtract([l,l])),this._redrawBounds.extend(i._pxBounds.max.add([l,l]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var i=this._redrawBounds;if(i){var l=i.getSize();this._ctx.clearRect(i.min.x,i.min.y,l.x,l.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var i,l=this._redrawBounds;if(this._ctx.save(),l){var d=l.getSize();this._ctx.beginPath(),this._ctx.rect(l.min.x,l.min.y,d.x,d.y),this._ctx.clip()}this._drawing=!0;for(var m=this._drawFirst;m;m=m.next)i=m.layer,(!l||i._pxBounds&&i._pxBounds.intersects(l))&&i._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(i,l){if(this._drawing){var d,m,w,C,I=i._parts,F=I.length,Q=this._ctx;if(F){for(Q.beginPath(),d=0;d<F;d++){for(m=0,w=I[d].length;m<w;m++)C=I[d][m],Q[m?"lineTo":"moveTo"](C.x,C.y);l&&Q.closePath()}this._fillStroke(Q,i)}}},_updateCircle:function(i){if(!(!this._drawing||i._empty())){var l=i._point,d=this._ctx,m=Math.max(Math.round(i._radius),1),w=(Math.max(Math.round(i._radiusY),1)||m)/m;w!==1&&(d.save(),d.scale(1,w)),d.beginPath(),d.arc(l.x,l.y/w,m,0,Math.PI*2,!1),w!==1&&d.restore(),this._fillStroke(d,i)}},_fillStroke:function(i,l){var d=l.options;d.fill&&(i.globalAlpha=d.fillOpacity,i.fillStyle=d.fillColor||d.color,i.fill(d.fillRule||"evenodd")),d.stroke&&d.weight!==0&&(i.setLineDash&&i.setLineDash(l.options&&l.options._dashArray||[]),i.globalAlpha=d.opacity,i.lineWidth=d.weight,i.strokeStyle=d.color,i.lineCap=d.lineCap,i.lineJoin=d.lineJoin,i.stroke())},_onClick:function(i){for(var l=this._map.mouseEventToLayerPoint(i),d,m,w=this._drawFirst;w;w=w.next)d=w.layer,d.options.interactive&&d._containsPoint(l)&&(!(i.type==="click"||i.type==="preclick")||!this._map._draggableMoved(d))&&(m=d);this._fireEvent(m?[m]:!1,i)},_onMouseMove:function(i){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var l=this._map.mouseEventToLayerPoint(i);this._handleMouseHover(i,l)}},_handleMouseOut:function(i){var l=this._hoveredLayer;l&&(pt(this._container,"leaflet-interactive"),this._fireEvent([l],i,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(i,l){if(!this._mouseHoverThrottled){for(var d,m,w=this._drawFirst;w;w=w.next)d=w.layer,d.options.interactive&&d._containsPoint(l)&&(m=d);m!==this._hoveredLayer&&(this._handleMouseOut(i),m&&(Oe(this._container,"leaflet-interactive"),this._fireEvent([m],i,"mouseover"),this._hoveredLayer=m)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,i),this._mouseHoverThrottled=!0,setTimeout(s(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(i,l,d){this._map._fireDOMEvent(l,d||l.type,i)},_bringToFront:function(i){var l=i._order;if(l){var d=l.next,m=l.prev;if(d)d.prev=m;else return;m?m.next=d:d&&(this._drawFirst=d),l.prev=this._drawLast,this._drawLast.next=l,l.next=null,this._drawLast=l,this._requestRedraw(i)}},_bringToBack:function(i){var l=i._order;if(l){var d=l.next,m=l.prev;if(m)m.next=d;else return;d?d.prev=m:m&&(this._drawLast=m),l.prev=null,l.next=this._drawFirst,this._drawFirst.prev=l,this._drawFirst=l,this._requestRedraw(i)}}});function Mg(i){return pe.canvas?new Bg(i):null}var es=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(i){return document.createElement("<lvml:"+i+' class="lvml">')}}catch{}return function(i){return document.createElement("<"+i+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),eC={_initContainer:function(){this._container=Ue("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(br.prototype._update.call(this),this.fire("update"))},_initPath:function(i){var l=i._container=es("shape");Oe(l,"leaflet-vml-shape "+(this.options.className||"")),l.coordsize="1 1",i._path=es("path"),l.appendChild(i._path),this._updateStyle(i),this._layers[c(i)]=i},_addPath:function(i){var l=i._container;this._container.appendChild(l),i.options.interactive&&i.addInteractiveTarget(l)},_removePath:function(i){var l=i._container;at(l),i.removeInteractiveTarget(l),delete this._layers[c(i)]},_updateStyle:function(i){var l=i._stroke,d=i._fill,m=i.options,w=i._container;w.stroked=!!m.stroke,w.filled=!!m.fill,m.stroke?(l||(l=i._stroke=es("stroke")),w.appendChild(l),l.weight=m.weight+"px",l.color=m.color,l.opacity=m.opacity,m.dashArray?l.dashStyle=S(m.dashArray)?m.dashArray.join(" "):m.dashArray.replace(/( *, *)/g," "):l.dashStyle="",l.endcap=m.lineCap.replace("butt","flat"),l.joinstyle=m.lineJoin):l&&(w.removeChild(l),i._stroke=null),m.fill?(d||(d=i._fill=es("fill")),w.appendChild(d),d.color=m.fillColor||m.color,d.opacity=m.fillOpacity):d&&(w.removeChild(d),i._fill=null)},_updateCircle:function(i){var l=i._point.round(),d=Math.round(i._radius),m=Math.round(i._radiusY||d);this._setPath(i,i._empty()?"M0 0":"AL "+l.x+","+l.y+" "+d+","+m+" 0,"+65535*360)},_setPath:function(i,l){i._path.v=l},_bringToFront:function(i){Ai(i._container)},_bringToBack:function(i){Ii(i._container)}},$l=pe.vml?es:ce,ts=br.extend({_initContainer:function(){this._container=$l("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=$l("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){at(this._container),Xe(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){br.prototype._update.call(this);var i=this._bounds,l=i.getSize(),d=this._container;(!this._svgSize||!this._svgSize.equals(l))&&(this._svgSize=l,d.setAttribute("width",l.x),d.setAttribute("height",l.y)),gt(d,i.min),d.setAttribute("viewBox",[i.min.x,i.min.y,l.x,l.y].join(" ")),this.fire("update")}},_initPath:function(i){var l=i._path=$l("path");i.options.className&&Oe(l,i.options.className),i.options.interactive&&Oe(l,"leaflet-interactive"),this._updateStyle(i),this._layers[c(i)]=i},_addPath:function(i){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(i._path),i.addInteractiveTarget(i._path)},_removePath:function(i){at(i._path),i.removeInteractiveTarget(i._path),delete this._layers[c(i)]},_updatePath:function(i){i._project(),i._update()},_updateStyle:function(i){var l=i._path,d=i.options;l&&(d.stroke?(l.setAttribute("stroke",d.color),l.setAttribute("stroke-opacity",d.opacity),l.setAttribute("stroke-width",d.weight),l.setAttribute("stroke-linecap",d.lineCap),l.setAttribute("stroke-linejoin",d.lineJoin),d.dashArray?l.setAttribute("stroke-dasharray",d.dashArray):l.removeAttribute("stroke-dasharray"),d.dashOffset?l.setAttribute("stroke-dashoffset",d.dashOffset):l.removeAttribute("stroke-dashoffset")):l.setAttribute("stroke","none"),d.fill?(l.setAttribute("fill",d.fillColor||d.color),l.setAttribute("fill-opacity",d.fillOpacity),l.setAttribute("fill-rule",d.fillRule||"evenodd")):l.setAttribute("fill","none"))},_updatePoly:function(i,l){this._setPath(i,de(i._parts,l))},_updateCircle:function(i){var l=i._point,d=Math.max(Math.round(i._radius),1),m=Math.max(Math.round(i._radiusY),1)||d,w="a"+d+","+m+" 0 1,0 ",C=i._empty()?"M0 0":"M"+(l.x-d)+","+l.y+w+d*2+",0 "+w+-d*2+",0 ";this._setPath(i,C)},_setPath:function(i,l){i._path.setAttribute("d",l)},_bringToFront:function(i){Ai(i._path)},_bringToBack:function(i){Ii(i._path)}});pe.vml&&ts.include(eC);function Dg(i){return pe.svg||pe.vml?new ts(i):null}De.include({getRenderer:function(i){var l=i.options.renderer||this._getPaneRenderer(i.options.pane)||this.options.renderer||this._renderer;return l||(l=this._renderer=this._createRenderer()),this.hasLayer(l)||this.addLayer(l),l},_getPaneRenderer:function(i){if(i==="overlayPane"||i===void 0)return!1;var l=this._paneRenderers[i];return l===void 0&&(l=this._createRenderer({pane:i}),this._paneRenderers[i]=l),l},_createRenderer:function(i){return this.options.preferCanvas&&Mg(i)||Dg(i)}});var jg=Bi.extend({initialize:function(i,l){Bi.prototype.initialize.call(this,this._boundsToLatLngs(i),l)},setBounds:function(i){return this.setLatLngs(this._boundsToLatLngs(i))},_boundsToLatLngs:function(i){return i=V(i),[i.getSouthWest(),i.getNorthWest(),i.getNorthEast(),i.getSouthEast()]}});function tC(i,l){return new jg(i,l)}ts.create=$l,ts.pointsToPath=de,yr.geometryToLayer=zl,yr.coordsToLatLng=gf,yr.coordsToLatLngs=Nl,yr.latLngToCoords=vf,yr.latLngsToCoords=Bl,yr.getFeature=Mi,yr.asFeature=Ml,De.mergeOptions({boxZoom:!0});var Fg=Yn.extend({initialize:function(i){this._map=i,this._container=i._container,this._pane=i._panes.overlayPane,this._resetStateTimeout=0,i.on("unload",this._destroy,this)},addHooks:function(){Ee(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Xe(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){at(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(i){if(!i.shiftKey||i.which!==1&&i.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Za(),ef(),this._startPoint=this._map.mouseEventToContainerPoint(i),Ee(document,{contextmenu:$o,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(i){this._moved||(this._moved=!0,this._box=Ue("div","leaflet-zoom-box",this._container),Oe(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(i);var l=new O(this._point,this._startPoint),d=l.getSize();gt(this._box,l.min),this._box.style.width=d.x+"px",this._box.style.height=d.y+"px"},_finish:function(){this._moved&&(at(this._box),pt(this._container,"leaflet-crosshair")),qa(),tf(),Xe(document,{contextmenu:$o,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(i){if(!(i.which!==1&&i.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(s(this._resetState,this),0);var l=new D(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(l).fire("boxzoomend",{boxZoomBounds:l})}},_onKeyDown:function(i){i.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});De.addInitHook("addHandler","boxZoom",Fg),De.mergeOptions({doubleClickZoom:!0});var $g=Yn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(i){var l=this._map,d=l.getZoom(),m=l.options.zoomDelta,w=i.originalEvent.shiftKey?d-m:d+m;l.options.doubleClickZoom==="center"?l.setZoom(w):l.setZoomAround(i.containerPoint,w)}});De.addInitHook("addHandler","doubleClickZoom",$g),De.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Ug=Yn.extend({addHooks:function(){if(!this._draggable){var i=this._map;this._draggable=new Wr(i._mapPane,i._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),i.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),i.on("zoomend",this._onZoomEnd,this),i.whenReady(this._onZoomEnd,this))}Oe(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){pt(this._map._container,"leaflet-grab"),pt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var i=this._map;if(i._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var l=V(this._map.options.maxBounds);this._offsetLimit=z(this._map.latLngToContainerPoint(l.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(l.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;i.fire("movestart").fire("dragstart"),i.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(i){if(this._map.options.inertia){var l=this._lastTime=+new Date,d=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(d),this._times.push(l),this._prunePositions(l)}this._map.fire("move",i).fire("drag",i)},_prunePositions:function(i){for(;this._positions.length>1&&i-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var i=this._map.getSize().divideBy(2),l=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=l.subtract(i).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(i,l){return i-(i-l)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var i=this._draggable._newPos.subtract(this._draggable._startPos),l=this._offsetLimit;i.x<l.min.x&&(i.x=this._viscousLimit(i.x,l.min.x)),i.y<l.min.y&&(i.y=this._viscousLimit(i.y,l.min.y)),i.x>l.max.x&&(i.x=this._viscousLimit(i.x,l.max.x)),i.y>l.max.y&&(i.y=this._viscousLimit(i.y,l.max.y)),this._draggable._newPos=this._draggable._startPos.add(i)}},_onPreDragWrap:function(){var i=this._worldWidth,l=Math.round(i/2),d=this._initialWorldOffset,m=this._draggable._newPos.x,w=(m-l+d)%i+l-d,C=(m+l+d)%i-l-d,I=Math.abs(w+d)<Math.abs(C+d)?w:C;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=I},_onDragEnd:function(i){var l=this._map,d=l.options,m=!d.inertia||i.noInertia||this._times.length<2;if(l.fire("dragend",i),m)l.fire("moveend");else{this._prunePositions(+new Date);var w=this._lastPos.subtract(this._positions[0]),C=(this._lastTime-this._times[0])/1e3,I=d.easeLinearity,F=w.multiplyBy(I/C),Q=F.distanceTo([0,0]),oe=Math.min(d.inertiaMaxSpeed,Q),he=F.multiplyBy(oe/Q),Pe=oe/(d.inertiaDeceleration*I),Te=he.multiplyBy(-Pe/2).round();!Te.x&&!Te.y?l.fire("moveend"):(Te=l._limitOffset(Te,l.options.maxBounds),H(function(){l.panBy(Te,{duration:Pe,easeLinearity:I,noMoveStart:!0,animate:!0})}))}}});De.addInitHook("addHandler","dragging",Ug),De.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Wg=Yn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(i){this._map=i,this._setPanDelta(i.options.keyboardPanDelta),this._setZoomDelta(i.options.zoomDelta)},addHooks:function(){var i=this._map._container;i.tabIndex<=0&&(i.tabIndex="0"),Ee(i,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Xe(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var i=document.body,l=document.documentElement,d=i.scrollTop||l.scrollTop,m=i.scrollLeft||l.scrollLeft;this._map._container.focus(),window.scrollTo(m,d)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(i){var l=this._panKeys={},d=this.keyCodes,m,w;for(m=0,w=d.left.length;m<w;m++)l[d.left[m]]=[-1*i,0];for(m=0,w=d.right.length;m<w;m++)l[d.right[m]]=[i,0];for(m=0,w=d.down.length;m<w;m++)l[d.down[m]]=[0,i];for(m=0,w=d.up.length;m<w;m++)l[d.up[m]]=[0,-1*i]},_setZoomDelta:function(i){var l=this._zoomKeys={},d=this.keyCodes,m,w;for(m=0,w=d.zoomIn.length;m<w;m++)l[d.zoomIn[m]]=i;for(m=0,w=d.zoomOut.length;m<w;m++)l[d.zoomOut[m]]=-i},_addHooks:function(){Ee(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Xe(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(i){if(!(i.altKey||i.ctrlKey||i.metaKey)){var l=i.keyCode,d=this._map,m;if(l in this._panKeys){if(!d._panAnim||!d._panAnim._inProgress)if(m=this._panKeys[l],i.shiftKey&&(m=A(m).multiplyBy(3)),d.options.maxBounds&&(m=d._limitOffset(A(m),d.options.maxBounds)),d.options.worldCopyJump){var w=d.wrapLatLng(d.unproject(d.project(d.getCenter()).add(m)));d.panTo(w)}else d.panBy(m)}else if(l in this._zoomKeys)d.setZoom(d.getZoom()+(i.shiftKey?3:1)*this._zoomKeys[l]);else if(l===27&&d._popup&&d._popup.options.closeOnEscapeKey)d.closePopup();else return;$o(i)}}});De.addInitHook("addHandler","keyboard",Wg),De.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Hg=Yn.extend({addHooks:function(){Ee(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Xe(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(i){var l=pg(i),d=this._map.options.wheelDebounceTime;this._delta+=l,this._lastMousePos=this._map.mouseEventToContainerPoint(i),this._startTime||(this._startTime=+new Date);var m=Math.max(d-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(s(this._performZoom,this),m),$o(i)},_performZoom:function(){var i=this._map,l=i.getZoom(),d=this._map.options.zoomSnap||0;i._stop();var m=this._delta/(this._map.options.wheelPxPerZoomLevel*4),w=4*Math.log(2/(1+Math.exp(-Math.abs(m))))/Math.LN2,C=d?Math.ceil(w/d)*d:w,I=i._limitZoom(l+(this._delta>0?C:-C))-l;this._delta=0,this._startTime=null,I&&(i.options.scrollWheelZoom==="center"?i.setZoom(l+I):i.setZoomAround(this._lastMousePos,l+I))}});De.addInitHook("addHandler","scrollWheelZoom",Hg);var nC=600;De.mergeOptions({tapHold:pe.touchNative&&pe.safari&&pe.mobile,tapTolerance:15});var Vg=Yn.extend({addHooks:function(){Ee(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Xe(this._map._container,"touchstart",this._onDown,this)},_onDown:function(i){if(clearTimeout(this._holdTimeout),i.touches.length===1){var l=i.touches[0];this._startPos=this._newPos=new B(l.clientX,l.clientY),this._holdTimeout=setTimeout(s(function(){this._cancel(),this._isTapValid()&&(Ee(document,"touchend",Rt),Ee(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",l))},this),nC),Ee(document,"touchend touchcancel contextmenu",this._cancel,this),Ee(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function i(){Xe(document,"touchend",Rt),Xe(document,"touchend touchcancel",i)},_cancel:function(){clearTimeout(this._holdTimeout),Xe(document,"touchend touchcancel contextmenu",this._cancel,this),Xe(document,"touchmove",this._onMove,this)},_onMove:function(i){var l=i.touches[0];this._newPos=new B(l.clientX,l.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(i,l){var d=new MouseEvent(i,{bubbles:!0,cancelable:!0,view:window,screenX:l.screenX,screenY:l.screenY,clientX:l.clientX,clientY:l.clientY});d._simulated=!0,l.target.dispatchEvent(d)}});De.addInitHook("addHandler","tapHold",Vg),De.mergeOptions({touchZoom:pe.touch,bounceAtZoomLimits:!0});var Zg=Yn.extend({addHooks:function(){Oe(this._map._container,"leaflet-touch-zoom"),Ee(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){pt(this._map._container,"leaflet-touch-zoom"),Xe(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(i){var l=this._map;if(!(!i.touches||i.touches.length!==2||l._animatingZoom||this._zooming)){var d=l.mouseEventToContainerPoint(i.touches[0]),m=l.mouseEventToContainerPoint(i.touches[1]);this._centerPoint=l.getSize()._divideBy(2),this._startLatLng=l.containerPointToLatLng(this._centerPoint),l.options.touchZoom!=="center"&&(this._pinchStartLatLng=l.containerPointToLatLng(d.add(m)._divideBy(2))),this._startDist=d.distanceTo(m),this._startZoom=l.getZoom(),this._moved=!1,this._zooming=!0,l._stop(),Ee(document,"touchmove",this._onTouchMove,this),Ee(document,"touchend touchcancel",this._onTouchEnd,this),Rt(i)}},_onTouchMove:function(i){if(!(!i.touches||i.touches.length!==2||!this._zooming)){var l=this._map,d=l.mouseEventToContainerPoint(i.touches[0]),m=l.mouseEventToContainerPoint(i.touches[1]),w=d.distanceTo(m)/this._startDist;if(this._zoom=l.getScaleZoom(w,this._startZoom),!l.options.bounceAtZoomLimits&&(this._zoom<l.getMinZoom()&&w<1||this._zoom>l.getMaxZoom()&&w>1)&&(this._zoom=l._limitZoom(this._zoom)),l.options.touchZoom==="center"){if(this._center=this._startLatLng,w===1)return}else{var C=d._add(m)._divideBy(2)._subtract(this._centerPoint);if(w===1&&C.x===0&&C.y===0)return;this._center=l.unproject(l.project(this._pinchStartLatLng,this._zoom).subtract(C),this._zoom)}this._moved||(l._moveStart(!0,!1),this._moved=!0),G(this._animRequest);var I=s(l._move,l,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=H(I,this,!0),Rt(i)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,G(this._animRequest),Xe(document,"touchmove",this._onTouchMove,this),Xe(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});De.addInitHook("addHandler","touchZoom",Zg),De.BoxZoom=Fg,De.DoubleClickZoom=$g,De.Drag=Ug,De.Keyboard=Wg,De.ScrollWheelZoom=Hg,De.TapHold=Vg,De.TouchZoom=Zg,n.Bounds=O,n.Browser=pe,n.CRS=fe,n.Canvas=Bg,n.Circle=_f,n.CircleMarker=Il,n.Class=U,n.Control=On,n.DivIcon=Ig,n.DivOverlay=Xn,n.DomEvent=bP,n.DomUtil=vP,n.Draggable=Wr,n.Evented=se,n.FeatureGroup=gr,n.GeoJSON=yr,n.GridLayer=Xa,n.Handler=Yn,n.Icon=Ni,n.ImageOverlay=Dl,n.LatLng=te,n.LatLngBounds=D,n.Layer=Rn,n.LayerGroup=zi,n.LineUtil=AP,n.Map=De,n.Marker=Al,n.Mixin=EP,n.Path=Hr,n.Point=B,n.PolyUtil=IP,n.Polygon=Bi,n.Polyline=vr,n.Popup=jl,n.PosAnimation=mg,n.Projection=zP,n.Rectangle=jg,n.Renderer=br,n.SVG=ts,n.SVGOverlay=Ag,n.TileLayer=Di,n.Tooltip=Fl,n.Transformation=Re,n.Util=K,n.VideoOverlay=Lg,n.bind=s,n.bounds=z,n.canvas=Mg,n.circle=UP,n.circleMarker=$P,n.control=Ga,n.divIcon=JP,n.extend=o,n.featureGroup=DP,n.geoJSON=Tg,n.geoJson=VP,n.gridLayer=YP,n.icon=jP,n.imageOverlay=ZP,n.latLng=ie,n.latLngBounds=V,n.layerGroup=MP,n.map=xP,n.marker=FP,n.point=A,n.polygon=HP,n.polyline=WP,n.popup=QP,n.rectangle=tC,n.setOptions=b,n.stamp=c,n.svg=Dg,n.svgOverlay=KP,n.tileLayer=zg,n.tooltip=GP,n.transformation=le,n.version=r,n.videoOverlay=qP;var rC=window.L;n.noConflict=function(){return window.L=rC,this},window.L=n})})(_L,$p);function gL(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var eh,fS={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/eh=fS,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var a=typeof o;if(a==="string"||a==="number")n.push(o);else if(Array.isArray(o)){if(o.length){var s=t.apply(null,o);s&&n.push(s)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){n.push(o.toString());continue}for(var u in o)e.call(o,u)&&o[u]&&n.push(u)}}}return n.join(" ")}eh.exports?(t.default=t,eh.exports=t):window.classNames=t}();var ob,ib,ab,Ir=gL(fS.exports);function vL(e){const t=a=>{var s;return(s=window?.matchMedia(a).matches)!==null&&s!==void 0&&s},[n,r]=k.useState(t(e)),o=()=>{r(t(e))};return k.useEffect(()=>{const a=window.matchMedia(e);return o(),a.addEventListener("change",o),()=>a.removeEventListener("change",o)},[e]),n}function Up(){return Up=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Up.apply(this,arguments)}var sb,lb,ub,yL=function(e){return k.createElement("svg",Up({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},e),ob||(ob=k.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),ib||(ib=k.createElement("path",{fillRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z",clipRule:"evenodd"})),ab||(ab=k.createElement("path",{fillRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z",clipRule:"evenodd"})))};function Wp(){return Wp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wp.apply(this,arguments)}var bL=function(e){return k.createElement("svg",Wp({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},e),sb||(sb=k.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),lb||(lb=k.createElement("path",{fillRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z",clipRule:"evenodd"})),ub||(ub=k.createElement("path",{fillRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z",clipRule:"evenodd"})))};function Ae(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var oo,An={panel:"Panel-module_panel__4VWNp","panel--mobile-layout":"Panel-module_panel--mobile-layout__OII-B",panel__pointer:"Panel-module_panel__pointer__BETJ8","panel__pointer-position":"Panel-module_panel__pointer-position__Zer8q","panel__content-wrapper--info":"Panel-module_panel__content-wrapper--info__lrfgo","panel__pointer--info":"Panel-module_panel__pointer--info__5OaTN","panel__content-wrapper--success":"Panel-module_panel__content-wrapper--success__k0JQD","panel__pointer--success":"Panel-module_panel__pointer--success__O-X6n","panel__content-wrapper--warning":"Panel-module_panel__content-wrapper--warning__vYY8E","panel__pointer--warning":"Panel-module_panel__pointer--warning__l5Zf8","panel__content-wrapper--error":"Panel-module_panel__content-wrapper--error__3LhKe","panel__pointer--error":"Panel-module_panel__pointer--error__4MGTF","panel__content-wrapper":"Panel-module_panel__content-wrapper__oiWk8","panel__icon-wrapper":"Panel-module_panel__icon-wrapper__631EQ",panel__content:"Panel-module_panel__content__U3cAc",panel__header:"Panel-module_panel__header__UJuRe",panel__body:"Panel-module_panel__body__gRd1x"};Ae(`/* breakpoints-xs */
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
`),function(e){e.Success="success",e.Info="info",e.Warning="warning",e.Error="error"}(oo||(oo={}));const xL=({size:e,variant:t})=>{switch(t){case oo.Info:case oo.Error:case oo.Warning:return $.createElement(yL,{style:{width:e,height:e},"data-testid":"panel-icon-info"});case oo.Success:return $.createElement(bL,{style:{width:e,height:e},"data-testid":"panel-icon-success"})}},wL=({children:e})=>$.createElement("div",{className:Ir(An["panel__pointer-position"])},e),SL=({renderIcon:e=xL,title:t,children:n,variant:r=oo.Info,showPointer:o=!1,showIcon:a=!0,forceMobileLayout:s=!1,renderArrow:u=wL})=>{const c=(({forceMobileLayout:p})=>{const h=vL(`(max-width: ${mL})`);return!!p||h})({forceMobileLayout:s}),f=c?hL:pL;return $.createElement("div",{className:Ir(An.panel,{[An["panel--mobile-layout"]]:c})},o&&u({children:$.createElement("div",{"data-testid":"panel-pointer",className:Ir(An.panel__pointer,An[`panel__pointer--${r}`])})}),$.createElement("div",{"data-testid":"panel-content-wrapper",className:Ir(An["panel__content-wrapper"],An[`panel__content-wrapper--${r}`])},a&&$.createElement("div",{"data-testid":"panel-icon-wrapper",className:An["panel__icon-wrapper"]},e({size:f,variant:r})),$.createElement("div",{className:An.panel__content},t&&$.createElement("h2",{className:An.panel__header},t),$.createElement("div",{className:An.panel__body},n))))};Ae(`.PopoverPanel-module_popover-panel__tGILa {
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
`);k.createContext(void 0);Ae(`.ToggleButtonGroup-module_toggle-button-group__op1wi {
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
`);var cb;(function(e){e.Primary="primary",e.Secondary="secondary"})(cb||(cb={}));k.createContext(void 0);Ae(`.Accordion-module_accordion__LVhhv {
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
`);function T_(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}const Sc=e=>{var{svgIconComponent:t}=e,n=T_(e,["svgIconComponent"]);return k.isValidElement(t)?k.cloneElement(t,Object.assign({},n)):null};var Hp,Vp,Zp,nr={"altinn-button":"Button-module_altinn-button__66e22",icon:"Button-module_icon__-43u5","altinn-button--small":"Button-module_altinn-button--small__Dgk-Q","altinn-button--medium":"Button-module_altinn-button--medium__bOVBh","altinn-button--large":"Button-module_altinn-button--large__xStsn","altinn-button--full-width":"Button-module_altinn-button--full-width__MAP1E","altinn-button--dashed-border":"Button-module_altinn-button--dashed-border__qpC6S","altinn-button--only-icon":"Button-module_altinn-button--only-icon__dHhst","altinn-button--filled":"Button-module_altinn-button--filled__-w8IZ","altinn-button--outline":"Button-module_altinn-button--outline__NWnjl","altinn-button--quiet":"Button-module_altinn-button--quiet__2HgNN","altinn-button--filled--primary":"Button-module_altinn-button--filled--primary__qR1t6","altinn-button--filled--secondary":"Button-module_altinn-button--filled--secondary__RXBZU","altinn-button--filled--success":"Button-module_altinn-button--filled--success__-hCDf","altinn-button--filled--danger":"Button-module_altinn-button--filled--danger__dshZU","altinn-button--filled--inverted":"Button-module_altinn-button--filled--inverted__B3H2y","altinn-button--outline--primary":"Button-module_altinn-button--outline--primary__yrQtz","altinn-button--outline--secondary":"Button-module_altinn-button--outline--secondary__NQPoO","altinn-button--outline--success":"Button-module_altinn-button--outline--success__oAdH7","altinn-button--outline--danger":"Button-module_altinn-button--outline--danger__ngRhZ","altinn-button--outline--inverted":"Button-module_altinn-button--outline--inverted__opiJ3","altinn-button--quiet--primary":"Button-module_altinn-button--quiet--primary__ym-xv","altinn-button--quiet--secondary":"Button-module_altinn-button--quiet--secondary__LschY","altinn-button--quiet--success":"Button-module_altinn-button--quiet--success__AvIPs","altinn-button--quiet--danger":"Button-module_altinn-button--quiet--danger__buvJM","altinn-button--quiet--inverted":"Button-module_altinn-button--quiet--inverted__-VC-B"};Ae(`.Button-module_altinn-button__66e22 {
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
`),function(e){e.Small="small",e.Medium="medium",e.Large="large"}(Hp||(Hp={})),function(e){e.Primary="primary",e.Secondary="secondary",e.Success="success",e.Danger="danger",e.Inverted="inverted"}(Vp||(Vp={})),function(e){e.Filled="filled",e.Outline="outline",e.Quiet="quiet"}(Zp||(Zp={}));var qp,Kp;k.forwardRef((e,t)=>{var{children:n,color:r=Vp.Primary,variant:o=Zp.Filled,size:a=Hp.Small,fullWidth:s=!1,dashedBorder:u=!1,iconPlacement:c="left",icon:f,type:p="button",className:h}=e,_=T_(e,["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"]);return $.createElement("button",Object.assign({},_,{ref:t,className:Ir(nr["altinn-button"],nr[`altinn-button--${a}`],nr[`altinn-button--${o}`],nr[`altinn-button--${r}`],nr[`altinn-button--${o}--${r}`],{[nr["altinn-button--full-width"]]:s},{[nr["altinn-button--dashed-border"]]:u},{[nr["altinn-button--only-icon"]]:!n&&f},h),type:p}),f&&c==="left"&&$.createElement(Sc,{svgIconComponent:f,className:nr.icon}),n,f&&c==="right"&&$.createElement(Sc,{svgIconComponent:f,className:nr.icon}))});(function(e){e.Primary="primary",e.Success="success"})(qp||(qp={})),function(e){e.Small="small",e.Medium="medium"}(Kp||(Kp={}));k.createContext({color:qp.Primary,size:Kp.Medium});Ae(`.Page-module_page__THNNc {
  width: 100%;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
}
`);Ae(`.PageHeader-module_page-header__94GS1 {
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
`);Ae(`.PageContent-module_page-content__-sHWi {
  --component-page_content-vertical-padding: 2rem;
  background-color: white;
  padding-top: var(--component-page_content-vertical-padding);
  padding-bottom: var(--component-page_content-vertical-padding);
  box-sizing: inherit;
}
`);var Qp;Ae(`.List-module_list__9aWGq {
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
`),function(e){e.Solid="solid",e.Dashed="dashed"}(Qp||(Qp={}));k.createContext({borderStyle:Qp.Solid});Ae(`.ListItem-module_list-item__OIENi {
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
`);var ti,kc,di;(function(e){e.Default="default",e.Error="error",e.Disabled="disabled",e.ReadOnlyInfo="readonly-info",e.ReadOnlyConfirm="readonly-confirm"})(ti||(ti={})),function(e){e.ReadOnlyInfo="readonly-info",e.ReadOnlyConfirm="readonly-confirm"}(kc||(kc={})),function(e){e.None="none",e.Error="error",e.Search="search"}(di||(di={}));var db;function Gp(){return Gp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gp.apply(this,arguments)}var fb,kL=function(e){return k.createElement("svg",Gp({xmlns:"http://www.w3.org/2000/svg",width:16,height:15,fill:"none"},e),db||(db=k.createElement("path",{fill:"#fff",d:"M8 0C3.875 0 .5 3.375.5 7.5S3.875 15 8 15s7.5-3.375 7.5-7.5S12.125 0 8 0Zm.875 11.25H7.5V9.937h1.375v1.313ZM8.687 9h-1l-.312-4.875H9L8.687 9Z"})))};function Jp(){return Jp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jp.apply(this,arguments)}var PL=function(e){return k.createElement("svg",Jp({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",viewBox:"0 0 36 36"},e),fb||(fb=k.createElement("path",{fill:"#000",d:"M34 31.576 23.929 21.394c1.624-2.101 2.437-4.525 2.437-7.273C26.366 7.495 20.843 2 14.183 2S2 7.495 2 14.121s5.523 12.121 12.183 12.121c2.761 0 5.36-.97 7.31-2.424L31.725 34 34 31.576ZM5.249 14.12c0-4.848 4.06-8.889 8.934-8.889 4.873 0 8.934 4.04 8.934 8.89 0 4.848-4.061 8.888-8.934 8.888-4.873 0-8.934-4.04-8.934-8.889Z"})))},ir={InputWrapper:"InputWrapper-module_InputWrapper__us2BQ","InputWrapper--with-focus-effect":"InputWrapper-module_InputWrapper--with-focus-effect__24aF7","InputWrapper--default":"InputWrapper-module_InputWrapper--default__Lcj6I","InputWrapper--error":"InputWrapper-module_InputWrapper--error__C8fG3","InputWrapper--disabled":"InputWrapper-module_InputWrapper--disabled__p0H70","InputWrapper--readonly-info":"InputWrapper-module_InputWrapper--readonly-info__u6Mi8","InputWrapper--readonly-confirm":"InputWrapper-module_InputWrapper--readonly-confirm__Y-YY-","InputWrapper--search":"InputWrapper-module_InputWrapper--search__1aIP8","InputWrapper--with-padding":"InputWrapper-module_InputWrapper--with-padding__o-H2V",InputWrapper__field:"InputWrapper-module_InputWrapper__field__-Uwxu",InputWrapper__icon:"InputWrapper-module_InputWrapper__icon__tbkEy","InputWrapper__icon--disabled":"InputWrapper-module_InputWrapper__icon--disabled__mmqUt",InputWrapper__label:"InputWrapper-module_InputWrapper__label__tLifi"};Ae(`.InputWrapper-module_InputWrapper__us2BQ {
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
`);const CL=({variant:e,disabled:t=!1})=>e===di.Error?$.createElement("div",{className:ir.InputWrapper__icon},$.createElement(kL,{"data-testid":"input-icon-error"})):e===di.Search?$.createElement("div",{className:Ir(ir.InputWrapper__icon,{[ir["InputWrapper__icon--disabled"]]:t})},$.createElement(PL,{"data-testid":"input-icon-search"})):null,EL=({isValid:e=!0,disabled:t=!1,readOnly:n=!1,isSearch:r=!1,label:o,inputId:a,inputRenderer:s,noFocusEffect:u,noPadding:c})=>{const f=k.useId(),p=a??f,{variant:h,iconVariant:_}=(({readOnly:v=!1,disabled:y=!1,isValid:b=!0,isSearch:P=!1}={})=>{let g=di.None;return P&&(g=di.Search),y?{variant:ti.Disabled,iconVariant:g}:v===!0||v===kc.ReadOnlyInfo?{variant:ti.ReadOnlyInfo,iconVariant:g}:v===kc.ReadOnlyConfirm?{variant:ti.ReadOnlyConfirm,iconVariant:g}:b===!1?{variant:ti.Error,iconVariant:di.Error}:{variant:ti.Default,iconVariant:g}})({readOnly:n,disabled:t,isValid:e,isSearch:r});return $.createElement($.Fragment,null,o&&$.createElement("label",{"data-testid":"InputWrapper-label",className:Ir(ir.InputWrapper__label),htmlFor:p},o),$.createElement("div",{"data-testid":"InputWrapper",className:Ir(ir.InputWrapper,ir[`InputWrapper--${h}`],{[ir["InputWrapper--search"]]:r,[ir["InputWrapper--with-focus-effect"]]:!u,[ir["InputWrapper--with-padding"]]:!c})},$.createElement(CL,{variant:_,disabled:t}),s({className:ir.InputWrapper__field,inputId:p,variant:h})))},OL=e=>{var{id:t,onChange:n,disabled:r=!1,label:o}=e,a=T_(e,["id","onChange","disabled","label"]);return $.createElement(EL,{disabled:r,isSearch:!0,label:o,inputRenderer:({className:s,variant:u})=>{const c={id:t,disabled:r,className:Ir(s)};return $.createElement("input",Object.assign({},c,a,{"data-testid":`${t}-${u}`,onChange:n}))}})};Ae(`.ErrorMessage-module_altinn-error-message-wrapper__zR1LF {
  color: var(--component-error_message-color-text);
  font-size: var(--component-error_message-font_size-xs);
}
`);Ae(`.Map-module_map__mpwLI {
  position: relative;
  height: 50rem;
  width: 100%;
}
`);var Yp,hb;Ae(`Table {
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
`),function(e){e.Header="header",e.Body="body",e.Footer="footer"}(Yp||(Yp={})),function(e){e.Descending="desc",e.Ascending="asc",e.NotSortable="notSortable",e.NotActive="notActive"}(hb||(hb={}));k.createContext(void 0);k.createContext({variantStandard:Yp.Body});Ae(`.TableHeader-module_table-header__mrqgB {
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
`);var pb;Ae(`.CheckboxRadioTemplate-module_altinn-template__x5xJ- {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(pb||(pb={}));var mb;Ae(`.RadioButton-module_altinn-radio__iDfpf {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(mb||(mb={}));Ae(`.Checkbox-module_altinn-checkbox__UGXBu {
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
`);var _b;Ae(`.FieldSet-module_altinn-field-set__NebiS {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(_b||(_b={}));var gb;Ae(`.CheckboxGroup-module_altinn-checkbox-group__Q7GlX {
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
`),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(gb||(gb={}));Ae(`.Pagination-module_pagination-icon__zVOLT {
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
`);var vb,yb;Ae(`.RadioGroup-module_altinn-radio-group__Eje9Q {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(vb||(vb={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(yb||(yb={}));let bb=0;function RL(e){const[t,n]=k.useState(e),r=e||t;return k.useEffect(()=>{t==null&&(bb+=1,n(`aksel-icon-${bb}`))},[t]),r}const xb=$["useId"];function hS(e){var t;if(xb!==void 0){const n=xb();return e??n.replace(/(:)/g,"")}return(t=RL(e))!==null&&t!==void 0?t:""}var TL=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const LL=k.forwardRef((e,t)=>{var{title:n,titleId:r}=e,o=TL(e,["title","titleId"]);let a=hS();return a=n?r||"title-"+a:void 0,k.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},o),n?k.createElement("title",{id:a},n):null,k.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-11c2.205 0 4 1.657 4 3.693 0 .986-.416 1.914-1.172 2.612l-.593.54-.294.28c-.477.466-.869.94-.936 1.417l-.01.144v.814h-1.991v-.814c0-1.254.84-2.214 1.675-3.002l.74-.68c.38-.35.59-.816.59-1.31 0-1.024-.901-1.856-2.01-1.856-1.054 0-1.922.755-2.002 1.71l-.006.145H8C8 6.657 9.794 5 12 5Z",fill:"currentColor"}))}),AL=LL;var IL=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const zL=k.forwardRef((e,t)=>{var{title:n,titleId:r}=e,o=IL(e,["title","titleId"]);let a=hS();return a=n?r||"title-"+a:void 0,k.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},o),n?k.createElement("title",{id:a},n):null,k.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 16a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-11c2.205 0 4 1.657 4 3.693 0 .986-.416 1.914-1.172 2.612l-.593.54-.294.28c-.477.466-.869.94-.936 1.417l-.01.144v.814h-1.991v-.814c0-1.254.84-2.214 1.675-3.002l.74-.68c.38-.35.59-.816.59-1.31 0-1.024-.901-1.856-2.01-1.856-1.054 0-1.922.755-2.002 1.71l-.006.145H8C8 6.657 9.794 5 12 5Z",fill:"currentColor"}))}),NL=zL;function L_(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}var Xs;(function(e){e.event="event",e.props="prop"})(Xs||(Xs={}));function Or(){}function vi(e){return!!(e||"").match(/\d/)}function fi(e){return e==null}function BL(e){return typeof e=="number"&&isNaN(e)}function pS(e){return fi(e)||BL(e)||typeof e=="number"&&!isFinite(e)}function mS(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function ML(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function DL(e,t,n){var r=ML(n),o=e.search(/[1-9]/);return o=o===-1?e.length:o,e.substring(0,o)+e.substring(o,e.length).replace(r,"$1"+t)}function jL(e){var t=k.useRef(e);t.current=e;var n=k.useRef(function(){for(var r=[],o=arguments.length;o--;)r[o]=arguments[o];return t.current.apply(t,r)});return n.current}function A_(e,t){t===void 0&&(t=!0);var n=e[0]==="-",r=n&&t;e=e.replace("-","");var o=e.split("."),a=o[0],s=o[1]||"";return{beforeDecimal:a,afterDecimal:s,hasNegation:n,addNegation:r}}function FL(e){if(!e)return e;var t=e[0]==="-";t&&(e=e.substring(1,e.length));var n=e.split("."),r=n[0].replace(/^0+/,"")||"0",o=n[1]||"";return(t?"-":"")+r+(o?"."+o:"")}function _S(e,t,n){for(var r="",o=n?"0":"",a=0;a<=t-1;a++)r+=e[a]||o;return r}function wb(e,t){return Array(t+1).join(e)}function gS(e){var t=e+"",n=t[0]==="-"?"-":"";n&&(t=t.substring(1));var r=t.split(/[eE]/g),o=r[0],a=r[1];if(a=Number(a),!a)return n+o;o=o.replace(".","");var s=1+a,u=o.length;return s<0?o="0."+wb("0",Math.abs(s))+o:s>=u?o=o+wb("0",s-u):o=(o.substring(0,s)||"0")+"."+o.substring(s),n+o}function Sb(e,t,n){if(["","-"].indexOf(e)!==-1)return e;var r=(e.indexOf(".")!==-1||n)&&t,o=A_(e),a=o.beforeDecimal,s=o.afterDecimal,u=o.hasNegation,c=parseFloat("0."+(s||"0")),f=s.length<=t?"0."+s:c.toFixed(t),p=f.split("."),h=a.split("").reverse().reduce(function(b,P,g){return b.length>g?(Number(b[0])+Number(P)).toString()+b.substring(1,b.length):P+b},p[0]),_=_S(p[1]||"",t,n),v=u?"-":"",y=r?".":"";return""+v+h+y+_}function eo(e,t){if(e.value=e.value,e!==null){if(e.createTextRange){var n=e.createTextRange();return n.move("character",t),n.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}function vS(e,t){for(var n=0,r=0,o=e.length,a=t.length;e[n]===t[n]&&n<o;)n++;for(;e[o-1-r]===t[a-1-r]&&a-r>n&&o-r>n;)r++;return{from:{start:n,end:o-r},to:{start:n,end:a-r}}}function $L(e,t,n){return Math.min(Math.max(e,t),n)}function th(e){return Math.max(e.selectionStart,e.selectionEnd)}function UL(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function yS(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function bS(e,t){return e===void 0&&(e=" "),typeof e=="string"?e:e[t]||" "}function WL(e,t,n,r,o,a){var s=vS(n,e),u=s.from,c=s.to;if(u.end-u.start===1&&u.end===c.end&&c.end===r)return r;var f=o.findIndex(function(R){return R}),p=e.slice(0,f);!t&&!n.startsWith(p)&&(n=p+n,r=r+p.length);for(var h=n.length,_=e.length,v={},y=new Array(h),b=0;b<h;b++){y[b]=-1;for(var P=0,g=_;P<g;P++)if(n[b]===e[P]&&v[P]!==!0){y[b]=P,v[P]=!0;break}}for(var x=r;x<h&&(y[x]===-1||!a(n[x]));)x++;var S=x===h||y[x]===-1?_:y[x];for(x=r-1;x>0&&y[x]===-1;)x--;var E=x===-1||y[x]===-1?0:y[x]+1;return E>S?S:r-E<S-r?E:S}function Pc(e,t,n,r){var o=e.length;if(t=$L(t,0,o),r==="left"){for(;t>=0&&!n[t];)t--;t===-1&&(t=n.indexOf(!0))}else{for(;t<=o&&!n[t];)t++;t>o&&(t=n.lastIndexOf(!0))}return t===-1&&(t=o),t}function HL(e){for(var t=Array.from({length:e.length+1}).map(function(){return!0}),n=0,r=t.length;n<r;n++)t[n]=!!(vi(e[n])||vi(e[n-1]));return t}function xS(e,t,n,r,o,a){a===void 0&&(a=Or);var s=jL(function(y,b){var P,g;return pS(y)?(g="",P=""):typeof y=="number"||b?(g=typeof y=="number"?gS(y):y,P=r(g)):(g=o(y,void 0),P=r(g)),{formattedValue:P,numAsString:g}}),u=k.useState(function(){return s(fi(e)?t:e,n)}),c=u[0],f=u[1],p=function(y,b){y.formattedValue!==c.formattedValue&&f({formattedValue:y.formattedValue,numAsString:y.value}),a(y,b)},h=e,_=n;fi(e)&&(h=c.numAsString,_=!0);var v=s(h,_);return k.useMemo(function(){f(v)},[v.formattedValue]),[c,p]}function VL(e){return e.replace(/[^0-9]/g,"")}function ZL(e){return e}function wS(e){var t=e.type;t===void 0&&(t="text");var n=e.displayType;n===void 0&&(n="input");var r=e.customInput,o=e.renderText,a=e.getInputRef,s=e.format;s===void 0&&(s=ZL);var u=e.removeFormatting;u===void 0&&(u=VL);var c=e.defaultValue,f=e.valueIsNumericString,p=e.onValueChange,h=e.isAllowed,_=e.onChange;_===void 0&&(_=Or);var v=e.onKeyDown;v===void 0&&(v=Or);var y=e.onMouseUp;y===void 0&&(y=Or);var b=e.onFocus;b===void 0&&(b=Or);var P=e.onBlur;P===void 0&&(P=Or);var g=e.value,x=e.getCaretBoundary;x===void 0&&(x=HL);var S=e.isValidInputCharacter;S===void 0&&(S=vi);var E=L_(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter"]),R=xS(g,c,!!f,s,u,p),T=R[0],N=T.formattedValue,j=T.numAsString,W=R[1],M=k.useRef({formattedValue:N,numAsString:j}),H=function(ee,ce){M.current={formattedValue:ee.formattedValue,numAsString:ee.value},W(ee,ce)},G=k.useState(!1),K=G[0],U=G[1],re=k.useRef(null),q=k.useRef({setCaretTimeout:null,focusTimeout:null});k.useEffect(function(){return U(!0),function(){clearTimeout(q.current.setCaretTimeout),clearTimeout(q.current.focusTimeout)}},[]);var se=s,B=function(ee,ce){var de=parseFloat(ce);return{formattedValue:ee,value:ce,floatValue:isNaN(de)?void 0:de}},Y=function(ee,ce,de){ee.selectionStart===0&&ee.selectionEnd===ee.value.length||(eo(ee,ce),q.current.setCaretTimeout=setTimeout(function(){ee.value===de&&ee.selectionStart!==ee.selectionEnd&&eo(ee,ce)},0))},A=function(ee,ce,de){return Pc(ee,ce,x(ee),de)},O=function(ee,ce,de){var _e=x(ce),ke=WL(ce,N,ee,de,_e,S);return ke=Pc(ce,ke,_e),ke},z=function(ee){var ce=ee.formattedValue;ce===void 0&&(ce="");var de=ee.input,_e=ee.setCaretPosition;_e===void 0&&(_e=!0);var ke=ee.source,Ne=ee.event,$e=ee.numAsString,Ye=ee.caretPos;if(de){if(Ye===void 0&&_e){var tt=ee.inputValue||de.value,qt=th(de);de.value=ce,Ye=O(tt,ce,qt)}de.value=ce,_e&&Ye!==void 0&&Y(de,Ye,ce)}ce!==N&&H(B(ce,$e),{event:Ne,source:ke})};k.useEffect(function(){var ee=M.current,ce=ee.formattedValue,de=ee.numAsString;N!==ce&&(N!==j||ce!==de)&&H(B(N,j),{event:void 0,source:Xs.props})},[N,j]);var D=re.current?th(re.current):void 0,V=typeof window<"u"?k.useLayoutEffect:k.useEffect;V(function(){var ee=re.current;if(N!==M.current.formattedValue&&ee){var ce=O(M.current.formattedValue,N,D);ee.value=N,Y(ee,ce,N)}},[N]);var te=function(ee,ce,de){var _e=vS(N,ee),ke=Object.assign(Object.assign({},_e),{lastValue:N}),Ne=u(ee,ke),$e=se(Ne);if(Ne=u($e,void 0),h&&!h(B($e,Ne))){var Ye=ce.target,tt=th(Ye),qt=O(ee,N,tt);return Ye.value=N,Y(Ye,qt,N),!1}return z({formattedValue:$e,numAsString:Ne,inputValue:ee,event:ce,source:de,setCaretPosition:!0,input:ce.target}),!0},ie=function(ee){var ce=ee.target,de=ce.value,_e=te(de,ee,Xs.event);_e&&_(ee)},fe=function(ee){var ce=ee.target,de=ee.key,_e=ce.selectionStart,ke=ce.selectionEnd,Ne=ce.value;Ne===void 0&&(Ne="");var $e;if(de==="ArrowLeft"||de==="Backspace"?$e=Math.max(_e-1,0):de==="ArrowRight"?$e=Math.min(_e+1,Ne.length):de==="Delete"&&($e=_e),$e===void 0||_e!==ke){v(ee);return}var Ye=$e;if(de==="ArrowLeft"||de==="ArrowRight"){var tt=de==="ArrowLeft"?"left":"right";Ye=A(Ne,$e,tt),Ye!==$e&&ee.preventDefault()}else de==="Delete"&&!S(Ne[$e])?Ye=A(Ne,$e,"right"):de==="Backspace"&&!S(Ne[$e])&&(Ye=A(Ne,$e,"left"));Ye!==$e&&Y(ce,Ye,Ne),ee.isUnitTestRun&&Y(ce,Ye,Ne),v(ee)},be=function(ee){var ce=ee.target,de=ce.selectionStart,_e=ce.selectionEnd,ke=ce.value;if(ke===void 0&&(ke=""),de===_e){var Ne=A(ke,de);Ne!==de&&Y(ce,Ne,ke)}y(ee)},Je=function(ee){ee.persist&&ee.persist();var ce=ee.target;re.current=ce,q.current.focusTimeout=setTimeout(function(){var de=ce.selectionStart,_e=ce.selectionEnd,ke=ce.value;ke===void 0&&(ke="");var Ne=A(ke,de);Ne!==de&&!(de===0&&_e===ke.length)&&Y(ce,Ne,ke),b(ee)},0)},Ze=function(ee){re.current=null,clearTimeout(q.current.focusTimeout),clearTimeout(q.current.setCaretTimeout),P(ee)},Re=K&&UL()?"numeric":void 0,le=Object.assign({inputMode:Re},E,{type:t,value:N,onChange:ie,onKeyDown:fe,onMouseUp:be,onFocus:Je,onBlur:Ze});if(n==="text")return o?$.createElement($.Fragment,null,o(N,E)||null):$.createElement("span",Object.assign({},E,{ref:a}),N);if(r){var me=r;return $.createElement(me,Object.assign({},le,{ref:a}))}return $.createElement("input",Object.assign({},le,{ref:a}))}function kb(e,t){var n=t.decimalScale,r=t.fixedDecimalScale,o=t.prefix;o===void 0&&(o="");var a=t.suffix;a===void 0&&(a="");var s=t.allowNegative,u=t.thousandsGroupStyle;if(u===void 0&&(u="thousand"),e===""||e==="-")return e;var c=Bd(t),f=c.thousandSeparator,p=c.decimalSeparator,h=n!==0&&e.indexOf(".")!==-1||n&&r,_=A_(e,s),v=_.beforeDecimal,y=_.afterDecimal,b=_.addNegation;return n!==void 0&&(y=_S(y,n,!!r)),f&&(v=DL(v,f,u)),o&&(v=o+v),a&&(y=y+a),b&&(v="-"+v),e=v+(h&&p||"")+y,e}function Bd(e){var t=e.decimalSeparator;t===void 0&&(t=".");var n=e.thousandSeparator,r=e.allowedDecimalSeparators;return n===!0&&(n=","),r||(r=[t,"."]),{decimalSeparator:t,thousandSeparator:n,allowedDecimalSeparators:r}}function qL(e,t){e===void 0&&(e="");var n=new RegExp("(-)"),r=new RegExp("(-)(.)*(-)"),o=n.test(e),a=r.test(e);return e=e.replace(/-/g,""),o&&!a&&t&&(e="-"+e),e}function KL(e,t){return new RegExp("(^-)|[0-9]|"+mS(e),t?"g":void 0)}function QL(e,t,n){return e===""?!0:!t?.match(/\d/)&&!n?.match(/\d/)&&typeof e=="string"&&!isNaN(Number(e))}function GL(e,t,n){var r;t===void 0&&(t=yS(e));var o=n.allowNegative,a=n.prefix;a===void 0&&(a="");var s=n.suffix;s===void 0&&(s="");var u=n.decimalScale,c=t.from,f=t.to,p=f.start,h=f.end,_=Bd(n),v=_.allowedDecimalSeparators,y=_.decimalSeparator,b=e[h]===y;if(vi(e)&&(e===a||e===s)&&t.lastValue==="")return e;if(h-p===1&&v.indexOf(e[p])!==-1){var P=u===0?"":y;e=e.substring(0,p)+P+e.substring(p+1,e.length)}var g=function(se,B,Y){var A=!1,O=!1;a.startsWith("-")?A=!1:se.startsWith("--")?(A=!1,O=!0):s.startsWith("-")&&se.length===s.length?A=!1:se[0]==="-"&&(A=!0);var z=A?1:0;return O&&(z=2),z&&(se=se.substring(z),B-=z,Y-=z),{value:se,start:B,end:Y,hasNegation:A}},x=g(e,p,h),S=x.hasNegation;r=x,e=r.value,p=r.start,h=r.end;var E=g(t.lastValue,c.start,c.end),R=E.start,T=E.end,N=E.value,j=e.substring(p,h);e.length&&N.length&&(R>N.length-s.length||T<a.length)&&!(j&&s.startsWith(j))&&(e=N);var W=0;e.startsWith(a)?W+=a.length:p<a.length&&(W=p),e=e.substring(W),h-=W;var M=e.length,H=e.length-s.length;e.endsWith(s)?M=H:(h>H||h>e.length-s.length)&&(M=h),e=e.substring(0,M),e=qL(S?"-"+e:e,o),e=(e.match(KL(y,!0))||[]).join("");var G=e.indexOf(y);e=e.replace(new RegExp(mS(y),"g"),function(se,B){return B===G?".":""});var K=A_(e,o),U=K.beforeDecimal,re=K.afterDecimal,q=K.addNegation;return f.end-f.start<c.end-c.start&&U===""&&b&&!parseFloat(re)&&(e=q?"-":""),e}function JL(e,t){var n=t.prefix;n===void 0&&(n="");var r=t.suffix;r===void 0&&(r="");var o=Array.from({length:e.length+1}).map(function(){return!0}),a=e[0]==="-";o.fill(!1,0,n.length+(a?1:0));var s=e.length;return o.fill(!1,s-r.length+1,s+1),o}function YL(e){var t=Bd(e),n=t.thousandSeparator,r=t.decimalSeparator,o=e.prefix;o===void 0&&(o="");var a=e.allowNegative;if(a===void 0&&(a=!0),n===r)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+n+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+r+` (default value for decimalSeparator is .)
     `);return o.startsWith("-")&&a&&(console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+o+`
      allowNegative: `+a+`
    `),a=!1),Object.assign(Object.assign({},e),{allowNegative:a})}function XL(e){e=YL(e);var t=e.decimalSeparator;t===void 0&&(t="."),e.allowedDecimalSeparators,e.thousandsGroupStyle;var n=e.suffix,r=e.allowNegative,o=e.allowLeadingZeros,a=e.onKeyDown;a===void 0&&(a=Or);var s=e.onBlur;s===void 0&&(s=Or);var u=e.thousandSeparator,c=e.decimalScale,f=e.fixedDecimalScale,p=e.prefix;p===void 0&&(p="");var h=e.defaultValue,_=e.value,v=e.valueIsNumericString,y=e.onValueChange,b=L_(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),P=function(K){return kb(K,e)},g=function(K,U){return GL(K,U,e)},x=fi(_)?h:_,S=v??QL(x,p,n);fi(_)?fi(h)||(S=v||typeof h=="number"):S=v||typeof _=="number";var E=function(K){return pS(K)?K:(typeof K=="number"&&(K=gS(K)),S&&typeof c=="number"?Sb(K,c,!!f):K)},R=xS(E(_),E(h),!!S,P,g,y),T=R[0],N=T.numAsString,j=T.formattedValue,W=R[1],M=function(K){var U=K.target,re=K.key,q=U.selectionStart,se=U.selectionEnd,B=U.value;if(B===void 0&&(B=""),q!==se){a(K);return}re==="Backspace"&&B[0]==="-"&&q===p.length+1&&r&&eo(U,1);var Y=Bd(e),A=Y.decimalSeparator,O=Y.allowedDecimalSeparators;re==="Backspace"&&B[q-1]===A&&c&&f&&(eo(U,q-1),K.preventDefault()),O?.includes(re)&&B[q]===A&&eo(U,q+1);var z=u===!0?",":u;re==="Backspace"&&B[q-1]===z&&eo(U,q-1),re==="Delete"&&B[q]===z&&eo(U,q+1),a(K)},H=function(K){var U=N;if(U.match(/\d/g)||(U=""),o||(U=FL(U)),f&&c&&(U=Sb(U,c,f)),U!==N){var re=kb(U,e);W({formattedValue:re,value:U,floatValue:parseFloat(U)},{event:K,source:Xs.event})}s(K)},G=function(K){return K===t?!0:vi(K)};return Object.assign(Object.assign({},b),{value:j,valueIsNumericString:!1,isValidInputCharacter:G,onValueChange:W,format:P,removeFormatting:g,getCaretBoundary:function(K){return JL(K,e)},onKeyDown:M,onBlur:H})}function eA(e){var t=XL(e);return $.createElement(wS,Object.assign({},t))}function tA(e,t){var n=t.format,r=t.allowEmptyFormatting,o=t.mask,a=t.patternChar;if(a===void 0&&(a="#"),e===""&&!r)return"";for(var s=0,u=n.split(""),c=0,f=n.length;c<f;c++)n[c]===a&&(u[c]=e[s]||bS(o,s),s+=1);return u.join("")}function nA(e,t,n){t===void 0&&(t=yS(e));var r=n.format,o=n.patternChar;o===void 0&&(o="#");var a=t.from,s=t.to,u=t.lastValue;u===void 0&&(u="");var c=function(P){return r[P]===o},f=function(P,g){for(var x="",S=0;S<P.length;S++)c(g+S)&&vi(P[S])&&(x+=P[S]);return x},p=function(P){return P.replace(/[^0-9]/g,"")};if(!r.match(/\d/))return p(e);if(u===""&&e.length===r.length){for(var h="",_=0;_<e.length;_++)if(c(_))vi(e[_])&&(h+=e[_]);else if(e[_]!==r[_])return p(e);return h}var v=u.substring(0,a.start),y=e.substring(s.start,s.end),b=u.substring(a.end);return""+f(v,0)+p(y)+f(b,a.end)}function rA(e,t){var n=t.format,r=t.mask,o=t.patternChar;o===void 0&&(o="#");var a=Array.from({length:e.length+1}).map(function(){return!0}),s=0,u=-1,c={};n.split("").forEach(function(_,v){var y=void 0;_===o&&(s++,y=bS(r,s-1),u===-1&&e[v]===y&&(u=v)),c[v]=y});for(var f=function(_){return n[_]===o&&e[_]!==c[_]},p=0,h=a.length;p<h;p++)a[p]=p===u||f(p)||f(p-1);return a[n.indexOf(o)]=!0,a}function oA(e){var t=e.mask;if(t){var n=t==="string"?t:t.toString();if(n.match(/\d/g))throw new Error("Mask "+t+" should not contain numeric character;")}}function iA(e,t){return e===""?!0:!t?.match(/\d/)&&typeof e=="string"&&(!!e.match(/^\d+$/)||e==="")}function aA(e){e.mask,e.allowEmptyFormatting;var t=e.format,n=e.inputMode;n===void 0&&(n="numeric");var r=e.onKeyDown;r===void 0&&(r=Or);var o=e.patternChar;o===void 0&&(o="#");var a=e.value,s=e.defaultValue,u=e.valueIsNumericString,c=L_(e,["mask","allowEmptyFormatting","format","inputMode","onKeyDown","patternChar","value","defaultValue","valueIsNumericString"]);oA(e);var f=function(y){return rA(y,e)},p=function(y){var b=y.key,P=y.target,g=P.selectionStart,x=P.selectionEnd,S=P.value;if(g!==x){r(y);return}var E=g;if(b==="Backspace"||b==="Delete"){var R="right";if(b==="Backspace"){for(;E>0&&t[E-1]!==o;)E--;R="left"}else{for(var T=t.length;E<T&&t[E]!==o;)E++;R="right"}E=Pc(S,E,f(S),R)}else t[E]!==o&&b!=="ArrowLeft"&&b!=="ArrowRight"&&(E=Pc(S,E+1,f(S),"right"));E!==g&&eo(P,E),r(y)},h=fi(a)?s:a,_=u??iA(h,t),v=Object.assign(Object.assign({},e),{valueIsNumericString:_});return Object.assign(Object.assign({},c),{value:a,defaultValue:s,valueIsNumericString:_,inputMode:n,format:function(y){return tA(y,v)},removeFormatting:function(y,b){return nA(y,b,v)},getCaretBoundary:f,onKeyDown:p})}function sA(e){var t=aA(e);return $.createElement(wS,Object.assign({},t))}function ft(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}var nh,SS={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/nh=SS,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var a=typeof o;if(a==="string"||a==="number")n.push(o);else if(Array.isArray(o)){if(o.length){var s=t.apply(null,o);s&&n.push(s)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){n.push(o.toString());continue}for(var u in o)e.call(o,u)&&o[u]&&n.push(u)}}}return n.join(" ")}nh.exports?(t.default=t,nh.exports=t):window.classNames=t}();var qe=SS.exports;const Xp=e=>{var{svgIconComponent:t}=e,n=ft(e,["svgIconComponent"]);return k.isValidElement(t)?k.cloneElement(t,Object.assign({},n)):null};function Ie(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}Xp.displayName="SvgIcon";var wr={button:"Button-module_button__2ZuB7 utility-module_focusable__1fBKr",icon:"Button-module_icon__-43u5",small:"Button-module_small__l39oh",medium:"Button-module_medium__KTxdk",large:"Button-module_large__6bsb7",fullWidth:"Button-module_fullWidth__36oJT",dashedBorder:"Button-module_dashedBorder__500FL",outline:"Button-module_outline__F5jq-",quiet:"Button-module_quiet__1KlhF",onlyIcon:"Button-module_onlyIcon__lENu3",filled:"Button-module_filled__inpPb",primary:"Button-module_primary__s1sM6",secondary:"Button-module_secondary__R0waJ",success:"Button-module_success__w6qB6",danger:"Button-module_danger__V4fX8",inverted:"Button-module_inverted__VD6YO"};Ie(`/**
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
`);const Tu=k.forwardRef((e,t)=>{var{children:n,color:r="primary",variant:o="filled",size:a="small",fullWidth:s=!1,dashedBorder:u=!1,iconPlacement:c="left",icon:f,type:p="button",className:h}=e,_=ft(e,["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"]);return $.createElement("button",Object.assign({},_,{ref:t,className:qe(wr.button,wr[a],wr[o],wr[r],{[wr.fullWidth]:s},{[wr.dashedBorder]:u},{[wr.onlyIcon]:!n&&f},h),type:p}),f&&c==="left"&&$.createElement(Xp,{svgIconComponent:f,className:wr.icon}),n,f&&c==="right"&&$.createElement(Xp,{svgIconComponent:f,className:wr.icon}))});function Cc(e,t,n){k.useEffect(()=>{const r=n??document.body;return r.addEventListener(e,t),()=>r.removeEventListener(e,t)},[e,t,n])}function rh(e,t,n){k.useEffect(()=>{if(!n)return;const r=o=>{o.key===e&&t()};return n.addEventListener("keydown",r),()=>n.removeEventListener("keydown",r)},[e,t,n])}function Ec(e){const t=k.useRef();return k.useEffect(()=>{t.current=e},[e]),t.current}Tu.displayName="Button";const el=(e,t)=>{const n=k.useRef(!0);k.useEffect(()=>{if(!n.current)return e();n.current=!1},t)};function kS(e,t){if(e===t)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(const[n]of e.entries())if(e[n]!==t[n])return!1;return!0}function PS(e){return e.length===new Set(e).size}var lA="Tabs-module_tabs__QzIkz",uA="Tabs-module_tablist__WR6ag",cA="Tabs-module_tab__IdDYc",dA="Tabs-module_selected__TxfYv",fA="Tabs-module_divider__-r5Cd",hA="Tabs-module_tabpanel__0vR1c";Ie(`@import url('https://altinncdn.no/fonts/altinn-din/altinn-din.css');

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
`);const Pb=e=>e.replace(/\s/,"_"),CS=({activeTab:e,items:t,onChange:n})=>{const r=k.useId(),o=t.map(({name:b,content:P,value:g,tabId:x,panelId:S})=>{const E=g??b;return{name:b,content:P,value:E,tabId:x??r+Pb(E)+"-tab",panelId:S??r+Pb(E)+"-panel"}});if(!PS(o.map(({value:b})=>b)))throw Error("Each tab value must be unique.");if(e!==void 0&&!o.some(b=>b.value===e))throw Error("The given active tab value must exist in the list of items.");const a=b=>o.findIndex(P=>P.value===b),s=e??o[0].value,[u,c]=k.useState(s),[f,p]=k.useState(a(s));k.useEffect(()=>c(s),[s]);const h=k.useRef(null),_=o.length-1;el(()=>{var b;(b=h.current)===null||b===void 0||b.querySelectorAll('[role="tab"]')[f].focus()},[f]);const v=b=>{u!==b&&n&&n(b),c(b),p(a(b))},y=b=>P=>{switch(P.key){case"ArrowRight":f!==void 0&&p(f===_?0:f+1);break;case"ArrowLeft":f!==void 0&&p(f===0?_:f-1);break;case"Space":v(b)}};return $.createElement("div",{className:lA},$.createElement("div",{className:uA,ref:h,role:"tablist"},o.map((b,P)=>{const g=b.value===u;return $.createElement("button",{"aria-controls":b.panelId,"aria-selected":g,className:qe(cA,g&&dA),id:b.tabId,key:b.value,onClick:()=>v(b.value),onKeyDown:y(b.value),role:"tab",tabIndex:f===P?0:-1},b.name)})),$.createElement("hr",{className:fA}),o.map(b=>$.createElement("div",{className:hA,"aria-labelledby":b.tabId,hidden:b.value!==u,id:b.panelId,key:b.panelId,role:"tabpanel"},b.content)))};CS.displayName="Tabs";var qr={fieldSet:"FieldSet-module_fieldSet__GgktD",small:"FieldSet-module_small__eNG6Q",xsmall:"FieldSet-module_xsmall__y9foq",legendAndHelpText:"FieldSet-module_legendAndHelpText__WDZ-j",legend:"FieldSet-module_legend__PjhoV",legendContent:"FieldSet-module_legendContent__nOeHK",description:"FieldSet-module_description__XKHS-",content:"FieldSet-module_content__aZp-0",errorMessage:"FieldSet-module_errorMessage__nDaJ7"};Ie(`.FieldSet-module_fieldSet__GgktD {
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
`);const ES=e=>{var{children:t,className:n,contentClassName:r,description:o,error:a,helpText:s,legend:u,size:c="small"}=e,f=ft(e,["children","className","contentClassName","description","error","helpText","legend","size"]);return $.createElement("fieldset",Object.assign({},f,{className:qe(qr.fieldSet,qr[c],n)}),u&&$.createElement("legend",{className:qr.legend},$.createElement("span",{className:qr.legendAndHelpText},$.createElement("span",{className:qr.legendContent},u),s&&$.createElement($_,{size:c,title:typeof u=="string"?`Help text for ${u}`:""},s))),o&&$.createElement("p",{className:qr.description},o),$.createElement("div",{className:qe(qr.content,r)},t),a&&$.createElement("div",{className:qr.errorMessage},$.createElement(BI,{role:"alertdialog"},a)))};function Oa(e){return e.split("-")[1]}function I_(e){return e==="y"?"height":"width"}function _o(e){return e.split("-")[0]}function Ma(e){return["top","bottom"].includes(_o(e))?"x":"y"}function Cb(e,t,n){let{reference:r,floating:o}=e;const a=r.x+r.width/2-o.width/2,s=r.y+r.height/2-o.height/2,u=Ma(t),c=I_(u),f=r[c]/2-o[c]/2,p=u==="x";let h;switch(_o(t)){case"top":h={x:a,y:r.y-o.height};break;case"bottom":h={x:a,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:s};break;case"left":h={x:r.x-o.width,y:s};break;default:h={x:r.x,y:r.y}}switch(Oa(t)){case"start":h[u]-=f*(n&&p?-1:1);break;case"end":h[u]+=f*(n&&p?-1:1)}return h}ES.displayName="FieldSet";function OS(e){return typeof e!="number"?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(e):{top:e,right:e,bottom:e,left:e}}function Oc(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function z_(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:a,rects:s,elements:u,strategy:c}=e,{boundary:f="clippingAncestors",rootBoundary:p="viewport",elementContext:h="floating",altBoundary:_=!1,padding:v=0}=t,y=OS(v),b=u[_?h==="floating"?"reference":"floating":h],P=Oc(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(b)))==null||n?b:b.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(u.floating)),boundary:f,rootBoundary:p,strategy:c})),g=h==="floating"?{...s.floating,x:r,y:o}:s.reference,x=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u.floating)),S=await(a.isElement==null?void 0:a.isElement(x))&&await(a.getScale==null?void 0:a.getScale(x))||{x:1,y:1},E=Oc(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:g,offsetParent:x,strategy:c}):g);return{top:(P.top-E.top+y.top)/S.y,bottom:(E.bottom-P.bottom+y.bottom)/S.y,left:(P.left-E.left+y.left)/S.x,right:(E.right-P.right+y.right)/S.x}}const em=Math.min,Xo=Math.max;function tm(e,t,n){return Xo(e,em(t,n))}const Eb=e=>({name:"arrow",options:e,async fn(t){const{element:n,padding:r=0}=e||{},{x:o,y:a,placement:s,rects:u,platform:c,elements:f}=t;if(n==null)return{};const p=OS(r),h={x:o,y:a},_=Ma(s),v=I_(_),y=await c.getDimensions(n),b=_==="y",P=b?"top":"left",g=b?"bottom":"right",x=b?"clientHeight":"clientWidth",S=u.reference[v]+u.reference[_]-h[_]-u.floating[v],E=h[_]-u.reference[_],R=await(c.getOffsetParent==null?void 0:c.getOffsetParent(n));let T=R?R[x]:0;T&&await(c.isElement==null?void 0:c.isElement(R))||(T=f.floating[x]||u.floating[v]);const N=S/2-E/2,j=p[P],W=T-y[v]-p[g],M=T/2-y[v]/2+N,H=tm(j,M,W),G=Oa(s)!=null&&M!=H&&u.reference[v]/2-(M<j?p[P]:p[g])-y[v]/2<0;return{[_]:h[_]-(G?M<j?j-M:W-M:0),data:{[_]:H,centerOffset:M-H}}}}),pA={left:"right",right:"left",bottom:"top",top:"bottom"};function uu(e){return e.replace(/left|right|bottom|top/g,t=>pA[t])}const mA={start:"end",end:"start"};function oh(e){return e.replace(/start|end/g,t=>mA[t])}const RS=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:r,middlewareData:o,rects:a,initialPlacement:s,platform:u,elements:c}=t,{mainAxis:f=!0,crossAxis:p=!0,fallbackPlacements:h,fallbackStrategy:_="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:y=!0,...b}=e,P=_o(r),g=_o(s)===s,x=await(u.isRTL==null?void 0:u.isRTL(c.floating)),S=h||(g||!y?[uu(s)]:function(H){const G=uu(H);return[oh(H),G,oh(G)]}(s));h||v==="none"||S.push(...function(H,G,K,U){const re=Oa(H);let q=function(se,B,Y){const A=["left","right"],O=["right","left"],z=["top","bottom"],D=["bottom","top"];switch(se){case"top":case"bottom":return Y?B?O:A:B?A:O;case"left":case"right":return B?z:D;default:return[]}}(_o(H),K==="start",U);return re&&(q=q.map(se=>se+"-"+re),G&&(q=q.concat(q.map(oh)))),q}(s,y,v,x));const E=[s,...S],R=await z_(t,b),T=[];let N=((n=o.flip)==null?void 0:n.overflows)||[];if(f&&T.push(R[P]),p){const{main:H,cross:G}=function(K,U,re){re===void 0&&(re=!1);const q=Oa(K),se=Ma(K),B=I_(se);let Y=se==="x"?q===(re?"end":"start")?"right":"left":q==="start"?"bottom":"top";return U.reference[B]>U.floating[B]&&(Y=uu(Y)),{main:Y,cross:uu(Y)}}(r,a,x);T.push(R[H],R[G])}if(N=[...N,{placement:r,overflows:T}],!T.every(H=>H<=0)){var j,W;const H=(((j=o.flip)==null?void 0:j.index)||0)+1,G=E[H];if(G)return{data:{index:H,overflows:N},reset:{placement:G}};let K=(W=N.filter(U=>U.overflows[0]<=0).sort((U,re)=>U.overflows[1]-re.overflows[1])[0])==null?void 0:W.placement;if(!K)switch(_){case"bestFit":{var M;const U=(M=N.map(re=>[re.placement,re.overflows.filter(q=>q>0).reduce((q,se)=>q+se,0)]).sort((re,q)=>re[1]-q[1])[0])==null?void 0:M[0];U&&(K=U);break}case"initialPlacement":K=s}if(r!==K)return{reset:{placement:K}}}return{}}}},_A=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,o=await async function(a,s){const{placement:u,platform:c,elements:f}=a,p=await(c.isRTL==null?void 0:c.isRTL(f.floating)),h=_o(u),_=Oa(u),v=Ma(u)==="x",y=["left","top"].includes(h)?-1:1,b=p&&v?-1:1,P=typeof s=="function"?s(a):s;let{mainAxis:g,crossAxis:x,alignmentAxis:S}=typeof P=="number"?{mainAxis:P,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...P};return _&&typeof S=="number"&&(x=_==="end"?-1*S:S),v?{x:x*b,y:g*y}:{x:g*y,y:x*b}}(t,e);return{x:n+o.x,y:r+o.y,data:o}}}},gA=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:a}=t,{apply:s=()=>{},...u}=e,c=await z_(t,u),f=_o(n),p=Oa(n),h=Ma(n)==="x",{width:_,height:v}=r.floating;let y,b;f==="top"||f==="bottom"?(y=f,b=p===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(b=f,y=p==="end"?"top":"bottom");const P=v-c[y],g=_-c[b],x=!t.middlewareData.shift;let S=P,E=g;if(h){const T=_-c.left-c.right;E=p||x?em(g,T):T}else{const T=v-c.top-c.bottom;S=p||x?em(P,T):T}if(x&&!p){const T=Xo(c.left,0),N=Xo(c.right,0),j=Xo(c.top,0),W=Xo(c.bottom,0);h?E=_-2*(T!==0||N!==0?T+N:Xo(c.left,c.right)):S=v-2*(j!==0||W!==0?j+W:Xo(c.top,c.bottom))}await s({...t,availableWidth:E,availableHeight:S});const R=await o.getDimensions(a.floating);return _!==R.width||v!==R.height?{reset:{rects:!0}}:{}}}};function rn(e){var t;return((t=e.ownerDocument)==null?void 0:t.defaultView)||window}function $n(e){return rn(e).getComputedStyle(e)}function TS(e){return e instanceof rn(e).Node}function Ro(e){return TS(e)?(e.nodeName||"").toLowerCase():""}let cu;function LS(){if(cu)return cu;const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?(cu=e.brands.map(t=>t.brand+"/"+t.version).join(" "),cu):navigator.userAgent}function Hn(e){return e instanceof rn(e).HTMLElement}function on(e){return e instanceof rn(e).Element}function Ob(e){return typeof ShadowRoot>"u"?!1:e instanceof rn(e).ShadowRoot||e instanceof ShadowRoot}function tl(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=$n(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function vA(e){return["table","td","th"].includes(Ro(e))}function nm(e){const t=/firefox/i.test(LS()),n=$n(e),r=n.backdropFilter||n.WebkitBackdropFilter;return n.transform!=="none"||n.perspective!=="none"||!!r&&r!=="none"||t&&n.willChange==="filter"||t&&!!n.filter&&n.filter!=="none"||["transform","perspective"].some(o=>n.willChange.includes(o))||["paint","layout","strict","content"].some(o=>{const a=n.contain;return a!=null&&a.includes(o)})}function rm(){return/^((?!chrome|android).)*safari/i.test(LS())}function Md(e){return["html","body","#document"].includes(Ro(e))}const Rb=Math.min,Ls=Math.max,Rc=Math.round;function AS(e){const t=$n(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Hn(e),a=o?e.offsetWidth:n,s=o?e.offsetHeight:r,u=Rc(n)!==a||Rc(r)!==s;return u&&(n=a,r=s),{width:n,height:r,fallback:u}}function IS(e){return on(e)?e:e.contextElement}const zS={x:1,y:1};function ma(e){const t=IS(e);if(!Hn(t))return zS;const n=t.getBoundingClientRect(),{width:r,height:o,fallback:a}=AS(t);let s=(a?Rc(n.width):n.width)/r,u=(a?Rc(n.height):n.height)/o;return s&&Number.isFinite(s)||(s=1),u&&Number.isFinite(u)||(u=1),{x:s,y:u}}function yi(e,t,n,r){var o,a;t===void 0&&(t=!1),n===void 0&&(n=!1);const s=e.getBoundingClientRect(),u=IS(e);let c=zS;t&&(r?on(r)&&(c=ma(r)):c=ma(e));const f=u?rn(u):window,p=rm()&&n;let h=(s.left+(p&&((o=f.visualViewport)==null?void 0:o.offsetLeft)||0))/c.x,_=(s.top+(p&&((a=f.visualViewport)==null?void 0:a.offsetTop)||0))/c.y,v=s.width/c.x,y=s.height/c.y;if(u){const b=rn(u),P=r&&on(r)?rn(r):r;let g=b.frameElement;for(;g&&r&&P!==b;){const x=ma(g),S=g.getBoundingClientRect(),E=getComputedStyle(g);S.x+=(g.clientLeft+parseFloat(E.paddingLeft))*x.x,S.y+=(g.clientTop+parseFloat(E.paddingTop))*x.y,h*=x.x,_*=x.y,v*=x.x,y*=x.y,h+=S.x,_+=S.y,g=rn(g).frameElement}}return Oc({width:v,height:y,x:h,y:_})}function go(e){return((TS(e)?e.ownerDocument:e.document)||window.document).documentElement}function Dd(e){return on(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function NS(e){return yi(go(e)).left+Dd(e).scrollLeft}function Ra(e){if(Ro(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ob(e)&&e.host||go(e);return Ob(t)?t.host:t}function BS(e){const t=Ra(e);return Md(t)?t.ownerDocument.body:Hn(t)&&tl(t)?t:BS(t)}function vo(e,t){var n;t===void 0&&(t=[]);const r=BS(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),a=rn(r);return o?t.concat(a,a.visualViewport||[],tl(r)?r:[]):t.concat(r,vo(r))}function Tb(e,t,n){let r;if(t==="viewport")r=function(s,u){const c=rn(s),f=go(s),p=c.visualViewport;let h=f.clientWidth,_=f.clientHeight,v=0,y=0;if(p){h=p.width,_=p.height;const b=rm();(!b||b&&u==="fixed")&&(v=p.offsetLeft,y=p.offsetTop)}return{width:h,height:_,x:v,y}}(e,n);else if(t==="document")r=function(s){const u=go(s),c=Dd(s),f=s.ownerDocument.body,p=Ls(u.scrollWidth,u.clientWidth,f.scrollWidth,f.clientWidth),h=Ls(u.scrollHeight,u.clientHeight,f.scrollHeight,f.clientHeight);let _=-c.scrollLeft+NS(s);const v=-c.scrollTop;return $n(f).direction==="rtl"&&(_+=Ls(u.clientWidth,f.clientWidth)-p),{width:p,height:h,x:_,y:v}}(go(e));else if(on(t))r=function(s,u){const c=yi(s,!0,u==="fixed"),f=c.top+s.clientTop,p=c.left+s.clientLeft,h=Hn(s)?ma(s):{x:1,y:1};return{width:s.clientWidth*h.x,height:s.clientHeight*h.y,x:p*h.x,y:f*h.y}}(t,n);else{const s={...t};if(rm()){var o,a;const u=rn(e);s.x-=((o=u.visualViewport)==null?void 0:o.offsetLeft)||0,s.y-=((a=u.visualViewport)==null?void 0:a.offsetTop)||0}r=s}return Oc(r)}function MS(e,t){const n=Ra(e);return!(n===t||!on(n)||Md(n))&&($n(n).position==="fixed"||MS(n,t))}function Lb(e,t){return Hn(e)&&$n(e).position!=="fixed"?t?t(e):e.offsetParent:null}function Ab(e,t){const n=rn(e);if(!Hn(e))return n;let r=Lb(e,t);for(;r&&vA(r)&&$n(r).position==="static";)r=Lb(r,t);return r&&(Ro(r)==="html"||Ro(r)==="body"&&$n(r).position==="static"&&!nm(r))?n:r||function(o){let a=Ra(o);for(;Hn(a)&&!Md(a);){if(nm(a))return a;a=Ra(a)}return null}(e)||n}function yA(e,t,n){const r=Hn(t),o=go(t),a=yi(e,!0,n==="fixed",t);let s={scrollLeft:0,scrollTop:0};const u={x:0,y:0};if(r||!r&&n!=="fixed")if((Ro(t)!=="body"||tl(o))&&(s=Dd(t)),Hn(t)){const c=yi(t,!0);u.x=c.x+t.clientLeft,u.y=c.y+t.clientTop}else o&&(u.x=NS(o));return{x:a.left+s.scrollLeft-u.x,y:a.top+s.scrollTop-u.y,width:a.width,height:a.height}}const bA={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const a=[...n==="clippingAncestors"?function(c,f){const p=f.get(c);if(p)return p;let h=vo(c).filter(b=>on(b)&&Ro(b)!=="body"),_=null;const v=$n(c).position==="fixed";let y=v?Ra(c):c;for(;on(y)&&!Md(y);){const b=$n(y),P=nm(y);P||b.position!=="fixed"||(_=null),(v?!P&&!_:!P&&b.position==="static"&&_&&["absolute","fixed"].includes(_.position)||tl(y)&&!P&&MS(c,y))?h=h.filter(g=>g!==y):_=b,y=Ra(y)}return f.set(c,h),h}(t,this._c):[].concat(n),r],s=a[0],u=a.reduce((c,f)=>{const p=Tb(t,f,o);return c.top=Ls(p.top,c.top),c.right=Rb(p.right,c.right),c.bottom=Rb(p.bottom,c.bottom),c.left=Ls(p.left,c.left),c},Tb(t,s,o));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=Hn(n),a=go(n);if(n===a)return t;let s={scrollLeft:0,scrollTop:0},u={x:1,y:1};const c={x:0,y:0};if((o||!o&&r!=="fixed")&&((Ro(n)!=="body"||tl(a))&&(s=Dd(n)),Hn(n))){const f=yi(n);u=ma(n),c.x=f.x+n.clientLeft,c.y=f.y+n.clientTop}return{width:t.width*u.x,height:t.height*u.y,x:t.x*u.x-s.scrollLeft*u.x+c.x,y:t.y*u.y-s.scrollTop*u.y+c.y}},isElement:on,getDimensions:function(e){return AS(e)},getOffsetParent:Ab,getDocumentElement:go,getScale:ma,async getElementRects(e){let{reference:t,floating:n,strategy:r}=e;const o=this.getOffsetParent||Ab,a=this.getDimensions;return{reference:yA(t,await o(n),r),floating:{x:0,y:0,...await a(n)}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>$n(e).direction==="rtl"};function DS(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:a=!0,elementResize:s=!0,animationFrame:u=!1}=r,c=o||a?[...on(e)?vo(e):e.contextElement?vo(e.contextElement):[],...vo(t)]:[];c.forEach(_=>{const v=!on(_)&&_.toString().includes("V");!o||u&&!v||_.addEventListener("scroll",n,{passive:!0}),a&&_.addEventListener("resize",n)});let f,p=null;s&&(p=new ResizeObserver(()=>{n()}),on(e)&&!u&&p.observe(e),on(e)||!e.contextElement||u||p.observe(e.contextElement),p.observe(t));let h=u?yi(e):null;return u&&function _(){const v=yi(e);!h||v.x===h.x&&v.y===h.y&&v.width===h.width&&v.height===h.height||n(),h=v,f=requestAnimationFrame(_)}(),n(),()=>{var _;c.forEach(v=>{o&&v.removeEventListener("scroll",n),a&&v.removeEventListener("resize",n)}),(_=p)==null||_.disconnect(),p=null,u&&cancelAnimationFrame(f)}}const xA=(e,t,n)=>{const r=new Map,o={platform:bA,...n},a={...o.platform,_c:r};return(async(s,u,c)=>{const{placement:f="bottom",strategy:p="absolute",middleware:h=[],platform:_}=c,v=h.filter(Boolean),y=await(_.isRTL==null?void 0:_.isRTL(u));let b=await _.getElementRects({reference:s,floating:u,strategy:p}),{x:P,y:g}=Cb(b,f,y),x=f,S={},E=0;for(let R=0;R<v.length;R++){const{name:T,fn:N}=v[R],{x:j,y:W,data:M,reset:H}=await N({x:P,y:g,initialPlacement:f,placement:x,strategy:p,middlewareData:S,rects:b,platform:_,elements:{reference:s,floating:u}});P=j??P,g=W??g,S={...S,[T]:{...S[T],...M}},H&&E<=50&&(E++,typeof H=="object"&&(H.placement&&(x=H.placement),H.rects&&(b=H.rects===!0?await _.getElementRects({reference:s,floating:u,strategy:p}):H.rects),{x:P,y:g}=Cb(b,x,y)),R=-1)}return{x:P,y:g,placement:x,strategy:p,middlewareData:S}})(e,t,{...o,platform:a})},wA=e=>{const{element:t,padding:n}=e;return{name:"arrow",options:e,fn(r){return t&&(o=t,{}.hasOwnProperty.call(o,"current"))?t.current!=null?Eb({element:t.current,padding:n}).fn(r):{}:t?Eb({element:t,padding:n}).fn(r):{};var o}}};var Lu=typeof document<"u"?k.useLayoutEffect:k.useEffect;function Tc(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!=0;)if(!Tc(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!=0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!=0;){const a=o[r];if((a!=="_owner"||!e.$$typeof)&&!Tc(e[a],t[a]))return!1}return!0}return e!=e&&t!=t}function jS(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ib(e,t){const n=jS(e);return Math.round(t*n)/n}function zb(e){const t=k.useRef(e);return Lu(()=>{t.current=e}),t}/*!
* tabbable 6.1.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var om=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),FS=typeof Element>"u",nl=FS?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Au=!FS&&Element.prototype.getRootNode?function(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}:function(e){return e?.ownerDocument},Lc=function e(t,n){var r;n===void 0&&(n=!0);var o=t==null||(r=t.getAttribute)===null||r===void 0?void 0:r.call(t,"inert");return o===""||o==="true"||n&&t&&e(t.parentNode)},SA=function e(t,n,r){for(var o=[],a=Array.from(t);a.length;){var s=a.shift();if(!Lc(s,!1))if(s.tagName==="SLOT"){var u=s.assignedElements(),c=e(u.length?u:s.children,!0,r);r.flatten?o.push.apply(o,c):o.push({scopeParent:s,candidates:c})}else{nl.call(s,om)&&r.filter(s)&&(n||!t.includes(s))&&o.push(s);var f=s.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(s),p=!Lc(f,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(s));if(f&&p){var h=e(f===!0?s.children:f.children,!0,r);r.flatten?o.push.apply(o,h):o.push({scopeParent:s,candidates:h})}else a.unshift.apply(a,s.children)}}return o},$S=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(n){var r,o=n==null||(r=n.getAttribute)===null||r===void 0?void 0:r.call(n,"contenteditable");return o===""||o==="true"}(e))&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},kA=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},US=function(e){return e.tagName==="INPUT"},PA=function(e){return function(t){return US(t)&&t.type==="radio"}(e)&&!function(t){if(!t.name)return!0;var n,r=t.form||Au(t),o=function(s){return r.querySelectorAll('input[type="radio"][name="'+s+'"]')};if(typeof window<"u"&&window.CSS!==void 0&&typeof window.CSS.escape=="function")n=o(window.CSS.escape(t.name));else try{n=o(t.name)}catch(s){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",s.message),!1}var a=function(s,u){for(var c=0;c<s.length;c++)if(s[c].checked&&s[c].form===u)return s[c]}(n,t.form);return!a||a===t}(e)},Nb=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return n===0&&r===0},CA=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var o=nl.call(e,"details>summary:first-of-type")?e.parentElement:e;if(nl.call(o,"details:not([open]) *"))return!0;if(n&&n!=="full"&&n!=="legacy-full"){if(n==="non-zero-area")return Nb(e)}else{if(typeof r=="function"){for(var a=e;e;){var s=e.parentElement,u=Au(e);if(s&&!s.shadowRoot&&r(s)===!0)return Nb(e);e=e.assignedSlot?e.assignedSlot:s||u===e.ownerDocument?s:u.host}e=a}if(function(c){var f,p,h,_,v=c&&Au(c),y=(f=v)===null||f===void 0?void 0:f.host,b=!1;if(v&&v!==c)for(b=!!((p=y)!==null&&p!==void 0&&(h=p.ownerDocument)!==null&&h!==void 0&&h.contains(y)||c!=null&&(_=c.ownerDocument)!==null&&_!==void 0&&_.contains(c));!b&&y;){var P,g,x;b=!((g=y=(P=v=Au(y))===null||P===void 0?void 0:P.host)===null||g===void 0||(x=g.ownerDocument)===null||x===void 0||!x.contains(y))}return b}(e))return!e.getClientRects().length;if(n!=="legacy-full")return!0}return!1},EA=function(e,t){return!(t.disabled||Lc(t)||function(n){return US(n)&&n.type==="hidden"}(t)||CA(t,e)||function(n){return n.tagName==="DETAILS"&&Array.prototype.slice.apply(n.children).some(function(r){return r.tagName==="SUMMARY"})}(t)||function(n){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(n.tagName))for(var r=n.parentElement;r;){if(r.tagName==="FIELDSET"&&r.disabled){for(var o=0;o<r.children.length;o++){var a=r.children.item(o);if(a.tagName==="LEGEND")return!!nl.call(r,"fieldset[disabled] *")||!a.contains(n)}return!0}r=r.parentElement}return!1}(t))},Bb=function(e,t){return!(PA(t)||$S(t)<0||!EA(e,t))},OA=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},RA=function e(t){var n=[],r=[];return t.forEach(function(o,a){var s=!!o.scopeParent,u=s?o.scopeParent:o,c=$S(u,s),f=s?e(o.candidates):u;c===0?s?n.push.apply(n,f):n.push(u):r.push({documentOrder:a,tabIndex:c,item:o,isScope:s,content:f})}),r.sort(kA).reduce(function(o,a){return a.isScope?o.push.apply(o,a.content):o.push(a.content),o},[]).concat(n)},WS=function(e,t){var n;return n=(t=t||{}).getShadowRoot?SA([e],t.includeContainer,{filter:Bb.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:OA}):function(r,o,a){if(Lc(r))return[];var s=Array.prototype.slice.apply(r.querySelectorAll(om));return o&&nl.call(r,om)&&s.unshift(r),s.filter(a)}(e,t.includeContainer,Bb.bind(null,t)),RA(n)};function im(){return im=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},im.apply(this,arguments)}var rl=typeof document<"u"?k.useLayoutEffect:k.useEffect;let ih=!1,TA=0;const Mb=()=>"floating-ui-"+TA++,N_=Zc["useId".toString()]||function(){const[e,t]=k.useState(()=>ih?Mb():void 0);return rl(()=>{e==null&&t(Mb())},[]),k.useEffect(()=>{ih||(ih=!0)},[]),e},LA=k.createContext(null),AA=k.createContext(null),HS=()=>k.useContext(AA);function B_(e){return e?.ownerDocument||document}function jd(e){return B_(e).defaultView||window}function si(e){return!!e&&e instanceof jd(e).Element}function M_(e){return!!e&&e instanceof jd(e).HTMLElement}function IA(e){if(e.mozInputSource===0&&e.isTrusted)return!0;const t=/Android/i;return(t.test(function(){const n=navigator.userAgentData;return n!=null&&n.platform?n.platform:navigator.platform}())||t.test(function(){const n=navigator.userAgentData;return n&&Array.isArray(n.brands)?n.brands.map(r=>{let{brand:o,version:a}=r;return o+"/"+a}).join(" "):navigator.userAgent}()))&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function zA(e){return e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType!=="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0}function Db(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function NA(e,t){if(!e||!t)return!1;const n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&(r=n,typeof ShadowRoot<"u"&&(r instanceof jd(r).ShadowRoot||r instanceof ShadowRoot))){let o=t;for(;o;){if(e===o)return!0;o=o.parentNode||o.host}}var r;return!1}function ah(e,t){let n=e.filter(o=>{var a;return o.parentId===t&&((a=o.context)==null?void 0:a.open)}),r=n;for(;r.length;)r=e.filter(o=>{var a;return(a=r)==null?void 0:a.some(s=>{var u;return o.parentId===s.id&&((u=o.context)==null?void 0:u.open)})}),n=n.concat(r);return n}const VS=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function jb(e,t){const n=WS(e,VS());t==="prev"&&n.reverse();const r=n.indexOf(function(o){let a=o.activeElement;for(;((s=a)==null||(u=s.shadowRoot)==null?void 0:u.activeElement)!=null;){var s,u;a=a.shadowRoot.activeElement}return a}(B_(e)));return n.slice(r+1)[0]}function sh(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!NA(n,r)}function BA(e){WS(e,VS()).forEach(t=>{t.dataset.tabindex=t.getAttribute("tabindex")||"",t.setAttribute("tabindex","-1")})}function MA(e){e.querySelectorAll("[data-tabindex]").forEach(t=>{const n=t.dataset.tabindex;delete t.dataset.tabindex,n?t.setAttribute("tabindex",n):t.removeAttribute("tabindex")})}const ZS={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function Fb(e){e.key==="Tab"&&(e.target,clearTimeout(void 0))}const $b=k.forwardRef(function(e,t){const[n,r]=k.useState();return rl(()=>(/apple/i.test(navigator.vendor)&&r("button"),document.addEventListener("keydown",Fb),()=>{document.removeEventListener("keydown",Fb)}),[]),k.createElement("span",im({},e,{ref:t,tabIndex:0,role:n,"aria-hidden":!n||void 0,"data-floating-ui-focus-guard":"",style:ZS}))}),qS=k.createContext(null);function DA(e){let{children:t,id:n,root:r=null,preserveTabOrder:o=!0}=e;const a=function(v){let{id:y,root:b}=v===void 0?{}:v;const[P,g]=k.useState(null),x=N_(),S=jA(),E=k.useMemo(()=>({id:y,root:b,portalContext:S,uniqueId:x}),[y,b,S,x]),R=k.useRef();return rl(()=>()=>{P?.remove()},[P,E]),rl(()=>{if(R.current===E)return;R.current=E;const{id:T,root:N,portalContext:j,uniqueId:W}=E,M=T?document.getElementById(T):null,H="data-floating-ui-portal";if(M){const G=document.createElement("div");G.id=W,G.setAttribute(H,""),M.appendChild(G),g(G)}else{let G=j?.portalNode||N||document.body,K=null;T&&(K=document.createElement("div"),K.id=T,G.appendChild(K));const U=document.createElement("div");U.id=W,U.setAttribute(H,""),G=K||G,G.appendChild(U),g(U)}},[E]),P}({id:n,root:r}),[s,u]=k.useState(null),c=k.useRef(null),f=k.useRef(null),p=k.useRef(null),h=k.useRef(null),_=!!s&&!s.modal&&s.open&&o&&!(!r&&!a);return k.useEffect(()=>{if(a&&o&&(s==null||!s.modal))return a.addEventListener("focusin",v,!0),a.addEventListener("focusout",v,!0),()=>{a.removeEventListener("focusin",v,!0),a.removeEventListener("focusout",v,!0)};function v(y){a&&sh(y)&&(y.type==="focusin"?MA:BA)(a)}},[a,o,s?.modal]),k.createElement(qS.Provider,{value:k.useMemo(()=>({preserveTabOrder:o,beforeOutsideRef:c,afterOutsideRef:f,beforeInsideRef:p,afterInsideRef:h,portalNode:a,setFocusManagerState:u}),[o,a])},_&&a&&k.createElement($b,{"data-type":"outside",ref:c,onFocus:v=>{if(sh(v,a)){var y;(y=p.current)==null||y.focus()}else{const b=jb(document.body,"prev")||s?.refs.domReference.current;b?.focus()}}}),_&&a&&k.createElement("span",{"aria-owns":a.id,style:ZS}),a&&ko.createPortal(t,a),_&&a&&k.createElement($b,{"data-type":"outside",ref:f,onFocus:v=>{if(sh(v,a)){var y;(y=h.current)==null||y.focus()}else{const b=jb(document.body,"next")||s?.refs.domReference.current;b?.focus(),s?.closeOnFocusOut&&s?.onOpenChange(!1)}}}))}const jA=()=>k.useContext(qS);function Ub(e){return M_(e.target)&&e.target.tagName==="BUTTON"}function Wb(e){return function(t){return M_(t)&&t.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])")}(e)}const FA=Zc["useInsertionEffect".toString()]||(e=>e());function Iu(e){const t=k.useRef(()=>{});return FA(()=>{t.current=e}),k.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.current==null?void 0:t.current(...r)},[])}function lh(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}const $A={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},UA={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"};function WA(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,events:o,nodeId:a,elements:{reference:s,domReference:u,floating:c},dataRef:f}=e,{enabled:p=!0,escapeKey:h=!0,outsidePress:_=!0,outsidePressEvent:v="pointerdown",referencePress:y=!1,referencePressEvent:b="pointerdown",ancestorScroll:P=!1,bubbles:g}=t,x=HS(),S=(((E=k.useContext(LA))==null?void 0:E.id)||null)!=null;var E;const R=Iu(typeof _=="function"?_:()=>!1),T=typeof _=="function"?R:_,N=k.useRef(!1),{escapeKeyBubbles:j,outsidePressBubbles:W}=(G=>{var K,U;return{escapeKeyBubbles:typeof G=="boolean"?G:(K=G?.escapeKey)!=null&&K,outsidePressBubbles:typeof G=="boolean"?G:(U=G?.outsidePress)==null||U}})(g),M=Iu(G=>{if(!n||!p||!h||G.key!=="Escape")return;const K=x?ah(x.nodesRef.current,a):[];if(!j&&(G.stopPropagation(),K.length>0)){let U=!0;if(K.forEach(re=>{var q;(q=re.context)==null||!q.open||re.context.dataRef.current.__escapeKeyBubbles||(U=!1)}),!U)return}o.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),r(!1)}),H=Iu(G=>{const K=N.current;if(N.current=!1,K||typeof T=="function"&&!T(G))return;const U=function(se){return"composedPath"in se?se.composedPath()[0]:se.target}(G);if(M_(U)&&c){const se=U.clientWidth>0&&U.scrollWidth>U.clientWidth,B=U.clientHeight>0&&U.scrollHeight>U.clientHeight;let Y=B&&G.offsetX>U.clientWidth;if(B&&jd(c).getComputedStyle(U).direction==="rtl"&&(Y=G.offsetX<=U.offsetWidth-U.clientWidth),Y||se&&G.offsetY>U.clientHeight)return}const re=x&&ah(x.nodesRef.current,a).some(se=>{var B;return lh(G,(B=se.context)==null?void 0:B.elements.floating)});if(lh(G,c)||lh(G,u)||re)return;const q=x?ah(x.nodesRef.current,a):[];if(q.length>0){let se=!0;if(q.forEach(B=>{var Y;(Y=B.context)==null||!Y.open||B.context.dataRef.current.__outsidePressBubbles||(se=!1)}),!se)return}o.emit("dismiss",{type:"outsidePress",data:{returnFocus:S?{preventScroll:!0}:IA(G)||zA(G)}}),r(!1)});return k.useEffect(()=>{if(!n||!p)return;function G(){r(!1)}f.current.__escapeKeyBubbles=j,f.current.__outsidePressBubbles=W;const K=B_(c);h&&K.addEventListener("keydown",M),T&&K.addEventListener(v,H);let U=[];return P&&(si(u)&&(U=vo(u)),si(c)&&(U=U.concat(vo(c))),!si(s)&&s&&s.contextElement&&(U=U.concat(vo(s.contextElement)))),U=U.filter(re=>{var q;return re!==((q=K.defaultView)==null?void 0:q.visualViewport)}),U.forEach(re=>{re.addEventListener("scroll",G,{passive:!0})}),()=>{h&&K.removeEventListener("keydown",M),T&&K.removeEventListener(v,H),U.forEach(re=>{re.removeEventListener("scroll",G)})}},[f,c,u,s,h,T,v,n,r,P,p,j,W,M,H]),k.useEffect(()=>{N.current=!1},[T,v]),k.useMemo(()=>p?{reference:{onKeyDown:M,[$A[b]]:()=>{y&&(o.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),r(!1))}},floating:{onKeyDown:M,[UA[v]]:()=>{N.current=!0}}}:{},[p,o,y,v,b,r,M])}function D_(e){return k.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})},e)}function KS(e){var t;e===void 0&&(e={});const{open:n=!1,onOpenChange:r,nodeId:o}=e,[a,s]=k.useState(null),u=((t=e.elements)==null?void 0:t.reference)||a,c=function(E){E===void 0&&(E={});const{placement:R="bottom",strategy:T="absolute",middleware:N=[],platform:j,elements:{reference:W,floating:M}={},transform:H=!0,whileElementsMounted:G,open:K}=E,[U,re]=k.useState({x:0,y:0,strategy:T,placement:R,middlewareData:{},isPositioned:!1}),[q,se]=k.useState(N);Tc(q,N)||se(N);const[B,Y]=k.useState(null),[A,O]=k.useState(null),z=k.useCallback(de=>{de!=ie.current&&(ie.current=de,Y(de))},[Y]),D=k.useCallback(de=>{de!==fe.current&&(fe.current=de,O(de))},[O]),V=W||B,te=M||A,ie=k.useRef(null),fe=k.useRef(null),be=k.useRef(U),Je=zb(G),Ze=zb(j),Re=k.useCallback(()=>{if(!ie.current||!fe.current)return;const de={placement:R,strategy:T,middleware:q};Ze.current&&(de.platform=Ze.current),xA(ie.current,fe.current,de).then(_e=>{const ke={..._e,isPositioned:!0};le.current&&!Tc(be.current,ke)&&(be.current=ke,ko.flushSync(()=>{re(ke)}))})},[q,R,T,Ze]);Lu(()=>{K===!1&&be.current.isPositioned&&(be.current.isPositioned=!1,re(de=>({...de,isPositioned:!1})))},[K]);const le=k.useRef(!1);Lu(()=>(le.current=!0,()=>{le.current=!1}),[]),Lu(()=>{if(V&&(ie.current=V),te&&(fe.current=te),V&&te){if(Je.current)return Je.current(V,te,Re);Re()}},[V,te,Re,Je]);const me=k.useMemo(()=>({reference:ie,floating:fe,setReference:z,setFloating:D}),[z,D]),ee=k.useMemo(()=>({reference:V,floating:te}),[V,te]),ce=k.useMemo(()=>{const de={position:T,left:0,top:0};if(!ee.floating)return de;const _e=Ib(ee.floating,U.x),ke=Ib(ee.floating,U.y);return H?{...de,transform:"translate("+_e+"px, "+ke+"px)",...jS(ee.floating)>=1.5&&{willChange:"transform"}}:{position:T,left:_e,top:ke}},[T,H,ee.floating,U.x,U.y]);return k.useMemo(()=>({...U,update:Re,refs:me,elements:ee,floatingStyles:ce}),[U,Re,me,ee,ce])}(e),f=HS(),p=Iu(r),h=k.useRef(null),_=k.useRef({}),v=k.useState(()=>function(){const E=new Map;return{emit(R,T){var N;(N=E.get(R))==null||N.forEach(j=>j(T))},on(R,T){E.set(R,[...E.get(R)||[],T])},off(R,T){var N;E.set(R,((N=E.get(R))==null?void 0:N.filter(j=>j!==T))||[])}}}())[0],y=N_(),b=k.useCallback(E=>{const R=si(E)?{getBoundingClientRect:()=>E.getBoundingClientRect(),contextElement:E}:E;c.refs.setReference(R)},[c.refs]),P=k.useCallback(E=>{(si(E)||E===null)&&(h.current=E,s(E)),(si(c.refs.reference.current)||c.refs.reference.current===null||E!==null&&!si(E))&&c.refs.setReference(E)},[c.refs]),g=k.useMemo(()=>({...c.refs,setReference:P,setPositionReference:b,domReference:h}),[c.refs,P,b]),x=k.useMemo(()=>({...c.elements,domReference:u}),[c.elements,u]),S=k.useMemo(()=>({...c,refs:g,elements:x,dataRef:_,nodeId:o,floatingId:y,events:v,open:n,onOpenChange:p}),[c,o,y,v,n,p,g,x]);return rl(()=>{const E=f?.nodesRef.current.find(R=>R.id===o);E&&(E.context=S)}),k.useMemo(()=>({...c,context:S,refs:g,elements:x}),[c,g,x,S])}function uh(e,t,n){const r=new Map;return{...n==="floating"&&{tabIndex:-1},...e,...t.map(o=>o?o[n]:null).concat(e).reduce((o,a)=>(a&&Object.entries(a).forEach(s=>{let[u,c]=s;var f;u.indexOf("on")===0?(r.has(u)||r.set(u,[]),typeof c=="function"&&((f=r.get(u))==null||f.push(c),o[u]=function(){for(var p,h=arguments.length,_=new Array(h),v=0;v<h;v++)_[v]=arguments[v];return(p=r.get(u))==null?void 0:p.map(y=>y(..._)).find(y=>y!==void 0)})):o[u]=c}),o),{})}}var am={popover:"Popover-module_popover__E9K9X",default:"Popover-module_default__TlPJp",info:"Popover-module_info__VKCAP",warning:"Popover-module_warning__o27i9",danger:"Popover-module_danger__9bIyx",arrow:"Popover-module_arrow__5A-0e"};function HA(e){var{variant:t="default",arrow:n,initialOpen:r,placement:o,offset:a,open:s,onOpenChange:u}=e,c=ft(e,["variant","arrow","initialOpen","placement","offset","open","onOpenChange"]);const[f,p]=k.useState(r),h=s??f,_=u??p,v=k.useRef(null),y=KS({placement:o,open:h,onOpenChange:_,whileElementsMounted:DS,middleware:[_A(a??(n?12:4)),RS({padding:5,fallbackPlacements:["bottom","top"]}),(b={padding:5},b===void 0&&(b={}),{name:"shift",options:b,async fn(R){const{x:T,y:N,placement:j}=R,{mainAxis:W=!0,crossAxis:M=!1,limiter:H={fn:A=>{let{x:O,y:z}=A;return{x:O,y:z}}},...G}=b,K={x:T,y:N},U=await z_(R,G),re=Ma(_o(j)),q=re==="x"?"y":"x";let se=K[re],B=K[q];if(W){const A=re==="y"?"bottom":"right";se=tm(se+U[re==="y"?"top":"left"],se,se-U[A])}if(M){const A=q==="y"?"bottom":"right";B=tm(B+U[q==="y"?"top":"left"],B,B-U[A])}const Y=H.fn({...R,[re]:se,[q]:B});return{...Y,data:{x:Y.x-T,y:Y.y-N}}}}),wA({element:v,padding:8})]});var b;const P=y.context,g=function(R,T){T===void 0&&(T={});const{open:N,onOpenChange:j,dataRef:W,elements:{domReference:M}}=R,{enabled:H=!0,event:G="click",toggle:K=!0,ignoreMouse:U=!1,keyboardHandlers:re=!0}=T,q=k.useRef(),se=k.useRef(!1);return k.useMemo(()=>H?{reference:{onPointerDown(B){q.current=B.pointerType},onMouseDown(B){B.button===0&&(Db(q.current,!0)&&U||G!=="click"&&(N?!K||W.current.openEvent&&W.current.openEvent.type!=="mousedown"||j(!1):(B.preventDefault(),j(!0)),W.current.openEvent=B.nativeEvent))},onClick(B){G==="mousedown"&&q.current?q.current=void 0:Db(q.current,!0)&&U||(N?!K||W.current.openEvent&&W.current.openEvent.type!=="click"||j(!1):j(!0),W.current.openEvent=B.nativeEvent)},onKeyDown(B){q.current=void 0,B.defaultPrevented||!re||Ub(B)||(B.key!==" "||Wb(M)||(B.preventDefault(),se.current=!0),B.key==="Enter"&&(N?K&&j(!1):j(!0)))},onKeyUp(B){B.defaultPrevented||!re||Ub(B)||Wb(M)||B.key===" "&&se.current&&(se.current=!1,N?K&&j(!1):j(!0))}}}:{},[H,W,G,U,re,M,K,N,j])}(P,{enabled:s==null}),x=WA(P,{referencePress:!1}),S=function(R,T){T===void 0&&(T={});const{open:N,floatingId:j}=R,{enabled:W=!0,role:M="dialog"}=T,H=N_();return k.useMemo(()=>{const G={id:j,role:M};return W?M==="tooltip"?{reference:{"aria-describedby":N?j:void 0},floating:G}:{reference:{"aria-expanded":N?"true":"false","aria-haspopup":M==="alertdialog"?"dialog":M,"aria-controls":N?j:void 0,...M==="listbox"&&{role:"combobox"},...M==="menu"&&{id:H}},floating:{...G,...M==="menu"&&{"aria-labelledby":H}}}:{}},[W,M,N,j,H])}(P),E=function(R){R===void 0&&(R=[]);const T=R,N=k.useCallback(M=>uh(M,R,"reference"),T),j=k.useCallback(M=>uh(M,R,"floating"),T),W=k.useCallback(M=>uh(M,R,"item"),R.map(M=>M?.item));return k.useMemo(()=>({getReferenceProps:N,getFloatingProps:j,getItemProps:W}),[N,j,W])}([g,x,S]);return k.useMemo(()=>Object.assign(Object.assign(Object.assign(Object.assign({open:h,setOpen:_},E),y),c),{arrow:n,arrowRef:v,variant:t}),[h,_,E,y,c,n,v,t])}Ie(`.Popover-module_popover__E9K9X {
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
`);const QS=k.createContext(null),j_=()=>{const e=k.useContext(QS);if(e==null)throw new Error("Popover components must be wrapped in <Popover />");return e};function GS(e){var{children:t,trigger:n,arrow:r=!0,initialOpen:o=!1}=e,a=ft(e,["children","trigger","arrow","initialOpen"]);const s=HA(Object.assign({arrow:r,initialOpen:o},a));return $.createElement(QS.Provider,{value:s},$.createElement(VA,null,n),$.createElement(ZA,null,t,s.arrow&&$.createElement(qA,null)))}GS.displayName="Popover";const VA=k.forwardRef(function(e,t){var{children:n}=e,r=ft(e,["children"]);const o=j_(),a=k.isValidElement(n)?n:null,s=D_([o.refs.setReference,t]);if(a){const u=Object.assign(Object.assign(Object.assign(Object.assign({ref:s},r),a.props),o.getReferenceProps()),{"data-state":o.open?"open":"closed","aria-expanded":o.open});return k.cloneElement(a,u)}return null}),ZA=k.forwardRef(function(e,t){var n,r;const o=j_(),a=D_([o.refs.setFloating,t]);return o.open?$.createElement("div",Object.assign({ref:a,style:{position:o.strategy,top:(n=o.y)!==null&&n!==void 0?n:0,left:(r=o.x)!==null&&r!==void 0?r:0},"data-placement":o.placement,className:qe(am.popover,am[o.variant],o.className)},o.getFloatingProps(e),{tabIndex:-1,role:o.role||"dialog"}),e.children):null}),qA=k.forwardRef(function(e,t){var n,r;const o=j_(),a=D_([o.arrowRef,t]),s=(n=o.middlewareData.arrow)===null||n===void 0?void 0:n.x,u=(r=o.middlewareData.arrow)===null||r===void 0?void 0:r.y,c={top:"bottom",right:"left",bottom:"top",left:"right"}[o.placement.split("-")[0]];return $.createElement("div",Object.assign({ref:a,style:Object.assign(Object.assign(Object.assign({},s!=null?{left:s}:{}),u!=null?{top:u}:{}),c?{[c]:"-7px"}:{}),className:am.arrow},e))});var JS="utility-module_visuallyHidden__R-C67",F_="utility-module_focusable__1fBKr";Ie(`/**
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
`);var Vo={helpTextButton:"HelpText-module_helpTextButton__Ir4Uk utility-module_focusable__1fBKr",helpTextIconFilled:"HelpText-module_helpTextIconFilled__SjZ8e",helpTextIcon:"HelpText-module_helpTextIcon__ex2WU",helpTextContent:"HelpText-module_helpTextContent__EDHac",small:"HelpText-module_small__Y44D4",xsmall:"HelpText-module_xsmall__peaFV"};Ie(`/**
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
`);const $_=e=>{var{className:t,children:n,title:r,placement:o="right",onClick:a,size:s="small"}=e,u=ft(e,["className","children","title","placement","onClick","size"]);const[c,f]=k.useState(!1);return $.createElement(GS,{variant:"info",placement:o,open:c,onOpenChange:f,className:Vo.helpTextContent,role:"tooltip",trigger:$.createElement("button",Object.assign({},u,{className:qe(Vo.helpTextButton,t),onClick:p=>{f(h=>!h),a?.(p)}}),$.createElement(NL,{className:qe(Vo.helpTextIcon,Vo.helpTextIconFilled,Vo[s],t),"data-state":c?"open":"closed","aria-hidden":!0}),$.createElement(AL,{className:qe(Vo.helpTextIcon,Vo[s],t),"data-state":c?"open":"closed","aria-hidden":!0}),$.createElement("span",{className:JS},r))},n)};$_.displayName="HelpText";var gn={template:"CheckboxRadioTemplate-module_template__CbnTf",xsmall:"CheckboxRadioTemplate-module_xsmall__JkKoU",small:"CheckboxRadioTemplate-module_small__7fCnT",hiddenLabel:"CheckboxRadioTemplate-module_hiddenLabel__iHKhU",disabled:"CheckboxRadioTemplate-module_disabled__AUMha",clickable:"CheckboxRadioTemplate-module_clickable__iw4S2",inputWrapper:"CheckboxRadioTemplate-module_inputWrapper__K4Urn",input:"CheckboxRadioTemplate-module_input__O2CzZ",visibleBox:"CheckboxRadioTemplate-module_visibleBox__mj4RB",labelAndDescription:"CheckboxRadioTemplate-module_labelAndDescription__NcntT",label:"CheckboxRadioTemplate-module_label__hsc7R",labelAndHelpText:"CheckboxRadioTemplate-module_labelAndHelpText__JIDAJ",description:"CheckboxRadioTemplate-module_description__FX9dz"};Ie(`.CheckboxRadioTemplate-module_template__CbnTf {
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
`);const KA=({checked:e,children:t,className:n,description:r,disabled:o,helpText:a,hideInput:s,hideLabel:u,inputId:c,label:f,name:p,onChange:h,presentation:_,size:v="small",type:y,value:b})=>{const P=k.useId(),g=c??"input-"+P,x=f?`${g}-label`:void 0,S=r?`${g}-description`:void 0,E=f&&!u,R=!_||typeof f!="object"&&typeof r!="object";return $.createElement(Hb,{className:qe(gn.template,gn[v],!E&&gn.hiddenLabel,o?gn.disabled:F_,n),htmlFor:g,isLabel:R},!s&&$.createElement(Hb,{className:gn.inputWrapper,htmlFor:g,isLabel:!R},$.createElement("input",{"aria-describedby":S,"aria-labelledby":f?x:void 0,checked:e!=null&&e,className:gn.input,disabled:o,id:g,name:p,onChange:o?void 0:h,role:_?"presentation":void 0,type:y,value:b}),$.createElement("span",{className:gn.visibleBox},t)),(f||r)&&$.createElement("span",{className:gn.labelAndDescription},$.createElement("span",{className:gn.labelAndHelpText},f&&$.createElement("span",{className:gn.label,id:x,style:{display:E?"inline":"none"}},f),a&&$.createElement($_,{size:v,title:typeof f=="string"?`Help text for ${f}`:""},a)),r&&$.createElement("span",{className:gn.description,id:S},r)))},Hb=({children:e,className:t,htmlFor:n,isLabel:r})=>r?$.createElement("label",{className:t+" "+gn.clickable,htmlFor:n},e):$.createElement("span",{className:t},e);var QA="Checkbox-module_checkbox__lSeQj",GA="Checkbox-module_compact__Cl41-",JA="Checkbox-module_error__E-bmD",YA="Checkbox-module_checked__3yAq6",XA="Checkbox-module_disabled__x7-eg",eI="Checkbox-module_readOnly__FamUn",tI="Checkbox-module_visibleBox__G7q8H",nI="Checkbox-module_checkmark__ES9N8";Ie(`.Checkbox-module_checkbox__lSeQj {
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
`);const Mt=({checkboxId:e,checked:t,compact:n,description:r,disabled:o,error:a,helpText:s,hideLabel:u,label:c,name:f,onChange:p,presentation:h,readOnly:_})=>$.createElement(KA,{checked:t,className:qe(QA,t&&YA,a&&JA,o&&XA,n&&GA,_&&eI),description:r,disabled:o,helpText:s,hideInput:_,hideLabel:u,inputId:e,label:c,name:f,onChange:p,presentation:h,size:n?"xsmall":"small",type:"checkbox"},$.createElement("span",{className:tI},$.createElement("span",{className:nI})));Mt.displayName="Checkbox";const rI=(e,t)=>{if(e.length!==1)throw new Error("Char must be a single character.");const n=[];for(let r=0;r<t.length;r++)t[r]===e&&n.push(r);return n},Vb=(e,t)=>{const n=e.toLowerCase(),r=t.toLowerCase(),o=new Set;for(let a=0;a<e.length;a++){const s=n[a];for(const u of rI(s,r))if(!o.has(u)){o.add(u);break}}return o.size},Zb=(e,t)=>{const n=e.toLowerCase(),r=t.toLowerCase();let o=0;for(let a=0;a<r.length;a++)if(r[a]===n[o]&&(o++,o===n.length))return!0;return!1},oI=e=>(t,n)=>{const r=(o=>(a,s)=>{const u=Zb(o,a),c=Zb(o,s);if(!u&&!c)return 0;if(u&&!c)return-1;if(!u&&c)return 1;let f=0;for(let p=0;p<o.length;p++){const h=a.substring(f).indexOf(o[p]),_=s.substring(f).indexOf(o[p]);if(h<_)return-1;if(h>_)return 1;f+=h+1}return 0})(e)(t,n);return r!==0?r:(o=>(a,s)=>{const u=Vb(o,a);return Vb(o,s)-u})(e)(t,n)},iI=e=>e.format!==void 0,aI=e=>e.format===void 0,YS=(e,t)=>{const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const o of n)if(e[o]!==t[o])return!1;return!0};var ch={checkboxGroup:"CheckboxGroup-module_checkboxGroup__LIGFC",compact:"CheckboxGroup-module_compact__IPuN8",vertical:"CheckboxGroup-module_vertical__R-l07",horizontal:"CheckboxGroup-module_horizontal__myCqF"};Ie(`.CheckboxGroup-module_checkboxGroup__LIGFC {
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
`);const sI=(e,t)=>{switch(t.type){case"check":return e.concat([t.name]);case"uncheck":return e.filter(n=>n!==t.name);case"reset":return t.state}},qb=e=>e.filter(({checked:t})=>t).map(({name:t})=>t),XS=({compact:e,description:t,disabled:n,error:r,helpText:o,items:a,legend:s,onChange:u,presentation:c,variant:f="vertical",fieldSetProps:p})=>{if(!PS(a.map(b=>b.name)))throw Error("Each name in the checkbox group must be unique.");const[h,_]=k.useReducer(sI,qb(a)),v=Ec([...a]);el(()=>{(a.length!==v?.length||a.some((b,P)=>!YS(b,v[P])))&&_({type:"reset",state:qb(a)})});const y=Ec(h);return el(()=>{u&&!n&&!kS(y,h)&&u(h)},[h,u,n]),$.createElement(ES,Object.assign({contentClassName:qe(ch.checkboxGroup,ch[f],e&&ch.compact),description:t,disabled:n,error:r,helpText:o,legend:s,size:e?"xsmall":"small"},p),a.map(b=>$.createElement(Mt,{checkboxId:b.checkboxId,checked:h.includes(b.name),compact:e,description:b.description,disabled:n||b.disabled,error:!!r,helpText:b.helpText,key:b.name,hideLabel:b.hideLabel,label:b.label,name:b.name,onChange:P=>{_({type:P.target.checked?"check":"uncheck",name:b.name})},presentation:c})))};XS.displayName="CheckboxGroup";Ie(`.RadioButton-module_radio__-lcP- {
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
`);const lI=()=>$.createElement("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},$.createElement("path",{d:"M8 0C3.875 0 0.5 3.375 0.5 7.5C0.5 11.625 3.875 15 8 15C12.125 15 15.5 11.625 15.5 7.5C15.5 3.375 12.125 0 8 0ZM8.875 11.25H7.5V9.9375H8.875V11.25ZM8.6875 9H7.6875L7.375 4.125H9L8.6875 9Z",fill:"white"})),uI=()=>$.createElement("svg",{width:"15",height:"15",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},$.createElement("path",{d:"M34 31.5758L23.9289 21.3939C25.5533 19.2929 26.3655 16.8687 26.3655 14.1212C26.3655 7.49495 20.8426 2 14.1827 2C7.52284 2 2 7.49495 2 14.1212C2 20.7475 7.52284 26.2424 14.1827 26.2424C16.9442 26.2424 19.5431 25.2727 21.4924 23.8182L31.7259 34L34 31.5758ZM5.24873 14.1212C5.24873 9.27273 9.30965 5.23232 14.1827 5.23232C19.0558 5.23232 23.1168 9.27273 23.1168 14.1212C23.1168 18.9697 19.0558 23.0101 14.1827 23.0101C9.30965 23.0101 5.24873 18.9697 5.24873 14.1212Z",fill:"black"}));var Kb="Icon-module_icon__3YqoF",cI="Icon-module_disabled__e4-Yg";Ie(`.Icon-module_icon__3YqoF {
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
`);const dI=({variant:e,disabled:t=!1})=>{switch(e){case"error":return $.createElement("span",{className:Kb,"data-testid":"input-icon-error"},$.createElement(lI,null));case"search":return $.createElement("span",{className:qe(Kb,t&&cI),"data-testid":"input-icon-search"},$.createElement(uI,null));default:return null}};var or={inputAndLabel:"InputWrapper-module_inputAndLabel__t1-Vi",inputWrapper:"InputWrapper-module_inputWrapper__I-Tcb",default:"InputWrapper-module_default__SS3Cg",error:"InputWrapper-module_error__FhSCJ",disabled:"InputWrapper-module_disabled__8mIxc",readonlyInfo:"InputWrapper-module_readonlyInfo__mQyMN",readonlyConfirm:"InputWrapper-module_readonlyConfirm__WrHUu",search:"InputWrapper-module_search__SwwFJ",withPadding:"InputWrapper-module_withPadding__6NkNf",field:"InputWrapper-module_field__UA-RS",withIcon:"InputWrapper-module_withIcon__x0I81",label:"InputWrapper-module_label__x0-XH",characterLimitLabel:"InputWrapper-module_characterLimitLabel__x9Z9p",characterLimitExceeded:"InputWrapper-module_characterLimitExceeded__WKRxJ"};Ie(`.InputWrapper-module_inputAndLabel__t1-Vi {
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
`);const U_=({className:e="",disabled:t=!1,inputId:n,inputRenderer:r,isSearch:o=!1,isValid:a=!0,label:s,noFocusEffect:u,noPadding:c,readOnly:f=!1,characterLimit:p,value:h,ariaDescribedBy:_})=>{const v=k.useId(),y=n??v,b=k.useId(),P=p?b:void 0,g=h?h.toString():"",{variant:x,iconVariant:S}=(({readOnly:T=!1,disabled:N=!1,isValid:j=!0,isSearch:W=!1}={})=>T===!0||T==="readonlyInfo"?{variant:"readonlyInfo",iconVariant:"none"}:T==="readonlyConfirm"?{variant:"readonlyConfirm",iconVariant:"none"}:j===!1?{variant:"error",iconVariant:"error"}:{variant:N?"disabled":"default",iconVariant:W?"search":"none"})({disabled:t,isSearch:o,isValid:p?g.length<p.maxCount&&a:a,readOnly:f}),E=S!=="none";return $.createElement("div",null,$.createElement("span",{className:qe(or.inputAndLabel,E&&or.withIcon)},s&&$.createElement("label",{className:or.label,htmlFor:y},s),$.createElement("span",{"data-testid":"InputWrapper",className:qe(or.inputWrapper,or[x],{[or.search]:o,[or.withPadding]:!c})},$.createElement(dI,{variant:S,disabled:t}),r({className:qe(or.field,!u&&F_,e),hasIcon:E,inputId:y,variant:x,describedBy:(R=[_,P],R.filter(Boolean).join(" ")||void 0)}))),p&&P&&$.createElement(fI,Object.assign({},p,{value:g,ariaDescribedById:P})));var R},fI=({label:e,srLabel:t,maxCount:n,value:r,ariaDescribedById:o})=>{const a=n-r.length,s=r.length>n;return $.createElement($.Fragment,null,$.createElement("span",{className:JS,id:o},t),$.createElement("div",{className:[or.characterLimitLabel,s?or.characterLimitExceeded:""].join(" "),"aria-live":s?"polite":"off"},e(a)))};var hI="MultiSelectItem-module_multiSelectItem__GMBKc",pI="MultiSelectItem-module_deleteButton__1imxW utility-module_focusable__1fBKr",mI="MultiSelectItem-module_deleteButtonCross__SI-Vd";Ie(`/**
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
`);const ek=({deleteButtonLabel:e,disabled:t,onDeleteButtonClick:n,label:r})=>$.createElement("span",{className:hI},$.createElement("span",null,r),$.createElement("button",{"aria-label":e,className:pI,disabled:t,onClick:n,type:"button"},$.createElement("span",{className:mI})));ek.displayName="MultiSelectItem";var en={select:"Select-module_select__cjdcr",disabled:"Select-module_disabled__8YgjS",fieldButton:"Select-module_fieldButton__uKwX8",field:"Select-module_field__h-wBy",inputArea:"Select-module_inputArea__jBTNl",multiple:"Select-module_multiple__cwGEC",single:"Select-module_single__i2zPs",hasIcon:"Select-module_hasIcon__Jgj-c",textInput:"Select-module_textInput__QOpiN",arrowWrapper:"Select-module_arrowWrapper__meDQz",arrow:"Select-module_arrow__w35wW",deleteButton:"Select-module_deleteButton__hZfr7",deleteButtonCross:"Select-module_deleteButtonCross__OKMwb",expanded:"Select-module_expanded__QPHZ6"};Ie(`.Select-module_select__cjdcr {
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
`);const _I=(e,t)=>((n,r)=>[...n.entries()].map(([o,a])=>({key:o,keywords:(a?.length?a:[o]).sort(r)})).sort((o,a)=>{const s=Math.min(o.keywords.length,a.keywords.length);for(let u=0;u<s;u++){const c=r(o.keywords[u],a.keywords[u]);if(c!==0)return c}return 0}).map(({key:o})=>o))(new Map(e.map(({label:n,value:r,keywords:o})=>[r,o?[n,...o]:[n]])),oI(t)).map(n=>e.find(r=>r.value===n));var gI="OptionList-module_wrapper__VWxy0",vI="OptionList-module_expanded__zQMFT",yI="OptionList-module_optionList__Ij1Ct",bI="OptionList-module_option__pIUbJ",xI="OptionList-module_selected__mCVJf",wI="OptionList-module_usingKeyboard__vHoYA",SI="OptionList-module_focused__-bi1s";Ie(`.OptionList-module_wrapper__VWxy0 {
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
`);const tk=({active:e,id:t,multiple:n,onClick:r,option:o,selected:a})=>{var s;return $.createElement("button",{"aria-label":o.label,"aria-selected":a,className:qe(bI,a&&xI,n&&e&&SI),id:t,key:o.value,onClick:()=>r(o.value),onMouseDown:u=>u.preventDefault(),onKeyDown:u=>u.preventDefault(),role:"option",type:"button",value:o.value},(s=o.formattedLabel)!==null&&s!==void 0?s:o.label)};tk.displayName="Option";const nk=({activeValue:e,expanded:t,listboxId:n,multiple:r,onOptionClick:o,optionId:a,options:s,selectedValues:u,setFloating:c,x:f,y:p})=>{const h=k.useId(),[_,v]=k.useState(!1);Cc("click",()=>v(!1)),Cc("keydown",()=>v(!0));const y=b=>e===b;return $.createElement(DA,{id:`fds-select-${h}`},$.createElement("span",{className:qe(gI,t&&vI,_&&wI),ref:c,style:{left:f,top:p}},$.createElement("span",{"aria-expanded":t,className:yI,id:n,role:"listbox"},s.map(b=>{return $.createElement(tk,{active:y(b.value),id:a(b.value),key:b.value,multiple:r,onClick:o,option:b,selected:(P=b.value,r?u.includes(P):y(P))});var P}))))};nk.displayName="OptionList";const hs={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},rk=e=>{var t,n;const{disabled:r,error:o,hideLabel:a,inputId:s,label:u,multiple:c,onBlur:f,onChange:p,onFocus:h,options:_,searchLabel:v,value:y}=e,b=_.map(le=>le.value);if(b.length!==new Set(b).size)throw Error("Each value in the option list must be unique.");const P=k.useCallback(le=>{var me;return(me=_.find(ee=>ee.value===le))!==null&&me!==void 0?me:{label:"",value:""}},[_]),[g,x]=k.useState(c&&y!=null?y:[]),[S,E]=k.useState(c?"":(n=(t=P(y))===null||t===void 0?void 0:t.label)!==null&&n!==void 0?n:""),[R,T]=k.useState(_),N=Ec([..._]),j=Ec(y);el(()=>{var le,me;let ee=!1;(_.length!==N?.length||_.some((ce,de)=>!YS(ce,N[de])))&&(T(_),ee=!0),(!c&&y!==j||c&&(typeof j=="string"||!kS(y,j))||ee)&&(c?x(y??[]):(H(y),E((me=(le=P(y))===null||le===void 0?void 0:le.label)!==null&&me!==void 0?me:"")))});const W=_.length,[M,H]=k.useState(c?void 0:y),G=R.findIndex(le=>le.value===M),K=k.useCallback(le=>E(!c&&le||""),[E,c]),{x:U,y:re,elements:q,refs:se}=KS({placement:"bottom",whileElementsMounted:DS,middleware:[RS(),gA({apply:({availableHeight:le,elements:me,rects:ee})=>{Object.assign(me.floating.style,{maxHeight:`min(${le}px, var(--option_list-max_height))`,width:`${ee.reference.width}px`})}})]}),B=q.floating,Y=q.reference,A=function(le){const[me,ee]=k.useState(!1),ce=()=>{var de;const{activeElement:_e}=document;ee((de=le?.contains(_e))!==null&&de!==void 0&&de)};return Cc("focusin",ce,le),Cc("focusout",ce,le),me}(Y);el(()=>{var le,me;c||A||E((me=(le=P(M))===null||le===void 0?void 0:le.label)!==null&&me!==void 0?me:""),A&&h?h(c?g:M||""):!A&&f&&f(c?g:M||"")},[A]);const[O,z]=k.useState(!1);k.useEffect(()=>{if(B){const le=B.offsetHeight,me=B.querySelectorAll("button");if(!me.length)return;const ee=B.scrollTop,ce=ee+le,de=me[G];if(de){const _e=de.offsetTop,ke=_e+de.offsetHeight;_e>=ee&&ke<=ce||(B.scrollTop=_e<ee?_e:ke-le)}}},[G,B]);const D=(le,me)=>{g?.length||H(me),x(le),p&&p(le),K()},V=le=>{var me;c?g.includes(le)?te(le):D([...g,le],le):(H(me=le),K(P(me).label),z(!1),p&&p(me))},te=le=>{D(g.filter(me=>me!==le),le)},ie=k.useCallback(()=>{let le=null;if(M===void 0)le=R[0];else{const me=G+1;me>=0&&me<W&&(le=R[me])}le&&(H(le.value),K(le.label)),z(!0)},[M,G,K,H,R,W]),fe=k.useCallback(()=>{let le=null;if(M===void 0)le=R[W-1];else{const me=G-1;me>=0&&me<W&&(le=R[me])}le&&(H(le.value),K(le.label)),z(!0)},[M,G,K,H,R,W]);rh(hs.ArrowDown,()=>O?ie():z(!0),Y),rh(hs.ArrowUp,()=>O?fe():z(!0),Y),rh(hs.Enter,()=>{O&&(M?V(M):z(!1))},Y);const be=le=>{var me,ee;const ce=le.target.value;if(ce){const de=_I(_,ce);T(de);const _e=(me=R[0])===null||me===void 0?void 0:me.value,ke=(ee=de[0])===null||ee===void 0?void 0:ee.value;de&&_e!=ke&&H(ke),!O&&z(!0)}E(ce)},Je=k.useId(),Ze=s??Je,Re=k.useId();return $.createElement("span",{className:qe(en.select,en[c?"multiple":"single"],O&&en.expanded,r&&en.disabled),"data-testid":"select-root"},$.createElement(U_,{disabled:r,inputId:Ze,inputRenderer:({className:le,inputId:me,hasIcon:ee})=>$.createElement("span",{className:qe(le,en.field,ee&&en.hasIcon),ref:se.setReference},$.createElement("span",{className:en.inputArea},c&&$.createElement($.Fragment,null,g.map(P).map(ce=>$.createElement(ek,{deleteButtonLabel:ce.deleteButtonLabel,disabled:r!=null&&r,key:ce.value,label:ce.label,onDeleteButtonClick:()=>te(ce.value)}))),$.createElement("input",{"aria-activedescendant":M?`${me}-${M}`:void 0,"aria-autocomplete":"list","aria-controls":Re,"aria-expanded":O,"aria-haspopup":"listbox","aria-label":v??u,"aria-owns":Re,autoComplete:"off",className:en.textInput,disabled:r,id:me,onBlur:()=>z(!1),onClick:()=>z(!0),onChange:be,onFocus:()=>z(!0),onKeyDown:ce=>{Object.values(hs).includes(ce.key)&&ce.preventDefault()},role:"combobox",type:"text",value:S})),c&&$.createElement("button",{"aria-label":e.deleteButtonLabel,className:en.deleteButton+" "+F_,disabled:!g.length||r,onClick:()=>{D([])},type:"button"},$.createElement("span",{className:en.deleteButtonCross})),$.createElement("button",{"aria-controls":Re,"aria-expanded":O,"aria-haspopup":"listbox","aria-label":u,className:en.fieldButton,disabled:r,onBlur:()=>z(!1),onClick:()=>z(!O),onKeyDown:ce=>{Object.values(hs).includes(ce.key)&&(ce.preventDefault(),z(!0))},tabIndex:-1,type:"button",value:c?g:M},$.createElement("span",{className:en.arrowWrapper},$.createElement("span",{className:en.arrow})))),isSearch:!1,isValid:!o,label:a?void 0:u,noFocusEffect:c,noPadding:!0,readOnly:!1}),$.createElement(nk,{activeValue:M,expanded:O,listboxId:Re,multiple:!!c,onOptionClick:V,optionId:le=>`${Ze}-${le}`,options:R,selectedValues:g,setFloating:se.setFloating,x:U,y:re}))};rk.displayName="Select";var kI="Spinner-module_spinner__GpFZS",PI="Spinner-module_spinnerCircle__DRFwJ",CI="Spinner-module_defaultForeground__Ay0Sq",EI="Spinner-module_interactionForeground__8aY93",OI="Spinner-module_invertedForeground__DF2fs",RI="Spinner-module_defaultBackground__7A7zq",TI="Spinner-module_interactionBackground__jBIwt",LI="Spinner-module_invertedBackground__nQ8Oa";Ie(`.Spinner-module_spinner__GpFZS {
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
`);const Qb={xSmall:13,small:20,medium:27,large:40,"1xLarge":44,"2xLarge":56,"3xLarge":79},Gb={default:{foreground:CI,background:RI},interaction:{foreground:EI,background:TI},inverted:{foreground:OI,background:LI}},AI=e=>{var{title:t,size:n="medium",variant:r="default",className:o=""}=e,a=ft(e,["title","size","variant","className"]);return $.createElement("svg",Object.assign({className:`${kI} ${o}`,style:{width:Qb[n],height:Qb[n]},viewBox:"0 0 50 50"},a),$.createElement("title",null,t),$.createElement("circle",{className:Gb[r].background,cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"}),$.createElement("circle",{className:`${PI} ${Gb[r].foreground}`,cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"}))};var Jb={textArea:"TextArea-module_textArea__Fp7-I","resize-none":"TextArea-module_resize-none__LLMFm","resize-both":"TextArea-module_resize-both__LTKmK","resize-horizontal":"TextArea-module_resize-horizontal__SIRxw","resize-vertical":"TextArea-module_resize-vertical__oRHAF"};Ie(`.TextArea-module_textArea__Fp7-I {
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
`);k.forwardRef((e,t)=>{var n,{isValid:r=!0,disabled:o=!1,readOnly:a=!1,resize:s="none",label:u,characterLimit:c,value:f,onChange:p,"aria-describedby":h}=e,_=ft(e,["isValid","disabled","readOnly","resize","label","characterLimit","value","onChange","aria-describedby"]);const[v,y]=k.useState(f?f.toString():""),b=k.useId(),P=(n=_.id)!==null&&n!==void 0?n:b,g=x=>{y(x.target.value),p&&p(x)};return $.createElement(U_,{value:v,disabled:o,inputId:P,characterLimit:c,ariaDescribedBy:h,inputRenderer:({className:x,inputId:S,describedBy:E})=>$.createElement("textarea",Object.assign({},_,{ref:t,value:f,onChange:g,id:S,"aria-describedby":E,disabled:o,readOnly:!!a,className:[x,Jb.textArea,Jb[`resize-${s}`]].join(" ")})),isValid:r,label:u,readOnly:a})});k.forwardRef((e,t)=>{var{id:n,onChange:r,isValid:o=!0,disabled:a=!1,readOnly:s=!1,required:u=!1,formatting:c,label:f,value:p,characterLimit:h,"aria-describedby":_}=e,v=ft(e,["id","onChange","isValid","disabled","readOnly","required","formatting","label","value","characterLimit","aria-describedby"]);const[y,b]=k.useState(p?p.toString():""),P=(x,S)=>{if(S.source==="event"&&r){const E=(({values:R,sourceInfo:T})=>{const N=Object.assign({},T.event);return Object.assign(Object.assign({},N),{target:Object.assign(Object.assign({},N.target),{value:R.value.trim()})})})({values:x,sourceInfo:S});b(E.target.value),r(E)}},g=x=>{r&&r(x),b(x.target.value||"")};return $.createElement(U_,{value:y,isValid:o,disabled:a,readOnly:s,label:f,inputId:n,characterLimit:h,ariaDescribedBy:_,inputRenderer:({className:x,variant:S,inputId:E,describedBy:R})=>{const T={id:E,readOnly:!!s,disabled:a,required:u,className:qe(x,v.className),style:Object.assign({textAlign:c?.align},v.style)};return c?.number&&aI(c.number)?(c.number.prefix&&c.number.prefix[0]==="-"&&(c.number.prefix=` ${c.number.prefix}`),$.createElement(eA,Object.assign({},T,c.number,v,{value:p,"data-testid":`${E}-formatted-number-${S}`,onValueChange:P,valueIsNumericString:!0,"aria-describedby":R,getInputRef:t}))):c?.number&&iI(c.number)?$.createElement(sA,Object.assign({},T,c.number,v,{value:p,"data-testid":`${E}-formatted-number-${S}`,onValueChange:P,valueIsNumericString:!0,"aria-describedby":R,getInputRef:t})):$.createElement("input",Object.assign({},T,v,{value:p,"data-testid":`${E}-${S}`,onChange:g,"aria-describedby":R,ref:t}))}})});k.createContext(void 0);Ie(`.LegacyAccordion-module_legacyAccordion__eadKx {
  --component-LegacyAccordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;

  background-color: var(--component-LegacyAccordion-color-background);
  width: var(--component-panel-size-width);
}
`);Ie(`.LegacyAccordionHeader-module_legacyAccordionHeader__2Vu0a {
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
`);Ie(`.LegacyAccordionIcon-module_legacyAccordionIcon__-LNuQ {
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
`);var Yb={list:"List-module_list__9aWGq",solid:"List-module_solid__g5log",dashed:"List-module_dashed__sq10j"};Ie(`.List-module_list__9aWGq {
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
`);const II=e=>{var{borderStyle:t="solid",children:n,className:r}=e,o=ft(e,["borderStyle","children","className"]);return $.createElement("ul",Object.assign({},o,{className:qe([Yb.list,Yb[t],r])}),n)};var zI="ListItem-module_listItem__AJQMK";Ie(`.ListItem-module_listItem__AJQMK {
  border-bottom-color: var(--component-list-border_color);
  border-bottom-style: var(--component-list-border_style);
  border-bottom-width: var(--component-list-border_width);
  display: block;
}
`);const Zo=e=>{var{children:t}=e,n=ft(e,["children"]);return $.createElement("li",Object.assign({},n,{className:zI}),t)};Ie(`.Table-module_table__Dkosn {
  align-self: stretch;
  background-color: #fff;
  border-collapse: collapse;
  border-spacing: 0;
  box-shadow: 0 1px 1px rgb(0 0 0 / 0.12), 0 2px 2px rgb(0 0 0 / 0.12);
  flex-grow: 0;
  order: 3;
  width: 100%;
}
`);k.createContext(void 0);k.createContext({variantStandard:"body"});Ie(`.TableHeader-module_table-header__mrqgB {
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
`);var du={paragraph:"Paragraph-module_paragraph__Q65gR",spacing:"Paragraph-module_spacing__NqukG",large:"Paragraph-module_large__a1-p4",short:"Paragraph-module_short__2YxWV",medium:"Paragraph-module_medium__LYuYD",small:"Paragraph-module_small__nw9qP",xsmall:"Paragraph-module_xsmall__sCdyx"};Ie(`.Paragraph-module_paragraph__Q65gR {
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
`);const ok=k.forwardRef((e,t)=>{var{className:n,size:r="medium",spacing:o,as:a="p",short:s}=e,u=ft(e,["className","size","spacing","as","short"]);return $.createElement(a,Object.assign({},u,{ref:t,className:qe(du.paragraph,du[r],{[du.spacing]:!!o,[du.short]:s},n)}))});var dh={heading:"Heading-module_heading__oGM7x",spacing:"Heading-module_spacing__F-DQ2",xlarge:"Heading-module_xlarge__Aq3TF",large:"Heading-module_large__kEdDZ",medium:"Heading-module_medium__VfBrh",small:"Heading-module_small__SY2lJ",xsmall:"Heading-module_xsmall__hYzb1",xxsmall:"Heading-module_xxsmall__TrWhu"};Ie(`.Heading-module_heading__oGM7x {
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
`);const ik=k.forwardRef((e,t)=>{var{level:n=1,size:r="xlarge",spacing:o=!1,className:a,as:s}=e,u=ft(e,["level","size","spacing","className","as"]);const c=s??`h${n??1}`;return $.createElement(c,Object.assign({},u,{ref:t,className:qe(dh.heading,dh[r],{[dh.spacing]:o},a)}))});var fh={ingress:"Ingress-module_ingress__QiPXj",spacing:"Ingress-module_spacing__C2m1n",medium:"Ingress-module_medium__r-UCu"};Ie(`.Ingress-module_ingress__QiPXj {
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
`);const NI=k.forwardRef((e,t)=>{var{className:n,size:r="medium",spacing:o,as:a="p"}=e,s=ft(e,["className","size","spacing","as"]);return $.createElement(a,Object.assign({},s,{ref:t,className:qe(fh.ingress,fh[r],{[fh.spacing]:!!o},n)}))});var hh={label:"Label-module_label__vyjHz",spacing:"Label-module_spacing__8PZyR",large:"Label-module_large__Y2DhY",medium:"Label-module_medium__mDhxE",small:"Label-module_small__5UUDo",xsmall:"Label-module_xsmall__TwPQx"};Ie(`.Label-module_label__vyjHz {
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
`);k.forwardRef((e,t)=>{var{className:n,size:r="medium",spacing:o,as:a="label"}=e,s=ft(e,["className","size","spacing","as"]);return $.createElement(a,Object.assign({},s,{ref:t,className:qe(hh.label,hh[r],{[hh.spacing]:!!o},n)}))});var ph={errorMessage:"ErrorMessage-module_errorMessage__Mn3zg",spacing:"ErrorMessage-module_spacing__cDjeN",medium:"ErrorMessage-module_medium__ZOE1G",small:"ErrorMessage-module_small__mUspd"};Ie(`.ErrorMessage-module_errorMessage__Mn3zg {
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
`);const BI=k.forwardRef((e,t)=>{var{className:n,size:r="medium",spacing:o,as:a="p"}=e,s=ft(e,["className","size","spacing","as"]);return $.createElement(a,Object.assign({},s,{ref:t,className:qe(ph.errorMessage,ph[r],{[ph.spacing]:!!o},n)}))});var yo={accordion:"Accordion-module_accordion__LVhhv",border:"Accordion-module_border__33ZCr",expandIcon:"Accordion-module_expandIcon__VoOG-",content:"Accordion-module_content__PEM9t",item:"Accordion-module_item__7ryVk",header:"Accordion-module_header__WaTdJ",button:"Accordion-module_button__DIKcm",neutral:"Accordion-module_neutral__qNam6",subtle:"Accordion-module_subtle__Mo-a1",primary:"Accordion-module_primary__62zA0",secondary:"Accordion-module_secondary__D7Kj1",tertiary:"Accordion-module_tertiary__jJX6T",open:"Accordion-module_open__98jLY",filled:"Accordion-module_filled__lWoG4"};Ie(`.Accordion-module_accordion__LVhhv {
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
`);const MI=k.forwardRef((e,t)=>{var{border:n=!1,color:r="neutral",className:o}=e,a=ft(e,["border","color","className"]);return $.createElement("div",Object.assign({},a,{className:qe(yo.accordion,yo[r],{[yo.border]:n},o),ref:t}))}),W_=k.createContext(null),DI=k.forwardRef((e,t)=>{var{children:n,className:r,open:o,defaultOpen:a=!1}=e,s=ft(e,["children","className","open","defaultOpen"]);const[u,c]=k.useState(a),f=k.useId();return $.createElement("div",Object.assign({className:qe(yo.item,r,{[yo.open]:o??u}),ref:t},s),$.createElement(W_.Provider,{value:{open:o??u,toggleOpen:()=>{o===void 0&&c(p=>!p)},contentId:f}},n))});function Xb(e){return typeof e=="string"&&e[e.length-1]==="%"&&function(t){const n=parseFloat(t);return!isNaN(n)&&isFinite(n)}(e.substring(0,e.length-1))}function mh(e,t){t===0&&e?.style&&(e.style.display="none")}const jI=e=>{var{children:t,className:n,innerClassName:r,duration:o=250,easing:a="ease",height:s}=e,u=ft(e,["children","className","innerClassName","duration","easing","height"]);const c=k.useRef(s),f=k.useRef(null),p=k.useRef(),h=k.useRef(),_=typeof window<"u",v=k.useRef(!(!_||!window.matchMedia)&&window.matchMedia("(prefers-reduced-motion)").matches).current?0:o;let y=s,b="visible";typeof y=="number"?(y=+s<0?0:s,b="hidden"):Xb(y)&&(y=s==="0%"?0:s,b="hidden");const[P,g]=k.useState(y),[x,S]=k.useState(b),[E,R]=k.useState(!1);k.useEffect(()=>{mh(f.current,P)},[]),k.useEffect(()=>{if(s!==c.current&&f.current){(function(re,q){q===0&&re?.style&&(re.style.display="")})(f.current,c.current),f.current.style.overflow="hidden";const j=f.current.offsetHeight;f.current.style.overflow="";const W=v;let M,H,G,K="hidden";const U=c.current==="auto";typeof s=="number"?(M=s<0?0:s,H=M):Xb(s)?(M=s==="0%"?0:s,H=M):(M=j,H="auto",K=void 0),U&&(H=M,M=j),g(M),S("hidden"),R(!U),clearTimeout(h.current),clearTimeout(p.current),U?(G=!0,h.current=setTimeout(()=>{g(H),S(K),R(G)},50),p.current=setTimeout(()=>{R(!1),mh(f.current,H)},W)):h.current=setTimeout(()=>{g(H),S(K),R(!1),s!=="auto"&&mh(f.current,M)},W)}return c.current=s,()=>{clearTimeout(h.current),clearTimeout(p.current)}},[s]);const T={height:P,overflow:x};E&&(T.transition=`height ${v}ms ${a} 0ms`,T.WebkitTransition=T.transition);const N=u["aria-hidden"]!==void 0?u["aria-hidden"]:s===0;return $.createElement("div",Object.assign({},u,{className:n,style:T}),$.createElement("div",{"aria-hidden":N,className:r,ref:f},t))},FI=k.forwardRef((e,t)=>{var{children:n,className:r}=e,o=ft(e,["children","className"]);const a=k.useContext(W_);return a===null?(console.error("<Accordion.Content> has to be used within an <Accordion.Item>"),null):$.createElement(jI,{id:a.contentId,height:a.open?"auto":0,duration:250},$.createElement(ok,Object.assign({},o,{as:"div",size:"small",ref:t,className:qe(yo.content,r)}),n))});let e0=0;const t0=$.useId;function $I(e){var t;if(t0!==void 0){const n=t0();return e??n.replace(/(:)/g,"")}return(t=function(n){const[r,o]=k.useState(n),a=n||r;return k.useEffect(()=>{r==null&&(e0+=1,o(`aksel-icon-${e0}`))},[r]),a}(e))!==null&&t!==void 0?t:""}var UI=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},WI=k.forwardRef((e,t)=>{var{title:n,titleId:r}=e,o=UI(e,["title","titleId"]);let a=$I();return a=n?r||"title-"+a:void 0,k.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},o),n?k.createElement("title",{id:a},n):null,k.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06Z",fill:"currentColor"}))});const HI=k.forwardRef((e,t)=>{var{level:n=1,children:r,className:o,onHeaderClick:a}=e,s=ft(e,["level","children","className","onHeaderClick"]);const u=k.useContext(W_);return u===null?(console.error("<Accordion.Header> has to be used within an <Accordion.Item>"),null):$.createElement(ik,Object.assign({},s,{ref:t,size:"xsmall",level:n,className:qe(yo.header,o)}),$.createElement("button",{type:"button",onClick:c=>{u.toggleOpen(),a&&a(c)},"aria-expanded":u.open,"aria-controls":u.contentId},$.createElement(WI,{"aria-hidden":!0,className:yo.expandIcon}),$.createElement(ok,{as:"span",size:"small"},r)))}),ar=MI;var n0,r0,o0,i0,a0,s0,l0,u0,sm,c0,d0,f0,h0,p0,m0,_0,g0;ar.Header=HI,ar.Content=FI,ar.Item=DI,ar.Header.displayName="Accordion.Header",ar.Content.displayName="Accordion.Content",ar.Item.displayName="Accordion.Item",function(e){e.Xsmall="xsmall",e.Small="small"}(n0||(n0={})),function(e){e.Default="default",e.Error="error",e.Disabled="disabled",e.ReadOnlyInfo="readonlyInfo",e.ReadOnlyConfirm="readonlyConfirm"}(r0||(r0={})),function(e){e.ReadOnlyInfo="readonlyInfo",e.ReadOnlyConfirm="readonlyConfirm"}(o0||(o0={})),function(e){e.None="none",e.Error="error",e.Search="search"}(i0||(i0={})),function(e){e.Primary="primary",e.Secondary="secondary"}(a0||(a0={})),function(e){e.Small="small",e.Medium="medium",e.Large="large"}(s0||(s0={})),function(e){e.Primary="primary",e.Secondary="secondary",e.Success="success",e.Danger="danger",e.Inverted="inverted"}(l0||(l0={})),function(e){e.Filled="filled",e.Outline="outline",e.Quiet="quiet"}(u0||(u0={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(sm||(sm={})),function(e){e.Xsmall="xsmall",e.Small="small"}(c0||(c0={})),function(e){e.Xsmall="xsmall",e.Small="small"}(d0||(d0={})),function(e){e.Xsmall="xsmall",e.Small="small"}(f0||(f0={})),function(e){e.Xsmall="xsmall",e.Small="small"}(h0||(h0={})),function(e){e.Default="default",e.Info="info",e.Warning="warning",e.Danger="danger"}(p0||(p0={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(m0||(m0={})),function(e){e.XLarge="xlarge",e.Large="large",e.Medium="medium",e.Small="small",e.XSmall="xsmall"}(_0||(_0={})),function(e){e[e.H1=1]="H1",e[e.H2=2]="H2",e[e.H3=3]="H3",e[e.H4=4]="H4",e[e.H5=5]="H5",e[e.H6=6]="H6"}(g0||(g0={}));let v0=0;function VI(e){const[t,n]=k.useState(e),r=e||t;return k.useEffect(()=>{t==null&&(v0+=1,n(`aksel-icon-${v0}`))},[t]),r}const y0=$["useId"];function H_(e){var t;if(y0!==void 0){const n=y0();return e??n.replace(/(:)/g,"")}return(t=VI(e))!==null&&t!==void 0?t:""}var ZI=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const qI=k.forwardRef((e,t)=>{var{title:n,titleId:r}=e,o=ZI(e,["title","titleId"]);let a=H_();return a=n?r||"title-"+a:void 0,k.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},o),n?k.createElement("title",{id:a},n):null,k.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06Z",fill:"currentColor"}))}),KI=qI;var QI=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const GI=k.forwardRef((e,t)=>{var{title:n,titleId:r}=e,o=QI(e,["title","titleId"]);let a=H_();return a=n?r||"title-"+a:void 0,k.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},o),n?k.createElement("title",{id:a},n):null,k.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.25 7A.75.75 0 0 1 4 6.25h16a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 7Zm3 5a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM10 16.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z",fill:"currentColor"}))}),_h=GI;var JI=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const YI=k.forwardRef((e,t)=>{var{title:n,titleId:r}=e,o=JI(e,["title","titleId"]);let a=H_();return a=n?r||"title-"+a:void 0,k.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},o),n?k.createElement("title",{id:a},n):null,k.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94 6.53 5.47Z",fill:"currentColor"}))}),XI=YI;var lm={},ez={get exports(){return lm},set exports(e){lm=e}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],o=0;o<arguments.length;o++){var a=arguments[o];if(a){var s=typeof a;if(s==="string"||s==="number")r.push(a);else if(Array.isArray(a)){if(a.length){var u=n.apply(null,a);u&&r.push(u)}}else if(s==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){r.push(a.toString());continue}for(var c in a)t.call(a,c)&&a[c]&&r.push(c)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(ez);const bi=lm;function Ac(e,t){if(e===t)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(const[n]of e.entries())if(e[n]!==t[n])return!1;return!0}const tz=e=>{const t=a=>window?.matchMedia(a).matches??!1,[n,r]=k.useState(t(e)),o=()=>{r(t(e))};return k.useEffect(()=>{const a=window.matchMedia(e);return o(),a.addEventListener("change",o),()=>{a.removeEventListener("change",o)}},[e]),n};function um(e){const t=k.useRef();return k.useEffect(()=>{t.current=e},[e]),t.current}const nz=(e,t)=>e.filter(n=>n.label.toLowerCase().includes(t.toLocaleLowerCase())),rz="_optionDisplay_1lnxj_1",oz="_optionList_1lnxj_15",iz="_option_1lnxj_1",az="_propagationStopper_1lnxj_69",sz="_scrollContainer_1lnxj_79",lz="_searchField_1lnxj_91",Ui={optionDisplay:rz,optionList:oz,option:iz,propagationStopper:az,scrollContainer:sz,searchField:lz},uz=({options:e,values:t,searchable:n,compact:r=!0,onValueChange:o})=>{const[a,s]=k.useState(t??[]),[u,c]=k.useState(e),{t:f}=vl("common"),p=um(t);k.useEffect(()=>{Ac(t,p)||s(t??[])},[t]);const h=um(e);k.useEffect(()=>{Ac(e,h)||c(e)},[e]);const _=(P,g)=>{s(P),o?.(P)},v=P=>{a?.includes(P)?_(a.filter(g=>g!==P)):_([...a,P])},y=P=>{c(nz(e,P))},b=u.map((P,g)=>{const x=a?.includes(P.value);return Z.jsx("button",{className:Ui.option,onClick:()=>{v(P.value)},tabIndex:-1,children:Z.jsx("div",{className:Ui.propagationStopper,tabIndex:-1,onClick:S=>{S.stopPropagation()},onKeyDown:S=>{S.key!=="Escape"&&S.stopPropagation()},children:Z.jsx(Mt,{onChange:()=>{v(P.value)},checked:x,label:P.label,compact:r})})},P.value)});return Z.jsxs("div",{className:Ui.optionDisplay,children:[n&&Z.jsx("div",{className:Ui.searchField,children:Z.jsx(OL,{"aria-label":String(f("common.search")),onChange:P=>{y(P.target.value)}})}),Z.jsx("div",{className:Ui.scrollContainer,tabIndex:-1,children:Z.jsx("div",{className:Ui.optionList,children:b})})]})},cz="_popoverContent_12aed_5",dz="_modalHeader_12aed_21",fz="_optionSection_12aed_31",hz="_modal_12aed_21",pz="_filterActions_12aed_51",mz="_resetButton_12aed_79",qo={popoverContent:cz,modalHeader:dz,optionSection:fz,modal:hz,filterActions:pz,resetButton:mz};function ak(e){return e.split("-")[1]}function _z(e){return e==="y"?"height":"width"}function Fd(e){return e.split("-")[0]}function V_(e){return["top","bottom"].includes(Fd(e))?"x":"y"}function b0(e,t,n){let{reference:r,floating:o}=e;const a=r.x+r.width/2-o.width/2,s=r.y+r.height/2-o.height/2,u=V_(t),c=_z(u),f=r[c]/2-o[c]/2,p=u==="x";let h;switch(Fd(t)){case"top":h={x:a,y:r.y-o.height};break;case"bottom":h={x:a,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:s};break;case"left":h={x:r.x-o.width,y:s};break;default:h={x:r.x,y:r.y}}switch(ak(t)){case"start":h[u]-=f*(n&&p?-1:1);break;case"end":h[u]+=f*(n&&p?-1:1)}return h}const gz=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:a=[],platform:s}=n,u=a.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(t));let f=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:p,y:h}=b0(f,r,c),_=r,v={},y=0;for(let b=0;b<u.length;b++){const{name:P,fn:g}=u[b],{x,y:S,data:E,reset:R}=await g({x:p,y:h,initialPlacement:r,placement:_,strategy:o,middlewareData:v,rects:f,platform:s,elements:{reference:e,floating:t}});p=x??p,h=S??h,v={...v,[P]:{...v[P],...E}},R&&y<=50&&(y++,typeof R=="object"&&(R.placement&&(_=R.placement),R.rects&&(f=R.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):R.rects),{x:p,y:h}=b0(f,_,c)),b=-1)}return{x:p,y:h,placement:_,strategy:o,middlewareData:v}};function vz(e){return typeof e!="number"?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(e):{top:e,right:e,bottom:e,left:e}}function Ic(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function yz(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:a,rects:s,elements:u,strategy:c}=e,{boundary:f="clippingAncestors",rootBoundary:p="viewport",elementContext:h="floating",altBoundary:_=!1,padding:v=0}=t,y=vz(v),b=u[_?h==="floating"?"reference":"floating":h],P=Ic(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(b)))==null||n?b:b.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(u.floating)),boundary:f,rootBoundary:p,strategy:c})),g=h==="floating"?{...s.floating,x:r,y:o}:s.reference,x=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u.floating)),S=await(a.isElement==null?void 0:a.isElement(x))&&await(a.getScale==null?void 0:a.getScale(x))||{x:1,y:1},E=Ic(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:g,offsetParent:x,strategy:c}):g);return{top:(P.top-E.top+y.top)/S.y,bottom:(E.bottom-P.bottom+y.bottom)/S.y,left:(P.left-E.left+y.left)/S.x,right:(E.right-P.right+y.right)/S.x}}const bz=Math.min,xz=Math.max;function x0(e,t,n){return xz(e,bz(t,n))}const wz=["top","right","bottom","left"];wz.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);const Sz=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,o=await async function(a,s){const{placement:u,platform:c,elements:f}=a,p=await(c.isRTL==null?void 0:c.isRTL(f.floating)),h=Fd(u),_=ak(u),v=V_(u)==="x",y=["left","top"].includes(h)?-1:1,b=p&&v?-1:1,P=typeof s=="function"?s(a):s;let{mainAxis:g,crossAxis:x,alignmentAxis:S}=typeof P=="number"?{mainAxis:P,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...P};return _&&typeof S=="number"&&(x=_==="end"?-1*S:S),v?{x:x*b,y:g*y}:{x:g*y,y:x*b}}(t,e);return{x:n+o.x,y:r+o.y,data:o}}}};function kz(e){return e==="x"?"y":"x"}const Pz=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:a=!0,crossAxis:s=!1,limiter:u={fn:P=>{let{x:g,y:x}=P;return{x:g,y:x}}},...c}=e,f={x:n,y:r},p=await yz(t,c),h=V_(Fd(o)),_=kz(h);let v=f[h],y=f[_];if(a){const P=h==="y"?"bottom":"right";v=x0(v+p[h==="y"?"top":"left"],v,v-p[P])}if(s){const P=_==="y"?"bottom":"right";y=x0(y+p[_==="y"?"top":"left"],y,y-p[P])}const b=u.fn({...t,[h]:v,[_]:y});return{...b,data:{x:b.x-n,y:b.y-r}}}}};function wn(e){var t;return((t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Un(e){return wn(e).getComputedStyle(e)}function sk(e){return e instanceof wn(e).Node}function To(e){return sk(e)?(e.nodeName||"").toLowerCase():""}function Vn(e){return e instanceof wn(e).HTMLElement}function an(e){return e instanceof wn(e).Element}function w0(e){return typeof ShadowRoot>"u"?!1:e instanceof wn(e).ShadowRoot||e instanceof ShadowRoot}function ol(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Un(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function Cz(e){return["table","td","th"].includes(To(e))}function cm(e){const t=Z_(),n=Un(e);return n.transform!=="none"||n.perspective!=="none"||!t&&!!n.backdropFilter&&n.backdropFilter!=="none"||!t&&!!n.filter&&n.filter!=="none"||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function Z_(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function $d(e){return["html","body","#document"].includes(To(e))}const S0=Math.min,As=Math.max,zc=Math.round;function lk(e){const t=Un(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Vn(e),a=o?e.offsetWidth:n,s=o?e.offsetHeight:r,u=zc(n)!==a||zc(r)!==s;return u&&(n=a,r=s),{width:n,height:r,fallback:u}}function uk(e){return an(e)?e:e.contextElement}const ck={x:1,y:1};function _a(e){const t=uk(e);if(!Vn(t))return ck;const n=t.getBoundingClientRect(),{width:r,height:o,fallback:a}=lk(t);let s=(a?zc(n.width):n.width)/r,u=(a?zc(n.height):n.height)/o;return s&&Number.isFinite(s)||(s=1),u&&Number.isFinite(u)||(u=1),{x:s,y:u}}const k0={x:0,y:0};function dk(e,t,n){var r,o;if(t===void 0&&(t=!0),!Z_())return k0;const a=e?wn(e):window;return!n||t&&n!==a?k0:{x:((r=a.visualViewport)==null?void 0:r.offsetLeft)||0,y:((o=a.visualViewport)==null?void 0:o.offsetTop)||0}}function xi(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),a=uk(e);let s=ck;t&&(r?an(r)&&(s=_a(r)):s=_a(e));const u=dk(a,n,r);let c=(o.left+u.x)/s.x,f=(o.top+u.y)/s.y,p=o.width/s.x,h=o.height/s.y;if(a){const _=wn(a),v=r&&an(r)?wn(r):r;let y=_.frameElement;for(;y&&r&&v!==_;){const b=_a(y),P=y.getBoundingClientRect(),g=getComputedStyle(y);P.x+=(y.clientLeft+parseFloat(g.paddingLeft))*b.x,P.y+=(y.clientTop+parseFloat(g.paddingTop))*b.y,c*=b.x,f*=b.y,p*=b.x,h*=b.y,c+=P.x,f+=P.y,y=wn(y).frameElement}}return Ic({width:p,height:h,x:c,y:f})}function bo(e){return((sk(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ud(e){return an(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function fk(e){return xi(bo(e)).left+Ud(e).scrollLeft}function Ta(e){if(To(e)==="html")return e;const t=e.assignedSlot||e.parentNode||w0(e)&&e.host||bo(e);return w0(t)?t.host:t}function hk(e){const t=Ta(e);return $d(t)?t.ownerDocument.body:Vn(t)&&ol(t)?t:hk(t)}function xo(e,t){var n;t===void 0&&(t=[]);const r=hk(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),a=wn(r);return o?t.concat(a,a.visualViewport||[],ol(r)?r:[]):t.concat(r,xo(r))}function P0(e,t,n){let r;if(t==="viewport")r=function(o,a){const s=wn(o),u=bo(o),c=s.visualViewport;let f=u.clientWidth,p=u.clientHeight,h=0,_=0;if(c){f=c.width,p=c.height;const v=Z_();(!v||v&&a==="fixed")&&(h=c.offsetLeft,_=c.offsetTop)}return{width:f,height:p,x:h,y:_}}(e,n);else if(t==="document")r=function(o){const a=bo(o),s=Ud(o),u=o.ownerDocument.body,c=As(a.scrollWidth,a.clientWidth,u.scrollWidth,u.clientWidth),f=As(a.scrollHeight,a.clientHeight,u.scrollHeight,u.clientHeight);let p=-s.scrollLeft+fk(o);const h=-s.scrollTop;return Un(u).direction==="rtl"&&(p+=As(a.clientWidth,u.clientWidth)-c),{width:c,height:f,x:p,y:h}}(bo(e));else if(an(t))r=function(o,a){const s=xi(o,!0,a==="fixed"),u=s.top+o.clientTop,c=s.left+o.clientLeft,f=Vn(o)?_a(o):{x:1,y:1};return{width:o.clientWidth*f.x,height:o.clientHeight*f.y,x:c*f.x,y:u*f.y}}(t,n);else{const o=dk(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return Ic(r)}function pk(e,t){const n=Ta(e);return!(n===t||!an(n)||$d(n))&&(Un(n).position==="fixed"||pk(n,t))}function C0(e,t){return Vn(e)&&Un(e).position!=="fixed"?t?t(e):e.offsetParent:null}function E0(e,t){const n=wn(e);if(!Vn(e))return n;let r=C0(e,t);for(;r&&Cz(r)&&Un(r).position==="static";)r=C0(r,t);return r&&(To(r)==="html"||To(r)==="body"&&Un(r).position==="static"&&!cm(r))?n:r||function(o){let a=Ta(o);for(;Vn(a)&&!$d(a);){if(cm(a))return a;a=Ta(a)}return null}(e)||n}function Ez(e,t,n){const r=Vn(t),o=bo(t),a=n==="fixed",s=xi(e,!0,a,t);let u={scrollLeft:0,scrollTop:0};const c={x:0,y:0};if(r||!r&&!a)if((To(t)!=="body"||ol(o))&&(u=Ud(t)),Vn(t)){const f=xi(t,!0,a,t);c.x=f.x+t.clientLeft,c.y=f.y+t.clientTop}else o&&(c.x=fk(o));return{x:s.left+u.scrollLeft-c.x,y:s.top+u.scrollTop-c.y,width:s.width,height:s.height}}const Oz={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const a=n==="clippingAncestors"?function(f,p){const h=p.get(f);if(h)return h;let _=xo(f).filter(P=>an(P)&&To(P)!=="body"),v=null;const y=Un(f).position==="fixed";let b=y?Ta(f):f;for(;an(b)&&!$d(b);){const P=Un(b),g=cm(b);g||P.position!=="fixed"||(v=null),(y?!g&&!v:!g&&P.position==="static"&&v&&["absolute","fixed"].includes(v.position)||ol(b)&&!g&&pk(f,b))?_=_.filter(x=>x!==b):v=P,b=Ta(b)}return p.set(f,_),_}(t,this._c):[].concat(n),s=[...a,r],u=s[0],c=s.reduce((f,p)=>{const h=P0(t,p,o);return f.top=As(h.top,f.top),f.right=S0(h.right,f.right),f.bottom=S0(h.bottom,f.bottom),f.left=As(h.left,f.left),f},P0(t,u,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=Vn(n),a=bo(n);if(n===a)return t;let s={scrollLeft:0,scrollTop:0},u={x:1,y:1};const c={x:0,y:0};if((o||!o&&r!=="fixed")&&((To(n)!=="body"||ol(a))&&(s=Ud(n)),Vn(n))){const f=xi(n);u=_a(n),c.x=f.x+n.clientLeft,c.y=f.y+n.clientTop}return{width:t.width*u.x,height:t.height*u.y,x:t.x*u.x-s.scrollLeft*u.x+c.x,y:t.y*u.y-s.scrollTop*u.y+c.y}},isElement:an,getDimensions:function(e){return lk(e)},getOffsetParent:E0,getDocumentElement:bo,getScale:_a,async getElementRects(e){let{reference:t,floating:n,strategy:r}=e;const o=this.getOffsetParent||E0,a=this.getDimensions;return{reference:Ez(t,await o(n),r),floating:{x:0,y:0,...await a(n)}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>Un(e).direction==="rtl"};function Rz(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:a=!0,elementResize:s=!0,animationFrame:u=!1}=r,c=o||a?[...an(e)?xo(e):e.contextElement?xo(e.contextElement):[],...xo(t)]:[];c.forEach(_=>{const v=!an(_)&&_.toString().includes("V");!o||u&&!v||_.addEventListener("scroll",n,{passive:!0}),a&&_.addEventListener("resize",n)});let f,p=null;s&&(p=new ResizeObserver(()=>{n()}),an(e)&&!u&&p.observe(e),an(e)||!e.contextElement||u||p.observe(e.contextElement),p.observe(t));let h=u?xi(e):null;return u&&function _(){const v=xi(e);!h||v.x===h.x&&v.y===h.y&&v.width===h.width&&v.height===h.height||n(),h=v,f=requestAnimationFrame(_)}(),n(),()=>{var _;c.forEach(v=>{o&&v.removeEventListener("scroll",n),a&&v.removeEventListener("resize",n)}),(_=p)==null||_.disconnect(),p=null,u&&cancelAnimationFrame(f)}}const Tz=(e,t,n)=>{const r=new Map,o={platform:Oz,...n},a={...o.platform,_c:r};return gz(e,t,{...o,platform:a})};var zu=typeof document<"u"?k.useLayoutEffect:k.useEffect;function Nc(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Nc(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const a=o[r];if(!(a==="_owner"&&e.$$typeof)&&!Nc(e[a],t[a]))return!1}return!0}return e!==e&&t!==t}function mk(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function O0(e,t){const n=mk(e);return Math.round(t*n)/n}function R0(e){const t=k.useRef(e);return zu(()=>{t.current=e}),t}function Lz(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:a,floating:s}={},transform:u=!0,whileElementsMounted:c,open:f}=e,[p,h]=k.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[_,v]=k.useState(r);Nc(_,r)||v(r);const[y,b]=k.useState(null),[P,g]=k.useState(null),x=k.useCallback(q=>{q!=T.current&&(T.current=q,b(q))},[b]),S=k.useCallback(q=>{q!==N.current&&(N.current=q,g(q))},[g]),E=a||y,R=s||P,T=k.useRef(null),N=k.useRef(null),j=k.useRef(p),W=R0(c),M=R0(o),H=k.useCallback(()=>{if(!T.current||!N.current)return;const q={placement:t,strategy:n,middleware:_};M.current&&(q.platform=M.current),Tz(T.current,N.current,q).then(se=>{const B={...se,isPositioned:!0};G.current&&!Nc(j.current,B)&&(j.current=B,ko.flushSync(()=>{h(B)}))})},[_,t,n,M]);zu(()=>{f===!1&&j.current.isPositioned&&(j.current.isPositioned=!1,h(q=>({...q,isPositioned:!1})))},[f]);const G=k.useRef(!1);zu(()=>(G.current=!0,()=>{G.current=!1}),[]),zu(()=>{if(E&&(T.current=E),R&&(N.current=R),E&&R){if(W.current)return W.current(E,R,H);H()}},[E,R,H,W]);const K=k.useMemo(()=>({reference:T,floating:N,setReference:x,setFloating:S}),[x,S]),U=k.useMemo(()=>({reference:E,floating:R}),[E,R]),re=k.useMemo(()=>{const q={position:n,left:0,top:0};if(!U.floating)return q;const se=O0(U.floating,p.x),B=O0(U.floating,p.y);return u?{...q,transform:"translate("+se+"px, "+B+"px)",...mk(U.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:se,top:B}},[n,u,U.floating,p.x,p.y]);return k.useMemo(()=>({...p,update:H,refs:K,elements:U,floatingStyles:re}),[p,H,K,U,re])}var Az=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Wi=new WeakMap,fu=new WeakMap,hu={},gh=0,_k=function(e){return e&&(e.host||_k(e.parentNode))},Iz=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=_k(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},zz=function(e,t,n,r){var o=Iz(t,Array.isArray(e)?e:[e]);hu[n]||(hu[n]=new WeakMap);var a=hu[n],s=[],u=new Set,c=new Set(o),f=function(h){!h||u.has(h)||(u.add(h),f(h.parentNode))};o.forEach(f);var p=function(h){!h||c.has(h)||Array.prototype.forEach.call(h.children,function(_){if(u.has(_))p(_);else{var v=_.getAttribute(r),y=v!==null&&v!=="false",b=(Wi.get(_)||0)+1,P=(a.get(_)||0)+1;Wi.set(_,b),a.set(_,P),s.push(_),b===1&&y&&fu.set(_,!0),P===1&&_.setAttribute(n,"true"),y||_.setAttribute(r,"true")}})};return p(t),u.clear(),gh++,function(){s.forEach(function(h){var _=Wi.get(h)-1,v=a.get(h)-1;Wi.set(h,_),a.set(h,v),_||(fu.has(h)||h.removeAttribute(r),fu.delete(h)),v||h.removeAttribute(n)}),gh--,gh||(Wi=new WeakMap,Wi=new WeakMap,fu=new WeakMap,hu={})}},Nz=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||Az(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),zz(r,o,n,"aria-hidden")):function(){return null}};/*!
* tabbable 6.1.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Bz=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],dm=Bz.join(","),gk=typeof Element>"u",il=gk?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Bc=!gk&&Element.prototype.getRootNode?function(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}:function(e){return e?.ownerDocument},Mc=function e(t,n){var r;n===void 0&&(n=!0);var o=t==null||(r=t.getAttribute)===null||r===void 0?void 0:r.call(t,"inert"),a=o===""||o==="true",s=a||n&&t&&e(t.parentNode);return s},Mz=function(t){var n,r=t==null||(n=t.getAttribute)===null||n===void 0?void 0:n.call(t,"contenteditable");return r===""||r==="true"},Dz=function(t,n,r){if(Mc(t))return[];var o=Array.prototype.slice.apply(t.querySelectorAll(dm));return n&&il.call(t,dm)&&o.unshift(t),o=o.filter(r),o},jz=function e(t,n,r){for(var o=[],a=Array.from(t);a.length;){var s=a.shift();if(!Mc(s,!1))if(s.tagName==="SLOT"){var u=s.assignedElements(),c=u.length?u:s.children,f=e(c,!0,r);r.flatten?o.push.apply(o,f):o.push({scopeParent:s,candidates:f})}else{var p=il.call(s,dm);p&&r.filter(s)&&(n||!t.includes(s))&&o.push(s);var h=s.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(s),_=!Mc(h,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(s));if(h&&_){var v=e(h===!0?s.children:h.children,!0,r);r.flatten?o.push.apply(o,v):o.push({scopeParent:s,candidates:v})}else a.unshift.apply(a,s.children)}}return o},vk=function(t,n){return t.tabIndex<0&&(n||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||Mz(t))&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex},Fz=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},yk=function(t){return t.tagName==="INPUT"},$z=function(t){return yk(t)&&t.type==="hidden"},Uz=function(t){var n=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(r){return r.tagName==="SUMMARY"});return n},Wz=function(t,n){for(var r=0;r<t.length;r++)if(t[r].checked&&t[r].form===n)return t[r]},Hz=function(t){if(!t.name)return!0;var n=t.form||Bc(t),r=function(u){return n.querySelectorAll('input[type="radio"][name="'+u+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=r(window.CSS.escape(t.name));else try{o=r(t.name)}catch(s){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",s.message),!1}var a=Wz(o,t.form);return!a||a===t},Vz=function(t){return yk(t)&&t.type==="radio"},Zz=function(t){return Vz(t)&&!Hz(t)},qz=function(t){var n,r=t&&Bc(t),o=(n=r)===null||n===void 0?void 0:n.host,a=!1;if(r&&r!==t){var s,u,c;for(a=!!((s=o)!==null&&s!==void 0&&(u=s.ownerDocument)!==null&&u!==void 0&&u.contains(o)||t!=null&&(c=t.ownerDocument)!==null&&c!==void 0&&c.contains(t));!a&&o;){var f,p,h;r=Bc(o),o=(f=r)===null||f===void 0?void 0:f.host,a=!!((p=o)!==null&&p!==void 0&&(h=p.ownerDocument)!==null&&h!==void 0&&h.contains(o))}}return a},T0=function(t){var n=t.getBoundingClientRect(),r=n.width,o=n.height;return r===0&&o===0},Kz=function(t,n){var r=n.displayCheck,o=n.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var a=il.call(t,"details>summary:first-of-type"),s=a?t.parentElement:t;if(il.call(s,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="legacy-full"){if(typeof o=="function"){for(var u=t;t;){var c=t.parentElement,f=Bc(t);if(c&&!c.shadowRoot&&o(c)===!0)return T0(t);t.assignedSlot?t=t.assignedSlot:!c&&f!==t.ownerDocument?t=f.host:t=c}t=u}if(qz(t))return!t.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return T0(t);return!1},Qz=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r=0;r<n.children.length;r++){var o=n.children.item(r);if(o.tagName==="LEGEND")return il.call(n,"fieldset[disabled] *")?!0:!o.contains(t)}return!0}n=n.parentElement}return!1},Gz=function(t,n){return!(n.disabled||Mc(n)||$z(n)||Kz(n,t)||Uz(n)||Qz(n))},L0=function(t,n){return!(Zz(n)||vk(n)<0||!Gz(t,n))},Jz=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},Yz=function e(t){var n=[],r=[];return t.forEach(function(o,a){var s=!!o.scopeParent,u=s?o.scopeParent:o,c=vk(u,s),f=s?e(o.candidates):u;c===0?s?n.push.apply(n,f):n.push(u):r.push({documentOrder:a,tabIndex:c,item:o,isScope:s,content:f})}),r.sort(Fz).reduce(function(o,a){return a.isScope?o.push.apply(o,a.content):o.push(a.content),o},[]).concat(n)},fm=function(t,n){n=n||{};var r;return n.getShadowRoot?r=jz([t],n.includeContainer,{filter:L0.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:Jz}):r=Dz(t,n.includeContainer,L0.bind(null,n)),Yz(r)};function al(){return al=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},al.apply(this,arguments)}var Lr=typeof document<"u"?k.useLayoutEffect:k.useEffect;let vh=!1,Xz=0;const A0=()=>"floating-ui-"+Xz++;function eN(){const[e,t]=k.useState(()=>vh?A0():void 0);return Lr(()=>{e==null&&t(A0())},[]),k.useEffect(()=>{vh||(vh=!0)},[]),e}const tN=Zc["useId".toString()],bk=tN||eN;function nN(){const e=new Map;return{emit(t,n){var r;(r=e.get(t))==null||r.forEach(o=>o(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,((r=e.get(t))==null?void 0:r.filter(o=>o!==n))||[])}}}const rN=k.createContext(null),oN=k.createContext(null),iN=()=>{var e;return((e=k.useContext(rN))==null?void 0:e.id)||null},q_=()=>k.useContext(oN);function Er(e){return e?.ownerDocument||document}function xk(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function aN(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:n,version:r}=t;return n+"/"+r}).join(" "):navigator.userAgent}function Wd(e){return Er(e).defaultView||window}function li(e){return e?e instanceof Wd(e).Element:!1}function sl(e){return e?e instanceof Wd(e).HTMLElement:!1}function sN(e){if(typeof ShadowRoot>"u")return!1;const t=Wd(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function lN(e){if(e.mozInputSource===0&&e.isTrusted)return!0;const t=/Android/i;return(t.test(xk())||t.test(aN()))&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function uN(e){return e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType!=="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0}function cN(){return/apple/i.test(navigator.vendor)}function I0(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function In(e,t){if(!e||!t)return!1;const n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&sN(n)){let r=t;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function yh(e){const t=k.useRef(e);return Lr(()=>{t.current=e}),t}function qi(e){let t=e.activeElement;for(;((n=t)==null||(r=n.shadowRoot)==null?void 0:r.activeElement)!=null;){var n,r;t=t.shadowRoot.activeElement}return t}let z0=0;function Ko(e,t){t===void 0&&(t={});const{preventScroll:n=!1,cancelPrevious:r=!0,sync:o=!1}=t;r&&cancelAnimationFrame(z0);const a=()=>e?.focus({preventScroll:n});o?a():z0=requestAnimationFrame(a)}function dN(e,t){var n;let r=[],o=(n=e.find(a=>a.id===t))==null?void 0:n.parentId;for(;o;){const a=e.find(s=>s.id===o);o=a?.parentId,a&&(r=r.concat(a))}return r}function Is(e,t){let n=e.filter(o=>{var a;return o.parentId===t&&((a=o.context)==null?void 0:a.open)}),r=n;for(;r.length;)r=e.filter(o=>{var a;return(a=r)==null?void 0:a.some(s=>{var u;return o.parentId===s.id&&((u=o.context)==null?void 0:u.open)})}),n=n.concat(r);return n}function wk(e){return"composedPath"in e?e.composedPath()[0]:e.target}const fN="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Sk(e){return sl(e)&&e.matches(fN)}function bh(e){e.preventDefault(),e.stopPropagation()}const hm=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function kk(e,t){const n=fm(e,hm());t==="prev"&&n.reverse();const r=n.indexOf(qi(Er(e)));return n.slice(r+1)[0]}function hN(){return kk(document.body,"next")}function pN(){return kk(document.body,"prev")}function N0(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!In(n,r)}const Pk={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};let mN;function B0(e){e.key==="Tab"&&(e.target,clearTimeout(mN))}const M0=k.forwardRef(function(t,n){const[r,o]=k.useState();return Lr(()=>(cN()&&o("button"),document.addEventListener("keydown",B0),()=>{document.removeEventListener("keydown",B0)}),[]),k.createElement("span",al({},t,{ref:n,tabIndex:0,role:r,"aria-hidden":r?void 0:!0,"data-floating-ui-focus-guard":"",style:Pk}))}),_N=k.createContext(null),gN=()=>k.useContext(_N),vN=k.forwardRef(function(t,n){return k.createElement("button",al({},t,{type:"button",ref:n,tabIndex:-1,style:Pk}))});function D0(e){const{context:t,children:n,order:r=["content"],guards:o=!0,initialFocus:a=0,returnFocus:s=!0,modal:u=!0,visuallyHiddenDismiss:c=!1,closeOnFocusOut:f=!0}=e,{open:p,refs:h,nodeId:_,onOpenChange:v,events:y,dataRef:b,elements:{domReference:P,floating:g}}=t,x=yh(r),S=yh(a),E=yh(s),R=q_(),T=gN(),N=typeof a=="number"&&a<0,j=k.useRef(null),W=k.useRef(null),M=k.useRef(!1),H=k.useRef(null),G=k.useRef(!1),K=T!=null,U=P&&P.getAttribute("role")==="combobox"&&Sk(P),re=k.useCallback(function(Y){return Y===void 0&&(Y=g),Y?fm(Y,hm()):[]},[g]),q=k.useCallback(Y=>{const A=re(Y);return x.current.map(O=>P&&O==="reference"?P:g&&O==="floating"?g:A).filter(Boolean).flat()},[P,g,x,re]);k.useEffect(()=>{if(!u)return;function Y(O){if(O.key==="Tab"){In(g,qi(Er(g)))&&re().length===0&&!U&&bh(O);const z=q(),D=wk(O);x.current[0]==="reference"&&D===P&&(bh(O),O.shiftKey?Ko(z[z.length-1]):Ko(z[1])),x.current[1]==="floating"&&D===g&&O.shiftKey&&(bh(O),Ko(z[0]))}}const A=Er(g);return A.addEventListener("keydown",Y),()=>{A.removeEventListener("keydown",Y)}},[P,g,u,x,h,U,re,q]),k.useEffect(()=>{if(!f)return;function Y(){G.current=!0,setTimeout(()=>{G.current=!1})}function A(O){const z=O.relatedTarget;queueMicrotask(()=>{const D=!(In(P,z)||In(g,z)||In(z,g)||In(T?.portalNode,z)||z!=null&&z.hasAttribute("data-floating-ui-focus-guard")||R&&(Is(R.nodesRef.current,_).find(V=>{var te,ie;return In((te=V.context)==null?void 0:te.elements.floating,z)||In((ie=V.context)==null?void 0:ie.elements.domReference,z)})||dN(R.nodesRef.current,_).find(V=>{var te,ie;return((te=V.context)==null?void 0:te.elements.floating)===z||((ie=V.context)==null?void 0:ie.elements.domReference)===z})));z&&D&&!G.current&&z!==H.current&&(M.current=!0,v(!1))})}if(g&&sl(P))return P.addEventListener("focusout",A),P.addEventListener("pointerdown",Y),!u&&g.addEventListener("focusout",A),()=>{P.removeEventListener("focusout",A),P.removeEventListener("pointerdown",Y),!u&&g.removeEventListener("focusout",A)}},[P,g,u,_,R,T,v,f]),k.useEffect(()=>{var Y;const A=Array.from((T==null||(Y=T.portalNode)==null?void 0:Y.querySelectorAll("[data-floating-ui-portal]"))||[]);function O(){return[j.current,W.current].filter(Boolean)}if(g&&u){const z=[g,...A,...O()],D=Nz(x.current.includes("reference")||U?z.concat(P||[]):z);return()=>{D()}}},[P,g,u,x,T,U]),k.useEffect(()=>{if(u&&!o&&g){const Y=[],A=hm(),O=fm(Er(g).body,A),z=q(),D=O.filter(V=>!z.includes(V));return D.forEach((V,te)=>{Y[te]=V.getAttribute("tabindex"),V.setAttribute("tabindex","-1")}),()=>{D.forEach((V,te)=>{const ie=Y[te];ie==null?V.removeAttribute("tabindex"):V.setAttribute("tabindex",ie)})}}},[g,u,o,q]),Lr(()=>{if(!g)return;const Y=Er(g),A=qi(Y);queueMicrotask(()=>{const O=q(g),z=S.current,D=(typeof z=="number"?O[z]:z.current)||g,V=In(g,A);!N&&!V&&p&&Ko(D,{preventScroll:D===g})})},[p,g,N,q,S]),Lr(()=>{if(!g)return;let Y=!1;const A=Er(g),O=qi(A),z=b.current;H.current=O;function D(V){if(V.type==="escapeKey"&&h.domReference.current&&(H.current=h.domReference.current),["referencePress","escapeKey"].includes(V.type))return;const te=V.data.returnFocus;typeof te=="object"?(M.current=!1,Y=te.preventScroll):M.current=!te}return y.on("dismiss",D),()=>{y.off("dismiss",D);const V=qi(A);(In(g,V)||R&&Is(R.nodesRef.current,_).some(ie=>{var fe;return In((fe=ie.context)==null?void 0:fe.elements.floating,V)})||z.openEvent&&["click","mousedown"].includes(z.openEvent.type))&&h.domReference.current&&(H.current=h.domReference.current),E.current&&sl(H.current)&&!M.current&&Ko(H.current,{cancelPrevious:!1,preventScroll:Y})}},[g,E,b,h,y,R,_]),Lr(()=>{if(T)return T.setFocusManagerState({...t,modal:u,closeOnFocusOut:f,open:p}),()=>{T.setFocusManagerState(null)}},[T,u,p,f,t]),Lr(()=>{if(g&&typeof MutationObserver=="function"){const Y=()=>{const O=g.getAttribute("tabindex");x.current.includes("floating")||qi(Er(g))!==h.domReference.current&&re().length===0?O!=="0"&&g.setAttribute("tabindex","0"):O!=="-1"&&g.setAttribute("tabindex","-1")};Y();const A=new MutationObserver(Y);return A.observe(g,{childList:!0,subtree:!0,attributes:!0}),()=>{A.disconnect()}}},[g,h,x,re]);function se(Y){return c&&u?k.createElement(vN,{ref:Y==="start"?j:W,onClick:()=>v(!1)},typeof c=="string"?c:"Dismiss"):null}const B=o&&!U&&(K||u);return k.createElement(k.Fragment,null,B&&k.createElement(M0,{"data-type":"inside",ref:T?.beforeInsideRef,onFocus:Y=>{if(u){const O=q();Ko(r[0]==="reference"?O[0]:O[O.length-1])}else if(T!=null&&T.preserveTabOrder&&T.portalNode)if(M.current=!1,N0(Y,T.portalNode)){const O=hN()||P;O?.focus()}else{var A;(A=T.beforeOutsideRef.current)==null||A.focus()}}}),!U&&se("start"),n,se("end"),B&&k.createElement(M0,{"data-type":"inside",ref:T?.afterInsideRef,onFocus:Y=>{if(u)Ko(q()[0]);else if(T!=null&&T.preserveTabOrder&&T.portalNode)if(f&&(M.current=!0),N0(Y,T.portalNode)){const O=pN()||P;O?.focus()}else{var A;(A=T.afterOutsideRef.current)==null||A.focus()}}}))}const pu="data-floating-ui-scroll-lock",yN=k.forwardRef(function(t,n){let{lockScroll:r=!1,...o}=t;return Lr(()=>{var a,s;if(!r||document.body.hasAttribute(pu))return;document.body.setAttribute(pu,"");const f=Math.round(document.documentElement.getBoundingClientRect().left)+document.documentElement.scrollLeft?"paddingLeft":"paddingRight",p=window.innerWidth-document.documentElement.clientWidth;if(!/iP(hone|ad|od)|iOS/.test(xk()))return Object.assign(document.body.style,{overflow:"hidden",[f]:p+"px"}),()=>{document.body.removeAttribute(pu),Object.assign(document.body.style,{overflow:"",[f]:""})};const h=((a=window.visualViewport)==null?void 0:a.offsetLeft)||0,_=((s=window.visualViewport)==null?void 0:s.offsetTop)||0,v=window.pageXOffset,y=window.pageYOffset;return Object.assign(document.body.style,{position:"fixed",overflow:"hidden",top:-(y-Math.floor(_))+"px",left:-(v-Math.floor(h))+"px",right:"0",[f]:p+"px"}),()=>{Object.assign(document.body.style,{position:"",overflow:"",top:"",left:"",right:"",[f]:""}),document.body.removeAttribute(pu),window.scrollTo(v,y)}},[r]),k.createElement("div",al({ref:n},o,{style:{position:"fixed",overflow:"auto",top:0,right:0,bottom:0,left:0,...o.style}}))});function j0(e){return sl(e.target)&&e.target.tagName==="BUTTON"}function F0(e){return Sk(e)}function bN(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,dataRef:o,elements:{domReference:a}}=e,{enabled:s=!0,event:u="click",toggle:c=!0,ignoreMouse:f=!1,keyboardHandlers:p=!0}=t,h=k.useRef(),_=k.useRef(!1);return k.useMemo(()=>s?{reference:{onPointerDown(v){h.current=v.pointerType},onMouseDown(v){v.button===0&&(I0(h.current,!0)&&f||u!=="click"&&(n?c&&(!o.current.openEvent||o.current.openEvent.type==="mousedown")&&r(!1):(v.preventDefault(),r(!0)),o.current.openEvent=v.nativeEvent))},onClick(v){if(u==="mousedown"&&h.current){h.current=void 0;return}I0(h.current,!0)&&f||(n?c&&(!o.current.openEvent||o.current.openEvent.type==="click")&&r(!1):r(!0),o.current.openEvent=v.nativeEvent)},onKeyDown(v){h.current=void 0,!(v.defaultPrevented||!p||j0(v))&&(v.key===" "&&!F0(a)&&(v.preventDefault(),_.current=!0),v.key==="Enter"&&(n?c&&r(!1):r(!0)))},onKeyUp(v){v.defaultPrevented||!p||j0(v)||F0(a)||v.key===" "&&_.current&&(_.current=!1,n?c&&r(!1):r(!0))}}}:{},[s,o,u,f,p,a,c,n,r])}const xN=Zc["useInsertionEffect".toString()],wN=xN||(e=>e());function Nu(e){const t=k.useRef(()=>{});return wN(()=>{t.current=e}),k.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.current==null?void 0:t.current(...r)},[])}function xh(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}const SN={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},kN={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},PN=e=>{var t,n;return{escapeKeyBubbles:typeof e=="boolean"?e:(t=e?.escapeKey)!=null?t:!1,outsidePressBubbles:typeof e=="boolean"?e:(n=e?.outsidePress)!=null?n:!0}};function CN(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,events:o,nodeId:a,elements:{reference:s,domReference:u,floating:c},dataRef:f}=e,{enabled:p=!0,escapeKey:h=!0,outsidePress:_=!0,outsidePressEvent:v="pointerdown",referencePress:y=!1,referencePressEvent:b="pointerdown",ancestorScroll:P=!1,bubbles:g}=t,x=q_(),S=iN()!=null,E=Nu(typeof _=="function"?_:()=>!1),R=typeof _=="function"?E:_,T=k.useRef(!1),{escapeKeyBubbles:N,outsidePressBubbles:j}=PN(g),W=Nu(H=>{if(!n||!p||!h||H.key!=="Escape")return;const G=x?Is(x.nodesRef.current,a):[];if(!N&&(H.stopPropagation(),G.length>0)){let K=!0;if(G.forEach(U=>{var re;if((re=U.context)!=null&&re.open&&!U.context.dataRef.current.__escapeKeyBubbles){K=!1;return}}),!K)return}o.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),r(!1)}),M=Nu(H=>{const G=T.current;if(T.current=!1,G||typeof R=="function"&&!R(H))return;const K=wk(H);if(sl(K)&&c){const q=K.clientWidth>0&&K.scrollWidth>K.clientWidth,se=K.clientHeight>0&&K.scrollHeight>K.clientHeight;let B=se&&H.offsetX>K.clientWidth;if(se&&Wd(c).getComputedStyle(K).direction==="rtl"&&(B=H.offsetX<=K.offsetWidth-K.clientWidth),B||q&&H.offsetY>K.clientHeight)return}const U=x&&Is(x.nodesRef.current,a).some(q=>{var se;return xh(H,(se=q.context)==null?void 0:se.elements.floating)});if(xh(H,c)||xh(H,u)||U)return;const re=x?Is(x.nodesRef.current,a):[];if(re.length>0){let q=!0;if(re.forEach(se=>{var B;if((B=se.context)!=null&&B.open&&!se.context.dataRef.current.__outsidePressBubbles){q=!1;return}}),!q)return}o.emit("dismiss",{type:"outsidePress",data:{returnFocus:S?{preventScroll:!0}:lN(H)||uN(H)}}),r(!1)});return k.useEffect(()=>{if(!n||!p)return;f.current.__escapeKeyBubbles=N,f.current.__outsidePressBubbles=j;function H(){r(!1)}const G=Er(c);h&&G.addEventListener("keydown",W),R&&G.addEventListener(v,M);let K=[];return P&&(li(u)&&(K=xo(u)),li(c)&&(K=K.concat(xo(c))),!li(s)&&s&&s.contextElement&&(K=K.concat(xo(s.contextElement)))),K=K.filter(U=>{var re;return U!==((re=G.defaultView)==null?void 0:re.visualViewport)}),K.forEach(U=>{U.addEventListener("scroll",H,{passive:!0})}),()=>{h&&G.removeEventListener("keydown",W),R&&G.removeEventListener(v,M),K.forEach(U=>{U.removeEventListener("scroll",H)})}},[f,c,u,s,h,R,v,n,r,P,p,N,j,W,M]),k.useEffect(()=>{T.current=!1},[R,v]),k.useMemo(()=>p?{reference:{onKeyDown:W,[SN[b]]:()=>{y&&(o.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),r(!1))}},floating:{onKeyDown:W,[kN[v]]:()=>{T.current=!0}}}:{},[p,o,y,v,b,r,W])}function EN(e,t){t===void 0&&(t={});const{open:n,floatingId:r}=e,{enabled:o=!0,role:a="dialog"}=t,s=bk();return k.useMemo(()=>{const u={id:r,role:a};return o?a==="tooltip"?{reference:{"aria-describedby":n?r:void 0},floating:u}:{reference:{"aria-expanded":n?"true":"false","aria-haspopup":a==="alertdialog"?"dialog":a,"aria-controls":n?r:void 0,...a==="listbox"&&{role:"combobox"},...a==="menu"&&{id:s}},floating:{...u,...a==="menu"&&{"aria-labelledby":s}}}:{}},[o,a,n,r,s])}function ON(e){var t;e===void 0&&(e={});const{open:n=!1,onOpenChange:r,nodeId:o}=e,[a,s]=k.useState(null),u=((t=e.elements)==null?void 0:t.reference)||a,c=Lz(e),f=q_(),p=Nu(r),h=k.useRef(null),_=k.useRef({}),v=k.useState(()=>nN())[0],y=bk(),b=k.useCallback(E=>{const R=li(E)?{getBoundingClientRect:()=>E.getBoundingClientRect(),contextElement:E}:E;c.refs.setReference(R)},[c.refs]),P=k.useCallback(E=>{(li(E)||E===null)&&(h.current=E,s(E)),(li(c.refs.reference.current)||c.refs.reference.current===null||E!==null&&!li(E))&&c.refs.setReference(E)},[c.refs]),g=k.useMemo(()=>({...c.refs,setReference:P,setPositionReference:b,domReference:h}),[c.refs,P,b]),x=k.useMemo(()=>({...c.elements,domReference:u}),[c.elements,u]),S=k.useMemo(()=>({...c,refs:g,elements:x,dataRef:_,nodeId:o,floatingId:y,events:v,open:n,onOpenChange:p}),[c,o,y,v,n,p,g,x]);return Lr(()=>{const E=f?.nodesRef.current.find(R=>R.id===o);E&&(E.context=S)}),k.useMemo(()=>({...c,context:S,refs:g,elements:x}),[c,g,x,S])}function wh(e,t,n){const r=new Map;return{...n==="floating"&&{tabIndex:-1},...e,...t.map(o=>o?o[n]:null).concat(e).reduce((o,a)=>(a&&Object.entries(a).forEach(s=>{let[u,c]=s;if(u.indexOf("on")===0){if(r.has(u)||r.set(u,[]),typeof c=="function"){var f;(f=r.get(u))==null||f.push(c),o[u]=function(){for(var p,h=arguments.length,_=new Array(h),v=0;v<h;v++)_[v]=arguments[v];return(p=r.get(u))==null?void 0:p.map(y=>y(..._)).find(y=>y!==void 0)}}}else o[u]=c}),o),{})}}function RN(e){e===void 0&&(e=[]);const t=e,n=k.useCallback(a=>wh(a,e,"reference"),t),r=k.useCallback(a=>wh(a,e,"floating"),t),o=k.useCallback(a=>wh(a,e,"item"),e.map(a=>a?.item));return k.useMemo(()=>({getReferenceProps:n,getFloatingProps:r,getItemProps:o}),[n,r,o])}const TN="_floatingOverlay_15gug_1",LN="_popover_15gug_9",AN="_open_15gug_29",IN="_closed_15gug_37",zN="_modal_15gug_45",Qo={floatingOverlay:TN,popover:LN,open:AN,"popover-in":"_popover-in_15gug_1",closed:IN,"popover-out":"_popover-out_15gug_1",modal:zN,"modal-in":"_modal-in_15gug_1","modal-out":"_modal-out_15gug_1"},NN=({children:e,trigger:t,isOpen:n=!1,setIsOpen:r,isModal:o=!1,className:a,...s})=>{const u=!r,[c,f]=k.useState(n??!1),p=u?c:n,h=r??f,[_,v]=k.useState(p),y=ON({open:p,onOpenChange:h,placement:"bottom-start",whileElementsMounted:Rz,middleware:[Sz(1),Pz()]}),b=y.context,P=bN(b,{enabled:u}),g=CN(b),x=EN(b),{getReferenceProps:S,getFloatingProps:E}=RN([P,g,x]),R=()=>{const j=k.isValidElement(t)?t:null;if(j){const W={ref:y.refs.setReference,...S()};return k.cloneElement(j,W)}return null},T=()=>Z.jsx(D0,{context:b,modal:!1,children:Z.jsx("div",{ref:y.refs.setFloating,className:bi(Qo.popover,a,{[Qo.open]:p,[Qo.closed]:!p}),style:{position:b.strategy,top:b.y??0,left:b.x??0},...E(),...s,children:e})}),N=()=>Z.jsx(yN,{lockScroll:!0,className:Qo.floatingOverlay,children:Z.jsx(D0,{context:b,modal:!0,children:Z.jsx("div",{ref:y.refs.setFloating,className:bi(Qo.modal,a,{[Qo.open]:p,[Qo.closed]:!p}),style:{position:"fixed",left:0},...E(),...s,children:e})})});return k.useEffect(()=>{p===_||(p?v(p):setTimeout(()=>{v(!1)},200))},[p]),Z.jsxs(Z.Fragment,{children:[R(),_&&(o?N():T())]})},BN="_icon_1bhnq_1",MN="_chevron_1bhnq_13",DN="_open_1bhnq_13",jN="_filterButton_1bhnq_21 _focusable_xgred_11",FN="_activeBadge_1bhnq_77",$N="_filterButtonContainer_1bhnq_111",Go={icon:BN,chevron:MN,open:DN,filterButton:jN,activeBadge:FN,filterButtonContainer:$N},Ck=k.forwardRef(({onClick:e,iconLeft:t,id:n,className:r,children:o,isOpen:a,numActiveFilters:s=0,...u},c)=>{const f=()=>s!==0&&Z.jsx("div",{className:Go.activeBadge,role:"status",children:s});return Z.jsxs("div",{className:bi(Go.filterButtonContainer,r),children:[f(),Z.jsxs("button",{...u,ref:c,id:n,className:Go.filterButton,onClick:e,children:[t&&Z.jsx(Sc,{svgIconComponent:t,className:Go.icon}),o,Z.jsx(Sc,{svgIconComponent:Z.jsx(KI,{}),className:bi(Go.icon,Go.chevron,{[Go.open]:a}),"aria-label":a?"Close":"Open"})]})]})});Ck.displayName="FilterButton";const Sh=({options:e,label:t,applyButtonLabel:n,resetButtonLabel:r,icon:o,values:a,searchable:s,fullScreenModal:u=!1,closeButtonAriaLabel:c,onApply:f})=>{const[p,h]=k.useState(!1),[_,v]=k.useState(a??[]),[y,b]=k.useState(a??[]),[P,g]=k.useState(!1),x=k.useId(),{t:S}=vl("common"),E=um(a);k.useEffect(()=>{a!==void 0&&!Ac(a,E)&&v(a)},[a]),k.useEffect(()=>{g(!Ac(_,y))},[y]);const R=()=>{f?.(y),v([...y]),g(!1)},T=()=>{b([])},N=()=>{p?(R(),h(!1)):h(!0)},j=()=>Z.jsxs("div",{className:qo.modalHeader,children:[Z.jsx("h3",{children:t}),Z.jsx(Tu,{variant:"quiet",color:"secondary",onClick:N,icon:Z.jsx(XI,{"aria-label":String(S("common.close"))}),"aria-label":c??String(S("common.close"))+" "+t})]});return Z.jsx(NN,{"aria-labelledby":x,trigger:Z.jsx(Ck,{id:x,onClick:N,iconLeft:o,isOpen:p,numActiveFilters:_.length,children:t}),isOpen:p,setIsOpen:N,isModal:u,children:Z.jsxs("div",{className:qo.popoverContent,children:[u&&j(),Z.jsx("div",{className:bi(qo.optionSection,{[qo.modal]:u}),children:Z.jsx(uz,{options:e,onValueChange:b,values:y,searchable:s,compact:!u})}),Z.jsxs("div",{className:bi(qo.filterActions,{[qo.modal]:u}),children:[Z.jsx(Tu,{className:qo.resetButton,size:u?"medium":"small",variant:"quiet",fullWidth:!1,"aria-disabled":y.length===0,onClick:y.length===0?void 0:T,children:r}),Z.jsx(Tu,{size:u?"medium":"small",onClick:P?N:void 0,"aria-disabled":!P,fullWidth:u,children:n})]})]})})};function Ek(e,t){return function(){return e.apply(t,arguments)}}const{toString:UN}=Object.prototype,{getPrototypeOf:K_}=Object,Hd=(e=>t=>{const n=UN.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),pr=e=>(e=e.toLowerCase(),t=>Hd(t)===e),Vd=e=>t=>typeof t===e,{isArray:Da}=Array,ll=Vd("undefined");function WN(e){return e!==null&&!ll(e)&&e.constructor!==null&&!ll(e.constructor)&&Sn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ok=pr("ArrayBuffer");function HN(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ok(e.buffer),t}const VN=Vd("string"),Sn=Vd("function"),Rk=Vd("number"),Zd=e=>e!==null&&typeof e=="object",ZN=e=>e===!0||e===!1,Bu=e=>{if(Hd(e)!=="object")return!1;const t=K_(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},qN=pr("Date"),KN=pr("File"),QN=pr("Blob"),GN=pr("FileList"),JN=e=>Zd(e)&&Sn(e.pipe),YN=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Sn(e.append)&&((t=Hd(e))==="formdata"||t==="object"&&Sn(e.toString)&&e.toString()==="[object FormData]"))},XN=pr("URLSearchParams"),eB=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function wl(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Da(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),s=a.length;let u;for(r=0;r<s;r++)u=a[r],t.call(null,e[u],u,e)}}function Tk(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Lk=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ak=e=>!ll(e)&&e!==Lk;function pm(){const{caseless:e}=Ak(this)&&this||{},t={},n=(r,o)=>{const a=e&&Tk(t,o)||o;Bu(t[a])&&Bu(r)?t[a]=pm(t[a],r):Bu(r)?t[a]=pm({},r):Da(r)?t[a]=r.slice():t[a]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&wl(arguments[r],n);return t}const tB=(e,t,n,{allOwnKeys:r}={})=>(wl(t,(o,a)=>{n&&Sn(o)?e[a]=Ek(o,n):e[a]=o},{allOwnKeys:r}),e),nB=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),rB=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},oB=(e,t,n,r)=>{let o,a,s;const u={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),a=o.length;a-- >0;)s=o[a],(!r||r(s,e,t))&&!u[s]&&(t[s]=e[s],u[s]=!0);e=n!==!1&&K_(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},iB=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},aB=e=>{if(!e)return null;if(Da(e))return e;let t=e.length;if(!Rk(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},sB=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&K_(Uint8Array)),lB=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const a=o.value;t.call(e,a[0],a[1])}},uB=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},cB=pr("HTMLFormElement"),dB=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),$0=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),fB=pr("RegExp"),Ik=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};wl(n,(o,a)=>{t(o,a,e)!==!1&&(r[a]=o)}),Object.defineProperties(e,r)},hB=e=>{Ik(e,(t,n)=>{if(Sn(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Sn(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},pB=(e,t)=>{const n={},r=o=>{o.forEach(a=>{n[a]=!0})};return Da(e)?r(e):r(String(e).split(t)),n},mB=()=>{},_B=(e,t)=>(e=+e,Number.isFinite(e)?e:t),kh="abcdefghijklmnopqrstuvwxyz",U0="0123456789",zk={DIGIT:U0,ALPHA:kh,ALPHA_DIGIT:kh+kh.toUpperCase()+U0},gB=(e=16,t=zk.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function vB(e){return!!(e&&Sn(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const yB=e=>{const t=new Array(10),n=(r,o)=>{if(Zd(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const a=Da(r)?[]:{};return wl(r,(s,u)=>{const c=n(s,o+1);!ll(c)&&(a[u]=c)}),t[o]=void 0,a}}return r};return n(e,0)},bB=pr("AsyncFunction"),xB=e=>e&&(Zd(e)||Sn(e))&&Sn(e.then)&&Sn(e.catch),ne={isArray:Da,isArrayBuffer:Ok,isBuffer:WN,isFormData:YN,isArrayBufferView:HN,isString:VN,isNumber:Rk,isBoolean:ZN,isObject:Zd,isPlainObject:Bu,isUndefined:ll,isDate:qN,isFile:KN,isBlob:QN,isRegExp:fB,isFunction:Sn,isStream:JN,isURLSearchParams:XN,isTypedArray:sB,isFileList:GN,forEach:wl,merge:pm,extend:tB,trim:eB,stripBOM:nB,inherits:rB,toFlatObject:oB,kindOf:Hd,kindOfTest:pr,endsWith:iB,toArray:aB,forEachEntry:lB,matchAll:uB,isHTMLForm:cB,hasOwnProperty:$0,hasOwnProp:$0,reduceDescriptors:Ik,freezeMethods:hB,toObjectSet:pB,toCamelCase:dB,noop:mB,toFiniteNumber:_B,findKey:Tk,global:Lk,isContextDefined:Ak,ALPHABET:zk,generateString:gB,isSpecCompliantForm:vB,toJSONObject:yB,isAsyncFn:bB,isThenable:xB};function je(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}ne.inherits(je,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ne.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Nk=je.prototype,Bk={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Bk[e]={value:e}});Object.defineProperties(je,Bk);Object.defineProperty(Nk,"isAxiosError",{value:!0});je.from=(e,t,n,r,o,a)=>{const s=Object.create(Nk);return ne.toFlatObject(e,s,function(c){return c!==Error.prototype},u=>u!=="isAxiosError"),je.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,a&&Object.assign(s,a),s};const wB=null;function mm(e){return ne.isPlainObject(e)||ne.isArray(e)}function Mk(e){return ne.endsWith(e,"[]")?e.slice(0,-2):e}function W0(e,t,n){return e?e.concat(t).map(function(o,a){return o=Mk(o),!n&&a?"["+o+"]":o}).join(n?".":""):t}function SB(e){return ne.isArray(e)&&!e.some(mm)}const kB=ne.toFlatObject(ne,{},null,function(t){return/^is[A-Z]/.test(t)});function qd(e,t,n){if(!ne.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=ne.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,P){return!ne.isUndefined(P[b])});const r=n.metaTokens,o=n.visitor||p,a=n.dots,s=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&ne.isSpecCompliantForm(t);if(!ne.isFunction(o))throw new TypeError("visitor must be a function");function f(y){if(y===null)return"";if(ne.isDate(y))return y.toISOString();if(!c&&ne.isBlob(y))throw new je("Blob is not supported. Use a Buffer instead.");return ne.isArrayBuffer(y)||ne.isTypedArray(y)?c&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function p(y,b,P){let g=y;if(y&&!P&&typeof y=="object"){if(ne.endsWith(b,"{}"))b=r?b:b.slice(0,-2),y=JSON.stringify(y);else if(ne.isArray(y)&&SB(y)||(ne.isFileList(y)||ne.endsWith(b,"[]"))&&(g=ne.toArray(y)))return b=Mk(b),g.forEach(function(S,E){!(ne.isUndefined(S)||S===null)&&t.append(s===!0?W0([b],E,a):s===null?b:b+"[]",f(S))}),!1}return mm(y)?!0:(t.append(W0(P,b,a),f(y)),!1)}const h=[],_=Object.assign(kB,{defaultVisitor:p,convertValue:f,isVisitable:mm});function v(y,b){if(!ne.isUndefined(y)){if(h.indexOf(y)!==-1)throw Error("Circular reference detected in "+b.join("."));h.push(y),ne.forEach(y,function(g,x){(!(ne.isUndefined(g)||g===null)&&o.call(t,g,ne.isString(x)?x.trim():x,b,_))===!0&&v(g,b?b.concat(x):[x])}),h.pop()}}if(!ne.isObject(e))throw new TypeError("data must be an object");return v(e),t}function H0(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Q_(e,t){this._pairs=[],e&&qd(e,this,t)}const Dk=Q_.prototype;Dk.append=function(t,n){this._pairs.push([t,n])};Dk.toString=function(t){const n=t?function(r){return t.call(this,r,H0)}:H0;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function PB(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function jk(e,t,n){if(!t)return e;const r=n&&n.encode||PB,o=n&&n.serialize;let a;if(o?a=o(t,n):a=ne.isURLSearchParams(t)?t.toString():new Q_(t,n).toString(r),a){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class CB{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){ne.forEach(this.handlers,function(r){r!==null&&t(r)})}}const V0=CB,Fk={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},EB=typeof URLSearchParams<"u"?URLSearchParams:Q_,OB=typeof FormData<"u"?FormData:null,RB=typeof Blob<"u"?Blob:null,TB=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),LB=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),ur={isBrowser:!0,classes:{URLSearchParams:EB,FormData:OB,Blob:RB},isStandardBrowserEnv:TB,isStandardBrowserWebWorkerEnv:LB,protocols:["http","https","file","blob","url","data"]};function AB(e,t){return qd(e,new ur.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,a){return ur.isNode&&ne.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function IB(e){return ne.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function zB(e){const t={},n=Object.keys(e);let r;const o=n.length;let a;for(r=0;r<o;r++)a=n[r],t[a]=e[a];return t}function $k(e){function t(n,r,o,a){let s=n[a++];const u=Number.isFinite(+s),c=a>=n.length;return s=!s&&ne.isArray(o)?o.length:s,c?(ne.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!u):((!o[s]||!ne.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],a)&&ne.isArray(o[s])&&(o[s]=zB(o[s])),!u)}if(ne.isFormData(e)&&ne.isFunction(e.entries)){const n={};return ne.forEachEntry(e,(r,o)=>{t(IB(r),o,n,0)}),n}return null}const NB={"Content-Type":void 0};function BB(e,t,n){if(ne.isString(e))try{return(t||JSON.parse)(e),ne.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Kd={transitional:Fk,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,a=ne.isObject(t);if(a&&ne.isHTMLForm(t)&&(t=new FormData(t)),ne.isFormData(t))return o&&o?JSON.stringify($k(t)):t;if(ne.isArrayBuffer(t)||ne.isBuffer(t)||ne.isStream(t)||ne.isFile(t)||ne.isBlob(t))return t;if(ne.isArrayBufferView(t))return t.buffer;if(ne.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return AB(t,this.formSerializer).toString();if((u=ne.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return qd(u?{"files[]":t}:t,c&&new c,this.formSerializer)}}return a||o?(n.setContentType("application/json",!1),BB(t)):t}],transformResponse:[function(t){const n=this.transitional||Kd.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&ne.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(u){if(s)throw u.name==="SyntaxError"?je.from(u,je.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ur.classes.FormData,Blob:ur.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};ne.forEach(["delete","get","head"],function(t){Kd.headers[t]={}});ne.forEach(["post","put","patch"],function(t){Kd.headers[t]=ne.merge(NB)});const G_=Kd,MB=ne.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),DB=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&MB[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Z0=Symbol("internals");function ps(e){return e&&String(e).trim().toLowerCase()}function Mu(e){return e===!1||e==null?e:ne.isArray(e)?e.map(Mu):String(e)}function jB(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const FB=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ph(e,t,n,r,o){if(ne.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!ne.isString(t)){if(ne.isString(r))return t.indexOf(r)!==-1;if(ne.isRegExp(r))return r.test(t)}}function $B(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function UB(e,t){const n=ne.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,a,s){return this[r].call(this,t,o,a,s)},configurable:!0})})}class Qd{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function a(u,c,f){const p=ps(c);if(!p)throw new Error("header name must be a non-empty string");const h=ne.findKey(o,p);(!h||o[h]===void 0||f===!0||f===void 0&&o[h]!==!1)&&(o[h||c]=Mu(u))}const s=(u,c)=>ne.forEach(u,(f,p)=>a(f,p,c));return ne.isPlainObject(t)||t instanceof this.constructor?s(t,n):ne.isString(t)&&(t=t.trim())&&!FB(t)?s(DB(t),n):t!=null&&a(n,t,r),this}get(t,n){if(t=ps(t),t){const r=ne.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return jB(o);if(ne.isFunction(n))return n.call(this,o,r);if(ne.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ps(t),t){const r=ne.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ph(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function a(s){if(s=ps(s),s){const u=ne.findKey(r,s);u&&(!n||Ph(r,r[u],u,n))&&(delete r[u],o=!0)}}return ne.isArray(t)?t.forEach(a):a(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const a=n[r];(!t||Ph(this,this[a],a,t,!0))&&(delete this[a],o=!0)}return o}normalize(t){const n=this,r={};return ne.forEach(this,(o,a)=>{const s=ne.findKey(r,a);if(s){n[s]=Mu(o),delete n[a];return}const u=t?$B(a):String(a).trim();u!==a&&delete n[a],n[u]=Mu(o),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return ne.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&ne.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Z0]=this[Z0]={accessors:{}}).accessors,o=this.prototype;function a(s){const u=ps(s);r[u]||(UB(o,s),r[u]=!0)}return ne.isArray(t)?t.forEach(a):a(t),this}}Qd.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);ne.freezeMethods(Qd.prototype);ne.freezeMethods(Qd);const zr=Qd;function Ch(e,t){const n=this||G_,r=t||n,o=zr.from(r.headers);let a=r.data;return ne.forEach(e,function(u){a=u.call(n,a,o.normalize(),t?t.status:void 0)}),o.normalize(),a}function Uk(e){return!!(e&&e.__CANCEL__)}function Sl(e,t,n){je.call(this,e??"canceled",je.ERR_CANCELED,t,n),this.name="CanceledError"}ne.inherits(Sl,je,{__CANCEL__:!0});function WB(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new je("Request failed with status code "+n.status,[je.ERR_BAD_REQUEST,je.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const HB=ur.isStandardBrowserEnv?function(){return{write:function(n,r,o,a,s,u){const c=[];c.push(n+"="+encodeURIComponent(r)),ne.isNumber(o)&&c.push("expires="+new Date(o).toGMTString()),ne.isString(a)&&c.push("path="+a),ne.isString(s)&&c.push("domain="+s),u===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function VB(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ZB(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Wk(e,t){return e&&!VB(t)?ZB(e,t):t}const qB=ur.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(a){let s=a;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(s){const u=ne.isString(s)?o(s):s;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function KB(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function QB(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,a=0,s;return t=t!==void 0?t:1e3,function(c){const f=Date.now(),p=r[a];s||(s=f),n[o]=c,r[o]=f;let h=a,_=0;for(;h!==o;)_+=n[h++],h=h%e;if(o=(o+1)%e,o===a&&(a=(a+1)%e),f-s<t)return;const v=p&&f-p;return v?Math.round(_*1e3/v):void 0}}function q0(e,t){let n=0;const r=QB(50,250);return o=>{const a=o.loaded,s=o.lengthComputable?o.total:void 0,u=a-n,c=r(u),f=a<=s;n=a;const p={loaded:a,total:s,progress:s?a/s:void 0,bytes:u,rate:c||void 0,estimated:c&&s&&f?(s-a)/c:void 0,event:o};p[t?"download":"upload"]=!0,e(p)}}const GB=typeof XMLHttpRequest<"u",JB=GB&&function(e){return new Promise(function(n,r){let o=e.data;const a=zr.from(e.headers).normalize(),s=e.responseType;let u;function c(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}ne.isFormData(o)&&(ur.isStandardBrowserEnv||ur.isStandardBrowserWebWorkerEnv?a.setContentType(!1):a.setContentType("multipart/form-data;",!1));let f=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(v+":"+y))}const p=Wk(e.baseURL,e.url);f.open(e.method.toUpperCase(),jk(p,e.params,e.paramsSerializer),!0),f.timeout=e.timeout;function h(){if(!f)return;const v=zr.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),b={data:!s||s==="text"||s==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:v,config:e,request:f};WB(function(g){n(g),c()},function(g){r(g),c()},b),f=null}if("onloadend"in f?f.onloadend=h:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(h)},f.onabort=function(){f&&(r(new je("Request aborted",je.ECONNABORTED,e,f)),f=null)},f.onerror=function(){r(new je("Network Error",je.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let y=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const b=e.transitional||Fk;e.timeoutErrorMessage&&(y=e.timeoutErrorMessage),r(new je(y,b.clarifyTimeoutError?je.ETIMEDOUT:je.ECONNABORTED,e,f)),f=null},ur.isStandardBrowserEnv){const v=(e.withCredentials||qB(p))&&e.xsrfCookieName&&HB.read(e.xsrfCookieName);v&&a.set(e.xsrfHeaderName,v)}o===void 0&&a.setContentType(null),"setRequestHeader"in f&&ne.forEach(a.toJSON(),function(y,b){f.setRequestHeader(b,y)}),ne.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),s&&s!=="json"&&(f.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&f.addEventListener("progress",q0(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",q0(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=v=>{f&&(r(!v||v.type?new Sl(null,e,f):v),f.abort(),f=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const _=KB(p);if(_&&ur.protocols.indexOf(_)===-1){r(new je("Unsupported protocol "+_+":",je.ERR_BAD_REQUEST,e));return}f.send(o||null)})},Du={http:wB,xhr:JB};ne.forEach(Du,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const YB={getAdapter:e=>{e=ne.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=ne.isString(n)?Du[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new je(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(ne.hasOwnProp(Du,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!ne.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Du};function Eh(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Sl(null,e)}function K0(e){return Eh(e),e.headers=zr.from(e.headers),e.data=Ch.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),YB.getAdapter(e.adapter||G_.adapter)(e).then(function(r){return Eh(e),r.data=Ch.call(e,e.transformResponse,r),r.headers=zr.from(r.headers),r},function(r){return Uk(r)||(Eh(e),r&&r.response&&(r.response.data=Ch.call(e,e.transformResponse,r.response),r.response.headers=zr.from(r.response.headers))),Promise.reject(r)})}const Q0=e=>e instanceof zr?e.toJSON():e;function La(e,t){t=t||{};const n={};function r(f,p,h){return ne.isPlainObject(f)&&ne.isPlainObject(p)?ne.merge.call({caseless:h},f,p):ne.isPlainObject(p)?ne.merge({},p):ne.isArray(p)?p.slice():p}function o(f,p,h){if(ne.isUndefined(p)){if(!ne.isUndefined(f))return r(void 0,f,h)}else return r(f,p,h)}function a(f,p){if(!ne.isUndefined(p))return r(void 0,p)}function s(f,p){if(ne.isUndefined(p)){if(!ne.isUndefined(f))return r(void 0,f)}else return r(void 0,p)}function u(f,p,h){if(h in t)return r(f,p);if(h in e)return r(void 0,f)}const c={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:u,headers:(f,p)=>o(Q0(f),Q0(p),!0)};return ne.forEach(Object.keys(Object.assign({},e,t)),function(p){const h=c[p]||o,_=h(e[p],t[p],p);ne.isUndefined(_)&&h!==u||(n[p]=_)}),n}const Hk="1.4.0",J_={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{J_[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const G0={};J_.transitional=function(t,n,r){function o(a,s){return"[Axios v"+Hk+"] Transitional option '"+a+"'"+s+(r?". "+r:"")}return(a,s,u)=>{if(t===!1)throw new je(o(s," has been removed"+(n?" in "+n:"")),je.ERR_DEPRECATED);return n&&!G0[s]&&(G0[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,s,u):!0}};function XB(e,t,n){if(typeof e!="object")throw new je("options must be an object",je.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const a=r[o],s=t[a];if(s){const u=e[a],c=u===void 0||s(u,a,e);if(c!==!0)throw new je("option "+a+" must be "+c,je.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new je("Unknown option "+a,je.ERR_BAD_OPTION)}}const _m={assertOptions:XB,validators:J_},Kr=_m.validators;class Dc{constructor(t){this.defaults=t,this.interceptors={request:new V0,response:new V0}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=La(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:a}=n;r!==void 0&&_m.assertOptions(r,{silentJSONParsing:Kr.transitional(Kr.boolean),forcedJSONParsing:Kr.transitional(Kr.boolean),clarifyTimeoutError:Kr.transitional(Kr.boolean)},!1),o!=null&&(ne.isFunction(o)?n.paramsSerializer={serialize:o}:_m.assertOptions(o,{encode:Kr.function,serialize:Kr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s;s=a&&ne.merge(a.common,a[n.method]),s&&ne.forEach(["delete","get","head","post","put","patch","common"],y=>{delete a[y]}),n.headers=zr.concat(s,a);const u=[];let c=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(c=c&&b.synchronous,u.unshift(b.fulfilled,b.rejected))});const f=[];this.interceptors.response.forEach(function(b){f.push(b.fulfilled,b.rejected)});let p,h=0,_;if(!c){const y=[K0.bind(this),void 0];for(y.unshift.apply(y,u),y.push.apply(y,f),_=y.length,p=Promise.resolve(n);h<_;)p=p.then(y[h++],y[h++]);return p}_=u.length;let v=n;for(h=0;h<_;){const y=u[h++],b=u[h++];try{v=y(v)}catch(P){b.call(this,P);break}}try{p=K0.call(this,v)}catch(y){return Promise.reject(y)}for(h=0,_=f.length;h<_;)p=p.then(f[h++],f[h++]);return p}getUri(t){t=La(this.defaults,t);const n=Wk(t.baseURL,t.url);return jk(n,t.params,t.paramsSerializer)}}ne.forEach(["delete","get","head","options"],function(t){Dc.prototype[t]=function(n,r){return this.request(La(r||{},{method:t,url:n,data:(r||{}).data}))}});ne.forEach(["post","put","patch"],function(t){function n(r){return function(a,s,u){return this.request(La(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:s}))}}Dc.prototype[t]=n(),Dc.prototype[t+"Form"]=n(!0)});const ju=Dc;class Y_{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(o=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](o);r._listeners=null}),this.promise.then=o=>{let a;const s=new Promise(u=>{r.subscribe(u),a=u}).then(o);return s.cancel=function(){r.unsubscribe(a)},s},t(function(a,s,u){r.reason||(r.reason=new Sl(a,s,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Y_(function(o){t=o}),cancel:t}}}const e5=Y_;function t5(e){return function(n){return e.apply(null,n)}}function n5(e){return ne.isObject(e)&&e.isAxiosError===!0}const gm={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(gm).forEach(([e,t])=>{gm[t]=e});const r5=gm;function Vk(e){const t=new ju(e),n=Ek(ju.prototype.request,t);return ne.extend(n,ju.prototype,t,{allOwnKeys:!0}),ne.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Vk(La(e,o))},n}const Pt=Vk(G_);Pt.Axios=ju;Pt.CanceledError=Sl;Pt.CancelToken=e5;Pt.isCancel=Uk;Pt.VERSION=Hk;Pt.toFormData=qd;Pt.AxiosError=je;Pt.Cancel=Pt.CanceledError;Pt.all=function(t){return Promise.all(t)};Pt.spread=t5;Pt.isAxiosError=n5;Pt.mergeConfig=La;Pt.AxiosHeaders=zr;Pt.formToJSON=e=>$k(ne.isHTMLForm(e)?new FormData(e):e);Pt.HttpStatusCode=r5;Pt.default=Pt;const Zk=Pt;function Dn(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Lo(e){return!!e&&!!e[ot]}function jr(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var o=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===f5}(e)||Array.isArray(e)||!!e[rx]||!!(!((t=e.constructor)===null||t===void 0)&&t[rx])||X_(e)||eg(e))}function wi(e,t,n){n===void 0&&(n=!1),ja(e)===0?(n?Object.keys:va)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,o){return t(o,r,e)})}function ja(e){var t=e[ot];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:X_(e)?2:eg(e)?3:0}function ga(e,t){return ja(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function o5(e,t){return ja(e)===2?e.get(t):e[t]}function qk(e,t,n){var r=ja(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Kk(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function X_(e){return c5&&e instanceof Map}function eg(e){return d5&&e instanceof Set}function ei(e){return e.o||e.t}function tg(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Gk(e);delete t[ot];for(var n=va(t),r=0;r<n.length;r++){var o=n[r],a=t[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function ng(e,t){return t===void 0&&(t=!1),rg(e)||Lo(e)||!jr(e)||(ja(e)>1&&(e.set=e.add=e.clear=e.delete=i5),Object.freeze(e),t&&wi(e,function(n,r){return ng(r,!0)},!0)),e}function i5(){Dn(2)}function rg(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function fr(e){var t=xm[e];return t||Dn(18,e),t}function a5(e,t){xm[e]||(xm[e]=t)}function vm(){return ul}function Oh(e,t){t&&(fr("Patches"),e.u=[],e.s=[],e.v=t)}function jc(e){ym(e),e.p.forEach(s5),e.p=null}function ym(e){e===ul&&(ul=e.l)}function J0(e){return ul={p:[],l:ul,h:e,m:!0,_:0}}function s5(e){var t=e[ot];t.i===0||t.i===1?t.j():t.g=!0}function Rh(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||fr("ES5").S(t,e,r),r?(n[ot].P&&(jc(t),Dn(4)),jr(e)&&(e=Fc(t,e),t.l||$c(t,e)),t.u&&fr("Patches").M(n[ot].t,e,t.u,t.s)):e=Fc(t,n,[]),jc(t),t.u&&t.v(t.u,t.s),e!==Qk?e:void 0}function Fc(e,t,n){if(rg(t))return t;var r=t[ot];if(!r)return wi(t,function(u,c){return Y0(e,r,t,u,c,n)},!0),t;if(r.A!==e)return t;if(!r.P)return $c(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=r.i===4||r.i===5?r.o=tg(r.k):r.o,a=o,s=!1;r.i===3&&(a=new Set(o),o.clear(),s=!0),wi(a,function(u,c){return Y0(e,r,o,u,c,n,s)}),$c(e,o,!1),n&&e.u&&fr("Patches").N(r,n,e.u,e.s)}return r.o}function Y0(e,t,n,r,o,a,s){if(Lo(o)){var u=Fc(e,o,a&&t&&t.i!==3&&!ga(t.R,r)?a.concat(r):void 0);if(qk(n,r,u),!Lo(u))return;e.m=!1}else s&&n.add(o);if(jr(o)&&!rg(o)){if(!e.h.D&&e._<1)return;Fc(e,o),t&&t.A.l||$c(e,o)}}function $c(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&ng(t,n)}function Th(e,t){var n=e[ot];return(n?ei(n):e)[t]}function X0(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function to(e){e.P||(e.P=!0,e.l&&to(e.l))}function Lh(e){e.o||(e.o=tg(e.t))}function bm(e,t,n){var r=X_(t)?fr("MapSet").F(t,n):eg(t)?fr("MapSet").T(t,n):e.O?function(o,a){var s=Array.isArray(o),u={i:s?1:0,A:a?a.A:vm(),P:!1,I:!1,R:{},l:a,t:o,k:null,o:null,j:null,C:!1},c=u,f=cl;s&&(c=[u],f=ys);var p=Proxy.revocable(c,f),h=p.revoke,_=p.proxy;return u.k=_,u.j=h,_}(t,n):fr("ES5").J(t,n);return(n?n.A:vm()).p.push(r),r}function l5(e){return Lo(e)||Dn(22,e),function t(n){if(!jr(n))return n;var r,o=n[ot],a=ja(n);if(o){if(!o.P&&(o.i<4||!fr("ES5").K(o)))return o.t;o.I=!0,r=ex(n,a),o.I=!1}else r=ex(n,a);return wi(r,function(s,u){o&&o5(o.t,s)===u||qk(r,s,t(u))}),a===3?new Set(r):r}(e)}function ex(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return tg(e)}function u5(){function e(a,s){var u=o[a];return u?u.enumerable=s:o[a]=u={configurable:!0,enumerable:s,get:function(){var c=this[ot];return cl.get(c,a)},set:function(c){var f=this[ot];cl.set(f,a,c)}},u}function t(a){for(var s=a.length-1;s>=0;s--){var u=a[s][ot];if(!u.P)switch(u.i){case 5:r(u)&&to(u);break;case 4:n(u)&&to(u)}}}function n(a){for(var s=a.t,u=a.k,c=va(u),f=c.length-1;f>=0;f--){var p=c[f];if(p!==ot){var h=s[p];if(h===void 0&&!ga(s,p))return!0;var _=u[p],v=_&&_[ot];if(v?v.t!==h:!Kk(_,h))return!0}}var y=!!s[ot];return c.length!==va(s).length+(y?0:1)}function r(a){var s=a.k;if(s.length!==a.t.length)return!0;var u=Object.getOwnPropertyDescriptor(s,s.length-1);if(u&&!u.get)return!0;for(var c=0;c<s.length;c++)if(!s.hasOwnProperty(c))return!0;return!1}var o={};a5("ES5",{J:function(a,s){var u=Array.isArray(a),c=function(p,h){if(p){for(var _=Array(h.length),v=0;v<h.length;v++)Object.defineProperty(_,""+v,e(v,!0));return _}var y=Gk(h);delete y[ot];for(var b=va(y),P=0;P<b.length;P++){var g=b[P];y[g]=e(g,p||!!y[g].enumerable)}return Object.create(Object.getPrototypeOf(h),y)}(u,a),f={i:u?5:4,A:s?s.A:vm(),P:!1,I:!1,R:{},l:s,t:a,k:c,o:null,g:!1,C:!1};return Object.defineProperty(c,ot,{value:f,writable:!0}),c},S:function(a,s,u){u?Lo(s)&&s[ot].A===a&&t(a.p):(a.u&&function c(f){if(f&&typeof f=="object"){var p=f[ot];if(p){var h=p.t,_=p.k,v=p.R,y=p.i;if(y===4)wi(_,function(S){S!==ot&&(h[S]!==void 0||ga(h,S)?v[S]||c(_[S]):(v[S]=!0,to(p)))}),wi(h,function(S){_[S]!==void 0||ga(_,S)||(v[S]=!1,to(p))});else if(y===5){if(r(p)&&(to(p),v.length=!0),_.length<h.length)for(var b=_.length;b<h.length;b++)v[b]=!1;else for(var P=h.length;P<_.length;P++)v[P]=!0;for(var g=Math.min(_.length,h.length),x=0;x<g;x++)_.hasOwnProperty(x)||(v[x]=!0),v[x]===void 0&&c(_[x])}}}}(a.p[0]),t(a.p))},K:function(a){return a.i===4?n(a):r(a)}})}var tx,ul,og=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",c5=typeof Map<"u",d5=typeof Set<"u",nx=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Qk=og?Symbol.for("immer-nothing"):((tx={})["immer-nothing"]=!0,tx),rx=og?Symbol.for("immer-draftable"):"__$immer_draftable",ot=og?Symbol.for("immer-state"):"__$immer_state",f5=""+Object.prototype.constructor,va=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Gk=Object.getOwnPropertyDescriptors||function(e){var t={};return va(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},xm={},cl={get:function(e,t){if(t===ot)return e;var n=ei(e);if(!ga(n,t))return function(o,a,s){var u,c=X0(a,s);return c?"value"in c?c.value:(u=c.get)===null||u===void 0?void 0:u.call(o.k):void 0}(e,n,t);var r=n[t];return e.I||!jr(r)?r:r===Th(e.t,t)?(Lh(e),e.o[t]=bm(e.A.h,r,e)):r},has:function(e,t){return t in ei(e)},ownKeys:function(e){return Reflect.ownKeys(ei(e))},set:function(e,t,n){var r=X0(ei(e),t);if(r?.set)return r.set.call(e.k,n),!0;if(!e.P){var o=Th(ei(e),t),a=o?.[ot];if(a&&a.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Kk(n,o)&&(n!==void 0||ga(e.t,t)))return!0;Lh(e),to(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Th(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Lh(e),to(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=ei(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Dn(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Dn(12)}},ys={};wi(cl,function(e,t){ys[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),ys.deleteProperty=function(e,t){return ys.set.call(this,e,t,void 0)},ys.set=function(e,t,n){return cl.set.call(this,e[0],t,n,e[0])};var h5=function(){function e(n){var r=this;this.O=nx,this.D=!0,this.produce=function(o,a,s){if(typeof o=="function"&&typeof a!="function"){var u=a;a=o;var c=r;return function(b){var P=this;b===void 0&&(b=u);for(var g=arguments.length,x=Array(g>1?g-1:0),S=1;S<g;S++)x[S-1]=arguments[S];return c.produce(b,function(E){var R;return(R=a).call.apply(R,[P,E].concat(x))})}}var f;if(typeof a!="function"&&Dn(6),s!==void 0&&typeof s!="function"&&Dn(7),jr(o)){var p=J0(r),h=bm(r,o,void 0),_=!0;try{f=a(h),_=!1}finally{_?jc(p):ym(p)}return typeof Promise<"u"&&f instanceof Promise?f.then(function(b){return Oh(p,s),Rh(b,p)},function(b){throw jc(p),b}):(Oh(p,s),Rh(f,p))}if(!o||typeof o!="object"){if((f=a(o))===void 0&&(f=o),f===Qk&&(f=void 0),r.D&&ng(f,!0),s){var v=[],y=[];fr("Patches").M(o,f,v,y),s(v,y)}return f}Dn(21,o)},this.produceWithPatches=function(o,a){if(typeof o=="function")return function(f){for(var p=arguments.length,h=Array(p>1?p-1:0),_=1;_<p;_++)h[_-1]=arguments[_];return r.produceWithPatches(f,function(v){return o.apply(void 0,[v].concat(h))})};var s,u,c=r.produce(o,a,function(f,p){s=f,u=p});return typeof Promise<"u"&&c instanceof Promise?c.then(function(f){return[f,s,u]}):[c,s,u]},typeof n?.useProxies=="boolean"&&this.setUseProxies(n.useProxies),typeof n?.autoFreeze=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){jr(n)||Dn(8),Lo(n)&&(n=l5(n));var r=J0(this),o=bm(this,n,void 0);return o[ot].C=!0,ym(r),o},t.finishDraft=function(n,r){var o=n&&n[ot],a=o.A;return Oh(a,r),Rh(void 0,a)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!nx&&Dn(20),this.O=n},t.applyPatches=function(n,r){var o;for(o=r.length-1;o>=0;o--){var a=r[o];if(a.path.length===0&&a.op==="replace"){n=a.value;break}}o>-1&&(r=r.slice(o+1));var s=fr("Patches").$;return Lo(n)?s(n,r):this.produce(n,function(u){return s(u,r)})},e}(),cn=new h5,Jk=cn.produce;cn.produceWithPatches.bind(cn);cn.setAutoFreeze.bind(cn);cn.setUseProxies.bind(cn);cn.applyPatches.bind(cn);cn.createDraft.bind(cn);cn.finishDraft.bind(cn);function ox(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function ix(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ox(Object(n),!0).forEach(function(r){Zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ox(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Dt(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var ax=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Ah=function(){return Math.random().toString(36).substring(7).split("").join(".")},Uc={INIT:"@@redux/INIT"+Ah(),REPLACE:"@@redux/REPLACE"+Ah(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Ah()}};function p5(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Yk(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Dt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Dt(1));return n(Yk)(e,t)}if(typeof e!="function")throw new Error(Dt(2));var o=e,a=t,s=[],u=s,c=!1;function f(){u===s&&(u=s.slice())}function p(){if(c)throw new Error(Dt(3));return a}function h(b){if(typeof b!="function")throw new Error(Dt(4));if(c)throw new Error(Dt(5));var P=!0;return f(),u.push(b),function(){if(P){if(c)throw new Error(Dt(6));P=!1,f();var x=u.indexOf(b);u.splice(x,1),s=null}}}function _(b){if(!p5(b))throw new Error(Dt(7));if(typeof b.type>"u")throw new Error(Dt(8));if(c)throw new Error(Dt(9));try{c=!0,a=o(a,b)}finally{c=!1}for(var P=s=u,g=0;g<P.length;g++){var x=P[g];x()}return b}function v(b){if(typeof b!="function")throw new Error(Dt(10));o=b,_({type:Uc.REPLACE})}function y(){var b,P=h;return b={subscribe:function(x){if(typeof x!="object"||x===null)throw new Error(Dt(11));function S(){x.next&&x.next(p())}S();var E=P(S);return{unsubscribe:E}}},b[ax]=function(){return this},b}return _({type:Uc.INIT}),r={dispatch:_,subscribe:h,getState:p,replaceReducer:v},r[ax]=y,r}function m5(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Uc.INIT});if(typeof r>"u")throw new Error(Dt(12));if(typeof n(void 0,{type:Uc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Dt(13))})}function _5(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];typeof e[o]=="function"&&(n[o]=e[o])}var a=Object.keys(n),s;try{m5(n)}catch(u){s=u}return function(c,f){if(c===void 0&&(c={}),s)throw s;for(var p=!1,h={},_=0;_<a.length;_++){var v=a[_],y=n[v],b=c[v],P=y(b,f);if(typeof P>"u")throw f&&f.type,new Error(Dt(14));h[v]=P,p=p||P!==b}return p=p||a.length!==Object.keys(c).length,p?h:c}}function Wc(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,o){return function(){return r(o.apply(void 0,arguments))}})}function g5(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var o=r.apply(void 0,arguments),a=function(){throw new Error(Dt(15))},s={getState:o.getState,dispatch:function(){return a.apply(void 0,arguments)}},u=t.map(function(c){return c(s)});return a=Wc.apply(void 0,u)(o.dispatch),ix(ix({},o),{},{dispatch:a})}}}function Xk(e){var t=function(r){var o=r.dispatch,a=r.getState;return function(s){return function(u){return typeof u=="function"?u(o,a,e):s(u)}}};return t}var eP=Xk();eP.withExtraArgument=Xk;const sx=eP;var tP=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(r[a]=o[a])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),v5=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,o,a,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(f){return function(p){return c([f,p])}}function c(f){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(a=f[0]&2?o.return:f[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,f[1])).done)return a;switch(o=0,a&&(f=[f[0]&2,a.value]),f[0]){case 0:case 1:a=f;break;case 4:return n.label++,{value:f[1],done:!1};case 5:n.label++,o=f[1],f=[0];continue;case 7:f=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(f[0]===6||f[0]===2)){n=0;continue}if(f[0]===3&&(!a||f[1]>a[0]&&f[1]<a[3])){n.label=f[1];break}if(f[0]===6&&n.label<a[1]){n.label=a[1],a=f;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(f);break}a[2]&&n.ops.pop(),n.trys.pop();continue}f=t.call(e,n)}catch(p){f=[6,p],o=0}finally{r=a=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}},Aa=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},y5=Object.defineProperty,b5=Object.defineProperties,x5=Object.getOwnPropertyDescriptors,lx=Object.getOwnPropertySymbols,w5=Object.prototype.hasOwnProperty,S5=Object.prototype.propertyIsEnumerable,ux=function(e,t,n){return t in e?y5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},wo=function(e,t){for(var n in t||(t={}))w5.call(t,n)&&ux(e,n,t[n]);if(lx)for(var r=0,o=lx(t);r<o.length;r++){var n=o[r];S5.call(t,n)&&ux(e,n,t[n])}return e},Ih=function(e,t){return b5(e,x5(t))},k5=function(e,t,n){return new Promise(function(r,o){var a=function(c){try{u(n.next(c))}catch(f){o(f)}},s=function(c){try{u(n.throw(c))}catch(f){o(f)}},u=function(c){return c.done?r(c.value):Promise.resolve(c.value).then(a,s)};u((n=n.apply(e,t)).next())})},P5=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Wc:Wc.apply(null,arguments)};function C5(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var E5=function(e){tP(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Aa([void 0],n[0].concat(this)))):new(t.bind.apply(t,Aa([void 0],n.concat(this))))},t}(Array),O5=function(e){tP(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Aa([void 0],n[0].concat(this)))):new(t.bind.apply(t,Aa([void 0],n.concat(this))))},t}(Array);function wm(e){return jr(e)?Jk(e,function(){}):e}function R5(e){return typeof e=="boolean"}function T5(){return function(t){return L5(t)}}function L5(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new E5;return n&&(R5(n)?r.push(sx):r.push(sx.withExtraArgument(n.extraArgument))),r}var A5=!0;function I5(e){var t=T5(),n=e||{},r=n.reducer,o=r===void 0?void 0:r,a=n.middleware,s=a===void 0?t():a,u=n.devTools,c=u===void 0?!0:u,f=n.preloadedState,p=f===void 0?void 0:f,h=n.enhancers,_=h===void 0?void 0:h,v;if(typeof o=="function")v=o;else if(C5(o))v=_5(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var y=s;typeof y=="function"&&(y=y(t));var b=g5.apply(void 0,y),P=Wc;c&&(P=P5(wo({trace:!A5},typeof c=="object"&&c)));var g=new O5(b),x=g;Array.isArray(_)?x=Aa([b],_):typeof _=="function"&&(x=_(g));var S=P.apply(void 0,x);return Yk(v,p,S)}function So(e,t){function n(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(t){var a=t.apply(void 0,r);if(!a)throw new Error("prepareAction did not return an object");return wo(wo({type:e,payload:a.payload},"meta"in a&&{meta:a.meta}),"error"in a&&{error:a.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function nP(e){var t={},n=[],r,o={addCase:function(a,s){var u=typeof a=="string"?a:a.type;if(u in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[u]=s,o},addMatcher:function(a,s){return n.push({matcher:a,reducer:s}),o},addDefaultCase:function(a){return r=a,o}};return e(o),[t,n,r]}function z5(e){return typeof e=="function"}function N5(e,t,n,r){n===void 0&&(n=[]);var o=typeof t=="function"?nP(t):[t,n,r],a=o[0],s=o[1],u=o[2],c;if(z5(e))c=function(){return wm(e())};else{var f=wm(e);c=function(){return f}}function p(h,_){h===void 0&&(h=c());var v=Aa([a[_.type]],s.filter(function(y){var b=y.matcher;return b(_)}).map(function(y){var b=y.reducer;return b}));return v.filter(function(y){return!!y}).length===0&&(v=[u]),v.reduce(function(y,b){if(b)if(Lo(y)){var P=y,g=b(P,_);return g===void 0?y:g}else{if(jr(y))return Jk(y,function(x){return b(x,_)});var g=b(y,_);if(g===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}return y},h)}return p.getInitialState=c,p}function B5(e,t){return e+"/"+t}function M5(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:wm(e.initialState),r=e.reducers||{},o=Object.keys(r),a={},s={},u={};o.forEach(function(p){var h=r[p],_=B5(t,p),v,y;"reducer"in h?(v=h.reducer,y=h.prepare):v=h,a[p]=v,s[_]=v,u[p]=y?So(_,y):So(_)});function c(){var p=typeof e.extraReducers=="function"?nP(e.extraReducers):[e.extraReducers],h=p[0],_=h===void 0?{}:h,v=p[1],y=v===void 0?[]:v,b=p[2],P=b===void 0?void 0:b,g=wo(wo({},_),s);return N5(n,function(x){for(var S in g)x.addCase(S,g[S]);for(var E=0,R=y;E<R.length;E++){var T=R[E];x.addMatcher(T.matcher,T.reducer)}P&&x.addDefaultCase(P)})}var f;return{name:t,reducer:function(p,h){return f||(f=c()),f(p,h)},actions:u,caseReducers:a,getInitialState:function(){return f||(f=c()),f.getInitialState()}}}var D5="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",j5=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=D5[Math.random()*64|0];return t},F5=["name","message","stack","code"],zh=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),cx=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),$5=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=F5;n<r.length;n++){var o=r[n];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}},rP=function(){function e(t,n,r){var o=So(t+"/fulfilled",function(f,p,h,_){return{payload:f,meta:Ih(wo({},_||{}),{arg:h,requestId:p,requestStatus:"fulfilled"})}}),a=So(t+"/pending",function(f,p,h){return{payload:void 0,meta:Ih(wo({},h||{}),{arg:p,requestId:f,requestStatus:"pending"})}}),s=So(t+"/rejected",function(f,p,h,_,v){return{payload:_,error:(r&&r.serializeError||$5)(f||"Rejected"),meta:Ih(wo({},v||{}),{arg:h,requestId:p,rejectedWithValue:!!_,requestStatus:"rejected",aborted:f?.name==="AbortError",condition:f?.name==="ConditionError"})}}),u=typeof AbortController<"u"?AbortController:function(){function f(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return f.prototype.abort=function(){},f}();function c(f){return function(p,h,_){var v=r?.idGenerator?r.idGenerator(f):j5(),y=new u,b;function P(x){b=x,y.abort()}var g=function(){return k5(this,null,function(){var x,S,E,R,T,N,j;return v5(this,function(W){switch(W.label){case 0:return W.trys.push([0,4,,5]),R=(x=r?.condition)==null?void 0:x.call(r,f,{getState:h,extra:_}),W5(R)?[4,R]:[3,2];case 1:R=W.sent(),W.label=2;case 2:if(R===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return T=new Promise(function(M,H){return y.signal.addEventListener("abort",function(){return H({name:"AbortError",message:b||"Aborted"})})}),p(a(v,f,(S=r?.getPendingMeta)==null?void 0:S.call(r,{requestId:v,arg:f},{getState:h,extra:_}))),[4,Promise.race([T,Promise.resolve(n(f,{dispatch:p,getState:h,extra:_,requestId:v,signal:y.signal,abort:P,rejectWithValue:function(M,H){return new zh(M,H)},fulfillWithValue:function(M,H){return new cx(M,H)}})).then(function(M){if(M instanceof zh)throw M;return M instanceof cx?o(M.payload,v,f,M.meta):o(M,v,f)})])];case 3:return E=W.sent(),[3,5];case 4:return N=W.sent(),E=N instanceof zh?s(null,v,f,N.payload,N.meta):s(N,v,f),[3,5];case 5:return j=r&&!r.dispatchConditionRejection&&s.match(E)&&E.meta.condition,j||p(E),[2,E]}})})}();return Object.assign(g,{abort:P,requestId:v,arg:f,unwrap:function(){return g.then(U5)}})}}return Object.assign(c,{pending:a,rejected:s,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e}();function U5(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function W5(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var ig="listenerMiddleware";So(ig+"/add");So(ig+"/removeAll");So(ig+"/remove");var dx;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);u5();const H5={loading:!0,brandloading:!0,evList:{evs:[],count:0},search:{name:"",sortOrder:"Name",evType:[],brands:[],seatConfiguration:[],seatMassageFirstRow:!1,seatMassageSecondRow:!1,seatVentilationFirstRow:!1,seatVentilationSecondRow:!1,allWheelDrive:!1,nightVision:!1,adaptiveSuspension:!1,airSuspension:!1,instrumentCluster:!1,headUpDisplay:!1,androidAuto:!1,appleCarPlay:!1,colors:[],fWD:!1,rWD:!1,rearAxleSteering:!1,adaptiveCruiseControl:!1,autoSteer:!1,automaticParking:!1,blindSpotMonitoring:!1,automatedLaneChange:!1,driverDrowsinessDetection:!1,driverMonitoringSystem:!1,rearCrossTrafficAlert:!1,exitWarning:!1,trafficSignRecognition:!1,efficiencyAssist:!1},searchOptions:{brands:["Audi","BMW","BYD","CUPRA","Hongqi","Hyundai","Kia","Lucid","Mercedes","Nio","Nissan","Porsche","SKODA","Tesla","Toyota","Volkswagen"],seatConfig:[],bodyTypes:["Sedan"],seatConfiguration:["5 seat"],colors:["Red"]},error:""},Sm=rP("evsearch/fetchEvs",async e=>{const t=window.location.href;let n="https://api.evkx.net/api/Ev";return t.startsWith("http://localhost")&&(n="https://localhost:7033/api/Ev"),await Zk.post(n,e,{headers:{"Content-Type":"application/json"}}).then(r=>r.data).catch(r=>{console.error("error",r)})}),km=rP("evsearch/fetchSearchOptions",async()=>{const e=window.location.href;let t="https://api.evkx.net/api/searchoptions";return e.startsWith("http://localhost")&&(t="https://localhost:7033/api/searchoptions"),await Zk.get(t).then(n=>n.data).catch(n=>{console.error("error",n)})}),oP=M5({name:"evsearch",initialState:H5,reducers:{updateSortOrder:(e,t)=>{e.search.sortOrder=t.payload},updateEvType:(e,t)=>{const n=t.payload;e.search.evType=n},updateBrands:(e,t)=>{const n=t.payload;e.search.brands=n},updateSeatConfig:(e,t)=>{const n=t.payload;e.search.seatConfiguration=n},updateAllWheelDrive:(e,t)=>{const n=t.payload;e.search.allWheelDrive=n},updateRWD:(e,t)=>{e.search.rWD=t.payload},updateFWD:(e,t)=>{e.search.fWD=t.payload},updateRearAxleSteering:(e,t)=>{e.search.rearAxleSteering=t.payload},updateNightVision:(e,t)=>{const n=t.payload;e.search.nightVision=n},updateAdaptiveDamping:(e,t)=>{const n=t.payload;e.search.adaptiveSuspension=n},updateAdaptiveAirSuspension:(e,t)=>{e.search.airSuspension=t.payload},updateInstrumentCluster:(e,t)=>{const n=t.payload;e.search.instrumentCluster=n},updateHeadUpDisplay:(e,t)=>{const n=t.payload;e.search.headUpDisplay=n},updateAndroidAuto:(e,t)=>{const n=t.payload;e.search.androidAuto=n},updateAppleCarPlay:(e,t)=>{const n=t.payload;e.search.appleCarPlay=n},updateAdaptiveCruiseControl:(e,t)=>{e.search.adaptiveCruiseControl=t.payload},updateAutoSteer:(e,t)=>{e.search.autoSteer=t.payload},updateColors:(e,t)=>{const n=t.payload;e.search.colors=n},updateSortOrderFromParam:(e,t)=>{e.search.sortOrder=t.payload}},extraReducers:e=>{e.addCase(Sm.fulfilled,(t,n)=>{const r=n.payload;t.evList=r,t.loading=!1}).addCase(Sm.rejected,(t,n)=>{t.error=n.error.message}).addCase(km.fulfilled,(t,n)=>{const r=n.payload;t.searchOptions=r,t.brandloading=!1}).addCase(km.rejected,(t,n)=>{t.error=n.error.message})}}),V5=oP.reducer,{updateSortOrder:Z5,updateEvType:q5,updateBrands:K5,updateSeatConfig:Q5,updateAllWheelDrive:G5,updateNightVision:J5,updateAdaptiveDamping:Y5,updateAdaptiveAirSuspension:X5,updateInstrumentCluster:eM,updateHeadUpDisplay:tM,updateAndroidAuto:nM,updateAppleCarPlay:rM,updateColors:oM,updateFWD:iM,updateRWD:aM,updateRearAxleSteering:sM,updateSortOrderFromParam:ZM,updateAdaptiveCruiseControl:lM,updateAutoSteer:uM}=oP.actions,Sr=h2,cM=()=>A2(),dM="_pageMargin_1uj8b_3",fM="_pageContainer_1uj8b_37",hM="_exitButton_1uj8b_57",fx={pageMargin:dM,pageContainer:fM,exitButton:hM},pM=({children:e})=>(bR(),vl("common"),Z.jsx("div",{className:fx.pageMargin,children:Z.jsx("div",{className:fx.pageContainer,children:Z.jsx("div",{children:e})})})),mM="_evsearchAccordionContent_f6igx_1",_M="_evText_f6igx_11",gM="_scopeItems_f6igx_19",vM="_line_f6igx_27",yM="_contentTexts_f6igx_37",bM="_bottomContentTexts_f6igx_47",xM="_thumb_f6igx_55",wM="_card_f6igx_73",SM="_cards_f6igx_81",kM="_thumbcontainer_f6igx_105",Hi={evsearchAccordionContent:mM,evText:_M,scopeItems:gM,line:vM,contentTexts:yM,bottomContentTexts:bM,thumb:xM,card:wM,cards:SM,thumbcontainer:kM},PM=({title:e="No info",subtitle:t="No info",maxPower:n=0,topSpeedKph:r=0,infoUri:o="",netBattery:a=0,wltpConsumption:s=0,wltpRange:u=0,zeroTo100:c=0,thumbUri:f="",maxDcChargingSpeed:p=0,averageDcChargingSpeed:h=0})=>{const[_,v]=k.useState(!1);return Z.jsx("div",{children:Z.jsx(ar,{onClick:()=>{v(!_)},children:Z.jsxs(ar.Item,{children:[Z.jsxs(ar.Header,{children:[e," ",t]}),Z.jsx(ar.Content,{children:Z.jsx("div",{className:Hi.evsearchAccordionContent,children:Z.jsxs("div",{className:Hi.cards,children:[Z.jsx("div",{className:Hi.card,children:Z.jsx("div",{className:Hi.thumbcontainer,children:Z.jsx("img",{src:f,alt:e,className:Hi.thumb})})}),Z.jsxs("div",{className:Hi.card,children:["Read our ",Z.jsx("a",{href:o,children:"full article"}),", see all"," ",Z.jsx("a",{href:o+"specifications/",children:"specifications"}),", or see our"," ",Z.jsx("a",{href:o+"gallery/",children:"image gallery"}),".",Z.jsx("br",{}),Z.jsx("br",{}),Z.jsxs(II,{borderStyle:"dashed",children:[Z.jsxs(Zo,{children:[Z.jsx("b",{children:Ho("evsearch.specwltprange")})," - ",u," km"]}),Z.jsxs(Zo,{children:[Z.jsx("b",{children:Ho("evsearch.specwltpconsumption")})," - ",s," kWh/100km"]}),Z.jsxs(Zo,{children:[Z.jsx("b",{children:Ho("evsearch.specnetbattery")})," - ",a," kWh"]}),Z.jsxs(Zo,{children:[Z.jsx("b",{children:Ho("evsearch.zeroto100")})," - ",c," seconds"]}),Z.jsxs(Zo,{children:[Z.jsx("b",{children:Ho("evsearch.topspeed")}),"- ",r," km/h"]}),Z.jsxs(Zo,{children:[Z.jsx("b",{children:Ho("evsearch.maxpower")})," - ",n," kW"]}),Z.jsxs(Zo,{children:[Z.jsx("b",{children:Ho("evsearch.chargingspeed")})," - ",p,"/",h," kW"]})]})]})]})})})]})})})};var iP=(e=>(e.Primary="primary",e.Success="success",e))(iP||{}),aP=(e=>(e.Small="small",e.Medium="medium",e))(aP||{});const CM=k.createContext({color:"primary",size:"medium"}),EM="_page_uhpfb_1",OM={page:EM},RM=({children:e,color:t=iP.Primary,size:n=aP.Medium})=>Z.jsx("div",{className:OM.page,children:Z.jsx(CM.Provider,{value:{color:t,size:n},children:e})});const TM={"page-content":"_page-content_uz8h7_1"},Nh=({children:e})=>Z.jsx("div",{className:bi(TM["page-content"]),children:e}),LM="_pageContent_lara5_1",AM="_pageContentContainer_lara5_19",IM="_resultInfo_lara5_33",zM="_searchinput_lara5_45",NM="_searchinfo_lara5_53",BM="_searchinfoContent_lara5_63",MM="_filterSection_lara5_75",Vi={pageContent:LM,pageContentContainer:AM,resultInfo:IM,searchinput:zM,searchinfo:NM,searchinfoContent:BM,filterSection:MM},hx=()=>{const{t:e}=vl("common"),t=Sr(A=>A.evsearchResult.loading),n=cM(),r=async()=>await n(km()),o=tz("(max-width: 768px)"),a=Sr(A=>A.evsearchResult.evList.evs),s=Sr(A=>A.evsearchResult.evList.count),u=Sr(A=>A.evsearchResult.searchOptions.bodyTypes),c=Sr(A=>A.evsearchResult.searchOptions.colors),f=Sr(A=>A.evsearchResult.searchOptions.seatConfiguration),p=Sr(A=>A.evsearchResult.searchOptions.brands),h=Sr(A=>A.evsearchResult.search),_=async A=>await n(Sm(A)),v=Sr(A=>A.evsearchResult.error);k.useEffect(()=>{t&&(r(),_(h))},[]),k.useEffect(()=>{t||_(h)},[h]);const y=A=>{n(Z5(A))},b=A=>{n(K5(A))},P=p.map(A=>({label:A,value:A})),g=u.map(A=>({label:A,value:A,checked:h.evType===void 0||h.evType.includes(A)})),x=c.map(A=>({label:A,value:A,checked:h.colors===void 0||h.colors.includes(A)})),S=A=>{n(q5(A))},E=A=>{n(Q5(A))},R=A=>{n(G5(A.target.checked))},T=A=>{n(aM(A.target.checked))},N=A=>{n(iM(A.target.checked))},j=A=>{n(sM(A.target.checked))},W=A=>{n(J5(A.target.checked))},M=A=>{n(Y5(A.target.checked))},H=A=>{n(X5(A.target.checked))},G=A=>{n(eM(A.target.checked))},K=A=>{n(tM(A.target.checked))},U=A=>{n(rM(A.target.checked))},re=A=>{n(lM(A.target.checked))},q=A=>{n(uM(A.target.checked))},se=A=>{n(nM(A.target.checked))},B=A=>{n(oM(A))},Y=()=>v?Z.jsx(SL,{title:e("api_delegation.data_retrieval_failed"),variant:oo.Error,forceMobileLayout:!0,children:Z.jsxs("div",{children:[e("api_delegation.error_message"),": ",v]})}):t?Z.jsx("center",{children:Z.jsx(AI,{title:"Spinner",size:"3xLarge",variant:"interaction"})}):a.map((A,O)=>Z.jsx(PM,{title:A.name,subtitle:A.sortValue+" "+A.sortParameter,maxPower:A.maxPowerKw,topSpeedKph:A.topSpeedKph,infoUri:A.infoUri,wltpConsumption:A.wltpConsumption,wltpRange:A.wltpRange,netBattery:A.netBattery,zeroTo100:A.zeroTo100,thumbUri:A.thumbUri,averageDcChargingSpeed:A.averageDcChargingSpeed,maxDcChargingSpeed:A.maxDcChargingSpeed},O));return Z.jsx(pM,{children:Z.jsx(RM,{children:Z.jsxs(Nh,{children:[Z.jsxs("div",{className:Vi.pageContent,children:[Z.jsx(ik,{size:"large",children:"Welcome to EVKX EV Search"}),Z.jsxs(NI,{size:"medium",children:["EVKX offers the most comprehensive search for EVs.",Z.jsx("br",{}),"You can search and sort on a whole lot of parameters. ",Z.jsx("br",{}),"Please read our ",Z.jsx("a",{href:"/guides/evsearch/",children:"search guide"}),Z.jsx("br",{})]}),Z.jsxs("div",{className:Vi.filterSection,children:[Z.jsx(Sh,{options:P,icon:Z.jsx(_h,{}),label:String(e("evsearch.brandfilter")),applyButtonLabel:String(e("common.apply")),resetButtonLabel:String(e("common.reset_choices")),closeButtonAriaLabel:String(e("common.close")),searchable:!0,onApply:b,fullScreenModal:o}),Z.jsx(Sh,{options:g,icon:Z.jsx(_h,{}),label:String(e("evsearch.evtypefilter")),applyButtonLabel:String(e("common.apply")),resetButtonLabel:String(e("common.reset_choices")),closeButtonAriaLabel:String(e("common.close")),searchable:!0,onApply:S,fullScreenModal:o}),Z.jsx(Sh,{options:x,icon:Z.jsx(_h,{}),label:String(e("evsearch.paintColor")),applyButtonLabel:String(e("common.apply")),resetButtonLabel:String(e("common.reset_choices")),closeButtonAriaLabel:String(e("common.close")),searchable:!0,onApply:B,fullScreenModal:o})]}),Z.jsx("br",{}),Z.jsx(CS,{items:[{content:Z.jsx(XS,{"data-testid":"evsearch-seatconfig",variant:sm.Horizontal,onChange:A=>{E(A)},compact:!0,legend:"Number of seats",items:f.map(A=>({label:A,name:A,checked:h.seatConfiguration===void 0||h.seatConfiguration.includes(A)}))}),name:"Seats"},{content:Z.jsxs(Nh,{children:[Z.jsx(Mt,{checked:h.allWheelDrive,label:"All wheel drive",onChange:R,compact:!0}),Z.jsx("br",{}),Z.jsx(Mt,{checked:h.rWD,label:"RWD",onChange:T,compact:!0}),Z.jsx("br",{}),Z.jsx(Mt,{checked:h.fWD,label:"FWD",onChange:N,compact:!0}),Z.jsx("br",{}),Z.jsx(Mt,{checked:h.adaptiveSuspension,label:"Adaptive Suspension",onChange:M,compact:!0}),Z.jsx("br",{}),Z.jsx(Mt,{checked:h.airSuspension,label:"Air Suspension",onChange:H,compact:!0}),Z.jsx("br",{}),Z.jsx(Mt,{checked:h.rearAxleSteering,label:"Rear Axle Steering",onChange:j,compact:!0})]}),name:"Drivetrain"},{content:Z.jsxs(Nh,{children:[Z.jsx(Mt,{checked:h.nightVision,label:"Nightvision",onChange:W,compact:!0}),Z.jsx("br",{}),Z.jsx(Mt,{checked:h.adaptiveCruiseControl,label:"AdaptiveCruiseControl",onChange:re,compact:!0}),Z.jsx("br",{}),Z.jsx(Mt,{checked:h.autoSteer,label:"Autosteer",onChange:q,compact:!0}),Z.jsx("br",{}),"Read more about Adavanced Driver Assist Systems in our"," ",Z.jsx("a",{href:"../technology/driverassistance/",children:"technology section"})]}),name:"Driver Assistance"},{content:Z.jsxs("div",{children:[Z.jsx(Mt,{checked:h.headUpDisplay,label:"Head Up Display",onChange:K,compact:!0}),Z.jsx("br",{}),Z.jsx(Mt,{checked:h.instrumentCluster,label:"Dedicated Instrument Cluster",onChange:G,compact:!0}),Z.jsx("br",{}),Z.jsx(Mt,{checked:h.androidAuto,label:"Android Auto Support",onChange:se,compact:!0}),Z.jsx("br",{}),Z.jsx(Mt,{checked:h.appleCarPlay,label:"Apple Car Play Support",onChange:U,compact:!0})]}),name:"UI & Interface"}]}),Z.jsx(rk,{label:String(e("evsearch.sortorder")),multiple:!1,onChange:y,options:[{label:String(e("evsearch.sortorderbrand")),value:"Name"},{label:String(e("evsearch.specwltprange")),value:"RangeMinimumWltp"},{label:String(e("evsearch.specwltpconsumption")),value:"WltpBasicConsumption"},{label:String(e("evsearch.sortordernetsize")),value:"NetBattery"},{label:String(e("evsearch.sortordernetsizedesc")),value:"NetBatteryDesc"},{label:String(e("evsearch.maxpowersort")),value:"PowerDesc"},{label:String(e("evsearch.topspeedsort")),value:"TopSpeedDesc"},{label:String(e("evsearch.maxdcchargingsort")),value:"MaxDCCharging"},{label:String(e("evsearch.averagechargingspeed0100")),value:"AverageChargingSpeedDesc"},{label:String(e("evsearch.averagechargingspeed10100")),value:"AverageChargingSpeed10100Desc"},{label:String(e("evsearch.averagechargingspeed1080")),value:"AverageChargingSpeed1080Desc"},{label:String(e("evsearch.sort0100kmh")),value:"ZeroTo100"},{label:String(e("evsearch.sort1000kmdrivingtime")),value:"DrivingTime1000kmChallenge"},{label:String(e("evsearch.sort1000kmaveragespeed")),value:"AverageSpeed1000kmChallengeDesc"},{label:String(e("evsearch.travelspeedwltpcyclus")),value:"TravelSpeedWltpDesc"},{label:String(e("evsearch.travelspeed120kmh")),value:"TravelSpeed120kmhDesc"},{label:String(e("evsearch.nominalvoltagesort")),value:"NominalVoltage"},{label:String(e("evsearch.trunksize")),value:"TrunkSizeDesc"},{label:String(e("evsearch.maxtrunksize")),value:"MaxTrunkSizeDesc"},{label:String(e("evsearch.maxload")),value:"MaxLoadDesc"},{label:String(e("evsearch.maxtrailer")),value:"MaxTrailerSizeDesc"},{label:String(e("evsearch.maxgroundclearance")),value:"MaxGroundClearanceDesc"},{label:String(e("evsearch.mingroundclearance")),value:"MinGroundClearance"},{label:String(e("evsearch.suspensionheightadjustment")),value:"SuspensionHeightAdjustment"}]})]}),Z.jsx("div",{className:Vi.pageContentAccordionsContainer,children:Z.jsxs("div",{className:Vi.apiAccordions,children:[Z.jsxs("h4",{className:Vi.resultInfo,children:[s," ",e("evsearch.searchresult"),":"]}),Z.jsx("div",{className:Vi.accordionScrollContainer,children:Y()})]})})]})})})},DM=MR([{path:"/",errorElement:Z.jsx(Xf,{})},{path:"evsearch",element:Z.jsx(hx,{}),errorElement:Z.jsx(Xf,{})},{path:"nb/evsearch",element:Z.jsx(hx,{}),errorElement:Z.jsx(Xf,{})}],{basename:"/"}),jM={backendApiUrl:new URL(window.location.href).origin+"/api/",defaultLocale:"no_nb"},Fu={backendApiUrl:{}.VITE_BACKEND_API_URL,defaultLocale:{}.VITE_DEFAULT_LOCALE};for(const e in Fu)Fu[e]===void 0&&delete Fu[e];const FM={...jM,...Fu};function $M(e){return FM[e]}const UM=({children:e})=>{const{i18n:t}=vl("common"),n=window.location.href;let r="en";n.includes("nb/")&&(r="no_nb");const a=`/public/localizations/${r}.json`,s=new URL(a,import.meta.url).href;return zT("Localizations",async()=>{const c=await(await fetch(s)).json();Ut.addResourceBundle(t.language,"common",c)},{staleTime:1/0,suspense:!0}),Z.jsx(Z.Fragment,{children:e})};var Hc={},WM={get exports(){return Hc},set exports(e){Hc=e}};(function(e,t){(function(n,r){r(t)})(Zi,function(n){function r(O,z){O.super_=z,O.prototype=Object.create(z.prototype,{constructor:{value:O,enumerable:!1,writable:!0,configurable:!0}})}function o(O,z){Object.defineProperty(this,"kind",{value:O,enumerable:!0}),z&&z.length&&Object.defineProperty(this,"path",{value:z,enumerable:!0})}function a(O,z,D){a.super_.call(this,"E",O),Object.defineProperty(this,"lhs",{value:z,enumerable:!0}),Object.defineProperty(this,"rhs",{value:D,enumerable:!0})}function s(O,z){s.super_.call(this,"N",O),Object.defineProperty(this,"rhs",{value:z,enumerable:!0})}function u(O,z){u.super_.call(this,"D",O),Object.defineProperty(this,"lhs",{value:z,enumerable:!0})}function c(O,z,D){c.super_.call(this,"A",O),Object.defineProperty(this,"index",{value:z,enumerable:!0}),Object.defineProperty(this,"item",{value:D,enumerable:!0})}function f(O,z,D){var V=O.slice((D||z)+1||O.length);return O.length=z<0?O.length+z:z,O.push.apply(O,V),O}function p(O){var z=typeof O>"u"?"undefined":re(O);return z!=="object"?z:O===Math?"math":O===null?"null":Array.isArray(O)?"array":Object.prototype.toString.call(O)==="[object Date]"?"date":typeof O.toString=="function"&&/^\/.*\//.test(O.toString())?"regexp":"object"}function h(O,z,D,V,te,ie,fe){te=te||[],fe=fe||[];var be=te.slice(0);if(typeof ie<"u"){if(V){if(typeof V=="function"&&V(be,ie))return;if((typeof V>"u"?"undefined":re(V))==="object"){if(V.prefilter&&V.prefilter(be,ie))return;if(V.normalize){var Je=V.normalize(be,ie,O,z);Je&&(O=Je[0],z=Je[1])}}}be.push(ie)}p(O)==="regexp"&&p(z)==="regexp"&&(O=O.toString(),z=z.toString());var Ze=typeof O>"u"?"undefined":re(O),Re=typeof z>"u"?"undefined":re(z),le=Ze!=="undefined"||fe&&fe[fe.length-1].lhs&&fe[fe.length-1].lhs.hasOwnProperty(ie),me=Re!=="undefined"||fe&&fe[fe.length-1].rhs&&fe[fe.length-1].rhs.hasOwnProperty(ie);if(!le&&me)D(new s(be,z));else if(!me&&le)D(new u(be,O));else if(p(O)!==p(z))D(new a(be,O,z));else if(p(O)==="date"&&O-z!==0)D(new a(be,O,z));else if(Ze==="object"&&O!==null&&z!==null)if(fe.filter(function(_e){return _e.lhs===O}).length)O!==z&&D(new a(be,O,z));else{if(fe.push({lhs:O,rhs:z}),Array.isArray(O)){var ee;for(O.length,ee=0;ee<O.length;ee++)ee>=z.length?D(new c(be,ee,new u(void 0,O[ee]))):h(O[ee],z[ee],D,V,be,ee,fe);for(;ee<z.length;)D(new c(be,ee,new s(void 0,z[ee++])))}else{var ce=Object.keys(O),de=Object.keys(z);ce.forEach(function(_e,ke){var Ne=de.indexOf(_e);Ne>=0?(h(O[_e],z[_e],D,V,be,_e,fe),de=f(de,Ne)):h(O[_e],void 0,D,V,be,_e,fe)}),de.forEach(function(_e){h(void 0,z[_e],D,V,be,_e,fe)})}fe.length=fe.length-1}else O!==z&&(Ze==="number"&&isNaN(O)&&isNaN(z)||D(new a(be,O,z)))}function _(O,z,D,V){return V=V||[],h(O,z,function(te){te&&V.push(te)},D),V.length?V:void 0}function v(O,z,D){if(D.path&&D.path.length){var V,te=O[z],ie=D.path.length-1;for(V=0;V<ie;V++)te=te[D.path[V]];switch(D.kind){case"A":v(te[D.path[V]],D.index,D.item);break;case"D":delete te[D.path[V]];break;case"E":case"N":te[D.path[V]]=D.rhs}}else switch(D.kind){case"A":v(O[z],D.index,D.item);break;case"D":O=f(O,z);break;case"E":case"N":O[z]=D.rhs}return O}function y(O,z,D){if(O&&z&&D&&D.kind){for(var V=O,te=-1,ie=D.path?D.path.length-1:0;++te<ie;)typeof V[D.path[te]]>"u"&&(V[D.path[te]]=typeof D.path[te]=="number"?[]:{}),V=V[D.path[te]];switch(D.kind){case"A":v(D.path?V[D.path[te]]:V,D.index,D.item);break;case"D":delete V[D.path[te]];break;case"E":case"N":V[D.path[te]]=D.rhs}}}function b(O,z,D){if(D.path&&D.path.length){var V,te=O[z],ie=D.path.length-1;for(V=0;V<ie;V++)te=te[D.path[V]];switch(D.kind){case"A":b(te[D.path[V]],D.index,D.item);break;case"D":te[D.path[V]]=D.lhs;break;case"E":te[D.path[V]]=D.lhs;break;case"N":delete te[D.path[V]]}}else switch(D.kind){case"A":b(O[z],D.index,D.item);break;case"D":O[z]=D.lhs;break;case"E":O[z]=D.lhs;break;case"N":O=f(O,z)}return O}function P(O,z,D){if(O&&z&&D&&D.kind){var V,te,ie=O;for(te=D.path.length-1,V=0;V<te;V++)typeof ie[D.path[V]]>"u"&&(ie[D.path[V]]={}),ie=ie[D.path[V]];switch(D.kind){case"A":b(ie[D.path[V]],D.index,D.item);break;case"D":ie[D.path[V]]=D.lhs;break;case"E":ie[D.path[V]]=D.lhs;break;case"N":delete ie[D.path[V]]}}}function g(O,z,D){if(O&&z){var V=function(te){D&&!D(O,z,te)||y(O,z,te)};h(O,z,V)}}function x(O){return"color: "+B[O].color+"; font-weight: bold"}function S(O){var z=O.kind,D=O.path,V=O.lhs,te=O.rhs,ie=O.index,fe=O.item;switch(z){case"E":return[D.join("."),V,"→",te];case"N":return[D.join("."),te];case"D":return[D.join(".")];case"A":return[D.join(".")+"["+ie+"]",fe];default:return[]}}function E(O,z,D,V){var te=_(O,z);try{V?D.groupCollapsed("diff"):D.group("diff")}catch{D.log("diff")}te?te.forEach(function(ie){var fe=ie.kind,be=S(ie);D.log.apply(D,["%c "+B[fe].text,x(fe)].concat(q(be)))}):D.log("—— no diff ——");try{D.groupEnd()}catch{D.log("—— diff end —— ")}}function R(O,z,D,V){switch(typeof O>"u"?"undefined":re(O)){case"object":return typeof O[V]=="function"?O[V].apply(O,q(D)):O[V];case"function":return O(z);default:return O}}function T(O){var z=O.timestamp,D=O.duration;return function(V,te,ie){var fe=["action"];return fe.push("%c"+String(V.type)),z&&fe.push("%c@ "+te),D&&fe.push("%c(in "+ie.toFixed(2)+" ms)"),fe.join(" ")}}function N(O,z){var D=z.logger,V=z.actionTransformer,te=z.titleFormatter,ie=te===void 0?T(z):te,fe=z.collapsed,be=z.colors,Je=z.level,Ze=z.diff,Re=typeof z.titleFormatter>"u";O.forEach(function(le,me){var ee=le.started,ce=le.startedTime,de=le.action,_e=le.prevState,ke=le.error,Ne=le.took,$e=le.nextState,Ye=O[me+1];Ye&&($e=Ye.prevState,Ne=Ye.started-ee);var tt=V(de),qt=typeof fe=="function"?fe(function(){return $e},de,le):fe,Pi=K(ce),No=be.title?"color: "+be.title(tt)+";":"",En=["color: gray; font-weight: lighter;"];En.push(No),z.timestamp&&En.push("color: gray; font-weight: lighter;"),z.duration&&En.push("color: gray; font-weight: lighter;");var Qn=ie(tt,Pi,Ne);try{qt?be.title&&Re?D.groupCollapsed.apply(D,["%c "+Qn].concat(En)):D.groupCollapsed(Qn):be.title&&Re?D.group.apply(D,["%c "+Qn].concat(En)):D.group(Qn)}catch{D.log(Qn)}var mr=R(Je,tt,[_e],"prevState"),Bo=R(Je,tt,[tt],"action"),J=R(Je,tt,[ke,_e],"error"),X=R(Je,tt,[$e],"nextState");if(mr)if(be.prevState){var ae="color: "+be.prevState(_e)+"; font-weight: bold";D[mr]("%c prev state",ae,_e)}else D[mr]("prev state",_e);if(Bo)if(be.action){var ge="color: "+be.action(tt)+"; font-weight: bold";D[Bo]("%c action    ",ge,tt)}else D[Bo]("action    ",tt);if(ke&&J)if(be.error){var ye="color: "+be.error(ke,_e)+"; font-weight: bold;";D[J]("%c error     ",ye,ke)}else D[J]("error     ",ke);if(X)if(be.nextState){var Se="color: "+be.nextState($e)+"; font-weight: bold";D[X]("%c next state",Se,$e)}else D[X]("next state",$e);Ze&&E(_e,$e,D,qt);try{D.groupEnd()}catch{D.log("—— log end ——")}})}function j(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},z=Object.assign({},Y,O),D=z.logger,V=z.stateTransformer,te=z.errorTransformer,ie=z.predicate,fe=z.logErrors,be=z.diffPredicate;if(typeof D>"u")return function(){return function(Ze){return function(Re){return Ze(Re)}}};if(O.getState&&O.dispatch)return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
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
`),function(){return function(Ze){return function(Re){return Ze(Re)}}};var Je=[];return function(Ze){var Re=Ze.getState;return function(le){return function(me){if(typeof ie=="function"&&!ie(Re,me))return le(me);var ee={};Je.push(ee),ee.started=U.now(),ee.startedTime=new Date,ee.prevState=V(Re()),ee.action=me;var ce=void 0;if(fe)try{ce=le(me)}catch(_e){ee.error=te(_e)}else ce=le(me);ee.took=U.now()-ee.started,ee.nextState=V(Re());var de=z.diff&&typeof be=="function"?be(Re,me):z.diff;if(N(Je,Object.assign({},z,{diff:de})),Je.length=0,ee.error)throw ee.error;return ce}}}}var W,M,H=function(O,z){return new Array(z+1).join(O)},G=function(O,z){return H("0",z-O.toString().length)+O},K=function(O){return G(O.getHours(),2)+":"+G(O.getMinutes(),2)+":"+G(O.getSeconds(),2)+"."+G(O.getMilliseconds(),3)},U=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance:Date,re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},q=function(O){if(Array.isArray(O)){for(var z=0,D=Array(O.length);z<O.length;z++)D[z]=O[z];return D}return Array.from(O)},se=[];W=(typeof Zi>"u"?"undefined":re(Zi))==="object"&&Zi?Zi:typeof window<"u"?window:{},M=W.DeepDiff,M&&se.push(function(){typeof M<"u"&&W.DeepDiff===_&&(W.DeepDiff=M,M=void 0)}),r(a,o),r(s,o),r(u,o),r(c,o),Object.defineProperties(_,{diff:{value:_,enumerable:!0},observableDiff:{value:h,enumerable:!0},applyDiff:{value:g,enumerable:!0},applyChange:{value:y,enumerable:!0},revertChange:{value:P,enumerable:!0},isConflict:{value:function(){return typeof M<"u"},enumerable:!0},noConflict:{value:function(){return se&&(se.forEach(function(O){O()}),se=null),_},enumerable:!0}});var B={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},Y={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(O){return O},actionTransformer:function(O){return O},errorTransformer:function(O){return O},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},A=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},z=O.dispatch,D=O.getState;return typeof z=="function"||typeof D=="function"?j()({dispatch:z,getState:D}):void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`)};n.defaults=Y,n.createLogger=j,n.logger=A,n.default=A,Object.defineProperty(n,"__esModule",{value:!0})})})(WM,Hc);Hc.createLogger();const HM=I5({reducer:{evsearchResult:V5}}),VM=e=>{if(e==="no_nb")return"no_nb";if(e==="en")return"en";if(e==="no_nn")return"no_nn"};fL(YR).init({lng:VM("no_nb"),fallbackLng:$M("defaultLocale"),ns:["common"],defaultNS:"common",returnNull:!1},()=>{const e=new wT({defaultOptions:void 0});S1(document.getElementById("root")).render(Z.jsx(k.StrictMode,{children:Z.jsx(R2,{store:HM,children:Z.jsx(OT,{client:e,children:Z.jsx(UM,{children:Z.jsx(IR,{router:DM})})})})}))});
