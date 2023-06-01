function lC(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var Hi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Q={},uC={get exports(){return Q},set exports(e){Q=e}},qc={},k={},cC={get exports(){return k},set exports(e){k=e}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fl=Symbol.for("react.element"),dC=Symbol.for("react.portal"),fC=Symbol.for("react.fragment"),hC=Symbol.for("react.strict_mode"),pC=Symbol.for("react.profiler"),mC=Symbol.for("react.provider"),_C=Symbol.for("react.context"),gC=Symbol.for("react.forward_ref"),vC=Symbol.for("react.suspense"),yC=Symbol.for("react.memo"),bC=Symbol.for("react.lazy"),Qg=Symbol.iterator;function xC(e){return e===null||typeof e!="object"?null:(e=Qg&&e[Qg]||e["@@iterator"],typeof e=="function"?e:null)}var px={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mx=Object.assign,_x={};function Aa(e,t,n){this.props=e,this.context=t,this.refs=_x,this.updater=n||px}Aa.prototype.isReactComponent={};Aa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Aa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gx(){}gx.prototype=Aa.prototype;function km(e,t,n){this.props=e,this.context=t,this.refs=_x,this.updater=n||px}var Pm=km.prototype=new gx;Pm.constructor=km;mx(Pm,Aa.prototype);Pm.isPureReactComponent=!0;var Gg=Array.isArray,vx=Object.prototype.hasOwnProperty,Cm={current:null},yx={key:!0,ref:!0,__self:!0,__source:!0};function bx(e,t,n){var r,o={},a=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)vx.call(t,r)&&!yx.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(u===1)o.children=n;else if(1<u){for(var c=Array(u),f=0;f<u;f++)c[f]=arguments[f+2];o.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)o[r]===void 0&&(o[r]=u[r]);return{$$typeof:fl,type:e,key:a,ref:s,props:o,_owner:Cm.current}}function wC(e,t){return{$$typeof:fl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Em(e){return typeof e=="object"&&e!==null&&e.$$typeof===fl}function SC(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Jg=/\/+/g;function kf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?SC(""+e.key):t.toString(36)}function _u(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case fl:case dC:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+kf(s,0):r,Gg(o)?(n="",e!=null&&(n=e.replace(Jg,"$&/")+"/"),_u(o,t,n,"",function(f){return f})):o!=null&&(Em(o)&&(o=wC(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Jg,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Gg(e))for(var u=0;u<e.length;u++){a=e[u];var c=r+kf(a,u);s+=_u(a,t,n,c,o)}else if(c=xC(e),typeof c=="function")for(e=c.call(e),u=0;!(a=e.next()).done;)a=a.value,c=r+kf(a,u++),s+=_u(a,t,n,c,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Vl(e,t,n){if(e==null)return e;var r=[],o=0;return _u(e,r,"","",function(a){return t.call(n,a,o++)}),r}function kC(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Vt={current:null},gu={transition:null},PC={ReactCurrentDispatcher:Vt,ReactCurrentBatchConfig:gu,ReactCurrentOwner:Cm};Le.Children={map:Vl,forEach:function(e,t,n){Vl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vl(e,function(){t++}),t},toArray:function(e){return Vl(e,function(t){return t})||[]},only:function(e){if(!Em(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Le.Component=Aa;Le.Fragment=fC;Le.Profiler=pC;Le.PureComponent=km;Le.StrictMode=hC;Le.Suspense=vC;Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PC;Le.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=mx({},e.props),o=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=Cm.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)vx.call(t,c)&&!yx.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&u!==void 0?u[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){u=Array(c);for(var f=0;f<c;f++)u[f]=arguments[f+2];r.children=u}return{$$typeof:fl,type:e.type,key:o,ref:a,props:r,_owner:s}};Le.createContext=function(e){return e={$$typeof:_C,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mC,_context:e},e.Consumer=e};Le.createElement=bx;Le.createFactory=function(e){var t=bx.bind(null,e);return t.type=e,t};Le.createRef=function(){return{current:null}};Le.forwardRef=function(e){return{$$typeof:gC,render:e}};Le.isValidElement=Em;Le.lazy=function(e){return{$$typeof:bC,_payload:{_status:-1,_result:e},_init:kC}};Le.memo=function(e,t){return{$$typeof:yC,type:e,compare:t===void 0?null:t}};Le.startTransition=function(e){var t=gu.transition;gu.transition={};try{e()}finally{gu.transition=t}};Le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Le.useCallback=function(e,t){return Vt.current.useCallback(e,t)};Le.useContext=function(e){return Vt.current.useContext(e)};Le.useDebugValue=function(){};Le.useDeferredValue=function(e){return Vt.current.useDeferredValue(e)};Le.useEffect=function(e,t){return Vt.current.useEffect(e,t)};Le.useId=function(){return Vt.current.useId()};Le.useImperativeHandle=function(e,t,n){return Vt.current.useImperativeHandle(e,t,n)};Le.useInsertionEffect=function(e,t){return Vt.current.useInsertionEffect(e,t)};Le.useLayoutEffect=function(e,t){return Vt.current.useLayoutEffect(e,t)};Le.useMemo=function(e,t){return Vt.current.useMemo(e,t)};Le.useReducer=function(e,t,n){return Vt.current.useReducer(e,t,n)};Le.useRef=function(e){return Vt.current.useRef(e)};Le.useState=function(e){return Vt.current.useState(e)};Le.useSyncExternalStore=function(e,t,n){return Vt.current.useSyncExternalStore(e,t,n)};Le.useTransition=function(){return Vt.current.useTransition()};Le.version="18.2.0";(function(e){e.exports=Le})(cC);const j=hx(k),Kc=lC({__proto__:null,default:j},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CC=k,EC=Symbol.for("react.element"),OC=Symbol.for("react.fragment"),RC=Object.prototype.hasOwnProperty,TC=CC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LC={key:!0,ref:!0,__self:!0,__source:!0};function xx(e,t,n){var r,o={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)RC.call(t,r)&&!LC.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:EC,type:e,key:a,ref:s,props:o,_owner:TC.current}}qc.Fragment=OC;qc.jsx=xx;qc.jsxs=xx;(function(e){e.exports=qc})(uC);var ko={},AC={get exports(){return ko},set exports(e){ko=e}},dn={},Bh={},IC={get exports(){return Bh},set exports(e){Bh=e}},wx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,Y){var U=O.length;O.push(Y);e:for(;0<U;){var R=U-1>>>1,z=O[R];if(0<o(z,Y))O[R]=Y,O[U]=z,U=R;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var Y=O[0],U=O.pop();if(U!==Y){O[0]=U;e:for(var R=0,z=O.length,M=z>>>1;R<M;){var V=2*(R+1)-1,te=O[V],ie=V+1,fe=O[ie];if(0>o(te,U))ie<z&&0>o(fe,te)?(O[R]=fe,O[ie]=U,R=ie):(O[R]=te,O[V]=U,R=V);else if(ie<z&&0>o(fe,U))O[R]=fe,O[ie]=U,R=ie;else break e}}return Y}function o(O,Y){var U=O.sortIndex-Y.sortIndex;return U!==0?U:O.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,u=s.now();e.unstable_now=function(){return s.now()-u}}var c=[],f=[],p=1,h=null,_=3,v=!1,y=!1,b=!1,P=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(O){for(var Y=n(f);Y!==null;){if(Y.callback===null)r(f);else if(Y.startTime<=O)r(f),Y.sortIndex=Y.expirationTime,t(c,Y);else break;Y=n(f)}}function E(O){if(b=!1,S(O),!y)if(n(c)!==null)y=!0,Z(T);else{var Y=n(f);Y!==null&&se(E,Y.startTime-O)}}function T(O,Y){y=!1,b&&(b=!1,g(D),D=-1),v=!0;var U=_;try{for(S(Y),h=n(c);h!==null&&(!(h.expirationTime>Y)||O&&!H());){var R=h.callback;if(typeof R=="function"){h.callback=null,_=h.priorityLevel;var z=R(h.expirationTime<=Y);Y=e.unstable_now(),typeof z=="function"?h.callback=z:h===n(c)&&r(c),S(Y)}else r(c);h=n(c)}if(h!==null)var M=!0;else{var V=n(f);V!==null&&se(E,V.startTime-Y),M=!1}return M}finally{h=null,_=U,v=!1}}var A=!1,N=null,D=-1,W=5,B=-1;function H(){return!(e.unstable_now()-B<W)}function G(){if(N!==null){var O=e.unstable_now();B=O;var Y=!0;try{Y=N(!0,O)}finally{Y?q():(A=!1,N=null)}}else A=!1}var q;if(typeof x=="function")q=function(){x(G)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,re=$.port2;$.port1.onmessage=G,q=function(){re.postMessage(null)}}else q=function(){P(G,0)};function Z(O){N=O,A||(A=!0,q())}function se(O,Y){D=P(function(){O(e.unstable_now())},Y)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Z(T))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return _},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(O){switch(_){case 1:case 2:case 3:var Y=3;break;default:Y=_}var U=_;_=Y;try{return O()}finally{_=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,Y){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var U=_;_=O;try{return Y()}finally{_=U}},e.unstable_scheduleCallback=function(O,Y,U){var R=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?R+U:R):U=R,O){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=U+z,O={id:p++,callback:Y,priorityLevel:O,startTime:U,expirationTime:z,sortIndex:-1},U>R?(O.sortIndex=U,t(f,O),n(c)===null&&O===n(f)&&(b?(g(D),D=-1):b=!0,se(E,U-R))):(O.sortIndex=z,t(c,O),y||v||(y=!0,Z(T))),O},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(O){var Y=_;return function(){var U=_;_=Y;try{return O.apply(this,arguments)}finally{_=U}}}})(wx);(function(e){e.exports=wx})(IC);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sx=k,un=Bh;function ue(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kx=new Set,Ns={};function wi(e,t){ga(e,t),ga(e+"Capture",t)}function ga(e,t){for(Ns[e]=t,e=0;e<t.length;e++)kx.add(t[e])}var Nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mh=Object.prototype.hasOwnProperty,zC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yg={},Xg={};function NC(e){return Mh.call(Xg,e)?!0:Mh.call(Yg,e)?!1:zC.test(e)?Xg[e]=!0:(Yg[e]=!0,!1)}function BC(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function MC(e,t,n,r){if(t===null||typeof t>"u"||BC(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Zt(e,t,n,r,o,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var At={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){At[e]=new Zt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];At[t]=new Zt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){At[e]=new Zt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){At[e]=new Zt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){At[e]=new Zt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){At[e]=new Zt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){At[e]=new Zt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){At[e]=new Zt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){At[e]=new Zt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Om=/[\-:]([a-z])/g;function Rm(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Om,Rm);At[t]=new Zt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Om,Rm);At[t]=new Zt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Om,Rm);At[t]=new Zt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){At[e]=new Zt(e,1,!1,e.toLowerCase(),null,!1,!1)});At.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){At[e]=new Zt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Tm(e,t,n,r){var o=At.hasOwnProperty(t)?At[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(MC(t,n,o,r)&&(n=null),r||o===null?NC(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Fr=Sx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zl=Symbol.for("react.element"),Zi=Symbol.for("react.portal"),qi=Symbol.for("react.fragment"),Lm=Symbol.for("react.strict_mode"),Dh=Symbol.for("react.profiler"),Px=Symbol.for("react.provider"),Cx=Symbol.for("react.context"),Am=Symbol.for("react.forward_ref"),jh=Symbol.for("react.suspense"),Fh=Symbol.for("react.suspense_list"),Im=Symbol.for("react.memo"),Qr=Symbol.for("react.lazy"),Ex=Symbol.for("react.offscreen"),ev=Symbol.iterator;function ts(e){return e===null||typeof e!="object"?null:(e=ev&&e[ev]||e["@@iterator"],typeof e=="function"?e:null)}var ut=Object.assign,Pf;function ms(e){if(Pf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pf=t&&t[1]||""}return`
`+Pf+e}var Cf=!1;function Ef(e,t){if(!e||Cf)return"";Cf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var o=f.stack.split(`
`),a=r.stack.split(`
`),s=o.length-1,u=a.length-1;1<=s&&0<=u&&o[s]!==a[u];)u--;for(;1<=s&&0<=u;s--,u--)if(o[s]!==a[u]){if(s!==1||u!==1)do if(s--,u--,0>u||o[s]!==a[u]){var c=`
`+o[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=u);break}}}finally{Cf=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ms(e):""}function DC(e){switch(e.tag){case 5:return ms(e.type);case 16:return ms("Lazy");case 13:return ms("Suspense");case 19:return ms("SuspenseList");case 0:case 2:case 15:return e=Ef(e.type,!1),e;case 11:return e=Ef(e.type.render,!1),e;case 1:return e=Ef(e.type,!0),e;default:return""}}function $h(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qi:return"Fragment";case Zi:return"Portal";case Dh:return"Profiler";case Lm:return"StrictMode";case jh:return"Suspense";case Fh:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cx:return(e.displayName||"Context")+".Consumer";case Px:return(e._context.displayName||"Context")+".Provider";case Am:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Im:return t=e.displayName||null,t!==null?t:$h(e.type)||"Memo";case Qr:t=e._payload,e=e._init;try{return $h(e(t))}catch{}}return null}function jC(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $h(t);case 8:return t===Lm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Po(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ox(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function FC(e){var t=Ox(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ql(e){e._valueTracker||(e._valueTracker=FC(e))}function Rx(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ox(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Wu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Uh(e,t){var n=t.checked;return ut({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function tv(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Po(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Tx(e,t){t=t.checked,t!=null&&Tm(e,"checked",t,!1)}function Wh(e,t){Tx(e,t);var n=Po(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hh(e,t.type,n):t.hasOwnProperty("defaultValue")&&Hh(e,t.type,Po(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function nv(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Hh(e,t,n){(t!=="number"||Wu(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var _s=Array.isArray;function aa(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Po(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Vh(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(ue(91));return ut({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function rv(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(ue(92));if(_s(n)){if(1<n.length)throw Error(ue(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Po(n)}}function Lx(e,t){var n=Po(t.value),r=Po(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ov(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ax(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zh(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ax(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Kl,Ix=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Kl=Kl||document.createElement("div"),Kl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Kl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$C=["Webkit","ms","Moz","O"];Object.keys(bs).forEach(function(e){$C.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),bs[t]=bs[e]})});function zx(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||bs.hasOwnProperty(e)&&bs[e]?(""+t).trim():t+"px"}function Nx(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=zx(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var UC=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qh(e,t){if(t){if(UC[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(ue(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(ue(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(ue(61))}if(t.style!=null&&typeof t.style!="object")throw Error(ue(62))}}function Kh(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qh=null;function zm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gh=null,sa=null,la=null;function iv(e){if(e=ml(e)){if(typeof Gh!="function")throw Error(ue(280));var t=e.stateNode;t&&(t=Xc(t),Gh(e.stateNode,e.type,t))}}function Bx(e){sa?la?la.push(e):la=[e]:sa=e}function Mx(){if(sa){var e=sa,t=la;if(la=sa=null,iv(e),t)for(e=0;e<t.length;e++)iv(t[e])}}function Dx(e,t){return e(t)}function jx(){}var Of=!1;function Fx(e,t,n){if(Of)return e(t,n);Of=!0;try{return Dx(e,t,n)}finally{Of=!1,(sa!==null||la!==null)&&(jx(),Mx())}}function Ms(e,t){var n=e.stateNode;if(n===null)return null;var r=Xc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(ue(231,t,typeof n));return n}var Jh=!1;if(Nr)try{var ns={};Object.defineProperty(ns,"passive",{get:function(){Jh=!0}}),window.addEventListener("test",ns,ns),window.removeEventListener("test",ns,ns)}catch{Jh=!1}function WC(e,t,n,r,o,a,s,u,c){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(p){this.onError(p)}}var xs=!1,Hu=null,Vu=!1,Yh=null,HC={onError:function(e){xs=!0,Hu=e}};function VC(e,t,n,r,o,a,s,u,c){xs=!1,Hu=null,WC.apply(HC,arguments)}function ZC(e,t,n,r,o,a,s,u,c){if(VC.apply(this,arguments),xs){if(xs){var f=Hu;xs=!1,Hu=null}else throw Error(ue(198));Vu||(Vu=!0,Yh=f)}}function Si(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $x(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function av(e){if(Si(e)!==e)throw Error(ue(188))}function qC(e){var t=e.alternate;if(!t){if(t=Si(e),t===null)throw Error(ue(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return av(o),e;if(a===r)return av(o),t;a=a.sibling}throw Error(ue(188))}if(n.return!==r.return)n=o,r=a;else{for(var s=!1,u=o.child;u;){if(u===n){s=!0,n=o,r=a;break}if(u===r){s=!0,r=o,n=a;break}u=u.sibling}if(!s){for(u=a.child;u;){if(u===n){s=!0,n=a,r=o;break}if(u===r){s=!0,r=a,n=o;break}u=u.sibling}if(!s)throw Error(ue(189))}}if(n.alternate!==r)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?e:t}function Ux(e){return e=qC(e),e!==null?Wx(e):null}function Wx(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Wx(e);if(t!==null)return t;e=e.sibling}return null}var Hx=un.unstable_scheduleCallback,sv=un.unstable_cancelCallback,KC=un.unstable_shouldYield,QC=un.unstable_requestPaint,mt=un.unstable_now,GC=un.unstable_getCurrentPriorityLevel,Nm=un.unstable_ImmediatePriority,Vx=un.unstable_UserBlockingPriority,Zu=un.unstable_NormalPriority,JC=un.unstable_LowPriority,Zx=un.unstable_IdlePriority,Qc=null,cr=null;function YC(e){if(cr&&typeof cr.onCommitFiberRoot=="function")try{cr.onCommitFiberRoot(Qc,e,void 0,(e.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:tE,XC=Math.log,eE=Math.LN2;function tE(e){return e>>>=0,e===0?32:31-(XC(e)/eE|0)|0}var Ql=64,Gl=4194304;function gs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qu(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,s=n&268435455;if(s!==0){var u=s&~o;u!==0?r=gs(u):(a&=s,a!==0&&(r=gs(a)))}else s=n&~o,s!==0?r=gs(s):a!==0&&(r=gs(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-jn(t),o=1<<n,r|=e[n],t&=~o;return r}function nE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-jn(a),u=1<<s,c=o[s];c===-1?(!(u&n)||u&r)&&(o[s]=nE(u,t)):c<=t&&(e.expiredLanes|=u),a&=~u}}function Xh(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qx(){var e=Ql;return Ql<<=1,!(Ql&4194240)&&(Ql=64),e}function Rf(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-jn(t),e[t]=n}function oE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-jn(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function Bm(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-jn(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Ke=0;function Kx(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qx,Mm,Gx,Jx,Yx,ep=!1,Jl=[],io=null,ao=null,so=null,Ds=new Map,js=new Map,Yr=[],iE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lv(e,t){switch(e){case"focusin":case"focusout":io=null;break;case"dragenter":case"dragleave":ao=null;break;case"mouseover":case"mouseout":so=null;break;case"pointerover":case"pointerout":Ds.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":js.delete(t.pointerId)}}function rs(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=ml(t),t!==null&&Mm(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function aE(e,t,n,r,o){switch(t){case"focusin":return io=rs(io,e,t,n,r,o),!0;case"dragenter":return ao=rs(ao,e,t,n,r,o),!0;case"mouseover":return so=rs(so,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Ds.set(a,rs(Ds.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,js.set(a,rs(js.get(a)||null,e,t,n,r,o)),!0}return!1}function Xx(e){var t=ni(e.target);if(t!==null){var n=Si(t);if(n!==null){if(t=n.tag,t===13){if(t=$x(n),t!==null){e.blockedOn=t,Yx(e.priority,function(){Gx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=tp(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qh=r,n.target.dispatchEvent(r),Qh=null}else return t=ml(n),t!==null&&Mm(t),e.blockedOn=n,!1;t.shift()}return!0}function uv(e,t,n){vu(e)&&n.delete(t)}function sE(){ep=!1,io!==null&&vu(io)&&(io=null),ao!==null&&vu(ao)&&(ao=null),so!==null&&vu(so)&&(so=null),Ds.forEach(uv),js.forEach(uv)}function os(e,t){e.blockedOn===t&&(e.blockedOn=null,ep||(ep=!0,un.unstable_scheduleCallback(un.unstable_NormalPriority,sE)))}function Fs(e){function t(o){return os(o,e)}if(0<Jl.length){os(Jl[0],e);for(var n=1;n<Jl.length;n++){var r=Jl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(io!==null&&os(io,e),ao!==null&&os(ao,e),so!==null&&os(so,e),Ds.forEach(t),js.forEach(t),n=0;n<Yr.length;n++)r=Yr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yr.length&&(n=Yr[0],n.blockedOn===null);)Xx(n),n.blockedOn===null&&Yr.shift()}var ua=Fr.ReactCurrentBatchConfig,Ku=!0;function lE(e,t,n,r){var o=Ke,a=ua.transition;ua.transition=null;try{Ke=1,Dm(e,t,n,r)}finally{Ke=o,ua.transition=a}}function uE(e,t,n,r){var o=Ke,a=ua.transition;ua.transition=null;try{Ke=4,Dm(e,t,n,r)}finally{Ke=o,ua.transition=a}}function Dm(e,t,n,r){if(Ku){var o=tp(e,t,n,r);if(o===null)jf(e,t,r,Qu,n),lv(e,r);else if(aE(o,e,t,n,r))r.stopPropagation();else if(lv(e,r),t&4&&-1<iE.indexOf(e)){for(;o!==null;){var a=ml(o);if(a!==null&&Qx(a),a=tp(e,t,n,r),a===null&&jf(e,t,r,Qu,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else jf(e,t,r,null,n)}}var Qu=null;function tp(e,t,n,r){if(Qu=null,e=zm(r),e=ni(e),e!==null)if(t=Si(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$x(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qu=e,null}function ew(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(GC()){case Nm:return 1;case Vx:return 4;case Zu:case JC:return 16;case Zx:return 536870912;default:return 16}default:return 16}}var no=null,jm=null,yu=null;function tw(){if(yu)return yu;var e,t=jm,n=t.length,r,o="value"in no?no.value:no.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[a-r];r++);return yu=o.slice(e,1<r?1-r:void 0)}function bu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yl(){return!0}function cv(){return!1}function fn(e){function t(n,r,o,a,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(a):a[u]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Yl:cv,this.isPropagationStopped=cv,this}return ut(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yl)},persist:function(){},isPersistent:Yl}),t}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fm=fn(Ia),pl=ut({},Ia,{view:0,detail:0}),cE=fn(pl),Tf,Lf,is,Gc=ut({},pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$m,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==is&&(is&&e.type==="mousemove"?(Tf=e.screenX-is.screenX,Lf=e.screenY-is.screenY):Lf=Tf=0,is=e),Tf)},movementY:function(e){return"movementY"in e?e.movementY:Lf}}),dv=fn(Gc),dE=ut({},Gc,{dataTransfer:0}),fE=fn(dE),hE=ut({},pl,{relatedTarget:0}),Af=fn(hE),pE=ut({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),mE=fn(pE),_E=ut({},Ia,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gE=fn(_E),vE=ut({},Ia,{data:0}),fv=fn(vE),yE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xE[e])?!!t[e]:!1}function $m(){return wE}var SE=ut({},pl,{key:function(e){if(e.key){var t=yE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$m,charCode:function(e){return e.type==="keypress"?bu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kE=fn(SE),PE=ut({},Gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hv=fn(PE),CE=ut({},pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$m}),EE=fn(CE),OE=ut({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),RE=fn(OE),TE=ut({},Gc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),LE=fn(TE),AE=[9,13,27,32],Um=Nr&&"CompositionEvent"in window,ws=null;Nr&&"documentMode"in document&&(ws=document.documentMode);var IE=Nr&&"TextEvent"in window&&!ws,nw=Nr&&(!Um||ws&&8<ws&&11>=ws),pv=String.fromCharCode(32),mv=!1;function rw(e,t){switch(e){case"keyup":return AE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ow(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ki=!1;function zE(e,t){switch(e){case"compositionend":return ow(t);case"keypress":return t.which!==32?null:(mv=!0,pv);case"textInput":return e=t.data,e===pv&&mv?null:e;default:return null}}function NE(e,t){if(Ki)return e==="compositionend"||!Um&&rw(e,t)?(e=tw(),yu=jm=no=null,Ki=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nw&&t.locale!=="ko"?null:t.data;default:return null}}var BE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _v(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!BE[e.type]:t==="textarea"}function iw(e,t,n,r){Bx(r),t=Gu(t,"onChange"),0<t.length&&(n=new Fm("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ss=null,$s=null;function ME(e){_w(e,0)}function Jc(e){var t=Ji(e);if(Rx(t))return e}function DE(e,t){if(e==="change")return t}var aw=!1;if(Nr){var If;if(Nr){var zf="oninput"in document;if(!zf){var gv=document.createElement("div");gv.setAttribute("oninput","return;"),zf=typeof gv.oninput=="function"}If=zf}else If=!1;aw=If&&(!document.documentMode||9<document.documentMode)}function vv(){Ss&&(Ss.detachEvent("onpropertychange",sw),$s=Ss=null)}function sw(e){if(e.propertyName==="value"&&Jc($s)){var t=[];iw(t,$s,e,zm(e)),Fx(ME,t)}}function jE(e,t,n){e==="focusin"?(vv(),Ss=t,$s=n,Ss.attachEvent("onpropertychange",sw)):e==="focusout"&&vv()}function FE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jc($s)}function $E(e,t){if(e==="click")return Jc(t)}function UE(e,t){if(e==="input"||e==="change")return Jc(t)}function WE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Wn=typeof Object.is=="function"?Object.is:WE;function Us(e,t){if(Wn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Mh.call(t,o)||!Wn(e[o],t[o]))return!1}return!0}function yv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bv(e,t){var n=yv(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yv(n)}}function lw(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lw(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function uw(){for(var e=window,t=Wu();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wu(e.document)}return t}function Wm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function HE(e){var t=uw(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lw(n.ownerDocument.documentElement,n)){if(r!==null&&Wm(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=bv(n,a);var s=bv(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var VE=Nr&&"documentMode"in document&&11>=document.documentMode,Qi=null,np=null,ks=null,rp=!1;function xv(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rp||Qi==null||Qi!==Wu(r)||(r=Qi,"selectionStart"in r&&Wm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ks&&Us(ks,r)||(ks=r,r=Gu(np,"onSelect"),0<r.length&&(t=new Fm("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qi)))}function Xl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gi={animationend:Xl("Animation","AnimationEnd"),animationiteration:Xl("Animation","AnimationIteration"),animationstart:Xl("Animation","AnimationStart"),transitionend:Xl("Transition","TransitionEnd")},Nf={},cw={};Nr&&(cw=document.createElement("div").style,"AnimationEvent"in window||(delete Gi.animationend.animation,delete Gi.animationiteration.animation,delete Gi.animationstart.animation),"TransitionEvent"in window||delete Gi.transitionend.transition);function Yc(e){if(Nf[e])return Nf[e];if(!Gi[e])return e;var t=Gi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cw)return Nf[e]=t[n];return e}var dw=Yc("animationend"),fw=Yc("animationiteration"),hw=Yc("animationstart"),pw=Yc("transitionend"),mw=new Map,wv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ao(e,t){mw.set(e,t),wi(t,[e])}for(var Bf=0;Bf<wv.length;Bf++){var Mf=wv[Bf],ZE=Mf.toLowerCase(),qE=Mf[0].toUpperCase()+Mf.slice(1);Ao(ZE,"on"+qE)}Ao(dw,"onAnimationEnd");Ao(fw,"onAnimationIteration");Ao(hw,"onAnimationStart");Ao("dblclick","onDoubleClick");Ao("focusin","onFocus");Ao("focusout","onBlur");Ao(pw,"onTransitionEnd");ga("onMouseEnter",["mouseout","mouseover"]);ga("onMouseLeave",["mouseout","mouseover"]);ga("onPointerEnter",["pointerout","pointerover"]);ga("onPointerLeave",["pointerout","pointerover"]);wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wi("onBeforeInput",["compositionend","keypress","textInput","paste"]);wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),KE=new Set("cancel close invalid load scroll toggle".split(" ").concat(vs));function Sv(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ZC(r,t,void 0,e),e.currentTarget=null}function _w(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var s=r.length-1;0<=s;s--){var u=r[s],c=u.instance,f=u.currentTarget;if(u=u.listener,c!==a&&o.isPropagationStopped())break e;Sv(o,u,f),a=c}else for(s=0;s<r.length;s++){if(u=r[s],c=u.instance,f=u.currentTarget,u=u.listener,c!==a&&o.isPropagationStopped())break e;Sv(o,u,f),a=c}}}if(Vu)throw e=Yh,Vu=!1,Yh=null,e}function nt(e,t){var n=t[lp];n===void 0&&(n=t[lp]=new Set);var r=e+"__bubble";n.has(r)||(gw(t,e,2,!1),n.add(r))}function Df(e,t,n){var r=0;t&&(r|=4),gw(n,e,r,t)}var eu="_reactListening"+Math.random().toString(36).slice(2);function Ws(e){if(!e[eu]){e[eu]=!0,kx.forEach(function(n){n!=="selectionchange"&&(KE.has(n)||Df(n,!1,e),Df(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[eu]||(t[eu]=!0,Df("selectionchange",!1,t))}}function gw(e,t,n,r){switch(ew(t)){case 1:var o=lE;break;case 4:o=uE;break;default:o=Dm}n=o.bind(null,t,n,e),o=void 0,!Jh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function jf(e,t,n,r,o){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;s=s.return}for(;u!==null;){if(s=ni(u),s===null)return;if(c=s.tag,c===5||c===6){r=a=s;continue e}u=u.parentNode}}r=r.return}Fx(function(){var f=a,p=zm(n),h=[];e:{var _=mw.get(e);if(_!==void 0){var v=Fm,y=e;switch(e){case"keypress":if(bu(n)===0)break e;case"keydown":case"keyup":v=kE;break;case"focusin":y="focus",v=Af;break;case"focusout":y="blur",v=Af;break;case"beforeblur":case"afterblur":v=Af;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=dv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=fE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=EE;break;case dw:case fw:case hw:v=mE;break;case pw:v=RE;break;case"scroll":v=cE;break;case"wheel":v=LE;break;case"copy":case"cut":case"paste":v=gE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=hv}var b=(t&4)!==0,P=!b&&e==="scroll",g=b?_!==null?_+"Capture":null:_;b=[];for(var x=f,S;x!==null;){S=x;var E=S.stateNode;if(S.tag===5&&E!==null&&(S=E,g!==null&&(E=Ms(x,g),E!=null&&b.push(Hs(x,E,S)))),P)break;x=x.return}0<b.length&&(_=new v(_,y,null,n,p),h.push({event:_,listeners:b}))}}if(!(t&7)){e:{if(_=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",_&&n!==Qh&&(y=n.relatedTarget||n.fromElement)&&(ni(y)||y[Br]))break e;if((v||_)&&(_=p.window===p?p:(_=p.ownerDocument)?_.defaultView||_.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=f,y=y?ni(y):null,y!==null&&(P=Si(y),y!==P||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=f),v!==y)){if(b=dv,E="onMouseLeave",g="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(b=hv,E="onPointerLeave",g="onPointerEnter",x="pointer"),P=v==null?_:Ji(v),S=y==null?_:Ji(y),_=new b(E,x+"leave",v,n,p),_.target=P,_.relatedTarget=S,E=null,ni(p)===f&&(b=new b(g,x+"enter",y,n,p),b.target=S,b.relatedTarget=P,E=b),P=E,v&&y)t:{for(b=v,g=y,x=0,S=b;S;S=Di(S))x++;for(S=0,E=g;E;E=Di(E))S++;for(;0<x-S;)b=Di(b),x--;for(;0<S-x;)g=Di(g),S--;for(;x--;){if(b===g||g!==null&&b===g.alternate)break t;b=Di(b),g=Di(g)}b=null}else b=null;v!==null&&kv(h,_,v,b,!1),y!==null&&P!==null&&kv(h,P,y,b,!0)}}e:{if(_=f?Ji(f):window,v=_.nodeName&&_.nodeName.toLowerCase(),v==="select"||v==="input"&&_.type==="file")var T=DE;else if(_v(_))if(aw)T=UE;else{T=FE;var A=jE}else(v=_.nodeName)&&v.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(T=$E);if(T&&(T=T(e,f))){iw(h,T,n,p);break e}A&&A(e,_,f),e==="focusout"&&(A=_._wrapperState)&&A.controlled&&_.type==="number"&&Hh(_,"number",_.value)}switch(A=f?Ji(f):window,e){case"focusin":(_v(A)||A.contentEditable==="true")&&(Qi=A,np=f,ks=null);break;case"focusout":ks=np=Qi=null;break;case"mousedown":rp=!0;break;case"contextmenu":case"mouseup":case"dragend":rp=!1,xv(h,n,p);break;case"selectionchange":if(VE)break;case"keydown":case"keyup":xv(h,n,p)}var N;if(Um)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Ki?rw(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(nw&&n.locale!=="ko"&&(Ki||D!=="onCompositionStart"?D==="onCompositionEnd"&&Ki&&(N=tw()):(no=p,jm="value"in no?no.value:no.textContent,Ki=!0)),A=Gu(f,D),0<A.length&&(D=new fv(D,e,null,n,p),h.push({event:D,listeners:A}),N?D.data=N:(N=ow(n),N!==null&&(D.data=N)))),(N=IE?zE(e,n):NE(e,n))&&(f=Gu(f,"onBeforeInput"),0<f.length&&(p=new fv("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:f}),p.data=N))}_w(h,t)})}function Hs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gu(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=Ms(e,n),a!=null&&r.unshift(Hs(e,a,o)),a=Ms(e,t),a!=null&&r.push(Hs(e,a,o))),e=e.return}return r}function Di(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function kv(e,t,n,r,o){for(var a=t._reactName,s=[];n!==null&&n!==r;){var u=n,c=u.alternate,f=u.stateNode;if(c!==null&&c===r)break;u.tag===5&&f!==null&&(u=f,o?(c=Ms(n,a),c!=null&&s.unshift(Hs(n,c,u))):o||(c=Ms(n,a),c!=null&&s.push(Hs(n,c,u)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var QE=/\r\n?/g,GE=/\u0000|\uFFFD/g;function Pv(e){return(typeof e=="string"?e:""+e).replace(QE,`
`).replace(GE,"")}function tu(e,t,n){if(t=Pv(t),Pv(e)!==t&&n)throw Error(ue(425))}function Ju(){}var op=null,ip=null;function ap(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sp=typeof setTimeout=="function"?setTimeout:void 0,JE=typeof clearTimeout=="function"?clearTimeout:void 0,Cv=typeof Promise=="function"?Promise:void 0,YE=typeof queueMicrotask=="function"?queueMicrotask:typeof Cv<"u"?function(e){return Cv.resolve(null).then(e).catch(XE)}:sp;function XE(e){setTimeout(function(){throw e})}function Ff(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Fs(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Fs(t)}function lo(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ev(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var za=Math.random().toString(36).slice(2),sr="__reactFiber$"+za,Vs="__reactProps$"+za,Br="__reactContainer$"+za,lp="__reactEvents$"+za,eO="__reactListeners$"+za,tO="__reactHandles$"+za;function ni(e){var t=e[sr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Br]||n[sr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ev(e);e!==null;){if(n=e[sr])return n;e=Ev(e)}return t}e=n,n=e.parentNode}return null}function ml(e){return e=e[sr]||e[Br],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ji(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(ue(33))}function Xc(e){return e[Vs]||null}var up=[],Yi=-1;function Io(e){return{current:e}}function rt(e){0>Yi||(e.current=up[Yi],up[Yi]=null,Yi--)}function et(e,t){Yi++,up[Yi]=e.current,e.current=t}var Co={},$t=Io(Co),Jt=Io(!1),hi=Co;function va(e,t){var n=e.type.contextTypes;if(!n)return Co;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Yt(e){return e=e.childContextTypes,e!=null}function Yu(){rt(Jt),rt($t)}function Ov(e,t,n){if($t.current!==Co)throw Error(ue(168));et($t,t),et(Jt,n)}function vw(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(ue(108,jC(e)||"Unknown",o));return ut({},n,r)}function Xu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Co,hi=$t.current,et($t,e),et(Jt,Jt.current),!0}function Rv(e,t,n){var r=e.stateNode;if(!r)throw Error(ue(169));n?(e=vw(e,t,hi),r.__reactInternalMemoizedMergedChildContext=e,rt(Jt),rt($t),et($t,e)):rt(Jt),et(Jt,n)}var Er=null,ed=!1,$f=!1;function yw(e){Er===null?Er=[e]:Er.push(e)}function nO(e){ed=!0,yw(e)}function zo(){if(!$f&&Er!==null){$f=!0;var e=0,t=Ke;try{var n=Er;for(Ke=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Er=null,ed=!1}catch(o){throw Er!==null&&(Er=Er.slice(e+1)),Hx(Nm,zo),o}finally{Ke=t,$f=!1}}return null}var Xi=[],ea=0,ec=null,tc=0,vn=[],yn=0,pi=null,Tr=1,Lr="";function Jo(e,t){Xi[ea++]=tc,Xi[ea++]=ec,ec=e,tc=t}function bw(e,t,n){vn[yn++]=Tr,vn[yn++]=Lr,vn[yn++]=pi,pi=e;var r=Tr;e=Lr;var o=32-jn(r)-1;r&=~(1<<o),n+=1;var a=32-jn(t)+o;if(30<a){var s=o-o%5;a=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Tr=1<<32-jn(t)+o|n<<o|r,Lr=a+e}else Tr=1<<a|n<<o|r,Lr=e}function Hm(e){e.return!==null&&(Jo(e,1),bw(e,1,0))}function Vm(e){for(;e===ec;)ec=Xi[--ea],Xi[ea]=null,tc=Xi[--ea],Xi[ea]=null;for(;e===pi;)pi=vn[--yn],vn[yn]=null,Lr=vn[--yn],vn[yn]=null,Tr=vn[--yn],vn[yn]=null}var sn=null,nn=null,it=!1,Mn=null;function xw(e,t){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Tv(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,sn=e,nn=lo(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,sn=e,nn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=pi!==null?{id:Tr,overflow:Lr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,sn=e,nn=null,!0):!1;default:return!1}}function cp(e){return(e.mode&1)!==0&&(e.flags&128)===0}function dp(e){if(it){var t=nn;if(t){var n=t;if(!Tv(e,t)){if(cp(e))throw Error(ue(418));t=lo(n.nextSibling);var r=sn;t&&Tv(e,t)?xw(r,n):(e.flags=e.flags&-4097|2,it=!1,sn=e)}}else{if(cp(e))throw Error(ue(418));e.flags=e.flags&-4097|2,it=!1,sn=e}}}function Lv(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;sn=e}function nu(e){if(e!==sn)return!1;if(!it)return Lv(e),it=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ap(e.type,e.memoizedProps)),t&&(t=nn)){if(cp(e))throw ww(),Error(ue(418));for(;t;)xw(e,t),t=lo(t.nextSibling)}if(Lv(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(ue(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nn=lo(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nn=null}}else nn=sn?lo(e.stateNode.nextSibling):null;return!0}function ww(){for(var e=nn;e;)e=lo(e.nextSibling)}function ya(){nn=sn=null,it=!1}function Zm(e){Mn===null?Mn=[e]:Mn.push(e)}var rO=Fr.ReactCurrentBatchConfig;function zn(e,t){if(e&&e.defaultProps){t=ut({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var nc=Io(null),rc=null,ta=null,qm=null;function Km(){qm=ta=rc=null}function Qm(e){var t=nc.current;rt(nc),e._currentValue=t}function fp(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ca(e,t){rc=e,qm=ta=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Gt=!0),e.firstContext=null)}function kn(e){var t=e._currentValue;if(qm!==e)if(e={context:e,memoizedValue:t,next:null},ta===null){if(rc===null)throw Error(ue(308));ta=e,rc.dependencies={lanes:0,firstContext:e}}else ta=ta.next=e;return t}var ri=null;function Gm(e){ri===null?ri=[e]:ri.push(e)}function Sw(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Gm(t)):(n.next=o.next,o.next=n),t.interleaved=n,Mr(e,r)}function Mr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Gr=!1;function Jm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kw(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ir(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function uo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Fe&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Mr(e,n)}return o=r.interleaved,o===null?(t.next=t,Gm(r)):(t.next=o.next,o.next=t),r.interleaved=t,Mr(e,n)}function xu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bm(e,n)}}function Av(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function oc(e,t,n,r){var o=e.updateQueue;Gr=!1;var a=o.firstBaseUpdate,s=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var c=u,f=c.next;c.next=null,s===null?a=f:s.next=f,s=c;var p=e.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==s&&(u===null?p.firstBaseUpdate=f:u.next=f,p.lastBaseUpdate=c))}if(a!==null){var h=o.baseState;s=0,p=f=c=null,u=a;do{var _=u.lane,v=u.eventTime;if((r&_)===_){p!==null&&(p=p.next={eventTime:v,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var y=e,b=u;switch(_=t,v=n,b.tag){case 1:if(y=b.payload,typeof y=="function"){h=y.call(v,h,_);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,_=typeof y=="function"?y.call(v,h,_):y,_==null)break e;h=ut({},h,_);break e;case 2:Gr=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,_=o.effects,_===null?o.effects=[u]:_.push(u))}else v={eventTime:v,lane:_,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(f=p=v,c=h):p=p.next=v,s|=_;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;_=u,u=_.next,_.next=null,o.lastBaseUpdate=_,o.shared.pending=null}}while(1);if(p===null&&(c=h),o.baseState=c,o.firstBaseUpdate=f,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);_i|=s,e.lanes=s,e.memoizedState=h}}function Iv(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(ue(191,o));o.call(r)}}}var Pw=new Sx.Component().refs;function hp(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ut({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var td={isMounted:function(e){return(e=e._reactInternals)?Si(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ht(),o=fo(e),a=Ir(r,o);a.payload=t,n!=null&&(a.callback=n),t=uo(e,a,o),t!==null&&(Fn(t,e,o,r),xu(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ht(),o=fo(e),a=Ir(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=uo(e,a,o),t!==null&&(Fn(t,e,o,r),xu(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ht(),r=fo(e),o=Ir(n,r);o.tag=2,t!=null&&(o.callback=t),t=uo(e,o,r),t!==null&&(Fn(t,e,r,n),xu(t,e,r))}};function zv(e,t,n,r,o,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,s):t.prototype&&t.prototype.isPureReactComponent?!Us(n,r)||!Us(o,a):!0}function Cw(e,t,n){var r=!1,o=Co,a=t.contextType;return typeof a=="object"&&a!==null?a=kn(a):(o=Yt(t)?hi:$t.current,r=t.contextTypes,a=(r=r!=null)?va(e,o):Co),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=td,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Nv(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&td.enqueueReplaceState(t,t.state,null)}function pp(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Pw,Jm(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=kn(a):(a=Yt(t)?hi:$t.current,o.context=va(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(hp(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&td.enqueueReplaceState(o,o.state,null),oc(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function as(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var r=n.stateNode}if(!r)throw Error(ue(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var u=o.refs;u===Pw&&(u=o.refs={}),s===null?delete u[a]:u[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,e))}return e}function ru(e,t){throw e=Object.prototype.toString.call(t),Error(ue(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bv(e){var t=e._init;return t(e._payload)}function Ew(e){function t(g,x){if(e){var S=g.deletions;S===null?(g.deletions=[x],g.flags|=16):S.push(x)}}function n(g,x){if(!e)return null;for(;x!==null;)t(g,x),x=x.sibling;return null}function r(g,x){for(g=new Map;x!==null;)x.key!==null?g.set(x.key,x):g.set(x.index,x),x=x.sibling;return g}function o(g,x){return g=ho(g,x),g.index=0,g.sibling=null,g}function a(g,x,S){return g.index=S,e?(S=g.alternate,S!==null?(S=S.index,S<x?(g.flags|=2,x):S):(g.flags|=2,x)):(g.flags|=1048576,x)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function u(g,x,S,E){return x===null||x.tag!==6?(x=Kf(S,g.mode,E),x.return=g,x):(x=o(x,S),x.return=g,x)}function c(g,x,S,E){var T=S.type;return T===qi?p(g,x,S.props.children,E,S.key):x!==null&&(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Qr&&Bv(T)===x.type)?(E=o(x,S.props),E.ref=as(g,x,S),E.return=g,E):(E=Eu(S.type,S.key,S.props,null,g.mode,E),E.ref=as(g,x,S),E.return=g,E)}function f(g,x,S,E){return x===null||x.tag!==4||x.stateNode.containerInfo!==S.containerInfo||x.stateNode.implementation!==S.implementation?(x=Qf(S,g.mode,E),x.return=g,x):(x=o(x,S.children||[]),x.return=g,x)}function p(g,x,S,E,T){return x===null||x.tag!==7?(x=ci(S,g.mode,E,T),x.return=g,x):(x=o(x,S),x.return=g,x)}function h(g,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Kf(""+x,g.mode,S),x.return=g,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Zl:return S=Eu(x.type,x.key,x.props,null,g.mode,S),S.ref=as(g,null,x),S.return=g,S;case Zi:return x=Qf(x,g.mode,S),x.return=g,x;case Qr:var E=x._init;return h(g,E(x._payload),S)}if(_s(x)||ts(x))return x=ci(x,g.mode,S,null),x.return=g,x;ru(g,x)}return null}function _(g,x,S,E){var T=x!==null?x.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return T!==null?null:u(g,x,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Zl:return S.key===T?c(g,x,S,E):null;case Zi:return S.key===T?f(g,x,S,E):null;case Qr:return T=S._init,_(g,x,T(S._payload),E)}if(_s(S)||ts(S))return T!==null?null:p(g,x,S,E,null);ru(g,S)}return null}function v(g,x,S,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(S)||null,u(x,g,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Zl:return g=g.get(E.key===null?S:E.key)||null,c(x,g,E,T);case Zi:return g=g.get(E.key===null?S:E.key)||null,f(x,g,E,T);case Qr:var A=E._init;return v(g,x,S,A(E._payload),T)}if(_s(E)||ts(E))return g=g.get(S)||null,p(x,g,E,T,null);ru(x,E)}return null}function y(g,x,S,E){for(var T=null,A=null,N=x,D=x=0,W=null;N!==null&&D<S.length;D++){N.index>D?(W=N,N=null):W=N.sibling;var B=_(g,N,S[D],E);if(B===null){N===null&&(N=W);break}e&&N&&B.alternate===null&&t(g,N),x=a(B,x,D),A===null?T=B:A.sibling=B,A=B,N=W}if(D===S.length)return n(g,N),it&&Jo(g,D),T;if(N===null){for(;D<S.length;D++)N=h(g,S[D],E),N!==null&&(x=a(N,x,D),A===null?T=N:A.sibling=N,A=N);return it&&Jo(g,D),T}for(N=r(g,N);D<S.length;D++)W=v(N,g,D,S[D],E),W!==null&&(e&&W.alternate!==null&&N.delete(W.key===null?D:W.key),x=a(W,x,D),A===null?T=W:A.sibling=W,A=W);return e&&N.forEach(function(H){return t(g,H)}),it&&Jo(g,D),T}function b(g,x,S,E){var T=ts(S);if(typeof T!="function")throw Error(ue(150));if(S=T.call(S),S==null)throw Error(ue(151));for(var A=T=null,N=x,D=x=0,W=null,B=S.next();N!==null&&!B.done;D++,B=S.next()){N.index>D?(W=N,N=null):W=N.sibling;var H=_(g,N,B.value,E);if(H===null){N===null&&(N=W);break}e&&N&&H.alternate===null&&t(g,N),x=a(H,x,D),A===null?T=H:A.sibling=H,A=H,N=W}if(B.done)return n(g,N),it&&Jo(g,D),T;if(N===null){for(;!B.done;D++,B=S.next())B=h(g,B.value,E),B!==null&&(x=a(B,x,D),A===null?T=B:A.sibling=B,A=B);return it&&Jo(g,D),T}for(N=r(g,N);!B.done;D++,B=S.next())B=v(N,g,D,B.value,E),B!==null&&(e&&B.alternate!==null&&N.delete(B.key===null?D:B.key),x=a(B,x,D),A===null?T=B:A.sibling=B,A=B);return e&&N.forEach(function(G){return t(g,G)}),it&&Jo(g,D),T}function P(g,x,S,E){if(typeof S=="object"&&S!==null&&S.type===qi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Zl:e:{for(var T=S.key,A=x;A!==null;){if(A.key===T){if(T=S.type,T===qi){if(A.tag===7){n(g,A.sibling),x=o(A,S.props.children),x.return=g,g=x;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Qr&&Bv(T)===A.type){n(g,A.sibling),x=o(A,S.props),x.ref=as(g,A,S),x.return=g,g=x;break e}n(g,A);break}else t(g,A);A=A.sibling}S.type===qi?(x=ci(S.props.children,g.mode,E,S.key),x.return=g,g=x):(E=Eu(S.type,S.key,S.props,null,g.mode,E),E.ref=as(g,x,S),E.return=g,g=E)}return s(g);case Zi:e:{for(A=S.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===S.containerInfo&&x.stateNode.implementation===S.implementation){n(g,x.sibling),x=o(x,S.children||[]),x.return=g,g=x;break e}else{n(g,x);break}else t(g,x);x=x.sibling}x=Qf(S,g.mode,E),x.return=g,g=x}return s(g);case Qr:return A=S._init,P(g,x,A(S._payload),E)}if(_s(S))return y(g,x,S,E);if(ts(S))return b(g,x,S,E);ru(g,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,x!==null&&x.tag===6?(n(g,x.sibling),x=o(x,S),x.return=g,g=x):(n(g,x),x=Kf(S,g.mode,E),x.return=g,g=x),s(g)):n(g,x)}return P}var ba=Ew(!0),Ow=Ew(!1),_l={},dr=Io(_l),Zs=Io(_l),qs=Io(_l);function oi(e){if(e===_l)throw Error(ue(174));return e}function Ym(e,t){switch(et(qs,t),et(Zs,e),et(dr,_l),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zh(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zh(t,e)}rt(dr),et(dr,t)}function xa(){rt(dr),rt(Zs),rt(qs)}function Rw(e){oi(qs.current);var t=oi(dr.current),n=Zh(t,e.type);t!==n&&(et(Zs,e),et(dr,n))}function Xm(e){Zs.current===e&&(rt(dr),rt(Zs))}var st=Io(0);function ic(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Uf=[];function e_(){for(var e=0;e<Uf.length;e++)Uf[e]._workInProgressVersionPrimary=null;Uf.length=0}var wu=Fr.ReactCurrentDispatcher,Wf=Fr.ReactCurrentBatchConfig,mi=0,lt=null,St=null,Ct=null,ac=!1,Ps=!1,Ks=0,oO=0;function zt(){throw Error(ue(321))}function t_(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Wn(e[n],t[n]))return!1;return!0}function n_(e,t,n,r,o,a){if(mi=a,lt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wu.current=e===null||e.memoizedState===null?lO:uO,e=n(r,o),Ps){a=0;do{if(Ps=!1,Ks=0,25<=a)throw Error(ue(301));a+=1,Ct=St=null,t.updateQueue=null,wu.current=cO,e=n(r,o)}while(Ps)}if(wu.current=sc,t=St!==null&&St.next!==null,mi=0,Ct=St=lt=null,ac=!1,t)throw Error(ue(300));return e}function r_(){var e=Ks!==0;return Ks=0,e}function rr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?lt.memoizedState=Ct=e:Ct=Ct.next=e,Ct}function Pn(){if(St===null){var e=lt.alternate;e=e!==null?e.memoizedState:null}else e=St.next;var t=Ct===null?lt.memoizedState:Ct.next;if(t!==null)Ct=t,St=e;else{if(e===null)throw Error(ue(310));St=e,e={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Ct===null?lt.memoizedState=Ct=e:Ct=Ct.next=e}return Ct}function Qs(e,t){return typeof t=="function"?t(e):t}function Hf(e){var t=Pn(),n=t.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=e;var r=St,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var s=o.next;o.next=a.next,a.next=s}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var u=s=null,c=null,f=a;do{var p=f.lane;if((mi&p)===p)c!==null&&(c=c.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var h={lane:p,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};c===null?(u=c=h,s=r):c=c.next=h,lt.lanes|=p,_i|=p}f=f.next}while(f!==null&&f!==a);c===null?s=r:c.next=u,Wn(r,t.memoizedState)||(Gt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,lt.lanes|=a,_i|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vf(e){var t=Pn(),n=t.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do a=e(a,s.action),s=s.next;while(s!==o);Wn(a,t.memoizedState)||(Gt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Tw(){}function Lw(e,t){var n=lt,r=Pn(),o=t(),a=!Wn(r.memoizedState,o);if(a&&(r.memoizedState=o,Gt=!0),r=r.queue,o_(zw.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,Gs(9,Iw.bind(null,n,r,o,t),void 0,null),Et===null)throw Error(ue(349));mi&30||Aw(n,t,o)}return o}function Aw(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=lt.updateQueue,t===null?(t={lastEffect:null,stores:null},lt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Iw(e,t,n,r){t.value=n,t.getSnapshot=r,Nw(t)&&Bw(e)}function zw(e,t,n){return n(function(){Nw(t)&&Bw(e)})}function Nw(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Wn(e,n)}catch{return!0}}function Bw(e){var t=Mr(e,1);t!==null&&Fn(t,e,1,-1)}function Mv(e){var t=rr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qs,lastRenderedState:e},t.queue=e,e=e.dispatch=sO.bind(null,lt,e),[t.memoizedState,e]}function Gs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=lt.updateQueue,t===null?(t={lastEffect:null,stores:null},lt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mw(){return Pn().memoizedState}function Su(e,t,n,r){var o=rr();lt.flags|=e,o.memoizedState=Gs(1|t,n,void 0,r===void 0?null:r)}function nd(e,t,n,r){var o=Pn();r=r===void 0?null:r;var a=void 0;if(St!==null){var s=St.memoizedState;if(a=s.destroy,r!==null&&t_(r,s.deps)){o.memoizedState=Gs(t,n,a,r);return}}lt.flags|=e,o.memoizedState=Gs(1|t,n,a,r)}function Dv(e,t){return Su(8390656,8,e,t)}function o_(e,t){return nd(2048,8,e,t)}function Dw(e,t){return nd(4,2,e,t)}function jw(e,t){return nd(4,4,e,t)}function Fw(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $w(e,t,n){return n=n!=null?n.concat([e]):null,nd(4,4,Fw.bind(null,t,e),n)}function i_(){}function Uw(e,t){var n=Pn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&t_(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ww(e,t){var n=Pn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&t_(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hw(e,t,n){return mi&21?(Wn(n,t)||(n=qx(),lt.lanes|=n,_i|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Gt=!0),e.memoizedState=n)}function iO(e,t){var n=Ke;Ke=n!==0&&4>n?n:4,e(!0);var r=Wf.transition;Wf.transition={};try{e(!1),t()}finally{Ke=n,Wf.transition=r}}function Vw(){return Pn().memoizedState}function aO(e,t,n){var r=fo(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zw(e))qw(t,n);else if(n=Sw(e,t,n,r),n!==null){var o=Ht();Fn(n,e,r,o),Kw(n,t,r)}}function sO(e,t,n){var r=fo(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zw(e))qw(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,u=a(s,n);if(o.hasEagerState=!0,o.eagerState=u,Wn(u,s)){var c=t.interleaved;c===null?(o.next=o,Gm(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=Sw(e,t,o,r),n!==null&&(o=Ht(),Fn(n,e,r,o),Kw(n,t,r))}}function Zw(e){var t=e.alternate;return e===lt||t!==null&&t===lt}function qw(e,t){Ps=ac=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Kw(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bm(e,n)}}var sc={readContext:kn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},lO={readContext:kn,useCallback:function(e,t){return rr().memoizedState=[e,t===void 0?null:t],e},useContext:kn,useEffect:Dv,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Su(4194308,4,Fw.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Su(4194308,4,e,t)},useInsertionEffect:function(e,t){return Su(4,2,e,t)},useMemo:function(e,t){var n=rr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=rr();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=aO.bind(null,lt,e),[r.memoizedState,e]},useRef:function(e){var t=rr();return e={current:e},t.memoizedState=e},useState:Mv,useDebugValue:i_,useDeferredValue:function(e){return rr().memoizedState=e},useTransition:function(){var e=Mv(!1),t=e[0];return e=iO.bind(null,e[1]),rr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=lt,o=rr();if(it){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=t(),Et===null)throw Error(ue(349));mi&30||Aw(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Dv(zw.bind(null,r,a,e),[e]),r.flags|=2048,Gs(9,Iw.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=rr(),t=Et.identifierPrefix;if(it){var n=Lr,r=Tr;n=(r&~(1<<32-jn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ks++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=oO++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},uO={readContext:kn,useCallback:Uw,useContext:kn,useEffect:o_,useImperativeHandle:$w,useInsertionEffect:Dw,useLayoutEffect:jw,useMemo:Ww,useReducer:Hf,useRef:Mw,useState:function(){return Hf(Qs)},useDebugValue:i_,useDeferredValue:function(e){var t=Pn();return Hw(t,St.memoizedState,e)},useTransition:function(){var e=Hf(Qs)[0],t=Pn().memoizedState;return[e,t]},useMutableSource:Tw,useSyncExternalStore:Lw,useId:Vw,unstable_isNewReconciler:!1},cO={readContext:kn,useCallback:Uw,useContext:kn,useEffect:o_,useImperativeHandle:$w,useInsertionEffect:Dw,useLayoutEffect:jw,useMemo:Ww,useReducer:Vf,useRef:Mw,useState:function(){return Vf(Qs)},useDebugValue:i_,useDeferredValue:function(e){var t=Pn();return St===null?t.memoizedState=e:Hw(t,St.memoizedState,e)},useTransition:function(){var e=Vf(Qs)[0],t=Pn().memoizedState;return[e,t]},useMutableSource:Tw,useSyncExternalStore:Lw,useId:Vw,unstable_isNewReconciler:!1};function wa(e,t){try{var n="",r=t;do n+=DC(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function Zf(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function mp(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var dO=typeof WeakMap=="function"?WeakMap:Map;function Qw(e,t,n){n=Ir(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){uc||(uc=!0,Pp=r),mp(e,t)},n}function Gw(e,t,n){n=Ir(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){mp(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){mp(e,t),typeof r!="function"&&(co===null?co=new Set([this]):co.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function jv(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new dO;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=PO.bind(null,e,t,n),t.then(e,e))}function Fv(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $v(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ir(-1,1),t.tag=2,uo(n,t,1))),n.lanes|=1),e)}var fO=Fr.ReactCurrentOwner,Gt=!1;function Wt(e,t,n,r){t.child=e===null?Ow(t,null,n,r):ba(t,e.child,n,r)}function Uv(e,t,n,r,o){n=n.render;var a=t.ref;return ca(t,o),r=n_(e,t,n,r,a,o),n=r_(),e!==null&&!Gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Dr(e,t,o)):(it&&n&&Hm(t),t.flags|=1,Wt(e,t,r,o),t.child)}function Wv(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!h_(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Jw(e,t,a,r,o)):(e=Eu(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:Us,n(s,r)&&e.ref===t.ref)return Dr(e,t,o)}return t.flags|=1,e=ho(a,r),e.ref=t.ref,e.return=t,t.child=e}function Jw(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(Us(a,r)&&e.ref===t.ref)if(Gt=!1,t.pendingProps=r=a,(e.lanes&o)!==0)e.flags&131072&&(Gt=!0);else return t.lanes=e.lanes,Dr(e,t,o)}return _p(e,t,n,r,o)}function Yw(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(ra,tn),tn|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,et(ra,tn),tn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,et(ra,tn),tn|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,et(ra,tn),tn|=r;return Wt(e,t,o,n),t.child}function Xw(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _p(e,t,n,r,o){var a=Yt(n)?hi:$t.current;return a=va(t,a),ca(t,o),n=n_(e,t,n,r,a,o),r=r_(),e!==null&&!Gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Dr(e,t,o)):(it&&r&&Hm(t),t.flags|=1,Wt(e,t,n,o),t.child)}function Hv(e,t,n,r,o){if(Yt(n)){var a=!0;Xu(t)}else a=!1;if(ca(t,o),t.stateNode===null)ku(e,t),Cw(t,n,r),pp(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,u=t.memoizedProps;s.props=u;var c=s.context,f=n.contextType;typeof f=="object"&&f!==null?f=kn(f):(f=Yt(n)?hi:$t.current,f=va(t,f));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u!==r||c!==f)&&Nv(t,s,r,f),Gr=!1;var _=t.memoizedState;s.state=_,oc(t,r,s,o),c=t.memoizedState,u!==r||_!==c||Jt.current||Gr?(typeof p=="function"&&(hp(t,n,p,r),c=t.memoizedState),(u=Gr||zv(t,n,u,r,_,c,f))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=f,r=u):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,kw(e,t),u=t.memoizedProps,f=t.type===t.elementType?u:zn(t.type,u),s.props=f,h=t.pendingProps,_=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=kn(c):(c=Yt(n)?hi:$t.current,c=va(t,c));var v=n.getDerivedStateFromProps;(p=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u!==h||_!==c)&&Nv(t,s,r,c),Gr=!1,_=t.memoizedState,s.state=_,oc(t,r,s,o);var y=t.memoizedState;u!==h||_!==y||Jt.current||Gr?(typeof v=="function"&&(hp(t,n,v,r),y=t.memoizedState),(f=Gr||zv(t,n,f,r,_,y,c)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=c,r=f):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),r=!1)}return gp(e,t,n,r,a,o)}function gp(e,t,n,r,o,a){Xw(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Rv(t,n,!1),Dr(e,t,a);r=t.stateNode,fO.current=t;var u=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=ba(t,e.child,null,a),t.child=ba(t,null,u,a)):Wt(e,t,u,a),t.memoizedState=r.state,o&&Rv(t,n,!0),t.child}function e1(e){var t=e.stateNode;t.pendingContext?Ov(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ov(e,t.context,!1),Ym(e,t.containerInfo)}function Vv(e,t,n,r,o){return ya(),Zm(o),t.flags|=256,Wt(e,t,n,r),t.child}var vp={dehydrated:null,treeContext:null,retryLane:0};function yp(e){return{baseLanes:e,cachePool:null,transitions:null}}function t1(e,t,n){var r=t.pendingProps,o=st.current,a=!1,s=(t.flags&128)!==0,u;if((u=s)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),et(st,o&1),e===null)return dp(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,a?(r=t.mode,a=t.child,s={mode:"hidden",children:s},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=id(s,r,0,null),e=ci(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=yp(n),t.memoizedState=vp,e):a_(t,s));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return hO(e,t,s,r,u,o,n);if(a){a=r.fallback,s=t.mode,o=e.child,u=o.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=ho(o,c),r.subtreeFlags=o.subtreeFlags&14680064),u!==null?a=ho(u,a):(a=ci(a,s,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,s=e.child.memoizedState,s=s===null?yp(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~n,t.memoizedState=vp,r}return a=e.child,e=a.sibling,r=ho(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function a_(e,t){return t=id({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ou(e,t,n,r){return r!==null&&Zm(r),ba(t,e.child,null,n),e=a_(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hO(e,t,n,r,o,a,s){if(n)return t.flags&256?(t.flags&=-257,r=Zf(Error(ue(422))),ou(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=id({mode:"visible",children:r.children},o,0,null),a=ci(a,o,s,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&ba(t,e.child,null,s),t.child.memoizedState=yp(s),t.memoizedState=vp,a);if(!(t.mode&1))return ou(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;return r=u,a=Error(ue(419)),r=Zf(a,r,void 0),ou(e,t,s,r)}if(u=(s&e.childLanes)!==0,Gt||u){if(r=Et,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Mr(e,o),Fn(r,e,o,-1))}return f_(),r=Zf(Error(ue(421))),ou(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=CO.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,nn=lo(o.nextSibling),sn=t,it=!0,Mn=null,e!==null&&(vn[yn++]=Tr,vn[yn++]=Lr,vn[yn++]=pi,Tr=e.id,Lr=e.overflow,pi=t),t=a_(t,r.children),t.flags|=4096,t)}function Zv(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fp(e.return,t,n)}function qf(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function n1(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(Wt(e,t,r.children,n),r=st.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zv(e,n,t);else if(e.tag===19)Zv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(et(st,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ic(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),qf(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ic(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}qf(t,!0,n,null,a);break;case"together":qf(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ku(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_i|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(ue(153));if(t.child!==null){for(e=t.child,n=ho(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ho(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pO(e,t,n){switch(t.tag){case 3:e1(t),ya();break;case 5:Rw(t);break;case 1:Yt(t.type)&&Xu(t);break;case 4:Ym(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;et(nc,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(et(st,st.current&1),t.flags|=128,null):n&t.child.childLanes?t1(e,t,n):(et(st,st.current&1),e=Dr(e,t,n),e!==null?e.sibling:null);et(st,st.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return n1(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),et(st,st.current),r)break;return null;case 22:case 23:return t.lanes=0,Yw(e,t,n)}return Dr(e,t,n)}var r1,bp,o1,i1;r1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bp=function(){};o1=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,oi(dr.current);var a=null;switch(n){case"input":o=Uh(e,o),r=Uh(e,r),a=[];break;case"select":o=ut({},o,{value:void 0}),r=ut({},r,{value:void 0}),a=[];break;case"textarea":o=Vh(e,o),r=Vh(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ju)}qh(n,r);var s;n=null;for(f in o)if(!r.hasOwnProperty(f)&&o.hasOwnProperty(f)&&o[f]!=null)if(f==="style"){var u=o[f];for(s in u)u.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Ns.hasOwnProperty(f)?a||(a=[]):(a=a||[]).push(f,null));for(f in r){var c=r[f];if(u=o?.[f],r.hasOwnProperty(f)&&c!==u&&(c!=null||u!=null))if(f==="style")if(u){for(s in u)!u.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&u[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(a||(a=[]),a.push(f,n)),n=c;else f==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(a=a||[]).push(f,c)):f==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(f,""+c):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Ns.hasOwnProperty(f)?(c!=null&&f==="onScroll"&&nt("scroll",e),a||u===c||(a=[])):(a=a||[]).push(f,c))}n&&(a=a||[]).push("style",n);var f=a;(t.updateQueue=f)&&(t.flags|=4)}};i1=function(e,t,n,r){n!==r&&(t.flags|=4)};function ss(e,t){if(!it)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function mO(e,t,n){var r=t.pendingProps;switch(Vm(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(t),null;case 1:return Yt(t.type)&&Yu(),Nt(t),null;case 3:return r=t.stateNode,xa(),rt(Jt),rt($t),e_(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(nu(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Mn!==null&&(Op(Mn),Mn=null))),bp(e,t),Nt(t),null;case 5:Xm(t);var o=oi(qs.current);if(n=t.type,e!==null&&t.stateNode!=null)o1(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(ue(166));return Nt(t),null}if(e=oi(dr.current),nu(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[sr]=t,r[Vs]=a,e=(t.mode&1)!==0,n){case"dialog":nt("cancel",r),nt("close",r);break;case"iframe":case"object":case"embed":nt("load",r);break;case"video":case"audio":for(o=0;o<vs.length;o++)nt(vs[o],r);break;case"source":nt("error",r);break;case"img":case"image":case"link":nt("error",r),nt("load",r);break;case"details":nt("toggle",r);break;case"input":tv(r,a),nt("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},nt("invalid",r);break;case"textarea":rv(r,a),nt("invalid",r)}qh(n,a),o=null;for(var s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="children"?typeof u=="string"?r.textContent!==u&&(a.suppressHydrationWarning!==!0&&tu(r.textContent,u,e),o=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(a.suppressHydrationWarning!==!0&&tu(r.textContent,u,e),o=["children",""+u]):Ns.hasOwnProperty(s)&&u!=null&&s==="onScroll"&&nt("scroll",r)}switch(n){case"input":ql(r),nv(r,a,!0);break;case"textarea":ql(r),ov(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Ju)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ax(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[sr]=t,e[Vs]=r,r1(e,t,!1,!1),t.stateNode=e;e:{switch(s=Kh(n,r),n){case"dialog":nt("cancel",e),nt("close",e),o=r;break;case"iframe":case"object":case"embed":nt("load",e),o=r;break;case"video":case"audio":for(o=0;o<vs.length;o++)nt(vs[o],e);o=r;break;case"source":nt("error",e),o=r;break;case"img":case"image":case"link":nt("error",e),nt("load",e),o=r;break;case"details":nt("toggle",e),o=r;break;case"input":tv(e,r),o=Uh(e,r),nt("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ut({},r,{value:void 0}),nt("invalid",e);break;case"textarea":rv(e,r),o=Vh(e,r),nt("invalid",e);break;default:o=r}qh(n,o),u=o;for(a in u)if(u.hasOwnProperty(a)){var c=u[a];a==="style"?Nx(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Ix(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Bs(e,c):typeof c=="number"&&Bs(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ns.hasOwnProperty(a)?c!=null&&a==="onScroll"&&nt("scroll",e):c!=null&&Tm(e,a,c,s))}switch(n){case"input":ql(e),nv(e,r,!1);break;case"textarea":ql(e),ov(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Po(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?aa(e,!!r.multiple,a,!1):r.defaultValue!=null&&aa(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ju)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Nt(t),null;case 6:if(e&&t.stateNode!=null)i1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(ue(166));if(n=oi(qs.current),oi(dr.current),nu(t)){if(r=t.stateNode,n=t.memoizedProps,r[sr]=t,(a=r.nodeValue!==n)&&(e=sn,e!==null))switch(e.tag){case 3:tu(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&tu(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sr]=t,t.stateNode=r}return Nt(t),null;case 13:if(rt(st),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(it&&nn!==null&&t.mode&1&&!(t.flags&128))ww(),ya(),t.flags|=98560,a=!1;else if(a=nu(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(ue(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(ue(317));a[sr]=t}else ya(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Nt(t),a=!1}else Mn!==null&&(Op(Mn),Mn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||st.current&1?kt===0&&(kt=3):f_())),t.updateQueue!==null&&(t.flags|=4),Nt(t),null);case 4:return xa(),bp(e,t),e===null&&Ws(t.stateNode.containerInfo),Nt(t),null;case 10:return Qm(t.type._context),Nt(t),null;case 17:return Yt(t.type)&&Yu(),Nt(t),null;case 19:if(rt(st),a=t.memoizedState,a===null)return Nt(t),null;if(r=(t.flags&128)!==0,s=a.rendering,s===null)if(r)ss(a,!1);else{if(kt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ic(e),s!==null){for(t.flags|=128,ss(a,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return et(st,st.current&1|2),t.child}e=e.sibling}a.tail!==null&&mt()>Sa&&(t.flags|=128,r=!0,ss(a,!1),t.lanes=4194304)}else{if(!r)if(e=ic(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ss(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!it)return Nt(t),null}else 2*mt()-a.renderingStartTime>Sa&&n!==1073741824&&(t.flags|=128,r=!0,ss(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(n=a.last,n!==null?n.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=mt(),t.sibling=null,n=st.current,et(st,r?n&1|2:n&1),t):(Nt(t),null);case 22:case 23:return d_(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?tn&1073741824&&(Nt(t),t.subtreeFlags&6&&(t.flags|=8192)):Nt(t),null;case 24:return null;case 25:return null}throw Error(ue(156,t.tag))}function _O(e,t){switch(Vm(t),t.tag){case 1:return Yt(t.type)&&Yu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xa(),rt(Jt),rt($t),e_(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Xm(t),null;case 13:if(rt(st),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(ue(340));ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return rt(st),null;case 4:return xa(),null;case 10:return Qm(t.type._context),null;case 22:case 23:return d_(),null;case 24:return null;default:return null}}var iu=!1,Ft=!1,gO=typeof WeakSet=="function"?WeakSet:Set,ve=null;function na(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ct(e,t,r)}else n.current=null}function xp(e,t,n){try{n()}catch(r){ct(e,t,r)}}var qv=!1;function vO(e,t){if(op=Ku,e=uw(),Wm(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,u=-1,c=-1,f=0,p=0,h=e,_=null;t:for(;;){for(var v;h!==n||o!==0&&h.nodeType!==3||(u=s+o),h!==a||r!==0&&h.nodeType!==3||(c=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(v=h.firstChild)!==null;)_=h,h=v;for(;;){if(h===e)break t;if(_===n&&++f===o&&(u=s),_===a&&++p===r&&(c=s),(v=h.nextSibling)!==null)break;h=_,_=h.parentNode}h=v}n=u===-1||c===-1?null:{start:u,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ip={focusedElem:e,selectionRange:n},Ku=!1,ve=t;ve!==null;)if(t=ve,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ve=e;else for(;ve!==null;){t=ve;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var b=y.memoizedProps,P=y.memoizedState,g=t.stateNode,x=g.getSnapshotBeforeUpdate(t.elementType===t.type?b:zn(t.type,b),P);g.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(E){ct(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,ve=e;break}ve=t.return}return y=qv,qv=!1,y}function Cs(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&xp(t,n,a)}o=o.next}while(o!==r)}}function rd(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wp(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function a1(e){var t=e.alternate;t!==null&&(e.alternate=null,a1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[sr],delete t[Vs],delete t[lp],delete t[eO],delete t[tO])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function s1(e){return e.tag===5||e.tag===3||e.tag===4}function Kv(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||s1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ju));else if(r!==4&&(e=e.child,e!==null))for(Sp(e,t,n),e=e.sibling;e!==null;)Sp(e,t,n),e=e.sibling}function kp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(kp(e,t,n),e=e.sibling;e!==null;)kp(e,t,n),e=e.sibling}var Tt=null,Bn=!1;function Zr(e,t,n){for(n=n.child;n!==null;)l1(e,t,n),n=n.sibling}function l1(e,t,n){if(cr&&typeof cr.onCommitFiberUnmount=="function")try{cr.onCommitFiberUnmount(Qc,n)}catch{}switch(n.tag){case 5:Ft||na(n,t);case 6:var r=Tt,o=Bn;Tt=null,Zr(e,t,n),Tt=r,Bn=o,Tt!==null&&(Bn?(e=Tt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Tt.removeChild(n.stateNode));break;case 18:Tt!==null&&(Bn?(e=Tt,n=n.stateNode,e.nodeType===8?Ff(e.parentNode,n):e.nodeType===1&&Ff(e,n),Fs(e)):Ff(Tt,n.stateNode));break;case 4:r=Tt,o=Bn,Tt=n.stateNode.containerInfo,Bn=!0,Zr(e,t,n),Tt=r,Bn=o;break;case 0:case 11:case 14:case 15:if(!Ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&xp(n,t,s),o=o.next}while(o!==r)}Zr(e,t,n);break;case 1:if(!Ft&&(na(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){ct(n,t,u)}Zr(e,t,n);break;case 21:Zr(e,t,n);break;case 22:n.mode&1?(Ft=(r=Ft)||n.memoizedState!==null,Zr(e,t,n),Ft=r):Zr(e,t,n);break;default:Zr(e,t,n)}}function Qv(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gO),t.forEach(function(r){var o=EO.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Tn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,s=t,u=s;e:for(;u!==null;){switch(u.tag){case 5:Tt=u.stateNode,Bn=!1;break e;case 3:Tt=u.stateNode.containerInfo,Bn=!0;break e;case 4:Tt=u.stateNode.containerInfo,Bn=!0;break e}u=u.return}if(Tt===null)throw Error(ue(160));l1(a,s,o),Tt=null,Bn=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(f){ct(o,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)u1(t,e),t=t.sibling}function u1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tn(t,e),er(e),r&4){try{Cs(3,e,e.return),rd(3,e)}catch(b){ct(e,e.return,b)}try{Cs(5,e,e.return)}catch(b){ct(e,e.return,b)}}break;case 1:Tn(t,e),er(e),r&512&&n!==null&&na(n,n.return);break;case 5:if(Tn(t,e),er(e),r&512&&n!==null&&na(n,n.return),e.flags&32){var o=e.stateNode;try{Bs(o,"")}catch(b){ct(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,s=n!==null?n.memoizedProps:a,u=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{u==="input"&&a.type==="radio"&&a.name!=null&&Tx(o,a),Kh(u,s);var f=Kh(u,a);for(s=0;s<c.length;s+=2){var p=c[s],h=c[s+1];p==="style"?Nx(o,h):p==="dangerouslySetInnerHTML"?Ix(o,h):p==="children"?Bs(o,h):Tm(o,p,h,f)}switch(u){case"input":Wh(o,a);break;case"textarea":Lx(o,a);break;case"select":var _=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?aa(o,!!a.multiple,v,!1):_!==!!a.multiple&&(a.defaultValue!=null?aa(o,!!a.multiple,a.defaultValue,!0):aa(o,!!a.multiple,a.multiple?[]:"",!1))}o[Vs]=a}catch(b){ct(e,e.return,b)}}break;case 6:if(Tn(t,e),er(e),r&4){if(e.stateNode===null)throw Error(ue(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(b){ct(e,e.return,b)}}break;case 3:if(Tn(t,e),er(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fs(t.containerInfo)}catch(b){ct(e,e.return,b)}break;case 4:Tn(t,e),er(e);break;case 13:Tn(t,e),er(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(u_=mt())),r&4&&Qv(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Ft=(f=Ft)||p,Tn(t,e),Ft=f):Tn(t,e),er(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!p&&e.mode&1)for(ve=e,p=e.child;p!==null;){for(h=ve=p;ve!==null;){switch(_=ve,v=_.child,_.tag){case 0:case 11:case 14:case 15:Cs(4,_,_.return);break;case 1:na(_,_.return);var y=_.stateNode;if(typeof y.componentWillUnmount=="function"){r=_,n=_.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(b){ct(r,n,b)}}break;case 5:na(_,_.return);break;case 22:if(_.memoizedState!==null){Jv(h);continue}}v!==null?(v.return=_,ve=v):Jv(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,f?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(u=h.stateNode,c=h.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=zx("display",s))}catch(b){ct(e,e.return,b)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=f?"":h.memoizedProps}catch(b){ct(e,e.return,b)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Tn(t,e),er(e),r&4&&Qv(e);break;case 21:break;default:Tn(t,e),er(e)}}function er(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(s1(n)){var r=n;break e}n=n.return}throw Error(ue(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Bs(o,""),r.flags&=-33);var a=Kv(e);kp(e,a,o);break;case 3:case 4:var s=r.stateNode.containerInfo,u=Kv(e);Sp(e,u,s);break;default:throw Error(ue(161))}}catch(c){ct(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yO(e,t,n){ve=e,c1(e)}function c1(e,t,n){for(var r=(e.mode&1)!==0;ve!==null;){var o=ve,a=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||iu;if(!s){var u=o.alternate,c=u!==null&&u.memoizedState!==null||Ft;u=iu;var f=Ft;if(iu=s,(Ft=c)&&!f)for(ve=o;ve!==null;)s=ve,c=s.child,s.tag===22&&s.memoizedState!==null?Yv(o):c!==null?(c.return=s,ve=c):Yv(o);for(;a!==null;)ve=a,c1(a),a=a.sibling;ve=o,iu=u,Ft=f}Gv(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,ve=a):Gv(e)}}function Gv(e){for(;ve!==null;){var t=ve;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ft||rd(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ft)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:zn(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Iv(t,a,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Iv(t,s,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var p=f.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Fs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}Ft||t.flags&512&&wp(t)}catch(_){ct(t,t.return,_)}}if(t===e){ve=null;break}if(n=t.sibling,n!==null){n.return=t.return,ve=n;break}ve=t.return}}function Jv(e){for(;ve!==null;){var t=ve;if(t===e){ve=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ve=n;break}ve=t.return}}function Yv(e){for(;ve!==null;){var t=ve;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rd(4,t)}catch(c){ct(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){ct(t,o,c)}}var a=t.return;try{wp(t)}catch(c){ct(t,a,c)}break;case 5:var s=t.return;try{wp(t)}catch(c){ct(t,s,c)}}}catch(c){ct(t,t.return,c)}if(t===e){ve=null;break}var u=t.sibling;if(u!==null){u.return=t.return,ve=u;break}ve=t.return}}var bO=Math.ceil,lc=Fr.ReactCurrentDispatcher,s_=Fr.ReactCurrentOwner,xn=Fr.ReactCurrentBatchConfig,Fe=0,Et=null,bt=null,Lt=0,tn=0,ra=Io(0),kt=0,Js=null,_i=0,od=0,l_=0,Es=null,Qt=null,u_=0,Sa=1/0,Pr=null,uc=!1,Pp=null,co=null,au=!1,ro=null,cc=0,Os=0,Cp=null,Pu=-1,Cu=0;function Ht(){return Fe&6?mt():Pu!==-1?Pu:Pu=mt()}function fo(e){return e.mode&1?Fe&2&&Lt!==0?Lt&-Lt:rO.transition!==null?(Cu===0&&(Cu=qx()),Cu):(e=Ke,e!==0||(e=window.event,e=e===void 0?16:ew(e.type)),e):1}function Fn(e,t,n,r){if(50<Os)throw Os=0,Cp=null,Error(ue(185));hl(e,n,r),(!(Fe&2)||e!==Et)&&(e===Et&&(!(Fe&2)&&(od|=n),kt===4&&Xr(e,Lt)),Xt(e,r),n===1&&Fe===0&&!(t.mode&1)&&(Sa=mt()+500,ed&&zo()))}function Xt(e,t){var n=e.callbackNode;rE(e,t);var r=qu(e,e===Et?Lt:0);if(r===0)n!==null&&sv(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&sv(n),t===1)e.tag===0?nO(Xv.bind(null,e)):yw(Xv.bind(null,e)),YE(function(){!(Fe&6)&&zo()}),n=null;else{switch(Kx(r)){case 1:n=Nm;break;case 4:n=Vx;break;case 16:n=Zu;break;case 536870912:n=Zx;break;default:n=Zu}n=v1(n,d1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function d1(e,t){if(Pu=-1,Cu=0,Fe&6)throw Error(ue(327));var n=e.callbackNode;if(da()&&e.callbackNode!==n)return null;var r=qu(e,e===Et?Lt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=dc(e,r);else{t=r;var o=Fe;Fe|=2;var a=h1();(Et!==e||Lt!==t)&&(Pr=null,Sa=mt()+500,ui(e,t));do try{SO();break}catch(u){f1(e,u)}while(1);Km(),lc.current=a,Fe=o,bt!==null?t=0:(Et=null,Lt=0,t=kt)}if(t!==0){if(t===2&&(o=Xh(e),o!==0&&(r=o,t=Ep(e,o))),t===1)throw n=Js,ui(e,0),Xr(e,r),Xt(e,mt()),n;if(t===6)Xr(e,r);else{if(o=e.current.alternate,!(r&30)&&!xO(o)&&(t=dc(e,r),t===2&&(a=Xh(e),a!==0&&(r=a,t=Ep(e,a))),t===1))throw n=Js,ui(e,0),Xr(e,r),Xt(e,mt()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(ue(345));case 2:Yo(e,Qt,Pr);break;case 3:if(Xr(e,r),(r&130023424)===r&&(t=u_+500-mt(),10<t)){if(qu(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ht(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=sp(Yo.bind(null,e,Qt,Pr),t);break}Yo(e,Qt,Pr);break;case 4:if(Xr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-jn(r);a=1<<s,s=t[s],s>o&&(o=s),r&=~a}if(r=o,r=mt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bO(r/1960))-r,10<r){e.timeoutHandle=sp(Yo.bind(null,e,Qt,Pr),r);break}Yo(e,Qt,Pr);break;case 5:Yo(e,Qt,Pr);break;default:throw Error(ue(329))}}}return Xt(e,mt()),e.callbackNode===n?d1.bind(null,e):null}function Ep(e,t){var n=Es;return e.current.memoizedState.isDehydrated&&(ui(e,t).flags|=256),e=dc(e,t),e!==2&&(t=Qt,Qt=n,t!==null&&Op(t)),e}function Op(e){Qt===null?Qt=e:Qt.push.apply(Qt,e)}function xO(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!Wn(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xr(e,t){for(t&=~l_,t&=~od,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-jn(t),r=1<<n;e[n]=-1,t&=~r}}function Xv(e){if(Fe&6)throw Error(ue(327));da();var t=qu(e,0);if(!(t&1))return Xt(e,mt()),null;var n=dc(e,t);if(e.tag!==0&&n===2){var r=Xh(e);r!==0&&(t=r,n=Ep(e,r))}if(n===1)throw n=Js,ui(e,0),Xr(e,t),Xt(e,mt()),n;if(n===6)throw Error(ue(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yo(e,Qt,Pr),Xt(e,mt()),null}function c_(e,t){var n=Fe;Fe|=1;try{return e(t)}finally{Fe=n,Fe===0&&(Sa=mt()+500,ed&&zo())}}function gi(e){ro!==null&&ro.tag===0&&!(Fe&6)&&da();var t=Fe;Fe|=1;var n=xn.transition,r=Ke;try{if(xn.transition=null,Ke=1,e)return e()}finally{Ke=r,xn.transition=n,Fe=t,!(Fe&6)&&zo()}}function d_(){tn=ra.current,rt(ra)}function ui(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,JE(n)),bt!==null)for(n=bt.return;n!==null;){var r=n;switch(Vm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yu();break;case 3:xa(),rt(Jt),rt($t),e_();break;case 5:Xm(r);break;case 4:xa();break;case 13:rt(st);break;case 19:rt(st);break;case 10:Qm(r.type._context);break;case 22:case 23:d_()}n=n.return}if(Et=e,bt=e=ho(e.current,null),Lt=tn=t,kt=0,Js=null,l_=od=_i=0,Qt=Es=null,ri!==null){for(t=0;t<ri.length;t++)if(n=ri[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var s=a.next;a.next=o,r.next=s}n.pending=r}ri=null}return e}function f1(e,t){do{var n=bt;try{if(Km(),wu.current=sc,ac){for(var r=lt.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ac=!1}if(mi=0,Ct=St=lt=null,Ps=!1,Ks=0,s_.current=null,n===null||n.return===null){kt=1,Js=t,bt=null;break}e:{var a=e,s=n.return,u=n,c=t;if(t=Lt,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var f=c,p=u,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var _=p.alternate;_?(p.updateQueue=_.updateQueue,p.memoizedState=_.memoizedState,p.lanes=_.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=Fv(s);if(v!==null){v.flags&=-257,$v(v,s,u,a,t),v.mode&1&&jv(a,f,t),t=v,c=f;var y=t.updateQueue;if(y===null){var b=new Set;b.add(c),t.updateQueue=b}else y.add(c);break e}else{if(!(t&1)){jv(a,f,t),f_();break e}c=Error(ue(426))}}else if(it&&u.mode&1){var P=Fv(s);if(P!==null){!(P.flags&65536)&&(P.flags|=256),$v(P,s,u,a,t),Zm(wa(c,u));break e}}a=c=wa(c,u),kt!==4&&(kt=2),Es===null?Es=[a]:Es.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=Qw(a,c,t);Av(a,g);break e;case 1:u=c;var x=a.type,S=a.stateNode;if(!(a.flags&128)&&(typeof x.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(co===null||!co.has(S)))){a.flags|=65536,t&=-t,a.lanes|=t;var E=Gw(a,u,t);Av(a,E);break e}}a=a.return}while(a!==null)}m1(n)}catch(T){t=T,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(1)}function h1(){var e=lc.current;return lc.current=sc,e===null?sc:e}function f_(){(kt===0||kt===3||kt===2)&&(kt=4),Et===null||!(_i&268435455)&&!(od&268435455)||Xr(Et,Lt)}function dc(e,t){var n=Fe;Fe|=2;var r=h1();(Et!==e||Lt!==t)&&(Pr=null,ui(e,t));do try{wO();break}catch(o){f1(e,o)}while(1);if(Km(),Fe=n,lc.current=r,bt!==null)throw Error(ue(261));return Et=null,Lt=0,kt}function wO(){for(;bt!==null;)p1(bt)}function SO(){for(;bt!==null&&!KC();)p1(bt)}function p1(e){var t=g1(e.alternate,e,tn);e.memoizedProps=e.pendingProps,t===null?m1(e):bt=t,s_.current=null}function m1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_O(n,t),n!==null){n.flags&=32767,bt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{kt=6,bt=null;return}}else if(n=mO(n,t,tn),n!==null){bt=n;return}if(t=t.sibling,t!==null){bt=t;return}bt=t=e}while(t!==null);kt===0&&(kt=5)}function Yo(e,t,n){var r=Ke,o=xn.transition;try{xn.transition=null,Ke=1,kO(e,t,n,r)}finally{xn.transition=o,Ke=r}return null}function kO(e,t,n,r){do da();while(ro!==null);if(Fe&6)throw Error(ue(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(ue(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(oE(e,a),e===Et&&(bt=Et=null,Lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||au||(au=!0,v1(Zu,function(){return da(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=xn.transition,xn.transition=null;var s=Ke;Ke=1;var u=Fe;Fe|=4,s_.current=null,vO(e,n),u1(n,e),HE(ip),Ku=!!op,ip=op=null,e.current=n,yO(n),QC(),Fe=u,Ke=s,xn.transition=a}else e.current=n;if(au&&(au=!1,ro=e,cc=o),a=e.pendingLanes,a===0&&(co=null),YC(n.stateNode),Xt(e,mt()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(uc)throw uc=!1,e=Pp,Pp=null,e;return cc&1&&e.tag!==0&&da(),a=e.pendingLanes,a&1?e===Cp?Os++:(Os=0,Cp=e):Os=0,zo(),null}function da(){if(ro!==null){var e=Kx(cc),t=xn.transition,n=Ke;try{if(xn.transition=null,Ke=16>e?16:e,ro===null)var r=!1;else{if(e=ro,ro=null,cc=0,Fe&6)throw Error(ue(331));var o=Fe;for(Fe|=4,ve=e.current;ve!==null;){var a=ve,s=a.child;if(ve.flags&16){var u=a.deletions;if(u!==null){for(var c=0;c<u.length;c++){var f=u[c];for(ve=f;ve!==null;){var p=ve;switch(p.tag){case 0:case 11:case 15:Cs(8,p,a)}var h=p.child;if(h!==null)h.return=p,ve=h;else for(;ve!==null;){p=ve;var _=p.sibling,v=p.return;if(a1(p),p===f){ve=null;break}if(_!==null){_.return=v,ve=_;break}ve=v}}}var y=a.alternate;if(y!==null){var b=y.child;if(b!==null){y.child=null;do{var P=b.sibling;b.sibling=null,b=P}while(b!==null)}}ve=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,ve=s;else e:for(;ve!==null;){if(a=ve,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Cs(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,ve=g;break e}ve=a.return}}var x=e.current;for(ve=x;ve!==null;){s=ve;var S=s.child;if(s.subtreeFlags&2064&&S!==null)S.return=s,ve=S;else e:for(s=x;ve!==null;){if(u=ve,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:rd(9,u)}}catch(T){ct(u,u.return,T)}if(u===s){ve=null;break e}var E=u.sibling;if(E!==null){E.return=u.return,ve=E;break e}ve=u.return}}if(Fe=o,zo(),cr&&typeof cr.onPostCommitFiberRoot=="function")try{cr.onPostCommitFiberRoot(Qc,e)}catch{}r=!0}return r}finally{Ke=n,xn.transition=t}}return!1}function ey(e,t,n){t=wa(n,t),t=Qw(e,t,1),e=uo(e,t,1),t=Ht(),e!==null&&(hl(e,1,t),Xt(e,t))}function ct(e,t,n){if(e.tag===3)ey(e,e,n);else for(;t!==null;){if(t.tag===3){ey(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(co===null||!co.has(r))){e=wa(n,e),e=Gw(t,e,1),t=uo(t,e,1),e=Ht(),t!==null&&(hl(t,1,e),Xt(t,e));break}}t=t.return}}function PO(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ht(),e.pingedLanes|=e.suspendedLanes&n,Et===e&&(Lt&n)===n&&(kt===4||kt===3&&(Lt&130023424)===Lt&&500>mt()-u_?ui(e,0):l_|=n),Xt(e,t)}function _1(e,t){t===0&&(e.mode&1?(t=Gl,Gl<<=1,!(Gl&130023424)&&(Gl=4194304)):t=1);var n=Ht();e=Mr(e,t),e!==null&&(hl(e,t,n),Xt(e,n))}function CO(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_1(e,n)}function EO(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(ue(314))}r!==null&&r.delete(t),_1(e,n)}var g1;g1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Jt.current)Gt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Gt=!1,pO(e,t,n);Gt=!!(e.flags&131072)}else Gt=!1,it&&t.flags&1048576&&bw(t,tc,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ku(e,t),e=t.pendingProps;var o=va(t,$t.current);ca(t,n),o=n_(null,t,r,e,o,n);var a=r_();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Yt(r)?(a=!0,Xu(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Jm(t),o.updater=td,t.stateNode=o,o._reactInternals=t,pp(t,r,e,n),t=gp(null,t,r,!0,a,n)):(t.tag=0,it&&a&&Hm(t),Wt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ku(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=RO(r),e=zn(r,e),o){case 0:t=_p(null,t,r,e,n);break e;case 1:t=Hv(null,t,r,e,n);break e;case 11:t=Uv(null,t,r,e,n);break e;case 14:t=Wv(null,t,r,zn(r.type,e),n);break e}throw Error(ue(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:zn(r,o),_p(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:zn(r,o),Hv(e,t,r,o,n);case 3:e:{if(e1(t),e===null)throw Error(ue(387));r=t.pendingProps,a=t.memoizedState,o=a.element,kw(e,t),oc(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=wa(Error(ue(423)),t),t=Vv(e,t,r,n,o);break e}else if(r!==o){o=wa(Error(ue(424)),t),t=Vv(e,t,r,n,o);break e}else for(nn=lo(t.stateNode.containerInfo.firstChild),sn=t,it=!0,Mn=null,n=Ow(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ya(),r===o){t=Dr(e,t,n);break e}Wt(e,t,r,n)}t=t.child}return t;case 5:return Rw(t),e===null&&dp(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,s=o.children,ap(r,o)?s=null:a!==null&&ap(r,a)&&(t.flags|=32),Xw(e,t),Wt(e,t,s,n),t.child;case 6:return e===null&&dp(t),null;case 13:return t1(e,t,n);case 4:return Ym(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ba(t,null,r,n):Wt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:zn(r,o),Uv(e,t,r,o,n);case 7:return Wt(e,t,t.pendingProps,n),t.child;case 8:return Wt(e,t,t.pendingProps.children,n),t.child;case 12:return Wt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,s=o.value,et(nc,r._currentValue),r._currentValue=s,a!==null)if(Wn(a.value,s)){if(a.children===o.children&&!Jt.current){t=Dr(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){s=a.child;for(var c=u.firstContext;c!==null;){if(c.context===r){if(a.tag===1){c=Ir(-1,n&-n),c.tag=2;var f=a.updateQueue;if(f!==null){f=f.shared;var p=f.pending;p===null?c.next=c:(c.next=p.next,p.next=c),f.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),fp(a.return,n,t),u.lanes|=n;break}c=c.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(ue(341));s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),fp(s,n,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}Wt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,ca(t,n),o=kn(o),r=r(o),t.flags|=1,Wt(e,t,r,n),t.child;case 14:return r=t.type,o=zn(r,t.pendingProps),o=zn(r.type,o),Wv(e,t,r,o,n);case 15:return Jw(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:zn(r,o),ku(e,t),t.tag=1,Yt(r)?(e=!0,Xu(t)):e=!1,ca(t,n),Cw(t,r,o),pp(t,r,o,n),gp(null,t,r,!0,e,n);case 19:return n1(e,t,n);case 22:return Yw(e,t,n)}throw Error(ue(156,t.tag))};function v1(e,t){return Hx(e,t)}function OO(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(e,t,n,r){return new OO(e,t,n,r)}function h_(e){return e=e.prototype,!(!e||!e.isReactComponent)}function RO(e){if(typeof e=="function")return h_(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Am)return 11;if(e===Im)return 14}return 2}function ho(e,t){var n=e.alternate;return n===null?(n=bn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Eu(e,t,n,r,o,a){var s=2;if(r=e,typeof e=="function")h_(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case qi:return ci(n.children,o,a,t);case Lm:s=8,o|=8;break;case Dh:return e=bn(12,n,t,o|2),e.elementType=Dh,e.lanes=a,e;case jh:return e=bn(13,n,t,o),e.elementType=jh,e.lanes=a,e;case Fh:return e=bn(19,n,t,o),e.elementType=Fh,e.lanes=a,e;case Ex:return id(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Px:s=10;break e;case Cx:s=9;break e;case Am:s=11;break e;case Im:s=14;break e;case Qr:s=16,r=null;break e}throw Error(ue(130,e==null?e:typeof e,""))}return t=bn(s,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function ci(e,t,n,r){return e=bn(7,e,r,t),e.lanes=n,e}function id(e,t,n,r){return e=bn(22,e,r,t),e.elementType=Ex,e.lanes=n,e.stateNode={isHidden:!1},e}function Kf(e,t,n){return e=bn(6,e,null,t),e.lanes=n,e}function Qf(e,t,n){return t=bn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function TO(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rf(0),this.expirationTimes=Rf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rf(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function p_(e,t,n,r,o,a,s,u,c){return e=new TO(e,t,n,u,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=bn(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jm(a),e}function LO(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function y1(e){if(!e)return Co;e=e._reactInternals;e:{if(Si(e)!==e||e.tag!==1)throw Error(ue(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Yt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(ue(171))}if(e.tag===1){var n=e.type;if(Yt(n))return vw(e,n,t)}return t}function b1(e,t,n,r,o,a,s,u,c){return e=p_(n,r,!0,e,o,a,s,u,c),e.context=y1(null),n=e.current,r=Ht(),o=fo(n),a=Ir(r,o),a.callback=t??null,uo(n,a,o),e.current.lanes=o,hl(e,o,r),Xt(e,r),e}function ad(e,t,n,r){var o=t.current,a=Ht(),s=fo(o);return n=y1(n),t.context===null?t.context=n:t.pendingContext=n,t=Ir(a,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=uo(o,t,s),e!==null&&(Fn(e,o,s,a),xu(e,o,s)),s}function fc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ty(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function m_(e,t){ty(e,t),(e=e.alternate)&&ty(e,t)}function AO(){return null}var x1=typeof reportError=="function"?reportError:function(e){console.error(e)};function __(e){this._internalRoot=e}sd.prototype.render=__.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(ue(409));ad(e,t,null,null)};sd.prototype.unmount=__.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gi(function(){ad(null,e,null,null)}),t[Br]=null}};function sd(e){this._internalRoot=e}sd.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yr.length&&t!==0&&t<Yr[n].priority;n++);Yr.splice(n,0,e),n===0&&Xx(e)}};function g_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ld(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ny(){}function IO(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var f=fc(s);a.call(f)}}var s=b1(t,r,e,0,null,!1,!1,"",ny);return e._reactRootContainer=s,e[Br]=s.current,Ws(e.nodeType===8?e.parentNode:e),gi(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var u=r;r=function(){var f=fc(c);u.call(f)}}var c=p_(e,0,!1,null,null,!1,!1,"",ny);return e._reactRootContainer=c,e[Br]=c.current,Ws(e.nodeType===8?e.parentNode:e),gi(function(){ad(t,c,n,r)}),c}function ud(e,t,n,r,o){var a=n._reactRootContainer;if(a){var s=a;if(typeof o=="function"){var u=o;o=function(){var c=fc(s);u.call(c)}}ad(t,s,e,o)}else s=IO(n,t,e,o,r);return fc(s)}Qx=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=gs(t.pendingLanes);n!==0&&(Bm(t,n|1),Xt(t,mt()),!(Fe&6)&&(Sa=mt()+500,zo()))}break;case 13:gi(function(){var r=Mr(e,1);if(r!==null){var o=Ht();Fn(r,e,1,o)}}),m_(e,1)}};Mm=function(e){if(e.tag===13){var t=Mr(e,134217728);if(t!==null){var n=Ht();Fn(t,e,134217728,n)}m_(e,134217728)}};Gx=function(e){if(e.tag===13){var t=fo(e),n=Mr(e,t);if(n!==null){var r=Ht();Fn(n,e,t,r)}m_(e,t)}};Jx=function(){return Ke};Yx=function(e,t){var n=Ke;try{return Ke=e,t()}finally{Ke=n}};Gh=function(e,t,n){switch(t){case"input":if(Wh(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Xc(r);if(!o)throw Error(ue(90));Rx(r),Wh(r,o)}}}break;case"textarea":Lx(e,n);break;case"select":t=n.value,t!=null&&aa(e,!!n.multiple,t,!1)}};Dx=c_;jx=gi;var zO={usingClientEntryPoint:!1,Events:[ml,Ji,Xc,Bx,Mx,c_]},ls={findFiberByHostInstance:ni,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},NO={bundleType:ls.bundleType,version:ls.version,rendererPackageName:ls.rendererPackageName,rendererConfig:ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ux(e),e===null?null:e.stateNode},findFiberByHostInstance:ls.findFiberByHostInstance||AO,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!su.isDisabled&&su.supportsFiber)try{Qc=su.inject(NO),cr=su}catch{}}dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zO;dn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g_(t))throw Error(ue(200));return LO(e,t,null,n)};dn.createRoot=function(e,t){if(!g_(e))throw Error(ue(299));var n=!1,r="",o=x1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=p_(e,1,!1,null,null,n,!1,r,o),e[Br]=t.current,Ws(e.nodeType===8?e.parentNode:e),new __(t)};dn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(ue(188)):(e=Object.keys(e).join(","),Error(ue(268,e)));return e=Ux(t),e=e===null?null:e.stateNode,e};dn.flushSync=function(e){return gi(e)};dn.hydrate=function(e,t,n){if(!ld(t))throw Error(ue(200));return ud(null,e,t,!0,n)};dn.hydrateRoot=function(e,t,n){if(!g_(e))throw Error(ue(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",s=x1;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=b1(t,null,e,1,n??null,o,!1,a,s),e[Br]=t.current,Ws(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new sd(t)};dn.render=function(e,t,n){if(!ld(t))throw Error(ue(200));return ud(null,e,t,!1,n)};dn.unmountComponentAtNode=function(e){if(!ld(e))throw Error(ue(40));return e._reactRootContainer?(gi(function(){ud(null,null,e,!1,function(){e._reactRootContainer=null,e[Br]=null})}),!0):!1};dn.unstable_batchedUpdates=c_;dn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ld(n))throw Error(ue(200));if(e==null||e._reactInternals===void 0)throw Error(ue(38));return ud(e,t,n,!1,r)};dn.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=dn})(AC);const BO=hx(ko);var w1,ry=ko;w1=ry.createRoot,ry.hydrateRoot;var Rp={},MO={get exports(){return Rp},set exports(e){Rp=e}},S1={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ka=k;function DO(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jO=typeof Object.is=="function"?Object.is:DO,FO=ka.useState,$O=ka.useEffect,UO=ka.useLayoutEffect,WO=ka.useDebugValue;function HO(e,t){var n=t(),r=FO({inst:{value:n,getSnapshot:t}}),o=r[0].inst,a=r[1];return UO(function(){o.value=n,o.getSnapshot=t,Gf(o)&&a({inst:o})},[e,n,t]),$O(function(){return Gf(o)&&a({inst:o}),e(function(){Gf(o)&&a({inst:o})})},[e]),WO(n),n}function Gf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jO(e,n)}catch{return!0}}function VO(e,t){return t()}var ZO=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?VO:HO;S1.useSyncExternalStore=ka.useSyncExternalStore!==void 0?ka.useSyncExternalStore:ZO;(function(e){e.exports=S1})(MO);var Tp={},qO={get exports(){return Tp},set exports(e){Tp=e}},k1={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cd=k,KO=Rp;function QO(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var GO=typeof Object.is=="function"?Object.is:QO,JO=KO.useSyncExternalStore,YO=cd.useRef,XO=cd.useEffect,e2=cd.useMemo,t2=cd.useDebugValue;k1.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var a=YO(null);if(a.current===null){var s={hasValue:!1,value:null};a.current=s}else s=a.current;a=e2(function(){function c(v){if(!f){if(f=!0,p=v,v=r(v),o!==void 0&&s.hasValue){var y=s.value;if(o(y,v))return h=y}return h=v}if(y=h,GO(p,v))return y;var b=r(v);return o!==void 0&&o(y,b)?y:(p=v,h=b)}var f=!1,p,h,_=n===void 0?null:n;return[function(){return c(t())},_===null?void 0:function(){return c(_())}]},[t,n,r,o]);var u=JO(e,a[0],a[1]);return XO(function(){s.hasValue=!0,s.value=u},[u]),t2(u),u};(function(e){e.exports=k1})(qO);function n2(e){e()}let P1=n2;const r2=e=>P1=e,o2=()=>P1,Eo=k.createContext(null);function C1(){return k.useContext(Eo)}const i2=()=>{throw new Error("uSES not initialized!")};let E1=i2;const a2=e=>{E1=e},s2=(e,t)=>e===t;function l2(e=Eo){const t=e===Eo?C1:()=>k.useContext(e);return function(r,o=s2){const{store:a,subscription:s,getServerState:u}=t(),c=E1(s.addNestedSub,a.getState,u||a.getState,r,o);return k.useDebugValue(c),c}}const u2=l2();function Ve(){return Ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ve.apply(this,arguments)}var Lp={},c2={get exports(){return Lp},set exports(e){Lp=e}},Qe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ot=typeof Symbol=="function"&&Symbol.for,v_=Ot?Symbol.for("react.element"):60103,y_=Ot?Symbol.for("react.portal"):60106,dd=Ot?Symbol.for("react.fragment"):60107,fd=Ot?Symbol.for("react.strict_mode"):60108,hd=Ot?Symbol.for("react.profiler"):60114,pd=Ot?Symbol.for("react.provider"):60109,md=Ot?Symbol.for("react.context"):60110,b_=Ot?Symbol.for("react.async_mode"):60111,_d=Ot?Symbol.for("react.concurrent_mode"):60111,gd=Ot?Symbol.for("react.forward_ref"):60112,vd=Ot?Symbol.for("react.suspense"):60113,d2=Ot?Symbol.for("react.suspense_list"):60120,yd=Ot?Symbol.for("react.memo"):60115,bd=Ot?Symbol.for("react.lazy"):60116,f2=Ot?Symbol.for("react.block"):60121,h2=Ot?Symbol.for("react.fundamental"):60117,p2=Ot?Symbol.for("react.responder"):60118,m2=Ot?Symbol.for("react.scope"):60119;function hn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case v_:switch(e=e.type,e){case b_:case _d:case dd:case hd:case fd:case vd:return e;default:switch(e=e&&e.$$typeof,e){case md:case gd:case bd:case yd:case pd:return e;default:return t}}case y_:return t}}}function O1(e){return hn(e)===_d}Qe.AsyncMode=b_;Qe.ConcurrentMode=_d;Qe.ContextConsumer=md;Qe.ContextProvider=pd;Qe.Element=v_;Qe.ForwardRef=gd;Qe.Fragment=dd;Qe.Lazy=bd;Qe.Memo=yd;Qe.Portal=y_;Qe.Profiler=hd;Qe.StrictMode=fd;Qe.Suspense=vd;Qe.isAsyncMode=function(e){return O1(e)||hn(e)===b_};Qe.isConcurrentMode=O1;Qe.isContextConsumer=function(e){return hn(e)===md};Qe.isContextProvider=function(e){return hn(e)===pd};Qe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===v_};Qe.isForwardRef=function(e){return hn(e)===gd};Qe.isFragment=function(e){return hn(e)===dd};Qe.isLazy=function(e){return hn(e)===bd};Qe.isMemo=function(e){return hn(e)===yd};Qe.isPortal=function(e){return hn(e)===y_};Qe.isProfiler=function(e){return hn(e)===hd};Qe.isStrictMode=function(e){return hn(e)===fd};Qe.isSuspense=function(e){return hn(e)===vd};Qe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===dd||e===_d||e===hd||e===fd||e===vd||e===d2||typeof e=="object"&&e!==null&&(e.$$typeof===bd||e.$$typeof===yd||e.$$typeof===pd||e.$$typeof===md||e.$$typeof===gd||e.$$typeof===h2||e.$$typeof===p2||e.$$typeof===m2||e.$$typeof===f2)};Qe.typeOf=hn;(function(e){e.exports=Qe})(c2);var R1=Lp,_2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},g2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},T1={};T1[R1.ForwardRef]=_2;T1[R1.Memo]=g2;var oy={},v2={get exports(){return oy},set exports(e){oy=e}},Ge={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_=Symbol.for("react.element"),w_=Symbol.for("react.portal"),xd=Symbol.for("react.fragment"),wd=Symbol.for("react.strict_mode"),Sd=Symbol.for("react.profiler"),kd=Symbol.for("react.provider"),Pd=Symbol.for("react.context"),y2=Symbol.for("react.server_context"),Cd=Symbol.for("react.forward_ref"),Ed=Symbol.for("react.suspense"),Od=Symbol.for("react.suspense_list"),Rd=Symbol.for("react.memo"),Td=Symbol.for("react.lazy"),b2=Symbol.for("react.offscreen"),L1;L1=Symbol.for("react.module.reference");function Cn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case x_:switch(e=e.type,e){case xd:case Sd:case wd:case Ed:case Od:return e;default:switch(e=e&&e.$$typeof,e){case y2:case Pd:case Cd:case Td:case Rd:case kd:return e;default:return t}}case w_:return t}}}Ge.ContextConsumer=Pd;Ge.ContextProvider=kd;Ge.Element=x_;Ge.ForwardRef=Cd;Ge.Fragment=xd;Ge.Lazy=Td;Ge.Memo=Rd;Ge.Portal=w_;Ge.Profiler=Sd;Ge.StrictMode=wd;Ge.Suspense=Ed;Ge.SuspenseList=Od;Ge.isAsyncMode=function(){return!1};Ge.isConcurrentMode=function(){return!1};Ge.isContextConsumer=function(e){return Cn(e)===Pd};Ge.isContextProvider=function(e){return Cn(e)===kd};Ge.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===x_};Ge.isForwardRef=function(e){return Cn(e)===Cd};Ge.isFragment=function(e){return Cn(e)===xd};Ge.isLazy=function(e){return Cn(e)===Td};Ge.isMemo=function(e){return Cn(e)===Rd};Ge.isPortal=function(e){return Cn(e)===w_};Ge.isProfiler=function(e){return Cn(e)===Sd};Ge.isStrictMode=function(e){return Cn(e)===wd};Ge.isSuspense=function(e){return Cn(e)===Ed};Ge.isSuspenseList=function(e){return Cn(e)===Od};Ge.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===xd||e===Sd||e===wd||e===Ed||e===Od||e===b2||typeof e=="object"&&e!==null&&(e.$$typeof===Td||e.$$typeof===Rd||e.$$typeof===kd||e.$$typeof===Pd||e.$$typeof===Cd||e.$$typeof===L1||e.getModuleId!==void 0)};Ge.typeOf=Cn;(function(e){e.exports=Ge})(v2);function x2(){const e=o2();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],o=t;for(;o;)r.push(o),o=o.next;return r},subscribe(r){let o=!0,a=n={callback:r,next:null,prev:n};return a.prev?a.prev.next=a:t=a,function(){!o||t===null||(o=!1,a.next?a.next.prev=a.prev:n=a.prev,a.prev?a.prev.next=a.next:t=a.next)}}}}const iy={notify(){},get:()=>[]};function w2(e,t){let n,r=iy;function o(h){return c(),r.subscribe(h)}function a(){r.notify()}function s(){p.onStateChange&&p.onStateChange()}function u(){return!!n}function c(){n||(n=t?t.addNestedSub(s):e.subscribe(s),r=x2())}function f(){n&&(n(),n=void 0,r.clear(),r=iy)}const p={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:s,isSubscribed:u,trySubscribe:c,tryUnsubscribe:f,getListeners:()=>r};return p}const S2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",k2=S2?k.useLayoutEffect:k.useEffect;function P2({store:e,context:t,children:n,serverState:r}){const o=k.useMemo(()=>{const u=w2(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0}},[e,r]),a=k.useMemo(()=>e.getState(),[e]);k2(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const s=t||Eo;return j.createElement(s.Provider,{value:o},n)}function A1(e=Eo){const t=e===Eo?C1:()=>k.useContext(e);return function(){const{store:r}=t();return r}}const C2=A1();function E2(e=Eo){const t=e===Eo?C2:A1(e);return function(){return t().dispatch}}const O2=E2();a2(Tp.useSyncExternalStoreWithSelector);r2(ko.unstable_batchedUpdates);/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function He(){return He=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},He.apply(this,arguments)}var yt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(yt||(yt={}));const ay="popstate";function R2(e){e===void 0&&(e={});function t(r,o){let{pathname:a,search:s,hash:u}=r.location;return Ys("",{pathname:a,search:s,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:gl(o)}return L2(t,n,null,e)}function ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Pa(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function T2(){return Math.random().toString(36).substr(2,8)}function sy(e,t){return{usr:e.state,key:e.key,idx:t}}function Ys(e,t,n,r){return n===void 0&&(n=null),He({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?$r(t):t,{state:n,key:t&&t.key||r||T2()})}function gl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function $r(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function L2(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:a=!1}=r,s=o.history,u=yt.Pop,c=null,f=p();f==null&&(f=0,s.replaceState(He({},s.state,{idx:f}),""));function p(){return(s.state||{idx:null}).idx}function h(){u=yt.Pop;let P=p(),g=P==null?null:P-f;f=P,c&&c({action:u,location:b.location,delta:g})}function _(P,g){u=yt.Push;let x=Ys(b.location,P,g);n&&n(x,P),f=p()+1;let S=sy(x,f),E=b.createHref(x);try{s.pushState(S,"",E)}catch{o.location.assign(E)}a&&c&&c({action:u,location:b.location,delta:1})}function v(P,g){u=yt.Replace;let x=Ys(b.location,P,g);n&&n(x,P),f=p();let S=sy(x,f),E=b.createHref(x);s.replaceState(S,"",E),a&&c&&c({action:u,location:b.location,delta:0})}function y(P){let g=o.location.origin!=="null"?o.location.origin:o.location.href,x=typeof P=="string"?P:gl(P);return ze(g,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,g)}let b={get action(){return u},get location(){return e(o,s)},listen(P){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(ay,h),c=P,()=>{o.removeEventListener(ay,h),c=null}},createHref(P){return t(o,P)},createURL:y,encodeLocation(P){let g=y(P);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:_,replace:v,go(P){return s.go(P)}};return b}var wt;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(wt||(wt={}));const A2=new Set(["lazy","caseSensitive","path","id","index","children"]);function I2(e){return e.index===!0}function Ap(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((o,a)=>{let s=[...n,a],u=typeof o.id=="string"?o.id:s.join("-");if(ze(o.index!==!0||!o.children,"Cannot specify children on an index route"),ze(!r[u],'Found a route id collision on id "'+u+`".  Route id's must be globally unique within Data Router usages`),I2(o)){let c=He({},o,t(o),{id:u});return r[u]=c,c}else{let c=He({},o,t(o),{id:u,children:void 0});return r[u]=c,o.children&&(c.children=Ap(o.children,t,s,r)),c}})}function oa(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?$r(t):t,o=vl(r.pathname||"/",n);if(o==null)return null;let a=I1(e);z2(a);let s=null;for(let u=0;s==null&&u<a.length;++u)s=W2(a[u],Z2(o));return s}function I1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(a,s,u)=>{let c={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};c.relativePath.startsWith("/")&&(ze(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let f=po([r,c.relativePath]),p=n.concat(c);a.children&&a.children.length>0&&(ze(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),I1(a.children,t,p,f)),!(a.path==null&&!a.index)&&t.push({path:f,score:$2(f,a.index),routesMeta:p})};return e.forEach((a,s)=>{var u;if(a.path===""||!((u=a.path)!=null&&u.includes("?")))o(a,s);else for(let c of z1(a.path))o(a,s,c)}),t}function z1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let s=z1(r.join("/")),u=[];return u.push(...s.map(c=>c===""?a:[a,c].join("/"))),o&&u.push(...s),u.map(c=>e.startsWith("/")&&c===""?"/":c)}function z2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:U2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const N2=/^:\w+$/,B2=3,M2=2,D2=1,j2=10,F2=-2,ly=e=>e==="*";function $2(e,t){let n=e.split("/"),r=n.length;return n.some(ly)&&(r+=F2),t&&(r+=M2),n.filter(o=>!ly(o)).reduce((o,a)=>o+(N2.test(a)?B2:a===""?D2:j2),r)}function U2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function W2(e,t){let{routesMeta:n}=e,r={},o="/",a=[];for(let s=0;s<n.length;++s){let u=n[s],c=s===n.length-1,f=o==="/"?t:t.slice(o.length)||"/",p=H2({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f);if(!p)return null;Object.assign(r,p.params);let h=u.route;a.push({params:r,pathname:po([o,p.pathname]),pathnameBase:G2(po([o,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(o=po([o,p.pathnameBase]))}return a}function H2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=V2(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],s=a.replace(/(.)\/+$/,"$1"),u=o.slice(1);return{params:r.reduce((f,p,h)=>{if(p==="*"){let _=u[h]||"";s=a.slice(0,a.length-_.length).replace(/(.)\/+$/,"$1")}return f[p]=q2(u[h]||"",p),f},{}),pathname:a,pathnameBase:s,pattern:e}}function V2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Pa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,u)=>(r.push(u),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Z2(e){try{return decodeURI(e)}catch(t){return Pa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function q2(e,t){try{return decodeURIComponent(e)}catch(n){return Pa(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function vl(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function K2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?$r(e):e;return{pathname:n?n.startsWith("/")?n:Q2(n,t):t,search:J2(r),hash:Y2(o)}}function Q2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Jf(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function S_(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function N1(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=$r(e):(o=He({},e),ze(!o.pathname||!o.pathname.includes("?"),Jf("?","pathname","search",o)),ze(!o.pathname||!o.pathname.includes("#"),Jf("#","pathname","hash",o)),ze(!o.search||!o.search.includes("#"),Jf("#","search","hash",o)));let a=e===""||o.pathname==="",s=a?"/":o.pathname,u;if(r||s==null)u=n;else{let h=t.length-1;if(s.startsWith("..")){let _=s.split("/");for(;_[0]==="..";)_.shift(),h-=1;o.pathname=_.join("/")}u=h>=0?t[h]:"/"}let c=K2(o,u),f=s&&s!=="/"&&s.endsWith("/"),p=(a||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(f||p)&&(c.pathname+="/"),c}const po=e=>e.join("/").replace(/\/\/+/g,"/"),G2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),J2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Y2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class k_{constructor(t,n,r,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function B1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const M1=["post","put","patch","delete"],X2=new Set(M1),eR=["get",...M1],tR=new Set(eR),nR=new Set([301,302,303,307,308]),rR=new Set([307,308]),Yf={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},oR={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},uy={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},D1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,j1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",iR=!j1,aR=e=>({hasErrorBoundary:!!e.hasErrorBoundary});function sR(e){ze(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t;if(e.mapRouteProperties)t=e.mapRouteProperties;else if(e.detectErrorBoundary){let J=e.detectErrorBoundary;t=X=>({hasErrorBoundary:J(X)})}else t=aR;let n={},r=Ap(e.routes,t,void 0,n),o,a=e.basename||"/",s=He({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),u=null,c=new Set,f=null,p=null,h=null,_=e.hydrationData!=null,v=oa(r,e.history.location,a),y=null;if(v==null){let J=Nn(404,{pathname:e.history.location.pathname}),{matches:X,route:ae}=_y(r);v=X,y={[ae.id]:J}}let b=!v.some(J=>J.route.lazy)&&(!v.some(J=>J.route.loader)||e.hydrationData!=null),P,g={historyAction:e.history.action,location:e.history.location,matches:v,initialized:b,navigation:Yf,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||y,fetchers:new Map,blockers:new Map},x=yt.Pop,S=!1,E,T=!1,A=!1,N=[],D=[],W=new Map,B=0,H=-1,G=new Map,q=new Set,$=new Map,re=new Map,Z=new Map,se=!1;function O(){return u=e.history.listen(J=>{let{action:X,location:ae,delta:ge}=J;if(se){se=!1;return}Pa(Z.size===0||ge!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ye=ki({currentLocation:g.location,nextLocation:ae,historyAction:X});if(ye&&ge!=null){se=!0,e.history.go(ge*-1),qt(ye,{state:"blocked",location:ae,proceed(){qt(ye,{state:"proceeding",proceed:void 0,reset:void 0,location:ae}),e.history.go(ge)},reset(){tt(ye),R({blockers:new Map(P.state.blockers)})}});return}return te(X,ae)}),g.initialized||te(yt.Pop,g.location),P}function Y(){u&&u(),c.clear(),E&&E.abort(),g.fetchers.forEach((J,X)=>de(X)),g.blockers.forEach((J,X)=>tt(X))}function U(J){return c.add(J),()=>c.delete(J)}function R(J){g=He({},g,J),c.forEach(X=>X(g))}function z(J,X){var ae,ge;let ye=g.actionData!=null&&g.navigation.formMethod!=null&&Cr(g.navigation.formMethod)&&g.navigation.state==="loading"&&((ae=J.state)==null?void 0:ae._isRedirect)!==!0,Se;X.actionData?Object.keys(X.actionData).length>0?Se=X.actionData:Se=null:ye?Se=g.actionData:Se=null;let Ce=X.loaderData?my(g.loaderData,X.loaderData,X.matches||[],X.errors):g.loaderData;for(let[xe]of Z)tt(xe);let we=S===!0||g.navigation.formMethod!=null&&Cr(g.navigation.formMethod)&&((ge=J.state)==null?void 0:ge._isRedirect)!==!0;o&&(r=o,o=void 0),R(He({},X,{actionData:Se,loaderData:Ce,historyAction:x,location:J,initialized:!0,navigation:Yf,revalidation:"idle",restoreScrollPosition:_r(J,X.matches||g.matches),preventScrollReset:we,blockers:new Map(g.blockers)})),T||x===yt.Pop||(x===yt.Push?e.history.push(J,J.state):x===yt.Replace&&e.history.replace(J,J.state)),x=yt.Pop,S=!1,T=!1,A=!1,N=[],D=[]}async function M(J,X){if(typeof J=="number"){e.history.go(J);return}let ae=Ip(g.location,g.matches,a,s.v7_prependBasename,J,X?.fromRouteId,X?.relative),{path:ge,submission:ye,error:Se}=cy(s.v7_normalizeFormMethod,!1,ae,X),Ce=g.location,we=Ys(g.location,ge,X&&X.state);we=He({},we,e.history.encodeLocation(we));let xe=X&&X.replace!=null?X.replace:void 0,Be=yt.Push;xe===!0?Be=yt.Replace:xe===!1||ye!=null&&Cr(ye.formMethod)&&ye.formAction===g.location.pathname+g.location.search&&(Be=yt.Replace);let We=X&&"preventScrollReset"in X?X.preventScrollReset===!0:void 0,xt=ki({currentLocation:Ce,nextLocation:we,historyAction:Be});if(xt){qt(xt,{state:"blocked",location:we,proceed(){qt(xt,{state:"proceeding",proceed:void 0,reset:void 0,location:we}),M(J,X)},reset(){tt(xt),R({blockers:new Map(g.blockers)})}});return}return await te(Be,we,{submission:ye,pendingError:Se,preventScrollReset:We,replace:X&&X.replace})}function V(){if(ee(),R({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){te(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}te(x||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function te(J,X,ae){E&&E.abort(),E=null,x=J,T=(ae&&ae.startUninterruptedRevalidation)===!0,Qn(g.location,g.matches),S=(ae&&ae.preventScrollReset)===!0;let ge=o||r,ye=ae&&ae.overrideNavigation,Se=oa(ge,X,a);if(!Se){let ht=Nn(404,{pathname:X.pathname}),{matches:_t,route:Kt}=_y(ge);No(),z(X,{matches:_t,loaderData:{},errors:{[Kt.id]:ht}});return}if(g.initialized&&fR(g.location,X)&&!(ae&&ae.submission&&Cr(ae.submission.formMethod))){z(X,{matches:Se});return}E=new AbortController;let Ce=cs(e.history,X,E.signal,ae&&ae.submission),we,xe;if(ae&&ae.pendingError)xe={[ia(Se).route.id]:ae.pendingError};else if(ae&&ae.submission&&Cr(ae.submission.formMethod)){let ht=await ie(Ce,X,ae.submission,Se,{replace:ae.replace});if(ht.shortCircuited)return;we=ht.pendingActionData,xe=ht.pendingActionError,ye=He({state:"loading",location:X},ae.submission),Ce=new Request(Ce.url,{signal:Ce.signal})}let{shortCircuited:Be,loaderData:We,errors:xt}=await fe(Ce,X,Se,ye,ae&&ae.submission,ae&&ae.fetcherSubmission,ae&&ae.replace,we,xe);Be||(E=null,z(X,He({matches:Se},we?{actionData:we}:{},{loaderData:We,errors:xt})))}async function ie(J,X,ae,ge,ye){ee();let Se=He({state:"submitting",location:X},ae);R({navigation:Se});let Ce,we=zp(ge,X);if(!we.route.action&&!we.route.lazy)Ce={type:wt.error,error:Nn(405,{method:J.method,pathname:X.pathname,routeId:we.route.id})};else if(Ce=await us("action",J,we,ge,n,t,a),J.signal.aborted)return{shortCircuited:!0};if(fa(Ce)){let xe;return ye&&ye.replace!=null?xe=ye.replace:xe=Ce.location===g.location.pathname+g.location.search,await le(g,Ce,{submission:ae,replace:xe}),{shortCircuited:!0}}if(Rs(Ce)){let xe=ia(ge,we.route.id);return(ye&&ye.replace)!==!0&&(x=yt.Push),{pendingActionData:{},pendingActionError:{[xe.route.id]:Ce.error}}}if(ii(Ce))throw Nn(400,{type:"defer-action"});return{pendingActionData:{[we.route.id]:Ce.data}}}async function fe(J,X,ae,ge,ye,Se,Ce,we,xe){let Be=ge;Be||(Be=He({state:"loading",location:X,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ye));let We=ye||Se?ye||Se:Be.formMethod&&Be.formAction&&Be.formData&&Be.formEncType?{formMethod:Be.formMethod,formAction:Be.formAction,formData:Be.formData,formEncType:Be.formEncType}:void 0,xt=o||r,[ht,_t]=dy(e.history,g,ae,We,X,A,N,D,$,xt,a,we,xe);if(No(Me=>!(ae&&ae.some(pe=>pe.route.id===Me))||ht&&ht.some(pe=>pe.route.id===Me)),ht.length===0&&_t.length===0){let Me=Ne();return z(X,He({matches:ae,loaderData:{},errors:xe||null},we?{actionData:we}:{},Me?{fetchers:new Map(g.fetchers)}:{})),{shortCircuited:!0}}if(!T){_t.forEach(pe=>{let gr=g.fetchers.get(pe.key),Ei={state:"loading",data:gr&&gr.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(pe.key,Ei)});let Me=we||g.actionData;R(He({navigation:Be},Me?Object.keys(Me).length===0?{actionData:null}:{actionData:Me}:{},_t.length>0?{fetchers:new Map(g.fetchers)}:{}))}H=++B,_t.forEach(Me=>{Me.controller&&W.set(Me.key,Me.controller)});let Kt=()=>_t.forEach(Me=>_e(Me.key));E&&E.signal.addEventListener("abort",Kt);let{results:Mo,loaderResults:ja,fetcherResults:Pi}=await me(g.matches,ae,ht,_t,J);if(J.signal.aborted)return{shortCircuited:!0};E&&E.signal.removeEventListener("abort",Kt),_t.forEach(Me=>W.delete(Me.key));let Gn=gy(Mo);if(Gn)return await le(g,Gn,{replace:Ce}),{shortCircuited:!0};let{loaderData:Ur,errors:Fa}=py(g,ae,ht,ja,xe,_t,Pi,re);re.forEach((Me,pe)=>{Me.subscribe(gr=>{(gr||Me.done)&&re.delete(pe)})});let $a=Ne(),Ua=$e(H),Ci=$a||Ua||_t.length>0;return He({loaderData:Ur,errors:Fa},Ci?{fetchers:new Map(g.fetchers)}:{})}function be(J){return g.fetchers.get(J)||oR}function Je(J,X,ae,ge){if(iR)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");W.has(J)&&_e(J);let ye=o||r,Se=Ip(g.location,g.matches,a,s.v7_prependBasename,ae,X,ge?.relative),Ce=oa(ye,Se,a);if(!Ce){ce(J,X,Nn(404,{pathname:Se}));return}let{path:we,submission:xe}=cy(s.v7_normalizeFormMethod,!0,Se,ge),Be=zp(Ce,we);if(S=(ge&&ge.preventScrollReset)===!0,xe&&Cr(xe.formMethod)){Ze(J,X,we,Be,Ce,xe);return}$.set(J,{routeId:X,path:we}),Re(J,X,we,Be,Ce,xe)}async function Ze(J,X,ae,ge,ye,Se){if(ee(),$.delete(J),!ge.route.action&&!ge.route.lazy){let It=Nn(405,{method:Se.formMethod,pathname:ae,routeId:X});ce(J,X,It);return}let Ce=g.fetchers.get(J),we=He({state:"submitting"},Se,{data:Ce&&Ce.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(J,we),R({fetchers:new Map(g.fetchers)});let xe=new AbortController,Be=cs(e.history,ae,xe.signal,Se);W.set(J,xe);let We=await us("action",Be,ge,ye,n,t,a);if(Be.signal.aborted){W.get(J)===xe&&W.delete(J);return}if(fa(We)){W.delete(J),q.add(J);let It=He({state:"loading"},Se,{data:void 0," _hasFetcherDoneAnything ":!0});return g.fetchers.set(J,It),R({fetchers:new Map(g.fetchers)}),le(g,We,{submission:Se,isFetchActionRedirect:!0})}if(Rs(We)){ce(J,X,We.error);return}if(ii(We))throw Nn(400,{type:"defer-action"});let xt=g.navigation.location||g.location,ht=cs(e.history,xt,xe.signal),_t=o||r,Kt=g.navigation.state!=="idle"?oa(_t,g.navigation.location,a):g.matches;ze(Kt,"Didn't find any matches after fetcher action");let Mo=++B;G.set(J,Mo);let ja=He({state:"loading",data:We.data},Se,{" _hasFetcherDoneAnything ":!0});g.fetchers.set(J,ja);let[Pi,Gn]=dy(e.history,g,Kt,Se,xt,A,N,D,$,_t,a,{[ge.route.id]:We.data},void 0);Gn.filter(It=>It.key!==J).forEach(It=>{let Oi=It.key,Ri=g.fetchers.get(Oi),Pl={state:"loading",data:Ri&&Ri.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(Oi,Pl),It.controller&&W.set(Oi,It.controller)}),R({fetchers:new Map(g.fetchers)});let Ur=()=>Gn.forEach(It=>_e(It.key));xe.signal.addEventListener("abort",Ur);let{results:Fa,loaderResults:$a,fetcherResults:Ua}=await me(g.matches,Kt,Pi,Gn,ht);if(xe.signal.aborted)return;xe.signal.removeEventListener("abort",Ur),G.delete(J),W.delete(J),Gn.forEach(It=>W.delete(It.key));let Ci=gy(Fa);if(Ci)return le(g,Ci);let{loaderData:Me,errors:pe}=py(g,g.matches,Pi,$a,void 0,Gn,Ua,re),gr={state:"idle",data:We.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(J,gr);let Ei=$e(Mo);g.navigation.state==="loading"&&Mo>H?(ze(x,"Expected pending action"),E&&E.abort(),z(g.navigation.location,{matches:Kt,loaderData:Me,errors:pe,fetchers:new Map(g.fetchers)})):(R(He({errors:pe,loaderData:my(g.loaderData,Me,Kt,pe)},Ei?{fetchers:new Map(g.fetchers)}:{})),A=!1)}async function Re(J,X,ae,ge,ye,Se){let Ce=g.fetchers.get(J),we=He({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Se,{data:Ce&&Ce.data," _hasFetcherDoneAnything ":!0});g.fetchers.set(J,we),R({fetchers:new Map(g.fetchers)});let xe=new AbortController,Be=cs(e.history,ae,xe.signal);W.set(J,xe);let We=await us("loader",Be,ge,ye,n,t,a);if(ii(We)&&(We=await W1(We,Be.signal,!0)||We),W.get(J)===xe&&W.delete(J),Be.signal.aborted)return;if(fa(We)){q.add(J),await le(g,We);return}if(Rs(We)){let ht=ia(g.matches,X);g.fetchers.delete(J),R({fetchers:new Map(g.fetchers),errors:{[ht.route.id]:We.error}});return}ze(!ii(We),"Unhandled fetcher deferred data");let xt={state:"idle",data:We.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(J,xt),R({fetchers:new Map(g.fetchers)})}async function le(J,X,ae){var ge;let{submission:ye,replace:Se,isFetchActionRedirect:Ce}=ae===void 0?{}:ae;X.revalidate&&(A=!0);let we=Ys(J.location,X.location,He({_isRedirect:!0},Ce?{_isFetchActionRedirect:!0}:{}));if(ze(we,"Expected a location on the redirect navigation"),D1.test(X.location)&&j1&&typeof((ge=window)==null?void 0:ge.location)<"u"){let _t=e.history.createURL(X.location),Kt=vl(_t.pathname,a)==null;if(window.location.origin!==_t.origin||Kt){Se?window.location.replace(X.location):window.location.assign(X.location);return}}E=null;let xe=Se===!0?yt.Replace:yt.Push,{formMethod:Be,formAction:We,formEncType:xt,formData:ht}=J.navigation;!ye&&Be&&We&&ht&&xt&&(ye={formMethod:Be,formAction:We,formEncType:xt,formData:ht}),rR.has(X.status)&&ye&&Cr(ye.formMethod)?await te(xe,we,{submission:He({},ye,{formAction:X.location}),preventScrollReset:S}):Ce?await te(xe,we,{overrideNavigation:{state:"loading",location:we,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},fetcherSubmission:ye,preventScrollReset:S}):await te(xe,we,{overrideNavigation:{state:"loading",location:we,formMethod:ye?ye.formMethod:void 0,formAction:ye?ye.formAction:void 0,formEncType:ye?ye.formEncType:void 0,formData:ye?ye.formData:void 0},preventScrollReset:S})}async function me(J,X,ae,ge,ye){let Se=await Promise.all([...ae.map(xe=>us("loader",ye,xe,X,n,t,a)),...ge.map(xe=>xe.matches&&xe.match&&xe.controller?us("loader",cs(e.history,xe.path,xe.controller.signal),xe.match,xe.matches,n,t,a):{type:wt.error,error:Nn(404,{pathname:xe.path})})]),Ce=Se.slice(0,ae.length),we=Se.slice(ae.length);return await Promise.all([vy(J,ae,Ce,Ce.map(()=>ye.signal),!1,g.loaderData),vy(J,ge.map(xe=>xe.match),we,ge.map(xe=>xe.controller?xe.controller.signal:null),!0)]),{results:Se,loaderResults:Ce,fetcherResults:we}}function ee(){A=!0,N.push(...No()),$.forEach((J,X)=>{W.has(X)&&(D.push(X),_e(X))})}function ce(J,X,ae){let ge=ia(g.matches,X);de(J),R({errors:{[ge.route.id]:ae},fetchers:new Map(g.fetchers)})}function de(J){W.has(J)&&_e(J),$.delete(J),G.delete(J),q.delete(J),g.fetchers.delete(J)}function _e(J){let X=W.get(J);ze(X,"Expected fetch controller: "+J),X.abort(),W.delete(J)}function ke(J){for(let X of J){let ge={state:"idle",data:be(X).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};g.fetchers.set(X,ge)}}function Ne(){let J=[],X=!1;for(let ae of q){let ge=g.fetchers.get(ae);ze(ge,"Expected fetcher: "+ae),ge.state==="loading"&&(q.delete(ae),J.push(ae),X=!0)}return ke(J),X}function $e(J){let X=[];for(let[ae,ge]of G)if(ge<J){let ye=g.fetchers.get(ae);ze(ye,"Expected fetcher: "+ae),ye.state==="loading"&&(_e(ae),G.delete(ae),X.push(ae))}return ke(X),X.length>0}function Ye(J,X){let ae=g.blockers.get(J)||uy;return Z.get(J)!==X&&Z.set(J,X),ae}function tt(J){g.blockers.delete(J),Z.delete(J)}function qt(J,X){let ae=g.blockers.get(J)||uy;ze(ae.state==="unblocked"&&X.state==="blocked"||ae.state==="blocked"&&X.state==="blocked"||ae.state==="blocked"&&X.state==="proceeding"||ae.state==="blocked"&&X.state==="unblocked"||ae.state==="proceeding"&&X.state==="unblocked","Invalid blocker state transition: "+ae.state+" -> "+X.state),g.blockers.set(J,X),R({blockers:new Map(g.blockers)})}function ki(J){let{currentLocation:X,nextLocation:ae,historyAction:ge}=J;if(Z.size===0)return;Z.size>1&&Pa(!1,"A router only supports one blocker at a time");let ye=Array.from(Z.entries()),[Se,Ce]=ye[ye.length-1],we=g.blockers.get(Se);if(!(we&&we.state==="proceeding")&&Ce({currentLocation:X,nextLocation:ae,historyAction:ge}))return Se}function No(J){let X=[];return re.forEach((ae,ge)=>{(!J||J(ge))&&(ae.cancel(),X.push(ge),re.delete(ge))}),X}function En(J,X,ae){if(f=J,h=X,p=ae||(ge=>ge.key),!_&&g.navigation===Yf){_=!0;let ge=_r(g.location,g.matches);ge!=null&&R({restoreScrollPosition:ge})}return()=>{f=null,h=null,p=null}}function Qn(J,X){if(f&&p&&h){let ae=X.map(ye=>yy(ye,g.loaderData)),ge=p(J,ae)||J.key;f[ge]=h()}}function _r(J,X){if(f&&p&&h){let ae=X.map(Se=>yy(Se,g.loaderData)),ge=p(J,ae)||J.key,ye=f[ge];if(typeof ye=="number")return ye}return null}function Bo(J){n={},o=Ap(J,t,void 0,n)}return P={get basename(){return a},get state(){return g},get routes(){return r},initialize:O,subscribe:U,enableScrollRestoration:En,navigate:M,fetch:Je,revalidate:V,createHref:J=>e.history.createHref(J),encodeLocation:J=>e.history.encodeLocation(J),getFetcher:be,deleteFetcher:de,dispose:Y,getBlocker:Ye,deleteBlocker:tt,_internalFetchControllers:W,_internalActiveDeferreds:re,_internalSetRoutes:Bo},P}function lR(e){return e!=null&&"formData"in e}function Ip(e,t,n,r,o,a,s){let u,c;if(a!=null&&s!=="path"){u=[];for(let p of t)if(u.push(p),p.route.id===a){c=p;break}}else u=t,c=t[t.length-1];let f=N1(o||".",S_(u).map(p=>p.pathnameBase),vl(e.pathname,n)||e.pathname,s==="path");return o==null&&(f.search=e.search,f.hash=e.hash),(o==null||o===""||o===".")&&c&&c.route.index&&!P_(f.search)&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(f.pathname=f.pathname==="/"?n:po([n,f.pathname])),gl(f)}function cy(e,t,n,r){if(!r||!lR(r))return{path:n};if(r.formMethod&&!mR(r.formMethod))return{path:n,error:Nn(405,{method:r.formMethod})};let o;if(r.formData){let u=r.formMethod||"get";if(o={formMethod:e?u.toUpperCase():u.toLowerCase(),formAction:U1(n),formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:r.formData},Cr(o.formMethod))return{path:n,submission:o}}let a=$r(n),s=$1(r.formData);return t&&a.search&&P_(a.search)&&s.append("index",""),a.search="?"+s,{path:gl(a),submission:o}}function uR(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function dy(e,t,n,r,o,a,s,u,c,f,p,h,_){let v=_?Object.values(_)[0]:h?Object.values(h)[0]:void 0,y=e.createURL(t.location),b=e.createURL(o),P=_?Object.keys(_)[0]:void 0,x=uR(n,P).filter((E,T)=>{if(E.route.lazy)return!0;if(E.route.loader==null)return!1;if(cR(t.loaderData,t.matches[T],E)||s.some(D=>D===E.route.id))return!0;let A=t.matches[T],N=E;return fy(E,He({currentUrl:y,currentParams:A.params,nextUrl:b,nextParams:N.params},r,{actionResult:v,defaultShouldRevalidate:a||y.pathname+y.search===b.pathname+b.search||y.search!==b.search||F1(A,N)}))}),S=[];return c.forEach((E,T)=>{if(!n.some(W=>W.route.id===E.routeId))return;let A=oa(f,E.path,p);if(!A){S.push({key:T,routeId:E.routeId,path:E.path,matches:null,match:null,controller:null});return}let N=zp(A,E.path);if(u.includes(T)){S.push({key:T,routeId:E.routeId,path:E.path,matches:A,match:N,controller:new AbortController});return}fy(N,He({currentUrl:y,currentParams:t.matches[t.matches.length-1].params,nextUrl:b,nextParams:n[n.length-1].params},r,{actionResult:v,defaultShouldRevalidate:a}))&&S.push({key:T,routeId:E.routeId,path:E.path,matches:A,match:N,controller:new AbortController})}),[x,S]}function cR(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function F1(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function fy(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function hy(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];ze(o,"No route found in manifest");let a={};for(let s in r){let c=o[s]!==void 0&&s!=="hasErrorBoundary";Pa(!c,'Route "'+o.id+'" has a static property "'+s+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+s+'" will be ignored.')),!c&&!A2.has(s)&&(a[s]=r[s])}Object.assign(o,a),Object.assign(o,He({},t(o),{lazy:void 0}))}async function us(e,t,n,r,o,a,s,u,c,f){u===void 0&&(u=!1),c===void 0&&(c=!1);let p,h,_,v=P=>{let g,x=new Promise((S,E)=>g=E);return _=()=>g(),t.signal.addEventListener("abort",_),Promise.race([P({request:t,params:n.params,context:f}),x])};try{let P=n.route[e];if(n.route.lazy)if(P)h=(await Promise.all([v(P),hy(n.route,a,o)]))[0];else if(await hy(n.route,a,o),P=n.route[e],P)h=await v(P);else if(e==="action"){let g=new URL(t.url),x=g.pathname+g.search;throw Nn(405,{method:t.method,pathname:x,routeId:n.route.id})}else return{type:wt.data,data:void 0};else if(P)h=await v(P);else{let g=new URL(t.url),x=g.pathname+g.search;throw Nn(404,{pathname:x})}ze(h!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(P){p=wt.error,h=P}finally{_&&t.signal.removeEventListener("abort",_)}if(pR(h)){let P=h.status;if(nR.has(P)){let S=h.headers.get("Location");if(ze(S,"Redirects returned/thrown from loaders/actions must have a Location header"),!D1.test(S))S=Ip(new URL(t.url),r.slice(0,r.indexOf(n)+1),s,!0,S);else if(!u){let E=new URL(t.url),T=S.startsWith("//")?new URL(E.protocol+S):new URL(S),A=vl(T.pathname,s)!=null;T.origin===E.origin&&A&&(S=T.pathname+T.search+T.hash)}if(u)throw h.headers.set("Location",S),h;return{type:wt.redirect,status:P,location:S,revalidate:h.headers.get("X-Remix-Revalidate")!==null}}if(c)throw{type:p||wt.data,response:h};let g,x=h.headers.get("Content-Type");return x&&/\bapplication\/json\b/.test(x)?g=await h.json():g=await h.text(),p===wt.error?{type:p,error:new k_(P,h.statusText,g),headers:h.headers}:{type:wt.data,data:g,statusCode:h.status,headers:h.headers}}if(p===wt.error)return{type:p,error:h};if(hR(h)){var y,b;return{type:wt.deferred,deferredData:h,statusCode:(y=h.init)==null?void 0:y.status,headers:((b=h.init)==null?void 0:b.headers)&&new Headers(h.init.headers)}}return{type:wt.data,data:h}}function cs(e,t,n,r){let o=e.createURL(U1(t)).toString(),a={signal:n};if(r&&Cr(r.formMethod)){let{formMethod:s,formEncType:u,formData:c}=r;a.method=s.toUpperCase(),a.body=u==="application/x-www-form-urlencoded"?$1(c):c}return new Request(o,a)}function $1(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function dR(e,t,n,r,o){let a={},s=null,u,c=!1,f={};return n.forEach((p,h)=>{let _=t[h].route.id;if(ze(!fa(p),"Cannot handle redirect results in processLoaderData"),Rs(p)){let v=ia(e,_),y=p.error;r&&(y=Object.values(r)[0],r=void 0),s=s||{},s[v.route.id]==null&&(s[v.route.id]=y),a[_]=void 0,c||(c=!0,u=B1(p.error)?p.error.status:500),p.headers&&(f[_]=p.headers)}else ii(p)?(o.set(_,p.deferredData),a[_]=p.deferredData.data):a[_]=p.data,p.statusCode!=null&&p.statusCode!==200&&!c&&(u=p.statusCode),p.headers&&(f[_]=p.headers)}),r&&(s=r,a[Object.keys(r)[0]]=void 0),{loaderData:a,errors:s,statusCode:u||200,loaderHeaders:f}}function py(e,t,n,r,o,a,s,u){let{loaderData:c,errors:f}=dR(t,n,r,o,u);for(let p=0;p<a.length;p++){let{key:h,match:_,controller:v}=a[p];ze(s!==void 0&&s[p]!==void 0,"Did not find corresponding fetcher result");let y=s[p];if(!(v&&v.signal.aborted))if(Rs(y)){let b=ia(e.matches,_?.route.id);f&&f[b.route.id]||(f=He({},f,{[b.route.id]:y.error})),e.fetchers.delete(h)}else if(fa(y))ze(!1,"Unhandled fetcher revalidation redirect");else if(ii(y))ze(!1,"Unhandled fetcher deferred data");else{let b={state:"idle",data:y.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(h,b)}}return{loaderData:c,errors:f}}function my(e,t,n,r){let o=He({},t);for(let a of n){let s=a.route.id;if(t.hasOwnProperty(s)?t[s]!==void 0&&(o[s]=t[s]):e[s]!==void 0&&a.route.loader&&(o[s]=e[s]),r&&r.hasOwnProperty(s))break}return o}function ia(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function _y(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Nn(e,t){let{pathname:n,routeId:r,method:o,type:a}=t===void 0?{}:t,s="Unknown Server Error",u="Unknown @remix-run/router error";return e===400?(s="Bad Request",o&&n&&r?u="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a==="defer-action"&&(u="defer() is not supported in actions")):e===403?(s="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):e===404?(s="Not Found",u='No route matches URL "'+n+'"'):e===405&&(s="Method Not Allowed",o&&n&&r?u="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(u='Invalid request method "'+o.toUpperCase()+'"')),new k_(e||500,s,new Error(u),!0)}function gy(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(fa(n))return n}}function U1(e){let t=typeof e=="string"?$r(e):e;return gl(He({},t,{hash:""}))}function fR(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function ii(e){return e.type===wt.deferred}function Rs(e){return e.type===wt.error}function fa(e){return(e&&e.type)===wt.redirect}function hR(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function pR(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function mR(e){return tR.has(e.toLowerCase())}function Cr(e){return X2.has(e.toLowerCase())}async function vy(e,t,n,r,o,a){for(let s=0;s<n.length;s++){let u=n[s],c=t[s];if(!c)continue;let f=e.find(h=>h.route.id===c.route.id),p=f!=null&&!F1(f,c)&&(a&&a[c.route.id])!==void 0;if(ii(u)&&(o||p)){let h=r[s];ze(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await W1(u,h,o).then(_=>{_&&(n[s]=_||n[s])})}}}async function W1(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:wt.data,data:e.deferredData.unwrappedData}}catch(o){return{type:wt.error,error:o}}return{type:wt.data,data:e.deferredData.data}}}function P_(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function yy(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function zp(e,t){let n=typeof t=="string"?$r(t).search:t.search;if(e[e.length-1].route.index&&P_(n||""))return e[e.length-1];let r=S_(e);return r[r.length-1]}/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hc(){return hc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hc.apply(this,arguments)}const Ld=k.createContext(null),H1=k.createContext(null),Ad=k.createContext(null),Id=k.createContext(null),Na=k.createContext({outlet:null,matches:[],isDataRoute:!1}),V1=k.createContext(null);function zd(){return k.useContext(Id)!=null}function Z1(){return zd()||ze(!1),k.useContext(Id).location}function q1(e){k.useContext(Ad).static||k.useLayoutEffect(e)}function _R(){let{isDataRoute:e}=k.useContext(Na);return e?OR():gR()}function gR(){zd()||ze(!1);let e=k.useContext(Ld),{basename:t,navigator:n}=k.useContext(Ad),{matches:r}=k.useContext(Na),{pathname:o}=Z1(),a=JSON.stringify(S_(r).map(c=>c.pathnameBase)),s=k.useRef(!1);return q1(()=>{s.current=!0}),k.useCallback(function(c,f){if(f===void 0&&(f={}),!s.current)return;if(typeof c=="number"){n.go(c);return}let p=N1(c,JSON.parse(a),o,f.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:po([t,p.pathname])),(f.replace?n.replace:n.push)(p,f.state,f)},[t,n,a,o,e])}function vR(e,t,n){zd()||ze(!1);let{navigator:r}=k.useContext(Ad),{matches:o}=k.useContext(Na),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let c=Z1(),f;if(t){var p;let b=typeof t=="string"?$r(t):t;u==="/"||(p=b.pathname)!=null&&p.startsWith(u)||ze(!1),f=b}else f=c;let h=f.pathname||"/",_=u==="/"?h:h.slice(u.length)||"/",v=oa(e,{pathname:_}),y=SR(v&&v.map(b=>Object.assign({},b,{params:Object.assign({},s,b.params),pathname:po([u,r.encodeLocation?r.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?u:po([u,r.encodeLocation?r.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),o,n);return t&&y?k.createElement(Id.Provider,{value:{location:hc({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:yt.Pop}},y):y}function yR(){let e=ER(),t=B1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:o},n):null,a)}const bR=k.createElement(yR,null);class xR extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?k.createElement(Na.Provider,{value:this.props.routeContext},k.createElement(V1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wR(e){let{routeContext:t,match:n,children:r}=e,o=k.useContext(Ld);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Na.Provider,{value:t},r)}function SR(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let a=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let u=a.findIndex(c=>c.route.id&&s?.[c.route.id]);u>=0||ze(!1),a=a.slice(0,Math.min(a.length,u+1))}return a.reduceRight((u,c,f)=>{let p=c.route.id?s?.[c.route.id]:null,h=null;n&&(h=c.route.errorElement||bR);let _=t.concat(a.slice(0,f+1)),v=()=>{let y;return p?y=h:c.route.Component?y=k.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=u,k.createElement(wR,{match:c,routeContext:{outlet:u,matches:_,isDataRoute:n!=null},children:y})};return n&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?k.createElement(xR,{location:n.location,revalidation:n.revalidation,component:h,error:p,children:v(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):v()},null)}var Np;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Np||(Np={}));var Xs;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Xs||(Xs={}));function kR(e){let t=k.useContext(Ld);return t||ze(!1),t}function PR(e){let t=k.useContext(H1);return t||ze(!1),t}function CR(e){let t=k.useContext(Na);return t||ze(!1),t}function K1(e){let t=CR(),n=t.matches[t.matches.length-1];return n.route.id||ze(!1),n.route.id}function ER(){var e;let t=k.useContext(V1),n=PR(Xs.UseRouteError),r=K1(Xs.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function OR(){let{router:e}=kR(Np.UseNavigateStable),t=K1(Xs.UseNavigateStable),n=k.useRef(!1);return q1(()=>{n.current=!0}),k.useCallback(function(o,a){a===void 0&&(a={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,hc({fromRouteId:t},a)))},[e,t])}function RR(e){let{fallbackElement:t,router:n}=e,[r,o]=k.useState(n.state);k.useLayoutEffect(()=>n.subscribe(o),[n,o]);let a=k.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:c=>n.navigate(c),push:(c,f,p)=>n.navigate(c,{state:f,preventScrollReset:p?.preventScrollReset}),replace:(c,f,p)=>n.navigate(c,{replace:!0,state:f,preventScrollReset:p?.preventScrollReset})}),[n]),s=n.basename||"/",u=k.useMemo(()=>({router:n,navigator:a,static:!1,basename:s}),[n,a,s]);return k.createElement(k.Fragment,null,k.createElement(Ld.Provider,{value:u},k.createElement(H1.Provider,{value:r},k.createElement(LR,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:a},n.state.initialized?k.createElement(TR,{routes:n.routes,state:r}):t))),null)}function TR(e){let{routes:t,state:n}=e;return vR(t,void 0,n)}function LR(e){let{basename:t="/",children:n=null,location:r,navigationType:o=yt.Pop,navigator:a,static:s=!1}=e;zd()&&ze(!1);let u=t.replace(/^\/*/,"/"),c=k.useMemo(()=>({basename:u,navigator:a,static:s}),[u,a,s]);typeof r=="string"&&(r=$r(r));let{pathname:f="/",search:p="",hash:h="",state:_=null,key:v="default"}=r,y=k.useMemo(()=>{let b=vl(f,u);return b==null?null:{location:{pathname:b,search:p,hash:h,state:_,key:v},navigationType:o}},[u,f,p,h,_,v,o]);return y==null?null:k.createElement(Ad.Provider,{value:c},k.createElement(Id.Provider,{children:n,value:y}))}var by;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(by||(by={}));new Promise(()=>{});function AR(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:k.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:k.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pc(){return pc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pc.apply(this,arguments)}function IR(e,t){return sR({basename:t?.basename,future:pc({},t?.future,{v7_prependBasename:!0}),history:R2({window:t?.window}),hydrationData:t?.hydrationData||zR(),routes:e,mapRouteProperties:AR}).initialize()}function zR(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=pc({},t,{errors:NR(t.errors)})),t}function NR(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&o.__type==="RouteErrorResponse")n[r]=new k_(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){let a=new Error(o.message);a.stack="",n[r]=a}else n[r]=o;return n}var xy;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(xy||(xy={}));var wy;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(wy||(wy={}));function ln(e){return ln=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ln(e)}function BR(e,t){if(ln(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ln(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Q1(e){var t=BR(e,"string");return ln(t)==="symbol"?t:String(t)}function Zn(e,t,n){return t=Q1(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function MR(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];typeof n[0]=="string"&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var Sy={};function Bp(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&Sy[t[0]]||(typeof t[0]=="string"&&(Sy[t[0]]=new Date),MR.apply(void 0,t))}var G1=function(t,n){return function(){if(t.isInitialized)n();else{var r=function o(){setTimeout(function(){t.off("initialized",o)},0),n()};t.on("initialized",r)}}};function ky(e,t,n){e.loadNamespaces(t,G1(e,n))}function Py(e,t,n,r){typeof n=="string"&&(n=[n]),n.forEach(function(o){e.options.ns.indexOf(o)<0&&e.options.ns.push(o)}),e.loadLanguages(t,G1(e,r))}function DR(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.languages[0],o=t.options?t.options.fallbackLng:!1,a=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;var s=function(c,f){var p=t.services.backendConnector.state["".concat(c,"|").concat(f)];return p===-1||p===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!s(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||s(r,e)&&(!o||s(a,e)))}function jR(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!t.languages||!t.languages.length)return Bp("i18n.languages were undefined or empty",t.languages),!0;var r=t.options.ignoreJSONStructure!==void 0;return r?t.hasLoadedNamespace(e,{lng:n.lng,precheck:function(a,s){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!s(a.isLanguageChangingTo,e))return!1}}):DR(e,t,n)}var FR=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,$R={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},UR=function(t){return $R[t]},WR=function(t){return t.replace(FR,UR)};function Cy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Ey(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Cy(Object(n),!0).forEach(function(r){Zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cy(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Mp={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:WR};function HR(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Mp=Ey(Ey({},Mp),e)}function VR(){return Mp}var J1;function ZR(e){J1=e}function qR(){return J1}function qn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Oy(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Q1(r.key),r)}}function Kn(e,t,n){return t&&Oy(e.prototype,t),n&&Oy(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var KR={type:"3rdParty",init:function(t){HR(t.options.react),ZR(t)}},QR=k.createContext(),GR=function(){function e(){qn(this,e),this.usedNamespaces={}}return Kn(e,[{key:"addUsedNamespaces",value:function(n){var r=this;n.forEach(function(o){r.usedNamespaces[o]||(r.usedNamespaces[o]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function Y1(e){if(Array.isArray(e))return e}function JR(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,a,s,u=[],c=!0,f=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(p){f=!0,o=p}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(f)throw o}}return u}}function Ry(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function X1(e,t){if(e){if(typeof e=="string")return Ry(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ry(e,t)}}function eS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function YR(e,t){return Y1(e)||JR(e,t)||X1(e,t)||eS()}function Ty(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Xf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ty(Object(n),!0).forEach(function(r){Zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ty(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var XR=function(t,n){var r=k.useRef();return k.useEffect(function(){r.current=n?r.current:t},[t,n]),r.current};function yl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.i18n,r=k.useContext(QR)||{},o=r.i18n,a=r.defaultNS,s=n||o||qR();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new GR),!s){Bp("You will need to pass in an i18next instance by using initReactI18next");var u=function(W,B){return typeof B=="string"?B:B&&ln(B)==="object"&&typeof B.defaultValue=="string"?B.defaultValue:Array.isArray(W)?W[W.length-1]:W},c=[u,{},!1];return c.t=u,c.i18n={},c.ready=!1,c}s.options.react&&s.options.react.wait!==void 0&&Bp("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var f=Xf(Xf(Xf({},VR()),s.options.react),t),p=f.useSuspense,h=f.keyPrefix,_=e||a||s.options&&s.options.defaultNS;_=typeof _=="string"?[_]:_||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(_);var v=(s.isInitialized||s.initializedStoreOnce)&&_.every(function(D){return jR(D,s,f)});function y(){return s.getFixedT(t.lng||null,f.nsMode==="fallback"?_:_[0],h)}var b=k.useState(y),P=YR(b,2),g=P[0],x=P[1],S=_.join();t.lng&&(S="".concat(t.lng).concat(S));var E=XR(S),T=k.useRef(!0);k.useEffect(function(){var D=f.bindI18n,W=f.bindI18nStore;T.current=!0,!v&&!p&&(t.lng?Py(s,t.lng,_,function(){T.current&&x(y)}):ky(s,_,function(){T.current&&x(y)})),v&&E&&E!==S&&T.current&&x(y);function B(){T.current&&x(y)}return D&&s&&s.on(D,B),W&&s&&s.store.on(W,B),function(){T.current=!1,D&&s&&D.split(" ").forEach(function(H){return s.off(H,B)}),W&&s&&W.split(" ").forEach(function(H){return s.store.off(H,B)})}},[s,S]);var A=k.useRef(!0);k.useEffect(function(){T.current&&!A.current&&x(y),A.current=!1},[s,h]);var N=[g,s,v];if(N.t=g,N.i18n=s,N.ready=v,v||!v&&!p)return N;throw new Promise(function(D){t.lng?Py(s,t.lng,_,function(){return D()}):ky(s,_,function(){return D()})})}function mc(e,t){return mc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},mc(e,t)}function bl(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,mc(e,t)}var xl=function(){function e(){this.listeners=[]}var t=e.prototype;return t.subscribe=function(r){var o=this,a=r||function(){};return this.listeners.push(a),this.onSubscribe(),function(){o.listeners=o.listeners.filter(function(s){return s!==a}),o.onUnsubscribe()}},t.hasListeners=function(){return this.listeners.length>0},t.onSubscribe=function(){},t.onUnsubscribe=function(){},e}(),_c=typeof window>"u";function jt(){}function eT(e,t){return typeof e=="function"?e(t):e}function Dp(e){return typeof e=="number"&&e>=0&&e!==1/0}function gc(e){return Array.isArray(e)?e:[e]}function tS(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Ou(e,t,n){return Nd(e)?typeof t=="function"?Ve({},n,{queryKey:e,queryFn:t}):Ve({},t,{queryKey:e}):e}function Jr(e,t,n){return Nd(e)?[Ve({},t,{queryKey:e}),n]:[e||{},t]}function tT(e,t){if(e===!0&&t===!0||e==null&&t==null)return"all";if(e===!1&&t===!1)return"none";var n=e??!t;return n?"active":"inactive"}function Ly(e,t){var n=e.active,r=e.exact,o=e.fetching,a=e.inactive,s=e.predicate,u=e.queryKey,c=e.stale;if(Nd(u)){if(r){if(t.queryHash!==C_(u,t.options))return!1}else if(!vc(t.queryKey,u))return!1}var f=tT(n,a);if(f==="none")return!1;if(f!=="all"){var p=t.isActive();if(f==="active"&&!p||f==="inactive"&&p)return!1}return!(typeof c=="boolean"&&t.isStale()!==c||typeof o=="boolean"&&t.isFetching()!==o||s&&!s(t))}function Ay(e,t){var n=e.exact,r=e.fetching,o=e.predicate,a=e.mutationKey;if(Nd(a)){if(!t.options.mutationKey)return!1;if(n){if(ai(t.options.mutationKey)!==ai(a))return!1}else if(!vc(t.options.mutationKey,a))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||o&&!o(t))}function C_(e,t){var n=t?.queryKeyHashFn||ai;return n(e)}function ai(e){var t=gc(e);return nT(t)}function nT(e){return JSON.stringify(e,function(t,n){return jp(n)?Object.keys(n).sort().reduce(function(r,o){return r[o]=n[o],r},{}):n})}function vc(e,t){return nS(gc(e),gc(t))}function nS(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(function(n){return!nS(e[n],t[n])}):!1}function yc(e,t){if(e===t)return e;var n=Array.isArray(e)&&Array.isArray(t);if(n||jp(e)&&jp(t)){for(var r=n?e.length:Object.keys(e).length,o=n?t:Object.keys(t),a=o.length,s=n?[]:{},u=0,c=0;c<a;c++){var f=n?c:o[c];s[f]=yc(e[f],t[f]),s[f]===e[f]&&u++}return r===a&&u===r?e:s}return t}function rT(e,t){if(e&&!t||t&&!e)return!1;for(var n in e)if(e[n]!==t[n])return!1;return!0}function jp(e){if(!Iy(e))return!1;var t=e.constructor;if(typeof t>"u")return!0;var n=t.prototype;return!(!Iy(n)||!n.hasOwnProperty("isPrototypeOf"))}function Iy(e){return Object.prototype.toString.call(e)==="[object Object]"}function Nd(e){return typeof e=="string"||Array.isArray(e)}function oT(e){return new Promise(function(t){setTimeout(t,e)})}function zy(e){Promise.resolve().then(e).catch(function(t){return setTimeout(function(){throw t})})}function rS(){if(typeof AbortController=="function")return new AbortController}var iT=function(e){bl(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(o){var a;if(!_c&&((a=window)!=null&&a.addEventListener)){var s=function(){return o()};return window.addEventListener("visibilitychange",s,!1),window.addEventListener("focus",s,!1),function(){window.removeEventListener("visibilitychange",s),window.removeEventListener("focus",s)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var o;(o=this.cleanup)==null||o.call(this),this.cleanup=void 0}},n.setEventListener=function(o){var a,s=this;this.setup=o,(a=this.cleanup)==null||a.call(this),this.cleanup=o(function(u){typeof u=="boolean"?s.setFocused(u):s.onFocus()})},n.setFocused=function(o){this.focused=o,o&&this.onFocus()},n.onFocus=function(){this.listeners.forEach(function(o){o()})},n.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},t}(xl),Ts=new iT,aT=function(e){bl(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(o){var a;if(!_c&&((a=window)!=null&&a.addEventListener)){var s=function(){return o()};return window.addEventListener("online",s,!1),window.addEventListener("offline",s,!1),function(){window.removeEventListener("online",s),window.removeEventListener("offline",s)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var o;(o=this.cleanup)==null||o.call(this),this.cleanup=void 0}},n.setEventListener=function(o){var a,s=this;this.setup=o,(a=this.cleanup)==null||a.call(this),this.cleanup=o(function(u){typeof u=="boolean"?s.setOnline(u):s.onOnline()})},n.setOnline=function(o){this.online=o,o&&this.onOnline()},n.onOnline=function(){this.listeners.forEach(function(o){o()})},n.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},t}(xl),Ru=new aT;function sT(e){return Math.min(1e3*Math.pow(2,e),3e4)}function bc(e){return typeof e?.cancel=="function"}var oS=function(t){this.revert=t?.revert,this.silent=t?.silent};function Tu(e){return e instanceof oS}var iS=function(t){var n=this,r=!1,o,a,s,u;this.abort=t.abort,this.cancel=function(_){return o?.(_)},this.cancelRetry=function(){r=!0},this.continueRetry=function(){r=!1},this.continue=function(){return a?.()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(_,v){s=_,u=v});var c=function(v){n.isResolved||(n.isResolved=!0,t.onSuccess==null||t.onSuccess(v),a?.(),s(v))},f=function(v){n.isResolved||(n.isResolved=!0,t.onError==null||t.onError(v),a?.(),u(v))},p=function(){return new Promise(function(v){a=v,n.isPaused=!0,t.onPause==null||t.onPause()}).then(function(){a=void 0,n.isPaused=!1,t.onContinue==null||t.onContinue()})},h=function _(){if(!n.isResolved){var v;try{v=t.fn()}catch(y){v=Promise.reject(y)}o=function(b){if(!n.isResolved&&(f(new oS(b)),n.abort==null||n.abort(),bc(v)))try{v.cancel()}catch{}},n.isTransportCancelable=bc(v),Promise.resolve(v).then(c).catch(function(y){var b,P;if(!n.isResolved){var g=(b=t.retry)!=null?b:3,x=(P=t.retryDelay)!=null?P:sT,S=typeof x=="function"?x(n.failureCount,y):x,E=g===!0||typeof g=="number"&&n.failureCount<g||typeof g=="function"&&g(n.failureCount,y);if(r||!E){f(y);return}n.failureCount++,t.onFail==null||t.onFail(n.failureCount,y),oT(S).then(function(){if(!Ts.isFocused()||!Ru.isOnline())return p()}).then(function(){r?f(y):_()})}})}};h()},lT=function(){function e(){this.queue=[],this.transactions=0,this.notifyFn=function(n){n()},this.batchNotifyFn=function(n){n()}}var t=e.prototype;return t.batch=function(r){var o;this.transactions++;try{o=r()}finally{this.transactions--,this.transactions||this.flush()}return o},t.schedule=function(r){var o=this;this.transactions?this.queue.push(r):zy(function(){o.notifyFn(r)})},t.batchCalls=function(r){var o=this;return function(){for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];o.schedule(function(){r.apply(void 0,s)})}},t.flush=function(){var r=this,o=this.queue;this.queue=[],o.length&&zy(function(){r.batchNotifyFn(function(){o.forEach(function(a){r.notifyFn(a)})})})},t.setNotifyFunction=function(r){this.notifyFn=r},t.setBatchNotifyFunction=function(r){this.batchNotifyFn=r},e}(),dt=new lT,aS=console;function xc(){return aS}function uT(e){aS=e}var cT=function(){function e(n){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.cache=n.cache,this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.initialState=n.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=n.meta,this.scheduleGc()}var t=e.prototype;return t.setOptions=function(r){var o;this.options=Ve({},this.defaultOptions,r),this.meta=r?.meta,this.cacheTime=Math.max(this.cacheTime||0,(o=this.options.cacheTime)!=null?o:5*60*1e3)},t.setDefaultOptions=function(r){this.defaultOptions=r},t.scheduleGc=function(){var r=this;this.clearGcTimeout(),Dp(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){r.optionalRemove()},this.cacheTime))},t.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},t.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},t.setData=function(r,o){var a,s,u=this.state.data,c=eT(r,u);return(a=(s=this.options).isDataEqual)!=null&&a.call(s,u,c)?c=u:this.options.structuralSharing!==!1&&(c=yc(u,c)),this.dispatch({data:c,type:"success",dataUpdatedAt:o?.updatedAt}),c},t.setState=function(r,o){this.dispatch({type:"setState",state:r,setStateOptions:o})},t.cancel=function(r){var o,a=this.promise;return(o=this.retryer)==null||o.cancel(r),a?a.then(jt).catch(jt):Promise.resolve()},t.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},t.reset=function(){this.destroy(),this.setState(this.initialState)},t.isActive=function(){return this.observers.some(function(r){return r.options.enabled!==!1})},t.isFetching=function(){return this.state.isFetching},t.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(r){return r.getCurrentResult().isStale})},t.isStaleByTime=function(r){return r===void 0&&(r=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!tS(this.state.dataUpdatedAt,r)},t.onFocus=function(){var r,o=this.observers.find(function(a){return a.shouldFetchOnWindowFocus()});o&&o.refetch(),(r=this.retryer)==null||r.continue()},t.onOnline=function(){var r,o=this.observers.find(function(a){return a.shouldFetchOnReconnect()});o&&o.refetch(),(r=this.retryer)==null||r.continue()},t.addObserver=function(r){this.observers.indexOf(r)===-1&&(this.observers.push(r),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:r}))},t.removeObserver=function(r){this.observers.indexOf(r)!==-1&&(this.observers=this.observers.filter(function(o){return o!==r}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:r}))},t.getObserversCount=function(){return this.observers.length},t.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},t.fetch=function(r,o){var a=this,s,u,c;if(this.state.isFetching){if(this.state.dataUpdatedAt&&o?.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var f;return(f=this.retryer)==null||f.continueRetry(),this.promise}}if(r&&this.setOptions(r),!this.options.queryFn){var p=this.observers.find(function(x){return x.options.queryFn});p&&this.setOptions(p.options)}var h=gc(this.queryKey),_=rS(),v={queryKey:h,pageParam:void 0,meta:this.meta};Object.defineProperty(v,"signal",{enumerable:!0,get:function(){if(_)return a.abortSignalConsumed=!0,_.signal}});var y=function(){return a.options.queryFn?(a.abortSignalConsumed=!1,a.options.queryFn(v)):Promise.reject("Missing queryFn")},b={fetchOptions:o,options:this.options,queryKey:h,state:this.state,fetchFn:y,meta:this.meta};if((s=this.options.behavior)!=null&&s.onFetch){var P;(P=this.options.behavior)==null||P.onFetch(b)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((u=b.fetchOptions)==null?void 0:u.meta)){var g;this.dispatch({type:"fetch",meta:(g=b.fetchOptions)==null?void 0:g.meta})}return this.retryer=new iS({fn:b.fetchFn,abort:_==null||(c=_.abort)==null?void 0:c.bind(_),onSuccess:function(S){a.setData(S),a.cache.config.onSuccess==null||a.cache.config.onSuccess(S,a),a.cacheTime===0&&a.optionalRemove()},onError:function(S){Tu(S)&&S.silent||a.dispatch({type:"error",error:S}),Tu(S)||(a.cache.config.onError==null||a.cache.config.onError(S,a),xc().error(S)),a.cacheTime===0&&a.optionalRemove()},onFail:function(){a.dispatch({type:"failed"})},onPause:function(){a.dispatch({type:"pause"})},onContinue:function(){a.dispatch({type:"continue"})},retry:b.options.retry,retryDelay:b.options.retryDelay}),this.promise=this.retryer.promise,this.promise},t.dispatch=function(r){var o=this;this.state=this.reducer(this.state,r),dt.batch(function(){o.observers.forEach(function(a){a.onQueryUpdate(r)}),o.cache.notify({query:o,type:"queryUpdated",action:r})})},t.getDefaultState=function(r){var o=typeof r.initialData=="function"?r.initialData():r.initialData,a=typeof r.initialData<"u",s=a?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0,u=typeof o<"u";return{data:o,dataUpdateCount:0,dataUpdatedAt:u?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:u?"success":"idle"}},t.reducer=function(r,o){var a,s;switch(o.type){case"failed":return Ve({},r,{fetchFailureCount:r.fetchFailureCount+1});case"pause":return Ve({},r,{isPaused:!0});case"continue":return Ve({},r,{isPaused:!1});case"fetch":return Ve({},r,{fetchFailureCount:0,fetchMeta:(a=o.meta)!=null?a:null,isFetching:!0,isPaused:!1},!r.dataUpdatedAt&&{error:null,status:"loading"});case"success":return Ve({},r,{data:o.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(s=o.dataUpdatedAt)!=null?s:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var u=o.error;return Tu(u)&&u.revert&&this.revertState?Ve({},this.revertState):Ve({},r,{error:u,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return Ve({},r,{isInvalidated:!0});case"setState":return Ve({},r,o.state);default:return r}},e}(),dT=function(e){bl(t,e);function t(r){var o;return o=e.call(this)||this,o.config=r||{},o.queries=[],o.queriesMap={},o}var n=t.prototype;return n.build=function(o,a,s){var u,c=a.queryKey,f=(u=a.queryHash)!=null?u:C_(c,a),p=this.get(f);return p||(p=new cT({cache:this,queryKey:c,queryHash:f,options:o.defaultQueryOptions(a),state:s,defaultOptions:o.getQueryDefaults(c),meta:a.meta}),this.add(p)),p},n.add=function(o){this.queriesMap[o.queryHash]||(this.queriesMap[o.queryHash]=o,this.queries.push(o),this.notify({type:"queryAdded",query:o}))},n.remove=function(o){var a=this.queriesMap[o.queryHash];a&&(o.destroy(),this.queries=this.queries.filter(function(s){return s!==o}),a===o&&delete this.queriesMap[o.queryHash],this.notify({type:"queryRemoved",query:o}))},n.clear=function(){var o=this;dt.batch(function(){o.queries.forEach(function(a){o.remove(a)})})},n.get=function(o){return this.queriesMap[o]},n.getAll=function(){return this.queries},n.find=function(o,a){var s=Jr(o,a),u=s[0];return typeof u.exact>"u"&&(u.exact=!0),this.queries.find(function(c){return Ly(u,c)})},n.findAll=function(o,a){var s=Jr(o,a),u=s[0];return Object.keys(u).length>0?this.queries.filter(function(c){return Ly(u,c)}):this.queries},n.notify=function(o){var a=this;dt.batch(function(){a.listeners.forEach(function(s){s(o)})})},n.onFocus=function(){var o=this;dt.batch(function(){o.queries.forEach(function(a){a.onFocus()})})},n.onOnline=function(){var o=this;dt.batch(function(){o.queries.forEach(function(a){a.onOnline()})})},t}(xl),fT=function(){function e(n){this.options=Ve({},n.defaultOptions,n.options),this.mutationId=n.mutationId,this.mutationCache=n.mutationCache,this.observers=[],this.state=n.state||hT(),this.meta=n.meta}var t=e.prototype;return t.setState=function(r){this.dispatch({type:"setState",state:r})},t.addObserver=function(r){this.observers.indexOf(r)===-1&&this.observers.push(r)},t.removeObserver=function(r){this.observers=this.observers.filter(function(o){return o!==r})},t.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(jt).catch(jt)):Promise.resolve()},t.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},t.execute=function(){var r=this,o,a=this.state.status==="loading",s=Promise.resolve();return a||(this.dispatch({type:"loading",variables:this.options.variables}),s=s.then(function(){r.mutationCache.config.onMutate==null||r.mutationCache.config.onMutate(r.state.variables,r)}).then(function(){return r.options.onMutate==null?void 0:r.options.onMutate(r.state.variables)}).then(function(u){u!==r.state.context&&r.dispatch({type:"loading",context:u,variables:r.state.variables})})),s.then(function(){return r.executeMutation()}).then(function(u){o=u,r.mutationCache.config.onSuccess==null||r.mutationCache.config.onSuccess(o,r.state.variables,r.state.context,r)}).then(function(){return r.options.onSuccess==null?void 0:r.options.onSuccess(o,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(o,null,r.state.variables,r.state.context)}).then(function(){return r.dispatch({type:"success",data:o}),o}).catch(function(u){return r.mutationCache.config.onError==null||r.mutationCache.config.onError(u,r.state.variables,r.state.context,r),xc().error(u),Promise.resolve().then(function(){return r.options.onError==null?void 0:r.options.onError(u,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(void 0,u,r.state.variables,r.state.context)}).then(function(){throw r.dispatch({type:"error",error:u}),u})})},t.executeMutation=function(){var r=this,o;return this.retryer=new iS({fn:function(){return r.options.mutationFn?r.options.mutationFn(r.state.variables):Promise.reject("No mutationFn found")},onFail:function(){r.dispatch({type:"failed"})},onPause:function(){r.dispatch({type:"pause"})},onContinue:function(){r.dispatch({type:"continue"})},retry:(o=this.options.retry)!=null?o:0,retryDelay:this.options.retryDelay}),this.retryer.promise},t.dispatch=function(r){var o=this;this.state=pT(this.state,r),dt.batch(function(){o.observers.forEach(function(a){a.onMutationUpdate(r)}),o.mutationCache.notify(o)})},e}();function hT(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function pT(e,t){switch(t.type){case"failed":return Ve({},e,{failureCount:e.failureCount+1});case"pause":return Ve({},e,{isPaused:!0});case"continue":return Ve({},e,{isPaused:!1});case"loading":return Ve({},e,{context:t.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:t.variables});case"success":return Ve({},e,{data:t.data,error:null,status:"success",isPaused:!1});case"error":return Ve({},e,{data:void 0,error:t.error,failureCount:e.failureCount+1,isPaused:!1,status:"error"});case"setState":return Ve({},e,t.state);default:return e}}var mT=function(e){bl(t,e);function t(r){var o;return o=e.call(this)||this,o.config=r||{},o.mutations=[],o.mutationId=0,o}var n=t.prototype;return n.build=function(o,a,s){var u=new fT({mutationCache:this,mutationId:++this.mutationId,options:o.defaultMutationOptions(a),state:s,defaultOptions:a.mutationKey?o.getMutationDefaults(a.mutationKey):void 0,meta:a.meta});return this.add(u),u},n.add=function(o){this.mutations.push(o),this.notify(o)},n.remove=function(o){this.mutations=this.mutations.filter(function(a){return a!==o}),o.cancel(),this.notify(o)},n.clear=function(){var o=this;dt.batch(function(){o.mutations.forEach(function(a){o.remove(a)})})},n.getAll=function(){return this.mutations},n.find=function(o){return typeof o.exact>"u"&&(o.exact=!0),this.mutations.find(function(a){return Ay(o,a)})},n.findAll=function(o){return this.mutations.filter(function(a){return Ay(o,a)})},n.notify=function(o){var a=this;dt.batch(function(){a.listeners.forEach(function(s){s(o)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var o=this.mutations.filter(function(a){return a.state.isPaused});return dt.batch(function(){return o.reduce(function(a,s){return a.then(function(){return s.continue().catch(jt)})},Promise.resolve())})},t}(xl);function _T(){return{onFetch:function(t){t.fetchFn=function(){var n,r,o,a,s,u,c=(n=t.fetchOptions)==null||(r=n.meta)==null?void 0:r.refetchPage,f=(o=t.fetchOptions)==null||(a=o.meta)==null?void 0:a.fetchMore,p=f?.pageParam,h=f?.direction==="forward",_=f?.direction==="backward",v=((s=t.state.data)==null?void 0:s.pages)||[],y=((u=t.state.data)==null?void 0:u.pageParams)||[],b=rS(),P=b?.signal,g=y,x=!1,S=t.options.queryFn||function(){return Promise.reject("Missing queryFn")},E=function($,re,Z,se){return g=se?[re].concat(g):[].concat(g,[re]),se?[Z].concat($):[].concat($,[Z])},T=function($,re,Z,se){if(x)return Promise.reject("Cancelled");if(typeof Z>"u"&&!re&&$.length)return Promise.resolve($);var O={queryKey:t.queryKey,signal:P,pageParam:Z,meta:t.meta},Y=S(O),U=Promise.resolve(Y).then(function(z){return E($,Z,z,se)});if(bc(Y)){var R=U;R.cancel=Y.cancel}return U},A;if(!v.length)A=T([]);else if(h){var N=typeof p<"u",D=N?p:Ny(t.options,v);A=T(v,N,D)}else if(_){var W=typeof p<"u",B=W?p:gT(t.options,v);A=T(v,W,B,!0)}else(function(){g=[];var q=typeof t.options.getNextPageParam>"u",$=c&&v[0]?c(v[0],0,v):!0;A=$?T([],q,y[0]):Promise.resolve(E([],y[0],v[0]));for(var re=function(O){A=A.then(function(Y){var U=c&&v[O]?c(v[O],O,v):!0;if(U){var R=q?y[O]:Ny(t.options,Y);return T(Y,q,R)}return Promise.resolve(E(Y,y[O],v[O]))})},Z=1;Z<v.length;Z++)re(Z)})();var H=A.then(function(q){return{pages:q,pageParams:g}}),G=H;return G.cancel=function(){x=!0,b?.abort(),bc(A)&&A.cancel()},H}}}}function Ny(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function gT(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}var vT=function(){function e(n){n===void 0&&(n={}),this.queryCache=n.queryCache||new dT,this.mutationCache=n.mutationCache||new mT,this.defaultOptions=n.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var t=e.prototype;return t.mount=function(){var r=this;this.unsubscribeFocus=Ts.subscribe(function(){Ts.isFocused()&&Ru.isOnline()&&(r.mutationCache.onFocus(),r.queryCache.onFocus())}),this.unsubscribeOnline=Ru.subscribe(function(){Ts.isFocused()&&Ru.isOnline()&&(r.mutationCache.onOnline(),r.queryCache.onOnline())})},t.unmount=function(){var r,o;(r=this.unsubscribeFocus)==null||r.call(this),(o=this.unsubscribeOnline)==null||o.call(this)},t.isFetching=function(r,o){var a=Jr(r,o),s=a[0];return s.fetching=!0,this.queryCache.findAll(s).length},t.isMutating=function(r){return this.mutationCache.findAll(Ve({},r,{fetching:!0})).length},t.getQueryData=function(r,o){var a;return(a=this.queryCache.find(r,o))==null?void 0:a.state.data},t.getQueriesData=function(r){return this.getQueryCache().findAll(r).map(function(o){var a=o.queryKey,s=o.state,u=s.data;return[a,u]})},t.setQueryData=function(r,o,a){var s=Ou(r),u=this.defaultQueryOptions(s);return this.queryCache.build(this,u).setData(o,a)},t.setQueriesData=function(r,o,a){var s=this;return dt.batch(function(){return s.getQueryCache().findAll(r).map(function(u){var c=u.queryKey;return[c,s.setQueryData(c,o,a)]})})},t.getQueryState=function(r,o){var a;return(a=this.queryCache.find(r,o))==null?void 0:a.state},t.removeQueries=function(r,o){var a=Jr(r,o),s=a[0],u=this.queryCache;dt.batch(function(){u.findAll(s).forEach(function(c){u.remove(c)})})},t.resetQueries=function(r,o,a){var s=this,u=Jr(r,o,a),c=u[0],f=u[1],p=this.queryCache,h=Ve({},c,{active:!0});return dt.batch(function(){return p.findAll(c).forEach(function(_){_.reset()}),s.refetchQueries(h,f)})},t.cancelQueries=function(r,o,a){var s=this,u=Jr(r,o,a),c=u[0],f=u[1],p=f===void 0?{}:f;typeof p.revert>"u"&&(p.revert=!0);var h=dt.batch(function(){return s.queryCache.findAll(c).map(function(_){return _.cancel(p)})});return Promise.all(h).then(jt).catch(jt)},t.invalidateQueries=function(r,o,a){var s,u,c,f=this,p=Jr(r,o,a),h=p[0],_=p[1],v=Ve({},h,{active:(s=(u=h.refetchActive)!=null?u:h.active)!=null?s:!0,inactive:(c=h.refetchInactive)!=null?c:!1});return dt.batch(function(){return f.queryCache.findAll(h).forEach(function(y){y.invalidate()}),f.refetchQueries(v,_)})},t.refetchQueries=function(r,o,a){var s=this,u=Jr(r,o,a),c=u[0],f=u[1],p=dt.batch(function(){return s.queryCache.findAll(c).map(function(_){return _.fetch(void 0,Ve({},f,{meta:{refetchPage:c?.refetchPage}}))})}),h=Promise.all(p).then(jt);return f?.throwOnError||(h=h.catch(jt)),h},t.fetchQuery=function(r,o,a){var s=Ou(r,o,a),u=this.defaultQueryOptions(s);typeof u.retry>"u"&&(u.retry=!1);var c=this.queryCache.build(this,u);return c.isStaleByTime(u.staleTime)?c.fetch(u):Promise.resolve(c.state.data)},t.prefetchQuery=function(r,o,a){return this.fetchQuery(r,o,a).then(jt).catch(jt)},t.fetchInfiniteQuery=function(r,o,a){var s=Ou(r,o,a);return s.behavior=_T(),this.fetchQuery(s)},t.prefetchInfiniteQuery=function(r,o,a){return this.fetchInfiniteQuery(r,o,a).then(jt).catch(jt)},t.cancelMutations=function(){var r=this,o=dt.batch(function(){return r.mutationCache.getAll().map(function(a){return a.cancel()})});return Promise.all(o).then(jt).catch(jt)},t.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},t.executeMutation=function(r){return this.mutationCache.build(this,r).execute()},t.getQueryCache=function(){return this.queryCache},t.getMutationCache=function(){return this.mutationCache},t.getDefaultOptions=function(){return this.defaultOptions},t.setDefaultOptions=function(r){this.defaultOptions=r},t.setQueryDefaults=function(r,o){var a=this.queryDefaults.find(function(s){return ai(r)===ai(s.queryKey)});a?a.defaultOptions=o:this.queryDefaults.push({queryKey:r,defaultOptions:o})},t.getQueryDefaults=function(r){var o;return r?(o=this.queryDefaults.find(function(a){return vc(r,a.queryKey)}))==null?void 0:o.defaultOptions:void 0},t.setMutationDefaults=function(r,o){var a=this.mutationDefaults.find(function(s){return ai(r)===ai(s.mutationKey)});a?a.defaultOptions=o:this.mutationDefaults.push({mutationKey:r,defaultOptions:o})},t.getMutationDefaults=function(r){var o;return r?(o=this.mutationDefaults.find(function(a){return vc(r,a.mutationKey)}))==null?void 0:o.defaultOptions:void 0},t.defaultQueryOptions=function(r){if(r?._defaulted)return r;var o=Ve({},this.defaultOptions.queries,this.getQueryDefaults(r?.queryKey),r,{_defaulted:!0});return!o.queryHash&&o.queryKey&&(o.queryHash=C_(o.queryKey,o)),o},t.defaultQueryObserverOptions=function(r){return this.defaultQueryOptions(r)},t.defaultMutationOptions=function(r){return r?._defaulted?r:Ve({},this.defaultOptions.mutations,this.getMutationDefaults(r?.mutationKey),r,{_defaulted:!0})},t.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},e}(),yT=function(e){bl(t,e);function t(r,o){var a;return a=e.call(this)||this,a.client=r,a.options=o,a.trackedProps=[],a.selectError=null,a.bindMethods(),a.setOptions(o),a}var n=t.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),By(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return Fp(this.currentQuery,this.options,this.options.refetchOnReconnect)},n.shouldFetchOnWindowFocus=function(){return Fp(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(o,a){var s=this.options,u=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(o),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.updateQuery();var c=this.hasListeners();c&&My(this.currentQuery,u,this.options,s)&&this.executeFetch(),this.updateResult(a),c&&(this.currentQuery!==u||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.updateStaleTimeout();var f=this.computeRefetchInterval();c&&(this.currentQuery!==u||this.options.enabled!==s.enabled||f!==this.currentRefetchInterval)&&this.updateRefetchInterval(f)},n.getOptimisticResult=function(o){var a=this.client.defaultQueryObserverOptions(o),s=this.client.getQueryCache().build(this.client,a);return this.createResult(s,a)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(o,a){var s=this,u={},c=function(p){s.trackedProps.includes(p)||s.trackedProps.push(p)};return Object.keys(o).forEach(function(f){Object.defineProperty(u,f,{configurable:!1,enumerable:!0,get:function(){return c(f),o[f]}})}),(a.useErrorBoundary||a.suspense)&&c("error"),u},n.getNextResult=function(o){var a=this;return new Promise(function(s,u){var c=a.subscribe(function(f){f.isFetching||(c(),f.isError&&o?.throwOnError?u(f.error):s(f))})})},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(o){return this.fetch(Ve({},o,{meta:{refetchPage:o?.refetchPage}}))},n.fetchOptimistic=function(o){var a=this,s=this.client.defaultQueryObserverOptions(o),u=this.client.getQueryCache().build(this.client,s);return u.fetch().then(function(){return a.createResult(u,s)})},n.fetch=function(o){var a=this;return this.executeFetch(o).then(function(){return a.updateResult(),a.currentResult})},n.executeFetch=function(o){this.updateQuery();var a=this.currentQuery.fetch(this.options,o);return o?.throwOnError||(a=a.catch(jt)),a},n.updateStaleTimeout=function(){var o=this;if(this.clearStaleTimeout(),!(_c||this.currentResult.isStale||!Dp(this.options.staleTime))){var a=tS(this.currentResult.dataUpdatedAt,this.options.staleTime),s=a+1;this.staleTimeoutId=setTimeout(function(){o.currentResult.isStale||o.updateResult()},s)}},n.computeRefetchInterval=function(){var o;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(o=this.options.refetchInterval)!=null?o:!1},n.updateRefetchInterval=function(o){var a=this;this.clearRefetchInterval(),this.currentRefetchInterval=o,!(_c||this.options.enabled===!1||!Dp(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(a.options.refetchIntervalInBackground||Ts.isFocused())&&a.executeFetch()},this.currentRefetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},n.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},n.createResult=function(o,a){var s=this.currentQuery,u=this.options,c=this.currentResult,f=this.currentResultState,p=this.currentResultOptions,h=o!==s,_=h?o.state:this.currentQueryInitialState,v=h?this.currentResult:this.previousQueryResult,y=o.state,b=y.dataUpdatedAt,P=y.error,g=y.errorUpdatedAt,x=y.isFetching,S=y.status,E=!1,T=!1,A;if(a.optimisticResults){var N=this.hasListeners(),D=!N&&By(o,a),W=N&&My(o,s,a,u);(D||W)&&(x=!0,b||(S="loading"))}if(a.keepPreviousData&&!y.dataUpdateCount&&v?.isSuccess&&S!=="error")A=v.data,b=v.dataUpdatedAt,S=v.status,E=!0;else if(a.select&&typeof y.data<"u")if(c&&y.data===f?.data&&a.select===this.selectFn)A=this.selectResult;else try{this.selectFn=a.select,A=a.select(y.data),a.structuralSharing!==!1&&(A=yc(c?.data,A)),this.selectResult=A,this.selectError=null}catch(G){xc().error(G),this.selectError=G}else A=y.data;if(typeof a.placeholderData<"u"&&typeof A>"u"&&(S==="loading"||S==="idle")){var B;if(c?.isPlaceholderData&&a.placeholderData===p?.placeholderData)B=c.data;else if(B=typeof a.placeholderData=="function"?a.placeholderData():a.placeholderData,a.select&&typeof B<"u")try{B=a.select(B),a.structuralSharing!==!1&&(B=yc(c?.data,B)),this.selectError=null}catch(G){xc().error(G),this.selectError=G}typeof B<"u"&&(S="success",A=B,T=!0)}this.selectError&&(P=this.selectError,A=this.selectResult,g=Date.now(),S="error");var H={status:S,isLoading:S==="loading",isSuccess:S==="success",isError:S==="error",isIdle:S==="idle",data:A,dataUpdatedAt:b,error:P,errorUpdatedAt:g,failureCount:y.fetchFailureCount,errorUpdateCount:y.errorUpdateCount,isFetched:y.dataUpdateCount>0||y.errorUpdateCount>0,isFetchedAfterMount:y.dataUpdateCount>_.dataUpdateCount||y.errorUpdateCount>_.errorUpdateCount,isFetching:x,isRefetching:x&&S!=="loading",isLoadingError:S==="error"&&y.dataUpdatedAt===0,isPlaceholderData:T,isPreviousData:E,isRefetchError:S==="error"&&y.dataUpdatedAt!==0,isStale:E_(o,a),refetch:this.refetch,remove:this.remove};return H},n.shouldNotifyListeners=function(o,a){if(!a)return!0;var s=this.options,u=s.notifyOnChangeProps,c=s.notifyOnChangePropsExclusions;if(!u&&!c||u==="tracked"&&!this.trackedProps.length)return!0;var f=u==="tracked"?this.trackedProps:u;return Object.keys(o).some(function(p){var h=p,_=o[h]!==a[h],v=f?.some(function(b){return b===p}),y=c?.some(function(b){return b===p});return _&&!y&&(!f||v)})},n.updateResult=function(o){var a=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!rT(this.currentResult,a)){var s={cache:!0};o?.listeners!==!1&&this.shouldNotifyListeners(this.currentResult,a)&&(s.listeners=!0),this.notify(Ve({},s,o))}},n.updateQuery=function(){var o=this.client.getQueryCache().build(this.client,this.options);if(o!==this.currentQuery){var a=this.currentQuery;this.currentQuery=o,this.currentQueryInitialState=o.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(a?.removeObserver(this),o.addObserver(this))}},n.onQueryUpdate=function(o){var a={};o.type==="success"?a.onSuccess=!0:o.type==="error"&&!Tu(o.error)&&(a.onError=!0),this.updateResult(a),this.hasListeners()&&this.updateTimers()},n.notify=function(o){var a=this;dt.batch(function(){o.onSuccess?(a.options.onSuccess==null||a.options.onSuccess(a.currentResult.data),a.options.onSettled==null||a.options.onSettled(a.currentResult.data,null)):o.onError&&(a.options.onError==null||a.options.onError(a.currentResult.error),a.options.onSettled==null||a.options.onSettled(void 0,a.currentResult.error)),o.listeners&&a.listeners.forEach(function(s){s(a.currentResult)}),o.cache&&a.client.getQueryCache().notify({query:a.currentQuery,type:"observerResultsUpdated"})})},t}(xl);function bT(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function By(e,t){return bT(e,t)||e.state.dataUpdatedAt>0&&Fp(e,t,t.refetchOnMount)}function Fp(e,t,n){if(t.enabled!==!1){var r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&E_(e,t)}return!1}function My(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&E_(e,n)}function E_(e,t){return e.isStaleByTime(t.staleTime)}var xT=BO.unstable_batchedUpdates;dt.setBatchNotifyFunction(xT);var wT=console;uT(wT);var Dy=j.createContext(void 0),sS=j.createContext(!1);function lS(e){return e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Dy),window.ReactQueryClientContext):Dy}var ST=function(){var t=j.useContext(lS(j.useContext(sS)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},kT=function(t){var n=t.client,r=t.contextSharing,o=r===void 0?!1:r,a=t.children;j.useEffect(function(){return n.mount(),function(){n.unmount()}},[n]);var s=lS(o);return j.createElement(sS.Provider,{value:o},j.createElement(s.Provider,{value:n},a))};function PT(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var CT=j.createContext(PT()),ET=function(){return j.useContext(CT)};function OT(e,t,n){return typeof t=="function"?t.apply(void 0,n):typeof t=="boolean"?t:!!e}function RT(e,t){var n=j.useRef(!1),r=j.useState(0),o=r[1],a=ST(),s=ET(),u=a.defaultQueryObserverOptions(e);u.optimisticResults=!0,u.onError&&(u.onError=dt.batchCalls(u.onError)),u.onSuccess&&(u.onSuccess=dt.batchCalls(u.onSuccess)),u.onSettled&&(u.onSettled=dt.batchCalls(u.onSettled)),u.suspense&&(typeof u.staleTime!="number"&&(u.staleTime=1e3),u.cacheTime===0&&(u.cacheTime=1)),(u.suspense||u.useErrorBoundary)&&(s.isReset()||(u.retryOnMount=!1));var c=j.useState(function(){return new t(a,u)}),f=c[0],p=f.getOptimisticResult(u);if(j.useEffect(function(){n.current=!0,s.clearReset();var h=f.subscribe(dt.batchCalls(function(){n.current&&o(function(_){return _+1})}));return f.updateResult(),function(){n.current=!1,h()}},[s,f]),j.useEffect(function(){f.setOptions(u,{listeners:!1})},[u,f]),u.suspense&&p.isLoading)throw f.fetchOptimistic(u).then(function(h){var _=h.data;u.onSuccess==null||u.onSuccess(_),u.onSettled==null||u.onSettled(_,null)}).catch(function(h){s.clearReset(),u.onError==null||u.onError(h),u.onSettled==null||u.onSettled(void 0,h)});if(p.isError&&!s.isReset()&&!p.isFetching&&OT(u.suspense,u.useErrorBoundary,[p.error,f.getCurrentQuery()]))throw p.error;return u.notifyOnChangeProps==="tracked"&&(p=f.trackResult(p,u)),p}function TT(e,t,n){var r=Ou(e,t,n);return RT(r,yT)}function mo(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Bd(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&mc(e,t)}function wl(e,t){if(t&&(ln(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return mo(e)}function pr(e){return pr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},pr(e)}function LT(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function AT(e){return Y1(e)||LT(e)||X1(e)||eS()}function jy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Fy(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jy(Object(n),!0).forEach(function(r){Zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jy(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var IT={type:"logger",log:function(t){this.output("log",t)},warn:function(t){this.output("warn",t)},error:function(t){this.output("error",t)},output:function(t,n){console&&console[t]&&console[t].apply(console,n)}},zT=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};qn(this,e),this.init(t,n)}return Kn(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=r.prefix||"i18next:",this.logger=n||IT,this.options=r,this.debug=r.debug}},{key:"setDebug",value:function(n){this.debug=n}},{key:"log",value:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return this.forward(r,"log","",!0)}},{key:"warn",value:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return this.forward(r,"warn","",!0)}},{key:"error",value:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return this.forward(r,"error","")}},{key:"deprecate",value:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return this.forward(r,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(n,r,o,a){return a&&!this.debug?null:(typeof n[0]=="string"&&(n[0]="".concat(o).concat(this.prefix," ").concat(n[0])),this.logger[r](n))}},{key:"create",value:function(n){return new e(this.logger,Fy(Fy({},{prefix:"".concat(this.prefix,":").concat(n,":")}),this.options))}},{key:"clone",value:function(n){return n=n||this.options,n.prefix=n.prefix||this.prefix,new e(this.logger,n)}}]),e}(),lr=new zT,Oo=function(){function e(){qn(this,e),this.observers={}}return Kn(e,[{key:"on",value:function(n,r){var o=this;return n.split(" ").forEach(function(a){o.observers[a]=o.observers[a]||[],o.observers[a].push(r)}),this}},{key:"off",value:function(n,r){if(this.observers[n]){if(!r){delete this.observers[n];return}this.observers[n]=this.observers[n].filter(function(o){return o!==r})}}},{key:"emit",value:function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];if(this.observers[n]){var s=[].concat(this.observers[n]);s.forEach(function(c){c.apply(void 0,o)})}if(this.observers["*"]){var u=[].concat(this.observers["*"]);u.forEach(function(c){c.apply(c,[n].concat(o))})}}}]),e}();function ds(){var e,t,n=new Promise(function(r,o){e=r,t=o});return n.resolve=e,n.reject=t,n}function $y(e){return e==null?"":""+e}function NT(e,t,n){e.forEach(function(r){t[r]&&(n[r]=t[r])})}function O_(e,t,n){function r(u){return u&&u.indexOf("###")>-1?u.replace(/###/g,"."):u}function o(){return!e||typeof e=="string"}for(var a=typeof t!="string"?[].concat(t):t.split(".");a.length>1;){if(o())return{};var s=r(a.shift());!e[s]&&n&&(e[s]=new n),Object.prototype.hasOwnProperty.call(e,s)?e=e[s]:e={}}return o()?{}:{obj:e,k:r(a.shift())}}function Uy(e,t,n){var r=O_(e,t,Object),o=r.obj,a=r.k;o[a]=n}function BT(e,t,n,r){var o=O_(e,t,Object),a=o.obj,s=o.k;a[s]=a[s]||[],r&&(a[s]=a[s].concat(n)),r||a[s].push(n)}function wc(e,t){var n=O_(e,t),r=n.obj,o=n.k;if(r)return r[o]}function MT(e,t,n){var r=wc(e,n);return r!==void 0?r:wc(t,n)}function uS(e,t,n){for(var r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):uS(e[r],t[r],n):e[r]=t[r]);return e}function ji(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var DT={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function jT(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,function(t){return DT[t]}):e}var Md=typeof window<"u"&&window.navigator&&typeof window.navigator.userAgentData>"u"&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,FT=[" ",",","?","!",";"];function $T(e,t,n){t=t||"",n=n||"";var r=FT.filter(function(u){return t.indexOf(u)<0&&n.indexOf(u)<0});if(r.length===0)return!0;var o=new RegExp("(".concat(r.map(function(u){return u==="?"?"\\?":u}).join("|"),")")),a=!o.test(e);if(!a){var s=e.indexOf(n);s>0&&!o.test(e.substring(0,s))&&(a=!0)}return a}function Sc(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(e){if(e[t])return e[t];for(var r=t.split(n),o=e,a=0;a<r.length;++a){if(!o||typeof o[r[a]]=="string"&&a+1<r.length)return;if(o[r[a]]===void 0){for(var s=2,u=r.slice(a,a+s).join(n),c=o[u];c===void 0&&r.length>a+s;)s++,u=r.slice(a,a+s).join(n),c=o[u];if(c===void 0)return;if(c===null)return null;if(t.endsWith(u)){if(typeof c=="string")return c;if(u&&typeof c[u]=="string")return c[u]}var f=r.slice(a+s).join(n);return f?Sc(c,f,n):void 0}o=o[r[a]]}return o}}function Wy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function lu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wy(Object(n),!0).forEach(function(r){Zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wy(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function UT(e){var t=WT();return function(){var r=pr(e),o;if(t){var a=pr(this).constructor;o=Reflect.construct(r,arguments,a)}else o=r.apply(this,arguments);return wl(this,o)}}function WT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var HT=function(e){Bd(n,e);var t=UT(n);function n(r){var o,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};return qn(this,n),o=t.call(this),Md&&Oo.call(mo(o)),o.data=r||{},o.options=a,o.options.keySeparator===void 0&&(o.options.keySeparator="."),o.options.ignoreJSONStructure===void 0&&(o.options.ignoreJSONStructure=!0),o}return Kn(n,[{key:"addNamespaces",value:function(o){this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}},{key:"removeNamespaces",value:function(o){var a=this.options.ns.indexOf(o);a>-1&&this.options.ns.splice(a,1)}},{key:"getResource",value:function(o,a,s){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator,f=u.ignoreJSONStructure!==void 0?u.ignoreJSONStructure:this.options.ignoreJSONStructure,p=[o,a];s&&typeof s!="string"&&(p=p.concat(s)),s&&typeof s=="string"&&(p=p.concat(c?s.split(c):s)),o.indexOf(".")>-1&&(p=o.split("."));var h=wc(this.data,p);return h||!f||typeof s!="string"?h:Sc(this.data&&this.data[o]&&this.data[o][a],s,c)}},{key:"addResource",value:function(o,a,s,u){var c=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1},f=this.options.keySeparator;f===void 0&&(f=".");var p=[o,a];s&&(p=p.concat(f?s.split(f):s)),o.indexOf(".")>-1&&(p=o.split("."),u=a,a=p[1]),this.addNamespaces(a),Uy(this.data,p,u),c.silent||this.emit("added",o,a,s,u)}},{key:"addResources",value:function(o,a,s){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(var c in s)(typeof s[c]=="string"||Object.prototype.toString.apply(s[c])==="[object Array]")&&this.addResource(o,a,c,s[c],{silent:!0});u.silent||this.emit("added",o,a,s)}},{key:"addResourceBundle",value:function(o,a,s,u,c){var f=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},p=[o,a];o.indexOf(".")>-1&&(p=o.split("."),u=s,s=a,a=p[1]),this.addNamespaces(a);var h=wc(this.data,p)||{};u?uS(h,s,c):h=lu(lu({},h),s),Uy(this.data,p,h),f.silent||this.emit("added",o,a,s)}},{key:"removeResourceBundle",value:function(o,a){this.hasResourceBundle(o,a)&&delete this.data[o][a],this.removeNamespaces(a),this.emit("removed",o,a)}},{key:"hasResourceBundle",value:function(o,a){return this.getResource(o,a)!==void 0}},{key:"getResourceBundle",value:function(o,a){return a||(a=this.options.defaultNS),this.options.compatibilityAPI==="v1"?lu(lu({},{}),this.getResource(o,a)):this.getResource(o,a)}},{key:"getDataByLanguage",value:function(o){return this.data[o]}},{key:"hasLanguageSomeTranslations",value:function(o){var a=this.getDataByLanguage(o),s=a&&Object.keys(a)||[];return!!s.find(function(u){return a[u]&&Object.keys(a[u]).length>0})}},{key:"toJSON",value:function(){return this.data}}]),n}(Oo),cS={processors:{},addPostProcessor:function(t){this.processors[t.name]=t},handle:function(t,n,r,o,a){var s=this;return t.forEach(function(u){s.processors[u]&&(n=s.processors[u].process(n,r,o,a))}),n}};function Hy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Bt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hy(Object(n),!0).forEach(function(r){Zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hy(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function VT(e){var t=ZT();return function(){var r=pr(e),o;if(t){var a=pr(this).constructor;o=Reflect.construct(r,arguments,a)}else o=r.apply(this,arguments);return wl(this,o)}}function ZT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Vy={},Zy=function(e){Bd(n,e);var t=VT(n);function n(r){var o,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return qn(this,n),o=t.call(this),Md&&Oo.call(mo(o)),NT(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r,mo(o)),o.options=a,o.options.keySeparator===void 0&&(o.options.keySeparator="."),o.logger=lr.create("translator"),o}return Kn(n,[{key:"changeLanguage",value:function(o){o&&(this.language=o)}},{key:"exists",value:function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(o==null)return!1;var s=this.resolve(o,a);return s&&s.res!==void 0}},{key:"extractFromKey",value:function(o,a){var s=a.nsSeparator!==void 0?a.nsSeparator:this.options.nsSeparator;s===void 0&&(s=":");var u=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,c=a.ns||this.options.defaultNS||[],f=s&&o.indexOf(s)>-1,p=!this.options.userDefinedKeySeparator&&!a.keySeparator&&!this.options.userDefinedNsSeparator&&!a.nsSeparator&&!$T(o,s,u);if(f&&!p){var h=o.match(this.interpolator.nestingRegexp);if(h&&h.length>0)return{key:o,namespaces:c};var _=o.split(s);(s!==u||s===u&&this.options.ns.indexOf(_[0])>-1)&&(c=_.shift()),o=_.join(u)}return typeof c=="string"&&(c=[c]),{key:o,namespaces:c}}},{key:"translate",value:function(o,a,s){var u=this;if(ln(a)!=="object"&&this.options.overloadTranslationOptionHandler&&(a=this.options.overloadTranslationOptionHandler(arguments)),ln(a)==="object"&&(a=Bt({},a)),a||(a={}),o==null)return"";Array.isArray(o)||(o=[String(o)]);var c=a.returnDetails!==void 0?a.returnDetails:this.options.returnDetails,f=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,p=this.extractFromKey(o[o.length-1],a),h=p.key,_=p.namespaces,v=_[_.length-1],y=a.lng||this.language,b=a.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(y&&y.toLowerCase()==="cimode"){if(b){var P=a.nsSeparator||this.options.nsSeparator;return c?{res:"".concat(v).concat(P).concat(h),usedKey:h,exactUsedKey:h,usedLng:y,usedNS:v}:"".concat(v).concat(P).concat(h)}return c?{res:h,usedKey:h,exactUsedKey:h,usedLng:y,usedNS:v}:h}var g=this.resolve(o,a),x=g&&g.res,S=g&&g.usedKey||h,E=g&&g.exactUsedKey||h,T=Object.prototype.toString.apply(x),A=["[object Number]","[object Function]","[object RegExp]"],N=a.joinArrays!==void 0?a.joinArrays:this.options.joinArrays,D=!this.i18nFormat||this.i18nFormat.handleAsObject,W=typeof x!="string"&&typeof x!="boolean"&&typeof x!="number";if(D&&x&&W&&A.indexOf(T)<0&&!(typeof N=="string"&&T==="[object Array]")){if(!a.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var B=this.options.returnedObjectHandler?this.options.returnedObjectHandler(S,x,Bt(Bt({},a),{},{ns:_})):"key '".concat(h," (").concat(this.language,")' returned an object instead of string.");return c?(g.res=B,g):B}if(f){var H=T==="[object Array]",G=H?[]:{},q=H?E:S;for(var $ in x)if(Object.prototype.hasOwnProperty.call(x,$)){var re="".concat(q).concat(f).concat($);G[$]=this.translate(re,Bt(Bt({},a),{joinArrays:!1,ns:_})),G[$]===re&&(G[$]=x[$])}x=G}}else if(D&&typeof N=="string"&&T==="[object Array]")x=x.join(N),x&&(x=this.extendTranslation(x,o,a,s));else{var Z=!1,se=!1,O=a.count!==void 0&&typeof a.count!="string",Y=n.hasDefaultValue(a),U=O?this.pluralResolver.getSuffix(y,a.count,a):"",R=a["defaultValue".concat(U)]||a.defaultValue;!this.isValidLookup(x)&&Y&&(Z=!0,x=R),this.isValidLookup(x)||(se=!0,x=h);var z=a.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey,M=z&&se?void 0:x,V=Y&&R!==x&&this.options.updateMissing;if(se||Z||V){if(this.logger.log(V?"updateKey":"missingKey",y,v,h,V?R:x),f){var te=this.resolve(h,Bt(Bt({},a),{},{keySeparator:!1}));te&&te.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var ie=[],fe=this.languageUtils.getFallbackCodes(this.options.fallbackLng,a.lng||this.language);if(this.options.saveMissingTo==="fallback"&&fe&&fe[0])for(var be=0;be<fe.length;be++)ie.push(fe[be]);else this.options.saveMissingTo==="all"?ie=this.languageUtils.toResolveHierarchy(a.lng||this.language):ie.push(a.lng||this.language);var Je=function(Re,le,me){var ee=Y&&me!==x?me:M;u.options.missingKeyHandler?u.options.missingKeyHandler(Re,v,le,ee,V,a):u.backendConnector&&u.backendConnector.saveMissing&&u.backendConnector.saveMissing(Re,v,le,ee,V,a),u.emit("missingKey",Re,v,le,x)};this.options.saveMissing&&(this.options.saveMissingPlurals&&O?ie.forEach(function(Ze){u.pluralResolver.getSuffixes(Ze,a).forEach(function(Re){Je([Ze],h+Re,a["defaultValue".concat(Re)]||R)})}):Je(ie,h,R))}x=this.extendTranslation(x,o,a,g,s),se&&x===h&&this.options.appendNamespaceToMissingKey&&(x="".concat(v,":").concat(h)),(se||Z)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?x=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(v,":").concat(h):h,Z?x:void 0):x=this.options.parseMissingKeyHandler(x))}return c?(g.res=x,g):x}},{key:"extendTranslation",value:function(o,a,s,u,c){var f=this;if(this.i18nFormat&&this.i18nFormat.parse)o=this.i18nFormat.parse(o,Bt(Bt({},this.options.interpolation.defaultVariables),s),u.usedLng,u.usedNS,u.usedKey,{resolved:u});else if(!s.skipInterpolation){s.interpolation&&this.interpolator.init(Bt(Bt({},s),{interpolation:Bt(Bt({},this.options.interpolation),s.interpolation)}));var p=typeof o=="string"&&(s&&s.interpolation&&s.interpolation.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables),h;if(p){var _=o.match(this.interpolator.nestingRegexp);h=_&&_.length}var v=s.replace&&typeof s.replace!="string"?s.replace:s;if(this.options.interpolation.defaultVariables&&(v=Bt(Bt({},this.options.interpolation.defaultVariables),v)),o=this.interpolator.interpolate(o,v,s.lng||this.language,s),p){var y=o.match(this.interpolator.nestingRegexp),b=y&&y.length;h<b&&(s.nest=!1)}!s.lng&&this.options.compatibilityAPI!=="v1"&&u&&u.res&&(s.lng=u.usedLng),s.nest!==!1&&(o=this.interpolator.nest(o,function(){for(var x=arguments.length,S=new Array(x),E=0;E<x;E++)S[E]=arguments[E];return c&&c[0]===S[0]&&!s.context?(f.logger.warn("It seems you are nesting recursively key: ".concat(S[0]," in key: ").concat(a[0])),null):f.translate.apply(f,S.concat([a]))},s)),s.interpolation&&this.interpolator.reset()}var P=s.postProcess||this.options.postProcess,g=typeof P=="string"?[P]:P;return o!=null&&g&&g.length&&s.applyPostProcessor!==!1&&(o=cS.handle(g,o,a,this.options&&this.options.postProcessPassResolved?Bt({i18nResolved:u},s):s,this)),o}},{key:"resolve",value:function(o){var a=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u,c,f,p,h;return typeof o=="string"&&(o=[o]),o.forEach(function(_){if(!a.isValidLookup(u)){var v=a.extractFromKey(_,s),y=v.key;c=y;var b=v.namespaces;a.options.fallbackNS&&(b=b.concat(a.options.fallbackNS));var P=s.count!==void 0&&typeof s.count!="string",g=P&&!s.ordinal&&s.count===0&&a.pluralResolver.shouldUseIntlApi(),x=s.context!==void 0&&(typeof s.context=="string"||typeof s.context=="number")&&s.context!=="",S=s.lngs?s.lngs:a.languageUtils.toResolveHierarchy(s.lng||a.language,s.fallbackLng);b.forEach(function(E){a.isValidLookup(u)||(h=E,!Vy["".concat(S[0],"-").concat(E)]&&a.utils&&a.utils.hasLoadedNamespace&&!a.utils.hasLoadedNamespace(h)&&(Vy["".concat(S[0],"-").concat(E)]=!0,a.logger.warn('key "'.concat(c,'" for languages "').concat(S.join(", "),`" won't get resolved as namespace "`).concat(h,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),S.forEach(function(T){if(!a.isValidLookup(u)){p=T;var A=[y];if(a.i18nFormat&&a.i18nFormat.addLookupKeys)a.i18nFormat.addLookupKeys(A,y,T,E,s);else{var N;P&&(N=a.pluralResolver.getSuffix(T,s.count,s));var D="".concat(a.options.pluralSeparator,"zero");if(P&&(A.push(y+N),g&&A.push(y+D)),x){var W="".concat(y).concat(a.options.contextSeparator).concat(s.context);A.push(W),P&&(A.push(W+N),g&&A.push(W+D))}}for(var B;B=A.pop();)a.isValidLookup(u)||(f=B,u=a.getResource(T,E,B,s))}}))})}}),{res:u,usedKey:c,exactUsedKey:f,usedLng:p,usedNS:h}}},{key:"isValidLookup",value:function(o){return o!==void 0&&!(!this.options.returnNull&&o===null)&&!(!this.options.returnEmptyString&&o==="")}},{key:"getResource",value:function(o,a,s){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(o,a,s,u):this.resourceStore.getResource(o,a,s,u)}}],[{key:"hasDefaultValue",value:function(o){var a="defaultValue";for(var s in o)if(Object.prototype.hasOwnProperty.call(o,s)&&a===s.substring(0,a.length)&&o[s]!==void 0)return!0;return!1}}]),n}(Oo);function eh(e){return e.charAt(0).toUpperCase()+e.slice(1)}var qy=function(){function e(t){qn(this,e),this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=lr.create("languageUtils")}return Kn(e,[{key:"getScriptPartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return null;var r=n.split("-");return r.length===2||(r.pop(),r[r.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(r.join("-"))}},{key:"getLanguagePartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return n;var r=n.split("-");return this.formatLanguageCode(r[0])}},{key:"formatLanguageCode",value:function(n){if(typeof n=="string"&&n.indexOf("-")>-1){var r=["hans","hant","latn","cyrl","cans","mong","arab"],o=n.split("-");return this.options.lowerCaseLng?o=o.map(function(a){return a.toLowerCase()}):o.length===2?(o[0]=o[0].toLowerCase(),o[1]=o[1].toUpperCase(),r.indexOf(o[1].toLowerCase())>-1&&(o[1]=eh(o[1].toLowerCase()))):o.length===3&&(o[0]=o[0].toLowerCase(),o[1].length===2&&(o[1]=o[1].toUpperCase()),o[0]!=="sgn"&&o[2].length===2&&(o[2]=o[2].toUpperCase()),r.indexOf(o[1].toLowerCase())>-1&&(o[1]=eh(o[1].toLowerCase())),r.indexOf(o[2].toLowerCase())>-1&&(o[2]=eh(o[2].toLowerCase()))),o.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?n.toLowerCase():n}},{key:"isSupportedCode",value:function(n){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(n=this.getLanguagePartFromCode(n)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(n)>-1}},{key:"getBestMatchFromCodes",value:function(n){var r=this;if(!n)return null;var o;return n.forEach(function(a){if(!o){var s=r.formatLanguageCode(a);(!r.options.supportedLngs||r.isSupportedCode(s))&&(o=s)}}),!o&&this.options.supportedLngs&&n.forEach(function(a){if(!o){var s=r.getLanguagePartFromCode(a);if(r.isSupportedCode(s))return o=s;o=r.options.supportedLngs.find(function(u){if(u===s)return u;if(!(u.indexOf("-")<0&&s.indexOf("-")<0)&&u.indexOf(s)===0)return u})}}),o||(o=this.getFallbackCodes(this.options.fallbackLng)[0]),o}},{key:"getFallbackCodes",value:function(n,r){if(!n)return[];if(typeof n=="function"&&(n=n(r)),typeof n=="string"&&(n=[n]),Object.prototype.toString.apply(n)==="[object Array]")return n;if(!r)return n.default||[];var o=n[r];return o||(o=n[this.getScriptPartFromCode(r)]),o||(o=n[this.formatLanguageCode(r)]),o||(o=n[this.getLanguagePartFromCode(r)]),o||(o=n.default),o||[]}},{key:"toResolveHierarchy",value:function(n,r){var o=this,a=this.getFallbackCodes(r||this.options.fallbackLng||[],n),s=[],u=function(f){f&&(o.isSupportedCode(f)?s.push(f):o.logger.warn("rejecting language code not found in supportedLngs: ".concat(f)))};return typeof n=="string"&&n.indexOf("-")>-1?(this.options.load!=="languageOnly"&&u(this.formatLanguageCode(n)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&u(this.getScriptPartFromCode(n)),this.options.load!=="currentOnly"&&u(this.getLanguagePartFromCode(n))):typeof n=="string"&&u(this.formatLanguageCode(n)),a.forEach(function(c){s.indexOf(c)<0&&u(o.formatLanguageCode(c))}),s}}]),e}(),qT=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],KT={1:function(t){return+(t>1)},2:function(t){return+(t!=1)},3:function(t){return 0},4:function(t){return t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2},5:function(t){return t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5},6:function(t){return t==1?0:t>=2&&t<=4?1:2},7:function(t){return t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2},8:function(t){return t==1?0:t==2?1:t!=8&&t!=11?2:3},9:function(t){return+(t>=2)},10:function(t){return t==1?0:t==2?1:t<7?2:t<11?3:4},11:function(t){return t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3},12:function(t){return+(t%10!=1||t%100==11)},13:function(t){return+(t!==0)},14:function(t){return t==1?0:t==2?1:t==3?2:3},15:function(t){return t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2},16:function(t){return t%10==1&&t%100!=11?0:t!==0?1:2},17:function(t){return t==1||t%10==1&&t%100!=11?0:1},18:function(t){return t==0?0:t==1?1:2},19:function(t){return t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3},20:function(t){return t==1?0:t==0||t%100>0&&t%100<20?1:2},21:function(t){return t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0},22:function(t){return t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3}},QT=["v1","v2","v3"],Ky={zero:0,one:1,two:2,few:3,many:4,other:5};function GT(){var e={};return qT.forEach(function(t){t.lngs.forEach(function(n){e[n]={numbers:t.nr,plurals:KT[t.fc]}})}),e}var JT=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};qn(this,e),this.languageUtils=t,this.options=n,this.logger=lr.create("pluralResolver"),(!this.options.compatibilityJSON||this.options.compatibilityJSON==="v4")&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=GT()}return Kn(e,[{key:"addRule",value:function(n,r){this.rules[n]=r}},{key:"getRule",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(n,{type:r.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[n]||this.rules[this.languageUtils.getLanguagePartFromCode(n)]}},{key:"needsPlural",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=this.getRule(n,r);return this.shouldUseIntlApi()?o&&o.resolvedOptions().pluralCategories.length>1:o&&o.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(n,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(n,o).map(function(a){return"".concat(r).concat(a)})}},{key:"getSuffixes",value:function(n){var r=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(n,o);return a?this.shouldUseIntlApi()?a.resolvedOptions().pluralCategories.sort(function(s,u){return Ky[s]-Ky[u]}).map(function(s){return"".concat(r.options.prepend).concat(s)}):a.numbers.map(function(s){return r.getSuffix(n,s,o)}):[]}},{key:"getSuffix",value:function(n,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=this.getRule(n,o);return a?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(a.select(r)):this.getSuffixRetroCompatible(a,r):(this.logger.warn("no plural rule found for: ".concat(n)),"")}},{key:"getSuffixRetroCompatible",value:function(n,r){var o=this,a=n.noAbs?n.plurals(r):n.plurals(Math.abs(r)),s=n.numbers[a];this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1&&(s===2?s="plural":s===1&&(s=""));var u=function(){return o.options.prepend&&s.toString()?o.options.prepend+s.toString():s.toString()};return this.options.compatibilityJSON==="v1"?s===1?"":typeof s=="number"?"_plural_".concat(s.toString()):u():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1?u():this.options.prepend&&a.toString()?this.options.prepend+a.toString():a.toString()}},{key:"shouldUseIntlApi",value:function(){return!QT.includes(this.options.compatibilityJSON)}}]),e}();function Qy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Ln(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qy(Object(n),!0).forEach(function(r){Zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qy(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Gy(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,a=MT(e,t,n);return!a&&o&&typeof n=="string"&&(a=Sc(e,n,r),a===void 0&&(a=Sc(t,n,r))),a}var YT=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};qn(this,e),this.logger=lr.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(n){return n},this.init(t)}return Kn(e,[{key:"init",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};n.interpolation||(n.interpolation={escapeValue:!0});var r=n.interpolation;this.escape=r.escape!==void 0?r.escape:jT,this.escapeValue=r.escapeValue!==void 0?r.escapeValue:!0,this.useRawValueToEscape=r.useRawValueToEscape!==void 0?r.useRawValueToEscape:!1,this.prefix=r.prefix?ji(r.prefix):r.prefixEscaped||"{{",this.suffix=r.suffix?ji(r.suffix):r.suffixEscaped||"}}",this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||",",this.unescapePrefix=r.unescapeSuffix?"":r.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":r.unescapeSuffix||"",this.nestingPrefix=r.nestingPrefix?ji(r.nestingPrefix):r.nestingPrefixEscaped||ji("$t("),this.nestingSuffix=r.nestingSuffix?ji(r.nestingSuffix):r.nestingSuffixEscaped||ji(")"),this.nestingOptionsSeparator=r.nestingOptionsSeparator?r.nestingOptionsSeparator:r.nestingOptionsSeparator||",",this.maxReplaces=r.maxReplaces?r.maxReplaces:1e3,this.alwaysFormat=r.alwaysFormat!==void 0?r.alwaysFormat:!1,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var n="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(n,"g");var r="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(r,"g");var o="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(o,"g")}},{key:"interpolate",value:function(n,r,o,a){var s=this,u,c,f,p=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function h(P){return P.replace(/\$/g,"$$$$")}var _=function(g){if(g.indexOf(s.formatSeparator)<0){var x=Gy(r,p,g,s.options.keySeparator,s.options.ignoreJSONStructure);return s.alwaysFormat?s.format(x,void 0,o,Ln(Ln(Ln({},a),r),{},{interpolationkey:g})):x}var S=g.split(s.formatSeparator),E=S.shift().trim(),T=S.join(s.formatSeparator).trim();return s.format(Gy(r,p,E,s.options.keySeparator,s.options.ignoreJSONStructure),T,o,Ln(Ln(Ln({},a),r),{},{interpolationkey:E}))};this.resetRegExp();var v=a&&a.missingInterpolationHandler||this.options.missingInterpolationHandler,y=a&&a.interpolation&&a.interpolation.skipOnVariables!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables,b=[{regex:this.regexpUnescape,safeValue:function(g){return h(g)}},{regex:this.regexp,safeValue:function(g){return s.escapeValue?h(s.escape(g)):h(g)}}];return b.forEach(function(P){for(f=0;u=P.regex.exec(n);){var g=u[1].trim();if(c=_(g),c===void 0)if(typeof v=="function"){var x=v(n,u,a);c=typeof x=="string"?x:""}else if(a&&Object.prototype.hasOwnProperty.call(a,g))c="";else if(y){c=u[0];continue}else s.logger.warn("missed to pass in variable ".concat(g," for interpolating ").concat(n)),c="";else typeof c!="string"&&!s.useRawValueToEscape&&(c=$y(c));var S=P.safeValue(c);if(n=n.replace(u[0],S),y?(P.regex.lastIndex+=c.length,P.regex.lastIndex-=u[0].length):P.regex.lastIndex=0,f++,f>=s.maxReplaces)break}}),n}},{key:"nest",value:function(n,r){var o=this,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s,u,c;function f(v,y){var b=this.nestingOptionsSeparator;if(v.indexOf(b)<0)return v;var P=v.split(new RegExp("".concat(b,"[ ]*{"))),g="{".concat(P[1]);v=P[0],g=this.interpolate(g,c);var x=g.match(/'/g),S=g.match(/"/g);(x&&x.length%2===0&&!S||S.length%2!==0)&&(g=g.replace(/'/g,'"'));try{c=JSON.parse(g),y&&(c=Ln(Ln({},y),c))}catch(E){return this.logger.warn("failed parsing options string in nesting for key ".concat(v),E),"".concat(v).concat(b).concat(g)}return delete c.defaultValue,v}for(;s=this.nestingRegexp.exec(n);){var p=[];c=Ln({},a),c=c.replace&&typeof c.replace!="string"?c.replace:c,c.applyPostProcessor=!1,delete c.defaultValue;var h=!1;if(s[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(s[1])){var _=s[1].split(this.formatSeparator).map(function(v){return v.trim()});s[1]=_.shift(),p=_,h=!0}if(u=r(f.call(this,s[1].trim(),c),c),u&&s[0]===n&&typeof u!="string")return u;typeof u!="string"&&(u=$y(u)),u||(this.logger.warn("missed to resolve ".concat(s[1]," for nesting ").concat(n)),u=""),h&&(u=p.reduce(function(v,y){return o.format(v,y,a.lng,Ln(Ln({},a),{},{interpolationkey:s[1].trim()}))},u.trim())),n=n.replace(s[0],u),this.regexp.lastIndex=0}return n}}]),e}();function Jy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function wr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jy(Object(n),!0).forEach(function(r){Zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jy(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function XT(e){var t=e.toLowerCase().trim(),n={};if(e.indexOf("(")>-1){var r=e.split("(");t=r[0].toLowerCase().trim();var o=r[1].substring(0,r[1].length-1);if(t==="currency"&&o.indexOf(":")<0)n.currency||(n.currency=o.trim());else if(t==="relativetime"&&o.indexOf(":")<0)n.range||(n.range=o.trim());else{var a=o.split(";");a.forEach(function(s){if(s){var u=s.split(":"),c=AT(u),f=c[0],p=c.slice(1),h=p.join(":").trim().replace(/^'+|'+$/g,"");n[f.trim()]||(n[f.trim()]=h),h==="false"&&(n[f.trim()]=!1),h==="true"&&(n[f.trim()]=!0),isNaN(h)||(n[f.trim()]=parseInt(h,10))}})}}return{formatName:t,formatOptions:n}}function Fi(e){var t={};return function(r,o,a){var s=o+JSON.stringify(a),u=t[s];return u||(u=e(o,a),t[s]=u),u(r)}}var eL=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};qn(this,e),this.logger=lr.create("formatter"),this.options=t,this.formats={number:Fi(function(n,r){var o=new Intl.NumberFormat(n,wr({},r));return function(a){return o.format(a)}}),currency:Fi(function(n,r){var o=new Intl.NumberFormat(n,wr(wr({},r),{},{style:"currency"}));return function(a){return o.format(a)}}),datetime:Fi(function(n,r){var o=new Intl.DateTimeFormat(n,wr({},r));return function(a){return o.format(a)}}),relativetime:Fi(function(n,r){var o=new Intl.RelativeTimeFormat(n,wr({},r));return function(a){return o.format(a,r.range||"day")}}),list:Fi(function(n,r){var o=new Intl.ListFormat(n,wr({},r));return function(a){return o.format(a)}})},this.init(t)}return Kn(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}},o=r.interpolation;this.formatSeparator=o.formatSeparator?o.formatSeparator:o.formatSeparator||","}},{key:"add",value:function(n,r){this.formats[n.toLowerCase().trim()]=r}},{key:"addCached",value:function(n,r){this.formats[n.toLowerCase().trim()]=Fi(r)}},{key:"format",value:function(n,r,o){var a=this,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},u=r.split(this.formatSeparator),c=u.reduce(function(f,p){var h=XT(p),_=h.formatName,v=h.formatOptions;if(a.formats[_]){var y=f;try{var b=s&&s.formatParams&&s.formatParams[s.interpolationkey]||{},P=b.locale||b.lng||s.locale||s.lng||o;y=a.formats[_](f,P,wr(wr(wr({},v),s),b))}catch(g){a.logger.warn(g)}return y}else a.logger.warn("there was no format function for ".concat(_));return f},n);return c}}]),e}();function Yy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Xy(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yy(Object(n),!0).forEach(function(r){Zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yy(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tL(e){var t=nL();return function(){var r=pr(e),o;if(t){var a=pr(this).constructor;o=Reflect.construct(r,arguments,a)}else o=r.apply(this,arguments);return wl(this,o)}}function nL(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function rL(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}var oL=function(e){Bd(n,e);var t=tL(n);function n(r,o,a){var s,u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return qn(this,n),s=t.call(this),Md&&Oo.call(mo(s)),s.backend=r,s.store=o,s.services=a,s.languageUtils=a.languageUtils,s.options=u,s.logger=lr.create("backendConnector"),s.waitingReads=[],s.maxParallelReads=u.maxParallelReads||10,s.readingCalls=0,s.maxRetries=u.maxRetries>=0?u.maxRetries:5,s.retryTimeout=u.retryTimeout>=1?u.retryTimeout:350,s.state={},s.queue=[],s.backend&&s.backend.init&&s.backend.init(a,u.backend,u),s}return Kn(n,[{key:"queueLoad",value:function(o,a,s,u){var c=this,f={},p={},h={},_={};return o.forEach(function(v){var y=!0;a.forEach(function(b){var P="".concat(v,"|").concat(b);!s.reload&&c.store.hasResourceBundle(v,b)?c.state[P]=2:c.state[P]<0||(c.state[P]===1?p[P]===void 0&&(p[P]=!0):(c.state[P]=1,y=!1,p[P]===void 0&&(p[P]=!0),f[P]===void 0&&(f[P]=!0),_[b]===void 0&&(_[b]=!0)))}),y||(h[v]=!0)}),(Object.keys(f).length||Object.keys(p).length)&&this.queue.push({pending:p,pendingCount:Object.keys(p).length,loaded:{},errors:[],callback:u}),{toLoad:Object.keys(f),pending:Object.keys(p),toLoadLanguages:Object.keys(h),toLoadNamespaces:Object.keys(_)}}},{key:"loaded",value:function(o,a,s){var u=o.split("|"),c=u[0],f=u[1];a&&this.emit("failedLoading",c,f,a),s&&this.store.addResourceBundle(c,f,s),this.state[o]=a?-1:2;var p={};this.queue.forEach(function(h){BT(h.loaded,[c],f),rL(h,o),a&&h.errors.push(a),h.pendingCount===0&&!h.done&&(Object.keys(h.loaded).forEach(function(_){p[_]||(p[_]={});var v=h.loaded[_];v.length&&v.forEach(function(y){p[_][y]===void 0&&(p[_][y]=!0)})}),h.done=!0,h.errors.length?h.callback(h.errors):h.callback())}),this.emit("loaded",p),this.queue=this.queue.filter(function(h){return!h.done})}},{key:"read",value:function(o,a,s){var u=this,c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,f=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,p=arguments.length>5?arguments[5]:void 0;if(!o.length)return p(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:o,ns:a,fcName:s,tried:c,wait:f,callback:p});return}this.readingCalls++;var h=function(b,P){if(u.readingCalls--,u.waitingReads.length>0){var g=u.waitingReads.shift();u.read(g.lng,g.ns,g.fcName,g.tried,g.wait,g.callback)}if(b&&P&&c<u.maxRetries){setTimeout(function(){u.read.call(u,o,a,s,c+1,f*2,p)},f);return}p(b,P)},_=this.backend[s].bind(this.backend);if(_.length===2){try{var v=_(o,a);v&&typeof v.then=="function"?v.then(function(y){return h(null,y)}).catch(h):h(null,v)}catch(y){h(y)}return}return _(o,a,h)}},{key:"prepareLoading",value:function(o,a){var s=this,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},c=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),c&&c();typeof o=="string"&&(o=this.languageUtils.toResolveHierarchy(o)),typeof a=="string"&&(a=[a]);var f=this.queueLoad(o,a,u,c);if(!f.toLoad.length)return f.pending.length||c(),null;f.toLoad.forEach(function(p){s.loadOne(p)})}},{key:"load",value:function(o,a,s){this.prepareLoading(o,a,{},s)}},{key:"reload",value:function(o,a,s){this.prepareLoading(o,a,{reload:!0},s)}},{key:"loadOne",value:function(o){var a=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",u=o.split("|"),c=u[0],f=u[1];this.read(c,f,"read",void 0,void 0,function(p,h){p&&a.logger.warn("".concat(s,"loading namespace ").concat(f," for language ").concat(c," failed"),p),!p&&h&&a.logger.log("".concat(s,"loaded namespace ").concat(f," for language ").concat(c),h),a.loaded(o,p,h)})}},{key:"saveMissing",value:function(o,a,s,u,c){var f=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},p=arguments.length>6&&arguments[6]!==void 0?arguments[6]:function(){};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(a)){this.logger.warn('did not save key "'.concat(s,'" as the namespace "').concat(a,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(s==null||s==="")){if(this.backend&&this.backend.create){var h=Xy(Xy({},f),{},{isUpdate:c}),_=this.backend.create.bind(this.backend);if(_.length<6)try{var v;_.length===5?v=_(o,a,s,u,h):v=_(o,a,s,u),v&&typeof v.then=="function"?v.then(function(y){return p(null,y)}).catch(p):p(null,v)}catch(y){p(y)}else _(o,a,s,u,p,h)}!o||!o[0]||this.store.addResource(o[0],a,s,u)}}}]),n}(Oo);function eb(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){var n={};if(ln(t[1])==="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),ln(t[2])==="object"||ln(t[3])==="object"){var r=t[3]||t[2];Object.keys(r).forEach(function(o){n[o]=r[o]})}return n},interpolation:{escapeValue:!0,format:function(t,n,r,o){return t},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function tb(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function nb(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function tr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?nb(Object(n),!0).forEach(function(r){Zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nb(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function iL(e){var t=aL();return function(){var r=pr(e),o;if(t){var a=pr(this).constructor;o=Reflect.construct(r,arguments,a)}else o=r.apply(this,arguments);return wl(this,o)}}function aL(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function uu(){}function sL(e){var t=Object.getOwnPropertyNames(Object.getPrototypeOf(e));t.forEach(function(n){typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}var kc=function(e){Bd(n,e);var t=iL(n);function n(){var r,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;if(qn(this,n),r=t.call(this),Md&&Oo.call(mo(r)),r.options=tb(o),r.services={},r.logger=lr,r.modules={external:[]},sL(mo(r)),a&&!r.isInitialized&&!o.isClone){if(!r.options.initImmediate)return r.init(o,a),wl(r,mo(r));setTimeout(function(){r.init(o,a)},0)}return r}return Kn(n,[{key:"init",value:function(){var o=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;typeof a=="function"&&(s=a,a={}),!a.defaultNS&&a.defaultNS!==!1&&a.ns&&(typeof a.ns=="string"?a.defaultNS=a.ns:a.ns.indexOf("translation")<0&&(a.defaultNS=a.ns[0]));var u=eb();this.options=tr(tr(tr({},u),this.options),tb(a)),this.options.compatibilityAPI!=="v1"&&(this.options.interpolation=tr(tr({},u.interpolation),this.options.interpolation)),a.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=a.keySeparator),a.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=a.nsSeparator);function c(g){return g?typeof g=="function"?new g:g:null}if(!this.options.isClone){this.modules.logger?lr.init(c(this.modules.logger),this.options):lr.init(null,this.options);var f;this.modules.formatter?f=this.modules.formatter:typeof Intl<"u"&&(f=eL);var p=new qy(this.options);this.store=new HT(this.options.resources,this.options);var h=this.services;h.logger=lr,h.resourceStore=this.store,h.languageUtils=p,h.pluralResolver=new JT(p,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),f&&(!this.options.interpolation.format||this.options.interpolation.format===u.interpolation.format)&&(h.formatter=c(f),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new YT(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new oL(c(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(g){for(var x=arguments.length,S=new Array(x>1?x-1:0),E=1;E<x;E++)S[E-1]=arguments[E];o.emit.apply(o,[g].concat(S))}),this.modules.languageDetector&&(h.languageDetector=c(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=c(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new Zy(this.services,this.options),this.translator.on("*",function(g){for(var x=arguments.length,S=new Array(x>1?x-1:0),E=1;E<x;E++)S[E-1]=arguments[E];o.emit.apply(o,[g].concat(S))}),this.modules.external.forEach(function(g){g.init&&g.init(o)})}if(this.format=this.options.interpolation.format,s||(s=uu),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var _=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);_.length>0&&_[0]!=="dev"&&(this.options.lng=_[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined");var v=["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"];v.forEach(function(g){o[g]=function(){var x;return(x=o.store)[g].apply(x,arguments)}});var y=["addResource","addResources","addResourceBundle","removeResourceBundle"];y.forEach(function(g){o[g]=function(){var x;return(x=o.store)[g].apply(x,arguments),o}});var b=ds(),P=function(){var x=function(E,T){o.isInitialized&&!o.initializedStoreOnce&&o.logger.warn("init: i18next is already initialized. You should call init just once!"),o.isInitialized=!0,o.options.isClone||o.logger.log("initialized",o.options),o.emit("initialized",o.options),b.resolve(T),s(E,T)};if(o.languages&&o.options.compatibilityAPI!=="v1"&&!o.isInitialized)return x(null,o.t.bind(o));o.changeLanguage(o.options.lng,x)};return this.options.resources||!this.options.initImmediate?P():setTimeout(P,0),b}},{key:"loadResources",value:function(o){var a=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:uu,u=s,c=typeof o=="string"?o:this.language;if(typeof o=="function"&&(u=o),!this.options.resources||this.options.partialBundledLanguages){if(c&&c.toLowerCase()==="cimode")return u();var f=[],p=function(v){if(v){var y=a.services.languageUtils.toResolveHierarchy(v);y.forEach(function(b){f.indexOf(b)<0&&f.push(b)})}};if(c)p(c);else{var h=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);h.forEach(function(_){return p(_)})}this.options.preload&&this.options.preload.forEach(function(_){return p(_)}),this.services.backendConnector.load(f,this.options.ns,function(_){!_&&!a.resolvedLanguage&&a.language&&a.setResolvedLanguage(a.language),u(_)})}else u(null)}},{key:"reloadResources",value:function(o,a,s){var u=ds();return o||(o=this.languages),a||(a=this.options.ns),s||(s=uu),this.services.backendConnector.reload(o,a,function(c){u.resolve(),s(c)}),u}},{key:"use",value:function(o){if(!o)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!o.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return o.type==="backend"&&(this.modules.backend=o),(o.type==="logger"||o.log&&o.warn&&o.error)&&(this.modules.logger=o),o.type==="languageDetector"&&(this.modules.languageDetector=o),o.type==="i18nFormat"&&(this.modules.i18nFormat=o),o.type==="postProcessor"&&cS.addPostProcessor(o),o.type==="formatter"&&(this.modules.formatter=o),o.type==="3rdParty"&&this.modules.external.push(o),this}},{key:"setResolvedLanguage",value:function(o){if(!(!o||!this.languages)&&!(["cimode","dev"].indexOf(o)>-1))for(var a=0;a<this.languages.length;a++){var s=this.languages[a];if(!(["cimode","dev"].indexOf(s)>-1)&&this.store.hasLanguageSomeTranslations(s)){this.resolvedLanguage=s;break}}}},{key:"changeLanguage",value:function(o,a){var s=this;this.isLanguageChangingTo=o;var u=ds();this.emit("languageChanging",o);var c=function(_){s.language=_,s.languages=s.services.languageUtils.toResolveHierarchy(_),s.resolvedLanguage=void 0,s.setResolvedLanguage(_)},f=function(_,v){v?(c(v),s.translator.changeLanguage(v),s.isLanguageChangingTo=void 0,s.emit("languageChanged",v),s.logger.log("languageChanged",v)):s.isLanguageChangingTo=void 0,u.resolve(function(){return s.t.apply(s,arguments)}),a&&a(_,function(){return s.t.apply(s,arguments)})},p=function(_){!o&&!_&&s.services.languageDetector&&(_=[]);var v=typeof _=="string"?_:s.services.languageUtils.getBestMatchFromCodes(_);v&&(s.language||c(v),s.translator.language||s.translator.changeLanguage(v),s.services.languageDetector&&s.services.languageDetector.cacheUserLanguage&&s.services.languageDetector.cacheUserLanguage(v)),s.loadResources(v,function(y){f(y,v)})};return!o&&this.services.languageDetector&&!this.services.languageDetector.async?p(this.services.languageDetector.detect()):!o&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(p):this.services.languageDetector.detect(p):p(o),u}},{key:"getFixedT",value:function(o,a,s){var u=this,c=function f(p,h){var _;if(ln(h)!=="object"){for(var v=arguments.length,y=new Array(v>2?v-2:0),b=2;b<v;b++)y[b-2]=arguments[b];_=u.options.overloadTranslationOptionHandler([p,h].concat(y))}else _=tr({},h);_.lng=_.lng||f.lng,_.lngs=_.lngs||f.lngs,_.ns=_.ns||f.ns,_.keyPrefix=_.keyPrefix||s||f.keyPrefix;var P=u.options.keySeparator||".",g;return _.keyPrefix&&Array.isArray(p)?g=p.map(function(x){return"".concat(_.keyPrefix).concat(P).concat(x)}):g=_.keyPrefix?"".concat(_.keyPrefix).concat(P).concat(p):p,u.t(g,_)};return typeof o=="string"?c.lng=o:c.lngs=o,c.ns=a,c.keyPrefix=s,c}},{key:"t",value:function(){var o;return this.translator&&(o=this.translator).translate.apply(o,arguments)}},{key:"exists",value:function(){var o;return this.translator&&(o=this.translator).exists.apply(o,arguments)}},{key:"setDefaultNamespace",value:function(o){this.options.defaultNS=o}},{key:"hasLoadedNamespace",value:function(o){var a=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var u=s.lng||this.resolvedLanguage||this.languages[0],c=this.options?this.options.fallbackLng:!1,f=this.languages[this.languages.length-1];if(u.toLowerCase()==="cimode")return!0;var p=function(v,y){var b=a.services.backendConnector.state["".concat(v,"|").concat(y)];return b===-1||b===2};if(s.precheck){var h=s.precheck(this,p);if(h!==void 0)return h}return!!(this.hasResourceBundle(u,o)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||p(u,o)&&(!c||p(f,o)))}},{key:"loadNamespaces",value:function(o,a){var s=this,u=ds();return this.options.ns?(typeof o=="string"&&(o=[o]),o.forEach(function(c){s.options.ns.indexOf(c)<0&&s.options.ns.push(c)}),this.loadResources(function(c){u.resolve(),a&&a(c)}),u):(a&&a(),Promise.resolve())}},{key:"loadLanguages",value:function(o,a){var s=ds();typeof o=="string"&&(o=[o]);var u=this.options.preload||[],c=o.filter(function(f){return u.indexOf(f)<0});return c.length?(this.options.preload=u.concat(c),this.loadResources(function(f){s.resolve(),a&&a(f)}),s):(a&&a(),Promise.resolve())}},{key:"dir",value:function(o){if(o||(o=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!o)return"rtl";var a=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],s=this.services&&this.services.languageUtils||new qy(eb());return a.indexOf(s.getLanguagePartFromCode(o))>-1||o.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var o=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:uu,u=tr(tr(tr({},this.options),a),{isClone:!0}),c=new n(u);(a.debug!==void 0||a.prefix!==void 0)&&(c.logger=c.logger.clone(a));var f=["store","services","language"];return f.forEach(function(p){c[p]=o[p]}),c.services=tr({},this.services),c.services.utils={hasLoadedNamespace:c.hasLoadedNamespace.bind(c)},c.translator=new Zy(c.services,c.options),c.translator.on("*",function(p){for(var h=arguments.length,_=new Array(h>1?h-1:0),v=1;v<h;v++)_[v-1]=arguments[v];c.emit.apply(c,[p].concat(_))}),c.init(u,s),c.translator.options=c.options,c.translator.backendConnector.services.utils={hasLoadedNamespace:c.hasLoadedNamespace.bind(c)},c}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),n}(Oo);Zn(kc,"createInstance",function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new kc(e,t)});var Ut=kc.createInstance();Ut.createInstance=kc.createInstance;Ut.createInstance;Ut.dir;Ut.init;Ut.loadResources;Ut.reloadResources;var lL=Ut.use;Ut.changeLanguage;Ut.getFixedT;var Ho=Ut.t;Ut.exists;Ut.setDefaultNamespace;Ut.hasLoadedNamespace;Ut.loadNamespaces;Ut.loadLanguages;const th=()=>Q.jsxs("div",{children:[Q.jsx("h1",{children:"Det skjedde en feil"}),Q.jsx("p",{children:Q.jsx("i",{children:"Vennligst gå tilbake i nettleseren eller refresh siden"})})]}),uL="2.25rem",cL="3.75rem",dL="540px";var $p={},fL={get exports(){return $p},set exports(e){$p=e}};/* @preserve
 * Leaflet 1.9.3, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2022 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(e,t){(function(n,r){r(t)})(Hi,function(n){var r="1.9.3";function o(i){var l,d,m,w;for(d=1,m=arguments.length;d<m;d++){w=arguments[d];for(l in w)i[l]=w[l]}return i}var a=Object.create||function(){function i(){}return function(l){return i.prototype=l,new i}}();function s(i,l){var d=Array.prototype.slice;if(i.bind)return i.bind.apply(i,d.call(arguments,1));var m=d.call(arguments,2);return function(){return i.apply(l,m.length?m.concat(d.call(arguments)):arguments)}}var u=0;function c(i){return"_leaflet_id"in i||(i._leaflet_id=++u),i._leaflet_id}function f(i,l,d){var m,w,C,I;return I=function(){m=!1,w&&(C.apply(d,w),w=!1)},C=function(){m?w=arguments:(i.apply(d,arguments),setTimeout(I,l),m=!0)},C}function p(i,l,d){var m=l[1],w=l[0],C=m-w;return i===m&&d?i:((i-w)%C+C)%C+w}function h(){return!1}function _(i,l){if(l===!1)return i;var d=Math.pow(10,l===void 0?6:l);return Math.round(i*d)/d}function v(i){return i.trim?i.trim():i.replace(/^\s+|\s+$/g,"")}function y(i){return v(i).split(/\s+/)}function b(i,l){Object.prototype.hasOwnProperty.call(i,"options")||(i.options=i.options?a(i.options):{});for(var d in l)i.options[d]=l[d];return i.options}function P(i,l,d){var m=[];for(var w in i)m.push(encodeURIComponent(d?w.toUpperCase():w)+"="+encodeURIComponent(i[w]));return(!l||l.indexOf("?")===-1?"?":"&")+m.join("&")}var g=/\{ *([\w_ -]+) *\}/g;function x(i,l){return i.replace(g,function(d,m){var w=l[m];if(w===void 0)throw new Error("No value provided for variable "+d);return typeof w=="function"&&(w=w(l)),w})}var S=Array.isArray||function(i){return Object.prototype.toString.call(i)==="[object Array]"};function E(i,l){for(var d=0;d<i.length;d++)if(i[d]===l)return d;return-1}var T="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function A(i){return window["webkit"+i]||window["moz"+i]||window["ms"+i]}var N=0;function D(i){var l=+new Date,d=Math.max(0,16-(l-N));return N=l+d,window.setTimeout(i,d)}var W=window.requestAnimationFrame||A("RequestAnimationFrame")||D,B=window.cancelAnimationFrame||A("CancelAnimationFrame")||A("CancelRequestAnimationFrame")||function(i){window.clearTimeout(i)};function H(i,l,d){if(d&&W===D)i.call(l);else return W.call(window,s(i,l))}function G(i){i&&B.call(window,i)}var q={__proto__:null,extend:o,create:a,bind:s,get lastId(){return u},stamp:c,throttle:f,wrapNum:p,falseFn:h,formatNum:_,trim:v,splitWords:y,setOptions:b,getParamString:P,template:x,isArray:S,indexOf:E,emptyImageUrl:T,requestFn:W,cancelFn:B,requestAnimFrame:H,cancelAnimFrame:G};function $(){}$.extend=function(i){var l=function(){b(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},d=l.__super__=this.prototype,m=a(d);m.constructor=l,l.prototype=m;for(var w in this)Object.prototype.hasOwnProperty.call(this,w)&&w!=="prototype"&&w!=="__super__"&&(l[w]=this[w]);return i.statics&&o(l,i.statics),i.includes&&(re(i.includes),o.apply(null,[m].concat(i.includes))),o(m,i),delete m.statics,delete m.includes,m.options&&(m.options=d.options?a(d.options):{},o(m.options,i.options)),m._initHooks=[],m.callInitHooks=function(){if(!this._initHooksCalled){d.callInitHooks&&d.callInitHooks.call(this),this._initHooksCalled=!0;for(var C=0,I=m._initHooks.length;C<I;C++)m._initHooks[C].call(this)}},l},$.include=function(i){var l=this.prototype.options;return o(this.prototype,i),i.options&&(this.prototype.options=l,this.mergeOptions(i.options)),this},$.mergeOptions=function(i){return o(this.prototype.options,i),this},$.addInitHook=function(i){var l=Array.prototype.slice.call(arguments,1),d=typeof i=="function"?i:function(){this[i].apply(this,l)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(d),this};function re(i){if(!(typeof L>"u"||!L||!L.Mixin)){i=S(i)?i:[i];for(var l=0;l<i.length;l++)i[l]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var Z={on:function(i,l,d){if(typeof i=="object")for(var m in i)this._on(m,i[m],l);else{i=y(i);for(var w=0,C=i.length;w<C;w++)this._on(i[w],l,d)}return this},off:function(i,l,d){if(!arguments.length)delete this._events;else if(typeof i=="object")for(var m in i)this._off(m,i[m],l);else{i=y(i);for(var w=arguments.length===1,C=0,I=i.length;C<I;C++)w?this._off(i[C]):this._off(i[C],l,d)}return this},_on:function(i,l,d,m){if(typeof l!="function"){console.warn("wrong listener type: "+typeof l);return}if(this._listens(i,l,d)===!1){d===this&&(d=void 0);var w={fn:l,ctx:d};m&&(w.once=!0),this._events=this._events||{},this._events[i]=this._events[i]||[],this._events[i].push(w)}},_off:function(i,l,d){var m,w,C;if(this._events&&(m=this._events[i],!!m)){if(arguments.length===1){if(this._firingCount)for(w=0,C=m.length;w<C;w++)m[w].fn=h;delete this._events[i];return}if(typeof l!="function"){console.warn("wrong listener type: "+typeof l);return}var I=this._listens(i,l,d);if(I!==!1){var F=m[I];this._firingCount&&(F.fn=h,this._events[i]=m=m.slice()),m.splice(I,1)}}},fire:function(i,l,d){if(!this.listens(i,d))return this;var m=o({},l,{type:i,target:this,sourceTarget:l&&l.sourceTarget||this});if(this._events){var w=this._events[i];if(w){this._firingCount=this._firingCount+1||1;for(var C=0,I=w.length;C<I;C++){var F=w[C],K=F.fn;F.once&&this.off(i,K,F.ctx),K.call(F.ctx||this,m)}this._firingCount--}}return d&&this._propagateEvent(m),this},listens:function(i,l,d,m){typeof i!="string"&&console.warn('"string" type argument expected');var w=l;typeof l!="function"&&(m=!!l,w=void 0,d=void 0);var C=this._events&&this._events[i];if(C&&C.length&&this._listens(i,w,d)!==!1)return!0;if(m){for(var I in this._eventParents)if(this._eventParents[I].listens(i,l,d,m))return!0}return!1},_listens:function(i,l,d){if(!this._events)return!1;var m=this._events[i]||[];if(!l)return!!m.length;d===this&&(d=void 0);for(var w=0,C=m.length;w<C;w++)if(m[w].fn===l&&m[w].ctx===d)return w;return!1},once:function(i,l,d){if(typeof i=="object")for(var m in i)this._on(m,i[m],l,!0);else{i=y(i);for(var w=0,C=i.length;w<C;w++)this._on(i[w],l,d,!0)}return this},addEventParent:function(i){return this._eventParents=this._eventParents||{},this._eventParents[c(i)]=i,this},removeEventParent:function(i){return this._eventParents&&delete this._eventParents[c(i)],this},_propagateEvent:function(i){for(var l in this._eventParents)this._eventParents[l].fire(i.type,o({layer:i.target,propagatedFrom:i.target},i),!0)}};Z.addEventListener=Z.on,Z.removeEventListener=Z.clearAllEventListeners=Z.off,Z.addOneTimeEventListener=Z.once,Z.fireEvent=Z.fire,Z.hasEventListeners=Z.listens;var se=$.extend(Z);function O(i,l,d){this.x=d?Math.round(i):i,this.y=d?Math.round(l):l}var Y=Math.trunc||function(i){return i>0?Math.floor(i):Math.ceil(i)};O.prototype={clone:function(){return new O(this.x,this.y)},add:function(i){return this.clone()._add(U(i))},_add:function(i){return this.x+=i.x,this.y+=i.y,this},subtract:function(i){return this.clone()._subtract(U(i))},_subtract:function(i){return this.x-=i.x,this.y-=i.y,this},divideBy:function(i){return this.clone()._divideBy(i)},_divideBy:function(i){return this.x/=i,this.y/=i,this},multiplyBy:function(i){return this.clone()._multiplyBy(i)},_multiplyBy:function(i){return this.x*=i,this.y*=i,this},scaleBy:function(i){return new O(this.x*i.x,this.y*i.y)},unscaleBy:function(i){return new O(this.x/i.x,this.y/i.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Y(this.x),this.y=Y(this.y),this},distanceTo:function(i){i=U(i);var l=i.x-this.x,d=i.y-this.y;return Math.sqrt(l*l+d*d)},equals:function(i){return i=U(i),i.x===this.x&&i.y===this.y},contains:function(i){return i=U(i),Math.abs(i.x)<=Math.abs(this.x)&&Math.abs(i.y)<=Math.abs(this.y)},toString:function(){return"Point("+_(this.x)+", "+_(this.y)+")"}};function U(i,l,d){return i instanceof O?i:S(i)?new O(i[0],i[1]):i==null?i:typeof i=="object"&&"x"in i&&"y"in i?new O(i.x,i.y):new O(i,l,d)}function R(i,l){if(i)for(var d=l?[i,l]:i,m=0,w=d.length;m<w;m++)this.extend(d[m])}R.prototype={extend:function(i){var l,d;if(!i)return this;if(i instanceof O||typeof i[0]=="number"||"x"in i)l=d=U(i);else if(i=z(i),l=i.min,d=i.max,!l||!d)return this;return!this.min&&!this.max?(this.min=l.clone(),this.max=d.clone()):(this.min.x=Math.min(l.x,this.min.x),this.max.x=Math.max(d.x,this.max.x),this.min.y=Math.min(l.y,this.min.y),this.max.y=Math.max(d.y,this.max.y)),this},getCenter:function(i){return U((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,i)},getBottomLeft:function(){return U(this.min.x,this.max.y)},getTopRight:function(){return U(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(i){var l,d;return typeof i[0]=="number"||i instanceof O?i=U(i):i=z(i),i instanceof R?(l=i.min,d=i.max):l=d=i,l.x>=this.min.x&&d.x<=this.max.x&&l.y>=this.min.y&&d.y<=this.max.y},intersects:function(i){i=z(i);var l=this.min,d=this.max,m=i.min,w=i.max,C=w.x>=l.x&&m.x<=d.x,I=w.y>=l.y&&m.y<=d.y;return C&&I},overlaps:function(i){i=z(i);var l=this.min,d=this.max,m=i.min,w=i.max,C=w.x>l.x&&m.x<d.x,I=w.y>l.y&&m.y<d.y;return C&&I},isValid:function(){return!!(this.min&&this.max)},pad:function(i){var l=this.min,d=this.max,m=Math.abs(l.x-d.x)*i,w=Math.abs(l.y-d.y)*i;return z(U(l.x-m,l.y-w),U(d.x+m,d.y+w))},equals:function(i){return i?(i=z(i),this.min.equals(i.getTopLeft())&&this.max.equals(i.getBottomRight())):!1}};function z(i,l){return!i||i instanceof R?i:new R(i,l)}function M(i,l){if(i)for(var d=l?[i,l]:i,m=0,w=d.length;m<w;m++)this.extend(d[m])}M.prototype={extend:function(i){var l=this._southWest,d=this._northEast,m,w;if(i instanceof te)m=i,w=i;else if(i instanceof M){if(m=i._southWest,w=i._northEast,!m||!w)return this}else return i?this.extend(ie(i)||V(i)):this;return!l&&!d?(this._southWest=new te(m.lat,m.lng),this._northEast=new te(w.lat,w.lng)):(l.lat=Math.min(m.lat,l.lat),l.lng=Math.min(m.lng,l.lng),d.lat=Math.max(w.lat,d.lat),d.lng=Math.max(w.lng,d.lng)),this},pad:function(i){var l=this._southWest,d=this._northEast,m=Math.abs(l.lat-d.lat)*i,w=Math.abs(l.lng-d.lng)*i;return new M(new te(l.lat-m,l.lng-w),new te(d.lat+m,d.lng+w))},getCenter:function(){return new te((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new te(this.getNorth(),this.getWest())},getSouthEast:function(){return new te(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(i){typeof i[0]=="number"||i instanceof te||"lat"in i?i=ie(i):i=V(i);var l=this._southWest,d=this._northEast,m,w;return i instanceof M?(m=i.getSouthWest(),w=i.getNorthEast()):m=w=i,m.lat>=l.lat&&w.lat<=d.lat&&m.lng>=l.lng&&w.lng<=d.lng},intersects:function(i){i=V(i);var l=this._southWest,d=this._northEast,m=i.getSouthWest(),w=i.getNorthEast(),C=w.lat>=l.lat&&m.lat<=d.lat,I=w.lng>=l.lng&&m.lng<=d.lng;return C&&I},overlaps:function(i){i=V(i);var l=this._southWest,d=this._northEast,m=i.getSouthWest(),w=i.getNorthEast(),C=w.lat>l.lat&&m.lat<d.lat,I=w.lng>l.lng&&m.lng<d.lng;return C&&I},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(i,l){return i?(i=V(i),this._southWest.equals(i.getSouthWest(),l)&&this._northEast.equals(i.getNorthEast(),l)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function V(i,l){return i instanceof M?i:new M(i,l)}function te(i,l,d){if(isNaN(i)||isNaN(l))throw new Error("Invalid LatLng object: ("+i+", "+l+")");this.lat=+i,this.lng=+l,d!==void 0&&(this.alt=+d)}te.prototype={equals:function(i,l){if(!i)return!1;i=ie(i);var d=Math.max(Math.abs(this.lat-i.lat),Math.abs(this.lng-i.lng));return d<=(l===void 0?1e-9:l)},toString:function(i){return"LatLng("+_(this.lat,i)+", "+_(this.lng,i)+")"},distanceTo:function(i){return be.distance(this,ie(i))},wrap:function(){return be.wrapLatLng(this)},toBounds:function(i){var l=180*i/40075017,d=l/Math.cos(Math.PI/180*this.lat);return V([this.lat-l,this.lng-d],[this.lat+l,this.lng+d])},clone:function(){return new te(this.lat,this.lng,this.alt)}};function ie(i,l,d){return i instanceof te?i:S(i)&&typeof i[0]!="object"?i.length===3?new te(i[0],i[1],i[2]):i.length===2?new te(i[0],i[1]):null:i==null?i:typeof i=="object"&&"lat"in i?new te(i.lat,"lng"in i?i.lng:i.lon,i.alt):l===void 0?null:new te(i,l,d)}var fe={latLngToPoint:function(i,l){var d=this.projection.project(i),m=this.scale(l);return this.transformation._transform(d,m)},pointToLatLng:function(i,l){var d=this.scale(l),m=this.transformation.untransform(i,d);return this.projection.unproject(m)},project:function(i){return this.projection.project(i)},unproject:function(i){return this.projection.unproject(i)},scale:function(i){return 256*Math.pow(2,i)},zoom:function(i){return Math.log(i/256)/Math.LN2},getProjectedBounds:function(i){if(this.infinite)return null;var l=this.projection.bounds,d=this.scale(i),m=this.transformation.transform(l.min,d),w=this.transformation.transform(l.max,d);return new R(m,w)},infinite:!1,wrapLatLng:function(i){var l=this.wrapLng?p(i.lng,this.wrapLng,!0):i.lng,d=this.wrapLat?p(i.lat,this.wrapLat,!0):i.lat,m=i.alt;return new te(d,l,m)},wrapLatLngBounds:function(i){var l=i.getCenter(),d=this.wrapLatLng(l),m=l.lat-d.lat,w=l.lng-d.lng;if(m===0&&w===0)return i;var C=i.getSouthWest(),I=i.getNorthEast(),F=new te(C.lat-m,C.lng-w),K=new te(I.lat-m,I.lng-w);return new M(F,K)}},be=o({},fe,{wrapLng:[-180,180],R:6371e3,distance:function(i,l){var d=Math.PI/180,m=i.lat*d,w=l.lat*d,C=Math.sin((l.lat-i.lat)*d/2),I=Math.sin((l.lng-i.lng)*d/2),F=C*C+Math.cos(m)*Math.cos(w)*I*I,K=2*Math.atan2(Math.sqrt(F),Math.sqrt(1-F));return this.R*K}}),Je=6378137,Ze={R:Je,MAX_LATITUDE:85.0511287798,project:function(i){var l=Math.PI/180,d=this.MAX_LATITUDE,m=Math.max(Math.min(d,i.lat),-d),w=Math.sin(m*l);return new O(this.R*i.lng*l,this.R*Math.log((1+w)/(1-w))/2)},unproject:function(i){var l=180/Math.PI;return new te((2*Math.atan(Math.exp(i.y/this.R))-Math.PI/2)*l,i.x*l/this.R)},bounds:function(){var i=Je*Math.PI;return new R([-i,-i],[i,i])}()};function Re(i,l,d,m){if(S(i)){this._a=i[0],this._b=i[1],this._c=i[2],this._d=i[3];return}this._a=i,this._b=l,this._c=d,this._d=m}Re.prototype={transform:function(i,l){return this._transform(i.clone(),l)},_transform:function(i,l){return l=l||1,i.x=l*(this._a*i.x+this._b),i.y=l*(this._c*i.y+this._d),i},untransform:function(i,l){return l=l||1,new O((i.x/l-this._b)/this._a,(i.y/l-this._d)/this._c)}};function le(i,l,d,m){return new Re(i,l,d,m)}var me=o({},be,{code:"EPSG:3857",projection:Ze,transformation:function(){var i=.5/(Math.PI*Ze.R);return le(i,.5,-i,.5)}()}),ee=o({},me,{code:"EPSG:900913"});function ce(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function de(i,l){var d="",m,w,C,I,F,K;for(m=0,C=i.length;m<C;m++){for(F=i[m],w=0,I=F.length;w<I;w++)K=F[w],d+=(w?"L":"M")+K.x+" "+K.y;d+=l?pe.svg?"z":"x":""}return d||"M0 0"}var _e=document.documentElement.style,ke="ActiveXObject"in window,Ne=ke&&!document.addEventListener,$e="msLaunchUri"in navigator&&!("documentMode"in document),Ye=Me("webkit"),tt=Me("android"),qt=Me("android 2")||Me("android 3"),ki=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),No=tt&&Me("Google")&&ki<537&&!("AudioNode"in window),En=!!window.opera,Qn=!$e&&Me("chrome"),_r=Me("gecko")&&!Ye&&!En&&!ke,Bo=!Qn&&Me("safari"),J=Me("phantom"),X="OTransition"in _e,ae=navigator.platform.indexOf("Win")===0,ge=ke&&"transition"in _e,ye="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!qt,Se="MozPerspective"in _e,Ce=!window.L_DISABLE_3D&&(ge||ye||Se)&&!X&&!J,we=typeof orientation<"u"||Me("mobile"),xe=we&&Ye,Be=we&&ye,We=!window.PointerEvent&&window.MSPointerEvent,xt=!!(window.PointerEvent||We),ht="ontouchstart"in window||!!window.TouchEvent,_t=!window.L_NO_TOUCH&&(ht||xt),Kt=we&&En,Mo=we&&_r,ja=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Pi=function(){var i=!1;try{var l=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("testPassiveEventSupport",h,l),window.removeEventListener("testPassiveEventSupport",h,l)}catch{}return i}(),Gn=function(){return!!document.createElement("canvas").getContext}(),Ur=!!(document.createElementNS&&ce("svg").createSVGRect),Fa=!!Ur&&function(){var i=document.createElement("div");return i.innerHTML="<svg/>",(i.firstChild&&i.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),$a=!Ur&&function(){try{var i=document.createElement("div");i.innerHTML='<v:shape adj="1"/>';var l=i.firstChild;return l.style.behavior="url(#default#VML)",l&&typeof l.adj=="object"}catch{return!1}}(),Ua=navigator.platform.indexOf("Mac")===0,Ci=navigator.platform.indexOf("Linux")===0;function Me(i){return navigator.userAgent.toLowerCase().indexOf(i)>=0}var pe={ie:ke,ielt9:Ne,edge:$e,webkit:Ye,android:tt,android23:qt,androidStock:No,opera:En,chrome:Qn,gecko:_r,safari:Bo,phantom:J,opera12:X,win:ae,ie3d:ge,webkit3d:ye,gecko3d:Se,any3d:Ce,mobile:we,mobileWebkit:xe,mobileWebkit3d:Be,msPointer:We,pointer:xt,touch:_t,touchNative:ht,mobileOpera:Kt,mobileGecko:Mo,retina:ja,passiveEvents:Pi,canvas:Gn,svg:Ur,vml:$a,inlineSvg:Fa,mac:Ua,linux:Ci},gr=pe.msPointer?"MSPointerDown":"pointerdown",Ei=pe.msPointer?"MSPointerMove":"pointermove",It=pe.msPointer?"MSPointerUp":"pointerup",Oi=pe.msPointer?"MSPointerCancel":"pointercancel",Ri={touchstart:gr,touchmove:Ei,touchend:It,touchcancel:Oi},Pl={touchstart:lP,touchmove:Cl,touchend:Cl,touchcancel:Cl},Ti={},ig=!1;function rP(i,l,d){return l==="touchstart"&&sP(),Pl[l]?(d=Pl[l].bind(this,d),i.addEventListener(Ri[l],d,!1),d):(console.warn("wrong event specified:",l),h)}function oP(i,l,d){if(!Ri[l]){console.warn("wrong event specified:",l);return}i.removeEventListener(Ri[l],d,!1)}function iP(i){Ti[i.pointerId]=i}function aP(i){Ti[i.pointerId]&&(Ti[i.pointerId]=i)}function ag(i){delete Ti[i.pointerId]}function sP(){ig||(document.addEventListener(gr,iP,!0),document.addEventListener(Ei,aP,!0),document.addEventListener(It,ag,!0),document.addEventListener(Oi,ag,!0),ig=!0)}function Cl(i,l){if(l.pointerType!==(l.MSPOINTER_TYPE_MOUSE||"mouse")){l.touches=[];for(var d in Ti)l.touches.push(Ti[d]);l.changedTouches=[l],i(l)}}function lP(i,l){l.MSPOINTER_TYPE_TOUCH&&l.pointerType===l.MSPOINTER_TYPE_TOUCH&&Rt(l),Cl(i,l)}function uP(i){var l={},d,m;for(m in i)d=i[m],l[m]=d&&d.bind?d.bind(i):d;return i=l,l.type="dblclick",l.detail=2,l.isTrusted=!1,l._simulated=!0,l}var cP=200;function dP(i,l){i.addEventListener("dblclick",l);var d=0,m;function w(C){if(C.detail!==1){m=C.detail;return}if(!(C.pointerType==="mouse"||C.sourceCapabilities&&!C.sourceCapabilities.firesTouchEvents)){var I=dg(C);if(!(I.some(function(K){return K instanceof HTMLLabelElement&&K.attributes.for})&&!I.some(function(K){return K instanceof HTMLInputElement||K instanceof HTMLSelectElement}))){var F=Date.now();F-d<=cP?(m++,m===2&&l(uP(C))):m=1,d=F}}}return i.addEventListener("click",w),{dblclick:l,simDblclick:w}}function fP(i,l){i.removeEventListener("dblclick",l.dblclick),i.removeEventListener("click",l.simDblclick)}var Yd=Rl(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Wa=Rl(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),sg=Wa==="webkitTransition"||Wa==="OTransition"?Wa+"End":"transitionend";function lg(i){return typeof i=="string"?document.getElementById(i):i}function Ha(i,l){var d=i.style[l]||i.currentStyle&&i.currentStyle[l];if((!d||d==="auto")&&document.defaultView){var m=document.defaultView.getComputedStyle(i,null);d=m?m[l]:null}return d==="auto"?null:d}function Ue(i,l,d){var m=document.createElement(i);return m.className=l||"",d&&d.appendChild(m),m}function at(i){var l=i.parentNode;l&&l.removeChild(i)}function El(i){for(;i.firstChild;)i.removeChild(i.firstChild)}function Li(i){var l=i.parentNode;l&&l.lastChild!==i&&l.appendChild(i)}function Ai(i){var l=i.parentNode;l&&l.firstChild!==i&&l.insertBefore(i,l.firstChild)}function Xd(i,l){if(i.classList!==void 0)return i.classList.contains(l);var d=Ol(i);return d.length>0&&new RegExp("(^|\\s)"+l+"(\\s|$)").test(d)}function Oe(i,l){if(i.classList!==void 0)for(var d=y(l),m=0,w=d.length;m<w;m++)i.classList.add(d[m]);else if(!Xd(i,l)){var C=Ol(i);ef(i,(C?C+" ":"")+l)}}function pt(i,l){i.classList!==void 0?i.classList.remove(l):ef(i,v((" "+Ol(i)+" ").replace(" "+l+" "," ")))}function ef(i,l){i.className.baseVal===void 0?i.className=l:i.className.baseVal=l}function Ol(i){return i.correspondingElement&&(i=i.correspondingElement),i.className.baseVal===void 0?i.className:i.className.baseVal}function pn(i,l){"opacity"in i.style?i.style.opacity=l:"filter"in i.style&&hP(i,l)}function hP(i,l){var d=!1,m="DXImageTransform.Microsoft.Alpha";try{d=i.filters.item(m)}catch{if(l===1)return}l=Math.round(l*100),d?(d.Enabled=l!==100,d.Opacity=l):i.style.filter+=" progid:"+m+"(opacity="+l+")"}function Rl(i){for(var l=document.documentElement.style,d=0;d<i.length;d++)if(i[d]in l)return i[d];return!1}function Do(i,l,d){var m=l||new O(0,0);i.style[Yd]=(pe.ie3d?"translate("+m.x+"px,"+m.y+"px)":"translate3d("+m.x+"px,"+m.y+"px,0)")+(d?" scale("+d+")":"")}function gt(i,l){i._leaflet_pos=l,pe.any3d?Do(i,l):(i.style.left=l.x+"px",i.style.top=l.y+"px")}function jo(i){return i._leaflet_pos||new O(0,0)}var Va,Za,tf;if("onselectstart"in document)Va=function(){Ee(window,"selectstart",Rt)},Za=function(){Xe(window,"selectstart",Rt)};else{var qa=Rl(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Va=function(){if(qa){var i=document.documentElement.style;tf=i[qa],i[qa]="none"}},Za=function(){qa&&(document.documentElement.style[qa]=tf,tf=void 0)}}function nf(){Ee(window,"dragstart",Rt)}function rf(){Xe(window,"dragstart",Rt)}var Tl,of;function af(i){for(;i.tabIndex===-1;)i=i.parentNode;i.style&&(Ll(),Tl=i,of=i.style.outline,i.style.outline="none",Ee(window,"keydown",Ll))}function Ll(){Tl&&(Tl.style.outline=of,Tl=void 0,of=void 0,Xe(window,"keydown",Ll))}function ug(i){do i=i.parentNode;while((!i.offsetWidth||!i.offsetHeight)&&i!==document.body);return i}function sf(i){var l=i.getBoundingClientRect();return{x:l.width/i.offsetWidth||1,y:l.height/i.offsetHeight||1,boundingClientRect:l}}var pP={__proto__:null,TRANSFORM:Yd,TRANSITION:Wa,TRANSITION_END:sg,get:lg,getStyle:Ha,create:Ue,remove:at,empty:El,toFront:Li,toBack:Ai,hasClass:Xd,addClass:Oe,removeClass:pt,setClass:ef,getClass:Ol,setOpacity:pn,testProp:Rl,setTransform:Do,setPosition:gt,getPosition:jo,get disableTextSelection(){return Va},get enableTextSelection(){return Za},disableImageDrag:nf,enableImageDrag:rf,preventOutline:af,restoreOutline:Ll,getSizedParentNode:ug,getScale:sf};function Ee(i,l,d,m){if(l&&typeof l=="object")for(var w in l)uf(i,w,l[w],d);else{l=y(l);for(var C=0,I=l.length;C<I;C++)uf(i,l[C],d,m)}return this}var Jn="_leaflet_events";function Xe(i,l,d,m){if(arguments.length===1)cg(i),delete i[Jn];else if(l&&typeof l=="object")for(var w in l)cf(i,w,l[w],d);else if(l=y(l),arguments.length===2)cg(i,function(F){return E(l,F)!==-1});else for(var C=0,I=l.length;C<I;C++)cf(i,l[C],d,m);return this}function cg(i,l){for(var d in i[Jn]){var m=d.split(/\d/)[0];(!l||l(m))&&cf(i,m,null,null,d)}}var lf={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function uf(i,l,d,m){var w=l+c(d)+(m?"_"+c(m):"");if(i[Jn]&&i[Jn][w])return this;var C=function(F){return d.call(m||i,F||window.event)},I=C;!pe.touchNative&&pe.pointer&&l.indexOf("touch")===0?C=rP(i,l,C):pe.touch&&l==="dblclick"?C=dP(i,C):"addEventListener"in i?l==="touchstart"||l==="touchmove"||l==="wheel"||l==="mousewheel"?i.addEventListener(lf[l]||l,C,pe.passiveEvents?{passive:!1}:!1):l==="mouseenter"||l==="mouseleave"?(C=function(F){F=F||window.event,ff(i,F)&&I(F)},i.addEventListener(lf[l],C,!1)):i.addEventListener(l,I,!1):i.attachEvent("on"+l,C),i[Jn]=i[Jn]||{},i[Jn][w]=C}function cf(i,l,d,m,w){w=w||l+c(d)+(m?"_"+c(m):"");var C=i[Jn]&&i[Jn][w];if(!C)return this;!pe.touchNative&&pe.pointer&&l.indexOf("touch")===0?oP(i,l,C):pe.touch&&l==="dblclick"?fP(i,C):"removeEventListener"in i?i.removeEventListener(lf[l]||l,C,!1):i.detachEvent("on"+l,C),i[Jn][w]=null}function Fo(i){return i.stopPropagation?i.stopPropagation():i.originalEvent?i.originalEvent._stopped=!0:i.cancelBubble=!0,this}function df(i){return uf(i,"wheel",Fo),this}function Ka(i){return Ee(i,"mousedown touchstart dblclick contextmenu",Fo),i._leaflet_disable_click=!0,this}function Rt(i){return i.preventDefault?i.preventDefault():i.returnValue=!1,this}function $o(i){return Rt(i),Fo(i),this}function dg(i){if(i.composedPath)return i.composedPath();for(var l=[],d=i.target;d;)l.push(d),d=d.parentNode;return l}function fg(i,l){if(!l)return new O(i.clientX,i.clientY);var d=sf(l),m=d.boundingClientRect;return new O((i.clientX-m.left)/d.x-l.clientLeft,(i.clientY-m.top)/d.y-l.clientTop)}var mP=pe.linux&&pe.chrome?window.devicePixelRatio:pe.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function hg(i){return pe.edge?i.wheelDeltaY/2:i.deltaY&&i.deltaMode===0?-i.deltaY/mP:i.deltaY&&i.deltaMode===1?-i.deltaY*20:i.deltaY&&i.deltaMode===2?-i.deltaY*60:i.deltaX||i.deltaZ?0:i.wheelDelta?(i.wheelDeltaY||i.wheelDelta)/2:i.detail&&Math.abs(i.detail)<32765?-i.detail*20:i.detail?i.detail/-32765*60:0}function ff(i,l){var d=l.relatedTarget;if(!d)return!0;try{for(;d&&d!==i;)d=d.parentNode}catch{return!1}return d!==i}var _P={__proto__:null,on:Ee,off:Xe,stopPropagation:Fo,disableScrollPropagation:df,disableClickPropagation:Ka,preventDefault:Rt,stop:$o,getPropagationPath:dg,getMousePosition:fg,getWheelDelta:hg,isExternalTarget:ff,addListener:Ee,removeListener:Xe},pg=se.extend({run:function(i,l,d,m){this.stop(),this._el=i,this._inProgress=!0,this._duration=d||.25,this._easeOutPower=1/Math.max(m||.5,.2),this._startPos=jo(i),this._offset=l.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=H(this._animate,this),this._step()},_step:function(i){var l=+new Date-this._startTime,d=this._duration*1e3;l<d?this._runFrame(this._easeOut(l/d),i):(this._runFrame(1),this._complete())},_runFrame:function(i,l){var d=this._startPos.add(this._offset.multiplyBy(i));l&&d._round(),gt(this._el,d),this.fire("step")},_complete:function(){G(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(i){return 1-Math.pow(1-i,this._easeOutPower)}}),De=se.extend({options:{crs:me,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(i,l){l=b(this,l),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(i),this._initLayout(),this._onResize=s(this._onResize,this),this._initEvents(),l.maxBounds&&this.setMaxBounds(l.maxBounds),l.zoom!==void 0&&(this._zoom=this._limitZoom(l.zoom)),l.center&&l.zoom!==void 0&&this.setView(ie(l.center),l.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Wa&&pe.any3d&&!pe.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),Ee(this._proxy,sg,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(i,l,d){if(l=l===void 0?this._zoom:this._limitZoom(l),i=this._limitCenter(ie(i),l,this.options.maxBounds),d=d||{},this._stop(),this._loaded&&!d.reset&&d!==!0){d.animate!==void 0&&(d.zoom=o({animate:d.animate},d.zoom),d.pan=o({animate:d.animate,duration:d.duration},d.pan));var m=this._zoom!==l?this._tryAnimatedZoom&&this._tryAnimatedZoom(i,l,d.zoom):this._tryAnimatedPan(i,d.pan);if(m)return clearTimeout(this._sizeTimer),this}return this._resetView(i,l,d.pan&&d.pan.noMoveStart),this},setZoom:function(i,l){return this._loaded?this.setView(this.getCenter(),i,{zoom:l}):(this._zoom=i,this)},zoomIn:function(i,l){return i=i||(pe.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+i,l)},zoomOut:function(i,l){return i=i||(pe.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-i,l)},setZoomAround:function(i,l,d){var m=this.getZoomScale(l),w=this.getSize().divideBy(2),C=i instanceof O?i:this.latLngToContainerPoint(i),I=C.subtract(w).multiplyBy(1-1/m),F=this.containerPointToLatLng(w.add(I));return this.setView(F,l,{zoom:d})},_getBoundsCenterZoom:function(i,l){l=l||{},i=i.getBounds?i.getBounds():V(i);var d=U(l.paddingTopLeft||l.padding||[0,0]),m=U(l.paddingBottomRight||l.padding||[0,0]),w=this.getBoundsZoom(i,!1,d.add(m));if(w=typeof l.maxZoom=="number"?Math.min(l.maxZoom,w):w,w===1/0)return{center:i.getCenter(),zoom:w};var C=m.subtract(d).divideBy(2),I=this.project(i.getSouthWest(),w),F=this.project(i.getNorthEast(),w),K=this.unproject(I.add(F).divideBy(2).add(C),w);return{center:K,zoom:w}},fitBounds:function(i,l){if(i=V(i),!i.isValid())throw new Error("Bounds are not valid.");var d=this._getBoundsCenterZoom(i,l);return this.setView(d.center,d.zoom,l)},fitWorld:function(i){return this.fitBounds([[-90,-180],[90,180]],i)},panTo:function(i,l){return this.setView(i,this._zoom,{pan:l})},panBy:function(i,l){if(i=U(i).round(),l=l||{},!i.x&&!i.y)return this.fire("moveend");if(l.animate!==!0&&!this.getSize().contains(i))return this._resetView(this.unproject(this.project(this.getCenter()).add(i)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new pg,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),l.noMoveStart||this.fire("movestart"),l.animate!==!1){Oe(this._mapPane,"leaflet-pan-anim");var d=this._getMapPanePos().subtract(i).round();this._panAnim.run(this._mapPane,d,l.duration||.25,l.easeLinearity)}else this._rawPanBy(i),this.fire("move").fire("moveend");return this},flyTo:function(i,l,d){if(d=d||{},d.animate===!1||!pe.any3d)return this.setView(i,l,d);this._stop();var m=this.project(this.getCenter()),w=this.project(i),C=this.getSize(),I=this._zoom;i=ie(i),l=l===void 0?I:l;var F=Math.max(C.x,C.y),K=F*this.getZoomScale(I,l),oe=w.distanceTo(m)||1,he=1.42,Pe=he*he;function Te(vt){var Hl=vt?-1:1,oC=vt?K:F,iC=K*K-F*F+Hl*Pe*Pe*oe*oe,aC=2*oC*Pe*oe,Sf=iC/aC,Kg=Math.sqrt(Sf*Sf+1)-Sf,sC=Kg<1e-9?-18:Math.log(Kg);return sC}function _n(vt){return(Math.exp(vt)-Math.exp(-vt))/2}function Wo(vt){return(Math.exp(vt)+Math.exp(-vt))/2}function Wl(vt){return _n(vt)/Wo(vt)}var Vr=Te(0);function wf(vt){return F*(Wo(Vr)/Wo(Vr+he*vt))}function eC(vt){return F*(Wo(Vr)*Wl(Vr+he*vt)-_n(Vr))/Pe}function tC(vt){return 1-Math.pow(1-vt,1.5)}var nC=Date.now(),Zg=(Te(1)-Vr)/he,rC=d.duration?1e3*d.duration:1e3*Zg*.8;function qg(){var vt=(Date.now()-nC)/rC,Hl=tC(vt)*Zg;vt<=1?(this._flyToFrame=H(qg,this),this._move(this.unproject(m.add(w.subtract(m).multiplyBy(eC(Hl)/oe)),I),this.getScaleZoom(F/wf(Hl),I),{flyTo:!0})):this._move(i,l)._moveEnd(!0)}return this._moveStart(!0,d.noMoveStart),qg.call(this),this},flyToBounds:function(i,l){var d=this._getBoundsCenterZoom(i,l);return this.flyTo(d.center,d.zoom,l)},setMaxBounds:function(i){return i=V(i),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),i.isValid()?(this.options.maxBounds=i,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(i){var l=this.options.minZoom;return this.options.minZoom=i,this._loaded&&l!==i&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(i):this},setMaxZoom:function(i){var l=this.options.maxZoom;return this.options.maxZoom=i,this._loaded&&l!==i&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(i):this},panInsideBounds:function(i,l){this._enforcingBounds=!0;var d=this.getCenter(),m=this._limitCenter(d,this._zoom,V(i));return d.equals(m)||this.panTo(m,l),this._enforcingBounds=!1,this},panInside:function(i,l){l=l||{};var d=U(l.paddingTopLeft||l.padding||[0,0]),m=U(l.paddingBottomRight||l.padding||[0,0]),w=this.project(this.getCenter()),C=this.project(i),I=this.getPixelBounds(),F=z([I.min.add(d),I.max.subtract(m)]),K=F.getSize();if(!F.contains(C)){this._enforcingBounds=!0;var oe=C.subtract(F.getCenter()),he=F.extend(C).getSize().subtract(K);w.x+=oe.x<0?-he.x:he.x,w.y+=oe.y<0?-he.y:he.y,this.panTo(this.unproject(w),l),this._enforcingBounds=!1}return this},invalidateSize:function(i){if(!this._loaded)return this;i=o({animate:!1,pan:!0},i===!0?{animate:!0}:i);var l=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var d=this.getSize(),m=l.divideBy(2).round(),w=d.divideBy(2).round(),C=m.subtract(w);return!C.x&&!C.y?this:(i.animate&&i.pan?this.panBy(C):(i.pan&&this._rawPanBy(C),this.fire("move"),i.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(s(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:l,newSize:d}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(i){if(i=this._locateOptions=o({timeout:1e4,watch:!1},i),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var l=s(this._handleGeolocationResponse,this),d=s(this._handleGeolocationError,this);return i.watch?this._locationWatchId=navigator.geolocation.watchPosition(l,d,i):navigator.geolocation.getCurrentPosition(l,d,i),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(i){if(this._container._leaflet_id){var l=i.code,d=i.message||(l===1?"permission denied":l===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:l,message:"Geolocation error: "+d+"."})}},_handleGeolocationResponse:function(i){if(this._container._leaflet_id){var l=i.coords.latitude,d=i.coords.longitude,m=new te(l,d),w=m.toBounds(i.coords.accuracy*2),C=this._locateOptions;if(C.setView){var I=this.getBoundsZoom(w);this.setView(m,C.maxZoom?Math.min(I,C.maxZoom):I)}var F={latlng:m,bounds:w,timestamp:i.timestamp};for(var K in i.coords)typeof i.coords[K]=="number"&&(F[K]=i.coords[K]);this.fire("locationfound",F)}},addHandler:function(i,l){if(!l)return this;var d=this[i]=new l(this);return this._handlers.push(d),this.options[i]&&d.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),at(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(G(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var i;for(i in this._layers)this._layers[i].remove();for(i in this._panes)at(this._panes[i]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(i,l){var d="leaflet-pane"+(i?" leaflet-"+i.replace("Pane","")+"-pane":""),m=Ue("div",d,l||this._mapPane);return i&&(this._panes[i]=m),m},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var i=this.getPixelBounds(),l=this.unproject(i.getBottomLeft()),d=this.unproject(i.getTopRight());return new M(l,d)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(i,l,d){i=V(i),d=U(d||[0,0]);var m=this.getZoom()||0,w=this.getMinZoom(),C=this.getMaxZoom(),I=i.getNorthWest(),F=i.getSouthEast(),K=this.getSize().subtract(d),oe=z(this.project(F,m),this.project(I,m)).getSize(),he=pe.any3d?this.options.zoomSnap:1,Pe=K.x/oe.x,Te=K.y/oe.y,_n=l?Math.max(Pe,Te):Math.min(Pe,Te);return m=this.getScaleZoom(_n,m),he&&(m=Math.round(m/(he/100))*(he/100),m=l?Math.ceil(m/he)*he:Math.floor(m/he)*he),Math.max(w,Math.min(C,m))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new O(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(i,l){var d=this._getTopLeftPoint(i,l);return new R(d,d.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(i){return this.options.crs.getProjectedBounds(i===void 0?this.getZoom():i)},getPane:function(i){return typeof i=="string"?this._panes[i]:i},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(i,l){var d=this.options.crs;return l=l===void 0?this._zoom:l,d.scale(i)/d.scale(l)},getScaleZoom:function(i,l){var d=this.options.crs;l=l===void 0?this._zoom:l;var m=d.zoom(i*d.scale(l));return isNaN(m)?1/0:m},project:function(i,l){return l=l===void 0?this._zoom:l,this.options.crs.latLngToPoint(ie(i),l)},unproject:function(i,l){return l=l===void 0?this._zoom:l,this.options.crs.pointToLatLng(U(i),l)},layerPointToLatLng:function(i){var l=U(i).add(this.getPixelOrigin());return this.unproject(l)},latLngToLayerPoint:function(i){var l=this.project(ie(i))._round();return l._subtract(this.getPixelOrigin())},wrapLatLng:function(i){return this.options.crs.wrapLatLng(ie(i))},wrapLatLngBounds:function(i){return this.options.crs.wrapLatLngBounds(V(i))},distance:function(i,l){return this.options.crs.distance(ie(i),ie(l))},containerPointToLayerPoint:function(i){return U(i).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(i){return U(i).add(this._getMapPanePos())},containerPointToLatLng:function(i){var l=this.containerPointToLayerPoint(U(i));return this.layerPointToLatLng(l)},latLngToContainerPoint:function(i){return this.layerPointToContainerPoint(this.latLngToLayerPoint(ie(i)))},mouseEventToContainerPoint:function(i){return fg(i,this._container)},mouseEventToLayerPoint:function(i){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(i))},mouseEventToLatLng:function(i){return this.layerPointToLatLng(this.mouseEventToLayerPoint(i))},_initContainer:function(i){var l=this._container=lg(i);if(l){if(l._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");Ee(l,"scroll",this._onScroll,this),this._containerId=c(l)},_initLayout:function(){var i=this._container;this._fadeAnimated=this.options.fadeAnimation&&pe.any3d,Oe(i,"leaflet-container"+(pe.touch?" leaflet-touch":"")+(pe.retina?" leaflet-retina":"")+(pe.ielt9?" leaflet-oldie":"")+(pe.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var l=Ha(i,"position");l!=="absolute"&&l!=="relative"&&l!=="fixed"&&l!=="sticky"&&(i.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var i=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),gt(this._mapPane,new O(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Oe(i.markerPane,"leaflet-zoom-hide"),Oe(i.shadowPane,"leaflet-zoom-hide"))},_resetView:function(i,l,d){gt(this._mapPane,new O(0,0));var m=!this._loaded;this._loaded=!0,l=this._limitZoom(l),this.fire("viewprereset");var w=this._zoom!==l;this._moveStart(w,d)._move(i,l)._moveEnd(w),this.fire("viewreset"),m&&this.fire("load")},_moveStart:function(i,l){return i&&this.fire("zoomstart"),l||this.fire("movestart"),this},_move:function(i,l,d,m){l===void 0&&(l=this._zoom);var w=this._zoom!==l;return this._zoom=l,this._lastCenter=i,this._pixelOrigin=this._getNewPixelOrigin(i),m?d&&d.pinch&&this.fire("zoom",d):((w||d&&d.pinch)&&this.fire("zoom",d),this.fire("move",d)),this},_moveEnd:function(i){return i&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return G(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(i){gt(this._mapPane,this._getMapPanePos().subtract(i))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(i){this._targets={},this._targets[c(this._container)]=this;var l=i?Xe:Ee;l(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&l(window,"resize",this._onResize,this),pe.any3d&&this.options.transform3DLimit&&(i?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){G(this._resizeRequest),this._resizeRequest=H(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var i=this._getMapPanePos();Math.max(Math.abs(i.x),Math.abs(i.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(i,l){for(var d=[],m,w=l==="mouseout"||l==="mouseover",C=i.target||i.srcElement,I=!1;C;){if(m=this._targets[c(C)],m&&(l==="click"||l==="preclick")&&this._draggableMoved(m)){I=!0;break}if(m&&m.listens(l,!0)&&(w&&!ff(C,i)||(d.push(m),w))||C===this._container)break;C=C.parentNode}return!d.length&&!I&&!w&&this.listens(l,!0)&&(d=[this]),d},_isClickDisabled:function(i){for(;i&&i!==this._container;){if(i._leaflet_disable_click)return!0;i=i.parentNode}},_handleDOMEvent:function(i){var l=i.target||i.srcElement;if(!(!this._loaded||l._leaflet_disable_events||i.type==="click"&&this._isClickDisabled(l))){var d=i.type;d==="mousedown"&&af(l),this._fireDOMEvent(i,d)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(i,l,d){if(i.type==="click"){var m=o({},i);m.type="preclick",this._fireDOMEvent(m,m.type,d)}var w=this._findEventTargets(i,l);if(d){for(var C=[],I=0;I<d.length;I++)d[I].listens(l,!0)&&C.push(d[I]);w=C.concat(w)}if(w.length){l==="contextmenu"&&Rt(i);var F=w[0],K={originalEvent:i};if(i.type!=="keypress"&&i.type!=="keydown"&&i.type!=="keyup"){var oe=F.getLatLng&&(!F._radius||F._radius<=10);K.containerPoint=oe?this.latLngToContainerPoint(F.getLatLng()):this.mouseEventToContainerPoint(i),K.layerPoint=this.containerPointToLayerPoint(K.containerPoint),K.latlng=oe?F.getLatLng():this.layerPointToLatLng(K.layerPoint)}for(I=0;I<w.length;I++)if(w[I].fire(l,K,!0),K.originalEvent._stopped||w[I].options.bubblingMouseEvents===!1&&E(this._mouseEvents,l)!==-1)return}},_draggableMoved:function(i){return i=i.dragging&&i.dragging.enabled()?i:this,i.dragging&&i.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var i=0,l=this._handlers.length;i<l;i++)this._handlers[i].disable()},whenReady:function(i,l){return this._loaded?i.call(l||this,{target:this}):this.on("load",i,l),this},_getMapPanePos:function(){return jo(this._mapPane)||new O(0,0)},_moved:function(){var i=this._getMapPanePos();return i&&!i.equals([0,0])},_getTopLeftPoint:function(i,l){var d=i&&l!==void 0?this._getNewPixelOrigin(i,l):this.getPixelOrigin();return d.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(i,l){var d=this.getSize()._divideBy(2);return this.project(i,l)._subtract(d)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(i,l,d){var m=this._getNewPixelOrigin(d,l);return this.project(i,l)._subtract(m)},_latLngBoundsToNewLayerBounds:function(i,l,d){var m=this._getNewPixelOrigin(d,l);return z([this.project(i.getSouthWest(),l)._subtract(m),this.project(i.getNorthWest(),l)._subtract(m),this.project(i.getSouthEast(),l)._subtract(m),this.project(i.getNorthEast(),l)._subtract(m)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(i){return this.latLngToLayerPoint(i).subtract(this._getCenterLayerPoint())},_limitCenter:function(i,l,d){if(!d)return i;var m=this.project(i,l),w=this.getSize().divideBy(2),C=new R(m.subtract(w),m.add(w)),I=this._getBoundsOffset(C,d,l);return Math.abs(I.x)<=1&&Math.abs(I.y)<=1?i:this.unproject(m.add(I),l)},_limitOffset:function(i,l){if(!l)return i;var d=this.getPixelBounds(),m=new R(d.min.add(i),d.max.add(i));return i.add(this._getBoundsOffset(m,l))},_getBoundsOffset:function(i,l,d){var m=z(this.project(l.getNorthEast(),d),this.project(l.getSouthWest(),d)),w=m.min.subtract(i.min),C=m.max.subtract(i.max),I=this._rebound(w.x,-C.x),F=this._rebound(w.y,-C.y);return new O(I,F)},_rebound:function(i,l){return i+l>0?Math.round(i-l)/2:Math.max(0,Math.ceil(i))-Math.max(0,Math.floor(l))},_limitZoom:function(i){var l=this.getMinZoom(),d=this.getMaxZoom(),m=pe.any3d?this.options.zoomSnap:1;return m&&(i=Math.round(i/m)*m),Math.max(l,Math.min(d,i))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){pt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(i,l){var d=this._getCenterOffset(i)._trunc();return(l&&l.animate)!==!0&&!this.getSize().contains(d)?!1:(this.panBy(d,l),!0)},_createAnimProxy:function(){var i=this._proxy=Ue("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(i),this.on("zoomanim",function(l){var d=Yd,m=this._proxy.style[d];Do(this._proxy,this.project(l.center,l.zoom),this.getZoomScale(l.zoom,1)),m===this._proxy.style[d]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){at(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var i=this.getCenter(),l=this.getZoom();Do(this._proxy,this.project(i,l),this.getZoomScale(l,1))},_catchTransitionEnd:function(i){this._animatingZoom&&i.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(i,l,d){if(this._animatingZoom)return!0;if(d=d||{},!this._zoomAnimated||d.animate===!1||this._nothingToAnimate()||Math.abs(l-this._zoom)>this.options.zoomAnimationThreshold)return!1;var m=this.getZoomScale(l),w=this._getCenterOffset(i)._divideBy(1-1/m);return d.animate!==!0&&!this.getSize().contains(w)?!1:(H(function(){this._moveStart(!0,!1)._animateZoom(i,l,!0)},this),!0)},_animateZoom:function(i,l,d,m){this._mapPane&&(d&&(this._animatingZoom=!0,this._animateToCenter=i,this._animateToZoom=l,Oe(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:i,zoom:l,noUpdate:m}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(s(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&pt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function gP(i,l){return new De(i,l)}var On=$.extend({options:{position:"topright"},initialize:function(i){b(this,i)},getPosition:function(){return this.options.position},setPosition:function(i){var l=this._map;return l&&l.removeControl(this),this.options.position=i,l&&l.addControl(this),this},getContainer:function(){return this._container},addTo:function(i){this.remove(),this._map=i;var l=this._container=this.onAdd(i),d=this.getPosition(),m=i._controlCorners[d];return Oe(l,"leaflet-control"),d.indexOf("bottom")!==-1?m.insertBefore(l,m.firstChild):m.appendChild(l),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(at(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(i){this._map&&i&&i.screenX>0&&i.screenY>0&&this._map.getContainer().focus()}}),Qa=function(i){return new On(i)};De.include({addControl:function(i){return i.addTo(this),this},removeControl:function(i){return i.remove(),this},_initControlPos:function(){var i=this._controlCorners={},l="leaflet-",d=this._controlContainer=Ue("div",l+"control-container",this._container);function m(w,C){var I=l+w+" "+l+C;i[w+C]=Ue("div",I,d)}m("top","left"),m("top","right"),m("bottom","left"),m("bottom","right")},_clearControlPos:function(){for(var i in this._controlCorners)at(this._controlCorners[i]);at(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var mg=On.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(i,l,d,m){return d<m?-1:m<d?1:0}},initialize:function(i,l,d){b(this,d),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1;for(var m in i)this._addLayer(i[m],m);for(m in l)this._addLayer(l[m],m,!0)},onAdd:function(i){this._initLayout(),this._update(),this._map=i,i.on("zoomend",this._checkDisabledLayers,this);for(var l=0;l<this._layers.length;l++)this._layers[l].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(i){return On.prototype.addTo.call(this,i),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(i,l){return this._addLayer(i,l),this._map?this._update():this},addOverlay:function(i,l){return this._addLayer(i,l,!0),this._map?this._update():this},removeLayer:function(i){i.off("add remove",this._onLayerChange,this);var l=this._getLayer(c(i));return l&&this._layers.splice(this._layers.indexOf(l),1),this._map?this._update():this},expand:function(){Oe(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var i=this._map.getSize().y-(this._container.offsetTop+50);return i<this._section.clientHeight?(Oe(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=i+"px"):pt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return pt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var i="leaflet-control-layers",l=this._container=Ue("div",i),d=this.options.collapsed;l.setAttribute("aria-haspopup",!0),Ka(l),df(l);var m=this._section=Ue("section",i+"-list");d&&(this._map.on("click",this.collapse,this),Ee(l,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var w=this._layersLink=Ue("a",i+"-toggle",l);w.href="#",w.title="Layers",w.setAttribute("role","button"),Ee(w,{keydown:function(C){C.keyCode===13&&this._expandSafely()},click:function(C){Rt(C),this._expandSafely()}},this),d||this.expand(),this._baseLayersList=Ue("div",i+"-base",m),this._separator=Ue("div",i+"-separator",m),this._overlaysList=Ue("div",i+"-overlays",m),l.appendChild(m)},_getLayer:function(i){for(var l=0;l<this._layers.length;l++)if(this._layers[l]&&c(this._layers[l].layer)===i)return this._layers[l]},_addLayer:function(i,l,d){this._map&&i.on("add remove",this._onLayerChange,this),this._layers.push({layer:i,name:l,overlay:d}),this.options.sortLayers&&this._layers.sort(s(function(m,w){return this.options.sortFunction(m.layer,w.layer,m.name,w.name)},this)),this.options.autoZIndex&&i.setZIndex&&(this._lastZIndex++,i.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;El(this._baseLayersList),El(this._overlaysList),this._layerControlInputs=[];var i,l,d,m,w=0;for(d=0;d<this._layers.length;d++)m=this._layers[d],this._addItem(m),l=l||m.overlay,i=i||!m.overlay,w+=m.overlay?0:1;return this.options.hideSingleBase&&(i=i&&w>1,this._baseLayersList.style.display=i?"":"none"),this._separator.style.display=l&&i?"":"none",this},_onLayerChange:function(i){this._handlingClick||this._update();var l=this._getLayer(c(i.target)),d=l.overlay?i.type==="add"?"overlayadd":"overlayremove":i.type==="add"?"baselayerchange":null;d&&this._map.fire(d,l)},_createRadioElement:function(i,l){var d='<input type="radio" class="leaflet-control-layers-selector" name="'+i+'"'+(l?' checked="checked"':"")+"/>",m=document.createElement("div");return m.innerHTML=d,m.firstChild},_addItem:function(i){var l=document.createElement("label"),d=this._map.hasLayer(i.layer),m;i.overlay?(m=document.createElement("input"),m.type="checkbox",m.className="leaflet-control-layers-selector",m.defaultChecked=d):m=this._createRadioElement("leaflet-base-layers_"+c(this),d),this._layerControlInputs.push(m),m.layerId=c(i.layer),Ee(m,"click",this._onInputClick,this);var w=document.createElement("span");w.innerHTML=" "+i.name;var C=document.createElement("span");l.appendChild(C),C.appendChild(m),C.appendChild(w);var I=i.overlay?this._overlaysList:this._baseLayersList;return I.appendChild(l),this._checkDisabledLayers(),l},_onInputClick:function(){var i=this._layerControlInputs,l,d,m=[],w=[];this._handlingClick=!0;for(var C=i.length-1;C>=0;C--)l=i[C],d=this._getLayer(l.layerId).layer,l.checked?m.push(d):l.checked||w.push(d);for(C=0;C<w.length;C++)this._map.hasLayer(w[C])&&this._map.removeLayer(w[C]);for(C=0;C<m.length;C++)this._map.hasLayer(m[C])||this._map.addLayer(m[C]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var i=this._layerControlInputs,l,d,m=this._map.getZoom(),w=i.length-1;w>=0;w--)l=i[w],d=this._getLayer(l.layerId).layer,l.disabled=d.options.minZoom!==void 0&&m<d.options.minZoom||d.options.maxZoom!==void 0&&m>d.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var i=this._section;Ee(i,"click",Rt),this.expand(),setTimeout(function(){Xe(i,"click",Rt)})}}),vP=function(i,l,d){return new mg(i,l,d)},hf=On.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(i){var l="leaflet-control-zoom",d=Ue("div",l+" leaflet-bar"),m=this.options;return this._zoomInButton=this._createButton(m.zoomInText,m.zoomInTitle,l+"-in",d,this._zoomIn),this._zoomOutButton=this._createButton(m.zoomOutText,m.zoomOutTitle,l+"-out",d,this._zoomOut),this._updateDisabled(),i.on("zoomend zoomlevelschange",this._updateDisabled,this),d},onRemove:function(i){i.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(i){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(i.shiftKey?3:1))},_zoomOut:function(i){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(i.shiftKey?3:1))},_createButton:function(i,l,d,m,w){var C=Ue("a",d,m);return C.innerHTML=i,C.href="#",C.title=l,C.setAttribute("role","button"),C.setAttribute("aria-label",l),Ka(C),Ee(C,"click",$o),Ee(C,"click",w,this),Ee(C,"click",this._refocusOnMap,this),C},_updateDisabled:function(){var i=this._map,l="leaflet-disabled";pt(this._zoomInButton,l),pt(this._zoomOutButton,l),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||i._zoom===i.getMinZoom())&&(Oe(this._zoomOutButton,l),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||i._zoom===i.getMaxZoom())&&(Oe(this._zoomInButton,l),this._zoomInButton.setAttribute("aria-disabled","true"))}});De.mergeOptions({zoomControl:!0}),De.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new hf,this.addControl(this.zoomControl))});var yP=function(i){return new hf(i)},_g=On.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(i){var l="leaflet-control-scale",d=Ue("div",l),m=this.options;return this._addScales(m,l+"-line",d),i.on(m.updateWhenIdle?"moveend":"move",this._update,this),i.whenReady(this._update,this),d},onRemove:function(i){i.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(i,l,d){i.metric&&(this._mScale=Ue("div",l,d)),i.imperial&&(this._iScale=Ue("div",l,d))},_update:function(){var i=this._map,l=i.getSize().y/2,d=i.distance(i.containerPointToLatLng([0,l]),i.containerPointToLatLng([this.options.maxWidth,l]));this._updateScales(d)},_updateScales:function(i){this.options.metric&&i&&this._updateMetric(i),this.options.imperial&&i&&this._updateImperial(i)},_updateMetric:function(i){var l=this._getRoundNum(i),d=l<1e3?l+" m":l/1e3+" km";this._updateScale(this._mScale,d,l/i)},_updateImperial:function(i){var l=i*3.2808399,d,m,w;l>5280?(d=l/5280,m=this._getRoundNum(d),this._updateScale(this._iScale,m+" mi",m/d)):(w=this._getRoundNum(l),this._updateScale(this._iScale,w+" ft",w/l))},_updateScale:function(i,l,d){i.style.width=Math.round(this.options.maxWidth*d)+"px",i.innerHTML=l},_getRoundNum:function(i){var l=Math.pow(10,(Math.floor(i)+"").length-1),d=i/l;return d=d>=10?10:d>=5?5:d>=3?3:d>=2?2:1,l*d}}),bP=function(i){return new _g(i)},xP='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',pf=On.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(pe.inlineSvg?xP+" ":"")+"Leaflet</a>"},initialize:function(i){b(this,i),this._attributions={}},onAdd:function(i){i.attributionControl=this,this._container=Ue("div","leaflet-control-attribution"),Ka(this._container);for(var l in i._layers)i._layers[l].getAttribution&&this.addAttribution(i._layers[l].getAttribution());return this._update(),i.on("layeradd",this._addAttribution,this),this._container},onRemove:function(i){i.off("layeradd",this._addAttribution,this)},_addAttribution:function(i){i.layer.getAttribution&&(this.addAttribution(i.layer.getAttribution()),i.layer.once("remove",function(){this.removeAttribution(i.layer.getAttribution())},this))},setPrefix:function(i){return this.options.prefix=i,this._update(),this},addAttribution:function(i){return i?(this._attributions[i]||(this._attributions[i]=0),this._attributions[i]++,this._update(),this):this},removeAttribution:function(i){return i?(this._attributions[i]&&(this._attributions[i]--,this._update()),this):this},_update:function(){if(this._map){var i=[];for(var l in this._attributions)this._attributions[l]&&i.push(l);var d=[];this.options.prefix&&d.push(this.options.prefix),i.length&&d.push(i.join(", ")),this._container.innerHTML=d.join(' <span aria-hidden="true">|</span> ')}}});De.mergeOptions({attributionControl:!0}),De.addInitHook(function(){this.options.attributionControl&&new pf().addTo(this)});var wP=function(i){return new pf(i)};On.Layers=mg,On.Zoom=hf,On.Scale=_g,On.Attribution=pf,Qa.layers=vP,Qa.zoom=yP,Qa.scale=bP,Qa.attribution=wP;var Yn=$.extend({initialize:function(i){this._map=i},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Yn.addTo=function(i,l){return i.addHandler(l,this),this};var SP={Events:Z},gg=pe.touch?"touchstart mousedown":"mousedown",Wr=se.extend({options:{clickTolerance:3},initialize:function(i,l,d,m){b(this,m),this._element=i,this._dragStartTarget=l||i,this._preventOutline=d},enable:function(){this._enabled||(Ee(this._dragStartTarget,gg,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Wr._dragging===this&&this.finishDrag(!0),Xe(this._dragStartTarget,gg,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(i){if(this._enabled&&(this._moved=!1,!Xd(this._element,"leaflet-zoom-anim"))){if(i.touches&&i.touches.length!==1){Wr._dragging===this&&this.finishDrag();return}if(!(Wr._dragging||i.shiftKey||i.which!==1&&i.button!==1&&!i.touches)&&(Wr._dragging=this,this._preventOutline&&af(this._element),nf(),Va(),!this._moving)){this.fire("down");var l=i.touches?i.touches[0]:i,d=ug(this._element);this._startPoint=new O(l.clientX,l.clientY),this._startPos=jo(this._element),this._parentScale=sf(d);var m=i.type==="mousedown";Ee(document,m?"mousemove":"touchmove",this._onMove,this),Ee(document,m?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(i){if(this._enabled){if(i.touches&&i.touches.length>1){this._moved=!0;return}var l=i.touches&&i.touches.length===1?i.touches[0]:i,d=new O(l.clientX,l.clientY)._subtract(this._startPoint);!d.x&&!d.y||Math.abs(d.x)+Math.abs(d.y)<this.options.clickTolerance||(d.x/=this._parentScale.x,d.y/=this._parentScale.y,Rt(i),this._moved||(this.fire("dragstart"),this._moved=!0,Oe(document.body,"leaflet-dragging"),this._lastTarget=i.target||i.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Oe(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(d),this._moving=!0,this._lastEvent=i,this._updatePosition())}},_updatePosition:function(){var i={originalEvent:this._lastEvent};this.fire("predrag",i),gt(this._element,this._newPos),this.fire("drag",i)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(i){pt(document.body,"leaflet-dragging"),this._lastTarget&&(pt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Xe(document,"mousemove touchmove",this._onMove,this),Xe(document,"mouseup touchend touchcancel",this._onUp,this),rf(),Za(),this._moved&&this._moving&&this.fire("dragend",{noInertia:i,distance:this._newPos.distanceTo(this._startPos)}),this._moving=!1,Wr._dragging=!1}});function vg(i,l){if(!l||!i.length)return i.slice();var d=l*l;return i=CP(i,d),i=PP(i,d),i}function yg(i,l,d){return Math.sqrt(Ga(i,l,d,!0))}function kP(i,l,d){return Ga(i,l,d)}function PP(i,l){var d=i.length,m=typeof Uint8Array!=void 0+""?Uint8Array:Array,w=new m(d);w[0]=w[d-1]=1,mf(i,w,l,0,d-1);var C,I=[];for(C=0;C<d;C++)w[C]&&I.push(i[C]);return I}function mf(i,l,d,m,w){var C=0,I,F,K;for(F=m+1;F<=w-1;F++)K=Ga(i[F],i[m],i[w],!0),K>C&&(I=F,C=K);C>d&&(l[I]=1,mf(i,l,d,m,I),mf(i,l,d,I,w))}function CP(i,l){for(var d=[i[0]],m=1,w=0,C=i.length;m<C;m++)EP(i[m],i[w])>l&&(d.push(i[m]),w=m);return w<C-1&&d.push(i[C-1]),d}var bg;function xg(i,l,d,m,w){var C=m?bg:Uo(i,d),I=Uo(l,d),F,K,oe;for(bg=I;;){if(!(C|I))return[i,l];if(C&I)return!1;F=C||I,K=Al(i,l,F,d,w),oe=Uo(K,d),F===C?(i=K,C=oe):(l=K,I=oe)}}function Al(i,l,d,m,w){var C=l.x-i.x,I=l.y-i.y,F=m.min,K=m.max,oe,he;return d&8?(oe=i.x+C*(K.y-i.y)/I,he=K.y):d&4?(oe=i.x+C*(F.y-i.y)/I,he=F.y):d&2?(oe=K.x,he=i.y+I*(K.x-i.x)/C):d&1&&(oe=F.x,he=i.y+I*(F.x-i.x)/C),new O(oe,he,w)}function Uo(i,l){var d=0;return i.x<l.min.x?d|=1:i.x>l.max.x&&(d|=2),i.y<l.min.y?d|=4:i.y>l.max.y&&(d|=8),d}function EP(i,l){var d=l.x-i.x,m=l.y-i.y;return d*d+m*m}function Ga(i,l,d,m){var w=l.x,C=l.y,I=d.x-w,F=d.y-C,K=I*I+F*F,oe;return K>0&&(oe=((i.x-w)*I+(i.y-C)*F)/K,oe>1?(w=d.x,C=d.y):oe>0&&(w+=I*oe,C+=F*oe)),I=i.x-w,F=i.y-C,m?I*I+F*F:new O(w,C)}function mn(i){return!S(i[0])||typeof i[0][0]!="object"&&typeof i[0][0]<"u"}function wg(i){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),mn(i)}function Sg(i,l){var d,m,w,C,I,F,K,oe;if(!i||i.length===0)throw new Error("latlngs not passed");mn(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var he=[];for(var Pe in i)he.push(l.project(ie(i[Pe])));var Te=he.length;for(d=0,m=0;d<Te-1;d++)m+=he[d].distanceTo(he[d+1])/2;if(m===0)oe=he[0];else for(d=0,C=0;d<Te-1;d++)if(I=he[d],F=he[d+1],w=I.distanceTo(F),C+=w,C>m){K=(C-m)/w,oe=[F.x-K*(F.x-I.x),F.y-K*(F.y-I.y)];break}return l.unproject(U(oe))}var OP={__proto__:null,simplify:vg,pointToSegmentDistance:yg,closestPointOnSegment:kP,clipSegment:xg,_getEdgeIntersection:Al,_getBitCode:Uo,_sqClosestPointOnSegment:Ga,isFlat:mn,_flat:wg,polylineCenter:Sg};function kg(i,l,d){var m,w=[1,4,2,8],C,I,F,K,oe,he,Pe,Te;for(C=0,he=i.length;C<he;C++)i[C]._code=Uo(i[C],l);for(F=0;F<4;F++){for(Pe=w[F],m=[],C=0,he=i.length,I=he-1;C<he;I=C++)K=i[C],oe=i[I],K._code&Pe?oe._code&Pe||(Te=Al(oe,K,Pe,l,d),Te._code=Uo(Te,l),m.push(Te)):(oe._code&Pe&&(Te=Al(oe,K,Pe,l,d),Te._code=Uo(Te,l),m.push(Te)),m.push(K));i=m}return i}function Pg(i,l){var d,m,w,C,I,F,K,oe,he;if(!i||i.length===0)throw new Error("latlngs not passed");mn(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var Pe=[];for(var Te in i)Pe.push(l.project(ie(i[Te])));var _n=Pe.length;for(F=K=oe=0,d=0,m=_n-1;d<_n;m=d++)w=Pe[d],C=Pe[m],I=w.y*C.x-C.y*w.x,K+=(w.x+C.x)*I,oe+=(w.y+C.y)*I,F+=I*3;return F===0?he=Pe[0]:he=[K/F,oe/F],l.unproject(U(he))}var RP={__proto__:null,clipPolygon:kg,polygonCenter:Pg},_f={project:function(i){return new O(i.lng,i.lat)},unproject:function(i){return new te(i.y,i.x)},bounds:new R([-180,-90],[180,90])},gf={R:6378137,R_MINOR:6356752314245179e-9,bounds:new R([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(i){var l=Math.PI/180,d=this.R,m=i.lat*l,w=this.R_MINOR/d,C=Math.sqrt(1-w*w),I=C*Math.sin(m),F=Math.tan(Math.PI/4-m/2)/Math.pow((1-I)/(1+I),C/2);return m=-d*Math.log(Math.max(F,1e-10)),new O(i.lng*l*d,m)},unproject:function(i){for(var l=180/Math.PI,d=this.R,m=this.R_MINOR/d,w=Math.sqrt(1-m*m),C=Math.exp(-i.y/d),I=Math.PI/2-2*Math.atan(C),F=0,K=.1,oe;F<15&&Math.abs(K)>1e-7;F++)oe=w*Math.sin(I),oe=Math.pow((1-oe)/(1+oe),w/2),K=Math.PI/2-2*Math.atan(C*oe)-I,I+=K;return new te(I*l,i.x*l/d)}},TP={__proto__:null,LonLat:_f,Mercator:gf,SphericalMercator:Ze},LP=o({},be,{code:"EPSG:3395",projection:gf,transformation:function(){var i=.5/(Math.PI*gf.R);return le(i,.5,-i,.5)}()}),Cg=o({},be,{code:"EPSG:4326",projection:_f,transformation:le(1/180,1,-1/180,.5)}),AP=o({},fe,{projection:_f,transformation:le(1,0,-1,0),scale:function(i){return Math.pow(2,i)},zoom:function(i){return Math.log(i)/Math.LN2},distance:function(i,l){var d=l.lng-i.lng,m=l.lat-i.lat;return Math.sqrt(d*d+m*m)},infinite:!0});fe.Earth=be,fe.EPSG3395=LP,fe.EPSG3857=me,fe.EPSG900913=ee,fe.EPSG4326=Cg,fe.Simple=AP;var Rn=se.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(i){return i.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(i){return i&&i.removeLayer(this),this},getPane:function(i){return this._map.getPane(i?this.options[i]||i:this.options.pane)},addInteractiveTarget:function(i){return this._map._targets[c(i)]=this,this},removeInteractiveTarget:function(i){return delete this._map._targets[c(i)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(i){var l=i.target;if(l.hasLayer(this)){if(this._map=l,this._zoomAnimated=l._zoomAnimated,this.getEvents){var d=this.getEvents();l.on(d,this),this.once("remove",function(){l.off(d,this)},this)}this.onAdd(l),this.fire("add"),l.fire("layeradd",{layer:this})}}});De.include({addLayer:function(i){if(!i._layerAdd)throw new Error("The provided object is not a Layer.");var l=c(i);return this._layers[l]?this:(this._layers[l]=i,i._mapToAdd=this,i.beforeAdd&&i.beforeAdd(this),this.whenReady(i._layerAdd,i),this)},removeLayer:function(i){var l=c(i);return this._layers[l]?(this._loaded&&i.onRemove(this),delete this._layers[l],this._loaded&&(this.fire("layerremove",{layer:i}),i.fire("remove")),i._map=i._mapToAdd=null,this):this},hasLayer:function(i){return c(i)in this._layers},eachLayer:function(i,l){for(var d in this._layers)i.call(l,this._layers[d]);return this},_addLayers:function(i){i=i?S(i)?i:[i]:[];for(var l=0,d=i.length;l<d;l++)this.addLayer(i[l])},_addZoomLimit:function(i){(!isNaN(i.options.maxZoom)||!isNaN(i.options.minZoom))&&(this._zoomBoundLayers[c(i)]=i,this._updateZoomLevels())},_removeZoomLimit:function(i){var l=c(i);this._zoomBoundLayers[l]&&(delete this._zoomBoundLayers[l],this._updateZoomLevels())},_updateZoomLevels:function(){var i=1/0,l=-1/0,d=this._getZoomSpan();for(var m in this._zoomBoundLayers){var w=this._zoomBoundLayers[m].options;i=w.minZoom===void 0?i:Math.min(i,w.minZoom),l=w.maxZoom===void 0?l:Math.max(l,w.maxZoom)}this._layersMaxZoom=l===-1/0?void 0:l,this._layersMinZoom=i===1/0?void 0:i,d!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Ii=Rn.extend({initialize:function(i,l){b(this,l),this._layers={};var d,m;if(i)for(d=0,m=i.length;d<m;d++)this.addLayer(i[d])},addLayer:function(i){var l=this.getLayerId(i);return this._layers[l]=i,this._map&&this._map.addLayer(i),this},removeLayer:function(i){var l=i in this._layers?i:this.getLayerId(i);return this._map&&this._layers[l]&&this._map.removeLayer(this._layers[l]),delete this._layers[l],this},hasLayer:function(i){var l=typeof i=="number"?i:this.getLayerId(i);return l in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(i){var l=Array.prototype.slice.call(arguments,1),d,m;for(d in this._layers)m=this._layers[d],m[i]&&m[i].apply(m,l);return this},onAdd:function(i){this.eachLayer(i.addLayer,i)},onRemove:function(i){this.eachLayer(i.removeLayer,i)},eachLayer:function(i,l){for(var d in this._layers)i.call(l,this._layers[d]);return this},getLayer:function(i){return this._layers[i]},getLayers:function(){var i=[];return this.eachLayer(i.push,i),i},setZIndex:function(i){return this.invoke("setZIndex",i)},getLayerId:function(i){return c(i)}}),IP=function(i,l){return new Ii(i,l)},vr=Ii.extend({addLayer:function(i){return this.hasLayer(i)?this:(i.addEventParent(this),Ii.prototype.addLayer.call(this,i),this.fire("layeradd",{layer:i}))},removeLayer:function(i){return this.hasLayer(i)?(i in this._layers&&(i=this._layers[i]),i.removeEventParent(this),Ii.prototype.removeLayer.call(this,i),this.fire("layerremove",{layer:i})):this},setStyle:function(i){return this.invoke("setStyle",i)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var i=new M;for(var l in this._layers){var d=this._layers[l];i.extend(d.getBounds?d.getBounds():d.getLatLng())}return i}}),zP=function(i,l){return new vr(i,l)},zi=$.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(i){b(this,i)},createIcon:function(i){return this._createIcon("icon",i)},createShadow:function(i){return this._createIcon("shadow",i)},_createIcon:function(i,l){var d=this._getIconUrl(i);if(!d){if(i==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var m=this._createImg(d,l&&l.tagName==="IMG"?l:null);return this._setIconStyles(m,i),(this.options.crossOrigin||this.options.crossOrigin==="")&&(m.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),m},_setIconStyles:function(i,l){var d=this.options,m=d[l+"Size"];typeof m=="number"&&(m=[m,m]);var w=U(m),C=U(l==="shadow"&&d.shadowAnchor||d.iconAnchor||w&&w.divideBy(2,!0));i.className="leaflet-marker-"+l+" "+(d.className||""),C&&(i.style.marginLeft=-C.x+"px",i.style.marginTop=-C.y+"px"),w&&(i.style.width=w.x+"px",i.style.height=w.y+"px")},_createImg:function(i,l){return l=l||document.createElement("img"),l.src=i,l},_getIconUrl:function(i){return pe.retina&&this.options[i+"RetinaUrl"]||this.options[i+"Url"]}});function NP(i){return new zi(i)}var Ja=zi.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(i){return typeof Ja.imagePath!="string"&&(Ja.imagePath=this._detectIconPath()),(this.options.imagePath||Ja.imagePath)+zi.prototype._getIconUrl.call(this,i)},_stripUrl:function(i){var l=function(d,m,w){var C=m.exec(d);return C&&C[w]};return i=l(i,/^url\((['"])?(.+)\1\)$/,2),i&&l(i,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var i=Ue("div","leaflet-default-icon-path",document.body),l=Ha(i,"background-image")||Ha(i,"backgroundImage");if(document.body.removeChild(i),l=this._stripUrl(l),l)return l;var d=document.querySelector('link[href$="leaflet.css"]');return d?d.href.substring(0,d.href.length-11-1):""}}),Eg=Yn.extend({initialize:function(i){this._marker=i},addHooks:function(){var i=this._marker._icon;this._draggable||(this._draggable=new Wr(i,i,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Oe(i,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&pt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(i){var l=this._marker,d=l._map,m=this._marker.options.autoPanSpeed,w=this._marker.options.autoPanPadding,C=jo(l._icon),I=d.getPixelBounds(),F=d.getPixelOrigin(),K=z(I.min._subtract(F).add(w),I.max._subtract(F).subtract(w));if(!K.contains(C)){var oe=U((Math.max(K.max.x,C.x)-K.max.x)/(I.max.x-K.max.x)-(Math.min(K.min.x,C.x)-K.min.x)/(I.min.x-K.min.x),(Math.max(K.max.y,C.y)-K.max.y)/(I.max.y-K.max.y)-(Math.min(K.min.y,C.y)-K.min.y)/(I.min.y-K.min.y)).multiplyBy(m);d.panBy(oe,{animate:!1}),this._draggable._newPos._add(oe),this._draggable._startPos._add(oe),gt(l._icon,this._draggable._newPos),this._onDrag(i),this._panRequest=H(this._adjustPan.bind(this,i))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(i){this._marker.options.autoPan&&(G(this._panRequest),this._panRequest=H(this._adjustPan.bind(this,i)))},_onDrag:function(i){var l=this._marker,d=l._shadow,m=jo(l._icon),w=l._map.layerPointToLatLng(m);d&&gt(d,m),l._latlng=w,i.latlng=w,i.oldLatLng=this._oldLatLng,l.fire("move",i).fire("drag",i)},_onDragEnd:function(i){G(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",i)}}),Il=Rn.extend({options:{icon:new Ja,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(i,l){b(this,l),this._latlng=ie(i)},onAdd:function(i){this._zoomAnimated=this._zoomAnimated&&i.options.markerZoomAnimation,this._zoomAnimated&&i.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(i){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&i.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(i){var l=this._latlng;return this._latlng=ie(i),this.update(),this.fire("move",{oldLatLng:l,latlng:this._latlng})},setZIndexOffset:function(i){return this.options.zIndexOffset=i,this.update()},getIcon:function(){return this.options.icon},setIcon:function(i){return this.options.icon=i,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var i=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(i)}return this},_initIcon:function(){var i=this.options,l="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),d=i.icon.createIcon(this._icon),m=!1;d!==this._icon&&(this._icon&&this._removeIcon(),m=!0,i.title&&(d.title=i.title),d.tagName==="IMG"&&(d.alt=i.alt||"")),Oe(d,l),i.keyboard&&(d.tabIndex="0",d.setAttribute("role","button")),this._icon=d,i.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Ee(d,"focus",this._panOnFocus,this);var w=i.icon.createShadow(this._shadow),C=!1;w!==this._shadow&&(this._removeShadow(),C=!0),w&&(Oe(w,l),w.alt=""),this._shadow=w,i.opacity<1&&this._updateOpacity(),m&&this.getPane().appendChild(this._icon),this._initInteraction(),w&&C&&this.getPane(i.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Xe(this._icon,"focus",this._panOnFocus,this),at(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&at(this._shadow),this._shadow=null},_setPos:function(i){this._icon&&gt(this._icon,i),this._shadow&&gt(this._shadow,i),this._zIndex=i.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(i){this._icon&&(this._icon.style.zIndex=this._zIndex+i)},_animateZoom:function(i){var l=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center).round();this._setPos(l)},_initInteraction:function(){if(this.options.interactive&&(Oe(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Eg)){var i=this.options.draggable;this.dragging&&(i=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Eg(this),i&&this.dragging.enable()}},setOpacity:function(i){return this.options.opacity=i,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var i=this.options.opacity;this._icon&&pn(this._icon,i),this._shadow&&pn(this._shadow,i)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var i=this._map;if(i){var l=this.options.icon.options,d=l.iconSize?U(l.iconSize):U(0,0),m=l.iconAnchor?U(l.iconAnchor):U(0,0);i.panInside(this._latlng,{paddingTopLeft:m,paddingBottomRight:d.subtract(m)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function BP(i,l){return new Il(i,l)}var Hr=Rn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(i){this._renderer=i.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(i){return b(this,i),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&i&&Object.prototype.hasOwnProperty.call(i,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),zl=Hr.extend({options:{fill:!0,radius:10},initialize:function(i,l){b(this,l),this._latlng=ie(i),this._radius=this.options.radius},setLatLng:function(i){var l=this._latlng;return this._latlng=ie(i),this.redraw(),this.fire("move",{oldLatLng:l,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(i){return this.options.radius=this._radius=i,this.redraw()},getRadius:function(){return this._radius},setStyle:function(i){var l=i&&i.radius||this._radius;return Hr.prototype.setStyle.call(this,i),this.setRadius(l),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var i=this._radius,l=this._radiusY||i,d=this._clickTolerance(),m=[i+d,l+d];this._pxBounds=new R(this._point.subtract(m),this._point.add(m))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(i){return i.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function MP(i,l){return new zl(i,l)}var vf=zl.extend({initialize:function(i,l,d){if(typeof l=="number"&&(l=o({},d,{radius:l})),b(this,l),this._latlng=ie(i),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(i){return this._mRadius=i,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var i=[this._radius,this._radiusY||this._radius];return new M(this._map.layerPointToLatLng(this._point.subtract(i)),this._map.layerPointToLatLng(this._point.add(i)))},setStyle:Hr.prototype.setStyle,_project:function(){var i=this._latlng.lng,l=this._latlng.lat,d=this._map,m=d.options.crs;if(m.distance===be.distance){var w=Math.PI/180,C=this._mRadius/be.R/w,I=d.project([l+C,i]),F=d.project([l-C,i]),K=I.add(F).divideBy(2),oe=d.unproject(K).lat,he=Math.acos((Math.cos(C*w)-Math.sin(l*w)*Math.sin(oe*w))/(Math.cos(l*w)*Math.cos(oe*w)))/w;(isNaN(he)||he===0)&&(he=C/Math.cos(Math.PI/180*l)),this._point=K.subtract(d.getPixelOrigin()),this._radius=isNaN(he)?0:K.x-d.project([oe,i-he]).x,this._radiusY=K.y-I.y}else{var Pe=m.unproject(m.project(this._latlng).subtract([this._mRadius,0]));this._point=d.latLngToLayerPoint(this._latlng),this._radius=this._point.x-d.latLngToLayerPoint(Pe).x}this._updateBounds()}});function DP(i,l,d){return new vf(i,l,d)}var yr=Hr.extend({options:{smoothFactor:1,noClip:!1},initialize:function(i,l){b(this,l),this._setLatLngs(i)},getLatLngs:function(){return this._latlngs},setLatLngs:function(i){return this._setLatLngs(i),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(i){for(var l=1/0,d=null,m=Ga,w,C,I=0,F=this._parts.length;I<F;I++)for(var K=this._parts[I],oe=1,he=K.length;oe<he;oe++){w=K[oe-1],C=K[oe];var Pe=m(i,w,C,!0);Pe<l&&(l=Pe,d=m(i,w,C))}return d&&(d.distance=Math.sqrt(l)),d},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Sg(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(i,l){return l=l||this._defaultShape(),i=ie(i),l.push(i),this._bounds.extend(i),this.redraw()},_setLatLngs:function(i){this._bounds=new M,this._latlngs=this._convertLatLngs(i)},_defaultShape:function(){return mn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(i){for(var l=[],d=mn(i),m=0,w=i.length;m<w;m++)d?(l[m]=ie(i[m]),this._bounds.extend(l[m])):l[m]=this._convertLatLngs(i[m]);return l},_project:function(){var i=new R;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,i),this._bounds.isValid()&&i.isValid()&&(this._rawPxBounds=i,this._updateBounds())},_updateBounds:function(){var i=this._clickTolerance(),l=new O(i,i);this._rawPxBounds&&(this._pxBounds=new R([this._rawPxBounds.min.subtract(l),this._rawPxBounds.max.add(l)]))},_projectLatlngs:function(i,l,d){var m=i[0]instanceof te,w=i.length,C,I;if(m){for(I=[],C=0;C<w;C++)I[C]=this._map.latLngToLayerPoint(i[C]),d.extend(I[C]);l.push(I)}else for(C=0;C<w;C++)this._projectLatlngs(i[C],l,d)},_clipPoints:function(){var i=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}var l=this._parts,d,m,w,C,I,F,K;for(d=0,w=0,C=this._rings.length;d<C;d++)for(K=this._rings[d],m=0,I=K.length;m<I-1;m++)F=xg(K[m],K[m+1],i,m,!0),F&&(l[w]=l[w]||[],l[w].push(F[0]),(F[1]!==K[m+1]||m===I-2)&&(l[w].push(F[1]),w++))}},_simplifyPoints:function(){for(var i=this._parts,l=this.options.smoothFactor,d=0,m=i.length;d<m;d++)i[d]=vg(i[d],l)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(i,l){var d,m,w,C,I,F,K=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(d=0,C=this._parts.length;d<C;d++)for(F=this._parts[d],m=0,I=F.length,w=I-1;m<I;w=m++)if(!(!l&&m===0)&&yg(i,F[w],F[m])<=K)return!0;return!1}});function jP(i,l){return new yr(i,l)}yr._flat=wg;var Ni=yr.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Pg(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(i){var l=yr.prototype._convertLatLngs.call(this,i),d=l.length;return d>=2&&l[0]instanceof te&&l[0].equals(l[d-1])&&l.pop(),l},_setLatLngs:function(i){yr.prototype._setLatLngs.call(this,i),mn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return mn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var i=this._renderer._bounds,l=this.options.weight,d=new O(l,l);if(i=new R(i.min.subtract(d),i.max.add(d)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}for(var m=0,w=this._rings.length,C;m<w;m++)C=kg(this._rings[m],i,!0),C.length&&this._parts.push(C)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(i){var l=!1,d,m,w,C,I,F,K,oe;if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(C=0,K=this._parts.length;C<K;C++)for(d=this._parts[C],I=0,oe=d.length,F=oe-1;I<oe;F=I++)m=d[I],w=d[F],m.y>i.y!=w.y>i.y&&i.x<(w.x-m.x)*(i.y-m.y)/(w.y-m.y)+m.x&&(l=!l);return l||yr.prototype._containsPoint.call(this,i,!0)}});function FP(i,l){return new Ni(i,l)}var br=vr.extend({initialize:function(i,l){b(this,l),this._layers={},i&&this.addData(i)},addData:function(i){var l=S(i)?i:i.features,d,m,w;if(l){for(d=0,m=l.length;d<m;d++)w=l[d],(w.geometries||w.geometry||w.features||w.coordinates)&&this.addData(w);return this}var C=this.options;if(C.filter&&!C.filter(i))return this;var I=Nl(i,C);return I?(I.feature=Dl(i),I.defaultOptions=I.options,this.resetStyle(I),C.onEachFeature&&C.onEachFeature(i,I),this.addLayer(I)):this},resetStyle:function(i){return i===void 0?this.eachLayer(this.resetStyle,this):(i.options=o({},i.defaultOptions),this._setLayerStyle(i,this.options.style),this)},setStyle:function(i){return this.eachLayer(function(l){this._setLayerStyle(l,i)},this)},_setLayerStyle:function(i,l){i.setStyle&&(typeof l=="function"&&(l=l(i.feature)),i.setStyle(l))}});function Nl(i,l){var d=i.type==="Feature"?i.geometry:i,m=d?d.coordinates:null,w=[],C=l&&l.pointToLayer,I=l&&l.coordsToLatLng||yf,F,K,oe,he;if(!m&&!d)return null;switch(d.type){case"Point":return F=I(m),Og(C,i,F,l);case"MultiPoint":for(oe=0,he=m.length;oe<he;oe++)F=I(m[oe]),w.push(Og(C,i,F,l));return new vr(w);case"LineString":case"MultiLineString":return K=Bl(m,d.type==="LineString"?0:1,I),new yr(K,l);case"Polygon":case"MultiPolygon":return K=Bl(m,d.type==="Polygon"?1:2,I),new Ni(K,l);case"GeometryCollection":for(oe=0,he=d.geometries.length;oe<he;oe++){var Pe=Nl({geometry:d.geometries[oe],type:"Feature",properties:i.properties},l);Pe&&w.push(Pe)}return new vr(w);case"FeatureCollection":for(oe=0,he=d.features.length;oe<he;oe++){var Te=Nl(d.features[oe],l);Te&&w.push(Te)}return new vr(w);default:throw new Error("Invalid GeoJSON object.")}}function Og(i,l,d,m){return i?i(l,d):new Il(d,m&&m.markersInheritOptions&&m)}function yf(i){return new te(i[1],i[0],i[2])}function Bl(i,l,d){for(var m=[],w=0,C=i.length,I;w<C;w++)I=l?Bl(i[w],l-1,d):(d||yf)(i[w]),m.push(I);return m}function bf(i,l){return i=ie(i),i.alt!==void 0?[_(i.lng,l),_(i.lat,l),_(i.alt,l)]:[_(i.lng,l),_(i.lat,l)]}function Ml(i,l,d,m){for(var w=[],C=0,I=i.length;C<I;C++)w.push(l?Ml(i[C],mn(i[C])?0:l-1,d,m):bf(i[C],m));return!l&&d&&w.push(w[0].slice()),w}function Bi(i,l){return i.feature?o({},i.feature,{geometry:l}):Dl(l)}function Dl(i){return i.type==="Feature"||i.type==="FeatureCollection"?i:{type:"Feature",properties:{},geometry:i}}var xf={toGeoJSON:function(i){return Bi(this,{type:"Point",coordinates:bf(this.getLatLng(),i)})}};Il.include(xf),vf.include(xf),zl.include(xf),yr.include({toGeoJSON:function(i){var l=!mn(this._latlngs),d=Ml(this._latlngs,l?1:0,!1,i);return Bi(this,{type:(l?"Multi":"")+"LineString",coordinates:d})}}),Ni.include({toGeoJSON:function(i){var l=!mn(this._latlngs),d=l&&!mn(this._latlngs[0]),m=Ml(this._latlngs,d?2:l?1:0,!0,i);return l||(m=[m]),Bi(this,{type:(d?"Multi":"")+"Polygon",coordinates:m})}}),Ii.include({toMultiPoint:function(i){var l=[];return this.eachLayer(function(d){l.push(d.toGeoJSON(i).geometry.coordinates)}),Bi(this,{type:"MultiPoint",coordinates:l})},toGeoJSON:function(i){var l=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(l==="MultiPoint")return this.toMultiPoint(i);var d=l==="GeometryCollection",m=[];return this.eachLayer(function(w){if(w.toGeoJSON){var C=w.toGeoJSON(i);if(d)m.push(C.geometry);else{var I=Dl(C);I.type==="FeatureCollection"?m.push.apply(m,I.features):m.push(I)}}}),d?Bi(this,{geometries:m,type:"GeometryCollection"}):{type:"FeatureCollection",features:m}}});function Rg(i,l){return new br(i,l)}var $P=Rg,jl=Rn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(i,l,d){this._url=i,this._bounds=V(l),b(this,d)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Oe(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){at(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(i){return this.options.opacity=i,this._image&&this._updateOpacity(),this},setStyle:function(i){return i.opacity&&this.setOpacity(i.opacity),this},bringToFront:function(){return this._map&&Li(this._image),this},bringToBack:function(){return this._map&&Ai(this._image),this},setUrl:function(i){return this._url=i,this._image&&(this._image.src=i),this},setBounds:function(i){return this._bounds=V(i),this._map&&this._reset(),this},getEvents:function(){var i={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var i=this._url.tagName==="IMG",l=this._image=i?this._url:Ue("img");if(Oe(l,"leaflet-image-layer"),this._zoomAnimated&&Oe(l,"leaflet-zoom-animated"),this.options.className&&Oe(l,this.options.className),l.onselectstart=h,l.onmousemove=h,l.onload=s(this.fire,this,"load"),l.onerror=s(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),i){this._url=l.src;return}l.src=this._url,l.alt=this.options.alt},_animateZoom:function(i){var l=this._map.getZoomScale(i.zoom),d=this._map._latLngBoundsToNewLayerBounds(this._bounds,i.zoom,i.center).min;Do(this._image,d,l)},_reset:function(){var i=this._image,l=new R(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),d=l.getSize();gt(i,l.min),i.style.width=d.x+"px",i.style.height=d.y+"px"},_updateOpacity:function(){pn(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var i=this.options.errorOverlayUrl;i&&this._url!==i&&(this._url=i,this._image.src=i)},getCenter:function(){return this._bounds.getCenter()}}),UP=function(i,l,d){return new jl(i,l,d)},Tg=jl.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var i=this._url.tagName==="VIDEO",l=this._image=i?this._url:Ue("video");if(Oe(l,"leaflet-image-layer"),this._zoomAnimated&&Oe(l,"leaflet-zoom-animated"),this.options.className&&Oe(l,this.options.className),l.onselectstart=h,l.onmousemove=h,l.onloadeddata=s(this.fire,this,"load"),i){for(var d=l.getElementsByTagName("source"),m=[],w=0;w<d.length;w++)m.push(d[w].src);this._url=d.length>0?m:[l.src];return}S(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(l.style,"objectFit")&&(l.style.objectFit="fill"),l.autoplay=!!this.options.autoplay,l.loop=!!this.options.loop,l.muted=!!this.options.muted,l.playsInline=!!this.options.playsInline;for(var C=0;C<this._url.length;C++){var I=Ue("source");I.src=this._url[C],l.appendChild(I)}}});function WP(i,l,d){return new Tg(i,l,d)}var Lg=jl.extend({_initImage:function(){var i=this._image=this._url;Oe(i,"leaflet-image-layer"),this._zoomAnimated&&Oe(i,"leaflet-zoom-animated"),this.options.className&&Oe(i,this.options.className),i.onselectstart=h,i.onmousemove=h}});function HP(i,l,d){return new Lg(i,l,d)}var Xn=Rn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(i,l){i&&(i instanceof te||S(i))?(this._latlng=ie(i),b(this,l)):(b(this,i),this._source=l),this.options.content&&(this._content=this.options.content)},openOn:function(i){return i=arguments.length?i:this._source._map,i.hasLayer(this)||i.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(i){return this._map?this.close():(arguments.length?this._source=i:i=this._source,this._prepareOpen(),this.openOn(i._map)),this},onAdd:function(i){this._zoomAnimated=i._zoomAnimated,this._container||this._initLayout(),i._fadeAnimated&&pn(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),i._fadeAnimated&&pn(this._container,1),this.bringToFront(),this.options.interactive&&(Oe(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(i){i._fadeAnimated?(pn(this._container,0),this._removeTimeout=setTimeout(s(at,void 0,this._container),200)):at(this._container),this.options.interactive&&(pt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(i){return this._latlng=ie(i),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(i){return this._content=i,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var i={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Li(this._container),this},bringToBack:function(){return this._map&&Ai(this._container),this},_prepareOpen:function(i){var l=this._source;if(!l._map)return!1;if(l instanceof vr){l=null;var d=this._source._layers;for(var m in d)if(d[m]._map){l=d[m];break}if(!l)return!1;this._source=l}if(!i)if(l.getCenter)i=l.getCenter();else if(l.getLatLng)i=l.getLatLng();else if(l.getBounds)i=l.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(i),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var i=this._contentNode,l=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof l=="string")i.innerHTML=l;else{for(;i.hasChildNodes();)i.removeChild(i.firstChild);i.appendChild(l)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var i=this._map.latLngToLayerPoint(this._latlng),l=U(this.options.offset),d=this._getAnchor();this._zoomAnimated?gt(this._container,i.add(d)):l=l.add(i).add(d);var m=this._containerBottom=-l.y,w=this._containerLeft=-Math.round(this._containerWidth/2)+l.x;this._container.style.bottom=m+"px",this._container.style.left=w+"px"}},_getAnchor:function(){return[0,0]}});De.include({_initOverlay:function(i,l,d,m){var w=l;return w instanceof i||(w=new i(m).setContent(l)),d&&w.setLatLng(d),w}}),Rn.include({_initOverlay:function(i,l,d,m){var w=d;return w instanceof i?(b(w,m),w._source=this):(w=l&&!m?l:new i(m,this),w.setContent(d)),w}});var Fl=Xn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(i){return i=arguments.length?i:this._source._map,!i.hasLayer(this)&&i._popup&&i._popup.options.autoClose&&i.removeLayer(i._popup),i._popup=this,Xn.prototype.openOn.call(this,i)},onAdd:function(i){Xn.prototype.onAdd.call(this,i),i.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Hr||this._source.on("preclick",Fo))},onRemove:function(i){Xn.prototype.onRemove.call(this,i),i.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Hr||this._source.off("preclick",Fo))},getEvents:function(){var i=Xn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(i.preclick=this.close),this.options.keepInView&&(i.moveend=this._adjustPan),i},_initLayout:function(){var i="leaflet-popup",l=this._container=Ue("div",i+" "+(this.options.className||"")+" leaflet-zoom-animated"),d=this._wrapper=Ue("div",i+"-content-wrapper",l);if(this._contentNode=Ue("div",i+"-content",d),Ka(l),df(this._contentNode),Ee(l,"contextmenu",Fo),this._tipContainer=Ue("div",i+"-tip-container",l),this._tip=Ue("div",i+"-tip",this._tipContainer),this.options.closeButton){var m=this._closeButton=Ue("a",i+"-close-button",l);m.setAttribute("role","button"),m.setAttribute("aria-label","Close popup"),m.href="#close",m.innerHTML='<span aria-hidden="true">&#215;</span>',Ee(m,"click",function(w){Rt(w),this.close()},this)}},_updateLayout:function(){var i=this._contentNode,l=i.style;l.width="",l.whiteSpace="nowrap";var d=i.offsetWidth;d=Math.min(d,this.options.maxWidth),d=Math.max(d,this.options.minWidth),l.width=d+1+"px",l.whiteSpace="",l.height="";var m=i.offsetHeight,w=this.options.maxHeight,C="leaflet-popup-scrolled";w&&m>w?(l.height=w+"px",Oe(i,C)):pt(i,C),this._containerWidth=this._container.offsetWidth},_animateZoom:function(i){var l=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center),d=this._getAnchor();gt(this._container,l.add(d))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var i=this._map,l=parseInt(Ha(this._container,"marginBottom"),10)||0,d=this._container.offsetHeight+l,m=this._containerWidth,w=new O(this._containerLeft,-d-this._containerBottom);w._add(jo(this._container));var C=i.layerPointToContainerPoint(w),I=U(this.options.autoPanPadding),F=U(this.options.autoPanPaddingTopLeft||I),K=U(this.options.autoPanPaddingBottomRight||I),oe=i.getSize(),he=0,Pe=0;C.x+m+K.x>oe.x&&(he=C.x+m-oe.x+K.x),C.x-he-F.x<0&&(he=C.x-F.x),C.y+d+K.y>oe.y&&(Pe=C.y+d-oe.y+K.y),C.y-Pe-F.y<0&&(Pe=C.y-F.y),(he||Pe)&&(this.options.keepInView&&(this._autopanning=!0),i.fire("autopanstart").panBy([he,Pe]))}},_getAnchor:function(){return U(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),VP=function(i,l){return new Fl(i,l)};De.mergeOptions({closePopupOnClick:!0}),De.include({openPopup:function(i,l,d){return this._initOverlay(Fl,i,l,d).openOn(this),this},closePopup:function(i){return i=arguments.length?i:this._popup,i&&i.close(),this}}),Rn.include({bindPopup:function(i,l){return this._popup=this._initOverlay(Fl,this._popup,i,l),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(i){return this._popup&&(this instanceof vr||(this._popup._source=this),this._popup._prepareOpen(i||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(i){return this._popup&&this._popup.setContent(i),this},getPopup:function(){return this._popup},_openPopup:function(i){if(!(!this._popup||!this._map)){$o(i);var l=i.layer||i.target;if(this._popup._source===l&&!(l instanceof Hr)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(i.latlng);return}this._popup._source=l,this.openPopup(i.latlng)}},_movePopup:function(i){this._popup.setLatLng(i.latlng)},_onKeyPress:function(i){i.originalEvent.keyCode===13&&this._openPopup(i)}});var $l=Xn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(i){Xn.prototype.onAdd.call(this,i),this.setOpacity(this.options.opacity),i.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(i){Xn.prototype.onRemove.call(this,i),i.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var i=Xn.prototype.getEvents.call(this);return this.options.permanent||(i.preclick=this.close),i},_initLayout:function(){var i="leaflet-tooltip",l=i+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Ue("div",l),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+c(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(i){var l,d,m=this._map,w=this._container,C=m.latLngToContainerPoint(m.getCenter()),I=m.layerPointToContainerPoint(i),F=this.options.direction,K=w.offsetWidth,oe=w.offsetHeight,he=U(this.options.offset),Pe=this._getAnchor();F==="top"?(l=K/2,d=oe):F==="bottom"?(l=K/2,d=0):F==="center"?(l=K/2,d=oe/2):F==="right"?(l=0,d=oe/2):F==="left"?(l=K,d=oe/2):I.x<C.x?(F="right",l=0,d=oe/2):(F="left",l=K+(he.x+Pe.x)*2,d=oe/2),i=i.subtract(U(l,d,!0)).add(he).add(Pe),pt(w,"leaflet-tooltip-right"),pt(w,"leaflet-tooltip-left"),pt(w,"leaflet-tooltip-top"),pt(w,"leaflet-tooltip-bottom"),Oe(w,"leaflet-tooltip-"+F),gt(w,i)},_updatePosition:function(){var i=this._map.latLngToLayerPoint(this._latlng);this._setPosition(i)},setOpacity:function(i){this.options.opacity=i,this._container&&pn(this._container,i)},_animateZoom:function(i){var l=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center);this._setPosition(l)},_getAnchor:function(){return U(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),ZP=function(i,l){return new $l(i,l)};De.include({openTooltip:function(i,l,d){return this._initOverlay($l,i,l,d).openOn(this),this},closeTooltip:function(i){return i.close(),this}}),Rn.include({bindTooltip:function(i,l){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay($l,this._tooltip,i,l),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(i){if(!(!i&&this._tooltipHandlersAdded)){var l=i?"off":"on",d={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?d.add=this._openTooltip:(d.mouseover=this._openTooltip,d.mouseout=this.closeTooltip,d.click=this._openTooltip,this._map?this._addFocusListeners():d.add=this._addFocusListeners),this._tooltip.options.sticky&&(d.mousemove=this._moveTooltip),this[l](d),this._tooltipHandlersAdded=!i}},openTooltip:function(i){return this._tooltip&&(this instanceof vr||(this._tooltip._source=this),this._tooltip._prepareOpen(i)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(i){return this._tooltip&&this._tooltip.setContent(i),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(i){var l=i.getElement();l&&(Ee(l,"focus",function(){this._tooltip._source=i,this.openTooltip()},this),Ee(l,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(i){var l=i.getElement();l&&l.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(i){!this._tooltip||!this._map||this._map.dragging&&this._map.dragging.moving()||(this._tooltip._source=i.layer||i.target,this.openTooltip(this._tooltip.options.sticky?i.latlng:void 0))},_moveTooltip:function(i){var l=i.latlng,d,m;this._tooltip.options.sticky&&i.originalEvent&&(d=this._map.mouseEventToContainerPoint(i.originalEvent),m=this._map.containerPointToLayerPoint(d),l=this._map.layerPointToLatLng(m)),this._tooltip.setLatLng(l)}});var Ag=zi.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(i){var l=i&&i.tagName==="DIV"?i:document.createElement("div"),d=this.options;if(d.html instanceof Element?(El(l),l.appendChild(d.html)):l.innerHTML=d.html!==!1?d.html:"",d.bgPos){var m=U(d.bgPos);l.style.backgroundPosition=-m.x+"px "+-m.y+"px"}return this._setIconStyles(l,"icon"),l},createShadow:function(){return null}});function qP(i){return new Ag(i)}zi.Default=Ja;var Ya=Rn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:pe.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(i){b(this,i)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(i){i._addZoomLimit(this)},onRemove:function(i){this._removeAllTiles(),at(this._container),i._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Li(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Ai(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(i){return this.options.opacity=i,this._updateOpacity(),this},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var i=this._clampZoom(this._map.getZoom());i!==this._tileZoom&&(this._tileZoom=i,this._updateLevels()),this._update()}return this},getEvents:function(){var i={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=f(this._onMoveEnd,this.options.updateInterval,this)),i.move=this._onMove),this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},createTile:function(){return document.createElement("div")},getTileSize:function(){var i=this.options.tileSize;return i instanceof O?i:new O(i,i)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(i){for(var l=this.getPane().children,d=-i(-1/0,1/0),m=0,w=l.length,C;m<w;m++)C=l[m].style.zIndex,l[m]!==this._container&&C&&(d=i(d,+C));isFinite(d)&&(this.options.zIndex=d+i(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!pe.ielt9){pn(this._container,this.options.opacity);var i=+new Date,l=!1,d=!1;for(var m in this._tiles){var w=this._tiles[m];if(!(!w.current||!w.loaded)){var C=Math.min(1,(i-w.loaded)/200);pn(w.el,C),C<1?l=!0:(w.active?d=!0:this._onOpaqueTile(w),w.active=!0)}}d&&!this._noPrune&&this._pruneTiles(),l&&(G(this._fadeFrame),this._fadeFrame=H(this._updateOpacity,this))}},_onOpaqueTile:h,_initContainer:function(){this._container||(this._container=Ue("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var i=this._tileZoom,l=this.options.maxZoom;if(i!==void 0){for(var d in this._levels)d=Number(d),this._levels[d].el.children.length||d===i?(this._levels[d].el.style.zIndex=l-Math.abs(i-d),this._onUpdateLevel(d)):(at(this._levels[d].el),this._removeTilesAtZoom(d),this._onRemoveLevel(d),delete this._levels[d]);var m=this._levels[i],w=this._map;return m||(m=this._levels[i]={},m.el=Ue("div","leaflet-tile-container leaflet-zoom-animated",this._container),m.el.style.zIndex=l,m.origin=w.project(w.unproject(w.getPixelOrigin()),i).round(),m.zoom=i,this._setZoomTransform(m,w.getCenter(),w.getZoom()),h(m.el.offsetWidth),this._onCreateLevel(m)),this._level=m,m}},_onUpdateLevel:h,_onRemoveLevel:h,_onCreateLevel:h,_pruneTiles:function(){if(this._map){var i,l,d=this._map.getZoom();if(d>this.options.maxZoom||d<this.options.minZoom){this._removeAllTiles();return}for(i in this._tiles)l=this._tiles[i],l.retain=l.current;for(i in this._tiles)if(l=this._tiles[i],l.current&&!l.active){var m=l.coords;this._retainParent(m.x,m.y,m.z,m.z-5)||this._retainChildren(m.x,m.y,m.z,m.z+2)}for(i in this._tiles)this._tiles[i].retain||this._removeTile(i)}},_removeTilesAtZoom:function(i){for(var l in this._tiles)this._tiles[l].coords.z===i&&this._removeTile(l)},_removeAllTiles:function(){for(var i in this._tiles)this._removeTile(i)},_invalidateAll:function(){for(var i in this._levels)at(this._levels[i].el),this._onRemoveLevel(Number(i)),delete this._levels[i];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(i,l,d,m){var w=Math.floor(i/2),C=Math.floor(l/2),I=d-1,F=new O(+w,+C);F.z=+I;var K=this._tileCoordsToKey(F),oe=this._tiles[K];return oe&&oe.active?(oe.retain=!0,!0):(oe&&oe.loaded&&(oe.retain=!0),I>m?this._retainParent(w,C,I,m):!1)},_retainChildren:function(i,l,d,m){for(var w=2*i;w<2*i+2;w++)for(var C=2*l;C<2*l+2;C++){var I=new O(w,C);I.z=d+1;var F=this._tileCoordsToKey(I),K=this._tiles[F];if(K&&K.active){K.retain=!0;continue}else K&&K.loaded&&(K.retain=!0);d+1<m&&this._retainChildren(w,C,d+1,m)}},_resetView:function(i){var l=i&&(i.pinch||i.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),l,l)},_animateZoom:function(i){this._setView(i.center,i.zoom,!0,i.noUpdate)},_clampZoom:function(i){var l=this.options;return l.minNativeZoom!==void 0&&i<l.minNativeZoom?l.minNativeZoom:l.maxNativeZoom!==void 0&&l.maxNativeZoom<i?l.maxNativeZoom:i},_setView:function(i,l,d,m){var w=Math.round(l);this.options.maxZoom!==void 0&&w>this.options.maxZoom||this.options.minZoom!==void 0&&w<this.options.minZoom?w=void 0:w=this._clampZoom(w);var C=this.options.updateWhenZooming&&w!==this._tileZoom;(!m||C)&&(this._tileZoom=w,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),w!==void 0&&this._update(i),d||this._pruneTiles(),this._noPrune=!!d),this._setZoomTransforms(i,l)},_setZoomTransforms:function(i,l){for(var d in this._levels)this._setZoomTransform(this._levels[d],i,l)},_setZoomTransform:function(i,l,d){var m=this._map.getZoomScale(d,i.zoom),w=i.origin.multiplyBy(m).subtract(this._map._getNewPixelOrigin(l,d)).round();pe.any3d?Do(i.el,w,m):gt(i.el,w)},_resetGrid:function(){var i=this._map,l=i.options.crs,d=this._tileSize=this.getTileSize(),m=this._tileZoom,w=this._map.getPixelWorldBounds(this._tileZoom);w&&(this._globalTileRange=this._pxBoundsToTileRange(w)),this._wrapX=l.wrapLng&&!this.options.noWrap&&[Math.floor(i.project([0,l.wrapLng[0]],m).x/d.x),Math.ceil(i.project([0,l.wrapLng[1]],m).x/d.y)],this._wrapY=l.wrapLat&&!this.options.noWrap&&[Math.floor(i.project([l.wrapLat[0],0],m).y/d.x),Math.ceil(i.project([l.wrapLat[1],0],m).y/d.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(i){var l=this._map,d=l._animatingZoom?Math.max(l._animateToZoom,l.getZoom()):l.getZoom(),m=l.getZoomScale(d,this._tileZoom),w=l.project(i,this._tileZoom).floor(),C=l.getSize().divideBy(m*2);return new R(w.subtract(C),w.add(C))},_update:function(i){var l=this._map;if(l){var d=this._clampZoom(l.getZoom());if(i===void 0&&(i=l.getCenter()),this._tileZoom!==void 0){var m=this._getTiledPixelBounds(i),w=this._pxBoundsToTileRange(m),C=w.getCenter(),I=[],F=this.options.keepBuffer,K=new R(w.getBottomLeft().subtract([F,-F]),w.getTopRight().add([F,-F]));if(!(isFinite(w.min.x)&&isFinite(w.min.y)&&isFinite(w.max.x)&&isFinite(w.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var oe in this._tiles){var he=this._tiles[oe].coords;(he.z!==this._tileZoom||!K.contains(new O(he.x,he.y)))&&(this._tiles[oe].current=!1)}if(Math.abs(d-this._tileZoom)>1){this._setView(i,d);return}for(var Pe=w.min.y;Pe<=w.max.y;Pe++)for(var Te=w.min.x;Te<=w.max.x;Te++){var _n=new O(Te,Pe);if(_n.z=this._tileZoom,!!this._isValidTile(_n)){var Wo=this._tiles[this._tileCoordsToKey(_n)];Wo?Wo.current=!0:I.push(_n)}}if(I.sort(function(Vr,wf){return Vr.distanceTo(C)-wf.distanceTo(C)}),I.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Wl=document.createDocumentFragment();for(Te=0;Te<I.length;Te++)this._addTile(I[Te],Wl);this._level.el.appendChild(Wl)}}}},_isValidTile:function(i){var l=this._map.options.crs;if(!l.infinite){var d=this._globalTileRange;if(!l.wrapLng&&(i.x<d.min.x||i.x>d.max.x)||!l.wrapLat&&(i.y<d.min.y||i.y>d.max.y))return!1}if(!this.options.bounds)return!0;var m=this._tileCoordsToBounds(i);return V(this.options.bounds).overlaps(m)},_keyToBounds:function(i){return this._tileCoordsToBounds(this._keyToTileCoords(i))},_tileCoordsToNwSe:function(i){var l=this._map,d=this.getTileSize(),m=i.scaleBy(d),w=m.add(d),C=l.unproject(m,i.z),I=l.unproject(w,i.z);return[C,I]},_tileCoordsToBounds:function(i){var l=this._tileCoordsToNwSe(i),d=new M(l[0],l[1]);return this.options.noWrap||(d=this._map.wrapLatLngBounds(d)),d},_tileCoordsToKey:function(i){return i.x+":"+i.y+":"+i.z},_keyToTileCoords:function(i){var l=i.split(":"),d=new O(+l[0],+l[1]);return d.z=+l[2],d},_removeTile:function(i){var l=this._tiles[i];l&&(at(l.el),delete this._tiles[i],this.fire("tileunload",{tile:l.el,coords:this._keyToTileCoords(i)}))},_initTile:function(i){Oe(i,"leaflet-tile");var l=this.getTileSize();i.style.width=l.x+"px",i.style.height=l.y+"px",i.onselectstart=h,i.onmousemove=h,pe.ielt9&&this.options.opacity<1&&pn(i,this.options.opacity)},_addTile:function(i,l){var d=this._getTilePos(i),m=this._tileCoordsToKey(i),w=this.createTile(this._wrapCoords(i),s(this._tileReady,this,i));this._initTile(w),this.createTile.length<2&&H(s(this._tileReady,this,i,null,w)),gt(w,d),this._tiles[m]={el:w,coords:i,current:!0},l.appendChild(w),this.fire("tileloadstart",{tile:w,coords:i})},_tileReady:function(i,l,d){l&&this.fire("tileerror",{error:l,tile:d,coords:i});var m=this._tileCoordsToKey(i);d=this._tiles[m],d&&(d.loaded=+new Date,this._map._fadeAnimated?(pn(d.el,0),G(this._fadeFrame),this._fadeFrame=H(this._updateOpacity,this)):(d.active=!0,this._pruneTiles()),l||(Oe(d.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:d.el,coords:i})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),pe.ielt9||!this._map._fadeAnimated?H(this._pruneTiles,this):setTimeout(s(this._pruneTiles,this),250)))},_getTilePos:function(i){return i.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(i){var l=new O(this._wrapX?p(i.x,this._wrapX):i.x,this._wrapY?p(i.y,this._wrapY):i.y);return l.z=i.z,l},_pxBoundsToTileRange:function(i){var l=this.getTileSize();return new R(i.min.unscaleBy(l).floor(),i.max.unscaleBy(l).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var i in this._tiles)if(!this._tiles[i].loaded)return!1;return!0}});function KP(i){return new Ya(i)}var Mi=Ya.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(i,l){this._url=i,l=b(this,l),l.detectRetina&&pe.retina&&l.maxZoom>0?(l.tileSize=Math.floor(l.tileSize/2),l.zoomReverse?(l.zoomOffset--,l.minZoom=Math.min(l.maxZoom,l.minZoom+1)):(l.zoomOffset++,l.maxZoom=Math.max(l.minZoom,l.maxZoom-1)),l.minZoom=Math.max(0,l.minZoom)):l.zoomReverse?l.minZoom=Math.min(l.maxZoom,l.minZoom):l.maxZoom=Math.max(l.minZoom,l.maxZoom),typeof l.subdomains=="string"&&(l.subdomains=l.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(i,l){return this._url===i&&l===void 0&&(l=!0),this._url=i,l||this.redraw(),this},createTile:function(i,l){var d=document.createElement("img");return Ee(d,"load",s(this._tileOnLoad,this,l,d)),Ee(d,"error",s(this._tileOnError,this,l,d)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(d.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(d.referrerPolicy=this.options.referrerPolicy),d.alt="",d.src=this.getTileUrl(i),d},getTileUrl:function(i){var l={r:pe.retina?"@2x":"",s:this._getSubdomain(i),x:i.x,y:i.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var d=this._globalTileRange.max.y-i.y;this.options.tms&&(l.y=d),l["-y"]=d}return x(this._url,o(l,this.options))},_tileOnLoad:function(i,l){pe.ielt9?setTimeout(s(i,this,null,l),0):i(null,l)},_tileOnError:function(i,l,d){var m=this.options.errorTileUrl;m&&l.getAttribute("src")!==m&&(l.src=m),i(d,l)},_onTileRemove:function(i){i.tile.onload=null},_getZoomForUrl:function(){var i=this._tileZoom,l=this.options.maxZoom,d=this.options.zoomReverse,m=this.options.zoomOffset;return d&&(i=l-i),i+m},_getSubdomain:function(i){var l=Math.abs(i.x+i.y)%this.options.subdomains.length;return this.options.subdomains[l]},_abortLoading:function(){var i,l;for(i in this._tiles)if(this._tiles[i].coords.z!==this._tileZoom&&(l=this._tiles[i].el,l.onload=h,l.onerror=h,!l.complete)){l.src=T;var d=this._tiles[i].coords;at(l),delete this._tiles[i],this.fire("tileabort",{tile:l,coords:d})}},_removeTile:function(i){var l=this._tiles[i];if(l)return l.el.setAttribute("src",T),Ya.prototype._removeTile.call(this,i)},_tileReady:function(i,l,d){if(!(!this._map||d&&d.getAttribute("src")===T))return Ya.prototype._tileReady.call(this,i,l,d)}});function Ig(i,l){return new Mi(i,l)}var zg=Mi.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(i,l){this._url=i;var d=o({},this.defaultWmsParams);for(var m in l)m in this.options||(d[m]=l[m]);l=b(this,l);var w=l.detectRetina&&pe.retina?2:1,C=this.getTileSize();d.width=C.x*w,d.height=C.y*w,this.wmsParams=d},onAdd:function(i){this._crs=this.options.crs||i.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var l=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[l]=this._crs.code,Mi.prototype.onAdd.call(this,i)},getTileUrl:function(i){var l=this._tileCoordsToNwSe(i),d=this._crs,m=z(d.project(l[0]),d.project(l[1])),w=m.min,C=m.max,I=(this._wmsVersion>=1.3&&this._crs===Cg?[w.y,w.x,C.y,C.x]:[w.x,w.y,C.x,C.y]).join(","),F=Mi.prototype.getTileUrl.call(this,i);return F+P(this.wmsParams,F,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+I},setParams:function(i,l){return o(this.wmsParams,i),l||this.redraw(),this}});function QP(i,l){return new zg(i,l)}Mi.WMS=zg,Ig.wms=QP;var xr=Rn.extend({options:{padding:.1},initialize:function(i){b(this,i),c(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&Oe(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var i={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(i.zoomanim=this._onAnimZoom),i},_onAnimZoom:function(i){this._updateTransform(i.center,i.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(i,l){var d=this._map.getZoomScale(l,this._zoom),m=this._map.getSize().multiplyBy(.5+this.options.padding),w=this._map.project(this._center,l),C=m.multiplyBy(-d).add(w).subtract(this._map._getNewPixelOrigin(i,l));pe.any3d?Do(this._container,C,d):gt(this._container,C)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var i in this._layers)this._layers[i]._reset()},_onZoomEnd:function(){for(var i in this._layers)this._layers[i]._project()},_updatePaths:function(){for(var i in this._layers)this._layers[i]._update()},_update:function(){var i=this.options.padding,l=this._map.getSize(),d=this._map.containerPointToLayerPoint(l.multiplyBy(-i)).round();this._bounds=new R(d,d.add(l.multiplyBy(1+i*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Ng=xr.extend({options:{tolerance:0},getEvents:function(){var i=xr.prototype.getEvents.call(this);return i.viewprereset=this._onViewPreReset,i},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){xr.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var i=this._container=document.createElement("canvas");Ee(i,"mousemove",this._onMouseMove,this),Ee(i,"click dblclick mousedown mouseup contextmenu",this._onClick,this),Ee(i,"mouseout",this._handleMouseOut,this),i._leaflet_disable_events=!0,this._ctx=i.getContext("2d")},_destroyContainer:function(){G(this._redrawRequest),delete this._ctx,at(this._container),Xe(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var i;this._redrawBounds=null;for(var l in this._layers)i=this._layers[l],i._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){xr.prototype._update.call(this);var i=this._bounds,l=this._container,d=i.getSize(),m=pe.retina?2:1;gt(l,i.min),l.width=m*d.x,l.height=m*d.y,l.style.width=d.x+"px",l.style.height=d.y+"px",pe.retina&&this._ctx.scale(2,2),this._ctx.translate(-i.min.x,-i.min.y),this.fire("update")}},_reset:function(){xr.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(i){this._updateDashArray(i),this._layers[c(i)]=i;var l=i._order={layer:i,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=l),this._drawLast=l,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(i){this._requestRedraw(i)},_removePath:function(i){var l=i._order,d=l.next,m=l.prev;d?d.prev=m:this._drawLast=m,m?m.next=d:this._drawFirst=d,delete i._order,delete this._layers[c(i)],this._requestRedraw(i)},_updatePath:function(i){this._extendRedrawBounds(i),i._project(),i._update(),this._requestRedraw(i)},_updateStyle:function(i){this._updateDashArray(i),this._requestRedraw(i)},_updateDashArray:function(i){if(typeof i.options.dashArray=="string"){var l=i.options.dashArray.split(/[, ]+/),d=[],m,w;for(w=0;w<l.length;w++){if(m=Number(l[w]),isNaN(m))return;d.push(m)}i.options._dashArray=d}else i.options._dashArray=i.options.dashArray},_requestRedraw:function(i){this._map&&(this._extendRedrawBounds(i),this._redrawRequest=this._redrawRequest||H(this._redraw,this))},_extendRedrawBounds:function(i){if(i._pxBounds){var l=(i.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new R,this._redrawBounds.extend(i._pxBounds.min.subtract([l,l])),this._redrawBounds.extend(i._pxBounds.max.add([l,l]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var i=this._redrawBounds;if(i){var l=i.getSize();this._ctx.clearRect(i.min.x,i.min.y,l.x,l.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var i,l=this._redrawBounds;if(this._ctx.save(),l){var d=l.getSize();this._ctx.beginPath(),this._ctx.rect(l.min.x,l.min.y,d.x,d.y),this._ctx.clip()}this._drawing=!0;for(var m=this._drawFirst;m;m=m.next)i=m.layer,(!l||i._pxBounds&&i._pxBounds.intersects(l))&&i._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(i,l){if(this._drawing){var d,m,w,C,I=i._parts,F=I.length,K=this._ctx;if(F){for(K.beginPath(),d=0;d<F;d++){for(m=0,w=I[d].length;m<w;m++)C=I[d][m],K[m?"lineTo":"moveTo"](C.x,C.y);l&&K.closePath()}this._fillStroke(K,i)}}},_updateCircle:function(i){if(!(!this._drawing||i._empty())){var l=i._point,d=this._ctx,m=Math.max(Math.round(i._radius),1),w=(Math.max(Math.round(i._radiusY),1)||m)/m;w!==1&&(d.save(),d.scale(1,w)),d.beginPath(),d.arc(l.x,l.y/w,m,0,Math.PI*2,!1),w!==1&&d.restore(),this._fillStroke(d,i)}},_fillStroke:function(i,l){var d=l.options;d.fill&&(i.globalAlpha=d.fillOpacity,i.fillStyle=d.fillColor||d.color,i.fill(d.fillRule||"evenodd")),d.stroke&&d.weight!==0&&(i.setLineDash&&i.setLineDash(l.options&&l.options._dashArray||[]),i.globalAlpha=d.opacity,i.lineWidth=d.weight,i.strokeStyle=d.color,i.lineCap=d.lineCap,i.lineJoin=d.lineJoin,i.stroke())},_onClick:function(i){for(var l=this._map.mouseEventToLayerPoint(i),d,m,w=this._drawFirst;w;w=w.next)d=w.layer,d.options.interactive&&d._containsPoint(l)&&(!(i.type==="click"||i.type==="preclick")||!this._map._draggableMoved(d))&&(m=d);this._fireEvent(m?[m]:!1,i)},_onMouseMove:function(i){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var l=this._map.mouseEventToLayerPoint(i);this._handleMouseHover(i,l)}},_handleMouseOut:function(i){var l=this._hoveredLayer;l&&(pt(this._container,"leaflet-interactive"),this._fireEvent([l],i,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(i,l){if(!this._mouseHoverThrottled){for(var d,m,w=this._drawFirst;w;w=w.next)d=w.layer,d.options.interactive&&d._containsPoint(l)&&(m=d);m!==this._hoveredLayer&&(this._handleMouseOut(i),m&&(Oe(this._container,"leaflet-interactive"),this._fireEvent([m],i,"mouseover"),this._hoveredLayer=m)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,i),this._mouseHoverThrottled=!0,setTimeout(s(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(i,l,d){this._map._fireDOMEvent(l,d||l.type,i)},_bringToFront:function(i){var l=i._order;if(l){var d=l.next,m=l.prev;if(d)d.prev=m;else return;m?m.next=d:d&&(this._drawFirst=d),l.prev=this._drawLast,this._drawLast.next=l,l.next=null,this._drawLast=l,this._requestRedraw(i)}},_bringToBack:function(i){var l=i._order;if(l){var d=l.next,m=l.prev;if(m)m.next=d;else return;d?d.prev=m:m&&(this._drawLast=m),l.prev=null,l.next=this._drawFirst,this._drawFirst.prev=l,this._drawFirst=l,this._requestRedraw(i)}}});function Bg(i){return pe.canvas?new Ng(i):null}var Xa=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(i){return document.createElement("<lvml:"+i+' class="lvml">')}}catch{}return function(i){return document.createElement("<"+i+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),GP={_initContainer:function(){this._container=Ue("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(xr.prototype._update.call(this),this.fire("update"))},_initPath:function(i){var l=i._container=Xa("shape");Oe(l,"leaflet-vml-shape "+(this.options.className||"")),l.coordsize="1 1",i._path=Xa("path"),l.appendChild(i._path),this._updateStyle(i),this._layers[c(i)]=i},_addPath:function(i){var l=i._container;this._container.appendChild(l),i.options.interactive&&i.addInteractiveTarget(l)},_removePath:function(i){var l=i._container;at(l),i.removeInteractiveTarget(l),delete this._layers[c(i)]},_updateStyle:function(i){var l=i._stroke,d=i._fill,m=i.options,w=i._container;w.stroked=!!m.stroke,w.filled=!!m.fill,m.stroke?(l||(l=i._stroke=Xa("stroke")),w.appendChild(l),l.weight=m.weight+"px",l.color=m.color,l.opacity=m.opacity,m.dashArray?l.dashStyle=S(m.dashArray)?m.dashArray.join(" "):m.dashArray.replace(/( *, *)/g," "):l.dashStyle="",l.endcap=m.lineCap.replace("butt","flat"),l.joinstyle=m.lineJoin):l&&(w.removeChild(l),i._stroke=null),m.fill?(d||(d=i._fill=Xa("fill")),w.appendChild(d),d.color=m.fillColor||m.color,d.opacity=m.fillOpacity):d&&(w.removeChild(d),i._fill=null)},_updateCircle:function(i){var l=i._point.round(),d=Math.round(i._radius),m=Math.round(i._radiusY||d);this._setPath(i,i._empty()?"M0 0":"AL "+l.x+","+l.y+" "+d+","+m+" 0,"+65535*360)},_setPath:function(i,l){i._path.v=l},_bringToFront:function(i){Li(i._container)},_bringToBack:function(i){Ai(i._container)}},Ul=pe.vml?Xa:ce,es=xr.extend({_initContainer:function(){this._container=Ul("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Ul("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){at(this._container),Xe(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){xr.prototype._update.call(this);var i=this._bounds,l=i.getSize(),d=this._container;(!this._svgSize||!this._svgSize.equals(l))&&(this._svgSize=l,d.setAttribute("width",l.x),d.setAttribute("height",l.y)),gt(d,i.min),d.setAttribute("viewBox",[i.min.x,i.min.y,l.x,l.y].join(" ")),this.fire("update")}},_initPath:function(i){var l=i._path=Ul("path");i.options.className&&Oe(l,i.options.className),i.options.interactive&&Oe(l,"leaflet-interactive"),this._updateStyle(i),this._layers[c(i)]=i},_addPath:function(i){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(i._path),i.addInteractiveTarget(i._path)},_removePath:function(i){at(i._path),i.removeInteractiveTarget(i._path),delete this._layers[c(i)]},_updatePath:function(i){i._project(),i._update()},_updateStyle:function(i){var l=i._path,d=i.options;l&&(d.stroke?(l.setAttribute("stroke",d.color),l.setAttribute("stroke-opacity",d.opacity),l.setAttribute("stroke-width",d.weight),l.setAttribute("stroke-linecap",d.lineCap),l.setAttribute("stroke-linejoin",d.lineJoin),d.dashArray?l.setAttribute("stroke-dasharray",d.dashArray):l.removeAttribute("stroke-dasharray"),d.dashOffset?l.setAttribute("stroke-dashoffset",d.dashOffset):l.removeAttribute("stroke-dashoffset")):l.setAttribute("stroke","none"),d.fill?(l.setAttribute("fill",d.fillColor||d.color),l.setAttribute("fill-opacity",d.fillOpacity),l.setAttribute("fill-rule",d.fillRule||"evenodd")):l.setAttribute("fill","none"))},_updatePoly:function(i,l){this._setPath(i,de(i._parts,l))},_updateCircle:function(i){var l=i._point,d=Math.max(Math.round(i._radius),1),m=Math.max(Math.round(i._radiusY),1)||d,w="a"+d+","+m+" 0 1,0 ",C=i._empty()?"M0 0":"M"+(l.x-d)+","+l.y+w+d*2+",0 "+w+-d*2+",0 ";this._setPath(i,C)},_setPath:function(i,l){i._path.setAttribute("d",l)},_bringToFront:function(i){Li(i._path)},_bringToBack:function(i){Ai(i._path)}});pe.vml&&es.include(GP);function Mg(i){return pe.svg||pe.vml?new es(i):null}De.include({getRenderer:function(i){var l=i.options.renderer||this._getPaneRenderer(i.options.pane)||this.options.renderer||this._renderer;return l||(l=this._renderer=this._createRenderer()),this.hasLayer(l)||this.addLayer(l),l},_getPaneRenderer:function(i){if(i==="overlayPane"||i===void 0)return!1;var l=this._paneRenderers[i];return l===void 0&&(l=this._createRenderer({pane:i}),this._paneRenderers[i]=l),l},_createRenderer:function(i){return this.options.preferCanvas&&Bg(i)||Mg(i)}});var Dg=Ni.extend({initialize:function(i,l){Ni.prototype.initialize.call(this,this._boundsToLatLngs(i),l)},setBounds:function(i){return this.setLatLngs(this._boundsToLatLngs(i))},_boundsToLatLngs:function(i){return i=V(i),[i.getSouthWest(),i.getNorthWest(),i.getNorthEast(),i.getSouthEast()]}});function JP(i,l){return new Dg(i,l)}es.create=Ul,es.pointsToPath=de,br.geometryToLayer=Nl,br.coordsToLatLng=yf,br.coordsToLatLngs=Bl,br.latLngToCoords=bf,br.latLngsToCoords=Ml,br.getFeature=Bi,br.asFeature=Dl,De.mergeOptions({boxZoom:!0});var jg=Yn.extend({initialize:function(i){this._map=i,this._container=i._container,this._pane=i._panes.overlayPane,this._resetStateTimeout=0,i.on("unload",this._destroy,this)},addHooks:function(){Ee(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Xe(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){at(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(i){if(!i.shiftKey||i.which!==1&&i.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Va(),nf(),this._startPoint=this._map.mouseEventToContainerPoint(i),Ee(document,{contextmenu:$o,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(i){this._moved||(this._moved=!0,this._box=Ue("div","leaflet-zoom-box",this._container),Oe(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(i);var l=new R(this._point,this._startPoint),d=l.getSize();gt(this._box,l.min),this._box.style.width=d.x+"px",this._box.style.height=d.y+"px"},_finish:function(){this._moved&&(at(this._box),pt(this._container,"leaflet-crosshair")),Za(),rf(),Xe(document,{contextmenu:$o,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(i){if(!(i.which!==1&&i.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(s(this._resetState,this),0);var l=new M(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(l).fire("boxzoomend",{boxZoomBounds:l})}},_onKeyDown:function(i){i.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});De.addInitHook("addHandler","boxZoom",jg),De.mergeOptions({doubleClickZoom:!0});var Fg=Yn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(i){var l=this._map,d=l.getZoom(),m=l.options.zoomDelta,w=i.originalEvent.shiftKey?d-m:d+m;l.options.doubleClickZoom==="center"?l.setZoom(w):l.setZoomAround(i.containerPoint,w)}});De.addInitHook("addHandler","doubleClickZoom",Fg),De.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var $g=Yn.extend({addHooks:function(){if(!this._draggable){var i=this._map;this._draggable=new Wr(i._mapPane,i._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),i.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),i.on("zoomend",this._onZoomEnd,this),i.whenReady(this._onZoomEnd,this))}Oe(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){pt(this._map._container,"leaflet-grab"),pt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var i=this._map;if(i._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var l=V(this._map.options.maxBounds);this._offsetLimit=z(this._map.latLngToContainerPoint(l.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(l.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;i.fire("movestart").fire("dragstart"),i.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(i){if(this._map.options.inertia){var l=this._lastTime=+new Date,d=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(d),this._times.push(l),this._prunePositions(l)}this._map.fire("move",i).fire("drag",i)},_prunePositions:function(i){for(;this._positions.length>1&&i-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var i=this._map.getSize().divideBy(2),l=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=l.subtract(i).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(i,l){return i-(i-l)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var i=this._draggable._newPos.subtract(this._draggable._startPos),l=this._offsetLimit;i.x<l.min.x&&(i.x=this._viscousLimit(i.x,l.min.x)),i.y<l.min.y&&(i.y=this._viscousLimit(i.y,l.min.y)),i.x>l.max.x&&(i.x=this._viscousLimit(i.x,l.max.x)),i.y>l.max.y&&(i.y=this._viscousLimit(i.y,l.max.y)),this._draggable._newPos=this._draggable._startPos.add(i)}},_onPreDragWrap:function(){var i=this._worldWidth,l=Math.round(i/2),d=this._initialWorldOffset,m=this._draggable._newPos.x,w=(m-l+d)%i+l-d,C=(m+l+d)%i-l-d,I=Math.abs(w+d)<Math.abs(C+d)?w:C;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=I},_onDragEnd:function(i){var l=this._map,d=l.options,m=!d.inertia||i.noInertia||this._times.length<2;if(l.fire("dragend",i),m)l.fire("moveend");else{this._prunePositions(+new Date);var w=this._lastPos.subtract(this._positions[0]),C=(this._lastTime-this._times[0])/1e3,I=d.easeLinearity,F=w.multiplyBy(I/C),K=F.distanceTo([0,0]),oe=Math.min(d.inertiaMaxSpeed,K),he=F.multiplyBy(oe/K),Pe=oe/(d.inertiaDeceleration*I),Te=he.multiplyBy(-Pe/2).round();!Te.x&&!Te.y?l.fire("moveend"):(Te=l._limitOffset(Te,l.options.maxBounds),H(function(){l.panBy(Te,{duration:Pe,easeLinearity:I,noMoveStart:!0,animate:!0})}))}}});De.addInitHook("addHandler","dragging",$g),De.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Ug=Yn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(i){this._map=i,this._setPanDelta(i.options.keyboardPanDelta),this._setZoomDelta(i.options.zoomDelta)},addHooks:function(){var i=this._map._container;i.tabIndex<=0&&(i.tabIndex="0"),Ee(i,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Xe(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var i=document.body,l=document.documentElement,d=i.scrollTop||l.scrollTop,m=i.scrollLeft||l.scrollLeft;this._map._container.focus(),window.scrollTo(m,d)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(i){var l=this._panKeys={},d=this.keyCodes,m,w;for(m=0,w=d.left.length;m<w;m++)l[d.left[m]]=[-1*i,0];for(m=0,w=d.right.length;m<w;m++)l[d.right[m]]=[i,0];for(m=0,w=d.down.length;m<w;m++)l[d.down[m]]=[0,i];for(m=0,w=d.up.length;m<w;m++)l[d.up[m]]=[0,-1*i]},_setZoomDelta:function(i){var l=this._zoomKeys={},d=this.keyCodes,m,w;for(m=0,w=d.zoomIn.length;m<w;m++)l[d.zoomIn[m]]=i;for(m=0,w=d.zoomOut.length;m<w;m++)l[d.zoomOut[m]]=-i},_addHooks:function(){Ee(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Xe(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(i){if(!(i.altKey||i.ctrlKey||i.metaKey)){var l=i.keyCode,d=this._map,m;if(l in this._panKeys){if(!d._panAnim||!d._panAnim._inProgress)if(m=this._panKeys[l],i.shiftKey&&(m=U(m).multiplyBy(3)),d.options.maxBounds&&(m=d._limitOffset(U(m),d.options.maxBounds)),d.options.worldCopyJump){var w=d.wrapLatLng(d.unproject(d.project(d.getCenter()).add(m)));d.panTo(w)}else d.panBy(m)}else if(l in this._zoomKeys)d.setZoom(d.getZoom()+(i.shiftKey?3:1)*this._zoomKeys[l]);else if(l===27&&d._popup&&d._popup.options.closeOnEscapeKey)d.closePopup();else return;$o(i)}}});De.addInitHook("addHandler","keyboard",Ug),De.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Wg=Yn.extend({addHooks:function(){Ee(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Xe(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(i){var l=hg(i),d=this._map.options.wheelDebounceTime;this._delta+=l,this._lastMousePos=this._map.mouseEventToContainerPoint(i),this._startTime||(this._startTime=+new Date);var m=Math.max(d-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(s(this._performZoom,this),m),$o(i)},_performZoom:function(){var i=this._map,l=i.getZoom(),d=this._map.options.zoomSnap||0;i._stop();var m=this._delta/(this._map.options.wheelPxPerZoomLevel*4),w=4*Math.log(2/(1+Math.exp(-Math.abs(m))))/Math.LN2,C=d?Math.ceil(w/d)*d:w,I=i._limitZoom(l+(this._delta>0?C:-C))-l;this._delta=0,this._startTime=null,I&&(i.options.scrollWheelZoom==="center"?i.setZoom(l+I):i.setZoomAround(this._lastMousePos,l+I))}});De.addInitHook("addHandler","scrollWheelZoom",Wg);var YP=600;De.mergeOptions({tapHold:pe.touchNative&&pe.safari&&pe.mobile,tapTolerance:15});var Hg=Yn.extend({addHooks:function(){Ee(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Xe(this._map._container,"touchstart",this._onDown,this)},_onDown:function(i){if(clearTimeout(this._holdTimeout),i.touches.length===1){var l=i.touches[0];this._startPos=this._newPos=new O(l.clientX,l.clientY),this._holdTimeout=setTimeout(s(function(){this._cancel(),this._isTapValid()&&(Ee(document,"touchend",Rt),Ee(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",l))},this),YP),Ee(document,"touchend touchcancel contextmenu",this._cancel,this),Ee(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function i(){Xe(document,"touchend",Rt),Xe(document,"touchend touchcancel",i)},_cancel:function(){clearTimeout(this._holdTimeout),Xe(document,"touchend touchcancel contextmenu",this._cancel,this),Xe(document,"touchmove",this._onMove,this)},_onMove:function(i){var l=i.touches[0];this._newPos=new O(l.clientX,l.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(i,l){var d=new MouseEvent(i,{bubbles:!0,cancelable:!0,view:window,screenX:l.screenX,screenY:l.screenY,clientX:l.clientX,clientY:l.clientY});d._simulated=!0,l.target.dispatchEvent(d)}});De.addInitHook("addHandler","tapHold",Hg),De.mergeOptions({touchZoom:pe.touch,bounceAtZoomLimits:!0});var Vg=Yn.extend({addHooks:function(){Oe(this._map._container,"leaflet-touch-zoom"),Ee(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){pt(this._map._container,"leaflet-touch-zoom"),Xe(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(i){var l=this._map;if(!(!i.touches||i.touches.length!==2||l._animatingZoom||this._zooming)){var d=l.mouseEventToContainerPoint(i.touches[0]),m=l.mouseEventToContainerPoint(i.touches[1]);this._centerPoint=l.getSize()._divideBy(2),this._startLatLng=l.containerPointToLatLng(this._centerPoint),l.options.touchZoom!=="center"&&(this._pinchStartLatLng=l.containerPointToLatLng(d.add(m)._divideBy(2))),this._startDist=d.distanceTo(m),this._startZoom=l.getZoom(),this._moved=!1,this._zooming=!0,l._stop(),Ee(document,"touchmove",this._onTouchMove,this),Ee(document,"touchend touchcancel",this._onTouchEnd,this),Rt(i)}},_onTouchMove:function(i){if(!(!i.touches||i.touches.length!==2||!this._zooming)){var l=this._map,d=l.mouseEventToContainerPoint(i.touches[0]),m=l.mouseEventToContainerPoint(i.touches[1]),w=d.distanceTo(m)/this._startDist;if(this._zoom=l.getScaleZoom(w,this._startZoom),!l.options.bounceAtZoomLimits&&(this._zoom<l.getMinZoom()&&w<1||this._zoom>l.getMaxZoom()&&w>1)&&(this._zoom=l._limitZoom(this._zoom)),l.options.touchZoom==="center"){if(this._center=this._startLatLng,w===1)return}else{var C=d._add(m)._divideBy(2)._subtract(this._centerPoint);if(w===1&&C.x===0&&C.y===0)return;this._center=l.unproject(l.project(this._pinchStartLatLng,this._zoom).subtract(C),this._zoom)}this._moved||(l._moveStart(!0,!1),this._moved=!0),G(this._animRequest);var I=s(l._move,l,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=H(I,this,!0),Rt(i)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,G(this._animRequest),Xe(document,"touchmove",this._onTouchMove,this),Xe(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});De.addInitHook("addHandler","touchZoom",Vg),De.BoxZoom=jg,De.DoubleClickZoom=Fg,De.Drag=$g,De.Keyboard=Ug,De.ScrollWheelZoom=Wg,De.TapHold=Hg,De.TouchZoom=Vg,n.Bounds=R,n.Browser=pe,n.CRS=fe,n.Canvas=Ng,n.Circle=vf,n.CircleMarker=zl,n.Class=$,n.Control=On,n.DivIcon=Ag,n.DivOverlay=Xn,n.DomEvent=_P,n.DomUtil=pP,n.Draggable=Wr,n.Evented=se,n.FeatureGroup=vr,n.GeoJSON=br,n.GridLayer=Ya,n.Handler=Yn,n.Icon=zi,n.ImageOverlay=jl,n.LatLng=te,n.LatLngBounds=M,n.Layer=Rn,n.LayerGroup=Ii,n.LineUtil=OP,n.Map=De,n.Marker=Il,n.Mixin=SP,n.Path=Hr,n.Point=O,n.PolyUtil=RP,n.Polygon=Ni,n.Polyline=yr,n.Popup=Fl,n.PosAnimation=pg,n.Projection=TP,n.Rectangle=Dg,n.Renderer=xr,n.SVG=es,n.SVGOverlay=Lg,n.TileLayer=Mi,n.Tooltip=$l,n.Transformation=Re,n.Util=q,n.VideoOverlay=Tg,n.bind=s,n.bounds=z,n.canvas=Bg,n.circle=DP,n.circleMarker=MP,n.control=Qa,n.divIcon=qP,n.extend=o,n.featureGroup=zP,n.geoJSON=Rg,n.geoJson=$P,n.gridLayer=KP,n.icon=NP,n.imageOverlay=UP,n.latLng=ie,n.latLngBounds=V,n.layerGroup=IP,n.map=gP,n.marker=BP,n.point=U,n.polygon=FP,n.polyline=jP,n.popup=VP,n.rectangle=JP,n.setOptions=b,n.stamp=c,n.svg=Mg,n.svgOverlay=HP,n.tileLayer=Ig,n.tooltip=ZP,n.transformation=le,n.version=r,n.videoOverlay=WP;var XP=window.L;n.noConflict=function(){return window.L=XP,this},window.L=n})})(fL,$p);function hL(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nh,dS={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/nh=dS,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var a=typeof o;if(a==="string"||a==="number")n.push(o);else if(Array.isArray(o)){if(o.length){var s=t.apply(null,o);s&&n.push(s)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){n.push(o.toString());continue}for(var u in o)e.call(o,u)&&o[u]&&n.push(u)}}}return n.join(" ")}nh.exports?(t.default=t,nh.exports=t):window.classNames=t}();var rb,ob,ib,fr=hL(dS.exports);function pL(e){const t=a=>{var s;return(s=window?.matchMedia(a).matches)!==null&&s!==void 0&&s},[n,r]=k.useState(t(e)),o=()=>{r(t(e))};return k.useEffect(()=>{const a=window.matchMedia(e);return o(),a.addEventListener("change",o),()=>a.removeEventListener("change",o)},[e]),n}function Up(){return Up=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Up.apply(this,arguments)}var ab,sb,lb,mL=function(e){return k.createElement("svg",Up({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},e),rb||(rb=k.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),ob||(ob=k.createElement("path",{fillRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z",clipRule:"evenodd"})),ib||(ib=k.createElement("path",{fillRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z",clipRule:"evenodd"})))};function Wp(){return Wp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wp.apply(this,arguments)}var _L=function(e){return k.createElement("svg",Wp({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},e),ab||(ab=k.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),sb||(sb=k.createElement("path",{fillRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z",clipRule:"evenodd"})),lb||(lb=k.createElement("path",{fillRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z",clipRule:"evenodd"})))};function Ae(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var oo,An={panel:"Panel-module_panel__4VWNp","panel--mobile-layout":"Panel-module_panel--mobile-layout__OII-B",panel__pointer:"Panel-module_panel__pointer__BETJ8","panel__pointer-position":"Panel-module_panel__pointer-position__Zer8q","panel__content-wrapper--info":"Panel-module_panel__content-wrapper--info__lrfgo","panel__pointer--info":"Panel-module_panel__pointer--info__5OaTN","panel__content-wrapper--success":"Panel-module_panel__content-wrapper--success__k0JQD","panel__pointer--success":"Panel-module_panel__pointer--success__O-X6n","panel__content-wrapper--warning":"Panel-module_panel__content-wrapper--warning__vYY8E","panel__pointer--warning":"Panel-module_panel__pointer--warning__l5Zf8","panel__content-wrapper--error":"Panel-module_panel__content-wrapper--error__3LhKe","panel__pointer--error":"Panel-module_panel__pointer--error__4MGTF","panel__content-wrapper":"Panel-module_panel__content-wrapper__oiWk8","panel__icon-wrapper":"Panel-module_panel__icon-wrapper__631EQ",panel__content:"Panel-module_panel__content__U3cAc",panel__header:"Panel-module_panel__header__UJuRe",panel__body:"Panel-module_panel__body__gRd1x"};Ae(`/* breakpoints-xs */
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
`),function(e){e.Success="success",e.Info="info",e.Warning="warning",e.Error="error"}(oo||(oo={}));const gL=({size:e,variant:t})=>{switch(t){case oo.Info:case oo.Error:case oo.Warning:return j.createElement(mL,{style:{width:e,height:e},"data-testid":"panel-icon-info"});case oo.Success:return j.createElement(_L,{style:{width:e,height:e},"data-testid":"panel-icon-success"})}},vL=({children:e})=>j.createElement("div",{className:fr(An["panel__pointer-position"])},e),yL=({renderIcon:e=gL,title:t,children:n,variant:r=oo.Info,showPointer:o=!1,showIcon:a=!0,forceMobileLayout:s=!1,renderArrow:u=vL})=>{const c=(({forceMobileLayout:p})=>{const h=pL(`(max-width: ${dL})`);return!!p||h})({forceMobileLayout:s}),f=c?uL:cL;return j.createElement("div",{className:fr(An.panel,{[An["panel--mobile-layout"]]:c})},o&&u({children:j.createElement("div",{"data-testid":"panel-pointer",className:fr(An.panel__pointer,An[`panel__pointer--${r}`])})}),j.createElement("div",{"data-testid":"panel-content-wrapper",className:fr(An["panel__content-wrapper"],An[`panel__content-wrapper--${r}`])},a&&j.createElement("div",{"data-testid":"panel-icon-wrapper",className:An["panel__icon-wrapper"]},e({size:f,variant:r})),j.createElement("div",{className:An.panel__content},t&&j.createElement("h2",{className:An.panel__header},t),j.createElement("div",{className:An.panel__body},n))))};Ae(`.PopoverPanel-module_popover-panel__tGILa {
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
`);var ub;(function(e){e.Primary="primary",e.Secondary="secondary"})(ub||(ub={}));k.createContext(void 0);Ae(`.Accordion-module_accordion__LVhhv {
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
`);function R_(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}const Pc=e=>{var{svgIconComponent:t}=e,n=R_(e,["svgIconComponent"]);return k.isValidElement(t)?k.cloneElement(t,Object.assign({},n)):null};var Hp,Vp,Zp,nr={"altinn-button":"Button-module_altinn-button__66e22",icon:"Button-module_icon__-43u5","altinn-button--small":"Button-module_altinn-button--small__Dgk-Q","altinn-button--medium":"Button-module_altinn-button--medium__bOVBh","altinn-button--large":"Button-module_altinn-button--large__xStsn","altinn-button--full-width":"Button-module_altinn-button--full-width__MAP1E","altinn-button--dashed-border":"Button-module_altinn-button--dashed-border__qpC6S","altinn-button--only-icon":"Button-module_altinn-button--only-icon__dHhst","altinn-button--filled":"Button-module_altinn-button--filled__-w8IZ","altinn-button--outline":"Button-module_altinn-button--outline__NWnjl","altinn-button--quiet":"Button-module_altinn-button--quiet__2HgNN","altinn-button--filled--primary":"Button-module_altinn-button--filled--primary__qR1t6","altinn-button--filled--secondary":"Button-module_altinn-button--filled--secondary__RXBZU","altinn-button--filled--success":"Button-module_altinn-button--filled--success__-hCDf","altinn-button--filled--danger":"Button-module_altinn-button--filled--danger__dshZU","altinn-button--filled--inverted":"Button-module_altinn-button--filled--inverted__B3H2y","altinn-button--outline--primary":"Button-module_altinn-button--outline--primary__yrQtz","altinn-button--outline--secondary":"Button-module_altinn-button--outline--secondary__NQPoO","altinn-button--outline--success":"Button-module_altinn-button--outline--success__oAdH7","altinn-button--outline--danger":"Button-module_altinn-button--outline--danger__ngRhZ","altinn-button--outline--inverted":"Button-module_altinn-button--outline--inverted__opiJ3","altinn-button--quiet--primary":"Button-module_altinn-button--quiet--primary__ym-xv","altinn-button--quiet--secondary":"Button-module_altinn-button--quiet--secondary__LschY","altinn-button--quiet--success":"Button-module_altinn-button--quiet--success__AvIPs","altinn-button--quiet--danger":"Button-module_altinn-button--quiet--danger__buvJM","altinn-button--quiet--inverted":"Button-module_altinn-button--quiet--inverted__-VC-B"};Ae(`.Button-module_altinn-button__66e22 {
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
`),function(e){e.Small="small",e.Medium="medium",e.Large="large"}(Hp||(Hp={})),function(e){e.Primary="primary",e.Secondary="secondary",e.Success="success",e.Danger="danger",e.Inverted="inverted"}(Vp||(Vp={})),function(e){e.Filled="filled",e.Outline="outline",e.Quiet="quiet"}(Zp||(Zp={}));var qp,Kp;k.forwardRef((e,t)=>{var{children:n,color:r=Vp.Primary,variant:o=Zp.Filled,size:a=Hp.Small,fullWidth:s=!1,dashedBorder:u=!1,iconPlacement:c="left",icon:f,type:p="button",className:h}=e,_=R_(e,["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"]);return j.createElement("button",Object.assign({},_,{ref:t,className:fr(nr["altinn-button"],nr[`altinn-button--${a}`],nr[`altinn-button--${o}`],nr[`altinn-button--${r}`],nr[`altinn-button--${o}--${r}`],{[nr["altinn-button--full-width"]]:s},{[nr["altinn-button--dashed-border"]]:u},{[nr["altinn-button--only-icon"]]:!n&&f},h),type:p}),f&&c==="left"&&j.createElement(Pc,{svgIconComponent:f,className:nr.icon}),n,f&&c==="right"&&j.createElement(Pc,{svgIconComponent:f,className:nr.icon}))});(function(e){e.Primary="primary",e.Success="success"})(qp||(qp={})),function(e){e.Small="small",e.Medium="medium"}(Kp||(Kp={}));k.createContext({color:qp.Primary,size:Kp.Medium});Ae(`.Page-module_page__THNNc {
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
`);var bL={"page-content":"PageContent-module_page-content__-sHWi"};Ae(`.PageContent-module_page-content__-sHWi {
  --component-page_content-vertical-padding: 2rem;
  background-color: white;
  padding-top: var(--component-page_content-vertical-padding);
  padding-bottom: var(--component-page_content-vertical-padding);
  box-sizing: inherit;
}
`);const rh=({children:e})=>j.createElement("div",{className:fr(bL["page-content"])},e);var Qp;Ae(`.List-module_list__9aWGq {
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
`);var ti,Cc,di;(function(e){e.Default="default",e.Error="error",e.Disabled="disabled",e.ReadOnlyInfo="readonly-info",e.ReadOnlyConfirm="readonly-confirm"})(ti||(ti={})),function(e){e.ReadOnlyInfo="readonly-info",e.ReadOnlyConfirm="readonly-confirm"}(Cc||(Cc={})),function(e){e.None="none",e.Error="error",e.Search="search"}(di||(di={}));var cb;function Gp(){return Gp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gp.apply(this,arguments)}var db,xL=function(e){return k.createElement("svg",Gp({xmlns:"http://www.w3.org/2000/svg",width:16,height:15,fill:"none"},e),cb||(cb=k.createElement("path",{fill:"#fff",d:"M8 0C3.875 0 .5 3.375.5 7.5S3.875 15 8 15s7.5-3.375 7.5-7.5S12.125 0 8 0Zm.875 11.25H7.5V9.937h1.375v1.313ZM8.687 9h-1l-.312-4.875H9L8.687 9Z"})))};function Jp(){return Jp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jp.apply(this,arguments)}var wL=function(e){return k.createElement("svg",Jp({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",viewBox:"0 0 36 36"},e),db||(db=k.createElement("path",{fill:"#000",d:"M34 31.576 23.929 21.394c1.624-2.101 2.437-4.525 2.437-7.273C26.366 7.495 20.843 2 14.183 2S2 7.495 2 14.121s5.523 12.121 12.183 12.121c2.761 0 5.36-.97 7.31-2.424L31.725 34 34 31.576ZM5.249 14.12c0-4.848 4.06-8.889 8.934-8.889 4.873 0 8.934 4.04 8.934 8.89 0 4.848-4.061 8.888-8.934 8.888-4.873 0-8.934-4.04-8.934-8.889Z"})))},ir={InputWrapper:"InputWrapper-module_InputWrapper__us2BQ","InputWrapper--with-focus-effect":"InputWrapper-module_InputWrapper--with-focus-effect__24aF7","InputWrapper--default":"InputWrapper-module_InputWrapper--default__Lcj6I","InputWrapper--error":"InputWrapper-module_InputWrapper--error__C8fG3","InputWrapper--disabled":"InputWrapper-module_InputWrapper--disabled__p0H70","InputWrapper--readonly-info":"InputWrapper-module_InputWrapper--readonly-info__u6Mi8","InputWrapper--readonly-confirm":"InputWrapper-module_InputWrapper--readonly-confirm__Y-YY-","InputWrapper--search":"InputWrapper-module_InputWrapper--search__1aIP8","InputWrapper--with-padding":"InputWrapper-module_InputWrapper--with-padding__o-H2V",InputWrapper__field:"InputWrapper-module_InputWrapper__field__-Uwxu",InputWrapper__icon:"InputWrapper-module_InputWrapper__icon__tbkEy","InputWrapper__icon--disabled":"InputWrapper-module_InputWrapper__icon--disabled__mmqUt",InputWrapper__label:"InputWrapper-module_InputWrapper__label__tLifi"};Ae(`.InputWrapper-module_InputWrapper__us2BQ {
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
`);const SL=({variant:e,disabled:t=!1})=>e===di.Error?j.createElement("div",{className:ir.InputWrapper__icon},j.createElement(xL,{"data-testid":"input-icon-error"})):e===di.Search?j.createElement("div",{className:fr(ir.InputWrapper__icon,{[ir["InputWrapper__icon--disabled"]]:t})},j.createElement(wL,{"data-testid":"input-icon-search"})):null,kL=({isValid:e=!0,disabled:t=!1,readOnly:n=!1,isSearch:r=!1,label:o,inputId:a,inputRenderer:s,noFocusEffect:u,noPadding:c})=>{const f=k.useId(),p=a??f,{variant:h,iconVariant:_}=(({readOnly:v=!1,disabled:y=!1,isValid:b=!0,isSearch:P=!1}={})=>{let g=di.None;return P&&(g=di.Search),y?{variant:ti.Disabled,iconVariant:g}:v===!0||v===Cc.ReadOnlyInfo?{variant:ti.ReadOnlyInfo,iconVariant:g}:v===Cc.ReadOnlyConfirm?{variant:ti.ReadOnlyConfirm,iconVariant:g}:b===!1?{variant:ti.Error,iconVariant:di.Error}:{variant:ti.Default,iconVariant:g}})({readOnly:n,disabled:t,isValid:e,isSearch:r});return j.createElement(j.Fragment,null,o&&j.createElement("label",{"data-testid":"InputWrapper-label",className:fr(ir.InputWrapper__label),htmlFor:p},o),j.createElement("div",{"data-testid":"InputWrapper",className:fr(ir.InputWrapper,ir[`InputWrapper--${h}`],{[ir["InputWrapper--search"]]:r,[ir["InputWrapper--with-focus-effect"]]:!u,[ir["InputWrapper--with-padding"]]:!c})},j.createElement(SL,{variant:_,disabled:t}),s({className:ir.InputWrapper__field,inputId:p,variant:h})))},PL=e=>{var{id:t,onChange:n,disabled:r=!1,label:o}=e,a=R_(e,["id","onChange","disabled","label"]);return j.createElement(kL,{disabled:r,isSearch:!0,label:o,inputRenderer:({className:s,variant:u})=>{const c={id:t,disabled:r,className:fr(s)};return j.createElement("input",Object.assign({},c,a,{"data-testid":`${t}-${u}`,onChange:n}))}})};Ae(`.ErrorMessage-module_altinn-error-message-wrapper__zR1LF {
  color: var(--component-error_message-color-text);
  font-size: var(--component-error_message-font_size-xs);
}
`);Ae(`.Map-module_map__mpwLI {
  position: relative;
  height: 50rem;
  width: 100%;
}
`);var Yp,fb;Ae(`Table {
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
`),function(e){e.Header="header",e.Body="body",e.Footer="footer"}(Yp||(Yp={})),function(e){e.Descending="desc",e.Ascending="asc",e.NotSortable="notSortable",e.NotActive="notActive"}(fb||(fb={}));k.createContext(void 0);k.createContext({variantStandard:Yp.Body});Ae(`.TableHeader-module_table-header__mrqgB {
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
`);var hb;Ae(`.CheckboxRadioTemplate-module_altinn-template__x5xJ- {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(hb||(hb={}));var pb;Ae(`.RadioButton-module_altinn-radio__iDfpf {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(pb||(pb={}));Ae(`.Checkbox-module_altinn-checkbox__UGXBu {
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
`);var mb;Ae(`.FieldSet-module_altinn-field-set__NebiS {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(mb||(mb={}));var _b;Ae(`.CheckboxGroup-module_altinn-checkbox-group__Q7GlX {
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
`),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(_b||(_b={}));Ae(`.Pagination-module_pagination-icon__zVOLT {
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
`);var gb,vb;Ae(`.RadioGroup-module_altinn-radio-group__Eje9Q {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(gb||(gb={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(vb||(vb={}));let yb=0;function CL(e){const[t,n]=k.useState(e),r=e||t;return k.useEffect(()=>{t==null&&(yb+=1,n(`aksel-icon-${yb}`))},[t]),r}const bb=j["useId"];function fS(e){var t;if(bb!==void 0){const n=bb();return e??n.replace(/(:)/g,"")}return(t=CL(e))!==null&&t!==void 0?t:""}var EL=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const OL=k.forwardRef((e,t)=>{var{title:n,titleId:r}=e,o=EL(e,["title","titleId"]);let a=fS();return a=n?r||"title-"+a:void 0,k.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},o),n?k.createElement("title",{id:a},n):null,k.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-11c2.205 0 4 1.657 4 3.693 0 .986-.416 1.914-1.172 2.612l-.593.54-.294.28c-.477.466-.869.94-.936 1.417l-.01.144v.814h-1.991v-.814c0-1.254.84-2.214 1.675-3.002l.74-.68c.38-.35.59-.816.59-1.31 0-1.024-.901-1.856-2.01-1.856-1.054 0-1.922.755-2.002 1.71l-.006.145H8C8 6.657 9.794 5 12 5Z",fill:"currentColor"}))}),RL=OL;var TL=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const LL=k.forwardRef((e,t)=>{var{title:n,titleId:r}=e,o=TL(e,["title","titleId"]);let a=fS();return a=n?r||"title-"+a:void 0,k.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},o),n?k.createElement("title",{id:a},n):null,k.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 16a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-11c2.205 0 4 1.657 4 3.693 0 .986-.416 1.914-1.172 2.612l-.593.54-.294.28c-.477.466-.869.94-.936 1.417l-.01.144v.814h-1.991v-.814c0-1.254.84-2.214 1.675-3.002l.74-.68c.38-.35.59-.816.59-1.31 0-1.024-.901-1.856-2.01-1.856-1.054 0-1.922.755-2.002 1.71l-.006.145H8C8 6.657 9.794 5 12 5Z",fill:"currentColor"}))}),AL=LL;function T_(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}var el;(function(e){e.event="event",e.props="prop"})(el||(el={}));function Rr(){}function vi(e){return!!(e||"").match(/\d/)}function fi(e){return e==null}function IL(e){return typeof e=="number"&&isNaN(e)}function hS(e){return fi(e)||IL(e)||typeof e=="number"&&!isFinite(e)}function pS(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function zL(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function NL(e,t,n){var r=zL(n),o=e.search(/[1-9]/);return o=o===-1?e.length:o,e.substring(0,o)+e.substring(o,e.length).replace(r,"$1"+t)}function BL(e){var t=k.useRef(e);t.current=e;var n=k.useRef(function(){for(var r=[],o=arguments.length;o--;)r[o]=arguments[o];return t.current.apply(t,r)});return n.current}function L_(e,t){t===void 0&&(t=!0);var n=e[0]==="-",r=n&&t;e=e.replace("-","");var o=e.split("."),a=o[0],s=o[1]||"";return{beforeDecimal:a,afterDecimal:s,hasNegation:n,addNegation:r}}function ML(e){if(!e)return e;var t=e[0]==="-";t&&(e=e.substring(1,e.length));var n=e.split("."),r=n[0].replace(/^0+/,"")||"0",o=n[1]||"";return(t?"-":"")+r+(o?"."+o:"")}function mS(e,t,n){for(var r="",o=n?"0":"",a=0;a<=t-1;a++)r+=e[a]||o;return r}function xb(e,t){return Array(t+1).join(e)}function _S(e){var t=e+"",n=t[0]==="-"?"-":"";n&&(t=t.substring(1));var r=t.split(/[eE]/g),o=r[0],a=r[1];if(a=Number(a),!a)return n+o;o=o.replace(".","");var s=1+a,u=o.length;return s<0?o="0."+xb("0",Math.abs(s))+o:s>=u?o=o+xb("0",s-u):o=(o.substring(0,s)||"0")+"."+o.substring(s),n+o}function wb(e,t,n){if(["","-"].indexOf(e)!==-1)return e;var r=(e.indexOf(".")!==-1||n)&&t,o=L_(e),a=o.beforeDecimal,s=o.afterDecimal,u=o.hasNegation,c=parseFloat("0."+(s||"0")),f=s.length<=t?"0."+s:c.toFixed(t),p=f.split("."),h=a.split("").reverse().reduce(function(b,P,g){return b.length>g?(Number(b[0])+Number(P)).toString()+b.substring(1,b.length):P+b},p[0]),_=mS(p[1]||"",t,n),v=u?"-":"",y=r?".":"";return""+v+h+y+_}function eo(e,t){if(e.value=e.value,e!==null){if(e.createTextRange){var n=e.createTextRange();return n.move("character",t),n.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}function gS(e,t){for(var n=0,r=0,o=e.length,a=t.length;e[n]===t[n]&&n<o;)n++;for(;e[o-1-r]===t[a-1-r]&&a-r>n&&o-r>n;)r++;return{from:{start:n,end:o-r},to:{start:n,end:a-r}}}function DL(e,t,n){return Math.min(Math.max(e,t),n)}function oh(e){return Math.max(e.selectionStart,e.selectionEnd)}function jL(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function vS(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function yS(e,t){return e===void 0&&(e=" "),typeof e=="string"?e:e[t]||" "}function FL(e,t,n,r,o,a){var s=gS(n,e),u=s.from,c=s.to;if(u.end-u.start===1&&u.end===c.end&&c.end===r)return r;var f=o.findIndex(function(T){return T}),p=e.slice(0,f);!t&&!n.startsWith(p)&&(n=p+n,r=r+p.length);for(var h=n.length,_=e.length,v={},y=new Array(h),b=0;b<h;b++){y[b]=-1;for(var P=0,g=_;P<g;P++)if(n[b]===e[P]&&v[P]!==!0){y[b]=P,v[P]=!0;break}}for(var x=r;x<h&&(y[x]===-1||!a(n[x]));)x++;var S=x===h||y[x]===-1?_:y[x];for(x=r-1;x>0&&y[x]===-1;)x--;var E=x===-1||y[x]===-1?0:y[x]+1;return E>S?S:r-E<S-r?E:S}function Ec(e,t,n,r){var o=e.length;if(t=DL(t,0,o),r==="left"){for(;t>=0&&!n[t];)t--;t===-1&&(t=n.indexOf(!0))}else{for(;t<=o&&!n[t];)t++;t>o&&(t=n.lastIndexOf(!0))}return t===-1&&(t=o),t}function $L(e){for(var t=Array.from({length:e.length+1}).map(function(){return!0}),n=0,r=t.length;n<r;n++)t[n]=!!(vi(e[n])||vi(e[n-1]));return t}function bS(e,t,n,r,o,a){a===void 0&&(a=Rr);var s=BL(function(y,b){var P,g;return hS(y)?(g="",P=""):typeof y=="number"||b?(g=typeof y=="number"?_S(y):y,P=r(g)):(g=o(y,void 0),P=r(g)),{formattedValue:P,numAsString:g}}),u=k.useState(function(){return s(fi(e)?t:e,n)}),c=u[0],f=u[1],p=function(y,b){y.formattedValue!==c.formattedValue&&f({formattedValue:y.formattedValue,numAsString:y.value}),a(y,b)},h=e,_=n;fi(e)&&(h=c.numAsString,_=!0);var v=s(h,_);return k.useMemo(function(){f(v)},[v.formattedValue]),[c,p]}function UL(e){return e.replace(/[^0-9]/g,"")}function WL(e){return e}function xS(e){var t=e.type;t===void 0&&(t="text");var n=e.displayType;n===void 0&&(n="input");var r=e.customInput,o=e.renderText,a=e.getInputRef,s=e.format;s===void 0&&(s=WL);var u=e.removeFormatting;u===void 0&&(u=UL);var c=e.defaultValue,f=e.valueIsNumericString,p=e.onValueChange,h=e.isAllowed,_=e.onChange;_===void 0&&(_=Rr);var v=e.onKeyDown;v===void 0&&(v=Rr);var y=e.onMouseUp;y===void 0&&(y=Rr);var b=e.onFocus;b===void 0&&(b=Rr);var P=e.onBlur;P===void 0&&(P=Rr);var g=e.value,x=e.getCaretBoundary;x===void 0&&(x=$L);var S=e.isValidInputCharacter;S===void 0&&(S=vi);var E=T_(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter"]),T=bS(g,c,!!f,s,u,p),A=T[0],N=A.formattedValue,D=A.numAsString,W=T[1],B=k.useRef({formattedValue:N,numAsString:D}),H=function(ee,ce){B.current={formattedValue:ee.formattedValue,numAsString:ee.value},W(ee,ce)},G=k.useState(!1),q=G[0],$=G[1],re=k.useRef(null),Z=k.useRef({setCaretTimeout:null,focusTimeout:null});k.useEffect(function(){return $(!0),function(){clearTimeout(Z.current.setCaretTimeout),clearTimeout(Z.current.focusTimeout)}},[]);var se=s,O=function(ee,ce){var de=parseFloat(ce);return{formattedValue:ee,value:ce,floatValue:isNaN(de)?void 0:de}},Y=function(ee,ce,de){ee.selectionStart===0&&ee.selectionEnd===ee.value.length||(eo(ee,ce),Z.current.setCaretTimeout=setTimeout(function(){ee.value===de&&ee.selectionStart!==ee.selectionEnd&&eo(ee,ce)},0))},U=function(ee,ce,de){return Ec(ee,ce,x(ee),de)},R=function(ee,ce,de){var _e=x(ce),ke=FL(ce,N,ee,de,_e,S);return ke=Ec(ce,ke,_e),ke},z=function(ee){var ce=ee.formattedValue;ce===void 0&&(ce="");var de=ee.input,_e=ee.setCaretPosition;_e===void 0&&(_e=!0);var ke=ee.source,Ne=ee.event,$e=ee.numAsString,Ye=ee.caretPos;if(de){if(Ye===void 0&&_e){var tt=ee.inputValue||de.value,qt=oh(de);de.value=ce,Ye=R(tt,ce,qt)}de.value=ce,_e&&Ye!==void 0&&Y(de,Ye,ce)}ce!==N&&H(O(ce,$e),{event:Ne,source:ke})};k.useEffect(function(){var ee=B.current,ce=ee.formattedValue,de=ee.numAsString;N!==ce&&(N!==D||ce!==de)&&H(O(N,D),{event:void 0,source:el.props})},[N,D]);var M=re.current?oh(re.current):void 0,V=typeof window<"u"?k.useLayoutEffect:k.useEffect;V(function(){var ee=re.current;if(N!==B.current.formattedValue&&ee){var ce=R(B.current.formattedValue,N,M);ee.value=N,Y(ee,ce,N)}},[N]);var te=function(ee,ce,de){var _e=gS(N,ee),ke=Object.assign(Object.assign({},_e),{lastValue:N}),Ne=u(ee,ke),$e=se(Ne);if(Ne=u($e,void 0),h&&!h(O($e,Ne))){var Ye=ce.target,tt=oh(Ye),qt=R(ee,N,tt);return Ye.value=N,Y(Ye,qt,N),!1}return z({formattedValue:$e,numAsString:Ne,inputValue:ee,event:ce,source:de,setCaretPosition:!0,input:ce.target}),!0},ie=function(ee){var ce=ee.target,de=ce.value,_e=te(de,ee,el.event);_e&&_(ee)},fe=function(ee){var ce=ee.target,de=ee.key,_e=ce.selectionStart,ke=ce.selectionEnd,Ne=ce.value;Ne===void 0&&(Ne="");var $e;if(de==="ArrowLeft"||de==="Backspace"?$e=Math.max(_e-1,0):de==="ArrowRight"?$e=Math.min(_e+1,Ne.length):de==="Delete"&&($e=_e),$e===void 0||_e!==ke){v(ee);return}var Ye=$e;if(de==="ArrowLeft"||de==="ArrowRight"){var tt=de==="ArrowLeft"?"left":"right";Ye=U(Ne,$e,tt),Ye!==$e&&ee.preventDefault()}else de==="Delete"&&!S(Ne[$e])?Ye=U(Ne,$e,"right"):de==="Backspace"&&!S(Ne[$e])&&(Ye=U(Ne,$e,"left"));Ye!==$e&&Y(ce,Ye,Ne),ee.isUnitTestRun&&Y(ce,Ye,Ne),v(ee)},be=function(ee){var ce=ee.target,de=ce.selectionStart,_e=ce.selectionEnd,ke=ce.value;if(ke===void 0&&(ke=""),de===_e){var Ne=U(ke,de);Ne!==de&&Y(ce,Ne,ke)}y(ee)},Je=function(ee){ee.persist&&ee.persist();var ce=ee.target;re.current=ce,Z.current.focusTimeout=setTimeout(function(){var de=ce.selectionStart,_e=ce.selectionEnd,ke=ce.value;ke===void 0&&(ke="");var Ne=U(ke,de);Ne!==de&&!(de===0&&_e===ke.length)&&Y(ce,Ne,ke),b(ee)},0)},Ze=function(ee){re.current=null,clearTimeout(Z.current.focusTimeout),clearTimeout(Z.current.setCaretTimeout),P(ee)},Re=q&&jL()?"numeric":void 0,le=Object.assign({inputMode:Re},E,{type:t,value:N,onChange:ie,onKeyDown:fe,onMouseUp:be,onFocus:Je,onBlur:Ze});if(n==="text")return o?j.createElement(j.Fragment,null,o(N,E)||null):j.createElement("span",Object.assign({},E,{ref:a}),N);if(r){var me=r;return j.createElement(me,Object.assign({},le,{ref:a}))}return j.createElement("input",Object.assign({},le,{ref:a}))}function Sb(e,t){var n=t.decimalScale,r=t.fixedDecimalScale,o=t.prefix;o===void 0&&(o="");var a=t.suffix;a===void 0&&(a="");var s=t.allowNegative,u=t.thousandsGroupStyle;if(u===void 0&&(u="thousand"),e===""||e==="-")return e;var c=Dd(t),f=c.thousandSeparator,p=c.decimalSeparator,h=n!==0&&e.indexOf(".")!==-1||n&&r,_=L_(e,s),v=_.beforeDecimal,y=_.afterDecimal,b=_.addNegation;return n!==void 0&&(y=mS(y,n,!!r)),f&&(v=NL(v,f,u)),o&&(v=o+v),a&&(y=y+a),b&&(v="-"+v),e=v+(h&&p||"")+y,e}function Dd(e){var t=e.decimalSeparator;t===void 0&&(t=".");var n=e.thousandSeparator,r=e.allowedDecimalSeparators;return n===!0&&(n=","),r||(r=[t,"."]),{decimalSeparator:t,thousandSeparator:n,allowedDecimalSeparators:r}}function HL(e,t){e===void 0&&(e="");var n=new RegExp("(-)"),r=new RegExp("(-)(.)*(-)"),o=n.test(e),a=r.test(e);return e=e.replace(/-/g,""),o&&!a&&t&&(e="-"+e),e}function VL(e,t){return new RegExp("(^-)|[0-9]|"+pS(e),t?"g":void 0)}function ZL(e,t,n){return e===""?!0:!t?.match(/\d/)&&!n?.match(/\d/)&&typeof e=="string"&&!isNaN(Number(e))}function qL(e,t,n){var r;t===void 0&&(t=vS(e));var o=n.allowNegative,a=n.prefix;a===void 0&&(a="");var s=n.suffix;s===void 0&&(s="");var u=n.decimalScale,c=t.from,f=t.to,p=f.start,h=f.end,_=Dd(n),v=_.allowedDecimalSeparators,y=_.decimalSeparator,b=e[h]===y;if(vi(e)&&(e===a||e===s)&&t.lastValue==="")return e;if(h-p===1&&v.indexOf(e[p])!==-1){var P=u===0?"":y;e=e.substring(0,p)+P+e.substring(p+1,e.length)}var g=function(se,O,Y){var U=!1,R=!1;a.startsWith("-")?U=!1:se.startsWith("--")?(U=!1,R=!0):s.startsWith("-")&&se.length===s.length?U=!1:se[0]==="-"&&(U=!0);var z=U?1:0;return R&&(z=2),z&&(se=se.substring(z),O-=z,Y-=z),{value:se,start:O,end:Y,hasNegation:U}},x=g(e,p,h),S=x.hasNegation;r=x,e=r.value,p=r.start,h=r.end;var E=g(t.lastValue,c.start,c.end),T=E.start,A=E.end,N=E.value,D=e.substring(p,h);e.length&&N.length&&(T>N.length-s.length||A<a.length)&&!(D&&s.startsWith(D))&&(e=N);var W=0;e.startsWith(a)?W+=a.length:p<a.length&&(W=p),e=e.substring(W),h-=W;var B=e.length,H=e.length-s.length;e.endsWith(s)?B=H:(h>H||h>e.length-s.length)&&(B=h),e=e.substring(0,B),e=HL(S?"-"+e:e,o),e=(e.match(VL(y,!0))||[]).join("");var G=e.indexOf(y);e=e.replace(new RegExp(pS(y),"g"),function(se,O){return O===G?".":""});var q=L_(e,o),$=q.beforeDecimal,re=q.afterDecimal,Z=q.addNegation;return f.end-f.start<c.end-c.start&&$===""&&b&&!parseFloat(re)&&(e=Z?"-":""),e}function KL(e,t){var n=t.prefix;n===void 0&&(n="");var r=t.suffix;r===void 0&&(r="");var o=Array.from({length:e.length+1}).map(function(){return!0}),a=e[0]==="-";o.fill(!1,0,n.length+(a?1:0));var s=e.length;return o.fill(!1,s-r.length+1,s+1),o}function QL(e){var t=Dd(e),n=t.thousandSeparator,r=t.decimalSeparator,o=e.prefix;o===void 0&&(o="");var a=e.allowNegative;if(a===void 0&&(a=!0),n===r)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+n+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+r+` (default value for decimalSeparator is .)
     `);return o.startsWith("-")&&a&&(console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+o+`
      allowNegative: `+a+`
    `),a=!1),Object.assign(Object.assign({},e),{allowNegative:a})}function GL(e){e=QL(e);var t=e.decimalSeparator;t===void 0&&(t="."),e.allowedDecimalSeparators,e.thousandsGroupStyle;var n=e.suffix,r=e.allowNegative,o=e.allowLeadingZeros,a=e.onKeyDown;a===void 0&&(a=Rr);var s=e.onBlur;s===void 0&&(s=Rr);var u=e.thousandSeparator,c=e.decimalScale,f=e.fixedDecimalScale,p=e.prefix;p===void 0&&(p="");var h=e.defaultValue,_=e.value,v=e.valueIsNumericString,y=e.onValueChange,b=T_(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),P=function(q){return Sb(q,e)},g=function(q,$){return qL(q,$,e)},x=fi(_)?h:_,S=v??ZL(x,p,n);fi(_)?fi(h)||(S=v||typeof h=="number"):S=v||typeof _=="number";var E=function(q){return hS(q)?q:(typeof q=="number"&&(q=_S(q)),S&&typeof c=="number"?wb(q,c,!!f):q)},T=bS(E(_),E(h),!!S,P,g,y),A=T[0],N=A.numAsString,D=A.formattedValue,W=T[1],B=function(q){var $=q.target,re=q.key,Z=$.selectionStart,se=$.selectionEnd,O=$.value;if(O===void 0&&(O=""),Z!==se){a(q);return}re==="Backspace"&&O[0]==="-"&&Z===p.length+1&&r&&eo($,1);var Y=Dd(e),U=Y.decimalSeparator,R=Y.allowedDecimalSeparators;re==="Backspace"&&O[Z-1]===U&&c&&f&&(eo($,Z-1),q.preventDefault()),R?.includes(re)&&O[Z]===U&&eo($,Z+1);var z=u===!0?",":u;re==="Backspace"&&O[Z-1]===z&&eo($,Z-1),re==="Delete"&&O[Z]===z&&eo($,Z+1),a(q)},H=function(q){var $=N;if($.match(/\d/g)||($=""),o||($=ML($)),f&&c&&($=wb($,c,f)),$!==N){var re=Sb($,e);W({formattedValue:re,value:$,floatValue:parseFloat($)},{event:q,source:el.event})}s(q)},G=function(q){return q===t?!0:vi(q)};return Object.assign(Object.assign({},b),{value:D,valueIsNumericString:!1,isValidInputCharacter:G,onValueChange:W,format:P,removeFormatting:g,getCaretBoundary:function(q){return KL(q,e)},onKeyDown:B,onBlur:H})}function JL(e){var t=GL(e);return j.createElement(xS,Object.assign({},t))}function YL(e,t){var n=t.format,r=t.allowEmptyFormatting,o=t.mask,a=t.patternChar;if(a===void 0&&(a="#"),e===""&&!r)return"";for(var s=0,u=n.split(""),c=0,f=n.length;c<f;c++)n[c]===a&&(u[c]=e[s]||yS(o,s),s+=1);return u.join("")}function XL(e,t,n){t===void 0&&(t=vS(e));var r=n.format,o=n.patternChar;o===void 0&&(o="#");var a=t.from,s=t.to,u=t.lastValue;u===void 0&&(u="");var c=function(P){return r[P]===o},f=function(P,g){for(var x="",S=0;S<P.length;S++)c(g+S)&&vi(P[S])&&(x+=P[S]);return x},p=function(P){return P.replace(/[^0-9]/g,"")};if(!r.match(/\d/))return p(e);if(u===""&&e.length===r.length){for(var h="",_=0;_<e.length;_++)if(c(_))vi(e[_])&&(h+=e[_]);else if(e[_]!==r[_])return p(e);return h}var v=u.substring(0,a.start),y=e.substring(s.start,s.end),b=u.substring(a.end);return""+f(v,0)+p(y)+f(b,a.end)}function eA(e,t){var n=t.format,r=t.mask,o=t.patternChar;o===void 0&&(o="#");var a=Array.from({length:e.length+1}).map(function(){return!0}),s=0,u=-1,c={};n.split("").forEach(function(_,v){var y=void 0;_===o&&(s++,y=yS(r,s-1),u===-1&&e[v]===y&&(u=v)),c[v]=y});for(var f=function(_){return n[_]===o&&e[_]!==c[_]},p=0,h=a.length;p<h;p++)a[p]=p===u||f(p)||f(p-1);return a[n.indexOf(o)]=!0,a}function tA(e){var t=e.mask;if(t){var n=t==="string"?t:t.toString();if(n.match(/\d/g))throw new Error("Mask "+t+" should not contain numeric character;")}}function nA(e,t){return e===""?!0:!t?.match(/\d/)&&typeof e=="string"&&(!!e.match(/^\d+$/)||e==="")}function rA(e){e.mask,e.allowEmptyFormatting;var t=e.format,n=e.inputMode;n===void 0&&(n="numeric");var r=e.onKeyDown;r===void 0&&(r=Rr);var o=e.patternChar;o===void 0&&(o="#");var a=e.value,s=e.defaultValue,u=e.valueIsNumericString,c=T_(e,["mask","allowEmptyFormatting","format","inputMode","onKeyDown","patternChar","value","defaultValue","valueIsNumericString"]);tA(e);var f=function(y){return eA(y,e)},p=function(y){var b=y.key,P=y.target,g=P.selectionStart,x=P.selectionEnd,S=P.value;if(g!==x){r(y);return}var E=g;if(b==="Backspace"||b==="Delete"){var T="right";if(b==="Backspace"){for(;E>0&&t[E-1]!==o;)E--;T="left"}else{for(var A=t.length;E<A&&t[E]!==o;)E++;T="right"}E=Ec(S,E,f(S),T)}else t[E]!==o&&b!=="ArrowLeft"&&b!=="ArrowRight"&&(E=Ec(S,E+1,f(S),"right"));E!==g&&eo(P,E),r(y)},h=fi(a)?s:a,_=u??nA(h,t),v=Object.assign(Object.assign({},e),{valueIsNumericString:_});return Object.assign(Object.assign({},c),{value:a,defaultValue:s,valueIsNumericString:_,inputMode:n,format:function(y){return YL(y,v)},removeFormatting:function(y,b){return XL(y,b,v)},getCaretBoundary:f,onKeyDown:p})}function oA(e){var t=rA(e);return j.createElement(xS,Object.assign({},t))}function ft(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}var ih,wS={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ih=wS,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var a=typeof o;if(a==="string"||a==="number")n.push(o);else if(Array.isArray(o)){if(o.length){var s=t.apply(null,o);s&&n.push(s)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){n.push(o.toString());continue}for(var u in o)e.call(o,u)&&o[u]&&n.push(u)}}}return n.join(" ")}ih.exports?(t.default=t,ih.exports=t):window.classNames=t}();var qe=wS.exports;const Xp=e=>{var{svgIconComponent:t}=e,n=ft(e,["svgIconComponent"]);return k.isValidElement(t)?k.cloneElement(t,Object.assign({},n)):null};function Ie(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}Xp.displayName="SvgIcon";var Sr={button:"Button-module_button__2ZuB7 utility-module_focusable__1fBKr",icon:"Button-module_icon__-43u5",small:"Button-module_small__l39oh",medium:"Button-module_medium__KTxdk",large:"Button-module_large__6bsb7",fullWidth:"Button-module_fullWidth__36oJT",dashedBorder:"Button-module_dashedBorder__500FL",outline:"Button-module_outline__F5jq-",quiet:"Button-module_quiet__1KlhF",onlyIcon:"Button-module_onlyIcon__lENu3",filled:"Button-module_filled__inpPb",primary:"Button-module_primary__s1sM6",secondary:"Button-module_secondary__R0waJ",success:"Button-module_success__w6qB6",danger:"Button-module_danger__V4fX8",inverted:"Button-module_inverted__VD6YO"};Ie(`/**
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
`);const Lu=k.forwardRef((e,t)=>{var{children:n,color:r="primary",variant:o="filled",size:a="small",fullWidth:s=!1,dashedBorder:u=!1,iconPlacement:c="left",icon:f,type:p="button",className:h}=e,_=ft(e,["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"]);return j.createElement("button",Object.assign({},_,{ref:t,className:qe(Sr.button,Sr[a],Sr[o],Sr[r],{[Sr.fullWidth]:s},{[Sr.dashedBorder]:u},{[Sr.onlyIcon]:!n&&f},h),type:p}),f&&c==="left"&&j.createElement(Xp,{svgIconComponent:f,className:Sr.icon}),n,f&&c==="right"&&j.createElement(Xp,{svgIconComponent:f,className:Sr.icon}))});function Oc(e,t,n){k.useEffect(()=>{const r=n??document.body;return r.addEventListener(e,t),()=>r.removeEventListener(e,t)},[e,t,n])}function ah(e,t,n){k.useEffect(()=>{if(!n)return;const r=o=>{o.key===e&&t()};return n.addEventListener("keydown",r),()=>n.removeEventListener("keydown",r)},[e,t,n])}function Rc(e){const t=k.useRef();return k.useEffect(()=>{t.current=e},[e]),t.current}Lu.displayName="Button";const tl=(e,t)=>{const n=k.useRef(!0);k.useEffect(()=>{if(!n.current)return e();n.current=!1},t)};function SS(e,t){if(e===t)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(const[n]of e.entries())if(e[n]!==t[n])return!1;return!0}function kS(e){return e.length===new Set(e).size}var iA="Tabs-module_tabs__QzIkz",aA="Tabs-module_tablist__WR6ag",sA="Tabs-module_tab__IdDYc",lA="Tabs-module_selected__TxfYv",uA="Tabs-module_divider__-r5Cd",cA="Tabs-module_tabpanel__0vR1c";Ie(`@import url('https://altinncdn.no/fonts/altinn-din/altinn-din.css');

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
`);const kb=e=>e.replace(/\s/,"_"),PS=({activeTab:e,items:t,onChange:n})=>{const r=k.useId(),o=t.map(({name:b,content:P,value:g,tabId:x,panelId:S})=>{const E=g??b;return{name:b,content:P,value:E,tabId:x??r+kb(E)+"-tab",panelId:S??r+kb(E)+"-panel"}});if(!kS(o.map(({value:b})=>b)))throw Error("Each tab value must be unique.");if(e!==void 0&&!o.some(b=>b.value===e))throw Error("The given active tab value must exist in the list of items.");const a=b=>o.findIndex(P=>P.value===b),s=e??o[0].value,[u,c]=k.useState(s),[f,p]=k.useState(a(s));k.useEffect(()=>c(s),[s]);const h=k.useRef(null),_=o.length-1;tl(()=>{var b;(b=h.current)===null||b===void 0||b.querySelectorAll('[role="tab"]')[f].focus()},[f]);const v=b=>{u!==b&&n&&n(b),c(b),p(a(b))},y=b=>P=>{switch(P.key){case"ArrowRight":f!==void 0&&p(f===_?0:f+1);break;case"ArrowLeft":f!==void 0&&p(f===0?_:f-1);break;case"Space":v(b)}};return j.createElement("div",{className:iA},j.createElement("div",{className:aA,ref:h,role:"tablist"},o.map((b,P)=>{const g=b.value===u;return j.createElement("button",{"aria-controls":b.panelId,"aria-selected":g,className:qe(sA,g&&lA),id:b.tabId,key:b.value,onClick:()=>v(b.value),onKeyDown:y(b.value),role:"tab",tabIndex:f===P?0:-1},b.name)})),j.createElement("hr",{className:uA}),o.map(b=>j.createElement("div",{className:cA,"aria-labelledby":b.tabId,hidden:b.value!==u,id:b.panelId,key:b.panelId,role:"tabpanel"},b.content)))};PS.displayName="Tabs";var qr={fieldSet:"FieldSet-module_fieldSet__GgktD",small:"FieldSet-module_small__eNG6Q",xsmall:"FieldSet-module_xsmall__y9foq",legendAndHelpText:"FieldSet-module_legendAndHelpText__WDZ-j",legend:"FieldSet-module_legend__PjhoV",legendContent:"FieldSet-module_legendContent__nOeHK",description:"FieldSet-module_description__XKHS-",content:"FieldSet-module_content__aZp-0",errorMessage:"FieldSet-module_errorMessage__nDaJ7"};Ie(`.FieldSet-module_fieldSet__GgktD {
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
`);const CS=e=>{var{children:t,className:n,contentClassName:r,description:o,error:a,helpText:s,legend:u,size:c="small"}=e,f=ft(e,["children","className","contentClassName","description","error","helpText","legend","size"]);return j.createElement("fieldset",Object.assign({},f,{className:qe(qr.fieldSet,qr[c],n)}),u&&j.createElement("legend",{className:qr.legend},j.createElement("span",{className:qr.legendAndHelpText},j.createElement("span",{className:qr.legendContent},u),s&&j.createElement(F_,{size:c,title:typeof u=="string"?`Help text for ${u}`:""},s))),o&&j.createElement("p",{className:qr.description},o),j.createElement("div",{className:qe(qr.content,r)},t),a&&j.createElement("div",{className:qr.errorMessage},j.createElement(II,{role:"alertdialog"},a)))};function Ca(e){return e.split("-")[1]}function A_(e){return e==="y"?"height":"width"}function _o(e){return e.split("-")[0]}function Ba(e){return["top","bottom"].includes(_o(e))?"x":"y"}function Pb(e,t,n){let{reference:r,floating:o}=e;const a=r.x+r.width/2-o.width/2,s=r.y+r.height/2-o.height/2,u=Ba(t),c=A_(u),f=r[c]/2-o[c]/2,p=u==="x";let h;switch(_o(t)){case"top":h={x:a,y:r.y-o.height};break;case"bottom":h={x:a,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:s};break;case"left":h={x:r.x-o.width,y:s};break;default:h={x:r.x,y:r.y}}switch(Ca(t)){case"start":h[u]-=f*(n&&p?-1:1);break;case"end":h[u]+=f*(n&&p?-1:1)}return h}CS.displayName="FieldSet";function ES(e){return typeof e!="number"?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(e):{top:e,right:e,bottom:e,left:e}}function Tc(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function I_(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:a,rects:s,elements:u,strategy:c}=e,{boundary:f="clippingAncestors",rootBoundary:p="viewport",elementContext:h="floating",altBoundary:_=!1,padding:v=0}=t,y=ES(v),b=u[_?h==="floating"?"reference":"floating":h],P=Tc(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(b)))==null||n?b:b.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(u.floating)),boundary:f,rootBoundary:p,strategy:c})),g=h==="floating"?{...s.floating,x:r,y:o}:s.reference,x=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u.floating)),S=await(a.isElement==null?void 0:a.isElement(x))&&await(a.getScale==null?void 0:a.getScale(x))||{x:1,y:1},E=Tc(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:g,offsetParent:x,strategy:c}):g);return{top:(P.top-E.top+y.top)/S.y,bottom:(E.bottom-P.bottom+y.bottom)/S.y,left:(P.left-E.left+y.left)/S.x,right:(E.right-P.right+y.right)/S.x}}const em=Math.min,Xo=Math.max;function tm(e,t,n){return Xo(e,em(t,n))}const Cb=e=>({name:"arrow",options:e,async fn(t){const{element:n,padding:r=0}=e||{},{x:o,y:a,placement:s,rects:u,platform:c,elements:f}=t;if(n==null)return{};const p=ES(r),h={x:o,y:a},_=Ba(s),v=A_(_),y=await c.getDimensions(n),b=_==="y",P=b?"top":"left",g=b?"bottom":"right",x=b?"clientHeight":"clientWidth",S=u.reference[v]+u.reference[_]-h[_]-u.floating[v],E=h[_]-u.reference[_],T=await(c.getOffsetParent==null?void 0:c.getOffsetParent(n));let A=T?T[x]:0;A&&await(c.isElement==null?void 0:c.isElement(T))||(A=f.floating[x]||u.floating[v]);const N=S/2-E/2,D=p[P],W=A-y[v]-p[g],B=A/2-y[v]/2+N,H=tm(D,B,W),G=Ca(s)!=null&&B!=H&&u.reference[v]/2-(B<D?p[P]:p[g])-y[v]/2<0;return{[_]:h[_]-(G?B<D?D-B:W-B:0),data:{[_]:H,centerOffset:B-H}}}}),dA={left:"right",right:"left",bottom:"top",top:"bottom"};function cu(e){return e.replace(/left|right|bottom|top/g,t=>dA[t])}const fA={start:"end",end:"start"};function sh(e){return e.replace(/start|end/g,t=>fA[t])}const OS=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:r,middlewareData:o,rects:a,initialPlacement:s,platform:u,elements:c}=t,{mainAxis:f=!0,crossAxis:p=!0,fallbackPlacements:h,fallbackStrategy:_="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:y=!0,...b}=e,P=_o(r),g=_o(s)===s,x=await(u.isRTL==null?void 0:u.isRTL(c.floating)),S=h||(g||!y?[cu(s)]:function(H){const G=cu(H);return[sh(H),G,sh(G)]}(s));h||v==="none"||S.push(...function(H,G,q,$){const re=Ca(H);let Z=function(se,O,Y){const U=["left","right"],R=["right","left"],z=["top","bottom"],M=["bottom","top"];switch(se){case"top":case"bottom":return Y?O?R:U:O?U:R;case"left":case"right":return O?z:M;default:return[]}}(_o(H),q==="start",$);return re&&(Z=Z.map(se=>se+"-"+re),G&&(Z=Z.concat(Z.map(sh)))),Z}(s,y,v,x));const E=[s,...S],T=await I_(t,b),A=[];let N=((n=o.flip)==null?void 0:n.overflows)||[];if(f&&A.push(T[P]),p){const{main:H,cross:G}=function(q,$,re){re===void 0&&(re=!1);const Z=Ca(q),se=Ba(q),O=A_(se);let Y=se==="x"?Z===(re?"end":"start")?"right":"left":Z==="start"?"bottom":"top";return $.reference[O]>$.floating[O]&&(Y=cu(Y)),{main:Y,cross:cu(Y)}}(r,a,x);A.push(T[H],T[G])}if(N=[...N,{placement:r,overflows:A}],!A.every(H=>H<=0)){var D,W;const H=(((D=o.flip)==null?void 0:D.index)||0)+1,G=E[H];if(G)return{data:{index:H,overflows:N},reset:{placement:G}};let q=(W=N.filter($=>$.overflows[0]<=0).sort(($,re)=>$.overflows[1]-re.overflows[1])[0])==null?void 0:W.placement;if(!q)switch(_){case"bestFit":{var B;const $=(B=N.map(re=>[re.placement,re.overflows.filter(Z=>Z>0).reduce((Z,se)=>Z+se,0)]).sort((re,Z)=>re[1]-Z[1])[0])==null?void 0:B[0];$&&(q=$);break}case"initialPlacement":q=s}if(r!==q)return{reset:{placement:q}}}return{}}}},hA=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,o=await async function(a,s){const{placement:u,platform:c,elements:f}=a,p=await(c.isRTL==null?void 0:c.isRTL(f.floating)),h=_o(u),_=Ca(u),v=Ba(u)==="x",y=["left","top"].includes(h)?-1:1,b=p&&v?-1:1,P=typeof s=="function"?s(a):s;let{mainAxis:g,crossAxis:x,alignmentAxis:S}=typeof P=="number"?{mainAxis:P,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...P};return _&&typeof S=="number"&&(x=_==="end"?-1*S:S),v?{x:x*b,y:g*y}:{x:g*y,y:x*b}}(t,e);return{x:n+o.x,y:r+o.y,data:o}}}},pA=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:a}=t,{apply:s=()=>{},...u}=e,c=await I_(t,u),f=_o(n),p=Ca(n),h=Ba(n)==="x",{width:_,height:v}=r.floating;let y,b;f==="top"||f==="bottom"?(y=f,b=p===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(b=f,y=p==="end"?"top":"bottom");const P=v-c[y],g=_-c[b],x=!t.middlewareData.shift;let S=P,E=g;if(h){const A=_-c.left-c.right;E=p||x?em(g,A):A}else{const A=v-c.top-c.bottom;S=p||x?em(P,A):A}if(x&&!p){const A=Xo(c.left,0),N=Xo(c.right,0),D=Xo(c.top,0),W=Xo(c.bottom,0);h?E=_-2*(A!==0||N!==0?A+N:Xo(c.left,c.right)):S=v-2*(D!==0||W!==0?D+W:Xo(c.top,c.bottom))}await s({...t,availableWidth:E,availableHeight:S});const T=await o.getDimensions(a.floating);return _!==T.width||v!==T.height?{reset:{rects:!0}}:{}}}};function rn(e){var t;return((t=e.ownerDocument)==null?void 0:t.defaultView)||window}function $n(e){return rn(e).getComputedStyle(e)}function RS(e){return e instanceof rn(e).Node}function Ro(e){return RS(e)?(e.nodeName||"").toLowerCase():""}let du;function TS(){if(du)return du;const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?(du=e.brands.map(t=>t.brand+"/"+t.version).join(" "),du):navigator.userAgent}function Hn(e){return e instanceof rn(e).HTMLElement}function on(e){return e instanceof rn(e).Element}function Eb(e){return typeof ShadowRoot>"u"?!1:e instanceof rn(e).ShadowRoot||e instanceof ShadowRoot}function nl(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=$n(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function mA(e){return["table","td","th"].includes(Ro(e))}function nm(e){const t=/firefox/i.test(TS()),n=$n(e),r=n.backdropFilter||n.WebkitBackdropFilter;return n.transform!=="none"||n.perspective!=="none"||!!r&&r!=="none"||t&&n.willChange==="filter"||t&&!!n.filter&&n.filter!=="none"||["transform","perspective"].some(o=>n.willChange.includes(o))||["paint","layout","strict","content"].some(o=>{const a=n.contain;return a!=null&&a.includes(o)})}function rm(){return/^((?!chrome|android).)*safari/i.test(TS())}function jd(e){return["html","body","#document"].includes(Ro(e))}const Ob=Math.min,Ls=Math.max,Lc=Math.round;function LS(e){const t=$n(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Hn(e),a=o?e.offsetWidth:n,s=o?e.offsetHeight:r,u=Lc(n)!==a||Lc(r)!==s;return u&&(n=a,r=s),{width:n,height:r,fallback:u}}function AS(e){return on(e)?e:e.contextElement}const IS={x:1,y:1};function ha(e){const t=AS(e);if(!Hn(t))return IS;const n=t.getBoundingClientRect(),{width:r,height:o,fallback:a}=LS(t);let s=(a?Lc(n.width):n.width)/r,u=(a?Lc(n.height):n.height)/o;return s&&Number.isFinite(s)||(s=1),u&&Number.isFinite(u)||(u=1),{x:s,y:u}}function yi(e,t,n,r){var o,a;t===void 0&&(t=!1),n===void 0&&(n=!1);const s=e.getBoundingClientRect(),u=AS(e);let c=IS;t&&(r?on(r)&&(c=ha(r)):c=ha(e));const f=u?rn(u):window,p=rm()&&n;let h=(s.left+(p&&((o=f.visualViewport)==null?void 0:o.offsetLeft)||0))/c.x,_=(s.top+(p&&((a=f.visualViewport)==null?void 0:a.offsetTop)||0))/c.y,v=s.width/c.x,y=s.height/c.y;if(u){const b=rn(u),P=r&&on(r)?rn(r):r;let g=b.frameElement;for(;g&&r&&P!==b;){const x=ha(g),S=g.getBoundingClientRect(),E=getComputedStyle(g);S.x+=(g.clientLeft+parseFloat(E.paddingLeft))*x.x,S.y+=(g.clientTop+parseFloat(E.paddingTop))*x.y,h*=x.x,_*=x.y,v*=x.x,y*=x.y,h+=S.x,_+=S.y,g=rn(g).frameElement}}return Tc({width:v,height:y,x:h,y:_})}function go(e){return((RS(e)?e.ownerDocument:e.document)||window.document).documentElement}function Fd(e){return on(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function zS(e){return yi(go(e)).left+Fd(e).scrollLeft}function Ea(e){if(Ro(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Eb(e)&&e.host||go(e);return Eb(t)?t.host:t}function NS(e){const t=Ea(e);return jd(t)?t.ownerDocument.body:Hn(t)&&nl(t)?t:NS(t)}function vo(e,t){var n;t===void 0&&(t=[]);const r=NS(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),a=rn(r);return o?t.concat(a,a.visualViewport||[],nl(r)?r:[]):t.concat(r,vo(r))}function Rb(e,t,n){let r;if(t==="viewport")r=function(s,u){const c=rn(s),f=go(s),p=c.visualViewport;let h=f.clientWidth,_=f.clientHeight,v=0,y=0;if(p){h=p.width,_=p.height;const b=rm();(!b||b&&u==="fixed")&&(v=p.offsetLeft,y=p.offsetTop)}return{width:h,height:_,x:v,y}}(e,n);else if(t==="document")r=function(s){const u=go(s),c=Fd(s),f=s.ownerDocument.body,p=Ls(u.scrollWidth,u.clientWidth,f.scrollWidth,f.clientWidth),h=Ls(u.scrollHeight,u.clientHeight,f.scrollHeight,f.clientHeight);let _=-c.scrollLeft+zS(s);const v=-c.scrollTop;return $n(f).direction==="rtl"&&(_+=Ls(u.clientWidth,f.clientWidth)-p),{width:p,height:h,x:_,y:v}}(go(e));else if(on(t))r=function(s,u){const c=yi(s,!0,u==="fixed"),f=c.top+s.clientTop,p=c.left+s.clientLeft,h=Hn(s)?ha(s):{x:1,y:1};return{width:s.clientWidth*h.x,height:s.clientHeight*h.y,x:p*h.x,y:f*h.y}}(t,n);else{const s={...t};if(rm()){var o,a;const u=rn(e);s.x-=((o=u.visualViewport)==null?void 0:o.offsetLeft)||0,s.y-=((a=u.visualViewport)==null?void 0:a.offsetTop)||0}r=s}return Tc(r)}function BS(e,t){const n=Ea(e);return!(n===t||!on(n)||jd(n))&&($n(n).position==="fixed"||BS(n,t))}function Tb(e,t){return Hn(e)&&$n(e).position!=="fixed"?t?t(e):e.offsetParent:null}function Lb(e,t){const n=rn(e);if(!Hn(e))return n;let r=Tb(e,t);for(;r&&mA(r)&&$n(r).position==="static";)r=Tb(r,t);return r&&(Ro(r)==="html"||Ro(r)==="body"&&$n(r).position==="static"&&!nm(r))?n:r||function(o){let a=Ea(o);for(;Hn(a)&&!jd(a);){if(nm(a))return a;a=Ea(a)}return null}(e)||n}function _A(e,t,n){const r=Hn(t),o=go(t),a=yi(e,!0,n==="fixed",t);let s={scrollLeft:0,scrollTop:0};const u={x:0,y:0};if(r||!r&&n!=="fixed")if((Ro(t)!=="body"||nl(o))&&(s=Fd(t)),Hn(t)){const c=yi(t,!0);u.x=c.x+t.clientLeft,u.y=c.y+t.clientTop}else o&&(u.x=zS(o));return{x:a.left+s.scrollLeft-u.x,y:a.top+s.scrollTop-u.y,width:a.width,height:a.height}}const gA={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const a=[...n==="clippingAncestors"?function(c,f){const p=f.get(c);if(p)return p;let h=vo(c).filter(b=>on(b)&&Ro(b)!=="body"),_=null;const v=$n(c).position==="fixed";let y=v?Ea(c):c;for(;on(y)&&!jd(y);){const b=$n(y),P=nm(y);P||b.position!=="fixed"||(_=null),(v?!P&&!_:!P&&b.position==="static"&&_&&["absolute","fixed"].includes(_.position)||nl(y)&&!P&&BS(c,y))?h=h.filter(g=>g!==y):_=b,y=Ea(y)}return f.set(c,h),h}(t,this._c):[].concat(n),r],s=a[0],u=a.reduce((c,f)=>{const p=Rb(t,f,o);return c.top=Ls(p.top,c.top),c.right=Ob(p.right,c.right),c.bottom=Ob(p.bottom,c.bottom),c.left=Ls(p.left,c.left),c},Rb(t,s,o));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=Hn(n),a=go(n);if(n===a)return t;let s={scrollLeft:0,scrollTop:0},u={x:1,y:1};const c={x:0,y:0};if((o||!o&&r!=="fixed")&&((Ro(n)!=="body"||nl(a))&&(s=Fd(n)),Hn(n))){const f=yi(n);u=ha(n),c.x=f.x+n.clientLeft,c.y=f.y+n.clientTop}return{width:t.width*u.x,height:t.height*u.y,x:t.x*u.x-s.scrollLeft*u.x+c.x,y:t.y*u.y-s.scrollTop*u.y+c.y}},isElement:on,getDimensions:function(e){return LS(e)},getOffsetParent:Lb,getDocumentElement:go,getScale:ha,async getElementRects(e){let{reference:t,floating:n,strategy:r}=e;const o=this.getOffsetParent||Lb,a=this.getDimensions;return{reference:_A(t,await o(n),r),floating:{x:0,y:0,...await a(n)}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>$n(e).direction==="rtl"};function MS(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:a=!0,elementResize:s=!0,animationFrame:u=!1}=r,c=o||a?[...on(e)?vo(e):e.contextElement?vo(e.contextElement):[],...vo(t)]:[];c.forEach(_=>{const v=!on(_)&&_.toString().includes("V");!o||u&&!v||_.addEventListener("scroll",n,{passive:!0}),a&&_.addEventListener("resize",n)});let f,p=null;s&&(p=new ResizeObserver(()=>{n()}),on(e)&&!u&&p.observe(e),on(e)||!e.contextElement||u||p.observe(e.contextElement),p.observe(t));let h=u?yi(e):null;return u&&function _(){const v=yi(e);!h||v.x===h.x&&v.y===h.y&&v.width===h.width&&v.height===h.height||n(),h=v,f=requestAnimationFrame(_)}(),n(),()=>{var _;c.forEach(v=>{o&&v.removeEventListener("scroll",n),a&&v.removeEventListener("resize",n)}),(_=p)==null||_.disconnect(),p=null,u&&cancelAnimationFrame(f)}}const vA=(e,t,n)=>{const r=new Map,o={platform:gA,...n},a={...o.platform,_c:r};return(async(s,u,c)=>{const{placement:f="bottom",strategy:p="absolute",middleware:h=[],platform:_}=c,v=h.filter(Boolean),y=await(_.isRTL==null?void 0:_.isRTL(u));let b=await _.getElementRects({reference:s,floating:u,strategy:p}),{x:P,y:g}=Pb(b,f,y),x=f,S={},E=0;for(let T=0;T<v.length;T++){const{name:A,fn:N}=v[T],{x:D,y:W,data:B,reset:H}=await N({x:P,y:g,initialPlacement:f,placement:x,strategy:p,middlewareData:S,rects:b,platform:_,elements:{reference:s,floating:u}});P=D??P,g=W??g,S={...S,[A]:{...S[A],...B}},H&&E<=50&&(E++,typeof H=="object"&&(H.placement&&(x=H.placement),H.rects&&(b=H.rects===!0?await _.getElementRects({reference:s,floating:u,strategy:p}):H.rects),{x:P,y:g}=Pb(b,x,y)),T=-1)}return{x:P,y:g,placement:x,strategy:p,middlewareData:S}})(e,t,{...o,platform:a})},yA=e=>{const{element:t,padding:n}=e;return{name:"arrow",options:e,fn(r){return t&&(o=t,{}.hasOwnProperty.call(o,"current"))?t.current!=null?Cb({element:t.current,padding:n}).fn(r):{}:t?Cb({element:t,padding:n}).fn(r):{};var o}}};var Au=typeof document<"u"?k.useLayoutEffect:k.useEffect;function Ac(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!=0;)if(!Ac(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!=0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!=0;){const a=o[r];if((a!=="_owner"||!e.$$typeof)&&!Ac(e[a],t[a]))return!1}return!0}return e!=e&&t!=t}function DS(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ab(e,t){const n=DS(e);return Math.round(t*n)/n}function Ib(e){const t=k.useRef(e);return Au(()=>{t.current=e}),t}/*!
* tabbable 6.1.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var om=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),jS=typeof Element>"u",rl=jS?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Iu=!jS&&Element.prototype.getRootNode?function(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}:function(e){return e?.ownerDocument},Ic=function e(t,n){var r;n===void 0&&(n=!0);var o=t==null||(r=t.getAttribute)===null||r===void 0?void 0:r.call(t,"inert");return o===""||o==="true"||n&&t&&e(t.parentNode)},bA=function e(t,n,r){for(var o=[],a=Array.from(t);a.length;){var s=a.shift();if(!Ic(s,!1))if(s.tagName==="SLOT"){var u=s.assignedElements(),c=e(u.length?u:s.children,!0,r);r.flatten?o.push.apply(o,c):o.push({scopeParent:s,candidates:c})}else{rl.call(s,om)&&r.filter(s)&&(n||!t.includes(s))&&o.push(s);var f=s.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(s),p=!Ic(f,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(s));if(f&&p){var h=e(f===!0?s.children:f.children,!0,r);r.flatten?o.push.apply(o,h):o.push({scopeParent:s,candidates:h})}else a.unshift.apply(a,s.children)}}return o},FS=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(n){var r,o=n==null||(r=n.getAttribute)===null||r===void 0?void 0:r.call(n,"contenteditable");return o===""||o==="true"}(e))&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},xA=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},$S=function(e){return e.tagName==="INPUT"},wA=function(e){return function(t){return $S(t)&&t.type==="radio"}(e)&&!function(t){if(!t.name)return!0;var n,r=t.form||Iu(t),o=function(s){return r.querySelectorAll('input[type="radio"][name="'+s+'"]')};if(typeof window<"u"&&window.CSS!==void 0&&typeof window.CSS.escape=="function")n=o(window.CSS.escape(t.name));else try{n=o(t.name)}catch(s){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",s.message),!1}var a=function(s,u){for(var c=0;c<s.length;c++)if(s[c].checked&&s[c].form===u)return s[c]}(n,t.form);return!a||a===t}(e)},zb=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return n===0&&r===0},SA=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var o=rl.call(e,"details>summary:first-of-type")?e.parentElement:e;if(rl.call(o,"details:not([open]) *"))return!0;if(n&&n!=="full"&&n!=="legacy-full"){if(n==="non-zero-area")return zb(e)}else{if(typeof r=="function"){for(var a=e;e;){var s=e.parentElement,u=Iu(e);if(s&&!s.shadowRoot&&r(s)===!0)return zb(e);e=e.assignedSlot?e.assignedSlot:s||u===e.ownerDocument?s:u.host}e=a}if(function(c){var f,p,h,_,v=c&&Iu(c),y=(f=v)===null||f===void 0?void 0:f.host,b=!1;if(v&&v!==c)for(b=!!((p=y)!==null&&p!==void 0&&(h=p.ownerDocument)!==null&&h!==void 0&&h.contains(y)||c!=null&&(_=c.ownerDocument)!==null&&_!==void 0&&_.contains(c));!b&&y;){var P,g,x;b=!((g=y=(P=v=Iu(y))===null||P===void 0?void 0:P.host)===null||g===void 0||(x=g.ownerDocument)===null||x===void 0||!x.contains(y))}return b}(e))return!e.getClientRects().length;if(n!=="legacy-full")return!0}return!1},kA=function(e,t){return!(t.disabled||Ic(t)||function(n){return $S(n)&&n.type==="hidden"}(t)||SA(t,e)||function(n){return n.tagName==="DETAILS"&&Array.prototype.slice.apply(n.children).some(function(r){return r.tagName==="SUMMARY"})}(t)||function(n){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(n.tagName))for(var r=n.parentElement;r;){if(r.tagName==="FIELDSET"&&r.disabled){for(var o=0;o<r.children.length;o++){var a=r.children.item(o);if(a.tagName==="LEGEND")return!!rl.call(r,"fieldset[disabled] *")||!a.contains(n)}return!0}r=r.parentElement}return!1}(t))},Nb=function(e,t){return!(wA(t)||FS(t)<0||!kA(e,t))},PA=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},CA=function e(t){var n=[],r=[];return t.forEach(function(o,a){var s=!!o.scopeParent,u=s?o.scopeParent:o,c=FS(u,s),f=s?e(o.candidates):u;c===0?s?n.push.apply(n,f):n.push(u):r.push({documentOrder:a,tabIndex:c,item:o,isScope:s,content:f})}),r.sort(xA).reduce(function(o,a){return a.isScope?o.push.apply(o,a.content):o.push(a.content),o},[]).concat(n)},US=function(e,t){var n;return n=(t=t||{}).getShadowRoot?bA([e],t.includeContainer,{filter:Nb.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:PA}):function(r,o,a){if(Ic(r))return[];var s=Array.prototype.slice.apply(r.querySelectorAll(om));return o&&rl.call(r,om)&&s.unshift(r),s.filter(a)}(e,t.includeContainer,Nb.bind(null,t)),CA(n)};function im(){return im=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},im.apply(this,arguments)}var ol=typeof document<"u"?k.useLayoutEffect:k.useEffect;let lh=!1,EA=0;const Bb=()=>"floating-ui-"+EA++,z_=Kc["useId".toString()]||function(){const[e,t]=k.useState(()=>lh?Bb():void 0);return ol(()=>{e==null&&t(Bb())},[]),k.useEffect(()=>{lh||(lh=!0)},[]),e},OA=k.createContext(null),RA=k.createContext(null),WS=()=>k.useContext(RA);function N_(e){return e?.ownerDocument||document}function $d(e){return N_(e).defaultView||window}function si(e){return!!e&&e instanceof $d(e).Element}function B_(e){return!!e&&e instanceof $d(e).HTMLElement}function TA(e){if(e.mozInputSource===0&&e.isTrusted)return!0;const t=/Android/i;return(t.test(function(){const n=navigator.userAgentData;return n!=null&&n.platform?n.platform:navigator.platform}())||t.test(function(){const n=navigator.userAgentData;return n&&Array.isArray(n.brands)?n.brands.map(r=>{let{brand:o,version:a}=r;return o+"/"+a}).join(" "):navigator.userAgent}()))&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function LA(e){return e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType!=="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0}function Mb(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function AA(e,t){if(!e||!t)return!1;const n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&(r=n,typeof ShadowRoot<"u"&&(r instanceof $d(r).ShadowRoot||r instanceof ShadowRoot))){let o=t;for(;o;){if(e===o)return!0;o=o.parentNode||o.host}}var r;return!1}function uh(e,t){let n=e.filter(o=>{var a;return o.parentId===t&&((a=o.context)==null?void 0:a.open)}),r=n;for(;r.length;)r=e.filter(o=>{var a;return(a=r)==null?void 0:a.some(s=>{var u;return o.parentId===s.id&&((u=o.context)==null?void 0:u.open)})}),n=n.concat(r);return n}const HS=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function Db(e,t){const n=US(e,HS());t==="prev"&&n.reverse();const r=n.indexOf(function(o){let a=o.activeElement;for(;((s=a)==null||(u=s.shadowRoot)==null?void 0:u.activeElement)!=null;){var s,u;a=a.shadowRoot.activeElement}return a}(N_(e)));return n.slice(r+1)[0]}function ch(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!AA(n,r)}function IA(e){US(e,HS()).forEach(t=>{t.dataset.tabindex=t.getAttribute("tabindex")||"",t.setAttribute("tabindex","-1")})}function zA(e){e.querySelectorAll("[data-tabindex]").forEach(t=>{const n=t.dataset.tabindex;delete t.dataset.tabindex,n?t.setAttribute("tabindex",n):t.removeAttribute("tabindex")})}const VS={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function jb(e){e.key==="Tab"&&(e.target,clearTimeout(void 0))}const Fb=k.forwardRef(function(e,t){const[n,r]=k.useState();return ol(()=>(/apple/i.test(navigator.vendor)&&r("button"),document.addEventListener("keydown",jb),()=>{document.removeEventListener("keydown",jb)}),[]),k.createElement("span",im({},e,{ref:t,tabIndex:0,role:n,"aria-hidden":!n||void 0,"data-floating-ui-focus-guard":"",style:VS}))}),ZS=k.createContext(null);function NA(e){let{children:t,id:n,root:r=null,preserveTabOrder:o=!0}=e;const a=function(v){let{id:y,root:b}=v===void 0?{}:v;const[P,g]=k.useState(null),x=z_(),S=BA(),E=k.useMemo(()=>({id:y,root:b,portalContext:S,uniqueId:x}),[y,b,S,x]),T=k.useRef();return ol(()=>()=>{P?.remove()},[P,E]),ol(()=>{if(T.current===E)return;T.current=E;const{id:A,root:N,portalContext:D,uniqueId:W}=E,B=A?document.getElementById(A):null,H="data-floating-ui-portal";if(B){const G=document.createElement("div");G.id=W,G.setAttribute(H,""),B.appendChild(G),g(G)}else{let G=D?.portalNode||N||document.body,q=null;A&&(q=document.createElement("div"),q.id=A,G.appendChild(q));const $=document.createElement("div");$.id=W,$.setAttribute(H,""),G=q||G,G.appendChild($),g($)}},[E]),P}({id:n,root:r}),[s,u]=k.useState(null),c=k.useRef(null),f=k.useRef(null),p=k.useRef(null),h=k.useRef(null),_=!!s&&!s.modal&&s.open&&o&&!(!r&&!a);return k.useEffect(()=>{if(a&&o&&(s==null||!s.modal))return a.addEventListener("focusin",v,!0),a.addEventListener("focusout",v,!0),()=>{a.removeEventListener("focusin",v,!0),a.removeEventListener("focusout",v,!0)};function v(y){a&&ch(y)&&(y.type==="focusin"?zA:IA)(a)}},[a,o,s?.modal]),k.createElement(ZS.Provider,{value:k.useMemo(()=>({preserveTabOrder:o,beforeOutsideRef:c,afterOutsideRef:f,beforeInsideRef:p,afterInsideRef:h,portalNode:a,setFocusManagerState:u}),[o,a])},_&&a&&k.createElement(Fb,{"data-type":"outside",ref:c,onFocus:v=>{if(ch(v,a)){var y;(y=p.current)==null||y.focus()}else{const b=Db(document.body,"prev")||s?.refs.domReference.current;b?.focus()}}}),_&&a&&k.createElement("span",{"aria-owns":a.id,style:VS}),a&&ko.createPortal(t,a),_&&a&&k.createElement(Fb,{"data-type":"outside",ref:f,onFocus:v=>{if(ch(v,a)){var y;(y=h.current)==null||y.focus()}else{const b=Db(document.body,"next")||s?.refs.domReference.current;b?.focus(),s?.closeOnFocusOut&&s?.onOpenChange(!1)}}}))}const BA=()=>k.useContext(ZS);function $b(e){return B_(e.target)&&e.target.tagName==="BUTTON"}function Ub(e){return function(t){return B_(t)&&t.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])")}(e)}const MA=Kc["useInsertionEffect".toString()]||(e=>e());function zu(e){const t=k.useRef(()=>{});return MA(()=>{t.current=e}),k.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.current==null?void 0:t.current(...r)},[])}function dh(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}const DA={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},jA={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"};function FA(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,events:o,nodeId:a,elements:{reference:s,domReference:u,floating:c},dataRef:f}=e,{enabled:p=!0,escapeKey:h=!0,outsidePress:_=!0,outsidePressEvent:v="pointerdown",referencePress:y=!1,referencePressEvent:b="pointerdown",ancestorScroll:P=!1,bubbles:g}=t,x=WS(),S=(((E=k.useContext(OA))==null?void 0:E.id)||null)!=null;var E;const T=zu(typeof _=="function"?_:()=>!1),A=typeof _=="function"?T:_,N=k.useRef(!1),{escapeKeyBubbles:D,outsidePressBubbles:W}=(G=>{var q,$;return{escapeKeyBubbles:typeof G=="boolean"?G:(q=G?.escapeKey)!=null&&q,outsidePressBubbles:typeof G=="boolean"?G:($=G?.outsidePress)==null||$}})(g),B=zu(G=>{if(!n||!p||!h||G.key!=="Escape")return;const q=x?uh(x.nodesRef.current,a):[];if(!D&&(G.stopPropagation(),q.length>0)){let $=!0;if(q.forEach(re=>{var Z;(Z=re.context)==null||!Z.open||re.context.dataRef.current.__escapeKeyBubbles||($=!1)}),!$)return}o.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),r(!1)}),H=zu(G=>{const q=N.current;if(N.current=!1,q||typeof A=="function"&&!A(G))return;const $=function(se){return"composedPath"in se?se.composedPath()[0]:se.target}(G);if(B_($)&&c){const se=$.clientWidth>0&&$.scrollWidth>$.clientWidth,O=$.clientHeight>0&&$.scrollHeight>$.clientHeight;let Y=O&&G.offsetX>$.clientWidth;if(O&&$d(c).getComputedStyle($).direction==="rtl"&&(Y=G.offsetX<=$.offsetWidth-$.clientWidth),Y||se&&G.offsetY>$.clientHeight)return}const re=x&&uh(x.nodesRef.current,a).some(se=>{var O;return dh(G,(O=se.context)==null?void 0:O.elements.floating)});if(dh(G,c)||dh(G,u)||re)return;const Z=x?uh(x.nodesRef.current,a):[];if(Z.length>0){let se=!0;if(Z.forEach(O=>{var Y;(Y=O.context)==null||!Y.open||O.context.dataRef.current.__outsidePressBubbles||(se=!1)}),!se)return}o.emit("dismiss",{type:"outsidePress",data:{returnFocus:S?{preventScroll:!0}:TA(G)||LA(G)}}),r(!1)});return k.useEffect(()=>{if(!n||!p)return;function G(){r(!1)}f.current.__escapeKeyBubbles=D,f.current.__outsidePressBubbles=W;const q=N_(c);h&&q.addEventListener("keydown",B),A&&q.addEventListener(v,H);let $=[];return P&&(si(u)&&($=vo(u)),si(c)&&($=$.concat(vo(c))),!si(s)&&s&&s.contextElement&&($=$.concat(vo(s.contextElement)))),$=$.filter(re=>{var Z;return re!==((Z=q.defaultView)==null?void 0:Z.visualViewport)}),$.forEach(re=>{re.addEventListener("scroll",G,{passive:!0})}),()=>{h&&q.removeEventListener("keydown",B),A&&q.removeEventListener(v,H),$.forEach(re=>{re.removeEventListener("scroll",G)})}},[f,c,u,s,h,A,v,n,r,P,p,D,W,B,H]),k.useEffect(()=>{N.current=!1},[A,v]),k.useMemo(()=>p?{reference:{onKeyDown:B,[DA[b]]:()=>{y&&(o.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),r(!1))}},floating:{onKeyDown:B,[jA[v]]:()=>{N.current=!0}}}:{},[p,o,y,v,b,r,B])}function M_(e){return k.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})},e)}function qS(e){var t;e===void 0&&(e={});const{open:n=!1,onOpenChange:r,nodeId:o}=e,[a,s]=k.useState(null),u=((t=e.elements)==null?void 0:t.reference)||a,c=function(E){E===void 0&&(E={});const{placement:T="bottom",strategy:A="absolute",middleware:N=[],platform:D,elements:{reference:W,floating:B}={},transform:H=!0,whileElementsMounted:G,open:q}=E,[$,re]=k.useState({x:0,y:0,strategy:A,placement:T,middlewareData:{},isPositioned:!1}),[Z,se]=k.useState(N);Ac(Z,N)||se(N);const[O,Y]=k.useState(null),[U,R]=k.useState(null),z=k.useCallback(de=>{de!=ie.current&&(ie.current=de,Y(de))},[Y]),M=k.useCallback(de=>{de!==fe.current&&(fe.current=de,R(de))},[R]),V=W||O,te=B||U,ie=k.useRef(null),fe=k.useRef(null),be=k.useRef($),Je=Ib(G),Ze=Ib(D),Re=k.useCallback(()=>{if(!ie.current||!fe.current)return;const de={placement:T,strategy:A,middleware:Z};Ze.current&&(de.platform=Ze.current),vA(ie.current,fe.current,de).then(_e=>{const ke={..._e,isPositioned:!0};le.current&&!Ac(be.current,ke)&&(be.current=ke,ko.flushSync(()=>{re(ke)}))})},[Z,T,A,Ze]);Au(()=>{q===!1&&be.current.isPositioned&&(be.current.isPositioned=!1,re(de=>({...de,isPositioned:!1})))},[q]);const le=k.useRef(!1);Au(()=>(le.current=!0,()=>{le.current=!1}),[]),Au(()=>{if(V&&(ie.current=V),te&&(fe.current=te),V&&te){if(Je.current)return Je.current(V,te,Re);Re()}},[V,te,Re,Je]);const me=k.useMemo(()=>({reference:ie,floating:fe,setReference:z,setFloating:M}),[z,M]),ee=k.useMemo(()=>({reference:V,floating:te}),[V,te]),ce=k.useMemo(()=>{const de={position:A,left:0,top:0};if(!ee.floating)return de;const _e=Ab(ee.floating,$.x),ke=Ab(ee.floating,$.y);return H?{...de,transform:"translate("+_e+"px, "+ke+"px)",...DS(ee.floating)>=1.5&&{willChange:"transform"}}:{position:A,left:_e,top:ke}},[A,H,ee.floating,$.x,$.y]);return k.useMemo(()=>({...$,update:Re,refs:me,elements:ee,floatingStyles:ce}),[$,Re,me,ee,ce])}(e),f=WS(),p=zu(r),h=k.useRef(null),_=k.useRef({}),v=k.useState(()=>function(){const E=new Map;return{emit(T,A){var N;(N=E.get(T))==null||N.forEach(D=>D(A))},on(T,A){E.set(T,[...E.get(T)||[],A])},off(T,A){var N;E.set(T,((N=E.get(T))==null?void 0:N.filter(D=>D!==A))||[])}}}())[0],y=z_(),b=k.useCallback(E=>{const T=si(E)?{getBoundingClientRect:()=>E.getBoundingClientRect(),contextElement:E}:E;c.refs.setReference(T)},[c.refs]),P=k.useCallback(E=>{(si(E)||E===null)&&(h.current=E,s(E)),(si(c.refs.reference.current)||c.refs.reference.current===null||E!==null&&!si(E))&&c.refs.setReference(E)},[c.refs]),g=k.useMemo(()=>({...c.refs,setReference:P,setPositionReference:b,domReference:h}),[c.refs,P,b]),x=k.useMemo(()=>({...c.elements,domReference:u}),[c.elements,u]),S=k.useMemo(()=>({...c,refs:g,elements:x,dataRef:_,nodeId:o,floatingId:y,events:v,open:n,onOpenChange:p}),[c,o,y,v,n,p,g,x]);return ol(()=>{const E=f?.nodesRef.current.find(T=>T.id===o);E&&(E.context=S)}),k.useMemo(()=>({...c,context:S,refs:g,elements:x}),[c,g,x,S])}function fh(e,t,n){const r=new Map;return{...n==="floating"&&{tabIndex:-1},...e,...t.map(o=>o?o[n]:null).concat(e).reduce((o,a)=>(a&&Object.entries(a).forEach(s=>{let[u,c]=s;var f;u.indexOf("on")===0?(r.has(u)||r.set(u,[]),typeof c=="function"&&((f=r.get(u))==null||f.push(c),o[u]=function(){for(var p,h=arguments.length,_=new Array(h),v=0;v<h;v++)_[v]=arguments[v];return(p=r.get(u))==null?void 0:p.map(y=>y(..._)).find(y=>y!==void 0)})):o[u]=c}),o),{})}}var am={popover:"Popover-module_popover__E9K9X",default:"Popover-module_default__TlPJp",info:"Popover-module_info__VKCAP",warning:"Popover-module_warning__o27i9",danger:"Popover-module_danger__9bIyx",arrow:"Popover-module_arrow__5A-0e"};function $A(e){var{variant:t="default",arrow:n,initialOpen:r,placement:o,offset:a,open:s,onOpenChange:u}=e,c=ft(e,["variant","arrow","initialOpen","placement","offset","open","onOpenChange"]);const[f,p]=k.useState(r),h=s??f,_=u??p,v=k.useRef(null),y=qS({placement:o,open:h,onOpenChange:_,whileElementsMounted:MS,middleware:[hA(a??(n?12:4)),OS({padding:5,fallbackPlacements:["bottom","top"]}),(b={padding:5},b===void 0&&(b={}),{name:"shift",options:b,async fn(T){const{x:A,y:N,placement:D}=T,{mainAxis:W=!0,crossAxis:B=!1,limiter:H={fn:U=>{let{x:R,y:z}=U;return{x:R,y:z}}},...G}=b,q={x:A,y:N},$=await I_(T,G),re=Ba(_o(D)),Z=re==="x"?"y":"x";let se=q[re],O=q[Z];if(W){const U=re==="y"?"bottom":"right";se=tm(se+$[re==="y"?"top":"left"],se,se-$[U])}if(B){const U=Z==="y"?"bottom":"right";O=tm(O+$[Z==="y"?"top":"left"],O,O-$[U])}const Y=H.fn({...T,[re]:se,[Z]:O});return{...Y,data:{x:Y.x-A,y:Y.y-N}}}}),yA({element:v,padding:8})]});var b;const P=y.context,g=function(T,A){A===void 0&&(A={});const{open:N,onOpenChange:D,dataRef:W,elements:{domReference:B}}=T,{enabled:H=!0,event:G="click",toggle:q=!0,ignoreMouse:$=!1,keyboardHandlers:re=!0}=A,Z=k.useRef(),se=k.useRef(!1);return k.useMemo(()=>H?{reference:{onPointerDown(O){Z.current=O.pointerType},onMouseDown(O){O.button===0&&(Mb(Z.current,!0)&&$||G!=="click"&&(N?!q||W.current.openEvent&&W.current.openEvent.type!=="mousedown"||D(!1):(O.preventDefault(),D(!0)),W.current.openEvent=O.nativeEvent))},onClick(O){G==="mousedown"&&Z.current?Z.current=void 0:Mb(Z.current,!0)&&$||(N?!q||W.current.openEvent&&W.current.openEvent.type!=="click"||D(!1):D(!0),W.current.openEvent=O.nativeEvent)},onKeyDown(O){Z.current=void 0,O.defaultPrevented||!re||$b(O)||(O.key!==" "||Ub(B)||(O.preventDefault(),se.current=!0),O.key==="Enter"&&(N?q&&D(!1):D(!0)))},onKeyUp(O){O.defaultPrevented||!re||$b(O)||Ub(B)||O.key===" "&&se.current&&(se.current=!1,N?q&&D(!1):D(!0))}}}:{},[H,W,G,$,re,B,q,N,D])}(P,{enabled:s==null}),x=FA(P,{referencePress:!1}),S=function(T,A){A===void 0&&(A={});const{open:N,floatingId:D}=T,{enabled:W=!0,role:B="dialog"}=A,H=z_();return k.useMemo(()=>{const G={id:D,role:B};return W?B==="tooltip"?{reference:{"aria-describedby":N?D:void 0},floating:G}:{reference:{"aria-expanded":N?"true":"false","aria-haspopup":B==="alertdialog"?"dialog":B,"aria-controls":N?D:void 0,...B==="listbox"&&{role:"combobox"},...B==="menu"&&{id:H}},floating:{...G,...B==="menu"&&{"aria-labelledby":H}}}:{}},[W,B,N,D,H])}(P),E=function(T){T===void 0&&(T=[]);const A=T,N=k.useCallback(B=>fh(B,T,"reference"),A),D=k.useCallback(B=>fh(B,T,"floating"),A),W=k.useCallback(B=>fh(B,T,"item"),T.map(B=>B?.item));return k.useMemo(()=>({getReferenceProps:N,getFloatingProps:D,getItemProps:W}),[N,D,W])}([g,x,S]);return k.useMemo(()=>Object.assign(Object.assign(Object.assign(Object.assign({open:h,setOpen:_},E),y),c),{arrow:n,arrowRef:v,variant:t}),[h,_,E,y,c,n,v,t])}Ie(`.Popover-module_popover__E9K9X {
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
`);const KS=k.createContext(null),D_=()=>{const e=k.useContext(KS);if(e==null)throw new Error("Popover components must be wrapped in <Popover />");return e};function QS(e){var{children:t,trigger:n,arrow:r=!0,initialOpen:o=!1}=e,a=ft(e,["children","trigger","arrow","initialOpen"]);const s=$A(Object.assign({arrow:r,initialOpen:o},a));return j.createElement(KS.Provider,{value:s},j.createElement(UA,null,n),j.createElement(WA,null,t,s.arrow&&j.createElement(HA,null)))}QS.displayName="Popover";const UA=k.forwardRef(function(e,t){var{children:n}=e,r=ft(e,["children"]);const o=D_(),a=k.isValidElement(n)?n:null,s=M_([o.refs.setReference,t]);if(a){const u=Object.assign(Object.assign(Object.assign(Object.assign({ref:s},r),a.props),o.getReferenceProps()),{"data-state":o.open?"open":"closed","aria-expanded":o.open});return k.cloneElement(a,u)}return null}),WA=k.forwardRef(function(e,t){var n,r;const o=D_(),a=M_([o.refs.setFloating,t]);return o.open?j.createElement("div",Object.assign({ref:a,style:{position:o.strategy,top:(n=o.y)!==null&&n!==void 0?n:0,left:(r=o.x)!==null&&r!==void 0?r:0},"data-placement":o.placement,className:qe(am.popover,am[o.variant],o.className)},o.getFloatingProps(e),{tabIndex:-1,role:o.role||"dialog"}),e.children):null}),HA=k.forwardRef(function(e,t){var n,r;const o=D_(),a=M_([o.arrowRef,t]),s=(n=o.middlewareData.arrow)===null||n===void 0?void 0:n.x,u=(r=o.middlewareData.arrow)===null||r===void 0?void 0:r.y,c={top:"bottom",right:"left",bottom:"top",left:"right"}[o.placement.split("-")[0]];return j.createElement("div",Object.assign({ref:a,style:Object.assign(Object.assign(Object.assign({},s!=null?{left:s}:{}),u!=null?{top:u}:{}),c?{[c]:"-7px"}:{}),className:am.arrow},e))});var GS="utility-module_visuallyHidden__R-C67",j_="utility-module_focusable__1fBKr";Ie(`/**
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
`);const F_=e=>{var{className:t,children:n,title:r,placement:o="right",onClick:a,size:s="small"}=e,u=ft(e,["className","children","title","placement","onClick","size"]);const[c,f]=k.useState(!1);return j.createElement(QS,{variant:"info",placement:o,open:c,onOpenChange:f,className:Vo.helpTextContent,role:"tooltip",trigger:j.createElement("button",Object.assign({},u,{className:qe(Vo.helpTextButton,t),onClick:p=>{f(h=>!h),a?.(p)}}),j.createElement(AL,{className:qe(Vo.helpTextIcon,Vo.helpTextIconFilled,Vo[s],t),"data-state":c?"open":"closed","aria-hidden":!0}),j.createElement(RL,{className:qe(Vo.helpTextIcon,Vo[s],t),"data-state":c?"open":"closed","aria-hidden":!0}),j.createElement("span",{className:GS},r))},n)};F_.displayName="HelpText";var gn={template:"CheckboxRadioTemplate-module_template__CbnTf",xsmall:"CheckboxRadioTemplate-module_xsmall__JkKoU",small:"CheckboxRadioTemplate-module_small__7fCnT",hiddenLabel:"CheckboxRadioTemplate-module_hiddenLabel__iHKhU",disabled:"CheckboxRadioTemplate-module_disabled__AUMha",clickable:"CheckboxRadioTemplate-module_clickable__iw4S2",inputWrapper:"CheckboxRadioTemplate-module_inputWrapper__K4Urn",input:"CheckboxRadioTemplate-module_input__O2CzZ",visibleBox:"CheckboxRadioTemplate-module_visibleBox__mj4RB",labelAndDescription:"CheckboxRadioTemplate-module_labelAndDescription__NcntT",label:"CheckboxRadioTemplate-module_label__hsc7R",labelAndHelpText:"CheckboxRadioTemplate-module_labelAndHelpText__JIDAJ",description:"CheckboxRadioTemplate-module_description__FX9dz"};Ie(`.CheckboxRadioTemplate-module_template__CbnTf {
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
`);const VA=({checked:e,children:t,className:n,description:r,disabled:o,helpText:a,hideInput:s,hideLabel:u,inputId:c,label:f,name:p,onChange:h,presentation:_,size:v="small",type:y,value:b})=>{const P=k.useId(),g=c??"input-"+P,x=f?`${g}-label`:void 0,S=r?`${g}-description`:void 0,E=f&&!u,T=!_||typeof f!="object"&&typeof r!="object";return j.createElement(Wb,{className:qe(gn.template,gn[v],!E&&gn.hiddenLabel,o?gn.disabled:j_,n),htmlFor:g,isLabel:T},!s&&j.createElement(Wb,{className:gn.inputWrapper,htmlFor:g,isLabel:!T},j.createElement("input",{"aria-describedby":S,"aria-labelledby":f?x:void 0,checked:e!=null&&e,className:gn.input,disabled:o,id:g,name:p,onChange:o?void 0:h,role:_?"presentation":void 0,type:y,value:b}),j.createElement("span",{className:gn.visibleBox},t)),(f||r)&&j.createElement("span",{className:gn.labelAndDescription},j.createElement("span",{className:gn.labelAndHelpText},f&&j.createElement("span",{className:gn.label,id:x,style:{display:E?"inline":"none"}},f),a&&j.createElement(F_,{size:v,title:typeof f=="string"?`Help text for ${f}`:""},a)),r&&j.createElement("span",{className:gn.description,id:S},r)))},Wb=({children:e,className:t,htmlFor:n,isLabel:r})=>r?j.createElement("label",{className:t+" "+gn.clickable,htmlFor:n},e):j.createElement("span",{className:t},e);var ZA="Checkbox-module_checkbox__lSeQj",qA="Checkbox-module_compact__Cl41-",KA="Checkbox-module_error__E-bmD",QA="Checkbox-module_checked__3yAq6",GA="Checkbox-module_disabled__x7-eg",JA="Checkbox-module_readOnly__FamUn",YA="Checkbox-module_visibleBox__G7q8H",XA="Checkbox-module_checkmark__ES9N8";Ie(`.Checkbox-module_checkbox__lSeQj {
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
`);const Mt=({checkboxId:e,checked:t,compact:n,description:r,disabled:o,error:a,helpText:s,hideLabel:u,label:c,name:f,onChange:p,presentation:h,readOnly:_})=>j.createElement(VA,{checked:t,className:qe(ZA,t&&QA,a&&KA,o&&GA,n&&qA,_&&JA),description:r,disabled:o,helpText:s,hideInput:_,hideLabel:u,inputId:e,label:c,name:f,onChange:p,presentation:h,size:n?"xsmall":"small",type:"checkbox"},j.createElement("span",{className:YA},j.createElement("span",{className:XA})));Mt.displayName="Checkbox";const eI=(e,t)=>{if(e.length!==1)throw new Error("Char must be a single character.");const n=[];for(let r=0;r<t.length;r++)t[r]===e&&n.push(r);return n},Hb=(e,t)=>{const n=e.toLowerCase(),r=t.toLowerCase(),o=new Set;for(let a=0;a<e.length;a++){const s=n[a];for(const u of eI(s,r))if(!o.has(u)){o.add(u);break}}return o.size},Vb=(e,t)=>{const n=e.toLowerCase(),r=t.toLowerCase();let o=0;for(let a=0;a<r.length;a++)if(r[a]===n[o]&&(o++,o===n.length))return!0;return!1},tI=e=>(t,n)=>{const r=(o=>(a,s)=>{const u=Vb(o,a),c=Vb(o,s);if(!u&&!c)return 0;if(u&&!c)return-1;if(!u&&c)return 1;let f=0;for(let p=0;p<o.length;p++){const h=a.substring(f).indexOf(o[p]),_=s.substring(f).indexOf(o[p]);if(h<_)return-1;if(h>_)return 1;f+=h+1}return 0})(e)(t,n);return r!==0?r:(o=>(a,s)=>{const u=Hb(o,a);return Hb(o,s)-u})(e)(t,n)},nI=e=>e.format!==void 0,rI=e=>e.format===void 0,JS=(e,t)=>{const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const o of n)if(e[o]!==t[o])return!1;return!0};var hh={checkboxGroup:"CheckboxGroup-module_checkboxGroup__LIGFC",compact:"CheckboxGroup-module_compact__IPuN8",vertical:"CheckboxGroup-module_vertical__R-l07",horizontal:"CheckboxGroup-module_horizontal__myCqF"};Ie(`.CheckboxGroup-module_checkboxGroup__LIGFC {
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
`);const oI=(e,t)=>{switch(t.type){case"check":return e.concat([t.name]);case"uncheck":return e.filter(n=>n!==t.name);case"reset":return t.state}},Zb=e=>e.filter(({checked:t})=>t).map(({name:t})=>t),Nu=({compact:e,description:t,disabled:n,error:r,helpText:o,items:a,legend:s,onChange:u,presentation:c,variant:f="vertical",fieldSetProps:p})=>{if(!kS(a.map(b=>b.name)))throw Error("Each name in the checkbox group must be unique.");const[h,_]=k.useReducer(oI,Zb(a)),v=Rc([...a]);tl(()=>{(a.length!==v?.length||a.some((b,P)=>!JS(b,v[P])))&&_({type:"reset",state:Zb(a)})});const y=Rc(h);return tl(()=>{u&&!n&&!SS(y,h)&&u(h)},[h,u,n]),j.createElement(CS,Object.assign({contentClassName:qe(hh.checkboxGroup,hh[f],e&&hh.compact),description:t,disabled:n,error:r,helpText:o,legend:s,size:e?"xsmall":"small"},p),a.map(b=>j.createElement(Mt,{checkboxId:b.checkboxId,checked:h.includes(b.name),compact:e,description:b.description,disabled:n||b.disabled,error:!!r,helpText:b.helpText,key:b.name,hideLabel:b.hideLabel,label:b.label,name:b.name,onChange:P=>{_({type:P.target.checked?"check":"uncheck",name:b.name})},presentation:c})))};Nu.displayName="CheckboxGroup";Ie(`.RadioButton-module_radio__-lcP- {
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
`);const iI=()=>j.createElement("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},j.createElement("path",{d:"M8 0C3.875 0 0.5 3.375 0.5 7.5C0.5 11.625 3.875 15 8 15C12.125 15 15.5 11.625 15.5 7.5C15.5 3.375 12.125 0 8 0ZM8.875 11.25H7.5V9.9375H8.875V11.25ZM8.6875 9H7.6875L7.375 4.125H9L8.6875 9Z",fill:"white"})),aI=()=>j.createElement("svg",{width:"15",height:"15",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},j.createElement("path",{d:"M34 31.5758L23.9289 21.3939C25.5533 19.2929 26.3655 16.8687 26.3655 14.1212C26.3655 7.49495 20.8426 2 14.1827 2C7.52284 2 2 7.49495 2 14.1212C2 20.7475 7.52284 26.2424 14.1827 26.2424C16.9442 26.2424 19.5431 25.2727 21.4924 23.8182L31.7259 34L34 31.5758ZM5.24873 14.1212C5.24873 9.27273 9.30965 5.23232 14.1827 5.23232C19.0558 5.23232 23.1168 9.27273 23.1168 14.1212C23.1168 18.9697 19.0558 23.0101 14.1827 23.0101C9.30965 23.0101 5.24873 18.9697 5.24873 14.1212Z",fill:"black"}));var qb="Icon-module_icon__3YqoF",sI="Icon-module_disabled__e4-Yg";Ie(`.Icon-module_icon__3YqoF {
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
`);const lI=({variant:e,disabled:t=!1})=>{switch(e){case"error":return j.createElement("span",{className:qb,"data-testid":"input-icon-error"},j.createElement(iI,null));case"search":return j.createElement("span",{className:qe(qb,t&&sI),"data-testid":"input-icon-search"},j.createElement(aI,null));default:return null}};var or={inputAndLabel:"InputWrapper-module_inputAndLabel__t1-Vi",inputWrapper:"InputWrapper-module_inputWrapper__I-Tcb",default:"InputWrapper-module_default__SS3Cg",error:"InputWrapper-module_error__FhSCJ",disabled:"InputWrapper-module_disabled__8mIxc",readonlyInfo:"InputWrapper-module_readonlyInfo__mQyMN",readonlyConfirm:"InputWrapper-module_readonlyConfirm__WrHUu",search:"InputWrapper-module_search__SwwFJ",withPadding:"InputWrapper-module_withPadding__6NkNf",field:"InputWrapper-module_field__UA-RS",withIcon:"InputWrapper-module_withIcon__x0I81",label:"InputWrapper-module_label__x0-XH",characterLimitLabel:"InputWrapper-module_characterLimitLabel__x9Z9p",characterLimitExceeded:"InputWrapper-module_characterLimitExceeded__WKRxJ"};Ie(`.InputWrapper-module_inputAndLabel__t1-Vi {
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
`);const $_=({className:e="",disabled:t=!1,inputId:n,inputRenderer:r,isSearch:o=!1,isValid:a=!0,label:s,noFocusEffect:u,noPadding:c,readOnly:f=!1,characterLimit:p,value:h,ariaDescribedBy:_})=>{const v=k.useId(),y=n??v,b=k.useId(),P=p?b:void 0,g=h?h.toString():"",{variant:x,iconVariant:S}=(({readOnly:A=!1,disabled:N=!1,isValid:D=!0,isSearch:W=!1}={})=>A===!0||A==="readonlyInfo"?{variant:"readonlyInfo",iconVariant:"none"}:A==="readonlyConfirm"?{variant:"readonlyConfirm",iconVariant:"none"}:D===!1?{variant:"error",iconVariant:"error"}:{variant:N?"disabled":"default",iconVariant:W?"search":"none"})({disabled:t,isSearch:o,isValid:p?g.length<p.maxCount&&a:a,readOnly:f}),E=S!=="none";return j.createElement("div",null,j.createElement("span",{className:qe(or.inputAndLabel,E&&or.withIcon)},s&&j.createElement("label",{className:or.label,htmlFor:y},s),j.createElement("span",{"data-testid":"InputWrapper",className:qe(or.inputWrapper,or[x],{[or.search]:o,[or.withPadding]:!c})},j.createElement(lI,{variant:S,disabled:t}),r({className:qe(or.field,!u&&j_,e),hasIcon:E,inputId:y,variant:x,describedBy:(T=[_,P],T.filter(Boolean).join(" ")||void 0)}))),p&&P&&j.createElement(uI,Object.assign({},p,{value:g,ariaDescribedById:P})));var T},uI=({label:e,srLabel:t,maxCount:n,value:r,ariaDescribedById:o})=>{const a=n-r.length,s=r.length>n;return j.createElement(j.Fragment,null,j.createElement("span",{className:GS,id:o},t),j.createElement("div",{className:[or.characterLimitLabel,s?or.characterLimitExceeded:""].join(" "),"aria-live":s?"polite":"off"},e(a)))};var cI="MultiSelectItem-module_multiSelectItem__GMBKc",dI="MultiSelectItem-module_deleteButton__1imxW utility-module_focusable__1fBKr",fI="MultiSelectItem-module_deleteButtonCross__SI-Vd";Ie(`/**
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
`);const YS=({deleteButtonLabel:e,disabled:t,onDeleteButtonClick:n,label:r})=>j.createElement("span",{className:cI},j.createElement("span",null,r),j.createElement("button",{"aria-label":e,className:dI,disabled:t,onClick:n,type:"button"},j.createElement("span",{className:fI})));YS.displayName="MultiSelectItem";var en={select:"Select-module_select__cjdcr",disabled:"Select-module_disabled__8YgjS",fieldButton:"Select-module_fieldButton__uKwX8",field:"Select-module_field__h-wBy",inputArea:"Select-module_inputArea__jBTNl",multiple:"Select-module_multiple__cwGEC",single:"Select-module_single__i2zPs",hasIcon:"Select-module_hasIcon__Jgj-c",textInput:"Select-module_textInput__QOpiN",arrowWrapper:"Select-module_arrowWrapper__meDQz",arrow:"Select-module_arrow__w35wW",deleteButton:"Select-module_deleteButton__hZfr7",deleteButtonCross:"Select-module_deleteButtonCross__OKMwb",expanded:"Select-module_expanded__QPHZ6"};Ie(`.Select-module_select__cjdcr {
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
`);const hI=(e,t)=>((n,r)=>[...n.entries()].map(([o,a])=>({key:o,keywords:(a?.length?a:[o]).sort(r)})).sort((o,a)=>{const s=Math.min(o.keywords.length,a.keywords.length);for(let u=0;u<s;u++){const c=r(o.keywords[u],a.keywords[u]);if(c!==0)return c}return 0}).map(({key:o})=>o))(new Map(e.map(({label:n,value:r,keywords:o})=>[r,o?[n,...o]:[n]])),tI(t)).map(n=>e.find(r=>r.value===n));var pI="OptionList-module_wrapper__VWxy0",mI="OptionList-module_expanded__zQMFT",_I="OptionList-module_optionList__Ij1Ct",gI="OptionList-module_option__pIUbJ",vI="OptionList-module_selected__mCVJf",yI="OptionList-module_usingKeyboard__vHoYA",bI="OptionList-module_focused__-bi1s";Ie(`.OptionList-module_wrapper__VWxy0 {
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
`);const XS=({active:e,id:t,multiple:n,onClick:r,option:o,selected:a})=>{var s;return j.createElement("button",{"aria-label":o.label,"aria-selected":a,className:qe(gI,a&&vI,n&&e&&bI),id:t,key:o.value,onClick:()=>r(o.value),onMouseDown:u=>u.preventDefault(),onKeyDown:u=>u.preventDefault(),role:"option",type:"button",value:o.value},(s=o.formattedLabel)!==null&&s!==void 0?s:o.label)};XS.displayName="Option";const ek=({activeValue:e,expanded:t,listboxId:n,multiple:r,onOptionClick:o,optionId:a,options:s,selectedValues:u,setFloating:c,x:f,y:p})=>{const h=k.useId(),[_,v]=k.useState(!1);Oc("click",()=>v(!1)),Oc("keydown",()=>v(!0));const y=b=>e===b;return j.createElement(NA,{id:`fds-select-${h}`},j.createElement("span",{className:qe(pI,t&&mI,_&&yI),ref:c,style:{left:f,top:p}},j.createElement("span",{"aria-expanded":t,className:_I,id:n,role:"listbox"},s.map(b=>{return j.createElement(XS,{active:y(b.value),id:a(b.value),key:b.value,multiple:r,onClick:o,option:b,selected:(P=b.value,r?u.includes(P):y(P))});var P}))))};ek.displayName="OptionList";const fs={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},tk=e=>{var t,n;const{disabled:r,error:o,hideLabel:a,inputId:s,label:u,multiple:c,onBlur:f,onChange:p,onFocus:h,options:_,searchLabel:v,value:y}=e,b=_.map(le=>le.value);if(b.length!==new Set(b).size)throw Error("Each value in the option list must be unique.");const P=k.useCallback(le=>{var me;return(me=_.find(ee=>ee.value===le))!==null&&me!==void 0?me:{label:"",value:""}},[_]),[g,x]=k.useState(c&&y!=null?y:[]),[S,E]=k.useState(c?"":(n=(t=P(y))===null||t===void 0?void 0:t.label)!==null&&n!==void 0?n:""),[T,A]=k.useState(_),N=Rc([..._]),D=Rc(y);tl(()=>{var le,me;let ee=!1;(_.length!==N?.length||_.some((ce,de)=>!JS(ce,N[de])))&&(A(_),ee=!0),(!c&&y!==D||c&&(typeof D=="string"||!SS(y,D))||ee)&&(c?x(y??[]):(H(y),E((me=(le=P(y))===null||le===void 0?void 0:le.label)!==null&&me!==void 0?me:"")))});const W=_.length,[B,H]=k.useState(c?void 0:y),G=T.findIndex(le=>le.value===B),q=k.useCallback(le=>E(!c&&le||""),[E,c]),{x:$,y:re,elements:Z,refs:se}=qS({placement:"bottom",whileElementsMounted:MS,middleware:[OS(),pA({apply:({availableHeight:le,elements:me,rects:ee})=>{Object.assign(me.floating.style,{maxHeight:`min(${le}px, var(--option_list-max_height))`,width:`${ee.reference.width}px`})}})]}),O=Z.floating,Y=Z.reference,U=function(le){const[me,ee]=k.useState(!1),ce=()=>{var de;const{activeElement:_e}=document;ee((de=le?.contains(_e))!==null&&de!==void 0&&de)};return Oc("focusin",ce,le),Oc("focusout",ce,le),me}(Y);tl(()=>{var le,me;c||U||E((me=(le=P(B))===null||le===void 0?void 0:le.label)!==null&&me!==void 0?me:""),U&&h?h(c?g:B||""):!U&&f&&f(c?g:B||"")},[U]);const[R,z]=k.useState(!1);k.useEffect(()=>{if(O){const le=O.offsetHeight,me=O.querySelectorAll("button");if(!me.length)return;const ee=O.scrollTop,ce=ee+le,de=me[G];if(de){const _e=de.offsetTop,ke=_e+de.offsetHeight;_e>=ee&&ke<=ce||(O.scrollTop=_e<ee?_e:ke-le)}}},[G,O]);const M=(le,me)=>{g?.length||H(me),x(le),p&&p(le),q()},V=le=>{var me;c?g.includes(le)?te(le):M([...g,le],le):(H(me=le),q(P(me).label),z(!1),p&&p(me))},te=le=>{M(g.filter(me=>me!==le),le)},ie=k.useCallback(()=>{let le=null;if(B===void 0)le=T[0];else{const me=G+1;me>=0&&me<W&&(le=T[me])}le&&(H(le.value),q(le.label)),z(!0)},[B,G,q,H,T,W]),fe=k.useCallback(()=>{let le=null;if(B===void 0)le=T[W-1];else{const me=G-1;me>=0&&me<W&&(le=T[me])}le&&(H(le.value),q(le.label)),z(!0)},[B,G,q,H,T,W]);ah(fs.ArrowDown,()=>R?ie():z(!0),Y),ah(fs.ArrowUp,()=>R?fe():z(!0),Y),ah(fs.Enter,()=>{R&&(B?V(B):z(!1))},Y);const be=le=>{var me,ee;const ce=le.target.value;if(ce){const de=hI(_,ce);A(de);const _e=(me=T[0])===null||me===void 0?void 0:me.value,ke=(ee=de[0])===null||ee===void 0?void 0:ee.value;de&&_e!=ke&&H(ke),!R&&z(!0)}E(ce)},Je=k.useId(),Ze=s??Je,Re=k.useId();return j.createElement("span",{className:qe(en.select,en[c?"multiple":"single"],R&&en.expanded,r&&en.disabled),"data-testid":"select-root"},j.createElement($_,{disabled:r,inputId:Ze,inputRenderer:({className:le,inputId:me,hasIcon:ee})=>j.createElement("span",{className:qe(le,en.field,ee&&en.hasIcon),ref:se.setReference},j.createElement("span",{className:en.inputArea},c&&j.createElement(j.Fragment,null,g.map(P).map(ce=>j.createElement(YS,{deleteButtonLabel:ce.deleteButtonLabel,disabled:r!=null&&r,key:ce.value,label:ce.label,onDeleteButtonClick:()=>te(ce.value)}))),j.createElement("input",{"aria-activedescendant":B?`${me}-${B}`:void 0,"aria-autocomplete":"list","aria-controls":Re,"aria-expanded":R,"aria-haspopup":"listbox","aria-label":v??u,"aria-owns":Re,autoComplete:"off",className:en.textInput,disabled:r,id:me,onBlur:()=>z(!1),onClick:()=>z(!0),onChange:be,onFocus:()=>z(!0),onKeyDown:ce=>{Object.values(fs).includes(ce.key)&&ce.preventDefault()},role:"combobox",type:"text",value:S})),c&&j.createElement("button",{"aria-label":e.deleteButtonLabel,className:en.deleteButton+" "+j_,disabled:!g.length||r,onClick:()=>{M([])},type:"button"},j.createElement("span",{className:en.deleteButtonCross})),j.createElement("button",{"aria-controls":Re,"aria-expanded":R,"aria-haspopup":"listbox","aria-label":u,className:en.fieldButton,disabled:r,onBlur:()=>z(!1),onClick:()=>z(!R),onKeyDown:ce=>{Object.values(fs).includes(ce.key)&&(ce.preventDefault(),z(!0))},tabIndex:-1,type:"button",value:c?g:B},j.createElement("span",{className:en.arrowWrapper},j.createElement("span",{className:en.arrow})))),isSearch:!1,isValid:!o,label:a?void 0:u,noFocusEffect:c,noPadding:!0,readOnly:!1}),j.createElement(ek,{activeValue:B,expanded:R,listboxId:Re,multiple:!!c,onOptionClick:V,optionId:le=>`${Ze}-${le}`,options:T,selectedValues:g,setFloating:se.setFloating,x:$,y:re}))};tk.displayName="Select";var xI="Spinner-module_spinner__GpFZS",wI="Spinner-module_spinnerCircle__DRFwJ",SI="Spinner-module_defaultForeground__Ay0Sq",kI="Spinner-module_interactionForeground__8aY93",PI="Spinner-module_invertedForeground__DF2fs",CI="Spinner-module_defaultBackground__7A7zq",EI="Spinner-module_interactionBackground__jBIwt",OI="Spinner-module_invertedBackground__nQ8Oa";Ie(`.Spinner-module_spinner__GpFZS {
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
`);const Kb={xSmall:13,small:20,medium:27,large:40,"1xLarge":44,"2xLarge":56,"3xLarge":79},Qb={default:{foreground:SI,background:CI},interaction:{foreground:kI,background:EI},inverted:{foreground:PI,background:OI}},RI=e=>{var{title:t,size:n="medium",variant:r="default",className:o=""}=e,a=ft(e,["title","size","variant","className"]);return j.createElement("svg",Object.assign({className:`${xI} ${o}`,style:{width:Kb[n],height:Kb[n]},viewBox:"0 0 50 50"},a),j.createElement("title",null,t),j.createElement("circle",{className:Qb[r].background,cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"}),j.createElement("circle",{className:`${wI} ${Qb[r].foreground}`,cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"}))};var Gb={textArea:"TextArea-module_textArea__Fp7-I","resize-none":"TextArea-module_resize-none__LLMFm","resize-both":"TextArea-module_resize-both__LTKmK","resize-horizontal":"TextArea-module_resize-horizontal__SIRxw","resize-vertical":"TextArea-module_resize-vertical__oRHAF"};Ie(`.TextArea-module_textArea__Fp7-I {
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
`);k.forwardRef((e,t)=>{var n,{isValid:r=!0,disabled:o=!1,readOnly:a=!1,resize:s="none",label:u,characterLimit:c,value:f,onChange:p,"aria-describedby":h}=e,_=ft(e,["isValid","disabled","readOnly","resize","label","characterLimit","value","onChange","aria-describedby"]);const[v,y]=k.useState(f?f.toString():""),b=k.useId(),P=(n=_.id)!==null&&n!==void 0?n:b,g=x=>{y(x.target.value),p&&p(x)};return j.createElement($_,{value:v,disabled:o,inputId:P,characterLimit:c,ariaDescribedBy:h,inputRenderer:({className:x,inputId:S,describedBy:E})=>j.createElement("textarea",Object.assign({},_,{ref:t,value:f,onChange:g,id:S,"aria-describedby":E,disabled:o,readOnly:!!a,className:[x,Gb.textArea,Gb[`resize-${s}`]].join(" ")})),isValid:r,label:u,readOnly:a})});k.forwardRef((e,t)=>{var{id:n,onChange:r,isValid:o=!0,disabled:a=!1,readOnly:s=!1,required:u=!1,formatting:c,label:f,value:p,characterLimit:h,"aria-describedby":_}=e,v=ft(e,["id","onChange","isValid","disabled","readOnly","required","formatting","label","value","characterLimit","aria-describedby"]);const[y,b]=k.useState(p?p.toString():""),P=(x,S)=>{if(S.source==="event"&&r){const E=(({values:T,sourceInfo:A})=>{const N=Object.assign({},A.event);return Object.assign(Object.assign({},N),{target:Object.assign(Object.assign({},N.target),{value:T.value.trim()})})})({values:x,sourceInfo:S});b(E.target.value),r(E)}},g=x=>{r&&r(x),b(x.target.value||"")};return j.createElement($_,{value:y,isValid:o,disabled:a,readOnly:s,label:f,inputId:n,characterLimit:h,ariaDescribedBy:_,inputRenderer:({className:x,variant:S,inputId:E,describedBy:T})=>{const A={id:E,readOnly:!!s,disabled:a,required:u,className:qe(x,v.className),style:Object.assign({textAlign:c?.align},v.style)};return c?.number&&rI(c.number)?(c.number.prefix&&c.number.prefix[0]==="-"&&(c.number.prefix=` ${c.number.prefix}`),j.createElement(JL,Object.assign({},A,c.number,v,{value:p,"data-testid":`${E}-formatted-number-${S}`,onValueChange:P,valueIsNumericString:!0,"aria-describedby":T,getInputRef:t}))):c?.number&&nI(c.number)?j.createElement(oA,Object.assign({},A,c.number,v,{value:p,"data-testid":`${E}-formatted-number-${S}`,onValueChange:P,valueIsNumericString:!0,"aria-describedby":T,getInputRef:t})):j.createElement("input",Object.assign({},A,v,{value:p,"data-testid":`${E}-${S}`,onChange:g,"aria-describedby":T,ref:t}))}})});k.createContext(void 0);Ie(`.LegacyAccordion-module_legacyAccordion__eadKx {
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
`);var Jb={list:"List-module_list__9aWGq",solid:"List-module_solid__g5log",dashed:"List-module_dashed__sq10j"};Ie(`.List-module_list__9aWGq {
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
`);const TI=e=>{var{borderStyle:t="solid",children:n,className:r}=e,o=ft(e,["borderStyle","children","className"]);return j.createElement("ul",Object.assign({},o,{className:qe([Jb.list,Jb[t],r])}),n)};var LI="ListItem-module_listItem__AJQMK";Ie(`.ListItem-module_listItem__AJQMK {
  border-bottom-color: var(--component-list-border_color);
  border-bottom-style: var(--component-list-border_style);
  border-bottom-width: var(--component-list-border_width);
  display: block;
}
`);const Zo=e=>{var{children:t}=e,n=ft(e,["children"]);return j.createElement("li",Object.assign({},n,{className:LI}),t)};Ie(`.Table-module_table__Dkosn {
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
`);var fu={paragraph:"Paragraph-module_paragraph__Q65gR",spacing:"Paragraph-module_spacing__NqukG",large:"Paragraph-module_large__a1-p4",short:"Paragraph-module_short__2YxWV",medium:"Paragraph-module_medium__LYuYD",small:"Paragraph-module_small__nw9qP",xsmall:"Paragraph-module_xsmall__sCdyx"};Ie(`.Paragraph-module_paragraph__Q65gR {
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
`);const nk=k.forwardRef((e,t)=>{var{className:n,size:r="medium",spacing:o,as:a="p",short:s}=e,u=ft(e,["className","size","spacing","as","short"]);return j.createElement(a,Object.assign({},u,{ref:t,className:qe(fu.paragraph,fu[r],{[fu.spacing]:!!o,[fu.short]:s},n)}))});var ph={heading:"Heading-module_heading__oGM7x",spacing:"Heading-module_spacing__F-DQ2",xlarge:"Heading-module_xlarge__Aq3TF",large:"Heading-module_large__kEdDZ",medium:"Heading-module_medium__VfBrh",small:"Heading-module_small__SY2lJ",xsmall:"Heading-module_xsmall__hYzb1",xxsmall:"Heading-module_xxsmall__TrWhu"};Ie(`.Heading-module_heading__oGM7x {
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
`);const rk=k.forwardRef((e,t)=>{var{level:n=1,size:r="xlarge",spacing:o=!1,className:a,as:s}=e,u=ft(e,["level","size","spacing","className","as"]);const c=s??`h${n??1}`;return j.createElement(c,Object.assign({},u,{ref:t,className:qe(ph.heading,ph[r],{[ph.spacing]:o},a)}))});var mh={ingress:"Ingress-module_ingress__QiPXj",spacing:"Ingress-module_spacing__C2m1n",medium:"Ingress-module_medium__r-UCu"};Ie(`.Ingress-module_ingress__QiPXj {
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
`);const AI=k.forwardRef((e,t)=>{var{className:n,size:r="medium",spacing:o,as:a="p"}=e,s=ft(e,["className","size","spacing","as"]);return j.createElement(a,Object.assign({},s,{ref:t,className:qe(mh.ingress,mh[r],{[mh.spacing]:!!o},n)}))});var _h={label:"Label-module_label__vyjHz",spacing:"Label-module_spacing__8PZyR",large:"Label-module_large__Y2DhY",medium:"Label-module_medium__mDhxE",small:"Label-module_small__5UUDo",xsmall:"Label-module_xsmall__TwPQx"};Ie(`.Label-module_label__vyjHz {
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
`);k.forwardRef((e,t)=>{var{className:n,size:r="medium",spacing:o,as:a="label"}=e,s=ft(e,["className","size","spacing","as"]);return j.createElement(a,Object.assign({},s,{ref:t,className:qe(_h.label,_h[r],{[_h.spacing]:!!o},n)}))});var gh={errorMessage:"ErrorMessage-module_errorMessage__Mn3zg",spacing:"ErrorMessage-module_spacing__cDjeN",medium:"ErrorMessage-module_medium__ZOE1G",small:"ErrorMessage-module_small__mUspd"};Ie(`.ErrorMessage-module_errorMessage__Mn3zg {
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
`);const II=k.forwardRef((e,t)=>{var{className:n,size:r="medium",spacing:o,as:a="p"}=e,s=ft(e,["className","size","spacing","as"]);return j.createElement(a,Object.assign({},s,{ref:t,className:qe(gh.errorMessage,gh[r],{[gh.spacing]:!!o},n)}))});var yo={accordion:"Accordion-module_accordion__LVhhv",border:"Accordion-module_border__33ZCr",expandIcon:"Accordion-module_expandIcon__VoOG-",content:"Accordion-module_content__PEM9t",item:"Accordion-module_item__7ryVk",header:"Accordion-module_header__WaTdJ",button:"Accordion-module_button__DIKcm",neutral:"Accordion-module_neutral__qNam6",subtle:"Accordion-module_subtle__Mo-a1",primary:"Accordion-module_primary__62zA0",secondary:"Accordion-module_secondary__D7Kj1",tertiary:"Accordion-module_tertiary__jJX6T",open:"Accordion-module_open__98jLY",filled:"Accordion-module_filled__lWoG4"};Ie(`.Accordion-module_accordion__LVhhv {
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
`);const zI=k.forwardRef((e,t)=>{var{border:n=!1,color:r="neutral",className:o}=e,a=ft(e,["border","color","className"]);return j.createElement("div",Object.assign({},a,{className:qe(yo.accordion,yo[r],{[yo.border]:n},o),ref:t}))}),U_=k.createContext(null),NI=k.forwardRef((e,t)=>{var{children:n,className:r,open:o,defaultOpen:a=!1}=e,s=ft(e,["children","className","open","defaultOpen"]);const[u,c]=k.useState(a),f=k.useId();return j.createElement("div",Object.assign({className:qe(yo.item,r,{[yo.open]:o??u}),ref:t},s),j.createElement(U_.Provider,{value:{open:o??u,toggleOpen:()=>{o===void 0&&c(p=>!p)},contentId:f}},n))});function Yb(e){return typeof e=="string"&&e[e.length-1]==="%"&&function(t){const n=parseFloat(t);return!isNaN(n)&&isFinite(n)}(e.substring(0,e.length-1))}function vh(e,t){t===0&&e?.style&&(e.style.display="none")}const BI=e=>{var{children:t,className:n,innerClassName:r,duration:o=250,easing:a="ease",height:s}=e,u=ft(e,["children","className","innerClassName","duration","easing","height"]);const c=k.useRef(s),f=k.useRef(null),p=k.useRef(),h=k.useRef(),_=typeof window<"u",v=k.useRef(!(!_||!window.matchMedia)&&window.matchMedia("(prefers-reduced-motion)").matches).current?0:o;let y=s,b="visible";typeof y=="number"?(y=+s<0?0:s,b="hidden"):Yb(y)&&(y=s==="0%"?0:s,b="hidden");const[P,g]=k.useState(y),[x,S]=k.useState(b),[E,T]=k.useState(!1);k.useEffect(()=>{vh(f.current,P)},[]),k.useEffect(()=>{if(s!==c.current&&f.current){(function(re,Z){Z===0&&re?.style&&(re.style.display="")})(f.current,c.current),f.current.style.overflow="hidden";const D=f.current.offsetHeight;f.current.style.overflow="";const W=v;let B,H,G,q="hidden";const $=c.current==="auto";typeof s=="number"?(B=s<0?0:s,H=B):Yb(s)?(B=s==="0%"?0:s,H=B):(B=D,H="auto",q=void 0),$&&(H=B,B=D),g(B),S("hidden"),T(!$),clearTimeout(h.current),clearTimeout(p.current),$?(G=!0,h.current=setTimeout(()=>{g(H),S(q),T(G)},50),p.current=setTimeout(()=>{T(!1),vh(f.current,H)},W)):h.current=setTimeout(()=>{g(H),S(q),T(!1),s!=="auto"&&vh(f.current,B)},W)}return c.current=s,()=>{clearTimeout(h.current),clearTimeout(p.current)}},[s]);const A={height:P,overflow:x};E&&(A.transition=`height ${v}ms ${a} 0ms`,A.WebkitTransition=A.transition);const N=u["aria-hidden"]!==void 0?u["aria-hidden"]:s===0;return j.createElement("div",Object.assign({},u,{className:n,style:A}),j.createElement("div",{"aria-hidden":N,className:r,ref:f},t))},MI=k.forwardRef((e,t)=>{var{children:n,className:r}=e,o=ft(e,["children","className"]);const a=k.useContext(U_);return a===null?(console.error("<Accordion.Content> has to be used within an <Accordion.Item>"),null):j.createElement(BI,{id:a.contentId,height:a.open?"auto":0,duration:250},j.createElement(nk,Object.assign({},o,{as:"div",size:"small",ref:t,className:qe(yo.content,r)}),n))});let Xb=0;const e0=j.useId;function DI(e){var t;if(e0!==void 0){const n=e0();return e??n.replace(/(:)/g,"")}return(t=function(n){const[r,o]=k.useState(n),a=n||r;return k.useEffect(()=>{r==null&&(Xb+=1,o(`aksel-icon-${Xb}`))},[r]),a}(e))!==null&&t!==void 0?t:""}var jI=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},FI=k.forwardRef((e,t)=>{var{title:n,titleId:r}=e,o=jI(e,["title","titleId"]);let a=DI();return a=n?r||"title-"+a:void 0,k.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},o),n?k.createElement("title",{id:a},n):null,k.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06Z",fill:"currentColor"}))});const $I=k.forwardRef((e,t)=>{var{level:n=1,children:r,className:o,onHeaderClick:a}=e,s=ft(e,["level","children","className","onHeaderClick"]);const u=k.useContext(U_);return u===null?(console.error("<Accordion.Header> has to be used within an <Accordion.Item>"),null):j.createElement(rk,Object.assign({},s,{ref:t,size:"xsmall",level:n,className:qe(yo.header,o)}),j.createElement("button",{type:"button",onClick:c=>{u.toggleOpen(),a&&a(c)},"aria-expanded":u.open,"aria-controls":u.contentId},j.createElement(FI,{"aria-hidden":!0,className:yo.expandIcon}),j.createElement(nk,{as:"span",size:"small"},r)))}),ar=zI;var t0,n0,r0,o0,i0,a0,s0,l0,As,u0,c0,d0,f0,h0,p0,m0,_0;ar.Header=$I,ar.Content=MI,ar.Item=NI,ar.Header.displayName="Accordion.Header",ar.Content.displayName="Accordion.Content",ar.Item.displayName="Accordion.Item",function(e){e.Xsmall="xsmall",e.Small="small"}(t0||(t0={})),function(e){e.Default="default",e.Error="error",e.Disabled="disabled",e.ReadOnlyInfo="readonlyInfo",e.ReadOnlyConfirm="readonlyConfirm"}(n0||(n0={})),function(e){e.ReadOnlyInfo="readonlyInfo",e.ReadOnlyConfirm="readonlyConfirm"}(r0||(r0={})),function(e){e.None="none",e.Error="error",e.Search="search"}(o0||(o0={})),function(e){e.Primary="primary",e.Secondary="secondary"}(i0||(i0={})),function(e){e.Small="small",e.Medium="medium",e.Large="large"}(a0||(a0={})),function(e){e.Primary="primary",e.Secondary="secondary",e.Success="success",e.Danger="danger",e.Inverted="inverted"}(s0||(s0={})),function(e){e.Filled="filled",e.Outline="outline",e.Quiet="quiet"}(l0||(l0={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(As||(As={})),function(e){e.Xsmall="xsmall",e.Small="small"}(u0||(u0={})),function(e){e.Xsmall="xsmall",e.Small="small"}(c0||(c0={})),function(e){e.Xsmall="xsmall",e.Small="small"}(d0||(d0={})),function(e){e.Xsmall="xsmall",e.Small="small"}(f0||(f0={})),function(e){e.Default="default",e.Info="info",e.Warning="warning",e.Danger="danger"}(h0||(h0={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(p0||(p0={})),function(e){e.XLarge="xlarge",e.Large="large",e.Medium="medium",e.Small="small",e.XSmall="xsmall"}(m0||(m0={})),function(e){e[e.H1=1]="H1",e[e.H2=2]="H2",e[e.H3=3]="H3",e[e.H4=4]="H4",e[e.H5=5]="H5",e[e.H6=6]="H6"}(_0||(_0={}));let g0=0;function UI(e){const[t,n]=k.useState(e),r=e||t;return k.useEffect(()=>{t==null&&(g0+=1,n(`aksel-icon-${g0}`))},[t]),r}const v0=j["useId"];function W_(e){var t;if(v0!==void 0){const n=v0();return e??n.replace(/(:)/g,"")}return(t=UI(e))!==null&&t!==void 0?t:""}var WI=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const HI=k.forwardRef((e,t)=>{var{title:n,titleId:r}=e,o=WI(e,["title","titleId"]);let a=W_();return a=n?r||"title-"+a:void 0,k.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},o),n?k.createElement("title",{id:a},n):null,k.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06Z",fill:"currentColor"}))}),VI=HI;var ZI=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const qI=k.forwardRef((e,t)=>{var{title:n,titleId:r}=e,o=ZI(e,["title","titleId"]);let a=W_();return a=n?r||"title-"+a:void 0,k.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},o),n?k.createElement("title",{id:a},n):null,k.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.25 7A.75.75 0 0 1 4 6.25h16a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 7Zm3 5a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM10 16.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z",fill:"currentColor"}))}),KI=qI;var QI=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const GI=k.forwardRef((e,t)=>{var{title:n,titleId:r}=e,o=QI(e,["title","titleId"]);let a=W_();return a=n?r||"title-"+a:void 0,k.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},o),n?k.createElement("title",{id:a},n):null,k.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94 6.53 5.47Z",fill:"currentColor"}))}),JI=GI;var sm={},YI={get exports(){return sm},set exports(e){sm=e}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],o=0;o<arguments.length;o++){var a=arguments[o];if(a){var s=typeof a;if(s==="string"||s==="number")r.push(a);else if(Array.isArray(a)){if(a.length){var u=n.apply(null,a);u&&r.push(u)}}else if(s==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){r.push(a.toString());continue}for(var c in a)t.call(a,c)&&a[c]&&r.push(c)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(YI);const Oa=sm;function zc(e,t){if(e===t)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(const[n]of e.entries())if(e[n]!==t[n])return!1;return!0}const XI=e=>{const t=a=>window?.matchMedia(a).matches??!1,[n,r]=k.useState(t(e)),o=()=>{r(t(e))};return k.useEffect(()=>{const a=window.matchMedia(e);return o(),a.addEventListener("change",o),()=>{a.removeEventListener("change",o)}},[e]),n};function lm(e){const t=k.useRef();return k.useEffect(()=>{t.current=e},[e]),t.current}const ez=(e,t)=>e.filter(n=>n.label.toLowerCase().includes(t.toLocaleLowerCase())),tz="_optionDisplay_1lnxj_1",nz="_optionList_1lnxj_15",rz="_option_1lnxj_1",oz="_propagationStopper_1lnxj_69",iz="_scrollContainer_1lnxj_79",az="_searchField_1lnxj_91",$i={optionDisplay:tz,optionList:nz,option:rz,propagationStopper:oz,scrollContainer:iz,searchField:az},sz=({options:e,values:t,searchable:n,compact:r=!0,onValueChange:o})=>{const[a,s]=k.useState(t??[]),[u,c]=k.useState(e),{t:f}=yl("common"),p=lm(t);k.useEffect(()=>{zc(t,p)||s(t??[])},[t]);const h=lm(e);k.useEffect(()=>{zc(e,h)||c(e)},[e]);const _=(P,g)=>{s(P),o?.(P)},v=P=>{a?.includes(P)?_(a.filter(g=>g!==P)):_([...a,P])},y=P=>{c(ez(e,P))},b=u.map((P,g)=>{const x=a?.includes(P.value);return Q.jsx("button",{className:$i.option,onClick:()=>{v(P.value)},tabIndex:-1,children:Q.jsx("div",{className:$i.propagationStopper,tabIndex:-1,onClick:S=>{S.stopPropagation()},onKeyDown:S=>{S.key!=="Escape"&&S.stopPropagation()},children:Q.jsx(Mt,{onChange:()=>{v(P.value)},checked:x,label:P.label,compact:r})})},P.value)});return Q.jsxs("div",{className:$i.optionDisplay,children:[n&&Q.jsx("div",{className:$i.searchField,children:Q.jsx(PL,{"aria-label":String(f("common.search")),onChange:P=>{y(P.target.value)}})}),Q.jsx("div",{className:$i.scrollContainer,tabIndex:-1,children:Q.jsx("div",{className:$i.optionList,children:b})})]})},lz="_popoverContent_12aed_5",uz="_modalHeader_12aed_21",cz="_optionSection_12aed_31",dz="_modal_12aed_21",fz="_filterActions_12aed_51",hz="_resetButton_12aed_79",qo={popoverContent:lz,modalHeader:uz,optionSection:cz,modal:dz,filterActions:fz,resetButton:hz};function ok(e){return e.split("-")[1]}function pz(e){return e==="y"?"height":"width"}function Ud(e){return e.split("-")[0]}function H_(e){return["top","bottom"].includes(Ud(e))?"x":"y"}function y0(e,t,n){let{reference:r,floating:o}=e;const a=r.x+r.width/2-o.width/2,s=r.y+r.height/2-o.height/2,u=H_(t),c=pz(u),f=r[c]/2-o[c]/2,p=u==="x";let h;switch(Ud(t)){case"top":h={x:a,y:r.y-o.height};break;case"bottom":h={x:a,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:s};break;case"left":h={x:r.x-o.width,y:s};break;default:h={x:r.x,y:r.y}}switch(ok(t)){case"start":h[u]-=f*(n&&p?-1:1);break;case"end":h[u]+=f*(n&&p?-1:1)}return h}const mz=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:a=[],platform:s}=n,u=a.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(t));let f=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:p,y:h}=y0(f,r,c),_=r,v={},y=0;for(let b=0;b<u.length;b++){const{name:P,fn:g}=u[b],{x,y:S,data:E,reset:T}=await g({x:p,y:h,initialPlacement:r,placement:_,strategy:o,middlewareData:v,rects:f,platform:s,elements:{reference:e,floating:t}});p=x??p,h=S??h,v={...v,[P]:{...v[P],...E}},T&&y<=50&&(y++,typeof T=="object"&&(T.placement&&(_=T.placement),T.rects&&(f=T.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):T.rects),{x:p,y:h}=y0(f,_,c)),b=-1)}return{x:p,y:h,placement:_,strategy:o,middlewareData:v}};function _z(e){return typeof e!="number"?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(e):{top:e,right:e,bottom:e,left:e}}function Nc(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function gz(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:a,rects:s,elements:u,strategy:c}=e,{boundary:f="clippingAncestors",rootBoundary:p="viewport",elementContext:h="floating",altBoundary:_=!1,padding:v=0}=t,y=_z(v),b=u[_?h==="floating"?"reference":"floating":h],P=Nc(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(b)))==null||n?b:b.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(u.floating)),boundary:f,rootBoundary:p,strategy:c})),g=h==="floating"?{...s.floating,x:r,y:o}:s.reference,x=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u.floating)),S=await(a.isElement==null?void 0:a.isElement(x))&&await(a.getScale==null?void 0:a.getScale(x))||{x:1,y:1},E=Nc(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:g,offsetParent:x,strategy:c}):g);return{top:(P.top-E.top+y.top)/S.y,bottom:(E.bottom-P.bottom+y.bottom)/S.y,left:(P.left-E.left+y.left)/S.x,right:(E.right-P.right+y.right)/S.x}}const vz=Math.min,yz=Math.max;function b0(e,t,n){return yz(e,vz(t,n))}const bz=["top","right","bottom","left"];bz.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);const xz=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,o=await async function(a,s){const{placement:u,platform:c,elements:f}=a,p=await(c.isRTL==null?void 0:c.isRTL(f.floating)),h=Ud(u),_=ok(u),v=H_(u)==="x",y=["left","top"].includes(h)?-1:1,b=p&&v?-1:1,P=typeof s=="function"?s(a):s;let{mainAxis:g,crossAxis:x,alignmentAxis:S}=typeof P=="number"?{mainAxis:P,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...P};return _&&typeof S=="number"&&(x=_==="end"?-1*S:S),v?{x:x*b,y:g*y}:{x:g*y,y:x*b}}(t,e);return{x:n+o.x,y:r+o.y,data:o}}}};function wz(e){return e==="x"?"y":"x"}const Sz=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:a=!0,crossAxis:s=!1,limiter:u={fn:P=>{let{x:g,y:x}=P;return{x:g,y:x}}},...c}=e,f={x:n,y:r},p=await gz(t,c),h=H_(Ud(o)),_=wz(h);let v=f[h],y=f[_];if(a){const P=h==="y"?"bottom":"right";v=b0(v+p[h==="y"?"top":"left"],v,v-p[P])}if(s){const P=_==="y"?"bottom":"right";y=b0(y+p[_==="y"?"top":"left"],y,y-p[P])}const b=u.fn({...t,[h]:v,[_]:y});return{...b,data:{x:b.x-n,y:b.y-r}}}}};function wn(e){var t;return((t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Un(e){return wn(e).getComputedStyle(e)}function ik(e){return e instanceof wn(e).Node}function To(e){return ik(e)?(e.nodeName||"").toLowerCase():""}function Vn(e){return e instanceof wn(e).HTMLElement}function an(e){return e instanceof wn(e).Element}function x0(e){return typeof ShadowRoot>"u"?!1:e instanceof wn(e).ShadowRoot||e instanceof ShadowRoot}function il(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Un(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function kz(e){return["table","td","th"].includes(To(e))}function um(e){const t=V_(),n=Un(e);return n.transform!=="none"||n.perspective!=="none"||!t&&!!n.backdropFilter&&n.backdropFilter!=="none"||!t&&!!n.filter&&n.filter!=="none"||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function V_(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Wd(e){return["html","body","#document"].includes(To(e))}const w0=Math.min,Is=Math.max,Bc=Math.round;function ak(e){const t=Un(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Vn(e),a=o?e.offsetWidth:n,s=o?e.offsetHeight:r,u=Bc(n)!==a||Bc(r)!==s;return u&&(n=a,r=s),{width:n,height:r,fallback:u}}function sk(e){return an(e)?e:e.contextElement}const lk={x:1,y:1};function pa(e){const t=sk(e);if(!Vn(t))return lk;const n=t.getBoundingClientRect(),{width:r,height:o,fallback:a}=ak(t);let s=(a?Bc(n.width):n.width)/r,u=(a?Bc(n.height):n.height)/o;return s&&Number.isFinite(s)||(s=1),u&&Number.isFinite(u)||(u=1),{x:s,y:u}}const S0={x:0,y:0};function uk(e,t,n){var r,o;if(t===void 0&&(t=!0),!V_())return S0;const a=e?wn(e):window;return!n||t&&n!==a?S0:{x:((r=a.visualViewport)==null?void 0:r.offsetLeft)||0,y:((o=a.visualViewport)==null?void 0:o.offsetTop)||0}}function bi(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),a=sk(e);let s=lk;t&&(r?an(r)&&(s=pa(r)):s=pa(e));const u=uk(a,n,r);let c=(o.left+u.x)/s.x,f=(o.top+u.y)/s.y,p=o.width/s.x,h=o.height/s.y;if(a){const _=wn(a),v=r&&an(r)?wn(r):r;let y=_.frameElement;for(;y&&r&&v!==_;){const b=pa(y),P=y.getBoundingClientRect(),g=getComputedStyle(y);P.x+=(y.clientLeft+parseFloat(g.paddingLeft))*b.x,P.y+=(y.clientTop+parseFloat(g.paddingTop))*b.y,c*=b.x,f*=b.y,p*=b.x,h*=b.y,c+=P.x,f+=P.y,y=wn(y).frameElement}}return Nc({width:p,height:h,x:c,y:f})}function bo(e){return((ik(e)?e.ownerDocument:e.document)||window.document).documentElement}function Hd(e){return an(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ck(e){return bi(bo(e)).left+Hd(e).scrollLeft}function Ra(e){if(To(e)==="html")return e;const t=e.assignedSlot||e.parentNode||x0(e)&&e.host||bo(e);return x0(t)?t.host:t}function dk(e){const t=Ra(e);return Wd(t)?t.ownerDocument.body:Vn(t)&&il(t)?t:dk(t)}function xo(e,t){var n;t===void 0&&(t=[]);const r=dk(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),a=wn(r);return o?t.concat(a,a.visualViewport||[],il(r)?r:[]):t.concat(r,xo(r))}function k0(e,t,n){let r;if(t==="viewport")r=function(o,a){const s=wn(o),u=bo(o),c=s.visualViewport;let f=u.clientWidth,p=u.clientHeight,h=0,_=0;if(c){f=c.width,p=c.height;const v=V_();(!v||v&&a==="fixed")&&(h=c.offsetLeft,_=c.offsetTop)}return{width:f,height:p,x:h,y:_}}(e,n);else if(t==="document")r=function(o){const a=bo(o),s=Hd(o),u=o.ownerDocument.body,c=Is(a.scrollWidth,a.clientWidth,u.scrollWidth,u.clientWidth),f=Is(a.scrollHeight,a.clientHeight,u.scrollHeight,u.clientHeight);let p=-s.scrollLeft+ck(o);const h=-s.scrollTop;return Un(u).direction==="rtl"&&(p+=Is(a.clientWidth,u.clientWidth)-c),{width:c,height:f,x:p,y:h}}(bo(e));else if(an(t))r=function(o,a){const s=bi(o,!0,a==="fixed"),u=s.top+o.clientTop,c=s.left+o.clientLeft,f=Vn(o)?pa(o):{x:1,y:1};return{width:o.clientWidth*f.x,height:o.clientHeight*f.y,x:c*f.x,y:u*f.y}}(t,n);else{const o=uk(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return Nc(r)}function fk(e,t){const n=Ra(e);return!(n===t||!an(n)||Wd(n))&&(Un(n).position==="fixed"||fk(n,t))}function P0(e,t){return Vn(e)&&Un(e).position!=="fixed"?t?t(e):e.offsetParent:null}function C0(e,t){const n=wn(e);if(!Vn(e))return n;let r=P0(e,t);for(;r&&kz(r)&&Un(r).position==="static";)r=P0(r,t);return r&&(To(r)==="html"||To(r)==="body"&&Un(r).position==="static"&&!um(r))?n:r||function(o){let a=Ra(o);for(;Vn(a)&&!Wd(a);){if(um(a))return a;a=Ra(a)}return null}(e)||n}function Pz(e,t,n){const r=Vn(t),o=bo(t),a=n==="fixed",s=bi(e,!0,a,t);let u={scrollLeft:0,scrollTop:0};const c={x:0,y:0};if(r||!r&&!a)if((To(t)!=="body"||il(o))&&(u=Hd(t)),Vn(t)){const f=bi(t,!0,a,t);c.x=f.x+t.clientLeft,c.y=f.y+t.clientTop}else o&&(c.x=ck(o));return{x:s.left+u.scrollLeft-c.x,y:s.top+u.scrollTop-c.y,width:s.width,height:s.height}}const Cz={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const a=n==="clippingAncestors"?function(f,p){const h=p.get(f);if(h)return h;let _=xo(f).filter(P=>an(P)&&To(P)!=="body"),v=null;const y=Un(f).position==="fixed";let b=y?Ra(f):f;for(;an(b)&&!Wd(b);){const P=Un(b),g=um(b);g||P.position!=="fixed"||(v=null),(y?!g&&!v:!g&&P.position==="static"&&v&&["absolute","fixed"].includes(v.position)||il(b)&&!g&&fk(f,b))?_=_.filter(x=>x!==b):v=P,b=Ra(b)}return p.set(f,_),_}(t,this._c):[].concat(n),s=[...a,r],u=s[0],c=s.reduce((f,p)=>{const h=k0(t,p,o);return f.top=Is(h.top,f.top),f.right=w0(h.right,f.right),f.bottom=w0(h.bottom,f.bottom),f.left=Is(h.left,f.left),f},k0(t,u,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=Vn(n),a=bo(n);if(n===a)return t;let s={scrollLeft:0,scrollTop:0},u={x:1,y:1};const c={x:0,y:0};if((o||!o&&r!=="fixed")&&((To(n)!=="body"||il(a))&&(s=Hd(n)),Vn(n))){const f=bi(n);u=pa(n),c.x=f.x+n.clientLeft,c.y=f.y+n.clientTop}return{width:t.width*u.x,height:t.height*u.y,x:t.x*u.x-s.scrollLeft*u.x+c.x,y:t.y*u.y-s.scrollTop*u.y+c.y}},isElement:an,getDimensions:function(e){return ak(e)},getOffsetParent:C0,getDocumentElement:bo,getScale:pa,async getElementRects(e){let{reference:t,floating:n,strategy:r}=e;const o=this.getOffsetParent||C0,a=this.getDimensions;return{reference:Pz(t,await o(n),r),floating:{x:0,y:0,...await a(n)}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>Un(e).direction==="rtl"};function Ez(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:a=!0,elementResize:s=!0,animationFrame:u=!1}=r,c=o||a?[...an(e)?xo(e):e.contextElement?xo(e.contextElement):[],...xo(t)]:[];c.forEach(_=>{const v=!an(_)&&_.toString().includes("V");!o||u&&!v||_.addEventListener("scroll",n,{passive:!0}),a&&_.addEventListener("resize",n)});let f,p=null;s&&(p=new ResizeObserver(()=>{n()}),an(e)&&!u&&p.observe(e),an(e)||!e.contextElement||u||p.observe(e.contextElement),p.observe(t));let h=u?bi(e):null;return u&&function _(){const v=bi(e);!h||v.x===h.x&&v.y===h.y&&v.width===h.width&&v.height===h.height||n(),h=v,f=requestAnimationFrame(_)}(),n(),()=>{var _;c.forEach(v=>{o&&v.removeEventListener("scroll",n),a&&v.removeEventListener("resize",n)}),(_=p)==null||_.disconnect(),p=null,u&&cancelAnimationFrame(f)}}const Oz=(e,t,n)=>{const r=new Map,o={platform:Cz,...n},a={...o.platform,_c:r};return mz(e,t,{...o,platform:a})};var Bu=typeof document<"u"?k.useLayoutEffect:k.useEffect;function Mc(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Mc(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const a=o[r];if(!(a==="_owner"&&e.$$typeof)&&!Mc(e[a],t[a]))return!1}return!0}return e!==e&&t!==t}function hk(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function E0(e,t){const n=hk(e);return Math.round(t*n)/n}function O0(e){const t=k.useRef(e);return Bu(()=>{t.current=e}),t}function Rz(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:a,floating:s}={},transform:u=!0,whileElementsMounted:c,open:f}=e,[p,h]=k.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[_,v]=k.useState(r);Mc(_,r)||v(r);const[y,b]=k.useState(null),[P,g]=k.useState(null),x=k.useCallback(Z=>{Z!=A.current&&(A.current=Z,b(Z))},[b]),S=k.useCallback(Z=>{Z!==N.current&&(N.current=Z,g(Z))},[g]),E=a||y,T=s||P,A=k.useRef(null),N=k.useRef(null),D=k.useRef(p),W=O0(c),B=O0(o),H=k.useCallback(()=>{if(!A.current||!N.current)return;const Z={placement:t,strategy:n,middleware:_};B.current&&(Z.platform=B.current),Oz(A.current,N.current,Z).then(se=>{const O={...se,isPositioned:!0};G.current&&!Mc(D.current,O)&&(D.current=O,ko.flushSync(()=>{h(O)}))})},[_,t,n,B]);Bu(()=>{f===!1&&D.current.isPositioned&&(D.current.isPositioned=!1,h(Z=>({...Z,isPositioned:!1})))},[f]);const G=k.useRef(!1);Bu(()=>(G.current=!0,()=>{G.current=!1}),[]),Bu(()=>{if(E&&(A.current=E),T&&(N.current=T),E&&T){if(W.current)return W.current(E,T,H);H()}},[E,T,H,W]);const q=k.useMemo(()=>({reference:A,floating:N,setReference:x,setFloating:S}),[x,S]),$=k.useMemo(()=>({reference:E,floating:T}),[E,T]),re=k.useMemo(()=>{const Z={position:n,left:0,top:0};if(!$.floating)return Z;const se=E0($.floating,p.x),O=E0($.floating,p.y);return u?{...Z,transform:"translate("+se+"px, "+O+"px)",...hk($.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:se,top:O}},[n,u,$.floating,p.x,p.y]);return k.useMemo(()=>({...p,update:H,refs:q,elements:$,floatingStyles:re}),[p,H,q,$,re])}var Tz=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Ui=new WeakMap,hu=new WeakMap,pu={},yh=0,pk=function(e){return e&&(e.host||pk(e.parentNode))},Lz=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=pk(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Az=function(e,t,n,r){var o=Lz(t,Array.isArray(e)?e:[e]);pu[n]||(pu[n]=new WeakMap);var a=pu[n],s=[],u=new Set,c=new Set(o),f=function(h){!h||u.has(h)||(u.add(h),f(h.parentNode))};o.forEach(f);var p=function(h){!h||c.has(h)||Array.prototype.forEach.call(h.children,function(_){if(u.has(_))p(_);else{var v=_.getAttribute(r),y=v!==null&&v!=="false",b=(Ui.get(_)||0)+1,P=(a.get(_)||0)+1;Ui.set(_,b),a.set(_,P),s.push(_),b===1&&y&&hu.set(_,!0),P===1&&_.setAttribute(n,"true"),y||_.setAttribute(r,"true")}})};return p(t),u.clear(),yh++,function(){s.forEach(function(h){var _=Ui.get(h)-1,v=a.get(h)-1;Ui.set(h,_),a.set(h,v),_||(hu.has(h)||h.removeAttribute(r),hu.delete(h)),v||h.removeAttribute(n)}),yh--,yh||(Ui=new WeakMap,Ui=new WeakMap,hu=new WeakMap,pu={})}},Iz=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||Tz(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),Az(r,o,n,"aria-hidden")):function(){return null}};/*!
* tabbable 6.1.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var zz=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],cm=zz.join(","),mk=typeof Element>"u",al=mk?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Dc=!mk&&Element.prototype.getRootNode?function(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}:function(e){return e?.ownerDocument},jc=function e(t,n){var r;n===void 0&&(n=!0);var o=t==null||(r=t.getAttribute)===null||r===void 0?void 0:r.call(t,"inert"),a=o===""||o==="true",s=a||n&&t&&e(t.parentNode);return s},Nz=function(t){var n,r=t==null||(n=t.getAttribute)===null||n===void 0?void 0:n.call(t,"contenteditable");return r===""||r==="true"},Bz=function(t,n,r){if(jc(t))return[];var o=Array.prototype.slice.apply(t.querySelectorAll(cm));return n&&al.call(t,cm)&&o.unshift(t),o=o.filter(r),o},Mz=function e(t,n,r){for(var o=[],a=Array.from(t);a.length;){var s=a.shift();if(!jc(s,!1))if(s.tagName==="SLOT"){var u=s.assignedElements(),c=u.length?u:s.children,f=e(c,!0,r);r.flatten?o.push.apply(o,f):o.push({scopeParent:s,candidates:f})}else{var p=al.call(s,cm);p&&r.filter(s)&&(n||!t.includes(s))&&o.push(s);var h=s.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(s),_=!jc(h,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(s));if(h&&_){var v=e(h===!0?s.children:h.children,!0,r);r.flatten?o.push.apply(o,v):o.push({scopeParent:s,candidates:v})}else a.unshift.apply(a,s.children)}}return o},_k=function(t,n){return t.tabIndex<0&&(n||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||Nz(t))&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex},Dz=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},gk=function(t){return t.tagName==="INPUT"},jz=function(t){return gk(t)&&t.type==="hidden"},Fz=function(t){var n=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(r){return r.tagName==="SUMMARY"});return n},$z=function(t,n){for(var r=0;r<t.length;r++)if(t[r].checked&&t[r].form===n)return t[r]},Uz=function(t){if(!t.name)return!0;var n=t.form||Dc(t),r=function(u){return n.querySelectorAll('input[type="radio"][name="'+u+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=r(window.CSS.escape(t.name));else try{o=r(t.name)}catch(s){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",s.message),!1}var a=$z(o,t.form);return!a||a===t},Wz=function(t){return gk(t)&&t.type==="radio"},Hz=function(t){return Wz(t)&&!Uz(t)},Vz=function(t){var n,r=t&&Dc(t),o=(n=r)===null||n===void 0?void 0:n.host,a=!1;if(r&&r!==t){var s,u,c;for(a=!!((s=o)!==null&&s!==void 0&&(u=s.ownerDocument)!==null&&u!==void 0&&u.contains(o)||t!=null&&(c=t.ownerDocument)!==null&&c!==void 0&&c.contains(t));!a&&o;){var f,p,h;r=Dc(o),o=(f=r)===null||f===void 0?void 0:f.host,a=!!((p=o)!==null&&p!==void 0&&(h=p.ownerDocument)!==null&&h!==void 0&&h.contains(o))}}return a},R0=function(t){var n=t.getBoundingClientRect(),r=n.width,o=n.height;return r===0&&o===0},Zz=function(t,n){var r=n.displayCheck,o=n.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var a=al.call(t,"details>summary:first-of-type"),s=a?t.parentElement:t;if(al.call(s,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="legacy-full"){if(typeof o=="function"){for(var u=t;t;){var c=t.parentElement,f=Dc(t);if(c&&!c.shadowRoot&&o(c)===!0)return R0(t);t.assignedSlot?t=t.assignedSlot:!c&&f!==t.ownerDocument?t=f.host:t=c}t=u}if(Vz(t))return!t.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return R0(t);return!1},qz=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r=0;r<n.children.length;r++){var o=n.children.item(r);if(o.tagName==="LEGEND")return al.call(n,"fieldset[disabled] *")?!0:!o.contains(t)}return!0}n=n.parentElement}return!1},Kz=function(t,n){return!(n.disabled||jc(n)||jz(n)||Zz(n,t)||Fz(n)||qz(n))},T0=function(t,n){return!(Hz(n)||_k(n)<0||!Kz(t,n))},Qz=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},Gz=function e(t){var n=[],r=[];return t.forEach(function(o,a){var s=!!o.scopeParent,u=s?o.scopeParent:o,c=_k(u,s),f=s?e(o.candidates):u;c===0?s?n.push.apply(n,f):n.push(u):r.push({documentOrder:a,tabIndex:c,item:o,isScope:s,content:f})}),r.sort(Dz).reduce(function(o,a){return a.isScope?o.push.apply(o,a.content):o.push(a.content),o},[]).concat(n)},dm=function(t,n){n=n||{};var r;return n.getShadowRoot?r=Mz([t],n.includeContainer,{filter:T0.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:Qz}):r=Bz(t,n.includeContainer,T0.bind(null,n)),Gz(r)};function sl(){return sl=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sl.apply(this,arguments)}var Ar=typeof document<"u"?k.useLayoutEffect:k.useEffect;let bh=!1,Jz=0;const L0=()=>"floating-ui-"+Jz++;function Yz(){const[e,t]=k.useState(()=>bh?L0():void 0);return Ar(()=>{e==null&&t(L0())},[]),k.useEffect(()=>{bh||(bh=!0)},[]),e}const Xz=Kc["useId".toString()],vk=Xz||Yz;function eN(){const e=new Map;return{emit(t,n){var r;(r=e.get(t))==null||r.forEach(o=>o(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,((r=e.get(t))==null?void 0:r.filter(o=>o!==n))||[])}}}const tN=k.createContext(null),nN=k.createContext(null),rN=()=>{var e;return((e=k.useContext(tN))==null?void 0:e.id)||null},Z_=()=>k.useContext(nN);function Or(e){return e?.ownerDocument||document}function yk(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function oN(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:n,version:r}=t;return n+"/"+r}).join(" "):navigator.userAgent}function Vd(e){return Or(e).defaultView||window}function li(e){return e?e instanceof Vd(e).Element:!1}function ll(e){return e?e instanceof Vd(e).HTMLElement:!1}function iN(e){if(typeof ShadowRoot>"u")return!1;const t=Vd(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function aN(e){if(e.mozInputSource===0&&e.isTrusted)return!0;const t=/Android/i;return(t.test(yk())||t.test(oN()))&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function sN(e){return e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType!=="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0}function lN(){return/apple/i.test(navigator.vendor)}function A0(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function In(e,t){if(!e||!t)return!1;const n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&iN(n)){let r=t;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function xh(e){const t=k.useRef(e);return Ar(()=>{t.current=e}),t}function Vi(e){let t=e.activeElement;for(;((n=t)==null||(r=n.shadowRoot)==null?void 0:r.activeElement)!=null;){var n,r;t=t.shadowRoot.activeElement}return t}let I0=0;function Ko(e,t){t===void 0&&(t={});const{preventScroll:n=!1,cancelPrevious:r=!0,sync:o=!1}=t;r&&cancelAnimationFrame(I0);const a=()=>e?.focus({preventScroll:n});o?a():I0=requestAnimationFrame(a)}function uN(e,t){var n;let r=[],o=(n=e.find(a=>a.id===t))==null?void 0:n.parentId;for(;o;){const a=e.find(s=>s.id===o);o=a?.parentId,a&&(r=r.concat(a))}return r}function zs(e,t){let n=e.filter(o=>{var a;return o.parentId===t&&((a=o.context)==null?void 0:a.open)}),r=n;for(;r.length;)r=e.filter(o=>{var a;return(a=r)==null?void 0:a.some(s=>{var u;return o.parentId===s.id&&((u=o.context)==null?void 0:u.open)})}),n=n.concat(r);return n}function bk(e){return"composedPath"in e?e.composedPath()[0]:e.target}const cN="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function xk(e){return ll(e)&&e.matches(cN)}function wh(e){e.preventDefault(),e.stopPropagation()}const fm=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function wk(e,t){const n=dm(e,fm());t==="prev"&&n.reverse();const r=n.indexOf(Vi(Or(e)));return n.slice(r+1)[0]}function dN(){return wk(document.body,"next")}function fN(){return wk(document.body,"prev")}function z0(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!In(n,r)}const Sk={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};let hN;function N0(e){e.key==="Tab"&&(e.target,clearTimeout(hN))}const B0=k.forwardRef(function(t,n){const[r,o]=k.useState();return Ar(()=>(lN()&&o("button"),document.addEventListener("keydown",N0),()=>{document.removeEventListener("keydown",N0)}),[]),k.createElement("span",sl({},t,{ref:n,tabIndex:0,role:r,"aria-hidden":r?void 0:!0,"data-floating-ui-focus-guard":"",style:Sk}))}),pN=k.createContext(null),mN=()=>k.useContext(pN),_N=k.forwardRef(function(t,n){return k.createElement("button",sl({},t,{type:"button",ref:n,tabIndex:-1,style:Sk}))});function M0(e){const{context:t,children:n,order:r=["content"],guards:o=!0,initialFocus:a=0,returnFocus:s=!0,modal:u=!0,visuallyHiddenDismiss:c=!1,closeOnFocusOut:f=!0}=e,{open:p,refs:h,nodeId:_,onOpenChange:v,events:y,dataRef:b,elements:{domReference:P,floating:g}}=t,x=xh(r),S=xh(a),E=xh(s),T=Z_(),A=mN(),N=typeof a=="number"&&a<0,D=k.useRef(null),W=k.useRef(null),B=k.useRef(!1),H=k.useRef(null),G=k.useRef(!1),q=A!=null,$=P&&P.getAttribute("role")==="combobox"&&xk(P),re=k.useCallback(function(Y){return Y===void 0&&(Y=g),Y?dm(Y,fm()):[]},[g]),Z=k.useCallback(Y=>{const U=re(Y);return x.current.map(R=>P&&R==="reference"?P:g&&R==="floating"?g:U).filter(Boolean).flat()},[P,g,x,re]);k.useEffect(()=>{if(!u)return;function Y(R){if(R.key==="Tab"){In(g,Vi(Or(g)))&&re().length===0&&!$&&wh(R);const z=Z(),M=bk(R);x.current[0]==="reference"&&M===P&&(wh(R),R.shiftKey?Ko(z[z.length-1]):Ko(z[1])),x.current[1]==="floating"&&M===g&&R.shiftKey&&(wh(R),Ko(z[0]))}}const U=Or(g);return U.addEventListener("keydown",Y),()=>{U.removeEventListener("keydown",Y)}},[P,g,u,x,h,$,re,Z]),k.useEffect(()=>{if(!f)return;function Y(){G.current=!0,setTimeout(()=>{G.current=!1})}function U(R){const z=R.relatedTarget;queueMicrotask(()=>{const M=!(In(P,z)||In(g,z)||In(z,g)||In(A?.portalNode,z)||z!=null&&z.hasAttribute("data-floating-ui-focus-guard")||T&&(zs(T.nodesRef.current,_).find(V=>{var te,ie;return In((te=V.context)==null?void 0:te.elements.floating,z)||In((ie=V.context)==null?void 0:ie.elements.domReference,z)})||uN(T.nodesRef.current,_).find(V=>{var te,ie;return((te=V.context)==null?void 0:te.elements.floating)===z||((ie=V.context)==null?void 0:ie.elements.domReference)===z})));z&&M&&!G.current&&z!==H.current&&(B.current=!0,v(!1))})}if(g&&ll(P))return P.addEventListener("focusout",U),P.addEventListener("pointerdown",Y),!u&&g.addEventListener("focusout",U),()=>{P.removeEventListener("focusout",U),P.removeEventListener("pointerdown",Y),!u&&g.removeEventListener("focusout",U)}},[P,g,u,_,T,A,v,f]),k.useEffect(()=>{var Y;const U=Array.from((A==null||(Y=A.portalNode)==null?void 0:Y.querySelectorAll("[data-floating-ui-portal]"))||[]);function R(){return[D.current,W.current].filter(Boolean)}if(g&&u){const z=[g,...U,...R()],M=Iz(x.current.includes("reference")||$?z.concat(P||[]):z);return()=>{M()}}},[P,g,u,x,A,$]),k.useEffect(()=>{if(u&&!o&&g){const Y=[],U=fm(),R=dm(Or(g).body,U),z=Z(),M=R.filter(V=>!z.includes(V));return M.forEach((V,te)=>{Y[te]=V.getAttribute("tabindex"),V.setAttribute("tabindex","-1")}),()=>{M.forEach((V,te)=>{const ie=Y[te];ie==null?V.removeAttribute("tabindex"):V.setAttribute("tabindex",ie)})}}},[g,u,o,Z]),Ar(()=>{if(!g)return;const Y=Or(g),U=Vi(Y);queueMicrotask(()=>{const R=Z(g),z=S.current,M=(typeof z=="number"?R[z]:z.current)||g,V=In(g,U);!N&&!V&&p&&Ko(M,{preventScroll:M===g})})},[p,g,N,Z,S]),Ar(()=>{if(!g)return;let Y=!1;const U=Or(g),R=Vi(U),z=b.current;H.current=R;function M(V){if(V.type==="escapeKey"&&h.domReference.current&&(H.current=h.domReference.current),["referencePress","escapeKey"].includes(V.type))return;const te=V.data.returnFocus;typeof te=="object"?(B.current=!1,Y=te.preventScroll):B.current=!te}return y.on("dismiss",M),()=>{y.off("dismiss",M);const V=Vi(U);(In(g,V)||T&&zs(T.nodesRef.current,_).some(ie=>{var fe;return In((fe=ie.context)==null?void 0:fe.elements.floating,V)})||z.openEvent&&["click","mousedown"].includes(z.openEvent.type))&&h.domReference.current&&(H.current=h.domReference.current),E.current&&ll(H.current)&&!B.current&&Ko(H.current,{cancelPrevious:!1,preventScroll:Y})}},[g,E,b,h,y,T,_]),Ar(()=>{if(A)return A.setFocusManagerState({...t,modal:u,closeOnFocusOut:f,open:p}),()=>{A.setFocusManagerState(null)}},[A,u,p,f,t]),Ar(()=>{if(g&&typeof MutationObserver=="function"){const Y=()=>{const R=g.getAttribute("tabindex");x.current.includes("floating")||Vi(Or(g))!==h.domReference.current&&re().length===0?R!=="0"&&g.setAttribute("tabindex","0"):R!=="-1"&&g.setAttribute("tabindex","-1")};Y();const U=new MutationObserver(Y);return U.observe(g,{childList:!0,subtree:!0,attributes:!0}),()=>{U.disconnect()}}},[g,h,x,re]);function se(Y){return c&&u?k.createElement(_N,{ref:Y==="start"?D:W,onClick:()=>v(!1)},typeof c=="string"?c:"Dismiss"):null}const O=o&&!$&&(q||u);return k.createElement(k.Fragment,null,O&&k.createElement(B0,{"data-type":"inside",ref:A?.beforeInsideRef,onFocus:Y=>{if(u){const R=Z();Ko(r[0]==="reference"?R[0]:R[R.length-1])}else if(A!=null&&A.preserveTabOrder&&A.portalNode)if(B.current=!1,z0(Y,A.portalNode)){const R=dN()||P;R?.focus()}else{var U;(U=A.beforeOutsideRef.current)==null||U.focus()}}}),!$&&se("start"),n,se("end"),O&&k.createElement(B0,{"data-type":"inside",ref:A?.afterInsideRef,onFocus:Y=>{if(u)Ko(Z()[0]);else if(A!=null&&A.preserveTabOrder&&A.portalNode)if(f&&(B.current=!0),z0(Y,A.portalNode)){const R=fN()||P;R?.focus()}else{var U;(U=A.afterOutsideRef.current)==null||U.focus()}}}))}const mu="data-floating-ui-scroll-lock",gN=k.forwardRef(function(t,n){let{lockScroll:r=!1,...o}=t;return Ar(()=>{var a,s;if(!r||document.body.hasAttribute(mu))return;document.body.setAttribute(mu,"");const f=Math.round(document.documentElement.getBoundingClientRect().left)+document.documentElement.scrollLeft?"paddingLeft":"paddingRight",p=window.innerWidth-document.documentElement.clientWidth;if(!/iP(hone|ad|od)|iOS/.test(yk()))return Object.assign(document.body.style,{overflow:"hidden",[f]:p+"px"}),()=>{document.body.removeAttribute(mu),Object.assign(document.body.style,{overflow:"",[f]:""})};const h=((a=window.visualViewport)==null?void 0:a.offsetLeft)||0,_=((s=window.visualViewport)==null?void 0:s.offsetTop)||0,v=window.pageXOffset,y=window.pageYOffset;return Object.assign(document.body.style,{position:"fixed",overflow:"hidden",top:-(y-Math.floor(_))+"px",left:-(v-Math.floor(h))+"px",right:"0",[f]:p+"px"}),()=>{Object.assign(document.body.style,{position:"",overflow:"",top:"",left:"",right:"",[f]:""}),document.body.removeAttribute(mu),window.scrollTo(v,y)}},[r]),k.createElement("div",sl({ref:n},o,{style:{position:"fixed",overflow:"auto",top:0,right:0,bottom:0,left:0,...o.style}}))});function D0(e){return ll(e.target)&&e.target.tagName==="BUTTON"}function j0(e){return xk(e)}function vN(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,dataRef:o,elements:{domReference:a}}=e,{enabled:s=!0,event:u="click",toggle:c=!0,ignoreMouse:f=!1,keyboardHandlers:p=!0}=t,h=k.useRef(),_=k.useRef(!1);return k.useMemo(()=>s?{reference:{onPointerDown(v){h.current=v.pointerType},onMouseDown(v){v.button===0&&(A0(h.current,!0)&&f||u!=="click"&&(n?c&&(!o.current.openEvent||o.current.openEvent.type==="mousedown")&&r(!1):(v.preventDefault(),r(!0)),o.current.openEvent=v.nativeEvent))},onClick(v){if(u==="mousedown"&&h.current){h.current=void 0;return}A0(h.current,!0)&&f||(n?c&&(!o.current.openEvent||o.current.openEvent.type==="click")&&r(!1):r(!0),o.current.openEvent=v.nativeEvent)},onKeyDown(v){h.current=void 0,!(v.defaultPrevented||!p||D0(v))&&(v.key===" "&&!j0(a)&&(v.preventDefault(),_.current=!0),v.key==="Enter"&&(n?c&&r(!1):r(!0)))},onKeyUp(v){v.defaultPrevented||!p||D0(v)||j0(a)||v.key===" "&&_.current&&(_.current=!1,n?c&&r(!1):r(!0))}}}:{},[s,o,u,f,p,a,c,n,r])}const yN=Kc["useInsertionEffect".toString()],bN=yN||(e=>e());function Mu(e){const t=k.useRef(()=>{});return bN(()=>{t.current=e}),k.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.current==null?void 0:t.current(...r)},[])}function Sh(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}const xN={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},wN={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},SN=e=>{var t,n;return{escapeKeyBubbles:typeof e=="boolean"?e:(t=e?.escapeKey)!=null?t:!1,outsidePressBubbles:typeof e=="boolean"?e:(n=e?.outsidePress)!=null?n:!0}};function kN(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,events:o,nodeId:a,elements:{reference:s,domReference:u,floating:c},dataRef:f}=e,{enabled:p=!0,escapeKey:h=!0,outsidePress:_=!0,outsidePressEvent:v="pointerdown",referencePress:y=!1,referencePressEvent:b="pointerdown",ancestorScroll:P=!1,bubbles:g}=t,x=Z_(),S=rN()!=null,E=Mu(typeof _=="function"?_:()=>!1),T=typeof _=="function"?E:_,A=k.useRef(!1),{escapeKeyBubbles:N,outsidePressBubbles:D}=SN(g),W=Mu(H=>{if(!n||!p||!h||H.key!=="Escape")return;const G=x?zs(x.nodesRef.current,a):[];if(!N&&(H.stopPropagation(),G.length>0)){let q=!0;if(G.forEach($=>{var re;if((re=$.context)!=null&&re.open&&!$.context.dataRef.current.__escapeKeyBubbles){q=!1;return}}),!q)return}o.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),r(!1)}),B=Mu(H=>{const G=A.current;if(A.current=!1,G||typeof T=="function"&&!T(H))return;const q=bk(H);if(ll(q)&&c){const Z=q.clientWidth>0&&q.scrollWidth>q.clientWidth,se=q.clientHeight>0&&q.scrollHeight>q.clientHeight;let O=se&&H.offsetX>q.clientWidth;if(se&&Vd(c).getComputedStyle(q).direction==="rtl"&&(O=H.offsetX<=q.offsetWidth-q.clientWidth),O||Z&&H.offsetY>q.clientHeight)return}const $=x&&zs(x.nodesRef.current,a).some(Z=>{var se;return Sh(H,(se=Z.context)==null?void 0:se.elements.floating)});if(Sh(H,c)||Sh(H,u)||$)return;const re=x?zs(x.nodesRef.current,a):[];if(re.length>0){let Z=!0;if(re.forEach(se=>{var O;if((O=se.context)!=null&&O.open&&!se.context.dataRef.current.__outsidePressBubbles){Z=!1;return}}),!Z)return}o.emit("dismiss",{type:"outsidePress",data:{returnFocus:S?{preventScroll:!0}:aN(H)||sN(H)}}),r(!1)});return k.useEffect(()=>{if(!n||!p)return;f.current.__escapeKeyBubbles=N,f.current.__outsidePressBubbles=D;function H(){r(!1)}const G=Or(c);h&&G.addEventListener("keydown",W),T&&G.addEventListener(v,B);let q=[];return P&&(li(u)&&(q=xo(u)),li(c)&&(q=q.concat(xo(c))),!li(s)&&s&&s.contextElement&&(q=q.concat(xo(s.contextElement)))),q=q.filter($=>{var re;return $!==((re=G.defaultView)==null?void 0:re.visualViewport)}),q.forEach($=>{$.addEventListener("scroll",H,{passive:!0})}),()=>{h&&G.removeEventListener("keydown",W),T&&G.removeEventListener(v,B),q.forEach($=>{$.removeEventListener("scroll",H)})}},[f,c,u,s,h,T,v,n,r,P,p,N,D,W,B]),k.useEffect(()=>{A.current=!1},[T,v]),k.useMemo(()=>p?{reference:{onKeyDown:W,[xN[b]]:()=>{y&&(o.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),r(!1))}},floating:{onKeyDown:W,[wN[v]]:()=>{A.current=!0}}}:{},[p,o,y,v,b,r,W])}function PN(e,t){t===void 0&&(t={});const{open:n,floatingId:r}=e,{enabled:o=!0,role:a="dialog"}=t,s=vk();return k.useMemo(()=>{const u={id:r,role:a};return o?a==="tooltip"?{reference:{"aria-describedby":n?r:void 0},floating:u}:{reference:{"aria-expanded":n?"true":"false","aria-haspopup":a==="alertdialog"?"dialog":a,"aria-controls":n?r:void 0,...a==="listbox"&&{role:"combobox"},...a==="menu"&&{id:s}},floating:{...u,...a==="menu"&&{"aria-labelledby":s}}}:{}},[o,a,n,r,s])}function CN(e){var t;e===void 0&&(e={});const{open:n=!1,onOpenChange:r,nodeId:o}=e,[a,s]=k.useState(null),u=((t=e.elements)==null?void 0:t.reference)||a,c=Rz(e),f=Z_(),p=Mu(r),h=k.useRef(null),_=k.useRef({}),v=k.useState(()=>eN())[0],y=vk(),b=k.useCallback(E=>{const T=li(E)?{getBoundingClientRect:()=>E.getBoundingClientRect(),contextElement:E}:E;c.refs.setReference(T)},[c.refs]),P=k.useCallback(E=>{(li(E)||E===null)&&(h.current=E,s(E)),(li(c.refs.reference.current)||c.refs.reference.current===null||E!==null&&!li(E))&&c.refs.setReference(E)},[c.refs]),g=k.useMemo(()=>({...c.refs,setReference:P,setPositionReference:b,domReference:h}),[c.refs,P,b]),x=k.useMemo(()=>({...c.elements,domReference:u}),[c.elements,u]),S=k.useMemo(()=>({...c,refs:g,elements:x,dataRef:_,nodeId:o,floatingId:y,events:v,open:n,onOpenChange:p}),[c,o,y,v,n,p,g,x]);return Ar(()=>{const E=f?.nodesRef.current.find(T=>T.id===o);E&&(E.context=S)}),k.useMemo(()=>({...c,context:S,refs:g,elements:x}),[c,g,x,S])}function kh(e,t,n){const r=new Map;return{...n==="floating"&&{tabIndex:-1},...e,...t.map(o=>o?o[n]:null).concat(e).reduce((o,a)=>(a&&Object.entries(a).forEach(s=>{let[u,c]=s;if(u.indexOf("on")===0){if(r.has(u)||r.set(u,[]),typeof c=="function"){var f;(f=r.get(u))==null||f.push(c),o[u]=function(){for(var p,h=arguments.length,_=new Array(h),v=0;v<h;v++)_[v]=arguments[v];return(p=r.get(u))==null?void 0:p.map(y=>y(..._)).find(y=>y!==void 0)}}}else o[u]=c}),o),{})}}function EN(e){e===void 0&&(e=[]);const t=e,n=k.useCallback(a=>kh(a,e,"reference"),t),r=k.useCallback(a=>kh(a,e,"floating"),t),o=k.useCallback(a=>kh(a,e,"item"),e.map(a=>a?.item));return k.useMemo(()=>({getReferenceProps:n,getFloatingProps:r,getItemProps:o}),[n,r,o])}const ON="_floatingOverlay_15gug_1",RN="_popover_15gug_9",TN="_open_15gug_29",LN="_closed_15gug_37",AN="_modal_15gug_45",Qo={floatingOverlay:ON,popover:RN,open:TN,"popover-in":"_popover-in_15gug_1",closed:LN,"popover-out":"_popover-out_15gug_1",modal:AN,"modal-in":"_modal-in_15gug_1","modal-out":"_modal-out_15gug_1"},IN=({children:e,trigger:t,isOpen:n=!1,setIsOpen:r,isModal:o=!1,className:a,...s})=>{const u=!r,[c,f]=k.useState(n??!1),p=u?c:n,h=r??f,[_,v]=k.useState(p),y=CN({open:p,onOpenChange:h,placement:"bottom-start",whileElementsMounted:Ez,middleware:[xz(1),Sz()]}),b=y.context,P=vN(b,{enabled:u}),g=kN(b),x=PN(b),{getReferenceProps:S,getFloatingProps:E}=EN([P,g,x]),T=()=>{const D=k.isValidElement(t)?t:null;if(D){const W={ref:y.refs.setReference,...S()};return k.cloneElement(D,W)}return null},A=()=>Q.jsx(M0,{context:b,modal:!1,children:Q.jsx("div",{ref:y.refs.setFloating,className:Oa(Qo.popover,a,{[Qo.open]:p,[Qo.closed]:!p}),style:{position:b.strategy,top:b.y??0,left:b.x??0},...E(),...s,children:e})}),N=()=>Q.jsx(gN,{lockScroll:!0,className:Qo.floatingOverlay,children:Q.jsx(M0,{context:b,modal:!0,children:Q.jsx("div",{ref:y.refs.setFloating,className:Oa(Qo.modal,a,{[Qo.open]:p,[Qo.closed]:!p}),style:{position:"fixed",left:0},...E(),...s,children:e})})});return k.useEffect(()=>{p===_||(p?v(p):setTimeout(()=>{v(!1)},200))},[p]),Q.jsxs(Q.Fragment,{children:[T(),_&&(o?N():A())]})},zN="_icon_1bhnq_1",NN="_chevron_1bhnq_13",BN="_open_1bhnq_13",MN="_filterButton_1bhnq_21 _focusable_xgred_11",DN="_activeBadge_1bhnq_77",jN="_filterButtonContainer_1bhnq_111",Go={icon:zN,chevron:NN,open:BN,filterButton:MN,activeBadge:DN,filterButtonContainer:jN},kk=k.forwardRef(({onClick:e,iconLeft:t,id:n,className:r,children:o,isOpen:a,numActiveFilters:s=0,...u},c)=>{const f=()=>s!==0&&Q.jsx("div",{className:Go.activeBadge,role:"status",children:s});return Q.jsxs("div",{className:Oa(Go.filterButtonContainer,r),children:[f(),Q.jsxs("button",{...u,ref:c,id:n,className:Go.filterButton,onClick:e,children:[t&&Q.jsx(Pc,{svgIconComponent:t,className:Go.icon}),o,Q.jsx(Pc,{svgIconComponent:Q.jsx(VI,{}),className:Oa(Go.icon,Go.chevron,{[Go.open]:a}),"aria-label":a?"Close":"Open"})]})]})});kk.displayName="FilterButton";const FN=({options:e,label:t,applyButtonLabel:n,resetButtonLabel:r,icon:o,values:a,searchable:s,fullScreenModal:u=!1,closeButtonAriaLabel:c,onApply:f})=>{const[p,h]=k.useState(!1),[_,v]=k.useState(a??[]),[y,b]=k.useState(a??[]),[P,g]=k.useState(!1),x=k.useId(),{t:S}=yl("common"),E=lm(a);k.useEffect(()=>{a!==void 0&&!zc(a,E)&&v(a)},[a]),k.useEffect(()=>{g(!zc(_,y))},[y]);const T=()=>{f?.(y),v([...y]),g(!1)},A=()=>{b([])},N=()=>{p?(T(),h(!1)):h(!0)},D=()=>Q.jsxs("div",{className:qo.modalHeader,children:[Q.jsx("h3",{children:t}),Q.jsx(Lu,{variant:"quiet",color:"secondary",onClick:N,icon:Q.jsx(JI,{"aria-label":String(S("common.close"))}),"aria-label":c??String(S("common.close"))+" "+t})]});return Q.jsx(IN,{"aria-labelledby":x,trigger:Q.jsx(kk,{id:x,onClick:N,iconLeft:o,isOpen:p,numActiveFilters:_.length,children:t}),isOpen:p,setIsOpen:N,isModal:u,children:Q.jsxs("div",{className:qo.popoverContent,children:[u&&D(),Q.jsx("div",{className:Oa(qo.optionSection,{[qo.modal]:u}),children:Q.jsx(sz,{options:e,onValueChange:b,values:y,searchable:s,compact:!u})}),Q.jsxs("div",{className:Oa(qo.filterActions,{[qo.modal]:u}),children:[Q.jsx(Lu,{className:qo.resetButton,size:u?"medium":"small",variant:"quiet",fullWidth:!1,"aria-disabled":y.length===0,onClick:y.length===0?void 0:A,children:r}),Q.jsx(Lu,{size:u?"medium":"small",onClick:P?N:void 0,"aria-disabled":!P,fullWidth:u,children:n})]})]})})};function Pk(e,t){return function(){return e.apply(t,arguments)}}const{toString:$N}=Object.prototype,{getPrototypeOf:q_}=Object,Zd=(e=>t=>{const n=$N.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),mr=e=>(e=e.toLowerCase(),t=>Zd(t)===e),qd=e=>t=>typeof t===e,{isArray:Ma}=Array,ul=qd("undefined");function UN(e){return e!==null&&!ul(e)&&e.constructor!==null&&!ul(e.constructor)&&Sn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ck=mr("ArrayBuffer");function WN(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ck(e.buffer),t}const HN=qd("string"),Sn=qd("function"),Ek=qd("number"),Kd=e=>e!==null&&typeof e=="object",VN=e=>e===!0||e===!1,Du=e=>{if(Zd(e)!=="object")return!1;const t=q_(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ZN=mr("Date"),qN=mr("File"),KN=mr("Blob"),QN=mr("FileList"),GN=e=>Kd(e)&&Sn(e.pipe),JN=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Sn(e.append)&&((t=Zd(e))==="formdata"||t==="object"&&Sn(e.toString)&&e.toString()==="[object FormData]"))},YN=mr("URLSearchParams"),XN=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Sl(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Ma(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),s=a.length;let u;for(r=0;r<s;r++)u=a[r],t.call(null,e[u],u,e)}}function Ok(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Rk=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Tk=e=>!ul(e)&&e!==Rk;function hm(){const{caseless:e}=Tk(this)&&this||{},t={},n=(r,o)=>{const a=e&&Ok(t,o)||o;Du(t[a])&&Du(r)?t[a]=hm(t[a],r):Du(r)?t[a]=hm({},r):Ma(r)?t[a]=r.slice():t[a]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&Sl(arguments[r],n);return t}const eB=(e,t,n,{allOwnKeys:r}={})=>(Sl(t,(o,a)=>{n&&Sn(o)?e[a]=Pk(o,n):e[a]=o},{allOwnKeys:r}),e),tB=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),nB=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},rB=(e,t,n,r)=>{let o,a,s;const u={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),a=o.length;a-- >0;)s=o[a],(!r||r(s,e,t))&&!u[s]&&(t[s]=e[s],u[s]=!0);e=n!==!1&&q_(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},oB=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},iB=e=>{if(!e)return null;if(Ma(e))return e;let t=e.length;if(!Ek(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},aB=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&q_(Uint8Array)),sB=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const a=o.value;t.call(e,a[0],a[1])}},lB=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},uB=mr("HTMLFormElement"),cB=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),F0=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),dB=mr("RegExp"),Lk=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Sl(n,(o,a)=>{t(o,a,e)!==!1&&(r[a]=o)}),Object.defineProperties(e,r)},fB=e=>{Lk(e,(t,n)=>{if(Sn(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Sn(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},hB=(e,t)=>{const n={},r=o=>{o.forEach(a=>{n[a]=!0})};return Ma(e)?r(e):r(String(e).split(t)),n},pB=()=>{},mB=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Ph="abcdefghijklmnopqrstuvwxyz",$0="0123456789",Ak={DIGIT:$0,ALPHA:Ph,ALPHA_DIGIT:Ph+Ph.toUpperCase()+$0},_B=(e=16,t=Ak.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function gB(e){return!!(e&&Sn(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const vB=e=>{const t=new Array(10),n=(r,o)=>{if(Kd(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const a=Ma(r)?[]:{};return Sl(r,(s,u)=>{const c=n(s,o+1);!ul(c)&&(a[u]=c)}),t[o]=void 0,a}}return r};return n(e,0)},yB=mr("AsyncFunction"),bB=e=>e&&(Kd(e)||Sn(e))&&Sn(e.then)&&Sn(e.catch),ne={isArray:Ma,isArrayBuffer:Ck,isBuffer:UN,isFormData:JN,isArrayBufferView:WN,isString:HN,isNumber:Ek,isBoolean:VN,isObject:Kd,isPlainObject:Du,isUndefined:ul,isDate:ZN,isFile:qN,isBlob:KN,isRegExp:dB,isFunction:Sn,isStream:GN,isURLSearchParams:YN,isTypedArray:aB,isFileList:QN,forEach:Sl,merge:hm,extend:eB,trim:XN,stripBOM:tB,inherits:nB,toFlatObject:rB,kindOf:Zd,kindOfTest:mr,endsWith:oB,toArray:iB,forEachEntry:sB,matchAll:lB,isHTMLForm:uB,hasOwnProperty:F0,hasOwnProp:F0,reduceDescriptors:Lk,freezeMethods:fB,toObjectSet:hB,toCamelCase:cB,noop:pB,toFiniteNumber:mB,findKey:Ok,global:Rk,isContextDefined:Tk,ALPHABET:Ak,generateString:_B,isSpecCompliantForm:gB,toJSONObject:vB,isAsyncFn:yB,isThenable:bB};function je(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}ne.inherits(je,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ne.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ik=je.prototype,zk={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{zk[e]={value:e}});Object.defineProperties(je,zk);Object.defineProperty(Ik,"isAxiosError",{value:!0});je.from=(e,t,n,r,o,a)=>{const s=Object.create(Ik);return ne.toFlatObject(e,s,function(c){return c!==Error.prototype},u=>u!=="isAxiosError"),je.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,a&&Object.assign(s,a),s};const xB=null;function pm(e){return ne.isPlainObject(e)||ne.isArray(e)}function Nk(e){return ne.endsWith(e,"[]")?e.slice(0,-2):e}function U0(e,t,n){return e?e.concat(t).map(function(o,a){return o=Nk(o),!n&&a?"["+o+"]":o}).join(n?".":""):t}function wB(e){return ne.isArray(e)&&!e.some(pm)}const SB=ne.toFlatObject(ne,{},null,function(t){return/^is[A-Z]/.test(t)});function Qd(e,t,n){if(!ne.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=ne.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,P){return!ne.isUndefined(P[b])});const r=n.metaTokens,o=n.visitor||p,a=n.dots,s=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&ne.isSpecCompliantForm(t);if(!ne.isFunction(o))throw new TypeError("visitor must be a function");function f(y){if(y===null)return"";if(ne.isDate(y))return y.toISOString();if(!c&&ne.isBlob(y))throw new je("Blob is not supported. Use a Buffer instead.");return ne.isArrayBuffer(y)||ne.isTypedArray(y)?c&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function p(y,b,P){let g=y;if(y&&!P&&typeof y=="object"){if(ne.endsWith(b,"{}"))b=r?b:b.slice(0,-2),y=JSON.stringify(y);else if(ne.isArray(y)&&wB(y)||(ne.isFileList(y)||ne.endsWith(b,"[]"))&&(g=ne.toArray(y)))return b=Nk(b),g.forEach(function(S,E){!(ne.isUndefined(S)||S===null)&&t.append(s===!0?U0([b],E,a):s===null?b:b+"[]",f(S))}),!1}return pm(y)?!0:(t.append(U0(P,b,a),f(y)),!1)}const h=[],_=Object.assign(SB,{defaultVisitor:p,convertValue:f,isVisitable:pm});function v(y,b){if(!ne.isUndefined(y)){if(h.indexOf(y)!==-1)throw Error("Circular reference detected in "+b.join("."));h.push(y),ne.forEach(y,function(g,x){(!(ne.isUndefined(g)||g===null)&&o.call(t,g,ne.isString(x)?x.trim():x,b,_))===!0&&v(g,b?b.concat(x):[x])}),h.pop()}}if(!ne.isObject(e))throw new TypeError("data must be an object");return v(e),t}function W0(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function K_(e,t){this._pairs=[],e&&Qd(e,this,t)}const Bk=K_.prototype;Bk.append=function(t,n){this._pairs.push([t,n])};Bk.toString=function(t){const n=t?function(r){return t.call(this,r,W0)}:W0;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function kB(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Mk(e,t,n){if(!t)return e;const r=n&&n.encode||kB,o=n&&n.serialize;let a;if(o?a=o(t,n):a=ne.isURLSearchParams(t)?t.toString():new K_(t,n).toString(r),a){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class PB{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){ne.forEach(this.handlers,function(r){r!==null&&t(r)})}}const H0=PB,Dk={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},CB=typeof URLSearchParams<"u"?URLSearchParams:K_,EB=typeof FormData<"u"?FormData:null,OB=typeof Blob<"u"?Blob:null,RB=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),TB=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),ur={isBrowser:!0,classes:{URLSearchParams:CB,FormData:EB,Blob:OB},isStandardBrowserEnv:RB,isStandardBrowserWebWorkerEnv:TB,protocols:["http","https","file","blob","url","data"]};function LB(e,t){return Qd(e,new ur.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,a){return ur.isNode&&ne.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function AB(e){return ne.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function IB(e){const t={},n=Object.keys(e);let r;const o=n.length;let a;for(r=0;r<o;r++)a=n[r],t[a]=e[a];return t}function jk(e){function t(n,r,o,a){let s=n[a++];const u=Number.isFinite(+s),c=a>=n.length;return s=!s&&ne.isArray(o)?o.length:s,c?(ne.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!u):((!o[s]||!ne.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],a)&&ne.isArray(o[s])&&(o[s]=IB(o[s])),!u)}if(ne.isFormData(e)&&ne.isFunction(e.entries)){const n={};return ne.forEachEntry(e,(r,o)=>{t(AB(r),o,n,0)}),n}return null}const zB={"Content-Type":void 0};function NB(e,t,n){if(ne.isString(e))try{return(t||JSON.parse)(e),ne.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Gd={transitional:Dk,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,a=ne.isObject(t);if(a&&ne.isHTMLForm(t)&&(t=new FormData(t)),ne.isFormData(t))return o&&o?JSON.stringify(jk(t)):t;if(ne.isArrayBuffer(t)||ne.isBuffer(t)||ne.isStream(t)||ne.isFile(t)||ne.isBlob(t))return t;if(ne.isArrayBufferView(t))return t.buffer;if(ne.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return LB(t,this.formSerializer).toString();if((u=ne.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Qd(u?{"files[]":t}:t,c&&new c,this.formSerializer)}}return a||o?(n.setContentType("application/json",!1),NB(t)):t}],transformResponse:[function(t){const n=this.transitional||Gd.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&ne.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(u){if(s)throw u.name==="SyntaxError"?je.from(u,je.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ur.classes.FormData,Blob:ur.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};ne.forEach(["delete","get","head"],function(t){Gd.headers[t]={}});ne.forEach(["post","put","patch"],function(t){Gd.headers[t]=ne.merge(zB)});const Q_=Gd,BB=ne.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),MB=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&BB[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},V0=Symbol("internals");function hs(e){return e&&String(e).trim().toLowerCase()}function ju(e){return e===!1||e==null?e:ne.isArray(e)?e.map(ju):String(e)}function DB(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const jB=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ch(e,t,n,r,o){if(ne.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!ne.isString(t)){if(ne.isString(r))return t.indexOf(r)!==-1;if(ne.isRegExp(r))return r.test(t)}}function FB(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function $B(e,t){const n=ne.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,a,s){return this[r].call(this,t,o,a,s)},configurable:!0})})}class Jd{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function a(u,c,f){const p=hs(c);if(!p)throw new Error("header name must be a non-empty string");const h=ne.findKey(o,p);(!h||o[h]===void 0||f===!0||f===void 0&&o[h]!==!1)&&(o[h||c]=ju(u))}const s=(u,c)=>ne.forEach(u,(f,p)=>a(f,p,c));return ne.isPlainObject(t)||t instanceof this.constructor?s(t,n):ne.isString(t)&&(t=t.trim())&&!jB(t)?s(MB(t),n):t!=null&&a(n,t,r),this}get(t,n){if(t=hs(t),t){const r=ne.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return DB(o);if(ne.isFunction(n))return n.call(this,o,r);if(ne.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=hs(t),t){const r=ne.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ch(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function a(s){if(s=hs(s),s){const u=ne.findKey(r,s);u&&(!n||Ch(r,r[u],u,n))&&(delete r[u],o=!0)}}return ne.isArray(t)?t.forEach(a):a(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const a=n[r];(!t||Ch(this,this[a],a,t,!0))&&(delete this[a],o=!0)}return o}normalize(t){const n=this,r={};return ne.forEach(this,(o,a)=>{const s=ne.findKey(r,a);if(s){n[s]=ju(o),delete n[a];return}const u=t?FB(a):String(a).trim();u!==a&&delete n[a],n[u]=ju(o),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return ne.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&ne.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[V0]=this[V0]={accessors:{}}).accessors,o=this.prototype;function a(s){const u=hs(s);r[u]||($B(o,s),r[u]=!0)}return ne.isArray(t)?t.forEach(a):a(t),this}}Jd.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);ne.freezeMethods(Jd.prototype);ne.freezeMethods(Jd);const zr=Jd;function Eh(e,t){const n=this||Q_,r=t||n,o=zr.from(r.headers);let a=r.data;return ne.forEach(e,function(u){a=u.call(n,a,o.normalize(),t?t.status:void 0)}),o.normalize(),a}function Fk(e){return!!(e&&e.__CANCEL__)}function kl(e,t,n){je.call(this,e??"canceled",je.ERR_CANCELED,t,n),this.name="CanceledError"}ne.inherits(kl,je,{__CANCEL__:!0});function UB(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new je("Request failed with status code "+n.status,[je.ERR_BAD_REQUEST,je.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const WB=ur.isStandardBrowserEnv?function(){return{write:function(n,r,o,a,s,u){const c=[];c.push(n+"="+encodeURIComponent(r)),ne.isNumber(o)&&c.push("expires="+new Date(o).toGMTString()),ne.isString(a)&&c.push("path="+a),ne.isString(s)&&c.push("domain="+s),u===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function HB(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function VB(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function $k(e,t){return e&&!HB(t)?VB(e,t):t}const ZB=ur.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(a){let s=a;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(s){const u=ne.isString(s)?o(s):s;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function qB(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function KB(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,a=0,s;return t=t!==void 0?t:1e3,function(c){const f=Date.now(),p=r[a];s||(s=f),n[o]=c,r[o]=f;let h=a,_=0;for(;h!==o;)_+=n[h++],h=h%e;if(o=(o+1)%e,o===a&&(a=(a+1)%e),f-s<t)return;const v=p&&f-p;return v?Math.round(_*1e3/v):void 0}}function Z0(e,t){let n=0;const r=KB(50,250);return o=>{const a=o.loaded,s=o.lengthComputable?o.total:void 0,u=a-n,c=r(u),f=a<=s;n=a;const p={loaded:a,total:s,progress:s?a/s:void 0,bytes:u,rate:c||void 0,estimated:c&&s&&f?(s-a)/c:void 0,event:o};p[t?"download":"upload"]=!0,e(p)}}const QB=typeof XMLHttpRequest<"u",GB=QB&&function(e){return new Promise(function(n,r){let o=e.data;const a=zr.from(e.headers).normalize(),s=e.responseType;let u;function c(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}ne.isFormData(o)&&(ur.isStandardBrowserEnv||ur.isStandardBrowserWebWorkerEnv?a.setContentType(!1):a.setContentType("multipart/form-data;",!1));let f=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(v+":"+y))}const p=$k(e.baseURL,e.url);f.open(e.method.toUpperCase(),Mk(p,e.params,e.paramsSerializer),!0),f.timeout=e.timeout;function h(){if(!f)return;const v=zr.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),b={data:!s||s==="text"||s==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:v,config:e,request:f};UB(function(g){n(g),c()},function(g){r(g),c()},b),f=null}if("onloadend"in f?f.onloadend=h:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(h)},f.onabort=function(){f&&(r(new je("Request aborted",je.ECONNABORTED,e,f)),f=null)},f.onerror=function(){r(new je("Network Error",je.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let y=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const b=e.transitional||Dk;e.timeoutErrorMessage&&(y=e.timeoutErrorMessage),r(new je(y,b.clarifyTimeoutError?je.ETIMEDOUT:je.ECONNABORTED,e,f)),f=null},ur.isStandardBrowserEnv){const v=(e.withCredentials||ZB(p))&&e.xsrfCookieName&&WB.read(e.xsrfCookieName);v&&a.set(e.xsrfHeaderName,v)}o===void 0&&a.setContentType(null),"setRequestHeader"in f&&ne.forEach(a.toJSON(),function(y,b){f.setRequestHeader(b,y)}),ne.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),s&&s!=="json"&&(f.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&f.addEventListener("progress",Z0(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",Z0(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=v=>{f&&(r(!v||v.type?new kl(null,e,f):v),f.abort(),f=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const _=qB(p);if(_&&ur.protocols.indexOf(_)===-1){r(new je("Unsupported protocol "+_+":",je.ERR_BAD_REQUEST,e));return}f.send(o||null)})},Fu={http:xB,xhr:GB};ne.forEach(Fu,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const JB={getAdapter:e=>{e=ne.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=ne.isString(n)?Fu[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new je(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(ne.hasOwnProp(Fu,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!ne.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Fu};function Oh(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new kl(null,e)}function q0(e){return Oh(e),e.headers=zr.from(e.headers),e.data=Eh.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),JB.getAdapter(e.adapter||Q_.adapter)(e).then(function(r){return Oh(e),r.data=Eh.call(e,e.transformResponse,r),r.headers=zr.from(r.headers),r},function(r){return Fk(r)||(Oh(e),r&&r.response&&(r.response.data=Eh.call(e,e.transformResponse,r.response),r.response.headers=zr.from(r.response.headers))),Promise.reject(r)})}const K0=e=>e instanceof zr?e.toJSON():e;function Ta(e,t){t=t||{};const n={};function r(f,p,h){return ne.isPlainObject(f)&&ne.isPlainObject(p)?ne.merge.call({caseless:h},f,p):ne.isPlainObject(p)?ne.merge({},p):ne.isArray(p)?p.slice():p}function o(f,p,h){if(ne.isUndefined(p)){if(!ne.isUndefined(f))return r(void 0,f,h)}else return r(f,p,h)}function a(f,p){if(!ne.isUndefined(p))return r(void 0,p)}function s(f,p){if(ne.isUndefined(p)){if(!ne.isUndefined(f))return r(void 0,f)}else return r(void 0,p)}function u(f,p,h){if(h in t)return r(f,p);if(h in e)return r(void 0,f)}const c={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:u,headers:(f,p)=>o(K0(f),K0(p),!0)};return ne.forEach(Object.keys(Object.assign({},e,t)),function(p){const h=c[p]||o,_=h(e[p],t[p],p);ne.isUndefined(_)&&h!==u||(n[p]=_)}),n}const Uk="1.4.0",G_={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{G_[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Q0={};G_.transitional=function(t,n,r){function o(a,s){return"[Axios v"+Uk+"] Transitional option '"+a+"'"+s+(r?". "+r:"")}return(a,s,u)=>{if(t===!1)throw new je(o(s," has been removed"+(n?" in "+n:"")),je.ERR_DEPRECATED);return n&&!Q0[s]&&(Q0[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,s,u):!0}};function YB(e,t,n){if(typeof e!="object")throw new je("options must be an object",je.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const a=r[o],s=t[a];if(s){const u=e[a],c=u===void 0||s(u,a,e);if(c!==!0)throw new je("option "+a+" must be "+c,je.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new je("Unknown option "+a,je.ERR_BAD_OPTION)}}const mm={assertOptions:YB,validators:G_},Kr=mm.validators;class Fc{constructor(t){this.defaults=t,this.interceptors={request:new H0,response:new H0}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Ta(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:a}=n;r!==void 0&&mm.assertOptions(r,{silentJSONParsing:Kr.transitional(Kr.boolean),forcedJSONParsing:Kr.transitional(Kr.boolean),clarifyTimeoutError:Kr.transitional(Kr.boolean)},!1),o!=null&&(ne.isFunction(o)?n.paramsSerializer={serialize:o}:mm.assertOptions(o,{encode:Kr.function,serialize:Kr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s;s=a&&ne.merge(a.common,a[n.method]),s&&ne.forEach(["delete","get","head","post","put","patch","common"],y=>{delete a[y]}),n.headers=zr.concat(s,a);const u=[];let c=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(c=c&&b.synchronous,u.unshift(b.fulfilled,b.rejected))});const f=[];this.interceptors.response.forEach(function(b){f.push(b.fulfilled,b.rejected)});let p,h=0,_;if(!c){const y=[q0.bind(this),void 0];for(y.unshift.apply(y,u),y.push.apply(y,f),_=y.length,p=Promise.resolve(n);h<_;)p=p.then(y[h++],y[h++]);return p}_=u.length;let v=n;for(h=0;h<_;){const y=u[h++],b=u[h++];try{v=y(v)}catch(P){b.call(this,P);break}}try{p=q0.call(this,v)}catch(y){return Promise.reject(y)}for(h=0,_=f.length;h<_;)p=p.then(f[h++],f[h++]);return p}getUri(t){t=Ta(this.defaults,t);const n=$k(t.baseURL,t.url);return Mk(n,t.params,t.paramsSerializer)}}ne.forEach(["delete","get","head","options"],function(t){Fc.prototype[t]=function(n,r){return this.request(Ta(r||{},{method:t,url:n,data:(r||{}).data}))}});ne.forEach(["post","put","patch"],function(t){function n(r){return function(a,s,u){return this.request(Ta(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:s}))}}Fc.prototype[t]=n(),Fc.prototype[t+"Form"]=n(!0)});const $u=Fc;class J_{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(o=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](o);r._listeners=null}),this.promise.then=o=>{let a;const s=new Promise(u=>{r.subscribe(u),a=u}).then(o);return s.cancel=function(){r.unsubscribe(a)},s},t(function(a,s,u){r.reason||(r.reason=new kl(a,s,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new J_(function(o){t=o}),cancel:t}}}const XB=J_;function eM(e){return function(n){return e.apply(null,n)}}function tM(e){return ne.isObject(e)&&e.isAxiosError===!0}const _m={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(_m).forEach(([e,t])=>{_m[t]=e});const nM=_m;function Wk(e){const t=new $u(e),n=Pk($u.prototype.request,t);return ne.extend(n,$u.prototype,t,{allOwnKeys:!0}),ne.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Wk(Ta(e,o))},n}const Pt=Wk(Q_);Pt.Axios=$u;Pt.CanceledError=kl;Pt.CancelToken=XB;Pt.isCancel=Fk;Pt.VERSION=Uk;Pt.toFormData=Qd;Pt.AxiosError=je;Pt.Cancel=Pt.CanceledError;Pt.all=function(t){return Promise.all(t)};Pt.spread=eM;Pt.isAxiosError=tM;Pt.mergeConfig=Ta;Pt.AxiosHeaders=zr;Pt.formToJSON=e=>jk(ne.isHTMLForm(e)?new FormData(e):e);Pt.HttpStatusCode=nM;Pt.default=Pt;const Hk=Pt;function Dn(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Lo(e){return!!e&&!!e[ot]}function jr(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var o=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===dM}(e)||Array.isArray(e)||!!e[nx]||!!(!((t=e.constructor)===null||t===void 0)&&t[nx])||Y_(e)||X_(e))}function xi(e,t,n){n===void 0&&(n=!1),Da(e)===0?(n?Object.keys:_a)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,o){return t(o,r,e)})}function Da(e){var t=e[ot];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Y_(e)?2:X_(e)?3:0}function ma(e,t){return Da(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function rM(e,t){return Da(e)===2?e.get(t):e[t]}function Vk(e,t,n){var r=Da(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Zk(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Y_(e){return uM&&e instanceof Map}function X_(e){return cM&&e instanceof Set}function ei(e){return e.o||e.t}function eg(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Kk(e);delete t[ot];for(var n=_a(t),r=0;r<n.length;r++){var o=n[r],a=t[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function tg(e,t){return t===void 0&&(t=!1),ng(e)||Lo(e)||!jr(e)||(Da(e)>1&&(e.set=e.add=e.clear=e.delete=oM),Object.freeze(e),t&&xi(e,function(n,r){return tg(r,!0)},!0)),e}function oM(){Dn(2)}function ng(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function hr(e){var t=bm[e];return t||Dn(18,e),t}function iM(e,t){bm[e]||(bm[e]=t)}function gm(){return cl}function Rh(e,t){t&&(hr("Patches"),e.u=[],e.s=[],e.v=t)}function $c(e){vm(e),e.p.forEach(aM),e.p=null}function vm(e){e===cl&&(cl=e.l)}function G0(e){return cl={p:[],l:cl,h:e,m:!0,_:0}}function aM(e){var t=e[ot];t.i===0||t.i===1?t.j():t.g=!0}function Th(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||hr("ES5").S(t,e,r),r?(n[ot].P&&($c(t),Dn(4)),jr(e)&&(e=Uc(t,e),t.l||Wc(t,e)),t.u&&hr("Patches").M(n[ot].t,e,t.u,t.s)):e=Uc(t,n,[]),$c(t),t.u&&t.v(t.u,t.s),e!==qk?e:void 0}function Uc(e,t,n){if(ng(t))return t;var r=t[ot];if(!r)return xi(t,function(u,c){return J0(e,r,t,u,c,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Wc(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=r.i===4||r.i===5?r.o=eg(r.k):r.o,a=o,s=!1;r.i===3&&(a=new Set(o),o.clear(),s=!0),xi(a,function(u,c){return J0(e,r,o,u,c,n,s)}),Wc(e,o,!1),n&&e.u&&hr("Patches").N(r,n,e.u,e.s)}return r.o}function J0(e,t,n,r,o,a,s){if(Lo(o)){var u=Uc(e,o,a&&t&&t.i!==3&&!ma(t.R,r)?a.concat(r):void 0);if(Vk(n,r,u),!Lo(u))return;e.m=!1}else s&&n.add(o);if(jr(o)&&!ng(o)){if(!e.h.D&&e._<1)return;Uc(e,o),t&&t.A.l||Wc(e,o)}}function Wc(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&tg(t,n)}function Lh(e,t){var n=e[ot];return(n?ei(n):e)[t]}function Y0(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function to(e){e.P||(e.P=!0,e.l&&to(e.l))}function Ah(e){e.o||(e.o=eg(e.t))}function ym(e,t,n){var r=Y_(t)?hr("MapSet").F(t,n):X_(t)?hr("MapSet").T(t,n):e.O?function(o,a){var s=Array.isArray(o),u={i:s?1:0,A:a?a.A:gm(),P:!1,I:!1,R:{},l:a,t:o,k:null,o:null,j:null,C:!1},c=u,f=dl;s&&(c=[u],f=ys);var p=Proxy.revocable(c,f),h=p.revoke,_=p.proxy;return u.k=_,u.j=h,_}(t,n):hr("ES5").J(t,n);return(n?n.A:gm()).p.push(r),r}function sM(e){return Lo(e)||Dn(22,e),function t(n){if(!jr(n))return n;var r,o=n[ot],a=Da(n);if(o){if(!o.P&&(o.i<4||!hr("ES5").K(o)))return o.t;o.I=!0,r=X0(n,a),o.I=!1}else r=X0(n,a);return xi(r,function(s,u){o&&rM(o.t,s)===u||Vk(r,s,t(u))}),a===3?new Set(r):r}(e)}function X0(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return eg(e)}function lM(){function e(a,s){var u=o[a];return u?u.enumerable=s:o[a]=u={configurable:!0,enumerable:s,get:function(){var c=this[ot];return dl.get(c,a)},set:function(c){var f=this[ot];dl.set(f,a,c)}},u}function t(a){for(var s=a.length-1;s>=0;s--){var u=a[s][ot];if(!u.P)switch(u.i){case 5:r(u)&&to(u);break;case 4:n(u)&&to(u)}}}function n(a){for(var s=a.t,u=a.k,c=_a(u),f=c.length-1;f>=0;f--){var p=c[f];if(p!==ot){var h=s[p];if(h===void 0&&!ma(s,p))return!0;var _=u[p],v=_&&_[ot];if(v?v.t!==h:!Zk(_,h))return!0}}var y=!!s[ot];return c.length!==_a(s).length+(y?0:1)}function r(a){var s=a.k;if(s.length!==a.t.length)return!0;var u=Object.getOwnPropertyDescriptor(s,s.length-1);if(u&&!u.get)return!0;for(var c=0;c<s.length;c++)if(!s.hasOwnProperty(c))return!0;return!1}var o={};iM("ES5",{J:function(a,s){var u=Array.isArray(a),c=function(p,h){if(p){for(var _=Array(h.length),v=0;v<h.length;v++)Object.defineProperty(_,""+v,e(v,!0));return _}var y=Kk(h);delete y[ot];for(var b=_a(y),P=0;P<b.length;P++){var g=b[P];y[g]=e(g,p||!!y[g].enumerable)}return Object.create(Object.getPrototypeOf(h),y)}(u,a),f={i:u?5:4,A:s?s.A:gm(),P:!1,I:!1,R:{},l:s,t:a,k:c,o:null,g:!1,C:!1};return Object.defineProperty(c,ot,{value:f,writable:!0}),c},S:function(a,s,u){u?Lo(s)&&s[ot].A===a&&t(a.p):(a.u&&function c(f){if(f&&typeof f=="object"){var p=f[ot];if(p){var h=p.t,_=p.k,v=p.R,y=p.i;if(y===4)xi(_,function(S){S!==ot&&(h[S]!==void 0||ma(h,S)?v[S]||c(_[S]):(v[S]=!0,to(p)))}),xi(h,function(S){_[S]!==void 0||ma(_,S)||(v[S]=!1,to(p))});else if(y===5){if(r(p)&&(to(p),v.length=!0),_.length<h.length)for(var b=_.length;b<h.length;b++)v[b]=!1;else for(var P=h.length;P<_.length;P++)v[P]=!0;for(var g=Math.min(_.length,h.length),x=0;x<g;x++)_.hasOwnProperty(x)||(v[x]=!0),v[x]===void 0&&c(_[x])}}}}(a.p[0]),t(a.p))},K:function(a){return a.i===4?n(a):r(a)}})}var ex,cl,rg=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",uM=typeof Map<"u",cM=typeof Set<"u",tx=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",qk=rg?Symbol.for("immer-nothing"):((ex={})["immer-nothing"]=!0,ex),nx=rg?Symbol.for("immer-draftable"):"__$immer_draftable",ot=rg?Symbol.for("immer-state"):"__$immer_state",dM=""+Object.prototype.constructor,_a=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Kk=Object.getOwnPropertyDescriptors||function(e){var t={};return _a(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},bm={},dl={get:function(e,t){if(t===ot)return e;var n=ei(e);if(!ma(n,t))return function(o,a,s){var u,c=Y0(a,s);return c?"value"in c?c.value:(u=c.get)===null||u===void 0?void 0:u.call(o.k):void 0}(e,n,t);var r=n[t];return e.I||!jr(r)?r:r===Lh(e.t,t)?(Ah(e),e.o[t]=ym(e.A.h,r,e)):r},has:function(e,t){return t in ei(e)},ownKeys:function(e){return Reflect.ownKeys(ei(e))},set:function(e,t,n){var r=Y0(ei(e),t);if(r?.set)return r.set.call(e.k,n),!0;if(!e.P){var o=Lh(ei(e),t),a=o?.[ot];if(a&&a.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Zk(n,o)&&(n!==void 0||ma(e.t,t)))return!0;Ah(e),to(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Lh(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Ah(e),to(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=ei(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Dn(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Dn(12)}},ys={};xi(dl,function(e,t){ys[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),ys.deleteProperty=function(e,t){return ys.set.call(this,e,t,void 0)},ys.set=function(e,t,n){return dl.set.call(this,e[0],t,n,e[0])};var fM=function(){function e(n){var r=this;this.O=tx,this.D=!0,this.produce=function(o,a,s){if(typeof o=="function"&&typeof a!="function"){var u=a;a=o;var c=r;return function(b){var P=this;b===void 0&&(b=u);for(var g=arguments.length,x=Array(g>1?g-1:0),S=1;S<g;S++)x[S-1]=arguments[S];return c.produce(b,function(E){var T;return(T=a).call.apply(T,[P,E].concat(x))})}}var f;if(typeof a!="function"&&Dn(6),s!==void 0&&typeof s!="function"&&Dn(7),jr(o)){var p=G0(r),h=ym(r,o,void 0),_=!0;try{f=a(h),_=!1}finally{_?$c(p):vm(p)}return typeof Promise<"u"&&f instanceof Promise?f.then(function(b){return Rh(p,s),Th(b,p)},function(b){throw $c(p),b}):(Rh(p,s),Th(f,p))}if(!o||typeof o!="object"){if((f=a(o))===void 0&&(f=o),f===qk&&(f=void 0),r.D&&tg(f,!0),s){var v=[],y=[];hr("Patches").M(o,f,v,y),s(v,y)}return f}Dn(21,o)},this.produceWithPatches=function(o,a){if(typeof o=="function")return function(f){for(var p=arguments.length,h=Array(p>1?p-1:0),_=1;_<p;_++)h[_-1]=arguments[_];return r.produceWithPatches(f,function(v){return o.apply(void 0,[v].concat(h))})};var s,u,c=r.produce(o,a,function(f,p){s=f,u=p});return typeof Promise<"u"&&c instanceof Promise?c.then(function(f){return[f,s,u]}):[c,s,u]},typeof n?.useProxies=="boolean"&&this.setUseProxies(n.useProxies),typeof n?.autoFreeze=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){jr(n)||Dn(8),Lo(n)&&(n=sM(n));var r=G0(this),o=ym(this,n,void 0);return o[ot].C=!0,vm(r),o},t.finishDraft=function(n,r){var o=n&&n[ot],a=o.A;return Rh(a,r),Th(void 0,a)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!tx&&Dn(20),this.O=n},t.applyPatches=function(n,r){var o;for(o=r.length-1;o>=0;o--){var a=r[o];if(a.path.length===0&&a.op==="replace"){n=a.value;break}}o>-1&&(r=r.slice(o+1));var s=hr("Patches").$;return Lo(n)?s(n,r):this.produce(n,function(u){return s(u,r)})},e}(),cn=new fM,Qk=cn.produce;cn.produceWithPatches.bind(cn);cn.setAutoFreeze.bind(cn);cn.setUseProxies.bind(cn);cn.applyPatches.bind(cn);cn.createDraft.bind(cn);cn.finishDraft.bind(cn);function rx(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function ox(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rx(Object(n),!0).forEach(function(r){Zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rx(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Dt(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var ix=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Ih=function(){return Math.random().toString(36).substring(7).split("").join(".")},Hc={INIT:"@@redux/INIT"+Ih(),REPLACE:"@@redux/REPLACE"+Ih(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Ih()}};function hM(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Gk(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Dt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Dt(1));return n(Gk)(e,t)}if(typeof e!="function")throw new Error(Dt(2));var o=e,a=t,s=[],u=s,c=!1;function f(){u===s&&(u=s.slice())}function p(){if(c)throw new Error(Dt(3));return a}function h(b){if(typeof b!="function")throw new Error(Dt(4));if(c)throw new Error(Dt(5));var P=!0;return f(),u.push(b),function(){if(P){if(c)throw new Error(Dt(6));P=!1,f();var x=u.indexOf(b);u.splice(x,1),s=null}}}function _(b){if(!hM(b))throw new Error(Dt(7));if(typeof b.type>"u")throw new Error(Dt(8));if(c)throw new Error(Dt(9));try{c=!0,a=o(a,b)}finally{c=!1}for(var P=s=u,g=0;g<P.length;g++){var x=P[g];x()}return b}function v(b){if(typeof b!="function")throw new Error(Dt(10));o=b,_({type:Hc.REPLACE})}function y(){var b,P=h;return b={subscribe:function(x){if(typeof x!="object"||x===null)throw new Error(Dt(11));function S(){x.next&&x.next(p())}S();var E=P(S);return{unsubscribe:E}}},b[ix]=function(){return this},b}return _({type:Hc.INIT}),r={dispatch:_,subscribe:h,getState:p,replaceReducer:v},r[ix]=y,r}function pM(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Hc.INIT});if(typeof r>"u")throw new Error(Dt(12));if(typeof n(void 0,{type:Hc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Dt(13))})}function mM(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];typeof e[o]=="function"&&(n[o]=e[o])}var a=Object.keys(n),s;try{pM(n)}catch(u){s=u}return function(c,f){if(c===void 0&&(c={}),s)throw s;for(var p=!1,h={},_=0;_<a.length;_++){var v=a[_],y=n[v],b=c[v],P=y(b,f);if(typeof P>"u")throw f&&f.type,new Error(Dt(14));h[v]=P,p=p||P!==b}return p=p||a.length!==Object.keys(c).length,p?h:c}}function Vc(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,o){return function(){return r(o.apply(void 0,arguments))}})}function _M(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var o=r.apply(void 0,arguments),a=function(){throw new Error(Dt(15))},s={getState:o.getState,dispatch:function(){return a.apply(void 0,arguments)}},u=t.map(function(c){return c(s)});return a=Vc.apply(void 0,u)(o.dispatch),ox(ox({},o),{},{dispatch:a})}}}function Jk(e){var t=function(r){var o=r.dispatch,a=r.getState;return function(s){return function(u){return typeof u=="function"?u(o,a,e):s(u)}}};return t}var Yk=Jk();Yk.withExtraArgument=Jk;const ax=Yk;var Xk=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(r[a]=o[a])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),gM=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,o,a,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(f){return function(p){return c([f,p])}}function c(f){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(a=f[0]&2?o.return:f[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,f[1])).done)return a;switch(o=0,a&&(f=[f[0]&2,a.value]),f[0]){case 0:case 1:a=f;break;case 4:return n.label++,{value:f[1],done:!1};case 5:n.label++,o=f[1],f=[0];continue;case 7:f=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(f[0]===6||f[0]===2)){n=0;continue}if(f[0]===3&&(!a||f[1]>a[0]&&f[1]<a[3])){n.label=f[1];break}if(f[0]===6&&n.label<a[1]){n.label=a[1],a=f;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(f);break}a[2]&&n.ops.pop(),n.trys.pop();continue}f=t.call(e,n)}catch(p){f=[6,p],o=0}finally{r=a=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}},La=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},vM=Object.defineProperty,yM=Object.defineProperties,bM=Object.getOwnPropertyDescriptors,sx=Object.getOwnPropertySymbols,xM=Object.prototype.hasOwnProperty,wM=Object.prototype.propertyIsEnumerable,lx=function(e,t,n){return t in e?vM(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},wo=function(e,t){for(var n in t||(t={}))xM.call(t,n)&&lx(e,n,t[n]);if(sx)for(var r=0,o=sx(t);r<o.length;r++){var n=o[r];wM.call(t,n)&&lx(e,n,t[n])}return e},zh=function(e,t){return yM(e,bM(t))},SM=function(e,t,n){return new Promise(function(r,o){var a=function(c){try{u(n.next(c))}catch(f){o(f)}},s=function(c){try{u(n.throw(c))}catch(f){o(f)}},u=function(c){return c.done?r(c.value):Promise.resolve(c.value).then(a,s)};u((n=n.apply(e,t)).next())})},kM=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Vc:Vc.apply(null,arguments)};function PM(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var CM=function(e){Xk(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,La([void 0],n[0].concat(this)))):new(t.bind.apply(t,La([void 0],n.concat(this))))},t}(Array),EM=function(e){Xk(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,La([void 0],n[0].concat(this)))):new(t.bind.apply(t,La([void 0],n.concat(this))))},t}(Array);function xm(e){return jr(e)?Qk(e,function(){}):e}function OM(e){return typeof e=="boolean"}function RM(){return function(t){return TM(t)}}function TM(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new CM;return n&&(OM(n)?r.push(ax):r.push(ax.withExtraArgument(n.extraArgument))),r}var LM=!0;function AM(e){var t=RM(),n=e||{},r=n.reducer,o=r===void 0?void 0:r,a=n.middleware,s=a===void 0?t():a,u=n.devTools,c=u===void 0?!0:u,f=n.preloadedState,p=f===void 0?void 0:f,h=n.enhancers,_=h===void 0?void 0:h,v;if(typeof o=="function")v=o;else if(PM(o))v=mM(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var y=s;typeof y=="function"&&(y=y(t));var b=_M.apply(void 0,y),P=Vc;c&&(P=kM(wo({trace:!LM},typeof c=="object"&&c)));var g=new EM(b),x=g;Array.isArray(_)?x=La([b],_):typeof _=="function"&&(x=_(g));var S=P.apply(void 0,x);return Gk(v,p,S)}function So(e,t){function n(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(t){var a=t.apply(void 0,r);if(!a)throw new Error("prepareAction did not return an object");return wo(wo({type:e,payload:a.payload},"meta"in a&&{meta:a.meta}),"error"in a&&{error:a.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function eP(e){var t={},n=[],r,o={addCase:function(a,s){var u=typeof a=="string"?a:a.type;if(u in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[u]=s,o},addMatcher:function(a,s){return n.push({matcher:a,reducer:s}),o},addDefaultCase:function(a){return r=a,o}};return e(o),[t,n,r]}function IM(e){return typeof e=="function"}function zM(e,t,n,r){n===void 0&&(n=[]);var o=typeof t=="function"?eP(t):[t,n,r],a=o[0],s=o[1],u=o[2],c;if(IM(e))c=function(){return xm(e())};else{var f=xm(e);c=function(){return f}}function p(h,_){h===void 0&&(h=c());var v=La([a[_.type]],s.filter(function(y){var b=y.matcher;return b(_)}).map(function(y){var b=y.reducer;return b}));return v.filter(function(y){return!!y}).length===0&&(v=[u]),v.reduce(function(y,b){if(b)if(Lo(y)){var P=y,g=b(P,_);return g===void 0?y:g}else{if(jr(y))return Qk(y,function(x){return b(x,_)});var g=b(y,_);if(g===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}return y},h)}return p.getInitialState=c,p}function NM(e,t){return e+"/"+t}function BM(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:xm(e.initialState),r=e.reducers||{},o=Object.keys(r),a={},s={},u={};o.forEach(function(p){var h=r[p],_=NM(t,p),v,y;"reducer"in h?(v=h.reducer,y=h.prepare):v=h,a[p]=v,s[_]=v,u[p]=y?So(_,y):So(_)});function c(){var p=typeof e.extraReducers=="function"?eP(e.extraReducers):[e.extraReducers],h=p[0],_=h===void 0?{}:h,v=p[1],y=v===void 0?[]:v,b=p[2],P=b===void 0?void 0:b,g=wo(wo({},_),s);return zM(n,function(x){for(var S in g)x.addCase(S,g[S]);for(var E=0,T=y;E<T.length;E++){var A=T[E];x.addMatcher(A.matcher,A.reducer)}P&&x.addDefaultCase(P)})}var f;return{name:t,reducer:function(p,h){return f||(f=c()),f(p,h)},actions:u,caseReducers:a,getInitialState:function(){return f||(f=c()),f.getInitialState()}}}var MM="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",DM=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=MM[Math.random()*64|0];return t},jM=["name","message","stack","code"],Nh=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),ux=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),FM=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=jM;n<r.length;n++){var o=r[n];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}},tP=function(){function e(t,n,r){var o=So(t+"/fulfilled",function(f,p,h,_){return{payload:f,meta:zh(wo({},_||{}),{arg:h,requestId:p,requestStatus:"fulfilled"})}}),a=So(t+"/pending",function(f,p,h){return{payload:void 0,meta:zh(wo({},h||{}),{arg:p,requestId:f,requestStatus:"pending"})}}),s=So(t+"/rejected",function(f,p,h,_,v){return{payload:_,error:(r&&r.serializeError||FM)(f||"Rejected"),meta:zh(wo({},v||{}),{arg:h,requestId:p,rejectedWithValue:!!_,requestStatus:"rejected",aborted:f?.name==="AbortError",condition:f?.name==="ConditionError"})}}),u=typeof AbortController<"u"?AbortController:function(){function f(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return f.prototype.abort=function(){},f}();function c(f){return function(p,h,_){var v=r?.idGenerator?r.idGenerator(f):DM(),y=new u,b;function P(x){b=x,y.abort()}var g=function(){return SM(this,null,function(){var x,S,E,T,A,N,D;return gM(this,function(W){switch(W.label){case 0:return W.trys.push([0,4,,5]),T=(x=r?.condition)==null?void 0:x.call(r,f,{getState:h,extra:_}),UM(T)?[4,T]:[3,2];case 1:T=W.sent(),W.label=2;case 2:if(T===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return A=new Promise(function(B,H){return y.signal.addEventListener("abort",function(){return H({name:"AbortError",message:b||"Aborted"})})}),p(a(v,f,(S=r?.getPendingMeta)==null?void 0:S.call(r,{requestId:v,arg:f},{getState:h,extra:_}))),[4,Promise.race([A,Promise.resolve(n(f,{dispatch:p,getState:h,extra:_,requestId:v,signal:y.signal,abort:P,rejectWithValue:function(B,H){return new Nh(B,H)},fulfillWithValue:function(B,H){return new ux(B,H)}})).then(function(B){if(B instanceof Nh)throw B;return B instanceof ux?o(B.payload,v,f,B.meta):o(B,v,f)})])];case 3:return E=W.sent(),[3,5];case 4:return N=W.sent(),E=N instanceof Nh?s(null,v,f,N.payload,N.meta):s(N,v,f),[3,5];case 5:return D=r&&!r.dispatchConditionRejection&&s.match(E)&&E.meta.condition,D||p(E),[2,E]}})})}();return Object.assign(g,{abort:P,requestId:v,arg:f,unwrap:function(){return g.then($M)}})}}return Object.assign(c,{pending:a,rejected:s,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e}();function $M(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function UM(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var og="listenerMiddleware";So(og+"/add");So(og+"/removeAll");So(og+"/remove");var cx;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);lM();const WM={loading:!0,brandloading:!0,evList:{evs:[],count:0},search:{name:"",sortOrder:"Name",evType:[],brands:[],seatConfiguration:[],seatMassageFirstRow:!1,seatMassageSecondRow:!1,seatVentilationFirstRow:!1,seatVentilationSecondRow:!1,allWheelDrive:!1,nightVision:!1,adaptiveSuspension:!1,airSuspension:!1,instrumentCluster:!1,headUpDisplay:!1,androidAuto:!1,appleCarPlay:!1,colors:[],fWD:!1,rWD:!1,rearAxleSteering:!1,adaptiveCruiseControl:!1,autoSteer:!1,automaticParking:!1,blindSpotMonitoring:!1,automatedLaneChange:!1,driverDrowsinessDetection:!1,driverMonitoringSystem:!1,rearCrossTrafficAlert:!1,exitWarning:!1,trafficSignRecognition:!1,efficiencyAssist:!1},searchOptions:{brands:["Audi","BMW","BYD","CUPRA","Hongqi","Hyundai","Kia","Lucid","Mercedes","Nio","Nissan","Porsche","SKODA","Tesla","Toyota","Volkswagen"],seatConfig:[],bodyTypes:["Sedan"],seatConfiguration:["5 seat"],colors:["Red"]},error:""},wm=tP("evsearch/fetchEvs",async e=>{const t=window.location.href;let n="https://api.evkx.net/api/Ev";return t.startsWith("http://localhost")&&(n="https://localhost:7033/api/Ev"),await Hk.post(n,e,{headers:{"Content-Type":"application/json"}}).then(r=>r.data).catch(r=>{console.error("error",r)})}),Sm=tP("evsearch/fetchSearchOptions",async()=>{const e=window.location.href;let t="https://api.evkx.net/api/searchoptions";return e.startsWith("http://localhost")&&(t="https://localhost:7033/api/searchoptions"),await Hk.get(t).then(n=>n.data).catch(n=>{console.error("error",n)})}),nP=BM({name:"evsearch",initialState:WM,reducers:{updateSortOrder:(e,t)=>{e.search.sortOrder=t.payload},updateEvType:(e,t)=>{const n=t.payload;e.search.evType=n},updateBrands:(e,t)=>{const n=t.payload;e.search.brands=n},updateSeatConfig:(e,t)=>{const n=t.payload;e.search.seatConfiguration=n},updateAllWheelDrive:(e,t)=>{const n=t.payload;e.search.allWheelDrive=n},updateRWD:(e,t)=>{e.search.rWD=t.payload},updateFWD:(e,t)=>{e.search.fWD=t.payload},updateRearAxleSteering:(e,t)=>{e.search.rearAxleSteering=t.payload},updateNightVision:(e,t)=>{const n=t.payload;e.search.nightVision=n},updateAdaptiveDamping:(e,t)=>{const n=t.payload;e.search.adaptiveSuspension=n},updateAdaptiveAirSuspension:(e,t)=>{e.search.airSuspension=t.payload},updateInstrumentCluster:(e,t)=>{const n=t.payload;e.search.instrumentCluster=n},updateHeadUpDisplay:(e,t)=>{const n=t.payload;e.search.headUpDisplay=n},updateAndroidAuto:(e,t)=>{const n=t.payload;e.search.androidAuto=n},updateAppleCarPlay:(e,t)=>{const n=t.payload;e.search.appleCarPlay=n},updateAdaptiveCruiseControl:(e,t)=>{e.search.adaptiveCruiseControl=t.payload},updateAutoSteer:(e,t)=>{e.search.autoSteer=t.payload},updateColors:(e,t)=>{const n=t.payload;e.search.colors=n},updateSortOrderFromParam:(e,t)=>{e.search.sortOrder=t.payload}},extraReducers:e=>{e.addCase(wm.fulfilled,(t,n)=>{const r=n.payload;t.evList=r,t.loading=!1}).addCase(wm.rejected,(t,n)=>{t.error=n.error.message}).addCase(Sm.fulfilled,(t,n)=>{const r=n.payload;t.searchOptions=r,t.brandloading=!1}).addCase(Sm.rejected,(t,n)=>{t.error=n.error.message})}}),HM=nP.reducer,{updateSortOrder:VM,updateEvType:ZM,updateBrands:qM,updateSeatConfig:KM,updateAllWheelDrive:QM,updateNightVision:GM,updateAdaptiveDamping:JM,updateAdaptiveAirSuspension:YM,updateInstrumentCluster:XM,updateHeadUpDisplay:e5,updateAndroidAuto:t5,updateAppleCarPlay:n5,updateColors:r5,updateFWD:o5,updateRWD:i5,updateRearAxleSteering:a5,updateSortOrderFromParam:j5,updateAdaptiveCruiseControl:s5,updateAutoSteer:l5}=nP.actions,kr=u2,u5=()=>O2(),c5="_pageMargin_1uj8b_3",d5="_pageContainer_1uj8b_37",f5="_exitButton_1uj8b_57",dx={pageMargin:c5,pageContainer:d5,exitButton:f5},h5=({children:e})=>(_R(),yl("common"),Q.jsx("div",{className:dx.pageMargin,children:Q.jsx("div",{className:dx.pageContainer,children:Q.jsx("div",{children:e})})})),p5="_evsearchAccordionContent_f6igx_1",m5="_evText_f6igx_11",_5="_scopeItems_f6igx_19",g5="_line_f6igx_27",v5="_contentTexts_f6igx_37",y5="_bottomContentTexts_f6igx_47",b5="_thumb_f6igx_55",x5="_card_f6igx_73",w5="_cards_f6igx_81",S5="_thumbcontainer_f6igx_105",Wi={evsearchAccordionContent:p5,evText:m5,scopeItems:_5,line:g5,contentTexts:v5,bottomContentTexts:y5,thumb:b5,card:x5,cards:w5,thumbcontainer:S5},k5=({title:e="No info",subtitle:t="No info",maxPower:n=0,topSpeedKph:r=0,infoUri:o="",netBattery:a=0,wltpConsumption:s=0,wltpRange:u=0,zeroTo100:c=0,thumbUri:f="",maxDcChargingSpeed:p=0,averageDcChargingSpeed:h=0})=>{const[_,v]=k.useState(!1);return Q.jsx("div",{children:Q.jsx(ar,{onClick:()=>{v(!_)},children:Q.jsxs(ar.Item,{children:[Q.jsxs(ar.Header,{children:[e," ",t]}),Q.jsx(ar.Content,{children:Q.jsx("div",{className:Wi.evsearchAccordionContent,children:Q.jsxs("div",{className:Wi.cards,children:[Q.jsx("div",{className:Wi.card,children:Q.jsx("div",{className:Wi.thumbcontainer,children:Q.jsx("img",{src:f,alt:e,className:Wi.thumb})})}),Q.jsxs("div",{className:Wi.card,children:["Read our ",Q.jsx("a",{href:o,children:"full article"}),", see all"," ",Q.jsx("a",{href:o+"specifications/",children:"specifications"}),", or see our"," ",Q.jsx("a",{href:o+"gallery/",children:"image gallery"}),".",Q.jsx("br",{}),Q.jsx("br",{}),Q.jsxs(TI,{borderStyle:"dashed",children:[Q.jsxs(Zo,{children:[Q.jsx("b",{children:Ho("evsearch.specwltprange")})," - ",u," km"]}),Q.jsxs(Zo,{children:[Q.jsx("b",{children:Ho("evsearch.specwltpconsumption")})," - ",s," kWh/100km"]}),Q.jsxs(Zo,{children:[Q.jsx("b",{children:Ho("evsearch.specnetbattery")})," - ",a," kWh"]}),Q.jsxs(Zo,{children:[Q.jsx("b",{children:Ho("evsearch.zeroto100")})," - ",c," seconds"]}),Q.jsxs(Zo,{children:[Q.jsx("b",{children:Ho("evsearch.topspeed")}),"- ",r," km/h"]}),Q.jsxs(Zo,{children:[Q.jsx("b",{children:Ho("evsearch.maxpower")})," - ",n," kW"]}),Q.jsxs(Zo,{children:[Q.jsx("b",{children:Ho("evsearch.chargingspeed")})," - ",p,"/",h," kW"]})]})]})]})})})]})})})},P5="_pageContent_1gqfc_1",C5="_pageContentContainer_1gqfc_19",E5="_resultInfo_1gqfc_33",O5="_searchinput_1gqfc_45",R5="_searchinfo_1gqfc_53",T5="_searchinfoContent_1gqfc_63",ps={pageContent:P5,pageContentContainer:C5,resultInfo:E5,searchinput:O5,searchinfo:R5,searchinfoContent:T5},fx=()=>{const{t:e}=yl("common"),t=kr(O=>O.evsearchResult.loading),n=u5(),r=async()=>await n(Sm()),o=XI("(max-width: 768px)"),a=kr(O=>O.evsearchResult.evList.evs),s=kr(O=>O.evsearchResult.evList.count),u=kr(O=>O.evsearchResult.searchOptions.bodyTypes),c=kr(O=>O.evsearchResult.searchOptions.colors),f=kr(O=>O.evsearchResult.searchOptions.seatConfiguration),p=kr(O=>O.evsearchResult.searchOptions.brands),h=kr(O=>O.evsearchResult.search),_=async O=>await n(wm(O)),v=kr(O=>O.evsearchResult.error);k.useEffect(()=>{t&&(r(),_(h))},[]),k.useEffect(()=>{t||_(h)},[h]);const y=O=>{n(VM(O))},b=p.map(O=>({label:O,value:O})),P=O=>{n(ZM(O))},g=O=>{n(KM(O))},x=O=>{n(QM(O.target.checked))},S=O=>{n(i5(O.target.checked))},E=O=>{n(o5(O.target.checked))},T=O=>{n(a5(O.target.checked))},A=O=>{n(GM(O.target.checked))},N=O=>{n(JM(O.target.checked))},D=O=>{n(YM(O.target.checked))},W=O=>{n(XM(O.target.checked))},B=O=>{n(e5(O.target.checked))},H=O=>{n(n5(O.target.checked))},G=O=>{n(s5(O.target.checked))},q=O=>{n(l5(O.target.checked))},$=O=>{n(t5(O.target.checked))},re=O=>{n(r5(O))},Z=O=>{n(qM(O))},se=()=>v?Q.jsx(yL,{title:e("api_delegation.data_retrieval_failed"),variant:oo.Error,forceMobileLayout:!0,children:Q.jsxs("div",{children:[e("api_delegation.error_message"),": ",v]})}):t?Q.jsx("center",{children:Q.jsx(RI,{title:"Spinner",size:"3xLarge",variant:"interaction"})}):a.map((O,Y)=>Q.jsx(k5,{title:O.name,subtitle:O.sortValue+" "+O.sortParameter,maxPower:O.maxPowerKw,topSpeedKph:O.topSpeedKph,infoUri:O.infoUri,wltpConsumption:O.wltpConsumption,wltpRange:O.wltpRange,netBattery:O.netBattery,zeroTo100:O.zeroTo100,thumbUri:O.thumbUri,averageDcChargingSpeed:O.averageDcChargingSpeed,maxDcChargingSpeed:O.maxDcChargingSpeed},Y));return Q.jsx(h5,{children:Q.jsxs(rh,{children:[Q.jsxs("div",{className:ps.pageContent,children:[Q.jsx(rk,{size:"large",children:"Welcome to EVKX EV Search"}),Q.jsxs(AI,{size:"medium",children:["EVKX offers the most comprehensive search for EVs.",Q.jsx("br",{}),"You can search and sort on a whole lot of parameters. ",Q.jsx("br",{}),"Please read our ",Q.jsx("a",{href:"/guides/evsearch/",children:"search guide"}),Q.jsx("br",{}),Q.jsx("br",{})]}),Q.jsx(FN,{options:b,icon:Q.jsx(KI,{}),label:String(e("evsearch.brandfilter")),applyButtonLabel:String(e("common.apply")),resetButtonLabel:String(e("common.reset_choices")),closeButtonAriaLabel:String(e("common.close")),searchable:!0,onApply:Z,fullScreenModal:o}),Q.jsx("br",{}),Q.jsx("br",{}),Q.jsx(Nu,{"data-testid":"evsearch-evtype",variant:As.Horizontal,onChange:O=>{P(O)},compact:!0,legend:"Select body type",items:u.map(O=>({label:O,name:O,checked:h.evType===void 0||h.evType.includes(O)}))}),Q.jsx("br",{}),Q.jsx(PS,{items:[{content:Q.jsx(Nu,{"data-testid":"evsearch-seatconfig",variant:As.Horizontal,onChange:O=>{g(O)},compact:!0,legend:"Number of seats",items:f.map(O=>({label:O,name:O,checked:h.seatConfiguration===void 0||h.seatConfiguration.includes(O)}))}),name:"Seats"},{content:Q.jsxs(rh,{children:[Q.jsx(Mt,{checked:h.allWheelDrive,label:"All wheel drive",onChange:x,compact:!0}),Q.jsx("br",{}),Q.jsx(Mt,{checked:h.rWD,label:"RWD",onChange:S,compact:!0}),Q.jsx("br",{}),Q.jsx(Mt,{checked:h.fWD,label:"FWD",onChange:E,compact:!0}),Q.jsx("br",{}),Q.jsx(Mt,{checked:h.adaptiveSuspension,label:"Adaptive Suspension",onChange:N,compact:!0}),Q.jsx("br",{}),Q.jsx(Mt,{checked:h.airSuspension,label:"Air Suspension",onChange:D,compact:!0}),Q.jsx("br",{}),Q.jsx(Mt,{checked:h.rearAxleSteering,label:"Rear Axle Steering",onChange:T,compact:!0})]}),name:"Drivetrain"},{content:Q.jsxs(rh,{children:[Q.jsx(Mt,{checked:h.nightVision,label:"Nightvision",onChange:A,compact:!0}),Q.jsx("br",{}),Q.jsx(Mt,{checked:h.adaptiveCruiseControl,label:"AdaptiveCruiseControl",onChange:G,compact:!0}),Q.jsx("br",{}),Q.jsx(Mt,{checked:h.autoSteer,label:"Autosteer",onChange:q,compact:!0}),Q.jsx("br",{}),"Read more about Adavanced Driver Assist Systems in our"," ",Q.jsx("a",{href:"../technology/driverassistance/",children:"technology section"})]}),name:"Driver Assistance"},{content:Q.jsx(Nu,{"data-testid":"evsearch-evtype",variant:As.Horizontal,onChange:O=>{re(O)},compact:!0,legend:"Select paint color",items:c.map(O=>({label:O,name:O,checked:h.colors===void 0||h.colors.includes(O)}))}),name:"Exterior"},{content:Q.jsxs("div",{children:[Q.jsx(Mt,{checked:h.headUpDisplay,label:"Head Up Display",onChange:B,compact:!0}),Q.jsx("br",{}),Q.jsx(Mt,{checked:h.instrumentCluster,label:"Dedicated Instrument Cluster",onChange:W,compact:!0}),Q.jsx("br",{}),Q.jsx(Mt,{checked:h.androidAuto,label:"Android Auto Support",onChange:$,compact:!0}),Q.jsx("br",{}),Q.jsx(Mt,{checked:h.appleCarPlay,label:"Apple Car Play Support",onChange:H,compact:!0})]}),name:"UI & Interface"}]}),Q.jsx(tk,{label:String(e("evsearch.sortorder")),multiple:!1,onChange:y,options:[{label:String(e("evsearch.sortorderbrand")),value:"Name"},{label:String(e("evsearch.specwltprange")),value:"RangeMinimumWltp"},{label:String(e("evsearch.specwltpconsumption")),value:"WltpBasicConsumption"},{label:String(e("evsearch.sortordernetsize")),value:"NetBattery"},{label:String(e("evsearch.sortordernetsizedesc")),value:"NetBatteryDesc"},{label:String(e("evsearch.maxpowersort")),value:"PowerDesc"},{label:String(e("evsearch.topspeedsort")),value:"TopSpeedDesc"},{label:String(e("evsearch.maxdcchargingsort")),value:"MaxDCCharging"},{label:String(e("evsearch.averagechargingspeed0100")),value:"AverageChargingSpeedDesc"},{label:String(e("evsearch.averagechargingspeed10100")),value:"AverageChargingSpeed10100Desc"},{label:String(e("evsearch.averagechargingspeed1080")),value:"AverageChargingSpeed1080Desc"},{label:String(e("evsearch.sort0100kmh")),value:"ZeroTo100"},{label:String(e("evsearch.sort1000kmdrivingtime")),value:"DrivingTime1000kmChallenge"},{label:String(e("evsearch.sort1000kmaveragespeed")),value:"AverageSpeed1000kmChallengeDesc"},{label:String(e("evsearch.travelspeedwltpcyclus")),value:"TravelSpeedWltpDesc"},{label:String(e("evsearch.travelspeed120kmh")),value:"TravelSpeed120kmhDesc"},{label:String(e("evsearch.nominalvoltagesort")),value:"NominalVoltage"},{label:String(e("evsearch.trunksize")),value:"TrunkSizeDesc"},{label:String(e("evsearch.maxtrunksize")),value:"MaxTrunkSizeDesc"},{label:String(e("evsearch.maxload")),value:"MaxLoadDesc"},{label:String(e("evsearch.maxtrailer")),value:"MaxTrailerSizeDesc"},{label:String(e("evsearch.maxgroundclearance")),value:"MaxGroundClearanceDesc"},{label:String(e("evsearch.mingroundclearance")),value:"MinGroundClearance"},{label:String(e("evsearch.suspensionheightadjustment")),value:"SuspensionHeightAdjustment"}]})]}),Q.jsx("div",{className:ps.pageContentAccordionsContainer,children:Q.jsxs("div",{className:ps.apiAccordions,children:[Q.jsxs("h4",{className:ps.resultInfo,children:[s," ",e("evsearch.searchresult"),":"]}),Q.jsx("div",{className:ps.accordionScrollContainer,children:se()})]})})]})})},L5=IR([{path:"/",errorElement:Q.jsx(th,{})},{path:"evsearch",element:Q.jsx(fx,{}),errorElement:Q.jsx(th,{})},{path:"nb/evsearch",element:Q.jsx(fx,{}),errorElement:Q.jsx(th,{})}],{basename:"/"}),A5={backendApiUrl:new URL(window.location.href).origin+"/api/",defaultLocale:"no_nb"},Uu={backendApiUrl:{}.VITE_BACKEND_API_URL,defaultLocale:{}.VITE_DEFAULT_LOCALE};for(const e in Uu)Uu[e]===void 0&&delete Uu[e];const I5={...A5,...Uu};function z5(e){return I5[e]}const N5=({children:e})=>{const{i18n:t}=yl("common"),n=window.location.href;let r="en";n.includes("nb/")&&(r="no_nb");const a=`/public/localizations/${r}.json`,s=new URL(a,import.meta.url).href;return TT("Localizations",async()=>{const c=await(await fetch(s)).json();Ut.addResourceBundle(t.language,"common",c)},{staleTime:1/0,suspense:!0}),Q.jsx(Q.Fragment,{children:e})};var Zc={},B5={get exports(){return Zc},set exports(e){Zc=e}};(function(e,t){(function(n,r){r(t)})(Hi,function(n){function r(R,z){R.super_=z,R.prototype=Object.create(z.prototype,{constructor:{value:R,enumerable:!1,writable:!0,configurable:!0}})}function o(R,z){Object.defineProperty(this,"kind",{value:R,enumerable:!0}),z&&z.length&&Object.defineProperty(this,"path",{value:z,enumerable:!0})}function a(R,z,M){a.super_.call(this,"E",R),Object.defineProperty(this,"lhs",{value:z,enumerable:!0}),Object.defineProperty(this,"rhs",{value:M,enumerable:!0})}function s(R,z){s.super_.call(this,"N",R),Object.defineProperty(this,"rhs",{value:z,enumerable:!0})}function u(R,z){u.super_.call(this,"D",R),Object.defineProperty(this,"lhs",{value:z,enumerable:!0})}function c(R,z,M){c.super_.call(this,"A",R),Object.defineProperty(this,"index",{value:z,enumerable:!0}),Object.defineProperty(this,"item",{value:M,enumerable:!0})}function f(R,z,M){var V=R.slice((M||z)+1||R.length);return R.length=z<0?R.length+z:z,R.push.apply(R,V),R}function p(R){var z=typeof R>"u"?"undefined":re(R);return z!=="object"?z:R===Math?"math":R===null?"null":Array.isArray(R)?"array":Object.prototype.toString.call(R)==="[object Date]"?"date":typeof R.toString=="function"&&/^\/.*\//.test(R.toString())?"regexp":"object"}function h(R,z,M,V,te,ie,fe){te=te||[],fe=fe||[];var be=te.slice(0);if(typeof ie<"u"){if(V){if(typeof V=="function"&&V(be,ie))return;if((typeof V>"u"?"undefined":re(V))==="object"){if(V.prefilter&&V.prefilter(be,ie))return;if(V.normalize){var Je=V.normalize(be,ie,R,z);Je&&(R=Je[0],z=Je[1])}}}be.push(ie)}p(R)==="regexp"&&p(z)==="regexp"&&(R=R.toString(),z=z.toString());var Ze=typeof R>"u"?"undefined":re(R),Re=typeof z>"u"?"undefined":re(z),le=Ze!=="undefined"||fe&&fe[fe.length-1].lhs&&fe[fe.length-1].lhs.hasOwnProperty(ie),me=Re!=="undefined"||fe&&fe[fe.length-1].rhs&&fe[fe.length-1].rhs.hasOwnProperty(ie);if(!le&&me)M(new s(be,z));else if(!me&&le)M(new u(be,R));else if(p(R)!==p(z))M(new a(be,R,z));else if(p(R)==="date"&&R-z!==0)M(new a(be,R,z));else if(Ze==="object"&&R!==null&&z!==null)if(fe.filter(function(_e){return _e.lhs===R}).length)R!==z&&M(new a(be,R,z));else{if(fe.push({lhs:R,rhs:z}),Array.isArray(R)){var ee;for(R.length,ee=0;ee<R.length;ee++)ee>=z.length?M(new c(be,ee,new u(void 0,R[ee]))):h(R[ee],z[ee],M,V,be,ee,fe);for(;ee<z.length;)M(new c(be,ee,new s(void 0,z[ee++])))}else{var ce=Object.keys(R),de=Object.keys(z);ce.forEach(function(_e,ke){var Ne=de.indexOf(_e);Ne>=0?(h(R[_e],z[_e],M,V,be,_e,fe),de=f(de,Ne)):h(R[_e],void 0,M,V,be,_e,fe)}),de.forEach(function(_e){h(void 0,z[_e],M,V,be,_e,fe)})}fe.length=fe.length-1}else R!==z&&(Ze==="number"&&isNaN(R)&&isNaN(z)||M(new a(be,R,z)))}function _(R,z,M,V){return V=V||[],h(R,z,function(te){te&&V.push(te)},M),V.length?V:void 0}function v(R,z,M){if(M.path&&M.path.length){var V,te=R[z],ie=M.path.length-1;for(V=0;V<ie;V++)te=te[M.path[V]];switch(M.kind){case"A":v(te[M.path[V]],M.index,M.item);break;case"D":delete te[M.path[V]];break;case"E":case"N":te[M.path[V]]=M.rhs}}else switch(M.kind){case"A":v(R[z],M.index,M.item);break;case"D":R=f(R,z);break;case"E":case"N":R[z]=M.rhs}return R}function y(R,z,M){if(R&&z&&M&&M.kind){for(var V=R,te=-1,ie=M.path?M.path.length-1:0;++te<ie;)typeof V[M.path[te]]>"u"&&(V[M.path[te]]=typeof M.path[te]=="number"?[]:{}),V=V[M.path[te]];switch(M.kind){case"A":v(M.path?V[M.path[te]]:V,M.index,M.item);break;case"D":delete V[M.path[te]];break;case"E":case"N":V[M.path[te]]=M.rhs}}}function b(R,z,M){if(M.path&&M.path.length){var V,te=R[z],ie=M.path.length-1;for(V=0;V<ie;V++)te=te[M.path[V]];switch(M.kind){case"A":b(te[M.path[V]],M.index,M.item);break;case"D":te[M.path[V]]=M.lhs;break;case"E":te[M.path[V]]=M.lhs;break;case"N":delete te[M.path[V]]}}else switch(M.kind){case"A":b(R[z],M.index,M.item);break;case"D":R[z]=M.lhs;break;case"E":R[z]=M.lhs;break;case"N":R=f(R,z)}return R}function P(R,z,M){if(R&&z&&M&&M.kind){var V,te,ie=R;for(te=M.path.length-1,V=0;V<te;V++)typeof ie[M.path[V]]>"u"&&(ie[M.path[V]]={}),ie=ie[M.path[V]];switch(M.kind){case"A":b(ie[M.path[V]],M.index,M.item);break;case"D":ie[M.path[V]]=M.lhs;break;case"E":ie[M.path[V]]=M.lhs;break;case"N":delete ie[M.path[V]]}}}function g(R,z,M){if(R&&z){var V=function(te){M&&!M(R,z,te)||y(R,z,te)};h(R,z,V)}}function x(R){return"color: "+O[R].color+"; font-weight: bold"}function S(R){var z=R.kind,M=R.path,V=R.lhs,te=R.rhs,ie=R.index,fe=R.item;switch(z){case"E":return[M.join("."),V,"→",te];case"N":return[M.join("."),te];case"D":return[M.join(".")];case"A":return[M.join(".")+"["+ie+"]",fe];default:return[]}}function E(R,z,M,V){var te=_(R,z);try{V?M.groupCollapsed("diff"):M.group("diff")}catch{M.log("diff")}te?te.forEach(function(ie){var fe=ie.kind,be=S(ie);M.log.apply(M,["%c "+O[fe].text,x(fe)].concat(Z(be)))}):M.log("—— no diff ——");try{M.groupEnd()}catch{M.log("—— diff end —— ")}}function T(R,z,M,V){switch(typeof R>"u"?"undefined":re(R)){case"object":return typeof R[V]=="function"?R[V].apply(R,Z(M)):R[V];case"function":return R(z);default:return R}}function A(R){var z=R.timestamp,M=R.duration;return function(V,te,ie){var fe=["action"];return fe.push("%c"+String(V.type)),z&&fe.push("%c@ "+te),M&&fe.push("%c(in "+ie.toFixed(2)+" ms)"),fe.join(" ")}}function N(R,z){var M=z.logger,V=z.actionTransformer,te=z.titleFormatter,ie=te===void 0?A(z):te,fe=z.collapsed,be=z.colors,Je=z.level,Ze=z.diff,Re=typeof z.titleFormatter>"u";R.forEach(function(le,me){var ee=le.started,ce=le.startedTime,de=le.action,_e=le.prevState,ke=le.error,Ne=le.took,$e=le.nextState,Ye=R[me+1];Ye&&($e=Ye.prevState,Ne=Ye.started-ee);var tt=V(de),qt=typeof fe=="function"?fe(function(){return $e},de,le):fe,ki=q(ce),No=be.title?"color: "+be.title(tt)+";":"",En=["color: gray; font-weight: lighter;"];En.push(No),z.timestamp&&En.push("color: gray; font-weight: lighter;"),z.duration&&En.push("color: gray; font-weight: lighter;");var Qn=ie(tt,ki,Ne);try{qt?be.title&&Re?M.groupCollapsed.apply(M,["%c "+Qn].concat(En)):M.groupCollapsed(Qn):be.title&&Re?M.group.apply(M,["%c "+Qn].concat(En)):M.group(Qn)}catch{M.log(Qn)}var _r=T(Je,tt,[_e],"prevState"),Bo=T(Je,tt,[tt],"action"),J=T(Je,tt,[ke,_e],"error"),X=T(Je,tt,[$e],"nextState");if(_r)if(be.prevState){var ae="color: "+be.prevState(_e)+"; font-weight: bold";M[_r]("%c prev state",ae,_e)}else M[_r]("prev state",_e);if(Bo)if(be.action){var ge="color: "+be.action(tt)+"; font-weight: bold";M[Bo]("%c action    ",ge,tt)}else M[Bo]("action    ",tt);if(ke&&J)if(be.error){var ye="color: "+be.error(ke,_e)+"; font-weight: bold;";M[J]("%c error     ",ye,ke)}else M[J]("error     ",ke);if(X)if(be.nextState){var Se="color: "+be.nextState($e)+"; font-weight: bold";M[X]("%c next state",Se,$e)}else M[X]("next state",$e);Ze&&E(_e,$e,M,qt);try{M.groupEnd()}catch{M.log("—— log end ——")}})}function D(){var R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},z=Object.assign({},Y,R),M=z.logger,V=z.stateTransformer,te=z.errorTransformer,ie=z.predicate,fe=z.logErrors,be=z.diffPredicate;if(typeof M>"u")return function(){return function(Ze){return function(Re){return Ze(Re)}}};if(R.getState&&R.dispatch)return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
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
`),function(){return function(Ze){return function(Re){return Ze(Re)}}};var Je=[];return function(Ze){var Re=Ze.getState;return function(le){return function(me){if(typeof ie=="function"&&!ie(Re,me))return le(me);var ee={};Je.push(ee),ee.started=$.now(),ee.startedTime=new Date,ee.prevState=V(Re()),ee.action=me;var ce=void 0;if(fe)try{ce=le(me)}catch(_e){ee.error=te(_e)}else ce=le(me);ee.took=$.now()-ee.started,ee.nextState=V(Re());var de=z.diff&&typeof be=="function"?be(Re,me):z.diff;if(N(Je,Object.assign({},z,{diff:de})),Je.length=0,ee.error)throw ee.error;return ce}}}}var W,B,H=function(R,z){return new Array(z+1).join(R)},G=function(R,z){return H("0",z-R.toString().length)+R},q=function(R){return G(R.getHours(),2)+":"+G(R.getMinutes(),2)+":"+G(R.getSeconds(),2)+"."+G(R.getMilliseconds(),3)},$=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance:Date,re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(R){return typeof R}:function(R){return R&&typeof Symbol=="function"&&R.constructor===Symbol&&R!==Symbol.prototype?"symbol":typeof R},Z=function(R){if(Array.isArray(R)){for(var z=0,M=Array(R.length);z<R.length;z++)M[z]=R[z];return M}return Array.from(R)},se=[];W=(typeof Hi>"u"?"undefined":re(Hi))==="object"&&Hi?Hi:typeof window<"u"?window:{},B=W.DeepDiff,B&&se.push(function(){typeof B<"u"&&W.DeepDiff===_&&(W.DeepDiff=B,B=void 0)}),r(a,o),r(s,o),r(u,o),r(c,o),Object.defineProperties(_,{diff:{value:_,enumerable:!0},observableDiff:{value:h,enumerable:!0},applyDiff:{value:g,enumerable:!0},applyChange:{value:y,enumerable:!0},revertChange:{value:P,enumerable:!0},isConflict:{value:function(){return typeof B<"u"},enumerable:!0},noConflict:{value:function(){return se&&(se.forEach(function(R){R()}),se=null),_},enumerable:!0}});var O={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},Y={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(R){return R},actionTransformer:function(R){return R},errorTransformer:function(R){return R},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},U=function(){var R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},z=R.dispatch,M=R.getState;return typeof z=="function"||typeof M=="function"?D()({dispatch:z,getState:M}):void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`)};n.defaults=Y,n.createLogger=D,n.logger=U,n.default=U,Object.defineProperty(n,"__esModule",{value:!0})})})(B5,Zc);Zc.createLogger();const M5=AM({reducer:{evsearchResult:HM}}),D5=e=>{if(e==="no_nb")return"no_nb";if(e==="en")return"en";if(e==="no_nn")return"no_nn"};lL(KR).init({lng:D5("no_nb"),fallbackLng:z5("defaultLocale"),ns:["common"],defaultNS:"common",returnNull:!1},()=>{const e=new vT({defaultOptions:void 0});w1(document.getElementById("root")).render(Q.jsx(k.StrictMode,{children:Q.jsx(P2,{store:M5,children:Q.jsx(kT,{client:e,children:Q.jsx(N5,{children:Q.jsx(RR,{router:L5})})})})}))});
