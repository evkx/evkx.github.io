function Zw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var li=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ty(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Za={},Hw={get exports(){return Za},set exports(e){Za=e}},Iu={},T={},Ww={get exports(){return T},set exports(e){T=e}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vs=Symbol.for("react.element"),Vw=Symbol.for("react.portal"),qw=Symbol.for("react.fragment"),Kw=Symbol.for("react.strict_mode"),Qw=Symbol.for("react.profiler"),Gw=Symbol.for("react.provider"),Xw=Symbol.for("react.context"),Jw=Symbol.for("react.forward_ref"),Yw=Symbol.for("react.suspense"),ek=Symbol.for("react.memo"),tk=Symbol.for("react.lazy"),s_=Symbol.iterator;function nk(e){return e===null||typeof e!="object"?null:(e=s_&&e[s_]||e["@@iterator"],typeof e=="function"?e:null)}var Ly={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ry=Object.assign,zy={};function Wi(e,t,n){this.props=e,this.context=t,this.refs=zy,this.updater=n||Ly}Wi.prototype.isReactComponent={};Wi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ay(){}Ay.prototype=Wi.prototype;function Mh(e,t,n){this.props=e,this.context=t,this.refs=zy,this.updater=n||Ly}var Dh=Mh.prototype=new Ay;Dh.constructor=Mh;Ry(Dh,Wi.prototype);Dh.isPureReactComponent=!0;var l_=Array.isArray,By=Object.prototype.hasOwnProperty,Fh={current:null},Ny={key:!0,ref:!0,__self:!0,__source:!0};function Iy(e,t,n){var r,i={},a=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)By.call(t,r)&&!Ny.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var d=Array(u),f=0;f<u;f++)d[f]=arguments[f+2];i.children=d}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:vs,type:e,key:a,ref:l,props:i,_owner:Fh.current}}function rk(e,t){return{$$typeof:vs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function jh(e){return typeof e=="object"&&e!==null&&e.$$typeof===vs}function ok(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var u_=/\/+/g;function id(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ok(""+e.key):t.toString(36)}function yl(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case vs:case Vw:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+id(l,0):r,l_(i)?(n="",e!=null&&(n=e.replace(u_,"$&/")+"/"),yl(i,t,n,"",function(f){return f})):i!=null&&(jh(i)&&(i=rk(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(u_,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",l_(e))for(var u=0;u<e.length;u++){a=e[u];var d=r+id(a,u);l+=yl(a,t,n,d,i)}else if(d=nk(e),typeof d=="function")for(e=d.call(e),u=0;!(a=e.next()).done;)a=a.value,d=r+id(a,u++),l+=yl(a,t,n,d,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Qs(e,t,n){if(e==null)return e;var r=[],i=0;return yl(e,r,"","",function(a){return t.call(n,a,i++)}),r}function ik(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ft={current:null},bl={transition:null},ak={ReactCurrentDispatcher:Ft,ReactCurrentBatchConfig:bl,ReactCurrentOwner:Fh};Pe.Children={map:Qs,forEach:function(e,t,n){Qs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Qs(e,function(){t++}),t},toArray:function(e){return Qs(e,function(t){return t})||[]},only:function(e){if(!jh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Pe.Component=Wi;Pe.Fragment=qw;Pe.Profiler=Qw;Pe.PureComponent=Mh;Pe.StrictMode=Kw;Pe.Suspense=Yw;Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ak;Pe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ry({},e.props),i=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=Fh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(d in t)By.call(t,d)&&!Ny.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&u!==void 0?u[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){u=Array(d);for(var f=0;f<d;f++)u[f]=arguments[f+2];r.children=u}return{$$typeof:vs,type:e.type,key:i,ref:a,props:r,_owner:l}};Pe.createContext=function(e){return e={$$typeof:Xw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Gw,_context:e},e.Consumer=e};Pe.createElement=Iy;Pe.createFactory=function(e){var t=Iy.bind(null,e);return t.type=e,t};Pe.createRef=function(){return{current:null}};Pe.forwardRef=function(e){return{$$typeof:Jw,render:e}};Pe.isValidElement=jh;Pe.lazy=function(e){return{$$typeof:tk,_payload:{_status:-1,_result:e},_init:ik}};Pe.memo=function(e,t){return{$$typeof:ek,type:e,compare:t===void 0?null:t}};Pe.startTransition=function(e){var t=bl.transition;bl.transition={};try{e()}finally{bl.transition=t}};Pe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Pe.useCallback=function(e,t){return Ft.current.useCallback(e,t)};Pe.useContext=function(e){return Ft.current.useContext(e)};Pe.useDebugValue=function(){};Pe.useDeferredValue=function(e){return Ft.current.useDeferredValue(e)};Pe.useEffect=function(e,t){return Ft.current.useEffect(e,t)};Pe.useId=function(){return Ft.current.useId()};Pe.useImperativeHandle=function(e,t,n){return Ft.current.useImperativeHandle(e,t,n)};Pe.useInsertionEffect=function(e,t){return Ft.current.useInsertionEffect(e,t)};Pe.useLayoutEffect=function(e,t){return Ft.current.useLayoutEffect(e,t)};Pe.useMemo=function(e,t){return Ft.current.useMemo(e,t)};Pe.useReducer=function(e,t,n){return Ft.current.useReducer(e,t,n)};Pe.useRef=function(e){return Ft.current.useRef(e)};Pe.useState=function(e){return Ft.current.useState(e)};Pe.useSyncExternalStore=function(e,t,n){return Ft.current.useSyncExternalStore(e,t,n)};Pe.useTransition=function(){return Ft.current.useTransition()};Pe.version="18.2.0";(function(e){e.exports=Pe})(Ww);const H=Ty(T),Ha=Zw({__proto__:null,default:H},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sk=T,lk=Symbol.for("react.element"),uk=Symbol.for("react.fragment"),ck=Object.prototype.hasOwnProperty,dk=sk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fk={key:!0,ref:!0,__self:!0,__source:!0};function My(e,t,n){var r,i={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)ck.call(t,r)&&!fk.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:lk,type:e,key:a,ref:l,props:i,_owner:dk.current}}Iu.Fragment=uk;Iu.jsx=My;Iu.jsxs=My;(function(e){e.exports=Iu})(Hw);const hk=Za.Fragment,ce=Za.jsx,Qe=Za.jsxs;var Bi={},pk={get exports(){return Bi},set exports(e){Bi=e}},en={},af={},mk={get exports(){return af},set exports(e){af=e}},Dy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,oe){var q=I.length;I.push(oe);e:for(;0<q;){var O=q-1>>>1,N=I[O];if(0<i(N,oe))I[O]=oe,I[q]=N,q=O;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var oe=I[0],q=I.pop();if(q!==oe){I[0]=q;e:for(var O=0,N=I.length,B=N>>>1;O<B;){var Q=2*(O+1)-1,Y=I[Q],ne=Q+1,ue=I[ne];if(0>i(Y,q))ne<N&&0>i(ue,Y)?(I[O]=ue,I[ne]=q,O=ne):(I[O]=Y,I[Q]=q,O=Q);else if(ne<N&&0>i(ue,q))I[O]=ue,I[ne]=q,O=ne;else break e}}return oe}function i(I,oe){var q=I.sortIndex-oe.sortIndex;return q!==0?q:I.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var d=[],f=[],m=1,_=null,p=3,g=!1,x=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(I){for(var oe=n(f);oe!==null;){if(oe.callback===null)r(f);else if(oe.startTime<=I)r(f),oe.sortIndex=oe.expirationTime,t(d,oe);else break;oe=n(f)}}function P(I){if(w=!1,S(I),!x)if(n(d)!==null)x=!0,U(R);else{var oe=n(f);oe!==null&&te(P,oe.startTime-I)}}function R(I,oe){x=!1,w&&(w=!1,y(j),j=-1),g=!0;var q=p;try{for(S(oe),_=n(d);_!==null&&(!(_.expirationTime>oe)||I&&!z());){var O=_.callback;if(typeof O=="function"){_.callback=null,p=_.priorityLevel;var N=O(_.expirationTime<=oe);oe=e.unstable_now(),typeof N=="function"?_.callback=N:_===n(d)&&r(d),S(oe)}else r(d);_=n(d)}if(_!==null)var B=!0;else{var Q=n(f);Q!==null&&te(P,Q.startTime-oe),B=!1}return B}finally{_=null,p=q,g=!1}}var M=!1,F=null,j=-1,V=5,$=-1;function z(){return!(e.unstable_now()-$<V)}function ee(){if(F!==null){var I=e.unstable_now();$=I;var oe=!0;try{oe=F(!0,I)}finally{oe?me():(M=!1,F=null)}}else M=!1}var me;if(typeof b=="function")me=function(){b(ee)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,fe=re.port2;re.port1.onmessage=ee,me=function(){fe.postMessage(null)}}else me=function(){C(ee,0)};function U(I){F=I,M||(M=!0,me())}function te(I,oe){j=C(function(){I(e.unstable_now())},oe)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){x||g||(x=!0,U(R))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(I){switch(p){case 1:case 2:case 3:var oe=3;break;default:oe=p}var q=p;p=oe;try{return I()}finally{p=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,oe){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var q=p;p=I;try{return oe()}finally{p=q}},e.unstable_scheduleCallback=function(I,oe,q){var O=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?O+q:O):q=O,I){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=q+N,I={id:m++,callback:oe,priorityLevel:I,startTime:q,expirationTime:N,sortIndex:-1},q>O?(I.sortIndex=q,t(f,I),n(d)===null&&I===n(f)&&(w?(y(j),j=-1):w=!0,te(P,q-O))):(I.sortIndex=N,t(d,I),x||g||(x=!0,U(R))),I},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(I){var oe=p;return function(){var q=p;p=oe;try{return I.apply(this,arguments)}finally{p=q}}}})(Dy);(function(e){e.exports=Dy})(mk);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fy=T,Jt=af;function J(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jy=new Set,Wa={};function Vo(e,t){Ni(e,t),Ni(e+"Capture",t)}function Ni(e,t){for(Wa[e]=t,e=0;e<t.length;e++)jy.add(t[e])}var mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sf=Object.prototype.hasOwnProperty,_k=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,c_={},d_={};function vk(e){return sf.call(d_,e)?!0:sf.call(c_,e)?!1:_k.test(e)?d_[e]=!0:(c_[e]=!0,!1)}function gk(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yk(e,t,n,r){if(t===null||typeof t>"u"||gk(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function jt(e,t,n,r,i,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var Pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pt[e]=new jt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Pt[t]=new jt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pt[e]=new jt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pt[e]=new jt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pt[e]=new jt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pt[e]=new jt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pt[e]=new jt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pt[e]=new jt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pt[e]=new jt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Uh=/[\-:]([a-z])/g;function $h(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Uh,$h);Pt[t]=new jt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Uh,$h);Pt[t]=new jt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Uh,$h);Pt[t]=new jt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pt[e]=new jt(e,1,!1,e.toLowerCase(),null,!1,!1)});Pt.xlinkHref=new jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pt[e]=new jt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zh(e,t,n,r){var i=Pt.hasOwnProperty(t)?Pt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(yk(t,n,i,r)&&(n=null),r||i===null?vk(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var xr=Fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gs=Symbol.for("react.element"),ui=Symbol.for("react.portal"),ci=Symbol.for("react.fragment"),Hh=Symbol.for("react.strict_mode"),lf=Symbol.for("react.profiler"),Uy=Symbol.for("react.provider"),$y=Symbol.for("react.context"),Wh=Symbol.for("react.forward_ref"),uf=Symbol.for("react.suspense"),cf=Symbol.for("react.suspense_list"),Vh=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy"),Zy=Symbol.for("react.offscreen"),f_=Symbol.iterator;function fa(e){return e===null||typeof e!="object"?null:(e=f_&&e[f_]||e["@@iterator"],typeof e=="function"?e:null)}var Je=Object.assign,ad;function Pa(e){if(ad===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ad=t&&t[1]||""}return`
`+ad+e}var sd=!1;function ld(e,t){if(!e||sd)return"";sd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),a=r.stack.split(`
`),l=i.length-1,u=a.length-1;1<=l&&0<=u&&i[l]!==a[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==a[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==a[u]){var d=`
`+i[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=u);break}}}finally{sd=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pa(e):""}function bk(e){switch(e.tag){case 5:return Pa(e.type);case 16:return Pa("Lazy");case 13:return Pa("Suspense");case 19:return Pa("SuspenseList");case 0:case 2:case 15:return e=ld(e.type,!1),e;case 11:return e=ld(e.type.render,!1),e;case 1:return e=ld(e.type,!0),e;default:return""}}function df(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ci:return"Fragment";case ui:return"Portal";case lf:return"Profiler";case Hh:return"StrictMode";case uf:return"Suspense";case cf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $y:return(e.displayName||"Context")+".Consumer";case Uy:return(e._context.displayName||"Context")+".Provider";case Wh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vh:return t=e.displayName||null,t!==null?t:df(e.type)||"Memo";case Ar:t=e._payload,e=e._init;try{return df(e(t))}catch{}}return null}function xk(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return df(t);case 8:return t===Hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function no(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wk(e){var t=Hy(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xs(e){e._valueTracker||(e._valueTracker=wk(e))}function Wy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hy(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function jl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ff(e,t){var n=t.checked;return Je({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function h_(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=no(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Vy(e,t){t=t.checked,t!=null&&Zh(e,"checked",t,!1)}function hf(e,t){Vy(e,t);var n=no(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pf(e,t.type,n):t.hasOwnProperty("defaultValue")&&pf(e,t.type,no(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function p_(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pf(e,t,n){(t!=="number"||jl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ca=Array.isArray;function wi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+no(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function mf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(J(91));return Je({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function m_(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(J(92));if(Ca(n)){if(1<n.length)throw Error(J(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:no(n)}}function qy(e,t){var n=no(t.value),r=no(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function __(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ky(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _f(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ky(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Js,Qy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Js=Js||document.createElement("div"),Js.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Js.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Va(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kk=["Webkit","ms","Moz","O"];Object.keys(Ra).forEach(function(e){kk.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ra[t]=Ra[e]})});function Gy(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ra.hasOwnProperty(e)&&Ra[e]?(""+t).trim():t+"px"}function Xy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Gy(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Sk=Je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vf(e,t){if(t){if(Sk[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(J(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(J(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(J(61))}if(t.style!=null&&typeof t.style!="object")throw Error(J(62))}}function gf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yf=null;function qh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bf=null,ki=null,Si=null;function v_(e){if(e=bs(e)){if(typeof bf!="function")throw Error(J(280));var t=e.stateNode;t&&(t=Uu(t),bf(e.stateNode,e.type,t))}}function Jy(e){ki?Si?Si.push(e):Si=[e]:ki=e}function Yy(){if(ki){var e=ki,t=Si;if(Si=ki=null,v_(e),t)for(e=0;e<t.length;e++)v_(t[e])}}function eb(e,t){return e(t)}function tb(){}var ud=!1;function nb(e,t,n){if(ud)return e(t,n);ud=!0;try{return eb(e,t,n)}finally{ud=!1,(ki!==null||Si!==null)&&(tb(),Yy())}}function qa(e,t){var n=e.stateNode;if(n===null)return null;var r=Uu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(J(231,t,typeof n));return n}var xf=!1;if(mr)try{var ha={};Object.defineProperty(ha,"passive",{get:function(){xf=!0}}),window.addEventListener("test",ha,ha),window.removeEventListener("test",ha,ha)}catch{xf=!1}function Pk(e,t,n,r,i,a,l,u,d){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(m){this.onError(m)}}var za=!1,Ul=null,$l=!1,wf=null,Ck={onError:function(e){za=!0,Ul=e}};function Ek(e,t,n,r,i,a,l,u,d){za=!1,Ul=null,Pk.apply(Ck,arguments)}function Ok(e,t,n,r,i,a,l,u,d){if(Ek.apply(this,arguments),za){if(za){var f=Ul;za=!1,Ul=null}else throw Error(J(198));$l||($l=!0,wf=f)}}function qo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function rb(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g_(e){if(qo(e)!==e)throw Error(J(188))}function Tk(e){var t=e.alternate;if(!t){if(t=qo(e),t===null)throw Error(J(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return g_(i),e;if(a===r)return g_(i),t;a=a.sibling}throw Error(J(188))}if(n.return!==r.return)n=i,r=a;else{for(var l=!1,u=i.child;u;){if(u===n){l=!0,n=i,r=a;break}if(u===r){l=!0,r=i,n=a;break}u=u.sibling}if(!l){for(u=a.child;u;){if(u===n){l=!0,n=a,r=i;break}if(u===r){l=!0,r=a,n=i;break}u=u.sibling}if(!l)throw Error(J(189))}}if(n.alternate!==r)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?e:t}function ob(e){return e=Tk(e),e!==null?ib(e):null}function ib(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ib(e);if(t!==null)return t;e=e.sibling}return null}var ab=Jt.unstable_scheduleCallback,y_=Jt.unstable_cancelCallback,Lk=Jt.unstable_shouldYield,Rk=Jt.unstable_requestPaint,ot=Jt.unstable_now,zk=Jt.unstable_getCurrentPriorityLevel,Kh=Jt.unstable_ImmediatePriority,sb=Jt.unstable_UserBlockingPriority,Zl=Jt.unstable_NormalPriority,Ak=Jt.unstable_LowPriority,lb=Jt.unstable_IdlePriority,Mu=null,qn=null;function Bk(e){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(Mu,e,void 0,(e.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:Mk,Nk=Math.log,Ik=Math.LN2;function Mk(e){return e>>>=0,e===0?32:31-(Nk(e)/Ik|0)|0}var Ys=64,el=4194304;function Ea(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~i;u!==0?r=Ea(u):(a&=l,a!==0&&(r=Ea(a)))}else l=n&~i,l!==0?r=Ea(l):a!==0&&(r=Ea(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-En(t),i=1<<n,r|=e[n],t&=~i;return r}function Dk(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fk(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-En(a),u=1<<l,d=i[l];d===-1?(!(u&n)||u&r)&&(i[l]=Dk(u,t)):d<=t&&(e.expiredLanes|=u),a&=~u}}function kf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ub(){var e=Ys;return Ys<<=1,!(Ys&4194240)&&(Ys=64),e}function cd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-En(t),e[t]=n}function jk(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-En(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Qh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-En(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Ie=0;function cb(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var db,Gh,fb,hb,pb,Sf=!1,tl=[],$r=null,Zr=null,Hr=null,Ka=new Map,Qa=new Map,Ir=[],Uk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function b_(e,t){switch(e){case"focusin":case"focusout":$r=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":Ka.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qa.delete(t.pointerId)}}function pa(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=bs(t),t!==null&&Gh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function $k(e,t,n,r,i){switch(t){case"focusin":return $r=pa($r,e,t,n,r,i),!0;case"dragenter":return Zr=pa(Zr,e,t,n,r,i),!0;case"mouseover":return Hr=pa(Hr,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Ka.set(a,pa(Ka.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Qa.set(a,pa(Qa.get(a)||null,e,t,n,r,i)),!0}return!1}function mb(e){var t=Eo(e.target);if(t!==null){var n=qo(t);if(n!==null){if(t=n.tag,t===13){if(t=rb(n),t!==null){e.blockedOn=t,pb(e.priority,function(){fb(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Pf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yf=r,n.target.dispatchEvent(r),yf=null}else return t=bs(n),t!==null&&Gh(t),e.blockedOn=n,!1;t.shift()}return!0}function x_(e,t,n){xl(e)&&n.delete(t)}function Zk(){Sf=!1,$r!==null&&xl($r)&&($r=null),Zr!==null&&xl(Zr)&&(Zr=null),Hr!==null&&xl(Hr)&&(Hr=null),Ka.forEach(x_),Qa.forEach(x_)}function ma(e,t){e.blockedOn===t&&(e.blockedOn=null,Sf||(Sf=!0,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,Zk)))}function Ga(e){function t(i){return ma(i,e)}if(0<tl.length){ma(tl[0],e);for(var n=1;n<tl.length;n++){var r=tl[n];r.blockedOn===e&&(r.blockedOn=null)}}for($r!==null&&ma($r,e),Zr!==null&&ma(Zr,e),Hr!==null&&ma(Hr,e),Ka.forEach(t),Qa.forEach(t),n=0;n<Ir.length;n++)r=Ir[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ir.length&&(n=Ir[0],n.blockedOn===null);)mb(n),n.blockedOn===null&&Ir.shift()}var Pi=xr.ReactCurrentBatchConfig,Wl=!0;function Hk(e,t,n,r){var i=Ie,a=Pi.transition;Pi.transition=null;try{Ie=1,Xh(e,t,n,r)}finally{Ie=i,Pi.transition=a}}function Wk(e,t,n,r){var i=Ie,a=Pi.transition;Pi.transition=null;try{Ie=4,Xh(e,t,n,r)}finally{Ie=i,Pi.transition=a}}function Xh(e,t,n,r){if(Wl){var i=Pf(e,t,n,r);if(i===null)bd(e,t,r,Vl,n),b_(e,r);else if($k(i,e,t,n,r))r.stopPropagation();else if(b_(e,r),t&4&&-1<Uk.indexOf(e)){for(;i!==null;){var a=bs(i);if(a!==null&&db(a),a=Pf(e,t,n,r),a===null&&bd(e,t,r,Vl,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else bd(e,t,r,null,n)}}var Vl=null;function Pf(e,t,n,r){if(Vl=null,e=qh(r),e=Eo(e),e!==null)if(t=qo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=rb(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vl=e,null}function _b(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zk()){case Kh:return 1;case sb:return 4;case Zl:case Ak:return 16;case lb:return 536870912;default:return 16}default:return 16}}var Fr=null,Jh=null,wl=null;function vb(){if(wl)return wl;var e,t=Jh,n=t.length,r,i="value"in Fr?Fr.value:Fr.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[a-r];r++);return wl=i.slice(e,1<r?1-r:void 0)}function kl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function nl(){return!0}function w_(){return!1}function tn(e){function t(n,r,i,a,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(a):a[u]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?nl:w_,this.isPropagationStopped=w_,this}return Je(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),t}var Vi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yh=tn(Vi),ys=Je({},Vi,{view:0,detail:0}),Vk=tn(ys),dd,fd,_a,Du=Je({},ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ep,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_a&&(_a&&e.type==="mousemove"?(dd=e.screenX-_a.screenX,fd=e.screenY-_a.screenY):fd=dd=0,_a=e),dd)},movementY:function(e){return"movementY"in e?e.movementY:fd}}),k_=tn(Du),qk=Je({},Du,{dataTransfer:0}),Kk=tn(qk),Qk=Je({},ys,{relatedTarget:0}),hd=tn(Qk),Gk=Je({},Vi,{animationName:0,elapsedTime:0,pseudoElement:0}),Xk=tn(Gk),Jk=Je({},Vi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yk=tn(Jk),eS=Je({},Vi,{data:0}),S_=tn(eS),tS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rS[e])?!!t[e]:!1}function ep(){return oS}var iS=Je({},ys,{key:function(e){if(e.key){var t=tS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=kl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ep,charCode:function(e){return e.type==="keypress"?kl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?kl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),aS=tn(iS),sS=Je({},Du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),P_=tn(sS),lS=Je({},ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ep}),uS=tn(lS),cS=Je({},Vi,{propertyName:0,elapsedTime:0,pseudoElement:0}),dS=tn(cS),fS=Je({},Du,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hS=tn(fS),pS=[9,13,27,32],tp=mr&&"CompositionEvent"in window,Aa=null;mr&&"documentMode"in document&&(Aa=document.documentMode);var mS=mr&&"TextEvent"in window&&!Aa,gb=mr&&(!tp||Aa&&8<Aa&&11>=Aa),C_=String.fromCharCode(32),E_=!1;function yb(e,t){switch(e){case"keyup":return pS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bb(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var di=!1;function _S(e,t){switch(e){case"compositionend":return bb(t);case"keypress":return t.which!==32?null:(E_=!0,C_);case"textInput":return e=t.data,e===C_&&E_?null:e;default:return null}}function vS(e,t){if(di)return e==="compositionend"||!tp&&yb(e,t)?(e=vb(),wl=Jh=Fr=null,di=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gb&&t.locale!=="ko"?null:t.data;default:return null}}var gS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function O_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gS[e.type]:t==="textarea"}function xb(e,t,n,r){Jy(r),t=ql(t,"onChange"),0<t.length&&(n=new Yh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ba=null,Xa=null;function yS(e){zb(e,0)}function Fu(e){var t=pi(e);if(Wy(t))return e}function bS(e,t){if(e==="change")return t}var wb=!1;if(mr){var pd;if(mr){var md="oninput"in document;if(!md){var T_=document.createElement("div");T_.setAttribute("oninput","return;"),md=typeof T_.oninput=="function"}pd=md}else pd=!1;wb=pd&&(!document.documentMode||9<document.documentMode)}function L_(){Ba&&(Ba.detachEvent("onpropertychange",kb),Xa=Ba=null)}function kb(e){if(e.propertyName==="value"&&Fu(Xa)){var t=[];xb(t,Xa,e,qh(e)),nb(yS,t)}}function xS(e,t,n){e==="focusin"?(L_(),Ba=t,Xa=n,Ba.attachEvent("onpropertychange",kb)):e==="focusout"&&L_()}function wS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fu(Xa)}function kS(e,t){if(e==="click")return Fu(t)}function SS(e,t){if(e==="input"||e==="change")return Fu(t)}function PS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rn=typeof Object.is=="function"?Object.is:PS;function Ja(e,t){if(Rn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sf.call(t,i)||!Rn(e[i],t[i]))return!1}return!0}function R_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function z_(e,t){var n=R_(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=R_(n)}}function Sb(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sb(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pb(){for(var e=window,t=jl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jl(e.document)}return t}function np(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function CS(e){var t=Pb(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Sb(n.ownerDocument.documentElement,n)){if(r!==null&&np(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=z_(n,a);var l=z_(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ES=mr&&"documentMode"in document&&11>=document.documentMode,fi=null,Cf=null,Na=null,Ef=!1;function A_(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ef||fi==null||fi!==jl(r)||(r=fi,"selectionStart"in r&&np(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Na&&Ja(Na,r)||(Na=r,r=ql(Cf,"onSelect"),0<r.length&&(t=new Yh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fi)))}function rl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hi={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionend:rl("Transition","TransitionEnd")},_d={},Cb={};mr&&(Cb=document.createElement("div").style,"AnimationEvent"in window||(delete hi.animationend.animation,delete hi.animationiteration.animation,delete hi.animationstart.animation),"TransitionEvent"in window||delete hi.transitionend.transition);function ju(e){if(_d[e])return _d[e];if(!hi[e])return e;var t=hi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cb)return _d[e]=t[n];return e}var Eb=ju("animationend"),Ob=ju("animationiteration"),Tb=ju("animationstart"),Lb=ju("transitionend"),Rb=new Map,B_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function uo(e,t){Rb.set(e,t),Vo(t,[e])}for(var vd=0;vd<B_.length;vd++){var gd=B_[vd],OS=gd.toLowerCase(),TS=gd[0].toUpperCase()+gd.slice(1);uo(OS,"on"+TS)}uo(Eb,"onAnimationEnd");uo(Ob,"onAnimationIteration");uo(Tb,"onAnimationStart");uo("dblclick","onDoubleClick");uo("focusin","onFocus");uo("focusout","onBlur");uo(Lb,"onTransitionEnd");Ni("onMouseEnter",["mouseout","mouseover"]);Ni("onMouseLeave",["mouseout","mouseover"]);Ni("onPointerEnter",["pointerout","pointerover"]);Ni("onPointerLeave",["pointerout","pointerover"]);Vo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oa));function N_(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ok(r,t,void 0,e),e.currentTarget=null}function zb(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],d=u.instance,f=u.currentTarget;if(u=u.listener,d!==a&&i.isPropagationStopped())break e;N_(i,u,f),a=d}else for(l=0;l<r.length;l++){if(u=r[l],d=u.instance,f=u.currentTarget,u=u.listener,d!==a&&i.isPropagationStopped())break e;N_(i,u,f),a=d}}}if($l)throw e=wf,$l=!1,wf=null,e}function Ze(e,t){var n=t[zf];n===void 0&&(n=t[zf]=new Set);var r=e+"__bubble";n.has(r)||(Ab(t,e,2,!1),n.add(r))}function yd(e,t,n){var r=0;t&&(r|=4),Ab(n,e,r,t)}var ol="_reactListening"+Math.random().toString(36).slice(2);function Ya(e){if(!e[ol]){e[ol]=!0,jy.forEach(function(n){n!=="selectionchange"&&(LS.has(n)||yd(n,!1,e),yd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ol]||(t[ol]=!0,yd("selectionchange",!1,t))}}function Ab(e,t,n,r){switch(_b(t)){case 1:var i=Hk;break;case 4:i=Wk;break;default:i=Xh}n=i.bind(null,t,n,e),i=void 0,!xf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function bd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;u!==null;){if(l=Eo(u),l===null)return;if(d=l.tag,d===5||d===6){r=a=l;continue e}u=u.parentNode}}r=r.return}nb(function(){var f=a,m=qh(n),_=[];e:{var p=Rb.get(e);if(p!==void 0){var g=Yh,x=e;switch(e){case"keypress":if(kl(n)===0)break e;case"keydown":case"keyup":g=aS;break;case"focusin":x="focus",g=hd;break;case"focusout":x="blur",g=hd;break;case"beforeblur":case"afterblur":g=hd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=k_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Kk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=uS;break;case Eb:case Ob:case Tb:g=Xk;break;case Lb:g=dS;break;case"scroll":g=Vk;break;case"wheel":g=hS;break;case"copy":case"cut":case"paste":g=Yk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=P_}var w=(t&4)!==0,C=!w&&e==="scroll",y=w?p!==null?p+"Capture":null:p;w=[];for(var b=f,S;b!==null;){S=b;var P=S.stateNode;if(S.tag===5&&P!==null&&(S=P,y!==null&&(P=qa(b,y),P!=null&&w.push(es(b,P,S)))),C)break;b=b.return}0<w.length&&(p=new g(p,x,null,n,m),_.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==yf&&(x=n.relatedTarget||n.fromElement)&&(Eo(x)||x[_r]))break e;if((g||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=f,x=x?Eo(x):null,x!==null&&(C=qo(x),x!==C||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=f),g!==x)){if(w=k_,P="onMouseLeave",y="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(w=P_,P="onPointerLeave",y="onPointerEnter",b="pointer"),C=g==null?p:pi(g),S=x==null?p:pi(x),p=new w(P,b+"leave",g,n,m),p.target=C,p.relatedTarget=S,P=null,Eo(m)===f&&(w=new w(y,b+"enter",x,n,m),w.target=S,w.relatedTarget=C,P=w),C=P,g&&x)t:{for(w=g,y=x,b=0,S=w;S;S=ii(S))b++;for(S=0,P=y;P;P=ii(P))S++;for(;0<b-S;)w=ii(w),b--;for(;0<S-b;)y=ii(y),S--;for(;b--;){if(w===y||y!==null&&w===y.alternate)break t;w=ii(w),y=ii(y)}w=null}else w=null;g!==null&&I_(_,p,g,w,!1),x!==null&&C!==null&&I_(_,C,x,w,!0)}}e:{if(p=f?pi(f):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var R=bS;else if(O_(p))if(wb)R=SS;else{R=wS;var M=xS}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(R=kS);if(R&&(R=R(e,f))){xb(_,R,n,m);break e}M&&M(e,p,f),e==="focusout"&&(M=p._wrapperState)&&M.controlled&&p.type==="number"&&pf(p,"number",p.value)}switch(M=f?pi(f):window,e){case"focusin":(O_(M)||M.contentEditable==="true")&&(fi=M,Cf=f,Na=null);break;case"focusout":Na=Cf=fi=null;break;case"mousedown":Ef=!0;break;case"contextmenu":case"mouseup":case"dragend":Ef=!1,A_(_,n,m);break;case"selectionchange":if(ES)break;case"keydown":case"keyup":A_(_,n,m)}var F;if(tp)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else di?yb(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(gb&&n.locale!=="ko"&&(di||j!=="onCompositionStart"?j==="onCompositionEnd"&&di&&(F=vb()):(Fr=m,Jh="value"in Fr?Fr.value:Fr.textContent,di=!0)),M=ql(f,j),0<M.length&&(j=new S_(j,e,null,n,m),_.push({event:j,listeners:M}),F?j.data=F:(F=bb(n),F!==null&&(j.data=F)))),(F=mS?_S(e,n):vS(e,n))&&(f=ql(f,"onBeforeInput"),0<f.length&&(m=new S_("onBeforeInput","beforeinput",null,n,m),_.push({event:m,listeners:f}),m.data=F))}zb(_,t)})}function es(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ql(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=qa(e,n),a!=null&&r.unshift(es(e,a,i)),a=qa(e,t),a!=null&&r.push(es(e,a,i))),e=e.return}return r}function ii(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function I_(e,t,n,r,i){for(var a=t._reactName,l=[];n!==null&&n!==r;){var u=n,d=u.alternate,f=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&f!==null&&(u=f,i?(d=qa(n,a),d!=null&&l.unshift(es(n,d,u))):i||(d=qa(n,a),d!=null&&l.push(es(n,d,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var RS=/\r\n?/g,zS=/\u0000|\uFFFD/g;function M_(e){return(typeof e=="string"?e:""+e).replace(RS,`
`).replace(zS,"")}function il(e,t,n){if(t=M_(t),M_(e)!==t&&n)throw Error(J(425))}function Kl(){}var Of=null,Tf=null;function Lf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rf=typeof setTimeout=="function"?setTimeout:void 0,AS=typeof clearTimeout=="function"?clearTimeout:void 0,D_=typeof Promise=="function"?Promise:void 0,BS=typeof queueMicrotask=="function"?queueMicrotask:typeof D_<"u"?function(e){return D_.resolve(null).then(e).catch(NS)}:Rf;function NS(e){setTimeout(function(){throw e})}function xd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ga(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ga(t)}function Wr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function F_(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qi=Math.random().toString(36).slice(2),Hn="__reactFiber$"+qi,ts="__reactProps$"+qi,_r="__reactContainer$"+qi,zf="__reactEvents$"+qi,IS="__reactListeners$"+qi,MS="__reactHandles$"+qi;function Eo(e){var t=e[Hn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_r]||n[Hn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=F_(e);e!==null;){if(n=e[Hn])return n;e=F_(e)}return t}e=n,n=e.parentNode}return null}function bs(e){return e=e[Hn]||e[_r],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(J(33))}function Uu(e){return e[ts]||null}var Af=[],mi=-1;function co(e){return{current:e}}function He(e){0>mi||(e.current=Af[mi],Af[mi]=null,mi--)}function $e(e,t){mi++,Af[mi]=e.current,e.current=t}var ro={},zt=co(ro),Wt=co(!1),Mo=ro;function Ii(e,t){var n=e.type.contextTypes;if(!n)return ro;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Vt(e){return e=e.childContextTypes,e!=null}function Ql(){He(Wt),He(zt)}function j_(e,t,n){if(zt.current!==ro)throw Error(J(168));$e(zt,t),$e(Wt,n)}function Bb(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(J(108,xk(e)||"Unknown",i));return Je({},n,r)}function Gl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ro,Mo=zt.current,$e(zt,e),$e(Wt,Wt.current),!0}function U_(e,t,n){var r=e.stateNode;if(!r)throw Error(J(169));n?(e=Bb(e,t,Mo),r.__reactInternalMemoizedMergedChildContext=e,He(Wt),He(zt),$e(zt,e)):He(Wt),$e(Wt,n)}var cr=null,$u=!1,wd=!1;function Nb(e){cr===null?cr=[e]:cr.push(e)}function DS(e){$u=!0,Nb(e)}function fo(){if(!wd&&cr!==null){wd=!0;var e=0,t=Ie;try{var n=cr;for(Ie=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}cr=null,$u=!1}catch(i){throw cr!==null&&(cr=cr.slice(e+1)),ab(Kh,fo),i}finally{Ie=t,wd=!1}}return null}var _i=[],vi=0,Xl=null,Jl=0,ln=[],un=0,Do=null,dr=1,fr="";function ko(e,t){_i[vi++]=Jl,_i[vi++]=Xl,Xl=e,Jl=t}function Ib(e,t,n){ln[un++]=dr,ln[un++]=fr,ln[un++]=Do,Do=e;var r=dr;e=fr;var i=32-En(r)-1;r&=~(1<<i),n+=1;var a=32-En(t)+i;if(30<a){var l=i-i%5;a=(r&(1<<l)-1).toString(32),r>>=l,i-=l,dr=1<<32-En(t)+i|n<<i|r,fr=a+e}else dr=1<<a|n<<i|r,fr=e}function rp(e){e.return!==null&&(ko(e,1),Ib(e,1,0))}function op(e){for(;e===Xl;)Xl=_i[--vi],_i[vi]=null,Jl=_i[--vi],_i[vi]=null;for(;e===Do;)Do=ln[--un],ln[un]=null,fr=ln[--un],ln[un]=null,dr=ln[--un],ln[un]=null}var Xt=null,Gt=null,Ve=!1,Pn=null;function Mb(e,t){var n=cn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $_(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xt=e,Gt=Wr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xt=e,Gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Do!==null?{id:dr,overflow:fr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=cn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xt=e,Gt=null,!0):!1;default:return!1}}function Bf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Nf(e){if(Ve){var t=Gt;if(t){var n=t;if(!$_(e,t)){if(Bf(e))throw Error(J(418));t=Wr(n.nextSibling);var r=Xt;t&&$_(e,t)?Mb(r,n):(e.flags=e.flags&-4097|2,Ve=!1,Xt=e)}}else{if(Bf(e))throw Error(J(418));e.flags=e.flags&-4097|2,Ve=!1,Xt=e}}}function Z_(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xt=e}function al(e){if(e!==Xt)return!1;if(!Ve)return Z_(e),Ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Lf(e.type,e.memoizedProps)),t&&(t=Gt)){if(Bf(e))throw Db(),Error(J(418));for(;t;)Mb(e,t),t=Wr(t.nextSibling)}if(Z_(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Gt=Wr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Gt=null}}else Gt=Xt?Wr(e.stateNode.nextSibling):null;return!0}function Db(){for(var e=Gt;e;)e=Wr(e.nextSibling)}function Mi(){Gt=Xt=null,Ve=!1}function ip(e){Pn===null?Pn=[e]:Pn.push(e)}var FS=xr.ReactCurrentBatchConfig;function kn(e,t){if(e&&e.defaultProps){t=Je({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Yl=co(null),eu=null,gi=null,ap=null;function sp(){ap=gi=eu=null}function lp(e){var t=Yl.current;He(Yl),e._currentValue=t}function If(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ci(e,t){eu=e,ap=gi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ht=!0),e.firstContext=null)}function hn(e){var t=e._currentValue;if(ap!==e)if(e={context:e,memoizedValue:t,next:null},gi===null){if(eu===null)throw Error(J(308));gi=e,eu.dependencies={lanes:0,firstContext:e}}else gi=gi.next=e;return t}var Oo=null;function up(e){Oo===null?Oo=[e]:Oo.push(e)}function Fb(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,up(t)):(n.next=i.next,i.next=n),t.interleaved=n,vr(e,r)}function vr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Br=!1;function cp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jb(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function hr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Le&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,vr(e,n)}return i=r.interleaved,i===null?(t.next=t,up(r)):(t.next=i.next,i.next=t),r.interleaved=t,vr(e,n)}function Sl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qh(e,n)}}function H_(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function tu(e,t,n,r){var i=e.updateQueue;Br=!1;var a=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var d=u,f=d.next;d.next=null,l===null?a=f:l.next=f,l=d;var m=e.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==l&&(u===null?m.firstBaseUpdate=f:u.next=f,m.lastBaseUpdate=d))}if(a!==null){var _=i.baseState;l=0,m=f=d=null,u=a;do{var p=u.lane,g=u.eventTime;if((r&p)===p){m!==null&&(m=m.next={eventTime:g,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var x=e,w=u;switch(p=t,g=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){_=x.call(g,_,p);break e}_=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,p=typeof x=="function"?x.call(g,_,p):x,p==null)break e;_=Je({},_,p);break e;case 2:Br=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[u]:p.push(u))}else g={eventTime:g,lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(f=m=g,d=_):m=m.next=g,l|=p;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;p=u,u=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(m===null&&(d=_),i.baseState=d,i.firstBaseUpdate=f,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);jo|=l,e.lanes=l,e.memoizedState=_}}function W_(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(J(191,i));i.call(r)}}}var Ub=new Fy.Component().refs;function Mf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Je({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Zu={isMounted:function(e){return(e=e._reactInternals)?qo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Dt(),i=Kr(e),a=hr(r,i);a.payload=t,n!=null&&(a.callback=n),t=Vr(e,a,i),t!==null&&(On(t,e,i,r),Sl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Dt(),i=Kr(e),a=hr(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Vr(e,a,i),t!==null&&(On(t,e,i,r),Sl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Dt(),r=Kr(e),i=hr(n,r);i.tag=2,t!=null&&(i.callback=t),t=Vr(e,i,r),t!==null&&(On(t,e,r,n),Sl(t,e,r))}};function V_(e,t,n,r,i,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,l):t.prototype&&t.prototype.isPureReactComponent?!Ja(n,r)||!Ja(i,a):!0}function $b(e,t,n){var r=!1,i=ro,a=t.contextType;return typeof a=="object"&&a!==null?a=hn(a):(i=Vt(t)?Mo:zt.current,r=t.contextTypes,a=(r=r!=null)?Ii(e,i):ro),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Zu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function q_(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Zu.enqueueReplaceState(t,t.state,null)}function Df(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Ub,cp(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=hn(a):(a=Vt(t)?Mo:zt.current,i.context=Ii(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Mf(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Zu.enqueueReplaceState(i,i.state,null),tu(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function va(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(J(309));var r=n.stateNode}if(!r)throw Error(J(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var u=i.refs;u===Ub&&(u=i.refs={}),l===null?delete u[a]:u[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(J(284));if(!n._owner)throw Error(J(290,e))}return e}function sl(e,t){throw e=Object.prototype.toString.call(t),Error(J(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function K_(e){var t=e._init;return t(e._payload)}function Zb(e){function t(y,b){if(e){var S=y.deletions;S===null?(y.deletions=[b],y.flags|=16):S.push(b)}}function n(y,b){if(!e)return null;for(;b!==null;)t(y,b),b=b.sibling;return null}function r(y,b){for(y=new Map;b!==null;)b.key!==null?y.set(b.key,b):y.set(b.index,b),b=b.sibling;return y}function i(y,b){return y=Qr(y,b),y.index=0,y.sibling=null,y}function a(y,b,S){return y.index=S,e?(S=y.alternate,S!==null?(S=S.index,S<b?(y.flags|=2,b):S):(y.flags|=2,b)):(y.flags|=1048576,b)}function l(y){return e&&y.alternate===null&&(y.flags|=2),y}function u(y,b,S,P){return b===null||b.tag!==6?(b=Td(S,y.mode,P),b.return=y,b):(b=i(b,S),b.return=y,b)}function d(y,b,S,P){var R=S.type;return R===ci?m(y,b,S.props.children,P,S.key):b!==null&&(b.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ar&&K_(R)===b.type)?(P=i(b,S.props),P.ref=va(y,b,S),P.return=y,P):(P=Ll(S.type,S.key,S.props,null,y.mode,P),P.ref=va(y,b,S),P.return=y,P)}function f(y,b,S,P){return b===null||b.tag!==4||b.stateNode.containerInfo!==S.containerInfo||b.stateNode.implementation!==S.implementation?(b=Ld(S,y.mode,P),b.return=y,b):(b=i(b,S.children||[]),b.return=y,b)}function m(y,b,S,P,R){return b===null||b.tag!==7?(b=Bo(S,y.mode,P,R),b.return=y,b):(b=i(b,S),b.return=y,b)}function _(y,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Td(""+b,y.mode,S),b.return=y,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Gs:return S=Ll(b.type,b.key,b.props,null,y.mode,S),S.ref=va(y,null,b),S.return=y,S;case ui:return b=Ld(b,y.mode,S),b.return=y,b;case Ar:var P=b._init;return _(y,P(b._payload),S)}if(Ca(b)||fa(b))return b=Bo(b,y.mode,S,null),b.return=y,b;sl(y,b)}return null}function p(y,b,S,P){var R=b!==null?b.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return R!==null?null:u(y,b,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Gs:return S.key===R?d(y,b,S,P):null;case ui:return S.key===R?f(y,b,S,P):null;case Ar:return R=S._init,p(y,b,R(S._payload),P)}if(Ca(S)||fa(S))return R!==null?null:m(y,b,S,P,null);sl(y,S)}return null}function g(y,b,S,P,R){if(typeof P=="string"&&P!==""||typeof P=="number")return y=y.get(S)||null,u(b,y,""+P,R);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Gs:return y=y.get(P.key===null?S:P.key)||null,d(b,y,P,R);case ui:return y=y.get(P.key===null?S:P.key)||null,f(b,y,P,R);case Ar:var M=P._init;return g(y,b,S,M(P._payload),R)}if(Ca(P)||fa(P))return y=y.get(S)||null,m(b,y,P,R,null);sl(b,P)}return null}function x(y,b,S,P){for(var R=null,M=null,F=b,j=b=0,V=null;F!==null&&j<S.length;j++){F.index>j?(V=F,F=null):V=F.sibling;var $=p(y,F,S[j],P);if($===null){F===null&&(F=V);break}e&&F&&$.alternate===null&&t(y,F),b=a($,b,j),M===null?R=$:M.sibling=$,M=$,F=V}if(j===S.length)return n(y,F),Ve&&ko(y,j),R;if(F===null){for(;j<S.length;j++)F=_(y,S[j],P),F!==null&&(b=a(F,b,j),M===null?R=F:M.sibling=F,M=F);return Ve&&ko(y,j),R}for(F=r(y,F);j<S.length;j++)V=g(F,y,j,S[j],P),V!==null&&(e&&V.alternate!==null&&F.delete(V.key===null?j:V.key),b=a(V,b,j),M===null?R=V:M.sibling=V,M=V);return e&&F.forEach(function(z){return t(y,z)}),Ve&&ko(y,j),R}function w(y,b,S,P){var R=fa(S);if(typeof R!="function")throw Error(J(150));if(S=R.call(S),S==null)throw Error(J(151));for(var M=R=null,F=b,j=b=0,V=null,$=S.next();F!==null&&!$.done;j++,$=S.next()){F.index>j?(V=F,F=null):V=F.sibling;var z=p(y,F,$.value,P);if(z===null){F===null&&(F=V);break}e&&F&&z.alternate===null&&t(y,F),b=a(z,b,j),M===null?R=z:M.sibling=z,M=z,F=V}if($.done)return n(y,F),Ve&&ko(y,j),R;if(F===null){for(;!$.done;j++,$=S.next())$=_(y,$.value,P),$!==null&&(b=a($,b,j),M===null?R=$:M.sibling=$,M=$);return Ve&&ko(y,j),R}for(F=r(y,F);!$.done;j++,$=S.next())$=g(F,y,j,$.value,P),$!==null&&(e&&$.alternate!==null&&F.delete($.key===null?j:$.key),b=a($,b,j),M===null?R=$:M.sibling=$,M=$);return e&&F.forEach(function(ee){return t(y,ee)}),Ve&&ko(y,j),R}function C(y,b,S,P){if(typeof S=="object"&&S!==null&&S.type===ci&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Gs:e:{for(var R=S.key,M=b;M!==null;){if(M.key===R){if(R=S.type,R===ci){if(M.tag===7){n(y,M.sibling),b=i(M,S.props.children),b.return=y,y=b;break e}}else if(M.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ar&&K_(R)===M.type){n(y,M.sibling),b=i(M,S.props),b.ref=va(y,M,S),b.return=y,y=b;break e}n(y,M);break}else t(y,M);M=M.sibling}S.type===ci?(b=Bo(S.props.children,y.mode,P,S.key),b.return=y,y=b):(P=Ll(S.type,S.key,S.props,null,y.mode,P),P.ref=va(y,b,S),P.return=y,y=P)}return l(y);case ui:e:{for(M=S.key;b!==null;){if(b.key===M)if(b.tag===4&&b.stateNode.containerInfo===S.containerInfo&&b.stateNode.implementation===S.implementation){n(y,b.sibling),b=i(b,S.children||[]),b.return=y,y=b;break e}else{n(y,b);break}else t(y,b);b=b.sibling}b=Ld(S,y.mode,P),b.return=y,y=b}return l(y);case Ar:return M=S._init,C(y,b,M(S._payload),P)}if(Ca(S))return x(y,b,S,P);if(fa(S))return w(y,b,S,P);sl(y,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,b!==null&&b.tag===6?(n(y,b.sibling),b=i(b,S),b.return=y,y=b):(n(y,b),b=Td(S,y.mode,P),b.return=y,y=b),l(y)):n(y,b)}return C}var Di=Zb(!0),Hb=Zb(!1),xs={},Kn=co(xs),ns=co(xs),rs=co(xs);function To(e){if(e===xs)throw Error(J(174));return e}function dp(e,t){switch($e(rs,t),$e(ns,e),$e(Kn,xs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_f(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_f(t,e)}He(Kn),$e(Kn,t)}function Fi(){He(Kn),He(ns),He(rs)}function Wb(e){To(rs.current);var t=To(Kn.current),n=_f(t,e.type);t!==n&&($e(ns,e),$e(Kn,n))}function fp(e){ns.current===e&&(He(Kn),He(ns))}var Ge=co(0);function nu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kd=[];function hp(){for(var e=0;e<kd.length;e++)kd[e]._workInProgressVersionPrimary=null;kd.length=0}var Pl=xr.ReactCurrentDispatcher,Sd=xr.ReactCurrentBatchConfig,Fo=0,Xe=null,dt=null,mt=null,ru=!1,Ia=!1,os=0,jS=0;function Et(){throw Error(J(321))}function pp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rn(e[n],t[n]))return!1;return!0}function mp(e,t,n,r,i,a){if(Fo=a,Xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pl.current=e===null||e.memoizedState===null?HS:WS,e=n(r,i),Ia){a=0;do{if(Ia=!1,os=0,25<=a)throw Error(J(301));a+=1,mt=dt=null,t.updateQueue=null,Pl.current=VS,e=n(r,i)}while(Ia)}if(Pl.current=ou,t=dt!==null&&dt.next!==null,Fo=0,mt=dt=Xe=null,ru=!1,t)throw Error(J(300));return e}function _p(){var e=os!==0;return os=0,e}function Zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?Xe.memoizedState=mt=e:mt=mt.next=e,mt}function pn(){if(dt===null){var e=Xe.alternate;e=e!==null?e.memoizedState:null}else e=dt.next;var t=mt===null?Xe.memoizedState:mt.next;if(t!==null)mt=t,dt=e;else{if(e===null)throw Error(J(310));dt=e,e={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},mt===null?Xe.memoizedState=mt=e:mt=mt.next=e}return mt}function is(e,t){return typeof t=="function"?t(e):t}function Pd(e){var t=pn(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var r=dt,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var u=l=null,d=null,f=a;do{var m=f.lane;if((Fo&m)===m)d!==null&&(d=d.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var _={lane:m,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};d===null?(u=d=_,l=r):d=d.next=_,Xe.lanes|=m,jo|=m}f=f.next}while(f!==null&&f!==a);d===null?l=r:d.next=u,Rn(r,t.memoizedState)||(Ht=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Xe.lanes|=a,jo|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Cd(e){var t=pn(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do a=e(a,l.action),l=l.next;while(l!==i);Rn(a,t.memoizedState)||(Ht=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Vb(){}function qb(e,t){var n=Xe,r=pn(),i=t(),a=!Rn(r.memoizedState,i);if(a&&(r.memoizedState=i,Ht=!0),r=r.queue,vp(Gb.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||mt!==null&&mt.memoizedState.tag&1){if(n.flags|=2048,as(9,Qb.bind(null,n,r,i,t),void 0,null),_t===null)throw Error(J(349));Fo&30||Kb(n,t,i)}return i}function Kb(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Xe.updateQueue,t===null?(t={lastEffect:null,stores:null},Xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Qb(e,t,n,r){t.value=n,t.getSnapshot=r,Xb(t)&&Jb(e)}function Gb(e,t,n){return n(function(){Xb(t)&&Jb(e)})}function Xb(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rn(e,n)}catch{return!0}}function Jb(e){var t=vr(e,1);t!==null&&On(t,e,1,-1)}function Q_(e){var t=Zn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:e},t.queue=e,e=e.dispatch=ZS.bind(null,Xe,e),[t.memoizedState,e]}function as(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Xe.updateQueue,t===null?(t={lastEffect:null,stores:null},Xe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Yb(){return pn().memoizedState}function Cl(e,t,n,r){var i=Zn();Xe.flags|=e,i.memoizedState=as(1|t,n,void 0,r===void 0?null:r)}function Hu(e,t,n,r){var i=pn();r=r===void 0?null:r;var a=void 0;if(dt!==null){var l=dt.memoizedState;if(a=l.destroy,r!==null&&pp(r,l.deps)){i.memoizedState=as(t,n,a,r);return}}Xe.flags|=e,i.memoizedState=as(1|t,n,a,r)}function G_(e,t){return Cl(8390656,8,e,t)}function vp(e,t){return Hu(2048,8,e,t)}function e0(e,t){return Hu(4,2,e,t)}function t0(e,t){return Hu(4,4,e,t)}function n0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function r0(e,t,n){return n=n!=null?n.concat([e]):null,Hu(4,4,n0.bind(null,t,e),n)}function gp(){}function o0(e,t){var n=pn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function i0(e,t){var n=pn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function a0(e,t,n){return Fo&21?(Rn(n,t)||(n=ub(),Xe.lanes|=n,jo|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ht=!0),e.memoizedState=n)}function US(e,t){var n=Ie;Ie=n!==0&&4>n?n:4,e(!0);var r=Sd.transition;Sd.transition={};try{e(!1),t()}finally{Ie=n,Sd.transition=r}}function s0(){return pn().memoizedState}function $S(e,t,n){var r=Kr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},l0(e))u0(t,n);else if(n=Fb(e,t,n,r),n!==null){var i=Dt();On(n,e,r,i),c0(n,t,r)}}function ZS(e,t,n){var r=Kr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(l0(e))u0(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,u=a(l,n);if(i.hasEagerState=!0,i.eagerState=u,Rn(u,l)){var d=t.interleaved;d===null?(i.next=i,up(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=Fb(e,t,i,r),n!==null&&(i=Dt(),On(n,e,r,i),c0(n,t,r))}}function l0(e){var t=e.alternate;return e===Xe||t!==null&&t===Xe}function u0(e,t){Ia=ru=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function c0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qh(e,n)}}var ou={readContext:hn,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useInsertionEffect:Et,useLayoutEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useMutableSource:Et,useSyncExternalStore:Et,useId:Et,unstable_isNewReconciler:!1},HS={readContext:hn,useCallback:function(e,t){return Zn().memoizedState=[e,t===void 0?null:t],e},useContext:hn,useEffect:G_,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Cl(4194308,4,n0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cl(4,2,e,t)},useMemo:function(e,t){var n=Zn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Zn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$S.bind(null,Xe,e),[r.memoizedState,e]},useRef:function(e){var t=Zn();return e={current:e},t.memoizedState=e},useState:Q_,useDebugValue:gp,useDeferredValue:function(e){return Zn().memoizedState=e},useTransition:function(){var e=Q_(!1),t=e[0];return e=US.bind(null,e[1]),Zn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Xe,i=Zn();if(Ve){if(n===void 0)throw Error(J(407));n=n()}else{if(n=t(),_t===null)throw Error(J(349));Fo&30||Kb(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,G_(Gb.bind(null,r,a,e),[e]),r.flags|=2048,as(9,Qb.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Zn(),t=_t.identifierPrefix;if(Ve){var n=fr,r=dr;n=(r&~(1<<32-En(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=os++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jS++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},WS={readContext:hn,useCallback:o0,useContext:hn,useEffect:vp,useImperativeHandle:r0,useInsertionEffect:e0,useLayoutEffect:t0,useMemo:i0,useReducer:Pd,useRef:Yb,useState:function(){return Pd(is)},useDebugValue:gp,useDeferredValue:function(e){var t=pn();return a0(t,dt.memoizedState,e)},useTransition:function(){var e=Pd(is)[0],t=pn().memoizedState;return[e,t]},useMutableSource:Vb,useSyncExternalStore:qb,useId:s0,unstable_isNewReconciler:!1},VS={readContext:hn,useCallback:o0,useContext:hn,useEffect:vp,useImperativeHandle:r0,useInsertionEffect:e0,useLayoutEffect:t0,useMemo:i0,useReducer:Cd,useRef:Yb,useState:function(){return Cd(is)},useDebugValue:gp,useDeferredValue:function(e){var t=pn();return dt===null?t.memoizedState=e:a0(t,dt.memoizedState,e)},useTransition:function(){var e=Cd(is)[0],t=pn().memoizedState;return[e,t]},useMutableSource:Vb,useSyncExternalStore:qb,useId:s0,unstable_isNewReconciler:!1};function ji(e,t){try{var n="",r=t;do n+=bk(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Ed(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ff(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var qS=typeof WeakMap=="function"?WeakMap:Map;function d0(e,t,n){n=hr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){au||(au=!0,Qf=r),Ff(e,t)},n}function f0(e,t,n){n=hr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ff(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Ff(e,t),typeof r!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function X_(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new qS;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=s2.bind(null,e,t,n),t.then(e,e))}function J_(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Y_(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=hr(-1,1),t.tag=2,Vr(n,t,1))),n.lanes|=1),e)}var KS=xr.ReactCurrentOwner,Ht=!1;function Mt(e,t,n,r){t.child=e===null?Hb(t,null,n,r):Di(t,e.child,n,r)}function ev(e,t,n,r,i){n=n.render;var a=t.ref;return Ci(t,i),r=mp(e,t,n,r,a,i),n=_p(),e!==null&&!Ht?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,gr(e,t,i)):(Ve&&n&&rp(t),t.flags|=1,Mt(e,t,r,i),t.child)}function tv(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Cp(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,h0(e,t,a,r,i)):(e=Ll(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ja,n(l,r)&&e.ref===t.ref)return gr(e,t,i)}return t.flags|=1,e=Qr(a,r),e.ref=t.ref,e.return=t,t.child=e}function h0(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ja(a,r)&&e.ref===t.ref)if(Ht=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Ht=!0);else return t.lanes=e.lanes,gr(e,t,i)}return jf(e,t,n,r,i)}function p0(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(bi,Qt),Qt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$e(bi,Qt),Qt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,$e(bi,Qt),Qt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,$e(bi,Qt),Qt|=r;return Mt(e,t,i,n),t.child}function m0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function jf(e,t,n,r,i){var a=Vt(n)?Mo:zt.current;return a=Ii(t,a),Ci(t,i),n=mp(e,t,n,r,a,i),r=_p(),e!==null&&!Ht?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,gr(e,t,i)):(Ve&&r&&rp(t),t.flags|=1,Mt(e,t,n,i),t.child)}function nv(e,t,n,r,i){if(Vt(n)){var a=!0;Gl(t)}else a=!1;if(Ci(t,i),t.stateNode===null)El(e,t),$b(t,n,r),Df(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var d=l.context,f=n.contextType;typeof f=="object"&&f!==null?f=hn(f):(f=Vt(n)?Mo:zt.current,f=Ii(t,f));var m=n.getDerivedStateFromProps,_=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";_||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||d!==f)&&q_(t,l,r,f),Br=!1;var p=t.memoizedState;l.state=p,tu(t,r,l,i),d=t.memoizedState,u!==r||p!==d||Wt.current||Br?(typeof m=="function"&&(Mf(t,n,m,r),d=t.memoizedState),(u=Br||V_(t,n,u,r,p,d,f))?(_||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),l.props=r,l.state=d,l.context=f,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,jb(e,t),u=t.memoizedProps,f=t.type===t.elementType?u:kn(t.type,u),l.props=f,_=t.pendingProps,p=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=hn(d):(d=Vt(n)?Mo:zt.current,d=Ii(t,d));var g=n.getDerivedStateFromProps;(m=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==_||p!==d)&&q_(t,l,r,d),Br=!1,p=t.memoizedState,l.state=p,tu(t,r,l,i);var x=t.memoizedState;u!==_||p!==x||Wt.current||Br?(typeof g=="function"&&(Mf(t,n,g,r),x=t.memoizedState),(f=Br||V_(t,n,f,r,p,x,d)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=d,r=f):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Uf(e,t,n,r,a,i)}function Uf(e,t,n,r,i,a){m0(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&U_(t,n,!1),gr(e,t,a);r=t.stateNode,KS.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Di(t,e.child,null,a),t.child=Di(t,null,u,a)):Mt(e,t,u,a),t.memoizedState=r.state,i&&U_(t,n,!0),t.child}function _0(e){var t=e.stateNode;t.pendingContext?j_(e,t.pendingContext,t.pendingContext!==t.context):t.context&&j_(e,t.context,!1),dp(e,t.containerInfo)}function rv(e,t,n,r,i){return Mi(),ip(i),t.flags|=256,Mt(e,t,n,r),t.child}var $f={dehydrated:null,treeContext:null,retryLane:0};function Zf(e){return{baseLanes:e,cachePool:null,transitions:null}}function v0(e,t,n){var r=t.pendingProps,i=Ge.current,a=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),$e(Ge,i&1),e===null)return Nf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,a?(r=t.mode,a=t.child,l={mode:"hidden",children:l},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=qu(l,r,0,null),e=Bo(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Zf(n),t.memoizedState=$f,e):yp(t,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return QS(e,t,l,r,u,i,n);if(a){a=r.fallback,l=t.mode,i=e.child,u=i.sibling;var d={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Qr(i,d),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?a=Qr(u,a):(a=Bo(a,l,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,l=e.child.memoizedState,l=l===null?Zf(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=$f,r}return a=e.child,e=a.sibling,r=Qr(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function yp(e,t){return t=qu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ll(e,t,n,r){return r!==null&&ip(r),Di(t,e.child,null,n),e=yp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function QS(e,t,n,r,i,a,l){if(n)return t.flags&256?(t.flags&=-257,r=Ed(Error(J(422))),ll(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=qu({mode:"visible",children:r.children},i,0,null),a=Bo(a,i,l,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Di(t,e.child,null,l),t.child.memoizedState=Zf(l),t.memoizedState=$f,a);if(!(t.mode&1))return ll(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,a=Error(J(419)),r=Ed(a,r,void 0),ll(e,t,l,r)}if(u=(l&e.childLanes)!==0,Ht||u){if(r=_t,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,vr(e,i),On(r,e,i,-1))}return Pp(),r=Ed(Error(J(421))),ll(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=l2.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Gt=Wr(i.nextSibling),Xt=t,Ve=!0,Pn=null,e!==null&&(ln[un++]=dr,ln[un++]=fr,ln[un++]=Do,dr=e.id,fr=e.overflow,Do=t),t=yp(t,r.children),t.flags|=4096,t)}function ov(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),If(e.return,t,n)}function Od(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function g0(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Mt(e,t,r.children,n),r=Ge.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ov(e,n,t);else if(e.tag===19)ov(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($e(Ge,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&nu(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Od(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&nu(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Od(t,!0,n,null,a);break;case"together":Od(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function El(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jo|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(J(153));if(t.child!==null){for(e=t.child,n=Qr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function GS(e,t,n){switch(t.tag){case 3:_0(t),Mi();break;case 5:Wb(t);break;case 1:Vt(t.type)&&Gl(t);break;case 4:dp(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;$e(Yl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?($e(Ge,Ge.current&1),t.flags|=128,null):n&t.child.childLanes?v0(e,t,n):($e(Ge,Ge.current&1),e=gr(e,t,n),e!==null?e.sibling:null);$e(Ge,Ge.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return g0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$e(Ge,Ge.current),r)break;return null;case 22:case 23:return t.lanes=0,p0(e,t,n)}return gr(e,t,n)}var y0,Hf,b0,x0;y0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hf=function(){};b0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,To(Kn.current);var a=null;switch(n){case"input":i=ff(e,i),r=ff(e,r),a=[];break;case"select":i=Je({},i,{value:void 0}),r=Je({},r,{value:void 0}),a=[];break;case"textarea":i=mf(e,i),r=mf(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Kl)}vf(n,r);var l;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var u=i[f];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Wa.hasOwnProperty(f)?a||(a=[]):(a=a||[]).push(f,null));for(f in r){var d=r[f];if(u=i?.[f],r.hasOwnProperty(f)&&d!==u&&(d!=null||u!=null))if(f==="style")if(u){for(l in u)!u.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&u[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(a||(a=[]),a.push(f,n)),n=d;else f==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(a=a||[]).push(f,d)):f==="children"?typeof d!="string"&&typeof d!="number"||(a=a||[]).push(f,""+d):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Wa.hasOwnProperty(f)?(d!=null&&f==="onScroll"&&Ze("scroll",e),a||u===d||(a=[])):(a=a||[]).push(f,d))}n&&(a=a||[]).push("style",n);var f=a;(t.updateQueue=f)&&(t.flags|=4)}};x0=function(e,t,n,r){n!==r&&(t.flags|=4)};function ga(e,t){if(!Ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function XS(e,t,n){var r=t.pendingProps;switch(op(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(t),null;case 1:return Vt(t.type)&&Ql(),Ot(t),null;case 3:return r=t.stateNode,Fi(),He(Wt),He(zt),hp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(al(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pn!==null&&(Jf(Pn),Pn=null))),Hf(e,t),Ot(t),null;case 5:fp(t);var i=To(rs.current);if(n=t.type,e!==null&&t.stateNode!=null)b0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(J(166));return Ot(t),null}if(e=To(Kn.current),al(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Hn]=t,r[ts]=a,e=(t.mode&1)!==0,n){case"dialog":Ze("cancel",r),Ze("close",r);break;case"iframe":case"object":case"embed":Ze("load",r);break;case"video":case"audio":for(i=0;i<Oa.length;i++)Ze(Oa[i],r);break;case"source":Ze("error",r);break;case"img":case"image":case"link":Ze("error",r),Ze("load",r);break;case"details":Ze("toggle",r);break;case"input":h_(r,a),Ze("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Ze("invalid",r);break;case"textarea":m_(r,a),Ze("invalid",r)}vf(n,a),i=null;for(var l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="children"?typeof u=="string"?r.textContent!==u&&(a.suppressHydrationWarning!==!0&&il(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(a.suppressHydrationWarning!==!0&&il(r.textContent,u,e),i=["children",""+u]):Wa.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&Ze("scroll",r)}switch(n){case"input":Xs(r),p_(r,a,!0);break;case"textarea":Xs(r),__(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Kl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ky(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Hn]=t,e[ts]=r,y0(e,t,!1,!1),t.stateNode=e;e:{switch(l=gf(n,r),n){case"dialog":Ze("cancel",e),Ze("close",e),i=r;break;case"iframe":case"object":case"embed":Ze("load",e),i=r;break;case"video":case"audio":for(i=0;i<Oa.length;i++)Ze(Oa[i],e);i=r;break;case"source":Ze("error",e),i=r;break;case"img":case"image":case"link":Ze("error",e),Ze("load",e),i=r;break;case"details":Ze("toggle",e),i=r;break;case"input":h_(e,r),i=ff(e,r),Ze("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Je({},r,{value:void 0}),Ze("invalid",e);break;case"textarea":m_(e,r),i=mf(e,r),Ze("invalid",e);break;default:i=r}vf(n,i),u=i;for(a in u)if(u.hasOwnProperty(a)){var d=u[a];a==="style"?Xy(e,d):a==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Qy(e,d)):a==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Va(e,d):typeof d=="number"&&Va(e,""+d):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Wa.hasOwnProperty(a)?d!=null&&a==="onScroll"&&Ze("scroll",e):d!=null&&Zh(e,a,d,l))}switch(n){case"input":Xs(e),p_(e,r,!1);break;case"textarea":Xs(e),__(e);break;case"option":r.value!=null&&e.setAttribute("value",""+no(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?wi(e,!!r.multiple,a,!1):r.defaultValue!=null&&wi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Kl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ot(t),null;case 6:if(e&&t.stateNode!=null)x0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(J(166));if(n=To(rs.current),To(Kn.current),al(t)){if(r=t.stateNode,n=t.memoizedProps,r[Hn]=t,(a=r.nodeValue!==n)&&(e=Xt,e!==null))switch(e.tag){case 3:il(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&il(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Hn]=t,t.stateNode=r}return Ot(t),null;case 13:if(He(Ge),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ve&&Gt!==null&&t.mode&1&&!(t.flags&128))Db(),Mi(),t.flags|=98560,a=!1;else if(a=al(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(J(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(J(317));a[Hn]=t}else Mi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ot(t),a=!1}else Pn!==null&&(Jf(Pn),Pn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ge.current&1?ft===0&&(ft=3):Pp())),t.updateQueue!==null&&(t.flags|=4),Ot(t),null);case 4:return Fi(),Hf(e,t),e===null&&Ya(t.stateNode.containerInfo),Ot(t),null;case 10:return lp(t.type._context),Ot(t),null;case 17:return Vt(t.type)&&Ql(),Ot(t),null;case 19:if(He(Ge),a=t.memoizedState,a===null)return Ot(t),null;if(r=(t.flags&128)!==0,l=a.rendering,l===null)if(r)ga(a,!1);else{if(ft!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=nu(e),l!==null){for(t.flags|=128,ga(a,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $e(Ge,Ge.current&1|2),t.child}e=e.sibling}a.tail!==null&&ot()>Ui&&(t.flags|=128,r=!0,ga(a,!1),t.lanes=4194304)}else{if(!r)if(e=nu(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ga(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!Ve)return Ot(t),null}else 2*ot()-a.renderingStartTime>Ui&&n!==1073741824&&(t.flags|=128,r=!0,ga(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ot(),t.sibling=null,n=Ge.current,$e(Ge,r?n&1|2:n&1),t):(Ot(t),null);case 22:case 23:return Sp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Qt&1073741824&&(Ot(t),t.subtreeFlags&6&&(t.flags|=8192)):Ot(t),null;case 24:return null;case 25:return null}throw Error(J(156,t.tag))}function JS(e,t){switch(op(t),t.tag){case 1:return Vt(t.type)&&Ql(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fi(),He(Wt),He(zt),hp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return fp(t),null;case 13:if(He(Ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(J(340));Mi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return He(Ge),null;case 4:return Fi(),null;case 10:return lp(t.type._context),null;case 22:case 23:return Sp(),null;case 24:return null;default:return null}}var ul=!1,Rt=!1,YS=typeof WeakSet=="function"?WeakSet:Set,le=null;function yi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){et(e,t,r)}else n.current=null}function Wf(e,t,n){try{n()}catch(r){et(e,t,r)}}var iv=!1;function e2(e,t){if(Of=Wl,e=Pb(),np(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,u=-1,d=-1,f=0,m=0,_=e,p=null;t:for(;;){for(var g;_!==n||i!==0&&_.nodeType!==3||(u=l+i),_!==a||r!==0&&_.nodeType!==3||(d=l+r),_.nodeType===3&&(l+=_.nodeValue.length),(g=_.firstChild)!==null;)p=_,_=g;for(;;){if(_===e)break t;if(p===n&&++f===i&&(u=l),p===a&&++m===r&&(d=l),(g=_.nextSibling)!==null)break;_=p,p=_.parentNode}_=g}n=u===-1||d===-1?null:{start:u,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tf={focusedElem:e,selectionRange:n},Wl=!1,le=t;le!==null;)if(t=le,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,le=e;else for(;le!==null;){t=le;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,C=x.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?w:kn(t.type,w),C);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(P){et(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,le=e;break}le=t.return}return x=iv,iv=!1,x}function Ma(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Wf(t,n,a)}i=i.next}while(i!==r)}}function Wu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function w0(e){var t=e.alternate;t!==null&&(e.alternate=null,w0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Hn],delete t[ts],delete t[zf],delete t[IS],delete t[MS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function k0(e){return e.tag===5||e.tag===3||e.tag===4}function av(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||k0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Kl));else if(r!==4&&(e=e.child,e!==null))for(qf(e,t,n),e=e.sibling;e!==null;)qf(e,t,n),e=e.sibling}function Kf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Kf(e,t,n),e=e.sibling;e!==null;)Kf(e,t,n),e=e.sibling}var xt=null,Sn=!1;function Or(e,t,n){for(n=n.child;n!==null;)S0(e,t,n),n=n.sibling}function S0(e,t,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(Mu,n)}catch{}switch(n.tag){case 5:Rt||yi(n,t);case 6:var r=xt,i=Sn;xt=null,Or(e,t,n),xt=r,Sn=i,xt!==null&&(Sn?(e=xt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xt.removeChild(n.stateNode));break;case 18:xt!==null&&(Sn?(e=xt,n=n.stateNode,e.nodeType===8?xd(e.parentNode,n):e.nodeType===1&&xd(e,n),Ga(e)):xd(xt,n.stateNode));break;case 4:r=xt,i=Sn,xt=n.stateNode.containerInfo,Sn=!0,Or(e,t,n),xt=r,Sn=i;break;case 0:case 11:case 14:case 15:if(!Rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&Wf(n,t,l),i=i.next}while(i!==r)}Or(e,t,n);break;case 1:if(!Rt&&(yi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){et(n,t,u)}Or(e,t,n);break;case 21:Or(e,t,n);break;case 22:n.mode&1?(Rt=(r=Rt)||n.memoizedState!==null,Or(e,t,n),Rt=r):Or(e,t,n);break;default:Or(e,t,n)}}function sv(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new YS),t.forEach(function(r){var i=u2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function yn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:xt=u.stateNode,Sn=!1;break e;case 3:xt=u.stateNode.containerInfo,Sn=!0;break e;case 4:xt=u.stateNode.containerInfo,Sn=!0;break e}u=u.return}if(xt===null)throw Error(J(160));S0(a,l,i),xt=null,Sn=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(f){et(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)P0(t,e),t=t.sibling}function P0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yn(t,e),jn(e),r&4){try{Ma(3,e,e.return),Wu(3,e)}catch(w){et(e,e.return,w)}try{Ma(5,e,e.return)}catch(w){et(e,e.return,w)}}break;case 1:yn(t,e),jn(e),r&512&&n!==null&&yi(n,n.return);break;case 5:if(yn(t,e),jn(e),r&512&&n!==null&&yi(n,n.return),e.flags&32){var i=e.stateNode;try{Va(i,"")}catch(w){et(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&a.type==="radio"&&a.name!=null&&Vy(i,a),gf(u,l);var f=gf(u,a);for(l=0;l<d.length;l+=2){var m=d[l],_=d[l+1];m==="style"?Xy(i,_):m==="dangerouslySetInnerHTML"?Qy(i,_):m==="children"?Va(i,_):Zh(i,m,_,f)}switch(u){case"input":hf(i,a);break;case"textarea":qy(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?wi(i,!!a.multiple,g,!1):p!==!!a.multiple&&(a.defaultValue!=null?wi(i,!!a.multiple,a.defaultValue,!0):wi(i,!!a.multiple,a.multiple?[]:"",!1))}i[ts]=a}catch(w){et(e,e.return,w)}}break;case 6:if(yn(t,e),jn(e),r&4){if(e.stateNode===null)throw Error(J(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(w){et(e,e.return,w)}}break;case 3:if(yn(t,e),jn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ga(t.containerInfo)}catch(w){et(e,e.return,w)}break;case 4:yn(t,e),jn(e);break;case 13:yn(t,e),jn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(wp=ot())),r&4&&sv(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Rt=(f=Rt)||m,yn(t,e),Rt=f):yn(t,e),jn(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!m&&e.mode&1)for(le=e,m=e.child;m!==null;){for(_=le=m;le!==null;){switch(p=le,g=p.child,p.tag){case 0:case 11:case 14:case 15:Ma(4,p,p.return);break;case 1:yi(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){et(r,n,w)}}break;case 5:yi(p,p.return);break;case 22:if(p.memoizedState!==null){uv(_);continue}}g!==null?(g.return=p,le=g):uv(_)}m=m.sibling}e:for(m=null,_=e;;){if(_.tag===5){if(m===null){m=_;try{i=_.stateNode,f?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(u=_.stateNode,d=_.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=Gy("display",l))}catch(w){et(e,e.return,w)}}}else if(_.tag===6){if(m===null)try{_.stateNode.nodeValue=f?"":_.memoizedProps}catch(w){et(e,e.return,w)}}else if((_.tag!==22&&_.tag!==23||_.memoizedState===null||_===e)&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===e)break e;for(;_.sibling===null;){if(_.return===null||_.return===e)break e;m===_&&(m=null),_=_.return}m===_&&(m=null),_.sibling.return=_.return,_=_.sibling}}break;case 19:yn(t,e),jn(e),r&4&&sv(e);break;case 21:break;default:yn(t,e),jn(e)}}function jn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(k0(n)){var r=n;break e}n=n.return}throw Error(J(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Va(i,""),r.flags&=-33);var a=av(e);Kf(e,a,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=av(e);qf(e,u,l);break;default:throw Error(J(161))}}catch(d){et(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function t2(e,t,n){le=e,C0(e)}function C0(e,t,n){for(var r=(e.mode&1)!==0;le!==null;){var i=le,a=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||ul;if(!l){var u=i.alternate,d=u!==null&&u.memoizedState!==null||Rt;u=ul;var f=Rt;if(ul=l,(Rt=d)&&!f)for(le=i;le!==null;)l=le,d=l.child,l.tag===22&&l.memoizedState!==null?cv(i):d!==null?(d.return=l,le=d):cv(i);for(;a!==null;)le=a,C0(a),a=a.sibling;le=i,ul=u,Rt=f}lv(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,le=a):lv(e)}}function lv(e){for(;le!==null;){var t=le;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Rt||Wu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Rt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:kn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&W_(t,a,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}W_(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var m=f.memoizedState;if(m!==null){var _=m.dehydrated;_!==null&&Ga(_)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}Rt||t.flags&512&&Vf(t)}catch(p){et(t,t.return,p)}}if(t===e){le=null;break}if(n=t.sibling,n!==null){n.return=t.return,le=n;break}le=t.return}}function uv(e){for(;le!==null;){var t=le;if(t===e){le=null;break}var n=t.sibling;if(n!==null){n.return=t.return,le=n;break}le=t.return}}function cv(e){for(;le!==null;){var t=le;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Wu(4,t)}catch(d){et(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(d){et(t,i,d)}}var a=t.return;try{Vf(t)}catch(d){et(t,a,d)}break;case 5:var l=t.return;try{Vf(t)}catch(d){et(t,l,d)}}}catch(d){et(t,t.return,d)}if(t===e){le=null;break}var u=t.sibling;if(u!==null){u.return=t.return,le=u;break}le=t.return}}var n2=Math.ceil,iu=xr.ReactCurrentDispatcher,bp=xr.ReactCurrentOwner,fn=xr.ReactCurrentBatchConfig,Le=0,_t=null,ut=null,kt=0,Qt=0,bi=co(0),ft=0,ss=null,jo=0,Vu=0,xp=0,Da=null,Zt=null,wp=0,Ui=1/0,sr=null,au=!1,Qf=null,qr=null,cl=!1,jr=null,su=0,Fa=0,Gf=null,Ol=-1,Tl=0;function Dt(){return Le&6?ot():Ol!==-1?Ol:Ol=ot()}function Kr(e){return e.mode&1?Le&2&&kt!==0?kt&-kt:FS.transition!==null?(Tl===0&&(Tl=ub()),Tl):(e=Ie,e!==0||(e=window.event,e=e===void 0?16:_b(e.type)),e):1}function On(e,t,n,r){if(50<Fa)throw Fa=0,Gf=null,Error(J(185));gs(e,n,r),(!(Le&2)||e!==_t)&&(e===_t&&(!(Le&2)&&(Vu|=n),ft===4&&Mr(e,kt)),qt(e,r),n===1&&Le===0&&!(t.mode&1)&&(Ui=ot()+500,$u&&fo()))}function qt(e,t){var n=e.callbackNode;Fk(e,t);var r=Hl(e,e===_t?kt:0);if(r===0)n!==null&&y_(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&y_(n),t===1)e.tag===0?DS(dv.bind(null,e)):Nb(dv.bind(null,e)),BS(function(){!(Le&6)&&fo()}),n=null;else{switch(cb(r)){case 1:n=Kh;break;case 4:n=sb;break;case 16:n=Zl;break;case 536870912:n=lb;break;default:n=Zl}n=B0(n,E0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function E0(e,t){if(Ol=-1,Tl=0,Le&6)throw Error(J(327));var n=e.callbackNode;if(Ei()&&e.callbackNode!==n)return null;var r=Hl(e,e===_t?kt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=lu(e,r);else{t=r;var i=Le;Le|=2;var a=T0();(_t!==e||kt!==t)&&(sr=null,Ui=ot()+500,Ao(e,t));do try{i2();break}catch(u){O0(e,u)}while(1);sp(),iu.current=a,Le=i,ut!==null?t=0:(_t=null,kt=0,t=ft)}if(t!==0){if(t===2&&(i=kf(e),i!==0&&(r=i,t=Xf(e,i))),t===1)throw n=ss,Ao(e,0),Mr(e,r),qt(e,ot()),n;if(t===6)Mr(e,r);else{if(i=e.current.alternate,!(r&30)&&!r2(i)&&(t=lu(e,r),t===2&&(a=kf(e),a!==0&&(r=a,t=Xf(e,a))),t===1))throw n=ss,Ao(e,0),Mr(e,r),qt(e,ot()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(J(345));case 2:So(e,Zt,sr);break;case 3:if(Mr(e,r),(r&130023424)===r&&(t=wp+500-ot(),10<t)){if(Hl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Dt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Rf(So.bind(null,e,Zt,sr),t);break}So(e,Zt,sr);break;case 4:if(Mr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-En(r);a=1<<l,l=t[l],l>i&&(i=l),r&=~a}if(r=i,r=ot()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*n2(r/1960))-r,10<r){e.timeoutHandle=Rf(So.bind(null,e,Zt,sr),r);break}So(e,Zt,sr);break;case 5:So(e,Zt,sr);break;default:throw Error(J(329))}}}return qt(e,ot()),e.callbackNode===n?E0.bind(null,e):null}function Xf(e,t){var n=Da;return e.current.memoizedState.isDehydrated&&(Ao(e,t).flags|=256),e=lu(e,t),e!==2&&(t=Zt,Zt=n,t!==null&&Jf(t)),e}function Jf(e){Zt===null?Zt=e:Zt.push.apply(Zt,e)}function r2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Rn(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mr(e,t){for(t&=~xp,t&=~Vu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-En(t),r=1<<n;e[n]=-1,t&=~r}}function dv(e){if(Le&6)throw Error(J(327));Ei();var t=Hl(e,0);if(!(t&1))return qt(e,ot()),null;var n=lu(e,t);if(e.tag!==0&&n===2){var r=kf(e);r!==0&&(t=r,n=Xf(e,r))}if(n===1)throw n=ss,Ao(e,0),Mr(e,t),qt(e,ot()),n;if(n===6)throw Error(J(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,So(e,Zt,sr),qt(e,ot()),null}function kp(e,t){var n=Le;Le|=1;try{return e(t)}finally{Le=n,Le===0&&(Ui=ot()+500,$u&&fo())}}function Uo(e){jr!==null&&jr.tag===0&&!(Le&6)&&Ei();var t=Le;Le|=1;var n=fn.transition,r=Ie;try{if(fn.transition=null,Ie=1,e)return e()}finally{Ie=r,fn.transition=n,Le=t,!(Le&6)&&fo()}}function Sp(){Qt=bi.current,He(bi)}function Ao(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,AS(n)),ut!==null)for(n=ut.return;n!==null;){var r=n;switch(op(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ql();break;case 3:Fi(),He(Wt),He(zt),hp();break;case 5:fp(r);break;case 4:Fi();break;case 13:He(Ge);break;case 19:He(Ge);break;case 10:lp(r.type._context);break;case 22:case 23:Sp()}n=n.return}if(_t=e,ut=e=Qr(e.current,null),kt=Qt=t,ft=0,ss=null,xp=Vu=jo=0,Zt=Da=null,Oo!==null){for(t=0;t<Oo.length;t++)if(n=Oo[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var l=a.next;a.next=i,r.next=l}n.pending=r}Oo=null}return e}function O0(e,t){do{var n=ut;try{if(sp(),Pl.current=ou,ru){for(var r=Xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ru=!1}if(Fo=0,mt=dt=Xe=null,Ia=!1,os=0,bp.current=null,n===null||n.return===null){ft=1,ss=t,ut=null;break}e:{var a=e,l=n.return,u=n,d=t;if(t=kt,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var f=d,m=u,_=m.tag;if(!(m.mode&1)&&(_===0||_===11||_===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var g=J_(l);if(g!==null){g.flags&=-257,Y_(g,l,u,a,t),g.mode&1&&X_(a,f,t),t=g,d=f;var x=t.updateQueue;if(x===null){var w=new Set;w.add(d),t.updateQueue=w}else x.add(d);break e}else{if(!(t&1)){X_(a,f,t),Pp();break e}d=Error(J(426))}}else if(Ve&&u.mode&1){var C=J_(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Y_(C,l,u,a,t),ip(ji(d,u));break e}}a=d=ji(d,u),ft!==4&&(ft=2),Da===null?Da=[a]:Da.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var y=d0(a,d,t);H_(a,y);break e;case 1:u=d;var b=a.type,S=a.stateNode;if(!(a.flags&128)&&(typeof b.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(qr===null||!qr.has(S)))){a.flags|=65536,t&=-t,a.lanes|=t;var P=f0(a,u,t);H_(a,P);break e}}a=a.return}while(a!==null)}R0(n)}catch(R){t=R,ut===n&&n!==null&&(ut=n=n.return);continue}break}while(1)}function T0(){var e=iu.current;return iu.current=ou,e===null?ou:e}function Pp(){(ft===0||ft===3||ft===2)&&(ft=4),_t===null||!(jo&268435455)&&!(Vu&268435455)||Mr(_t,kt)}function lu(e,t){var n=Le;Le|=2;var r=T0();(_t!==e||kt!==t)&&(sr=null,Ao(e,t));do try{o2();break}catch(i){O0(e,i)}while(1);if(sp(),Le=n,iu.current=r,ut!==null)throw Error(J(261));return _t=null,kt=0,ft}function o2(){for(;ut!==null;)L0(ut)}function i2(){for(;ut!==null&&!Lk();)L0(ut)}function L0(e){var t=A0(e.alternate,e,Qt);e.memoizedProps=e.pendingProps,t===null?R0(e):ut=t,bp.current=null}function R0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=JS(n,t),n!==null){n.flags&=32767,ut=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ft=6,ut=null;return}}else if(n=XS(n,t,Qt),n!==null){ut=n;return}if(t=t.sibling,t!==null){ut=t;return}ut=t=e}while(t!==null);ft===0&&(ft=5)}function So(e,t,n){var r=Ie,i=fn.transition;try{fn.transition=null,Ie=1,a2(e,t,n,r)}finally{fn.transition=i,Ie=r}return null}function a2(e,t,n,r){do Ei();while(jr!==null);if(Le&6)throw Error(J(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(J(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(jk(e,a),e===_t&&(ut=_t=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cl||(cl=!0,B0(Zl,function(){return Ei(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=fn.transition,fn.transition=null;var l=Ie;Ie=1;var u=Le;Le|=4,bp.current=null,e2(e,n),P0(n,e),CS(Tf),Wl=!!Of,Tf=Of=null,e.current=n,t2(n),Rk(),Le=u,Ie=l,fn.transition=a}else e.current=n;if(cl&&(cl=!1,jr=e,su=i),a=e.pendingLanes,a===0&&(qr=null),Bk(n.stateNode),qt(e,ot()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(au)throw au=!1,e=Qf,Qf=null,e;return su&1&&e.tag!==0&&Ei(),a=e.pendingLanes,a&1?e===Gf?Fa++:(Fa=0,Gf=e):Fa=0,fo(),null}function Ei(){if(jr!==null){var e=cb(su),t=fn.transition,n=Ie;try{if(fn.transition=null,Ie=16>e?16:e,jr===null)var r=!1;else{if(e=jr,jr=null,su=0,Le&6)throw Error(J(331));var i=Le;for(Le|=4,le=e.current;le!==null;){var a=le,l=a.child;if(le.flags&16){var u=a.deletions;if(u!==null){for(var d=0;d<u.length;d++){var f=u[d];for(le=f;le!==null;){var m=le;switch(m.tag){case 0:case 11:case 15:Ma(8,m,a)}var _=m.child;if(_!==null)_.return=m,le=_;else for(;le!==null;){m=le;var p=m.sibling,g=m.return;if(w0(m),m===f){le=null;break}if(p!==null){p.return=g,le=p;break}le=g}}}var x=a.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}le=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,le=l;else e:for(;le!==null;){if(a=le,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Ma(9,a,a.return)}var y=a.sibling;if(y!==null){y.return=a.return,le=y;break e}le=a.return}}var b=e.current;for(le=b;le!==null;){l=le;var S=l.child;if(l.subtreeFlags&2064&&S!==null)S.return=l,le=S;else e:for(l=b;le!==null;){if(u=le,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Wu(9,u)}}catch(R){et(u,u.return,R)}if(u===l){le=null;break e}var P=u.sibling;if(P!==null){P.return=u.return,le=P;break e}le=u.return}}if(Le=i,fo(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(Mu,e)}catch{}r=!0}return r}finally{Ie=n,fn.transition=t}}return!1}function fv(e,t,n){t=ji(n,t),t=d0(e,t,1),e=Vr(e,t,1),t=Dt(),e!==null&&(gs(e,1,t),qt(e,t))}function et(e,t,n){if(e.tag===3)fv(e,e,n);else for(;t!==null;){if(t.tag===3){fv(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qr===null||!qr.has(r))){e=ji(n,e),e=f0(t,e,1),t=Vr(t,e,1),e=Dt(),t!==null&&(gs(t,1,e),qt(t,e));break}}t=t.return}}function s2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Dt(),e.pingedLanes|=e.suspendedLanes&n,_t===e&&(kt&n)===n&&(ft===4||ft===3&&(kt&130023424)===kt&&500>ot()-wp?Ao(e,0):xp|=n),qt(e,t)}function z0(e,t){t===0&&(e.mode&1?(t=el,el<<=1,!(el&130023424)&&(el=4194304)):t=1);var n=Dt();e=vr(e,t),e!==null&&(gs(e,t,n),qt(e,n))}function l2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),z0(e,n)}function u2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(J(314))}r!==null&&r.delete(t),z0(e,n)}var A0;A0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Wt.current)Ht=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ht=!1,GS(e,t,n);Ht=!!(e.flags&131072)}else Ht=!1,Ve&&t.flags&1048576&&Ib(t,Jl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;El(e,t),e=t.pendingProps;var i=Ii(t,zt.current);Ci(t,n),i=mp(null,t,r,e,i,n);var a=_p();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Vt(r)?(a=!0,Gl(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,cp(t),i.updater=Zu,t.stateNode=i,i._reactInternals=t,Df(t,r,e,n),t=Uf(null,t,r,!0,a,n)):(t.tag=0,Ve&&a&&rp(t),Mt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(El(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=d2(r),e=kn(r,e),i){case 0:t=jf(null,t,r,e,n);break e;case 1:t=nv(null,t,r,e,n);break e;case 11:t=ev(null,t,r,e,n);break e;case 14:t=tv(null,t,r,kn(r.type,e),n);break e}throw Error(J(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kn(r,i),jf(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kn(r,i),nv(e,t,r,i,n);case 3:e:{if(_0(t),e===null)throw Error(J(387));r=t.pendingProps,a=t.memoizedState,i=a.element,jb(e,t),tu(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=ji(Error(J(423)),t),t=rv(e,t,r,n,i);break e}else if(r!==i){i=ji(Error(J(424)),t),t=rv(e,t,r,n,i);break e}else for(Gt=Wr(t.stateNode.containerInfo.firstChild),Xt=t,Ve=!0,Pn=null,n=Hb(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mi(),r===i){t=gr(e,t,n);break e}Mt(e,t,r,n)}t=t.child}return t;case 5:return Wb(t),e===null&&Nf(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,l=i.children,Lf(r,i)?l=null:a!==null&&Lf(r,a)&&(t.flags|=32),m0(e,t),Mt(e,t,l,n),t.child;case 6:return e===null&&Nf(t),null;case 13:return v0(e,t,n);case 4:return dp(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Di(t,null,r,n):Mt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kn(r,i),ev(e,t,r,i,n);case 7:return Mt(e,t,t.pendingProps,n),t.child;case 8:return Mt(e,t,t.pendingProps.children,n),t.child;case 12:return Mt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,$e(Yl,r._currentValue),r._currentValue=l,a!==null)if(Rn(a.value,l)){if(a.children===i.children&&!Wt.current){t=gr(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){l=a.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(a.tag===1){d=hr(-1,n&-n),d.tag=2;var f=a.updateQueue;if(f!==null){f=f.shared;var m=f.pending;m===null?d.next=d:(d.next=m.next,m.next=d),f.pending=d}}a.lanes|=n,d=a.alternate,d!==null&&(d.lanes|=n),If(a.return,n,t),u.lanes|=n;break}d=d.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(J(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),If(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}Mt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ci(t,n),i=hn(i),r=r(i),t.flags|=1,Mt(e,t,r,n),t.child;case 14:return r=t.type,i=kn(r,t.pendingProps),i=kn(r.type,i),tv(e,t,r,i,n);case 15:return h0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kn(r,i),El(e,t),t.tag=1,Vt(r)?(e=!0,Gl(t)):e=!1,Ci(t,n),$b(t,r,i),Df(t,r,i,n),Uf(null,t,r,!0,e,n);case 19:return g0(e,t,n);case 22:return p0(e,t,n)}throw Error(J(156,t.tag))};function B0(e,t){return ab(e,t)}function c2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(e,t,n,r){return new c2(e,t,n,r)}function Cp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function d2(e){if(typeof e=="function")return Cp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Wh)return 11;if(e===Vh)return 14}return 2}function Qr(e,t){var n=e.alternate;return n===null?(n=cn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ll(e,t,n,r,i,a){var l=2;if(r=e,typeof e=="function")Cp(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case ci:return Bo(n.children,i,a,t);case Hh:l=8,i|=8;break;case lf:return e=cn(12,n,t,i|2),e.elementType=lf,e.lanes=a,e;case uf:return e=cn(13,n,t,i),e.elementType=uf,e.lanes=a,e;case cf:return e=cn(19,n,t,i),e.elementType=cf,e.lanes=a,e;case Zy:return qu(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Uy:l=10;break e;case $y:l=9;break e;case Wh:l=11;break e;case Vh:l=14;break e;case Ar:l=16,r=null;break e}throw Error(J(130,e==null?e:typeof e,""))}return t=cn(l,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Bo(e,t,n,r){return e=cn(7,e,r,t),e.lanes=n,e}function qu(e,t,n,r){return e=cn(22,e,r,t),e.elementType=Zy,e.lanes=n,e.stateNode={isHidden:!1},e}function Td(e,t,n){return e=cn(6,e,null,t),e.lanes=n,e}function Ld(e,t,n){return t=cn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function f2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cd(0),this.expirationTimes=cd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ep(e,t,n,r,i,a,l,u,d){return e=new f2(e,t,n,u,d),t===1?(t=1,a===!0&&(t|=8)):t=0,a=cn(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cp(a),e}function h2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ui,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function N0(e){if(!e)return ro;e=e._reactInternals;e:{if(qo(e)!==e||e.tag!==1)throw Error(J(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Vt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(J(171))}if(e.tag===1){var n=e.type;if(Vt(n))return Bb(e,n,t)}return t}function I0(e,t,n,r,i,a,l,u,d){return e=Ep(n,r,!0,e,i,a,l,u,d),e.context=N0(null),n=e.current,r=Dt(),i=Kr(n),a=hr(r,i),a.callback=t??null,Vr(n,a,i),e.current.lanes=i,gs(e,i,r),qt(e,r),e}function Ku(e,t,n,r){var i=t.current,a=Dt(),l=Kr(i);return n=N0(n),t.context===null?t.context=n:t.pendingContext=n,t=hr(a,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vr(i,t,l),e!==null&&(On(e,i,l,a),Sl(e,i,l)),l}function uu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Op(e,t){hv(e,t),(e=e.alternate)&&hv(e,t)}function p2(){return null}var M0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Tp(e){this._internalRoot=e}Qu.prototype.render=Tp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(J(409));Ku(e,t,null,null)};Qu.prototype.unmount=Tp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Uo(function(){Ku(null,e,null,null)}),t[_r]=null}};function Qu(e){this._internalRoot=e}Qu.prototype.unstable_scheduleHydration=function(e){if(e){var t=hb();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ir.length&&t!==0&&t<Ir[n].priority;n++);Ir.splice(n,0,e),n===0&&mb(e)}};function Lp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Gu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pv(){}function m2(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var f=uu(l);a.call(f)}}var l=I0(t,r,e,0,null,!1,!1,"",pv);return e._reactRootContainer=l,e[_r]=l.current,Ya(e.nodeType===8?e.parentNode:e),Uo(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var f=uu(d);u.call(f)}}var d=Ep(e,0,!1,null,null,!1,!1,"",pv);return e._reactRootContainer=d,e[_r]=d.current,Ya(e.nodeType===8?e.parentNode:e),Uo(function(){Ku(t,d,n,r)}),d}function Xu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var l=a;if(typeof i=="function"){var u=i;i=function(){var d=uu(l);u.call(d)}}Ku(t,l,e,i)}else l=m2(n,t,e,i,r);return uu(l)}db=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ea(t.pendingLanes);n!==0&&(Qh(t,n|1),qt(t,ot()),!(Le&6)&&(Ui=ot()+500,fo()))}break;case 13:Uo(function(){var r=vr(e,1);if(r!==null){var i=Dt();On(r,e,1,i)}}),Op(e,1)}};Gh=function(e){if(e.tag===13){var t=vr(e,134217728);if(t!==null){var n=Dt();On(t,e,134217728,n)}Op(e,134217728)}};fb=function(e){if(e.tag===13){var t=Kr(e),n=vr(e,t);if(n!==null){var r=Dt();On(n,e,t,r)}Op(e,t)}};hb=function(){return Ie};pb=function(e,t){var n=Ie;try{return Ie=e,t()}finally{Ie=n}};bf=function(e,t,n){switch(t){case"input":if(hf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Uu(r);if(!i)throw Error(J(90));Wy(r),hf(r,i)}}}break;case"textarea":qy(e,n);break;case"select":t=n.value,t!=null&&wi(e,!!n.multiple,t,!1)}};eb=kp;tb=Uo;var _2={usingClientEntryPoint:!1,Events:[bs,pi,Uu,Jy,Yy,kp]},ya={findFiberByHostInstance:Eo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},v2={bundleType:ya.bundleType,version:ya.version,rendererPackageName:ya.rendererPackageName,rendererConfig:ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ob(e),e===null?null:e.stateNode},findFiberByHostInstance:ya.findFiberByHostInstance||p2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{Mu=dl.inject(v2),qn=dl}catch{}}en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_2;en.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lp(t))throw Error(J(200));return h2(e,t,null,n)};en.createRoot=function(e,t){if(!Lp(e))throw Error(J(299));var n=!1,r="",i=M0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ep(e,1,!1,null,null,n,!1,r,i),e[_r]=t.current,Ya(e.nodeType===8?e.parentNode:e),new Tp(t)};en.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(J(188)):(e=Object.keys(e).join(","),Error(J(268,e)));return e=ob(t),e=e===null?null:e.stateNode,e};en.flushSync=function(e){return Uo(e)};en.hydrate=function(e,t,n){if(!Gu(t))throw Error(J(200));return Xu(null,e,t,!0,n)};en.hydrateRoot=function(e,t,n){if(!Lp(e))throw Error(J(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",l=M0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=I0(t,null,e,1,n??null,i,!1,a,l),e[_r]=t.current,Ya(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Qu(t)};en.render=function(e,t,n){if(!Gu(t))throw Error(J(200));return Xu(null,e,t,!1,n)};en.unmountComponentAtNode=function(e){if(!Gu(e))throw Error(J(40));return e._reactRootContainer?(Uo(function(){Xu(null,null,e,!1,function(){e._reactRootContainer=null,e[_r]=null})}),!0):!1};en.unstable_batchedUpdates=kp;en.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gu(n))throw Error(J(200));if(e==null||e._reactInternals===void 0)throw Error(J(38));return Xu(e,t,n,!1,r)};en.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=en})(pk);const g2=Ty(Bi);var D0,mv=Bi;D0=mv.createRoot,mv.hydrateRoot;var Yf={},y2={get exports(){return Yf},set exports(e){Yf=e}},F0={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $i=T;function b2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var x2=typeof Object.is=="function"?Object.is:b2,w2=$i.useState,k2=$i.useEffect,S2=$i.useLayoutEffect,P2=$i.useDebugValue;function C2(e,t){var n=t(),r=w2({inst:{value:n,getSnapshot:t}}),i=r[0].inst,a=r[1];return S2(function(){i.value=n,i.getSnapshot=t,Rd(i)&&a({inst:i})},[e,n,t]),k2(function(){return Rd(i)&&a({inst:i}),e(function(){Rd(i)&&a({inst:i})})},[e]),P2(n),n}function Rd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!x2(e,n)}catch{return!0}}function E2(e,t){return t()}var O2=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?E2:C2;F0.useSyncExternalStore=$i.useSyncExternalStore!==void 0?$i.useSyncExternalStore:O2;(function(e){e.exports=F0})(y2);var eh={},T2={get exports(){return eh},set exports(e){eh=e}},j0={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ju=T,L2=Yf;function R2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var z2=typeof Object.is=="function"?Object.is:R2,A2=L2.useSyncExternalStore,B2=Ju.useRef,N2=Ju.useEffect,I2=Ju.useMemo,M2=Ju.useDebugValue;j0.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var a=B2(null);if(a.current===null){var l={hasValue:!1,value:null};a.current=l}else l=a.current;a=I2(function(){function d(g){if(!f){if(f=!0,m=g,g=r(g),i!==void 0&&l.hasValue){var x=l.value;if(i(x,g))return _=x}return _=g}if(x=_,z2(m,g))return x;var w=r(g);return i!==void 0&&i(x,w)?x:(m=g,_=w)}var f=!1,m,_,p=n===void 0?null:n;return[function(){return d(t())},p===null?void 0:function(){return d(p())}]},[t,n,r,i]);var u=A2(e,a[0],a[1]);return N2(function(){l.hasValue=!0,l.value=u},[u]),M2(u),u};(function(e){e.exports=j0})(T2);function D2(e){e()}let U0=D2;const F2=e=>U0=e,j2=()=>U0,oo=T.createContext(null);function $0(){return T.useContext(oo)}const U2=()=>{throw new Error("uSES not initialized!")};let Z0=U2;const $2=e=>{Z0=e},Z2=(e,t)=>e===t;function H2(e=oo){const t=e===oo?$0:()=>T.useContext(e);return function(r,i=Z2){const{store:a,subscription:l,getServerState:u}=t(),d=Z0(l.addNestedSub,a.getState,u||a.getState,r,i);return T.useDebugValue(d),d}}const W2=H2();function Be(){return Be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Be.apply(this,arguments)}var th={},V2={get exports(){return th},set exports(e){th=e}},Me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vt=typeof Symbol=="function"&&Symbol.for,Rp=vt?Symbol.for("react.element"):60103,zp=vt?Symbol.for("react.portal"):60106,Yu=vt?Symbol.for("react.fragment"):60107,ec=vt?Symbol.for("react.strict_mode"):60108,tc=vt?Symbol.for("react.profiler"):60114,nc=vt?Symbol.for("react.provider"):60109,rc=vt?Symbol.for("react.context"):60110,Ap=vt?Symbol.for("react.async_mode"):60111,oc=vt?Symbol.for("react.concurrent_mode"):60111,ic=vt?Symbol.for("react.forward_ref"):60112,ac=vt?Symbol.for("react.suspense"):60113,q2=vt?Symbol.for("react.suspense_list"):60120,sc=vt?Symbol.for("react.memo"):60115,lc=vt?Symbol.for("react.lazy"):60116,K2=vt?Symbol.for("react.block"):60121,Q2=vt?Symbol.for("react.fundamental"):60117,G2=vt?Symbol.for("react.responder"):60118,X2=vt?Symbol.for("react.scope"):60119;function nn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Rp:switch(e=e.type,e){case Ap:case oc:case Yu:case tc:case ec:case ac:return e;default:switch(e=e&&e.$$typeof,e){case rc:case ic:case lc:case sc:case nc:return e;default:return t}}case zp:return t}}}function H0(e){return nn(e)===oc}Me.AsyncMode=Ap;Me.ConcurrentMode=oc;Me.ContextConsumer=rc;Me.ContextProvider=nc;Me.Element=Rp;Me.ForwardRef=ic;Me.Fragment=Yu;Me.Lazy=lc;Me.Memo=sc;Me.Portal=zp;Me.Profiler=tc;Me.StrictMode=ec;Me.Suspense=ac;Me.isAsyncMode=function(e){return H0(e)||nn(e)===Ap};Me.isConcurrentMode=H0;Me.isContextConsumer=function(e){return nn(e)===rc};Me.isContextProvider=function(e){return nn(e)===nc};Me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Rp};Me.isForwardRef=function(e){return nn(e)===ic};Me.isFragment=function(e){return nn(e)===Yu};Me.isLazy=function(e){return nn(e)===lc};Me.isMemo=function(e){return nn(e)===sc};Me.isPortal=function(e){return nn(e)===zp};Me.isProfiler=function(e){return nn(e)===tc};Me.isStrictMode=function(e){return nn(e)===ec};Me.isSuspense=function(e){return nn(e)===ac};Me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Yu||e===oc||e===tc||e===ec||e===ac||e===q2||typeof e=="object"&&e!==null&&(e.$$typeof===lc||e.$$typeof===sc||e.$$typeof===nc||e.$$typeof===rc||e.$$typeof===ic||e.$$typeof===Q2||e.$$typeof===G2||e.$$typeof===X2||e.$$typeof===K2)};Me.typeOf=nn;(function(e){e.exports=Me})(V2);var W0=th,J2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Y2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},V0={};V0[W0.ForwardRef]=J2;V0[W0.Memo]=Y2;var _v={},eP={get exports(){return _v},set exports(e){_v=e}},De={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp=Symbol.for("react.element"),Np=Symbol.for("react.portal"),uc=Symbol.for("react.fragment"),cc=Symbol.for("react.strict_mode"),dc=Symbol.for("react.profiler"),fc=Symbol.for("react.provider"),hc=Symbol.for("react.context"),tP=Symbol.for("react.server_context"),pc=Symbol.for("react.forward_ref"),mc=Symbol.for("react.suspense"),_c=Symbol.for("react.suspense_list"),vc=Symbol.for("react.memo"),gc=Symbol.for("react.lazy"),nP=Symbol.for("react.offscreen"),q0;q0=Symbol.for("react.module.reference");function mn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Bp:switch(e=e.type,e){case uc:case dc:case cc:case mc:case _c:return e;default:switch(e=e&&e.$$typeof,e){case tP:case hc:case pc:case gc:case vc:case fc:return e;default:return t}}case Np:return t}}}De.ContextConsumer=hc;De.ContextProvider=fc;De.Element=Bp;De.ForwardRef=pc;De.Fragment=uc;De.Lazy=gc;De.Memo=vc;De.Portal=Np;De.Profiler=dc;De.StrictMode=cc;De.Suspense=mc;De.SuspenseList=_c;De.isAsyncMode=function(){return!1};De.isConcurrentMode=function(){return!1};De.isContextConsumer=function(e){return mn(e)===hc};De.isContextProvider=function(e){return mn(e)===fc};De.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Bp};De.isForwardRef=function(e){return mn(e)===pc};De.isFragment=function(e){return mn(e)===uc};De.isLazy=function(e){return mn(e)===gc};De.isMemo=function(e){return mn(e)===vc};De.isPortal=function(e){return mn(e)===Np};De.isProfiler=function(e){return mn(e)===dc};De.isStrictMode=function(e){return mn(e)===cc};De.isSuspense=function(e){return mn(e)===mc};De.isSuspenseList=function(e){return mn(e)===_c};De.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===uc||e===dc||e===cc||e===mc||e===_c||e===nP||typeof e=="object"&&e!==null&&(e.$$typeof===gc||e.$$typeof===vc||e.$$typeof===fc||e.$$typeof===hc||e.$$typeof===pc||e.$$typeof===q0||e.getModuleId!==void 0)};De.typeOf=mn;(function(e){e.exports=De})(eP);function rP(){const e=j2();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,a=n={callback:r,next:null,prev:n};return a.prev?a.prev.next=a:t=a,function(){!i||t===null||(i=!1,a.next?a.next.prev=a.prev:n=a.prev,a.prev?a.prev.next=a.next:t=a.next)}}}}const vv={notify(){},get:()=>[]};function oP(e,t){let n,r=vv;function i(_){return d(),r.subscribe(_)}function a(){r.notify()}function l(){m.onStateChange&&m.onStateChange()}function u(){return Boolean(n)}function d(){n||(n=t?t.addNestedSub(l):e.subscribe(l),r=rP())}function f(){n&&(n(),n=void 0,r.clear(),r=vv)}const m={addNestedSub:i,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:d,tryUnsubscribe:f,getListeners:()=>r};return m}const iP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",aP=iP?T.useLayoutEffect:T.useEffect;function sP({store:e,context:t,children:n,serverState:r}){const i=T.useMemo(()=>{const u=oP(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0}},[e,r]),a=T.useMemo(()=>e.getState(),[e]);aP(()=>{const{subscription:u}=i;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[i,a]);const l=t||oo;return H.createElement(l.Provider,{value:i},n)}function K0(e=oo){const t=e===oo?$0:()=>T.useContext(e);return function(){const{store:r}=t();return r}}const lP=K0();function uP(e=oo){const t=e===oo?lP:K0(e);return function(){return t().dispatch}}const cP=uP();$2(eh.useSyncExternalStoreWithSelector);F2(Bi.unstable_batchedUpdates);/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ae(){return Ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ae.apply(this,arguments)}var lt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(lt||(lt={}));const gv="popstate";function dP(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:l,hash:u}=r.location;return ls("",{pathname:a,search:l,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:$o(i)}return hP(t,n,null,e)}function ke(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function fP(){return Math.random().toString(36).substr(2,8)}function yv(e,t){return{usr:e.state,key:e.key,idx:t}}function ls(e,t,n,r){return n===void 0&&(n=null),Ae({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?wr(t):t,{state:n,key:t&&t.key||r||fP()})}function $o(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function wr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function hP(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,l=i.history,u=lt.Pop,d=null,f=m();f==null&&(f=0,l.replaceState(Ae({},l.state,{idx:f}),""));function m(){return(l.state||{idx:null}).idx}function _(){u=lt.Pop;let C=m(),y=C==null?null:C-f;f=C,d&&d({action:u,location:w.location,delta:y})}function p(C,y){u=lt.Push;let b=ls(w.location,C,y);n&&n(b,C),f=m()+1;let S=yv(b,f),P=w.createHref(b);try{l.pushState(S,"",P)}catch{i.location.assign(P)}a&&d&&d({action:u,location:w.location,delta:1})}function g(C,y){u=lt.Replace;let b=ls(w.location,C,y);n&&n(b,C),f=m();let S=yv(b,f),P=w.createHref(b);l.replaceState(S,"",P),a&&d&&d({action:u,location:w.location,delta:0})}function x(C){let y=i.location.origin!=="null"?i.location.origin:i.location.href,b=typeof C=="string"?C:$o(C);return ke(y,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,y)}let w={get action(){return u},get location(){return e(i,l)},listen(C){if(d)throw new Error("A history only accepts one active listener");return i.addEventListener(gv,_),d=C,()=>{i.removeEventListener(gv,_),d=null}},createHref(C){return t(i,C)},createURL:x,encodeLocation(C){let y=x(C);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:p,replace:g,go(C){return l.go(C)}};return w}var wt;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(wt||(wt={}));function pP(e){return e.index===!0}function Q0(e,t,n){return t===void 0&&(t=[]),n===void 0&&(n=new Set),e.map((r,i)=>{let a=[...t,i],l=typeof r.id=="string"?r.id:a.join("-");return ke(r.index!==!0||!r.children,"Cannot specify children on an index route"),ke(!n.has(l),'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),n.add(l),pP(r)?Ae({},r,{id:l}):Ae({},r,{id:l,children:r.children?Q0(r.children,a,n):void 0})})}function Ta(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?wr(t):t,i=J0(r.pathname||"/",n);if(i==null)return null;let a=G0(e);mP(a);let l=null;for(let u=0;l==null&&u<a.length;++u)l=SP(a[u],EP(i));return l}function G0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,l,u)=>{let d={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};d.relativePath.startsWith("/")&&(ke(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let f=Gr([r,d.relativePath]),m=n.concat(d);a.children&&a.children.length>0&&(ke(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),G0(a.children,t,m,f)),!(a.path==null&&!a.index)&&t.push({path:f,score:wP(f,a.index),routesMeta:m})};return e.forEach((a,l)=>{var u;if(a.path===""||!((u=a.path)!=null&&u.includes("?")))i(a,l);else for(let d of X0(a.path))i(a,l,d)}),t}function X0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let l=X0(r.join("/")),u=[];return u.push(...l.map(d=>d===""?a:[a,d].join("/"))),i&&u.push(...l),u.map(d=>e.startsWith("/")&&d===""?"/":d)}function mP(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:kP(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const _P=/^:\w+$/,vP=3,gP=2,yP=1,bP=10,xP=-2,bv=e=>e==="*";function wP(e,t){let n=e.split("/"),r=n.length;return n.some(bv)&&(r+=xP),t&&(r+=gP),n.filter(i=>!bv(i)).reduce((i,a)=>i+(_P.test(a)?vP:a===""?yP:bP),r)}function kP(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function SP(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let l=0;l<n.length;++l){let u=n[l],d=l===n.length-1,f=i==="/"?t:t.slice(i.length)||"/",m=PP({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f);if(!m)return null;Object.assign(r,m.params);let _=u.route;a.push({params:r,pathname:Gr([i,m.pathname]),pathnameBase:RP(Gr([i,m.pathnameBase])),route:_}),m.pathnameBase!=="/"&&(i=Gr([i,m.pathnameBase]))}return a}function PP(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=CP(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:r.reduce((f,m,_)=>{if(m==="*"){let p=u[_]||"";l=a.slice(0,a.length-p.length).replace(/(.)\/+$/,"$1")}return f[m]=OP(u[_]||"",m),f},{}),pathname:a,pathnameBase:l,pattern:e}}function CP(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),us(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,u)=>(r.push(u),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function EP(e){try{return decodeURI(e)}catch(t){return us(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function OP(e,t){try{return decodeURIComponent(e)}catch(n){return us(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function J0(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function us(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function TP(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?wr(e):e;return{pathname:n?n.startsWith("/")?n:LP(n,t):t,search:zP(r),hash:AP(i)}}function LP(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function zd(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ip(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Y0(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=wr(e):(i=Ae({},e),ke(!i.pathname||!i.pathname.includes("?"),zd("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),zd("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),zd("#","search","hash",i)));let a=e===""||i.pathname==="",l=a?"/":i.pathname,u;if(r||l==null)u=n;else{let _=t.length-1;if(l.startsWith("..")){let p=l.split("/");for(;p[0]==="..";)p.shift(),_-=1;i.pathname=p.join("/")}u=_>=0?t[_]:"/"}let d=TP(i,u),f=l&&l!=="/"&&l.endsWith("/"),m=(a||l===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(f||m)&&(d.pathname+="/"),d}const Gr=e=>e.join("/").replace(/\/\/+/g,"/"),RP=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),zP=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,AP=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class xv extends Error{}class BP{constructor(t,n){this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],ke(t&&typeof t=="object"&&!Array.isArray(t),"defer() only accepts plain objects");let r;this.abortPromise=new Promise((a,l)=>r=l),this.controller=new AbortController;let i=()=>r(new xv("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",i),this.controller.signal.addEventListener("abort",i),this.data=Object.entries(t).reduce((a,l)=>{let[u,d]=l;return Object.assign(a,{[u]:this.trackPromise(u,d)})},{}),this.done&&this.unlistenAbortSignal(),this.init=n}trackPromise(t,n){if(!(n instanceof Promise))return n;this.deferredKeys.push(t),this.pendingKeysSet.add(t);let r=Promise.race([n,this.abortPromise]).then(i=>this.onSettle(r,t,null,i),i=>this.onSettle(r,t,i));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(t,n,r,i){return this.controller.signal.aborted&&r instanceof xv?(this.unlistenAbortSignal(),Object.defineProperty(t,"_error",{get:()=>r}),Promise.reject(r)):(this.pendingKeysSet.delete(n),this.done&&this.unlistenAbortSignal(),r?(Object.defineProperty(t,"_error",{get:()=>r}),this.emit(!1,n),Promise.reject(r)):(Object.defineProperty(t,"_data",{get:()=>i}),this.emit(!1,n),i))}emit(t,n){this.subscribers.forEach(r=>r(t,n))}subscribe(t){return this.subscribers.add(t),()=>this.subscribers.delete(t)}cancel(){this.controller.abort(),this.pendingKeysSet.forEach((t,n)=>this.pendingKeysSet.delete(n)),this.emit(!0)}async resolveData(t){let n=!1;if(!this.done){let r=()=>this.cancel();t.addEventListener("abort",r),n=await new Promise(i=>{this.subscribe(a=>{t.removeEventListener("abort",r),(a||this.done)&&i(a)})})}return n}get done(){return this.pendingKeysSet.size===0}get unwrappedData(){return ke(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((t,n)=>{let[r,i]=n;return Object.assign(t,{[r]:IP(i)})},{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}}function NP(e){return e instanceof Promise&&e._tracked===!0}function IP(e){if(!NP(e))return e;if(e._error)throw e._error;return e._data}class Mp{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function e1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const t1=["post","put","patch","delete"],MP=new Set(t1),DP=["get",...t1],FP=new Set(DP),jP=new Set([301,302,303,307,308]),UP=new Set([307,308]),Ad={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},$P={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},wv={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},n1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,r1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ZP=!r1;function HP(e){ke(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=Q0(e.routes),n=null,r=new Set,i=null,a=null,l=null,u=e.hydrationData!=null,d=Ta(t,e.history.location,e.basename),f=null;if(d==null){let Z=zr(404,{pathname:e.history.location.pathname}),{matches:W,route:G}=Ov(t);d=W,f={[G.id]:Z}}let m=!d.some(Z=>Z.route.loader)||e.hydrationData!=null,_,p={historyAction:e.history.action,location:e.history.location,matches:d,initialized:m,navigation:Ad,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||f,fetchers:new Map,blockers:new Map},g=lt.Pop,x=!1,w,C=!1,y=!1,b=[],S=[],P=new Map,R=0,M=-1,F=new Map,j=new Set,V=new Map,$=new Map,z=new Map,ee=!1;function me(){return n=e.history.listen(Z=>{let{action:W,location:G,delta:se}=Z;if(ee){ee=!1;return}us(z.size===0||se!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ie=Nn({currentLocation:p.location,nextLocation:G,historyAction:W});if(ie&&se!=null){ee=!0,e.history.go(se*-1),Ct(ie,{state:"blocked",location:G,proceed(){Ct(ie,{state:"proceeding",proceed:void 0,reset:void 0,location:G}),e.history.go(se)},reset(){ze(ie),U({blockers:new Map(_.state.blockers)})}});return}return q(W,G)}),p.initialized||q(lt.Pop,p.location),_}function re(){n&&n(),r.clear(),w&&w.abort(),p.fetchers.forEach((Z,W)=>Fe(W)),p.blockers.forEach((Z,W)=>ze(W))}function fe(Z){return r.add(Z),()=>r.delete(Z)}function U(Z){p=Ae({},p,Z),r.forEach(W=>W(p))}function te(Z,W){var G,se;let ie=p.actionData!=null&&p.navigation.formMethod!=null&&lr(p.navigation.formMethod)&&p.navigation.state==="loading"&&((G=Z.state)==null?void 0:G._isRedirect)!==!0,ve;W.actionData?Object.keys(W.actionData).length>0?ve=W.actionData:ve=null:ie?ve=p.actionData:ve=null;let he=W.loaderData?Ev(p.loaderData,W.loaderData,W.matches||[],W.errors):p.loaderData;for(let[pe]of z)ze(pe);let ye=x===!0||p.navigation.formMethod!=null&&lr(p.navigation.formMethod)&&((se=Z.state)==null?void 0:se._isRedirect)!==!0;U(Ae({},W,{actionData:ve,loaderData:he,historyAction:g,location:Z,initialized:!0,navigation:Ad,revalidation:"idle",restoreScrollPosition:Sr(Z,W.matches||p.matches),preventScrollReset:ye,blockers:new Map(p.blockers)})),C||g===lt.Pop||(g===lt.Push?e.history.push(Z,Z.state):g===lt.Replace&&e.history.replace(Z,Z.state)),g=lt.Pop,x=!1,C=!1,y=!1,b=[],S=[]}async function I(Z,W){if(typeof Z=="number"){e.history.go(Z);return}let{path:G,submission:se,error:ie}=kv(Z,W),ve=p.location,he=ls(p.location,G,W&&W.state);he=Ae({},he,e.history.encodeLocation(he));let ye=W&&W.replace!=null?W.replace:void 0,pe=lt.Push;ye===!0?pe=lt.Replace:ye===!1||se!=null&&lr(se.formMethod)&&se.formAction===p.location.pathname+p.location.search&&(pe=lt.Replace);let it=W&&"preventScrollReset"in W?W.preventScrollReset===!0:void 0,xe=Nn({currentLocation:ve,nextLocation:he,historyAction:pe});if(xe){Ct(xe,{state:"blocked",location:he,proceed(){Ct(xe,{state:"proceeding",proceed:void 0,reset:void 0,location:he}),I(Z,W)},reset(){ze(xe),U({blockers:new Map(p.blockers)})}});return}return await q(pe,he,{submission:se,pendingError:ie,preventScrollReset:it,replace:W&&W.replace})}function oe(){if(Ye(),U({revalidation:"loading"}),p.navigation.state!=="submitting"){if(p.navigation.state==="idle"){q(p.historyAction,p.location,{startUninterruptedRevalidation:!0});return}q(g||p.historyAction,p.navigation.location,{overrideNavigation:p.navigation})}}async function q(Z,W,G){w&&w.abort(),w=null,g=Z,C=(G&&G.startUninterruptedRevalidation)===!0,Bt(p.location,p.matches),x=(G&&G.preventScrollReset)===!0;let se=G&&G.overrideNavigation,ie=Ta(t,W,e.basename);if(!ie){let je=zr(404,{pathname:W.pathname}),{matches:Nt,route:gt}=Ov(t);$t(),te(W,{matches:Nt,loaderData:{},errors:{[gt.id]:je}});return}if(QP(p.location,W)&&!(G&&G.submission&&lr(G.submission.formMethod))){te(W,{matches:ie});return}w=new AbortController;let ve=xa(e.history,W,w.signal,G&&G.submission),he,ye;if(G&&G.pendingError)ye={[xi(ie).route.id]:G.pendingError};else if(G&&G.submission&&lr(G.submission.formMethod)){let je=await O(ve,W,G.submission,ie,{replace:G.replace});if(je.shortCircuited)return;he=je.pendingActionData,ye=je.pendingActionError,se=Ae({state:"loading",location:W},G.submission),ve=new Request(ve.url,{signal:ve.signal})}let{shortCircuited:pe,loaderData:it,errors:xe}=await N(ve,W,ie,se,G&&G.submission,G&&G.replace,he,ye);pe||(w=null,te(W,Ae({matches:ie},he?{actionData:he}:{},{loaderData:it,errors:xe})))}async function O(Z,W,G,se,ie){Ye();let ve=Ae({state:"submitting",location:W},G);U({navigation:ve});let he,ye=zv(se,W);if(!ye.route.action)he={type:wt.error,error:zr(405,{method:Z.method,pathname:W.pathname,routeId:ye.route.id})};else if(he=await ba("action",Z,ye,se,_.basename),Z.signal.aborted)return{shortCircuited:!0};if(Oi(he)){let pe;return ie&&ie.replace!=null?pe=ie.replace:pe=he.location===p.location.pathname+p.location.search,await ue(p,he,{submission:G,replace:pe}),{shortCircuited:!0}}if(ja(he)){let pe=xi(se,ye.route.id);return(ie&&ie.replace)!==!0&&(g=lt.Push),{pendingActionData:{},pendingActionError:{[pe.route.id]:he.error}}}if(Lo(he))throw zr(400,{type:"defer-action"});return{pendingActionData:{[ye.route.id]:he.data}}}async function N(Z,W,G,se,ie,ve,he,ye){let pe=se;pe||(pe=Ae({state:"loading",location:W,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ie));let it=ie||(pe.formMethod&&pe.formAction&&pe.formData&&pe.formEncType?{formMethod:pe.formMethod,formAction:pe.formAction,formData:pe.formData,formEncType:pe.formEncType}:void 0),[xe,je]=Sv(e.history,p,G,it,W,y,b,S,he,ye,V);if($t(pt=>!(G&&G.some(rn=>rn.route.id===pt))||xe&&xe.some(rn=>rn.route.id===pt)),xe.length===0&&je.length===0)return te(W,Ae({matches:G,loaderData:{},errors:ye||null},he?{actionData:he}:{})),{shortCircuited:!0};if(!C){je.forEach(rn=>{let er=p.fetchers.get(rn.key),Go={state:"loading",data:er&&er.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};p.fetchers.set(rn.key,Go)});let pt=he||p.actionData;U(Ae({navigation:pe},pt?Object.keys(pt).length===0?{actionData:null}:{actionData:pt}:{},je.length>0?{fetchers:new Map(p.fetchers)}:{}))}M=++R,je.forEach(pt=>P.set(pt.key,w));let{results:Nt,loaderResults:gt,fetcherResults:ho}=await _e(p.matches,G,xe,je,Z);if(Z.signal.aborted)return{shortCircuited:!0};je.forEach(pt=>P.delete(pt.key));let Ko=Tv(Nt);if(Ko)return await ue(p,Ko,{replace:ve}),{shortCircuited:!0};let{loaderData:po,errors:Yn}=Cv(p,G,xe,gt,ye,je,ho,$);$.forEach((pt,rn)=>{pt.subscribe(er=>{(er||pt.done)&&$.delete(rn)})}),Oe();let Qo=Kt(M);return Ae({loaderData:po,errors:Yn},Qo||je.length>0?{fetchers:new Map(p.fetchers)}:{})}function B(Z){return p.fetchers.get(Z)||$P}function Q(Z,W,G,se){if(ZP)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");P.has(Z)&&Ne(Z);let ie=Ta(t,G,e.basename);if(!ie){qe(Z,W,zr(404,{pathname:G}));return}let{path:ve,submission:he}=kv(G,se,!0),ye=zv(ie,ve);if(x=(se&&se.preventScrollReset)===!0,he&&lr(he.formMethod)){Y(Z,W,ve,ye,ie,he);return}V.set(Z,{routeId:W,path:ve,match:ye,matches:ie}),ne(Z,W,ve,ye,ie,he)}async function Y(Z,W,G,se,ie,ve){if(Ye(),V.delete(Z),!se.route.action){let _n=zr(405,{method:ve.formMethod,pathname:G,routeId:W});qe(Z,W,_n);return}let he=p.fetchers.get(Z),ye=Ae({state:"submitting"},ve,{data:he&&he.data," _hasFetcherDoneAnything ":!0});p.fetchers.set(Z,ye),U({fetchers:new Map(p.fetchers)});let pe=new AbortController,it=xa(e.history,G,pe.signal,ve);P.set(Z,pe);let xe=await ba("action",it,se,ie,_.basename);if(it.signal.aborted){P.get(Z)===pe&&P.delete(Z);return}if(Oi(xe)){P.delete(Z),j.add(Z);let _n=Ae({state:"loading"},ve,{data:void 0," _hasFetcherDoneAnything ":!0});return p.fetchers.set(Z,_n),U({fetchers:new Map(p.fetchers)}),ue(p,xe,{isFetchActionRedirect:!0})}if(ja(xe)){qe(Z,W,xe.error);return}if(Lo(xe))throw zr(400,{type:"defer-action"});let je=p.navigation.location||p.location,Nt=xa(e.history,je,pe.signal),gt=p.navigation.state!=="idle"?Ta(t,p.navigation.location,e.basename):p.matches;ke(gt,"Didn't find any matches after fetcher action");let ho=++R;F.set(Z,ho);let Ko=Ae({state:"loading",data:xe.data},ve,{" _hasFetcherDoneAnything ":!0});p.fetchers.set(Z,Ko);let[po,Yn]=Sv(e.history,p,gt,ve,je,y,b,S,{[se.route.id]:xe.data},void 0,V);Yn.filter(_n=>_n.key!==Z).forEach(_n=>{let Yi=_n.key,Ts=p.fetchers.get(Yi),zc={state:"loading",data:Ts&&Ts.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};p.fetchers.set(Yi,zc),P.set(Yi,pe)}),U({fetchers:new Map(p.fetchers)});let{results:Qo,loaderResults:pt,fetcherResults:rn}=await _e(p.matches,gt,po,Yn,Nt);if(pe.signal.aborted)return;F.delete(Z),P.delete(Z),Yn.forEach(_n=>P.delete(_n.key));let er=Tv(Qo);if(er)return ue(p,er);let{loaderData:Go,errors:Xi}=Cv(p,p.matches,po,pt,void 0,Yn,rn,$),Rc={state:"idle",data:xe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};p.fetchers.set(Z,Rc);let Ji=Kt(ho);p.navigation.state==="loading"&&ho>M?(ke(g,"Expected pending action"),w&&w.abort(),te(p.navigation.location,{matches:gt,loaderData:Go,errors:Xi,fetchers:new Map(p.fetchers)})):(U(Ae({errors:Xi,loaderData:Ev(p.loaderData,Go,gt,Xi)},Ji?{fetchers:new Map(p.fetchers)}:{})),y=!1)}async function ne(Z,W,G,se,ie,ve){let he=p.fetchers.get(Z),ye=Ae({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ve,{data:he&&he.data," _hasFetcherDoneAnything ":!0});p.fetchers.set(Z,ye),U({fetchers:new Map(p.fetchers)});let pe=new AbortController,it=xa(e.history,G,pe.signal);P.set(Z,pe);let xe=await ba("loader",it,se,ie,_.basename);if(Lo(xe)&&(xe=await s1(xe,it.signal,!0)||xe),P.get(Z)===pe&&P.delete(Z),it.signal.aborted)return;if(Oi(xe)){await ue(p,xe);return}if(ja(xe)){let Nt=xi(p.matches,W);p.fetchers.delete(Z),U({fetchers:new Map(p.fetchers),errors:{[Nt.route.id]:xe.error}});return}ke(!Lo(xe),"Unhandled fetcher deferred data");let je={state:"idle",data:xe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};p.fetchers.set(Z,je),U({fetchers:new Map(p.fetchers)})}async function ue(Z,W,G){var se;let{submission:ie,replace:ve,isFetchActionRedirect:he}=G===void 0?{}:G;W.revalidate&&(y=!0);let ye=ls(Z.location,W.location,Ae({_isRedirect:!0},he?{_isFetchActionRedirect:!0}:{}));if(ke(ye,"Expected a location on the redirect navigation"),n1.test(W.location)&&r1&&typeof((se=window)==null?void 0:se.location)<"u"){let gt=e.history.createURL(W.location).origin;if(window.location.origin!==gt){ve?window.location.replace(W.location):window.location.assign(W.location);return}}w=null;let pe=ve===!0?lt.Replace:lt.Push,{formMethod:it,formAction:xe,formEncType:je,formData:Nt}=Z.navigation;!ie&&it&&xe&&Nt&&je&&(ie={formMethod:it,formAction:xe,formEncType:je,formData:Nt}),UP.has(W.status)&&ie&&lr(ie.formMethod)?await q(pe,ye,{submission:Ae({},ie,{formAction:W.location}),preventScrollReset:x}):await q(pe,ye,{overrideNavigation:{state:"loading",location:ye,formMethod:ie?ie.formMethod:void 0,formAction:ie?ie.formAction:void 0,formEncType:ie?ie.formEncType:void 0,formData:ie?ie.formData:void 0},preventScrollReset:x})}async function _e(Z,W,G,se,ie){let ve=await Promise.all([...G.map(pe=>ba("loader",ie,pe,W,_.basename)),...se.map(pe=>ba("loader",xa(e.history,pe.path,ie.signal),pe.match,pe.matches,_.basename))]),he=ve.slice(0,G.length),ye=ve.slice(G.length);return await Promise.all([Lv(Z,G,he,ie.signal,!1,p.loaderData),Lv(Z,se.map(pe=>pe.match),ye,ie.signal,!0)]),{results:ve,loaderResults:he,fetcherResults:ye}}function Ye(){y=!0,b.push(...$t()),V.forEach((Z,W)=>{P.has(W)&&(S.push(W),Ne(W))})}function qe(Z,W,G){let se=xi(p.matches,W);Fe(Z),U({errors:{[se.route.id]:G},fetchers:new Map(p.fetchers)})}function Fe(Z){P.has(Z)&&Ne(Z),V.delete(Z),F.delete(Z),j.delete(Z),p.fetchers.delete(Z)}function Ne(Z){let W=P.get(Z);ke(W,"Expected fetch controller: "+Z),W.abort(),P.delete(Z)}function nt(Z){for(let W of Z){let se={state:"idle",data:B(W).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};p.fetchers.set(W,se)}}function Oe(){let Z=[];for(let W of j){let G=p.fetchers.get(W);ke(G,"Expected fetcher: "+W),G.state==="loading"&&(j.delete(W),Z.push(W))}nt(Z)}function Kt(Z){let W=[];for(let[G,se]of F)if(se<Z){let ie=p.fetchers.get(G);ke(ie,"Expected fetcher: "+G),ie.state==="loading"&&(Ne(G),F.delete(G),W.push(G))}return nt(W),W.length>0}function Ut(Z,W){let G=p.blockers.get(Z)||wv;return z.get(Z)!==W&&z.set(Z,W),G}function ze(Z){p.blockers.delete(Z),z.delete(Z)}function Ct(Z,W){let G=p.blockers.get(Z)||wv;ke(G.state==="unblocked"&&W.state==="blocked"||G.state==="blocked"&&W.state==="blocked"||G.state==="blocked"&&W.state==="proceeding"||G.state==="blocked"&&W.state==="unblocked"||G.state==="proceeding"&&W.state==="unblocked","Invalid blocker state transition: "+G.state+" -> "+W.state),p.blockers.set(Z,W),U({blockers:new Map(p.blockers)})}function Nn(Z){let{currentLocation:W,nextLocation:G,historyAction:se}=Z;if(z.size===0)return;z.size>1&&us(!1,"A router only supports one blocker at a time");let ie=Array.from(z.entries()),[ve,he]=ie[ie.length-1],ye=p.blockers.get(ve);if(!(ye&&ye.state==="proceeding")&&he({currentLocation:W,nextLocation:G,historyAction:se}))return ve}function $t(Z){let W=[];return $.forEach((G,se)=>{(!Z||Z(se))&&(G.cancel(),W.push(se),$.delete(se))}),W}function Jn(Z,W,G){if(i=Z,l=W,a=G||(se=>se.key),!u&&p.navigation===Ad){u=!0;let se=Sr(p.location,p.matches);se!=null&&U({restoreScrollPosition:se})}return()=>{i=null,l=null,a=null}}function Bt(Z,W){if(i&&a&&l){let G=W.map(ie=>Rv(ie,p.loaderData)),se=a(Z,G)||Z.key;i[se]=l()}}function Sr(Z,W){if(i&&a&&l){let G=W.map(ve=>Rv(ve,p.loaderData)),se=a(Z,G)||Z.key,ie=i[se];if(typeof ie=="number")return ie}return null}return _={get basename(){return e.basename},get state(){return p},get routes(){return t},initialize:me,subscribe:fe,enableScrollRestoration:Jn,navigate:I,fetch:Q,revalidate:oe,createHref:Z=>e.history.createHref(Z),encodeLocation:Z=>e.history.encodeLocation(Z),getFetcher:B,deleteFetcher:Fe,dispose:re,getBlocker:Ut,deleteBlocker:ze,_internalFetchControllers:P,_internalActiveDeferreds:$},_}function WP(e){return e!=null&&"formData"in e}function kv(e,t,n){n===void 0&&(n=!1);let r=typeof e=="string"?e:$o(e);if(!t||!WP(t))return{path:r};if(t.formMethod&&!XP(t.formMethod))return{path:r,error:zr(405,{method:t.formMethod})};let i;if(t.formData&&(i={formMethod:t.formMethod||"get",formAction:a1(r),formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:t.formData},lr(i.formMethod)))return{path:r,submission:i};let a=wr(r),l=i1(t.formData);return n&&a.search&&l1(a.search)&&l.append("index",""),a.search="?"+l,{path:$o(a),submission:i}}function VP(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Sv(e,t,n,r,i,a,l,u,d,f,m){let _=f?Object.values(f)[0]:d?Object.values(d)[0]:void 0,p=e.createURL(t.location),g=e.createURL(i),x=a||p.toString()===g.toString()||p.search!==g.search,w=f?Object.keys(f)[0]:void 0,y=VP(n,w).filter((S,P)=>{if(S.route.loader==null)return!1;if(qP(t.loaderData,t.matches[P],S)||l.some(F=>F===S.route.id))return!0;let R=t.matches[P],M=S;return Pv(S,Ae({currentUrl:p,currentParams:R.params,nextUrl:g,nextParams:M.params},r,{actionResult:_,defaultShouldRevalidate:x||o1(R,M)}))}),b=[];return m&&m.forEach((S,P)=>{if(n.some(R=>R.route.id===S.routeId))u.includes(P)?b.push(Ae({key:P},S)):Pv(S.match,Ae({currentUrl:p,currentParams:t.matches[t.matches.length-1].params,nextUrl:g,nextParams:n[n.length-1].params},r,{actionResult:_,defaultShouldRevalidate:x}))&&b.push(Ae({key:P},S));else return}),[y,b]}function qP(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function o1(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Pv(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function ba(e,t,n,r,i,a,l,u){i===void 0&&(i="/"),a===void 0&&(a=!1),l===void 0&&(l=!1);let d,f,m,_=new Promise((g,x)=>m=x),p=()=>m();t.signal.addEventListener("abort",p);try{let g=n.route[e];ke(g,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),f=await Promise.race([g({request:t,params:n.params,context:u}),_]),ke(f!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(g){d=wt.error,f=g}finally{t.signal.removeEventListener("abort",p)}if(GP(f)){let g=f.status;if(jP.has(g)){let C=f.headers.get("Location");if(ke(C,"Redirects returned/thrown from loaders/actions must have a Location header"),n1.test(C)){if(!a){let y=new URL(t.url),b=C.startsWith("//")?new URL(y.protocol+C):new URL(C);b.origin===y.origin&&(C=b.pathname+b.search+b.hash)}}else{let y=r.slice(0,r.indexOf(n)+1),b=Ip(y).map(P=>P.pathnameBase),S=Y0(C,b,new URL(t.url).pathname);if(ke($o(S),"Unable to resolve redirect location: "+C),i){let P=S.pathname;S.pathname=P==="/"?i:Gr([i,P])}C=$o(S)}if(a)throw f.headers.set("Location",C),f;return{type:wt.redirect,status:g,location:C,revalidate:f.headers.get("X-Remix-Revalidate")!==null}}if(l)throw{type:d||wt.data,response:f};let x,w=f.headers.get("Content-Type");return w&&/\bapplication\/json\b/.test(w)?x=await f.json():x=await f.text(),d===wt.error?{type:d,error:new Mp(g,f.statusText,x),headers:f.headers}:{type:wt.data,data:x,statusCode:f.status,headers:f.headers}}return d===wt.error?{type:d,error:f}:f instanceof BP?{type:wt.deferred,deferredData:f}:{type:wt.data,data:f}}function xa(e,t,n,r){let i=e.createURL(a1(t)).toString(),a={signal:n};if(r&&lr(r.formMethod)){let{formMethod:l,formEncType:u,formData:d}=r;a.method=l.toUpperCase(),a.body=u==="application/x-www-form-urlencoded"?i1(d):d}return new Request(i,a)}function i1(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function KP(e,t,n,r,i){let a={},l=null,u,d=!1,f={};return n.forEach((m,_)=>{let p=t[_].route.id;if(ke(!Oi(m),"Cannot handle redirect results in processLoaderData"),ja(m)){let g=xi(e,p),x=m.error;r&&(x=Object.values(r)[0],r=void 0),l=l||{},l[g.route.id]==null&&(l[g.route.id]=x),a[p]=void 0,d||(d=!0,u=e1(m.error)?m.error.status:500),m.headers&&(f[p]=m.headers)}else Lo(m)?(i.set(p,m.deferredData),a[p]=m.deferredData.data):a[p]=m.data,m.statusCode!=null&&m.statusCode!==200&&!d&&(u=m.statusCode),m.headers&&(f[p]=m.headers)}),r&&(l=r,a[Object.keys(r)[0]]=void 0),{loaderData:a,errors:l,statusCode:u||200,loaderHeaders:f}}function Cv(e,t,n,r,i,a,l,u){let{loaderData:d,errors:f}=KP(t,n,r,i,u);for(let m=0;m<a.length;m++){let{key:_,match:p}=a[m];ke(l!==void 0&&l[m]!==void 0,"Did not find corresponding fetcher result");let g=l[m];if(ja(g)){let x=xi(e.matches,p.route.id);f&&f[x.route.id]||(f=Ae({},f,{[x.route.id]:g.error})),e.fetchers.delete(_)}else if(Oi(g))ke(!1,"Unhandled fetcher revalidation redirect");else if(Lo(g))ke(!1,"Unhandled fetcher deferred data");else{let x={state:"idle",data:g.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(_,x)}}return{loaderData:d,errors:f}}function Ev(e,t,n,r){let i=Ae({},t);for(let a of n){let l=a.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(i[l]=t[l]):e[l]!==void 0&&(i[l]=e[l]),r&&r.hasOwnProperty(l))break}return i}function xi(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Ov(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function zr(e,t){let{pathname:n,routeId:r,method:i,type:a}=t===void 0?{}:t,l="Unknown Server Error",u="Unknown @remix-run/router error";return e===400?(l="Bad Request",i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a==="defer-action"&&(u="defer() is not supported in actions")):e===403?(l="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",u='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new Mp(e||500,l,new Error(u),!0)}function Tv(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Oi(n))return n}}function a1(e){let t=typeof e=="string"?wr(e):e;return $o(Ae({},t,{hash:""}))}function QP(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function Lo(e){return e.type===wt.deferred}function ja(e){return e.type===wt.error}function Oi(e){return(e&&e.type)===wt.redirect}function GP(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function XP(e){return FP.has(e)}function lr(e){return MP.has(e)}async function Lv(e,t,n,r,i,a){for(let l=0;l<n.length;l++){let u=n[l],d=t[l],f=e.find(_=>_.route.id===d.route.id),m=f!=null&&!o1(f,d)&&(a&&a[d.route.id])!==void 0;Lo(u)&&(i||m)&&await s1(u,r,i).then(_=>{_&&(n[l]=_||n[l])})}}async function s1(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:wt.data,data:e.deferredData.unwrappedData}}catch(i){return{type:wt.error,error:i}}return{type:wt.data,data:e.deferredData.data}}}function l1(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Rv(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function zv(e,t){let n=typeof t=="string"?wr(t).search:t.search;if(e[e.length-1].route.index&&l1(n||""))return e[e.length-1];let r=Ip(e);return r[r.length-1]}/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cu(){return cu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cu.apply(this,arguments)}function JP(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const YP=typeof Object.is=="function"?Object.is:JP,{useState:eC,useEffect:tC,useLayoutEffect:nC,useDebugValue:rC}=Ha;function oC(e,t,n){const r=t(),[{inst:i},a]=eC({inst:{value:r,getSnapshot:t}});return nC(()=>{i.value=r,i.getSnapshot=t,Bd(i)&&a({inst:i})},[e,r,t]),tC(()=>(Bd(i)&&a({inst:i}),e(()=>{Bd(i)&&a({inst:i})})),[e]),rC(r),r}function Bd(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!YP(n,r)}catch{return!0}}function iC(e,t,n){return t()}const aC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sC=!aC,lC=sC?iC:oC,uC="useSyncExternalStore"in Ha?(e=>e.useSyncExternalStore)(Ha):lC,Dp=T.createContext(null),Fp=T.createContext(null),jp=T.createContext(null),yc=T.createContext(null),ws=T.createContext({outlet:null,matches:[]}),u1=T.createContext(null);function bc(){return T.useContext(yc)!=null}function c1(){return bc()||ke(!1),T.useContext(yc).location}function cC(){bc()||ke(!1);let{basename:e,navigator:t}=T.useContext(jp),{matches:n}=T.useContext(ws),{pathname:r}=c1(),i=JSON.stringify(Ip(n).map(u=>u.pathnameBase)),a=T.useRef(!1);return T.useEffect(()=>{a.current=!0}),T.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){t.go(u);return}let f=Y0(u,JSON.parse(i),r,d.relative==="path");e!=="/"&&(f.pathname=f.pathname==="/"?e:Gr([e,f.pathname])),(d.replace?t.replace:t.push)(f,d.state,d)},[e,t,i,r])}function dC(e,t){bc()||ke(!1);let{navigator:n}=T.useContext(jp),r=T.useContext(Fp),{matches:i}=T.useContext(ws),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let d=c1(),f;if(t){var m;let w=typeof t=="string"?wr(t):t;u==="/"||(m=w.pathname)!=null&&m.startsWith(u)||ke(!1),f=w}else f=d;let _=f.pathname||"/",p=u==="/"?_:_.slice(u.length)||"/",g=Ta(e,{pathname:p}),x=mC(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:Gr([u,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?u:Gr([u,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r||void 0);return t&&x?T.createElement(yc.Provider,{value:{location:cu({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:lt.Pop}},x):x}function fC(){let e=yC(),t=e1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,a)}class hC extends T.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?T.createElement(ws.Provider,{value:this.props.routeContext},T.createElement(u1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function pC(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(Dp);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(ws.Provider,{value:t},r)}function mC(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n?.errors;if(i!=null){let a=r.findIndex(l=>l.route.id&&i?.[l.route.id]);a>=0||ke(!1),r=r.slice(0,Math.min(r.length,a+1))}return r.reduceRight((a,l,u)=>{let d=l.route.id?i?.[l.route.id]:null,f=n?l.route.errorElement||T.createElement(fC,null):null,m=t.concat(r.slice(0,u+1)),_=()=>T.createElement(pC,{match:l,routeContext:{outlet:a,matches:m}},d?f:l.route.element!==void 0?l.route.element:a);return n&&(l.route.errorElement||u===0)?T.createElement(hC,{location:n.location,component:f,error:d,children:_(),routeContext:{outlet:null,matches:m}}):_()},null)}var Av;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Av||(Av={}));var du;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(du||(du={}));function _C(e){let t=T.useContext(Fp);return t||ke(!1),t}function vC(e){let t=T.useContext(ws);return t||ke(!1),t}function gC(e){let t=vC(),n=t.matches[t.matches.length-1];return n.route.id||ke(!1),n.route.id}function yC(){var e;let t=T.useContext(u1),n=_C(du.UseRouteError),r=gC(du.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function bC(e){let{fallbackElement:t,router:n}=e,r=uC(n.subscribe,()=>n.state,()=>n.state),i=T.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:l=>n.navigate(l),push:(l,u,d)=>n.navigate(l,{state:u,preventScrollReset:d?.preventScrollReset}),replace:(l,u,d)=>n.navigate(l,{replace:!0,state:u,preventScrollReset:d?.preventScrollReset})}),[n]),a=n.basename||"/";return T.createElement(T.Fragment,null,T.createElement(Dp.Provider,{value:{router:n,navigator:i,static:!1,basename:a}},T.createElement(Fp.Provider,{value:r},T.createElement(wC,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:i},n.state.initialized?T.createElement(kC,null):t))),null)}function xC(e){ke(!1)}function wC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=lt.Pop,navigator:a,static:l=!1}=e;bc()&&ke(!1);let u=t.replace(/^\/*/,"/"),d=T.useMemo(()=>({basename:u,navigator:a,static:l}),[u,a,l]);typeof r=="string"&&(r=wr(r));let{pathname:f="/",search:m="",hash:_="",state:p=null,key:g="default"}=r,x=T.useMemo(()=>{let w=J0(f,u);return w==null?null:{pathname:w,search:m,hash:_,state:p,key:g}},[u,f,m,_,p,g]);return x==null?null:T.createElement(jp.Provider,{value:d},T.createElement(yc.Provider,{children:n,value:{location:x,navigationType:i}}))}function kC(e){let{children:t,location:n}=e,r=T.useContext(Dp),i=r&&!t?r.router.routes:nh(t);return dC(i,n)}var Bv;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Bv||(Bv={}));new Promise(()=>{});function nh(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;if(r.type===T.Fragment){n.push.apply(n,nh(r.props.children,t));return}r.type!==xC&&ke(!1),!r.props.index||!r.props.children||ke(!1);let a=[...t,i],l={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(l.children=nh(r.props.children,a)),n.push(l)}),n}function d1(e){return e.map(t=>{let n=cu({},t);return n.hasErrorBoundary==null&&(n.hasErrorBoundary=n.errorElement!=null),n.children&&(n.children=d1(n.children)),n})}/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rh(){return rh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rh.apply(this,arguments)}function SC(e,t){return HP({basename:t?.basename,history:dP({window:t?.window}),hydrationData:t?.hydrationData||PC(),routes:d1(e)}).initialize()}function PC(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=rh({},t,{errors:CC(t.errors)})),t}function CC(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Mp(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let a=new Error(i.message);a.stack="",n[r]=a}else n[r]=i;return n}var Nv;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Nv||(Nv={}));var Iv;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Iv||(Iv={}));function Tn(e){return Tn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Tn(e)}function EC(e,t){if(Tn(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Tn(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function f1(e){var t=EC(e,"string");return Tn(t)==="symbol"?t:String(t)}function zn(e,t,n){return t=f1(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function OC(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];typeof n[0]=="string"&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var Mv={};function oh(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&Mv[t[0]]||(typeof t[0]=="string"&&(Mv[t[0]]=new Date),OC.apply(void 0,t))}function Dv(e,t,n){e.loadNamespaces(t,function(){if(e.isInitialized)n();else{var r=function i(){setTimeout(function(){e.off("initialized",i)},0),n()};e.on("initialized",r)}})}function TC(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.languages[0],i=t.options?t.options.fallbackLng:!1,a=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;var l=function(d,f){var m=t.services.backendConnector.state["".concat(d,"|").concat(f)];return m===-1||m===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!l(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||l(r,e)&&(!i||l(a,e)))}function LC(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!t.languages||!t.languages.length)return oh("i18n.languages were undefined or empty",t.languages),!0;var r=t.options.ignoreJSONStructure!==void 0;return r?t.hasLoadedNamespace(e,{precheck:function(a,l){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!l(a.isLanguageChangingTo,e))return!1}}):TC(e,t,n)}var RC=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,zC={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},AC=function(t){return zC[t]},BC=function(t){return t.replace(RC,AC)};function Fv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function jv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Fv(Object(n),!0).forEach(function(r){zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var ih={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:BC};function NC(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ih=jv(jv({},ih),e)}function IC(){return ih}var h1;function MC(e){h1=e}function DC(){return h1}function An(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Uv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,f1(r.key),r)}}function Bn(e,t,n){return t&&Uv(e.prototype,t),n&&Uv(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var FC={type:"3rdParty",init:function(t){NC(t.options.react),MC(t)}},jC=T.createContext(),UC=function(){function e(){An(this,e),this.usedNamespaces={}}return Bn(e,[{key:"addUsedNamespaces",value:function(n){var r=this;n.forEach(function(i){r.usedNamespaces[i]||(r.usedNamespaces[i]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function p1(e){if(Array.isArray(e))return e}function $C(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,u=[],d=!0,f=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;d=!1}else for(;!(d=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);d=!0);}catch(m){f=!0,i=m}finally{try{if(!d&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(f)throw i}}return u}}function $v(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m1(e,t){if(e){if(typeof e=="string")return $v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $v(e,t)}}function _1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ZC(e,t){return p1(e)||$C(e,t)||m1(e,t)||_1()}function Zv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Nd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zv(Object(n),!0).forEach(function(r){zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var HC=function(t,n){var r=T.useRef();return T.useEffect(function(){r.current=n?r.current:t},[t,n]),r.current};function Up(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.i18n,r=T.useContext(jC)||{},i=r.i18n,a=r.defaultNS,l=n||i||DC();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new UC),!l){oh("You will need to pass in an i18next instance by using initReactI18next");var u=function(V){return Array.isArray(V)?V[V.length-1]:V},d=[u,{},!1];return d.t=u,d.i18n={},d.ready=!1,d}l.options.react&&l.options.react.wait!==void 0&&oh("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var f=Nd(Nd(Nd({},IC()),l.options.react),t),m=f.useSuspense,_=f.keyPrefix,p=e||a||l.options&&l.options.defaultNS;p=typeof p=="string"?[p]:p||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(p);var g=(l.isInitialized||l.initializedStoreOnce)&&p.every(function(j){return LC(j,l,f)});function x(){return l.getFixedT(null,f.nsMode==="fallback"?p:p[0],_)}var w=T.useState(x),C=ZC(w,2),y=C[0],b=C[1],S=p.join(),P=HC(S),R=T.useRef(!0);T.useEffect(function(){var j=f.bindI18n,V=f.bindI18nStore;R.current=!0,!g&&!m&&Dv(l,p,function(){R.current&&b(x)}),g&&P&&P!==S&&R.current&&b(x);function $(){R.current&&b(x)}return j&&l&&l.on(j,$),V&&l&&l.store.on(V,$),function(){R.current=!1,j&&l&&j.split(" ").forEach(function(z){return l.off(z,$)}),V&&l&&V.split(" ").forEach(function(z){return l.store.off(z,$)})}},[l,S]);var M=T.useRef(!0);T.useEffect(function(){R.current&&!M.current&&b(x),M.current=!1},[l,_]);var F=[y,l,g];if(F.t=y,F.i18n=l,F.ready=g,g||!g&&!m)return F;throw new Promise(function(j){Dv(l,p,function(){j()})})}function fu(e,t){return fu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},fu(e,t)}function ks(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,fu(e,t)}var Ss=function(){function e(){this.listeners=[]}var t=e.prototype;return t.subscribe=function(r){var i=this,a=r||function(){};return this.listeners.push(a),this.onSubscribe(),function(){i.listeners=i.listeners.filter(function(l){return l!==a}),i.onUnsubscribe()}},t.hasListeners=function(){return this.listeners.length>0},t.onSubscribe=function(){},t.onUnsubscribe=function(){},e}(),hu=typeof window>"u";function Lt(){}function WC(e,t){return typeof e=="function"?e(t):e}function ah(e){return typeof e=="number"&&e>=0&&e!==1/0}function pu(e){return Array.isArray(e)?e:[e]}function v1(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Rl(e,t,n){return xc(e)?typeof t=="function"?Be({},n,{queryKey:e,queryFn:t}):Be({},t,{queryKey:e}):e}function Nr(e,t,n){return xc(e)?[Be({},t,{queryKey:e}),n]:[e||{},t]}function VC(e,t){if(e===!0&&t===!0||e==null&&t==null)return"all";if(e===!1&&t===!1)return"none";var n=e??!t;return n?"active":"inactive"}function Hv(e,t){var n=e.active,r=e.exact,i=e.fetching,a=e.inactive,l=e.predicate,u=e.queryKey,d=e.stale;if(xc(u)){if(r){if(t.queryHash!==$p(u,t.options))return!1}else if(!mu(t.queryKey,u))return!1}var f=VC(n,a);if(f==="none")return!1;if(f!=="all"){var m=t.isActive();if(f==="active"&&!m||f==="inactive"&&m)return!1}return!(typeof d=="boolean"&&t.isStale()!==d||typeof i=="boolean"&&t.isFetching()!==i||l&&!l(t))}function Wv(e,t){var n=e.exact,r=e.fetching,i=e.predicate,a=e.mutationKey;if(xc(a)){if(!t.options.mutationKey)return!1;if(n){if(Ro(t.options.mutationKey)!==Ro(a))return!1}else if(!mu(t.options.mutationKey,a))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||i&&!i(t))}function $p(e,t){var n=t?.queryKeyHashFn||Ro;return n(e)}function Ro(e){var t=pu(e);return qC(t)}function qC(e){return JSON.stringify(e,function(t,n){return sh(n)?Object.keys(n).sort().reduce(function(r,i){return r[i]=n[i],r},{}):n})}function mu(e,t){return g1(pu(e),pu(t))}function g1(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(function(n){return!g1(e[n],t[n])}):!1}function _u(e,t){if(e===t)return e;var n=Array.isArray(e)&&Array.isArray(t);if(n||sh(e)&&sh(t)){for(var r=n?e.length:Object.keys(e).length,i=n?t:Object.keys(t),a=i.length,l=n?[]:{},u=0,d=0;d<a;d++){var f=n?d:i[d];l[f]=_u(e[f],t[f]),l[f]===e[f]&&u++}return r===a&&u===r?e:l}return t}function KC(e,t){if(e&&!t||t&&!e)return!1;for(var n in e)if(e[n]!==t[n])return!1;return!0}function sh(e){if(!Vv(e))return!1;var t=e.constructor;if(typeof t>"u")return!0;var n=t.prototype;return!(!Vv(n)||!n.hasOwnProperty("isPrototypeOf"))}function Vv(e){return Object.prototype.toString.call(e)==="[object Object]"}function xc(e){return typeof e=="string"||Array.isArray(e)}function QC(e){return new Promise(function(t){setTimeout(t,e)})}function qv(e){Promise.resolve().then(e).catch(function(t){return setTimeout(function(){throw t})})}function y1(){if(typeof AbortController=="function")return new AbortController}var GC=function(e){ks(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(i){var a;if(!hu&&((a=window)!=null&&a.addEventListener)){var l=function(){return i()};return window.addEventListener("visibilitychange",l,!1),window.addEventListener("focus",l,!1),function(){window.removeEventListener("visibilitychange",l),window.removeEventListener("focus",l)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var a,l=this;this.setup=i,(a=this.cleanup)==null||a.call(this),this.cleanup=i(function(u){typeof u=="boolean"?l.setFocused(u):l.onFocus()})},n.setFocused=function(i){this.focused=i,i&&this.onFocus()},n.onFocus=function(){this.listeners.forEach(function(i){i()})},n.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},t}(Ss),Ua=new GC,XC=function(e){ks(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(i){var a;if(!hu&&((a=window)!=null&&a.addEventListener)){var l=function(){return i()};return window.addEventListener("online",l,!1),window.addEventListener("offline",l,!1),function(){window.removeEventListener("online",l),window.removeEventListener("offline",l)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var a,l=this;this.setup=i,(a=this.cleanup)==null||a.call(this),this.cleanup=i(function(u){typeof u=="boolean"?l.setOnline(u):l.onOnline()})},n.setOnline=function(i){this.online=i,i&&this.onOnline()},n.onOnline=function(){this.listeners.forEach(function(i){i()})},n.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},t}(Ss),zl=new XC;function JC(e){return Math.min(1e3*Math.pow(2,e),3e4)}function vu(e){return typeof e?.cancel=="function"}var b1=function(t){this.revert=t?.revert,this.silent=t?.silent};function Al(e){return e instanceof b1}var x1=function(t){var n=this,r=!1,i,a,l,u;this.abort=t.abort,this.cancel=function(p){return i?.(p)},this.cancelRetry=function(){r=!0},this.continueRetry=function(){r=!1},this.continue=function(){return a?.()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(p,g){l=p,u=g});var d=function(g){n.isResolved||(n.isResolved=!0,t.onSuccess==null||t.onSuccess(g),a?.(),l(g))},f=function(g){n.isResolved||(n.isResolved=!0,t.onError==null||t.onError(g),a?.(),u(g))},m=function(){return new Promise(function(g){a=g,n.isPaused=!0,t.onPause==null||t.onPause()}).then(function(){a=void 0,n.isPaused=!1,t.onContinue==null||t.onContinue()})},_=function p(){if(!n.isResolved){var g;try{g=t.fn()}catch(x){g=Promise.reject(x)}i=function(w){if(!n.isResolved&&(f(new b1(w)),n.abort==null||n.abort(),vu(g)))try{g.cancel()}catch{}},n.isTransportCancelable=vu(g),Promise.resolve(g).then(d).catch(function(x){var w,C;if(!n.isResolved){var y=(w=t.retry)!=null?w:3,b=(C=t.retryDelay)!=null?C:JC,S=typeof b=="function"?b(n.failureCount,x):b,P=y===!0||typeof y=="number"&&n.failureCount<y||typeof y=="function"&&y(n.failureCount,x);if(r||!P){f(x);return}n.failureCount++,t.onFail==null||t.onFail(n.failureCount,x),QC(S).then(function(){if(!Ua.isFocused()||!zl.isOnline())return m()}).then(function(){r?f(x):p()})}})}};_()},YC=function(){function e(){this.queue=[],this.transactions=0,this.notifyFn=function(n){n()},this.batchNotifyFn=function(n){n()}}var t=e.prototype;return t.batch=function(r){var i;this.transactions++;try{i=r()}finally{this.transactions--,this.transactions||this.flush()}return i},t.schedule=function(r){var i=this;this.transactions?this.queue.push(r):qv(function(){i.notifyFn(r)})},t.batchCalls=function(r){var i=this;return function(){for(var a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];i.schedule(function(){r.apply(void 0,l)})}},t.flush=function(){var r=this,i=this.queue;this.queue=[],i.length&&qv(function(){r.batchNotifyFn(function(){i.forEach(function(a){r.notifyFn(a)})})})},t.setNotifyFunction=function(r){this.notifyFn=r},t.setBatchNotifyFunction=function(r){this.batchNotifyFn=r},e}(),tt=new YC,w1=console;function gu(){return w1}function eE(e){w1=e}var tE=function(){function e(n){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.cache=n.cache,this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.initialState=n.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=n.meta,this.scheduleGc()}var t=e.prototype;return t.setOptions=function(r){var i;this.options=Be({},this.defaultOptions,r),this.meta=r?.meta,this.cacheTime=Math.max(this.cacheTime||0,(i=this.options.cacheTime)!=null?i:5*60*1e3)},t.setDefaultOptions=function(r){this.defaultOptions=r},t.scheduleGc=function(){var r=this;this.clearGcTimeout(),ah(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){r.optionalRemove()},this.cacheTime))},t.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},t.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},t.setData=function(r,i){var a,l,u=this.state.data,d=WC(r,u);return(a=(l=this.options).isDataEqual)!=null&&a.call(l,u,d)?d=u:this.options.structuralSharing!==!1&&(d=_u(u,d)),this.dispatch({data:d,type:"success",dataUpdatedAt:i?.updatedAt}),d},t.setState=function(r,i){this.dispatch({type:"setState",state:r,setStateOptions:i})},t.cancel=function(r){var i,a=this.promise;return(i=this.retryer)==null||i.cancel(r),a?a.then(Lt).catch(Lt):Promise.resolve()},t.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},t.reset=function(){this.destroy(),this.setState(this.initialState)},t.isActive=function(){return this.observers.some(function(r){return r.options.enabled!==!1})},t.isFetching=function(){return this.state.isFetching},t.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(r){return r.getCurrentResult().isStale})},t.isStaleByTime=function(r){return r===void 0&&(r=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!v1(this.state.dataUpdatedAt,r)},t.onFocus=function(){var r,i=this.observers.find(function(a){return a.shouldFetchOnWindowFocus()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},t.onOnline=function(){var r,i=this.observers.find(function(a){return a.shouldFetchOnReconnect()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},t.addObserver=function(r){this.observers.indexOf(r)===-1&&(this.observers.push(r),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:r}))},t.removeObserver=function(r){this.observers.indexOf(r)!==-1&&(this.observers=this.observers.filter(function(i){return i!==r}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:r}))},t.getObserversCount=function(){return this.observers.length},t.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},t.fetch=function(r,i){var a=this,l,u,d;if(this.state.isFetching){if(this.state.dataUpdatedAt&&i?.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var f;return(f=this.retryer)==null||f.continueRetry(),this.promise}}if(r&&this.setOptions(r),!this.options.queryFn){var m=this.observers.find(function(b){return b.options.queryFn});m&&this.setOptions(m.options)}var _=pu(this.queryKey),p=y1(),g={queryKey:_,pageParam:void 0,meta:this.meta};Object.defineProperty(g,"signal",{enumerable:!0,get:function(){if(p)return a.abortSignalConsumed=!0,p.signal}});var x=function(){return a.options.queryFn?(a.abortSignalConsumed=!1,a.options.queryFn(g)):Promise.reject("Missing queryFn")},w={fetchOptions:i,options:this.options,queryKey:_,state:this.state,fetchFn:x,meta:this.meta};if((l=this.options.behavior)!=null&&l.onFetch){var C;(C=this.options.behavior)==null||C.onFetch(w)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((u=w.fetchOptions)==null?void 0:u.meta)){var y;this.dispatch({type:"fetch",meta:(y=w.fetchOptions)==null?void 0:y.meta})}return this.retryer=new x1({fn:w.fetchFn,abort:p==null||(d=p.abort)==null?void 0:d.bind(p),onSuccess:function(S){a.setData(S),a.cache.config.onSuccess==null||a.cache.config.onSuccess(S,a),a.cacheTime===0&&a.optionalRemove()},onError:function(S){Al(S)&&S.silent||a.dispatch({type:"error",error:S}),Al(S)||(a.cache.config.onError==null||a.cache.config.onError(S,a),gu().error(S)),a.cacheTime===0&&a.optionalRemove()},onFail:function(){a.dispatch({type:"failed"})},onPause:function(){a.dispatch({type:"pause"})},onContinue:function(){a.dispatch({type:"continue"})},retry:w.options.retry,retryDelay:w.options.retryDelay}),this.promise=this.retryer.promise,this.promise},t.dispatch=function(r){var i=this;this.state=this.reducer(this.state,r),tt.batch(function(){i.observers.forEach(function(a){a.onQueryUpdate(r)}),i.cache.notify({query:i,type:"queryUpdated",action:r})})},t.getDefaultState=function(r){var i=typeof r.initialData=="function"?r.initialData():r.initialData,a=typeof r.initialData<"u",l=a?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0,u=typeof i<"u";return{data:i,dataUpdateCount:0,dataUpdatedAt:u?l??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:u?"success":"idle"}},t.reducer=function(r,i){var a,l;switch(i.type){case"failed":return Be({},r,{fetchFailureCount:r.fetchFailureCount+1});case"pause":return Be({},r,{isPaused:!0});case"continue":return Be({},r,{isPaused:!1});case"fetch":return Be({},r,{fetchFailureCount:0,fetchMeta:(a=i.meta)!=null?a:null,isFetching:!0,isPaused:!1},!r.dataUpdatedAt&&{error:null,status:"loading"});case"success":return Be({},r,{data:i.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(l=i.dataUpdatedAt)!=null?l:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var u=i.error;return Al(u)&&u.revert&&this.revertState?Be({},this.revertState):Be({},r,{error:u,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return Be({},r,{isInvalidated:!0});case"setState":return Be({},r,i.state);default:return r}},e}(),nE=function(e){ks(t,e);function t(r){var i;return i=e.call(this)||this,i.config=r||{},i.queries=[],i.queriesMap={},i}var n=t.prototype;return n.build=function(i,a,l){var u,d=a.queryKey,f=(u=a.queryHash)!=null?u:$p(d,a),m=this.get(f);return m||(m=new tE({cache:this,queryKey:d,queryHash:f,options:i.defaultQueryOptions(a),state:l,defaultOptions:i.getQueryDefaults(d),meta:a.meta}),this.add(m)),m},n.add=function(i){this.queriesMap[i.queryHash]||(this.queriesMap[i.queryHash]=i,this.queries.push(i),this.notify({type:"queryAdded",query:i}))},n.remove=function(i){var a=this.queriesMap[i.queryHash];a&&(i.destroy(),this.queries=this.queries.filter(function(l){return l!==i}),a===i&&delete this.queriesMap[i.queryHash],this.notify({type:"queryRemoved",query:i}))},n.clear=function(){var i=this;tt.batch(function(){i.queries.forEach(function(a){i.remove(a)})})},n.get=function(i){return this.queriesMap[i]},n.getAll=function(){return this.queries},n.find=function(i,a){var l=Nr(i,a),u=l[0];return typeof u.exact>"u"&&(u.exact=!0),this.queries.find(function(d){return Hv(u,d)})},n.findAll=function(i,a){var l=Nr(i,a),u=l[0];return Object.keys(u).length>0?this.queries.filter(function(d){return Hv(u,d)}):this.queries},n.notify=function(i){var a=this;tt.batch(function(){a.listeners.forEach(function(l){l(i)})})},n.onFocus=function(){var i=this;tt.batch(function(){i.queries.forEach(function(a){a.onFocus()})})},n.onOnline=function(){var i=this;tt.batch(function(){i.queries.forEach(function(a){a.onOnline()})})},t}(Ss),rE=function(){function e(n){this.options=Be({},n.defaultOptions,n.options),this.mutationId=n.mutationId,this.mutationCache=n.mutationCache,this.observers=[],this.state=n.state||oE(),this.meta=n.meta}var t=e.prototype;return t.setState=function(r){this.dispatch({type:"setState",state:r})},t.addObserver=function(r){this.observers.indexOf(r)===-1&&this.observers.push(r)},t.removeObserver=function(r){this.observers=this.observers.filter(function(i){return i!==r})},t.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(Lt).catch(Lt)):Promise.resolve()},t.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},t.execute=function(){var r=this,i,a=this.state.status==="loading",l=Promise.resolve();return a||(this.dispatch({type:"loading",variables:this.options.variables}),l=l.then(function(){r.mutationCache.config.onMutate==null||r.mutationCache.config.onMutate(r.state.variables,r)}).then(function(){return r.options.onMutate==null?void 0:r.options.onMutate(r.state.variables)}).then(function(u){u!==r.state.context&&r.dispatch({type:"loading",context:u,variables:r.state.variables})})),l.then(function(){return r.executeMutation()}).then(function(u){i=u,r.mutationCache.config.onSuccess==null||r.mutationCache.config.onSuccess(i,r.state.variables,r.state.context,r)}).then(function(){return r.options.onSuccess==null?void 0:r.options.onSuccess(i,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(i,null,r.state.variables,r.state.context)}).then(function(){return r.dispatch({type:"success",data:i}),i}).catch(function(u){return r.mutationCache.config.onError==null||r.mutationCache.config.onError(u,r.state.variables,r.state.context,r),gu().error(u),Promise.resolve().then(function(){return r.options.onError==null?void 0:r.options.onError(u,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(void 0,u,r.state.variables,r.state.context)}).then(function(){throw r.dispatch({type:"error",error:u}),u})})},t.executeMutation=function(){var r=this,i;return this.retryer=new x1({fn:function(){return r.options.mutationFn?r.options.mutationFn(r.state.variables):Promise.reject("No mutationFn found")},onFail:function(){r.dispatch({type:"failed"})},onPause:function(){r.dispatch({type:"pause"})},onContinue:function(){r.dispatch({type:"continue"})},retry:(i=this.options.retry)!=null?i:0,retryDelay:this.options.retryDelay}),this.retryer.promise},t.dispatch=function(r){var i=this;this.state=iE(this.state,r),tt.batch(function(){i.observers.forEach(function(a){a.onMutationUpdate(r)}),i.mutationCache.notify(i)})},e}();function oE(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function iE(e,t){switch(t.type){case"failed":return Be({},e,{failureCount:e.failureCount+1});case"pause":return Be({},e,{isPaused:!0});case"continue":return Be({},e,{isPaused:!1});case"loading":return Be({},e,{context:t.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:t.variables});case"success":return Be({},e,{data:t.data,error:null,status:"success",isPaused:!1});case"error":return Be({},e,{data:void 0,error:t.error,failureCount:e.failureCount+1,isPaused:!1,status:"error"});case"setState":return Be({},e,t.state);default:return e}}var aE=function(e){ks(t,e);function t(r){var i;return i=e.call(this)||this,i.config=r||{},i.mutations=[],i.mutationId=0,i}var n=t.prototype;return n.build=function(i,a,l){var u=new rE({mutationCache:this,mutationId:++this.mutationId,options:i.defaultMutationOptions(a),state:l,defaultOptions:a.mutationKey?i.getMutationDefaults(a.mutationKey):void 0,meta:a.meta});return this.add(u),u},n.add=function(i){this.mutations.push(i),this.notify(i)},n.remove=function(i){this.mutations=this.mutations.filter(function(a){return a!==i}),i.cancel(),this.notify(i)},n.clear=function(){var i=this;tt.batch(function(){i.mutations.forEach(function(a){i.remove(a)})})},n.getAll=function(){return this.mutations},n.find=function(i){return typeof i.exact>"u"&&(i.exact=!0),this.mutations.find(function(a){return Wv(i,a)})},n.findAll=function(i){return this.mutations.filter(function(a){return Wv(i,a)})},n.notify=function(i){var a=this;tt.batch(function(){a.listeners.forEach(function(l){l(i)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var i=this.mutations.filter(function(a){return a.state.isPaused});return tt.batch(function(){return i.reduce(function(a,l){return a.then(function(){return l.continue().catch(Lt)})},Promise.resolve())})},t}(Ss);function sE(){return{onFetch:function(t){t.fetchFn=function(){var n,r,i,a,l,u,d=(n=t.fetchOptions)==null||(r=n.meta)==null?void 0:r.refetchPage,f=(i=t.fetchOptions)==null||(a=i.meta)==null?void 0:a.fetchMore,m=f?.pageParam,_=f?.direction==="forward",p=f?.direction==="backward",g=((l=t.state.data)==null?void 0:l.pages)||[],x=((u=t.state.data)==null?void 0:u.pageParams)||[],w=y1(),C=w?.signal,y=x,b=!1,S=t.options.queryFn||function(){return Promise.reject("Missing queryFn")},P=function(re,fe,U,te){return y=te?[fe].concat(y):[].concat(y,[fe]),te?[U].concat(re):[].concat(re,[U])},R=function(re,fe,U,te){if(b)return Promise.reject("Cancelled");if(typeof U>"u"&&!fe&&re.length)return Promise.resolve(re);var I={queryKey:t.queryKey,signal:C,pageParam:U,meta:t.meta},oe=S(I),q=Promise.resolve(oe).then(function(N){return P(re,U,N,te)});if(vu(oe)){var O=q;O.cancel=oe.cancel}return q},M;if(!g.length)M=R([]);else if(_){var F=typeof m<"u",j=F?m:Kv(t.options,g);M=R(g,F,j)}else if(p){var V=typeof m<"u",$=V?m:lE(t.options,g);M=R(g,V,$,!0)}else(function(){y=[];var me=typeof t.options.getNextPageParam>"u",re=d&&g[0]?d(g[0],0,g):!0;M=re?R([],me,x[0]):Promise.resolve(P([],x[0],g[0]));for(var fe=function(I){M=M.then(function(oe){var q=d&&g[I]?d(g[I],I,g):!0;if(q){var O=me?x[I]:Kv(t.options,oe);return R(oe,me,O)}return Promise.resolve(P(oe,x[I],g[I]))})},U=1;U<g.length;U++)fe(U)})();var z=M.then(function(me){return{pages:me,pageParams:y}}),ee=z;return ee.cancel=function(){b=!0,w?.abort(),vu(M)&&M.cancel()},z}}}}function Kv(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function lE(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}var uE=function(){function e(n){n===void 0&&(n={}),this.queryCache=n.queryCache||new nE,this.mutationCache=n.mutationCache||new aE,this.defaultOptions=n.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var t=e.prototype;return t.mount=function(){var r=this;this.unsubscribeFocus=Ua.subscribe(function(){Ua.isFocused()&&zl.isOnline()&&(r.mutationCache.onFocus(),r.queryCache.onFocus())}),this.unsubscribeOnline=zl.subscribe(function(){Ua.isFocused()&&zl.isOnline()&&(r.mutationCache.onOnline(),r.queryCache.onOnline())})},t.unmount=function(){var r,i;(r=this.unsubscribeFocus)==null||r.call(this),(i=this.unsubscribeOnline)==null||i.call(this)},t.isFetching=function(r,i){var a=Nr(r,i),l=a[0];return l.fetching=!0,this.queryCache.findAll(l).length},t.isMutating=function(r){return this.mutationCache.findAll(Be({},r,{fetching:!0})).length},t.getQueryData=function(r,i){var a;return(a=this.queryCache.find(r,i))==null?void 0:a.state.data},t.getQueriesData=function(r){return this.getQueryCache().findAll(r).map(function(i){var a=i.queryKey,l=i.state,u=l.data;return[a,u]})},t.setQueryData=function(r,i,a){var l=Rl(r),u=this.defaultQueryOptions(l);return this.queryCache.build(this,u).setData(i,a)},t.setQueriesData=function(r,i,a){var l=this;return tt.batch(function(){return l.getQueryCache().findAll(r).map(function(u){var d=u.queryKey;return[d,l.setQueryData(d,i,a)]})})},t.getQueryState=function(r,i){var a;return(a=this.queryCache.find(r,i))==null?void 0:a.state},t.removeQueries=function(r,i){var a=Nr(r,i),l=a[0],u=this.queryCache;tt.batch(function(){u.findAll(l).forEach(function(d){u.remove(d)})})},t.resetQueries=function(r,i,a){var l=this,u=Nr(r,i,a),d=u[0],f=u[1],m=this.queryCache,_=Be({},d,{active:!0});return tt.batch(function(){return m.findAll(d).forEach(function(p){p.reset()}),l.refetchQueries(_,f)})},t.cancelQueries=function(r,i,a){var l=this,u=Nr(r,i,a),d=u[0],f=u[1],m=f===void 0?{}:f;typeof m.revert>"u"&&(m.revert=!0);var _=tt.batch(function(){return l.queryCache.findAll(d).map(function(p){return p.cancel(m)})});return Promise.all(_).then(Lt).catch(Lt)},t.invalidateQueries=function(r,i,a){var l,u,d,f=this,m=Nr(r,i,a),_=m[0],p=m[1],g=Be({},_,{active:(l=(u=_.refetchActive)!=null?u:_.active)!=null?l:!0,inactive:(d=_.refetchInactive)!=null?d:!1});return tt.batch(function(){return f.queryCache.findAll(_).forEach(function(x){x.invalidate()}),f.refetchQueries(g,p)})},t.refetchQueries=function(r,i,a){var l=this,u=Nr(r,i,a),d=u[0],f=u[1],m=tt.batch(function(){return l.queryCache.findAll(d).map(function(p){return p.fetch(void 0,Be({},f,{meta:{refetchPage:d?.refetchPage}}))})}),_=Promise.all(m).then(Lt);return f?.throwOnError||(_=_.catch(Lt)),_},t.fetchQuery=function(r,i,a){var l=Rl(r,i,a),u=this.defaultQueryOptions(l);typeof u.retry>"u"&&(u.retry=!1);var d=this.queryCache.build(this,u);return d.isStaleByTime(u.staleTime)?d.fetch(u):Promise.resolve(d.state.data)},t.prefetchQuery=function(r,i,a){return this.fetchQuery(r,i,a).then(Lt).catch(Lt)},t.fetchInfiniteQuery=function(r,i,a){var l=Rl(r,i,a);return l.behavior=sE(),this.fetchQuery(l)},t.prefetchInfiniteQuery=function(r,i,a){return this.fetchInfiniteQuery(r,i,a).then(Lt).catch(Lt)},t.cancelMutations=function(){var r=this,i=tt.batch(function(){return r.mutationCache.getAll().map(function(a){return a.cancel()})});return Promise.all(i).then(Lt).catch(Lt)},t.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},t.executeMutation=function(r){return this.mutationCache.build(this,r).execute()},t.getQueryCache=function(){return this.queryCache},t.getMutationCache=function(){return this.mutationCache},t.getDefaultOptions=function(){return this.defaultOptions},t.setDefaultOptions=function(r){this.defaultOptions=r},t.setQueryDefaults=function(r,i){var a=this.queryDefaults.find(function(l){return Ro(r)===Ro(l.queryKey)});a?a.defaultOptions=i:this.queryDefaults.push({queryKey:r,defaultOptions:i})},t.getQueryDefaults=function(r){var i;return r?(i=this.queryDefaults.find(function(a){return mu(r,a.queryKey)}))==null?void 0:i.defaultOptions:void 0},t.setMutationDefaults=function(r,i){var a=this.mutationDefaults.find(function(l){return Ro(r)===Ro(l.mutationKey)});a?a.defaultOptions=i:this.mutationDefaults.push({mutationKey:r,defaultOptions:i})},t.getMutationDefaults=function(r){var i;return r?(i=this.mutationDefaults.find(function(a){return mu(r,a.mutationKey)}))==null?void 0:i.defaultOptions:void 0},t.defaultQueryOptions=function(r){if(r?._defaulted)return r;var i=Be({},this.defaultOptions.queries,this.getQueryDefaults(r?.queryKey),r,{_defaulted:!0});return!i.queryHash&&i.queryKey&&(i.queryHash=$p(i.queryKey,i)),i},t.defaultQueryObserverOptions=function(r){return this.defaultQueryOptions(r)},t.defaultMutationOptions=function(r){return r?._defaulted?r:Be({},this.defaultOptions.mutations,this.getMutationDefaults(r?.mutationKey),r,{_defaulted:!0})},t.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},e}(),cE=function(e){ks(t,e);function t(r,i){var a;return a=e.call(this)||this,a.client=r,a.options=i,a.trackedProps=[],a.selectError=null,a.bindMethods(),a.setOptions(i),a}var n=t.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),Qv(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return lh(this.currentQuery,this.options,this.options.refetchOnReconnect)},n.shouldFetchOnWindowFocus=function(){return lh(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(i,a){var l=this.options,u=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(i),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=l.queryKey),this.updateQuery();var d=this.hasListeners();d&&Gv(this.currentQuery,u,this.options,l)&&this.executeFetch(),this.updateResult(a),d&&(this.currentQuery!==u||this.options.enabled!==l.enabled||this.options.staleTime!==l.staleTime)&&this.updateStaleTimeout();var f=this.computeRefetchInterval();d&&(this.currentQuery!==u||this.options.enabled!==l.enabled||f!==this.currentRefetchInterval)&&this.updateRefetchInterval(f)},n.getOptimisticResult=function(i){var a=this.client.defaultQueryObserverOptions(i),l=this.client.getQueryCache().build(this.client,a);return this.createResult(l,a)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(i,a){var l=this,u={},d=function(m){l.trackedProps.includes(m)||l.trackedProps.push(m)};return Object.keys(i).forEach(function(f){Object.defineProperty(u,f,{configurable:!1,enumerable:!0,get:function(){return d(f),i[f]}})}),(a.useErrorBoundary||a.suspense)&&d("error"),u},n.getNextResult=function(i){var a=this;return new Promise(function(l,u){var d=a.subscribe(function(f){f.isFetching||(d(),f.isError&&i?.throwOnError?u(f.error):l(f))})})},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(i){return this.fetch(Be({},i,{meta:{refetchPage:i?.refetchPage}}))},n.fetchOptimistic=function(i){var a=this,l=this.client.defaultQueryObserverOptions(i),u=this.client.getQueryCache().build(this.client,l);return u.fetch().then(function(){return a.createResult(u,l)})},n.fetch=function(i){var a=this;return this.executeFetch(i).then(function(){return a.updateResult(),a.currentResult})},n.executeFetch=function(i){this.updateQuery();var a=this.currentQuery.fetch(this.options,i);return i?.throwOnError||(a=a.catch(Lt)),a},n.updateStaleTimeout=function(){var i=this;if(this.clearStaleTimeout(),!(hu||this.currentResult.isStale||!ah(this.options.staleTime))){var a=v1(this.currentResult.dataUpdatedAt,this.options.staleTime),l=a+1;this.staleTimeoutId=setTimeout(function(){i.currentResult.isStale||i.updateResult()},l)}},n.computeRefetchInterval=function(){var i;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(i=this.options.refetchInterval)!=null?i:!1},n.updateRefetchInterval=function(i){var a=this;this.clearRefetchInterval(),this.currentRefetchInterval=i,!(hu||this.options.enabled===!1||!ah(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(a.options.refetchIntervalInBackground||Ua.isFocused())&&a.executeFetch()},this.currentRefetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},n.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},n.createResult=function(i,a){var l=this.currentQuery,u=this.options,d=this.currentResult,f=this.currentResultState,m=this.currentResultOptions,_=i!==l,p=_?i.state:this.currentQueryInitialState,g=_?this.currentResult:this.previousQueryResult,x=i.state,w=x.dataUpdatedAt,C=x.error,y=x.errorUpdatedAt,b=x.isFetching,S=x.status,P=!1,R=!1,M;if(a.optimisticResults){var F=this.hasListeners(),j=!F&&Qv(i,a),V=F&&Gv(i,l,a,u);(j||V)&&(b=!0,w||(S="loading"))}if(a.keepPreviousData&&!x.dataUpdateCount&&g?.isSuccess&&S!=="error")M=g.data,w=g.dataUpdatedAt,S=g.status,P=!0;else if(a.select&&typeof x.data<"u")if(d&&x.data===f?.data&&a.select===this.selectFn)M=this.selectResult;else try{this.selectFn=a.select,M=a.select(x.data),a.structuralSharing!==!1&&(M=_u(d?.data,M)),this.selectResult=M,this.selectError=null}catch(ee){gu().error(ee),this.selectError=ee}else M=x.data;if(typeof a.placeholderData<"u"&&typeof M>"u"&&(S==="loading"||S==="idle")){var $;if(d?.isPlaceholderData&&a.placeholderData===m?.placeholderData)$=d.data;else if($=typeof a.placeholderData=="function"?a.placeholderData():a.placeholderData,a.select&&typeof $<"u")try{$=a.select($),a.structuralSharing!==!1&&($=_u(d?.data,$)),this.selectError=null}catch(ee){gu().error(ee),this.selectError=ee}typeof $<"u"&&(S="success",M=$,R=!0)}this.selectError&&(C=this.selectError,M=this.selectResult,y=Date.now(),S="error");var z={status:S,isLoading:S==="loading",isSuccess:S==="success",isError:S==="error",isIdle:S==="idle",data:M,dataUpdatedAt:w,error:C,errorUpdatedAt:y,failureCount:x.fetchFailureCount,errorUpdateCount:x.errorUpdateCount,isFetched:x.dataUpdateCount>0||x.errorUpdateCount>0,isFetchedAfterMount:x.dataUpdateCount>p.dataUpdateCount||x.errorUpdateCount>p.errorUpdateCount,isFetching:b,isRefetching:b&&S!=="loading",isLoadingError:S==="error"&&x.dataUpdatedAt===0,isPlaceholderData:R,isPreviousData:P,isRefetchError:S==="error"&&x.dataUpdatedAt!==0,isStale:Zp(i,a),refetch:this.refetch,remove:this.remove};return z},n.shouldNotifyListeners=function(i,a){if(!a)return!0;var l=this.options,u=l.notifyOnChangeProps,d=l.notifyOnChangePropsExclusions;if(!u&&!d||u==="tracked"&&!this.trackedProps.length)return!0;var f=u==="tracked"?this.trackedProps:u;return Object.keys(i).some(function(m){var _=m,p=i[_]!==a[_],g=f?.some(function(w){return w===m}),x=d?.some(function(w){return w===m});return p&&!x&&(!f||g)})},n.updateResult=function(i){var a=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!KC(this.currentResult,a)){var l={cache:!0};i?.listeners!==!1&&this.shouldNotifyListeners(this.currentResult,a)&&(l.listeners=!0),this.notify(Be({},l,i))}},n.updateQuery=function(){var i=this.client.getQueryCache().build(this.client,this.options);if(i!==this.currentQuery){var a=this.currentQuery;this.currentQuery=i,this.currentQueryInitialState=i.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(a?.removeObserver(this),i.addObserver(this))}},n.onQueryUpdate=function(i){var a={};i.type==="success"?a.onSuccess=!0:i.type==="error"&&!Al(i.error)&&(a.onError=!0),this.updateResult(a),this.hasListeners()&&this.updateTimers()},n.notify=function(i){var a=this;tt.batch(function(){i.onSuccess?(a.options.onSuccess==null||a.options.onSuccess(a.currentResult.data),a.options.onSettled==null||a.options.onSettled(a.currentResult.data,null)):i.onError&&(a.options.onError==null||a.options.onError(a.currentResult.error),a.options.onSettled==null||a.options.onSettled(void 0,a.currentResult.error)),i.listeners&&a.listeners.forEach(function(l){l(a.currentResult)}),i.cache&&a.client.getQueryCache().notify({query:a.currentQuery,type:"observerResultsUpdated"})})},t}(Ss);function dE(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Qv(e,t){return dE(e,t)||e.state.dataUpdatedAt>0&&lh(e,t,t.refetchOnMount)}function lh(e,t,n){if(t.enabled!==!1){var r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&Zp(e,t)}return!1}function Gv(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Zp(e,n)}function Zp(e,t){return e.isStaleByTime(t.staleTime)}var fE=g2.unstable_batchedUpdates;tt.setBatchNotifyFunction(fE);var hE=console;eE(hE);var Xv=H.createContext(void 0),k1=H.createContext(!1);function S1(e){return e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Xv),window.ReactQueryClientContext):Xv}var pE=function(){var t=H.useContext(S1(H.useContext(k1)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},mE=function(t){var n=t.client,r=t.contextSharing,i=r===void 0?!1:r,a=t.children;H.useEffect(function(){return n.mount(),function(){n.unmount()}},[n]);var l=S1(i);return H.createElement(k1.Provider,{value:i},H.createElement(l.Provider,{value:n},a))};function _E(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var vE=H.createContext(_E()),gE=function(){return H.useContext(vE)};function yE(e,t,n){return typeof t=="function"?t.apply(void 0,n):typeof t=="boolean"?t:!!e}function bE(e,t){var n=H.useRef(!1),r=H.useState(0),i=r[1],a=pE(),l=gE(),u=a.defaultQueryObserverOptions(e);u.optimisticResults=!0,u.onError&&(u.onError=tt.batchCalls(u.onError)),u.onSuccess&&(u.onSuccess=tt.batchCalls(u.onSuccess)),u.onSettled&&(u.onSettled=tt.batchCalls(u.onSettled)),u.suspense&&(typeof u.staleTime!="number"&&(u.staleTime=1e3),u.cacheTime===0&&(u.cacheTime=1)),(u.suspense||u.useErrorBoundary)&&(l.isReset()||(u.retryOnMount=!1));var d=H.useState(function(){return new t(a,u)}),f=d[0],m=f.getOptimisticResult(u);if(H.useEffect(function(){n.current=!0,l.clearReset();var _=f.subscribe(tt.batchCalls(function(){n.current&&i(function(p){return p+1})}));return f.updateResult(),function(){n.current=!1,_()}},[l,f]),H.useEffect(function(){f.setOptions(u,{listeners:!1})},[u,f]),u.suspense&&m.isLoading)throw f.fetchOptimistic(u).then(function(_){var p=_.data;u.onSuccess==null||u.onSuccess(p),u.onSettled==null||u.onSettled(p,null)}).catch(function(_){l.clearReset(),u.onError==null||u.onError(_),u.onSettled==null||u.onSettled(void 0,_)});if(m.isError&&!l.isReset()&&!m.isFetching&&yE(u.suspense,u.useErrorBoundary,[m.error,f.getCurrentQuery()]))throw m.error;return u.notifyOnChangeProps==="tracked"&&(m=f.trackResult(m,u)),m}function xE(e,t,n){var r=Rl(e,t,n);return bE(r,cE)}function Xr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function wc(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&fu(e,t)}function Ps(e,t){if(t&&(Tn(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Xr(e)}function Xn(e){return Xn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Xn(e)}function wE(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function kE(e){return p1(e)||wE(e)||m1(e)||_1()}function Jv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Yv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jv(Object(n),!0).forEach(function(r){zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var SE={type:"logger",log:function(t){this.output("log",t)},warn:function(t){this.output("warn",t)},error:function(t){this.output("error",t)},output:function(t,n){console&&console[t]&&console[t].apply(console,n)}},PE=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};An(this,e),this.init(t,n)}return Bn(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=r.prefix||"i18next:",this.logger=n||SE,this.options=r,this.debug=r.debug}},{key:"setDebug",value:function(n){this.debug=n}},{key:"log",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"log","",!0)}},{key:"warn",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"warn","",!0)}},{key:"error",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"error","")}},{key:"deprecate",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(n,r,i,a){return a&&!this.debug?null:(typeof n[0]=="string"&&(n[0]="".concat(i).concat(this.prefix," ").concat(n[0])),this.logger[r](n))}},{key:"create",value:function(n){return new e(this.logger,Yv(Yv({},{prefix:"".concat(this.prefix,":").concat(n,":")}),this.options))}},{key:"clone",value:function(n){return n=n||this.options,n.prefix=n.prefix||this.prefix,new e(this.logger,n)}}]),e}(),Wn=new PE,io=function(){function e(){An(this,e),this.observers={}}return Bn(e,[{key:"on",value:function(n,r){var i=this;return n.split(" ").forEach(function(a){i.observers[a]=i.observers[a]||[],i.observers[a].push(r)}),this}},{key:"off",value:function(n,r){if(this.observers[n]){if(!r){delete this.observers[n];return}this.observers[n]=this.observers[n].filter(function(i){return i!==r})}}},{key:"emit",value:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];if(this.observers[n]){var l=[].concat(this.observers[n]);l.forEach(function(d){d.apply(void 0,i)})}if(this.observers["*"]){var u=[].concat(this.observers["*"]);u.forEach(function(d){d.apply(d,[n].concat(i))})}}}]),e}();function wa(){var e,t,n=new Promise(function(r,i){e=r,t=i});return n.resolve=e,n.reject=t,n}function eg(e){return e==null?"":""+e}function CE(e,t,n){e.forEach(function(r){t[r]&&(n[r]=t[r])})}function Hp(e,t,n){function r(u){return u&&u.indexOf("###")>-1?u.replace(/###/g,"."):u}function i(){return!e||typeof e=="string"}for(var a=typeof t!="string"?[].concat(t):t.split(".");a.length>1;){if(i())return{};var l=r(a.shift());!e[l]&&n&&(e[l]=new n),Object.prototype.hasOwnProperty.call(e,l)?e=e[l]:e={}}return i()?{}:{obj:e,k:r(a.shift())}}function tg(e,t,n){var r=Hp(e,t,Object),i=r.obj,a=r.k;i[a]=n}function EE(e,t,n,r){var i=Hp(e,t,Object),a=i.obj,l=i.k;a[l]=a[l]||[],r&&(a[l]=a[l].concat(n)),r||a[l].push(n)}function yu(e,t){var n=Hp(e,t),r=n.obj,i=n.k;if(r)return r[i]}function ng(e,t,n){var r=yu(e,n);return r!==void 0?r:yu(t,n)}function P1(e,t,n){for(var r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):P1(e[r],t[r],n):e[r]=t[r]);return e}function ai(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var OE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function TE(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,function(t){return OE[t]}):e}var kc=typeof window<"u"&&window.navigator&&typeof window.navigator.userAgentData>"u"&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,LE=[" ",",","?","!",";"];function RE(e,t,n){t=t||"",n=n||"";var r=LE.filter(function(u){return t.indexOf(u)<0&&n.indexOf(u)<0});if(r.length===0)return!0;var i=new RegExp("(".concat(r.map(function(u){return u==="?"?"\\?":u}).join("|"),")")),a=!i.test(e);if(!a){var l=e.indexOf(n);l>0&&!i.test(e.substring(0,l))&&(a=!0)}return a}function rg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function fl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rg(Object(n),!0).forEach(function(r){zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zE(e){var t=AE();return function(){var r=Xn(e),i;if(t){var a=Xn(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ps(this,i)}}function AE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function C1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(e){if(e[t])return e[t];for(var r=t.split(n),i=e,a=0;a<r.length;++a){if(!i||typeof i[r[a]]=="string"&&a+1<r.length)return;if(i[r[a]]===void 0){for(var l=2,u=r.slice(a,a+l).join(n),d=i[u];d===void 0&&r.length>a+l;)l++,u=r.slice(a,a+l).join(n),d=i[u];if(d===void 0)return;if(d===null)return null;if(t.endsWith(u)){if(typeof d=="string")return d;if(u&&typeof d[u]=="string")return d[u]}var f=r.slice(a+l).join(n);return f?C1(d,f,n):void 0}i=i[r[a]]}return i}}var BE=function(e){wc(n,e);var t=zE(n);function n(r){var i,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};return An(this,n),i=t.call(this),kc&&io.call(Xr(i)),i.data=r||{},i.options=a,i.options.keySeparator===void 0&&(i.options.keySeparator="."),i.options.ignoreJSONStructure===void 0&&(i.options.ignoreJSONStructure=!0),i}return Bn(n,[{key:"addNamespaces",value:function(i){this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}},{key:"removeNamespaces",value:function(i){var a=this.options.ns.indexOf(i);a>-1&&this.options.ns.splice(a,1)}},{key:"getResource",value:function(i,a,l){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},d=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator,f=u.ignoreJSONStructure!==void 0?u.ignoreJSONStructure:this.options.ignoreJSONStructure,m=[i,a];l&&typeof l!="string"&&(m=m.concat(l)),l&&typeof l=="string"&&(m=m.concat(d?l.split(d):l)),i.indexOf(".")>-1&&(m=i.split("."));var _=yu(this.data,m);return _||!f||typeof l!="string"?_:C1(this.data&&this.data[i]&&this.data[i][a],l,d)}},{key:"addResource",value:function(i,a,l,u){var d=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1},f=this.options.keySeparator;f===void 0&&(f=".");var m=[i,a];l&&(m=m.concat(f?l.split(f):l)),i.indexOf(".")>-1&&(m=i.split("."),u=a,a=m[1]),this.addNamespaces(a),tg(this.data,m,u),d.silent||this.emit("added",i,a,l,u)}},{key:"addResources",value:function(i,a,l){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(var d in l)(typeof l[d]=="string"||Object.prototype.toString.apply(l[d])==="[object Array]")&&this.addResource(i,a,d,l[d],{silent:!0});u.silent||this.emit("added",i,a,l)}},{key:"addResourceBundle",value:function(i,a,l,u,d){var f=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},m=[i,a];i.indexOf(".")>-1&&(m=i.split("."),u=l,l=a,a=m[1]),this.addNamespaces(a);var _=yu(this.data,m)||{};u?P1(_,l,d):_=fl(fl({},_),l),tg(this.data,m,_),f.silent||this.emit("added",i,a,l)}},{key:"removeResourceBundle",value:function(i,a){this.hasResourceBundle(i,a)&&delete this.data[i][a],this.removeNamespaces(a),this.emit("removed",i,a)}},{key:"hasResourceBundle",value:function(i,a){return this.getResource(i,a)!==void 0}},{key:"getResourceBundle",value:function(i,a){return a||(a=this.options.defaultNS),this.options.compatibilityAPI==="v1"?fl(fl({},{}),this.getResource(i,a)):this.getResource(i,a)}},{key:"getDataByLanguage",value:function(i){return this.data[i]}},{key:"hasLanguageSomeTranslations",value:function(i){var a=this.getDataByLanguage(i),l=a&&Object.keys(a)||[];return!!l.find(function(u){return a[u]&&Object.keys(a[u]).length>0})}},{key:"toJSON",value:function(){return this.data}}]),n}(io),E1={processors:{},addPostProcessor:function(t){this.processors[t.name]=t},handle:function(t,n,r,i,a){var l=this;return t.forEach(function(u){l.processors[u]&&(n=l.processors[u].process(n,r,i,a))}),n}};function og(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function It(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?og(Object(n),!0).forEach(function(r){zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):og(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function NE(e){var t=IE();return function(){var r=Xn(e),i;if(t){var a=Xn(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ps(this,i)}}function IE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var ig={},ag=function(e){wc(n,e);var t=NE(n);function n(r){var i,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return An(this,n),i=t.call(this),kc&&io.call(Xr(i)),CE(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r,Xr(i)),i.options=a,i.options.keySeparator===void 0&&(i.options.keySeparator="."),i.logger=Wn.create("translator"),i}return Bn(n,[{key:"changeLanguage",value:function(i){i&&(this.language=i)}},{key:"exists",value:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(i==null)return!1;var l=this.resolve(i,a);return l&&l.res!==void 0}},{key:"extractFromKey",value:function(i,a){var l=a.nsSeparator!==void 0?a.nsSeparator:this.options.nsSeparator;l===void 0&&(l=":");var u=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,d=a.ns||this.options.defaultNS||[],f=l&&i.indexOf(l)>-1,m=!this.options.userDefinedKeySeparator&&!a.keySeparator&&!this.options.userDefinedNsSeparator&&!a.nsSeparator&&!RE(i,l,u);if(f&&!m){var _=i.match(this.interpolator.nestingRegexp);if(_&&_.length>0)return{key:i,namespaces:d};var p=i.split(l);(l!==u||l===u&&this.options.ns.indexOf(p[0])>-1)&&(d=p.shift()),i=p.join(u)}return typeof d=="string"&&(d=[d]),{key:i,namespaces:d}}},{key:"translate",value:function(i,a,l){var u=this;if(Tn(a)!=="object"&&this.options.overloadTranslationOptionHandler&&(a=this.options.overloadTranslationOptionHandler(arguments)),a||(a={}),i==null)return"";Array.isArray(i)||(i=[String(i)]);var d=a.returnDetails!==void 0?a.returnDetails:this.options.returnDetails,f=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,m=this.extractFromKey(i[i.length-1],a),_=m.key,p=m.namespaces,g=p[p.length-1],x=a.lng||this.language,w=a.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(x&&x.toLowerCase()==="cimode"){if(w){var C=a.nsSeparator||this.options.nsSeparator;return d?(y.res="".concat(g).concat(C).concat(_),y):"".concat(g).concat(C).concat(_)}return d?(y.res=_,y):_}var y=this.resolve(i,a),b=y&&y.res,S=y&&y.usedKey||_,P=y&&y.exactUsedKey||_,R=Object.prototype.toString.apply(b),M=["[object Number]","[object Function]","[object RegExp]"],F=a.joinArrays!==void 0?a.joinArrays:this.options.joinArrays,j=!this.i18nFormat||this.i18nFormat.handleAsObject,V=typeof b!="string"&&typeof b!="boolean"&&typeof b!="number";if(j&&b&&V&&M.indexOf(R)<0&&!(typeof F=="string"&&R==="[object Array]")){if(!a.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var $=this.options.returnedObjectHandler?this.options.returnedObjectHandler(S,b,It(It({},a),{},{ns:p})):"key '".concat(_," (").concat(this.language,")' returned an object instead of string.");return d?(y.res=$,y):$}if(f){var z=R==="[object Array]",ee=z?[]:{},me=z?P:S;for(var re in b)if(Object.prototype.hasOwnProperty.call(b,re)){var fe="".concat(me).concat(f).concat(re);ee[re]=this.translate(fe,It(It({},a),{joinArrays:!1,ns:p})),ee[re]===fe&&(ee[re]=b[re])}b=ee}}else if(j&&typeof F=="string"&&R==="[object Array]")b=b.join(F),b&&(b=this.extendTranslation(b,i,a,l));else{var U=!1,te=!1,I=a.count!==void 0&&typeof a.count!="string",oe=n.hasDefaultValue(a),q=I?this.pluralResolver.getSuffix(x,a.count,a):"",O=a["defaultValue".concat(q)]||a.defaultValue;!this.isValidLookup(b)&&oe&&(U=!0,b=O),this.isValidLookup(b)||(te=!0,b=_);var N=a.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey,B=N&&te?void 0:b,Q=oe&&O!==b&&this.options.updateMissing;if(te||U||Q){if(this.logger.log(Q?"updateKey":"missingKey",x,g,_,Q?O:b),f){var Y=this.resolve(_,It(It({},a),{},{keySeparator:!1}));Y&&Y.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var ne=[],ue=this.languageUtils.getFallbackCodes(this.options.fallbackLng,a.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ue&&ue[0])for(var _e=0;_e<ue.length;_e++)ne.push(ue[_e]);else this.options.saveMissingTo==="all"?ne=this.languageUtils.toResolveHierarchy(a.lng||this.language):ne.push(a.lng||this.language);var Ye=function(Fe,Ne,nt){var Oe=oe&&nt!==b?nt:B;u.options.missingKeyHandler?u.options.missingKeyHandler(Fe,g,Ne,Oe,Q,a):u.backendConnector&&u.backendConnector.saveMissing&&u.backendConnector.saveMissing(Fe,g,Ne,Oe,Q,a),u.emit("missingKey",Fe,g,Ne,b)};this.options.saveMissing&&(this.options.saveMissingPlurals&&I?ne.forEach(function(qe){u.pluralResolver.getSuffixes(qe,a).forEach(function(Fe){Ye([qe],_+Fe,a["defaultValue".concat(Fe)]||O)})}):Ye(ne,_,O))}b=this.extendTranslation(b,i,a,y,l),te&&b===_&&this.options.appendNamespaceToMissingKey&&(b="".concat(g,":").concat(_)),(te||U)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?b=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(g,":").concat(_):_,U?b:void 0):b=this.options.parseMissingKeyHandler(b))}return d?(y.res=b,y):b}},{key:"extendTranslation",value:function(i,a,l,u,d){var f=this;if(this.i18nFormat&&this.i18nFormat.parse)i=this.i18nFormat.parse(i,It(It({},this.options.interpolation.defaultVariables),l),u.usedLng,u.usedNS,u.usedKey,{resolved:u});else if(!l.skipInterpolation){l.interpolation&&this.interpolator.init(It(It({},l),{interpolation:It(It({},this.options.interpolation),l.interpolation)}));var m=typeof i=="string"&&(l&&l.interpolation&&l.interpolation.skipOnVariables!==void 0?l.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables),_;if(m){var p=i.match(this.interpolator.nestingRegexp);_=p&&p.length}var g=l.replace&&typeof l.replace!="string"?l.replace:l;if(this.options.interpolation.defaultVariables&&(g=It(It({},this.options.interpolation.defaultVariables),g)),i=this.interpolator.interpolate(i,g,l.lng||this.language,l),m){var x=i.match(this.interpolator.nestingRegexp),w=x&&x.length;_<w&&(l.nest=!1)}l.nest!==!1&&(i=this.interpolator.nest(i,function(){for(var b=arguments.length,S=new Array(b),P=0;P<b;P++)S[P]=arguments[P];return d&&d[0]===S[0]&&!l.context?(f.logger.warn("It seems you are nesting recursively key: ".concat(S[0]," in key: ").concat(a[0])),null):f.translate.apply(f,S.concat([a]))},l)),l.interpolation&&this.interpolator.reset()}var C=l.postProcess||this.options.postProcess,y=typeof C=="string"?[C]:C;return i!=null&&y&&y.length&&l.applyPostProcessor!==!1&&(i=E1.handle(y,i,a,this.options&&this.options.postProcessPassResolved?It({i18nResolved:u},l):l,this)),i}},{key:"resolve",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u,d,f,m,_;return typeof i=="string"&&(i=[i]),i.forEach(function(p){if(!a.isValidLookup(u)){var g=a.extractFromKey(p,l),x=g.key;d=x;var w=g.namespaces;a.options.fallbackNS&&(w=w.concat(a.options.fallbackNS));var C=l.count!==void 0&&typeof l.count!="string",y=C&&!l.ordinal&&l.count===0&&a.pluralResolver.shouldUseIntlApi(),b=l.context!==void 0&&(typeof l.context=="string"||typeof l.context=="number")&&l.context!=="",S=l.lngs?l.lngs:a.languageUtils.toResolveHierarchy(l.lng||a.language,l.fallbackLng);w.forEach(function(P){a.isValidLookup(u)||(_=P,!ig["".concat(S[0],"-").concat(P)]&&a.utils&&a.utils.hasLoadedNamespace&&!a.utils.hasLoadedNamespace(_)&&(ig["".concat(S[0],"-").concat(P)]=!0,a.logger.warn('key "'.concat(d,'" for languages "').concat(S.join(", "),`" won't get resolved as namespace "`).concat(_,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),S.forEach(function(R){if(!a.isValidLookup(u)){m=R;var M=[x];if(a.i18nFormat&&a.i18nFormat.addLookupKeys)a.i18nFormat.addLookupKeys(M,x,R,P,l);else{var F;C&&(F=a.pluralResolver.getSuffix(R,l.count,l));var j="".concat(a.options.pluralSeparator,"zero");if(C&&(M.push(x+F),y&&M.push(x+j)),b){var V="".concat(x).concat(a.options.contextSeparator).concat(l.context);M.push(V),C&&(M.push(V+F),y&&M.push(V+j))}}for(var $;$=M.pop();)a.isValidLookup(u)||(f=$,u=a.getResource(R,P,$,l))}}))})}}),{res:u,usedKey:d,exactUsedKey:f,usedLng:m,usedNS:_}}},{key:"isValidLookup",value:function(i){return i!==void 0&&!(!this.options.returnNull&&i===null)&&!(!this.options.returnEmptyString&&i==="")}},{key:"getResource",value:function(i,a,l){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(i,a,l,u):this.resourceStore.getResource(i,a,l,u)}}],[{key:"hasDefaultValue",value:function(i){var a="defaultValue";for(var l in i)if(Object.prototype.hasOwnProperty.call(i,l)&&a===l.substring(0,a.length)&&i[l]!==void 0)return!0;return!1}}]),n}(io);function Id(e){return e.charAt(0).toUpperCase()+e.slice(1)}var sg=function(){function e(t){An(this,e),this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Wn.create("languageUtils")}return Bn(e,[{key:"getScriptPartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return null;var r=n.split("-");return r.length===2||(r.pop(),r[r.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(r.join("-"))}},{key:"getLanguagePartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return n;var r=n.split("-");return this.formatLanguageCode(r[0])}},{key:"formatLanguageCode",value:function(n){if(typeof n=="string"&&n.indexOf("-")>-1){var r=["hans","hant","latn","cyrl","cans","mong","arab"],i=n.split("-");return this.options.lowerCaseLng?i=i.map(function(a){return a.toLowerCase()}):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),r.indexOf(i[1].toLowerCase())>-1&&(i[1]=Id(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),r.indexOf(i[1].toLowerCase())>-1&&(i[1]=Id(i[1].toLowerCase())),r.indexOf(i[2].toLowerCase())>-1&&(i[2]=Id(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?n.toLowerCase():n}},{key:"isSupportedCode",value:function(n){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(n=this.getLanguagePartFromCode(n)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(n)>-1}},{key:"getBestMatchFromCodes",value:function(n){var r=this;if(!n)return null;var i;return n.forEach(function(a){if(!i){var l=r.formatLanguageCode(a);(!r.options.supportedLngs||r.isSupportedCode(l))&&(i=l)}}),!i&&this.options.supportedLngs&&n.forEach(function(a){if(!i){var l=r.getLanguagePartFromCode(a);if(r.isSupportedCode(l))return i=l;i=r.options.supportedLngs.find(function(u){if(u.indexOf(l)===0)return u})}}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}},{key:"getFallbackCodes",value:function(n,r){if(!n)return[];if(typeof n=="function"&&(n=n(r)),typeof n=="string"&&(n=[n]),Object.prototype.toString.apply(n)==="[object Array]")return n;if(!r)return n.default||[];var i=n[r];return i||(i=n[this.getScriptPartFromCode(r)]),i||(i=n[this.formatLanguageCode(r)]),i||(i=n[this.getLanguagePartFromCode(r)]),i||(i=n.default),i||[]}},{key:"toResolveHierarchy",value:function(n,r){var i=this,a=this.getFallbackCodes(r||this.options.fallbackLng||[],n),l=[],u=function(f){f&&(i.isSupportedCode(f)?l.push(f):i.logger.warn("rejecting language code not found in supportedLngs: ".concat(f)))};return typeof n=="string"&&n.indexOf("-")>-1?(this.options.load!=="languageOnly"&&u(this.formatLanguageCode(n)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&u(this.getScriptPartFromCode(n)),this.options.load!=="currentOnly"&&u(this.getLanguagePartFromCode(n))):typeof n=="string"&&u(this.formatLanguageCode(n)),a.forEach(function(d){l.indexOf(d)<0&&u(i.formatLanguageCode(d))}),l}}]),e}(),ME=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],DE={1:function(t){return Number(t>1)},2:function(t){return Number(t!=1)},3:function(t){return 0},4:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},5:function(t){return Number(t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5)},6:function(t){return Number(t==1?0:t>=2&&t<=4?1:2)},7:function(t){return Number(t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},8:function(t){return Number(t==1?0:t==2?1:t!=8&&t!=11?2:3)},9:function(t){return Number(t>=2)},10:function(t){return Number(t==1?0:t==2?1:t<7?2:t<11?3:4)},11:function(t){return Number(t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3)},12:function(t){return Number(t%10!=1||t%100==11)},13:function(t){return Number(t!==0)},14:function(t){return Number(t==1?0:t==2?1:t==3?2:3)},15:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2)},16:function(t){return Number(t%10==1&&t%100!=11?0:t!==0?1:2)},17:function(t){return Number(t==1||t%10==1&&t%100!=11?0:1)},18:function(t){return Number(t==0?0:t==1?1:2)},19:function(t){return Number(t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3)},20:function(t){return Number(t==1?0:t==0||t%100>0&&t%100<20?1:2)},21:function(t){return Number(t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0)},22:function(t){return Number(t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3)}},FE=["v1","v2","v3"],lg={zero:0,one:1,two:2,few:3,many:4,other:5};function jE(){var e={};return ME.forEach(function(t){t.lngs.forEach(function(n){e[n]={numbers:t.nr,plurals:DE[t.fc]}})}),e}var UE=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};An(this,e),this.languageUtils=t,this.options=n,this.logger=Wn.create("pluralResolver"),(!this.options.compatibilityJSON||this.options.compatibilityJSON==="v4")&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=jE()}return Bn(e,[{key:"addRule",value:function(n,r){this.rules[n]=r}},{key:"getRule",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(n,{type:r.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[n]||this.rules[this.languageUtils.getLanguagePartFromCode(n)]}},{key:"needsPlural",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(n,r);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(n,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(n,i).map(function(a){return"".concat(r).concat(a)})}},{key:"getSuffixes",value:function(n){var r=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(n,i);return a?this.shouldUseIntlApi()?a.resolvedOptions().pluralCategories.sort(function(l,u){return lg[l]-lg[u]}).map(function(l){return"".concat(r.options.prepend).concat(l)}):a.numbers.map(function(l){return r.getSuffix(n,l,i)}):[]}},{key:"getSuffix",value:function(n,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=this.getRule(n,i);return a?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(a.select(r)):this.getSuffixRetroCompatible(a,r):(this.logger.warn("no plural rule found for: ".concat(n)),"")}},{key:"getSuffixRetroCompatible",value:function(n,r){var i=this,a=n.noAbs?n.plurals(r):n.plurals(Math.abs(r)),l=n.numbers[a];this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1&&(l===2?l="plural":l===1&&(l=""));var u=function(){return i.options.prepend&&l.toString()?i.options.prepend+l.toString():l.toString()};return this.options.compatibilityJSON==="v1"?l===1?"":typeof l=="number"?"_plural_".concat(l.toString()):u():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1?u():this.options.prepend&&a.toString()?this.options.prepend+a.toString():a.toString()}},{key:"shouldUseIntlApi",value:function(){return!FE.includes(this.options.compatibilityJSON)}}]),e}();function ug(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function bn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ug(Object(n),!0).forEach(function(r){zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ug(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var $E=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};An(this,e),this.logger=Wn.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(n){return n},this.init(t)}return Bn(e,[{key:"init",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};n.interpolation||(n.interpolation={escapeValue:!0});var r=n.interpolation;this.escape=r.escape!==void 0?r.escape:TE,this.escapeValue=r.escapeValue!==void 0?r.escapeValue:!0,this.useRawValueToEscape=r.useRawValueToEscape!==void 0?r.useRawValueToEscape:!1,this.prefix=r.prefix?ai(r.prefix):r.prefixEscaped||"{{",this.suffix=r.suffix?ai(r.suffix):r.suffixEscaped||"}}",this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||",",this.unescapePrefix=r.unescapeSuffix?"":r.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":r.unescapeSuffix||"",this.nestingPrefix=r.nestingPrefix?ai(r.nestingPrefix):r.nestingPrefixEscaped||ai("$t("),this.nestingSuffix=r.nestingSuffix?ai(r.nestingSuffix):r.nestingSuffixEscaped||ai(")"),this.nestingOptionsSeparator=r.nestingOptionsSeparator?r.nestingOptionsSeparator:r.nestingOptionsSeparator||",",this.maxReplaces=r.maxReplaces?r.maxReplaces:1e3,this.alwaysFormat=r.alwaysFormat!==void 0?r.alwaysFormat:!1,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var n="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(n,"g");var r="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(r,"g");var i="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(i,"g")}},{key:"interpolate",value:function(n,r,i,a){var l=this,u,d,f,m=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function _(C){return C.replace(/\$/g,"$$$$")}var p=function(y){if(y.indexOf(l.formatSeparator)<0){var b=ng(r,m,y);return l.alwaysFormat?l.format(b,void 0,i,bn(bn(bn({},a),r),{},{interpolationkey:y})):b}var S=y.split(l.formatSeparator),P=S.shift().trim(),R=S.join(l.formatSeparator).trim();return l.format(ng(r,m,P),R,i,bn(bn(bn({},a),r),{},{interpolationkey:P}))};this.resetRegExp();var g=a&&a.missingInterpolationHandler||this.options.missingInterpolationHandler,x=a&&a.interpolation&&a.interpolation.skipOnVariables!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables,w=[{regex:this.regexpUnescape,safeValue:function(y){return _(y)}},{regex:this.regexp,safeValue:function(y){return l.escapeValue?_(l.escape(y)):_(y)}}];return w.forEach(function(C){for(f=0;u=C.regex.exec(n);){var y=u[1].trim();if(d=p(y),d===void 0)if(typeof g=="function"){var b=g(n,u,a);d=typeof b=="string"?b:""}else if(a&&a.hasOwnProperty(y))d="";else if(x){d=u[0];continue}else l.logger.warn("missed to pass in variable ".concat(y," for interpolating ").concat(n)),d="";else typeof d!="string"&&!l.useRawValueToEscape&&(d=eg(d));var S=C.safeValue(d);if(n=n.replace(u[0],S),x?(C.regex.lastIndex+=d.length,C.regex.lastIndex-=u[0].length):C.regex.lastIndex=0,f++,f>=l.maxReplaces)break}}),n}},{key:"nest",value:function(n,r){var i=this,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l,u,d;function f(g,x){var w=this.nestingOptionsSeparator;if(g.indexOf(w)<0)return g;var C=g.split(new RegExp("".concat(w,"[ ]*{"))),y="{".concat(C[1]);g=C[0],y=this.interpolate(y,d);var b=y.match(/'/g),S=y.match(/"/g);(b&&b.length%2===0&&!S||S.length%2!==0)&&(y=y.replace(/'/g,'"'));try{d=JSON.parse(y),x&&(d=bn(bn({},x),d))}catch(P){return this.logger.warn("failed parsing options string in nesting for key ".concat(g),P),"".concat(g).concat(w).concat(y)}return delete d.defaultValue,g}for(;l=this.nestingRegexp.exec(n);){var m=[];d=bn({},a),d=d.replace&&typeof d.replace!="string"?d.replace:d,d.applyPostProcessor=!1,delete d.defaultValue;var _=!1;if(l[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(l[1])){var p=l[1].split(this.formatSeparator).map(function(g){return g.trim()});l[1]=p.shift(),m=p,_=!0}if(u=r(f.call(this,l[1].trim(),d),d),u&&l[0]===n&&typeof u!="string")return u;typeof u!="string"&&(u=eg(u)),u||(this.logger.warn("missed to resolve ".concat(l[1]," for nesting ").concat(n)),u=""),_&&(u=m.reduce(function(g,x){return i.format(g,x,a.lng,bn(bn({},a),{},{interpolationkey:l[1].trim()}))},u.trim())),n=n.replace(l[0],u),this.regexp.lastIndex=0}return n}}]),e}();function cg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Tr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cg(Object(n),!0).forEach(function(r){zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ZE(e){var t=e.toLowerCase().trim(),n={};if(e.indexOf("(")>-1){var r=e.split("(");t=r[0].toLowerCase().trim();var i=r[1].substring(0,r[1].length-1);if(t==="currency"&&i.indexOf(":")<0)n.currency||(n.currency=i.trim());else if(t==="relativetime"&&i.indexOf(":")<0)n.range||(n.range=i.trim());else{var a=i.split(";");a.forEach(function(l){if(l){var u=l.split(":"),d=kE(u),f=d[0],m=d.slice(1),_=m.join(":").trim().replace(/^'+|'+$/g,"");n[f.trim()]||(n[f.trim()]=_),_==="false"&&(n[f.trim()]=!1),_==="true"&&(n[f.trim()]=!0),isNaN(_)||(n[f.trim()]=parseInt(_,10))}})}}return{formatName:t,formatOptions:n}}function si(e){var t={};return function(r,i,a){var l=i+JSON.stringify(a),u=t[l];return u||(u=e(i,a),t[l]=u),u(r)}}var HE=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};An(this,e),this.logger=Wn.create("formatter"),this.options=t,this.formats={number:si(function(n,r){var i=new Intl.NumberFormat(n,r);return function(a){return i.format(a)}}),currency:si(function(n,r){var i=new Intl.NumberFormat(n,Tr(Tr({},r),{},{style:"currency"}));return function(a){return i.format(a)}}),datetime:si(function(n,r){var i=new Intl.DateTimeFormat(n,Tr({},r));return function(a){return i.format(a)}}),relativetime:si(function(n,r){var i=new Intl.RelativeTimeFormat(n,Tr({},r));return function(a){return i.format(a,r.range||"day")}}),list:si(function(n,r){var i=new Intl.ListFormat(n,Tr({},r));return function(a){return i.format(a)}})},this.init(t)}return Bn(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}},i=r.interpolation;this.formatSeparator=i.formatSeparator?i.formatSeparator:i.formatSeparator||","}},{key:"add",value:function(n,r){this.formats[n.toLowerCase().trim()]=r}},{key:"addCached",value:function(n,r){this.formats[n.toLowerCase().trim()]=si(r)}},{key:"format",value:function(n,r,i,a){var l=this,u=r.split(this.formatSeparator),d=u.reduce(function(f,m){var _=ZE(m),p=_.formatName,g=_.formatOptions;if(l.formats[p]){var x=f;try{var w=a&&a.formatParams&&a.formatParams[a.interpolationkey]||{},C=w.locale||w.lng||a.locale||a.lng||i;x=l.formats[p](f,C,Tr(Tr(Tr({},g),a),w))}catch(y){l.logger.warn(y)}return x}else l.logger.warn("there was no format function for ".concat(p));return f},n);return d}}]),e}();function dg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function fg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dg(Object(n),!0).forEach(function(r){zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function WE(e){var t=VE();return function(){var r=Xn(e),i;if(t){var a=Xn(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ps(this,i)}}function VE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function qE(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}var KE=function(e){wc(n,e);var t=WE(n);function n(r,i,a){var l,u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return An(this,n),l=t.call(this),kc&&io.call(Xr(l)),l.backend=r,l.store=i,l.services=a,l.languageUtils=a.languageUtils,l.options=u,l.logger=Wn.create("backendConnector"),l.waitingReads=[],l.maxParallelReads=u.maxParallelReads||10,l.readingCalls=0,l.maxRetries=u.maxRetries>=0?u.maxRetries:5,l.retryTimeout=u.retryTimeout>=1?u.retryTimeout:350,l.state={},l.queue=[],l.backend&&l.backend.init&&l.backend.init(a,u.backend,u),l}return Bn(n,[{key:"queueLoad",value:function(i,a,l,u){var d=this,f={},m={},_={},p={};return i.forEach(function(g){var x=!0;a.forEach(function(w){var C="".concat(g,"|").concat(w);!l.reload&&d.store.hasResourceBundle(g,w)?d.state[C]=2:d.state[C]<0||(d.state[C]===1?m[C]===void 0&&(m[C]=!0):(d.state[C]=1,x=!1,m[C]===void 0&&(m[C]=!0),f[C]===void 0&&(f[C]=!0),p[w]===void 0&&(p[w]=!0)))}),x||(_[g]=!0)}),(Object.keys(f).length||Object.keys(m).length)&&this.queue.push({pending:m,pendingCount:Object.keys(m).length,loaded:{},errors:[],callback:u}),{toLoad:Object.keys(f),pending:Object.keys(m),toLoadLanguages:Object.keys(_),toLoadNamespaces:Object.keys(p)}}},{key:"loaded",value:function(i,a,l){var u=i.split("|"),d=u[0],f=u[1];a&&this.emit("failedLoading",d,f,a),l&&this.store.addResourceBundle(d,f,l),this.state[i]=a?-1:2;var m={};this.queue.forEach(function(_){EE(_.loaded,[d],f),qE(_,i),a&&_.errors.push(a),_.pendingCount===0&&!_.done&&(Object.keys(_.loaded).forEach(function(p){m[p]||(m[p]={});var g=_.loaded[p];g.length&&g.forEach(function(x){m[p][x]===void 0&&(m[p][x]=!0)})}),_.done=!0,_.errors.length?_.callback(_.errors):_.callback())}),this.emit("loaded",m),this.queue=this.queue.filter(function(_){return!_.done})}},{key:"read",value:function(i,a,l){var u=this,d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,f=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,m=arguments.length>5?arguments[5]:void 0;if(!i.length)return m(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:i,ns:a,fcName:l,tried:d,wait:f,callback:m});return}this.readingCalls++;var _=function(w,C){if(u.readingCalls--,u.waitingReads.length>0){var y=u.waitingReads.shift();u.read(y.lng,y.ns,y.fcName,y.tried,y.wait,y.callback)}if(w&&C&&d<u.maxRetries){setTimeout(function(){u.read.call(u,i,a,l,d+1,f*2,m)},f);return}m(w,C)},p=this.backend[l].bind(this.backend);if(p.length===2){try{var g=p(i,a);g&&typeof g.then=="function"?g.then(function(x){return _(null,x)}).catch(_):_(null,g)}catch(x){_(x)}return}return p(i,a,_)}},{key:"prepareLoading",value:function(i,a){var l=this,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},d=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),d&&d();typeof i=="string"&&(i=this.languageUtils.toResolveHierarchy(i)),typeof a=="string"&&(a=[a]);var f=this.queueLoad(i,a,u,d);if(!f.toLoad.length)return f.pending.length||d(),null;f.toLoad.forEach(function(m){l.loadOne(m)})}},{key:"load",value:function(i,a,l){this.prepareLoading(i,a,{},l)}},{key:"reload",value:function(i,a,l){this.prepareLoading(i,a,{reload:!0},l)}},{key:"loadOne",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",u=i.split("|"),d=u[0],f=u[1];this.read(d,f,"read",void 0,void 0,function(m,_){m&&a.logger.warn("".concat(l,"loading namespace ").concat(f," for language ").concat(d," failed"),m),!m&&_&&a.logger.log("".concat(l,"loaded namespace ").concat(f," for language ").concat(d),_),a.loaded(i,m,_)})}},{key:"saveMissing",value:function(i,a,l,u,d){var f=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},m=arguments.length>6&&arguments[6]!==void 0?arguments[6]:function(){};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(a)){this.logger.warn('did not save key "'.concat(l,'" as the namespace "').concat(a,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(l==null||l==="")){if(this.backend&&this.backend.create){var _=fg(fg({},f),{},{isUpdate:d}),p=this.backend.create.bind(this.backend);if(p.length<6)try{var g;p.length===5?g=p(i,a,l,u,_):g=p(i,a,l,u),g&&typeof g.then=="function"?g.then(function(x){return m(null,x)}).catch(m):m(null,g)}catch(x){m(x)}else p(i,a,l,u,m,_)}!i||!i[0]||this.store.addResource(i[0],a,l,u)}}}]),n}(io);function hg(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){var n={};if(Tn(t[1])==="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),Tn(t[2])==="object"||Tn(t[3])==="object"){var r=t[3]||t[2];Object.keys(r).forEach(function(i){n[i]=r[i]})}return n},interpolation:{escapeValue:!0,format:function(t,n,r,i){return t},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function pg(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function mg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Un(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mg(Object(n),!0).forEach(function(r){zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function QE(e){var t=GE();return function(){var r=Xn(e),i;if(t){var a=Xn(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Ps(this,i)}}function GE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function hl(){}function XE(e){var t=Object.getOwnPropertyNames(Object.getPrototypeOf(e));t.forEach(function(n){typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}var bu=function(e){wc(n,e);var t=QE(n);function n(){var r,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;if(An(this,n),r=t.call(this),kc&&io.call(Xr(r)),r.options=pg(i),r.services={},r.logger=Wn,r.modules={external:[]},XE(Xr(r)),a&&!r.isInitialized&&!i.isClone){if(!r.options.initImmediate)return r.init(i,a),Ps(r,Xr(r));setTimeout(function(){r.init(i,a)},0)}return r}return Bn(n,[{key:"init",value:function(){var i=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=arguments.length>1?arguments[1]:void 0;typeof a=="function"&&(l=a,a={}),!a.defaultNS&&a.defaultNS!==!1&&a.ns&&(typeof a.ns=="string"?a.defaultNS=a.ns:a.ns.indexOf("translation")<0&&(a.defaultNS=a.ns[0]));var u=hg();this.options=Un(Un(Un({},u),this.options),pg(a)),this.options.compatibilityAPI!=="v1"&&(this.options.interpolation=Un(Un({},u.interpolation),this.options.interpolation)),a.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=a.keySeparator),a.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=a.nsSeparator);function d(y){return y?typeof y=="function"?new y:y:null}if(!this.options.isClone){this.modules.logger?Wn.init(d(this.modules.logger),this.options):Wn.init(null,this.options);var f;this.modules.formatter?f=this.modules.formatter:typeof Intl<"u"&&(f=HE);var m=new sg(this.options);this.store=new BE(this.options.resources,this.options);var _=this.services;_.logger=Wn,_.resourceStore=this.store,_.languageUtils=m,_.pluralResolver=new UE(m,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),f&&(!this.options.interpolation.format||this.options.interpolation.format===u.interpolation.format)&&(_.formatter=d(f),_.formatter.init(_,this.options),this.options.interpolation.format=_.formatter.format.bind(_.formatter)),_.interpolator=new $E(this.options),_.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},_.backendConnector=new KE(d(this.modules.backend),_.resourceStore,_,this.options),_.backendConnector.on("*",function(y){for(var b=arguments.length,S=new Array(b>1?b-1:0),P=1;P<b;P++)S[P-1]=arguments[P];i.emit.apply(i,[y].concat(S))}),this.modules.languageDetector&&(_.languageDetector=d(this.modules.languageDetector),_.languageDetector.init&&_.languageDetector.init(_,this.options.detection,this.options)),this.modules.i18nFormat&&(_.i18nFormat=d(this.modules.i18nFormat),_.i18nFormat.init&&_.i18nFormat.init(this)),this.translator=new ag(this.services,this.options),this.translator.on("*",function(y){for(var b=arguments.length,S=new Array(b>1?b-1:0),P=1;P<b;P++)S[P-1]=arguments[P];i.emit.apply(i,[y].concat(S))}),this.modules.external.forEach(function(y){y.init&&y.init(i)})}if(this.format=this.options.interpolation.format,l||(l=hl),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var p=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);p.length>0&&p[0]!=="dev"&&(this.options.lng=p[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined");var g=["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"];g.forEach(function(y){i[y]=function(){var b;return(b=i.store)[y].apply(b,arguments)}});var x=["addResource","addResources","addResourceBundle","removeResourceBundle"];x.forEach(function(y){i[y]=function(){var b;return(b=i.store)[y].apply(b,arguments),i}});var w=wa(),C=function(){var b=function(P,R){i.isInitialized&&!i.initializedStoreOnce&&i.logger.warn("init: i18next is already initialized. You should call init just once!"),i.isInitialized=!0,i.options.isClone||i.logger.log("initialized",i.options),i.emit("initialized",i.options),w.resolve(R),l(P,R)};if(i.languages&&i.options.compatibilityAPI!=="v1"&&!i.isInitialized)return b(null,i.t.bind(i));i.changeLanguage(i.options.lng,b)};return this.options.resources||!this.options.initImmediate?C():setTimeout(C,0),w}},{key:"loadResources",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:hl,u=l,d=typeof i=="string"?i:this.language;if(typeof i=="function"&&(u=i),!this.options.resources||this.options.partialBundledLanguages){if(d&&d.toLowerCase()==="cimode")return u();var f=[],m=function(g){if(g){var x=a.services.languageUtils.toResolveHierarchy(g);x.forEach(function(w){f.indexOf(w)<0&&f.push(w)})}};if(d)m(d);else{var _=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);_.forEach(function(p){return m(p)})}this.options.preload&&this.options.preload.forEach(function(p){return m(p)}),this.services.backendConnector.load(f,this.options.ns,function(p){!p&&!a.resolvedLanguage&&a.language&&a.setResolvedLanguage(a.language),u(p)})}else u(null)}},{key:"reloadResources",value:function(i,a,l){var u=wa();return i||(i=this.languages),a||(a=this.options.ns),l||(l=hl),this.services.backendConnector.reload(i,a,function(d){u.resolve(),l(d)}),u}},{key:"use",value:function(i){if(!i)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!i.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return i.type==="backend"&&(this.modules.backend=i),(i.type==="logger"||i.log&&i.warn&&i.error)&&(this.modules.logger=i),i.type==="languageDetector"&&(this.modules.languageDetector=i),i.type==="i18nFormat"&&(this.modules.i18nFormat=i),i.type==="postProcessor"&&E1.addPostProcessor(i),i.type==="formatter"&&(this.modules.formatter=i),i.type==="3rdParty"&&this.modules.external.push(i),this}},{key:"setResolvedLanguage",value:function(i){if(!(!i||!this.languages)&&!(["cimode","dev"].indexOf(i)>-1))for(var a=0;a<this.languages.length;a++){var l=this.languages[a];if(!(["cimode","dev"].indexOf(l)>-1)&&this.store.hasLanguageSomeTranslations(l)){this.resolvedLanguage=l;break}}}},{key:"changeLanguage",value:function(i,a){var l=this;this.isLanguageChangingTo=i;var u=wa();this.emit("languageChanging",i);var d=function(p){l.language=p,l.languages=l.services.languageUtils.toResolveHierarchy(p),l.resolvedLanguage=void 0,l.setResolvedLanguage(p)},f=function(p,g){g?(d(g),l.translator.changeLanguage(g),l.isLanguageChangingTo=void 0,l.emit("languageChanged",g),l.logger.log("languageChanged",g)):l.isLanguageChangingTo=void 0,u.resolve(function(){return l.t.apply(l,arguments)}),a&&a(p,function(){return l.t.apply(l,arguments)})},m=function(p){!i&&!p&&l.services.languageDetector&&(p=[]);var g=typeof p=="string"?p:l.services.languageUtils.getBestMatchFromCodes(p);g&&(l.language||d(g),l.translator.language||l.translator.changeLanguage(g),l.services.languageDetector&&l.services.languageDetector.cacheUserLanguage&&l.services.languageDetector.cacheUserLanguage(g)),l.loadResources(g,function(x){f(x,g)})};return!i&&this.services.languageDetector&&!this.services.languageDetector.async?m(this.services.languageDetector.detect()):!i&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(m):this.services.languageDetector.detect(m):m(i),u}},{key:"getFixedT",value:function(i,a,l){var u=this,d=function f(m,_){var p;if(Tn(_)!=="object"){for(var g=arguments.length,x=new Array(g>2?g-2:0),w=2;w<g;w++)x[w-2]=arguments[w];p=u.options.overloadTranslationOptionHandler([m,_].concat(x))}else p=Un({},_);p.lng=p.lng||f.lng,p.lngs=p.lngs||f.lngs,p.ns=p.ns||f.ns,p.keyPrefix=p.keyPrefix||l||f.keyPrefix;var C=u.options.keySeparator||".",y;return p.keyPrefix&&Array.isArray(m)?y=m.map(function(b){return"".concat(p.keyPrefix).concat(C).concat(b)}):y=p.keyPrefix?"".concat(p.keyPrefix).concat(C).concat(m):m,u.t(y,p)};return typeof i=="string"?d.lng=i:d.lngs=i,d.ns=a,d.keyPrefix=l,d}},{key:"t",value:function(){var i;return this.translator&&(i=this.translator).translate.apply(i,arguments)}},{key:"exists",value:function(){var i;return this.translator&&(i=this.translator).exists.apply(i,arguments)}},{key:"setDefaultNamespace",value:function(i){this.options.defaultNS=i}},{key:"hasLoadedNamespace",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var u=this.resolvedLanguage||this.languages[0],d=this.options?this.options.fallbackLng:!1,f=this.languages[this.languages.length-1];if(u.toLowerCase()==="cimode")return!0;var m=function(g,x){var w=a.services.backendConnector.state["".concat(g,"|").concat(x)];return w===-1||w===2};if(l.precheck){var _=l.precheck(this,m);if(_!==void 0)return _}return!!(this.hasResourceBundle(u,i)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||m(u,i)&&(!d||m(f,i)))}},{key:"loadNamespaces",value:function(i,a){var l=this,u=wa();return this.options.ns?(typeof i=="string"&&(i=[i]),i.forEach(function(d){l.options.ns.indexOf(d)<0&&l.options.ns.push(d)}),this.loadResources(function(d){u.resolve(),a&&a(d)}),u):(a&&a(),Promise.resolve())}},{key:"loadLanguages",value:function(i,a){var l=wa();typeof i=="string"&&(i=[i]);var u=this.options.preload||[],d=i.filter(function(f){return u.indexOf(f)<0});return d.length?(this.options.preload=u.concat(d),this.loadResources(function(f){l.resolve(),a&&a(f)}),l):(a&&a(),Promise.resolve())}},{key:"dir",value:function(i){if(i||(i=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!i)return"rtl";var a=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],l=this.services&&this.services.languageUtils||new sg(hg());return a.indexOf(l.getLanguagePartFromCode(i))>-1||i.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var i=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:hl,u=Un(Un(Un({},this.options),a),{isClone:!0}),d=new n(u);(a.debug!==void 0||a.prefix!==void 0)&&(d.logger=d.logger.clone(a));var f=["store","services","language"];return f.forEach(function(m){d[m]=i[m]}),d.services=Un({},this.services),d.services.utils={hasLoadedNamespace:d.hasLoadedNamespace.bind(d)},d.translator=new ag(d.services,d.options),d.translator.on("*",function(m){for(var _=arguments.length,p=new Array(_>1?_-1:0),g=1;g<_;g++)p[g-1]=arguments[g];d.emit.apply(d,[m].concat(p))}),d.init(u,l),d.translator.options=d.options,d.translator.backendConnector.services.utils={hasLoadedNamespace:d.hasLoadedNamespace.bind(d)},d}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),n}(io);zn(bu,"createInstance",function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new bu(e,t)});var At=bu.createInstance();At.createInstance=bu.createInstance;At.createInstance;At.dir;At.init;At.loadResources;At.reloadResources;var JE=At.use;At.changeLanguage;At.getFixedT;var Md=At.t;At.exists;At.setDefaultNamespace;At.hasLoadedNamespace;At.loadNamespaces;At.loadLanguages;const Dd=()=>Qe("div",{children:[ce("h1",{children:"Det skjedde en feil"}),ce("p",{children:ce("i",{children:"Vennligst gå tilbake i nettleseren eller refresh siden"})})]}),YE="2.25rem",eO="3.75rem",tO="540px",nO="#000000",rO="#0062ba",oO={0:{value:"Base",type:"other"},1:{value:"Components",type:"other"}},iO={id:"edeff752fe55f2581f6ceee82c66aac8b8a8622d",selectedTokenSets:{Base:"source"},$figmaStyleReferences:{},type:"other",value:"[object Object]"},aO={id:"df8b73b683752ef5f35b3cf293bbe5a0cba9f88d",selectedTokenSets:{Base:"source"},$figmaStyleReferences:{},type:"other",value:"[object Object]"},sO={icon:{size:{xs:{value:"1.5rem",type:"sizing"},sm:{value:"1.875rem",type:"sizing"},md:{value:"2.25rem",type:"sizing"},lg:{value:"3rem",type:"sizing"},xl:{value:"3.75rem",type:"sizing"}}},panel:{color:{background:{default:{value:"#e6eff8",type:"color"},success:{value:"#d1f4e1",type:"color"},warning:{value:"#fffbe6",type:"color"}},arrow:{default:{value:"#e6eff8",type:"color"},success:{value:"#d1f4e1",type:"color"},warning:{value:"#fffbe6",type:"color"}}},font_size:{header:{breakpoint_sm:{value:"1.5rem",type:"fontSizes"},breakpoint_md:{value:"1.75rem",type:"fontSizes"},breakpoint_lg:{value:"2.25rem",type:"fontSizes"}},body:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},space:{padding:{x:{xs:{value:"1.5rem",type:"spacing"},md:{value:"6rem",type:"spacing"}},y:{xs:{value:"1.5rem",type:"spacing"},md:{value:"2.25rem",type:"spacing"}}},gap:{xs:{value:"0.75rem",type:"spacing"},md:{value:"0.75rem",type:"spacing"}},text_group:{gap:{xs:{value:"0.375rem",type:"spacing"}}},arrow_left:{md:{value:"6.688rem",type:"spacing"},xs:{value:"4rem",type:"spacing"}}},size:{icon:{xs:{value:"2.25rem",type:"sizing"},md:{value:"3.75rem",type:"sizing"}}},typography:{default:{fontFamily:{value:"Altinn-DIN",type:"fontFamily"},fontWeight:{value:"Regular",type:"fontWeight"},lineHeight:{value:1.5,type:"lineHeight"},fontSize:{value:"1rem",type:"fontSize"},letterSpacing:{value:"3%",type:"letterSpacing"},paragraphSpacing:{value:0,type:"paragraphSpacing"},textDecoration:{value:"none",type:"textDecoration"},textCase:{value:"none",type:"textCase"}}},font_weight:{heading:{value:"bold",type:"fontWeights"}}},legend:{font_weight:{default:{value:"medium",type:"fontWeights"}}},label:{font_weight:{default:{value:"medium",type:"fontWeights"}}},expandable_row:{color:{border_top:{default:{value:"#d2d5d8",type:"color"}},border_bottom:{default:{value:"#d2d5d8",type:"color"}}},space:{padding:{x:{xs:{value:"0.75rem",type:"spacing"},md:{value:"1.5rem",type:"spacing"}},top:{xs:{value:"0.25rem",type:"spacing"}},bottom:{xs:{value:"0.5rem",type:"spacing"}}},gap:{title:{xs:{value:.75,type:"spacing"},md:{value:"1.5rem",type:"spacing"}}}},size:{icon:{xs:{value:"1.5rem",type:"sizing"}}},font_weight:{header:{value:"medium",type:"fontWeights"}},font_size:{header:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},border_width:{default:{value:"1px",type:"borderWidth"}}},checkbox:{space:{gap:{xsmall:{value:"0.5rem",type:"spacing"},small:{value:"0.75rem",type:"spacing"}}},size:{width:{xsmall:{value:"1.125rem",type:"sizing"},small:{value:"1.5rem",type:"sizing"}},height:{xsmall:{value:"1.125rem",type:"sizing"},small:{value:"1.5rem",type:"sizing"}}},color:{border:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"},checked:{value:"#0062ba",type:"color"},error:{value:"#b3253a",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#e6eff8",type:"color"},checked:{value:"#0062ba",type:"color"},error:{value:"#ffffff",type:"color"}},text:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"},checked:{value:"#1e2b3c",type:"color"},error:{value:"#1e2b3c",type:"color"}}},border_width:{xsmall:{value:"2px",type:"borderWidth"},small:{value:"2px",type:"borderWidth"}},font_size:{xs:{value:"0.875rem",type:"fontSizes"},sm:{value:"1rem",type:"fontSizes"}}},fieldset:{space:{gap:{y:{xsmall:{value:"0.75rem",type:"spacing"},small:{value:"1.125rem",type:"spacing"},medium:{value:"1.5rem",type:"spacing"},large:{value:"1.5rem",type:"spacing"}}}}},field_description:{color:{text:{default:{value:"#1e2b3c",type:"color"}}},space:{top:{small:{value:"0.5rem",type:"spacing"},xsmall:{value:"0.375rem",type:"spacing"}}}},textarea:{border_width:{normal:{value:"2px",type:"borderWidth"}},color:{border:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"},error:{value:"#b3253a",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#ffffff",type:"color"},focus:{value:"#ffffff",type:"color"}},text:{default:{value:"#1e2b3c",type:"color"}}},space:{padding:{x:{value:"0.75rem",type:"spacing"},y:{value:"0.375rem",type:"spacing"}}},size:{min_height:{xsmall:{value:"6.25rem",type:"sizing"},small:{value:"9.375rem",type:"sizing"},medium:{value:"12.5rem",type:"sizing"},large:{value:"18.75rem",type:"sizing"},xlarge:{value:"25rem",type:"sizing"}}},font_size:{sm:{value:"1rem",type:"fontSizes"}}},"checkbox-group":{space:{gap:{x:{xsmall:{value:"1.5rem",type:"spacing"},small:{value:"2.25rem",type:"spacing"}},y:{xsmall:{value:"0.563rem",type:"spacing"},small:{value:"1.125rem",type:"spacing"}}}}},toggle_button:{font_size:{sm:{value:"1rem",type:"fontSizes"}},size:{min_width:{sm:{value:"100%",type:"sizing"},md:{value:"auto",type:"sizing"}}},border_width:{inactive:{value:"2px",type:"borderWidth"}},color:{background:{active:{value:"#0062ba",type:"color"},inactive:{value:"#ffffff",type:"color"}},text:{active:{value:"#ffffff",type:"color"},inactive:{value:"#1e2b3c",type:"color"}},border:{inactive:{value:"#0062ba",type:"color"}}},space:{padding:{x:{value:"1.5rem",type:"spacing"},top:{value:"0.125rem",type:"spacing"},bottom:{value:"0.25rem",type:"spacing"}}}},icon_button:{size:{large:{circle:{value:"2.25rem",type:"sizing"},icon:{value:"1.4rem",type:"sizing"}},medium:{circle:{value:"1.5rem",type:"sizing"},icon:{value:"0.875rem",type:"sizing"}},small:{circle:{value:"1.125rem",type:"sizing"},icon:{value:"0.688rem",type:"sizing"}}},border_width:{default:{value:"1px",type:"borderWidth"}}},button:{filled:{primary:{color:{background:{default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"},pressed:{value:"#00315d",type:"color"}}}},color:{text:{all:{value:"#ffffff",type:"color"}}},success:{color:{background:{default:{value:"#118849",type:"color"},hover:{value:"#0c6536",type:"color"},pressed:{value:"#084826",type:"color"}}}},danger:{color:{background:{default:{value:"#e02e49",type:"color"},hover:{value:"#b3253a",type:"color"},pressed:{value:"#861c2c",type:"color"}}}}},space:{gap:{small:{value:"0.5rem",type:"spacing"},medium:{value:"0.5rem",type:"spacing"},large:{value:"0.5rem",type:"spacing"}},padding:{x:{small:{value:"1.125rem",type:"spacing"},medium:{value:"2.25rem",type:"spacing"},large:{value:"3rem",type:"spacing"}}}},quiet:{space:{padding:{x:{small:{value:"0.375rem",type:"spacing"},medium:{value:"0.563rem",type:"spacing"},large:{value:"0.563rem",type:"spacing"}}}},primary:{color:{text:{default:{value:"#0062ba",type:"color"},pressed:{value:"#ffffff",type:"color"}},background:{hover:{value:"#e6eff8",type:"color"},pressed:{value:"#004e95",type:"color"}}}}},outline:{primary:{color:{text:{default:{value:"#0062ba",type:"color"},pressed:{value:"#ffffff",type:"color"}},border:{default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#e6eff8",type:"color"},pressed:{value:"#004e95",type:"color"}}}}},border_width:{default:{value:"1px",type:"borderWidth"}},size:{height:{small:{value:"2.25rem",type:"sizing"},medium:{value:"3rem",type:"sizing"},large:{value:"3.75rem",type:"sizing"}},icon:{small:{value:"1.5rem",type:"sizing"},medium:{value:"1.875rem",type:"sizing"},large:{value:"2.5rem",type:"sizing"}}}},input:{color:{border:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#ffffff",type:"color"},focus:{value:"#ffffff",type:"color"}}},error:{color:{border:{default:{value:"#b3253a",type:"color"}}}},space:{padding:{x:{value:"0.75rem",type:"spacing"},y:{value:"0.375rem",type:"spacing"}}},border_width:{default:{value:"2px",type:"borderWidth"},focus:{value:"4px",type:"borderWidth"}},read_only_info:{color:{border:{default:{value:"#fff4b4",type:"color"}},background:{default:{value:"#fff4b4",type:"color"}}}},read_only_confirm:{color:{background:{default:{value:"#d1f4e1",type:"color"}},border:{default:{value:"#d1f4e1",type:"color"}}}},size:{min_height:{default:{value:"2.25rem",type:"sizing"}}},font_size:{sm:{value:"1rem",type:"fontSizes"},md:{value:"1.125rem",type:"fontSizes"}}},error_message:{space:{padding:{top:{value:"0.375rem",type:"spacing"}}},color:{text:{value:"#b3253a",type:"color"}},font_size:{xs:{value:"0.875rem",type:"fontSizes"}}}},lO={thin:{value:"1px",type:"borderWidth"},standard:{value:"2px",type:"borderWidth"}},uO={half:{value:.375,type:"spacing"},base:{value:.75,type:"spacing"},x2:{value:1.5,type:"spacing"},x3:{value:2.25,type:"spacing"},x4:{value:3,type:"spacing"},x5:{value:3.75,type:"spacing"},x6:{value:4.5,type:"spacing"},x7:{value:5.25,type:"spacing"},x8:{value:6,type:"spacing"},x16:{value:12,type:"spacing"}},cO={border_radius:{normal:{value:"3px",type:"borderRadius"}},border_width:{normal:{value:"2px",type:"borderWidth"}}},dO={default:{value:"2.25rem",type:"paragraphSpacing"}},fO={100:{value:"0.75rem",type:"fontSizes"},200:{value:"0.875rem",type:"fontSizes"},300:{value:"1rem",type:"fontSizes"},400:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}},500:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"},breakpoint_lg:{value:"1.25rem",type:"fontSizes"}},600:{breakpoint_sm:{value:"1.125rem",type:"fontSizes",description:"18px"},breakpoint_md:{value:"1.25rem",type:"fontSizes",description:"20px"},breakpoint_lg:{value:"1.5rem",type:"fontSizes",description:"24px"}},700:{breakpoint_sm:{value:"1.25rem",type:"fontSizes",description:"20px"},breakpoint_md:{value:"1.5rem",type:"fontSizes",description:"24px"},breakpoint_lg:{value:"1.75rem",type:"fontSizes",description:"28px"}},800:{breakpoint_sm:{value:"1.5rem",type:"fontSizes",description:"24px"},breakpoint_md:{value:"1.75rem",type:"fontSizes",description:"28px"},breakpoint_lg:{value:"2.25rem",type:"fontSizes",description:"36px"}},900:{breakpoint_sm:{value:"1.75rem",type:"fontSizes",description:"28px"},breakpoint_md:{value:"2.25rem",type:"fontSizes",description:"36px"},breakpoint_lg:{value:"2.75rem",type:"fontSizes",description:"44px"}},heading:{h1:{breakpoint_sm:{value:"1.75rem",type:"fontSizes"},breakpoint_md:{value:"2.25rem",type:"fontSizes"},breakpoint_lg:{value:"2.75rem",type:"fontSizes"}},h2:{breakpoint_sm:{value:"1.5rem",type:"fontSizes"},breakpoint_md:{value:"1.75rem",type:"fontSizes"},breakpoint_lg:{value:"2.25rem",type:"fontSizes"}},h3:{breakpoint_sm:{value:"1.25rem",type:"fontSizes"},breakpoint_md:{value:"1.5rem",type:"fontSizes"},breakpoint_lg:{value:"1.75rem",type:"fontSizes"}},h4:{breakpoint_sm:{value:"1.125rem",type:"fontSizes"},breakpoint_md:{value:"1.25rem",type:"fontSizes"},breakpoint_lg:{value:"1.5rem",type:"fontSizes"}},h5:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"},breakpoint_lg:{value:"1.25rem",type:"fontSizes"}}},"component-size":{xs:{value:"0.875rem",type:"fontSizes",description:"14px"},sm:{value:"1rem",type:"fontSizes",description:"16px"},md:{value:"1.125rem",type:"fontSizes",description:"18px"},lg:{value:"1.5rem",type:"fontSizes",description:"24px"}},body:{medium:{value:"1rem",type:"fontSizes",description:"Body text should never be smaller than 16px"},large:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},label:{small:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},detail:{default:{value:"0.875rem",type:"fontSizes"}},ingress:{small:{breakpoint_sm:{value:"1.125rem",type:"fontSizes",description:"18px (Ingress should never be smaller than 18px, to keep a visual difference from the body text that is 16px.)"},breakpoint_md:{value:"1.25rem",type:"fontSizes",description:"20px"}},medium:{breakpoint_sm:{value:"1.25rem",type:"fontSizes",description:"20px"},breakpoint_md:{value:"1.5rem",type:"fontSizes",description:"24px"}}}},hO={default:{value:"Altinn-DIN",type:"fontFamilies"},heading:{value:"Altinn-DIN",type:"fontFamilies"},ingress:{value:"Altinn-DIN",type:"fontFamilies"},body:{value:"Altinn-DIN",type:"fontFamilies"},label:{value:"Altinn-DIN",type:"fontFamilies"}},pO={xs:{value:"0px",type:"sizing",description:"Specific styling for the smallest mobile sizes and up. Will affect screen sizes with the set size and larger."},sm:{value:"540px",type:"sizing",description:"Specific styling for the largest mobile sizes and up. Will affect screen sizes with the set size and larger."},md:{value:"768px",type:"sizing",description:"Specific styling for tablet and up. Will affect screen sizes with the set size and larger."},lg:{value:"960px",type:"sizing",description:"Specific styling for the largest tablets and up. Will affect screen sizes with the set size and larger.Will affect screen sizes with this size and larger"},xl:{value:"1200px",type:"sizing",description:"Specific styling for laptops and up. Will affect screen sizes with the set size and larger."},xxl:{value:"1600px",type:"sizing",description:"Specific styling for desktops and up. Will affect screen sizes with the set size and larger."}},mO={default:{fontFamily:{value:"Altinn-DIN",type:"fontFamily"},fontWeight:{value:"Regular",type:"fontWeight"},lineHeight:{value:1.5,type:"lineHeight"},fontSize:{value:"1rem",type:"fontSize"},letterSpacing:{value:"0.3px",type:"letterSpacing"},paragraphSpacing:{value:0,type:"paragraphSpacing"},textDecoration:{value:"none",type:"textDecoration"},textCase:{value:"none",type:"textCase"}}},_O={base:{value:.75,type:"sizing"},x2:{value:1.5,type:"sizing"},x3:{value:2.25,type:"sizing"},x4:{value:3,type:"sizing"},x5:{value:3.75,type:"sizing"},x6:{value:4.5,type:"sizing"},x7:{value:5.25,type:"sizing"},x8:{value:6,type:"sizing"},x10:{value:7.5,type:"sizing"},x16:{value:12,type:"sizing"}},vO={disabled:{value:"30%",type:"opacity"}},gO={grey:{100:{value:"#f4f5f6",type:"color",description:`AAA 13.1 on grey 800
AA 6.5 as bkdg for interaction blue`},200:{value:"#e9eaec",type:"color",description:`AAA 11.9 on grey 800
AA 5.9 as bkdg for interaction blue`},300:{value:"#d2d5d8",type:"color",description:`AAA 11.9 on grey 800
AA 5.9 as bkdg for interaction blue`},400:{value:"#bcbfc5",type:"color",description:`AAA 8.7 on grey 800
AA18 4.4 as bkdg for interaction blue`},500:{value:"#a5aab1",type:"color",description:`AA 6.1 on grey 800
AA18 3 as bkdg for interaction blue`},600:{value:"#68707c",type:"color",description:`AA18 3.5 on grey 800
AA18 4 on white`},700:{value:"#4b5563",type:"color",description:"AAA 7.5 on white"},800:{value:"#1e2b3c",type:"color",description:`Main Text Color
AAA 14.3 on white`},900:{value:"#141e29",type:"color",description:"AAA 16.8 on white"}},white:{value:"#ffffff",type:"color",description:`Standard bckd color.
AAA 13.1 on grey 800
AAA 7.2 as bkdg for interaction blue`},black:{value:"#000000",type:"color"},red:{100:{value:"#f9d5db",type:"color"},200:{value:"#f3abb6",type:"color"},300:{value:"#ec8292",type:"color"},400:{value:"#e6586d",type:"color"},500:{value:"#e02e49",type:"color"},600:{value:"#b3253a",type:"color"},700:{value:"#861c2c",type:"color"},800:{value:"#5a121d",type:"color"},900:{value:"#480e17",type:"color"}},orange:{100:{value:"#ffe8cd",type:"color"},200:{value:"#ffd19b",type:"color"},300:{value:"#ffba6a",type:"color"},400:{value:"#ffa338",type:"color"},500:{value:"#ff8c06",type:"color"},600:{value:"#cc7005",type:"color"},700:{value:"#995404",type:"color"},800:{value:"#663802",type:"color"},900:{value:"#522d02",type:"color"}},yellow:{100:{value:"#fffbe6",type:"color"},200:{value:"#fff4b4",type:"color"},300:{value:"#ffed83",type:"color"},400:{value:"#ffe551",type:"color"},500:{value:"#ffda06",type:"color"},600:{value:"#e6c405",type:"color"},700:{value:"#ccae05",type:"color"},800:{value:"#998304",type:"color"},900:{value:"#665702",type:"color"}},green:{100:{value:"#e8faf0",type:"color"},200:{value:"#d1f4e1",type:"color"},300:{value:"#8be4b5",type:"color"},400:{value:"#5dd997",type:"color"},500:{value:"#2ece7a",type:"color"},600:{value:"#15b560",type:"color"},700:{value:"#118849",type:"color"},800:{value:"#0c6536",type:"color"},900:{value:"#084826",type:"color"}},blue:{100:{value:"#e6eff8",type:"color"},200:{value:"#b3d0ea",type:"color"},300:{value:"#80b1dd",type:"color"},400:{value:"#66a1d6",type:"color"},500:{value:"#3381c8",type:"color"},600:{value:"#1a72c1",type:"color"},700:{value:"#0062ba",type:"color"},800:{value:"#004e95",type:"color"},900:{value:"#00315d",type:"color"}},purple:{100:{value:"#f5e8f2",type:"color"},200:{value:"#e0b9d8",type:"color"},300:{value:"#cc8bbf",type:"color"},400:{value:"#b75da5",type:"color"},500:{value:"#a22e8b",type:"color"},600:{value:"#98177e",type:"color"},700:{value:"#7a1265",type:"color"},800:{value:"#5b0e4c",type:"color"},900:{value:"#490b3d",type:"color"}}},yO={background:{default:{value:"#ffffff",type:"color"},subtle:{value:"#f4f5f6",type:"color"}},surface:{neutral:{default:{value:"#ffffff",type:"color"},subtle:{value:"#f4f5f6",type:"color"},"subtle-hover":{value:"#e9eaec",type:"color"},selected:{value:"#e6eff8",type:"color"},inverted:{value:"#1e2b3c",type:"color"}},action:{subtle:{value:"#e6eff8",type:"color"},default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"},active:{value:"#00315d",type:"color",description:"Standard farge for handlinger"}},success:{subtle:{value:"#d1f4e1",type:"color"},default:{value:"#118849",type:"color"},hover:{value:"#0c6536",type:"color"},active:{value:"#084826",type:"color"}},warning:{subtle:{value:"#fffbe6",type:"color"}},danger:{subtle:{value:"#f9d5db",type:"color"},default:{value:"#e02e49",type:"color"},hover:{value:"#b3253a",type:"color"},active:{value:"#861c2c",type:"color"}},info:{subtle:{value:"#e6eff8",type:"color"}}},border:{info:{default:{value:"#004e95",type:"color"}},action:{subtle:{value:"#e6eff8",type:"color"},default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"},active:{value:"#00315d",type:"color"}},neutral:{default:{value:"#68707c",type:"color"},subtle:{value:"#d2d5d8",type:"color"},strong:{value:"#1e2b3c",type:"color"},divider:{value:"#bcbfc5",type:"color"}},success:{default:{value:"#0c6536",type:"color"}},warning:{default:{value:"#cc7005",type:"color"}},danger:{default:{value:"#b3253a",type:"color"}}},tab_focus:{outline:{color:{value:"#98177e",type:"color"},offset:{value:"2px",type:"spacing"},width:{value:"2px",type:"borderWidth"}}},text:{success:{default:{value:"#0c6536",type:"color"},on_success:{value:"#ffffff",type:"color"}},neutral:{default:{value:"#1e2b3c",type:"color"},subtle:{value:"#68707c",type:"color"},on_inverted:{value:"#ffffff",type:"color"}},action:{default:{value:"#0062ba",type:"color"},on_action:{value:"#ffffff",type:"color"}},warning:{default:{value:"#995404",type:"color"},on_warning:{value:"#663802",type:"color"},icon_warning:{value:"#cc7005",type:"color"}},danger:{default:{value:"#b3253a",type:"color"},on_danger:{value:"#ffffff",type:"color"}},visited:{default:{value:"#7a1265",type:"color"}}}},bO={default:{first:{100:{value:"#feefef",type:"color",description:`AAA 12.8 on grey 800
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
AA18 3.7 as bkdg for interaction blue`},500:{value:"#4badf7",type:"color",description:"AA 5.8 on grey 800"},600:{value:"#1e98f5",type:"color",description:"AA 4.6 on grey 800"},700:{value:"#1b88dd",type:"color",description:"AA18 3.8 on grey 800"},800:{value:"#156aac",type:"color",description:"AA 5.6 on white"}}}},xO={tokenSetOrder:oO,Felles:iO,Altinn:aO,component:sO,border_width:lO,space:uO,interactive_components:cO,paragraph_space:dO,font_size:fO,font_family:hO,breakpoints:pO,typography:mO,size:_O,opacity:vO,colors:gO,semantic:yO,brand:bO};var uh={},wO={get exports(){return uh},set exports(e){uh=e}};/* @preserve
 * Leaflet 1.9.3, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2022 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(e,t){(function(n,r){r(t)})(li,function(n){var r="1.9.3";function i(o){var s,c,h,v;for(c=1,h=arguments.length;c<h;c++){v=arguments[c];for(s in v)o[s]=v[s]}return o}var a=Object.create||function(){function o(){}return function(s){return o.prototype=s,new o}}();function l(o,s){var c=Array.prototype.slice;if(o.bind)return o.bind.apply(o,c.call(arguments,1));var h=c.call(arguments,2);return function(){return o.apply(s,h.length?h.concat(c.call(arguments)):arguments)}}var u=0;function d(o){return"_leaflet_id"in o||(o._leaflet_id=++u),o._leaflet_id}function f(o,s,c){var h,v,k,E;return E=function(){h=!1,v&&(k.apply(c,v),v=!1)},k=function(){h?v=arguments:(o.apply(c,arguments),setTimeout(E,s),h=!0)},k}function m(o,s,c){var h=s[1],v=s[0],k=h-v;return o===h&&c?o:((o-v)%k+k)%k+v}function _(){return!1}function p(o,s){if(s===!1)return o;var c=Math.pow(10,s===void 0?6:s);return Math.round(o*c)/c}function g(o){return o.trim?o.trim():o.replace(/^\s+|\s+$/g,"")}function x(o){return g(o).split(/\s+/)}function w(o,s){Object.prototype.hasOwnProperty.call(o,"options")||(o.options=o.options?a(o.options):{});for(var c in s)o.options[c]=s[c];return o.options}function C(o,s,c){var h=[];for(var v in o)h.push(encodeURIComponent(c?v.toUpperCase():v)+"="+encodeURIComponent(o[v]));return(!s||s.indexOf("?")===-1?"?":"&")+h.join("&")}var y=/\{ *([\w_ -]+) *\}/g;function b(o,s){return o.replace(y,function(c,h){var v=s[h];if(v===void 0)throw new Error("No value provided for variable "+c);return typeof v=="function"&&(v=v(s)),v})}var S=Array.isArray||function(o){return Object.prototype.toString.call(o)==="[object Array]"};function P(o,s){for(var c=0;c<o.length;c++)if(o[c]===s)return c;return-1}var R="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function M(o){return window["webkit"+o]||window["moz"+o]||window["ms"+o]}var F=0;function j(o){var s=+new Date,c=Math.max(0,16-(s-F));return F=s+c,window.setTimeout(o,c)}var V=window.requestAnimationFrame||M("RequestAnimationFrame")||j,$=window.cancelAnimationFrame||M("CancelAnimationFrame")||M("CancelRequestAnimationFrame")||function(o){window.clearTimeout(o)};function z(o,s,c){if(c&&V===j)o.call(s);else return V.call(window,l(o,s))}function ee(o){o&&$.call(window,o)}var me={__proto__:null,extend:i,create:a,bind:l,get lastId(){return u},stamp:d,throttle:f,wrapNum:m,falseFn:_,formatNum:p,trim:g,splitWords:x,setOptions:w,getParamString:C,template:b,isArray:S,indexOf:P,emptyImageUrl:R,requestFn:V,cancelFn:$,requestAnimFrame:z,cancelAnimFrame:ee};function re(){}re.extend=function(o){var s=function(){w(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},c=s.__super__=this.prototype,h=a(c);h.constructor=s,s.prototype=h;for(var v in this)Object.prototype.hasOwnProperty.call(this,v)&&v!=="prototype"&&v!=="__super__"&&(s[v]=this[v]);return o.statics&&i(s,o.statics),o.includes&&(fe(o.includes),i.apply(null,[h].concat(o.includes))),i(h,o),delete h.statics,delete h.includes,h.options&&(h.options=c.options?a(c.options):{},i(h.options,o.options)),h._initHooks=[],h.callInitHooks=function(){if(!this._initHooksCalled){c.callInitHooks&&c.callInitHooks.call(this),this._initHooksCalled=!0;for(var k=0,E=h._initHooks.length;k<E;k++)h._initHooks[k].call(this)}},s},re.include=function(o){var s=this.prototype.options;return i(this.prototype,o),o.options&&(this.prototype.options=s,this.mergeOptions(o.options)),this},re.mergeOptions=function(o){return i(this.prototype.options,o),this},re.addInitHook=function(o){var s=Array.prototype.slice.call(arguments,1),c=typeof o=="function"?o:function(){this[o].apply(this,s)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(c),this};function fe(o){if(!(typeof L>"u"||!L||!L.Mixin)){o=S(o)?o:[o];for(var s=0;s<o.length;s++)o[s]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var U={on:function(o,s,c){if(typeof o=="object")for(var h in o)this._on(h,o[h],s);else{o=x(o);for(var v=0,k=o.length;v<k;v++)this._on(o[v],s,c)}return this},off:function(o,s,c){if(!arguments.length)delete this._events;else if(typeof o=="object")for(var h in o)this._off(h,o[h],s);else{o=x(o);for(var v=arguments.length===1,k=0,E=o.length;k<E;k++)v?this._off(o[k]):this._off(o[k],s,c)}return this},_on:function(o,s,c,h){if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}if(this._listens(o,s,c)===!1){c===this&&(c=void 0);var v={fn:s,ctx:c};h&&(v.once=!0),this._events=this._events||{},this._events[o]=this._events[o]||[],this._events[o].push(v)}},_off:function(o,s,c){var h,v,k;if(this._events&&(h=this._events[o],!!h)){if(arguments.length===1){if(this._firingCount)for(v=0,k=h.length;v<k;v++)h[v].fn=_;delete this._events[o];return}if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}var E=this._listens(o,s,c);if(E!==!1){var A=h[E];this._firingCount&&(A.fn=_,this._events[o]=h=h.slice()),h.splice(E,1)}}},fire:function(o,s,c){if(!this.listens(o,c))return this;var h=i({},s,{type:o,target:this,sourceTarget:s&&s.sourceTarget||this});if(this._events){var v=this._events[o];if(v){this._firingCount=this._firingCount+1||1;for(var k=0,E=v.length;k<E;k++){var A=v[k],D=A.fn;A.once&&this.off(o,D,A.ctx),D.call(A.ctx||this,h)}this._firingCount--}}return c&&this._propagateEvent(h),this},listens:function(o,s,c,h){typeof o!="string"&&console.warn('"string" type argument expected');var v=s;typeof s!="function"&&(h=!!s,v=void 0,c=void 0);var k=this._events&&this._events[o];if(k&&k.length&&this._listens(o,v,c)!==!1)return!0;if(h){for(var E in this._eventParents)if(this._eventParents[E].listens(o,s,c,h))return!0}return!1},_listens:function(o,s,c){if(!this._events)return!1;var h=this._events[o]||[];if(!s)return!!h.length;c===this&&(c=void 0);for(var v=0,k=h.length;v<k;v++)if(h[v].fn===s&&h[v].ctx===c)return v;return!1},once:function(o,s,c){if(typeof o=="object")for(var h in o)this._on(h,o[h],s,!0);else{o=x(o);for(var v=0,k=o.length;v<k;v++)this._on(o[v],s,c,!0)}return this},addEventParent:function(o){return this._eventParents=this._eventParents||{},this._eventParents[d(o)]=o,this},removeEventParent:function(o){return this._eventParents&&delete this._eventParents[d(o)],this},_propagateEvent:function(o){for(var s in this._eventParents)this._eventParents[s].fire(o.type,i({layer:o.target,propagatedFrom:o.target},o),!0)}};U.addEventListener=U.on,U.removeEventListener=U.clearAllEventListeners=U.off,U.addOneTimeEventListener=U.once,U.fireEvent=U.fire,U.hasEventListeners=U.listens;var te=re.extend(U);function I(o,s,c){this.x=c?Math.round(o):o,this.y=c?Math.round(s):s}var oe=Math.trunc||function(o){return o>0?Math.floor(o):Math.ceil(o)};I.prototype={clone:function(){return new I(this.x,this.y)},add:function(o){return this.clone()._add(q(o))},_add:function(o){return this.x+=o.x,this.y+=o.y,this},subtract:function(o){return this.clone()._subtract(q(o))},_subtract:function(o){return this.x-=o.x,this.y-=o.y,this},divideBy:function(o){return this.clone()._divideBy(o)},_divideBy:function(o){return this.x/=o,this.y/=o,this},multiplyBy:function(o){return this.clone()._multiplyBy(o)},_multiplyBy:function(o){return this.x*=o,this.y*=o,this},scaleBy:function(o){return new I(this.x*o.x,this.y*o.y)},unscaleBy:function(o){return new I(this.x/o.x,this.y/o.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=oe(this.x),this.y=oe(this.y),this},distanceTo:function(o){o=q(o);var s=o.x-this.x,c=o.y-this.y;return Math.sqrt(s*s+c*c)},equals:function(o){return o=q(o),o.x===this.x&&o.y===this.y},contains:function(o){return o=q(o),Math.abs(o.x)<=Math.abs(this.x)&&Math.abs(o.y)<=Math.abs(this.y)},toString:function(){return"Point("+p(this.x)+", "+p(this.y)+")"}};function q(o,s,c){return o instanceof I?o:S(o)?new I(o[0],o[1]):o==null?o:typeof o=="object"&&"x"in o&&"y"in o?new I(o.x,o.y):new I(o,s,c)}function O(o,s){if(o)for(var c=s?[o,s]:o,h=0,v=c.length;h<v;h++)this.extend(c[h])}O.prototype={extend:function(o){var s,c;if(!o)return this;if(o instanceof I||typeof o[0]=="number"||"x"in o)s=c=q(o);else if(o=N(o),s=o.min,c=o.max,!s||!c)return this;return!this.min&&!this.max?(this.min=s.clone(),this.max=c.clone()):(this.min.x=Math.min(s.x,this.min.x),this.max.x=Math.max(c.x,this.max.x),this.min.y=Math.min(s.y,this.min.y),this.max.y=Math.max(c.y,this.max.y)),this},getCenter:function(o){return q((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,o)},getBottomLeft:function(){return q(this.min.x,this.max.y)},getTopRight:function(){return q(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(o){var s,c;return typeof o[0]=="number"||o instanceof I?o=q(o):o=N(o),o instanceof O?(s=o.min,c=o.max):s=c=o,s.x>=this.min.x&&c.x<=this.max.x&&s.y>=this.min.y&&c.y<=this.max.y},intersects:function(o){o=N(o);var s=this.min,c=this.max,h=o.min,v=o.max,k=v.x>=s.x&&h.x<=c.x,E=v.y>=s.y&&h.y<=c.y;return k&&E},overlaps:function(o){o=N(o);var s=this.min,c=this.max,h=o.min,v=o.max,k=v.x>s.x&&h.x<c.x,E=v.y>s.y&&h.y<c.y;return k&&E},isValid:function(){return!!(this.min&&this.max)},pad:function(o){var s=this.min,c=this.max,h=Math.abs(s.x-c.x)*o,v=Math.abs(s.y-c.y)*o;return N(q(s.x-h,s.y-v),q(c.x+h,c.y+v))},equals:function(o){return o?(o=N(o),this.min.equals(o.getTopLeft())&&this.max.equals(o.getBottomRight())):!1}};function N(o,s){return!o||o instanceof O?o:new O(o,s)}function B(o,s){if(o)for(var c=s?[o,s]:o,h=0,v=c.length;h<v;h++)this.extend(c[h])}B.prototype={extend:function(o){var s=this._southWest,c=this._northEast,h,v;if(o instanceof Y)h=o,v=o;else if(o instanceof B){if(h=o._southWest,v=o._northEast,!h||!v)return this}else return o?this.extend(ne(o)||Q(o)):this;return!s&&!c?(this._southWest=new Y(h.lat,h.lng),this._northEast=new Y(v.lat,v.lng)):(s.lat=Math.min(h.lat,s.lat),s.lng=Math.min(h.lng,s.lng),c.lat=Math.max(v.lat,c.lat),c.lng=Math.max(v.lng,c.lng)),this},pad:function(o){var s=this._southWest,c=this._northEast,h=Math.abs(s.lat-c.lat)*o,v=Math.abs(s.lng-c.lng)*o;return new B(new Y(s.lat-h,s.lng-v),new Y(c.lat+h,c.lng+v))},getCenter:function(){return new Y((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new Y(this.getNorth(),this.getWest())},getSouthEast:function(){return new Y(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(o){typeof o[0]=="number"||o instanceof Y||"lat"in o?o=ne(o):o=Q(o);var s=this._southWest,c=this._northEast,h,v;return o instanceof B?(h=o.getSouthWest(),v=o.getNorthEast()):h=v=o,h.lat>=s.lat&&v.lat<=c.lat&&h.lng>=s.lng&&v.lng<=c.lng},intersects:function(o){o=Q(o);var s=this._southWest,c=this._northEast,h=o.getSouthWest(),v=o.getNorthEast(),k=v.lat>=s.lat&&h.lat<=c.lat,E=v.lng>=s.lng&&h.lng<=c.lng;return k&&E},overlaps:function(o){o=Q(o);var s=this._southWest,c=this._northEast,h=o.getSouthWest(),v=o.getNorthEast(),k=v.lat>s.lat&&h.lat<c.lat,E=v.lng>s.lng&&h.lng<c.lng;return k&&E},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(o,s){return o?(o=Q(o),this._southWest.equals(o.getSouthWest(),s)&&this._northEast.equals(o.getNorthEast(),s)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function Q(o,s){return o instanceof B?o:new B(o,s)}function Y(o,s,c){if(isNaN(o)||isNaN(s))throw new Error("Invalid LatLng object: ("+o+", "+s+")");this.lat=+o,this.lng=+s,c!==void 0&&(this.alt=+c)}Y.prototype={equals:function(o,s){if(!o)return!1;o=ne(o);var c=Math.max(Math.abs(this.lat-o.lat),Math.abs(this.lng-o.lng));return c<=(s===void 0?1e-9:s)},toString:function(o){return"LatLng("+p(this.lat,o)+", "+p(this.lng,o)+")"},distanceTo:function(o){return _e.distance(this,ne(o))},wrap:function(){return _e.wrapLatLng(this)},toBounds:function(o){var s=180*o/40075017,c=s/Math.cos(Math.PI/180*this.lat);return Q([this.lat-s,this.lng-c],[this.lat+s,this.lng+c])},clone:function(){return new Y(this.lat,this.lng,this.alt)}};function ne(o,s,c){return o instanceof Y?o:S(o)&&typeof o[0]!="object"?o.length===3?new Y(o[0],o[1],o[2]):o.length===2?new Y(o[0],o[1]):null:o==null?o:typeof o=="object"&&"lat"in o?new Y(o.lat,"lng"in o?o.lng:o.lon,o.alt):s===void 0?null:new Y(o,s,c)}var ue={latLngToPoint:function(o,s){var c=this.projection.project(o),h=this.scale(s);return this.transformation._transform(c,h)},pointToLatLng:function(o,s){var c=this.scale(s),h=this.transformation.untransform(o,c);return this.projection.unproject(h)},project:function(o){return this.projection.project(o)},unproject:function(o){return this.projection.unproject(o)},scale:function(o){return 256*Math.pow(2,o)},zoom:function(o){return Math.log(o/256)/Math.LN2},getProjectedBounds:function(o){if(this.infinite)return null;var s=this.projection.bounds,c=this.scale(o),h=this.transformation.transform(s.min,c),v=this.transformation.transform(s.max,c);return new O(h,v)},infinite:!1,wrapLatLng:function(o){var s=this.wrapLng?m(o.lng,this.wrapLng,!0):o.lng,c=this.wrapLat?m(o.lat,this.wrapLat,!0):o.lat,h=o.alt;return new Y(c,s,h)},wrapLatLngBounds:function(o){var s=o.getCenter(),c=this.wrapLatLng(s),h=s.lat-c.lat,v=s.lng-c.lng;if(h===0&&v===0)return o;var k=o.getSouthWest(),E=o.getNorthEast(),A=new Y(k.lat-h,k.lng-v),D=new Y(E.lat-h,E.lng-v);return new B(A,D)}},_e=i({},ue,{wrapLng:[-180,180],R:6371e3,distance:function(o,s){var c=Math.PI/180,h=o.lat*c,v=s.lat*c,k=Math.sin((s.lat-o.lat)*c/2),E=Math.sin((s.lng-o.lng)*c/2),A=k*k+Math.cos(h)*Math.cos(v)*E*E,D=2*Math.atan2(Math.sqrt(A),Math.sqrt(1-A));return this.R*D}}),Ye=6378137,qe={R:Ye,MAX_LATITUDE:85.0511287798,project:function(o){var s=Math.PI/180,c=this.MAX_LATITUDE,h=Math.max(Math.min(c,o.lat),-c),v=Math.sin(h*s);return new I(this.R*o.lng*s,this.R*Math.log((1+v)/(1-v))/2)},unproject:function(o){var s=180/Math.PI;return new Y((2*Math.atan(Math.exp(o.y/this.R))-Math.PI/2)*s,o.x*s/this.R)},bounds:function(){var o=Ye*Math.PI;return new O([-o,-o],[o,o])}()};function Fe(o,s,c,h){if(S(o)){this._a=o[0],this._b=o[1],this._c=o[2],this._d=o[3];return}this._a=o,this._b=s,this._c=c,this._d=h}Fe.prototype={transform:function(o,s){return this._transform(o.clone(),s)},_transform:function(o,s){return s=s||1,o.x=s*(this._a*o.x+this._b),o.y=s*(this._c*o.y+this._d),o},untransform:function(o,s){return s=s||1,new I((o.x/s-this._b)/this._a,(o.y/s-this._d)/this._c)}};function Ne(o,s,c,h){return new Fe(o,s,c,h)}var nt=i({},_e,{code:"EPSG:3857",projection:qe,transformation:function(){var o=.5/(Math.PI*qe.R);return Ne(o,.5,-o,.5)}()}),Oe=i({},nt,{code:"EPSG:900913"});function Kt(o){return document.createElementNS("http://www.w3.org/2000/svg",o)}function Ut(o,s){var c="",h,v,k,E,A,D;for(h=0,k=o.length;h<k;h++){for(A=o[h],v=0,E=A.length;v<E;v++)D=A[v],c+=(v?"L":"M")+D.x+" "+D.y;c+=s?de.svg?"z":"x":""}return c||"M0 0"}var ze=document.documentElement.style,Ct="ActiveXObject"in window,Nn=Ct&&!document.addEventListener,$t="msLaunchUri"in navigator&&!("documentMode"in document),Jn=In("webkit"),Bt=In("android"),Sr=In("android 2")||In("android 3"),Z=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),W=Bt&&In("Google")&&Z<537&&!("AudioNode"in window),G=!!window.opera,se=!$t&&In("chrome"),ie=In("gecko")&&!Jn&&!G&&!Ct,ve=!se&&In("safari"),he=In("phantom"),ye="OTransition"in ze,pe=navigator.platform.indexOf("Win")===0,it=Ct&&"transition"in ze,xe="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Sr,je="MozPerspective"in ze,Nt=!window.L_DISABLE_3D&&(it||xe||je)&&!ye&&!he,gt=typeof orientation<"u"||In("mobile"),ho=gt&&Jn,Ko=gt&&xe,po=!window.PointerEvent&&window.MSPointerEvent,Yn=!!(window.PointerEvent||po),Qo="ontouchstart"in window||!!window.TouchEvent,pt=!window.L_NO_TOUCH&&(Qo||Yn),rn=gt&&G,er=gt&&ie,Go=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Xi=function(){var o=!1;try{var s=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("testPassiveEventSupport",_,s),window.removeEventListener("testPassiveEventSupport",_,s)}catch{}return o}(),Rc=function(){return!!document.createElement("canvas").getContext}(),Ji=!!(document.createElementNS&&Kt("svg").createSVGRect),_n=!!Ji&&function(){var o=document.createElement("div");return o.innerHTML="<svg/>",(o.firstChild&&o.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),Yi=!Ji&&function(){try{var o=document.createElement("div");o.innerHTML='<v:shape adj="1"/>';var s=o.firstChild;return s.style.behavior="url(#default#VML)",s&&typeof s.adj=="object"}catch{return!1}}(),Ts=navigator.platform.indexOf("Mac")===0,zc=navigator.platform.indexOf("Linux")===0;function In(o){return navigator.userAgent.toLowerCase().indexOf(o)>=0}var de={ie:Ct,ielt9:Nn,edge:$t,webkit:Jn,android:Bt,android23:Sr,androidStock:W,opera:G,chrome:se,gecko:ie,safari:ve,phantom:he,opera12:ye,win:pe,ie3d:it,webkit3d:xe,gecko3d:je,any3d:Nt,mobile:gt,mobileWebkit:ho,mobileWebkit3d:Ko,msPointer:po,pointer:Yn,touch:pt,touchNative:Qo,mobileOpera:rn,mobileGecko:er,retina:Go,passiveEvents:Xi,canvas:Rc,svg:Ji,vml:Yi,inlineSvg:_n,mac:Ts,linux:zc},fm=de.msPointer?"MSPointerDown":"pointerdown",hm=de.msPointer?"MSPointerMove":"pointermove",pm=de.msPointer?"MSPointerUp":"pointerup",mm=de.msPointer?"MSPointerCancel":"pointercancel",Ac={touchstart:fm,touchmove:hm,touchend:pm,touchcancel:mm},_m={touchstart:Zx,touchmove:Ls,touchend:Ls,touchcancel:Ls},Xo={},vm=!1;function Dx(o,s,c){return s==="touchstart"&&$x(),_m[s]?(c=_m[s].bind(this,c),o.addEventListener(Ac[s],c,!1),c):(console.warn("wrong event specified:",s),_)}function Fx(o,s,c){if(!Ac[s]){console.warn("wrong event specified:",s);return}o.removeEventListener(Ac[s],c,!1)}function jx(o){Xo[o.pointerId]=o}function Ux(o){Xo[o.pointerId]&&(Xo[o.pointerId]=o)}function gm(o){delete Xo[o.pointerId]}function $x(){vm||(document.addEventListener(fm,jx,!0),document.addEventListener(hm,Ux,!0),document.addEventListener(pm,gm,!0),document.addEventListener(mm,gm,!0),vm=!0)}function Ls(o,s){if(s.pointerType!==(s.MSPOINTER_TYPE_MOUSE||"mouse")){s.touches=[];for(var c in Xo)s.touches.push(Xo[c]);s.changedTouches=[s],o(s)}}function Zx(o,s){s.MSPOINTER_TYPE_TOUCH&&s.pointerType===s.MSPOINTER_TYPE_TOUCH&&yt(s),Ls(o,s)}function Hx(o){var s={},c,h;for(h in o)c=o[h],s[h]=c&&c.bind?c.bind(o):c;return o=s,s.type="dblclick",s.detail=2,s.isTrusted=!1,s._simulated=!0,s}var Wx=200;function Vx(o,s){o.addEventListener("dblclick",s);var c=0,h;function v(k){if(k.detail!==1){h=k.detail;return}if(!(k.pointerType==="mouse"||k.sourceCapabilities&&!k.sourceCapabilities.firesTouchEvents)){var E=km(k);if(!(E.some(function(D){return D instanceof HTMLLabelElement&&D.attributes.for})&&!E.some(function(D){return D instanceof HTMLInputElement||D instanceof HTMLSelectElement}))){var A=Date.now();A-c<=Wx?(h++,h===2&&s(Hx(k))):h=1,c=A}}}return o.addEventListener("click",v),{dblclick:s,simDblclick:v}}function qx(o,s){o.removeEventListener("dblclick",s.dblclick),o.removeEventListener("click",s.simDblclick)}var Bc=As(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ea=As(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),ym=ea==="webkitTransition"||ea==="OTransition"?ea+"End":"transitionend";function bm(o){return typeof o=="string"?document.getElementById(o):o}function ta(o,s){var c=o.style[s]||o.currentStyle&&o.currentStyle[s];if((!c||c==="auto")&&document.defaultView){var h=document.defaultView.getComputedStyle(o,null);c=h?h[s]:null}return c==="auto"?null:c}function Re(o,s,c){var h=document.createElement(o);return h.className=s||"",c&&c.appendChild(h),h}function Ke(o){var s=o.parentNode;s&&s.removeChild(o)}function Rs(o){for(;o.firstChild;)o.removeChild(o.firstChild)}function Jo(o){var s=o.parentNode;s&&s.lastChild!==o&&s.appendChild(o)}function Yo(o){var s=o.parentNode;s&&s.firstChild!==o&&s.insertBefore(o,s.firstChild)}function Nc(o,s){if(o.classList!==void 0)return o.classList.contains(s);var c=zs(o);return c.length>0&&new RegExp("(^|\\s)"+s+"(\\s|$)").test(c)}function we(o,s){if(o.classList!==void 0)for(var c=x(s),h=0,v=c.length;h<v;h++)o.classList.add(c[h]);else if(!Nc(o,s)){var k=zs(o);Ic(o,(k?k+" ":"")+s)}}function rt(o,s){o.classList!==void 0?o.classList.remove(s):Ic(o,g((" "+zs(o)+" ").replace(" "+s+" "," ")))}function Ic(o,s){o.className.baseVal===void 0?o.className=s:o.className.baseVal=s}function zs(o){return o.correspondingElement&&(o=o.correspondingElement),o.className.baseVal===void 0?o.className:o.className.baseVal}function on(o,s){"opacity"in o.style?o.style.opacity=s:"filter"in o.style&&Kx(o,s)}function Kx(o,s){var c=!1,h="DXImageTransform.Microsoft.Alpha";try{c=o.filters.item(h)}catch{if(s===1)return}s=Math.round(s*100),c?(c.Enabled=s!==100,c.Opacity=s):o.style.filter+=" progid:"+h+"(opacity="+s+")"}function As(o){for(var s=document.documentElement.style,c=0;c<o.length;c++)if(o[c]in s)return o[c];return!1}function mo(o,s,c){var h=s||new I(0,0);o.style[Bc]=(de.ie3d?"translate("+h.x+"px,"+h.y+"px)":"translate3d("+h.x+"px,"+h.y+"px,0)")+(c?" scale("+c+")":"")}function at(o,s){o._leaflet_pos=s,de.any3d?mo(o,s):(o.style.left=s.x+"px",o.style.top=s.y+"px")}function _o(o){return o._leaflet_pos||new I(0,0)}var na,ra,Mc;if("onselectstart"in document)na=function(){be(window,"selectstart",yt)},ra=function(){Ue(window,"selectstart",yt)};else{var oa=As(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);na=function(){if(oa){var o=document.documentElement.style;Mc=o[oa],o[oa]="none"}},ra=function(){oa&&(document.documentElement.style[oa]=Mc,Mc=void 0)}}function Dc(){be(window,"dragstart",yt)}function Fc(){Ue(window,"dragstart",yt)}var Bs,jc;function Uc(o){for(;o.tabIndex===-1;)o=o.parentNode;o.style&&(Ns(),Bs=o,jc=o.style.outline,o.style.outline="none",be(window,"keydown",Ns))}function Ns(){Bs&&(Bs.style.outline=jc,Bs=void 0,jc=void 0,Ue(window,"keydown",Ns))}function xm(o){do o=o.parentNode;while((!o.offsetWidth||!o.offsetHeight)&&o!==document.body);return o}function $c(o){var s=o.getBoundingClientRect();return{x:s.width/o.offsetWidth||1,y:s.height/o.offsetHeight||1,boundingClientRect:s}}var Qx={__proto__:null,TRANSFORM:Bc,TRANSITION:ea,TRANSITION_END:ym,get:bm,getStyle:ta,create:Re,remove:Ke,empty:Rs,toFront:Jo,toBack:Yo,hasClass:Nc,addClass:we,removeClass:rt,setClass:Ic,getClass:zs,setOpacity:on,testProp:As,setTransform:mo,setPosition:at,getPosition:_o,get disableTextSelection(){return na},get enableTextSelection(){return ra},disableImageDrag:Dc,enableImageDrag:Fc,preventOutline:Uc,restoreOutline:Ns,getSizedParentNode:xm,getScale:$c};function be(o,s,c,h){if(s&&typeof s=="object")for(var v in s)Hc(o,v,s[v],c);else{s=x(s);for(var k=0,E=s.length;k<E;k++)Hc(o,s[k],c,h)}return this}var Mn="_leaflet_events";function Ue(o,s,c,h){if(arguments.length===1)wm(o),delete o[Mn];else if(s&&typeof s=="object")for(var v in s)Wc(o,v,s[v],c);else if(s=x(s),arguments.length===2)wm(o,function(A){return P(s,A)!==-1});else for(var k=0,E=s.length;k<E;k++)Wc(o,s[k],c,h);return this}function wm(o,s){for(var c in o[Mn]){var h=c.split(/\d/)[0];(!s||s(h))&&Wc(o,h,null,null,c)}}var Zc={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Hc(o,s,c,h){var v=s+d(c)+(h?"_"+d(h):"");if(o[Mn]&&o[Mn][v])return this;var k=function(A){return c.call(h||o,A||window.event)},E=k;!de.touchNative&&de.pointer&&s.indexOf("touch")===0?k=Dx(o,s,k):de.touch&&s==="dblclick"?k=Vx(o,k):"addEventListener"in o?s==="touchstart"||s==="touchmove"||s==="wheel"||s==="mousewheel"?o.addEventListener(Zc[s]||s,k,de.passiveEvents?{passive:!1}:!1):s==="mouseenter"||s==="mouseleave"?(k=function(A){A=A||window.event,qc(o,A)&&E(A)},o.addEventListener(Zc[s],k,!1)):o.addEventListener(s,E,!1):o.attachEvent("on"+s,k),o[Mn]=o[Mn]||{},o[Mn][v]=k}function Wc(o,s,c,h,v){v=v||s+d(c)+(h?"_"+d(h):"");var k=o[Mn]&&o[Mn][v];if(!k)return this;!de.touchNative&&de.pointer&&s.indexOf("touch")===0?Fx(o,s,k):de.touch&&s==="dblclick"?qx(o,k):"removeEventListener"in o?o.removeEventListener(Zc[s]||s,k,!1):o.detachEvent("on"+s,k),o[Mn][v]=null}function vo(o){return o.stopPropagation?o.stopPropagation():o.originalEvent?o.originalEvent._stopped=!0:o.cancelBubble=!0,this}function Vc(o){return Hc(o,"wheel",vo),this}function ia(o){return be(o,"mousedown touchstart dblclick contextmenu",vo),o._leaflet_disable_click=!0,this}function yt(o){return o.preventDefault?o.preventDefault():o.returnValue=!1,this}function go(o){return yt(o),vo(o),this}function km(o){if(o.composedPath)return o.composedPath();for(var s=[],c=o.target;c;)s.push(c),c=c.parentNode;return s}function Sm(o,s){if(!s)return new I(o.clientX,o.clientY);var c=$c(s),h=c.boundingClientRect;return new I((o.clientX-h.left)/c.x-s.clientLeft,(o.clientY-h.top)/c.y-s.clientTop)}var Gx=de.linux&&de.chrome?window.devicePixelRatio:de.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Pm(o){return de.edge?o.wheelDeltaY/2:o.deltaY&&o.deltaMode===0?-o.deltaY/Gx:o.deltaY&&o.deltaMode===1?-o.deltaY*20:o.deltaY&&o.deltaMode===2?-o.deltaY*60:o.deltaX||o.deltaZ?0:o.wheelDelta?(o.wheelDeltaY||o.wheelDelta)/2:o.detail&&Math.abs(o.detail)<32765?-o.detail*20:o.detail?o.detail/-32765*60:0}function qc(o,s){var c=s.relatedTarget;if(!c)return!0;try{for(;c&&c!==o;)c=c.parentNode}catch{return!1}return c!==o}var Xx={__proto__:null,on:be,off:Ue,stopPropagation:vo,disableScrollPropagation:Vc,disableClickPropagation:ia,preventDefault:yt,stop:go,getPropagationPath:km,getMousePosition:Sm,getWheelDelta:Pm,isExternalTarget:qc,addListener:be,removeListener:Ue},Cm=te.extend({run:function(o,s,c,h){this.stop(),this._el=o,this._inProgress=!0,this._duration=c||.25,this._easeOutPower=1/Math.max(h||.5,.2),this._startPos=_o(o),this._offset=s.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=z(this._animate,this),this._step()},_step:function(o){var s=+new Date-this._startTime,c=this._duration*1e3;s<c?this._runFrame(this._easeOut(s/c),o):(this._runFrame(1),this._complete())},_runFrame:function(o,s){var c=this._startPos.add(this._offset.multiplyBy(o));s&&c._round(),at(this._el,c),this.fire("step")},_complete:function(){ee(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(o){return 1-Math.pow(1-o,this._easeOutPower)}}),Ee=te.extend({options:{crs:nt,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(o,s){s=w(this,s),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(o),this._initLayout(),this._onResize=l(this._onResize,this),this._initEvents(),s.maxBounds&&this.setMaxBounds(s.maxBounds),s.zoom!==void 0&&(this._zoom=this._limitZoom(s.zoom)),s.center&&s.zoom!==void 0&&this.setView(ne(s.center),s.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=ea&&de.any3d&&!de.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),be(this._proxy,ym,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(o,s,c){if(s=s===void 0?this._zoom:this._limitZoom(s),o=this._limitCenter(ne(o),s,this.options.maxBounds),c=c||{},this._stop(),this._loaded&&!c.reset&&c!==!0){c.animate!==void 0&&(c.zoom=i({animate:c.animate},c.zoom),c.pan=i({animate:c.animate,duration:c.duration},c.pan));var h=this._zoom!==s?this._tryAnimatedZoom&&this._tryAnimatedZoom(o,s,c.zoom):this._tryAnimatedPan(o,c.pan);if(h)return clearTimeout(this._sizeTimer),this}return this._resetView(o,s,c.pan&&c.pan.noMoveStart),this},setZoom:function(o,s){return this._loaded?this.setView(this.getCenter(),o,{zoom:s}):(this._zoom=o,this)},zoomIn:function(o,s){return o=o||(de.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+o,s)},zoomOut:function(o,s){return o=o||(de.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-o,s)},setZoomAround:function(o,s,c){var h=this.getZoomScale(s),v=this.getSize().divideBy(2),k=o instanceof I?o:this.latLngToContainerPoint(o),E=k.subtract(v).multiplyBy(1-1/h),A=this.containerPointToLatLng(v.add(E));return this.setView(A,s,{zoom:c})},_getBoundsCenterZoom:function(o,s){s=s||{},o=o.getBounds?o.getBounds():Q(o);var c=q(s.paddingTopLeft||s.padding||[0,0]),h=q(s.paddingBottomRight||s.padding||[0,0]),v=this.getBoundsZoom(o,!1,c.add(h));if(v=typeof s.maxZoom=="number"?Math.min(s.maxZoom,v):v,v===1/0)return{center:o.getCenter(),zoom:v};var k=h.subtract(c).divideBy(2),E=this.project(o.getSouthWest(),v),A=this.project(o.getNorthEast(),v),D=this.unproject(E.add(A).divideBy(2).add(k),v);return{center:D,zoom:v}},fitBounds:function(o,s){if(o=Q(o),!o.isValid())throw new Error("Bounds are not valid.");var c=this._getBoundsCenterZoom(o,s);return this.setView(c.center,c.zoom,s)},fitWorld:function(o){return this.fitBounds([[-90,-180],[90,180]],o)},panTo:function(o,s){return this.setView(o,this._zoom,{pan:s})},panBy:function(o,s){if(o=q(o).round(),s=s||{},!o.x&&!o.y)return this.fire("moveend");if(s.animate!==!0&&!this.getSize().contains(o))return this._resetView(this.unproject(this.project(this.getCenter()).add(o)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Cm,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),s.noMoveStart||this.fire("movestart"),s.animate!==!1){we(this._mapPane,"leaflet-pan-anim");var c=this._getMapPanePos().subtract(o).round();this._panAnim.run(this._mapPane,c,s.duration||.25,s.easeLinearity)}else this._rawPanBy(o),this.fire("move").fire("moveend");return this},flyTo:function(o,s,c){if(c=c||{},c.animate===!1||!de.any3d)return this.setView(o,s,c);this._stop();var h=this.project(this.getCenter()),v=this.project(o),k=this.getSize(),E=this._zoom;o=ne(o),s=s===void 0?E:s;var A=Math.max(k.x,k.y),D=A*this.getZoomScale(E,s),X=v.distanceTo(h)||1,ae=1.42,ge=ae*ae;function Se(st){var Ks=st?-1:1,Fw=st?D:A,jw=D*D-A*A+Ks*ge*ge*X*X,Uw=2*Fw*ge*X,od=jw/Uw,a_=Math.sqrt(od*od+1)-od,$w=a_<1e-9?-18:Math.log(a_);return $w}function sn(st){return(Math.exp(st)-Math.exp(-st))/2}function bo(st){return(Math.exp(st)+Math.exp(-st))/2}function qs(st){return sn(st)/bo(st)}var Er=Se(0);function rd(st){return A*(bo(Er)/bo(Er+ae*st))}function Nw(st){return A*(bo(Er)*qs(Er+ae*st)-sn(Er))/ge}function Iw(st){return 1-Math.pow(1-st,1.5)}var Mw=Date.now(),o_=(Se(1)-Er)/ae,Dw=c.duration?1e3*c.duration:1e3*o_*.8;function i_(){var st=(Date.now()-Mw)/Dw,Ks=Iw(st)*o_;st<=1?(this._flyToFrame=z(i_,this),this._move(this.unproject(h.add(v.subtract(h).multiplyBy(Nw(Ks)/X)),E),this.getScaleZoom(A/rd(Ks),E),{flyTo:!0})):this._move(o,s)._moveEnd(!0)}return this._moveStart(!0,c.noMoveStart),i_.call(this),this},flyToBounds:function(o,s){var c=this._getBoundsCenterZoom(o,s);return this.flyTo(c.center,c.zoom,s)},setMaxBounds:function(o){return o=Q(o),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),o.isValid()?(this.options.maxBounds=o,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(o){var s=this.options.minZoom;return this.options.minZoom=o,this._loaded&&s!==o&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(o):this},setMaxZoom:function(o){var s=this.options.maxZoom;return this.options.maxZoom=o,this._loaded&&s!==o&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(o):this},panInsideBounds:function(o,s){this._enforcingBounds=!0;var c=this.getCenter(),h=this._limitCenter(c,this._zoom,Q(o));return c.equals(h)||this.panTo(h,s),this._enforcingBounds=!1,this},panInside:function(o,s){s=s||{};var c=q(s.paddingTopLeft||s.padding||[0,0]),h=q(s.paddingBottomRight||s.padding||[0,0]),v=this.project(this.getCenter()),k=this.project(o),E=this.getPixelBounds(),A=N([E.min.add(c),E.max.subtract(h)]),D=A.getSize();if(!A.contains(k)){this._enforcingBounds=!0;var X=k.subtract(A.getCenter()),ae=A.extend(k).getSize().subtract(D);v.x+=X.x<0?-ae.x:ae.x,v.y+=X.y<0?-ae.y:ae.y,this.panTo(this.unproject(v),s),this._enforcingBounds=!1}return this},invalidateSize:function(o){if(!this._loaded)return this;o=i({animate:!1,pan:!0},o===!0?{animate:!0}:o);var s=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var c=this.getSize(),h=s.divideBy(2).round(),v=c.divideBy(2).round(),k=h.subtract(v);return!k.x&&!k.y?this:(o.animate&&o.pan?this.panBy(k):(o.pan&&this._rawPanBy(k),this.fire("move"),o.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(l(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:s,newSize:c}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(o){if(o=this._locateOptions=i({timeout:1e4,watch:!1},o),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var s=l(this._handleGeolocationResponse,this),c=l(this._handleGeolocationError,this);return o.watch?this._locationWatchId=navigator.geolocation.watchPosition(s,c,o):navigator.geolocation.getCurrentPosition(s,c,o),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(o){if(this._container._leaflet_id){var s=o.code,c=o.message||(s===1?"permission denied":s===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:s,message:"Geolocation error: "+c+"."})}},_handleGeolocationResponse:function(o){if(this._container._leaflet_id){var s=o.coords.latitude,c=o.coords.longitude,h=new Y(s,c),v=h.toBounds(o.coords.accuracy*2),k=this._locateOptions;if(k.setView){var E=this.getBoundsZoom(v);this.setView(h,k.maxZoom?Math.min(E,k.maxZoom):E)}var A={latlng:h,bounds:v,timestamp:o.timestamp};for(var D in o.coords)typeof o.coords[D]=="number"&&(A[D]=o.coords[D]);this.fire("locationfound",A)}},addHandler:function(o,s){if(!s)return this;var c=this[o]=new s(this);return this._handlers.push(c),this.options[o]&&c.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Ke(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(ee(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var o;for(o in this._layers)this._layers[o].remove();for(o in this._panes)Ke(this._panes[o]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(o,s){var c="leaflet-pane"+(o?" leaflet-"+o.replace("Pane","")+"-pane":""),h=Re("div",c,s||this._mapPane);return o&&(this._panes[o]=h),h},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var o=this.getPixelBounds(),s=this.unproject(o.getBottomLeft()),c=this.unproject(o.getTopRight());return new B(s,c)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(o,s,c){o=Q(o),c=q(c||[0,0]);var h=this.getZoom()||0,v=this.getMinZoom(),k=this.getMaxZoom(),E=o.getNorthWest(),A=o.getSouthEast(),D=this.getSize().subtract(c),X=N(this.project(A,h),this.project(E,h)).getSize(),ae=de.any3d?this.options.zoomSnap:1,ge=D.x/X.x,Se=D.y/X.y,sn=s?Math.max(ge,Se):Math.min(ge,Se);return h=this.getScaleZoom(sn,h),ae&&(h=Math.round(h/(ae/100))*(ae/100),h=s?Math.ceil(h/ae)*ae:Math.floor(h/ae)*ae),Math.max(v,Math.min(k,h))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new I(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(o,s){var c=this._getTopLeftPoint(o,s);return new O(c,c.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(o){return this.options.crs.getProjectedBounds(o===void 0?this.getZoom():o)},getPane:function(o){return typeof o=="string"?this._panes[o]:o},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(o,s){var c=this.options.crs;return s=s===void 0?this._zoom:s,c.scale(o)/c.scale(s)},getScaleZoom:function(o,s){var c=this.options.crs;s=s===void 0?this._zoom:s;var h=c.zoom(o*c.scale(s));return isNaN(h)?1/0:h},project:function(o,s){return s=s===void 0?this._zoom:s,this.options.crs.latLngToPoint(ne(o),s)},unproject:function(o,s){return s=s===void 0?this._zoom:s,this.options.crs.pointToLatLng(q(o),s)},layerPointToLatLng:function(o){var s=q(o).add(this.getPixelOrigin());return this.unproject(s)},latLngToLayerPoint:function(o){var s=this.project(ne(o))._round();return s._subtract(this.getPixelOrigin())},wrapLatLng:function(o){return this.options.crs.wrapLatLng(ne(o))},wrapLatLngBounds:function(o){return this.options.crs.wrapLatLngBounds(Q(o))},distance:function(o,s){return this.options.crs.distance(ne(o),ne(s))},containerPointToLayerPoint:function(o){return q(o).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(o){return q(o).add(this._getMapPanePos())},containerPointToLatLng:function(o){var s=this.containerPointToLayerPoint(q(o));return this.layerPointToLatLng(s)},latLngToContainerPoint:function(o){return this.layerPointToContainerPoint(this.latLngToLayerPoint(ne(o)))},mouseEventToContainerPoint:function(o){return Sm(o,this._container)},mouseEventToLayerPoint:function(o){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(o))},mouseEventToLatLng:function(o){return this.layerPointToLatLng(this.mouseEventToLayerPoint(o))},_initContainer:function(o){var s=this._container=bm(o);if(s){if(s._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");be(s,"scroll",this._onScroll,this),this._containerId=d(s)},_initLayout:function(){var o=this._container;this._fadeAnimated=this.options.fadeAnimation&&de.any3d,we(o,"leaflet-container"+(de.touch?" leaflet-touch":"")+(de.retina?" leaflet-retina":"")+(de.ielt9?" leaflet-oldie":"")+(de.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var s=ta(o,"position");s!=="absolute"&&s!=="relative"&&s!=="fixed"&&s!=="sticky"&&(o.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var o=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),at(this._mapPane,new I(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(we(o.markerPane,"leaflet-zoom-hide"),we(o.shadowPane,"leaflet-zoom-hide"))},_resetView:function(o,s,c){at(this._mapPane,new I(0,0));var h=!this._loaded;this._loaded=!0,s=this._limitZoom(s),this.fire("viewprereset");var v=this._zoom!==s;this._moveStart(v,c)._move(o,s)._moveEnd(v),this.fire("viewreset"),h&&this.fire("load")},_moveStart:function(o,s){return o&&this.fire("zoomstart"),s||this.fire("movestart"),this},_move:function(o,s,c,h){s===void 0&&(s=this._zoom);var v=this._zoom!==s;return this._zoom=s,this._lastCenter=o,this._pixelOrigin=this._getNewPixelOrigin(o),h?c&&c.pinch&&this.fire("zoom",c):((v||c&&c.pinch)&&this.fire("zoom",c),this.fire("move",c)),this},_moveEnd:function(o){return o&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return ee(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(o){at(this._mapPane,this._getMapPanePos().subtract(o))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(o){this._targets={},this._targets[d(this._container)]=this;var s=o?Ue:be;s(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&s(window,"resize",this._onResize,this),de.any3d&&this.options.transform3DLimit&&(o?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){ee(this._resizeRequest),this._resizeRequest=z(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var o=this._getMapPanePos();Math.max(Math.abs(o.x),Math.abs(o.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(o,s){for(var c=[],h,v=s==="mouseout"||s==="mouseover",k=o.target||o.srcElement,E=!1;k;){if(h=this._targets[d(k)],h&&(s==="click"||s==="preclick")&&this._draggableMoved(h)){E=!0;break}if(h&&h.listens(s,!0)&&(v&&!qc(k,o)||(c.push(h),v))||k===this._container)break;k=k.parentNode}return!c.length&&!E&&!v&&this.listens(s,!0)&&(c=[this]),c},_isClickDisabled:function(o){for(;o&&o!==this._container;){if(o._leaflet_disable_click)return!0;o=o.parentNode}},_handleDOMEvent:function(o){var s=o.target||o.srcElement;if(!(!this._loaded||s._leaflet_disable_events||o.type==="click"&&this._isClickDisabled(s))){var c=o.type;c==="mousedown"&&Uc(s),this._fireDOMEvent(o,c)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(o,s,c){if(o.type==="click"){var h=i({},o);h.type="preclick",this._fireDOMEvent(h,h.type,c)}var v=this._findEventTargets(o,s);if(c){for(var k=[],E=0;E<c.length;E++)c[E].listens(s,!0)&&k.push(c[E]);v=k.concat(v)}if(v.length){s==="contextmenu"&&yt(o);var A=v[0],D={originalEvent:o};if(o.type!=="keypress"&&o.type!=="keydown"&&o.type!=="keyup"){var X=A.getLatLng&&(!A._radius||A._radius<=10);D.containerPoint=X?this.latLngToContainerPoint(A.getLatLng()):this.mouseEventToContainerPoint(o),D.layerPoint=this.containerPointToLayerPoint(D.containerPoint),D.latlng=X?A.getLatLng():this.layerPointToLatLng(D.layerPoint)}for(E=0;E<v.length;E++)if(v[E].fire(s,D,!0),D.originalEvent._stopped||v[E].options.bubblingMouseEvents===!1&&P(this._mouseEvents,s)!==-1)return}},_draggableMoved:function(o){return o=o.dragging&&o.dragging.enabled()?o:this,o.dragging&&o.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var o=0,s=this._handlers.length;o<s;o++)this._handlers[o].disable()},whenReady:function(o,s){return this._loaded?o.call(s||this,{target:this}):this.on("load",o,s),this},_getMapPanePos:function(){return _o(this._mapPane)||new I(0,0)},_moved:function(){var o=this._getMapPanePos();return o&&!o.equals([0,0])},_getTopLeftPoint:function(o,s){var c=o&&s!==void 0?this._getNewPixelOrigin(o,s):this.getPixelOrigin();return c.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(o,s){var c=this.getSize()._divideBy(2);return this.project(o,s)._subtract(c)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(o,s,c){var h=this._getNewPixelOrigin(c,s);return this.project(o,s)._subtract(h)},_latLngBoundsToNewLayerBounds:function(o,s,c){var h=this._getNewPixelOrigin(c,s);return N([this.project(o.getSouthWest(),s)._subtract(h),this.project(o.getNorthWest(),s)._subtract(h),this.project(o.getSouthEast(),s)._subtract(h),this.project(o.getNorthEast(),s)._subtract(h)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(o){return this.latLngToLayerPoint(o).subtract(this._getCenterLayerPoint())},_limitCenter:function(o,s,c){if(!c)return o;var h=this.project(o,s),v=this.getSize().divideBy(2),k=new O(h.subtract(v),h.add(v)),E=this._getBoundsOffset(k,c,s);return Math.abs(E.x)<=1&&Math.abs(E.y)<=1?o:this.unproject(h.add(E),s)},_limitOffset:function(o,s){if(!s)return o;var c=this.getPixelBounds(),h=new O(c.min.add(o),c.max.add(o));return o.add(this._getBoundsOffset(h,s))},_getBoundsOffset:function(o,s,c){var h=N(this.project(s.getNorthEast(),c),this.project(s.getSouthWest(),c)),v=h.min.subtract(o.min),k=h.max.subtract(o.max),E=this._rebound(v.x,-k.x),A=this._rebound(v.y,-k.y);return new I(E,A)},_rebound:function(o,s){return o+s>0?Math.round(o-s)/2:Math.max(0,Math.ceil(o))-Math.max(0,Math.floor(s))},_limitZoom:function(o){var s=this.getMinZoom(),c=this.getMaxZoom(),h=de.any3d?this.options.zoomSnap:1;return h&&(o=Math.round(o/h)*h),Math.max(s,Math.min(c,o))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){rt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(o,s){var c=this._getCenterOffset(o)._trunc();return(s&&s.animate)!==!0&&!this.getSize().contains(c)?!1:(this.panBy(c,s),!0)},_createAnimProxy:function(){var o=this._proxy=Re("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(o),this.on("zoomanim",function(s){var c=Bc,h=this._proxy.style[c];mo(this._proxy,this.project(s.center,s.zoom),this.getZoomScale(s.zoom,1)),h===this._proxy.style[c]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Ke(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var o=this.getCenter(),s=this.getZoom();mo(this._proxy,this.project(o,s),this.getZoomScale(s,1))},_catchTransitionEnd:function(o){this._animatingZoom&&o.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(o,s,c){if(this._animatingZoom)return!0;if(c=c||{},!this._zoomAnimated||c.animate===!1||this._nothingToAnimate()||Math.abs(s-this._zoom)>this.options.zoomAnimationThreshold)return!1;var h=this.getZoomScale(s),v=this._getCenterOffset(o)._divideBy(1-1/h);return c.animate!==!0&&!this.getSize().contains(v)?!1:(z(function(){this._moveStart(!0,!1)._animateZoom(o,s,!0)},this),!0)},_animateZoom:function(o,s,c,h){this._mapPane&&(c&&(this._animatingZoom=!0,this._animateToCenter=o,this._animateToZoom=s,we(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:o,zoom:s,noUpdate:h}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(l(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&rt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Jx(o,s){return new Ee(o,s)}var vn=re.extend({options:{position:"topright"},initialize:function(o){w(this,o)},getPosition:function(){return this.options.position},setPosition:function(o){var s=this._map;return s&&s.removeControl(this),this.options.position=o,s&&s.addControl(this),this},getContainer:function(){return this._container},addTo:function(o){this.remove(),this._map=o;var s=this._container=this.onAdd(o),c=this.getPosition(),h=o._controlCorners[c];return we(s,"leaflet-control"),c.indexOf("bottom")!==-1?h.insertBefore(s,h.firstChild):h.appendChild(s),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Ke(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(o){this._map&&o&&o.screenX>0&&o.screenY>0&&this._map.getContainer().focus()}}),aa=function(o){return new vn(o)};Ee.include({addControl:function(o){return o.addTo(this),this},removeControl:function(o){return o.remove(),this},_initControlPos:function(){var o=this._controlCorners={},s="leaflet-",c=this._controlContainer=Re("div",s+"control-container",this._container);function h(v,k){var E=s+v+" "+s+k;o[v+k]=Re("div",E,c)}h("top","left"),h("top","right"),h("bottom","left"),h("bottom","right")},_clearControlPos:function(){for(var o in this._controlCorners)Ke(this._controlCorners[o]);Ke(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Em=vn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(o,s,c,h){return c<h?-1:h<c?1:0}},initialize:function(o,s,c){w(this,c),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1;for(var h in o)this._addLayer(o[h],h);for(h in s)this._addLayer(s[h],h,!0)},onAdd:function(o){this._initLayout(),this._update(),this._map=o,o.on("zoomend",this._checkDisabledLayers,this);for(var s=0;s<this._layers.length;s++)this._layers[s].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(o){return vn.prototype.addTo.call(this,o),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(o,s){return this._addLayer(o,s),this._map?this._update():this},addOverlay:function(o,s){return this._addLayer(o,s,!0),this._map?this._update():this},removeLayer:function(o){o.off("add remove",this._onLayerChange,this);var s=this._getLayer(d(o));return s&&this._layers.splice(this._layers.indexOf(s),1),this._map?this._update():this},expand:function(){we(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var o=this._map.getSize().y-(this._container.offsetTop+50);return o<this._section.clientHeight?(we(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=o+"px"):rt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return rt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var o="leaflet-control-layers",s=this._container=Re("div",o),c=this.options.collapsed;s.setAttribute("aria-haspopup",!0),ia(s),Vc(s);var h=this._section=Re("section",o+"-list");c&&(this._map.on("click",this.collapse,this),be(s,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var v=this._layersLink=Re("a",o+"-toggle",s);v.href="#",v.title="Layers",v.setAttribute("role","button"),be(v,{keydown:function(k){k.keyCode===13&&this._expandSafely()},click:function(k){yt(k),this._expandSafely()}},this),c||this.expand(),this._baseLayersList=Re("div",o+"-base",h),this._separator=Re("div",o+"-separator",h),this._overlaysList=Re("div",o+"-overlays",h),s.appendChild(h)},_getLayer:function(o){for(var s=0;s<this._layers.length;s++)if(this._layers[s]&&d(this._layers[s].layer)===o)return this._layers[s]},_addLayer:function(o,s,c){this._map&&o.on("add remove",this._onLayerChange,this),this._layers.push({layer:o,name:s,overlay:c}),this.options.sortLayers&&this._layers.sort(l(function(h,v){return this.options.sortFunction(h.layer,v.layer,h.name,v.name)},this)),this.options.autoZIndex&&o.setZIndex&&(this._lastZIndex++,o.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Rs(this._baseLayersList),Rs(this._overlaysList),this._layerControlInputs=[];var o,s,c,h,v=0;for(c=0;c<this._layers.length;c++)h=this._layers[c],this._addItem(h),s=s||h.overlay,o=o||!h.overlay,v+=h.overlay?0:1;return this.options.hideSingleBase&&(o=o&&v>1,this._baseLayersList.style.display=o?"":"none"),this._separator.style.display=s&&o?"":"none",this},_onLayerChange:function(o){this._handlingClick||this._update();var s=this._getLayer(d(o.target)),c=s.overlay?o.type==="add"?"overlayadd":"overlayremove":o.type==="add"?"baselayerchange":null;c&&this._map.fire(c,s)},_createRadioElement:function(o,s){var c='<input type="radio" class="leaflet-control-layers-selector" name="'+o+'"'+(s?' checked="checked"':"")+"/>",h=document.createElement("div");return h.innerHTML=c,h.firstChild},_addItem:function(o){var s=document.createElement("label"),c=this._map.hasLayer(o.layer),h;o.overlay?(h=document.createElement("input"),h.type="checkbox",h.className="leaflet-control-layers-selector",h.defaultChecked=c):h=this._createRadioElement("leaflet-base-layers_"+d(this),c),this._layerControlInputs.push(h),h.layerId=d(o.layer),be(h,"click",this._onInputClick,this);var v=document.createElement("span");v.innerHTML=" "+o.name;var k=document.createElement("span");s.appendChild(k),k.appendChild(h),k.appendChild(v);var E=o.overlay?this._overlaysList:this._baseLayersList;return E.appendChild(s),this._checkDisabledLayers(),s},_onInputClick:function(){var o=this._layerControlInputs,s,c,h=[],v=[];this._handlingClick=!0;for(var k=o.length-1;k>=0;k--)s=o[k],c=this._getLayer(s.layerId).layer,s.checked?h.push(c):s.checked||v.push(c);for(k=0;k<v.length;k++)this._map.hasLayer(v[k])&&this._map.removeLayer(v[k]);for(k=0;k<h.length;k++)this._map.hasLayer(h[k])||this._map.addLayer(h[k]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var o=this._layerControlInputs,s,c,h=this._map.getZoom(),v=o.length-1;v>=0;v--)s=o[v],c=this._getLayer(s.layerId).layer,s.disabled=c.options.minZoom!==void 0&&h<c.options.minZoom||c.options.maxZoom!==void 0&&h>c.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var o=this._section;be(o,"click",yt),this.expand(),setTimeout(function(){Ue(o,"click",yt)})}}),Yx=function(o,s,c){return new Em(o,s,c)},Kc=vn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(o){var s="leaflet-control-zoom",c=Re("div",s+" leaflet-bar"),h=this.options;return this._zoomInButton=this._createButton(h.zoomInText,h.zoomInTitle,s+"-in",c,this._zoomIn),this._zoomOutButton=this._createButton(h.zoomOutText,h.zoomOutTitle,s+"-out",c,this._zoomOut),this._updateDisabled(),o.on("zoomend zoomlevelschange",this._updateDisabled,this),c},onRemove:function(o){o.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(o){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(o.shiftKey?3:1))},_zoomOut:function(o){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(o.shiftKey?3:1))},_createButton:function(o,s,c,h,v){var k=Re("a",c,h);return k.innerHTML=o,k.href="#",k.title=s,k.setAttribute("role","button"),k.setAttribute("aria-label",s),ia(k),be(k,"click",go),be(k,"click",v,this),be(k,"click",this._refocusOnMap,this),k},_updateDisabled:function(){var o=this._map,s="leaflet-disabled";rt(this._zoomInButton,s),rt(this._zoomOutButton,s),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||o._zoom===o.getMinZoom())&&(we(this._zoomOutButton,s),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||o._zoom===o.getMaxZoom())&&(we(this._zoomInButton,s),this._zoomInButton.setAttribute("aria-disabled","true"))}});Ee.mergeOptions({zoomControl:!0}),Ee.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Kc,this.addControl(this.zoomControl))});var ew=function(o){return new Kc(o)},Om=vn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(o){var s="leaflet-control-scale",c=Re("div",s),h=this.options;return this._addScales(h,s+"-line",c),o.on(h.updateWhenIdle?"moveend":"move",this._update,this),o.whenReady(this._update,this),c},onRemove:function(o){o.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(o,s,c){o.metric&&(this._mScale=Re("div",s,c)),o.imperial&&(this._iScale=Re("div",s,c))},_update:function(){var o=this._map,s=o.getSize().y/2,c=o.distance(o.containerPointToLatLng([0,s]),o.containerPointToLatLng([this.options.maxWidth,s]));this._updateScales(c)},_updateScales:function(o){this.options.metric&&o&&this._updateMetric(o),this.options.imperial&&o&&this._updateImperial(o)},_updateMetric:function(o){var s=this._getRoundNum(o),c=s<1e3?s+" m":s/1e3+" km";this._updateScale(this._mScale,c,s/o)},_updateImperial:function(o){var s=o*3.2808399,c,h,v;s>5280?(c=s/5280,h=this._getRoundNum(c),this._updateScale(this._iScale,h+" mi",h/c)):(v=this._getRoundNum(s),this._updateScale(this._iScale,v+" ft",v/s))},_updateScale:function(o,s,c){o.style.width=Math.round(this.options.maxWidth*c)+"px",o.innerHTML=s},_getRoundNum:function(o){var s=Math.pow(10,(Math.floor(o)+"").length-1),c=o/s;return c=c>=10?10:c>=5?5:c>=3?3:c>=2?2:1,s*c}}),tw=function(o){return new Om(o)},nw='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Qc=vn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(de.inlineSvg?nw+" ":"")+"Leaflet</a>"},initialize:function(o){w(this,o),this._attributions={}},onAdd:function(o){o.attributionControl=this,this._container=Re("div","leaflet-control-attribution"),ia(this._container);for(var s in o._layers)o._layers[s].getAttribution&&this.addAttribution(o._layers[s].getAttribution());return this._update(),o.on("layeradd",this._addAttribution,this),this._container},onRemove:function(o){o.off("layeradd",this._addAttribution,this)},_addAttribution:function(o){o.layer.getAttribution&&(this.addAttribution(o.layer.getAttribution()),o.layer.once("remove",function(){this.removeAttribution(o.layer.getAttribution())},this))},setPrefix:function(o){return this.options.prefix=o,this._update(),this},addAttribution:function(o){return o?(this._attributions[o]||(this._attributions[o]=0),this._attributions[o]++,this._update(),this):this},removeAttribution:function(o){return o?(this._attributions[o]&&(this._attributions[o]--,this._update()),this):this},_update:function(){if(this._map){var o=[];for(var s in this._attributions)this._attributions[s]&&o.push(s);var c=[];this.options.prefix&&c.push(this.options.prefix),o.length&&c.push(o.join(", ")),this._container.innerHTML=c.join(' <span aria-hidden="true">|</span> ')}}});Ee.mergeOptions({attributionControl:!0}),Ee.addInitHook(function(){this.options.attributionControl&&new Qc().addTo(this)});var rw=function(o){return new Qc(o)};vn.Layers=Em,vn.Zoom=Kc,vn.Scale=Om,vn.Attribution=Qc,aa.layers=Yx,aa.zoom=ew,aa.scale=tw,aa.attribution=rw;var Dn=re.extend({initialize:function(o){this._map=o},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Dn.addTo=function(o,s){return o.addHandler(s,this),this};var ow={Events:U},Tm=de.touch?"touchstart mousedown":"mousedown",Pr=te.extend({options:{clickTolerance:3},initialize:function(o,s,c,h){w(this,h),this._element=o,this._dragStartTarget=s||o,this._preventOutline=c},enable:function(){this._enabled||(be(this._dragStartTarget,Tm,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Pr._dragging===this&&this.finishDrag(!0),Ue(this._dragStartTarget,Tm,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(o){if(this._enabled&&(this._moved=!1,!Nc(this._element,"leaflet-zoom-anim"))){if(o.touches&&o.touches.length!==1){Pr._dragging===this&&this.finishDrag();return}if(!(Pr._dragging||o.shiftKey||o.which!==1&&o.button!==1&&!o.touches)&&(Pr._dragging=this,this._preventOutline&&Uc(this._element),Dc(),na(),!this._moving)){this.fire("down");var s=o.touches?o.touches[0]:o,c=xm(this._element);this._startPoint=new I(s.clientX,s.clientY),this._startPos=_o(this._element),this._parentScale=$c(c);var h=o.type==="mousedown";be(document,h?"mousemove":"touchmove",this._onMove,this),be(document,h?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(o){if(this._enabled){if(o.touches&&o.touches.length>1){this._moved=!0;return}var s=o.touches&&o.touches.length===1?o.touches[0]:o,c=new I(s.clientX,s.clientY)._subtract(this._startPoint);!c.x&&!c.y||Math.abs(c.x)+Math.abs(c.y)<this.options.clickTolerance||(c.x/=this._parentScale.x,c.y/=this._parentScale.y,yt(o),this._moved||(this.fire("dragstart"),this._moved=!0,we(document.body,"leaflet-dragging"),this._lastTarget=o.target||o.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),we(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(c),this._moving=!0,this._lastEvent=o,this._updatePosition())}},_updatePosition:function(){var o={originalEvent:this._lastEvent};this.fire("predrag",o),at(this._element,this._newPos),this.fire("drag",o)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(o){rt(document.body,"leaflet-dragging"),this._lastTarget&&(rt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Ue(document,"mousemove touchmove",this._onMove,this),Ue(document,"mouseup touchend touchcancel",this._onUp,this),Fc(),ra(),this._moved&&this._moving&&this.fire("dragend",{noInertia:o,distance:this._newPos.distanceTo(this._startPos)}),this._moving=!1,Pr._dragging=!1}});function Lm(o,s){if(!s||!o.length)return o.slice();var c=s*s;return o=sw(o,c),o=aw(o,c),o}function Rm(o,s,c){return Math.sqrt(sa(o,s,c,!0))}function iw(o,s,c){return sa(o,s,c)}function aw(o,s){var c=o.length,h=typeof Uint8Array!=void 0+""?Uint8Array:Array,v=new h(c);v[0]=v[c-1]=1,Gc(o,v,s,0,c-1);var k,E=[];for(k=0;k<c;k++)v[k]&&E.push(o[k]);return E}function Gc(o,s,c,h,v){var k=0,E,A,D;for(A=h+1;A<=v-1;A++)D=sa(o[A],o[h],o[v],!0),D>k&&(E=A,k=D);k>c&&(s[E]=1,Gc(o,s,c,h,E),Gc(o,s,c,E,v))}function sw(o,s){for(var c=[o[0]],h=1,v=0,k=o.length;h<k;h++)lw(o[h],o[v])>s&&(c.push(o[h]),v=h);return v<k-1&&c.push(o[k-1]),c}var zm;function Am(o,s,c,h,v){var k=h?zm:yo(o,c),E=yo(s,c),A,D,X;for(zm=E;;){if(!(k|E))return[o,s];if(k&E)return!1;A=k||E,D=Is(o,s,A,c,v),X=yo(D,c),A===k?(o=D,k=X):(s=D,E=X)}}function Is(o,s,c,h,v){var k=s.x-o.x,E=s.y-o.y,A=h.min,D=h.max,X,ae;return c&8?(X=o.x+k*(D.y-o.y)/E,ae=D.y):c&4?(X=o.x+k*(A.y-o.y)/E,ae=A.y):c&2?(X=D.x,ae=o.y+E*(D.x-o.x)/k):c&1&&(X=A.x,ae=o.y+E*(A.x-o.x)/k),new I(X,ae,v)}function yo(o,s){var c=0;return o.x<s.min.x?c|=1:o.x>s.max.x&&(c|=2),o.y<s.min.y?c|=4:o.y>s.max.y&&(c|=8),c}function lw(o,s){var c=s.x-o.x,h=s.y-o.y;return c*c+h*h}function sa(o,s,c,h){var v=s.x,k=s.y,E=c.x-v,A=c.y-k,D=E*E+A*A,X;return D>0&&(X=((o.x-v)*E+(o.y-k)*A)/D,X>1?(v=c.x,k=c.y):X>0&&(v+=E*X,k+=A*X)),E=o.x-v,A=o.y-k,h?E*E+A*A:new I(v,k)}function an(o){return!S(o[0])||typeof o[0][0]!="object"&&typeof o[0][0]<"u"}function Bm(o){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),an(o)}function Nm(o,s){var c,h,v,k,E,A,D,X;if(!o||o.length===0)throw new Error("latlngs not passed");an(o)||(console.warn("latlngs are not flat! Only the first ring will be used"),o=o[0]);var ae=[];for(var ge in o)ae.push(s.project(ne(o[ge])));var Se=ae.length;for(c=0,h=0;c<Se-1;c++)h+=ae[c].distanceTo(ae[c+1])/2;if(h===0)X=ae[0];else for(c=0,k=0;c<Se-1;c++)if(E=ae[c],A=ae[c+1],v=E.distanceTo(A),k+=v,k>h){D=(k-h)/v,X=[A.x-D*(A.x-E.x),A.y-D*(A.y-E.y)];break}return s.unproject(q(X))}var uw={__proto__:null,simplify:Lm,pointToSegmentDistance:Rm,closestPointOnSegment:iw,clipSegment:Am,_getEdgeIntersection:Is,_getBitCode:yo,_sqClosestPointOnSegment:sa,isFlat:an,_flat:Bm,polylineCenter:Nm};function Im(o,s,c){var h,v=[1,4,2,8],k,E,A,D,X,ae,ge,Se;for(k=0,ae=o.length;k<ae;k++)o[k]._code=yo(o[k],s);for(A=0;A<4;A++){for(ge=v[A],h=[],k=0,ae=o.length,E=ae-1;k<ae;E=k++)D=o[k],X=o[E],D._code&ge?X._code&ge||(Se=Is(X,D,ge,s,c),Se._code=yo(Se,s),h.push(Se)):(X._code&ge&&(Se=Is(X,D,ge,s,c),Se._code=yo(Se,s),h.push(Se)),h.push(D));o=h}return o}function Mm(o,s){var c,h,v,k,E,A,D,X,ae;if(!o||o.length===0)throw new Error("latlngs not passed");an(o)||(console.warn("latlngs are not flat! Only the first ring will be used"),o=o[0]);var ge=[];for(var Se in o)ge.push(s.project(ne(o[Se])));var sn=ge.length;for(A=D=X=0,c=0,h=sn-1;c<sn;h=c++)v=ge[c],k=ge[h],E=v.y*k.x-k.y*v.x,D+=(v.x+k.x)*E,X+=(v.y+k.y)*E,A+=E*3;return A===0?ae=ge[0]:ae=[D/A,X/A],s.unproject(q(ae))}var cw={__proto__:null,clipPolygon:Im,polygonCenter:Mm},Xc={project:function(o){return new I(o.lng,o.lat)},unproject:function(o){return new Y(o.y,o.x)},bounds:new O([-180,-90],[180,90])},Jc={R:6378137,R_MINOR:6356752314245179e-9,bounds:new O([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(o){var s=Math.PI/180,c=this.R,h=o.lat*s,v=this.R_MINOR/c,k=Math.sqrt(1-v*v),E=k*Math.sin(h),A=Math.tan(Math.PI/4-h/2)/Math.pow((1-E)/(1+E),k/2);return h=-c*Math.log(Math.max(A,1e-10)),new I(o.lng*s*c,h)},unproject:function(o){for(var s=180/Math.PI,c=this.R,h=this.R_MINOR/c,v=Math.sqrt(1-h*h),k=Math.exp(-o.y/c),E=Math.PI/2-2*Math.atan(k),A=0,D=.1,X;A<15&&Math.abs(D)>1e-7;A++)X=v*Math.sin(E),X=Math.pow((1-X)/(1+X),v/2),D=Math.PI/2-2*Math.atan(k*X)-E,E+=D;return new Y(E*s,o.x*s/c)}},dw={__proto__:null,LonLat:Xc,Mercator:Jc,SphericalMercator:qe},fw=i({},_e,{code:"EPSG:3395",projection:Jc,transformation:function(){var o=.5/(Math.PI*Jc.R);return Ne(o,.5,-o,.5)}()}),Dm=i({},_e,{code:"EPSG:4326",projection:Xc,transformation:Ne(1/180,1,-1/180,.5)}),hw=i({},ue,{projection:Xc,transformation:Ne(1,0,-1,0),scale:function(o){return Math.pow(2,o)},zoom:function(o){return Math.log(o)/Math.LN2},distance:function(o,s){var c=s.lng-o.lng,h=s.lat-o.lat;return Math.sqrt(c*c+h*h)},infinite:!0});ue.Earth=_e,ue.EPSG3395=fw,ue.EPSG3857=nt,ue.EPSG900913=Oe,ue.EPSG4326=Dm,ue.Simple=hw;var gn=te.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(o){return o.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(o){return o&&o.removeLayer(this),this},getPane:function(o){return this._map.getPane(o?this.options[o]||o:this.options.pane)},addInteractiveTarget:function(o){return this._map._targets[d(o)]=this,this},removeInteractiveTarget:function(o){return delete this._map._targets[d(o)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(o){var s=o.target;if(s.hasLayer(this)){if(this._map=s,this._zoomAnimated=s._zoomAnimated,this.getEvents){var c=this.getEvents();s.on(c,this),this.once("remove",function(){s.off(c,this)},this)}this.onAdd(s),this.fire("add"),s.fire("layeradd",{layer:this})}}});Ee.include({addLayer:function(o){if(!o._layerAdd)throw new Error("The provided object is not a Layer.");var s=d(o);return this._layers[s]?this:(this._layers[s]=o,o._mapToAdd=this,o.beforeAdd&&o.beforeAdd(this),this.whenReady(o._layerAdd,o),this)},removeLayer:function(o){var s=d(o);return this._layers[s]?(this._loaded&&o.onRemove(this),delete this._layers[s],this._loaded&&(this.fire("layerremove",{layer:o}),o.fire("remove")),o._map=o._mapToAdd=null,this):this},hasLayer:function(o){return d(o)in this._layers},eachLayer:function(o,s){for(var c in this._layers)o.call(s,this._layers[c]);return this},_addLayers:function(o){o=o?S(o)?o:[o]:[];for(var s=0,c=o.length;s<c;s++)this.addLayer(o[s])},_addZoomLimit:function(o){(!isNaN(o.options.maxZoom)||!isNaN(o.options.minZoom))&&(this._zoomBoundLayers[d(o)]=o,this._updateZoomLevels())},_removeZoomLimit:function(o){var s=d(o);this._zoomBoundLayers[s]&&(delete this._zoomBoundLayers[s],this._updateZoomLevels())},_updateZoomLevels:function(){var o=1/0,s=-1/0,c=this._getZoomSpan();for(var h in this._zoomBoundLayers){var v=this._zoomBoundLayers[h].options;o=v.minZoom===void 0?o:Math.min(o,v.minZoom),s=v.maxZoom===void 0?s:Math.max(s,v.maxZoom)}this._layersMaxZoom=s===-1/0?void 0:s,this._layersMinZoom=o===1/0?void 0:o,c!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var ei=gn.extend({initialize:function(o,s){w(this,s),this._layers={};var c,h;if(o)for(c=0,h=o.length;c<h;c++)this.addLayer(o[c])},addLayer:function(o){var s=this.getLayerId(o);return this._layers[s]=o,this._map&&this._map.addLayer(o),this},removeLayer:function(o){var s=o in this._layers?o:this.getLayerId(o);return this._map&&this._layers[s]&&this._map.removeLayer(this._layers[s]),delete this._layers[s],this},hasLayer:function(o){var s=typeof o=="number"?o:this.getLayerId(o);return s in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(o){var s=Array.prototype.slice.call(arguments,1),c,h;for(c in this._layers)h=this._layers[c],h[o]&&h[o].apply(h,s);return this},onAdd:function(o){this.eachLayer(o.addLayer,o)},onRemove:function(o){this.eachLayer(o.removeLayer,o)},eachLayer:function(o,s){for(var c in this._layers)o.call(s,this._layers[c]);return this},getLayer:function(o){return this._layers[o]},getLayers:function(){var o=[];return this.eachLayer(o.push,o),o},setZIndex:function(o){return this.invoke("setZIndex",o)},getLayerId:function(o){return d(o)}}),pw=function(o,s){return new ei(o,s)},tr=ei.extend({addLayer:function(o){return this.hasLayer(o)?this:(o.addEventParent(this),ei.prototype.addLayer.call(this,o),this.fire("layeradd",{layer:o}))},removeLayer:function(o){return this.hasLayer(o)?(o in this._layers&&(o=this._layers[o]),o.removeEventParent(this),ei.prototype.removeLayer.call(this,o),this.fire("layerremove",{layer:o})):this},setStyle:function(o){return this.invoke("setStyle",o)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var o=new B;for(var s in this._layers){var c=this._layers[s];o.extend(c.getBounds?c.getBounds():c.getLatLng())}return o}}),mw=function(o,s){return new tr(o,s)},ti=re.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(o){w(this,o)},createIcon:function(o){return this._createIcon("icon",o)},createShadow:function(o){return this._createIcon("shadow",o)},_createIcon:function(o,s){var c=this._getIconUrl(o);if(!c){if(o==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var h=this._createImg(c,s&&s.tagName==="IMG"?s:null);return this._setIconStyles(h,o),(this.options.crossOrigin||this.options.crossOrigin==="")&&(h.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),h},_setIconStyles:function(o,s){var c=this.options,h=c[s+"Size"];typeof h=="number"&&(h=[h,h]);var v=q(h),k=q(s==="shadow"&&c.shadowAnchor||c.iconAnchor||v&&v.divideBy(2,!0));o.className="leaflet-marker-"+s+" "+(c.className||""),k&&(o.style.marginLeft=-k.x+"px",o.style.marginTop=-k.y+"px"),v&&(o.style.width=v.x+"px",o.style.height=v.y+"px")},_createImg:function(o,s){return s=s||document.createElement("img"),s.src=o,s},_getIconUrl:function(o){return de.retina&&this.options[o+"RetinaUrl"]||this.options[o+"Url"]}});function _w(o){return new ti(o)}var la=ti.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(o){return typeof la.imagePath!="string"&&(la.imagePath=this._detectIconPath()),(this.options.imagePath||la.imagePath)+ti.prototype._getIconUrl.call(this,o)},_stripUrl:function(o){var s=function(c,h,v){var k=h.exec(c);return k&&k[v]};return o=s(o,/^url\((['"])?(.+)\1\)$/,2),o&&s(o,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var o=Re("div","leaflet-default-icon-path",document.body),s=ta(o,"background-image")||ta(o,"backgroundImage");if(document.body.removeChild(o),s=this._stripUrl(s),s)return s;var c=document.querySelector('link[href$="leaflet.css"]');return c?c.href.substring(0,c.href.length-11-1):""}}),Fm=Dn.extend({initialize:function(o){this._marker=o},addHooks:function(){var o=this._marker._icon;this._draggable||(this._draggable=new Pr(o,o,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),we(o,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&rt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(o){var s=this._marker,c=s._map,h=this._marker.options.autoPanSpeed,v=this._marker.options.autoPanPadding,k=_o(s._icon),E=c.getPixelBounds(),A=c.getPixelOrigin(),D=N(E.min._subtract(A).add(v),E.max._subtract(A).subtract(v));if(!D.contains(k)){var X=q((Math.max(D.max.x,k.x)-D.max.x)/(E.max.x-D.max.x)-(Math.min(D.min.x,k.x)-D.min.x)/(E.min.x-D.min.x),(Math.max(D.max.y,k.y)-D.max.y)/(E.max.y-D.max.y)-(Math.min(D.min.y,k.y)-D.min.y)/(E.min.y-D.min.y)).multiplyBy(h);c.panBy(X,{animate:!1}),this._draggable._newPos._add(X),this._draggable._startPos._add(X),at(s._icon,this._draggable._newPos),this._onDrag(o),this._panRequest=z(this._adjustPan.bind(this,o))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(o){this._marker.options.autoPan&&(ee(this._panRequest),this._panRequest=z(this._adjustPan.bind(this,o)))},_onDrag:function(o){var s=this._marker,c=s._shadow,h=_o(s._icon),v=s._map.layerPointToLatLng(h);c&&at(c,h),s._latlng=v,o.latlng=v,o.oldLatLng=this._oldLatLng,s.fire("move",o).fire("drag",o)},_onDragEnd:function(o){ee(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",o)}}),Ms=gn.extend({options:{icon:new la,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(o,s){w(this,s),this._latlng=ne(o)},onAdd:function(o){this._zoomAnimated=this._zoomAnimated&&o.options.markerZoomAnimation,this._zoomAnimated&&o.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(o){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&o.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(o){var s=this._latlng;return this._latlng=ne(o),this.update(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},setZIndexOffset:function(o){return this.options.zIndexOffset=o,this.update()},getIcon:function(){return this.options.icon},setIcon:function(o){return this.options.icon=o,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var o=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(o)}return this},_initIcon:function(){var o=this.options,s="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),c=o.icon.createIcon(this._icon),h=!1;c!==this._icon&&(this._icon&&this._removeIcon(),h=!0,o.title&&(c.title=o.title),c.tagName==="IMG"&&(c.alt=o.alt||"")),we(c,s),o.keyboard&&(c.tabIndex="0",c.setAttribute("role","button")),this._icon=c,o.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&be(c,"focus",this._panOnFocus,this);var v=o.icon.createShadow(this._shadow),k=!1;v!==this._shadow&&(this._removeShadow(),k=!0),v&&(we(v,s),v.alt=""),this._shadow=v,o.opacity<1&&this._updateOpacity(),h&&this.getPane().appendChild(this._icon),this._initInteraction(),v&&k&&this.getPane(o.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Ue(this._icon,"focus",this._panOnFocus,this),Ke(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Ke(this._shadow),this._shadow=null},_setPos:function(o){this._icon&&at(this._icon,o),this._shadow&&at(this._shadow,o),this._zIndex=o.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(o){this._icon&&(this._icon.style.zIndex=this._zIndex+o)},_animateZoom:function(o){var s=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center).round();this._setPos(s)},_initInteraction:function(){if(this.options.interactive&&(we(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Fm)){var o=this.options.draggable;this.dragging&&(o=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Fm(this),o&&this.dragging.enable()}},setOpacity:function(o){return this.options.opacity=o,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var o=this.options.opacity;this._icon&&on(this._icon,o),this._shadow&&on(this._shadow,o)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var o=this._map;if(o){var s=this.options.icon.options,c=s.iconSize?q(s.iconSize):q(0,0),h=s.iconAnchor?q(s.iconAnchor):q(0,0);o.panInside(this._latlng,{paddingTopLeft:h,paddingBottomRight:c.subtract(h)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function vw(o,s){return new Ms(o,s)}var Cr=gn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(o){this._renderer=o.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(o){return w(this,o),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&o&&Object.prototype.hasOwnProperty.call(o,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Ds=Cr.extend({options:{fill:!0,radius:10},initialize:function(o,s){w(this,s),this._latlng=ne(o),this._radius=this.options.radius},setLatLng:function(o){var s=this._latlng;return this._latlng=ne(o),this.redraw(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(o){return this.options.radius=this._radius=o,this.redraw()},getRadius:function(){return this._radius},setStyle:function(o){var s=o&&o.radius||this._radius;return Cr.prototype.setStyle.call(this,o),this.setRadius(s),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var o=this._radius,s=this._radiusY||o,c=this._clickTolerance(),h=[o+c,s+c];this._pxBounds=new O(this._point.subtract(h),this._point.add(h))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(o){return o.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function gw(o,s){return new Ds(o,s)}var Yc=Ds.extend({initialize:function(o,s,c){if(typeof s=="number"&&(s=i({},c,{radius:s})),w(this,s),this._latlng=ne(o),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(o){return this._mRadius=o,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var o=[this._radius,this._radiusY||this._radius];return new B(this._map.layerPointToLatLng(this._point.subtract(o)),this._map.layerPointToLatLng(this._point.add(o)))},setStyle:Cr.prototype.setStyle,_project:function(){var o=this._latlng.lng,s=this._latlng.lat,c=this._map,h=c.options.crs;if(h.distance===_e.distance){var v=Math.PI/180,k=this._mRadius/_e.R/v,E=c.project([s+k,o]),A=c.project([s-k,o]),D=E.add(A).divideBy(2),X=c.unproject(D).lat,ae=Math.acos((Math.cos(k*v)-Math.sin(s*v)*Math.sin(X*v))/(Math.cos(s*v)*Math.cos(X*v)))/v;(isNaN(ae)||ae===0)&&(ae=k/Math.cos(Math.PI/180*s)),this._point=D.subtract(c.getPixelOrigin()),this._radius=isNaN(ae)?0:D.x-c.project([X,o-ae]).x,this._radiusY=D.y-E.y}else{var ge=h.unproject(h.project(this._latlng).subtract([this._mRadius,0]));this._point=c.latLngToLayerPoint(this._latlng),this._radius=this._point.x-c.latLngToLayerPoint(ge).x}this._updateBounds()}});function yw(o,s,c){return new Yc(o,s,c)}var nr=Cr.extend({options:{smoothFactor:1,noClip:!1},initialize:function(o,s){w(this,s),this._setLatLngs(o)},getLatLngs:function(){return this._latlngs},setLatLngs:function(o){return this._setLatLngs(o),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(o){for(var s=1/0,c=null,h=sa,v,k,E=0,A=this._parts.length;E<A;E++)for(var D=this._parts[E],X=1,ae=D.length;X<ae;X++){v=D[X-1],k=D[X];var ge=h(o,v,k,!0);ge<s&&(s=ge,c=h(o,v,k))}return c&&(c.distance=Math.sqrt(s)),c},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Nm(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(o,s){return s=s||this._defaultShape(),o=ne(o),s.push(o),this._bounds.extend(o),this.redraw()},_setLatLngs:function(o){this._bounds=new B,this._latlngs=this._convertLatLngs(o)},_defaultShape:function(){return an(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(o){for(var s=[],c=an(o),h=0,v=o.length;h<v;h++)c?(s[h]=ne(o[h]),this._bounds.extend(s[h])):s[h]=this._convertLatLngs(o[h]);return s},_project:function(){var o=new O;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,o),this._bounds.isValid()&&o.isValid()&&(this._rawPxBounds=o,this._updateBounds())},_updateBounds:function(){var o=this._clickTolerance(),s=new I(o,o);this._rawPxBounds&&(this._pxBounds=new O([this._rawPxBounds.min.subtract(s),this._rawPxBounds.max.add(s)]))},_projectLatlngs:function(o,s,c){var h=o[0]instanceof Y,v=o.length,k,E;if(h){for(E=[],k=0;k<v;k++)E[k]=this._map.latLngToLayerPoint(o[k]),c.extend(E[k]);s.push(E)}else for(k=0;k<v;k++)this._projectLatlngs(o[k],s,c)},_clipPoints:function(){var o=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(o))){if(this.options.noClip){this._parts=this._rings;return}var s=this._parts,c,h,v,k,E,A,D;for(c=0,v=0,k=this._rings.length;c<k;c++)for(D=this._rings[c],h=0,E=D.length;h<E-1;h++)A=Am(D[h],D[h+1],o,h,!0),A&&(s[v]=s[v]||[],s[v].push(A[0]),(A[1]!==D[h+1]||h===E-2)&&(s[v].push(A[1]),v++))}},_simplifyPoints:function(){for(var o=this._parts,s=this.options.smoothFactor,c=0,h=o.length;c<h;c++)o[c]=Lm(o[c],s)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(o,s){var c,h,v,k,E,A,D=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(o))return!1;for(c=0,k=this._parts.length;c<k;c++)for(A=this._parts[c],h=0,E=A.length,v=E-1;h<E;v=h++)if(!(!s&&h===0)&&Rm(o,A[v],A[h])<=D)return!0;return!1}});function bw(o,s){return new nr(o,s)}nr._flat=Bm;var ni=nr.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Mm(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(o){var s=nr.prototype._convertLatLngs.call(this,o),c=s.length;return c>=2&&s[0]instanceof Y&&s[0].equals(s[c-1])&&s.pop(),s},_setLatLngs:function(o){nr.prototype._setLatLngs.call(this,o),an(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return an(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var o=this._renderer._bounds,s=this.options.weight,c=new I(s,s);if(o=new O(o.min.subtract(c),o.max.add(c)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(o))){if(this.options.noClip){this._parts=this._rings;return}for(var h=0,v=this._rings.length,k;h<v;h++)k=Im(this._rings[h],o,!0),k.length&&this._parts.push(k)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(o){var s=!1,c,h,v,k,E,A,D,X;if(!this._pxBounds||!this._pxBounds.contains(o))return!1;for(k=0,D=this._parts.length;k<D;k++)for(c=this._parts[k],E=0,X=c.length,A=X-1;E<X;A=E++)h=c[E],v=c[A],h.y>o.y!=v.y>o.y&&o.x<(v.x-h.x)*(o.y-h.y)/(v.y-h.y)+h.x&&(s=!s);return s||nr.prototype._containsPoint.call(this,o,!0)}});function xw(o,s){return new ni(o,s)}var rr=tr.extend({initialize:function(o,s){w(this,s),this._layers={},o&&this.addData(o)},addData:function(o){var s=S(o)?o:o.features,c,h,v;if(s){for(c=0,h=s.length;c<h;c++)v=s[c],(v.geometries||v.geometry||v.features||v.coordinates)&&this.addData(v);return this}var k=this.options;if(k.filter&&!k.filter(o))return this;var E=Fs(o,k);return E?(E.feature=$s(o),E.defaultOptions=E.options,this.resetStyle(E),k.onEachFeature&&k.onEachFeature(o,E),this.addLayer(E)):this},resetStyle:function(o){return o===void 0?this.eachLayer(this.resetStyle,this):(o.options=i({},o.defaultOptions),this._setLayerStyle(o,this.options.style),this)},setStyle:function(o){return this.eachLayer(function(s){this._setLayerStyle(s,o)},this)},_setLayerStyle:function(o,s){o.setStyle&&(typeof s=="function"&&(s=s(o.feature)),o.setStyle(s))}});function Fs(o,s){var c=o.type==="Feature"?o.geometry:o,h=c?c.coordinates:null,v=[],k=s&&s.pointToLayer,E=s&&s.coordsToLatLng||ed,A,D,X,ae;if(!h&&!c)return null;switch(c.type){case"Point":return A=E(h),jm(k,o,A,s);case"MultiPoint":for(X=0,ae=h.length;X<ae;X++)A=E(h[X]),v.push(jm(k,o,A,s));return new tr(v);case"LineString":case"MultiLineString":return D=js(h,c.type==="LineString"?0:1,E),new nr(D,s);case"Polygon":case"MultiPolygon":return D=js(h,c.type==="Polygon"?1:2,E),new ni(D,s);case"GeometryCollection":for(X=0,ae=c.geometries.length;X<ae;X++){var ge=Fs({geometry:c.geometries[X],type:"Feature",properties:o.properties},s);ge&&v.push(ge)}return new tr(v);case"FeatureCollection":for(X=0,ae=c.features.length;X<ae;X++){var Se=Fs(c.features[X],s);Se&&v.push(Se)}return new tr(v);default:throw new Error("Invalid GeoJSON object.")}}function jm(o,s,c,h){return o?o(s,c):new Ms(c,h&&h.markersInheritOptions&&h)}function ed(o){return new Y(o[1],o[0],o[2])}function js(o,s,c){for(var h=[],v=0,k=o.length,E;v<k;v++)E=s?js(o[v],s-1,c):(c||ed)(o[v]),h.push(E);return h}function td(o,s){return o=ne(o),o.alt!==void 0?[p(o.lng,s),p(o.lat,s),p(o.alt,s)]:[p(o.lng,s),p(o.lat,s)]}function Us(o,s,c,h){for(var v=[],k=0,E=o.length;k<E;k++)v.push(s?Us(o[k],an(o[k])?0:s-1,c,h):td(o[k],h));return!s&&c&&v.push(v[0].slice()),v}function ri(o,s){return o.feature?i({},o.feature,{geometry:s}):$s(s)}function $s(o){return o.type==="Feature"||o.type==="FeatureCollection"?o:{type:"Feature",properties:{},geometry:o}}var nd={toGeoJSON:function(o){return ri(this,{type:"Point",coordinates:td(this.getLatLng(),o)})}};Ms.include(nd),Yc.include(nd),Ds.include(nd),nr.include({toGeoJSON:function(o){var s=!an(this._latlngs),c=Us(this._latlngs,s?1:0,!1,o);return ri(this,{type:(s?"Multi":"")+"LineString",coordinates:c})}}),ni.include({toGeoJSON:function(o){var s=!an(this._latlngs),c=s&&!an(this._latlngs[0]),h=Us(this._latlngs,c?2:s?1:0,!0,o);return s||(h=[h]),ri(this,{type:(c?"Multi":"")+"Polygon",coordinates:h})}}),ei.include({toMultiPoint:function(o){var s=[];return this.eachLayer(function(c){s.push(c.toGeoJSON(o).geometry.coordinates)}),ri(this,{type:"MultiPoint",coordinates:s})},toGeoJSON:function(o){var s=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(s==="MultiPoint")return this.toMultiPoint(o);var c=s==="GeometryCollection",h=[];return this.eachLayer(function(v){if(v.toGeoJSON){var k=v.toGeoJSON(o);if(c)h.push(k.geometry);else{var E=$s(k);E.type==="FeatureCollection"?h.push.apply(h,E.features):h.push(E)}}}),c?ri(this,{geometries:h,type:"GeometryCollection"}):{type:"FeatureCollection",features:h}}});function Um(o,s){return new rr(o,s)}var ww=Um,Zs=gn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(o,s,c){this._url=o,this._bounds=Q(s),w(this,c)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(we(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Ke(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(o){return this.options.opacity=o,this._image&&this._updateOpacity(),this},setStyle:function(o){return o.opacity&&this.setOpacity(o.opacity),this},bringToFront:function(){return this._map&&Jo(this._image),this},bringToBack:function(){return this._map&&Yo(this._image),this},setUrl:function(o){return this._url=o,this._image&&(this._image.src=o),this},setBounds:function(o){return this._bounds=Q(o),this._map&&this._reset(),this},getEvents:function(){var o={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},setZIndex:function(o){return this.options.zIndex=o,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var o=this._url.tagName==="IMG",s=this._image=o?this._url:Re("img");if(we(s,"leaflet-image-layer"),this._zoomAnimated&&we(s,"leaflet-zoom-animated"),this.options.className&&we(s,this.options.className),s.onselectstart=_,s.onmousemove=_,s.onload=l(this.fire,this,"load"),s.onerror=l(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),o){this._url=s.src;return}s.src=this._url,s.alt=this.options.alt},_animateZoom:function(o){var s=this._map.getZoomScale(o.zoom),c=this._map._latLngBoundsToNewLayerBounds(this._bounds,o.zoom,o.center).min;mo(this._image,c,s)},_reset:function(){var o=this._image,s=new O(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),c=s.getSize();at(o,s.min),o.style.width=c.x+"px",o.style.height=c.y+"px"},_updateOpacity:function(){on(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var o=this.options.errorOverlayUrl;o&&this._url!==o&&(this._url=o,this._image.src=o)},getCenter:function(){return this._bounds.getCenter()}}),kw=function(o,s,c){return new Zs(o,s,c)},$m=Zs.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var o=this._url.tagName==="VIDEO",s=this._image=o?this._url:Re("video");if(we(s,"leaflet-image-layer"),this._zoomAnimated&&we(s,"leaflet-zoom-animated"),this.options.className&&we(s,this.options.className),s.onselectstart=_,s.onmousemove=_,s.onloadeddata=l(this.fire,this,"load"),o){for(var c=s.getElementsByTagName("source"),h=[],v=0;v<c.length;v++)h.push(c[v].src);this._url=c.length>0?h:[s.src];return}S(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(s.style,"objectFit")&&(s.style.objectFit="fill"),s.autoplay=!!this.options.autoplay,s.loop=!!this.options.loop,s.muted=!!this.options.muted,s.playsInline=!!this.options.playsInline;for(var k=0;k<this._url.length;k++){var E=Re("source");E.src=this._url[k],s.appendChild(E)}}});function Sw(o,s,c){return new $m(o,s,c)}var Zm=Zs.extend({_initImage:function(){var o=this._image=this._url;we(o,"leaflet-image-layer"),this._zoomAnimated&&we(o,"leaflet-zoom-animated"),this.options.className&&we(o,this.options.className),o.onselectstart=_,o.onmousemove=_}});function Pw(o,s,c){return new Zm(o,s,c)}var Fn=gn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(o,s){o&&(o instanceof Y||S(o))?(this._latlng=ne(o),w(this,s)):(w(this,o),this._source=s),this.options.content&&(this._content=this.options.content)},openOn:function(o){return o=arguments.length?o:this._source._map,o.hasLayer(this)||o.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(o){return this._map?this.close():(arguments.length?this._source=o:o=this._source,this._prepareOpen(),this.openOn(o._map)),this},onAdd:function(o){this._zoomAnimated=o._zoomAnimated,this._container||this._initLayout(),o._fadeAnimated&&on(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),o._fadeAnimated&&on(this._container,1),this.bringToFront(),this.options.interactive&&(we(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(o){o._fadeAnimated?(on(this._container,0),this._removeTimeout=setTimeout(l(Ke,void 0,this._container),200)):Ke(this._container),this.options.interactive&&(rt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(o){return this._latlng=ne(o),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(o){return this._content=o,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var o={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Jo(this._container),this},bringToBack:function(){return this._map&&Yo(this._container),this},_prepareOpen:function(o){var s=this._source;if(!s._map)return!1;if(s instanceof tr){s=null;var c=this._source._layers;for(var h in c)if(c[h]._map){s=c[h];break}if(!s)return!1;this._source=s}if(!o)if(s.getCenter)o=s.getCenter();else if(s.getLatLng)o=s.getLatLng();else if(s.getBounds)o=s.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(o),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var o=this._contentNode,s=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof s=="string")o.innerHTML=s;else{for(;o.hasChildNodes();)o.removeChild(o.firstChild);o.appendChild(s)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var o=this._map.latLngToLayerPoint(this._latlng),s=q(this.options.offset),c=this._getAnchor();this._zoomAnimated?at(this._container,o.add(c)):s=s.add(o).add(c);var h=this._containerBottom=-s.y,v=this._containerLeft=-Math.round(this._containerWidth/2)+s.x;this._container.style.bottom=h+"px",this._container.style.left=v+"px"}},_getAnchor:function(){return[0,0]}});Ee.include({_initOverlay:function(o,s,c,h){var v=s;return v instanceof o||(v=new o(h).setContent(s)),c&&v.setLatLng(c),v}}),gn.include({_initOverlay:function(o,s,c,h){var v=c;return v instanceof o?(w(v,h),v._source=this):(v=s&&!h?s:new o(h,this),v.setContent(c)),v}});var Hs=Fn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(o){return o=arguments.length?o:this._source._map,!o.hasLayer(this)&&o._popup&&o._popup.options.autoClose&&o.removeLayer(o._popup),o._popup=this,Fn.prototype.openOn.call(this,o)},onAdd:function(o){Fn.prototype.onAdd.call(this,o),o.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Cr||this._source.on("preclick",vo))},onRemove:function(o){Fn.prototype.onRemove.call(this,o),o.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Cr||this._source.off("preclick",vo))},getEvents:function(){var o=Fn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(o.preclick=this.close),this.options.keepInView&&(o.moveend=this._adjustPan),o},_initLayout:function(){var o="leaflet-popup",s=this._container=Re("div",o+" "+(this.options.className||"")+" leaflet-zoom-animated"),c=this._wrapper=Re("div",o+"-content-wrapper",s);if(this._contentNode=Re("div",o+"-content",c),ia(s),Vc(this._contentNode),be(s,"contextmenu",vo),this._tipContainer=Re("div",o+"-tip-container",s),this._tip=Re("div",o+"-tip",this._tipContainer),this.options.closeButton){var h=this._closeButton=Re("a",o+"-close-button",s);h.setAttribute("role","button"),h.setAttribute("aria-label","Close popup"),h.href="#close",h.innerHTML='<span aria-hidden="true">&#215;</span>',be(h,"click",function(v){yt(v),this.close()},this)}},_updateLayout:function(){var o=this._contentNode,s=o.style;s.width="",s.whiteSpace="nowrap";var c=o.offsetWidth;c=Math.min(c,this.options.maxWidth),c=Math.max(c,this.options.minWidth),s.width=c+1+"px",s.whiteSpace="",s.height="";var h=o.offsetHeight,v=this.options.maxHeight,k="leaflet-popup-scrolled";v&&h>v?(s.height=v+"px",we(o,k)):rt(o,k),this._containerWidth=this._container.offsetWidth},_animateZoom:function(o){var s=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center),c=this._getAnchor();at(this._container,s.add(c))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var o=this._map,s=parseInt(ta(this._container,"marginBottom"),10)||0,c=this._container.offsetHeight+s,h=this._containerWidth,v=new I(this._containerLeft,-c-this._containerBottom);v._add(_o(this._container));var k=o.layerPointToContainerPoint(v),E=q(this.options.autoPanPadding),A=q(this.options.autoPanPaddingTopLeft||E),D=q(this.options.autoPanPaddingBottomRight||E),X=o.getSize(),ae=0,ge=0;k.x+h+D.x>X.x&&(ae=k.x+h-X.x+D.x),k.x-ae-A.x<0&&(ae=k.x-A.x),k.y+c+D.y>X.y&&(ge=k.y+c-X.y+D.y),k.y-ge-A.y<0&&(ge=k.y-A.y),(ae||ge)&&(this.options.keepInView&&(this._autopanning=!0),o.fire("autopanstart").panBy([ae,ge]))}},_getAnchor:function(){return q(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Cw=function(o,s){return new Hs(o,s)};Ee.mergeOptions({closePopupOnClick:!0}),Ee.include({openPopup:function(o,s,c){return this._initOverlay(Hs,o,s,c).openOn(this),this},closePopup:function(o){return o=arguments.length?o:this._popup,o&&o.close(),this}}),gn.include({bindPopup:function(o,s){return this._popup=this._initOverlay(Hs,this._popup,o,s),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(o){return this._popup&&(this instanceof tr||(this._popup._source=this),this._popup._prepareOpen(o||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(o){return this._popup&&this._popup.setContent(o),this},getPopup:function(){return this._popup},_openPopup:function(o){if(!(!this._popup||!this._map)){go(o);var s=o.layer||o.target;if(this._popup._source===s&&!(s instanceof Cr)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(o.latlng);return}this._popup._source=s,this.openPopup(o.latlng)}},_movePopup:function(o){this._popup.setLatLng(o.latlng)},_onKeyPress:function(o){o.originalEvent.keyCode===13&&this._openPopup(o)}});var Ws=Fn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(o){Fn.prototype.onAdd.call(this,o),this.setOpacity(this.options.opacity),o.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(o){Fn.prototype.onRemove.call(this,o),o.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var o=Fn.prototype.getEvents.call(this);return this.options.permanent||(o.preclick=this.close),o},_initLayout:function(){var o="leaflet-tooltip",s=o+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Re("div",s),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+d(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(o){var s,c,h=this._map,v=this._container,k=h.latLngToContainerPoint(h.getCenter()),E=h.layerPointToContainerPoint(o),A=this.options.direction,D=v.offsetWidth,X=v.offsetHeight,ae=q(this.options.offset),ge=this._getAnchor();A==="top"?(s=D/2,c=X):A==="bottom"?(s=D/2,c=0):A==="center"?(s=D/2,c=X/2):A==="right"?(s=0,c=X/2):A==="left"?(s=D,c=X/2):E.x<k.x?(A="right",s=0,c=X/2):(A="left",s=D+(ae.x+ge.x)*2,c=X/2),o=o.subtract(q(s,c,!0)).add(ae).add(ge),rt(v,"leaflet-tooltip-right"),rt(v,"leaflet-tooltip-left"),rt(v,"leaflet-tooltip-top"),rt(v,"leaflet-tooltip-bottom"),we(v,"leaflet-tooltip-"+A),at(v,o)},_updatePosition:function(){var o=this._map.latLngToLayerPoint(this._latlng);this._setPosition(o)},setOpacity:function(o){this.options.opacity=o,this._container&&on(this._container,o)},_animateZoom:function(o){var s=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center);this._setPosition(s)},_getAnchor:function(){return q(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Ew=function(o,s){return new Ws(o,s)};Ee.include({openTooltip:function(o,s,c){return this._initOverlay(Ws,o,s,c).openOn(this),this},closeTooltip:function(o){return o.close(),this}}),gn.include({bindTooltip:function(o,s){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Ws,this._tooltip,o,s),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(o){if(!(!o&&this._tooltipHandlersAdded)){var s=o?"off":"on",c={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?c.add=this._openTooltip:(c.mouseover=this._openTooltip,c.mouseout=this.closeTooltip,c.click=this._openTooltip,this._map?this._addFocusListeners():c.add=this._addFocusListeners),this._tooltip.options.sticky&&(c.mousemove=this._moveTooltip),this[s](c),this._tooltipHandlersAdded=!o}},openTooltip:function(o){return this._tooltip&&(this instanceof tr||(this._tooltip._source=this),this._tooltip._prepareOpen(o)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(o){return this._tooltip&&this._tooltip.setContent(o),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(o){var s=o.getElement();s&&(be(s,"focus",function(){this._tooltip._source=o,this.openTooltip()},this),be(s,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(o){var s=o.getElement();s&&s.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(o){!this._tooltip||!this._map||this._map.dragging&&this._map.dragging.moving()||(this._tooltip._source=o.layer||o.target,this.openTooltip(this._tooltip.options.sticky?o.latlng:void 0))},_moveTooltip:function(o){var s=o.latlng,c,h;this._tooltip.options.sticky&&o.originalEvent&&(c=this._map.mouseEventToContainerPoint(o.originalEvent),h=this._map.containerPointToLayerPoint(c),s=this._map.layerPointToLatLng(h)),this._tooltip.setLatLng(s)}});var Hm=ti.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(o){var s=o&&o.tagName==="DIV"?o:document.createElement("div"),c=this.options;if(c.html instanceof Element?(Rs(s),s.appendChild(c.html)):s.innerHTML=c.html!==!1?c.html:"",c.bgPos){var h=q(c.bgPos);s.style.backgroundPosition=-h.x+"px "+-h.y+"px"}return this._setIconStyles(s,"icon"),s},createShadow:function(){return null}});function Ow(o){return new Hm(o)}ti.Default=la;var ua=gn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:de.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(o){w(this,o)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(o){o._addZoomLimit(this)},onRemove:function(o){this._removeAllTiles(),Ke(this._container),o._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Jo(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Yo(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(o){return this.options.opacity=o,this._updateOpacity(),this},setZIndex:function(o){return this.options.zIndex=o,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var o=this._clampZoom(this._map.getZoom());o!==this._tileZoom&&(this._tileZoom=o,this._updateLevels()),this._update()}return this},getEvents:function(){var o={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=f(this._onMoveEnd,this.options.updateInterval,this)),o.move=this._onMove),this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},createTile:function(){return document.createElement("div")},getTileSize:function(){var o=this.options.tileSize;return o instanceof I?o:new I(o,o)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(o){for(var s=this.getPane().children,c=-o(-1/0,1/0),h=0,v=s.length,k;h<v;h++)k=s[h].style.zIndex,s[h]!==this._container&&k&&(c=o(c,+k));isFinite(c)&&(this.options.zIndex=c+o(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!de.ielt9){on(this._container,this.options.opacity);var o=+new Date,s=!1,c=!1;for(var h in this._tiles){var v=this._tiles[h];if(!(!v.current||!v.loaded)){var k=Math.min(1,(o-v.loaded)/200);on(v.el,k),k<1?s=!0:(v.active?c=!0:this._onOpaqueTile(v),v.active=!0)}}c&&!this._noPrune&&this._pruneTiles(),s&&(ee(this._fadeFrame),this._fadeFrame=z(this._updateOpacity,this))}},_onOpaqueTile:_,_initContainer:function(){this._container||(this._container=Re("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var o=this._tileZoom,s=this.options.maxZoom;if(o!==void 0){for(var c in this._levels)c=Number(c),this._levels[c].el.children.length||c===o?(this._levels[c].el.style.zIndex=s-Math.abs(o-c),this._onUpdateLevel(c)):(Ke(this._levels[c].el),this._removeTilesAtZoom(c),this._onRemoveLevel(c),delete this._levels[c]);var h=this._levels[o],v=this._map;return h||(h=this._levels[o]={},h.el=Re("div","leaflet-tile-container leaflet-zoom-animated",this._container),h.el.style.zIndex=s,h.origin=v.project(v.unproject(v.getPixelOrigin()),o).round(),h.zoom=o,this._setZoomTransform(h,v.getCenter(),v.getZoom()),_(h.el.offsetWidth),this._onCreateLevel(h)),this._level=h,h}},_onUpdateLevel:_,_onRemoveLevel:_,_onCreateLevel:_,_pruneTiles:function(){if(this._map){var o,s,c=this._map.getZoom();if(c>this.options.maxZoom||c<this.options.minZoom){this._removeAllTiles();return}for(o in this._tiles)s=this._tiles[o],s.retain=s.current;for(o in this._tiles)if(s=this._tiles[o],s.current&&!s.active){var h=s.coords;this._retainParent(h.x,h.y,h.z,h.z-5)||this._retainChildren(h.x,h.y,h.z,h.z+2)}for(o in this._tiles)this._tiles[o].retain||this._removeTile(o)}},_removeTilesAtZoom:function(o){for(var s in this._tiles)this._tiles[s].coords.z===o&&this._removeTile(s)},_removeAllTiles:function(){for(var o in this._tiles)this._removeTile(o)},_invalidateAll:function(){for(var o in this._levels)Ke(this._levels[o].el),this._onRemoveLevel(Number(o)),delete this._levels[o];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(o,s,c,h){var v=Math.floor(o/2),k=Math.floor(s/2),E=c-1,A=new I(+v,+k);A.z=+E;var D=this._tileCoordsToKey(A),X=this._tiles[D];return X&&X.active?(X.retain=!0,!0):(X&&X.loaded&&(X.retain=!0),E>h?this._retainParent(v,k,E,h):!1)},_retainChildren:function(o,s,c,h){for(var v=2*o;v<2*o+2;v++)for(var k=2*s;k<2*s+2;k++){var E=new I(v,k);E.z=c+1;var A=this._tileCoordsToKey(E),D=this._tiles[A];if(D&&D.active){D.retain=!0;continue}else D&&D.loaded&&(D.retain=!0);c+1<h&&this._retainChildren(v,k,c+1,h)}},_resetView:function(o){var s=o&&(o.pinch||o.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),s,s)},_animateZoom:function(o){this._setView(o.center,o.zoom,!0,o.noUpdate)},_clampZoom:function(o){var s=this.options;return s.minNativeZoom!==void 0&&o<s.minNativeZoom?s.minNativeZoom:s.maxNativeZoom!==void 0&&s.maxNativeZoom<o?s.maxNativeZoom:o},_setView:function(o,s,c,h){var v=Math.round(s);this.options.maxZoom!==void 0&&v>this.options.maxZoom||this.options.minZoom!==void 0&&v<this.options.minZoom?v=void 0:v=this._clampZoom(v);var k=this.options.updateWhenZooming&&v!==this._tileZoom;(!h||k)&&(this._tileZoom=v,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),v!==void 0&&this._update(o),c||this._pruneTiles(),this._noPrune=!!c),this._setZoomTransforms(o,s)},_setZoomTransforms:function(o,s){for(var c in this._levels)this._setZoomTransform(this._levels[c],o,s)},_setZoomTransform:function(o,s,c){var h=this._map.getZoomScale(c,o.zoom),v=o.origin.multiplyBy(h).subtract(this._map._getNewPixelOrigin(s,c)).round();de.any3d?mo(o.el,v,h):at(o.el,v)},_resetGrid:function(){var o=this._map,s=o.options.crs,c=this._tileSize=this.getTileSize(),h=this._tileZoom,v=this._map.getPixelWorldBounds(this._tileZoom);v&&(this._globalTileRange=this._pxBoundsToTileRange(v)),this._wrapX=s.wrapLng&&!this.options.noWrap&&[Math.floor(o.project([0,s.wrapLng[0]],h).x/c.x),Math.ceil(o.project([0,s.wrapLng[1]],h).x/c.y)],this._wrapY=s.wrapLat&&!this.options.noWrap&&[Math.floor(o.project([s.wrapLat[0],0],h).y/c.x),Math.ceil(o.project([s.wrapLat[1],0],h).y/c.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(o){var s=this._map,c=s._animatingZoom?Math.max(s._animateToZoom,s.getZoom()):s.getZoom(),h=s.getZoomScale(c,this._tileZoom),v=s.project(o,this._tileZoom).floor(),k=s.getSize().divideBy(h*2);return new O(v.subtract(k),v.add(k))},_update:function(o){var s=this._map;if(s){var c=this._clampZoom(s.getZoom());if(o===void 0&&(o=s.getCenter()),this._tileZoom!==void 0){var h=this._getTiledPixelBounds(o),v=this._pxBoundsToTileRange(h),k=v.getCenter(),E=[],A=this.options.keepBuffer,D=new O(v.getBottomLeft().subtract([A,-A]),v.getTopRight().add([A,-A]));if(!(isFinite(v.min.x)&&isFinite(v.min.y)&&isFinite(v.max.x)&&isFinite(v.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var X in this._tiles){var ae=this._tiles[X].coords;(ae.z!==this._tileZoom||!D.contains(new I(ae.x,ae.y)))&&(this._tiles[X].current=!1)}if(Math.abs(c-this._tileZoom)>1){this._setView(o,c);return}for(var ge=v.min.y;ge<=v.max.y;ge++)for(var Se=v.min.x;Se<=v.max.x;Se++){var sn=new I(Se,ge);if(sn.z=this._tileZoom,!!this._isValidTile(sn)){var bo=this._tiles[this._tileCoordsToKey(sn)];bo?bo.current=!0:E.push(sn)}}if(E.sort(function(Er,rd){return Er.distanceTo(k)-rd.distanceTo(k)}),E.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var qs=document.createDocumentFragment();for(Se=0;Se<E.length;Se++)this._addTile(E[Se],qs);this._level.el.appendChild(qs)}}}},_isValidTile:function(o){var s=this._map.options.crs;if(!s.infinite){var c=this._globalTileRange;if(!s.wrapLng&&(o.x<c.min.x||o.x>c.max.x)||!s.wrapLat&&(o.y<c.min.y||o.y>c.max.y))return!1}if(!this.options.bounds)return!0;var h=this._tileCoordsToBounds(o);return Q(this.options.bounds).overlaps(h)},_keyToBounds:function(o){return this._tileCoordsToBounds(this._keyToTileCoords(o))},_tileCoordsToNwSe:function(o){var s=this._map,c=this.getTileSize(),h=o.scaleBy(c),v=h.add(c),k=s.unproject(h,o.z),E=s.unproject(v,o.z);return[k,E]},_tileCoordsToBounds:function(o){var s=this._tileCoordsToNwSe(o),c=new B(s[0],s[1]);return this.options.noWrap||(c=this._map.wrapLatLngBounds(c)),c},_tileCoordsToKey:function(o){return o.x+":"+o.y+":"+o.z},_keyToTileCoords:function(o){var s=o.split(":"),c=new I(+s[0],+s[1]);return c.z=+s[2],c},_removeTile:function(o){var s=this._tiles[o];s&&(Ke(s.el),delete this._tiles[o],this.fire("tileunload",{tile:s.el,coords:this._keyToTileCoords(o)}))},_initTile:function(o){we(o,"leaflet-tile");var s=this.getTileSize();o.style.width=s.x+"px",o.style.height=s.y+"px",o.onselectstart=_,o.onmousemove=_,de.ielt9&&this.options.opacity<1&&on(o,this.options.opacity)},_addTile:function(o,s){var c=this._getTilePos(o),h=this._tileCoordsToKey(o),v=this.createTile(this._wrapCoords(o),l(this._tileReady,this,o));this._initTile(v),this.createTile.length<2&&z(l(this._tileReady,this,o,null,v)),at(v,c),this._tiles[h]={el:v,coords:o,current:!0},s.appendChild(v),this.fire("tileloadstart",{tile:v,coords:o})},_tileReady:function(o,s,c){s&&this.fire("tileerror",{error:s,tile:c,coords:o});var h=this._tileCoordsToKey(o);c=this._tiles[h],c&&(c.loaded=+new Date,this._map._fadeAnimated?(on(c.el,0),ee(this._fadeFrame),this._fadeFrame=z(this._updateOpacity,this)):(c.active=!0,this._pruneTiles()),s||(we(c.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:c.el,coords:o})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),de.ielt9||!this._map._fadeAnimated?z(this._pruneTiles,this):setTimeout(l(this._pruneTiles,this),250)))},_getTilePos:function(o){return o.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(o){var s=new I(this._wrapX?m(o.x,this._wrapX):o.x,this._wrapY?m(o.y,this._wrapY):o.y);return s.z=o.z,s},_pxBoundsToTileRange:function(o){var s=this.getTileSize();return new O(o.min.unscaleBy(s).floor(),o.max.unscaleBy(s).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var o in this._tiles)if(!this._tiles[o].loaded)return!1;return!0}});function Tw(o){return new ua(o)}var oi=ua.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(o,s){this._url=o,s=w(this,s),s.detectRetina&&de.retina&&s.maxZoom>0?(s.tileSize=Math.floor(s.tileSize/2),s.zoomReverse?(s.zoomOffset--,s.minZoom=Math.min(s.maxZoom,s.minZoom+1)):(s.zoomOffset++,s.maxZoom=Math.max(s.minZoom,s.maxZoom-1)),s.minZoom=Math.max(0,s.minZoom)):s.zoomReverse?s.minZoom=Math.min(s.maxZoom,s.minZoom):s.maxZoom=Math.max(s.minZoom,s.maxZoom),typeof s.subdomains=="string"&&(s.subdomains=s.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(o,s){return this._url===o&&s===void 0&&(s=!0),this._url=o,s||this.redraw(),this},createTile:function(o,s){var c=document.createElement("img");return be(c,"load",l(this._tileOnLoad,this,s,c)),be(c,"error",l(this._tileOnError,this,s,c)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(c.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(c.referrerPolicy=this.options.referrerPolicy),c.alt="",c.src=this.getTileUrl(o),c},getTileUrl:function(o){var s={r:de.retina?"@2x":"",s:this._getSubdomain(o),x:o.x,y:o.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var c=this._globalTileRange.max.y-o.y;this.options.tms&&(s.y=c),s["-y"]=c}return b(this._url,i(s,this.options))},_tileOnLoad:function(o,s){de.ielt9?setTimeout(l(o,this,null,s),0):o(null,s)},_tileOnError:function(o,s,c){var h=this.options.errorTileUrl;h&&s.getAttribute("src")!==h&&(s.src=h),o(c,s)},_onTileRemove:function(o){o.tile.onload=null},_getZoomForUrl:function(){var o=this._tileZoom,s=this.options.maxZoom,c=this.options.zoomReverse,h=this.options.zoomOffset;return c&&(o=s-o),o+h},_getSubdomain:function(o){var s=Math.abs(o.x+o.y)%this.options.subdomains.length;return this.options.subdomains[s]},_abortLoading:function(){var o,s;for(o in this._tiles)if(this._tiles[o].coords.z!==this._tileZoom&&(s=this._tiles[o].el,s.onload=_,s.onerror=_,!s.complete)){s.src=R;var c=this._tiles[o].coords;Ke(s),delete this._tiles[o],this.fire("tileabort",{tile:s,coords:c})}},_removeTile:function(o){var s=this._tiles[o];if(s)return s.el.setAttribute("src",R),ua.prototype._removeTile.call(this,o)},_tileReady:function(o,s,c){if(!(!this._map||c&&c.getAttribute("src")===R))return ua.prototype._tileReady.call(this,o,s,c)}});function Wm(o,s){return new oi(o,s)}var Vm=oi.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(o,s){this._url=o;var c=i({},this.defaultWmsParams);for(var h in s)h in this.options||(c[h]=s[h]);s=w(this,s);var v=s.detectRetina&&de.retina?2:1,k=this.getTileSize();c.width=k.x*v,c.height=k.y*v,this.wmsParams=c},onAdd:function(o){this._crs=this.options.crs||o.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var s=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[s]=this._crs.code,oi.prototype.onAdd.call(this,o)},getTileUrl:function(o){var s=this._tileCoordsToNwSe(o),c=this._crs,h=N(c.project(s[0]),c.project(s[1])),v=h.min,k=h.max,E=(this._wmsVersion>=1.3&&this._crs===Dm?[v.y,v.x,k.y,k.x]:[v.x,v.y,k.x,k.y]).join(","),A=oi.prototype.getTileUrl.call(this,o);return A+C(this.wmsParams,A,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+E},setParams:function(o,s){return i(this.wmsParams,o),s||this.redraw(),this}});function Lw(o,s){return new Vm(o,s)}oi.WMS=Vm,Wm.wms=Lw;var or=gn.extend({options:{padding:.1},initialize:function(o){w(this,o),d(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&we(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var o={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(o.zoomanim=this._onAnimZoom),o},_onAnimZoom:function(o){this._updateTransform(o.center,o.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(o,s){var c=this._map.getZoomScale(s,this._zoom),h=this._map.getSize().multiplyBy(.5+this.options.padding),v=this._map.project(this._center,s),k=h.multiplyBy(-c).add(v).subtract(this._map._getNewPixelOrigin(o,s));de.any3d?mo(this._container,k,c):at(this._container,k)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var o in this._layers)this._layers[o]._reset()},_onZoomEnd:function(){for(var o in this._layers)this._layers[o]._project()},_updatePaths:function(){for(var o in this._layers)this._layers[o]._update()},_update:function(){var o=this.options.padding,s=this._map.getSize(),c=this._map.containerPointToLayerPoint(s.multiplyBy(-o)).round();this._bounds=new O(c,c.add(s.multiplyBy(1+o*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),qm=or.extend({options:{tolerance:0},getEvents:function(){var o=or.prototype.getEvents.call(this);return o.viewprereset=this._onViewPreReset,o},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){or.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var o=this._container=document.createElement("canvas");be(o,"mousemove",this._onMouseMove,this),be(o,"click dblclick mousedown mouseup contextmenu",this._onClick,this),be(o,"mouseout",this._handleMouseOut,this),o._leaflet_disable_events=!0,this._ctx=o.getContext("2d")},_destroyContainer:function(){ee(this._redrawRequest),delete this._ctx,Ke(this._container),Ue(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var o;this._redrawBounds=null;for(var s in this._layers)o=this._layers[s],o._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){or.prototype._update.call(this);var o=this._bounds,s=this._container,c=o.getSize(),h=de.retina?2:1;at(s,o.min),s.width=h*c.x,s.height=h*c.y,s.style.width=c.x+"px",s.style.height=c.y+"px",de.retina&&this._ctx.scale(2,2),this._ctx.translate(-o.min.x,-o.min.y),this.fire("update")}},_reset:function(){or.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(o){this._updateDashArray(o),this._layers[d(o)]=o;var s=o._order={layer:o,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=s),this._drawLast=s,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(o){this._requestRedraw(o)},_removePath:function(o){var s=o._order,c=s.next,h=s.prev;c?c.prev=h:this._drawLast=h,h?h.next=c:this._drawFirst=c,delete o._order,delete this._layers[d(o)],this._requestRedraw(o)},_updatePath:function(o){this._extendRedrawBounds(o),o._project(),o._update(),this._requestRedraw(o)},_updateStyle:function(o){this._updateDashArray(o),this._requestRedraw(o)},_updateDashArray:function(o){if(typeof o.options.dashArray=="string"){var s=o.options.dashArray.split(/[, ]+/),c=[],h,v;for(v=0;v<s.length;v++){if(h=Number(s[v]),isNaN(h))return;c.push(h)}o.options._dashArray=c}else o.options._dashArray=o.options.dashArray},_requestRedraw:function(o){this._map&&(this._extendRedrawBounds(o),this._redrawRequest=this._redrawRequest||z(this._redraw,this))},_extendRedrawBounds:function(o){if(o._pxBounds){var s=(o.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new O,this._redrawBounds.extend(o._pxBounds.min.subtract([s,s])),this._redrawBounds.extend(o._pxBounds.max.add([s,s]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var o=this._redrawBounds;if(o){var s=o.getSize();this._ctx.clearRect(o.min.x,o.min.y,s.x,s.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var o,s=this._redrawBounds;if(this._ctx.save(),s){var c=s.getSize();this._ctx.beginPath(),this._ctx.rect(s.min.x,s.min.y,c.x,c.y),this._ctx.clip()}this._drawing=!0;for(var h=this._drawFirst;h;h=h.next)o=h.layer,(!s||o._pxBounds&&o._pxBounds.intersects(s))&&o._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(o,s){if(this._drawing){var c,h,v,k,E=o._parts,A=E.length,D=this._ctx;if(A){for(D.beginPath(),c=0;c<A;c++){for(h=0,v=E[c].length;h<v;h++)k=E[c][h],D[h?"lineTo":"moveTo"](k.x,k.y);s&&D.closePath()}this._fillStroke(D,o)}}},_updateCircle:function(o){if(!(!this._drawing||o._empty())){var s=o._point,c=this._ctx,h=Math.max(Math.round(o._radius),1),v=(Math.max(Math.round(o._radiusY),1)||h)/h;v!==1&&(c.save(),c.scale(1,v)),c.beginPath(),c.arc(s.x,s.y/v,h,0,Math.PI*2,!1),v!==1&&c.restore(),this._fillStroke(c,o)}},_fillStroke:function(o,s){var c=s.options;c.fill&&(o.globalAlpha=c.fillOpacity,o.fillStyle=c.fillColor||c.color,o.fill(c.fillRule||"evenodd")),c.stroke&&c.weight!==0&&(o.setLineDash&&o.setLineDash(s.options&&s.options._dashArray||[]),o.globalAlpha=c.opacity,o.lineWidth=c.weight,o.strokeStyle=c.color,o.lineCap=c.lineCap,o.lineJoin=c.lineJoin,o.stroke())},_onClick:function(o){for(var s=this._map.mouseEventToLayerPoint(o),c,h,v=this._drawFirst;v;v=v.next)c=v.layer,c.options.interactive&&c._containsPoint(s)&&(!(o.type==="click"||o.type==="preclick")||!this._map._draggableMoved(c))&&(h=c);this._fireEvent(h?[h]:!1,o)},_onMouseMove:function(o){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var s=this._map.mouseEventToLayerPoint(o);this._handleMouseHover(o,s)}},_handleMouseOut:function(o){var s=this._hoveredLayer;s&&(rt(this._container,"leaflet-interactive"),this._fireEvent([s],o,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(o,s){if(!this._mouseHoverThrottled){for(var c,h,v=this._drawFirst;v;v=v.next)c=v.layer,c.options.interactive&&c._containsPoint(s)&&(h=c);h!==this._hoveredLayer&&(this._handleMouseOut(o),h&&(we(this._container,"leaflet-interactive"),this._fireEvent([h],o,"mouseover"),this._hoveredLayer=h)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,o),this._mouseHoverThrottled=!0,setTimeout(l(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(o,s,c){this._map._fireDOMEvent(s,c||s.type,o)},_bringToFront:function(o){var s=o._order;if(s){var c=s.next,h=s.prev;if(c)c.prev=h;else return;h?h.next=c:c&&(this._drawFirst=c),s.prev=this._drawLast,this._drawLast.next=s,s.next=null,this._drawLast=s,this._requestRedraw(o)}},_bringToBack:function(o){var s=o._order;if(s){var c=s.next,h=s.prev;if(h)h.next=c;else return;c?c.prev=h:h&&(this._drawLast=h),s.prev=null,s.next=this._drawFirst,this._drawFirst.prev=s,this._drawFirst=s,this._requestRedraw(o)}}});function Km(o){return de.canvas?new qm(o):null}var ca=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(o){return document.createElement("<lvml:"+o+' class="lvml">')}}catch{}return function(o){return document.createElement("<"+o+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),Rw={_initContainer:function(){this._container=Re("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(or.prototype._update.call(this),this.fire("update"))},_initPath:function(o){var s=o._container=ca("shape");we(s,"leaflet-vml-shape "+(this.options.className||"")),s.coordsize="1 1",o._path=ca("path"),s.appendChild(o._path),this._updateStyle(o),this._layers[d(o)]=o},_addPath:function(o){var s=o._container;this._container.appendChild(s),o.options.interactive&&o.addInteractiveTarget(s)},_removePath:function(o){var s=o._container;Ke(s),o.removeInteractiveTarget(s),delete this._layers[d(o)]},_updateStyle:function(o){var s=o._stroke,c=o._fill,h=o.options,v=o._container;v.stroked=!!h.stroke,v.filled=!!h.fill,h.stroke?(s||(s=o._stroke=ca("stroke")),v.appendChild(s),s.weight=h.weight+"px",s.color=h.color,s.opacity=h.opacity,h.dashArray?s.dashStyle=S(h.dashArray)?h.dashArray.join(" "):h.dashArray.replace(/( *, *)/g," "):s.dashStyle="",s.endcap=h.lineCap.replace("butt","flat"),s.joinstyle=h.lineJoin):s&&(v.removeChild(s),o._stroke=null),h.fill?(c||(c=o._fill=ca("fill")),v.appendChild(c),c.color=h.fillColor||h.color,c.opacity=h.fillOpacity):c&&(v.removeChild(c),o._fill=null)},_updateCircle:function(o){var s=o._point.round(),c=Math.round(o._radius),h=Math.round(o._radiusY||c);this._setPath(o,o._empty()?"M0 0":"AL "+s.x+","+s.y+" "+c+","+h+" 0,"+65535*360)},_setPath:function(o,s){o._path.v=s},_bringToFront:function(o){Jo(o._container)},_bringToBack:function(o){Yo(o._container)}},Vs=de.vml?ca:Kt,da=or.extend({_initContainer:function(){this._container=Vs("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Vs("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Ke(this._container),Ue(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){or.prototype._update.call(this);var o=this._bounds,s=o.getSize(),c=this._container;(!this._svgSize||!this._svgSize.equals(s))&&(this._svgSize=s,c.setAttribute("width",s.x),c.setAttribute("height",s.y)),at(c,o.min),c.setAttribute("viewBox",[o.min.x,o.min.y,s.x,s.y].join(" ")),this.fire("update")}},_initPath:function(o){var s=o._path=Vs("path");o.options.className&&we(s,o.options.className),o.options.interactive&&we(s,"leaflet-interactive"),this._updateStyle(o),this._layers[d(o)]=o},_addPath:function(o){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(o._path),o.addInteractiveTarget(o._path)},_removePath:function(o){Ke(o._path),o.removeInteractiveTarget(o._path),delete this._layers[d(o)]},_updatePath:function(o){o._project(),o._update()},_updateStyle:function(o){var s=o._path,c=o.options;s&&(c.stroke?(s.setAttribute("stroke",c.color),s.setAttribute("stroke-opacity",c.opacity),s.setAttribute("stroke-width",c.weight),s.setAttribute("stroke-linecap",c.lineCap),s.setAttribute("stroke-linejoin",c.lineJoin),c.dashArray?s.setAttribute("stroke-dasharray",c.dashArray):s.removeAttribute("stroke-dasharray"),c.dashOffset?s.setAttribute("stroke-dashoffset",c.dashOffset):s.removeAttribute("stroke-dashoffset")):s.setAttribute("stroke","none"),c.fill?(s.setAttribute("fill",c.fillColor||c.color),s.setAttribute("fill-opacity",c.fillOpacity),s.setAttribute("fill-rule",c.fillRule||"evenodd")):s.setAttribute("fill","none"))},_updatePoly:function(o,s){this._setPath(o,Ut(o._parts,s))},_updateCircle:function(o){var s=o._point,c=Math.max(Math.round(o._radius),1),h=Math.max(Math.round(o._radiusY),1)||c,v="a"+c+","+h+" 0 1,0 ",k=o._empty()?"M0 0":"M"+(s.x-c)+","+s.y+v+c*2+",0 "+v+-c*2+",0 ";this._setPath(o,k)},_setPath:function(o,s){o._path.setAttribute("d",s)},_bringToFront:function(o){Jo(o._path)},_bringToBack:function(o){Yo(o._path)}});de.vml&&da.include(Rw);function Qm(o){return de.svg||de.vml?new da(o):null}Ee.include({getRenderer:function(o){var s=o.options.renderer||this._getPaneRenderer(o.options.pane)||this.options.renderer||this._renderer;return s||(s=this._renderer=this._createRenderer()),this.hasLayer(s)||this.addLayer(s),s},_getPaneRenderer:function(o){if(o==="overlayPane"||o===void 0)return!1;var s=this._paneRenderers[o];return s===void 0&&(s=this._createRenderer({pane:o}),this._paneRenderers[o]=s),s},_createRenderer:function(o){return this.options.preferCanvas&&Km(o)||Qm(o)}});var Gm=ni.extend({initialize:function(o,s){ni.prototype.initialize.call(this,this._boundsToLatLngs(o),s)},setBounds:function(o){return this.setLatLngs(this._boundsToLatLngs(o))},_boundsToLatLngs:function(o){return o=Q(o),[o.getSouthWest(),o.getNorthWest(),o.getNorthEast(),o.getSouthEast()]}});function zw(o,s){return new Gm(o,s)}da.create=Vs,da.pointsToPath=Ut,rr.geometryToLayer=Fs,rr.coordsToLatLng=ed,rr.coordsToLatLngs=js,rr.latLngToCoords=td,rr.latLngsToCoords=Us,rr.getFeature=ri,rr.asFeature=$s,Ee.mergeOptions({boxZoom:!0});var Xm=Dn.extend({initialize:function(o){this._map=o,this._container=o._container,this._pane=o._panes.overlayPane,this._resetStateTimeout=0,o.on("unload",this._destroy,this)},addHooks:function(){be(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Ue(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Ke(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(o){if(!o.shiftKey||o.which!==1&&o.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),na(),Dc(),this._startPoint=this._map.mouseEventToContainerPoint(o),be(document,{contextmenu:go,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(o){this._moved||(this._moved=!0,this._box=Re("div","leaflet-zoom-box",this._container),we(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(o);var s=new O(this._point,this._startPoint),c=s.getSize();at(this._box,s.min),this._box.style.width=c.x+"px",this._box.style.height=c.y+"px"},_finish:function(){this._moved&&(Ke(this._box),rt(this._container,"leaflet-crosshair")),ra(),Fc(),Ue(document,{contextmenu:go,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(o){if(!(o.which!==1&&o.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(l(this._resetState,this),0);var s=new B(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(s).fire("boxzoomend",{boxZoomBounds:s})}},_onKeyDown:function(o){o.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});Ee.addInitHook("addHandler","boxZoom",Xm),Ee.mergeOptions({doubleClickZoom:!0});var Jm=Dn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(o){var s=this._map,c=s.getZoom(),h=s.options.zoomDelta,v=o.originalEvent.shiftKey?c-h:c+h;s.options.doubleClickZoom==="center"?s.setZoom(v):s.setZoomAround(o.containerPoint,v)}});Ee.addInitHook("addHandler","doubleClickZoom",Jm),Ee.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Ym=Dn.extend({addHooks:function(){if(!this._draggable){var o=this._map;this._draggable=new Pr(o._mapPane,o._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),o.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),o.on("zoomend",this._onZoomEnd,this),o.whenReady(this._onZoomEnd,this))}we(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){rt(this._map._container,"leaflet-grab"),rt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var o=this._map;if(o._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var s=Q(this._map.options.maxBounds);this._offsetLimit=N(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;o.fire("movestart").fire("dragstart"),o.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(o){if(this._map.options.inertia){var s=this._lastTime=+new Date,c=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(c),this._times.push(s),this._prunePositions(s)}this._map.fire("move",o).fire("drag",o)},_prunePositions:function(o){for(;this._positions.length>1&&o-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var o=this._map.getSize().divideBy(2),s=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=s.subtract(o).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(o,s){return o-(o-s)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var o=this._draggable._newPos.subtract(this._draggable._startPos),s=this._offsetLimit;o.x<s.min.x&&(o.x=this._viscousLimit(o.x,s.min.x)),o.y<s.min.y&&(o.y=this._viscousLimit(o.y,s.min.y)),o.x>s.max.x&&(o.x=this._viscousLimit(o.x,s.max.x)),o.y>s.max.y&&(o.y=this._viscousLimit(o.y,s.max.y)),this._draggable._newPos=this._draggable._startPos.add(o)}},_onPreDragWrap:function(){var o=this._worldWidth,s=Math.round(o/2),c=this._initialWorldOffset,h=this._draggable._newPos.x,v=(h-s+c)%o+s-c,k=(h+s+c)%o-s-c,E=Math.abs(v+c)<Math.abs(k+c)?v:k;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=E},_onDragEnd:function(o){var s=this._map,c=s.options,h=!c.inertia||o.noInertia||this._times.length<2;if(s.fire("dragend",o),h)s.fire("moveend");else{this._prunePositions(+new Date);var v=this._lastPos.subtract(this._positions[0]),k=(this._lastTime-this._times[0])/1e3,E=c.easeLinearity,A=v.multiplyBy(E/k),D=A.distanceTo([0,0]),X=Math.min(c.inertiaMaxSpeed,D),ae=A.multiplyBy(X/D),ge=X/(c.inertiaDeceleration*E),Se=ae.multiplyBy(-ge/2).round();!Se.x&&!Se.y?s.fire("moveend"):(Se=s._limitOffset(Se,s.options.maxBounds),z(function(){s.panBy(Se,{duration:ge,easeLinearity:E,noMoveStart:!0,animate:!0})}))}}});Ee.addInitHook("addHandler","dragging",Ym),Ee.mergeOptions({keyboard:!0,keyboardPanDelta:80});var e_=Dn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(o){this._map=o,this._setPanDelta(o.options.keyboardPanDelta),this._setZoomDelta(o.options.zoomDelta)},addHooks:function(){var o=this._map._container;o.tabIndex<=0&&(o.tabIndex="0"),be(o,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Ue(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var o=document.body,s=document.documentElement,c=o.scrollTop||s.scrollTop,h=o.scrollLeft||s.scrollLeft;this._map._container.focus(),window.scrollTo(h,c)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(o){var s=this._panKeys={},c=this.keyCodes,h,v;for(h=0,v=c.left.length;h<v;h++)s[c.left[h]]=[-1*o,0];for(h=0,v=c.right.length;h<v;h++)s[c.right[h]]=[o,0];for(h=0,v=c.down.length;h<v;h++)s[c.down[h]]=[0,o];for(h=0,v=c.up.length;h<v;h++)s[c.up[h]]=[0,-1*o]},_setZoomDelta:function(o){var s=this._zoomKeys={},c=this.keyCodes,h,v;for(h=0,v=c.zoomIn.length;h<v;h++)s[c.zoomIn[h]]=o;for(h=0,v=c.zoomOut.length;h<v;h++)s[c.zoomOut[h]]=-o},_addHooks:function(){be(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Ue(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(o){if(!(o.altKey||o.ctrlKey||o.metaKey)){var s=o.keyCode,c=this._map,h;if(s in this._panKeys){if(!c._panAnim||!c._panAnim._inProgress)if(h=this._panKeys[s],o.shiftKey&&(h=q(h).multiplyBy(3)),c.options.maxBounds&&(h=c._limitOffset(q(h),c.options.maxBounds)),c.options.worldCopyJump){var v=c.wrapLatLng(c.unproject(c.project(c.getCenter()).add(h)));c.panTo(v)}else c.panBy(h)}else if(s in this._zoomKeys)c.setZoom(c.getZoom()+(o.shiftKey?3:1)*this._zoomKeys[s]);else if(s===27&&c._popup&&c._popup.options.closeOnEscapeKey)c.closePopup();else return;go(o)}}});Ee.addInitHook("addHandler","keyboard",e_),Ee.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var t_=Dn.extend({addHooks:function(){be(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Ue(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(o){var s=Pm(o),c=this._map.options.wheelDebounceTime;this._delta+=s,this._lastMousePos=this._map.mouseEventToContainerPoint(o),this._startTime||(this._startTime=+new Date);var h=Math.max(c-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(l(this._performZoom,this),h),go(o)},_performZoom:function(){var o=this._map,s=o.getZoom(),c=this._map.options.zoomSnap||0;o._stop();var h=this._delta/(this._map.options.wheelPxPerZoomLevel*4),v=4*Math.log(2/(1+Math.exp(-Math.abs(h))))/Math.LN2,k=c?Math.ceil(v/c)*c:v,E=o._limitZoom(s+(this._delta>0?k:-k))-s;this._delta=0,this._startTime=null,E&&(o.options.scrollWheelZoom==="center"?o.setZoom(s+E):o.setZoomAround(this._lastMousePos,s+E))}});Ee.addInitHook("addHandler","scrollWheelZoom",t_);var Aw=600;Ee.mergeOptions({tapHold:de.touchNative&&de.safari&&de.mobile,tapTolerance:15});var n_=Dn.extend({addHooks:function(){be(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Ue(this._map._container,"touchstart",this._onDown,this)},_onDown:function(o){if(clearTimeout(this._holdTimeout),o.touches.length===1){var s=o.touches[0];this._startPos=this._newPos=new I(s.clientX,s.clientY),this._holdTimeout=setTimeout(l(function(){this._cancel(),this._isTapValid()&&(be(document,"touchend",yt),be(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",s))},this),Aw),be(document,"touchend touchcancel contextmenu",this._cancel,this),be(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function o(){Ue(document,"touchend",yt),Ue(document,"touchend touchcancel",o)},_cancel:function(){clearTimeout(this._holdTimeout),Ue(document,"touchend touchcancel contextmenu",this._cancel,this),Ue(document,"touchmove",this._onMove,this)},_onMove:function(o){var s=o.touches[0];this._newPos=new I(s.clientX,s.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(o,s){var c=new MouseEvent(o,{bubbles:!0,cancelable:!0,view:window,screenX:s.screenX,screenY:s.screenY,clientX:s.clientX,clientY:s.clientY});c._simulated=!0,s.target.dispatchEvent(c)}});Ee.addInitHook("addHandler","tapHold",n_),Ee.mergeOptions({touchZoom:de.touch,bounceAtZoomLimits:!0});var r_=Dn.extend({addHooks:function(){we(this._map._container,"leaflet-touch-zoom"),be(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){rt(this._map._container,"leaflet-touch-zoom"),Ue(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(o){var s=this._map;if(!(!o.touches||o.touches.length!==2||s._animatingZoom||this._zooming)){var c=s.mouseEventToContainerPoint(o.touches[0]),h=s.mouseEventToContainerPoint(o.touches[1]);this._centerPoint=s.getSize()._divideBy(2),this._startLatLng=s.containerPointToLatLng(this._centerPoint),s.options.touchZoom!=="center"&&(this._pinchStartLatLng=s.containerPointToLatLng(c.add(h)._divideBy(2))),this._startDist=c.distanceTo(h),this._startZoom=s.getZoom(),this._moved=!1,this._zooming=!0,s._stop(),be(document,"touchmove",this._onTouchMove,this),be(document,"touchend touchcancel",this._onTouchEnd,this),yt(o)}},_onTouchMove:function(o){if(!(!o.touches||o.touches.length!==2||!this._zooming)){var s=this._map,c=s.mouseEventToContainerPoint(o.touches[0]),h=s.mouseEventToContainerPoint(o.touches[1]),v=c.distanceTo(h)/this._startDist;if(this._zoom=s.getScaleZoom(v,this._startZoom),!s.options.bounceAtZoomLimits&&(this._zoom<s.getMinZoom()&&v<1||this._zoom>s.getMaxZoom()&&v>1)&&(this._zoom=s._limitZoom(this._zoom)),s.options.touchZoom==="center"){if(this._center=this._startLatLng,v===1)return}else{var k=c._add(h)._divideBy(2)._subtract(this._centerPoint);if(v===1&&k.x===0&&k.y===0)return;this._center=s.unproject(s.project(this._pinchStartLatLng,this._zoom).subtract(k),this._zoom)}this._moved||(s._moveStart(!0,!1),this._moved=!0),ee(this._animRequest);var E=l(s._move,s,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=z(E,this,!0),yt(o)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,ee(this._animRequest),Ue(document,"touchmove",this._onTouchMove,this),Ue(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});Ee.addInitHook("addHandler","touchZoom",r_),Ee.BoxZoom=Xm,Ee.DoubleClickZoom=Jm,Ee.Drag=Ym,Ee.Keyboard=e_,Ee.ScrollWheelZoom=t_,Ee.TapHold=n_,Ee.TouchZoom=r_,n.Bounds=O,n.Browser=de,n.CRS=ue,n.Canvas=qm,n.Circle=Yc,n.CircleMarker=Ds,n.Class=re,n.Control=vn,n.DivIcon=Hm,n.DivOverlay=Fn,n.DomEvent=Xx,n.DomUtil=Qx,n.Draggable=Pr,n.Evented=te,n.FeatureGroup=tr,n.GeoJSON=rr,n.GridLayer=ua,n.Handler=Dn,n.Icon=ti,n.ImageOverlay=Zs,n.LatLng=Y,n.LatLngBounds=B,n.Layer=gn,n.LayerGroup=ei,n.LineUtil=uw,n.Map=Ee,n.Marker=Ms,n.Mixin=ow,n.Path=Cr,n.Point=I,n.PolyUtil=cw,n.Polygon=ni,n.Polyline=nr,n.Popup=Hs,n.PosAnimation=Cm,n.Projection=dw,n.Rectangle=Gm,n.Renderer=or,n.SVG=da,n.SVGOverlay=Zm,n.TileLayer=oi,n.Tooltip=Ws,n.Transformation=Fe,n.Util=me,n.VideoOverlay=$m,n.bind=l,n.bounds=N,n.canvas=Km,n.circle=yw,n.circleMarker=gw,n.control=aa,n.divIcon=Ow,n.extend=i,n.featureGroup=mw,n.geoJSON=Um,n.geoJson=ww,n.gridLayer=Tw,n.icon=_w,n.imageOverlay=kw,n.latLng=ne,n.latLngBounds=Q,n.layerGroup=pw,n.map=Jx,n.marker=vw,n.point=q,n.polygon=xw,n.polyline=bw,n.popup=Cw,n.rectangle=zw,n.setOptions=w,n.stamp=d,n.svg=Qm,n.svgOverlay=Pw,n.tileLayer=Wm,n.tooltip=Ew,n.transformation=Ne,n.version=r,n.videoOverlay=Sw;var Bw=window.L;n.noConflict=function(){return window.L=Bw,this},window.L=n})})(wO,uh);var Fd,ch={};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/Fd={get exports(){return ch},set exports(e){ch=e}},function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=typeof i;if(a==="string"||a==="number")n.push(i);else if(Array.isArray(i)){if(i.length){var l=t.apply(null,i);l&&n.push(l)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var u in i)e.call(i,u)&&i[u]&&n.push(u)}}}return n.join(" ")}Fd.exports?(t.default=t,Fd.exports=t):window.classNames=t}();var _g,vg,gg,Ti=ch;function kO(e){const t=a=>{var l;return(l=window?.matchMedia(a).matches)!==null&&l!==void 0&&l},[n,r]=T.useState(t(e)),i=()=>{r(t(e))};return T.useEffect(()=>{const a=window.matchMedia(e);return i(),a.addEventListener("change",i),()=>a.removeEventListener("change",i)},[e]),n}function dh(){return dh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dh.apply(this,arguments)}var yg,bg,xg,SO=function(e){return T.createElement("svg",dh({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},e),_g||(_g=T.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),vg||(vg=T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),gg||(gg=T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))};function fh(){return fh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fh.apply(this,arguments)}var PO=function(e){return T.createElement("svg",fh({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},e),yg||(yg=T.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),bg||(bg=T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),xg||(xg=T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))};function Ce(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var Ur,xn={panel:"Panel-module_panel__4VWNp","panel--mobile-layout":"Panel-module_panel--mobile-layout__OII-B",panel__pointer:"Panel-module_panel__pointer__BETJ8","panel__pointer-position":"Panel-module_panel__pointer-position__Zer8q","panel__content-wrapper--info":"Panel-module_panel__content-wrapper--info__lrfgo","panel__pointer--info":"Panel-module_panel__pointer--info__5OaTN","panel__content-wrapper--success":"Panel-module_panel__content-wrapper--success__k0JQD","panel__pointer--success":"Panel-module_panel__pointer--success__O-X6n","panel__content-wrapper--warning":"Panel-module_panel__content-wrapper--warning__vYY8E","panel__pointer--warning":"Panel-module_panel__pointer--warning__l5Zf8","panel__content-wrapper--error":"Panel-module_panel__content-wrapper--error__3LhKe","panel__pointer--error":"Panel-module_panel__pointer--error__4MGTF","panel__content-wrapper":"Panel-module_panel__content-wrapper__oiWk8","panel__icon-wrapper":"Panel-module_panel__icon-wrapper__631EQ",panel__content:"Panel-module_panel__content__U3cAc",panel__header:"Panel-module_panel__header__UJuRe",panel__body:"Panel-module_panel__body__gRd1x"};Ce(`/* breakpoints-xs */
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
`),function(e){e.Success="success",e.Info="info",e.Warning="warning",e.Error="error"}(Ur||(Ur={}));const CO=({size:e,variant:t})=>{switch(t){case Ur.Info:case Ur.Error:case Ur.Warning:return H.createElement(SO,{style:{width:e,height:e},"data-testid":"panel-icon-info"});case Ur.Success:return H.createElement(PO,{style:{width:e,height:e},"data-testid":"panel-icon-success"})}},EO=({children:e})=>H.createElement("div",{className:Ti(xn["panel__pointer-position"])},e),OO=({renderIcon:e=CO,title:t,children:n,variant:r=Ur.Info,showPointer:i=!1,showIcon:a=!0,forceMobileLayout:l=!1,renderArrow:u=EO})=>{const d=(({forceMobileLayout:m})=>{const _=kO(`(max-width: ${tO})`);return!!m||_})({forceMobileLayout:l}),f=d?YE:eO;return H.createElement("div",{className:Ti(xn.panel,{[xn["panel--mobile-layout"]]:d})},i&&u({children:H.createElement("div",{"data-testid":"panel-pointer",className:Ti(xn.panel__pointer,xn[`panel__pointer--${r}`])})}),H.createElement("div",{"data-testid":"panel-content-wrapper",className:Ti(xn["panel__content-wrapper"],xn[`panel__content-wrapper--${r}`])},a&&H.createElement("div",{"data-testid":"panel-icon-wrapper",className:xn["panel__icon-wrapper"]},e({size:f,variant:r})),H.createElement("div",{className:xn.panel__content},t&&H.createElement("h2",{className:xn.panel__header},t),H.createElement("div",{className:xn.panel__body},n))))};Ce(`.PopoverPanel-module_popover-panel__tGILa {
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
`);var wg;(function(e){e.Primary="primary",e.Secondary="secondary"})(wg||(wg={}));T.createContext(void 0);Ce(`.Accordion-module_accordion__LVhhv {
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
`);function O1(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}const kg=e=>{var{svgIconComponent:t}=e,n=O1(e,["svgIconComponent"]);return T.isValidElement(t)?T.cloneElement(t,Object.assign({},n)):null};var hh,ph,mh,$n={"altinn-button":"Button-module_altinn-button__66e22",icon:"Button-module_icon__-43u5","altinn-button--small":"Button-module_altinn-button--small__Dgk-Q","altinn-button--medium":"Button-module_altinn-button--medium__bOVBh","altinn-button--large":"Button-module_altinn-button--large__xStsn","altinn-button--full-width":"Button-module_altinn-button--full-width__MAP1E","altinn-button--dashed-border":"Button-module_altinn-button--dashed-border__qpC6S","altinn-button--only-icon":"Button-module_altinn-button--only-icon__dHhst","altinn-button--filled":"Button-module_altinn-button--filled__-w8IZ","altinn-button--outline":"Button-module_altinn-button--outline__NWnjl","altinn-button--quiet":"Button-module_altinn-button--quiet__2HgNN","altinn-button--filled--primary":"Button-module_altinn-button--filled--primary__qR1t6","altinn-button--filled--secondary":"Button-module_altinn-button--filled--secondary__RXBZU","altinn-button--filled--success":"Button-module_altinn-button--filled--success__-hCDf","altinn-button--filled--danger":"Button-module_altinn-button--filled--danger__dshZU","altinn-button--filled--inverted":"Button-module_altinn-button--filled--inverted__B3H2y","altinn-button--outline--primary":"Button-module_altinn-button--outline--primary__yrQtz","altinn-button--outline--secondary":"Button-module_altinn-button--outline--secondary__NQPoO","altinn-button--outline--success":"Button-module_altinn-button--outline--success__oAdH7","altinn-button--outline--danger":"Button-module_altinn-button--outline--danger__ngRhZ","altinn-button--outline--inverted":"Button-module_altinn-button--outline--inverted__opiJ3","altinn-button--quiet--primary":"Button-module_altinn-button--quiet--primary__ym-xv","altinn-button--quiet--secondary":"Button-module_altinn-button--quiet--secondary__LschY","altinn-button--quiet--success":"Button-module_altinn-button--quiet--success__AvIPs","altinn-button--quiet--danger":"Button-module_altinn-button--quiet--danger__buvJM","altinn-button--quiet--inverted":"Button-module_altinn-button--quiet--inverted__-VC-B"};Ce(`.Button-module_altinn-button__66e22 {
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
`),function(e){e.Small="small",e.Medium="medium",e.Large="large"}(hh||(hh={})),function(e){e.Primary="primary",e.Secondary="secondary",e.Success="success",e.Danger="danger",e.Inverted="inverted"}(ph||(ph={})),function(e){e.Filled="filled",e.Outline="outline",e.Quiet="quiet"}(mh||(mh={}));var xu,wu;T.forwardRef((e,t)=>{var{children:n,color:r=ph.Primary,variant:i=mh.Filled,size:a=hh.Small,fullWidth:l=!1,dashedBorder:u=!1,iconPlacement:d="left",icon:f,type:m="button",className:_}=e,p=O1(e,["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"]);return H.createElement("button",Object.assign({},p,{ref:t,className:Ti($n["altinn-button"],$n[`altinn-button--${a}`],$n[`altinn-button--${i}`],$n[`altinn-button--${r}`],$n[`altinn-button--${i}--${r}`],{[$n["altinn-button--full-width"]]:l},{[$n["altinn-button--dashed-border"]]:u},{[$n["altinn-button--only-icon"]]:!n&&f},_),type:m}),f&&d==="left"&&H.createElement(kg,{svgIconComponent:f,className:$n.icon}),n,f&&d==="right"&&H.createElement(kg,{svgIconComponent:f,className:$n.icon}))});(function(e){e.Primary="primary",e.Success="success"})(xu||(xu={})),function(e){e.Small="small",e.Medium="medium"}(wu||(wu={}));const TO=T.createContext({color:xu.Primary,size:wu.Medium});var LO="Page-module_page__THNNc";Ce(`.Page-module_page__THNNc {
  width: 100%;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
}
`);const RO=({children:e,color:t=xu.Primary,size:n=wu.Medium})=>H.createElement("div",{className:LO},H.createElement(TO.Provider,{value:{color:t,size:n}},e));Ce(`.PageHeader-module_page-header__94GS1 {
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
`);var zO={"page-content":"PageContent-module_page-content__-sHWi"};Ce(`.PageContent-module_page-content__-sHWi {
  --component-page_content-vertical-padding: 2rem;
  background-color: white;
  padding-top: var(--component-page_content-vertical-padding);
  padding-bottom: var(--component-page_content-vertical-padding);
  box-sizing: inherit;
}
`);const Sg=({children:e})=>H.createElement("div",{className:Ti(zO["page-content"])},e);var _h;Ce(`.List-module_list__9aWGq {
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
`),function(e){e.Solid="solid",e.Dashed="dashed"}(_h||(_h={}));T.createContext({borderStyle:_h.Solid});Ce(`.ListItem-module_list-item__OIENi {
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
`);var Pg,Cg,Eg;(function(e){e.Default="default",e.Error="error",e.Disabled="disabled",e.ReadOnlyInfo="readonly-info",e.ReadOnlyConfirm="readonly-confirm"})(Pg||(Pg={})),function(e){e.ReadOnlyInfo="readonly-info",e.ReadOnlyConfirm="readonly-confirm"}(Cg||(Cg={})),function(e){e.None="none",e.Error="error",e.Search="search"}(Eg||(Eg={}));Ce(`.InputWrapper-module_InputWrapper__us2BQ {
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
`);var vh,Og;Ce(`Table {
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
`),function(e){e.Header="header",e.Body="body",e.Footer="footer"}(vh||(vh={})),function(e){e.Descending="desc",e.Ascending="asc",e.NotSortable="notSortable",e.NotActive="notActive"}(Og||(Og={}));T.createContext(void 0);T.createContext({variantStandard:vh.Body});Ce(`.TableHeader-module_table-header__mrqgB {
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
`);var Tg;Ce(`.CheckboxRadioTemplate-module_altinn-template__x5xJ- {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Tg||(Tg={}));var Lg;Ce(`.RadioButton-module_altinn-radio__iDfpf {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Lg||(Lg={}));Ce(`.Checkbox-module_altinn-checkbox__UGXBu {
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
`);var Rg;Ce(`.FieldSet-module_altinn-field-set__NebiS {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Rg||(Rg={}));var zg;Ce(`.CheckboxGroup-module_altinn-checkbox-group__Q7GlX {
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
`),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(zg||(zg={}));Ce(`.Pagination-module_pagination-icon__zVOLT {
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
`);var Ag,Bg;Ce(`.RadioGroup-module_altinn-radio-group__Eje9Q {
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Ag||(Ag={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(Bg||(Bg={}));let Ng=0;function AO(e){const[t,n]=T.useState(e),r=e||t;return T.useEffect(()=>{t==null&&(Ng+=1,n(`aksel-icon-${Ng}`))},[t]),r}const Ig=H["useId"];function T1(e){var t;if(Ig!==void 0){const n=Ig();return e??n.replace(/(:)/g,"")}return(t=AO(e))!==null&&t!==void 0?t:""}var BO=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const NO=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,i=BO(e,["title","titleId"]);let a=T1();return a=n?r||"title-"+a:void 0,T.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},i),n?T.createElement("title",{id:a},n):null,T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-11c2.205 0 4 1.657 4 3.693 0 .986-.416 1.914-1.172 2.612l-.593.54-.294.28c-.477.466-.869.94-.936 1.417l-.01.144v.814h-1.991v-.814c0-1.254.84-2.214 1.675-3.002l.74-.68c.38-.35.59-.816.59-1.31 0-1.024-.901-1.856-2.01-1.856-1.054 0-1.922.755-2.002 1.71l-.006.145H8C8 6.657 9.794 5 12 5Z",fill:"currentColor"}))}),IO=NO;var MO=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const DO=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,i=MO(e,["title","titleId"]);let a=T1();return a=n?r||"title-"+a:void 0,T.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},i),n?T.createElement("title",{id:a},n):null,T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 16a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-11c2.205 0 4 1.657 4 3.693 0 .986-.416 1.914-1.172 2.612l-.593.54-.294.28c-.477.466-.869.94-.936 1.417l-.01.144v.814h-1.991v-.814c0-1.254.84-2.214 1.675-3.002l.74-.68c.38-.35.59-.816.59-1.31 0-1.024-.901-1.856-2.01-1.856-1.054 0-1.922.755-2.002 1.71l-.006.145H8C8 6.657 9.794 5 12 5Z",fill:"currentColor"}))}),FO=DO;function Ki(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var jd,L1={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/jd=L1,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=typeof i;if(a==="string"||a==="number")n.push(i);else if(Array.isArray(i)){if(i.length){var l=t.apply(null,i);l&&n.push(l)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var u in i)e.call(i,u)&&i[u]&&n.push(u)}}}return n.join(" ")}jd.exports?(t.default=t,jd.exports=t):window.classNames=t}();var St=L1.exports;const gh=e=>{var{svgIconComponent:t}=e,n=Ki(e,["svgIconComponent"]);return T.isValidElement(t)?T.cloneElement(t,Object.assign({},n)):null};function ct(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}gh.displayName="SvgIcon";var yh,bh,xh,ir={button:"Button-module_button__2ZuB7",icon:"Button-module_icon__-43u5",small:"Button-module_small__l39oh",medium:"Button-module_medium__KTxdk",large:"Button-module_large__6bsb7",fullWidth:"Button-module_fullWidth__36oJT",dashedBorder:"Button-module_dashedBorder__500FL",outline:"Button-module_outline__F5jq-",quiet:"Button-module_quiet__1KlhF",onlyIcon:"Button-module_onlyIcon__lENu3",filled:"Button-module_filled__inpPb",primary:"Button-module_primary__s1sM6",secondary:"Button-module_secondary__R0waJ",success:"Button-module_success__w6qB6",danger:"Button-module_danger__V4fX8",inverted:"Button-module_inverted__VD6YO"};ct(`.Button-module_button__2ZuB7 {\r
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
}`),function(e){e.Small="small",e.Medium="medium",e.Large="large"}(yh||(yh={})),function(e){e.Primary="primary",e.Secondary="secondary",e.Success="success",e.Danger="danger",e.Inverted="inverted"}(bh||(bh={})),function(e){e.Filled="filled",e.Outline="outline",e.Quiet="quiet"}(xh||(xh={}));const R1=(e,t)=>{var{children:n,color:r=bh.Primary,variant:i=xh.Filled,size:a=yh.Small,fullWidth:l=!1,dashedBorder:u=!1,iconPlacement:d="left",icon:f,type:m="button",className:_}=e,p=Ki(e,["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"]);return H.createElement("button",Object.assign({},p,{ref:t,className:St(ir.button,ir[a],ir[i],ir[r],{[ir.fullWidth]:l},{[ir.dashedBorder]:u},{[ir.onlyIcon]:!n&&f},_),type:m}),f&&d==="left"&&H.createElement(gh,{svgIconComponent:f,className:ir.icon}),n,f&&d==="right"&&H.createElement(gh,{svgIconComponent:f,className:ir.icon}))};R1.displayName="Button";T.forwardRef(R1);var jO="ErrorMessage-module_errorMessageWrapper__rSdCu";ct(`.ErrorMessage-module_errorMessageWrapper__rSdCu {\r
  color: var(--component-error_message-color-text);\r
  font-size: var(--component-error_message-font_size-xs);\r
}\r
`);const z1=({id:e,children:t,ariaLabel:n})=>H.createElement("div",{"aria-label":n,className:jO,"data-testid":"ErrorMessage",id:e,role:"alertdialog"},t);function Mg(e,t){T.useEffect(()=>(document.addEventListener(e,t),()=>document.removeEventListener(e,t)),[e,t])}function Ud(e,t){T.useEffect(()=>{const n=r=>{r.key===e&&t()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[e,t])}function UO(e){const t=T.useRef();return T.useEffect(()=>{t.current=e},[e]),t.current}z1.displayName="ErrorMessage";const Wp=(e,t)=>{const n=T.useRef(!0);T.useEffect(()=>{if(!n.current)return e();n.current=!1},t)};function A1(e,t){if(e===t)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function B1(e){return e.length===new Set(e).size}var $O="Tabs-module_tabs__QzIkz",ZO="Tabs-module_tablist__WR6ag",HO="Tabs-module_tab__IdDYc",WO="Tabs-module_selected__TxfYv",VO="Tabs-module_divider__-r5Cd",qO="Tabs-module_tabpanel__0vR1c";ct(`@import 'https://altinncdn.no/fonts/altinn-din/altinn-din.css';\r
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
`);const Dg=e=>e.replace(/\s/,"_"),N1=({activeTab:e,items:t,onChange:n})=>{const r=T.useId(),i=t.map(({name:w,content:C,value:y,tabId:b,panelId:S})=>{const P=y??w;return{name:w,content:C,value:P,tabId:b??r+Dg(P)+"-tab",panelId:S??r+Dg(P)+"-panel"}});if(!B1(i.map(({value:w})=>w)))throw Error("Each tab value must be unique.");if(e!==void 0&&!i.some(w=>w.value===e))throw Error("The given active tab value must exist in the list of items.");const a=w=>i.findIndex(C=>C.value===w),l=e??i[0].value,[u,d]=T.useState(l),[f,m]=T.useState(a(l));T.useEffect(()=>d(l),[l]);const _=T.useRef(null),p=i.length-1;Wp(()=>{var w;(w=_.current)===null||w===void 0||w.querySelectorAll('[role="tab"]')[f].focus()},[f]);const g=w=>{u!==w&&n&&n(w),d(w),m(a(w))},x=w=>C=>{switch(C.key){case"ArrowRight":f!==void 0&&m(f===p?0:f+1);break;case"ArrowLeft":f!==void 0&&m(f===0?p:f-1);break;case"Space":g(w)}};return H.createElement("div",{className:$O},H.createElement("div",{className:ZO,ref:_,role:"tablist"},i.map((w,C)=>{const y=w.value===u;return H.createElement("button",{"aria-controls":w.panelId,"aria-selected":y,className:St(HO,y&&WO),id:w.tabId,key:w.value,onClick:()=>g(w.value),onKeyDown:x(w.value),role:"tab",tabIndex:f===C?0:-1},w.name)})),H.createElement("hr",{className:VO}),i.map(w=>H.createElement("div",{className:qO,"aria-labelledby":w.tabId,hidden:w.value!==u,id:w.panelId,key:w.panelId,role:"tabpanel"},w.content)))};function cs(e){return e.split("-")[1]}function Vp(e){return e==="y"?"height":"width"}function No(e){return e.split("-")[0]}function Cs(e){return["top","bottom"].includes(No(e))?"x":"y"}function Fg(e,t,n){let{reference:r,floating:i}=e;const a=r.x+r.width/2-i.width/2,l=r.y+r.height/2-i.height/2,u=Cs(t),d=Vp(u),f=r[d]/2-i[d]/2,m=u==="x";let _;switch(No(t)){case"top":_={x:a,y:r.y-i.height};break;case"bottom":_={x:a,y:r.y+r.height};break;case"right":_={x:r.x+r.width,y:l};break;case"left":_={x:r.x-i.width,y:l};break;default:_={x:r.x,y:r.y}}switch(cs(t)){case"start":_[u]-=f*(n&&m?-1:1);break;case"end":_[u]+=f*(n&&m?-1:1)}return _}N1.displayName="Tabs";function I1(e){return typeof e!="number"?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(e):{top:e,right:e,bottom:e,left:e}}function ku(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function M1(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:a,rects:l,elements:u,strategy:d}=e,{boundary:f="clippingAncestors",rootBoundary:m="viewport",elementContext:_="floating",altBoundary:p=!1,padding:g=0}=t,x=I1(g),w=u[p?_==="floating"?"reference":"floating":_],C=ku(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(w)))==null||n?w:w.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(u.floating)),boundary:f,rootBoundary:m,strategy:d})),y=_==="floating"?{...l.floating,x:r,y:i}:l.reference,b=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u.floating)),S=await(a.isElement==null?void 0:a.isElement(b))&&await(a.getScale==null?void 0:a.getScale(b))||{x:1,y:1},P=ku(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:b,strategy:d}):y);return{top:(C.top-P.top+x.top)/S.y,bottom:(P.bottom-C.bottom+x.bottom)/S.y,left:(C.left-P.left+x.left)/S.x,right:(P.right-C.right+x.right)/S.x}}const KO=Math.min,QO=Math.max;function wh(e,t,n){return QO(e,KO(t,n))}const jg=e=>({name:"arrow",options:e,async fn(t){const{element:n,padding:r=0}=e||{},{x:i,y:a,placement:l,rects:u,platform:d}=t;if(n==null)return{};const f=I1(r),m={x:i,y:a},_=Cs(l),p=Vp(_),g=await d.getDimensions(n),x=_==="y"?"top":"left",w=_==="y"?"bottom":"right",C=u.reference[p]+u.reference[_]-m[_]-u.floating[p],y=m[_]-u.reference[_],b=await(d.getOffsetParent==null?void 0:d.getOffsetParent(n));let S=b?_==="y"?b.clientHeight||0:b.clientWidth||0:0;S===0&&(S=u.floating[p]);const P=C/2-y/2,R=f[x],M=S-g[p]-f[w],F=S/2-g[p]/2+P,j=wh(R,F,M),V=cs(l)!=null&&F!=j&&u.reference[p]/2-(F<R?f[x]:f[w])-g[p]/2<0;return{[_]:m[_]-(V?F<R?R-F:M-F:0),data:{[_]:j,centerOffset:F-j}}}}),GO={left:"right",right:"left",bottom:"top",top:"bottom"};function pl(e){return e.replace(/left|right|bottom|top/g,t=>GO[t])}const XO={start:"end",end:"start"};function $d(e){return e.replace(/start|end/g,t=>XO[t])}const JO=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:r,middlewareData:i,rects:a,initialPlacement:l,platform:u,elements:d}=t,{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:_,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:x=!0,...w}=e,C=No(r),y=No(l)===l,b=await(u.isRTL==null?void 0:u.isRTL(d.floating)),S=_||(y||!x?[pl(l)]:function($){const z=pl($);return[$d($),z,$d(z)]}(l));_||g==="none"||S.push(...function($,z,ee,me){const re=cs($);let fe=function(U,te,I){const oe=["left","right"],q=["right","left"],O=["top","bottom"],N=["bottom","top"];switch(U){case"top":case"bottom":return I?te?q:oe:te?oe:q;case"left":case"right":return te?O:N;default:return[]}}(No($),ee==="start",me);return re&&(fe=fe.map(U=>U+"-"+re),z&&(fe=fe.concat(fe.map($d)))),fe}(l,x,g,b));const P=[l,...S],R=await M1(t,w),M=[];let F=((n=i.flip)==null?void 0:n.overflows)||[];if(f&&M.push(R[C]),m){const{main:$,cross:z}=function(ee,me,re){re===void 0&&(re=!1);const fe=cs(ee),U=Cs(ee),te=Vp(U);let I=U==="x"?fe===(re?"end":"start")?"right":"left":fe==="start"?"bottom":"top";return me.reference[te]>me.floating[te]&&(I=pl(I)),{main:I,cross:pl(I)}}(r,a,b);M.push(R[$],R[z])}if(F=[...F,{placement:r,overflows:M}],!M.every($=>$<=0)){var j;const $=(((j=i.flip)==null?void 0:j.index)||0)+1,z=P[$];if(z)return{data:{index:$,overflows:F},reset:{placement:z}};let ee="bottom";switch(p){case"bestFit":{var V;const me=(V=F.map(re=>[re,re.overflows.filter(fe=>fe>0).reduce((fe,U)=>fe+U,0)]).sort((re,fe)=>re[1]-fe[1])[0])==null?void 0:V[0].placement;me&&(ee=me);break}case"initialPlacement":ee=l}if(r!==ee)return{reset:{placement:ee}}}return{}}}},YO=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,i=await async function(a,l){const{placement:u,platform:d,elements:f}=a,m=await(d.isRTL==null?void 0:d.isRTL(f.floating)),_=No(u),p=cs(u),g=Cs(u)==="x",x=["left","top"].includes(_)?-1:1,w=m&&g?-1:1,C=typeof l=="function"?l(a):l;let{mainAxis:y,crossAxis:b,alignmentAxis:S}=typeof C=="number"?{mainAxis:C,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...C};return p&&typeof S=="number"&&(b=p==="end"?-1*S:S),g?{x:b*w,y:y*x}:{x:y*x,y:b*w}}(t,e);return{x:n+i.x,y:r+i.y,data:i}}}};function dn(e){var t;return((t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Qn(e){return dn(e).getComputedStyle(e)}function ao(e){return F1(e)?(e.nodeName||"").toLowerCase():""}let ml;function D1(){if(ml)return ml;const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?(ml=e.brands.map(t=>t.brand+"/"+t.version).join(" "),ml):navigator.userAgent}function yr(e){return e instanceof dn(e).HTMLElement}function Ln(e){return e instanceof dn(e).Element}function F1(e){return e instanceof dn(e).Node}function Ug(e){return typeof ShadowRoot>"u"?!1:e instanceof dn(e).ShadowRoot||e instanceof ShadowRoot}function Sc(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Qn(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function eT(e){return["table","td","th"].includes(ao(e))}function kh(e){const t=/firefox/i.test(D1()),n=Qn(e),r=n.backdropFilter||n.WebkitBackdropFilter;return n.transform!=="none"||n.perspective!=="none"||!!r&&r!=="none"||t&&n.willChange==="filter"||t&&!!n.filter&&n.filter!=="none"||["transform","perspective"].some(i=>n.willChange.includes(i))||["paint","layout","strict","content"].some(i=>{const a=n.contain;return a!=null&&a.includes(i)})}function j1(){return!/^((?!chrome|android).)*safari/i.test(D1())}function qp(e){return["html","body","#document"].includes(ao(e))}const $g=Math.min,$a=Math.max,Su=Math.round;function U1(e){const t=Qn(e);let n=parseFloat(t.width),r=parseFloat(t.height);const i=e.offsetWidth,a=e.offsetHeight,l=Su(n)!==i||Su(r)!==a;return l&&(n=i,r=a),{width:n,height:r,fallback:l}}function $1(e){return Ln(e)?e:e.contextElement}const Z1={x:1,y:1};function Li(e){const t=$1(e);if(!yr(t))return Z1;const n=t.getBoundingClientRect(),{width:r,height:i,fallback:a}=U1(t);let l=(a?Su(n.width):n.width)/r,u=(a?Su(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),u&&Number.isFinite(u)||(u=1),{x:l,y:u}}function Zo(e,t,n,r){var i,a;t===void 0&&(t=!1),n===void 0&&(n=!1);const l=e.getBoundingClientRect(),u=$1(e);let d=Z1;t&&(r?Ln(r)&&(d=Li(r)):d=Li(e));const f=u?dn(u):window,m=!j1()&&n;let _=(l.left+(m&&((i=f.visualViewport)==null?void 0:i.offsetLeft)||0))/d.x,p=(l.top+(m&&((a=f.visualViewport)==null?void 0:a.offsetTop)||0))/d.y,g=l.width/d.x,x=l.height/d.y;if(u){const w=dn(u),C=r&&Ln(r)?dn(r):r;let y=w.frameElement;for(;y&&r&&C!==w;){const b=Li(y),S=y.getBoundingClientRect(),P=getComputedStyle(y);S.x+=(y.clientLeft+parseFloat(P.paddingLeft))*b.x,S.y+=(y.clientTop+parseFloat(P.paddingTop))*b.y,_*=b.x,p*=b.y,g*=b.x,x*=b.y,_+=S.x,p+=S.y,y=dn(y).frameElement}}return{width:g,height:x,top:p,right:_+g,bottom:p+x,left:_,x:_,y:p}}function Jr(e){return((F1(e)?e.ownerDocument:e.document)||window.document).documentElement}function Pc(e){return Ln(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function H1(e){return Zo(Jr(e)).left+Pc(e).scrollLeft}function tT(e,t,n){const r=yr(t),i=Jr(t),a=Zo(e,!0,n==="fixed",t);let l={scrollLeft:0,scrollTop:0};const u={x:0,y:0};if(r||!r&&n!=="fixed")if((ao(t)!=="body"||Sc(i))&&(l=Pc(t)),yr(t)){const d=Zo(t,!0);u.x=d.x+t.clientLeft,u.y=d.y+t.clientTop}else i&&(u.x=H1(i));return{x:a.left+l.scrollLeft-u.x,y:a.top+l.scrollTop-u.y,width:a.width,height:a.height}}function ds(e){if(ao(e)==="html")return e;const t=e.assignedSlot||e.parentNode||(Ug(e)?e.host:null)||Jr(e);return Ug(t)?t.host:t}function Zg(e){return yr(e)&&Qn(e).position!=="fixed"?e.offsetParent:null}function Hg(e){const t=dn(e);let n=Zg(e);for(;n&&eT(n)&&Qn(n).position==="static";)n=Zg(n);return n&&(ao(n)==="html"||ao(n)==="body"&&Qn(n).position==="static"&&!kh(n))?t:n||function(r){let i=ds(r);for(;yr(i)&&!qp(i);){if(kh(i))return i;i=ds(i)}return null}(e)||t}function W1(e){const t=ds(e);return qp(t)?e.ownerDocument.body:yr(t)&&Sc(t)?t:W1(t)}function Yr(e,t){var n;t===void 0&&(t=[]);const r=W1(e),i=r===((n=e.ownerDocument)==null?void 0:n.body),a=dn(r);return i?t.concat(a,a.visualViewport||[],Sc(r)?r:[]):t.concat(r,Yr(r))}function Wg(e,t,n){return t==="viewport"?ku(function(r,i){const a=dn(r),l=Jr(r),u=a.visualViewport;let d=l.clientWidth,f=l.clientHeight,m=0,_=0;if(u){d=u.width,f=u.height;const p=j1();(p||!p&&i==="fixed")&&(m=u.offsetLeft,_=u.offsetTop)}return{width:d,height:f,x:m,y:_}}(e,n)):Ln(t)?function(r,i){const a=Zo(r,!0,i==="fixed"),l=a.top+r.clientTop,u=a.left+r.clientLeft,d=yr(r)?Li(r):{x:1,y:1},f=r.clientWidth*d.x,m=r.clientHeight*d.y,_=u*d.x,p=l*d.y;return{top:p,left:_,right:_+f,bottom:p+m,x:_,y:p,width:f,height:m}}(t,n):ku(function(r){var i;const a=Jr(r),l=Pc(r),u=(i=r.ownerDocument)==null?void 0:i.body,d=$a(a.scrollWidth,a.clientWidth,u?u.scrollWidth:0,u?u.clientWidth:0),f=$a(a.scrollHeight,a.clientHeight,u?u.scrollHeight:0,u?u.clientHeight:0);let m=-l.scrollLeft+H1(r);const _=-l.scrollTop;return Qn(u||a).direction==="rtl"&&(m+=$a(a.clientWidth,u?u.clientWidth:0)-d),{width:d,height:f,x:m,y:_}}(Jr(e)))}const nT={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const a=[...n==="clippingAncestors"?function(d,f){const m=f.get(d);if(m)return m;let _=Yr(d).filter(w=>Ln(w)&&ao(w)!=="body"),p=null;const g=Qn(d).position==="fixed";let x=g?ds(d):d;for(;Ln(x)&&!qp(x);){const w=Qn(x),C=kh(x);(g?C||p:C||w.position!=="static"||!p||!["absolute","fixed"].includes(p.position))?p=w:_=_.filter(y=>y!==x),x=ds(x)}return f.set(d,_),_}(t,this._c):[].concat(n),r],l=a[0],u=a.reduce((d,f)=>{const m=Wg(t,f,i);return d.top=$a(m.top,d.top),d.right=$g(m.right,d.right),d.bottom=$g(m.bottom,d.bottom),d.left=$a(m.left,d.left),d},Wg(t,l,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e;const i=yr(n),a=Jr(n);if(n===a)return t;let l={scrollLeft:0,scrollTop:0},u={x:1,y:1};const d={x:0,y:0};if((i||!i&&r!=="fixed")&&((ao(n)!=="body"||Sc(a))&&(l=Pc(n)),yr(n))){const f=Zo(n);u=Li(n),d.x=f.x+n.clientLeft,d.y=f.y+n.clientTop}return{width:t.width*u.x,height:t.height*u.y,x:t.x*u.x-l.scrollLeft*u.x+d.x,y:t.y*u.y-l.scrollTop*u.y+d.y}},isElement:Ln,getDimensions:function(e){return U1(e)},getOffsetParent:Hg,getDocumentElement:Jr,getScale:Li,async getElementRects(e){let{reference:t,floating:n,strategy:r}=e;const i=this.getOffsetParent||Hg,a=this.getDimensions;return{reference:tT(t,await i(n),r),floating:{x:0,y:0,...await a(n)}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>Qn(e).direction==="rtl"};function rT(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:l=!0,animationFrame:u=!1}=r,d=i&&!u,f=d||a?[...Ln(e)?Yr(e):e.contextElement?Yr(e.contextElement):[],...Yr(t)]:[];f.forEach(g=>{d&&g.addEventListener("scroll",n,{passive:!0}),a&&g.addEventListener("resize",n)});let m,_=null;if(l){let g=!0;_=new ResizeObserver(()=>{g||n(),g=!1}),Ln(e)&&!u&&_.observe(e),Ln(e)||!e.contextElement||u||_.observe(e.contextElement),_.observe(t)}let p=u?Zo(e):null;return u&&function g(){const x=Zo(e);!p||x.x===p.x&&x.y===p.y&&x.width===p.width&&x.height===p.height||n(),p=x,m=requestAnimationFrame(g)}(),n(),()=>{var g;f.forEach(x=>{d&&x.removeEventListener("scroll",n),a&&x.removeEventListener("resize",n)}),(g=_)==null||g.disconnect(),_=null,u&&cancelAnimationFrame(m)}}const oT=(e,t,n)=>{const r=new Map,i={platform:nT,...n},a={...i.platform,_c:r};return(async(l,u,d)=>{const{placement:f="bottom",strategy:m="absolute",middleware:_=[],platform:p}=d,g=_.filter(Boolean),x=await(p.isRTL==null?void 0:p.isRTL(u));let w=await p.getElementRects({reference:l,floating:u,strategy:m}),{x:C,y}=Fg(w,f,x),b=f,S={},P=0;for(let R=0;R<g.length;R++){const{name:M,fn:F}=g[R],{x:j,y:V,data:$,reset:z}=await F({x:C,y,initialPlacement:f,placement:b,strategy:m,middlewareData:S,rects:w,platform:p,elements:{reference:l,floating:u}});C=j??C,y=V??y,S={...S,[M]:{...S[M],...$}},z&&P<=50&&(P++,typeof z=="object"&&(z.placement&&(b=z.placement),z.rects&&(w=z.rects===!0?await p.getElementRects({reference:l,floating:u,strategy:m}):z.rects),{x:C,y}=Fg(w,b,x)),R=-1)}return{x:C,y,placement:b,strategy:m,middlewareData:S}})(e,t,{...i,platform:a})},iT=e=>{const{element:t,padding:n}=e;return{name:"arrow",options:e,fn(r){return i=t,Object.prototype.hasOwnProperty.call(i,"current")?t.current!=null?jg({element:t.current,padding:n}).fn(r):{}:t?jg({element:t,padding:n}).fn(r):{};var i}}};var _l=typeof document<"u"?T.useLayoutEffect:T.useEffect;function Pu(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!=0;)if(!Pu(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!=0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!=0;){const a=i[r];if((a!=="_owner"||!e.$$typeof)&&!Pu(e[a],t[a]))return!1}return!0}return e!=e&&t!=t}function aT(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],whileElementsMounted:i,open:a}=e,[l,u]=T.useState({x:null,y:null,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[d,f]=T.useState(r);Pu(d,r)||f(r);const m=T.useRef(null),_=T.useRef(null),p=T.useRef(l),g=function(j){const V=T.useRef(j);return _l(()=>{V.current=j}),V}(i),[x,w]=T.useState(null),[C,y]=T.useState(null),b=T.useCallback(j=>{m.current!==j&&(m.current=j,w(j))},[]),S=T.useCallback(j=>{_.current!==j&&(_.current=j,y(j))},[]),P=T.useCallback(()=>{m.current&&_.current&&oT(m.current,_.current,{middleware:d,placement:t,strategy:n}).then(j=>{const V={...j,isPositioned:!0};R.current&&!Pu(p.current,V)&&(p.current=V,Bi.flushSync(()=>{u(V)}))})},[d,t,n]);_l(()=>{a===!1&&p.current.isPositioned&&(p.current.isPositioned=!1,u(j=>({...j,isPositioned:!1})))},[a]);const R=T.useRef(!1);_l(()=>(R.current=!0,()=>{R.current=!1}),[]),_l(()=>{if(x&&C){if(g.current)return g.current(x,C,P);P()}},[x,C,P,g]);const M=T.useMemo(()=>({reference:m,floating:_,setReference:b,setFloating:S}),[b,S]),F=T.useMemo(()=>({reference:x,floating:C}),[x,C]);return T.useMemo(()=>({...l,update:P,refs:M,elements:F,reference:b,floating:S}),[l,P,M,F,b,S])}var V1=typeof document<"u"?T.useLayoutEffect:T.useEffect;let Zd=!1,sT=0;const Vg=()=>"floating-ui-"+sT++,qg=Ha["useId".toString()]||function(){const[e,t]=T.useState(()=>Zd?Vg():void 0);return V1(()=>{e==null&&t(Vg())},[]),T.useEffect(()=>{Zd||(Zd=!0)},[]),e},lT=T.createContext(null),uT=T.createContext(null),q1=()=>T.useContext(uT);function K1(e){return e?.ownerDocument||document}function Q1(e){return K1(e).defaultView||window}function zo(e){return!!e&&e instanceof Q1(e).Element}function Kp(e){return!!e&&e instanceof Q1(e).HTMLElement}function cT(e){if(e.mozInputSource===0&&e.isTrusted)return!0;const t=/Android/i;return(t.test(function(){const n=navigator.userAgentData;return n!=null&&n.platform?n.platform:navigator.platform}())||t.test(function(){const n=navigator.userAgentData;return n&&Array.isArray(n.brands)?n.brands.map(r=>{let{brand:i,version:a}=r;return i+"/"+a}).join(" "):navigator.userAgent}()))&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function dT(e){return e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType!=="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0}function Kg(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function Hd(e,t){let n=e.filter(i=>{var a;return i.parentId===t&&((a=i.context)==null?void 0:a.open)})||[],r=n;for(;r.length;)r=e.filter(i=>{var a;return(a=r)==null?void 0:a.some(l=>{var u;return i.parentId===l.id&&((u=i.context)==null?void 0:u.open)})})||[],n=n.concat(r);return n}const fT=Ha["useInsertionEffect".toString()]||(e=>e());function G1(e){const t=T.useRef(()=>{});return fT(()=>{t.current=e}),T.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current==null?void 0:t.current(...r)},[])}function Qg(e){return Kp(e.target)&&e.target.tagName==="BUTTON"}function Gg(e){return function(t){return Kp(t)&&t.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])")}(e)}function Wd(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}const hT={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},pT={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},mT=function(e,t){let{open:n,onOpenChange:r,events:i,nodeId:a,elements:{reference:l,domReference:u,floating:d}}=e,{enabled:f=!0,escapeKey:m=!0,outsidePress:_=!0,outsidePressEvent:p="pointerdown",referencePress:g=!1,referencePressEvent:x="pointerdown",ancestorScroll:w=!1,bubbles:C=!0}=t===void 0?{}:t;const y=q1(),b=(((S=T.useContext(lT))==null?void 0:S.id)||null)!=null;var S;const P=G1(typeof _=="function"?_:()=>!1),R=typeof _=="function"?P:_,M=T.useRef(!1),{escapeKeyBubbles:F,outsidePressBubbles:j}=function(V){var $,z;return V===void 0&&(V=!0),{escapeKeyBubbles:typeof V=="boolean"?V:($=V.escapeKey)==null||$,outsidePressBubbles:typeof V=="boolean"?V:(z=V.outsidePress)==null||z}}(C);return T.useEffect(()=>{if(!n||!f)return;function V(re){if(re.key==="Escape"){if(!F&&y&&Hd(y.nodesRef.current,a).length>0)return;i.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),r(!1)}}function $(re){const fe=M.current;if(M.current=!1,fe||typeof R=="function"&&!R(re))return;const U=function(I){return"composedPath"in I?I.composedPath()[0]:I.target}(re);if(Kp(U)&&d){const I=d.ownerDocument.defaultView||window,oe=U.scrollWidth>U.clientWidth,q=U.scrollHeight>U.clientHeight;let O=q&&re.offsetX>U.clientWidth;if(q&&I.getComputedStyle(U).direction==="rtl"&&(O=re.offsetX<=U.offsetWidth-U.clientWidth),O||oe&&re.offsetY>U.clientHeight)return}const te=y&&Hd(y.nodesRef.current,a).some(I=>{var oe;return Wd(re,(oe=I.context)==null?void 0:oe.elements.floating)});Wd(re,d)||Wd(re,u)||te||!j&&y&&Hd(y.nodesRef.current,a).length>0||(i.emit("dismiss",{type:"outsidePress",data:{returnFocus:b?{preventScroll:!0}:cT(re)||dT(re)}}),r(!1))}function z(){r(!1)}const ee=K1(d);m&&ee.addEventListener("keydown",V),R&&ee.addEventListener(p,$);let me=[];return w&&(zo(u)&&(me=Yr(u)),zo(d)&&(me=me.concat(Yr(d))),!zo(l)&&l&&l.contextElement&&(me=me.concat(Yr(l.contextElement)))),me=me.filter(re=>{var fe;return re!==((fe=ee.defaultView)==null?void 0:fe.visualViewport)}),me.forEach(re=>{re.addEventListener("scroll",z,{passive:!0})}),()=>{m&&ee.removeEventListener("keydown",V),R&&ee.removeEventListener(p,$),me.forEach(re=>{re.removeEventListener("scroll",z)})}},[d,u,l,m,R,p,i,y,a,n,r,w,f,F,j,b]),T.useEffect(()=>{M.current=!1},[R,p]),T.useMemo(()=>f?{reference:{[hT[x]]:()=>{g&&(i.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),r(!1))}},floating:{[pT[p]]:()=>{M.current=!0}}}:{},[f,i,g,p,x,r])};function Qp(e){return T.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})},e)}function _T(e){e===void 0&&(e={});const{open:t=!1,onOpenChange:n,nodeId:r}=e,i=aT(e),a=q1(),l=T.useRef(null),u=T.useRef({}),d=T.useState(()=>function(){const y=new Map;return{emit(b,S){var P;(P=y.get(b))==null||P.forEach(R=>R(S))},on(b,S){y.set(b,[...y.get(b)||[],S])},off(b,S){y.set(b,(y.get(b)||[]).filter(P=>P!==S))}}}())[0],[f,m]=T.useState(null),_=T.useCallback(y=>{const b=zo(y)?{getBoundingClientRect:()=>y.getBoundingClientRect(),contextElement:y}:y;i.refs.setReference(b)},[i.refs]),p=T.useCallback(y=>{(zo(y)||y===null)&&(l.current=y,m(y)),(zo(i.refs.reference.current)||i.refs.reference.current===null||y!==null&&!zo(y))&&i.refs.setReference(y)},[i.refs]),g=T.useMemo(()=>({...i.refs,setReference:p,setPositionReference:_,domReference:l}),[i.refs,p,_]),x=T.useMemo(()=>({...i.elements,domReference:f}),[i.elements,f]),w=G1(n),C=T.useMemo(()=>({...i,refs:g,elements:x,dataRef:u,nodeId:r,events:d,open:t,onOpenChange:w}),[i,r,d,t,w,g,x]);return V1(()=>{const y=a?.nodesRef.current.find(b=>b.id===r);y&&(y.context=C)}),T.useMemo(()=>({...i,context:C,refs:g,reference:p,positionReference:_}),[i,g,C,p,_])}function Vd(e,t,n){const r=new Map;return{...n==="floating"&&{tabIndex:-1},...e,...t.map(i=>i?i[n]:null).concat(e).reduce((i,a)=>(a&&Object.entries(a).forEach(l=>{let[u,d]=l;var f;u.indexOf("on")===0?(r.has(u)||r.set(u,[]),typeof d=="function"&&((f=r.get(u))==null||f.push(d),i[u]=function(){for(var m,_=arguments.length,p=new Array(_),g=0;g<_;g++)p[g]=arguments[g];(m=r.get(u))==null||m.forEach(x=>x(...p))})):i[u]=d}),i),{})}}var Cu,Sh={popover:"Popover-module_popover__E9K9X",default:"Popover-module_default__TlPJp",info:"Popover-module_info__VKCAP",warning:"Popover-module_warning__o27i9",danger:"Popover-module_danger__9bIyx",arrow:"Popover-module_arrow__5A-0e"};function vT(e){var{variant:t=Cu.Default,arrow:n,initialOpen:r,placement:i,offset:a,open:l,onOpenChange:u}=e,d=Ki(e,["variant","arrow","initialOpen","placement","offset","open","onOpenChange"]);const[f,m]=T.useState(r),_=l??f,p=u??m,g=T.useRef(null),x=_T({placement:i,open:_,onOpenChange:p,whileElementsMounted:rT,middleware:[YO(a??(n?12:4)),JO({padding:5,fallbackPlacements:["bottom","top"]}),(w={padding:5},w===void 0&&(w={}),{name:"shift",options:w,async fn(R){const{x:M,y:F,placement:j}=R,{mainAxis:V=!0,crossAxis:$=!1,limiter:z={fn:q=>{let{x:O,y:N}=q;return{x:O,y:N}}},...ee}=w,me={x:M,y:F},re=await M1(R,ee),fe=Cs(No(j)),U=fe==="x"?"y":"x";let te=me[fe],I=me[U];if(V){const q=fe==="y"?"bottom":"right";te=wh(te+re[fe==="y"?"top":"left"],te,te-re[q])}if($){const q=U==="y"?"bottom":"right";I=wh(I+re[U==="y"?"top":"left"],I,I-re[q])}const oe=z.fn({...R,[fe]:te,[U]:I});return{...oe,data:{x:oe.x-M,y:oe.y-F}}}}),iT({element:g,padding:8})]});var w;const C=x.context,y=function(R,M){let{open:F,onOpenChange:j,dataRef:V,refs:$}=R,{enabled:z=!0,event:ee="click",toggle:me=!0,ignoreMouse:re=!1,keyboardHandlers:fe=!0}=M===void 0?{}:M;const U=T.useRef();return T.useMemo(()=>z?{reference:{onPointerDown(te){U.current=te.pointerType},onMouseDown(te){te.button===0&&(Kg(U.current,!0)&&re||ee!=="click"&&(F?!me||V.current.openEvent&&V.current.openEvent.type!=="mousedown"||j(!1):(te.preventDefault(),j(!0)),V.current.openEvent=te.nativeEvent))},onClick(te){V.current.__syncReturnFocus||(ee==="mousedown"&&U.current?U.current=void 0:Kg(U.current,!0)&&re||(F?!me||V.current.openEvent&&V.current.openEvent.type!=="click"||j(!1):j(!0),V.current.openEvent=te.nativeEvent))},onKeyDown(te){U.current=void 0,fe&&(Qg(te)||(te.key!==" "||Gg($.domReference.current)||te.preventDefault(),te.key==="Enter"&&(F?me&&j(!1):j(!0))))},onKeyUp(te){fe&&(Qg(te)||Gg($.domReference.current)||te.key===" "&&(F?me&&j(!1):j(!0)))}}}:{},[z,V,ee,re,fe,$,me,F,j])}(C,{enabled:l==null}),b=mT(C,{referencePress:!1}),S=function(R,M){let{open:F}=R,{enabled:j=!0,role:V="dialog"}=M===void 0?{}:M;const $=qg(),z=qg();return T.useMemo(()=>{const ee={id:$,role:V};return j?V==="tooltip"?{reference:{"aria-describedby":F?$:void 0},floating:ee}:{reference:{"aria-expanded":F?"true":"false","aria-haspopup":V==="alertdialog"?"dialog":V,"aria-controls":F?$:void 0,...V==="listbox"&&{role:"combobox"},...V==="menu"&&{id:z}},floating:{...ee,...V==="menu"&&{"aria-labelledby":z}}}:{}},[j,V,F,$,z])}(C),P=function(R){R===void 0&&(R=[]);const M=R,F=T.useCallback($=>Vd($,R,"reference"),M),j=T.useCallback($=>Vd($,R,"floating"),M),V=T.useCallback($=>Vd($,R,"item"),M);return T.useMemo(()=>({getReferenceProps:F,getFloatingProps:j,getItemProps:V}),[F,j,V])}([y,b,S]);return T.useMemo(()=>Object.assign(Object.assign(Object.assign(Object.assign({open:_,setOpen:p},P),x),d),{arrow:n,arrowRef:g,variant:t}),[_,p,P,x,d,n,g,t])}ct(`.Popover-module_popover__E9K9X {\r
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
`),function(e){e.Default="default",e.Info="info",e.Warning="warning",e.Danger="danger"}(Cu||(Cu={}));const X1=T.createContext(null),Gp=()=>{const e=T.useContext(X1);if(e==null)throw new Error("Popover components must be wrapped in <Popover />");return e};function J1(e){var{children:t,trigger:n,arrow:r=!0,initialOpen:i=!1}=e,a=Ki(e,["children","trigger","arrow","initialOpen"]);const l=vT(Object.assign({arrow:r,initialOpen:i},a));return H.createElement(X1.Provider,{value:l},H.createElement(gT,null,n),H.createElement(yT,null,t,l.arrow&&H.createElement(bT,null)))}J1.displayName="Popover";const gT=T.forwardRef(function(e,t){var{children:n}=e,r=Ki(e,["children"]);const i=Gp(),a=n.ref,l=Qp([i.reference,t,a]);return T.isValidElement(n)?T.cloneElement(n,i.getReferenceProps(Object.assign(Object.assign(Object.assign({ref:l},r),n.props),{"data-state":i.open?"open":"closed","aria-expanded":i.open}))):null}),yT=T.forwardRef(function(e,t){var n,r;const i=Gp(),a=Qp([i.floating,t]);return i.open?H.createElement("div",Object.assign({ref:a,style:{position:i.strategy,top:(n=i.y)!==null&&n!==void 0?n:0,left:(r=i.x)!==null&&r!==void 0?r:0,width:"max-content"},"data-placement":i.placement,className:St(Sh.popover,Sh[i.variant],i.className)},i.getFloatingProps(e),{tabIndex:-1,role:"dialog"}),e.children):null}),bT=T.forwardRef(function(e,t){var n,r;const i=Gp(),a=Qp([i.arrowRef,t]),l=(n=i.middlewareData.arrow)===null||n===void 0?void 0:n.x,u=(r=i.middlewareData.arrow)===null||r===void 0?void 0:r.y,d={top:"bottom",right:"left",bottom:"top",left:"right"}[i.placement.split("-")[0]];return H.createElement("div",Object.assign({ref:a,style:Object.assign(Object.assign(Object.assign({},l!=null?{left:l}:{}),u!=null?{top:u}:{}),d?{[d]:"-7px"}:{}),className:Sh.arrow},e))});var xT="utility-module_visuallyHidden__R-C67";ct(`/**\r
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
`);var Ho,xo={helpTextButton:"HelpText-module_helpTextButton__Ir4Uk",helpTextIconFilled:"HelpText-module_helpTextIconFilled__SjZ8e",helpTextIcon:"HelpText-module_helpTextIcon__ex2WU",helpTextContent:"HelpText-module_helpTextContent__EDHac",small:"HelpText-module_small__Y44D4",xsmall:"HelpText-module_xsmall__peaFV"};ct(`.HelpText-module_helpTextButton__Ir4Uk {\r
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Ho||(Ho={}));const Cc=e=>{var{className:t,children:n,title:r,placement:i="right",onClick:a,size:l=Ho.Small}=e,u=Ki(e,["className","children","title","placement","onClick","size"]);const[d,f]=T.useState(!1);return H.createElement(J1,{variant:Cu.Info,placement:i,open:d,onOpenChange:f,className:xo.helpTextContent,trigger:H.createElement("button",Object.assign({},u,{className:St(xo.helpTextButton,t),onClick:m=>{f(_=>!_),a?.(m)}}),H.createElement(FO,{className:St(xo.helpTextIcon,xo.helpTextIconFilled,xo[l],t),"data-state":d?"open":"closed","aria-hidden":!0}),H.createElement(IO,{className:St(xo.helpTextIcon,xo[l],t),"data-state":d?"open":"closed","aria-hidden":!0}),H.createElement("span",{className:xT},r))},n)};Cc.displayName="HelpText";var Zi,Lr={fieldSet:"FieldSet-module_fieldSet__GgktD",xsmall:"FieldSet-module_xsmall__y9foq",legendAndHelpText:"FieldSet-module_legendAndHelpText__WDZ-j",legend:"FieldSet-module_legend__PjhoV",legendContent:"FieldSet-module_legendContent__nOeHK",description:"FieldSet-module_description__XKHS-",content:"FieldSet-module_content__aZp-0",errorMessage:"FieldSet-module_errorMessage__nDaJ7"};ct(`.FieldSet-module_fieldSet__GgktD {\r
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Zi||(Zi={}));const Y1=({children:e,className:t,contentClassName:n,description:r,disabled:i,error:a,helpText:l,legend:u,size:d=Zi.Small})=>{const f=d===Zi.Xsmall?Ho.Xsmall:Ho.Small;return H.createElement("fieldset",{className:St(Lr.fieldSet,Lr[d],t),disabled:i},u&&H.createElement("legend",{className:Lr.legend},H.createElement("span",{className:Lr.legendAndHelpText},H.createElement("span",{className:Lr.legendContent},u),l&&H.createElement(Cc,{size:f,title:`Help text for ${u}`},l))),r&&H.createElement("p",{className:Lr.description},r),H.createElement("div",{className:St(Lr.content,n)},e),a&&H.createElement("div",{className:Lr.errorMessage},H.createElement(z1,null,a)))};Y1.displayName="FieldSet";var fs,wn={template:"CheckboxRadioTemplate-module_template__CbnTf",xsmall:"CheckboxRadioTemplate-module_xsmall__JkKoU",small:"CheckboxRadioTemplate-module_small__7fCnT",disabled:"CheckboxRadioTemplate-module_disabled__AUMha",clickable:"CheckboxRadioTemplate-module_clickable__iw4S2",inputWrapper:"CheckboxRadioTemplate-module_inputWrapper__K4Urn",input:"CheckboxRadioTemplate-module_input__O2CzZ",visibleBox:"CheckboxRadioTemplate-module_visibleBox__mj4RB",labelAndDescription:"CheckboxRadioTemplate-module_labelAndDescription__NcntT",label:"CheckboxRadioTemplate-module_label__hsc7R",labelAndHelpText:"CheckboxRadioTemplate-module_labelAndHelpText__JIDAJ",description:"CheckboxRadioTemplate-module_description__FX9dz"};ct(`.CheckboxRadioTemplate-module_template__CbnTf {\r
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(fs||(fs={}));const wT=({checked:e,children:t,className:n,description:r,disabled:i,helpText:a,hideInput:l,hideLabel:u,inputId:d,label:f,name:m,onChange:_,presentation:p,size:g,type:x,value:w})=>{const C=T.useId(),y=d??"input-"+C,b=f?`${y}-label`:void 0,S=r?`${y}-description`:void 0,P=f&&!u,R=!p||typeof f!="object"&&typeof r!="object",M=g===fs.Xsmall?Ho.Xsmall:Ho.Small;return H.createElement(Xg,{className:St(wn.template,wn[g],i&&wn.disabled,n),htmlFor:y,isLabel:R},!l&&H.createElement(Xg,{className:wn.inputWrapper,htmlFor:y,isLabel:!R},H.createElement("input",{"aria-describedby":S,"aria-label":P||typeof f!="string"?void 0:f,"aria-labelledby":P?b:void 0,checked:e!=null&&e,className:wn.input,disabled:i,id:y,name:m,onChange:i?void 0:_,role:p?"presentation":void 0,type:x,value:w}),H.createElement("span",{className:wn.visibleBox},t)),(P||r)&&H.createElement("span",{className:wn.labelAndDescription},P&&H.createElement("span",{className:wn.labelAndHelpText},H.createElement("span",{className:wn.label,id:b},f),a&&H.createElement(Cc,{size:M,title:`Help text for ${f}`},a)),r&&H.createElement("span",{className:wn.description,id:S},r)))},Xg=({children:e,className:t,htmlFor:n,isLabel:r})=>r?H.createElement("label",{className:t+" "+wn.clickable,htmlFor:n},e):H.createElement("span",{className:t},e);var kT="Checkbox-module_checkbox__lSeQj",ST="Checkbox-module_compact__Cl41-",PT="Checkbox-module_error__E-bmD",CT="Checkbox-module_checked__3yAq6",ET="Checkbox-module_disabled__x7-eg",OT="Checkbox-module_readOnly__FamUn",TT="Checkbox-module_visibleBox__G7q8H",LT="Checkbox-module_checkmark__ES9N8";ct(`.Checkbox-module_checkbox__lSeQj {\r
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
`);const ur=({checkboxId:e,checked:t,compact:n,description:r,disabled:i,error:a,helpText:l,hideLabel:u,label:d,name:f,onChange:m,presentation:_,readOnly:p})=>H.createElement(wT,{checked:t,className:St(kT,t&&CT,a&&PT,i&&ET,n&&ST,p&&OT),description:r,disabled:i,helpText:l,hideInput:p,hideLabel:u,inputId:e,label:d,name:f,onChange:m,presentation:_,size:n?fs.Xsmall:fs.Small,type:"checkbox"},H.createElement("span",{className:TT},H.createElement("span",{className:LT})));ur.displayName="Checkbox";var Ri,qd={checkboxGroup:"CheckboxGroup-module_checkboxGroup__LIGFC",compact:"CheckboxGroup-module_compact__IPuN8",vertical:"CheckboxGroup-module_vertical__R-l07",horizontal:"CheckboxGroup-module_horizontal__myCqF"};ct(`.CheckboxGroup-module_checkboxGroup__LIGFC {\r
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
`),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(Ri||(Ri={}));const RT=(e,t)=>{switch(t.type){case"check":return e.concat([t.name]);case"uncheck":return e.filter(n=>n!==t.name);case"reset":return t.state}},Jg=e=>e.filter(({checked:t})=>t).map(({name:t})=>t),Bl=({compact:e,description:t,disabled:n,error:r,helpText:i,items:a,legend:l,onChange:u,presentation:d,variant:f=Ri.Vertical})=>{if(!B1(a.map(g=>g.name)))throw Error("Each name in the checkbox group must be unique.");const[m,_]=T.useReducer(RT,Jg(a));T.useEffect(()=>_({type:"reset",state:Jg(a)}),[a]);const p=UO(m);return Wp(()=>{u&&!n&&!A1(p,m)&&u(m)},[m,u,n]),H.createElement(Y1,{contentClassName:St(qd.checkboxGroup,qd[f],e&&qd.compact),description:t,disabled:n,error:r,helpText:i,legend:l,size:e?Zi.Xsmall:Zi.Small},a.map(g=>H.createElement(ur,{checkboxId:g.checkboxId,checked:m.includes(g.name),compact:e,description:g.description,disabled:n||g.disabled,error:!!r,helpText:g.helpText,key:g.name,label:g.label,name:g.name,onChange:x=>{_({type:x.target.checked?"check":"uncheck",name:g.name})},presentation:d})))};Bl.displayName="CheckboxGroup";var Yg;ct(`.RadioButton-module_radio__-lcP- {\r
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Yg||(Yg={}));var ey,ty;ct(`.RadioGroup-module_radioGroup__pO2pz {\r
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
`),function(e){e.Xsmall="xsmall",e.Small="small"}(ey||(ey={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(ty||(ty={}));var Co,Eu,Io;(function(e){e.Default="default",e.Error="error",e.Disabled="disabled",e.ReadOnlyInfo="readonlyInfo",e.ReadOnlyConfirm="readonlyConfirm"})(Co||(Co={})),function(e){e.ReadOnlyInfo="readonlyInfo",e.ReadOnlyConfirm="readonlyConfirm"}(Eu||(Eu={})),function(e){e.None="none",e.Error="error",e.Search="search"}(Io||(Io={}));const zT=()=>H.createElement("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},H.createElement("path",{d:"M8 0C3.875 0 0.5 3.375 0.5 7.5C0.5 11.625 3.875 15 8 15C12.125 15 15.5 11.625 15.5 7.5C15.5 3.375 12.125 0 8 0ZM8.875 11.25H7.5V9.9375H8.875V11.25ZM8.6875 9H7.6875L7.375 4.125H9L8.6875 9Z",fill:"white"})),AT=()=>H.createElement("svg",{width:"15",height:"15",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},H.createElement("path",{d:"M34 31.5758L23.9289 21.3939C25.5533 19.2929 26.3655 16.8687 26.3655 14.1212C26.3655 7.49495 20.8426 2 14.1827 2C7.52284 2 2 7.49495 2 14.1212C2 20.7475 7.52284 26.2424 14.1827 26.2424C16.9442 26.2424 19.5431 25.2727 21.4924 23.8182L31.7259 34L34 31.5758ZM5.24873 14.1212C5.24873 9.27273 9.30965 5.23232 14.1827 5.23232C19.0558 5.23232 23.1168 9.27273 23.1168 14.1212C23.1168 18.9697 19.0558 23.0101 14.1827 23.0101C9.30965 23.0101 5.24873 18.9697 5.24873 14.1212Z",fill:"black"}));var ny="Icon-module_icon__3YqoF",BT="Icon-module_disabled__e4-Yg";ct(`.Icon-module_icon__3YqoF {\r
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
}`);const NT=({variant:e,disabled:t=!1})=>{switch(e){case Io.Error:return H.createElement("div",{className:ny,"data-testid":"input-icon-error"},H.createElement(zT,null));case Io.Search:return H.createElement("div",{className:St(ny,t&&BT),"data-testid":"input-icon-search"},H.createElement(AT,null));default:return null}};var wo={inputWrapper:"InputWrapper-module_inputWrapper__I-Tcb",withFocusEffect:"InputWrapper-module_withFocusEffect__9DobY",default:"InputWrapper-module_default__SS3Cg",error:"InputWrapper-module_error__FhSCJ",disabled:"InputWrapper-module_disabled__8mIxc",readonlyInfo:"InputWrapper-module_readonlyInfo__mQyMN",readonlyConfirm:"InputWrapper-module_readonlyConfirm__WrHUu",search:"InputWrapper-module_search__SwwFJ",withPadding:"InputWrapper-module_withPadding__6NkNf",field:"InputWrapper-module_field__UA-RS",label:"InputWrapper-module_label__x0-XH"};ct(`.InputWrapper-module_inputWrapper__I-Tcb {\r
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
`);const IT=({disabled:e=!1,inputId:t,inputRenderer:n,isSearch:r=!1,isValid:i=!0,label:a,noFocusEffect:l,noPadding:u,readOnly:d=!1})=>{const f=T.useId(),m=t??f,{variant:_,iconVariant:p}=(({readOnly:g=!1,disabled:x=!1,isValid:w=!0,isSearch:C=!1}={})=>{let y=Io.None;return C&&(y=Io.Search),x?{variant:Co.Disabled,iconVariant:y}:g===!0||g===Eu.ReadOnlyInfo?{variant:Co.ReadOnlyInfo,iconVariant:y}:g===Eu.ReadOnlyConfirm?{variant:Co.ReadOnlyConfirm,iconVariant:y}:w===!1?{variant:Co.Error,iconVariant:Io.Error}:{variant:Co.Default,iconVariant:y}})({disabled:e,isSearch:r,isValid:i,readOnly:d});return H.createElement(H.Fragment,null,a&&H.createElement("label",{className:wo.label,htmlFor:m},a),H.createElement("div",{"data-testid":"InputWrapper",className:St(wo.inputWrapper,wo[_],{[wo.search]:r,[wo.withFocusEffect]:!l,[wo.withPadding]:!u})},H.createElement(NT,{variant:p,disabled:e}),n({className:wo.field,inputId:m,variant:_})))};var MT="MultiSelectItem-module_multiSelectItem__tjklN",DT="MultiSelectItem-module_deleteButton__xRVRz",FT="MultiSelectItem-module_deleteButtonCross__yqZOX";ct(`.MultiSelectItem-module_multiSelectItem__tjklN {\r
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
`);const ex=({deleteButtonLabel:e,disabled:t,onDeleteButtonClick:n,label:r})=>H.createElement("span",{className:MT},H.createElement("span",null,r),H.createElement("button",{"aria-label":e,className:DT,disabled:t,onClick:n},H.createElement("span",{className:FT})));ex.displayName="MultiSelectItem";var bt={select:"Select-module_select__cjdcr",disabled:"Select-module_disabled__8YgjS",expanded:"Select-module_expanded__QPHZ6",optionList:"Select-module_optionList__Lhg-F",usingKeyboard:"Select-module_usingKeyboard__RCPHw",fieldButton:"Select-module_fieldButton__uKwX8",field:"Select-module_field__h-wBy",multiple:"Select-module_multiple__cwGEC",single:"Select-module_single__i2zPs",fieldValue:"Select-module_fieldValue__XgrGc",fieldValues:"Select-module_fieldValues__Xifsp",arrowWrapper:"Select-module_arrowWrapper__meDQz",arrow:"Select-module_arrow__w35wW",deleteButton:"Select-module_deleteButton__hZfr7",deleteButtonCross:"Select-module_deleteButtonCross__OKMwb",option:"Select-module_option__Hvo8n",selected:"Select-module_selected__8A13A",focused:"Select-module_focused__joVjV"};ct(`.Select-module_select__cjdcr {\r
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
.Select-module_select__cjdcr:not(.Select-module_expanded__QPHZ6) .Select-module_optionList__Lhg-F {\r
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
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_field__h-wBy,\r
.Select-module_select__cjdcr.Select-module_single__i2zPs .Select-module_fieldButton__uKwX8 {\r
  align-items: center;\r
  display: inline-flex;\r
  flex-direction: row;\r
  font-family: var(--font_family-default);\r
  font-size: var(--font_size);\r
  min-height: var(--field-height-inside);\r
  position: relative;\r
  width: 100%;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_single__i2zPs .Select-module_fieldValue__XgrGc {\r
  flex: 1;\r
  padding-left: var(--singleselect_field-padding_left);\r
  text-align: left;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_fieldValues__Xifsp {\r
  display: inline-flex;\r
  flex-direction: row;\r
  flex-wrap: wrap;\r
  flex: 1;\r
  gap: var(--multiselect_items-gap);\r
  padding: var(--multiselect_items-padding);\r
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
.Select-module_optionList__Lhg-F {\r
  background-color: var(--option_list-background_color);\r
  border-radius: var(--option_list-border_radius);\r
  border: var(--option_list-border);\r
  box-shadow: var(--option_list-shadow);\r
  box-sizing: border-box;\r
  display: flex;\r
  flex-direction: column;\r
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
.Select-module_option__Hvo8n {\r
  background-color: var(--option-background_color-default);\r
  border-color: var(--option-border_color);\r
  border-style: solid;\r
  border-width: var(--option-border_width) 0 0 0;\r
  box-sizing: border-box;\r
  cursor: var(--interactive_element-cursor);\r
  display: inline-block;\r
  min-height: var(--option-height);\r
  overflow-x: hidden;\r
  padding-left: var(--option-padding_horizontal);\r
  padding-right: var(--option-padding_horizontal);\r
  padding-top: calc(\r
    (var(--option-height) - (var(--font_size) * var(--line-height))) / 2\r
  );\r
  text-align: left;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
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
`);const vl={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},Ph=e=>{const{disabled:t,error:n,hideLabel:r,inputId:i,label:a,multiple:l,onChange:u,options:d,value:f}=e,m=d.map(U=>U.value);if(m.length!==new Set(m).size)throw Error("Each value in the option list must be unique.");const[_,p]=T.useState(l&&f!=null?f:[]),[g,x]=T.useState(l?void 0:f),w=d.findIndex(U=>U.value===g),[C,y]=T.useState(!1);Mg("click",()=>y(!1)),Mg("keydown",()=>y(!0));const[b,S]=T.useState(!1),P=T.useRef(null),R=T.useRef(null);Wp(()=>{l?A1(f,_)||p(f??[]):x(f)},[f]),T.useEffect(()=>{const U=P.current;if(U){const te=U.offsetHeight,I=U.querySelectorAll("li");if(!I.length)return;const oe=I[0].offsetHeight,q=U.scrollTop,O=w*oe,N=O+oe;O>=q&&N<=q+te||(U.scrollTop=O<q?O:N-te)}},[w]);const M=U=>{var te;return(te=d.find(I=>I.value===U))!==null&&te!==void 0?te:{label:"",value:""}},F=(U,te)=>{_?.length||x(te),p(U),u&&u(U)},j=U=>{var te;l?_.includes(U)?V(U):F([..._,U],U):(x(te=U),S(!1),u&&u(te))},V=U=>{F(_.filter(te=>te!==U),U)},$=T.useCallback(()=>{if(g===void 0)x(d[0].value);else{const U=w+1;U>=0&&U<d.length&&x(d[U].value)}S(!0)},[g,w,x,d]),z=T.useCallback(()=>{if(g===void 0)x(d[d.length-1].value);else{const U=w-1;U>=0&&U<d.length&&x(d[U].value)}S(!0)},[g,w,x,d]);Ud(vl.ArrowDown,()=>b&&$()),Ud(vl.ArrowUp,()=>b&&z()),Ud(vl.Enter,()=>b&&l&&g&&j(g));const ee=U=>g===U,me=U=>l?_.includes(U):ee(U),re=T.useId(),fe=R.current?`calc(${R.current.offsetWidth}px + 2 * ${xO.component.input.border_width.default.value})`:void 0;return H.createElement("div",{className:St(bt.select,bt[l?"multiple":"single"],b&&bt.expanded,t&&bt.disabled,C&&bt.usingKeyboard),"data-testid":"select-root"},H.createElement(IT,{disabled:t,inputId:i,inputRenderer:({className:U,inputId:te})=>H.createElement("span",{className:U+" "+bt.field,ref:R},l&&H.createElement(H.Fragment,null,H.createElement("span",{className:bt.fieldValues},_.map(M).map(I=>H.createElement(ex,{deleteButtonLabel:I.deleteButtonLabel,disabled:t!=null&&t,key:I.value,label:I.label,onDeleteButtonClick:()=>V(I.value)}))),H.createElement("button",{"aria-label":e.deleteButtonLabel,className:bt.deleteButton,disabled:!_.length||t,onClick:()=>{F([])}},H.createElement("span",{className:bt.deleteButtonCross}))),H.createElement("button",{"aria-controls":re,"aria-expanded":b,"aria-label":a,className:bt.fieldButton,disabled:t,id:te,onBlur:()=>S(!1),onClick:()=>S(!b),onKeyDown:I=>{Object.values(vl).includes(I.key)&&(I.preventDefault(),S(!0))},role:"combobox",value:l?_:g},!l&&H.createElement("span",{className:bt.fieldValue},M(g).label),H.createElement("span",{className:bt.arrowWrapper},H.createElement("span",{className:bt.arrow})))),isSearch:!1,isValid:!n,label:r?void 0:a,noFocusEffect:l,noPadding:!0,readOnly:!1}),H.createElement("ul",{className:bt.optionList,id:re,ref:P,role:"listbox",style:{width:fe}},d.map(U=>H.createElement("li",{"aria-selected":me(U.value),className:St(bt.option,me(U.value)&&bt.selected,l&&ee(U.value)&&bt.focused),key:U.value,onClick:()=>j(U.value),onMouseDown:te=>te.preventDefault(),onKeyDown:te=>te.preventDefault(),role:"option",value:U.value},U.label))))};Ph.displayName="Select";ct(`.TextArea-module_textArea__Fp7-I {\r
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
`);var hs;(function(e){e.Primary="primary",e.Secondary="secondary"})(hs||(hs={}));const tx=T.createContext(void 0),Xp=()=>{const e=T.useContext(tx);if(e===void 0)throw new Error("useAccordionContext must be used within an AccordionContext");return e};var jT="Accordion-module_accordion__LVhhv";ct(`.Accordion-module_accordion__LVhhv {\r
  --component-accordion-color-background: var(--colors-white);\r
  --component-panel-size-width: 100%;\r
  background-color: var(--component-accordion-color-background);\r
  width: var(--component-panel-size-width);\r
}\r
`);const nx=({children:e,open:t,onClick:n,iconVariant:r=hs.Primary})=>{const i=T.useId(),a=T.useId();return H.createElement("div",{className:jT},H.createElement(tx.Provider,{value:{onClick:n,open:t,headerId:i,contentId:a,iconVariant:r}},e))};nx.displayName="Accordion";const rx=({children:e})=>{const{open:t,contentId:n,headerId:r}=Xp();return H.createElement("div",null,t&&H.createElement("div",{"aria-expanded":t,id:n,"aria-labelledby":r},e))};rx.displayName="AccordionContent";var UT="AccordionHeader-module_accordionHeader__nap0Y",$T="AccordionHeader-module_subtitle__CpDh7",ZT="AccordionHeader-module_withSubtitle__zCXnG",HT="AccordionHeader-module_title__3VVAA",WT="AccordionHeader-module_actions__WCBkS";ct(`.AccordionHeader-module_accordionHeader__nap0Y {\r
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
`);var VT="AccordionIcon-module_accordionIcon__C4yU3",qT="AccordionIcon-module_opened__jWTPV";ct(`.AccordionIcon-module_accordionIcon__C4yU3 {\r
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
`);const KT=e=>H.createElement("svg",Object.assign({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),H.createElement("path",{d:`\r
        M 12.8834 34\r
        L 10      31.0909\r
        L 22.9754 18\r
        L 10       4.90909\r
        L 12.8834  2\r
        L 28.7423 18\r
        L 12.8834 34\r
        Z\r
      `,fill:nO})),QT=e=>H.createElement("svg",Object.assign({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),H.createElement("path",{d:`\r
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
      `,fill:rO})),ox=()=>{const{onClick:e,open:t,iconVariant:n}=Xp(),r={className:St(VT,t&&qT),onClick:e};switch(n){case hs.Primary:return H.createElement(KT,Object.assign({},r));case hs.Secondary:return H.createElement(QT,Object.assign({},r))}};ox.displayName="AccordionIcon";const ix=({children:e,actions:t,subtitle:n})=>{const{onClick:r,open:i,headerId:a,contentId:l}=Xp();return H.createElement("div",{className:St(UT,{[ZT]:n})},H.createElement(ox,null),H.createElement("button",{className:HT,"aria-expanded":i,type:"button",onClick:r,id:a,"aria-controls":l},e,n?.length&&H.createElement("span",{"data-testid":"accordion-header-subtitle",className:$T},n)),H.createElement("div",{className:WT},t))};ix.displayName="AccordionHeader";function ax(e,t){return function(){return e.apply(t,arguments)}}const{toString:sx}=Object.prototype,{getPrototypeOf:Jp}=Object,Yp=(e=>t=>{const n=sx.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),kr=e=>(e=e.toLowerCase(),t=>Yp(t)===e),Ec=e=>t=>typeof t===e,{isArray:Qi}=Array,ps=Ec("undefined");function GT(e){return e!==null&&!ps(e)&&e.constructor!==null&&!ps(e.constructor)&&so(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const lx=kr("ArrayBuffer");function XT(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&lx(e.buffer),t}const JT=Ec("string"),so=Ec("function"),ux=Ec("number"),em=e=>e!==null&&typeof e=="object",YT=e=>e===!0||e===!1,Nl=e=>{if(Yp(e)!=="object")return!1;const t=Jp(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},eL=kr("Date"),tL=kr("File"),nL=kr("Blob"),rL=kr("FileList"),oL=e=>em(e)&&so(e.pipe),iL=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||sx.call(e)===t||so(e.toString)&&e.toString()===t)},aL=kr("URLSearchParams"),sL=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Es(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Qi(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),l=a.length;let u;for(r=0;r<l;r++)u=a[r],t.call(null,e[u],u,e)}}function cx(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const dx=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),fx=e=>!ps(e)&&e!==dx;function Ch(){const{caseless:e}=fx(this)&&this||{},t={},n=(r,i)=>{const a=e&&cx(t,i)||i;Nl(t[a])&&Nl(r)?t[a]=Ch(t[a],r):Nl(r)?t[a]=Ch({},r):Qi(r)?t[a]=r.slice():t[a]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Es(arguments[r],n);return t}const lL=(e,t,n,{allOwnKeys:r}={})=>(Es(t,(i,a)=>{n&&so(i)?e[a]=ax(i,n):e[a]=i},{allOwnKeys:r}),e),uL=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),cL=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},dL=(e,t,n,r)=>{let i,a,l;const u={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)l=i[a],(!r||r(l,e,t))&&!u[l]&&(t[l]=e[l],u[l]=!0);e=n!==!1&&Jp(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},fL=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},hL=e=>{if(!e)return null;if(Qi(e))return e;let t=e.length;if(!ux(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},pL=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Jp(Uint8Array)),mL=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const a=i.value;t.call(e,a[0],a[1])}},_L=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},vL=kr("HTMLFormElement"),gL=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),ry=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),yL=kr("RegExp"),hx=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Es(n,(i,a)=>{t(i,a,e)!==!1&&(r[a]=i)}),Object.defineProperties(e,r)},bL=e=>{hx(e,(t,n)=>{if(so(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(so(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},xL=(e,t)=>{const n={},r=i=>{i.forEach(a=>{n[a]=!0})};return Qi(e)?r(e):r(String(e).split(t)),n},wL=()=>{},kL=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Kd="abcdefghijklmnopqrstuvwxyz",oy="0123456789",px={DIGIT:oy,ALPHA:Kd,ALPHA_DIGIT:Kd+Kd.toUpperCase()+oy},SL=(e=16,t=px.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function PL(e){return!!(e&&so(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const CL=e=>{const t=new Array(10),n=(r,i)=>{if(em(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const a=Qi(r)?[]:{};return Es(r,(l,u)=>{const d=n(l,i+1);!ps(d)&&(a[u]=d)}),t[i]=void 0,a}}return r};return n(e,0)},K={isArray:Qi,isArrayBuffer:lx,isBuffer:GT,isFormData:iL,isArrayBufferView:XT,isString:JT,isNumber:ux,isBoolean:YT,isObject:em,isPlainObject:Nl,isUndefined:ps,isDate:eL,isFile:tL,isBlob:nL,isRegExp:yL,isFunction:so,isStream:oL,isURLSearchParams:aL,isTypedArray:pL,isFileList:rL,forEach:Es,merge:Ch,extend:lL,trim:sL,stripBOM:uL,inherits:cL,toFlatObject:dL,kindOf:Yp,kindOfTest:kr,endsWith:fL,toArray:hL,forEachEntry:mL,matchAll:_L,isHTMLForm:vL,hasOwnProperty:ry,hasOwnProp:ry,reduceDescriptors:hx,freezeMethods:bL,toObjectSet:xL,toCamelCase:gL,noop:wL,toFiniteNumber:kL,findKey:cx,global:dx,isContextDefined:fx,ALPHABET:px,generateString:SL,isSpecCompliantForm:PL,toJSONObject:CL};function Te(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}K.inherits(Te,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:K.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const mx=Te.prototype,_x={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{_x[e]={value:e}});Object.defineProperties(Te,_x);Object.defineProperty(mx,"isAxiosError",{value:!0});Te.from=(e,t,n,r,i,a)=>{const l=Object.create(mx);return K.toFlatObject(e,l,function(d){return d!==Error.prototype},u=>u!=="isAxiosError"),Te.call(l,e.message,t,n,r,i),l.cause=e,l.name=e.name,a&&Object.assign(l,a),l};const EL=null;function Eh(e){return K.isPlainObject(e)||K.isArray(e)}function vx(e){return K.endsWith(e,"[]")?e.slice(0,-2):e}function iy(e,t,n){return e?e.concat(t).map(function(i,a){return i=vx(i),!n&&a?"["+i+"]":i}).join(n?".":""):t}function OL(e){return K.isArray(e)&&!e.some(Eh)}const TL=K.toFlatObject(K,{},null,function(t){return/^is[A-Z]/.test(t)});function Oc(e,t,n){if(!K.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=K.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,C){return!K.isUndefined(C[w])});const r=n.metaTokens,i=n.visitor||m,a=n.dots,l=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&K.isSpecCompliantForm(t);if(!K.isFunction(i))throw new TypeError("visitor must be a function");function f(x){if(x===null)return"";if(K.isDate(x))return x.toISOString();if(!d&&K.isBlob(x))throw new Te("Blob is not supported. Use a Buffer instead.");return K.isArrayBuffer(x)||K.isTypedArray(x)?d&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function m(x,w,C){let y=x;if(x&&!C&&typeof x=="object"){if(K.endsWith(w,"{}"))w=r?w:w.slice(0,-2),x=JSON.stringify(x);else if(K.isArray(x)&&OL(x)||(K.isFileList(x)||K.endsWith(w,"[]"))&&(y=K.toArray(x)))return w=vx(w),y.forEach(function(S,P){!(K.isUndefined(S)||S===null)&&t.append(l===!0?iy([w],P,a):l===null?w:w+"[]",f(S))}),!1}return Eh(x)?!0:(t.append(iy(C,w,a),f(x)),!1)}const _=[],p=Object.assign(TL,{defaultVisitor:m,convertValue:f,isVisitable:Eh});function g(x,w){if(!K.isUndefined(x)){if(_.indexOf(x)!==-1)throw Error("Circular reference detected in "+w.join("."));_.push(x),K.forEach(x,function(y,b){(!(K.isUndefined(y)||y===null)&&i.call(t,y,K.isString(b)?b.trim():b,w,p))===!0&&g(y,w?w.concat(b):[b])}),_.pop()}}if(!K.isObject(e))throw new TypeError("data must be an object");return g(e),t}function ay(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function tm(e,t){this._pairs=[],e&&Oc(e,this,t)}const gx=tm.prototype;gx.append=function(t,n){this._pairs.push([t,n])};gx.toString=function(t){const n=t?function(r){return t.call(this,r,ay)}:ay;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function LL(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function yx(e,t,n){if(!t)return e;const r=n&&n.encode||LL,i=n&&n.serialize;let a;if(i?a=i(t,n):a=K.isURLSearchParams(t)?t.toString():new tm(t,n).toString(r),a){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class RL{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){K.forEach(this.handlers,function(r){r!==null&&t(r)})}}const sy=RL,bx={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},zL=typeof URLSearchParams<"u"?URLSearchParams:tm,AL=FormData,BL=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),NL=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Vn={isBrowser:!0,classes:{URLSearchParams:zL,FormData:AL,Blob},isStandardBrowserEnv:BL,isStandardBrowserWebWorkerEnv:NL,protocols:["http","https","file","blob","url","data"]};function IL(e,t){return Oc(e,new Vn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,a){return Vn.isNode&&K.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function ML(e){return K.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function DL(e){const t={},n=Object.keys(e);let r;const i=n.length;let a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function xx(e){function t(n,r,i,a){let l=n[a++];const u=Number.isFinite(+l),d=a>=n.length;return l=!l&&K.isArray(i)?i.length:l,d?(K.hasOwnProp(i,l)?i[l]=[i[l],r]:i[l]=r,!u):((!i[l]||!K.isObject(i[l]))&&(i[l]=[]),t(n,r,i[l],a)&&K.isArray(i[l])&&(i[l]=DL(i[l])),!u)}if(K.isFormData(e)&&K.isFunction(e.entries)){const n={};return K.forEachEntry(e,(r,i)=>{t(ML(r),i,n,0)}),n}return null}const FL={"Content-Type":void 0};function jL(e,t,n){if(K.isString(e))try{return(t||JSON.parse)(e),K.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Tc={transitional:bx,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,a=K.isObject(t);if(a&&K.isHTMLForm(t)&&(t=new FormData(t)),K.isFormData(t))return i&&i?JSON.stringify(xx(t)):t;if(K.isArrayBuffer(t)||K.isBuffer(t)||K.isStream(t)||K.isFile(t)||K.isBlob(t))return t;if(K.isArrayBufferView(t))return t.buffer;if(K.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return IL(t,this.formSerializer).toString();if((u=K.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Oc(u?{"files[]":t}:t,d&&new d,this.formSerializer)}}return a||i?(n.setContentType("application/json",!1),jL(t)):t}],transformResponse:[function(t){const n=this.transitional||Tc.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&K.isString(t)&&(r&&!this.responseType||i)){const l=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(u){if(l)throw u.name==="SyntaxError"?Te.from(u,Te.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Vn.classes.FormData,Blob:Vn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};K.forEach(["delete","get","head"],function(t){Tc.headers[t]={}});K.forEach(["post","put","patch"],function(t){Tc.headers[t]=K.merge(FL)});const nm=Tc,UL=K.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),$L=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(l){i=l.indexOf(":"),n=l.substring(0,i).trim().toLowerCase(),r=l.substring(i+1).trim(),!(!n||t[n]&&UL[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ly=Symbol("internals");function ka(e){return e&&String(e).trim().toLowerCase()}function Il(e){return e===!1||e==null?e:K.isArray(e)?e.map(Il):String(e)}function ZL(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function HL(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function Qd(e,t,n,r){if(K.isFunction(r))return r.call(this,t,n);if(K.isString(t)){if(K.isString(r))return t.indexOf(r)!==-1;if(K.isRegExp(r))return r.test(t)}}function WL(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function VL(e,t){const n=K.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,a,l){return this[r].call(this,t,i,a,l)},configurable:!0})})}class Lc{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function a(u,d,f){const m=ka(d);if(!m)throw new Error("header name must be a non-empty string");const _=K.findKey(i,m);(!_||i[_]===void 0||f===!0||f===void 0&&i[_]!==!1)&&(i[_||d]=Il(u))}const l=(u,d)=>K.forEach(u,(f,m)=>a(f,m,d));return K.isPlainObject(t)||t instanceof this.constructor?l(t,n):K.isString(t)&&(t=t.trim())&&!HL(t)?l($L(t),n):t!=null&&a(n,t,r),this}get(t,n){if(t=ka(t),t){const r=K.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return ZL(i);if(K.isFunction(n))return n.call(this,i,r);if(K.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ka(t),t){const r=K.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Qd(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function a(l){if(l=ka(l),l){const u=K.findKey(r,l);u&&(!n||Qd(r,r[u],u,n))&&(delete r[u],i=!0)}}return K.isArray(t)?t.forEach(a):a(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const a=n[r];(!t||Qd(this,this[a],a,t))&&(delete this[a],i=!0)}return i}normalize(t){const n=this,r={};return K.forEach(this,(i,a)=>{const l=K.findKey(r,a);if(l){n[l]=Il(i),delete n[a];return}const u=t?WL(a):String(a).trim();u!==a&&delete n[a],n[u]=Il(i),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return K.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&K.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[ly]=this[ly]={accessors:{}}).accessors,i=this.prototype;function a(l){const u=ka(l);r[u]||(VL(i,l),r[u]=!0)}return K.isArray(t)?t.forEach(a):a(t),this}}Lc.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);K.freezeMethods(Lc.prototype);K.freezeMethods(Lc);const pr=Lc;function Gd(e,t){const n=this||nm,r=t||n,i=pr.from(r.headers);let a=r.data;return K.forEach(e,function(u){a=u.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function wx(e){return!!(e&&e.__CANCEL__)}function Os(e,t,n){Te.call(this,e??"canceled",Te.ERR_CANCELED,t,n),this.name="CanceledError"}K.inherits(Os,Te,{__CANCEL__:!0});function qL(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Te("Request failed with status code "+n.status,[Te.ERR_BAD_REQUEST,Te.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const KL=Vn.isStandardBrowserEnv?function(){return{write:function(n,r,i,a,l,u){const d=[];d.push(n+"="+encodeURIComponent(r)),K.isNumber(i)&&d.push("expires="+new Date(i).toGMTString()),K.isString(a)&&d.push("path="+a),K.isString(l)&&d.push("domain="+l),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function QL(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function GL(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function kx(e,t){return e&&!QL(t)?GL(e,t):t}const XL=Vn.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(a){let l=a;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(l){const u=K.isString(l)?i(l):l;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function JL(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function YL(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,a=0,l;return t=t!==void 0?t:1e3,function(d){const f=Date.now(),m=r[a];l||(l=f),n[i]=d,r[i]=f;let _=a,p=0;for(;_!==i;)p+=n[_++],_=_%e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),f-l<t)return;const g=m&&f-m;return g?Math.round(p*1e3/g):void 0}}function uy(e,t){let n=0;const r=YL(50,250);return i=>{const a=i.loaded,l=i.lengthComputable?i.total:void 0,u=a-n,d=r(u),f=a<=l;n=a;const m={loaded:a,total:l,progress:l?a/l:void 0,bytes:u,rate:d||void 0,estimated:d&&l&&f?(l-a)/d:void 0,event:i};m[t?"download":"upload"]=!0,e(m)}}const eR=typeof XMLHttpRequest<"u",tR=eR&&function(e){return new Promise(function(n,r){let i=e.data;const a=pr.from(e.headers).normalize(),l=e.responseType;let u;function d(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}K.isFormData(i)&&(Vn.isStandardBrowserEnv||Vn.isStandardBrowserWebWorkerEnv)&&a.setContentType(!1);let f=new XMLHttpRequest;if(e.auth){const g=e.auth.username||"",x=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(g+":"+x))}const m=kx(e.baseURL,e.url);f.open(e.method.toUpperCase(),yx(m,e.params,e.paramsSerializer),!0),f.timeout=e.timeout;function _(){if(!f)return;const g=pr.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),w={data:!l||l==="text"||l==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:g,config:e,request:f};qL(function(y){n(y),d()},function(y){r(y),d()},w),f=null}if("onloadend"in f?f.onloadend=_:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(_)},f.onabort=function(){f&&(r(new Te("Request aborted",Te.ECONNABORTED,e,f)),f=null)},f.onerror=function(){r(new Te("Network Error",Te.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let x=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||bx;e.timeoutErrorMessage&&(x=e.timeoutErrorMessage),r(new Te(x,w.clarifyTimeoutError?Te.ETIMEDOUT:Te.ECONNABORTED,e,f)),f=null},Vn.isStandardBrowserEnv){const g=(e.withCredentials||XL(m))&&e.xsrfCookieName&&KL.read(e.xsrfCookieName);g&&a.set(e.xsrfHeaderName,g)}i===void 0&&a.setContentType(null),"setRequestHeader"in f&&K.forEach(a.toJSON(),function(x,w){f.setRequestHeader(w,x)}),K.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),l&&l!=="json"&&(f.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&f.addEventListener("progress",uy(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",uy(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=g=>{f&&(r(!g||g.type?new Os(null,e,f):g),f.abort(),f=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const p=JL(m);if(p&&Vn.protocols.indexOf(p)===-1){r(new Te("Unsupported protocol "+p+":",Te.ERR_BAD_REQUEST,e));return}f.send(i||null)})},Ml={http:EL,xhr:tR};K.forEach(Ml,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const nR={getAdapter:e=>{e=K.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=K.isString(n)?Ml[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new Te(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(K.hasOwnProp(Ml,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!K.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Ml};function Xd(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Os(null,e)}function cy(e){return Xd(e),e.headers=pr.from(e.headers),e.data=Gd.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),nR.getAdapter(e.adapter||nm.adapter)(e).then(function(r){return Xd(e),r.data=Gd.call(e,e.transformResponse,r),r.headers=pr.from(r.headers),r},function(r){return wx(r)||(Xd(e),r&&r.response&&(r.response.data=Gd.call(e,e.transformResponse,r.response),r.response.headers=pr.from(r.response.headers))),Promise.reject(r)})}const dy=e=>e instanceof pr?e.toJSON():e;function Hi(e,t){t=t||{};const n={};function r(f,m,_){return K.isPlainObject(f)&&K.isPlainObject(m)?K.merge.call({caseless:_},f,m):K.isPlainObject(m)?K.merge({},m):K.isArray(m)?m.slice():m}function i(f,m,_){if(K.isUndefined(m)){if(!K.isUndefined(f))return r(void 0,f,_)}else return r(f,m,_)}function a(f,m){if(!K.isUndefined(m))return r(void 0,m)}function l(f,m){if(K.isUndefined(m)){if(!K.isUndefined(f))return r(void 0,f)}else return r(void 0,m)}function u(f,m,_){if(_ in t)return r(f,m);if(_ in e)return r(void 0,f)}const d={url:a,method:a,data:a,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:u,headers:(f,m)=>i(dy(f),dy(m),!0)};return K.forEach(Object.keys(e).concat(Object.keys(t)),function(m){const _=d[m]||i,p=_(e[m],t[m],m);K.isUndefined(p)&&_!==u||(n[m]=p)}),n}const Sx="1.3.2",rm={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{rm[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const fy={};rm.transitional=function(t,n,r){function i(a,l){return"[Axios v"+Sx+"] Transitional option '"+a+"'"+l+(r?". "+r:"")}return(a,l,u)=>{if(t===!1)throw new Te(i(l," has been removed"+(n?" in "+n:"")),Te.ERR_DEPRECATED);return n&&!fy[l]&&(fy[l]=!0,console.warn(i(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,l,u):!0}};function rR(e,t,n){if(typeof e!="object")throw new Te("options must be an object",Te.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const a=r[i],l=t[a];if(l){const u=e[a],d=u===void 0||l(u,a,e);if(d!==!0)throw new Te("option "+a+" must be "+d,Te.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Te("Unknown option "+a,Te.ERR_BAD_OPTION)}}const Oh={assertOptions:rR,validators:rm},Rr=Oh.validators;class Ou{constructor(t){this.defaults=t,this.interceptors={request:new sy,response:new sy}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Hi(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:a}=n;r!==void 0&&Oh.assertOptions(r,{silentJSONParsing:Rr.transitional(Rr.boolean),forcedJSONParsing:Rr.transitional(Rr.boolean),clarifyTimeoutError:Rr.transitional(Rr.boolean)},!1),i!==void 0&&Oh.assertOptions(i,{encode:Rr.function,serialize:Rr.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l;l=a&&K.merge(a.common,a[n.method]),l&&K.forEach(["delete","get","head","post","put","patch","common"],x=>{delete a[x]}),n.headers=pr.concat(l,a);const u=[];let d=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(d=d&&w.synchronous,u.unshift(w.fulfilled,w.rejected))});const f=[];this.interceptors.response.forEach(function(w){f.push(w.fulfilled,w.rejected)});let m,_=0,p;if(!d){const x=[cy.bind(this),void 0];for(x.unshift.apply(x,u),x.push.apply(x,f),p=x.length,m=Promise.resolve(n);_<p;)m=m.then(x[_++],x[_++]);return m}p=u.length;let g=n;for(_=0;_<p;){const x=u[_++],w=u[_++];try{g=x(g)}catch(C){w.call(this,C);break}}try{m=cy.call(this,g)}catch(x){return Promise.reject(x)}for(_=0,p=f.length;_<p;)m=m.then(f[_++],f[_++]);return m}getUri(t){t=Hi(this.defaults,t);const n=kx(t.baseURL,t.url);return yx(n,t.params,t.paramsSerializer)}}K.forEach(["delete","get","head","options"],function(t){Ou.prototype[t]=function(n,r){return this.request(Hi(r||{},{method:t,url:n,data:(r||{}).data}))}});K.forEach(["post","put","patch"],function(t){function n(r){return function(a,l,u){return this.request(Hi(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:l}))}}Ou.prototype[t]=n(),Ou.prototype[t+"Form"]=n(!0)});const Dl=Ou;class om{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(i=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](i);r._listeners=null}),this.promise.then=i=>{let a;const l=new Promise(u=>{r.subscribe(u),a=u}).then(i);return l.cancel=function(){r.unsubscribe(a)},l},t(function(a,l,u){r.reason||(r.reason=new Os(a,l,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new om(function(i){t=i}),cancel:t}}}const oR=om;function iR(e){return function(n){return e.apply(null,n)}}function aR(e){return K.isObject(e)&&e.isAxiosError===!0}const Th={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Th).forEach(([e,t])=>{Th[t]=e});const sR=Th;function Px(e){const t=new Dl(e),n=ax(Dl.prototype.request,t);return K.extend(n,Dl.prototype,t,{allOwnKeys:!0}),K.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Px(Hi(e,i))},n}const ht=Px(nm);ht.Axios=Dl;ht.CanceledError=Os;ht.CancelToken=oR;ht.isCancel=wx;ht.VERSION=Sx;ht.toFormData=Oc;ht.AxiosError=Te;ht.Cancel=ht.CanceledError;ht.all=function(t){return Promise.all(t)};ht.spread=iR;ht.isAxiosError=aR;ht.mergeConfig=Hi;ht.AxiosHeaders=pr;ht.formToJSON=e=>xx(K.isHTMLForm(e)?new FormData(e):e);ht.HttpStatusCode=sR;ht.default=ht;const Cx=ht;function Cn(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function lo(e){return!!e&&!!e[We]}function br(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===_R}(e)||Array.isArray(e)||!!e[yy]||!!(!((t=e.constructor)===null||t===void 0)&&t[yy])||im(e)||am(e))}function Wo(e,t,n){n===void 0&&(n=!1),Gi(e)===0?(n?Object.keys:Ai)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function Gi(e){var t=e[We];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:im(e)?2:am(e)?3:0}function zi(e,t){return Gi(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function lR(e,t){return Gi(e)===2?e.get(t):e[t]}function Ex(e,t,n){var r=Gi(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Ox(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function im(e){return pR&&e instanceof Map}function am(e){return mR&&e instanceof Set}function Po(e){return e.o||e.t}function sm(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Lx(e);delete t[We];for(var n=Ai(t),r=0;r<n.length;r++){var i=n[r],a=t[i];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function lm(e,t){return t===void 0&&(t=!1),um(e)||lo(e)||!br(e)||(Gi(e)>1&&(e.set=e.add=e.clear=e.delete=uR),Object.freeze(e),t&&Wo(e,function(n,r){return lm(r,!0)},!0)),e}function uR(){Cn(2)}function um(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Gn(e){var t=Ah[e];return t||Cn(18,e),t}function cR(e,t){Ah[e]||(Ah[e]=t)}function Lh(){return ms}function Jd(e,t){t&&(Gn("Patches"),e.u=[],e.s=[],e.v=t)}function Tu(e){Rh(e),e.p.forEach(dR),e.p=null}function Rh(e){e===ms&&(ms=e.l)}function hy(e){return ms={p:[],l:ms,h:e,m:!0,_:0}}function dR(e){var t=e[We];t.i===0||t.i===1?t.j():t.O=!0}function Yd(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.g||Gn("ES5").S(t,e,r),r?(n[We].P&&(Tu(t),Cn(4)),br(e)&&(e=Lu(t,e),t.l||Ru(t,e)),t.u&&Gn("Patches").M(n[We].t,e,t.u,t.s)):e=Lu(t,n,[]),Tu(t),t.u&&t.v(t.u,t.s),e!==Tx?e:void 0}function Lu(e,t,n){if(um(t))return t;var r=t[We];if(!r)return Wo(t,function(u,d){return py(e,r,t,u,d,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Ru(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=sm(r.k):r.o,a=i,l=!1;r.i===3&&(a=new Set(i),i.clear(),l=!0),Wo(a,function(u,d){return py(e,r,i,u,d,n,l)}),Ru(e,i,!1),n&&e.u&&Gn("Patches").N(r,n,e.u,e.s)}return r.o}function py(e,t,n,r,i,a,l){if(lo(i)){var u=Lu(e,i,a&&t&&t.i!==3&&!zi(t.R,r)?a.concat(r):void 0);if(Ex(n,r,u),!lo(u))return;e.m=!1}else l&&n.add(i);if(br(i)&&!um(i)){if(!e.h.D&&e._<1)return;Lu(e,i),t&&t.A.l||Ru(e,i)}}function Ru(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&lm(t,n)}function ef(e,t){var n=e[We];return(n?Po(n):e)[t]}function my(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Dr(e){e.P||(e.P=!0,e.l&&Dr(e.l))}function tf(e){e.o||(e.o=sm(e.t))}function zh(e,t,n){var r=im(t)?Gn("MapSet").F(t,n):am(t)?Gn("MapSet").T(t,n):e.g?function(i,a){var l=Array.isArray(i),u={i:l?1:0,A:a?a.A:Lh(),P:!1,I:!1,R:{},l:a,t:i,k:null,o:null,j:null,C:!1},d=u,f=_s;l&&(d=[u],f=La);var m=Proxy.revocable(d,f),_=m.revoke,p=m.proxy;return u.k=p,u.j=_,p}(t,n):Gn("ES5").J(t,n);return(n?n.A:Lh()).p.push(r),r}function fR(e){return lo(e)||Cn(22,e),function t(n){if(!br(n))return n;var r,i=n[We],a=Gi(n);if(i){if(!i.P&&(i.i<4||!Gn("ES5").K(i)))return i.t;i.I=!0,r=_y(n,a),i.I=!1}else r=_y(n,a);return Wo(r,function(l,u){i&&lR(i.t,l)===u||Ex(r,l,t(u))}),a===3?new Set(r):r}(e)}function _y(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return sm(e)}function hR(){function e(a,l){var u=i[a];return u?u.enumerable=l:i[a]=u={configurable:!0,enumerable:l,get:function(){var d=this[We];return _s.get(d,a)},set:function(d){var f=this[We];_s.set(f,a,d)}},u}function t(a){for(var l=a.length-1;l>=0;l--){var u=a[l][We];if(!u.P)switch(u.i){case 5:r(u)&&Dr(u);break;case 4:n(u)&&Dr(u)}}}function n(a){for(var l=a.t,u=a.k,d=Ai(u),f=d.length-1;f>=0;f--){var m=d[f];if(m!==We){var _=l[m];if(_===void 0&&!zi(l,m))return!0;var p=u[m],g=p&&p[We];if(g?g.t!==_:!Ox(p,_))return!0}}var x=!!l[We];return d.length!==Ai(l).length+(x?0:1)}function r(a){var l=a.k;if(l.length!==a.t.length)return!0;var u=Object.getOwnPropertyDescriptor(l,l.length-1);if(u&&!u.get)return!0;for(var d=0;d<l.length;d++)if(!l.hasOwnProperty(d))return!0;return!1}var i={};cR("ES5",{J:function(a,l){var u=Array.isArray(a),d=function(m,_){if(m){for(var p=Array(_.length),g=0;g<_.length;g++)Object.defineProperty(p,""+g,e(g,!0));return p}var x=Lx(_);delete x[We];for(var w=Ai(x),C=0;C<w.length;C++){var y=w[C];x[y]=e(y,m||!!x[y].enumerable)}return Object.create(Object.getPrototypeOf(_),x)}(u,a),f={i:u?5:4,A:l?l.A:Lh(),P:!1,I:!1,R:{},l,t:a,k:d,o:null,O:!1,C:!1};return Object.defineProperty(d,We,{value:f,writable:!0}),d},S:function(a,l,u){u?lo(l)&&l[We].A===a&&t(a.p):(a.u&&function d(f){if(f&&typeof f=="object"){var m=f[We];if(m){var _=m.t,p=m.k,g=m.R,x=m.i;if(x===4)Wo(p,function(S){S!==We&&(_[S]!==void 0||zi(_,S)?g[S]||d(p[S]):(g[S]=!0,Dr(m)))}),Wo(_,function(S){p[S]!==void 0||zi(p,S)||(g[S]=!1,Dr(m))});else if(x===5){if(r(m)&&(Dr(m),g.length=!0),p.length<_.length)for(var w=p.length;w<_.length;w++)g[w]=!1;else for(var C=_.length;C<p.length;C++)g[C]=!0;for(var y=Math.min(p.length,_.length),b=0;b<y;b++)p.hasOwnProperty(b)||(g[b]=!0),g[b]===void 0&&d(p[b])}}}}(a.p[0]),t(a.p))},K:function(a){return a.i===4?n(a):r(a)}})}var vy,ms,cm=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",pR=typeof Map<"u",mR=typeof Set<"u",gy=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Tx=cm?Symbol.for("immer-nothing"):((vy={})["immer-nothing"]=!0,vy),yy=cm?Symbol.for("immer-draftable"):"__$immer_draftable",We=cm?Symbol.for("immer-state"):"__$immer_state",_R=""+Object.prototype.constructor,Ai=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Lx=Object.getOwnPropertyDescriptors||function(e){var t={};return Ai(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Ah={},_s={get:function(e,t){if(t===We)return e;var n=Po(e);if(!zi(n,t))return function(i,a,l){var u,d=my(a,l);return d?"value"in d?d.value:(u=d.get)===null||u===void 0?void 0:u.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!br(r)?r:r===ef(e.t,t)?(tf(e),e.o[t]=zh(e.A.h,r,e)):r},has:function(e,t){return t in Po(e)},ownKeys:function(e){return Reflect.ownKeys(Po(e))},set:function(e,t,n){var r=my(Po(e),t);if(r?.set)return r.set.call(e.k,n),!0;if(!e.P){var i=ef(Po(e),t),a=i?.[We];if(a&&a.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Ox(n,i)&&(n!==void 0||zi(e.t,t)))return!0;tf(e),Dr(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return ef(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,tf(e),Dr(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Po(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Cn(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Cn(12)}},La={};Wo(_s,function(e,t){La[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),La.deleteProperty=function(e,t){return La.set.call(this,e,t,void 0)},La.set=function(e,t,n){return _s.set.call(this,e[0],t,n,e[0])};var vR=function(){function e(n){var r=this;this.g=gy,this.D=!0,this.produce=function(i,a,l){if(typeof i=="function"&&typeof a!="function"){var u=a;a=i;var d=r;return function(w){var C=this;w===void 0&&(w=u);for(var y=arguments.length,b=Array(y>1?y-1:0),S=1;S<y;S++)b[S-1]=arguments[S];return d.produce(w,function(P){var R;return(R=a).call.apply(R,[C,P].concat(b))})}}var f;if(typeof a!="function"&&Cn(6),l!==void 0&&typeof l!="function"&&Cn(7),br(i)){var m=hy(r),_=zh(r,i,void 0),p=!0;try{f=a(_),p=!1}finally{p?Tu(m):Rh(m)}return typeof Promise<"u"&&f instanceof Promise?f.then(function(w){return Jd(m,l),Yd(w,m)},function(w){throw Tu(m),w}):(Jd(m,l),Yd(f,m))}if(!i||typeof i!="object"){if((f=a(i))===void 0&&(f=i),f===Tx&&(f=void 0),r.D&&lm(f,!0),l){var g=[],x=[];Gn("Patches").M(i,f,g,x),l(g,x)}return f}Cn(21,i)},this.produceWithPatches=function(i,a){if(typeof i=="function")return function(f){for(var m=arguments.length,_=Array(m>1?m-1:0),p=1;p<m;p++)_[p-1]=arguments[p];return r.produceWithPatches(f,function(g){return i.apply(void 0,[g].concat(_))})};var l,u,d=r.produce(i,a,function(f,m){l=f,u=m});return typeof Promise<"u"&&d instanceof Promise?d.then(function(f){return[f,l,u]}):[d,l,u]},typeof n?.useProxies=="boolean"&&this.setUseProxies(n.useProxies),typeof n?.autoFreeze=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){br(n)||Cn(8),lo(n)&&(n=fR(n));var r=hy(this),i=zh(this,n,void 0);return i[We].C=!0,Rh(r),i},t.finishDraft=function(n,r){var i=n&&n[We],a=i.A;return Jd(a,r),Yd(void 0,a)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!gy&&Cn(20),this.g=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var a=r[i];if(a.path.length===0&&a.op==="replace"){n=a.value;break}}i>-1&&(r=r.slice(i+1));var l=Gn("Patches").$;return lo(n)?l(n,r):this.produce(n,function(u){return l(u,r)})},e}(),Yt=new vR,Rx=Yt.produce;Yt.produceWithPatches.bind(Yt);Yt.setAutoFreeze.bind(Yt);Yt.setUseProxies.bind(Yt);Yt.applyPatches.bind(Yt);Yt.createDraft.bind(Yt);Yt.finishDraft.bind(Yt);function by(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function xy(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?by(Object(n),!0).forEach(function(r){zn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):by(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Tt(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var wy=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),nf=function(){return Math.random().toString(36).substring(7).split("").join(".")},zu={INIT:"@@redux/INIT"+nf(),REPLACE:"@@redux/REPLACE"+nf(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+nf()}};function gR(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function zx(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Tt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Tt(1));return n(zx)(e,t)}if(typeof e!="function")throw new Error(Tt(2));var i=e,a=t,l=[],u=l,d=!1;function f(){u===l&&(u=l.slice())}function m(){if(d)throw new Error(Tt(3));return a}function _(w){if(typeof w!="function")throw new Error(Tt(4));if(d)throw new Error(Tt(5));var C=!0;return f(),u.push(w),function(){if(C){if(d)throw new Error(Tt(6));C=!1,f();var b=u.indexOf(w);u.splice(b,1),l=null}}}function p(w){if(!gR(w))throw new Error(Tt(7));if(typeof w.type>"u")throw new Error(Tt(8));if(d)throw new Error(Tt(9));try{d=!0,a=i(a,w)}finally{d=!1}for(var C=l=u,y=0;y<C.length;y++){var b=C[y];b()}return w}function g(w){if(typeof w!="function")throw new Error(Tt(10));i=w,p({type:zu.REPLACE})}function x(){var w,C=_;return w={subscribe:function(b){if(typeof b!="object"||b===null)throw new Error(Tt(11));function S(){b.next&&b.next(m())}S();var P=C(S);return{unsubscribe:P}}},w[wy]=function(){return this},w}return p({type:zu.INIT}),r={dispatch:p,subscribe:_,getState:m,replaceReducer:g},r[wy]=x,r}function yR(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:zu.INIT});if(typeof r>"u")throw new Error(Tt(12));if(typeof n(void 0,{type:zu.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Tt(13))})}function bR(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var a=Object.keys(n),l;try{yR(n)}catch(u){l=u}return function(d,f){if(d===void 0&&(d={}),l)throw l;for(var m=!1,_={},p=0;p<a.length;p++){var g=a[p],x=n[g],w=d[g],C=x(w,f);if(typeof C>"u")throw f&&f.type,new Error(Tt(14));_[g]=C,m=m||C!==w}return m=m||a.length!==Object.keys(d).length,m?_:d}}function Au(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function xR(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),a=function(){throw new Error(Tt(15))},l={getState:i.getState,dispatch:function(){return a.apply(void 0,arguments)}},u=t.map(function(d){return d(l)});return a=Au.apply(void 0,u)(i.dispatch),xy(xy({},i),{},{dispatch:a})}}}function Ax(e){var t=function(r){var i=r.dispatch,a=r.getState;return function(l){return function(u){return typeof u=="function"?u(i,a,e):l(u)}}};return t}var Bx=Ax();Bx.withExtraArgument=Ax;const ky=Bx;var wR=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(r[a]=i[a])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),kR=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,l;return l={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function u(f){return function(m){return d([f,m])}}function d(f){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=f[0]&2?i.return:f[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,f[1])).done)return a;switch(i=0,a&&(f=[f[0]&2,a.value]),f[0]){case 0:case 1:a=f;break;case 4:return n.label++,{value:f[1],done:!1};case 5:n.label++,i=f[1],f=[0];continue;case 7:f=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(f[0]===6||f[0]===2)){n=0;continue}if(f[0]===3&&(!a||f[1]>a[0]&&f[1]<a[3])){n.label=f[1];break}if(f[0]===6&&n.label<a[1]){n.label=a[1],a=f;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(f);break}a[2]&&n.ops.pop(),n.trys.pop();continue}f=t.call(e,n)}catch(m){f=[6,m],i=0}finally{r=a=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}},Bu=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},SR=Object.defineProperty,PR=Object.defineProperties,CR=Object.getOwnPropertyDescriptors,Sy=Object.getOwnPropertySymbols,ER=Object.prototype.hasOwnProperty,OR=Object.prototype.propertyIsEnumerable,Py=function(e,t,n){return t in e?SR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},eo=function(e,t){for(var n in t||(t={}))ER.call(t,n)&&Py(e,n,t[n]);if(Sy)for(var r=0,i=Sy(t);r<i.length;r++){var n=i[r];OR.call(t,n)&&Py(e,n,t[n])}return e},rf=function(e,t){return PR(e,CR(t))},TR=function(e,t,n){return new Promise(function(r,i){var a=function(d){try{u(n.next(d))}catch(f){i(f)}},l=function(d){try{u(n.throw(d))}catch(f){i(f)}},u=function(d){return d.done?r(d.value):Promise.resolve(d.value).then(a,l)};u((n=n.apply(e,t)).next())})},LR=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Au:Au.apply(null,arguments)};function RR(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var zR=function(e){wR(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Bu([void 0],n[0].concat(this)))):new(t.bind.apply(t,Bu([void 0],n.concat(this))))},t}(Array);function Bh(e){return br(e)?Rx(e,function(){}):e}function AR(e){return typeof e=="boolean"}function BR(){return function(t){return NR(t)}}function NR(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new zR;return n&&(AR(n)?r.push(ky):r.push(ky.withExtraArgument(n.extraArgument))),r}var IR=!0;function MR(e){var t=BR(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,a=n.middleware,l=a===void 0?t():a,u=n.devTools,d=u===void 0?!0:u,f=n.preloadedState,m=f===void 0?void 0:f,_=n.enhancers,p=_===void 0?void 0:_,g;if(typeof i=="function")g=i;else if(RR(i))g=bR(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var x=l;typeof x=="function"&&(x=x(t));var w=xR.apply(void 0,x),C=Au;d&&(C=LR(eo({trace:!IR},typeof d=="object"&&d)));var y=[w];Array.isArray(p)?y=Bu([w],p):typeof p=="function"&&(y=p(y));var b=C.apply(void 0,y);return zx(g,m,b)}function to(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var a=t.apply(void 0,r);if(!a)throw new Error("prepareAction did not return an object");return eo(eo({type:e,payload:a.payload},"meta"in a&&{meta:a.meta}),"error"in a&&{error:a.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function Nx(e){var t={},n=[],r,i={addCase:function(a,l){var u=typeof a=="string"?a:a.type;if(u in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[u]=l,i},addMatcher:function(a,l){return n.push({matcher:a,reducer:l}),i},addDefaultCase:function(a){return r=a,i}};return e(i),[t,n,r]}function DR(e){return typeof e=="function"}function FR(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?Nx(t):[t,n,r],a=i[0],l=i[1],u=i[2],d;if(DR(e))d=function(){return Bh(e())};else{var f=Bh(e);d=function(){return f}}function m(_,p){_===void 0&&(_=d());var g=Bu([a[p.type]],l.filter(function(x){var w=x.matcher;return w(p)}).map(function(x){var w=x.reducer;return w}));return g.filter(function(x){return!!x}).length===0&&(g=[u]),g.reduce(function(x,w){if(w)if(lo(x)){var C=x,y=w(C,p);return y===void 0?x:y}else{if(br(x))return Rx(x,function(b){return w(b,p)});var y=w(x,p);if(y===void 0){if(x===null)return x;throw Error("A case reducer on a non-draftable value must not return undefined")}return y}return x},_)}return m.getInitialState=d,m}function jR(e,t){return e+"/"+t}function UR(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Bh(e.initialState),r=e.reducers||{},i=Object.keys(r),a={},l={},u={};i.forEach(function(m){var _=r[m],p=jR(t,m),g,x;"reducer"in _?(g=_.reducer,x=_.prepare):g=_,a[m]=g,l[p]=g,u[m]=x?to(p,x):to(p)});function d(){var m=typeof e.extraReducers=="function"?Nx(e.extraReducers):[e.extraReducers],_=m[0],p=_===void 0?{}:_,g=m[1],x=g===void 0?[]:g,w=m[2],C=w===void 0?void 0:w,y=eo(eo({},p),l);return FR(n,function(b){for(var S in y)b.addCase(S,y[S]);for(var P=0,R=x;P<R.length;P++){var M=R[P];b.addMatcher(M.matcher,M.reducer)}C&&b.addDefaultCase(C)})}var f;return{name:t,reducer:function(m,_){return f||(f=d()),f(m,_)},actions:u,caseReducers:a,getInitialState:function(){return f||(f=d()),f.getInitialState()}}}var $R="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",ZR=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=$R[Math.random()*64|0];return t},HR=["name","message","stack","code"],of=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Cy=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),WR=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=HR;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}},Ix=function(){function e(t,n,r){var i=to(t+"/fulfilled",function(f,m,_,p){return{payload:f,meta:rf(eo({},p||{}),{arg:_,requestId:m,requestStatus:"fulfilled"})}}),a=to(t+"/pending",function(f,m,_){return{payload:void 0,meta:rf(eo({},_||{}),{arg:m,requestId:f,requestStatus:"pending"})}}),l=to(t+"/rejected",function(f,m,_,p,g){return{payload:p,error:(r&&r.serializeError||WR)(f||"Rejected"),meta:rf(eo({},g||{}),{arg:_,requestId:m,rejectedWithValue:!!p,requestStatus:"rejected",aborted:f?.name==="AbortError",condition:f?.name==="ConditionError"})}}),u=typeof AbortController<"u"?AbortController:function(){function f(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return f.prototype.abort=function(){},f}();function d(f){return function(m,_,p){var g=r?.idGenerator?r.idGenerator(f):ZR(),x=new u,w;function C(b){w=b,x.abort()}var y=function(){return TR(this,null,function(){var b,S,P,R,M,F,j;return kR(this,function(V){switch(V.label){case 0:return V.trys.push([0,4,,5]),R=(b=r?.condition)==null?void 0:b.call(r,f,{getState:_,extra:p}),qR(R)?[4,R]:[3,2];case 1:R=V.sent(),V.label=2;case 2:if(R===!1||x.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return M=new Promise(function($,z){return x.signal.addEventListener("abort",function(){return z({name:"AbortError",message:w||"Aborted"})})}),m(a(g,f,(S=r?.getPendingMeta)==null?void 0:S.call(r,{requestId:g,arg:f},{getState:_,extra:p}))),[4,Promise.race([M,Promise.resolve(n(f,{dispatch:m,getState:_,extra:p,requestId:g,signal:x.signal,abort:C,rejectWithValue:function($,z){return new of($,z)},fulfillWithValue:function($,z){return new Cy($,z)}})).then(function($){if($ instanceof of)throw $;return $ instanceof Cy?i($.payload,g,f,$.meta):i($,g,f)})])];case 3:return P=V.sent(),[3,5];case 4:return F=V.sent(),P=F instanceof of?l(null,g,f,F.payload,F.meta):l(F,g,f),[3,5];case 5:return j=r&&!r.dispatchConditionRejection&&l.match(P)&&P.meta.condition,j||m(P),[2,P]}})})}();return Object.assign(y,{abort:C,requestId:g,arg:f,unwrap:function(){return y.then(VR)}})}}return Object.assign(d,{pending:a,rejected:l,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e}();function VR(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function qR(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var dm="listenerMiddleware";to(dm+"/add");to(dm+"/removeAll");to(dm+"/remove");var Ey;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);hR();const KR={loading:!0,brandloading:!0,evList:{evs:[],count:0},search:{name:"",sortOrder:1,evType:[],brands:[],seatConfiguration:[],seatMassageFirstRow:!1,seatMassageSecondRow:!1,seatVentilationFirstRow:!1,seatVentilationSecondRow:!1,allWheelDrive:!1,nightVision:!1,adaptiveSuspension:!1,airSuspension:!1,instrumentCluster:!1,headUpDisplay:!1,androidAuto:!1,appleCarPlay:!1,colors:[]},searchOptions:{brands:["Audi"],seatConfig:[],bodyTypes:["Sedan"],seatConfiguration:["5 seat"],colors:["Red"]},error:""},Nh=Ix("evsearch/fetchEvs",async e=>{const t=window.location.href;let n="https://api.evkx.net/api/Ev";return t.startsWith("http://localhost")&&(n="https://localhost:7033/api/Ev"),await Cx.post(n,e,{headers:{"Content-Type":"application/json"}}).then(r=>r.data).catch(r=>{console.error("error",r)})}),Ih=Ix("evsearch/fetchSearchOptions",async()=>{const e=window.location.href;let t="https://api.evkx.net/api/searchoptions";return e.startsWith("http://localhost")&&(t="https://localhost:7033/api/searchoptions"),await Cx.get(t).then(n=>n.data).catch(n=>{console.error("error",n)})}),Mx=UR({name:"evsearch",initialState:KR,reducers:{updateSortOrder:(e,t)=>{const n=t.payload.trim().toLowerCase();e.search.sortOrder=parseInt(n)},updateEvType:(e,t)=>{const n=t.payload;e.search.evType=n},updateBrands:(e,t)=>{const n=t.payload;e.search.brands=n},updateSeatConfig:(e,t)=>{const n=t.payload;e.search.seatConfiguration=n},updateAllWheelDrive:(e,t)=>{const n=t.payload;e.search.allWheelDrive=n},updateNightVision:(e,t)=>{const n=t.payload;e.search.nightVision=n},updateAdaptiveDamping:(e,t)=>{const n=t.payload;e.search.adaptiveSuspension=n},updateAdaptiveAirSuspension:(e,t)=>{const n=t.payload;e.search.airSuspension=n},updateInstrumentCluster:(e,t)=>{const n=t.payload;e.search.instrumentCluster=n},updateHeadUpDisplay:(e,t)=>{const n=t.payload;e.search.headUpDisplay=n},updateAndroidAuto:(e,t)=>{const n=t.payload;e.search.androidAuto=n},updateAppleCarPlay:(e,t)=>{const n=t.payload;e.search.appleCarPlay=n},updateColors:(e,t)=>{const n=t.payload;e.search.colors=n}},extraReducers:e=>{e.addCase(Nh.fulfilled,(t,n)=>{const r=n.payload;t.evList=r,t.loading=!1}).addCase(Nh.rejected,(t,n)=>{t.error=n.error.message}).addCase(Ih.fulfilled,(t,n)=>{const r=n.payload;t.searchOptions=r,t.brandloading=!1}).addCase(Ih.rejected,(t,n)=>{t.error=n.error.message})}}),QR=Mx.reducer,{updateSortOrder:GR,updateEvType:XR,updateBrands:JR,updateSeatConfig:YR,updateAllWheelDrive:ez,updateNightVision:tz,updateAdaptiveDamping:nz,updateAdaptiveAirSuspension:Bz,updateInstrumentCluster:rz,updateHeadUpDisplay:oz,updateAndroidAuto:iz,updateAppleCarPlay:az,updateColors:sz}=Mx.actions,ar=W2,lz=()=>cP(),uz="_pageContainer_e4pr0_3",cz="_exitButton_e4pr0_63",dz={pageContainer:uz,exitButton:cz},fz=({children:e})=>(cC(),Up("common"),ce("div",{className:dz.pageContainer,children:ce("div",{children:e})})),hz="_line_x3q2g_1",pz={line:hz},mz=()=>ce("hr",{className:pz.line}),_z="_evsearchAccordionContent_19plt_1",vz="_evText_19plt_9",gz="_scopeItems_19plt_17",yz="_line_19plt_25",bz="_contentTexts_19plt_35",xz="_bottomContentTexts_19plt_45",gl={evsearchAccordionContent:_z,evText:vz,scopeItems:gz,line:yz,contentTexts:bz,bottomContentTexts:xz},wz=({title:e="No info",subtitle:t="No info",topContentText:n,textList:r=[""],maxPower:i=0,topSpeedKph:a=0,infoUri:l="",netBattery:u=0,wltpConsumption:d=0,wltpRange:f=0})=>{const[m,_]=T.useState(!1);return ce("div",{children:Qe(nx,{open:m,onClick:()=>_(!m),children:[ce(ix,{subtitle:t,children:e}),ce(rx,{children:ce("div",{className:gl.evsearchAccordionContent,children:i&&Qe("div",{children:[ce("p",{className:gl.evText,children:Md("evsearch.specifications")}),ce("div",{className:gl.line,children:ce(mz,{})}),Qe("div",{className:gl.contentTexts,children:[Qe("table",{children:[Qe("tr",{children:[ce("td",{children:Md("evsearch.topspeed")}),Qe("td",{children:[" ",a," km/h"]})]}),Qe("tr",{children:[ce("td",{children:Qe("div",{children:[Md("evsearch.maxpower"),ce(Cc,{title:"Help",placement:"right",children:"Hallo"})]})}),Qe("td",{children:[i," kW"]})]}),Qe("tr",{children:[ce("td",{children:"WLTP range"}),Qe("td",{children:[f," km"]})]}),Qe("tr",{children:[ce("td",{children:"WLTP consumption"}),Qe("td",{children:[d," kWh/100km"]})]}),Qe("tr",{children:[ce("td",{children:"Usable battery"}),Qe("td",{children:[u," kWh"]})]})]}),ce("br",{}),ce("a",{href:l,children:"Read our full article"})]})]})})})]})})},kz="_pageContent_xhe0h_1",Sz="_pageContentContainer_xhe0h_19",Pz="_resultInfo_xhe0h_33",Sa={pageContent:kz,pageContentContainer:Sz,resultInfo:Pz},Oy=()=>{const{t:e}=Up("common"),t=ar(z=>z.evsearchResult.loading),n=lz(),r=async()=>await n(Ih()),i=ar(z=>z.evsearchResult.evList.evs),a=ar(z=>z.evsearchResult.evList.count),l=ar(z=>z.evsearchResult.searchOptions.brands),u=ar(z=>z.evsearchResult.searchOptions.bodyTypes),d=ar(z=>z.evsearchResult.searchOptions.colors),f=ar(z=>z.evsearchResult.searchOptions.seatConfiguration),m=ar(z=>z.evsearchResult.search),_=async z=>await n(Nh(z)),p=ar(z=>z.evsearchResult.error);T.useEffect(()=>{t&&(_(m),r())},[]),T.useEffect(()=>{_(m)},[m]);const g=z=>{n(GR(z))},x=z=>{n(JR(z))},w=l.map(z=>({label:z,value:z})),C=z=>{n(XR(z))},y=z=>{n(YR(z))},b=z=>{const ee=z.target.checked;n(ez(ee))},S=z=>{const ee=z.target.checked;n(tz(ee))},P=z=>{const ee=z.target.checked;n(nz(ee))},R=z=>{const ee=z.target.checked;n(rz(ee))},M=z=>{const ee=z.target.checked;n(oz(ee))},F=z=>{const ee=z.target.checked;n(az(ee))},j=z=>{const ee=z.target.checked;n(iz(ee))},V=z=>{n(sz(z))},$=()=>p?ce(OO,{title:e("api_delegation.data_retrieval_failed"),variant:Ur.Error,forceMobileLayout:!0,children:Qe("div",{children:[e("api_delegation.error_message"),": ",p]})}):t?e("evsearch.loading")+"...":i.map((z,ee)=>ce(wz,{title:z.name,subtitle:z.sortValue+" "+z.sortParameter,topContentText:z.infoUri,maxPower:z.maxPowerKw,topSpeedKph:z.topSpeedKph,infoUri:z.infoUri,wltpConsumption:z.wltpConsumption,wltpRange:z.wltpRange,netBattery:z.netBattery},ee));return ce(fz,{children:ce(RO,{children:Qe(Sg,{children:[Qe("div",{className:Sa.pageContent,children:[ce(Ph,{label:String(e("evsearch.sortorder")),multiple:!1,onChange:g,options:[{label:"Merke,model",value:"1"},{label:"Rekkevidde WLTP minimum spesifikasjon",value:"2"},{label:"Netto batterystørrelse minst-størst",value:"3"},{label:"Netto batteristørrels størst-minst",value:"4"},{label:"WLTP forbruk minium spesifikasjon",value:"5"},{label:"Power more > less",value:"6"},{label:"Top speed more >less",value:"7"},{label:"Max DC Charging",value:"8"},{label:"Nominal voltage",value:"9"},{label:"0-100kph",value:"10"}]}),ce(Ph,{label:String(e("evsearch.brandfilter")),multiple:!0,onChange:x,options:w}),ce("br",{}),ce(Bl,{"data-testid":"evsearch-evtype",variant:Ri.Horizontal,onChange:z=>C(z),compact:!0,legend:"Select body type",items:u.map(z=>({label:z,name:z,checked:m.evType===void 0||m.evType.includes(z)}))}),ce("br",{}),ce(N1,{items:[{content:ce(Bl,{"data-testid":"evsearch-seatconfig",variant:Ri.Horizontal,onChange:z=>y(z),compact:!0,legend:"Number of seats",items:f.map(z=>({label:z,name:z,checked:m.seatConfiguration===void 0||m.seatConfiguration.includes(z)}))}),name:"Seats"},{content:Qe(Sg,{children:[ce(ur,{checked:m.allWheelDrive,label:"All wheel drive",onChange:b,compact:!0}),ce("br",{}),ce(ur,{checked:m.adaptiveSuspension,label:"Adaptive Suspension",onChange:P,compact:!0})]}),name:"Drivetrain"},{content:ce(ur,{checked:m.nightVision,label:"Nightvision",onChange:S,compact:!0}),name:"Driver Assistance"},{content:ce(Bl,{"data-testid":"evsearch-evtype",variant:Ri.Horizontal,onChange:z=>V(z),compact:!0,legend:"Select paint color",items:d.map(z=>({label:z,name:z,checked:m.colors===void 0||m.colors.includes(z)}))}),name:"Exterior"},{content:Qe("div",{children:[ce(ur,{checked:m.headUpDisplay,label:"Head Up Display",onChange:M,compact:!0}),ce("br",{}),ce(ur,{checked:m.instrumentCluster,label:"Dedicated Instrument Cluster",onChange:R,compact:!0}),ce("br",{}),ce(ur,{checked:m.androidAuto,label:"Android Auto Support",onChange:j,compact:!0}),ce("br",{}),ce(ur,{checked:m.appleCarPlay,label:"Apple Car Play Support",onChange:F,compact:!0})]}),name:"UI & Interface"}]}),ce("br",{})]}),ce("div",{className:Sa.pageContentAccordionsContainer,children:Qe("div",{className:Sa.apiAccordions,children:[Qe("h4",{className:Sa.resultInfo,children:[a," ",e("evsearch.searchresult"),":"]}),ce("div",{className:Sa.accordionScrollContainer,children:$()})]})})]})})})},Cz=SC([{path:"/",errorElement:ce(Dd,{})},{path:"evsearch",element:ce(Oy,{}),errorElement:ce(Dd,{})},{path:"nb/evsearch",element:ce(Oy,{}),errorElement:ce(Dd,{})}],{basename:"/"}),Ez={backendApiUrl:new URL(window.location.href).origin+"/api/",defaultLocale:"no_nb"},Fl={backendApiUrl:{}.VITE_BACKEND_API_URL,defaultLocale:{}.VITE_DEFAULT_LOCALE};for(const e in Fl)Fl[e]===void 0&&delete Fl[e];const Oz={...Ez,...Fl};function Tz(e){return Oz[e]}const Lz=({children:e})=>{const{i18n:t}=Up("common"),n=window.location.href;let r="en";n.includes("nb/")&&(r="no_nb");const a=`/public/localizations/${r}.json`,l=new URL(a,import.meta.url).href;return xE("Localizations",async()=>{const d=await(await fetch(l)).json();At.addResourceBundle(t.language,"common",d)},{staleTime:1/0,suspense:!0}),ce(hk,{children:e})};var Nu={},Rz={get exports(){return Nu},set exports(e){Nu=e}};(function(e,t){(function(n,r){r(t)})(li,function(n){function r(O,N){O.super_=N,O.prototype=Object.create(N.prototype,{constructor:{value:O,enumerable:!1,writable:!0,configurable:!0}})}function i(O,N){Object.defineProperty(this,"kind",{value:O,enumerable:!0}),N&&N.length&&Object.defineProperty(this,"path",{value:N,enumerable:!0})}function a(O,N,B){a.super_.call(this,"E",O),Object.defineProperty(this,"lhs",{value:N,enumerable:!0}),Object.defineProperty(this,"rhs",{value:B,enumerable:!0})}function l(O,N){l.super_.call(this,"N",O),Object.defineProperty(this,"rhs",{value:N,enumerable:!0})}function u(O,N){u.super_.call(this,"D",O),Object.defineProperty(this,"lhs",{value:N,enumerable:!0})}function d(O,N,B){d.super_.call(this,"A",O),Object.defineProperty(this,"index",{value:N,enumerable:!0}),Object.defineProperty(this,"item",{value:B,enumerable:!0})}function f(O,N,B){var Q=O.slice((B||N)+1||O.length);return O.length=N<0?O.length+N:N,O.push.apply(O,Q),O}function m(O){var N=typeof O>"u"?"undefined":fe(O);return N!=="object"?N:O===Math?"math":O===null?"null":Array.isArray(O)?"array":Object.prototype.toString.call(O)==="[object Date]"?"date":typeof O.toString=="function"&&/^\/.*\//.test(O.toString())?"regexp":"object"}function _(O,N,B,Q,Y,ne,ue){Y=Y||[],ue=ue||[];var _e=Y.slice(0);if(typeof ne<"u"){if(Q){if(typeof Q=="function"&&Q(_e,ne))return;if((typeof Q>"u"?"undefined":fe(Q))==="object"){if(Q.prefilter&&Q.prefilter(_e,ne))return;if(Q.normalize){var Ye=Q.normalize(_e,ne,O,N);Ye&&(O=Ye[0],N=Ye[1])}}}_e.push(ne)}m(O)==="regexp"&&m(N)==="regexp"&&(O=O.toString(),N=N.toString());var qe=typeof O>"u"?"undefined":fe(O),Fe=typeof N>"u"?"undefined":fe(N),Ne=qe!=="undefined"||ue&&ue[ue.length-1].lhs&&ue[ue.length-1].lhs.hasOwnProperty(ne),nt=Fe!=="undefined"||ue&&ue[ue.length-1].rhs&&ue[ue.length-1].rhs.hasOwnProperty(ne);if(!Ne&&nt)B(new l(_e,N));else if(!nt&&Ne)B(new u(_e,O));else if(m(O)!==m(N))B(new a(_e,O,N));else if(m(O)==="date"&&O-N!==0)B(new a(_e,O,N));else if(qe==="object"&&O!==null&&N!==null)if(ue.filter(function(ze){return ze.lhs===O}).length)O!==N&&B(new a(_e,O,N));else{if(ue.push({lhs:O,rhs:N}),Array.isArray(O)){var Oe;for(O.length,Oe=0;Oe<O.length;Oe++)Oe>=N.length?B(new d(_e,Oe,new u(void 0,O[Oe]))):_(O[Oe],N[Oe],B,Q,_e,Oe,ue);for(;Oe<N.length;)B(new d(_e,Oe,new l(void 0,N[Oe++])))}else{var Kt=Object.keys(O),Ut=Object.keys(N);Kt.forEach(function(ze,Ct){var Nn=Ut.indexOf(ze);Nn>=0?(_(O[ze],N[ze],B,Q,_e,ze,ue),Ut=f(Ut,Nn)):_(O[ze],void 0,B,Q,_e,ze,ue)}),Ut.forEach(function(ze){_(void 0,N[ze],B,Q,_e,ze,ue)})}ue.length=ue.length-1}else O!==N&&(qe==="number"&&isNaN(O)&&isNaN(N)||B(new a(_e,O,N)))}function p(O,N,B,Q){return Q=Q||[],_(O,N,function(Y){Y&&Q.push(Y)},B),Q.length?Q:void 0}function g(O,N,B){if(B.path&&B.path.length){var Q,Y=O[N],ne=B.path.length-1;for(Q=0;Q<ne;Q++)Y=Y[B.path[Q]];switch(B.kind){case"A":g(Y[B.path[Q]],B.index,B.item);break;case"D":delete Y[B.path[Q]];break;case"E":case"N":Y[B.path[Q]]=B.rhs}}else switch(B.kind){case"A":g(O[N],B.index,B.item);break;case"D":O=f(O,N);break;case"E":case"N":O[N]=B.rhs}return O}function x(O,N,B){if(O&&N&&B&&B.kind){for(var Q=O,Y=-1,ne=B.path?B.path.length-1:0;++Y<ne;)typeof Q[B.path[Y]]>"u"&&(Q[B.path[Y]]=typeof B.path[Y]=="number"?[]:{}),Q=Q[B.path[Y]];switch(B.kind){case"A":g(B.path?Q[B.path[Y]]:Q,B.index,B.item);break;case"D":delete Q[B.path[Y]];break;case"E":case"N":Q[B.path[Y]]=B.rhs}}}function w(O,N,B){if(B.path&&B.path.length){var Q,Y=O[N],ne=B.path.length-1;for(Q=0;Q<ne;Q++)Y=Y[B.path[Q]];switch(B.kind){case"A":w(Y[B.path[Q]],B.index,B.item);break;case"D":Y[B.path[Q]]=B.lhs;break;case"E":Y[B.path[Q]]=B.lhs;break;case"N":delete Y[B.path[Q]]}}else switch(B.kind){case"A":w(O[N],B.index,B.item);break;case"D":O[N]=B.lhs;break;case"E":O[N]=B.lhs;break;case"N":O=f(O,N)}return O}function C(O,N,B){if(O&&N&&B&&B.kind){var Q,Y,ne=O;for(Y=B.path.length-1,Q=0;Q<Y;Q++)typeof ne[B.path[Q]]>"u"&&(ne[B.path[Q]]={}),ne=ne[B.path[Q]];switch(B.kind){case"A":w(ne[B.path[Q]],B.index,B.item);break;case"D":ne[B.path[Q]]=B.lhs;break;case"E":ne[B.path[Q]]=B.lhs;break;case"N":delete ne[B.path[Q]]}}}function y(O,N,B){if(O&&N){var Q=function(Y){B&&!B(O,N,Y)||x(O,N,Y)};_(O,N,Q)}}function b(O){return"color: "+I[O].color+"; font-weight: bold"}function S(O){var N=O.kind,B=O.path,Q=O.lhs,Y=O.rhs,ne=O.index,ue=O.item;switch(N){case"E":return[B.join("."),Q,"→",Y];case"N":return[B.join("."),Y];case"D":return[B.join(".")];case"A":return[B.join(".")+"["+ne+"]",ue];default:return[]}}function P(O,N,B,Q){var Y=p(O,N);try{Q?B.groupCollapsed("diff"):B.group("diff")}catch{B.log("diff")}Y?Y.forEach(function(ne){var ue=ne.kind,_e=S(ne);B.log.apply(B,["%c "+I[ue].text,b(ue)].concat(U(_e)))}):B.log("—— no diff ——");try{B.groupEnd()}catch{B.log("—— diff end —— ")}}function R(O,N,B,Q){switch(typeof O>"u"?"undefined":fe(O)){case"object":return typeof O[Q]=="function"?O[Q].apply(O,U(B)):O[Q];case"function":return O(N);default:return O}}function M(O){var N=O.timestamp,B=O.duration;return function(Q,Y,ne){var ue=["action"];return ue.push("%c"+String(Q.type)),N&&ue.push("%c@ "+Y),B&&ue.push("%c(in "+ne.toFixed(2)+" ms)"),ue.join(" ")}}function F(O,N){var B=N.logger,Q=N.actionTransformer,Y=N.titleFormatter,ne=Y===void 0?M(N):Y,ue=N.collapsed,_e=N.colors,Ye=N.level,qe=N.diff,Fe=typeof N.titleFormatter>"u";O.forEach(function(Ne,nt){var Oe=Ne.started,Kt=Ne.startedTime,Ut=Ne.action,ze=Ne.prevState,Ct=Ne.error,Nn=Ne.took,$t=Ne.nextState,Jn=O[nt+1];Jn&&($t=Jn.prevState,Nn=Jn.started-Oe);var Bt=Q(Ut),Sr=typeof ue=="function"?ue(function(){return $t},Ut,Ne):ue,Z=me(Kt),W=_e.title?"color: "+_e.title(Bt)+";":"",G=["color: gray; font-weight: lighter;"];G.push(W),N.timestamp&&G.push("color: gray; font-weight: lighter;"),N.duration&&G.push("color: gray; font-weight: lighter;");var se=ne(Bt,Z,Nn);try{Sr?_e.title&&Fe?B.groupCollapsed.apply(B,["%c "+se].concat(G)):B.groupCollapsed(se):_e.title&&Fe?B.group.apply(B,["%c "+se].concat(G)):B.group(se)}catch{B.log(se)}var ie=R(Ye,Bt,[ze],"prevState"),ve=R(Ye,Bt,[Bt],"action"),he=R(Ye,Bt,[Ct,ze],"error"),ye=R(Ye,Bt,[$t],"nextState");if(ie)if(_e.prevState){var pe="color: "+_e.prevState(ze)+"; font-weight: bold";B[ie]("%c prev state",pe,ze)}else B[ie]("prev state",ze);if(ve)if(_e.action){var it="color: "+_e.action(Bt)+"; font-weight: bold";B[ve]("%c action    ",it,Bt)}else B[ve]("action    ",Bt);if(Ct&&he)if(_e.error){var xe="color: "+_e.error(Ct,ze)+"; font-weight: bold;";B[he]("%c error     ",xe,Ct)}else B[he]("error     ",Ct);if(ye)if(_e.nextState){var je="color: "+_e.nextState($t)+"; font-weight: bold";B[ye]("%c next state",je,$t)}else B[ye]("next state",$t);qe&&P(ze,$t,B,Sr);try{B.groupEnd()}catch{B.log("—— log end ——")}})}function j(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},N=Object.assign({},oe,O),B=N.logger,Q=N.stateTransformer,Y=N.errorTransformer,ne=N.predicate,ue=N.logErrors,_e=N.diffPredicate;if(typeof B>"u")return function(){return function(qe){return function(Fe){return qe(Fe)}}};if(O.getState&&O.dispatch)return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
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
`),function(){return function(qe){return function(Fe){return qe(Fe)}}};var Ye=[];return function(qe){var Fe=qe.getState;return function(Ne){return function(nt){if(typeof ne=="function"&&!ne(Fe,nt))return Ne(nt);var Oe={};Ye.push(Oe),Oe.started=re.now(),Oe.startedTime=new Date,Oe.prevState=Q(Fe()),Oe.action=nt;var Kt=void 0;if(ue)try{Kt=Ne(nt)}catch(ze){Oe.error=Y(ze)}else Kt=Ne(nt);Oe.took=re.now()-Oe.started,Oe.nextState=Q(Fe());var Ut=N.diff&&typeof _e=="function"?_e(Fe,nt):N.diff;if(F(Ye,Object.assign({},N,{diff:Ut})),Ye.length=0,Oe.error)throw Oe.error;return Kt}}}}var V,$,z=function(O,N){return new Array(N+1).join(O)},ee=function(O,N){return z("0",N-O.toString().length)+O},me=function(O){return ee(O.getHours(),2)+":"+ee(O.getMinutes(),2)+":"+ee(O.getSeconds(),2)+"."+ee(O.getMilliseconds(),3)},re=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance:Date,fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},U=function(O){if(Array.isArray(O)){for(var N=0,B=Array(O.length);N<O.length;N++)B[N]=O[N];return B}return Array.from(O)},te=[];V=(typeof li>"u"?"undefined":fe(li))==="object"&&li?li:typeof window<"u"?window:{},$=V.DeepDiff,$&&te.push(function(){typeof $<"u"&&V.DeepDiff===p&&(V.DeepDiff=$,$=void 0)}),r(a,i),r(l,i),r(u,i),r(d,i),Object.defineProperties(p,{diff:{value:p,enumerable:!0},observableDiff:{value:_,enumerable:!0},applyDiff:{value:y,enumerable:!0},applyChange:{value:x,enumerable:!0},revertChange:{value:C,enumerable:!0},isConflict:{value:function(){return typeof $<"u"},enumerable:!0},noConflict:{value:function(){return te&&(te.forEach(function(O){O()}),te=null),p},enumerable:!0}});var I={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},oe={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(O){return O},actionTransformer:function(O){return O},errorTransformer:function(O){return O},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},q=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},N=O.dispatch,B=O.getState;return typeof N=="function"||typeof B=="function"?j()({dispatch:N,getState:B}):void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`)};n.defaults=oe,n.createLogger=j,n.logger=q,n.default=q,Object.defineProperty(n,"__esModule",{value:!0})})})(Rz,Nu);Nu.createLogger();const zz=MR({reducer:{evsearchResult:QR}}),Az=e=>{if(e==="no_nb")return"no_nb";if(e==="en")return"en";if(e==="no_nn")return"no_nn"};JE(FC).init({lng:Az("no_nb"),fallbackLng:Tz("defaultLocale"),ns:["common"],defaultNS:"common",returnNull:!1},()=>{const e=new uE({defaultOptions:void 0});D0(document.getElementById("root")).render(ce(T.StrictMode,{children:ce(sP,{store:zz,children:ce(mE,{client:e,children:ce(Lz,{children:ce(bC,{router:Cz})})})})}))});
